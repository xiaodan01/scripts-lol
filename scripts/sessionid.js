/*
获取亮总py版本ppx

[rewrite_local]
https://api5-(.+).pipix.com/luckycat/bds/v1/task/done/excitation_ad? url script-request-header sessionid.js
[mitm]
api5-(.+).pipix.com

*/
//匹配cookie中的sessionid
var cookieReg = /^.*?\bsessionid=([a-fA-F0-9]+).*$/;
//获取cookie
var cookie = $request.headers.Cookie;
//获取匹配结果
var sessionid = cookie.match(cookieReg)[1];
var url = $request.url;
//获取Token
var x-Tt-Token = $request.header.x-Tt-Token;
//获取Khronos
var X-Khronos = $request.header.x-Khronos;
//获取Gorgon
var X-Gorgon = $request.header.x-Gorgon;
//组合结果
var ck = "["+url+"#"+sessionid+"#"+x-Tt-Token+"#"+X-Khronos+"#"+X-Gorgon+"]";

console.log(ck);
//复制ck到剪切板
$clipboard.text = ck;
//通知
$notify("获取到了亮总ppx", "", ck);
   $done();
