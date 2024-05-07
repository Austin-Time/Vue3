//导入一个方法defineStore
import { defineStore } from 'pinia'
import { ref,computed} from 'vue'
import axios from 'axios'
const API_URL="http://geek.itheima.net/v1_0/channels"
export const useCounterStore =defineStore('counter', ()=>{
//定义数据(state)
const count = ref(0)

//直接解构赋值(响应式丢失)
//const {count}=useCounterStore()
//解构赋值,如果既想保持响应式更新又想解构赋值则需要方法包裹
//1,引入storeToRefs
//import { storeToRefs } from 'pinia'
//2,方法包裹
//const {count}=storeToRefs(useCounterStore)
//3，引用可以直接引用不用加点

//定义修改数据的方法(actions 同步+异步)
const increment = ()=>{
    count.value++
}
//getter定义
const doubleCount = computed(()=>{
    return count.value * 2
})
//定义异步action
const list=ref([])
const getlist=async()=>{
const res= await axios.get(API_URL)
list.value=res.data.data.channels
}
//以对象的形式return供组件使用
return{
    count,
    increment,
    doubleCount,
    list,
    getlist
}
})