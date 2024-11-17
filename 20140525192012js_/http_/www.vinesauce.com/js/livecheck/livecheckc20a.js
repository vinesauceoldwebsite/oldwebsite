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

function setLiveCheck(set_time){
	clearInterval(liveCheckInterval);
	liveCheckInterval = setInterval("liveCheck();",set_time);
}

function liveCheck(){
	console.log('Auto livecheck: '+autoLiveCheck);
	if(autoLiveCheck=="1"){
		$.getJSON("../../../20140525192012/http://vinesauce.com/php/twitch/twitchJson.json", function(data){
			console.log('Before livecheck: '+liveCheckResults);
			
			console.log('Value returned by livecheck: '+data.live);
			
			if(data.live != "1"){
				if(liveCheckResults == true){
					console.log('Twitch is not live.');
					liveCheckResults = false;
					$("#stream iframe").attr("src", "../../../20140525192012/http://vinesauce.com/players/livestream.html");
				}
				setLiveCheck(300000);
			}
			else{
				if(liveCheckResults != true){
					console.log('Twitch is currently live.');
					liveCheckResults = true; 
					$("#stream iframe").attr("src", "../../../20140525192012/http://vinesauce.com/players/twitch.php");
				}
				setLiveCheck(600000);
			}
		});
	}else{
		setLiveCheck(300000);
	}
}

function initializeLiveCheck(){
	var coeff = 1000 * 60;
	var date = new Date();  //or use any other date
	var then = new Date(Math.ceil(date.getTime() / coeff) * coeff)
	var now = new Date;
	var difference = then.getTime() - now.getTime();
	console.log('Auto livecheck initial: '+autoLiveCheck);
	if(autoLiveCheck == '1'){
		$.getJSON("../../../20140525192012/http://vinesauce.com/php/twitch/twitchJson.json", function(data){
			console.log('Before livecheck: '+liveCheckResults);
			console.log('Value returned by livecheck: '+data.live);
			if(data.live != "1"){
				if(liveCheckResults == true){
					console.log('Twitch is not live.');
					liveCheckResults = false;
					$("#stream iframe").attr("src", "../../../20140525192012/http://vinesauce.com/players/livestream.html");
				}
			}
			else{
				if(liveCheckResults != true){
					console.log('Twitch is currently live.');
					liveCheckResults = true; 
					$("#stream iframe").attr("src", "../../../20140525192012/http://vinesauce.com/players/twitch.php");
				}
			}
			console.log('Livecheck '+liveCheckResults);
		});
	}
	setLiveCheck(difference);
}

var liveCheckInterval;
var liveCheckResults = true;
var autoLiveCheck = true;
$('#autoLiveCheck').addClass('active');
var autoLiveCheckCookie 		= $.cookie("autoLiveCheck");

console.log('Livecheck cookie :' + $.cookie("autoLiveCheck"));

if (autoLiveCheckCookie == undefined) {
	autoLiveCheck = true;
	$('#autoLiveCheck').addClass('active');
	$.cookie("autoLiveCheck", "1"); 
}else if(autoLiveCheckCookie == "1"){
	autoLiveCheck = true;
	$('#autoLiveCheck').addClass('active');
	$.cookie("autoLiveCheck", "1"); 
}else if(autoLiveCheckCookie == "0"){
	autoLiveCheck = false;
	$('#autoLiveCheck').removeClass('active');
	$.cookie("autoLiveCheck", "0"); 
}

console.log("Auto livecheck: "+autoLiveCheck);

initializeLiveCheck();

$(document).ready(function(){
	$('#autoLiveCheck').click(function(){
		if(autoLiveCheck != true){
			autoLiveCheck = true;
			$('#autoLiveCheck').addClass('active');
			$.cookie("autoLiveCheck", "1"); 
		}else{
			autoLiveCheck = false;
			$('#autoLiveCheck').removeClass('active');
			$.cookie("autoLiveCheck", "0"); 
		}
	});
})

}
/*
     FILE ARCHIVED ON 19:20:12 May 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:26:05 Nov 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 6.102
  LoadShardBlock: 105.007 (3)
  PetaboxLoader3.datanode: 77.362 (4)
  PetaboxLoader3.resolve: 102.486 (2)
  load_resource: 109.312
*/