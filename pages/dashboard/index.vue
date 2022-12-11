<template>
  <div>
    <Chart :option="barOption" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      barOption: {
        title: {
          text: "Sessions by country",
          left: "center",
        },
        xAxis: {
          type: "category",
          data: ["ایران", "آلمان", "سلام علیکم", "Afghanistan"],
        },
        yAxis: {
          type: "value",
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar", data: [10, 52, 200, 334] }],
      },
    };
  },
};
</script>
