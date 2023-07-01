
function addToElement(a,b){
    var bodyHtml= a.innerHTML
    a.innerHTML= bodyHtml+b
    
}



function a(){
    var arr= ["Yasir","Mudassir", "Owais"]
    for(i=0; i<arr.length; i++){
        addToElement(document.getElementsByTagName("ul")[0],'<li>'+arr[i]+'</li>') 
    }

    
}

document.addEventListener("DOMContentLoaded", a)