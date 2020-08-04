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
                <router-link to="/register/pwd">Tạo mật khẩu</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- input number -->
              <p class="label-info">
                Mật khẩu là chìa khóa để bạn sử dụng tài khoản.
                <br />Hãy ghi lại và nhớ nó thật kĩ và không để ai biết nhé.
              </p>
              <!-- sign up form -->
              <form @submit.prevent="createPassword()">
                <b-field>
                  <b-input
                    class="login-input"
                    type="password"
                    v-model="password"
                    placeholder="Mật khẩu mới của bạn"
                  ></b-input>
                </b-field>
                <br />
                <div class="requirement">
                  <p class="label-info">Mật khẩu của bạn phải:</p>
                  <p
                    class="label-info label-info-sub"
                    :class="isLong ? 'passed' : 'failed'"
                  >- Dài từ 8 - 25 kí tự</p>
                  <p
                    class="label-info label-info-sub"
                    :class="isChar ? 'passed' : 'failed'"
                  >- Bao gồm cả chữ in thường, chữ in hoa và số</p>
                </div>
                <b-field :type="inputType" :message="inputMessage">
                  <b-input
                    class="login-input"
                    type="password"
                    v-model="re_password"
                    placeholder="Nhập lại mật khẩu"
                  ></b-input>
                </b-field>
                <b-button
                  rounded
                  type="is-primary"
                  style="font-size: 18px; font-weight: 700;"
                  outlined
                  expanded
                  native-type="submit"
                  :disabled="isDisabled"
                  :loading="isLoading"
                >👌 Xác nhận</b-button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "registerpassword",
  components: {},
  data() {
    return {
      password: "",
      isLong: false,
      isChar: false,
      re_password: "",
      inputType: "",
      inputMessage: "",
      isDisabled: true,
      isLoading: false,
    };
  },
  /*eslint-disable */
  watch: {
    password: function () {
      this.isLong =
        this.password.length > 8 && this.password.length < 25 ? true : false;
      this.isChar = this.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g)
        ? true
        : false;
    },
    re_password: function () {
      if (
        this.password === this.re_password &&
        this.isLong === true &&
        this.isChar === true
      ) {
        this.inputType = "";
        this.inputMessage = "";
        this.isDisabled = false;
      } else {
        this.inputType = "is-danger";
        if (this.password !== this.re_password) {
          this.inputMessage = "Hãy gõ chính xác mật khẩu của bạn nhé.";
        } else {
          this.inputMessage = "";
          this.inputType = "";
        }

        this.isDisabled = true;
      }
    },
  },
  methods: {
    createPassword() {
      let vm = this;
      this.$store.dispatch("SIGN_UP_PASSWORD", {
        password: vm.password
      }).then(() => {
        vm.$router.push({ path: '/' })
      })
    }
  }
};
</script>
<style scoped>
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.content-right {
  padding-left: 60px;
}
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
}
.input-text {
  width: 626px;
  height: 224px;
}
.step-title {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
  width: 222px;
}
.step-title p {
  border-bottom: #01d28e solid 3px;
}
.password-detail {
  padding-left: 5px;
}
.content-midle p {
  margin-top: 18px;
}

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

.passed,
.failed {
  margin-left: 12px;
}

.passed {
  color: #01d28e;
}

.failed {
  color: #fd5e53;
}
</style>