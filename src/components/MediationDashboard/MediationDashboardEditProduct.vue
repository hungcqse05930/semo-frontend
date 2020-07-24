<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>🖊️ Chỉnh sửa tên loại quả</p>
    </div>
    <section class="modal-card-body">
      <b-field>
        <b-input v-model="name"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">💾 Lưu tên mới</b-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "mediationdashboardeditproduct",
  components: {
  }
  
}
</script>
<style scoped>
.modal-card-head p {
  font-family: Roboto;
  font-size: 20px;
  color: #07d390;
}
.buttons {
  justify-content: center;
}
</style>