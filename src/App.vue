import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

<template>
  <div id="app">
    <!-- main nav bar -->
    <div id="nav">
      <div id="content" class="columns is-mobile">
        <div class="column is-narrow">
          <router-link to="/">
            <img src="./assets/logo.png" />
          </router-link>
        </div>
        <div class="column is-centered" style="max-width: 700px;">
          <form @submit.prevent="search_universal">
            <b-input
              rounded
              v-model="search"
              placeholder="🔍 Tìm kiếm quả ngon"
              style="padding:2px; width: 100%;"
            ></b-input>
          </form>
        </div>
        <div class="column is-narrow right">
          <router-link v-if="!loggedIn" to="/login">👋 Đăng nhập</router-link>
          <router-link v-if="loggedIn" to="/user/info">👦 Tài khoản của bạn</router-link>
        </div>
      </div>
    </div>
    <!-- subtitle tabs -->
    <div id="sub-nav" v-if="home">
      <div id="sub-content" class="column is-two-thirds">
        <router-link to="/">🏡 Trang chủ</router-link>
        <router-link to="/auction/latest">🎇 Mới nhất</router-link>
        <router-link to="/fruit">🍑 Loại quả</router-link>
        <router-link to="/collection">📘 Bộ sưu tập</router-link>
      </div>
    </div>
    <div class="main-view" style="display: block; margin-top: 12px;">
      <transition name="moveUp">
        <router-view id="main-view" />
      </transition>
    </div>

    <div class="footer">
      <div class="footer-content columns is-2">
        <div class="column">
          <h2>OKOK</h2>
        </div>
        <div class="column">
          <h2>OKOK</h2>
        </div>
        <div class="column">
          <h2>OKOK</h2>
        </div>
        <div class="column">
          <h2>OKOK</h2>
        </div>
      </div>
    </div>
    <router-link to="/login">Login |</router-link>
    <router-link to="/resetpassword">pwđ</router-link>
    <router-link to="/userinformationaddress">add</router-link>
    <router-link to="/userinformationaccuracy">accuracy</router-link>
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
      home: true,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.user.token;
    },
  },
  watch: {
    "$route.currentRoute.path": function () {
      if(this.$route.currentRoute.path === '/' || this.$route.currentRoute.path === '/auction/latest'
      || this.$route.currentRoute.path === '/fruit' || this.$route.currentRoute.path === '/collection'){
        this.home = true
      } else {
        this.home = false
      }
    },
  },
  created() {
    this.routeWatcher = this.$watch(
      function () {
        return this.$route.currentRoute.path;
      },
      function (route) {
        if (
          route === "/" ||
          route === "/auction/latest" ||
          route === "/fruit" ||
          route === "/collection"
        ) {
          this.home = true;
        } else {
          this.home = false;
        }
      }
    );
  },
  methods: {
    logout() {
      let vm = this;

      this.$store.dispatch("LOGOUT").then(() => {
        vm.$router.push({ path: "/" });
      });
    },
    search_universal() {
      this.$store.dispatch("SEARCH", {
        keyword: this.search,
      });
    },
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

body {
  background-color: #fcfcfc;
}

// welcome
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  margin-top: 36px;
}

.welcome p {
  font-size: 23px;
  font-weight: 900;
}

.welcome .logo {
  height: 24px;
  margin-left: 10px;
}

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

// sub list title
.sub-list-title {
  font-family: "Merriweather";
  font-size: 19px;
  color: #707070;
  font-weight: 900;
  margin-bottom: 24px;
}

// filter title
.filter-title {
  font-size: 17px;
  font-family: "Roboto";
  font-weight: 700;
  color: #707070;
  margin-bottom: 16px;
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

// tab
.tab {
  font-family: "Merriweather";
  font-weight: 900;
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
  margin-top: -12px;
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
    font-size: 14px;
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
  background-color: #fcfcfc;
  width: 100%;

  #sub-content {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    padding-bottom: 0;
    max-width: 960px;
  }

  a {
    font-size: 16px;
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

// router link
.nav-tabs {
  margin-bottom: 12px;
}

.router-link {
  text-align: center;
  a {
    font-size: 23px;
    font-family: "Merriweather";
    font-weight: 900;
    color: #70707079;
    padding-bottom: 12px;

    &.router-link-exact-active {
      color: #b88cd8;
      border-bottom: #01d28e solid 2px;
    }
  }
}

.footer {
  margin-top: 80px;
}

// animation
.moveUp-enter-active {
  animation: fadeIn 0.25s ease-in;
}

@keyframes fadeIn {
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: fadeOut 0.125s ease-in;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
