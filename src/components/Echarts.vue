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
import { isNumber } from '~/utils/util'

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
})

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

interface Props {
  width: number | string
  height: number | string
  option: EChartsOption
}

let myChart: echarts.ECharts

const echartStyle = computed(() => {
  const width = isNumber(props.width) ? `${props.width}px` : props.width
  const height = isNumber(props.height) ? `${props.height}px` : props.height
  return {
    width,
    height,
  }
})

onMounted(() => {
  const el = document.querySelector('.echart')
  if (!el)
    return
  myChart = echarts.init((el as HTMLElement))
  myChart.setOption(props.option)
  setTimeout(() => {
  }, 3000)
})
</script>

<template>
  <div ref="echartDom" class="echart" :style="echartStyle" />
</template>

<style lang="scss" scoped>

</style>
