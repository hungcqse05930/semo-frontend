<template>
  <b-navbar class="container" :transparent="true" :close-on-click="false">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/home' }">
        <img src="../../assets/logo.png" alt="Sàn đấu giá sỉ hoa quả" />
      </b-navbar-item>
    </template>
    <template slot="start" style="align-self: center !important;">
      <b-navbar-item>
        <b-input placeholder="Tìm kiếm" rounded style="width: 500px"></b-input>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/login' }">
        <a class="button is-primary">
          <b-icon icon="account" size="is-small"></b-icon>
          <strong>Đăng nhập</strong>
        </a>
      </b-navbar-item>
      <b-navbar-item tag="div">
        <a class="button">
          <b-icon icon="bell" size="is-small"></b-icon>
          <p>Thông báo</p>
        </a>
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/user' }">
        <a class="button is-light">
          <strong>Người dùng</strong>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
}

</style>