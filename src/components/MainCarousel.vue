<template>
  <div class="carousel">
    <div
      class="carousel__slide a--fade"
      v-bind:class="slides[currentSlide].align"
      :style="slides[currentSlide].background"
    >
      <div class="container">
        <div class="row">
          <div class="col-6">
            <img src="" alt="" />
          </div>
          <div class="col-6">
            <h2>{{ slides[currentSlide].title }}</h2>
            <p>{{ slides[currentSlide].description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel__nav">
      <a
        class="carousel__nav--control"
        v-for="(slide, index) in slides"
        :key="index"
        @click="changeBanner(index)"
        v-bind:class="currentSlide === index ? 'active' : ''"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: "",
          title: "Notebook",
          description: "As melhores ofertas",
          align: "right",
          background:
            "background: linear-gradient(28deg, rgba(142,54,183,1) 0%, rgba(215,148,246,1) 100%);",
        },
        {
          image: "",
          title: "Smartphone",
          description: "Confira as útimas novidades",
          align: "left",
          background:
            "background: linear-gradient(28deg, rgba(54,142,183,1) 0%, rgba(148,245,246,1) 100%);",
        },
      ],
    };
  },

  methods: {
    changeBanner(sliderIndex) {
      this.currentSlide = sliderIndex;
      clearInterval();
      this.createSliderInterval();
    },

    createSliderInterval() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 5000);
    },
  },

  mounted() {
    this.createSliderInterval();
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 300px;

  .carousel__slide {
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;

    &.left {
      & > .container > .row {
        flex-direction: row-reverse;
      }

      div {
        text-align: left;
      }
    }
    &.right {
      div {
        text-align: right;
      }
    }

    div {
      flex: 1 0 0 auto;

      h2 {
        font-size: 48px;
        font-family: "SourceSansProBold", sans-serif;
      }
    }
  }

  .carousel__nav {
    display: flex;
    justify-content: center;
    .carousel__nav--control {
      &:not(:first-child) {
        margin-left: 4px;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #8e36b7;
        transition: background 0.25s;
      }
      &.active::after {
        background: #8e36b7;
      }
    }
  }
}
</style>