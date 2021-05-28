<template>
  <Header></Header>
  <div class="flex">
    <Slug></Slug>
    <ArticleList></ArticleList>
    <Profile></Profile>
  </div>
</template>

<script>
import Slug from '/@/components/Slug/Slug.vue'
import Header from '/@/components/Header/Header.vue'
import ArticleList from '/@/components/ArticleList/ArticleList.vue'
import Profile from '/@/components/Profile/Profile.vue'

export default {
  name: 'Layout',
  components: { Slug, Header, ArticleList, Profile }
}
</script>

<style scoped>

</style>