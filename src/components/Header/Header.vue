<template>
  <!--  移动端的按钮-->
  <div
    class="fixed z-10 flex items-center justify-center w-12 h-12 border-2 border-gray-800 border-solid rounded-full lg:hidden animate-pulse bottom-12 left-12"
    @click="showCategoriesList"
  >
    <svg aria-hidden="true" class="icon">
      <use xlink:href="#icon-gengduo" />
    </svg>
  </div>
  <!--  移动端蒙层-->
  <div
    :class="[
      showList ? 'showShadowList lg:w-0' : '',
      showList === false ? 'hiddenShadowList' : '',
      'absolute h-screen bg-red-500 bg-opacity-5 lg:bg-transparent z-10',
    ]"
  ></div>
  <!--  分类-->
  <div
    ref="categoryRef"
    :class="[
      showList ? 'showList' : 'hiddenList',
      'bg-white dark:bg-gray-900/80 backdrop-blur h-full lg:h-16 overflow-hidden items-center fixed top-0 lg:flex lg:w-full z-20 border-b-0 sm:border-b border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]',
    ]"
  >
    <div class="relative mt-4 lg:hidden" @click="showCategoriesList">
      <svg aria-hidden="true" class="absolute icon animate-bounce right-4">
        <use xlink:href="#icon-cha" />
      </svg>
    </div>
    <div
      class="flex flex-col items-center justify-between flex-1 pr-6 lg:flex-row lg:h-16 lg:w-full"
    >
      <div class="pt-4 pl-12 text-gray-700 lg:flex lg:pt-0 dark:text-gray-200">
        <div
          v-for="(item, index) in state.listCategories"
          :key="'listCategories' + index"
          :class="[
            storeSlug === item.slug ? 'text-sky-500' : '',
            'hover:text-sky-500 dark:hover:text-sky-400 font-mersan whitespace-nowrap mt-2 lg:mt-0 font-medium text-sm pr-4 transition-colors duration-500 ease-in-out',
          ]"
          @click="goCategory(item.slug)"
        >{{ item.name }}</div>
      </div>
      <div
        class="flex items-center justify-end w-full overflow-hidden rounded-md lg:justify-between lg:w-auto"
      >
        <div class="relative z-20 flex items-center justify-between w-20 h-8">
          <div
            class="z-20 flex items-center justify-center w-10 h-full rounded-md bg-gray-400/10 hover:bg-gray-400/20 dark:highlight-white/5"
            @click="changeTheme('light')"
          >
            <svg
              :class="[mode === 'light' ? 'animate-bounce mt-1' : '', 'icon']"
              aria-hidden="true"
            >
              <use xlink:href="#icon-taiyang" />
            </svg>
          </div>
          <div
            class="z-20 flex items-center justify-center w-10 h-full rounded-md bg-gray-400/10 hover:bg-gray-400/20 dark:highlight-white/5"
            @click="changeTheme('dark')"
          >
            <svg
              :class="[mode === 'light' ? '' : 'animate-bounce mt-1', 'icon']"
              aria-hidden="true"
            >
              <use xlink:href="#icon-yueliang" />
            </svg>
          </div>
          <div
            :class="[
              mode === 'light' ? 'light' : 'dark',
              'z-10 absolute flex justify-center items-center bg-gray-400/20 w-10 h-8 rounded-md',
            ]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { reactive, ref, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';
import { contentApi } from '/@/api/content';
import { coreHooks } from '/@/hooks/core/coreHooks';
import { tailwindTheme } from '/@/utils/tailwind/tailwindTheme';
import { preventScrollY } from '/@/utils/utils';
const { changeTheme } = tailwindTheme();

const { getCurrentMode, getCurrentSlug, getStoreSlug, dispatchChangeSlug } = coreHooks();
const mode = getCurrentMode();
const activeCategory = getCurrentSlug();
const storeSlug = getStoreSlug();
interface State {
  listCategories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  showList: boolean | '';
}

const Router = useRouter();
const state = reactive<State>({
  listCategories: [],
  showList: '',
});
const { showList } = {
  ...toRefs(state),
};

watch(showList, (newVal) => {
  preventScrollY(newVal);
});
// 目前所在slug分类
watch(
  activeCategory,
  () => {
    dispatchChangeSlug(activeCategory.value);
  },
  {
    immediate: true,
  }
);

// 点击分类切换
const goCategory = (val) => {
  switch (val) {
    case 'friendLink':
      Router.push({
        path: `/friend/${val}`,
      });
      break;
    case 'utils':
      Router.push({
        path: `/utils/${val}`,
      });
      break;
    case 'vueuse':
      Router.push({
        path: `/${val}`,
      });
      break;
    case 'type-challenges':
      Router.push({
        path: `/${val}`,
      });
      break;
    default:
      Router.push({
        path: `/category/${val}`,
      });
      break;
  }
};

// 文章分类
contentApi('listCategories').then((res) => {
  res.data.push({
    id: 7,
    name: '友情链接',
    slug: 'friendLink',
  });
  state.listCategories = res.data;
});
// 移动端显示分类
const showCategoriesList = () => (state.showList = !state.showList);

// 列表ref
const categoryRef: ElRef = ref(null);
// 点击列表外部关闭列表
onClickOutside(categoryRef, () => {
  if (state.showList) state.showList = false;
});
</script>

<style lang="scss" scoped>
@import "Header.scss";
</style>
