<template>
  <div class="flex">
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
  import { defineComponent } from 'vue';
  import pick from './components/pick.vue';
  export default defineComponent({
    components: {
      pick,
    },
  });
</script>
<script setup lang="ts">
  import { reactive } from 'vue';
  import { coreHooks } from '/@/hooks/core/coreHooks';
  interface State {
    id: number; // 文章的id
    activeComponent: string;
    categoryList: Array<{ [propName: string]: any }>;
    showCategory: boolean;
  }
  const { getCurrentComponentName } = coreHooks();
  const componentName = getCurrentComponentName();
  const state = reactive<State>({
    id: 0,
    activeComponent: componentName.value,
    categoryList: [],
    showCategory: false,
  });
</script>
<style scoped lang="scss"></style>
