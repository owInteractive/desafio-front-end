<template>
    <div class="content">
        <ValidationObserver ref="provider" v-slot="{ invalid }" tag="form" @submit.prevent="completePurchase()">
            <div class="container-flex">
                <div class="box-container">
                    <div class="form-group">
                        <ValidationProvider rules="required|min:3" name="Nome" v-slot="{ errors }">
                            <label class="label-form">Nome*</label>
                            <input class="input-text" v-model="user.name" type="text" autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider rules="email|required" name="E-mail" v-slot="{ errors }">
                            <label class="label-form">E-mail*</label>
                            <input class="input-text" v-model="user.email" type="text">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider rules="required|min:11" name="CPF" v-slot="{ errors }">
                            <label class="label-form">CPF*</label>
                            <the-mask class="input-text"
                                      required v-model="user.cpf" autocomplete="disabled"
                                      :mask="['###.###.###-##']"/>

                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>

                    <div class="form-group">
                        <ValidationProvider rules="required|min:8" name="Data de Nascimento"
                                            v-slot="{ errors }">
                            <label class="label-form">Data de Nascimento*</label>
                            <the-mask class="input-text"
                                      placeholder="dd/mm/yyyy"
                                      required v-model="user.dateOfBirth" autocomplete="disabled"
                                      :mask="['##/##/####']"/>

                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>

                        <ValidationProvider rules="required|min:10" name="Telefone"
                                            v-slot="{ errors }">
                            <label class="label-form">Telefone*</label>
                            <the-mask class="input-text"
                                      required v-model="user.telephone" autocomplete="disabled"
                                      :mask="['(##) ####-####', '(##) #####-####']"/>

                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="box-container">
                    <div class="form-group">
                        <ValidationProvider rules="required|min:9" name="CEP" v-slot="{ errors }">
                            <label class="label-form">CEP*</label>
                            <input v-model="address.zip" class="input-text" ref="zip" type="text"
                                   v-mask="['#####-###']"
                                   @keyup="validateZip"
                                   autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider rules="required|min:10" name="Endereço" v-slot="{ errors }">
                            <label class="label-form">Endereço*</label>
                            <input class="input-text" v-model="address.street" ref="street" type="text"
                                   autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>

                        <ValidationProvider rules="required|min:1" name="Número" v-slot="{ errors }">
                            <label class="label-form">Número*</label>
                            <input class="input-text" v-model="address.number" type="text" autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider name="Complemento" v-slot="{ errors }">
                            <label class="label-form">Complemento</label>
                            <input class="input-text" v-model="address.complement" type="text">
                        </ValidationProvider>

                        <ValidationProvider rules="required" name="Bairro" v-slot="{ errors }">
                            <label class="label-form">Bairro*</label>
                            <input class="input-text" v-model="address.district" type="text"
                                   autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group">
                        <ValidationProvider name="Cidade" rules="required" v-slot="{ errors }">
                            <label class="label-form">Cidade*</label>
                            <input class="input-text" v-model="address.city" type="text" autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>

                        <ValidationProvider rules="required" name="Estado" v-slot="{ errors }">
                            <label class="label-form">Estado*</label>
                            <input class="input-text" v-model="address.state" type="text" autocomplete="disabled">
                            <span class="error">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="form-group" style="float: right">
                        <span>
                            <button class="btn-purple">Concluir compra</button>
                        </span>
                    </div>
                </div>
            </div>
        </ValidationObserver>
    </div>
</template>
<script>
  import AddressService from '@/services/AddressService'

  export default {
    name: 'Checkout',
    data () {
      return {
        naoLocalizado: false,
        user: {
          name: '',
          email: '',
          cpf: '',
          dateOfBirth: '',
          telephone: '',
        },
        address: {
          zip: '',
          street: '',
          number: '',
          complement: '',
          district: '',
          city: '',
          state: '',
        }
      }
    },
    methods: {
      async completePurchase () {
        const isValid = await this.$refs.provider.validate();
        if (!isValid) {
          this.$swal('', 'Confira os campos.', 'error')
          return false
        }
        this.$swal({
          title: 'Seu cadastro foi solicitado com sucesso!',
          type: 'success',
          footer: '<a href="/"><-- VOLTAR PARA HOME</a>'
        })

      },
      validateZip () {
        let self = this
        self.naoLocalizado = false
        if (typeof self.address.zip !== 'undefined' && self.address.zip.length > 8) {
          self.$events.emit('DisplayBlockUI', true)
          AddressService.validateZip(self.address.zip).then((response) => {
            self.$events.emit('DisplayBlockUI', false)
            self.address = {}
            if (response.data.erro) {
              self.$refs.zip.$el.focus()
              self.naoLocalizado = true
              self.$swal('', 'Informe um CEP válido.', 'error')
              return
            }
            self.address.zip = response.data.cep
            self.address.street = response.data.logradouro
            self.address.number = ''
            self.address.complement = response.data.complemento
            self.address.district = response.data.bairro
            self.address.city = response.data.localidade
            self.address.state = response.data.uf
            self.$refs.street.$el.focus()
          }).catch(() => {
            self.$events.emit('DisplayBlockUI', false)
          })
        }
      }
    }
  }
</script>
