<template>
  <div class="product2">
    <div class="product-container">
        <div class="p1">
          <p class="ptext">{{product2.textleft}}</p>
          <p class="ptext1">{{product2.textright}}</p>
<button class="edit" @click="editContract1 = true">Chỉnh sửa</button>
        </div>
        <template>
      <section>
        <div class="bmodal">
          <b-modal
            :active.sync="editContract1"
            has-modal-card
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal            
          >
            <BmodalEditContract />
          </b-modal>
        </div>
      </section>
    </template>
    </div>
  </div>
</template>

<script>
 import BmodalEditContract from "../../components/Affair/BmodalEditContract.vue";

export default {
      components:{
    BmodalEditContract,
  },
  name: "product2",
  props: {
    product2: Object
  },
      data(){
    return{
      editContract1: false,
    }
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
.p1{
  display: flex;
  justify-content: space-between;
}
.ptext {
  margin-top:15px;
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
  margin-left: auto;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.edit{
  /* display: none; */
  /* color: #000; */
  height: 50px;
  width: 80px;
  /* margin-left: -10px */
 border-radius: 10px;
 background-color: mediumseagreen;
 margin-right: 5px;
 margin-left: 5px;
}
</style>