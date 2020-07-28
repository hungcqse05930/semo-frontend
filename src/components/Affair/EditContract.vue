<template>
  <section class="container">
    <div class="flex">
      <p id="backicon" onclick="window.location.href='/affair'">👈</p>
      <p class="title">📋 Hợp đồng</p>
      <p class="title1">🗃️ Điều khoản</p>
    </div>
    <div class="content">
    <div class="contentleft">
        <div class="contentleft1">
          <div class="texttext">
          <p>Cộng hòa xã hội chủ nghĩa Việt Nam</p>
             <p> Độc lập – Tự do – Hạnh phúc </p>
             <br>
             <p>Hà Nội , ngày … tháng … năm …</p>
             <br><br>
             <p>HỢP ĐỒNG MUA BÁN NÔNG SẢN</p>
             <p>( Số : … / HĐMB – …… )</p>
             <br>
             <p>• Căn cứ : Bộ luật dân sự 2015</p>
             <p>• Căn cứ vào thỏa thuận của các bên</p>
             <br>
             <p>Hôm nay , ngày … / … / … tại ….. , chúng tôi gồm :</p>
             <p>BÊN A : Ông …. ( Bên bán )</p>
             <p>CMND số : …. cấp tại ….. ngày cấp …. / …../ ….</p>
             <p>Địa chỉ thường trú : ….</p>
             <p>Mã số thuế : ……</p>
             <p>Số điện thoại liên lạc : ….</p>
             <p>BÊN B : Ông …. ( Bên mua )</p>
             <p>CMND số : …. Cấp tại ….. ngày cấp …. / …../ ….</p>
             <p>Địa chỉ thường trú : ….</p>
             <p>Mã số thuế : ……</p>
             <p>Số điện thoại liên lạc : ….</p>
             <p>Sau khi bàn bạc , hai bên thống nhất ký kết hợp đồng số … ngày …/ … / … với nội</p>
             <p>dung như sau :</p>
             <p>Điều 1 . Nội dung của hợp đồng</p>
             <p>1. Theo đề nghị của Bên B , Bên A đồng ý bán cho Bên B … tấn nông sản bao gồm:</p>
             <p>• Khoai lang : …. Tấn</p>
             <p>• Khoai tây : ….. Tấn</p>
             <p>• Hành tây : ….. Tấn</p>
             <p>2. Quy cách đóng gói : Nông sản được đóng gói vào thùng car-ton theo quy cách</p>
             <p>10kg x thùng</p>
             <p>3. Địa điểm giao hàng : tại ….</p>
             <p>Điều 2 . Thời gian thực hiện hợp đồng</p>
             <p>• Giao hàng vào ngày …. / …. / ….</p>
             <p>Điều 3 . Thực hiện hợp đồng</p>
             <p>• Bên A đồng ý bán và Bên B đồng ý mua các loại nông sản sau :</p>
        
        </div>
        </div>
        <b-button class="btn1" type="is-success" >🖨️ In hợp đồng</b-button>
    </div>
    <div class="contentright">
      <div class="contentright1">
        <p class="title2">VẬN CHUYỂN</p>
      <div class="genimage">
        <DataContract
          class="product-item"
          v-bind:product="product"
          v-for="product in products"
          v-bind:key="product.id"
        />
      </div>
<br>
      <p class="title2">THANH TOÁN</p>
      <div class="genimage">
        <DataContract1
          class="product1-item"
          v-bind:product1="product1"
          v-for="product1 in product1s"
          v-bind:key="product1.id"
        />
      </div>
      <br>
      <p class="title2">ĐIỀU KHOẢN THÊM</p>
      <div class="genimage">
        <DataContract2
          class="product2-item"
          v-bind:product2="product2"
          v-for="product2 in product2s"
          v-bind:key="product2.id"
        />
      </div>
  </div>
  <b-button class="btn1" type="is-success" @click="isComponentModalActive = true" >➕ Thêm điều khoản mới</b-button>
    </div>
    </div>
    <b-button class="btn" type="is-success">❌ Hủy hợp đồng</b-button>
        <template>
      <section>
        <div class="bmodal">
          <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
            
          >
            <Bmodalcontract />
          </b-modal>
        </div>
      </section>
    </template>
  </section>
</template>
<script>
 import Bmodalcontract from "../../components/Affair/Bmodalcontract.vue";
import DataContract from "../../components/Affair/DataContract.vue";
import DataContract1 from "../../components/Affair/DataContract1.vue";
import DataContract2 from "../../components/Affair/DataContract2.vue";

export default {
  methods: {},
  name: "container",
  components: {
     Bmodalcontract,
    DataContract,
    DataContract1,
    DataContract2,
    
  },
  data() {
    return {
      isComponentModalActive: false,
      product1s:[
                {
          id: 4,
          textleft: "Ngày thanh toán",
          textright: "20/05/2020",
        },
        {
          id: 5,
          textleft: "Số tiền thanh toán",
          textright: "72,000,000đ",
        },
        {
          id: 6,
          textleft: "Phí thanh toán muộn",
          textright: "5,000,000đ",
        },
      ],
      products: [
        {
          id: 1,
          textleft: "Bên vận chuyển",
          textright: "Người dùng này có cái tên hơi dài",
        },
        {
          id: 2,
          textleft: "Ngày bắt đầu vận chuyển",
          textright: "24/05/2020",
        },
        {
          id: 3,
          textleft: "Phí vận chuyển muộn",
          textright: "800,000đ",
        }],
      product2s: [
                {
          id: 7,
          textleft: "Nồng đồ chất bảo quản thực vật",
          textright: "Dưới 0,05%",
        },
      ]  

        
    }

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
}
.contentright{
  width: 622px;
  height: 482px;
  box-shadow: 0 2px 6px #00000014;
  margin-left: 24px;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;

}
.btn{
    display: flex;
    background-color: red;
    margin-left: auto;
}
.btn1{
    display: flex;
    margin-top: 17px;
    margin-right: auto;
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
  /* border-width: length; */
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
.contentright1{
  width: 602px;
  height: 390px;
    overflow-y: scroll;
  overflow-x: hidden;
}
.contentleft1{
  margin-top: 20px;
    width: 580px;
  height: 390px;
    overflow-y: scroll;
  overflow-x: hidden;
}
</style>