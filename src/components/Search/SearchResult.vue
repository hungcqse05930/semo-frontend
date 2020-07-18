<template>
  <div class="sort">
    <div>
      <p class="sort_boloc">{{sort.bolocketqua}}</p>
      <SearchResultTime />
      <SearchResultView />
      <SearchResultSanLuong />
      <SearchResultKhoangSanLuong />
      <SearchResultNoiTrong />
    </div>
  </div>
</template>


<script>
import SearchResultTime from "../../components/Search/SearchResultTime.vue";
import SearchResultView from "../../components/Search/SearchResultView.vue";
import SearchResultSanLuong from "../../components/Search/SearchResultSanLuong.vue";
import SearchResultKhoangSanLuong from "../../components/Search/SearchResultKhoangSanLuong.vue";
import SearchResultNoiTrong from "../../components/Search/SearchResultNoiTrong.vue";
export default {
  name: "sort",
  components: {
    SearchResultTime,
    SearchResultView,
    SearchResultSanLuong,
    SearchResultKhoangSanLuong,
    SearchResultNoiTrong
  },
  data() {
    return {
      sort: {
        bolocketqua: "🔍 Bộ lọc kết quả"
      }
    };
  }
};
</script>

<style scoped >
.sort {
  margin-top: 34px;
  margin-left: -120px;
  width: 176px;
  height: 934px;
  /* top: 0; */
  position: sticky;
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  /* background:darkkhaki; */
  backdrop-filter: saturate(180%) blur(24px);
}
.sort_boloc {
  font-family: "Merriweather";
  font-weight: 600;
  font-size: 19px;
  color: #707070;
  /* line-height: 24px; */
}
</style>