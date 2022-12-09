<template>
  <div class="modal">
    <div class="overlay" @click="closeModal()"></div>
    <div class="content">
      <div class="icon">
        <img
          class="img-confirmed"
          src="../assets/resources/images/img_confirmed.png"
          alt="Imagem de confirmação"
        />
      </div>
      <h2>Cadastro solicitado com sucesso!</h2>
      <router-link to="/">
        <img
          class="img-back-home"
          src="../assets/resources/icons/left-arrow.svg"
          alt="Voltar ao incio"
        />
        Voltar para home
      </router-link>
    </div>
  </div>
</template>

<script>
import "../assets/css/successModal.scss";
export default {
  data() {
    return {
      viewModal: true,
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", this.viewModal);
    },
  },
};
</script>
