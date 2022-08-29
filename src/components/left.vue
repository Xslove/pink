
<template>
  <div>
    <el-aside width="200px" class="left">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item :index="item.path" v-for="item,index in arr" :key="index">
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <!-- <el-menu-item index="jiang">
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="/zhu">
        <span slot="title">助教管理</span>
      </el-menu-item> -->
        </el-menu>
      </el-col>
    </el-aside>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "",
  components: {},
  data() {
    return {
      arr: [],
    };
  },
  //过滤器
  filters: {},
  created() {
    axios.get('/xsyyds').then(res=>{
      console.log(res);
      this.arr=res.data.list
    })
  },
  //计算属性
  computed: {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
</style>
