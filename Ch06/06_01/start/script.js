const yanwu = (seconds)=>
new Promise((resolve)=>
setTimeout(resolve, seconds*1000))

yanwu(13).then(()=> console.log("13 secs 延误了"))