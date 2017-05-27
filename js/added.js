(function($) {
    var segfaultOSClose = $(".video-pauser");
    segfaultOSClose.click(function () {
        // console.log(this.getAttribute("data-video-target"));
        var videoTargetID = this.getAttribute("data-video-target");
        document.getElementById(videoTargetID).pause();
    });

    webshims.polyfill('forms es5');
    
    
    // when page is loaded, if url points to hash, open the corresponding modal
    $(window.location.hash).modal('show');
    // show modal's hash in url bar if user opens a modal
    $('a[data-toggle="modal"]').click(function(){
      window.location.hash = $(this).attr('href');
    });

    // remove modal's hash in url bar if user closes the modal
    function revertToOriginalURL() {
        var original = window.location.href.substr(0, window.location.href.indexOf('#'))
        history.replaceState({}, document.title, original);
    }
    $('.modal').on('hidden.bs.modal', function () {
        revertToOriginalURL();
    });

})(jQuery);

