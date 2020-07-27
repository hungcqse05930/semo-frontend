<template>
    <div class="bid-container">
      <div class="bid-content">
        <img class="user-picture" src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" />
        <div class="user-information">
          <p class="bid-name">{{ bid.title }}</p>
          <div class="money-time">
        <p class="bid-number">{{bid.time}}</p>
        <p class="bid-money">{{bid.money}}</p>
        </div>
        <div class="bid-info">
          <p>{{accuracy.name}}</p>
          <p>{{accuracy.amount}} | {{accuracy.city}}</p>
          <p class="bid-condition">{{accuracy.viewer}}</p>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "userbidinfo",
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