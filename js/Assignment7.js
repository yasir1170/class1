
function onKeyDown(e) {
    if (e.code == 'Enter') {
        if (e.currentTarget.value != '') {
            document.getElementById("error").className = "hidden";
            arr.push('<li>'+ e.currentTarget.value+'</li>');
            arr.sort();  
            e.currentTarget.value = '';
            displaySortedOutput(arr);

        } else {
            document.getElementById("error").className = "";
        }
    }
}

function displaySortedOutput(arr){
    
    var sortedOutput = document.getElementById("sortedOutput");
    
    sortedOutput.innerHTML = arr.join("");
}

function a() {
    document.getElementById("change").addEventListener("keydown", onKeyDown);
}

document.addEventListener("DOMContentLoaded", a);
var arr = [];


