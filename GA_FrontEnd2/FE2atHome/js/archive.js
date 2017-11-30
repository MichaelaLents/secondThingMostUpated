(function() {
  'use strict';

  let offset = 0;

  let url = 'https://credentials-api.generalassemb.ly/explorer/posts?offset=';
  var jsonURL = 'https://credentials-api.generalassemb.ly/explorer/posts';

  let $loadMoreButton = $('#load-more');
  let $articleSection = $('#article-list article');

//   $.ajaxSetup({
//   beforeSend: function() {
//      // $('#loader').show();
//      $loadMoreButton.html('Exploring the archive...'+'<i class="fa fa-circle-o-notch fa-spin">');
//      console.log('Showing the loader');
//   },
//   complete: function(){
//      // $('#loader').hide();
//      $loadMoreButton.text('End of archive');
//      console.log('Hiding the loader');
//   }
// });


  function registerLoadMoreButton(){

    $loadMoreButton.on('click', function(){
      console.log('clicked the button');

      getMoreArticles();
    });
  }

  function getMoreArticles(){

    $.ajax({type: "GET",
           url: url+offset,
           beforeSend: function() {
              // $('#loader').show();
              $loadMoreButton.html('Exploring the archive...'+'<i class="fa fa-circle-o-notch fa-spin">');
              console.log('Showing the loader');

              console.log('Url: ', url+offset);
           },
           success: function(data){
             console.log('Have received the data: ', JSON.parse(data));
             offset+=4;
             let json = JSON.parse(data);

             if(json.posts.length){
               addNewArticles(json.posts);
             }else{
               $loadMoreButton.text('End of archive');
               console.log('No more posts!');
             }
           }
    });
  }

  function addNewArticles(posts){

    posts.forEach(function(post){
      let newPost = createNewArticle(post);
      $articleSection = $('#article-list article');

      $articleSection.last().after(newPost);
    });
  }

  function createNewArticle(post){
    let $article = $('<article>');
    let $i = $('<i>').addClass(post.category);
    let $h2 = $('<h2>').text('From the Archive');
    let $h1 = $('<h1>').text(post.title);
    let $h3 = $('<h3>').text(post.date);
    let $p = $('<p>').text(post.blurb);


    $article.append($i).append($h2).append($h1).append($h3).append($p);

    return $article;
  }



  registerLoadMoreButton();
})();
