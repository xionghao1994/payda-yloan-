<template>
  <div class="mui-content">
    <div id="head">
  	 	<div id="box">
  	 		<img src="../../static/images/head.png" alt="">
  	 	</div>
  	 	  <p id="color">{{number}}</p>
  	    	<div class="st">
           <img src="../../static/images/starts.png" alt="">
  	    	</div>
  	</div>
    <ul class="bg">
     <router-link to="/ac"><li class="ac">{{ac}}</li></router-link>
     <router-link to="/bank"><li class="bank">{{my_bank}}</li></router-link>
     <router-link to="/back"><li class="order">{{feedback}}</li></router-link>
     <div style="height:7px;background-color:#F7F7F7;"></div>
     <router-link to="/help"><li class="help">{{help}}</li></router-link>
     <router-link to="/message"><li class="message">{{message}}</li></router-link>
     <router-link to="/call"><li class="kui">{{worker}}</li></router-link >
     <router-link to="/set"><li class="set">{{setting}}</li></router-link >
    </ul>
  </div>
</template>
<script> 
  export default{
    data(){
      return{
        number:18736019320,
        ac:'认证中心',
        my_bank:'我的银行卡',
        feedback:'意见反馈',
        help:'帮助中心',
        message:'消息中心',
        worker:'客服中心',
        setting:'设置'
      }
    }
  }
</script>
<style scoped>
*{
  margin:0;
  padding:0;
}
a{
  color:#333;
  width:100%;
}
#head #box{
  width:2.08rem;
  height:2.08rem;
  margin:0 auto;
  margin-top: 15%;
}
#head #color{
	color:#fff;
    font-size: 0.4rem;
    margin-top: 4%;
    text-align: center;
}
#head #box img{
	width:100%;
	height:100%;
}
#head .st{
	width:66%;
	height:44px;
	line-height: 44px;
	background-color:#e3dac1;
	opacity: 0.6;
	border-radius: 20px;
	margin:3% auto;
	
	position: relative;
}
#head .st img{
	width:100%;
	height:100%;
}
#head{
	width:100%;
	height:6.4rem;
	background:url('../../static/images/ourHead.png') no-repeat center;
	background-size: 100% 6.4rem;
	overflow: hidden;
}
.bg{
  background-color:#fff;
}
.bg li{
  width:100%;
  height:40px;
  line-height:40px;
  border-top:1px solid #f1f1f1;
  padding-left:12%;
  position:relative;
  font-size:12px;
}
.bg .ac:before{
  content:'';
  width: 0.466667rem;
	height: 0.453333rem;
	background: url('../../static/images/ac.png') no-repeat;
	background-size: 0.466667rem 0.453333rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:10px;
	-webkit-vertical-align: middle;
}
.bg .bank:before{
  content:'';
  width:0.453333rem;
	height:0.333333rem;
	background: url('../../static/images/bank.png') no-repeat;
	background-size: 0.453333rem 0.333333rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:12px;
	-webkit-vertical-align: middle;
}
.bg .order:before{
  content:'';
  width:0.453333rem;
	height:0.44rem;
	background: url('../../static/images/ca.png') no-repeat;
	background-size: 0.453333rem 0.44rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:12px;
	-webkit-vertical-align: middle;
}
.bg .help:before{
  content:'';
  width:0.386667rem;
	height:0.466667rem;
	background: url('../../static/images/help.png') no-repeat;
	background-size:0.386667rem 0.466667rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:10px;
	-webkit-vertical-align: middle;
}
.bg .message:before{
  content:'';
  width:0.426667rem;
	height:0.373333rem;
	background: url('../../static/images/message.png') no-repeat;
	background-size:0.426667rem 0.373333rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:10px;
	-webkit-vertical-align: middle;
}
.bg .kui:before{
  content:'';
  width:0.413333rem;
	height:0.4rem;
	background: url('../../static/images/kui.png') no-repeat;
	background-size:0.413333rem 0.4rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:10px;
	-webkit-vertical-align: middle;
}
.bg .set:before{
  content:'';
  width:0.413333rem;
	height:0.426667rem;
	background: url('../../static/images/setting.png') no-repeat;
	background-size:0.413333rem 0.426667rem;
	display: inline-block;
	position: absolute;
  margin-left: -27px;
  top:10px;
	-webkit-vertical-align: middle;
}
</style>