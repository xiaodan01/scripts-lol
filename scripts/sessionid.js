/*
获取亮总py版本ppx

[rewrite_local]
https://api5-(.+).pipix.com/luckycat/bds/v1/task/done/excitation_ad? url script-request-header sessionid.js
[mitm]
api5-(.+).pipix.com

*/
var cookieReg = /^.*?\bsessionid=([a-fA-F0-9]+).*$/;
var cookie = $request.headers.Cookie;
var sessionid = cookie.match(cookieReg)[1];
var url = $request.url;
var x-Tt-Token = $request.header.x-Tt-Token;
var X-Khronos = $request.header.x-Khronos;
var X-Gorgon = $request.header.x-Gorgon;

console.log(sessionid);
$notify("获取到了亮总ppx", "", url+"#"+sessionid+"#"+x-Tt-Token+"#"+X-Khronos+"#"+X-Gorgon);
   $done();
