<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <div class="blockpass">
          <p>Tạo mật khẩu</p>
        </div>
        <section class="inputtext">
          <p>Mật khẩu là chìa khóa để bạn sử dụng tài khoản.
Hãy ghi lại và nhớ nó thật kĩ và không để ai biết nhé.</p>
    <b-field>
            <b-input type="password"
                placeholder="Mật khẩu mới của bạn">
            </b-input>
        </b-field>
        <div class="contentmidle">
            <p>Mật khẩu của bạn phải:</p>
            <div class="passworddetail">
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
  margin-bottom: 14px;
  margin-top: 45px;
}
.inputtext {
  width: 626px;
  height: 224px;
}
.blockpass {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
.blockpass p {
  width: 222px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
.passworddetail {
    padding-left: 5px;  
}
.contentmidle p{
  margin-top: 18px;
}
</style>