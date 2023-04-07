/*
获取亮总py版本ppx

[rewrite_local]
https://api5-(.+).pipix.com/luckycat/bds/v1/task/done/excitation_ad? url script-request-header sessionid.js
[mitm]
api5-(.+).pipix.com

*/
const url = $request.url
const token = $request.headers['x-Tt-Token'];
const Khronos = $request.headers['X-Khronos'];
const Gorgon = $request.headers['X-Gorgon'];
const cookie = $request.headers.Cookie;
const cookieReg = /^.*?\bsessionid=([a-fA-F0-9]+).*$/;
const sessionid = cookie.match(cookieReg)[1];

const ck = url+"#"+sessionid+"#"+token+"#"+Khronos+"#"+Gorgon
console.log(ck);
$notify("获取到了ppx", "", ck);
   $done();
