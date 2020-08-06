<template>
  <div class="login-container">
    <div class="background">
      <div class="container">
        <div id="bound" class="columns">
          <div id="form" class="column">
            <!-- selection tab -->
            <div class="columns nav-tabs is-mobile">
              <div class="column is-centered router-link is-narrow">
                <router-link to="/register/info">Hoàn thành thông tin</router-link>
              </div>
            </div>
            <!-- form -->
            <!-- sign up form -->
            <section>
              <!-- input number -->
              <p class="label-info">Hãy cho chúng tôi biết về bạn nhé.</p>
              <!-- sign up form -->
              <form @submit.prevent="updateInfo()">
                <!-- name -->
                <b-field label="Họ và tên của bạn">
                  <b-input
                    v-model="name"
                    placeholder="🧑 Họ và tên"
                    required
                    validation-message="Đừng bỏ trống tên bạn chứ!"
                    expanded
                  ></b-input>
                </b-field>
                <!-- dob and gender -->
                <div class="columns is-variable is-3 is-vcentered">
                  <!-- dob -->
                  <div class="column">
                    <b-field label="Ngày sinh">
                      <b-datepicker v-model="dob" placeholder="📅 Ngày sinh" trap-focus></b-datepicker>
                    </b-field>
                  </div>
                  <div class="column">
                    <!-- gender -->
                    <b-field label="Giới tính" required>
                      <div class="columns is-mobile">
                        <div class="column">
                          <b-radio v-model="gender" native-value="1" type="is-success">Nam</b-radio>
                        </div>
                        <div class="column">
                          <b-radio v-model="gender" native-value="0" type="is-success">Nữ</b-radio>
                        </div>
                      </div>
                    </b-field>
                  </div>
                </div>
                <!-- address -->
                <b-field label="Địa chỉ">
                  <!-- province -->
                  <b-autocomplete
                    placeholder="Tỉnh/Thành phố"
                    :loading="isFetchingP"
                    :data="dataP"
                    field="title"
                    clearable
                    expanded
                    required
                    validation-message="Đừng bỏ trống chứ!"
                    @typing="loadProvince"
                    @select="option => province = option"
                  >
                    <template slot-scope="props">
                      <div class="media-content">{{ props.option.title }}</div>
                    </template>
                    <template slot="empty">Không tìm thấy tỉnh/thành phố nào</template>
                  </b-autocomplete>
                </b-field>
                <!-- district -->
                <b-field>
                  <b-autocomplete
                    placeholder="Quận/Huyện"
                    :loading="isFetchingD"
                    :data="dataD"
                    field="title"
                    clearable
                    expanded
                    required
                    validation-message="Đừng bỏ trống chứ!"
                    @typing="loadDistrict"
                    @select="option => district = option"
                  >
                    <template slot-scope="props">
                      <div class="media-content">{{ props.option.title }}</div>
                    </template>
                    <template slot="empty">Không tìm thấy quận/huyện nào</template>
                  </b-autocomplete>
                </b-field>
                <!-- ward -->
                <b-field>
                  <b-autocomplete
                    placeholder="Phường/Xã"
                    :loading="isFetchingW"
                    :data="dataW"
                    field="title"
                    clearable
                    expanded
                    required
                    validation-message="Đừng bỏ trống chứ!"
                    @typing="loadWard"
                    @select="option => ward = option"
                  >
                    <template slot-scope="props">
                      <div class="media-content">{{ props.option.title }}</div>
                    </template>
                    <template slot="empty">Không tìm thấy phường/xã nào</template>
                  </b-autocomplete>
                </b-field>
                <!-- address info -->
                <b-field>
                  <b-input
                    v-model="address"
                    placeholder="Số nhà, tên đường/phố, làng/ấp"
                    required
                    validation-message="Đừng bỏ trống số nhà bạn chứ!"
                    expanded
                  ></b-input>
                </b-field>
                <!-- submit -->
                <b-notification
                  type="is-danger"
                  has-icon
                  aria-close-label="Đóng"
                  role="alert"
                  :active.sync="error"
                  class="error-notification"
                >{{error_msg}}</b-notification>
                <b-button
                  rounded
                  type="is-primary"
                  style="font-size: 18px; font-weight: 700;"
                  outlined
                  expanded
                  native-type="submit"
                  :disabled="isDisabled"
                  :loading="isLoading"
                >👌 Xác nhận</b-button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "debounce";

