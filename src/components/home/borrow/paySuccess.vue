<template>
 <div class="container">
    <header>支付成功</header>
    <div class="main">
		<div class="pitc">
			<img src="../../../static/images/success.png" alt="" />
		</div>
		<p>{{pay.detail}}</p>
		<div class="button" @click="sure()" id="btn">确定</div>
	</div>
 </div>
</template>
<script>
  export default{
      data(){
          return{
			  pay:{
				  detail:'您的延期申请已经收到，订单处理中'
			  }
          }
      },
      methods:{
          sure:function(){
              this.$router.push('/home')
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
    border-bottom:1px solid #f1f1f1;
}
.main {	
	display: flex;
	flex-direction: column;
	margin: 18% auto;
}
.main .pitc {
	width: 3.466667rem;
	height: 3.466667rem;
	margin: 0 auto;
}
.main .pitc img {
	width: 100%;
	height: 100%;
}
.main p {
	text-align: center;
	color: #000;
	margin-top: 10%;
	font-size:0.4rem;
}
.main .button {
	width: 65%;
	height: 40px;
	color: #fff;
	margin: 10% auto;
	font-size: 0.4rem;
	text-align: center;
	line-height: 40px;
	border-radius: 6px;
	background-color: #DFCEA1;
}
.main .detail{
	width:70%;
	margin:3% auto;
	font-size: 0.4rem;
}
</style>