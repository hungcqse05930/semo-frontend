<template>
  <div id="app" class="container">
    <div class="wrap">
      <div class="content-right">
        <StepTitle />
        <div class="first-content">
          <p>Thông tin chung về sản phẩm</p>
        </div>
        <section ction class="input-text">
          <p>Đây là quả gì ?*</p>
          <b-field class="input-field">
            <b-input placeholder="Ví dụ: Táo Tàu"></b-input>
          </b-field>
          <p>Khối lượng của sản phẩm là bao nhiêu?*</p>
          <div class="input-amount">
          <b-field class="input-field">
            <b-input placeholder="Ví dụ: 5.42"></b-input>
          </b-field>
          <b-field>
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
          </b-field>
          </div>
          <p>Địa điểm thu hoạch sản phẩm này ở đâu?*</p>
          <b-field class="input-field">
            <b-select placeholder="Select a subject">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
          </b-field>
          <ConfirmButton />
        </section>
        <NextButton />
      </div>
    </div>
  </div>
</template>
<script>
import NextButton from "../components/CreateProduct/NextButton.vue";
import StepTitle from "../components/CreateProduct/StepTitle.vue";
export default {
  name: "nameproduct",
  components: {
    NextButton,
    StepTitle
  }
};
</script>
<style scoped>
.wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1366px;
  display: flex;
}
.content-right {
  padding-left: 60px;
}
.input-text p {
  font-family: Roboto;
  font-size: 18px;
  margin-bottom: 14px;
  margin-top: 45px;
}
.input-text {
  width: 626px;
}
.input-field {
  width: 483px;
}
.first-content p {
  font-family: Merriweather;
  font-size: 28px;
  color: #01d28e;
  opacity: 1;
}
.input-amount {
  display: flex;
}
/* .input-combobox{
  margin-left: 20px;
} */
</style>