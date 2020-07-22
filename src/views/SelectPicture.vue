<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Chọn ảnh đại diện</p>
        </div>
        <section class="input-text">
          <p>Hãy chọn một ảnh đẹp nhất để mọi người ghi nhớ đến bạn.</p>
          <PictureUser/>
          <NextButton />
          <div class="buttons">
          <a class="button is-text" >Bỏ qua</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>


import ContenLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import NextButton from "../components/Auth/NextButton.vue";
import PictureUser from "../components/Auth/PictureUser.vue";
export default {
  name: "selectpicture",
  components: {
    NextButton,
    ContenLeftPicture,
    PictureUser
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
  width: 291px;

}
.step-title p {
  border-bottom: #01d28e solid 3px;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>