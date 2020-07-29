import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

<template>
  <div id="app">
    <div id="nav">
      <div id="content" class="columns">
        <div class="column is-3">
          <router-link to="/">
            <img src="./assets/logo.png" />
          </router-link>
        </div>
        <div class="column is-6">
          <b-input
            rounded
            v-model="search"
            v-if="home"
            placeholder="🔍 Tìm kiếm quả ngon"
            style="padding:2px;"
          ></b-input>
        </div>
        <div class="column is-3 right">
          <router-link to="/login" @click="home = false">👋 Đăng nhập</router-link>
        </div>
      </div>
    </div>
    <router-view id="main-view" />

    <!-- <router-link to="/about">About |</router-link>
    <router-link to="/login">Login |</router-link>
    <router-link to="/registerstep2">r2 |</router-link>
    <router-link to="/registerstep3">r3 |</router-link>
    <router-link to="/registerstep4">r4 |</router-link>
    <router-link to="/registerstep5">r5</router-link>
    <router-link to="/registerstep6">r6</router-link>
    <router-link to="/registerstep7">r7</router-link>
    <router-link to="/userinformationfile">njlbh</router-link>
    <router-link to="/resetpassword">pwđ</router-link>
    <router-link to="/userinformationaddress">add</router-link>
    <router-link to="/userinformationaccuracy">accuracy</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/createnewproduct">CNP</router-link>
    <router-link to="/createnewproductfortree">CNPFT</router-link>
    <router-link to="/mediationdashboardproduct">mediationproduct</router-link>
    <router-link to="/cencorproductmediation">Cencor</router-link>
    <router-link to="/mediationdashboardnameproduct">mediatioinNamePro</router-link>
    <router-link to="/placebid">PB</router-link>
    <router-link to="/mediationdashboardhome">mediatioinhome</router-link>
    <router-link to="/createnewproductaddproduct">newPro</router-link>
    <router-link to="/createnewproductsuccess">SucPRO</router-link>
    <router-link to="/createnewproductnotification">NotiPRO</router-link>
    <router-link to="/affair">affair</router-link>
    <router-link to="/affaireditcontract">editCT</router-link>

    <router-link to="/userbidauction">BidAuctions</router-link>-->
  </div>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {
      home: true,
      search: ''
    };
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
#app {
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700;900&display=swap");
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  z-index: 1;
  padding: 0 60px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff99;
  backdrop-filter: saturate(180%) blur(40px);
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  img {
    height: 36px;
  }

  #content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}


$primary: #01d28e;
$primary-invert: findColorInvert($primary);
$primary-purple: #B88CD8;
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
  "twitter": (
    $twitter,
    $twitter-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
