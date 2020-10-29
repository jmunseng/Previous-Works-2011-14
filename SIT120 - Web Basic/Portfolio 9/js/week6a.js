window.onload = function startup(){
  console.log("startup code running");
  createHeading1('titleText');
  createHeading2('Head2');
  createHeading3('Head3');
  createP('paragrapg');
}
function createHeading1(x){
  document.querySelector("body").innerHTML = "<h1>" + x + "</h1>";
}
function createHeading2(x){
  document.querySelector("body").innerText = "<h2>" + x + "</h2>";
}
function createHeading3(x){
  document.querySelector("body").innerHTML = "<h3>" + x + "</h3>";
}
function createP(x){
  document.querySelector("body").innerHTML = "<p>" + x + "</p>";
}
