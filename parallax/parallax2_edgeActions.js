
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.stop();document.addEventListener('touchstart',function(event){event.preventDefault();return false;});window.ondeviceorientation=function(event){var delta=Math.round(event.beta);switch(window.orientation){case 0:delta=Math.round(event.gamma);break;case 180:delta=-Math.round(event.gamma);break;}
var position=15000+(delta*200);position=Math.floor(position);sym.stop(position);console.log(position);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-976014217");