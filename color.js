var color=["rgb(255, 0, 0)",
		   "rgb(255, 255, 0)",
		   "rgb(255, 0, 255)",
		   "rgb(255, 46, 0)",
		   "rgb(255, 0, 147)",
		   "rgb(255, 244, 186)"];
var pickedcolor=pickcolor();
var rgbdisplay=document.getElementById("colordisplay");
rgbdisplay.textContent=pickedcolor;
var square =document.querySelectorAll(".square");
var messagedisplay=document.getElementById("message");

for (var i=0;i<square.length;i++)
{
	square[i].style.background=color[i];
	 square[i].addEventListener("click",function(){
		  var clickedcolor=this.style.background;
		  if(clickedcolor===pickedcolor)
		  {
			 messagedisplay.textContent="correct";
			 changecolor(clickedcolor);

		  }
		  else{
			  this.style.background="#232323";
			  messagedisplay.textContent="try again";
	 }});
}

function changecolor(color){
	for(var i=0;i<square.lenght;i++)
	{
		square[i].style.background=color;
	}
}
function pickcolor(){
	var random =Math.floor(Math.random()*color.length);
	return color[random];
}