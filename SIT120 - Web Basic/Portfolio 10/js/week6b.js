window.onload = function loadApp(){
  // var imageElement = document.querySelector('img');
  // imageElement.onclick = function() {
  //  console.log("The user just clicked on the image.");
  //  imageElement.style.opacity = 0.5;
  // }
  var img = createImage('images/pear.png');
  img.onclick = function(){
    img.style.opacity = 0.5;
  }

}
function createImage(x){
  var img = document.createElement("img");
  img.src = x;
  document.body.appendChild(img);
  return img;
  // document.querySelector('body').innerHTML = '<img src= "' + x + '">';
}
