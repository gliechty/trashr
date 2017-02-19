// sets conditions for timer
// sets time for round (2 min)
var time = 60;
document.getElementById("time").value=time.toString()+" sec";
function countdown(){
    if (time>=0){
        time -=1;
        document.getElementById("time").value=time.toString()+" sec";
    }
}
setInterval(function(){countdown();}, 1000);

// creates trash @random position in container
function mkTrash(){
	var trash = document.createElement("div");

	trash.setAttribute('class', 'trash');
	trash.className += ' animated';
	trash.style.marginLeft=(Math.random() * 90)+"%"; 
    // change above line back to 90 and %
	var screen = document.getElementById("screen");
	screen.appendChild(trash);
}
mkTrash();

// creates trash at regular interval
window.setInterval(function(){
  mkTrash();
}, 5000);


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

// removes first message if there are multiple
function rmMessage(){
    var messages=document.getElementsByClassName('message');
    var firstMessage=messages[0];
    var screen=document.getElementById("screen");
    screen.removeChild(firstMessage);
}
setInterval(function(){rmMessage();}, 4999);


// manipulate animations with event listener
document.addEventListener('keydown', function(event) {
    //left
    var trashArray = document.getElementsByClassName('trash');
    // console.log(trashArray);
        if (event.keyCode === 37) {
            // shows left margin for debugging initial drop
            console.log(trashArray[0].style.marginLeft);
            trashArray[0].style.marginLeft = (parseInt(trashArray[0].style.marginLeft)-2)+"%";
        } else if (event.keyCode === 39) {
            // shows left margin for debugging intitial drop
            console.log(trashArray[0].style.marginLeft);
            trashArray[0].style.marginLeft = (parseInt(trashArray[0].style.marginLeft)+2)+"%";
    }
});

var win1=document.getElementById("win1");
function playWin1(){
    win1.play();
}

// sets points and messages
var points = 0;
function chkPoints(){

    var trashArray = document.getElementsByClassName('trash');
    // next line determines width of win state
    console.log(parseFloat(trashArray[0].style.marginLeft));
    if ((parseFloat(trashArray[0].style.marginLeft)>36) && (parseFloat(trashArray[0].style.marginLeft)<44)){
        points+=1;
        console.log(trashArray[0].style.marginLeft);
        document.getElementById("qty").value=points.toString();
        if (points%2===0){
            console.log("Noice!");
            var message=document.createElement("div");
            message.innerHTML="Noice!";
            message.setAttribute('class', 'message');
            message.className += ' fade';
            var screen=document.getElementById("screen");
            screen.appendChild(message);
        } else if (points%5===0 && points>=5){
            console.log("Baller!!");
            var message=document.createElement("div");
            message.innerHTML="Baller!";
            message.setAttribute('class', 'message');
            message.className += ' fade';
            var screen=document.getElementById("screen");
            screen.appendChild(message);
            // var win1=document.getElementById("win1");
            // win1.play();
        }
    } else {
        points-=1;
        document.getElementById("qty").value=points.toString();
        if (points%2===0){

            var message=document.createElement("div");
            message.innerHTML=("What's wrong with you?");
            message.setAttribute('class', 'message');
            message.className += ' fade';
            var screen=document.getElementById("screen");
            screen.appendChild(message);
        } else if (points%3===0){

            var message=document.createElement("div");
            message.innerHTML=("Are You High?");
            message.setAttribute('class', 'message');
            message.className += ' fade';
            var screen=document.getElementById("screen");
            screen.appendChild(message);
        }
    }
}
setInterval(function(){chkPoints();}, 4999);

// launches a win or lose modal
function isWin(){
    if (points>=10){
        var winModal = document.getElementById("winModal");
        winModal.style.display = "block";
        document.getElementById("win").play();
    } else {
        var loseModal = document.getElementById("loseModal");
        loseModal.style.display = "block";
    }

}

// // sets length of game
setInterval(function(){isWin();}, 60000);

