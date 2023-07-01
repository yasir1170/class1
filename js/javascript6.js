
function onClick(){
    var ps= document.getElementById("title").style.cssText
    document.getElementById("title").style= ps + "width:100px;"
    
}

function onMouseOut(){
    document.getElementById("title").className= "newClass"
}

function a(){
    var bodyHtml= document.getElementsByTagName("body")[0].innerHTML
    document.getElementsByTagName("body")[0].innerHTML= bodyHtml+ "<h1 id='title'>Hello!</h1>"
    document.getElementById("change").addEventListener("click", onClick)
    document.getElementById("change").addEventListener("mouseout", onMouseOut)
    
}

document.addEventListener("DOMContentLoaded", a)