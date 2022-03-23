<!--
 * @Date: 2021-06-28 10:55:47
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2022-03-23 16:09:48
 * @FilePath: \Vvvvv-Blog\src\pages\categoryLists\categoryLists.vue
-->
<template>
  <div
    :class="[
      transition
        ? 'animate__animated animate__fadeInLeft'
        : 'animate__animated animate__fadeInRight',
      'pt-12 lg:pt-20 font-mersan lg:pl-4 lg:pr-0 lg:mr-2',
    ]"
  >
    <div class="lg:-mr-[-1.05rem] lg:h-full pb-8 duration-500 ease-in-out">
      <div
        v-for="(item, index) in articleLists"
        :key="'articleLists' + index"
        :class="[
          mode === 'light' ? 'bg-gridline' : '',
          index !== 0 ? 'mt-4' : '',
          ' border border-gray-900/10 dark:bg-gray-800 text-base w-full p-4 rounded-lg duration-500 ease-in-out text-gray-700 dark:text-gray-400',
        ]"
        @click="goDetails(item.id)"
      >
        <div class="lg:flex lg:justify-between">
          <div class="font-bold transition-colors hover:text-sky-500">{{ item.title }}</div>
          <div class="mr-4 text-sm italic text-right">发布于 {{ getUpdateTime(item.createTime) }}</div>
        </div>
        <div
          class="leading-6 tracking-wide break-all lg:mt-4 lg:h-auto lg:overflow-y-none"
        >{{ item.summary }}...</div>
        <div class="flex flex-wrap items-center">
          <div
            v-for="(tag, tagIndex) in item.tags"
            :key="'tagIndex' + tagIndex"
            class="flex items-center pl-2 pr-2 mt-2 mr-2 text-xs text-white rounded-lg bg-sky-500 dark:bg-gray-400/20 flex-nowrap"
          >
            <div class="w-1 h-1 mr-2 bg-white rounded-full animate-ping"></div>
            <span class="text-xs pt-0.5">{{ tag.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getUpdateTime } from '/@/utils/date';
import { contentApi } from '/@/api/content';
import { reactive, toRefs, watch } from 'vue';

import { coreHooks } from '/@/hooks/core/coreHooks';
const { getCurrentMode, getCurrentSlug } = coreHooks();
const slug = getCurrentSlug();
const mode = getCurrentMode();

interface State {
  articleLists: Array<{
    id: string;
    title: string;
    createTime: number;
    summary: string;
    tags: Array<{
      slug: string;
      name: string;
    }>;
  }>;
  transition: boolean;
}

const Router = useRouter();
const state = reactive<State>({
  articleLists: [
    {
      id: '',
      title: '',
      createTime: 0,
      summary: '',
      tags: [
        {
          slug: '',
          name: '',
        },
      ],
    },
  ],
  transition: true,
});
const { articleLists, transition } = { ...toRefs(state) };
watch(
  slug,
  (currentV) => {
    if (currentV === 'friendLink') return;
    if (currentV) {
      state.transition = !state.transition;
      contentApi('listsPostsByCategorySlug', { sluy: currentV }).then((res) => {
        state.articleLists = res.data.content.reverse();
      });
    }
  },
  {
    immediate: true,
  }
);
const goDetails = (id) => {
  Router.push({
    path: `/detail/${id}`,
  });
};
</script>
