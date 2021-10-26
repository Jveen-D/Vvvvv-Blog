<template>
  <div class="h-full">
    <div
        :class="[
            mode === 'light' ? 'lightMode text-lightMode' : 'bg-darkMode  text-darkMode',
        'hidden min:block  min:w-64 fixed top-0 left-0 mt-8 rounded-xl hidden bg-white h-util pt-4 pl-4 font-bold whitespace-nowrap font-medium text-sm']
      "
    >
      <div v-for="(item, index) in h4Arr" :key="index" class="hover:text-FF9100">
        <a :href="'#' + item.innerText">{{ item.innerText }}</a>
      </div>
    </div>
    <div
        :class="[
        'relative lg:py-8 font-mersan duration-500 ease-in-out pt-12 lg:ml-17 h-full overflow-y-scroll',
      ]"
    >
      <div
          :class="[
          mode === 'light' ? 'lightMode text-lightMode' : 'bg-darkMode  text-darkMode',
          'flex justify-center w-full overflow-x-none rounded-2xl lg:p-4 lg:pb-8 relative',
        ]"
      >
        <span class="absolute top-4 right-4 text-black font-mersan font-medium text-sm transition-colors ">累计看过：{{ postDetail.visits }}</span>
        <div
            ref="markdownBody"
            class="flex-1 w-screen min-w-800 markdown-body p-4 lg:p-0 break-all"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {contentApi} from "/@/api/content";
import {computed, reactive, toRefs} from 'vue';
import {useStore} from 'vuex';
import '/src/assets/css/markdown-body.scss';

interface State{
  postDetail:string,
  markdownBody:any
}

const store = useStore();
const state = reactive({
  postDetail: '',
  markdownBody: null,
  mode: computed(() => store.state.mode),
  h4Arr: '',
});
const {postDetail, markdownBody, mode, h4Arr} = {...toRefs(state)};
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
  // eslint-disable-next-line no-undef
  hljs.highlightAll();
  // 取出h4标签集合
  state.h4Arr = Array.from(document.getElementsByTagName('h4'));
  state.h4Arr.forEach((item, index) => {
    item.innerHTML = `<a name='${item.innerText}'>${item.innerText}</a>`;
  });
});

let code;
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
