var random_1=Math.floor(6*Math.random())+1;
var random_image_src="images/"+"dice"+random_1+".png";
document.querySelector(".img1").setAttribute("src",random_image_src);
var random_2=Math.floor(6*Math.random())+1;
var random_image_src2="images/"+"dice"+random_2+".png";
document.querySelector(".img2").setAttribute("src",random_image_src2);
if(random_1>random_2)
{
    document.querySelector("h1").innerHTML="Player 1 is winner";
}
else if(random_1==random_2) {
    document.querySelector("h1").innerHTML="Draw !";
}
else{
    document.querySelector("h1").innerHTML="Player 2 is winner";
}