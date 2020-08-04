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
  </section>
</template>
<script>
import MediationDashboardDelete from "../MediationDashboard/MediationDashboardDelete.vue";
export default {
  components: {
    MediationDashboardDelete
  },
  methods: {
    deleteAlert() {
      this.$buefy.modal.open({
        parent: this,
        component: MediationDashboardDelete,
        hasModalCard: true,
        trapFocus: true
      });
    }
  },
  data() {
    const data = [
      {
        id: 1,
        user_phone: "0912345678",
        user_name: "Nguyen Ha Thanh",
        status: "⏲️ CHỜ KIỂM DUYỆT",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 2,
        user_phone: "0912345678",
        user_name: "Nguyen Ha Thanh",
        status: "✔️ ĐÃ KIỂM DUYỆT",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 3,
        user_phone: "0912345678",
        user_name: "Nguyen Ha Thanh",
        status: "⚠ BỊ HẠN CHẾ",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 4,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "⚠ QUÁ HẠN THANH TOÁN",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 5,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "✔️ HOÀN THÀNH",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 6,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "🗑️ ĐÃ HỦY",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 7,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "⏲️ CHỜ CHUYỂN TIỀN CỌC",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 8,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "💵 CỌC XONG",
        date: "2016-10-15 13:43:27"
      },
      {
        id: 9,
        user_phone: "2451231412",
        user_name: "Nguyen Ha Thanh",
        status: "⏲️ CHỜ THANH TOÁN",
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
          field: "user_phone",
          label: "SỐ ĐIỆN THOẠI",
          searchable: true
        },
        {
          field: "user_name",
          label: "TÊN NGƯỜI DÙNG",
          searchable: true
        },
        {
          field: "status",
          label: "TRẠNG THÁI",
          sortable: true
        },
        {
          field: "date",
          label: "NGÀY TẠO",
          searchable: true
        },

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