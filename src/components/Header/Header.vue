<template>
  <!--  移动端的按钮-->
  <div
    class="
      md:hidden
      flex
      justify-center
      items-center
      animate-pulse
      rounded-md
      fixed
      top-2
      left-4
      w-8
      h-8
      border-solid border-2 border-gray-400
      z-10
    "
    @click="showCategoriesList"
  >
    <svg aria-hidden="true" class="icon">
      <use xlink:href="#icon-gengduo" />
    </svg>
  </div>
  <!--  移动端蒙层-->
  <div
    :class="[
      showList ? 'showShadowList md:w-0' : '',
      showList === false ? 'hiddenShadowList' : '',
      'absolute h-screen bg-red-500 bg-opacity-5 md:bg-transparent z-10',
    ]"
    @click.self="showShadowCategoriesList"
  ></div>
  <!--  分类-->
  <div
    :class="[
      showList ? 'showList' : 'w-0',
      showList === false ? 'hiddenList' : '',
      mode === 'light'
        ? 'lightMode bg-gradient-to-t from-regal-blue to-regal-pink bg-red-400 shadow-xl'
        : 'darkMode ',
      'h-screen md:h-20 overflow-hidden items-center fixed top-0 md:static md:flex md:w-full md:bg-opacity-70 z-20',
    ]"
  >
    <div class="md:hidden relative mt-4" @click="showCategoriesList">
      <svg aria-hidden="true" class="icon animate-bounce absolute right-4">
        <use xlink:href="#icon-cha" />
      </svg>
    </div>
    <div
      class="flex flex-col flex-1 justify-between items-center pr-6 md:flex-row md:h-20 md:w-full"
    >
      <div class="pl-12 pt-4 md:flex md:pt-0">
        <div
          v-for="(item, index) in listCategories"
          :key="'listCategories' + index"
          :class="[
            slug === item.slug ? 'text-FF9100' : '',
            mode === 'light' ? 'text-black' : '',
            'font-mersan whitespace-nowrap mt-2 md:mt-0 font-medium text-sm pr-4 transition-colors duration-500 ease-in-out  hover:text-FF9100',
          ]"
          @click="goCategory(index, item.slug)"
        >
          {{ item.name }}
        </div>
      </div>
      <div
        class="w-full justify-end md:justify-between md:w-auto flex items-center"
        @click="changeMode"
      >
        <div
          class="z-20 relative flex justify-between items-center w-20 h-8 bg-gray-100 rounded-md"
        >
          <div class="z-20 flex justify-center items-center w-10 h-full rounded-md">
            <svg
              :class="[mode === 'light' ? 'animate-bounce mt-1' : '', 'icon']"
              aria-hidden="true"
            >
              <use xlink:href="#icon-taiyang" />
            </svg>
          </div>
          <div class="z-20 flex justify-center items-center w-10 h-full">
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
              'z-10 absolute flex justify-center items-center bg-white w-10 h-8 rounded-md',
            ]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ListCategories } from './Header';
  import { computed, reactive, toRefs, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { preventScrollY } from '@/utils/utils';

  const Router = useRouter();
  const store = useStore();
  const state = reactive({
    slug: computed(() => store.state.slug),
    mode: computed(() => store.state.mode),
    listCategories: '',
    activeCategory: computed(() => Router.currentRoute.value.params.slug), // 目前所在slug分类
    showList: '',
  });
  const { slug, mode, listCategories, activeCategory, showList } = {
    ...toRefs(state),
  };

  watch(showList, (newVal) => {
    preventScrollY(newVal);
  });
  // 目前所在slug分类
  watch(
    activeCategory,
    () => {
      store.dispatch('ChangeSlug', activeCategory);
    },
    {
      immediate: true,
    }
  );

  // 点击分类切换
  const goCategory = (index, val) => {
    if (val === 'friendLink') {
      Router.push({
        path: `/friend/${val}`,
      });
    } else {
      Router.push({
        path: `/category/${val}`,
      });
    }
  };

  // 文章分类
  ListCategories().then((res) => {
    state.listCategories = res;
    state.listCategories.push({
      id: 7,
      name: '友情链接',
      slug: 'friendLink',
    });
  });
  // 切换主题模式
  const changeMode = () => {
    const mode = store.state.mode === 'light' ? 'dark' : 'light';
    store.dispatch('ChangeMode', mode);
  };
  // 移动端显示分类
  const showCategoriesList = () => (state.showList = !state.showList);
  // 移动端显示分类蒙层
  const showShadowCategoriesList = () => (state.showList = !state.showList);
</script>

<style lang="scss" scoped>
  @import 'Header.scss';
</style>
