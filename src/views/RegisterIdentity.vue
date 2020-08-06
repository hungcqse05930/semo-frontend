<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns">
          <div id="form" class="column">
            <!-- selection tab -->
            <div class="columns nav-tabs is-mobile">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register/identity">Xác minh công dân</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- input number -->
              <p class="label-info">
                Để giao dịch qua
                <img src="../assets/logo.png" style="height: 14px;" />, hãy cung cấp chứng minh nhân dân hoặc
                thẻ căn cước của bạn. Khi xác thực xong, bạn sẽ được cung cấp một ví tiền
                để giao dịch trên hệ thống của chúng tôi.
              </p>
              <!-- identity form -->
              <form @submit.prevent="identitySubmit()">
                <!-- image uploader -->
                <div class="columns is-variable is-4">
                  <div class="column">
                    <b-field label="Ảnh mặt trước">
                      <div>
                        <div
                          class="image-container"
                          :class="uploaded ? 'uploaded' : 'not-uploaded'"
                          :style="{backgroundImage: 'url(' + previewFrontImage + ')'}"
                        >
                          <input
                            class="image-upload-trigger"
                            type="file"
                            accept="image/jpeg"
                            @change="uploadFrontImage"
                          />
                          <!-- <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div> -->
                        </div>
                        <div class="status ld ld-dim" v-if="uploading">Đang tải lên ...</div>
                      </div>
                    </b-field>
                  </div>
                  <!-- images -->
                  <div class="column">
                    <b-field label="Ảnh mặt sau">
                      <div>
                        <div
                          class="image-container"
                          :class="uploaded ? 'uploaded' : 'not-uploaded'"
                          :style="{backgroundImage: 'url(' + previewBackImage + ')'}"
                        >
                          <input
                            class="image-upload-trigger"
                            type="file"
                            accept="image/jpeg"
                            @change="uploadBackImage"
                          />
                          <!-- <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div> -->
                        </div>
                        <div class="status ld ld-dim" v-if="uploading">Đang tải lên ...</div>
                      </div>
                    </b-field>
                  </div>
                </div>
                <!-- form -->
                <b-field label="Họ và tên trên thẻ">
                  <b-input
                    required
                    validation-message="Đừng bỏ trống tên bạn chứ!"
                    placeholder="Họ và tên"
                    v-model="name"
                  ></b-input>
                </b-field>
                <b-field label="Số chứng minh nhân dân">
                  <b-input
                    required
                    validation-message="Đừng bỏ trống số chứng minh chứ!"
                    placeholder="Số chứng minh"
                    v-model="icNumber"
                  ></b-input>
                </b-field>
                <b-field label="Ngày cấp">
                  <b-datepicker
                    v-model="date"
                    required
                    validation-message="Đừng bỏ trống số chứng minh chứ!"
                    placeholder="Ngày caasp"
                    trap-focus
                  ></b-datepicker>
                </b-field>
                <b-field label="Nơi cấp">
                  <!-- province -->
                  <b-autocomplete
                    placeholder="Tỉnh/Thành phố"
                    :loading="isFetchingP"
                    :data="dataP"
                    field="title"
                    clearable
                    expanded
                    required
                    validation-message="Đừng bỏ trống chứ!"
                    @typing="loadProvince"
                    @select="option => province = option"
                  >
                    <template slot-scope="props">
                      <div class="media-content">{{ props.option.title }}</div>
                    </template>
                    <template slot="empty">Không tìm thấy tỉnh/thành phố nào</template>
                  </b-autocomplete>
                </b-field>
                <br />
                <b-button
                  id="otp-submit-button"
                  rounded
                  type="is-primary"
                  style="font-size: 18px; font-weight: 700;"
                  outlined
                  expanded
                  native-type="submit"
                  :disabled="isDisabled"
                  :loading="isLoading"
                >👌 Xác nhận</b-button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import uniqid from "uniqid";
