<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p class="momo-title">
        <img class="momo-image" src="../../assets/logo-momo.png" />
        Nạp tiền qua MoMo
      </p>
    </div>
    <section class="modal-card-body">
      <p class="title-post">Nhập số tiền bạn muốn nạp vào ví semo</p>
      <b-field>
        <b-input placeholder="Đơn vị: Việt Nam đồng"></b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">✈️ Tiếp tục</b-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "wallettopup",
  components: {}
};
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
.momo-image {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.momo-title {
  display: flex;
  align-items: center;
}

.title-post {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>