var menu_trigger=function(){$(".menu-trigger").click(function(e){e.preventDefault(),$(".icon-rotate").toggleClass("rotate"),$(".menu-main__visible").toggleClass("hide")}),$(".search-trigger").click(function(e){e.preventDefault(),$(".search-bar").toggleClass("hide"),$(this).toggleClass("hide")})},support=function(){$(".icon-support").click(function(e){e.preventDefault()})},adjust_column_shelf=function(){for(var e=$("#product-list-container > .product-item-container"),i=0;i<e.length;i+=8)e.slice(i,i+8).wrapAll("<div class='carousel__wrapper'></div>")},add_class_body=function(){window.location.pathname.match("duvidas-como-alugar")&&$("body").addClass("duvidas")},apply_carousel_shelf=function(){var e=$("#product-list-container .carousel__wrapper:nth-child(2)");if($("<div class='featured-products-title'>Mais amados</div>").insertBefore(e),e.not(".slick-initialized"),!e.length)return!1;e.slick({slidesToShow:4,slidesToScroll:4,infinite:!0,speed:700})},apply_carousel_product=function(){var e=$(".see-also-wrapper");if(e.not(".slick-initialized"),!e.length)return!1;e.slick({slidesToShow:4,slidesToScroll:4,infinite:!0})},apply_acordeon_question=function(){$(".iluria-page-content > strong").click(function(){$(".active").not(this).removeClass("active").next().hide(300),$(this).toggleClass("active"),0==$(this).next().is(":visible")&&$(".iluria-page-content > .accordion").slideUp(300),$(this).next().slideToggle(200)});var e=$.fx.off;$.fx.off=!0,$(".iluria-page-content > strong:eq(0)").click(),$.fx.off=e},block_url=function(){window.location.href.indexOf("lanalocacoes")>0&&$("body").addClass("block-lana")};$(document).ready(function(){menu_trigger(),support(),adjust_column_shelf(),add_class_body()}),$(window).load(function(){apply_carousel_shelf(),apply_carousel_product(),apply_acordeon_question(),block_url()});