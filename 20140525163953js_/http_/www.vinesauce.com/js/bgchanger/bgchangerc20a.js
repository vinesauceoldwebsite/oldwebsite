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

$(document).ready(function () {
	
	$(window).resize(function(){
		positionImage();
	});
	
	
    $('#bgChanger li').click(function () {
        $(this).animate({
            marginBottom: "20px",
            marginTop: "0px"
        }, 100, function () {
            $(this).animate({
                marginBottom: "10px",
                marginTop: "10px"
            }, 100, function () {
                // Animation complete.
            });
        });
    });
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	
	function positionImage(){
		var imageWidth = $('#mainBackground img').width();
		var windowWidth = $('#mainBackground').width();
		var adjustedMargin = (windowWidth - imageWidth)/2;
		$('#mainBackground img').css('marginLeft', adjustedMargin);
	}
	
    function resetBoxes() {
        $('#bgChanger li').removeClass('active');
    }
	
	function setBackground1(){
		$("#wallpaperBackground").removeClass();
	   	$("#wallpaperBackground").addClass('bg1');
        $(this).addClass('active');
		createCookie('bgchanger',1,30);
	}
	
	function setBackground2(){ 
		$("#wallpaperBackground").removeClass();
	   	$("#wallpaperBackground").addClass('bg2');
        $(this).addClass('active');
		createCookie('bgchanger',2,30);
	}
	
	if(readCookie('bgchanger')==1){
		setBackground1();
	} else if(readCookie('bgchanger')==2){
		setBackground2();
	}

    $('#bg1').click(function () {
		resetBoxes();
		$(this).addClass('active');	 
	  	setBackground1();
    })
	$('#bg2').click(function () {
		resetBoxes();
		$(this).addClass('active');	 
		setBackground2();
    })
});

}
/*
     FILE ARCHIVED ON 16:39:53 May 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:26:03 Nov 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.509
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 64.029
  LoadShardBlock: 116.91 (3)
  PetaboxLoader3.datanode: 87.708 (4)
  PetaboxLoader3.resolve: 235.325 (2)
  load_resource: 245.234
*/