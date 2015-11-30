var process = require('child_process');
//直接调用命令
function createDir(){process.exec('ls',
      function (error, stdout, stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
          

        }
    });
}

exports.createDir = createDir

//调用执行文件
exports.openApp = function(){
    process.execFile('D:/testweb/aaa.bat',null,{cwd:'D:/'},
      function (error,stdout,stderr) {
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
}

