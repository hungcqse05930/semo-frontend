<template>
  <div class="accuracy-container">
    <div class="accuracy-content">
      <p class="textnumber">{{accuracy.textnumber}}</p>
      <img class="user-picture" src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" />
      <div class="user-information">
        <p class="accuracy-name">{{ accuracy.title }}</p>
        <p class="accuracy-number">{{accuracy.number}}</p>
        <div class="accuracy-info">
          <b-field>
            <b-input placeholder="Nếu không hợp lý, hãy ghi chú cho người bán biết" expanded></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "userinformationaccuracyinfo",
  props: {
    accuracy: Object,
  },
};
</script>
<style scoped>
.accuracy-container {
  width: 600px;
  height: 104px;
  border: 1px solid #00000015;
  box-shadow: 0 2px 6px #00000014;
  border-radius: 10px;
  transition: 0.25s;
  /* padding: 24px; */
}
.accuracy-content {
  display: flex;
  /* flex-flow: row; */
}
.accuracy-number {
  font-family: "Roboto";
  font-weight: 400;
  font-size: 13px;
  color: #686868;
  opacity: 1;
  /* margin-bottom: 18px; */
  margin-left: -45px;
  /* text-align: center; */
}
.accuracy-info {
    width: 410px;
  font-family: Roboto;
  font-size: 11px;
  color: #707070;
  opacity: 1;
  margin-top: 7px;
  margin-left: -45px;
}
.user-picture {
  width: 80px;
  height: 80px;
  border-radius: 5%;
  margin-left: 24px;
  margin-top: 10px;
}
.user-information {
  margin-left: 68px;
}
.accuracy-name {
  margin-top: 10px;
  margin-left: -45px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 11px;
  color: #686868;
}
.textnumber {
  margin-top: 35px;
  margin-left: 24px;
}
</style>