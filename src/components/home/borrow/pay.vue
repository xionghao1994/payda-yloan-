<template>
 <div class="container">
   <header>支付页面</header>
    <div class="head">
		<div class="out">
			如您默认银行卡无法完成支付可以进行更换本人银行卡支付
		</div>
	</div>
    <form>
		<div class="frame">
			<div class="line">
				<label>支付金额</label>
				<input v-model="value" placeholder="1500.00" type="text" />
			</div>
			<div class="line">
				<label id="pra">姓名</label>
				<input v-model="value" type="text" />
			</div>
			<div class="line">
				<label>身份证号</label>
				<input v-model="value" type="text" />
			</div>
			<div class="line">
				<label>银行卡号</label>
				<input v-model="value" type="text" placeholder="请输入您的银行卡号" />
			</div>
			<div class="line">
				<label>手机号码</label>
				<input v-model="value" type="text" placeholder="请输入您绑定的手机号码" />
				<input type="button" value="获取验证码" id="addSendCode" />
			</div>
			<div class="line">
				<label class="code">验证码</label>
				<input v-model="value" type="text" />
			</div>
			<div class="support_bank" id="quto">
				<p style="color:#666;margin-top: 5%;">查看支持银行及其限额</p>
			</div>
			<br>
		</div>
	</form>
    <a href="javascript:;" @click="submit()" id="button">提交支付</a>
 </div>
</template>
<script>
  export default{	
      data(){
          return{
			  value:''
          }
      },
      methods:{
          submit:function(){
            this.$router.push('/paySuccess')
          }
      }
  }
</script>
<style scoped>
input[type='button'], input[type='submit'], input[type='reset'], button, .mui-btn{
	padding:0;
}
header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
    border-bottom:1px solid #f1f1f1;
}
.head{
	width: 100%;
	height: 60px;
	background-color: #EDEDED;
	overflow: hidden;
}
.head .out {
	width: 90%;
	color: #666666;
	font-size: 0.416667rem;
	line-height: 20px;
	margin: 10px auto;
}
.frame {
	width: 100%;
}
.frame .line {
	border-bottom: 1px solid #EDEDED;
	line-height: 1.0rem;
	text-align: center;
	position: relative;
}
.frame label {
	font-size: 0.416667rem;
	color: #333333;
	font-weight: 700;
	width: 63px;
	height: 41px;
}
.frame #pra {
	margin-left: 4%;
	margin-right: 3%;
}
.frame .code {
	margin-left: 4%;
}
.frame input {
	width: 70%;
	margin-left: 5%;
	height: 45px;
	margin-top: 4px;
	outline: none;
	text-indent: 3%;
	border: 0px solid transparent;
	font-size: 0.4rem;
}
.frame input::-webkit-input-placeholder {
	font-size: 0.4rem;
	line-height: 0.4rem;
}
@media screen and (max-width: 320px) {
	.frame input::-webkit-input-placeholder {
		font-size: 12px !important;
		line-height: 20px;
	}
}
.frame input+input {
	line-height: 1.0rem;
}
a {
	width: 80%;
	height: 40px;
	background-color: #B99B4A;
	text-decoration: none;
	color: #fff;
	display: block;
	font-size: 16px;
	margin: 1.0rem auto;
	text-align: center;
	line-height: 40px;
	font-weight: 700;
	border-radius: 5px;
}
.line input[type="button"] {
	width: 20%;
	height: 35px;
	display: inline-block;
	color: #B99B4A;
	margin-left: 4%;
	background-color: #fff;
	font-size: 12px !important;
	-webkit-appearance: none;
	position: absolute;
	right: 5%;
	bottom: 3%;
	top: 11%;
}
.top {
	width: 100%;
	height: 44px;
	position: relative;
}
.top h2 {
	display: inline-block;
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
}
.support_bank p {
	float: right;
	margin-right: 40px;
	font-size: 0.266667rem;
}
.support_bank p:after {
	content: '';
	width: 0.373333rem;
	height: 0.373333rem;
	background: url('../../../static/images/query.png') no-repeat;
	background-size: 0.373333rem 0.373333rem;
	display: inline-block;
	position: absolute;
	margin-left: 5px;
	-webkit-vertical-align: middle;
}
</style>