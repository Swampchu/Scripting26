//console log just to test that your JS is linked properly
console.log("We are connected");
//create a variable for the number of buildings in the city and start it at zero
let buildings = 0;
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById('city').innerHTML = "you now have " + buildings + " buildings in this city!";
//Functions --
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
//-- Print a message to teh console
//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
//---Place an image graphic into the other div
function buildOne(){
    console.log("Hello");
    buildings++;
    document.getElementById('city').innerHTML = "you now have " + buildings + " buildings in this city!";
    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock1.png' alt='building one'>";
}
//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function buildTwo(){
    console.log("Hello2");
    buildings++;
    document.getElementById('city').innerHTML = "you now have " + buildings + " buildings in this city!";
    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock2.png' alt='building Two'>";
}
//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
function buildThree(){
    console.log("Hello3");
    buildings++;
    document.getElementById('city').innerHTML = "you now have " + buildings + " buildings in this city!";
    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock3.png' alt='building Three'>";
}