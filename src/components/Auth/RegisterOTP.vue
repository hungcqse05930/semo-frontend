<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <b-tabs class="block">
          <b-tab-item label="Đăng kí"></b-tab-item>
        </b-tabs>
        <section class="inputtext">
          <p>Chúng tôi đã gửi một mã xác thực đến số điện thoại 0912345678.
Hãy điền vào đây nhé, dòng mã ấy có 6 chữ số.</p>
          <b-field>
            <b-input placeholder="Mã số"></b-input>
          </b-field>
          <ConfirmButton />
        </section>

      </div>
    </div>
  </div>
</template>
<script>


import ContenLeftPicture from "./ContentLeftPicture.vue";
import ConfirmButton from "./ConfirmButton.vue";
export default {
  name: "registerotp",
  components: {
    ConfirmButton,
    ContenLeftPicture,  
  }
}
</script>
<style>
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.contentright {
  padding-left: 60px;
}
.inputtext p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 10px;
}
.inputtext {
  width: 626px;
  height: 224px;
}
.block {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
</style>