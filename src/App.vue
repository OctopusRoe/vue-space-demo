<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      /* 身份验证的URL */
      loginUrl: 'http://api.hi-mr.com:81/changtongma/api/v1/user/authtoken',
      url: 'http://api.hi-mr.com:81/changtongma/api/v1/user/subauthtoken',
      /* 本机的token */
      cookie: '',
      usercode: '',
      childCookie: '',
      responseChildCookie: '',
      controlLogo: 1
    }
  }
})
</script>
