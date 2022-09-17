// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:zh-CN         优雅的搜索引擎跳转助手
// @name:zh-TW         优雅的搜索引擎跳轉助手
// @name:ja            検索エンジンジャンプアシスタント
// @version            2022.09.17.1
// @author             F9y4ng
// @description        Graceful search engine Switch assistant, more beautiful and more convenient. The new version adds anti-redirect function, custom search engine selection function, visual search parameter setting, and automatic update detection and other advanced functions.
// @description:zh-CN  优雅的搜索引擎跳转助手，更美观、更便捷。新版本增加去重定向功能、自定义搜索引擎选取功能，提供可视化搜索参数设置，及自动更新检测等高级功能。
// @description:zh-TW  優雅的搜尋引擎跳轉助手，更美觀、更便捷。新版本增加去重定向功能、自定義搜尋引擎選取功能，提供可視化搜索參數設置，及自動更新檢測等高級功能。
// @description:ja     エレガントな検索エンジンジャンプアシスタントは、より美しく、より便利です。 新しいバージョンは、リダイレクト機能、カスタム検索エンジン選択機能、ビジュアル検索パラメータ設定、自動更新検出などの高度な機能を追加します。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               https://img.icons8.com/stickers/48/search-in-cloud.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @match              *://www.baidu.com/*
// @match              *://ipv6.baidu.com/*
// @match              *://image.baidu.com/*
// @match              *://*.bing.com/*
// @match              *://duckduckgo.com/*
// @match              *://*.sogou.com/*
// @match              *://fsoufsou.com/search*
// @match              *://www.so.com/s*
// @match              *://image.so.com/*
// @match              *://so.toutiao.com/search*
// @match              *://yandex.com/*search*
// @include            *://*.google.*/search*
// @exclude            *://www.google.com/sorry*
// @exclude            *://www.baidu.com/link*
// @exclude            *://www.sogou.com/link*
// @exclude            *://www.so.com/link*
// @exclude            *://so.toutiao.com/search/jump*
// @connect            baidu.com
// @connect            bing.com
// @connect            sogou.com
// @connect            so.com
// @connect            greasyfork.org
// @connect            openuserjs.org
// @connect            githubusercontent.com
// @compatible         edge 兼容TamperMonkey, ViolentMonkey
// @compatible         Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible         Firefox 兼容Greasemonkey4.0+, TamperMonkey, ViolentMonkey
// @compatible         Opera 兼容TamperMonkey, ViolentMonkey
// @compatible         Safari 兼容Tampermonkey • Safari
// @note               修正低分辨率设置菜单被遮挡的bug。\n优化部分去广告规则。\n修正一些已知的问题。
// @grant              GM_getValue
// @grant              GM.getValue
// @grant              GM_setValue
// @grant              GM.setValue
// @grant              GM_listValues
// @grant              GM.listValues
// @grant              GM_deleteValue
// @grant              GM.deleteValue
// @grant              GM_openInTab
// @grant              GM.openInTab
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @grant              GM_unregisterMenuCommand
// @license            GPL-3.0-only
// @create             2015-10-07
// @copyright          2015-2022, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 9 */

