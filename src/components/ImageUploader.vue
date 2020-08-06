<template>
  <div class="container">
    <div
      class="image-container"
      :class="uploaded ? 'uploaded' : 'not-uploaded'"
      :style="{backgroundImage: 'url(' + previewImage + ')'}"
    >
      <input class="image-upload-trigger" type="file" accept="image/jpeg" @change="uploadImage" />
      <!-- <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div> -->
    </div>
    <div class="status ld ld-dim" v-if="uploading">Đang tải lên ...</div>
  </div>
</template>

<script>
/* eslint-disable */
import uniqid from "uniqid";
import { fb, storage } from "../firebase";

export default {
  name: "ImageUpload",
  props: {
    img_url: String,
  },
  data() {
    return {
      previewImage: null,
      uploaded: false,
      uploading: false,
      progress: 0.0,
      error: "",
      //   img_url: "",
    };
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
            vm.error = error.message;
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
  },
};
</script>

<style>
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