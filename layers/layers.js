var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PerimetroABA_1 = new ol.format.GeoJSON();
var features_PerimetroABA_1 = format_PerimetroABA_1.readFeatures(json_PerimetroABA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_1.addFeatures(features_PerimetroABA_1);
var lyr_PerimetroABA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_1, 
                style: style_PerimetroABA_1,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_1.png" /> Perimetro ABA'
            });
var format_RutasOptimasBrechaH_2 = new ol.format.GeoJSON();
var features_RutasOptimasBrechaH_2 = format_RutasOptimasBrechaH_2.readFeatures(json_RutasOptimasBrechaH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutasOptimasBrechaH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutasOptimasBrechaH_2.addFeatures(features_RutasOptimasBrechaH_2);
var lyr_RutasOptimasBrechaH_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutasOptimasBrechaH_2, 
                style: style_RutasOptimasBrechaH_2,
                popuplayertitle: 'Rutas Optimas Brecha H',
                interactive: true,
    title: 'Rutas Optimas Brecha H<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_0.png" /> ADAMAR CALLISAYA ARCANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_1.png" /> ADRIAN COLQUE CONDORI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_2.png" /> ALEJANDRO APARICIO MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_3.png" /> ALVARO PACAJE QUISPE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_4.png" /> ANDRES RAMOS TORRES<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_5.png" /> ANGEL CALLISAYA QUISPE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_6.png" /> ANGEL ENCINAS CALLE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_7.png" /> ANGEL GARCÍA CASTILLO<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_8.png" /> ANTONIO ATAHUICHI TORREZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_9.png" /> ARMANDO LUCANA FERNÁNDEZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_10.png" /> BEATRIZ ENCINAS CALLE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_11.png" /> BRISSA DANITZA MARZA COPA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_12.png" /> CLEMENTE MARZA VILLAN<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_13.png" /> DARIO CUNAY VIE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_14.png" /> DAVID RAMOS TORREZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_15.png" /> DEMETRIO CHOQUE CANQUI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_16.png" /> EDUARDO QUISPE LIMACHI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_17.png" /> EDUVI HERRERA FERNÁNDEZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_18.png" /> ELEUTERIO FELIPE LARA BERNABE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_19.png" /> ELEUTERIO LUCANA MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_20.png" /> ELIZABERT FERNANDEZ OCAÑA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_21.png" /> ELVIRO HAYCA BONIFACIO<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_22.png" /> EMILIA CHURA CATARI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_23.png" /> EMILIO MARCA TANGA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_24.png" /> ERMOGENES FERNÁNDEZ MOLINA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_25.png" /> FACUNDO FERNANDEZ SUAREZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_26.png" /> FELIPE LARA BERNABÉ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_27.png" /> FELIX COAQUIRA CARDENAS<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_28.png" /> FELIX FERNANDEZ LUJAN<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_29.png" /> FIDEL MARCA MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_30.png" /> FLORENCIO ADUVIRI TARQUI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_31.png" /> GROVER FERNANDEZ CABEZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_32.png" /> HERMOGENES FERNANDEZ MOLINA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_33.png" /> HILMA BERNABE MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_34.png" /> HUGO ATAHUACHI DELGADO<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_35.png" /> JORGE DEMETRIO JUAREZ RUBIN DE CELIS<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_36.png" /> JUAN ENCINAS CALLE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_37.png" /> JUANA ENCINAS DE MARZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_38.png" /> LORENZO VILLCA HUANCA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_39.png" /> LUCAS CALLISAYA APAZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_40.png" /> LUCIA TICONA CARRION<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_41.png" /> LUIS MAMANI CAMA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_42.png" /> MARCELINO FERNANDEZ LUCANA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_43.png" /> MARIA FERNÁNDEZ OCAÑA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_44.png" /> MARIANO PAYE MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_45.png" /> MARIO RODRIGUEZ UNTOJA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_46.png" /> MELANIA FERNANDEZ FLORES<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_47.png" /> MIGUEL FERNANDEZ GOMEZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_48.png" /> MIRIAM CARI CAYUBA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_49.png" /> NATIVIDAD CONDORI SERRUNDO<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_50.png" /> NEMECIO TORREZ APAZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_51.png" /> NICOLAS MAMANI LEFONSO<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_52.png" /> NICOLÁS YAPU VARGAS<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_53.png" /> PABLO FERNANDEZ MOLINA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_54.png" /> PASCUAL ENCINAS CALLE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_55.png" /> PASTOR FERNANDEZ FERNANDEZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_56.png" /> PELOGIA FERNANDEZ FERNANDEZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_57.png" /> PONCIANO ADUVIRI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_58.png" /> PRIMO FERNANDEZ APAZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_59.png" /> RAMON QUISPE CHURANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_60.png" /> RAMON TICONA TICONA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_61.png" /> RENÉ QUISPE PÉREZ<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_62.png" /> RICARDO COPA MOLINA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_63.png" /> ROBERTO MAMANI MAMANI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_64.png" /> SANDRO VILLAN MARZA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_65.png" /> VICENTE HERRERA QUISPE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_66.png" /> VÍCTOR ARTEAGA<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_67.png" /> VICTOR ARTEAGA CALLE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_68.png" /> ZENOBIO MARZA QUISPE<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_69.png" /> ZENON PATTY CHAPI<br />\
    <img src="styles/legend/RutasOptimasBrechaH_2_70.png" /> <br />' });
