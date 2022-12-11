<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card height="400">
          <Chart :option="barOption" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
const barOption = reactive({
  title: {
    text: 'Sessions by country',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: ['ایران', 'آلمان', 'سلام علیکم', 'Afghanistan'],
  },
  yAxis: {
    type: 'value',
  },
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar', data: [10, 52, 200, 334] }],

  height: 300,
});
</script>
