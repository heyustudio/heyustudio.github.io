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
                id: 'Image',
                type: 'image',
                rect: ['-134px', '0px','783px','495px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"%E7%81%AB%E7%82%AC.jpg",'0px','0px']
            },
            {
                id: '_635501979074475000_A9N678NC00AO0001',
                type: 'image',
                rect: ['-327px', '-147px','964px','542px','auto', 'auto'],
                opacity: 0.39024390050066,
                fill: ["rgba(0,0,0,0)",im+"635501979074475000%40_%40A9N678NC00AO0001.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Image}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '495px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-134px'],
                ["style", "width", '783px']
            ],
            "${__635501979074475000_A9N678NC00AO0001}": [
                ["style", "top", '-71px'],
                ["style", "height", '542px'],
                ["style", "opacity", '0'],
                ["style", "left", '-327px'],
                ["style", "width", '964px']
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
                { id: "eid3", tween: [ "transform", "${_Image}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid4", tween: [ "style", "${_Image}", "top", '-49px', { fromValue: '0px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid6", tween: [ "style", "${__635501979074475000_A9N678NC00AO0001}", "top", '-132px', { fromValue: '-71px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid1", tween: [ "style", "${__635501979074475000_A9N678NC00AO0001}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid2", tween: [ "transform", "${_Image}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" }            ]
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
})(jQuery, AdobeEdge, "EDGE-703512562");
