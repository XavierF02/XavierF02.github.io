$(document).ready(function() {
    $.getJSON("team.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#team").append(
                    "<h3>" + value.name + "</h3>" +
                    value.title + "<br>" +
                    value.bio + "<br><br>"
                );
            });
        });
    });
});