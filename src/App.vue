
<template>
  <div>
    <h2>hello world</h2>
    <button @click="handleClick">点击</button>
    <button @click="handleClick2(123)">点击2</button>
    <MyDemo2 :msg="msg" :info="{username: 'xiaoming', age: 20}" @getData="handleGetData" />
    <ElButton type="primary" size="small" :loading="isLoading">按钮</ElButton>
  </div>
</template>

<script setup lang="ts">
//组合式API + TS 
  //https://cn.vuejs.org/guide/typescript/composition-api.html

//let a: number|string = 123;

import { ref, reactive, computed, watch, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import MyDemo2 from './components/MyDemo2.vue';
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from './stores/counter';
import { storeToRefs } from 'pinia'

//const count = ref(123)
//count.value = 456;   // ✔
//count.value = 'hello';  // ✖

//给ref进行类型注解
// const count = ref<number|string>(123)
// count.value = 456;   // ✔
// count.value = 'hello';  // ✔


// const info = reactive({
//   username: 'xiaoming',
//   age: 20
// })

//info.username = 123;   // ✖
//info.username = 'xiaobai';  // ✔

// interface Info {
//   username: string;
//   age: number;
// }
// const info = reactive<Info>({
//   username: 'xiaoming',
//   age: 20
// })

// interface Info {
//   username: string;
//   age: number;
//   [index: string]: any;
// }
// const info = reactive<Info>({} as Info)

// info.username = 'xiaoming'
// info.age = 20
// info.gender = '男'   // ✔

// const count = ref<number>(123)
// const doubleCount = computed<number|string>(()=> count.value * 2)

//const count: Ref<number> = ref(123)
//const doubleCount: ComputedRef<number|string> = computed(()=> count.value * 2)

// const count = ref<number>(123)
// const doubleCount = computed<number|string>(()=> count.value * 2)
// const msg = ref('hello world')
// const isLoading = ref(true)
// const handleClick = (e: MouseEvent) => {

// }

// const handleClick2 = (n: number) => {
  
// }
// const handleGetData = (n: number) => {

// }

// watch(count, (newVal, oldVal)=>{
  
// })

// onMounted(() => {

//   axios.get('/api/user').then((res)=>{
//     res.data 
//   })

// })

// const route = useRoute()   // 当前路由的信息
// const router = useRouter()   // 提供了路由的很多方法

// //route.fullPath

// router.push('/home')


const counterStore = useCounterStore()

// counterStore.count 
// counterStore.doubleCount
// counterStore.msg
// counterStore.increment(5)

const { count, doubleCount } = storeToRefs(counterStore)

</script>
<style scoped>

</style>
