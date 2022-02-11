<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Integrations\useFuse.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>模糊搜索</template>
    <template #codeEffect>
      <div class="flex flex-col gap-8">
        <el-input class="w-[200px]" v-model="input" placeholder="模糊搜索"></el-input>
        <el-radio-group v-model="filterBy">
          <el-radio label="firstName">开头</el-radio>
          <el-radio label="lastName">结尾</el-radio>
          <el-radio label="both">不限C</el-radio>
        </el-radio-group>
        <div class="flex gap-12">
          <div class="p-4 border border-blue-500">
            <p class="font-bold">origin list:</p>
            <div class="flex flex-col">
              <div v-for="name in data">{{ name }}</div>
            </div>
          </div>
          <div class="p-4 border border-blue-500 min-w-[400px]">
            <p class="font-bold">fuse list:</p>
            <div class="flex flex-col">
              <div v-for="name in results">{{ name }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useFuse } from '@vueuse/integrations/useFuse';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();
  const data = [
    '李诗情',
    '赵今麦',
    'zhao jin mai',
    'ZHAO JIN MAI',
    'zhaojinmai',
    'ZHAOJINMAI',
    'zhao jinmai',
    'zhaojin mai',
    'Zhao jin mai',
  ];

  const filterBy = ref('both');

  const input = ref('');

  /**
   * input 数据源
   * data 被筛选的数据
   * option 配置项
   */
  const { results } = useFuse(input, data);
</script>
