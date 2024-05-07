<script setup>
//响应式对象-reactive
//1，导入函数
import {reactive} from 'vue'
//2，执行函数，传入一个对象类型的参数,变量接收,只能传送对象类型的参数
const state = reactive({
  count:0
})
const add = () => {
  state.count++
}
const reduce = () => {
  state.count--
}
const action=(id)=>{
if(id=='add'){
  console.log("点击了增加按钮");
}
else{
  console.log("点击了减少按钮");
}
}
</script>
<template>
<button @click="add" id="add">增加</button>
<br>
<button @click="reduce" id="reduce">减少</button>
<p>{{state.count}}</p>
</template>


<!-- <template>
  <button @click="add">{{ count }}</button>
  </template>
  
  <script setup>
 //1，导入ref函数
  import { ref } from "vue";
  //1，执行函数 传入参数[简单类型或对象类型] 变量接收
  const count = ref(0);
//  3，脚本区域修改ref产生的响应式对象数据，必须通过.value属性
  const add = () => {
    count.value++;
  };

  </script> -->
  