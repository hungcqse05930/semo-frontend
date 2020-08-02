<template>
  <div class="container">
    <!-- subtitle tabs -->
    <div id="sub-nav">
      <div
        id="sub-content"
        class="column is-two-thirds"
      >
        <router-link to="/">🏡 Trang chủ</router-link>
        <router-link to="/auction/latest">🎇 Mới nhất</router-link>
        <router-link to="/fruit">🍑 Loại quả</router-link>
        <router-link to="/collection">📘 Bộ sưu tập</router-link>
      </div>
    </div>
    <!-- welcome -->
    <div class="welcome">
      <p>Sản phẩm mới nhất</p>
    </div>
    <!-- auctions -->
    <div class="auctions">
      <auction-grid-list :products="products">
        <template v-slot:more-button>
          <div class="container">
            <b-pagination
              :total="total"
              :current.sync="current"
              :range-before="rangeBefore"
              :range-after="rangeAfter"
              :order="order"
              :size="size"
              :simple="isSimple"
              :rounded="isRounded"
              :per-page="perPage"
              :icon-prev="prevIcon"
              :icon-next="nextIcon"
              aria-next-label="Trang sau 👉"
              aria-previous-label="👈 Trang trước"
              aria-page-label="Trang"
              aria-current-label="Trang hiện tại"
            ></b-pagination>
          </div>
        </template>
      </auction-grid-list>
    </div>
  </div>
</template>

<script>
import AuctionGridList from "../components/AuctionGridList.vue";

export default {
  name: "AuctionLatest",
  components: {
    AuctionGridList,
  },
  data() {
    return {
      total: 200,
      current: 1,
      perPage: 10,
      rangeBefore: 1,
      rangeAfter: 1,
      order: "is-centered",
      size: "",
      isSimple: false,
      isRounded: true,
      prevIcon: "arrow-left",
      nextIcon: "arrow-right",
      // top viewed
      products: [
        {
          id: 1,
          title: "primary",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 2,
          title: "info",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 3,
          title: "success",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 4,
          title: "warning",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 5,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 6,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 7,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 8,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 9,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
        {
          id: 10,
          title: "danger",
          price: 200000,
          img_url: "https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg",
          remaining: "04 tháng 12 ngày",
          weight: "5.42 tấn",
          address: { province: "Hà Giang" },
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>