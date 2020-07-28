<template>
  <div class="auction-container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <TabInformation />
    <div class="user-content">
      <UserAuctionMenu />
      <div class="content-all">
        <div class="content-information">
          <div class="content-middle">
            <b-field class="search-title">
              <b-input placeholder="🔍 Tìm kiếm sản phẩm" type="search"></b-input>
            </b-field>
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
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import TabInformation from "../components/UserInformation/TabInformation.vue";
import UserAuctionMenu from "../components/UserBidProduct/UserAuctionMenu.vue";
export default {
  name: "userbidauction",
  components: {
    UserFirstDescription,
    TabInformation,
    UserAuctionMenu
  }
};
</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.search-title {
  width: 100%;
}
.content-all {
  width: 1034px;
}
</style>