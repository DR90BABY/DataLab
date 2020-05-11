<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <v-container  min-height="90vh">
      <v-row>
        <Device v-for="device in devices"
        :Location= "device.Location"
        :Name= "device.Name"
        :Serial= "device.ID"
        :Type= "device.Type"
        :key="device.ID">
        </Device>
      </v-row>
      </v-container>
      <AddDevice/>
    </v-content>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue'
import Device from '../components/Device.vue'
import AddDevice from '../components/CreateDevice.vue'
export default {
  components: { NavBar, Device, AddDevice },
  computed: {
    devices () {
      return this.$store.getters.getDevices
    }
  }
}
</script>
