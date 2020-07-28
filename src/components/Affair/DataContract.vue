<template>
  <div class="product">
    <div class="product-container">
        <div class="p1">
          <p class="ptext">{{product.textleft}}</p>
          <!-- <button class="hover">Chỉnh sửa</button> -->

          <p class="ptext1">{{product.textright}}</p>
          <!-- <button class="hover">Chỉnh sửa</button> -->

        </div>
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
  height: 52px;
  width: 574px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  /* margin-left: 10px; */
  margin-top: 10px;
  
}

.product-container:hover {
  box-shadow: 0 3px 16px #00000029;
}

.p1{
  display: flex;
  justify-content: space-between;
}
.ptext {
  margin-top:12px;
  margin-left: 5px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.ptext1{
  /* display: block;
  color: red; */
  margin-top:10px;
  margin-right: 5px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.hover{
  display: none;
  color: #000;
  height: 20px;
  width: 50px;
  /* margin-left: -10px */
  z-index: 1;
}
</style>