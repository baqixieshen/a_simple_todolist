<template>
    <div class="main">
        <div class="img">
            <img src="../assets/imgs/2.jpg" alt="">
            <div class="login">
                <el-input
                style="margin-bottom:50px"
                placeholder="请输入用户名"
                v-model="username">
                </el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password @keyup.native.enter="login"></el-input>
                <el-button type="primary" style="margin-top:30px" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import {setCookie} from '../../public/cookie'
export default {
    data(){
        return{
            username:'',password:'',height:document.body.clientHeight,
        }
    },
    methods: {
        login(){
            if(this.username&&this.password){
                setCookie('userName',this.username)
                this.$router.push('/mylist');
            }else{
                this.$alert('用户名或密码不能为空', '输入错误', {
                confirmButtonText: '确定',
                });
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.main{
    height 100%
    min-width 800px
    position relative
    .img{
        width 100%
        height 100%
        img{
            width: 100%
            height 751px
            position: absolute;
            left: 0
            top: 0 
            opacity 0.6
            z-index 1
        }    
    }
    .login{
        padding 80px
        position: absolute
        right 0
        top 200px
        width 500px
        z-index 4    
    }
}

</style>