<template>
  <div id="app">
    <div id="nav">
      <!-- <PageTitleBar />
      <Content />
      <CategoryBar />-->
      <Header />
      <div class="search-result">
        <div class="sort">
          <p class="sort_boloc">🔍 Bộ lọc kết quả</p>
          <SearchRate/>
          <SearchAddress/>
        </div>
        <div class="products">
          <User
            class="product-item"
            v-bind:product="product"
            v-for="product in products"
            v-bind:key="product.id"
          />
        </div>
      </div>
      <PageBar></PageBar>
    </div>
    <Footer />
  </div>
</template>

<script>
// import PageTitleBar from "../components/Search/PageTitleBar.vue";
// import Content from "../components/Search/Content.vue";
// import CategoryBar from "../components/Search/CategoryBar.vue";
import Header from "../../components/Search/Header.vue";
// import SearchResult from "../../components/Search/SearchResult.vue";
import User from "../../components/Search/User.vue";
import PageBar from "../../components/Search/PageBar.vue";
import Footer from "../../components/Search/Footer.vue";
import SearchRate from "../../components/Search/SearchRate.vue";
import SearchAddress from "../../components/Search/SearchAddress.vue";



export default {
  name: "App",
  components: {
    // PageTitleBar,
    // Content,
    // CategoryBar,
    Header,
    // SearchResult,
    User,
    PageBar,
    Footer,
    SearchRate,
    SearchAddress,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân1",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
         point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Điền Quân Diễn Quân",
          point: "4,2",
          address: {
            province: "Long An"
          }
        },

      ]
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
    // font-weight: bold;
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
  grid-auto-rows: minmax(200px, auto);
  margin-left: 24px;
  margin-top: 24px;
}

.product-item {
  padding: 12px;
}
.sort {
  margin-top: 34px;
  margin-left: -120px;
  width: 176px;
  height: 934px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  //  background:darkkhaki; 
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_boloc {
  font-family: "Merriweather";
  font-weight: 600;
  font-size: 19px;
  color: #707070;
  /* line-height: 24px; */
}

</style>
