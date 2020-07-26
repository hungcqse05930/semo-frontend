<template>
    <div class="success-container">
      <CreateHeader/>
      <div class="success-content">
      <img src="../assets/addproduct8.png">
      <p>Sản phẩm của bạn đã được tạo thành công!</p>
      </div>
      <b-field class="button-next">
          <b-button type="is-primary" tag="router-link" to="/createnewproductnotification">👉 Tiếp tục</b-button>
      </b-field>
    </div>
</template>
<script>
import CreateHeader from "../components/CreateNewProduct/CreateHeader.vue";
export default {
    name: "createnewproductsuccess",
    components : {
        CreateHeader,
    }
    
}
</script>
<style scoped>
.success-container{
    width: 100%;
}
.success-content{
     font-family: Roboto;
     font-size: 28px;
     color: #01D28E;
     font-weight: normal;
     text-align: center;
     margin-top: 112px;
}
.button-next {
    text-align: center;
    margin-top: 140px;
    margin-bottom: 40px;
}
</style>