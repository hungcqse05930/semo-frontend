<template>
  <div class="contentlast">
    <p>Kết quả tìm kiếm cho {{product.search}}</p>
  </div>
</template>

<script>
export default {
  name: "content",
  data() {
    return {
      product: {
        search: "Bưởii"
      }
    };
  }
};
</script>

<style scoped>
.contentlast p {
  margin-top: 36px;
  margin-left: 60px;
  width: 341px;
  height: 24px;
  font-size: 20px;
  font-family: Roboto;
  opacity: 0.65;
}
</style>    