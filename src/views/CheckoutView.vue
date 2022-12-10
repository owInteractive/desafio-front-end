<template>
  <div class="checkout container-fluid">
    <form @submit.prevent="handleSubmit">     
      <div class="row checkout-items">
        <div class="col-lg-6 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">Nome*</label>
                <input type="text" v-model="form.name" :class="$v.form.name.$error ? 'border-red' : ''" 
                :placeholder="$v.form.name.$error ? 'Obrigatório' : ''" 
                />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">E-mail*</label>
                <input type="email" v-model="form.email" :class="$v.form.email.$error ? 'border-red' : ''" 
                :placeholder="$v.form.email.$error ? 'Obrigatório' : ''" 
                />                
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">CPF*</label>
                <input type="text" v-model="form.cpf" :class="$v.form.cpf.$error ? 'border-red' : ''" 
                :placeholder="$v.form.cpf.$error ? 'Obrigatório' : ''" v-mask="'###.###.###-##'" 
                />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Data de Nascimento*</label>
                <input type="text" v-model="form.birth" :class="$v.form.birth.$error ? 'border-red' : ''" 
                :placeholder="$v.form.birth.$error ? 'Obrigatório' : ''" v-mask="'##/##/####'" 
                />               
            </div>
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Telefone*</label>
                <input type="tel" v-model="form.phone" :class="$v.form.phone.$error ? 'border-red' : ''" 
                :placeholder="$v.form.phone.$error ? 'Obrigatório' : ''" v-mask="'(##) #####-####'" 
                />                
            </div>
          </div>        
        </div>
        <div class="col-lg-6 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">CEP*</label>
                <input type="text" v-model="form.cep" :class="$v.form.cep.$error ? 'border-red' : ''" 
                :placeholder="$v.form.cep.$error ? 'Obrigatório' : ''" @blur="form.cep ? searchCep() : ''" 
                v-mask="'#####-###'" />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-8 checkout-items-group-row-input"> 
                <label for="">Endereço*</label>
                <input type="text" v-model="form.address" :class="$v.form.address.$error ? 'border-red' : ''" 
                :placeholder="$v.form.address.$error ? 'Obrigatório' : ''" 
                />               
            </div>
            <div class="col-lg-4 checkout-items-group-row-input"> 
                <label for="">Número*</label>
                <input type="text" v-model="form.number" :class="$v.form.number.$error ? 'border-red' : ''" 
                :placeholder="$v.form.number.$error ? 'Obrigatório' : ''" 
                />                
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Complemento</label>
                <input type="text" v-model="form.complement" />
            </div>
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Bairro*</label>
                <input type="text" v-model="form.district" :class="$v.form.district.$error ? 'border-red' : ''" 
                :placeholder="$v.form.district.$error ? 'Obrigatório' : ''" 
                />                
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-8 checkout-items-group-row-input"> 
                <label for="">Cidade*</label>
                <input type="text" v-model="form.city" :class="$v.form.city.$error ? 'border-red' : ''" 
                :placeholder="$v.form.city.$error ? 'Obrigatório' : ''" 
                />                
            </div>
            <div class="col-lg-4 checkout-items-group-row-input"> 
                <label for="">Estado*</label>
                <input type="text" v-model="form.state" :class="$v.form.state.$error ? 'border-red' : ''" 
                :placeholder="$v.form.state.$error ? 'Obrigatório' : ''" 
                />                
            </div>
          </div>       
        </div>
        <div class="col-lg-12 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-4 offset-lg-8 checkout-items-group-row-button">
              <button type="submit">Concluir compra</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'CheckoutView',
  data () {
    return {  
      form: {    
        name: '',
        email: '',
        cpf: '',
        birth: '',
        phone: '',
        cep: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: ''
      }   
    }
  },
  validations: {  
    form: {  
      name: { required },
      email: { required, email },
      cpf: { required },
      birth: { required },
      phone: { required },
      cep: { required },
      address: { required },
      number: { required },
      district: { required },
      city: { required },
      state: { required }
    }
  },
  methods: {
    handleSubmit () {
      this.$v.$touch()      
      if (this.$v.$invalid) {       
        return
      }
      alert("Usuário Cadastrado com Sucesso")      
    },
    async searchCep () {    
      let cep = this.form.cep.trim().replace("-", "")     
      if ( cep == "" ) 
        return

      await this.$http.listCep(cep)
      .then(response => {        
        this.form.address = response.data.logradouro
        this.form.district = response.data.bairro
        this.form.city = response.data.localidade
        this.form.state = response.data.uf
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.checkout
  width: 60%
  min-height: 80%
  display: flex  
  justify-content: center
  align-items: center

  .checkout-items
    
    .checkout-items-group     

      .checkout-items-group-row
        margin-bottom: 5%

        .checkout-items-group-row-input       

          input
            width: 100%
            padding: 6px 0          
          
          .border-red
            border: 2px solid $red-color

        .checkout-items-group-row-button
          margin-top: 2%

          button            
            width: 100%
            padding: 8px 0
            background-color: $purple-color      
            color: $light-color
            font-family: 'SourceSansBold', "sans-serif"

</style>