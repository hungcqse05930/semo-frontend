<template>
  <div class="container">
    <!--  -->
    <p class="title search-result">
      Kết quả tìm kiếm cho
      <strong>{{ search_key }}</strong>
    </p>
    <!--  -->
    <b-tabs>
      <b-tab-item label="🍎 Sản phẩm">
        <!--  -->
      </b-tab-item>
      <b-tab-item label="📘 Bộ sưu tập">
        <!--  -->
      </b-tab-item>
      <b-tab-item label="👦 Người dùng">
        <!--  -->
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  props: {
    search_key: String
  }
};
</script>

<style>
</style>