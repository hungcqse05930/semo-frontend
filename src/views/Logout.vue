<template>
  
</template>

<script>
export default {
    created() {
        this.$store.dispatch('DESTROY_TOKEN')
        this.$router.push({ name: 'Home' })
    }
}
</script>

<style>

</style>