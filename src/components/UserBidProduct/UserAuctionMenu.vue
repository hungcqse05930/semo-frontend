<template>
    <b-menu class="menu-information">
    <b-menu-list>
      <b-menu-item tag="router-link" to="/userbidauction" label="💸 Đang đấu giá"></b-menu-item>
      <b-menu-item tag="router-link" to="/userbidcontract" label="🤝 Đang giao kèo"></b-menu-item>
      <b-menu-item tag="router-link" to="/userbidbuy" label="💰 Đã mua"></b-menu-item>
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