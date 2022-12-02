<script setup lang="ts">
import { getClicks, getRevenue, getSubscribers, getViews } from '~/api/users'
import { generateDay } from '~/utils/util'
import type { EChartsOption } from '~/types/echarts'
import Echarts from '~/components/Echarts.vue'

const colors = ['#4ade80', '#c085fc', '#5fa4f9', '#f572b5', '#facc14']
const days = ref(7)
const echartRef = ref<InstanceType<typeof Echarts>>()
let rangeTime: string[] = []
const option = ref<EChartsOption>({
  colors,
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Views', 'Clicks', 'Clicks Through Rate', 'Revenue', 'Subscribers'],
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: rangeTime,
      axisPointer: {
        type: 'shadow',
      },
      lineStyle: {
        color: '#000',
        type: 'dotted',
      },
    },
  ],
  yAxis: [
    {
    },
    {
    },
  ],
  series: [
    {
      name: 'Views',
      type: 'bar',
      color: '#4ade80',
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}`
        },
      },
      data: [],
    },
    {
      name: 'Clicks',
      type: 'bar',
      color: '#c085fc',
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}`
        },
      },
      data: [],
    },
    {
      name: 'Revenue',
      type: 'bar',
      color: '#f572b5',
      yAxisIndex: 1,
      data: [],
    },
    {
      name: 'Subscribers',
      type: 'bar',
      color: '#facc14',
      yAxisIndex: 1,
      data: [],
    },
    {
      name: 'Clicks Through Rate',
      type: 'line',
      color: '#5fa4f9',
      yAxisIndex: 1,
      smooth: true,
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}%`
        },
      },
      data: [],
    },
  ],
})

function generateTimes(num: number) {
  const list = generateDay(num, 'MMM DD')
  list[list.length - 1] = 'Today'
  rangeTime = list
  option.value.xAxis[0].data = rangeTime
}

async function getEchartsDatas() {
  const data = { range: days.value }
  const clicks = await getClicks(data)
  const views = await getViews(data)
  const revenue = await getRevenue(data)
  const subscribers = await getSubscribers(data)
  option.value.series[0].data = [...clicks.list.map(item => item.count)]
  option.value.series[1].data = [...views.list.map(item => item.count)]
  option.value.series[2].data = [...revenue.list.map(item => item.count)]
  option.value.series[3].data = [...subscribers.list.map(item => item.count)]
  const list: number[] = []
  for (let i = 0; i < views.list.length; i++) {
    const rate = Math.floor(clicks.list[i].count / views.list[i].count * 100)
    list.push(rate > 100 ? rate - 100 : rate)
  }
  option.value.series[4].data = list
}

watch(days, async (newValue) => {
  generateTimes(newValue)
  await getEchartsDatas()
  echartRef.value?.setOption(option)
})
onMounted(async () => {
  generateTimes(days.value)
  await getEchartsDatas()
  echartRef.value?.setOption(option)
})
</script>

<template>
  <div>
    <div text-12px>
      <span class="text-#212529">
        Date Range:
      </span>
      <select v-model="days" text-12px font-bold text-black>
        <option value="7">
          7 Days
        </option>
        <option value="28">
          28 Days
        </option>
      </select>
    </div>
    <div class="pane">
      <Echarts ref="echartRef" :option="option" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pane {
  width: 100%;
  height: 250px;
}
</style>
