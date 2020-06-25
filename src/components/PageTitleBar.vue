<template>
  <nav class="title-bar-container">
    <div id="title-bar-content" class="columns">
      <div class="column is-one-quarter">
        <img id="logo" src="../assets/logo.png" />
      </div>
      <div class="column is-half">
        <b-input icon="magnify" rounded></b-input>
      </div>
      <div class="column is-one-quarter">
        <div id="functions-container">
          <b-button icon-right="account">Đăng nhập</b-button>
        </div>
      </div>
    </div>
  </nav>

  <!-- <div class="title-content columns">
      <div class="column is-one-quarter">
        <img id="logo" src="../assets/logo.png" />
      </div>
      <div class="column is-half">
        <b-input id="search-bar" placeholder="Default" icon="magnify" rounded></b-input>
      </div>
      <div class="column is-one-quarter">
        <div class="functions"></div>
      </div>
    </div>
  </div>-->
</template>

<script>
export default {
  name: "PageTitleBar",
};
</script>

<style scoped>
.title-bar-container {
  width: 100%;
  height: 58px;
  top: 0;
  position: sticky;
  z-index: 1;
  background: rgba(255,255,255,0.8);
  backdrop-filter: saturate(180%) blur(24px);
}

#title-bar-content {
  max-width: 1344px;
  margin: 0 auto;
  padding: 0 60px;
  align-items: center;
}

.column {
  padding: 0 !important;
}
/* .title-container {
    width: 100%;
    height: 68px;
    margin: 0 auto;
}

.columns {
    max-width: 1266px;
    margin: 0 auto;
} */

#logo {
  width: 120px;
  height: 40px;
  margin: 6px 0;
}

#functions-container {
  float: right !important;
}
</style>