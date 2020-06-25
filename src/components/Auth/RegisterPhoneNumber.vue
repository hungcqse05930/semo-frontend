<template>
    <div id="app" class="container">
    <div class="wrap">
       <ContentLeftPicture />
       <div class="contentright">
           <LoginAndRegister />
           <section class="inputtext">
          <p>Sử dụng số điện thoại của bạn để đăng ký</p>
          <b-field>
            <b-input placeholder="Số điện thoại của bạn"></b-input>
          </b-field>
          <NextButton />
        </section>
        <ContentLast />
       </div>
    </div>
    </div>
</template>

<script>
import ContentLeftPicture from "./ContentLeftPicture";
import LoginAndRegister from "./LoginAndRegister.vue";
import NextButton from "./NextButton.vue";
import ContentLast from "./ContentLast.vue";

export default {
    name: "registerphonenumber",
    components: {
        ContentLeftPicture,
        LoginAndRegister,
        NextButton,
        ContentLast
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