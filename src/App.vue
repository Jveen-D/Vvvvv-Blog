<template>
  <div class="animate__animated animate__fadeInTopLeft">
    <suspense>
      <router-view />
    </suspense>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
