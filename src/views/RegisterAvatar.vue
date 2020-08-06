<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns is-centered">
          <div id="form" class="column is-half">
            <!-- selection tab -->
            <div class="columns nav-tabs is-mobile">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register/avatar">Chọn ảnh đại diện</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- sign up form -->
              <form @submit.prevent="updateInfo()">
                <!-- name -->
                <p class="label-info">Hãy chọn một ảnh đẹp nhất để mọi người ghi nhớ đến bạn.</p>
                <div class="columns is-mobile is-centered">
                  <div class="column is-half is-centered">
                    <div
                      class="image-container"
                      :class="uploaded ? 'uploaded' : 'not-uploaded'"
                      :style="{backgroundImage: 'url(' + previewImage + ')'}"
                    >
                      <input
                        class="image-upload-trigger"
                        type="file"
                        accept="image/jpeg"
                        @change="uploadImage"
                      />
                      <!-- <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div> -->
                    </div>
                    <div class="status ld ld-dim" v-if="uploading">Đang tải lên ...</div>
                  </div>
                </div>
                <!-- submit -->
                <b-notification
                  type="is-danger"
                  has-icon
                  aria-close-label="Đóng"
                  role="alert"
                  :active.sync="error"
                  class="error-notification"
                >{{error_msg}}</b-notification>
                <b-button
                  rounded
                  type="is-primary"
                  style="font-size: 18px; font-weight: 700;"
                  outlined
                  expanded
                  native-type="submit"
                  :disabled="isDisabled"
                  :loading="isLoading"
                >👏 Hoàn tất đăng ký</b-button>
              </form>
              <b-button type="is-text" @click="skip" expanded>Bỏ qua</b-button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase";
import axios from 'axios'
import uniqid from "uniqid";

export default {
  name: "RegisterAvatar",
  data() {
    return {
      previewImage: "",
      img_url: "",
      uploading: false,
      uploaded: false,
      isLoading: false,
      error: false,
      error_msg: "",
    };
  },
  computed: {
    isDisabled() {
      if (this.img_url.length === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    uploadImage(e) {
      // delete just uploaded picture
      if (this.img_url === null) {
        let image = fb.storage().refFromURL(this.img_url);
        image.delete();
      }

      if (e.target.files.length > 0) {
        // reset uploaded state every time re-select image
        this.uploaded = false;
        this.uploading = true;
        // get image
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        // load image locally
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };

        let vm = this;

        // define path to upload
        let user_dir = this.$store.state.user.img_dir;
        let filename = uniqid().concat(image.name);

        // generate ref
        let uploadTask = fb.storage().ref(`${user_dir}/${filename}`).put(image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            vm.progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100.0;
          },
          (error) => {
            vm.error = true;
            vm.error_msg = error.message;
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              vm.img_url = downloadURL;
              vm.uploaded = true;
              vm.uploading = false;
            });
          }
        );
      }
    },
    updateInfo() {
        this.isLoading = true
        this.isDisabled = true
        axios.put('/user/avatar', {
            id: this.$store.state.user.id,
            img_url: this.img_url
        }).then(() => {
            this.$router.push({ name: '/register/completed' })
        }).catch(error => {
            this.error = true;
            this.error_msg = error.message;
            this.isLoading = false
            this.isDisabled = false
        })
    },
    skip() {
      // delete just uploaded picture
      if (this.img_url === null) {
        let image = fb.storage().refFromURL(this.img_url);
        image.delete();
      }

      this.$router.push({ path: '/register/completed' })
    },
  },
};
</script>

<style scoped>
.login-container {
  height: 100%;
  margin-top: 12px;
}

.background {
  background: url("https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg")
    no-repeat center;
  background-size: cover;
}

#form {
  background-color: #ffffff;
  padding: 16px 40px;
  margin: 60px 0;
}

#img-placeholder {
  height: 100%;
  overflow: hidden;
}

#img-placeholder img {
  height: 100%;
  width: auto;
}

.login-input {
  margin-bottom: 16px;
}

.label-info {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.image-container {
  background-color: #dfdfdf;
  height: 200px;
  border-radius: 10px;
  border: 0.5px solid #adadad;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  transition: 0.5s;
}

.image-container:hover {
  background-color: #efefef;
  border: 0.5px solid #cdcdcd;
  box-shadow: 0 2px 6px #00000034;
}

.image-upload-trigger {
  width: 100%;
  height: 100%;
  opacity: 0;
}

.not-uploaded {
  opacity: 0.5;
}

.uploaded {
  opacity: 1;
}

.status {
  margin-top: 16px;
}
</style>