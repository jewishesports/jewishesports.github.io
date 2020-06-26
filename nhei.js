{
  function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onload = function(e) { 
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
               //do stuff with fileReader.result
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
  }




  function addPrList(){
    var file = JSON.parse(readJSON("power_rankings.json"));
    for(int i = 0; i < 20; i++) {
      var list = document.createElement("li");
      var text = document.createTextNode(power_rankings["Melee PR"][i]["Smashtag"]);
      list.appendCHild(text);
      var elem = document.getElementByClass("pr");
      element.appendChild(list);
    }
  }

  window.addEventListener("load", addPrList);
}