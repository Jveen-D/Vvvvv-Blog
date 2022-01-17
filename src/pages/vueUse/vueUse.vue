<!--
 * @Date: 2022-01-10 13:37:12
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/vueUse.vue
-->
<template>
    <div class="flex">
        <div
            class="flex-shrink-0 w-[200px] pt-2 pl-4 text-gray-700 dark:text-gray-200 border-r border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]"
        >
            <div
                v-for="(item, index) in state.categoryList"
                :key="index"
                :class="[
                    state.activeComponent === item.title ? 'text-sky-500 dark:text-sky-400' : '',
                    'hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500 font-bold',
                ]"
                @click="changeComponent(item.title,item.id)"
            >{{ item.title }}</div>
        </div>
        <!-- 失活的组件将会被缓存！-->
        <!-- <keep-alive> -->
        <component class="flex-1 flex-shrink-0 pt-2" :is="state.activeComponent" :id="state.id"></component>
        <!-- </keep-alive> -->
    </div>
</template>
<script lang="ts">
// 因为使用了动态组件，所以这里需要额外注册一下组件，如果直接在setup语法糖内导入组件那么传递给:is的变量没有作用
import { defineComponent } from 'vue';
import useActiveElement from './components/useActiveElement.vue';
import useBreakpoints from './components/useBreakpoints.vue';
import useBroadcastChannel from './components/useBroadcastChannel.vue';
import useBrowserLocation from './components/useBrowserLocation.vue';
import useClipboard from './components/useClipboard.vue';
import useColorMode from './components/useColorMode.vue';
import useCssVar from './components/useCssVar.vue';
import useDark from './components/useDark.vue';
import useEventListener from './components/useEventListener.vue';
import useEyeDropper from './components/useEyeDropper.vue';
export default defineComponent({
    components: {
        useActiveElement,
        useBreakpoints,
        useBroadcastChannel,
        useBrowserLocation,
        useClipboard,
        useColorMode,
        useCssVar,
        useDark,
        useEventListener,
        useEyeDropper
    },
});
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { contentApi } from '/@/api/content';
import { coreHooks } from '/@/hooks/core/coreHooks';
const { dispatchChangeSlug, getCurrentComponentName } = coreHooks();
dispatchChangeSlug('vueuse');
const componentName = getCurrentComponentName();
interface State {
    id: number; // 文章的id
    activeComponent: string;
    categoryList: Array<{ [propName: string]: any }>;
}
const state = reactive<State>({
    id: 0,
    activeComponent: componentName.value,
    categoryList: [],
});
/**
 * @description: 获取vueUse列表
 * @param {*}
 * @return {*}
 */
contentApi('listsPostsByCategorySlug', { sluy: 'vueuse' }).then((res) => {
    state.categoryList = res.data.content.sort((a,b)=>a.id - b.id);
    state.categoryList.forEach((item)=>{
        if(item.slug.toLowerCase() === componentName.value.toLowerCase()){
            state.id = item.id
        }
    })
});
const Router = useRouter();
/**
 * @description: 切换vueUse组件
 * @param {*}
 * @return {*}
 */
const changeComponent = (componentName,id) => {
    state.id = id
    state.activeComponent = componentName;
    Router.push({
        path: `/vueUse/${componentName}`,
    });
};
</script>

<style lang="scss" scoped></style>
