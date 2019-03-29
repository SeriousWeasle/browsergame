var world = {};
var worldsize = {};


//pass the input params from the creation screen to the generator, activates on click
function createWorldParams () {
    worldwidth = Number(document.getElementById("worldparam-width").value);
    worldheight = Number(document.getElementById("worldparam-height").value);
    console.log(worldwidth, worldheight);
    worldsize = {"width": worldwidth, "height": worldheight};
    createWorld(worldwidth, worldheight);
    document.getElementById("worldcreationscreen").style.display = "none";
    document.getElementById("gameWindow").style.display = "flex";
    drawWorld();
}


//creates the world and saves it
function createWorld (x, y) {
    world = generateGrid(x, y);
    specialWorldGen();
    saveWorld();
}


//loads the save from localstorage
function loadSave () {
    worldstring = loadWorld();
    if (worldstring == null) {
        console.log("No save file");
    }

    else {
        world = JSON.parse(worldstring);
        document.getElementById("mainmenu").style.display = "none";
        document.getElementById("gameWindow").style.display = "flex";
        drawWorld();
    }
}

//go to world creation screen from main menu
function worldCreation () {
    document.getElementById("mainmenu").style.display = "none";
    document.getElementById("worldcreationscreen").style.display = "flex";
}

//go from world creation to main menu
function worldCreationBack () {
    document.getElementById("mainmenu").style.display = "flex";
    document.getElementById("worldcreationscreen").style.display = "none";
}