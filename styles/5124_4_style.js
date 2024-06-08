var size = 0;
var placement = 'point';

var style_5124_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = '';
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_5124_4(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_5124_4rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,112,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_5124_4rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,112,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_5124_4(feature, value);
        ;

    return style;
};
