<template>
  <div id="app" class="container">
    <div class="wrap">
      <ContenLeftPicture />
      <div class="contentright">
        <div class="block">
          <p>Hoàn thành thông tin</p>
        </div>
        <section class="inputtext">
          <p>Hãy cho chúng tôi biết về bạn nhé.</p>
          <br />
          <p>Họ và tên bạn</p>
          <b-field>
            <b-input placeholder="Họ và tên"></b-input>
          </b-field>
          <section class="input-information">
            <div class="age">
              <p>Ngày sinh</p>
              <b-field class="date-of-birth">
                <b-datepicker v-model="date" :first-day-of-week="1"></b-datepicker>
              </b-field>
            </div>
            <div class="sex-checkbox">
              <p>Giới tính</p>
              <div class="checkbox">
                <b-checkbox>Nam</b-checkbox>
                <b-checkbox>Nữ</b-checkbox>
              </div>
            </div>
          </section>
          <section class="address-user">
          <p>Địa chỉ</p>
          <b-field>
            <b-input placeholder="Tỉnh/Thành Phố"></b-input>
          </b-field>
          <b-field>
            <b-input placeholder="Quận/Huyện"></b-input>
          </b-field>
          <b-field>
            <b-input placeholder="Phường/Xã"></b-input>
          </b-field>
          <b-field>
            <b-input placeholder="Số nhà, tên đường/phố, làng/ấp"></b-input>
          </b-field>
        </section>
        <ConfirmButton />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import ContenLeftPicture from "../components/Auth/ContentLeftPicture.vue";
import ConfirmButton from "../components/Auth/ConfirmButton";
export default {
  name: "registerinformation",
  components: {
    ConfirmButton,
    ContenLeftPicture
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
.inputtext p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 10px;
}
.inputtext {
  width: 626px;
  height: 524px;
}
.block {
  font-family: Merriweather;
  font-size: 32px;
  color: #b88cd8;
  opacity: 1;
}
.block p {
  width: 351px;
  height: 43px;
  border-bottom: #01d28e solid 3px;
}
.passworddetail {
  padding-left: 5px;
}
.input-information {
  width: 300px;
  height: 44px;
  display: flex;
}
.date-of-birth {
  width: 300px;
}
.checkbox {
  display: flex;
  padding-right: 30px;
}
.sex-checkbox {
  font-family: Roboto;
  font-size: 18px;
  margin-left: 24px;
}
.address-user{
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 10px;
}
.address-user p{
  padding-top: 39px;
}
</style>