<template>
  <nav class="title-bar-container">
    <div id="title-bar-content">      
        <p class="info">Thông tin chung về sản phẩm</p>

        <div class="div1">
        <p class="smalltext">Đây là quả gì?*</p>
        <div class="choosefood">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">{{ search.checked }}</label>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
        </div>

        <div class="div2">
            <p class="smalltext">Sản phẩm của bạn đã sẵn sàng để tiêu thụ chưa?*</p>
            <p class="choosefood">Chưa</p>
        </div>

        <div class="div1">
                <p class="smalltext">Khối lượng của sản phẩm là bao nhiêu?*</p>
        <div class="choosefood">
          <p>5.42 tấn</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
        </div>

        <div class="div1">
        <p class="smalltext">Địa điểm thu hoạch sản phẩm này ở đâu?*</p>
        <div class="choosefood">
          <p>Thôn 6, xã Thạch Hòa, huyện Thạch Thất, Hà Nội</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <p class="info1">Thông tin chi tiết về sản phẩm</p>

        <div class="div1">
        <p class="smalltext">Khối lượng quả chiếm bao nhiêu phần trăm trong sản phẩm này?</p>
        <div class="choosefood">
          <p>Trống</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <div class="div1">
        <p class="smalltext">Nồng độ đường trung bình của quả là bao nhiêu phần trăm?</p>
        <div class="choosefood">
         <p>Trống</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <div class="div1">
        <p class="smalltext">Cân nặng trung bình của sản phẩm là bao nhiêu?</p>
        <div class="choosefood">
          <p>20g</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <div class="div1">
        <p class="smalltext">Đường kính trung bình của sản phẩm là bao nhiêu?</p>
        <div class="choosefood">
          <p>8cm</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

                    <div class="div3">
        <p class="smalltext">Hãy cho người mua biết thêm về sản phẩm của bạn*</p>
        <div class="choosefood">
       <p>Đây là thông tin chi tiết về sản phẩm.
          Nó có thể có nhiều dòng.
          Nhìn chung thì đây là phần mà mọi người có thể đọc hoặc không.
          Haiz gõ mệt quá.</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

      <p class="info1">Sản phẩm của bạn trông thế nào?</p>

                    <div class="div4">
           <div class="divimg">
             
           </div>
           <div class="divimg">

           </div>
           <div class="divimg">

           </div>
           <div class="divimg">

           </div>
           <div class="divimg">
             
           </div>
           <div class="divimg">
             
                  </div>             
      </div>

      <p class="info1">Hãy định giá cho sản phẩm của bạn</p>

                    <div class="div1">
        <p class="smalltext">Giá khởi điểm cho sản phẩm này là bao nhiêu?*</p>
        <div class="choosefood">
          <p>80,000,000đ</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

                    <div class="div1">
        <p class="smalltext">Bước giá cho mỗi lần trả giá bạn muốn đặt là bao nhiêu?*</p>
        <div class="choosefood">
          <p>200,000đ</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <p class="info1">Hãy cho sản phẩm của bạn một cái tên</p>

                    <div class="div1">
        <p class="smalltext">Bạn muốn đặt tên sản phẩm này là gì?*</p>
        <div class="choosefood">
          <p>Táo Ambrosia nghìn năm có 1 đừng bỏ lỡ nhé các bạn ơi!</p>
        </div>
        <b-field>
            <b-input value="Kevin Garvey"></b-input>
        </b-field>
      </div>

        <div class="buttons">
            <b-button type="is-success">Gửi kiểm định</b-button>
        </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: "PageTitleBar",
  data() {
    return {
      search: {
        checked: " TÁO AMBROSIA",
      },
    };
  },
};
</script>

<style scoped>
.title-bar-container {
  width: 600px;
  height: 3000px;
  top: 0;
  position: sticky;
  z-index: 1;
  background: white;
  backdrop-filter: saturate(180%) blur(24px);
  border: 1px solid #00000015;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
#title-bar-content {
  float: left;
}
.div1 {
  margin-top:25px;
  width: 600px;
  height: 126px;
}
.div2{
  margin-top:25px;
  width: 600px;
  height: 62px;
}

.div3{
    margin-top:25px;
  width: 600px;
  height: 198px;
}
.div4{
  margin-top:25px;
  width: 600px;
  height: 624px;
}
.divimg{
  height: 104px;
  width: 600px;
  background-color: blue;

}
.info {
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 28px;
  color: #01d28e;
}
.info1 {
  margin-top: 60px;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 28px;
  color: #01d28e;
}

.smalltext {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #686868;
}
.choosefood{
  margin-top: 6px;
  margin-bottom: 10px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  color:#01D28E;
}
.button{
   margin-left: auto;
  margin-right: auto;
}
</style>