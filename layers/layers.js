var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_JalanKotaBatu_2 = new ol.format.GeoJSON();
var features_JalanKotaBatu_2 = format_JalanKotaBatu_2.readFeatures(json_JalanKotaBatu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanKotaBatu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanKotaBatu_2.addFeatures(features_JalanKotaBatu_2);
var lyr_JalanKotaBatu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanKotaBatu_2, 
                style: style_JalanKotaBatu_2,
                popuplayertitle: 'Jalan Kota Batu',
                interactive: true,
                title: '<img src="styles/legend/JalanKotaBatu_2.png" /> Jalan Kota Batu'
            });
var format_Jangkauan15km_3 = new ol.format.GeoJSON();
var features_Jangkauan15km_3 = format_Jangkauan15km_3.readFeatures(json_Jangkauan15km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan15km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan15km_3.addFeatures(features_Jangkauan15km_3);
var lyr_Jangkauan15km_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan15km_3, 
                style: style_Jangkauan15km_3,
                popuplayertitle: 'Jangkauan 1,5 km',
                interactive: true,
                title: '<img src="styles/legend/Jangkauan15km_3.png" /> Jangkauan 1,5 km'
            });
var format_AreayangTerjangkau_4 = new ol.format.GeoJSON();
var features_AreayangTerjangkau_4 = format_AreayangTerjangkau_4.readFeatures(json_AreayangTerjangkau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreayangTerjangkau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreayangTerjangkau_4.addFeatures(features_AreayangTerjangkau_4);
var lyr_AreayangTerjangkau_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreayangTerjangkau_4, 
                style: style_AreayangTerjangkau_4,
                popuplayertitle: 'Area yang Terjangkau',
                interactive: true,
                title: '<img src="styles/legend/AreayangTerjangkau_4.png" /> Area yang Terjangkau'
            });
var format_TitikRumahSakit_5 = new ol.format.GeoJSON();
var features_TitikRumahSakit_5 = format_TitikRumahSakit_5.readFeatures(json_TitikRumahSakit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikRumahSakit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikRumahSakit_5.addFeatures(features_TitikRumahSakit_5);
var lyr_TitikRumahSakit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikRumahSakit_5, 
                style: style_TitikRumahSakit_5,
                popuplayertitle: 'Titik Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/TitikRumahSakit_5.png" /> Titik Rumah Sakit'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_JalanKotaBatu_2.setVisible(true);lyr_Jangkauan15km_3.setVisible(true);lyr_AreayangTerjangkau_4.setVisible(true);lyr_TitikRumahSakit_5.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_BatasAdministrasi_1,lyr_JalanKotaBatu_2,lyr_Jangkauan15km_3,lyr_AreayangTerjangkau_4,lyr_TitikRumahSakit_5];
