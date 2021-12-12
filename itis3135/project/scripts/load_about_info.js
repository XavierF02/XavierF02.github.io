$(document).ready(function(){
    $.getJSON("./json_files/about_info.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#about").append(
                    "<h3>" + value.question + "</h3>" +
                    "<div>"+
                        "<p>" + value.answer + "</p>" +
                    "</div>"
                );
                $("#about").accordion("refresh");
            });
        });
    });

});
