<template>
  <div class="collectionproduct">
    <div class="product-container">
      <img
        id="logo"
        src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
      />
      <div class="product-content">
        <p class="product-title">{{ product.title }}</p>
        <p class="section-label-1">{{ product.point }}</p>
        <div class="section-label-2">
          <p>{{ product.time }}</p>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionproduct",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.product-container {
  height: 354px;
  width: 400px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
}

.product-container:hover {
  box-shadow: 0 3px 16px #00000029;
}

.product-container img {
  width: 400px;
  height: 194px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

.product-content {
  width: 400;
  height: 160;
  padding: 12px 16px 16px 16px;
}

.product-title {
  height: 28px;
  width: 200px;
  font-size: 22px;
  font-weight: 500;
  color: #000000;
  /* margin-bottom: 16px; */
  font-family: "Merriweather";
  line-height: 17px;
}

/* .product-section {
  margin-bottom: 36px;
} */

.section-label-1 {
  /* margin-left: 0px; */
  /* margin-top: 100px; */
  margin-top: 15px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #707070;
}

.section-label-2 {
  /* margin-top: 100px; */
  margin-top: 15px;
  margin-left: 260px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #707070;
}

.section-content {
  font-family: "Roboto";
  /* font-weight: 700; */
  font-size: 17px;
  font-weight: 700;
  color: #01d28e;
}

.collectionproduct {
  margin-left: -100px;
}
</style>