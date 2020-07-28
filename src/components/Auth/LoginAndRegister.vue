<template>
  <!-- <b-tabs v-model="activeTab" class="block"> -->
  <b-tabs v-model="activeTab">
    <b-tab-item label="Đăng nhập">
      <div class="item-login">
        <form method="POST" @submit-prevent="submitLogin" class="input-text">
          <p>Đăng nhập bằng số điện thoại của bạn</p>
          <b-field>
            <b-input v-model="phone" placeholder="Số điện thoại của bạn"></b-input>
          </b-field>
          <b-field>
            <b-input v-model="password" type="password" placeholder="Mật khẩu" password-reveal></b-input>
          </b-field>
          <div class="buttons">
            <b-button rounded type="is-success" outlined>Tiếp tục</b-button>
          </div>
          <div class="contentlast">
          <p>
            Bằng việc điền đúng số điện thoại và tiến hành đăng ký,
            bạn đã đồng ý với điều khoản về chính sách bảo mật
            thông tin và quyền sử dụng thông tin cá nhân vào
            mục đích đã được nêu trong chính sách bảo mật của semo.
          </p>
        </div>
        </form>
      </div>
    </b-tab-item>
    <b-tab-item label="Đăng kí">
      <div class="item-register">
        <section class="inputtext">
          <p>Sử dụng số điện thoại của bạn để đăng ký</p>
          <b-field>
            <b-input placeholder="Số điện thoại của bạn"></b-input>
          </b-field>
          <div class="buttons">
            <b-button rounded type="is-success" outlined>Tiếp tục</b-button>
          </div>
          <div class="contentlast">
          <p>
            Bằng việc điền đúng số điện thoại và tiến hành đăng ký,
            bạn đã đồng ý với điều khoản về chính sách bảo mật
            thông tin và quyền sử dụng thông tin cá nhân vào
            mục đích đã được nêu trong chính sách bảo mật của semo.
          </p>
        </div>
        </section>
      </div>
    </b-tab-item>
  </b-tabs>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      activeTab: 0,
      phone: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      console.log('hello')
    }
  }
};
</script>
<style scoped>
/* .block {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
} */
.buttons button {
  width: 626px;
  height: 44px;
}
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 10px;
}
.input-text {
  width: 626px;
  height: 224px;
}
.contentlast p{
  width: 265px;
  height: 52px;
  font-size: 10px;
  font-family: Roboto;
  opacity: 0.65;
}
</style>