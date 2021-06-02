<template>
  <div class="flex fixed w-full top-0 bg-opacity-70 bg-white">
    <div class="night-mode">
      <div>Vvvvv-Blog</div>
    </div>
    <div class="flex flex-1 justify-between items-center h-20 pr-6">
      <div class="flex pl-12">
        <span v-for="(item,index) in listCategories"
              :key="'listCategories'+index"
              :class="[slug === item.slug?'text-blue-700':'',' font-medium text-sm pr-4']"
              @click="goCategory(index,item.slug)">
          {{ item.name }}
        </span>
      </div>
      <div class="flex justify-between items-center">

      </div>
    </div>
  </div>
</template>

<script>
import { ListCategories } from './Header'
import { ref, computed, watch } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup () {
    const Router = useRouter()
    const store = useStore()

    let slug = computed({
      get: () => store.getters.getSlug,
      set: ( val ) => store.dispatch('ChangeSlug', val)
    })

    // 目前所在slug分类
    let activeCategory = computed(() => Router.currentRoute.value.params.slug)
    watch(activeCategory, ( currentV ) => {
      slug.value = activeCategory
    }, {
      immediate: true
    })
    // 点击分类切换
    const goCategory = ( index, val ) => {
      Router.push({
        path: `/category/${ val }`,
      })
    }

    // 文章分类
    const listCategories = ref({})
    ListCategories().then(( res ) => {
      listCategories.value = res
    })


    return {
      listCategories,
      goCategory,
      activeCategory,
      slug
    }
  }
}
</script>

<style scoped lang="scss">
  .night-mode,.night-mode::after{
    display: flex;
    justify-content: center;
    align-items: center;
    width:180px;
    font-size:16px;
    font-family: 'Oswald', sans-serif;
    background-image: url('/src/assets/img/bg.gif');
    color:white;
    border:0;
    letter-spacing: 3px;
    outline: transparent;
    position:relative;
  }
  .night-mode::after{
    --slice0:inset(50% 50% 50% 50%);
    --slice1:inset(80% -6px 0 0);
    --slice2:inset(50% -6px 30% 0);
    --slice3:inset(10% -6px 85% 0);
    --slice4:inset(40% -6px 43% 0);
    --slice5:inset(80% -6px 5% 0);

    content:"Vvvvv-Blog";
    display: block;
    position:absolute;
    text-align: center;
    top:20px;
    left:0;
    bottom:0;
    background-color:#000;
    clip-path:var(--slice0);
  }
  @keyframes shad{
    0%{
      clip-path:var(--slice1);
      transform:translate(-20px,-10px);
    }
    10%{
      clip-path:var(--slice3);
      transform:translate(10px,10px);
    }
    20%{
      clip-path:var(--slice1);
      transform:translate(-10px,10px);
    }
    30%{
      clip-path:var(--slice3);
      transform:translate(0px,5px);
    }
    40%{
      clip-path:var(--slice2);
      transform:translate(-5px,0px);
    }
    50%{
      clip-path:var(--slice3);
      transform:translate(-5px,0px);
    }
    60%{
      clip-path:var(--slice4);
      transform:translate(5px,10px);
    }
    70%{
      clip-path:var(--slice2);
      transform:translate(-15px,10px);
    }
    80%{
      clip-path:var(--slice5);
      transform:translate(20px,-10px);
    }
    90%{
      clip-path:var(--slice1);
      transform:translate(-10px,0px);
    }
    100%{
      clip-path:var(--slice1);
      transform:translate(0);
    }
  }
  .night-mode:hover::after{
    animation:shad 1.5s alternate infinite;
  }
</style>