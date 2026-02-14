var wms_layers = [];

var lyr_galicia_clip_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'galicia_clip<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/galicia_clip_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1035440.678978, 5132165.691741, -749604.801619, 5433440.630216]
        })
    });
var format_Comunidade_Autonoma_IGN_1 = new ol.format.GeoJSON();
var features_Comunidade_Autonoma_IGN_1 = format_Comunidade_Autonoma_IGN_1.readFeatures(json_Comunidade_Autonoma_IGN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidade_Autonoma_IGN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidade_Autonoma_IGN_1.addFeatures(features_Comunidade_Autonoma_IGN_1);
var lyr_Comunidade_Autonoma_IGN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidade_Autonoma_IGN_1, 
                style: style_Comunidade_Autonoma_IGN_1,
                popuplayertitle: 'Comunidade_Autonoma_IGN',
                interactive: true,
                title: '<img src="styles/legend/Comunidade_Autonoma_IGN_1.png" /> Comunidade_Autonoma_IGN'
            });
var format_10x10_atlasatlas_10x10_2 = new ol.format.GeoJSON();
var features_10x10_atlasatlas_10x10_2 = format_10x10_atlasatlas_10x10_2.readFeatures(json_10x10_atlasatlas_10x10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10x10_atlasatlas_10x10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10x10_atlasatlas_10x10_2.addFeatures(features_10x10_atlasatlas_10x10_2);
var lyr_10x10_atlasatlas_10x10_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10x10_atlasatlas_10x10_2, 
                style: style_10x10_atlasatlas_10x10_2,
                popuplayertitle: '10x10_atlas atlas_10x10',
                interactive: true,
                title: '<img src="styles/legend/10x10_atlasatlas_10x10_2.png" /> 10x10_atlas atlas_10x10'
            });

lyr_galicia_clip_0.setVisible(true);lyr_Comunidade_Autonoma_IGN_1.setVisible(true);lyr_10x10_atlasatlas_10x10_2.setVisible(true);
var layersList = [lyr_galicia_clip_0,lyr_Comunidade_Autonoma_IGN_1,lyr_10x10_atlasatlas_10x10_2];
lyr_Comunidade_Autonoma_IGN_1.set('fieldAliases', {'COD_CCAA': 'COD_CCAA', 'NOMBRE': 'NOMBRE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_10x10_atlasatlas_10x10_2.set('fieldAliases', {'fid': 'fid', 'CUADRICULA': 'CUADRICULA', 'cell_id': 'cell_id', 'especies': 'especies', 'n_especies': 'n_especies', });
lyr_Comunidade_Autonoma_IGN_1.set('fieldImages', {'COD_CCAA': 'TextEdit', 'NOMBRE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_10x10_atlasatlas_10x10_2.set('fieldImages', {'fid': 'TextEdit', 'CUADRICULA': 'TextEdit', 'cell_id': 'Range', 'especies': 'TextEdit', 'n_especies': 'Range', });
lyr_Comunidade_Autonoma_IGN_1.set('fieldLabels', {'COD_CCAA': 'no label', 'NOMBRE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_10x10_atlasatlas_10x10_2.set('fieldLabels', {'fid': 'no label', 'CUADRICULA': 'no label', 'cell_id': 'no label', 'especies': 'no label', 'n_especies': 'no label', });
lyr_10x10_atlasatlas_10x10_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});