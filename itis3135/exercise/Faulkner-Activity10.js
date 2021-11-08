$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function() { 
                var swappedImage = new Image(); 
                swappedImage.src = $(this).attr("href"); 
        }); 

        // set up the event handlers for each link
        $("#image_list a").click(function(evt) { 
                // get the image URL and caption for each image and animate the caption
                var imageURL = $(this).attr("href");
                var caption = $(this).attr("title");
                $("#image").fadeOut(3000, 
                        function() {
                                $(this).attr("src", imageURL);
                                $(this).fadeIn(3000);
                        }
                );
                $("#caption").fadeOut(3000, 
                        function() {
                                $(this).text(caption);
                                $(this).fadeIn(3000,
                                        function() {
                                                $(this).delay(3000).animate(
                                                        {fontSize: "2em"}
                                                );
                                        }
                                );
                        }
                );

                // cancel the default action of each link 
                evt.preventDefault();
        });

    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready