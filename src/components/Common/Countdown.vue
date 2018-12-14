<template>
  <!--日期时间倒计时组件 -->
  <div class="container">
    <p>您剩余借款期限还有{{time}}</p>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        time : '',
        flag : false
      }
    },
    mounted () {
      let time = setInterval(()=>{
        if(this.flag === true){
          clearInterval(time)
        }
        this.timeDown()
      },500)
    },
    props : {
      endTime : {
        type : String
      }
    },
    methods : {
      timeDown () {
        const endTime = new Date(this.endTime)
        const nowTime = new Date();
        let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000)
        let d = parseInt(leftTime/(24*60*60))
        let h = this.formate(parseInt(leftTime/(60*60)%24))
        let m = this.formate(parseInt(leftTime/60%60))
        let s = this.formate(parseInt(leftTime%60))
        if(leftTime <= 0){
          this.flag = true
          this.$emit('time-end')
        }
        this.time = `${d}天${h}小时${m}分${s}秒`     // 需要修改时间样式的话 ，比如需要什么30分钟倒计时，就只保留分和秒
      },
      formate (time) {
        if(time>=10){
          return time
        }else{
          return `0${time}`
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
$font-size:13px
 p
  font-size:$font-size

</style>