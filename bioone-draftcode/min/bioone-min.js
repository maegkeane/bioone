$(document).ready(function(){var i=function(){$("nav").toggleClass("open")};$(".handle").click(function(){i(),$("body").toggleClass("stop-scrolling")});var s=function(){$("#charter-supporters-container").toggleClass("open")};$(".btn-secondary-charter").click(function(){return s(),$(this).text("Show list"===$(this).text()?"Close list":"Show list"),!1}),$("a.bio-list-item_short-bio-container").click(function(){var i=$(this).siblings(".bio-list-item_modal");i.hasClass("visible")||(i.addClass("visible"),$(this).append('<div class="overlay"></div>'),$("body").addClass("stop-scrolling"))}),$("body").on("click",".close, .overlay",function(){var i=$(this).closest(".bio-list-item");i.find(".bio-list-item_modal").removeClass("visible"),i.find(".overlay").remove(),$("body").removeClass("stop-scrolling")})});var toggleCardCalendar=function(i){i.find(".card_calendar_expand").toggleClass("visible")};$(".card_calendar").click(function(){toggleCardCalendar($(this))});