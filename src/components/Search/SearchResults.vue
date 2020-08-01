<template>
  <div class="container">
    <div class="columns is-1 is-mobile">
      <div
        class="filter column is-mobile is-one-quarter-mobile is-one-quarter-tablet is-one-fifth-desktop is-2-widescreen is-2-fullhd"
      >
        <p class="sub-list-title">🔍 Bộ lọc kết quả</p>
        <!-- time remaining -->
        <div class="filter-item" v-if="isTimeRemain">
          <p class="filter-title">⏲ Thời gian còn lại</p>
          <b-radio v-model="time" type="is-primary" native-value="asc">Tăng dần</b-radio>
          <br />
          <b-radio v-model="time" type="is-primary" native-value="des">Giảm dần</b-radio>
          <hr />
        </div>
        <!-- views -->
        <div class="filter-item" v-if="isViews">
          <p class="filter-title">👁️ Lượt xem</p>
          <b-radio v-model="views" type="is-primary" native-value="asc">Tăng dần</b-radio>
          <br />
          <b-radio v-model="views" type="is-primary" native-value="des">Giảm dần</b-radio>
          <hr />
        </div>
        <!-- weight -->
        <div class="filter-item" v-if="isWeight">
          <p class="filter-title">📦 Sản lượng</p>
          <b-radio v-model="weight" type="is-primary" native-value="asc">Tăng dần</b-radio>
          <b-radio v-model="weight" type="is-primary" native-value="des">Giảm dần</b-radio>
          <hr />
        </div>
        <!-- weight range -->
        <div class="filter-item" v-if="isWeightRange">
          <p class="filter-title">📦 Khoảng sản lượng</p>
          <b-field horizontal label="Từ">
            <b-input
              name="weight-range-from"
              type="number"
              min="100000"
              max="1000000000000"
              validation-message="Số nhập vào phải lớn hơn 0 và bé hơn 1 nghìn tỉ"
              v-model="weightFrom"
              expanded
            ></b-input>
          </b-field>
          <b-field horizontal label="Đến">
            <b-input
              name="weight-range-to"
              type="number"
              min="100000"
              max="1000000000000"
              validation-message="Số nhập vào phải lớn hơn 0 và bé hơn 1 nghìn tỉ"
              v-model="weightTo"
              expanded
            ></b-input>
          </b-field>
          <p class="error" v-if="weightRangeError">{{weightRangeError}}</p>
          <b-button type="is-primary" outlined rounded expanded>Xác nhận</b-button>
          <hr />
        </div>
        <!-- place -->
        <div class="filter-item" v-if="isPlace">
          <p class="filter-title">🏞️ Nơi trồng</p>
          <b-select placeholder="Chọn tỉnh/thành" expanded v-model="place"></b-select>
          <br />
          <b-button type="is-text" rounded expanded>Thiết đặt lại</b-button>
          <hr />
        </div>
        <!-- ratings -->
        <div class="filter-item" v-if="isRatings">
          <p class="filter-title">★ Đánh giá</p>
          <b-radio v-model="ratings" type="is-primary" native-value="asc">Tăng dần</b-radio>
          <br />
          <b-radio v-model="ratings" type="is-primary" native-value="des">Giảm dần</b-radio>
          <hr />
        </div>
        <!-- address -->
        <div class="filter-item" v-if="isAddress">
          <p class="filter-title">🏙️ Địa chỉ</p>
          <b-select placeholder="Chọn tỉnh/thành" expanded v-model="address"></b-select>
          <br />
          <b-button type="is-text" rounded expanded>Thiết đặt lại</b-button>
          <hr />
        </div>
        <!-- delete -->
        <b-button type="is-danger" outlined rounded expanded>Xóa bộ lọc</b-button>
      </div>
      <div class="result column is-mobile">
        <slot name="result-frame"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    keyword: String,
    // isTimeRemain: Boolean,
    // isViews: Boolean,
    // isWeight: Boolean,
    // isWeightRange: Boolean,
    // isPlace: Boolean,
    // isRatings: Boolean,
    // isAddress: Boolean
  },
  data() {
    return {
      // filter options
      isTimeRemain: true,
      isViews: true,
      isWeight: true,
      isWeightRange: true,
      weightRangeError: false,
      isPlace: true,
      isRatings: true,
      isAddress: true,
      // filter value
      time: "",
      views: "",
      weight: "",
      weightFrom: 0,
      weightTo: 0,
      place: [],
      ratings: "",
      address: [],
      // pagination
      total: 200,
      current: 1,
    };
  },
};
</script>

<style>
</style>