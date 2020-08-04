<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns">
          <div class="column is-half"></div>
          <div id="form" class="column is-half">
            <!-- selection tab -->
            <div class="columns nav-tabs is-mobile is-variable is-5">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/login">Đăng nhập</router-link>
              </div>
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register">Đăng ký</router-link>
              </div>
            </div>
            <!-- notification -->
            <b-notification
              type="is-danger"
              has-icon
              aria-close-label="Đóng"
              role="alert"
              :active.sync="error"
              class="error-notification"
            >{{error_msg}}</b-notification>
            <!-- form -->
            <!-- log in form -->
            <section class="form">
              <p class="label-info">Đăng nhập bằng số điện thoại của bạn</p>
              <!-- FORM LOG IN -->
              <form @submit.prevent="loginSubmit">
                <b-input class="login-input" v-model="phone" placeholder="Số điện thoại của bạn"></b-input>
                <b-input
                  class="login-input"
                  v-model="password"
                  type="password"
                  placeholder="Mật khẩu"
                  password-reveal
                ></b-input>
                <b-button
                  rounded
                  type="is-primary"
                  style="width: 100%; font-size: 18px; font-weight: 700;"
                  outlined
                  native-type="submit"
                >🙌 Tiếp tục</b-button>
                <b-button
                  type="is-text"
                  style="width: 100%; margin-top: 16px;"
                  rounded
                >Quên mật khẩu</b-button>
              </form>
            </section>

            <p style="margin-top: 40px; font-size: 10px;">
              Bằng việc điền đúng số điện thoại và tiến hành đăng ký,
              <br />bạn đã đồng ý với điều khoản về chính sách bảo mật
              <br />thông tin và quyền sử dụng thông tin cá nhân vào
              <br />mục đích đã được nêu trong chính sách bảo mật của semo.
            </p>
          </div>
          <!-- <LoginAndRegister /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "012345678",
      password: "123123",
      error: false,
      error_msg: "",
    };
  },
  methods: {
    loginSubmit() {
      let vm = this
      this.$store
        .dispatch("LOGIN", {
          phone: this.phone,
          password: this.password,
        })
        .then(() => {
          vm.$router.push({ name: 'Trang chủ' })
        })
        .catch((error) => {
          this.error_msg = error.message;
          this.error = true;
        });
    },
  },
};
</script>
<style scoped>
.login-container {
  height: 100%;
  margin-top: 12px;
}

.background {
  background: url("https://img1.mashed.com/img/uploads/2017/06/fruit-main.jpg")
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

.login-input {
  margin-bottom: 16px;
}

.label-info {
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
</style>