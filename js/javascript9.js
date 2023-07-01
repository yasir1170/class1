
function addToElement(a,b){
    var bodyHtml= a.innerHTML
    a.innerHTML= bodyHtml+b
    
}


function onKeyDown(e){
    if (e.code=='Enter'){
        if (e.currentTarget.value!=''){
            addToElement(document.getElementById("firstUl"), '<li>'+e.currentTarget.value+'</li>')
            e.currentTarget.value=''
        }
        else{
            alert("please Enter some text")
        }
    }
}

function a(){

    document.getElementById("change").addEventListener("keydown", onKeyDown)
    // document.getElementById("change").addEventListener("mouseout", onMouseOut)
    
}

document.addEventListener("DOMContentLoaded", a)


