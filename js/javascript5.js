
function onClick(){
    var ps= document.getElementById("title").style.cssText
    document.getElementById("title").style= ps + "width:100px;"
    
}
/* maine title naam ki id k elements to get kia. Usmain style.cssText ki property save karadi. Us k baad in next line previous style 
main width ki property add kardi*/ 

function onMouseOut(){
    document.getElementById("title").className= "newClass"
}
/*iska result islea apply nhe horaha qk html page par background set hua ua hai. 
Uske hoto hue new class ka background apply nhe hoga qk wo next page par hai. Inline nhe hai*/
function a(){
    document.getElementById("change").addEventListener("click", onClick)
    document.getElementById("change").addEventListener("mouseout", onMouseOut)
    
}

document.addEventListener("DOMContentLoaded", a)