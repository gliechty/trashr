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
	trash.innerHTML=("trash");
	trash.setAttribute('class', 'trash');
	trash.className += ' animated';
	trash.style.marginLeft=(Math.random() * 90)+"%";
	var screen = document.getElementById("screen");
	screen.appendChild(trash);
}

// creates trash at regular interval
window.setInterval(function(){
  mkTrash();
  rmTrash();
}, 5000);

// remove trash from DOM
// checks margin
function rmTrash() {
	var trash = document.getElementsByTagName("div");
	console.log("another one");
	for (i=0; i<trash.length; i++){
		console.log(trash[i].style.top);
		// if (trash[i].style.top=="100%"){
		// 	console.log(trash[i]);
			// var parent=trash[i].parentNode;
			// parent.removeChild(trash[i]);
		}
	// }
}
// function rmTrash(){
// 	trashItems=document.getElementsByClassName('animated');
// 	console.log(trashItems);
// 	for (i=0;i<trashItems.length;i++){
// 		if (trashItems[i].style.marginTop>=100%){
// 			trashItems[i].style.display="none";
// 		}
// 	}
// }

// manipulate animations with event listener
// document.addEventListener('keydown', function(event) {
//     //left
//     if (event.keyCode === 37) {
//         console.log('left');
//         var trash = document.getElementsByTagName('div');
//         console.log(trash);
//         for (i=0; i<trash.length; i++){
//         	trash[i].style.marginLeft -= "10px";
//         }
//     } else if (event.keyCode === 39) {
//     	console.log('right');
//     	var trash = document.getElementsByTagName('div');
//     	console.log(trash);
//     	for (i=0; i<trash.length; i++){
//         	trash[i].style.marginLeft += "10px";
//     	}
// 	}
// });

// create win/pass condition

// function isWin(){

// }

// keep score

// function addScore(){

// }

// create timer (link w/ start button)

// create win/pass condition