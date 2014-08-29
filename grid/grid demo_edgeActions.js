
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_nav}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1750,function(sym,e){window.open("grid%20article.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'news_2'
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
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_3").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_3").css('z-index',50);});
//Edge binding end
})("news_3");
//Edge symbol end:'news_3'

//=========================================================

//Edge symbol: 'news_4'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_5").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_5").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_5").css('z-index',50);});
//Edge binding end
})("news_4");
//Edge symbol end:'news_4'

//=========================================================

//Edge symbol: 'news_5'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_13").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_13").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_13").css('z-index',50);});
//Edge binding end
})("news_5");
//Edge symbol end:'news_5'

//=========================================================

//Edge symbol: 'news_6'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_6").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_6").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_6").css('z-index',50);});
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
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_8").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_8").css('z-index',50);});
//Edge binding end
})("news_8");
//Edge symbol end:'news_8'

//=========================================================

//Edge symbol: 'news_9'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_9").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_9").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_9").css('z-index',50);});
//Edge binding end
})("news_9");
//Edge symbol end:'news_9'

//=========================================================

//Edge symbol: 'news_10'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_10").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_10").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_10").css('z-index',50);});
//Edge binding end
})("news_10");
//Edge symbol end:'news_10'

//=========================================================

//Edge symbol: 'news_11'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_11").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_11").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_11").css('z-index',50);});
//Edge binding end
})("news_11");
//Edge symbol end:'news_11'

//=========================================================

//Edge symbol: 'news_12'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_12").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_12").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_12").css('z-index',50);});
//Edge binding end
})("news_12");
//Edge symbol end:'news_12'

//=========================================================

//Edge symbol: 'news_13'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getComposition().getStage().$("news_4").css('z-index',49);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("news_4").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("news_4").css('z-index',50);});
//Edge binding end
})("news_13");
//Edge symbol end:'news_13'

//=========================================================

//Edge symbol: 'nav'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseenter",function(sym,e){sym.play();sym.getComposition().getStage().$("nav").css('z-index',99);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group}","mouseleave",function(sym,e){sym.playReverse();sym.getComposition().getStage().$("nav").css('z-index',49);});
//Edge binding end
})("nav");
//Edge symbol end:'nav'
})(jQuery,AdobeEdge,"EDGE-10520772");