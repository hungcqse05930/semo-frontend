<template>
  <div id="app">
      <Header/>
      <CencorProduct/>
  </div>
</template>

<script>
import Header from "../components/CencorProductMediation/Header.vue";
import CencorProduct from "../components/CencorProductMediation/CencorProduct.vue";

export default {
  name: "App",
  components: {
    Header,
    CencorProduct,
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
#app {
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700;900&display=swap");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  /* margin-top: 10px; */
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}




</style>
