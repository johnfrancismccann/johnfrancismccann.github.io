(function($) {
    var segfaultOSClose = $(".video-pauser");
    segfaultOSClose.click(function () {
        // console.log(this.getAttribute("data-video-target"));
        var videoTargetID = this.getAttribute("data-video-target");
        document.getElementById(videoTargetID).pause();
    });

    webshims.polyfill('forms es5');
})(jQuery);

