<template>
  <div class="wrap">
      <div class="user-infor">
    <img src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" />
    <div class="user-name">
      <p class="name">Bùi Trần Việt Anh</p>
      <p class="city">Thanh Hóa</p>
    </div>
    </div>
    <div class="user-stats">
    <div class="user-rate">
      <p class="first-content">ĐÁNH GIÁ</p>
      <p class="second-content">★ 3.9</p>
    </div>
    <div class="user-quantity">
      <p class="first-content">SẢN LƯỢNG ĐÃ BÁN</p>
      <p class="second-content">14,329.82 tạ</p>
    </div>
    <div class="user-time">
      <p class="first-content">THAM GIA</p>
      <p class="second-content">7 tháng</p>
    </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.user-infor img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: block;
  margin: auto 24px 40px 60px;
  /* margin-right: 24px; */
  /* margin-bottom: 40px; */
}
.name {
  font-family: Merriweather;
  font-size: 19px;
  color: #07d390;
  font-weight: bolder;
  opacity: 1;
}
.city {
  font-family: Roboto;
  font-size: 16px;
  color: #909090;
  opacity: 1;
}
.first-content {
  font-family: Roboto;
  font-size: 15px;
  color: #707070;
  opacity: 1;
}
.second-content {
  font-family: Roboto;
  font-size: 25px;
  color: #B88CD8;
  opacity: 1;
}
.user-infor{
    display: flex;
}
.user-stats{
    display: flex; 
}
.user-rate {
    margin: 0 auto 0 60px;
    /* width: 232px; */
}
.user-quantity {
    margin: 0 auto 0 60px;
    /* width: 141px; */
}
.user-time {
    margin: 0 60px 0 60px;
    /* width: 84px; */
}
</style>