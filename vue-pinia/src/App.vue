<script setup>
//1,导入use 打头的方法
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue';
//2,执行方法得到store实例对象
const counterStore = useCounterStore()
console.log(counterStore);
onMounted(()=>{
  counterStore.getlist()
})
</script>

<template>
  <div>
    <button @click="counterStore.increment">{{ counterStore.count }}
      -{{ counterStore.doubleCount }}</button>
     
  </div>
  <div>
    <ul>
        <li v-for="item in counterStore.list" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
  </div>
</template>

