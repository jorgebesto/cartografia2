var size = 0;
var placement = 'point';

var style_2320_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_2320_7(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_2320_7rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,190,190,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_2320_7rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,190,190,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.04}),fill: new ol.style.Fill({color: 'rgba(230,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_2320_7(feature, value);
        ;

    return style;
};
