<!--
 * @Date: 2022-01-17 10:20:42
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useEventListener.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>事件监听</template>
        <template #codeEffect>
            <div>当前监听事件：dblclick</div>
            <div ref="element">
                <el-button>这里是测试区域。。。 -_-!!!</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref } from 'vue'
const element = ref<HTMLDivElement>()
import { useEventListener } from '@vueuse/core'
/**
 * event有很多常用的
 * ['mousemove', 'mousedown', 'mouseleave', 'mouseover','mouseup', 'mouseleave', 'dblclick', 'keydown', 'keyup' 'resize', 'touchstart', 'wheel']
 * 更多的参考https://www.cnblogs.com/summerxbc/p/13865952.html
 * */
useEventListener(element, 'dblclick', (evt) => { console.log(evt) })
</script>
