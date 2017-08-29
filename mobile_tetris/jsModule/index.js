

// 
var Local = function(){
	
	// 游戏对象
	this.game;
	// 时间间隔
	this.INERTVAL = 500;
	// 定时器
	// this.timer = null;
	// 时间计数器
	this.timeOunt = 0;
	// 时间
	this.time = 0;
	// 页面元素
	this.doms = {
			gameElement: document.getElementById('tetris_game'),
			diamondElement: document.getElementById('tetris_diamond'),
			timeDiv: document.getElementById('tetris_time'),
			scoreDiv: document.getElementById('tetris_score'),
			gameoverDiv: document.getElementById('tetris_gameover'),
			// 左
			tetris_left: document.getElementById("tetris_left"),
			// 右
			tetris_right: document.getElementById('tetris_right'),
			// 下
			tetris_down: document.getElementById('tetris_down'),
			// 旋转
			tetris_rotate: document.getElementById('tetris_rotate'),
			// 坠落
			tetris_fall: document.getElementById('tetris_fall')
			
		}
	/**
	 * [bindEvents 绑定键盘事件]
	 * @return {[type]} [description]
	 */
	this.bindEvents = function(){
		var _this = this;
		document.onkeydown = function(e){
			if(e.keyCode == 37 || e.keyCode == 65){
				e.stopPropagation();
				e.preventDefault();
				// left
				_this.game.left();
			}else if(e.keyCode == 38 || e.keyCode == 87){
				e.stopPropagation();
				e.preventDefault();
				// up
				_this.game.rotate();
			}else if(e.keyCode == 39 || e.keyCode == 68){
				e.stopPropagation();
				e.preventDefault();
				// right
				_this.game.right();
			}else if(e.keyCode == 40 || e.keyCode == 83){
				e.stopPropagation();
				e.preventDefault();
				// down
				_this.game.down();
			}else if(e.keyCode == 32){
				e.stopPropagation();
				e.preventDefault();
				_this.game.fall();
			}
		};
		if(window.innerWidth >= 750){
			var _this = this;
			// 左
			this.doms.tetris_left.onclick = function(e){
				e.stopPropagation();
				e.preventDefault();
				// left
				_this.game.left();
			}
			
			// 右
			this.doms.tetris_right.onclick = function(e){
				e.stopPropagation();
				e.preventDefault();
				// right
				_this.game.right();
			}
			
			// 下
			this.doms.tetris_down.onclick = function(e){
				e.stopPropagation();
				e.preventDefault();
				// down
				_this.game.down();
			}
			
			// 旋转
			this.doms.tetris_rotate.onclick = function(e){
				e.stopPropagation();
				e.preventDefault();
				// up
				_this.game.rotate();
			}

			// 坠落
			this.doms.tetris_fall.onclick = function(e){
				e.stopPropagation();
				e.preventDefault();
				_this.game.fall();
			}
			

		}else if(window.innerWidth < 750){

		}
	}
	var that = this;
	this.autoDown = function(){
		that.recordTime();
		if(!that.game.down()){
			that.game.fixed();
			var line = that.game.checkClear();
			if(line){
				that.game.setScore(line);
			}
			var gameOver = that.game.checkGameOver()
			if(gameOver){
				that.game.recordGameover(false);
				that.stopGame()
			}else{
				that.game.performNext(that.generateType(),that.generateDir());
			}		
		}
	}
	// 生成种类随机数
	this.generateType = function(){
		return parseInt(Math.floor(Math.random() * 7));
	}
	// 生成旋转随机数
	this.generateDir = function(){
		return  parseInt(Math.floor(Math.random() * 4));
	}
	// 记录时间
	this.recordTime = function(){
		this.timeOunt += 1;
		if(this.timeOunt == Math.round(1000/this.INERTVAL)){
			this.timeOunt = 0;
			this.time += 1;
			this.game.setTime(this.time);
		}
		
	}

	// 停止游戏
	this.stopGame = function(){
		if(outTimer){
			clearInterval(outTimer);
			outTimer = null;
		}
		document.onkeydown = null;
	}
	/**
	 * clearFn清除
	 */
	this.clearFn = function(){
		document.onkeydown = null;
		this.doms.tetris_left.onclick = null;
		this.doms.tetris_right.onclick = null;
		this.doms.tetris_down.onclick = null;
		this.doms.tetris_rotate.onclick = null;
		this.doms.tetris_fall.onclick = null;
		this.timeOunt = 0;
		this.time = 0;
	}
	/**
	 * [start 入口函数]
	 * @type {[type]}
	 */
	this.start = function(){
		this.clearFn();
		this.game = new Game()
		// 游戏初始化
		if(window.innerWidth >= 970){
			this.game.elementWidth = 35;
		}else if(window.innerWidth >= 750 && window.innerWidth < 970){
			this.game.elementWidth = 30
		}else if(window.innerWidth < 750){
			this.game.elementWidth = 20
		}
		this.game.init(this.doms,this.generateType(),this.generateDir());
		// 页面绑定事件
		this.bindEvents();
		this.game.performNext(this.generateType(),this.generateDir());
		outTimer = setInterval(this.autoDown,this.INERTVAL)
	}
}


var tetris_newgame = document.getElementById('tetris_newgame');
var tetris_end = document.getElementById('tetris_end');
var outTimer;
var local =  null;
tetris_newgame.addEventListener('click',function(e){
	e.stopPropagation();
	e.preventDefault();
	if(outTimer){
		clearInterval(outTimer);
		outTimer = null;
	}	
	local = new Local();
	local.start();
})
tetris_end.addEventListener('click',function(e){
	e.stopPropagation();
	e.preventDefault();
	if(outTimer){
		clearInterval(outTimer);
		outTimer = null;
	}
	if(local){
		local.clearFn();
		local.game.clear();
		local = null;
	}
	
})


var documentHeight = window.innerHeight;
var documentWidth = window.innerWidth;
var tetris_background = document.getElementById('tetris_background');
tetris_background.style.height = documentHeight + 'px';

console.log(window)




