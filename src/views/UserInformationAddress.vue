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
          <div class="address-information">
            <div class="columns">
              <div class="column">
                <p class="address-title"
                 v-bind:address="address"
            v-for="address in address"
            v-bind:key="address.id">{{address.name}}</p>
              </div>
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
  },
  data() {
    return {
      address: [
        {
          id : 1,
          name: "Bùi Trần Việt Anh",
          phonenumber: "0912345678",
          title: "Trang trại Thiên Thạch, ấp 6 thôn Đồng Phân",
          firstaddress: "Xã Cù Mần",
          secondadresss: "Huyện Trà Vinh",
          city: "Thanh Hóa"
        },
        {
          id : 1,
          name: "Nguyễn Hoàng Minh Phương",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          firstaddress: "Xã Địa Đàng",
          secondadresss: "Huyện Củ Chiêu",
          city: "Thành phố Hồ Chí Minh"
        }
      ]
    };
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
.column {
  height: 292px;
  width: 505px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
}
</style>