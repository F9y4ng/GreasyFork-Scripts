// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            Search Engine Assistant
// @name:zh-CN         优雅的搜索引擎助手
// @name:zh-TW         優雅的搜尋引擎助手
// @name:ru            помощник поисковых систем
// @name:ja            優雅な検索エンジン助手
// @version            2024.07.06.1
// @author             F9y4ng
// @description        “Elegant Search Engine Assistant” facilite la navigation entre moteurs de recherche, personnalise les préférences, met en évidence les mots-clés, élimine les redirections et publicités, et filtre les résultats. Compatible avec divers moteurs tels que Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, etc.
// @description:en     "Elegant search engine assistant" allows switching between engines; supports custom engines, keyword highlighting; offers redirect removal, ad blocking, keyword filtering, and auto-updates; compatible with Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Swisscows, searXNG and more.
// @description:zh-CN  “优雅的搜索引擎助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染；还提供去除搜索链接重定向、屏蔽搜索结果广告、使用关键词过滤搜索结果、和自动更新检测等高级功能；兼容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNG等多个搜索引擎。
// @description:zh-TW  「優雅的搜尋引擎助手」方便使用者在不同的搜尋引擎之間跳轉；支援自定義常用搜索引擎、關鍵詞高亮渲染；還提供去除搜尋連結重定向、遮蔽搜尋結果廣告、使用關鍵詞過濾搜尋結果、和自動更新檢測等高階功能；相容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNG等多個搜尋引擎。
// @description:ru     “Элегантный помощник поисковых систем” обеспечивает удобное переключение между поисковыми системами, поддерживает настройку, выделение ключевых слов и продвинутые функции.  совместим с Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Swisscows, searXNG и другими поисковыми системами.
// @description:ja     「優雅な検索エンジン助手」は、検索エンジン間の切り替えを容易にし、カスタムエンジン、キーワードハイライト、リダイレクト削除、広告ブロック、キーワードフィルタリング、自動更新をサポートし、Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNGなどと互換性があります。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               https://img.icons8.com/stickers/48/search-in-cloud.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @require            https://update.greasyfork.org/scripts/460897/1277476/gbCookies.js?SRI#sha256-Sv+EuBerch8z/6LvAU0m/ufvjmqB1Q/kbQrX7zAvOPk=
// @match              *://www.baidu.com/*
// @match              *://image.baidu.com/search*
// @match              *://kaifa.baidu.com/searchPage*
// @match              *://*.bing.com/*search*
// @match              *://duckduckgo.com/*
// @match              *://*.sogou.com/*
// @match              *://www.qwant.com/?*
// @match              *://www.so.com/s*
// @match              *://image.so.com/*
// @match              *://so.toutiao.com/search*
// @match              *://yandex.com/*search*
// @match              *://yandex.ru/*search*
// @match              *://www.ecosia.org/*
// @match              *://search.yahoo.com/search*
// @match              *://*.search.yahoo.com/search*
// @match              *://*.images.search.yahoo.com/search*
// @match              *://you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://swisscows.com/*
// @match              *://search.inetol.net/search*
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
// @connect            search.yahoo.com
// @connect            greasyfork.org
// @connect            openuserjs.org
// @connect            githubusercontent.com
// @connect            favicon.yandex.net
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @note               {"CN":"删除已失效的无追搜索跳转及相关功能。","EN":"Removed invalid search engine and related feats."}
// @note               {"CN":"新增 SearXNG 搜索引擎的跳转及相关功能。","EN":"Added SearXNG search engine and related feats."}
// @note               {"CN":"新增 Qwant 搜索引擎的跳转及相关功能。","EN":"Added Qwant search engine and related feats."}
// @note               {"CN":"修正 Yandex/Brave 搜索引擎跳转按钮的错误。","EN":"Fixed Yandex/Brave search engine button errors."}
// @note               {"CN":"修正 Bing 搜索链接重定向错误及样式异常。","EN":"Fixed Bing link redirection and style errors."}
// @note               {"CN":"修正 Tampermonkey5.2.1 去除百度重定向的错误。","EN":"Fixed the bug of removing Baidu link redirection in Tampermonkey 5.2.1."}
// @note               {"CN":"修正 Yahoo 国家子域名下跳转按钮未加载的问题。","EN":"Fixed Yahoo.Search jump buttons not load under the country subdomain."}
// @note               {"CN":"修正一些已知问题，优化代码，优化样式。","EN":"Fixed known issues, optimize code and style."}
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
// @copyright          2015-2024, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (ctx, SearchEngineAssistant, proxyArrayMethods) {
  "use strict";

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * CUSTOM SCRIPT DEBUGGING, DO NOT TURN ON FOR DAILY USE.                    *
   * SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const IS_OPEN_DEBUG = false;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * LICENSE FOR OPEN SOURCE USE: `GPLv3 ONLY`.                                *
   * THE CODE IS COMPLETELY OPEN AND FREE, AND DOES NOT ACCEPT UNAUTHORIZED    *
   * DISTRIBUTION AS THIRD-PARTY STANDALONE SCRIPTS. IF ERRORS OCCUR OR USAGE  *
   * ISSUES OR NEW FEATURE, PLEASE FEEDBACK ON GITHUB ISSUES, THANK YOU!       *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const { __protos__, defineMethod, ArrayMethods } = proxyArrayMethods;
  const utils = {
    gm: GM?.info ?? GM_info,
    debugging: IS_OPEN_DEBUG,
    atob: atob.bind(ctx),
    btoa: btoa.bind(ctx),
    alert: alert.bind(ctx),
    prompt: prompt.bind(ctx),
    confirm: confirm.bind(ctx),
    console: Object.assign({}, ctx.console),
  };
  ctx.history.pushState = enhanceHistory("pushState");
  ctx.history.replaceState = enhanceHistory("replaceState");
  ArrayMethods.forEach(method => void defineMethod(...method));
  SearchEngineAssistant(ctx, utils, __protos__);

  function enhanceHistory(type) {
    const original = ctx.history[type];
    const event = new Event(type);
    return function () {
      const fn = original.apply(this, arguments);
      event.arguments = arguments;
      ctx.dispatchEvent(event);
      return fn;
    };
  }
})(
  typeof window !== "undefined" ? window : this,
  function (w, secures, protoMethods) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { atob, btoa, alert, prompt, confirm, console, debugging, gm: GMinfo } = secures;
    const { a: arrSlice, s: objToString, h: hasOwnProp } = protoMethods;
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

    const IS_CHN = checkLocalChineseLanguage();
    const IS_DEBUG = setDebuggerMode() || debugging;
    const DEBUG = IS_DEBUG ? __console.bind(console, "log") : () => {};
    const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
    const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

    /* INITIALIZE_COMMON_CONSTANTS */

    const def = {
      count: { clickTimer: 0 },
      const: {
        raf: Symbol(`פֿ${generateRandomString(8, "hex")}`),
        caf: Symbol(`פֿ${generateRandomString(8, "hex")}`),
        loading: generateRandomString(6, "char"),
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
        searchbox: generateRandomString(7, "mix"),
      },
      var: {
        disappear: "ͽXa40C9nͼ",
        translucent: "ͼmD9X3jsͽ",
        securityPolicy: false,
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2024.07.06.0",
        scriptName: getMetaValue(`name:${navigator.language ?? "zh-CN"}`) ?? decrypt("U2VhcmNoJTIwRW5naW5lJTIwQXNzaXN0YW50"),
      },
      url: {
        yandexIcon: decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI="),
        backupIcon: decrypt("aHR0cHMlM0ElMkYlMkZzMjEuYXgxeC5jb20lMkYyMDI0JTJGMDYlMkYzMCUyRnBrY1VWbWoucG5n"),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepage") ?? getMetaValue("homepageURL") ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
      },
      notice: {
        rName: generateRandomString(8, "char"),
        random: generateRandomString(5, "char"),
        noticeX: generateRandomString(7, "char"),
        appear: generateRandomString(6, "char"),
        gberror: generateRandomString(6, "mix"),
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
      },
    };

    if (checkRedundantScript(GMunsafeWindow)) return;

    /* INITIALIZE_SETTIMEOUT_AND_SETINTERVAL_FUNCTION_CLASSES */

    class RAF {
      constructor(global) {
        if (RAF.instance) return RAF.instance;
        this._registerAnimationFrame(global);
        this.timerMap = { timeout: {}, interval: {} };
        this.setTimeout = this.setTimeout.bind(this);
        this.global = global;
        RAF.instance = this;
      }
      _registerAnimationFrame(scope) {
        scope[def.const.raf] =
          scope.requestAnimationFrame ||
          scope.webkitRequestAnimationFrame ||
          scope.mozRequestAnimationFrame ||
          scope.oRequestAnimationFrame ||
          void (function () {
            const animationStartTime = Date.now();
            let previousCallTime = animationStartTime;
            return function requestAnimationFrame(callback) {
              const requestTime = Date.now();
              const timeout = Math.max(0, 16.7 - (requestTime - previousCallTime));
              const timeToCall = requestTime + timeout;
              previousCallTime = timeToCall;
              return setTimeout(function onAnimationFrame() {
                callback(timeToCall - animationStartTime);
              }, timeout);
            };
          })();
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
      }
      _ticking(fn, type, interval, lastTime = Date.now()) {
        const timerSymbol = Symbol(type);
        const step = () => {
          this._setTimerMap(timerSymbol, type, step);
          if (interval < 16.7 || Date.now() - lastTime >= interval) {
            if (typeof fn === "function") fn();
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
      _clearTimerMap(timer, type) {
        this.global[def.const.caf](this.timerMap[type][timer]);
        delete this.timerMap[type][timer];
      }
      setTimeout(fn, interval) {
        return this._ticking(fn, "timeout", interval);
      }
      clearTimeout(timer) {
        this._clearTimerMap(timer, "timeout");
      }
      setInterval(fn, interval) {
        return this._ticking(fn, "interval", interval);
      }
      clearInterval(timer) {
        this._clearTimerMap(timer, "interval");
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
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : GM?.openInTab ?? open.bind(w),
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand ?? (() => {}),
        unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand ?? (() => {}),
        xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM?.xmlHttpRequest ?? (() => Promise.resolve()),
        unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : w,
        contentMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
      };
      return gmFunctions[rec] ?? (() => {});
    }

    function __console(act, message, ...args) {
      const _ = console;
      const _message = message ?? "";
      switch (act) {
        case "log":
          return _[act](`%c\ud83d\udd33 %c${_message}`, "display:inline-block", "font-family:monospace", ...args);
        case "error":
        case "warn":
          return _[act](`%c\ud83d\udea9 ${_message}`, "display:inline-block;font-family:monospace", ...args);
        case "count":
          return _[act](`\ud83d\udd33 ${_message}`);
        default:
          return _.log(_message, ...args);
      }
    }

    function checkLocalChineseLanguage() {
      const chineseLanguages = ["zh", "zh-CN", "zh-HK", "zh-TW", "zh-MO", "zh-SG", "zh-MY"];
      const lang = navigator.language || navigator.userLanguage || "en-US";
      return chineseLanguages.includes(lang);
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
        return arrSlice.call(target.querySelectorAll(expr), 0);
      } catch (e) {
        return [];
      }
    }

    function cE(nodeName) {
      return document.createElement(nodeName);
    }

    function random(range, type = "round") {
      return Math[type]((w.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
    }

    function gCS(target, opt = null) {
      if (target?.nodeType !== Node.ELEMENT_NODE) return {};
      return w.getComputedStyle(target, opt);
    }

    function capitalize(string) {
      string = String(string ?? "").toLowerCase();
      return string.replace(/\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
    }

    function encrypt(string, encode = true) {
      if (typeof string !== "string") return "";
      try {
        const req = encode ? encodeURIComponent(string) : string;
        return btoa(req);
      } catch (e) {
        return "";
      }
    }

    function decrypt(string, decode = true) {
      if (typeof string !== "string") return "";
      try {
        const rst = atob(string.replace(/[^A-Za-z0-9+/=]/g, ""));
        return decode ? decodeURIComponent(rst) : rst;
      } catch (e) {
        return "";
      }
    }

    function compareArray(array1, array2) {
      if (!Array.isArray(array1) || !Array.isArray(array2) || array1.length !== array2.length) return false;
      const sortedArray1 = array1.slice().sort();
      const sortedArray2 = array2.slice().sort();
      return sortedArray1.every((element, index) => element === sortedArray2[index]);
    }

    function uniq(array) {
      if (!Array.isArray(array)) return [];
      return Array.from(new Set(array)).filter(Boolean);
    }

    function generateRandomString(length, type) {
      const characters = {
        mix: "mYsTBgpkwNcGzFJdOMrt8n2jUC3fWRlKVA5y16oLxIXQE7Z9buvqie4PahH0SD",
        char: "zkDcUGopOvHJLfIZdPqEeRmyCSNYwrgbsFQuBXxnVWiltjMhaATK",
        hex: "a62f8bc07bd15c9ad3efe4",
        digit: "3927154680",
      };
      const prefix = "UKZJHQTRCSBFAYDMEVPXNWG".split("");
      const charactersArray = characters[type].split("");
      const randomString = Array.from({ length }, () => charactersArray[random(charactersArray.length, "floor")]).join("");
      return type === "mix" ? prefix[random(prefix.length, "floor")] + randomString : randomString;
    }

    function refresh() {
      w.location.reload(true);
    }

    function escapeHTML(string) {
      if (typeof string !== "string") return "";
      const element = cE("gb-escape-html");
      element.textContent = string;
      return element.innerHTML;
    }

    function createTrustedTypePolicy() {
      const defaultPolicy = { createHTML: string => string };
      if (typeof w.trustedTypes?.createPolicy !== "function") return defaultPolicy;
      const currentHostName = w.location.hostname;
      const whitelist = [{ host: "bing.com", policy: "rwflyoutDefault" }];
      const matchingEntry = whitelist.Find(entry => currentHostName.endsWith(entry.host));
      const policyName = matchingEntry ? matchingEntry.policy : "default";
      return w.trustedTypes.createPolicy(policyName, defaultPolicy);
    }

    function checkRedundantScript(global) {
      const { isTop: CUR_WINDOW_TOP } = getLocationInfo();
      const redundantScripts = global["gb-init-redundantcheck"];
      if (redundantScripts === true) return scriptRedundancyWarning();
      global["gb-init-redundantcheck"] = true;
      if (GMcontentMode) {
        const redundantScriptsInfo = document.documentElement?.getAttribute("gb-init-rc");
        if (redundantScriptsInfo === "true") return scriptRedundancyWarning();
      }
      document.documentElement?.setAttribute("gb-init-rc", true);
      return false;

      function scriptRedundancyWarning() {
        if (!CUR_WINDOW_TOP) return true;
        __console("error", `\ud83d\udea9 [Redundant Scripts]:\r\nFound redundant-installed scripts: ${def.var.scriptName}. please reload to troubleshoot the issue.`);
        return GMregisterMenuCommand("\ufff8\ud83d\uded1 Found redundant scripts, reload!", refresh) || true;
      }
    }

    async function getNavigatorInfo() {
      const certificate = `${GMscriptHandler} ${GMversion}`;
      const uad = await getUserAgentDataFromExtension(certificate);
      const trustEngine = getRealBrowserEngine();
      let engine = "Unknown";
      let brand = "Unknown";
      let brandVersion = "0.0.0.0";
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
          CATSXP: { engine: "Blink", brand: "Catsxp" },
          "MICROSOFT EDGE": { engine: "Blink", brand: "Edge" },
          "GOOGLE CHROME": { engine: "Blink", brand: "Chrome" },
        };
        uad.brands.Some(b => {
          const reqBrand = b.brand.toUpperCase();
          const brandInfo = brandMap[reqBrand];
          if (brandInfo) {
            engine = brandInfo.engine;
            brand = brandInfo.brand;
            brandVersion = b.version;
            return true;
          } else if (reqBrand === "CHROMIUM") {
            engine = "Blink";
            brand = "Chromium";
            brandVersion = b.version;
          }
        });
        return { engine, brand, brandVersion: formatVersion(brandVersion), os, trustEngine, credit: uad.credit ?? null };
      } else {
        const ua = navigator.userAgent;
        const checkString = str => new RegExp(str).test(ua);
        const getVersion = (str, offset) => checkString(str) && ua.substring(ua.indexOf(str) + offset).match(/\d+(\.\d+)*/)?.[0];
        const { brand, engine, brandVersion } = getBrowserInfoFromUA(ua, checkString, getVersion);
        const os = getOSInfoFromUA(checkString);
        return { engine, brand, brandVersion, os, trustEngine, credit: null };
      }

      async function getUserAgentDataFromExtension(cert) {
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
        const uad =
          navigator.userAgentData &&
          (await navigator.userAgentData.getHighEntropyValues(["architecture", "fullVersionList"]).then(rst => {
            rst.brands = rst.fullVersionList;
            delete rst.fullVersionList;
            return rst;
          }));
        return vmuad ?? tmuad ?? uad;
      }

      function getBrowserInfoFromUA(ua, checkString, getVersion) {
        const engine = getEngineFromUA(ua);
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
          if (!checkString(key)) continue;
          const { brand: _brand, engine, verset, as } = brandMap[key];
          const _verset = verset?.Find(k => checkString(k)) ?? verset?.[0];
          const _key = _verset ?? as ?? key;
          const _brandversion = formatVersion(getVersion(_key, _key.length + 1));
          return { brand: _brandversion ? _brand : brand, engine, brandVersion: _brandversion ?? brandVersion };
        }
        const { _brand, _brandversion } = getUnregisteredBrandAndVersionFromUA(ua);
        return { brand: _brand, engine, brandVersion: _brandversion };
      }

      function formatVersion(version) {
        if (!version) return "0.0.0.0";
        const numbers = version.split(".").map(num => parseInt(num) || 0);
        while (numbers.length < 4) numbers.push(0);
        return numbers.join(".");
      }

      function getFullPlatformName(platform) {
        if (!platform) return "Unknown";
        const os = capitalize(platform);
        return /^(Like Mac|Ios)$/.test(os) ? "iOS" : os === "Cros" ? "Chrome OS" : os.startsWith("Win") ? "Windows" : os.startsWith("Mac") ? "MacOS" : os === "X11" ? "Unix" : os;
      }

      function getRealBrowserEngine() {
        return w.webkitRequestFileSystem ? "Blink" : !isNaN(parseFloat(w.mozInnerScreenX)) ? "Gecko" : w.GestureEvent ? "WebKit" : "Unknown";
      }

      function getEngineFromUA(ua) {
        return /Gecko\/|FxiOS/.test(ua) ? "Gecko" : /Chrom(e|ium)\/|CriOS/.test(ua) ? "Blink" : /AppleWebKit\//.test(ua) ? "WebKit" : "Unknown";
      }

      function getUnregisteredBrandAndVersionFromUA(ua) {
        const nameOffset = ua.lastIndexOf(" ") + 1;
        const verOffset = ua.lastIndexOf("/");
        const brand = ua.substring(nameOffset, verOffset);
        const brandVersion = formatVersion(ua.substring(verOffset + 1).match(/\d+(\.\d+)*/)?.[0]);
        const isValidValue = !/version|\/|\(|\)|;/i.test(brand) && brandVersion;
        return { _brand: isValidValue ? brand : "Unknown", _brandversion: isValidValue ? brandVersion : "Unknown" };
      }

      function getOSInfoFromUA(checkString) {
        const platforms = ["like Mac", "Mac", "Android", "Debian", "Ubuntu", "Linux", "Win", "CrOS", "X11"];
        const platform = platforms.Find(p => checkString(p)) || "Unknown";
        return getFullPlatformName(platform);
      }
    }

    function getLocationInfo() {
      const { pathname, host, hostname, protocol } = w.location;
      const isTop = w.self === w.top;
      const parentHost = w.parent !== w.self ? getParentHost() : host;
      return { host, hostname, pathname, protocol, parentHost, isTop };

      function getParentHost() {
        try {
          return w.parent.location.host;
        } catch (e) {
          return new URL(document.referrer || w.location).host;
        }
      }
    }

    function getMetaValue(str) {
      const queryReg = new RegExp(`//\\s+@${str}\\s+(.+)`);
      const metaValue = (GMinfo.scriptMetaStr || GMinfo.scriptSource)?.match(queryReg);
      return metaValue?.[1];
    }

    function setDebuggerMode() {
      const key = decrypt("\u0052\u006a\u006c\u0035\u004e\u0047\u0035\u006e");
      const value = new URLSearchParams(w.location.search).get("whoami");
      return Object.is(key, value);
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
      if (typeof fn !== "function" || !timer) return () => {};
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
          pendingNodes.forEach(item => void removeNode(item));
          break;
        case "object":
          if (expr?.nodeType !== Node.ELEMENT_NODE) return false;
          pendingNodes.push(expr);
          removeNode(expr);
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

    function createNoticeHTML(html) {
      return `<div class="${def.notice.rName}"><dl>${html}</dl></div>`;
    }

    void (async function (tTP, requestEnvironmentConstants) {
      const { navigatorInfo, locationInfo } = await requestEnvironmentConstants();
      const { engine, brand, trustEngine, credit } = navigatorInfo;
      const { protocol: CUR_PROTOCOL, hostname: CUR_HOST_NAME, pathname: CUR_PATH_NAME, isTop: CUR_WINDOW_TOP } = locationInfo;
      const IS_REAL_BLINK = trustEngine === "Blink";
      const IS_REAL_GECKO = trustEngine === "Gecko";
      const IS_REAL_WEBKIT = trustEngine === "WebKit";
      const IS_CHEAT_UA = !credit && (engine !== trustEngine || checkBlinkCheatingUA());
      const IS_GREASEMONKEY = GMscriptHandler === "Greasemonkey";

      const cache = {
        value: (data, eT = 6048e5) => ({ data, expired: Date.now() + eT }),
        set: (key, ...options) => GMsetValue(key, encrypt(JSON.stringify(cache.value(...options)))),
        get: async key => {
          const obj = await GMgetValue(key);
          if (!obj) return;
          try {
            const value = JSON.parse(decrypt(obj));
            const { data, expired } = value;
            if (expired > Date.now() && data) return data;
            else return cache.remove(key);
          } catch (e) {
            ERROR("Cache.get:", e.message);
            return cache.remove(key);
          }
        },
        remove: key => void GMdeleteValue(key),
      };

      class NoticeX {
        constructor(options = {}) {
          this.defaultOptions = {
            title: "",
            text: "",
            type: def.notice.success,
            position: "bottomRight",
            newestOnTop: false,
            timeout: 2e3,
            progressBar: true,
            closeWith: ["button"],
            animation: { open: `${def.notice.animated} ${def.notice.random}_fadeIn`, close: `${def.notice.animated} ${def.notice.random}_fadeOut` },
            width: 400,
            scroll: { maxHeight: 400, showOnHover: false },
            callbacks: { beforeShow: [], onShow: [], afterShow: [], beforeClose: [], onClose: [], afterClose: [], onClick: [], onHover: [] },
          };
          this.options = { ...this.defaultOptions, ...options };
          this._registerCallbacks();
        }
        static close(item) {
          if (!item) return true;
          item.classList.add(def.notice.animated, `${def.notice.random}_fadeOut`);
          const closetNode = item.closest(`.${def.notice.noticeX}`);
          const position = closetNode?.className.match(/\b(\w+-\w+)\b/)?.[1] || `${def.notice.noticeX}-topRight`;
          return sleep(3e2)
            .then(() => safeRemove(item))
            .then(() => qA(`.${position} .${def.notice.item}`).length === 0 && safeRemove(qS(`.${position}`)));
        }
        show() {
          this._createContainer();
          const noticeX = this._appendNoticeX(this._createHeader(), this._createBody(), this._createProgressBar());
          return noticeX;
        }
        _createContainer() {
          const position = `${def.notice.noticeX}-${this.options.position}`;
          if (qS(`gb-notice.${position}`)) return;
          const container = cE("gb-notice");
          container.classList.add(def.notice.noticeX, position, def.notice.appear);
          document.documentElement.appendChild(container);
        }
        _createHeader() {
          let header = null;
          if (this.options.title) {
            header = cE("div");
            header.classList.add(`${def.notice.noticeX}-heading`);
            header.innerHTML = tTP.createHTML(`<span class="${def.notice.noticeX}-heading-title" title="${this.options.title}">${this.options.title}</span>`);
          }
          if (this.options.closeWith.includes("button")) {
            const close = cE("div");
            close.classList.add(def.notice.close);
            close.innerHTML = tTP.createHTML("&times;");
            header = header ? header.appendChild(close) && header : close;
          }
          return header;
        }
        _createBody() {
          const body = cE("div");
          body.classList.add(`${def.notice.noticeX}-body`);
          const content = cE("div");
          content.classList.add(`${def.notice.noticeX}-content`);
          content.innerHTML = tTP.createHTML(this.options.text);
          body.appendChild(content);
          if (this.options.scroll?.maxHeight) {
            body.style.overflowY = "auto";
            body.style.maxHeight = `min(calc(92vh - 50px), ${this.options.scroll.maxHeight}px)`;
            if (this.options.scroll?.showOnHover) body.style.visibility = "hidden";
          }
          return body;
        }
        _createProgressBar() {
          const progressBar = cE("div");
          progressBar.classList.add(`${def.notice.noticeX}-progressbar`);
          const bar = cE("div");
          bar.classList.add(`${def.notice.noticeX}-bar`);
          progressBar.appendChild(bar);
          if (this.options.progressBar && typeof this.options.timeout === "number") {
            progressBar.style.animation = `${def.notice.noticeX}-progress ${this.options.timeout / 1e3}s linear forwards`;
            sleep(this.options.timeout, { useCachedSetTimeout: true }).then(item => {
              if (!(item = progressBar.closest(`div.${def.notice.item}`))) return;
              if (this.options.animation?.close) {
                const remaining = item.className.replace(new RegExp("(?:^|\\s)" + this.options.animation.open + "(?:\\s|$)"), " ");
                item.className = `${remaining} ${this.options.animation.close}`;
                sleep(5e2).then(() => this._closeItem(item));
              } else this._closeItem(item);
            });
          }
          return progressBar;
        }
        _appendNoticeX(noticeXHeader, noticeXBody, noticeXProgressBar) {
          const targetClass = `.${def.notice.noticeX}-${this.options.position}`;
          const noticeItem = cE("div");
          noticeItem.classList.add(def.notice.item, this.options.type);
          if (this.options.width && Number.isInteger(this.options.width)) noticeItem.style.width = `${this.options.width}px`;
          if (noticeXHeader) noticeItem.appendChild(noticeXHeader);
          if (noticeXBody) noticeItem.appendChild(noticeXBody);
          if (noticeXProgressBar) noticeItem.appendChild(noticeXProgressBar);
          if (["top", "bottom"].includes(this.options.position)) qS(targetClass).textContent = "";
          if (this.options?.animation?.open) noticeItem.className += ` ${this.options.animation.open}`;
          this._getCallback("beforeShow");
          this._addListener(noticeItem);
          const target = qS(targetClass);
          this._getCallback("onShow");
          this.options.newestOnTop && target ? target.insertAdjacentElement("afterbegin", noticeItem) : target.appendChild(noticeItem);
          this._getCallback("afterShow");
          return noticeItem;
        }
        _addListener(item) {
          const closeBtn = qS(`.${def.notice.close}`, item);
          const handleClick = () => this._closeItem(item);
          if (this.options.closeWith.includes("button")) closeBtn?.addEventListener("click", handleClick);
          if (this.options.closeWith.includes("click")) {
            item.style.cursor = "pointer";
            item.addEventListener("click", e => {
              if (e.target.className !== def.notice.close) {
                this._getCallback("onClick");
                handleClick();
              }
            });
          } else item.addEventListener("click", e => e.target.className !== def.notice.close && this._getCallback("onClick"));
          item.addEventListener("mouseover", () => this._getCallback("onHover"));
        }
        _closeItem(item) {
          if (this.options.animation?.close) item.className += ` ${this.options.animation.close}`;
          const closetNode = item.closest(`.${def.notice.noticeX}`);
          const position = closetNode?.className.match(/\b(\w+-\w+)\b/)?.[1] || `${def.notice.noticeX}-bottomRight`;
          this._getCallback("beforeClose");
          sleep(3e2)
            .then(() => this._getCallback("onClose"))
            .then(() => safeRemove(item))
            .then(() => qA(`.${position} .${def.notice.item}`).length === 0 && safeRemove(qS(`.${position}`)))
            .then(() => this._getCallback("afterClose"));
        }
        _getCallback(eventName) {
          if (this.options.callbacks[eventName]) {
            this.options.callbacks[eventName].forEach(cb => {
              if (typeof cb === "function") cb.call(this);
            });
          }
        }
        _registerCallbacks() {
          Object.keys(this.options.callbacks).forEach(eventName => {
            const cb = this.options.callbacks[eventName];
            if (typeof cb === "function") this._on(eventName, cb);
          });
        }
        _on(eventName, cb = () => {}) {
          if (typeof cb === "function" && this.options.callbacks[eventName]) {
            this.options.callbacks[eventName].push(cb);
          }
          return this;
        }
      }

      function checkBlinkCheatingUA() {
        if (typeof NavigatorUAData === "undefined") return false;
        if (CUR_PROTOCOL === "https:" && !navigator.userAgentData) return true;
        return Boolean(navigator.userAgentData) && !(navigator.userAgentData instanceof NavigatorUAData);
      }

      function insertAfter(newElement, targetElement) {
        if (!newElement || !targetElement) return;
        const parent = targetElement.parentNode || document.head;
        if (parent.lastChild === targetElement) parent.appendChild(newElement);
        else parent.insertBefore(newElement, targetElement.nextSibling);
      }

      function addStyle({ target, styleId, styleContent, media, isOverwrite }) {
        if (!target || !styleId || !styleContent || !media) return;
        let existingStyles = qA(`#${styleId}`, target);
        if (existingStyles.length > 0) {
          if (isOverwrite === true) existingStyles.forEach(style => void safeRemove(style));
          else return true;
        }
        try {
          const styleElement = cE("style");
          styleElement.setAttribute(def.const.cssAttrName, isOverwrite ?? false);
          styleElement.id = styleId;
          styleElement.media = media;
          styleElement.type = "text/css";
          styleElement.textContent = styleContent ?? "";
          target.appendChild(styleElement);
          return true;
        } catch (e) {
          ERROR("addStyle:", e.message);
          return false;
        }
      }

      function getUrlParam(parameter) {
        try {
          switch (objToString.call(parameter)) {
            case "[object Object]": {
              const { split, index } = parameter;
              const keyArray = w.location.pathname.split(split);
              return keyArray[index] ?? "";
            }
            case "[object Array]":
              for (const para of parameter) {
                const value = getUrlParam(para);
                if (value) return value;
              }
              return "";
            case "[object Number]":
            case "[object String]":
              if (!parameter && parameter !== 0) return "";
              return new URLSearchParams(w.location.search).get(parameter) ?? "";
            case "[object Function]":
              return parameter() ?? "";
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
          const compareVersion = compare.split(".");
          const currentVersion = current.split(".");
          if (compareVersion.length !== currentVersion.length) return true;
          for (let i = 0; i < compareVersion.length; i++) {
            if (parseInt(compareVersion[i]) < parseInt(currentVersion[i])) return false;
            else if (parseInt(compareVersion[i]) > parseInt(currentVersion[i])) return true;
          }
          return false;
        } catch (e) {
          return true;
        }
      }

      function convertBlobToDataURL(blob, resolve, reject) {
        let oFileReader = new FileReader();
        oFileReader.onloadend = e => resolve(e.target.result);
        oFileReader.onerror = reject;
        oFileReader.readAsDataURL(blob);
      }

      void (async function (getConfigureData, getResultFilterData, requestRemoteIcon, GMnotification) {
        let parameter_Set, engine_List, filter_Set;
        let [_config_date_, _filter_Data_] = await Promise.all([getConfigureData(), getResultFilterData()]);
        let { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor } = _config_date_;
        const { trigger: antiResultsFilter, filter: resultFilters } = _filter_Data_;
        const cachedRequestLinks = antiLinkRedirect ? new Map() : null;
        const usedFilterWords = antiResultsFilter ? new Set() : null;
        const selectedSite = [];

        /* ANTIREDIRECT_FUNCTIONS */

        function validateOptions(options) {
          return {
            useNewTab: options.useNewTab || false,
            forceNewTab: options.forceNewTab || false,
            cleanAttributes: options.cleanAttributes || [],
            removeDataSet: options.removeDataSet || false,
            useAdvancedAntiRedirect: options.useAdvancedAntiRedirect || false,
          };
        }

        function updateNodeAttributes(node, options) {
          if (options.useNewTab) node.setAttribute("target", "_blank");
          if (Array.isArray(options.cleanAttributes) && options.cleanAttributes.length > 0) options.cleanAttributes.forEach(item => node.removeAttribute(item));
          if (options.removeDataSet) Object.keys(node.dataset).forEach(ds => delete node.dataset[ds]);
          node.setAttribute("gd-depurate-status", true);
        }

        function parsingAntiRedirect(selectors, siteName, options) {
          if (typeof selectors !== "string" || selectors.trim() === "") return;
          options = validateOptions(options);
          const selectorArray = selectors.split(/,(?![^()]*\))/g);
          const queryString = selectorArray.map(item => `${item}:not([href^='javascript:' i]):not([href^='#']):not([gd-depurate-status],[gd-antiredirect-status])`).join(",");
          const aNodes = qA(queryString);
          if (aNodes.length === 0) return;
          COUNT(`[${siteName}-Anti-Redirect]`);
          let taskList = [];
          aNodes.forEach(node => {
            if (options.useAdvancedAntiRedirect) {
              node.setAttribute("gd-antiredirect-status", "pending");
              const task = advancedAntiRedirection(siteName, node, () => Promise.resolve(NaN));
              if (typeof task === "function") taskList.push(task);
            }
            updateNodeAttributes(node, options);
            if (options.forceNewTab) {
              node.onclick = e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                GMopenInTab(node.href, false);
              };
            }
          });
          parallelTasks(taskList, 6);
        }

        function fetchData(url, resolve, reject, readystate, error, timeout) {
          GMxmlhttpRequest({
            url: url,
            headers: { Accept: "*/*", Referer: w.location.origin.replace(/^http:/i, "https:") },
            method: "GET",
            timeout: 25e3,
            onreadystatechange: readystate(resolve, reject),
            onerror: error(reject, resolve),
            ontimeout: timeout(reject),
          });
        }

        function getRealUrl(url, node, name, { onreadystatechangeFunc, onerrorFunc, ontimeoutFunc }) {
          return new Promise((resolve, reject) => {
            if (!cachedRequestLinks.has(url)) {
              cachedRequestLinks.set(url, null);
              fetchData(url, resolve, reject, onreadystatechangeFunc, onerrorFunc, ontimeoutFunc);
            } else reject(new RangeError("DuplicateLinksError"));
          })
            .then(res => handleSuccess(res, url, node))
            .catch(e => handleError(e, url, node, name));
        }

        function handleSuccess(res, url, node) {
          DEBUG("Parsed link:", { node, parsed: res, origin: url });
          cachedRequestLinks.set(url, res);
          setRealLink(node, res);
          toggleLoadClass(node).remove();
        }

        function handleError(e, url, node, name) {
          if (["URLBrokenError", "TimeoutError", "URLNotExistError", "ResponseError"].includes(e?.message)) cachedRequestLinks.set(url, url);
          if (e?.message === "DuplicateLinksError") handleDuplicateLinksError(url, node);
          else {
            setErrorLink(node);
            toggleLoadClass(node).remove();
            ERROR("antiRedirect_%s: %s %O", name, e?.message, { Node: node, Text: node.textContent, URL: node.href });
          }
        }

        function handleDuplicateLinksError(url, node) {
          const attemptToFindCacheLink = setInterval(() => {
            const cachedRealLinks = cachedRequestLinks.get(url);
            if (cachedRealLinks === null) return;
            if (cachedRealLinks === url) {
              setErrorLink(node);
              toggleLoadClass(node).remove();
            } else {
              DEBUG("Duplicate link:", { node });
              setRealLink(node, cachedRealLinks);
              toggleLoadClass(node).remove();
            }
            clearInterval(attemptToFindCacheLink);
          }, 5e2);
        }

        function toggleLoadClass(node) {
          return { remove: () => IS_DEBUG && node.classList.remove(def.const.loading), add: () => IS_DEBUG && node.classList.add(def.const.loading) };
        }

        function setRealLink(node, url) {
          node.href = url;
          IS_REAL_WEBKIT && node.setAttribute("title", url);
          node.setAttribute("gd-antiredirect-status", "success");
        }

        function setErrorLink(node) {
          node.classList.add(def.notice.linkerror);
          node.setAttribute("gd-antiredirect-status", "failed");
          node.setAttribute("title", `${IS_CHN ? "目前来看，此链接已无法正常访问。" : "At present, this link is no longer accessible."}`);
        }

        function parallelTasks(tasks, maxCount = 3) {
          const taskLength = tasks.length;
          if (taskLength === 0) return;
          let currentIndex = 0;
          let finishedCount = 0;
          const taskCount = Math.min(maxCount, taskLength);
          function executeNextTask() {
            if (currentIndex >= taskLength) return;
            const task = tasks[currentIndex];
            currentIndex++;
            task().then(result => {
              finishedCount++;
              if (finishedCount === taskLength) IS_DEBUG && deBounce({ fn: __console, delay: 1e3, timer: "doTask" })(`doTask`, `(${result ?? cachedRequestLinks.size}) Task Done!`);
              else executeNextTask();
            });
          }
          for (let i = 0; i < taskCount; i++) executeNextTask();
        }

        function reportIDMHijacking() {
          const IDMText = IS_CHN
            ? "PDF文件下载警告:\r\nInternet Download Manager (IDM) 等下载器的劫持可能会造成文件被直接下载。"
            : "PDF File Download Warning:\r\nHijacking of downloaders such as Internet Download Manager (IDM) may cause files to be downloaded directly.";
          __console("warn", IDMText);
        }

        function rejectResponse(response, resolve, reject, url) {
          const resUrl = response.finalUrl || response.responseURL || url;
          if (/^2\d\d$/.test(response.status)) {
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
          const tasks = {
            Baidu: () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resUrl = response.finalUrl || response.responseURL || url;
                    resolve(resUrl);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: (reject, resolve) => e => {
                  if (e.error?.includes("Request was redirected to a not whitelisted URL") || e.error?.includes("This domain is not a part of the @connect list")) {
                    const realUrl = e.error?.toString().match(/Refused to connect to "([^"]*)"/)?.[1];
                    if (!realUrl || realUrl.includes("www.baidu.com/search/error")) reject(new Error("URLNotExistError"));
                    if (realUrl.toUpperCase().endsWith(".PDF")) reportIDMHijacking();
                    resolve(realUrl);
                  } else {
                    const responseHeader = e.responseHeaders?.match(/Location:\s*([\S]+)/);
                    if (responseHeader) resolve(responseHeader[1]);
                    else {
                      const realURL = e.finalUrl;
                      if (realURL && realURL !== url) resolve(realURL);
                      else reject(new Error("URLBrokenError"));
                    }
                  }
                },
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
            Bing: () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/var\s+u\s*=\s*"([^"]+)"\s*;\s*\r\n/i);
                    res = res ? res[1] : resUrl;
                    resolve(res);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
            Sogou: () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/URL\s*=\s*'([^']+)'/);
                    res = res ? res[1] : resUrl;
                    resolve(res);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
            So360: () =>
              getRealUrl(url, node, "So360", {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    const resUrl = response.finalUrl || response.responseURL || url;
                    let res = resText.match(/URL\s*=\s*'([^']+)'/);
                    res = res ? res[1] : resUrl;
                    resolve(res);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
            Toutiao: () =>
              new Promise((resolve, reject) => {
                if (!cachedRequestLinks.has(url)) {
                  cachedRequestLinks.set(url, null);
                  const parseURL = url.match(/\/search\/jump\?url=([^&]+)&/)?.[1];
                  const decodeURL = decodeURI(decodeURIComponent(parseURL ?? "")) || url;
                  resolve(decodeURL);
                } else reject(new RangeError("DuplicateLinksError"));
              })
                .then(d => handleSuccess(d, url, node))
                .catch(e => handleError(e, url, node, siteName)),
            Yahoo: () =>
              getRealUrl(url, node, siteName, {
                onreadystatechangeFunc: (resolve, reject) => response => {
                  if (response.readyState !== 4) return;
                  if (response.status === 200) {
                    const resText = response.responseText || response.response || "";
                    let res = resText.match(/URL\s*=\s*'([^']+)'/);
                    resolve(res?.[1] ?? url);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
          };
          toggleLoadClass(node).add();
          return tasks[siteName] ?? task;
        }

        /* ANTIADS_FUNCTIONS */

        const siteAdblockHandlers = {
          Google: (siteName, clean) => {
            if (qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])>div[id^='eob']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("div[class='Z26q7c UK95Uc']:not([data-content-feature])").forEach(node => {
                if (qS("div[id^='eob']", node)) {
                  node.classList.add(def.var.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
          },
          Yandex: (siteName, clean) => {
            const querystring = `.AliceFabPromo-Close,.PopupDesktop-Buttons button.PopupDesktop-Button_type_close`;
            qA(querystring).forEach(item => item.click());
            if (qA("li.serp-item.serp-item_card div.Organic-Subtitle span.organic__advLabel,li[data-cid][class*='_card'] .Organic-Subtitle>.Organic-Path~span").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("li.serp-item.serp-item_card,li[data-cid][class*='_card']").forEach(node => {
                const adsTxtNode = qS(".Organic-Subtitle span.organic__advLabel", node);
                const _moz_adsTxtNode = qS(".Organic-Subtitle>.Organic-Path~span", node);
                if (/^(ad|[РекламPeknam]{7})$/i.test(_moz_adsTxtNode?.textContent || adsTxtNode?.textContent)) {
                  node.classList.add(def.var.disappear);
                  clean === true && safeRemove(node);
                }
              });
            }
          },
          So360: (siteName, clean) => {
            if (qA("ul.section>li span.txt>s, ul.result>li>div.res-recommend-tag").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("ul.section>li,ul.result>li").forEach(node => {
                const ads = qS("span[class='txt']>s", node);
                if (!ads?.textContent?.includes("\u5e7f\u544a") && !qS("div.res-recommend-tag", node)) return;
                node.classList.add(def.var.disappear);
                clean === true && safeRemove(node);
              });
            }
          },
          You: (siteName, clean) => {
            if (qA("ul[data-testid='web-results']>li div>div>span[class^='sc-']").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA("ul[data-testid='web-results']>li").forEach(node => {
                const ads = qS("div>div>span[class^='sc-']", node);
                if (!ads?.textContent?.toLowerCase().includes("ad")) return;
                node.classList.add(def.var.disappear);
                clean === true && safeRemove(node);
              });
            }
          },
          Qwant: () => qS(`button[class][aria-label="close"]:has(svg)`)?.click(),
          Brave: () => qS(`.promo-tooltip>button.btn--icon[aria-label="Close"]`)?.click(),
          Duckduckgo: () => qS(`button[data-testid="serp-popover-promo-close"]`)?.click(),
          Yahoo: () => qS(".browserExtensionPromotionWrapper a.btn.notnow")?.click(),
          Swisscows: (siteName, clean) => {
            if (qA(".web-results>article>.site>a.ad").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA(".web-results>article").forEach(node => {
                if (!qS(".site>a.ad", node)) return;
                node.classList.add(def.var.disappear);
                clean === true && safeRemove(node);
              });
            }
          },
        };

        function parseAntiAdvertising({ selectors, siteName, isRemoveNodes }) {
          if (selectors && typeof selectors === "string") {
            if (!qS(`#${def.const.rndadvName}`)) {
              COUNT(`[${siteName}-Anti-Ads]`);
              const cssText = `:root :is(${selectors}){display:none!important}`;
              addStyle({ target: document.head, styleId: def.const.rndadvName, media: "all", styleContent: cssText });
            }
            isRemoveNodes === true && qA(selectors).forEach(node => safeRemove(node));
          }
          AdvancedAntiAdvertising(siteName, isRemoveNodes);
        }

        function AdvancedAntiAdvertising(siteName, clean) {
          const AdblockHandler = siteAdblockHandlers[siteName];
          if (typeof AdblockHandler !== "function") return;
          try {
            if (AdblockHandler.length > 0) AdblockHandler(siteName, clean);
            else AdblockHandler();
          } catch (e) {
            ERROR("AdvancedAntiAdvertising:", e.message);
          }
        }

        /* PRELOAD_FUNCTIONS */

        function fetchUpdateResponse(url) {
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
                } else reject();
              },
              onerror: () => reject(),
              ontimeout: () => reject(),
            });
          }).catch(e => Promise.reject(ERROR("fetchUpdateResponse:", e.message)));
        }

        async function fetchAndCacheRemoteIcons(remoteURL) {
          if (!CUR_WINDOW_TOP) return;
          let iconDataURL;
          const iconBase64Data = await cache.get("_remoteicons_");
          try {
            if (!iconBase64Data || setDebuggerMode()) {
              DEBUG("%cRequest remote icon data.", "color:crimson");
              iconDataURL = await requestRemoteIcon(remoteURL);
              iconDataURL && cache.set("_remoteicons_", iconDataURL, 2592e6);
            } else {
              DEBUG("%cGet localCache icon data.", "color:green");
              iconDataURL = iconBase64Data;
            }
          } catch (e) {
            ERROR(`Error: Can't request the icon data.`);
          }
          return iconDataURL;
        }

        function setupScrollButton(selector, className, scrollSize) {
          const targetElement = qS(selector);
          if (!targetElement) return;
          let targetOffsetTop = 0;
          let currentElement = targetElement;
          while (currentElement) {
            targetOffsetTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent;
          }
          document.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > targetOffsetTop + scrollSize) targetElement.classList.add(className);
            else targetElement.classList.remove(className);
          });
        }

        void (async function (getUpdateAddress) {
          const listSite = {
            baidu: {
              siteTypeID: 1,
              siteButtonName: IS_CHN ? "百度一下" : "𝐁𝐚𝐢𝐝𝐮",
              siteNickName: IS_CHN ? "百度 搜索" : "𝐁𝐚𝐢𝐝𝐮.𝐜𝐨𝐦",
              siteHostName: "www.baidu.com",
              webURL: "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=",
              imageURL: "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=",
              imageType: ["baiduimage", "baiduimagedetail"],
              splitTypeName: "tn",
              mainSelector: ".s_btn_wr,#sugOut",
              buttonCssText: `a,a em{text-decoration:none!important}:not([class^="page-inner"])>a:not(.${def.notice.linkerror}):hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin:0 0 0 4px;padding:0;height:40px;vertical-align:top;line-height:40px}#${def.const.rndButtonID} *{-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:40px}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px!important;height:40px;min-width:100px;border:0;border-bottom-left-radius:10px;border-top-left-radius:10px;background:#4e6ef2;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px 0 12px!important;height:40px;min-width:100px;border:0;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#4e6ef2;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#4662d9;border:1px solid transparent;}`,
              resultListProp: { qs: `#content_left>div.c-container[tpl]:not([tpl='recommend_list'],[tpl^="rel-"])`, delay: 10 },
              keywords: "#wrapper_wrapper em,.c-gap-top-small b",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "baidu_ar" })(".c-container a[href*='//www.baidu.com/link?url=']", "Baidu", {
                  useNewTab: true,
                  removeDataSet: true,
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "baidu_ad", immed: true })({
                  selectors: `#s-hotsearch-wrapper,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad,div[class^='result-op'][tpl='right_tabs'][data-click],div[class^='result-op'][tpl='right_links'][data-click],#searchTag,#content_left>div.c-container[tpl="recommend_list"],#con-ar div[tpl="right_recommends_merge"]`,
                  siteName: "Baidu",
                  isRemoveNodes: true,
                });
              },
            },
            google: {
              siteTypeID: 2,
              siteButtonName: "𝐆𝐨𝐨𝐠𝐥𝐞",
              siteNickName: IS_CHN ? "𝐆𝐨𝐨𝐠𝐥𝐞 搜索" : "𝐆𝐨𝐨𝐠𝐥𝐞.𝐜𝐨𝐦",
              siteHostName: "www.google.com",
              webURL: "https://www.google.com/search?newwindow=1&sca_upv=1&source=hp&q=",
              imageURL: "https://www.google.com/search?newwindow=1&sca_upv=1&source=lnms&udm=2&sa=X&q=",
              imageType: ["isch", "2"],
              splitTypeName: ["tbm", "udm"],
              mainSelector: "form button[type='submit']",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:100;display:flex;margin:0 4px 0 -5px;justify-content:center;align-items:center}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{padding:0 2px 0 8px}.${def.const.scrollspan}{min-height:26px}.${def.const.scrollspan2}{min-height:26px;margin-top:0!important}.${def.const.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${def.const.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px!important;height:38px;min-width:90px;border:0;border-bottom-left-radius:24px;border-top-left-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px 0 12px!important;height:38px;min-width:90px;border:0;border-top-right-radius:24px;border-bottom-right-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#1b66c9;}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background:#8ab4f8;box-shadow:0 1px 3px 1px rgba(0,0,0,.15),0 1px 2px rgba(0,0,0,.3);color:#202124}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#93baf9}}`,
              resultListProp: {
                qs: `div.cLjAic.K7khPe[data-hveid^="C"][data-hveid$="AA"],div.g[data-hveid^="C"][data-hveid$="AA"],div.g div[data-hveid^="C"][data-hveid$="AA"]`,
                delay: 10,
              },
              keywords: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "google_ar" })(
                  "#rcnt div[data-hveid^='C'][data-hveid$='AA'] :not(h3.ob5Hkd,.d0fCJc)>a:not(.ngTNl,.oRJe3d,.k8XOCe,[jsname='ZWuC2'],.fl,#pnprev,#pnnext)",
                  "Google",
                  { useNewTab: true, cleanAttributes: ["ping", "onmouseover"], removeDataSet: true }
                );
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "google_ad", immed: true })({
                  selectors: `div[aria-label='\u5e7f\u544a'],div[aria-label='Ads' i],#bottomads,#tvcap`,
                  siteName: "Google",
                });
              },
            },
            bing: {
              siteTypeID: 3,
              siteButtonName: "𝐁𝐢𝐧𝐠 ®",
              siteNickName: IS_CHN ? "𝐁𝐢𝐧𝐠 搜索" : "𝐁𝐢𝐧𝐠.𝐜𝐨𝐦",
              siteHostName: "www.bing.com",
              webURL: "https://www.bing.com/search?go=Search&qs=ds&form=QBRE&rdr=1&hta=off&q=",
              imageURL: "https://www.bing.com/images/search?qs=ds&form=QBIR&first=1&q=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: `.b_searchboxForm>input[type="hidden"][name="form"]`,
              buttonCssText: `.${def.const.searchbox}{border-radius:8px!important}a,#b_results>li[class] a:not(.wiki_seemore),#b_results .b_no a,#b_context .mediumCardTitle{color:#001ba0}#${def.const.rndButtonID}{position:relative;z-index:0;display:inline-flex;margin:0;padding:0 6px 0 0;width:auto;height:38px;min-width:180px;vertical-align:middle;justify-content:center;flex-wrap:nowrap}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.leftButton},#${def.const.rightButton}{margin:0;padding:0;width:auto}#${def.const.rndButtonID} input{box-sizing:border-box;height:38px;min-width:90px;border:1px solid #174ae4;background-color:#f7faff;color:#174ae4;font-weight:600;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px;border-bottom-left-radius:24px;border-top-left-radius:24px}#${def.const.rightButton} input{margin:0 0 0 2px;padding:0 18px 0 12px;border-top-right-radius:24px;border-bottom-right-radius:24px}.${def.const.scrollspan}{margin:-14px -3px 0 0!important;max-height:28px}.${def.const.scrollbars}{max-height:28px;font-size:14px!important}.${def.const.scrollspan2}{margin:0!important;padding:4px 4px 0 8px!important;max-height:30px;vertical-align:top!important}.${def.const.scrollbars2}{margin-right:0!important;padding:0 12px!important;max-height:30px;border-radius:4px!important;vertical-align:top!important}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fff;background-color:#f0f3f6;box-shadow:0 0 4px #174ae4;color:#174ae4;transition:border .1s linear,box-shadow .3s linear}.${def.notice.random}_input{width:300px!important}@media (prefers-color-scheme: dark){.b_dark #b_results>li[class] a{color:#7aabeb}#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #a2b7f4;background:transparent;color:#a2b7f4}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#a2b7f4;color:#333}}`,
              resultListProp: {
                qs: `#b_results>li.b_algo:not(.b_algoBorder,.b_topborder),#b_results>li.b_vidAns .mmlist>div[id],#b_results>li.b_mop .b_slidebar>div.slide`,
                delay: 10,
              },
              keywords: String(
                Number(getUrlParam("ensearch")) || Number(w.gbCookies.getItem("ENSEARCH")?.match(/[=](\d)/)?.[1])
                  ? "strong,.b_no h4,.b_strong,.b_ad .b_adlabel strong,.cbl"
                  : "#sp_requery strong,#sp_recourse strong,.sb_adTA_title_link_cn strong,.b_ad .ad_esltitle~div strong,h2 strong,#b_results .b_algo p strong,.b_caption p strong,.b_snippetBigText strong,.recommendationsTableTitle+.b_slideexp strong,.recommendationsTableTitle+table strong,.recommendationsTableTitle+ul strong,.pageRecoContainer .b_module_expansion_control strong,.pageRecoContainer .b_title>strong,.b_rs strong,.b_rrsr strong,.richrswrapper strong,#dict_ans strong,.b_listnav>.b_ans_stamp>strong,#b_content #ans_nws .na_cnt strong,.b_vidAns strong,.adltwrnmsg strong"
              ),
              antiRedirectFn: function () {
                GMunsafeWindow.AwayTimeScrollTopPoleRS = false;
                GMunsafeWindow.AwayTimeThreshold = 864000;
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "bing_ar" })("#b_content a[href*='.bing.com/ck/a?']:not([role='button'])", "Bing", {
                  useNewTab: true,
                  cleanAttributes: ["h"],
                  useAdvancedAntiRedirect: true,
                });
                deBounce({ fn: parsingAntiRedirect, delay: 30, timer: "bing_ar_cn" })("#b_results>li:not(.b_pag,#mfa_root) a:not([role='button']):not([href*='.bing.com/ck/a?'])", "Bing", {
                  useNewTab: true,
                  cleanAttributes: ["h"],
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "bing_ad", immed: true })({
                  selectors: `li.b_ans>div.wpt_bc_container,li.b_ans>#relatedSearchesLGWContainer,li.b_ans>.b_rs,li.b_ad,#b_pole,#b_content .b_underSearchbox,#b_header>div[id^="bnp."][data-vertical],#b_context li.b_ans .b_spa_adblock,.ad_sc,.b_adBottom,.b_adLastChild,.b_adPATitleBlock,.b_spa_adblock,.mapsTextAds,.pa_sb,.productAd,[id$="adsMvCarousel"],a[href*="/aclick?ld="],div.pagereco_anim,#inline_rs,#ev_talkbox_wrapper,#b_content>main[aria-label]>#b_ims_bza_pole,.shop_page .br-poleoffcarousel,#b_content>div#pole>div[class="ra_car_block ra_pole"]>div.ra_car_container,#pole>.productAd[data-ad-carousel],.b_adPATitleBlock+div,a.sb_meta[href^="http://advertise.bingads.microsoft.com"],.promotion-panel-inner,.ins_exp.vsp,li[class="b_algo"]:has(.b_attribution[data-partnertag] + p[class]),.b_ans:has([class^="xm_"][class*="_ansCont"])`,
                  siteName: "Bing",
                  isRemoveNodes: true,
                });
              },
            },
            duckduckgo: {
              siteTypeID: 4,
              siteButtonName: "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨",
              siteNickName: IS_CHN ? "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨 搜索" : "𝐃𝐮𝐜𝐤𝐝𝐮𝐜𝐤𝐠𝐨",
              siteHostName: "duckduckgo.com",
              webURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=1&kn=1&kp=-2&t=h_&ia=web&q=",
              imageURL: "https://duckduckgo.com/?k1=-1&kl=wt-wt&kd=-1&ko=s&kn=1&kp=-2&t=h_&iax=images&ia=images&q=",
              imageType: ["images"],
              splitTypeName: "ia",
              mainSelector: "#search_form",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:-188px;z-index:1999999995;display:block;height:44px}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-bottom-left-radius:var(--default-border-radius);border-top-left-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-top-right-radius:var(--default-border-radius);border-bottom-right-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid transparent;background-color:#2950bf!important;color:#fff!important}`,
              resultListProp: { qs: `ol.react-results--main>li[data-layout="organic"],ol.react-results--main>li[data-layout="videos"] div.module--carousel__item`, delay: 10 },
              keywords: "strong, b",
              antiRedirectFn: null,
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "ddg_ad", immed: true })({ selectors: `.footer`, siteName: "Duckduckgo", isRemoveNodes: true });
              },
            },
            sogou: {
              siteTypeID: 5,
              siteButtonName: IS_CHN ? "搜狗搜索" : "𝐒𝐨𝐠𝐨𝐮",
              siteNickName: IS_CHN ? "搜狗 搜索" : "𝐒𝐨𝐠𝐨𝐮.𝐜𝐨𝐦",
              siteHostName: "www.sogou.com",
              webURL: "https://www.sogou.com/web?query=",
              imageURL: "https://pic.sogou.com/pics?query=",
              imageType: ["pics", "d"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "input[type='submit'].sbtn1,input[type='button'][uigs='search_article'],input[type='submit'].search-btn",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;margin:-1px 0 0;padding:0;width:auto;height:34px;cursor:pointer;-webkit-appearance:none}#${def.const.rndButtonID} *{-webkit-text-stroke:0 transparent!important}#${def.const.leftButton}{display:inline;height:34px}#${def.const.rightButton}{display:inline;height:34px}#${def.const.leftButton} input{margin:0;padding:0 18px!important;height:34px;min-width:100px;border:1px solid #ababab;border-radius:3px;background:#fafafa;color:#000;vertical-align:top;font-weight:500;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px!important;height:34px;min-width:100px;border:1px solid #ababab;border-radius:3px;background:#fafafa;color:#000;vertical-align:top;font-weight:500;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #7a7a7a;background:#f2f2f2}.${def.notice.random}_weixin{border:1px solid #00a06a!important;border-radius:2px!important;background:#fff!important;color:#00a06a!important;font-size:15px!important}.${def.notice.random}_weixin:hover{background:#f7fffd!important}`,
              resultListProp: { qs: `div.results>div.vrwrap,div.results>div.rb`, delay: 10 },
              keywords: "#wrapper em",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "sogou_ar" })("#wrapper a[href^='/link?url=']:not([uigs])", "Sogou", {
                  useNewTab: true,
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "sogou_ad", immed: true })({
                  selectors: `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~='ext_query'][id*='sq_ext_'],div.top-better-hintBox,#right>div.rvr-model:not([tpl])`,
                  siteName: "Sogou",
                  isRemoveNodes: true,
                });
              },
            },
            qwant: {
              siteTypeID: 6,
              siteButtonName: "𝐐𝐰𝐚𝐧𝐭",
              siteNickName: IS_CHN ? "𝐐𝐰𝐚𝐧𝐭 搜索" : "𝐐𝐰𝐚𝐧𝐭.𝐜𝐨𝐦",
              siteHostName: "www.qwant.com",
              webURL: "https://www.qwant.com/?t=web&q=",
              imageURL: "https://www.qwant.com/?t=images&q=",
              imageType: ["images"],
              splitTypeName: "t",
              mainSelector: "form[data-testid='mainSearchBar']",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;display:block;height:48px}#${def.const.leftButton}{display:inline-block;height:48px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:48px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:48px;min-width:100px;border:1px solid var(--color-border-secondary);border-bottom-left-radius:var(--border-radius-300);border-top-left-radius:var(--border-radius-300);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--color-text-primary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:48px;min-width:100px;border:1px solid var(--color-border-secondary);border-top-right-radius:var(--border-radius-300);border-bottom-right-radius:var(--border-radius-300);background:transparent;box-shadow:0 2px 3px rgb(0 0 0/6%);color:var(--color-text-primary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:var(--color-background-neutral-tertiary-hovered)}`,
              resultListProp: { qs: `div[data-testid="containerWeb"]>section div[data-testid]>div>div`, delay: 10 },
              keywords: "mark",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "qwant_ar" })("div[data-testid='containerWeb']>section div[data-testid]>div>div a.external", "Qwant", {
                  useNewTab: true,
                  removeDataSet: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 30, timer: "qwant_ad", immed: true })({ siteName: "Qwant" });
              },
            },
            yandex: {
              siteTypeID: 7,
              siteButtonName: "𝐘𝐚𝐧𝐝𝐞𝐱",
              siteNickName: IS_CHN ? "𝐘𝐚𝐧𝐝𝐞𝐱 搜索" : "𝐘𝐚𝐧𝐝𝐞𝐱.𝐜𝐨𝐦",
              siteHostName: "yandex.com",
              webURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/search/?text=`,
              imageURL: `https://yandex.${navigator.language === "ru" ? "ru" : "com"}/images/search?from=tabbar&family=no&text=`,
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "form>div.HeaderForm-InputWrapper,form>div.HeaderDesktopForm-InputWrapper",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;margin:0;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -1px;height:44px}#${def.const.leftButton} input{padding:1px 12px 0 18px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:10px;border-top-left-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{padding:1px 18px 0 12px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#ffd633}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background-color:#fdde55}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fdc93d}}`,
              resultListProp: { qs: "#search-result>li[class*='_card'][data-cid]", delay: 10 },
              keywords: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yandex_ar" })("#search-result>li.serp-item a", "Yandex", {
                  useNewTab: true,
                  removeDataSet: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "yandex_ad", immed: true })({
                  selectors: `#distr-pcode-container>div,div.HeaderDesktopActions-Distribution.HeaderDesktopActions-Item,div[tabindex][class*='location_right-bottom'],a.HeaderDesktopActions-MarketCart,span.distr-nav,div.market-cart`,
                  siteName: "Yandex",
                  isRemoveNodes: true,
                });
              },
            },
            so360: {
              siteTypeID: 8,
              siteButtonName: IS_CHN ? "𝟑𝟔𝟎搜索" : "𝟑𝟔𝟎𝐬𝐨",
              siteNickName: IS_CHN ? "𝟑𝟔𝟎 搜索" : "𝐰𝐰𝐰.𝐬𝐨.𝐜𝐨𝐦",
              siteHostName: "www.so.com",
              webURL: "https://www.so.com/s?ie=utf-8&q=",
              imageURL: "https://image.so.com/i?q=",
              imageType: ["i", "view"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "input[type='submit'][value='搜索'],button[type='submit'][class~='so-search__button']",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;top:0;left:0;z-index:199999995;margin:0 0 0 5px;padding:0;width:auto;height:40px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;padding:0 1px 0 0;height:40px;vertical-align:top}#${def.const.rightButton}{display:inline-block;height:40px;vertical-align:top}#${def.const.leftButton} input{margin:0 -2px 0 0;padding:0 18px!important;height:40px;min-width:100px;border:1px solid #0fb264;border-bottom-left-radius:8px;border-top-left-radius:8px;background:#0fb264;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px!important;height:40px;min-width:100px;border:1px solid #0fb264;border-top-right-radius:8px;border-bottom-right-radius:8px;background:#0fb264;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{box-shadow: 0 1px 2px rgba(0,0,0,0.1);background:#2dc471}`,
              resultListProp: { qs: `ul.result>li.res-list`, delay: 10 },
              keywords: "em,#mohe-newdict_dict .mh-exsentence b",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "so360_ar" })(".res-list a[href*='//www.so.com/link?m=']", "So360", {
                  useNewTab: true,
                  removeDataSet: true,
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "so360_ad", immed: true })({
                  selectors: `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,[class='inline-recommend'][data-url],div#so_top,div#so-activity-entry,div.mh-relate-text,.section li[data-id^="related_query_init_"]`,
                  siteName: "So360",
                  isRemoveNodes: true,
                });
              },
            },
            toutiao: {
              siteTypeID: 9,
              siteButtonName: IS_CHN ? "搜头条" : "𝐓𝐨𝐮𝐭𝐢𝐚𝐨",
              siteNickName: IS_CHN ? "头条 搜索" : "𝐬𝐨.𝐭𝐨𝐮𝐭𝐢𝐚𝐨.𝐜𝐨𝐦",
              siteHostName: "so.toutiao.com",
              webURL: "https://so.toutiao.com/search?dvpf=pc&keyword=",
              imageURL: "https://so.toutiao.com/search?dvpf=pc&pd=atlas&from=gallery&keyword=",
              imageType: ["atlas"],
              splitTypeName: "pd",
              mainSelector: "div[class^='search'][data-log-click]",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:-160px;z-index:1999999995;margin:-1px;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:8px;border-top-left-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:8px;border-bottom-right-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:rgba(240,65,66,.7);color:#fff}`,
              resultListProp: { qs: `div.s-result-list>div.result-content[data-i]`, delay: 10 },
              keywords: "em",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "toutiao_ar" })(".main a[href*='/search/jump?url=']", "Toutiao", {
                  useNewTab: true,
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: null,
            },
            kaifa: {
              siteTypeID: 10,
              siteButtonName: IS_CHN ? "百度开发者" : "𝐃𝐞𝐯.𝐁𝐚𝐢𝐝𝐮",
              siteNickName: IS_CHN ? "百度开发者 搜索" : "𝐃𝐞𝐯.𝐁𝐚𝐢𝐝𝐮",
              siteHostName: "kaifa.baidu.com",
              webURL: "https://kaifa.baidu.com/searchPage?module=SEARCH&wd=",
              imageURL: "https://kaifa.baidu.com/searchPage?module=SUG&wd=",
              imageType: [null],
              splitTypeName: "",
              mainSelector: "div#search-box-container .ant-input-group-addon",
              buttonCssText: `.ant-input-group-addon{background:transparent!important}#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin-left:4px;height:40px;vertical-align:bottom}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:40px;min-width:100px;border:1px solid var(--ee-brand-6);border-bottom-left-radius:10px;border-top-left-radius:10px;background:var(--ee-brand-6);color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:40px;min-width:100px;border:1px solid var(--ee-brand-6);border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--ee-brand-6);color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid var(--ee-brand-5);background:var(--ee-brand-5)}`,
              resultListProp: { qs: `ul.ant-list-items>li.ant-list-item`, delay: 10 },
              keywords: "mark",
              antiRedirectFn: null,
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "kaifa_ad", immed: true })({
                  selectors: `#reward-entry`,
                  siteName: "Kaifa",
                  isRemoveNodes: true,
                });
              },
            },
            ecosia: {
              siteTypeID: 11,
              siteButtonName: "𝐄𝐜𝐨𝐬𝐢𝐚",
              siteNickName: IS_CHN ? "𝐄𝐜𝐨𝐬𝐢𝐚 搜索" : "𝐄𝐜𝐨𝐬𝐢𝐚.𝐨𝐫𝐠",
              siteHostName: "www.ecosia.org",
              webURL: "https://www.ecosia.org/search?method=index&q=",
              imageURL: "https://www.ecosia.org/images?q=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "form[role='search'][class~='search-form'][data-test-id='main-header-search-form']",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:1999999995;display:inline-block;margin-left:4px;height:40px}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 12px 1px 18px!important;height:40px;min-width:100px;border:1px solid var(--color-form-border-default);border-bottom-left-radius:20px;border-top-left-radius:20px;background:var(--color-background-primary);box-shadow:0 1px 2px rgba(26,26,26,.18),0 0 8px rgba(26,26,26,.06);color:var(--color-button-content-tertiary);vertical-align:top;font-weight:700;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 18px 1px 12px!important;height:40px;min-width:100px;border:1px solid var(--color-form-border-default);border-top-right-radius:20px;border-bottom-right-radius:20px;background:var(--color-background-primary);box-shadow:0 1px 2px rgba(26,26,26,.18),0 0 8px rgba(26,26,26,.06);color:var(--color-button-content-tertiary);vertical-align:top;font-weight:700;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid var(--color-button-background-primary-hover);background:var(--color-button-background-primary-hover);color:var(--color-button-content-primary)}`,
              resultListProp: {
                qs: `section.mainline>div>div[data-test-id="mainline-result-web"],div.mainline__result[data-test-id="videos-snippet"] ul>li[data-test-id="videos-snippet-item"]`,
                delay: Infinity,
              },
              keywords: "",
              antiRedirectFn: function () {
                ["adBlockNoticeDismissed", "personalCounterTooltipSearch"].forEach(item => w.localStorage.setItem(item, 1));
                deBounce({
                  fn: option => {
                    if (w.gbCookies.getItem("ECFG")?.includes(":nt=1:")) return;
                    w.gbCookies.setItem(option);
                    refresh();
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
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "ecosia_ad", immed: true })({
                  selectors: `div[data-test-id="sidebar-onboarding"][href],div.main-header__install-cta,div.main-footer__card-container,div.personal-counter__tooltip,div.cookie-wrapper,div.mainline__footer>a[data-test-id='chat-entry']`,
                  siteName: "Ecosia",
                });
              },
            },
            yahoo: {
              siteTypeID: 12,
              siteButtonName: "𝐘𝐚𝐡𝐨𝐨",
              siteNickName: IS_CHN ? "𝐘𝐚𝐡𝐨𝐨 搜索" : "𝐬𝐞𝐚𝐫𝐜𝐡.𝐘𝐚𝐡𝐨𝐨",
              siteHostName: "search.yahoo.com",
              webURL: "https://search.yahoo.com/search?p=",
              imageURL: "https://images.search.yahoo.com/search/images?p=",
              imageType: ["images"],
              splitTypeName: () => w.location.hostname.split(".").slice(-4, -3)[0],
              mainSelector: "#hd div.sbx form#sf,header.hd form#sf #sh section#sbx",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;position:absolute;z-index:1999999995;display:inline-block;margin-left:4px;width:max-content;height:44px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:2px 0;padding:1px 12px 1px 18px!important;height:44px;min-width:100px;border:2px solid transparent;border-bottom-left-radius:100px;border-top-left-radius:100px;background:#4687f5;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:2px 0;padding:1px 18px 1px 12px!important;height:44px;min-width:100px;border:2px solid transparent;border-top-right-radius:100px;border-bottom-right-radius:100px;background:#4687f5;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:2px solid transparent;background:#1b68d2;color:#fff}`,
              resultListProp: { qs: `#web>ol>li`, delay: 10 },
              keywords: "strong",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yahoo_ar" })("#main ol a[href^='https://r.search.yahoo.com/_ylt=']", "Yahoo", {
                  useNewTab: true,
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "yahoo_ad", immed: true })({
                  selectors: `#main ol.searchCenterBottomAds,#main ol.searchCenterTopAds`,
                  siteName: "Yahoo",
                });
              },
            },
            you: {
              siteTypeID: 13,
              siteButtonName: "𝐘𝐨𝐮 ®",
              siteNickName: IS_CHN ? "𝐘𝐨𝐮 搜索" : "𝐘𝐨𝐮.𝐜𝐨𝐦",
              siteHostName: "you.com",
              webURL: "https://you.com/search?fromSearchBar=true&q=",
              imageURL: "https://you.com/search?fromSearchBar=true&tbm=isch&q=",
              imageType: ["isch"],
              splitTypeName: "tbm",
              mainSelector: "button[data-testid='qb_submit_button']",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:-9px 0 0;height:34px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:0;padding:0;height:44px;min-width:110px;border:1px solid #007AFF;border-bottom-left-radius:12px;border-top-left-radius:12px;background-color:#007AFF;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0;height:44px;min-width:110px;border:1px solid #007AFF;border-top-right-radius:12px;border-bottom-right-radius:12px;background-color:#007AFF;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #3395ff;background-color:#3395ff;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #0668d2;background:#0668d2}}`,
              resultListProp: {
                qs: `div[data-testid="app-mainline"]>div[data-eventappname][data-testid]>ul[data-testid="web-results"],div[data-testid="Github Issues-app"]>ul>li`,
                delay: 10,
              },
              keywords: `div[data-testid="app-mainline"] p strong,div[data-testid="app-mainline"] p b`,
              antiRedirectFn: function () {
                deBounce({
                  fn: parameters => parameters.forEach(item => localStorage.setItem(item, true)),
                  timer: "you_set",
                  immed: true,
                  once: true,
                })(["openLinksInNewTabs", "hasSeenP13nAnnouncement", "hasUserClosedExtensionModal"]);
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "you_ad", immed: true })({ siteName: "You" });
              },
            },
            startpage: {
              siteTypeID: 14,
              siteButtonName: "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞",
              siteNickName: IS_CHN ? "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞 搜索" : "𝐒𝐭𝐚𝐫𝐭𝐩𝐚𝐠𝐞.𝐜𝐨𝐦",
              siteHostName: "www.startpage.com",
              webURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=web&query=`,
              imageURL: `https://www.startpage.com/sp/search?t=device&segment=startpage.${brand.toLowerCase()}&cat=images&query=`,
              imageType: ["images"],
              splitTypeName: "cat",
              mainSelector: "#search[role='search'] button.search-btn",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline-block;margin:-11px 4px 0 .5rem;height:20px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:30px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:0;height:30px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;height:30px;min-width:85px;border:0 solid transparent;border-bottom-left-radius:2rem;border-top-left-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;height:30px;min-width:85px;border:0 solid transparent;border-top-right-radius:2rem;border-bottom-right-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#6573ff;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.rightButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #6573ff;background:#6573ff}}`,
              resultListProp: { qs: `#main>.w-gl>div.result`, delay: Infinity },
              keywords: `.result b`,
              antiRedirectFn: function () {
                deBounce({
                  fn: option => {
                    const cookies = w.gbCookies.getItem("preferences");
                    if (cookies?.includes("disable_open_in_new_windowEEE0") && cookies?.includes("enable_post_methodEEE0")) return;
                    w.gbCookies.setItem(option);
                    refresh();
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
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "startpage_ad", immed: true })({
                  selectors: `section.a-gl-tp,div.widget-install-legacy,div.mainline-results>div.block-display`,
                  siteName: "Startpage",
                });
              },
            },
            brave: {
              siteTypeID: 15,
              siteButtonName: "𝐁𝐫𝐚𝐯𝐞",
              siteNickName: IS_CHN ? "𝐁𝐫𝐚𝐯𝐞 搜索" : "𝐬𝐞𝐚𝐫𝐜𝐡.𝐁𝐫𝐚𝐯𝐞",
              siteHostName: "search.brave.com",
              webURL: "https://search.brave.com/search?source=web&q=",
              imageURL: "https://search.brave.com/images?source=web&spellcheck=0&q=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: ".searchform-container[data-testid='searchform-container']",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:0 0 0 10px;padding:0;width:max-content;height:var(--search-form-height)}.${def.const.scrollspan},.${def.const.scrollbars}{height:var(--floating-header-search-form-height)!important}.${def.const.scrollbars}{border-radius:var(--border-radius-l)!important;box-shadow:none!important}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.rightButton},#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:100%}#${def.const.leftButton} input{margin:0;padding:0 20px!important;height:var(--search-form-height);min-width:95px;border:0;outline:1px solid var(--color-serp-divider-subtle-container);box-shadow:var(--elevation-02);border-bottom-left-radius:var(--border-radius-xl);border-top-left-radius:var(--border-radius-xl);background:var(--color-serp-bar-bg);color:var(--color-text-primary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;box-sizing:border-box;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 20px!important;height:var(--search-form-height);min-width:95px;border:0;outline:1px solid var(--color-serp-divider-subtle-container);box-shadow:var(--elevation-02);border-top-right-radius:var(--border-radius-xl);border-bottom-right-radius:var(--border-radius-xl);background:var(--color-serp-bar-bg);color:var(--color-text-primary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;box-sizing:border-box;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{color:var(--color-primitive-white, #fff);background:linear-gradient(314deg,#fa7250 8.49%,#ff1893 43.72%,#a78aff 99.51%);}`,
              resultListProp: { qs: `#results>div.snippet[data-type="web"]`, delay: 10 },
              keywords: `.snippet-content strong`,
              antiRedirectFn: function () {
                localStorage.setItem("app.aiPromoDismissCount", 10);
                deBounce({
                  fn: option => {
                    if (w.gbCookies.getItem("olnt") === "1") return;
                    w.gbCookies.setItem(option);
                    refresh();
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
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 50, timer: "brave_ad" })({ siteName: "Brave" });
              },
            },
            yep: {
              siteTypeID: 16,
              siteButtonName: "𝐘𝐞𝐩 ®",
              siteNickName: IS_CHN ? "𝐘𝐞𝐩 搜索" : "𝐘𝐞𝐩.𝐜𝐨𝐦",
              siteHostName: "yep.com",
              webURL: "https://yep.com/web?q=",
              imageURL: "https://yep.com/images?q=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: `form div[class$="-addon"]`,
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:.5em;z-index:112;display:block;margin:-6px 0 0;padding:0;height:50px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:50px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:50px}#${def.const.leftButton} input{margin:0;padding:4px 15px 4px 25px!important;height:50px;min-width:95px;border:1px solid #f1dc1b;border-bottom-left-radius:25px;border-top-left-radius:25px;background:var(--background--brand);color:#333;vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:4px 25px 4px 15px!important;height:50px;min-width:95px;border:1px solid #f1dc1b;border-top-right-radius:25px;border-bottom-right-radius:25px;background:var(--background--brand);color:#333;vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:var(--background--brandHover)}`,
              resultListProp: { qs: `div[class*='-results']>div>div>div[class*='-card']`, delay: 10 },
              keywords: ``,
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yep_ar" })(
                  "div[class*='-results']>div>div>div[class*='-card'] a,div[class*='-results']>div>div>div[class*='-block'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-newsIncut'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-container'] a",
                  "Yep",
                  { useNewTab: true, forceNewTab: true, cleanAttributes: ["referrerpolicy"] }
                );
              },
              antiAdsFn: null,
            },
            swisscows: {
              siteTypeID: 17,
              siteButtonName: "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬",
              siteNickName: IS_CHN ? "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬 搜索" : "𝐒𝐰𝐢𝐬𝐬𝐜𝐨𝐰𝐬.𝐜𝐨𝐦",
              siteHostName: "swisscows.com",
              webURL: "https://swisscows.com/en/web?query=",
              imageURL: "https://swisscows.com/en/images?query=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 2 },
              mainSelector: "form.form-search>button.search-submit",
              buttonCssText: `#header .form-search{max-width:35em}#${def.const.rndButtonID}{position:absolute;top:0;z-index:112;display:block;margin:0;padding:0;height:2.8em}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:2.5em}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:2.5em}#${def.const.leftButton} input{margin:0;padding:4px 12px!important;height:2.8em;min-width:95px;border:1px solid #bfc8cd;border-bottom-left-radius:1.25em;border-top-left-radius:1.25em;background:transparent;box-shadow:0 0 2px #a4a5bb;color:#252b3b;vertical-align:middle;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:4px 12px!important;height:2.8em;min-width:95px;border:1px solid #bfc8cd;border-top-right-radius:1.25em;border-bottom-right-radius:1.25em;background:transparent;box-shadow:0 0 2px #a4a5bb;color:#252b3b;vertical-align:middle;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#edf0f3;color:#df5d5d}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #99a4ab;background:#252b3b;color:#99a4ab}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#353b3e;color:#df5d5d}}`,
              resultListProp: { qs: `.web-results>article.item-web`, delay: 10 },
              keywords: `.web-results b`,
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "swisscows_ar" })(".web-results>article.item-web a,.web-results>div.widget a:not(.widget-button)", "Swisscows", {
                  useNewTab: true,
                  forceNewTab: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "swisscows_ad", immed: true })({
                  selectors: `#header :is(.badge-tg,.badge-vpn,.badge-email),.web-results>div[class*="-privacy"]`,
                  siteName: "Swisscows",
                  isRemoveNodes: true,
                });
              },
            },
            searxng: {
              siteTypeID: 18,
              siteButtonName: "𝐒𝐞𝐚𝐫𝐗𝐍𝐆",
              siteNickName: IS_CHN ? "𝐒𝐞𝐚𝐫𝐗𝐍𝐆 搜索" : "𝐒𝐞𝐚𝐫𝐗𝐍𝐆 ©",
              siteHostName: "searx.space",
              webURL: "https://search.inetol.net/search?category_general=&language=all&time_range=&safesearch=0&theme=simple&q=",
              imageURL: "https://search.inetol.net/search?category_images=&language=all&time_range=&safesearch=0&theme=simple&q=",
              imageType: ["images"],
              splitTypeName: () => w.location.search.match(/category_([a-z]+)/)?.[1],
              mainSelector: "#search_view>div.search_box",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;top:0;right:-10px;width:0;z-index:199995;display:block;height:45px}#${def.const.leftButton}{display:inline-block;height:45px}#${def.const.rightButton}{display:inline-block;margin:0;height:45px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:45px;min-width:100px;border:0 solid #ccc;border-bottom-left-radius:.8rem;border-top-left-radius:.8rem;background:var(--color-search-background);box-shadow:var(--color-search-shadow);color:var(--color-search-font);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:45px;min-width:100px;border:0;border-top-right-radius:.8rem;border-bottom-right-radius:.8rem;background:var(--color-search-background);box-shadow:var(--color-search-shadow);color:var(--color-search-font);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rndButtonID}:hover #${def.const.leftButton} input,#${def.const.rndButtonID}:hover #${def.const.rightButton} input{background-color:var(--color-search-background);color:var(--color-search-font);}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid transparent;background-color:var(--color-search-background-hover)!important;color:var(--color-search-background)!important}`,
              resultListProp: { qs: `div#urls article.result`, delay: 10 },
              keywords: ".highlight",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "searxng_ar" })("div#urls article.result a", "SearXNG", { useNewTab: true });
              },
              antiAdsFn: null,
            },
            other: { siteTypeID: 0 },
          };

          const newSiteType = {
            BAIDU: listSite.baidu.siteTypeID,
            GOOGLE: listSite.google.siteTypeID,
            BING: listSite.bing.siteTypeID,
            DUCKDUCKGO: listSite.duckduckgo.siteTypeID,
            SOGOU: listSite.sogou.siteTypeID,
            QWANT: listSite.qwant.siteTypeID,
            YANDEX: listSite.yandex.siteTypeID,
            SO360: listSite.so360.siteTypeID,
            TOUTIAO: listSite.toutiao.siteTypeID,
            KAIFA: listSite.kaifa.siteTypeID,
            ECOSIA: listSite.ecosia.siteTypeID,
            YAHOO: listSite.yahoo.siteTypeID,
            YOU: listSite.you.siteTypeID,
            STARTPAGE: listSite.startpage.siteTypeID,
            BRAVE: listSite.brave.siteTypeID,
            YEP: listSite.yep.siteTypeID,
            SWISSCOWS: listSite.swisscows.siteTypeID,
            SEARXNG: listSite.searxng.siteTypeID,
            OTHERS: listSite.other.siteTypeID,
          };

          const engineMap = {
            "^(w+\\.)?google\\.[a-z.]{2,6}$": { siteType: newSiteType.GOOGLE, site: listSite.google },
            "kaifa\\.baidu\\.com$": { siteType: newSiteType.KAIFA, site: listSite.kaifa },
            "\\.baidu\\.com$": { siteType: newSiteType.BAIDU, site: listSite.baidu },
            "\\.bing\\.com$": { siteType: newSiteType.BING, site: listSite.bing },
            "duckduckgo\\.com$": { siteType: newSiteType.DUCKDUCKGO, site: listSite.duckduckgo },
            "\\.sogou\\.com$": { siteType: newSiteType.SOGOU, site: listSite.sogou },
            "www\\.qwant\\.com$": { siteType: newSiteType.QWANT, site: listSite.qwant },
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
            "search\\.inetol\\.net$": { siteType: newSiteType.SEARXNG, site: listSite.searxng },
          };

          const searchProperties = {
            inputArray: [
              'input#kw[name^="w"]',
              'input[name="q"]:not([type="hidden"])',
              'input[name="text"][type="text"]',
              'input#q[name="query"]',
              'input[name="query"][class$="query"]:not([id*="bottom"])',
              'input.input-search[type="search"]',
              'input[type="search"][class*="input"]',
              '#search-box-container input[class~="ant-input"]',
              'input#yschsp[name="p"]',
              'textarea[jsaction][name="q"]',
              "textarea#search-input-textarea",
            ],
            searchKeys: ["wd", "word", "query", "q", "text", "keyword", "p"],
          };

          const { currentSite, listCurrentSite } = findCurrentSite();
          const { currentSiteName, allSiteURIs } = updateSiteInformation();
          const { backgroundColor: bgc, foregroundColor: fgc } = customColor;
          const updateDetectionAddress = getGlobalParameter() && getUpdateAddress();
          const yandexIconsAPIUrl = `${def.url.yandexIcon}/${allSiteURIs}?size=32&stub=1`;
          const iconBase64Data = await fetchAndCacheRemoteIcons(yandexIconsAPIUrl);

          /* DEFINE_GLOBAL_STYLES */

          def.const.style = String(
            `.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before {box-sizing:content-box;line-height:normal}.${def.notice.animated}{animation-duration:1s;animation-fill-mode:both}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${def.notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${def.notice.random}_fadeOut{animation-name:fadeOut}.${def.notice.appear}{display:block!important}.${def.notice.noticeX},.${def.notice.noticeX} *{text-shadow:none!important;font-family:Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticeX}-top{top:0;width:100%}.${def.notice.noticeX}-top .${def.notice.item}{margin:0!important;border-radius:0!important}.${def.notice.noticeX}-topRight{top:10px;right:10px;z-index:10000059!important}.${def.notice.noticeX}-topLeft{top:10px;left:10px}.${def.notice.noticeX}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX}-middleLeft,.${def.notice.noticeX}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${def.notice.noticeX}-middleLeft{left:10px}.${def.notice.noticeX}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${def.notice.noticeX}-bottom{bottom:0;width:100%}.${def.notice.noticeX}-bottom .${def.notice.item}{border-radius:0!important;margin:0!important}.${def.notice.noticeX}-bottomRight{bottom:10px;right:10px;z-index:10000055!important}.${def.notice.noticeX}-bottomLeft{bottom:10px;left:10px}.${def.notice.noticeX}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX} .${def.notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}.${def.var.translucent} *{display:none!important}.${def.var.translucent} notice-label{display:block!important}.${def.var.disappear}{display:none!important}[gb-filter-notice]{display:block!important;margin:18px 0 28px 10px!important;padding:10px 2px!important;font:normal 400 14px/100% 'Times New Roman',system-ui,-apple-system,BlinkMacSystemFont,serif!important;-webkit-text-stroke:0 transparent!important;line-height:100%!important}gb-filters.code{display:block;margin:20px 0;word-break:break-word;font-size:12px!important}.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}{float:right;margin-right:7px;color:#fff;text-shadow:0 1px 0 #fff;font-weight:700;font-size:18px!important;line-height:1;opacity:1}` +
              `.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}:hover{color:#000;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.item} a{border-bottom:1px dashed #fff;color:#fff}.${def.notice.noticeX} .${def.notice.item} a,.${def.notice.noticeX} .${def.notice.item} a:hover{text-decoration:none}.${def.notice.noticeX} .${def.notice.success}{background-color:#64ce83;}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-heading{padding:10px;background-color:#3da95c;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body{padding:10px!important;color:#fff;}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.info}{background-color:#3ea2ff;}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-heading{padding:10px;background-color:#067cea;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body{padding:10px!important;color:#fff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.warning}{background-color:#ff7f48;}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#f97038;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body{color:#fff;padding:10px}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.error}{background-color:#e74c3c}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e93724;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body{padding:10px;color:#fff}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body:hover{visibility:visible!important}` +
              `.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.configuration} input[disabled],.${def.notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${def.notice.noticeX} .${def.notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}{float:right;margin-right:7px;color:#000000;text-shadow:0 1px 0 #aaa;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}:hover{color:#555;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e7e7e7;color:#333;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body{padding:10px;color:#333333}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.noticeX}-heading-title{display:inline-block;vertical-align:middle;overflow:hidden;max-width:90%;text-overflow:ellipsis;white-space:nowrap}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#64ce83}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#3da95c}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#3ea2ff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#067cea;}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#ff7f48}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#f44e06}` +
              `.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#fd5f4e}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ba2c1d}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#efefef}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ccc}@keyframes ${def.notice.noticeX}-progress{0%{width:100%}to{width:0}}@keyframes ${def.notice.noticeX}-fadeOut{0%{opacity:1}to{opacity:0}}.${def.notice.noticeX}-fadeOut{animation-name:${def.notice.noticeX}-fadeOut}.${def.notice.noticeX}{position:fixed;z-index:10000051}.${def.notice.noticeX} ::-webkit-scrollbar{width:8px}.${def.notice.noticeX} ::-webkit-scrollbar-button{width:8px;height:8px}.${def.notice.noticeX} ::-webkit-scrollbar-track{border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.rName}{padding:2px!important}.${def.notice.noticeX} .${def.notice.rName} dl{margin:0!important;padding:1px!important}.${def.notice.noticeX} .${def.notice.rName} dl dt{margin:2px 0 6px!important;font-weight:900!important;font-size:16px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${def.notice.noticeX} .${def.notice.rName} .${def.notice.center}{width:100%;text-align:center!important}.${def.notice.noticeX} .${def.notice.rName} dl dd em{padding:0 5px;color:#fff;font-style:italic;font-size:24px!important;font-family:Candara,sans-serif!important}.${def.notice.noticeX} .${def.notice.rName} dl dd span{margin-right:8px;font-weight:700;font-size:15px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd i{font-size:20px!important;font-family:Candara,sans-serif!important}.${def.notice.noticeX} .${def.notice.rName} dl dd .im{padding:0 3px;color:gold;font-weight:900;font-size:16px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} ul{display:inline-block;margin:0 0 0 8px;padding:4px 4px 8px;width:95%;color:rgba(255, 255, 255, 0.8);counter-reset:xxx 0;vertical-align:top;text-align:left}` +
              `.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li{position:relative;margin:0 0 0 2px;padding:0 0 2px 2px;list-style:none;font-style:italic!important;line-height:150%;-webkit-transition:.12s;transition:.12s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li::before{display:inline-block;margin-left:-1.5em;width:1.5em;content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-size:14px;font-family:Candara,sans-serif;-webkit-transition:.5s;transition:.5s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} #${def.notice.stopUpdate}{float:right;margin:0 5px!important;font-size:12px!important;cursor:help}.${def.const.loading}{position:relative;}.${def.const.loading}::after{content:" \u21ba";animation:fade 1.25s infinite;}@keyframes fade{0%{opacity:0.1}50%{opacity:0.5}to{opacity:0}}.${def.notice.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important;color:#999}#${def.notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;margin:2px 4px 0 0;width:14px;height:14px;border:2px solid #fff;border-radius:50%;background:#ffa077;vertical-align:top;cursor:help;-webkit-appearance:none}#${def.notice.stopUpdate}:hover input,#${def.notice.stopUpdate} input:hover{background:#ba2c1d;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}{display:none!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;padding:11px 9px;width:58px;height:10px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);word-wrap:normal!important;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;-webkit-border-radius:7px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);color:#fff;content:" "}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;-webkit-border-radius:100px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-size:14px}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::after{top:2px;left:10px;content:"ON"}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}{display:flex;margin:0 0 10px;padding:6px 0;width:162px;height:25px;border:2px solid #eee;border-radius:6px;background:#fff;box-shadow:1px 1px 0 1px #aaa;font-size:14px!important;cursor:pointer;align-content:center;justify-content:center;align-items:center}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}:hover{box-shadow:1px 1px 3px 0 #888;color:red}.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon}{margin:0 6px 0 0;width:24px;height:24px}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList}{margin:5px;padding:2px;list-style:none}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList} li{margin:0;list-style:none;font-style:normal}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.fieldset}{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;border:2px dashed #dfdfdf;border-radius:10px;background:transparent!important;text-align:left}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.legend}{display:block;margin:0;padding:0 8px;width:auto;color:#8b0000!important;font-weight:900!important;font-size:14px!important;-webkit-user-select:all;user-select:all}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList}{margin:0;padding:0;background:transparent!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li{float:none;display:flex;margin:3px 0;padding:2px 8px 2px 12px;height:36px;border:none;background:transparent!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none;align-content:center;justify-content:space-between}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li>div{font:normal 700 14px/150% 'Microsoft YaHei UI',Helvetica Neue,sans-serif!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button{box-sizing:border-box;margin:0 0 0 8px;padding:4px 8px;height:36px;min-width:65px;border:1px solid #ccc;border-radius:8px;background:#fafafa;box-shadow:1px 1px 1px 0 #ccc;color:#5e5e5e;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info{font-weight:400!important;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info em{color:crimson!important;font-style:normal;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_textarea{padding: 6px 0;margin:0}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter{display:block;margin:0;height:100%}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar{width:8px;height:8px}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb{border-radius:4px;background:#cfcfcf}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.random}_filter_textarea textarea::placeholder{color:#555;font:normal 500 16px/150% ui-monospace,monospace,system-ui,-apple-system,BlinkMacSystemFont!important;opacity:0.85;white-space:break-spaces}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{box-sizing:border-box;margin:0!important;padding:5px!important;max-height:423px;width:100%;min-height:280px;outline:0!important;border:1px solid #bbb;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,monospace,sans-serif!important;resize:vertical;overscroll-behavior:contain;word-break:keep-all!important;cursor:auto}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content::placeholder{font:normal 400 14px/150% ui-monospace,monospace!important}.${def.notice.noticeX} .${def.notice.configuration} #${def.notice.random}_customColor{margin:0;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button:hover{background:#fff;cursor:pointer}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}__content{display:block;margin:0;height:268px}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:4px 0 3px;padding:8px;width:266px;max-height:237px;overscroll-behavior:contain}.${def.notice.card} h2{margin:0;padding:0;border:0;vertical-align:baseline;font:inherit;font-size:100%;line-height:135%;}#${def.notice.random}_help{position:relative;margin:0;padding:4px 15px!important;border:1px solid transparent;background:#f07f6a;box-shadow:0 0 6px 0 #f5846f;color:#fff;cursor:help}#${def.notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${def.notice.random}_clear{margin:0 0 0 10px;color:#666;font-weight:500;cursor:pointer}#${def.notice.random}_clear:hover{color:red}#${def.notice.random}_clear u{padding:0 2px;text-decoration:none}.${def.notice.linkerror},.${def.notice.linkerror}:hover,.${def.notice.linkerror} *,.${def.notice.linkerror} *:hover{color:grey!important;text-decoration-line:line-through!important;text-decoration-color:red!important;text-decoration-style:wavy!important}@-moz-document url-prefix() {.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before,.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{scrollbar-color:#bbbb #eee1;scrollbar-width:thin}}.${def.notice.card}{margin:0;padding:0;--background:#fff;--background-chackbox:#0082ff;--background-image:#fff,rgba(0,107,175,0.2);--text-color:#666;--text-headline:#000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}` +
              `.${def.notice.card}__input{position:absolute;display:none;margin:0;padding:0;outline:none;border:none;background:none;-webkit-appearance:none}.${def.notice.card}__input:checked ~ .${def.notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#fff;--chack-scale:1;--chack-opacity:1;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox--svg{--stroke-color:#fff;--stroke-dashoffset:0;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover:after{--opacity-bg:0;}.${def.notice.random}_iconText{color:#333}.${def.notice.random}_iconText:hover{color:crimson}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body{cursor:not-allowed;opacity:0.5;}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body:active{--scale:1;}.${def.notice.card}__body{position:relative;display:grid;overflow:hidden;width:var(--card-witght);height:var(--card-height);border-radius:var(--card-radius);background:var(--background);box-shadow:var(--shadow,1px 1px 3px 1px #ccc);cursor:pointer;-webkit-transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:transform var(--transition),box-shadow var(--transition);transition:transform var(--transition),box-shadow var(--transition),-webkit-transform var(--transition);-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0);grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto}` +
              `.${def.notice.card}__body:active{--scale:0.96;}.${def.notice.card}__body-cover-image{position:absolute;top:8px;left:10px;z-index:100;width:32px;height:32px}.${def.notice.card}__body-cover-image span.${def.notice.favicons}{display:block;width:32px;height:32px}.${def.notice.card}__body-cover-chackbox{position:absolute;top:10px;right:10px;z-index:1;width:28px;height:28px;border:2px solid var(--chack-border,#fff);border-radius:50%;background:var(--chack-bg,var(--background-chackbox));opacity:var(--chack-opacity,0);transition:transform var(--transition),opacity calc(var(--transition)*1.2) linear,-webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale,0));transform:scale(var(--chack-scale,0))}.${def.notice.card}__body-cover-chackbox--svg{display:inline-block;visibility:visible!important;margin:8px 0 0 7px;width:13px;height:11px;vertical-align:top;-webkit-transition:stroke-dashoffset .4s ease var(--transition);transition:stroke-dashoffset .4s ease var(--transition);fill:none;stroke:var(--stroke-color,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset,16px)}.${def.notice.card}__body-header{padding:4px 10px 6px 50px;height:var(--header-height);background:var(--background)}.${def.notice.card}__body-header-title{margin-bottom:0!important;color:var(--text-headline);font-weight:700!important;font-size:15px!important}.${def.notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}.${def.notice.gberror}{display:block;margin:0 0 4px -6px;padding:6px;width:max-content;border:1px dashed #ffb78c;border-radius:4px;color:#ffb78c}`
          );
          def.const.iconbg = iconBase64Data ? `url('${iconBase64Data}')` : `url('${def.url.backupIcon}'),url('${yandexIconsAPIUrl}')`;
          def.const.button = `${currentSite.siteTypeID === newSiteType.GOOGLE ? "<span jsname='s1VaRe' class='ACRAdd M2vV3'></span>" : ""}
            <span id="${def.const.leftButton}" sn="${selectedSite[0].siteTypeID}">
              <input type="button" title="${selectedSite[0].siteNickName}" value="${selectedSite[0].siteButtonName}"/>
            </span>
            <span id="${def.const.rightButton}" sn="${selectedSite[1].siteTypeID}">
              <input type="button" title="${selectedSite[1].siteNickName}" value="${selectedSite[1].siteButtonName}"/>
            </span>`;
          def.const.hlstyle = listCurrentSite.keywords ? `${listCurrentSite.keywords}{background-color:${bgc}!important;color:${fgc}!important;font-weight:600!important}` : ``;
          def.const.iconstyle = `.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon},.${def.notice.card}__body-cover-image span.${def.notice.favicons}{background-color:transparent;background-image:${def.const.iconbg};background-repeat:no-repeat;}`;

          function getQueryString() {
            let returnValue;
            const { inputArray, searchKeys } = searchProperties;
            const checkResult = qA(inputArray.join()).Some((item, index) => {
              returnValue = item.value;
              DEBUG("QueryString[INPUT]:", { current: returnValue, index });
              return returnValue;
            });
            if (!checkResult) {
              for (let i = 0; i < searchKeys.length; i++) {
                const queryString = getUrlParam(searchKeys[i]);
                if (!queryString) continue;
                returnValue = queryString.replace(/\+/g, " ");
                DEBUG("QueryString[URL]:", { queryKey: searchKeys[i], returnValue });
                break;
              }
            }
            return encodeURIComponent(returnValue ?? "");
          }

          function checkIndexPage() {
            return [newSiteType.DUCKDUCKGO, newSiteType.QWANT].includes(currentSite.siteTypeID) ? !getUrlParam("q") : w.location.pathname === "/";
          }

          function getSecurityPolicy() {
            return (
              (currentSite.siteTypeID === newSiteType.GOOGLE && (/^(lcl|flm|fin)$/.test(def.var.searchType) || getUrlParam("csui") === "1")) ||
              (currentSite.siteTypeID === newSiteType.BING && (/^maps$/.test(def.var.searchType) || getQueryString("showconv") === "1")) ||
              (currentSite.siteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(def.var.searchType)) ||
              (currentSite.siteTypeID === newSiteType.SOGOU && /^(fanyi|hanyu|as)/.test(w.location.hostname)) ||
              (currentSite.siteTypeID === newSiteType.DUCKDUCKGO && /^maps$/.test(getUrlParam("iaxm"))) ||
              (currentSite.siteTypeID === newSiteType.YANDEX && w.location.pathname.includes("/direct")) ||
              (currentSite.siteTypeID === newSiteType.YAHOO && w.location.hostname.search(/news|video/) !== -1) ||
              (currentSite.siteTypeID === newSiteType.YOU && /^youchat$/.test(def.var.searchType)) ||
              (currentSite.siteTypeID === newSiteType.SEARXNG && /^map$/.test(def.var.searchType))
            );
          }

          function findCurrentSite() {
            let currentSite, listCurrentSite;
            const hostname = w.location.hostname;
            for (const regex in engineMap) {
              if (hasOwnProp.call(engineMap, regex) && new RegExp(regex).test(hostname)) {
                const { siteType, site } = engineMap[regex];
                currentSite = selectedEngine.includes(siteType) ? site : listSite.other;
                listCurrentSite = site;
                break;
              }
            }
            return { currentSite, listCurrentSite };
          }

          function updateSiteInformation() {
            let currentSiteName = "";
            let allSiteURIs = "";
            for (let site in listSite) {
              if (hasOwnProp.call(listSite, site)) {
                if (listSite[site].siteTypeID !== newSiteType.OTHERS) allSiteURIs += listSite[site].siteHostName + ";";
                if (listSite[site].siteTypeID === listCurrentSite.siteTypeID) currentSiteName = site;
                if (listSite[site].siteTypeID !== currentSite.siteTypeID && selectedEngine.includes(Number(listSite[site].siteTypeID))) {
                  selectedSite.length < 2 && selectedSite.push(listSite[site]);
                }
              }
            }
            return { currentSiteName, allSiteURIs };
          }

          function getGlobalParameter() {
            def.var.indexPage = checkIndexPage();
            def.var.queryString = getQueryString();
            def.var.searchType = getUrlParam(currentSite.splitTypeName);
            def.var.securityPolicy = getSecurityPolicy();
            return (checkCurrentPage() && handlePageCheck()) || true;
          }

          function handlePageCheck() {
            if (antiLinkRedirect && cachedRequestLinks.size > 0) {
              cachedRequestLinks.clear();
              DEBUG("Task Clear!");
            }
            if (antiResultsFilter && usedFilterWords.size > 0) {
              usedFilterWords.clear();
              DEBUG("Filter Clear!");
            }
          }

          function checkCurrentPage() {
            const currentUrl = w.location.href;
            if (def.var.previousUrl !== currentUrl) {
              def.var.previousUrl = currentUrl;
              return true;
            }
          }

          function setupGlobalParameterListener() {
            if (GMcontentMode && document.body) {
              const observer = new MutationObserver(deBounce({ fn: getGlobalParameter, delay: 50, timer: "globalParameter" }));
              observer.observe(document.body, { childList: true, subtree: true });
            } else {
              w.addEventListener("pushState", getGlobalParameter);
              w.addEventListener("replaceState", getGlobalParameter);
              w.addEventListener("popstate", getGlobalParameter);
            }
          }

          async function updateToRequestIcon(isReload = true) {
            try {
              const iconDataURL = await requestRemoteIcon(yandexIconsAPIUrl);
              if (iconDataURL) cache.set("_remoteicons_", iconDataURL, 2592e6);
            } catch (e) {
              ERROR("updateToRequestIcon: Can't fetch the iconData.");
            } finally {
              isReload && refresh();
            }
          }

          function openUpdateWindow(url) {
            if (IS_REAL_GECKO || IS_REAL_WEBKIT || (IS_REAL_BLINK && GMscriptHandler === "Tampermonkey" && parseFloat(GMversion) >= 5.2)) {
              def.const.updateWindow = GMopenInTab(IS_GREASEMONKEY ? url.replace(/\?\w+/g, "") : url, false);
            } else {
              w.location.href = url;
            }
          }

          function showNotification() {
            const loadingTip = IS_REAL_GECKO
              ? `${IS_CHN ? "已经在新窗口打开脚本升级页面，请注意切换！" : "The upgrade page is opened in new window!"}`
              : `${IS_CHN ? "正在申请脚本更新安装页面，请稍后……" : "Installation page is requested, please wait..."}`;
            const okTip = IS_CHN ? "<dd><b>若您已更新完成</b>，请点此刷新页面，以使新版脚本生效！</dd>" : "<dd><b>If updated</b>, click here to make the script effective!</dd>";
            GMnotification({
              title: IS_CHN ? "升级提示" : "Update Tips",
              text: createNoticeHTML(`<dd id="${def.notice.random}_loading" style="color:yellow;font-weight:600">${loadingTip}</dd>${okTip}`),
              type: def.notice.info,
              closeWith: ["click"],
              timeout: false,
              position: "topRight",
              callbacks: { onClose: [updateToRequestIcon] },
            });
            if (def.const.updateWindow) {
              sleep(6e3, { useCachedSetTimeout: true }).then(() => {
                def.const.updateWindow.onclose = () => delete def.const.updateWindow;
                def.const.updateWindow.close?.();
              });
            }
            return qS(`#${def.notice.random}_loading`);
          }

          async function removeLoadingElement(node) {
            await sleep(4e3, { useCachedSetTimeout: true });
            safeRemove(node);
          }

          function preInstall(url) {
            sleep(5e2)(url.replace(".meta.", ".user."))
              .then(u => openUpdateWindow(u))
              .then(() => showNotification())
              .then(r => removeLoadingElement(r))
              .catch(e => ERROR("preInstall:", e.message));
          }

          void (async function (getUpdateInformation, parseUpdateInformatio) {
            const addAction = {
              closeConfig: async () => {
                const configureSelector = `.${def.notice.noticeX} .${def.notice.configuration}`;
                return await NoticeX.close(qS(configureSelector));
              },
              listSearchEngine: currentSite => {
                let returnHtml = "";
                for (let site in listSite) {
                  if (hasOwnProp.call(listSite, site) && listSite[site].siteTypeID !== 0 && listSite[site].siteTypeID !== currentSite.siteTypeID) {
                    const iconStyle = `background-position:0 ${(1 - listSite[site].siteTypeID) * 24}px;background-attachment:local;background-size:cover;`;
                    const buttonTitle = selectedEngine.includes(listSite[site].siteTypeID) ? `title="${IS_CHN ? "您常用的搜索引擎" : "Commonly used search engine"}"` : ``;
                    returnHtml += String(
                      `<li>
                        <button class="${def.notice.searchButton}" id="${listSite[site].siteTypeID}" ${buttonTitle}>
                          <span class="${def.notice.favicon} ${def.notice.random}_icon" style="${iconStyle}"></span>
                          <span class="${def.notice.random}_iconText">
                            ${listSite[site].siteNickName}<sup>${selectedEngine.includes(listSite[site].siteTypeID) ? "\u2726" : "\u0020"}</sup>
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
                  if (hasOwnProp.call(listSite, site) && listSite[site].siteTypeID !== 0) {
                    const iconStyle = `background-position:0 ${(1 - listSite[site].siteTypeID) * 32}px;background-attachment:local;background-size:32px auto;`;
                    const inputStatus = selectedEngine.includes(listSite[site].siteTypeID) ? "checked" : "disabled";
                    returnHtml += String(
                      `<label class="${def.notice.card}">
                        <input class="${def.notice.card}__input" type="checkbox" name="${def.notice.card}_lists" data-sn="${listSite[site].siteTypeID}" ${inputStatus}/>
                        <div class="${def.notice.card}__body">
                          <header class="${def.notice.card}__body-header">
                            <span class="${def.notice.card}__body-cover-chackbox">
                              <svg class="${def.notice.card}__body-cover-chackbox--svg" viewBox="0 0 12 10"><polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
                            </span>
                            <span class="${def.notice.card}__body-cover-image">
                              <span class="${def.notice.favicons} ${def.notice.random}_icon" style="${iconStyle}"></span>
                            </span>
                            <h2 class="${def.notice.card}__body-header-title" fr-fix-stroke="true">${listSite[site].siteNickName}</h2>
                            <p class="${def.notice.card}__body-header-subtitle" style="margin:0;padding:0">${listSite[site].siteHostName}</p>
                          </header>
                        </div>
                      </label>`
                    );
                  }
                }
                return returnHtml;
              },
              setConfigure: () => {
                sleep(5e2)(addAction.closeConfig()).then(isClosed => {
                  if (!isClosed) return;
                  const configText = String(
                    `<fieldset class="${def.notice.fieldset}">
                      <legend class="${def.notice.legend}" title="Version ${def.var.curVersion}">
                        ${IS_CHN ? "高级功能参数设置" : "Advanced Feature Settings"}
                      </legend>
                      <ur class="${def.notice.settingList}">
                        <li class="${def.notice.random}__content">
                          <div>${IS_CHN ? "请选择三个最常用的搜索引擎：" : "Choose three of your favs:"}
                          <span id="${def.notice.random}_clear">[<u>${IS_CHN ? "清除" : "Clear"}</u>]</span></div>
                          <div class="${def.notice.grid}">
                          ${addAction.listSelectSearchEngine()}
                          </div>
                        </li>
                        <li>
                          <div>${IS_CHN ? "键盘快捷键功能开关" : "Keyboard Shortcut"}</div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.hk}" class="${def.notice.checkbox}" ${isHotkey ? "checked" : ""} />
                            <label for="${def.notice.hk}"></label>
                          </div>
                        </li>
                        <li>
                          <div>${IS_CHN ? "Google 国际站跳转" : "Open Google NCR"}</div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.gj}" class="${def.notice.checkbox}" ${googleJump ? "checked" : ""} />
                            <label for="${def.notice.gj}"></label>
                          </div>
                        </li>
                        <li>
                          <div>${IS_CHN ? "在当前浏览器窗口跳转" : "Open in Self-window"}</div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.lw}" class="${def.notice.checkbox}" ${localWindow ? "checked" : ""} />
                            <label for="${def.notice.lw}"></label>
                          </div>
                        </li>
                        <li>
                          <div style="display:flex">${IS_CHN ? "搜索关键词高亮增强" : "Keyword Enhance"}
                            <span title="${IS_CHN ? "自定义关键词颜色" : "Custom Keyword Color"}" id="${def.notice.random}_customColor"\
                              style="display:${keywordHighlight ? `inline-block` : `none`}">\ud83c\udfa8</span>
                          </div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.kh}" class="${def.notice.checkbox}" ${keywordHighlight ? "checked" : ""} />
                            <label for="${def.notice.kh}"></label>
                          </div>
                        </li>
                        <li>
                          <div>${IS_CHN ? "去除链接重定向跳转" : "Remove Redirection"}</div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.ar}" class="${def.notice.checkbox}" ${antiLinkRedirect ? "checked" : ""} />
                            <label for="${def.notice.ar}"></label>
                          </div>
                        </li>
                        <li>
                          <div title="${IS_CHN ? "实验性功能" : "Beta Version"}">${IS_CHN ? "去除搜索结果广告" : "Remove Ads"}
                          <sup style="padding:0;font-style:italic;color:crimson;font-size:11px">Beta!</sup></div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.aa}" class="${def.notice.checkbox}" ${antiAds ? "checked" : ""} />
                            <label for="${def.notice.aa}"></label>
                          </div>
                        </li>
                        <li>
                          <div title="${IS_CHN ? "关闭更新检测或由扩展自动更新时，您需要到脚本主页查看更新内容。" : "We recommend that you turn on update detection."}">
                          ${IS_CHN ? "更新检测（默认：开）" : "Auto Update Detect"}</div>
                          <div style="margin:-2px 2px 0 10px">
                            <input type="checkbox" id="${def.notice.au}" class="${def.notice.checkbox}" ${isAutoUpdate ? "checked" : ""} />
                            <label for="${def.notice.au}"></label>
                          </div>
                        </li>
                        <li style="display:flex;justify-content:space-between;">
                          <button id="${def.notice.random}_help" title="${IS_CHN ? "单击查看脚本主页" : "View Homepage"}">
                          ${IS_CHN ? "脚本主页" : "Guide!"}
                          </button>
                          <div style="display:flex">
                            <button id="${def.notice.random}_cancel">${IS_CHN ? "取消" : "Cancel"}</button>
                            <button id="${def.notice.random}_submit">${IS_CHN ? "保存" : "Save"}</button>
                          </div>
                        </li>
                      </ul>
                    </fieldset>`
                  );
                  const configInterface = GMnotification({
                    title: `${def.var.scriptName} v${def.var.curVersion}`,
                    text: configText,
                    type: def.notice.configuration,
                    width: 326,
                    closeWith: ["button"],
                    scroll: { maxHeight: 680, showOnHover: true },
                    progressBar: false,
                    timeout: false,
                    position: "topRight",
                  });
                  qA(`input[name='${def.notice.card}_lists']`).forEach(node => void addCardClickEvent(node));
                  qS(`#${def.notice.random}_clear`)?.addEventListener("click", cleanSelectedCard);
                  qS(`#${def.notice.kh}`)?.addEventListener("click", showCustomColor);
                  qS(`#${def.notice.random}_customColor`)?.addEventListener("click", submitKeywordColor);
                  qS(`#${def.notice.random}_help`)?.addEventListener("click", openHomePage);
                  qS(`#${def.notice.random}_cancel`)?.addEventListener("click", () => void NoticeX.close(configInterface));
                  qS(`#${def.notice.random}_submit`)?.addEventListener("click", saveConfigureData);
                });
              },
              listEngine: () => {
                sleep(5e2)(addAction.closeConfig()).then(isClosed => {
                  if (!isClosed) return;
                  GMnotification({
                    title: `\ud83d\udc4b ${IS_CHN ? "你想去哪里吖？" : "Where to visit?"}`,
                    text: addAction.listSearchEngine(listCurrentSite),
                    type: def.notice.configuration,
                    width: 200,
                    closeWith: ["button"],
                    scroll: { maxHeight: 565, showOnHover: true },
                    timeout: 12e3,
                    position: "topRight",
                  });
                  qA(`.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.searchButton}`).forEach(item => setupClickEventOnCard(item));
                });
              },
              filterResult: () => {
                sleep(5e2)(addAction.closeConfig()).then(async isClosed => {
                  if (!isClosed) return;
                  const _filter_Data_ = await getResultFilterData();
                  const { trigger: antiResultsFilter, filter: resultFilters } = _filter_Data_;
                  const infoText = IS_CHN
                    ? `设置拦截关键词以数组为标准格式，每行一组过滤关键词（注意：非正则语句须转义字符，且最末行尾无逗号），支持高级正则表达式语法，不区分大小写。<em>详细设置规则请查看『设置指引』。</em>`
                    : `Filter keyword settings use Array as standard format, one filter keyword per line. Supports regular expressions and is not case-sensitive. <em>See "Guide" for detailed setting rules!</em>`;
                  const placeholder = IS_CHN
                    ? `设置如下数组格式：\n[\n   "任意关键词",\n   "任意网址但要注意转义",\n   "\\\\/\\\\/test\\\\.cn\\\\/id-\\\\d+",\n   "\\\\(\\\\?\\\\=非正则须转义\\\\)",`
                    : `Set Array as follows: \n[\n   "Any keywords",\n   "Any URLs but must be escaped",\n   "v\\\\.test\\\\.com\\\\/test\\\\.html",\n   \\\\(\\\\?\\\\:Non-regex escaped\\\\)",`;
                  const placeholderText = placeholder + `\n   "www\\\\.example\\\\.[a-z]{2,3}",\n   "(a|b)\\\\.test\\\\.com",\n   "keyword1|keyword[2345]",\n   "^(?!.*B).*A.*$"\n]`;
                  const resultFiltersJSON = resultFilters.length ? JSON.stringify(resultFilters, null, "  ") : "";
                  const filterHTML = String(
                    `<fieldset class="${def.notice.fieldset}">
                        <legend class="${def.notice.legend}" title="Version ${def.var.curVersion}">
                          ${IS_CHN ? "搜索结果拦截关键词设置" : "Search Filter Settings"}
                        </legend>
                        <ur class="${def.notice.settingList}">
                          <li>
                            <div>${IS_CHN ? "关键词拦截开关" : "Filter Switches"}</div>
                            <div style="margin:-2px 2px 0 10px">
                              <input type="checkbox" id="${def.notice.rf}" class="${def.notice.checkbox}" ${antiResultsFilter ? "checked" : ""} />
                              <label for="${def.notice.rf}"></label>
                            </div>
                          </li>
                          <li class="${def.notice.random}_filter">
                            <div class="${def.notice.random}_filter_info">
                            ${infoText}
                            </div>
                            <div class="${def.notice.random}_filter_textarea">
                              <textarea class="${def.notice.random}_filter_content" placeholder='${placeholderText}'>${resultFiltersJSON}</textarea>
                            </div>
                            <div style="text-align:center;padding:0 0 6px 0">
                            ${IS_CHN ? "(程序仅检测搜索结果列表内的可见文字)" : "(ONLY DETECT VISIBLE TEXT IN RESULT)"}
                            </div>
                          </li>
                          <li style="display:flex;justify-content:space-between;">
                            <button id="${def.notice.random}_help" title="${IS_CHN ? "查看详细设置规则请单击设置指引！" : "See document for detailed setting rules! (Chinese)"}">
                            ${IS_CHN ? "设置指引" : "Guide!"}
                            </button>
                            <div style="display:flex">
                              <button id="${def.notice.random}_cancel">${IS_CHN ? "取消" : "Cancel"}</button>
                              <button id="${def.notice.random}_submit">${IS_CHN ? "保存" : "Save"}</button>
                            </div>
                          </li>
                        </ul>
                      </fieldset>`
                  );
                  const filterInterface = GMnotification({
                    title: `${def.var.scriptName} v${def.var.curVersion}`,
                    text: filterHTML,
                    type: def.notice.configuration,
                    width: 380,
                    closeWith: ["button"],
                    scroll: { maxHeight: 680, showOnHover: true },
                    progressBar: false,
                    timeout: false,
                    position: "topRight",
                  });
                  const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
                  const tigger = qS(`#${def.notice.rf}`);
                  if (!tigger?.checked) {
                    textarea.classList.add(def.notice.readonly);
                    textarea.setAttribute("readonly", true);
                  }
                  tigger?.addEventListener("change", changeEventOnTigger);
                  textarea?.addEventListener("compositionstart", () => (def.var.composing = true));
                  textarea?.addEventListener("compositionend", () => void delete def.var.composing);
                  textarea?.addEventListener("input", addInputEventOnTextarea);
                  qS(`#${def.notice.random}_help`)?.addEventListener("click", () => void GMopenInTab(`${def.url.feedback}/288`, false));
                  qS(`#${def.notice.random}_cancel`)?.addEventListener("click", () => void NoticeX.close(filterInterface));
                  qS(`#${def.notice.random}_submit`)?.addEventListener("click", savefilterResultData);
                });
              },
            };

            function changeEventOnTigger() {
              const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
              if (this.checked) {
                textarea.classList.remove(def.notice.readonly);
                textarea.removeAttribute("readonly");
              } else {
                textarea.classList.add(def.notice.readonly);
                textarea.setAttribute("readonly", true);
              }
            }

            async function savefilterResultData() {
              const filter_String = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`).value.trim();
              const fitler_Trigger = qS(`#${def.notice.rf}`).checked;
              try {
                const _filter_String = filter_String ? JSON.parse(filter_String) : [];
                if (!Array.isArray(_filter_String) || _filter_String.Some(item => typeof item !== "string")) throw new Error("Format Error");
                const _resultFilter_Data = { filter: uniq(_filter_String), trigger: fitler_Trigger };
                GMsetValue("_resultFilter_", encrypt(JSON.stringify(_resultFilter_Data)));
                (await addAction.closeConfig()) &&
                  GMnotification({
                    title: IS_CHN ? "保存成功！" : "Success!",
                    text: createNoticeHTML(IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>"),
                    callbacks: { onClose: [refresh] },
                  });
              } catch (e) {
                const noticeText = IS_CHN ? "设置数据格式有误，请修正后重新提交。" : "The setting data format is incorrect!";
                GMnotification({
                  text: createNoticeHTML(`<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31\u0020</e>${noticeText}</dd>`),
                  type: def.notice.error,
                  closeWith: ["click"],
                });
              }
            }

            function addInputEventOnTextarea() {
              try {
                if (def.var.composing) return;
                if (this.value === "") {
                  this.style.border = "1px solid #999";
                  return;
                }
                let previousCursorPosition = this.selectionStart;
                const formattedValue = JSON.stringify(JSON.parse(this.value.trim()), null, "  ");
                const diff = formattedValue.length - this.value.length;
                const newCursorPosition = previousCursorPosition + diff;
                const currentScrollTop = this.scrollTop;
                this.value = formattedValue;
                this.style.border = "1px solid #999";
                sleep(0)([currentScrollTop, newCursorPosition]).then(([top, pos]) => {
                  this.scrollTop = top;
                  this.setSelectionRange(pos, pos);
                });
              } catch (e) {
                this.style.border = "2px solid #dc143c";
              }
            }

            function setupClickEventOnCard(item) {
              item.addEventListener(
                "click",
                function (listCurrentSite, localWindow) {
                  let url;
                  for (let type in newSiteType) {
                    if (hasOwnProp.call(newSiteType, type) && newSiteType[type] === Number(item.id)) {
                      const isImageType = listCurrentSite.imageType.includes(getUrlParam(listCurrentSite.splitTypeName).trim());
                      url = isImageType ? listSite[type.toLowerCase()].imageURL : listSite[type.toLowerCase()].webURL;
                      break;
                    }
                  }
                  if (localWindow) top.location.href = decodeURI(url + getQueryString());
                  else GMopenInTab(decodeURI(url + getQueryString()), false);
                }.bind(this, listCurrentSite, localWindow)
              );
            }

            function openHomePage() {
              const hash = IS_CHN ? "#%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E5%8A%A9%E6%89%8B" : "index_en.html#search-engine-assistant";
              GMopenInTab(`${def.url.homepage}${hash}-google--baidu-switcheruserjs`, false);
            }

            function addCardClickEvent(node) {
              node.addEventListener("click", () => {
                const input_checked = qA(`input[name='${def.notice.card}_lists']:checked:enabled`).length;
                if (input_checked < 3) {
                  qA(`input[name='${def.notice.card}_lists']:disabled`).forEach(item => (item.disabled = false));
                  qS(`#${def.notice.random}_clear`).style.display = input_checked === 0 ? "none" : "inline";
                } else {
                  qA(`input[name='${def.notice.card}_lists']:not(:checked)`).forEach(item => (item.disabled = true));
                }
              });
            }

            function submitKeywordColor() {
              let inputFgColor, inputBgColor;
              const colorReg =
                /^#[0-9a-f]{3}$|^#[0-9a-f]{6}$|^#[0-9a-f]{8}$|^rgba\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*((?!1.[1-9])[0-1]?(\.[0-9]{1,3})?)\)$|^rgb\(((([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))))|(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))(\s+\/\s+((\d+%)|1|(0\.\d+)))?))\)$|^transparent$|^currentcolor$/i;
              const foregroundColorText = IS_CHN
                ? `请输入关键词前景色（字体颜色），默认为“#f73131cd”，支持HEX, HEXA, RGB, RGBA, currentcolor的颜色格式。`
                : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐤𝐞𝐲𝐰𝐨𝐫𝐝 𝐟𝐨𝐫𝐞𝐠𝐫𝐨𝐮𝐧𝐝-𝐜𝐨𝐥𝐨𝐫 (𝐟𝐨𝐧𝐭 𝐜𝐨𝐥𝐨𝐫):\r\nThe default is "#f73131cd" and supports the color formats of HEX, HEXA, RGB, RGBA and currentcolor.`;
              const backgroundColorText = IS_CHN
                ? `请输入关键词背景色，默认为“#ffff80ad”，支持HEX, HEXA, RGB, RGBA, transparent的颜色格式。`
                : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐤𝐞𝐲𝐰𝐨𝐫𝐝 𝐛𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝-𝐜𝐨𝐥𝐨𝐫:\r\nThe default is "#ffff80ad" and supports the color formats of HEX, HEXA, RGB, RGBA and transparent.`;
              const confirmColorsText = IS_CHN ? `请确认您输入的颜色代码是否正确？` : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐦𝐚𝐤𝐞 𝐬𝐮𝐫𝐞 𝐭𝐡𝐚𝐭 𝐭𝐡𝐞 𝐜𝐨𝐥𝐨𝐫 𝐜𝐨𝐝𝐞 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐢𝐬 𝐜𝐨𝐫𝐫𝐞𝐜𝐭?`;
              const confirmfgColorText = IS_CHN ? "\r\n前景色代码：" : "\r\n𝐅𝐨𝐫𝐞𝐠𝐫𝐨𝐮𝐧𝐝-𝐂𝐨𝐥𝐨𝐫: ";
              const fonfirmbgColorText = IS_CHN ? "\r\n背景色代码：" : "\r\n𝐁𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝-𝐂𝐨𝐥𝐨𝐫: ";
              const saveData = async () => {
                if (!inputFgColor || !inputBgColor) return;
                customColor = { foregroundColor: inputFgColor.trim().toLowerCase(), backgroundColor: inputBgColor.trim().toLowerCase() };
                _config_date_ = { isAutoUpdate, keywordHighlight: true, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
                GMsetValue("_configures_", encrypt(JSON.stringify(_config_date_)));
              };
              inputFgColor = prompt(foregroundColorText, customColor.foregroundColor);
              if (inputFgColor === null) return;
              else if (colorReg.test(inputFgColor.trim())) {
                inputBgColor = prompt(backgroundColorText, customColor.backgroundColor);
                if (inputBgColor === null) return;
                else if (colorReg.test(inputBgColor.trim())) {
                  const confirmForegroundColor = /^#/gi.test(inputFgColor.trim()) ? inputFgColor.trim().toUpperCase() : inputFgColor.trim().toLowerCase();
                  const confirmbackgroundColor = /^#/gi.test(inputBgColor.trim()) ? inputBgColor.trim().toUpperCase() : inputBgColor.trim().toLowerCase();
                  const confirmText = `${confirmColorsText}${confirmfgColorText}${confirmForegroundColor}${fonfirmbgColorText}${confirmbackgroundColor}`;
                  if (!confirm(confirmText)) return;
                  GMnotification({
                    title: IS_CHN ? "自定义颜色保存" : "Save Custom Color",
                    text: createNoticeHTML(IS_CHN ? "<dd>搜索关键词自定义颜色已保存，当前页面即将刷新！</dd>" : "<dd>Search keywords custom color has been saved!</dd>"),
                    callbacks: { onShow: [saveData], onClose: [refresh] },
                  });
                } else alert(IS_CHN ? "背景色 格式输入错误！" : "Background-color input-format error!");
              } else alert(IS_CHN ? "前景色（字体颜色） 格式输入错误！" : "Foreground-color (font-color) input-format error!");
            }

            function cleanSelectedCard() {
              qA(`input[name='${def.notice.card}_lists']:checked:enabled`).forEach(node => node.click());
            }

            function showCustomColor() {
              qS(`#${def.notice.random}_customColor`).style.display = this.checked ? "inline-block" : "none";
            }

            async function saveConfigureData() {
              let selectEngineList = [];
              qA(`input[name='${def.notice.card}_lists']:checked`).forEach(item => selectEngineList.push(Number(item.dataset.sn)));
              if (selectEngineList.length < 3) {
                const noticeText = IS_CHN
                  ? `\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！`
                  : `\u0020Please select <b>three</b> search engines, still less<em>${3 - selectEngineList.length}</em>`;
                return void GMnotification({
                  text: createNoticeHTML(`<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>${noticeText}</dd>`),
                  type: def.notice.error,
                  closeWith: ["click"],
                });
              }
              selectedEngine = selectEngineList;
              isHotkey = qS(`#${def.notice.hk}`).checked;
              googleJump = qS(`#${def.notice.gj}`).checked;
              localWindow = qS(`#${def.notice.lw}`).checked;
              keywordHighlight = qS(`#${def.notice.kh}`).checked;
              antiLinkRedirect = qS(`#${def.notice.ar}`).checked;
              antiAds = qS(`#${def.notice.aa}`).checked;
              isAutoUpdate = qS(`#${def.notice.au}`).checked;
              _config_date_ = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
              GMsetValue("_configures_", encrypt(JSON.stringify(_config_date_)));
              (await addAction.closeConfig()) &&
                GMnotification({
                  title: IS_CHN ? "保存成功！" : "Success!",
                  text: createNoticeHTML(IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>"),
                  callbacks: { onClose: [refresh] },
                });
            }

            function insertMenus() {
              const parameter_Set_Menu = `\ufff0\u2699\ufe0f ${IS_CHN ? "搜索引擎助手高级设置" : "Advanced Feature Settings "}${isHotkey ? "(E)" : ""}`;
              parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:gray");
              parameter_Set = GMregisterMenuCommand(parameter_Set_Menu, addAction.setConfigure);
              const filter_Set_Menu = `\ufff2\ud83d\udcdb ${IS_CHN ? "搜索结果拦截词设置" : "Search Filter Settings "}${isHotkey ? "(B)" : ""}`;
              filter_Set ? GMunregisterMenuCommand(filter_Set) : DEBUG("%cInstalling Filter_Set_Menu", "color:gray");
              filter_Set = GMregisterMenuCommand(filter_Set_Menu, addAction.filterResult);
              const engine_List_Menu = `\ufff4\ud83d\udc4b ${IS_CHN ? "嗨，你想去哪里吖？" : "Hi, Where to visit? "} ${isHotkey ? "(V)" : ""}`;
              engine_List ? GMunregisterMenuCommand(engine_List) : DEBUG("%cInstalling Engine_List_Menu", "color:gray");
              engine_List = GMregisterMenuCommand(engine_List_Menu, addAction.listEngine);
            }

            function insertHotkey() {
              sleep(1e2, { useCachedSetTimeout: true })
                .then(() => {
                  if (!isHotkey) return DEBUG("%cNo Hotkey_Setting", "color:grey");
                  document.addEventListener("keydown", event => void (event.code === "AltRight" && (def.const.AltGraph = true)));
                  document.addEventListener("keyup", event => void (event.code === "AltRight" && delete def.const.AltGraph));
                  return !DEBUG("%cInstalling Hotkey_Setting", "color:gray");
                })
                .then(isDeplayed => {
                  if (!isDeplayed) return;
                  document.addEventListener("keydown", e => {
                    const ekey = (e.altKey || def.const.AltGraph === true) && !e.ctrlKey && !e.shiftKey && !e.metaKey;
                    if (e.code === "KeyE" && ekey) {
                      e.preventDefault();
                      e.stopImmediatePropagation();
                      if (Date.now() - def.count.clickTimer > 1e3) {
                        def.count.clickTimer = Date.now();
                        addAction.setConfigure();
                      }
                    }
                    if (e.code === "KeyV" && ekey) {
                      e.preventDefault();
                      e.stopImmediatePropagation();
                      if (Date.now() - def.count.clickTimer > 1e3) {
                        def.count.clickTimer = Date.now();
                        addAction.listEngine();
                      }
                    }
                    if (e.code === "KeyB" && ekey) {
                      e.preventDefault();
                      e.stopImmediatePropagation();
                      if (Date.now() - def.count.clickTimer > 1e3) {
                        def.count.clickTimer = Date.now();
                        addAction.filterResult();
                      }
                    }
                  });
                });
            }

            function showSystemInfo() {
              if (CUR_WINDOW_TOP && listCurrentSite.siteTypeID !== newSiteType.OTHERS) {
                const isFavEngine = currentSite.siteTypeID !== newSiteType.OTHERS;
                const fontStyle = `text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`;
                __console(
                  "shown_system_info",
                  `%c${def.var.scriptName}\r\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/Search-Engine-Assistant\r\n%c%s%cV%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s`,
                  "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
                  "color:#777;font:italic 400 10px/180% monospace",
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "脚本版本：" : "Version:\u0020",
                  "color:#708090;font:italic 600 14px/150% Candara,Times New Roman",
                  def.var.curVersion,
                  "color:darkred;font:italic 11px/150% Candara,'Times New Roman'",
                  IS_CHEAT_UA ? "\u3000(CHEAT-UA)" : "",
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "当前搜索引擎：" : "CurrentEngine:\u0020",
                  `color:crimson;${fontStyle};font-weight:700`,
                  currentSiteName,
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "常用的搜索引擎：" : "YourFavEngine:\u0020",
                  `color:${isFavEngine ? "green" : "blue"};${fontStyle}`,
                  isFavEngine,
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "移除链接重定向：" : "antiRedirectFn:\u0020",
                  `color:${antiLinkRedirect ? "green" : "blue"};${fontStyle}`,
                  antiLinkRedirect,
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "去除搜索结果广告：" : "AntiAdvertising:\u0020",
                  `color:${antiAds ? "green" : "blue"};${fontStyle}`,
                  antiAds,
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "搜索结果关键词过滤：" : "SearchResultFilter:\u0020",
                  `color:${antiResultsFilter ? "green" : "blue"};${fontStyle}`,
                  antiResultsFilter,
                  "font-size:12px;font-weight:700;color:steelblue",
                  IS_CHN ? "因安全策略被阻止：" : "SecurityPolicy:\u0020",
                  `color:${def.var.securityPolicy ? "green" : "blue"};${fontStyle}`,
                  def.var.securityPolicy
                );
              }
            }

            /* SEARCH_ENGINE_ASSISTANT_COMMAND_FUNCTIONS */

            const siteConfigMap = {
              baidu: {
                listTypes: { target: "#content_left", listName: "div", className: "result-op" },
                clear: () => safeRemove("#con-ar"),
                applyButton: ({ buttonSection, buttonID, target }) => {
                  insertAfter(buttonSection, target);
                  if (!qS(buttonID)) return;
                  switch (def.var.searchType) {
                    case currentSite.imageType[0]:
                      buttonSection.style.marginLeft = "16px";
                      qS(`#${def.const.rightButton} input`).style.marginLeft = "3px";
                      document.body.style.overflowX = "clip";
                      break;
                    case currentSite.imageType[1]:
                      buttonSection.style.height = "34px";
                      qA(`${buttonID} input`).forEach(node => {
                        node.style.cssText = "min-width:100px;height:34px;padding:0 5px!important;color:#fff;background:#3388ff;border-radius:0;border:1px solid #2d78f4";
                      });
                      document.body.style.overflowX = "clip";
                      break;
                  }
                },
              },
              bing: {
                listTypes: { target: "#b_results", listName: "li", className: "b_algo" },
                clear: () => safeRemove("aside>ol#b_context"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const sectionWidth = buttonSection.getBoundingClientRect().width || 2e2;
                  const textarea = qS(`textarea.b_searchbox[name="q"]`, target.parentNode);
                  const formBox = qS(".b_searchboxForm");
                  const formNode = qS(`form#sb_form`);
                  qA(`#b_header .b_searchbox[name="q"]`).forEach(input => {
                    const inputLength = parseFloat(gCS(input).width) || 500;
                    input.style.maxWidth = `${inputLength - sectionWidth + 50}px`;
                  });
                  if (textarea) {
                    const inputs = qA(`#${def.const.rndButtonID} input`);
                    const changeTextarea = e => {
                      if (e.target === textarea) inputs.forEach(input => input.classList.add(def.const.searchbox));
                      else inputs.forEach(input => input.classList.remove(def.const.searchbox));
                    };
                    textarea.getAttribute("rows") >= 2 && inputs.forEach(input => input.classList.add(def.const.searchbox));
                    document.addEventListener("click", changeTextarea, true);
                  }
                  if (formBox && getUrlParam("view") === "detailV2") {
                    formBox.style.cssText += "width:max-content!important;z-index:1000;position:relative;";
                    qA(`#${def.const.rndButtonID} input`).forEach(input => {
                      input.style.cssText += "height:34px!important;border-radius:6px!important;padding:0 12px!important;margin:0 0 0 2px!important;";
                    });
                  }
                  new MutationObserver(() => {
                    qA(`#b_header .b_searchbox[name="q"]`).forEach(input => {
                      input.style.maxWidth = "";
                      const inputLength = parseFloat(gCS(input).width) || 500;
                      input.style.maxWidth = `${inputLength - sectionWidth + 50}px`;
                    });
                  }).observe(formNode, { attributeOldValue: true, attributeFilter: ["aria-owns"] });
                },
              },
              google: {
                listTypes: { target: "div[eid][data-async-context]", listName: "div", className: "MjjYud" },
                applyButton: ({ buttonSection, buttonID, target }) => {
                  getGlobalGoogle("www.google.com", googleJump);
                  insertAfter(buttonSection, target);
                  if (!qS(buttonID)) return;
                  buttonSection.parentNode.style.width = "fit-content";
                  buttonSection.parentNode.style.minWidth = "100%";
                  buttonSection.parentNode.parentNode.style.width = "100%";
                  buttonSection.parentNode.parentNode.parentNode.style.width = "95%";
                  if (currentSite.imageType.includes(def.var.searchType)) {
                    buttonSection.parentNode.firstElementChild.style.width = "400px";
                  }
                },
              },
              duckduckgo: {
                listTypes: { target: "ol.react-results--main", listName: "li" },
                applyButton: ({ buttonSection, target }) => {
                  target.parentNode.appendChild(buttonSection);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => (buttonSection.style.right = `-${sectionWidth + 8}px`));
                },
              },
              yandex: {
                listTypes: { target: "#search-result", listName: "li" },
                clear: () => safeRemove("div.content__right>div"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => {
                    buttonSection.style.right = `-${sectionWidth + 10}px`;
                    if (currentSite.imageType.includes(def.var.searchType)) {
                      const actionNode = qS(`div.HeaderDesktopActions.HeaderDesktop-Actions`);
                      if (actionNode) actionNode.style.cssText = `position:relative;right:-${sectionWidth}px`;
                    } else {
                      const actionNode = qS(`div.HeaderDesktopActions`);
                      const voiceButton = qS(`button.voice-search-button.input__voice-search`);
                      if (actionNode) actionNode.style.cssText = `position:relative;right:-${sectionWidth}px`;
                      if (voiceButton) voiceButton.style.right = `-${sectionWidth + 190}px`;
                    }
                  });
                },
              },
              qwant: {
                listTypes: { target: "div[data-testid='containerWeb']>section div[data-testid]>div>div", listName: "div" },
                applyButton: ({ buttonSection, target }) => {
                  target.parentNode.appendChild(buttonSection);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => (buttonSection.style.right = `-${sectionWidth + 8}px`));
                },
              },
              sogou: {
                listTypes: { target: "div.results", listName: "div", className: "vrwrap" },
                clear: () => safeRemove("#right"),
                applyButton: ({ resolve, buttonSection, buttonID, target }) => {
                  if (currentSite.imageType.includes(def.var.searchType)) {
                    sleep(4e2)(resolve()).then(() => {
                      if (!qS(buttonID) && target) {
                        insertAfter(buttonSection, target);
                        const sectionWidth = buttonSection.getBoundingClientRect().width;
                        buttonSection.style.right = `-${sectionWidth + 10}px`;
                        addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                      }
                    });
                  } else if (def.var.searchType === "weixin") {
                    insertAfter(buttonSection, target);
                    buttonSection.style = "position:relative";
                    qA(`${buttonID} input`).forEach(node => node.classList.add(`${def.notice.random}_weixin`));
                  } else {
                    insertAfter(buttonSection, target);
                    const btn = qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`);
                    sleep(0)(safeRemove(btn)).then(() => {
                      const sectionWidth = buttonSection.getBoundingClientRect().width || 2e2;
                      buttonSection.style.right = `-${sectionWidth + 10}px`;
                      const btn2 = qS(`#searchBtn2`);
                      if (btn2) btn2.style.right = `-${sectionWidth + 120}px`;
                    });
                  }
                },
              },
              toutiao: {
                listTypes: { target: "div.s-result-list", listName: "div" },
                clear: () => safeRemove(".main>.s-side-list>.result-content"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => (buttonSection.style.right = `-${sectionWidth + 10}px`));
                },
              },
              so360: {
                listTypes: { target: "#main>ul.result", listName: "li", className: "res-list" },
                clear: () => safeRemove("#side_wrap"),
                applyButton: ({ buttonSection, buttonID, target }) => {
                  insertAfter(buttonSection, target);
                  if (currentSite.imageType.includes(def.var.searchType)) {
                    qA(`${buttonID} input`).forEach(node => (node.style = "margin:0 0 0 1px;"));
                    sleep(5e2).then(() => qS("#tools_close")?.click());
                  }
                },
              },
              kaifa: {
                listTypes: { target: "ul.ant-list-items", listName: "li", className: "ant-list-item" },
                applyButton: ({ buttonSection, target }) => {
                  target.appendChild(buttonSection);
                  const input = qS("#search-box-container input[class~='ant-input']");
                  if (input) input.style.cssText += `width:580px!important`;
                },
              },
              ecosia: {
                listTypes: { target: "section.mainline>div:not([class])", listName: "div", className: "mainline__result-wrapper" },
                applyButton: ({ resolve, buttonSection, buttonID, target }) => {
                  let isLoadEventAttached = false;
                  const handleLoadEvent = () => {
                    if (!qS(buttonID) && target) insertAfter(buttonSection, target);
                    addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                    w.removeEventListener("load", handleLoadEvent);
                    isLoadEventAttached = false;
                  };
                  if (!isLoadEventAttached) {
                    w.addEventListener("load", handleLoadEvent);
                    isLoadEventAttached = true;
                  }
                  resolve();
                },
              },
              yahoo: {
                listTypes: { target: "#web>ol", listName: "li" },
                clear: () => safeRemove("#right>ol"),
                applyButton: ({ buttonSection, target }) => {
                  try {
                    insertAfter(buttonSection, target);
                    if (currentSite.imageType.includes(def.var.searchType)) {
                      const sectionRect = qS("#sbx")?.getBoundingClientRect() ?? { width: 656, left: 2e2 };
                      buttonSection.style.cssText = `position:absolute;left:${6 + sectionRect.width + sectionRect.left}px`;
                    } else {
                      const sectionWidth = buttonSection.getBoundingClientRect().width ?? 224;
                      buttonSection.style.cssText = `position:absolute;top:0;right:-${10 + sectionWidth}px`;
                    }
                  } catch (e) {
                    ERROR("insertButtons.YAHOO:", e.message);
                  }
                },
              },
              you: { listTypes: { target: "div[data-testid='app-mainline']>div[data-eventappname][data-testid]", listName: "ul" } },
              startpage: { listTypes: { target: "#main>div.w-gl", listName: "div", className: "result" } },
              brave: { listTypes: { target: "#results", listName: "div", className: "snippet" }, clear: () => safeRemove("aside>div") },
              yep: {
                listTypes: { target: "div[class$='-results']>div>div", listName: "div" },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const sectionWidth = buttonSection.getBoundingClientRect().width || 2e2;
                  buttonSection.style.right = `-${10 + sectionWidth}px`;
                },
              },
              swisscows: {
                listTypes: { target: ".web-results", listName: "article", className: "item-web" },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  sleep(0)
                    .then(() => buttonSection.getBoundingClientRect().width || 2e2)
                    .then(sectionWidth => (buttonSection.style.right = `-${10 + sectionWidth}px`));
                },
              },
              searxng: {
                listTypes: { target: "div#urls", listName: "article", className: "result" },
                clear: () => safeRemove("#infoboxes"),
                applyButton: ({ buttonSection, target }) => void target.appendChild(buttonSection),
              },
            };

            function insertCSS(isOverwrite = false) {
              try {
                const buttonCss = currentSite.buttonCssText ? `@charset "UTF-8";` + currentSite.buttonCssText : "";
                addStyle({ target: document.head, styleId: def.const.rndclassName, media: "all", styleContent: buttonCss, isOverwrite });
              } catch (e) {
                ERROR("insertCSS:", e.message);
              }
            }

            function insertStyle() {
              try {
                const noticeStyle = `@charset "UTF-8";` + def.const.style + def.const.iconstyle + String(keywordHighlight ? def.const.hlstyle : "");
                addStyle({ target: document.head, styleId: def.const.rndstyleName, media: "screen", styleContent: noticeStyle, isOverwrite: false });
              } catch (e) {
                ERROR("insertStyle:", e.message);
              }
            }

            function insertButtons() {
              try {
                const targetSelector = currentSite.mainSelector;
                const buttonSection = cE("gb-button");
                buttonSection.id = def.const.rndButtonID;
                buttonSection.innerHTML = tTP.createHTML(def.const.button);
                const buttonID = `#${buttonSection.id}`;
                const target = qS(targetSelector);
                if (def.var.indexPage || !target || !def.var.queryString || qS(buttonID)) return;
                return new Promise(resolve => {
                  applyButtons(resolve, buttonSection, target, buttonID);
                  resolve(qA(`${buttonID} span[sn]:not([event-insert])`));
                })
                  .then(response => {
                    if (!response) return;
                    addSearchButtonEvent(response);
                    scrollDetect();
                  })
                  .catch(e => ERROR("applyButtons:", e.message));
              } catch (e) {
                ERROR("insertButtons:", e.message);
              }
            }

            function applyButtons(resolve, buttonSection, target, buttonID) {
              if (currentSite.siteTypeID === newSiteType.OTHERS) return;
              const methodToCall = siteConfigMap[currentSiteName]?.applyButton;
              if (typeof methodToCall === "function") methodToCall({ resolve, buttonSection, buttonID, target });
              else insertAfter(buttonSection, target);
            }

            function scrollDetect() {
              if (def.var.indexPage) return;
              let scrollspan, scrollbars, height, searchType;
              switch (currentSite.siteTypeID) {
                case newSiteType.GOOGLE:
                  searchType = /^isch$/.test(def.var.searchType);
                  scrollspan = searchType ? def.const.scrollspan2 : def.const.scrollspan;
                  scrollbars = searchType ? def.const.scrollbars2 : def.const.scrollbars;
                  height = searchType ? 0 : 35;
                  break;
                case newSiteType.BING:
                  searchType = /^(images|videos)$/.test(def.var.searchType);
                  scrollspan = searchType ? def.const.scrollspan2 : def.const.scrollspan;
                  scrollbars = searchType ? def.const.scrollbars2 : def.const.scrollbars;
                  height = 50;
                  break;
                case newSiteType.BRAVE:
                  scrollspan = def.const.scrollspan;
                  scrollbars = def.const.scrollbars;
                  height = 100;
                  break;
                default:
                  return;
              }
              setupScrollButton(`#${def.const.rndButtonID}`, scrollspan, height);
              setupScrollButton(`#${def.const.rndButtonID} #${def.const.leftButton} input`, scrollbars, height);
              setupScrollButton(`#${def.const.rndButtonID} #${def.const.rightButton} input`, scrollbars, height);
            }

            function addSearchButtonEvent(nodes) {
              if (!Array.isArray(nodes) || nodes.length === 0) return;
              let gotoUrl = "about:blank";
              nodes.forEach(node => {
                node.setAttribute("event-insert", true);
                qS("input", node).addEventListener("click", () => {
                  const imageSearch = getUrlParam(currentSite.splitTypeName)?.trim();
                  switch (Number(node.getAttribute("sn"))) {
                    case selectedSite[0].siteTypeID:
                      gotoUrl = currentSite.imageType.includes(imageSearch) ? selectedSite[0].imageURL : selectedSite[0].webURL;
                      break;
                    case selectedSite[1].siteTypeID:
                      gotoUrl = currentSite.imageType.includes(imageSearch) ? selectedSite[1].imageURL : selectedSite[1].webURL;
                      break;
                  }
                  const finalUrl = decodeURI(gotoUrl + getQueryString());
                  if (localWindow) top.location.href = finalUrl;
                  else GMopenInTab(finalUrl, false);
                });
              });
            }

            function createNotice(listName, className, userdFilter) {
              const listAttrib = className ? ` class="${className}"` : ``;
              const noticeText = IS_CHN ? "本页所有搜索结果均被屏蔽，如异常请检查过滤词。" : "All results are blocked, Check the filters if abnormal.";
              const filterArray = userdFilter ? `<gb-filters class="code">${IS_CHN ? "过滤词:" : "Filter:"} [${userdFilter}]</gb-filters>` : ``;
              const tips = `<br/>✄┏━┓╋┏┓╋╋╋┏━━━┓╋╋╋╋╋╋╋╋┏┓┏┓╋┏┓<br/>✄┃┃┗┓┃┃╋╋╋┃┏━┓┃╋╋╋╋╋╋╋╋┃┣┛┗┓┃┃<br/>✄┃┏┓┗┛┣━━┓┃┗━┛┣━━┳━━┳┓┏┫┣┓┏┛┃┃<br/>✄┃┃┗┓┃┃┏┓┃┃┏┓┏┫┃━┫━━┫┃┃┃┃┃┃╋┗┛<br/>✄┃┃╋┃┃┃┗┛┃┃┃┃┗┫┃━╋━━┃┗┛┃┗┫┗┓┏┓<br/>✄┗┛╋┗━┻━━┛┗┛┗━┻━━┻━━┻━━┻━┻━┛┗┛<br/><br/>`;
              const noticeCode = tTP.createHTML(`<${listName}${listAttrib} gb-filter-notice>${tips}${noticeText} — ${def.var.scriptName}${filterArray}</${listName}>`);
              return noticeCode;
            }

            function showEmptyNotice(siteName) {
              if (!siteConfigMap[siteName]) return;
              const { target, listName, className } = siteConfigMap[siteName].listTypes;
              const noticeNode = qS(`${target} ${listName}[gb-filter-notice]`);
              if (noticeNode) return;
              const usedFilterWordsStr = escapeHTML([...usedFilterWords].join(", "));
              const noticeCode = createNotice(listName, className, usedFilterWordsStr);
              qS(listCurrentSite.resultListProp.qs)?.insertAdjacentHTML("beforebegin", noticeCode);
              usedFilterWords.clear();
            }

            function filterSearchResults(filterObj) {
              if (resultFilters.length === 0) return;
              const { qs, delay } = filterObj;
              let timeout = Number.parseInt(delay);
              if (isNaN(timeout) && !def.const.infinityFilterTimeInitiated) {
                if (typeof def.const.infinityFilterTimeInitiated === "boolean") return;
                w.addEventListener("load", () => {
                  def.const.infinityFilterTimeInitiated = true;
                  filterSearchResultsProcess(qs);
                });
                def.const.infinityFilterTimeInitiated = false;
              } else deBounce({ fn: filterSearchResultsProcess, timer: "filterSearchResults", delay: timeout || 50 })(qs);
            }

            function filterSearchResultsProcess(querystring) {
              if (!querystring) return;
              const returnContent = new Map();
              const selectors = buildSelectors(querystring);
              return new Promise(resolve => {
                qA(`${selectors}`).forEach(item => processNode(item, returnContent));
                resolve(returnContent);
              })
                .then(rtst => {
                  if (!rtst || rtst.size === 0) return;
                  rtst.forEach((content, item) => matchFilters(item, content));
                  rtst.clear();
                })
                .then(() => sleep(1e2))
                .then(() => {
                  if (usedFilterWords.size === 0) return;
                  if (qA(querystring.split(/,(?![^()]*\))/g)[0]).length < 2) return;
                  const remainingResults = qA(selectors.split(/,(?![^()]*\))/g)[0]).length;
                  handleRemainingResults(remainingResults);
                });
            }

            function processMatchedItem(item, content, filter) {
              if (IS_DEBUG) addDebugNotice(item, filter);
              usedFilterWords.add(filter);
              item.classList.add(IS_DEBUG ? def.var.translucent : def.var.disappear);
              DEBUG("Filter.match:", { filter, item, content });
              qA("a", item).forEach(node => node.setAttribute("gd-antiredirect-status", "blocked"));
              qA(item).forEach(subItem => safeRemove(subItem));
            }

            function addDebugNotice(item, filter) {
              const noticeNode = qS("notice-label", item);
              if (!noticeNode) {
                const notice = cE("notice-label");
                notice.classList.add("code");
                notice.textContent = `<![CDATA[ "${filter}" ]]>`;
                item.prepend(notice);
              }
            }

            function adjustUI(siteName) {
              const logicFunction = siteConfigMap[siteName]?.clear;
              if (typeof logicFunction === "function") logicFunction();
            }

            function buildSelectors(querystring) {
              return querystring
                .split(/,(?![^()]*\))/g)
                .map(item => `${item}:not(.${def.var.disappear},.${def.var.translucent},[gb-filter-notice])`)
                .join(",");
            }

            function processNode(item, returnContent) {
              if (item.nodeType !== Node.ELEMENT_NODE) return;
              const href = qS("a:not([title^='Search']):not([aria-label^='Anonymous']):not([href*='.bing.com/ck/a?'])", item)?.href ?? "";
              const url = [1, 5, 8].includes(listCurrentSite.siteTypeID) ? "" : getDecodeURI(href);
              const content = item.innerText?.replace(/[\t\r\n\ue62b]/g, "").trim() + url;
              content && returnContent.set(item, content);
            }

            function matchFilters(item, content) {
              try {
                for (let filter of resultFilters) {
                  const regex = new RegExp(filter, "i");
                  if (item?.nodeType !== Node.ELEMENT_NODE || !regex.test(content)) continue;
                  processMatchedItem(item, content, filter);
                }
              } catch (e) {
                ERROR("Filter.match:", e.message);
              }
            }

            function handleRemainingResults(remainingResults) {
              if (remainingResults > 2) return;
              if (remainingResults === 0) showEmptyNotice(currentSiteName);
              adjustUI(currentSiteName);
            }

            function getDecodeURI(href) {
              if (!href || typeof href !== "string") return "";
              let url = href;
              try {
                if (listCurrentSite.siteTypeID === newSiteType.TOUTIAO) url = decodeURIComponent(new URLSearchParams(new URL(href).search).get("url"));
              } catch (e) {
                url = href.match(/\?url=([^&]+)/)?.[1];
                url = url ? decodeURIComponent(url) : href;
              }
              return `\ue620${url}\ue620`;
            }

            function getGlobalGoogle(NCRHost, permission) {
              if (!permission || CUR_HOST_NAME === NCRHost) return;
              try {
                const url = `${CUR_PROTOCOL}//${NCRHost}/ncr?prev=${CUR_PATH_NAME}${encodeURIComponent(location.search)}`;
                GMnotification({
                  title: "Google NCR",
                  text: createNoticeHTML(`<dd class="${def.notice.center}">${IS_CHN ? "即将跳转至 Google.com (NCR)" : "Jump to Google.com (NCR)"}</dd>`),
                  type: def.notice.info,
                  callbacks: { beforeClose: [() => void top.location.replace(url)] },
                });
              } catch (e) {
                ERROR("getGlobalGoogle:", e.message);
              }
            }

            function updateIconsForExtension(requestVer) {
              if (decrypt(requestVer) === def.var.curVersion) return;
              DEBUG("updateIconsForExtension: %cupdateToRequestIcon", "color:crimson");
              updateToRequestIcon(false);
              GMsetValue("_version_", encrypt(def.var.curVersion));
            }

            function searchButtonAndStylesObserve() {
              const processMainThreadTasks = () => {
                if (currentSite.siteTypeID !== newSiteType.OTHERS && !def.var.securityPolicy) {
                  if (!qS(`#${def.const.rndclassName}`)) insertCSS();
                  if (!qS(`#${def.const.rndButtonID}`)) insertButtons();
                }
                if (listCurrentSite.siteTypeID !== newSiteType.OTHERS) {
                  if (!qS(`#${def.const.rndstyleName}`)) insertStyle();
                  antiAds && listCurrentSite.antiAdsFn?.();
                  antiResultsFilter && filterSearchResults(listCurrentSite.resultListProp);
                  antiLinkRedirect && !def.var.indexPage && listCurrentSite.antiRedirectFn?.();
                }
              };
              const observer = new MutationObserver(processMainThreadTasks);
              const config = { childList: true, subtree: true };
              observer.observe(document, config);
            }

            /* SEARCH_ENGINE_ASSISTANT_MAIN_PROCESS */

            void (function (updateFlag, versionFlag) {
              if (CUR_WINDOW_TOP) {
                const updateInfo = getUpdateInformation(updateFlag);
                parseUpdateInformatio(updateInfo);
                showSystemInfo();
                insertMenus();
                insertHotkey();
                updateIconsForExtension(versionFlag);
              }
              setupGlobalParameterListener();
              searchButtonAndStylesObserve();
            })(await cache.get("_autoupdate_"), await GMgetValue("_version_"));
          })(
            updateFlag => {
              if (CUR_WINDOW_TOP && isAutoUpdate && (!updateFlag || setDebuggerMode())) {
                const updateDetectionResponses = updateDetectionAddress.map(addr => fetchUpdateResponse(addr));
                return Promise.any(updateDetectionResponses).catch(e => ERROR("getUpdateInformation:", e.message));
              }
            },
            updateResponse => {
              updateResponse
                ?.then(response => {
                  if (!response) return;
                  const { res, url } = response;
                  let version, notes;
                  let updateInfoList = "";
                  if (res) {
                    version = res.match(/\/\/\s+@version\s+(\S+)/)?.[1]?.trim();
                    notes = res.match(/\/\/\s+@note\s+(.+)/g);
                    notes?.forEach(item => {
                      const preNote = escapeHTML(item.replace(/\/\/\s+@note\s+/, "")).trim();
                      try {
                        const note = JSON.parse(preNote);
                        updateInfoList += `<li>${IS_CHN ? note.CN : note.EN}</li>`;
                      } catch (e) {
                        updateInfoList += `<li>${preNote}</li>`;
                      }
                    });
                  } else {
                    const props = ["font-weight:bold;color:crimson", "color:darkred"];
                    return __console("error", "%c[GB-UpdateError]%c\r\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!", ...props);
                  }
                  if (!version) return;
                  version = escapeHTML(version);
                  const updateText = notes ? updateInfoList : `<ol>当前更新源没有更新详情，请访问 <a target="_blank" href="${def.url.homepage}">Github</a> 查看。</ol><ol>&nbsp;</ol>`;
                  const newUpdateHTML = IS_CHN
                    ? `<dd><span>发现新版本</span><i>V${version}</i>，点击可自动更新。</dd><dd><ul>${updateText}</ul></dd><dd id="${def.notice.stopUpdate}"><input type="checkbox">一周内不再提醒</dd>`
                    : `<dd><span>New Version</span><i>V${version}</i>, Click to update.</dd><dd><ul>${updateText}</ul></dd><dd id="${def.notice.stopUpdate}"><input type="checkbox">Don't remind me for <b>7</b> days</dd>`;
                  if (versionCompare(def.var.curVersion, version)) {
                    const updateInterface = GMnotification({
                      title: IS_CHN ? "发现新更新" : "Found new update",
                      text: createNoticeHTML(newUpdateHTML),
                      type: def.notice.warning,
                      closeWith: ["click"],
                      timeout: 8e3,
                      callbacks: { onClick: [() => preInstall(url)] },
                    });
                    qS(`#${def.notice.stopUpdate}`)?.addEventListener("click", event => {
                      event.stopPropagation();
                      NoticeX.close(updateInterface);
                      cache.set("_autoupdate_", def.var.curVersion);
                    });
                    const props = ["font-weight:bold;color:crimson", "color:0", "color:crimson", "color:0"];
                    __console("shown_new_update", `%c[GB-Update]%c\r\nWe found a new version: %c${version}%c, which you can update now!`, ...props);
                  } else {
                    const successHTML = IS_CHN
                      ? `<dd style="margin: 10px 0"><span>恭喜！</span>当前版本 <i>${def.var.curVersion}</i> 已为最新！</dd>`
                      : `<dd style="margin: 10px 0"><span>Congratulations!</span><br/>The version <i>${def.var.curVersion}</i> is up-to-date!</dd>`;
                    GMnotification({
                      title: IS_CHN ? "更新成功" : "Update Success",
                      text: createNoticeHTML(successHTML),
                      timeout: 3e3,
                      closeWith: ["click"],
                    });
                    cache.set("_autoupdate_", version);
                    GMsetValue("_version_", encrypt(def.var.curVersion));
                    const props = ["font-weight:700;color:darkcyan", "color:0", "color:crimson", "color:0"];
                    __console("shown_update_info", `%c[GB-Update]%c\r\nCurretVersion: %c${def.var.curVersion}%c is up-to-date!`, ...props);
                  }
                })
                .catch(e => ERROR(`parseUpdateInformatio: ${e?.message}`));
            }
          );
        })(function () {
          const rnd = Date.now().toString(16);
          const updateURLArray = [
            `https://update.greasyfork.org/scripts/12909/Google_baidu_Switcher_(ALL_in_One).meta.js`,
            `https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js`,
            `https://openuserjs.org/install/f9y4ng/Google_baidu_Switcher_(ALL_in_One).meta.js`,
          ];
          return updateURLArray.map(url => `${url}?${rnd}`);
        });
      })(
        async () => {
          let config_date, isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor;
          const configure = await GMgetValue("_configures_");
          if (!configure) {
            const keys = await GMlistValues();
            keys.forEach(key => GMdeleteValue(key));
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
              ERROR("getConfigureData:", e.message);
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
        async () => {
          const resultFilter = await GMgetValue("_resultFilter_");
          if (!resultFilter) return { filter: [], trigger: false };
          let { filter, trigger } = JSON.parse(decrypt(resultFilter));
          if (!Array.isArray(filter)) filter = [];
          return { filter, trigger };
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
                  convertBlobToDataURL(blob, resolve, reject);
                } else if (response.status !== 0) reject(new Error("NoAccessError"));
              },
              onerror: () => reject(new Error("NetworkError")),
              ontimeout: () => reject(new Error("TimeoutError")),
            });
          }).catch(e => Promise.reject(ERROR("requestRemoteIcon:", e.message)));
        },
        options => {
          try {
            const parsedOptions = {
              title: options.title || "",
              text: options.text || "",
              type: options.type || def.notice.success,
              width: options.width || 400,
              newestOnTop: options.newestOnTop || false,
              closeWith: options.closeWith || ["button"],
              progressBar: options.progressBar ?? true,
              timeout: options.timeout ?? 2e3,
              scroll: options.scroll || { maxHeight: 400, showOnHover: true },
              callbacks: options.callbacks ? { ...options.callbacks } : {},
              position: options.position || "bottomRight",
            };
            const noticeX = new NoticeX(parsedOptions).show();
            return noticeX;
          } catch (e) {
            ERROR("GMnotification:", e.message);
          }
        }
      );
    })(createTrustedTypePolicy(), async () => ({ navigatorInfo: await getNavigatorInfo(), locationInfo: getLocationInfo() }));
  },
  (object => {
    return {
      defineMethod,
      ArrayMethods: [
        ["Some", someProxy],
        ["Find", findProxy],
      ],
      __protos__: { a: Array.prototype.slice, s: Object.prototype.toString, h: Object.prototype.hasOwnProperty },
    };

    function defineMethod(property, methodFunction) {
      if (Reflect.getOwnPropertyDescriptor(object, property)) return;
      Object.defineProperty(object, property, {
        value: methodFunction,
        writable: false,
        configurable: false,
        enumerable: false,
      });
    }

    function someProxy(callback, thisArg = this) {
      for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return true;
      }
      return false;
    }

    function findProxy(callback, thisArg) {
      for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return this[i];
      }
      return void 0;
    }
  })(Array.prototype)
);
