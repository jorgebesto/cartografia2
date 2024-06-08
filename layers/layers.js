var wms_layers = [];

var format_6101_0 = new ol.format.GeoJSON();
var features_6101_0 = format_6101_0.readFeatures(json_6101_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_0.addFeatures(features_6101_0);
var lyr_6101_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6101_0, 
                style: style_6101_0,
                popuplayertitle: "6101",
                interactive: true,
                title: '6101'
            });
var format_5112_1 = new ol.format.GeoJSON();
var features_5112_1 = format_5112_1.readFeatures(json_5112_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_1.addFeatures(features_5112_1);
var lyr_5112_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5112_1, 
                style: style_5112_1,
                popuplayertitle: "5112",
                interactive: true,
                    title: '<img src="styles/legend/5112_1.png" /> 5112'
                });
var format_2401_L_2 = new ol.format.GeoJSON();
var features_2401_L_2 = format_2401_L_2.readFeatures(json_2401_L_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2401_L_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2401_L_2.addFeatures(features_2401_L_2);
var lyr_2401_L_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2401_L_2, 
                style: style_2401_L_2,
                popuplayertitle: "2401_L",
                interactive: true,
                    title: '<img src="styles/legend/2401_L_2.png" /> 2401_L'
                });
var format_4107_3 = new ol.format.GeoJSON();
var features_4107_3 = format_4107_3.readFeatures(json_4107_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_3.addFeatures(features_4107_3);
var lyr_4107_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4107_3, 
                style: style_4107_3,
                popuplayertitle: "4107",
                interactive: true,
                    title: '<img src="styles/legend/4107_3.png" /> 4107'
                });
var format_5124_4 = new ol.format.GeoJSON();
var features_5124_4 = format_5124_4.readFeatures(json_5124_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_4.addFeatures(features_5124_4);
var lyr_5124_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5124_4, 
                style: style_5124_4,
                popuplayertitle: "5124",
                interactive: true,
                title: '5124'
            });
var format_3101_5 = new ol.format.GeoJSON();
var features_3101_5 = format_3101_5.readFeatures(json_3101_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_5.addFeatures(features_3101_5);
var lyr_3101_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3101_5, 
                style: style_3101_5,
                popuplayertitle: "3101",
                interactive: true,
                title: '3101'
            });
var format_3414_6 = new ol.format.GeoJSON();
var features_3414_6 = format_3414_6.readFeatures(json_3414_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3414_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3414_6.addFeatures(features_3414_6);
var lyr_3414_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3414_6, 
                style: style_3414_6,
                popuplayertitle: "3414",
                interactive: true,
                    title: '<img src="styles/legend/3414_6.png" /> 3414'
                });
var format_2320_7 = new ol.format.GeoJSON();
var features_2320_7 = format_2320_7.readFeatures(json_2320_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_7.addFeatures(features_2320_7);
var lyr_2320_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2320_7, 
                style: style_2320_7,
                popuplayertitle: "2320",
                interactive: true,
                title: '2320'
            });
var format_2311_8 = new ol.format.GeoJSON();
var features_2311_8 = format_2311_8.readFeatures(json_2311_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311_8.addFeatures(features_2311_8);
var lyr_2311_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2311_8, 
                style: style_2311_8,
                popuplayertitle: "2311",
                interactive: true,
                    title: '<img src="styles/legend/2311_8.png" /> 2311'
                });
var format_3417_9 = new ol.format.GeoJSON();
var features_3417_9 = format_3417_9.readFeatures(json_3417_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3417_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3417_9.addFeatures(features_3417_9);
var lyr_3417_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3417_9, 
                style: style_3417_9,
                popuplayertitle: "3417",
                interactive: true,
                    title: '<img src="styles/legend/3417_9.png" /> 3417'
                });
var format_3411P_10 = new ol.format.GeoJSON();
var features_3411P_10 = format_3411P_10.readFeatures(json_3411P_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411P_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411P_10.addFeatures(features_3411P_10);
var lyr_3411P_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3411P_10, 
                style: style_3411P_10,
                popuplayertitle: "3411P",
                interactive: true,
                    title: '<img src="styles/legend/3411P_10.png" /> 3411P'
                });
var format_2325_11 = new ol.format.GeoJSON();
var features_2325_11 = format_2325_11.readFeatures(json_2325_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_11.addFeatures(features_2325_11);
var lyr_2325_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2325_11, 
                style: style_2325_11,
                popuplayertitle: "2325",
                interactive: true,
                title: '2325'
            });
