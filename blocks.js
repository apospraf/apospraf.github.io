var container = document.getElementById("container");
var opa= 1;
var r= 1;
var g= 0;
var b=0;


function createBlocks(){
	var div= container.appendChild(document.createElement("div"));
}

function styleBlocks(i){
	var div = document.getElementsByTagName("div")[i];
	div.className = "blocks";
	div.style.transformstlye = "preserve-3d";
	div.style.transition = "transform 1s";
	div.onmouseover = function() {
		newColor = 'rgba(' + (r ? RandomColor() : 0) + ',' + (g ? RandomColor() : 0) + ',' + (b ? RandomColor() : 0) + ',' + (opa ? RandomOpacity(): 1) +')';
		div.style.backgroundColor= newColor;
		div.className = "blocks flipped";
	}
	/*div.onmouseout = function() {
		newColor = 'rgba(' + (r ? RandomColor() : 0) + ',' + (g ? RandomColor() : 0) + ',' + (b ? RandomColor() : 0) + ',' + (opa ? RandomOpacity(): 1) +')';
		div.style.backgroundColor= newColor;
		div.className = "blocks unflipped";
	}*/
	
}

function RandomColor(){
	var x= Math.round(Math.random()*256);
	return x;
}

function RandomOpacity(){
	var x= Math.random().toFixed(1);
	return x;
}

for (i = 1; i<1300; i++){
	createBlocks();
	styleBlocks(i);
}

/*for ( i=20; i>10; i--){
	wid= (window.innerWidth % i ==0) ? i : 0 ;
	hei= (window.innerHeight % (i -10)) ? i-10:0;
}*/

