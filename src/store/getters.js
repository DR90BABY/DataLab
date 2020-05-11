export default {
  getDevices (state) {
    return state.Devices
  },
  getData (state) {
    return state.Data
  },
  getDashboards (state) {
    return state.Dashboards
  },
  getDates (state) {
    return state.DateRange
  },
  getActiveDevices (state) {
    return state.Devices.filter(Device => Device.Active === true)
  }
}
