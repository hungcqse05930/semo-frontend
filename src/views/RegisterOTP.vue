<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Đăng kí</p>
        </div>
        <section class="input-text">
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


import ContenLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import ConfirmButton from "../components/Auth/ConfirmButton.vue";
export default {
  name: "registerotp",
  components: {
    ConfirmButton,
    ContenLeftPicture
  }
}
</script>
<style scoped>
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.content-right {
  padding-left: 60px;
}
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
}
.input-text {
  width: 626px;
  height: 224px;
}
.step-title {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
.step-title p {
  width: 129px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
</style>