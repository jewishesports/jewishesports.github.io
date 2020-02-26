function switchTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
window.addEventListener('change', switchTheme, false)''