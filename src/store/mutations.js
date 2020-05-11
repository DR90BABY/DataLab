export default {
  createDash (state, dashObj) {
    // saveDashMetaData in db()
    state.Dashboards.push(dashObj)
  },
  changeView (state, obj) {
    if (obj.size === 'max') {
      console.log('in max')
      state.Dashboards.forEach(element => {
        if (element.id !== obj.id) element.visible = false
      })
    }

    if (obj.size === 'min') {
      console.log('in min')
      state.Dashboards.forEach(element => {
        element.visible = true
      })
    }
  },
  activateDevice (state, devices) {
    let Devices = state.Devices
    Devices.forEach(Device => {
      if (devices.includes(Device.Name)) {
        Device.Active = true
      } else {
        Device.Active = false
      }
    })
  },
  setRange (state, Arr) {
    state.DateRange[0] = Arr[0]
    state.DateRange[1] = Arr[1]
  },
  addDevice (state, device) {
    state.Devices.push(device)
  },
  editDevice (state, obj) {
    state.Devices.forEach(element => {
      if (element.ID === obj.ID) {
        element.Name = obj.Name
        element.Location = obj.Location
      }
    })
  }
}
