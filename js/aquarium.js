function speed(fishid){
var time;
var fishtype=$('#'+fishid).attr("class");
if(fishtype=="yellow_fish"){
time=10000;
}
else if(fishtype=="fish_nemo"){
time=12000;
}
else if(fishtype=="red_fish"){
time=13000;
}
else if(fishtype=="Wanda_fish"){
time=15000;
}
return time;
}
function swim(fishid,time) {
var top = Math.random() * (($("#aquarium").height() - 50));
var left = Math.random() * (($("#aquarium").width() - 50));
var timeToMove =  Math.random() * time;
rotate(fishid, left, top, timeToMove);
}
function rotate(fishid, left, top, timeToMove,)
{
$("#" + fishid).css({
"transform": "rotateY(180deg)"
});
var newTop = top-50 + "px";
var newLeft = left-50 + "px";
if (parseInt($("#" + fishid).css("left")) > left)
{
$("#" + fishid).css({
"transform": "rotateY(0deg)"
});
}
$("#" + fishid).animate({
"left": newLeft,
"top": newTop
}, timeToMove, function() {
swim(fishid,speed(fishid));
jellyfishMove();
crabMove();
});
}
function jellyfishMove() {
var top = Math.random() * (($("#aquarium").height()));
var left = Math.random() * (($("#aquarium").width()));
$("#jellyfish").animate({"left":left,"top":top},30000)

}
function crabMove(){
var left = Math.random() * (($("#aquarium").width()-50));
$("#crab").animate({"left":left},20000)
}
$(document).ready(function() {
jellyfishMove();
crabMove();
var count=0;
$(".count").click(function() {
count++;
var i=Math.random();
$(".count").click(function(){
})
if(i<0.2)
{
$("ul").append("<li class='yellow_fish' id='fish" + count + "'><img src='img/yellow_fish.png' alt='yellow fish'></li");
}
else if(i<0.4)
{
$("ul").append("<li class='fish_nemo' id='fish" + count + "'><img src='img/fish_nemo.png' alt='fish nemo'></li");
}
else if(i<0.45)
{
$("ul").append("<li class='red_fish' id='fish" + count + "'><img src='img/red_fish.png' alt='red fish'></li");
}
else
{
$("ul").append("<li class='Wanda_fish' id='fish" + count + "'><img src='img/Wanda_fish.png' alt='Wanda fish'></li");
}
$(".removeAll").click(function(){
var list = document.getElementsByTagName("li").length;
if(list!=0){
var arr = document.getElementsByTagName("li");
document.getElementsByTagName("li")[0].remove();
//count=0;
}
});
$("ul li").on('click', function() {
$(this).remove();
});
swim("fish" + count,speed("fish" + count));
});
$("#aquarium").click(function(clickEvent) {
$("li").each(function() {
$(this).stop();

var y=clickEvent.pageY-(($("#nav").height()));
rotate($(this).attr("id"), clickEvent.pageX, y, 2000);
});
});
});