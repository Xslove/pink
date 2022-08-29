<template>
  <div class="myheader">
    <h2>
      <span class="el-icon-s-unfold" @click="open"></span>
      后台管理系统
    </h2>
    <div>
      <span class="el-icon-rank" @click="quan"></span>
    </div>
  </div>
</template>
<script>
import screenfull from "screenfull";
export default {
  props:['isCollapse'],
  data() {
    return {
    }
  },
  methods: {
    quan(){
        screenfull.toggle()
    },
    open(){
      this.isCollapse=!this.isCollapse
      this.$emit('open',this.isCollapse)
    }
  },
}
</script>
<style lang="scss" scoped>
.myheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>