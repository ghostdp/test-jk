
<template>
  <div>
    <h2>hello world</h2>
    <button @click="handleClick">点击1</button>
    <button @click="handleClick2(100)">点击2</button>
    <!-- <MyDemo :msg="msg2" :info="{username: 'xiaoming', age: 20}" @getData="handleGetData" /> -->
  </div>
</template>

<script lang="ts">

// 选项式API + TS 
  // https://cn.vuejs.org/guide/typescript/options-api.html

// 组合式API + TS 配合会更好

import MyDemo from './components/MyDemo.vue'

type Msg = string | number;
type List = number[];

export default {
  data() {
    return {
      count: 123,
      msg: 'hello' as Msg,
      msg2: 'hello',
      list: [] as List,
    }
  },
  computed: {
    // 计算属性也可以做类型注解，计算属性一般都自动推断类型，很少进行类型注解
    doubleCount(): number|string{
      return this.count * 2
    },
    upperMsg() {
      // 1. 断言  2. 保护
      if(typeof this.msg === 'string') {
        return this.msg.toUpperCase()
      }
      else {
        return '';
      }
    }
  },
  methods: {
    handleClick(e: MouseEvent) {

    },
    handleClick2(n: number) {

    },
    handleGetData(data: string) {
      console.log(data)
    }
  },
  watch: {
    count(newVal: number, oldVal: number) {
     
    }
  },
  components: {
    MyDemo
  },
  mounted() {
    // this.count = 'hello'   // ✖
    // this.count = 456;   // ✔
    // this.msg = 'hi';  // ✔
    // this.msg = 123;   // ✔
    // this.msg = true;  // ✖
    // this.list.push(1, 2, '3')  // ✖
    // this.doubleCount
  }
}

</script>
<style scoped>

</style>
