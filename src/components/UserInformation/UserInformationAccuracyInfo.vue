<template>
    <div class="accuracy-container">
      <div class="accuracy-content">
        <img class="user-picture" src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" />
        <div class="user-information">
          <p class="accuracy-name">{{ accuracy.title }}</p>
        <p class="accuracy-number">{{accuracy.number}}</p>
        <div class="accuracy-info">
          <p>{{accuracy.name}}</p>
          <p>{{accuracy.date}} | {{accuracy.city}}</p>
          <p class="accuracy-condition">{{accuracy.condition}}</p>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "userinformationaccuracyinfo",
  props: {
    accuracy: Object
  }
};
</script>
<style scoped>
.accuracy-container {
  width: 505px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  padding: 24px;
}
.accuracy-content{
  display: flex;
  flex-flow: row;
}
.accuracy-name{
  font-family: Roboto;
  font-size: 15px;
  color: #01D28E;
  opacity: 1;
  margin-bottom: 18px;
    text-align: center;
}
.accuracy-number{
  font-family: Roboto;
  font-size: 23px;
  color: #000000;
  opacity: 1;
  margin-bottom: 18px;
    text-align: center;
}
.accuracy-info{
  font-family: Roboto;
  font-size: 11px;
  color: #707070;
  opacity: 1;
}
.user-picture{
  width: 140px;
  height: 140px;
  border-radius: 5%;
}
.user-information {
  margin-left: 68px;
}
</style>