$(document).ready(function(){
    $.getJSON("./json_files/services_list.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("main").append(
                    "<div id=service>"+
                        "<h2>" + value.name + "</h2>" +
                        "<div>" +
                            "<p>" + value.details + "</p>" +
                            "<a href='pricing.html'><input id='get_quote_button' type=button value='Get a Quote'></a>" +
                        "</div>" +
                    "</div>"
                );
            });
        });
    });
});
