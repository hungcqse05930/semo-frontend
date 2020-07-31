<template>
  <div class="container">
    <!-- banner -->
    <div class="columns is-1">
      <div class="column is-full">
        <b-carousel
          class="banners"
          v-model="carousel"
          :animated="animated"
          :has-drag="drag"
          :autoplay="autoPlay"
          :pause-hover="pauseHover"
          :pause-info="pauseInfo"
          :interval="interval"
          :repeat="repeat"
        >
          <b-carousel-item class="banner" v-for="(carousel, i) in carousels" :key="i">
            <div class="banner">
              <img :src="carousel.img_url" />
            </div>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
    <!-- top collections -->
    <div class="columns is-1 collections">
      <div
        class="column is-one-fifth collection"
        v-for="collection in collections"
        :key="collection.id"
      >
        <div
          class="collection-content"
          :style="{ backgroundImage: 'linear-gradient(to right, rgb(0,0,0,0.8), rgb(1,210,142, 0.1)), url(' + collection.img_url + ')' }"
        >
          <p class="collection-title column is-two-thirds">{{ collection.title }}</p>
        </div>
        <!--   -->
      </div>
    </div>
    <!-- most viewed -->
    <div class="most-viewed">
      <product-carousel-list :products="products">
        <template v-slot:title>Đông đảo bà con</template>
      </product-carousel-list>
    </div>
    <!-- fruits -->
    <div class="fruits">
      <grid-list :items="fruits">
        <template v-slot:title>Loại quả</template>
        <template v-slot:show-all>
          <router-link to="/fruit">XEM TẤT CẢ</router-link>
        </template>
      </grid-list>
    </div>
    <!-- latest and closing soon auctions -->
    <div class="auctions">
      <product-grid-list :titles="titles"></product-grid-list>
    </div>
  </div>

  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <!-- Nút này để mở modal 1, @click là event mở modal 1 -->
  <!-- <b-bu
  333tton @click="open_instruction">Show modal 1</b-button>-->

  <!-- Modal 1 -->
  <!-- <b-modal :active.sync="modal1" :width="640" scroll="keep">
      <div class="modal-card-body">
         Nút này để đóng modal 1 và mở modal 2, @click là event đóng modal 1 và mở modal 2 
        <b-button @click="close_instruction">Show modal 2</b-button>
      </div>
  </b-modal>-->

  <!-- Modal 2 -->
  <!-- <b-modal :active.sync="modal2" :width="640" scroll="keep">
      <div class="modal-card-body">
        <h2>Modal 2</h2>
        <p>Helloooooooooo</p>
      </div>
  </b-modal>-->
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import ProductCarouselList from "../components/ProductCarouselList.vue";
import ProductGridList from "../components/ProductGridList.vue"
import GridList from "../components/GridList.vue";

export default {
  name: "Home",
  components: {
    ProductCarouselList,
    GridList,
    ProductGridList
  },
  data() {
    return {
      // carousel banner
      carousel: 0,
      animated: "slide",
      drag: true,
      autoPlay: true,
      pauseHover: true,
      pauseInfo: false,
      repeat: true,
      interval: 3000,
      carousels: [
        {
          title: "Slide 1",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
        {
          title: "Slide 2",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
        {
          title: "Slide 3",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
        {
          title: "Slide 4",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
        {
          title: "Slide 5",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
        {
          title: "Slide 6",
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
        },
      ],
      // top collections
      collections: [
        {
          id: 1,
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
          title: "Mùa hè của tôi",
        },
        {
          id: 2,
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
          title: "Oi vãi lồn",
        },
        {
          id: 3,
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
          title: "Nộp tiền đi",
        },
        {
          id: 4,
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
          title: "Bị sao thế?",
        },
        {
          id: 5,
          img_url:
            "https://cdn-prod.medicalnewstoday.com/content/images/hero/325/325253/325253_1100.jpg",
          title: "Chúc vui",
        },
      ],
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
      // fruits
      fruits: [
        {
          id: 1,
          title: "Thanh long",
          icon_url:
            "https://www.healthline.com/hlcmsresource/images/AN_images/dragon-fruit-1200x628-facebook.jpg",
        },
        {
          id: 2,
          title: "Táo Ambrossia",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 3,
          title: "Cam canh",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 4,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 5,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 6,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 7,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 8,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 9,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 10,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 11,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
        {
          id: 12,
          title: "Thanh long",
          icon_url:
            "https://i5.walmartimages.ca/images/Enlarge/094/512/6000200094512.jpg",
        },
      ],
      // auctions
      // titles
      titles: [
        {
          index: 1,
          name: "Mới nhất"
        },
        {
          index: 2,
          name: "Sắp kết thúc"
        }
      ]
      // modal1: false,
      // modal2: false,
    };
  },
  methods: {
    // Đóng modal 1 và mở modal 2
    close_instruction() {
      this.modal1 = false;
      this.modal2 = true;
    },
    // Mở modal 1
    open_instruction() {
      this.modal1 = true;
    },
  },
};
</script>

<style scoped>
.banners {
  overflow: hidden;
  height: 250px;
  border-radius: 10px;
}

.banner img {
  width: 100%;
}

.collection-content {
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;
  border-radius: 10px;
  height: 100px;
}

.collection-title {
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.most-viewed, .fruits, .auctions {
  margin-top: 80px;
}
</style>