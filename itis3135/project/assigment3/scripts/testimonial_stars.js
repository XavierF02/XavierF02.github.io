$(document).ready(function() {
    $(".my-rating").starRating({
        initialRating: 0,
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 25
      });
    
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
});