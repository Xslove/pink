<template>
  <div class="top">
    <div class="left">
      <p v-for="(item, index) in list" :key="index">
        <i @click="to(item)">{{
          item == "/book"
            ? "图书管理"
            : item == "/back"
            ? "后台管理"
            : item == "/country"
            ? "国际化"
            : item == "/table"
            ? "基础表格"
            : "tab选项卡"
        }}</i>
        <span @click="del(index)">x</span>
      </p>
    </div>
    <div class="right">
      <el-select v-model="value" placeholder="标签选项" @change="seldel">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "关闭其他",
          label: "关闭其他",
        },
        {
          value: "关闭所有",
          label: "关闭所有",
        },
      ],
      value: "",
    };
  },
  methods: {
    to(i) {
      if(this.$route.path == i){
        return
      }
      this.$router.push(`${i}`);
      this.$store.commit("tab/lu", i);
    },
    del(i) {
      this.$store.commit("tab/del", i);
    },
    seldel() {
      this.$store.commit("tab/val", this.value);
    },
  },
  computed: {
    ...mapState("tab", ["list"]),
  },
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    p {
      padding: 5px;
      margin-right: 5px;
      border-radius: 5px;
      background: blue;
      i {
        text-decoration: underline;
      }
      span {
        color: #fff;
      }
    }
  }
}
</style>