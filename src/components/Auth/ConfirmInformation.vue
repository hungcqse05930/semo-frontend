<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <div class="block">
          <p>Hoàn thành thông tin</p>
        </div>
        <section class="inputtext">
          <p>Hãy cho chúng tôi biết về bạn nhé.</p>
          <br />
          <p>Họ và tên bạn</p>
          <b-field>
            <b-input placeholder="Họ và tên"></b-input>
          </b-field>
          <p>Tuổi của bạn</p>
          <section class="inputage">
            <b-field>
              <b-input placeholder="Số tuổi"></b-input>
            </b-field>
            <!-- <div class="checkbox">
              <p>Giới tính</p>
              <b-checkbox>Nam</b-checkbox>
              <b-checkbox>Nữ</b-checkbox>
            </div>-->
          </section>
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
    ContenLeftPicture
  }
};
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
.block p {
  width: 351px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
.passworddetail {
  padding-left: 5px;
}
.inputage {
  width: 300px;
  height: 44px;
  display: flex;
}
.checkbox {
  font-family: Roboto;
  font-size: 18px;
  display: flex;
}
</style>