<template>
  <section class="dashboard-wrap">
    <!-- <div class="container1"> -->
    <div id="content">
      <div class="contentleft">
        <p class="production">
          <u>{{production.fruit}}</u>
        </p>
        <div class="description">
          <p>{{production.description}}</p>
        </div>
        <div class="user">
          <img
            class="img"
            src="data:image/png;base64,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"
          />
          <p class="username">{{production.user}}</p>
          <p class="star">★</p>
          <p class="point">{{production.point}}</p>
          <p class="timestart">Mở đấu giá từ {{production.timestart}}</p>
        </div>
        <div class="timeleft">
          <p class="time1">THỜI GIAN CÒN LẠI</p>
          <p class="time2">{{production.time2}}</p>
        </div>
        <div class="info">
          <div class="user-rate">
            <p class="first-content">SẢN LƯỢNG</p>
            <p class="second-content">{{production.kg}} tấn</p>
          </div>
          <div class="user-quantity">
            <p class="first-content">GIÁ HIỆN TẠI</p>
            <p class="second-content">{{production.price}}đ</p>
          </div>
          <div class="user-time">
            <p class="first-content">BƯỚC GIÁ</p>
            <p class="second-content">{{production.step}}đ</p>
          </div>
        </div>
      </div>

      <div class="contentright">
        <b-carousel :indicator-inside="false">
          <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img class="getimg" :src="getImgUrl(i)" />
            </span>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <span class="al image">
              <img :src="getImgUrl(props.i)" :title="props.i" />
            </span>
          </template>
        </b-carousel>
      </div>
    </div>
    <br />
    <hr />
    <div id="nextcontent">
      <div class="contentleft1">
        <p class="productinfo">Thông tin sản phẩm</p>
        <div class="p1">
          <p class="ptext">VỊ TRÍ</p>
          <p class="ptext1">{{production.location}}</p>
        </div>
        <div class="p1">
          <p class="ptext">TỈ LỆ QUẢ (CHỪA CÀNH, LÁ) TRÊN TỔNG KHỐI LƯỢNG</p>
          <p class="ptext1">{{production.percent}}</p>
        </div>
        <div class="p1">
          <p class="ptext">NỒNG ĐỘ ĐƯỜNG</p>
          <p class="ptext1">{{production.sugardaddy}}</p>
        </div>
        <div class="p1">
          <p class="ptext">CÂN NẶNG TRUNG BÌNH MỖI QUẢ</p>
          <p class="ptext1">{{production.mean}}</p>
        </div>
        <div class="p1">
          <p class="ptext">ĐƯỜNG KÍNH TRUNG BÌNH MỖI QUẢ</p>
          <p class="ptext1">{{production.sugarmean}}</p>
        </div>
        <div class="p1">
          <p class="ptext">GIÁ KHỞI ĐIỂM</p>
          <p class="ptext1">{{production.startprice}}</p>
        </div>
        <p class="ptext">THÔNG TIN CHI TIẾT</p>
        <div class="p2">
          <p class="ptext2">{{production.descriptiondetail}}</p>
        </div>
                    <div class="buttons">
          <b-button type="is-danger">🗑️ Xóa trả giá</b-button>
          <b-button type="is-link">❌ Bỏ chọn</b-button>
        </div>
      </div>
      <div class="contentright1">
        <p class="productinfo">Ai đã đấu giá?</p>
        <b-table
          :data="data"
          :checked-rows.sync="checkedRows"
          checkable
          checkbox-position="right"
          paginated
          pagination-simple
          hoverable
          per-page="20"
        >
          <template slot-scope="props">
            <template v-for="column in columns">
              <b-table-column
                :key="column.id"
                v-bind="column"
                onclick="window.location.href='/admindashboardcheckbid'"
              >
                <template
                  v-if="column.searchable && !column.numeric"
                  slot="searchable"
                  slot-scope="props"
                >
                  <b-input
                    v-model="props.filters[props.column.field]"
                    placeholder="Search..."
                    size="is-small"
                  />
                </template>
                {{ props.row[column.field] }}
              </b-table-column>
            </template>
          </template>
          <template slot="bottom-left">
            <b>Total checked</b>
            : {{ checkedRows.length }}
            <b-button @click="deleteAlert" type="is-text">🗑️ Xóa đấu giá</b-button>
            <b-modal>
              <MediationDashboardDelete />
            </b-modal>
            <button
              class="button field is-danger"
              @click="checkedRows = []"
              :disabled="!checkedRows.length"
            >
              <b-icon icon="close"></b-icon>
              <span>Clear checked</span>
            </button>
          </template>
        </b-table>
      </div>
    </div>
  </section>
</template>
    
