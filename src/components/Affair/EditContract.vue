<template>
  <section class="container">
    <div class="flex">
      <p id="backicon" onclick="window.location.href='/affair'">👈</p>
      <p class="title">📋 Hợp đồng</p>
      <p class="title1">🗃️ Điều khoản</p>
    </div>
    <div class="content">
    <div class="contentleft">
        alo
    </div>
    <div class="contentright">
        <p class="title2">VẬN CHUYỂN</p>
        <div class="p1">
          <p class="ptext">GIÁ HIỆN TẠI</p>
          <p class="ptext1">{{production.pricenow}} đ</p>
        </div>
        <div class="p1">
          <p class="ptext">SẢN LƯỢNG</p>
          <p class="ptext1">{{production.quantity}} tấn </p>
        </div>
        <div class="p1">
          <p class="ptext">VỊ TRÍ</p>
          <p class="ptext1">{{production.location}}</p>
        </div>
        <div class="p1">
          <p class="ptext">CÂN NẶNG QUẢ</p>
          <p class="ptext1">{{production.height}} %</p>
        </div>
        <div class="p1">
          <p class="ptext">ĐƯỜNG KÍNH QUẢ</p>
          <p class="ptext1">{{production.sugar}} %</p>
        </div>
        <div class="p1">
          <p class="ptext">NỒNG ĐỘ ĐƯỜNG</p>
          <p class="ptext1">{{production.sugardaddy}} g</p>
        </div>
        <div class="p1">
          <p class="ptext">PHẦN TRĂM QUẢ TRÊN TỔNG KHỐI HÀNG</p>
          <p class="ptext1">{{production.percent}} %</p>
        </div>
        <div class="p1">
          <p class="ptext">GIÁ KHỞI ĐIỂM</p>
          <p class="ptext1">{{production.pricestart}} đ</p>
        </div>
                

        
    </div>
    </div>
    <b-button class="btn" type="is-success">❌ Hủy hợp đồng</b-button>
  </section>
</template>
<script>
// import ListImage from "../../components/Affair/ListImage.vue";
// import Productviewrow from "../../components/PlaceBid/Productviewrow.vue";
export default {
  methods: {},
  name: "container",
  components: {
    // ListImage,
    // Productviewrow,
  },
  data() {
    return {
      production: {
        fruit: "🍎 Táo Ambrossia",
        description:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm thì sẽ trông thế này còn đây là dòng thứ 3.",
        user: "Người dùng này có cái tên hơi dài",
        point: "4.2",
        timestart: "12:00, 04/12/2019",
        time2: "10 ngày 23 tiếng 31 phút 38 giây",
        pricenow: "80,000,000",
        quantity: "5.48",
        location: "Long An",
        height: "97",
        sugar: "22.5",
        sugardaddy: "40",
        percent: "8.5",
        pricestart: "70,000,000",
        descriptiondetail:
          "Đây là thông tin chi tiết về sản phẩm. Nó có thể có nhiều dòng. Nhìn chung thì đây là phần mà mọi người có thể đọc hoặc không. Haiz gõ mệt quá.",    
        tiencoc: "8,000,000đ",
        hanchuyentien: "01 ngày 05 tiếng",
        datetime: "12:05, 29/04/2020",
      },
    };
  },
};
</script>
<style scoped>
.container {
  /* backdrop-filter: saturate(180%) blur(20px); */
  width: 1246px;
  height: 1200px;
  margin-top: 36px;
  /* background-color: white; */
  /* padding: 20px 20px 20px 20px; */
  border-radius: 10px;
  border-color: yellow;
}
.flex {
  display: flex;
}

.title {
  margin-left: 10px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 25px;
  color: #01d28e;
}
.title1 {
  margin-left: 450px;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 25px;
  color: #01d28e;
}
.content{
    display: flex;
}
.contentleft{
  width: 600px;
  height: 482px;
  box-shadow: 0 2px 6px #00000014;
  /* margin-left: auto; */
  border-radius: 10px;
  padding: 0px 20px 20px 20px;
  background-color: yellow;
}
.contentright{
  width: 622px;
  height: 482px;
  box-shadow: 0 2px 6px #00000014;
  margin-left: 24px;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  background-color: yellow;
}
.btn{
    display: flex;
    background-color: red;
    margin-left: auto;
}
.title2{
      font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.input1{
    width: 574px;
    height: 52px;

}
.p1 {
  display: inline-flex;
  justify-content: space-between;
  width: 574px;
  margin-bottom: 5px;
  border-style: solid;
  border-width: length;
  border-radius: 5px;
  /* border-width: 100%; */
}
.ptext {
  margin-top:2px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.ptext1 {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  color: #01d28e;
}
</style>