var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function kappa(){
	$('#konami').append("<div id='kappa'></div>");
	$('#konami').css("z-index","9");
	$('#kappa').animate({
		right: "5px"
	  }, 1000, function() {
		$(this).animate({
			right: "-96px"
		}, 1000, function(){
			$('#konami').html("");
			$('#konami').css("z-index","-9");
		})
	  });
}

jwerty.key('shift+K,A,P,P,A', function () {
	kappa();
});

}
/*
     FILE ARCHIVED ON 15:40:04 May 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:26:02 Nov 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.472
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 5.869
  LoadShardBlock: 46.662 (3)
  PetaboxLoader3.datanode: 69.643 (4)
  load_resource: 109.637
  PetaboxLoader3.resolve: 48.487
*/