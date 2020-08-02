<template>
  <div class="container">
    <div class="user-info columns is-multiline is-centered">
      <div class="profile column">
        <div class="columns is-mobile is-vcentered">
          <div class="column is-narrow">
            <div class="profile-image" :style="{ backgroundImage: 'url(' + img_url + ')', margin: 0 }"></div>
          </div>
          <div class="user-name column">
            <p class="name">Bùi Trần Việt Anh</p>
            <p class="city">Thanh Hóa</p>
          </div>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="columns is-mobile is-variable is-6">
          <div class="user-rate column is-narrow">
            <p class="first-content">ĐÁNH GIÁ</p>
            <p class="second-content">★ 3.9</p>
          </div>
          <div class="user-time column is-narrow">
            <p class="first-content">ĐÃ BÁN</p>
            <p class="second-content">14,294 tạ</p>
          </div>
          <div class="user-time column is-narrow">
            <p class="first-content">THAM GIA</p>
            <p class="second-content">7 tháng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFirstDescription",
  props: {
    user: Object,
  },
  data() {
    return {
      img_url: "https://st.quantrimang.com/photos/image/072015/22/avatar.jpg",
    };
  },
};
</script>

<style scoped>
.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* bg image */
  background-position: center;
  background-size: cover;
}

.name {
  font-family: "Merriweather";
  font-size: 19px;
  color: #07d390;
  font-weight: 900;
}

.city {
  font-family: "Roboto";
  font-size: 16px;
}

.first-content {
  font-family: "Roboto";
  font-size: 15px;
  color: #707070;
}

.second-content {
  font-family: Roboto;
  font-size: 25px;
  color: #b88cd8;
  opacity: 1;
}
</style>