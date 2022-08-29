<template>
  <div class="mylist">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      active-text-color="#666"
      router 
      :collapse="isCollapse"
    >
      <el-menu-item v-for="(item, index) in arr" :key="index" @click="to(item.path,item.title)">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  props:['isCollapse'],
  data() {
    return {
      arr: [
        {
          icon: "el-icon-c-scale-to-original",
          title: "图书管理",
          path: "/book",
        },
        {
          icon: "el-icon-edit-outline",
          title: "后台管理",
          path: "/back",
        },
        {
          icon: "el-icon-s-flag",
          title: "国际化",
          path: "/country",
        },
        {
          icon: "el-icon-c-scale-to-original",
          title: "基础表格",
          path: "/table",
        },
        {
          icon: "el-icon-s-promotion",
          title: "tab选项卡",
          path: "/tab",
        },
      ],
    };
  },
  methods: {
    to(i,val){
      this.$router.push(`${i}`)
      let obj={
        i,
        val
      }
      this.$emit('to',obj)
    }
  },
};
</script>
<style lang="scss" scoped>
.mylist {
  ul {
    width: 100%;
    li {
      line-height: 60px;
      font-size: 20px;
      text-align: left;
      span {
        margin: 0 10px 0 25px;
      }
    }
    li:hover {
      background: #ebf4ff;
    }
  }
}
</style>