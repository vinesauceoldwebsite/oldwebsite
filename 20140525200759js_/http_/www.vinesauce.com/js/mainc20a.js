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

/*
	MAIN PAGE
*/

function streamResize() {
    var stream_width = $('#stream').width();
    var new_height = (stream_width / 16) * 9 + 30;
    $('#stream').height(new_height);
    $('#channelContainer').height(new_height + 20);
}

$(document).ready(function (e) {
    streamResize();
    $(window).resize(function () {
        streamResize();
    });



    $('#mainNavigationCommunity').addClass('hover');
    $('#mainNavigation li').click(function () {
        $('#mainNavigation li').removeClass('hover');
        $(this).addClass('hover');

        var height = $('#bottomBar').height();
        if ($(this).attr('id') == 'mainNavigationCommunity') {
            $('#bottomBar .container').css("marginTop", 0)
        } else if ($(this).attr('id') == 'mainNavigationVideos') {
            $('#bottomBar .container').css("marginTop", -1 * height)
        } else if ($(this).attr('id') == 'mainNavigationBlogs') {
            $('#bottomBar .container').css("marginTop", -2 * height)
        } else if ($(this).attr('id') == 'mainNavigationShops') {
            $('#bottomBar .container').css("marginTop", -3 * height)
        }

    });

    $('#pt_twitch').click(function () {
        $('#stream iframe').attr('src', 'players/twitch.php');
        liveCheckResults = true;
    });
    $('#pt_livestream').click(function () {
        $('#stream iframe').attr('src', 'players/livestream.html');
        liveCheckResults = false;
    });

    var hidden = false;
    $('#toggle-visibility').click(function () {
        if (hidden == false) {
            hidden = true;
            $('#channelContainer').addClass('hide');
            streamResize();
        } else {
            hidden = false;
            $('#channelContainer').removeClass('hide');
            streamResize();
        }

        $('channelContainer').css('padding-right', '20px');

    });

    $('#toggle-dim').click(function () {
        if ($('body').hasClass("dimmed")) {
            $('body').removeClass("dimmed");
        } else {
            $('body').addClass("dimmed");
        }
    });
    $('#toggle-chat').click(function () {
        if ($('#chat').hasClass("twitch")) {
            $('#chat').removeClass("twitch");
        } else {
            $('#chat').addClass("twitch");
        }
    });


    var chatAlt = false;
    var chatAltCookie = $.cookie("altChat");
    if (chatAltCookie == "true") {
        chatAlt = true;
        $('#channelContainer').addClass('alt');
    }
    $('#toggle-location').click(function () {
        if (chatAlt == false) {
            chatAlt = true;
            $('#channelContainer').addClass('alt');
            $.cookie("altChat", true);
        } else {
            $('#channelContainer').removeClass('alt');
            chatAlt = false;
            $.cookie("altChat", false);
        }
    });

    $('#channel0').addClass('active');
    $('#videoContainer .channels li').click(function () {
        $('#videoContainer .channels li').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr("id");
        var offsetMultiplyer = id.substring(7);
        $("#videoListInnerFrame").css("marginTop", -(offsetMultiplyer * 690) + 'px');
    });

    function setTwitterNavigation() {
        if (!$('#twitterFeed .twitterTextFrame ul li.activeTweet').hasClass('firstChild')) {
            $('#twitterLeft').addClass('active');
        } else {
            $('#twitterLeft').removeClass('active');
        }
        if (!$('#twitterFeed .twitterTextFrame ul li.activeTweet').hasClass('lastChild')) {
            $('#twitterRight').addClass('active');
        } else {
            $('#twitterRight').removeClass('active');
        }
    }

    var twitterTextDisplay = 0;
    var twitterTextEntries = $("#twitterFeed .twitterTextFrame .twitterText li").length;
    console.log(twitterTextEntries);
    $('#twitterFeed .twitterTextFrame ul li:nth-child(1)').addClass('activeTweet');
    setTwitterNavigation();

    $('#twitterLeft').click(function () {
        if (twitterTextDisplay > 0) {
            twitterTextDisplay--;
            $('#twitterFeed .twitterTextFrame ul li').removeClass('activeTweet');
            $('#twitterFeed .twitterTextFrame ul li:nth-child(' + (twitterTextDisplay + 1) + ')').addClass('activeTweet');
            setTwitterNavigation();
        }
        $('#twitterFeed .twitterTextFrame .twitterText').animate({
            marginTop: (-1) * twitterTextDisplay * 24 + 'px'
        }, 0)
    });

    $('#twitterRight').click(function () {
        if (twitterTextDisplay < 9) {
            twitterTextDisplay++;
            $('#twitterFeed .twitterTextFrame ul li').removeClass('activeTweet');
            $('#twitterFeed .twitterTextFrame ul li:nth-child(' + (twitterTextDisplay + 1) + ')').addClass('activeTweet');
            setTwitterNavigation();
        }
        $('#twitterFeed .twitterTextFrame .twitterText').animate({
            marginTop: (-1) * twitterTextDisplay * 24 + 'px'
        }, 0)
    });

    $(".twitterText").mouseenter(function () {
		$(".twitterText li .tweet").hide();
        $(".twitterText li .time").show();
    })
	$(".twitterText").mouseleave(function () {
		$(".twitterText li .tweet").show();
        $(".twitterText li .time").hide();
    })

	function updateTwitter(){
		$.get('../../../20140525200759/http://vinesauce.com/php/twitter/twitterText.txt', function (data) {
            $('#twitterFeed .twitterTextFrame .twitterText').html(data);
			console.log('Twitter updated.');
        });
	}
	window.setInterval(function () {
		updateTwitter();
    }, 60000);

});

}
/*
     FILE ARCHIVED ON 20:07:59 May 25, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:26:00 Nov 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.53
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 6.706
  LoadShardBlock: 111.078 (3)
  PetaboxLoader3.datanode: 115.867 (4)
  load_resource: 109.453
  PetaboxLoader3.resolve: 59.695
*/