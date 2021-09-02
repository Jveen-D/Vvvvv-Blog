<template>
  <div :class="['lg:py-8 font-mersan duration-500 ease-in-out pt-12 lg:mx-4']">
    <div
      :class="[
        mode === 'light' ? 'bg-lightMode text-lightMode' : 'bg-darkMode  text-darkMode',
        'flex flex-col items-center w-full overflow-x-none rounded-2xl pt-4 lg:px-0 lg:pl-2 lg:p-4 lg:pb-8',
      ]"
    >
      <div
        ref="markdownBody"
        class="max-w-screen-md w-screen markdown-body p-4 lg:p-0 break-all"
      ></div>
    </div>
  </div>
</template>

<script setup>
  import { GetPostsById } from './utilsGather';
  import { ref, reactive, computed, toRefs, watch } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const state = reactive({
    postDetail: '',
    markdownBody: null,
    mode: computed(() => store.state.mode),
  });
  const { postDetail, markdownBody, mode } = { ...toRefs(state) };
  GetPostsById('191').then((res) => {
    state.postDetail = res;
    document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
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
  @import './utilsGather';
</style>
