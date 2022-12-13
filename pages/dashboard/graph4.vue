<template>
  <v-container>
    <v-row>
      <v-col cols="612">
        <v-card height="800">
          <Chart :option="graphOption1" :loading="loading" />
        </v-card>
        {{ tax }}
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { reactive, onMounted } from 'vue';
const fake = useFakeData;

const node = ref(10);
const link = ref(2);
const check = ref(true);
const loading = ref(true);
const tax = ref(false);

const graphOption1 = reactive({
  title: {
    text: 'Serp Graph',
    subtext: 'Default layout',
    top: 'bottom',
    left: 'right',
  },

  tooltip: {},
  series: [
    {
      animation: false,
      draggable: true,
      name: 'Les Miserables',
      type: 'graph',
      layout: 'force',
      data: null,
      links: null,
      categories: null,
      roam: true,
      label: {
        position: 'right',
      },
      force: {
        // repulsion: 100,
        edgeLength: 100,
        repulsion: 100,
        gravity: 0.3,
      },
      // label: {
      //   show: true,
      //   position: 'right',
      //   formatter: '{b}',
      // },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
      labelLayout: {
        hideOverlap: false,
      },
    },
  ],
});

onMounted(async () => {
  loading.value = true;
  const res = await fetch('/r2.json');
  const data = await res.json();
  console.log(data);
  graphOption1.series[0].data = data.nodes;
  graphOption1.series[0].links = data.links;

  const cat = data.categories.map((item) => {
    return {
      name: item,
    };
  });

  graphOption1.series[0].categories = cat;
  loading.value = false;
});
</script>
