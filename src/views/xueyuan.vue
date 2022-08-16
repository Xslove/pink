
<template>
  <div>
    <div class="div">
        学生管理
    </div>
    学院状态<template>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
      学生名称<el-input placeholder="请输入学生关键字" class="inp" @input="xuename" v-model="xuename1"></el-input>
      手机号<el-input placeholder="请输入手机号" class="inp" @input="xuetel" v-model="tel"></el-input>
      <el-button icon="el-icon-search" @click="search">搜索</el-button>
      <el-button icon="el-icon-s-tools" @click="chong">重置</el-button><br />
      <el-button type="primary">新增学员</el-button>
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">批量导出</el-button>
      <el-button type="primary">查看报表</el-button><br />

      <el-table
        stripe
        ref="multipleTable"
        :data="tableData.slice((currentPage4-1)*pages,currentPage4*pages)"
        tooltip-effect="dark"
      >
        <el-table-column type="selection"> </el-table-column>
     
        <el-table-column prop="nickname" label="学生名称">
              <template slot-scope="scope">
                <img :src="scope.row.avatar"  class="img">
                <span>{{scope.row.nickname}}</span>
              </template>
        </el-table-column>
        <el-table-column prop="created_at" label="手机号" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="status" label="状态"> 
            <template slot-scope="scope">
                {{scope.row.status==0?'禁用':'启用'}}
            </template>
        </el-table-column>
           <el-table-column label="日期">
            {{this.time}}
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">禁用</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">重置密码</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[19, 10, 1, 5]"
      :page-size="pages"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
  </div>
</template>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
        tel:'',
        xuename1:'',
        currentPage4:0,
        pages:0,
        time:new Date().toLocaleDateString(),
      tableData: [],
      tablelist:[],
      options: [
        {
          value:1,
          label: "启用",
        },
        {
          value: 0,
          label: "禁用",
        },
      ],
      value: "",
    };
  },
  //过滤器
  filters: {},
  created() {
    axios.get('list.json').then((res)=>{
        console.log(res);
        this.tableData=res.data
        this.tablelist=res.data
    })
  },
  //计算属性
  computed: {},
  mounted() {},
  methods: {
    search(){
      if(this.xuename1!=''){
        this.tableData=  this.tablelist.filter((item)=>item.nickname.includes(this.xuename1))
      }
      if(this.tel!=''){
        this.tableData=  this.tablelist.filter((item)=>item.created_at.includes(this.tel))
      }
    },
    handleChange(value){
        let num=JSON.parse(value)
        this.tableData=this.tablelist.filter((item)=>item.status==num)
    },
    dian(item){
        console.log(item);
        console.log(222);
    },
    chong(){
        this.tableData=this.tablelist
    },
    xuetel(){
      this.tableData=  this.tablelist.filter((item)=>item.created_at.includes(this.tel))
    },
    xuename(){
      this.tableData=  this.tablelist.filter((item)=>item.nickname.includes(this.xuename1))
    },
      handleSizeChange(val) {
        this.pages=val
      },
      handleCurrentChange(val) {
        this.currentPage4=val
      }
  },
};
</script>
<style scoped lang='scss'>
.inp {
  width: 200px;
  margin-right: 20px;
}
.img{
    width: 50px;
    height: 50px;
}
.div{
    width: 100%;
    height: 20px;
    border: 1px solid;
}
</style>
