<template>
  <div class="auction-container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <TabInformation />
    <div class="user-content">
      <WalletMenu />
      <div class="content-all">
        <div class="content-information">
          <p>SỐ DƯ HIỆN TẠI</p>
        </div>
        <div class="content-middle">
          <p>8,057,000đ</p>
        </div>
        <section class="button-money">
          <b-button class="money-wallet" @click="topUp" type="is-primary">➕ Nạp tiền vào ví</b-button>
          <b-modal>
            <WalletTopUp />
          </b-modal>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import WalletMenu from "../components/Wallet/WalletMenu.vue";
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import TabInformation from "../components/UserInformation/TabInformation.vue";
import WalletTopUp from "../components/Wallet/WalletTopUp";
export default {
  name: "userwallet",
  components: {
    UserFirstDescription,
    TabInformation,
    WalletTopUp,
    WalletMenu
  },
  methods: {
    topUp() {
      this.$buefy.modal.open({
        parent: this,
        component: WalletTopUp,
        hasModalCard: true,
        trapFocus: true
      });
    }
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-all {
  width: 100%;
}
.content-middle {
  font-family: Roboto;
  font-size: 40px;
  color: #01d28e;
  font-weight: normal;
  text-align: center;
}
.content-information {
  font-family: Roboto;
  font-size: 15px;
  color: #707070;
  font-weight: normal;
  text-align: center;
}
</style>