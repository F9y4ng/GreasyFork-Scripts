/* jshint esversion: 9 */
// ==UserScript==
// @name            Google & baidu Switcher (ALL in One)
// @name:en         Google & baidu & Bing Switcher (ALL in One)
// @name:zh         谷歌、百度、必应的搜索引擎跳转工具
// @name:zh-TW      谷歌、百度、必應的搜索引擎跳轉工具
// @version         3.6.20210814.1
// @author          F9y4ng
// @description         谷歌、百度、必应的搜索引擎跳转工具，脚本默认自动更新检测，可在菜单自定义设置必应按钮，搜索引擎跳转的最佳体验。
// @description:en      Google, Baidu and Bing search engine tool, Automatically updated and detected by default, The Bing button can be customized.
// @description:zh      谷歌、百度、必应的搜索引擎跳转工具，脚本默认自动更新检测，可在菜单自定义设置必应按钮，搜索引擎跳转的最佳体验。
// @description:zh-TW   谷歌、百度、必應的搜索引擎跳轉工具，腳本默認自動更新檢測，可在菜單自定義設置必應按鈕，搜索引擎跳轉的最佳體驗。
// @namespace       https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @homepageURL     https://github.com/F9y4ng/GreasyFork-Scripts
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @icon            https://img.icons8.com/fluent/48/000000/google-logo.png
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
// @compatible      edge 兼容TamperMonkey, ViolentMonkey
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey4.0+, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @note            发布Release版本。\n修正bugs，优化代码。
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM.registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_openInTab
// @grant           GM.openInTab
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

  const isdebug = false; // set "true" to debug scripts, May cause script response slower.

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
      const RegExp = bool ? /( |^)[a-z]/g : /(^)[a-z]/g;
      return str
        .toString()
        .toLowerCase()
        .replace(RegExp, L => {
          return L.toUpperCase();
        });
    },
    isNeedUpdate: 0,
    updateNote: "",
    restTime: 0,
    _option: isGM ? false : { active: true, insert: true, setParent: true },
    durationTime: t => {
      let w, d, h, m, s;
      const wks = Math.floor(t / 1000 / 60 / 60 / 24 / 7);
      const ds = Math.floor(t / 1000 / 60 / 60 / 24 - wks * 7);
      const hs = Math.floor(t / 1000 / 60 / 60 - wks * 7 * 24 - ds * 24);
      const ms = Math.floor(t / 1000 / 60 - wks * 7 * 24 * 60 - ds * 24 * 60 - hs * 60);
      const ss = Math.floor(t / 1000 - wks * 7 * 24 * 60 * 60 - ds * 24 * 60 * 60 - hs * 60 * 60 - ms * 60);
      w = wks > 0 ? ` ${wks}wk` : "";
      d = ds > 0 ? ` ${ds}d` : "";
      h = hs > 0 ? ` ${hs}h` : "";
      m = ms > 0 ? ` ${ms}min` : "";
      s = wks > 0 || ds > 0 || hs > 0 || ms > 0 ? "" : ss > 0 ? ` ${ss}s` : " Destroying cache.";
      return `${w}${d}${h}${m}${s}`;
    },
    showDate: s => {
      return s.replace(/w/i, " 周 ").replace(/d/i, " 天 ").replace(/h/i, " 小时 ").replace(/m/i, " 分钟 ").replace(/s/i, " 秒 ");
    },
    randString: (n, v, r, s = "") => {
      const a = "0123456789";
      const b = "abcdefghijklmnopqrstuvwxyz";
      const c = b.toUpperCase();
      n = Number.isFinite(n) ? n : 10;
      r = v ? b + c : a + b + a + c;
      for (; n > 0; --n) {
        s += r[Math.floor(Math.random() * r.length)];
      }
      return s;
    },
    isUpgrade: Boolean(GetUrlParam("Zn")),
    lastRuntime: () => {
      return new Date().toLocaleString("en-US", {
        timeZoneName: "short",
        hour12: false,
      });
    },
  };
  defCon.rName = defCon.randString(7, true);

  const Notice = {
    noticejs: defCon.randString(7, true),
    item: defCon.randString(5, true),
    close: defCon.randString(5, true),
    center: defCon.randString(5, true),
    success: defCon.randString(7, true),
    warning: defCon.randString(7, true),
    info: defCon.randString(7, true),
    error: defCon.randString(7, true),
    configuration: defCon.randString(7, true),
    fc: defCon.randString(8, true),
    fcSave: defCon.randString(5, true),
    fcClose: defCon.randString(5, true),
    fcGoogle: defCon.randString(6, true),
    google: defCon.randString(5, true),
    fcUpdate: defCon.randString(6, true),
    isUpdate: defCon.randString(5, true),
    fcExpire: defCon.randString(6, true),
    Expire: defCon.randString(6, true),
    timeUnit: defCon.randString(6, true),
    fcFeedback: defCon.randString(6, true),
    fcSubmit: defCon.randString(6, true),
    feedback: defCon.randString(5, true),
    animated: defCon.randString(7, true),
    noticeHTML: str => {
      return String(`<div class="${defCon.rName}"><dl>${str}<dl></div>`);
    },
  };

  if (isGM) {
    GMsetValue = GM.setValue;
    GMgetValue = GM.getValue;
    GMdeleteValue = GM.deleteValue;
    GMregisterMenuCommand = GM.registerMenuCommand;
    GMunregisterMenuCommand = () => {};
    GMopenInTab = GM.openInTab;
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMdeleteValue = GM_deleteValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
    GMopenInTab = GM_openInTab;
  }

  /* Refactoring NoticeJs Functions */

  const Defaults = {
    title: "",
    text: "",
    type: `${Notice.success}`,
    position: "bottomRight",
    newestOnTop: false,
    timeout: 30,
    progressBar: true,
    closeWith: ["button"],
    animation: {
      open: `${Notice.animated} fadeIn`,
      close: `${Notice.animated} fadeOut`,
    },
    modal: false,
    width: 400,
    scroll: {
      maxHeightContent: 400,
      showOnHover: true,
    },
    rtl: false,
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

  const noticeJsModalClassName = `${Notice.noticejs}-modal`;
  const options = Defaults;

  function getCallback(ref, eventName) {
    if (ref.callbacks.hasOwnProperty(eventName)) {
      ref.callbacks[eventName].forEach(cb => {
        if (typeof cb === "function") {
          cb.apply(ref);
        }
      });
    }
  }

  const AddModal = () => {
    if (document.getElementsByClassName(noticeJsModalClassName).length <= 0) {
      const element = document.createElement("div");
      element.classList.add(noticeJsModalClassName);
      element.classList.add(`${Notice.noticejs}-modal-open`);
      document.body.appendChild(element);
      setTimeout(() => {
        element.className = noticeJsModalClassName;
      }, 200);
    }
  };

  const CloseItem = item => {
    getCallback(options, "onClose");
    if (options.animation !== null && options.animation.close !== null) {
      item.className += " " + options.animation.close;
    }
    setTimeout(() => {
      item.remove();
    }, 200);
    if (options.modal === true && document.querySelectorAll(`[${Notice.noticejs}-modal='true']`).length >= 1) {
      document.querySelector(`.${Notice.noticejs}-modal`).className += ` ${Notice.noticejs}-modal-close`;
      setTimeout(() => {
        document.querySelector(`.${Notice.noticejs}-modal`).remove();
      }, 500);
    }
    const iC = item.closest(`.${Notice.noticejs}`);
    const iCC = iC ? iC.className.replace(`${Notice.noticejs}`, "").trim() : "bottomRight";
    const position = "." + iCC;
    setTimeout(() => {
      if (document.querySelectorAll(position + ` .${Notice.item}`).length <= 0) {
        document.querySelector(position) && document.querySelector(position).remove();
      }
    }, 500);
  };

  const addListener = item => {
    if (options.closeWith.includes("button")) {
      if (item.querySelector(`.${Notice.close}`)) {
        item.querySelector(`.${Notice.close}`).addEventListener("click", function () {
          CloseItem(item);
        });
      }
    }
    if (options.closeWith.includes("click")) {
      item.style.cursor = "pointer";
      item.addEventListener("click", function (e) {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
          CloseItem(item);
        }
      });
    } else {
      item.addEventListener("click", function (e) {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
        }
      });
    }
    item.addEventListener("mouseover", function () {
      getCallback(options, "onHover");
    });
  };

  const appendNoticeJs = (noticeJsHeader, noticeJsBody, noticeJsProgressBar) => {
    const target_class = `.${Notice.noticejs}-` + options.position;
    const noticeJsItem = document.createElement("div");
    noticeJsItem.classList.add(`${Notice.item}`);
    noticeJsItem.classList.add(options.type);
    if (options.rtl === true) {
      noticeJsItem.classList.add(`${Notice.noticejs}-rtl`);
    }
    if (options.width !== "" && Number.isInteger(options.width)) {
      noticeJsItem.style.width = options.width + "px";
    }
    if (noticeJsHeader && noticeJsHeader !== "" && noticeJsHeader.nodeType) {
      noticeJsItem.appendChild(noticeJsHeader);
    }
    if (noticeJsBody.nodeType) {
      noticeJsItem.appendChild(noticeJsBody);
    }
    if (noticeJsProgressBar && noticeJsProgressBar !== "" && noticeJsProgressBar.nodeType) {
      noticeJsItem.appendChild(noticeJsProgressBar);
    }
    if (["top", "bottom"].includes(options.position)) {
      document.querySelector(target_class).innerHTML = "";
    }
    if (options.animation !== null && options.animation.open !== null) {
      noticeJsItem.className += " " + options.animation.open;
    }
    if (options.modal === true) {
      noticeJsItem.setAttribute(`${Notice.noticejs}-modal`, "true");
      AddModal();
    }
    addListener(noticeJsItem, options.closeWith);
    getCallback(options, "beforeShow");
    getCallback(options, "onShow");
    if (options.newestOnTop === true) {
      document.querySelector(target_class).insertAdjacentElement("afterbegin", noticeJsItem);
    } else {
      document.querySelector(target_class).appendChild(noticeJsItem);
    }
    getCallback(options, "afterShow");
    return noticeJsItem;
  };

  class Components {
    createContainer() {
      const element_class = `${Notice.noticejs}-` + options.position;
      const element = document.createElement("div");
      element.classList.add(`${Notice.noticejs}`);
      element.classList.add(element_class);
      return element;
    }
    createHeader() {
      let element;
      if (options.title && options.title !== "") {
        element = document.createElement("div");
        element.setAttribute("class", `${Notice.noticejs}-heading`);
        element.textContent = options.title;
      }
      if (options.closeWith.includes("button")) {
        const close = document.createElement("div");
        close.setAttribute("class", `${Notice.close}`);
        close.innerHTML = "&times;";
        if (element) {
          element.appendChild(close);
        } else {
          element = close;
        }
      }
      return element;
    }
    createBody() {
      const element = document.createElement("div");
      element.setAttribute("class", `${Notice.noticejs}-body`);
      const content = document.createElement("div");
      content.setAttribute("class", `${Notice.noticejs}-content`);
      content.innerHTML = options.text;
      element.appendChild(content);
      if (options.scroll !== null && options.scroll.maxHeight !== "") {
        element.style.overflowY = "auto";
        element.style.maxHeight = options.scroll.maxHeight + "px";
        if (options.scroll.showOnHover === true) {
          element.style.visibility = "hidden";
        }
      }
      return element;
    }
    createProgressBar() {
      const element = document.createElement("div");
      element.setAttribute("class", `${Notice.noticejs}-progressbar`);
      const bar = document.createElement("div");
      bar.setAttribute("class", `${Notice.noticejs}-bar`);
      element.appendChild(bar);
      if (options.progressBar === true && typeof options.timeout !== "boolean" && options.timeout !== false) {
        let width = 100;
        const id = setInterval(() => {
          if (width <= 0) {
            clearInterval(id);
            let item = element.closest(`div.${Notice.item}`);
            if (options.animation !== null && options.animation.close !== null) {
              item.className = item.className.replace(new RegExp("(?:^|\\s)" + options.animation.open + "(?:\\s|$)"), " ");
              item.className += " " + options.animation.close;
              const close_time = parseInt(options.timeout) + 500;
              setTimeout(() => {
                CloseItem(item);
              }, close_time);
            } else {
              CloseItem(item);
            }
          } else {
            width--;
            bar.style.width = width + "%";
          }
        }, options.timeout);
      }
      return element;
    }
  }

  class NoticeJs {
    constructor(options = {}) {
      this.options = Object.assign(Defaults, options);
      this.component = new Components();
      this.on("beforeShow", this.options.callbacks.beforeShow);
      this.on("onShow", this.options.callbacks.onShow);
      this.on("afterShow", this.options.callbacks.afterShow);
      this.on("onClose", this.options.callbacks.onClose);
      this.on("afterClose", this.options.callbacks.afterClose);
      this.on("onClick", this.options.callbacks.onClick);
      this.on("onHover", this.options.callbacks.onHover);
    }
    show() {
      const container = this.component.createContainer();
      if (document.querySelector(`.${Notice.noticejs}-` + this.options.position) === null) {
        document.body.appendChild(container);
      }
      let noticeJsHeader, noticeJsBody, noticeJsProgressBar;
      noticeJsHeader = this.component.createHeader(this.options.title, this.options.closeWith);
      noticeJsBody = this.component.createBody(this.options.text);
      if (this.options.progressBar === true) {
        noticeJsProgressBar = this.component.createProgressBar();
      }
      const noticeJs = appendNoticeJs(noticeJsHeader, noticeJsBody, noticeJsProgressBar);
      return noticeJs;
    }
    on(eventName, cb = () => {}) {
      if (typeof cb === "function" && this.options.callbacks.hasOwnProperty(eventName)) {
        this.options.callbacks[eventName].push(cb);
      }
      return this;
    }
    static overrideDefaults(options) {
      this.options = Object.assign(Defaults, options);
      return this;
    }
  }

  /* Refactoring functions of GMsetValue/GMgetValue/GMdeleteValue with Expire */

  function GMsetExpire(key, value) {
    const obj = {
      data: value,
      time: Date.now(),
    };
    GMsetValue(key, defCon.encrypt(JSON.stringify(obj)));
  }

  function GMgetExpire(key, val, _expire) {
    let expire, expires, expireTime;
    if (!val) {
      return val;
    }
    val = JSON.parse(defCon.decrypt(val));
    if (_expire) {
      expire = /(?!^0)^[0-9]+[smhdw]$/i.test(_expire) ? _expire : "4h";
      expire = expire.replace(/w/i, "*7*24*3600*1000").replace(/d/i, "*24*3600*1000").replace(/h/i, "*3600*1000").replace(/m/i, "*60*1000").replace(/s/i, "*1000");
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

  GMnotification = (text = "", type = `${Notice.info}`, closeWith = true, timeout = 30, { ...options } = {}, position = "bottomRight") => {
    try {
      new NoticeJs({
        text: text,
        type: type,
        closeWith: closeWith ? ["button"] : ["click"],
        timeout: timeout,
        callbacks: { ...options },
        position: position,
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
          !Interval ? location.reload() : debug("//->", Interval);
        }, 1e3);
      },
    ],
  };

  /* Common functions */

  function GetUrlParam(paraName, arr = "") {
    if (!paraName) {
      const parameter = document.location.pathname.toString();
      arr = parameter.split("/");
      return arr[1] === undefined ? "" : arr[1];
    } else {
      const url = document.location.toString();
      const arrObj = url.split("?");
      if (arrObj.length > 1) {
        const arrPara = arrObj[1].split("&");
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

  if (window.self === window.top) {
    console.info(
      `%c[GB-Init]%c\nVersion: ${defCon.curVersion} %c[%s]%c\nExtension: %s\nlastRuntime: ${defCon.lastRuntime()}`,
      "font-weight:bold;color:dodgerblue",
      "color:0",
      "color:snow",
      defCon.titleCase(checkVersion(defCon.isUpgrade) instanceof Object),
      "color:0",
      defCon.titleCase(handlerInfo)
    );
  }

  /* Version Detection with Cache and timeout * F9y4ng * 20210614 */

  function fetchTimeout(url, time, { ...options } = {}) {
    const controller = new window.AbortController();
    const signal = controller.signal;
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => {
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
            const key = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
            if (key) {
              n = key[2];
            }
            const note = item.match(/^(\/\/\s+@note\s+)(.+)$/);
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
    const compare_array = compare.split(".");
    const current_array = current.split(".");
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
    const _configuration = await GMgetValue("_configuration_");
    let useBing, VerDetAuto, checkUpdate, timeNumber, timeUnit, GoogleJump, _data;
    if (!_configuration) {
      useBing = 0;
      VerDetAuto = true;
      checkUpdate = true;
      timeNumber = 4;
      timeUnit = "h";
      GoogleJump = false;
      _data = {
        useBing,
        VerDetAuto,
        checkUpdate,
        timeNumber,
        timeUnit,
        GoogleJump,
      };
      console.warn("%c[GB-Warning]%c\nThis is your first visit, the Bing search button will not be inserted by default.", "font-weight:bold;color:salmon", "color:1");
      // initialization
      GMdeleteValue("_Check_Version_Expire_");
      GMdeleteValue("_expire_time_");
      GMdeleteValue("_is_Ver_Det_");
      GMdeleteValue("_if_Use_Bing_");
      GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
    } else {
      _data = JSON.parse(defCon.decrypt(_configuration));
      useBing = _data.useBing;
      VerDetAuto = _data.VerDetAuto;
      checkUpdate = _data.checkUpdate;
      timeNumber = _data.timeNumber;
      timeUnit = _data.timeUnit;
      GoogleJump = _data.GoogleJump;
    }
    setResult = checkUpdate ? Boolean(VerDetAuto) : false;
    const _expire_time = String(timeNumber + timeUnit);
    const _expire_time_ = /(?!^0)^[0-9]+[smhdw]$/i.test(_expire_time) ? _expire_time : "4h";
    if (setResult) {
      const exp = await GMgetValue("_Check_Version_Expire_");
      const cache = GMgetExpire("_Check_Version_Expire_", exp, _expire_time_);
      if (!cache) {
        // first: greasyfork
        t = await fetchVersion(`https://greasyfork.org/scripts/12909/code/${defCon.randString(32)}.meta.js`).catch(async () => {
          defCon.fetchResult = "GreasyFork - Failed to fetch";
          error(defCon.fetchResult);
        });
        // second: github
        if (defCon.fetchResult.includes("GreasyFork")) {
          t = await fetchVersion(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(async () => {
            defCon.fetchResult = "Github - Failed to fetch";
            error(defCon.fetchResult);
          });
        }
        // third: github.cdn
        if (defCon.fetchResult.includes("Github")) {
          t = await fetchVersion(`https://cdn.staticaly.com/gh/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(async () => {
            defCon.fetchResult = "GlobalCDN - Failed to fetch";
            error(defCon.fetchResult);
          });
        }
        // final: Jsdelivr points to gitee
        if (defCon.fetchResult.includes("GlobalCDN")) {
          t = await fetchVersion(`https://cdn.jsdelivr.net/gh/F9y4ng/GreasyFork-Scripts@master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(async () => {
            defCon.fetchResult = "Jsdelivr - Failed to fetch";
            error(defCon.fetchResult);
          });
        }
        // Set value with expire
        if (t !== undefined) {
          GMsetExpire("_Check_Version_Expire_", t);
          debug("//-> %ccheckVersion: Loading Data from Server.", "background-color:darkorange;color:snow");
        } else {
          console.error(
            "%c[GB-Update]\n%cSome unknown exceptions cause version detection failure, most likely by a network error. Please try again later.",
            "font-weight:bold;color:red",
            "font-weight:bold;color:darkred"
          );
        }
      } else {
        t = cache;
        debug("//-> %ccheckVersion: Loading Data from Cache.", "background-color:green;color:snow");
      }
      // Resolution return data
      if (typeof t !== "undefined") {
        const lastestVersion = defCon.decrypt(t[1]);
        defCon.isNoticed = Number(sessionStorage.getItem("nCount")) || 0;
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
            .replace("raw.githubusercontent.com", "github.com")
            .replace("cdn.staticaly.com/gh", "github_cdn.com")
            .replace("cdn.jsdelivr.net/gh", "gitee.com")
            .replace("@", "/")
            .replace("master", "blob/master")
            .replace(/code\/[^/]+\.js/, "")
        );
        let sourceSite = defCon.titleCase(recheckURLs.hostname).split(".")[0];
        sourceSite = sourceSite.replace("_cdn", ".CDN");
        sourceSite = cache ? `${sourceSite} on Cache` : sourceSite;
        const repo = cache
          ? `\nCache expire:${defCon.durationTime(defCon.restTime)}\nDetection: ${defCon.lastRuntime()}\n`
          : `\nExpiration: ${_expire_time_}\nDetection: ${defCon.lastRuntime()}\n`;
        const sourceURL = recheckURLs.toString().replace("_cdn", "");
        switch (defCon.isNeedUpdate) {
          case 2:
            if (window.self === window.top) {
              console.warn(
                String(
                  `%c[GB-Update]%c\nWe found a new version, But %cthe latest version ` +
                    `%c${lastestVersion}%c is lower than your local version %c${defCon.curVersion}.%c\n\n` +
                    `Please confirm whether you need to upgrade your local script, and then you need to update it manually.\n` +
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
            }
            if (defCon.isNoticed < 2 || s) {
              setTimeout(function () {
                GMnotification(
                  Notice.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>
                      <dd><span>发现版本异常</span>检测到新版本 <i>${lastestVersion}</i> 低于您的本地版本 <i>${defCon.curVersion}</i>。</dd>\
                      <dd>由于您编辑过本地脚本，或是手动在脚本网站上升级过新版本，从而造成缓存错误。为避免未知错误的出现，脚本将自动设置为禁止检测更新，\
                      直至您手动从脚本菜单中再次开启它。</dd><dd>[ ${sourceSite} ]</dd><dd style="font-size:12px!important;\
                      color:lemonchiffon;font-style:italic">注：若要重新启用自动更新，您需要在<a href="${sourceURL}" target="_blank"\
                      style="padding:0 2px;font-size:14px;color:gold">脚本源网站</a>覆盖安装正式版本后，从脚本菜单重新开启更新检测。</dd>\
                      <dd style="text-align: center"><img src="https://i.niupic.com/images/2021/06/13/9kVe.png" alt="开启自动检测"></dd>`
                  ),
                  `${Notice.error}`,
                  true,
                  150,
                  {
                    onClose: [
                      function () {
                        location.reload();
                      },
                    ],
                  }
                );
              }, 500);
              _data.VerDetAuto = false;
              GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
              sessionStorage.setItem("nCount", ++defCon.isNoticed);
            }
            return false;
          case 1:
            if (window.self === window.top) {
              console.info(
                String(`%c[GB-Update]%c\nWe found a new version: %c${lastestVersion}%c.\nPlease upgrade from your update source to the latest version.${repo}(${sourceSite})`),
                "font-weight:bold;color:crimson",
                "color:0",
                "color:crimson",
                "color:0"
              );
            }
            if (defCon.isNoticed < 2 || s) {
              let showdDetail = "";
              if (updateNote) {
                showdDetail = `<dd onmouseover="this.parentNode.children[2].style.display='block';\
                      this.style.display='none'" style="text-align:center">&gt;&gt; 查看更新内容 &lt;&lt;</dd>`;
              }
              setTimeout(function () {
                GMnotification(
                  Notice.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>\
                      <dd><span>发现版本更新</span>最新版本 <i>${lastestVersion}</i>，如果您现在需要更新脚本，请点击这里完成升级安装。</dd>\
                      ${updateNote}<dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px;">\
                      ( 缓存时间：${defCon.showDate(_expire_time_)} )</kbd></dd>${showdDetail}`
                  ),
                  `${Notice.warning}`,
                  false,
                  60,
                  {
                    onClick: [
                      function () {
                        const w = window.open(updateUrl, "Update.Scripts");
                        setTimeout(() => {
                          isGM ? (window.opener = null) : debug("Not Greasemonkey");
                          w ? w.close() : debug("window not exsits.");
                          GMdeleteValue("_Check_Version_Expire_");
                          GMnotification(
                            Notice.noticeHTML(
                              `<dd class="${Notice.center}">如果您已更新了脚本，请点击<a href="javascript:void(0)"\
                                  onclick="location.replace(location.href.replace(/&zn=[^&]*/i,'')+'&Zn=1')"\
                                  class="im">这里</a>刷新使其生效。</a></dd>`
                            ),
                            `${Notice.info}`,
                            true,
                            100
                          );
                        }, 3e3);
                      },
                    ],
                  }
                );
              }, 500);
              sessionStorage.setItem("nCount", ++defCon.isNoticed);
            }
            return false;
          default:
            if (window.self === window.top) {
              info = !defCon.isNoticed || s ? console.info.bind(console) : debug.bind(console);
              sessionStorage.setItem("nCount", 1);
              info(
                `%c[GB-Update]%c\nCurretVersion: %c${defCon.curVersion}%c is up-to-date!${repo}(${sourceSite})`,
                "font-weight:bold;color:darkcyan",
                "color:0",
                "color:red",
                "color:0"
              );
            }
            if (s) {
              setTimeout(function () {
                GMnotification(
                  Notice.noticeHTML(
                    `<dt>${defCon.scriptName}</dt>\
                      <dd><span>更新成功</span>当前版本 <i>${defCon.curVersion}</i> 已为最新！</dd>\
                      <dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px;">\
                      ( 缓存时间：${defCon.showDate(_expire_time_)} )</kbd></dd>`
                  ),
                  `${Notice.success}`
                );
              }, 100);
            }
            return true;
        }
      }
    } else {
      if (window.self === window.top) {
        console.warn(`%c[GB-Update]%c\nVersion detection turned off ${!checkUpdate ? "Manually" : "Automatically"}.`, "font-weight:bold;color:red", "color:0");
      }
      return false;
    }
  }

  /* Menus & Button insert  */

  !(async function () {
    let useBing, VerDetAuto, checkUpdate, timeNumber, timeUnit, GoogleJump, _data;

    /* Set Default Value & initialize */

    const _configuration = await GMgetValue("_configuration_");
    if (!_configuration) {
      useBing = 0;
      VerDetAuto = true;
      checkUpdate = true;
      timeNumber = 4;
      timeUnit = "h";
      GoogleJump = false;
      _data = {
        useBing,
        VerDetAuto,
        checkUpdate,
        timeNumber,
        timeUnit,
        GoogleJump,
      };
      GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
    } else {
      _data = JSON.parse(defCon.decrypt(_configuration));
      useBing = _data.useBing;
      VerDetAuto = _data.VerDetAuto;
      checkUpdate = _data.checkUpdate;
      timeNumber = _data.timeNumber;
      timeUnit = _data.timeUnit;
      GoogleJump = _data.GoogleJump;
    }

    const CONST = {
      isSecurityPolicy: false,
      rndidName: defCon.randString(9, true),
      rndclassName: defCon.randString(12, true),
      bdyx: defCon.randString(5, true),
      ggyx: defCon.randString(5, true),
      bbyx: defCon.randString(5, true),
      scrollspan: defCon.randString(8, true),
      scrollspan2: defCon.randString(8, true),
      scrollbars: defCon.randString(8, true),
      scrollbars2: defCon.randString(8, true),
      isUseBing: Boolean(useBing),
      isVDResult: checkUpdate ? Boolean(VerDetAuto) : false,
    };
    CONST.noticeCss = `@charset "UTF-8";.${Notice.animated}{animation-duration:1s;animation-fill-mode:both}.${Notice.animated}.infinite{animation-iteration-count:infinite}.${Notice.animated}.hinge{animation-duration:2s}.${Notice.animated}.bounceIn,.${Notice.animated}.bounceOut,.${Notice.animated}.flipOutX,.${Notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}#${CONST.rndidName} *,.${Notice.noticejs},.${Notice.noticejs} *{font-family:'Microsoft YaHei','Helvetica Neue',sans-serif!important;text-stroke:initial!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}.${Notice.noticejs}-top{top:0;width:100%}.${Notice.noticejs}-top .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-topRight{top:10px;right:10px}.${Notice.noticejs}-topLeft{top:10px;left:10px}.${Notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}-middleLeft,.${Notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${Notice.noticejs}-middleLeft{left:10px}.${Notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${Notice.noticejs}-bottom{bottom:0;width:100%}.${Notice.noticejs}-bottom .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-bottomRight{bottom:10px;right:10px}.${Notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${Notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}{z-index:99999999!important;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.${Notice.noticejs} .${Notice.item}{margin:0 0 10px;border-radius:3px;overflow:hidden}.${Notice.noticejs} .${Notice.item} .${Notice.close}{float:right;font-size:18px;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.item} .${Notice.close}:hover{opacity:.5;color:#000;cursor:pointer}.${Notice.noticejs} .${Notice.item} a{color:#fff;border-bottom:1px dashed #fff}.${Notice.noticejs} .${Notice.item} a,.${Notice.noticejs} .${Notice.item} a:hover{text-decoration:none}.${Notice.noticejs} .${Notice.success}{background-color:#64ce83}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-heading{background-color:#3da95c;color:#fff;padding:10px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.info}{background-color:#3ea2ff}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-heading{background-color:#067cea;color:#fff;padding:10px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.warning}{background-color:#ff7f48}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-heading{background-color:#f44e06;color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.error}{background-color:#e74c3c}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-heading{background-color:#ba2c1d;color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-content{visibility:visible}.${Notice.configuration} input[disabled],.${Notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${Notice.noticejs} .${Notice.configuration}{background-color:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}{float:right;font-size:18px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #aaa;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}:hover{opacity:.5;color:#555;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-heading{background-color:#F2F2F7;color:#333;padding:10px!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body{color:#333;padding:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body ul{color:#333!important;list-style:none;margin:5px;padding:2px;font:italic 14px/140% "Microsoft YaHei",sans-serif}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body ul ol{list-style:none;font-style:normal;margin:5px 0;cursor:default}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#3da95c}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#067cea}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#f44e06}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar{width:100%;background-color:#e74c3c;margin-top:-1px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar{width:100%;background-color:#efefef;margin-top:-1px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{background:#ccc;width:100%;height:5px}@keyframes ${Notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${Notice.noticejs}-fadeOut{animation-name:${Notice.noticejs}-fadeOut}@keyframes ${Notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${Notice.noticejs}-modal-out{to{opacity:0}}.${Notice.noticejs}{position:fixed;z-index:10050}.${Notice.noticejs} ::-webkit-scrollbar{width:8px}.${Notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${Notice.noticejs} ::-webkit-scrollbar-track{border-radius:10px}.${Notice.noticejs} ::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.5);border-radius:10px}.${Notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#fff}.${Notice.noticejs}-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:999999;opacity:.3;left:0;top:0}.${Notice.noticejs}-modal-open{opacity:0;animation:${Notice.noticejs}-modal-in .3s ease-out}.${Notice.noticejs}-modal-close{animation:${Notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${defCon.rName}{padding:2px!important}.${defCon.rName} dl{margin:0!important;padding:1px!important}.${defCon.rName} dl dt{margin:2px 0 6px 0!important;font-size:16px!important;font-weight:900!important}.${defCon.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${defCon.rName} .${Notice.center}{width:100%;text-align:center!important}.${defCon.rName} dl dd em{color:#fff;font-family:Candara,sans-serif!important;font-size:24px!important;padding:0 5px}.${defCon.rName} dl dd span{font-weight:700;font-size:15px!important;margin-right:8px}.${defCon.rName} dl dd i{font-family:Candara,sans-serif!important;font-size:20px!important}.${defCon.rName} dl dd .im{color:gold;font-size:16px;font-weight:900;padding:0 3px}.${defCon.rName} ul{width:90%;display:inline-block;text-align:left;vertical-align:top;color:rgba(255, 255, 255, 0.8);padding:0.2em;margin:0 0 0 1em;counter-reset:xxx 0}.${defCon.rName} li{list-style:none;font-style:italic!important;position:relative;padding:0 0 0 0.1em;margin:0 0 0 2px;-webkit-transition:.12s;transition:.12s}.${defCon.rName} li::before{content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-family:Candara,sans-serif;font-size:1em;display:inline-block;width:1.5em;margin-left:-1.5em;-webkit-transition:.5s;transition:.5s}.${defCon.rName} .disappear{display:none}/* checkbox */.${Notice.checkbox}{display:none!important}.${Notice.checkbox}+label{padding:11px 9px;margin:0 0 0 25px;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.${Notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;-webkit-border-radius:7px;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${Notice.checkbox}+label::after{position:absolute;top:0;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:100px;border-radius:100px;padding:5px;font-size:1em;font-weight:700;color:#fff;content:"OFF"}.${Notice.checkbox}:checked+label{margin:0 0 0 25px;-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}.${Notice.checkbox}:checked+label::after{content:"ON";left:10px}.${Notice.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}/* checkbox */#${Notice.fcUpdate},#${Notice.fcExpire},#${Notice.fcGoogle},#${Notice.fcFeedback}{padding:2px 10px;height:45px;width:100%;font:bold 16px/140% "Microsoft YaHei",sans-serif}#${Notice.Expire}{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:4px;border-radius:4px;width:38px;padding:2px;height:23px;border:2px solid #777;font-size:16px;font-weight:normal;font-family:Impact,sans-serif!important;text-align:center}#${Notice.timeUnit}{-webkit-border-radius:4px;border-radius:4px;padding:4px;font-size:14px;border:2px solid #777}#${Notice.fcFeedback} .${Notice.feedback}{cursor:help;font-size:16px!important;margin-top:5px}#${Notice.fcFeedback} .${Notice.feedback}:hover{color:crimson}#${Notice.fcSubmit}{padding:2px 10px;height:30px;width:100%}#${Notice.fcSubmit} button{color:#333;font-weight:600;border:1px solid #777;font-size:16px;padding:5px 15px;margin-left:10px;border-radius:4px}#${Notice.fcSubmit} .${Notice.fcSave}{background-color:linear-gradient(to bottom,#fff7f7,#ffe9e9);background:-webkit-gradient(linear,0 0,0 100%,from(#fff7f7),to(#ffe9e9))}`;

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
          ? `#${CONST.rndidName}{margin:3px 4px 0 -5px}#${CONST.rndidName} #${CONST.bdyx}{padding:5px 0 4px 18px;border-left:1px solid #ddd;}#${CONST.rndidName} #${CONST.bbyx}{margin-left:-2px}.${CONST.scrollspan}{display:inline-block;margin:0;min-height:26px}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #ffffff!important}.${CONST.scrollbars2}{display:inline-block;margin-top:-4px;height:30px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #ffffff!important}#${CONST.bdyx} input{cursor:pointer;padding:1px 1px 1px 6px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bbyx} input{cursor:pointer;padding:1px 6px 1px 1px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bdyx} input:hover,#${CONST.bbyx} input:hover{background:#2b7de9;}`
          : `#${CONST.rndidName}{margin:3px 4px 0 -5px}#${CONST.rndidName} #${CONST.bdyx}{padding:5px 0 4px 18px;border-left:1px solid #ddd}.${CONST.scrollspan}{display:inline-block;margin:0;min-height:26px}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;font-size:13px!important;font-weight:normal!important; text-shadow:0 0 1px #fff!important}.${CONST.scrollbars2}{display:inline-block;margin-top:-4px;height:30px!important;font-size:13px!important;font-weight:normal!important;text-shadow:0 0 1px #fff!important}#${CONST.bdyx} input{cursor:pointer;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-radius:24px;width:90px;height:38px;font-size:14px;font-weight:600;color:#fff;}#${CONST.bdyx} input:hover{background:#2b7de9;}`,
      },
      bing: {
        SiteTypeID: 3,
        SiteName: "Bing",
        SplitName: "",
        MainType: "#sb_go_par",
        HtmlCode: CONST.isUseBing
          ? String(`
          <span id="${CONST.bdyx}">
              <input type="button" title="百度一下" value="百度一下"/>
          </span>
          <span id="${CONST.ggyx}">
              <input type="button" title="Google一下" value="Google"/>
          </span>`)
          : ``,
        StyleCode: CONST.isUseBing
          ? `#${CONST.rndidName}{height:44px;width:120px;margin:2px 0}#${CONST.bdyx} input{cursor:pointer;min-width:60px;height:37px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px;font-weight:900;border-top-left-radius:24px;border-bottom-left-radius:24px;margin:0;padding:0 12px 0 18px}#${CONST.ggyx} input{cursor:pointer;min-width:60px;height:37px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px;font-weight:900;border-top-right-radius:24px;border-bottom-right-radius:24px;margin:0 0 0 -3px;padding:0 18px 0 12px}.${CONST.scrollspan}{margin-right:5px!important}.${CONST.scrollbars}{text-decoration:none!important;padding-top:2px!important;border-radius:4px!important;max-height:33px;padding:0 12px!important;margin-right:2px!important}#${CONST.bdyx} input:hover,#${CONST.ggyx} input:hover{background-color:#fff;transition:border linear .1s,box-shadow linear .3s;box-shadow:1px 1px 8px #08748D;border:2px solid #0095B7;text-shadow:0 0 1px #0095B7!important;color:#0095B7;}`
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

    const menuManager = {
      inUse_switch: (_status, _data, Tips) => {
        const info = x => {
          return Notice.noticeHTML(`<dd class="${Notice.center}">${Tips}已<kbd class="im">${x}</kbd>，网页在<em>3</em>秒后刷新！</dd>`);
        };
        _data.useBing = !_status;
        GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
        if (_status) {
          GMnotification(info("\u6e05\u9664"), `${Notice.info}`, true, 30, callback_Countdown);
        } else {
          GMnotification(info("\u6dfb\u52a0"), `${Notice.info}`, true, 30, callback_Countdown);
        }
      },

      menuRemove: t => {
        t ? GMunregisterMenuCommand(t) : debug("//-> menuRemove() not found item: %s.", typeof t);
      },

      registerMenuCommand: function (e) {
        let yet, _Use_Bing__;
        let in_Use_Configure, _use_Bing_ID, in_UpdateCheck_ID;

        this.menuRemove(_use_Bing_ID);
        this.menuRemove(in_Use_Configure);
        this.menuRemove(in_UpdateCheck_ID);

        in_Use_Configure = GMregisterMenuCommand("\ufff0\ud83c\udfaf【脚本参数】跳转工具设置", () => {
          GMnotification(
            Notice.noticeHTML(
              `<dt style="color:darkred">
                搜索引擎跳转工具 设置
                <span style="font:italic 14px/14px Candara,sans-serif!important">
                 (Version ${defCon.curVersion})
                <span>
               </dt>
                <dd>
                  <ul id="${Notice.fc}">
                    <ol id="${Notice.fcGoogle}">
                      <div style="float:left">Google 国际站跳转</div>
                      <div style="float:right;margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.google}" class="${Notice.checkbox}" ${GoogleJump ? "checked" : ""} />
                        <label for="${Notice.google}"></label>
                      </div>
                    </ol>
                    <ol id="${Notice.fcUpdate}">
                      <div style="float:left">更新检测（默认：开）</div>
                      <div style="float:right;margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.isUpdate}" class="${Notice.checkbox}" ${checkUpdate ? "checked" : ""} />
                        <label for="${Notice.isUpdate}"></label>
                      </div>
                    </ol>
                    <ol id="${Notice.fcExpire}">
                      <div>更新频率（分/时/天/周）
                        <input id="${Notice.Expire}" maxlength="3" placeholder="4" value="${timeNumber}"/>
                        <select id="${Notice.timeUnit}">
                          <option ${timeUnit === "m" ? "selected" : ""} value ="m">分钟</option>
                          <option ${timeUnit === "h" ? "selected" : ""} value ="h">小时</option>
                          <option ${timeUnit === "d" ? "selected" : ""} value="d">天</option>
                          <option ${timeUnit === "w" ? "selected" : ""} value="w">周</option>
                        </select>
                      </div>
                    </ol>
                    <ol id="${Notice.fcFeedback}">
                      <div class="${Notice.feedback}">\ud83e\udde1\u0020如果您遇到问题，请向我反馈\u0020\ud83e\udde1</div>
                    </ol>
                    <ol id="${Notice.fcSubmit}">
                    <button class="${Notice.fcClose}">关闭</button>
                    <button class="${Notice.fcSave}">保存</button>
                    </ol>
                  </ul>
                </dd>`
            ),
            `${Notice.configuration}`,
            true,
            600,
            {},
            "topRight"
          );
          if (!document.querySelector(`#${Notice.isUpdate}`).checked) {
            document.querySelector(`#${Notice.Expire}`).setAttribute("disabled", "disabled");
            document.querySelector(`#${Notice.timeUnit}`).setAttribute("disabled", "disabled");
          }
          document.querySelector(`#${Notice.isUpdate}`).addEventListener("change", function () {
            if (this.checked) {
              document.querySelector(`#${Notice.Expire}`).removeAttribute("disabled");
              document.querySelector(`#${Notice.timeUnit}`).removeAttribute("disabled");
            } else {
              document.querySelector(`#${Notice.Expire}`).setAttribute("disabled", "disabled");
              document.querySelector(`#${Notice.timeUnit}`).setAttribute("disabled", "disabled");
            }
          });
          document.querySelector(`#${Notice.Expire}`).addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "");
          });
          document.querySelector(`#${Notice.fcFeedback} .${Notice.feedback}`).addEventListener("click", () => {
            GMopenInTab(`${defCon.support ? defCon.support : "https://greasyfork.org/scripts/12909/feedback"}`, defCon._option);
          });
          document.querySelector(`#${Notice.fcSubmit} .${Notice.fcClose}`).addEventListener("click", function () {
            document.querySelector(`.${Notice.noticejs} .${Notice.configuration} .${Notice.close}`).click();
          });
          document.querySelector(`#${Notice.fcSubmit} .${Notice.fcSave}`).addEventListener("click", function () {
            const GoogleJump = document.querySelector(`#${Notice.google}`).checked;
            const checkUpdate = document.querySelector(`#${Notice.isUpdate}`).checked;
            let timeNumber = document.querySelector(`#${Notice.Expire}`).value;
            let timeUnit = document.querySelector(`#${Notice.timeUnit}`).value;
            _data.checkUpdate = checkUpdate;
            _data.timeNumber = timeNumber.length ? Number(timeNumber) : 4;
            _data.timeUnit = timeUnit.length ? timeUnit : "h";
            _data.GoogleJump = GoogleJump;
            if (!checkUpdate) {
              GMdeleteValue("_Check_Version_Expire_");
            }
            GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
            document.querySelector(`.${Notice.noticejs} .${Notice.configuration} .${Notice.close}`).click();
            GMnotification(
              Notice.noticeHTML(`<dd class="${Notice.center}">设置数据已<kbd class="im">成功保存</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
              `${Notice.info}`,
              true,
              30,
              callback_Countdown
            );
          });
        });
        _Use_Bing__ = e ? "\ufff2\ud83d\udfe2【已开启】" : "\ufff2\u274c【已关闭】";
        _use_Bing_ID = GMregisterMenuCommand(`${_Use_Bing__}Bing 搜索跳转`, () => {
          if (!yet) {
            this.inUse_switch(e, _data, "Bing 按钮");
            yet = true;
          }
        });

        if (checkUpdate) {
          if (CONST.isVDResult) {
            in_UpdateCheck_ID = GMregisterMenuCommand(`\ufff5\ud83e\udded【版本更新】从服务器实时检查`, async () => {
              GMdeleteValue("_Check_Version_Expire_");
              debug("//-> up-to-date? ", await checkVersion(checkUpdate));
            });
          } else {
            in_UpdateCheck_ID = GMregisterMenuCommand("\ufff5\ud83d\udcdb【版本更新】已关闭 \u267b 重新开启", () => {
              _data.VerDetAuto = true;
              GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
              GMdeleteValue("_Check_Version_Expire_");
              sessionStorage.removeItem("nCount");
              debug("//-> Destroy cache & session when restart detection.");
              GMnotification(
                Notice.noticeHTML(`<dd class="${Notice.center}">更新检测已<kbd class="im">开启</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
                `${Notice.info}`,
                true,
                30,
                callback_Countdown
              );
            });
          }
        }
      },

      menuDisplay: function () {
        if (!CONST.isSecurityPolicy) {
          safeFunction(() => {
            this.registerMenuCommand(CONST.isUseBing);
          });
        }
        if (window.self === window.top) {
          console.log(
            "%c[GB-Status]%c\nInsert the Bing Search Button: %c%s",
            "font-weight:bold;color:darkorange",
            "color:0",
            "font-weight:bold;color:red",
            defCon.titleCase(CONST.isUseBing && !CONST.isSecurityPolicy)
          );
        }
      },

      init: function () {
        this.menuDisplay();
      },
    };

    /* Insert search Button */

    const searchManager = {
      insertCSS: function () {
        try {
          const doStyName = `${CONST.rndclassName}`;
          const doStyle = CONST.noticeCss + curretSite.StyleCode;
          addStyle(doStyle, doStyName, "head");
        } catch (e) {
          error("//-> %csearchManager.insertCSS:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      insertSearchButton: function () {
        try {
          const getTarget = curretSite.MainType;
          const doHtml = curretSite.HtmlCode;
          const indexPage = location.pathname === "/";
          const userSpan = document.createElement("span");
          userSpan.id = `${CONST.rndidName}`;
          userSpan.innerHTML = doHtml;
          const SpanID = `#${userSpan.id}`;
          let Target = document.querySelector(getTarget);

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
                  document.querySelector(".b_searchboxForm").setAttribute("style", "width:max-content!important;padding-right:10px!important");
                  document.querySelectorAll(`#${CONST.rndidName} input`).forEach(item => {
                    item.style = "height:35px!important;border-radius:4px!important;padding:0 12px;";
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
                GMopenInTab(decodeURI(gotoUrl + getSearchValue()), defCon._option);
              });
            });
          }
        } catch (e) {
          error("//-> %csearchManager.insertSearchButton:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      scrollDetect: function () {
        let scrollbars, height, e;
        switch (curretSite.SiteTypeID) {
          case newSiteType.GOOGLE:
            // Google image fixed
            getGlobalGoogle("www.google.com", GoogleJump);
            e = /^isch$/.test(CONST.vim.trim());
            scrollbars = e ? `${CONST.scrollbars2}` : `${CONST.scrollbars}`;
            height = e ? -14 : 35;
            scrollButton(`#${CONST.rndidName}`, `${CONST.scrollspan}`, height);
            scrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, scrollbars, height);
            if (CONST.isUseBing) {
              scrollButton(`#${CONST.rndidName} #${CONST.bbyx} input`, scrollbars, height);
            }
            break;
          case newSiteType.BING:
            if (/^(images|videos)$/.test(CONST.vim.trim()) && CONST.isUseBing) {
              scrollButton(`#${CONST.rndidName}`, `${CONST.scrollspan}`, 50);
              scrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, `${CONST.scrollbars}`, 50);
              scrollButton(`#${CONST.rndidName} #${CONST.ggyx} input`, `${CONST.scrollbars}`, 50);
            } else {
              debug(`//-> No scrolling detecting.`);
            }
            break;
          default:
            debug(`//-> No scrolling detecting.`);
            break;
        }
      },

      startRAFInterval: function () {
        RAFInterval(
          () => {
            if (!document.querySelector(`.${CONST.rndclassName}`)) {
              this.insertCSS();
            }
            if (!document.querySelector(`#${CONST.rndidName}`)) {
              this.insertSearchButton();
              this.scrollDetect();
            }
          },
          200,
          true
        );
        return document.querySelector(`.${CONST.rndclassName}`) && document.querySelector(`#${CONST.rndidName}`);
      },

      doSwitch: function () {
        try {
          if (curretSite.SiteTypeID !== newSiteType.OTHERS) {
            if (CONST.isSecurityPolicy) {
              if (window.self === window.top) {
                console.log(
                  "%c[GB-Prohibit]%c\nBlocked By: %c%s Security Policy",
                  "font-weight:bold;color:indigo",
                  "color:0",
                  "font-weight:bold;color:darkred",
                  curretSite.SiteName
                );
              }
              return;
            } else {
              this.startRAFInterval();
              const callback = mutations => {
                mutations.forEach(mutation => {
                  if (!(document.querySelector(`.${CONST.rndclassName}`) && document.querySelector(`#${CONST.rndidName}`))) {
                    debug(
                      "%c[GB-MutationObserver]\n%c(%c%s%c: %c%s%c)",
                      "font-weight:bold;color:olive",
                      "color:0",
                      "color:olive",
                      mutation.type,
                      "color:0",
                      "font-weight:bold;color:red",
                      defCon.titleCase(!!this.startRAFInterval()),
                      "color:0"
                    );
                  }
                });
              };
              const opts = { childList: true, subtree: true };
              const observer = new MutationObserver(callback);
              observer.observe(document, opts);
              if (window.self === window.top) {
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

    function getGlobalGoogle(google, checkGoogleJump) {
      if (checkGoogleJump) {
        if (getRealHostName() !== getRealHostName(google) && !sessionStorage.getItem("_global_google_")) {
          sessionStorage.setItem("_global_google_", 1);
          try {
            setTimeout(() => {
              defCon.s = GMopenInTab(`https://${google}/ncr`, true);
              GMnotification(Notice.noticeHTML(`<dd class="${Notice.center}"><span>智能跳转</span>即将跳转至Google国际站：<br/>${google}</dd>`), `${Notice.info}`, true, 20, {
                onClose: [
                  function () {
                    if (defCon.s) {
                      defCon.s.close();
                    }
                    location.href = top.location.href.replace(top.location.hostname, google);
                  },
                ],
              });
            }, 500);
          } catch (e) {
            error("//-> getGlobalGoogle:", e);
          }
        }
      }
    }

    function getRealHostName(_index) {
      _index = _index ? _index : top.location.hostname;
      return _index.substring(_index.indexOf("google"));
    }

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

    function addStyle(css, className, addToTarget, isReload = false, initType = "text/css", reNew = false) {
      RAFInterval(
        () => {
          let addTo = document.querySelector(addToTarget);
          if (typeof addToTarget === "undefined") {
            addTo = document.head || document.body || document.documentElement || document;
          }
          if (typeof addToTarget === "undefined" || (typeof addToTarget !== "undefined" && document.querySelector(addToTarget))) {
            if (isReload === true && document.querySelector(`.${className}`)) {
              safeRemove(`.${className}`);
              reNew = true;
            } else if (isReload === false && document.querySelector(`.${className}`)) {
              return true;
            }
            const cssNode = document.createElement("style");
            if (className !== null) {
              cssNode.className = className;
            }
            cssNode.id = "S" + Date.now().toString().slice(-8);
            cssNode.setAttribute("type", initType);
            cssNode.innerHTML = css;
            addTo.appendChild(cssNode);
            if (reNew && document.querySelector(`.${className}`)) {
              return true;
            }
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
            const value = kvl[i].replace(/^(wd|word|kw|query|q)=/, "");
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

    function RAFInterval(callback, period, runNow, times = 0) {
      const needCount = (period / 1000) * 60;
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
        if (checkUpdate && !CONST.isVDResult) {
          debug("//-> Ready to Insert Random Tips.");
          if (Math.floor(Math.random() * 20) > 18) {
            setTimeout(function () {
              GMnotification(
                Notice.noticeHTML(
                  `<dd title="请安装新版代码后恢复自动更新">若要恢复自动更新功能，请在覆盖安装<a target="_blank" style="margin:0 4px;font-size:16px;font-weight:600"\
                  href="https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/Google_baidu_Switcher_(ALL_in_One)">新版代码</a>后,\
                  从脚本菜单中重新开启"版本更新"功能。</dd><dd class="${Notice.center}" title="随机提示">\
                  <img src="https://i.niupic.com/images/2021/06/13/9kVe.png" alt="开启自动检测"></dd>`
                ),
                `${Notice.info}`,
                true,
                50
              );
            }, Math.random() * 10e3);
          }
        }
      }
    })();
  })();
})();
