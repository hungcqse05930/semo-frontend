<template>
  <div class="subtitle-bar-container">
    <div class="subtitle-bar-content">
      <b-tabs position="is-centered" class="block">
        <b-tab-item label="Trang chủ" icon="home"></b-tab-item>
        <b-tab-item label="Mới nhất" icon="leaf"></b-tab-item>
        <b-tab-item label="Loại quả" icon="food-apple"></b-tab-item>
        <b-tab-item label="Bộ sưu tập" icon="image-multiple"></b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.subtitle-bar-container {
  width: 100%;
  height: 52px;
  top: 56;
  position: fixed;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(24px);
}

.subtitle-bar-content {
    align-content: flex-end;
    background-color: #ffffff00;
}
</style>