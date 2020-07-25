<template>
    <div class="modal-card">
    <div class="modal-card-head">
      <p>🗑️ Xóa bài đăng</p>
    </div>
    <section class="modal-card-body">
        <p class="title-post">Bạn có chắc muốn xóa bài đăng này?</p>
      <div class="buttons">
        <b-button type="is-danger">🗑️ Xóa bài đăng</b-button>
        <b-button type="is-light">❌ Không, tôi đổi ý rồi</b-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "mediationdashboardedelete",
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
.title-post {
    font-family: Roboto;
    font-size: 17px;
    color: #707070;
    text-align: center;
    margin-bottom: 31px;
    margin-top: 22px;   
}
</style>