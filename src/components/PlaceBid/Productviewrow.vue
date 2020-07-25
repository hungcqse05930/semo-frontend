<template>
<section class="modal-card-body">
  <div class="modal-card">
    <div class="modal-card-head">
      <p>🖊️ Chỉnh sửa tên loại quả</p>
    </div>
    
      <b-field>
        <b-input v-model="name"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">💾 Lưu tên mới</b-button>
      </div>
    
  </div>
  </section>
</template>
<script>
export default {
  name: "mediationdashboardeditproduct",
  components: {
  }
  
}
</script>
<style scoped>
.modal-card-body{
  top:0px;
  left: 0px;
  width: 100%;
  height: 100%;
}
.modal-card-head p {
  font-family: Roboto;
  font-size: 20px;
  color: #07d390;
}
.buttons {
  justify-content: center;
}
</style>