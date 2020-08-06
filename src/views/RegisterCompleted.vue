<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns is-centered">
          <div id="form" class="column is-half">
            <!-- selection tab -->
            <div class="columns nav-tabs is-centered">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register/completed">Đăng ký thành công</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- sign up form -->
                <!-- name -->
                <div class="columns is-centered is-mobile">
                  <p style="font-size: 100px; margin: auto 16px;">🎉</p>
                </div>
                <p class="label-info">
                  Mừng bạn đã đến với chúng tôi.
                  Cùng bắt đầu hành trình mới tại
                  <img src="../assets/logo.png" style="height: 14px;" /> nhé.
                </p>

                <!-- submit -->
                <b-button
                  rounded
                  type="is-primary"
                  style="font-size: 18px; font-weight: 700;"
                  expanded
                  tag="router-link"
                  to="/"
                >✈️ Đi thôi!</b-button>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSuccess",
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

.image-container {
  background-color: #dfdfdf;
  height: 200px;
  border-radius: 10px;
  border: 0.5px solid #adadad;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  transition: 0.5s;
}

.image-container:hover {
  background-color: #efefef;
  border: 0.5px solid #cdcdcd;
  box-shadow: 0 2px 6px #00000034;
}

.image-upload-trigger {
  width: 100%;
  height: 100%;
  opacity: 0;
}

.not-uploaded {
  opacity: 0.5;
}

.uploaded {
  opacity: 1;
}

.status {
  margin-top: 16px;
}
</style>