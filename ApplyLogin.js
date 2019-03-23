//prevents submitting an empty form
$(document).ready(function() {

    $("form").submit(function(e) {

        e.preventDefault();

        var data1 = $(this).serializeArray();
        var response = ({"username": data1[0].value,
            "password": data1[1].value});
        console.log(response);

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/login",
            data: response,
            //contentType: "application/json",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            success: function()
            {
                alert('thank you <3');
            },
            error: function()
            {
                console.log("error");
            }
        });
    });
});
