var StopWatch = require('../'),
	 stopWatch = new StopWatch();

Array.prototype.distinct = function(){
	for(var i = 0;i < this.length;i++){
		for(var j = i+1;j < this.length;){
			if(this[j] === this[i]){
			for(var k = j;k < this.length;k++){
				this[k] = this[k + 1];
			}
			   delete this[this.length - 1];
				this.length--;
				
			}else{
				j++;
			}
		}
	}
	return this;
};
stopWatch.start();
console.log([1,1,2,44,2,22,22].distinct());
setTimeout(function(){
	stopWatch.stop();
	console.log('watch1 : ' + stopWatch.duration());
},3000);

var s2 = new StopWatch();
s2.start();
setTimeout(function(){
	s2.stop();
	console.log('watch2 : ' + s2.duration());
},2000);