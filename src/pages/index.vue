<template>
    <Header></Header>
  <div class="flex">
    <Slug></Slug>
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import Slug from '/@/components/Slug/Slug.vue'
import Header from '/@/components/Header/Header.vue'
import ArticleList from '/@/components/ArticleList/ArticleList.vue'
export default {
  name: 'Layout',
  components: { Slug, Header, ArticleList }
}
</script>

<style scoped>

</style>