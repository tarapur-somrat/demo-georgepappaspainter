var waitForJQuery = setInterval(function () {
  if (typeof $ != 'undefined') {
    $(document).ready(function () {
      var logoUrl = $('.p_hfcontainer img').attr('src');
      $('body').append(
        `<div id="tabletMessage"><div id="tabletMessage_container"><div id="tabletMessage_logo"> <a> <img src="${logoUrl}"/></a></div><div id="tabletMessage_heading">Tablet and landscape view are not supported</div><div id="tabletMessage_text">Dedicated tablet and landscape view are no longer supported. For tablet, please update to the latest iOS to use the desktop version on Safari. For landscape, please turn your phone to view the website in portrait mode.</div></div></div>`
      );
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var isChromeIpad =
        /CriOS/i.test(navigator.userAgent) &&
        /ipod|ipad/i.test(navigator.userAgent);
      var isNewIpad = navigator.platform;

      if (
        $(window).width() > 480 &&
        $(window).width() < 1024 &&
        window.location.href.indexOf('webbuilder') != -1
      ) {
        $('#tabletMessage').css('display', 'flex');
        $('html, body').css('overflow', 'hidden');
      } else if (isChromeIpad) {
        $('#tabletMessage').css('display', 'flex');
        $('html, body').css('overflow', 'hidden');
      } else if (navigator.platform == 'iPad') {
        $('#tabletMessage').css('display', 'flex');
        $('html, body').css('overflow', 'hidden');
      } else if (navigator.platform == 'MacIntel') {
        $('#tabletMessage').css('display', 'none');
        console.log("I'm the latest safari on iPad");
      } else if ($(window).width() > 480 && $(window).width() < 1024) {
        $('#tabletMessage').css('display', 'flex');
        $('html, body').css('overflow', 'hidden');
      } else {
        $('#tabletMessage').css('display', 'none');
        console.log("I'm either mobile or dekstop");
      }
    });
    //

    clearInterval(waitForJQuery);
  }
}, 10);