lyr_BatasAdministrasi_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_JalanKotaBatu_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'sport': 'sport', 'indoor': 'indoor', 'destination:symbol': 'destination:symbol', 'toilets': 'toilets', 'parking:lane:right': 'parking:lane:right', 'footway': 'footway', 'est_width': 'est_width', 'surface:note': 'surface:note', 'name:id': 'name:id', 'junction:ref': 'junction:ref', 'structure': 'structure', 'description': 'description', 'barrier': 'barrier', 'tunnel': 'tunnel', 'covered': 'covered', 'sidewalk': 'sidewalk', 'not:name': 'not:name', 'motorroad': 'motorroad', 'ford': 'ford', 'noname': 'noname', 'moped': 'moped', 'mofa': 'mofa', 'ramp:wheelchair': 'ramp:wheelchair', 'ramp:luggage': 'ramp:luggage', 'handrail': 'handrail', 'wheelchair': 'wheelchair', 'incline': 'incline', 'lit': 'lit', 'smoothness': 'smoothness', 'oneway:motorcar': 'oneway:motorcar', 'toll': 'toll', 'operator': 'operator', 'minspeed': 'minspeed', 'int_ref': 'int_ref', 'short_name': 'short_name', 'comment': 'comment', 'noexit': 'noexit', 'import': 'import', 'truck': 'truck', 'junction': 'junction', 'destination:ref': 'destination:ref', 'destination': 'destination', 'service': 'service', 'amenity': 'amenity', 'shoulder': 'shoulder', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'maxspeed': 'maxspeed', 'alt_name': 'alt_name', 'foot': 'foot', 'bicycle': 'bicycle', 'motor_vehicle': 'motor_vehicle', 'width': 'width', 'man_made': 'man_made', 'oneway:conditional': 'oneway:conditional', 'horse': 'horse', 'access': 'access', 'lane_markings': 'lane_markings', 'reg_ref': 'reg_ref', 'designation': 'designation', 'layer': 'layer', 'bridge': 'bridge', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'tracktype': 'tracktype', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', });
lyr_Jangkauan15km_3.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_AreayangTerjangkau_4.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'type': 'type', 'start': 'start', });
lyr_TitikRumahSakit_5.set('fieldAliases', {'Rumah Saki': 'Rumah Saki', 'Alamat': 'Alamat', 'x': 'x', 'y': 'y', 'Foto': 'Foto', });
lyr_BatasAdministrasi_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_JalanKotaBatu_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'crossing:markings': '', 'crossing': '', 'sport': '', 'indoor': '', 'destination:symbol': '', 'toilets': '', 'parking:lane:right': '', 'footway': '', 'est_width': '', 'surface:note': '', 'name:id': '', 'junction:ref': '', 'structure': '', 'description': '', 'barrier': '', 'tunnel': '', 'covered': '', 'sidewalk': '', 'not:name': '', 'motorroad': '', 'ford': '', 'noname': '', 'moped': '', 'mofa': '', 'ramp:wheelchair': '', 'ramp:luggage': '', 'handrail': '', 'wheelchair': '', 'incline': '', 'lit': '', 'smoothness': '', 'oneway:motorcar': '', 'toll': '', 'operator': '', 'minspeed': '', 'int_ref': '', 'short_name': '', 'comment': '', 'noexit': '', 'import': '', 'truck': '', 'junction': '', 'destination:ref': '', 'destination': '', 'service': '', 'amenity': '', 'shoulder': '', 'motorcycle': '', 'motorcar': '', 'maxspeed': '', 'alt_name': '', 'foot': '', 'bicycle': '', 'motor_vehicle': '', 'width': '', 'man_made': '', 'oneway:conditional': '', 'horse': '', 'access': '', 'lane_markings': '', 'reg_ref': '', 'designation': '', 'layer': '', 'bridge': '', 'name:etymology:wikipedia': '', 'name:etymology:wikidata': '', 'tracktype': '', 'lanes': '', 'surface': '', 'ref': '', 'oneway': '', 'name': '', });
lyr_Jangkauan15km_3.set('fieldImages', {'Rumah Saki': '', 'Alamat': '', 'x': '', 'y': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_AreayangTerjangkau_4.set('fieldImages', {'Rumah Saki': '', 'Alamat': '', 'x': '', 'y': '', 'type': '', 'start': '', });
lyr_TitikRumahSakit_5.set('fieldImages', {'Rumah Saki': 'TextEdit', 'Alamat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', });
lyr_JalanKotaBatu_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'crossing:markings': 'hidden field', 'crossing': 'hidden field', 'sport': 'hidden field', 'indoor': 'hidden field', 'destination:symbol': 'hidden field', 'toilets': 'hidden field', 'parking:lane:right': 'hidden field', 'footway': 'hidden field', 'est_width': 'hidden field', 'surface:note': 'hidden field', 'name:id': 'hidden field', 'junction:ref': 'hidden field', 'structure': 'hidden field', 'description': 'hidden field', 'barrier': 'hidden field', 'tunnel': 'hidden field', 'covered': 'hidden field', 'sidewalk': 'hidden field', 'not:name': 'hidden field', 'motorroad': 'hidden field', 'ford': 'hidden field', 'noname': 'hidden field', 'moped': 'hidden field', 'mofa': 'hidden field', 'ramp:wheelchair': 'hidden field', 'ramp:luggage': 'hidden field', 'handrail': 'hidden field', 'wheelchair': 'hidden field', 'incline': 'hidden field', 'lit': 'hidden field', 'smoothness': 'hidden field', 'oneway:motorcar': 'hidden field', 'toll': 'hidden field', 'operator': 'hidden field', 'minspeed': 'hidden field', 'int_ref': 'hidden field', 'short_name': 'hidden field', 'comment': 'hidden field', 'noexit': 'hidden field', 'import': 'hidden field', 'truck': 'hidden field', 'junction': 'hidden field', 'destination:ref': 'hidden field', 'destination': 'hidden field', 'service': 'hidden field', 'amenity': 'hidden field', 'shoulder': 'hidden field', 'motorcycle': 'hidden field', 'motorcar': 'hidden field', 'maxspeed': 'hidden field', 'alt_name': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'motor_vehicle': 'hidden field', 'width': 'hidden field', 'man_made': 'hidden field', 'oneway:conditional': 'hidden field', 'horse': 'hidden field', 'access': 'hidden field', 'lane_markings': 'hidden field', 'reg_ref': 'hidden field', 'designation': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'name:etymology:wikipedia': 'hidden field', 'name:etymology:wikidata': 'hidden field', 'tracktype': 'hidden field', 'lanes': 'hidden field', 'surface': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'name': 'hidden field', });
lyr_Jangkauan15km_3.set('fieldLabels', {'Rumah Saki': 'hidden field', 'Alamat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'area': 'hidden field', 'perimeter': 'hidden field', });
lyr_AreayangTerjangkau_4.set('fieldLabels', {'Rumah Saki': 'header label - visible with data', 'Alamat': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_TitikRumahSakit_5.set('fieldLabels', {'Rumah Saki': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'x': 'hidden field', 'y': 'hidden field', 'Foto': 'inline label - always visible', });
lyr_TitikRumahSakit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});