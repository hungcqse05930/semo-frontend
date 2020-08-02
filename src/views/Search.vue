<template>
  <div class="container">
    <!-- search keyword -->
    <div class="welcome">
      <p>
        Kết quả tìm kiếm cho
        <i style="color: #42b983;">{{keyword}}</i>
      </p>
    </div>
    <!-- tab filtering results -->
    <b-tabs class="tab" v-model="activeTab" expanded>
      <b-tab-item label="🍎 Đấu giá"></b-tab-item>
      <b-tab-item label="📘 Bộ sưu tập"></b-tab-item>
      <b-tab-item label="👦 Người dùng"></b-tab-item>
    </b-tabs>
    <!-- result -->
    <div class="result">
      <!-- auction -->
      <search-results class="auctions-result" v-if="activeTab === 0">
        <template v-slot:result-frame>
          <auction-grid-list :products="products">
            <template v-slot:more-button>
              <div class="container">
                <b-pagination
                  :total="total"
                  :current.sync="current"
                  range-before="1"
                  range-after="1"
                  order="is-centered"
                  rounded
                  :per-page="20"
                  icon-prev="arrow-left"
                  icon-next="arrow-right"
                  aria-next-label="Trang sau 👉"
                  aria-previous-label="👈 Trang trước"
                  aria-page-label="Trang"
                  aria-current-label="Trang hiện tại"
                ></b-pagination>
              </div>
            </template>
          </auction-grid-list>
        </template>
      </search-results>
      <!-- user -->
      <search-results class="auctions-result" v-if="activeTab === 2">
        <template v-slot:result-frame>
          <auction-grid-list :products="products">
            <template v-slot:more-button>
              <div class="container">
                <b-pagination
                  :total="total"
                  :current.sync="current"
                  range-before="1"
                  range-after="1"
                  order="is-centered"
                  rounded
                  :per-page="20"
                  icon-prev="arrow-left"
                  icon-next="arrow-right"
                  aria-next-label="Trang sau 👉"
                  aria-previous-label="👈 Trang trước"
                  aria-page-label="Trang"
                  aria-current-label="Trang hiện tại"
                ></b-pagination>
              </div>
            </template>
          </auction-grid-list>
        </template>
      </search-results>
    </div>
    <!-- <div id="nav"> -->
    <!-- <PageTitleBar />
      <Content />
    <CategoryBar />-->
    <!-- <Header /> -->
    <!-- <div class="search-result">
        <div>
          <SearchResult />        
        </div>
        <div class="products">
          <Product
            class="product-item"
            v-bind:product="product"
            v-for="product in products"
            v-bind:key="product.id"
          />
          
        </div>
        
      </div>
    <PageBar></PageBar>-->
    <!-- </div> -->
    <!-- <Footer/> -->
  </div>
</template>

<script>
import AuctionGridList from "../components/AuctionGridList.vue";
import SearchResults from "../components/Search/SearchResults.vue";

export default {
  name: "App",
  components: {
    SearchResults,
    AuctionGridList,
  },
  props: ["keyword"],
  data() {
    return {
      // products
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
      users: [
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An",
          },
        },
      ],
      activeTab: 0,
      total: 100,
      current: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
#app {
  @import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700;900&display=swap");
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  /* margin-top: 10px; */
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.search-result {
  display: inline-flex;
  justify-content: space-between;
  padding: 0 30px;
}

.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}

.product-item {
  padding: 12px;
}

.users {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}

.user-item {
  padding: 12px;
}

.result {
  margin-top: -40px;
}
</style>
