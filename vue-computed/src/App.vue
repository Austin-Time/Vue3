<script setup>
import {ref} from 'vue'
//1,导入computed
import {computed} from 'vue'
const list=ref([1,2,3,4,5,6,7,8])
//2，执行函数 return计算之后的值 变量接收
const result=computed(()=>{
  return list.value.filter(item=>item>2)
})
setTimeout(() => {
  list.value.push(9,10)
}, 3000);
</script>
<template>
 <div>
  原始响应式数据-{{ list }}
 </div>
<div>计算属性数组-{{ result }}</div>
</template>