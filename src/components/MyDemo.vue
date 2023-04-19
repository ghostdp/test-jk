<template>
  <div>
    <h4>我是一个选项式的组件</h4>
  </div>
</template>

<script lang="ts">

import type { PropType } from 'vue'
import type { Info } from '../types/Users'

export default {
  props: {
    // vue的js版本中的类型限定
    msg: String,
    //msg: [String, Number],
    //info: Object as PropType<Info>,
    info: {
      type: Object as PropType<Info>,
      default: {}
    }
  },
  emits: {
    getData(data: number) {
      return true;
    }
  },
  mounted() {
    //this.msg = 'xxx'   //✖

    //this.$emit('getData', 123)  // ✔
    //this.$emit('getData', '123')  // ✖
  }
}
</script>

<style scoped>

</style>