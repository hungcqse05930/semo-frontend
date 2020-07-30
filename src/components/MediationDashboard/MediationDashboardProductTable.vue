<template>
  <section class="dashboard-wrap">
    <!-- <div class="pagination">
      <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
      <div class="paging">
        <p class="page-back">👈 Trang trước</p>
        <p class="page-next">Trang sau 👉</p>
      </div>
    </div> -->
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
      >
        <template slot-scope="props">
          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column"
             onclick="window.location.href='/cencorproductmediation'">
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
          <button class="button field is-danger" @click="checkedRows = []"
                :disabled="!checkedRows.length">
                <b-icon icon="close"></b-icon>
                <span>Clear checked</span>
            </button>
        </template>    
      </b-table>
  </section>
</template>
<script>
import MediationDashboardDelete from "./MediationDashboardDelete.vue";
export default {
  components: {
    MediationDashboardDelete,
  },
    methods: {
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
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "⏲️ Chờ kiểm duyệt"
      },
      {
        id: 2,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "💰 Đã bán"
      },
      {
        id: 3,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "💰 Đã bán"
      },
      {
        id: 4,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "🤝 Đang giao kèo"
      },
      {
        id: 5,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "✅ Đã kiểm duyệt"
      },
      {
        id: 6,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "⚠ Cần chỉnh sửa"
      },
      {
        id: 7,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        product_name: "TÁO AMBROSSIA",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "💸 Đang đấu giá"
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
          field: "content",
          label: "Content",
          searchable: true
        },
        {
          field: "product_name",
          label: "Product Name",
          searchable: true
        },
        {
          field: "user_name",
          label: "User Name",
          searchable: true
        },
        {
          field: "date",
          label: "Date",
          centered: true,
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