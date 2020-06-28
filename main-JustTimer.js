console.log('Fresh Reload ----------------------------');
let myMemory = {};
myMemory.lastTime = 0;
myMemory.cpuNode = 1;
Memory.my.cpuNode = 1;
module.exports.loop = function () {
	if ( !(myMemory.cpuNode > 0) ) {
		myMemory.cpuNode = ++Memory.my.cpuNodes;
		console.log(`New cpuNode=${Memory.my.cpuNodes}`);
	}
	console.log(`At Start  myMemory.lastTime=${myMemory.lastTime} Game.time=${Game.time}  matches=${(myMemory.lastTime === Game.time-1)} cpuNode=${myMemory.cpuNode}`);
	myMemory.lastTime=Game.time;
	console.log(`After set myMemory.lastTime=${myMemory.lastTime} Game.time=${Game.time}`);
	console.log('---        '     + ' CPU:' +(Game.cpu.bucket>9999?'FULL':Game.cpu.bucket)+' CPUused:'+Game.cpu.getUsed().toFixed(2) +"<br>\n" );
}