<template>
<div class="mui-content">
<header>客服</header>
<div style="height: 5px;background-color:#F7F7F7"></div>
    <div class="call_main">
		<ul>
			<li>
				<i class="call"></i>
				<a href="tel://0571-82878899">客服部&nbsp;&nbsp;&nbsp;0571-82878899</a>
				<p>回收订单咨询，受理相关回收问题</p>
			</li>
			<li>
				<i class="cup"></i>
				<a href="tel://0571-82878899">质检部&nbsp;&nbsp;&nbsp;0571-82878899</a>
				<p>受理回收快递进度查询，解答质检疑问</p>
			</li>
			<li>
				<i class="us"></i>
				<a href="tel://0571-82878899">售后部&nbsp;&nbsp;&nbsp;0571-82878899</a>
				<p>受理相关回收订单问题</p>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
export default{
    data(){
        return{

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
ul {
	display:flex;
    flex-direction: column;
    list-style:none;
    background-color:#fff;
}

 ul li {
	width: 100%;
	border-bottom: 1px solid #F1F1F1;
	padding-left: 5%;
}

 ul li a {
	color: #000 !important;
	margin-left: 2%;
	font-size: 0.4rem;
	display: inline-block;
	padding-top: 12px;
}

 p {
	color: #666666;
	margin-left: 10%;
	font-size: 0.266667rem;
}
 .call{
	width:0.626667rem;
	height:0.56rem;
	background:url('../../../static/images/call.png') no-repeat;
	background-size: 0.626667rem 0.56rem;
	display: inline-block;
	vertical-align: middle;
}
 .cup{
	width:0.626667rem;
	height:0.56rem;
	background:url('../../../static/images/cup.png') no-repeat;
	background-size: 0.626667rem 0.56rem;
	display: inline-block;
	vertical-align: middle;
}
 .us{
	width:0.626667rem;
	height:0.56rem;
	background:url('../../../static/images/us.png') no-repeat;
	background-size: 0.626667rem 0.56rem;
	display: inline-block;
	vertical-align: middle;
}
</style>