var Game = function(){
	// Dom 元素
	var gameDiv;
	var nextDiv;

	// 游戏矩阵
	var gameData = [
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
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
	// 当前方块
	var cur;
	// 下一个方块
	var next;
	// divs
	var nextDiv = [];
	var gameDiv = [];
	// 初始化div
	var initDiv = function(container,data,divs){
		for(var i = 0; i < data.length; i++){
			var divArr = [];
			for(var j = 0; j < data[0].length; j++){
				var div = document.createElement('div');
				div.className = 'none';
				div.style.top = i*20 + 'px';
				div.style.left = j*20 + 'px';
				container.appendChild(div);
				divArr.push(div);
			}
			divs.push(divArr);
		}
	};
	// 刷新div
	var refreshDiv = function(data,divs){
		for(var i = 0; i < data.length; i++){
			for(var j = 0; j < data[0].length; j++){
				if(data[i][j] == 0){
					divs[i][j].className = 'none';
				}else if(data[i][j] == 1){
					divs[i][j].className = 'done';
				}else if(data[i][j] == 2){
					divs[i][j].className = 'current';
				}
			}
		}
	};

}