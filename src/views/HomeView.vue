
<template>
<div>
  <el-container>
  <el-header class="Header">
  
<div class="line"></div>
<el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#3183f2"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">用户</el-menu-item>
  <el-menu-item index="2">教学</el-menu-item>
  <el-menu-item index="3">题库</el-menu-item>
  <el-menu-item index="4">运营</el-menu-item>
  <el-menu-item index="5">营销</el-menu-item>
  <el-menu-item index="6">商品</el-menu-item>
  <el-menu-item index="7">财务</el-menu-item>
  <el-menu-item index="8">统计</el-menu-item>
  <el-menu-item index="9">系统</el-menu-item>

</el-menu>
  </el-header>
  <el-container>
    <el-aside width="200px" class="left">
       <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      >
      <el-menu-item index="/xueyuan">
        <span slot="title">学员管理</span>
      </el-menu-item>
      <el-menu-item index="jiang">
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="/zhu">
        <span slot="title">助教管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>

    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  },
  //过滤器
  filters: { },
  created () { },
  //计算属性
  computed : { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.Header{
  background-color: #3183f2;
}
.left{
  width: 200px;
}
</style>
