<template>
    <div class="top">
        Welcome:{{userName}}
    </div>
</template>
<script>
import {getCookie} from '../../public/cookie'
export default {
    data(){
        return {
            userName:''
        }
    },
    created(){
        this.userName = getCookie('userName')
    },
}
</script>
<style lang="stylus" scoped>
.top{
    height 50px
    font-size 40px
    line-height 50px
    margin-top 10px
} 
</style>