
<template>
  <div>
    <el-container>
      <el-header class="Header">
        <div class="line"></div>
        <top></top>
      </el-header>
      <el-container>
        <left></left>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from "../components/top.vue";
import left from "../components/left.vue";
export default {
  name: "",
  components: {
    top,
    left,
  },
  data() {
    return {};
  },
  //过滤器
  filters: {},
  created() {},
  //计算属性
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.Header {
  background-color: #3183f2;
}
.left {
  width: 200px;
}
</style>
