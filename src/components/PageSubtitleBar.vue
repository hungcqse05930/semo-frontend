<template>
  <div class="subtitle-bar-container">
    <div class="subtitle-bar-content">
      <b-tabs position="is-centered" class="block">
        <b-tab-item label="Trang chủ" icon="home">
          <homepage/>
        </b-tab-item>
        <b-tab-item label="Mới nhất" icon="leaf"></b-tab-item>
        <b-tab-item label="Loại quả" icon="food-apple"></b-tab-item>
        <b-tab-item label="Bộ sưu tập" icon="image-multiple"></b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Homepage from './Homepage.vue'
export default {
  name: 'PageSubtitleBar',
  components: {
    Homepage
  }
};
</script>

<style scoped>
.subtitle-bar-container {
  width: 100%;
  top: 56;
  z-index: 2;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(24px);
}

.subtitle-bar-content {
    align-content: flex-end;
    background-color: #ffffff00;
}
</style>