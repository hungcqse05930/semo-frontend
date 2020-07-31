<template>
  <div class="container">
    <div class="title">
      <p class="list-title">
        <slot name="title"></slot>
      </p>
      <div class="nav-button">
        <b-button type="is-text" @click="scrollLeft">👈 Trang trước</b-button>
        <b-button type="is-text" @click="scrollRight">Trang sau 👉</b-button>
      </div>
    </div>
    <div class="products-strip columns is-mobile is-1">
      <div id="product-strip" class="product column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-2-fullhd" v-for="(product, i) in products" :key="i">
        <product-card :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductCarouselList",
  props: {
    products: Array,
  },
  components: {
    ProductCard,
  },
  methods: {
    scrollLeft() {
      document.getElementById("product-strip").scrollLeft += 40
    },
    scrollRight() {
      document.getElementById("product-strip").scrollLeft -= 40
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.products-strip {
  padding: 10px;
  width: 100%;
  display: inline-flex;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>