<template>
  <div class="product">
    <div class="product-container">
      <img
        id="logo"
        src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.product-container {
  height: 100px;
  width: 100px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  margin-left: 10px;
  margin-top: 24px;
}

.product-container:hover {
  box-shadow: 0 3px 16px #00000029;
}

.product-container img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

.product-content {
  padding: 12px 16px 16px 16px;
}

.product-title {
  font-size: 17px;
  font-weight: 500;
  color: #000000;
  /* margin-bottom: 16px; */
  font-family: "Roboto";
  line-height: 17px;
}

/* .product-section {
  margin-bottom: 36px;
} */

.section-label {
  /* margin-left: 0px; */
  /* margin-top: 100px; */
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #707070;
}
.section-label1 {
  /* margin-top: 100px; */
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

.product-space {
  margin-bottom: 16px;
}

.product-information {
  /* padding-right: 16px; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.product-price {
  color: #01d28e;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
}

.product-time {
  color: #707070;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
}
</style>