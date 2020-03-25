Const routingControl = L.Routing.control({
  // router: new L.Routing.OSRMv1({
  //   serviceUrl: ROUTER_SERVICE_URL
  // }),
  plan: new L.Routing.plan([], {
    addWaypoints: false,
    draggableWaypoints: false,
    createMarker: () => undefined
  }),
  lineOptions: {
    addWaypoints: false
  },
  collapsible: true,
  show: false
});

const waypoints = [
  {
    lat: 57.74,
    lng: 11.94
  },
  {
    lat: 57.6792,
    lng: 11.949
  }
];

routingControl.setWaypoints(waypoints);
map.addControl(routingControl);
routingControl.show();
