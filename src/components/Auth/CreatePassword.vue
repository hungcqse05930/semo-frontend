<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <b-tabs class="block">
          <b-tab-item label="Tạo mật khẩu"></b-tab-item>
        </b-tabs>
        <section class="inputtext">
          <p>Mật khẩu là chìa khóa để bạn sử dụng tài khoản.
Hãy ghi lại và nhớ nó thật kĩ và không để ai biết nhé.</p>
        <b-field type="is-success">
            <b-input placeholder="Mật khẩu mới của bạn"></b-input>
        </b-field>
        <div class="contentmidle">
            <p>Mật khẩu của bạn phải:</p>
            <div class="passworddetail">
            <p>-Dài từ 8 đến 25 kí tự</p>
            <p>-Bao gồm cả chữ in thường, chữ in hoa và số</p>
            </div>
        </div>
        <b-field type="is-success">
            <b-input placeholder="Mật khẩu mới của bạn"></b-input>
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
.passworddetail {
    padding-left: 5px;  
}
</style>