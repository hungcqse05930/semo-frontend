<template>
  <div id="app">
      <CreateHeader/>
      <CreateChooseProduct/>
  </div>
</template>

<script>
import CreateHeader from "../components/CreateNewProduct/CreateHeader.vue";
import CreateChooseProduct from "../components/CreateNewProduct/CreateChooseProduct.vue";


export default {
  name: "App",
  components: {
    CreateHeader,
    CreateChooseProduct,
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

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.search-result {
  display: inline-flex;
  justify-content: space-between;
  padding: 0 30px;
}

.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}

.product-item {
  padding: 12px;
}

.users {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}

.user-item {
  padding: 12px;
}
</style>
