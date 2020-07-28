<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns">
          <div class="column is-half"></div>
          <div id="form" class="column is-half">
            <b-tabs class="tab" v-model="activeTab" size="is-medium" expanded>
              <b-tab-item label="Đăng nhập"></b-tab-item>
              <b-tab-item label="Đăng ký"></b-tab-item>
            </b-tabs>

            <section v-if="activeTab == 0">
              <p class="label-info">Đăng nhập bằng số điện thoại của bạn</p>
              <!--  -->
              <form @submit.prevent="loginSubmit">
                <b-input class="login-input" v-model="phone" placeholder="Số điện thoại của bạn"></b-input>
                <b-input
                  class="login-input"
                  v-model="password"
                  type="password"
                  placeholder="Mật khẩu"
                  password-reveal
                ></b-input>
                <br />
                <b-button
                  rounded
                  type="is-primary"
                  style="width: 100%; font-size: 18px; font-weight: 700;"
                  outlined
                  native-type="submit"
                >🙌 Tiếp tục</b-button>
              </form>
              <p style="margin-top: 40px; font-size: 10px;">
                Bằng việc điền đúng số điện thoại và tiến hành đăng ký,<br>
                bạn đã đồng ý với điều khoản về chính sách bảo mật<br>
                thông tin và quyền sử dụng thông tin cá nhân vào<br>
                mục đích đã được nêu trong chính sách bảo mật của semo.
              </p>
            </section>
          </div>
          <!-- <LoginAndRegister /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NextButton from "../components/Auth/NextButton.vue";
// import ContentLast from "../components/Auth/ContentLast.vue";
// import ContentLeftPicture from "../components/Auth/ContentLeftPicture.vue";
// import LoginAndRegister from "../components/Auth/LoginAndRegister";
export default {
  name: "login",
  components: {
    // NextButton,
    // ContentLast,
    // ContentLeftPicture,
    // LoginAndRegister,
  },
  data() {
    return {
      activeTab: 0,
      phone: "",
      password: "",
    };
  },
  methods: {
    loginSubmit() {
      
    },
  }
};
</script>
<style scoped>
.login-container {
  height: 100%;
  margin-top: 12px;
}

.background {
  background: url("https://beautifuldayroc.com/wp-content/uploads/2017/10/Fresh-fruit-pretty.jpg.653x0_q80_crop-smart.jpg")
    no-repeat center;
  background-size: cover;
}

#form {
  background-color: #ffffff;
  padding: 16px 40px;
  margin: 60px 0;
}

#img-placeholder {
  height: 100%;
  overflow: hidden;
}

#img-placeholder img {
  height: 100%;
  width: auto;
}

.tab {
  font-family: "Merriweather";
  font-weight: 900;
}

.login-input {
  margin-bottom: 16px;
}

.label-info {
  margin-top: -20px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

/* #bound{
  padding: 60px 0;
} */

.content-right {
  padding-left: 100px;
}
/* .content-left {
  padding-left: 0px;
} */
</style>