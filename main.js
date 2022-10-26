//Change the span with the class mess-with-me to have a font size of 40px. (A span is an inline element tag, typically used inside a block of text)

let spanMess = document.querySelector('.mess-with-me');

spanMess.style.fontSize = "40px";

//Change the paragraph with the class mess-with-me to have a background color of green.

let paraMess = document.querySelector('p.mess-with-me');

paraMess.style.background = "green";

// Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!



let hiddenDino = document.querySelector('#hide-me');

hiddenDino.style.display = "none";
//Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

let firstDino = document.querySelector("#triceratops");

firstDino.style.width = "324px";

// Event listener stuff

// Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

spanMess.addEventListener('click', function(){
    spanMess.style.color = 'orange';
});

// Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

firstDino.addEventListener('click',function(){
    firstDino.style.border = "5px solid red";
});

// Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

let chickenDino = document.querySelector("#feathers");

chickenDino.addEventListener('click', function(){
    chickenDino.style.opacity = "0.5"
});

// Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

// ++++++++++ Make it so that when you click the "Switch Background Color" button, you switch it back and forth from white to whatever color you chose. This doesn't require another event listener, but, rather, a rewrite of the function you made into your event listener. Hint: when you haven't explicitly set the background color through JavaScript yet, its value will always be an empty string, no matter what you've set it to in other sources (like the browser's default white background, or through your own CSS file).

let dinoButton = document.querySelector("#toggle");
let dinoRow = document.querySelector("#row");

dinoButton.addEventListener("click", function(){
    
    if(dinoRow.style.background === ""){

        dinoRow.style.background = "gray";

    } else if (dinoRow.style.background === "gray"){
        dinoRow.style.background = "";
    }
});

// Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

// +++++++ Add a new event listener so that when the biggify dinosaur is no longer hovered, they change back to their original size. Hint: same as the above one, but for its width! Hint 2: You'll have to use a different kind of event than you did before, but... it's a related event with a similar name.

let dinoBig = document.querySelector("#biggify");

dinoBig.addEventListener('mouseenter',function(){

dinoBig.style.width = "200px";

})

dinoBig.addEventListener('mouseleave',function(){

dinoBig.style.width = "162px";

})

