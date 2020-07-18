<template>
  <div class="container">
    <div class="wrap">
      <div class="content-left">
      <ContentLeftPicture />
      </div>
      <div class="content-right">
        <LoginAndRegister />
        <!-- <ContentLast /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import NextButton from "../components/Auth/NextButton.vue";
// import ContentLast from "../components/Auth/ContentLast.vue";
import ContentLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import LoginAndRegister from "../components/Auth/LoginAndRegister";
export default {
  name: "login",
  components: {
    // NextButton,
    // ContentLast,
    ContentLeftPicture,
    LoginAndRegister
  }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  width: 1366px;
  display: flex;
}
.content-right {
  padding-left: 100px;
}
/* .content-left {
  padding-left: 0px;
} */
</style>