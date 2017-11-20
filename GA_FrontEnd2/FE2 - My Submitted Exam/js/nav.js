(function() {
  'use strict';


  function attachClickListeners(){
    let $navItems = $('header nav ul li a');

    $.each($navItems, function(index, value){
      let panel = $(this).data().relatedPanel;

      $(this).on('click', function(){
        let slideUp = 1;
        if($(this).hasClass('active')){
          slideUp = 0;
        }

        $(this).addClass('active');

        let me = $(this);
        $.each($navItems, function(index, value){
          if(me.data().relatedPanel != $(this).data().relatedPanel){
            $(this).removeClass('active');
          }
        });

        if(slideUp){
          slideDownSubPanel($(this).data().relatedPanel);
        }else{
          slidePanleUp($(this).data().relatedPanel);
          $(this).removeClass('active');
        }

      });
    });
  }

  function slidePanleUp(panelName){
    $(`#${panelName}`).slideUp('slow');
  }

  function slideDownSubPanel(panelName){


    $('#dropdown').css('display', 'block');
    let subPanel = $(`#${panelName} ul`);
    // let subPanel = $(`#${panelName} ul`);

    let temp = $(`#${panelName}`);

    let allPanels = $('.nav-panel');
    $.each(allPanels, function(index, value){

      if($(this).attr('id') != panelName){
        $(this).css('display', 'none');
      }else{
        $(this).css('display', 'block');
      }

    });

    subPanel.hide().slideDown('slow', function(){
      fadeInSubItems(panelName);
    });
  }

  function fadeInSubItems(panelName){
    let subPanelItems = $(`#${panelName} ul li`);

    $.each(subPanelItems, function(){
      $(this).hide().fadeIn('slow', function(){
      });
    });
  }

  attachClickListeners();
})();
