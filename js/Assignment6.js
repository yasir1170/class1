function addToElement(e,html){
    var bodyHTML=e.innerHTML
    e.innerHTML= bodyHTML+ html
}



function onKeyDown(e){
    if (e.code=='Enter'){
        if(e.currentTarget.value!=''){
            document.getElementById("error").className="hidden"
            addToElement(document.getElementById("firstUL"),'<li>'+ e.currentTarget.value+'</li>')
            e.currentTarget.value=''
        }
        else {
            document.getElementById("error").className=""
        }
    
    }

   
}
function a(){
    document.getElementById("change").addEventListener("keydown", onKeyDown)
}

document.addEventListener("DOMContentLoaded", a)
