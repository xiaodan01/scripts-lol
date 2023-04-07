//微信打开获取 https://wqsh.jd.com/promote/201801/bean/index.html?PTAG=17053.1.1&utm_source=weixin#/formal
//匹配wqskey
var cookieReg = /^.*?\wq_skey=([a-fA-F0-9]+).*$/;
//获取cookie
var cookie = $request.headers.Cookie;
//获取匹配结果
var wqskey = cookie.match(cookieReg)[1];
//通知
$notify("获取到了wqskey", "", wqskey);
   $done();
