var wms_layers = [];

var lyr_GoogleTerrain_0 = new ol.layer.Tile({
'title': 'Google Terrain',
'opacity': 1.000000,
source: new ol.source.XYZ({
attributions: ' &nbsp · <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
})
});

var lyr_GoogleSatellite_1 = new ol.layer.Tile({
'title': 'Google Satellite',
'opacity': 1.000000,
source: new ol.source.XYZ({
attributions: ' &nbsp · <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
})
});

var lyr_GoogleHybrid_2 = new ol.layer.Tile({
'title': 'Google Hybrid',
'opacity': 1.000000,
source: new ol.source.XYZ({
attributions: ' &nbsp · <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
})
});

var lyr_OSMStandard_3 = new ol.layer.Tile({
'title': 'OSM Standard',
'opacity': 1.000000,
source: new ol.source.XYZ({
attributions: ' &nbsp · <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
})
});


var outputLayers = [];
var outputJsons = [
    json_OutputArea2022_EoR_4_1,
    json_OutputArea2022_EoR_4_2,
    json_OutputArea2022_EoR_4_3,
    json_OutputArea2022_EoR_4_4,
    json_OutputArea2022_EoR_4_5,
    json_OutputArea2022_EoR_4_6_1,
    json_OutputArea2022_EoR_4_6_2,
    json_OutputArea2022_EoR_4_6_3,
    json_OutputArea2022_EoR_4_6_4,
    json_OutputArea2022_EoR_4_6_5,
    json_OutputArea2022_EoR_4_6_6,
    json_OutputArea2022_EoR_4_7
];

var outputLegend = 'OutputArea2022_EoR<br />\
<img src="styles/legend/eng_100.png" /> English 100%<br />\
<img src="styles/legend/eng_90.png" /> English 90%<br />\
<img src="styles/legend/eng_80.png" /> English 80%<br />\
<img src="styles/legend/eng_70.png" /> English 70%<br />\
<img src="styles/legend/eng_60.png" /> English 60%<br />\
<img src="styles/legend/eng_50.png" /> English 50%<br />\
<img src="styles/legend/oth_60.png" /> Others* 60%<br />\
<img src="styles/legend/oth_50.png" /> Others* 50%<br />\
    * The "Others" category<br />\
    excludes Scots, Gaelic<br />\
    and British Sign Language.';


var outputFieldAliases = {
'code': 'code',
'eng': 'eng',
'sco': 'sco',
'gae': 'gae',
'sig': 'sig',
'oth': 'oth',
'sum': 'sum',
'eng_per': 'eng_per',
'sco_per': 'sco_per',
'gae_per': 'gae_per',
'sig_per': 'sig_per',
'oth_per': 'oth_per',
'English': 'English',
'Scots': 'Scots',
'Gaelic': 'Gaelic',
'Sign Language': 'Sign Language',
'Others': 'Others'
};

var outputFieldImages = {
'code': 'TextEdit',
'eng': 'TextEdit',
'sco': 'TextEdit',
'gae': 'TextEdit',
'sig': 'TextEdit',
'oth': 'TextEdit',
'sum': 'TextEdit',
'eng_per': 'TextEdit',
'sco_per': 'TextEdit',
'gae_per': 'TextEdit',
'sig_per': 'TextEdit',
'oth_per': 'TextEdit',
'English': 'TextEdit',
'Scots': 'TextEdit',
'Gaelic': 'TextEdit',
'Sign Language': 'TextEdit',
'Others': 'TextEdit'
};

var outputFieldLabels = {
'code': 'inline label - always visible',
'eng': 'hidden field',
'sco': 'hidden field',
'gae': 'hidden field',
'sig': 'hidden field',
'oth': 'hidden field',
'sum': 'hidden field',
'eng_per': 'hidden field',
'sco_per': 'hidden field',
'gae_per': 'hidden field',
'sig_per': 'hidden field',
'oth_per': 'hidden field',
'English': 'inline label - always visible',
'Scots': 'inline label - always visible',
'Gaelic': 'inline label - always visible',
'Sign Language': 'inline label - always visible',
'Others': 'inline label - always visible'
};


for (var i = 0; i < outputJsons.length; i++) {
    var format = new ol.format.GeoJSON();
    var features = format.readFeatures(outputJsons[i], {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    });

    var source = new ol.source.Vector({
        attributions: ' '
    });
    source.addFeatures(features);

    var layer = new ol.layer.Vector({
        declutter: false,
        source: source,
        style: style_OutputArea2022_EoR_4,
        popuplayertitle: 'OutputArea2022_EoR',
        interactive: true
    });

    layer.set('fieldAliases', outputFieldAliases);
    layer.set('fieldImages', outputFieldImages);
    layer.set('fieldLabels', outputFieldLabels);
    layer.on('precompose', function(evt) {
        evt.context.globalCompositeOperation = 'normal';
    });
    layer.setVisible(true);

    outputLayers.push(layer);
}

var group_sc_languages = new ol.layer.Group({
    layers: outputLayers,
    fold: 'open',
    title: outputLegend
});

var layersList = [
    lyr_GoogleTerrain_0,
    lyr_GoogleSatellite_1,
    lyr_GoogleHybrid_2,
    lyr_OSMStandard_3,
    group_sc_languages
];