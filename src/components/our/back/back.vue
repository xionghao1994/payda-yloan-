<template>
<div class="mui-content">
   <header>意见反馈</header>
   <div class="fd_main">
		<textarea v-model="value" placeholder="请提出您的宝贵建议或者疑问" rows="6" cols="20" id="textarea"></textarea>
	</div>
	<div class="input">
		<input v-model="value" type="text" id="phone" maxlength="11" placeholder="请输入手机号" />
	</div>
	<div class="button" id="button">提交</div>
   </div>
</div>
</template>
<script>
export default{
    data(){
        return{
			value:''
        }
    }
}
</script>
<style scoped>
 header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
}
.fd_main {
	width: 90%;
	margin: 6% auto;
	padding-top: 6%;
	padding-bottom: 6%;
	display: flex;
	text-align: center;
	flex-direction: column;
	border-radius: 5px;
	background-color: #FFF;
}

.fd_main {
	width: 90%;
	height: 5.333333rem;
	border: 1px solid #ccc;
	margin: 20px auto;
}

.fd_main #textarea {
	width: 100%;
	height: 100%;
	border: none;
	font-size: 0.4rem;
}

.input {
	width: 80%;
	height: 50px;
	margin: 5% auto;
	box-sizing: border-box;
	line-height: 50px;
}
.input input {
	border-top: 1px solid transparent;
	border: 0px solid transparent;
}
.button {
	width: 80%;
	height: 44px;
	border-radius: 5px;
	color: #fff;
	text-align: center;
	line-height: 44px;
	font-size: 0.4rem;
	margin: 6% auto;
	background-color: #DCCA99;
}
</style>