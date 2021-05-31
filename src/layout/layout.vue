<template>
  <Header></Header>
  <div class="flex">
    <Slug></Slug>
    <div class="flex-1">
      <router-view></router-view>
    </div>
    <Profile></Profile>
  </div>
</template>

<script>
import Slug from '/@/components/Slug/Slug.vue'
import Header from '/@/components/Header/Header.vue'
import Profile from '/@/components/Profile/Profile.vue'

export default {
  name: 'Layout',
  components: { Slug, Header, Profile }
}
</script>

<style scoped>

</style>