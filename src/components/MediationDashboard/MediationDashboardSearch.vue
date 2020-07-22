<template>
  <div class="search-container">
    <span class="button is-static">🔄 Làm mới</span>
    <b-field class="search-bar">
      <b-input placeholder="🔍 Tìm kiếm quả ngon" type="search"></b-input>
    </b-field>
  </div>
</template>
<style scoped>
.search-container {
    display: flex;
    flex-flow: row;
    margin-top: 24px;
    padding-left: 310px;
}
.search-bar{
    width: 500px;
    height: 21px;
}
.button {
    margin-right: 20px;
}
</style>