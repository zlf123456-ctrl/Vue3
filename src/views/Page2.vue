<template>
    <div class="page2">
        {{msg}}
        <br/>
        <p>请选择您的兴趣爱好</p>
        <input type="checkbox" v-model="ah" value="看书" id="1"><label>看书</label>
        <input type="checkbox" v-model="ah" value="游泳" id="2"><label>游泳</label>
        <input type="checkbox" v-model="ah" value="跑步" id="3"><label>跑步</label>
        <input type="checkbox" v-model="ah" value="看电影" id="4"><label>看电影</label>
        <input type="checkbox" v-model="ah" value="听音乐" id="5"><label>听音乐</label>
        <input type="checkbox" v-model="ah" value="动漫" id="6"><label>动漫</label>
        <br>
        <br><br><a @click="doClickah()">上一步</a>
        <!--<router-link to="/Page1)">上一页</router-link>-->
        <a @click="doClickah()">下一步</a>
        <!--<router-link to="/Page3)">上一页</router-link>-->
        <a @click="reset()">重置</a>
        <!--<button @click="doClick()">点击后跳转到Page1,并传递参数</button>-->
        <!--<p>用户名：<input type="text" v-model="user">密码：<input type="text" v-model="pass"></p>-->
        <!--<button  @click="addUser()">点击后添加用户名和密码，并在下面显示</button>-->
        <!--<p v-for="(item,index) in this.$store.state.list" :key="index">用户名：{{item.username}},密码：{{item.password}}</p>-->
    </div>
</template>

<script>
    export default {
        name: "Page2",
        data(){
            return {
                ah:[]
                // msg:'This is Page2',
            }
        },
        methods:{
            doClickah(){
                this.$store.commit(" doClickah",1)
                this.$router.push("/Page3");
            },
            reset(){
                this.ah=[];
            }
        }
    }
</script>

<style scoped>
.page2{
    padding:20px;
    /*font-size:48px;*/
    /*background:#373737;*/
    /*color:#dcd0c0;*/
}
input{
     border:1px solid #dcd0c0;
     margin-right:10px;
 }
a{
    color: darkcyan;
    margin-right: 15px;
}
    /*button{*/
        /*!*background:#c0b283;*!*/
        /*color:#fefefe;*/
        /*padding:10px 20px;*/
        /*border:none;*/
    /*}*/

    /*p{*/
        /*font-size:18px;*/
    /*}*/

</style>