(function() {
  'use strict';

  function registerNavbarClickHandlers(){
    let $navbarLinks = $('header nav ul li a');

    $(`#space`).css('display', 'none');

    $.each($navbarLinks, function(index, value){

      $(this).on('click', function(){

        let panelName = $(this).data('relatedPanel');
        $(this).addClass('active');

        let me = $(this);
        removeNonCurrentLinks($navbarLinks, me);


        if($(`#dropdown`).css('display') == 'none'){

          $(`#${panelName}`).css('display', 'block');

          console.log('The dropdown is not yet active');
          slideDownDropDown(panelName);

        } else if($(`#dropdown`).css('display') == 'block' && !isActiveNavBar(panelName)){

          console.log('The dropdown is already down but this is a new nav bar ');

          // $(`#${panelName}`).css('display', 'block');
          $(`#${panelName}`).fadeIn('slow');

          deactivateNonCurrentNavBars(panelName);

        }else if($(`#dropdown`).css('display') == 'block' &&    isActiveNavBar(panelName)){

          console.log('The dropdown is already down and this is our second time clicking the nav bar. Closing the Dropdown.');
          slideUpDropDown(panelName);
          $(this).removeClass('active');

        }
      });

    });
  }

  function isActiveNavBar(panelName){
    if($(`#${panelName}`).css('display') == 'block'){
      return true;
    }
    return false;
  }

  function removeNonCurrentLinks(allLinks, current){
    $.each(allLinks, function(index, value){
      if($(this).data('relatedPanel') != current.data('relatedPanel')){
        $(this).removeClass('active');
      }
    });
  }

  function deactivateNonCurrentNavBars(panelName){
    let allPanels = $(`.nav-panel`);

    $.each(allPanels, function(index, value){
      if($(this).attr('id') != panelName){
        $(this).hide();
      }
    });

  }

  function slideDownDropDown(panelName){
    let dropwDown = $(`#dropdown`).hide().slideDown('slow', function(){
      $(`#${panelName}`).fadeIn('slow');
    });
  }

  function slideUpDropDown(panelName){
    let dropwDown = $(`#dropdown`).slideUp('slow', function(){
      $(`#${panelName}`).css('display', 'none');
    });
  }

  registerNavbarClickHandlers();
})();


/*
(function() {
  'use strict';

  $('a').click(function() {


    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#dropdown').slideUp();
    } else {
      $('a').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      if ($('#dropdown').is(':hidden')) {
        $('#dropdown').slideDown();
      } else {
        $('.nav-panel').hide();
      }

      var $text = $(this).text().toLowerCase();
      if ($text === 'earth science') {
        $text = 'earth';
      }


      $('#' + $text).fadeIn();
    }



  });
})();
*/



// (function() {
//   'use strict';
//
//   function registerNavbarClickHandlers(){
//     let $navbarLinks = $('header nav ul li a');
//
//     $.each($navbarLinks, function(index, value){
//
//       $(this).on('click', function(){
//
//         let panelName = $(this).data('relatedPanel');
//         let makeItSlideUp = 0;
//         if($(this).hasClass('active')){
//           makeItSlideUp = 1;
//         }
//         $(this).addClass('active');
//
//         let me = $(this);
//         removeNonCurrentLinks($navbarLinks, me);
//
//         $(`#${panelName}`).css('display', 'block');
//
//         if(makeItSlideUp){
//           slideUpSubNavBar(panelName);
//           $(this).removeClass('active');
//         }else{
//           dropDownSubNavBar(panelName);
//         }
//
//       });
//
//     });
//   }
//
//   function removeNonCurrentLinks(allLinks, current){
//     $.each(allLinks, function(index, value){
//       if($(this).data('relatedPanel') != current.data('relatedPanel')){
//         $(this).removeClass('active');
//       }
//     });
//   }
//
//   function dropDownSubNavBar(panelName){
//     let allPanels = $(`.nav-panel`);
//
//     $.each(allPanels, function(index, value){
//       if($(this).attr('id') != panelName){
//         $(this).hide();
//       }
//     });
//
//     let dropwDown = $(`#dropdown`).hide().slideDown('slow', function(){
//       $(`#${panelName}`).fadeIn('slow');
//     });
//   }
//
//   function slideUpSubNavBar(panelName){
//     let dropwDown = $(`#dropdown`).slideUp('slow');
//   }
//
//   registerNavbarClickHandlers();
// })();
