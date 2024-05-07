<!-- <script setup>
//2,用defineProps接收数据,是编译器宏函数
defineProps({
    message:String,
    msg:String
})
</script>
<template>
<div class="son">
    <h3>子组件son</h3>
    <div>
        父组件传入的数据-{{ message }}
        响应式数据-{{ msg }}
    </div>
</div>
</template>
<style scoped>

</style> -->

<template>
<div>
    <div>子组件son</div>
    <button @click="action">触发自定义事件</button>
</div>
</template>
<script setup>
//2,通过defineEmits接收事件
const emit= defineEmits(['get-message'])
const action=()=>{
    emit('get-message','this is message')
}
</script>