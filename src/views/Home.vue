<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- Nút này để mở modal 1, @click là event mở modal 1 -->
    <b-button @click="open_instruction">Show modal 1</b-button>

    <!-- Modal 1 -->
    <b-modal :active.sync="modal1" :width="640" scroll="keep">
      <div class="modal-card-body">
        <!-- Nút này để đóng modal 1 và mở modal 2, @click là event đóng modal 1 và mở modal 2 -->
        <b-button @click="close_instruction">Show modal 2</b-button>
      </div>
    </b-modal>

    <!-- Modal 2 -->
    <b-modal :active.sync="modal2" :width="640" scroll="keep">
      <div class="modal-card-body">
        <h2>Modal 2</h2>
        <p>Helloooooooooo</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      modal1: false,
      modal2: false,
    };
  },
  methods: {
    // Đóng modal 1 và mở modal 2
    close_instruction() {
      this.modal1 = false;
      this.modal2 = true;
    },
    // Mở modal 1
    open_instruction() {
      this.modal1 = true;
    },
  },
};
</script>
