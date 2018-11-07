<template>
<div class="mui-content">
  <header>银行卡</header>
  <div class="mybank">
		<div class="main">
			<ul>
				<li>
					<div class="bank_icon"></div>
					<span id="ccb">建设银行</span>
					<span id="deposit_card">储蓄卡</span>
					<p>**** **** **** 0367</p>
				</li>
			</ul>
		</div>
		<div class="hint">
			<span>温馨提示:</span>
			<br>
			<span>只能绑定一张储蓄卡</span>
		</div>
		<div class="button" id="button">更换银行卡</div>
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
    list-style:none;
}
header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
    border-bottom:1px solid #f1f1f1;
}
.mybank .main li {
	width: 95%;
	height: 2.666667rem;
	margin: 5% auto;
	background: url('../../../static/images/bk.png')no-repeat top center;
	background-size: 95% 2.666667rem;
	border-radius: 5px;
	position: relative;
}

.mybank .main .bank_icon {
	width: 0.666667rem;
	height: 0.666667rem;
	background: url('../../../static/images/bank_small.png') no-repeat;
	background-size: 0.666667rem 0.666667rem;
	position: absolute;
	left: 8%;
	top: 14%;
}

.mybank #ccb {
	color: #fff;
	position: absolute;
	top: 11%;
	left: 18%;
}

.mybank #deposit_card {
	color: #ccc;
	font-size: 0.266667rem;
	position: absolute;
	left: 18%;
	top: 21%;
	margin-top: 2%;
}

.mybank p {
	color: #fff;
	position: absolute;
	bottom: 8%;
	left: 18%;
}

.mybank .hint {
	width: 90%;
	margin: 0 auto;
	color: #666666;
}

.mybank .button {
	width: 100%;
	height: 40px;
	color: #C1B17F;
	text-align: center;
	line-height: 40px;
	border: 1px solid #ccc;
	position: fixed;
	bottom: 2px;
	font-size: 0.333333rem;
}
</style>