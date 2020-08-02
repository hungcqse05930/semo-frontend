<template>
  <section class="admin-wrap">
      <b-table
      class="admin-table"
      :data="data"
      :checked-rows.sync="checkedRows"
      paginated
      pagination-simple
      hoverable
      per-page="20"
      >
        <template slot-scope="props">
          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column">
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
        <!-- <template slot="bottom-left">
          <b>Total checked</b>
          : {{ checkedRows.length }}
          <b-button @click="deleteAlert" type="is-text">🗑️ Xóa bài đăng</b-button>
          <b-modal>
            <MediationDashboardDelete />
          </b-modal>
          <button class="button field is-danger" @click="checkedRows = []"
                :disabled="!checkedRows.length">
                <b-icon icon="close"></b-icon>
                <span>Clear checked</span>
            </button>
        </template>     -->
      </b-table>
  </section>
</template>
<script>
// import MediationDashboardDelete from "../MediationDashboard/MediationDashboardDelete.vue";
export default {
  components: {
    // MediationDashboardDelete,
  },
    // methods: {
    // deleteAlert(){
    //    this.$buefy.modal.open({
    //      parent: this,
    //      component: MediationDashboardDelete,
    //      hasModalCard: true,
    //      trapFocus: true
    //    })
    // }
  // },
  data() {
    const data = [
      {
        id: 1,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 2,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 3,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 4,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 5,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 6,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      },
      {
        id: 7,
        user_name: "Nguyen Ha Thanh",
        status: "200,000,000 VND"
      }
    ];

    return {
      data,
      checkboxPosition: "left",
      checkedRows: [],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
          searchable: true
        },
        {
          field: "user_name",
          label: "User Name",
          searchable: true
        },
        {
          field: "status",
          label: "Status",
          searchable: true
        }
      ]
    };
  }
};
</script>
<style scoped>
.admin-wrap {
  width: 1166px;
}
.pagination {
  display: flex;
  justify-content: space-between;
}
.paging {
  display: flex;
  justify-content: space-between;
}
.page-back {
  padding-right: 15px;
}
.page-next {
  margin-right: 20px;
}
.admin-table {
  font-family: Roboto;
  font-size: 12px;
  color: #212121;
}
.post-infor {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
  padding-left: 3px;
}
</style>