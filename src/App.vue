<!--
 * @Date: 2021-12-01 15:33:26
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/App.vue
-->
<template>
  <div class="bg-white animate__animated animate__fadeInTopLeft dark:bg-gray-900">
    <suspense>
      <router-view />
    </suspense>
  </div>
</template>
<script lang="ts" setup>
  import { tailwindTheme } from './utils/tailwind/tailwindTheme';
  const { changeTheme } = tailwindTheme();
  changeTheme(localStorage.theme);
</script>
