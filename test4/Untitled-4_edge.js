/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: '_9L2LROM019BR0001',
                type: 'image',
                rect: ['-154px', '-34px','704px','468px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"9L2LROM019BR0001.jpg",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: '_9JVA9K3T19BR00012',
                type: 'image',
                rect: ['0px', '434px','640px','426px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"9JVA9K3T19BR0001.jpg",'0px','0px'],
                filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
            },
            {
                id: '_9L2LROM019BR0001Copy',
                type: 'image',
                rect: ['-177px', '-58px','777px','517px','auto', 'auto'],
                clip: ['rect(0px 721px 494px 370px)'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"9L2LROM019BR0001.jpg",'0px','0px'],
                transform: [[],[],[],['0.90522','0.90522']]
            },
            {
                id: '_9JVA9K3T19BR00013',
                type: 'image',
                rect: ['-108px', '101px','640px','426px','auto', 'auto'],
                clip: ['rect(0px 243px 426px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"9JVA9K3T19BR0001.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__9L2LROM019BR0001Copy}": [
                ["style", "top", '-15px'],
                ["transform", "scaleX", '0.90522'],
                ["transform", "scaleY", '0.90522'],
                ["style", "clip", [0,721,494,370], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '517px'],
                ["style", "opacity", '0'],
                ["style", "left", '-105px'],
                ["style", "width", '777px']
            ],
            "${__9JVA9K3T19BR00013}": [
                ["style", "top", '167px'],
                ["style", "clip", [0,243,426,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '426px'],
                ["style", "opacity", '0'],
                ["style", "left", '-64px'],
                ["style", "width", '640px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${__9L2LROM019BR0001}": [
                ["style", "top", '-34px'],
                ["style", "height", '468px'],
                ["subproperty", "filter.blur", '10px'],
                ["style", "left", '-154px'],
                ["style", "width", '704px']
            ],
            "${__9JVA9K3T19BR00012}": [
                ["style", "top", '434px'],
                ["style", "height", '426px'],
                ["subproperty", "filter.blur", '10px'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            timeline: [
                { id: "eid7", tween: [ "style", "${__9JVA9K3T19BR00012}", "top", '-26px', { fromValue: '434px'}], position: 500, duration: 1000 },
                { id: "eid4", tween: [ "style", "${__9L2LROM019BR0001Copy}", "top", '-58px', { fromValue: '-15px'}], position: 0, duration: 500 },
                { id: "eid9", tween: [ "style", "${__9L2LROM019BR0001Copy}", "top", '-203px', { fromValue: '-58px'}], position: 500, duration: 500 },
                { id: "eid14", tween: [ "style", "${__9JVA9K3T19BR00013}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500 },
                { id: "eid12", tween: [ "style", "${__9JVA9K3T19BR00013}", "top", '-13px', { fromValue: '167px'}], position: 1000, duration: 500 },
                { id: "eid8", tween: [ "style", "${__9L2LROM019BR0001}", "top", '-494px', { fromValue: '-34px'}], position: 500, duration: 1000 },
                { id: "eid11", tween: [ "style", "${__9JVA9K3T19BR00013}", "left", '10px', { fromValue: '-64px'}], position: 1000, duration: 500 },
                { id: "eid6", tween: [ "style", "${__9L2LROM019BR0001Copy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "style", "${__9L2LROM019BR0001Copy}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 500 },
                { id: "eid2", tween: [ "style", "${__9L2LROM019BR0001Copy}", "left", '-177px', { fromValue: '-105px'}], position: 0, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-705540958");
