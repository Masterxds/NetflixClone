$(".available-content").hide();
$(".fundos").hide();
$("#post-1").show();

 $(".item").click(function(e) {
    $(".available-content").hide();
    var target = $(e.currentTarget).attr("target-id");
    $(target).show();
 });

function ChangeImage(element){
   var image = element;
   var src = image.firstElementChild.src;
   var ele = document.getElementsByClassName("filme-principal")[0];
   ele.style.background = 'linear-gradient(rgba(0, 0, 0, .50), rgba(0, 0, 0, .50)100%), url(' + src + ')';
}