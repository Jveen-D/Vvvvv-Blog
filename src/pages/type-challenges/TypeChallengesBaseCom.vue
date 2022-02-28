<template>
  <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
    <div class="px-2 pb-2 border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]">
      <div class="pb-2">
        <b>题目：</b>
        <!-- 题目等级：easy、medium、hard和extreme -->
        <slot name="des"></slot>
        <slot v-if="Object.keys($slots).includes('easy')" name="easy">
          <el-tag class="ml-2">简单</el-tag>
        </slot>
        <slot v-if="Object.keys($slots).includes('medium')" name="medium">
          <el-tag class="ml-2" type="success">中等</el-tag>
        </slot>
        <slot v-if="Object.keys($slots).includes('hard')" name="hard">
          <el-tag class="ml-2" type="warning">困难</el-tag>
        </slot>
        <slot v-if="Object.keys($slots).includes('extreme')" name="extreme">
          <el-tag class="ml-2" type="danger">极难</el-tag>
        </slot>
      </div>
      <b>描述：</b>
      <slot name="questionDes"></slot>
      <p class="mt-2 font-bold">例如：</p>
      <slot name="example"></slot>
    </div>
    <b class="px-2">
      <el-button>查看答案</el-button>
      <slot name="answer"></slot>
    </b>
    <div ref="markdownBody" class="px-2 markdown-body"></div>
  </div>
</template>
<script setup lang="ts">
  import { contentApi } from '/@/api/content';
  import { reactive, ref, watch } from 'vue';
  import { copy, language } from '/@/utils/markdown/code';
  import { highlight } from '/@/hooks/core/highlight';
  // props
  const props = defineProps<{
    id: number;
  }>();
  const markdownBody = ref<ElRef>(null);
  interface State {
    postDetail: any;
  }
  const state = reactive<State>({
    postDetail: {},
  });
  watch(
    () => props.id,
    (id) => {
      if (id === 0) return;
      contentApi('getPostsById', {
        postId: id,
        formatDisabled: false,
        sourceDisabled: true,
      }).then((res) => {
        state.postDetail = res.data;
        document.title = `Vvvvv-Blog! - ` + state.postDetail.title;
        markdownBody.value.innerHTML += state.postDetail.formatContent;
        language(markdownBody.value);
        highlight();
        // 规避控制台报错
        try {
          // @ts-ignore
          hljs.highlightAll();
        } catch {}
      });
    },
    { immediate: true }
  );

  // @ts-ignore
  window.copy = copy;
</script>
<style scoped lang="scss">
  a {
    display: inline-block;
    cursor: pointer;
    padding-bottom: 2px;
    text-decoration: none;
    position: relative;
    font-weight: 400;
    color: #a862ea;
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    &:after {
      content: '';
      position: absolute;
      width: 98%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      background-color: #a862ea;
      transform-origin: bottom right;
      transition: transform 0.3s ease-in-out;
    }
  }
</style>
