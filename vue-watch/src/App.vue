<!-- <script setup>
import {ref,watch} from 'vue'
const count =ref(0)
//watch侦听单个数据源
watch(count,(newValue,oldValue)=>{
  console.log(`count发生了变化，老值为${oldValue},新值为${newValue}`);
})
const add=()=>{
count.value++
}
</script>
<template>
 <div>
  <button @click="add">{{ count }}</button>
 </div>
</template> -->

<!-- <template>
<div>
  <button @click="countchange">{{ count }}</button>
  <button @click="namechange">{{ name }}</button>
</div>
</template>
<script setup>
import {ref,watch} from 'vue'
const count=ref(0)
const countchange=()=>{
  count.value++
}
const name=ref('cp')
const namechange=()=>{
  name.value='pc'
}
//watch侦听多个数据
watch([count,name],([newcount,newname],[oldcount,oldname])=>{
  console.log("count或者name发生了变化",[newcount,newname],[oldcount,oldname]);
})
</script> -->


<!--  <template>
<div>
<button @click="countchange">{{ count }}</button>
</div>
</template>
<script setup>
import {ref,watch} from 'vue'
const count=ref(0)
const countchange=()=>{
  count.value++
}
watch(count,(newValue,oldValue)=>{
console.log(newValue,oldValue);
},{
  //立即执行
  immediate:true
})
</script> -->

<!-- <template>
<div>
  {{ state.count }}
  <button @click="countchange">按钮</button>
  </div>
</template>
<script setup>
import {ref,watch} from 'vue'
const state=ref({count:0})
const countchange=()=>{
state.value.count++
//直接修改对象的属性不会回调watch
}
watch(state,()=>{
  console.log("count变化了",state.value.count);
},{deep:true}
)
</script> -->

<template>
<div>
  <div>当前name--{{ state.name  }}</div>
  <div>当前age--{{ state.age  }}</div>
  <div>
    <button @click="changename">修改name</button>
    <button @click="changeage">修改age</button>
  </div>
</div>
</template>
<script setup>
import {ref,watch} from 'vue'
const state=ref({
  name:'cp',
  age:18
})

const changename=()=>{
  //修改name
  state.value.name='couple'
}

const changeage=()=>{
  //修改age
  state.value.age=20
}
//精确侦听某个具体的属性,防止资源浪费
//运用两个回调函数
/* watch(
  ()=>state.value.name,
  ()=>{
    console.log("name变化了");
  }
) */
watch(
  ()=>state.value.name,
  (newValue,oldValue)=>{
    console.log("name变化了",newValue,oldValue);
  }
)
</script>