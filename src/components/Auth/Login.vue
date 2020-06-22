<template>
  <div id="app" class="container">
    <div class="menu">
      <img src="../../assets/Logo.png" />
      <p>Sàn đấu giá sỉ hoa quả nơi nông sản của bạn được trả giá tốt nhất.</p>
    </div>
    <div class="wrap">
      <div class="coverimg">
        <img src="../../assets/Logo.png" />
      </div>
      <div class="contentright">
        <b-tabs position="is-centered" class="block">
          <b-tab-item label="Đăng nhập"></b-tab-item>
          <b-tab-item label="Đăng kí"></b-tab-item>
        </b-tabs>
        <section class="inputtext">
          <p>Đăng nhập bằng số điện thoại của bạn</p>
          <b-field>
            <b-input placeholder="Số điện thoại của bạn"></b-input>
          </b-field>
          <b-field>
            <b-input placeholder="Mật khẩu"></b-input>
          </b-field>
          <div class="buttons">
            <b-button rounded type="is-success" outlined>Tiếp tục</b-button>
          </div>
        </section>
        <div class="contentlast">
          <p>
            Bằng việc điền đúng số điện thoại và tiến hành đăng ký,
            bạn đã đồng ý với điều khoản về chính sách bảo mật
            thông tin và quyền sử dụng thông tin cá nhân vào
            mục đích đã được nêu trong chính sách bảo mật của semo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    phonenumber: "",
    password: ""
    //error: false
  }),
  methods: {
    login() {
      this.$store.dispatch("LOGIN", {
        _phonenumber: this.phonenumber,
        _password: this.password
      });
      //   .then(success => {
      //     this.$router.push("/")
      //   })
      //   .catch(error => {
      //     this.error = true;
      //   })
    }
  }
};
</script>
<style>
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.contentright {
  padding-left: 60px;
}
.menu {
  width: 100%;
  height: 60px;
  padding: 10px 0;
  background-color: #fcfcfc;
  display: flex;
}
.menu p{
  text-align: center;
}
.menu img {
  width: 120px;
  height: 40px;
}
.firstcontent {
  text-align: center;
}
.coverimg {
  width: 540px;
  height: 627px;
}
.inputtext p {
  font-family: Roboto;
  font-size: 18px;
}
.inputtext ::placeholder {
  padding-left: 24px;
}
.inputtext {
  width: 626px;
  height: 224px;
}
.inputtext button {
  width: 626px;
  height: 44px;
}
.block {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
.contentlast p{
  width: 265px;
  height: 52px;
  font-size: 10px;
  font-family: Roboto;
  opacity: 0.65;
}
</style>