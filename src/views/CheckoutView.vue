<template>
  <div class="checkout container-fluid">
    <div class="row checkout-items">
      <div class="col-lg-6 checkout-items-group">
        <div class="row checkout-items-group-row">
          <div class="col-lg-12 checkout-items-group-row-input"> 
              <label for="">Nome*</label>
              <input type="text" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-12 checkout-items-group-row-input"> 
              <label for="">E-mail*</label>
              <input type="email" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-12 checkout-items-group-row-input"> 
              <label for="">CPF*</label>
              <input type="text" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-6 checkout-items-group-row-input"> 
              <label for="">Data de Nascimento**</label>
              <input type="text" />
          </div>
          <div class="col-lg-6 checkout-items-group-row-input"> 
              <label for="">Telefone*</label>
              <input type="tel" />
          </div>
        </div>        
      </div>
      <div class="col-lg-6 checkout-items-group">
        <div class="row checkout-items-group-row">
          <div class="col-lg-12 checkout-items-group-row-input"> 
              <label for="">CEP*</label>
              <input type="text" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-8 checkout-items-group-row-input"> 
              <label for="">Endereço*</label>
              <input type="text" />
          </div>
          <div class="col-lg-4 checkout-items-group-row-input"> 
              <label for="">Número*</label>
              <input type="text" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-6 checkout-items-group-row-input"> 
              <label for="">Complemento</label>
              <input type="text" />
          </div>
          <div class="col-lg-6 checkout-items-group-row-input"> 
              <label for="">Bairro*</label>
              <input type="text" />
          </div>
        </div>
        <div class="row checkout-items-group-row">
          <div class="col-lg-8 checkout-items-group-row-input"> 
              <label for="">Cidade*</label>
              <input type="text" />
          </div>
          <div class="col-lg-4 checkout-items-group-row-input"> 
              <label for="">Estado*</label>
              <input type="text" />
          </div>
        </div>       
      </div>
      <div class="col-lg-12 checkout-items-group">
        <div class="row checkout-items-group-row">
          <div class="col-lg-4 offset-lg-8 checkout-items-group-row-button">
            <button @click="actionForm">Concluir compra</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CheckoutView',
  methods: {
    actionForm () {
      
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

        .checkout-items-group-row-button

          button            
            width: 100%
            padding: 8px 0
            background-color: $purple-color      
            color: $light-color
            font-family: 'SourceSansBold', "sans-serif"

</style>