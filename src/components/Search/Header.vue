<template>
  <div>
    <!-- <PageTitleBar /> -->
    <Content />
    <CategoryBar />
  </div>
</template>

<script>
// import PageTitleBar from "../../components/Search/PageTitleBar.vue";
import Content from "../../components/Search/Content.vue";
import CategoryBar from "../../components/Search/CategoryBar.vue";

export default {
  name: "sort",
  components: {
    // PageTitleBar,
    Content,
    CategoryBar
  },
  data() {}
};
</script>