<template>
  <div class="mt-28 px-8 w-screen">
    <div class="bg-white h-40 w-full">
      12
    </div>
  </div>
</template>

<script>
import { PostList } from './ArticleList'

export default {
  name: 'ArticleList',
  async setup(){
    const articleList = await PostList({size:20})
    console.log(articleList)
    return{
      articleList
    }
  }
}
</script>

<style scoped>

</style>