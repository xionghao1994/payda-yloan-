<template>
<!--此处只能有一个根节点 -->
  <div id="app">
	 <a v-if="isShow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
   <!-- 底部导航 -->
	 <nav class="mui-bar mui-bar-tab" v-if="sh">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">{{index}}</span>
			</router-link>
			<router-link to="/order" class="mui-tab-item">
				<span class="mui-icon iconfont icon-dingdan"></span>
				<span class="mui-tab-label">{{order}}</span>
			</router-link>
			<router-link to="/our" class="mui-tab-item">
				<span class="mui-icon iconfont icon-daohanglan-05"></span>
				<span class="mui-tab-label">{{our}}</span>
			</router-link>
		</nav>
	<!-- /底部导航 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
 data(){
   return{
	   index:'首页',
		 order:'订单',
		 our:'我的',
     isShow:false,
		 sh:true
   }
 },
 methods:{
	 goback(){
		 this.$router.back();
	 },
	 judeBack(path){
		 let arr =['/home','/order','/our'];
		 if(arr.indexOf(path)== -1){
			//  不存在
			this.isShow = true;
			// 1.如果不是这几个主页面隐藏
			this.sh = false;
		 }else{
			 this.isShow = false;
			//  2.否则显示
			 	this.sh = true;
		 }
	 }
 },
//  当刷新页面的时候，因为路由地址，没有发生变化，没有执行watch,所以要在组件创建后判断是否显示后退按钮
 created(){
	 this.judeBack(this.$route.path);
 },
// 当路由地址变化的时候，决定后退按钮显示或者隐藏
 watch:{
	 '$route':function(newValue){
		//  判断当前路由地址是否是 /home /order /our
		this.judeBack(newValue.path);
	 }
 }
}
</script>

<style>
*{
	margin:0;
	padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mui-action-back{
	margin-top:7px;
	margin-left:6px;
	position:absolute;
}
.mint-msgbox-message{
  line-height:30px;
}
.mint-msgbox{
	border-radius:10px;
}

</style>
