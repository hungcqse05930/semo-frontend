<template>
  <nav class="title-bar-container">
    <div id="title-bar-content">
        <div class = "cancel-label"><p>❌ Thoát</p></div>  
        <div class = "title-label"><p>Kiểm duyệt sản phẩm</p></div> 
        <div class="next-label"><p>Bỏ qua ⏭️</p></div>  
    </div>
  </nav>
</template>

<script>
export default {
  name: "PageTitleBar"
};
</script>

<style scoped>
.title-bar-container {
  margin-left: 0px;
  width: 100%;
  height: 68px;
  top: 0;
  position: sticky;
  z-index: 1;
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
  border: 1px solid #00000015;
}
#title-bar-content {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}

.cancel-label{
  margin-top: 18px;
  margin-right: 450px; 
  margin-left: 15px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  color: #FD5F55;
}
.next-label{
  margin-top: 18px;
  /* margin-right: 500px;  */
  margin-left: 420px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 17px;
  color: #686868;
}

.title-label{
    margin-top: 16px;
    align-items: center;
    justify-content: center;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 25px;
  color: #B88CD8;
}
</style>