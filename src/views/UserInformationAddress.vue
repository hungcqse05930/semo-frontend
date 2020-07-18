<template>
  <div class="address-container">
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
              <p>🏡 Địa chỉ</p>
            </div>
              <div class="address-button">
                <b-button type="is-success">➕ Thêm địa chỉ mới</b-button>
              </div>
            </div>
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
  name: "userinformationaddress",
  components: {
    TabInformation,
    UserFirstDescription,
    UserInformationMenu
  }
};
</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.file-container {
  max-width: 1366px;
  margin: auto 60px auto 60px;
}
.first-content {
  display: flex;
  flex-flow: row;
}
.content-all {
  width: 1034px;
}
.content-information {
  display: flex;
  height: 350px;
  margin-right: 60px;
}
.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
}
.content-middle {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>