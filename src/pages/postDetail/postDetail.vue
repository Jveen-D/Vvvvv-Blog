<template>
  <div
    :class="[
      mode === 'light' ? 'bg-lightMode bg-white text-lightMode' : 'bg-darkMode  text-darkMode',
      'md:mx-4 mt-8 rounded-2xl font-mersan duration-500 ease-in-out',
    ]"
  >
    <div
      id="xx"
      class="
        flex flex-col
        items-center
        w-full
        overflow-x-none
        pt-8
        pb-8
        px-4
        md:px-0 md:pl-2 md:p-4
      "
    >
      <div
        class="
          flex
          justify-center
          text-2xl
          subpixel-antialiased
          transition-colors
          hover:text-FF9100
        "
      >
        <h1>{{ postDetail.title }}</h1>
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-center text-sm mt-4">
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
        class="max-w-screen-md w-screen markdown-body p-4 md:p-0 break-all"
      ></div>
    </div>
  </div>
</template>
<script setup>
  import { GetPostsById } from './postDetail';
  import { useRouter } from 'vue-router';
  import { computed, reactive, toRefs, watch } from 'vue';
  import { useStore } from 'vuex';
  import './postDetail.scss';
  import { getUpdateTime } from '@/utils/date';

  const Router = useRouter();
  const store = useStore();
  const state = reactive({
    id: computed(() => Router.currentRoute.value.params.id),
    postDetail: '',
    markdownBody: null,
    createTime: '',
    slug: computed(() => store.state.slug),
    mode: computed(() => store.state.mode),
  });
  const { id, postDetail, markdownBody, createTime, mode } = { ...toRefs(state) };
  let code;
  watch(
    id,
    (currentV) => {
      if (currentV) {
        GetPostsById(currentV).then((res) => {
          state.postDetail = res;
          document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
          state.createTime = getUpdateTime(state.postDetail.createTime);
          state.markdownBody.innerHTML += state.postDetail.formatContent;
          store.dispatch(
            'ChangeSlug',
            computed(() => state.postDetail.categories[0].slug)
          );
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
      }
    },
    {
      immediate: true,
    }
  );
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
