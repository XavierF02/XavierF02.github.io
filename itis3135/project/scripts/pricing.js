$(document).ready(function() {
    var slider = document.getElementById("miles");
    var output = document.getElementById("show_miles");
    output.innerHTML = "Miles: " + slider.value;

    slider.oninput = function() {
    output.innerHTML = "Miles: " + this.value;
    }

    $("#towing_form").on("submit", function () {
        var rate = $("#trucks").val();
        var truck = $("#trucks option:selected").text();
        var miles = $("#miles").val();
        var date = new Date($("#date").val());
        var day = date.getUTCDate();
        var month = date.getUTCMonth() + 1;
        var year = date.getUTCFullYear();
        var total;

        if(miles <= 10 ) {
            total = parseInt(rate);
        } else {
            total = parseInt(rate) + ((parseInt(miles)-10)*5);
        }

        $(".results").empty();
        $(".results").append(
            "<div id=quote>" +
                "<h3>Quote:</h3>" +
                "<h4>Truck Type: " + truck + "</h4>" +
                "<h4>Flat Rate: " + rate + "</h4>" +
                "<h4>Miles: " + miles + "</h4>" +
                "<h4>Date: " + month + "/" + day + "/" + year + "</h4>" +
                "<h4>Total: $" + total + "</h4>" +
                "<h4>Call (301) 768-5400 to schedule!</h4>" +
            "</div>"
        );
    });

});