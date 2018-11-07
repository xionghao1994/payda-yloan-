<template> 
    <div class="mui-content">
      <header>设置</header>
      <ul>
       <router-link to="/aboutOur">
		<li id="about">
			<span>关于我们</span>
			<span class="mui-icon mui-icon-arrowright"></span>
		</li>
        </router-link>
        <router-link to="/changePassword">
		<li id="changepassd">
			<span>修改密码</span>
			<span class="mui-icon mui-icon-arrowright"></span>
		</li>
        </router-link>
	</ul>
    <div class="button" @click="button()">退出登录</div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default{
    data(){
        return{

        }
    },
	methods:{
		button:function(){
		MessageBox.confirm('操作成功').then(action => {

          });
		}
	}
}
</script>
<style scoped>
a{
    color:#333;
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
    margin-top:4px;
}
ul .mui-icon {
	line-height: 60px;
	font-size: 20px;
}
ul li {
	width: 100%;
	height: 60px;
	font-size: 0.4rem;
	padding: 0 10%;
	line-height: 60px;
	border-bottom: 1px solid #f1f1f1;
	display: -webkit-flex;
	-webkit-justify-content: space-between;
}
.button {
	width: 60%;
	height: 40px;
	color: #C0B07E;
	font-size: 0.466667rem;
	line-height: 40px;
	text-align: center;
	border: 1px solid #C0B07E;
	border-radius: 5px;
	margin: 50% auto;
}
</style>