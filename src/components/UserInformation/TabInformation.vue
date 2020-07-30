<template>
  <div class="container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <b-tabs>
      <b-tab-item class="tab-information" label="📝 Thông tin cá nhân">
        <div class="user-content">
          <UserInformationMenu />
        </div>
      </b-tab-item>
      <b-tab-item label="📦 Sản phẩm bạn đăng"></b-tab-item>
      <b-tab-item label="🛒 Sản phẩm bạn mua"></b-tab-item>
      <b-tab-item label="👛 Ví của bạn"></b-tab-item>
    </b-tabs>
  </div>
</template>
<script>
import UserFirstDescription from "./UserFirstDescription.vue";
import UserInformationMenu from "./UserInformationMenu.vue";
export default {
  name: "tabinformation",
  components: {
    UserFirstDescription,
    UserInformationMenu,
  }
};
</script>
<style scoped>
.tab-information {
  font-family: Merriweather;
  font-size: 19px;
  width: auto;
  font-weight: bolder;
}
.user-content {
  display: flex;
  /* margin: 36px 0px 60px auto; */
}
.first-content {
  display: flex;
  flex-flow: row;
}
</style>