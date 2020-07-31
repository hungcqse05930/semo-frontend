<template>
  <div class="container">
    <div class="title">
      <p class="list-title">
        <slot name="title"></slot>
      </p>
    </div>
    <div class="fruit-list columns is-multiline">
      <div class="fruit column is-2-fullhd is-2-widescreen is-3-desktop is-4-tablet is-half-mobile" v-for="(item, i) in items" :key="i">
        <div class="img-container" :style="{ backgroundImage: 'url(' + item.icon_url + ')' }"></div>
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="show-all">
      <slot name="show-all">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridList",
  props: {
    items: Array,
    url: String
  },
};
</script>

<style scoped>
.img-container {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.title, .fruit, .show-all {
    display: flex;
    justify-content: center;
}

.fruit {
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.fruit-list {
  margin: auto;
}

.fruit p {
  margin-top: 16px;
}

.show-all {
  margin-top: 24px;
}
</style>