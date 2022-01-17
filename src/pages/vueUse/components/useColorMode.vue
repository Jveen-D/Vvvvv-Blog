<!--
 * @Date: 2022-01-12 10:50:02
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useColorMode.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>改变主题</template>
        <template #codeEffect>
            <div>当前主题：{{ mode }}</div>
            <el-button @click="() => next()">
                <div>点击切换主题</div>
            </el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useColorMode, useCycleList } from '@vueuse/core'
const mode = useColorMode({
    /**
     * 在向属性添加值时的前缀，根据键名匹配，举个栗子🌰，假如当前模式为dark，那么就会变成darkMode
     * mdoes的映射是根据useCycleList(['dark', 'light','cafe'])来定义的
     * 还有一点需要注意的是，tailwindcss的主题切换和useColorMode是一样的，
     * 所以当只有dark和light时，表现行为是相同的，当然主题是自定义的，dark和light只是示例
     * */
    modes: {
        dark:'dark',
        light: 'light',
    },
    // onChanged回调，改变之后触发
    // onChanged:(mode)=>{
    //     console.log(mode)
    // }
})
const { next } = useCycleList(['dark', 'light'], { initialValue: mode })
</script>