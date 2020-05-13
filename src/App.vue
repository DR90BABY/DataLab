<template>
  <v-app>
    <Alerts/>
  </v-app>
</template>
<script>
// import Dashboard from './views/Dashboard.vue'
// import Device from './views/Devices'
import store from './store/index'
import Alerts from './views/Alerts'
export default {
  store,
  components: {
    // Dashboard,
    // Device,
    Alerts
  }
}
</script>

<style></style>
