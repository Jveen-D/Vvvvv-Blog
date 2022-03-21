<!--
 * @Date: 2022-03-21 23:32:26
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Browser\useFileSystemAccess.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>使用FileSystemAccessAPI创建和读写本地文件</template>
        <template #codeEffect>
            <div class="px-2 mb-2 border-2 border-gray-400 rounded">
                <pre lang="yaml">isSupported：{{ isSupported }}</pre>
                <pre lang="yaml">fileName：{{ fileName }}</pre>
                <pre lang="yaml">fileMIME：{{ fileMIME }}</pre>
                <pre lang="yaml">fileSize：{{ (fileSize / 1024).toFixed(1) }}kb</pre>
                <pre lang="yaml">fileLastModified：{{ formatted }}</pre>
            </div>
            <el-select v-model="dataType" class="m-2" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
            <el-button @click="create">create</el-button>
            <el-button @click="opened">open</el-button>
            <el-button @click="save">save</el-button>
            <el-button @click="saveAs">saveAs</el-button>
            <el-button @click="updateData">updateData</el-button>
            <el-input v-if="fileMIME === 'text/plain'" class="mt-2" v-model="data" type="textarea"></el-input>
            <img v-if="dataType === 'Blob' && imgUrl !== ''" :src="imgUrl" alt="img" />
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
import { useFileSystemAccess, useDateFormat } from '@vueuse/core'
import { ref, Ref } from 'vue'
// props
const props = defineProps<{
    id: number;
}>();

const dataType = ref('Blob') as Ref<'Text' | 'ArrayBuffer' | 'Blob'>
const options = [
    {
        value: 'Text',
        label: "文本['.txt', '.html']",
    },
    {
        value: 'ArrayBuffer',
        label: 'ArrayBuffer(不常用)',
    },
    {
        value: 'Blob',
        label: 'Blob(二进制流数据)',
    }
]
const { isSupported, data, file, fileName, fileMIME, fileSize, fileLastModified, create, open, save, saveAs, updateData } = useFileSystemAccess({
    dataType,
    types: [{
        description: 'Images',
        accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg'],
            'text/plain': ['.txt', '.html'],
        },
    }],
    excludeAcceptAllOption: false,
})
const imgUrl: any = ref('')
const opened = async () => {
    await open()
    let pattern = /^image\/.*/
    if (pattern.test(fileMIME.value)) {
        const reader = new FileReader()
        reader.onloadend = () => {
            imgUrl.value = reader.result
        }
        reader.readAsDataURL(file.value as Blob)
    }
}
const format = ref('YYYY-MM-DD HH:mm:ss')
const formatted = useDateFormat(fileLastModified, format)

</script>