<template>
  <div class="homepage-banner-container">
    <b-carousel class="homepage-banner-carousel" :indicator="indicator" :arrow="arrow">
      <b-carousel-item class="homepage-banner-carousel-item" v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{carousel.text}}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <div class="homepage-banner-stripes">
      <div class="homepage-banner-stripe" id="first-banner-stripe" slot="banner-stripe-01"></div>
      <div class="homepage-banner-stripe" slot="banner-stripe-02"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageBanners',
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" }
      ],
      indicator: false,
      arrow: false
    };
  }
};
</script>

<style scoped>
.homepage-banner-container {
  display: flex;
  width: 1246px;
}

.homepage-banner-carousel {
  margin-right: 16px;
}

.homepage-banner-carousel-item {
  width: 825px !important;
  height: 256px !important;
  overflow: hidden !important;
}

.hero-body, .has-text-centered {
  height: 256px !important;
  overflow: hidden;
}

.homepage-banner-stripe {
  width: 405px;
  height: 120px;
  background-color: #09a89f;
}

.column {
    padding: 8px;
}

#first-banner-stripe {
    margin-bottom: 16px;
}
</style>