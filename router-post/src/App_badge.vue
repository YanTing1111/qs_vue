<template>
  <div id="app">
    <el-badge class="item" :value="1" :max="9">
      <el-button size="medium" @click="addComment" nativeType="submit">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9" isDot>
      <el-button size="small" :disable="saveDisabled" @click="doSave()">发布</el-button>
    </el-badge>
    <el-badge class="item" :value="10" :max="9">
      <el-button size="mini">前往</el-button>
    </el-badge>
    
    <!-- <el-button type="primary">发布</el-button>
    <el-button type="text">前往</el-button> -->

    <!-- <el-button size="medium" type="primary">回复</el-button>
    <el-button size="medium" type="primary" icon="el-icon-edit">点我</el-button> -->
  </div>
</template>

<script>
import ElBadge from '@/components/ElBadge'
import ElButton from '@/components/ElButton'

export default {
  name: 'app',
  data(){
    return{
      saveDisabled:true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.saveDisabled = false;
    },5000)
  },
  methods:{
    addComment(){
      console.log('添加评论！');
    },
    doSave(){
      console.log('发布');
    }
  },
  components: {
    ElButton,
    ElBadge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
