$(document).ready(function() {

    $("#search-form").hide();

    function closeSearch() {
        $("#search-form").toggle();
        $("#search").toggleClass("current");
        $("#search-arrow").toggleClass("arrow-down");
    }

    $("#search").click(function(){
        closeSearch();
        $('#searchfield').focus();
    });

    $("#search-form-close").click(function(){
        closeSearch();
    });


});