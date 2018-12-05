<template>
 <div class="container">
  <header>支付</header>
    <div class="card">
    <form>
        <div class="p">请选择支付的银行卡<i class="sa"></i></div>
        <br>
        <div class="choose">
            <p class="bank">银行卡</p>
            <select id="selector">
                <option value="">{{bank.card}}</option>
                <option>{{bank.number}}</option>
                <option value="newCard">{{bank.newBank}}</option>
            </select>
        </div>
        <a href="javascript:;" id="closeBtn">取消支付</a>
        <a href="javascript:;" @click="sure()">确定支付</a>
        <br>
    </form>
</div>
 </div>
</template>
<script>
  export default{
      data(){
          return{
              bank:{
                  card:'请选择银行卡',
                  number:'412232456512211',
                  newBank:'更换新银行卡'
              }
          }
      },
      methods:{
        sure:function(){
           this.$router.push('/pay')
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
.card {
    width: 90%;
    border: 1px solid #ccc;
    margin: 30% auto;
    border-radius: 15px;
    text-align: center;
}

.card .p {
    color: #333333;
    font-size: 16px;
    font-weight: 700;
    margin-top: 5%;
}

.card .choose {
    margin: 6% auto;
}

.card .bank {
    display: inline-block;
    vertical-align: middle;
}

.card select {
    width: 75%;
    height: 40px;
    margin-left: 3%;
    outline: none;
    border: 1px solid #ccc;
}

.card p {
    color: #333333;
    font-size: 16px;
    font-weight: 700;
    position: relative;
}

.card select {
    -webkit-appearance: none;
    background-color: #fff;
    padding-left: 15px;
    border: 1px solid #ccc !important;
}

.card a {
    width: 40%;
    height: 40px;
    background-color: #C0B07E;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
    line-height: 40px;
    margin: 6% auto;
    display: inline-block;
    margin-left: 8%;
}

#closeBtn {
    margin-left: 1% !important;
    background-color: #DEDEDE;
}
.sa{
    width:20px;
    height:20px;
    background:url('../../../static/images/sa.png') no-repeat;
    background-size: 20px 20px;
    display: inline-block;
    position: absolute;
    margin-left: 7px;
}    
</style>