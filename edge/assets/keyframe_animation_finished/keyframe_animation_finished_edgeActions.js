
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_play_button}","mouseover",function(sym,e){sym.getSymbol("play_button").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_button}","mouseout",function(sym,e){sym.getSymbol("play_button").playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_play_button}","click",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'play_button'
(function(symbolName){})("play_button");
//Edge symbol end:'play_button'
})(jQuery,AdobeEdge,"EDGE-109228010");