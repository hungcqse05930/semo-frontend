<template>
    <div class="columns is-4">
      <!-- menu -->
      <div class="column is-2">
        <b-menu class="menu-information" activable v-model="activeTab">
          <b-menu-list v-model="activeTab">
            <b-menu-item :active.sync="info" label="📜 Hồ sơ"></b-menu-item>
            <b-menu-item :active.sync="address" label="🏡 Địa chỉ"></b-menu-item>
            <b-menu-item :active.sync="identity" label="🎟 Xác thực"></b-menu-item>
            <b-menu-item :active.sync="password" label="🔑 Mật khẩu"></b-menu-item>
          </b-menu-list>
          <p>
            {{info}}
            {{address}}
            {{identity}}
            {{password}}
          </p>
        </b-menu>
      </div>
      <!-- functional section -->
      <div v-if="info" class="column is-10">
          <div class="content-all">
            <div class="content-information columns">
              <div class="column is-9">
                <div class="first-title">
                  <p>👦 Thông tin lý lịch</p>
                </div>
                <b-field>
                  <div class="field-label is-normal">
                    <p>Số điện thoại</p>
                  </div>
                  <fieldset disabled>
                    <div class="input-text">
                      <input class="input" type="text" value="******98" />
                    </div>
                  </fieldset>
                </b-field>
                <b-field>
                  <div class="field-label is-normal">
                    <p>Họ và tên</p>
                  </div>
                  <div class="input-text">
                    <input class="input" type="text" value="Bùi Trần Việt Anh" />
                  </div>
                </b-field>
                <b-field>
                  <div class="field-label is-normal">
                    <p>Ngày sinh</p>
                  </div>
                  <div class="input-text">
                    <b-datepicker
                      placeholder="Click to select..."
                      :min-date="minDate"
                      :max-date="maxDate"
                    ></b-datepicker>
                  </div>
                </b-field>
                <b-field>
                  <div class="field-label is-normal">
                    <p>Giới tính</p>
                  </div>
                  <div class="input-text">
                    <div class="select is-fullwidth">
                      <select>
                        <option>Nam</option>
                        <option>Nữ</option>
                      </select>
                    </div>
                  </div>
                </b-field>
              </div>
              <div class="content-right column is-3">
                <div class="first-title">
                  <p>🖼️ Ảnh đại diện</p>
                </div>
                <img
                  class="picture-user"
                  src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg"
                />
                <div class="picture-information">
                  <p>
                    Dụng lượng file tối đa 1 MB
                    Định dạng:.JPEG, .PNG
                  </p>
                  <div class="message-picture">
                    <p>Không thể tải hình ảnh lên</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="save-button">
              <b-button type="is-success">💾 Lưu thay đổi</b-button>
            </div>
          </div>
        <section v-if="address">
          qdqqwd
        </section>
        <section v-if="identity">
          awawof2ajo3iaj
        </section>
        <section v-if="password">1</section>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      info: true,
      address: false,
      identity: false,
      password: false
    };
  }
};
</script>
<style scoped>
.menu-information {
  color: #07d390;
  font-family: Roboto;
  font-size: 15px;
}

.tab-information {
  font-family: Merriweather;
  font-size: 19px;
  width: auto;
  font-weight: bolder;
}
.file-container {
  max-width: 1366px;
  margin: auto 60px auto 60px;
}
.first-content{
  display: flex;
  flex-flow: row;
}
.content-all {
  width: 100%;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
}
.content-information {
  display: flex;
  padding: 24px;
}
.input-text {
  min-width: 400px;
  height: 44px;
  margin-left: 30px;
}
.field-label p {
  font-family: Roboto;
  font-size: 18px;
  color: #707070;
  text-align: left;
}
.first-title p {
  font-family: Roboto;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
}
.first-content-right p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
}
.picture-user {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  margin: 32px auto 30px auto;
}
.picture-information p {
  font-family: Roboto;
  font-size: 16px;
  color: #707070;
}
.message-picture p {
  font-family: Roboto;
  font-size: 16px;
  color: #fd5e53;
}
.save-button{
  width: 135px;
  height: 44px;
  margin: 0 auto 32px auto;
}
</style>