var game = { 
    startTime: null,
    displayArea:document.getElementById('display-area'),
    start: function(){
    game.startTime = Date.now();
    document.body.onkeydown = game.end;
},
    end: function(e) {
        var i = e.keyCode;
        if(i === 13){
                game.stopTime=Date.now();
                game.seconds=(game.stopTime-game.startTime)/1000;
                if(9.5 <= game.seconds && game.seconds <= 10.5){
                    game.displayArea.innerText = game.seconds + '秒でした。すごい。';
                } else {
                    game.displayArea.innerText = game.seconds + '秒でした。残念。';
                }
        }
        else if(i === 32) {
            game.stopTime = Date.now();
            game.seconds = (game.stopTime-game.startTime)/1000;
            game.displayArea.innerText = game.seconds;

        }
        }
    }
if(confirm('OKを押して10秒だと思ったら何かキーを押してください')) {
    game.start();
}


   
    