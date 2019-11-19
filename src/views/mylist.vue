<template>
    <div class="main">
        <top></top>
        <div>
            <input 
            v-model="input"
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="Add your TodoList"
            @keyup.enter="addTodo"
            >
        </div>
        <todo-list :todo='filteredTodos' @changeState='change' @del_item='del_one'></todo-list>
        <div style="margin-top:20px">
            <el-radio v-model="radio" label="all" border size="medium">所有</el-radio>
            <el-radio v-model="radio" label="not" border size="medium">未完成</el-radio>
            <el-radio v-model="radio" label="done" border size="medium">已完成</el-radio>
        </div>
        <div class="exit">
            <el-button type="primary" @click='exit'>退出</el-button>
        </div>
    </div>
</template>
<script>
import TodoList from '../components/todolist'
import Top from './top'
import {delCookie} from '../../public/cookie'
export default {
    data(){
        return {
            input:'',todo:[],id:0,radio:'all',
        }
    },
    components: {
        TodoList,
        Top
    },
    methods: {
        addTodo(){                //添加事件
            if(!this.input.trim()){     //判断输入是否为空
                this.input = ''
            }else{
                this.todo.push({
                    content:this.input.trim(),
                    id: this.id+=1,
                    state:false
                });
                this.input = ''
            }    
        },
        change(change_id){       //改变事件状态
            for(var one in this.todo){
                var citem = this.todo[one]
                if(citem.id === change_id){
                    citem.state = !citem.state
                }
            }        
        },
        del_one(did){            //删除事件
            for(var one in this.todo){
                var citem = this.todo[one]
                if(citem.id === did){
                    this.todo.splice(one,1)
                }
            } 
        },
        not_done(){         //获取未完成事件列表
            var not_done_todo = this.todo.filter(function(item){
                return item.state === false
            })
            return not_done_todo
        },
        done_list(){       //获取已完成事件列表
            var done_todo = this.todo.filter(function(item){
                return item.state === true
            })
            return done_todo
        },
        exit(){           //退出
            delCookie('userName')          
            this.$router.push('/login');
        }
    },
    computed:{
        filteredTodos(){    //监听radio状态，根据其状态改变事件列表
            if(this.radio === 'all'){
                return this.todo
            }else if(this.radio === 'not'){
                return this.not_done()
            }else if(this.radio === 'done'){
                return this.done_list()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.header{
    height 50px
    line-height 50px
    font-size 30px
}
.add-input{
    left 10%
    position:relative
    margin-top 100px
    width 550px
    font-size 24px
    font-family  inherit
    font-weight  inherit
    line-height 1.4rem
    outline none
    color inherit
    font-smoothing:antialiased;
    border none
    }
.exit{
    width 150px
    margin-top 20px
    margin-left 75%
}
</style>