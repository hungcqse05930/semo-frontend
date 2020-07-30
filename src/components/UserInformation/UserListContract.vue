<template>
  <div class="product">

    <div class="product-container">
        <div class="flexall">
      <img
        id="logo"
        src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
      />
      <div class="product-content">
        <p class="product-title">{{ product.title }}</p>

        <div class="flex">
          <p class="product-space"></p>
          <div class="flex1">
            <p class="section-label">{{ product.pricetext }}</p>
            <p class="product-price">{{ product.price }}</p>
          </div>
          <div class="flex2">
            <p class="section-label">{{ product.timetext }}</p>
            <p class="product-time">{{ product.time }}</p>
          </div>
        </div>
        <div class="flex">
          <div class="product-information">
            <p class="section-label">{{ product.weight }}  | </p>
            <p class="section-label"> {{ product.address.province }}</p>
          </div>

        </div>
      </div>
    </div>

          <div class="product-information1">
            <p class="section-label-rank">{{ product.rank }}</p>
            <b-button class="btn" type="is-success">{{product.button1}}</b-button>
            <b-button class="btn" type="is-success">{{product.button2}}t</b-button>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-container {
  height: 192px;
  width: 505px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  /* display: flex; */
}

.product-container:hover {
  box-shadow: 0 3px 16px #00000029;
}

#logo {
  margin-top: 16px;
  margin-left: 16px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;

  overflow: hidden;
}

/* .product-content {
  padding: 12px 16px 16px 16px;
} */

.product-title {
  margin-top: 16px;
  margin-left: 16px;
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
  margin-left: 13px;
  /* margin-top: 100px; */
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #707070;
}
.section-label1 {
  /* margin-top: 100px; */
  margin-left: 145px;
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
  margin-bottom: 5px;
}

.product-information {
  /* padding-right: 16px; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.product-price {
    margin-left:16px;
  color: #01d28e;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
}

.product-time {
    margin-left:16px;
  color: #707070;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 17px;
}
.flex {
  /* width: 350px; */
  display: flex;
  /* justify-content: space-between; */
}
.flex1{
    /* margin-left:16px; */
    margin-top:10px;
}
.flex2{
    margin-top:10px;
    margin-left:35px;
}
.flexall{
    display:flex;
    width: 490px;
    
}
.product-information1 {
  /* padding-right: 16px; */
  margin-top: 10px;
  display: flex;
  width: 490px;
  
  justify-content: space-between;
}
.section-label-rank{
    margin-left:13px;
    margin-top:10px;
  color: #707070;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 12px;
}
</style>