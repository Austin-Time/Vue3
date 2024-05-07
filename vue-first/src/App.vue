<template>
<button @click="add">{{ count }}</button>
</template>

<script setup>
//vue3的代码
import { ref } from "vue";
const count = ref(0);
const add = () => {
  count.value++;
};
//vue2的代码
/* export default{
  data(){
    return{
      count:0
    }
  },
  methods:{
    add(){
      this.count++
    }
  }
} */
</script>


