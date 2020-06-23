<template>
  <div class="categories-container">
      <div class="category" slot="category-01"></div>
      <div class="category" slot="category-02"></div>
      <div class="category" slot="category-03"></div>
      <div class="category" slot="category-04"></div>
      <div class="category" slot="category-05"></div>
      <div class="category" slot="category-06"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.categories-container {
    margin-top: 16px;
    width: 1246px;
    display: flex;
    justify-content: space-between;
}

.category {
    background-color: #326849;
    width: 194px;
    height: 100px;
    padding: 0;
}
</style>