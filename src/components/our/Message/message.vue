<template>
 <div class="mui-content">
  <header>
     消息中心
     <a href="javascript:;" class="mui-pull-right mui-icon mui-icon-trash" @click="clear()" id="clear"></a>
  </header>
    <div class="message_center">
		<ul class="mui-table-view">
			<li v-for="item in arrs" class="mui-table-view-cell">
				<a class="mui-navigate-right">{{item.text}}</a>
			</li>
		</ul>
	</div>
	<div class="no_bound_bank">
		<div class="img"><img class="none" src="../../../static/images/empty.png" alt=""></div>
	</div>
 </div>
</template>
<script>
import $ from 'jquery';
import { MessageBox } from 'mint-ui';
export default{
    data(){
        return{
			arrs:[
				{text:"回收价格是怎么算的？"},
				{text:"认证失败怎么办？"},
				{text:"银行卡丢失了该怎么办？"},
				{text:"需要邮寄什么东西？"}
			]
        }
    },
    methods:{
        clear:function(){
          MessageBox.confirm('确定执行此操作?').then(action => {
			  if(action =='confirm'){ //
			    $('img').removeClass("none")
			    $('ul li').remove()
			  }
          });
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
	height:190px;
	margin:0 auto;
	margin-top: 20%;
}
.no_bound_bank .img img{
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
	color:#fff !important;
}
.none{
	display:none;
}

#clear{
    margin-top:8px;
    margin-right:8px;
}
</style>