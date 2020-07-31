<template>
  <div class="container">
    <!-- title bar -->
    <div class="title columns is-2 is-mobile">
      <div class="column is-one-third" v-for="title in titles" :key="title.index">
        <p
          :class="{ 'list-title' : activeTab === title.index, 'list-title-inactive' : activeTab !== title.index }"
          @click="changeIndex(title.index)"
        >{{ title.name }}</p>
      </div>
    </div>
    <!-- product showcase -->
    <div class="auctions-strip columns is-multiline is-mobile is-1">
      <div
        id="auction-strip"
        class="auction column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-2-fullhd"
        v-for="(product, i) in products"
        :key="i"
      >
        <auction-card :product="product"></auction-card>
      </div>
    </div>
    <!-- more button -->
    <div class="more-button">
        <slot name="more-button">
        </slot>
    </div>
  </div>
</template>

<script>
import AuctionCard from "../components/AuctionCard.vue";

export default {
  name: "AuctionGridList",
  components: {
    AuctionCard,
  },
  props: {
    titles: Array,
    products: Array,
  },
  data() {
    return {
      activeTab: 1
    };
  },
  methods: {
    changeIndex(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style scoped>
.more-button {
    display: flex;
    justify-content: center;
}
</style>