   // track the interval id
   var intervalId = 0;

   // this function will move our image around the page
   function  moveImage(){
       // make it so we can't click on the start button (since we just started moving the image)
       document.getElementById("startButton").disabled = true;
       // make the stop button clockable
       document.getElementById("stopButton").disabled = false;


       // create a nickname/shortcut variable that points to our HTML image
       var image = document.getElementById("memeImage");

       //this will keep track of where the image was
       var oldX = 0;
       var oldY = 0;
       // keeping track of the intervalId willl allow us to stop moving the image
       intervalId = setInterval(function(){
           // set the x and y coordinates for the image
           var newX = 1; 
           var newY = 1; // moving the image by 5 pixels - this could be a random number

           // oldX +=  newX is the same thing as oldX = oldX + newX
           oldX += newX;
           oldY += newY;

           console.log("oldX = " + oldX);
           console.log("oldY = " + oldY);

           image.style.left = oldX + "px";
           image.style.top = oldY + "px";
       },  200); //1000 is 1000 miliseconds = 1 second
   }

   //this function will stop moving the image
   function stopImage(){
       document.getElementById("startButton").disabled = false;
       // make the stop button not clockable
       document.getElementById("stopButton").disabled = true;
       //call the built in JavaScript function to clear out the interval
       clearInterval(intervalId);
   }