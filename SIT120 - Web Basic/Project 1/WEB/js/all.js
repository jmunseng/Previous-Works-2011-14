window.onload = function(){
    var back = document.getElementById("back");
    console.log(back);
    back.setAttribute('onclick', 'javascript:window.history.back();');
    
    // setAttribute("onclick",
}
function move() {
    var elem = document.getElementById("myBar"); 
    var width = 10;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 79) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }
}

function passWord(){
    var a = prompt("Enter Password");
    if(a!= null){
        var b = prompt("Confirm Password")
        if(a == b){
            alert("Successed");
        }else{
            alert("Fail, try again");
            passWord();
        }
    }
   
}