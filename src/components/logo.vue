<template>
  <div class="logo-box">
    <div class="img-box d-flex align-center ">
      <div v-if="logo">
        <img src="../images/himr.svg" alt="">
      </div>
      <div v-else>
        <img src="../images/ndlogo.svg">
      </div>
    </div>
    <div>
      <strong>海默AI智能测温通行系统</strong>
    </div>
    <div class="btn-box">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['control'],
  data () {
    return {
      logo: true
    }
  },
  methods: {
    controlLogo () {
      if (this.control === 0) {
        this.logo = false
      } else {
        this.logo = true
      }
    }
  },
  created () {
    this.controlLogo()
  }
})
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.img-box{
  height: 80px;
}
img{
  height: 80px;
}
strong{
  color: #FAFAFA;
  font-size: 40px;
  letter-spacing: 20px;
  margin-left: 20px;
}
.logo-box{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;
}
.btn-box{
  margin-left: -70px;
  justify-self: start;
}
</style>
