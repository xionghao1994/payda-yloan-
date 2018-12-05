<template>
  <div class="container">
    <header>不想出售</header>
  <div class="top">
        <ul>
          <li>应付预付款
            <span>{{sale.money}}¥</span>
          </li>
          <li>违约金
            <span>{{sale.money1}}</span>
          </li>
          <li>滞纳金
            <span>{{sale.number}}¥</span>
          </li>
        </ul>
	    </div>
	   <div class="main">
        <p class="pay_money">应付金额 （元）
          <i @click="layer()" id="layer"></i>
        </p>
		   <p class="price">{{sale.money2}}</p>
	   </div>
	<div class="content">
		<p v-for="(item,index) in hint" :key="index">{{item.p}}</p>
	</div>
	<div class="footer">
		<div class="inline">
			<input type="checkbox" class="inp" />
			<span class="agree"></span>
			<p class="protocol">我已阅读并同意
				<span class="color">《手机回收合同（续签）》</span>
			</p>
		</div>
		<div @click="btn()" class="button Ns_btn">确定无误，提交付款</div>
	</div>
  </div>
</template>
<script>
import { MessageBox,Toast } from 'mint-ui';
  export default{
      data(){
          return{
						sale:{
							money:'2600',
							money1:'2000',
							money2:'3030.00',
							number:'36'
						},
						hint:[
							{p:'温馨提示:'},
							{p:'如您确定还款，请及时支付应付金额'},
							{p:'如您出现无法支付情况，请及时联系客服'},
							{p:'如您还需考虑是否立即还款，可申请延长借款期限'}
						],
          }
      },
      methods:{
       layer:function(){
         MessageBox('费用说明', '1.应还预付款：用户未按约定向平台交付手机，应向平台返还平台预先实际支付的预付款。<br>2.违约金：用户未按约定履行合同，根据“定金罚则”，用户应向平台双倍返还平台预先实际支付的定金。<br>3.滞纳金：用户未及时向平台退还预付款并缴纳违约金，用户应按未缴纳部分的千分之三每天向平台支付滞纳金');
       },
       btn:function(){
         if($(".agree").is(":hidden")){
            Toast('请勾选用户协议');
         }else{
           this.$router.push('/card')
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
    border-bottom:1px solid #f1f1f1;
}
.top {
	width: 90%;
	margin: 5% auto;
	border: 1px solid #9B9B9B;
	border-radius: 6px;
}
.top ul {
	display: flex;
}
.top ul li {
	flex: 1;
	text-align: center;
	padding: 3%;
	list-style: none;
	font-size: 0.4rem;
}
.top ul li span {
	display: block;
	margin-top: 5%;
	font-size: 0.346667rem;
}
.main {
	width: 90%;
	margin: 15% auto;
	text-align: center;
	display: flex;
	flex-direction: column;
}
.main .pay_money {
	color: #333;
	font-size: 0.4rem;
}
.main .pay_money i {
	width: 0.213333rem;
	height: 0.32rem;
	background: url('../../../static/images/doubt.png') no-repeat;
	background-size: 0.213333rem 0.32rem;
	display: inline-block;
	margin-left: 6px;
}
.main .price {
	color: #FF5B49;
	font-weight: 700;
	font-size: 17px;
}
.content {
	width: 90%;
	margin: 15% auto;
	display:flex;
	flex-direction: column;
}
.content p:first-child{
	font-size: 0.4rem;
}
.content p {
	color: #333;
	font-size: 0.333333rem;
}
.footer {
	width: 100%;
	position: fixed;
	bottom: 10px;
	text-align: center;
	padding: 3%;
	border:none;
	border-radius: 0;
}
.footer .protocol {
	display: inline-block;
	vertical-align: middle;
	color: #333;
	font-size: 0.333333rem;
	margin-left: 15%;
}
.footer .color {
	color: #DFCEA1;
	display: inline-block;
	font-size: 0.333333rem;
}
.footer .inline {
	position: relative;
}
.footer input {
	width: 17px;
	height: 17px;
	border-radius: 2px;
	border: 1px solid #ccc;
	background-color: transparent;
	-webkit-appearance:none;
	position: absolute;
	left: 13%;
	z-index: 100;
}
.footer .agree {
	width: 17px;
	height: 17px;
	background: url('../../../static/images/check.png') no-repeat right;
	background-size: 17px 17px;
	display: block;
	position: absolute;
	left: 13%;
}
.footer input:checked+.agree {
	display: none;
}
.footer .button {
	width: 90%;
	height: 40px;
	margin: 6px auto;
	display: block;
	text-align: center;
	line-height: 40px;
	color: #fff;
	border-radius: 6px;
	background-color: #BFB088;
	font-size: 0.4rem;
}

</style>