<template>
  <div class="auction-container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <TabInformation />
    <div class="user-content">
      <div class="content-all">
        <div class="content-information">
          <p>SỐ DƯ HIỆN TẠI</p>
        </div>
        <div class="content-middle">
          <p>8,057,000đ</p>
        </div>
        <section class="button-money">
          <b-button type="is-primary">➕ Nạp tiền vào ví</b-button>
          <b-button type="is-warning">💳 Chuyển tiền và thanh toán</b-button>
          <b-button type="is-light">🧾 Lịch sử giao dịch</b-button>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import TabInformation from "../components/UserInformation/TabInformation.vue";
export default {
  name: "userwallet",
  components: {
    UserFirstDescription,
    TabInformation,
  }
};
</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.button-money {
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  height: 104px;
}
.content-all {
  width: 100%;
}
.content-middle {
    font-family: Roboto;
    font-size: 40px;
    color: #01D28E;
    font-weight: normal;
    text-align: center;
}
.content-information{
    font-family: Roboto;
    font-size: 15px;
    color: #707070;
    font-weight: normal;
    text-align: center;    
}
</style>