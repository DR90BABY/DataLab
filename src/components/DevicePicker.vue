<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-select
          v-model="selected_devices"
          :items="devices"
          label="Select Devices"
          multiple
          chips
          solo
        ></v-select>
      </v-col>
      <v-col cols="2">
        <v-btn
          class="mt-1"
          v-show="this.selected_devices.length >= 1"
          fab
          dark
          small
          @click="updateDevices"
          color="green"
        >
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    devices () {
      let devicesArr = this.$store.getters.getDevices
      let devNames = []
      devicesArr.forEach(element => {
        devNames.push(element.Name)
      })
      return devNames
    }
  },
  data () {
    return {
      selected_devices: [],
      show_btn: false
    }
  },
  methods: {
    updateDevices () {
      this.$store.commit('activateDevice', this.selected_devices)
      this.$emit('updateDevice')
    }
  }
}
</script>
<style lang="css"></style>
