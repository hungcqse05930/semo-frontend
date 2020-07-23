<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Sản phẩm</p>
      </div>
      <MediationDashboardSearch />
    </div>
    <div class="dashboard-table">
    <MediationDashboardMenu />
    <MediationDashboardProductTable />
    </div>
  </div>
</template>
<script>
import MediationDashboardMenu from "../components/MediationDashboard/MediationDashboardMenu.vue";
import MediationDashboardSearch from "../components/MediationDashboard/MediationDashboardSearch.vue";
import MediationDashboardProductTable from "../components/MediationDashboard/MediationDashboardProductTable.vue";

export default {
  name: "mediationdashboardhome",
  components: {
    MediationDashboardMenu,
    MediationDashboardSearch,
    MediationDashboardProductTable
  }
};
</script>
<style scoped>
.dashboard-container {
  width: 1366px;
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