<template>
  <div class="Add-container">
    <nav class="title-bar-content">
      <div id="title-bar-content">
        <div class="title-label">
          <p>Kiểm định sản phẩm</p>
        </div>
        <b-button class="button-success" type="is-success">✔️ Hoàn tất</b-button>
      </div>
    </nav>
    <div class="content-left">
      <p class="right-title">Chọn viện kiểm định gần bạn nhất</p>
      <div class="location-content">
        <p class="location-title">Bạn đang ở đâu?</p>
        <b-field class="location-select">
          <b-select placeholder="Chọn tỉnh thành/TP">
            <option value="1">HCM</option>
            <option value="2">DN</option>
            <option value="3">HN</option>
          </b-select>
        </b-field>
                  <p>
            Viện kiểm định ABC XYZ
            Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình
            0283 667 5920
          </p>
          <p>
            Viện kiểm định ABC XYZ
            Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình
            0283 667 5920
          </p>
          <p>
            Viện kiểm định ABC XYZ
            Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình
            0283 667 5920
          </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "createnewproductaddproduct",
  components: {}
};
</script>
<style scoped>
.title-bar-content {
  margin-left: 0px;
  width: 100%;
  height: 68px;
  top: 0;
  position: sticky;
  z-index: 1;
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
  border: 1px solid #00000015;
}
#title-bar-content {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
  flex-flow: row;
}
.title-label {
  margin-top: 16px;
  text-align: center;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 25px;
  color: #b88cd8;
}
.button-success {
  margin-top: 18px;
  /* margin-left: 500px;  */
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  justify-content: right;
}
.right-title{
    font-family: Roboto;
    font-size: 28px;
    color: #01D28E;
    font-weight: 900;
    margin: 58px auto 37px 60px;
}
.content-right{
    width: 683px;
}
.location-content{
    margin-left: 60px;
}
.location-content p {
    font-family: Roboto;
    font-size: 18px;
    color: #686868;
}

</style>