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
            <p>Ảnh mặt trước</p>
            <p>Ảnh mặt sau</p>
            <b-field>
              <b-upload v-model="dropFiles" multiple drag-drop>
                <section class="upload-picture">
                  <div class="content has-text-centered">
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
              <b-upload v-model="dropFiles" multiple drag-drop>
                <section class="upload-picture">
                  <div class="content has-text-centered">
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>

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
          </div>
          <div class="content-midle">
            <p>Mật khẩu của bạn phải:</p>
            <div class="password-detail">
              <p>-Dài từ 8 đến 25 kí tự</p>
              <p>-Bao gồm cả chữ in thường, chữ in hoa và số</p>
            </div>
          </div>
          <b-field type="is-success">
            <b-input type="password" placeholder="Mật khẩu mới của bạn"></b-input>
          </b-field>
          <ConfirmButton />
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
.loading-picture p {
    vertical-align: left;
    display: initial;
}
.content-midle p {
  margin-top: 18px;
}
</style>