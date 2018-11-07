<template>
    <!--此处只能有一个根节点 -->
    <div class="mui-content">
     <header>来必借</header>
    <mt-swipe class="mt-swipe" :auto="4000">
        <mt-swipe-item>
        <img src="../../static/images/banner.png"/>
        </mt-swipe-item>
        <mt-swipe-item>
        <img src="../../static/images/banner2.png"/>
        </mt-swipe-item>
    </mt-swipe>
     <!--文字滚动 -->
     <div class="scroll">    
     <div class="broadcast"></div>
          <div class="marquee"> 
                <ul class="marquee_list" :class="{marquee_top:animate}">
                    <li v-for="(item, index) in marqueeList">
                    {{item}}
                     </li>
                </ul>
          </div>
    </div>
     <!--/文字滚动 -->  
     <div class="index_main">
		<div class="flow">
			<ul>
				<li>
					借款金额
					<span><b class="hundred">1000</b> ¥</span>
				</li>
				<li>
				    借款期限
				    <span><b class="seven">7</b>（天）</span>
			    </li>
			</ul>
		</div>
		<div class="lin"></div>
		<p>零门槛 随借还</p>
		<div @click="next()" class="button">立即借款</div>
	</div>  
 </div>
</template>
<script>
// 按需引用
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default{
    data(){
        return{
            animate: false,
            marqueeList: [
                  '用户尾号4266刚刚卖出一部iPhone 7 Plus，获得2800元',
                  '用户尾号4266刚刚卖出一部iPhone 7 Plus，获得2800元',
                  '用户尾号9867刚刚卖出一部iPhone 7 Plus，获得2800元'          
            ],
        }
    },
    created(){
        setInterval(this.showMarquee, 2000)
    },
    methods:{
     // 获取文字滚动数据
    //   getarr(){
    //     this.$http 
    //         .get('getarr')
    //         .then((response)=>{
    //             if(response.status === 200 && response.data.status ===0){
    //                 this.arr = response.data.message;
    //             }
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    //  }
     showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                this.marqueeList.shift();
                this.animate = false;
            },500)},
     next:function(){
        //  路由跳转的方式
       this.$router.push('/borrow')
     }
    }
}
</script>
<style scoped>
/* 轮播图样式 */
  .mt-swipe{
    height:250px;
  }
  .mt-swipe img{
    width:100%;
    height:100%;
  }
header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
}
.banner{
    width:100%;
    height:230px;
}
.banner img{
    width:100%;
    height:100%;
}
/*文字滚动 */
.marquee {
	width: 100%;
    height:40px;
    line-height:40px;
    overflow:hidden;
	color: #3A3A3A;
	background-color: #fff;	
    font-size:13px;
    padding-left:10%;
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -40px
}
.marquee_list{
    display:flex;
    flex-direction:column;
    font-size:12px;
}   
.scroll{
    width:100%;
    position:relative;
}
.scroll .broadcast{
    position:absolute;
    width:20px;
	height:20px;
	background: url('../../static/images/broadcast.png') no-repeat;
	background-size:20px 20px;
	display:inline-block;
    top:8px;
    left:8px;
}
ul{
    margin-top:0px;
}
li{
    list-style:none;
}
.index_main{
	width:85%;
	box-shadow: 1px 1px 11px #DFCEA1;
	margin:5% auto;
	overflow: hidden;
    background-color:#fff;
}
.index_main .flow{
	width:80%;
	margin:8% auto;
    text-align:center;
}
.index_main .flow ul{
	display: -webkit-flex;
}
.index_main .flow ul li{
	list-style: none;
	-webkit-flex:1;
	font-size: 0.4rem;
}
.index_main .flow ul li span{
	display:block;
	margin-top: 10%;
}
.index_main .hundred{
	color:#DFCEA1;
	font-size: 20px;
}
.index_main .seven{
	font-size: 20px;
}
.index_main p{
	text-align: center;
	margin-top: 5%;
}
.index_main .lin{
	border-bottom:1px solid #DFCEA1;
}
.index_main .button{
	width:80%;
	height:44px;
	background-color: #C0B07E;
	color:#fff;
	font-weight: 700;
	text-align: center;
	line-height: 44px;
	margin:6% auto;
	font-size: 0.4rem;
	border-radius: 10px;
} 
@media screen and (max-width: 320px){
	.index_main .flow{
		margin:4% auto !important;
	}
	.index_main .button{
		width:80%;
		height:44px;
		background-color: #C0B07E;
		color:#fff;
		font-weight: 700;
		text-align: center;
		line-height: 44px;
		margin:3% auto !important;
		font-size: 0.4rem;
		border-radius: 10px;
   } 
}
</style>