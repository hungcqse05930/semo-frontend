<template>
  <div class="category">
    <section>
      <b-tabs class="btngroup" size="is-medium">
        <b-tab-item class="btn_group" label="🍎 Sản phẩm">
          <SanPhamSearch />
        </b-tab-item>
        <b-tab-item class="btn_group" label="📘 Bộ sưu tập"><Collection/></b-tab-item>
        <b-tab-item class="btn_group" label="👦 Người dùng">
          
          <UserFilter />
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import SanPhamSearch from "../../components/Search/SanPhamSearch.vue";
import UserFilter from "../../components/Search/UserFilter.vue";
import Collection from "../../components/Search/Collection.vue"

export default {
  name: "CategoryBar",
  components: {
    SanPhamSearch,
    UserFilter,
    Collection,
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.category {
  margin-top: 16px;
  margin-left: 60px;
  width: 1366px;
  height: 52px;
  /* position: sticky; */
  /* z-index: 1; */
  /* background: rgba(255,255,255,0.8); */
  /* background: white; */
  backdrop-filter: saturate(180%) blur(24px);
}
/**/

/* div .btngroup{
        margin-left: 0px;
        margin-top: 20px;
    } */
.btn_group {
  /* top: 15px; */
  margin-left: 30px;
  /* width: 400px;  */
  display: inline-block;
  /* padding: 5px 25px; */

  /* font-weight: bold; */
  /* color: 0 4px #999; */
  /* cursor: pointer;
  text-align: center; */
  /* text-decoration: none; */
  outline: none;
  color: green;
  /* background-color: #4CAF50; */
  border: none;
  border-radius: 15px;
  /* box-shadow: 0 4px #999; */
}
#label {
  font-weight: 700;
  font-size: 19px;
  color: #707070;
  font-family: Merriweather;
}
</style>