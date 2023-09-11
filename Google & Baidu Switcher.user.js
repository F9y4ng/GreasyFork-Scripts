// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            SearchEngine Assistant
// @name:zh-CN         优雅的搜索引擎跳转助手
// @name:zh-TW         優雅的搜索引擎跳轉助手
// @name:ru            помощник поисковой системы
// @name:ja            優雅な検索エンジンジャンプ助手
// @version            2023.09.11.1
// @author             F9y4ng
// @description        "Elegance moteur de recherche saut Assistant" pour faciliter le saut dans les différents moteurs de recherche; Support des moteurs de recherche personnalisés, mise en évidence des mots clés; Fournit des fonctionnalités avancées telles que la suppression des redirections de liens et le blocage des annonces de recherche ; Compatible avec les moteurs de recherche tels que Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage et Brave.
// @description:en     "Elegant search engine Jump Assistant" facilitates users to jump between different search engines; supports custom commonly used search engines and search keyword highlighting effects; provides advanced functions such as removing search link redirection, blocking search results advertisements, etc.; it is compatible with well-known search engines such as Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, Brave, etc.
// @description:zh-CN  “优雅的搜索引擎跳转助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染效果；还提供去除搜索链接重定向、屏蔽搜索结果广告、可视化参数设置、及自动更新检测等高级功能；兼容多个知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Brave等。
// @description:zh-TW  「優雅的搜索引擎跳轉助手」方便用戶在不同的搜索引擎之間跳轉；支持自定義常用搜索引擎、關鍵詞高亮渲染效果；還提供去除搜索鏈接重定嚮、屏蔽搜索結果廣告、可視化參數設置、及自動更新檢測等高級功能；兼容多個知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Brave等。
// @description:ru     "помощник поисковой системы" облегчает пользователям переход между различными поисковыми системами; поддерживает пользовательские широко используемые поисковые системы и эффекты подсветки ключевых слов; предоставляет расширенные функции, такие как удаление перенаправления поисковых ссылок, блокирование рекламы результатов поиска и т.д.; он совместим с известными поисковыми системами, такими как Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, brave и т.д.
// @description:ja     “優雅な検索エンジンジャンプアシスタント”は、ユーザが異なる検索エンジン間でジャンプすることを容易にし、カスタム常用検索エンジン、検索キーワードのハイライト効果をサポートし、検索リンクのリダイレクト除去、検索結果広告の遮蔽、可視化パラメータ設定、自動更新検出などの高度な機能を提供し、Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Ecosia、You、Startpage、Braveなどの複数の有名な検索エンジンに対応する。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               https://img.icons8.com/stickers/48/search-in-cloud.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @require            https://greasyfork.org/scripts/460897/code/gbCookies.js?version=1155350#sha256-tPcmrrZrxDx4nZQVrx2fQzJjAlMmScX0yFSaT3/T/Ss=
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
// @match              *://search.yahoo.com/search*
// @match              *://images.search.yahoo.com/search/images*
// @match              *://*.you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
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
// @connect            favicon.yandex.net
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @note               修正Yandex.com搜索按钮的样式错误。\n修正Brave搜索按钮的样式错误。\n修正You.com搜索按钮的样式错误。\n优化Bing.com灰度测试的滚动样式。\n修正一些已知问题，优化样式，优化代码。
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

