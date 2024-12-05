$(document).ready(function () {
    // loads all these documents for html doc usage
    $(function() {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    // plays a sound effect when user clicks on a button
    $("button").on("click", function() {
        let audio = new Audio('../audio/click_sfx.mp3');
        // lowering volume of it by half
        $('.audio').prop("volume", 0.5);
        audio.play();
    });
});