<template>
  <div class="address-container">
    <div class="first-content">
      <!-- <UserFirstDescription /> -->
    </div>
    <!-- <TabInformation /> -->
    <div class="user-content">
      <UserInformationMenu />
      <div class="content-all">
        <div class="content-information">
          <div class="content-middle">
            <div class="first-title">
              <p>🏡 Địa chỉ</p>
            </div>
            <div class="address-button">
              <b-button @click="editAlert" type="is-primary">➕ Thêm địa chỉ mới</b-button>
              <b-modal>
                <UserInformationEditAddress />
              </b-modal>
            </div>
          </div>
          <div class="address-information">
            <div class="addresses">
              <UserinformationAddressInfor
                class="address-item"
                v-bind:address="address"
                v-for="address in addresses"
                v-bind:key="address.id"
              />
            </div>
          </div>
          <div class="pagination">
            <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
            <div class="paging">
              <p class="page-back">👈 Trang trước</p>
              <p class="page-next">Trang sau 👉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import TabInformation from "../components/UserInformation/TabInformation.vue";
// import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import UserInformationMenu from "../components/UserInformation/UserInformationMenu.vue";
import UserinformationAddressInfor from "../components/UserInformation/UserinformationAddressInfor.vue";
import UserInformationEditAddress from "../components/UserInformation/UserInformationEditAddress.vue";

export default {
  name: "userinformationaddress",
  components: {
    // TabInformation,
    // UserFirstDescription,
    UserInformationMenu,
    UserinformationAddressInfor,
    UserInformationEditAddress
  },
    methods: {
    editAlert() {
      this.$buefy.modal.open({
        parent: this,
        component: UserInformationEditAddress,
        hasModalCard: true,
        trapFocus: true
      });
    }
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
.addresses {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(-100px, auto);
  margin-top: 24px;
}
.address-item {
  margin-right: 24px;
  margin-bottom: 24px;
}
.address-information {
  width: 100%;
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.post-infor {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.paging {
  display: flex;
  justify-content: space-between;
}
.page-back {
  margin-right: 32px;
}
</style>