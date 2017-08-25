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
	var nextDivs = [];
	var gameDivs = [];
	// 检测方块中的点在下落时，对应主屏上的点是否可用
	var checkNode = function(pos,x,y){
		console.log(pos)
		console.log("x,y : " + x,y);
		if(pos.x + x < 0){
			return false;
		}else if(pos.x + x >= gameData.length){
			return false
		}else if(pos.y + y < 0){
			return false
		}else if(pos.y + y >= gameData[0].length){
			return false
		}else if(gameData[pos.x + x][pos.y + y] == 1){
			return false
		}else{
			return true;
		}
	}
	// 检测下落方块数据是否合法
	var isValue = function(pos,data){
		for(var i = 0; i < data.length; i++){
			for(var j = 0; j < data[0].length; j++){
				if(data[i][j] != 0){
					if(!checkNode(pos,i,j)){
						return false
					}
				}
			}
		}
		return true;
	}
	// 设置方块数据到主屏上
	var setData = function(){
		for(var i =0; i < cur.data.length; i++){
			for(var j = 0; j < cur.data[0].length; j++){
				if(checkNode(cur.origin,i,j)){
					gameData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];
				}				
			}
		}
	}
	// 清除数据
	var clearData = function(){
		for(var i =0; i < cur.data.length; i++){
			for(var j = 0; j < cur.data[0].length; j++){
				if(checkNode(cur.origin,i,j)){
					gameData[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}
	}
	// 
	// 下移
	var down = function(){
		// 判断是否能下降
		if(cur.canDown(isValue)){
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData,gameDivs);
		}
		
	}
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
	// 初始化
	var init = function(doms){
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		cur = new Square();
		next = new Square();

		initDiv(gameDiv,gameData,gameDivs);
		initDiv(nextDiv,next.data,nextDivs);
		cur.origin.x = 0;
		cur.origin.y = 0;
		setData()
		refreshDiv(gameData,gameDivs);
		refreshDiv(next.data,nextDivs);
	}

	this.init = init;
	this.down = down;
}






























