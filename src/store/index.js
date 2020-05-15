import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions'
import 'es6-promise/auto'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Devices: [{
      Name: 'Device A',
      ID: 'rtyury940',
      Active: true,
      Type: 'Temp & Humidity',
      Location: 'Eldoret'
    }, {
      Name: 'Device B',
      ID: 'rtyurfyey90',
      Active: false,
      Type: 'Temp & Humidity',
      Location: 'Kisumu'
    }, {
      Name: 'Device C',
      ID: 'rtyudydiy94',
      Active: true,
      Type: 'Temp & Humidity',
      Location: 'Siaya'
    }, {
      Name: 'Device D',
      ID: 'rtyury403d',
      Active: false,
      Type: 'Temp & Humidity',
      Location: 'Nairobi'
    }],
    Dashboards: [
      {
        Title: 'Green House',
        ID: 'yfyur848989dj',
        Visible: true,
        PlotType: 'single-plot',
        Devices: ['Device A', 'Device B', 'Device C']
      },
      {
        Title: 'Cold House',
        ID: 'yfyur848gf93239dj',
        Visible: true,
        PlotType: 'multi-plot',
        Devices: ['Device A', 'Device B', 'Device C']
      }
    ],
    Data: [
      {
        labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        data: [
          {
            name: 'OYOO1',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: 'OYOO2',
            data: [40, 55, 8, 50, 9, 39, 27]
          }
        ]
      },
      {
        labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        data: [
          {
            name: 'OYOO3',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: 'OYOO4',
            data: [40, 55, 8, 50, 9, 39, 27]
          }
        ]
      }
    ],
    DateRange: [],
    Alerts: [{
      name: 'DEVICE A',
      time: 'May 12 2020 05:42',
      Status: 'ACTIVE',
      Acknowledged: true,
      AlertType: 'SomeAlert'
    },
    {
      name: 'DEVICE B',
      time: 'May 13 2020 05:42',
      Status: 'SOLVED',
      Acknowledged: false,
      AlertType: 'SomeAlert'
    },
    {
      name: 'DEVICE C',
      time: 'May 14 2020 05:42',
      Status: 'ACTIVE',
      Acknowledged: true,
      AlertType: 'SomeAlert'
    },
    {
      name: 'DEVICE D',
      time: 'May 15 2020 05:42',
      Status: 'SOLVED',
      Acknowledged: false,
      AlertType: 'SomeAlert'
    }]
  },
  getters,
  mutations,
  actions
})
