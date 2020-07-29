<template>
    <b-menu class="menu-information" v-model="activeTab">
    <b-menu-list>
      <b-menu-item tag="router-link" to="/userinformationtest" label="📜 Hồ sơ"></b-menu-item>
      <b-menu-item tag="router-link" to="/userinformationaddress" label="🏡 Địa chỉ"></b-menu-item>
      <b-menu-item tag="router-link" to="/userinformationaccuracy" label="🎟 Xác thực"></b-menu-item>
      <b-menu-item tag="router-link" to="/resetpassword" label="🔑 Mật khẩu"></b-menu-item>
    </b-menu-list>
    </b-menu>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.menu-information{
    width: 176px;
    height: 192px;
    color: #07D390;
    font-family: Roboto;
    font-size: 15px;
    /* margin: 0 36px 0 60px; */
}
</style>