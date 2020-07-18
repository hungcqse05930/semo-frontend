<template>
  <section>
    <div class="sort2">
      <p class="sort_luotxem">{{sort2.luotxem}}</p>
      <!-- <div class="radio"> -->
      <!-- <div class="field"> -->
      <div class="space"></div>
      <b-radio v-model="radio" native-value="tang" type="is-success">{{sort2.tangdan}}</b-radio>
      <!-- </div> -->
      <div class="space1"></div>
      <!-- <div class="field2"> -->
      <b-radio v-model="radio" native-value="giam" type="is-success">{{sort2.giamdan}}</b-radio>
      <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="br">
      <p>_____________________</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "sort2",
  data() {
    return {
      sort2: {
        luotxem: "👁️ Lượt xem",
        tangdan: "Tăng dần",
        giamdan: "Giảm dần"
      }
    };
  }
};
</script>

<style scoped>
.sort2 {
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
.sort_luotxem {
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
.br {
  margin-top: 8px;
}
</style>