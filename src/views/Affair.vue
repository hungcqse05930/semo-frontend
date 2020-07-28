<template>
<div>
    <Header/>
    <AffairMain/>
</div>
    
</template>

<script>
import Header from "../components/Affair/Header.vue";
import AffairMain from "../components/Affair/AffairMain.vue";


export default {
  name: "sort",
  components: {
Header,
AffairMain,
  },
  data() {}
};
</script>