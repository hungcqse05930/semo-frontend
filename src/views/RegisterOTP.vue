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
                <router-link to="/register/otp">Đăng ký</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- input number -->
              <p class="label-info">
                Mã xác thực đã được gửi đến số
                <strong style="color: #01d28e">{{ phone }}</strong>.
                <br />Hãy điền vào đây nhé, dòng mã ấy có 6 chữ số.
              </p>
              <!-- sign up form -->
              <form @submit.prevent="verifyOtp()">
                <b-field :type="inputType" :message="inputMessage">
                  <b-input class="login-input" v-model="otp" placeholder="Mã số"></b-input>
                </b-field>
                <br />
                <b-button
                  id="otp-submit-button"
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
              <form @submit.prevent="changeNumber()">
                <b-button
                  id="change-number-button"
                  type="is-text"
                  expanded
                  style="font-size: 14px; margin-top: 16px;"
                  native-type="submit"
                >Nhập số điện thoại khác</b-button>
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
  name: "RegisterOTP",
  data() {
    return {
      isDisabled: true,
      isLoading: false,
      otp: "",
      phone: "",
      inputMessage: "",
      inputType: "",
    };
  },
  computed: {
    formatOTP() {
      if (this.otp.match(/[^0-9]/g)) {
        return new Error(
          "Đoạn mã này chỉ có chữ số thôi, hãy xóa kí tự khác đi nhé."
        );
      } else {
        let otp = this.otp.replace(/[^0-9]/g, "");

        if (this.otp.length > 6) {
          return new Error("Mã xác thực này dài quá 6 số rồi.");
        } else if (this.otp.length < 6) {
          return new Error("Hình như bạn bỏ sót số nào đó.");
        } else {
          return otp;
        }
      }
    },
  },
  watch: {
    otp: function () {
      if (this.otp.length === 0) {
        this.inputType = "";
        this.inputMessage = "";
        this.isDisabled = true;
      } else if (this.formatOTP instanceof Error) {
        this.inputType = "is-danger";
        this.inputMessage = this.formatOTP.message;
        this.isDisabled = true;
      } else {
        this.inputType = "";
        this.inputMessage = "";
        this.isDisabled = false;
      }
    },
  },
  methods: {
    verifyOtp() {
      if (!(this.formatOTP instanceof Error)) {
        this.isDisabled = true;
        this.isLoading = true;
        let vm = this;
        let code = this.otp;
        //
        window.confirmationResult
          .confirm(code)
          .then(function () {
            // User signed in successfully.
            // route to set password !
            vm.$router.push({ path: "/register/pwd" });
          })
          .catch(function (error) {
            // User couldn't sign in (bad verification code?)
            // ...
            vm.isDisabled = false;
            vm.isLoading = false;
            vm.inputType = "is-danger"
            vm.inputMessage = error.message
          });
      }
    },
  },
  created() {
    this.phone = this.$store.state.new_user.phone;
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