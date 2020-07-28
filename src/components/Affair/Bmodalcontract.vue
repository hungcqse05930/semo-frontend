<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>➕ Thêm điều khoản mới</p>
      <img id="logo"  onclick="window.location.href='/placebid'" src="../../assets/x.png" />
    </div>
    <section class="modal-card-body">
  <select class="select">
    <option value="volvo">Chọn Điều Khoản</option>
    <option value="saab">Vận chuyển</option>
    <option value="opel">Thanh toán</option>
    <option value="audi">Điều khoản thêm</option>
  </select>
      <b-field>
        <b-input v-model="name"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">✈️ Hỏi ý kiến đối tác</b-button>
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
  display: flex;
  justify-content: space-between;
}
.buttons {
  justify-content: center;
}
#logo{
  width: 10px;
  height: 10px;

}
.select{
    width: 600px;
    height: 38px;
    border-radius: 5px;
    margin-bottom: 15px;
}
</style>