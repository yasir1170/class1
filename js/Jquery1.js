
// $(document).ready(function () {
//     document.getElementById("change").addEventListener("keydown", onKeyDown);
// or above line can be written as given below. these type of functions are called anonymous functions because 
// there is no function definition means no name is defined for a function.
$(()=>{
    $('#change').keydown(onKeyDown);
    var arr = [];

    function onKeyDown(e){
        if (e.code == 'Enter') {
            if (e.currentTarget.value != '') {
                $('#error').addClass("hidden");
                arr.push('<li>' + e.currentTarget.value + '</li>');
                arr.sort();
                e.currentTarget.value = '';
                displaySortedOutput(arr);

            } else {
                $('#error').removeClass("hidden");
            }
        }
    }  

    function displaySortedOutput(arr) {

        var sortedOutput = $('#sortedOutput');

        sortedOutput.html(arr.join(""));
    }
});


