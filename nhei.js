{
  function addPrList(){
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