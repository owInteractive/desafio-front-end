<template>
  <div class="checkout container">
    <form @submit.prevent="handleSubmit">     
      <div class="row checkout-items">
        <div class="col-lg-6 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">Nome*</label>
                <input type="text" v-model="form.name" :class="$v.form.name.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
                />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">E-mail*</label>
                <input type="email" v-model="form.email" :class="$v.form.email.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
                />                
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">CPF*</label>
                <input type="text" v-model="form.cpf" :class="$v.form.cpf.$error ? 'border-red' : ''" 
                placeholder="Obrigatório | Formato: xxx.xxx.xxx-xx" v-mask="'###.###.###-##'"                 
                />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Data de Nascimento*</label>
                <input type="text" v-model="form.birth" :class="$v.form.birth.$error ? 'border-red' : ''" 
                placeholder="Obrigatório | Formato: xx/xx/xxxx" v-mask="'##/##/####'" 
                />               
            </div>
            <div class="col-lg-6 checkout-items-group-row-input"> 
                <label for="">Telefone*</label>
                <input type="tel" v-model="form.phone" :class="$v.form.phone.$error ? 'border-red' : ''" 
                placeholder="Obrigatório | Formato: (xx) xxxxx-xxxx" v-mask="'(##) #####-####'" 
                />                
            </div>
          </div>        
        </div>
        <div class="col-lg-6 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-12 checkout-items-group-row-input"> 
                <label for="">CEP*</label>
                <input type="text" v-model="form.cep" :class="$v.form.cep.$error ? 'border-red' : ''" 
                placeholder="Obrigatório | Formato: xxxxx-xxx" @blur="form.cep ? searchCep() : ''" 
                v-mask="'#####-###'" />               
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-8 checkout-items-group-row-input"> 
                <label for="">Endereço*</label>
                <input type="text" v-model="form.address" :class="$v.form.address.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
                />               
            </div>
            <div class="col-lg-4 checkout-items-group-row-input"> 
                <label for="">Número*</label>
                <input type="text" v-model="form.number" :class="$v.form.number.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
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
                placeholder="Obrigatório" 
                />                
            </div>
          </div>
          <div class="row checkout-items-group-row">
            <div class="col-lg-8 checkout-items-group-row-input"> 
                <label for="">Cidade*</label>
                <input type="text" v-model="form.city" :class="$v.form.city.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
                />                
            </div>
            <div class="col-lg-4 checkout-items-group-row-input"> 
                <label for="">Estado*</label>
                <input type="text" v-model="form.state" :class="$v.form.state.$error ? 'border-red' : ''" 
                placeholder="Obrigatório" 
                />                
            </div>
          </div>       
        </div>
        <div class="col-lg-12 checkout-items-group">
          <div class="row checkout-items-group-row">
            <div class="col-lg-8 checkout-items-group-row-button">
              <p v-if="warning.show" class="warning">{{ warning.text }}</p>
            </div>   
            <div class="col-lg-4 checkout-items-group-row-button">              
              <button type="submit">Concluir compra</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <AlertLayout v-if="showModal" :modalInfo="modalInfo" @closeModal="showModal = false" />
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import AlertLayout from '@/components/modals/AlertLayout.vue'
import { mapState } from 'vuex'

export default {
  name: 'CheckoutView',
  components: { AlertLayout },
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
      },
      showModal: false,
      modalInfo: {
        message: '',
        action: '',
        icon: 'img/icons/success.png',
      },
      warning: {
        show: false,
        text: ''
      },
    }
  },
  validations: {  
    form: {  
      name: { required },
      email: { required, email },
      cpf: { required, minLength: minLength(14) },
      birth: { required, minLength: minLength(10) },
      phone: { required, minLength: minLength(15) },
      cep: { required, minLength: minLength(9) },
      address: { required },
      number: { required },
      district: { required },
      city: { required },
      state: { required }
    }
  },
  computed: {    
    ...mapState("products", ["productsInBag"]),
  },
  methods: {
    handleSubmit () {
      this.$v.$touch()      
      if (this.$v.$invalid) {
        this.warning.show = true
        this.warning.text = '* Campo preenchido incorretamente'
        return
      }
      this.modalInfo.message = "Seu cadastro foi solicitado com sucesso!"  
      this.modalInfo.action = "Voltar para home"
      this.showModal = true
      this.$store.dispatch({type: 'products/clearBag'})
    },
    async searchCep () {    
      let cep = this.form.cep.trim().replace("-", "")     
      if ( cep == "" ) {
        return
      }

      await this.$http.listCep(cep)
      .then(response => {        
        this.form.address = response.data.logradouro
        this.form.district = response.data.bairro
        this.form.city = response.data.localidade
        this.form.state = response.data.uf
      })
      .catch(error => {
        this.warning.show = true
        this.warning.text = '* CEP não encontrado'
        this.clearAddress()
        console.log(error)
      })      
    },
    clearAddress () {
      this.form.cep = ""
      this.form.address = ""
      this.form.district = ""
      this.form.city = ""
      this.form.state = ""
    },
  },
  mounted () {
    if ( this.productsInBag.length === 0 )
      this.$router.push({name: 'home'})
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.checkout
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($jus: center, $ali: center) 
  
  .checkout-items
    @include media-md
      margin: 5% 0
    @include media-sm
      margin: 5% 0
    @include media-xs
      margin: 5% 0   
    
    .checkout-items-group     

      .checkout-items-group-row
        margin-bottom: 5%

        @include media-md
          margin-bottom: 0%
        @include media-sm
          margin-bottom: 0%
        @include media-xs
          margin-bottom: 0%

        .checkout-items-group-row-input

          @include media-md
            margin-bottom: 2%
          @include media-sm
            margin-bottom: 2%
          @include media-xs
            margin-bottom: 2%       

          input
            width: 100%
            padding: 6px 0          
          
          .border-red
            border: 2px solid $red-color

        .checkout-items-group-row-button
          margin-top: 2%

          .warning          
            font-family: 'SourceSansBold', "sans-serif"
            font-size: 0.8rem
            text-align: left
            color: $red-color

          button            
            width: 100%
            padding: 4%
            background-color: $purple-color      
            color: $light-color
            font-family: 'SourceSansBold', "sans-serif"
            border-radius: 4px

</style>