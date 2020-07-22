<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContentLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Tạo mật khẩu</p>
        </div>
        <section class="input-text">
          <p>Mật khẩu là chìa khóa để bạn sử dụng tài khoản.
Hãy ghi lại và nhớ nó thật kĩ và không để ai biết nhé.</p>
    <b-field>
            <b-input type="password"
                placeholder="Mật khẩu mới của bạn">
            </b-input>
        </b-field>
        <div class="content-midle">
            <p>Mật khẩu của bạn phải:</p>
            <div class="password-detail">
            <p>-Dài từ 8 đến 25 kí tự</p>
            <p>-Bao gồm cả chữ in thường, chữ in hoa và số</p>
            </div>
        </div>
        <b-field type="is-success">
            <b-input type="password" placeholder="Mật khẩu mới của bạn"></b-input>
        </b-field>
          <ConfirmButton />
        </section>
      </div>
    </div>
  </div>
</template>
<script>


import ContentLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import ConfirmButton from "../components/Auth/ConfirmButton.vue";
export default {
  name: "registerpassword",
  components: {
    ConfirmButton,
    ContentLeftPicture,  
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
  width: 222px;
}
.step-title p {
  border-bottom: #01d28e solid 3px;
}
.password-detail {
    padding-left: 5px;  
}
.content-midle p{
  margin-top: 18px;
}
</style>