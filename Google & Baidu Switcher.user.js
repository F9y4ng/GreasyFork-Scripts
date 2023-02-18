// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:zh-CN         优雅的搜索引擎跳转助手
// @name:zh-TW         優雅的搜索引擎跳轉助手
// @name:ru            скачок поисковой системы
// @name:ja            優雅な検索エンジンジャンプ助手
// @version            2023.02.18.2
// @author             F9y4ng
// @description        "Elegant Search Engine Jump Assistant" makes it easy for users to jump from a specific search engine to another one to achieve a more elegant search experience; it supports customizing common search engines and optimizing the keyword rendering effect of search results. In addition, the script also provides the removal of search link redirection, blocking ads in search results, visual search parameter settings, and automatic update detection, and is compatible with more than ten well-known search engines in the world, such as Baidu, Google, Bing, Duckduckgo, Yandex, You, etc.
// @description:zh-CN  “优雅的搜索引擎跳转助手”方便用户从特定的搜索引擎跳转到另一个搜索引擎，以实现更优雅的搜索体验；并支持自定义常用搜索引擎、优化搜索结果关键词渲染效果。此外，该脚本还提供了去除搜索链接重定向、屏蔽搜索结果中的广告、可视化搜索参数设置、以及自动更新检测等高级功能，并兼容世界上十多个知名搜索引擎，如Baidu, Google, Bing, Duckduckgo, Yandex, You等。
// @description:zh-TW  「優雅的搜索引擎跳轉助手」方便用戶從特定的搜索引擎跳轉到另一個搜索引擎，以實現更優雅的搜索體驗；並支持自定義常用搜索引擎、優化搜索結果關鍵詞渲染效果。此外，該腳本還提供了去除搜索鏈接重定向、屏蔽搜索結果中的廣告、可視化搜索參數設置、以及自動更新檢測等高級功能，並兼容世界上十多個知名搜索引擎，如Baidu, Google, Bing, Duckduckgo, Yandex, You等。
// @description:ru     "скачок поисковой системы" позволяет пользователям легко перейти от конкретной поисковой системы к другой поисковой системе, чтобы получить более элегантный поисковый опыт; и поддерживает настройку общих поисковых систем и оптимизацию рендеринга результатов поиска по ключевым словам. кроме того, скрипт также предоставляет расширенные функции, такие как удаление перенаправления поисковых ссылок, блокировка рекламы в результатах поиска, настройки параметров визуального поиска и автоматическое обнаружение обновлений, и совместим с более чем десятью известными в мире поисковыми системами, такими как Baidu, Google, Bing, Duckduckgo, Yandex, You и так далее.
// @description:ja     “優雅な検索エンジンジャンプ助手”は、ユーザが特定の検索エンジンから別の検索エンジンにジャンプして、より優雅な検索体験を実現することを容易にし、常用検索エンジンをカスタマイズし、検索結果キーワードレンダリング効果を最適化することをサポートする。また，このスクリプトは，検索リンクリダイレクトの除去，検索結果中の広告の隠蔽，可視化検索パラメータ設定，自動更新検出などの高度な機能を提供し，Baidu，Google，Bing，Duckduckgo，Yandex，Youなど世界10以上の有名な検索エンジンと互換性がある.
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               https://img.icons8.com/stickers/48/search-in-cloud.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @match              *://www.baidu.com/*
// @match              *://kaifa.baidu.com/searchPage*
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
// @match              *://yandex.ru/*search*
// @match              *://www.ecosia.org/*
// @match              *://neeva.com/search*
// @match              *://*.you.com/search*
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
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @note               新增对Userscripts扩展的支持(+快捷键)。\n变更MacOS快捷键为option，键值与Win相同。\n修正Bing搜索提示超宽样式的问题。\n修正Bing.com多行输入框及跳转按钮的样式问题。\n修正Safari下搜索链接重定向的错误。\n优化搜索结果及推荐的广告过滤规则。\n优化浏览器内核判断及伪造UA的识别率。\n修正一些已知的问题，优化样式，优化代码。
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
// @grant              GM_unregisterMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @license            GPL-3.0-only
// @create             2015-10-07
// @copyright          2015-2023, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

