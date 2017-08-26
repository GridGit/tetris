

// 
var Local = function(){
	
	// 游戏对象
	this.game;
	// 时间间隔
	this.INERTVAL = 400;
	// 定时器
	this.timer = null;
	// 时间计数器
	this.timeOunt = 0;
	// 时间
	this.time = 0;
	/**
	 * [bindEvents 绑定键盘事件]
	 * @return {[type]} [description]
	 */
	this.bindEvents = function(){
		var _this = this;
		document.onkeydown = function(e){
			if(e.keyCode == 37){
				// left
				_this.game.left();
			}else if(e.keyCode == 38){
				// up
				_this.game.rotate();
			}else if(e.keyCode == 39){
				// right
				_this.game.right();
			}else if(e.keyCode == 40){
				// down
				_this.game.down();
			}else if(e.keyCode == 32){
				_this.game.fall();
			}
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
		return Math.floor(Math.random() * 7);
	}
	// 生成旋转随机数
	this.generateDir = function(){
		return Math.floor(Math.random() * 4);
	}
	// 记录时间
	this.recordTime = function(){
		this.timeOunt += 1;
		if(this.timeOunt == 5){
			this.timeOunt = 0;
			this.time += 1;
		}
		this.game.setTime(this.time);
	}

	// 停止游戏
	this.stopGame = function(){
		if(this.timer){
			clearInterval(this.timer);
			this.timer = null;
		}
		document.onkeydown = null;
	}
	/**
	 * [start 入口函数]
	 * @type {[type]}
	 */
	this.start = function(){
		var doms = {
			gameElement: document.getElementById('tetris_game'),
			diamondElement: document.getElementById('tetris_diamond'),
			timeDiv: document.getElementById('tetris_time'),
			scoreDiv: document.getElementById('tetris_score'),
			gameoverDiv: document.getElementById('tetris_gameover')

		}
		this.game = new Game()
		// 游戏初始化
		this.game.init(doms,this.generateType(),this.generateDir());
		this.bindEvents();
		this.game.performNext(this.generateType(),this.generateDir());
		this.timer = setInterval(this.autoDown,this.INERTVAL)
	}
}
var local = new Local();
local.start();






