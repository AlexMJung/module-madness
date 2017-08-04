$(document).ready(function(){

   getMoney();



});//end of doc ready

    function getMoney() {

        $.ajax({
            method: 'GET',
            url: '/modulMadness',
            success: function (response) {
                console.log(response.things);
                 $('h1').text(response.things + response.amount);
                
            }
        });//end if ajax
    }//enbd of function
