<template>
  <div class="container">
    <div class="content-all">
      <div class="first-title">
        <p>ℹ Thông tin cơ bản</p>
      </div>
      <div class="flexcontent">
        <p class="pfruit">Loại quả*</p>
        <input placeholder="Ví dụ: Táo Tàu" input class="input" />
      </div>
      <div class="flexcontent">
        <p class="pkilo">Khối lượng*</p>
        <b-input placeholder="Ví dụ: 5.42" input class="input-kilo" />
        <b-select class="bselect" placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
      </div>
      <div class="flexcontent">
        <div class="pplace">
          <p>Địa điểm thu hoạch*</p>
        </div>
        <div class="select is-fullwidth">
          <select>
            <option>Thôn 6, xã Thạch Hòa, huyện Thạch Thất, Hà Nội</option>
            <option>Thôn 6, xã Thạch Hòa, huyện Thạch Thất, Hà Nội</option>
          </select>
        </div>
      </div>
    </div>
    <CreateProductTreeInfo />
    <CreateProductImage />
    <CreateProductSaleInfo />
    <div class="save-button">
      <b-button type="is-success">✈️ Gửi đi kiểm duyệt</b-button>
    </div>
  </div>
</template>
<script>
import CreateProductTreeInfo from "../../components/CreateNewProduct/CreateProductTreeInfo.vue";
import CreateProductImage from "../../components/CreateNewProduct/CreateProductImage.vue";
import CreateProductSaleInfo from "../../components/CreateNewProduct/CreateProductSaleInfo.vue";
export default {
  name: "resetpassword-container",
  components: {
    CreateProductTreeInfo,
    CreateProductImage,
    CreateProductSaleInfo
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 550px;
  /* background-color: burlywood; */
}
.flexcontent {
  display: flex;
  /* flex-flow: row; */
  padding-right: 32px;
}

.content-all {
  margin-top: 20px;
  width: 1102px;
  height: 237px;
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
.save-button {
  margin-top: -250px;
  margin-left: 920px;
}
.bselect {
  margin-top: 15px;
}
.select {
  margin-top: 15px;
}
.input {
  margin-top: 0px;
  width: 878px;
  height: 36px;
  /* margin-left: 30px; */
}
.input-kilo {
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
.pkilo {
  margin-top: 20px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 200px;
}
.pfruit {
  margin-top: 4px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 198px;
}
.pplace {
  margin-top: 20px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 240px;
}
</style>