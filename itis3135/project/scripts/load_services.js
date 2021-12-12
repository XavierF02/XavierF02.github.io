$(document).ready(function(){
    $.getJSON("./json_files/services_list.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("main").append(
                    "<div id=service>"+
                        "<h2>" + value.name + "</h2>" +
                        "<div>" +
                            "<p>" + value.details + "</p>" +
                            "<input type=button value='Get a Quote'" +
                        "</div>" +
                    "</div>"
                );
            });
        });
    });
});
