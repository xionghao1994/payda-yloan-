<template>
<div class="mui-content">
	<header>订单记录</header>
    <ul class="order">
       <li class="one">
         <div class="model">
          <span>申请时间：2018-9-17  15:14</span>
          <span class="detail">查看详情
         <span class="icon mui-icon mui-icon-arrowright"></span></span>
         </div>
         <div class="info">
            <ul>
                <li>借款金额
                    <span class="number">3000&nbsp;元</span>
                </li>
                <li>到账金额
                    <span>3600</span>
                </li>
                <li>借款期限
                    <span>7天</span>
                </li>
            </ul>
        </div>
      </li>
    <li>
        <div class="model">
                <span>申请时间：2018-9-17  15:14</span>
                <span class="detail">逾期中
                    <span class="icon mui-icon mui-icon-arrowright"></span>
                </span>
            </div>
            <div class="info">
                <ul>
                    <li>借款金额
                        <span class="number">3000</span>
                    </li>
                    <li>到账金额
                        <span>36000</span>
                    </li>
                    <li>借款期限
                        <span>7天</span>
                    </li>
                </ul>
            </div>
       </li>
        <li>
            <div class="model">
                <span>申请时间：2018-9-17  15:14</span>
                <span class="detail">已结清
                    <span class="icon mui-icon mui-icon-arrowright"></span>
                </span>
            </div>
            <div class="info">
                <ul>
                    <li>借款金额
                        <span class="number">3000</span>
                    </li>
                    <li>到账金额
                        <span>36000</span>
                    </li>
                    <li>借款期限
                        <span>7天</span>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <div class="model">
                <span>申请时间：2018-9-17  15:14</span>
                <span class="detail">已拒绝
                    <span class="icon mui-icon mui-icon-arrowright"></span>
                </span>
            </div>
            <div class="info">
                <ul>
                    <li>借款金额
                        <span class="number">3000</span>
                    </li>
                    <li>到账金额
                        <span>36000</span>
                    </li>
                    <li>借款期限
                        <span>7天</span>
                    </li>
                </ul>
            </div>
        </li>
          <li class="one">
         <div class="model">
          <span>申请时间：2018-9-17  15:14</span>
          <span class="detail">查看详情
         <span class="icon mui-icon mui-icon-arrowright"></span></span>
         </div>
         <div class="info">
            <ul>
                <li>借款金额
                    <span class="number">3000&nbsp;元</span>
                </li>
                <li>到账金额
                    <span>3600</span>
                </li>
                <li>借款期限
                    <span>7天</span>
                </li>
            </ul>
        </div>
      </li>
        <li class="one">
         <div class="model">
          <span>申请时间：2018-9-17  15:14</span>
          <span class="detail">查看详情
         <span class="icon mui-icon mui-icon-arrowright"></span></span>
         </div>
         <div class="info">
            <ul>
                <li>借款金额
                    <span class="number">3000&nbsp;元</span>
                </li>
                <li>到账金额
                    <span>3600</span>
                </li>
                <li>借款期限
                    <span>7天</span>
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