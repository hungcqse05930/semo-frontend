<template>
  <div id="app" class="container">
    <div class="first-content">
      <UserFirstDescription />
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
                <p>Mật khẩu cũ</p>
              </div>
                <div class="input-text">
                  <input class="input" type="password" />
                </div>
            </b-field>
            <b-field>
              <div class="field-label is-normal">
                <p>Mật khẩu mới</p>
              </div>
              <div class="input-text">
                <input class="input" type="password" />
              </div>
            </b-field>
            <b-field>
              <div class="field-label is-normal">
                <p>Xác nhận mật khẩu mới</p>
              </div>
              <div class="input-text">
                <input class="input" type="password" />
              </div>
            </b-field>
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
export default {
  name: "resetpassword",
  components: {
    TabInformation,
    UserFirstDescription,
    UserInformationMenu,
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
.first-content {
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
  width: 110px;
}
.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
  margin: 32px auto 32px 32px;
}
.first-content-right p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
}
.save-button {
  width: 135px;
  height: 44px;
  margin: 0 auto 32px auto;
}
</style>