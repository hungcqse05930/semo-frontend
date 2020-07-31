<template>
  <div class="menu">
    <b-menu class="menu-container">
      <b-menu-list :active="isActive">
        <b-menu-item tag="router-link" to="/adminwallet" label="Ví tiền"></b-menu-item>
        <b-menu-item tag="router-link" to="/" label="Giao dịch"></b-menu-item>
        <b-menu-item tag="router-link" to="/admindashboardproduct" label="📦 Sản phẩm"></b-menu-item>
        <b-menu-item tag="router-link" to="/admindashboardnameproduct" label="🍑 Loại quả"></b-menu-item>
        <b-menu-item tag="router-link" to="/" label="Đấu giá"></b-menu-item>
        <b-menu-item tag="router-link" to="/" label="Hợp đồng"></b-menu-item>
      </b-menu-list>
      <b-menu-list>
        <b-menu-item label="👦 Đăng xuất" tag="router-link" target="_blank" to="/login"></b-menu-item>
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
.product-item {
  font-family: Roboto;
  font-size: 12px;
}
</style>