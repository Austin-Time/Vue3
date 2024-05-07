<!-- <template>
<div>{{ message }}
<button @click="logmessage">log</button>
</div> 
</template>
<script >
//利用setup函数，在页面beforecreat之前渲染
export default{
  setup(){
    console.log('setup');
    const message='this is message'
    const logmessage=()=>{
      console.log(message);
    }
    //在setup中的方法必须先return出去才能使用
    return{
      message,
      logmessage
    }
  },
  beforeCreate(){
    console.log('beforeCreate');
  }
}
</script>
 -->

 <template>
<div>
  {{ message }}
  <button @click="logmessage">log</button>
</div>
 </template>
<script setup>
//使用setup语法糖可以简写
const message='this is message'
const logmessage=()=>{
  console.log(message);
}
</script>