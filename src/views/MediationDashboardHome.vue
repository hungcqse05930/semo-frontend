<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Trang chủ</p>
      </div>
      <MediationDashboardSearch />
    </div>
    <div class="home-content">
      <MediationDashboardMenu />
      <div class="home-product-status">
        <div class="home-product">
          <p>📦 Sản phẩm</p>
          <p>{{product.number}}</p>
        </div>
        <div class="home-status">
          <div class="product-status">
            <p>CHƯA KIỂM DUYỆT</p>
            <p>CẦN CHỈNH SỬA</p>
            <p>ĐÃ KIỂM DUYỆT</p>
            <p>ĐANG ĐẤU GIÁ</p>
            <p>ĐANG GIAO KÈO</p>
          </div>
          <div class="product-number">
            <p>{{product.nonchecked}}</p>
            <p>{{product.edit}}</p>
            <p>{{product.checked}}</p>
            <p>{{product.bid}}</p>
            <p>{{product.contract}}</p>
          </div>
        </div>
      </div>
      <div class="home-content-mid">
        <div class="product-user">
          <div class="home-product">
            <p>🙋‍♀️ Người dùng</p>
            <p>{{product.user}}</p>
          </div>
        </div>
        <div class="product-bid">
          <div class="home-bid">
            <p>🙋‍♀️ Người dùng</p>
            <p>{{product.bid}}</p>
          </div>
        </div>
        <div class="product-user">
          <div class="home-product">
            <p>🙋‍♀️ Người dùng</p>
            <p>{{product.user}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MediationDashboardMenu from "../components/MediationDashboard/MediationDashboardMenu.vue";
import MediationDashboardSearch from "../components/MediationDashboard/MediationDashboardSearch.vue";

export default {
  name: "mediationdashboardhome",
  components: {
    MediationDashboardMenu,
    MediationDashboardSearch
  },
  data() {
    return {
      product: {
        number: "17,283",
        nonchecked: "246",
        edit: "4,831",
        checked: "5,052",
        bid: "2,076",
        contract: "598",
        user: "6,590"
      }
    };
  }
};
</script>
<style scoped>
.logo {
  width: 120px;
  height: 40px;
  margin: 24px 40px 24px 40px;
}
.type-name {
  font-family: Merriweather;
  font-size: 25px;
  color: #b88cd8;
  opacity: 1;
}
.home-content {
  display: flex;
  flex-flow: row;
}
.type-name p {
  border-bottom: #01d28e solid 3px;
  margin: 24px auto auto 40px;
}
.dashboard-header {
  display: flex;
  flex-flow: row;
}
.dashboard-table {
  display: flex;
  flex-flow: row;
}
.home-product-status {
  width: 346px;
  height: 242px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
}
.home-product {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 21px 13px;
}
.home-product p {
  font-family: Roboto;
  font-size: 17px;
  color: #01d28e;
  font-weight: 700;
}
.home-status {
  display: flex;
  justify-content: space-between;
}
.product-status {
  font-family: Roboto;
  font-size: 13px;
  color: #707070;
  font-weight: 700;
}
.product-status p {
  padding-bottom: 13px;
  padding-left: 15px;
}
.product-number p {
  padding-bottom: 13px;
  padding-right: 15px;
}
.product-number {
  font-family: Roboto;
  font-size: 13px;
  color: #01d28e;
  font-weight: 700;
}
.product-user {
  width: 346px;
  height: 54px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  margin: 0 24px 0 24px;
}
</style>