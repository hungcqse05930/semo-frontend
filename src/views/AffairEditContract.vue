<template>
<div>
    <Header/>
    <EditContract/>
</div>
    
</template>

<script>
import Header from "../components/Affair/Header.vue";
import EditContract from "../components/Affair/EditContract.vue";


export default {
  name: "sort",
  components: {
Header,
EditContract,
  },
  data() {}
};
</script>