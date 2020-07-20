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
            <div class="address-columns">
              <div class="addresses">
                <UserinformationAddressInfor
                  class="address-item"
                  v-bind:address="address"
                  v-for="address in addresses"
                  v-bind:key="address.id"
                />
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
import UserinformationAddressInfor from "../components/UserInformation/UserinformationAddressInfor.vue";
export default {
  name: "userinformationaddress",
  components: {
    TabInformation,
    UserFirstDescription,
    UserInformationMenu,
    UserinformationAddressInfor
  },
  data() {
    return {
      addresses: [
        {
          id: 1,
          name: "Bùi Trần Việt Anh",
          phonenumber: "0912345678",
          title: "Trang trại Thiên Thạch, ấp 6 thôn Đồng Phân",
          first: "Xã Cù Mần",
          second: "Huyện Trà Vinh",
          city: "Thanh Hóa"
        },
        {
          id: 1,
          name: "Nguyễn Hoàng Minh Phương",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          first: "Xã Địa Đàng",
          second: "Huyện Củ Chiêu",
          city: "Thành phố Hồ Chí Minh"
        },
        {
          id: 1,
          name: "Dương Quí Phi",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          first: "Xã Địa Đàng",
          second: "Huyện Củ Chiêu",
          city: "Thành phố Hồ Chí Minh"
        },
        {
          id: 1,
          name: "Dương Quí Phi",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          first: "Xã Địa Đàng",
          second: "Huyện Củ Chiêu",
          city: "Thành phố Hồ Chí Minh"
        },
         {
          id: 1,
          name: "Dương Quí Phi",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          first: "Xã Địa Đàng",
          second: "Huyện Củ Chiêu",
          city: "Thành phố Hồ Chí Minh"
        },
         {
          id: 1,
          name: "Dương Quí Phi",
          phonenumber: "0732569841",
          title: "Trang trại Lếu Lều, đòn 7 ấp 2 thôn Quỳnh Hương",
          first: "Xã Địa Đàng",
          second: "Huyện Củ Chiêu",
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
.addresses{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(-100px, auto);
  margin-left: 23px;
  margin-top: 24px;
}
</style>