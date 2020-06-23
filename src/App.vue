<template>
  <div id="app">
    <div class="title">
      <page-title-bar />
      <page-subtitle-bar />
    </div>
  </div>
</template>

<script>
import PageTitleBar from "./components/PageTitleBar.vue";
import PageSubtitleBar from "./components/PageSubtitleBar.vue";

export default {
  name: "App",
  components: {
    PageTitleBar,
    PageSubtitleBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap");
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
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