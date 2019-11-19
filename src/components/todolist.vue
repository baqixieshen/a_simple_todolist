<template>
    <div>
        <div style="margin-top:30px">
            <el-row type="flex" justify="center"
            v-for="(item,index) in todo"
            :key="index"
            >
                <el-col :span="12"
                @click.native='cli(item)'
                ><div :class="['grid-content',item.state?'bg-purple-done':'bg-purple-light']"
                >{{item.content}}</div></el-col>
                <el-col :span='2'>
                    <div :class="['grid-content','bg-purple-dark']" v-show='item.state'
                    style="text-align:center">
                        已完成
                    </div>
                </el-col>
                <el-col :span='2' @click.native='del(item)'>
                    <div :class="['grid-content','bg-purple-dark']" v-show='item.state'
                    style="text-align:center">
                        删除?
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:[
        'todo'
    ],
    data (){
        return {}
    },
    methods: {
        cli(item){    //提交需要改变事件id
            this.$emit('changeState',item.id)     
        },
        del(item){   //提交需要删除事件id
            this.$emit('del_item',item.id)
        }
    }
}
</script>
<style lang="stylus" scoped>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  }
  .el-col {
    border-radius: 4px;
    margin-top 10px
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple-done{
    text-decoration:line-through;
    background: #99a9bf;
  }
  .bg-purple {
    background: red;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    // text-decoration:line-through;
    text-align left 
    padding-left 10px
    border-radius: 4px;
    min-height: 50px;
    line-height 50px
    font-size 20px
    &:checked{
      background-color  blue
      }
      
    // width 400px
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>