<template>
    <div>
        <p>3.请介绍一下自己</p>
        <textarea rows="5" cols="50" name="" v-model="js"></textarea>
        <br>
        <a @click="clickDetail()">提交</a>
        <router-link to="/Page2)">上一页</router-link>
        <a @click="reset()">重置</a>

    </div>
</template>

<script>
    export default {
        name: "Page3",
        data(){
            return{
                js:""
            }
        },
        methods:{
            clickDetail(){
                this.$store.commit("clickDetail",this.clickDetail());
                this.router.push("/Page4")
            },
            reset(){
                this.js="";
            }
        }

    }
</script>

<style scoped>
a {
    margin-right: 10px;
    color: darkcyan;
}
</style>