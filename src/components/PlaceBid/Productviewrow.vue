<template>
  <section>
    <div class="modal-card">
      <template>
        <section>
          <div class="bmodal">
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
            >
              <productviewrow2 />
            </b-modal>
          </div>

          <b-tabs class="btngroup" size="is-small">
            <b-tab-item class="btn_group" label="📰 BƯỚC 1">
              <img id="logo" src="../../assets/1.png" />
            </b-tab-item>
            <b-tab-item class="btn_group" label="📰 BƯỚC 2">
              <img id="logo" src="../../assets/2.png" />
            </b-tab-item>
            <b-tab-item class="btn_group" label="📰 BƯỚC 3">
              <img id="logo" src="../../assets/3.png" />
            </b-tab-item>
            <b-tab-item class="btn_group" label="📰 BƯỚC 4">
              <img id="logo" src="../../assets/4.png" />
            </b-tab-item>
            <b-tab-item class="btn_group" label="📰 BƯỚC 5">
              <div>
                <img id="logo" src="../../assets/5.png" />
                <b-button
                  class="btn"
                  type="is-success"
                  @click="isComponentModalActive = true"
                  rounded
                >Trả giá ngay</b-button>
              </div>
            </b-tab-item>
          </b-tabs>

        </section>
      </template>
    </div>
  </section>
</template>
<script>
import Productviewrow2 from "../../components/PlaceBid/Productviewrow2.vue";
export default {
  data() {
    return {
      isComponentModalActive: false,
    };
  },
  name: "mediationdashboardeditproduct",
  components: {
    Productviewrow2,
  },
};
</script>
<style scoped>
.modal-card {
  width: 600px;
  height: 490px;
  background-color: lightblue;
  border-radius: 20px;
}
.btn {
  margin-top: -80px;
  width: 250px;
  height: 45px;
  margin-left: 160px;
  /* margin-right: auto; */
}
#logo {
  border-radius: 15px;
}
</style>