{
  let xhr;
  function getJSONasync(url, handler, errorHandler) {
	xhr = new XMLHttpRequest();
	xhr.addEventListener("load", handler);
	xhr.addEventListener("error", errorHandler);
	if (!xhr) {
	  alert('Giving up :( Cannot create an XMLHTTP instance');
	  return false;
	}
	xhr.open('GET', url, true);
	xhr.send();
  }
  
  function showContents() {
	const context = modifyContext(JSON.parse(xhr.responseText));
	const template = document.querySelector("#pr_template").innerHTML;
	const templateScript = Handlebars.compile(template);
	const html = templateScript(context);
	document.querySelector("body").innerHTML = html; 
  }

  function loadTemplate() {
  	const hbtext = xhr.responseText;
  	document.querySelector("#pr_template").innerHTML = hbtext;
    const contextName = "power_rankings.json"; 
  	getJSONasync(contextName, showContents, warnError);
  }
    
  function warnError() {
		// needs a more appropriate warning			    
		alert('There was a problem with the request.');
  }
  
  function modifyContext(context) {
    return context;
  }
  
  function renderTemplate() {
      const templateName = "power_rankings.hb";
      getJSONasync(templateName, loadTemplate, warnError);
  }
  window.addEventListener("load", renderTemplate);

}