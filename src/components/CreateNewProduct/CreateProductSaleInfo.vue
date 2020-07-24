<template>
  <div class="container">
      <div class="content-all">
                <div class="first-title">
        <p>💰 Thông tin bán hàng</p>
      </div>
            <div class="flexcontent">
        <p class="pfruit">Tên sản phẩm*</p>
        <input input class="input" />
      </div>
                  <div class="flexcontent">
        <p class="pfruit">Giá khởi điểm*</p>
        <input input class="input" />
      </div>
                  <div class="flexcontent">
        <p class="pfruit">Bước giá*</p>
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
  margin-top: -62px;
  width: 1102px;
  height: 263px;
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

.input {
  margin-top: 20px;
  width: 878px;
  height: 36px;
  /* margin-left: 30px; */
}


.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
  margin: 32px auto 15px 32px;
}

 .pfruit{
   margin-top:25px;
  font-family: Roboto;
  font-size: 15px;
  color: #fd5f55;
  text-align: left;
  margin-left: 32px;
  width: 200px;
}


</style>