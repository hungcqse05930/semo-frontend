<template>
<section>
  <div class="modal-card">
      <div class="size">
        <div class="info">
          <div class="user-quantity">
            <p class="first-content">GIÁ HIỆN TẠI</p>
            <p class="second-content">{{production.price}}đ</p>
          </div>
          <div class="user-time">
            <p class="first-content">BƯỚC GIÁ</p>
            <p class="second-content">{{production.step}}đ</p>
          </div>
          <img id="logo"  onclick="window.location.href='/placebid'" src="../../assets/back.png" />
        </div>
        <div class="flex">
        <div class="timeleft">{{production.timeleft}} | </div>
        <div class="countturn"> {{production.countturn}} lượt đấu giá</div>
        </div>
        <br>
      <img id="logosuccess"  src="../../assets/success.png" />
                
      </div>
  </div>
</section>
</template>
<script>

export default {
   data() {
    return {
production: {
        price: "80,000,000",
        step: "200,000",
        timeleft: "10 ngày 23 tiếng 31 phút",
        countturn: "87",
        money: "23,456,789",
      },
    }},
  name: "mediationdashboardeditproduct",
  components: {

  }
  
}
</script>
<style scoped>
.modal-card{
  width: 600px;
  height: 384px;
  background-color:white; 
  border-radius: 10px;
}
.size{
  margin-top: auto;
  margin-bottom: auto;
  width: 600px;
  height: 304px;
  background-color: white;
}
.info {
  width: 502px;
  height: 56px;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
}
.user-quantity {
  margin: 0 60px 0 40px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #686868;
  /* width: 141px; */
}
.user-time {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #686868;
  /* width: 84px; */
}
.first-content {
  width: 90px;
  margin-left: 15px;
  font-family: Roboto;
  font-size: 15px;
  color: #707070;
  font-weight: 500;
  opacity: 1;
}
.second-content {
  width: 120px;
  font-family: Roboto;
  font-size: 25px;
  color: #b88cd8;
  font-weight: 500;
  opacity: 1;
}
.flex{
  margin-top: 24px;
  display: flex;
}
.timeleft{
  margin-left: 40px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.countturn{
  margin-left: 5px;
    font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}

#logo{
  margin-left: 220px;
  margin-top: -20px;
  width: 20px;
  height: 20px;
}

#success{
  width: 600px;
  height: 250px;
}
</style>