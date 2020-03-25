	var map = new L.Map('map', {zoom: 12, center: new L.latLng(data[0].loc) });	//set center from first location

	map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));	//base layer

	var markersLayer = new L.LayerGroup();	//layer contain searched elements
	
	map.addLayer(markersLayer);

	var controlSearch = new L.Control.Search({
		position:'topleft',		
		layer: markersLayer,
		initial: false,
		zoom: 16,
		marker: false
	});

	map.addControl( controlSearch );

	

	////////////populate map with markers from sample data
	for(i in data) {
		var title = data[i].title,	//value searched
			loc = data[i].loc,		//position found
			marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
		marker.bindPopup('title: '+ title );
		markersLayer.addLayer(marker);
	}
	
	
	
	
	

