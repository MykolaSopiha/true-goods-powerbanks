$(document).ready(function() {
    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var delivery_price = data.delivery_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_s3').text(delivery_price);
        $('.price_land_curr').text(currency);
        if(geoKey == '357') { $('body').addClass('bel'); }
    });


    $('a').click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });
}); 


function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function lastpack(last) {
    var lastclass = $('.sale_today');
    document.cookie = "sale_today="+last;
    lastclass.html(last);   
    last++;
    setTimeout(lastpack, 45000, last);
}

$(document).ready(function() {
  var lastpackcookie = getCookie("sale_today");
  if(lastpackcookie == undefined){
    document.cookie = "sale_today=273";
    lastpack(273);
  } else {
    lastpack(lastpackcookie);
  } 
}); 