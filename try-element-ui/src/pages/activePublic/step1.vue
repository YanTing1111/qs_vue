<template>
  <div class="step1">
    <el-form class="demo-ruleFrom" ref="ruleFrom" label-position="top" :model="ruleFrom">
      <el-from-item label="活动名称" prop="name">
        <el-input v-model="ruleFrom.name" size="large"></el-input>
      </el-from-item>
      <el-from-item label="" prop="fenLei">
        <el-row style="height:35px;" type="flex" align="middle">
          <el-col :span="3" style="width:90px;">
            <div class="el-form-item__label">活动分类</div>
          </el-col>
          <el-col :span="2">
            <el-button type="text" @click.native="dialogFromFenLeiVisble=true">
              设置
            </el-button>
          </el-col>
        </el-row>
        <el-radio-group v-model="ruleFrom.fenLei">
          <el-radio v-for="item of ruleFrom.fenLeis" :label="item.name" :key="item.name">
          </el-radio>
        </el-radio-group>
      </el-from-item>
    </el-form>
    <el-dialog title="设置活动分类" :visible.sync="dialogFromFenLeiVisble">
      <el-from>
        <el-form-item>
          <el-tag v-for="fenLei of ruleFrom.fenLeis" type="primary" :key="fenLei" :closable="true">
            {{fenLei.name}}
          </el-tag>
        </el-form-item>
      </el-from>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dialogFromFenLeiVisble:false,
      ruleFrom:{
        name:'',
        fenLeis:[
          {name:'未发布'},
          {name:'测试活动'},
          {name:'精彩活动'},
        ],
        fenLei:'测试活动',
        tags:[]
      }
    }
  }
}
</script>
<style>

</style>
