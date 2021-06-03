<template>
  <div :class="[mode === 'light'?'lightMode':'darkMode','flex fixed w-full top-0 bg-opacity-70 bg-white']">
    <div class="malfunction">
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
      <div class="relative flex justify-between items-center" @click="changeMode">
        <div class="flex justify-between items-center w-20 h-8 bg-gray-100 rounded-md">
          <div class="z-20 flex justify-center items-center w-10 h-full rounded-md">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-taiyang"></use>
            </svg>
          </div>
          <div class="z-20 flex justify-center items-center w-10 h-full">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yueliang"></use>
            </svg>
          </div>
          <div
              :class="[mode === 'light'?'light':'dark','z-10 absolute flex justify-center items-center bg-white w-10 h-8 rounded-md']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListCategories } from './Header'
import { ref, reactive, toRefs, computed, watch } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup () {
    const Router = useRouter()
    const store = useStore()
    const state = reactive({
      slug: computed(() => store.state.slug),
      mode: computed(() => store.state.mode)
    })

    // 目前所在slug分类
    let activeCategory = computed(() => Router.currentRoute.value.params.slug)
    watch(activeCategory, () => {
      store.dispatch('ChangeSlug', activeCategory)
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
    // 切换主题模式
    const changeMode = () => {
      let mode = store.state.mode === 'light' ? 'dark' : 'light'
      store.dispatch('ChangeMode', mode)
    }

    return {
      listCategories,
      activeCategory,
      goCategory,
      changeMode,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
// 故障风按钮
.malfunction, .malfunction::after {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  font-size: 16px;
  font-family: 'Oswald', sans-serif;
  color: white;
  border: 0;
  letter-spacing: 3px;
  outline: transparent;
  position: relative;
}

.malfunction::after {
  --slice0: inset(50% 50% 50% 50%);
  --slice1: inset(80% -6px 0 0);
  --slice2: inset(50% -6px 30% 0);
  --slice3: inset(10% -6px 85% 0);
  --slice4: inset(40% -6px 43% 0);
  --slice5: inset(80% -6px 5% 0);

  content: "Vvvvv-Blog";
  display: block;
  position: absolute;
  text-align: center;
  top: 20px;
  left: 0;
  bottom: 0;

  clip-path: var(--slice0);
}

@keyframes shad {
  0% {
    clip-path: var(--slice1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice3);
    transform: translate(-5px, 0px);
  }
  60% {
    clip-path: var(--slice4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice2);
    transform: translate(-15px, 10px);
  }
  80% {
    clip-path: var(--slice5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice1);
    transform: translate(0);
  }
}

.malfunction:hover::after {
  animation: shad 1.5s alternate infinite;
}

// 故障风结束

// 切换模式开始
.dark {
  animation: darkAnimation .1s alternate;
  animation-fill-mode: forwards;
  left: 0;
}
@keyframes darkAnimation {
  0% {
    left: 0;
  }
  10% {
    left: 5%;
  }
  20% {
    left: 10%;
  }
  30% {
    left: 15%;
  }
  40% {
    left: 20%;
  }
  50% {
    left: 25%;
  }
  60% {
    left: 30%;
  }
  70% {
    left: 35%;
  }
  80% {
    left: 40%;
  }
  90% {
    left: 45%;
  }
  100% {
    left: 50%;
  }
}

.light {
  animation: lightAnimation .1s alternate;
  animation-fill-mode: forwards;
}
.darkMode{
  background-image: url('/src/assets/img/bg.gif');
  .malfunction::after {
    background-color: #000;
  }
}
.lightMode{
  .malfunction{
    color:rgb(255,208,67);
  }
  .malfunction::after {
    color:red;
    background-color: rgb(255,208,67);
  }
}

@keyframes lightAnimation {
  0% {
    left: 50%;
  }
  10% {
    left: 45%;
  }
  20% {
    left: 40%;
  }
  30% {
    left: 35%;
  }
  40% {
    left: 30%;
  }
  50% {
    left: 25%;
  }
  60% {
    left: 20%;
  }
  70% {
    left: 15%;
  }
  80% {
    left: 10%;
  }
  90% {
    left: 5%;
  }
  100% {
    left: 0;
  }
}
</style>