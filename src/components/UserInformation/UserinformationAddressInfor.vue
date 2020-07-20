<template>
  <div class="address-list">
    <div class="address-container">
      <div class="address-content">
        <p class="address-name">{{ address.name }}</p>
        <p class="address-phonenumber">{{address.phonenumber}}</p>
        <p class="address-title">{{address.title}}</p>
        <p class="address-first">{{address.first}}</p>
        <p class="address-second">{{address.second}}</p>
        <p class="address-city">{{address.city}}</p>
      </div>
      <div class="edit-button">
        <b-button type="is-success">🖊️ Chỉnh sửa</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userinformationaddressinfor",
  props: {
    address: Object
  }
};
</script>
<style scoped>
.address-list {
  height: 292px;
  width: 505px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
}
.address-container {
  margin-left: 24px;
}
.address-name {
  font-family: Merriweather;
  font-size: 19px;
  color: #000000;
  opacity: 1;
  margin: 22px auto 18px auto;
  font-weight: 700;
}
.address-phonenumber {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
  margin-bottom: 18px;
}
.address-title {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
}
.address-first {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
}
.address-second {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
}
.address-city {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
}
.edit-button {
  margin: auto 24px 24px 310px;
}
.address-content {
  padding: 12px 16px 16px 16px;
}
</style>