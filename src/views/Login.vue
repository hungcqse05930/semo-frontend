<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContentLeftPicture />
      <div class="content-right">
        <LoginAndRegister />
        <section class="input-text">
          <p>Đăng nhập bằng số điện thoại của bạn</p>
          <b-field>
            <b-input placeholder="Số điện thoại của bạn"></b-input>
          </b-field>
          <b-field>
            <b-input type="password"
                placeholder="Mật khẩu"
                password-reveal>
            </b-input>
          </b-field>
          <NextButton />
        </section>
        <ContentLast />
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from "../components/Auth/NextButton.vue";
import ContentLast from "../components/Auth/ContentLast.vue";
import ContentLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import LoginAndRegister from "../components/Auth/LoginAndRegister";
export default {
  name: "login",
  components: {
    NextButton,
    ContentLast,
    ContentLeftPicture,
    LoginAndRegister
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
  margin-bottom: 10px;
}
.input-text {
  width: 626px;
  height: 224px;
}
</style>