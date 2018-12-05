<template>
<div class="mui-content">
	<header>{{order_header}}</header>
    <ul class="order">
       <li v-for="(item,index) in order" class="one">
         <div class="model">
          <span>{{item.time}}</span>
          <span class="detail">{{item.detail}}
         <span class="icon mui-icon mui-icon-arrowright"></span></span>
         </div>
         <div class="info">
            <ul>
                <li>{{item.borrow}}
                    <span class="number">{{item.money}}</span>
                </li>
                <li>{{item.limit}}
                    <span>{{item.mon}}</span>
                </li>
                <li>{{item.date}}
                    <span>{{item.day}}</span>
                </li>
            </ul>
        </div>
      </li>
    </ul>      		
</div>
</template>
<script>
export default{
    data(){
        return{
            order_header:'借款记录',
            order:[
                {time:'申请时间：2018-9-17  15:14',detail:'查看详情',
                 borrow:'借款金额',money:'3000元', limit:'借款额度',
                 mon:'3000',date:'借款期限',day:'7天'},
                {time:'申请时间：2018-9-17  15:14',detail:'查看详情',
                 borrow:'借款金额',money:'3000元', limit:'借款额度',
                 mon:'3000',date:'借款期限',day:'6天'},
                {time:'申请时间：2018-9-17  15:14',detail:'查看详情',
                 borrow:'借款金额',money:'3000元', limit:'借款额度',
                 mon:'3000',date:'借款期限',day:'5天'}      
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
ul{
    background-color:#fff; 
}
li{
    list-style:none;
    margin-bottom:3%;
}
.order{
  margin-top:1%;
  margin-bottom:50px;
}
.model{
    display:flex;
    justify-content:space-between;
    line-height:30px;
    width:100%;
    border-top: 1px solid #F1F1F1;
    padding:0 7%;
}
.info {
	margin: 2px auto;
	border-top: 1px solid #F1F1F1;
    border-bottom:1px solid #F1F1F1;
}

.info ul {
	display: -webkit-flex;
}
.info ul li {
	padding-top: 12px;
	text-align: center;
	-webkit-flex: 1;
	border: 1px solid transparent;
}
.info span {
	display: block;
}
.info .number {
	color: #FF5B49;
}
.mui-icon {
    font-size: 21px;
}
</style>