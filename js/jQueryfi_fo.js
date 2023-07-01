

$(()=>{
    $('#change').keydown(onKeyDown);
    $('#error').hide();
    var arr = [];

    function onKeyDown(e){
        if (e.code == 'Enter') {
            if ($(this).val() != '') {
                $('#error').fadeOut(1,function(){
                    $('#success').fadeIn(1)
                });
                arr.push('<li>' + $(this).val() + '</li>');
                arr.sort();
                $(this).val('');
                displaySortedOutput(arr);

            } else {
                $('#success').fadeOut(1,function(){
                    $('#error').fadeIn(1)
                });
            }
        }
    }  

    function displaySortedOutput(arr) {

        var sortedOutput = $('#sortedOutput');

        sortedOutput.html(arr.join(""));
    }
});


