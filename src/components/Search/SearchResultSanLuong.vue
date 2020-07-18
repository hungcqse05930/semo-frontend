<template>
<section>
  <div class="sort3">     
        <p class="sort_sanluong"> {{sort3.sanluong}}</p>
        <!-- <div class="radio"> -->
            <!-- <div class="field"> -->
              <div class = "space"></div>
            <b-radio v-model="radio"
                native-value="tang"
                type="is-success">
                {{sort3.tangdan}}
            </b-radio>
        <!-- </div> -->
        <!-- <div class="field2"> -->
        <div class = "space1"></div>

            <b-radio v-model="radio"
                native-value="giam"
                type="is-success">
                {{sort3.giamdan}}
            </b-radio>
        <!-- </div> -->
        <!-- </div> -->
  </div>
<div class="br1"><p>_____________________</p></div>
</section>
</template>

<script>
export default {
  name: "sort3",
 data() {
    return {
      sort3: {
        sanluong: "📦 Sản lượng",
        tangdan: "Tăng dần",
        giamdan: "Giảm dần",
      }
    };
  }
};
</script>

<style scoped>
.sort3{
  /* left: 60px; */
  margin-top:24px;
  width: 106px;
  height: 86px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  background:white;
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_sanluong{
  
  /* top: 278px;
  left: 60px; */
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
  color:#707070;
  /* line-height: 0px; */

}
.space{
  width: 176px;
  height: 10px;
  color:blue;
}
.space1{
  width: 176px;
  height: 5px;
  color:blue;
}
.br1{
  margin-top:8px;
}
</style>