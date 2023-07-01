

function changeTitle(title){
    document.getElementById("title").innerHTML=title
}

function currentDate(){
    document.getElementById("date").value= Date()
}

function changeName(){
    changeTitle("Muhammad Mudassir")
}

function onMouseOut(){
    changeTitle("Muhammad Yasir")
}

function a(){
    changeTitle("Muhammad Yasir")
    document.getElementById("change").addEventListener("mouseover",changeName)
    document.getElementById("change").addEventListener("mouseout",onMouseOut)
    document.getElementById("date").addEventListener("click",currentDate)

}

document.addEventListener("DOMContentLoaded", a)