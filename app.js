const express = require('express');
var app = express();
var portnr = 5029;
var startMessage = ['###########################################', '#                                         #', '#   Node app running at: localhost:' + portnr + '   #', '#                                         #', '###########################################'];

app.use(express.static('public'));

var server = app.listen(portnr, function () {
    var host = server.address().address;
    var port = server.address().port;
    for (i = 0; i < startMessage.length; i++) {
        console.log(startMessage[i]);
    }
})

app.get('*', function(req, res){
    res.status(404).send('<head><style>body {height: 98vh; background-color: black; display: flex; justify-content: center; align-items: center;}</style><title>That is an error</title><!--Princess Luna, bring me your memes, make them the dankest that I ever seen. Add in some yeets and minecraft game over. Then tell the user their bugs are over.--></head><body><img width="70%"; src="//i.imgur.com/hMfpDQ9.png"></body>');
})