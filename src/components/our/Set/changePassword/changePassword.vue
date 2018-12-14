<template>
<div class="mui-content">
   <div class="body">
        <div class="forget_main">  
			<div class="head">
			  <h1>修改密码</h1>
			</div>
		</div>
	  <div class="change_password">
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>原密码</label>
				<input type="password" id="pass" v-model="oldPassword" class="mui-input-clear" maxlength="16" placeholder="请输入原登录密码" />
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>新密码</label>
				<input type="password" id="new" v-model="newPassword" class="mui-input-clear" maxlength="16" placeholder="请输入6-16位登录密码" />
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>确定密码</label>
				<input type="password" v-model="surePassword" class="mui-input-clear" id="loginPass" maxlength="16" placeholder="请输入6-16位登录密码"
				/>
			</div>
		</form>
		<div class="btn" @click="sure()" id="button">确定</div>
	  </div>
   </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
    data(){
        return{
			oldPassword:'',
			newPassword:'',
			surePassword:'',
        }
    },
	methods:{
       sure:function(){
		var pass = /^([A-Z]|[a-z]|[0-9]|[!@#$%^&*()=,./~;'|-]){6,16}$/;
		var text =$('#pass').val();
		var text1 =$('#new').val();
		var text2 =$('#loginPass').val();
		if(this.oldPassword == '' || this.newPassword == '' || this.surePassword == ''){
			Toast('请输入密码')
		}else if(!pass.test(text) || !pass.test(text1) || !pass.test(text2)){
			Toast('请输入正确的密码')
		}else if(text !==text1 || text1 !== text2){
			Toast('输入密码不一致')
			return false;
		}
		// $.ajax({
		// 	url:'',
		// 	type:'post',
        //     data:{'text':text,'text1':text1,'text2':text2},
		// 	success:function(){

		// 	}
		// })
	   }   
	}
}
</script>
<style scoped>
.mui-content{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
.body{
    width:100vw;
    height:100vh;
    background:url('../../../../static/images/shade.png') no-repeat;
    background-size:100vw 100vh;
    overflow:hidden;
}
.forget_main{
	width:85%;
	margin:0 auto;
}
.forget_main .head{
	margin-top: 50px;
	margin-bottom: 18%;
}
.forget_main h1{
	font-weight:400;
	font-size: 0.8rem;
}
input {
	width: 85%;
	margin: 0 auto;
}
.btn {
	text-align: center;
	line-height: 38px;
	margin: 0 auto;
	margin-top: 10%;
	width: 80%;
	height: 38px;
	border-radius: 6px;
	color: #fff;
	font-size: 16px;
	background-color: #DCCA99;
}

label {
	font-size: 0.333333rem;
	padding: 15px !important;
}

input {
	font-size: 0.333333rem;
}

.mui-input-group {
	width: 85%;
	margin: 6% auto;
	font-size: 16px;
	border-radius: 5px;
	background-color: #efeff4;
	background-color: #fff;
}

.mui-input-group #code {
	width: 27%;
	height: 100%;
	/*后期这个颜色要删除*/
	background-color: #979797;
	position: absolute;
	right: 0;
	z-index: 100;
	border-top-right-radius:5px;
	border-bottom-right-radius:5px;
}

.mui-input-group input[type="button"] {
	width: 27%;
	height: 70%;
	vertical-align: middle;
	position: absolute;
	right: 0;
	z-index: 100;
	border-left: 1px solid #ccc;
	font-size: 12px !important;
	text-align: center;
	color: #4A90E2;
	padding-left: 2%;
	margin-top: 2%;
}
.mui-input-group:before{
	background-color: transparent;
}
.mui-input-group:after{
	background-color: transparent;
}
</style>