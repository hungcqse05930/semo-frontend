<template>
  <div class="container">
    <div class="content-all">
      <div class="first-title">
        <p>📋 Thông tin chi tiết</p>
      </div>
      <div class="flexcontent">
        <p class="pkilo">Cân nặng quả*</p>
        <b-input placeholder="Ví dụ: Táo Tàu" input class="input1" />
        <b-select class="bselect" placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
      </div>
      <div class="flexcontent">
        <p class="pkilo">Đường kính quả*</p>
        <b-input placeholder="Ví dụ: 5.42" input class="input1" />
        <b-select class="bselect" placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
      </div>
      <div class="flexcontent">
        <p class="pkilo">Nồng độ đường</p>
        <b-input placeholder="Ví dụ: 5.42" input class="input1" />
        <b-select class="bselect" placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
      </div>
            <div class="flexcontent">
        <p class="pkilo"> Phần trăm quả trênn tổng khối hàng </p>
        <b-input placeholder="Ví dụ: 5.42" input class="input1" />
        <b-select class="bselect" placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
      </div>
                  <div class="flexcontent">
        <p class="pfruit">Thông tin chi tiết*</p>
        <input input class="input" />
      </div>
    </div>
  </div>





</template>
<script>
// import CreateHeader from "../components/CreateNewProduct/CreateHeader.vue";
export default {
  name: "resetpassword-container",
  components: {}
};
</script>
<style scoped>
.container {
  width: 100%;
  /* height: 1000px; */
  /* background-color: burlywood; */
}
.flexcontent {
  display: flex;
  /* flex-flow: row; */
  padding-right: 32px;
}

.content-all {
  margin-top: 32px;
  width: 1102px;
  height: 547px;
  /* height: 447px; */
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  /* transition: 0.25s; */
}
.content-information {
  display: flex;
  height: 350px;
}
.bselect{
  margin-top: 15px;
}
.select{
  margin-top: 15px;
}
.input {
  margin-top: 0px;
  width: 878px;
  height: 216px;
  /* margin-left: 30px; */
}
.input1 {
  margin-top: 16px;
  width: 696px;
  height: 36px;
  margin-right: 10px;
}

.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
  margin: 32px auto 15px 32px;
}
.pkilo  {
  margin-top: 20px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 200px;
}
 .pfruit{
   margin-top: 84px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 200px;
}
 .pplace{
   margin-top: 20px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 250px;
}

</style>