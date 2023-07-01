

$(()=>{
    $('#change').keydown(onKeyDown);
    $('#error').hide();//page jb reload ho to error msg hide ho. islea yahan par ye line likhi
    var arr = [];

    function onKeyDown(e){
        if (e.code == 'Enter') {
            if ($(this).val() != '') {
                $('#error').hide()
                arr.push('<li>' + $(this).val() + '</li>');
                arr.sort();
                $(this).val('');
                displaySortedOutput(arr);

            } else {
                $('#error').show();
            }
        }
    }  

    function displaySortedOutput(arr) {

        var sortedOutput = $('#sortedOutput');

        sortedOutput.html(arr.join(""));
    }
});


