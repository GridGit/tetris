let nextData = [
	[2,2,0,0],
	[0,2,2,0],
	[0,0,0,0],
	[0,0,0,0]
];

let gameData = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,2,0,0,0],
	[0,0,0,0,2,2,2,0,0,0],
	[0,0,1,1,1,1,1,0,0,0]
];

var nextDivs = [];
var gameDivs = [];

var initGame = function(){
	for(var i = 0; i < gameData.length; i++){
		var gameDiv = [];
		for(var j = 0; j < gameData[0].length; j++){
			var div = document.createElement('div');
			div.className = 'none';
			div.style.top = i*20 + 'px';
			div.style.left = j*20 + 'px';
			document.getElementById('game').appendChild(div);
			gameDiv.push(div);
		}
		gameDivs.push(gameDiv);
	}
};

var initNext= function(){
	for(var i = 0; i < nextData.length; i++){
		var nextDiv = [];
		for(var j = 0; j < nextData[0].length; j++){
			var div = document.createElement('div');
			div.className = 'none';
			div.style.top = i*20 + 'px';
			div.style.left = j*20 + 'px';
			document.getElementById('next').appendChild(div);
			nextDiv.push(div);
		}
		nextDivs.push(nextDiv);
	}
};

var refreshGame = function(){
	for(var i = 0; i < gameData.length; i++){
		for(var j = 0; j < gameData[0].length; j++){
			if(gameData[i][j] == 0){
				gameDivs[i][j].className = 'none';
			}else if(gameData[i][j] == 1){
				gameDivs[i][j].className = 'done';
				console.log(gameData[i][j])
				console.log(gameDivs[i][j].className)
			}else if(gameData[i][j] == 2){
				gameDivs[i][j].className = 'current';
			}
		}
	}
}

var refreshNext = function(){
	for(var i = 0; i < nextData.length; i++){
		for(var j = 0; j < nextData[0].length; j++){
			if(nextData[i][j] == 0){
				nextDivs[i][j].className = 'none'
			}else if(nextData[i][j] == 1){
				nextDivs[i][j].className = 'done';
			}else if(nextData[i][j] == 2){
				nextDivs[i][j].className = 'current';
			}
		}
	}
}

initGame();
initNext();
refreshGame();
refreshNext();








































