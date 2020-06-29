<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <LoginAndRegister />
        <section class="inputtext">
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

import NextButton from "./NextButton.vue";
import ContentLast from "./ContentLast.vue";
import ContenLeftPicture from "./ContentLeftPicture.vue";
import LoginAndRegister from "./LoginAndRegister.vue";
export default {
  name: "login",
  components: {
    NextButton,
    ContentLast,
    ContenLeftPicture,
    LoginAndRegister
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
</style>