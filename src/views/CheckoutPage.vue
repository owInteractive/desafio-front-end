<template>
  <section class="container checkout">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12">
              <div class="checkout__group">
                <label for="">Nome *</label>
                <input
                  type="text"
                  v-model="v$.name.$model"
                  v-maska="{ mask: 'S*' }"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="checkout__group">
                <label for="">E-mail *</label>
                <input type="email" v-model="v$.email.$model" />
              </div>
            </div>
            <div class="col-12">
              <div class="checkout__group">
                <label for="">CPF *</label>
                <input
                  type="text"
                  v-model="v$.cpf.$model"
                  v-maska="'###.###.###-##'"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="checkout__group">
                <label for="">Data de Nascimento *</label>
                <input type="date" v-model="v$.birthday.$model" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="checkout__group">
                <label for="">Telefone *</label>
                <input
                  type="text"
                  v-model="v$.tel.$model"
                  v-maska="'(##) #####-####'"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="row">
            <div class="col-12">
              <div class="checkout__group">
                <label for="">CEP *</label>
                <input
                  type="text"
                  v-maska="'#####-###'"
                  v-model="v$.address.cep.$model"
                  @change="getCep"
                />
                <span v-if="cepError">CEP não encontrado!</span>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="checkout__group">
                <label for="">Endereço *</label>
                <input
                  type="text"
                  v-model="v$.address.completeAddress.$model"
                />
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="checkout__group">
                <label for="">Número *</label>
                <input type="text" v-model="v$.address.number.$model" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="checkout__group">
                <label for="">Complemento</label>
                <input type="text" v-model="v$.address.complement.$model" />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="checkout__group">
                <label for="">Bairro *</label>
                <input type="text" v-model="v$.address.district.$model" />
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="checkout__group">
                <label for="">Cidade *</label>
                <input type="text" v-model="v$.address.city.$model" />
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="checkout__group">
                <label for="">Estado *</label>
                <input type="text" v-model="v$.address.state.$model" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-end">
        <div class="col-12 col-sm-2">
          <button :disabled="v$.$invalid" class="checkout__button">
            Concluir compra
          </button>
        </div>
      </div>
    </form>
  </section>
  <CheckoutSuccess v-on="closeModal" v-if="viewSuccessModal"></CheckoutSuccess>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import ViaCepAPI from "@/services/viacep";
import CheckoutSuccess from "@/components/CheckoutSuccess.vue";

export default {
  components: {
    CheckoutSuccess,
  },

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      name: "",
      email: "",
      cpf: "",
      birthday: "",
      tel: "",
      address: {
        cep: "",
        completeAddress: "",
        number: "",
        complement: "",
        district: "",
        city: "",
        state: "",
      },
      cepError: false,
      viewSuccessModal: false,
    };
  },

  validations() {
    return {
      name: { required },
      email: { required, email },
      cpf: { required },
      birthday: { required },
      tel: { required },
      address: {
        cep: { required },
        completeAddress: { required },
        number: { required },
        complement: {},
        district: { required },
        city: { required },
        state: { required },
      },
    };
  },

  methods: {
    closeModal() {
      this.viewSuccessModal = false;
    },

    getCep() {
      ViaCepAPI.getCep(this.address.cep).then((response) => {
        if (!response.data.erro) {
          this.cepError = false;
          const { bairro, complemento, localidade, logradouro, uf, cep } =
            response.data;
          this.address = {
            cep: cep,
            completeAddress: logradouro,
            complement: complemento,
            district: bairro,
            city: localidade,
            state: uf,
          };
        } else {
          this.cepError = true;
        }
        console.log(response);
      });
    },

    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (isFormCorrect) {
        this.viewSuccessModal = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  flex: 1;
  margin-top: 64px;
  &__group {
    margin-top: 24px;
    label {
      font-weight: 600;
      display: block;
      color: #434343;
    }
    input {
      color: #434343;
      width: 100%;
      outline: none;
      border: 1px solid #909090;
      border-radius: 4px;
      padding: 4px 8px;
    }
    span {
      font-size: 12px;
      color: #c31717;
    }
  }
  &__button {
    width: 100%;
    border-radius: 4px;
    padding: 8px 16px;
    background: #8e36b7;
    border: 1px solid #8e36b7;
    color: #fff;
    margin-top: 24px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>