// sets conditions for timer
// sets time for round (2 min)
var time = 60;
document.getElementById("time").value=time.toString()+" sec";
function countdown(){
    if (time>=1){
        time -=1;
        document.getElementById("time").value=time.toString()+" sec";
    }
}
setInterval(function(){countdown();}, 1000);

// creates trash @random position in container
function mkTrash(){
    // two types of waste- 1 recycle and 2 garbage
    var type = Math.ceil(Math.random()*2);
    if (type === 1){
        var trash = document.createElement("div");
        trash.setAttribute('class', 'trash');
        trash.className += ' animated';
        // gives the class name recycle
        trash.className += ' recycle';
        console.log(trash);
        trash.style.marginLeft=(Math.random() * 100)+"%"; 
        var screen = document.getElementById("screen");
        screen.appendChild(trash);
    } else if (type === 2){
        var trash = document.createElement("div");
        trash.setAttribute('class', 'trash');
        trash.className += ' animated';
        // gives the class name garbage
        trash.className += ' garbage';
        console.log(trash);
        trash.style.marginLeft=(Math.random() * 100)+"%"; 
        var screen = document.getElementById("screen");
        screen.appendChild(trash);
    }
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
setInterval(function(){rmMessage();}, 5000);


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

// sets points and messages
var points = 0;
function chkPoints(){
    var recycleArray = document.getElementsByClassName('recycle');
    var garbageArray = document.getElementsByClassName('garbage');
    console.log(recycleArray[0]);
    console.log(garbageArray[0]);
    if (recycleArray.length>0){
        console.log(recycleArray[0].style.marginLeft);
        if (parseInt(recycleArray[0].style.marginLeft)>=20 && parseInt(recycleArray[0].style.marginLeft)<=30){
            points+=1;
            document.getElementById("qty").value=points.toString();
            if (points%2===0){
                var message=document.createElement("div");
                message.innerHTML="Noice!";
                message.setAttribute('class', 'message');
                message.className += ' fade';
                var screen=document.getElementById("screen");
                screen.appendChild(message);
            } else if (points%5===0 && points>=5){
                var message=document.createElement("div");
                message.innerHTML="Baller!";
                message.setAttribute('class', 'message');
                message.className += ' fade';
                var screen=document.getElementById("screen");
                screen.appendChild(message);
            }
        }
    } else if (garbageArray.length>0){
        console.log(garbageArray[0].style.marginLeft);
        if (parseInt(garbageArray[0].style.marginLeft)>=40 && parseInt(garbageArray[0].style.marginLeft)<=50){
            points+=1;
            document.getElementById("qty").value=points.toString();
            if (points%2===0){
                var message=document.createElement("div");
                message.innerHTML="Noice!";
                message.setAttribute('class', 'message');
                message.className += ' fade';
                var screen=document.getElementById("screen");
                screen.appendChild(message);
            } else if (points%5===0 && points>=5){
                var message=document.createElement("div");
                message.innerHTML="Baller!";
                message.setAttribute('class', 'message');
                message.className += ' fade';
                var screen=document.getElementById("screen");
                screen.appendChild(message);
            }
        }
    } else {
        points= points-1;
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
setInterval(function(){chkPoints();}, 5000);

// launches a win or lose modal
function isWin(){
    if (points>=10){
        var winModal = document.getElementById("winModal");
        winModal.style.display = "block";
    } else {
        var loseModal = document.getElementById("loseModal");
        loseModal.style.display = "block";
    }

}

// // sets length of game (must be equal to first var 'time')
setInterval(function(){isWin();}, 60000);


