<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>➕ Thêm giấy tờ tùy thân</p>
    </div>
    <section class="modal-card-body">
      <div class="upload-identity">
        <b-field label="Ảnh mặt trước" class="front-identity">
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>🖼️ Chọn từ thư viện</p>
              </div>
            </section>
          </b-upload>
        </b-field>
        <b-field label="Ảnh mặt sau" class="back-identity">
          <b-upload v-model="dropFiles" multiple drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>🖼️ Chọn từ thư viện</p>
              </div>
            </section>
          </b-upload>
        </b-field>
      </div>
       <div class="tags">
        <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
          {{file.name}}
          <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
        </span>
      </div>
      <b-field>
          <b-input placeholder="Họ và tên trong thẻ" type="is-primary"></b-input>
      </b-field>
            <b-field>
          <b-input placeholder="Mã số thẻ" type="is-primary"></b-input>
      </b-field>
      <b-field>
          <b-input placeholder="Ngày cấp" type="is-primary"></b-input>
      </b-field>
      <b-field class="address-identity">
        <b-select placeholder="Nơi cấp">
          <option value="1">HCM</option>
          <option value="2">HN</option>
        </b-select>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary">✈️ Gửi đi kiểm duyệt</b-button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
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
.modal-card-head p {
  font-family: Roboto;
  font-size: 20px;
  color: #07d390;
}
.buttons {
  margin-top: 30px;
  justify-content: center;
}
/* .edit-city{
    width: 600px;
} */
.upload-identity {
  display: flex;
  flex-flow: row;
}
.back-identity {
  margin-left: 30px;
}
</style>