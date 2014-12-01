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
                id: '_48d13b66fa9ad31398b35f1b14dd4362',
                type: 'image',
                rect: ['92px', '63px','740px','247px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"48d13b66fa9ad31398b35f1b14dd4362.jpg",'0px','0px'],
                transform: [[],[],[],['1.61682','1.61682']]
            },
            {
                id: 'Image',
                type: 'image',
                rect: ['-8px', '-55px','949px','630px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"%E5%AF%B9%E6%AF%94%E5%9B%BE.jpg",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['40px', '33px','auto','auto','auto', 'auto'],
                text: "晴天",
                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextCopy',
                type: 'text',
                rect: ['40px', '214px','auto','auto','auto', 'auto'],
                text: "雾霾<br>",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '33px'],
                ["style", "opacity", '1'],
                ["style", "left", '40px'],
                ["color", "color", 'rgba(255,255,255,1.00)']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_TextCopy}": [
                ["style", "top", '298px'],
                ["style", "opacity", '0'],
                ["style", "left", '40px'],
                ["color", "color", 'rgba(0,0,0,1.00)']
            ],
            "${_Image}": [
                ["style", "top", '-55px'],
                ["style", "height", '630px'],
                ["style", "opacity", '0'],
                ["style", "left", '-8px'],
                ["style", "width", '949px']
            ],
            "${__48d13b66fa9ad31398b35f1b14dd4362}": [
                ["style", "top", '63px'],
                ["transform", "scaleY", '1.61682'],
                ["style", "height", '247px'],
                ["transform", "scaleX", '1.61682'],
                ["style", "left", '92px'],
                ["style", "width", '740px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_TextCopy}", "top", '214px', { fromValue: '298px'}], position: 0, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_TextCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_Image}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid9", tween: [ "style", "${_Text}", "top", '-28px', { fromValue: '33px'}], position: 0, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-705085901");
