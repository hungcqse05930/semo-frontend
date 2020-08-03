<template>
  <section class="dashboard-wrap">
    <!-- <div class="pagination">
      <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
      <div class="paging">
        <p class="page-back">👈 Trang trước</p>
        <p class="page-next">Trang sau 👉</p>
      </div>
    </div>-->
    <b-table
      class="dashboard-table"
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
import MediationDashboardEditProduct from "./MediationDashboardEditProduct.vue";
import MediationDashboardDelete from "./MediationDashboardDelete.vue";
export default {
  components: {
    MediationDashboardEditProduct,
    MediationDashboardDelete
  },
  methods: {
    allAlert() {
      this.isComponentModalActive = true
    },
    deleteAlert(){
       this.$buefy.modal.open({
         parent: this,
         component: MediationDashboardDelete,
         hasModalCard: true,
         trapFocus: true
       })
    }
  },
  data() {
    const data = [
      {
        id: 1,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 2,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 3,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 4,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 5,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 6,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27"
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
          field: "product_name",
          label: "TÊN LOẠI QUẢ",
          width: 500,
          searchable: true
        },
        {
          field: "product_number",
          label: "SỐ SẢN PHẨM",
          searchable: true
        },
        {
          field: "user_name",
          label: "NGƯỜI TẠO",
          searchable: true
        },
        {
          field: "date",
          label: "THỜI GIAN TẠO",
          centered: true,
          searchable: true
        }
      ]
    };
  }
};
</script>
<style scoped>
.dashboard-wrap {
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
.dashboard-table {
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