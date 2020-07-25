<template>
<section>
  <div class="modal-card">

              <b-button
            class="btn"
            type="is-success"
            @click="isComponentModalActive = true"
            rounded
          >Trả giá ngay</b-button>
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
        <b-tab-item class="btn_group" label="🍎 Sản phẩm">
          <productviewrow2 />
        </b-tab-item>
        <b-tab-item class="btn_group" label="📘 Bộ sưu tập">
           <productviewrow2 />
        </b-tab-item>
        <b-tab-item class="btn_group" label="👦 Người dùng">
           <productviewrow2 />
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
  data(){
    return{
      isComponentModalActive: false,
    }
  },
  name: "mediationdashboardeditproduct",
  components: {
Productviewrow2
  }
  
}
</script>
<style scoped>
.modal-card{
  width: 600px;
  height: 448px;
  background-color: blue;
}
</style>