window.onload = function loadApplication() {
  configureGameUI();
  displayPlayerName();
  displayCurrentLocation();
    console.log("xxxxxxxxxxxx");
}
function configureGameUI() {
  window.playerNameElement = document.createElement('p');
  window.playerLocationElement = document.createElement('p');
}
function displayPlayerName() {
  var na = document.createTextNode(playerSettings.name);
  playerNameElement.appendChild(na);
  document.body.appendChild(playerNameElement);
}
function displayCurrentLocation() {
  var loc = document.createTextNode(playerSettings.location);
  playerLocationElement.appendChild(loc);
  playerLocationElement.appendChild(document.createElement('br'));
  document.body.appendChild(playerLocationElement);
  var x = playerSettings.location;
  var desc = document.createTextNode(gameLevels[x].description);
  playerLocationElement.appendChild(desc);
  document.body.appendChild(playerLocationElement);

}
