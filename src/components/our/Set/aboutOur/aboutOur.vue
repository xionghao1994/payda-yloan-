<template>
<div class="mui-content">
 <header>关于我们</header>
    <div class="body">
		<div class="about_our">
			<p>来必借</p>
			<p>V1.0.0</p>
		</div>
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
 header{
    text-align:center;
    height:40px;
    line-height:40px;
    background-color:#fff;
    font-size:18px;
}
.body{
   width:100vw;
   height:100vh;
   background:url('../../../../static/images/shade.png') no-repeat;
   background-size:100vw 100vh;
   overflow:hidden;
}
.about_our{
	width:100%;
	display: flex;
	flex-direction:column;
	text-align: center;
	position: fixed;
	bottom:60px;
}
.about_our p:first-child{
	font-size: 18px;
}
.about_our p + p{
  margin-top:10px;
}
</style>