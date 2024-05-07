<script setup>
import { provide,ref } from 'vue';
import middle from './middle.vue'
//组件的嵌套关系
//app.vue  =>  middle.vue  =>  buttom.vue

//顶层组件提供数据
provide('name', 'this your grandfather name')

//顶层提供响应式数据
const count=ref(0)
provide('count',count)
setInterval(() => {
  count.value++
}, 3000);

//顶层提供函数(谁的数据谁负责修改)
const zero=()=>{
  count.value=0
}
provide('zero',zero)
</script>

<template>
<div>
  顶层组件
  <middle/>
</div>
</template>
