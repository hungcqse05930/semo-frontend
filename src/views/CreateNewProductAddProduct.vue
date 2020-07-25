<template>
  <div class="Add-container">
    <nav class="title-bar-content">
      <div id="title-bar-content">
        <div class="column">
        <b-button class="button-success" type="is-success">✔️ Hoàn tất</b-button>
        </div>
        <div class="column is-four-fifths">
          <p class="title-label">Kiểm định sản phẩm</p>        
        </div>
        <div class="column">
        <b-button class="button-success" type="is-success">✔️ Hoàn tất</b-button>
        </div>
      </div>
    </nav>
    <div class="content-page">
    <div class="content-left">
      <p class="page-title">Chọn viện kiểm định gần bạn nhất</p>
      <div class="location-content">
        <p class="location-title">Bạn đang ở đâu?</p>
        <b-field class="location-select">
          <b-select placeholder="Chọn tỉnh thành/TP">
            <option value="1">HCM</option>
            <option value="2">DN</option>
            <option value="3">HN</option>
          </b-select>
        </b-field>             
            <p>Viện kiểm định ABC XYZ</p>
           <P> Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình</P>
            <p>0283 667 5920</p>
            <br>
            <p>Viện kiểm định ABC XYZ</p>
           <P> Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình</P>
            <p>0283 667 5920</p>
            <br>
            <p>Viện kiểm định ABC XYZ</p>
           <P> Số 8, đường Mạc Đĩnh Chi, phường Tân Mai, quận Tân Bình</P>
            <p>0283 667 5920</p>
            <br>
      </div>
    </div>
    <div class="content-right">
      <p class="page-title">Gửi mẫu hàng của bạn kèm thông tin này</p>
      <div class="information-content">
        <div class="product-code">
        <p class="information-title">📦 Mã sản phẩm</p>
        <br>
        <p class="code-gen">abd-w28-cam-09j</p>
        </div>
        <div class="user-code">
        <p class="information-title">👦 Người dùng</p>
        <br>
        <p class="code-gen">s92-md1-xq0-d2m</p>
        </div>
      </div>
      <p class="last-content">Nhớ ghi lại thông tin này nhé!</p>
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
  display: flex;
  flex-flow: row;
  align-items: center;
}
.title-label {
  /* margin-top: 16px; */
  text-align: center;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 25px;
  color: #b88cd8;
}
.button-success {
  /* margin-top: 18px; */
  /* margin-left: 500px;  */
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  float: right;
}
.page-title{
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
.location-select{
  margin-top: 20px;
  margin-bottom: 18px;
}
.information-content{
  margin-left: 60px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  width: 518px;
  height: 302px;
}
.information-title{
  font-family: Roboto;
  font-size: 20;
  color: #07D390;
  font-weight: bold;
}
.content-page{
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.code-gen{
  font-family: Roboto;
  font-size: 40px;
  color: #707070;
  font-weight: bold;
}
.product-code{
  margin: 32px auto 39px 32px;
}
.user-code {
  margin: 32px auto 39px 32px;
}
.last-content {
  font-family: Roboto;
  font-size: 18px;
  color: #686868;
  margin-top: 38px;
  margin-left: 60px;
}
</style>