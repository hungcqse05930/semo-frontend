<template>
  <div class="product">
    <div class="product-container">
        <div class="p1">
          <p class="ptext">{{product.textleft}}</p>
          <!-- <button class="hover">Chỉnh sửa</button> -->

          <p class="ptext1">{{product.textright}}</p>
          <button class="edit"  @click="editContract1 = true">Chỉnh sửa</button>
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
  name: "product",
  components:{
    BmodalEditContract,
  },
  props: {
    product: Object
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

.p1{
  display: flex;
  /* justify-content: space-between; */
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