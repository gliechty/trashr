// provide instructions to play (onload alert or other)

// window.onload = function(){
// 	setTimeout(function(){
// 		alert("Welcome to Trashr\n\nUse your arrow keys to direct the trash to the bin.\n\nRecycle or be Sorry...");
// 	}, 600);
// };

// button to start game


// creates trash @random position in container

function mkTrash(){
	var trash = document.createElement("div");
	// trash.innerHTML=("trash");
	trash.setAttribute('class', 'trash');
	trash.className += ' animated';
	trash.style.marginLeft=(Math.random() * 100)+"%"; 
    // change above line back to 90 and %
	var screen = document.getElementById("screen");
	screen.appendChild(trash);
}
mkTrash();

// creates trash at regular interval

window.setInterval(function(){
  mkTrash();
}, 5000);


// Checks if trashItems ![] 
// removes first child if there are multiple

function rmTrash(){
    var trashItems=document.getElementsByClassName('trash');
    var firstChild=trashItems[0];
    var screen=document.getElementById("screen");
    if (trashItems.length>1){
        screen.removeChild(firstChild);
    }
}
setInterval(function(){rmTrash();}, 50);


// manipulate animations with event listener

document.addEventListener('keydown', function(event) {
    //left
    var trashArray = document.getElementsByClassName('trash');
    console.log(trashArray);
    for (i=0; i<trashArray.length; i++){
        if (event.keyCode === 37) {
            console.log('left');
            // console.log(trash.style.marginLeft);
            trashArray[i].style.marginLeft = (parseInt(trashArray[i].style.marginLeft)-2)+"%";
            // console.log(trash.style.left);
        } else if (event.keyCode === 39) {
        	console.log('right');
            trashArray[i].style.marginLeft = (parseInt(trashArray[i].style.marginLeft)+2)+"%";
    	}
    }
});

// create win/pass condition
var points = 0;
function chkPoints(){
    var trashArray = document.getElementsByClassName('trash');
    console.log(trashArray[0]);
    if (parseInt(trashArray[0].style.marginLeft)>34 && parseInt(trashArray[0].style.marginLeft)<41){
        points+=1;
        console.log(points);
        document.getElementById("qty").value=points.toString();
    } else {
        points-=1;
        console.log(points);
        document.getElementById("qty").value=points.toString();
    }
}
setInterval(function(){chkPoints();}, 5000);

// function isWin(){

// }

// keep score

// function addScore(){

// }

// create timer (link w/ start button)

// create win/pass condition