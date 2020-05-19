export default {
  getDevices (state) {
    let deviceArr = []
    state.Devices.forEach(element => {
      deviceArr.push(element.Name)
    })
    return deviceArr
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
  },
  getNav (state) {
    return state.NavItems
  },
  getAlerts (state) {
    return state.Alerts
  }
}
