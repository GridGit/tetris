var Game = function(){
	
	/**
	 * 主屏数据 20*10数组
	 */
	this.gameData = [
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

	/**
	 *	当前方块
	 *	下一个方块
	 */	 
	this.currentDiamond = null;
	this.nextDiamond = null;

	/**
	 * 主屏divs 20*10数组 
	 * 方块divs 4*4数组
	 */
	
	this.diamondDivs = [];
	this.gameDivs = [];
	
	/**
	 *  方块大小
	 */
	
	this.elementWidth = 20;
	/**
	 * 挂载元素
	 * 时间div
	 * 分数div
	 * 游戏结束div
	 * 
	 */
	 this.gameElement = null;
	 this.diamondElement = null;
	 this.timeDiv = null;
	 this.scoreDiv =null;
	 this.gameoverDiv = null;
	 // 分数值
	 this.score = 0;
	/**
	 * 检测是否越界,以及点是否被占用
	 * 
	 */ 
	 this.checkPoint = function(pos,x,y){
	 	if(pos.x + x < 0){
	 		return false;
	 	}else if(pos.x + x >= this.gameData.length){
	 		return false;
	 	}else if(pos.y + y < 0){
	 		return false;
	 	}else if(pos.y + y >= this.gameData[0].length){
	 		return false;
	 	}else if(this.gameData[pos.x + x][pos.y + y] == 1){
	 		return false;
	 	}else{
	 		return true;
	 	}
	 }	

	 /**
	  *
	  *检测数据是否合法
	  * 
	  */
	 var that = this;
	 this.checkData = function(pos,data){
	 	for(var i = 0; i < data.length; i++){
	 		for(var j = 0; j < data[0].length; j++){
	 			if(data[i][j] != 0){
	 				if(!that.checkPoint(pos,i,j)){
	 					return false;
	 				}
	 			}
	 		}
	 	}
	 	return true;
	 } 
	/**
	 *
	 * 设置主屏数据，通过方块中的数据
	 */
	this.setGameDataByDiamond = function(){
		var xLength = this.currentDiamond.diamondData.length;
		var yLength = this.currentDiamond.diamondData[0].length;
		var origin = this.currentDiamond.origin;
	
		for(var i = 0; i < xLength; i++){
			for(var j = 0; j < yLength; j++){
				if(this.checkPoint(origin,i,j)){
					this.gameData[origin.x + i][origin.y + j] = this.currentDiamond.diamondData[i][j];
				}				
			}
		}
	}
	/**
	 *
	 *清除通过方块设置的主屏数据
	 */

	this.clearGameDataByDiamond = function(){
		var xLength = this.currentDiamond.diamondData.length;
		var yLength = this.currentDiamond.diamondData[0].length;
		var origin = this.currentDiamond.origin;
		for(var i = 0; i < xLength; i++){
			for(var j = 0; j < yLength; j++){
				if(this.checkPoint(origin,i,j)){
					this.gameData[origin.x + i][origin.y + j] = 0;
				}
				
			}
		}
	}
	/**
	 *
	 * 下降
	 * 
	 */
	 this.down = function(){
	 	if(this.currentDiamond.canDown(this.checkData)){
	 		this.clearGameDataByDiamond();
		 	this.currentDiamond.down();
		 	this.setGameDataByDiamond();
		 	this.refreshDiv(this.gameData,this.gameDivs);
		 	return true;
	 	}else{
	 		return false;
	 	}
	 	
	 }
	 /**
	 *
	 * 左移
	 * 
	 */
	 this.left = function(){
	 	if(this.currentDiamond.canLeft(this.checkData)){
	 		this.clearGameDataByDiamond();
		 	this.currentDiamond.left();
		 	this.setGameDataByDiamond();
		 	this.refreshDiv(this.gameData,this.gameDivs);
	 	}
	 	
	 }
	 /**
	 *
	 * 右移
	 * 
	 */
	 this.right = function(){
	 	if(this.currentDiamond.canRight(this.checkData)){
	 		this.clearGameDataByDiamond();
		 	this.currentDiamond.right();
		 	this.setGameDataByDiamond();
		 	this.refreshDiv(this.gameData,this.gameDivs);
	 	}
	 	
	 }
	 /**
	 *
	 * 旋转
	 * 
	 */
	 this.rotate = function(){
	 	if(this.currentDiamond.canRotate(this.checkData)){
	 		this.clearGameDataByDiamond();
		 	this.currentDiamond.rotate();
		 	this.setGameDataByDiamond();
		 	this.refreshDiv(this.gameData,this.gameDivs);
	 	}
	 	
	 }
	 /**
	 *
	 * 坠落
	 * 
	 */
	 this.fall = function(){
	 	// 判断能否下降,若能一直下降，直到不能下降
	 	while(this.down());
	 }
	 /**
	 *
	 * 固定
	 * 
	 */
	 this.fixed = function(){
	 	for(var i = 0; i < this.currentDiamond.diamondData.length; i++){
	 		for(var j = 0; j < this.currentDiamond.diamondData[0].length; j++){
	 			if(this.checkPoint(this.currentDiamond.origin,i,j)){
	 				if(this.gameData[this.currentDiamond.origin.x + i][this.currentDiamond.origin.y + j] == 2){
	 					this.gameData[this.currentDiamond.origin.x + i][this.currentDiamond.origin.y + j] = 1
	 				}
	 			}
	 		}
	 	}
	 	this.refreshDiv(this.gameData,this.gameDivs);
	 }
	 /**
	 *
	 * 使用下一个方块
	 * 
	 */
	 this.performNext = function(type,dir){
	 	this.currentDiamond = this.nextDiamond;
	 	this.setGameDataByDiamond();
	 	this.nextDiamond = DiamondFactory.prototype.generate(type,dir);
	 	this.refreshDiv(this.gameData,this.gameDivs);
	 	this.refreshDiv(this.nextDiamond.diamondData,this.diamondDivs);
	 }
	 /**
	 *
	 * 消行
	 * 
	 */
	 this.checkClear = function(){
	 	var line = 0;
	 	for(var i = this.gameData.length - 1; i >= 0; i--){
	 		var clear = true;
	 		for(var j = 0; j < this.gameData[0].length; j++){
	 			if(this.gameData[i][j] != 1){
	 				clear = false;
	 				break;
	 			}
	 		}
	 		if(clear){
	 			console.log("消行成功");
	 			line += 1;
	 			for(var m = i; m > 0; m--){
	 				for(var n = 0; n < this.gameData[0].length; n++){
	 					this.gameData[m][n] = this.gameData[m - 1][n];
	 				}
	 			}
	 			for(var n = 0; n < this.gameData[0].length; n++){
	 				this.gameData[0][n] = 0;
	 			}
	 			i++;
	 		}
	 	}
	 	return line;
	 }
	 /**
	 *
	 * 检测是否gameOver
	 * 
	 */
	 this.checkGameOver  = function(){
	 	var gameOver = false;
	 	for(var i = 0; i < this.gameData[0].length; i++){
	 		if(this.gameData[1][i] == 1){
	 			gameOver = true;
	 		}
	 	}
	 	return gameOver;
	 }

	 /**
	 *
	 * 设置时间
	 * 
	 */
	 this.setTime  = function(time){
	 	this.timeDiv.innerHTML = time;
	 }
	 /**
	 *
	 * 设置分数
	 * 
	 */
	 this.setScore  = function(line){
	 	if(line == 1){
	 		this.score += 10;
	 	}else if(line == 2){
	 		this.score += 30
	 	}else if(line == 3){
	 		this.score += 60
	 	}else if(line == 4){
	 		this.score += 100
	 	}
	 	this.scoreDiv.innerHTML = this.score;
	 
	 }
	 /**
	 *
	 * 设置gameover标志
	 * 
	 */
	 this.recordGameover = function(win){
	 	if(win){
	 		this.gameoverDiv.innerHTML = "恭喜你";
	 	}else{
	 		this.gameoverDiv.innerHTML = "你输了";
	 	}
	 	
	 }
	/**
	 * 生成DIV
	 * params: data 结构
	 * 			element 挂载元素
	 * 			divs 用于保存生成的div
	 * 
	 */
	
	this.createDiv = function(data,element,divs,elementWidth){
		for(var i = 0; i < data.length; i++){
			var div = [];
			for(j = 0; j < data[0].length; j++){
				var newDiv = document.createElement('div');
				newDiv.className = 'none clearFlag';
				newDiv.style.top = elementWidth*i + 'px';
				newDiv.style.left = elementWidth*j + 'px';
				element.appendChild(newDiv)
				div.push(newDiv);
			}
			divs.push(div);
		}
	}

	/**
	 * [refreshDiv 刷新页面div]
	 * params data数据  divs div结构
	 * @return {[type]} [description]
	 */
	this.refreshDiv = function(data,divs){
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
	}
	/**
	 * 清除
	 */
	
	this.clear = function(){
		this.gameElement.innerHTML = '';
		this.diamondElement.innerHTML = '';
		this.scoreDiv.innerHTML = 0;
		this.timeDiv.innerHTML = 0;
		this.gameoverDiv.innerHTML = '';
		this.score = 0;
	}
	/**
	 * 初始化方法
	 */
	

	this.init = function(doms,type,dir){
		// 获取页面的挂载元素
		this.gameElement = doms.gameElement;
		this.diamondElement = doms.diamondElement;
		this.timeDiv = doms.timeDiv;
		this.scoreDiv = doms.scoreDiv;
		this.gameoverDiv = doms.gameoverDiv;
		// 实例化方块对象
		
		// 当前主屏上出现的方块
		// this.currentDiamond = DiamondFactory.prototype.generate(2,2) ;
		// 右边出现的方块,即下一个方块
		this.nextDiamond = DiamondFactory.prototype.generate(type,dir);
		
		this.clear();
		// 生成主屏div
		this.createDiv(this.gameData,this.gameElement,this.gameDivs,this.elementWidth);
		// 生成右边方块div
		this.createDiv(this.nextDiamond.diamondData,this.diamondElement,this.diamondDivs,this.elementWidth);

		// 设置数据
		// this.setGameDataByDiamond();

		// 刷新主屏样式
		// this.refreshDiv(this.gameData,this.gameDivs);
		// 刷新右边方块样式
		this.refreshDiv(this.nextDiamond.diamondData,this.diamondDivs);

	}

}
