<template>
  <div class="box">
    <v-card max-width="480px" max-height="80px" color="blue darken-3" flat class="grid-box">
      <div class="justify-box">
        <div style="marginLeft:10px">累计检测人数</div>
        <div style="marginLeft:10px;fontSize:25px" class="font-weight-bold">{{totalnumber}}</div>
      </div>
      <div>
        <v-icon size="60">iconfont icon-RectangleCopy2</v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: ['totalnumber']
})
</script>

<style scoped>
@import url('../fonts/iconfont.css');
*{
  margin: 0;
  padding: 0;
}
.box{
  width: 100%;
  height: 100%;
}
.grid-box{
  display: grid;
  grid-template-columns: 70% 30%;
  justify-items: center;
  align-items: center;
}
.justify-box{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 40% 60%;
  align-items: center;
}
</style>
