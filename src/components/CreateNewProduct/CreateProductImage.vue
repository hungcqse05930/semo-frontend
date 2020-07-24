<template>
  <div class="container">
      <div class="content-all">
        <p class="first-title">🖼️ Quản lý hình ảnh</p>
        <div class="picture-content">
          <p>Hãy chụp ảnh và quay phim lại sản phẩm của bạn thật đẹp để người mua ấn tượng nhé.</p>
        </div>
        <section>
        <b-field>
            <b-upload v-model="dropFiles"
                multiple>
                <section class="section">
                    <div class="button is-primary">
                        <p>📱 Chọn ảnh và phim trong máy</p>
                    </div>
                </section>
            </b-upload>
        </b-field>

        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div>
    </section>
      </div>
  </div>
</template>
<script>
// import CreateHeader from "../components/CreateNewProduct/CreateHeader.vue";
export default {
  name: "resetpassword-container",
  components: {},
  data() {
    return {
      file: {},
      dropFiles: []
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    }
  }
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
  height: 457px;
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

.first-title {
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
.picture-content p{
  font-family: Roboto;
  font-size: 18px;
  color: #686868;
  margin: 32px auto 15px 32px;

}
</style>