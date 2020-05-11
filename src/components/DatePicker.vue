<template>
  <div class="text-center mt-n7">
    <v-dialog v-model="dialog" persistent width="300">
      <template v-slot:activator="{ on }" dense>
        <v-toolbar dense width="" class="right">
          <span v-on="on">
            <v-icon color="green">calendar_today</v-icon> Select Period
          </span>
        </v-toolbar>
      </template>
      <v-date-picker
        max-width="250px"
        v-model="dates"
        range
        @change="acceptOk()"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn text v-show="dateSelected" color="primary" @click="getRange"
          >OK</v-btn
        >
      </v-date-picker>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dates: [],
      dialog: false,
      dateSelected: false
    }
  },
  methods: {
    getRange () {
      let timeStamps = []
      timeStamps[0] = Date.parse(this.dates[0])
      timeStamps[1] = Date.parse(this.dates[1])
      this.$store.commit('setRange', timeStamps)
      this.$emit('updateDate')
      this.dialog = false
    },
    acceptOk () {
      this.dateSelected = true
    }
  }
}
</script>
<style lang="css"></style>
