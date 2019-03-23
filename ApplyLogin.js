//prevents submitting an empty form
$(document).ready(function() {

    $("form").submit(function(e) {

        e.preventDefault();

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
});
