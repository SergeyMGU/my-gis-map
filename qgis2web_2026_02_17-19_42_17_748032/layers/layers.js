var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_zones_1972_1 = new ol.format.GeoJSON();
var features_zones_1972_1 = format_zones_1972_1.readFeatures(json_zones_1972_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zones_1972_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zones_1972_1.addFeatures(features_zones_1972_1);
var lyr_zones_1972_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zones_1972_1, 
                style: style_zones_1972_1,
                popuplayertitle: 'zones_1972',
                interactive: true,
    title: 'zones_1972<br />\
    <img src="styles/legend/zones_1972_1_0.png" /> non_living_other<br />\
    <img src="styles/legend/zones_1972_1_1.png" /> living_private<br />\
    <img src="styles/legend/zones_1972_1_2.png" /> living_high<br />\
    <img src="styles/legend/zones_1972_1_3.png" /> living_medium<br />\
    <img src="styles/legend/zones_1972_1_4.png" /> non_living_amenity<br />\
    <img src="styles/legend/zones_1972_1_5.png" /> non_living_industrial<br />\
    <img src="styles/legend/zones_1972_1_6.png" /> living_low<br />\
    <img src="styles/legend/zones_1972_1_7.png" /> <br />' });
var format_zones_2002_2 = new ol.format.GeoJSON();
var features_zones_2002_2 = format_zones_2002_2.readFeatures(json_zones_2002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zones_2002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zones_2002_2.addFeatures(features_zones_2002_2);
var lyr_zones_2002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zones_2002_2, 
                style: style_zones_2002_2,
                popuplayertitle: 'zones_2002',
                interactive: true,
    title: 'zones_2002<br />\
    <img src="styles/legend/zones_2002_2_0.png" /> non_living_other<br />\
    <img src="styles/legend/zones_2002_2_1.png" /> living_private<br />\
    <img src="styles/legend/zones_2002_2_2.png" /> living_high<br />\
    <img src="styles/legend/zones_2002_2_3.png" /> living_medium<br />\
    <img src="styles/legend/zones_2002_2_4.png" /> non_living_amenity<br />\
    <img src="styles/legend/zones_2002_2_5.png" /> non_living_industrial<br />\
    <img src="styles/legend/zones_2002_2_6.png" /> living_low<br />\
    <img src="styles/legend/zones_2002_2_7.png" /> <br />' });
var format_zones_2011_3 = new ol.format.GeoJSON();
var features_zones_2011_3 = format_zones_2011_3.readFeatures(json_zones_2011_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zones_2011_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zones_2011_3.addFeatures(features_zones_2011_3);
var lyr_zones_2011_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zones_2011_3, 
                style: style_zones_2011_3,
                popuplayertitle: 'zones_2011',
                interactive: true,
    title: 'zones_2011<br />\
    <img src="styles/legend/zones_2011_3_0.png" /> non_living_other<br />\
    <img src="styles/legend/zones_2011_3_1.png" /> living_private<br />\
    <img src="styles/legend/zones_2011_3_2.png" /> living_high<br />\
    <img src="styles/legend/zones_2011_3_3.png" /> living_medium<br />\
    <img src="styles/legend/zones_2011_3_4.png" /> non_living_amenity<br />\
    <img src="styles/legend/zones_2011_3_5.png" /> non_living_industrial<br />\
    <img src="styles/legend/zones_2011_3_6.png" /> living_low<br />\
    <img src="styles/legend/zones_2011_3_7.png" /> <br />' });
