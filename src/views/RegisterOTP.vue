<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Đăng kí</p>
        </div>
        <section class="input-text">
          <p class="text-title">
            Chúng tôi đã gửi một mã xác thực đến số điện thoại 0912345678.
            Hãy điền vào đây nhé, dòng mã ấy có 6 chữ số.
          </p>
          <b-field>
            <b-input placeholder="Mã số"></b-input>
          </b-field>
          <ConfirmButton />
          <div class="content-bottom">
            <p>Nhập số điện thoại khác</p>
            <p>Gửi lại mã</p>
          </div>
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
};
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
.text-title {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
}
.input-text {
  width: 626px;
}
.step-title {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
  width: 129px;
}
.step-title p {
  border-bottom: #01d28e solid 3px;
}
.content-bottom {
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  font-size: 18px;
  margin-top: 20px;
}
</style>