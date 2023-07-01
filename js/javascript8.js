
function addToElement(a,b){
    var bodyHtml= a.innerHTML
    a.innerHTML= bodyHtml+b
    
}


function onKeyDown(){
    
    addToElement(document.getElementsByTagName('ul')[0], '<li>'+"hello"+'</li>')
}

function a(){

    document.getElementById("change").addEventListener("keydown", onKeyDown)
    // document.getElementById("change").addEventListener("mouseout", onMouseOut)
    
}

document.addEventListener("DOMContentLoaded", a)


/*click hokar hi q horaha hai browser par??? */