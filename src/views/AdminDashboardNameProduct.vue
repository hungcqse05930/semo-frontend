<template>
  <div class="admin-container">
    <div class="admin-header">
      <img class="logo" src="../assets/logo.png" />
      <div class="type-name">
        <p>Loại quả</p>
      </div>
    </div>
    <div class="admin-table">
      <AdminMenu />
      <AdminDashboardNameProductTable />
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
import AdminMenu from "../components/Admin/AdminMenu.vue";
import AdminDashboardNameProductTable from "../components/Admin/AdminDashboardNameProductTable.vue";
import MediationDashboardEditProduct from "../components/MediationDashboard/MediationDashboardEditProduct.vue";
export default {
  name: "admindashboardnameproduct",
  components: {
    AdminMenu,
    AdminDashboardNameProductTable,
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