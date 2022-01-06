<!--
 * @Date: 2021-12-12 09:53:08
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/utilsGather/utilsGather.vue
-->
<template>
  <div class="flex">
    <div
      class="fixed left-0 hidden p-4 text-sm font-medium bg-white top-8 lg:block min:w-64 rounded-xl whitespace-nowrap"
    >
      <div v-for="(item, index) in h4Arr" :key="index" class="hover:text-[#0ea5e9]">
        <a :href="'#' + item.innerText">{{ item.innerText }}</a>
      </div>
    </div>
    <div
      :class="[
        'flex-1 lg:py-8 font-mersan duration-500 ease-in-out lg:ml-17 overflow-y-scroll',
      ]"
    >
      <div class="relative flex justify-center overflow-x-none rounded-2xl lg:pb-8">
        <span
          class="absolute hidden text-sm font-medium text-black transition-colors dark:text-white min:block top-4 right-4 font-mersan"
          >累计看过：{{ postDetail.visits }}</span
        >
        <div ref="markdownBody" class="w-full p-4 break-all markdown-body lg:p-0"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { contentApi } from '/@/api/content';
  import { reactive, toRefs } from 'vue';
  import '/src/assets/css/markdown-body.scss';

  interface State {
    postDetail: {
      title: string;
      visits: string;
      formatContent: string;
    };
    markdownBody: any;
    h4Arr: any;
  }

  const state = reactive<State>({
    postDetail: {
      title: '',
      visits: '',
      formatContent: '',
    },
    markdownBody: null,
    h4Arr: [],
  });
  const { postDetail, markdownBody, h4Arr } = { ...toRefs(state) };
  contentApi('getPostsById', {
    postId: '191',
    formatDisabled: false,
    sourceDisabled: true,
  }).then((res) => {
    state.postDetail = res.data;
    document.title = `Vvvvv-Blog! - ${state.postDetail.title}`;
    state.markdownBody.innerHTML += state.postDetail.formatContent;
    const pre = Array.from(document.getElementsByTagName('pre'));
    code = Array.from(document.querySelectorAll('pre code'));
    pre.forEach((item, index) => {
      const language = item.children[0].classList[0].split('-')[1].toUpperCase();
      const html = `<figcaption class="line-numbers-head">
              <div class="custom-carbon">
                <div class="custom-carbon-dot custom-carbon-dot--red"></div>
                <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
                <div class="custom-carbon-dot custom-carbon-dot--green"></div>
              </div>
              <div class="language">${language}</div>
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
    // 取出h4标签集合
    state.h4Arr = Array.from(document.getElementsByTagName('h4'));
    state.h4Arr.forEach((item) => {
      item.innerHTML = `<a name='${item.innerText}'>${item.innerText}</a>`;
    });
  });

  let code;
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
  @import './utilsGather.scss';
</style>
