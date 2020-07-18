<template>
  <div class="collectionproduct">
    <div class="product-container">
      <img
        id="logo"
        src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
      />
      <div class="product-content">
        <p class="product-title">{{ product.title }}</p>

        <!-- <p class="product-space"></p>

        <p class="section-label">{{ product.pricetext }}</p>
        <p class="product-price">{{ product.price }}</p>

        <p class="product-space"></p> -->

        <!-- <p class="section-label">{{ product.timetext }}</p>
        <p class="product-time">{{ product.time }}</p> -->
        <div class="product-information">
          <p class="section-label">{{ product.point }}</p>
          <p class="section-label">{{ product.address.province }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "Product",
  //   data() {
  //   return {
  //     product: {
  //       title: "Táo này đỉnh vcl các bạn ơi",
  //       weight: "4,2 tạ",
  //       pricetext: "Giá hiện tại",
  //       price: "80.000.000đ",
  //       timetext: "Thời gian còn lại",
  //       time:"4 tháng 21 ngày",
  //       address: {
  //       province: "Long An"
  //       },

  //     }
  //   };
  // }
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
  height: 40px;
  width: 100px;
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
  margin-bottom: 10px;
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