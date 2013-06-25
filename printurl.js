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
 *      $.printUrl(url);
 */
(function($){
    $.printUrl=function(url){
      var element=$("#print_url_frame");
      if(!element.length){
          $("<iframe>", {
                id: "print_url_frame",
                   css: {
                       display: "none"
                   }
               }).appendTo("body");
           element.attr("name","print_url_frame");  
      }
      var frame=window.parent.frames.print_url_frame;
      element.attr("src",url);
      element.load(function(){
            frame.focus();
            frame.print();
      });
      return this;
    };
})(jQuery);
