<template>
  <div class="main-box">
    <div class="logo-box">
      <logo :control="controlLogo">
        <div class="d-flex justify-center align-center">
          <div class="grey--text text--darken-2" style="fontSize:22px">{{menu}}：</div>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="grey darken-4" dark v-on="on" depressed class="grey--text text--darken-1" style="fontSize:20px">{{all.userName}}</v-btn>
            </template>
            <v-list dark width="190px">
              <v-list-item v-for="(item, index) in userlist" :key="index" @click="getUrl(item)">
                <v-list-item-title style="marginLeft:10px">{{ item.userName }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </logo>
    </div>
    <div class="d-flex justify-center">
      <v-card max-width="1760px" max-height="880px" dark outlined class="list-box">
        <div class="d-flex justify-center align-center title">
          <div class="title-box">
            <div class="d-flex justify-center"><totalcard :totalnumber="total.totalnumber"></totalcard></div>
            <div class="d-flex justify-center"><passcard :passnumber="total.passnumber"></passcard></div>
            <div class="d-flex justify-center"><errcard :errnumber="total.errnumber"></errcard></div>
          </div>
        </div>
        <v-card  color="grey darken-4" class="grid-box">
          <div><strong>身份标识</strong></div>
          <div><strong>姓名</strong></div>
          <div><strong>温度</strong></div>
          <div><strong>检测时间</strong></div>
          <div><strong>地点</strong></div>
          <div><strong>通行次数</strong></div>
          <div><strong>可否通行</strong></div>
        </v-card>
        <div class="test">
          <div v-for="(item,index) in person" :key="index" class="margin-box">
            <infocard :id="item.userId" :name="item.name" :temperature="item.temperature" :location="item.location" :time="item.checkTime" :pass="item.pass"  :controlnumber="item.number"></infocard>
          </div>
        </div>
      </v-card>
    </div>
    <!-- copy right -->
      <div class="d-flex justify-center align-center">
        <div class="grey--text text--darken-2 font-weight-bold" style="margin-left:10px">©</div>
        <div class="grey--text text--darken-2 font-weight-bold" style="margin-left:10px">Powered</div>
        <div class="grey--text text--darken-2 font-weight-bold" style="margin-left:5px">By</div>
        <div class="grey--text text--darken-2 font-weight-bold" style="margin-left:5px">HI-MR</div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import logo from '@/components/logo.vue'
import infocard from '@/components/infocard.vue'
import totalcard from '@/components/totalcard.vue'
import passcard from '@/components/passcard.vue'
import errcard from '@/components/errcard.vue'
import getinfo from '@/plugins/getinfo'
import getpersontime from '@/plugins/getpersontime'
import getusername from '@/plugins/getusername'
import renewaltoken from '@/plugins/renewaltoken'
import getchildtoken from '@/plugins/getchildtoken'

export default Vue.extend({
  data () {
    return {
      total: {
        totalnumber: 0,
        passnumber: 0,
        errnumber: 0
      },
      person: [],
      menu: '',
      all: {},
      userlist: [],
      url: 'http://api.hi-mr.com:81/changtongma/api/v1/user/getcompany?ucode=' + this.$parent.$parent.usercode,
      getinfoUrl: '',
      getpersonUrl: '',
      userCode: '',
      tokenURL: 'http://api.hi-mr.com:81/changtongma/api/v1/user/authrenewal',
      controlLogo: this.$parent.$parent.controlLogo
    }
  },
  methods: {
    setUrl (key, val) {
      function setQueryString (key, val) { // 传进想设置querystring的key和value
        const search = location.search.substr(1) // 获取地址栏 "?"后的内容
        const query = {}
        if (search) {
          search.split('&').forEach((item) => {
            const arr = item.split('=')
            query[arr[0]] = arr[1]
          })
        }
        query[key] = val
        const queryArr = []
        for (const p in query) {
          queryArr.push(p + '=' + query[p])
        }
        history.replaceState(null, null, '?' + queryArr.join('&'))
      };
      setQueryString(key, val)
    },
    getQueryString (name) {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      const r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    },
    /* 得到子目录的url */
    getUrl (e) {
      this.userCode = e.userCode
      this.getchild(this.userCode)
      this.setUrl('usercode', this.userCode)
      this.all = e
      this.getpersonUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getpersonhistory?usercode=' + this.userCode
      this.getinfoUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getcount?usercode=' + this.userCode
    },
    /* 得到子目录的token */
    getchild (e) {
      getchildtoken(this.$parent.$parent.url, this.$parent.$parent.usercode, this.$parent.$parent.cookie, e).then(res => {
        this.$parent.$parent.allChildCookie = res.data
        this.$parent.$parent.childCookie = res.data.split('|')[1]
        this.$parent.$parent.responseChildCookie = res.data
      }).catch(res => {
        console.log(res.data)
      })
    },
    /* 设置子目录 */
    getUserName () {
      getusername(this.url, this.$parent.$parent.cookie, this.$parent.$parent.usercode).then(res => {
        // 校区列表

        const list = []
        this.userCode = res.data.userCode
        this.menu = res.data.userName
        this.all = res.data.subCompanies[0]
        for (let index = 0; index < res.data.subCompanies.length; index++) {
          const element = res.data.subCompanies[index]
          list.push(element)
        }
        this.userlist = list
        this.getchild(list[0].userCode)
        if (this.getQueryString('userCode')) {
          const userCode = this.getQueryString('userCode')
          this.getpersonUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getpersonhistory?usercode=' + userCode
          this.getinfoUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getcount?usercode=' + userCode
        } else {
          this.getpersonUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getpersonhistory?usercode=' + list[0].userCode
          this.getinfoUrl = 'http://api.hi-mr.com:81/changtongma/api/v1/changtongcode/getcount?usercode=' + list[0].userCode
          this.setUrl('usercode', list[0].userCode)
        }
      })
    },
    getTotal () {
      setInterval(() => {
        getinfo(this.getinfoUrl, this.$parent.$parent.allChildCookie).then(res => {
          // 通行人数
          this.total.totalnumber = res.data[0]
          this.total.passnumber = res.data[1]
          this.total.errnumber = res.data[2]
        })
      }, 2000)
    },
    /* 计算最近10个人员信息 */
    getPersonInfo () {
      setInterval(() => {
        getpersontime(this.getpersonUrl, this.$parent.$parent.allChildCookie).then(res => {
          const data = []
          for (let index = 0; index < res.data.length && index < 10; index++) {
            const element = res.data[index]
            element.name = element.name.replace(/\(.*\)/, ' ')
            element.checkTime = element.checkTime.replace('T', ' ')
            element.checkTime = element.checkTime.replace('+08:00', ' ')

            switch (element.location) {
              case '001':
                element.location = '前湖北'
                break
              case '008':
                element.location = '前湖南'
                break
              case '005':
                element.location = '青山湖校区'
                break
              case '007':
                element.location = '东湖校区'
                break
              default:
                element.location = '其他'
                break
            }

            element.pass = this.countNumber(res.data, element.userId)
            data.push(element)
          }
          this.person = data
        })
      }, 5000)
    },
    /* 计算人员登记次数 */
    countNumber (arry, value) {
      let a = 0
      arry.forEach(item => {
        if (item.userId === value) {
          a += 1
        } else {
          a += 0
        }
      })
      return a
    },
    /* 续期token */
    settoken () {
      setInterval(() => {
        renewaltoken(this.tokenURL, document.cookie)
        renewaltoken(this.tokenURL, this.$parent.$parent.responseChildCookie)
      }, 300000)
    }
  },
  mounted () {
    this.getUserName()
    this.getTotal()
    this.getPersonInfo()
    this.settoken()
    console.log(document.cookie)
  },
  components: {
    logo,
    infocard,
    totalcard,
    passcard,
    errcard
  }
})
</script>

<style scoped>
.test{
  height: 77%;
  display: grid;
  grid-template-rows: repeat(10,10%);
  overflow: hidden;
}
*{
  margin: 0;
  padding: 0;
}
.main-box{
  width: 100%;
  height: 100%;
  background-color: #212121;
  display: grid;
  grid-template-rows: 11% 81% 7.5%;
}
.logo-box{
  height: 120px;
}
.list-box{
  width: 91.7%;
  height: 100%;
  overflow: hidden;
}
.title{
  height: 14%;
}
.title-box{
  display: grid;
  grid-template-columns: repeat(3,33.3%);
  width: 100%;
  justify-items: center;
  align-items: center;
}
.title-box div{
  width: 90%;
}
.grid-box{
  height: 70px;
  display: grid;
  grid-template-columns: 1.5fr 1.25fr 1.25fr 2fr 1.5fr 1.25fr 1.25fr;
  justify-items: center;
  align-items: center;
}
.margin-box{
  margin-top: 7.5px;
  height: 6.8%;
}
strong{
  font-size: 20px;
  letter-spacing: 10px;
  margin-left: 10px;
}
.index-grid-box{
  display: grid;
  grid-template-rows: 30px 30px;
  margin-top: 10px;
}
</style>
