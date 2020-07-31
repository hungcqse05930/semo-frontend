import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

<template>
  <div id="app">
    <!-- main nav bar -->
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
            v-if="isHome"
            placeholder="🔍 Tìm kiếm quả ngon"
            style="padding:2px;"
          ></b-input>
        </div>
        <div class="column is-3 right">
          <router-link v-if="!loggedIn && isHome" to="/login">👋 Đăng nhập</router-link>
          <router-link v-if="loggedIn && isHome" to="/user">👦 Tài khoản của bạn</router-link>
        </div>
      </div>
    </div>

    <!-- subtitle tabs -->
    <div id="sub-nav" v-if="isHome">
      <div
        id="sub-content"
        class="column is-two-thirds"
        style="display: flex; justify-content: space-between; padding-bottom: 0;"
      >
        <router-link to="/">🏡 Trang chủ</router-link>
        <router-link to="/auction/latest">🎇 Mới nhất</router-link>
        <router-link to="/fruit">🍑 Loại quả</router-link>
        <router-link to="/collection">📘 Bộ sưu tập</router-link>
      </div>
    </div>

    <div style="display: block; margin-top: 12px;">
      <router-view id="main-view" />
    </div>
    <router-link to="/about">About |</router-link>
    <router-link to="/login">Login |</router-link>
    <router-link to="/registerstep2">r2 |</router-link>
    <router-link to="/registerstep3">r3 |</router-link>
    <router-link to="/registerstep4">r4 |</router-link>
    <router-link to="/registerstep5">r5</router-link>
    <router-link to="/registerstep6">r6</router-link>
    <router-link to="/registerstep7">r7</router-link>
    <!-- <router-link to="/userinformationfile">njlbh</router-link> -->
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
    <!-- <router-link to="/mediationdashboardhome">mediatioinhome</router-link> -->
    <router-link to="/createnewproductaddproduct">newPro</router-link>
    <router-link to="/createnewproductsuccess">SucPRO</router-link>
    <router-link to="/createnewproductnotification">NotiPRO</router-link>
    <router-link to="/affair">affair</router-link>
    <router-link to="/affaireditcontract">editCT</router-link>
    <router-link to="/userbidauction">BidAuctions</router-link>
    <router-link to="/userwallet">Wallet</router-link>
    <router-link to="/userbidcontract">BidContracts</router-link>
    <router-link to="/userbidbuy">userbidbuy</router-link>
    <router-link to="/userinformationtest">test</router-link>
    <router-link to="/adminwallet">adwallet</router-link>
    <b-button @click="logout">Log out</b-button>
  </div>
</template>
  
<script>
export default {
  name: "App",
  data() {
    return {
      search: "",
      curPath: this.$router.currentRoute.path,
      isHome: true,
    };
  },
  watch: {
    curPath() {
      console.log(this.curPath);
      switch (this.$router.currentRoute.path) {
        case "/":
          this.isHome = true;
          break;
        case "/auction/latest":
          this.isHome = true;
          break;
        case "/fruit":
          this.isHome = true;
          break;
        case "/collection":
          this.isHome = true;
          break;
      }
    },
  },
  computed: {
    loggedIn() {
      return this.$store.state.token;
    },
    // isHome() {
    //   let isHome = false;
    //   switch (this.$router.currentRoute.path) {
    //     case "/":
    //       isHome = true;
    //       break;
    //     case "/auction/latest":
    //       isHome = true;
    //       break;
    //     case "/fruit":
    //       isHome = true;
    //       break;
    //     case "/collection":
    //       isHome = true;
    //       break;
    //   }

    //   return isHome;
    // },
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    },
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
// list title
.list-title {
  font-family: "Merriweather";
  font-size: 25px;
  color: #b88cd8;
  font-weight: 900;
  border-bottom: #01d28e solid 3px;
  width: fit-content;
}

.list-title-inactive {
  font-family: "Merriweather";
  font-size: 25px;
  font-weight: 900;
  color: #70707075;
  width: fit-content;
}

// scrollbar
/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #70707024;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #01d28e;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #01d28e;
}

// app
#app {
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700;900&display=swap");
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main-view {
  margin-top: 36px;
}

#nav {
  z-index: 1;
  // padding: 0 60px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 68px;
  background-color: #ffffff99;
  backdrop-filter: saturate(180%) blur(200px) brightness(150%);
  display: flex;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #07d390;
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

#sub-nav {
  position: sticky;
  top: 68px;
  z-index: 1;
  background-color: #ffffff99;
  backdrop-filter: saturate(180%) blur(200px) brightness(150%);
  width: 100%;

  #sub-content {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  a {
    font-size: 18px;
    font-family: "Merriweather";
    font-weight: bold;
    color: #70707079;
    padding-bottom: 12px;

    &.router-link-exact-active {
      color: #07d390;
      border-bottom: #01d28e solid 2px;
    }
  }
}

$primary: #01d28e;
$primary-invert: findColorInvert($primary);
$primary-purple: #b88cd8;
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "green": (
    $primary,
    $primary-purple,
  ),
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
// @import "~buefy/src/scss/buefy";
</style>
