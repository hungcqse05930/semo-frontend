<template>
  <div class="pagebar">
    <p class="index">{{pagebar.hienthisanpham}}</p>
    <div class="phantrang">
      <p class="back">{{pagebar.trangtruoc}}</p>
      <p class="next">{{pagebar.trangsau}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagebar",
  data() {
    return {
      pagebar: {
        hienthisanpham: "📰 Hiển thị 1-18 trên 25,198 sản phẩm",
        trangtruoc: "👈 Trang trước",
        trangsau: "Trang sau 👉"
        // media: "./assets/logo.png"
      }
    };
  }
};
</script>
<style >
.pagebar {
  /* margin-top:34px; */
  left: 272px;
  width: 1034px;
  height: 22px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  /* background:darkkhaki; */
  backdrop-filter: saturate(180%) blur(24px);
  display: flex;
  justify-content: space-between;
}
.index {
  font-family: "Roboto";
  font-weight: 500;
  font-size: 17px;
  color: #707070;
  /* line-height: 24px; */
}
.phantrang {
  /* padding-right: 16px; */
  margin-right: 0px;
  display: flex;
  justify-content: space-between;
}
.next {
  flex: end;
}
</style>