<template>
  <section>
    <div class="sort1">
      <p class="sort_thoigianconlai">{{sort1.thoigianconlai}}</p>
      <div class="space"></div>
      <input type="radio" name="gender" value="male" />
      {{sort1.tangdan}}
      <br />
      <div class="space1"></div>
      <input type="radio" name="gender" value="female" />
      {{sort1.giamdan}}
      <br />
      <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="br2">
      <p>_____________________</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "sort1",
  data() {
    return {
      sort1: {
        thoigianconlai: "⏲ Thời gian còn lại",
        tangdan: "Tăng dần",
        giamdan: "Giảm dần"
      }
    };
  }
};
</script>

<style scoped>
.sort1 {
  /* left: 60px; */
  margin-top: 24px;
  width: 154px;
  height: 86px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_thoigianconlai {
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
  height: 10px;
  color: blue;
}
.space1 {
  width: 176px;
  height: 5px;
  color: blue;
}
.br2 {
  margin-top: 8px;
}
</style>