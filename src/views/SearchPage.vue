<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <PageTitleBar />
      <Content />
    <CategoryBar />-->
    <Header />
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
// import PageTitleBar from "../components/Search/PageTitleBar.vue";
// import Content from "../components/Search/Content.vue";
// import CategoryBar from "../components/Search/CategoryBar.vue";
import Header from "../components/Search/Header.vue";
// import SearchResult from "../components/Search/SearchResult.vue";
// import Product from "../components/Search/Product.vue";
// import PageBar from "../components/Search/PageBar.vue";
// import Footer from "../components/Search/Footer.vue";

export default {
  name: "App",
  components: {
    // PageTitleBar,
    // Content,
    // CategoryBar,
    Header
    // SearchResult,
    // Product,
    // PageBar,
    // Footer,
  },
  created: function() {
    fetch('http://localhost:3003/product/')
    .then(response => response.json())
    .then(json => {
      this.products_new = json
    })
  },
  data() {
    return {
      products_new: Array,
      products: [
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        }
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
            province: "Long An"
          }
        },
      ],
    };
  }
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
</style>
