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
        v-for="(item, index) in articleLists.content"
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
          >{{ item.title }}</div>
          <div class="text-right mr-4 text-sm italic">发布于 {{ getUpdateTime(item.createTime) }}</div>
        </div>
        <div
          class="lg:mt-4 tracking-wide break-all leading-6 lg:h-auto lg:overflow-y-none"
        >{{ item.summary }}...</div>
        <div class="flex items-center flex-wrap">
          <div
            v-for="(tag, tagIndex) in item.tags"
            :key="'tagIndex' + tagIndex"
            class="flex flex-nowrap items-center bg-blue-700 rounded-l-lg text-white text-xs pl-2 pr-2 mr-2 mt-2"
            @click.stop="changeSlug(tag.slug)"
          >
            <div class="animate-ping w-1 h-1 bg-white rounded-full mr-2"></div>
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

interface State {
  slug: ComputedRef<string>;
  articleLists: any;
  tagSlug: string;
  mode: ComputedRef<string>;
  transition: boolean;
}

const Router = useRouter();
const store = useStore();
const state = reactive<State>({
  slug: computed(() => Router.currentRoute.value.params.slug as string),
  articleLists: '',
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
        state.articleLists = res.data;
        console.log(res.data);
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
