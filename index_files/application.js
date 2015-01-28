
$(document).ready(function() {
  // enhance main nav
  $(".nav-link-events").hover( function () { $(this).addClass("nav-link-events-blue"); }, function () { $(this).removeClass("nav-link-events-blue"); } );
  $(".nav-link-design").hover( function () { $(this).addClass("nav-link-design-blue"); }, function () { $(this).removeClass("nav-link-design-blue"); } );
  $(".nav-link-blog").hover( function () { $(this).addClass("nav-link-blog-blue"); }, function () { $(this).removeClass("nav-link-blog-blue"); } );
  $(".nav-link-about").hover( function () { $(this).addClass("nav-link-about-blue"); }, function () { $(this).removeClass("nav-link-about-blue"); } );
  $(".nav-link-contact").hover( function () { $(this).addClass("nav-link-contact-blue"); }, function () { $(this).removeClass("nav-link-contact-blue"); } );


  $("ul.tabs").tabs("div.panes > div");
  $("ul#team-photos").tabs("#team-blurbs > div");

  $("a.vimeo-video").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false, deeplinking: false, social_tools: false});
  $("a.flash-video").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false, deeplinking: false, social_tools: false});
  $("a.press-photo").prettyPhoto({ deeplinking: false, social_tools: false });
  $("a.iframe").prettyPhoto({ theme:"light_square", deeplinking: false, social_tools: false });

  $("#contactForm").validate();
  $("#event_date").datepicker({changeMonth:true, changeYear:true, dateFormat:'MM d, yy'});

  $("#where-field").hide();
  $('#referred_by').change(function() {
    if ($(this).val() == "Online Search") {
	$('#where-field').show();
    } else {
  	$('#where-field').hide();
    }
  });
});

$(window).load(function() {
  $("#main-photo-slider").nivoSlider({
      captionOpacity:0.4,
      controlNav:false, 
      pauseTime:4000, 
      animSpeed:1000,
      effect: 'fade'
  });
  $("#design-images").nivoSlider({
      captionOpacity:0.4, 
      controlNav:false,
      directionNavHide:false,
      pauseTime:6000, 
      animSpeed:1000,
      effect: 'boxRainGrow',
      manualAdvance: true,
      afterChange: function(element) {
        var nivoVars = $('#design-images').data('nivo:vars');
        var currentImage = nivoVars.currentImage;
        //alert($(currentImage).attr('src'));
        //
        if ($(currentImage).attr('src').match('design_one')) {
          $("#design-two-left-box").hide();
          $("#design-two-right-box").hide();
          $("#design-three-left-box").hide();
          $("#design-three-right-box").hide();
          $("#design-four-left-box").hide();
          $("#design-four-right-box").hide();
          $("#design-five-left-box").hide();
          $("#design-five-right-box").hide();
          $("#design-one-left-box").show();
          $("#design-one-right-box").show();

        }
        if ($(currentImage).attr('src').match('design_two')) {
          $("#design-one-left-box").hide();
          $("#design-one-right-box").hide();
          $("#design-three-left-box").hide();
          $("#design-three-right-box").hide();
          $("#design-four-left-box").hide();
          $("#design-four-right-box").hide();
          $("#design-five-left-box").hide();
          $("#design-five-right-box").hide();
          $("#design-two-left-box").show();
          $("#design-two-right-box").show();
        }
        if ($(currentImage).attr('src').match('design_three')) {
          $("#design-one-left-box").hide();
          $("#design-one-right-box").hide();
          $("#design-two-left-box").hide();
          $("#design-two-right-box").hide();
          $("#design-four-left-box").hide();
          $("#design-four-right-box").hide();
          $("#design-five-left-box").hide();
          $("#design-five-right-box").hide();
          $("#design-three-left-box").show();
          $("#design-three-right-box").show();
        }
        if ($(currentImage).attr('src').match('design_four')) {
          $("#design-one-left-box").hide();
          $("#design-one-right-box").hide();
          $("#design-two-left-box").hide();
          $("#design-two-right-box").hide();
          $("#design-three-left-box").hide();
          $("#design-three-right-box").hide();
          $("#design-five-left-box").hide();
          $("#design-five-right-box").hide();
          $("#design-four-left-box").show();
          $("#design-four-right-box").show();
        }
        if ($(currentImage).attr('src').match('design_five')) {
          $("#design-one-left-box").hide();
          $("#design-one-right-box").hide();
          $("#design-two-left-box").hide();
          $("#design-two-right-box").hide();
          $("#design-three-left-box").hide();
          $("#design-three-right-box").hide();
          $("#design-four-left-box").hide();
          $("#design-four-right-box").hide();
          $("#design-five-left-box").show();
          $("#design-five-right-box").show();
        }
      }
  });
});
