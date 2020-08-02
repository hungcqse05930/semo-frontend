<template>
  <div class="container">
    <!-- basic info -->
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <!-- subtitle tabs -->
    <div id="sub-nav">
      <div id="sub-content" class="column">
        <router-link to="/user/info">📝 Thông tin cá nhân</router-link>
        <router-link to="/user/product">📦 Sản phẩm bạn đăng</router-link>
        <router-link to="/user/bid">🛒 Sản phẩm bạn mua</router-link>
        <router-link to="/user/wallet">👛 Ví của bạn</router-link>
      </div>
    </div>
    <!--  -->
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
    <div class="welcome">
      <user-first-description></user-first-description>
    </div>
  </div>
</template>

<script>
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";

export default {
  name: "User",
  components: {
    UserFirstDescription,
  },
};
</script>

<style>
</style>