/* 
 * printUrl v0.1
 * @desc printing plug-in for jQuery, print a remote page
 * @author Sergy Leves
 * 
 * Licensed under GPL license:
 *              http://www.gnu.org/licenses/gpl.html
 * (c) Sergy Leves 2013
 * 
 * Usage:
 *      var url=http://www.gnu.org/licenses/gpl.html
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