var format_RutasOptimasKoryMayu_3 = new ol.format.GeoJSON();
var features_RutasOptimasKoryMayu_3 = format_RutasOptimasKoryMayu_3.readFeatures(json_RutasOptimasKoryMayu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutasOptimasKoryMayu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutasOptimasKoryMayu_3.addFeatures(features_RutasOptimasKoryMayu_3);
var lyr_RutasOptimasKoryMayu_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RutasOptimasKoryMayu_3, 
                style: style_RutasOptimasKoryMayu_3,
                popuplayertitle: 'Rutas Optimas KoryMayu',
                interactive: true,
    title: 'Rutas Optimas KoryMayu<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_0.png" /> ADRIAN BORDA NAVARRO<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_1.png" /> BERNABE SEJAS<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_2.png" /> DEMETRIO JUAN CESPEDES AMURRIO<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_3.png" /> DIOGENES ESCOBAR<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_4.png" /> ELVA MURRIEL MORALES<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_5.png" /> EMILIO ESCOBAR<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_6.png" /> EMILIO ESCOBAR CESPEDES<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_7.png" /> EULOGIO VARGAS<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_8.png" /> FAUSTINO OROZCO ROJAS<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_9.png" /> GERY SEJAS<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_10.png" /> GERY SEJAS B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_11.png" /> JAIME PONCE LOPEZ<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_12.png" /> JHONNY CARDOZO<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_13.png" /> JHONNY CARDOZO B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_14.png" /> JUANA MENECES CLAROS<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_15.png" /> LIBORIA MIRANDA GARCÍA<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_16.png" /> LIBORIA MIRANDA GARCÍA B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_17.png" /> MARCELINA GARCIA FERNANDEZ<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_18.png" /> MARTHA CLAROS B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_19.png" /> MARTHA CLAROS GONZALES<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_20.png" /> NELSON LINARES<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_21.png" /> NELSON LINARES B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_22.png" /> OSCAR BECERRA<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_23.png" /> ROBERTA TANGARA<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_24.png" /> ROBERTA TANGARA B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_25.png" /> ROMAN JAIME BELMONTE MIRANDA<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_26.png" /> TITO BELMONTE MIRANDA<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_27.png" /> TITO BELMONTE MIRANDA B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_28.png" /> Vía más cercana<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_29.png" /> VICTORIA LICANTICA JACOME<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_30.png" /> WILY ROCHA VILMONTE<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_31.png" /> WILY ROCHA VILMONTE B<br />\
    <img src="styles/legend/RutasOptimasKoryMayu_3_32.png" /> <br />' });
var format_CPuntosUPASBrechaH_4 = new ol.format.GeoJSON();
var features_CPuntosUPASBrechaH_4 = format_CPuntosUPASBrechaH_4.readFeatures(json_CPuntosUPASBrechaH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPuntosUPASBrechaH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPuntosUPASBrechaH_4.addFeatures(features_CPuntosUPASBrechaH_4);
cluster_CPuntosUPASBrechaH_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CPuntosUPASBrechaH_4
});
var lyr_CPuntosUPASBrechaH_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CPuntosUPASBrechaH_4, 
                style: style_CPuntosUPASBrechaH_4,
                popuplayertitle: 'C Puntos UPAS Brecha H',
                interactive: true,
                title: '<img src="styles/legend/CPuntosUPASBrechaH_4.png" /> C Puntos UPAS Brecha H'
            });
