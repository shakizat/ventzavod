/* jshint undef: true, unused: true */
/* global define, google: false */
define(['components/mapStyles'], function(MapStyles){
	'use strict';

	var Map = {
		init: function() {

			var	mapBlock = document.getElementById('map-block');
			var myLatlng = new google.maps.LatLng(51.168580, 71.449050);
			
			var	mapOptions = {
			      	zoom: 17,
					center: myLatlng,
			      	mapTypeId: google.maps.MapTypeId.HYBRID,
			      	styles: MapStyles
				};

			var	map = new google.maps.Map(mapBlock, mapOptions);

			var image = {
				url: 'images/pin.png'
			};
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: image
			});
		}
	};

	Map.init();
});