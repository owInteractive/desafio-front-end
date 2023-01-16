<template lang="pug">
    LayoutDefault
        main.container
            section.page-section
                form.checkout-form.mx-12(@submit.prevent="sendForm")
                    .checkout-form__cols
                        .checkout-form__field.mx-12
                            label.checkout-form__label(for="nome-form") Nome*
                            input(id="nome-form" type="text" required v-model="nome")

                        .checkout-form__field.mx-12
                            label.checkout-form__label(for="email-form") E-mail*
                            input(id="email-form" type="email" required v-model="email")

                        .checkout-form__field.mx-12
                            label.checkout-form__label(for="cpf-form") CPF*
                            input(id="cpf-form" type="tel" required v-model="cpf" v-mask="'###.###.###-##'")
                            span.checkout-form__invalid-field(v-if="erro_cpf") Por favor, digite um CPF válido


                        .checkout-form__divide.-half-to-half
                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="data-form") Data de Nascimento*
                                input(id="data-form" type="date" required v-model="data")

                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="tel-form") Telefone*
                                input(
                                    id="tel-form" 
                                    type="tel" 
                                    required 
                                    v-model="telefone" 
                                    v-mask="['(##) ####-####', '(##) #####-####']"
                                    minlength="14" 
                                    maxlength="15"
                                )

                    .checkout-form__cols
                        .checkout-form__field.mx-12
                            label.checkout-form__label(for="cep-form") CEP*
                            input(id="cep-form" type="tel" required v-model="cep" v-mask="'#####-###'")
                            span.checkout-form__invalid-field(v-if="erro_cep") Por favor, digite um CEP válido

                        .checkout-form__divide.-one-eight
                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="endereco-form") Endereço*
                                input(id="endereco-form" type="text" required v-model="endereco")

                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="number-form") Número*
                                input(id="number-form" type="tel" required v-model="numero")

                        .checkout-form__divide.-half-to-half
                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="complemento-form") Complemento
                                input(id="complemento-form" type="text" v-model="complemento")

                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="bairro-form") Bairro*
                                input(id="bairro-form" type="text" v-model="bairro")


                        .checkout-form__divide.-one-eight
                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="cidade-form") Cidade*
                                input(id="cidade-form" type="text" required v-model="cidade")

                            .checkout-form__field.mx-12
                                label.checkout-form__label(for="estado-form") Estado*
                                input(id="uf-form" type="text" required v-model="uf" v-mask="'AA'" minlength="2")

                        button.checkout-form__btn(v-if="btnDisable" disabled) Concluir compra
                        button.checkout-form__btn(v-else) Concluir compra

        ModalSuccess(v-if="modal_show" v-on:close="toggleModal")                


</template>

<script>
import LayoutDefault from '@/components/Layouts/LayoutDefault'
import ModalSuccess from '@/components/ModalSuccess'

export default {
    name: 'Checkout',
    components: {
        LayoutDefault,
        ModalSuccess
    },
    data(){
        return {
            nome:        '',
            email:       '',
            cpf:         '',
            data:        '',
            telefone:    '',
            cep:         '',
            endereco:    '',
            numero:      '',
            complemento: '',
            bairro:      '',
            cidade:      '',
            uf:          '',
            erro_cep: false,
            erro_cpf: false,

            modal_show: false,
        }
    },
    methods: {
        request_cep(cep_val) {
            if(!cep_val) return
            const cep = cep_val.replace(/\D/g, '')

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((r) => r.json())
                .then((address) => {
                    if(address.erro) {
                        this.erro_cep = true
                    } else {
                        this.erro_cep = false
                        this.endereco = address.logradouro
                        
                        this.bairro = address.bairro
                        this.cidade = address.localidade
                        this.uf = address.uf
                    }
                })
                .catch(_ => {
                    this.erro_cep = false
                })
        },
        valida_cpf(){
            const cpf = this.cpf.replace(/\D/g, '')
            const pri = eval("cpf.substring(0,3)")
            const seg = eval("cpf.substring(3,6)")
            const ter = eval("cpf.substring(6,9)")
            const qua = eval("cpf.substring(9,11)")

            const cpf_prefix = cpf.substr(0, 9)
            const dv = cpf.substr(9, 2)
            let invalid = false
            let d1 = 0


            for (let i = 0; i < 9; i++) {
                d1 += cpf_prefix.charAt(i)*(10-i)                
            }

            if (d1 == 0) invalid = true;

            d1 = 11 - (d1 % 11);
            if (d1 > 9) d1 = 0;

            if (dv.charAt(0) != d1) invalid = true;

            d1 *= 2;
            for (let i = 0; i < 9; i++){
               d1 += cpf_prefix.charAt(i)*(11-i);
            }

            d1 = 11 - (d1 % 11);
            if (d1 > 9) d1 = 0;

            if (dv.charAt(1) != d1) invalid = true;

            this.erro_cpf = invalid
        },
        toggleModal() {
            this.modal_show = ! this.modal_show
        },
        resetForm() {
            this.nome = ''
            this.email = ''
            this.cpf = ''
            this.data = ''
            this.telefone = ''
            this.cep = ''
            this.endereco = ''
            this.numero = ''
            this.complemento = ''
            this.bairro = ''
            this.cidade = ''
            this.uf = ''
            this.erro_cep = false
            this.erro_cpf = false
        },
        sendForm() {
            this.toggleModal()
            this.resetForm()

            this.$store.dispatch("cart/action_clean_cart", {});
        }
    },
    watch: {
        cep() {
            if(this.cep.length > 7) {
                this.request_cep(this.cep)
            }
        },
        cpf() {
            if(this.cpf.length > 0) {
                this.valida_cpf()

            }
        }
        
    },
    computed: {
        btnDisable() {
            if(this.nome === '') return true
            if(this.email === '') return true
            if(this.cpf === '') return true
            if(this.data === '') return true
            if(this.telefone === '') return true
            if(this.cep === '') return true
            if(this.endereco === '') return true
            if(this.numero === '') return true
            if(this.bairro === '') return true
            if(this.cidade === '') return true
            if(this.uf === '') return true
            if(this.erro_cep) return true
            if(this.erro_cpf) return true
            if(this.cep.length < 9) return true
            if(this.cpf.length < 14) return true
            if(this.telefone.length < 14) return true
            if(this.email.indexOf('@') < 0) return true
            
            return false
        }
    }
    
}
</script>