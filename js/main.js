//live search

$(document).ready(function(){
    $("#searchBar").keyup(function(){
 
        // Retrieve the input field text
        var filter = $(this).val();
        var regex = new RegExp(filter, "i");
     
        // Loop through the captions
         $("#lightGallery img").each(function(){
            var alt = $(this).attr("alt");
 
            // If the caption does not contain the text phrase fade it out
            if (alt.search(regex) < 0) {
                $(this).fadeOut();
 
            // Show the image if the phrase matches
            } else {
                $(this).show();
            }
        });
 
    });
});