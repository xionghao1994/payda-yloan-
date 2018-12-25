<template>
<div class="mui-content">
    <header>登录</header>
    <div style="height:4px;background-color:#f1f1f1;"></div>
    	<div class="main">
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>手机号码</label>
				<input
                type="text"
                id="phone"
                @blur="checkPhone()"
                v-model="phone"
                class="mui-input-clear"
                maxlength="11"
                placeholder="请输入手机号" />
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label style="padding-right:2%;">图形验证码</label>
				<input
                type="text"
                v-model="code"
                class="mui-input-clear"
                maxlength="4"
                placeholder="请输入图片验证码" />
				<img id="code">
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>验证码</label>
				<input
                v-model="auth_code"
                @blur="checkCode()"
                id="auth_code"
                type="text"
                maxlength="6"
                placeholder="请输入验证码" />
				<input type="button" @click="sendCode" v-model="codeMsg" :disabled="codeDisabled" id="sendCode" />
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>新密码</label>
				<input
                 type="password"
                 @blur="checkPass()"
                 v-model="newPassword"
                 id="NewPass"
                 class="mui-input-clear"
                 maxlength="16"
                 placeholder="请输入6-16位登录密码" />
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>确定密码</label>
				<input
                 type="password"
                  @blur="checkPass()"
                  v-model="again_Password"
                  class="mui-input-clear"
                  id="AgainPass"
                  maxlength="16"
                  placeholder="请输入6-16位登录密码"/>
			</div>
		</form>
		<div class="btn" @click="sure()" id="button">确定</div>
	</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default{
    data(){
        return{
            phone:'',
            code:'',
            auth_code:'',
            newPassword:'',
            again_Password:'',
            codeDisabled: false,
            // 倒计时秒数
            countdown: 60,
            // 按钮上的文字
            codeMsg: '获取验证码',
            // 定时器
            timer: null
        }
    },
    methods:{
       sure:function(){
                Toast("请输入完整信息")
                return;
       },
       checkPhone:function(){
           var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
           if(this.phone == ""){
               Toast("请输入手机号")
           }else if(!reg.test($("#phone").val())){
               Toast("请输入正确的手机号")
               return;   
        }
       },
       checkCode:function(){
           var reg = /^\d{6}$/;
           if(this.auth_code ==""){
                  Toast("请输入验证码")
           }else if(!reg.test($("#auth_code").val())){
                 Toast("请输入正确的验证码")
                 return;
           }
       },
       checkPass:function(){
            var pass = /^([A-Z]|[a-z]|[0-9]|[!@#$%^&*()=,./~;'|-]){6,16}$/;
           if(this.newPassword =="" && this.again_Password ==""){
                 Toast("请输入密码")
           }else if(!pass.test($("#NewPass").val())){
                Toast("请输入正确的密码")
           }else if($("#NewPass").val() !== $("#AgainPass").val() && $("#AgainPass").val() !== $("#NewPass").val()){
               Toast("两次密码不一致")
           }
       },
    //    发送验证码
       sendCode(){
        //    alert('1')
            // 验证码60秒倒计时
            if (!this.timer) {
            this.timer = setInterval(() => {
            if (this.countdown > 0 && this.countdown <= 60) {
                this.countdown--;
                if (this.countdown !== 0) {
                this.codeMsg = "重新发送(" + this.countdown + ")";
                } else {
                clearInterval(this.timer);
                this.codeMsg = "获取验证码";
                this.countdown = 60;
                this.timer = null;
                this.codeDisabled = false;
                }
            }
            }, 1000)
            }
       }

    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
}
.mui-icon-arrowleft {
    position: absolute;
    left: 10px;
    line-height: 44px;
}

.main {
    width: 90%;
    background-color: #fff;
    margin: 6% auto;
    border-radius: 6px;
    padding: 3%;
}

input {
    width: 90%;
    margin: 0 auto;
}

.btn {
    text-align: center;
    line-height: 38px;
    margin: 0 auto;
    margin-top: 10%;
    width: 100%;
    height: 38px;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    background-color: #C0B07E;
}

label {
    font-size: 0.333333rem;
    padding: 15px !important;
}

input {
    font-size: 0.333333rem;
}

.mui-input-group {
    width: 100%;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
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
    font-size: 12px;
    text-align: center;
    color: blue;
    padding-left: 2%;
    margin-top: 2%;
    color:#C0B07E;
}
</style>