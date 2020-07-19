<template>
  <section>
    <div class="sort5">
      <p class="sort_noitrong">{{sort5.noitrong}}</p>
      <!-- <div class="radio"> -->
      <div class="space"></div>
      <div class="custom-select">
        <b-select placeholder="Chọn tỉnh/thành:" required>
          <option value="0">Chọn tỉnh/thành:</option>
          <option value="1">Hà Nội</option>
          <option value="2">Hải Phòng</option>
          <option value="3">TP Hồ Chí Minh</option>
          <option value="4">Long An</option>
        </b-select>
        <p class="error">Vui lòng điền số phù hợp</p>
        <button class="submit" type="submit">Xác nhận</button>
      </div>
      <!-- </div> -->

      <p class="text">THIẾT ĐẶT LẠI</p>
    </div>
    <div class="br5">
      <p>_____________________</p>
    </div>
    <button class="submit1" type="submit">Xóa tất cả</button>
  </section>
</template>

<script>
export default {
  name: "sort5",
  data() {
    return {
      sort5: {
        noitrong: "🏙️ Địa chỉ",
        tangdan: "Tăng dần",
        giamdan: "Giảm dần"
      }
    };
  }
};
</script>

<style scoped >
.sort5 {
  /* left: 60px; */
  margin-top: 24px;
  width: 176px;
  height: 176px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_noitrong {
  /* top: 278px;
  left: 60px; */
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
  color: #707070;
  /* line-height: 0px; */
}
.space {
  width: 176px;
  height: 15px;
  /* color:blue; */
}
.submit {
  width: 176px;
  height: 30px;
  margin-top: 8px;
  /* font-size: 24px; */
  /* text-align: center; */
  /* cursor: pointer; */
  /* outline: none; */
  background-color: white;
  color: #01d28e;
  border-color: #01d28e;
  border-radius: 25px;
  margin-bottom: -15px;
}
.br5 {
  margin-top: 8px;
}
.text {
  margin-top: 10px;
  text-align: center;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 13px;
  color: #707070;
}
.submit1 {
  width: 176px;
  height: 30px;
  margin-top: 24px;
  /* font-size: 24px; */
  /* text-align: center; */
  /* cursor: pointer; */
  /* outline: none; */
  background-color: white;
  color: red;
  border-color: red;
  border-radius: 25px;
  margin-bottom: -15px;
}
.error {
  /* margin-top:2px; */
  font-size: 15px;
  line-height: 50px;
  color: red;
}
</style>