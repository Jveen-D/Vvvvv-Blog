<template>
  <div :class="['lg:py-8 font-mersan duration-500 ease-in-out pt-12 lg:mx-2']">
    <div
      :class="[
        mode === 'light' ? 'bg-gridline' : '',
        'text-gray-700 dark:text-white flex flex-col items-center w-full  rounded-2xl pt-4 lg:px-0 lg:pl-2 lg:p-4 lg:pb-8',
      ]"
    >
      <div
        class="flex justify-center text-2xl subpixel-antialiased transition-colors hover:text-sky-500"
      >
        <h1>{{ postDetail.title }}</h1>
      </div>
      <div class="flex flex-col items-center mt-4 text-sm lg:flex-row lg:justify-center">
        <div class="flex items-center mr-4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili" />
          </svg>
          <div>{{ createTime }}</div>
        </div>
        <div class="flex items-center mr-4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tongji" />
          </svg>
          <div>字数统计:{{ postDetail.wordCount }}</div>
        </div>
        <div class="flex items-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renshu" />
          </svg>
          <div>累计看过:{{ postDetail.visits }}</div>
        </div>
      </div>
      <div
        ref="markdownBody"
        class="w-screen max-w-screen-lg p-4 break-all markdown-body lg:p-0"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { contentApi } from '/@/api/content';
  import { getUpdateTime } from '/@/utils/date';
  import { computed, reactive, toRefs } from 'vue';
  import { useStore } from 'vuex';
  import '/src/assets/css/markdown-body.scss';

  import { coreHooks } from '/@/hooks/core/coreHooks';
  const { getCurrentMode, getCurrentId, getShadow } = coreHooks();
  const mode = getCurrentMode();
  const id = getCurrentId();
  const shadow = getShadow();

  interface State {
    postDetail: {
      title: string;
      createTime: string;
      formatContent: string;
      categories: Array<{
        slug: string;
      }>;
      wordCount: string;
      visits: string;
    };
    markdownBody: any;
    createTime: string;
  }

  const store = useStore();
  const state = reactive<State>({
    postDetail: {
      title: '',
      createTime: '',
      formatContent: '',
      categories: [],
      wordCount: '',
      visits: '',
    },
    markdownBody: null,
    createTime: '',
  });
  const { postDetail, markdownBody, createTime } = { ...toRefs(state) };
  let code;
  contentApi('getPostsById', {
    postId: id.value,
    formatDisabled: false,
    sourceDisabled: true,
  }).then((res) => {
    state.postDetail = res.data;
    document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
    state.createTime = getUpdateTime(Number(state.postDetail.createTime));
    state.markdownBody.innerHTML += state.postDetail.formatContent;
    store.dispatch(
      'ChangeSlug',
      computed(() => state.postDetail.categories[0].slug)
    );
    const pre = Array.from(document.getElementsByTagName('pre'));
    code = Array.from(document.querySelectorAll('pre code'));
    // 获取markdownBody中返回的img节点数组
    const imgArr = Array.from(markdownBody.value.getElementsByTagName('img'));
    if (imgArr.length) {
      imgArr.forEach((item: any) => {
        // 为节点数组增加点击事件
        item.onclick = () => {
          console.log(item.src);
          console.log(item.getBoundingClientRect());
          // 获取各个图片节点相对于视口的位置还有图片的宽高
          let { width, height, left, top } = item.getBoundingClientRect();
          store.dispatch('ChangeShadow', true);
          store.dispatch('ChangeShadowImg', {
            width,
            height,
            left,
            top,
            src: item.src,
          });
        };
      });
    }
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
  });
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
<style scoped lang="scss">
  @import './postDetail.scss';
</style>
