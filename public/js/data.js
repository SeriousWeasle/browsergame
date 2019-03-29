function saveWorld () {
    window.localStorage.setItem("world", JSON.stringify(world));
    window.localStorage.setItem("worldsize", JSON.stringify(worldsize));
}

function loadWorld () {
    worldsize = JSON.parse(window.localStorage.getItem("worldsize"));
    return window.localStorage.getItem("world");
}

function getTileData (data, x, y) {
    return world["row" + y]["tile" + x][data];
}