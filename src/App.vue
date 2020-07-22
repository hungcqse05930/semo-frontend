import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/login">l</router-link> 
      <router-link to="/registerstep2">r2</router-link>  
      <router-link to="/registerstep3">r3</router-link>  
      <router-link to="/registerstep4">r4</router-link>  
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
      <router-link to="/mediationdashboardhome">mediationdashboardhome</router-link>
    </div>
    <router-view id="main-view"/>
  </div>
</template>
  
<style lang="scss">
@import "~bulma/sass/utilities/_all";
#app {
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700;900&display=swap");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#main-view {
  margin: 0 auto;
  min-width: 1349px;
  max-width: 1366px;  
}

$primary: #01d28e;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
