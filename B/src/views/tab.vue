<template>
  <div>
    <!-- tab选项卡 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未读消息" name="unread">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.unread.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="markread(index)">标记已读</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pagenum"
          :page-sizes="[2, 3, 4]"
          :page-size="page.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablist.unread.length"
        >
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="已读消息" name="second"><!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.read.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="readmessage(index)">已读消息</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pagenum"
          :page-sizes="[2, 3, 4]"
          :page-size="page.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablist.unread.length"
        >
        </el-pagination></el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <!-- 列表 -->
        <div
          class="box"
          v-for="(item, index) in tablist.recycle.slice(
            (page.pagenum - 1) * page.pagesize,
            page.pagenum * page.pagesize
          )"
          :key="index"
        >
          <p>{{ item.title }}</p>
          <div class="right">
            <p>{{ item.date }}</p>
            <el-button @click="recyclebin(index)">还原</el-button>
          </div>
        </div>
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.pagenum"
          :page-sizes="[2, 3, 4]"
          :page-size="page.pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablist.unread.length"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
import { mapState } from 'vuex';
export default {
  data() {
    return {
    //   tableData: [],
      activeName: "",
      page: {
        pagenum: 1,
        pagesize: 2,
      },
    };
  },
  computed:{
    ...mapState('tab',['tablist'])
  },
  methods: {
    // 回收站
    recyclebin(index){
        this.$store.commit('tab/recyclebin',index)
    },
    // 已读消息
    readmessage(index){
        this.$store.commit('tab/readmessage',index)
    },
    // 标记已读
    markread(index){
        this.$store.commit('tab/markread',index)
    },
    handleClick() {},
    getData() {
      axios.get("tabs.json").then((res) => {
        console.log(res);
        // this.tableData = res.data.unread;
        this.$store.commit('tab/tabadd',res.data)
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize=val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum=val
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-right: 40px;
  }
}
</style>