<template>
  <div class="home">
    <!-- 布局容器 -->
    <el-container>
      <el-header>
        <!-- 头部 -->
       <myheader :isCollapse="isCollapse" @open="open"></myheader>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="isCollapse ? '68px':'200px'">
          <!-- 封装的侧边栏 -->
          <mylist :isCollapse="isCollapse" @to="to"></mylist>
        </el-aside>
        <el-main>
          <top></top>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myheader from "@/components/myheader.vue";
import mylist from "@/components/mylist.vue";
import top from "@/components/top.vue";
export default {
  components:{
    myheader,
    mylist,
    top
  },
  data() {
    return {
      isCollapse:false,
      list:[]
    }
  },
  methods: {
    open(val){
      console.log(val);
      this.isCollapse=val
    },
    to(obj){
      // this.list.unshift(obj)
      this.$store.commit('tab/add',obj)
      // console.log(this.list);
    }
  },
};
</script>
<style lang="scss" scoped>
.el-header{
  background-color: #242e44;
  color: #fff;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #d3dce6;
  // color: #333;
  text-align: center;
  height: 100vh;
  border-right: 1px solid #ccc;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  height: 100vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>