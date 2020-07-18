<template>
  <section>
    <div class="sort6">
      <p class="sort_danhgia">{{sort6.danhgia}}</p>
      <!-- <div class="radio"> -->
      <!-- <div class="field"> -->
      <div class="space"></div>
      <b-radio v-model="radio" native-value="tang" type="is-success">{{sort6.tangdan}}</b-radio>
      <!-- </div> -->
      <div class="space1"></div>
      <!-- <div class="field2"> -->
      <b-radio v-model="radio" native-value="giam" type="is-success">{{sort6.giamdan}}</b-radio>
      <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="br">
      <p>____________________</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "sort6",
  data() {
    return {
      sort6: {
        danhgia: "★ Đánh giá",
        tangdan: "Tăng dần",
        giamdan: "Giảm dần"
      }
    };
  }
};
</script>

<style scoped>
.sort6 {
  /* left: 60px; */
  margin-top: 24px;
  width: 120px;
  height: 86px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_danhgia {
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
  
}
.space1 {
  width: 176px;
  height: 5px;

}
.br {
  margin-top: 8px;
}
</style>