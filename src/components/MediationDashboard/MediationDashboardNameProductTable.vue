<template>
  <section class="dashboard-wrap">
    <div class="pagination">
      <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
      <div class="paging">
        <p class="page-back">👈 Trang trước</p>
        <p class="page-next">Trang sau 👉</p>
      </div>
    </div>
    <b-tabs>
      <b-table
        class="dashboard-table"
        :data="data"
        :columns="columns"
        :checked-rows.sync="checkedRows"
        :is-row-checkable="(row)"
        checkable
        :checkbox-position="checkboxPosition"
      >
        <template slot="bottom-left">
          <b>Total checked</b>
          : {{ checkedRows.length }}
        </template>
      </b-table>
    </b-tabs>
  </section>
</template>
<script>
export default {
  data() {
    const data = [
      {
        id: 1,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "🖊️ Chỉnh sửa | 🗑️ Xóa"
      },
      {
        id: 2,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: ""
      },
      {
        id: 3,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: ""
      },
      {
        id: 4,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: ""
      },
      {
        id: 5,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "🖊️ Chỉnh sửa | 🗑️ Xóa"
      },
      {
        id: 6,
        product_name: "TÁO AMBROSSIA",
        product_number: "312 SẢN PHẨM",
        user_name: "Nguyen Ha Thanh",
        date: "2016-10-15 13:43:27",
        status: "🖊️ Chỉnh sửa | 🗑️ Xóa"
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
          numeric: true
        },
        {
          field: "product_name",
          label: "Product Name",
          width: 500,
        },
        {
          field: "product_number",
          label: "Product Number",
        },
        {
          field: "user_name",
          label: "User Name",   
        },
        {
          field: "date",
          label: "Date",
          centered: true
        },
        {
          field: "status",
          label: "Status"
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