var format_CPuntosUPASKorymayu_5 = new ol.format.GeoJSON();
var features_CPuntosUPASKorymayu_5 = format_CPuntosUPASKorymayu_5.readFeatures(json_CPuntosUPASKorymayu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPuntosUPASKorymayu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPuntosUPASKorymayu_5.addFeatures(features_CPuntosUPASKorymayu_5);
cluster_CPuntosUPASKorymayu_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CPuntosUPASKorymayu_5
});
var lyr_CPuntosUPASKorymayu_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CPuntosUPASKorymayu_5, 
                style: style_CPuntosUPASKorymayu_5,
                popuplayertitle: 'C Puntos UPAS Korymayu',
                interactive: true,
                title: '<img src="styles/legend/CPuntosUPASKorymayu_5.png" /> C Puntos UPAS Korymayu'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PerimetroABA_1.setVisible(true);lyr_RutasOptimasBrechaH_2.setVisible(true);lyr_RutasOptimasKoryMayu_3.setVisible(true);lyr_CPuntosUPASBrechaH_4.setVisible(true);lyr_CPuntosUPASKorymayu_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PerimetroABA_1,lyr_RutasOptimasBrechaH_2,lyr_RutasOptimasKoryMayu_3,lyr_CPuntosUPASBrechaH_4,lyr_CPuntosUPASKorymayu_5];
lyr_PerimetroABA_1.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'A. Cult.': 'A. Cult.', 'A. no Cul': 'A. no Cul', });
lyr_RutasOptimasBrechaH_2.set('fieldAliases', {'Orden': 'Orden', 'Destino': 'Destino', 'Dist_total': 'Dist_total', });
lyr_RutasOptimasKoryMayu_3.set('fieldAliases', {'Orden': 'Orden', 'Destino': 'Destino', 'Dist_total': 'Dist_total', });
lyr_CPuntosUPASBrechaH_4.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Productor': 'Productor', 'Orden': 'Orden', 'Dist Total': 'Dist Total', });
lyr_CPuntosUPASKorymayu_5.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Productor': 'Productor', 'Orden': 'Orden', 'Dist Total': 'Dist Total', });
lyr_PerimetroABA_1.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'A. Cult.': 'TextEdit', 'A. no Cul': 'TextEdit', });
lyr_RutasOptimasBrechaH_2.set('fieldImages', {'Orden': 'TextEdit', 'Destino': 'TextEdit', 'Dist_total': 'TextEdit', });
lyr_RutasOptimasKoryMayu_3.set('fieldImages', {'Orden': 'TextEdit', 'Destino': 'TextEdit', 'Dist_total': 'TextEdit', });
lyr_CPuntosUPASBrechaH_4.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Productor': 'TextEdit', 'Orden': 'TextEdit', 'Dist Total': 'TextEdit', });
lyr_CPuntosUPASKorymayu_5.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Productor': 'TextEdit', 'Orden': 'TextEdit', 'Dist Total': 'TextEdit', });
lyr_PerimetroABA_1.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'A. Cult.': 'inline label - always visible', 'A. no Cul': 'inline label - always visible', });
lyr_RutasOptimasBrechaH_2.set('fieldLabels', {'Orden': 'inline label - always visible', 'Destino': 'inline label - always visible', 'Dist_total': 'inline label - always visible', });
lyr_RutasOptimasKoryMayu_3.set('fieldLabels', {'Orden': 'inline label - always visible', 'Destino': 'inline label - always visible', 'Dist_total': 'inline label - always visible', });
lyr_CPuntosUPASBrechaH_4.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Productor': 'inline label - always visible', 'Orden': 'inline label - always visible', 'Dist Total': 'inline label - always visible', });
lyr_CPuntosUPASKorymayu_5.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Productor': 'inline label - always visible', 'Orden': 'inline label - always visible', 'Dist Total': 'inline label - always visible', });
lyr_CPuntosUPASKorymayu_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});