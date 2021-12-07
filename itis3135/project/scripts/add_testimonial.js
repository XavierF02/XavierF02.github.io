$(document).ready(function() {
    $("#testimonial").on("submit", function () {
        var name = $("#name").val();
        var text = $("#review_text").val();
        var rating = $(".my-rating").starRating("getRating");

        if(name == "") {
            name = "Anonymous";
        }

        $("#reviews").prepend(
            "<div id=review>" +
            "<p>" + text + "<br>" + " -" + name + "</p>" +
            "<div id=stars><div class=review-rating id=" + rating + "></div></div>" +
            "</div>"
        );

        $(".review-rating").starRating({
            initialRating: 0,
            strokeColor: '#894A00',
            strokeWidth: 10,
            starSize: 25,
            readOnly: true
        });
    
        $(".review-rating").each(function() {
            var rating = $(this).attr("id");
            $(this).starRating("setRating", rating);
        });

        $(this).empty();
        $(this).append(
            "<h1 id=thank_you_message>Thanks for your response!</h1>"
        );
    });
});