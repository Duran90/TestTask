$(document).ready(function () {
    $(".el").click(function () {
        var elem =$(this).children(".text");
        var pl = $(this).children(".name").children(".plus");

        elem.slideToggle(1000);
        pl.toggleClass("min");

    })
});

