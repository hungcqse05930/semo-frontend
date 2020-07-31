<template>
  <div class="container">
    <div class="title columns is-2">
      <div class="column is-2" v-for="title in titles" :key="title.index">
        <p
          :class="{ 'list-title' : activeTab === title.index, 'list-title-inactive' : activeTab !== title.index }"
          @click="changeIndex(title.index)"
        >{{ title.name }}</p>
      </div>
    </div>
    {{ activeTab }}
  </div>
</template>

<script>
export default {
  name: "ProductGridList",
  props: {
    titles: Array,
  },
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeIndex(index) {
      this.activeTab = index;
    },
  },
};
</script>

<style>
</style>