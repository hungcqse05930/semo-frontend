<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Đăng kí thành công</p>
        </div>
        <section class="input-text">
          <p>Mừng bạn đã đến với chúng tôi.</p>
            <!-- <p>Đợi một chút và chúng tôi sẽ đưa bạn quay lại trang chủ.</p> -->
          <PictureUser />
          <div class="buttons">
            <b-button rounded type="is-success" outlined>Đến với Semo nào!</b-button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import ContenLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import PictureUser from "../components/Auth/PictureUser.vue";
export default {
  name: "successregister",
  components: {
    ContenLeftPicture,
    PictureUser
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
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
  text-align: center;
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
}
.step-title p {
  width: 323px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
.buttons button {
  width: 626px;
  height: 44px;
}
</style>