var format_7101_12 = new ol.format.GeoJSON();
var features_7101_12 = format_7101_12.readFeatures(json_7101_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_12.addFeatures(features_7101_12);
var lyr_7101_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7101_12, 
                style: style_7101_12,
                popuplayertitle: "7101",
                interactive: true,
                title: '7101'
            });
var format_1104_13 = new ol.format.GeoJSON();
var features_1104_13 = format_1104_13.readFeatures(json_1104_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1104_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1104_13.addFeatures(features_1104_13);
var lyr_1104_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1104_13, 
                style: style_1104_13,
                popuplayertitle: "1104",
                interactive: true,
                    title: '<img src="styles/legend/1104_13.png" /> 1104'
                });

lyr_6101_0.setVisible(true);lyr_5112_1.setVisible(true);lyr_2401_L_2.setVisible(true);lyr_4107_3.setVisible(true);lyr_5124_4.setVisible(true);lyr_3101_5.setVisible(true);lyr_3414_6.setVisible(true);lyr_2320_7.setVisible(true);lyr_2311_8.setVisible(true);lyr_3417_9.setVisible(true);lyr_3411P_10.setVisible(true);lyr_2325_11.setVisible(true);lyr_7101_12.setVisible(true);lyr_1104_13.setVisible(true);
var layersList = [lyr_6101_0,lyr_5112_1,lyr_2401_L_2,lyr_4107_3,lyr_5124_4,lyr_3101_5,lyr_3414_6,lyr_2320_7,lyr_2311_8,lyr_3417_9,lyr_3411P_10,lyr_2325_11,lyr_7101_12,lyr_1104_13];
lyr_6101_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'TTCN': 'TTCN', });
lyr_5112_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', 'TempId': 'TempId', });
lyr_2401_L_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_CONSTRUCCION_AGUA': 'TIPO_CONSTRUCCION_AGUA', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_4107_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_5124_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESTADO_DRENAJE': 'ESTADO_DRENAJE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3101_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUPERFICIE': 'ESTADO_SUPERFICIE', 'NUMERO_CARRILES': 'NUMERO_CARRILES', 'ACCESIBILIDAD': 'ACCESIBILIDAD', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'RuleID': 'RuleID', 'Override': 'Override', 'TempId': 'TempId', });
lyr_3414_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2320_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_CONSTRUCCION': 'TIPO_CONSTRUCCION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2311_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_MATERIAL': 'TIPO_MATERIAL', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3417_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'TIPO': 'TIPO', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3411P_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FUNCION_PUENTE': 'FUNCION_PUENTE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ROTACION': 'ROTACION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2325_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_USO_EDIFICACION': 'CODIGO_USO_EDIFICACION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_7101_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_1104_13.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_6101_0.set('fieldImages', {'fid': '', 'ID': 'Range', 'ELEV': 'TextEdit', 'TTCN': '', });
lyr_5112_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', 'TempId': 'Range', });
lyr_2401_L_2.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'TIPO_CONSTRUCCION_AGUA': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_4107_3.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_5124_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESTADO_DRENAJE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_3101_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_VIA': 'TextEdit', 'ESTADO_SUPERFICIE': 'TextEdit', 'NUMERO_CARRILES': 'TextEdit', 'ACCESIBILIDAD': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'RuleID': 'Range', 'Override': 'Binary', 'TempId': 'Range', });
lyr_3414_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2320_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_CONSTRUCCION': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2311_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_MATERIAL': 'Range', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_3417_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'TIPO': 'Range', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_3411P_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FUNCION_PUENTE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'ROTACION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2325_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_USO_EDIFICACION': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_7101_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_1104_13.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr_6101_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', 'TTCN': 'no label', });
lyr_5112_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', 'TempId': 'no label', });
lyr_2401_L_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_CONSTRUCCION_AGUA': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_4107_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_5124_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESTADO_DRENAJE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3101_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUPERFICIE': 'no label', 'NUMERO_CARRILES': 'no label', 'ACCESIBILIDAD': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'TempId': 'no label', });
lyr_3414_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2320_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_CONSTRUCCION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2311_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_MATERIAL': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3417_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'TIPO': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3411P_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FUNCION_PUENTE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ROTACION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2325_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'OBJECTID': 'inline label - visible with data', 'CODIGO_USO_EDIFICACION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'inline label - visible with data', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_7101_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_1104_13.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr_1104_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});