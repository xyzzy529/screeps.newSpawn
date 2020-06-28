console.log('Fresh Reload ----------------------------');

module.exports.loop = function () {
    //Memory.xGame = false;

    console.log(' #:' + Game.time + ' CPU:' +(Game.cpu.bucket>9999?'FULL':Game.cpu.bucket)+' CPUused:'+Game.cpu.getUsed().toFixed(2)  );
}
 