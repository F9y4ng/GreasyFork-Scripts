// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            SearchEngine Assistant
// @name:zh-CN         优雅的搜索引擎跳转助手
// @name:zh-TW         優雅的搜索引擎跳轉助手
// @name:ru            помощник поисковой системы
// @name:ja            優雅な検索エンジンジャンプ助手
// @version            2023.12.02.1
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
// @require            https://update.greasyfork.org/scripts/460897/1277476/gbCookies.js#sha256-Sv+EuBerch8z/6LvAU0m/ufvjmqB1Q/kbQrX7zAvOPk=
// @match              *://www.baidu.com/*
// @match              *://image.baidu.com/search*
// @match              *://kaifa.baidu.com/searchPage*
// @match              *://*.bing.com/*search*
// @match              *://duckduckgo.com/*
// @match              *://*.sogou.com/*
// @match              *://www.wuzhuiso.com/s*
// @match              *://www.so.com/s*
// @match              *://image.so.com/*
// @match              *://so.toutiao.com/search*
// @match              *://yandex.com/*search*
// @match              *://yandex.ru/*search*
// @match              *://www.ecosia.org/*
// @match              *://*.search.yahoo.com/search*
// @match              *://you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://swisscows.com/*
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
// @note               更新greasyfork.org新版本@require地址。
// @note               新增搜索结果过滤功能，拒绝垃圾与内容农场。
// @note               移除失效的Fsou,新增中文搜索：无追搜索。
// @note               重构去重定向功能，优化重定向链接解析效率。
// @note               重构去广告功能，优化广告屏蔽效率和效果。
// @note               修正一些已知问题，优化样式，优化代码。
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

"use strict";

