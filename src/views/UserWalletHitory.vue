<template>
  <div class="user-container">
    <div class="user-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Lịch Sử giao dịch</p>
      </div>
    </div>
    <div class="user-table">
      <WalletMenu />
      <WalletHistoryTable />
    </div>
    <section>
      <b-modal
        :active.sync="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
        style="width: auto;"
      >    
      <WalletHistoryInformation />
      </b-modal>
    </section>
  </div>
</template>
<script>
import WalletHistoryTable from "../components/Wallet/WalletHistoryTable.vue";
import WalletHistoryInformation from "../components/Wallet/WalletHistoryInformation.vue";
import WalletMenu from "../components/Wallet/WalletMenu.vue"
export default {
  name: "userwallethistory",
  components: {
    WalletHistoryTable,
    WalletHistoryInformation,
    WalletMenu
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  }
};
</script>
<style scoped>
.user-container {
  width: 100%;
  padding: 10px;
}
.logo {
  width: 120px;
  height: 40px;
  margin: 24px 40px 24px 40px;
}
.type-name {
  font-family: Merriweather;
  font-size: 25px;
  color: #b88cd8;
  opacity: 1;
}
.type-name p {
  border-bottom: #01d28e solid 3px;
  margin: 24px auto auto 40px;
}
.user-header {
  display: flex;
  flex-flow: row;
}
.user-table {
  display: flex;
  flex-flow: row;
}
</style>