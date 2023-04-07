//匹配cookie中的sessionid
var cookieReg = /^.*?\bwq_skey=([a-fA-F0-9]+).*$/;
//获取cookie
var cookie = $request.headers.Cookie;
//获取匹配结果
var wqskey = cookie.match(cookieReg)[1];
