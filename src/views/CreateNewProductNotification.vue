<template>
<div class="noti-container">
  <nav class="title-bar-container">
    <!-- <div id="title-bar-content"> -->
        <b-button class = "cancel-label" type="is-light">❌ Hủy</b-button>  
        <div class = "title-label">
            <p>Kiểm định sản phẩm</p>
            </div>   
    <!-- </div> -->
  </nav>
  <div class="success-content">
      <img src="../assets/addproduct9.png">
      <p>Sau đó, hãy đưa sản phẩm mẫu đến viện kiểm định gần bạn nhất.</p>
      </div>
      <b-field class="button-next">
          <b-button type="is-primary" tag="router-link" to="/createnewproductaddproduct">👉 Tiếp tục</b-button>
      </b-field>
    </div>
</template>
<script>
export default {
    name: "createnewproductnotification",
    components : {
        
    }
    
}
</script>
<style scoped>
.title-bar-container {
  width: 100%;
  height: 68px;
  position: sticky;
  z-index: 1;
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
  border: 1px solid #00000015;
  display: flex;
}
/* #title-bar-content {
  margin-left: auto;
  margin-right: auto;

} */
.cancel-label{
  margin-top: 18px;
  margin-right: 440px; 
  margin-left: 15px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  color: #FD5F55;
}

.title-label{
  margin-top: 16px;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 25px;
  color: #B88CD8;
}
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