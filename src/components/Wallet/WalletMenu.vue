<template>
  <div class="menu">
    <b-menu class="menu-container" activable>
      <b-menu-list :active="isActive">
        <b-menu-item tag="router-link" to="/userwallet" label="Ví tiền"></b-menu-item>
        <b-menu-item tag="router-link" to="/userwallethistory" label="Lịch sử giao dịch"></b-menu-item>
      </b-menu-list>
    </b-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>
<style scoped>
.menu-container {
  width: 200px;
  font-family: Roboto;
  font-size: 15px;
  margin-left: 10px;
}
.menu{
  color: #07d390;

}
.product-item {
  font-family: Roboto;
  font-size: 12px;
}
</style>