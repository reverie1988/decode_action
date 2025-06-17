//Tue Jun 17 2025 14:27:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const hzhcookie = process.env.HZH_USERTOKEN,
  request = require("request"),
  cookies = hzhcookie.split("&");
for (let i = 0; i < cookies.length; i++) {
  (function (_0x290d3a, _0x573670) {
    setTimeout(function () {
      var _0x391483 = {
        method: "POST",
        url: "https://hweb-mbf.huazhu.com/api/signIn",
        headers: {
          "Client-Platform": " APP-IOS",
          "User-Token": cookies[i],
          "User-Agent": "apifox/1.0.0 (https://www.apifox.cn)",
          "Content-Type": " application/x-www-form-urlencoded"
        },
        body: "state=1&day=" + getNowFormatDate()
      };
      request(_0x391483, function (_0x50ef58, _0xf6e28f) {
        if (_0x50ef58) {
          console.log("账号" + i + 1 + "❌签到失败,原因未知!\n" + _0x50ef58);
          cookies.length - 1 !== i && console.log("等待五秒，进行下一次签到。");
        } else {
          var _0x52eca4 = JSON.parse(_0xf6e28f.body);
          Number(_0x52eca4.businessCode) === 1000 ? _0x52eca4.content.isSign === true ? (console.log("账号" + (i + 1) + "❌签到失败,重复签到"), cookies.length - 1 !== i && console.log("等待五秒，进行下一次签到。")) : (console.log("账号" + (i + 1) + "✅华住会签到成功拉"), cookies.length - 1 !== i && console.log("等待五秒，进行下一次签到。")) : (console.log("账号" + (i + 1) + "❌签到失败,原因未知!\\n" + _0xf6e28f.body), cookies.length - 1 !== i && console.log("等待五秒，进行下一次签到。"));
        }
      });
    }, 5000 * _0x290d3a);
  })(i, cookies);
}
function getNowFormatDate() {
  var _0x4e2987 = new Date();
  var _0xea1f2d = _0x4e2987.getMonth() + 1;
  var _0x3f3c37 = _0x4e2987.getDate();
  _0xea1f2d >= 1 & _0xea1f2d <= 9 && (_0xea1f2d = "0" + _0xea1f2d);
  _0x3f3c37 >= 0 & _0x3f3c37 <= 9 && (_0x3f3c37 = "0" + _0x3f3c37);
  var _0x37fed1 = _0x3f3c37;
  return _0x37fed1;
}