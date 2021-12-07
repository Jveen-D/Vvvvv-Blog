<!--
 * @Date: 2021-06-28 10:55:47
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-07 20:28:27
 * @FilePath: \Vvvvv-Blog\src\pages\categoryLists\categoryLists.vue
-->
<template>
  <div
    :class="[
      transition
        ? 'animate__animated animate__fadeInLeft'
        : 'animate__animated animate__fadeInRight',
      'mx-4 lg:mx-8 pt-12 lg:pt-8 font-mersan',
    ]"
  >
    <div class="lg:-mr-1+1/20 lg:h-full pb-8 duration-500 ease-in-out">
      <div
        v-for="(item, index) in articleLists"
        :key="'articleLists' + index"
        :class="[
          mode === 'light' ? 'lightMode' : 'bg-darkMode',
          index !== 0 ? 'mt-4' : '',
          'w-full p-4 rounded-lg duration-500 ease-in-out',
        ]"
        @click="goDetails(item.id)"
      >
        <div class="lg:flex lg:justify-between">
          <div
            :class="[
              mode === 'light' ? 'text-black' : '',
              ' font-bold transition-colors  hover:text-FF9100',
            ]"
            >{{ item.title }}</div
          >
          <div class="mr-4 text-sm italic text-right"
            >发布于 {{ getUpdateTime(item.createTime) }}</div
          >
        </div>
        <div class="leading-6 tracking-wide break-all lg:mt-4 lg:h-auto lg:overflow-y-none"
          >{{ item.summary }}...</div
        >
        <div class="flex flex-wrap items-center">
          <div
            v-for="(tag, tagIndex) in item.tags"
            :key="'tagIndex' + tagIndex"
            class="flex items-center pl-2 pr-2 mt-2 mr-2 text-xs text-white bg-blue-700 rounded-l-lg flex-nowrap"
            @click.stop="changeSlug(tag.slug)"
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
  import { computed, ComputedRef, reactive, toRefs, watch } from 'vue';
  import { useStore } from 'vuex';

  import { currentDevelopment } from '/@/hooks/core/currentDevelopment';
  
  const { getCurrentSluy } = currentDevelopment();
  getCurrentSluy()
  
  interface State {
    slug: ComputedRef<string>;
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
    tagSlug: string;
    mode: ComputedRef<string>;
    transition: boolean;
  }

  const Router = useRouter();
  const store = useStore();
  const state = reactive<State>({
    slug: computed(() => Router.currentRoute.value.params.slug as string),
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
    tagSlug: '',
    mode: computed(() => store.state.mode),
    transition: true,
  });
  const { slug, articleLists, tagSlug, mode, transition } = { ...toRefs(state) };

  watch(
    slug,
    (currentV) => {
      if (currentV === 'friendLink') return;
      if (currentV) {
        state.transition = !state.transition;
        contentApi('listsPostsByCategorySlug', { sluy: currentV }).then((res) => {
          state.articleLists = res.data.content;
        });
      }
    },
    {
      immediate: true,
    }
  );
  watch(tagSlug, (currentV) => {
    contentApi('listsPostsByTagSlug', { sluy: currentV }).then((res) => {
      state.articleLists = res.data;
    });
  });
  const changeSlug = (val) => {
    tagSlug.value = val;
  };
  const goDetails = (id) => {
    Router.push({
      path: `/detail/${id}`,
    });
  };
</script>
