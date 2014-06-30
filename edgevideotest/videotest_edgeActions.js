/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         // Map scroll position to timeline position
         var animationHeight = 2000;
         var stageHeight = sym.$("Stage").height();
         var scrollPos = sym.$("Stage").scrollTop();
         var duration = sym.getDuration();
         var percent = scrollPos / (animationHeight - stageHeight);
         var time = duration * percent;
         
         // Update timeline
         sym.stop(time);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'zidane_sprite_symbol_1'
   (function(symbolName) {   
   
   })("zidane_sprite_symbol_1");
   //Edge symbol end:'zidane_sprite_symbol_1'

})(jQuery, AdobeEdge, "EDGE-28034468");