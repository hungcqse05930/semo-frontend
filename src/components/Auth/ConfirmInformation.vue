<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <b-tabs class="block">
          <b-tab-item label="Hoàn thành thông tin"></b-tab-item>
        </b-tabs>
        <p>Hãy cho chúng tôi biết về bạn nhé.</p>
        <br>
        <section class="inputtext">
          <p>Họ và tên bạn</p>
        <b-field>
            <b-input placeholder="Họ và tên"></b-input>
            <p>Tuổi của bạn</p>
            <b-input placeholder="Số tuổi"></b-input>

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