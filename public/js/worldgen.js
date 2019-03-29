//Store all tile IDs with keys for type, buildings it starts with and starting resources
function generateGrid (width, height) {
    worldgrid = {};

    //Make a grid of the specified size from grass tiles
    for (i = 0; i < height; i++) {
        worldrow = {};
        for (j = 0; j < width; j++) {
            worldrow["tile" + j] = {"type": "grass","buildings": {},"uniques": {},"pos": [j, i],"resources":{"startgrass": 100,"currentgrass": 100,"startdirt": 50,"currentdirt": 50}};
        }
        worldgrid["row" + i] = worldrow;
    }

    //hand that back to the place where the function is called
    return worldgrid;
}

function replaceRandomTile (amount, replacetype) {
    console.log(replacetype);
    i = 0;
    while(i < amount) {
        replacePos = {'x':Math.floor(Math.random()*worldsize.width), 'y': Math.floor(Math.random()*worldsize.height)};
        if (world["row" + replacePos.y]["tile" + replacePos.x]["type"] == "grass") {
            i = i + 1;
            world["row" + replacePos.y]["tile" + replacePos.x]["type"] = replacetype;
        }
    }
}

function specialWorldGen() {
    replaceRandomTile((worldsize.width*worldsize.height)/20, "stone");
    replaceRandomTile((worldsize.width*worldsize.height)/10, "water");
    replaceRandomTile((worldsize.width*worldsize.height)/40, "desert");
    replaceRandomTile((worldsize.width*worldsize.height)/10, "forest");
}