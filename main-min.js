var menu_trigger=function(){$(".menu-trigger").click(function(e){e.preventDefault(),$(".icon-rotate").toggleClass("rotate"),$(".menu-main__visible").toggleClass("hide")}),$(".search-trigger").click(function(e){e.preventDefault(),$(".search-bar").toggleClass("hide"),$(this).toggleClass("hide")})},support=function(){$(".icon-support").click(function(e){e.preventDefault()})},ajust_column_shelf=function(){for(var e=$("#product-list-container > .product-item-container"),i=0;i<e.length;i+=8)e.slice(i,i+8).wrapAll("<div class='carousel__wrapper'></div>")},remove_last_icon=function(){$(".nivo-controlNav a:not(:last)").append("<span></span>")},apply_carousel_shelf=function(){var e=$("#product-list-container .carousel__wrapper:nth-child(2)");if($("<div class='featured-products-title'>Mais amados</div>").insertBefore(e),e.not(".slick-initialized"),!e.length)return!1;e.slick({slidesToShow:4,slidesToScroll:4,infinite:!0,speed:700})},apply_carousel_product=function(){var e=$(".see-also-wrapper");if(e.not(".slick-initialized"),!e.length)return!1;e.slick({slidesToShow:4,slidesToScroll:4,infinite:!0,speed:700})};$(document).ready(function(){menu_trigger(),support(),ajust_column_shelf(),remove_last_icon()}),$(window).load(function(){apply_carousel_shelf(),apply_carousel_product()});