~(function (trustedTypesPolicy) {
  "use strict";

  /* customize */

  const IS_OPEN_DEBUG = false; // set "true" to debug scripts, May cause script response slower.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  const GMinfo = GM_info;
  const GMscriptHandler = GMinfo.scriptHandler;
  const isGM = GMscriptHandler.toLowerCase() === "greasemonkey";
  const debug = IS_OPEN_DEBUG ? console.log.bind(console) : () => {};
  const error = IS_OPEN_DEBUG ? console.error.bind(console) : () => {};
  const warn = IS_OPEN_DEBUG ? console.warn.bind(console) : () => {};
  const count = IS_OPEN_DEBUG ? console.count.bind(console) : () => {};

  /* GM selector */

  const GMsetValue = isGM ? GM.setValue : GM_setValue;
  const GMgetValue = isGM ? GM.getValue : GM_getValue;
  const GMdeleteValue = isGM ? GM.deleteValue : GM_deleteValue;
  const GMlistValues = isGM ? GM.listValues : GM_listValues;
  const GMopenInTab = isGM ? GM.openInTab : GM_openInTab;
  const GMxmlhttpRequest = isGM ? GM.xmlHttpRequest : GM_xmlhttpRequest;
  const GMregisterMenuCommand = isGM ? GM.registerMenuCommand : GM_registerMenuCommand;
  const GMunregisterMenuCommand = isGM ? () => {} : GM_unregisterMenuCommand;

  /* default CONST Values */

  const defCon = {
    clickTimer: 0,
    scriptName: getScriptNameViaLanguage(),
    curVersion: GMinfo.script.version || GMinfo.scriptMetaStr.match(/@version\s+(\S+)/)[1],
    options: isGM ? false : { active: true, insert: true, setParent: true },
    elCompat: document.compatMode === "CSS1Compat" ? document.documentElement : document.body,
    encrypt: n => {
      try {
        return window.btoa(encodeURIComponent(String(n)));
      } catch (e) {
        error("Encrypt.error:", e.message);
      }
    },
    decrypt: n => {
      try {
        if (typeof n === "string") {
          return decodeURIComponent(window.atob(n.replace(/[^A-Za-z0-9+/=]/g, "")));
        } else {
          throw new Error("Non-string type");
        }
      } catch (e) {
        error("Decrypt.error:", e.message);
      }
    },
    randString: (n, v) => {
      const a = "0123456789";
      const b = "abcdefghijklmnopqrstuvwxyz";
      const c = b.toUpperCase();
      let r, m;
      let s = "";
      let z = true;
      switch (v) {
        case "mix":
          m = Number(n - 1) || 8;
          r = b + a + c;
          z = false;
          break;
        case "char":
          m = Number(n) || 8;
          r = b + c;
          break;
        case "digit":
          m = Number(n) || 8;
          r = a;
          break;
        default:
          m = Number(n) || 8;
          r = c;
          break;
      }
      for (; m > 0; --m) {
        s += r[Math.floor(Math.random() * r.length)];
      }
      return z ? s : c[Math.floor(Math.random() * c.length)].concat(s);
    },
    isWinTop: () => {
      try {
        return window.self === window.top;
      } catch (e) {
        return !parent.frames.length;
      }
    },
  };

  const CUR_WINDOW_TOP = defCon.isWinTop();

  /* Define random aliases */

  const Notice = {
    rName: defCon.randString(8, "char"),
    random: defCon.randString(5, "char"),
    noticejs: defCon.randString(7, "char"),
    item: defCon.randString(6, "mix"),
    close: defCon.randString(6, "mix"),
    center: defCon.randString(6, "mix"),
    success: defCon.randString(7, "char"),
    warning: defCon.randString(7, "char"),
    info: defCon.randString(7, "char"),
    error: defCon.randString(7, "char"),
    checkbox: defCon.randString(6, "char"),
    configuration: defCon.randString(7, "char"),
    animated: defCon.randString(7, "char"),
    stopUpdate: defCon.randString(6, "mix"),
    searchButton: defCon.randString(6, "mix"),
    favicon: defCon.randString(6, "mix"),
    favicons: defCon.randString(6, "mix"),
    searchList: defCon.randString(7, "mix"),
    fieldset: defCon.randString(6, "char"),
    legend: defCon.randString(6, "char"),
    settingList: defCon.randString(7, "mix"),
    hk: defCon.randString(5, "mix"),
    gj: defCon.randString(5, "mix"),
    lw: defCon.randString(5, "mix"),
    kh: defCon.randString(5, "mix"),
    ar: defCon.randString(5, "mix"),
    aa: defCon.randString(5, "mix"),
    au: defCon.randString(5, "mix"),
    grid: defCon.randString(7, "char"),
    card: defCon.randString(7, "char"),
    me: defCon.decrypt("Zjl5NG5n"),
    noticeHTML: str => {
      return String(`<div class="${Notice.rName}"><dl>${str}</dl></div>`);
    },
  };

  /* New RAF for setTimeout & setInterval */

  window.requestAnimationFrame ||
    (function () {
      "use strict";
      window.requestAnimationFrame =
        window.msRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        (function () {
          const fps = 60;
          const delay = 1000 / fps;
          const animationStartTime = Date.now();
          let previousCallTime = animationStartTime;
          return function requestAnimationFrame(callback) {
            const requestTime = Date.now();
            const timeout = Math.max(0, delay - (requestTime - previousCallTime));
            const timeToCall = requestTime + timeout;
            previousCallTime = timeToCall;
            return window.setTimeout(function onAnimationFrame() {
              callback(timeToCall - animationStartTime);
            }, timeout);
          };
        })();
      window.cancelAnimationFrame =
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.cancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        function cancelAnimationFrame(id) {
          window.clearTimeout(id);
        };
    })();

  class RAF {
    constructor() {
      this._timerMap = {
        timeout: {},
        interval: {},
      };
    }
    _ticking(_fn, type = "interval", interval = 100, lastTime = Date.now()) {
      const timerSymbol = Symbol(type);
      const step = () => {
        this._setTimerMap(timerSymbol, type, step);
        if (Date.now() - lastTime >= interval || interval < 17) {
          _fn.call();
          lastTime = type === "interval" ? Date.now() : lastTime;
          type === "timeout" && this.clearTimeout(timerSymbol);
        }
      };
      this._setTimerMap(timerSymbol, type, step);
      return timerSymbol;
    }
    _setTimerMap(timerSymbol, type, step) {
      const stack = window.requestAnimationFrame(step);
      this._timerMap[type][timerSymbol] = stack;
    }
    setTimeout(fn, interval) {
      return this._ticking(fn, "timeout", interval);
    }
    clearTimeout(timer) {
      window.cancelAnimationFrame(this._timerMap.timeout[timer]);
      delete this._timerMap.timeout[timer];
    }
    setInterval(fn, interval) {
      return this._ticking(fn, "interval", interval);
    }
    clearInterval(timer) {
      window.cancelAnimationFrame(this._timerMap.interval[timer]);
      delete this._timerMap.interval[timer];
    }
  }

  /* Sleep Promise Function */

  const raf = new RAF();
  const cachedSetTimeout = setTimeout;
  const createSleepPromise = (timeout, { useCachedSetTimeout }) => {
    return new Promise(resolve => {
      useCachedSetTimeout ? cachedSetTimeout(resolve, timeout) : raf.setTimeout(resolve, timeout);
    }).catch(e => {
      error("CreateSleepPromise:", e.message);
    });
  };
  const sleep = function (timeout, { useCachedSetTimeout } = {}) {
    const sleepPromise = createSleepPromise(timeout, { useCachedSetTimeout });
    const promiseFunction = value => {
      return sleepPromise.then(() => {
        return value;
      });
    };
    promiseFunction.then = (...args) => {
      return sleepPromise.then(...args);
    };
    promiseFunction.catch = Promise.resolve().catch;
    return promiseFunction;
  };

  /* Abbreviated functions */

  const oH = Object.prototype.hasOwnProperty;
  const qA = (str, node = document) => {
    return Array.prototype.slice.call(node.querySelectorAll(str), 0);
  };
  const qS = (str, node = document) => {
    return node.querySelector(str);
  };
  const cE = str => {
    return document.createElement(str);
  };

  /* Content-Security-Policy: trustedTypes */

  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    trustedTypesPolicy = window.trustedTypes.createPolicy("default", {
      createHTML: string => {
        return string;
      },
    });
  } else {
    trustedTypesPolicy = {
      createHTML: string => {
        return string;
      },
    };
  }

  /* Get browser core & system parameters */

  const getNavigator = {
    uaData: (navigator => {
      try {
        // eslint-disable-next-line no-undef
        return Boolean(navigator.userAgentData && navigator.userAgentData instanceof NavigatorUAData);
      } catch (e) {
        error("getNavigator.uaData:", e.message);
        return false;
      }
    })(unsafeWindow.navigator),
    init: function (v = this.uaData) {
      return v ? navigator.userAgentData : navigator.userAgent.toLowerCase();
    },
    core: function (u = JSON.stringify(this.init())) {
      return {
        Trident: u.includes("trident") || u.includes("compatible"),
        Presto: u.includes("presto"),
        WebKit: u.includes("applewebkit") || u.includes("Chromium"),
        Gecko: u.includes("gecko") && !u.includes("khtml") && !u.includes("trident") && !u.includes("compatible"),
        Blink: (u.includes("applewebkit") && (u.includes("chromium") || u.includes("chrome"))) || u.includes("Chromium"),
      };
    },
    system: function (u = this.init(), system = "Unknown") {
      if (this.uaData) {
        system = u.platform ? u.platform.toString() : system;
      } else {
        if (/windows|win32|win64|wow32|wow64/g.test(u)) {
          system = "Windows";
        } else if (/macintosh|macintel|mac os x/g.test(u)) {
          system = "macOS";
        } else if (/linux|x11/g.test(u)) {
          system = "Linux";
        } else if (/android|adr/g.test(u)) {
          system = "Android";
        } else if (/ios|iphone|ipad|ipod|iwatch/g.test(u)) {
          system = "iOS";
        }
      }
      return system;
    },
    isCheatUA: function () {
      return (
        (!this.uaData && !!navigator.userAgentData) ||
        (!this.core().Gecko && !isNaN(parseFloat(unsafeWindow.mozInnerScreenX))) ||
        (this.core().Gecko && isNaN(parseFloat(unsafeWindow.mozInnerScreenX)))
      );
    },
  };

  const IS_REAL_GECKO = (getNavigator.core().Gecko && !getNavigator.isCheatUA()) || !isNaN(parseFloat(unsafeWindow.mozInnerScreenX));

  /* expire for fontlist cache */

  const cache = {
    value: (data, eT = 6048e5) => {
      return {
        data: data,
        expired: Date.now() + eT,
      };
    },
    set: (key, ...options) => {
      const obj = defCon.encrypt(JSON.stringify(cache.value(...options)));
      GMsetValue(key, obj);
    },
    get: async key => {
      const obj = await GMgetValue(key);
      if (!obj) {
        return null;
      } else {
        try {
          const value = JSON.parse(defCon.decrypt(obj));
          const data = value.data;
          const expiredTime = value.expired;
          const curTime = Date.now();
          if (expiredTime > curTime && typeof data !== "undefined") {
            return data;
          } else {
            cache.remove(key);
            return null;
          }
        } catch (e) {
          error("Cache.get:", e.message);
          cache.remove(key);
          return null;
        }
      }
    },
    remove: key => {
      GMdeleteValue(key);
    },
  };

  /* Initialized important functions */

  function getScriptNameViaLanguage() {
    const language = navigator.language || "zh-CN";
    const name_i18n = new RegExp(`(@name:${language}\\s+)(\\S+)`);
    const languageString = GMinfo.scriptMetaStr.match(name_i18n);
    const scriptName = languageString ? languageString[2] : GMinfo.script.name;
    return String(scriptName || "Search Engine Assistant");
  }

  function getCookie(sKey) {
    const cookies = decodeURIComponent(
      document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
    );
    return cookies ? cookies.replace(/[a-z=]+/gi, "") : 0;
  }

  function setRAFInterval(callback, interval, { runNow }) {
    if (runNow === true) {
      const shouldFinish = callback();
      if (shouldFinish) {
        return;
      }
    }
    const tickId = raf.setInterval(shouldFinish => {
      shouldFinish = callback() || false;
      if (shouldFinish) {
        raf.clearInterval(tickId);
        return;
      }
    }, interval);
  }

  function deBounce(fn, delay, timer, immediate) {
    return function () {
      const _this = this;
      const args = arguments;
      if (!defCon[timer] && immediate) {
        fn.apply(_this, args);
      }
      if (defCon[timer]) {
        raf.clearTimeout(defCon[timer]);
      }
      defCon[timer] = raf.setTimeout(function () {
        fn.apply(_this, args);
        delete defCon[timer];
      }, delay);
    };
  }

  function getUrlParam(paraName) {
    try {
      switch (paraName) {
        case null:
        case undefined:
        case "":
          return "";
        case "/":
          return document.location.pathname.split("/")[1] || "";
        default:
          return new URLSearchParams(document.location.search).get(paraName) || "";
      }
    } catch (e) {
      error("getUrlParam:", e.message);
      return "";
    }
  }

  /* GMnotification Functions */

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
    scroll: { maxHeight: 400, showOnHover: false },
    rtl: false,
    callbacks: { beforeShow: [], onShow: [], afterShow: [], onClose: [], afterClose: [], onClick: [], onHover: [], onTemplate: [] },
  };
  const options = Defaults;
  const getCallback = (ref, eventName) => {
    if (oH.call(ref.callbacks, eventName)) {
      ref.callbacks[eventName].forEach(cb => {
        if (typeof cb === "function") {
          cb.apply(ref);
        }
      });
    }
  };

  const addModal = () => {
    if (document.getElementsByClassName(`${Notice.noticejs}-modal`).length <= 0) {
      const element = cE("div");
      element.classList.add(`${Notice.noticejs}-modal`);
      element.classList.add(`${Notice.noticejs}-modal-open`);
      document.body.appendChild(element);
      raf.setTimeout(() => {
        element.className = `${Notice.noticejs}-modal`;
      }, 200);
    }
  };

  const closeItem = item => {
    getCallback(options, "onClose");
    if (options.animation !== null && options.animation.close !== null) {
      item.className += " " + options.animation.close;
    }
    raf.setTimeout(() => {
      item.remove();
    }, 200);
    if (options.modal === true && qA(`[${Notice.noticejs}-modal='true']`).length >= 1) {
      qS(`.${Notice.noticejs}-modal`).className += ` ${Notice.noticejs}-modal-close`;
      raf.setTimeout(() => {
        qS(`.${Notice.noticejs}-modal`).remove();
      }, 500);
    }
    const closetNode = item.closest(`.${Notice.noticejs}`);
    const closetNodeCName = closetNode ? closetNode.className.replace(`${Notice.noticejs}`, "").trim() : `${Notice.noticejs}-bottomRight`;
    const position = "." + closetNodeCName;
    raf.setTimeout(() => {
      if (qA(position + ` .${Notice.item}`).length <= 0) {
        qS(position) && qS(position).remove();
      }
    }, 500);
  };

  const addListener = item => {
    if (options.closeWith.includes("button")) {
      if (item.querySelector(`.${Notice.close}`)) {
        item.querySelector(`.${Notice.close}`).addEventListener("click", () => {
          closeItem(item);
        });
      }
    }
    if (options.closeWith.includes("click")) {
      item.style.cursor = "pointer";
      item.addEventListener("click", e => {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
          closeItem(item);
        }
      });
    } else {
      item.addEventListener("click", e => {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
        }
      });
    }
    item.addEventListener("mouseover", () => {
      getCallback(options, "onHover");
    });
  };

  const appendNoticeJs = (noticeJsHeader, noticeJsBody, noticeJsProgressBar) => {
    const target_class = `.${Notice.noticejs}-` + options.position;
    const noticeJsItem = cE("div");
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
      qS(target_class).textContent = "";
    }
    if (options.animation !== null && options.animation.open !== null) {
      noticeJsItem.className += " " + options.animation.open;
    }
    if (options.modal === true) {
      noticeJsItem.setAttribute(`${Notice.noticejs}-modal`, "true");
      addModal();
    }
    addListener(noticeJsItem);
    getCallback(options, "beforeShow");
    getCallback(options, "onShow");
    if (options.newestOnTop === true) {
      qS(target_class) && qS(target_class).insertAdjacentElement("afterbegin", noticeJsItem);
    } else {
      qS(target_class) && qS(target_class).appendChild(noticeJsItem);
    }
    getCallback(options, "afterShow");
    return noticeJsItem;
  };

  class Components {
    createContainer() {
      const element_class = `${Notice.noticejs}-` + options.position;
      const element = cE("gb-notice");
      element.classList.add(`${Notice.noticejs}`);
      element.classList.add(element_class);
      element.id = element_class;
      return element;
    }
    createHeader() {
      let element;
      if (options.title && options.title !== "") {
        element = cE("div");
        element.setAttribute("class", `${Notice.noticejs}-heading`);
        element.textContent = options.title;
      }
      if (options.closeWith.includes("button")) {
        const close = cE("div");
        close.setAttribute("class", `${Notice.close}`);
        close.innerHTML = trustedTypesPolicy.createHTML("&times;");
        if (element) {
          element.appendChild(close);
        } else {
          element = close;
        }
      }
      return element;
    }
    createBody() {
      const element = cE("div");
      element.setAttribute("class", `${Notice.noticejs}-body`);
      const content = cE("div");
      content.setAttribute("class", `${Notice.noticejs}-content`);
      content.innerHTML = trustedTypesPolicy.createHTML(options.text);
      element.appendChild(content);
      if (options.scroll !== null && options.scroll.maxHeight !== "") {
        element.style.overflowY = "auto";
        element.style.maxHeight = `min(calc(100vh - 100px), ${options.scroll.maxHeight}px)`;
        if (options.scroll.showOnHover === true) {
          element.style.visibility = "hidden";
        }
      }
      return element;
    }
    createProgressBar() {
      const element = cE("div");
      element.setAttribute("class", `${Notice.noticejs}-progressbar`);
      const bar = cE("div");
      bar.setAttribute("class", `${Notice.noticejs}-bar`);
      element.appendChild(bar);
      if (options.progressBar === true && typeof options.timeout !== "boolean" && options.timeout !== false) {
        let width = 100;
        const progress = raf.setInterval(() => {
          if (width <= 0) {
            raf.clearInterval(progress);
            let item = element.closest(`div.${Notice.item}`);
            if (options.animation !== null && options.animation.close !== null) {
              item.className = item.className.replace(new RegExp("(?:^|\\s)" + options.animation.open + "(?:\\s|$)"), " ");
              item.className += " " + options.animation.close;
              const close_time = parseInt(options.timeout) + 500;
              raf.setTimeout(() => {
                closeItem(item);
              }, close_time);
            } else {
              closeItem(item);
            }
          } else {
            width = width - 1;
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
      let container = this.component.createContainer();
      if (document.body && qS(`.${Notice.noticejs}-` + this.options.position) === null) {
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
      if (typeof cb === "function" && oH.call(this.options.callbacks, eventName)) {
        this.options.callbacks[eventName].push(cb);
      }
      return this;
    }
    static overrideDefaults(options) {
      this.options = Object.assign(Defaults, options);
      return this;
    }
  }

  const fixedZoomNodeStyle = position => {
    if (document.body) {
      const zoom = Number(window.getComputedStyle(document.body, null).getPropertyValue("zoom"));
      const transform = window.getComputedStyle(document.body, null).getPropertyValue("transform");
      const thatNotice = qS(`#${Notice.noticejs}-${position}`);
      const rePosition = (item, top, distTop) => {
        let sT = -defCon.elCompat.getBoundingClientRect().top;
        item.style.top = `${top + sT}px`;
        window.scrollTo(0, sT - 1e-5);
        if (item.childNodes.length === 1) {
          defCon[distTop] = () => {
            sT = -defCon.elCompat.getBoundingClientRect().top;
            item.style.top = `${top + sT}px`;
          };
          document.addEventListener("scroll", defCon[distTop]);
        }
      };
      if (zoom && zoom !== 1) {
        thatNotice.style.cssText += `zoom:${1 / zoom}!important`;
      } else if (IS_REAL_GECKO && transform && transform !== "none") {
        const ratio = Number(transform.split(",")[3]) || 1;
        if (ratio && ratio !== 1) {
          if (thatNotice) {
            thatNotice.style.cssText += `width:${defCon.elCompat.clientWidth / ratio}px;height:${defCon.elCompat.clientHeight / ratio}px;top:0;left:0`;
            thatNotice.childNodes.forEach((item, index, array) => {
              let curItem = 0;
              switch (position) {
                case "topRight":
                  item.style.cssText += String(
                    `transform-origin:right top 0;
                      transform:scale(${1 / ratio});
                      position:absolute;
                      right:${10 / ratio}px;
                      top:${10 / ratio}px`
                  );
                  break;
                default:
                  curItem = !index ? 10 / ratio : (array[index - 1].clientHeight + 10) / ratio + Number(array[index - 1].style.bottom.replace("px", ""));
                  item.style.cssText += String(
                    `transform-origin:right bottom 0;
                      transform:scale(${1 / ratio});
                      position:absolute;
                      right:${10 / ratio}px;
                      bottom:${curItem}px`
                  );
                  break;
              }
            });
            rePosition(thatNotice, 0, position);
          }
        }
      }
    }
  };

  const GMnotification = ({ title, text, type, scroll, width, closeWith, newestOnTop, progressBar, timeout, callbacks, position }) => {
    try {
      new NoticeJs({
        title: title || "",
        text: text,
        type: type || `${Notice.success}`,
        width: width || 400,
        newestOnTop: newestOnTop || false,
        closeWith: closeWith || ["button"],
        progressBar: typeof progressBar === "undefined" ? true : progressBar,
        timeout: typeof timeout === "undefined" ? 30 : timeout,
        scroll: scroll || { maxHeight: 400, showOnHover: true },
        callbacks: { ...callbacks },
        position: position || "bottomRight",
      }).show();
      fixedZoomNodeStyle(position || "bottomRight");
    } catch (e) {
      error("GMnotification:", e.message);
    }
  };

  /* initialize configure_data function */

  let config_date, isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds;
  async function init_Config_Data() {
    const configure = await GMgetValue("_configures_");
    if (!configure) {
      // delete Invalid config data for NG.
      const keys = await GMlistValues();
      for (let key of keys) {
        GMdeleteValue(key);
      }
      // rebuild if not exist.
      isAutoUpdate = true;
      keywordHighlight = false;
      isHotkey = true;
      selectedEngine = [1, 2, 3];
      localWindow = true;
      googleJump = true;
      antiLinkRedirect = true;
      antiAds = false;
      config_date = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds };
      GMsetValue("_configures_", defCon.encrypt(JSON.stringify(config_date)));
    } else {
      config_date = JSON.parse(defCon.decrypt(configure));
      isAutoUpdate = Boolean(config_date.isAutoUpdate);
      keywordHighlight = Boolean(config_date.keywordHighlight);
      isHotkey = Boolean(config_date.isHotkey);
      selectedEngine = Array.isArray(config_date.selectedEngine) ? config_date.selectedEngine : [1, 2, 3];
      localWindow = Boolean(config_date.localWindow);
      googleJump = Boolean(config_date.googleJump);
      antiLinkRedirect = Boolean(config_date.antiLinkRedirect);
      antiAds = Boolean(config_date.antiAds);
    }
  }

  /* auto check update */

  !(async function AutoUpdate() {
    "use strict";
    await init_Config_Data();
    const cache_autoupdate = await cache.get("_autoupdate_");
    if (CUR_WINDOW_TOP && isAutoUpdate && (!cache_autoupdate || getUrlParam("whoami").endsWith(Notice.me))) {
      const isNeedUpdate = (current, compare) => {
        let updateFlag = false;
        const compare_array = compare.split(".");
        const current_array = current.split(".");
        if (compare_array.length === current_array.length) {
          for (let i = 0; i < compare_array.length; i++) {
            if (parseInt(compare_array[i]) < parseInt(current_array[i])) {
              break;
            } else {
              if (parseInt(compare_array[i]) === parseInt(current_array[i])) {
                continue;
              } else {
                updateFlag = true;
                break;
              }
            }
          }
        } else {
          updateFlag = true;
        }
        return updateFlag;
      };
      const rnd = Date.now().toString().slice(-8);
      const update = url => {
        return new Promise((resolve, reject) => {
          GMxmlhttpRequest({
            url: url,
            nocache: true,
            headers: { Accept: "*/*", Referer: url.replace(new URL(url).pathname, "") },
            method: "GET",
            timeout: 9e3,
            onreadystatechange: response => {
              if (response.status === 200 && response.readyState === 4) {
                const res = response.responseText || response.response || "";
                res && resolve({ res: res, source: url });
              }
            },
            ontimeout: () => {
              reject(new Error("Update.TimeoutError"));
            },
          });
        }).catch(e => {
          error("AutoUpdate.XHR:", e.message);
          return { res: undefined, source: undefined };
        });
      };
      Promise.race([
        update(`https://greasyfork.org/scripts/12909/code/Google%20%20baidu%20Switcher%20(ALL%20in%20One).meta.js?${rnd}`),
        update(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js?${rnd}`),
        update(`https://openuserjs.org/install/f9y4ng/Google_baidu_Switcher_(ALL_in_One).meta.js?${rnd}`),
      ])
        .then(value => {
          let version, note;
          let updateInfoList = "";
          value.res
            ? value.res.split(/[\r\n]+/).forEach(item => {
                const versions = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
                version = versions ? versions[2] : version;
                const notes = item.match(/^(\/\/\s+@note\s+)(.+)$/);
                note = notes ? notes[2] : note;
              })
            : console.warn(
                String(`%c[GB-UpdateError]%c\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!`),
                "font-weight:bold;color:crimson",
                "color:darkred"
              );
          note &&
            note.split(/\\n/g).forEach(item => {
              updateInfoList += `<li>${item}</li>`;
            });
          const updateInfo = `<dd><ul>${note ? updateInfoList : "暂时无法获取更新详情。"}</ul></dd>`;
          const updateHost = value.source ? new URL(value.source).hostname : null;
          updateHost && debug("\ud83d\udd33 [UpdateURI]: %c%s", "color:crimson", updateHost.replace(/raw\.|usercontent/g, ""));
          if (version) {
            if (isNeedUpdate(defCon.curVersion, version)) {
              const preInstall = () => {
                sleep(5e2)(value.source.replace(".meta.", ".user."))
                  .then(url => {
                    if (IS_REAL_GECKO) {
                      GMopenInTab(isGM ? url.replace(/\?\d+/g, "") : url, false);
                    } else {
                      location.href = url;
                    }
                    return true;
                  })
                  .then(e => {
                    const refresh = () => {
                      location.reload(e);
                    };
                    GMnotification({
                      title: `升级提示！`,
                      text: Notice.noticeHTML(
                        `<dd id="${Notice.random}_loading">${IS_REAL_GECKO ? "已经在新窗口打开脚本升级页面！" : "正在申请脚本更新安装页面，请稍后……"}</dd>
                          <dd>请点击<strong>这里</strong>刷新页面，以使新版本脚本生效！</dd>`
                      ),
                      type: `${Notice.info}`,
                      closeWith: ["click"],
                      timeout: false,
                      position: "topRight",
                      callbacks: { onClose: [refresh] },
                    });
                    return qS(`#${Notice.random}_loading`);
                  })
                  .then(r => {
                    sleep(2e3, { useCachedSetTimeout: true })(r).then(s => {
                      s && s.remove();
                    });
                  })
                  .catch(e => {
                    error("preInstall:", e.message);
                  });
              };
              sleep(5e2, { useCachedSetTimeout: true })
                .then(() => {
                  GMnotification({
                    title: `更新检测`,
                    text: Notice.noticeHTML(
                      `<dd><span>发现新版本</span><i>V${version}</i>，点击可自动更新。</dd>${updateInfo}<dd id="${Notice.stopUpdate}"><input type="checkbox">一周内不再提醒</dd>`
                    ),
                    type: `${Notice.warning}`,
                    closeWith: ["click"],
                    timeout: 60,
                    callbacks: { onClick: [preInstall] },
                  });
                  return qS(`#${Notice.stopUpdate}`);
                })
                .then(r => {
                  r &&
                    r.addEventListener("click", event => {
                      event.stopPropagation();
                      closeItem(qS(`gb-notice.${Notice.noticejs} .${Notice.warning}`));
                      cache.set("_autoupdate_", version);
                    });
                })
                .then(() => {
                  console.log(
                    String(`%c[GB-Update]%c\nWe found a new version: %c${version}%c.You can update now!`),
                    "font-weight:bold;color:crimson",
                    "color:0",
                    "color:crimson",
                    "color:0"
                  );
                });
            } else {
              sleep(5e2, { useCachedSetTimeout: true })
                .then(() => {
                  GMnotification({
                    title: `更新检测`,
                    text: Notice.noticeHTML(`<dd style="margin: 10px 0"><span>恭喜您！</span>当前版本 <i>${defCon.curVersion}</i> 已为最新！</dd>`),
                    type: `${Notice.success}`,
                    closeWith: ["click"],
                    timeout: 5,
                  });
                })
                .then(cache.set("_autoupdate_", version))
                .then(() => {
                  console.log(`%c[GB-Update]%c\nCurretVersion: %c${defCon.curVersion}%c is up-to-date!`, "font-weight:bold;color:darkcyan", "color:0", "color:crimson", "color:0");
                });
            }
          }
        })
        .catch(e => {
          error("CheckUpdate:", e);
        });
    }
  })();

  /* init CONST values */

  const IS_MACOS = getNavigator.system().startsWith("macOS");
  const API_ICO_YANDEX = defCon.decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI=");
  const API_ICO_BACKUP = defCon.decrypt("aHR0cHMlM0ElMkYlMkZzMS5heDF4LmNvbSUyRjIwMjIlMkYwOCUyRjExJTJGdkdXVUc4LnBuZw==");
  const API_ICO_DDUCKGO = defCon.decrypt("aHR0cHMlM0ElMkYlMkZpY29ucy5kdWNrZHVja2dvLmNvbSUyRmlwMg==");
  const HOST_URI = defCon.decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkYxMjkwOQ==");
  const FEEDBACK_URI = GMinfo.scriptMetaStr.match(/(\u0040\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0055\u0052\u004c\s+)(\S+)/)[2];
  const CONST = {
    allSiteURIs: "",
    isSecurityPolicy: false,
    rndID: defCon.randString(9, "char"),
    rndclassName: defCon.randString(9, "char"),
    rndstyleName: defCon.randString(9, "char"),
    leftButton: defCon.randString(6, "mix"),
    rightButton: defCon.randString(6, "mix"),
    scrollspan: defCon.randString(8, "char"),
    scrollspan2: defCon.randString(8, "char"),
    scrollbars: defCon.randString(8, "char"),
    scrollbars2: defCon.randString(8, "char"),
  };

  CONST.noticeCss = String(
    String(
      `.${Notice.noticejs} *,.${Notice.noticejs} *::after,.${Notice.noticejs} *::before {scrollbar-width:thin;box-sizing:content-box;line-height:normal}.${Notice.animated}{animation-duration:1s;animation-fill-mode:both}.${Notice.animated}.infinite{animation-iteration-count:infinite}.${Notice.animated}.hinge{animation-duration:2s}.${Notice.animated}.bounceIn,.${Notice.animated}.bounceOut,.${Notice.animated}.flipOutX,.${Notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}#${CONST.rndID} *{font-family:'Helvetica',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}.${Notice.noticejs},.${Notice.noticejs} *{font-family:'Microsoft YaHei',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}.${Notice.noticejs}-top{top:0;width:100%}.${Notice.noticejs}-top .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-topRight{top:10px;right:10px;z-index:10059!important}.${Notice.noticejs}-topLeft{top:10px;left:10px}.${Notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}-middleLeft,.${Notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${Notice.noticejs}-middleLeft{left:10px}.${Notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${Notice.noticejs}-bottom{bottom:0;width:100%}.${Notice.noticejs}-bottom .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-bottomRight{bottom:10px;right:10px;z-index:10055!important}.${Notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${Notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs} .${Notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}` +
        `.${Notice.noticejs} .${Notice.item} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.item} .${Notice.close}:hover{opacity:.5;color:#000;cursor:pointer}.${Notice.noticejs} .${Notice.item} a{color:#fff;border-bottom:1px dashed #fff}.${Notice.noticejs} .${Notice.item} a,.${Notice.noticejs} .${Notice.item} a:hover{text-decoration:none}.${Notice.noticejs} .${Notice.success}{background-color:#64ce83}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#3da95c;color:#fff;padding:10px;font-weight:700}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.info}{background-color:#3ea2ff}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#067cea;color:#fff;padding:10px;font-weight:700}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.warning}{background-color:#ff7f48;}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#f97038;color:#fff;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.error}{background-color:#e74c3c}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#e93724;color:#fff;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body:hover{visibility:visible!important}` +
        `.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-content{visibility:visible}.${Notice.configuration} input[disabled],.${Notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${Notice.noticejs} .${Notice.configuration}{background-color:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #aaa;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}:hover{opacity:.5;color:#555;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#e7e7e7;color:#333;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body{color:#333;padding:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#3da95c;}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#067cea;}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#f44e06;}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar{width:100%;background-color:#fd5f4e;margin-top:-1px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d;}` +
        `.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar{width:100%;background-color:#efefef;margin-top:-1px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{background:#ccc;width:100%;height:5px}@keyframes ${Notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${Notice.noticejs}-fadeOut{animation-name:${Notice.noticejs}-fadeOut}@keyframes ${Notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${Notice.noticejs}-modal-out{to{opacity:0}}.${Notice.noticejs}{position:fixed;z-index:10050}.${Notice.noticejs} ::-webkit-scrollbar{width:8px}.${Notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${Notice.noticejs} ::-webkit-scrollbar-track{border-radius:3px}.${Notice.noticejs} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${Notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#cccccc;}.${Notice.noticejs}-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:999999;opacity:.3;left:0;top:0}.${Notice.noticejs}-modal-open{opacity:0;animation:${Notice.noticejs}-modal-in .3s ease-out}.${Notice.noticejs}-modal-close{animation:${Notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${Notice.rName}{padding:2px!important}.${Notice.noticejs} .${Notice.rName} dl{margin:0!important;padding:1px!important}.${Notice.noticejs} .${Notice.rName} dl dt{margin:2px 0 6px 0!important;font-size:16px!important;font-weight:900!important}.${Notice.noticejs} .${Notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${Notice.noticejs} .${Notice.rName} .${Notice.center}{width:100%;text-align:center!important}.${Notice.noticejs} .${Notice.rName} dl dd em{color:#fff;font-family:Candara,sans-serif!important;font-size:24px!important;padding:0 5px;font-style:italic}.${Notice.noticejs} .${Notice.rName} dl dd span{font-weight:700;font-size:15px!important;margin-right:8px}.${Notice.noticejs} .${Notice.rName} dl dd i{font-family:Candara,sans-serif!important;font-size:20px!important}.${Notice.noticejs} .${Notice.rName} dl dd .im{color:gold;font-size:16px!important;font-weight:900;padding:0 3px}` +
        `.${Notice.noticejs} .${Notice.warning} .${Notice.rName} ul{width:90%;display:inline-block;text-align:left;vertical-align:top;color:rgba(255, 255, 255, 0.8);padding:4px 4px 8px 4px;margin:0 0 0 8px;counter-reset:xxx 0}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} li{list-style:none;font-style:italic!important;line-height:150%;position:relative;padding:0 0 2px 2px;margin:0 0 0 2px;-webkit-transition:.12s;transition:.12s}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} li::before{content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-family:Candara,sans-serif;font-size:1em;display:inline-block;width:1.5em;margin-left:-1.5em;-webkit-transition:.5s;transition:.5s}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} #${Notice.stopUpdate}{float:right;margin:0px 5px!important;font-size:12px!important;cursor:help}#${Notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;vertical-align:top;margin:2px 4px 0 0;width:14px;height:14px;cursor:help;-webkit-appearance:none;border-radius:50%;border:2px solid #fff;background:#ffa077;}#${Notice.stopUpdate}:hover input,#${Notice.stopUpdate} input:hover{background:#ba2c1d;}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}{display:none!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label{cursor:pointer;padding:11px 9px;margin:0 0 0 25px;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;-webkit-border-radius:7px;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label::after{position:absolute;top:0;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:100px;border-radius:100px;padding:5px;font-size:1em;font-weight:700;color:#fff;content:"OFF"}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label{cursor:pointer;margin:0 0 0 25px;-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}` +
        `.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label::after{content:"ON";left:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}.${Notice.noticejs} .${Notice.configuration} button.${Notice.searchButton}{display:flex;align-content:center;justify-content:center;align-items:center;width:146px;height:25px;margin:0 0 10px 0;padding:6px 0;border-radius:6px;border:2px solid #eee;background:#fff;box-shadow:1px 1px 0px 1px #aaa;font-size:14px!important;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} button.${Notice.searchButton}:hover{color:red;box-shadow:1px 1px 3px 0px #888;}.${Notice.noticejs} .${Notice.configuration} span.${Notice.favicon}{width:24px;height:24px;margin:0 6px 0 0}.${Notice.noticejs} .${Notice.configuration} ul.${Notice.searchList}{list-style:none;margin:5px;padding:2px;}.${Notice.noticejs} .${Notice.configuration} ul.${Notice.searchList} li{list-style:none;font-style:normal;margin:0}.${Notice.noticejs} .${Notice.configuration} .${Notice.fieldset}{border:2px dashed #dfdfdf;border-radius:10px;padding:4px 6px;margin:2px;background:transparent!important;width:auto;height:auto;display:block}.${Notice.noticejs} .${Notice.configuration} .${Notice.legend}{width:auto;margin:0;color:#8b0000!important;font-size:14px!important;font-weight:900!important;-webkit-user-select:all;user-select:all;display:block;padding:0 8px}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList}{padding:0;margin:0;background:transparent!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} li{display:flex;list-style:none;margin:3px 0;border:none;float:none;background:transparent!important;cursor:default;-webkit-user-select:none;user-select:none;padding:2px 8px 2px 12px;height:36px;align-content:center;justify-content:space-between}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} li>div{font:normal 700 14px/150% 'Microsoft YaHei','Helvetica Neue',sans-serif!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} button{background:#fafafa;border:1px solid #ccc;border-radius:8px;min-width:65px;height:36px;padding:4px 8px;margin:0 0 0 8px;box-sizing:border-box;font-size:14px!important;font-weight:700;color:#5e5e5e;box-shadow:1px 1px 1px 0 #ccc}` +
        `.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} button:hover{background:#fff;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.random}__content{margin:0;height:268px;display:block}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.grid}{overflow-y:auto;overflow-x:hidden;box-sizing:border-box;max-height:237px;width:266px;padding:8px;margin:4px 0 3px 0;overscroll-behavior:contain;}.${Notice.card} h2{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.${Notice.card}{--background:#fff;--background-chackbox:#0082ff;--background-image:#fff, rgba(0, 107, 175, 0.2);--text-color:#666;--text-headline:#000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none; -moz-user-select:none;-ms-user-select:none;user-select:none;padding:0;margin:0}.${Notice.card}__input{position:absolute;display:block;outline:none;border:none;background:none;padding:0;margin:0;-webkit-appearance:none;}.${Notice.card}__input:checked ~ .${Notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#fff;--chack-scale:1;--chack-opacity:1;}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover-chackbox--svg{--stroke-color:#fff;--stroke-dashoffset:0;}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover:after{--opacity-bg:0;}` +
        `.${Notice.card}__input:disabled ~ .${Notice.card}__body{cursor:not-allowed;opacity:0.5;}.${Notice.card}__input:disabled ~ .${Notice.card}__body:active{--scale:1;}.${Notice.card}__body{display:grid;grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto;background:var(--background);height:var(--card-height);width:var(--card-witght);border-radius:var(--card-radius);overflow:hidden;position:relative;cursor:pointer;box-shadow:var(--shadow, 1px 1px 3px 1px #cccccc);-webkit-transition:box-shadow var(--transition), -webkit-transform var(--transition);transition:box-shadow var(--transition), -webkit-transform var(--transition);transition:transform var(--transition), box-shadow var(--transition);transition:transform var(--transition), box-shadow var(--transition), -webkit-transform var(--transition);-webkit-transform:scale(var(--scale, 1)) translateZ(0);transform:scale(var(--scale, 1)) translateZ(0);}.${Notice.card}__body:active{--scale:0.96;}.${Notice.card}__body-cover-image{position:absolute;left:10px;top:8px;z-index:100;width:32px;height:32px;}.${Notice.card}__body-cover-image span.${Notice.favicons}{display:block;width:32px;height:32px}.${Notice.card}__body-cover-chackbox{background:var(--chack-bg, var(--background-chackbox));border:2px solid var(--chack-border, #fff);position:absolute;right:10px;top:10px;z-index:1;width:28px;height:28px;border-radius:50%;opacity:var(--chack-opacity, 0);transition:transform var(--transition), opacity calc(var(--transition) * 1.2) linear, -webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale, 0));transform:scale(var(--chack-scale, 0));}.${Notice.card}__body-cover-chackbox--svg{visibility:visible!important;width:13px;height:11px;display:inline-block;vertical-align:top;fill:none;margin:8px 0 0 7px;stroke:var(--stroke-color, #fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset, 16px);-webkit-transition:stroke-dashoffset 0.4s ease var(--transition);transition:stroke-dashoffset 0.4s ease var(--transition);}` +
        `.${Notice.card}__body-header{height:var(--header-height);background:var(--background);padding:4px 10px 6px 50px;}.${Notice.card}__body-header-title{color:var(--text-headline);font-weight:700!important;margin-bottom:0!important;font-size:15px!important;}.${Notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important;}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}#${Notice.random}_help{position:relative;right:16%;background:#f07f6a!important;color:#ffffff!important;padding:4px 15px!important;border:1px solid transparent;box-shadow:0 0 6px 0 #f5846f;cursor:help}#${Notice.random}_clear{margin:0 0 0 12px;cursor:pointer;color:#666;font-weight:500}#${Notice.random}_clear:hover{color:red}#${Notice.random}_clear u{padding:0 2px;text-decoration:none}`
    )
  );

  /* AntiRedirect Functions */

  function clearHrefEvents(node) {
    node.removeAttribute("data-hveid");
    node.removeAttribute("data-cthref");
    node.removeAttribute("data-jsarwt");
    node.removeAttribute("data-usg");
    node.removeAttribute("data-ved");
    node.removeAttribute("ping");
    node.removeAttribute("onmouseover");
    node.setAttribute("target", "_blank");
    return !node.getAttribute("ping");
  }

  function addTargetEvent(str, siteName) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [${siteName}-Anti-Redirect]`);
    requestNodes.forEach(node => {
      node.setAttribute("target", "_blank");
      node.removeAttribute("h");
    });
  }

  function antiRedirect_Baidu(str) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [Baidu-Anti-Redirect]`);
    requestNodes.forEach(node => {
      node.setAttribute("gd-antiredirect-status", "pending");
      const url = node.href.replace(/http:/, "https:");
      return new Promise((resolve, reject) => {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.href.replace(/^http:/, "https:") },
          method: "GET",
          timeout: 5e3,
          onreadystatechange: response => {
            if (response.status === 200 && response.readyState === 4) {
              resolve(response.finalUrl);
            }
          },
          onerror: e => {
            if (e.error && e.error.includes("Request was redirected to a not whitelisted URL")) {
              const rUrl = e.error.toString().match(/Refused to connect to "([^"]*)"/)[1];
              if (typeof rUrl === "undefined" || rUrl === null || rUrl === "" || rUrl.includes("www.baidu.com/search/error")) {
                reject(new Error(`URLNotExistError`));
              }
              resolve(rUrl);
            } else if (e.responseHeaders && e.responseHeaders.match(/Location:\s*([\S]+)/)) {
              resolve(e.responseHeaders.match(/Location:\s*([\S]+)/)[1]);
            } else {
              reject(new Error(`URLBrokenError`));
            }
          },
          ontimeout: () => {
            warn("\ud83d\udd33 Timeout-Retry: %o", { Node: node, Text: node.textContent, URL: node.href });
            node.style.backgroundColor = "lemonchiffon";
            GMxmlhttpRequest({
              url: url,
              headers: { Accept: "*/*", Referer: location.href.replace(/^http:/, "https:") },
              method: "GET",
              timeout: 12e3,
              onload: response => {
                resolve(response.finalUrl);
              },
              onerror: e => {
                if (e.error && e.error.includes("Request was redirected to a not whitelisted URL")) {
                  const rUrl = e.error.toString().match(/Refused to connect to "([^"]*)"/)[1];
                  if (typeof rUrl === "undefined" || rUrl === null || rUrl === "" || rUrl.includes("www.baidu.com/search/error")) {
                    reject(new Error(`URLNotExistError`));
                  }
                  resolve(rUrl);
                } else if (e.responseHeaders && e.responseHeaders.match(/Location:\s*([\S]+)/)) {
                  resolve(e.responseHeaders.match(/Location:\s*([\S]+)/)[1]);
                } else {
                  reject(new Error(`URLBrokenError`));
                }
              },
              ontimeout: () => {
                reject(new Error(`TimeoutError`));
              },
            });
          },
        });
      })
        .then(res => {
          debug("\ud83d\udd33", res);
          node.href = res;
          node.style.backgroundColor = null;
          node.setAttribute("gd-antiredirect-status", "success");
        })
        .catch(e => {
          node.style = "color:gray!important;text-decoration:line-through wavy red!important";
          node.setAttribute("gd-antiredirect-status", "failure");
          error("antiRedirect_Baidu: %s %O", e.message, { Node: node, Text: node.textContent, URL: node.href });
        });
    });
  }

  function antiRedirect_Sogou(str) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [Sogou-Anti-Redirect]`);
    requestNodes.forEach(node => {
      node.setAttribute("gd-antiredirect-status", "pending");
      const url = node.href;
      return new Promise((resolve, reject) => {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.href },
          method: "GET",
          timeout: 8e3,
          onreadystatechange: response => {
            if (response.status === 200 && response.readyState === 4) {
              const resText = response.responseText || response.response || "";
              let res = resText.match(/(URL\s*=\s*')([^']+)(')/);
              res = res ? res[2] : response.finalUrl || null;
              resolve(res);
            }
          },
          onerror: () => {
            reject(new Error(`URLBrokenError`));
          },
          ontimeout: () => {
            reject(new Error(`TimeoutError`));
          },
        });
      })
        .then(res => {
          debug("\ud83d\udd33", res);
          node.href = res || node.href;
          node.setAttribute("gd-antiredirect-status", "success");
        })
        .catch(e => {
          node.style = "color:gray!important;text-decoration:line-through wavy red!important";
          node.setAttribute("gd-antiredirect-status", "failure");
          error("antiRedirect_Sogou: %s %O", e.message, { Node: node, Text: node.textContent, URL: node.href });
        });
    });
  }

  function antiRedirect_Bing(str) {
    const requestNodes = qA(str);
    requestNodes.length && count("\ud83d\udd33 [Bing-Anti-Redirect]");
    requestNodes.forEach(node => {
      node.setAttribute("gd-antiredirect-status", "pending");
      const url = node.href;
      return new Promise((resolve, reject) => {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.href },
          method: "GET",
          timeout: 8e3,
          onreadystatechange: response => {
            if (response.status === 200 && response.readyState === 4) {
              const resText = response.responseText || response.response || "";
              let res = resText.match(/(var\s+u\s*=\s*")([^"]+)("\s*;\s*\r\n)/i);
              res = res ? res[2] : response.finalUrl || null;
              resolve(res);
            }
          },
          onerror: () => {
            reject(new Error(`URLBrokenError`));
          },
          ontimeout: () => {
            reject(new Error(`TimeoutError`));
          },
        });
      })
        .then(res => {
          debug("\ud83d\udd33", res);
          node.href = res || node.href;
          node.removeAttribute("h");
          node.setAttribute("gd-antiredirect-status", "success");
        })
        .catch(e => {
          node.style = "color:gray!important;text-decoration:line-through wavy red!important";
          node.setAttribute("gd-antiredirect-status", "failure");
          error("antiRedirect_Bing: %s %O", e.message, { Node: node, Text: node.textContent, URL: node.href });
        });
    });
    addTargetEvent(".b_algo a[h]:not([gd-antiredirect-status])", "Bing.exp");
  }

  function antiRedirect_Goolge(str) {
    const requestNodes = qA(str);
    requestNodes.length && count("\ud83d\udd33 [Google-Anti-Redirect]");
    requestNodes.forEach(node => {
      node.getAttribute("href") &&
        (node.getAttribute("data-hveid") ||
          node.getAttribute("data-usg") ||
          node.getAttribute("data-cthref") ||
          node.getAttribute("data-ved") ||
          node.getAttribute("ping") ||
          node.getAttribute("data-jsarwt") ||
          node.getAttribute("onmouseover")) &&
        clearHrefEvents(node) &&
        node.setAttribute("gd-antiredirect-status", "success");
    });
  }

  function antiRedirect_So360(str) {
    const requestNodes = qA(str);
    requestNodes.length && count("\ud83d\udd33 [So360-Anti-Redirect]");
    requestNodes.forEach(node => {
      if (node.getAttribute("data-mdurl")) {
        node.href = node.dataset.mdurl;
        node.setAttribute("gd-antiredirect-status", "success");
      } else {
        node.setAttribute("gd-antiredirect-status", "pending");
        const url = node.href;
        return new Promise((resolve, reject) => {
          GMxmlhttpRequest({
            url: url,
            headers: { Accept: "*/*", Referer: location.href },
            method: "GET",
            timeout: 8e3,
            onreadystatechange: response => {
              if (response.status === 200 && response.readyState === 4) {
                const resText = response.responseText || response.response || "";
                let res = resText.match(/(URL\s*=\s*')([^']+)(')/);
                res = res ? res[2] : response.finalUrl || null;
                resolve(res);
              }
            },
            onerror: () => {
              reject(new Error(`URLBrokenError`));
            },
            ontimeout: () => {
              reject(new Error(`TimeoutError`));
            },
          });
        })
          .then(res => {
            debug("\ud83d\udd33", res);
            node.href = res || node.href;
            node.setAttribute("gd-antiredirect-status", "success");
          })
          .catch(e => {
            node.style = "color:gray!important;text-decoration:line-through wavy red!important";
            node.setAttribute("gd-antiredirect-status", "failure");
            error("antiRedirect_So360: %s %O", e.message, { Node: node, Text: node.textContent, URL: node.href });
          });
      }
      node.removeAttribute("data-res");
      node.removeAttribute("data-mdurl");
      node.removeAttribute("data-replaceurl");
      node.removeAttribute("data-initurl");
    });
  }

  function antiRedirect_Toutiao(str) {
    const requestNodes = qA(str);
    requestNodes.length && count("\ud83d\udd33 [Toutiao-Anti-Redirect]");
    requestNodes.forEach(node => {
      const localUrl = node.href || "#";
      const realUrl = localUrl.match(/(\/search\/jump\?url=)([^&]+)(&)/);
      node.href = realUrl ? decodeURI(decodeURIComponent(realUrl[2])) : localUrl;
      node.setAttribute("gd-antiredirect-status", "success");
    });
  }

  /* AntiAds Functions */

  function antiAds_RemoveNodes(str, siteName) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [${siteName}-Anti-Ads]`);
    requestNodes.forEach(node => {
      node && node.remove();
    });
    // Ads Deep Cleanup
    switch (siteName) {
      case "Bing":
        if (qA("li.b_algo:not([style*='display:none']) .b_caption>div.b_attribution:not([u])+p[class]").length > 0) {
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("li.b_algo").forEach(node => {
            if (qS(".b_caption>div.b_attribution:not([u])+p[class]", node)) {
              node.style.display = "none";
              sleep(5e2)(node).then(r => {
                r && r.remove();
              });
            }
          });
        }
        break;
      case "So360":
        if (qA("ul.section>li span[class='txt']>s").length > 0) {
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("ul.section>li").forEach(node => {
            const ads = qS("span[class='txt']>s", node);
            if (ads && ads.textContent.includes("\u5e7f\u544a")) {
              node && node.remove();
            }
          });
        }
        break;
    }
  }

  /* Menus & Button insert  */

  !(async function () {
    "use strict";
    await init_Config_Data();
    const selectedSite = [];

    /* init search engine sites */

    const listSite = {
      baidu: {
        SiteTypeID: 1,
        SiteName: "百度一下",
        SiteNick: "百度 搜索",
        SiteURI: "www.baidu.com",
        WebURL: "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=",
        ImgURL: "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=",
        IMGType: ["baiduimage", "baiduimagedetail"],
        SplitName: "tn",
        MainType: ".s_btn_wr,#sugOut",
        StyleCode: `a,a em{text-decoration:none!important}a:hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndID}{z-index:1999999995;position:relative;margin-left:4px;height:40px;display:inline-block}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;margin-left:2px;height:40px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${CONST.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:80px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:80px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #4662D9;border:1px solid #3476d2}`,
        KeyStyle: "#wrapper_wrapper em",
        AntiRedirect: () => {
          deBounce(antiRedirect_Baidu, 200, "baidu", true)(".c-container a[href*='//www.baidu.com/link?url=']:not([gd-antiredirect-status])");
        },
        AntiAds: () => {
          const ads_Filter = `#s-hotsearch-wrapper,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad`;
          deBounce(antiAds_RemoveNodes, 20, "ad_baidu", true)(ads_Filter, "Baidu");
        },
      },
      google: {
        SiteTypeID: 2,
        SiteName: "Google",
        SiteNick: "Google 搜索",
        SiteURI: "www.google.com",
        WebURL: "https://www.google.com/search?hl=zh-CN&source=hp&safe=off&newwindow=1&q=",
        ImgURL: "https://www.google.com/search?hl=zh-CN&source=lnms&tbm=isch&sa=X&safe=off&q=",
        IMGType: ["isch"],
        SplitName: "tbm",
        MainType: "form button[type='submit']",
        StyleCode: `#${CONST.rndID}{z-index:100;position:relative;margin:0 4px 0 -5px;display:flex;justify-content:center;align-items:center}#${CONST.rndID} #${CONST.leftButton}{padding:0 2px 0 8px}.${CONST.scrollspan}{min-height:26px}.${CONST.scrollspan2}{min-height:26px;margin-top:0!important}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${CONST.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${CONST.leftButton} input{margin:0;cursor:pointer;padding:1px 12px 1px 18px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#fff;vertical-align:top;}#${CONST.rightButton} input{margin:0;cursor:pointer;padding:1px 18px 1px 12px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#fff;vertical-align:top;}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background:#2b7de9;}`,
        KeyStyle: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
        AntiRedirect: () => {
          deBounce(antiRedirect_Goolge, 500, "google", true)("#rcnt a:not([gd-antiredirect-ok])");
        },
        AntiAds: () => {
          deBounce(antiAds_RemoveNodes, 20, "ad_google", true)("div[aria-label='\u5e7f\u544a'],div[aria-label='Ads'],#bottomads", "Google");
        },
      },
      bing: {
        SiteTypeID: 3,
        SiteName: "Bing ®",
        SiteNick: "Bing 搜索",
        SiteURI: "www.bing.com",
        WebURL: "https://www.bing.com/search?q=",
        ImgURL: "https://www.bing.com/images/search?first=1&tsc=ImageBasicHover&q=",
        IMGType: ["images"],
        SplitName: "/",
        MainType: "#sb_search",
        StyleCode: `#${CONST.rndID}{z-index:1500;position:relative;display:inline-flex;top:0;left:0;height:39px;min-width:160px;width:max-content;align-content:center;justify-content: center;margin:1px 0 0 8px;padding:0}#${CONST.leftButton}{padding:0 5px 0 0;}#${CONST.rndID} input{box-sizing:border-box;cursor:pointer;min-width:80px;height:39px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;font-weight:600;font-size:16px}#${CONST.leftButton} input{border-top-left-radius:24px;border-bottom-left-radius:24px;margin:0;padding:0 12px 0 18px;}#${CONST.rightButton} input{border-top-right-radius:24px;border-bottom-right-radius:24px;margin:0 0 0 -3px;padding:0 18px 0 12px;}.${CONST.scrollspan2}{max-height:30px;padding:0 3px 0 8px!important;margin:0!important;top:3px!important}.${CONST.scrollspan}{/*max-height:30px;top:-1px!important*/}.${CONST.scrollbars2}{border-radius:4px!important;max-height:30px;padding:0 12px!important;margin-right:0!important;vertical-align:bottom}.${CONST.scrollbars}{/*max-height:30px*/}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background-color:#fff;transition:border linear .1s,box-shadow linear .3s;box-shadow:1px 1px 8px #08748D;border:2px solid #0095B7;text-shadow:0 0 1px #0095B7!important;color:#0095B7}.${Notice.random}_input{width:300px!important}`,
        KeyStyle: String(
          Number(getUrlParam("ensearch")) || Number(getCookie("ENSEARCH"))
            ? ".b_caption p strong, .b_caption .b_factrow strong, .b_secondaryText strong,th, h2 strong, h3 strong"
            : "#sp_requery strong, #sp_recourse strong, #tile_link_cn strong, .b_ad .ad_esltitle~div strong, h2 strong, .b_caption p strong, .b_snippetBigText strong, .recommendationsTableTitle+.b_slideexp strong, .recommendationsTableTitle+table strong, .recommendationsTableTitle+ul strong, .pageRecoContainer .b_module_expansion_control strong, .b_rs strong, .b_rrsr strong, #dict_ans strong, .b_listnav>.b_ans_stamp>strong, .adltwrnmsg strong"
        ),
        AntiRedirect: () => {
          deBounce(antiRedirect_Bing, 300, "bing", true)("#b_results a[href*='.bing.com/ck/a?']:not([gd-antiredirect-status])");
        },
        AntiAds: () => {
          deBounce(antiAds_RemoveNodes, 20, "ad_bing", true)("li.b_ad,#b_pole,#b_results li.b_ans", "Bing");
        },
      },
      duckduckgo: {
        SiteTypeID: 4,
        SiteName: "Duckduckgo",
        SiteNick: "鸭鸭 搜索",
        SiteURI: "duckduckgo.com",
        WebURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=1&kn=1&kp=-2&t=h_&ia=web&q=",
        ImgURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=s&kn=1&kp=-2&t=h_&iax=images&ia=images&q=",
        IMGType: ["images"],
        SplitName: "ia",
        MainType: "#search_form",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;top:0;right:-188px;height:44px;display:block;}#${CONST.leftButton}{display:inline-block;height:44px}#${CONST.rightButton}{margin:0 0 0 -2px;display:inline-block;height:44px}#${CONST.leftButton} input{margin:0;cursor:pointer;padding:1px 10px 1px 15px!important;border:1px solid #00000026;box-shadow:0 2px 3px rgb(0 0 0 / 6%);background:#fff;border-top-left-radius:8px;border-bottom-left-radius:8px;min-width:90px;height:44px;font-size:16px;font-weight:400;color:#888;vertical-align:top;}#${CONST.rightButton} input{margin:0;cursor:pointer;padding:1px 15px 1px 10px!important;border:1px solid #00000026;box-shadow:0 2px 3px rgb(0 0 0 / 6%);background:#fff;border-top-right-radius:8px;border-bottom-right-radius:8px;min-width:90px;height:44px;font-size:16px;font-weight:400;color:#888;vertical-align:top;}#${CONST.rndID}:hover #${CONST.leftButton} input,#${CONST.rndID}:hover #${CONST.rightButton} input{background:#3969ef;color:#fff;}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background-color:#2950bf!important;border:1px solid #00000026;color:#fff;}`,
        KeyStyle: "strong, b",
        AntiRedirect: () => {},
        AntiAds: () => {},
      },
      sogou: {
        SiteTypeID: 5,
        SiteName: "搜狗搜索",
        SiteNick: "搜狗 搜索",
        SiteURI: "www.sogou.com",
        WebURL: "https://www.sogou.com/web?query=",
        ImgURL: "https://pic.sogou.com/pics?query=",
        IMGType: ["pics", "d"],
        SplitName: "/",
        MainType: "input[type='submit'].sbtn1,input[type='button'][uigs='search_account'],input[type='submit'].search-btn",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:34px;margin:-1px 0 0 0;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{display:inline;height:34px}#${CONST.rightButton}{display:inline;height:34px}#${CONST.leftButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000;min-width:80px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.rightButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000;min-width:80px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #f2f2f2;border:1px solid #7a7a7a;}.${Notice.random}_weixin{background:#fff!important;border:1px solid #00a06a!important;color:#00a06a!important;border-radius:2px!important;font-size:15px!important}.${Notice.random}_weixin:hover{background:#f7fffd!important}`,
        KeyStyle: "#wrapper em",
        AntiRedirect: () => {
          deBounce(antiRedirect_Sogou, 200, "sogou", true)(".vrwrap a[href^='/link?url=']:not([gd-antiredirect-status])");
        },
        AntiAds: () => {
          const ads_Filter = "#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box";
          deBounce(antiAds_RemoveNodes, 20, "ad_sogou", true)(ads_Filter, "Sogou");
        },
      },
      fsou: {
        SiteTypeID: 6,
        SiteName: "F搜 ®",
        SiteNick: "FSou 搜索",
        SiteURI: "fsoufsou.com",
        WebURL: "https://fsoufsou.com/search?tbn=all&q=",
        ImgURL: "https://fsoufsou.com/search?tbn=images&q=",
        IMGType: ["images"],
        SplitName: "tbn",
        MainType: ".input-group-container .search-icon",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:relative;height:36px;margin:0 -17px 0 15px;z-index:100;display:inline-flex;justify-content:center;align-items:center}#${CONST.rightButton}{padding:0 0 0 2px}#${CONST.leftButton} input{cursor:pointer;padding:1px 12px 1px 18px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:22px;border-bottom-left-radius:22px;min-width:90px;height:36px;font-size:15px;font-weight:600;color:#fff;vertical-align:top;}#${CONST.rightButton} input{cursor:pointer;padding:1px 18px 1px 12px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:22px;border-bottom-right-radius:22px;min-width:90px;height:36px;font-size:15px;font-weight:600;color:#fff;vertical-align:top;}`,
        KeyStyle: ".highlight-style",
        AntiRedirect: () => {},
        AntiAds: () => {},
      },
      yandex: {
        SiteTypeID: 7,
        SiteName: "Yandex",
        SiteNick: "Yandex 搜索",
        SiteURI: "yandex.com",
        WebURL: "https://yandex.com/search/?lang=en&text=",
        ImgURL: "https://yandex.com/images/search?from=tabbar&family=no&text=",
        IMGType: ["images"],
        SplitName: "/",
        MainType: "form>div.search2__input",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:40px;margin:0;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{display:inline-block;height:40px}#${CONST.rightButton}{margin:0 0 0 -2px;display:inline-block;height:40px}#${CONST.leftButton} input{cursor:pointer;padding:0 12px 0 18px!important;border:1px solid transparent;background:#fc0;box-shadow:none;border-top-left-radius:10px;border-bottom-left-radius:10px;min-width:90px;height:40px;font-size:15px;font-weight:400;color:#000;vertical-align:top;}#${CONST.rightButton} input{cursor:pointer;padding:0 18px 0 12px!important;border:1px solid transparent;background:#fc0;box-shadow:none;border-top-right-radius:10px;border-bottom-right-radius:10px;min-width:90px;height:40px;font-size:15px;font-weight:400;color:#000;vertical-align:top;}`,
        KeyStyle: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
        AntiRedirect: () => {},
        AntiAds: () => {},
      },
      so360: {
        SiteTypeID: 8,
        SiteName: "360搜索",
        SiteNick: "360 搜索",
        SiteURI: "www.so.com",
        WebURL: "https://www.so.com/s?ie=utf-8&q=",
        ImgURL: "https://image.so.com/i?q=",
        IMGType: ["i", "view"],
        SplitName: "/",
        MainType: "input[type='submit'][value='搜索'],button[type='submit'][class~='so-search__button']",
        StyleCode: `#hd-rtools{z-index:1!important}#${CONST.rndID}{z-index:199999995;position:relative;left:0;top:0;width:auto;height:40px;margin:0 0 0 5px;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{padding:0 1px 0 0;height:40px;display:inline-block;vertical-align:top}#${CONST.rightButton}{height:40px;display:inline-block;vertical-align:top}#${CONST.leftButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-left-radius:8px;border-bottom-left-radius:8px;cursor:pointer;height:40px;color:#fff;min-width:80px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0 -2px 0 0}#${CONST.rightButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-right-radius:8px;border-bottom-right-radius:8px;cursor:pointer;height:40px;color:#fff;min-width:80px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #109e5a;border:1px solid #109e5a;}`,
        KeyStyle: "em,#mohe-newdict_dict .mh-exsentence b",
        AntiRedirect: () => {
          deBounce(antiRedirect_So360, 300, "so360", true)(".res-list a[href*='//www.so.com/link?m=']:not([gd-antiredirect-status])");
        },
        AntiAds: () => {
          const ads_Filter = `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm`;
          deBounce(antiAds_RemoveNodes, 20, "ad_so360", true)(ads_Filter, "So360");
        },
      },
      toutiao: {
        SiteTypeID: 9,
        SiteName: "搜头条",
        SiteNick: "头条 搜索",
        SiteURI: "so.toutiao.com",
        WebURL: "https://so.toutiao.com/search?dvpf=pc&keyword=",
        ImgURL: "https://so.toutiao.com/search?dvpf=pc&pd=atlas&from=gallery&keyword=",
        IMGType: ["atlas"],
        SplitName: "pd",
        MainType: "div[class^='search'][data-log-click]",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;right:-160px;top:0;width:auto;height:44px;margin:-1px;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{display:inline-block;height:44px}#${CONST.rightButton}{margin:0 0 0 -2px;display:inline-block;height:44px}#${CONST.leftButton} input{margin:0;cursor:pointer;padding:1px 10px 1px 15px!important;background:#f04142ff;border:1px solid transparent;border-top-left-radius:8px;border-bottom-left-radius:8px;min-width:90px;height:44px;font-size:18px;font-weight:500;color:#fff;vertical-align:top;}#${CONST.rightButton} input{margin:0;cursor:pointer;padding:1px 15px 1px 10px!important;background:#f04142ff;border:1px solid transparent;border-top-right-radius:8px;border-bottom-right-radius:8px;min-width:90px;height:44px;font-size:18px;font-weight:500;color:#fff;vertical-align:top;}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background-color:#f04142b3;color:#fff;}`,
        KeyStyle: "em",
        AntiRedirect: () => {
          const keyString = `.main a[href*='/search/jump?url=']:not([gd-antiredirect-status]),.main a.cs-view-block[href*='/search/jump?url=']:not([gd-antiredirect-status])`;
          deBounce(antiRedirect_Toutiao, 200, "toutiao", true)(keyString);
        },
        AntiAds: () => {},
      },
      other: { SiteTypeID: 0 },
    };

    const newSiteType = {
      BAIDU: listSite.baidu.SiteTypeID,
      GOOGLE: listSite.google.SiteTypeID,
      BING: listSite.bing.SiteTypeID,
      DUCKDUCKGO: listSite.duckduckgo.SiteTypeID,
      SOGOU: listSite.sogou.SiteTypeID,
      FSOU: listSite.fsou.SiteTypeID,
      YANDEX: listSite.yandex.SiteTypeID,
      SO360: listSite.so360.SiteTypeID,
      TOUTIAO: listSite.toutiao.SiteTypeID,
      OTHERS: listSite.other.SiteTypeID,
    };

    let listCurrentSite, currentSite;
    if (location.host.endsWith(".baidu.com")) {
      currentSite = selectedEngine.includes(newSiteType.BAIDU) ? listSite.baidu : listSite.other;
      listCurrentSite = listSite.baidu;
    } else if (location.host.endsWith(".bing.com")) {
      currentSite = selectedEngine.includes(newSiteType.BING) ? listSite.bing : listSite.other;
      listCurrentSite = listSite.bing;
    } else if (/^(\w+\.)?google\.[a-z.]{2,6}$/.test(location.hostname)) {
      currentSite = selectedEngine.includes(newSiteType.GOOGLE) ? listSite.google : listSite.other;
      listCurrentSite = listSite.google;
    } else if (location.host.endsWith("duckduckgo.com")) {
      currentSite = selectedEngine.includes(newSiteType.DUCKDUCKGO) ? listSite.duckduckgo : listSite.other;
      listCurrentSite = listSite.duckduckgo;
    } else if (location.host.endsWith(".sogou.com")) {
      currentSite = selectedEngine.includes(newSiteType.SOGOU) ? listSite.sogou : listSite.other;
      listCurrentSite = listSite.sogou;
    } else if (location.host.endsWith("fsoufsou.com")) {
      currentSite = selectedEngine.includes(newSiteType.FSOU) ? listSite.fsou : listSite.other;
      listCurrentSite = listSite.fsou;
    } else if (location.host.endsWith("yandex.com")) {
      currentSite = selectedEngine.includes(newSiteType.YANDEX) ? listSite.yandex : listSite.other;
      listCurrentSite = listSite.yandex;
    } else if (location.host.endsWith(".so.com")) {
      currentSite = selectedEngine.includes(newSiteType.SO360) ? listSite.so360 : listSite.other;
      listCurrentSite = listSite.so360;
    } else if (location.host.endsWith("so.toutiao.com")) {
      currentSite = selectedEngine.includes(newSiteType.TOUTIAO) ? listSite.toutiao : listSite.other;
      listCurrentSite = listSite.toutiao;
    } else {
      currentSite = listSite.other;
      listCurrentSite = listSite.other;
    }

    for (let site in listSite) {
      if (oH.call(listSite, site)) {
        if (listSite[site].SiteTypeID !== newSiteType.OTHERS) {
          CONST.allSiteURIs += listSite[site].SiteURI.concat(";");
        }
        if (listSite[site].SiteTypeID === listCurrentSite.SiteTypeID) {
          defCon.curSiteName = site;
        }
        if (listSite[site].SiteTypeID !== currentSite.SiteTypeID && selectedEngine.includes(Number(listSite[site].SiteTypeID))) {
          selectedSite.length < 2 && selectedSite.push(listSite[site]);
        }
      }
    }

    CONST.vim = getUrlParam(currentSite.SplitName).trim();
    CONST.googleSplitLine = currentSite.SiteTypeID === newSiteType.GOOGLE ? `<span jsname="s1VaRe" class="ACRAdd M2vV3"></span>` : ``;
    CONST.fsouSplitLine = currentSite.SiteTypeID === newSiteType.FSOU ? `<div class="divider"></div>` : ``;
    CONST.buttonCode = String(
      CONST.googleSplitLine +
        CONST.fsouSplitLine +
        `<span id="${CONST.leftButton}" sn="${selectedSite[0].SiteTypeID}">
          <input type="button" title="${selectedSite[0].SiteNick}一下" value="${selectedSite[0].SiteName}"/>
        </span>
        <span id="${CONST.rightButton}" sn="${selectedSite[1].SiteTypeID}">
          <input type="button" title="${selectedSite[1].SiteNick}一下" value="${selectedSite[1].SiteName}"/>
        </span>`
    );
    CONST.highlightCss = String(`${listCurrentSite.KeyStyle} {background-color:#ffff80ad!important;color:#f73131cd!important;font-weight:700!important}`);
    CONST.iconCss = String(
      `.${Notice.noticejs} .${Notice.configuration} span.${Notice.favicon},
        .${Notice.card}__body-cover-image span.${Notice.favicons} {
          background-color:#fff;
          background-image:url('${API_ICO_YANDEX}/${CONST.allSiteURIs}?size=32&stub=1'),url('${API_ICO_BACKUP}');
          background-repeat:no-repeat;
        }`
    );
    CONST.indexPage = () => {
      return currentSite.SiteTypeID === newSiteType.DUCKDUCKGO ? !location.search.includes("q=") : location.pathname === "/";
    };

    if (
      (listCurrentSite.SiteTypeID === newSiteType.GOOGLE && /^(lcl|flm|fin)$/.test(CONST.vim)) ||
      (listCurrentSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(CONST.vim)) ||
      (listCurrentSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(CONST.vim)) ||
      (listCurrentSite.SiteTypeID === newSiteType.SOGOU && (/^(kexue)$/.test(CONST.vim) || /^(fanyi|hanyu|gouwu|as|map)/.test(location.hostname))) ||
      (listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO && /^(maps)$/.test(getUrlParam("iaxm"))) ||
      (listCurrentSite.SiteTypeID === newSiteType.YANDEX && location.pathname.includes("/direct"))
    ) {
      CONST.isSecurityPolicy = true;
    }

    /* SYSTEM INFO */

    if (CUR_WINDOW_TOP && listCurrentSite.SiteTypeID !== newSiteType.OTHERS) {
      const isFavEngine = currentSite.SiteTypeID !== newSiteType.OTHERS;
      console.log(
        `%c${defCon.scriptName}\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/SearchEngine\n%cVersion:\u0020%cV%s\n%cCurrentEngine:\u0020%c%s\n%cYourFavEngine:\u0020%c%s\n%cAntiRedirect:\u0020%c%s\n%cAntiAdvertising:\u0020%c%s\n%cSecurityPolicy:\u0020%c%s`,
        "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
        "line-height:180%;font-size:10px;color:#777;font-style:italic",
        "font-size:12px;font-weight:700;color:steelblue",
        "color:slategrey;text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'",
        defCon.curVersion,
        "font-size:12px;font-weight:700;color:steelblue",
        "color:crimson;text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'",
        defCon.curSiteName,
        "font-size:12px;font-weight:700;color:steelblue",
        `color:${isFavEngine ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
        isFavEngine,
        "font-size:12px;font-weight:700;color:steelblue",
        `color:${antiLinkRedirect ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
        antiLinkRedirect,
        "font-size:12px;font-weight:700;color:steelblue",
        `color:${antiAds ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
        antiAds,
        "font-size:12px;font-weight:700;color:steelblue",
        `color:${CONST.isSecurityPolicy ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
        CONST.isSecurityPolicy
      );
    }

    /* Menus insert */

    const addAction = {
      closeConfig: (configPage = qS(`gb-notice.${Notice.noticejs} .${Notice.configuration}`)) => {
        configPage && closeItem(configPage);
        return !0;
      },
      listSearchEngine: currentSite => {
        let returnHtml = "";
        for (let site in listSite) {
          if (oH.call(listSite, site) && listSite[site].SiteTypeID !== 0 && listSite[site].SiteTypeID !== currentSite.SiteTypeID) {
            const iconStyle = String(
              currentSite.SiteTypeID === newSiteType.DUCKDUCKGO
                ? `background-image:url('${API_ICO_DDUCKGO}/${listSite[site].SiteURI}.ico')!important;`
                : `background-position:0 ${(1 - listSite[site].SiteTypeID) * 24}px;`
            ).concat(`background-attachment:local;background-size:cover;`);
            returnHtml += String(
              `<li>
                <button class="${Notice.searchButton}" id="${listSite[site].SiteTypeID}" ${selectedEngine.includes(listSite[site].SiteTypeID) ? `title="您常用的搜索引擎"` : ``}>
                  <span class="${Notice.favicon} ${Notice.random}_icon" style="${iconStyle}"></span>
                  <span>${listSite[site].SiteNick}<sup>${selectedEngine.includes(listSite[site].SiteTypeID) ? "\u0020\u2726" : "\u0020\u0020"}</sup></span>
                </button>
              </li>`
            );
          }
        }
        return String(`<ul class="${Notice.searchList}">${returnHtml}</ul>`);
      },
      listSelectSearchEngine: () => {
        let returnHtml = "";
        for (let site in listSite) {
          if (oH.call(listSite, site) && listSite[site].SiteTypeID !== 0) {
            const iconStyle = String(
              listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO
                ? `background-image:url('${API_ICO_DDUCKGO}/${listSite[site].SiteURI}.ico')!important;`
                : `background-position:0 ${(1 - listSite[site].SiteTypeID) * 32}px;`
            ).concat(`background-attachment:local;background-size:32px auto;`);
            returnHtml += String(
              `<label class="${Notice.card}">
                <input class="${Notice.card}__input" type="checkbox" name="${Notice.card}_lists" data-sn="${listSite[site].SiteTypeID}"\
                ${selectedEngine.includes(listSite[site].SiteTypeID) ? "checked" : "disabled"}>
                <div class="${Notice.card}__body">
                  <header class="${Notice.card}__body-header">
                    <span class="${Notice.card}__body-cover-chackbox">
                      <svg class="${Notice.card}__body-cover-chackbox--svg" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span class="${Notice.card}__body-cover-image">
                      <span class="${Notice.favicons} ${Notice.random}_icon" style="${iconStyle}"></span>
                    </span>
                    <h2 class="${Notice.card}__body-header-title" fr-fix-stroke="true">${listSite[site].SiteNick}</h2>
                    <p class="${Notice.card}__body-header-subtitle" style="margin:0;padding:0">${listSite[site].SiteURI}</p>
                  </header>
                </div>
              </label>`
            );
          }
        }
        return returnHtml;
      },
      setConfigure: () => {
        sleep(500)(addAction.closeConfig()).then(r => {
          if (!qS(`.${Notice.noticejs} .${Notice.configuration}`) && r) {
            GMnotification({
              title: `${defCon.scriptName} v${defCon.curVersion}`,
              text: String(
                `<fieldset class="${Notice.fieldset}">
                  <legend class="${Notice.legend}" title="Version ${defCon.curVersion}">
                    高级功能参数设置
                  </legend>
                  <ur class="${Notice.settingList}">
                    <li class="${Notice.random}__content">
                      <div>请选择三个您最常用的搜索引擎：<span id="${Notice.random}_clear">[<u>清除</u>]</span></div>
                      <div class="${Notice.grid}">
                      ${addAction.listSelectSearchEngine()}
                      </div>
                    </li>
                    <li>
                      <div>键盘快捷键功能开关</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.hk}" class="${Notice.checkbox}" ${isHotkey ? "checked" : ""} />
                        <label for="${Notice.hk}"></label>
                      </div>
                    </li>
                    <li>
                      <div>Google 国际站跳转</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.gj}" class="${Notice.checkbox}" ${googleJump ? "checked" : ""} />
                        <label for="${Notice.gj}"></label>
                      </div>
                    </li>
                    <li>
                      <div>在当前浏览器窗口跳转</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.lw}" class="${Notice.checkbox}" ${localWindow ? "checked" : ""} />
                        <label for="${Notice.lw}"></label>
                      </div>
                    </li>
                    <li>
                      <div>搜索关键词高亮增强</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.kh}" class="${Notice.checkbox}" ${keywordHighlight ? "checked" : ""} />
                        <label for="${Notice.kh}"></label>
                      </div>
                    </li>
                    <li>
                      <div>去除链接重定向跳转</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.ar}" class="${Notice.checkbox}" ${antiLinkRedirect ? "checked" : ""} />
                        <label for="${Notice.ar}"></label>
                      </div>
                    </li>
                    <li>
                      <div title="实验性功能">去除搜索结果广告<sup style="padding:0 0 0 2px;font-style:italic;color:crimson">Beta!</sup></div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.aa}" class="${Notice.checkbox}" ${antiAds ? "checked" : ""} />
                        <label for="${Notice.aa}"></label>
                      </div>
                    </li>
                    <li>
                      <div>更新检测（默认：开）</div>
                      <div style="margin:-2px 2px 0 10px">
                        <input type="checkbox" id="${Notice.au}" class="${Notice.checkbox}" ${isAutoUpdate ? "checked" : ""} />
                        <label for="${Notice.au}"></label>
                      </div>
                    </li>
                    <li style="float:right">
                      <button id="${Notice.random}_help">使用帮助</button>
                      <button id="${Notice.random}_cancel">取消</button>
                      <button id="${Notice.random}_submit">保存</button>
                    </li>
                  </ul>
                </fieldset>`
              ),
              type: `${Notice.configuration}`,
              width: 330,
              closeWith: ["button"],
              scroll: { maxHeight: 680, showOnHover: true },
              progressBar: false,
              timeout: false,
              callbacks: {},
              position: "topRight",
            });
            qA(`input[name='${Notice.card}_lists']`).forEach(node => {
              node.addEventListener("click", () => {
                const input_checked = qA(`input[name='${Notice.card}_lists']:checked:enabled`).length;
                if (input_checked < 3) {
                  qA(`input[name='${Notice.card}_lists']:disabled`).forEach(item => {
                    item.disabled = false;
                  });
                  qS(`#${Notice.random}_clear`).style.display = input_checked === 0 ? "none" : "inline";
                } else {
                  qA(`input[name='${Notice.card}_lists']:not(:checked)`).forEach(item => {
                    item.disabled = true;
                  });
                }
              });
            });
            qS(`#${Notice.random}_clear`).addEventListener("click", () => {
              qA(`input[name='${Notice.card}_lists']:checked:enabled`).forEach(node => {
                node.click();
              });
            });
            // help
            qS(`#${Notice.random}_help`).addEventListener("click", () => {
              GMopenInTab(`${HOST_URI}#guide`, defCon.options);
            });
            // cancel
            qS(`#${Notice.random}_cancel`).addEventListener("click", () => {
              closeItem(qS(`gb-notice.${Notice.noticejs} .${Notice.configuration}`));
            });
            // submit
            qS(`#${Notice.random}_submit`).addEventListener("click", () => {
              let selectEngineList = [];
              qA(`input[name='${Notice.card}_lists']:checked`).forEach(item => {
                selectEngineList.push(Number(item.dataset.sn));
              });
              if (selectEngineList.length < 3) {
                GMnotification({
                  text: Notice.noticeHTML(
                    `<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！</dd>`
                  ),
                  type: `${Notice.error}`,
                  closeWith: ["click"],
                  timeout: 18,
                  callbacks: {},
                });
                return;
              }
              const refresh = () => {
                location.reload(true);
              };
              selectedEngine = selectEngineList;
              isHotkey = qS(`#${Notice.hk}`).checked;
              googleJump = qS(`#${Notice.gj}`).checked;
              localWindow = qS(`#${Notice.lw}`).checked;
              keywordHighlight = qS(`#${Notice.kh}`).checked;
              antiLinkRedirect = qS(`#${Notice.ar}`).checked;
              antiAds = qS(`#${Notice.aa}`).checked;
              isAutoUpdate = qS(`#${Notice.au}`).checked;
              config_date = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds };
              GMsetValue("_configures_", defCon.encrypt(JSON.stringify(config_date)));
              GMnotification({
                title: "保存成功！",
                text: Notice.noticeHTML(`<dd>设置参数已成功保存，页面稍后自动刷新！</dd>`),
                type: `${Notice.success}`,
                closeWith: ["click"],
                timeout: 10,
                callbacks: { onClose: [refresh] },
              });
            });
          }
        });
      },
      listEngine: () => {
        sleep(500)(addAction.closeConfig()).then(r => {
          if (!qS(`.${Notice.noticejs} .${Notice.configuration}`) && r) {
            GMnotification({
              title: "\ud83d\udc4b 你想去哪里吖？",
              text: addAction.listSearchEngine(listCurrentSite),
              type: `${Notice.configuration}`,
              width: 184,
              closeWith: ["button"],
              scroll: { maxHeight: 500, showOnHover: false },
              timeout: 120,
              callbacks: {},
              position: "topRight",
            });
            qA(`.${Notice.noticejs} .${Notice.configuration} .${Notice.searchButton}`).forEach(item => {
              item.addEventListener(
                "click",
                function (listCurrentSite, localWindow) {
                  let url;
                  for (let type in newSiteType) {
                    if (oH.call(newSiteType, type) && newSiteType[type] === Number(item.id)) {
                      if (listCurrentSite.IMGType.includes(getUrlParam(listCurrentSite.SplitName).trim())) {
                        url = listSite[type.toLowerCase()].ImgURL;
                      } else {
                        url = listSite[type.toLowerCase()].WebURL;
                      }
                      break;
                    }
                  }
                  if (localWindow) {
                    top.location.href = decodeURI(url + getQueryString());
                  } else {
                    GMopenInTab(decodeURI(url + getQueryString()), defCon.options);
                  }
                }.bind(this, listCurrentSite, localWindow)
              );
            });
          }
        });
      },
    };

    if (CUR_WINDOW_TOP) {
      let parameter_Set, engine_List, feed_Back;
      parameter_Set ? GMunregisterMenuCommand(parameter_Set) : debug("\ud83d\udd33 %cInstalling Font_Set_Menu", "color:gray");
      parameter_Set = GMregisterMenuCommand(`\ufff0\u2699\ufe0f 搜索引擎助手参数设置${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 89 : 69) + ")" : ""}`, () => {
        addAction.setConfigure();
      });
      engine_List ? GMunregisterMenuCommand(engine_List) : debug("\ud83d\udd33 %cInstalling Exclude_site_Menu", "color:gray");
      engine_List = GMregisterMenuCommand(`\ufff2\ud83d\udc4b 嗨，你想去哪里吖？${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 75 : 86) + ")" : ""}`, () => {
        addAction.listEngine();
      });
      feed_Back ? GMunregisterMenuCommand(feed_Back) : debug("\ud83d\udd33 %cInstalling Feed_Back_Menu", "color:gray");
      feed_Back = GMregisterMenuCommand(`\ufff9\u2712\ufe0f 向作者提点儿建议${isHotkey ? "(" + String.fromCharCode(66) + ")" : ""}`, () => {
        GMopenInTab(FEEDBACK_URI, defCon.options);
      });
    }

    /* hotkey setting */

    if (isHotkey && CUR_WINDOW_TOP) {
      document.addEventListener("keydown", e => {
        const ekey = (IS_MACOS ? e.metaKey : e.altKey) && !e.ctrlKey && !e.shiftKey;
        if (e.keyCode === (IS_MACOS ? 89 : 69) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            addAction.setConfigure();
          }
        }
        if (e.keyCode === (IS_MACOS ? 75 : 86) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            addAction.listEngine();
          }
        }
        if (e.keyCode === 66 && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 5e3) {
            defCon.clickTimer = Date.now();
            GMopenInTab(FEEDBACK_URI, defCon.options);
          }
        }
      });
    }

    /* Insert CSS & buttons */

    CUR_WINDOW_TOP && preInsertContentsToDocument();
    new MutationObserver(() => {
      if (CONST.isSecurityPolicy ? !qS(`.${CONST.rndstyleName}`) : !qS(`.${CONST.rndclassName}`) || !qS(`#${CONST.rndID}`) || !qS(`.${CONST.rndstyleName}`)) {
        preInsertContentsToDocument();
      }
      antiLinkRedirect && listCurrentSite.SiteTypeID !== newSiteType.OTHERS && !CONST.indexPage() && listCurrentSite.AntiRedirect();
      antiAds && listCurrentSite.SiteTypeID !== newSiteType.OTHERS && listCurrentSite.AntiAds();
    }).observe(document, { childList: true, subtree: true });

    /* important Functions */

    function preInsertContentsToDocument() {
      try {
        setRAFInterval(
          () => {
            !qS(`.${CONST.rndstyleName}`) && insertStyle();
            if (currentSite.SiteTypeID !== newSiteType.OTHERS && !CONST.isSecurityPolicy) {
              !qS(`.${CONST.rndclassName}`) && insertCSS();
              !qS(`#${CONST.rndID}`) && insertButtons();
            }
            return Boolean(CONST.isSecurityPolicy ? qS(`.${CONST.rndstyleName}`) : qS(`.${CONST.rndclassName}`) && qS(`#${CONST.rndID}`) && qS(`.${CONST.rndstyleName}`));
          },
          50,
          { runNow: true }
        );
      } catch (e) {
        error("InsertHTML:", e.message);
      }
    }

    function insertCSS() {
      try {
        const buttonCss = `@charset "UTF-8";` + currentSite.StyleCode;
        addStyle(buttonCss, `${CONST.rndclassName}`, document.head, "SC");
      } catch (e) {
        error("insertCSS:", e.message);
      }
    }

    function insertStyle() {
      try {
        const noticeStyle = `@charset "UTF-8";` + CONST.noticeCss + CONST.iconCss + String(keywordHighlight ? CONST.highlightCss : "");
        addStyle(noticeStyle, `${CONST.rndstyleName}`, document.head, "SS");
      } catch (e) {
        error("insertStyle:", e.message);
      }
    }

    function insertButtons() {
      try {
        const getTarget = currentSite.MainType;
        const userSpan = cE("span");
        const indexPage = CONST.indexPage();
        userSpan.id = `${CONST.rndID}`;
        userSpan.innerHTML = CONST.buttonCode;
        const SpanID = `#${userSpan.id}`;
        let Target = qS(getTarget);
        if (!indexPage && Target && getQueryString() && !qS(SpanID)) {
          return new Promise(resolve => {
            switch (currentSite.SiteTypeID) {
              case newSiteType.BAIDU:
                insterAfter(userSpan, Target);
                if (qS(SpanID)) {
                  switch (CONST.vim) {
                    case currentSite.IMGType[0]:
                      qS(SpanID).style.marginLeft = "16px";
                      qS(`#${CONST.rightButton} input`).style.marginLeft = "3px";
                      break;
                    case currentSite.IMGType[1]:
                      qS(SpanID).style.height = "34px";
                      qA(`${SpanID} input`).forEach(node => {
                        node.style.cssText = "min-width:90px;height:34px;padding:0 5px!important;color:#fff;background:#38f;border-radius:0;border:1px solid #2d78f4";
                      });
                      break;
                  }
                }
                break;
              case newSiteType.GOOGLE:
                getGlobalGoogle("www.google.com", googleJump);
                insterAfter(userSpan, Target);
                if (qS(SpanID)) {
                  qS(SpanID).parentNode.style.width = "100%";
                  qS(SpanID).parentNode.style.minWidth = "100%";
                  qS(SpanID).parentNode.parentNode.style.width = "100%";
                  qS(SpanID).parentNode.parentNode.parentNode.style.width = "95%";
                  if (currentSite.IMGType.includes(CONST.vim)) {
                    qS(SpanID).parentNode.firstElementChild.style.width = "400px";
                  }
                }
                break;
              case newSiteType.BING:
                Target.appendChild(userSpan);
                if (Target.parentNode.firstElementChild.tagName === "INPUT") {
                  Target.parentNode.firstElementChild.style.width = "400px";
                }
                if (qS(".b_searchboxForm") && location.search.includes("view=detailV2")) {
                  qS(".b_searchboxForm").style.cssText += "width:max-content!important;padding-right:5px!important";
                  qA(`#${CONST.rndID} input`).forEach(node => {
                    node.style.cssText += "height:36px!important;border-radius:6px!important;padding:0 12px!important;margin:0 -2px 0 0!important;";
                  });
                }
                break;
              case newSiteType.SOGOU:
                if (currentSite.IMGType.includes(CONST.vim)) {
                  sleep(500, { useCachedSetTimeout: true }).then(() => {
                    if (!qS(SpanID) && Target) {
                      insterAfter(userSpan, Target);
                      qS(SpanID).style.right = `-${qS(SpanID).getBoundingClientRect().width + 10}px`;
                      addSearchButtonEvent(qA(`${SpanID} span[sn]:not([event-insert])`));
                      scrollDetect(getTarget, indexPage);
                    }
                  });
                } else if (CONST.vim.endsWith("weixin")) {
                  insterAfter(userSpan, Target);
                  qS(SpanID).style = "position:relative";
                  qA(`${SpanID} input`).forEach(node => {
                    node.classList.add(`${Notice.random}_weixin`);
                  });
                } else {
                  insterAfter(userSpan, Target);
                  qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`) && qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`).remove();
                  sleep(200, { useCachedSetTimeout: true }).then(() => {
                    qS(SpanID).style.right = `-${qS(SpanID).getBoundingClientRect().width + 10}px`;
                    qS(`#searchBtn2`) && (qS(`#searchBtn2`).style.right = `-${qS(SpanID).getBoundingClientRect().width + 120}px`);
                  });
                }
                break;
              case newSiteType.SO360:
                insterAfter(userSpan, Target);
                if (currentSite.IMGType.includes(CONST.vim)) {
                  qA(`${SpanID} input`).forEach(node => {
                    node.style = "margin:0 0 0 1px;";
                  });
                }
                break;
              case newSiteType.FSOU:
                insterAfter(userSpan, Target);
                break;
              case newSiteType.DUCKDUCKGO:
                Target.parentNode.appendChild(userSpan);
                Target.parentNode.appendChild(Target.cloneNode(true));
                Target.remove();
                sleep(100).then(() => {
                  qS(SpanID).style.right = `-${qS(SpanID).getBoundingClientRect().width + 8}px`;
                });
                break;
              case newSiteType.TOUTIAO:
                insterAfter(userSpan, Target);
                sleep(100).then(() => {
                  qS(SpanID).style.right = `-${qS(SpanID).getBoundingClientRect().width + 10}px`;
                });
                break;
              case newSiteType.YANDEX:
                insterAfter(userSpan, Target);
                sleep(500, { useCachedSetTimeout: true })(qS(SpanID).getBoundingClientRect().width).then(width => {
                  qS(SpanID).style.right = `-${width + 60}px`;
                  if (currentSite.IMGType !== CONST.vim) {
                    qS(`.input__settings`) && (qS(`.input__settings`).style.right = `-${width + 273}px`);
                    qS(`span.serp-header__voice-search-container`) && (qS(`span.serp-header__voice-search-container`).style.right = `-${width + 273}px`);
                  } else {
                    qS(`button.button2[data-bem]`) && (qS(`button.button2[data-bem]`).style.right = `-${width + 268}px`);
                  }
                });
                break;
            }
            resolve({ SpanID, getTarget, indexPage });
          })
            .then(r => {
              addSearchButtonEvent(qA(`${r.SpanID} span[sn]:not([event-insert])`));
              scrollDetect(r.getTarget, r.indexPage);
            })
            .catch(e => {
              error("insertHTML:", e);
            });
        }
      } catch (e) {
        error("insertButtons:", e.message);
      }
    }

    function scrollDetect(getTarget, indexPage) {
      let scrollbars, scrollspan, height, e;
      if (!indexPage && qS(getTarget)) {
        switch (currentSite.SiteTypeID) {
          case newSiteType.GOOGLE:
            e = /^isch$/.test(CONST.vim);
            scrollspan = e ? CONST.scrollspan2 : CONST.scrollspan;
            scrollbars = e ? CONST.scrollbars2 : CONST.scrollbars;
            height = e ? 0 : 35;
            setScrollButton(`#${CONST.rndID}`, scrollspan, height);
            setScrollButton(`#${CONST.rndID} #${CONST.leftButton} input`, scrollbars, height);
            setScrollButton(`#${CONST.rndID} #${CONST.rightButton} input`, scrollbars, height);
            break;
          case newSiteType.BING:
            e = /^(images|videos)$/.test(CONST.vim);
            scrollspan = e ? CONST.scrollspan2 : CONST.scrollspan;
            scrollbars = e ? CONST.scrollbars2 : CONST.scrollbars;
            !e && setScrollButton(`#sb_form_q`, `${Notice.random}_input`, 200); // fixed bing searchbar scroll style (new A/B Testing). 2022.08.16
            setScrollButton(`#${CONST.rndID}`, scrollspan, 50);
            setScrollButton(`#${CONST.rndID} #${CONST.leftButton} input`, scrollbars, 50);
            setScrollButton(`#${CONST.rndID} #${CONST.rightButton} input`, scrollbars, 50);
            break;
        }
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

    function addSearchButtonEvent(nodes) {
      let gotoUrl = "about:blank";
      nodes.forEach(node => {
        node.setAttribute("event-insert", true);
        qS("input", node).addEventListener("click", () => {
          CONST.vim = getUrlParam(currentSite.SplitName).trim();
          switch (Number(node.getAttribute("sn"))) {
            case selectedSite[0].SiteTypeID:
              if (currentSite.IMGType.includes(CONST.vim)) {
                gotoUrl = selectedSite[0].ImgURL;
              } else {
                gotoUrl = selectedSite[0].WebURL;
              }
              break;
            case selectedSite[1].SiteTypeID:
              if (currentSite.IMGType.includes(CONST.vim)) {
                gotoUrl = selectedSite[1].ImgURL;
              } else {
                gotoUrl = selectedSite[1].WebURL;
              }
              break;
          }
          if (localWindow) {
            top.location.href = decodeURI(gotoUrl + getQueryString());
          } else {
            GMopenInTab(decodeURI(gotoUrl + getQueryString()), defCon.options);
          }
        });
      });
    }

    function addStyle(css, className, addToTarget, T = "T", isReload = false, initType = "text/css") {
      setRAFInterval(
        () => {
          try {
            if (addToTarget && typeof addToTarget === "object") {
              if (className && typeof className === "string") {
                if (isReload === true && addToTarget.querySelector(`.${className}`)) {
                  safeRemove(`.${className}`, addToTarget);
                } else if (isReload === false && addToTarget.querySelector(`.${className}`)) {
                  return true;
                }
              } else {
                className = defCon.randString(10, "char");
              }
              let cssNode = cE("style");
              cssNode.className = className;
              cssNode.id = T + defCon.randString(null, "digit");
              cssNode.media = "screen";
              cssNode.type = initType;
              cssNode.textContent = css;
              addToTarget.appendChild(cssNode);
              cssNode = null;
              return Boolean(addToTarget.querySelector(`.${className}`));
            } else {
              return true;
            }
          } catch (e) {
            error("AddStyle:", e.message);
            return true;
          }
        },
        20,
        true
      );
    }

    function safeRemove(Css) {
      try {
        const removeNodes = qA(Css);
        for (let i = 0; i < removeNodes.length; i++) {
          removeNodes[i].remove();
        }
      } catch (e) {
        error("safeRemove:", e.name);
      }
    }

    function setScrollButton(paraName, classNameIn, scrollSize) {
      const oDiv = qS(paraName);
      let H = 0;
      let Y = oDiv;
      if (Y !== null) {
        debug(`\ud83d\udd33 %s %O`, Y.nodeName, { Y });
        while (Y) {
          H += Y.offsetTop;
          Y = Y.offsetParent;
        }
        document.addEventListener("scroll", () => {
          if (defCon.elCompat.scrollTop > H + scrollSize) {
            oDiv.classList.add(classNameIn);
          } else {
            oDiv.classList.remove(classNameIn);
          }
        });
      }
    }

    function getQueryString() {
      let val = "";
      qA(
        `input[id="kw"][name^="w"],input[name="q"]:not([type="hidden"]),input[name="text"][type="text"],input[name="query"][class$="query"],input[name="keyword"],input[id="search-input"],input[type="search"][class^="input"]`
      ).forEach((item, index, arr) => {
        val = item.value;
        val && debug(`\ud83d\udd33 QueryString[INPUT]: %O`, { current_keyword: val, input_index: index, previous_keyword: arr[index].value });
      });
      if (val === null || val === "" || typeof val === "undefined") {
        const keys = ["wd", "word", "query", "q", "text", "keyword"];
        for (let i = 0; i < keys.length; i++) {
          const queryString = getUrlParam(keys[i]);
          if (queryString) {
            val = queryString;
            debug(`\ud83d\udd33 QueryString[URL]: %s`, val);
            break;
          }
        }
        val = val ? val.replace(/\+/g, " ") : "";
      }
      return encodeURIComponent(val);
    }

    function getGlobalGoogle(google, checkGoogleJump) {
      if (checkGoogleJump) {
        const getRealHostName = hostname => {
          const index = hostname || top.location.hostname;
          return index.substring(index.indexOf("google"));
        };
        if (getRealHostName() !== getRealHostName(google) && !sessionStorage.getItem("_global_google_")) {
          sessionStorage.setItem("_global_google_", 1);
          const redirectNCR = () => {
            defCon.s && defCon.s.close();
            delete defCon.s;
            sessionStorage.removeItem("_global_google_");
            top.location.href = top.location.href.replace(top.location.hostname, google);
          };
          try {
            sleep(500).then(() => {
              defCon.s = GMopenInTab(`https://${google}/ncr`, true);
              GMnotification({
                title: `智能跳转`,
                text: Notice.noticeHTML(`<dd class="${Notice.center}">当前页面即将跳转至 Google国际站（NCR）<br/><span>${google.toUpperCase()}</span></dd>`),
                type: `${Notice.info}`,
                closeWith: ["click"],
                timeout: 20,
                callbacks: { onClose: [redirectNCR] },
              });
            });
          } catch (e) {
            error("getGlobalGoogle:", e.message);
          }
        }
      }
    }
  })();
})();
