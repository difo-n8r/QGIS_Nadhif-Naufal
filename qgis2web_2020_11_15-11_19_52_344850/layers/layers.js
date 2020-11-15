var wms_layers = [];

var format_kabupaten_riau_0 = new ol.format.GeoJSON();
var features_kabupaten_riau_0 = format_kabupaten_riau_0.readFeatures(json_kabupaten_riau_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kabupaten_riau_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kabupaten_riau_0.addFeatures(features_kabupaten_riau_0);
var lyr_kabupaten_riau_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kabupaten_riau_0, 
                style: style_kabupaten_riau_0,
                interactive: true,
    title: 'kabupaten_riau<br />\
    <img src="styles/legend/kabupaten_riau_0_0.png" /> BENGKALIS<br />\
    <img src="styles/legend/kabupaten_riau_0_1.png" /> INDRAGIRI HILIR<br />\
    <img src="styles/legend/kabupaten_riau_0_2.png" /> INDRAGIRI HULU<br />\
    <img src="styles/legend/kabupaten_riau_0_3.png" /> KAMPAR<br />\
    <img src="styles/legend/kabupaten_riau_0_4.png" /> KAPULAUAN RIAU<br />\
    <img src="styles/legend/kabupaten_riau_0_5.png" /> KARIMUN<br />\
    <img src="styles/legend/kabupaten_riau_0_6.png" /> KOTA BATAM<br />\
    <img src="styles/legend/kabupaten_riau_0_7.png" /> KOTA DUMAI<br />\
    <img src="styles/legend/kabupaten_riau_0_8.png" /> KOTA PEKAN BARU<br />\
    <img src="styles/legend/kabupaten_riau_0_9.png" /> KOTA TANJUNG PINANG<br />\
    <img src="styles/legend/kabupaten_riau_0_10.png" /> KUANTAN SINGINGI<br />\
    <img src="styles/legend/kabupaten_riau_0_11.png" /> NATUNA<br />\
    <img src="styles/legend/kabupaten_riau_0_12.png" /> PELALAWAN<br />\
    <img src="styles/legend/kabupaten_riau_0_13.png" /> ROKAN HILIR<br />\
    <img src="styles/legend/kabupaten_riau_0_14.png" /> ROKAN HULU<br />\
    <img src="styles/legend/kabupaten_riau_0_15.png" /> SIAK<br />'
        });
var format_sungai_riau_1 = new ol.format.GeoJSON();
var features_sungai_riau_1 = format_sungai_riau_1.readFeatures(json_sungai_riau_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_riau_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_riau_1.addFeatures(features_sungai_riau_1);
var lyr_sungai_riau_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_riau_1, 
                style: style_sungai_riau_1,
                interactive: true,
                title: '<img src="styles/legend/sungai_riau_1.png" /> sungai_riau'
            });
var format_jalan_riau_2 = new ol.format.GeoJSON();
var features_jalan_riau_2 = format_jalan_riau_2.readFeatures(json_jalan_riau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_riau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_riau_2.addFeatures(features_jalan_riau_2);
var lyr_jalan_riau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_riau_2, 
                style: style_jalan_riau_2,
                interactive: true,
                title: '<img src="styles/legend/jalan_riau_2.png" /> jalan_riau'
            });
var format_kota_riau_3 = new ol.format.GeoJSON();
var features_kota_riau_3 = format_kota_riau_3.readFeatures(json_kota_riau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kota_riau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kota_riau_3.addFeatures(features_kota_riau_3);
var lyr_kota_riau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kota_riau_3, 
                style: style_kota_riau_3,
                interactive: true,
                title: '<img src="styles/legend/kota_riau_3.png" /> kota_riau'
            });
var format_gunung_riau_4 = new ol.format.GeoJSON();
var features_gunung_riau_4 = format_gunung_riau_4.readFeatures(json_gunung_riau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gunung_riau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gunung_riau_4.addFeatures(features_gunung_riau_4);
var lyr_gunung_riau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gunung_riau_4, 
                style: style_gunung_riau_4,
                interactive: true,
                title: '<img src="styles/legend/gunung_riau_4.png" /> gunung_riau'
            });

lyr_kabupaten_riau_0.setVisible(true);lyr_sungai_riau_1.setVisible(true);lyr_jalan_riau_2.setVisible(true);lyr_kota_riau_3.setVisible(true);lyr_gunung_riau_4.setVisible(true);
var layersList = [lyr_kabupaten_riau_0,lyr_sungai_riau_1,lyr_jalan_riau_2,lyr_kota_riau_3,lyr_gunung_riau_4];
lyr_kabupaten_riau_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RIAUKB_': 'RIAUKB_', 'RIAUKB_ID': 'RIAUKB_ID', 'PROP_NO': 'PROP_NO', 'KABKOTA_NO': 'KABKOTA_NO', 'ID2003': 'ID2003', 'PROPINSI': 'PROPINSI', 'KAB_KOTA': 'KAB_KOTA', });
lyr_sungai_riau_1.set('fieldAliases', {'PANJANG': 'PANJANG', 'NM_SUNGAI': 'NM_SUNGAI', });
lyr_jalan_riau_2.set('fieldAliases', {'PANJANG': 'PANJANG', 'NM_JALAN': 'NM_JALAN', });
lyr_kota_riau_3.set('fieldAliases', {'NM_KOTA': 'NM_KOTA', });
lyr_gunung_riau_4.set('fieldAliases', {'NM_GUNUNG': 'NM_GUNUNG', 'TINGGI': 'TINGGI', });
lyr_kabupaten_riau_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'RIAUKB_': 'TextEdit', 'RIAUKB_ID': 'TextEdit', 'PROP_NO': 'TextEdit', 'KABKOTA_NO': 'TextEdit', 'ID2003': 'TextEdit', 'PROPINSI': 'TextEdit', 'KAB_KOTA': 'TextEdit', });
lyr_sungai_riau_1.set('fieldImages', {'PANJANG': 'TextEdit', 'NM_SUNGAI': 'TextEdit', });
lyr_jalan_riau_2.set('fieldImages', {'PANJANG': 'TextEdit', 'NM_JALAN': 'TextEdit', });
lyr_kota_riau_3.set('fieldImages', {'NM_KOTA': 'TextEdit', });
lyr_gunung_riau_4.set('fieldImages', {'NM_GUNUNG': 'TextEdit', 'TINGGI': 'TextEdit', });
lyr_kabupaten_riau_0.set('fieldLabels', {'AREA': 'header label', 'PERIMETER': 'header label', 'RIAUKB_': 'no label', 'RIAUKB_ID': 'no label', 'PROP_NO': 'no label', 'KABKOTA_NO': 'no label', 'ID2003': 'no label', 'PROPINSI': 'no label', 'KAB_KOTA': 'header label', });
lyr_sungai_riau_1.set('fieldLabels', {'PANJANG': 'no label', 'NM_SUNGAI': 'inline label', });
lyr_jalan_riau_2.set('fieldLabels', {'PANJANG': 'header label', 'NM_JALAN': 'header label', });
lyr_kota_riau_3.set('fieldLabels', {'NM_KOTA': 'inline label', });
lyr_gunung_riau_4.set('fieldLabels', {'NM_GUNUNG': 'no label', 'TINGGI': 'no label', });
lyr_gunung_riau_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});