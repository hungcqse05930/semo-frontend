<template>
<div id="createproductfortree">
    <CreateHeader/>
    <CreateProductTree/>
</div>
</template>
<script>

import CreateProductTree from "../components/CreateNewProduct/CreateProductTree.vue";
import CreateHeader from "../components/CreateNewProduct/CreateHeader.vue";

export default {
  name: "createproductfortree",
  components: {
    CreateProductTree,
    CreateHeader,
  }
};
</script>