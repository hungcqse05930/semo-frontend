<template>
  <div class="edit-container">
    <div class="edit-title">
      <p>🖊️ Chỉnh sửa tên loại quả</p>
    </div>
    <section>
      <b-field>
        <b-input v-model="name"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">Success</b-button>
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
.edit-container{
    max-width: 600px;
    height: 259px;
}
.edit-title p {
  font-family: Roboto;
  font-size: 20px;
  color: #07d390;
  margin-bottom: 32px;
}
.buttons {
  justify-content: center;
}
</style>