import { fb } from "../firebase";
import axios from "axios";
import debounce from "debounce";

export default {
  name: "RegisterIdentity",
  data() {
    return {
      previewFrontImage: "",
      previewBackImage: "",
      // data to put
      //   img
      front_img_url: "",
      back_img_url: "",
      uploading: false,
      uploaded: false,
      //   info
      name: "",
      icNumber: "",
      date: new Date(),
      //   address
      isFetchingP: false,
      dataP: [],
      province: {
        id: "",
        title: "",
      },
      //   button
      isLoading: false,
      //   error
      error: false,
      error_msg: "",
    };
  },
  computed: {
    isDisabled() {
      if (
        this.name.length === 0 ||
        this.front_img_url.length === 0 ||
        this.back_img_url.length === 0 ||
        this.name.length === 0 ||
        this.icNumber.length === 0 ||
        this.province.id < 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    uploadFrontImage(e) {
      // delete just uploaded picture
      if (this.front_img_url.length !== 0) {
        let image = fb.storage().refFromURL(this.front_img_url);
        image.delete();
      }

      if (e.target.files.length > 0) {
        // reset uploaded state every time re-select image
        this.uploaded = false;
        this.uploading = true;
        // get image
        const image = e.target.files[0];
        console.log("front");
        const reader = new FileReader();
        reader.readAsDataURL(image);
        // load image locally
        reader.onload = (e) => {
          this.previewFrontImage = e.target.result;
        };

        let vm = this;

        // define path to upload
        let user_dir = this.$store.state.user.img_dir;
        let filename = uniqid().concat(image.name);

        // generate ref
        let uploadTask = fb.storage().ref(`${user_dir}/${filename}`).put(image);

        uploadTask.on(
          "state_changed",
          () => {},
          (error) => {
            vm.error = error.message;
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              vm.front_img_url = downloadURL;
              vm.uploaded = true;
              vm.uploading = false;
            });
          }
        );
      }
    },
    uploadBackImage(e) {
      // delete just uploaded picture
      if (this.back_img_url.length !== 0) {
        let image = fb.storage().refFromURL(this.back_img_url);
        image.delete();
      }

      if (e.target.files.length > 0) {
        // reset uploaded state every time re-select image
        this.uploaded = false;
        this.uploading = true;
        // get image
        const image = e.target.files[0];
        console.log(e.target.files);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        // load image locally
        reader.onload = (e) => {
          this.previewBackImage = e.target.result;
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
            vm.error = error.message;
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              vm.back_img_url = downloadURL;
              vm.uploaded = true;
              vm.uploading = false;
            });
          }
        );
      }
    },
    //  load provinces
    loadProvince: debounce(function (province) {
      if (!province.length) {
        this.dataP = [];
        return;
      }

      this.isFetchingP = true;
      axios
        .get("/address/province")
        .then(({ data }) => {
          this.dataP = data.LtsItem.map((item) => ({
            id: item.ID,
            title: item.Title,
          })).filter((option) => {
            return (
              option.title
                .toString()
                .toLowerCase()
                .indexOf(province.toLowerCase()) >= 0
            );
          });
        })
        .catch((error) => {
          this.dataP = [];
          throw error;
        })
        .finally(() => {
          this.isFetchingP = false;
        }, 250);
    }),
    identitySubmit() {
      this.isLoading = true;
      this.isDisabled = true;
      axios
        .post("/identity", {
          user_id: this.$store.state.user.id,
          front_img_url: this.front_img_url,
          back_img_url: this.back_img_url,
          name: this.name,
          number: this.icNumber,
          date_dist: this.date,
          province_dist: this.province.title,
        })
        .then(() => {
          this.$router.push({ path: "/register/avatar" });
        })
        .catch((error) => {
          this.error = true;
          this.error_msg = error.message;
          this.isLoading = false;
          this.isDisabled = false;
        });
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