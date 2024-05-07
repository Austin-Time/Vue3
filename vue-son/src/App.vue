<!-- <template>
  <div class="father">
  <h2>父组件APP</h2>
  1.绑定属性
  <son message="father message" :msg="msg" />
  </div> 
  </template>
  
<script setup>
//父传子
import son from './son.vue'
//在setup语法糖下局部组件无需注册即可使用
import {ref} from 'vue'
const msg = ref('black')
setTimeout(() => {
  msg.value = 'red'
}, 3000);
</script>
 -->


<template>
<div>
  <h2>父组件APP</h2>
  <!-- 1，绑定事件 -->
  <son @get-message="getmessage"/>
</div>
</template>
<script setup>
import son from './son.vue'
const getmessage = (msg) => {
  console.log(msg);
}
</script>