<template>
  <div class="container">
      <header>回收详情</header>
    <div class="reDetail">
	 <div class="top">申请时间：{{item.Date}}</div>
	 <div class="nav">
		<ul>
			<li>回收金额
				<span class="Number">{{item.money}} ¥</span>
			</li>
			<li>履约期
				<i @click="layer()" id="layer"></i>
				<span>{{item.day}}天</span>
			</li>
			<li>申请时间
				<span>{{item.date}}</span>
			</li>
		</ul>
	 </div>
	  <div class="children">
		 <ul>
			<li v-for="(item,index) in list" :key="index">
				<i class="check"></i>
			  <span>{{item.time}}</span>
			  <span>{{item.date}}</span>
				<h3>{{item.detail}}</h3>
				<p>{{item.message}}</p>
				<p>{{item.bank}}</p>
			</li>
		</ul>
	  </div>
	 <div class="footer">
		<div class="time" id="time">
			<i></i>
			<div id="rockon"><Countdown :endTime='endTime'></Countdown></div>
		</div>
		<div class="button" @click="next" id="btn1">立即还款</div>
		<div class="button" id="btn2">考虑延长借款期限</div>
	 </div>
    </div>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import Countdown from '../../Common/Countdown'; //引入倒计时组件
  export default{
      data(){
          return{
			  list:[
				{time:'07:50',date:'04-13',detail:'提交借款申请'},
				{time:'07:50',date:'04-13',detail:'资料审核中'},
				{time:'07:50',date:'04-13',detail:'资料审核通过',message:'预付款打款中'},
				{time:'07:50',date:'04-13',detail:'预付款打款成功',message:'预付款已打款到你绑定的银行卡，请注意查收'},
				{time:'07:50',date:'04-13',detail:'尾款打款中',message:'尾款金额：200元',bank:'经专业质检发现与评估价值符合'},
				{time:'07:50',date:'04-13',detail:'已经延期成功，请在期限内完成订单'},
			  ],
			  item:{
				  Date:'2018-09-12 15:23',
				  money:'300',
				  day:'7',
				  date:'2018-02-24'
			  },
              endTime : '2018-12-30 0:00:00' 
          }
      },
      methods:{
          next:function(){
              this.$router.push('/noSale')
          },
          layer:function(){
            MessageBox('履约期', '履约期：指客户确定以评估价格卖出手机与平台签订《手机回收合同》内约定的交付手机的实际交付期限，用户应当在交付期限内将评估手机邮寄至平台指定地址');
          }
      },
    //   注入组件
      components:{
          Countdown
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
.reDetail .top {
    height: 43px;
    line-height: 43px;
    font-size: 0.333333rem;
    position: relative;
    padding-left: 5%;
    border-bottom: 1px solid #F1F1F1;
}

.reDetail .nav {
    padding-top: 5%;
    padding-bottom: 2%;
    font-size: 0.333333rem;
    border-bottom: 1px solid #F1F1F1;
}

.reDetail .nav ul {
    width: 100%;
    display:flex;
}

.reDetail .nav ul li {
    flex: 1;
    text-align: center;
    list-style: none;
    font-size: 0.4rem;
}
.reDetail .nav ul li>span {
    display: block;
    margin-top: 5%;
    font-size: 0.346667rem;
}

.reDetail .nav i {
    width: 0.213333rem;
    height: 0.32rem;
    background: url('../../../static/images/doubt.png') no-repeat;
    background-size: 0.213333rem 0.32rem;
    display: inline-block;
    margin-left: 6px;
}

.reDetail .nav .Number {
    color: #FF5B49;
}
.reDetail .footer {
	width: 100%;
	border: 1px solid #979797;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	z-index: 100;
}
.reDetail .footer i {
	width: 0.853333rem;
	height: 0.826667rem;
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	background: url('../../../static/images/time.png') no-repeat;
	background-size: 0.853333rem 0.826667rem;
}
.reDetail .footer .time {
	margin-top: 2%;
	margin-left: 4%;
	width: 100%;
	height: 0.586667rem;
	line-height: 0.586667rem;
	font-size: 0.333333rem;
}
.reDetail .footer #rockon {
	display: inline-block;
}
.reDetail .footer .button {
	width: 80%;
	height:0.933333rem;
	margin: 0.266667rem auto;
	background-color: #DFCEA1;
	text-align: center;
	line-height:0.933333rem;
	color: #fff;
	border-radius: 7px;
	font-size: 0.4rem;
}
.reDetail .children li{
	border-left:1px solid #ccc;
	list-style:none;
	padding-left: 5%;
	/*margin-top: 6%;*/
	padding-bottom: 6%;
	position: relative;
}
.reDetail .children span{
	position: absolute;
	margin-left: -24%;
	color:#999999;
}
.reDetail .children span+span {
    margin-top: 6%;
}

.reDetail .children ul{
	padding-left: 20%;
	margin-top: 5%;
}
.reDetail .children i{
	width:16px;
	height:16px;
	display: block;
	border:1px solid #18ad51;
	border-radius: 50%;
	position: absolute;
	left:-3%;
	background-color: #fff;
	/*margin-top: 6%;*/
}
.mui-h3, h3{
	font-size: 15px !important;
	/*color:#999999;*/
	font-weight: 400;
}
@media screen and (max-width: 320px){
   .children{
   	  height:281px;
   	  overflow-y: auto; 
   }
}
@media screen and (min-width: 321px) and (max-width: 375px){
   .children{
   	  height:350px;
   	  overflow-y: auto; 
   }
}
@media screen and (min-width: 600px){
	.reDetail .children i {
    width: 16px;
    height: 16px;
    display: block;
    border: 1px solid #18ad51;
    border-radius: 50%;
    position: absolute;
    left: -1%;
    background-color: #fff;
 }
}
/*borr_detail*/
.reDetail .borr_detail li{
	border-left:1px solid #ccc;
	list-style:none;
	padding-left: 5%;
	/*margin-top: 6%;*/
	padding-bottom: 6%;
	position: relative;
}
.reDetail .borr_detail span{
	position: absolute;
	margin-left: -24%;
	color:#999999;
}
.reDetail .borr_detail span+span {
    margin-top: 6%;
}

.reDetail .borr_detail ul{
	padding-left: 20%;
	margin-top: 5%;
}
.reDetail .borr_detail i{
	width:16px;
	height:16px;
	display: block;
	border:1px solid #18ad51;
	border-radius: 50%;
	position: absolute;
	left:-3%;
	background-color: #fff;
	/*margin-top: 6%;*/
}
/*mybank*/
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