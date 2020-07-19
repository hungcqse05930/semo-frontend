<template>
  <section>
    <div class="sort4">
      <p class="sort_ksanluong">{{sort4.ksanluong}}</p>
      <div class="space"></div>
      <!-- <div class="radio"> -->
      <form action="/action_page.php">
        <div class="inputsize">
          <label for="fname">{{sort4.tu}} :</label>
          <input type="text" id="fname" name="fname" size="13" />
          <br />
          <div class="space1"></div>
          <label for="pin">{{sort4.den}}:</label>
          <input type="text" id="fname" name="fname" size="13" />
        </div>
        <p class="error">Vui lòng điền số phù hợp</p>
        <button class="submit2" type="submit">Xác nhận</button>
      </form>
      <!-- </div> -->
    </div>
    <div class="br3">
      <p>_____________________</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "sort4",
  data() {
    return {
      sort4: {
        ksanluong: "📦 Khoảng sản lượng",
        tu: "Từ   ",
        den: "Đến"
      }
    };
  }
};
</script>

<style scoped >
.sort4 {
  /* left: 60px; */
  margin-top: 24px;
  width: 176px;
  height: 190px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_ksanluong {
  /* top: 278px;
  left: 60px; */
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
  color: #707070;
  /* line-height: 0px; */
}
.br3 {
  margin-top: 8px;
}
.space {
  width: 176px;
  height: 12px;
}
.space1 {
  width: 176px;
  height: 12px;
}
.submit2 {
  width: 176px;
  height: 30px;

  /* font-size: 24px; */
  /* text-align: center; */
  /* cursor: pointer; */
  /* outline: none; */
  background-color: white;
  color: #01d28e;
  border-color: #01d28e;
  border-radius: 25px;
  padding-bottom: 0px;
}
.error {
  /* margin-top:2px; */
  font-size: 15px;
  line-height: 50px;
  color: red;
}
.inputsize {
  padding: 0 10px 0 10px;
}
</style>