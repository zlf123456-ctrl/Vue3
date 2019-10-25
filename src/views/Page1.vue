<template>
    <div class="page1">
        {{msg}}
        <p>1.请问您的性别是：</p>
        <input type="radio" v-model="sex" value="男" id="1"><label>男性</label>
        <input type="radio" v-model="sex" value="女" id="2"><label>女性</label>
        <input type="radio" v-model="sex" value="保密" id="3"><label>保密</label><br>
        <br><a @click="doClickSex()">下一步</a>
        <a @click="reset()">重置</a>
        <!--<br/><button @click="doClick()">点击后跳转到page2</button>-->
        <!--<p>通过page2传递过来的数据：{{message}}</p>-->
    </div>
</template>

<script>
    export default {
        name: "Page1",
        data(){
            return {
                // msg:'This is Page1',
               sex:'保密'
            }
        },
        methods:{
            doClickSex(){
                alert(this.msg);
                this.$router.push('/page2');
            }
        }
    }
</script>

<style scoped>
.page1{
    padding:20px;
    /*font-size:48px;*/
    /*background:#0375b4;*/
    /*color:#ffce00;*/
}
    a{
        padding:10px 20px;
        color: darkcyan;
    }
    p{
        font-size:18px;
    }
    label{
        margin-right: 5px;
    }
</style>