<script setup>
import {inject} from 'vue'

//2,接收数据
const childname=inject('name')
//接收响应式数据
const childref=inject('count')
//接收顶层函数
const getfunction=inject('zero')

</script>
<template>
<div>
    底层组件
    <div>
        来自顶层的数据:{{ childname }}
    </div>
    <div>来自顶层的响应式数据:{{ childref }}</div>
    <div>
        <button @click="getfunction">清零</button>
    </div>
</div>

</template>