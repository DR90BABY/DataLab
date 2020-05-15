# VUEX STORE DESCRIPTION
## Dashboard 
```javascript
//Array of objects
Dashboard: ['Object1', 'Object2']
// Objects structure
Object : {
    Title: String,
    ID: String,
    Visible: boolean,
    PlotType: 'single-plot' || 'multi-plot',
    Devices: ['Device A', 'Device B', 'Device C']
}
```
## Devices
```javascript
//Array of objects
Devices: [Object1, Object2]
// Objects structure
Object : {
    Name: String,
    ID: String,
    Active: boolean,
    AssetCategory:String,
    Location: String
}
```
## Data
```javascript
    //Structure of data Array
    DATA:[Object1,Object2]
    // Structure of data object
    Object:{
        Labels: [],
        Series:[Object3,Object4,Object5]
        //structure of Series object
        Object3:{
            name:String,
            data_set: [numbers]
        }
    }
```
## Alerts
```javascript
Alert:[AlertObject0, AlertObject1, AlertObject2]
AlertObject:{
    ID: String,
    Time: Date,
    Acknowledged: Boolean,
    Sent: Boolean,
    Recipients:[{
        Name: String,
        Email: String,
        Phone: Number
    }],
    AlertType: String, // Above Max, Below Min, Optimal Level
    Active: Boolean,
    Source: {
        DeviceName: String,
        DEVICEID: String
    },
    Msg:String
}
```