var format_zones_2016_4 = new ol.format.GeoJSON();
var features_zones_2016_4 = format_zones_2016_4.readFeatures(json_zones_2016_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zones_2016_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zones_2016_4.addFeatures(features_zones_2016_4);
var lyr_zones_2016_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zones_2016_4, 
                style: style_zones_2016_4,
                popuplayertitle: 'zones_2016',
                interactive: true,
    title: 'zones_2016<br />\
    <img src="styles/legend/zones_2016_4_0.png" /> non_living_other<br />\
    <img src="styles/legend/zones_2016_4_1.png" /> living_private<br />\
    <img src="styles/legend/zones_2016_4_2.png" /> living_high<br />\
    <img src="styles/legend/zones_2016_4_3.png" /> living_medium<br />\
    <img src="styles/legend/zones_2016_4_4.png" /> non_living_amenity<br />\
    <img src="styles/legend/zones_2016_4_5.png" /> non_living_industrial<br />\
    <img src="styles/legend/zones_2016_4_6.png" /> living_low<br />\
    <img src="styles/legend/zones_2016_4_7.png" /> <br />' });
var format_zones_2022_5 = new ol.format.GeoJSON();
var features_zones_2022_5 = format_zones_2022_5.readFeatures(json_zones_2022_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zones_2022_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zones_2022_5.addFeatures(features_zones_2022_5);
var lyr_zones_2022_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zones_2022_5, 
                style: style_zones_2022_5,
                popuplayertitle: 'zones_2022',
                interactive: true,
    title: 'zones_2022<br />\
    <img src="styles/legend/zones_2022_5_0.png" /> non_living_other<br />\
    <img src="styles/legend/zones_2022_5_1.png" /> living_private<br />\
    <img src="styles/legend/zones_2022_5_2.png" /> living_high<br />\
    <img src="styles/legend/zones_2022_5_3.png" /> living_medium<br />\
    <img src="styles/legend/zones_2022_5_4.png" /> non_living_amenity<br />\
    <img src="styles/legend/zones_2022_5_5.png" /> non_living_industrial<br />\
    <img src="styles/legend/zones_2022_5_6.png" /> living_low<br />\
    <img src="styles/legend/zones_2022_5_7.png" /> <br />' });
var group_ = new ol.layer.Group({
                                layers: [lyr_zones_1972_1,lyr_zones_2002_2,lyr_zones_2011_3,lyr_zones_2016_4,lyr_zones_2022_5,],
                                fold: 'open',
                                title: 'Все годы'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_zones_1972_1.setVisible(true);lyr_zones_2002_2.setVisible(true);lyr_zones_2011_3.setVisible(true);lyr_zones_2016_4.setVisible(true);lyr_zones_2022_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_];
lyr_zones_1972_1.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'S': 'S', });
lyr_zones_2002_2.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'S': 'S', });
lyr_zones_2011_3.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'S': 'S', });
lyr_zones_2016_4.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'S': 'S', });
lyr_zones_2022_5.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'S': 'S', });
lyr_zones_1972_1.set('fieldImages', {'fid': 'TextEdit', 'class': 'ValueMap', 'S': '', });
lyr_zones_2002_2.set('fieldImages', {'fid': 'TextEdit', 'class': 'ValueMap', 'S': '', });
lyr_zones_2011_3.set('fieldImages', {'fid': 'TextEdit', 'class': 'ValueMap', 'S': '', });
lyr_zones_2016_4.set('fieldImages', {'fid': 'TextEdit', 'class': 'ValueMap', 'S': '', });
lyr_zones_2022_5.set('fieldImages', {'fid': 'TextEdit', 'class': 'ValueMap', 'S': '', });
lyr_zones_1972_1.set('fieldLabels', {'fid': 'hidden field', 'class': 'hidden field', 'S': 'hidden field', });
lyr_zones_2002_2.set('fieldLabels', {'fid': 'hidden field', 'class': 'hidden field', 'S': 'hidden field', });
lyr_zones_2011_3.set('fieldLabels', {'fid': 'hidden field', 'class': 'hidden field', 'S': 'hidden field', });
lyr_zones_2016_4.set('fieldLabels', {'fid': 'hidden field', 'class': 'hidden field', 'S': 'hidden field', });
lyr_zones_2022_5.set('fieldLabels', {'fid': 'hidden field', 'class': 'hidden field', 'S': 'header label - always visible', });
lyr_zones_2022_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});