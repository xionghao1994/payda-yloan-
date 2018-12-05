<template>
<div class="mui-content">
  <header>借款额度</header>
  <div style="height:1px;background-color:#F1F1F1"></div>
    <!-- 检测 -->
	<div  class="borrowing">
		<ul v-for="(item,index) in borrow">
			<li>{{item.name}}</li>
			<li>{{item.money}}</li>
		</ul>
		<div class="anver">
			<div class="ce"><img src="../../../static/images/anew.png" alt=""/>
			&nbsp;重新检测</div>
		</div>
	</div>
	<!-- 检测 over -->
	<!-- 详情 -->
		<div class="bor_detail">
			<ul>
				<li v-for="(item,index) in arr">
					<span class="head_detail">{{item.audit}}</span>
					<p class="de">{{item.detail}}</p>
					<div class="zhi">
						<img src="../../../static/images/zhi.png" alt="">
					</div>
				</li>
			</ul>
		</div>
	<!-- 详情 over -->
    <!-- 确认删除弹出框 -->
	<div v-show="sh" class="pub_box">
		<div class="pubBox">
			<div class="box">
				<div class="text">{{compact_name}}《手机回收合同》
				</div>
				<p class="detail">{{compact}}</p>
				<p class="inline">
					<input type="checkbox" class="inp" />
					<b class="agree"></b>
					我已阅读并同意
					<a href="javascript:;" class="contract">《手机回收合同》</a>
				</p>
				<div class="btn-waper">
					<a href="javascript:;" @click="noAgree()" class="fl cancel">不同意</a>
					<a href="javascript:;" @click="Agree()" class="fr sure">同意</a>
				</div>
			</div>
		</div>
	</div>
	<!-- /确认删除弹出框 -->
	<div class="borr">
	 <div class="borr_button" @click="show" id="Mbutton">确定拿钱</div>
	</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default{
      data(){
          return{
			borrow:[
				{name:'您最高可借金额',money:'¥ 4500.00'},
				{name:'您可凭借信用最高获取到账金额',money:'¥ 3600.00'}
			],
			arr:[
				{audit:'审核',detail:'24小时智能审核，最快3秒审核完毕'},
				{audit:'放款',detail:'24小时智能放款，最快1分钟到账'},
				{audit:'提额',detail:'24小时智能提额，完成借款立即提额'}
			],
			compact_name:'来必借',
			compact:'您在使用来必借产品出售手机服务前,请认真阅读并且理解《手机回收合同》当您点击同意并使用出售服务,即表示您已经理解合同,该合同将对您具有法律约束力的法律文件。',
            sh:false
          }
      },
      methods:{
       show:function(){
           this.sh = !this.sh;
         },
       noAgree:function(){
             this.sh = !this.sh;
        },
        Agree:function(){
            if($(".agree").is(":hidden")){
               Toast('请勾选用户协议');
            }else{
                this.$router.push('/orderSuccess')
            }    
         }
      }
  }
</script>
<style scoped>
.pub_box{
	width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
	z-index:100;	
}
.pubBox{
    width:80%;
    margin:30% auto;
    border-radius: 6px;
    border:1px solid #ccc;
    position:absolute;
    top:30%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:#fff;
}
.pubBox .box .text {
	font-size: 16px;
	padding: 10px 10px;
	padding-top: 20px;
	text-align: center;
	color: #000;
}

.pubBox .box .detail {
	color: #333;
	padding: 10px 15px;
	line-height: 20px;
	font-size: 14px;
}

.pubBox .inline {
	color: #000;
	text-align: center;
	padding: 5px;
	margin: 10px auto;
	display: block;
	position: relative;
}

.pubBox .box .inline .inp {
	width: 18px;
	height: 18px;
	border:1px solid #ccc;
	border-radius: 0;
	-webkit-appearance:none;
	background-color:transparent;
	vertical-align: middle;
	position: absolute;
	left: 6%;
	top: 4px;
	z-index: 100;
}
.pubBox .box .inline .agree {
	width: 18px;
	height: 18px;
	display: block;
	background: url('../../../static/images/i.png') no-repeat;
	background-size: 18px 18px;
	position: absolute;
	left: 6%;
	top: 4px;
}

.pubBox .box .inline .inp:checked + .agree{
	display: none;
}

