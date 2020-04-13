module.exports = {
    publicPath: '/desafio-ow-interactive/desafio-ow',
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import"@/assets/scss/style.scss";`
        }
      }
    }
  };
  