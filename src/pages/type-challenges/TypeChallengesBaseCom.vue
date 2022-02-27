<template>
  <div class="w-full h-full pb-4 overflow-y-auto text-gray-700 dark:text-gray-200">
    <div class="px-2 pb-2 border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]">
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
  // props
  const props = defineProps<{
    id: number;
  }>();
  console.log(props.id);
</script>
<style scoped lang="scss"></style>
