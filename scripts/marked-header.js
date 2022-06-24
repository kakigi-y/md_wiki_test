var renderer = new marked.Renderer();
$(document).ready(function(){
  $.get( "navigation.md", function( data ) {
    $('#header').html(marked(data, { renderer: renderer }));
  });
});