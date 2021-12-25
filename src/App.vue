<!--
 * @Date: 2021-12-01 15:33:26
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/App.vue
-->
<template>
  <div class="animate__animated animate__fadeInTopLeft">
    <suspense>
      <router-view />
    </suspense>
  </div>
</template>
<script lang="ts" setup>
  import { changeTheme } from '/@/utils/tailwind/changeMode';
  changeTheme(localStorage.theme);
</script>
