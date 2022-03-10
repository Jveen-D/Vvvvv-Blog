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
    <div ref="question" class="px-2 markdown-body"></div>
    <el-button class="mt-2 ml-2" @click="viewAnswer">查看答案</el-button>
    <div
      ref="answer"
      style="height: var(--height)"
      :class="['transition-all px-2 markdown-body overflow-hidden']"
    ></div>
    <div class="mt-2 mb-2 ml-2 font-bold">Your code</div>
    <div ref="code" class="px-2 markdown-body">
      <figcaption class="line-numbers-head">
        <div class="custom-carbon">
          <div class="custom-carbon-dot custom-carbon-dot--red"></div>
          <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
          <div class="custom-carbon-dot custom-carbon-dot--green"></div>
        </div>
        <div class="language">TYPESCRIPT</div>
        <a></a>
      </figcaption>
      <el-input
        :autosize="{ minRows: 5 }"
        type="textarea"
        class="w-full line-numbers"
        v-model="state.code"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useCssVar, useElementSize, watchOnce } from '@vueuse/core';
  import { reactive, ref, toRefs, watch } from 'vue';
  import { contentApi } from '/@/api/content';
  import { highlight } from '/@/hooks/core/highlight';
  import { copy, language } from '/@/utils/markdown/code';
  import '/src/assets/css/markdown-body.scss';
  // props
  const props = defineProps<{
    id: number;
  }>();
  const question = ref<ElRef>(null);
  const answer = ref<ElRef>(null);
  const code = ref<ElRef>(null);
  interface State {
    postDetail: any;
    question: string;
    answer: string;
    code: string;
    showAnswer: boolean;
    answerCssVarheight: number;
  }
  const state = reactive<State>({
    postDetail: {},
    question: '',
    answer: '',
    code: '',
    showAnswer: false,
    answerCssVarheight: 0,
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
        let index = state.postDetail.formatContent.indexOf('<pre>', 1);
        question.value.innerHTML += state.postDetail.formatContent.slice(0, index);
        answer.value.innerHTML += state.postDetail.formatContent.slice(index);
        language(question.value);
        language(answer.value);
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

  const rect = reactive(useElementSize(answer));
  const setAnswerHeightVar = useCssVar('--height', answer);
  const { height } = { ...toRefs(rect) };
  // 这里只执行一次，确保获取到dom的高度
  watchOnce(height, (v) => {
    state.answerCssVarheight = v;
    // 必须这样隐藏 使用其他的方式隐藏元素会导致获取的dom高度为0
    setTimeout(() => {
      setAnswerHeightVar.value = 0 + 'px';
    });
  });
  const viewAnswer = () => {
    state.showAnswer = !state.showAnswer;
  };
  const { showAnswer } = { ...toRefs(state) };

  watch(showAnswer, (v) => {
    if (v) {
      setAnswerHeightVar.value = state.answerCssVarheight + 'px';
    } else {
      setAnswerHeightVar.value = 0 + 'px';
    }
  });
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
