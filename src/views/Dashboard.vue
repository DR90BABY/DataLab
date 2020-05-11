<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="4" sm="12" md="4">
            <DEVICES @updateDevice = "updateCharts(selected_devices)" />
          </v-col>
          <v-col cols="12" lg="4" sm="12" md="4">
            <DATE @updateDate="updateCharts(date_range)" />
          </v-col>
          <v-col cols="12" lg="4" sm="12" md="4">
            <DASHBOARDS @updateDash= "fetchDash" />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="plotObj in singleplot_data"
            :key="plotObj.key"
            cols="12"
            sm="12"
            :lg="ScreenSize"
            md="12"
          >
            <Graph
              @toggleScreen="toggleScreen"
              :chartId="setId(plotObj.data)"
              :chartData="plotObj.data"
              :chartLabels="plotObj.labels"
            />
          </v-col>
        </v-row>
        <CREATEDASH />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Graph from '../components/Graph.vue'
import DATE from '../components/DatePicker.vue'
import DEVICES from '../components/DevicePicker.vue'
import CREATEDASH from '../components/CreateDash.vue'
import DASHBOARDS from '../components/DashSelect'

export default {
  components: {
    NavBar,
    Graph,
    DATE,
    DEVICES,
    CREATEDASH,
    DASHBOARDS
  },
  computed: {
    singleplot_data () {
      let plotObj = this.$store.getters.getData
      // console.log(plotObj)
      return plotObj
    },
    date_range () {
      return this.$store.getters.getDates
    },
    selected_devices () {
      return this.$store.getters.getActiveDevices
    }
  },

  methods: {
    updateCharts (dates) {
      console.log('DASH', dates)
    },
    toggleScreen (value) {
    // console.log('VAL', value)

      this.ScreenSize = value
    },
    setId (objs) {
      let id =
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      console.log(objs)
      return id
    },
    fetchDash () {}
  },
  data: () => ({
    ScreenSize: '6',
    e7: [],
    chips: [],
    chartType: '',
    modal: false,
    sticky: false
  })
}
</script>
<style lang="css"></style>
