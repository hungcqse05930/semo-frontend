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
                <b-table class="dashboard-table"
                    :data="data"
                    :columns="columns"
                    :checked-rows.sync="checkedRows"
                    :is-row-checkable="(row)"
                    checkable
                    :checkbox-position="checkboxPosition">
                    <template slot="bottom-left">
                        <b>Đã chọn</b>: {{ checkedRows.length }}
                    </template>
                </b-table>
        </b-tabs>
    </section>
</template>
<script>
export default {
    data() {
            const data = [
                { 'id': 1, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '⏲️ Chờ kiểm duyệt' },
                { 'id': 2, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '💰 Đã bán' },
                { 'id': 3, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '✔ Kiểm duyệt | 🗑️ Xóa'},
                { 'id': 4, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '🤝 Đang giao kèo' },
                { 'id': 5, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '✅ Đã kiểm duyệt' },
                { 'id': 6, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '⚠ Cần chỉnh sửa' },
                { 'id': 7, 'content': 'Táo này là táo Ambrossia nè các cậu ơi. Dòng thứ 2 của sản phẩm', 'product_name': 'TÁO AMBROSSIA', 'user_name': 'Nguyen Ha Thanh' ,'date': '2016-10-15 13:43:27', 'status': '💸 Đang đấu giá' },
            ]

            return {
                data,
                checkboxPosition: 'left',
                checkedRows: [],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'content',
                        label: 'Content',
                    },
                    {
                        field: 'product_name',
                        label: 'Product Name',
                    },
                    {
                        field : 'user_name',
                        label : 'User Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'status',
                        label: 'Status',
                    }
                ]
            }
        }
}
</script>
<style scoped>
.dashboard-wrap{
    width: 1166px;
}
.pagination{
  display: flex;
  justify-content: space-between;
}
.paging{
  display: flex;
    justify-content: space-between;
}
.page-back{
  padding-right: 15px;
} 
.page-next{
    margin-right: 20px;
}
.dashboard-table {
    font-family: Roboto;
    font-size: 12px;
    color: #212121;
}
.post-infor{
  font-family: "Roboto";
    font-weight: 500;
    font-size: 17px;
    color: #707070;
    padding-left: 3px;
}
</style>