~(function (w) {
  "use strict";

  /**
   * LICENSE FOR OPEN SOURCE USE: GPLv3.
   * CUSTOM SCRIPT DEBUGGING, DO NOT TURN ON FOR DAILY USE.
   * SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.
   * THE SETTING VALUE TYPE MUST BE BOOLEAN, FALSE BY DEFAULT.
   */

  const IS_OPEN_DEBUG = false;

  /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2023-04-08 F9Y4NG */

  const GMinfo = GM_info;
  const GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion ?? "unknown";
  const GMscriptHandler = GMinfo.scriptHandler;
  const GMsetValue = gmSelector("setValue");
  const GMgetValue = gmSelector("getValue");
  const GMdeleteValue = gmSelector("deleteValue");
  const GMlistValues = gmSelector("listValues");
  const GMopenInTab = gmSelector("openInTab");
  const GMregisterMenuCommand = gmSelector("registerMenuCommand");
  const GMunregisterMenuCommand = gmSelector("unregisterMenuCommand");
  const GMxmlhttpRequest = gmSelector("xmlhttpRequest");
  const GMunsafeWindow = gmSelector("unsafeWindow");
  const GMcontentMode = gmSelector("contentMode");

  /* INITIALIZE_DEBUG_FUNCTIONS */

  const IS_DEBUG = setDebuggerMode() || IS_OPEN_DEBUG;

  const DEBUG = IS_DEBUG ? __console.bind(console, "log") : () => {};
  const WARN = IS_DEBUG ? __console.bind(console, "warn") : () => {};
  const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
  const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

  /* INITIALIZE_COMMON_CONSTANTS */

  const def = {
    count: { clickTimer: 0 },
    const: {
      allSiteURIs: "",
      isSecurityPolicy: false,
      ft: parseFloat(1000 / 60),
      raf: `__GB_rAF_${generateRandomString(24, "attr")}`,
      caf: `__GB_cAF_${generateRandomString(24, "attr")}`,
      cssAttrName: `gb-css-${generateRandomString(8, "attr")}`,
      gfHost: decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkYxMjkwOQ=="),
      rndID: generateRandomString(12, "char"),
      rndclassName: `SC${generateRandomString(8, "digit")}`,
      rndstyleName: `SS${generateRandomString(8, "digit")}`,
      leftButton: generateRandomString(6, "mix"),
      rightButton: generateRandomString(6, "mix"),
      scrollspan: generateRandomString(8, "char"),
      scrollspan2: generateRandomString(8, "char"),
      scrollbars: generateRandomString(8, "char"),
      scrollbars2: generateRandomString(8, "char"),
    },
    variable: {
      undef: void 0,
      refresh: () => location.reload(true),
      feedback: getMetaValue("supportURL") ?? "",
      curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2023.09.11.0",
      scriptName: getMetaValue(`name:${navigator.language ?? "zh-CN"}`) ?? "SearchEngine Assistant",
    },
    dialog: {
      alert: alert.bind(w),
      prompt: prompt.bind(w),
      confirm: confirm.bind(w),
    },
    notice: {
      rName: generateRandomString(8, "char"),
      random: generateRandomString(5, "char"),
      noticejs: generateRandomString(7, "char"),
      linkerror: generateRandomString(7, "mix"),
      item: generateRandomString(6, "mix"),
      close: generateRandomString(6, "mix"),
      center: generateRandomString(6, "mix"),
      success: generateRandomString(7, "char"),
      warning: generateRandomString(7, "char"),
      info: generateRandomString(7, "char"),
      error: generateRandomString(7, "char"),
      checkbox: generateRandomString(6, "char"),
      configuration: generateRandomString(7, "char"),
      animated: generateRandomString(7, "char"),
      stopUpdate: generateRandomString(6, "mix"),
      searchButton: generateRandomString(6, "mix"),
      favicon: generateRandomString(6, "mix"),
      favicons: generateRandomString(6, "mix"),
      searchList: generateRandomString(7, "mix"),
      fieldset: generateRandomString(6, "char"),
      legend: generateRandomString(6, "char"),
      settingList: generateRandomString(7, "mix"),
      hk: generateRandomString(5, "mix"),
      gj: generateRandomString(5, "mix"),
      lw: generateRandomString(5, "mix"),
      kh: generateRandomString(5, "mix"),
      ar: generateRandomString(5, "mix"),
      aa: generateRandomString(5, "mix"),
      au: generateRandomString(5, "mix"),
      grid: generateRandomString(7, "char"),
      card: generateRandomString(7, "char"),
      noticeHTML: str => String(`<div class="${def.notice.rName}"><dl>${str}</dl></div>`),
    },
  };

  if (checkRedundantScript(GMunsafeWindow)) return;

  /* INITIALIZE_SETTIMEOUT_AND_SETINTERVAL_FUNCTION_CLASSES */

  class RAF {
    constructor(global) {
      this.timerMap = { timeout: {}, interval: {} };
      this.setTimeout = this.setTimeout.bind(this);
      this.global = global;
      registerWindowsProperties();
    }
    _ticking(fn, type, interval, lastTime = Date.now()) {
      const timerSymbol = Symbol(type);
      const step = () => {
        this._setTimerMap(timerSymbol, type, step);
        if (interval < def.const.ft || Date.now() - lastTime >= interval) {
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
      this.timerMap[type][timerSymbol] = this.global[def.const.raf](step);
    }
    setTimeout(fn, interval) {
      return this._ticking(fn, "timeout", interval);
    }
    clearTimeout(timer) {
      this.global[def.const.caf](this.timerMap.timeout[timer]);
      delete this.timerMap.timeout[timer];
    }
    setInterval(fn, interval) {
      return this._ticking(fn, "interval", interval);
    }
    clearInterval(timer) {
      this.global[def.const.caf](this.timerMap.interval[timer]);
      delete this.timerMap.interval[timer];
    }
  }

  const raf = new RAF(w);

  /* GLOBAL_GENERAL_FUNCTIONS */

  function gmSelector(rec) {
    const gmFunctions = {
      setValue: typeof GM_setValue !== "undefined" ? GM_setValue : GM?.setValue ?? localStorage.setItem.bind(localStorage),
      getValue: typeof GM_getValue !== "undefined" ? GM_getValue : GM?.getValue ?? localStorage.getItem.bind(localStorage),
      deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : GM?.deleteValue ?? localStorage.removeItem.bind(localStorage),
      listValues: typeof GM_listValues !== "undefined" ? GM_listValues : GM?.listValues ?? (() => []),
      openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : GM?.openInTab ?? w.open,
      registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand ?? (() => []),
      unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand ?? (() => []),
      xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM?.xmlHttpRequest ?? (xhr => replaceXHR(xhr)),
      unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : w,
      contentMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
    };
    return gmFunctions[rec] ?? (() => {});
  }

  function __console(act) {
    const __this = console;
    const __arguments = [...arguments];
    const [argm = "", ...args] = __arguments.slice(1);
    switch (__arguments[0]) {
      case "log":
        __this[act](`%c\ud83d\udd33 %c${argm}`, "display:inline-block", "font-family:monospace", ...args);
        break;
      case "error":
      case "warn":
        __this[act](`%c\ud83d\udea9 ${argm}`, "display:inline-block;font-family:monospace", ...args);
        break;
      case "count":
        __this[act](`\ud83d\udd33 ${argm}`);
        break;
      default:
        __this.log(argm, ...args);
        break;
    }
  }

  function registerWindowsProperties() {
    // REGISTER RAF
    w[def.const.raf] =
      w.requestAnimationFrame ||
      w.webkitRequestAnimationFrame ||
      w.mozRequestAnimationFrame ||
      w.oRequestAnimationFrame ||
      (function () {
        const delay = def.const.ft;
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
    // REGISTER CAF
    w[def.const.caf] =
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
    // REGISTER UNSAFEWINDOW RAF/CAF
    GMunsafeWindow[def.const.raf] = w[def.const.raf];
    GMunsafeWindow[def.const.caf] = w[def.const.caf];
    // REGISTER PUSHSTATE/REPLACESTATE
    history.pushState = wrapHistory("pushState");
    history.replaceState = wrapHistory("replaceState");

    function wrapHistory(type) {
      const original = history[type];
      const event = new Event(type);
      return function () {
        const fn = original.apply(this, arguments);
        event.arguments = arguments;
        w.dispatchEvent(event);
        return fn;
      };
    }
  }

  function qS(expr, target = document) {
    try {
      if (/^#[\w:-]+$/.test(expr)) return target.getElementById(expr.slice(1));
      return target.querySelector(expr);
    } catch (e) {
      return null;
    }
  }

  function qA(expr, target = document) {
    try {
      return Array.prototype.slice.call(target.querySelectorAll(expr), 0);
    } catch (e) {
      return [];
    }
  }

  function cE(nodeName) {
    return document.createElement(nodeName);
  }

  function gS(target, value = null, opt = null) {
    if (value) {
      return w.getComputedStyle(target, opt).getPropertyValue(value);
    } else {
      return w.getComputedStyle(target, opt);
    }
  }

  function random(range, type = "round") {
    return Math[type]((w.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
  }

  function capitalize(string) {
    string = String(string ?? "").toLowerCase();
    return string.replace(/\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
  }

  function encrypt(string) {
    if (typeof string !== "string") return "";
    return btoa(encodeURIComponent(string));
  }

  function decrypt(string) {
    if (typeof string !== "string") return "";
    return decodeURIComponent(atob(string.replace(/[^A-Za-z0-9+/=]/g, "")));
  }

  function compareArray(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
    return (
      array1.length === array2.length &&
      array1.sort().every(function (element, index) {
        return element === array2.sort()[index];
      })
    );
  }

  function generateRandomString(length, type) {
    const digits = "0123456789";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let characters = upperCaseLetters;
    let prefix = "";
    let randomString = "";
    switch (type) {
      case "mix":
        characters = lowerCaseLetters + digits + upperCaseLetters;
        prefix = upperCaseLetters[random(upperCaseLetters.length, "floor")];
        length--;
        break;
      case "char":
        characters = lowerCaseLetters + upperCaseLetters;
        break;
      case "digit":
        characters = digits;
        break;
      case "attr":
        characters = digits + lowerCaseLetters.slice(0, 6);
        break;
    }
    for (let i = length; i > 0; i--) {
      randomString += characters[random(characters.length, "floor")];
    }
    return prefix + randomString;
  }

  function replaceXHR(xhr) {
    return fetch(xhr?.url)
      .then(response => response.text())
      .then(data => {
        let res = { response: data };
        xhr?.onreadystatechange?.(res);
        xhr?.onload?.(res);
      })
      .catch(e => xhr?.onerror?.(e));
  }

  function createTrustedTypePolicy() {
    const policy = { createHTML: string => string };
    if (!w.trustedTypes?.createPolicy) return policy;
    return w.trustedTypes.createPolicy("default", policy);
  }

  function checkRedundantScript(global) {
    const { isTop: CUR_WINDOW_TOP } = getLocationInfo();
    // PAGE_MODE
    const redundantScripts = global["gb-init-redundantcheck"];
    if (redundantScripts === true) return scriptRedundancyWarning();
    global["gb-init-redundantcheck"] = true;
    // CONTENT_MODE
    if (GMcontentMode) {
      const redundantScriptsInfo = document.documentElement?.getAttribute("gb-init-redundantcheck");
      if (redundantScriptsInfo === "true") {
        document.documentElement?.removeAttribute("gb-init-redundantcheck");
        return scriptRedundancyWarning();
      }
    }
    document.documentElement?.setAttribute("gb-init-redundantcheck", true);
    return false;

    function scriptRedundancyWarning() {
      if (CUR_WINDOW_TOP) {
        __console("error", `\ud83d\udea9 [Redundant Scripts]:\r\nFound redundant-installed scripts: ${def.variable.scriptName}. please reload to troubleshoot the issue.`);
        GMregisterMenuCommand("\ufff8\ud83d\uded1 Found redundant scripts, reload!", () => location.reload());
      }
      return true;
    }
  }

  function getNavigatorInfo() {
    const certificate = `${GMscriptHandler} ${GMversion}`;
    const vmuad = (uad => {
      if (!uad) return;
      const archs = uad.arch?.split("-") ?? [];
      return {
        brands: [{ brand: capitalize(uad.browserName), version: uad.browserVersion }],
        platform: capitalize(uad.os),
        bitness: archs[1] ?? "unknown",
        architecture: archs[0] ?? "unknown",
        credit: certificate,
      };
    })(GMinfo.platform);
    const tmuad = (uad => {
      if (!uad) return;
      uad.credit = certificate;
      return uad;
    })(GMinfo.userAgentData);
    const uad = vmuad ?? tmuad ?? navigator.userAgentData;
    const trustengine = w.webkitRequestFileSystem ? "Blink" : !isNaN(parseFloat(w.mozInnerScreenX)) ? "Gecko" : w.GestureEvent ? "WebKit" : "Unknown";
    let engine = "Unknown";
    let brand = "Unknown";
    let brandversion = "0.00";
    if (uad) {
      const os = capitalize(uad.platform);
      const brandMap = {
        IE: { engine: "Trident", brand: "IE" },
        SAFARI: { engine: "WebKit", brand: "Safari" },
        FIREFOX: { engine: "Gecko", brand: "Firefox" },
        EDGE: { engine: "Blink", brand: "Edge" },
        CHROME: { engine: "Blink", brand: "Chrome" },
        OPERA: { engine: "Blink", brand: "Opera" },
        BRAVE: { engine: "Blink", brand: "Brave" },
        YANDEX: { engine: "Blink", brand: "Yandex" },
        "MICROSOFT EDGE": { engine: "Blink", brand: "Edge" },
        "GOOGLE CHROME": { engine: "Blink", brand: "Chrome" },
      };
      uad.brands.some(b => {
        const reqBrand = b.brand.toUpperCase();
        const brandInfo = brandMap[reqBrand];
        if (brandInfo) {
          engine = brandInfo.engine;
          brand = brandInfo.brand;
          brandversion = b.version;
          return true;
        } else if (reqBrand === "CHROMIUM") {
          engine = "Blink";
          brand = "Chromium";
          brandversion = b.version;
        }
      });
      return { engine, brand, brandversion, os, "trust-engine": trustengine, credit: uad.credit ?? null };
    } else {
      const ua = navigator.userAgent;
      let nameOffset, verOffset, ix;
      if ((verOffset = ua.indexOf("OPR")) !== -1) {
        brand = "Opera";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 4);
        if ((verOffset = ua.indexOf("Version")) !== -1) brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("UBrowser")) !== -1) {
        brand = "UCBrowser";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("YaBrowser")) !== -1) {
        brand = "Yandex";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 10);
      } else if ((verOffset = ua.indexOf("Brave")) !== -1) {
        brand = "Brave";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 6);
      } else if ((verOffset = ua.indexOf("Edg")) !== -1) {
        brand = "Edge";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 4);
      } else if ((verOffset = ua.indexOf("Chromium")) !== -1) {
        brand = "Chromium";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("Maxthon")) !== -1) {
        brand = "Maxthon";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Chrome")) !== -1) {
        brand = "Chrome";
        engine = "Blink";
        brandversion = ua.substring(verOffset + 7);
      } else if ((verOffset = ua.indexOf("Safari")) !== -1) {
        brand = "Safari";
        engine = "WebKit";
        brandversion = ua.substring(verOffset + 7);
        if ((verOffset = ua.indexOf("Version")) !== -1) brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Waterfox")) !== -1) {
        brand = "Waterfox";
        engine = "Gecko";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("Firefox")) !== -1) {
        brand = "Firefox";
        engine = "Gecko";
        brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Trident")) !== -1) {
        brand = "IE";
        engine = "Trident";
        brandversion = String(parseFloat(ua.substring(ua.indexOf("MSIE") + 5)) || parseFloat(ua.substring(ua.indexOf("rv") + 3)));
      } else if ((nameOffset = ua.lastIndexOf(" ") + 1) < (verOffset = ua.lastIndexOf("/"))) {
        brand = ua.substring(nameOffset, verOffset);
        engine = trustengine;
        brandversion = ua.substring(verOffset + 1);
        if (brand.toLowerCase() === brand.toUpperCase()) {
          brand = navigator.appName;
        }
      }
      if ((ix = brandversion.indexOf(";")) !== -1) brandversion = brandversion.substring(0, ix);
      if ((ix = brandversion.indexOf(" ")) !== -1) brandversion = brandversion.substring(0, ix);
      let os = "Unknown";
      if (ua.indexOf("Win") !== -1) os = "Windows";
      if (ua.indexOf("Mac") !== -1) os = "MacOS";
      if (ua.indexOf("Linux") !== -1) os = "Linux";
      if (ua.indexOf("Android") !== -1) os = "Android";
      if (ua.indexOf("like Mac") !== -1) os = "iOS";
      return { engine, brand, brandversion, os, "trust-engine": trustengine, credit: null };
    }
  }

  function getLocationInfo() {
    const { pathname: cPN, hostname: cHN, protocol: cP } = location;
    const isTop = self === top;
    const pHN = parent !== self ? getParentHost() : cHN;
    return { cHN, cPN, cP, pHN, isTop };

    function getParentHost() {
      try {
        return parent.location.hostname;
      } catch (e) {
        return new URL(document.referrer || location).hostname;
      }
    }
  }

  function getMetaValue(str) {
    const queryReg = new RegExp(`//\\s+@${str}\\s+(.+)`);
    const metaValue = (GMinfo.scriptMetaStr || GMinfo.scriptSource)?.match(queryReg);
    return metaValue?.[1];
  }

  function setDebuggerMode() {
    return new URLSearchParams(location.search).get("whoami") === (getMetaValue("author") ?? GMinfo.script.author);
  }

  function sleep(delay, { useCachedSetTimeout } = {}) {
    const timeoutFunction = useCachedSetTimeout ? setTimeout : raf.setTimeout;
    const sleepPromise = new Promise(resolve => {
      timeoutFunction(resolve, delay);
    });
    const promiseFunction = value => sleepPromise.then(() => value);
    promiseFunction.then = (...args) => sleepPromise.then(...args);
    promiseFunction.catch = Promise.resolve().catch;
    return promiseFunction;
  }

  function deBounce({ fn, delay, timer, immed, once } = {}) {
    if (typeof fn !== "function") return;
    let caller = 0;
    const threshold = Number(Boolean(immed));
    return function () {
      const context = this;
      const args = arguments;
      if (once === true) {
        if (!def.count[timer]) {
          def.count[timer] = true;
          fn.apply(context, args);
        }
      } else {
        if (typeof def.count[timer] === "undefined") {
          immed === true && fn.apply(context, args);
        } else {
          raf.clearTimeout(def.count[timer]);
          caller++;
        }
        def.count[timer] = raf.setTimeout(() => {
          caller >= threshold && fn.apply(context, args);
          delete def.count[timer];
          caller = null;
        }, delay);
      }
    };
  }

  function safeRemove(expr, scope) {
    let removedNodes = [];
    let pendingNodes = [];
    switch (typeof expr) {
      case "string":
        pendingNodes = qA(expr, scope);
        pendingNodes.forEach(item => removeNode(item));
        break;
      case "object":
        if (expr instanceof Element) {
          pendingNodes.push(expr);
          removeNode(expr);
        }
        break;
    }
    return compareArray(removedNodes, pendingNodes);

    function removeNode(item) {
      try {
        removedNodes.push(item.parentNode.removeChild(item));
      } catch (e) {
        removedNodes.push(item);
        item.remove();
      }
    }
  }

  ~(function (tTP, requestEnvironmentConstants) {
    "use strict";

    const { navigatorInfo, locationInfo } = requestEnvironmentConstants();
    const { engine, brand, "trust-engine": trustengine, credit } = navigatorInfo;
    const { cP: CUR_PROTOCOL, cHN: CUR_HOST_NAME, isTop: CUR_WINDOW_TOP } = locationInfo;

    const IS_REAL_BLINK = trustengine === "Blink";
    const IS_REAL_GECKO = trustengine === "Gecko";
    const IS_CHEAT_UA = !credit && (engine !== trustengine || checkBlinkCheatingUA());
    const IS_REAL_EDGE = !IS_CHEAT_UA && IS_REAL_BLINK && brand === "Edge";
    const IS_GREASEMONKEY = GMscriptHandler === "Greasemonkey";

    def.const.noticecss = String(
      `.${def.notice.noticejs} *,.${def.notice.noticejs} *::after,.${def.notice.noticejs} *::before {box-sizing:content-box;line-height:normal;scrollbar-width:thin}.${def.notice.animated}{animation-duration:1s;animation-fill-mode:both}.${def.notice.animated}.infinite{animation-iteration-count:infinite}.${def.notice.animated}.hinge{animation-duration:2s}.${def.notice.animated}.bounceIn,.${def.notice.animated}.bounceOut,.${def.notice.animated}.flipOutX,.${def.notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${def.notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${def.notice.random}_fadeOut{animation-name:fadeOut}#${def.const.rndID} *{text-shadow:none!important;font-family:Helvetica,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticejs},.${def.notice.noticejs} *{text-shadow:none!important;font-family:Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticejs}-top{top:0;width:100%}.${def.notice.noticejs}-top .${def.notice.item}{margin:0!important;border-radius:0!important}.${def.notice.noticejs}-topRight{top:10px;right:10px;z-index:10000059!important}.${def.notice.noticejs}-topLeft{top:10px;left:10px}.${def.notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${def.notice.noticejs}-middleLeft,.${def.notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${def.notice.noticejs}-middleLeft{left:10px}.${def.notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${def.notice.noticejs}-bottom{bottom:0;width:100%}.${def.notice.noticejs}-bottom .${def.notice.item}{border-radius:0!important;margin:0!important}.${def.notice.noticejs}-bottomRight{bottom:10px;right:10px;z-index:10000055!important}.${def.notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${def.notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${def.notice.noticejs} .${def.notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}` +
        `.${def.notice.noticejs} .${def.notice.item} .${def.notice.close}{float:right;margin-right:7px;color:#ffffff;text-shadow:0 1px 0 #ffffff;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticejs} .${def.notice.item} .${def.notice.close}:hover{color:#000;opacity:.5;cursor:pointer}.${def.notice.noticejs} .${def.notice.item} a{border-bottom:1px dashed #ffffff;color:#ffffff;}.${def.notice.noticejs} .${def.notice.item} a,.${def.notice.noticejs} .${def.notice.item} a:hover{text-decoration:none}.${def.notice.noticejs} .${def.notice.success}{background-color:#64ce83;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-heading{padding:10px;background-color:#3da95c;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-body{padding:10px!important;color:#ffffff;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.noticejs} .${def.notice.info}{background-color:#3ea2ff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-heading{padding:10px;background-color:#067cea;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-body{padding:10px!important;color:#ffffff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.noticejs} .${def.notice.warning}{background-color:#ff7f48;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#f97038;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-body{color:#ffffff;padding:10px}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-content{visibility:visible}` +
        `.${def.notice.noticejs} .${def.notice.error}{background-color:#e74c3c;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#e93724;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-body{padding:10px;color:#ffffff;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.configuration} input[disabled],.${def.notice.configuration} select[disabled]{color:#bbbbbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${def.notice.noticejs} .${def.notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.close}{float:right;margin-right:7px;color:#000000;text-shadow:0 1px 0 #aaaaaa;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.close}:hover{color:#555555;opacity:.5;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#e7e7e7;color:#333333;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-body{padding:10px;color:#333333;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-content{visibility:visible}` +
        `.${def.notice.noticejs} .${def.notice.noticejs}-heading-title{display:inline-block;vertical-align:middle;overflow:hidden;max-width:275px;text-overflow:ellipsis;white-space:nowrap}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#64ce83;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#3da95c;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#3ea2ff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#067cea;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#ff7f48;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#f44e06;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#fd5f4e;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#efefef;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#cccccc;}` +
        `@keyframes ${def.notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${def.notice.noticejs}-fadeOut{animation-name:${def.notice.noticejs}-fadeOut}@keyframes ${def.notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${def.notice.noticejs}-modal-out{to{opacity:0}}.${def.notice.noticejs}{position:fixed;z-index:10000051}.${def.notice.noticejs} ::-webkit-scrollbar{width:8px}.${def.notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${def.notice.noticejs} ::-webkit-scrollbar-track{border-radius:3px}.${def.notice.noticejs} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${def.notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#cccccc;}.${def.notice.noticejs}-modal{position:fixed;top:0;left:0;z-index:10000050;width:100%;height:100%;background-color:#000000;opacity:.3}.${def.notice.noticejs}-modal-open{opacity:0;animation:${def.notice.noticejs}-modal-in .3s ease-out}.${def.notice.noticejs}-modal-close{animation:${def.notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${def.notice.rName}{padding:2px!important}.${def.notice.noticejs} .${def.notice.rName} dl{margin:0!important;padding:1px!important}.${def.notice.noticejs} .${def.notice.rName} dl dt{margin:2px 0 6px!important;font-weight:900!important;font-size:16px!important}.${def.notice.noticejs} .${def.notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${def.notice.noticejs} .${def.notice.rName} .${def.notice.center}{width:100%;text-align:center!important}.${def.notice.noticejs} .${def.notice.rName} dl dd em{padding:0 5px;color:#ffffff;font-style:italic;font-size:24px!important;font-family:Candara,sans-serif!important}.${def.notice.noticejs} .${def.notice.rName} dl dd span{margin-right:8px;font-weight:700;font-size:15px!important}.${def.notice.noticejs} .${def.notice.rName} dl dd i{font-size:20px!important;font-family:Candara,sans-serif!important}.${def.notice.noticejs} .${def.notice.rName} dl dd .im{padding:0 3px;color:gold;font-weight:900;font-size:16px!important}` +
        `.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} ul{display:inline-block;margin:0 0 0 8px;padding:4px 4px 8px;width:90%;color:rgba(255, 255, 255, 0.8);counter-reset:xxx 0;vertical-align:top;text-align:left}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} li{position:relative;margin:0 0 0 2px;padding:0 0 2px 2px;list-style:none;font-style:italic!important;line-height:150%;-webkit-transition:.12s;transition:.12s}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} li::before{display:inline-block;margin-left:-1.5em;width:1.5em;content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-size:1em;font-family:Candara,sans-serif;-webkit-transition:.5s;transition:.5s}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} #${def.notice.stopUpdate}{float:right;margin:0 5px!important;font-size:12px!important;cursor:help}` +
        `#${def.notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;margin:2px 4px 0 0;width:14px;height:14px;border:2px solid #ffffff;border-radius:50%;background:#ffa077;vertical-align:top;cursor:help;-webkit-appearance:none}#${def.notice.stopUpdate}:hover input,#${def.notice.stopUpdate} input:hover{background:#ba2c1d;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}{display:none!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;padding:11px 9px;width:58px;height:10px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);word-wrap:normal!important;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;-webkit-border-radius:7px;border-radius:7px;background:#ffffff;box-shadow:0 0 1px rgba(0,0,0,.6);color:#ffffff;content:" "}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;-webkit-border-radius:100px;border-radius:100px;color:#ffffff;content:"OFF";font-weight:700;font-size:1em}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::after{top:2px;left:10px;content:"ON"}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}` +
        `.${def.notice.noticejs} .${def.notice.configuration} button.${def.notice.searchButton}{display:flex;margin:0 0 10px;padding:6px 0;width:162px;height:25px;border:2px solid #eeeeee;border-radius:6px;background:#ffffff;box-shadow:1px 1px 0 1px #aaaaaa;font-size:14px!important;cursor:pointer;align-content:center;justify-content:center;align-items:center}.${def.notice.noticejs} .${def.notice.configuration} button.${def.notice.searchButton}:hover{box-shadow:1px 1px 3px 0 #888888;color:red}.${def.notice.noticejs} .${def.notice.configuration} span.${def.notice.favicon}{margin:0 6px 0 0;width:24px;height:24px}.${def.notice.noticejs} .${def.notice.configuration} ul.${def.notice.searchList}{margin:5px;padding:2px;list-style:none}.${def.notice.noticejs} .${def.notice.configuration} ul.${def.notice.searchList} li{margin:0;list-style:none;font-style:normal}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.fieldset}{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;border:2px dashed #dfdfdf;border-radius:10px;background:transparent!important;text-align:left}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.legend}{display:block;margin:0;padding:0 8px;width:auto;color:#8b0000!important;font-weight:900!important;font-size:14px!important;-webkit-user-select:all;user-select:all}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList}{margin:0;padding:0;background:transparent!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} li{float:none;display:flex;margin:3px 0;padding:2px 8px 2px 12px;height:36px;border:none;background:transparent!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none;align-content:center;justify-content:space-between}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} li>div{font:normal 700 14px/150% Microsoft YaHei UI,Helvetica Neue,sans-serif!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} button{box-sizing:border-box;margin:0 0 0 8px;padding:4px 8px;height:36px;min-width:65px;border:1px solid #cccccc;border-radius:8px;background:#fafafa;box-shadow:1px 1px 1px 0 #cccccc;color:#5e5e5e;font-weight:700;font-size:14px!important}` +
        `.${def.notice.noticejs} .${def.notice.configuration} #${def.notice.random}_customColor{margin:0;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} button:hover{background:#ffffff;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}__content{display:block;margin:0;height:268px}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:4px 0 3px;padding:8px;width:266px;max-height:237px;overscroll-behavior:contain}.${def.notice.card} h2{margin:0;padding:0;border:0;vertical-align:baseline;font:inherit;font-size:100%}.${def.notice.card}{margin:0;padding:0;--background:#ffffff;--background-chackbox:#0082ff;--background-image:#ffffff,rgba(0,107,175,0.2);--text-color:#666666;--text-headline:#000000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.${def.notice.card}__input{position:absolute;display:block;margin:0;padding:0;outline:none;border:none;background:none;-webkit-appearance:none}.${def.notice.card}__input:checked ~ .${def.notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#ffffff;--chack-scale:1;--chack-opacity:1;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox--svg{--stroke-color:#ffffff;--stroke-dashoffset:0;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover:after{--opacity-bg:0;}.${def.notice.random}_iconText{color:#333333;}.${def.notice.random}_iconText:hover{color:crimson}` +
        `.${def.notice.card}__input:disabled ~ .${def.notice.card}__body{cursor:not-allowed;opacity:0.5;}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body:active{--scale:1;}.${def.notice.card}__body{position:relative;display:grid;overflow:hidden;width:var(--card-witght);height:var(--card-height);border-radius:var(--card-radius);background:var(--background);box-shadow:var(--shadow,1px 1px 3px 1px #ccc);cursor:pointer;-webkit-transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:transform var(--transition),box-shadow var(--transition);transition:transform var(--transition),box-shadow var(--transition),-webkit-transform var(--transition);-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0);grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto}.${def.notice.card}__body:active{--scale:0.96;}.${def.notice.card}__body-cover-image{position:absolute;top:8px;left:10px;z-index:100;width:32px;height:32px}.${def.notice.card}__body-cover-image span.${def.notice.favicons}{display:block;width:32px;height:32px}.${def.notice.card}__body-cover-chackbox{position:absolute;top:10px;right:10px;z-index:1;width:28px;height:28px;border:2px solid var(--chack-border,#fff);border-radius:50%;background:var(--chack-bg,var(--background-chackbox));opacity:var(--chack-opacity,0);transition:transform var(--transition),opacity calc(var(--transition)*1.2) linear,-webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale,0));transform:scale(var(--chack-scale,0))}.${def.notice.card}__body-cover-chackbox--svg{display:inline-block;visibility:visible!important;margin:8px 0 0 7px;width:13px;height:11px;vertical-align:top;-webkit-transition:stroke-dashoffset .4s ease var(--transition);transition:stroke-dashoffset .4s ease var(--transition);fill:none;stroke:var(--stroke-color,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset,16px)}` +
        `.${def.notice.card}__body-header{padding:4px 10px 6px 50px;height:var(--header-height);background:var(--background)}.${def.notice.card}__body-header-title{margin-bottom:0!important;color:var(--text-headline);font-weight:700!important;font-size:15px!important}.${def.notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}#${def.notice.random}_help{position:relative;right:16%;padding:4px 15px!important;border:1px solid transparent;background:#f07f6a;box-shadow:0 0 6px 0 #f5846f;color:#ffffff;cursor:help}#${def.notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${def.notice.random}_clear{margin:0 0 0 10px;color:#666666;font-weight:500;cursor:pointer}#${def.notice.random}_clear:hover{color:red}#${def.notice.random}_clear u{padding:0 2px;text-decoration:none}.${def.notice.linkerror},.${def.notice.linkerror}:hover,.${def.notice.linkerror} *,.${def.notice.linkerror} *:hover{color:gray!important;text-decoration-line:line-through!important;text-decoration-color:red!important;text-decoration-style:wavy!important;}`
    );

    /* INITIALIZE_GMNOTIFICATION_FUNCTION */

    const defaultOpt = {
      title: "",
      text: "",
      type: def.notice.success,
      position: "bottomRight",
      newestOnTop: false,
      timeout: 30,
      progressBar: true,
      closeWith: ["button"],
      animation: {
        open: `${def.notice.animated} ${def.notice.random}_fadeIn`,
        close: `${def.notice.animated} ${def.notice.random}_fadeOut`,
      },
      modal: false,
      width: 400,
      scroll: { maxHeight: 400, showOnHover: false },
      rtl: false,
      callbacks: { beforeShow: [], onShow: [], afterShow: [], onClose: [], afterClose: [], onClick: [], onHover: [], onTemplate: [] },
    };
    const options = defaultOpt;

    function getCallback(ref, eventName) {
      if (ref.callbacks.hasOwnProperty(eventName)) {
        ref.callbacks[eventName].forEach(cb => {
          if (typeof cb === "function") cb.apply(ref);
        });
      }
    }

    function addModal() {
      const modalElements = qA(`.${def.notice.noticejs}-modal`);
      if (modalElements.length === 0) {
        const element = cE("div");
        element.classList.add(`${def.notice.noticejs}-modal`);
        element.classList.add(`${def.notice.noticejs}-modal-open`);
        document.documentElement.appendChild(element);
        sleep(2e2).then(() => (element.className = `${def.notice.noticejs}-modal`));
      }
    }

    function closeItem(item, immed = false) {
      getCallback(options, "onClose");
      if (options.animation?.close) {
        item.className += ` ${options.animation.close}`;
      }
      sleep(immed ? 0 : 2e2).then(() => item.remove());
      if (options.modal && qA(`[${def.notice.noticejs}-modal='true']`).length >= 1) {
        qS(`.${def.notice.noticejs}-modal`).className += ` ${def.notice.noticejs}-modal-close`;
        sleep(5e2).then(() => qS(`.${def.notice.noticejs}-modal`).remove());
      }
      const closetNode = item.closest(`.${def.notice.noticejs}`);
      const closetNodeCName = closetNode?.className?.replace(def.notice.noticejs, "").trim() ?? `${def.notice.noticejs}-bottomRight`;
      const position = `.${closetNodeCName}`;
      sleep(5e2).then(() => {
        if (qA(position + ` .${def.notice.item}`).length === 0) qS(position)?.remove();
      });
    }

    function addListener(item) {
      const closeBtn = item.querySelector(`.${def.notice.close}`);
      const handleClick = () => closeItem(item);
      if (options.closeWith.includes("button")) closeBtn?.addEventListener("click", handleClick);
      if (options.closeWith?.includes("click")) {
        item.style.cursor = "pointer";
        item.addEventListener("click", e => {
          if (e.target.className !== def.notice.close) {
            getCallback(options, "onClick");
            handleClick();
          }
        });
      } else {
        item.addEventListener("click", e => e.target.className !== def.notice.close && getCallback(options, "onClick"));
      }
      item.addEventListener("mouseover", () => getCallback(options, "onHover"));
    }

    function appendNoticeJs(noticeJsHeader, noticeJsBody, noticeJsProgressBar) {
      const target_class = `.${def.notice.noticejs}-` + options.position;
      const noticeJsItem = cE("div");
      noticeJsItem.classList.add(def.notice.item);
      noticeJsItem.classList.add(options.type);
      if (options.rtl === true) noticeJsItem.classList.add(`${def.notice.noticejs}-rtl`);
      if (options.width !== "" && Number.isInteger(options.width)) noticeJsItem.style.width = options.width + "px";
      if (noticeJsHeader && noticeJsHeader.nodeType) noticeJsItem.appendChild(noticeJsHeader);
      if (noticeJsBody.nodeType) noticeJsItem.appendChild(noticeJsBody);
      if (noticeJsProgressBar && noticeJsProgressBar !== "" && noticeJsProgressBar.nodeType) noticeJsItem.appendChild(noticeJsProgressBar);
      if (["top", "bottom"].includes(options.position)) qS(target_class).textContent = "";
      if (options.animation !== null && options.animation.open !== null) noticeJsItem.className += " " + options.animation.open;
      if (options.modal === true) {
        noticeJsItem.setAttribute(`${def.notice.noticejs}-modal`, "true");
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
    }

    class Components {
      constructor(options) {
        this.options = options;
      }
      createContainer() {
        const element_class = `${def.notice.noticejs}-${this.options.position}`;
        const element = cE("gb-notice");
        element.classList.add(def.notice.noticejs);
        element.classList.add(element_class);
        element.id = element_class;
        element.style.display = "block";
        return element;
      }
      createHeader() {
        let element;
        const { options } = this;
        if (options.title) {
          element = cE("div");
          element.setAttribute("class", `${def.notice.noticejs}-heading`);
          element.innerHTML = tTP.createHTML(`<span class="${def.notice.noticejs}-heading-title" title="${options.title}">${options.title}</span>`);
        }
        if (options.closeWith.includes("button")) {
          const close = cE("div");
          close.setAttribute("class", def.notice.close);
          close.innerHTML = tTP.createHTML("&times;");
          if (element) {
            element.appendChild(close);
          } else {
            element = close;
          }
        }
        return element;
      }
      createBody() {
        const { options } = this;
        const element = cE("div");
        element.setAttribute("class", `${def.notice.noticejs}-body`);
        const content = cE("div");
        content.setAttribute("class", `${def.notice.noticejs}-content`);
        content.innerHTML = tTP.createHTML(options.text);
        element.appendChild(content);
        if (options.scroll !== null && options.scroll.maxHeight !== "") {
          element.style.overflowY = "auto";
          element.style.maxHeight = `min(calc(100vh - 100px), ${options.scroll.maxHeight}px)`;
          if (options.scroll.showOnHover === true) element.style.visibility = "hidden";
        }
        return element;
      }
      createProgressBar() {
        const { options } = this;
        const element = cE("div");
        element.setAttribute("class", `${def.notice.noticejs}-progressbar`);
        const bar = cE("div");
        bar.setAttribute("class", `${def.notice.noticejs}-bar`);
        element.appendChild(bar);
        if (options.progressBar === true && typeof options.timeout !== "boolean" && options.timeout !== false) {
          let width = 1e2;
          const progress = raf.setInterval(() => {
            if (width <= 0) {
              raf.clearInterval(progress);
              let item = element.closest(`div.${def.notice.item}`);
              if (options.animation !== null && options.animation.close !== null) {
                item.className = item.className.replace(new RegExp("(?:^|\\s)" + options.animation.open + "(?:\\s|$)"), " ");
                item.className += " " + options.animation.close;
                const close_time = parseInt(options.timeout) + 5e2;
                sleep(close_time).then(() => closeItem(item));
              } else {
                closeItem(item);
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
        this.options = Object.assign(defaultOpt, options);
        this.component = new Components(this.options);
        this.registerCallbacks();
      }
      show() {
        let container = this.component.createContainer();
        if (document.documentElement && !qS(`.${def.notice.noticejs}-${this.options.position}`)) {
          document.documentElement.appendChild(container);
        }
        let noticeJsHeader = this.component.createHeader(this.options.title, this.options.closeWith);
        let noticeJsBody = this.component.createBody(this.options.text);
        let noticeJsProgressBar = null;
        if (this.options.progressBar === true) noticeJsProgressBar = this.component.createProgressBar();
        const noticeJs = appendNoticeJs(noticeJsHeader, noticeJsBody, noticeJsProgressBar);
        return noticeJs;
      }
      registerCallbacks() {
        Object.keys(this.options.callbacks).forEach(eventName => {
          const cb = this.options.callbacks[eventName];
          if (typeof cb === "function") this.on(eventName, cb);
        });
      }
      on(eventName, cb = () => {}) {
        if (typeof cb === "function" && this.options.callbacks.hasOwnProperty(eventName)) {
          this.options.callbacks[eventName].push(cb);
        }
        return this;
      }
      static overrideDefaults(options) {
        this.options = Object.assign(defaultOpt, options);
        return this;
      }
    }

    function GMnotification({ title, text, type, scroll, width, closeWith, newestOnTop, progressBar, timeout, callbacks, position } = {}) {
      try {
        new NoticeJs({
          title: title || "",
          text: text,
          type: type || def.notice.success,
          width: width || 400,
          newestOnTop: newestOnTop || false,
          closeWith: closeWith || ["button"],
          progressBar: progressBar ?? true,
          timeout: timeout ?? 30,
          scroll: scroll || { maxHeight: 400, showOnHover: true },
          callbacks: { ...callbacks },
          position: position || "bottomRight",
        }).show();
      } catch (e) {
        ERROR("GMnotification:", e.message);
      }
    }

    /* GMSET/GET/DELETEVALUE_WITH_CACHE */

    const cache = {
      value: (data, eT = 6048e5) => {
        return { data: data, expired: Date.now() + eT };
      },
      set: (key, ...options) => GMsetValue(key, encrypt(JSON.stringify(cache.value(...options)))),
      get: async key => {
        const obj = await GMgetValue(key);
        if (!obj) return null;
        try {
          const value = JSON.parse(decrypt(obj));
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
          ERROR("Cache.get:", e.message);
          cache.remove(key);
          return null;
        }
      },
      remove: key => GMdeleteValue(key),
    };

    function checkBlinkCheatingUA() {
      if (typeof NavigatorUAData === "undefined") return false;
      if (CUR_PROTOCOL === "https:" && !navigator.userAgentData) return true;
      return Boolean(navigator.userAgentData) && !(navigator.userAgentData instanceof NavigatorUAData);
    }

    function insterAfter(newElement, targetElement) {
      if (!newElement || !targetElement) return;
      const parent = targetElement.parentNode ?? document.head;
      if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
      } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
      }
    }

    function addStyle({ target, styleId, styleContent, media, isOverwrite }) {
      if (!target || !styleId || !styleContent || !media) return;
      let styles = qA(`#${styleId}`, target);
      let styleSize = styles.length;
      if (styleSize && isOverwrite) {
        styles.forEach(style => {
          if (safeRemove(style)) styleSize--;
        });
      }
      if (styleSize > 0) return true;
      try {
        let styleElement = cE("style");
        styleElement.setAttribute(def.const.cssAttrName, isOverwrite);
        styleElement.id = styleId;
        styleElement.media = media;
        styleElement.type = "text/css";
        styleElement.textContent = styleContent ?? "";
        target.appendChild(styleElement);
        styleElement = null;
        return true;
      } catch (e) {
        ERROR("addStyle:", e.message);
        return false;
      }
    }

    ~(async function (getConfigureData, isChinese) {
      "use strict";

      let config_date = await getConfigureData();
      let { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor } = config_date;

      function getUrlParam(paraName) {
        try {
          switch (paraName) {
            case null:
            case def.variable.undef:
            case "":
              return "";
            case "/":
              return location.pathname.split("/")[1] || "";
            case "$":
              return location.hostname.split(".")[0] || "";
            default:
              return new URLSearchParams(location.search).get(paraName) || "";
          }
        } catch (e) {
          ERROR("getUrlParam:", e.message);
          return "";
        }
      }

      function isNeedUpdate(current, compare) {
        const compare_array = compare.split(".");
        const current_array = current.split(".");
        if (compare_array.length !== current_array.length) return true;
        for (let i = 0; i < compare_array.length; i++) {
          if (parseInt(compare_array[i]) < parseInt(current_array[i])) {
            return false;
          } else if (parseInt(compare_array[i]) > parseInt(current_array[i])) {
            return true;
          }
        }
        return false;
      }

      /* ANTIREDIRECT_FUNCTIONS */

      function clearHrefEvents(node, clearData = true) {
        if (!node) return;
        node.setAttribute("target", "_blank");
        ["ping", "onmouseover", "referrerpolicy", "h"].forEach(item => {
          node.hasAttribute(item) && node.removeAttribute(item);
        });
        if (clearData) {
          for (const ds in node.dataset) {
            if (node.dataset.hasOwnProperty(ds)) delete node.dataset[ds];
          }
        }
      }

      function addTargetEvent(str, siteName, clearData = true) {
        const requestNodes = qA(str);
        if (!requestNodes.length) return;
        COUNT(`[${siteName}-Attributes-Clean]`);
        requestNodes.forEach(node => {
          clearHrefEvents(node, clearData);
          node.setAttribute("gd-attributeclean-status", "success");
        });
      }

      function getRealUrl(url, node, name, { onreadystatechangeFunc, onerrorFunc, ontimeoutFunc }) {
        return new Promise((resolve, reject) => {
          fetchUrl(url, resolve, reject, onreadystatechangeFunc, onerrorFunc, ontimeoutFunc);
        })
          .then(res => {
            DEBUG(res);
            node.href = res;
            node.style.backgroundColor = null;
            clearHrefEvents(node);
            node.setAttribute("gd-antiredirect-status", "success");
          })
          .catch(e => {
            node.classList.add(def.notice.linkerror);
            node.setAttribute("gd-antiredirect-status", "failed");
            node.setAttribute("title", `${isChinese ? "此链接似乎已无法正常访问。" : "The link appears to be broken."}`);
            ERROR("antiRedirect_%s: %s %O", name, e.message, { Node: node, Text: node.textContent, URL: node.href });
          });
      }

      function fetchUrl(url, resolve, reject, readystate, error, timeout) {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.href.replace(/^http:/i, "https:") },
          method: "GET",
          timeout: 3e4,
          onreadystatechange: readystate(resolve, reject),
          onerror: error(reject, resolve),
          ontimeout: timeout(reject),
        });
      }

      function antiRedirectFunc(str, siteName) {
        const requestNodes = qA(str);
        if (!requestNodes.length) return;
        COUNT(`[${siteName}-Anti-Redirect]`);
        requestNodes.forEach(node => {
          node.setAttribute("gd-antiredirect-status", "pending");
          const url = node.href.replace(/^http:/i, "https:");
          if (!url) return;
          switch (siteName) {
            case "Baidu":
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    resolve(response.finalUrl || response.responseURL);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: (reject, resolve) => e => {
                  if (e.error?.includes("Request was redirected to a not whitelisted URL")) {
                    const realUrl = e.error?.toString().match(/Refused to connect to "([^"]*)"/)[1];
                    if (!realUrl || realUrl.includes("www.baidu.com/search/error")) reject(new Error("URLNotExistError"));
                    resolve(realUrl);
                  } else if (e.responseHeaders?.match(/Location:\s*([\S]+)/)) {
                    resolve(e.responseHeaders?.match(/Location:\s*([\S]+)/)[1]);
                  } else {
                    reject(new Error("URLBrokenError"));
                  }
                },
                ontimeoutFunc: reject => () => reject(new Error("Timeout Error")),
              });
              break;
            case "Bing":
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/(var\s+u\s*=\s*")([^"]+)("\s*;\s*\r\n)/i);
                    res = res ? res[2] : resUrl;
                    resolve(res);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: reject => () => reject(new Error("URLBroken Error")),
                ontimeoutFunc: reject => () => reject(new Error("Timeout Error")),
              });
              break;
            case "Sogou":
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/(URL\s*=\s*')([^']+)(')/);
                    res = res ? res[2] : resUrl;
                    resolve(res);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: reject => () => reject(new Error("URLBroken Error")),
                ontimeoutFunc: reject => () => reject(new Error("Timeout Error")),
              });
              break;
            case "So360":
              if (node.getAttribute("data-mdurl")) {
                node.href = node.dataset.mdurl;
                node.setAttribute("gd-antiredirect-status", "success");
              } else {
                getRealUrl(url, node, "So360", {
                  onreadystatechangeFunc: (resolve, reject) => response => {
                    if (response.readyState !== 4) return;
                    if (response.status === 200) {
                      const resText = response.responseText || response.response || "";
                      const resUrl = response.finalUrl || response.responseURL || url;
                      let res = resText.match(/(URL\s*=\s*')([^']+)(')/);
                      res = res ? res[2] : resUrl;
                      resolve(res);
                    } else {
                      rejectResponse(response, resolve, reject, url);
                    }
                  },
                  onerrorFunc: reject => () => reject(new Error("URLBroken Error")),
                  ontimeoutFunc: reject => () => reject(new Error("Timeout Error")),
                });
              }
              break;
            case "Toutiao":
              if (url) {
                const realUrl = url.match(/(\/search\/jump\?url=)([^&]+)(&)/);
                node.href = realUrl ? decodeURI(decodeURIComponent(realUrl[2])) : url;
                clearHrefEvents(node);
                node.setAttribute("gd-antiredirect-status", "success");
              }
              break;
          }
        });

        function rejectResponse(response, resolve, reject, url) {
          if (/^20[1-8]$/.test(response.status)) resolve(url);
          const resUrl = response.finalUrl || response.responseURL || url;
          if (resUrl === url || response.status === 0) {
            reject(new Error(`ResponseError: ${response.status}`));
          } else {
            resolve(resUrl);
          }
        }
      }

      /* ANTIADS_FUNCTIONS */

      function antiAds_RemoveNodes(str, siteName) {
        const requestNodes = qA(str);
        requestNodes.length && COUNT(`[${siteName}-Anti-Ads]`);
        requestNodes.forEach(node => node.remove());
        // Ads Deep Cleanup
        switch (siteName) {
          case "Google":
            if (qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])>div[id^='eob']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])").forEach(node => {
                if (qS("div[id^='eob']", node)) node.remove();
              });
            }
            break;
          case "Bing":
            if (CUR_HOST_NAME.startsWith("www.")) return;
            if (qA("li.b_algo:not([style*='display:none']) .b_caption>div.b_attribution:not([u])+p[class]").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("li.b_algo").forEach(node => {
                if (qS(".b_caption>div.b_attribution:not([u])+p[class]", node)) {
                  node.style.display = "none";
                  sleep(5e2)(node).then(r => r?.remove());
                }
              });
            }

            break;
          case "Yandex":
            qA("button.DistrSplashscreen-DeclineButton,button.MessageBox-Close,button.PromotionIncut-Close,span.popup2__close-icon").forEach(item => item.click());
            if (qS(".serp-adv__counter")) {
              const rightside_Ads = qS(".serp-adv__counter").nextElementSibling;
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qS(".serp-adv__counter").remove();
              rightside_Ads?.className !== "serp-adv__found" && rightside_Ads?.remove();
            }
            if (qA("li.serp-item.serp-item_card div.Organic-Subtitle>span.LabelDirect,li.serp-item.serp-item_card span.LabelDirect.DirectLabel").length > 0) {
              const match_Ads_Style_Yandex = str => {
                const ad_Selector = qS(str);
                const ad_Match_Filter = ad_Selector?.textContent?.match(/\.LabelDirect\.DirectLabel_[a-z]+\[class\]\[class\]\s*{\s*background-image:\s*url\(([^)]+)\);?\s*}/);
                return ad_Match_Filter ? ad_Match_Filter[1] : "no-ads-icon";
              };
              // const ad_Matched = match_Ads_Style_Yandex(`body>style[nonce][data-stylesheet="bundles-assets"]`);
              const ad_Matcded_II = match_Ads_Style_Yandex(`#search-result-aside>style[nonce][data-stylesheet="progressive"]`);
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("li.serp-item.serp-item_card").forEach(node => {
                const ads_Detect = qS("div.Organic-Subtitle>span.LabelDirect", node);
                const ads_Detect_II = qS("span.LabelDirect.DirectLabel", node);
                const styleState = ads_Detect_II && gS(ads_Detect_II, "background-image");
                if (
                  ads_Detect?.textContent?.includes("\u0420\u0435\u043a\u043b\u0430\u043c\u0430") ||
                  ads_Detect?.textContent?.toLowerCase().includes("ad") ||
                  ads_Detect_II?.textContent?.toLowerCase().includes("ad") ||
                  // styleState?.includes(ad_Matched) ||
                  styleState?.includes(ad_Matcded_II)
                ) {
                  node?.remove();
                }
              });
            }
            break;
          case "So360":
            if (qA("ul.section>li span[class='txt']>s,ul.result>li>div[class~='res-recommend-tag']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("ul.section>li,ul.result>li").forEach(node => {
                const ads = qS("span[class='txt']>s", node);
                if (ads?.textContent?.includes("\u5e7f\u544a") || qS("div[class~='res-recommend-tag']", node)) {
                  node?.remove();
                }
              });
            }
            break;
          case "You":
            if (qA("ul[data-testid='web-results'] div>div>span[class^='sc-']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("ul[data-testid='web-results']>li").forEach(node => {
                const ads = qS("div>div>span[class^='sc-']", node);
                if (ads?.textContent?.toLowerCase().includes("ad")) {
                  node.remove();
                }
              });
            }
            break;
        }
      }

      ~(async function setSearchEngineConfig(checkAutoUpdate, getRemoteIcon) {
        "use strict";
        const selectedSite = [];
        const listSite = {
          baidu: {
            SiteTypeID: 1,
            SiteName: isChinese ? "百度一下" : "Baidu ®",
            SiteNick: isChinese ? "百度 搜索" : "Baidu.com",
            SiteURI: "www.baidu.com",
            WebURL: "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=",
            ImgURL: "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=",
            IMGType: ["baiduimage", "baiduimagedetail"],
            SplitName: "tn",
            MainType: ".s_btn_wr,#sugOut",
            StyleCode: `a,a em{text-decoration:none!important}:not([class^="page-inner"])>a:not(.${def.notice.linkerror}):hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}#${def.const.rndID}{z-index:1999999995;position:relative;margin:0 0 0 4px;height:40px;display:inline-block;line-height:40px;vertical-align:top;padding:0}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background: #4662D9;border:1px solid #3476d2;}`,
            KeyStyle: "#wrapper_wrapper em",
            AntiRedirect: () => {
              deBounce({ fn: antiRedirectFunc, delay: 2e2, timer: "baidu", immed: true })(
                ".c-container a[href*='//www.baidu.com/link?url=']:not([gd-antiredirect-status])",
                "Baidu"
              );
              deBounce({ fn: addTargetEvent, delay: 1e2, timer: "baidu_c", immed: false })(
                "#container a:not(.c-gap-top-xsmall):not(.c-line-clamp1):not([href^='javascript:']):not([gd-attributeclean-status])",
                "Baidu"
              );
            },
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_baidu", immed: true })(
                `#s-hotsearch-wrapper,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad,div[class^='result-op'][tpl='right_tabs'][data-click],div[class^='result-op'][tpl='right_links'][data-click],#searchTag`,
                "Baidu"
              ),
          },
          google: {
            SiteTypeID: 2,
            SiteName: "Google",
            SiteNick: isChinese ? "Google 搜索" : "Google.com",
            SiteURI: "www.google.com",
            WebURL: "https://www.google.com/search?source=hp&safe=off&filter=0&newwindow=1&q=",
            ImgURL: "https://www.google.com/search?source=lnms&tbm=isch&sa=X&safe=off&filter=0&q=",
            IMGType: ["isch"],
            SplitName: "tbm",
            MainType: "form button[type='submit']",
            StyleCode: `#${def.const.rndID}{z-index:100;position:relative;margin:0 4px 0 -5px;display:flex;justify-content:center;align-items:center}#${def.const.rndID} #${def.const.leftButton}{padding:0 2px 0 8px}.${def.const.scrollspan}{min-height:26px}.${def.const.scrollspan2}{min-height:26px;margin-top:0!important}.${def.const.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${def.const.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${def.const.leftButton} input{margin:0;cursor:pointer;padding:1px 12px 1px 18px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#ffffff;vertical-align:top;}#${def.const.rightButton} input{margin:0;cursor:pointer;padding:1px 18px 1px 12px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;min-width:90px;height:38px;font-size:16px;font-weight:600;color:#ffffff;vertical-align:top;}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#2b7de9;}`,
            KeyStyle: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
            AntiRedirect: () =>
              deBounce({ fn: addTargetEvent, delay: 5e2, timer: "google_c", immed: true })(
                "#rcnt a:not([data-xbu='true']):not([data-ti]):not([aria-label^='Page']):not([href^='javascript:']):not([href='#']):not([id^='pn']):not([gd-attributeclean-status])",
                "Google"
              ),
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_google", immed: true })(
                "div[aria-label='\u5e7f\u544a'],div[aria-label='Ads' i],#bottomads,#tvcap",
                "Google"
              ),
          },
          bing: {
            SiteTypeID: 3,
            SiteName: "Bing ®",
            SiteNick: isChinese ? "Bing 搜索" : "Bing.com",
            SiteURI: "www.bing.com",
            WebURL: "https://www.bing.com/search?rdr=1&q=",
            ImgURL: "https://www.bing.com/images/search?first=1&tsc=ImageBasicHover&q=",
            IMGType: ["images"],
            SplitName: "/",
            MainType: `.b_searchboxForm>input[type="hidden"][name="form"]`,
            StyleCode: `#sw_as{z-index:1051}.scs_c.scs_ini{z-index:1049}#miniheader #miniheader_searchbox #sb_form_q{width:400px}#b_header .b_searchboxForm{z-index:1048}a,#b_results>li a,#b_results .b_no a{color:#001ba0;}#b_results>li a:visited{cololr:#4007a2;}#${def.const.rndID}{z-index:1048;position:relative;display:inline-flex;height:38px;min-width:180px;width:auto;margin:0;padding:0 6px 0 0;vertical-align:middle;justify-content:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{width:auto;margin:0;padding:0}#${def.const.rndID} input{box-sizing:border-box;cursor:pointer;min-width:90px;height:38px;background-color:#f7faff;border:1px solid #174ae4;color:#174ae4;font-weight:600;font-size:16px}#${def.const.leftButton} input{border-top-left-radius:24px;border-bottom-left-radius:24px;margin:0;padding:0 12px 0 18px;}#${def.const.rightButton} input{border-top-right-radius:24px;border-bottom-right-radius:24px;margin:0 0 0 2px;padding:0 18px 0 12px;}.${def.const.scrollspan}{max-height:28px;margin:-13px -3px 0 0!important}.${def.const.scrollbars}{max-height:28px;font-size:14px!important}.${def.const.scrollspan2}{max-height:30px;padding:4px 4px 0 8px!important;margin:0!important;vertical-align:top!important}.${def.const.scrollbars2}{border-radius:4px!important;max-height:30px;padding:0 12px!important;margin-right:0!important;vertical-align:top!important}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#ffffff;transition:border linear .1s,box-shadow linear .3s;box-shadow:0px 0px 4px #174ae4;color:#174ae4;background-color:#f0f3f6;}.${def.notice.random}_input{width:300px!important}`,
            KeyStyle: String(
              // eslint-disable-next-line no-undef
              Number(getUrlParam("ensearch")) || Number(gbCookies.getItem("ENSEARCH")?.match(/\d/)?.[0]) || 0
                ? ".b_caption p strong, .b_caption .b_factrow strong, .b_secondaryText strong,th, h2 strong, h3 strong"
                : "#sp_requery strong, #sp_recourse strong, #tile_link_cn strong, .b_ad .ad_esltitle~div strong, h2 strong, #b_results .b_algo p strong, .b_caption p strong, .b_snippetBigText strong, .recommendationsTableTitle+.b_slideexp strong, .recommendationsTableTitle+table strong, .recommendationsTableTitle+ul strong, .pageRecoContainer .b_module_expansion_control strong, .pageRecoContainer .b_title>strong, .b_rs strong, .b_rrsr strong, .richrswrapper strong, #dict_ans strong, .b_listnav>.b_ans_stamp>strong, #b_content #ans_nws .na_cnt strong, .b_vidAns strong, .adltwrnmsg strong"
            ),
            AntiRedirect: () => {
              deBounce({ fn: antiRedirectFunc, delay: 5e2, timer: "bing", immed: true })("#b_content a[href*='.bing.com/ck/a?']:not([gd-antiredirect-status])", "Bing");
              deBounce({ fn: addTargetEvent, delay: 1e2, timer: "bing_c", immed: false })(
                `#b_results a:not([href^="javascript:"]):not([role="presentation"]):not(.sb_bp):not([gd-attributeclean-status]),#b_context a:not([href^="javascript:"]):not([data-partnertag]):not([id="ht_toggle"]):not([gd-attributeclean-status]),#b_context li[data-priority]>a[h]:not([href^="javascript:"])`,
                "Bing"
              );
              GMunsafeWindow.AwayTimeThreshold = 864e3;
            },
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_bing", immed: true })(
                `li.b_ans>#relatedSearchesLGWContainer,li.b_ans>.b_rs,li.b_ad,#b_pole,#b_content .b_underSearchbox,#b_header>div[id^='bnp.'][data-vertical],#b_context li.b_ans .b_spa_adblock,.ad_sc,.b_adBottom,.b_adLastChild,.b_adPATitleBlock,.b_spa_adblock,.mapsTextAds,.pa_sb,.productAd,[id$="adsMvCarousel"],a[href*="/aclick?ld="]`,
                "Bing"
              ),
          },
          duckduckgo: {
            SiteTypeID: 4,
            SiteName: "Duckduckgo",
            SiteNick: isChinese ? "鸭鸭 搜索" : "Duckduckgo.com",
            SiteURI: "duckduckgo.com",
            WebURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=1&kn=1&kp=-2&t=h_&ia=web&q=",
            ImgURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=s&kn=1&kp=-2&t=h_&iax=images&ia=images&q=",
            IMGType: ["images"],
            SplitName: "ia",
            MainType: "#search_form",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:absolute;top:0;right:-188px;height:44px;display:block;}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{margin:0 0 0 -2px;display:inline-block;height:44px}#${def.const.leftButton} input{margin:0;cursor:pointer;padding:1px 10px 1px 15px!important;border:1px solid rgba(0, 0, 0, 0.15);box-shadow:0 2px 3px rgb(0 0 0 / 6%);background:#ffffff;border-top-left-radius:8px;border-bottom-left-radius:8px;min-width:90px;height:44px;font-size:16px;font-weight:400;color:#888888;vertical-align:top;}#${def.const.rightButton} input{margin:0;cursor:pointer;padding:1px 15px 1px 10px!important;border:1px solid rgba(0, 0, 0, 0.15);box-shadow:0 2px 3px rgb(0 0 0 / 6%);background:#ffffff;border-top-right-radius:8px;border-bottom-right-radius:8px;min-width:90px;height:44px;font-size:16px;font-weight:400;color:#888888;vertical-align:top;}#${def.const.rndID}:hover #${def.const.leftButton} input,#${def.const.rndID}:hover #${def.const.rightButton} input{background:#3969ef;color:#ffffff;}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#2950bf!important;border:1px solid rgba(0, 0, 0, 0.15);color:#ffffff;}`,
            KeyStyle: "strong, b",
            AntiRedirect: () => {},
            AntiAds: () => {},
          },
          sogou: {
            SiteTypeID: 5,
            SiteName: isChinese ? "搜狗搜索" : "Sougou",
            SiteNick: isChinese ? "搜狗 搜索" : "Sougou.com",
            SiteURI: "www.sogou.com",
            WebURL: "https://www.sogou.com/web?query=",
            ImgURL: "https://pic.sogou.com/pics?query=",
            IMGType: ["pics", "d"],
            SplitName: "/",
            MainType: "input[type='submit'].sbtn1,input[type='button'][uigs='search_account'],input[type='submit'].search-btn",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:34px;margin:-1px 0 0 0;padding:0;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline;height:34px}#${def.const.rightButton}{display:inline;height:34px}#${def.const.leftButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000000;min-width:90px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${def.const.rightButton} input{padding:0 18px!important;background:#fafafa;border-radius:3px;cursor:pointer;height:34px;color:#000;min-width:90px;border:1px solid #ababab;font-size:14px!important;font-weight:400;vertical-align:top;margin:0}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background: #f2f2f2;border:1px solid #7a7a7a;}.${def.notice.random}_weixin{background:#fff!important;border:1px solid #00a06a!important;color:#00a06a!important;border-radius:2px!important;font-size:15px!important}.${def.notice.random}_weixin:hover{background:#f7fffd!important}`,
            KeyStyle: "#wrapper em",
            AntiRedirect: () => {
              deBounce({ fn: antiRedirectFunc, delay: 2e2, timer: "sogou", immed: true })("#wrapper a[href^='/link?url=']:not([gd-antiredirect-status])", "Sogou");
              deBounce({ fn: addTargetEvent, delay: 1e2, timer: "sogou_c", immed: false })(
                "#wrapper :not(.filter_box)>a:not([id*='_page_']):not([id^='left_timespan_']):not([gd-attributeclean-status]):not([href^='javascript:'])",
                "Sogou"
              );
            },
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_sogou", immed: true })(
                `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~='ext_query'][id*='sq_ext_'],div.top-better-hintBox`,
                "Sogou"
              ),
          },
          fsou: {
            SiteTypeID: 6,
            SiteName: isChinese ? "F搜 ®" : "Fsou",
            SiteNick: isChinese ? "FSou 搜索" : "Fsoufsou.com",
            SiteURI: "fsoufsou.com",
            WebURL: "https://fsoufsou.com/search?tbn=all&q=",
            ImgURL: "https://fsoufsou.com/search?tbn=images&q=",
            IMGType: ["images"],
            SplitName: "tbn",
            MainType: ".input-group-container .search-icon",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:relative;height:36px;margin:0 -17px 0 15px;z-index:100;display:inline-flex;justify-content:center;align-items:center}#${def.const.rightButton}{padding:0 0 0 2px}#${def.const.leftButton} input{cursor:pointer;padding:1px 12px 1px 18px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:22px;border-bottom-left-radius:22px;min-width:90px;height:36px;font-size:15px;font-weight:600;color:#ffffff;vertical-align:top;}#${def.const.rightButton} input{cursor:pointer;padding:1px 18px 1px 12px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:22px;border-bottom-right-radius:22px;min-width:90px;height:36px;font-size:15px;font-weight:600;color:#ffffff;vertical-align:top;}`,
            KeyStyle: ".highlight-style",
            AntiRedirect: () => {},
            AntiAds: () => {},
          },
          yandex: {
            SiteTypeID: 7,
            SiteName: "Yandex",
            SiteNick: isChinese ? "Yandex 搜索" : "Yandex.com",
            SiteURI: "yandex.com",
            WebURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/search/?text=`,
            ImgURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/images/search?from=tabbar&family=no&text=`,
            IMGType: ["images"],
            SplitName: "/",
            MainType: "form>div.search2__input,form>div.HeaderDesktopForm-InputWrapper",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:absolute;right:0;top:0;width:auto;height:40px;margin:0;padding:0;cursor:pointer;opacity:0;-webkit-appearance:none;transition:opacity 0.5s ease-in}#${def.const.leftButton}{display:inline-block;height:40px}#${def.const.rightButton}{margin:0 0 0 -2px;display:inline-block;height:40px}#${def.const.leftButton} input{cursor:pointer;padding:1px 12px 0 18px!important;border:1px solid transparent;background:#ffcc00;box-shadow:none;border-top-left-radius:10px;border-bottom-left-radius:10px;min-width:90px;height:40px;font-size:16px;font-weight:400;color:#000000;vertical-align:top;}#${def.const.rightButton} input{cursor:pointer;padding:1px 18px 0 12px!important;border:1px solid transparent;background:#ffcc00;box-shadow:none;border-top-right-radius:10px;border-bottom-right-radius:10px;min-width:90px;height:40px;font-size:16px;font-weight:400;color:#000000;vertical-align:top;}`,
            KeyStyle: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
            AntiRedirect: () =>
              deBounce({ fn: addTargetEvent, delay: 1e2, timer: "yandex_c", immed: false })(
                ".main__content a:not([href^='javascript:']):not([gd-attributeclean-status]):not(.Pager-Item)",
                "Yandex"
              ),
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 50, timer: "ad_yandex", immed: true })(
                `div[tabindex][class*='location_right-bottom'],a.HeaderDesktopActions-MarketCart,span.distr-nav,div.market-cart`,
                "Yandex"
              ),
          },
          so360: {
            SiteTypeID: 8,
            SiteName: isChinese ? "360搜索" : "360So",
            SiteNick: isChinese ? "360 搜索" : "www.so.com",
            SiteURI: "www.so.com",
            WebURL: "https://www.so.com/s?ie=utf-8&q=",
            ImgURL: "https://image.so.com/i?q=",
            IMGType: ["i", "view"],
            SplitName: "/",
            MainType: "input[type='submit'][value='搜索'],button[type='submit'][class~='so-search__button']",
            StyleCode: `#hd-rtools{z-index:1!important}#${def.const.rndID}{z-index:199999995;position:relative;left:0;top:0;width:auto;height:40px;margin:0 0 0 5px;padding:0;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{padding:0 1px 0 0;height:40px;display:inline-block;vertical-align:top}#${def.const.rightButton}{height:40px;display:inline-block;vertical-align:top}#${def.const.leftButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-left-radius:8px;border-bottom-left-radius:8px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0 -2px 0 0}#${def.const.rightButton} input{padding:0 18px!important;background:#0fb264;border:1px solid #0fb264;border-top-right-radius:8px;border-bottom-right-radius:8px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;font-size:16px!important;font-weight:400;vertical-align:top;margin:0}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background: #109e5a;border:1px solid #109e5a;}`,
            KeyStyle: "em,#mohe-newdict_dict .mh-exsentence b",
            AntiRedirect: () => {
              deBounce({ fn: antiRedirectFunc, delay: 3e2, timer: "so360", immed: true })(".res-list a[href*='//www.so.com/link?m=']:not([gd-antiredirect-status])", "So360");
              deBounce({ fn: addTargetEvent, delay: 5e2, timer: "so360_c", immed: false })(
                "#warper :not([id='page']) a:not([href^='javascript:']):not([gd-attributeclean-status])",
                "So360"
              );
            },
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_so360", immed: true })(
                `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,[class='inline-recommend'][data-url],div#so_top,div#so-activity-entry,div.mh-relate-text,.section li[data-id^="related_query_init_"]`,
                "So360"
              ),
          },
          toutiao: {
            SiteTypeID: 9,
            SiteName: isChinese ? "搜头条" : "Toutiao",
            SiteNick: isChinese ? "头条 搜索" : "so.toutiao.com",
            SiteURI: "so.toutiao.com",
            WebURL: "https://so.toutiao.com/search?dvpf=pc&keyword=",
            ImgURL: "https://so.toutiao.com/search?dvpf=pc&pd=atlas&from=gallery&keyword=",
            IMGType: ["atlas"],
            SplitName: "pd",
            MainType: "div[class^='search'][data-log-click]",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:absolute;right:-160px;top:0;width:auto;height:44px;margin:-1px;padding:0;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{margin:0 0 0 -2px;display:inline-block;height:44px}#${def.const.leftButton} input{margin:0;cursor:pointer;padding:1px 10px 1px 15px!important;background:#f04142ff;border:1px solid transparent;border-top-left-radius:8px;border-bottom-left-radius:8px;min-width:90px;height:44px;font-size:18px;font-weight:500;color:#ffffff;vertical-align:top;}#${def.const.rightButton} input{margin:0;cursor:pointer;padding:1px 15px 1px 10px!important;background:#f04142ff;border:1px solid transparent;border-top-right-radius:8px;border-bottom-right-radius:8px;min-width:90px;height:44px;font-size:18px;font-weight:500;color:#ffffff;vertical-align:top;}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#f04142b3;color:#ffffff;}`,
            KeyStyle: "em",
            AntiRedirect: () =>
              deBounce({ fn: antiRedirectFunc, delay: 2e2, timer: "toutiao", immed: true })(
                `.main a[href*='/search/jump?url=']:not([gd-antiredirect-status]),.main a.cs-view-block[href*='/search/jump?url=']:not([gd-antiredirect-status])`,
                "Toutiao"
              ),
            AntiAds: () => {},
          },
          kaifa: {
            SiteTypeID: 10,
            SiteName: isChinese ? "开发者搜索" : "PROG.Baidu",
            SiteNick: isChinese ? "百度开发者 搜索" : "kaifa.baidu.com",
            SiteURI: "kaifa.baidu.com",
            WebURL: "https://kaifa.baidu.com/searchPage?module=SEARCH&wd=",
            ImgURL: "https://kaifa.baidu.com/searchPage?module=SUG&wd=",
            IMGType: [null],
            SplitName: "",
            MainType: "div#search-box-container .ant-input-group-addon",
            StyleCode: `.ant-input-group-addon{background:transparent!important}#${def.const.rndID}{z-index:1999999995;position:relative;margin-left:4px;height:40px;display:inline-block;vertical-align:bottom}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#ffffff;min-width:90px;border:1px solid #3476d2;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background: #4662D9;border:1px solid #3476d2;}`,
            KeyStyle: "mark",
            AntiRedirect: () => {},
            AntiAds: () => deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "ad_kaifa", immed: true })("#reward-entry", "Kaifa"),
          },
          ecosia: {
            SiteTypeID: 11,
            SiteName: "Ecosia",
            SiteNick: isChinese ? "Ecosia 搜索" : "Ecosia.org",
            SiteURI: "www.ecosia.org",
            WebURL: "https://www.ecosia.org/search?method=index&q=",
            ImgURL: "https://www.ecosia.org/images?q=",
            IMGType: ["images"],
            SplitName: "/",
            MainType: "form[role='search'][class~='search-form'][data-test-id='main-header-search-form']",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:relative;margin-left:-12px;height:40px;display:inline-block}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;background:var(--color-background-primary);border-top-left-radius:20px;border-bottom-left-radius:20px;cursor:pointer;height:40px;color:#008009;min-width:90px;border:1px solid #bebeb9;box-shadow:0 1px 2px rgba(26,26,26,0.18),0 0 8px rgba(26,26,26,0.06);font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;background:var(--color-background-primary);border-top-right-radius:20px;border-bottom-right-radius:20px;cursor:pointer;height:40px;color:#008009;min-width:90px;border:1px solid #bebeb9;box-shadow:0 1px 2px rgba(26,26,26,0.18),0 0 8px rgba(26,26,26,0.06);font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{color:#ffffff;background: #006600;border:1px solid #006600;}`,
            KeyStyle: "",
            AntiRedirect: () => {
              deBounce({ fn: addTargetEvent, delay: 5e2, timer: "ecosia_c", immed: false })(
                "#main section article div a:not([href^='javascript:']):not([gd-attributeclean-status]):not(.video-result__thumbnail)",
                "Ecosia",
                false
              );
            },
            AntiAds: () =>
              deBounce({ fn: antiAds_RemoveNodes, delay: 6e2, timer: "ad_ecosia", immed: false })("div.main-header__install-cta,div.main-footer__card-container", "Ecosia"),
          },
          yahoo: {
            SiteTypeID: 12,
            SiteName: "Yahoo",
            SiteNick: isChinese ? "Yahoo 搜索" : "search.Yahoo",
            SiteURI: "search.yahoo.com",
            WebURL: "https://search.yahoo.com/search?p=",
            ImgURL: "https://images.search.yahoo.com/search/images?p=",
            IMGType: ["images"],
            SplitName: "$",
            MainType: "#hd div.sbx form#sf,header.hd form#sf #sh section#sbx",
            StyleCode: `#${def.const.rndID}{z-index:1999999995;position:relative;margin-left:4px;width:max-content;height:44px;position:absolute;display:inline-block}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:44px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:2px 0;padding:1px 12px 1px 18px!important;background:#4285f5;border-top-left-radius:100px;border-bottom-left-radius:100px;cursor:pointer;height:44px;color:#ffffff;min-width:90px;border:2px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.rightButton} input{margin:2px 0;padding:1px 18px 1px 12px!important;background:#4285f5;border-top-right-radius:100px;border-bottom-right-radius:100px;cursor:pointer;height:44px;color:#ffffff;min-width:90px;border:2px solid transparent;font-size:16px!important;vertical-align:top;font-weight:600}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{color:#ffffff;background: #1967d2;border:2px solid transparent;}`,
            KeyStyle: "strong",
            AntiRedirect: () => {},
            AntiAds: () => deBounce({ fn: antiAds_RemoveNodes, delay: 1e2, timer: "ad_yahoo", immed: true })("#main ol.searchCenterBottomAds,#main ol.searchCenterTopAds", "Yahoo"),
          },
          you: {
            SiteTypeID: 13,
            SiteName: "You",
            SiteNick: isChinese ? "You 搜索" : "You.com",
            SiteURI: "you.com",
            WebURL: "https://you.com/search?fromSearchBar=true&q=",
            ImgURL: "https://you.com/search?fromSearchBar=true&tbm=isch&q=",
            IMGType: ["isch"],
            SplitName: "tbm",
            MainType: "#section>main div[data-testid='STATIC_BOTTOM_BAR']",
            StyleCode: `#${def.const.rndID}{z-index:999;position:relative;margin-left:6px;height:42px;display:inline-block}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;height:42px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:42px}#${def.const.leftButton} input{margin:2px 0 0 0;padding:1px 10px 1px 20px!important;background-color:#ffffff;border-top-left-radius:100px;border-bottom-left-radius:100px;cursor:pointer;height:40px;color:#4a72f5;min-width:110px;border:1px solid #4a72f5;font-size:17px!important;vertical-align:top;font-weight:600}#${def.const.rightButton} input{margin:2px 0 0 0;padding:1px 20px 1px 10px!important;background-color:#ffffff;border-top-right-radius:100px;border-bottom-right-radius:100px;cursor:pointer;height:40px;color:#4a72f5;min-width:110px;border:1px solid #4a72f5;font-size:17px!important;vertical-align:top;font-weight:600}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#4a72f5;color:#ffffff;}`,
            KeyStyle: `div[data-testid="app-mainline"] p strong,div[data-testid="app-mainline"] p b`,
            AntiRedirect: () => localStorage.setItem("openLinksInNewTabs", true),
            AntiAds: () => deBounce({ fn: antiAds_RemoveNodes, delay: 50, timer: "you", immed: true })(`div[data-testid="extension-button"]`, "You"),
          },
          startpage: {
            SiteTypeID: 14,
            SiteName: "Startpage",
            SiteNick: isChinese ? "Startpage 搜索" : "Startpage.com",
            SiteURI: "www.startpage.com",
            WebURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=web&query=`,
            ImgURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=images&query=`,
            IMGType: ["images"],
            SplitName: "cat",
            MainType: "#search-btn",
            StyleCode: `#${def.const.rndID}{z-index:999;position:relative;height:20px;display:inline-block;margin:-11px 4px 0 0.5rem}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;height:30px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:0px;height:30px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;background:#f1f3ff;border-top-left-radius:2rem;border-bottom-left-radius:2rem;cursor:pointer;height:30px;color:#2e39b3;min-width:85px;border:0px solid transparent;font-size:14px!important;vertical-align:top;font-weight:600;box-shadow:#a4a5bb 0px 0px 2px;}#${def.const.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;background:#f1f3ff;border-top-right-radius:2rem;border-bottom-right-radius:2rem;cursor:pointer;height:30px;color:#2e39b3;min-width:85px;border:0px solid transparent;font-size:14px!important;vertical-align:top;font-weight:600;box-shadow:#a4a5bb 0px 0px 2px;}#${def.const.leftButton} input:hover{background:#6573ff;color:#ffffff;}#${def.const.rightButton} input:hover{background:#6573ff;color:#ffffff;}`,
            KeyStyle: `.w-gl__result b`,
            AntiRedirect: () => {
              deBounce({ fn: addTargetEvent, delay: 1e2, timer: "startpage_c", immed: false })(
                ".layout-web__body a:not([href^='javascript:']):not([gd-attributeclean-status])",
                "Startpage"
              );
              // eslint-disable-next-line no-undef
              deBounce({ fn: gbCookies.setItem, timer: "startpage_cookie", once: true })(
                "preferences",
                "date_timeEEEworldN1Ndisable_family_filterEEE1N1Ndisable_open_in_new_windowEEE0N1Nenable_post_methodEEE0N1Nenable_proxy_safety_suggestEEE1N1Nenable_stay_controlEEE1N1Ninstant_answersEEE1N1Nlang_homepageEEEs%2Fdevice%2FenN1NlanguageEEEjiantizhongwenN1Nlanguage_uiEEEenglishN1Nnum_of_resultsEEE10N1Nsearch_results_regionEEEallN1NsuggestionsEEE1N1Nwt_unitEEEcelsius",
                Infinity
              );
            },
            AntiAds: () => deBounce({ fn: antiAds_RemoveNodes, delay: 20, timer: "startpage", immed: true })(`section.a-gl-tp,div.widget-install-legacy`, "Startpage"),
          },
          brave: {
            SiteTypeID: 15,
            SiteName: "Brave",
            SiteNick: isChinese ? "Brave 搜索" : "search.brave.com",
            SiteURI: "search.brave.com",
            WebURL: "https://search.brave.com/search?source=web&q=",
            ImgURL: "https://search.brave.com/images?source=web&q=",
            IMGType: ["images"],
            SplitName: "/",
            MainType: "#submit-button",
            StyleCode: `#${def.const.rndID}{order:6;z-index:999;position:relative;height:100%;display:inline;margin:0;padding:5px 6px}#${def.const.rndID} #${def.const.leftButton}{display:inline-block;height:38px}#${def.const.rndID} #${def.const.rightButton}{display:inline-block;margin-left:0px;height:38px}#${def.const.leftButton} input{margin:0;padding:4px 10px!important;background:#f9fafd;border-top-left-radius:6px;border-bottom-left-radius:6px;cursor:pointer;height:35px;color:#495057;min-width:85px;border:0px solid transparent;font-size:14px!important;vertical-align:top;font-weight:600;line-height:14px;box-shadow:#a4a5bb 0px 0px 2px;}#${def.const.rightButton} input{margin:0;padding:4px 10px!important;background:#f9fafd;border-top-right-radius:6px;border-bottom-right-radius:6px;cursor:pointer;height:35px;color:#495057;min-width:85px;border:0px solid transparent;font-size:14px!important;vertical-align:top;font-weight:600;line-height:14px;box-shadow:#a4a5bb 0px 0px 2px;}#${def.const.leftButton} input:hover{background:#a0a5eb29;color:#5755d9;}#${def.const.rightButton} input:hover{background:#a0a5eb29;color:#5755d9;}`,
            KeyStyle: `.snippet-content strong`,
            AntiRedirect: () =>
              deBounce({ fn: addTargetEvent, delay: 2e2, timer: "brave_c", immed: false })(
                "#search-main a:not([href^='javascript:']):not(.btn):not([gd-attributeclean-status])",
                "Brave"
              ),
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
          KAIFA: listSite.kaifa.SiteTypeID,
          ECOSIA: listSite.ecosia.SiteTypeID,
          YAHOO: listSite.yahoo.SiteTypeID,
          YOU: listSite.you.SiteTypeID,
          STARTPAGE: listSite.startpage.SiteTypeID,
          BRAVE: listSite.brave.SiteTypeID,
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
        } else if (location.host.endsWith("search.yahoo.com")) {
          currentSite = selectedEngine.includes(newSiteType.YAHOO) ? listSite.yahoo : listSite.other;
          listCurrentSite = listSite.yahoo;
        } else if (location.host.endsWith("you.com")) {
          currentSite = selectedEngine.includes(newSiteType.YOU) ? listSite.you : listSite.other;
          listCurrentSite = listSite.you;
        } else if (location.host.endsWith("startpage.com")) {
          currentSite = selectedEngine.includes(newSiteType.STARTPAGE) ? listSite.startpage : listSite.other;
          listCurrentSite = listSite.startpage;
        } else if (location.host.endsWith("search.brave.com")) {
          currentSite = selectedEngine.includes(newSiteType.BRAVE) ? listSite.brave : listSite.other;
          listCurrentSite = listSite.brave;
        } else {
          currentSite = listSite.other;
          listCurrentSite = listSite.other;
        }

        for (let site in listSite) {
          if (listSite.hasOwnProperty(site)) {
            if (listSite[site].SiteTypeID !== newSiteType.OTHERS) {
              def.const.allSiteURIs += listSite[site].SiteURI.concat(";");
            }
            if (listSite[site].SiteTypeID === listCurrentSite.SiteTypeID) {
              def.const.curSiteName = site;
            }
            if (listSite[site].SiteTypeID !== currentSite.SiteTypeID && selectedEngine.includes(Number(listSite[site].SiteTypeID))) {
              selectedSite.length < 2 && selectedSite.push(listSite[site]);
            }
          }
        }

        getGlobalparameter();
        window.addEventListener("pushState", getGlobalparameter);
        window.addEventListener("replaceState", getGlobalparameter);
        window.addEventListener("popstate", getGlobalparameter);

        const API_ICO_YANDEX = decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI=");
        const API_ICO_BACKUP = decrypt("aHR0cHMlM0ElMkYlMkZzMS5heDF4LmNvbSUyRjIwMjMlMkYwNiUyRjA5JTJGcENFYTVOUi5wbmc=");
        const API_ICO_YANDEX_URL = `${API_ICO_YANDEX}/${def.const.allSiteURIs}?size=32&stub=1`;
        const iconBASE64 = await requestRemoteIcons(API_ICO_YANDEX_URL);
        const iconBackground = iconBASE64 ? `url('${iconBASE64}')` : `url('${API_ICO_YANDEX_URL}'),url('${API_ICO_BACKUP}')`;

        def.const.googleSplitLine = currentSite.SiteTypeID === newSiteType.GOOGLE ? `<span jsname="s1VaRe" class="ACRAdd M2vV3"></span>` : ``;
        def.const.fsouSplitLine = currentSite.SiteTypeID === newSiteType.FSOU ? `<div class="divider"></div>` : ``;
        def.const.buttonCode = def.const.googleSplitLine.concat(
          def.const.fsouSplitLine,
          `<span id="${def.const.leftButton}" sn="${selectedSite[0].SiteTypeID}">
              <input type="button" title="${selectedSite[0].SiteNick}" value="${selectedSite[0].SiteName}"/>
            </span>
            <span id="${def.const.rightButton}" sn="${selectedSite[1].SiteTypeID}">
              <input type="button" title="${selectedSite[1].SiteNick}" value="${selectedSite[1].SiteName}"/>
            </span>`
        );
        def.const.highlightCss = listCurrentSite.KeyStyle
          ? `${listCurrentSite.KeyStyle}{background-color:${customColor.backgroundColor}!important;color:${customColor.foregroundColor}!important;font-weight:600!important}`
          : ``;
        def.const.iconCss = `.${def.notice.noticejs} .${def.notice.configuration} span.${def.notice.favicon},.${def.notice.card}__body-cover-image span.${def.notice.favicons}{background-color:#ffffff;background-image:${iconBackground};background-repeat:no-repeat;}`;

        function getQueryString() {
          let val = "";
          qA(
            `input[id="kw"][name^="w"],input[name="q"]:not([type="hidden"]),input[name="text"][type="text"],input[name="query"][class$="query"],input[name="keyword"],input[id="search-input"],input[type="search"][class^="input"],#search-box-container input[class~="ant-input"],input#yschsp[name="p"],textarea[name="q"]`
          ).forEach((item, index, arr) => {
            val = item.value;
            val && DEBUG("QueryString[INPUT]: %O", { current_keyword: val, input_index: index, previous_keyword: arr[index].value });
          });
          if (val === null || val === "" || typeof val === "undefined") {
            const keys = ["wd", "word", "query", "q", "text", "keyword", "p"];
            for (let i = 0; i < keys.length; i++) {
              const queryString = getUrlParam(keys[i]);
              if (queryString) {
                val = queryString;
                DEBUG("QueryString[URL]: %s", val);
                break;
              }
            }
            val = val?.replace(/\+/g, " ") ?? "";
          }
          return encodeURIComponent(val);
        }

        function getGlobalparameter() {
          def.const.vim = getUrlParam(currentSite.SplitName).trim();
          def.const.isSecurityPolicy = Boolean(
            (listCurrentSite.SiteTypeID === newSiteType.GOOGLE && (/^(lcl|flm|fin)$/.test(def.const.vim) || getUrlParam("csui") === "1")) ||
              (listCurrentSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(def.const.vim)) ||
              (listCurrentSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(def.const.vim)) ||
              (listCurrentSite.SiteTypeID === newSiteType.SOGOU && (/^(kexue)$/.test(def.const.vim) || /^(fanyi|hanyu|gouwu|as|map)/.test(location.hostname))) ||
              (listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO && /^(maps)$/.test(getUrlParam("iaxm"))) ||
              (listCurrentSite.SiteTypeID === newSiteType.YANDEX && location.pathname.includes("/direct")) ||
              (listCurrentSite.SiteTypeID === newSiteType.YOU && /^(youchat)$/.test(def.const.vim))
          );
          def.const.indexPage = () => (currentSite.SiteTypeID === newSiteType.DUCKDUCKGO ? !location.search.includes("q=") : location.pathname === "/");
        }

        async function requestRemoteIcons(URIs) {
          let iconURL;
          const iconData = await cache.get("_remoteicons_");
          try {
            if (!iconData || IS_DEBUG) {
              iconURL = await getRemoteIcon(URIs);
              iconURL && cache.set("_remoteicons_", iconURL);
              DEBUG("Get Realtime RemoteICONs.");
            } else {
              iconURL = iconData;
              DEBUG("Get ICONs from Cache.");
            }
          } catch (e) {
            ERROR("Can not get Remote Icons.");
            cache.remove("_remoteicons_");
          }
          return iconURL;
        }

        ~(function prepareSearchParameters(responseUpdate) {
          "use strict";
          // MENUS_ACTION
          const addAction = {
            closeConfig: (configPage = qS(`gb-notice.${def.notice.noticejs} .${def.notice.configuration}`)) => {
              configPage && closeItem(configPage, true);
              return !0;
            },
            listSearchEngine: currentSite => {
              let returnHtml = "";
              for (let site in listSite) {
                if (listSite.hasOwnProperty(site) && listSite[site].SiteTypeID !== 0 && listSite[site].SiteTypeID !== currentSite.SiteTypeID) {
                  const iconStyle = `background-position:0 ${(1 - listSite[site].SiteTypeID) * 24}px;background-attachment:local;background-size:cover;`;
                  returnHtml += String(
                    `<li>
                      <button class="${def.notice.searchButton}" id="${listSite[site].SiteTypeID}"
                      ${selectedEngine.includes(listSite[site].SiteTypeID) ? `title="${isChinese ? "您常用的搜索引擎" : "Commonly used search engine"}"` : ``}>
                      <span class="${def.notice.favicon} ${def.notice.random}_icon" style="${iconStyle}"></span>
                      <span class="${def.notice.random}_iconText">${listSite[site].SiteNick}
                        <sup>${selectedEngine.includes(listSite[site].SiteTypeID) ? "\u0020\u2726" : "\u0020\u0020"}</sup>
                      </span>
                    </button>
                  </li>`
                  );
                }
              }
              return String(`<ul class="${def.notice.searchList}">${returnHtml}</ul>`);
            },
            listSelectSearchEngine: () => {
              let returnHtml = "";
              for (let site in listSite) {
                if (listSite.hasOwnProperty(site) && listSite[site].SiteTypeID !== 0) {
                  const iconStyle = `background-position:0 ${(1 - listSite[site].SiteTypeID) * 32}px;background-attachment:local;background-size:32px auto;`;
                  returnHtml += String(
                    `<label class="${def.notice.card}">
                      <input class="${def.notice.card}__input" type="checkbox" name="${def.notice.card}_lists" data-sn="${listSite[site].SiteTypeID}"\
                      ${selectedEngine.includes(listSite[site].SiteTypeID) ? "checked" : "disabled"}>
                      <div class="${def.notice.card}__body">
                        <header class="${def.notice.card}__body-header">
                          <span class="${def.notice.card}__body-cover-chackbox">
                            <svg class="${def.notice.card}__body-cover-chackbox--svg" viewBox="0 0 12 10">
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span class="${def.notice.card}__body-cover-image">
                            <span class="${def.notice.favicons} ${def.notice.random}_icon" style="${iconStyle}"></span>
                          </span>
                          <h2 class="${def.notice.card}__body-header-title" fr-fix-stroke="true">${listSite[site].SiteNick}</h2>
                          <p class="${def.notice.card}__body-header-subtitle" style="margin:0;padding:0">${listSite[site].SiteURI}</p>
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
                if (!qS(`.${def.notice.noticejs} .${def.notice.configuration}`) && r) {
                  GMnotification({
                    title: `${def.variable.scriptName} v${def.variable.curVersion}`,
                    text: String(
                      `<fieldset class="${def.notice.fieldset}">
                        <legend class="${def.notice.legend}" title="Version ${def.variable.curVersion}">
                          ${isChinese ? "高级功能参数设置" : "Advanced feature Setting"}
                        </legend>
                        <ur class="${def.notice.settingList}">
                          <li class="${def.notice.random}__content">
                            <div>${isChinese ? "请选择三个最常用的搜索引擎：" : "Choose three of your favs:"}
                            <span id="${def.notice.random}_clear">[<u>${isChinese ? "清除" : "Clear"}</u>]</span></div>
                            <div class="${def.notice.grid}">
                            ${addAction.listSelectSearchEngine()}
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "键盘快捷键功能开关" : "Keyboard Shortcut"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.hk}" class="${def.notice.checkbox}" ${isHotkey ? "checked" : ""} />
                              <label for="${def.notice.hk}"></label>
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "Google 国际站跳转" : "Open Google NCR"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.gj}" class="${def.notice.checkbox}" ${googleJump ? "checked" : ""} />
                              <label for="${def.notice.gj}"></label>
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "在当前浏览器窗口跳转" : "Open in Self-window"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.lw}" class="${def.notice.checkbox}" ${localWindow ? "checked" : ""} />
                              <label for="${def.notice.lw}"></label>
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "搜索关键词高亮增强" : "Words Highlight"}
                              <span title="${isChinese ? "自定义关键词颜色" : "Custom Keyword Color"}" id="${def.notice.random}_customColor"\
                                style="display:${keywordHighlight ? `inline-block` : `none`}">\ud83c\udfa8</span>
                            </div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.kh}" class="${def.notice.checkbox}" ${keywordHighlight ? "checked" : ""} />
                              <label for="${def.notice.kh}"></label>
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "去除链接重定向跳转" : "Remove Redirection"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.ar}" class="${def.notice.checkbox}" ${antiLinkRedirect ? "checked" : ""} />
                              <label for="${def.notice.ar}"></label>
                            </div>
                          </li>
                          <li>
                            <div title="${isChinese ? "实验性功能" : "Beta Version"}">${isChinese ? "去除搜索结果广告" : "Remove Ads"}
                            <sup style="padding:0;font-style:italic;color:crimson;font-size:11px">Beta!</sup></div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.aa}" class="${def.notice.checkbox}" ${antiAds ? "checked" : ""} />
                              <label for="${def.notice.aa}"></label>
                            </div>
                          </li>
                          <li>
                            <div>${isChinese ? "更新检测（默认：开）" : "Auto Update Detect"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.au}" class="${def.notice.checkbox}" ${isAutoUpdate ? "checked" : ""} />
                              <label for="${def.notice.au}"></label>
                            </div>
                          </li>
                          <li style="float:right">
                            <button id="${def.notice.random}_help" title="${isChinese ? "单击查看使用帮助" : "View help document (Chinese)"}">
                            ${isChinese ? "使用帮助" : "Guider!"}
                            </button>
                            <button id="${def.notice.random}_cancel">${isChinese ? "取消" : "Cancel"}</button>
                            <button id="${def.notice.random}_submit">${isChinese ? "保存" : "Save"}</button>
                          </li>
                        </ul>
                      </fieldset>`
                    ),
                    type: def.notice.configuration,
                    width: 326,
                    closeWith: ["button"],
                    scroll: { maxHeight: 680, showOnHover: true },
                    progressBar: false,
                    timeout: false,
                    callbacks: {},
                    position: "topRight",
                  });
                  qA(`input[name='${def.notice.card}_lists']`).forEach(node => {
                    node.addEventListener("click", () => {
                      const input_checked = qA(`input[name='${def.notice.card}_lists']:checked:enabled`).length;
                      if (input_checked < 3) {
                        qA(`input[name='${def.notice.card}_lists']:disabled`).forEach(item => (item.disabled = false));
                        qS(`#${def.notice.random}_clear`).style.display = input_checked === 0 ? "none" : "inline";
                      } else {
                        qA(`input[name='${def.notice.card}_lists']:not(:checked)`).forEach(item => (item.disabled = true));
                      }
                    });
                  });
                  qS(`#${def.notice.random}_clear`).addEventListener("click", () => {
                    qA(`input[name='${def.notice.card}_lists']:checked:enabled`).forEach(node => node.click());
                  });
                  qS(`#${def.notice.kh}`).addEventListener("click", function () {
                    qS(`#${def.notice.random}_customColor`).style.display = this.checked ? "inline-block" : "none";
                  });
                  qS(`#${def.notice.random}_customColor`).addEventListener("click", () => {
                    let foregroundColor, backgroundColor, confirmColors;
                    const saveData = async () => {
                      if (!foregroundColor || !backgroundColor) return;
                      customColor = { foregroundColor: foregroundColor.trim().toLowerCase(), backgroundColor: backgroundColor.trim().toLowerCase() };
                      config_date = { isAutoUpdate, keywordHighlight: true, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
                      GMsetValue("_configures_", encrypt(JSON.stringify(config_date)));
                    };
                    const colorReg =
                      /^#[0-9a-f]{3}$|^#[0-9a-f]{6}$|^#[0-9a-f]{8}$|^rgba\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*((?!1.[1-9])[0-1]?(\.[0-9]{1,3})?)\)$|^rgb\(((([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))))|(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))(\s+\/\s+((\d+%)|1|(0\.\d+)))?))\)$|^transparent$|^currentcolor$/i;
                    foregroundColor = def.dialog.prompt(
                      isChinese
                        ? "请输入关键词前景色（字体颜色），默认为“#F73131CD”，支持HEX, HEXA, RGB, RGBA, currentcolor的颜色格式。"
                        : "Please enter the keyword foreground-color (font color), which defaults to '#F73131CD' and supports the color formats of HEX, HEXA, RGB, RGBA, currentcolor.",
                      customColor.foregroundColor
                    );
                    if (foregroundColor === null) {
                      return;
                    } else if (colorReg.test(foregroundColor.trim())) {
                      backgroundColor = def.dialog.prompt(
                        isChinese
                          ? "请输入关键词背景色，默认为“#FFFF80AD”，支持HEX, HEXA, RGB, RGBA, transparent的颜色格式。"
                          : "Please enter the keyword background-color, which defaults to '#FFFF80AD' and support HEX, HEXA, RGB, RGBA, transparent color format.",
                        customColor.backgroundColor
                      );
                      if (backgroundColor === null) {
                        return;
                      } else if (colorReg.test(backgroundColor.trim())) {
                        confirmColors = def.dialog.confirm(
                          (isChinese
                            ? `保存数据前，请确认您输入的颜色代码是否是您需要的？\r\n`
                            : `Before saving the data, please make sure that the color code you entered is what you need? \r\n`) +
                            `${isChinese ? "\r\n前景色代码：" : "\r\nForeground-color Code: "}${
                              /^#/gi.test(foregroundColor.trim()) ? foregroundColor.trim().toUpperCase() : foregroundColor.trim().toLowerCase()
                            }` +
                            `${isChinese ? "\r\n背景色代码：" : "\r\nBackground-color Code: "}${
                              /^#/gi.test(backgroundColor.trim()) ? backgroundColor.trim().toUpperCase() : backgroundColor.trim().toLowerCase()
                            }`
                        );
                        if (confirmColors) {
                          GMnotification({
                            title: isChinese ? "自定义颜色保存" : "Save Custom Color",
                            text: def.notice.noticeHTML(
                              isChinese ? "<dd>搜索关键词自定义颜色已保存，当前页面即将刷新！</dd>" : "<dd>Search keywords custom color has been saved!</dd>"
                            ),
                            type: def.notice.success,
                            closeWith: ["button"],
                            timeout: 10,
                            callbacks: {
                              onShow: [saveData],
                              onClose: [def.variable.refresh],
                            },
                          });
                        }
                      } else {
                        def.dialog.alert(isChinese ? "背景色 格式输入错误\uff01" : "Background color input-format error!");
                      }
                    } else {
                      def.dialog.alert(isChinese ? "前景色（字体颜色） 格式输入错误\uff01" : "Foreground color (font color) input-format error!");
                    }
                  });
                  qS(`#${def.notice.random}_help`).addEventListener("click", () => {
                    GMopenInTab(`${def.const.gfHost}#guide`, false);
                  });
                  qS(`#${def.notice.random}_cancel`).addEventListener("click", () => {
                    closeItem(qS(`gb-notice.${def.notice.noticejs} .${def.notice.configuration}`));
                  });
                  qS(`#${def.notice.random}_submit`).addEventListener("click", async () => {
                    let selectEngineList = [];
                    qA(`input[name='${def.notice.card}_lists']:checked`).forEach(item => {
                      selectEngineList.push(Number(item.dataset.sn));
                    });
                    if (selectEngineList.length < 3) {
                      GMnotification({
                        text: def.notice.noticeHTML(
                          `<dd>
                            <e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>
                            ${
                              isChinese
                                ? `\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！`
                                : `\u0020Please select <b>three</b> search engines, still less<em>${3 - selectEngineList.length}</em>`
                            }
                          </dd>`
                        ),
                        type: def.notice.error,
                        closeWith: ["click"],
                        timeout: 18,
                        callbacks: {},
                      });
                      return;
                    }
                    selectedEngine = selectEngineList;
                    isHotkey = qS(`#${def.notice.hk}`).checked;
                    googleJump = qS(`#${def.notice.gj}`).checked;
                    localWindow = qS(`#${def.notice.lw}`).checked;
                    keywordHighlight = qS(`#${def.notice.kh}`).checked;
                    antiLinkRedirect = qS(`#${def.notice.ar}`).checked;
                    antiAds = qS(`#${def.notice.aa}`).checked;
                    isAutoUpdate = qS(`#${def.notice.au}`).checked;
                    config_date = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
                    GMsetValue("_configures_", encrypt(JSON.stringify(config_date)));
                    addAction.closeConfig();
                    GMnotification({
                      title: isChinese ? "保存成功！" : "Success!",
                      text: def.notice.noticeHTML(isChinese ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>"),
                      type: def.notice.success,
                      closeWith: ["button"],
                      timeout: 10,
                      callbacks: { onClose: [def.variable.refresh] },
                    });
                  });
                }
              });
            },
            listEngine: () => {
              sleep(5e2)(addAction.closeConfig()).then(r => {
                if (!qS(`.${def.notice.noticejs} .${def.notice.configuration}`) && r) {
                  GMnotification({
                    title: `\ud83d\udc4b ${isChinese ? "你想去哪里吖？" : "Where to visit?"}`,
                    text: addAction.listSearchEngine(listCurrentSite),
                    type: def.notice.configuration,
                    width: 200,
                    closeWith: ["button"],
                    scroll: { maxHeight: 465, showOnHover: true },
                    timeout: 120,
                    callbacks: {},
                    position: "topRight",
                  });
                  qA(`.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.searchButton}`).forEach(item => {
                    item.addEventListener(
                      "click",
                      function (listCurrentSite, localWindow) {
                        let url;
                        for (let type in newSiteType) {
                          if (newSiteType.hasOwnProperty(type) && newSiteType[type] === Number(item.id)) {
                            url = listCurrentSite.IMGType.includes(getUrlParam(listCurrentSite.SplitName).trim())
                              ? listSite[type.toLowerCase()].ImgURL
                              : listSite[type.toLowerCase()].WebURL;
                            break;
                          }
                        }
                        if (localWindow) {
                          top.location.href = decodeURI(url + getQueryString());
                        } else {
                          GMopenInTab(decodeURI(url + getQueryString()), false);
                        }
                      }.bind(this, listCurrentSite, localWindow)
                    );
                  });
                }
              });
            },
          };

          function insertMenus() {
            if (!CUR_WINDOW_TOP) return;
            let parameter_Set, engine_List, feed_Back;
            parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:gray");
            parameter_Set = GMregisterMenuCommand(`\ufff0\u2699\ufe0f ${isChinese ? "搜索引擎助手参数设置" : "Parameter setting"}${isHotkey ? "(E)" : ""}`, addAction.setConfigure);
            engine_List ? GMunregisterMenuCommand(engine_List) : DEBUG("%cInstalling Engine_List_Menu", "color:gray");
            engine_List = GMregisterMenuCommand(`\ufff2\ud83d\udc4b ${isChinese ? "嗨，你想去哪里吖？" : "Hi, Where to visit?"} ${isHotkey ? "(V)" : ""}`, addAction.listEngine);
            feed_Back ? GMunregisterMenuCommand(feed_Back) : DEBUG("%cInstalling Feed_Back_Menu", "color:gray");
            feed_Back = GMregisterMenuCommand(`\ufff4\u2712\ufe0f ${isChinese ? "向作者提点儿建议" : "Feedback to author"}${isHotkey ? "(B)" : ""}`, () =>
              GMopenInTab(def.variable.feedback, false)
            );
          }

          function insertHotkey() {
            if (!isHotkey || !CUR_WINDOW_TOP) return;
            document.addEventListener("keydown", e => {
              const ekey = e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey;
              if (e.keyCode === 69 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  addAction.setConfigure();
                }
              }
              if (e.keyCode === 86 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  addAction.listEngine();
                }
              }
              if (e.keyCode === 66 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 5e3) {
                  def.count.clickTimer = Date.now();
                  GMopenInTab(def.variable.feedback, false);
                }
              }
            });
          }

          function showSystemInfo() {
            if (CUR_WINDOW_TOP && listCurrentSite.SiteTypeID !== newSiteType.OTHERS) {
              const isFavEngine = currentSite.SiteTypeID !== newSiteType.OTHERS;
              __console(
                "shown_system_info",
                `%c${def.variable.scriptName}\r\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/SearchEngine\r\n%c%s%cV%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s`,
                "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
                "line-height:180%;font-size:10px;color:#777777;font-style:italic",
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "脚本版本：" : "Version:\u0020",
                "color:slategrey;text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'",
                def.variable.curVersion,
                "color:darkred;font:italic 11px/150% Candara,'Times New Roman'",
                IS_CHEAT_UA ? "\u3000(CHEAT-UA)" : "",
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "当前搜索引擎：" : "CurrentEngine:\u0020",
                "color:crimson;text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'",
                def.const.curSiteName,
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "常用的搜索引擎：" : "YourFavEngine:\u0020",
                `color:${isFavEngine ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
                isFavEngine,
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "移除链接重定向：" : "AntiRedirect:\u0020",
                `color:${antiLinkRedirect ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
                antiLinkRedirect,
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "去除搜索结果广告：" : "AntiAdvertising:\u0020",
                `color:${antiAds ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
                antiAds,
                "font-size:12px;font-weight:700;color:steelblue",
                isChinese ? "安全策略应用：" : "SecurityPolicy:\u0020",
                `color:${def.const.isSecurityPolicy ? "green" : "blue"};text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`,
                def.const.isSecurityPolicy
              );
            }
          }

          function insertSearchButtonAndStyle() {
            try {
              !qS(`#${def.const.rndstyleName}`) && insertStyle();
              if (currentSite.SiteTypeID !== newSiteType.OTHERS && !def.const.isSecurityPolicy) {
                !qS(`#${def.const.rndclassName}`) && insertCSS();
                !qS(`#${def.const.rndID}`) && insertButtons();
              }
            } catch (e) {
              ERROR("InsertHTML:", e.message);
            }
          }

          function moveCssToLastChild() {
            document.addEventListener("readystatechange", () => {
              if (document.readyState !== "loading") insertCSS(true);
            });
          }

          function insertCSS(isOverwrite = false) {
            try {
              const buttonCss = currentSite.StyleCode ? `@charset "UTF-8";` + currentSite.StyleCode : "";
              addStyle({ target: document.head, styleId: def.const.rndclassName, media: "all", styleContent: buttonCss, isOverwrite });
            } catch (e) {
              ERROR("insertCSS:", e.message);
            }
          }

          function insertStyle() {
            try {
              const noticeStyle = `@charset "UTF-8";` + def.const.noticecss + def.const.iconCss + String(keywordHighlight ? def.const.highlightCss : "");
              addStyle({ target: document.head, styleId: def.const.rndstyleName, media: "screen", styleContent: noticeStyle, isOverwrite: false });
            } catch (e) {
              ERROR("insertStyle:", e.message);
            }
          }

          function insertButtons() {
            try {
              const Selector = currentSite.MainType;
              const buttonSection = cE("gb-button");
              buttonSection.id = `${def.const.rndID}`;
              buttonSection.innerHTML = tTP.createHTML(def.const.buttonCode);
              const buttonID = `#${buttonSection.id}`;
              const indexPage = def.const.indexPage();
              const Target = qS(Selector);
              if (indexPage || !Target || qS(buttonID) || !getQueryString()) return;
              return new Promise(resolve => {
                switch (currentSite.SiteTypeID) {
                  case newSiteType.BAIDU:
                    insterAfter(buttonSection, Target);
                    if (!qS(buttonID)) return;
                    switch (def.const.vim) {
                      case currentSite.IMGType[0]:
                        qS(buttonID).style.marginLeft = "16px";
                        qS(`#${def.const.rightButton} input`).style.marginLeft = "3px";
                        document.body.style.overflowX = "clip";
                        break;
                      case currentSite.IMGType[1]:
                        qS(buttonID).style.height = "34px";
                        qA(`${buttonID} input`).forEach(node => {
                          node.style.cssText = "min-width:90px;height:34px;padding:0 5px!important;color:#ffffff;background:#3388ff;border-radius:0;border:1px solid #2d78f4";
                        });
                        document.body.style.overflowX = "clip";
                        break;
                    }
                    break;
                  case newSiteType.GOOGLE:
                    getGlobalGoogle("www.google.com", googleJump);
                    insterAfter(buttonSection, Target);
                    if (!qS(buttonID)) return;
                    qS(buttonID).parentNode.style.width = "100%";
                    qS(buttonID).parentNode.style.minWidth = "100%";
                    qS(buttonID).parentNode.parentNode.style.width = "100%";
                    qS(buttonID).parentNode.parentNode.parentNode.style.width = "95%";
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      qS(buttonID).parentNode.firstElementChild.style.width = "400px";
                    }
                    break;
                  case newSiteType.BING:
                    insterAfter(buttonSection, Target);
                    qA(`#b_header .b_searchbox`).forEach(item => (item.style.maxWidth = "666px"));
                    qS(`textarea.b_searchbox[name="q"]`, Target.parentNode)?.getAttribute("rows") >= 2 &&
                      qA(`#${def.const.rndID} input`).forEach(node => {
                        node.style.cssText += "border-radius:8px";
                      });
                    if (qS(".b_searchboxForm") && location.search.includes("view=detailV2")) {
                      qS(".b_searchboxForm").style.cssText += "width:max-content!important;z-index:1000;position:relative;";
                      qA(`#${def.const.rndID} input`).forEach(node => {
                        node.style.cssText += "height:34px!important;border-radius:6px!important;padding:0 12px!important;margin:0 0 0 2px!important;";
                      });
                    }
                    break;
                  case newSiteType.SOGOU:
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      sleep(5e2, { useCachedSetTimeout: true }).then((s = buttonID, t = Target) => {
                        if (!qS(s) && t) {
                          insterAfter(buttonSection, t);
                          qS(s).style.right = `-${Number(qS(s).getBoundingClientRect().width) + 10}px`;
                          addSearchButtonEvent(qA(`${s} span[sn]:not([event-insert])`));
                        }
                      });
                    } else if (def.const.vim.endsWith("weixin")) {
                      insterAfter(buttonSection, Target);
                      qS(buttonID).style = "position:relative";
                      qA(`${buttonID} input`).forEach(node => node.classList.add(`${def.notice.random}_weixin`));
                    } else {
                      insterAfter(buttonSection, Target);
                      qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`) && qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`).remove();
                      sleep(2e2, { useCachedSetTimeout: true }).then(() => {
                        qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 10}px`;
                        qS(`#searchBtn2`) && (qS(`#searchBtn2`).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 120}px`);
                      });
                    }
                    break;
                  case newSiteType.SO360:
                    insterAfter(buttonSection, Target);
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      qA(`${buttonID} input`).forEach(node => (node.style = "margin:0 0 0 1px;"));
                    }
                    break;
                  case newSiteType.FSOU:
                    insterAfter(buttonSection, Target);
                    break;
                  case newSiteType.DUCKDUCKGO:
                    Target.parentNode.appendChild(buttonSection);
                    Target.parentNode.appendChild(Target.cloneNode(true));
                    Target.remove();
                    sleep(1e2).then(() => (qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 8}px`));
                    break;
                  case newSiteType.TOUTIAO:
                    insterAfter(buttonSection, Target);
                    sleep(1e2).then(() => (qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 10}px`));
                    break;
                  case newSiteType.YANDEX:
                    insterAfter(buttonSection, Target);
                    sleep(5e2, { useCachedSetTimeout: true })
                      .then(() => {
                        const width = Number(qS(buttonID).getBoundingClientRect().width) || 182;
                        const isRU = location.host.endsWith(".ru");
                        if (currentSite.IMGType.includes(def.const.vim)) {
                          qS(buttonID).style.right = `-${isRU ? (IS_REAL_GECKO || IS_REAL_EDGE ? width - 60 : width - 130) : width - 60}px`;
                          qS(`button.button2[data-bem]`) && (qS(`button.button2[data-bem]`).style.right = `-${width + 144}px`);
                        } else if (def.const.vim === "products") {
                          qS(buttonID).style.right = `-${width - 60}px`;
                        } else {
                          qS(buttonID).style.right = `-${width + 10}px`;
                          qS("form.search2") && (qS("form.search2").style.cssText += "padding-right:0px!important");
                          qS("button.input__settings") && (qS(`button.input__settings`).style.right = `-${width + 144}px`);
                          qS(`div.HeaderDesktopActions`) && (qS(`div.HeaderDesktopActions`).style.cssText = `position:relative;right:-${width - 10}px`);
                          qS(`span.serp-header__voice-search-container`) && (qS(`span.serp-header__voice-search-container`).style.right = `-${width + 190}px`);
                          qS(`button.voice-search-button.input__voice-search`) && (qS(`button.voice-search-button.input__voice-search`).style.right = `-${width + 190}px`);
                        }
                        qS(`span.input__voice-search`) && (qS(`span.input__voice-search`).style.right = `-${width + 184}px`);
                      })
                      .then(() => (qS(buttonID).style.opacity = 1));
                    break;
                  case newSiteType.KAIFA:
                    Target.appendChild(buttonSection);
                    if (qS(buttonID)) qS("#search-box-container input[class~='ant-input']").style.cssText += `width:605px!important`;
                    break;
                  case newSiteType.ECOSIA:
                    w.onload = function () {
                      !qS(buttonID) && Target && insterAfter(buttonSection, Target);
                      addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                    };
                    break;
                  case newSiteType.YAHOO:
                    insterAfter(buttonSection, Target);
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      const node = qS("#sbx").getBoundingClientRect();
                      qS(buttonID).style.cssText = `position:absolute;left:${node.width + node.left}px`;
                    } else {
                      qS(buttonID).style.cssText = `position:absolute;top:0;left:${qS("#hd div.sbx").getBoundingClientRect().width}px`;
                      new MutationObserver(() => {
                        qS(buttonID).style.left = `${qS("#hd div.sbx").getBoundingClientRect().width}px`;
                      }).observe(qS("#hd div.sbx"), { attributes: true });
                    }
                    break;
                  case newSiteType.YOU:
                    Target.appendChild(buttonSection);
                    Target.style.cssText += "display:flex;justify-content:center;align-items:center;";
                    sleep(5e2).then(() => {
                      const buttonNode = qS("button[aria-label='Close button']");
                      buttonNode && buttonNode.click();
                    });
                    break;
                  case newSiteType.STARTPAGE:
                    insterAfter(buttonSection, Target);
                    qS("#search").parentNode.style.maxWidth = `${630 + (qS(buttonID)?.getBoundingClientRect().width ?? 170)}px`;
                    break;
                  case newSiteType.BRAVE:
                    insterAfter(buttonSection, Target);
                    qS("div.searchform-container").style.setProperty("--search-form-width", `${700 + (qS(buttonID)?.getBoundingClientRect().width / 2 ?? 80)}px`);
                    qS("#submit-button").addEventListener("mouseover", function () {
                      this.style.cssText = "border-radius:10px;transform:scale(0.9)";
                    });
                    qS("#submit-button").addEventListener("mouseout", function () {
                      this.style.cssText = "";
                    });
                    break;
                }
                resolve({ buttonID, Selector, indexPage });
              })
                .then(r => {
                  addSearchButtonEvent(qA(`${r.buttonID} span[sn]:not([event-insert])`));
                  scrollDetect(qS(r.Selector), r.indexPage);
                })
                .catch(e => ERROR("insertHTML:", e.message));
            } catch (e) {
              ERROR("insertButtons:", e.message);
            }
          }

          function scrollDetect(target, indexPage) {
            if (indexPage || !target) return;
            let scrollbars, scrollspan, height, e;
            switch (currentSite.SiteTypeID) {
              case newSiteType.GOOGLE:
                e = /^isch$/.test(def.const.vim);
                scrollspan = e ? def.const.scrollspan2 : def.const.scrollspan;
                scrollbars = e ? def.const.scrollbars2 : def.const.scrollbars;
                height = e ? 0 : 35;
                setScrollButton(`#${def.const.rndID}`, scrollspan, height);
                setScrollButton(`#${def.const.rndID} #${def.const.leftButton} input`, scrollbars, height);
                setScrollButton(`#${def.const.rndID} #${def.const.rightButton} input`, scrollbars, height);
                break;
              case newSiteType.BING:
                e = /^(images|videos)$/.test(def.const.vim);
                scrollspan = e ? def.const.scrollspan2 : def.const.scrollspan;
                scrollbars = e ? def.const.scrollbars2 : def.const.scrollbars;
                setScrollButton(`#${def.const.rndID}`, scrollspan, 50);
                setScrollButton(`#${def.const.rndID} #${def.const.leftButton} input`, scrollbars, 50);
                setScrollButton(`#${def.const.rndID} #${def.const.rightButton} input`, scrollbars, 50);
                break;
              default:
                return;
            }
          }

          function addSearchButtonEvent(nodes) {
            let gotoUrl = "about:blank";
            nodes.forEach(node => {
              node.setAttribute("event-insert", true);
              qS("input", node).addEventListener("click", () => {
                def.const.vim = getUrlParam(currentSite.SplitName)?.trim();
                switch (Number(node.getAttribute("sn"))) {
                  case selectedSite[0].SiteTypeID:
                    gotoUrl = currentSite.IMGType.includes(def.const.vim) ? selectedSite[0].ImgURL : selectedSite[0].WebURL;
                    break;
                  case selectedSite[1].SiteTypeID:
                    gotoUrl = currentSite.IMGType.includes(def.const.vim) ? selectedSite[1].ImgURL : selectedSite[1].WebURL;
                    break;
                }
                if (localWindow) {
                  top.location.href = decodeURI(gotoUrl + getQueryString());
                } else {
                  GMopenInTab(decodeURI(gotoUrl + getQueryString()), false);
                }
              });
            });
          }

          function setScrollButton(paraName, className, scrollSize) {
            const oDiv = qS(paraName);
            let H = 0;
            let Y = oDiv;
            if (Y !== null) {
              while (Y) {
                H += Y.offsetTop;
                Y = Y.offsetParent;
              }
              document.addEventListener("scroll", () => {
                const elCompat = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                if (elCompat?.scrollTop > H + scrollSize) {
                  oDiv.classList.add(className);
                } else {
                  oDiv.classList.remove(className);
                }
              });
            }
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
                  def.const.s?.close();
                  delete def.const.s;
                  sessionStorage.removeItem("_global_google_");
                  top.location.href = top.location.href.replace(top.location.hostname, google);
                };
                try {
                  sleep(5e2).then(() => {
                    def.const.s = GMopenInTab(`https://${google}/ncr`, true);
                    GMnotification({
                      title: isChinese ? "智能跳转" : "Google NCR Jump",
                      text: def.notice.noticeHTML(
                        `<dd class="${def.notice.center}">${
                          isChinese ? "当前页面即将跳转至 Google国际站（NCR）" : "Jump to Google.com(NCR)"
                        } <br/><span>${google.toUpperCase()}</span></dd>`
                      ),
                      type: def.notice.info,
                      closeWith: ["click"],
                      timeout: 20,
                      callbacks: { onClose: [redirectNCR] },
                    });
                  });
                } catch (e) {
                  ERROR("getGlobalGoogle:", e.message);
                }
              }
            }
          }

          function searchButtonObserve() {
            let observer = new MutationObserver(mainThread);
            let config = { childList: true, subtree: true };
            observer.observe(document, config);

            function mainThread() {
              observer.disconnect();
              const noButtonOrStyle = def.const.isSecurityPolicy
                ? !qS(`#${def.const.rndstyleName}`)
                : !qS(`#${def.const.rndclassName}`) || !qS(`#${def.const.rndID}`) || !qS(`#${def.const.rndstyleName}`);
              if (noButtonOrStyle) insertSearchButtonAndStyle();
              antiLinkRedirect && listCurrentSite.SiteTypeID !== newSiteType.OTHERS && !def.const.indexPage() && listCurrentSite.AntiRedirect();
              antiAds && listCurrentSite.SiteTypeID !== newSiteType.OTHERS && listCurrentSite.AntiAds();
              observer.observe(document, config);
            }
          }

          /* SEARCH_ENGINE_ASSISTANT_MAIN_PROCESS */

          !(async function searchEngineAssistant(updateRet) {
            "use strict";
            // CHECK_FOR_UPDATES
            responseUpdate(await updateRet());
            // SYSTEM_INFORMATION
            showSystemInfo();
            // INSERT_MENU
            insertMenus();
            // INSERT_HOTKEY
            insertHotkey();
            // INSERT_JUMP_BUTTON
            insertSearchButtonAndStyle();
            searchButtonObserve();
            moveCssToLastChild();
            // REQUEST_UPDATE
          })(async () => await checkAutoUpdate());
        })(value => {
          "use strict";
          if (!value) return;
          let version, note;
          let updateInfoList = "";
          value.res
            ? value.res.split(/[\r\n]+/).forEach(item => {
                const versions = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
                version = versions ? versions[2] : version;
                const notes = item.match(/^(\/\/\s+@note\s+)(.+)$/);
                note = notes ? notes[2] : note;
              })
            : WARN(
                "%c[GB-UpdateError]%c\r\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!",
                "font-weight:bold;color:crimson",
                "color:darkred"
              );
          note && note.split(/\\n/g).forEach(item => (updateInfoList += `<li>${item}</li>`));
          const updateInfo = `<dd><ul>${note ? updateInfoList : "暂时无法获取更新详情。"}</ul></dd>`;
          const updateHost = value.source ? new URL(value.source).hostname : null;
          updateHost && DEBUG("[UpdateURI]: %c%s", "color:crimson", updateHost.replace(/raw\.|usercontent/g, ""));
          if (version) {
            if (isNeedUpdate(def.variable.curVersion, version)) {
              const preInstall = () => {
                sleep(5e2)(value.source.replace(".meta.", ".user."))
                  .then(url => {
                    if (IS_REAL_GECKO) {
                      def.const.u = GMopenInTab(IS_GREASEMONKEY ? url.replace(/\?\d+/g, "") : url, true);
                    } else {
                      location.href = url;
                    }
                  })
                  .then(() => {
                    GMnotification({
                      title: isChinese ? "升级提示" : "Update Tips",
                      text: def.notice.noticeHTML(
                        `<dd id="${def.notice.random}_loading" style="color:yellow;font-weight:600">${
                          IS_REAL_GECKO
                            ? `${isChinese ? "已经在新窗口打开脚本升级页面，请注意切换！" : "The upgrade page is opened in new window!"}`
                            : `${isChinese ? "正在申请脚本更新安装页面，请稍后……" : "Installation page is requested, please wait..."}`
                        }</dd><dd id="${def.notice.random}_error"></dd>${
                          isChinese ? "<dd><b>若您已更新完成</b>，请点此刷新页面，以使新版脚本生效！</dd>" : "<dd><b>If updated</b>, click here to make the script effective!</dd>"
                        }`
                      ),
                      type: def.notice.info,
                      closeWith: ["click"],
                      timeout: false,
                      position: "topRight",
                      callbacks: {
                        onClose: [
                          async () => {
                            try {
                              const iconURL = await getRemoteIcon(API_ICO_YANDEX_URL);
                              iconURL && cache.set("_remoteicons_", iconURL);
                            } catch (e) {
                              cache.remove("_remoteicons_");
                            }
                          },
                          def.variable.refresh,
                        ],
                      },
                    });
                    def.const.u &&
                      sleep(6e3).then(() => {
                        def.const.u.close();
                        delete def.const.u;
                        qS(`#${def.notice.random}_error`).innerHTML = tTP.createHTML(
                          `<gb-error style="display:block;margin:0 0 4px -6px;padding:6px;width:max-content;border:1px dashed #ffb78c;border-radius:4px;color:#ffb78c">${
                            isChinese ? "如果升级窗口没有出现（网络问题），请点此重试！" : "If no upgrade window appears, click here to retry!"
                          }</gb-error>`
                        );
                      });
                    return qS(`#${def.notice.random}_loading`);
                  })
                  .then(r => sleep(4e3, { useCachedSetTimeout: true })(r).then(s => s?.remove()))
                  .catch(e => ERROR("preInstall:", e.message));
              };
              sleep(5e2, { useCachedSetTimeout: true })
                .then(() => {
                  GMnotification({
                    title: isChinese ? "发现新更新" : "Found new version",
                    text: def.notice.noticeHTML(
                      isChinese
                        ? `<dd><span>发现新版本</span><i>V${version}</i>，点击可自动更新。</dd>${updateInfo}<dd id="${def.notice.stopUpdate}"><input type="checkbox">一周内不再提醒</dd>`
                        : `<dd><span>New Version</span><i>V${version}</i>, Click to update.</dd>${updateInfo}<dd id="${def.notice.stopUpdate}"><input type="checkbox">Don't remind me for <b>one</b> week</dd>`
                    ),
                    type: def.notice.warning,
                    closeWith: ["click"],
                    timeout: 60,
                    callbacks: { onClick: [preInstall] },
                  });
                  return qS(`#${def.notice.stopUpdate}`);
                })
                .then(r => {
                  r &&
                    r.addEventListener("click", event => {
                      event.stopPropagation();
                      closeItem(qS(`gb-notice.${def.notice.noticejs} .${def.notice.warning}`));
                      cache.set("_autoupdate_", version);
                    });
                })
                .then(() =>
                  __console(
                    "shown_new_update",
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
                    title: isChinese ? "更新成功" : "Update Success",
                    text: def.notice.noticeHTML(
                      isChinese
                        ? `<dd style="margin: 10px 0"><span>恭喜您！</span>当前版本 <i>${def.variable.curVersion}</i> 已为最新！</dd>`
                        : `<dd style="margin: 10px 0"><span>Congratulations!</span><br/>The current version <i>${def.variable.curVersion}</i> is up-to-date!</dd>`
                    ),
                    type: def.notice.success,
                    closeWith: ["click"],
                    timeout: 5,
                  });
                })
                .then(() => cache.set("_autoupdate_", version))
                .then((r = def.variable.curVersion) =>
                  __console(
                    "shown_update_info",
                    `%c[GB-Update]%c\r\nCurretVersion: %c${r}%c is up-to-date!`,
                    "font-weight:700;color:darkcyan",
                    "color:0",
                    "color:crimson",
                    "color:0"
                  )
                );
            }
          }
        });
      })(
        async () => {
          "use strict";
          const cache_autoupdate = await cache.get("_autoupdate_");
          if (CUR_WINDOW_TOP && isAutoUpdate && (!cache_autoupdate || setDebuggerMode())) {
            const rnd = Date.now().toString().slice(-8);
            const result = await Promise.race([
              update(`https://greasyfork.org/scripts/12909/code/Google%20%20baidu%20Switcher%20(ALL%20in%20One).meta.js?${rnd}`),
              update(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js?${rnd}`),
              update(`https://openuserjs.org/install/f9y4ng/Google_baidu_Switcher_(ALL_in_One).meta.js?${rnd}`),
            ]).catch(e => ERROR("CheckUpdate:", e.message));
            return result;
          }
          return null;

          function update(url) {
            return new Promise((resolve, reject) => {
              GMxmlhttpRequest({
                url: url,
                nocache: true,
                headers: { Accept: "*/*", Referer: url },
                method: "GET",
                timeout: 1e4,
                onreadystatechange: response => {
                  if (response.status === 200 && response.readyState === 4) {
                    const res = response.responseText || response.response || "";
                    res && resolve({ res, source: url });
                  }
                },
                ontimeout: () => reject(new Error("Timeout Error")),
              });
            }).catch(e => {
              ERROR("AutoUpdate.XHR:", e.message);
              return { res: def.variable.undef, source: def.variable.undef };
            });
          }
        },
        async imgUrl => {
          "use strict";
          if (!CUR_WINDOW_TOP) return;
          return new Promise((resolve, reject) => {
            GMxmlhttpRequest({
              url: imgUrl,
              headers: { Accept: "*/*", Referer: imgUrl },
              method: "GET",
              timeout: 5e3,
              responseType: "blob",
              onreadystatechange: response => {
                if (response.status === 200 && response.readyState === 4) {
                  let blob = response.response;
                  DEBUG("Response.Blob:", blob);
                  let oFileReader = new FileReader();
                  oFileReader.onloadend = e => resolve(e.target.result);
                  oFileReader.readAsDataURL(blob);
                }
              },
              ontimeout: () => reject(new Error("Timeout Error")),
            });
          }).catch(e => ERROR("GetRemoteIcons:", e.message));
        }
      );
    })(
      async () => {
        "use strict";
        let config_date, isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor;
        const configure = await GMgetValue("_configures_");
        if (!configure) {
          const keys = await GMlistValues();
          for (let key of keys) GMdeleteValue(key);
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
          GMsetValue("_configures_", encrypt(JSON.stringify(config_date)));
        } else {
          try {
            config_date = JSON.parse(decrypt(configure));
            isAutoUpdate = Boolean(config_date.isAutoUpdate);
            keywordHighlight = Boolean(config_date.keywordHighlight);
            isHotkey = Boolean(config_date.isHotkey);
            selectedEngine = Array.isArray(config_date.selectedEngine) ? config_date.selectedEngine : [1, 2, 3];
            localWindow = Boolean(config_date.localWindow);
            googleJump = Boolean(config_date.googleJump);
            antiLinkRedirect = Boolean(config_date.antiLinkRedirect);
            antiAds = Boolean(config_date.antiAds);
            customColor = config_date.customColor || { foregroundColor: "#f73131cd", backgroundColor: "#ffff80ad" };
          } catch (e) {
            ERROR("Configure Error:", e.message);
            return {
              isAutoUpdate: true,
              keywordHighlight: false,
              isHotkey: true,
              selectedEngine: [1, 2, 3],
              localWindow: true,
              googleJump: true,
              antiLinkRedirect: true,
              antiAds: false,
              customColor: { foregroundColor: "#f73131cd", backgroundColor: "#ffff80ad" },
            };
          }
        }
        return { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
      },
      (s => {
        "use strict";
        switch (navigator.language) {
          case "zh":
          case "zh-CN":
          case "zh-HK":
          case "zh-TW":
          case "zh-MO":
          case "zh-SG":
          case "zh-MY":
            return s;
          default:
            return !s;
        }
      })(true)
    );
  })(createTrustedTypePolicy(), () => {
    "use strict";
    const navigatorInfo = getNavigatorInfo();
    const locationInfo = getLocationInfo();
    return { navigatorInfo, locationInfo };
  });
})(typeof window !== "undefined" ? window : this);
