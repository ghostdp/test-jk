import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const msg = ref('hello world')
  const doubleCount = computed<number>(() => count.value * 2)
  function increment(n: number) {
    count.value += n;
  }

  return { count, doubleCount, increment, msg }
})
