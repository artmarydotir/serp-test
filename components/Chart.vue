<template>
  <div>
    <client-only>
      <v-chart
        class="chart"
        :option="option"
        ref="chart"
        :autoresize="true"
        :loading="false"
      />
    </client-only>
  </div>
</template>

<script>
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { PieChart, BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  GridSimpleComponent,
  DataZoomComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";

use([
  SVGRenderer,
  GridComponent,
  GridSimpleComponent,
  PieChart,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
]);

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  props: {
    option: {
      type: Object,
      default: () => ({}),
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

  beforeUnmount() {
    console.log("beforeDestroy");
    this.$refs.chart.dispose();
  },
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
