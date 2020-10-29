window.onload = function() {
//search bar
  var search = labelledTextField();
  var lable = search.lable;
  lable.appendChild(document.createTextNode("Search:"));
  var input = search.input;
  input.type = 'text';
  lable.appendChild(input);
  var button = search.button;
  button.appendChild(document.createTextNode('GO'));
  lable.appendChild(button);
  document.body.appendChild(lable);
//search bar  end

document.body.appendChild(cearteP("I'm P"));
document.body.appendChild(cearteH1("I'm H1"));
document.body.appendChild(cearteH2("I'm H2"));
document.body.appendChild(cearteH3("I'm H3"));
document.body.appendChild(cearteDiv("I'm DIV"));
document.body.appendChild(cearteSpan("I'm SPAN"));
document.body.appendChild(cearteButton("I'm button"));
document.body.appendChild(cearteInput("I'm text INPUT"));
document.body.appendChild(cearteImg("I'm IMAGE", "google"));

}
