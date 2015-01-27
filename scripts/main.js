(function() {
  'use strict';



  $(document).ready(function() {



    var $newResults = $(".data");

    function newArray(data) {
      var $newResults = $('.cactus-list');
      var results = data.results;
      results.forEach(function(cactus) {
        var cactusText = renderTemplate('cactus-item', {
          image: cactus.Images[0].url_170x135,
          title: cactus.title,
          cost: cactus.price,

        });
        $newResults.append(cactusText);
      });
    }



    function search(ele) {
      if (event.keyCode == 13) {
        var etsySearchTerm = ("https://api.etsy.com/v2/listings/active.js?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=" + (ele.value.replace(/ /g, '+')) + "&includes=Images,Shop&limit=9");
        console.log(etsySearchTerm);
        $.ajax({
          url: etsySearchTerm,
          dataType: 'jsonp'
        }).done(function(newArray) {
          console.log(newArray);
        });
      }
    }






    function renderTemplate(name, data) {
      var $template = $('[data-template-name=' + name + ']').text();
      $.each(data, function(prop, value) {
        $template = $template.replace('<% ' + prop + ' %>', value);
      });
      return $template;
    }

  });

  $(document).ready(function() {
    $('#trigger').click(function(event) {
      event.stopPropagation();
      $('#drop').toggle();
    });

    $(document).click(function() {
      $('#drop').hide();
    });
  });


  $(function() {
    $("#search-box").hide();
    $(".element").click(function() {
      $(".element").toggleClass("hover");
      $("#search-box").slideToggle();
    });
  });
}());

// document.getElementsByClassName('input')[0].addEventListener('keydown', function(e) {
//   if (e.keyCode == 13) {
//     console.log("hello");
//   }
// }, false);


//Alert value of searchbar


// });

//
// .done(function(data){
//   var shouldDelete =
//   if(shouldDelete){
//     $.ajax({
//       url: ;
//       type: "DELETE"
//     }).done(function(data){
//       console.log(data);
//   }
// });