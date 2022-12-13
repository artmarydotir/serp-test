<template>
  <div>
    <client-only>
      <v-chart
        ref="chart"
        class="chart"
        :option="option"
        :autoresize="true"
        :loading="loading"
        @click="handleClick"
      />
    </client-only>
  </div>
</template>

<script>
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import { PieChart, BarChart, LineChart, GraphChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  GridSimpleComponent,
  DataZoomComponent,
} from 'echarts/components';

import VChart, { THEME_KEY } from 'vue-echarts';

use([
  SVGRenderer,
  GridComponent,
  GridSimpleComponent,
  PieChart,
  BarChart,
  LineChart,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
]);

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'dark',
  },
  props: {
    option: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  //   setup() {
  //     const option = ref({
  //       title: {
  //         text: "Traffic Sources",
  //         left: "center",
  //       },
  //       tooltip: {
  //         trigger: "item",
  //         formatter: "{a} <br/>{b} : {c} ({d}%)",
  //       },
  //       legend: {
  //         orient: "vertical",
  //         left: "left",
  //         data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  //       },
  //       series: [
  //         {
  //           name: "Traffic Sources",
  //           type: "pie",
  //           radius: "55%",
  //           center: ["50%", "60%"],
  //           data: [
  //             { value: 335, name: "Direct" },
  //             { value: 310, name: "Email" },
  //             { value: 234, name: "Ad Networks" },
  //             { value: 135, name: "Video Ads" },
  //             { value: 1548, name: "Search Engines" },
  //           ],
  //           emphasis: {
  //             itemStyle: {
  //               shadowBlur: 10,
  //               shadowOffsetX: 0,
  //               shadowColor: "rgba(0, 0, 0, 0.5)",
  //             },
  //           },
  //         },
  //       ],
  //     });

  //     return { option };
  //   },
  methods: {
    handleClick(params) {
      // console.log('click', params);
      // console.log('click', params.data);
      // // window.open(
      // //   'https://www.google.com/search?q=' + encodeURIComponent(params.name),
      // // );
      this.$emit('click', params);
    },
  },

  beforeUnmount() {
    console.log('beforeDestroy');
    // dispose echarts instance

    this.$refs.chart.dispose();
    this.$refs.chart.value = null;
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