@media screen and (max-width: 320px) {
	/*.bor_detail{
		height: 300px;
		overflow-y: auto;
	}*/
	.pubBox .inline {
		text-align: center;
		padding: 5px;
		font-size: 12px;
		margin: 10px auto;
		display: block;
		position: relative;
	}
	.pubBox .box .inline .agree {
		width: 18px;
		height: 18px;
		display: block;
		background: url('../../../static/images/i.png') no-repeat;
		background-size: 18px 18px;
		position: absolute;
		left: 6%;
		top: 4px;
	}

}

@media screen and (min-width: 376px) and (max-width: 414px) {
	.pubBox .inline {
		text-align: center;
		padding: 5px;
		margin: 10px auto;
		display: block;
		position: relative;
	}
	.pubBox .box .inline .agree {
		width: 18px;
		height: 18px;
		display: block;
		background: url('../../../static/images/i.png') no-repeat;
		background-size: 18px 18px;
		position: absolute;
		left: 6%;
		top: 4px;
	}
}

.pubBox .box .btn-waper a {
	width: 45%;
	height: 36px;
	line-height: 36px;
	font-size: 16px;
	color: #000;
	text-align: center;
	text-decoration: none;
}

.contract {
	color: #FF5B49 !important;
}

.pubBox .box .btn-waper .cancel {
	margin: 0 auto;
	border-right: 1px solid #ccc;
}

.pubBox .box .btn-waper .sure {
	margin: 0 auto;
}

.pubBox .box .btn-waper {

	padding: 6px;
	display: -webkit-flex;
	-webkit-flex: 1;
	border-top: 1px solid #e0e0e0;
}
/*删除盒子 over*/
header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
}
.borrowing{
	width: 98%;
	height: 4.4rem;
	margin: 5px auto;
	background: url('../../../static/images/footer.png') no-repeat center;
	background-size: 98% 4.4rem;
}
.borrowing ul{
   width:90%;
   margin:5px auto;
   display: flex;
   justify-content: space-between;
   overflow: hidden;
}
.borrowing ul li{
	list-style: none;
	font-size: 0.4rem;
    margin-top: 12%;
}
.borrowing ul + ul li{
	list-style: none;
	font-size: 0.4rem;
    margin-top: 10%;
}
.anver{
	width:90%;
	margin:0 auto;
	bottom:0;
	position: relative;
}
.anver img{
	width:0.373333rem;
	height: 0.346667rem
}
.anver .ce{
   position: absolute;
   right:3px;
  margin-top: 4%;
}
.bor_detail{
	width:100%;
}
.bor_detail ul li {
	padding:0px 6%;
}
.bor_detail ul li:first-child{
	padding-top: 2%;
}
.bor_detail .head_detail:before {
    content: '';
    width: 0.426667rem;
    height: 0.453333rem;
    display: inline-block;
    margin-right: 6px;
    background: url('../../../static/images/he.png') no-repeat;
    background-size: 0.426667rem 0.453333rem;
}
.bor_detail .kuan:before {
	content: '';
    width: 0.426667rem;
    height: 0.453333rem;
    display: inline-block;
    margin-right: 6px;
    background: url('../../../static/images/kuan.png') no-repeat;
    background-size: 0.426667rem 0.453333rem;
}
.bor_detail .money:before{
	content: '';
    width: 0.426667rem;
    height: 0.453333rem;
    display: inline-block;
    margin-right: 6px;
    background: url('../../../static/images/money.png') no-repeat;
    background-size: 0.426667rem 0.453333rem;
}
.bor_detail .de{
	color:#333;
	text-align: center;
	font-size: 0.4rem;
	margin-top: 1%;
}
.bor_detail .head_detail{
	font-weight: 700;
	font-size: 0.466667rem;
}
.bor_detail .zhi{
	width:25px;
	height:30px;
	margin:5% auto;
}
.bor_detail .zhi img{
	width:100%;
	height:100%;
}
.borr{
	width:100%;
	height:60px;
	position: fixed;
	bottom:0;
}
.borr_button{
	width:80%;
	height: 44px;
	line-height: 44px;
	text-align: center;
	background-color: #C0B07E;
	margin:0px auto;
	color:#fff;
	border-radius: 10px;
	font-size: 0.4rem;
}
</style>