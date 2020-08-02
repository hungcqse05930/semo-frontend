<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>🖊️ Chi tiết giao dịch</p>
    </div>
    <section class="modal-card-body">
      <div class="money-number">
        <p>- 3,500,000đ</p>
      </div>
      <p class="user-title">Người gửi</p>
      <p class="user-name">PHẠM THẾ LONG</p>
      <p class="user-title">Người nhận</p>
      <p class="user-name">NGUYEN HA THANH</p>
      <p class="user-title">Thời gian</p>
      <p class="user-name">12:38, 22/02/2020</p>
      <p class="user-title">Trạng thái</p>
      <p class="user-name">TIỀN CỌC</p>
    </section>
  </div>
</template>
<script>
export default {
  name: "wallethistoryinformation",
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
.money-number{
  font-family: Roboto;
  font-size: 40px;
  color: #FD5E53;
  text-align: center;
  margin-bottom: 20px;
}
.user-title{
  font-family: Roboto;
  font-size: 15px;
  color: #707070;
  margin-bottom: 20px;
}
.user-name{
  font-family: Roboto;
  font-size: 20px;
  color: #01D28E;
  margin-bottom: 20px;
}
</style>