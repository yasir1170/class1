$(() => {
    $('#change').keydown(onKeyDown);
    $('#error').animate({opacity:0});
    $('#success').animate({opacity:1});
    $('#but').click(()=>{
        $('#success').stop()
    })

    var arr = [];

    function onKeyDown(e) {
        if (e.code == 'Enter') {
            if ($(this).val() != '') {
                $('#error').animate({opacity: 0}, 3000, function(){               
                         
                    $('#success').animate({opacity: 1}, 3000);
                
                               
              });

                arr.push('<li>' + $(this).val() + '</li>');
                arr.sort();
                $(this).val('');
                displaySortedOutput(arr);

            } else {
                $('#error').animate({ opacity: 1}, 3000, function(){
                                      
                    $('#success').animate({ opacity: 0}, 3000);
                   
                                 
                });
            }
        }
        
    }

    function displaySortedOutput(arr) {
        var sortedOutput = $('#sortedOutput');
        sortedOutput.html(arr.join(""));
    }

    function displaySortedOutput(arr) {
        var sortedOutput = $('#sortedOutput');
        sortedOutput.html(arr.join(""));
    }
});
