<template>
          <div class="p3">
          <p class="ptext3">{{production.id}}</p>
          <p class="ptext">{{production.username}}</p>
          <p class="ptext">{{production.paid}}</p>
          <p class="ptext">{{production.time}}</p>          
        </div>
</template>

<script>
export default {
  name: "p3",
  props: {
    product: Object
  }
};
</script>

<style scoped>
.p3{
  display: inline-flex;
  justify-content: space-between;
  width: 586px;
  height: 18px;
  margin-bottom: 16px;
  /* background-color: blue; */
}
  .ptext3{
  margin-right: -20px;
    font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
 
}
.ptext{
  font-family: "Roboto";
  font-weight: 500;
  font-size: 15px;
  color: #707070;
}
.p3s {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(412px, auto);
  margin-left: 24px;
  margin-top: 24px;
}
</style>