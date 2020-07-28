<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>➕ Thêm địa chỉ mới</p>
    </div>
    <section class="modal-card-body">
      <b-field>
        <b-input placeholder="Họ và tên người đại diện" type="is-primary"></b-input>
      </b-field>
      <b-field>
        <b-input placeholder="Số điện thoại" type="is-primary"></b-input>
      </b-field>
      <b-field class="edit-city"> 
        <b-select placeholder="Tỉnh/Thành phố">
          <option value="1">HCM</option>
          <option value="2">HN</option>
        </b-select>
      </b-field>
      <b-field class="edit-district">
        <b-select placeholder="Quận/Huyện">
          <option value="1">HCM</option>
          <option value="2">HN</option>
        </b-select>
      </b-field>
      <b-field class="edit-wards">
        <b-select placeholder="Phường/Xã">
          <option value="1">HCM</option>
          <option value="2">HN</option>
        </b-select>
      </b-field>
      <b-input placeholder="Số nhà, tên đường/phố, làng/ấp" type="is-primary"></b-input>
      <div class="buttons">
        <b-button type="is-primary">💾 Lưu địa chỉ mới</b-button>
      </div>
    </section>
  </div>
</template>
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
.edit-city{
    width: 600px;
}
</style>