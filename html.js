//window.location.href = urls.length > 0 ? urls[Math.floor(Math.random() * urls.length)] : 'https://github.com/hms5232/random-survey';
// 假設您有八個網址，放在一個陣列中
var urls = [
  	'https://www.surveycake.com/s/mlez6',
	'https://www.surveycake.com/s/44l9Z',
	'https://www.surveycake.com/s/DKOkO',
	'https://www.surveycake.com/s/V2OoN',
	'https://www.surveycake.com/s/vK8P6',
	'https://www.surveycake.com/s/NLrBx',
	'https://www.surveycake.com/s/rvrdB',
	'https://www.surveycake.com/s/xxYdz'
	
];

// 每個網址應出現的次數
var targetFrequency = 1;

// 複製網址陣列以便之後的操作
var urlPool = urls.slice();

// 儲存每個網址已出現的次數
var urlCount = {};

// 初始化每個網址的出現次數為0
urls.forEach(function(url) {
  urlCount[url] = 0;
});

// 隨機選擇要跳轉的網址
function selectUrl() {
  // 如果所有網址都已達到目標次數，則重新初始化網址計數
  if (urlPool.length === 0) {
    urlPool = urls.slice();
    urls.forEach(function(url) {
      urlCount[url] = 0;
    });
  }

  // 隨機選擇一個網址
  var randomIndex = Math.floor(Math.random() * urlPool.length);
  var selectedUrl = urlPool[randomIndex];

  // 更新網址計數
  urlCount[selectedUrl]++;
  if (urlCount[selectedUrl] === targetFrequency) {
    // 如果選擇的網址已達到目標次數，從網址池中移除該網址
    urlPool.splice(randomIndex, 1);
  }

  return selectedUrl;
}

// 跳轉到選擇的網址
window.location.href = selectUrl();
