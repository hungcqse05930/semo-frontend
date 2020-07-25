<template>
<section>
  <div class="modal-card">
<b-button
            class="btn"
            type="is-success"
            @click="isComponentModalActive1 = true"
            rounded
          >Trả giá ngay</b-button>
          
              <template>
      <section>
        <div class="bmodal">
          <b-modal
            :active.sync="isComponentModalActive1"
            has-modal-card
            :destroy-on-hide="true"
            aria-role="dialog"
            aria-modal
          >
            
          </b-modal>
        </div>
      </section>
    </template>
  </div>
</section>
</template>
<script>

export default {
  data(){
    return{
      isComponentModalActive1: false,
    }
  },
  name: "mediationdashboardeditproduct",
  components: {

  }
  
}
</script>
<style scoped>
.modal-card{
  width: 600px;
  height: 448px;
  background-color:red;
}
</style>