~(function (w) {
  /**
   * LICENSE FOR OPEN SOURCE USE: GPLv3.
   * CUSTOM SCRIPT DEBUGGING, DO NOT TURN ON FOR DAILY USE.
   * SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.
   * THE SETTING VALUE TYPE MUST BE BOOLEAN, FALSE BY DEFAULT.
   */

  const IS_OPEN_DEBUG = false;

  /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2023-04-08 F9Y4NG */

  const GMinfo = GM?.info ?? GM_info;
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
  const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
  const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

  /* INITIALIZE_COMMON_CONSTANTS */

  const def = {
    count: { clickTimer: 0 },
    const: {
      disappear: "ͼA2tB7nͽ",
      translucent: "ͼC9b7Zqͽ",
      isSecurityPolicy: false,
      ft: parseFloat(1000 / 60),
      loading: generateRandomString(6, "char"),
      raf: Symbol(`פֿ${generateRandomString(8, "hex")}`),
      caf: Symbol(`פֿ${generateRandomString(8, "hex")}`),
      cssAttrName: `gb-css-${generateRandomString(8, "hex")}`,
      rndButtonID: generateRandomString(12, "char"),
      rndclassName: `SC${generateRandomString(8, "digit")}`,
      rndstyleName: `SS${generateRandomString(8, "digit")}`,
      rndadvName: `SA${generateRandomString(8, "digit")}`,
      leftButton: generateRandomString(6, "mix"),
      rightButton: generateRandomString(6, "mix"),
      scrollspan: generateRandomString(8, "char"),
      scrollspan2: generateRandomString(8, "char"),
      scrollbars: generateRandomString(8, "char"),
      scrollbars2: generateRandomString(8, "char"),
      greasyfork: decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkYxMjkwOQ=="),
      yandexIcon: decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI="),
      backupIcon: decrypt("aHR0cHMlM0ElMkYlMkZ6MS5heDF4LmNvbSUyRjIwMjMlMkYxMSUyRjMwJTJGcGlyTTFTZy5wbmc="),
    },
    variable: {
      undef: void 0,
      refresh: () => location.reload(true),
      curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2023.12.02.0",
      scriptName: getMetaValue(`name:${navigator.language ?? "zh-CN"}`) ?? decrypt("U2VhcmNoRW5naW5lJTIwQXNzaXN0YW50"),
      feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcubGlrZXMuZmFucyUyRnN1cHBvcnQ="),
      homepage: getMetaValue("homepage") ?? getMetaValue("homepageURL") ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
    },
    dialog: { alert: alert.bind(w), prompt: prompt.bind(w), confirm: confirm.bind(w) },
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
      readonly: generateRandomString(8, "mix"),
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
      if (RAF.instance) return RAF.instance;
      registerWindowsProperties(global);
      this.timerMap = { timeout: {}, interval: {} };
      this.setTimeout = this.setTimeout.bind(this);
      this.global = global;
      RAF.instance = this;
    }
    _ticking(fn, type, interval, lastTime = Date.now()) {
      const timerSymbol = Symbol(type);
      const step = () => {
        this._setTimerMap(timerSymbol, type, step);
        if (interval < def.const.ft || Date.now() - lastTime >= interval) {
          typeof fn === "function" && fn();
          if (type === "interval") lastTime = Date.now();
          else this.clearTimeout(timerSymbol);
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
      registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand ?? (() => {}),
      unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand ?? (() => {}),
      xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM?.xmlHttpRequest ?? (xhr => replaceXHR(xhr)),
      unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : w,
      contentMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
    };
    return gmFunctions[rec] ?? (() => {});
  }

  function __console(act, argm = "", ...args) {
    const _this = w.console;
    switch (act) {
      case "log":
        return _this[act](`%c\ud83d\udd33 %c${argm}`, "display:inline-block", "font-family:monospace", ...args);
      case "error":
      case "warn":
        return _this[act](`%c\ud83d\udea9 ${argm}`, "display:inline-block;font-family:monospace", ...args);
      case "count":
        return _this[act](`\ud83d\udd33 ${argm}`);
      default:
        return _this.log(argm, ...args);
    }
  }

  function registerWindowsProperties(scope) {
    // REGISTER RAF
    scope[def.const.raf] =
      scope.requestAnimationFrame ||
      scope.webkitRequestAnimationFrame ||
      scope.mozRequestAnimationFrame ||
      scope.oRequestAnimationFrame ||
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
    scope[def.const.caf] =
      scope.cancelAnimationFrame ||
      scope.webkitCancelAnimationFrame ||
      scope.mozCancelAnimationFrame ||
      scope.oCancelAnimationFrame ||
      scope.cancelRequestAnimationFrame ||
      scope.webkitCancelRequestAnimationFrame ||
      scope.mozCancelRequestAnimationFrame ||
      scope.oCancelRequestAnimationFrame ||
      function cancelAnimationFrame(id) {
        clearTimeout(id);
      };
    // REGISTER PUSHSTATE/REPLACESTATE
    const wrapHistory = type => {
      const original = history[type];
      const event = new Event(type);
      return function () {
        const fn = original.apply(this, arguments);
        event.arguments = arguments;
        scope.dispatchEvent(event);
        return fn;
      };
    };
    history.pushState = wrapHistory("pushState");
    history.replaceState = wrapHistory("replaceState");
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

  function gCS(target, value, opt = null) {
    if (!target) return;
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

  function uniq(array) {
    if (!Array.isArray(array)) return [];
    return Array.from(new Set(array)).filter(Boolean);
  }

  function generateRandomString(length, type) {
    const digits = "0123456789";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const hexLetters = lowerCaseLetters.slice(0, 6);
    let characters = upperCaseLetters;
    let prefix = "";
    let randomString = [];
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
      case "hex":
        characters = hexLetters + digits + hexLetters;
        break;
    }
    for (let i = length; i > 0; i--) {
      randomString.push(characters[random(characters.length, "floor")]);
    }
    return prefix + randomString.join("");
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

  function escapeHTML(string) {
    const element = cE("gb-escape-html");
    element.innerText = string;
    return element.innerHTML;
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
      const redundantScriptsInfo = document.documentElement?.getAttribute("gb-init-rc");
      if (redundantScriptsInfo === "true") return scriptRedundancyWarning();
    }
    document.documentElement?.setAttribute("gb-init-rc", true);
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
    const uad = getUserAgentDataFromExtension(certificate);
    const trustengine = getRealBrowserEngine();
    let engine = "Unknown";
    let brand = "Unknown";
    let brandversion = "0.0.0.0";
    if (uad) {
      const os = getFullPlatformName(uad.platform);
      const brandMap = {
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
      return { engine, brand, brandversion: formatVersion(brandversion), os, "trust-engine": trustengine, credit: uad.credit ?? null };
    } else {
      const ua = navigator.userAgent;
      const checkString = str => new RegExp(str).test(ua);
      const getVersion = (str, offset) => checkString(str) && ua.substring(ua.indexOf(str) + offset).match(/\d+(\.\d+)*/)?.[0];
      const { brand, engine, brandversion } = getBrowserInfoFromUA(ua, checkString, getVersion);
      const os = getOSInfoFromUA(checkString);
      return { engine, brand, brandversion, os, "trust-engine": trustengine, credit: null };
    }

    function formatVersion(version) {
      if (!version) return "0.0.0.0";
      const numbers = version.split(".").map(num => parseInt(num));
      while (numbers.length < 4) numbers.push(0);
      return numbers.join(".");
    }

    function getUserAgentDataFromExtension(cert) {
      const vmuad = (uad => {
        if (!uad) return;
        const archs = uad.arch?.split("-") ?? [];
        const brand = capitalize(uad.browserBrand || uad.browserName);
        return {
          brands: [{ brand, version: uad.browserVersion }],
          platform: capitalize(uad.os),
          bitness: archs[1] ?? "unknown",
          architecture: archs[0] ?? "unknown",
          credit: cert,
        };
      })(GMinfo.platform);
      const tmuad = (uad => {
        if (!uad) return;
        uad.credit = cert;
        return uad;
      })(GMinfo.userAgentData);
      return vmuad ?? tmuad ?? navigator.userAgentData;
    }

    function getFullPlatformName(platform) {
      if (!platform) return "Unknown";
      const os = capitalize(platform);
      return /^(Like Mac|Ios)$/.test(os) ? "iOS" : os === "Cros" ? "Chrome OS" : os.startsWith("Win") ? "Windows" : os.startsWith("Mac") ? "MacOS" : os === "X11" ? "Unix" : os;
    }

    function getRealBrowserEngine() {
      return w.webkitRequestFileSystem ? "Blink" : !isNaN(parseFloat(w.mozInnerScreenX)) ? "Gecko" : w.GestureEvent ? "WebKit" : "Unknown";
    }

    function getBrowserInfoFromUA(ua, checkString, getVersion) {
      const engine = /Gecko\/|FxiOS/.test(ua) ? "Gecko" : /Chrom[e|ium]|CriOS/.test(ua) ? "Blink" : /AppleWebKit\//.test(ua) ? "WebKit" : "Unknown";
      const brandMap = {
        OPR: { brand: "Opera", engine: "Blink", as: "Chrome" },
        QQBrowser: { brand: "QQBrowser", engine: "Blink", as: "Chrome" },
        YaBrowser: { brand: "Yandex", engine, as: "Chrome" },
        Brave: { brand: "Brave", engine: "Blink" },
        Edg: { brand: "Edge", engine: "Blink" },
        Maxthon: { brand: "Maxthon", engine: "Blink", as: "Chrome" },
        CriOS: { brand: "Chrome", engine: "Blink" },
        Chromium: { brand: "Chromium", engine: "Blink" },
        Chrome: { brand: "Chrome", engine: "Blink" },
        FxiOS: { brand: "Firefox", engine: "Gecko" },
        Waterfox: { brand: "Waterfox", engine: "Gecko" },
        PaleMoon: { brand: "PaleMoon", engine: "Gecko", as: "Firefox" },
        Firefox: { brand: "Firefox", engine: "Gecko" },
        Safari: { brand: "Safari", engine: "WebKit", verset: ["Version"] },
        Trident: { brand: "IE", engine: "Trident", verset: ["MSIE", "rv"] },
      };
      for (const key of Object.keys(brandMap)) {
        if (checkString(key)) {
          const { brand: _brand, engine, verset, as } = brandMap[key];
          const _verset = verset?.find(k => checkString(k)) ?? verset?.[0];
          const _key = _verset ?? as ?? key;
          const _brandversion = formatVersion(getVersion(_key, _key.length + 1));
          return { brand: _brandversion ? _brand : brand, engine, brandversion: _brandversion ?? brandversion };
        }
      }
      const nameOffset = ua.lastIndexOf(" ") + 1;
      const verOffset = ua.lastIndexOf("/");
      const _brand = ua.substring(nameOffset, verOffset);
      const _brandversion = formatVersion(ua.substring(verOffset + 1).match(/\d+(\.\d+)*/)?.[0]);
      const isValidValue = !/version|\/|\(|\)|;/i.test(_brand) && _brandversion;
      return { brand: isValidValue ? _brand : brand, engine, brandversion: isValidValue ? _brandversion : brandversion };
    }

    function getOSInfoFromUA(checkString) {
      let os = "Unknown";
      const platforms = ["like Mac", "Mac", "Android", "Debian", "Ubuntu", "Linux", "Win", "CrOS", "X11"];
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (checkString(platform)) {
          os = getFullPlatformName(platform);
          break;
        }
      }
      return os;
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
    return new URLSearchParams(location.search).get("whoami") === "\u0046\u0039\u0079\u0034\u006e\u0067";
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
    if (typeof fn !== "function" || !timer) return;
    let caller = 0;
    const threshold = Number(Boolean(immed));
    return function () {
      const context = this;
      const args = arguments;
      const name = Symbol.for(String(timer));
      if (typeof def.count[name] === "undefined") {
        if (immed === true) {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
        }
      } else {
        if (once === true && def.count[name] === true) return true;
        raf.clearTimeout(def.count[name]);
        caller++;
      }
      def.count[name] = raf.setTimeout(() => {
        if (caller >= threshold) {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
        }
        delete def.count[name];
      }, Number(delay) || 0);
    };
  }

  function safeRemove(expr, scope) {
    let removedNodes = [];
    let pendingNodes = [];
    switch (typeof expr) {
      case "string":
        if (!expr) return false;
        pendingNodes = qA(expr, scope);
        pendingNodes.forEach(item => removeNode(item));
        break;
      case "object":
        if (expr?.nodeType === Node.ELEMENT_NODE) {
          pendingNodes.push(expr);
          removeNode(expr);
        } else return false;
        break;
      default:
        ERROR("Element not exist!");
        return false;
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
    const { navigatorInfo, locationInfo } = requestEnvironmentConstants();
    const { engine, brand, "trust-engine": trustengine, credit } = navigatorInfo;
    const { cP: CUR_PROTOCOL, cHN: CUR_HOST_NAME, isTop: CUR_WINDOW_TOP } = locationInfo;

    const IS_REAL_GECKO = trustengine === "Gecko";
    const IS_REAL_BLINK = trustengine === "Blink";
    const IS_REAL_WEBKIT = trustengine === "WebKit";
    const IS_CHEAT_UA = !credit && (engine !== trustengine || checkBlinkCheatingUA());
    const IS_GREASEMONKEY = GMscriptHandler === "Greasemonkey";

    const NOTICE_CSS = String(
      `#${def.const.rndButtonID} *{text-shadow:none!important;font-family:Helvetica,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticejs} *,.${def.notice.noticejs} *::after,.${def.notice.noticejs} *::before {box-sizing:content-box;line-height:normal;scrollbar-width:thin}.${def.notice.animated}{animation-duration:1s;animation-fill-mode:both}.${def.notice.animated}.infinite{animation-iteration-count:infinite}.${def.notice.animated}.hinge{animation-duration:2s}.${def.notice.animated}.bounceIn,.${def.notice.animated}.bounceOut,.${def.notice.animated}.flipOutX,.${def.notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${def.notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${def.notice.random}_fadeOut{animation-name:fadeOut}.${def.notice.noticejs},.${def.notice.noticejs} *{text-shadow:none!important;font-family:Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticejs}-top{top:0;width:100%}.${def.notice.noticejs}-top .${def.notice.item}{margin:0!important;border-radius:0!important}.${def.notice.noticejs}-topRight{top:10px;right:10px;z-index:10000059!important}.${def.notice.noticejs}-topLeft{top:10px;left:10px}` +
        `.${def.notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${def.notice.noticejs}-middleLeft,.${def.notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${def.notice.noticejs}-middleLeft{left:10px}.${def.notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${def.notice.noticejs}-bottom{bottom:0;width:100%}.${def.notice.noticejs}-bottom .${def.notice.item}{border-radius:0!important;margin:0!important}.${def.notice.noticejs}-bottomRight{bottom:10px;right:10px;z-index:10000055!important}.${def.notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${def.notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${def.notice.noticejs} .${def.notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}.${def.const.translucent} *{display:none!important}.${def.const.translucent} notice-label{display:block!important}.${def.const.disappear}{display:none!important}[gb-filter-notice]{display:block!important;margin:18px 0 28px 10px!important;padding:10px 2px!important;font:normal 400 14px/100% 'Times New Roman',system-ui,-apple-system,BlinkMacSystemFont,serif!important;-webkit-text-stroke:0 transparent!important;line-height:100%!important}gb-filters.code{display:block;margin:20px 0;word-break:break-word;font-size:12px!important}` +
        `.${def.notice.noticejs} .${def.notice.item} .${def.notice.close}{float:right;margin-right:7px;color:#ffffff;text-shadow:0 1px 0 #ffffff;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticejs} .${def.notice.item} .${def.notice.close}:hover{color:#000;opacity:.5;cursor:pointer}.${def.notice.noticejs} .${def.notice.item} a{border-bottom:1px dashed #ffffff;color:#ffffff;}.${def.notice.noticejs} .${def.notice.item} a,.${def.notice.noticejs} .${def.notice.item} a:hover{text-decoration:none}.${def.notice.noticejs} .${def.notice.success}{background-color:#64ce83;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-heading{padding:10px;background-color:#3da95c;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-body{padding:10px!important;color:#ffffff;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.noticejs} .${def.notice.info}{background-color:#3ea2ff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-heading{padding:10px;background-color:#067cea;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-body{padding:10px!important;color:#ffffff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.noticejs} .${def.notice.warning}{background-color:#ff7f48;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#f97038;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-body{color:#ffffff;padding:10px}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-content{visibility:visible}` +
        `.${def.notice.noticejs} .${def.notice.error}{background-color:#e74c3c;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#e93724;color:#ffffff;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-body{padding:10px;color:#ffffff;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-content{visibility:visible}.${def.notice.configuration} input[disabled],.${def.notice.configuration} select[disabled]{color:#bbbbbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${def.notice.noticejs} .${def.notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.close}{float:right;margin-right:7px;color:#000000;text-shadow:0 1px 0 #aaaaaa;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.close}:hover{color:#555555;opacity:.5;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-heading{padding:10px!important;background-color:#e7e7e7;color:#333333;font-weight:700;font-size:14px!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-body{padding:10px;color:#333333;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-body:hover{visibility:visible!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-content{visibility:visible}` +
        `.${def.notice.noticejs} .${def.notice.noticejs}-heading-title{display:inline-block;vertical-align:middle;overflow:hidden;max-width:275px;text-overflow:ellipsis;white-space:nowrap}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#64ce83;}.${def.notice.noticejs} .${def.notice.success} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#3da95c;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#3ea2ff;}.${def.notice.noticejs} .${def.notice.info} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#067cea;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#ff7f48;}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#f44e06;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#fd5f4e;}.${def.notice.noticejs} .${def.notice.error} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-progressbar{margin-top:-1px;width:100%;background-color:#efefef;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.noticejs}-progressbar .${def.notice.noticejs}-bar{width:100%;height:5px;background:#cccccc;}` +
        `@keyframes ${def.notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${def.notice.noticejs}-fadeOut{animation-name:${def.notice.noticejs}-fadeOut}@keyframes ${def.notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${def.notice.noticejs}-modal-out{to{opacity:0}}.${def.notice.noticejs}{position:fixed;z-index:10000051}.${def.notice.noticejs} ::-webkit-scrollbar{width:8px}.${def.notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${def.notice.noticejs} ::-webkit-scrollbar-track{border-radius:3px}.${def.notice.noticejs} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${def.notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#cccccc;}.${def.notice.noticejs}-modal{position:fixed;top:0;left:0;z-index:10000050;width:100%;height:100%;background-color:#000000;opacity:.3}.${def.notice.noticejs}-modal-open{opacity:0;animation:${def.notice.noticejs}-modal-in .3s ease-out}.${def.notice.noticejs}-modal-close{animation:${def.notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${def.notice.rName}{padding:2px!important}.${def.notice.noticejs} .${def.notice.rName} dl{margin:0!important;padding:1px!important}.${def.notice.noticejs} .${def.notice.rName} dl dt{margin:2px 0 6px!important;font-weight:900!important;font-size:16px!important}.${def.notice.noticejs} .${def.notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${def.notice.noticejs} .${def.notice.rName} .${def.notice.center}{width:100%;text-align:center!important}.${def.notice.noticejs} .${def.notice.rName} dl dd em{padding:0 5px;color:#ffffff;font-style:italic;font-size:24px!important;font-family:Candara,sans-serif!important}.${def.notice.noticejs} .${def.notice.rName} dl dd span{margin-right:8px;font-weight:700;font-size:15px!important}.${def.notice.noticejs} .${def.notice.rName} dl dd i{font-size:20px!important;font-family:Candara,sans-serif!important}.${def.notice.noticejs} .${def.notice.rName} dl dd .im{padding:0 3px;color:gold;font-weight:900;font-size:16px!important}` +
        `.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} ul{display:inline-block;margin:0 0 0 8px;padding:4px 4px 8px;width:90%;color:rgba(255, 255, 255, 0.8);counter-reset:xxx 0;vertical-align:top;text-align:left}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} li{position:relative;margin:0 0 0 2px;padding:0 0 2px 2px;list-style:none;font-style:italic!important;line-height:150%;-webkit-transition:.12s;transition:.12s}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} li::before{display:inline-block;margin-left:-1.5em;width:1.5em;content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-size:1em;font-family:Candara,sans-serif;-webkit-transition:.5s;transition:.5s}.${def.notice.noticejs} .${def.notice.warning} .${def.notice.rName} #${def.notice.stopUpdate}{float:right;margin:0 5px!important;font-size:12px!important;cursor:help}.${def.const.loading}{position:relative;}.${def.const.loading}::after{content:" \u21ba";animation:fade 1.25s infinite;}@keyframes fade{0%{opacity:0.1}50%{opacity:0.5}to{opacity:0}}.${def.notice.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important;color:#999}` +
        `#${def.notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;margin:2px 4px 0 0;width:14px;height:14px;border:2px solid #ffffff;border-radius:50%;background:#ffa077;vertical-align:top;cursor:help;-webkit-appearance:none}#${def.notice.stopUpdate}:hover input,#${def.notice.stopUpdate} input:hover{background:#ba2c1d;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}{display:none!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;padding:11px 9px;width:58px;height:10px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);word-wrap:normal!important;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;-webkit-border-radius:7px;border-radius:7px;background:#ffffff;box-shadow:0 0 1px rgba(0,0,0,.6);color:#ffffff;content:" "}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;-webkit-border-radius:100px;border-radius:100px;color:#ffffff;content:"OFF";font-weight:700;font-size:1em}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::after{top:2px;left:10px;content:"ON"}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}` +
        `.${def.notice.noticejs} .${def.notice.configuration} button.${def.notice.searchButton}{display:flex;margin:0 0 10px;padding:6px 0;width:162px;height:25px;border:2px solid #eeeeee;border-radius:6px;background:#ffffff;box-shadow:1px 1px 0 1px #aaaaaa;font-size:14px!important;cursor:pointer;align-content:center;justify-content:center;align-items:center}.${def.notice.noticejs} .${def.notice.configuration} button.${def.notice.searchButton}:hover{box-shadow:1px 1px 3px 0 #888888;color:red}.${def.notice.noticejs} .${def.notice.configuration} span.${def.notice.favicon}{margin:0 6px 0 0;width:24px;height:24px}.${def.notice.noticejs} .${def.notice.configuration} ul.${def.notice.searchList}{margin:5px;padding:2px;list-style:none}.${def.notice.noticejs} .${def.notice.configuration} ul.${def.notice.searchList} li{margin:0;list-style:none;font-style:normal}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.fieldset}{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;border:2px dashed #dfdfdf;border-radius:10px;background:transparent!important;text-align:left}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.legend}{display:block;margin:0;padding:0 8px;width:auto;color:#8b0000!important;font-weight:900!important;font-size:14px!important;-webkit-user-select:all;user-select:all}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList}{margin:0;padding:0;background:transparent!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} li{float:none;display:flex;margin:3px 0;padding:2px 8px 2px 12px;height:36px;border:none;background:transparent!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none;align-content:center;justify-content:space-between}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} li>div{font:normal 700 14px/150% Microsoft YaHei UI,Helvetica Neue,sans-serif!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} button{box-sizing:border-box;margin:0 0 0 8px;padding:4px 8px;height:36px;min-width:65px;border:1px solid #cccccc;border-radius:8px;background:#fafafa;box-shadow:1px 1px 1px 0 #cccccc;color:#5e5e5e;font-weight:700;font-size:14px!important}` +
        `.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info{font-weight:400!important;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info em{color:crimson!important;font-style:normal;}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_textarea{padding: 6px 0;margin:0}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter{display:block;margin:0;height:100%}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{box-sizing:border-box;margin:0!important;padding:5px!important;max-height:530px;width:100%;min-height:280px;outline:0!important;border:1px solid #bbb;border-radius:6px;white-space:pre;font:normal 400 14px/150% monospace,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;resize:vertical;scrollbar-width:thin;overscroll-behavior:contain;word-break:keep-all!important;cursor:auto;}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar{width:8px;height:8px}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaaaaa;}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaaaaa;}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-track-piece{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaaaaa;}` +
        `.${def.notice.noticejs} .${def.notice.configuration} #${def.notice.random}_customColor{margin:0;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} button:hover{background:#ffffff;cursor:pointer}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}__content{display:block;margin:0;height:268px}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:4px 0 3px;padding:8px;width:266px;max-height:237px;overscroll-behavior:contain}.${def.notice.card} h2{margin:0;padding:0;border:0;vertical-align:baseline;font:inherit;font-size:100%;line-height:135%;}.${def.notice.card}{margin:0;padding:0;--background:#ffffff;--background-chackbox:#0082ff;--background-image:#ffffff,rgba(0,107,175,0.2);--text-color:#666666;--text-headline:#000000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.${def.notice.card}__input{position:absolute;display:block;margin:0;padding:0;outline:none;border:none;background:none;-webkit-appearance:none}.${def.notice.card}__input:checked ~ .${def.notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#ffffff;--chack-scale:1;--chack-opacity:1;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox--svg{--stroke-color:#ffffff;--stroke-dashoffset:0;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover:after{--opacity-bg:0;}.${def.notice.random}_iconText{color:#333333;}.${def.notice.random}_iconText:hover{color:crimson}` +
        `.${def.notice.card}__input:disabled ~ .${def.notice.card}__body{cursor:not-allowed;opacity:0.5;}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body:active{--scale:1;}.${def.notice.card}__body{position:relative;display:grid;overflow:hidden;width:var(--card-witght);height:var(--card-height);border-radius:var(--card-radius);background:var(--background);box-shadow:var(--shadow,1px 1px 3px 1px #ccc);cursor:pointer;-webkit-transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:transform var(--transition),box-shadow var(--transition);transition:transform var(--transition),box-shadow var(--transition),-webkit-transform var(--transition);-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0);grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto}.${def.notice.card}__body:active{--scale:0.96;}.${def.notice.card}__body-cover-image{position:absolute;top:8px;left:10px;z-index:100;width:32px;height:32px}.${def.notice.card}__body-cover-image span.${def.notice.favicons}{display:block;width:32px;height:32px}.${def.notice.card}__body-cover-chackbox{position:absolute;top:10px;right:10px;z-index:1;width:28px;height:28px;border:2px solid var(--chack-border,#fff);border-radius:50%;background:var(--chack-bg,var(--background-chackbox));opacity:var(--chack-opacity,0);transition:transform var(--transition),opacity calc(var(--transition)*1.2) linear,-webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale,0));transform:scale(var(--chack-scale,0))}.${def.notice.card}__body-cover-chackbox--svg{display:inline-block;visibility:visible!important;margin:8px 0 0 7px;width:13px;height:11px;vertical-align:top;-webkit-transition:stroke-dashoffset .4s ease var(--transition);transition:stroke-dashoffset .4s ease var(--transition);fill:none;stroke:var(--stroke-color,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset,16px)}` +
        `.${def.notice.card}__body-header{padding:4px 10px 6px 50px;height:var(--header-height);background:var(--background)}.${def.notice.card}__body-header-title{margin-bottom:0!important;color:var(--text-headline);font-weight:700!important;font-size:15px!important}.${def.notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important}.${def.notice.noticejs} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}#${def.notice.random}_help{position:relative;margin:0;padding:4px 15px!important;border:1px solid transparent;background:#f07f6a;box-shadow:0 0 6px 0 #f5846f;color:#ffffff;cursor:help}#${def.notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${def.notice.random}_clear{margin:0 0 0 10px;color:#666666;font-weight:500;cursor:pointer}#${def.notice.random}_clear:hover{color:red}#${def.notice.random}_clear u{padding:0 2px;text-decoration:none}.${def.notice.linkerror},.${def.notice.linkerror}:hover,.${def.notice.linkerror} *,.${def.notice.linkerror} *:hover{color:grey!important;text-decoration-line:line-through!important;text-decoration-color:red!important;text-decoration-style:wavy!important}`
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
      if (noticeJsHeader && noticeJsHeader.nodeType === Node.ELEMENT_NODE) noticeJsItem.appendChild(noticeJsHeader);
      if (noticeJsBody.nodeType === Node.ELEMENT_NODE) noticeJsItem.appendChild(noticeJsBody);
      if (noticeJsProgressBar && noticeJsProgressBar !== "" && noticeJsProgressBar.nodeType === Node.ELEMENT_NODE) noticeJsItem.appendChild(noticeJsProgressBar);
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
          if (expiredTime > curTime && data) {
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
        styleElement.setAttribute(def.const.cssAttrName, isOverwrite ?? false);
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
      // CONFIGURE_DATA
      let config_date = await getConfigureData();
      let { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor } = config_date;
      // ANTIREDIRECT PARAMETERS
      const fetchTimeout = 25e3;
      const cachedRequestLinks = new Map();
      const usedFilterWords = new Set();

      function getUrlParam(parameter) {
        try {
          switch (typeof parameter) {
            case "undefined":
            case "object":
              if (parameter) {
                const { str, index } = parameter;
                const keyArray = location.pathname.split(str);
                return keyArray[index];
              } else {
                return "";
              }
            case "number":
            case "string":
              if (!parameter && parameter !== 0) return "";
              return new URLSearchParams(location.search).get(parameter) ?? "";
            case "function":
              return parameter();
            default:
              return "";
          }
        } catch (e) {
          ERROR("getUrlParam:", e.message);
          return "";
        }
      }

      function versionCompare(current, compare) {
        try {
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
        } catch (e) {
          return true;
        }
      }

      /* ANTIREDIRECT_FUNCTIONS */

      function parsingAntiRedirect(selectors, siteName, options) {
        if (!options) return;
        const selectorArray = selectors.split(/,(?![^()]*\))/g);
        const queryString = selectorArray.map(item => item + ":not([href^='javascript:' i]):not([href^='#']):not([gd-depurate-status],[gd-antiredirect-status])").join(",");
        const aNodes = qA(queryString);
        if (aNodes.length === 0) return;
        COUNT(`[${siteName}-Anti-Redirect]`);
        const { useNewTab, forceNewTab, cleanAttributes, removeDataSet, useAdvancedAntiRedirect } = options;
        let taskList = [];
        aNodes.forEach(node => {
          if (useAdvancedAntiRedirect === true) {
            node.setAttribute("gd-antiredirect-status", "pending");
            let task = advancedAntiRedirection(siteName, node, () => Promise.resolve(NaN));
            if (typeof task === "function") taskList.push(task);
          }
          if (useNewTab === true) {
            node.onmouseover = () => node.setAttribute("target", "_blank");
            if (forceNewTab === true) {
              node.onclick = e => {
                e.preventDefault();
                GMopenInTab(node.href, false);
                e.stopImmediatePropagation();
              };
            }
            node.setAttribute("gd-depurate-status", true);
          }
          if (Array.isArray(cleanAttributes) && cleanAttributes.length > 0) {
            cleanAttributes.forEach(item => node.removeAttribute(item));
            node.setAttribute("gd-depurate-status", true);
          }
          if (removeDataSet === true) {
            const dataSetKeys = Object.keys(node.dataset);
            dataSetKeys.forEach(ds => delete node.dataset[ds]);
            node.setAttribute("gd-depurate-status", true);
          }
        });
        parallelTasks(taskList, 6);
      }

      function fetchData(url, resolve, reject, readystate, error, timeout) {
        GMxmlhttpRequest({
          url: url,
          headers: { Accept: "*/*", Referer: location.origin.replace(/^http:/i, "https:") },
          method: "GET",
          timeout: fetchTimeout,
          onreadystatechange: readystate(resolve, reject),
          onerror: error(reject, resolve),
          ontimeout: timeout(reject),
        });
      }

      function getRealUrl(url, node, name, { onreadystatechangeFunc, onerrorFunc, ontimeoutFunc }) {
        return new Promise((resolve, reject) => {
          if (cachedRequestLinks.has(url)) {
            reject(new RangeError("DuplicateLinksError"));
            return;
          }
          cachedRequestLinks.set(url, null);
          fetchData(url, resolve, reject, onreadystatechangeFunc, onerrorFunc, ontimeoutFunc);
        })
          .then(res => {
            DEBUG(res);
            cachedRequestLinks.set(url, res);
            setRealLink(node, res);
            IS_DEBUG && node.classList.remove(def.const.loading);
          })
          .catch(e => {
            if (["URLBrokenError", "TimeoutError", "URLNotExistError", "ResponseError"].includes(e?.message)) cachedRequestLinks.set(url, url);
            if (e?.message === "DuplicateLinksError") {
              const attemptToFindCacheLink = setInterval(() => {
                const getcachedRealLinks = cachedRequestLinks.get(url);
                if (getcachedRealLinks === null) return;
                if (getcachedRealLinks === url) {
                  setErrorLink(node);
                  IS_DEBUG && node.classList.remove(def.const.loading);
                  clearInterval(attemptToFindCacheLink);
                } else {
                  DEBUG("Duplicate Links:", { node, url: getcachedRealLinks });
                  setRealLink(node, getcachedRealLinks);
                  IS_DEBUG && node.classList.remove(def.const.loading);
                  clearInterval(attemptToFindCacheLink);
                }
              }, 5e2);
              return;
            }
            setErrorLink(node);
            IS_DEBUG && node.classList.remove(def.const.loading);
            ERROR("antiRedirect_%s: %s %O", name, e?.message, { Node: node, Text: node.textContent, URL: node.href });
          });
      }

      function setRealLink(node, url) {
        node.href = url;
        IS_REAL_WEBKIT && node.setAttribute("title", url);
        node.setAttribute("gd-antiredirect-status", "success");
      }

      function setErrorLink(node) {
        node.classList.add(def.notice.linkerror);
        node.setAttribute("gd-antiredirect-status", "failed");
        node.setAttribute("title", `${isChinese ? "目前来看，此链接已无法正常访问。" : "At present, this link is no longer accessible."}`);
      }

      function parallelTasks(tasks, maxCount = 3) {
        return new Promise(resolve => {
          if (tasks.length === 0) {
            resolve();
            return;
          }
          let currentIndex = 0;
          let finishedCount = 0;
          const taskCount = Math.min(maxCount, tasks.length);
          for (let i = 0; i < taskCount; i++) {
            doTask();
          }

          function doTask() {
            const task = tasks[currentIndex];
            currentIndex++;
            task().then(s => {
              finishedCount++;
              if (currentIndex < tasks.length) {
                doTask();
              } else if (finishedCount === tasks.length) {
                resolve();
                IS_DEBUG && deBounce({ fn: __console, delay: 1e3, timer: "doTask" })(`doTask`, `(${s ?? cachedRequestLinks.size}) Task Done!`);
              }
            });
          }
        });
      }

      function reportIDMHijacking() {
        __console(
          "warn",
          isChinese
            ? "PDF文件下载警告:\r\nInternet Download Manager (IDM) 等下载器的劫持可能会造成文件被直接下载。"
            : "PDF File Download Warning:\r\nHijacking of downloaders such as Internet Download Manager (IDM) may cause files to be downloaded directly."
        );
      }

      function rejectResponse(response, resolve, reject, url) {
        const resUrl = response.finalUrl || response.responseURL || url;
        if (/^20[1-8]$/.test(response.status)) {
          if (response.statusText === "Intercepted by the IDM Advanced Integration") reportIDMHijacking();
          resolve(resUrl);
        } else if (response.status !== 0) {
          if (resUrl === url) reject(new Error("ResponseError"));
          else resolve(resUrl);
        }
      }

      function advancedAntiRedirection(siteName, node, task) {
        const url = node?.href?.replace(/^http:/i, "https:");
        if (!url) return;
        if (IS_DEBUG) node.classList.add(def.const.loading);
        switch (siteName) {
          case "Baidu":
            task = () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resUrl = response.finalUrl || response.responseURL || url;
                    resolve(resUrl);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: (reject, resolve) => e => {
                  if (e.error?.includes("Request was redirected to a not whitelisted URL")) {
                    const realUrl = e.error?.toString().match(/Refused to connect to "([^"]*)"/)?.[1];
                    if (!realUrl || realUrl.includes("www.baidu.com/search/error")) reject(new Error("URLNotExistError"));
                    if (realUrl.toUpperCase().endsWith(".PDF")) reportIDMHijacking();
                    resolve(realUrl);
                  } else {
                    const responseHeader = e.responseHeaders?.match(/Location:\s*([\S]+)/);
                    if (responseHeader) {
                      resolve(responseHeader[1]);
                    } else {
                      const realURL = e.finalUrl;
                      if (realURL && realURL !== url) {
                        resolve(realURL);
                      } else {
                        reject(new Error("URLBrokenError"));
                      }
                    }
                  }
                },
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              });
            break;
          case "Bing":
            task = () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/var\s+u\s*=\s*"([^"]+)"\s*;\s*\r\n/i);
                    res = res ? res[1] : resUrl;
                    resolve(res);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              });
            break;
          case "Sogou":
            task = () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/URL\s*=\s*'([^']+)'/);
                    res = res ? res[1] : resUrl;
                    resolve(res);
                  } else {
                    rejectResponse(response, resolve, reject, url);
                  }
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              });
            break;
          case "So360":
            if (node.hasAttribute("data-mdurl")) {
              const realURL = node.dataset.mdurl;
              setRealLink(node, realURL), DEBUG("mdurl:", realURL);
              IS_DEBUG && node.classList.remove(def.const.loading);
            } else {
              task = () =>
                getRealUrl(url, node, "So360", {
                  onreadystatechangeFunc: (resolve, reject) => response => {
                    if (response.readyState !== 4) return;
                    if (response.status === 200) {
                      const resText = response.responseText || response.response || "";
                      const resUrl = response.finalUrl || response.responseURL || url;
                      let res = resText.match(/URL\s*=\s*'([^']+)'/);
                      res = res ? res[1] : resUrl;
                      resolve(res);
                    } else {
                      rejectResponse(response, resolve, reject, url);
                    }
                  },
                  onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                  ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
                });
            }
            break;
          case "Toutiao":
            if (url) {
              let realUrl = url.match(/\/search\/jump\?url=([^&]+)&/);
              realUrl = realUrl ? decodeURI(decodeURIComponent(realUrl[1])) : url;
              setRealLink(node, realUrl), DEBUG(realUrl);
              IS_DEBUG && node.classList.remove(def.const.loading);
            }
            break;
        }
        return task;
      }

      /* ANTIADS_FUNCTIONS */

      function parseAntiAdvertising({ selectors, siteName, isRemoveNodes }) {
        if (selectors && typeof selectors === "string") {
          if (!qS(`style#${def.const.rndadvName}`, document.head)) {
            COUNT(`[${siteName}-Anti-Ads]`);
            const cssText = `:root :is(${selectors}){display:none!important}`;
            addStyle({ target: document.head, styleId: def.const.rndadvName, media: "all", styleContent: cssText });
          }
          if (isRemoveNodes === true) qA(selectors).forEach(node => safeRemove(node));
        }
        AdvancedAntiAdvertising(siteName, isRemoveNodes);
      }

      function AdvancedAntiAdvertising(siteName, clean) {
        switch (siteName) {
          case "Google":
            if (qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])>div[id^='eob']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])").forEach(node => {
                if (qS("div[id^='eob']", node)) {
                  node.classList.add(def.const.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
            break;
          case "Bing":
            if (CUR_HOST_NAME.startsWith("www.")) return;
            if (qA("li.b_algo:not([style*='display:none']) .b_caption>div.b_attribution:not([u])+p[class]").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("li.b_algo").forEach(node => {
                if (qS(".b_caption>div.b_attribution:not([u])+p[class]", node)) {
                  node.classList.add(def.const.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
            break;
          case "Yandex":
            qS(`button.Button2.Button2_view_clear`)?.click();
            qA("button.DistrSplashscreen-DeclineButton,button.MessageBox-Close,button.PromotionIncut-Close,span.popup2__close-icon").forEach(item => item.click());
            if (qS(".serp-adv__counter")) {
              const rightside_Ads = qS(".serp-adv__counter").nextElementSibling;
              qS(".serp-adv__counter")?.classList.add(def.const.disappear);
              rightside_Ads?.className !== "serp-adv__found" && rightside_Ads?.classList.add(def.const.disappear);
            }
            if (qA("li.serp-item.serp-item_card div.Organic-Subtitle>span.LabelDirect,li.serp-item.serp-item_card span.LabelDirect.DirectLabel").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              const match_Ads_Style_Yandex = str => {
                const ad_Selector = qS(str);
                const ad_Match_Filter = ad_Selector?.textContent?.match(/\.LabelDirect\.DirectLabel_[a-z]+\[class\]\[class\]\s*{\s*background-image:\s*url\(([^)]+)\);?\s*}/);
                return ad_Match_Filter?.[1] ?? "no-ads-icon";
              };
              const ad_Matched_Moz = match_Ads_Style_Yandex(`body>style[nonce][data-stylesheet="bundles-assets"]`);
              const ad_Matched = match_Ads_Style_Yandex(`#search-result>style[nonce][data-stylesheet="bundles-assets"]`);
              COUNT(`[${siteName}-Anti-Ads-Deep]`);
              qA("li.serp-item.serp-item_card,#search-result-aside div.serp-list>div.serp-item").forEach(node => {
                const ads_Detect = qS("span.LabelDirect", node);
                const ads_Detect_Moz = qS("div.Organic-Subtitle>span.LabelDirect", node);
                const ads_Detect_Txt = qS("div.Organic-Subtitle", node);
                const styleState = gCS(ads_Detect, "background-image");
                const styleState_Moz = gCS(ads_Detect_Moz, "background-image");
                if (
                  ads_Detect_Txt?.textContent?.toLocaleLowerCase().includes("\u0440\u0435\u043a\u043b\u0430\u043c\u0430") ||
                  ads_Detect?.textContent?.toLocaleLowerCase().includes("\u0440\u0435\u043a\u043b\u0430\u043c\u0430") ||
                  ads_Detect_Txt?.textContent?.toLowerCase().includes("ad") ||
                  ads_Detect?.textContent?.toLowerCase().includes("ad") ||
                  styleState?.includes(ad_Matched) ||
                  styleState_Moz?.includes(ad_Matched_Moz)
                ) {
                  node.classList.add(def.const.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
            break;
          case "So360":
            if (qA("ul.section>li span.txt>s, ul.result>li>div.res-recommend-tag").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("ul.section>li,ul.result>li").forEach(node => {
                const ads = qS("span[class='txt']>s", node);
                if (ads?.textContent?.includes("\u5e7f\u544a") || qS("div.res-recommend-tag", node)) {
                  node.classList.add(def.const.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
            break;
          case "You":
            qS("button[aria-label='Close button']")?.click();
            if (qA("ul[data-testid='web-results'] div>div>span[class^='sc-']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("ul[data-testid='web-results']>li").forEach(node => {
                const ads = qS("div>div>span[class^='sc-']", node);
                if (ads?.textContent?.toLowerCase().includes("ad")) {
                  node.classList.add(def.const.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
            break;
          case "Yahoo":
            qS(".browserExtensionPromotionWrapper a.btn.notnow")?.click();
            break;
          case "Ecosia":
            qS("button.banner__close[data-test-id='banner-close'][aria-label='Close']")?.click();
            if (IS_REAL_BLINK) {
              qS(`header form input.search-form__input`)?.addEventListener("blur", event => {
                event.preventDefault();
                event.stopImmediatePropagation();
              });
            }
            break;
          default:
            break;
        }
      }

      ~(async function setSearchEngineConfig(checkAutoUpdate, fetchRemoteIcon, getResultFilterData) {
        const _filter_Data = await getResultFilterData();
        const antiResultsFilter = _filter_Data.trigger;
        const resultFilters = _filter_Data.filter;
        const selectedSite = [];
        const listSite = {
          baidu: {
            SiteTypeID: 1,
            SiteName: isChinese ? "百度一下" : "𝐁𝐚𝐢𝐝𝐮",
            SiteNick: isChinese ? "百度 搜索" : "𝐁𝐚𝐢𝐝𝐮.𝐜𝐨𝐦",
            SiteURI: "www.baidu.com",
            WebURL: "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=",
            ImgURL: "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=",
            IMGType: ["baiduimage", "baiduimagedetail"],
            SplitName: "tn",
            MainType: ".s_btn_wr",
            StyleCode: `a,a em{text-decoration:none!important}:not([class^="page-inner"])>a:not(.${def.notice.linkerror}):hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin:0 0 0 4px;padding:0;height:40px;vertical-align:top;line-height:40px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:40px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:10px;border-top-left-radius:10px;background:#4e6ef2;color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:40px;min-width:100px;border:1px solid transparent;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#4e6ef2;color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background: #4662d9;border:1px solid transparent;}`,
            ResultList: { qs: `#content_left>div.c-container[tpl]:not([tpl='recommend_list'],[tpl^="rel-"])`, delay: 10 },
            KeyStyle: "#wrapper_wrapper em,.c-gap-top-small b",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "baidu_ar" })(".c-container a[href*='//www.baidu.com/link?url=']", "Baidu", {
                useNewTab: true,
                removeDataSet: true,
                useAdvancedAntiRedirect: true,
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "baidu_ad", immed: true })({
                selectors: `#s-hotsearch-wrapper,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad,div[class^='result-op'][tpl='right_tabs'][data-click],div[class^='result-op'][tpl='right_links'][data-click],#searchTag,#content_left>div.c-container[tpl="recommend_list"],#con-ar div[tpl="right_recommends_merge"]`,
                siteName: "Baidu",
                isRemoveNodes: true,
              });
            },
          },
          google: {
            SiteTypeID: 2,
            SiteName: "𝐆𝐨𝐨𝐠𝐥𝐞",
            SiteNick: isChinese ? "𝐆𝐨𝐨𝐠𝐥𝐞 搜索" : "𝐆𝐨𝐨𝐠𝐥𝐞.𝐜𝐨𝐦",
            SiteURI: "www.google.com",
            WebURL: "https://www.google.com/search?source=hp&safe=off&filter=0&newwindow=1&q=",
            ImgURL: "https://www.google.com/search?source=lnms&tbm=isch&sa=X&safe=off&filter=0&q=",
            IMGType: ["isch"],
            SplitName: "tbm",
            MainType: "form button[type='submit']",
            StyleCode: `#${def.const.rndButtonID}{position:relative;z-index:100;display:flex;margin:0 4px 0 -5px;justify-content:center;align-items:center}#${def.const.rndButtonID} #${def.const.leftButton}{padding:0 2px 0 8px}.${def.const.scrollspan}{min-height:26px}.${def.const.scrollspan2}{min-height:26px;margin-top:0!important}.${def.const.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${def.const.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:38px;min-width:90px;border:1px solid transparent;border-bottom-left-radius:24px;border-top-left-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:600;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:38px;min-width:90px;border:1px solid transparent;border-top-right-radius:24px;border-bottom-right-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:600;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#1b66c9;}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background:#8ab4f8;box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.3);color:#202124}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#93baf9}}`,
            ResultList: { qs: `div[eid][data-async-context] div.MjjYud,div[eid][data-async-context] div.hlcw0c`, delay: 10 },
            KeyStyle: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "google_ar" })("#rcnt div[eid][data-async-context] div.MjjYud :not([jsname='MgN2vf'])>a", "Google", {
                useNewTab: true,
                forceNewTab: true,
                cleanAttributes: ["ping"],
                removeDataSet: true,
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "google_ad", immed: true })({
                selectors: `div[aria-label='\u5e7f\u544a'],div[aria-label='Ads' i],#bottomads,#tvcap`,
                siteName: "Google",
              });
            },
          },
          bing: {
            SiteTypeID: 3,
            SiteName: "𝐁𝐢𝐧𝐠 ®",
            SiteNick: isChinese ? "𝐁𝐢𝐧𝐠 搜索" : "𝐁𝐢𝐧𝐠.𝐜𝐨𝐦",
            SiteURI: "www.bing.com",
            WebURL: "https://www.bing.com/search?hta=off&rdr=1&q=",
            ImgURL: "https://www.bing.com/images/search?hta=off&first=1&tsc=ImageBasicHover&q=",
            IMGType: ["images"],
            SplitName: { str: "/", index: 1 },
            MainType: `.b_searchboxForm>input[type="hidden"][name="form"]`,
            StyleCode: `#miniheader #miniheader_searchbox #sb_form_q{width:400px}a,#b_results>li[class] a,#b_results .b_no a{color:#001ba0}#${def.const.rndButtonID}{position:relative;z-index:0;display:inline-flex;margin:0;padding:0 6px 0 0;width:auto;height:38px;min-width:180px;vertical-align:middle;justify-content:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{margin:0;padding:0;width:auto}#${def.const.rndButtonID} input{box-sizing:border-box;height:38px;min-width:90px;border:1px solid #174ae4;background-color:#f7faff;color:#174ae4;font-weight:600;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px;border-bottom-left-radius:24px;border-top-left-radius:24px}#${def.const.rightButton} input{margin:0 0 0 2px;padding:0 18px 0 12px;border-top-right-radius:24px;border-bottom-right-radius:24px}.${def.const.scrollspan}{margin:-14px -3px 0 0!important;max-height:28px}.${def.const.scrollbars}{max-height:28px;font-size:14px!important}.${def.const.scrollspan2}{margin:0!important;padding:4px 4px 0 8px!important;max-height:30px;vertical-align:top!important}.${def.const.scrollbars2}{margin-right:0!important;padding:0 12px!important;max-height:30px;border-radius:4px!important;vertical-align:top!important}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fff;background-color:#f0f3f6;box-shadow:0 0 4px #174ae4;color:#174ae4;transition:border .1s linear,box-shadow .3s linear}.${def.notice.random}_input{width:300px!important}@media (prefers-color-scheme: dark){.b_dark #b_results>li[class] a{color:#7aabeb}#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #a2b7f4;background:transparent;color:#a2b7f4}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#a2b7f4;color:#333}}`,
            ResultList: {
              qs: `#b_results>li.b_algo:not(.b_algoBorder,.b_topborder),#b_results>li.b_vidAns .mmlist>div[id],#b_results>li.b_mop .b_slidebar>div.slide`,
              delay: 10,
            },
            KeyStyle: String(
              Number(getUrlParam("ensearch")) || Number(w.gbCookies.getItem("ENSEARCH")?.match(/[=](\d)/)?.[1])
                ? "strong,.b_no h4,.b_strong,.b_ad .b_adlabel strong,.cbl"
                : "#sp_requery strong,#sp_recourse strong,.sb_adTA_title_link_cn strong,.b_ad .ad_esltitle~div strong,h2 strong,#b_results .b_algo p strong,.b_caption p strong,.b_snippetBigText strong,.recommendationsTableTitle+.b_slideexp strong,.recommendationsTableTitle+table strong,.recommendationsTableTitle+ul strong,.pageRecoContainer .b_module_expansion_control strong,.pageRecoContainer .b_title>strong,.b_rs strong,.b_rrsr strong,.richrswrapper strong,#dict_ans strong,.b_listnav>.b_ans_stamp>strong,#b_content #ans_nws .na_cnt strong,.b_vidAns strong,.adltwrnmsg strong"
            ),
            AntiRedirect: function () {
              GMunsafeWindow.AwayTimeScrollTopPoleRS = false;
              GMunsafeWindow.AwayTimeThreshold = 864000;
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "bing_ar" })("#b_content a[href*='.bing.com/ck/a?']:not([role='button'])", "Bing", {
                useNewTab: true,
                cleanAttributes: ["h"],
                useAdvancedAntiRedirect: true,
              });
              deBounce({ fn: parsingAntiRedirect, delay: 30, timer: "bing_ar_cn" })(
                "#b_results>li:not(.b_pag,#mfa_root) a:not([role='button']):not([href*='.bing.com/ck/a?'])",
                "Bing",
                { useNewTab: true, cleanAttributes: ["h"] }
              );
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "bing_ad", immed: true })({
                selectors: `li.b_ans>div.wpt_bc_container,li.b_ans>#relatedSearchesLGWContainer,li.b_ans>.b_rs,li.b_ad,#b_pole,#b_content .b_underSearchbox,#b_header>div[id^='bnp.'][data-vertical],#b_context li.b_ans .b_spa_adblock,.ad_sc,.b_adBottom,.b_adLastChild,.b_adPATitleBlock,.b_spa_adblock,.mapsTextAds,.pa_sb,.productAd,[id$="adsMvCarousel"],a[href*="/aclick?ld="],div.pagereco_anim,#inline_rs,#ev_talkbox_wrapper`,
                siteName: "Bing",
                isRemoveNodes: true,
              });
            },
          },
          duckduckgo: {
            SiteTypeID: 4,
            SiteName: "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨",
            SiteNick: isChinese ? "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨 搜索" : "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨",
            SiteURI: "duckduckgo.com",
            WebURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=1&kn=1&kp=-2&t=h_&ia=web&q=",
            ImgURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=s&kn=1&kp=-2&t=h_&iax=images&ia=images&q=",
            IMGType: ["images"],
            SplitName: "ia",
            MainType: "#search_form",
            StyleCode: `#${def.const.rndButtonID}{position:absolute;top:0;right:-188px;z-index:1999999995;display:block;height:44px}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-bottom-left-radius:var(--default-border-radius);border-top-left-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-top-right-radius:var(--default-border-radius);border-bottom-right-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rndButtonID}:hover #${def.const.leftButton} input,#${def.const.rndButtonID}:hover #${def.const.rightButton} input{background-color:var(--theme-col-bg-button-secondary-hover);color:#999;}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #2950bf;background-color:#2950bf!important;color:#fff!important}`,
            ResultList: { qs: `ol.react-results--main>li[data-layout="organic"],ol.react-results--main>li[data-layout="videos"] div.module--carousel__item`, delay: 10 },
            KeyStyle: "strong, b",
            AntiRedirect: null,
            AntiAds: null,
          },
          sogou: {
            SiteTypeID: 5,
            SiteName: isChinese ? "搜狗搜索" : "𝐒𝐨𝐠𝐨𝐮",
            SiteNick: isChinese ? "搜狗 搜索" : "𝐒𝐨𝐠𝐨𝐮.𝐜𝐨𝐦",
            SiteURI: "www.sogou.com",
            WebURL: "https://www.sogou.com/web?query=",
            ImgURL: "https://pic.sogou.com/pics?query=",
            IMGType: ["pics", "d"],
            SplitName: { str: "/", index: 1 },
            MainType: "input[type='submit'].sbtn1,input[type='button'][uigs='search_article'],input[type='submit'].search-btn",
            StyleCode: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;margin:-1px 0 0;padding:0;width:auto;height:34px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline;height:34px}#${def.const.rightButton}{display:inline;height:34px}#${def.const.leftButton} input{margin:0;padding:0 18px!important;height:34px;min-width:100px;border:1px solid #ababab;border-radius:3px;background:#fafafa;color:#000;vertical-align:top;font-weight:400;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px!important;height:34px;min-width:100px;border:1px solid #ababab;border-radius:3px;background:#fafafa;color:#000;vertical-align:top;font-weight:400;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #7a7a7a;background:#f2f2f2}.${def.notice.random}_weixin{border:1px solid #00a06a!important;border-radius:2px!important;background:#fff!important;color:#00a06a!important;font-size:15px!important}.${def.notice.random}_weixin:hover{background:#f7fffd!important}`,
            ResultList: { qs: `div.results>div.vrwrap,div.results>div.rb`, delay: 10 },
            KeyStyle: "#wrapper em",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "sogou_ar" })("#wrapper a[href^='/link?url=']:not([uigs])", "Sogou", {
                useNewTab: true,
                useAdvancedAntiRedirect: true,
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "sogou_ad", immed: true })({
                selectors: `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~='ext_query'][id*='sq_ext_'],div.top-better-hintBox,#right>div.rvr-model:not([tpl])`,
                siteName: "Sogou",
                isRemoveNodes: true,
              });
            },
          },
          wuzhuiso: {
            SiteTypeID: 6,
            SiteName: isChinese ? "无追搜索" : "𝐖𝐮𝐳𝐡𝐮𝐢𝐬𝐨",
            SiteNick: isChinese ? "无追 搜索" : "𝐖𝐮𝐳𝐡𝐮𝐢𝐬𝐨.𝐜𝐨𝐦",
            SiteURI: "www.wuzhuiso.com",
            WebURL: "https://www.wuzhuiso.com/s?src=tab_www&fr=none&q=",
            ImgURL: "https://www.wuzhuiso.com/s?a=image&src=tab_www&fr=none&q=",
            IMGType: ["image"],
            SplitName: "a",
            MainType: "#searchbox span.round>input[type='submit']",
            StyleCode: `#${def.const.rndButtonID}{position:absolute;left:100%;z-index:1999999995;display:inline-flex;margin:0 0 0 8px;height:46px;justify-content:center;align-items:center}#${def.const.rightButton}{padding:0 0 0 2px}#${def.const.leftButton} input{padding:1px 12px 1px 18px!important;height:46px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:23px;border-top-left-radius:23px;background:linear-gradient(270deg,#3f69fd,#2a8cf5);box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:17px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{padding:1px 18px 1px 12px!important;height:46px;min-width:100px;border:1px solid transparent;border-top-right-radius:23px;border-bottom-right-radius:23px;background:linear-gradient(270deg,#3f69fd,#2a8cf5);box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:17px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#2d52d1}`,
            ResultList: { qs: `#main ul.result>li.res-list`, delay: 10 },
            KeyStyle: ".result em,.res-list .g-linkinfo b",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 50, timer: "wuzhuiso_ar" })("ul.result>li.res-list a", "Wuzhuiso", { removeDataSet: true });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "wuzhuiso_ad", immed: true })({
                selectors: `#header div.holder>div.tools,ul.result>li.extension-tip,#side>div.right-tip,#side>div.download-browser`,
                siteName: "Wuzhuiso",
                isRemoveNodes: true,
              });
            },
          },
          yandex: {
            SiteTypeID: 7,
            SiteName: "𝐘𝐚𝐧𝐝𝐞𝐱",
            SiteNick: isChinese ? "𝐘𝐚𝐧𝐝𝐞𝐱 搜索" : "𝐘𝐚𝐧𝐝𝐞𝐱.𝐜𝐨𝐦",
            SiteURI: "yandex.com",
            WebURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/search/?text=`,
            ImgURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/images/search?from=tabbar&family=no&text=`,
            IMGType: ["images"],
            SplitName: { str: "/", index: 1 },
            MainType: "form>div.search2__input,form>div.HeaderDesktopForm-InputWrapper",
            StyleCode: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;margin:0;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{padding:1px 12px 0 18px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:10px;border-top-left-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{padding:1px 18px 0 12px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#ffd633}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background-color:#fdde55}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fdc93d}}`,
            ResultList: { qs: `#search-result>li.serp-item:not([data-fast-name="images"])`, delay: 10 },
            KeyStyle: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yandex_ar" })("#search-result>li.serp-item a", "Yandex", {
                useNewTab: true,
                removeDataSet: true,
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "yandex_ad", immed: true })({
                selectors: `div[tabindex][class*='location_right-bottom'],a.HeaderDesktopActions-MarketCart,span.distr-nav,div.market-cart`,
                siteName: "Yandex",
                isRemoveNodes: true,
              });
            },
          },
          so360: {
            SiteTypeID: 8,
            SiteName: isChinese ? "𝟑𝟔𝟎搜索" : "𝟑𝟔𝟎𝐬𝐨",
            SiteNick: isChinese ? "𝟑𝟔𝟎 搜索" : "𝐰𝐰𝐰.𝐬𝐨.𝐜𝐨𝐦",
            SiteURI: "www.so.com",
            WebURL: "https://www.so.com/s?ie=utf-8&q=",
            ImgURL: "https://image.so.com/i?q=",
            IMGType: ["i", "view"],
            SplitName: { str: "/", index: 1 },
            MainType: "input[type='submit'][value='搜索'],button[type='submit'][class~='so-search__button']",
            StyleCode: `#${def.const.rndButtonID}{position:relative;top:0;left:0;z-index:199999995;margin:0 0 0 5px;padding:0;width:auto;height:40px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;padding:0 1px 0 0;height:40px;vertical-align:top}#${def.const.rightButton}{display:inline-block;height:40px;vertical-align:top}#${def.const.leftButton} input{margin:0 -2px 0 0;padding:0 18px!important;height:40px;min-width:100px;border:1px solid #0fb264;border-bottom-left-radius:8px;border-top-left-radius:8px;background:#0fb264;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px!important;height:40px;min-width:100px;border:1px solid #0fb264;border-top-right-radius:8px;border-bottom-right-radius:8px;background:#0fb264;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #109e5a;background:#109e5a}`,
            ResultList: { qs: `ul.result>li.res-list`, delay: 10 },
            KeyStyle: "em,#mohe-newdict_dict .mh-exsentence b",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "so360_ar" })(".res-list a[href*='//www.so.com/link?m=']", "So360", {
                useNewTab: true,
                removeDataSet: true,
                useAdvancedAntiRedirect: true,
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "so360_ad", immed: true })({
                selectors: `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,[class='inline-recommend'][data-url],div#so_top,div#so-activity-entry,div.mh-relate-text,.section li[data-id^="related_query_init_"]`,
                siteName: "So360",
                isRemoveNodes: true,
              });
            },
          },
          toutiao: {
            SiteTypeID: 9,
            SiteName: isChinese ? "搜头条" : "𝐓𝐨𝐮𝐭𝐢𝐚𝐨",
            SiteNick: isChinese ? "头条 搜索" : "𝐬𝐨.𝐭𝐨𝐮𝐭𝐢𝐚𝐨.𝐜𝐨𝐦",
            SiteURI: "so.toutiao.com",
            WebURL: "https://so.toutiao.com/search?dvpf=pc&keyword=",
            ImgURL: "https://so.toutiao.com/search?dvpf=pc&pd=atlas&from=gallery&keyword=",
            IMGType: ["atlas"],
            SplitName: "pd",
            MainType: "div[class^='search'][data-log-click]",
            StyleCode: `#${def.const.rndButtonID}{position:absolute;top:0;right:-160px;z-index:1999999995;margin:-1px;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:8px;border-top-left-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:8px;border-bottom-right-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:rgba(240,65,66,.7);color:#fff}`,
            ResultList: { qs: `div.s-result-list>div.result-content[data-i]`, delay: 10 },
            KeyStyle: "em",
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "toutiao_ar" })(".main a[href*='/search/jump?url=']", "Toutiao", {
                useNewTab: true,
                useAdvancedAntiRedirect: true,
              });
            },
            AntiAds: null,
          },
          kaifa: {
            SiteTypeID: 10,
            SiteName: isChinese ? "百度开发者" : "𝐃𝐞𝐯.𝐁𝐢𝐚𝐝𝐮",
            SiteNick: isChinese ? "百度开发者 搜索" : "𝐃𝐞𝐯.𝐁𝐢𝐚𝐝𝐮",
            SiteURI: "kaifa.baidu.com",
            WebURL: "https://kaifa.baidu.com/searchPage?module=SEARCH&wd=",
            ImgURL: "https://kaifa.baidu.com/searchPage?module=SUG&wd=",
            IMGType: [null],
            SplitName: "",
            MainType: "div#search-box-container .ant-input-group-addon",
            StyleCode: `.ant-input-group-addon{background:transparent!important}#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin-left:4px;height:40px;vertical-align:bottom}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:40px;min-width:100px;border:1px solid var(--ee-brand-6);border-bottom-left-radius:10px;border-top-left-radius:10px;background:var(--ee-brand-6);color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:40px;min-width:100px;border:1px solid var(--ee-brand-6);border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--ee-brand-6);color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid var(--ee-brand-5);background:var(--ee-brand-5)}`,
            ResultList: { qs: `ul.ant-list-items>li.ant-list-item`, delay: 10 },
            KeyStyle: "mark",
            AntiRedirect: null,
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "kaifa_ad", immed: true })({
                selectors: `#reward-entry`,
                siteName: "Kaifa",
                isRemoveNodes: true,
              });
            },
          },
          ecosia: {
            SiteTypeID: 11,
            SiteName: "𝐄𝐜𝐨𝐬𝐢𝐚",
            SiteNick: isChinese ? "𝐄𝐜𝐨𝐬𝐢𝐚 搜索" : "𝐄𝐜𝐨𝐬𝐢𝐚.𝐨𝐫𝐠",
            SiteURI: "www.ecosia.org",
            WebURL: "https://www.ecosia.org/search?method=index&q=",
            ImgURL: "https://www.ecosia.org/images?q=",
            IMGType: ["images"],
            SplitName: { str: "/", index: 1 },
            MainType: "form[role='search'][class~='search-form'][data-test-id='main-header-search-form']",
            StyleCode: `#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin-left:-12px;height:40px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:40px;min-width:100px;border:1px solid var(--color-form-border-default);border-bottom-left-radius:20px;border-top-left-radius:20px;background:var(--color-background-primary);box-shadow:0 1px 2px rgba(26,26,26,.18),0 0 8px rgba(26,26,26,.06);color:var(--color-button-content-tertiary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:40px;min-width:100px;border:1px solid var(--color-form-border-default);border-top-right-radius:20px;border-bottom-right-radius:20px;background:var(--color-background-primary);box-shadow:0 1px 2px rgba(26,26,26,.18),0 0 8px rgba(26,26,26,.06);color:var(--color-button-content-tertiary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid var(--color-button-background-primary-hover);background:var(--color-button-background-primary-hover);color:var(--color-button-content-primary)}`,
            ResultList: {
              qs: `section.mainline>div>div[data-test-id="mainline-result-web"],div.mainline__result[data-test-id="videos-snippet"] ul>li[data-test-id="videos-snippet-item"]`,
              delay: Infinity,
            },
            KeyStyle: "",
            AntiRedirect: function () {
              deBounce({
                fn: option => {
                  if (w.gbCookies.getItem("ECFG")?.includes(":nt=1:")) return;
                  w.gbCookies.setItem(option);
                  location.reload();
                },
                timer: "ecosia_cookie",
                immed: true,
                once: true,
              })({
                sKey: "ECFG",
                sValue: `a=0:as=1:cs=0:dt=pc:f=i:fr=0:fs=1:l=en:lt=${Date.now()}:mc=zh-cn:nf=1:nt=1:pz=0:t=1:tt=0:tu=auto:wu=auto:ma=1`,
                sEnd: Infinity,
                sDomain: ".ecosia.org",
                sPath: "/",
                sSomeSite: "Lax",
              });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "ecosia_ad", immed: true })({
                selectors: `div.main-header__install-cta,div.main-footer__card-container,div.personal-counter__tooltip,div.cookie-wrapper`,
                siteName: "Ecosia",
              });
            },
          },
          yahoo: {
            SiteTypeID: 12,
            SiteName: "𝐘𝐚𝐡𝐨𝐨",
            SiteNick: isChinese ? "𝐘𝐚𝐡𝐨𝐨 搜索" : "𝐬𝐞𝐚𝐫𝐜𝐡.𝐘𝐚𝐡𝐨𝐨",
            SiteURI: "search.yahoo.com",
            WebURL: "https://search.yahoo.com/search?p=",
            ImgURL: "https://images.search.yahoo.com/search/images?p=",
            IMGType: ["images"],
            SplitName: () => location.hostname.split(".")[0],
            MainType: "#hd div.sbx form#sf,header.hd form#sf #sh section#sbx",
            StyleCode: `#${def.const.rndButtonID}{position:relative;position:absolute;z-index:1999999995;display:inline-block;margin-left:4px;width:max-content;height:44px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:2px 0;padding:1px 12px 1px 18px!important;height:44px;min-width:100px;border:2px solid transparent;border-bottom-left-radius:100px;border-top-left-radius:100px;background:#4285f5;color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:2px 0;padding:1px 18px 1px 12px!important;height:44px;min-width:100px;border:2px solid transparent;border-top-right-radius:100px;border-bottom-right-radius:100px;background:#4285f5;color:#fff;vertical-align:top;font-weight:600;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:2px solid transparent;background:#1967d2;color:#fff}`,
            ResultList: { qs: `#web>ol>li`, delay: 10 },
            KeyStyle: "strong",
            AntiRedirect: null,
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "yahoo_ad", immed: true })({
                selectors: `#main ol.searchCenterBottomAds,#main ol.searchCenterTopAds`,
                siteName: "Yahoo",
              });
            },
          },
          you: {
            SiteTypeID: 13,
            SiteName: "𝐘𝐨𝐮 ®",
            SiteNick: isChinese ? "𝐘𝐨𝐮 搜索" : "𝐘𝐨𝐮.𝐜𝐨𝐦",
            SiteURI: "you.com",
            WebURL: "https://you.com/search?fromSearchBar=true&q=",
            ImgURL: "https://you.com/search?fromSearchBar=true&tbm=isch&q=",
            IMGType: ["isch"],
            SplitName: "tbm",
            MainType: "button[data-testid='qb_submit_button']",
            StyleCode: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:-8px 0 0;height:36px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;height:44px;min-width:110px;border:1px solid #4a72f5;border-bottom-left-radius:12px;border-top-left-radius:12px;background-color:#4a72f5;color:#fff;vertical-align:top;font-weight:500;font-size:17px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;height:44px;min-width:110px;border:1px solid #4a72f5;border-top-right-radius:12px;border-bottom-right-radius:12px;background-color:#4a72f5;color:#fff;vertical-align:top;font-weight:500;font-size:17px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #7897fc;background-color:#7897fc;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #668aff;background-color:#668aff}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#7897fc;color:#3c3c3e;font-weight:600}}`,
            ResultList: {
              qs: `div[data-testid="app-mainline"]>div[data-eventappname][data-testid]>ul[data-testid="web-results"],div[data-testid="Github Issues-app"]>ul>li`,
              delay: 10,
            },
            KeyStyle: `div[data-testid="app-mainline"] p strong,div[data-testid="app-mainline"] p b`,
            AntiRedirect: function () {
              deBounce({
                fn: parameters => parameters.forEach(item => localStorage.setItem(item, true)),
                timer: "you_set",
                immed: true,
                once: true,
              })(["openLinksInNewTabs", "hasSeenP13nAnnouncement", "hasUserClosedExtensionModal"]);
            },
            AntiAds: null,
          },
          startpage: {
            SiteTypeID: 14,
            SiteName: "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞",
            SiteNick: isChinese ? "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞 搜索" : "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞.𝐜𝐨𝐦",
            SiteURI: "www.startpage.com",
            WebURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=web&query=`,
            ImgURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=images&query=`,
            IMGType: ["images"],
            SplitName: "cat",
            MainType: "#search-btn",
            StyleCode: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline-block;margin:-11px 4px 0 .5rem;height:20px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:30px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:0;height:30px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;height:30px;min-width:85px;border:0 solid transparent;border-bottom-left-radius:2rem;border-top-left-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;height:30px;min-width:85px;border:0 solid transparent;border-top-right-radius:2rem;border-bottom-right-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#6573ff;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.rightButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #6573ff;background:#6573ff}}`,
            ResultList: { qs: `section.w-gl>div.w-gl__result`, delay: 9e2 },
            KeyStyle: `.w-gl__result b`,
            AntiRedirect: function () {
              deBounce({
                fn: option => {
                  const cookies = w.gbCookies.getItem("preferences");
                  if (cookies?.includes("disable_open_in_new_windowEEE0") && cookies?.includes("enable_post_methodEEE0")) return;
                  w.gbCookies.setItem(option);
                  location.reload();
                },
                timer: "startpage_cookie",
                immed: true,
                once: true,
              })({
                sKey: "preferences",
                sValue: `connect_to_serverEEE0N1Ndate_timeEEEworldN1Ndisable_family_filterEEE1N1Ndisable_open_in_new_windowEEE0N1Nenable_post_methodEEE0N1Nenable_proxy_safety_suggestEEE1N1Nenable_stay_controlEEE0N1Ninstant_answersEEE1N1Nlang_homepageEEEs/device/enN1NlanguageEEEenglishN1Nlanguage_uiEEEenglishN1Nnum_of_resultsEEE10N1Nsearch_results_regionEEEallN1NsuggestionsEEE1N1Nwt_unitEEEcelsius`,
                sEnd: Infinity,
                sDomain: ".startpage.com",
                sPath: "/",
                sSecure: true,
              });
              deBounce({ fn: parsingAntiRedirect, timer: "startpage_ar", delay: 50 })("section.w-gl>div.w-gl__result a", "Startpage", { removeDataSet: true });
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "startpage_ad", immed: true })({
                selectors: `section.a-gl-tp,div.widget-install-legacy,div.mainline-results>div.block-display`,
                siteName: "Startpage",
              });
            },
          },
          brave: {
            SiteTypeID: 15,
            SiteName: "𝐁𝐫𝐚𝐯𝐞",
            SiteNick: isChinese ? "𝐁𝐫𝐚𝐯𝐞 搜索" : "𝐬𝐞𝐚𝐫𝐜𝐡.𝐁𝐫𝐚𝐯𝐞",
            SiteURI: "search.brave.com",
            WebURL: "https://search.brave.com/search?source=web&q=",
            ImgURL: "https://search.brave.com/images?source=web&spellcheck=0&q=",
            IMGType: ["images"],
            SplitName: { str: "/", index: 1 },
            MainType: "#submit-button",
            StyleCode: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:0;padding:5px 6px;height:100%;order:6}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:38px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:0px;height:38px}#${def.const.leftButton} input{margin:0;padding:4px 10px!important;height:35px;min-width:85px;border:0 solid transparent;border-bottom-left-radius:6px;border-top-left-radius:6px;background:var(--search-bgd-04);box-shadow:0 0 2px #a4a5bb;color:var(--color-primary);vertical-align:top;font-weight:600;font-size:14px!important;line-height:14px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:4px 10px!important;height:35px;min-width:85px;border:0 solid transparent;border-top-right-radius:6px;border-bottom-right-radius:6px;background:var(--search-bgd-04);box-shadow:0 0 2px #a4a5bb;color:var(--color-primary);vertical-align:top;font-weight:600;font-size:14px!important;line-height:14px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:var(--btn-filled-bg-hover);color:var(--color,#fff)}`,
            ResultList: { qs: `#results>div.snippet[data-type="web"]`, delay: 10 },
            KeyStyle: `.snippet-content strong`,
            AntiRedirect: function () {
              localStorage.setItem("app.discussionsIntroduced", true);
              deBounce({
                fn: option => {
                  if (w.gbCookies.getItem("olnt") === "1") return;
                  w.gbCookies.setItem(option);
                  location.reload();
                },
                timer: "brave_cookie",
                immed: true,
                once: true,
              })({ sKey: "olnt", sValue: "1", sEnd: Infinity, sDomain: "search.brave.com", sPath: "/", sSameSite: "Lax", sSecure: true });
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "brave_ar" })("#results>div#search-elsewhere a", "Brave", {
                useNewTab: true,
                forceNewTab: true,
                removeDataSet: true,
              });
            },
            AntiAds: null,
          },
          yep: {
            SiteTypeID: 16,
            SiteName: "𝐘𝐞𝐩 ®",
            SiteNick: isChinese ? "𝐘𝐞𝐩 搜索" : "𝐘𝐞𝐩.𝐜𝐨𝐦",
            SiteURI: "yep.com",
            WebURL: "https://yep.com/web?q=",
            ImgURL: "https://yep.com/images?q=",
            IMGType: ["images"],
            SplitName: { str: "/", index: 1 },
            MainType: `form div[class$="-addon"]`,
            StyleCode: `#${def.const.rndButtonID}{position:absolute;top:.5em;z-index:112;display:block;margin:-6px 0 0;padding:0;height:50px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:50px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:50px}#${def.const.leftButton} input{margin:0;padding:4px 15px 4px 25px!important;height:50px;min-width:95px;border:1px solid #f1dc1b;border-bottom-left-radius:25px;border-top-left-radius:25px;background:var(--background--brand);color:#333;vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:4px 25px 4px 15px!important;height:50px;min-width:95px;border:1px solid #f1dc1b;border-top-right-radius:25px;border-bottom-right-radius:25px;background:var(--background--brand);color:#333;vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:var(--background--brandHover)}`,
            ResultList: { qs: `div[class*='-results']>div>div>div[class*='-card']`, delay: 10 },
            KeyStyle: ``,
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yep_ar" })(
                "div[class*='-results']>div>div>div[class*='-card'] a,div[class*='-results']>div>div>div[class*='-block'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-newsIncut'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-container'] a",
                "Yep",
                { useNewTab: true, forceNewTab: true, cleanAttributes: ["referrerpolicy"] }
              );
            },
            AntiAds: null,
          },
          swisscows: {
            SiteTypeID: 17,
            SiteName: "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬",
            SiteNick: isChinese ? "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬 搜索" : "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬.𝐜𝐨𝐦",
            SiteURI: "swisscows.com",
            WebURL: "https://swisscows.com/en/web?query=",
            ImgURL: "https://swisscows.com/en/images?query=",
            IMGType: ["images"],
            SplitName: { str: "/", index: 2 },
            MainType: "form.form-search>button.search-submit",
            StyleCode: `#header .form-search{max-width:35em}#${def.const.rndButtonID}{position:absolute;top:.5em;z-index:112;display:block;margin:-6px 0 0;padding:0;height:2.5em}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:2.5em}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:2.5em}#${def.const.leftButton} input{margin:0;padding:4px 12px!important;height:2.6em;min-width:85px;border:1px solid #bfc8cd;border-bottom-left-radius:1.25em;border-top-left-radius:1.25em;background:transparent;box-shadow:0 0 2px #a4a5bb;color:#252b3b;vertical-align:middle;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:4px 12px!important;height:2.6em;min-width:85px;border:1px solid #bfc8cd;border-top-right-radius:1.25em;border-bottom-right-radius:1.25em;background:transparent;box-shadow:0 0 2px #a4a5bb;color:#252b3b;vertical-align:middle;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#edf0f3;color:#df5d5d}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #99a4ab;background:#252b3b;color:#99a4ab}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#353b3e;color:#df5d5d}}`,
            ResultList: { qs: `.web-results>article.item-web`, delay: 10 },
            KeyStyle: `.web-results b`,
            AntiRedirect: function () {
              deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "swisscows_ar" })(
                ".web-results>article.item-web a,.web-results>div.widget a:not(.widget-button)",
                "Swisscows",
                { useNewTab: true, forceNewTab: true }
              );
            },
            AntiAds: function () {
              deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "swisscows_ad", immed: true })({
                selectors: `#header :is(.badge-tg,.badge-vpn,.badge-email)`,
                siteName: "Swisscows",
              });
            },
          },
          other: { SiteTypeID: 0 },
        };

        const newSiteType = {
          BAIDU: listSite.baidu.SiteTypeID,
          GOOGLE: listSite.google.SiteTypeID,
          BING: listSite.bing.SiteTypeID,
          DUCKDUCKGO: listSite.duckduckgo.SiteTypeID,
          SOGOU: listSite.sogou.SiteTypeID,
          WUZHUISO: listSite.wuzhuiso.SiteTypeID,
          YANDEX: listSite.yandex.SiteTypeID,
          SO360: listSite.so360.SiteTypeID,
          TOUTIAO: listSite.toutiao.SiteTypeID,
          KAIFA: listSite.kaifa.SiteTypeID,
          ECOSIA: listSite.ecosia.SiteTypeID,
          YAHOO: listSite.yahoo.SiteTypeID,
          YOU: listSite.you.SiteTypeID,
          STARTPAGE: listSite.startpage.SiteTypeID,
          BRAVE: listSite.brave.SiteTypeID,
          YEP: listSite.yep.SiteTypeID,
          SWISSCOWS: listSite.swisscows.SiteTypeID,
          OTHERS: listSite.other.SiteTypeID,
        };

        const engineMap = {
          "^(w+\\.)?google\\.[a-z.]{2,6}$": { siteType: newSiteType.GOOGLE, site: listSite.google },
          "kaifa\\.baidu\\.com$": { siteType: newSiteType.KAIFA, site: listSite.kaifa },
          "\\.baidu\\.com$": { siteType: newSiteType.BAIDU, site: listSite.baidu },
          "\\.bing\\.com$": { siteType: newSiteType.BING, site: listSite.bing },
          "duckduckgo\\.com$": { siteType: newSiteType.DUCKDUCKGO, site: listSite.duckduckgo },
          "\\.sogou\\.com$": { siteType: newSiteType.SOGOU, site: listSite.sogou },
          "www\\.wuzhuiso\\.com$": { siteType: newSiteType.WUZHUISO, site: listSite.wuzhuiso },
          "yandex\\.com$": { siteType: newSiteType.YANDEX, site: listSite.yandex },
          "yandex\\.ru$": { siteType: newSiteType.YANDEX, site: listSite.yandex },
          "\\.so\\.com$": { siteType: newSiteType.SO360, site: listSite.so360 },
          "so\\.toutiao\\.com$": { siteType: newSiteType.TOUTIAO, site: listSite.toutiao },
          "www\\.ecosia\\.org$": { siteType: newSiteType.ECOSIA, site: listSite.ecosia },
          "search\\.yahoo\\.com$": { siteType: newSiteType.YAHOO, site: listSite.yahoo },
          "you\\.com$": { siteType: newSiteType.YOU, site: listSite.you },
          "startpage\\.com$": { siteType: newSiteType.STARTPAGE, site: listSite.startpage },
          "search\\.brave\\.com$": { siteType: newSiteType.BRAVE, site: listSite.brave },
          "yep\\.com$": { siteType: newSiteType.YEP, site: listSite.yep },
          "swisscows\\.com$": { siteType: newSiteType.SWISSCOWS, site: listSite.swisscows },
        };
        let allSiteURIs = "";
        let currentSite = listSite.other;
        let listCurrentSite = listSite.other;
        const hostname = location.hostname;

        for (const regex in engineMap) {
          if (new RegExp(regex).test(hostname)) {
            const { siteType, site } = engineMap[regex];
            currentSite = selectedEngine.includes(siteType) ? site : listSite.other;
            listCurrentSite = site;
            break;
          }
        }

        for (let site in listSite) {
          if (listSite.hasOwnProperty(site)) {
            if (listSite[site].SiteTypeID !== newSiteType.OTHERS) {
              allSiteURIs += listSite[site].SiteURI + ";";
            }
            if (listSite[site].SiteTypeID === listCurrentSite.SiteTypeID) {
              def.const.curSiteName = site;
            }
            if (listSite[site].SiteTypeID !== currentSite.SiteTypeID && selectedEngine.includes(Number(listSite[site].SiteTypeID))) {
              selectedSite.length < 2 && selectedSite.push(listSite[site]);
            }
          }
        }

        getGlobalParameter();
        w.addEventListener("pushState", getGlobalParameter);
        w.addEventListener("replaceState", getGlobalParameter);
        w.addEventListener("popstate", getGlobalParameter);

        const API_ICO_YANDEX_URL = `${def.const.yandexIcon}/${allSiteURIs}?size=32&stub=1`;
        const ICON_BASE64 = await requestRemoteIcons(API_ICO_YANDEX_URL);
        const ICON_BACKGROUND = ICON_BASE64 ? `url('${ICON_BASE64}')` : `url('${def.const.backupIcon}'),url('${API_ICO_YANDEX_URL}')`;
        const GOOGLE_SPLITLINE = currentSite.SiteTypeID === newSiteType.GOOGLE ? `<span jsname="s1VaRe" class="ACRAdd M2vV3"></span>` : ``;
        const FSOU_SPLITLINE = currentSite.SiteTypeID === newSiteType.FSOU ? `<div class="divider"></div>` : ``;
        const BUTTON_CODE = GOOGLE_SPLITLINE.concat(
          FSOU_SPLITLINE,
          `<span id="${def.const.leftButton}" sn="${selectedSite[0].SiteTypeID}">
              <input type="button" title="${selectedSite[0].SiteNick}" value="${selectedSite[0].SiteName}"/>
            </span>
            <span id="${def.const.rightButton}" sn="${selectedSite[1].SiteTypeID}">
              <input type="button" title="${selectedSite[1].SiteNick}" value="${selectedSite[1].SiteName}"/>
            </span>`
        );
        const HIGHLIGHT_CSS = listCurrentSite.KeyStyle
          ? `${listCurrentSite.KeyStyle}{background-color:${customColor.backgroundColor}!important;color:${customColor.foregroundColor}!important;font-weight:700!important;-webkit-text-stroke:0px transparent!important}`
          : ``;
        const ICON_CSS = `.${def.notice.noticejs} .${def.notice.configuration} span.${def.notice.favicon},.${def.notice.card}__body-cover-image span.${def.notice.favicons}{background-color:transparent;background-image:${ICON_BACKGROUND};background-repeat:no-repeat;}`;

        function getQueryString() {
          let returnValue = "";
          const inputSelectors = [
            'input[id="kw"][name^="w"]',
            'input[name="q"]:not([type="hidden"])',
            'input[name="text"][type="text"]',
            'input#q[name="query"]',
            'input[name="query"][class$="query"]:not([id*="bottom"])',
            'input.input-search[type="search"]',
            'input[type="search"][class*="input"]',
            '#search-box-container input[class~="ant-input"]',
            'input#yschsp[name="p"]',
            'textarea[name="q"]',
            "textarea#search-input-textarea",
          ];
          qA(inputSelectors.join()).forEach((item, index, arr) => {
            returnValue = item.value;
            returnValue && DEBUG("QueryString[INPUT]: %O", { current_keyword: returnValue, input_index: index, previous_keyword: arr[index].value });
          });
          if (!returnValue) {
            const keys = ["wd", "word", "query", "q", "text", "keyword", "p"];
            for (let i = 0; i < keys.length; i++) {
              const queryString = getUrlParam(keys[i]);
              if (queryString) {
                returnValue = queryString;
                DEBUG("QueryString[URL]: %s", returnValue);
                break;
              }
            }
            returnValue = returnValue?.replace(/\+/g, " ") ?? "";
          }
          return encodeURIComponent(returnValue);
        }

        function getGlobalParameter() {
          if (antiLinkRedirect && cachedRequestLinks.size > 0) cachedRequestLinks.clear(), DEBUG("Task Clear!");
          if (antiResultsFilter && usedFilterWords.size > 0) usedFilterWords.clear(), DEBUG("Filter Clear!");
          def.const.vim = getUrlParam(currentSite.SplitName).trim();
          def.const.indexPage = () => (currentSite.SiteTypeID === newSiteType.DUCKDUCKGO ? !location.search.includes("q=") : location.pathname === "/");
          def.const.isSecurityPolicy =
            (listCurrentSite.SiteTypeID === newSiteType.GOOGLE && (/^(lcl|flm|fin)$/.test(def.const.vim) || getUrlParam("csui") === "1")) ||
            (listCurrentSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(def.const.vim)) ||
            (listCurrentSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(def.const.vim)) ||
            (listCurrentSite.SiteTypeID === newSiteType.SOGOU && (/^(kexue)$/.test(def.const.vim) || /^(fanyi|hanyu|gouwu|as|map)/.test(location.hostname))) ||
            (listCurrentSite.SiteTypeID === newSiteType.DUCKDUCKGO && /^(maps)$/.test(getUrlParam("iaxm"))) ||
            (listCurrentSite.SiteTypeID === newSiteType.YANDEX && location.pathname.includes("/direct")) ||
            (listCurrentSite.SiteTypeID === newSiteType.YAHOO && /^(news|video)$/.test(def.const.vim)) ||
            (listCurrentSite.SiteTypeID === newSiteType.YOU && /^(youchat)$/.test(def.const.vim));
        }

        async function requestRemoteIcons(URIs) {
          if (!CUR_WINDOW_TOP) return;
          let iconURL;
          const iconData = await cache.get("_remoteicons_");
          try {
            if (!iconData || setDebuggerMode()) {
              DEBUG("%cFetch remote iconData.", "color:crimson");
              iconURL = await fetchRemoteIcon(URIs);
              iconURL && cache.set("_remoteicons_", iconURL, 1296e6);
            } else {
              DEBUG("%cGet localCache iconData.", "color:green");
              iconURL = iconData;
            }
          } catch (e) {
            ERROR("Error: Can't fetch the iconData.");
          }
          return iconURL;
        }

        ~(async function prepareSearchParameters(responseUpdate) {
          // UPDATE_DATA
          const AUTO_UPDATA_TRIG = await cache.get("_autoupdate_");
          // MENUS_ACTION
          const addAction = {
            closeConfig: () => {
              const configPage = qS(`gb-notice.${def.notice.noticejs} .${def.notice.configuration}`);
              if (configPage) closeItem(configPage, true);
              return true;
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
                      <span class="${def.notice.random}_iconText">
                        ${listSite[site].SiteNick}<sup>${selectedEngine.includes(listSite[site].SiteTypeID) ? "\u2726" : "\u0020"}</sup>
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
              sleep(5e2)(addAction.closeConfig()).then(r => {
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
                            <div>${isChinese ? "搜索关键词高亮增强" : "Keyword Enhance"}
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
                            <div title="${isChinese ? "关闭更新检测或由扩展自动更新时，您需要到脚本主页查看更新内容。" : "We recommend that you turn on update detection."}">
                            ${isChinese ? "更新检测（默认：开）" : "Auto Update Detect"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.au}" class="${def.notice.checkbox}" ${isAutoUpdate ? "checked" : ""} />
                              <label for="${def.notice.au}"></label>
                            </div>
                          </li>
                          <li style="display:flex;justify-content:space-between;">
                            <button id="${def.notice.random}_help" title="${isChinese ? "单击查看脚本主页" : "View Homepage (Chinese)"}">
                            ${isChinese ? "脚本主页" : "Guide!"}
                            </button>
                            <div>
                              <button id="${def.notice.random}_cancel">${isChinese ? "取消" : "Cancel"}</button>
                              <button id="${def.notice.random}_submit">${isChinese ? "保存" : "Save"}</button>
                            </div>
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
                    GMopenInTab(`${def.variable.homepage}#优雅的搜索引擎跳转助手-google--baidu-switcheruserjs`, false);
                  });
                  qS(`#${def.notice.random}_cancel`).addEventListener("click", () => closeItem(qS(`gb-notice.${def.notice.noticejs} .${def.notice.configuration}`)));
                  qS(`#${def.notice.random}_submit`).addEventListener("click", async () => {
                    let selectEngineList = [];
                    qA(`input[name='${def.notice.card}_lists']:checked`).forEach(item => selectEngineList.push(Number(item.dataset.sn)));
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
            filterResult: () => {
              sleep(5e2)(addAction.closeConfig()).then(async r => {
                const _filter_Data = await getResultFilterData();
                const antiResultsFilter = _filter_Data.trigger;
                const resultFilters = _filter_Data.filter;
                if (!qS(`.${def.notice.noticejs} .${def.notice.configuration}`) && r) {
                  GMnotification({
                    title: `${def.variable.scriptName} v${def.variable.curVersion}`,
                    text: String(
                      `<fieldset class="${def.notice.fieldset}">
                        <legend class="${def.notice.legend}" title="Version ${def.variable.curVersion}">
                          ${isChinese ? "搜索结果拦截关键词设置" : "Search Filter Settings"}
                        </legend>
                        <ur class="${def.notice.settingList}">
                          <li>
                            <div>${isChinese ? "关键词拦截开关" : "Filter Switches"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.rf}" class="${def.notice.checkbox}" ${antiResultsFilter ? "checked" : ""} />
                              <label for="${def.notice.rf}"></label>
                            </div>
                          </li>
                          <li class="${def.notice.random}_filter">
                            <div class="${def.notice.random}_filter_info">
                            ${
                              isChinese
                                ? `设置拦截关键词以数组为标准格式，每行一组过滤关键词（注意：非正则语句须转义字符，且最末行尾无逗号），支持高级正则表达式语法，不区分大小写。<em>详细设置规则请查看『设置指引』。</em>`
                                : `Filter keyword settings use Array as standard format, one filter keyword per line. Supports regular expressions and is not case-sensitive. <em>See "Guide" for detailed setting rules!</em>`
                            }
                            </div>
                            <div class="${def.notice.random}_filter_textarea">
                              <textarea class="${def.notice.random}_filter_content"
                                placeholder='设置格式如下：（可以保留为空）\n[\n   "任意关键词",\n   "something boring",\n   "\\\\(\\\\?\\\\:非正则须转义\\\\)",\n   "\\\\(Non-regular must escape\\\\)",\n   "www.example.com",\n   "(a|b)\\\\.example\\\\.com",\n   "keyword1|keyword[2345]",\n   "^(?!.*B).*A.*$"\n]'>${
                                  resultFilters.length ? JSON.stringify(resultFilters, null, "  ") : ""
                                }</textarea>
                            </div>
                            <div style="text-align:center;padding:0 0 6px 0">
                            ${isChinese ? "(程序仅检测搜索结果列表内的可见文字)" : "(ONLY DETECT VISIBLE TEXT IN RESULT)"}
                            </div>
                          </li>
                          <li style="display:flex;justify-content:space-between;">
                            <button id="${def.notice.random}_help" title="${isChinese ? "查看详细设置规则请单击设置指引！" : "See document for detailed setting rules! (Chinese)"}">
                            ${isChinese ? "设置指引" : "Guide!"}
                            </button>
                            <div>
                              <button id="${def.notice.random}_cancel">${isChinese ? "取消" : "Cancel"}</button>
                              <button id="${def.notice.random}_submit">${isChinese ? "保存" : "Save"}</button>
                            </div>
                          </li>
                        </ul>
                      </fieldset>`
                    ),
                    type: def.notice.configuration,
                    width: 380,
                    closeWith: ["button"],
                    scroll: { maxHeight: 680, showOnHover: true },
                    progressBar: false,
                    timeout: false,
                    callbacks: {},
                    position: "topRight",
                  });
                  const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
                  const tigger = qS(`#${def.notice.rf}`);
                  if (!tigger?.checked) {
                    textarea.classList.add(def.notice.readonly);
                    textarea.setAttribute("readonly", true);
                  }
                  tigger?.addEventListener("change", function () {
                    const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
                    if (this.checked) {
                      textarea.classList.remove(def.notice.readonly);
                      textarea.removeAttribute("readonly", true);
                    } else {
                      textarea.classList.add(def.notice.readonly);
                      textarea.setAttribute("readonly", true);
                    }
                  });
                  let composing = false;
                  textarea?.addEventListener("compositionstart", () => (composing = true));
                  textarea?.addEventListener("compositionend", () => (composing = false));
                  textarea?.addEventListener("input", function () {
                    try {
                      if (composing) return;
                      if (this.value === "") {
                        this.style.border = "1px solid #999999";
                        return;
                      }
                      let previousCursorPosition = this.selectionStart;
                      const formattedValue = JSON.stringify(JSON.parse(this.value.trim()), null, "  ");
                      const diff = formattedValue.length - this.value.length;
                      const newCursorPosition = previousCursorPosition + diff;
                      const currentScrollTop = this.scrollTop;
                      this.value = formattedValue;
                      this.style.border = "1px solid #999999";
                      sleep(0)([currentScrollTop, newCursorPosition]).then(([top, pos]) => {
                        this.scrollTop = top;
                        this.setSelectionRange(pos, pos);
                      });
                    } catch (e) {
                      this.style.border = "2px solid #dc143c";
                    }
                  });
                  qS(`#${def.notice.random}_help`)?.addEventListener("click", () => GMopenInTab(`${def.variable.feedback}/288`, false));
                  qS(`#${def.notice.random}_cancel`)?.addEventListener("click", () => closeItem(qS(`gb-notice.${def.notice.noticejs} .${def.notice.configuration}`)));
                  qS(`#${def.notice.random}_submit`)?.addEventListener("click", async () => {
                    const filter_String = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`).value.trim();
                    const fitler_Trigger = qS(`#${def.notice.rf}`).checked;
                    try {
                      const _filter_String = filter_String ? uniq(JSON.parse(filter_String)) : [];
                      const _resultFilter_Data = { filter: _filter_String, trigger: fitler_Trigger };
                      GMsetValue("_resultFilter_", encrypt(JSON.stringify(_resultFilter_Data)));
                      addAction.closeConfig();
                      GMnotification({
                        title: isChinese ? "保存成功！" : "Success!",
                        text: def.notice.noticeHTML(isChinese ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>"),
                        type: def.notice.success,
                        closeWith: ["button"],
                        timeout: 5,
                        callbacks: { onClose: [def.variable.refresh] },
                      });
                    } catch (e) {
                      GMnotification({
                        text: def.notice.noticeHTML(
                          `<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31\u0020</e>${
                            isChinese ? "设置数据格式有误，请修正后重新提交。" : "The setting data format is incorrect!"
                          }</dd>`
                        ),
                        type: def.notice.error,
                        closeWith: ["click"],
                        timeout: 10,
                        callbacks: {},
                      });
                      return;
                    }
                  });
                }
              });
            },
          };

          function insertMenus() {
            if (!CUR_WINDOW_TOP) return;
            let parameter_Set, engine_List, filter_Set;
            parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:gray");
            parameter_Set = GMregisterMenuCommand(`\ufff0\u2699\ufe0f ${isChinese ? "搜索引擎助手参数设置" : "Parameter Setting"}${isHotkey ? "(E)" : ""}`, addAction.setConfigure);
            filter_Set ? GMunregisterMenuCommand(filter_Set) : DEBUG("%cInstalling Filter_Set_Menu", "color:gray");
            filter_Set = GMregisterMenuCommand(`\ufff2\ud83d\udcdb ${isChinese ? "搜索结果拦截词设置" : "Search Filter Setting"}${isHotkey ? "(B)" : ""}`, addAction.filterResult);
            engine_List ? GMunregisterMenuCommand(engine_List) : DEBUG("%cInstalling Engine_List_Menu", "color:gray");
            engine_List = GMregisterMenuCommand(`\ufff4\ud83d\udc4b ${isChinese ? "嗨，你想去哪里吖？" : "Hi, Where to visit?"} ${isHotkey ? "(V)" : ""}`, addAction.listEngine);
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
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  addAction.filterResult();
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
              const noticeStyle = `@charset "UTF-8";` + NOTICE_CSS + ICON_CSS + String(keywordHighlight ? HIGHLIGHT_CSS : "");
              addStyle({ target: document.head, styleId: def.const.rndstyleName, media: "screen", styleContent: noticeStyle, isOverwrite: false });
            } catch (e) {
              ERROR("insertStyle:", e.message);
            }
          }

          function insertButtons() {
            try {
              const Selector = currentSite.MainType;
              const buttonSection = cE("gb-button");
              buttonSection.id = def.const.rndButtonID;
              buttonSection.innerHTML = tTP.createHTML(BUTTON_CODE);
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
                          node.style.cssText = "min-width:100px;height:34px;padding:0 5px!important;color:#ffffff;background:#3388ff;border-radius:0;border:1px solid #2d78f4";
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
                  case newSiteType.BING: {
                    insterAfter(buttonSection, Target);
                    qA(`#b_header .b_searchbox`).forEach(item => (item.style.maxWidth = "666px"));
                    qS(`textarea.b_searchbox[name="q"]`, Target.parentNode)?.getAttribute("rows") >= 2 &&
                      qA(`#${def.const.rndButtonID} input`).forEach(node => {
                        node.style.cssText += "border-radius:8px";
                      });
                    const form = qS(".b_searchboxForm");
                    if (form && location.search.includes("view=detailV2")) {
                      form.style.cssText += "width:max-content!important;z-index:1000;position:relative;";
                      qA(`#${def.const.rndButtonID} input`).forEach(node => {
                        node.style.cssText += "height:34px!important;border-radius:6px!important;padding:0 12px!important;margin:0 0 0 2px!important;";
                      });
                    }
                    break;
                  }
                  case newSiteType.SOGOU:
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      sleep(5e2, { useCachedSetTimeout: true }).then((s = buttonID, t = Target) => {
                        if (!qS(s) && t) {
                          insterAfter(buttonSection, t);
                          qS(s).style.right = `-${Number(qS(s).getBoundingClientRect().width) + 10}px`;
                          addSearchButtonEvent(qA(`${s} span[sn]:not([event-insert])`));
                        }
                      });
                      resolve();
                    } else if (def.const.vim.endsWith("weixin")) {
                      insterAfter(buttonSection, Target);
                      qS(buttonID).style = "position:relative";
                      qA(`${buttonID} input`).forEach(node => node.classList.add(`${def.notice.random}_weixin`));
                    } else {
                      insterAfter(buttonSection, Target);
                      qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`)?.remove();
                      sleep(0).then(() => {
                        const btn2 = qS(`#searchBtn2`);
                        qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 10}px`;
                        if (btn2) btn2.style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 120}px`;
                      });
                    }
                    break;
                  case newSiteType.SO360:
                    insterAfter(buttonSection, Target);
                    if (currentSite.IMGType.includes(def.const.vim)) {
                      qA(`${buttonID} input`).forEach(node => (node.style = "margin:0 0 0 1px;"));
                    }
                    break;
                  case newSiteType.WUZHUISO:
                    insterAfter(buttonSection, Target);
                    break;
                  case newSiteType.DUCKDUCKGO:
                    Target.parentNode.appendChild(buttonSection);
                    Target.parentNode.appendChild(Target.cloneNode(true));
                    Target.remove();
                    sleep(0).then(() => (qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 8}px`));
                    break;
                  case newSiteType.TOUTIAO:
                    insterAfter(buttonSection, Target);
                    sleep(0).then(() => (qS(buttonID).style.right = `-${Number(qS(buttonID).getBoundingClientRect().width) + 10}px`));
                    break;
                  case newSiteType.YANDEX:
                    insterAfter(buttonSection, Target);
                    sleep(0).then(() => {
                      const width = Number(qS(buttonID).getBoundingClientRect().width) || 202;
                      qS(buttonID).style.right = `-${width + 10}px`;
                      if (currentSite.IMGType.includes(def.const.vim)) {
                        const node = qS(`div.HeaderDesktopActions.HeaderDesktop-Actions`);
                        if (node) node.style.cssText = `position:relative;right:-${width}px`;
                      } else {
                        const formNode = qS("form.search2");
                        const setting = qS("button.input__settings");
                        const action = qS(`div.HeaderDesktopActions`);
                        const voice = qS(`span.serp-header__voice-search-container`);
                        const voiceButton = qS(`button.voice-search-button.input__voice-search`);
                        if (formNode) formNode.style.cssText += "padding-right:0px!important";
                        if (setting) setting.style.right = `-${width + 144}px`;
                        if (action) action.style.cssText = `position:relative;right:-${width - 10}px`;
                        if (voice) voice.style.right = `-${width + 190}px`;
                        if (voiceButton) voiceButton.style.right = `-${width + 190}px`;
                      }
                      const voiceSearch = qS(`span.input__voice-search`);
                      if (voiceSearch) voiceSearch.style.right = `-${width + 184}px`;
                    });
                    break;
                  case newSiteType.KAIFA: {
                    Target.appendChild(buttonSection);
                    const input = qS("#search-box-container input[class~='ant-input']");
                    if (qS(buttonID) && input) input.style.cssText += `width:580px!important`;
                    break;
                  }
                  case newSiteType.ECOSIA:
                    if (!def.const.insertEcosiaButton) {
                      def.const.insertEcosiaButton = true;
                      w.addEventListener("load", () => {
                        delete def.const.insertEcosiaButton;
                        !qS(buttonID) && Target && insterAfter(buttonSection, Target);
                        addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                      });
                    }
                    resolve();
                    break;
                  case newSiteType.YAHOO:
                    insterAfter(buttonSection, Target);
                    try {
                      if (currentSite.IMGType.includes(def.const.vim)) {
                        const node = qS("#sbx")?.getBoundingClientRect() ?? { width: 0, left: 0 };
                        qS(buttonID).style.cssText = `position:absolute;left:${node.width + node.left}px`;
                      } else {
                        qS(buttonID).style.cssText = `position:absolute;top:0;left:${qS("#hd div.sbx").getBoundingClientRect().width}px`;
                        new MutationObserver(() => {
                          qS(buttonID).style.left = `${qS("#hd div.sbx").getBoundingClientRect().width}px`;
                        }).observe(qS("#hd div.sbx"), { attributes: true });
                      }
                    } catch (e) {
                      ERROR("insertButtons.YAHOO:", e.message);
                    }
                    break;
                  case newSiteType.YOU:
                    insterAfter(buttonSection, Target);
                    sleep(0)(parseFloat(gCS(document.body, "zoom") ?? 1)).then(
                      radius => radius !== 1 && (qS(`#section div[data-testid="bottom-bar"]`).style.width = `${100 / radius}vw`)
                    );
                    break;
                  case newSiteType.STARTPAGE: {
                    insterAfter(buttonSection, Target);
                    const search = qS("#search");
                    if (search) search.parentNode.style.maxWidth = `${630 + (qS(buttonID)?.getBoundingClientRect().width ?? 170)}px`;
                    break;
                  }
                  case newSiteType.BRAVE: {
                    insterAfter(buttonSection, Target);
                    const form = qS("div.searchform-container");
                    const button = qS("#submit-button");
                    if (form) form.style.setProperty("--search-form-width", `${700 + (qS(buttonID)?.getBoundingClientRect().width / 2 ?? 80)}px`);
                    button?.addEventListener("mouseover", function () {
                      this.style.cssText = "border-radius:10px;transform:scale(0.9)";
                    });
                    button?.addEventListener("mouseout", function () {
                      this.style.cssText = "";
                    });
                    break;
                  }
                  case newSiteType.YEP:
                    insterAfter(buttonSection, Target);
                    buttonSection.style.right = `-${10 + (qS(buttonID)?.getBoundingClientRect().width ?? 170)}px`;
                    break;
                  case newSiteType.SWISSCOWS:
                    insterAfter(buttonSection, Target);
                    buttonSection.style.right = `-${10 + (qS(buttonID)?.getBoundingClientRect().width ?? 170)}px`;
                    break;
                }
                resolve({ buttonID, Selector, indexPage });
              })
                .then(r => {
                  if (!r) return;
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
                setScrollButton(`#${def.const.rndButtonID}`, scrollspan, height);
                setScrollButton(`#${def.const.rndButtonID} #${def.const.leftButton} input`, scrollbars, height);
                setScrollButton(`#${def.const.rndButtonID} #${def.const.rightButton} input`, scrollbars, height);
                break;
              case newSiteType.BING:
                e = /^(images|videos)$/.test(def.const.vim);
                scrollspan = e ? def.const.scrollspan2 : def.const.scrollspan;
                scrollbars = e ? def.const.scrollbars2 : def.const.scrollbars;
                setScrollButton(`#${def.const.rndButtonID}`, scrollspan, 50);
                setScrollButton(`#${def.const.rndButtonID} #${def.const.leftButton} input`, scrollbars, 50);
                setScrollButton(`#${def.const.rndButtonID} #${def.const.rightButton} input`, scrollbars, 50);
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
            if (!Y) return;
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

          function showEmptyNotice(siteTypeID) {
            const noticeMap = new Map([
              [newSiteType.BAIDU, { target: "#content_left", listName: "div", className: "result-op" }],
              [newSiteType.BING, { target: "#b_results", listName: "li", className: "b_algo" }],
              [newSiteType.GOOGLE, { target: "div[eid][data-async-context]", listName: "div", className: "MjjYud" }],
              [newSiteType.DUCKDUCKGO, { target: "ol.react-results--main", listName: "li" }],
              [newSiteType.YANDEX, { target: "#search-result", listName: "li", className: "serp-item" }],
              [newSiteType.SOGOU, { target: "div.results", listName: "div", className: "vrwrap" }],
              [newSiteType.TOUTIAO, { target: "div.s-result-list", listName: "div", className: "result-content" }],
              [newSiteType.WUZHUISO, { target: "#main ul.result", listName: "li", className: "res-list" }],
              [newSiteType.SO360, { target: "#main>ul.result", listName: "li", className: "res-list" }],
              [newSiteType.KAIFA, { target: "ul.ant-list-items", listName: "li", className: "ant-list-item" }],
              [newSiteType.ECOSIA, { target: "section.mainline>div:not([class])", listName: "div", className: "mainline__result-wrapper" }],
              [newSiteType.YAHOO, { target: "#web>ol", listName: "li" }],
              [newSiteType.YOU, { target: "div[data-testid='app-mainline']>div[data-eventappname][data-testid]", listName: "ul" }],
              [newSiteType.STARTPAGE, { target: "section.w-gl", listName: "div", className: "w-gl__result" }],
              [newSiteType.BRAVE, { target: "#results", listName: "div", className: "snippet" }],
              [newSiteType.YEP, { target: "div[class$='-results']>div>div", listName: "div" }],
              [newSiteType.SWISSCOWS, { target: ".web-results", listName: "article", className: "item-web" }],
            ]);
            if (noticeMap.has(siteTypeID)) {
              const { target, listName, className } = noticeMap.get(siteTypeID);
              const listAttrib = className ? ` class="${className}"` : ``;
              const noticeNode = qS(`${target} ${listName}[gb-filter-notice]`);
              if (noticeNode) return;
              const noticeText = isChinese ? "本页所有搜索结果均被屏蔽，如异常请检查过滤词。" : "All results are blocked, Check the filters if abnormal.";
              const tips = `<br/>✄┏━┓╋┏┓╋╋╋┏━━━┓╋╋╋╋╋╋╋╋┏┓┏┓╋┏┓<br/>✄┃┃┗┓┃┃╋╋╋┃┏━┓┃╋╋╋╋╋╋╋╋┃┣┛┗┓┃┃<br/>✄┃┏┓┗┛┣━━┓┃┗━┛┣━━┳━━┳┓┏┫┣┓┏┛┃┃<br/>✄┃┃┗┓┃┃┏┓┃┃┏┓┏┫┃━┫━━┫┃┃┃┃┃┃╋┗┛<br/>✄┃┃╋┃┃┃┗┛┃┃┃┃┗┫┃━╋━━┃┗┛┃┗┫┗┓┏┓<br/>✄┗┛╋┗━┻━━┛┗┛┗━┻━━┻━━┻━━┻━┻━┛┗┛<br/><br/>`;
              const userdFilter = escapeHTML([...usedFilterWords].join(", "));
              const filterArray = userdFilter ? `<gb-filters class="code">${isChinese ? "过滤词:" : "Filter:"} [${userdFilter}]</gb-filters>` : ``;
              const noticeCode = tTP.createHTML(`<${listName}${listAttrib} gb-filter-notice>${tips}${noticeText} — ${def.variable.scriptName}${filterArray}</${listName}>`);
              qS(listCurrentSite.ResultList.qs)?.insertAdjacentHTML("beforebegin", noticeCode);
              usedFilterWords.clear();
            }
          }

          function filterSearchResults(filterObj) {
            if (resultFilters.length === 0) return;
            const { qs, delay } = filterObj;
            let timeout = Number(delay) || 50;
            if (timeout === Infinity) {
              if (!def.const.infinityFilterTime) {
                if (def.const.addedInfinityLoad) return;
                def.const.addedInfinityLoad = true;
                w.addEventListener("load", () => {
                  def.const.infinityFilterTime = true;
                  filterSearchResultsProcess(qs);
                });
              } else {
                delete def.const.addedInfinityLoad;
                deBounce({ fn: filterSearchResultsProcess, timer: "filterSearchResults", delay: 50 })(qs);
              }
              return;
            }
            deBounce({ fn: filterSearchResultsProcess, timer: "filterSearchResults", delay: timeout })(qs);
          }

          function filterSearchResultsProcess(querystring) {
            if (!querystring) return;
            const returnContent = new Map();
            const selectors = querystring
              .split(/,(?![^()]*\))/g)
              .map(item => `${item}:not(.${def.const.disappear},.${def.const.translucent},[gb-filter-notice])`)
              .join(",");
            return new Promise(resolve => {
              const nodes = qA(`${selectors}`);
              nodes.forEach(item => {
                if (item.nodeType !== Node.ELEMENT_NODE) return;
                const content = item.innerText?.replace(/\n/g, "").trim();
                content && returnContent.set(item, content);
              });
              resolve(returnContent);
            })
              .then(rtst => {
                if (!rtst || rtst.size === 0) return;
                for (let i = 0, l = resultFilters.length; i < l; i++) {
                  const filter = resultFilters[i];
                  const regex = new RegExp(filter, "i");
                  for (const [item, content] of rtst) {
                    if (item?.nodeType !== Node.ELEMENT_NODE) continue;
                    if (!regex.test(content)) continue;
                    if (IS_DEBUG) {
                      const noticeNode = qS("notice-label", item);
                      if (!noticeNode) {
                        const notice = cE("notice-label");
                        notice.classList.add("code");
                        notice.textContent = `<![CDATA[ "${filter}" ]]>`;
                        item.prepend(notice);
                      }
                    }
                    usedFilterWords.add(filter);
                    item.classList.add(IS_DEBUG ? def.const.translucent : def.const.disappear);
                    DEBUG("Filter.match:", { filter, item, content });
                    qA("a", item).forEach(a => a.setAttribute("gd-antiredirect-status", "blocked"));
                    rtst.delete(item);
                  }
                }
                rtst.clear();
              })
              .then(() => sleep(1e2))
              .then(() => {
                if (usedFilterWords.size === 0) return;
                const totalSelector = querystring.split(/,(?![^()]*\))/g)[0];
                const totalResults = qA(totalSelector).length;
                if (totalResults < 2) return;
                const mainSelector = selectors.split(/,(?![^()]*\))/g)[0];
                const remainingResults = qA(mainSelector).length;
                if (remainingResults > 2) return;
                if (remainingResults === 0) showEmptyNotice(listCurrentSite.SiteTypeID);
                switch (listCurrentSite.SiteTypeID) {
                  case newSiteType.BAIDU:
                    qS("#con-ar")?.remove();
                    break;
                  case newSiteType.SO360:
                    qS("#side_wrap")?.remove();
                    break;
                  case newSiteType.SOGOU:
                    qS("#main")?.setAttribute("style", "min-height:unset");
                    qS("#right")?.remove();
                    break;
                  case newSiteType.TOUTIAO:
                    qS(".main>.s-side-list>.result-content")?.remove();
                    break;
                  case newSiteType.WUZHUISO:
                    qS("#side>#so_ob")?.remove();
                    break;
                  case newSiteType.BING:
                    qS("aside>ol#b_context")?.remove();
                    break;
                  case newSiteType.BRAVE:
                    qS("aside>div")?.remove();
                    break;
                  case newSiteType.YANDEX:
                    qS("div.content__right>div")?.remove();
                    break;
                  case newSiteType.YAHOO:
                    qA("#right>ol").forEach(item => item.remove());
                    break;
                }
              });
          }

          function getGlobalGoogle(google, checkGoogleJump) {
            if (!checkGoogleJump || getRealHostName() === getRealHostName(google) || sessionStorage.getItem("_global_google_")) return;
            try {
              sessionStorage.setItem("_global_google_", 1);
              sleep(5e2).then(() => {
                def.const.s = GMopenInTab(`https://${google}/ncr`, true);
                GMnotification({
                  title: isChinese ? "智能跳转" : "Google NCR Jump",
                  text: def.notice.noticeHTML(
                    `<dd class="${def.notice.center}">
                    ${isChinese ? "当前页面即将跳转至 Google国际站（NCR）" : "Jump to Google.com (NCR)"} <br/><span>${google.toUpperCase()}</span>
                    </dd>`
                  ),
                  type: def.notice.info,
                  timeout: 10,
                  callbacks: { onClose: [redirectNCR] },
                });
              });
            } catch (e) {
              ERROR("getGlobalGoogle:", e.message);
            }

            function getRealHostName(hostname) {
              const host = hostname || top.location.hostname;
              return host.substring(host.indexOf("google"));
            }

            function redirectNCR() {
              def.const.s?.close?.();
              delete def.const.s;
              sessionStorage.removeItem("_global_google_");
              top.location.href = top.location.href.replace(top.location.hostname, google);
            }
          }

          function searchButtonAndStylesObserve() {
            const processMainThreadTasks = () => {
              if (!qS(`#${def.const.rndstyleName}`)) insertStyle();
              if (currentSite.SiteTypeID !== newSiteType.OTHERS && !def.const.isSecurityPolicy) {
                !qS(`#${def.const.rndclassName}`) && insertCSS();
                !qS(`#${def.const.rndButtonID}`) && insertButtons();
              }
              if (listCurrentSite.SiteTypeID !== newSiteType.OTHERS) {
                antiAds && listCurrentSite.AntiAds?.();
                antiResultsFilter && filterSearchResults(listCurrentSite.ResultList);
                antiLinkRedirect && !def.const.indexPage() && listCurrentSite.AntiRedirect?.();
              }
            };
            const observer = new MutationObserver(processMainThreadTasks);
            const config = { childList: true, subtree: true };
            observer.observe(document, config);
          }

          /* SEARCH_ENGINE_ASSISTANT_MAIN_PROCESS */

          !(async function searchEngineAssistant(updateRet) {
            if (CUR_WINDOW_TOP) {
              // CHECK_FOR_UPDATES
              responseUpdate(updateRet);
              // SYSTEM_INFORMATION
              showSystemInfo();
              // INSERT_MENU
              insertMenus();
              // INSERT_HOTKEY
              insertHotkey();
            }
            // INSERT_BUTTONS_AND_STYLES
            searchButtonAndStylesObserve();
            // REQUEST_UPDATE
          })(checkAutoUpdate(AUTO_UPDATA_TRIG));
        })(requestUpdate => {
          requestUpdate
            .then(result => {
              if (!result) return;
              const { res, url } = result;
              let version, notes;
              let updateInfoList = "";
              if (res) {
                version = res.match(/\/\/\s+@version\s+(\S+)/)[1];
                notes = res.match(/\/\/\s+@note\s+(.+)/g);
                notes?.forEach(item => {
                  updateInfoList += `<li>${item.replace(/\/\/\s+@note\s+/, "")}</li>`;
                });
              } else {
                __console(
                  "warn",
                  "%c[GB-UpdateError]%c\r\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!",
                  "font-weight:bold;color:crimson",
                  "color:darkred"
                );
                return;
              }
              if (!version) return;
              const updateInfo = `<dd><ul>${
                notes ? updateInfoList : `<ol>当前更新源没有更新详情，请访问 <a target="_blank" href="${def.variable.homepage}">Github</a> 查看。</ol><ol>&nbsp;</ol>`
              }</ul></dd>`;
              if (versionCompare(def.variable.curVersion, version)) {
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
                qS(`#${def.notice.stopUpdate}`)?.addEventListener("click", event => {
                  event.stopPropagation();
                  closeItem(qS(`gb-notice.${def.notice.noticejs} .${def.notice.warning}`));
                  cache.set("_autoupdate_", def.variable.curVersion);
                });
                __console(
                  "shown_new_update",
                  `%c[GB-Update]%c\r\nWe found a new version: %c${version}%c.You can update now!`,
                  "font-weight:bold;color:crimson",
                  "color:0",
                  "color:crimson",
                  "color:0"
                );
              } else {
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
                cache.set("_autoupdate_", version);
                __console(
                  "shown_update_info",
                  `%c[GB-Update]%c\r\nCurretVersion: %c${def.variable.curVersion}%c is up-to-date!`,
                  "font-weight:700;color:darkcyan",
                  "color:0",
                  "color:crimson",
                  "color:0"
                );
              }

              function preInstall() {
                sleep(5e2)(url.replace(".meta.", ".user."))
                  .then(u => {
                    if (IS_REAL_GECKO) {
                      def.const.updateWindow = GMopenInTab(IS_GREASEMONKEY ? u.replace(/\?\w+/g, "") : u, true);
                    } else {
                      location.href = u;
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
                              const iconURL = await fetchRemoteIcon(API_ICO_YANDEX_URL);
                              if (iconURL) cache.set("_remoteicons_", iconURL, 1296e6);
                            } catch (e) {
                              ERROR("Error: Can't fetch the iconData.");
                            } finally {
                              def.variable.refresh();
                            }
                          },
                        ],
                      },
                    });
                    if (def.const.updateWindow) {
                      sleep(6e3, { useCachedSetTimeout: true }).then(() => {
                        def.const.updateWindow.close?.();
                        delete def.const.updateWindow;
                        qS(`#${def.notice.random}_error`).innerHTML = tTP.createHTML(
                          `<gb-error style="display:block;margin:0 0 4px -6px;padding:6px;width:max-content;border:1px dashed #ffb78c;border-radius:4px;color:#ffb78c">${
                            isChinese ? "如果升级窗口没有出现（网络问题），请点此重试！" : "If no upgrade window appears, click here to retry!"
                          }</gb-error>`
                        );
                      });
                    }
                    return qS(`#${def.notice.random}_loading`);
                  })
                  .then(r => sleep(4e3, { useCachedSetTimeout: true })(r).then(s => s?.remove()))
                  .catch(e => ERROR("preInstall:", e.message));
              }
            })
            .catch(e => ERROR(`requestUpdate: ${e?.message}`));
        });
      })(
        cache_autoupdate => {
          if (CUR_WINDOW_TOP && isAutoUpdate && (!cache_autoupdate || setDebuggerMode())) {
            const rnd = Date.now().toString(16);
            return new Promise((resolve, reject) => {
              Promise.any([
                update(`https://update.greasyfork.org/scripts/12909/Google_baidu_Switcher_(ALL_in_One).meta.js?${rnd}`),
                update(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js?${rnd}`),
                update(`https://openuserjs.org/install/f9y4ng/Google_baidu_Switcher_(ALL_in_One).meta.js?${rnd}`),
              ])
                .then(result => resolve(result))
                .catch(e => reject(new Error(e)));
            });
          }
          return Promise.resolve(false);

          function update(url) {
            return new Promise((resolve, reject) => {
              GMxmlhttpRequest({
                url: url,
                nocache: true,
                headers: { Accept: "*/*", Referer: url },
                method: "GET",
                timeout: 1e4,
                onreadystatechange: response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const res = response.responseText || response.response;
                    resolve({ res, url });
                  } else {
                    reject();
                  }
                },
                onerror: () => reject(),
                ontimeout: () => reject(),
              });
            }).catch(e => Promise.reject(ERROR("update:", e.message)));
          }
        },
        imgUrl => {
          if (!CUR_WINDOW_TOP) return;
          return new Promise((resolve, reject) => {
            GMxmlhttpRequest({
              url: imgUrl,
              headers: { Accept: "*/*", Referer: imgUrl },
              method: "GET",
              timeout: 5e3,
              responseType: "blob",
              onreadystatechange: response => {
                if (response.readyState !== 4) return;
                if (response.status === 200) {
                  let blob = response.response;
                  DEBUG("Response.Blob:", blob);
                  let oFileReader = new FileReader();
                  oFileReader.onloadend = e => resolve(e.target.result);
                  oFileReader.readAsDataURL(blob);
                } else if (response.status !== 0) {
                  reject(new Error("NoAccessError"));
                }
              },
              onerror: () => reject(new Error("NetworkError")),
              ontimeout: () => reject(new Error("TimeoutError")),
            });
          }).catch(e => Promise.reject(ERROR("fetchRemoteIcon:", e.message)));
        },
        async () => {
          const resultFilter = await GMgetValue("_resultFilter_");
          if (!resultFilter) return { filter: [], trigger: false };
          let { filter, trigger } = JSON.parse(decrypt(resultFilter));
          if (!Array.isArray(filter)) filter = [];
          return { filter, trigger };
        }
      );
    })(
      async () => {
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
    const navigatorInfo = getNavigatorInfo();
    const locationInfo = getLocationInfo();
    return { navigatorInfo, locationInfo };
  });
})(typeof window !== "undefined" ? window : this);
