(function() {
  'use strict';

  function registerNavbarClickHandlers(){
    let $navbarLinks = $('header nav ul li a');

    $.each($navbarLinks, function(index, value){

      $(this).on('click', function(){

        let panelName = $(this).data('relatedPanel');
        let makeItSlideUp = 0;
        if($(this).hasClass('active')){
          makeItSlideUp = 1;
        }
        $(this).addClass('active');

        let me = $(this);
        removeNonCurrentLinks($navbarLinks, me);

        $(`#${panelName}`).css('display', 'block');

        if(makeItSlideUp){
          slideUpSubNavBar(panelName);
          $(this).removeClass('active');
        }else{
          dropDownSubNavBar(panelName);
        }
      });

    });
  }

  function removeNonCurrentLinks(allLinks, current){
    $.each(allLinks, function(index, value){
      if($(this).data('relatedPanel') != current.data('relatedPanel')){
        $(this).removeClass('active');
      }
    });
  }

  function dropDownSubNavBar(panelName){
    let allPanels = $(`.nav-panel`);

    $.each(allPanels, function(index, value){
      if($(this).attr('id') != panelName){
        $(this).hide();
      }
    });

    let dropwDown = $(`#dropdown`).hide().slideDown('slow', function(){
      $(`#${panelName}`).fadeIn('slow');
    });
  }

  function slideUpSubNavBar(panelName){
    let dropwDown = $(`#dropdown`).slideUp('slow');
  }

  registerNavbarClickHandlers();
})();
