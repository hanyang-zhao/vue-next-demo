<template>
  <div>
    <div>
      <input type="text" v-model="count">
      <button class="btn" @click="add">+</button>
      <button class="btn" @click="minus">-</button>
    </div>
    <p>{{count}}</p>
    <p>[ <i v-for="(v, i) in arr" :key="v">{{i > 0 ? `, ${v}` : v}}</i> ]</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'demo',
  setup () {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    const minus = () => {
      count.value--
    }
    const arr = ref([1, 2, 3])
    return {
      count,
      add,
      minus,
      arr
    }
  }
}
</script>

<style lang="less" scoped>
  .btn{
    padding: 1px 10px;
    margin-left: 5px;
  }
</style>
