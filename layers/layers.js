ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([687850.568704, 9190222.037968, 702027.563252, 9199135.899347]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_1.png" /> univ_surabaya'
            });
var format_aksesibilitas_univunion_2 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_2 = format_aksesibilitas_univunion_2.readFeatures(json_aksesibilitas_univunion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_aksesibilitas_univunion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_2.addFeatures(features_aksesibilitas_univunion_2);
var lyr_aksesibilitas_univunion_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_2, 
                style: style_aksesibilitas_univunion_2,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
    title: 'aksesibilitas_univ — union<br />\
    <img src="styles/legend/aksesibilitas_univunion_2_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univunion_2_1.png" /> 2,4km (30 menit)<br />' });

lyr_Positron_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);lyr_aksesibilitas_univunion_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_univ_surabaya_1,lyr_aksesibilitas_univunion_2];
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Universitas': 'Universitas', 'Gedung': 'Gedung', 'Foto': 'Foto', 'Deskripsi Univ_QS WUR': 'Ranking', 'Deskripsi Univ_Didirikan': 'Tahun Didirikan', 'Deskripsi Univ_Fakultas': 'Fakultas', });
lyr_aksesibilitas_univunion_2.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': 'TextEdit', 'Universitas': 'TextEdit', 'Gedung': 'TextEdit', 'Foto': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_aksesibilitas_univunion_2.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya_1.set('fieldLabels', {'fid': 'no label', 'Universitas': 'inline label - always visible', 'Gedung': 'inline label - always visible', 'Foto': 'inline label - visible with data', 'Deskripsi Univ_QS WUR': 'inline label - always visible', 'Deskripsi Univ_Didirikan': 'inline label - always visible', 'Deskripsi Univ_Fakultas': 'inline label - always visible', });
lyr_aksesibilitas_univunion_2.set('fieldLabels', {'fid': 'no label', 'Access': 'inline label - always visible', });
lyr_aksesibilitas_univunion_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});