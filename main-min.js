var add_class_body=function(){window.location.pathname.match("duvidas-como-alugar")?$("body").addClass("duvidas"):window.location.pathname.match("-ct-")?$("body").addClass("categorias"):window.location.pathname.match("search")&&$("body").addClass("busca")},menu_trigger=function(){$(".menu-trigger").click(function(o){o.preventDefault(),$(".icon-rotate").toggleClass("rotate"),$(".menu-main__visible").toggleClass("hide")}),$(".search-trigger").click(function(o){o.preventDefault(),$(".search-bar").toggleClass("hide"),$(this).toggleClass("hide")})},support=function(){$(".icon-support").click(function(o){o.preventDefault()})},adjust_column_shelf=function(){for(var o=$("#product-list-container > .product-item-container"),e=0;e<o.length;e+=8)o.slice(e,e+8).wrapAll("<div class='carousel__wrapper'></div>")},apply_carousel_shelf=function(){var o=$("#product-list-container .carousel__wrapper:nth-child(2)");if($("<div class='featured-products-title'>Mais amados</div>").insertBefore(o),o.not(".slick-initialized"),!o.length)return!1;o.slick({slidesToShow:4,slidesToScroll:4,infinite:!0,speed:700,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})},apply_carousel_product=function(){var o=$(".see-also-wrapper");if(o.not(".slick-initialized"),!o.length)return!1;o.slick({slidesToShow:4,slidesToScroll:4,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})},apply_acordeon_question=function(){$(".iluria-page-content > strong").click(function(){$(".active").not(this).removeClass("active").next().hide(300),$(this).toggleClass("active"),0==$(this).next().is(":visible")&&$(".iluria-page-content > .accordion").slideUp(300),$(this).next().slideToggle(200)});var o=$.fx.off;$.fx.off=!0,$(".iluria-page-content > strong:eq(0)").click(),$.fx.off=o},click_href=function(){$(".icon-support a").on("click",function(){window.location="/duvidas-como-alugar-pg-88a83"})},apply_required_and_text=function(){$("#cartCommentsForm textarea").attr("placeholder","Por favor adicione a data do evento no seguinte formato 00/00/0000 e o horário 00:00").prop("required",!0)},apply_carousel_tipbar=function(){var o=$(".tip__bar--wrapper ul");if(o.not(".slick-initialized"),!o.length)return!1;o.slick({slidesToShow:3,slidesToScroll:3,infinite:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}}]})};$(document).ready(function(){menu_trigger(),support(),window.location.pathname.match("-ct-")||window.location.pathname.match("search")||adjust_column_shelf(),add_class_body()}),$(window).load(function(){apply_carousel_shelf(),apply_carousel_product(),apply_acordeon_question(),click_href(),apply_required_and_text(),apply_carousel_tipbar()});