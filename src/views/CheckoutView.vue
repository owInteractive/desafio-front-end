<template>
  <div class="checkout-view">
    <section class="container checkout">
      <form @submit.prevent="completePurchase">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12">
                <div class="agroup">
                  <label for="">Nome *</label>
                  <input type="text" required v-model="infosUser.nome" />
                </div>
              </div>
              <div class="col-12">
                <div class="agroup">
                  <label for="">E-mail*</label>
                  <input type="email" required v-model="infosUser.email" />
                </div>
              </div>
              <div class="col-12">
                <div class="agroup">
                  <label for="">CPF*</label>
                  <input
                    type="text"
                    v-mask="'###.###.###-##'"
                    required
                    v-model="infosUser.cpf"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="agroup">
                  <label for="">Data de Nascimento*</label>
                  <input
                    type="date"
                    required
                    v-model="infosUser.dt_nascimento"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="agroup">
                  <label for="">Telefone*</label>
                  <input
                    type="text"
                    required
                    v-model="infosUser.telefone"
                    v-mask="'(##) ####-####'"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12">
                <div class="agroup">
                  <label for="">CEP*</label>
                  <input
                    type="text"
                    required
                    v-model="infosUser.cep"
                    @blur="getInfosCep"
                    v-mask="'##-###-###'"
                  />
                </div>
              </div>
              <div class="col-12 col-md-8">
                <div class="agroup">
                  <label for="">Endereço*</label>
                  <input
                    type="text"
                    required
                    readonly
                    v-model="infosUser.rua"
                  />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="agroup">
                  <label for="">Número*</label>
                  <input type="text" required v-model="infosUser.numero" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="agroup">
                  <label for="">Complemento</label>
                  <input type="text" v-model="infosUser.complemento" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="agroup">
                  <label for="">Bairro*</label>
                  <input type="text" required v-model="infosUser.bairro" />
                </div>
              </div>
              <div class="col-12 col-md-8">
                <div class="agroup">
                  <label for="">Cidade*</label>
                  <input
                    type="text"
                    required
                    readonly
                    v-model="infosUser.cidade"
                  />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="agroup">
                  <label for="">Estado*</label>
                  <input
                    type="text"
                    required
                    readonly
                    v-model="infosUser.estado"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-12 col-sm-2">
            <button class="button">Concluir compra</button>
          </div>
        </div>
      </form>
    </section>
    <ModalSuccess v-on="closeModal" v-if="modalSuccess"></ModalSuccess>
  </div>
</template>

<script>
import Axios from "axios";
import ModalSuccess from "../components/ModalSuccess.vue";
export default {
  components: {
    ModalSuccess,
  },
  data() {
    return {
      infosUser: {},
      modalSuccess: false,
    };
  },
  methods: {
    closeModal() {
      this.modalSuccess = false;
    },
    getInfosCep() {
      if (this.infosUser.cep) {
        let cep = this.infosUser.cep.replace("-", "");
        Axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => {
            this.infosUser = {
              ...this.infosUser,
              rua: response.data.logradouro,
              estado: response.data.uf,
              cidade: response.data.localidade,
              ...response.data,
            };
          })
          .catch(() => {
            this.$toast.error(
              "Tivemos dificuldades para buscar o endereço, por favor, tente novamente"
            );
          });
      } else {
        this.$toast.warning(
          "Por favor, informe um cep válido para buscar o endereço!"
        );
      }
    },
    async completePurchase() {
      this.modalSuccess = true;
      this.$store.dispatch("clearProductsInCart");
    },
  },
};
</script>
