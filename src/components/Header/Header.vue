<template>
  <div class="flex fixed w-full top-0 bg-opacity-70 bg-white">
    <div class="flex justify-center items-center shadow-2xl cursor-pointer font-bold text-black w-52 h-20">
      Vvvvv-Blog
    </div>
    <div class="flex flex-1 justify-between items-center h-20 pr-6">
      <div class="flex pl-12">
        <span v-for="(item,index) in listCategories"
              :key="'listCategories'+index"
              :class="[slug === item.slug?'text-blue-700':'','cursor-pointer font-medium text-sm pr-4']"
              @click="goCategory(index,item.slug)">
          {{ item.name }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <p class="mr-4 text-xs">{{ profile.nickname }}</p>
        <img class="flex justify-center items-center w-8 h-8 rounded-2xl"
             alt="avatar"
             :src="profile.avatar"/>
      </div>
    </div>
  </div>
</template>

<script>
import { GetsBloggerProfile, ListCategories } from './Header'
import { ref, computed, onMounted } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: 'Header',
  setup () {
    const Router = useRouter()
    const store = useStore()

    let slug = computed({
      get:()=>store.getters.getSlug,
      set:(val)=>store.dispatch('ChangeSlug',val)
    })

    // 目前所在slug分类
    let activeCategory = computed(() => Router.currentRoute.value.params.slug)
    // 提交mutation修改slug
    onMounted(()=>{
      slug.value = activeCategory
    })

    // 点击分类切换
    const goCategory = ( index, val ) => {
      slug = val
      Router.push({
        path: `/category/slug/${ val }`,
      })
    }

    // profile 博主信息
    const profile = ref({})
    GetsBloggerProfile().then(( res ) => {
      profile.value = res
    })
    // 文章分类
    const listCategories = ref({})
    ListCategories().then(( res ) => {
      listCategories.value = res
    })


    return {
      profile,
      listCategories,
      goCategory,
      activeCategory,
      slug
    }
  }
}
</script>

<style scoped>

</style>