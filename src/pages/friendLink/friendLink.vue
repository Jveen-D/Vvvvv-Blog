<template>
  <div class="w-full h-full relativex py-8 flex flex-col items-center">
    <!--    友链列表-->
    <a v-for="(item, index) in state.friendList"
       :href="item.url"
       target="_blank"
       :key="index"
       :class="[state.mode === 'light' ? 'lightMode' : 'bg-darkMode','flex w-5/6 h-24 bg-white rounded-lg py-2 px-4 overflow-hidden mb-4 animate__animated animate__bounceInUp']"
    >
      <div class="w-20 h-20 mask mask-hexagon animate-pulse">
        <img :src="item.logo"/>
      </div>
      <div class="flex flex-col justify-center ml-4">
        <div class="font-semibold">{{ item.name }}</div>
        <div class="opacity-40">{{ item.description }}</div>
      </div>
    </a>
    <!--    github偷来的小人-->
    <img
        class="w-96 h-96 absolute right-0 bottom-0  animate__animated animate__bounceInDown"
        src="http://124.71.57.28:8090/upload/2021/08/astro-mona-03a16b99728c4f6b97c584e0fd8b18f5.svg"
    />
  </div>
</template>
<script lang="ts" setup>
import {computed, reactive, ComputedRef} from 'vue';
import {contentApi} from "/@/api/content";
import {useStore} from 'vuex';
interface State {
  friendList:Array<{
    name:string,
    logo:string,
    description:string,
    url:string
  }>,
  mode:ComputedRef<string>
}
const store = useStore();
const state = reactive<State>({
  friendList: [],
  mode: computed(() => store.state.mode as string),
});
contentApi('getFriendLink').then((res) => {
  state.friendList = res.data;
  console.log(res.data);
  
});
</script>
<style lang="scss" scoped>
.mask-hexagon {
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgyIiBoZWlnaHQ9IjIwMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBsLTYxLjg2LTM1Ljk0NUM2LjE1MSAxNTcuNDQuMyAxNDUuNzM3LjMgMTM2LjU0VjY1LjQ4NnoiLz48L3N2Zz4=);
}

.mask {
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
}
</style>
