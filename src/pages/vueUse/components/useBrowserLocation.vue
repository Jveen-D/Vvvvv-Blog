<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useBrowserLocation.vue
-->
<template>
    <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
        <div class="px-2 border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]">
            <b>描述</b>
            <div class="pb-2">返回当前浏览器信息</div>
            <b>效果</b>
            <div v-for="(item,name) in location" :key="name">{{name}} : {{item}}</div>
        </div>

        <b class="px-2">示例代码</b>
        <div ref="markdownBody" class="px-2 markdown-body"></div>
    </div>
</template>

<script lang="ts" setup>
import { useBrowserLocation } from '@vueuse/core'
const location = useBrowserLocation()


import { contentApi } from '/@/api/content';
import '/src/assets/css/markdown-body.scss';
import { reactive, watch, ref } from 'vue';
import { markdownCode } from '/@/utils/markdown/code'
const { language, copy } = markdownCode()
// props
const props = defineProps<{
    id: number;
}>();
const markdownBody = ref<ElRef>(null)
interface State {
    postDetail: any
}
const state = reactive<State>({
    postDetail: {}
})
watch(
    () => props.id,
    (id) => {
        if (id === 0) return
        contentApi('getPostsById', {
            postId: id,
            formatDisabled: false,
            sourceDisabled: true,
        }).then((res) => {
            state.postDetail = res.data;
            document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
            markdownBody.value.innerHTML += state.postDetail.formatContent;
            language()
            // @ts-ignore
            hljs.highlightAll();
        })
    },
    { immediate: true }
)
// @ts-ignore
window.copy = copy
</script>

<style lang="scss" scoped>
@import "/src/assets/css/markdown-body.scss";
</style>
