<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/AvueUseBaseCom.vue
-->
<template>
    <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
        <div
            class="px-2 pb-2 border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]"
        >
            <b>描述：</b>
            <div class="pb-2">
                <slot name="des"></slot>
            </div>
            <b>效果：</b>
            <slot name="effectDes"></slot>
            <slot name="codeEffect"></slot>
        </div>
        <b class="px-2">示例代码</b>
        <div ref="markdownBody" class="px-2 markdown-body"></div>
    </div>
</template>

<script lang="ts" setup>
import { contentApi } from '/@/api/content';
import '/src/assets/css/markdown-body.scss';
import { reactive, ref, watch } from 'vue';
import { copy, language } from '/@/utils/markdown/code'
import { highlight } from '/@/hooks/core/highlight'
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
            language(markdownBody.value)
            highlight()
            // @ts-ignore
            hljs.highlightAll();
        })
    },
    { immediate: true }
)
// @ts-ignore
window.copy = copy
</script>
