<template>
  <section class="admin-wrap">
    <!-- <div class="pagination">
      <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
      <div class="paging">
        <p class="page-back">👈 Trang trước</p>
        <p class="page-next">Trang sau 👉</p>
      </div>
    </div>-->
    <b-table
      class="admin-table"
      :data="data"
      :checked-rows.sync="checkedRows"
      checkable
      checkbox-position="right"
      paginated
      pagination-simple
      hoverable
      per-page="20"
      @click="allAlert"
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
                 <b-table-column field="status" label="TRẠNG THÁI" sortable>
            {{ props.row.status }}
        </b-table-column>
      </template>
      <template slot="bottom-left">
        <b>Total checked</b>
        : {{ checkedRows.length }}
        <b-button @click="deleteAlert" type="is-text">🗑️ Xóa bài đăng</b-button>
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
    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
      style="width: auto;"
    >
      <MediationDashboardEditProduct />
    </b-modal>
  </section>
</template>
<script>
import MediationDashboardEditProduct from "../MediationDashboard/MediationDashboardEditProduct";
import MediationDashboardDelete from "../MediationDashboard/MediationDashboardDelete";
export default {
  components: {
    MediationDashboardEditProduct,
    MediationDashboardDelete
  },
  methods: {
    allAlert() {
      this.isComponentModalActive = true;
    },
    deleteAlert() {
      this.$buefy.modal.open({
        parent: this,
        component: MediationDashboardDelete,
        hasModalCard: true,
        trapFocus: true
      });
    },  
  },
  data() {
    const data = [
      {
        id: 1,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN PHÍ"
      },
      {
        id: 2,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN CỌC"
      },
      {
        id: 3,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN CỌC"
      },
      {
        id: 4,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN CỌC"
      },
      {
        id: 5,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN CỌC"
      },
      {
        id: 6,
        date: "2016-10-15 13:43:27",
        cash_out: "-3,500,000",
        user_source: "Nguyen Ha Thanh",
        user_receiver: "Nguyen Ha Thanh",
        status: "TIỀN PHÍ"
      }
    ];

    return {
      isComponentModalActive: false,
      data,
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
          field: "date",
          label: "Date",
          searchable: true
        },
        {
          field: "cash_out",
          label: "SỐ TIỀN",
          searchable: true
        },
        {
          field: "user_source",
          label: "NGƯỜI CHUYỂN TIỀN",
          searchable: true
        },
        {
          field: "user_receiver",
          label: "NGƯỜI NHẬN TIỀN",
          searchable: true
        },
        // {
        //   field: "status",
        //   label: "TRẠNG THÁI",
        //   sortable: true
        // }
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