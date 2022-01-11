<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useBroadcastChannel.vue
-->
<template>
<AvueUseBaseCom :id="props.id">
    <template #des>BroadcastChannel 接口代理了一个命名频道，可以让指定 origin 下的任意 browsing context 来订阅它。它允许同源的不同浏览器窗口，Tab页，frame或者 iframe 下的不同文档之间相互通信。通过触发一个 message 事件，消息可以广播到所有监听了该频道的 BroadcastChannel 对象。</template>
    <template #effectDes>复制地址栏链接再打开一个标签页才能明显看到效果</template>
    <template #codeEffect>
      <div v-if="channel">channel Name:{{ channel.name }}</div>
            <div v-if="data">接收message:{{ data }}</div>
            <div v-if="error">error:{{ error }}</div>
            <div v-if="isClosed">isClose:{{ isClosed }}</div>

            <div v-if="isSupported" class="my-2">
                <el-input v-model="message" type="text" />
                <div class="mt-2">
                    <el-button @click="post(message)">Send Message</el-button>
                    <el-button @click="close">close</el-button>
                </div>
            </div>
            <div v-else>不支持useBroadcastChannel</div>
    </template>
  </AvueUseBaseCom>
  </template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();


import { ref, watch } from 'vue'
import { useBroadcastChannel } from '@vueuse/core';
const {
    data, // 数据对象
    isSupported, // 检验浏览器是否支持BroadcastChannel这个api
    channel,// 是一个对象，保存着频道的信息例如name
    post,// 发送，顾名思义就是广播data
    close,// 关闭，这是一个方法，调用之后频道将不再可用
    error, // 错误信息
    isClosed,// 检验频道是否关闭
} = useBroadcastChannel({ name: 'useBroadcastChannel' })
const message = ref('')
watch(data, () => {
    if (data.value) alert(data.value)
})
</script>

<style lang="scss" scoped>
@import "/src/assets/css/markdown-body.scss";
</style>