export default {
  name: "RegisterInfo",
  data() {
    return {
      // fetching for inputs
      isFetchingP: false,
      isFetchingD: false,
      isFetchingW: false,
      // info
      name: "",
      gender: "",
      dob: new Date(),
      // address
      dataP: [],
      dataD: [],
      dataW: [],
      // for v-model
      province: "",
      district: "",
      ward: "",
      address: "",
      // for button
      isLoading: false,
      error: false,
      error_msg: ''
      // isDisabled: true,
    };
  },
  computed: {
    isDisabled: function () {
      if (
        this.name.length === 0 ||
        this.gender.length === 0 ||
        this.province.length === 0 ||
        this.district.length === 0 ||
        this.ward.length === 0 ||
        this.address.length === 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    //  load provinces
    loadProvince: debounce(function (province) {
      if (!province.length) {
        this.dataP = [];
        return;
      }

      this.isFetchingP = true;
      axios
        .get("/address/province")
        .then(({ data }) => {
          this.dataP = data.LtsItem.map((item) => ({
            id: item.ID,
            title: item.Title,
          })).filter((option) => {
            return (
              option.title
                .toString()
                .toLowerCase()
                .indexOf(province.toLowerCase()) >= 0
            );
          });
        })
        .catch((error) => {
          this.dataP = [];
          throw error;
        })
        .finally(() => {
          this.isFetchingP = false;
        }, 250);
    }),
    // load districts
    loadDistrict: debounce(function (district) {
      if (!district.length) {
        this.dataD = [];
        return;
      }

      this.isFetchingD = true;
      axios
        .get(`/address/province/${this.province.id}/district`)
        .then(({ data }) => {
          this.dataD = data
            .map((item) => ({
              id: item.ID,
              title: item.Title,
            }))
            .filter((option) => {
              return (
                option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(district.toLowerCase()) >= 0
              );
            });
        })
        .catch((error) => {
          this.dataD = [];
          throw error;
        })
        .finally(() => {
          this.isFetchingD = false;
        });
    }, 250),
    // load ward
    loadWard: debounce(function (ward) {
      if (!ward.length) {
        this.dataW = [];
        return;
      }

      this.isFetchingW = true;
      axios
        .get(`/address/district/${this.district.id}/ward`)
        .then(({ data }) => {
          this.dataW = data
            .map((item) => ({
              id: item.ID,
              title: item.Title,
            }))
            .filter((option) => {
              return (
                option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(ward.toLowerCase()) >= 0
              );
            });
        })
        .catch((error) => {
          this.dataW = [];
          throw error;
        })
        .finally(() => {
          this.isFetchingW = false;
        });
    }, 250),
    // submit
    updateInfo() {
      let vm = this;
      this.isLoading = true;
      this.isDisabled = true;

      this.$store
        .dispatch("SIGN_UP_INFO", {
          name: vm.name,
          dob: vm.dob,
          gender: vm.gender,
        })
        .then(() => {
          axios
            .post("/address", {
              user_id: vm.$store.state.user.id,
              province: vm.province.title,
              district: vm.district.title,
              ward: vm.ward.title,
              address: vm.address,
            })
            .then(() => {
              vm.$router.push({ path: "/register/identity" });
            })
            .catch((error) => {
              vm.error = true
              vm.error_msg = error.message
              vm.isLoading = false;
              vm.isDisabled = false;
            });
        })
        .catch((error) => {
          vm.error = true
          vm.error_msg = error.message
          vm.isLoading = false;
          vm.isDisabled = false;
        });
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

.login-input {
  margin-bottom: 16px;
}

.label-info {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>