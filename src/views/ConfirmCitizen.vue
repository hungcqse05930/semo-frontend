<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContentLeftPicture />
      <div class="content-right">
        <div class="step-title">
          <p>Xác minh công dân</p>
        </div>
        <section class="input-text">
          <p>
            Để giao dịch qua semo, hãy cung cấp chứng minh nhân dân hoặc
            thẻ căn cước của bạn. Khi xác thực xong, bạn sẽ được cung cấp một ví tiền
            để giao dịch trên hệ thống của chúng tôi.
          </p>
          <div class="loading-picture">
            <div class="loading-front-picture">
              <p>Ảnh mặt trước</p>
              <b-field>
                <b-upload v-model="dropFiles" multiple drag-drop>
                  <section class="upload-picture">
                    <div class="content has-text-centered">
                      <p>Drop your files here or click to upload</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </div>
            <div class="loading-back-picture">
              <p>Ảnh mặt sau</p>
              <b-field>
                <b-upload v-model="dropFiles" multiple drag-drop>
                  <section class="upload-picture">
                    <div class="content has-text-centered">
                      <p>Drop your files here or click to upload</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </div>
          </div>
          <div class="tags">
            <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
              {{file.name}}
              <button
                class="delete is-small"
                type="button"
                @click="deleteDropFile(index)"
              ></button>
            </span>
          </div>
          <div class="content-midle">
            <p>Họ và tên trên thẻ</p>
            <b-field>
              <b-input placeholder="Họ và tên"></b-input>
            </b-field>
            <p>Số chứng minh nhân dân/căn cước</p>
            <b-field>
              <b-input placeholder="Mã số thẻ"></b-input>
            </b-field>
            <p>Ngày cấp</p>
            <b-field>
              <b-datepicker ref="datepicker" expanded placeholder="Select a date"></b-datepicker>
            </b-field>
            <p>Nơi cấp</p>
            <b-field>
              <b-input placeholder="Tỉnh/Thành Phố"></b-input>
            </b-field>
            <ConfirmButton />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import ContentLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import ConfirmButton from "../components/Auth/ConfirmButton.vue";
export default {
  name: "registercitizen",
  components: {
    ConfirmButton,
    ContentLeftPicture
  },
  data() {
    return {
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
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.content-right {
  padding-left: 60px;
}
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
}
.input-text {
  width: 626px;
  height: 224px;
}
.step-title {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
.step-title p {
  width: 309px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
.upload-picture {
  width: 300px;
  height: 150px;
}
.loading-picture {
  display: flex;
}
.loading-front-picture {
  margin-right: 26px;
  width: 300px;
  height: 150px;
}
.content-midle p {
  margin-top: 18px;
}
</style>