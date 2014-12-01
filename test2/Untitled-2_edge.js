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
                id: '_9JDM2UBQ19BR00012',
                type: 'image',
                rect: ['-45px', '0px','640px','427px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"9JDM2UBQ19BR0001.jpg",'0px','0px']
            },
            {
                id: '_9SVQV8LK19BR00012',
                type: 'image',
                rect: ['-108px', '0px','667px','445px','auto', 'auto'],
                clip: ['rect(0px 667px 445px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"9SVQV8LK19BR0001.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__9JDM2UBQ19BR00012}": [
                ["style", "top", '0px'],
                ["style", "height", '427px'],
                ["style", "left", '-45px'],
                ["style", "width", '640px']
            ],
            "${__9SVQV8LK19BR00012}": [
                ["style", "top", '0px'],
                ["style", "height", '445px'],
                ["style", "clip", [446,667,445,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-108px'],
                ["style", "width", '667px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
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
                { id: "eid8", tween: [ "style", "${__9SVQV8LK19BR00012}", "clip", [0,667,445,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [446,667,445,0]}], position: 0, duration: 1000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-703948254");
