function get_information(link, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", link, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
get_information("/hall_of_fame.html", function() {
    var div = document.getElementById("hof");
    div.innerHTML = text;
    // Do something with the div here, like inserting it into the page
});


function modifyContext(context) {
  const div = document.getElementById("hof");
  div.innerHTML = "Congradulations "
  context.movieName = movieName;
  var ratingName = "rotten";
	if(context.rating >= 60){
    ratingName = "fresh";
	}
	context.ratingName = ratingName;
  return context;
}
window.addEventListener("load", renderTemplate);