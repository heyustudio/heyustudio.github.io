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
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','10px','2000px','auto', 'auto'],
                fill: ["rgba(89,111,36,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'zidane_sprite',
                type: 'image',
                rect: ['0px', '0px','3200px','3000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"zidane_sprite.jpg",'0px','0px','3200px','3000px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['43px', '162px','577px','auto','auto', 'auto'],
                text: "World Cup Moments: Zinedine Zidane Headbutts Marco Materazzi",
                font: ['Arial, Helvetica, sans-serif', 48, "rgba(0,0,0,1)", "700", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['43px', '106px','auto','auto','auto', 'auto'],
                text: "January 5th, 2010",
                align: "left",
                font: ['Georgia, Times New Roman, Times, serif', 36, "rgba(153,153,153,1.00)", "400", "none", "italic"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['43px', '1045px','577px','497px','auto', 'auto'],
                text: "Lots of things happened at World Cup 2006. There was Germany’s surprise run to the semi-finals, Ronaldo becoming the all time top scorer in World Cup history, Argentina playing some beautiful football and Fabio Cannavaro proving you don’t have to be tall to dominate in central defence. But if you only remember one thing from World Cup 2006, it’s probably Zinedine Zidane headbutting Marco Materazzi.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 36, "rgba(51,51,51,1.00)", "300", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text4}": [
                ["style", "top", '1045px'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif']
            ],
            "${_Text2}": [
                ["style", "top", '106px'],
                ["color", "color", 'rgba(153,153,153,1.00)'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '36px']
            ],
            "${_Text}": [
                ["style", "top", '162px'],
                ["style", "font-weight", '700'],
                ["style", "font-size", '48px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "width", '577px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '640px'],
                ["style", "height", '960px'],
                ["style", "overflow", 'scroll']
            ],
            "${_Rectangle}": [
                ["style", "height", '2000px'],
                ["color", "background-color", 'rgba(89,111,36,1.00)'],
                ["style", "width", '10px']
            ],
            "${_zidane_sprite}": [
                ["style", "top", '415px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '600px'],
                ["style", "background-size", [3200,3000], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "stop": 2000
            },
            timeline: [
                { id: "eid126", tween: [ "style", "${_zidane_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 41, duration: 0 },
                { id: "eid128", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,0]}], position: 83, duration: 0 },
                { id: "eid129", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,0]}], position: 125, duration: 0 },
                { id: "eid130", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,0]}], position: 166, duration: 0 },
                { id: "eid131", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,0]}], position: 208, duration: 0 },
                { id: "eid132", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 250, duration: 0 },
                { id: "eid133", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-600]}], position: 291, duration: 0 },
                { id: "eid134", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-600]}], position: 333, duration: 0 },
                { id: "eid135", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-600]}], position: 375, duration: 0 },
                { id: "eid136", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-600]}], position: 416, duration: 0 },
                { id: "eid137", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 458, duration: 0 },
                { id: "eid138", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-1200]}], position: 500, duration: 0 },
                { id: "eid139", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-1200]}], position: 541, duration: 0 },
                { id: "eid140", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-1200]}], position: 583, duration: 0 },
                { id: "eid141", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-1200]}], position: 625, duration: 0 },
                { id: "eid142", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 666, duration: 0 },
                { id: "eid143", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-1800]}], position: 708, duration: 0 },
                { id: "eid144", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-1800]}], position: 750, duration: 0 },
                { id: "eid145", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-1800]}], position: 791, duration: 0 },
                { id: "eid146", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-1800]}], position: 833, duration: 0 },
                { id: "eid147", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 875, duration: 0 },
                { id: "eid148", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-2400]}], position: 916, duration: 0 },
                { id: "eid149", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-2400]}], position: 958, duration: 0 },
                { id: "eid150", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-2400]}], position: 1000, duration: 0 },
                { id: "eid151", tween: [ "style", "${_zidane_sprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_zidane_sprite}", "width", '640px', { fromValue: '640px'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_zidane_sprite}", "top", '415px', { fromValue: '415px'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_zidane_sprite}", "height", '600px', { fromValue: '600px'}], position: 0, duration: 0 }            ]
        }
    }
},
"zidane_sprite_symbol_1": {
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
                    id: 'zidane_sprite',
                    type: 'image',
                    rect: ['0px', '0px', '3200px', '3000px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/zidane_sprite.jpg', '0px', '0px', '3200px', '3000px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_zidane_sprite}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '600px'],
                ["style", "background-size", [3200,3000], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${symbolSelector}": [
                ["style", "height", '600px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid96", tween: [ "style", "${_zidane_sprite}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 41, duration: 0 },
                { id: "eid98", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,0]}], position: 83, duration: 0 },
                { id: "eid99", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,0]}], position: 125, duration: 0 },
                { id: "eid100", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,0]}], position: 166, duration: 0 },
                { id: "eid101", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,0]}], position: 208, duration: 0 },
                { id: "eid102", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-600]}], position: 250, duration: 0 },
                { id: "eid103", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-600]}], position: 291, duration: 0 },
                { id: "eid104", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-600]}], position: 333, duration: 0 },
                { id: "eid105", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-600], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-600]}], position: 375, duration: 0 },
                { id: "eid106", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-600]}], position: 416, duration: 0 },
                { id: "eid107", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1200]}], position: 458, duration: 0 },
                { id: "eid108", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-1200]}], position: 500, duration: 0 },
                { id: "eid109", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-1200]}], position: 541, duration: 0 },
                { id: "eid110", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-1200], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-1200]}], position: 583, duration: 0 },
                { id: "eid111", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-1200]}], position: 625, duration: 0 },
                { id: "eid112", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1800]}], position: 666, duration: 0 },
                { id: "eid113", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-1800]}], position: 708, duration: 0 },
                { id: "eid114", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-1800]}], position: 750, duration: 0 },
                { id: "eid115", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-1800], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-1800]}], position: 791, duration: 0 },
                { id: "eid116", tween: [ "style", "${_zidane_sprite}", "background-position", [0,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-2560,-1800]}], position: 833, duration: 0 },
                { id: "eid117", tween: [ "style", "${_zidane_sprite}", "background-position", [-640,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-2400]}], position: 875, duration: 0 },
                { id: "eid118", tween: [ "style", "${_zidane_sprite}", "background-position", [-1280,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-640,-2400]}], position: 916, duration: 0 },
                { id: "eid119", tween: [ "style", "${_zidane_sprite}", "background-position", [-1920,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1280,-2400]}], position: 958, duration: 0 },
                { id: "eid120", tween: [ "style", "${_zidane_sprite}", "background-position", [-2560,-2400], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-1920,-2400]}], position: 1000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_zidane_sprite}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_zidane_sprite}", "width", '640px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_zidane_sprite}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_zidane_sprite}", "height", '600px', { fromValue: '0px'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-28034468");
