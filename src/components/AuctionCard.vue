<template>
  <a :href="product.url">
    <div class="product-container">
      <div class="product-thumbnail" :style="{backgroundImage: 'url(' + product.img_url + ')'}">
        <!-- <img src="@/assets/logo.png" :alt="product.title" /> -->
      </div>
      <div class="product-content">
        <p class="product-title">{{ product.title }}</p>
        <div class="product-section">
          <p class="section-label">Giá hiện tại</p>
          <p class="section-content">{{ product.price }}đ</p>
        </div>
        <div class="product-section">
          <p class="section-label">Thời gian còn lại</p>
          <p class="section-content">{{ product.remaining }}</p>
        </div>
        <div class="product-information">
          <p class="section-label">{{ product.weight }}</p>
          <p class="section-label">{{ product.address.province }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "AuctionCard",
  props: {
    product: Object,
  },
  // },
  // data() {
  //   return {
  //     product: {
  //       title: "ABC",
  //       price: 200.05,
  //       remaining: "13h",
  //       weight: "4.25 tấn",
  //       address: {
  //         province: "An Giang"
  //       },
  //       media: "../../assets/logo.png"
  //     }
  //   };
  // }
};
</script>

<style scoped>
a {
  width: 100%;
  height: fit-content;
  text-align: left;
}

.product-container {
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  overflow: hidden;
}

.product-container:hover {
  box-shadow: 0 3px 16px #00000029;
}

.product-thumbnail {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* .product-thumbnail img {
  height: 100%;
  width: initial;
} */

.product-content {
  padding: 12px 16px 16px 16px;
}

.product-title {
  font-size: 17px;
  font-weight: 900;
  color: #000000;
  margin-bottom: 16px;
}

.product-section {
  margin-bottom: 16px;
}

.section-label {
  font-family: "Roboto";
  font-size: 13px;
  color: #707070;
}

.section-content {
  font-family: "Roboto";
  font-size: 17px;
  font-weight: 700;
  color: #01d28e;
}

.product-information {
  display: flex;
  justify-content: space-between;
}
</style>