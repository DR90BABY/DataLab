<template>
  <v-app>
    <Device />
  </v-app>
</template>
<script>
// import Dashboard from './views/Dashboard.vue'
import Device from './views/Devices'
import { store } from './store/index'
export default {
  store,
  components: {
    // Dashboard,
    Device
  }
}
</script>

<style></style>
