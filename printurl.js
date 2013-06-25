/* 
 * printUrl v0.2
 * @desc printing plug-in for jQuery, print a remote page
 * @author Aurelle Meless
 * 
 * Licensed under GPL license:
 *              http://www.gnu.org/licenses/gpl.html
 * (c) Aurelle Meless 2013
 * 
 * Usage:
 *      var url='https://github.com/aurellemeless/print-url';
 *      // only if your domain is 'github.com'
 *      $.printUrl(url);
 * Notice: 
 *      1- this plug-in is available only if the url argument is on the same 
 *          domain, that for security reasons.
 *      2- don't work properly under mozilla firefox
 */
(function($){
    $.printUrl=function(url){
      var element=$("#printurl_frame");
      if(!element.length){
          $("<iframe>", {
                id: "printurl_frame",
                   css: {
                       display: "none"
                   }
               }).appendTo("body");
           element.attr("name","printurl_frame");  
      }
      var frame=window.parent.frames.printurl_frame;
      element.attr("src",url);
      element.load(function(){
            frame.focus();
            frame.print();
      });
      return this;
    };
})(jQuery);
