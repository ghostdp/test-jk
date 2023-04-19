<template>
  <div>
    <h4>这个一个组合式的组件</h4>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  msg: string;
  info: {
    username: string;
    age: number;
  }
}

const props = defineProps<Props>()

props.msg 
props.info

interface Emits {
  (e: 'getData', n: number): void;
}

const emit = defineEmits<Emits>()

emit('getData', 123)  // ✔
emit('getData', '123')  // ✖


</script>

<style scoped>

</style>