<template>
  <section id="checkout">
    <form action class="checkout-content" @submit.prevent="showModal = true">
      <div class="user-data">
        <label for="name">Nome*</label>
        <input type="text" name="name" required />
        <label for="email">Email*</label>
        <input type="email" name="email" required />
        <label for="cpf">CPF*</label>
        <input type="text" name="cpf" required />
        <div class="two-col">
          <span class="first-col">
            <label for="born-date">Data de Nascimento*</label>
            <input type="date" name="born-date" id="born-date" required />
          </span>
          <span>
            <label for="phone">Telefone*</label>
            <input type="text" name="phone" id="phone" required />
          </span>
        </div>
      </div>

      <div class="user-address">
        <label for="cep">CEP*</label>
        <input
          type="text"
          name="cep"
          required
          id="inputCep"
          @input="searchCep"
          v-model="cep"
        />
        <div class="two-col">
          <span>
            <label for="street">Endereço*</label>
            <input type="text" name="street" id="street" required />
          </span>
          <span class="second-col size-field">
            <label for="addres-number">Number*</label>
            <input type="text" name="addres-number" id="number" required />
          </span>
        </div>

        <div class="two-col">
          <span>
            <label for="add-info">Complemento</label>
            <input type="text" name="add-info" id="add-info" />
          </span>
          <span class="second-col">
            <label for="district">Bairro*</label>
            <input type="text" name="district" id="district" required />
          </span>
        </div>

        <div class="two-col">
          <span>
            <label for="city">Cidade*</label>
            <input
              type="text"
              name="city"
              id="city"
              required
              v-model="address.localidade"
            />
          </span>

          <span class="second-col size-field">
            <label for="state">Estado*</label>
            <input
              type="text"
              name="state"
              id="state"
              required
              v-model="address.uf"
            />
          </span>
        </div>
        <input type="submit" id="show-modal" />
      </div>
    </form>
    <modal v-if="showModal" @close="showModal = false" id="modal-checkout">
      <button slot="header" class="close">X</button>
      <img
        src="../assets/images/check-circle-regular.svg"
        alt="checkout"
        slot="body"
      />
      <span slot="body">Seu cadastro foi solicitado com sucesso!</span>
      <router-link to="/" slot="footer">voltar para home</router-link>
    </modal>
  </section>
</template>

<script>
  import Modal from '@/components/Modal.vue';
  const axios = require('axios');
  export default{
      name: 'checkout',
      data() {
        return {
          cep: '',
          address: {},
          bairro: '',
          rua: '',
          complemento: '',
          cidade: '',
          estado: '',

        }
      },
      methods: {
        postCep() {
          axios.get(`https://viacep.com.br/ws/${this.cep}/json/`).then(response => {
            let address = response.data;
            this.bairro = address.bairro;
            this.rua = address.logradouro;
            this.complemento = address.complemento;
            this.cidade = address.localidade;
            this.estado = address.uf;
          })
          .catch(error => {
          })
        }
    
      },
  }
</script>


<style lang="scss" scoped>
.form-group {
  text-align: start !important;
}

.height {
  height: 70vh;
}

.btn-buy {
  background-color: #8e36b7;
  font-family: 'SourceSansPro-Regular';
  width: 300px;
  color: #fff;
}

@media (max-width: 770px) {
  .height {
    height: auto;
  }

  .btn-buy {
    margin-right: auto;
    margin-left: auto;
  }
}

</style>
