<template>
<div class="menu">
  <!-- <div class="sidebar-page">
        <section class="sidebar-layout">
  <b-sidebar
                position="static"
                expand-on-hover-fixed="true"
                type="is-light"
                reduce
                open
            > -->
    <b-menu class="menu-container">
    <b-menu-list :active="isActive" >
      <!-- <b-menu-item label="🏡 Trang chủ" ></b-menu-item> -->
        <b-menu-item tag="router-link" to="/mediationdashboardproduct" label="📦 Sản phẩm"></b-menu-item>
      <b-menu-item tag="router-link" to="/mediationdashboardnameproduct" label="🍑 Loại quả"></b-menu-item>
    </b-menu-list>
    <b-menu-list>
      <b-menu-item label="👦 Đăng xuất" tag="router-link" to="/login"></b-menu-item>
    </b-menu-list>
  </b-menu>
  <!-- </b-sidebar>
        </section>
  </div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
    }
  }
}
</script>
<style scoped>
.menu-container{
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