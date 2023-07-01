console.log("HEllo WORLD")

function changeTitle(title){
    document.getElementById("title").innerHTML=title
}

function changeName(){
    changeTitle("Muhammad Mudassir")
}

function a(){
    changeTitle("Muhammad Yasir")
    document.getElementById("change").addEventListener("click",changeName)
}

document.addEventListener("DOMContentLoaded", a)