<template>
  <div v-if="getProductsInBag.length > 0" class="cart container">    
    <div class="cart-table row">
      <table class="cart-table-item">
        <thead class="cart-table-item-header">
          <tr>
            <th></th>
            <th>Produtos</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody class="cart-table-item-body">
          <tr class="cart-table-item-body-tr" v-for="product in getProductsInBag" :key="product.id">
            <td class="cart-table-item-body-tr-garbage">
              <span @click="removeFromBag(product)">
                <GarbageIcon />
              </span>
            </td>       
            <td class="cart-table-item-body-tr-description">
              <span>{{ product.category }}</span>
              <span>{{ product.name }}</span>
            </td>
            <td class="cart-table-item-body-tr-quantity">
              <button :disabled="product.quantity <= 1" @click="() => $store.dispatch({type: 'products/decreaseProduct', product})">-</button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click="() => $store.dispatch({type: 'products/increaseProduct', product})">+</button>
            </td>
            <td class="cart-table-item-body-tr-value">
              <span class="value-description">{{ brazilianCurrency(product.price) }}</span> 
              &nbsp;à vista ou 10x {{ divideValue(product.price) }}
            </td>
            <td class="cart-table-item-body-tr-total">
              <span class="value-description">{{ brazilianCurrency(product.price * product.quantity) }}</span> 
              &nbsp;à vista ou 10x {{ divideValue(product.price * product.quantity) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cart-total row">      
      <div class="col-lg-3 offset-lg-6 cart-total-description">
        <p class="cart-total-description-text">Total à vista</p>
      </div>
      <div class="col-lg-3 cart-total-description">
        <p class="cart-total-description-value">{{ brazilianCurrency(this.orderTotal()) }}</p>
      </div>
    </div>
    <div class="cart-instalment row">
      <div class="col-lg-3 offset-lg-6 cart-instalment-description">
        <p class="cart-instalment-description-text">Total Parcelado</p>
      </div>
      <div class="col-lg-3 cart-instalment-description">
        <p class="cart-instalment-description-value">em até 
        <span class="cart-instalment-description-value-detailed">10x {{ divideValue(this.orderTotal()) }}</span> 
        (Total {{ brazilianCurrency(this.orderTotal()) }})
        </p>
      </div>
    </div>  
    <div class="cart-actions row">
      <div class="col-sm-12 col-lg-3 cart-actions-clear">
        <span @click="() => clearBag()">
          <GarbageIcon /> Limpar carrinho
        </span>       
      </div>
      <div class="col-sm-12 col-lg-3 offset-lg-3 cart-actions-buymore">
        <button @click="() => this.$router.push({ name: 'home' })">Continuar comprando</button>
      </div>
      <div class="col-sm-12 col-lg-3 cart-actions-buy">
        <button @click="() => this.$router.push({ name: 'checkout' })">Concluir compra</button>
      </div>
    </div>  
  </div> 
  <div v-else class="cart-empty container-fluid">
    <div class="cart-empty-item row">
      <div class="col-lg-4 offset-lg-4">
        <p>Seu carrinho está vazio</p>
        <router-link to="/">Voltar para home</router-link>
      </div>  
    </div>
  </div>
</template>

<script>
import GarbageIcon from '@/components/icons/GarbageIcon'
import globalMixin from '@/mixins/globalMixins'
import { mapGetters } from 'vuex'

export default {
  name: 'CartView',
  components: { GarbageIcon },
  mixins: [globalMixin], 
  computed: {    
    ...mapGetters("products", ["getProductsInBag"]),
  },
  methods: {
    orderTotal () {
      let total = 0
      this.getProductsInBag.forEach(item => {
        total += item.price * item.quantity
      })
      return total
    },
    removeFromBag (product) {
      this.$store.dispatch({type: 'products/removeFromBag', product})
    },
    clearBag () {   
      if (!confirm('Tem certeza que deseja remover todos os items do carrinho ?'))
        return 

      this.$store.dispatch({type: 'products/clearBag'})
    }
  },
  mounted () {
    console.log(this.getProductsInBag)    
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/variables.sass"
@import "@/assets/sass/mixins.sass"

.cart
  margin-top: 5%
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($dir: column, $ali: center) 
  
  .cart-table
    width: 100%

    .cart-table-item
      width: 100%     
      @include display-direction-justify-align($dir: column)

      @include media-medium-table()
        display: inline
      
      .cart-table-item-header
        width: 100%
        border-bottom: 1px solid $dark-color

        @include media-medium-table()
          display: none

        tr
          width: 100%         
          @include display-direction-justify-align($jus: space-around) 
          padding-bottom: 2%

          th            
            font-family: 'SourceSansBold', "sans-serif"
            text-transform: uppercase
            font-size: 1.1rem
          
          th:first-child
            width: 4%

          th:nth-child(3)
            width: 12%

          th:nth-child(2), th:nth-child(4), th:nth-child(5)
            width: 28%
        
      .cart-table-item-body       
        width: 100%
        border-bottom: 1px solid $dark-color        
        @include display-direction-justify-align($dir: column)

        @include media-medium-table()
          border-bottom: none
          @include display-direction-justify-align($dir: row, $jus: space-around)
          flex-wrap: wrap
                
        tr
          padding-top: 2% 
          padding-bottom: 2%
          width: 100%
          display: flex
          border-bottom: 1px solid $dark-color 

          @include media-medium-table()
            margin-top: 2%
            padding: 4% 0
            width: 48%
            box-shadow: 0 0 20px $grey-shadow-color
            border-bottom: none
            @include display-direction-justify-align($dir: column, $ali: center)

          @include media-small-table()
            width: 100%    

          @include media-default-table()          
            td
              width: 25%           
              display: flex               
            
            td:first-child
              width: 4%           

            td:nth-child(3)
              width: 12%          

            td:nth-child(2), td:nth-child(4), td:nth-child(5)
              width: 28%

            td:nth-child(4), td:nth-child(5)
              white-space: nowrap  
          
          .cart-table-item-body-tr-description
            @include display-direction-justify-align($dir: column)

            @include media-medium-table()
              @include display-direction-justify-align($dir: column, $ali: center)
            
            span
              font-family: 'SourceSansBold', "sans-serif"
              
            span:first-child
              color: $purple-color
              font-size: 0.9rem

              @include media-extra-small-table
                font-size: 0.7rem

            span:last-child
              font-size: 1.1rem

              @include media-extra-small-table
                font-size: 0.8rem                   

          .cart-table-item-body-tr-quantity            
            @include display-direction-justify-align($ali: center)
            
            @include media-medium-table()
              margin: 4% 0

            span
            cursor: pointer

            button       
              width: 22px
              height: 35px             
              @include display-direction-justify-align($jus: center, $ali: center)
              cursor: pointer
              font-size: 1.1rem
              border: 1px solid $grey-light-color
              background-color: $light-color

            .quantity
              @include display-direction-justify-align($jus: center, $ali: center)             
              width: 40px
              height: 35px       
              border: 1px solid $grey-light-color
              font-family: 'SourceSansBold', "sans-serif"

          .cart-table-item-body-tr-value, .cart-table-item-body-tr-total, .cart-table-item-body-tr-garbage
            @include display-direction-justify-align($ali: center)

            @include media-medium-table()
              display: inline

            @include media-extra-small-table
              font-size: 0.8rem
          
            .value-description              
              font-family: 'SourceSansBold', "sans-serif"             

          .cart-table-item-body-tr-garbage

            @include media-medium-table()
              margin-top: 3%
              order: 5
            
            span
              cursor: pointer
        
              svg
                width: 22px 
                height: 22px

                @include media-medium-table()
                  width: 30px 
                  height: 30px               
        
        tr:last-child
          border-bottom: none

  .cart-total
    width: 100%
    display: flex  
    padding-top: 2%
    padding-bottom: 1%      

    .cart-total-description     
      @include display-direction-justify-align($jus: flex-end, $ali: center)

      p
        font-family: 'SourceSansBold', "sans-serif"
        text-transform: uppercase
        padding: 0
        margin: 0

      .cart-total-description-text
        font-size: 1.1rem

      .cart-total-description-value
        font-size: 1.5rem
        color: $purple-color
  
  .cart-instalment
    width: 100%
    display: flex
    border-bottom: 1px solid $dark-color
    padding-top: 1%
    padding-bottom: 2% 

    .cart-instalment-description
      right: 0
      @include display-direction-justify-align($jus: flex-end, $ali: center)
          
      .cart-instalment-description-text
        font-family: 'SourceSansBold', "sans-serif"   
        text-transform: uppercase
        font-size: 1.1rem

      .cart-instalment-description-value
        margin-left: 50px

        .cart-instalment-description-value-detailed
          font-family: 'SourceSansBold', "sans-serif"

  .cart-actions   
    padding-top: 2%
    padding-bottom: 2%
    width: 100%
    display: flex    

    .cart-actions-clear   
      padding: 0
      @include display-direction-justify-align($ali: center)
      
      span
        cursor: pointer
        
        svg
          width: 18px 
          height: 18px        
    
    .cart-actions-buymore
      padding: 0 1% 0 0
      @include display-direction-justify-align($jus: center, $ali: center)
            
      button
        padding: 5%
        width: 100%
        border: none
        background-color: $grey-light-color
        color: $dark-color
        font-family: 'SourceSansBold', "sans-serif"

    .cart-actions-buy
      padding: 0 0 0 1%
      @include display-direction-justify-align($jus: center, $ali: center)      
      
      button
        padding: 5%
        width: 100%
        border: none
        background-color: $purple-color
        color: $light-color
        font-family: 'SourceSansBold', "sans-serif"

    .cart-actions-buymore, .cart-actions-buy
      @include media-md()
        padding: 0
        margin-top: 2%

      @include media-sm()
        padding: 0
        margin-top: 2%  

      @include media-xs()
        padding: 0
        margin-top: 2%    

.cart-empty    
  width: 100%
  min-height: 80%
  @include display-direction-justify-align($jus: center, $ali: center)

  .cart-empty-item
    width: 100%
    text-align: center

    a
      text-decoration: none
      font-family: 'SourceSansBold', "sans-serif"

</style>