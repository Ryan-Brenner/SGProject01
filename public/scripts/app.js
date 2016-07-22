console.log("Sanity Check: JS is working!");
$(document).ready(function() {

var apod_endpoint = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";




$.get(apod_endpoint).success(function handleApodSuccess(apod){

  if("copyright" in apod) {
    $("#copyright").text("Image Credits: " + apod.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(apod.media_type == "video") {
    $("#apod_img").css("display", "none"); 
    $("#apod_vid").attr("src", apod.url);
  }
  else {
    $("#apod_vid").css("display", "none"); 
    $("#apod_img").attr("src", apod.url);
  }
  $("#reqObject").text(apod_endpoint);
  $("#returnObject").text(JSON.stringify(apod, null, 4));  
  $("#apod_explaination").text(apod.explanation);
  $("#apod_title").text(apod.title);


});
});