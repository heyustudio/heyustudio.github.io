
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_news_1}","mouseenter",function(sym,e){});
//Edge binding endSymbol.bindElementAction(compId, symbolName, "${_news_1}", "mouseleave", function(sym, e) {
});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_more}","mouseenter",function(sym,e){sym.play(0);});
//Edge binding endSymbol.bindElementAction(compId, symbolName, "${_more}", "mouseleave", function(sym, e) {
sym.playReverse();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'news_1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_1").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_1").css('z-index',50);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_1").css('z-index',49);});
//Edge binding end
})("news_1");
//Edge symbol end:'news_1'

//=========================================================

//Edge symbol: 'news_2'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_2").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_2").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_2").css('z-index',50);});
//Edge binding end
})("news_2");
//Edge symbol end:'news_2'

//=========================================================

//Edge symbol: 'news_3'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_3").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_3").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group2}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_3").css('z-index',50);});
//Edge binding end
})("news_3");
//Edge symbol end:'news_3'

//=========================================================

//Edge symbol: 'news_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_4").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_4").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_4").css('z-index',50);});
//Edge binding end
})("news_4");
//Edge symbol end:'news_4'

//=========================================================

//Edge symbol: 'news_5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_5").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_5").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_5").css('z-index',50);});
//Edge binding end
})("news_5");
//Edge symbol end:'news_5'

//=========================================================

//Edge symbol: 'news_6'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_6").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_6").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_6").css('z-index',50);});
//Edge binding end
})("news_6");
//Edge symbol end:'news_6'

//=========================================================

//Edge symbol: 'news_7'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_7").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_7").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_7").css('z-index',50);});
//Edge binding end
})("news_7");
//Edge symbol end:'news_7'

//=========================================================

//Edge symbol: 'news_8'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_8").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_8").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_8").css('z-index',50);});
//Edge binding end
})("news_8");
//Edge symbol end:'news_8'

//=========================================================

//Edge symbol: 'news_9'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_9").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_9").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group3}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_9").css('z-index',50);});
//Edge binding end
})("news_9");
//Edge symbol end:'news_9'

//=========================================================

//Edge symbol: 'more'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group4}","mouseenter",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group4}","mouseleave",function(sym,e){sym.playReverse();});
//Edge binding end
})("more");
//Edge symbol end:'more'
})(jQuery,AdobeEdge,"EDGE-6666457");