<template>
<div class="abc">
    <b-menu class="menu-container">
    <b-menu-list>
      <b-menu-item label="🏡 Trang chủ" ></b-menu-item>
      <b-menu-item tag="router-link" to="/mediationdashboardnameproduct" label="🍑 Loại quả"></b-menu-item>
      <b-menu-item :active="isActive" expanded>
        <template slot="label" slot-scope="props">
          📦 Sản phẩm
          <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
        </template>
        <div class="product-item">
        <b-menu-item tag="router-link" to="/mediationdashboardhome" label="⏲️ Chờ kiểm duyệt"></b-menu-item>
        <b-menu-item label="⚠ Cần chỉnh sửa"></b-menu-item>
        <b-menu-item label="✅ Đã kiểm duyệt"></b-menu-item>
        <b-menu-item label="💸 Đang đấu giá"></b-menu-item>
        <b-menu-item label="🤝 Đang giao kèo"></b-menu-item>
        <b-menu-item label="💰 Đã bán"></b-menu-item>
        <b-menu-item label="🗑 Đã xóa"></b-menu-item>   
        </div>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list>
      <b-menu-item label="👦 Người dùng" tag="router-link" target="_blank" to="/expo"></b-menu-item>
    </b-menu-list>
  </b-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
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