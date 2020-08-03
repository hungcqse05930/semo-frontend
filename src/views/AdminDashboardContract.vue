<template>
  <div class="admin-container">
    <div class="admin-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Giao kèo  </p>
      </div>
    </div>
    <div class="admin-table">
      <AdminMenu />
      <AdminDashboardContractTable />
    </div>
  </div>
</template>
<script>
import AdminMenu from "../components/Admin/AdminMenu.vue";
import AdminDashboardContractTable from "../components/Admin/AdminDashboardContractTable.vue";
export default {
  name: "admindashboardcontract",
  components: {
    AdminMenu,
    AdminDashboardContractTable,
  },
  data() {
    return {
      isComponentModalActive: false,
    };
  }
};
</script>
<style scoped>
.admin-container {
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
.admin-header {
  display: flex;
  flex-flow: row;
}
.admin-table {
  display: flex;
  flex-flow: row;
}
</style>