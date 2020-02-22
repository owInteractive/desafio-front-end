<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nome"
            placeholder=" "
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder=" "
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="cpf"
            :rules="cpfRules"
            label="CPF"
            placeholder=" "
            required
            outlined
          ></v-text-field>
          <v-row>
            <v-col cols="6" class="">
              <v-text-field
                v-model="birthDate"
                :rules="birthDateRules"
                label="Data de nascimento"
                placeholder="dd/mm/yyyy"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                cols="4	"
                v-model="phone"
                :rules="phoneRules"
                label="Telefone"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="cep"
            :rules="cepRules"
            label="CEP"
            placeholder=" "
            required
            outlined
            v-on:keyup="keymonitor"
            v-on:keydown="keymonitor"
          ></v-text-field>
          <v-row class="pt-0 pb-0">
            <v-col cols="8" class="pt-0 pb-0">
              <v-text-field
                v-model="street"
                :rules="streetRules"
                label="Endereço"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="pt-0 pb-0">
              <v-text-field
                v-model="number"
                :rules="numberRules"
                label="Número"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="pt-0 pb-0">
            <v-col cols="6" class="pt-0 pb-0">
              <v-text-field
                v-model="complement"
                label="Complemento"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class="pt-0 pb-0">
              <v-text-field
                v-model="neighborhood"
                :rules="neighborhoodRules"
                label="Bairro"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="pt-0 pb-0">
            <v-col cols="8" class="pb-0">
              <v-text-field
                v-model="city"
                :rules="cityRules"
                label="Cidade"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="4" class="pb-0">
              <v-text-field
                v-model="state"
                :rules="stateRules"
                label="Estado"
                placeholder=" "
                required
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!valid"
          color="#8D35B7"
          class="mr-4 white--text"
          @click="validate"
          right
        >
          Concluir compra
        </v-btn>
      </v-row>
    </v-form>

    <v-dialog v-model="dialog" width="400">
      <v-card class="pa-6">
        <v-card-text class="text-center">
          <v-icon size="100" class="light-green--text"
            >mdi-checkbox-marked-circle-outline
          </v-icon>
          <p>Seu cadastro foi solicitado com sucesso!</p>
          <router-link to="/"
            ><small style="color:#8D35B7"
              >&#8592; Voltar para home</small
            ></router-link
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CepService from "../services/CepService";

export default {
  name: "Checkout",
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    nameRules: [v => !!v || "Nome é obrigatório"],
    email: "",
    emailRules: [
      v => !!v || "E-mail é obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    cpf: "",
    cpfRules: [v => !!v || "CPF é obrigatório"],
    birthDate: "",
    birthDateRules: [v => !!v || "Data de nascimento é obrigatório"],
    phone: "",
    phoneRules: [v => !!v || "Telefone é obrigatório"],
    cep: "",
    cepRules: [v => !!v || "CEP é obrigatório"],
    street: "",
    streetRules: [v => !!v || "Endereço é obrigatório"],
    number: "",
    numberRules: [v => !!v || "Número é obrigatório"],
    complement: "",
    neighborhood: "",
    neighborhoodRules: [v => !!v || "Bairro é obrigatório"],
    city: "",
    cityRules: [v => !!v || "Cidade é obrigatório"],
    state: "",
    stateRules: [v => !!v || "Estado é obrigatório"]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
      } else {
        this.valid = false;
      }
    },
    getCEP() {
      let cep = this.cep;
      CepService.findCep(cep).then(response => {
        this.street = response.data.logradouro;
        this.neighborhood = response.data.bairro;
        this.city = response.data.localidade;
        this.state = response.data.uf;
      });
    },
    keymonitor(event) {
      if (event.keyCode == 9 || event.keyCode == 13) {
        this.getCEP();
      }
    }
  }
};
</script>
