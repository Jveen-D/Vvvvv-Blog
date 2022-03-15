<template>
  <div class="flex">
    <!-- 按钮 -->
    <div
      class="fixed z-10 flex items-center justify-center w-8 h-8 border-2 border-gray-800 border-solid rounded-lg animate-pulse sm:hidden lg:hidden top-2 left-2"
      @click="showCategoriesList"
    >
      <svg aria-hidden="true" class="icon">
        <use xlink:href="#icon-gengduo" />
      </svg>
    </div>
    <div
      ref="categoryRef"
      :class="[
        state.showCategory ? 'showCategory' : 'hiddenCategory',
        'fixed sm:static h-full lg:h-screen-4rem bg-white dark:bg-gray-900/80 backdrop-blur flex-shrink-0 sm:w-[200px] lg:pt-0 text-gray-700 dark:text-gray-200 sm:border-r border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12] overflow-y-auto overflow-x-hidden z-10',
      ]"
    >
      <div
        v-for="(item, index) in state.categoryList"
        :key="index"
        :class="[
          state.activeComponent === item.title ? 'text-sky-500 dark:text-sky-400' : '',
          'w-[200px] truncate pl-4 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500 font-bold',
        ]"
        @click="changeComponent(item.title, item.id)"
        >{{ item.title }}</div
      >
    </div>
    <component
      class="flex-1 flex-shrink-0 pt-12 sm:pt-2"
      :is="state.activeComponent"
      :id="state.id"
    ></component>
  </div>
</template>
<script lang="ts">
  // 因为使用了动态组件，所以这里需要额外注册一下组件，如果直接在setup语法糖内导入组件那么传递给:is的变量没有作用
  // @ts-ignore
  import { onClickOutside as ClickOutside } from '@vueuse/core';
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import typePick from './components/typePick.vue';
  import typeReadonly from './components/typeReadonly.vue';
  import typeTupleToObject from './components/typeTupleToObject.vue';
  import { contentApi } from '/@/api/content';
  import { coreHooks } from '/@/hooks/core/coreHooks';

  export default {
    components: {
      typePick,
      typeReadonly,
      typeTupleToObject,
    },
  };
</script>
<script setup lang="ts">
  interface State {
    id: number; // 文章的id
    activeComponent: string;
    categoryList: Array<{ [propName: string]: any }>;
    showCategory: boolean;
  }
  const { dispatchChangeSlug, getCurrentComponentName } = coreHooks();
  const componentName = getCurrentComponentName();
  dispatchChangeSlug('type-challenges');
  const state = reactive<State>({
    id: 0,
    activeComponent: componentName.value,
    categoryList: [],
    showCategory: false,
  });

  /**
   * @description: 获取typeChallenges列表
   * @param {*}
   * @return {*}
   */
  contentApi('listsPostsByCategorySlug', { sluy: 'type-challenges' }).then((res) => {
    state.categoryList = res.data.content.sort((a, b) => a.id - b.id);
    state.categoryList.forEach((item) => {
      console.log(item.slug.toLowerCase());
      if (item.slug.toLowerCase() === componentName.value.toLowerCase()) {
        state.id = item.id;
      }
    });
  });

  const Router = useRouter();
  /**
   * @description: 切换typeChallenges组件
   * @param {*}
   * @return {*}
   */
  const changeComponent = (componentName, id) => {
    state.id = id;
    state.activeComponent = componentName;
    Router.push({
      path: `/type-challenges/${componentName}`,
    });
  };

  /**
   * @description: 移动端切换列表
   * @param {*}
   * @return {*}
   */
  const showCategoriesList = () => {
    state.showCategory = true;
  };

  // 列表ref
  const categoryRef: ElRef = ref(null);
  // 点击列表外部关闭列表
  ClickOutside(categoryRef, () => {
    if (state.showCategory) state.showCategory = false;
  });
</script>
<style scoped lang="scss"></style>
