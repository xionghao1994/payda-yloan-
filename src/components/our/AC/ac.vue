<template>
<!--此处只能有一个根节点 -->
<div class="mui-content">
   <header>认证中心</header>
   <ul class="AC_main">
		<li id="ac">
			<span><i class="list"></i>{{ac}}</span>
			<span class="pra_ac">{{awit_ac}}<span class="mui-icon mui-icon-arrowright"></span></span>
		</li>
		<li>
			<span><i class="Acc"></i>{{operator_Ac}}</span>
			<span class="pra_ac">{{awit_ac}}<span class="mui-icon mui-icon-arrowright"></span></span>
		</li>
		<li id="bank">
			<span><i class="card"></i>{{bound_bank}}</span>
			<span class="pra_ac">{{already_bound}}<span class="mui-icon mui-icon-arrowright"></span></span>
		</li>
	</ul>
</div>
</template>
<script>
export default{
    data(){
        return{
           ac:'实名认证',
           awit_ac:'待认证',
           already_bound:'已绑定',
           bound_bank:'绑定银行卡',
           operator_Ac:'运营商认证'
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
.AC_main .list{
	width:0.653333rem;
	height:0.666667rem;
	display: inline-block;
	background:url('../../../static/images/face.png') no-repeat;
	background-size:0.653333rem 0.666667rem;
	margin-right: 5px;
	vertical-align: middle;
}
.AC_main .Acc{
	width:0.6rem;
	height:0.6rem;
	display: inline-block;
	background:url('../../../static/images/Acc.png') no-repeat;
	background-size:0.6rem 0.6rem;
	margin-right: 5px;
	vertical-align: middle;
}
.AC_main .card{
	width:0.666667rem;
	height:0.466667rem;
	display: inline-block;
	background:url('../../../static/images/card.png') no-repeat;
	background-size: 0.666667rem 0.466667rem;
	margin-right: 5px;
	vertical-align: middle;
}
</style>