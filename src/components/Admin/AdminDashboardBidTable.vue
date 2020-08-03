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
          <b-table-column :key="column.id" v-bind="column"
          onclick="window.location.href='/admindashboardcheckbid'">
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
import MediationDashboardDelete from "../MediationDashboard/MediationDashboardDelete";
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
        user_money: "82,560,000đ",
        status: "💸 ĐANG MỞ",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 2,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "🔒 ĐÃ ĐÓNG",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 3,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "🗑️ ĐÃ XÓA",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 4,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "🗑️ ĐÃ XÓA",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 5,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "💸 ĐANG MỞ",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 6,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "💸 ĐANG MỞ",
        date: "2016-10-15 13:43:27",
      },
      {
        id: 7,
        content:
          "Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm",
        user_money: "82,560,000đ",
        status: "💸 ĐANG MỞ",
        date: "2016-10-15 13:43:27",
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
        //   width: 100,                    
          centered: true,
          numeric: true,
          searchable: true
        },
        {
          field: "content",
          label: "SẢN PHẨM",
          searchable: true
        },
        {
          field: "user_money",
          label: "GIÁ HIỆN TẠI",
          searchable: true
        },
        {
          field: "status",
          label: "TRẠNG THÁI",
          searchable: true
        },
        {
          field: "date",
          label: "THỜI GIAN ĐÓNG PHIÊN",
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