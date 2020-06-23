<template>
  <div class="container">
    <homepage-banners />
    <homepage-categories />
  </div>
</template>

<script>
import HomepageBanners from "./HomepageBanners.vue";
import HomepageCategories from "./HomepageCategories.vue";

export default {
  name: "Homepage",
  components: {
    HomepageBanners,
    HomepageCategories
  }
};
</script>

<style>
.container {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
</style>