<template>
  <suspense>
    <router-view></router-view>
  </suspense>
  <!--回到顶部的动画-->
  <div class="backTop absolute top-20 right-0">
  </div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const handleScroll = () => {

    }
    window.addEventListener('scroll', handleScroll, true)
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.backTop{

}
</style>
