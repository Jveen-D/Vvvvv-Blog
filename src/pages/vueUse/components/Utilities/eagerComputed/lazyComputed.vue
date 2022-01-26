<template>
    <div>
        <el-button @click="increase">Click me</el-button>
        <br />
        <h3>List</h3>
        <ul>
            <pre lang="yaml">isOver5:{{ isOver5 }}</pre>
            <span v-for="item in sortedList">{{ item }}</span>
        </ul>
        <pre lang="yaml">{{log}}</pre>
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, computed, onUpdated } from 'vue'

const list = reactive([1, 2, 3, 4, 5])

const count = ref(0)
function increase() {
    count.value++
}

const isOver5 = computed(() => count.value > 5)

const log = ref('')
const sortedList = computed(() => {
    // imagine this to be expensive
    log.value += (isOver5.value ? [...list].reverse() : [...list]) + `\n`
    return isOver5.value ? [...list].reverse() : [...list]
})

onUpdated(() => {
    // this eill log whenever the component re-renders
    console.log('component re-rendered!')
})
</script>