$(document).ready(function() {
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, stato) {
        var response = data.response;
        
        render(response);
      },
      "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errori);
      }
    }
  );
});

function render(info) {
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < info.length; i++) {
    var disk = info[i];
    var html = template(disk);
    $(".cds-container").append(html);
  }
};
// {
//   "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//   "title": "New Jersey",
//   "author": "Bon Jovi",
//   "genre": "Rock",
//   "year": "1988"
// },
