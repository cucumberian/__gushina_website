$(document).ready(function () {
    $(".hamburger-button").click(function () {
        console.log("click");
        $(".hamburger").toggleClass("is-active");
        $(".mobile-menu-content").toggleClass("hide");
    });
});