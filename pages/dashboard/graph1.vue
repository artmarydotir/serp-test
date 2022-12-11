<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-textField
          v-model="node"
          name="name"
          type="number"
          min="2"
          label="Number of nodes"
          @change="reloadGraph"
        />
      </v-col>
      <v-col cols="12" md="5">
        <v-textField
          v-model="link"
          name="link"
          type="number"
          label="Number of links"
          min="0"
          @change="reloadGraph"
        />
      </v-col>
      <v-col cols="12" md="2">
        <v-checkbox
          v-model="check"
          label="Show Node Name"
          :value="true"
          @change="showLabel"
        ></v-checkbox>
      </v-col>
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
    subtext: 'Default layout',
    top: 'bottom',
    left: 'right',
  },

  tooltip: {},
  series: [
    {
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
        repulsion: 100,
      },
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3,
      },
      labelLayout: {
        hideOverlap: true,
      },
    },
  ],
});

function reloadGraph() {
  getFakeData(node.value, link.value);
}

function showLabel() {
  graphOption1.series[0].label.show = check.value;
}
function getFakeData() {
  loading.value = true;
  const res = fake(node.value, link.value);
  graphOption1.series[0].data = res.nodes;
  graphOption1.series[0].links = res.links;
  graphOption1.series[0].categories = res.categories;
  loading.value = false;
}

onMounted(async () => {
  getFakeData();
});
</script>
