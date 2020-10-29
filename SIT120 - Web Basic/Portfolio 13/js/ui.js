function cearteP(x) {
  var c = document.createElement('p');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteH1(x) {
  var c = document.createElement('h1');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteH2(x) {
  var c = document.createElement('h2');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteH3(x) {
  var c = document.createElement('h3');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteDiv(x) {
  var c = document.createElement('div');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteSpan(x) {
  var c =  document.createElement('span');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteButton(x) {
  var c = document.createElement('button');
  if(x != null){
    c.appendChild(document.createTextNode(x));
  }
  return c;
}
function cearteInput(x) {
  var c = document.createElement('input');
  if(x != null){
    c.type = 'text';
    c.value = x;
  }
  return c;
}
function cearteImg(x,y) {
  var c = document.createElement('img');
  if(x != null){
    c.alt = x;
  }
  if(y != null){
    c.src = './img/' +y+'.png';
  }
  return c;
}

function labelledTextField() {
  // var search = new Array();
  // search[0] = document.createElement('lable');
  // search[1] = document.createElement('input');
  // search[2] = document.createElement('button');
  // return search;
  return search = {
    lable : document.createElement('lable'),
    input : document.createElement('input'),
    button : document.createElement('button'),
  }
}
