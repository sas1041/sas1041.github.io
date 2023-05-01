// Shows top menu when clicked
$("#menuIcon").click(function() {
    if ($(window).width() >= 600) {
        $("#menu").css("height", "70px");
    }
    else {
        $("#menu").css("height", "200px");
    }
});

// Hides the top menu if x button is clicked
$("#menuX").click(function() {
    $("#menu").css("height", "0");
});

// Hides the top menu if clicked outside
$(document).click(function(e) {
    if (!$(e.target).is("#menu, #menuX, #menuIcon")) {
        $("#menu").css("height", "0");
    }
});

// If the top menu is open while the browser size increases it hides the top menu
$(window).resize(function(){
    var menuHeight = $("#menu").css("height");

    if(($(this).width() <= 600) && (menuHeight != "0px")) {
        $("#menu").css("height", "200px");
    }
    else if (menuHeight != "0px") {
        $("#menu").css("height", "70px");
    }
});

// Shows/hides text on hover over portfolio arrow
$("#rightArrow").on({
    mouseenter: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeOutRight");
        span.addClass("animate__fadeInRight");
        span.css("display", "inline-block");    
    },
    mouseleave: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeInRight");
        span.addClass("animate__fadeOutRight");
    }
});

// Shows/hides text on hover over contact arrow
$("#leftArrow").on({
    mouseenter: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeOutLeft");
        span.addClass("animate__fadeInLeft");
        span.css("display", "inline-block");    
    },
    mouseleave: function () {
        var span = $(this).find("span");

        span.removeClass("animate__fadeInLeft");
        span.addClass("animate__fadeOutLeft");
    }
});

// Show expanded panel
$("#schoolManagementPanel").click(function() {
    $("#schoolManagement").css("display", "flex");
});
$("#requestPanel").click(function() {
    $("#requestApp").css("display", "flex");
});
$("#yardsPanel").click(function() {
    $("#yardsWebsite").css("display", "flex");
});
$("#garagePanel").click(function() {
    $("#garageWebsite").css("display", "flex");
});
$("#uploadHubPanel").click(function() {
    $("#uploadHub").css("display", "flex");
});
$("#covidTrackerPanel").click(function() {
    $("#covidTracker").css("display", "flex");
});
$("#conversionAppPanel").click(function() {
    $("#conversionApp").css("display", "flex");
});

// Blur background when panel is selected
$(".panel").click(function() {
    $("#portfolio  > *").addClass("unselect");
    $("#socials").addClass("unselect");
});

// Hide expanded panel with x button
$(".panelX").click(function() {
    $(this).parents(".expandedPanel").css("display", "none");
    $("#portfolio > *").removeClass("unselect");
    $("#socials").removeClass("unselect");
});

// Hides the expanded panel if clicked outside
$(document).click(function(e) {
    var obj = $(".expandedPanel");
    var panel = $(".panel");

    if (!$(e.target).closest(obj).length && !$(e.target).closest(panel).length) {
        $(".expandedPanel").css("display", "none");
        $("#portfolio > *").removeClass("unselect");
        $("#socials").removeClass("unselect");
    }
});

