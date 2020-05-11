/* eslint-disable */
<template>
  <v-card class="blue-grey darken-4">
    <v-row>
      <v-col cols="6">
        <div class="subtitle ma-1 ml-2 white--text">GREEEN HOUSE</div>
      </v-col>
      <v-col cols="6" right>
        <div>
          <v-icon color="white" class="ma-2" @click="changeChart('bar')">bar_chart</v-icon>
          <v-icon color="white" class="ma-2" @click="changeChart('line')">timeline</v-icon>
          <v-icon color="white" class="ma-2" @click="changeChart('radar')">ac_unit</v-icon>
          <v-icon v-if="!FullScreen" color="white" class="ma-2" @click="viewMode('max',chartID)">fullscreen</v-icon>
          <v-icon v-if ="FullScreen" color="white" class="ma-2" @click="viewMode('min',chartID)">fullscreen_exit</v-icon>
        </div>
      </v-col>
    </v-row>
    <v-card-text class="ma-n2">
      <VueCharts :type="chartType" :options="options" :series="chartData"></VueCharts>
    </v-card-text>
  </v-card>
</template>

<script>
import VueCharts from 'vue-apexcharts'

export default {
  components: {
    VueCharts
  },
  props: ['chartData', 'chartLabels', 'chartId'],
  data () {
    return {
      FullScreen: false,
      chartID: this.chartId,
      chartType: '',
      options: {
        chart: {
          id: 'vuechart-example',
          background: '#263238',
          toolbar: {
            show: false
          }
        },
        legend: {
          show: false,
          position: 'top'
        },
        xaxis: {
          categories: this.chartLabels,
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        theme: {
          mode: 'dark',
          palette: 'palette5'
        },
        grid: {
          show: false
        }
      },
      series: this.chartData
    }
  },
  methods: {
    changeChart (chartType) {
      this.chartType = chartType
    },
    viewMode (size, id) {
      let obj = {}
      obj.size = size
      obj.id = id
      this.$store.commit('changeView', obj)
      this.FullScreen = !this.FullScreen
      let value = '6'
      if (obj.size === 'max') { value = '12' }
      this.$emit('toggleScreen', value)
    }
  }
}
</script>
<style></style>
