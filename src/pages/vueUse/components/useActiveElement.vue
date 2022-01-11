<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useActiveElement.vue
-->
<template>
  <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
    <b class="px-2">效果</b>
    <div
      class="px-2 grid grid-cols-2 gap-4 mt-2 border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]"
    >
      <el-input v-for="i in 4" :key="i" :modelValue="`No.${i}`"></el-input>
      <p>当前选中的：{{ key }}</p>
    </div>
    <b class="px-2">示例代码</b>
    <div ref="markdownBody" class="px-2 markdown-body"></div>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import { useActiveElement } from '@vueuse/core';
const activeElement = useActiveElement();
const key = ref(null);
watch(
  activeElement,
  (el: ElRef) => {
    console.log(el);
    key.value = el.value ? el.value : 'null';
  },
  { immediate: true }
);


import { contentApi } from '/@/api/content';
import '/src/assets/css/markdown-body.scss';
import { reactive } from 'vue';
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
let code;
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
      const pre = Array.from(document.getElementsByTagName('pre'));
      code = Array.from(document.querySelectorAll('pre code'));
      pre.forEach((item, index) => {
        const html = `<figcaption class="line-numbers-head">
              <div class="custom-carbon">
                <div class="custom-carbon-dot custom-carbon-dot--red"></div>
                <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
                <div class="custom-carbon-dot custom-carbon-dot--green"></div>
              </div>
              <div class="language">vue</div>
              <a class="copy" onclick="copy(${index})" title="点击复制">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fuzhi"></use>
                </svg>
              </a>
            </figcaption>`;
        item.insertAdjacentHTML('beforebegin', html);
        item.classList.add('line-numbers');
      });
      // @ts-ignore
      hljs.highlightAll();
    })
  }
)
// @ts-ignore
window.copy = (index) => {
  const ele = document.createElement('div');
  ele.innerHTML = code[index].innerHTML;
  let copyStr = '';
  Array.from(ele.innerText).forEach((item) => {
    copyStr += item;
  });
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = copyStr;
  textarea.select();
  document.execCommand('Copy'); // 执行浏览器复制命令
  document.body.removeChild(textarea);
  alert('已复制');
};
</script>

<style lang="scss" scoped>
@import "/src/assets/css/markdown-body.scss";
</style>
