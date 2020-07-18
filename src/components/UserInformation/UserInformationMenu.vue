<template>
    <b-menu class="menu-information">
    <b-menu-list>
      <b-menu-item icon="information-outline" tag="router-link" to="/userinformationfile" label="📜 Hồ sơ">
      </b-menu-item>
      <b-menu-item icon="information-outline" tag="router-link" to="/userinformationaddress" label="🏡 Địa chỉ"></b-menu-item>
      <b-menu-item icon="information-outline" label="🎟 Xác thực"></b-menu-item>
      <b-menu-item icon="information-outline" tag="router-link" to="/resetpassword" label="🔑 Mật khẩu"></b-menu-item>
    </b-menu-list>
    </b-menu>
</template>
<style scoped>
.menu-information{
    width: 176px;
    height: 192px;
    color: #07D390;
    font-family: Roboto;
    font-size: 15px;
    margin: 0 36px 0 60px;
}
</style>