<template>
  <div>
    <v-card max-width="1760px" height="60px" min-height="45px" dark class="grid-box" :class="style">
      <div class="d-flex justify-center align-center">{{id}}</div>
      <div class="d-flex justify-center align-center">{{name}}</div>
      <div class="d-flex justify-center align-center">{{temperature}}</div>
      <div class="d-flex justify-center align-center">{{time}}</div>
      <div class="d-flex justify-center align-center">{{location}}</div>
      <div class="d-flex justify-center align-center">{{pass}}</div>
      <div class="d-flex justify-center align-center">
        <div v-if="canPass">
          <div class="green-box"></div>
        </div>
        <div v-else>
          <strong>
            <v-icon size="30" color="yellow darken-4">iconfont icon-RectangleCopy</v-icon>
          </strong>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['id', 'name', 'time', 'temperature', 'location', 'pass', 'controlnumber'],
  data () {
    return {
      canPass: true,
      style: {
        redstyle: false
      }
    }
  },
  methods: {
    hightTemperature () {
      if (this.temperature > 37.3) {
        this.canPass = false
        this.style.redstyle = true
      }
    }
  },
  watch: {
    temperature (newvalue, old) {
      if (newvalue > 37.3) {
        this.canPass = false
        this.style.redstyle = true
      } else {
        this.canPass = true
        this.style.redstyle = false
      }
    }
  },
  created () {
    this.hightTemperature()
  }
})
</script>

<style scoped>
@import url('../fonts/iconfont.css');

*{
  margin: 0;
  padding: 0;
}
.grid-box{
  display: grid;
  grid-template-columns: 1.5fr 1.25fr 1.25fr 2fr 1.5fr 1.25fr 1.25fr;
  height: 100%;
}
.redstyle{
  background-color: rgba(255,0,0,0.6);
}
.green-box{
  width: 20px;
  height: 20px;
  background-color: #388E3C;
  border-radius: 50%;
}
</style>
