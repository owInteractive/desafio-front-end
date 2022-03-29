<template>
  <div class="modal">
    <div class="modal__overlay" @click="closeModal()"></div>
    <div class="modal__content">
      <div class="modal__content__icon">
        <img src="../assets/confirmed.png" alt="" srcset="" />
      </div>
      <h2>Seu cadastro foi solicitado com sucesso!</h2>
      <router-link to="/">
        <svg
          width="20"
          height="13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#a)">
            <path
              d="M19.075 5.35H2.947l3.848-3.848a.862.862 0 1 0-1.22-1.22L.253 5.602a.863.863 0 0 0 0 1.22l5.322 5.323a.86.86 0 0 0 1.22 0 .863.863 0 0 0 0-1.22l-3.848-3.85h16.128a.863.863 0 0 0 0-1.725Z"
              fill="#8E36B7"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h20v12.461H0z" />
            </clipPath>
          </defs>
        </svg>
        Voltar para home
      </router-link>
    </div>
  </div>
</template>

<script>
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

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.8);
  }

  &__content {
    z-index: 999;
    text-align: center;
    max-width: 550px;
    height: auto;
    width: 100%;
    border-radius: 3px;
    padding: 75px 0 55px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;

    &__icon {
      margin-bottom: 30px;
    }

    h2 {
      margin-bottom: 30px;
      color: #545454;
      font-weight: 400;
      font-size: 26px;
    }

    svg {
      width: 30px;
    }

    a {
      text-transform: uppercase;
      color: #8e36b7;
      &:hover {
        color: darken(#8e36b7, 20%);
      }
    }
  }
}
</style>