<template>
  <v-container>
    Node Number: 717
    <br />
    Edge Number: 942
    <v-row>
      <!-- <v-col cols="12" md="2">
        <v-checkbox
          v-model="check"
          label="Show Node Name"
          :value="true"
          @change="showLabel"
        ></v-checkbox>
      </v-col> -->
    </v-row>
    <v-row>
      <v-col cols="612">
        <v-card height="800">
          <Chart :option="graphOption1" :loading="loading" />
        </v-card>
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

const graphOption1 = reactive({
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

// function reloadGraph() {
//   getFakeData(node.value, link.value);
// }

function showLabel() {
  graphOption1.series[0].label.show = check.value;
}

function getFakeData() {
  const res = fake(node.value, link.value);
  graphOption1.series[0].data = res.nodes;
  graphOption1.series[0].links = res.links;
  graphOption1.series[0].categories = res.categories;
}

onMounted(async () => {
  loading.value = true;
  const res = await fetch('/npmdepgraph.min10.json');
  const data = await res.json();

  const nch = data.nodes.map((item) => {
    return {
      x: item.x,
      y: item.y,
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

  graphOption1.series[0].data = nch;
  graphOption1.series[0].edges = ech;

  loading.value = false;
});
</script>
