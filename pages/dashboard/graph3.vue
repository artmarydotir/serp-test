<template>
  <v-container>
    Real Data:
    <br />
    <v-row>
      <v-col cols="612">
        <v-card height="800">
          <Chart :option="graphReal" :loading="loading" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { reactive, onMounted } from 'vue';

const loading = ref(true);

const graphReal = reactive({
  title: {
    text: 'Serp Graph',
    top: 'bottom',
    left: 'right',
  },
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  tooltip: {},
  series: [
    {
      name: 'Sample',
      type: 'graph',
      layout: 'none',
      data: null,
      edges: null,
      emphasis: {
        focus: 'adjacency',
        label: {
          position: 'right',
          show: true,
        },
      },
      roam: true,
      // label: {
      //   position: 'right',
      // },
      // force: {
      //   repulsion: 100,
      // },
      lineStyle: {
        width: 0.5,
        curveness: 0.3,
        opacity: 0.7,
      },
    },
  ],
});

onMounted(async () => {
  loading.value = true;
  const res = await fetch('/r1.json');
  const data = await res.json();
  console.log(data);
  const nch = data.nodes.map((item) => {
    return {
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      id: item.id,
      name: item.label,
      symbolSize: item.size,
      itemStyle: {
        color: item.color,
      },
    };
  });

  const ech = data.edges.map((item) => {
    return {
      source: item.sourceID,
      target: item.targetID,
    };
  });

  graphReal.series[0].data = nch;
  graphReal.series[0].edges = ech;

  loading.value = false;
});
</script>
