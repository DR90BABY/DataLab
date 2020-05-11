<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-select v-model="selected_dashboards" :items="dashboards" label="Select Dashboards"
        multiple chips close solo ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn class="mt-1 mr-4" v-show="selected_dashboards.length >= 1" fab dark small
          @click="updateDashboards" color="green" >
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    dashboards () {
      let dashboardArr = []
      this.$store.getters.getDashboards.forEach(element => {
        dashboardArr.push(element.Title)
      })
      return dashboardArr
    }
  },
  data () {
    return {
      selected_dashboards: [],
      show_btn: false
    }
  },
  methods: {
    updateDashboards () {
      this.$store.commit('activateDashboards', this.selected_dashboards)
      this.$emit('updateDash')
    }
  }
}
</script>
<style lang="css"></style>
