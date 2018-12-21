<template>
<!--此处只能有一个根节点 -->
<div class="mui-content">
   <header>认证中心</header>
   <ul class="AC_main">
		<li v-for="(item,index) in arr" :key="index.item">
			<span><img :src="item.image" :class="{'one':index==0,'two':index==1,'three':index==2}">{{item.ac}}</span>
			<span class="pra_ac">{{item.awit_ac}}<span class="mui-icon mui-icon-arrowright"></span></span>
		</li>
	</ul>
</div>
</template>
<script>
export default{
    data(){
        return{
			arr:[
				{ac:'实名认证',awit_ac:'待认证',image:require('../../../static/images/face.png')},
				{ac:'绑定银行卡',awit_ac:'已绑定',image:require('../../../static/images/Acc.png')},
				{ac:'运营商认证',awit_ac:'待认证',image:require('../../../static/images/card.png')}
			]
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
.AC_main{
    background-color:#fff;
    margin-top:6px;
}
.AC_main li{
	width:100%;
	height:60px;
	line-height: 60px;
	border-bottom:1px solid #F1F1F1;
	display: -webkit-flex;
	-webkit-justify-content:space-between;
	padding-left:5%;
	padding-right: 5%;
}
.AC_main .pra_ac{
	color:#B99B4A;
}
.AC_main .mui-icon{
	font-size: 22px !important;
	color:#B99B4A;
}
.AC_main span{
	font-size: 0.4rem;
}
.one{
	width:0.653333rem;
	height:0.666667rem;
	display: inline-block;
	background-size:0.653333rem 0.666667rem;
	margin-right: 5px;
	vertical-align: middle;
}
.two{
	width:0.6rem;
	height:0.6rem;
	display: inline-block;
	background-size:0.6rem 0.6rem;
	margin-right: 5px;
	vertical-align: middle;
}
.three{
	width:0.666667rem;
	height:0.466667rem;
	display: inline-block;
	background-size: 0.666667rem 0.466667rem;
	margin-right: 5px;
	vertical-align: middle;
}
</style>