~(function (w, trustedTypesPolicy) {
  "use strict";

  /* customize */

  const IS_OPEN_DEBUG = false; // set "true" to debug scripts, may cause script response slower.

  /* Perfectly Compatible For Greasemonkey, Tampermonkey, Violentmonkey, Userscripts * F9y4ng * 20230218 */

  const GMinfo = GM_info;
  const GMscriptHandler = GMinfo.scriptHandler;
  const isGM = GMscriptHandler.toLowerCase() === "greasemonkey";
  const debug = IS_OPEN_DEBUG ? console.log.bind(console) : () => {};
  const error = IS_OPEN_DEBUG ? console.error.bind(console) : () => {};
  const warn = IS_OPEN_DEBUG ? console.warn.bind(console) : () => {};
  const count = IS_OPEN_DEBUG ? console.count.bind(console) : () => {};

  /* GM selector */

  const GMsetValue = GMselector("setValue");
  const GMgetValue = GMselector("getValue");
  const GMdeleteValue = GMselector("deleteValue");
  const GMlistValues = GMselector("listValues");
  const GMopenInTab = GMselector("openInTab");
  const GMxmlhttpRequest = GMselector("xmlhttpRequest");
  const GMregisterMenuCommand = GMselector("registerMenuCommand");
  const GMunregisterMenuCommand = GMselector("unregisterMenuCommand");

  function GMselector(rec) {
    switch (rec) {
      case "setValue":
        return typeof GM_setValue !== "undefined"
          ? GM_setValue
          : typeof GM !== "undefined" && typeof GM.setValue !== "undefined"
          ? GM.setValue
          : localStorage.setItem.bind(localStorage);
      case "getValue":
        return typeof GM_getValue !== "undefined"
          ? GM_getValue
          : typeof GM !== "undefined" && typeof GM.getValue !== "undefined"
          ? GM.getValue
          : localStorage.getItem.bind(localStorage);
      case "deleteValue":
        return typeof GM_deleteValue !== "undefined"
          ? GM_deleteValue
          : typeof GM !== "undefined" && typeof GM.deleteValue !== "undefined"
          ? GM.deleteValue
          : localStorage.removeItem.bind(localStorage);
      case "listValues":
        return typeof GM_listValues !== "undefined" ? GM_listValues : typeof GM !== "undefined" && typeof GM.listValues !== "undefined" ? GM.listValues : () => {};
      case "openInTab":
        return typeof GM_openInTab !== "undefined" ? GM_openInTab : typeof GM !== "undefined" && typeof GM.openInTab !== "undefined" ? GM.openInTab : w.open;
      case "xmlhttpRequest":
        return typeof GM_xmlhttpRequest !== "undefined"
          ? GM_xmlhttpRequest
          : typeof GM !== "undefined" && typeof GM.xmlHttpRequest !== "undefined"
          ? GM.xmlHttpRequest
          : xhr => {
              fetch(xhr?.url)
                .then(response => response.text())
                .then(data => {
                  let res = { response: data };
                  xhr?.onreadystatechange?.(res);
                  xhr?.onload?.(res);
                })
                .catch(e => xhr?.onerror?.(e));
            };
      case "registerMenuCommand":
        return typeof GM_registerMenuCommand !== "undefined"
          ? GM_registerMenuCommand
          : typeof GM !== "undefined" && typeof GM.registerMenuCommand !== "undefined"
          ? GM.registerMenuCommand
          : () => {};
      case "unregisterMenuCommand":
        return typeof GM_unregisterMenuCommand !== "undefined"
          ? GM_unregisterMenuCommand
          : typeof GM !== "undefined" && typeof GM.unregisterMenuCommand !== "undefined"
          ? GM.unregisterMenuCommand
          : () => {};
    }
  }

  /* default CONST Values */

  const defCon = {
    clickTimer: 0,
    curVersion: GMinfo.script.version || getMetaValue("version"),
    options: isGM ? false : { active: true, insert: true, setParent: true },
    elCompat: document.compatMode === "CSS1Compat" ? document.documentElement : document.body,
    scriptName: getMetaValue(`name:${navigator.language || "zh-CN"}`) || GMinfo.script.name || "Search Engine Assistant",
    encrypt: n => {
      try {
        return w.btoa(encodeURIComponent(String(n)));
      } catch (e) {
        error("Encrypt.error:", e.message);
      }
    },
    decrypt: n => {
      try {
        return decodeURIComponent(w.atob(String(n).replace(/[^A-Za-z0-9+/=]/g, "")));
      } catch (e) {
        error("Decrypt.error:", e.message);
      }
    },
    randString: (n, v) => {
      const a = "0123456789";
      const b = "abcdefghijklmnopqrstuvwxyz";
      const c = b.toUpperCase();
      let r = c;
      let s = "";
      let z = true;
      let m = Math.abs(Number(n)) || 8;
      switch (v) {
        case "mix":
          m = m - 1 || 1;
          r = b + a + c;
          z = false;
          break;
        case "char":
          r = b + c;
          break;
        case "digit":
          r = a;
          break;
      }
      for (; m > 0; --m) {
        s += r[random(r.length, "floor")];
      }
      return z ? s : c[random(c.length, "floor")].concat(s);
    },
    refresh: () => location.reload(true),
    isWinTop: () => {
      try {
        return w.self === w.top;
      } catch (e) {
        return !parent.frames.length;
      }
    },
  };

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
    noticeHTML: str => String(`<div class="${Notice.rName}"><dl>${str}</dl></div>`),
  };

  /* Detect Redundant Scripts */

  const UNSAFE_WINDOW = typeof unsafeWindow !== "undefined" ? unsafeWindow : w;
  const FEEDBACK_URI = getMetaValue("\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0055\u0052\u004c");
  const CONTENT_CONTEXT_MODE = GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode);
  if (UNSAFE_WINDOW.GBInitialization) {
    GMregisterMenuCommand("\ufff8\ud83d\uded1 发现冗余脚本，点这里排查！", () => GMopenInTab(`${FEEDBACK_URI}/117`, defCon.options));
    console.error(`\ud83d\udea9 [Redundant Scripts]:\r\n发现冗余安装的${defCon.scriptName}，请访问 ${FEEDBACK_URI}/117 排查错误。`);
    return;
  }
  UNSAFE_WINDOW.GBInitialization = true;

  /* New RAF & FDM */

  const nW = isGM || CONTENT_CONTEXT_MODE ? w : UNSAFE_WINDOW;
  class RAF {
    constructor() {
      this.timerMap = { timeout: {}, interval: {} };
      this.setTimeout = this.setTimeout.bind(this);
    }
    static __init(w) {
      w.__GB_rAF_ =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.mozRequestAnimationFrame ||
        w.oRequestAnimationFrame ||
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
            return setTimeout(function onAnimationFrame() {
              callback(timeToCall - animationStartTime);
            }, timeout);
          };
        })();
      w.__GB_cAF_ =
        w.cancelAnimationFrame ||
        w.webkitCancelAnimationFrame ||
        w.mozCancelAnimationFrame ||
        w.oCancelAnimationFrame ||
        w.cancelRequestAnimationFrame ||
        w.webkitCancelRequestAnimationFrame ||
        w.mozCancelRequestAnimationFrame ||
        w.oCancelRequestAnimationFrame ||
        function cancelAnimationFrame(id) {
          clearTimeout(id);
        };
    }
    __deploy(w) {
      return w.__GB_rAF_.bind(w);
    }
    _ticking(fn, type, interval, lastTime = Date.now()) {
      const timerSymbol = Symbol(type);
      const step = () => {
        this._setTimerMap(timerSymbol, type, step);
        if (interval < 1000 / 60 || Date.now() - lastTime >= interval) {
          typeof fn === "function" && fn();
          if (type === "interval") {
            lastTime = Date.now();
          } else {
            this.clearTimeout(timerSymbol);
          }
        }
      };
      this._setTimerMap(timerSymbol, type, step);
      return timerSymbol;
    }
    _setTimerMap(timerSymbol, type, step) {
      this.timerMap[type][timerSymbol] = nW.__GB_rAF_(step);
    }
    setTimeout(fn, interval) {
      return this._ticking(fn, "timeout", interval);
    }
    clearTimeout(timer) {
      nW.__GB_cAF_(this.timerMap.timeout[timer]);
      delete this.timerMap.timeout[timer];
    }
    setInterval(fn, interval) {
      return this._ticking(fn, "interval", interval);
    }
    clearInterval(timer) {
      nW.__GB_cAF_(this.timerMap.interval[timer]);
      delete this.timerMap.interval[timer];
    }
  }

  RAF.__init(nW);

  class FDM extends RAF {
    constructor() {
      super();
      const self = this;
      self.reads = [];
      self.writes = [];
      self.rAF = self.__deploy(nW);
    }
    _schedule(context) {
      if (!context.scheduled) {
        context.scheduled = true;
        context.rAF(context._defrag.bind(null, context));
      }
    }
    _defrag(context) {
      const writes = context.writes;
      const reads = context.reads;
      try {
        context._run(reads);
        context._run(writes);
      } catch (e) {
        error("FDM:Uncaught Error:", e.message);
      }
      context.scheduled = false;
      if (reads.length || writes.length) context._schedule(context);
    }
    _run(tasks) {
      let task;
      while ((task = tasks.shift())) task();
    }
    read(fn, ctx) {
      const task = !ctx ? fn : fn.bind(ctx);
      this.reads.push(task);
      this._schedule(this);
      return task;
    }
    write(fn, ctx) {
      const task = !ctx ? fn : fn.bind(ctx);
      this.writes.push(task);
      this._schedule(this);
      return task;
    }
  }

  /* Sleep Promise Function */

  const raf = new RAF();
  const cachedSetTimeout = setTimeout;
  const createSleepPromise = (timeout, { useCachedSetTimeout }) => {
    const timeoutFunction = useCachedSetTimeout ? cachedSetTimeout : raf.setTimeout;
    return new Promise(resolve => {
      timeoutFunction(resolve, timeout);
    }).catch(e => error("CreateSleepPromise:", e.message));
  };
  const sleep = (timeout, { useCachedSetTimeout } = {}) => {
    const sleepPromise = createSleepPromise(timeout, { useCachedSetTimeout });
    const promiseFunction = value => sleepPromise.then(() => value);
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    promiseFunction.catch = Promise.resolve().catch;
    return promiseFunction;
  };

  /* Abbreviated functions */

  const fdm = new FDM();
  const oH = Object.prototype.hasOwnProperty;
  const cE = str => document.createElement(str);
  const qA = (str, target = document) => {
    try {
      return Array.prototype.slice.call(target.querySelectorAll(str), 0);
    } catch (e) {
      return [];
    }
  };
  const qS = (str, target = document) => {
    try {
      return target.querySelector(str);
    } catch (e) {
      return null;
    }
  };

  /* Content-Security-Policy: trustedTypes */

  if (w.trustedTypes?.createPolicy) {
    trustedTypesPolicy = w.trustedTypes.createPolicy("default", { createHTML: string => string });
  }

  /* Get browser core & system parameters */

  const getNavigator = {
    uaData: (() => {
      try {
        // eslint-disable-next-line no-undef
        return Boolean(navigator.userAgentData && navigator.userAgentData instanceof NavigatorUAData);
      } catch (e) {
        error("GetNavigator.uaData:", e.message);
        return false;
      }
    })(),
    init: function (v = this.uaData) {
      return v ? navigator.userAgentData : navigator.userAgent.toLowerCase();
    },
    getBrowser: (brands, getBrand, info = "Other", version = "0.00") => {
      try {
        if (getBrand) {
          brands.some(b => {
            switch (b.brand) {
              case "Microsoft Edge":
                info = "Edge";
                version = b.version;
                break;
              case "Google Chrome":
                info = "Chrome";
                version = b.version;
                break;
              case "Opera":
                info = "Opera";
                version = b.version;
                break;
              case "Brave":
                info = "Brave";
                version = b.version;
                break;
              case "Chromium":
                if (info === "Other") {
                  info = "Chromium";
                  version = b.version;
                }
                break;
            }
          });
        } else {
          brands.some(b => {
            if (b.brand === "Chromium") {
              info = "Blink";
              version = b.version;
            }
          });
        }
      } catch (e) {
        error("Navigator.getBrowser:", e.message);
      }
      return { info, version };
    },
    core: function (u = JSON.stringify(this.init())) {
      return {
        Trident: u.includes("trident") || u.includes("compatible"),
        Presto: u.includes("presto"),
        WebKit: u.includes("applewebkit") && u.includes("safari") && u.includes("version"),
        Gecko: u.includes("gecko") && !u.includes("khtml") && !u.includes("trident") && !u.includes("compatible"),
        Blink: (u.includes("applewebkit") && (u.includes("chromium") || u.includes("chrome"))) || u.includes("Chromium"),
      };
    },
    system: function (u = this.init(), system = "Unknown") {
      if (this.uaData) {
        system = u.platform?.toString() || system;
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
    browser: function (u = this.init(), browserInfo = "Other") {
      if (this.uaData) {
        browserInfo = this.getBrowser(u.brands, "browser").info;
      } else {
        const browserArray = {
          IE: u.includes("msie") || u.includes("trident") || u.includes("compatible"),
          Chromium: u.includes("chromium"),
          Chrome: u.includes("chrome") && !u.includes("edg") && !u.includes("chromium"),
          Firefox: u.includes("firefox") && u.includes("gecko"),
          Opera: u.includes("presto") || u.includes("opr") || u.includes("opera"),
          Safari: u.includes("safari") && u.includes("version") && !u.includes("chrome"),
          Edge: u.includes("edg"),
          QQBrowser: /qqbrowser/i.test(u),
          Wechat: /micromessenger/i.test(u),
          UCBrowser: /ubrowser/i.test(u),
          Sougou: /metasr|sogou/i.test(u),
          Maxthon: /maxthon/i.test(u),
          CentBrowser: /cent/i.test(u),
          Vivaldi: /vivaldi/i.test(u),
          Brave: /brave/i.test(u),
          Yandex: /yabrowser/i.test(u),
        };
        for (let i in browserArray) {
          if (oH.call(browserArray, i) && browserArray[i]) browserInfo = i;
        }
      }
      return browserInfo;
    },
    isCheatUA: function () {
      return (
        (!this.uaData && !!navigator.userAgentData) ||
        (this.core().WebKit && !UNSAFE_WINDOW.GestureEvent) ||
        (!this.core().WebKit && !!UNSAFE_WINDOW.GestureEvent) ||
        (this.core().Blink && !UNSAFE_WINDOW.webkitRequestFileSystem) ||
        (!this.core().Blink && !!UNSAFE_WINDOW.webkitRequestFileSystem) ||
        (!this.core().Gecko && !isNaN(parseFloat(UNSAFE_WINDOW.mozInnerScreenX))) ||
        (this.core().Gecko && isNaN(parseFloat(UNSAFE_WINDOW.mozInnerScreenX)))
      );
    },
  };

  const CUR_WINDOW_TOP = defCon.isWinTop();
  const IS_REAL_BLINK = (getNavigator.core().Blink && !getNavigator.isCheatUA()) || !!UNSAFE_WINDOW.webkitRequestFileSystem;
  const IS_REAL_GECKO = (getNavigator.core().Gecko && !getNavigator.isCheatUA()) || !isNaN(parseFloat(UNSAFE_WINDOW.mozInnerScreenX));
  const IS_REAL_EDGE = IS_REAL_BLINK && getNavigator.browser().includes("Edge");

  /* pushState & replaceState */

  const historyWrap = function (type) {
    const orig = w.history[type];
    const event = new Event(type);
    return function () {
      const fn = orig.apply(this, arguments);
      event.arguments = arguments;
      w.dispatchEvent(event);
      return fn;
    };
  };
  w.history.pushState = historyWrap("pushState");
  w.history.replaceState = historyWrap("replaceState");

  /* expire for fontlist cache */

  const cache = {
    value: (data, eT = 6048e5) => {
      return {
        data: data,
        expired: Date.now() + eT,
      };
    },
    set: (key, ...options) => GMsetValue(key, defCon.encrypt(JSON.stringify(cache.value(...options)))),
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

  function getMetaValue(str) {
    const queryReg = new RegExp(`//\\s+@${str}\\s+(\\S+)`);
    const metaValue = GMinfo.scriptMetaStr?.match(queryReg);
    return metaValue ? metaValue[1] : "";
  }

  function random(range, type = "round") {
    return Math[type]((w.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
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
      if (shouldFinish) return;
    }
    const tickId = raf.setInterval(() => {
      const shouldFinish = callback();
      if (shouldFinish) {
        raf.clearInterval(tickId);
        return;
      }
    }, interval);
  }

  function deBounce(fn, delay, timer, immediate) {
    if (typeof fn !== "function") return;
    let once = 0;
    const threshold = Number(Boolean(immediate));
    return function () {
      const context = this;
      const args = arguments;
      if (typeof defCon[timer] === "undefined") {
        immediate && fn.apply(context, args);
      } else {
        raf.clearTimeout(defCon[timer]);
        once++;
      }
      defCon[timer] = raf.setTimeout(() => {
        once >= threshold && fn.apply(context, args);
        delete defCon[timer];
        once = null;
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
    type: Notice.success,
    position: "bottomRight",
    newestOnTop: false,
    timeout: 30,
    progressBar: true,
    closeWith: ["button"],
    animation: {
      open: `${Notice.animated} ${Notice.random}_fadeIn`,
      close: `${Notice.animated} ${Notice.random}_fadeOut`,
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
        if (typeof cb === "function") cb.apply(ref);
      });
    }
  };

  const addModal = () => {
    if (document.getElementsByClassName(`${Notice.noticejs}-modal`).length <= 0) {
      const element = cE("div");
      element.classList.add(`${Notice.noticejs}-modal`);
      element.classList.add(`${Notice.noticejs}-modal-open`);
      document.body.appendChild(element);
      sleep(200).then(() => (element.className = `${Notice.noticejs}-modal`));
    }
  };

  const closeItem = item => {
    getCallback(options, "onClose");
    if (options.animation !== null && options.animation.close !== null) {
      item.className += " " + options.animation.close;
    }
    sleep(200).then(() => item.remove());
    if (options.modal === true && qA(`[${Notice.noticejs}-modal='true']`).length >= 1) {
      qS(`.${Notice.noticejs}-modal`).className += ` ${Notice.noticejs}-modal-close`;
      sleep(500).then(() => qS(`.${Notice.noticejs}-modal`).remove());
    }
    const closetNode = item.closest(`.${Notice.noticejs}`);
    const closetNodeCName = closetNode?.className?.replace(Notice.noticejs, "").trim() ?? `${Notice.noticejs}-bottomRight`;
    const position = "." + closetNodeCName;
    sleep(500).then(() => {
      if (qA(position + ` .${Notice.item}`).length <= 0) {
        qS(position)?.remove();
      }
    });
  };

  const addListener = item => {
    if (options.closeWith.includes("button")) {
      const cloze = item.querySelector(`.${Notice.close}`);
      cloze?.addEventListener("click", () => closeItem(item));
    }
    if (options.closeWith.includes("click")) {
      item.style.cursor = "pointer";
      item.addEventListener("click", e => {
        if (e.target.className !== Notice.close) {
          getCallback(options, "onClick");
          closeItem(item);
        }
      });
    } else {
      item.addEventListener("click", e => e.target.className !== Notice.close && getCallback(options, "onClick"));
    }
    item.addEventListener("mouseover", () => getCallback(options, "onHover"));
  };

  const appendNoticeJs = (noticeJsHeader, noticeJsBody, noticeJsProgressBar) => {
    const target_class = `.${Notice.noticejs}-` + options.position;
    const noticeJsItem = cE("div");
    noticeJsItem.classList.add(Notice.item);
    noticeJsItem.classList.add(options.type);
    if (options.rtl === true) noticeJsItem.classList.add(`${Notice.noticejs}-rtl`);
    if (options.width !== "" && Number.isInteger(options.width)) fdm.write(() => (noticeJsItem.style.width = options.width + "px"));
    if (noticeJsHeader && noticeJsHeader.nodeType) noticeJsItem.appendChild(noticeJsHeader);
    if (noticeJsBody.nodeType) noticeJsItem.appendChild(noticeJsBody);
    if (noticeJsProgressBar && noticeJsProgressBar !== "" && noticeJsProgressBar.nodeType) noticeJsItem.appendChild(noticeJsProgressBar);
    if (["top", "bottom"].includes(options.position)) qS(target_class).textContent = "";
    if (options.animation !== null && options.animation.open !== null) noticeJsItem.className += " " + options.animation.open;
    if (options.modal === true) {
      noticeJsItem.setAttribute(`${Notice.noticejs}-modal`, "true");
      addModal();
    }
    addListener(noticeJsItem);
    getCallback(options, "beforeShow");
    getCallback(options, "onShow");
    if (options.newestOnTop === true) {
      qS(target_class)?.insertAdjacentElement("afterbegin", noticeJsItem);
    } else {
      qS(target_class)?.appendChild(noticeJsItem);
    }
    getCallback(options, "afterShow");
    return noticeJsItem;
  };

  class Components {
    createContainer() {
      const element_class = `${Notice.noticejs}-${options.position}`;
      const element = cE("gb-notice");
      element.classList.add(Notice.noticejs);
      element.classList.add(element_class);
      element.id = element_class;
      return element;
    }
    createHeader() {
      let element;
      if (options.title) {
        element = cE("div");
        element.setAttribute("class", `${Notice.noticejs}-heading`);
        element.textContent = options.title;
      }
      if (options.closeWith.includes("button")) {
        const close = cE("div");
        close.setAttribute("class", Notice.close);
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
        if (options.scroll.showOnHover === true) element.style.visibility = "hidden";
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
              sleep(close_time).then(() => closeItem(item));
            } else {
              closeItem(item);
            }
          } else {
            width--;
            fdm.write(() => (bar.style.width = width + "%"));
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
      if (document.body && qS(`.${Notice.noticejs}-${this.options.position}`) === null) {
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
      fdm.read(() => {
        const zoom = Number(w.getComputedStyle(document.body, null).getPropertyValue("zoom"));
        const transform = w.getComputedStyle(document.body, null).getPropertyValue("transform");
        const ratio = Number(transform.split(",")[3]) || 1;
        const thatNotice = qS(`#${Notice.noticejs}-${position}`);
        if (IS_REAL_GECKO) {
          if (ratio && ratio !== 1 && thatNotice) {
            fdm.write(() => {
              thatNotice.style.cssText += `width:${defCon.elCompat.clientWidth / ratio}px;height:${defCon.elCompat.clientHeight / ratio}px;top:0;left:0`;
            });
            thatNotice.childNodes.forEach((item, index, array) => {
              let curItem = 0;
              if (position === "topRight") {
                fdm.write(() => {
                  item.style.cssText += `transform-origin:right top 0;transform:scale(${1 / ratio});position:absolute;right:${10 / ratio}px;top:${10 / ratio}px`;
                });
              } else {
                curItem = !index ? 10 / ratio : (array[index - 1].clientHeight + 10) / ratio + Number(array[index - 1].style.bottom.replace("px", ""));
                fdm.write(() => {
                  item.style.cssText += `transform-origin:right bottom 0;transform:scale(${1 / ratio});position:absolute;right:${10 / ratio}px;bottom:${curItem}px`;
                });
              }
            });
            // rePosition for transform(scale)
            fdm.write(() => (thatNotice.style.transform = `translateY(${-defCon.elCompat.getBoundingClientRect().top}px)`));
            if (thatNotice.childNodes.length) {
              const rP = () => fdm.write(() => (thatNotice.style.transform = `translateY(${-defCon.elCompat.getBoundingClientRect().top}px)`));
              document.addEventListener("scroll", rP);
            }
          }
        } else {
          zoom && zoom !== 1 && thatNotice && fdm.write(() => (thatNotice.style.cssText += `zoom:${1 / zoom}!important`));
        }
      });
    }
  };

  const GMnotification = ({ title, text, type, scroll, width, closeWith, newestOnTop, progressBar, timeout, callbacks, position }) => {
    try {
      new NoticeJs({
        title: title || "",
        text: text,
        type: type || Notice.success,
        width: width || 400,
        newestOnTop: newestOnTop || false,
        closeWith: closeWith || ["button"],
        progressBar: progressBar ?? true,
        timeout: timeout ?? 30,
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

  let config_date, isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor;
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
      customColor = { foregroundColor: "#f73131cd", backgroundColor: "#ffff80ad" };
      config_date = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
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
      customColor = config_date.customColor || { foregroundColor: "#f73131cd", backgroundColor: "#ffff80ad" };
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
      const update = url =>
        new Promise((resolve, reject) => {
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
            ontimeout: () => reject(new Error("Update.TimeoutError")),
          });
        }).catch(e => {
          error("AutoUpdate.XHR:", e.message);
          return { res: undefined, source: undefined };
        });
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
                `%c[GB-UpdateError]%c\r\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!`,
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
                    GMnotification({
                      title: "升级提示",
                      text: Notice.noticeHTML(
                        `<dd id="${Notice.random}_loading">${IS_REAL_GECKO ? "已经在新窗口打开脚本升级页面！" : "正在申请脚本更新安装页面，请稍后……"}</dd>
                          <dd>请点击<strong>这里</strong>刷新页面，以使新版本脚本生效！</dd>`
                      ),
                      type: Notice.info,
                      closeWith: ["click"],
                      timeout: false,
                      position: "topRight",
                      callbacks: { onClose: [defCon.refresh] },
                    });
                    return qS(`#${Notice.random}_loading`);
                  })
                  .then(r => sleep(2e3, { useCachedSetTimeout: true })(r).then(s => s?.remove()))
                  .catch(e => error("preInstall:", e.message));
              };
              sleep(5e2, { useCachedSetTimeout: true })
                .then(() => {
                  GMnotification({
                    title: "更新检测",
                    text: Notice.noticeHTML(
                      `<dd><span>发现新版本</span><i>V${version}</i>，点击可自动更新。</dd>${updateInfo}<dd id="${Notice.stopUpdate}"><input type="checkbox">一周内不再提醒</dd>`
                    ),
                    type: Notice.warning,
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
                .then(() =>
                  console.log(
                    `%c[GB-Update]%c\r\nWe found a new version: %c${version}%c.You can update now!`,
                    "font-weight:bold;color:crimson",
                    "color:0",
                    "color:crimson",
                    "color:0"
                  )
                );
            } else {
              sleep(5e2, { useCachedSetTimeout: true })
                .then(() => {
                  GMnotification({
                    title: "更新检测",
                    text: Notice.noticeHTML(`<dd style="margin: 10px 0"><span>恭喜您！</span>当前版本 <i>${defCon.curVersion}</i> 已为最新！</dd>`),
                    type: Notice.success,
                    closeWith: ["click"],
                    timeout: 5,
                  });
                })
                .then(() => cache.set("_autoupdate_", version))
                .then((r = defCon.curVersion) =>
                  console.log(`%c[GB-Update]%c\r\nCurretVersion: %c${r}%c is up-to-date!`, "font-weight:700;color:darkcyan", "color:0", "color:crimson", "color:0")
                );
            }
          }
        })
        .catch(e => error("CheckUpdate:", e.message));
    }
  })();

  /* init CONST values */

  const API_ICO_YANDEX = defCon.decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI=");
  const API_ICO_BACKUP = defCon.decrypt("aHR0cHMlM0ElMkYlMkZzMS5heDF4LmNvbSUyRjIwMjMlMkYwMSUyRjA3JTJGcFNWUHhCai5wbmc=");
  const API_ICO_DDUCKGO = defCon.decrypt("aHR0cHMlM0ElMkYlMkZpY29ucy5kdWNrZHVja2dvLmNvbSUyRmlwMg==");
  const API_ICO_NOICON = defCon.decrypt(
    "ZGF0YSUzQWltYWdlJTJGcG5nJTNCYmFzZTY0JTJDaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQm1KTFIwUUElMkZ3RCUyRkFQJTJCZ3ZhZVRBQUFFRWtsRVFWUlloY1hYV1loWGRSUUg4SSUyRkxaS0pwdG94TG1VdHBHQmd0NWtNbWtWa2twR1MyUGdRJTJCdElCR1VCQkV2WmhCRHdVbVFRJTJCRkVKR1JXUThGcFMxRHVHUkZDbTVNTW8xbFpXcU9tbWlibWpvOW5IT2JPM2YlMkJUak5XOW9YTCUyRmQzenUlMkZkM3ZyOXp6dSUyQmNjJTJGbWYwYU9iNzQlMkZBTkl6RU1BekFIdXpFbDFpT2clMkY4MmdUcmNpJTJGdHhXU3Byd2c3OGpIb015Yms2Zkl4bjglMkY2UE1SMWZwYUpuTUxGRXVtZmwzamZmWDRyaldJYXhKNnU0QiUyQmJqR0Y0UXV6d0hZM0wlMkJVYnllNHlaTXlmR1ZPQTBUc0FyN2NkUEpLRiUyQk1YekJMN0d3JTJCTnFBZm5rYXI4TGNjSDA0U1YlMkJCcjNJN2VXSWlqbU4wZEFrJTJCbThva2k2RGFra2h0eHJiQktsVUFyZnNCQUxNam5sOUZIV09zd0puZEYlMkJmUlVNQXZEYzlGV2JCU1clMkJhU2tzRXFnRlU4azZUJTJGeSUyQmQyMHhDSzBZSEJWWWZrVTFLRVJIMkd1OE9mb25OdUNac3dvdmY4alZndHpGOWlQQmt6Rm9KUjlLbzdxNXB5Yld5YlFxelIlMkJBRE56OTVNeFR2aSUyRkx6NUkyWGtsMlNGc3hUVWwyU0FjeU4yT1Q5bFklMkZJcE5JbjZXNEtlcUpXQzlPR3BEOEpzMnMyN0wlMkJiWGFtN3VXQzFyeEZDNnV5TllJYTI5T0VoMHdRcHpkcSUyRkJZNWVNM2NpZEh1a2lnSVpYdHI4Z3Z4VHpoNXI5UUpKRnB3cWZyUkNDVzBTek1XRmVMZVEyTVM0WGZWT1F6OEE0dXlRMjNJekJTQkZwUGtVVEsyS05HOUhhQyUyQmx5bnBTS2ZtRHBhTWFvUTlzNzdNT3dTeFdWVjVjTkc0WjZHaW54OTNxdHlJbUd0S3ExUDFJNURJZ0NIVlQ5NFc2VGNVNEZtUEZnOEZDNW9FYVk3VzhlZ21vMDdhc2hQRklSRjRxcksxdVQ3WjRqaTFvN0FMZ3pGUGhHOVpaeUwzZDNZNGU4aUpWZlJqUDY1MGUlMkJyQkJwRlBlOHIwbTBaZzVOZ1YxRzh1MWo3NW1RbHJzN3hwaXFCOThVeG15cnFlUm5qUllYcmFxZFRCT2RxWEklMkI5JTJCZHdnWExsV1dMb2RnWU9pZzdrSGIySjdhY0VKNGhSODBVVUNuNVhHNjBRRjNTRXNjb3RJeFRVeEpSVmRLZnclMkJ1blQxckNFYmt0JTJCTnJsejk4SzFvNFFxTUVuV2pWVnRUZzQ0OTRUSVJLRk9FTzJhbWZDWGVFclclMkJ5SWlOZUI0dmxyN2ZJcHFRN2FJbXZGU2FHNG9QUlFHOElhM1NBV1BGS1Znb1dxdjNrdlZ1bkk1WGRINE03OEtrSEpjdFVPQXNmQzRLM0lXMUNCQTkzRkhSeVJSdDFYR1JQSVpyS3pKVkFpdUVxNWFmZ01CY1lhM1hjcjJkb2dUVXhHelJSaTFLUzB3Uzdya0lONHV6WGlhd05jbmRtVXBha2tBdmJZVm5oVGdSUyUyRk5hNG0lMkI2NXNtNVVCTnVFJTJGSFNQJTJCY21wSVdJT0tqUGNUJTJCUlMzWmlUaW82akF0d2E0N1A3MHhwRmZXaVJod1J6Y1E4WEM3aW9Zd0J1QTdQaWVwWnhNMCUyQjRlOEZ3ajFONHFlbDJ4Z2pPcGxHYlQ3Zkt4TFVidUhUWXlMSlBDeXk0VDdScHQ4bjhzeVpvdTA3b0pTcXUlMkZ0dlNQaDBwRERsUU5HJTJCZlNmU2E1SGg1b2ppczFGWWF4dGVGVEh4Q083V1NVTDZMJTJGQzR0djd5SWZHJTJGY0VyUlIlMkZ6WTlLNU8lMkZBa2NYemk1R1ElMkJMendBQUFBQkpSVTVFcmtKZ2dnJTNEJTNE"
  );
  const HOST_URI = defCon.decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkYxMjkwOQ==");
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
    `.${Notice.noticejs} *,.${Notice.noticejs} *::after,.${Notice.noticejs} *::before {scrollbar-width:thin;box-sizing:content-box;line-height:normal}.${Notice.animated}{animation-duration:1s;animation-fill-mode:both}.${Notice.animated}.infinite{animation-iteration-count:infinite}.${Notice.animated}.hinge{animation-duration:2s}.${Notice.animated}.bounceIn,.${Notice.animated}.bounceOut,.${Notice.animated}.flipOutX,.${Notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${Notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${Notice.random}_fadeOut{animation-name:fadeOut}#${CONST.rndID} *{font-family:'Helvetica',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0px transparent!important;text-shadow:none!important}.${Notice.noticejs},.${Notice.noticejs} *{font-family:'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0px transparent!important;text-shadow:none!important}.${Notice.noticejs}-top{top:0;width:100%}.${Notice.noticejs}-top .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-topRight{top:10px;right:10px;z-index:10059!important}.${Notice.noticejs}-topLeft{top:10px;left:10px}.${Notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}-middleLeft,.${Notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${Notice.noticejs}-middleLeft{left:10px}.${Notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${Notice.noticejs}-bottom{bottom:0;width:100%}.${Notice.noticejs}-bottom .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-bottomRight{bottom:10px;right:10px;z-index:10055!important}.${Notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${Notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs} .${Notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}` +
      `.${Notice.noticejs} .${Notice.item} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.item} .${Notice.close}:hover{opacity:.5;color:#000;cursor:pointer}.${Notice.noticejs} .${Notice.item} a{color:#fff;border-bottom:1px dashed #fff}.${Notice.noticejs} .${Notice.item} a,.${Notice.noticejs} .${Notice.item} a:hover{text-decoration:none}.${Notice.noticejs} .${Notice.success}{background-color:#64ce83}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#3da95c;color:#fff;padding:10px;font-weight:700}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.info}{background-color:#3ea2ff}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#067cea;color:#fff;padding:10px;font-weight:700}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.warning}{background-color:#ff7f48;}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#f97038;color:#fff;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.error}{background-color:#e74c3c}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#e93724;color:#fff;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body:hover{visibility:visible!important}` +
      `.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-content{visibility:visible}.${Notice.configuration} input[disabled],.${Notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${Notice.noticejs} .${Notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #aaa;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}:hover{opacity:.5;color:#555;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-heading{font-size:14px!important;background-color:#e7e7e7;color:#333;padding:10px!important;font-weight:700}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body{color:#333;padding:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#3da95c;}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#067cea;}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#f44e06;}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar{width:100%;background-color:#fd5f4e;margin-top:-1px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d;}` +
      `.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar{width:100%;background-color:#efefef;margin-top:-1px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{background:#ccc;width:100%;height:5px}@keyframes ${Notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${Notice.noticejs}-fadeOut{animation-name:${Notice.noticejs}-fadeOut}@keyframes ${Notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${Notice.noticejs}-modal-out{to{opacity:0}}.${Notice.noticejs}{position:fixed;z-index:10050}.${Notice.noticejs} ::-webkit-scrollbar{width:8px}.${Notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${Notice.noticejs} ::-webkit-scrollbar-track{border-radius:3px}.${Notice.noticejs} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${Notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#cccccc;}.${Notice.noticejs}-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:999999;opacity:.3;left:0;top:0}.${Notice.noticejs}-modal-open{opacity:0;animation:${Notice.noticejs}-modal-in .3s ease-out}.${Notice.noticejs}-modal-close{animation:${Notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${Notice.rName}{padding:2px!important}.${Notice.noticejs} .${Notice.rName} dl{margin:0!important;padding:1px!important}.${Notice.noticejs} .${Notice.rName} dl dt{margin:2px 0 6px 0!important;font-size:16px!important;font-weight:900!important}.${Notice.noticejs} .${Notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${Notice.noticejs} .${Notice.rName} .${Notice.center}{width:100%;text-align:center!important}.${Notice.noticejs} .${Notice.rName} dl dd em{color:#fff;font-family:Candara,sans-serif!important;font-size:24px!important;padding:0 5px;font-style:italic}.${Notice.noticejs} .${Notice.rName} dl dd span{font-weight:700;font-size:15px!important;margin-right:8px}.${Notice.noticejs} .${Notice.rName} dl dd i{font-family:Candara,sans-serif!important;font-size:20px!important}.${Notice.noticejs} .${Notice.rName} dl dd .im{color:gold;font-size:16px!important;font-weight:900;padding:0 3px}` +
      `.${Notice.noticejs} .${Notice.warning} .${Notice.rName} ul{width:90%;display:inline-block;text-align:left;vertical-align:top;color:rgba(255, 255, 255, 0.8);padding:4px 4px 8px 4px;margin:0 0 0 8px;counter-reset:xxx 0}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} li{list-style:none;font-style:italic!important;line-height:150%;position:relative;padding:0 0 2px 2px;margin:0 0 0 2px;-webkit-transition:.12s;transition:.12s}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} li::before{content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-family:Candara,sans-serif;font-size:1em;display:inline-block;width:1.5em;margin-left:-1.5em;-webkit-transition:.5s;transition:.5s}.${Notice.noticejs} .${Notice.warning} .${Notice.rName} #${Notice.stopUpdate}{float:right;margin:0px 5px!important;font-size:12px!important;cursor:help}#${Notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;vertical-align:top;margin:2px 4px 0 0;width:14px;height:14px;cursor:help;-webkit-appearance:none;border-radius:50%;border:2px solid #fff;background:#ffa077;}#${Notice.stopUpdate}:hover input,#${Notice.stopUpdate} input:hover{background:#ba2c1d;}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}{display:none!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label{cursor:pointer;padding:11px 9px;margin:0 0 0 25px;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;-webkit-border-radius:7px;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:100px;border-radius:100px;padding:5px;font-size:1em;font-weight:700;color:#fff;content:"OFF"}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label{cursor:pointer;margin:0 0 0 25px;-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}` +
      `.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label::after{content:"ON";top:2px;left:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}.${Notice.noticejs} .${Notice.configuration} button.${Notice.searchButton}{display:flex;align-content:center;justify-content:center;align-items:center;width:162px;height:25px;margin:0 0 10px 0;padding:6px 0;border-radius:6px;border:2px solid #eee;background:#fff;box-shadow:1px 1px 0px 1px #aaa;font-size:14px!important;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} button.${Notice.searchButton}:hover{color:red;box-shadow:1px 1px 3px 0px #888;}.${Notice.noticejs} .${Notice.configuration} span.${Notice.favicon}{width:24px;height:24px;margin:0 6px 0 0}.${Notice.noticejs} .${Notice.configuration} ul.${Notice.searchList}{list-style:none;margin:5px;padding:2px;}.${Notice.noticejs} .${Notice.configuration} ul.${Notice.searchList} li{list-style:none;font-style:normal;margin:0}.${Notice.noticejs} .${Notice.configuration} .${Notice.fieldset}{border:2px dashed #dfdfdf;border-radius:10px;padding:4px 6px;margin:2px;background:transparent!important;width:auto;height:auto;display:block;text-align:left}.${Notice.noticejs} .${Notice.configuration} .${Notice.legend}{width:auto;margin:0;color:#8b0000!important;font-size:14px!important;font-weight:900!important;-webkit-user-select:all;user-select:all;display:block;padding:0 8px}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList}{padding:0;margin:0;background:transparent!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} li{display:flex;list-style:none;margin:3px 0;border:none;float:none;background:transparent!important;cursor:default;-webkit-user-select:none;user-select:none;padding:2px 8px 2px 12px;height:36px;align-content:center;justify-content:space-between}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} li>div{font:normal 700 14px/150% 'Microsoft YaHei','Helvetica Neue',sans-serif!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} button{background:#fafafa;border:1px solid #ccc;border-radius:8px;min-width:65px;height:36px;padding:4px 8px;margin:0 0 0 8px;box-sizing:border-box;font-size:14px!important;font-weight:700;color:#5e5e5e;box-shadow:1px 1px 1px 0 #ccc}` +
      `.${Notice.noticejs} .${Notice.configuration} #${Notice.random}_customColor{margin:0;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} button:hover{background:#fff;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.random}__content{margin:0;height:268px;display:block}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.grid}{overflow-y:auto;overflow-x:hidden;box-sizing:border-box;max-height:237px;width:266px;padding:8px;margin:4px 0 3px 0;overscroll-behavior:contain;}.${Notice.card} h2{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.${Notice.card}{--background:#fff;--background-chackbox:#0082ff;--background-image:#fff, rgba(0, 107, 175, 0.2);--text-color:#666;--text-headline:#000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none; -moz-user-select:none;-ms-user-select:none;user-select:none;padding:0;margin:0}.${Notice.card}__input{position:absolute;display:block;outline:none;border:none;background:none;padding:0;margin:0;-webkit-appearance:none;}.${Notice.card}__input:checked ~ .${Notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#fff;--chack-scale:1;--chack-opacity:1;}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover-chackbox--svg{--stroke-color:#fff;--stroke-dashoffset:0;}.${Notice.card}__input:checked ~ .${Notice.card}__body .${Notice.card}__body-cover:after{--opacity-bg:0;}.${Notice.random}_iconText{color:#333}.${Notice.random}_iconText:hover{color:crimson}` +
      `.${Notice.card}__input:disabled ~ .${Notice.card}__body{cursor:not-allowed;opacity:0.5;}.${Notice.card}__input:disabled ~ .${Notice.card}__body:active{--scale:1;}.${Notice.card}__body{display:grid;grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto;background:var(--background);height:var(--card-height);width:var(--card-witght);border-radius:var(--card-radius);overflow:hidden;position:relative;cursor:pointer;box-shadow:var(--shadow, 1px 1px 3px 1px #cccccc);-webkit-transition:box-shadow var(--transition), -webkit-transform var(--transition);transition:box-shadow var(--transition), -webkit-transform var(--transition);transition:transform var(--transition), box-shadow var(--transition);transition:transform var(--transition), box-shadow var(--transition), -webkit-transform var(--transition);-webkit-transform:scale(var(--scale, 1)) translateZ(0);transform:scale(var(--scale, 1)) translateZ(0);}.${Notice.card}__body:active{--scale:0.96;}.${Notice.card}__body-cover-image{position:absolute;left:10px;top:8px;z-index:100;width:32px;height:32px;}.${Notice.card}__body-cover-image span.${Notice.favicons}{display:block;width:32px;height:32px}.${Notice.card}__body-cover-chackbox{background:var(--chack-bg, var(--background-chackbox));border:2px solid var(--chack-border, #fff);position:absolute;right:10px;top:10px;z-index:1;width:28px;height:28px;border-radius:50%;opacity:var(--chack-opacity, 0);transition:transform var(--transition), opacity calc(var(--transition) * 1.2) linear, -webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale, 0));transform:scale(var(--chack-scale, 0));}.${Notice.card}__body-cover-chackbox--svg{visibility:visible!important;width:13px;height:11px;display:inline-block;vertical-align:top;fill:none;margin:8px 0 0 7px;stroke:var(--stroke-color, #fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset, 16px);-webkit-transition:stroke-dashoffset 0.4s ease var(--transition);transition:stroke-dashoffset 0.4s ease var(--transition);}` +
      `.${Notice.card}__body-header{height:var(--header-height);background:var(--background);padding:4px 10px 6px 50px;}.${Notice.card}__body-header-title{color:var(--text-headline);font-weight:700!important;margin-bottom:0!important;font-size:15px!important;}.${Notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important;}.${Notice.noticejs} .${Notice.configuration} .${Notice.settingList} .${Notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}#${Notice.random}_help{position:relative;right:16%;background:#f07f6a;color:#fff;padding:4px 15px!important;border:1px solid transparent;box-shadow:0 0 6px 0 #f5846f;cursor:help}#${Notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${Notice.random}_clear{margin:0 0 0 10px;cursor:pointer;color:#666;font-weight:500}#${Notice.random}_clear:hover{color:red}#${Notice.random}_clear u{padding:0 2px;text-decoration:none}`
  );

  /* AntiRedirect Functions */

  function clearHrefEvents(node) {
    ["data-res", "data-mdurl", "data-replaceurl", "data-initurl", "data-res"]
      .concat(
        ["data-click", "data-hveid", "data-cthref", "data-jsarwt", "data-ver"],
        ["data-usg", "data-ved", "ping", "onmouseover", "data-md", "data-type"],
        ["referrerpolicy", "data-neeva-log", "data-showurl-highlight"]
      )
      .forEach(item => {
        node?.removeAttribute(item);
      });
    node?.setAttribute("target", "_blank");
    return true;
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
      const url = node.href.replace(/^http:/i, "https:");
      return new Promise((resolve, reject) => {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.href.replace(/^http:/i, "https:") },
          method: "GET",
          timeout: 5e3,
          onreadystatechange: response => {
            if (response.status === 200 && response.readyState === 4) resolve(response.finalUrl || response.responseURL);
          },
          onerror: e => {
            if (e.error?.includes("Request was redirected to a not whitelisted URL")) {
              const rUrl = e.error?.toString().match(/Refused to connect to "([^"]*)"/)[1];
              if (typeof rUrl === "undefined" || rUrl === null || rUrl === "" || rUrl.includes("www.baidu.com/search/error")) {
                reject(new Error(`URLNotExistError`));
              }
              resolve(rUrl);
            } else if (e.responseHeaders?.match(/Location:\s*([\S]+)/)) {
              resolve(e.responseHeaders?.match(/Location:\s*([\S]+)/)[1]);
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
              onload: response => resolve(response.finalUrl || response.responseURL),
              onerror: e => {
                if (e.error?.includes("Request was redirected to a not whitelisted URL")) {
                  const rUrl = e.error?.toString().match(/Refused to connect to "([^"]*)"/)[1];
                  if (typeof rUrl === "undefined" || rUrl === null || rUrl === "" || rUrl.includes("www.baidu.com/search/error")) {
                    reject(new Error(`URLNotExistError`));
                  }
                  resolve(rUrl);
                } else if (e.responseHeaders?.match(/Location:\s*([\S]+)/)) {
                  resolve(e.responseHeaders?.match(/Location:\s*([\S]+)/)[1]);
                } else {
                  reject(new Error(`URLBrokenError`));
                }
              },
              ontimeout: () => reject(new Error(`TimeoutError`)),
            });
          },
        });
      })
        .then(res => {
          debug("\ud83d\udd33", res);
          node.href = res;
          node.style.backgroundColor = null;
          clearHrefEvents(node);
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
              res = res ? res[2] : response.finalUrl || response.responseURL || null;
              resolve(res);
            }
          },
          onerror: () => reject(new Error(`URLBrokenError`)),
          ontimeout: () => reject(new Error(`TimeoutError`)),
        });
      })
        .then(res => {
          debug("\ud83d\udd33", res);
          node.href = res || node.href;
          clearHrefEvents(node);
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
              res = res ? res[2] : response.finalUrl || response.responseURL || null;
              resolve(res);
            }
          },
          onerror: () => reject(new Error(`URLBrokenError`)),
          ontimeout: () => reject(new Error(`TimeoutError`)),
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
                res = res ? res[2] : response.finalUrl || response.responseURL || null;
                resolve(res);
              }
            },
            onerror: () => reject(new Error(`URLBrokenError`)),
            ontimeout: () => reject(new Error(`TimeoutError`)),
          });
        })
          .then(res => {
            debug("\ud83d\udd33", res);
            node.href = res || node.href;
            clearHrefEvents(node);
            node.setAttribute("gd-antiredirect-status", "success");
          })
          .catch(e => {
            node.style = "color:gray!important;text-decoration:line-through wavy red!important";
            node.setAttribute("gd-antiredirect-status", "failure");
            error("antiRedirect_So360: %s %O", e.message, { Node: node, Text: node.textContent, URL: node.href });
          });
      }
    });
  }

  function antiRedirect_Toutiao(str) {
    const requestNodes = qA(str);
    requestNodes.length && count("\ud83d\udd33 [Toutiao-Anti-Redirect]");
    requestNodes.forEach(node => {
      const localUrl = node.href || "#";
      const realUrl = localUrl.match(/(\/search\/jump\?url=)([^&]+)(&)/);
      node.href = realUrl ? decodeURI(decodeURIComponent(realUrl[2])) : localUrl;
      clearHrefEvents(node);
      node.setAttribute("gd-antiredirect-status", "success");
    });
  }

  function antiRedirect_Global(str, siteName) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [${siteName}-Anti-Redirect]`);
    requestNodes.forEach(node => {
      clearHrefEvents(node) && node.setAttribute("gd-antiredirect-status", "success");
    });
  }

  /* AntiAds Functions */

  function antiAds_RemoveNodes(str, siteName) {
    const requestNodes = qA(str);
    requestNodes.length && count(`\ud83d\udd33 [${siteName}-Anti-Ads]`);
    requestNodes.forEach(node => fdm.write(() => node?.remove()));
    // Ads Deep Cleanup
    switch (siteName) {
      case "Google":
        if (qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])>div[id^='eob']").length > 0) {
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])").forEach(node => {
            if (qS("div[id^='eob']", node)) fdm.write(() => node?.remove());
          });
        }
        break;
      case "Bing":
        if (qA("li.b_algo:not([style*='display:none']) .b_caption>div.b_attribution:not([u])+p[class]").length > 0) {
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("li.b_algo").forEach(node => {
            if (qS(".b_caption>div.b_attribution:not([u])+p[class]", node)) {
              fdm.write(() => {
                node.style.display = "none";
                sleep(5e2)(node).then(r => r?.remove());
              });
            }
          });
        }
        break;
      case "Yandex":
        if (qS(".serp-adv__counter")) {
          const rightside_Ads = qS(".serp-adv__counter").nextElementSibling;
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep-exp]`);
          fdm.write(() => {
            qS(".serp-adv__counter").remove();
            rightside_Ads?.className !== "serp-adv__found" && rightside_Ads.remove();
          });
        }
        if (qA("li.serp-item.serp-item_card div.TextContainer>span.OrganicTextContentSpan>span,li.serp-item.serp-item_card div.Label.Label_theme_direct").length > 0) {
          const match_Ads_Style_Yandex = str => {
            const ad_Selector = qS(str);
            const ad_Match_Filter = ad_Selector?.textContent?.match(/\.Label\.DirectLabel_[a-z]+\[class\]\[class\]\s*{\s*background-image:\s*url\(([^)]+)\);?\s*}/);
            return ad_Match_Filter ? ad_Match_Filter[1] : "no-ads-icon";
          };
          const ad_Matched = match_Ads_Style_Yandex(`body>style[nonce][data-stylesheet="bundles-assets"]`);
          const ad_Matcded_II = match_Ads_Style_Yandex(`#search-result-aside>style[nonce][data-stylesheet="progressive"]`);
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("li.serp-item.serp-item_card").forEach(node => {
            fdm.read(() => {
              const ads_Detect = qS("div.TextContainer>span.OrganicTextContentSpan>span", node);
              const ads_Detect_II = qS("div.Label.Label_theme_direct", node);
              const styleState = w.getComputedStyle(ads_Detect_II, null).getPropertyValue("background-image");
              if (
                ads_Detect?.textContent?.includes("\u0420\u0435\u043a\u043b\u0430\u043c\u0430") ||
                ads_Detect?.textContent?.toLowerCase().includes("ad") ||
                ads_Detect_II?.textContent?.toLowerCase().includes("ad") ||
                styleState.includes(ad_Matched) ||
                styleState.includes(ad_Matcded_II)
              ) {
                fdm.write(() => node?.remove());
              }
            });
          });
        }
        break;
      case "So360":
        if (qA("ul.section>li span[class='txt']>s,ul.result>li>div[class~='res-recommend-tag']").length > 0) {
          count(`\ud83d\udd33 [${siteName}-Anti-Ads-Deep]`);
          qA("ul.section>li,ul.result>li").forEach(node => {
            const ads = qS("span[class='txt']>s", node);
            if (ads?.textContent?.includes("\u5e7f\u544a") || qS("div[class~='res-recommend-tag']", node)) {
              fdm.write(() => node?.remove());
            }
          });
        }
        break;
    }
  }

  /* Menus & Button insert  */

  !(async function () {
    "use strict";
    const selectedSite = [];
    await init_Config_Data();

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
        StyleCode: `a,a em{text-decoration:none!important}a:hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndID}{z-index:1999999995;position:relative;margin:0 0 0 4px;height:40px;display:inline-block}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;margin-left:2px;height:40px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${CONST.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #4662D9;border:1px solid #3476d2}`,
        KeyStyle: "#wrapper_wrapper em",
        AntiRedirect: () => deBounce(antiRedirect_Baidu, 200, "baidu", true)(".c-container a[href*='//www.baidu.com/link?url=']:not([gd-antiredirect-status])"),
        AntiAds: () => {
          const ads = `#s-hotsearch-wrapper,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad,div[class^='result-op'][tpl='right_tabs'][data-click],div[class^='result-op'][tpl='right_links'][data-click]`;
          deBounce(antiAds_RemoveNodes, 20, "ad_baidu", true)(ads, "Baidu");
        },
      },
      google: {
        SiteTypeID: 2,
        SiteName: "Google",
        SiteNick: "Google 搜索",
        SiteURI: "www.google.com",
        WebURL: "https://www.google.com/search?hl=zh-CN&source=hp&safe=off&filter=0&newwindow=1&q=",
        ImgURL: "https://www.google.com/search?hl=zh-CN&source=lnms&tbm=isch&sa=X&safe=off&filter=0&q=",
        IMGType: ["isch"],
        SplitName: "tbm",
        MainType: "form button[type='submit']",
        StyleCode: `#${CONST.rndID}{z-index:100;position:relative;margin:0 4px 0 -5px;display:flex;justify-content:center;align-items:center}#${CONST.rndID} #${CONST.leftButton}{padding:0 2px 0 8px}.${CONST.scrollspan}{min-height:26px}.${CONST.scrollspan2}{min-height:26px;margin-top:0!important}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${CONST.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${CONST.leftButton} input{margin:0;cursor:pointer;padding:1px 12px 1px 18px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#fff;vertical-align:top;}#${CONST.rightButton} input{margin:0;cursor:pointer;padding:1px 18px 1px 12px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#fff;vertical-align:top;}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background:#2b7de9;}`,
        KeyStyle: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
        AntiRedirect: () => deBounce(antiRedirect_Goolge, 500, "google", true)("#rcnt a:not([gd-antiredirect-ok])"),
        AntiAds: () => deBounce(antiAds_RemoveNodes, 20, "ad_google", true)("div[aria-label='\u5e7f\u544a'],div[aria-label='Ads'],#bottomads", "Google"),
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
        MainType: `.b_searchboxForm>input[type="hidden"][name="form"]`,
        StyleCode: `#b_header .b_searchboxForm{z-index:3!important}#${CONST.rndID}{z-index:3;position:relative;display:inline-flex;height:38px;min-width:180px;width:auto;margin:0;padding:0 6px 0 0;vertical-align:middle;justify-content:center;flex-wrap:nowrap}#${CONST.leftButton},#${CONST.rightButton}{width:auto;margin:0;padding:0}#${CONST.rndID} input{box-sizing:border-box;cursor:pointer;min-width:90px;height:38px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;font-weight:600;font-size:16px}#${CONST.leftButton} input{border-top-left-radius:24px;border-bottom-left-radius:24px;margin:0;padding:0 12px 0 18px;}#${CONST.rightButton} input{border-top-right-radius:24px;border-bottom-right-radius:24px;margin:0 0 0 2px;padding:0 18px 0 12px;}.${CONST.scrollspan}{}.${CONST.scrollbars}{}.${CONST.scrollspan2}{max-height:30px;padding:4px 4px 0 8px!important;margin:0!important;vertical-align:top!important}.${CONST.scrollbars2}{border-radius:4px!important;max-height:30px;padding:0 12px!important;margin-right:0!important;vertical-align:top!important}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background-color:#fff;transition:border linear .1s,box-shadow linear .3s;box-shadow:1px 1px 8px #08748D;border:2px solid #0095B7;text-shadow:0 0 1px #0095B7!important;color:#0095B7}.${Notice.random}_input{width:300px!important}`,
        KeyStyle: String(
          Number(getUrlParam("ensearch")) || Number(getCookie("ENSEARCH"))
            ? ".b_caption p strong, .b_caption .b_factrow strong, .b_secondaryText strong,th, h2 strong, h3 strong"
            : "#sp_requery strong, #sp_recourse strong, #tile_link_cn strong, .b_ad .ad_esltitle~div strong, h2 strong, .b_caption p strong, .b_snippetBigText strong, .recommendationsTableTitle+.b_slideexp strong, .recommendationsTableTitle+table strong, .recommendationsTableTitle+ul strong, .pageRecoContainer .b_module_expansion_control strong, .b_rs strong, .b_rrsr strong, #dict_ans strong, .b_listnav>.b_ans_stamp>strong, .adltwrnmsg strong,.b_imgcap_altitle p strong, .b_imgcap_altitle .b_factrow strong,.richrsrailsuggestion_text strong"
        ),
        AntiRedirect: () => deBounce(antiRedirect_Bing, 300, "bing", true)("#b_content a[href*='.bing.com/ck/a?']:not([gd-antiredirect-status])"),
        AntiAds: () => {
          const ads = `li.b_ans>#relatedSearchesLGWContainer,li.b_ans>.b_rs,li.b_ad,#b_pole,#b_content .b_underSearchbox`;
          deBounce(antiAds_RemoveNodes, 20, "ad_bing", true)(ads, "Bing");
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
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:34px;margin:-1px 0 0 0;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{display:inline;height:34px}#${CONST.rightButton}{display:inline;height:34px}#${CONST.leftButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000;min-width:90px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.rightButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000;min-width:90px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #f2f2f2;border:1px solid #7a7a7a;}.${Notice.random}_weixin{background:#fff!important;border:1px solid #00a06a!important;color:#00a06a!important;border-radius:2px!important;font-size:15px!important}.${Notice.random}_weixin:hover{background:#f7fffd!important}`,
        KeyStyle: "#wrapper em",
        AntiRedirect: () => deBounce(antiRedirect_Sogou, 200, "sogou", true)("h3 a[href^='/link?url=']:not([gd-antiredirect-status])"),
        AntiAds: () => {
          const ads = `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~='ext_query'][id*='sq_ext_']`;
          deBounce(antiAds_RemoveNodes, 20, "ad_sogou", true)(ads, "Sogou");
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
        WebURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/search/?text=`,
        ImgURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/images/search?from=tabbar&family=no&text=`,
        IMGType: ["images"],
        SplitName: "/",
        MainType: "form>div.search2__input",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:40px;margin:0;padding:0;cursor:pointer;opacity:0;-webkit-appearance:none;transition:opacity 0.5s ease-in}#${CONST.leftButton}{display:inline-block;height:40px}#${CONST.rightButton}{margin:0 0 0 -2px;display:inline-block;height:40px}#${CONST.leftButton} input{cursor:pointer;padding:1px 12px 0 18px!important;border:1px solid transparent;background:#fc0;box-shadow:none;border-top-left-radius:10px;border-bottom-left-radius:10px;min-width:90px;height:40px;font-size:16px;font-weight:400;color:#000;vertical-align:top;}#${CONST.rightButton} input{cursor:pointer;padding:1px 18px 0 12px!important;border:1px solid transparent;background:#fc0;box-shadow:none;border-top-right-radius:10px;border-bottom-right-radius:10px;min-width:90px;height:40px;font-size:16px;font-weight:400;color:#000;vertical-align:top;}`,
        KeyStyle: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
        AntiRedirect: () => {},
        AntiAds: () => deBounce(antiAds_RemoveNodes, 100, "ad_yandex", true)(null, "Yandex"),
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
        StyleCode: `#hd-rtools{z-index:1!important}#${CONST.rndID}{z-index:199999995;position:relative;left:0;top:0;width:auto;height:40px;margin:0 0 0 5px;padding:0;cursor:pointer;-webkit-appearance:none}#${CONST.leftButton}{padding:0 1px 0 0;height:40px;display:inline-block;vertical-align:top}#${CONST.rightButton}{height:40px;display:inline-block;vertical-align:top}#${CONST.leftButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-left-radius:8px;border-bottom-left-radius:8px;cursor:pointer;height:40px;color:#fff;min-width:90px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0 -2px 0 0}#${CONST.rightButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-right-radius:8px;border-bottom-right-radius:8px;cursor:pointer;height:40px;color:#fff;min-width:90px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #109e5a;border:1px solid #109e5a;}`,
        KeyStyle: "em,#mohe-newdict_dict .mh-exsentence b",
        AntiRedirect: () => deBounce(antiRedirect_So360, 300, "so360", true)(".res-list a[href*='//www.so.com/link?m=']:not([gd-antiredirect-status])"),
        AntiAds: () => {
          const ads = `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,[class='inline-recommend'][data-url]`;
          deBounce(antiAds_RemoveNodes, 20, "ad_so360", true)(ads, "So360");
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
      kaifa: {
        SiteTypeID: 10,
        SiteName: "开发者搜索",
        SiteNick: "百度开发者 搜索",
        SiteURI: "kaifa.baidu.com",
        WebURL: "https://kaifa.baidu.com/searchPage?module=SEARCH&wd=",
        ImgURL: "https://kaifa.baidu.com/searchPage?module=SUG&wd=",
        IMGType: [null],
        SplitName: "",
        MainType: "div#search-box-container .ant-input-group-addon",
        StyleCode: `.ant-input-group-addon{background:transparent!important}#${CONST.rndID}{z-index:1999999995;position:relative;margin-left:4px;height:40px;display:inline-block;vertical-align:bottom}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;margin-left:2px;height:40px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${CONST.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#fff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{background: #4662D9;border:1px solid #3476d2}`,
        KeyStyle: "mark",
        AntiRedirect: () => {},
        AntiAds: () => deBounce(antiAds_RemoveNodes, 20, "ad_kaifa", true)("#reward-entry", "Kaifa"),
      },
      ecosia: {
        SiteTypeID: 11,
        SiteName: "Ecosia",
        SiteNick: "Ecosia 搜索",
        SiteURI: "www.ecosia.org",
        WebURL: "https://www.ecosia.org/search?method=index&q=",
        ImgURL: "https://www.ecosia.org/images?q=",
        IMGType: ["images"],
        SplitName: "/",
        MainType: "form[role='search'][class~='search-form'][data-test-id='main-header-search-form']",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:relative;margin-left:-12px;height:40px;display:inline-block}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;margin-left:2px;height:40px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-2px;height:40px}#${CONST.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#fff;border-top-left-radius:20px;border-bottom-left-radius:20px;cursor:pointer;height:40px;color:#008009;min-width:90px;border:1px solid #bebeb9;box-shadow:0 1px 2px rgba(26,26,26,0.18),0 0 8px rgba(26,26,26,0.06);font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#fff;border-top-right-radius:20px;border-bottom-right-radius:20px;cursor:pointer;height:40px;color:#008009;min-width:90px;border:1px solid #bebeb9;box-shadow:0 1px 2px rgba(26,26,26,0.18),0 0 8px rgba(26,26,26,0.06);font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{color:#fff;background: #060;border:1px solid #060;}`,
        KeyStyle: "",
        AntiRedirect: () => deBounce(addTargetEvent, 200, "ecosia", true)("#main section article div a", "Ecosia"),
        AntiAds: () => deBounce(antiAds_RemoveNodes, 20, "ad_ecosia", true)("div.main-header__install-cta", "Ecosia"),
      },
      neeva: {
        SiteTypeID: 12,
        SiteName: "Neeva",
        SiteNick: "Neeva 搜索",
        SiteURI: "neeva.com",
        WebURL: "https://neeva.com/search?c=All&q=",
        ImgURL: "https://neeva.com/search?c=Image&q=",
        IMGType: ["Image"],
        SplitName: "c",
        MainType: "input[name='q'][data-tid='search-bar-input']",
        StyleCode: `#${CONST.rndID}{z-index:1999999995;position:relative;margin-left:4px;width:max-content;height:48px;position:absolute;display:inline-block}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;margin-left:2px;height:48px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-2px;height:48px}#${CONST.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#415aff;border-top-left-radius:100px;border-bottom-left-radius:100px;cursor:pointer;height:48px;color:#ffffff;min-width:90px;border:2px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#415aff;border-top-right-radius:100px;border-bottom-right-radius:100px;cursor:pointer;height:48px;color:#ffffff;min-width:90px;border:2px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover,#${CONST.rightButton} input:hover{color:#fff;background: #4078fb;border::2px solid transparent;}`,
        KeyStyle: "strong",
        AntiRedirect: () => deBounce(antiRedirect_Global, 200, "neeva", false)(`a[href][data-neeva-log][rel="nofollow"]:not([gd-antiredirect-status])`, "Neeva"),
        AntiAds: () => deBounce(antiAds_RemoveNodes, 20, "neeva", true)(`div[class*="header-big-blue-button__dismissibleContainer"]`, "Neeva"),
      },
      you: {
        SiteTypeID: 13,
        SiteName: "You",
        SiteNick: "You 搜索",
        SiteURI: "you.com",
        WebURL: "https://you.com/search?fromSearchBar=true&q=",
        ImgURL: "https://you.com/search?fromSearchBar=true&tbm=isch&q=",
        IMGType: ["isch"],
        SplitName: "tbm",
        MainType: "span.hhbXxG",
        StyleCode: `#${CONST.rndID}{z-index:999;position:relative;height:48px;display:inline-block}#${CONST.rndID} #${CONST.leftButton}{display:inline-block;height:48px}#${CONST.rndID} #${CONST.rightButton}{display:inline-block;margin-left:-2px;height:48px}#${CONST.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;background:linear-gradient(98.89deg, rgb(107, 176, 255) 0%, rgb(50, 50, 253) 100%);border-top-left-radius:100px;border-bottom-left-radius:100px;cursor:pointer;height:46px;color:#fff;min-width:110px;border:0px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;background:linear-gradient(98.89deg, rgb(50, 50, 253) 0%, rgb(107, 176, 255) 100%);border-top-right-radius:100px;border-bottom-right-radius:100px;cursor:pointer;height:46px;color:#fff;min-width:110px;border:0px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${CONST.leftButton} input:hover{background:linear-gradient(90deg, rgb(0, 178, 250) 0%, rgb(0, 0, 252) 100%)}#${CONST.rightButton} input:hover{background:linear-gradient(90deg, rgb(0, 0, 252) 0%, rgb(0, 178, 250) 100%)}`,
        KeyStyle: `div[data-testid="app-mainline"] p strong,div[data-testid="app-mainline"] p b`,
        AntiRedirect: () => localStorage.setItem("openLinksInNewTabs", true),
        AntiAds: () => deBounce(antiAds_RemoveNodes, 20, "you", true)(`div[data-testid="extension-button"]`, "You"),
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
      KAIFA: listSite.kaifa.SiteTypeID,
      ECOSIA: listSite.ecosia.SiteTypeID,
      NEEVA: listSite.neeva.SiteTypeID,
      YOU: listSite.you.SiteTypeID,
      OTHERS: listSite.other.SiteTypeID,
    };

    let listCurrentSite, currentSite;
    if (/^(\w+\.)?google\.[a-z.]{2,6}$/.test(location.hostname)) {
      currentSite = selectedEngine.includes(newSiteType.GOOGLE) ? listSite.google : listSite.other;
      listCurrentSite = listSite.google;
    } else if (location.host.endsWith("kaifa.baidu.com")) {
      currentSite = selectedEngine.includes(newSiteType.KAIFA) ? listSite.kaifa : listSite.other;
      listCurrentSite = listSite.kaifa;
    } else if (location.host.endsWith(".baidu.com")) {
      currentSite = selectedEngine.includes(newSiteType.BAIDU) ? listSite.baidu : listSite.other;
      listCurrentSite = listSite.baidu;
    } else if (location.host.endsWith(".bing.com")) {
      currentSite = selectedEngine.includes(newSiteType.BING) ? listSite.bing : listSite.other;
      listCurrentSite = listSite.bing;
    } else if (location.host.endsWith("duckduckgo.com")) {
      currentSite = selectedEngine.includes(newSiteType.DUCKDUCKGO) ? listSite.duckduckgo : listSite.other;
      listCurrentSite = listSite.duckduckgo;
    } else if (location.host.endsWith(".sogou.com")) {
      currentSite = selectedEngine.includes(newSiteType.SOGOU) ? listSite.sogou : listSite.other;
      listCurrentSite = listSite.sogou;
    } else if (location.host.endsWith("fsoufsou.com")) {
      currentSite = selectedEngine.includes(newSiteType.FSOU) ? listSite.fsou : listSite.other;
      listCurrentSite = listSite.fsou;
    } else if (location.host.endsWith("yandex.com") || location.host.endsWith("yandex.ru")) {
      currentSite = selectedEngine.includes(newSiteType.YANDEX) ? listSite.yandex : listSite.other;
      listCurrentSite = listSite.yandex;
    } else if (location.host.endsWith(".so.com")) {
      currentSite = selectedEngine.includes(newSiteType.SO360) ? listSite.so360 : listSite.other;
      listCurrentSite = listSite.so360;
    } else if (location.host.endsWith("so.toutiao.com")) {
      currentSite = selectedEngine.includes(newSiteType.TOUTIAO) ? listSite.toutiao : listSite.other;
      listCurrentSite = listSite.toutiao;
    } else if (location.host.endsWith("www.ecosia.org")) {
      currentSite = selectedEngine.includes(newSiteType.ECOSIA) ? listSite.ecosia : listSite.other;
      listCurrentSite = listSite.ecosia;
    } else if (location.host.endsWith("neeva.com")) {
      currentSite = selectedEngine.includes(newSiteType.NEEVA) ? listSite.neeva : listSite.other;
      listCurrentSite = listSite.neeva;
    } else if (location.host.endsWith("you.com")) {
      currentSite = selectedEngine.includes(newSiteType.YOU) ? listSite.you : listSite.other;
      listCurrentSite = listSite.you;
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

    const getGlobalparameter = () => {
      CONST.vim = getUrlParam(currentSite.SplitName).trim();
      CONST.isSecurityPolicy = Boolean(
        (listCurrentSite.SiteTypeID === newSiteType.GOOGLE && /^(lcl|flm|fin)$/.test(CONST.vim)) ||
          (listCurrentSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(CONST.vim)) ||
          (listCurrentSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(CONST.vim)) ||
          (listCurrentSite.SiteTypeID === newSiteType.SOGOU && (/^(kexue)$/.test(CONST.vim) || /^(fanyi|hanyu|gouwu|as|map)/.test(location.hostname))) ||
          (listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO && /^(maps)$/.test(getUrlParam("iaxm"))) ||
          (listCurrentSite.SiteTypeID === newSiteType.YANDEX && location.pathname.includes("/direct")) ||
          (listCurrentSite.SiteTypeID === newSiteType.NEEVA && /^(Maps)$/.test(CONST.vim))
      );
      CONST.indexPage = () => (currentSite.SiteTypeID === newSiteType.DUCKDUCKGO ? !location.search.includes("q=") : location.pathname === "/");
    };

    getGlobalparameter();
    window.addEventListener("pushState", () => getGlobalparameter());
    window.addEventListener("replaceState", () => getGlobalparameter());
    window.addEventListener("popstate", () => getGlobalparameter());

    CONST.googleSplitLine = currentSite.SiteTypeID === newSiteType.GOOGLE ? `<span jsname="s1VaRe" class="ACRAdd M2vV3"></span>` : ``;
    CONST.fsouSplitLine = currentSite.SiteTypeID === newSiteType.FSOU ? `<div class="divider"></div>` : ``;
    CONST.buttonCode = CONST.googleSplitLine.concat(
      CONST.fsouSplitLine,
      `<span id="${CONST.leftButton}" sn="${selectedSite[0].SiteTypeID}">
          <input type="button" title="${selectedSite[0].SiteNick}一下" value="${selectedSite[0].SiteName}"/>
        </span>
        <span id="${CONST.rightButton}" sn="${selectedSite[1].SiteTypeID}">
          <input type="button" title="${selectedSite[1].SiteNick}一下" value="${selectedSite[1].SiteName}"/>
        </span>`
    );
    CONST.highlightCss = listCurrentSite.KeyStyle
      ? `${listCurrentSite.KeyStyle}{background-color:${customColor.backgroundColor}!important;color:${customColor.foregroundColor}!important;font-weight:700!important}`
      : ``;
    CONST.iconCss = String(
      `.${Notice.noticejs} .${Notice.configuration} span.${Notice.favicon},
        .${Notice.card}__body-cover-image span.${Notice.favicons}{
          background-color:#fff;
          background-image:url('${API_ICO_YANDEX}/${CONST.allSiteURIs}?size=32&stub=1'),url('${API_ICO_BACKUP}');
          background-repeat:no-repeat;
        }`
    );

    /* SYSTEM INFO */

    if (CUR_WINDOW_TOP && listCurrentSite.SiteTypeID !== newSiteType.OTHERS) {
      const isFavEngine = currentSite.SiteTypeID !== newSiteType.OTHERS;
      console.log(
        `%c${defCon.scriptName}\r\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/SearchEngine\r\n%cVersion:\u0020%cV%s%c%s\r\n%cCurrentEngine:\u0020%c%s\r\n%cYourFavEngine:\u0020%c%s\r\n%cAntiRedirect:\u0020%c%s\r\n%cAntiAdvertising:\u0020%c%s\r\n%cSecurityPolicy:\u0020%c%s`,
        "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
        "line-height:180%;font-size:10px;color:#777;font-style:italic",
        "font-size:12px;font-weight:700;color:steelblue",
        "color:slategrey;text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'",
        defCon.curVersion,
        "color:darkred;font:italic 11px/150% Candara,'Times New Roman'",
        getNavigator.isCheatUA() ? "\u3000(CHEAT-UA)" : "",
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
              listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO
                ? `background-image:url('${API_ICO_DDUCKGO}/${listSite[site].SiteURI}.ico')!important;`
                : listCurrentSite.SiteTypeID === newSiteType.ECOSIA
                ? `background-image:url(${API_ICO_NOICON})!important;filter:opacity(0.65);background-position:0 0;`
                : `background-position:0 ${(1 - listSite[site].SiteTypeID) * 24}px;`
            ).concat(`background-attachment:local;background-size:cover;`);
            returnHtml += String(
              `<li>
                <button class="${Notice.searchButton}" id="${listSite[site].SiteTypeID}" ${selectedEngine.includes(listSite[site].SiteTypeID) ? `title="您常用的搜索引擎"` : ``}>
                  <span class="${Notice.favicon} ${Notice.random}_icon" style="${iconStyle}"></span>
                  <span class="${Notice.random}_iconText">${listSite[site].SiteNick}
                    <sup>${selectedEngine.includes(listSite[site].SiteTypeID) ? "\u0020\u2726" : "\u0020\u0020"}</sup>
                  </span>
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
                : listCurrentSite.SiteTypeID === newSiteType.ECOSIA
                ? `background-image:url(${API_ICO_NOICON})!important;filter:opacity(0.85);background-position:0 0;`
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
                      <div>请选择三个最常用的搜索引擎：<span id="${Notice.random}_clear">[<u>清除</u>]</span></div>
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
                      <div>搜索关键词高亮增强
                        <span title="自定义关键词颜色" id="${Notice.random}_customColor" style="display:${keywordHighlight ? `inline-block` : `none`}">\ud83c\udfa8</span>
                      </div>
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
                      <button id="${Notice.random}_help" title="单击查看使用帮助">使用帮助</button>
                      <button id="${Notice.random}_cancel">取消</button>
                      <button id="${Notice.random}_submit">保存</button>
                    </li>
                  </ul>
                </fieldset>`
              ),
              type: Notice.configuration,
              width: 326,
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
                  qA(`input[name='${Notice.card}_lists']:disabled`).forEach(item => (item.disabled = false));
                  qS(`#${Notice.random}_clear`).style.display = input_checked === 0 ? "none" : "inline";
                } else {
                  qA(`input[name='${Notice.card}_lists']:not(:checked)`).forEach(item => (item.disabled = true));
                }
              });
            });
            qS(`#${Notice.random}_clear`).addEventListener("click", () => {
              qA(`input[name='${Notice.card}_lists']:checked:enabled`).forEach(node => node.click());
            });
            qS(`#${Notice.kh}`).addEventListener("click", function () {
              qS(`#${Notice.random}_customColor`).style.display = this.checked ? "inline-block" : "none";
            });
            qS(`#${Notice.random}_customColor`).addEventListener("click", () => {
              /* eslint-disable no-alert */
              let foregroundColor, backgroundColor, confirmColors;
              const saveData = async () => {
                if (!foregroundColor || !backgroundColor) return;
                await init_Config_Data();
                customColor = { foregroundColor: foregroundColor.trim().toLowerCase(), backgroundColor: backgroundColor.trim().toLowerCase() };
                config_date = { isAutoUpdate, keywordHighlight: true, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
                GMsetValue("_configures_", defCon.encrypt(JSON.stringify(config_date)));
              };
              const colorReg =
                /^#[0-9a-f]{3}$|^#[0-9a-f]{6}$|^#[0-9a-f]{8}$|^rgba\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*((?!1.[1-9])[0-1]?(\.[0-9]{1,3})?)\)$|^rgb\(((([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))))|(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))(\s+\/\s+((\d+%)|1|(0\.\d+)))?))\)$|^transparent$|^currentcolor$/i;
              foregroundColor = prompt("请输入关键词前景色（字体颜色），默认为“#F73131CD”，支持HEX, HEXA, RGB, RGBA, currentcolor的颜色格式。", customColor.foregroundColor);
              if (foregroundColor === null) {
                return;
              } else if (colorReg.test(foregroundColor.trim())) {
                backgroundColor = prompt("请输入关键词背景色，默认为“#FFFF80AD”，支持HEX, HEXA, RGB, RGBA, transparent的颜色格式。", customColor.backgroundColor);
                if (backgroundColor === null) {
                  return;
                } else if (colorReg.test(backgroundColor.trim())) {
                  confirmColors = confirm(
                    `保存数据前，请确认您输入的颜色代码是否是您需要的？\r\n` +
                      `\r\n前景色代码：${/^#/gi.test(foregroundColor.trim()) ? foregroundColor.trim().toUpperCase() : foregroundColor.trim().toLowerCase()}` +
                      `\r\n背景色代码：${/^#/gi.test(backgroundColor.trim()) ? backgroundColor.trim().toUpperCase() : backgroundColor.trim().toLowerCase()}`
                  );
                  if (confirmColors) {
                    GMnotification({
                      title: "自定义颜色保存",
                      text: Notice.noticeHTML(`<dd>搜索关键词自定义颜色已保存，当前页面即将刷新！</dd>`),
                      type: Notice.success,
                      closeWith: ["button"],
                      timeout: 10,
                      callbacks: {
                        onShow: [saveData],
                        onClose: [defCon.refresh],
                      },
                    });
                  }
                } else {
                  alert("背景色 格式输入错误\uff01");
                }
              } else {
                alert("前景色（字体颜色） 格式输入错误\uff01");
              }
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
            qS(`#${Notice.random}_submit`).addEventListener("click", async () => {
              let selectEngineList = [];
              qA(`input[name='${Notice.card}_lists']:checked`).forEach(item => {
                selectEngineList.push(Number(item.dataset.sn));
              });
              if (selectEngineList.length < 3) {
                GMnotification({
                  text: Notice.noticeHTML(
                    `<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！</dd>`
                  ),
                  type: Notice.error,
                  closeWith: ["click"],
                  timeout: 18,
                  callbacks: {},
                });
                return;
              }
              await init_Config_Data();
              selectedEngine = selectEngineList;
              isHotkey = qS(`#${Notice.hk}`).checked;
              googleJump = qS(`#${Notice.gj}`).checked;
              localWindow = qS(`#${Notice.lw}`).checked;
              keywordHighlight = qS(`#${Notice.kh}`).checked;
              antiLinkRedirect = qS(`#${Notice.ar}`).checked;
              antiAds = qS(`#${Notice.aa}`).checked;
              isAutoUpdate = qS(`#${Notice.au}`).checked;
              config_date = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
              GMsetValue("_configures_", defCon.encrypt(JSON.stringify(config_date)));
              GMnotification({
                title: "保存成功！",
                text: Notice.noticeHTML(`<dd>设置参数已成功保存，页面稍后自动刷新！</dd>`),
                type: Notice.success,
                closeWith: ["button"],
                timeout: 10,
                callbacks: { onClose: [defCon.refresh] },
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
              type: Notice.configuration,
              width: 200,
              closeWith: ["button"],
              scroll: { maxHeight: 465, showOnHover: true },
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
                      url = listCurrentSite.IMGType.includes(getUrlParam(listCurrentSite.SplitName).trim())
                        ? listSite[type.toLowerCase()].ImgURL
                        : listSite[type.toLowerCase()].WebURL;
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
      parameter_Set = GMregisterMenuCommand(`\ufff0\u2699\ufe0f 搜索引擎助手参数设置${isHotkey ? `(E)` : ""}`, addAction.setConfigure);
      engine_List ? GMunregisterMenuCommand(engine_List) : debug("\ud83d\udd33 %cInstalling Exclude_site_Menu", "color:gray");
      engine_List = GMregisterMenuCommand(`\ufff2\ud83d\udc4b 嗨，你想去哪里吖？${isHotkey ? `(V)` : ""}`, addAction.listEngine);
      feed_Back ? GMunregisterMenuCommand(feed_Back) : debug("\ud83d\udd33 %cInstalling Feed_Back_Menu", "color:gray");
      feed_Back = GMregisterMenuCommand(`\ufff4\u2712\ufe0f 向作者提点儿建议${isHotkey ? `(B)` : ""}`, () => GMopenInTab(FEEDBACK_URI, defCon.options));
    }

    /* hotkey setting */

    if (isHotkey && CUR_WINDOW_TOP) {
      document.addEventListener("keydown", e => {
        const ekey = e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey;
        if (e.keyCode === 69 && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            addAction.setConfigure();
          }
        }
        if (e.keyCode === 86 && ekey) {
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
        !qS(`.${CONST.rndstyleName}`) && insertStyle();
        if (currentSite.SiteTypeID !== newSiteType.OTHERS && !CONST.isSecurityPolicy) {
          !qS(`.${CONST.rndclassName}`) && insertCSS();
          !qS(`#${CONST.rndID}`) && insertButtons();
        }
      } catch (e) {
        error("InsertHTML:", e.message);
      }
    }

    function insertCSS() {
      try {
        const buttonCss = `@charset "UTF-8";` + currentSite.StyleCode;
        addStyle(buttonCss, CONST.rndclassName, document.head, "SC");
      } catch (e) {
        error("insertCSS:", e.message);
      }
    }

    function insertStyle() {
      try {
        const noticeStyle = `@charset "UTF-8";` + CONST.noticeCss + CONST.iconCss + String(keywordHighlight ? CONST.highlightCss : "");
        addStyle(noticeStyle, CONST.rndstyleName, document.head, "SS");
      } catch (e) {
        error("insertStyle:", e.message);
      }
    }

    function insertButtons() {
      try {
        const Selector = currentSite.MainType;
        const userSpan = cE("span");
        userSpan.id = `${CONST.rndID}`;
        userSpan.innerHTML = trustedTypesPolicy.createHTML(CONST.buttonCode);
        const SpanID = `#${userSpan.id}`;
        const indexPage = CONST.indexPage();
        const Target = qS(Selector);
        if (indexPage || !Target || qS(SpanID) || !getQueryString()) return;
        return new Promise(resolve => {
          switch (currentSite.SiteTypeID) {
            case newSiteType.BAIDU:
              insterAfter(userSpan, Target);
              if (qS(SpanID)) {
                switch (CONST.vim) {
                  case currentSite.IMGType[0]:
                    fdm.write(() => {
                      qS(SpanID).style.marginLeft = "16px";
                      qS(`#${CONST.rightButton} input`).style.marginLeft = "3px";
                    });
                    break;
                  case currentSite.IMGType[1]:
                    fdm.write(() => (qS(SpanID).style.height = "34px"));
                    qA(`${SpanID} input`).forEach(node => {
                      fdm.write(() => {
                        node.style.cssText = "min-width:90px;height:34px;padding:0 5px!important;color:#fff;background:#38f;border-radius:0;border:1px solid #2d78f4";
                      });
                    });
                    break;
                }
              }
              break;
            case newSiteType.GOOGLE:
              getGlobalGoogle("www.google.com", googleJump);
              insterAfter(userSpan, Target);
              if (qS(SpanID)) {
                fdm.write(() => {
                  qS(SpanID).parentNode.style.width = "100%";
                  qS(SpanID).parentNode.style.minWidth = "100%";
                  qS(SpanID).parentNode.parentNode.style.width = "100%";
                  qS(SpanID).parentNode.parentNode.parentNode.style.width = "95%";
                  if (currentSite.IMGType.includes(CONST.vim)) {
                    qS(SpanID).parentNode.firstElementChild.style.width = "400px";
                  }
                });
              }
              break;
            case newSiteType.BING:
              insterAfter(userSpan, Target);
              fdm.write(() => {
                qA(`#b_header .b_searchbox`).forEach(item => (item.style.maxWidth = "666px"));
                const textareaNode = qS(`textarea.b_searchbox[name="q"]`, Target.parentNode);
                textareaNode?.getAttribute("rows") >= 2 &&
                  qA(`#${CONST.rndID} input`).forEach(node => {
                    node.style.cssText += "border-radius:8px";
                  });
                if (qS(".b_searchboxForm") && location.search.includes("view=detailV2")) {
                  qS(".b_searchboxForm").style.cssText += "width:max-content!important;padding-right:5px!important";
                  qA(`#${CONST.rndID} input`).forEach(node => {
                    node.style.cssText += "height:36px!important;border-radius:6px!important;padding:0 12px!important;margin:0 -2px 0 0!important;";
                  });
                }
              });
              break;
            case newSiteType.SOGOU:
              if (currentSite.IMGType.includes(CONST.vim)) {
                sleep(500, { useCachedSetTimeout: true }).then((s = SpanID, t = Target) => {
                  if (!qS(s) && t) {
                    insterAfter(userSpan, t);
                    fdm.write(() => (qS(s).style.right = `-${Number(qS(s).getBoundingClientRect().width) + 10}px`));
                    addSearchButtonEvent(qA(`${s} span[sn]:not([event-insert])`));
                  }
                });
              } else if (CONST.vim.endsWith("weixin")) {
                insterAfter(userSpan, Target);
                fdm.write(() => {
                  qS(SpanID).style = "position:relative";
                  qA(`${SpanID} input`).forEach(node => node.classList.add(`${Notice.random}_weixin`));
                });
              } else {
                insterAfter(userSpan, Target);
                qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`) && qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`).remove();
                sleep(200, { useCachedSetTimeout: true }).then(() => {
                  fdm.write(() => {
                    qS(SpanID).style.right = `-${Number(qS(SpanID).getBoundingClientRect().width) + 10}px`;
                    qS(`#searchBtn2`) && (qS(`#searchBtn2`).style.right = `-${Number(qS(SpanID).getBoundingClientRect().width) + 120}px`);
                  });
                });
              }
              break;
            case newSiteType.SO360:
              insterAfter(userSpan, Target);
              if (currentSite.IMGType.includes(CONST.vim)) {
                qA(`${SpanID} input`).forEach(node => fdm.write(() => (node.style = "margin:0 0 0 1px;")));
              }
              break;
            case newSiteType.FSOU:
              insterAfter(userSpan, Target);
              break;
            case newSiteType.DUCKDUCKGO:
              Target.parentNode.appendChild(userSpan);
              Target.parentNode.appendChild(Target.cloneNode(true));
              Target.remove();
              sleep(100).then(() => fdm.write(() => (qS(SpanID).style.right = `-${Number(qS(SpanID).getBoundingClientRect().width) + 8}px`)));
              break;
            case newSiteType.TOUTIAO:
              insterAfter(userSpan, Target);
              sleep(100).then(() => fdm.write(() => (qS(SpanID).style.right = `-${Number(qS(SpanID).getBoundingClientRect().width) + 10}px`)));
              break;
            case newSiteType.YANDEX:
              insterAfter(userSpan, Target);
              sleep(500, { useCachedSetTimeout: true })
                .then(() => {
                  fdm.read(() => {
                    const width = Number(qS(SpanID).getBoundingClientRect().width) || 182;
                    const isRU = location.host.endsWith(".ru");
                    fdm.write(() => {
                      if (currentSite.IMGType.includes(CONST.vim)) {
                        qS(SpanID).style.right = `-${isRU ? (IS_REAL_GECKO || IS_REAL_EDGE ? width - 60 : width - 130) : width - 60}px`;
                        qS(`button.button2[data-bem]`) && (qS(`button.button2[data-bem]`).style.right = `-${width + 144}px`);
                      } else if (CONST.vim === "products") {
                        qS(SpanID).style.right = `-${width - 60}px`;
                      } else {
                        qS(SpanID).style.right = `-${isRU ? ((IS_REAL_EDGE || IS_REAL_GECKO) && CONST.vim === "video" ? width - 60 : width - 110) : width - 60}px`;
                        qS(`.input__settings`) && (qS(`.input__settings`).style.right = `-${width + 144}px`);
                        qS(`span.serp-header__voice-search-container`) && (qS(`span.serp-header__voice-search-container`).style.right = `-${width + 190}px`);
                        qS(`button.voice-search-button`) && (qS(`button.voice-search-button`).style.right = `-${width + 190}px`);
                      }
                      qS(`span.input__voice-search`) && (qS(`span.input__voice-search`).style.right = `-${width + 184}px`);
                    });
                  });
                })
                .then(() => (qS(SpanID).style.opacity = 1));
              break;
            case newSiteType.KAIFA:
              Target.appendChild(userSpan);
              if (qS(SpanID)) fdm.write(() => (qS("#search-box-container input[class~='ant-input']").style.cssText += `width:605px!important`));
              break;
            case newSiteType.ECOSIA:
              sleep(800).then((s = SpanID, t = Target) => {
                !qS(s) && t && insterAfter(userSpan, t);
                addSearchButtonEvent(qA(`${s} span[sn]:not([event-insert])`));
                qS("input[name='q'][required='required']").addEventListener("focus", () => {
                  if (document.body.classList.contains("no-scroll")) {
                    fdm.write(() => (qS(s).style.display = "none"));
                    sleep(120)(qS(s)).then(r => qS("button[data-test-id='search-form-back']").addEventListener("click", () => (r.style.display = null)));
                  }
                });
              });
              break;
            case newSiteType.NEEVA:
              insterAfter(userSpan, Target);
              break;
            case newSiteType.YOU:
              insterAfter(userSpan, Target);
              break;
          }
          resolve({ SpanID, Selector, indexPage });
        })
          .then(r => {
            addSearchButtonEvent(qA(`${r.SpanID} span[sn]:not([event-insert])`));
            scrollDetect(qS(r.Selector), r.indexPage);
          })
          .catch(e => error("insertHTML:", e.message));
      } catch (e) {
        error("insertButtons:", e.message);
      }
    }

    function scrollDetect(target, indexPage) {
      if (indexPage || !target) return;
      let scrollbars, scrollspan, height, e;
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
          setScrollButton(`#${CONST.rndID}`, scrollspan, 50);
          setScrollButton(`#${CONST.rndID} #${CONST.leftButton} input`, scrollbars, 50);
          setScrollButton(`#${CONST.rndID} #${CONST.rightButton} input`, scrollbars, 50);
          break;
        default:
          return;
      }
    }

    function insterAfter(newElement, targetElement) {
      if (!newElement || !targetElement) return;
      const parent = targetElement.parentNode;
      if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
      } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
      }
    }

    function addSearchButtonEvent(nodes) {
      let gotoUrl = "about:blank";
      nodes.forEach(node => {
        node.setAttribute("event-insert", true);
        qS("input", node).addEventListener("click", () => {
          CONST.vim = getUrlParam(currentSite.SplitName)?.trim();
          switch (Number(node.getAttribute("sn"))) {
            case selectedSite[0].SiteTypeID:
              gotoUrl = currentSite.IMGType.includes(CONST.vim) ? selectedSite[0].ImgURL : selectedSite[0].WebURL;
              break;
            case selectedSite[1].SiteTypeID:
              gotoUrl = currentSite.IMGType.includes(CONST.vim) ? selectedSite[1].ImgURL : selectedSite[1].WebURL;
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
              return !!addToTarget.querySelector(`.${className}`);
            } else {
              return true;
            }
          } catch (e) {
            error("AddStyle:", e.message);
            return true;
          }
        },
        50,
        { runNow: true }
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

    function setScrollButton(paraName, className, scrollSize) {
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
            oDiv.classList.add(className);
          } else {
            oDiv.classList.remove(className);
          }
        });
      }
    }

    function getQueryString() {
      let val = "";
      qA(
        `input[id="kw"][name^="w"],input[name="q"]:not([type="hidden"]),input[name="text"][type="text"],input[name="query"][class$="query"],input[name="keyword"],input[id="search-input"],input[type="search"][class^="input"],#search-box-container input[class~="ant-input"]`
      ).forEach((item, index, arr) => {
        val = item.value;
        val && debug("\ud83d\udd33 QueryString[INPUT]: %O", { current_keyword: val, input_index: index, previous_keyword: arr[index].value });
      });
      if (val === null || val === "" || typeof val === "undefined") {
        const keys = ["wd", "word", "query", "q", "text", "keyword"];
        for (let i = 0; i < keys.length; i++) {
          const queryString = getUrlParam(keys[i]);
          if (queryString) {
            val = queryString;
            debug("\ud83d\udd33 QueryString[URL]: %s", val);
            break;
          }
        }
        val = val?.replace(/\+/g, " ") ?? "";
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
            defCon.s?.close();
            delete defCon.s;
            sessionStorage.removeItem("_global_google_");
            top.location.href = top.location.href.replace(top.location.hostname, google);
          };
          try {
            sleep(500).then(() => {
              defCon.s = GMopenInTab(`https://${google}/ncr`, true);
              GMnotification({
                title: "智能跳转",
                text: Notice.noticeHTML(`<dd class="${Notice.center}">当前页面即将跳转至 Google国际站（NCR）<br/><span>${google.toUpperCase()}</span></dd>`),
                type: Notice.info,
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
})(typeof window !== "undefined" ? window : this, { createHTML: string => string });
