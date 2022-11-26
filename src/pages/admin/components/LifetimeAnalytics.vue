<script setup lang="ts">
import { generateDay } from '~/utils/util'
import type { EChartsOption } from '~/types/echarts'

const colors = ['#4ade80', '#c085fc', '#5fa4f9', '#f572b5', '#facc14']
const rangeTime = generateDay(7)
rangeTime[6] = '今天'
const option: EChartsOption = {
  colors,
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   crossStyle: {
    //     color: '#999',
    //   },
    // },
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
    },
  ],
  yAxis: [
    {
      type: 'value',
      lineStyle: {
        type: 'dotted',
        color: 'rgba(255,255,255,0.3)',
      },
      // name: 'Precipitation',
      // interval: 50,
      // axisLabel: {
      //   formatter: '{value} ml',
      // },
    },
    {
      show: false,
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
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
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
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: 'Clicks Through Rate',
      type: 'line',
      color: '#5fa4f9',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}%`
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
    {
      name: 'Revenue',
      type: 'bar',
      color: '#f572b5',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}%`
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
    {
      name: 'Subscribers',
      type: 'bar',
      color: '#facc14',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter(value: number) {
          return `${value as number}%`
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
}
</script>

<template>
  <div>
    <div text-12px>
      <span class="text-#212529">
        Date Range:
      </span>
      <select text-12px font-bold text-black>
        <option value="7">
          7 Days
        </option>
        <option value="28">
          28 Days
        </option>
      </select>
    </div>
    <Echarts :option="option" :width="982" :height="250" />
  </div>
</template>

<style lang="scss" scoped>

</style>
