<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns">
          <div class="column"></div>
          <div id="form" class="column is-three-fifths">
            <!-- selection tab -->
            <div class="columns nav-tabs is-mobile is-variable is-5">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/login">Đăng nhập</router-link>
              </div>
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register">Đăng ký</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- input number -->
              <p class="label-info">Sử dụng số điện thoại của bạn để đăng ký</p>
              <!-- sign up form -->
              <form @submit.prevent="signupSubmit()">
                <b-field :type="inputType" :message="inputMessage">
                  <b-input class="login-input" v-model="phone" placeholder="Số điện thoại của bạn"></b-input>
                </b-field>
                <br />
                <b-button
                  id="sign-up-button"
                  rounded
                  type="is-primary"
                  style="width: 100%; font-size: 18px; font-weight: 700;"
                  outlined
                  native-type="submit"
                  :disabled="isDisabled"
                  :loading="isLoading"
                >🤟 Tiếp tục</b-button>
              </form>
            </section>
            <p style="margin-top: 40px; font-size: 10px;">
              Bằng việc điền đúng số điện thoại và tiến hành đăng ký,
              <br />bạn đã đồng ý với điều khoản về chính sách bảo mật
              <br />thông tin và quyền sử dụng thông tin cá nhân vào
              <br />mục đích đã được nêu trong chính sách bảo mật của semo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      phone: "",
      appVerifier: "",
      otp: "",
      inputMessage: "",
      inputType: "",
      isDisabled: true,
      isLoading: false,
    };
  },
  created() {
    this.initReCaptcha();
  },
  watch: {
    phone: function () {
      if (this.phone.length === 0) {
        this.isDisabled = true;
      } else if (this.formatPhone instanceof Error) {
        this.inputType = "is-danger";
        this.inputMessage = this.formatPhone.message;
        this.isDisabled = true;
      } else {
        this.inputType = "";
        this.inputMessage = "";
        this.isDisabled = false;
      }
    },
  },
  computed: {
    /*eslint-disable */
    formatPhone: function () {
      let phone = this.phone;
      // format input for phone number
      // categorize phone number
      let type = 0;
      if (phone.startsWith("0")) {
        type = 0;
      } else if (phone.startsWith("+84")) {
        type = 1;
      } else if (phone.startsWith("84")) {
        type = 2;
      } else {
        type = -1;
      }

      // check and format number
      // phone number has invalid characters
      if (phone.match(/[^0-9\+\s\-]|\-{2}/g)) {
        return new Error("Số điện thoại của bạn có chứa kí tự không hợp lệ.");
      } else {
        // remove - and space
        phone = phone.replace(/[\s\-]/g, "");

        if (type < 0) {
          // if phone number does not have VN format
          return new Error(
            "semo chỉ lấy những số điện thoại được đăng kí dưới lãnh thổ Việt Nam thôi. Bạn hãy kiểm tra lại nhé."
          );
        } else if (
          (type == 0 && phone.length < 10) ||
          (type == 2 && phone.length < 11) ||
          (type == 1 && phone.length < 12)
        ) {
          // if number is too short
          return new Error("Hình như bạn nhập thiếu số thì phải.");
        } else if (
          (type == 0 && phone.length > 10) ||
          (type == 2 && phone.length > 11) ||
          (type == 1 && phone.length > 12)
        ) {
          // if number is too short
          return new Error("Hình như bạn nhập nhiều số quá thì phải.");
        } else {
          // format the number
          switch (type) {
            case 0:
              return "+84".concat(phone.substr(1));
            case 1:
              return phone;
            case 2:
              return "+".concat(phone);
          }
        }
      }
    },
  },
  methods: {
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        firebase.auth().languageCode = "vi";
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "sign-up-button",
          {
            size: "invisible",
            callback: function (response) {},
            "expired-callback": function () {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            },
          }
        );
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 500);
    },
    signupSubmit() {
      let vm = this;
      if (!(this.formatPhone instanceof Error)) {
        vm.isDisabled = true;
        vm.isLoading = true;
        let appVerifier = this.appVerifier;
        //
        firebase
          .auth()
          .signInWithPhoneNumber(this.formatPhone, appVerifier)
          .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            vm.$store
              .dispatch("SIGN_UP_PHONE", {
                phone: vm.formatPhone,
              })
              .catch((error) => {
                vm.inputType = "is-danger";
                vm.inputMessage = error.message;
                vm.isDisabled = false;
                vm.isLoading = false;
              });
          })
          .catch(function (error) {
            vm.inputType = "is-danger";
            vm.inputMessage = error.message;
            vm.isDisabled = false;
            vm.isLoading = false;
          });
      }
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