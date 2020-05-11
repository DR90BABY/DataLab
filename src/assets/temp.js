let objs = {};
let id = "";
let devAdd_name = [];
objs.forEach(element => {
  devAdd_name.push(element.name);
});
let dashObj = {};
dashObj.id = id;
dashObj.visible = true;
dashObj.devices = devAdd_name;
this.$store.commit("saveDash", dashObj);
