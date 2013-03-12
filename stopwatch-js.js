;(function(exports,window){
	if(typeof module !== "undefined" && module.exports) {
		module.exports = exports.StopWatch; // CommonJS
   }else{
		window.StopWatch = exports.StopWatch; //script
   }
	
}((function(){


	var exports = {};
	exports.name = 'stopwatch-js';
	exports.version = '0.0.1';
	exports.StopWatch = StopWatch;
	
	
	function _getTime(){
		return new Date().getTime();
	}
	
	function StopWatch(){
		this.startTime = null,
		this.endTime = null,
		this.running = false;
	}
	
	StopWatch.prototype.start = function(){
		if(this.running){
			return;
		}else if(this.startTime !== null){
			this.endTime = null;
		}
		this.running = true;
		this.startTime = _getTime();
	};
	
	StopWatch.prototype.stop = function(){
		if(!this.running){
			return;
		}
		this.endTime = _getTime();
		this.running = false;
	};
	
	StopWatch.prototype.duration = function(){
		if(this.startTime && this.endTime){
			return (this.endTime - this.startTime) / 1000;
		}else{
			return 'undefined';
		}
	};
	return exports;
}()),this));
