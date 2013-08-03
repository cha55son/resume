$(document).ready(function() {
    $('a').click(function() {
        window.open($(this).attr('href'), "_blank");
        return false;
    });
});
