

/**
 * [Diamond 方块类]
 * 
 */
var Diamond = function(){

	/**
	 *方块数据 4*4二维数组
	 */

	this.diamondData = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	/**
	 *方块的原点，移动，旋转方块时的基准
	 * 
	 */
	this.origin = {
		x: 2,
		y: 2
	}
	// 旋转方向
	this.dir = 0;

}
// 下降
Diamond.prototype.canDown = function(checkData){
	// 用于测试的中心点
	var testOrigin = {};
	testOrigin.x = this.origin.x + 1;
	testOrigin.y = this.origin.y;
	return checkData(testOrigin,this.diamondData);
}
Diamond.prototype.down = function(){
	this.origin.x += 1;
}

// 左移
Diamond.prototype.canLeft = function(checkData){
	// 用于测试的中心点
	var testOrigin = {};
	testOrigin.x = this.origin.x;
	testOrigin.y = this.origin.y - 1;
	return checkData(testOrigin,this.diamondData);
}
Diamond.prototype.left = function(){
	this.origin.y -= 1;
}

// 右移
Diamond.prototype.canRight = function(checkData){
	// 用于测试的中心点
	var testOrigin = {};
	testOrigin.x = this.origin.x;
	testOrigin.y = this.origin.y + 1;
	return checkData(testOrigin,this.diamondData);
}
Diamond.prototype.right = function(){
	this.origin.y += 1;
}

// 旋转
Diamond.prototype.canRotate = function(checkData){
	var direction = (this.dir + 1) % 4;

	// 用于测试的数组 即旋转过后的方块
	var testArr = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	]
	for(var i = 0; i < this.diamondData.length; i++){
		for(var j = 0; j < this.diamondData.length; j++){
			testArr[i][j] = this.rotates[direction][i][j];
		}
	}
	return checkData(this.origin,testArr);
}
Diamond.prototype.rotate = function(num){
	if(!num){
		num = 1;
	}
	// 旋转方块
	this.dir = (this.dir + num) % 4;

	for(var i = 0; i < this.diamondData.length; i++){
		for(var j = 0; j < this.diamondData.length; j++){
			this.diamondData[i][j] = this.rotates[this.dir][i][j];
		}
	}
}











































