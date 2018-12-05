<template>
  <div class="container">
      <header>订单成功</header>
     <div class="main">
		<div class="pitc">
			<img :src="item_image">
		</div>
		<p>订单提交成功</p>
		<div class="detail">{{item_detail}}</div>
		<div class="button" @click="btn()">查看回收进度</div>
	</div>  
  </div>
</template>
<script>
import image from '../../../static/images/success.png'
 export default{
     data(){
         return{
           item_image:image,
		   item_detail:'您好，平台正在审核您的资料，请保证填写信息无误，审核过程中将会有客服和您电话沟通，请保持您的手机畅通，注意接听电话'
         }
     },
	 methods:{
		 btn:function(){
			 this.$router.push('/recovery')
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
	display:flex;
	flex-direction: column;
	margin: 18% auto;
}
.main .pitc {
	width: 3.466667rem;
	height: 3.466667rem;
	margin: 0 auto;
}
.pitc img {
	width: 100%;
	height: 100%;
}
.main p {
	text-align: center;
	color: #000;
	margin-top: 10%;
	font-size: 0.533333rem;
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