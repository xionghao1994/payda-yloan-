<template>
 <div class="mui-content">
   <header>帮助中心</header>
    <div class="no_bound_bank">
		<div class="img"><img :src="help.image" alt=""></div>
		<div class="p">{{help.message}}</div>
    </div>
	</div>	
</template>
<script>
  export default{
      data(){
          return{
			  help:{
				  image:require('../../../static/images/noHlepCenter.png'),
				  message:'暂无帮助中心消息,休息一下吧！'
			  }
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
.no_bound_bank .img{
	width:150px;
	height:150px;
	margin:0 auto;
	margin-top: 20%;
}
.img img{
	width:100%;
	height:100%;
}
.no_bound_bank .p{
	text-align: center;
	margin-top: 10%;
	font-size: 0.333333rem;
	color:#666666;
}
.no_bound_bank .btn{
	width:80%;
	height:40px;
	text-align: center;
	line-height: 40px;
	background-color: #C0B07E;
	border-radius: 10px;
	color:#fff;
	margin:60px auto;
	font-size: 0.4rem;
}
.no_bound_bank a{
	color:#fff;
}
</style>