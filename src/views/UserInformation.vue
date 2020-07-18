<template>
  <div class="container">
    <div class="first-content">
      <UserFirstDescription />
      <RateUser/>
    </div>
    <TabInformation />
    <div class="user-content">
      <UserInformationMenu />
      <div class="content-all">
        <div class="content-information">
          <div class="content-middle">
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
          <div class="content-right">
            <div class="first-content-right">
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
    </div>
  </div>
</template>
<script>
import TabInformation from "../components/UserInformation/TabInformation.vue";
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import UserInformationMenu from "../components/UserInformation/UserInformationMenu.vue";
import RateUser from "../components/UserInformation/RateUser.vue";
export default {
  name: "userinformation",
  components: {
    TabInformation,
    UserFirstDescription,
    UserInformationMenu,
    RateUser
  }
};
</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.container {
  max-width: 1366px;
  margin: auto 60px auto 60px;
}
.first-content{
  display: flex;
  flex-flow: row;
}
.content-all {
  width: 1034px;
  /* height: 447px; */
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  /* transition: 0.25s; */
}
.content-information {
  display: flex;
  height: 350px;
  margin-right: 60px;
}
.input-text {
  width: 480px;
  height: 44px;
  margin-left: 30px;
}
.field-label p {
  font-family: Roboto;
  font-size: 18px;
  color: #707070;
  text-align: left;
  margin-left: 32px;
  width: 106px;
}
.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
  margin: 32px auto 32px 32px;
}
.content-right {
  width: 219px;
  margin: 32px auto 122px 100px;
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
  font-size: 18px;
  color: #707070;
}
.message-picture p {
  font-family: Roboto;
  font-size: 18px;
  color: #fd5e53;
}
.save-button{
  width: 135px;
  height: 44px;
  margin: 0 auto 32px auto;
}

</style>