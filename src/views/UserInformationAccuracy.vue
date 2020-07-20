<template>
      <div class="accuracy-container">
    <div class="first-content">
      <UserFirstDescription />
    </div>
    <TabInformation />
    <div class="user-content">
      <UserInformationMenu />
      <div class="content-all">
        <div class="content-information">
          <div class="content-middle">
            <div class="first-title">
              <p>🎟 Xác thực</p>
            </div>
            <div class="accuracy-button">
              <b-button type="is-success">➕ Thêm giấy tờ tùy thân</b-button>
            </div>
          </div>
          <div class="accuracy-information">
              <div class="accuracies">
                <UserinformationAddressInfor
                  class="accuracy-item"
                  v-bind:accuracy="accuracies"
                  v-for="accuracy in accuracies"
                  v-bind:key="accuracy.id"
                />
              </div>
          </div>
          <div class="pagination">
              <p class="post-infor">📰 Hiển thị 1-6 trên 10 bài đăng</p>
              <div class="paging">
                <p class="page-back">👈 Trang trước</p>
                <p class="page-next">Trang sau 👉</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabInformation from "../components/UserInformation/TabInformation.vue";
import UserFirstDescription from "../components/UserInformation/UserFirstDescription.vue";
import UserInformationMenu from "../components/UserInformation/UserInformationMenu.vue";
export default {
    name : "userinformationaccuracy",
    components: {
    TabInformation,
    UserFirstDescription,
    UserInformationMenu,
    },
    //   data() {
    // return {
    //     accuracies: [
    //         {
    //             id: 1,

    //         }
    //     ] 
    // }
    //   }
}

</script>
<style scoped>
.user-content {
  display: flex;
  margin: 36px 0px 60px auto;
}
.file-container {
  max-width: 1366px;
  margin: auto 60px auto 60px;
}
.first-content {
  display: flex;
  flex-flow: row;
}
.content-all {
  width: 1034px;
}
.content-information {
  height: 350px;
}
.first-title p {
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  color: #07d390;
}
.content-middle {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>