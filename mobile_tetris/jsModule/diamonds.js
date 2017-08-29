

/**
 * [Diamond 方块类]
 * 
 */
var Diamond1 = function(){

	Diamond.call(this);

	// 旋转数组 三维
	this.rotates = [
		[
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],
		[
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		],
		[
			[0,0,0,0],
			[2,2,2,2],
			[0,0,0,0],
			[0,0,0,0]
		],
	]
}

Diamond1.prototype = Object.create(Diamond.prototype);

var Diamond2 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[2,2,0,0],
			[0,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[2,2,0,0],
			[2,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[0,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[2,2,0,0],
			[2,0,0,0],
			[0,0,0,0]
		],
	]
}
Diamond2.prototype = Object.create(Diamond.prototype);

var Diamond3 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[0,2,2,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,0,0,0],
			[2,2,0,0],
			[0,2,0,0],
			[0,0,0,0]
		],
		[
			[0,2,2,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,0,0,0],
			[2,2,0,0],
			[0,2,0,0],
			[0,0,0,0]
		],
	]
}
Diamond3.prototype = Object.create(Diamond.prototype);

var Diamond4 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[0,2,0,0],
			[2,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,0,0,0],
			[2,2,0,0],
			[2,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,2,0],
			[0,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[2,2,0,0],
			[0,2,0,0],
			[0,0,0,0]
		],
	]
}
Diamond4.prototype = Object.create(Diamond.prototype);

var Diamond5 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[2,0,0,0],
			[2,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[2,0,0,0],
			[2,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,2,0],
			[0,0,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[0,2,0,0],
			[0,2,0,0],
			[2,2,0,0],
			[0,0,0,0]
		],
	]
}
Diamond5.prototype = Object.create(Diamond.prototype);

var Diamond6 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[0,0,2,0],
			[2,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,0,0,0],
			[2,0,0,0],
			[2,2,0,0],
			[0,0,0,0]
		],
		[
			[2,2,2,0],
			[2,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,0,0,0]
		],
	]
}
Diamond6.prototype = Object.create(Diamond.prototype);

var Diamond7 = function(){

	Diamond.call(this);
	// 旋转数组 三维
	this.rotates = [
		[
			[2,2,0,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
		[
			[2,2,0,0],
			[2,2,0,0],
			[0,0,0,0],
			[0,0,0,0]
		],
	]
}
Diamond7.prototype = Object.create(Diamond.prototype);




var DiamondFactory = function(){

}

DiamondFactory.prototype.generate = function(index,dir){
	var singDiamond;
	index += 1;
	switch(index){
	case 1:
		singDiamond = new Diamond1();
		break;
	case 2:
		singDiamond = new Diamond2();
		break;
	case 3:
		singDiamond = new Diamond3();
		break;
	case 4:
		singDiamond = new Diamond4();
		break;
	case 5:
		singDiamond = new Diamond5();
		break;
	case 6:
		singDiamond = new Diamond6();
		break;
	case 7:
		singDiamond = new Diamond7();
		break;
	default:
		break;
	}
	singDiamond.origin.x = 0;
	singDiamond.origin.y = 4;
	singDiamond.rotate(dir);
	return singDiamond;
}

































