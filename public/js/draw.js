function drawWorld () {
    drawnworld = "<div id='world'>";
    for (i = 0; i < worldsize.height; i++) {
        drawnworld = drawnworld + "<div id='row'>";
        for (j = 0; j < worldsize.width; j++) {
            drawnworld = drawnworld + "<div class='tile_" + getTileData("type", j, i) + "'></div>";
        }
        drawnworld = drawnworld + "</div>";
    }
    drawnworld = drawnworld + "</div>";
    document.getElementById("mapContainer").innerHTML = drawnworld;
}