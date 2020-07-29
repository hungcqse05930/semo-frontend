<template>
  <div class="address-container">
    <div class="address-content">
      <div class="name-tag">
        <p class="address-name">{{ address.name }}</p>
        <b-tag class="default-tag" type="is-primary">Mặc định</b-tag>
      </div>
      <p class="address-phonenumber">{{address.phonenumber}}</p>
      <div class="address-info">
        <p>{{address.title}}</p>
        <p>{{address.first}}</p>
        <p>{{address.second}}</p>
        <p>{{address.city}}</p>
      </div>
      <div class="edit-delete">
        <b-button class="edit-button" @click="changeAlert" type="is-primary">🖊️ Chỉnh sửa</b-button>
        <b-modal>
          <UserInformationAddressChange />
        </b-modal>
        <b-button class="delete-button" type="is-danger">🗑️ Xóa</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import UserInformationEditAddress from "./UserInformationEditAddress.vue";
export default {
  name: "userinformationaddressinfor",
  props: {
    address: Object
  },
  methods: {
  changeAlert() {
    this.$buefy.modal.open({
      parent: this,
      component: UserInformationEditAddress,
      hasModalCard: true,
      trapFocus: true
    });
  }
  }
};
</script>
<style scoped>
.address-container {
  width: 505px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  padding: 24px;
}

.address-name {
  font-family: Merriweather;
  font-size: 19px;
  color: #000000;
  opacity: 1;
  margin-right: 16px;
  font-weight: 700;
  margin-bottom: 18px;
}
.address-phonenumber {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
  margin-bottom: 18px;
}
.address-info p {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  opacity: 1;
}
.edit-button {
  margin-right: 12px;
}
.edit-delete {
  display: flex;
  flex-flow: row;
  float: right;
}
.name-tag {
  display: flex;
  flex-flow: row;
  justify-content: left;
}
</style>