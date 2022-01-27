<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>官网https://drauu.netlify.app/ 可以做签名啥的</template>
    <template #codeEffect>
      <div class="flex flex-col items-center">
        <div class="w-[600px]">
          <div class="flex justify-end gap-2 flex-nowrap">
            <div @click="undo()">
              <el-icon :class="[!canUndo?'text-gray-400':'']">
                <RefreshLeft />
              </el-icon>
            </div>
            <div @click="redo()">
              <el-icon :class="[!canRedo?'text-gray-400':'']">
                <RefreshRight />
              </el-icon>
            </div>
            <div @click="clear()">
              <el-icon>
                <Delete />
              </el-icon>
            </div>
          </div>
          <svg class="w-[600px] h-[400px] bg-gray-100" ref="target"></svg>
        </div>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { toRefs } from '@vueuse/core';
  import { useDrauu } from '@vueuse/integrations/useDrauu';
  import { Delete, RefreshRight, RefreshLeft } from '@element-plus/icons-vue';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  // const colors = ref(['black', '#ef4444', '#22c55e', '#3b82f6']);
  const target = ref();
  const { undo, redo, canUndo, canRedo, clear, brush } = useDrauu(target, {
    brush: {
      color: 'black',
      size: 3,
    },
  });
  // const { mode, color, size } = toRefs(brush);
</script>
