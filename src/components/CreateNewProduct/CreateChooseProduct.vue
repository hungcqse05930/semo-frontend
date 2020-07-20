<template>
  <section>
    <div class="product-container">
      
    <div class = "chooseproduct">
        <!-- <p class = "text">Sản phẩm bạn đang có là gì?</p> -->
        <p class="title">Sản phẩm bạn đang có là gì?</p>
      <div class = "product" >
      <input type="radio" name="tree" id="tree">
      <label for="tree">
        <p class="emoji-tree">🌳</p>
         <p class="text-tree-1" >Vườn cây</p>
          <p class="text-tree-2" >Bạn muốn tìm con buôn cho vườn trồng của bạn</p>
      </label>

      <input type="radio" name="tree" id="fruit">
      <label for="fruit">
        <p class="emoji-tree">🍑</p>
         <p class="text-tree-1" >Trái cây</p>
          <p class="text-tree-2" >Bạn muốn tìm người mua cho lô nông sản đã thu hoạch</p>
      </label>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
    export default {
        data() {
            return {
                radioButton: ''
            }
        }
    }
</script>

<style scoped>
/* @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); */
.product-container {
  height: 627px;
  width: 1366px;
  border: 1px solid #00000015;
  transition: 0.25s;
  align-items: center;
  justify-content: center;
  display: flex;
}

.chooseproduct{
    height: 394px;
  width: 480px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  /* border-radius: 10px; */
  transition: 0.25s;
  display: block;
  
}
.product{

  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
}
.title{
  font-family: "Roboto";
  font-weight: 700;
  font-size: 25px;
  color: #07D390;
  margin-left: 75px;
  margin-top: 5px;
  margin-bottom: 40px;
}
*,*::before,*::after{
  padding: 0;
  margin:0;
  box-sizing: inherit;
}
input[type="radio"]{
  display: none;
}
label{
  height: 238px;
  width: 238px;
  border: 1px solid #18f98d;
  border-radius: 10px;
}
.emoji-tree{
  font-size: 50px;
  margin-top: 25px;
  margin-left: 80px;
}
.text-tree-1{
  font-family: "Roboto";
  font-weight: 700;
  font-size: 18px;
  color: #07D390;
  margin-top:20px;
  margin-left: 75px;
}

.text-tree-2{
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
  margin-top:8px;
  margin-left: 25px;
}
input[type = "radio"]:checked +  label {
  color: white;
  background-color: #07D390;
  
}
</style>