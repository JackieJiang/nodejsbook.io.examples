var http = require('http'),
  urls = ['taobao.com', 'www.baidu.com', 'www.qq.com'];

function fetchPage(url) {
  var start = new Date();
  http.get({ host: url }, function(res) {
  	// 这个host:是什么意思？
    console.log("Got response from: " + url);
    console.log('Request took:', new Date() - start, 'ms');
  });
}

for(var i = 0; i < urls.length; i++) {
  fetchPage(urls[i]);
}

