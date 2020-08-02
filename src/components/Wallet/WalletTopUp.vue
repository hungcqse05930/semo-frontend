<template>
  <div class="modal-card">
    <div class="modal-card-head">
      <p>➕ Nạp tiền vào ví</p>
    </div>
    <section class="modal-card-body">
      <p class="title-post">Hãy chọn hình thức nạp tiền phù hợp với bạn</p>
      <div class="buttons">
        <b-button
          class="momo-btn columns"
          type="is-primary"
          expanded
          @click="updateMomo"
        >
          <p class="momo-title">
            <img class="momo-image" src="../../assets/logo-momo.png"/>
            Nạp tiền qua MoMo
          </p>
        </b-button>
        <b-modal>
            <WalletMoMo />
        </b-modal>
        <b-button type="is-primary" expanded>💳 Nạp tiền qua thẻ ngân hàng</b-button>
      </div>
    </section>
  </div>
</template>
<script>
import WalletMoMo from "./WalletMoMo.vue";
export default {
  name: "wallettopup",
  components: {},
  methods: {
          updateMomo() {
      this.$buefy.modal.open({
        parent: this,
        component: WalletMoMo,
        hasModalCard: true,
        trapFocus: true
      });
    }
  }
};
</script>
<style scoped>
.modal-card-head p {
  font-family: Roboto;
  font-size: 20px;
  color: #07d390;
}
.buttons {
  justify-content: center;
}
.momo-image {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.momo-title{
    display: flex; 
    align-items: center;
}
.title-post {
  font-family: Roboto;
  font-size: 17px;
  color: #707070;
  text-align: center;
  margin-bottom: 31px;
  margin-top: 22px;
}
</style>