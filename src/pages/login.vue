<template>
  <div>
    <img src="../images/nc.png" alt="">
    <strong class="title-box">海默AI智能通行系统</strong>
    <div class="login-box">
      <div class="login-box-top">
        <div class="border-box yellow lighten-2"></div>
        <div class="border-box pink lighten-2"></div>
        <div class="border-box purple darken-3"></div>
      </div>
      <div class="login-box-main">
        <div class="grid-box">
          <div style="width:80%">
            <div class="input-box" style="margin-top:35px">
              <v-icon color="grey lighten-1" size="30">iconfont icon-user</v-icon>
              <input type="text" v-model="userInfo.userName" placeholder="请输入用户名">
            </div>
            <hr>
          </div>
          <div style="width:80%">
            <div class="input-box">
              <v-icon color="grey lighten-1" size="30">iconfont icon-lock</v-icon>
              <input type="password" v-model="userInfo.passWord" placeholder="请输入密码">
            </div>
            <hr>
          </div>
          <div class="red--text text--darken-3 subtitle-2"><p>{{returnInfo}}</p></div>
        </div>
      </div>
      <div class="login-box-footer d-flex justify-center align-center" @click="login">
        <strong class="white--text headline">登 录</strong>
      </div>
    </div>
    <div class="footer-box d-flex justify-center">
      <div>©</div>
      <div>Powered</div>
      <div>By</div>
      <div>HI-MR</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import password from '../plugins/password.js'

export default Vue.extend({
  data () {
    return {
      userInfo: {
        userName: '',
        passWord: ''
      },
      returnInfo: ''

    }
  },
  methods: {

    /* 验证用的方法 */
    setToken () {
      password(this.$parent.$parent.loginUrl, this.userInfo).then(res => {
        if (res.code === 0) {
          document.cookie = res.data
          this.$parent.$parent.usercode = document.cookie.split('|')[0]
          this.$parent.$parent.cookie = document.cookie.split('|')[1]
          this.$router.push('index')
          this.ifnuc()
          return true
        } else {
          this.returnInfo = res.msg
        }
      }).catch(res => {
        this.returnInfo = res.msg
      })
    },

    /* 判断输入框是否为空 */
    login () {
      if (this.userInfo.userName !== '') {
        this.setToken()
      } else if (this.userInfo.userName === '') {
        if (this.userInfo.userName === '') {
          this.returnInfo = '请输入用户名'
        }
      }
    },
    /* 判断是不是南昌大学 */
    ifnuc () {
      const a = this.$parent.$parent.usercode.split('.')[0]
      if (a === 'ncu') {
        this.$parent.$parent.controlLogo = 0
      } else {
        this.$parent.$parent.controlLogo = 1
      }
    }
  }
})
</script>

<style scoped>
@import url('../fonts/loginfonts/iconfont.css');

*{
  margin: 0;
  padding: 0;
}
img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.title-box{
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%);
  font-size: 40px;
  color: #FAFAFA;
  letter-spacing: 20px;
  margin-left: 10px;
}
.login-box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 30%;
  height: 40%;
  background-color: #212121;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 15% 67% 18%;
  justify-items: center;
  align-items: center;
  overflow: hidden;
}
.login-box-top{
  justify-self: end;
  display: flex;
  flex-direction: row;
}
.login-box-main{
  background-color: #424242;
  width: 100%;
  height: 100%;
}
.login-box-footer{
  background-color: #388E3C;
  width: 100%;
  height: 100%;
}
.login-box-footer:active{
  background-color: #2E7D32;
}
.border-box{
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.login-box-top .yellow{
  margin-left: -80px;
}
.login-box-top .pink{
  margin-left: 10px;
}
.login-box-top .purple{
  margin-left: 10px;
}
.input-box{
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 30%;
}
input{
  outline: none;
  color: #FAFAFA;
}
.grid-box{
  height: 100%;
  display: grid;
  grid-template-rows: 40% 40% 20%;
  justify-items: center;
  align-items: center;
}
hr{
  border: 0;
  border-bottom: 0.1px solid #BDBDBD;
  margin-top: 15px;
}
.footer-box{
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%);
  font-size: 10px;
  color: #FAFAFA;
  letter-spacing: 20px;
  margin-left: 10px;
}
</style>
