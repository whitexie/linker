<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
import * as echarts from 'echarts/core'
import {
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components'
import {
  BarChart,
  LineChart,
} from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type { EChartsOption } from '~/types/echarts'
import { debounced } from '~/utils/util'

interface Props {
  option: EChartsOption
}

const props = defineProps<Props>()

echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

let myChart: echarts.ECharts
const echartDom = ref<HTMLElement | null>(null)
// const { width, height } = useElementSize(echartDom)

function setOption(option?: EChartsOption) {
  const t = option || props.option
  if (!myChart)
    return
  myChart.setOption(t)
}

const resize = debounced(() => {
  if (!myChart)
    return
  myChart.resize()
}, 200)

watch(props.option, (newValue) => {
  setOption(newValue)
})

onMounted(() => {
  const el = document.querySelector('.echart')
  if (!el)
    return
  myChart = echarts.init((el as HTMLElement))
  // @ts-expect-error
  window.echart = myChart
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})

defineExpose({
  setOption,
  resize,
})
</script>

<template>
  <div ref="echartDom" class="echart" />
</template>

<style lang="scss" scoped>
.echart {
  width: 100%;
  height: 100%;
}
</style>
