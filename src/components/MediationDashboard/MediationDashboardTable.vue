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
                    :data="data"
                    :columns="columns"
                    :checked-rows.sync="checkedRows"
                    :is-row-checkable="(row)"
                    checkable
                    :checkbox-position="checkboxPosition">
                    <template slot="bottom-left">
                        <b>Total checked</b>: {{ checkedRows.length }}
                    </template>
                </b-table>
        </b-tabs>
    </section>
</template>
<script>
export default {
    data() {
            const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
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
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
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
    margin-right: 40px;
}
</style>