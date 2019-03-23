
//prevents submitting an empty form
$(document).ready(function() {

    $("form").submit(function(e){

        e.preventDefault();

        //making sure the user doesn't enter fucked up shit. will modify later to cover more cases//
        /*if ($.trim($("#Last").val()) === "") {
            alert('(╯°□°）╯ Please enter your last name');
            return false;
        }
        if ($.trim($("#First").val()) === "") {
            alert('(╯°□°）╯ Please enter your first name');
            return false;
        }
        if ($.trim($("#ID").val()) === "") {
            alert('(╯°□°）╯ Please enter your student ID');
            return false;
        }
        if ($.trim($("#Phone").val()) === "") {
            alert('(╯°□°）╯ Please enter your phone number');
            return false;
        }
        if ($.trim($("#Email").val()) === "") {
            alert('(╯°□°）╯ Please enter your email');
            return false;
        }
        if ($.trim($("#Hardware").val()) === "" ||
            $.trim($("#Serial").val()) === "" ||
            $.trim($("#Host").val()) === "") {
            alert('(╯°□°）╯ Please enter the item information');
            return false;
        }
        if ($.trim($("#Yin").val()) === "" ||
            $.trim($("#Yout").val()) === "" ||
            $.trim($("#Din").val()) === "" ||
            $.trim($("#Dout").val()) === "" ||
            $.trim($("#Min").val()) === "" ||
            $.trim($("#Mout").val()) === "") {
            alert('(╯°□°）╯ Please fill out the dates');
            return false;
        }
        //*/


        var urlBoi = $(this).attr('action');
        console.log( $(this).serializeArray());

        $.ajax({
            type: "POST",
            url: urlBoi,
            data: $(this).serializeArray(), // serializes the form's elements in json format
            success: function(data)
            {
                console.log(data); // show response from the data to make sure its not garbage
            }
        });
        alert('thank you <3');
    });

    var urlBoi = $(this).attr('action');
    var data;

    $.ajax({
        url: urlBoi,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            console.log(res); //leave for now to see if actually works
            data=res;
        }
    });

    function append_json(data){
        var table = document.getElementById('gable');
        data.forEach(function(object) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + object.COUNTRY + '</td>' +
                '<td>' + object.LoC + '</td>' +
                '<td>' + object.BALANCE + '</td>' +
                '<td>' + object.DATE + '</td>';
            table.appendChild(tr);
        });
    }
});


