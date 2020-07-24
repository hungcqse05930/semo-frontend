<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Loại quả</p>
      </div>
    </div>
    <div class="dashboard-table">
      <MediationDashboardMenu />
      <MediationDashboardNameProductTable />
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
      <MediationDashboardEditProduct/>
      </b-modal>
    </section>
  </div>
</template>
<script>
import MediationDashboardMenu from "../components/MediationDashboard/MediationDashboardMenu.vue";
import MediationDashboardNameProductTable from "../components/MediationDashboard/MediationDashboardNameProductTable.vue";
import MediationDashboardEditProduct from "../components/MediationDashboard/MediationDashboardEditProduct.vue";
export default {
  name: "mediationdashboardnameproduct",
  components: {
    MediationDashboardMenu,
    MediationDashboardNameProductTable,
    MediationDashboardEditProduct
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  }
};
</script>
<style scoped>
.dashboard-container {
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
.dashboard-header {
  display: flex;
  flex-flow: row;
}
.dashboard-table {
  display: flex;
  flex-flow: row;
}
</style>