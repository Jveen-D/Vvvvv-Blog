<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>鼠标是否离开页面，将鼠标划开看到效果</template>
        <template #codeEffect>
            <div ref="target" :style="targetStyle">
                <pre>{{ YAML.dump(parallax) }}</pre>
                <div :style="containerStyle">
                    <div :style="cardStyle">
                        <div :style="cardWindowStyle">
                            <img
                                :style="layer0"
                                src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer0.png"
                            />
                            <img
                                :style="layer1"
                                src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer1.png"
                            />
                            <img
                                :style="layer2"
                                src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer2.png"
                            />
                            <img
                                :style="layer3"
                                src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer3.png"
                            />
                            <img
                                :style="layer4"
                                src="https://jaromvogel.com/images/design/jumping_rabbit/page2layer4.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import YAML from 'js-yaml'
import { ref, reactive, CSSProperties, computed } from 'vue'
import { useParallax } from '@vueuse/core'
const target = ref(null)
const parallax = reactive(useParallax(target))
const targetStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '500px',
    transition: '.3s ease-out all',
}
const containerStyle: CSSProperties = {
  margin: '3em auto',
  perspective: '300px',
}
const cardStyle = computed(() => ({
  background: '#fff',
  height: '20rem',
  width: '15rem',
  borderRadius: '5px',
  border: '1px solid #cdcdcd',
  overflow: 'hidden',
  transition: '.3s ease-out all',
  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.25)',
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg)`,
}))
const cardWindowStyle: CSSProperties = {
  overflow: 'hidden',
  fontSize: '6rem',
  position: 'absolute',
  top: 'calc(50% - 1em)',
  left: 'calc(50% - 1em)',
  height: '2em',
  width: '2em',
  margin: 'auto',
}
const layerBase: CSSProperties = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  transition: '.3s ease-out all',
}
const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.33)`,
}))
const layer1 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 20
  }px) scale(1.33)`,
}))
const layer2 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px) scale(1.33)`,
}))
const layer3 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * 40}px) translateY(${
    parallax.roll * 40
  }px) scale(1.33)`,
}))
const layer4 = layerBase
</script>