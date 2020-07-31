<template>
  <div class="container">
    <div class="title">
      <p class="list-title">
        <slot name="title"></slot>
      </p>
      <div class="nav-button">
        <b-button type="is-rounded" @click="swipeLeft">👈 Trang trước</b-button>
        <b-button type="is-rounded" @click="swipeRight" style="margin-left: 16px;">Trang sau 👉</b-button>
      </div>
    </div>
    <div class="auctions-strip columns is-mobile is-1">
      <div
        id="auction-strip"
        class="auction column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-2-fullhd"
        v-for="(product, i) in products"
        :key="i"
      >
        <auction-card :product="product"></auction-card>
      </div>
    </div>
  </div>
</template>

<script>
import AuctionCard from "./AuctionCard.vue";
export default {
  name: "AuctionCarouselList",
  props: {
    products: Array,
  },
  components: {
    AuctionCard,
  },
  methods: {
    /*eslint-disable */
    swipeLeft() {
      let content = document.querySelector(".auctions-strip");
      content.scrollLeft -= 500;
    },
    swipeRight() {
      let content = document.querySelector(".auctions-strip");
      content.scrollLeft += 500;
    },
  },
};
</script>
/*eslint-enable */
<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.auctions-strip {
  padding: 10px;
  width: 100%;
  display: inline-flex;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
</style>