<script>
/* eslint-disable */
import MediationDashboardDelete from "../components/MediationDashboard/MediationDashboardDelete.vue";
export default {
  name: "admindashboardcheckbid",
  components: {
    MediationDashboardDelete
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
    deleteAlert() {
      this.$buefy.modal.open({
        parent: this,
        component: MediationDashboardDelete,
        hasModalCard: true,
        trapFocus: true
      });
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          user: "HỒ ĐỨC KHOA",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 2,
          user: "NGUYỄN ĐỨC ANH",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 3,
          user: "HỒ CÔNG PHÁT",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 4,
          user: "VŨ TƯỜNG VY",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 5,
          user: "NGUYỄN XUÂN PHUC",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 6,
          user: "ĐẶNG BẢO KHOA",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 7,
          user: "NGUYỄN ĐÚC ANH",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 8,
          user: "ĐỨC PHÁT",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 9,
          user: "VŨ VY",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        },
        {
          id: 10,
          user: "ĐỨC PHUC",
          pay: "80,000,000đ",
          date: "12:50:39, 30/05/2020"
        }
      ],
      checkedRows: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "user",
          searchable: true,
          width: "200",
          label: "TÊN NGƯỜI DÙNG"
        },
        {
          field: "pay",
          searchable: true,
          label: "TRẢ GIÁ"
        },
        {
          field: "date",
          label: "THỜI GIAN",
          searchable: true,
          centered: true
        }
      ],
      isComponentModalActive: false,
      production: {
        fruit: "🍎 Sản phẩm",
        description:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm thì sẽ trông thế này còn đây là dòng thứ 3.",
        user: "Người dùng",
        point: "4.2",
        timestart: "12:00, 04/12/2019",
        time2: "10 ngày 23 tiếng 31 phút 38 giây",
        kg: "5.48",
        price: "80,000,000",
        step: "200,000",
        location: "Long An",
        percent: "97%",
        sugardaddy: "22.5%",
        mean: "40g",
        sugarmean: "8.5cm",
        startprice: "70,000,000đ",
        descriptiondetail:
          "Đây là thông tin chi tiết về sản phẩm. Nó có thể có nhiều dòng. Nhìn chung thì đây là phần mà mọi người có thể đọc hoặc không. Haiz gõ mệt quá.",
        id: "1",
        username: "*** ***** MANH",
        paid: "80,000,000đ",
        time: "12:50:39, 30/05/2020",
        semo: "10"
      },
      products: [
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        },
        {
          id: 1,
          title: "Táo này đỉnh vcl các bạn ơi",
          weight: "4,2 tạ",
          pricetext: "Giá hiện tại",
          price: "80.000.000đ",
          timetext: "Thời gian còn lại",
          time: "4 tháng 21 ngày",
          address: {
            province: "Long An"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.dashboard-wrap {
  /* backdrop-filter: saturate(180%) blur(20px); */
  width: 1246px;
  margin-top: 36px;
  margin-left: 60px;
}

#content {
  display: flex;
}
.contentleft {
  /* backdrop-filter: saturate(180%) blur(20px); */
  width: 603px;
  height: 500px;
}
.contentright {
  background-color: cadetblue;
  backdrop-filter: saturate(180%) blur(20px);
  width: 600px;
  height: 500px;
  margin-left: 43px;
}
#nextcontent {
  display: flex;
}
.contentleft1 {
  width: 605px;
  height: 428px;
  backdrop-filter: saturate(180%) blur(20px);
  margin-top: 40px;
}
.contentright1 {
  backdrop-filter: saturate(180%) blur(20px);
  width: 586px;
  height: 541px;
  margin-top: 40px;
  margin-left: 41px;
}
.production {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.description {
  margin-top: 20px;
  width: 580px;
  height: 108px;
  font-family: "Merriweather";
  font-weight: 800;
  font-size: 28px;
  color: #01d28e;
}
.user {
  width: 179;
  height: 29;
  margin-top: 28px;
  display: flex;
}
.img {
  margin-top: 23px;
  width: 28px;
  height: 28px;
}
.username {
  margin-top: 23px;
  margin-left: 16px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.star {
  margin-top: 23px;
  margin-left: 12px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.point {
  margin-top: 23px;
  margin-left: 7px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.timestart {
  margin-top: 23px;
  margin-left: 200px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.timeleft {
  width: 364px;
  height: 64px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.time1 {
  text-align: center;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.time2 {
  text-align: center;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 25px;
  color: #01d28e;
}
.wannabid {
  width: 522px;
  height: 44px;
  margin-top: 23px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.bidnow {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #686868;
}
.btn {
  margin-top: -5px;
  margin-left: 30px;
  width: 182px;
  height: 44px;
}

.info {
  width: 502px;
  height: 64px;
  /* margin-left: auto;
  margin-right: auto; */
  margin-top: 35px;
  display: flex;
}
.user-rate {
  margin: 0 auto 0 50px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 15px;
  color: #686868;
  /* width: 232px; */
}
.user-quantity {
  margin: 0 auto 0 80px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #686868;
  /* width: 141px; */
}
.user-time {
  margin: 0 60px 0 100px;
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
  opacity: 1;
}
.second-content {
  width: 120px;
  font-family: Roboto;
  font-size: 25px;
  color: #b88cd8;
  opacity: 1;
}
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
  /* margin-top: 190px; */
  height: 50px;
}
.getimg {
  height: 430px;
}
.p1 {
  display: inline-flex;
  justify-content: space-between;
  width: 605px;
  height: 24px;
  margin-bottom: 16px;
}
.ptext {
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
.p2 {
  margin-top: 7px;
  width: 493px;
  height: 81px;
}
.ptext2 {
  margin-top: 10px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
}
.buttons {
  display: flex;
  flex-flow: row;
}
.userpaidtime {
  display: inline-flex;
  justify-content: space-between;
  width: 473px;
  height: 18px;
  margin-left: 55px;
  margin-bottom: 16px;
  background-color: blue;
}
.p3 {
  display: inline-flex;
  justify-content: space-between;
  width: 586px;
  height: 18px;
  margin-bottom: 16px;
  /* background-color: blue; */
}
.ptext3 {
  margin-right: -20px;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.image1 {
  width: 600px;
  top: 400px;
  background-color: blue;
  /* height: 104px;
  width: 600px; */
}
.products {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}
.productinfo {
  margin-bottom: 24px;
  font-family: "Merriweather";
  font-weight: 700;
  font-size: 25px;
  color: #b88cd8;
}
</style>
