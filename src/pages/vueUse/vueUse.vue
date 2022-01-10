<!--
 * @Date: 2022-01-10 13:37:12
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/vueUse.vue
-->
<template>
  <div class="flex">
    <div class="w-[200px] pt-2 pl-4 text-gray-700 dark:text-gray-200 border-r border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12]">
      <div
        v-for="(item, index) in state.categoryList"
        :key="index"
        :class="[state.activeComponent === item.name?'text-sky-500 dark:text-sky-400':'','hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500 font-bold']"
        @click="changeComponent(item.name)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="flex-1 pt-2 mx-2">
      <!-- 失活的组件将会被缓存！-->
      <!-- <keep-alive> -->
      <component class="w-full h-full" :is="state.activeComponent"></component>
      <!-- </keep-alive> -->
    </div>
  </div>
</template>
<script lang="ts">
  // 因为使用了动态组件，所以这里需要额外注册一下组件，如果直接在setup语法糖内导入组件那么传递给:is的变量没有作用
  import { defineComponent } from 'vue';
  import useActiveElement from './components/useActiveElement.vue';
  import useBreakpoints from './components/useBreakpoints.vue';
  export default defineComponent({
    components: {
      useActiveElement,
      useBreakpoints
    },
  });
</script>
<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { coreHooks } from '/@/hooks/core/coreHooks';
  const { dispatchChangeSlug,getCurrentComponentName } = coreHooks();
  dispatchChangeSlug('vueuse');
  const componentName = getCurrentComponentName()
  interface State {
    activeComponent: string;
    categoryList: Array<{ name: string }>;
  }
  const state = reactive<State>({
    activeComponent: componentName.value,
    categoryList: [
      {
        name: 'useActiveElement',
      },
      {
        name: 'useBreakpoints',
      },
    ],
  });

const Router = useRouter();
/**
 * @description: 切换vueUse组件
 * @param {*}
 * @return {*}
 */  
const changeComponent = (componentName) => {
    state.activeComponent = componentName
    Router.push({
        path:`/vueUse/${componentName}`
    })
}
</script>

<style lang="scss" scoped></style>
