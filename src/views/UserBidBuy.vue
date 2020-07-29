 <template>
  <div class="auction-container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <TabInformation />
    <div class="user-content">
      <UserAuctionMenu />
      <!-- <div class="content-all"> -->
        <!-- <div class="content-information"> -->
          <!-- <div class="content-middle"> -->
            <div class="classcontent">
            <b-field class="search-title">
              <b-input placeholder="🔍 Tìm kiếm sản phẩm" type="search"></b-input>
            </b-field>
    
          <div class="products">
            
          <UserListBuy
            class="product-item"
            v-bind:product="product"
            v-for="product in products"
            v-bind:key="product.id"
          />
        </div>
        </div>
        
        </div>
                  <div class="pagination">
            <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
            <div class="paging">
              <p class="page-back">👈 Trang trước</p>
              <p class="page-next">Trang sau 👉</p>
            </div>
          </div>
        </div>

      <!-- </div> -->
    <!-- </div> -->
  <!-- </div> -->
</template>
<script>
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import TabInformation from "../components/UserInformation/TabInformation.vue";
import UserAuctionMenu from "../components/UserBidProduct/UserAuctionMenu.vue";
import UserListBuy from "../components/UserInformation/UserListBuy.vue";

export default {
  name: "userbidauction",
  components: {
    UserFirstDescription,
    TabInformation,
    UserAuctionMenu,
    UserListBuy
  },
  data(){
    return{
            products: [
        {
          id: 1,
          title: "Táo này",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "",
          time: "",
          seen: "",
          rank: "Bắt đầu từ 12:29:30, 29/12/2020",

          button2: "📑 Xem chi tiết",
          address: {
            province: "Long An"
          }
        },
        {
          id: 2,
          title: "Táo này đỉnh",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "",
          time: "",
          seen: "",
          rank: "Bắt đầu từ 12:29:30, 29/12/2020",          

          button2: "📑 Xem chi tiết",
          address: {
            province: "Long An"
          }
        },
               {
          id: 3,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "",
          time: "",
          seen: "",
          rank: "Bạn đang là người trả giá cao nhất",

          button2: "📑 Xem chi tiết",
          address: {
            province: "Long An"
          }
        },
        {
          id: 4,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "",
          time: "",
          seen: "",
          rank: "Bạn đang là người trả giá cao nhất",

          button2: "📑 Xem chi tiết",
          address: {
            province: "Long An"
          }
        },
        {
          id: 5,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "",
          time: "",
          seen: "",
          rank: "Bạn đang là người trả giá cao nhất",

          button2: "📑 Xem chi tiết",
          address: {
            province: "Long An"
          }
        },

        ]
        ,
    }
  }
};
</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.search-title {
  width: 100%;
}
.content-all {
  width: 1034px;
}
.classcontent{
  /* background-color: red; */
  width: 1034px;
  height: 1170px;
}
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(200px, auto);
  margin-left: 7px;
  margin-top: 26px;
}
.paging{
  width: 1034px;
}
</style>