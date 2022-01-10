<!--
 * @Date: 2022-01-10 13:37:12
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/vueUse.vue
-->
<template>
  <div class="">
      <div>
          
      </div>
      <div class="flex-1">
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
  import useActiveElement from './components/useActiveElement.vue'
  export default defineComponent({
    components: {
      useActiveElement
    },
  });
</script>
<script lang="ts" setup>
import {reactive} from 'vue'
interface State {
    activeComponent:string;
}
const state = reactive<State>({
    activeComponent:'useActiveElement'
})
</script>

<style lang="scss" scoped></style>