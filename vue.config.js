module.exports = {
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_transitions.scss";
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/_mixins.scss";
          `
      }
    }
  }
};
