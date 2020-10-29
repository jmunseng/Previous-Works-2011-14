var buttonExist = true;
window.onload = function() {
    var button = document.createElement('button');
    button.appendChild(document.createTextNode('Randomise Colour'));
    document.body.appendChild(button);
    // button.onclick = randomiseBackgroundColour();
   
    button.setAttribute("onclick", "randomiseBackgroundColour()");
    
}
function randomiseBackgroundColour(){
    var colourList = window.colourList;
    var numLang = colourList.length;
    var num = Math.floor(Math.random() * numLang);
    document.body.style.backgroundColor = colourList[num];
    //var buttonExist = window.buttonExist;
// button List
console.log(colourList);
console.log(numLang);
console.log(num);

    if(buttonExist){
        for (let i = 0; i < numLang; i++) {
            var inputButton = document.createElement('input');
            var br = document.createElement('br');
            inputButton.type = "button";
            inputButton.value = colourList[i];
            inputButton.setAttribute("onclick", "document.body.style.backgroundColor = \'" + inputButton.value + "\'")
            document.body.appendChild(br);
            document.body.appendChild(inputButton);
            // console.log("inputButton");
            
        }
        buttonExist= false;
    }    
    
}
