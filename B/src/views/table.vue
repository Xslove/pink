<template>
  <div class="table">
    <div class="top" style="text-align:left">
      <el-button type="primary" icon="el-icon-delete" @click="dels">删除选中</el-button>
      <el-select v-model="value" placeholder="请选择" @change="selectchange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="请输入内容" style="width:300px" @input="inp"></el-input>
    </div>
    <!-- 表格 -->
    <el-table
      :data="
        tableData.slice(
          (page.pagenum - 1) * page.pagesize,
          page.pagenum * page.pagesize
        )
      "
      border
      style="width: 100%"
      @selection-change="selchange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="id" label="id"> </el-table-column>
      <el-table-column prop="name" label="用户名"> </el-table-column>
      <el-table-column prop="money" label="账号余额"> </el-table-column>
      <el-table-column prop="thumb" label="头像（查看大图）">
        <template slot-scope="scope">
          <el-image
            style="width: 100px; height: 100px"
            :src="scope.row.thumb"
            :preview-src-list="[scope.row.thumb]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态">
        <template slot-scope="scope">
          <el-button
            plain
            :type="scope.row.state == '成功' ? 'success' : 'danger'"
            >{{ scope.row.state }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="date" label="时间"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row, scope.$index)">编辑</el-button>
          <el-button type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pagenum"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="page.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 对话框 -->
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="ok">确 定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      options: [
        {
          value: "河南",
          label: "河南",
        },
        {
          value: "广东",
          label: "广东",
        },
        {
          value: "湖南",
          label: "湖南",
        },
      ],
      value: "",
      input: "",
      tableData: [],
      tablelist: [],
      page: {
        pagenum: 1,
        pagesize: 2,
      },
      total: 0,
      dialogVisible: false,
      form: {
        name: "",
        address: "",
        index: "",
      },
      selectid:[],
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    inp(){
      this.tableData=this.tablelist.filter(item=>item.name.includes(this.input))
    },
    // 地址搜索
    selectchange(){
      this.tableData=this.tablelist.filter(item=>item.address.includes(this.value))
      console.log(this.tableData);
    },
    // 选中的删除
    dels(){
      this.tableData=this.tablelist.filter(item=> !this.selectid.includes(item.id))
    },
    // 选中
    selchange(val){
      // console.log(val);
      this.selectid=val.map(item=>item.id)
      console.log(this.selectid);
    },
    // 删除
    del(i) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(i, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 编辑
    edit(it, i) {
      console.log(it);
      this.dialogVisible = true;
      this.form.name = it.name;
      this.form.address = it.address;
      this.form.index = i;
      // console.log(this.form);
    },
    ok() {
      // console.log(this.form);
      this.tableData[this.form.index].name = this.form.name;
      this.tableData[this.form.index].address = this.form.address;
      this.dialogVisible = false;
    },
    getdata() {
      axios.get("table.json").then((res) => {
        console.log(res);
        this.tableData = res.data.list;
        this.tablelist = res.data.list;
        this.total = this.tableData.length;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.page.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page.pagenum = val;
    },
  },
};
</script>