<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>捕捉focus，需要注意的是绑定的ref必须是表单的父级容器，如果直接绑定在表单就会出现不能接触focus的问题</template>
    <template #codeEffect>
      <div ref="target">
        <el-form
          label-position="left"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
        >
          <el-form-item label="Name">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="Activity form">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
        <div class="flex gap-2">
          <pre lang="yaml">hasFocus:{{ hasFocus }}</pre>
          <el-button @click="() => activate()">activate</el-button>
          <el-button @click="() => deactivate()">Free Focus</el-button>
        </div>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const target = ref();
  const formLabelAlign = reactive({
    name: '',
    region: '',
    type: '',
  });
  const { hasFocus, activate, deactivate } = useFocusTrap(target);
</script>
