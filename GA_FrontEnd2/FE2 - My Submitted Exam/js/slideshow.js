(function() {
  'use strict';

  var slideshow = [{
    'image': 'images/slideshow_1.jpeg',
    'caption': 'Cloudy with a chance of moon'
  }, {
    'image': 'images/slideshow_2.jpeg',
    'caption': 'Half moon mountain'
  }, {
    'image': 'images/slideshow_3.jpeg',
    'caption': 'Moonrise'
  }];


  //
  // function addImages(){
  //   for(let i = 0; i < 3; i++){
  //
  //     let $img = ('<img>').attr('src', slideshow[i].image).attr('title', slideshow[i].caption).attr('alt', slideshow[i].caption);
  //
  //     if(i == 0){
  //       console.log("here");
  //       $img.addClass('current');
  //     }
  //     $('.slideshow-wrapper').append($img);
  //   }
  // }
  // 
  // //addImages();

  for(let i = 0; i < 3; i++){
    $('.slideshow-wrapper').append($('<img>').attr('src', slideshow[i].image).attr('title', slideshow[i].caption).attr('alt', slideshow[i].caption));
  }

})();
