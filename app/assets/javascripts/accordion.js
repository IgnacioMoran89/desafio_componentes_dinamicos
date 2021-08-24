$(document).ready(function () {
    $('.thin-border').hide();
    $('.accordion-card').click(function () {
        $(this).toggleClass("open");
        $(this).find('div.thin-border').slideToggle('fast');
    });
});