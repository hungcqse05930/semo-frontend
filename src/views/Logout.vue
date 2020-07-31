<template></template>

<script>
export default {
  created() {
    this.$store.dispatch("LOGOUT").then(() => {
      this.$router.push({ name: "Home" });
    });
  },
};
</script>

<style>
</style>