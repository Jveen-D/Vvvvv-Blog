<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>
                立刻计算eagerComputed，强烈建议先看下这篇文章
                <a
                    class="text-[a862ea]"
                    href="https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j"
                >当计算属性可能是错误的工具时</a>，文章说的是computed计算属性是惰性更新的，所以有的时候计算属性不是我们想要的结果。
            </div>
        </template>
        <template #codeEffect>
            <div>先看下惰性更新的例子</div>
            <div class="grid grid-cols-2">
                <lazyComputed></lazyComputed>
                <lazyComputedB></lazyComputedB>
            </div>
            <div>
                上面的两个小组件是一摸一样的，
                只不过有点区别的是计算属性sortedList没有在lazyComputedB组件中的template模板使用，
                所以压根就没有渲染这个属性，这就是所谓的惰性更新，只有在模板渲染读取值的时候才会去计算，
                到这里问题就暴露出来了，惰性更新固然好，尤其是对一些昂贵的操作很宝贵。
                为了解决这个问题，vueUse有一个新的api---eagerComputed
            </div>
            <div>
                <el-button @click="increase">Click me</el-button>
                <br />
                <h3>List</h3>
                <ul>
                    <pre lang="yaml">isOver5:{{ isOver5 }}</pre>
                </ul>
                <div>这里就有明显的区别了，即使模板不渲染列表，也会执行计算函数完美避开了惰性更新</div>
                <pre lang="yaml">{{ log }}</pre>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { eagerComputed } from '@vueuse/core';
import lazyComputed from './lazyComputed.vue';
import lazyComputedB from './lazyComputedB.vue';
import AvueUseBaseCom from '../../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const list = reactive([1, 2, 3, 4, 5])

const count = ref(0)
function increase() {
    count.value++
}

const isOver5 = computed(() => count.value > 5)

const log = ref('')
eagerComputed(() => {
    // imagine this to be expensive
    log.value += (isOver5.value ? [...list].reverse() : [...list]) + `\n`
    return isOver5.value ? [...list].reverse() : [...list]
})
</script>