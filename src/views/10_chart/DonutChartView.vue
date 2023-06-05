<template>
  <div>
    <apexchart
      width="100%"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      options: {
        labels: ['Java', 'Python', 'JS', 'Nods.js', 'DB'],
        legend: {
          show: false
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5
            }
          }
        },
        theme: {
          monochrome: {
            enabled: true
          }
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
          }
        }
      },
      series: [44, 55, 41, 17, 15]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
