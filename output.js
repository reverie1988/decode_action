//Wed Nov 20 2024 11:44:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * cron "39 11,19 * * *" FTEJ.js
 * export FTEJ="账号1&密码1 账号2&密码2"
 */
const $ = new Env("\u798F\u7530e\u5BB6");
const FTEJ = ($.isNode() ? process.env.FTEJ : $.getdata("FTEJ")) || "";
let phone = "";
let password = "";
let token = "";
let notice = "";
!(async () => {
  await main();
})().catch(e => {
  $.log(e);
}).finally(() => {
  $.done({});
});
async function main() {
  console.log("\u4F5C\u8005\uFF1A@xzxxn777\n\u9891\u9053\uFF1Ahttps://t.me/xzxxn777\n\u7FA4\u7EC4\uFF1Ahttps://t.me/xzxxn7777\n\u81EA\u7528\u673A\u573A\u63A8\u8350\uFF1Ahttps://xn--diqv0fut7b.com\n");
  if (!FTEJ) {
    console.log("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
    await sendMsg("\u5148\u53BBboxjs\u586B\u5199\u8D26\u53F7\u5BC6\u7801");
    return;
  }
  let arr = FTEJ.split(" ");
  for (const item of arr) {
    phone = item.split("&")[0];
    password = item.split("&")[1];
    console.log(`用户：${phone}开始任务`);
    console.log("\u76AE\u5361\u751F\u6D3B\u767B\u5F55");
    let pkLogin = await pkLoginPost("/ehomes-new/pkHome/api/user/getLoginMember2nd", {
      "memberId": "",
      "memberID": "",
      "mobile": "",
      "token": "7fe186bb15ff4426ae84f300f05d9c8d",
      "vin": "",
      "safeEnc": Date.now() - 10110000,
      "name": phone,
      "password": password,
      "position": "",
      "deviceId": "",
      "deviceBrand": "",
      "brandName": "",
      "deviceType": "0",
      "versionCode": "21",
      "versionName": "V1.1.10"
    });
    console.log(pkLogin.msg);
    if (pkLogin.code != 200) {
      continue;
    }
    uid = pkLogin.data.uid;
    memberComplexCode = pkLogin.data.memberComplexCode;
    memberId = pkLogin.data.user.memberNo;
    token = pkLogin.data.token;
    console.log("\u5F00\u59CB\u7B7E\u5230");
    let pkSign = await pkPost("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
      "memberId": memberComplexCode,
      "memberID": memberId,
      "mobile": phone,
      "token": "7fe186bb15ff4426ae84f300f05d9c8d",
      "vin": "",
      "safeEnc": Date.now() - 10110000
    });
    if (pkSign.data.integral) {
      console.log(`签到成功，获得${pkSign.data.integral}积分`);
    } else {
      console.log(pkSign.data.msg);
    }
    // console.log("————————————")
    // console.log("开始任务")
    // console.log('关注')
    // let currentPostList = await pkPost('/ehomes-new/pkHomeForum/api/post/currentPostList',{"memberId":memberId,"memberID":memberId,"mobile":phone,"token":"7fe186bb15ff4426ae84f300f05d9c8d","vin":"","safeEnc":Date.now()-20220000,"pageNum":1,"pageSize":10})
    // let index = Math.floor(Math.random() * currentPostList.data.length);
    // let navyId = currentPostList.data[index].navyId;
    // let follow2nd = await pkPost('/ehomes-new/pkHomeForum/api/post/follow2nd',{"memberId":memberComplexCode,"memberID":memberId,"mobile":phone,"token":"7fe186bb15ff4426ae84f300f05d9c8d","vin":"","safeEnc":Date.now()-20220000,"navyId":navyId})
    // if (follow2nd.code == 200) {
    //     console.log(`关注成功`)
    //     let notFollow = await pkPost('/ehomes-new/pkHomeForum/api/post/notFollow',{"memberId":memberComplexCode,"memberID":memberId,"mobile":phone,"token":"7fe186bb15ff4426ae84f300f05d9c8d","vin":"","safeEnc":Date.now()-20220000,"followId":follow2nd.data.followId})
    //     if (notFollow.code == 200) {
    //         console.log(`取关成功`)
    //     } else {
    //         console.log(notFollow.msg)
    //     }
    // } else {
    //     console.log(follow2nd.msg)
    // }
    console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
    console.log("\u798F\u7530e\u5BB6\u767B\u5F55");
    let login = await loginPost("/ehomes-new/homeManager/getLoginMember", {
      "password": password,
      "version_name": "7.3.23",
      "version_auth": "",
      "device_id": "",
      "device_model": "",
      "ip": "",
      "name": phone,
      "version_code": "316",
      "deviceSystemVersion": "11",
      "device_type": "0"
    });
    if (login.code != 200) {
      console.log(login.msg);
      continue;
    }
    console.log("\u767B\u9646\u6210\u529F");
    uid = login.data.uid;
    memberComplexCode = login.data.memberComplexCode;
    memberId = login.data.memberID;
    console.log("\u5F00\u59CB\u7B7E\u5230");
    if (login.data.signIn == "\u672A\u7B7E\u5230") {
      let sign = await commonPost("/ehomes-new/homeManager/api/bonus/signActivity2nd", {
        "memberId": memberComplexCode,
        "userId": uid,
        "userType": "61",
        "uid": uid,
        "mobile": phone,
        "tel": phone,
        "phone": phone,
        "brandName": "",
        "seriesName": "",
        "token": "ebf76685e48d4e14a9de6fccc76483e3",
        "safeEnc": Date.now() - 20220000,
        "businessId": 1
      });
      console.log(`签到成功，获得${sign.data.integral}积分`);
    } else {
      console.log(login.data.signIn);
    }
    console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
    console.log("\u5F00\u59CB\u4EFB\u52A1");
    let taskList = await commonPost("/ehomes-new/homeManager/api/Member/getTaskList", {
      "memberId": memberId,
      "userId": uid,
      "userType": "61",
      "uid": uid,
      "mobile": phone,
      "tel": phone,
      "phone": phone,
      "brandName": "",
      "seriesName": "",
      "token": "ebf76685e48d4e14a9de6fccc76483e3",
      "safeEnc": Date.now() - 20220000,
      "businessId": 1
    });
    for (const task of taskList.data) {
      console.log(`任务：${task.ruleName}`);
      if (task.isComplete == "1") {
        console.log("\u4EFB\u52A1\u5DF2\u5B8C\u6210");
      } else {
        if (task.ruleId == "33") {
          let addIntegralForShare = await loginPost("/ehomes-new/homeManager/api/bonus/addIntegralForShare", {
            "safeEnc": Date.now() - 20220000,
            "activity": "",
            "tel": phone,
            "id": task.ruleId,
            "source": "APP",
            "memberId": memberComplexCode
          });
          if (addIntegralForShare.code == 200) {
            console.log(`分享成功，获得${addIntegralForShare.data.integral}积分`);
          } else {
            console.log(addIntegralForShare.msg);
          }
        }
        if (task.ruleId == "130") {
          let recommendPostList = await commonPost("/ehomes-new/ehomesCommunity/api/post/recommendPostList", {
            "memberId": memberId,
            "userId": uid,
            "userType": "61",
            "uid": uid,
            "mobile": phone,
            "tel": phone,
            "phone": phone,
            "brandName": "",
            "seriesName": "",
            "token": "ebf76685e48d4e14a9de6fccc76483e3",
            "safeEnc": Date.now() - 20220000,
            "businessId": 1,
            "position": "1",
            "pageNumber": "1",
            "pageSize": 9
          });
          let index = Math.floor(Math.random() * recommendPostList.data.length);
          let memberIdeds = recommendPostList.data[index].memberId;
          let follow2nd = await commonPost("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
            "memberId": memberComplexCode,
            "userId": uid,
            "userType": "61",
            "uid": uid,
            "mobile": phone,
            "tel": phone,
            "phone": phone,
            "brandName": "",
            "seriesName": "",
            "token": "ebf76685e48d4e14a9de6fccc76483e3",
            "safeEnc": Date.now() - 20220000,
            "businessId": 1,
            "behavior": "1",
            "memberIdeds": memberIdeds,
            "navyId": "null"
          });
          if (follow2nd.code == 200) {
            console.log(`关注成功`);
          } else {
            console.log(follow2nd.msg);
          }
          follow2nd = await commonPost("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
            "memberId": memberComplexCode,
            "userId": uid,
            "userType": "61",
            "uid": uid,
            "mobile": phone,
            "tel": phone,
            "phone": phone,
            "brandName": "",
            "seriesName": "",
            "token": "ebf76685e48d4e14a9de6fccc76483e3",
            "safeEnc": Date.now() - 20220000,
            "businessId": 1,
            "behavior": "2",
            "memberIdeds": memberIdeds,
            "navyId": "null"
          });
          if (follow2nd.code == 200) {
            console.log(`取关成功`);
          } else {
            console.log(follow2nd.msg);
          }
        }
        if (task.ruleId == "125") {
          let topicList = await loginPost("/ehomes-new/ehomesCommunity/api/post/topicList", {
            "memberId": memberId,
            "userId": uid,
            "userType": "61",
            "uid": uid,
            "mobile": phone,
            "tel": phone,
            "phone": phone,
            "brandName": "",
            "seriesName": "",
            "token": "ebf76685e48d4e14a9de6fccc76483e3",
            "safeEnc": Date.now() - 20220000,
            "businessId": 1
          });
          let index = Math.floor(Math.random() * topicList.data.top.length);
          let topicId = topicList.data.top[index].topicId;
          let text = await textGet();
          if (!text || text.length < 10) {
            text = "\u5982\u679C\u89C9\u5F97\u6CA1\u6709\u670B\u53CB\uFF0C\u5C31\u53BB\u627E\u559C\u6B22\u7684\u4EBA\u8868\u767D\uFF0C\u5BF9\u65B9\u4F1A\u63D0\u51FA\u548C\u4F60\u505A\u670B\u53CB\u7684\u3002";
          }
          console.log(`文本：${text}`);
          let addJson2nd = await commonPost("/ehomes-new/ehomesCommunity/api/post/addJson2nd", {
            "memberId": memberComplexCode,
            "userId": uid,
            "userType": "61",
            "uid": uid,
            "mobile": phone,
            "tel": phone,
            "phone": phone,
            "brandName": "",
            "seriesName": "",
            "token": "ebf76685e48d4e14a9de6fccc76483e3",
            "safeEnc": Date.now() - 20220000,
            "businessId": 1,
            "content": text,
            "postType": 1,
            "topicIdList": [topicId],
            "uploadFlag": 3,
            "title": "",
            "urlList": []
          });
          if (addJson2nd.code == 200) {
            console.log(`发帖成功`);
          } else {
            console.log(addJson2nd.msg);
          }
        }
      }
    }
    console.log("\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014");
    console.log("\u67E5\u8BE2\u79EF\u5206");
    let findMemberPointsInfo = await commonPost("/ehomes-new/homeManager/api/Member/findMemberPointsInfo", {
      "memberId": memberId,
      "userId": uid,
      "userType": "61",
      "uid": uid,
      "mobile": phone,
      "tel": phone,
      "phone": phone,
      "brandName": "",
      "seriesName": "",
      "token": "ebf76685e48d4e14a9de6fccc76483e3",
      "safeEnc": Date.now() - 20220000,
      "businessId": 1
    });
    console.log(`拥有积分: ${findMemberPointsInfo.data.pointValue}\n`);
    notice += `用户：${phone} 拥有积分: ${findMemberPointsInfo.data.pointValue}\n`;
  }
  if (notice) {
    await sendMsg(notice);
  }
}
async function loginPost(url, body) {
  return new Promise(resolve => {
    const options = {
      url: `https://czyl.foton.com.cn${url}`,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "Connection": "Keep-Alive",
        "user-agent": "okhttp/3.14.9",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(body)
    };
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          await $.wait(2000);
          resolve(JSON.parse(data));
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function pkLoginPost(url, body) {
  return new Promise(resolve => {
    const options = {
      url: `https://czyl.foton.com.cn${url}`,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "channel": "1",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(body)
    };
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          await $.wait(2000);
          resolve(JSON.parse(data));
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function commonPost(url, body) {
  return new Promise(resolve => {
    const options = {
      url: `https://czyl.foton.com.cn${url}`,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "Connection": "Keep-Alive",
        "token": "",
        "app-key": "7918d2d1a92a02cbc577adb8d570601e72d3b640",
        "app-token": "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489",
        "user-agent": "web",
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(body)
    };
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          await $.wait(2000);
          resolve(JSON.parse(data));
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function pkPost(url, body) {
  return new Promise(resolve => {
    const options = {
      url: `https://czyl.foton.com.cn${url}`,
      headers: {
        "content-type": "application/json;charset=utf-8",
        "channel": "1",
        "token": token,
        "Accept-Encoding": "gzip"
      },
      body: JSON.stringify(body)
    };
    $.post(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          await $.wait(2000);
          resolve(JSON.parse(data));
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function textGet() {
  return new Promise(resolve => {
    const options = {
      url: `https://api.btstu.cn/yan/api.php`,
      headers: {}
    };
    $.get(options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          await $.wait(2000);
          resolve(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function sendMsg(message) {
  if ($.isNode()) {
    let notify = "";
    try {
      notify = require("./sendNotify");
    } catch (e) {
      notify = require("../sendNotify");
    }
    await notify.sendNotify($.name, message);
  } else {
    $.msg($.name, "", message);
  }
}

// prettier-ignore
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      }, this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      }, this.logLevel = "info", this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20, o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return s;
      return o;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t), s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [t] = i.split(";"),
                        [, o] = i.split(",");
                      e = o, s = t.replace("data:", "");
                    } else {
                      e = i, s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(i);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i), a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(o, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(o)), o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(e, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}