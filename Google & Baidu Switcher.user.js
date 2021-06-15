/* jshint esversion: 8 */
// ==UserScript==
// @name            Google & baidu Switcher (ALL in One)
// @name:en         Google & baidu & Bing Switcher (ALL in One)
// @name:zh-TW      谷歌、百度、必應的搜索引擎跳轉工具
// @version         3.2.20210614.2
// @author          F9y4ng
// @description     谷歌、百度、必应的搜索引擎跳转工具，脚本默认自动更新检测，可在菜单自定义设置必应按钮，搜索引擎跳转的最佳体验。
// @description:en  Google, Baidu and Bing search engine tool, Automatically updated and detected by default, The Bing button can be customized.
// @description:zh-TW  谷歌、百度、必應的搜索引擎跳轉工具，腳本默認自動更新檢測，可在菜單自定義設置必應按鈕，搜索引擎跳轉的最佳體驗。
// @namespace       https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/Google_baidu_Switcher_(ALL_in_One)
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @icon            https://www.google.com/favicon.ico
// @include         *://*.google.*/search*
// @include         *://*.google.*/webhp*
// @include         *://www.baidu.com/*
// @include         *://ipv6.baidu.com/*
// @include         *://www1.baidu.com/*
// @include         *://image.baidu.com/*
// @include         *://*.bing.com/*
// @exclude         *://*.google.*/sorry*
// @exclude         *://*.google.*/url*
// @exclude         *://www.baidu.com/link*
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey4.0+, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @note            紧急更新：修正更新检查缓存时间的永久化问题，此版本可永久固化过期时间不会因脚本升级而失效，脚本菜单中设有对应操作选项。
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM.registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_openInTab
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @grant           GM_deleteValue
// @grant           GM.deleteValue
// @license         GPL-3.0-only
// @create          2015-10-07
// @copyright       2015-2021, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  "use strict";

  /* customize */

  const isVersionDetection = true; // Set "false" to turn off the Version Detection forever.
  const isdebug = false; // set "true" to debug scripts, May cause script response slower.

  /* The following variable is used to define the expiration time of version detection.
   * In order to reduce the query pressure on the script source server as much as possible,
   * Please don`t set the Query-cache expiration time too short. So we set 4 hours by default,
   * And to reduce update-tips frequency, you can extend the expireTime to a few days, or even weeks.
   * (s = second, m = minute, h = hour, d = day, w = week) */

  const expireTime = "4h";

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  let GMsetValue, GMgetValue, GMdeleteValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMnotification, GMopenInTab;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const isGM = Boolean(handlerInfo.toLowerCase() === "greasemonkey");
  const debug = isdebug ? console.log.bind(console) : () => {};
  const error = isdebug ? console.error.bind(console) : () => {};
  const defCon = {
    scriptName: GMinfo.script.name,
    curVersion: GMinfo.script.version,
    support: GMinfo.script.supportURL,
    encrypt: n => {
      return window.btoa(encodeURIComponent(n));
    },
    decrypt: n => {
      return decodeURIComponent(window.atob(n));
    },
    fetchResult: "success",
    titleCase: (str, bool) => {
      // bool: true for Whole sentence.
      const RegExp = bool ? /( |^)[a-z]/g : /(^)[a-z]/g;
      return str
        .toString()
        .toLowerCase()
        .replace(RegExp, L => {
          return L.toUpperCase();
        });
    },
    isNoticed: sessionStorage.getItem("nCount") || 0,
    isNeedUpdate: 0,
    updateNote: "",
    restTime: 0,
    durationTime: t => {
      let w, d, h, m, s;
      const wks = Math.floor(t / 1000 / 60 / 60 / 24 / 7);
      const ds = Math.floor(t / 1000 / 60 / 60 / 24 - wks * 7);
      const hs = Math.floor(t / 1000 / 60 / 60 - wks * 7 * 24 - ds * 24);
      const ms = Math.floor(t / 1000 / 60 - wks * 7 * 24 * 60 - ds * 24 * 60 - hs * 60);
      const ss = Math.floor(t / 1000 - wks * 7 * 24 * 60 * 60 - ds * 24 * 60 * 60 - hs * 60 * 60 - ms * 60);
      wks > 0 ? (w = ` ${wks}wk`) : (w = "");
      ds > 0 ? (d = ` ${ds}d`) : (d = "");
      hs > 0 ? (h = ` ${hs}h`) : (h = "");
      ms > 0 ? (m = ` ${ms}min`) : (m = "");
      wks > 0 || ds > 0 || hs > 0 || ms > 0 ? (s = "") : ss > 0 ? (s = ` ${ss}s`) : (s = " Destroying cache.");
      return `${w}${d}${h}${m}${s}`;
    },
    showDate: s => {
      return s.replace(/w/i, " 周 ").replace(/d/i, " 天 ").replace(/h/i, " 小时 ").replace(/m/i, " 分钟 ").replace(/s/i, " 秒 ");
    },
    randString: (n, v, r, s = "") => {
      // v: true for only letters.
      let a = "0123456789";
      let b = "abcdefghijklmnopqrstuvwxyz";
      let c = b.toUpperCase();
      n = Number.isFinite(n) ? n : 10;
      v ? (r = b + c) : (r = a + b + a + c);
      for (; n > 0; --n) {
        s += r[Math.floor(Math.random() * r.length)];
      }
      return s;
    },
    isUpgrade: Boolean(GetUrlParam("Zn")),
    lastRuntime: new Date().toLocaleString("en-US", {
      timeZoneName: "short",
      hour12: false,
    }),
  };
  const _expireTime = /(?!^0)^[0-9]+[smhdw]$/i.test(expireTime) ? expireTime : "4h";
  defCon.rName = defCon.randString(7, true);
  defCon.noticeHTML = str => {
    return String(`<div class="${defCon.rName}"><dl>${str}<dl></div>`);
  };

  if (isGM) {
    GMsetValue = GM.setValue;
    GMgetValue = GM.getValue;
    GMdeleteValue = GM.deleteValue;
    GMregisterMenuCommand = GM.registerMenuCommand;
    GMunregisterMenuCommand = () => {};
    GMopenInTab = (a, b) => {
      window.open(a, defCon.randString(b ? b.length : 10).slice(-6));
    };
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMdeleteValue = GM_deleteValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
    GMopenInTab = GM_openInTab;
  }

  /* Refactoring functions of GMsetValue/GMgetValue/GMdeleteValue with Expire */

  function GMsetExpire(key, value, expire) {
    let obj = {
      data: value,
      time: Date.now(),
      expire: /(?!^0)^[0-9]+[smhdw]$/i.test(expire) ? expire : "4h",
    };
    GMsetValue(key, JSON.stringify(obj));
  }

  function GMgetExpire(key, val) {
    let expire, expires, expireTime;
    if (!val) {
      return val;
    }
    val = JSON.parse(val);
    if (val.expire) {
      /(?!^0)^[0-9]+[smhdw]$/i.test(val.expire) ? (expire = val.expire) : (expire = "4h");
      expire = expire
        .replace(/w/i, "*7*24*3600*1000")
        .replace(/d/i, "*24*3600*1000")
        .replace(/h/i, "*3600*1000")
        .replace(/m/i, "*60*1000")
        .replace(/s/i, "*1000");
      expires = expire.split("*");
      expireTime = expires.reduce(function (a, b) {
        return a * b;
      }, 1);
    }
    defCon.restTime = val.time + expireTime - Date.now();
    if (defCon.restTime <= 0) {
      GMdeleteValue(key);
      return null;
    }
    return val.data;
  }

  /* Refactoring GMnotification Function */

  GMnotification = (text = "", type = "info", closeWith = true, timeout = 30, { ...options } = {}) => {
    try {
      new NoticeJs({
        text: text,
        type: type,
        closeWith: closeWith ? ["button"] : ["click"],
        timeout: timeout,
        callbacks: { ...options },
      }).show();
    } catch (e) {
      error("//-> %cGMnotification:\n%c%s", "font-weight:bold", "font-weight:normal", e);
    }
  };

  const callback_Countdown = {
    onShow: [
      function (Interval = 3) {
        const m = setInterval(() => {
          Interval ? --Interval : clearInterval(m);
          const emText = document.querySelector(`.${defCon.rName} dl dd em`);
          if (emText) {
            emText.innerHTML = Interval;
          }
          !Interval ? location.reload() : () => {};
        }, 1e3);
      },
    ],
  };

  /* Common functions */

  function GetUrlParam(paraName) {
    if (!paraName) {
      const parameter = document.location.pathname.toString();
      const arr = parameter.split("/");
      return arr[1] === undefined ? "" : arr[1];
    } else {
      const url = document.location.toString();
      const arrObj = url.split("?");
      if (arrObj.length > 1) {
        const arrPara = arrObj[1].split("&");
        let arr;
        for (let i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");
          if (arr !== null && arr[0] === paraName) {
            return arr[1];
          }
        }
        return "";
      } else {
        return "";
      }
    }
  }

  function safeFunction(func) {
    try {
      func();
    } catch (e) {
      error("//-> %cFunctions:\n%c%s", "font-weight:bold", "font-weight:normal", e);
    }
  }

  /* SYSTEM INFO */

  console.info(
    `%c[GB-Init]%c\nVersion: ${defCon.curVersion} %c[%s]%c\nExtension: %s\nlastRuntime: ${defCon.lastRuntime}`,
    "font-weight:bold;color:dodgerblue",
    "color:0",
    "color:snow",
    checkVersion(defCon.isUpgrade) instanceof Object === isVersionDetection,
    "color:0",
    defCon.titleCase(handlerInfo)
  );

  /* Version Detection with Cache and timeout * F9y4ng * 20210614 */

  function fetchTimeout(url, time, { ...options } = {}) {
    const controller = new AbortController();
    const signal = controller.signal;
    return new Promise((resolve, reject) => {
      let t = setTimeout(() => {
        controller.abort();
        resolve(new Response("timeout", { status: 504, statusText: `Request timeout. (User-Defined: ${time}ms)` }));
      }, time);
      fetch(url, { signal: signal, ...options }).then(
        res => {
          clearTimeout(t);
          resolve(res);
        },
        err => {
          clearTimeout(t);
          reject(err);
        }
      );
    });
  }

  function fetchVersion(u) {
    return new Promise((e, t) => {
      fetchTimeout(u, 2000, {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        credentials: "omit",
      })
        .then(e => {
          debug("//-> %c%s %s", "color:green", e.ok, e.status);
          if (!e.ok) {
            throw Error(`${e.status} ${e.statusText}`);
          }
          return e.text();
        })
        .then(t => {
          let n = defCon.curVersion;
          let m = defCon.updateNote;
          t.split(/[\r\n]+/).forEach(function (item) {
            let key = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
            if (key) {
              n = key[2];
            }
            let note = item.match(/^(\/\/\s+@note\s+)(.+)$/);
            if (note) {
              m = note[2];
            }
          });
          e([compareVersion(defCon.curVersion, n), defCon.encrypt(n), defCon.encrypt(m), defCon.encrypt(u)]);
        })
        .catch(e => {
          error("//-> %cfetchVersion:\n%c%s", "font-weight:bold", "font-weight:normal", e);
          t();
        });
    });
  }

  function compareVersion(current, compare) {
    let compare_array = compare.split(".");
    let current_array = current.split(".");
    let upgradeID = 0;
    if (compare_array.length === current_array.length) {
      for (let i = 0; i < compare_array.length; i++) {
        if (parseInt(compare_array[i]) < parseInt(current_array[i])) {
          upgradeID = 2;
          break;
        } else {
          if (parseInt(compare_array[i]) === parseInt(current_array[i])) {
            continue;
          } else {
            upgradeID = 1;
            break;
          }
        }
      }
    } else {
      upgradeID = 2;
    }
    return upgradeID;
  }

  async function checkVersion(s = false) {
    let t, setResult, info;
    const m = await GMgetValue("_is_Ver_Det_");
    isVersionDetection ? (setResult = m === undefined ? isVersionDetection : Boolean(m)) : (setResult = false);
    const _expire_time_ = await GMgetValue("_expire_time_");
    if (_expire_time_) {
      defCon._expireTime = _expire_time_;
      debug("//-> Load expireTime from cache.");
    } else {
      if (_expireTime !== "4h") {
        GMsetValue("_expire_time_", _expireTime);
        // Destroy cache if expireTime changed.
        GMdeleteValue("_Check_Version_Expire_");
        console.warn(`%c[GB-Update]%c\nThe expireTime is set to ${_expireTime}.`, "font-weight:bold;color:crimson", "color:0");
      }
      defCon._expireTime = _expireTime;
    }
    if (setResult) {
      // load cache
      const exp = await GMgetValue("_Check_Version_Expire_");
      const cache = GMgetExpire("_Check_Version_Expire_", exp);
      // Checking the local cache to reduce server requests
      if (!cache) {
        // first: greasyfork
        t = await fetchVersion(`https://greasyfork.org/scripts/12909/code/${defCon.randString(32)}.meta.js`).catch(async () => {
          defCon.fetchResult = "GreasyFork - Failed to fetch";
          error(defCon.fetchResult);
        });
        // second: github
        if (defCon.fetchResult.includes("GreasyFork")) {
          t = await fetchVersion(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(
            async () => {
              defCon.fetchResult = "Github - Failed to fetch";
              error(defCon.fetchResult);
            }
          );
        }
        // final: Jsdelivr points to gitee
        if (defCon.fetchResult.includes("Github")) {
          t = await fetchVersion(`https://cdn.jsdelivr.net/gh/F9y4ng/GreasyFork-Scripts@master/Google%20&%20Baidu%20Switcher.meta.js`).catch(
            async () => {
              defCon.fetchResult = "Jsdelivr - Failed to fetch";
              error(defCon.fetchResult);
            }
          );
        }
        // Set value with expire
        if (t !== undefined) {
          GMsetExpire("_Check_Version_Expire_", t, defCon._expireTime);
          debug("//-> checkVersion: Loading Data from Server.");
        } else {
          console.error(
            "%c[GB-Update]\n%cSome unknown exceptions cause version detection failure, most likely by a network error. Please try again.",
            "font-weight:bold;color:red",
            "font-weight:bold;color:darkred"
          );
        }
      } else {
        t = cache;
        debug("//-> checkVersion: Loading Data from Cache.");
      }
      // Resolution return data
      if (typeof t !== "undefined") {
        const lastestVersion = defCon.decrypt(t[1]);
        defCon.isNeedUpdate = cache ? compareVersion(defCon.curVersion, lastestVersion) : t[0];
        const updateNote = ((w = "") => {
          if (defCon.decrypt(t[2])) {
            defCon
              .decrypt(t[2])
              .split(/\\n/)
              .forEach(function (item) {
                w += `<li>${item}</li>`;
              });
          }
          return w ? `<dd class="disappear"><ul>${w}</ul></dd>` : "";
        })();
        const updateUrl = defCon.decrypt(t[3]).replace("meta", "user");
        const recheckURLs = new URL(
          updateUrl
            .replace("raw.githubusercontent", "github")
            .replace("cdn.jsdelivr.net/gh", "gitee.com")
            .replace("@", "/")
            .replace("master", "blob/master")
            .replace(/code\/[^/]+\.js/, "")
        );
        let sourceSite = defCon.titleCase(recheckURLs.hostname).split(".")[0];
        sourceSite = cache ? `${sourceSite} on Cache` : sourceSite;
        const repo = cache ? `\nCache expire:${defCon.durationTime(defCon.restTime)}\n` : `\nExpiration time: ${defCon._expireTime}\n`;

        switch (defCon.isNeedUpdate) {
          case 2:
            console.warn(
              String(
                `%c[GB-Update]%c\nWe found a new version, But %cthe latest version ` +
                  `%c${lastestVersion}%c is lower than your local version %c${defCon.curVersion}.%c\n\n` +
                  `Please confirm whether you need to upgrade your local script, and then you need to update it manually.\n\n` +
                  `If you no longer need the update prompt, please set "isVersionDetection" to "false" in your local code!\n` +
                  `${repo}(${sourceSite})`
              ),
              "font-weight:bold;color:crimson",
              "font-weight:bold;color:0",
              "color:0",
              "font-weight:bold;color:tomato",
              "color:0",
              "font-weight:bold;color:darkred",
              "color:0"
            );
            if (defCon.isNoticed < 2 || s) {
              setTimeout(function () {
                GMnotification(
                  defCon.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>
                      <dd><span>发现版本异常</span>检测到新版本 <i>${lastestVersion}</i> 低于您的本地版本 <i>${defCon.curVersion}</i>。</dd>\
                      <dd>由于您编辑过本地脚本，或是手动在脚本网站上升级过新版本，从而造成缓存错误。为避免未知错误的出现，脚本将自动设置为禁止检测更新，\
                      直至您手动从脚本菜单中再次开启它。</dd><dd>[ ${sourceSite} ]</dd><dd style="font-size:12px!important;\
                      color:lemonchiffon;font-style:italic">注：若要重新启用自动更新，您需要在<a href="${recheckURLs}"\
                      target="_blank" style="padding:0 2px;font-size:14px;color:gold">脚本源网站</a>覆盖安装新版本后，从脚本菜单重新开启检测功能。</dd>\
                      <dd style="text-align: center"><img src="https://i.niupic.com/images/2021/06/13/9kVe.png" alt="开启自动检测"></dd>`
                  ),
                  "error",
                  true,
                  200,
                  {
                    onClose: [
                      function () {
                        location.reload();
                      },
                    ],
                  }
                );
              }, 100);
              GMsetValue("_is_Ver_Det_", false);
              sessionStorage.setItem("nCount", ++defCon.isNoticed);
            }
            break;
          case 1:
            console.info(
              String(
                `%c[GB-Update]%c\nWe found a new version: %c${lastestVersion}%c.\n` +
                  `Please upgrade from your update source to the latest version.` +
                  `${repo}(${sourceSite})`
              ),
              "font-weight:bold;color:crimson",
              "color:0",
              "color:crimson",
              "color:0"
            );
            if (defCon.isNoticed < 2 || s) {
              let showdDetail = "";
              if (updateNote) {
                showdDetail = `<dd onmouseover="this.parentNode.children[2].style.display='block';\
                      this.style.display='none'" style="text-align:center">&gt;&gt; 查看更新内容 &lt;&lt;</dd>`;
              }
              setTimeout(function () {
                GMnotification(
                  defCon.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>\
                      <dd><span>发现版本更新</span>最新版本 <i>${lastestVersion}</i>，如果您现在需要更新脚本，请点击这里完成升级安装。</dd>\
                      ${updateNote}<dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px;">\
                      ( 缓存时间：${defCon.showDate(defCon._expireTime)} )</kbd></dd>${showdDetail}`
                  ),
                  "warning",
                  false,
                  60,
                  {
                    onClick: [
                      function () {
                        const w = window.open(updateUrl, "Update.Scripts");
                        setTimeout(() => {
                          isGM ? (window.opener = null) : debug("Not Greasemonkey");
                          w ? w.close() : debug("window not exsits.");
                          // Destroy cache when upgraded.
                          GMdeleteValue("_Check_Version_Expire_");
                          debug("//-> Destroy cache when upgraded.");
                          GMnotification(
                            defCon.noticeHTML(
                              `<dd class="center">如果您已更新了脚本，请点击<a href="javascript:void(0)"\
                                  onclick="location.replace(location.href.replace(/&zn=[^&]*/i,'')+'&Zn=1')"\
                                  class="im">这里</a>刷新使其生效。</a></dd>`
                            ),
                            "info",
                            true,
                            100
                          );
                        }, 2e3);
                      },
                    ],
                  }
                );
              }, 100);
              sessionStorage.setItem("nCount", ++defCon.isNoticed);
            }
            break;
          default:
            s ? (info = console.info.bind(console)) : (info = debug.bind(console));
            info(
              `%c[GB-Update]%c\nCurretVersion: %c${defCon.curVersion}%c is up-to-date!${repo}(${sourceSite})`,
              "font-weight:bold;color:darkcyan",
              "color:0",
              "color:red",
              "color:0"
            );
            if (s) {
              setTimeout(() => {
                GMnotification(
                  defCon.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>\
                      <dd><span>更新成功</span>当前版本 <i>${defCon.curVersion}</i> 已为最新！</dd>\
                      <dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px;">\
                      ( 缓存时间：${defCon.showDate(defCon._expireTime)} )</kbd></dd>`
                  ),
                  "success"
                );
              }, 100);
            }
            break;
        }
      }
    } else {
      console.warn(
        `%c[GB-Update]%c\nVersion detection turned off ${!isVersionDetection ? "Manually" : "Automatically"}.`,
        "font-weight:bold;color:red",
        "color:0"
      );
    }
  }

  /* Menus & Button insert  */

  !(async function () {
    // Get Promise Value
    const is_Use_Bing = parseInt(await GMgetValue("_if_Use_Bing_"));
    const is_Ver_Det = await GMgetValue("_is_Ver_Det_");

    /* Set Default Value & initialize */

    const CONST = {
      isSecurityPolicy: false,
      rndidName: defCon.randString(9, true),
      rndclassName: defCon.randString(12, true),
      bdyx: defCon.randString(5, true),
      ggyx: defCon.randString(5, true),
      bbyx: defCon.randString(5, true),
      isUseBing: (() => {
        if (isNaN(is_Use_Bing)) {
          GMsetValue("_if_Use_Bing_", 0);
          console.warn(
            "%c[GB-Warning]%c\nThis is your first visit, the Bing search button will not be inserted by default.",
            "font-weight:bold;color:salmon",
            "color:1"
          );
          return false;
        } else {
          return Boolean(is_Use_Bing);
        }
      })(),
      isVDResult: isVersionDetection ? (is_Ver_Det === undefined ? isVersionDetection : Boolean(is_Ver_Det)) : false,
      noticeCss: `@charset "UTF-8";.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.bounceIn,.animated.bounceOut,.animated.flipOutX,.animated.flipOutY{animation-duration:.75s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}.noticejs-top{top:0;width:100%}.noticejs-top .item{border-radius:0!important;margin:0!important}.noticejs-topRight{top:10px;right:10px}.noticejs-topLeft{top:10px;left:10px}.noticejs-topCenter{top:10px;left:50%;transform:translate(-50%)}.noticejs-middleLeft,.noticejs-middleRight{right:10px;top:50%;transform:translateY(-50%)}.noticejs-middleLeft{left:10px}.noticejs-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.noticejs-bottom{bottom:0;width:100%}.noticejs-bottom .item{border-radius:0!important;margin:0!important}.noticejs-bottomRight{bottom:10px;right:10px}.noticejs-bottomLeft{bottom:10px;left:10px}.noticejs-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.noticejs{z-index:99999!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.noticejs .item{margin:0 0 10px;border-radius:3px;overflow:hidden}.noticejs .item .close{float:right;font-size:18px;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.noticejs .item .close:hover{opacity:.5;color:#000;cursor:pointer}.noticejs .item a{color:#fff;border-bottom:1px dashed #fff}.noticejs .item a,.noticejs .item a:hover{text-decoration:none}.noticejs .success{background-color:#64ce83}.noticejs .success .noticejs-heading{background-color:#3da95c;color:#fff;padding:10px}.noticejs .success .noticejs-body{color:#fff;padding:10px!important}.noticejs .success .noticejs-body:hover{visibility:visible!important}.noticejs .success .noticejs-content{visibility:visible}.noticejs .info{background-color:#3ea2ff}.noticejs .info .noticejs-heading{background-color:#067cea;color:#fff;padding:10px}.noticejs .info .noticejs-body{color:#fff;padding:10px!important}.noticejs .info .noticejs-body:hover{visibility:visible!important}.noticejs .info .noticejs-content{visibility:visible}.noticejs .warning{background-color:#ff7f48}.noticejs .warning .noticejs-heading{background-color:#f44e06;color:#fff;padding:10px!important}.noticejs .warning .noticejs-body{color:#fff;padding:10px}.noticejs .warning .noticejs-body:hover{visibility:visible!important}.noticejs .warning .noticejs-content{visibility:visible}.noticejs .error{background-color:#e74c3c}.noticejs .error .noticejs-heading{background-color:#ba2c1d;color:#fff;padding:10px!important}.noticejs .error .noticejs-body{color:#fff;padding:10px}.noticejs .error .noticejs-body:hover{visibility:visible!important}.noticejs .error .noticejs-content{visibility:visible}.noticejs .progressbar{width:100%}.noticejs .progressbar .bar{width:1%;height:30px;background-color:#4caf50}.noticejs .success .noticejs-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.noticejs .success .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#3da95c}.noticejs .info .noticejs-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.noticejs .info .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#067cea}.noticejs .warning .noticejs-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}.noticejs .warning .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#f44e06}.noticejs .error .noticejs-progressbar{width:100%;background-color:#e74c3c;margin-top:-1px}.noticejs .error .noticejs-progressbar .noticejs-bar{width:100%;height:5px;background:#ba2c1d}@keyframes noticejs-fadeOut{0%{opacity:1}to{opacity:0}}.noticejs-fadeOut{animation-name:noticejs-fadeOut}@keyframes noticejs-modal-in{to{opacity:.3}}@keyframes noticejs-modal-out{to{opacity:0}}.noticejs{position:fixed;z-index:10050}.noticejs ::-webkit-scrollbar{width:8px}.noticejs ::-webkit-scrollbar-button{width:8px;height:5px}.noticejs ::-webkit-scrollbar-track{border-radius:10px}.noticejs ::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.5);border-radius:10px}.noticejs ::-webkit-scrollbar-thumb:hover{background:#fff}.noticejs-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:10000;opacity:.3;left:0;top:0}.noticejs-modal-open{opacity:0;animation:noticejs-modal-in .3s ease-out}.noticejs-modal-close{animation:noticejs-modal-out .3s ease-out;animation-fill-mode:forwards}.${defCon.rName}{padding:2px!important}.${defCon.rName} dl{margin:0!important;padding:1px!important}.${defCon.rName} dl dt{margin:2px 0 6px 0!important;font-size:16px!important;font-weight:900!important}.${defCon.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${defCon.rName} .center{width:100%;text-align:center!important}.${defCon.rName} dl dd em{color:#fff;font-family:Candara,sans-serif!important;font-size:24px!important;padding:0 5px}.${defCon.rName} dl dd span{font-weight:700;font-size:15px!important;margin-right:8px}.${defCon.rName} dl dd i{font-family:Candara,sans-serif!important;font-size:20px!important}.${defCon.rName} dl dd .im{color:gold;font-size:16px;font-weight:900;padding:0 3px}.${defCon.rName} ul{width:90%;display:inline-block;text-align:left;vertical-align:top;color:rgba(255, 255, 255, 0.5);padding:0.2em;margin:0 0 0 1em;counter-reset:xxx 0}.${defCon.rName} li{list-style:none;font-style:italic!important;position:relative;padding:0 0 0 0.1em;margin:0 0 0 2px;-webkit-transition:.12s;transition:.12s}.${defCon.rName} li::before{content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-family:'Roboto Condensed';font-size:1em;display:inline-block;width:1.5em;margin-left:-1.5em;-webkit-transition:.5s;transition:.5s}.${defCon.rName} .disappear{display:none}`,
    };

    let curretSite = {
      SiteTypeID: 0,
      SiteName: "",
      SplitName: "",
      MainType: "",
      HtmlCode: "",
      StyleType: "",
    };

    const listSite = {
      baidu: {
        SiteTypeID: 1,
        SiteName: "Baidu",
        SplitName: "tn",
        MainType: ".s_btn_wr",
        HtmlCode: CONST.isUseBing
          ? String(`
            <span id="${CONST.ggyx}">
                <input type="button" title="Google一下" value="Google"/>
            </span>
            <span id="${CONST.bbyx}">
                <input type="button" title="Bing一下" value="Bing ®"/>
            </span>`)
          : String(`
            <span id="${CONST.ggyx}">
                <input type="button" title="Google一下" value="Google一下"/>
            </span>`),
        StyleCode: CONST.isUseBing
          ? `#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndidName} #${CONST.bbyx}{margin-left:-1.5px}#${CONST.rndidName} #${CONST.ggyx}{margin-left:2px}#${CONST.bbyx} input{background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#fff;width:80px;border:1px solid #3476d2;font-size:16px;font-weight:bold}#${CONST.ggyx} input{background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#fff;width:80px;border:1px solid #3476d2;font-size:16px;font-weight:bold}#${CONST.ggyx} input:hover,#${CONST.bbyx} input:hover{background: #4662D9;border:1px solid #3476d2}`
          : `#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndidName}{margin-left:6px}#${CONST.ggyx} input{background:#4e6ef2;border-radius:10px;cursor:pointer;height:40px;color:#fff;width:112px;border:1px solid #3476d2;text-shadow:0 0 2px #ffffff!important;font-size:16px}#${CONST.ggyx} input:hover{background:#4662D9;border:1px solid #3476d2;}`,
      },
      google: {
        SiteTypeID: 2,
        SiteName: "Google",
        SplitName: "tbm",
        MainType: "form button[type='submit']",
        HtmlCode: CONST.isUseBing
          ? String(`
            <span id="${CONST.bdyx}">
                <input type="button" title="百度一下" value="百度一下"/>
            </span>
            <span id="${CONST.bbyx}">
                <input type="button" title="Bing一下" value="Bing一下"/>
            </span>`)
          : String(`
            <span id="${CONST.bdyx}">
                <input type="button" title="百度一下" value="百度一下"/>
            </span>`),
        StyleCode: CONST.isUseBing
          ? `#${CONST.rndidName}{margin:3px 4px 0 -5px}#${CONST.rndidName} #${CONST.bdyx}{padding:5px 0 4px 18px;border-left:1px solid #ddd;}#${CONST.rndidName} #${CONST.bbyx}{margin-left:-2px}.scrollspan{display:block;margin: 3px 3px 0 0}.scrollbars{height:26px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #ffffff!important}.scrollbars2{display:inline-block;margin-top:-3px;height:30px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #ffffff!important}#${CONST.bdyx} input{cursor:pointer;padding:1px 1px 1px 6px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bbyx} input{cursor:pointer;padding:1px 6px 1px 1px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bdyx} input:hover,#${CONST.bbyx} input:hover{background:#2b7de9;}`
          : `#${CONST.rndidName}{margin:3px 4px 0 -5px}#${CONST.rndidName} #${CONST.bdyx}{padding:5px 0 4px 18px;border-left:1px solid #ddd}.scrollspan{display:block;margin:3px 3px 0 0}.scrollbars{height:26px!important;font-size:13px!important;font-weight:normal!important; text-shadow:0 0 1px #fff!important}.scrollbars2{display:inline-block;margin-top:-3px;height:30px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #fff!important}#${CONST.bdyx} input{cursor:pointer;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-radius:24px;width:90px;height:38px;font-size:14px;font-weight:600;color:#fff;}#${CONST.bdyx} input:hover{background:#2b7de9;}`,
      },
      bing: {
        SiteTypeID: 3,
        SiteName: "Bing",
        SplitName: "",
        MainType: "#sb_go_par",
        HtmlCode: CONST.isUseBing
          ? String(`
          <span id="${CONST.bdyx}">
              <input type="button" title="百度一下" value="百度"/>
          </span>
          <span id="${CONST.ggyx}">
              <input type="button" title="Google一下" value="Google"/>
          </span>`)
          : ``,
        StyleCode: CONST.isUseBing
          ? `#${CONST.rndidName}{height:44px;width:120px;margin:2px 5px 2px 0}#${CONST.bdyx} input,#${CONST.ggyx} input{cursor:pointer;width:auto 60px;height:40px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;margin-left:-1px;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px;font-weight:700;border-radius:4px}.scrollspan{height:32px!important}.scrollbars{height:30px!important;padding:4px}#${CONST.bdyx} input:hover,#${CONST.ggyx} input:hover{background-color:#fff;transition:border linear .1s,box-shadow linear .3s;box-shadow:1px 1px 8px #08748D;border:2px solid #0095B7;text-shadow:0 0 1px #0095B7!important;color:#0095B7;}`
          : ``,
      },
      other: { SiteTypeID: 0 },
    };

    const newSiteType = {
      BAIDU: listSite.baidu.SiteTypeID,
      GOOGLE: listSite.google.SiteTypeID,
      BING: listSite.bing.SiteTypeID,
      OTHERS: 0,
    };

    debug("//-> initialized complete, start running...");

    if (location.host.includes(".baidu.com")) {
      // Includes baidu
      curretSite = listSite.baidu;
    } else if (location.host.includes(".bing.com")) {
      // Includes bing
      curretSite = listSite.bing;
    } else if (/^([0-9a-z-]+\.)?google(\.[a-z]{2,3}){1,3}$/.test(location.host)) {
      // Regular google
      curretSite = listSite.google;
    } else {
      curretSite = listSite.other;
    }

    CONST.vim = GetUrlParam(curretSite.SplitName);

    if (
      (curretSite.SiteTypeID === newSiteType.GOOGLE && /^(lcl|flm|fin)$/.test(CONST.vim)) ||
      (curretSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(CONST.vim)) ||
      (curretSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch|baiduimagedetail)$/.test(CONST.vim))
    ) {
      CONST.isSecurityPolicy = true;
    }

    /* insert Menus */

    let menuManager = {
      inUse_switch: (_status, Name, Tips) => {
        const info = x => {
          return defCon.noticeHTML(`<dd class="center">${Tips}已<kbd class="im">${x}</kbd>，网页在<em>3</em>秒后刷新！</dd>`);
        };
        if (_status) {
          GMsetValue(`${Name}`, 0);
          GMnotification(info("\u6e05\u9664"), "info", true, 30, callback_Countdown);
        } else {
          GMsetValue(`${Name}`, 1);
          GMnotification(info("\u6dfb\u52a0"), "info", true, 30, callback_Countdown);
        }
      },

      menuRemove: t => {
        t ? GMunregisterMenuCommand(t) : debug("//-> menuRemove() not found item: %s.", typeof t);
      },

      registerMenuCommand: function (e) {
        let yet, _Use_Bing__;
        let _use_Bing_ID, in_Use_feedBack_ID, in_UpdateCheck_ID;

        // Remove menus if the menus exists.
        this.menuRemove(_use_Bing_ID);
        this.menuRemove(in_Use_feedBack_ID);
        this.menuRemove(in_UpdateCheck_ID);

        e ? (_Use_Bing__ = "\ufff0\u2705【已开启】") : (_Use_Bing__ = "\ufff0\u274c【已关闭】");

        _use_Bing_ID = GMregisterMenuCommand(`${_Use_Bing__}Bing 搜索跳转`, () => {
          if (!yet) {
            this.inUse_switch(e, "_if_Use_Bing_", "Bing 按钮");
            yet = true;
          }
        });
        // "false" is disabled forever.
        if (isVersionDetection) {
          // check VDR value to insert menu.
          if (CONST.isVDResult) {
            if (defCon._expireTime === _expireTime) {
              in_UpdateCheck_ID = GMregisterMenuCommand(`\ufff5\ud83d\udd0e【版本更新】手动实时检查`, () => {
                // Destroy cache before manual check.
                GMdeleteValue("_Check_Version_Expire_");
                checkVersion(true);
              });
            } else {
              if (_expireTime !== "4h") {
                in_UpdateCheck_ID = GMregisterMenuCommand(
                  `\ufff5\ud83d\udd17【变更缓存时间】${defCon.showDate(defCon._expireTime)} \u27a4 ${defCon.showDate(_expireTime)}`,
                  () => {
                    // Destroy cache before change expireTime.
                    GMdeleteValue("_Check_Version_Expire_");
                    GMsetValue("_expire_time_", _expireTime);
                    GMnotification(
                      defCon.noticeHTML(
                        `<dd class="center">缓存时间设定为<kbd class="im">${defCon.showDate(_expireTime)}</kbd>，网页在<em>3</em>秒后刷新！</dd>`
                      ),
                      "info",
                      true,
                      30,
                      callback_Countdown
                    );
                  }
                );
              } else {
                in_UpdateCheck_ID = GMregisterMenuCommand(`\ufff5\ud83e\uddf2【重置缓存】检查更新 ( 重置为 ${defCon.showDate(_expireTime)} )`, () => {
                  // Destroy cache & session before change expireTime.
                  GMdeleteValue("_Check_Version_Expire_");
                  GMdeleteValue("_expire_time_");
                  sessionStorage.setItem("nCount", 0);
                  checkVersion(false);
                  if (!defCon.isNeedUpdate) {
                    GMnotification(
                      defCon.noticeHTML(
                        `<dd class="center">缓存时间重置为<kbd class="im">${defCon.showDate(_expireTime)}</kbd>，网页在<em>3</em>秒后刷新！</dd>`
                      ),
                      "info",
                      true,
                      30,
                      callback_Countdown
                    );
                  }
                });
              }
            }
          } else {
            in_UpdateCheck_ID = GMregisterMenuCommand("\ufff5\ud83d\udcdb【版本更新】已关闭 \u267b 重新开启", () => {
              GMsetValue("_is_Ver_Det_", true);
              // Destroy cache & session when restart detection.
              GMdeleteValue("_Check_Version_Expire_");
              sessionStorage.removeItem("nCount");
              debug("//-> Destroy cache & session when restart detection.");
              GMnotification(
                defCon.noticeHTML(`<dd class="center">更新检测已<kbd class="im">开启</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
                "info",
                true,
                30,
                callback_Countdown
              );
            });
          }
        }
        in_Use_feedBack_ID = GMregisterMenuCommand("\ufff9\ud83e\udde1【建议反馈】说出您的意见！", () => {
          GMopenInTab(`${defCon.support ? defCon.support : "https://greasyfork.org/scripts/12909/feedback"}`, {
            active: true,
            insert: true,
            setParent: true,
          });
        });
      },

      menuDisplay: function () {
        // disabled menus if set SecurityPolicy.
        if (!CONST.isSecurityPolicy) {
          safeFunction(() => {
            this.registerMenuCommand(CONST.isUseBing);
          });
        }
        console.log(
          "%c[GB-Status]%c\nInsert the Bing Search Button: %c%s",
          "font-weight:bold;color:darkorange",
          "color:0",
          "font-weight:bold;color:red",
          defCon.titleCase(CONST.isUseBing && !CONST.isSecurityPolicy)
        );
      },

      init: function () {
        this.menuDisplay();
      },
    };

    /* Insert search Button */

    let searchManager = {
      insertSearchButton: function () {
        try {
          const getTarget = curretSite.MainType;
          const doHtml = curretSite.HtmlCode;
          const doStyName = `${CONST.rndclassName}`;
          const doStyle = CONST.noticeCss + curretSite.StyleCode;
          const indexPage = location.pathname === "/";
          const userSpan = document.createElement("span");
          userSpan.id = `${CONST.rndidName}`;
          userSpan.innerHTML = doHtml;
          const SpanID = `#${userSpan.id}`;
          let Target = document.querySelector(getTarget);

          addStyle(doStyle, doStyName, "head");

          if (!document.querySelector(SpanID) && getSearchValue() && !indexPage && Target) {
            if (/^(nws|vid|bks)$/.test(CONST.vim.trim())) {
              Target = Target.parentNode.parentNode.firstChild;
              Target.insertBefore(userSpan, Target.firstChild);
              if (document.querySelector(SpanID)) {
                document.querySelector(SpanID).setAttribute("style", "float:right");
              }
            } else {
              insterAfter(userSpan, Target);
              // Baidu image fixed
              if (document.querySelector(SpanID) && /^baiduimage$/.test(CONST.vim.trim())) {
                document.querySelector(SpanID).setAttribute("style", "margin-left:12px");
              }
              // Bing image fixed
              if (document.querySelector(".b_searchboxForm") && /^images$/.test(CONST.vim.trim())) {
                if (location.href.includes("view=detailV2") && CONST.isUseBing) {
                  document.querySelector(".b_searchboxForm").setAttribute("style", "width:122.5%!important");
                  document.querySelectorAll(`#${CONST.rndidName} input`).forEach(item => {
                    item.style = "height:35px!important";
                  });
                }
              }
            }

            debug(`//-> searchManager $(Target): ${Target}`);

            document.querySelectorAll(`#${CONST.ggyx}, #${CONST.bbyx}, #${CONST.bdyx}`).forEach(per => {
              per.addEventListener("click", () => {
                let gotoUrl = "about:blank";
                switch (per.id) {
                  case `${CONST.ggyx}`:
                    if (/^(baiduimage|images)$/.test(CONST.vim.trim())) {
                      gotoUrl = "https://www.google.com/search?hl=zh-CN&source=lnms&tbm=isch&sa=X&q=";
                    } else {
                      gotoUrl = "https://www.google.com/search?hl=zh-CN&source=hp&newwindow=1&q=";
                    }
                    break;
                  case `${CONST.bbyx}`:
                    if (/^(isch|baiduimage)$/.test(CONST.vim.trim())) {
                      gotoUrl = "https://cn.bing.com/images/search?first=1&tsc=ImageBasicHover&q=";
                    } else {
                      gotoUrl = "https://cn.bing.com/search?q=";
                    }
                    break;
                  case `${CONST.bdyx}`:
                    if (/^(images|isch)$/.test(CONST.vim.trim())) {
                      gotoUrl = "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=";
                    } else {
                      gotoUrl = "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=";
                    }
                    break;
                  default:
                    break;
                }
                GMopenInTab(decodeURI(gotoUrl + getSearchValue()), {
                  active: true,
                  insert: true,
                  setParent: true,
                });
              });
            });
          }
          return true;
        } catch (e) {
          error("//-> %csearchManager.insertSearchButton:\n%c%s", "font-weight:bold", "font-weight:normal", e);
          return false;
        }
      },

      scrollDetect: function () {
        let scrollbars, height, e;
        switch (curretSite.SiteTypeID) {
          case newSiteType.GOOGLE:
            // Google image fixed
            e = /^isch$/.test(CONST.vim.trim());
            e ? (scrollbars = "scrollbars2") : (scrollbars = "scrollbars");
            e ? (height = -14) : (height = 35);
            scrollButton(`#${CONST.rndidName}`, "scrollspan", height);
            scrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, scrollbars, height);
            if (CONST.isUseBing) {
              scrollButton(`#${CONST.rndidName} #${CONST.bbyx} input`, scrollbars, height);
            }
            break;
          case newSiteType.BING:
            if (/^(images|videos)$/.test(CONST.vim.trim()) && CONST.isUseBing) {
              scrollButton(`#${CONST.rndidName}`, "scrollspan", 50);
              scrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, "scrollbars", 50);
              scrollButton(`#${CONST.rndidName} #${CONST.ggyx} input`, "scrollbars", 50);
            } else {
              debug(`//-> No scrolling detecting.`);
            }
            break;
          default:
            debug(`//-> No scrolling detecting.`);
            break;
        }
        return true;
      },

      RAF: function () {
        RAFInterval(
          () => {
            if (!document.querySelector(`#${CONST.rndidName}`) || !document.querySelector(`.${CONST.rndclassName}`)) {
              return this.insertSearchButton() && this.scrollDetect();
            }
          },
          200,
          true
        );
      },

      doSwitch: function () {
        try {
          if (curretSite.SiteTypeID !== newSiteType.OTHERS) {
            if (CONST.isSecurityPolicy) {
              console.log(
                "%c[GB-Prohibit]%c\nBlocked By: %c%s Security Policy",
                "font-weight:bold;color:indigo",
                "color:0",
                "font-weight:bold;color:darkred",
                curretSite.SiteName
              );
              return;
            } else {
              const callback = mutations => {
                mutations.forEach(mutation => {
                  if (document.querySelector(`.${CONST.rndclassName}`) && document.querySelector(`#${CONST.rndidName}`)) {
                    debug(`//-> Already Insert Button & CSS.`);
                  } else {
                    debug(
                      "%c[GB-MutationObserver]\n%c(%c%s%c has changed: %c%s%c)",
                      "font-weight:bold;color:olive",
                      "color:0",
                      "color:olive",
                      mutation.type,
                      "color:0",
                      "font-weight:bold;color:red",
                      defCon.titleCase(!(this.RAF() instanceof Object)),
                      "color:0"
                    );
                  }
                });
              };
              const opts = { childList: true, subtree: true };
              let observer = new MutationObserver(callback);
              observer.observe(document, opts);
              console.log(
                "%c[GB-Switch]%c\nWe are using The %c%s%c Search Engine.",
                "font-weight:bold;color:Green",
                "color:0",
                "font-weight:bold;color:darkcyan",
                curretSite.SiteName,
                "font-weight:normal;color:0"
              );
            }
          }
        } catch (e) {
          error("//-> %csearchManager.doSwitch:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      init: function () {
        this.doSwitch();
      },
    };

    /* important functions */

    function scrollButton(paraName, classNameIn, scrollSize) {
      debug(`//-> ${curretSite.SiteName} Scrolling Detecting: ${paraName}`);
      const oDiv = document.querySelector(paraName);
      let H = 0;
      let Y = oDiv;
      if (Y !== null) {
        while (Y) {
          H += Y.offsetTop;
          Y = Y.offsetParent;
        }
        document.addEventListener("scroll", () => {
          const s = document.body.scrollTop || document.documentElement.scrollTop;
          debug(`//-> H=${H} S=${s} (${s - H})`);
          if (s > H + scrollSize) {
            oDiv.setAttribute("class", classNameIn);
          } else {
            oDiv.removeAttribute("class");
          }
        });
      }
    }

    function insterAfter(newElement, targetElement) {
      if (targetElement !== null) {
        const parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
          parent.appendChild(newElement);
        } else {
          parent.insertBefore(newElement, targetElement.nextSibling);
        }
      }
    }

    function addStyle(css, className, addToTarget, isReload, initType) {
      RAFInterval(
        () => {
          try {
            let addTo = document.querySelector(addToTarget);
            if (typeof addToTarget === "undefined") {
              addTo = document.head || document.body || document.documentElement || document;
            }
            isReload = isReload || false;
            initType = initType || "text/css";
            if (typeof addToTarget === "undefined" || (typeof addToTarget !== "undefined" && document.querySelector(addToTarget))) {
              if (isReload === true) {
                safeRemove(`.${className}`);
              } else if (isReload === false && document.querySelector(`.${className}`)) {
                return true;
              }
              const cssNode = document.createElement("style");
              if (className !== null) {
                cssNode.className = className;
              }
              cssNode.setAttribute("type", initType);
              cssNode.innerHTML = css;
              addTo.appendChild(cssNode);
            }
            return true;
          } catch (e) {
            error("//-> %caddStyle:\n%c%s", "font-weight:bold", "font-weight:normal", e);
            return false;
          }
        },
        20,
        true
      );
    }

    function safeRemove(Css) {
      safeFunction(() => {
        const removeNodes = document.querySelectorAll(Css);
        for (let i = 0; i < removeNodes.length; i++) {
          removeNodes[i].remove();
        }
      });
    }

    function getSearchValue(val) {
      document.querySelectorAll('input[name="wd"], input[name="q"], input[name="word"]').forEach((item, index, arr) => {
        val = arr[0].value;
        if (val) {
          debug(`//-> INPUT: ${val} - INDEX: ${index} - OLD: ${item.value}`);
        }
      });
      if (val === null || val === "" || typeof val === "undefined") {
        const kvl = location.search.substr(1).split("&");
        if (kvl) {
          for (let i = 0; i < kvl.length; i++) {
            let value = kvl[i].replace(/^(wd|word|kw|query|q)=/, "");
            if (value !== kvl[i]) {
              val = value;
            }
          }
          if (val) {
            val = val.replace(/\+/g, " ");
            debug(`//-> QUERY: ${val}`);
          } else {
            val = "";
            error(`//-> QUERY is null`);
          }
        } else {
          return "";
        }
      }
      return encodeURIComponent(val);
    }

    function RAFInterval(callback, period, runNow) {
      const needCount = (period / 1000) * 60;
      let times = 0;
      if (runNow === true) {
        const shouldFinish = callback();
        if (shouldFinish) {
          return;
        }
      }

      function step() {
        if (times < needCount) {
          times++;
          requestAnimationFrame(step);
        } else {
          const shouldFinish = callback() || false;
          if (!shouldFinish) {
            times = 0;
            requestAnimationFrame(step);
          } else {
            return;
          }
        }
      }
      requestAnimationFrame(step);
    }

    /* Refactoring NoticeJs Functions */

    (function (q, d) {
      typeof exports === "object" && typeof module === "object"
        ? (window.module.exports = d())
        : typeof define === "function" && window.define.amd
        ? window.define("NoticeJs", [], d)
        : typeof exports === "object"
        ? (window.exports.NoticeJs = d())
        : (q.NoticeJs = d());
    })("undefined" !== typeof self ? self : this, function () {
      return (function (q) {
        let m = {};
        function d(g) {
          if (m[g]) {
            return m[g].exports;
          }
          let l = (m[g] = {
            i: g,
            l: !1,
            exports: {},
          });
          q[g].call(l.exports, l, l.exports, d);
          l.l = !0;
          return l.exports;
        }
        d.m = q;
        d.c = m;
        d.d = function (g, l, f) {
          d.o(g, l) ||
            Object.defineProperty(g, l, {
              configurable: !1,
              enumerable: !0,
              get: f,
            });
        };
        d.n = function (g) {
          let l =
            g && g.__esModule
              ? function () {
                  return g.default;
                }
              : function () {
                  return g;
                };
          d.d(l, "a", l);
          return l;
        };
        d.o = function (g, l) {
          return Object.prototype.hasOwnProperty.call(g, l);
        };
        d.p = "dist/";
        return d((d.s = 2));
      })([
        function (q, d, m) {
          Object.defineProperty(d, "__esModule", { value: !0 });
          d.noticeJsModalClassName = "noticejs-modal";
          d.closeAnimation = "noticejs-fadeOut";
          d.Defaults = {
            title: "",
            text: "",
            type: "success",
            position: "bottomRight",
            newestOnTop: !1,
            timeout: 30,
            progressBar: !0,
            indeterminate: !1,
            closeWith: ["button"],
            animation: {
              open: "animated fadeIn",
              close: "animated fadeOut",
            },
            modal: !1,
            width: 400,
            scroll: {
              maxHeightContent: 400,
              showOnHover: !0,
            },
            rtl: !1,
            callbacks: {
              beforeShow: [],
              onShow: [],
              afterShow: [],
              onClose: [],
              afterClose: [],
              onClick: [],
              onHover: [],
              onTemplate: [],
            },
          };
        },
        function (q, d, m) {
          function g(a, b) {
            a.callbacks.hasOwnProperty(b) &&
              a.callbacks[b].forEach(function (c) {
                typeof c === "function" && c.apply(a);
              });
          }
          Object.defineProperty(d, "__esModule", { value: !0 });
          d.appendNoticeJs = d.addListener = d.CloseItem = d.AddModal = void 0;
          d.getCallback = g;
          let l = (function (a) {
            if (a && a.__esModule) {
              return a;
            }
            let b = {};
            if (null !== a) {
              for (let c in a) {
                Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
              }
            }
            b.default = a;
            return b;
          })(m(0));
          let f = l.Defaults;
          let h = (d.AddModal = function () {
            if (0 >= document.getElementsByClassName(l.noticeJsModalClassName).length) {
              let a = document.createElement("div");
              a.classList.add(l.noticeJsModalClassName);
              a.classList.add("noticejs-modal-open");
              document.body.appendChild(a);
              setTimeout(function () {
                a.className = l.noticeJsModalClassName;
              }, 200);
            }
          });
          let n = (d.CloseItem = function (a) {
            g(f, "onClose");
            null !== f.animation && null !== f.animation.close && (a.className += " " + f.animation.close);
            setTimeout(function () {
              a.remove();
            }, 200);
            !0 === f.modal &&
              1 <= document.querySelectorAll("[noticejs-modal='true']").length &&
              ((document.querySelector(".noticejs-modal").className += " noticejs-modal-close"),
              setTimeout(function () {
                document.querySelector(".noticejs-modal").remove();
              }, 500));
            let b = a.closest(".noticejs");
            let c = b ? "." + b.className.replace("noticejs", "").trim() : ".null";
            setTimeout(function () {
              0 >= document.querySelectorAll(c + " .item").length && document.querySelector(c) && document.querySelector(c).remove();
            }, 500);
          });
          let e = (d.addListener = function (a) {
            f.closeWith.includes("button") &&
              a.querySelector(".close").addEventListener("click", function () {
                n(a);
              });
            f.closeWith.includes("click")
              ? ((a.style.cursor = "pointer"),
                a.addEventListener("click", function (b) {
                  "close" !== b.target.className && (g(f, "onClick"), n(a));
                }))
              : a.addEventListener("click", function (b) {
                  "close" !== b.target.className && g(f, "onClick");
                });
            a.addEventListener("mouseover", function () {
              g(f, "onHover");
            });
          });
          d.appendNoticeJs = function (a, b, c) {
            let p = ".noticejs-" + f.position;
            let k = document.createElement("div");
            k.classList.add("item");
            k.classList.add(f.type);
            !0 === f.rtl && k.classList.add("noticejs-rtl");
            "" !== f.width && Number.isInteger(f.width) && (k.style.width = f.width + "px");
            a && "" !== a && k.appendChild(a);
            k.appendChild(b);
            c && "" !== c && k.appendChild(c);
            ["top", "bottom"].includes(f.position) && (document.querySelector(p).innerHTML = "");
            null !== f.animation && null !== f.animation.open && (k.className += " " + f.animation.open);
            !0 === f.modal && (k.setAttribute("noticejs-modal", "true"), h());
            e(k, f.closeWith);
            g(f, "beforeShow");
            g(f, "onShow");
            !0 === f.newestOnTop ? document.querySelector(p).insertAdjacentElement("afterbegin", k) : document.querySelector(p).appendChild(k);
            g(f, "afterShow");
            return k;
          };
        },
        function (q, d, m) {
          function g(a) {
            if (a && a.__esModule) {
              return a;
            }
            let b = {};
            if (null !== a) {
              for (let c in a) {
                Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
              }
            }
            b.default = a;
            return b;
          }
          Object.defineProperty(d, "__esModule", { value: !0 });
          let l = (function () {
            function a(b, c) {
              for (let p = 0; p < c.length; p++) {
                let k = c[p];
                k.enumerable = k.enumerable || !1;
                k.configurable = !0;
                "value" in k && (k.writable = !0);
                Object.defineProperty(b, k.key, k);
              }
            }
            return function (b, c, p) {
              c && a(b.prototype, c);
              p && a(b, p);
              return b;
            };
          })();
          m(3);
          let f = m(0);
          let h = g(f);
          let n = m(4);
          m = m(1);
          let e = g(m);
          m = (function () {
            class a {
              constructor() {
                let b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (!(this instanceof a)) {
                  throw new TypeError("Cannot call a class as a function");
                }
                this.options = Object.assign(h.Defaults, b);
                this.component = new n.Components();
                this.id = "noticejs-" + Math.random();
                this.on("beforeShow", this.options.callbacks.beforeShow);
                this.on("onShow", this.options.callbacks.onShow);
                this.on("afterShow", this.options.callbacks.afterShow);
                this.on("onClose", this.options.callbacks.onClose);
                this.on("afterClose", this.options.callbacks.afterClose);
                this.on("onClick", this.options.callbacks.onClick);
                this.on("onHover", this.options.callbacks.onHover);
              }
            }
            l(
              a,
              [
                {
                  key: "show",
                  value: function () {
                    let b = this.component.createContainer();
                    document.querySelector(".noticejs-" + this.options.position) === null && document.body.appendChild(b);
                    let c = void 0;
                    b = this.component.createHeader(this.options.title, this.options.closeWith);
                    let p = this.component.createBody(this.options.text);
                    !0 === this.options.progressBar && (c = this.component.createProgressBar());
                    b = e.appendNoticeJs(b, p, c);
                    b.setAttribute("id", this.id);
                    return (this.dom = b);
                  },
                },
                {
                  key: "on",
                  value: function (b) {
                    let c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {};
                    typeof c === "function" && this.options.callbacks.hasOwnProperty(b) && this.options.callbacks[b].push(c);
                    return this;
                  },
                },
                {
                  key: "close",
                  value: function () {
                    e.CloseItem(this.dom);
                  },
                },
              ],
              [
                {
                  key: "overrideDefaults",
                  value: function (b) {
                    this.options = Object.assign(h.Defaults, b);
                    return this;
                  },
                },
              ]
            );
            return a;
          })();
          d.default = m;
          q.exports = d.default;
        },
        function (q, d) {},
        function (q, d, m) {
          function g(n) {
            if (n && n.__esModule) {
              return n;
            }
            let e = {};
            if (n === null) {
              for (let a in n) {
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
            }
            e.default = n;
            return e;
          }
          Object.defineProperty(d, "__esModule", { value: !0 });
          d.Components = void 0;
          let l = (function () {
            function n(e, a) {
              for (let b = 0; b < a.length; b++) {
                let c = a[b];
                c.enumerable = c.enumerable || !1;
                c.configurable = !0;
                "value" in c && (c.writable = !0);
                Object.defineProperty(e, c.key, c);
              }
            }
            return function (e, a, b) {
              a && n(e.prototype, a);
              b && n(e, b);
              return e;
            };
          })();
          q = m(0);
          q = g(q);
          m = m(1);
          let f = g(m);
          let h = q.Defaults;
          d.Components = (function () {
            function n() {
              if (!(this instanceof n)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            l(n, [
              {
                key: "createContainer",
                value: function () {
                  let e = "noticejs-" + h.position;
                  let a = document.createElement("div");
                  a.classList.add("noticejs");
                  a.classList.add(e);
                  return a;
                },
              },
              {
                key: "createHeader",
                value: function () {
                  let e = void 0;
                  h.title &&
                    "" !== h.title &&
                    ((e = document.createElement("div")), e.setAttribute("class", "noticejs-heading"), (e.textContent = h.title));
                  if (h.closeWith.includes("button")) {
                    let a = document.createElement("div");
                    a.setAttribute("class", "close");
                    a.innerHTML = "&times;";
                    e ? e.appendChild(a) : (e = a);
                  }
                  return e;
                },
              },
              {
                key: "createBody",
                value: function () {
                  let e = document.createElement("div");
                  e.setAttribute("class", "noticejs-body");
                  let a = document.createElement("div");
                  a.setAttribute("class", "noticejs-content");
                  a.innerHTML = h.text;
                  e.appendChild(a);
                  null !== h.scroll &&
                    "" !== h.scroll.maxHeight &&
                    ((e.style.overflowY = "auto"),
                    (e.style.maxHeight = h.scroll.maxHeight + "px"),
                    !0 === h.scroll.showOnHover && (e.style.visibility = "hidden"));
                  return e;
                },
              },
              {
                key: "createProgressBar",
                value: function () {
                  let e = document.createElement("div");
                  e.setAttribute("class", "noticejs-progressbar");
                  let a = document.createElement("div");
                  a.setAttribute("class", "noticejs-bar");
                  e.appendChild(a);
                  let b = 100;
                  let c = 0;
                  let p = 0;
                  let k = "";
                  if (!0 === h.progressBar && "boolean" !== typeof h.timeout && !1 !== h.timeout) {
                    let u = function () {
                      if (0 >= b) {
                        clearInterval(p);
                        let r = e.closest("div.item");
                        if (null !== h.animation && null !== h.animation.close) {
                          r.className = r.className.replace(new RegExp("(?:^|\\s)" + h.animation.open + "(?:\\s|$)"), " ");
                          r.className += " " + h.animation.close;
                          let t = parseInt(h.timeout) + 500;
                          setTimeout(function () {
                            f.CloseItem(r);
                          }, t);
                        } else {
                          f.CloseItem(r);
                        }
                      } else {
                        b--;
                        a.style.width = b + "%";
                      }
                    };
                    let v = function () {
                      c === 0 ? (b--, b === 0 && (c = 1)) : (b++, b === 100 && (c = 0));
                      document.getElementById(k) === null ? clearInterval(p) : (a.style.width = b + "%");
                    };
                    !0 === h.indeterminate
                      ? ((p = setInterval(v, h.timeout)), (k = "noticejs-progressbar-" + p), e.setAttribute("id", k))
                      : (p = setInterval(u, h.timeout));
                  }
                  return e;
                },
              },
            ]);
            return n;
          })();
        },
      ]);
    });

    /* Let`s enjoy it! */

    !(function () {
      try {
        debug("//-> Insert Ext Menu.");
        menuManager.init();
        debug("//-> Insert Search Button.");
        searchManager.init();
      } catch (e) {
        console.error("%c[GB-Error]%c\n%s", "font-weight:bold;color:red", "font-weight:bold;color:darkred", e);
      } finally {
        if (isVersionDetection && !CONST.isVDResult) {
          debug("//-> Ready to Insert Random Tips.");
          if (Math.floor(Math.random() * 20) > 18) {
            setTimeout(function () {
              GMnotification(
                defCon.noticeHTML(
                  `<dd title="随机提示">若要恢复自动更新功能，请在覆盖安装新代码后,\
                  从脚本菜单中重新开启"版本更新"功能。</dd><dd class="center" title="随机提示">\
                  <img src="https://i.niupic.com/images/2021/06/13/9kVe.png" alt="开启自动检测"></dd>`
                ),
                "info",
                true,
                80
              );
            }, Math.random() * 10e3);
          }
        }
      }
    })();
  })();
})();
