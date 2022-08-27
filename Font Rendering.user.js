// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字體渲染（自用腳本）
// @name:ja            フォントレンダリング（カスタマイズ）
// @name:en            Font Rendering (Customized)
// @version            2022.08.27.1
// @author             F9y4ng
// @description        无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh-CN  无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh-TW  無需安裝MacType，優化浏覽器字體顯示，讓每個頁面的中文字體變得有質感，默認使用微軟雅黑字體，亦可自定義設置多種中文字體，附加字體描邊、字體重寫、字體陰影、字體平滑、對特殊樣式元素的過濾和許可等效果，腳本菜單中可使用設置界面進行參數設置，亦可對某域名下所有頁面進行排除渲染，兼容常用的Greasemonkey腳本和瀏覽器插件。
// @description:ja     各ページの中国語フォントをテクスチャにしたり、デフォルトでMicrosoft Yaheiフォントを使用したり、複数の中国語フォントをカスタマイズしたり、フォントストローク、フォント書き換え、フォントシャドウ、フォントスムージング、特別なスタイル要素のフィルタリングやライセンスなどの効果を追加したり、スクリプトメニューで設定インターフェイスを使用してパラメータ設定を行ったり、ドメイン名の下にあるすべてのページを除外してレンダリングしたり、一般的なGreasemonkeyスクリプトやブラウザプラグインと互換性があります。
// @description:en     Let each page of the Chinese font becomes texture, the default uses Microsoft YaHei font, and you can customize the set of Chinese fonts, additional font strokes, font rewriting, font shadows, smooth, and special Filtering and licensing of style elements, etc., you can use the setting interface to perform parameter settings in the script menu, or you can exclude all pages under a domain name, compatible with common Greasemonkey scripts and browser plugins.
// @namespace          https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon               https://img.icons8.com/stickers/48/font-style-formatting.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require            https://greasyfork.org/scripts/437214-frcolorpicker/code/frColorPicker.js?version=1053073
// @match              *://*/*
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
// @compatible         edge 兼容TamperMonkey, ViolentMonkey
// @compatible         Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible         Firefox 兼容Greasemonkey, TamperMonkey, ViolentMonkey
// @compatible         Opera 兼容TamperMonkey, ViolentMonkey
// @compatible         Safari 兼容Tampermonkey • Safari
// @license            GPL-3.0-only
// @create             2020-11-24
// @copyright          2020-2022, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 9 */

~(function (trustedTypesPolicy) {
  "use strict";

  /* customize */

  const IS_OPEN_DEBUG = false; // set "true" to debug scripts, May cause script response slower.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  const GMinfo = GM_info;
  const GMversion = GMinfo.version;
  const GMscriptHandler = GMinfo.scriptHandler;
  const isGM = GMscriptHandler.toLowerCase() === "greasemonkey";
  const debug = IS_OPEN_DEBUG ? console.log.bind(console) : () => {};
  const error = IS_OPEN_DEBUG ? console.error.bind(console) : () => {};
  const count = IS_OPEN_DEBUG ? console.count.bind(console) : () => {};

  /* GM selector */

  const GMsetValue = isGM ? GM.setValue : GM_setValue;
  const GMgetValue = isGM ? GM.getValue : GM_getValue;
  const GMdeleteValue = isGM ? GM.deleteValue : GM_deleteValue;
  const GMlistValues = isGM ? GM.listValues : GM_listValues;
  const GMopenInTab = isGM ? GM.openInTab : GM_openInTab;
  const GMregisterMenuCommand = isGM ? GM.registerMenuCommand : GM_registerMenuCommand;
  const GMunregisterMenuCommand = isGM ? () => {} : GM_unregisterMenuCommand;

  /* default Const Values & Functions */

  const defCon = {
    oZoom: [],
    values: [],
    errors: [],
    clickTimer: 0,
    domainCount: 0,
    scriptName: getScriptNameViaLanguage(),
    curVersion: GMinfo.script.version || GMinfo.scriptMetaStr.match(/@version\s+(\S+)/)[1],
    options: isGM ? false : { active: true, insert: true, setParent: true },
    elCompat: document.compatMode === "CSS1Compat" ? document.documentElement : document.body,
    getScreenCTM: SVGGraphicsElement.prototype.getScreenCTM,
    getClientRects: Element.prototype.getClientRects,
    getBoundingClientRect: Element.prototype.getBoundingClientRect,
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
    sqliteDB: (e, t, p) => {
      let g = 0;
      let d = "";
      let o = "";
      for (let i = 0; i < p.length; i += 1) {
        d += p.charCodeAt(i).toString();
      }
      const s = Math.floor(d.length / 5);
      const m = parseInt(d.charAt(s) + d.charAt(s * 2) + d.charAt(s * 3) + d.charAt(s * 4) + d.charAt(s * 5));
      const c = Math.ceil(p.length / 2);
      const u = Math.pow(2, 31) - 1;
      if (t) {
        if (m < 2) {
          return "";
        }
        let l = Math.round(Math.random() * 1e9) % 1e8;
        d += l;
        while (d.length > 10) {
          d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
        }
        d = (m * d + c) % u;
        for (let i = 0, len = e.length; i < len; i += 1) {
          g = parseInt(e.charCodeAt(i) ^ Math.floor((d / u) * 255));
          if (g < 16) {
            o += "0" + g.toString(16);
          } else {
            o += g.toString(16);
          }
          d = (m * d + c) % u;
        }
        l = l.toString(16);
        while (l.length < 8) {
          l = "0" + l;
        }
        o += l;
        return o;
      } else {
        const l = parseInt(e.substring(e.length - 8, e.length), 16);
        e = e.substring(0, e.length - 8);
        d += l;
        while (d.length > 10) {
          d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
        }
        d = (m * d + c) % u;
        for (let i = 0, len = e.length; i < len; i += 2) {
          g = parseInt(parseInt(e.substring(i, i + 2), 16) ^ Math.floor((d / u) * 255));
          o += String.fromCharCode(g);
          d = (m * d + c) % u;
        }
        return decodeURIComponent(o);
      }
    },
    getHostName: () => {
      try {
        return top.location.hostname;
      } catch (e) {
        return location.hostname;
      }
    },
    isWinTop: () => {
      try {
        return window.self === window.top;
      } catch (e) {
        return !parent.frames.length;
      }
    },
  };

  /* Define random aliases */

  defCon.id = {
    rndId: defCon.randString(12, "char"),
    dialogbox: defCon.randString(11, "char"),
    container: defCon.randString(10, "char"),
    field: defCon.randString(9, "char"),
    fontList: defCon.randString(8, "char"),
    fontFace: defCon.randString(8, "char"),
    fontSmooth: defCon.randString(8, "char"),
    fontStroke: defCon.randString(8, "char"),
    fontShadow: defCon.randString(8, "char"),
    shadowColor: defCon.randString(8, "char"),
    fontCSS: defCon.randString(8, "char"),
    fontEx: defCon.randString(8, "char"),
    submit: defCon.randString(8, "char"),
    fface: defCon.randString(6, "char"),
    smooth: defCon.randString(6, "char"),
    fontSize: defCon.randString(8, "char"),
    fontZoom: defCon.randString(6, "char"),
    zoomSize: defCon.randString(7, "char"),
    strokeSize: defCon.randString(6, "mix"),
    stroke: defCon.randString(7, "char"),
    fstroke: defCon.randString(8, "mix"),
    fixStroke: defCon.randString(6, "mix"),
    shadowSize: defCon.randString(6, "mix"),
    shadow: defCon.randString(7, "char"),
    color: defCon.randString(7, "char"),
    cssfun: defCon.randString(7, "char"),
    exclude: defCon.randString(7, "char"),
    mono: defCon.randString(7, "char"),
    selector: defCon.randString(9, "char"),
    cleaner: defCon.randString(7, "char"),
    fonttooltip: defCon.randString(7, "char"),
    fontName: defCon.randString(6, "char"),
    cSwitch: defCon.randString(5, "mix"),
    eSwitch: defCon.randString(5, "mix"),
    backup: defCon.randString(6, "char"),
    files: defCon.randString(5, "mix"),
    tfiles: defCon.randString(5, "mix"),
    db: defCon.randString(9, "char"),
    ct: defCon.randString(7, "char"),
    isclosetip: defCon.randString(6, "mix"),
    bk: defCon.randString(7, "char"),
    isbackup: defCon.randString(6, "mix"),
    pv: defCon.randString(7, "char"),
    ispreview: defCon.randString(6, "mix"),
    fs: defCon.randString(7, "char"),
    isfontsize: defCon.randString(6, "mix"),
    hk: defCon.randString(7, "char"),
    ishotkey: defCon.randString(6, "mix"),
    mps: defCon.randString(7, "char"),
    maxps: defCon.randString(6, "char"),
    feedback: defCon.randString(6, "char"),
    fontTest: defCon.randString(16, "char"),
    flc: defCon.randString(6, "char"),
    flcid: defCon.randString(5, "mix"),
  };
  defCon.class = {
    rndClass: defCon.randString(10, "char"),
    rndStyle: defCon.randString(10, "char"),
    guide: defCon.randString(5, "mix"),
    title: defCon.randString(7, "char"),
    help: defCon.randString(5, "mix"),
    rotation: defCon.randString(6, "char"),
    emoji: defCon.randString(4, "mix"),
    main: defCon.randString(7, "char"),
    fontList: defCon.randString(7, "char"),
    spanlabel: defCon.randString(5, "mix"),
    label: defCon.randString(5, "mix"),
    placeholder: defCon.randString(5, "mix"),
    checkbox: defCon.randString(7, "char"),
    flex: defCon.randString(9, "char"),
    tooltip: defCon.randString(8, "char"),
    tooltiptext: defCon.randString(9, "char"),
    ps1: defCon.randString(4, "mix"),
    ps2: defCon.randString(4, "mix"),
    ps3: defCon.randString(4, "mix"),
    ps4: defCon.randString(4, "mix"),
    slider: defCon.randString(7, "char"),
    frColorPicker: defCon.randString(9, "char"),
    readonly: defCon.randString(7, "char"),
    notreadonly: defCon.randString(7, "char"),
    reset: defCon.randString(6, "mix"),
    cancel: defCon.randString(6, "mix"),
    submit: defCon.randString(6, "mix"),
    selector: defCon.randString(9, "char"),
    selectFontId: defCon.randString(8, "char"),
    close: defCon.randString(6, "char"),
    db: defCon.randString(10, "char"),
    dbbc: defCon.randString(8, "char"),
    dbb: defCon.randString(7, "char"),
    dbm: defCon.randString(7, "char"),
    dbt: defCon.randString(7, "char"),
    dbbt: defCon.randString(6, "mix"),
    dbbf: defCon.randString(6, "mix"),
    dbbn: defCon.randString(6, "mix"),
    switch: defCon.randString(5, "mix"),
    anim: defCon.randString(5, "mix"),
    range: defCon.randString(11, "char"),
    rangeProgress: defCon.randString(8, "mix"),
  };

  const DEFAULT_ARRAY = [];
  const CUR_WINDOW_TOP = defCon.isWinTop();
  const CUR_HOST_NAME = defCon.getHostName();
  const IS_FRAMES = CUR_WINDOW_TOP ? "" : "[FRAMES]";
  const RANDOM_ID = defCon.randString(2).concat(defCon.randString(4, "digit"));
  const HOST_URI = defCon.decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkY0MTY2ODg=");
  const FONTLIST_IMG = defCon.decrypt("aHR0cHMlM0ElMkYlMkZzMS5heDF4LmNvbSUyRjIwMjIlMkYwNCUyRjAyJTJGcW9SZldkLmdpZg==");
  const LOADING_IMG = defCon.decrypt("aHR0cHMlM0ElMkYlMkZpbWcuemNvb2wuY24lMkZjb21tdW5pdHklMkYwMzhkZGU0NThmOWE4NzRhODAxMjE2MGY3NDE3ZjZlLmdpZg==");

  defCon.queryString = `html,head,head *,base,meta,style,link,script,`.concat(
    `noscript,body,iframe,img,br,hr,canvas,applet,source,svg,svg *,picture,`,
    `form,input,select,textarea,object,embed,audio,video,track,figure,progress,`,
    `fr-colorpicker,fr-colorpicker *,fr-configure,fr-configure *,fr-dialogbox,`,
    `fr-dialogbox *,gb-notice,gb-notice *`
  );

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
  const cP = (target, prop) => {
    try {
      return window.getComputedStyle(target, null).getPropertyValue(prop);
    } catch (e) {
      return target.style && target.style[prop];
    }
  };
  const qA = (str, target = document) => {
    try {
      return Array.prototype.slice.call(target.querySelectorAll(str), 0);
    } catch (e) {
      return typeof str === "string" ? getElements(str, target) : [];
    }
  };
  const qS = (str, target = document) => {
    try {
      return target.querySelector(str);
    } catch (e) {
      return typeof str === "string" ? getElements(str, target)[0] : null;
    }
  };
  const cE = str => {
    return document.createElement(str);
  };

  /* Content-Security-Policy: trustedTypes */

  if (window.trustedTypes && window.trustedTypes.createPolicy) {
    const wTcP = (wTrs = "fr#safeCreateHTML") => {
      const wT = new Set([
        { host: "teams.live.com", policy: "goog#html" },
        { host: "github.dev", policy: "safeInnerHtml" },
      ]);
      for (const wTs of wT.values()) {
        if (location.hostname.startsWith(wTs.host)) {
          wTrs = wTs.policy;
          break;
        }
      }
      return wTrs;
    };
    trustedTypesPolicy = window.trustedTypes.createPolicy(wTcP(), {
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
    getBrowser: (brands, getBrand, info = "Other", version = "0") => {
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
            }
          });
        } else {
          brands.some(b => {
            if (b.brand === "Chromium") {
              info = "WebKit";
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
        WebKit: u.includes("applewebkit") || u.includes("Chromium"),
        Gecko: u.includes("gecko") && !u.includes("khtml") && !u.includes("trident") && !u.includes("compatible"),
        Blink: (u.includes("applewebkit") && (u.includes("chromium") || u.includes("chrome"))) || u.includes("Chromium"),
      };
    },
    chromiumVersion: function (u = this.init()) {
      if (this.uaData) {
        return this.getBrowser(u.brands, null).version;
      } else {
        const m = u.match(/chrom[e|ium]\/([\d]+)/i);
        return m && m[1] ? m[1] : 0;
      }
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
          QQBrowser: /qqbrowser/g.test(u),
          Wechat: /micromessenger/g.test(u),
          UCBrowser: /ubrowser/g.test(u),
          Sougou: /metasr|sogou/g.test(u),
          Maxthon: /maxthon/g.test(u),
          CentBrowser: /cent/g.test(u),
          Vivaldi: /vivaldi/g.test(u),
        };
        for (let i in browserArray) {
          if (oH.call(browserArray, i) && browserArray[i]) {
            browserInfo = i;
          }
        }
      }
      return browserInfo;
    },
    getUA: async function (u = this.init()) {
      try {
        return this.uaData
          ? JSON.stringify(await u.getHighEntropyValues(["architecture", "bitness", "model", "platform", "platformVersion", "uaFullVersion"]))
          : this.isCheatUA()
          ? "(CHEAT-UA) ".concat(u)
          : u;
      } catch (e) {
        error("Navigator.getUA:", e.message);
        return u;
      }
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
  const IS_REAL_BLINK = (getNavigator.core().Blink && !getNavigator.isCheatUA()) || !!unsafeWindow.chrome;

  /* New DefinePropertise */

  let controller = IS_REAL_GECKO ? new AbortController() : null;
  const definePropertiesForZoom = (ratio, { deleteProperty }) => {
    const obj_Targets = new Set([
      {
        objs: [MouseEvent.prototype],
        props: ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "screenX", "screenY", "movementX", "movementY", "x", "y"],
      },
      {
        objs: [window, unsafeWindow],
        props: ["pageXOffset", "pageYOffset", "scrollX", "scrollY"],
      },
      {
        objs: [Element.prototype],
        props: ["scrollLeft", "scrollTop"],
      },
    ]);
    try {
      for (const obj_Target of obj_Targets.values()) {
        const t = ratio;
        const d = deleteProperty;
        obj_Target.objs.forEach(obj => {
          obj_Target.props.forEach(prop => {
            const object = Reflect.getOwnPropertyDescriptor(obj, prop);
            if (object) {
              d && Reflect.deleteProperty(obj, prop);
              if (["scrollLeft", "scrollTop"].includes(prop)) {
                Reflect.defineProperty(obj, prop, {
                  configurable: true,
                  enumerable: true,
                  get: function () {
                    return object.get.call(this) / t;
                  },
                  set: function (Value) {
                    switch (prop) {
                      case "scrollLeft":
                        this.scrollTo(Value * t, 0);
                        break;
                      case "scrollTop":
                        this.scrollTo(0, Value * t);
                        break;
                    }
                  },
                }) && debug(`\u27A4 %O ${IS_FRAMES || "-"} %s %csucceeded`, obj, prop, "color:green");
              } else {
                Reflect.defineProperty(obj, prop, {
                  configurable: true,
                  enumerable: true,
                  get: function () {
                    return object.get.call(this) / t;
                  },
                }) && debug(`\u27A4 %O ${IS_FRAMES || "-"} %s %csucceeded`, obj, prop, "color:green");
              }
            }
          });
        });
      }
      if (IS_REAL_BLINK) {
        deleteProperty && Reflect.deleteProperty(SVGGraphicsElement.prototype, "getScreenCTM");
        Reflect.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {
          configurable: true,
          enumerable: true,
          value: function () {
            const value = defCon.getScreenCTM.call(this);
            let newSVGMatrix = this.ownerSVGElement.createSVGMatrix();
            let newValue = new Proxy(value, {
              get: function (target, proper) {
                return Reflect.get(target, proper) / defCon.tZoom;
              },
            });
            newSVGMatrix.a = newValue.a;
            newSVGMatrix.b = newValue.b;
            newSVGMatrix.c = newValue.c;
            newSVGMatrix.d = newValue.d;
            newSVGMatrix.e = newValue.e;
            newSVGMatrix.f = newValue.f;
            return newSVGMatrix;
          },
        }) && debug(`\u27A4 %O ${IS_FRAMES || "-"} getScreenCTM() %csucceeded`, SVGGraphicsElement.prototype, "color:green");
      }
    } catch (e) {
      error("defineProperty:", e.message);
    }
    if (IS_REAL_GECKO) {
      try {
        deleteProperty && Reflect.deleteProperty(Element.prototype, "getClientRects");
        Reflect.defineProperty(Element.prototype, "getClientRects", {
          configurable: true,
          enumerable: true,
          value: function () {
            const list = defCon.getClientRects.call(this);
            let newRectlist = new Set();
            for (let i = 0; i !== list.length; i++) {
              let newRect = new Proxy(list[i], {
                get: function (target, proper) {
                  return Reflect.get(target, proper) / defCon.tZoom;
                },
              });
              newRectlist[i] = newRect;
            }
            return newRectlist;
          },
        }) && debug(`\u27A4 %O ${IS_FRAMES || "-"} getClientRects() [DOMRectList] %csucceeded`, Element.prototype, "color:green");
        deleteProperty && Reflect.deleteProperty(Element.prototype, "getBoundingClientRect");
        Reflect.defineProperty(Element.prototype, "getBoundingClientRect", {
          configurable: true,
          enumerable: true,
          value: function () {
            const value = defCon.getBoundingClientRect.call(this);
            let newValue = new Proxy(value, {
              get: function (target, proper) {
                return Reflect.get(target, proper) / defCon.tZoom;
              },
            });
            return newValue;
          },
        }) && debug(`\u27A4 %O ${IS_FRAMES || "-"} getBoundingClientRect() [DOMRect] %csucceeded`, Element.prototype, "color:green");

        /* Patch2022.2.Beta: Fixed Position:sticky/fixed while transform:scale() in Firefox. --START-- */

        const { oScale, tScale } = getSacleMatrix();
        const fixStyleHandler = (t, { preview }) => {
          const el = [];
          if (t && document.body) {
            const checkPositionStatus = (type, target) => {
              const rect = target.getBoundingClientRect();
              return (
                rect.right >= 0 &&
                (rect.bottom >= 0 || (rect.bottom <= 0 && cP(target, "position") === "fixed")) &&
                cP(target, "display") !== "none" &&
                (cP(target, "height").match(/\d+/) > 0 || cP(target, "height") === "auto") &&
                cP(target, "visibility") !== "hidden" &&
                cP(target, "position") === type &&
                !cP(target, `--${type}`)
              );
            };
            const getFixedArray = item => {
              const originHeight = Number(cP(item, "height").match(/\d+/)) || 0;
              const originTop = Number(cP(item, "top").match(/-?\d+/)) || 0;
              const originBottom = Number(cP(item, "bottom").match(/-?\d+/)) || 0;
              const screenHeight = window.innerHeight;
              const offset = originTop > screenHeight ? screenHeight / t - item.clientHeight * t - originBottom : originTop / t;
              el.push({ item: item, type: "fixed", offset: offset, height: originHeight });
            };
            const getStickyArray = item => {
              const originStyle = item.style.cssText;
              const offset = Number(cP(item, "top").match(/-?\d+/)) || 0;
              el.push({ item: item, type: "sticky", offset: offset, style: originStyle });
            };
            const runNodeIterator = (nodes, type) => {
              return document.createNodeIterator(nodes, NodeFilter.SHOW_ELEMENT, {
                acceptNode(node) {
                  return checkPositionStatus(type, node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                },
              });
            };
            const observer = new MutationObserver(mutations => {
              oScale !== 1 && preview === true && (el.length = 0), (preview = false);
              mutations.forEach(mutation => {
                switch (mutation.type) {
                  case "attributes":
                    switch (mutation.attributeName) {
                      case "style":
                        checkPositionStatus("fixed", mutation.target) && getFixedArray(mutation.target);
                        checkPositionStatus("sticky", mutation.target) && getStickyArray(mutation.target);
                        break;
                      case "class":
                        if (!["HTML", "BODY"].includes(mutation.target.nodeName)) {
                          let fixedNode, stickyNode;
                          const fixedNodes = runNodeIterator(mutation.target, "fixed");
                          while ((fixedNode = fixedNodes.nextNode())) {
                            getFixedArray(fixedNode);
                            break;
                          }
                          const stickyNodes = runNodeIterator(mutation.target, "sticky");
                          while ((stickyNode = stickyNodes.nextNode())) {
                            getStickyArray(stickyNode);
                            break;
                          }
                        }
                        break;
                    }
                    break;
                  case "childList":
                    for (const node of mutation.addedNodes) {
                      if (node.nodeType === 1 && node.isConnected) {
                        checkPositionStatus("fixed", node) && getFixedArray(node);
                        checkPositionStatus("sticky", node) && getStickyArray(node);
                      }
                    }
                    break;
                }
              });
              for (let i = 0; i < el.length; i++) {
                for (let j = i + 1; j < el.length, el[i], el[j]; j++) {
                  if (el[i].item === el[j].item || !el[i].item.isConnected) {
                    el.splice(i, 1);
                    i = Math.max(0, i - 1);
                  }
                }
              }
            });
            try {
              qA(`:not(${defCon.queryString}),fr-dialogbox`).forEach(item => {
                checkPositionStatus("fixed", item) && getFixedArray(item);
                checkPositionStatus("sticky", item) && getStickyArray(item);
              });
              observer.observe(document.body, { childList: true, attributes: true, attributeFilter: ["style", "class"], subtree: true });
              window.addEventListener(
                "scroll",
                () => {
                  let s, r;
                  window.requestAnimationFrame(async () => {
                    for (let i = 0; i < el.length; i++) {
                      switch (el[i].type) {
                        case "sticky":
                          s = defCon.elCompat.getBoundingClientRect().top * (defCon.tZoom - 1);
                          r = parseFloat(s + el[i].offset);
                          if (defCon.tZoom !== 1) {
                            el[i].item.style.cssText += `top:var(--sticky)!important;--sticky:${r.toFixed(4)}px;`;
                          } else {
                            el[i].item.style.cssText = el[i].style;
                          }
                          break;
                        case "fixed":
                          s = defCon.elCompat.getBoundingClientRect().top;
                          r = parseFloat(el[i].offset - s);
                          if (defCon.tZoom !== 1) {
                            if (["fr-configure", "fr-dialogbox"].includes(el[i].item.nodeName.toLowerCase())) {
                              el[i].item.style.cssText += `top:var(--fixed)!important;--fixed:${r.toFixed(4)}px;`;
                            } else if (["fr-colorpicker", "gb-notice"].includes(el[i].item.nodeName.toLowerCase())) {
                              el[i].item.style.cssText += `--fixed:0px;`;
                            } else {
                              await sleep(10);
                              el[i] &&
                                (el[i].item.style.cssText += `height:${Math.min(el[i].height, window.innerHeight)}px;`.concat(
                                  `max-height:fit-content;`,
                                  `top:var(--fixed)!important;`,
                                  `--fixed:${r.toFixed(4)}px;`
                                ));
                            }
                          } else {
                            if (["fr-colorpicker", "gb-notice"].includes(el[i].item.nodeName.toLowerCase())) {
                              el[i].item.style.setProperty("--fixed", "");
                            } else if (["fr-configure", "fr-dialogbox"].includes(el[i].item.nodeName.toLowerCase())) {
                              el[i].item.removeAttribute("style");
                            }
                          }
                          break;
                      }
                    }
                    qA(`[style*="--fixed"]`).forEach(item => {
                      if (cP(item, "position") !== "fixed") {
                        item.style.setProperty("height", "");
                        item.style.setProperty("max-height", "");
                        item.style.setProperty("top", "");
                        item.style.setProperty("--fixed", "");
                      }
                    });
                  });
                },
                { signal: controller.signal }
              );
            } catch (e) {
              error("FixStyleHandler:", e.message);
            }
          }
        };
        if (defCon.oZoom.length > 1 && oScale !== tScale) {
          fixStyleHandler(ratio, { preview: true });
        } else {
          document.addEventListener("readystatechange", () => {
            if (document.readyState !== "loading") {
              fixStyleHandler(ratio, { preview: false });
            }
          });
        }
        // Patch2022.2.alhpa: Fixed Position:sticky/fixed while transform:scale() in Firefox. --END-- //
      } catch (e) {
        error("defineProperty.Firefox:", e.message);
      }
    }
  };

  /* Initialized important functions */

  function getScriptNameViaLanguage() {
    const language = navigator.language || "zh-CN";
    const name_i18n = new RegExp(`(@name:${language}\\s+)(\\S+)`);
    const languageString = GMinfo.scriptMetaStr.match(name_i18n);
    const scriptName = languageString ? languageString[2] : GMinfo.script.name;
    return String(scriptName || "Font Rendering");
  }

  function setRAFInterval(callback, interval, { runNow }) {
    if (runNow === true) {
      const shouldFinish = callback();
      if (shouldFinish) {
        return;
      }
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

  function getElements(str, target) {
    const aStr = str.trim().startsWith(":not") ? [] : str.trim().split(",");
    let aChild = [];
    try {
      aStr.forEach(items => {
        const rStr = items.trim().split(/\s+|>|,/g);
        let rChild = [];
        let rParent = [target];
        for (let i = 0; i < rStr.length; i++) {
          rChild = getElementsByStr(rParent, rStr[i]) || [];
          rParent = rChild;
        }
        aChild = aChild.concat(rChild);
      });
    } catch (e) {
      error("QuerySelector.getElements:", e.message);
    }
    return [...aChild];
  }

  function getElementsByStr(aParent, str) {
    const aChild = [];
    const pushElemIntoNodelist = (a, b, c) => {
      for (let j = 0; j < a.length; j++) {
        const aValue = a[j].getAttribute(c[1]) || "";
        const rStr = c[2].replace(/"|'|`/g, "");
        if (
          (str.search(/[^*^$~]=/) !== -1 && aValue === rStr) ||
          (str.search(/\^=/) !== -1 && aValue.startsWith(rStr)) ||
          (str.search(/\$=/) !== -1 && aValue.endsWith(rStr)) ||
          (str.search(/\*=/) !== -1 && aValue.includes(rStr)) ||
          (str.search(/~=/) !== -1 && aValue.match(new RegExp(`\\b${rStr}\\b`)))
        ) {
          a[j] && b.push(a[j]);
        }
      }
    };
    try {
      for (let i = 0; aParent && i < aParent.length; i++) {
        switch (str.charAt(0)) {
          case "#":
            if (/^#[-\w]+\[[-\w]+[*^$~]?=["'`]?\w+["'`]?\]/g.test(str)) {
              let aStr = str.split(/\[|[*^$~]?=|\]/g);
              let aRes = document.getElementById(aStr[0].substring(1));
              pushElemIntoNodelist([aRes], aChild, aStr);
            } else {
              let aRes = document.getElementById(str.substring(1));
              aRes && aChild.push(aRes);
            }
            break;
          case ".":
            if (aParent[i]) {
              if (/^\.[-\w]+\[[-\w]+[*^$~]?=["'`]?\w+["'`]?\]/g.test(str)) {
                let aStr = str.split(/\[|[*^$~]?=|\]/g);
                let aRes = aParent[i].getElementsByClassName(aStr[0].substring(1));
                pushElemIntoNodelist(aRes, aChild, aStr);
              } else {
                let aRes = aParent[i].getElementsByClassName(str.substring(1));
                for (let j = 0; j < aRes.length; j++) {
                  aRes[j] && aChild.push(aRes[j]);
                }
              }
            }
            break;
          default:
            if (aParent[i]) {
              if (/^[-\w]+\.\w+/g.test(str)) {
                let aStr = str.split(".");
                let aRes = aParent[i].getElementsByTagName(aStr[0]);
                let reg = new RegExp("\\b" + aStr[1] + "\\b", "g");
                for (let j = 0; j < aRes.length; j++) {
                  if (aRes[j] && reg.test(aRes[j].className)) {
                    aChild.push(aRes[j]);
                  }
                }
              } else if (/^[-\w]*\[[-\w]+[*^$~]?=["'`]?\w+["'`]?\]/g.test(str)) {
                let aStr = str.split(/\[|[*^$~]?=|\]/g);
                let aRes = aParent[i].getElementsByTagName(aStr[0] || "*");
                pushElemIntoNodelist(aRes, aChild, aStr);
              } else {
                let aRes = aParent[i].getElementsByTagName(str);
                for (let j = 0; j < aRes.length; j++) {
                  aRes[j] && aChild.push(aRes[j]);
                }
              }
            }
            break;
        }
      }
    } catch (e) {
      error("QuerySelector.getElementsByStr:", e.message);
    }
    return aChild;
  }

  function getAsyncStyleNode(target) {
    let el = qA(`style,link[rel*="stylesheet" i]:not([disabled])`, target).slice(-1)[0] || target.lastElementChild;
    const styleSheets = (target.parentNode && target.parentNode.parentNode && target.parentNode.parentNode.styleSheets) || document.styleSheets;
    for (let i = styleSheets.length - 1; i >= 0; i--) {
      if (styleSheets[i].ownerNode && styleSheets[i].ownerNode.parentNode === target) {
        el = styleSheets[i].ownerNode;
        break;
      }
    }
    return el;
  }

  function safeRemove(s, t) {
    qA(s, t).forEach(item => {
      try {
        item.parentNode && item.parentNode.removeChild(item);
      } catch (e) {
        item.remove();
      }
    });
    return !qA(s, t);
  }

  function addStyle(css, className, addToTarget, T = "T", { isReload } = {}, initType = "text/css") {
    setRAFInterval(
      () => {
        try {
          if (addToTarget && typeof addToTarget === "object") {
            if (className && typeof className === "string") {
              if (isReload === true && qS(`.${className}`, addToTarget)) {
                safeRemove(`.${className}`, addToTarget);
                debug(`\u27A4 style<c:${className}> View:%c %s`, "color:crimson", !!qA(`style[id^="${T}"]`, addToTarget).length);
                while (qA(`style[id^="${T}"]`, addToTarget).length > 0) {
                  safeRemove(`style[id^="${T}"]`, addToTarget);
                  debug(`\u27A4 style<i:${T}????????> Review:%c %s`, "color:crimson", !!qA(`style[id^="${T}"]`, addToTarget).length);
                }
              } else if (isReload === false && qS(`.${className}`, addToTarget)) {
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
            const element = getAsyncStyleNode(addToTarget);
            isReload === true && element && element.nextElementSibling ? addToTarget.insertBefore(cssNode, element.nextElementSibling) : addToTarget.appendChild(cssNode);
            cssNode = null;
            return Boolean(qS(`.${className}`, addToTarget));
          } else {
            return true;
          }
        } catch (e) {
          error("AddStyle:", e.message);
          return true;
        }
      },
      20,
      { runNow: true }
    );
  }

  function framesInsertStyle({ items, condition, tstyle }) {
    const rect = items.getBoundingClientRect();
    if (rect.bottom >= 0 && rect.right >= 0 && rect.width > 4 && rect.height > 4 && cP(items, "display") !== "none" && cP(items, "visibility") !== "hidden") {
      const ORIGIN_SANDBOX = items.getAttribute("sandbox");
      ORIGIN_SANDBOX && items.removeAttribute("sandbox");
      const h = items.contentWindow;
      const sT = qA("style[id^='TS']", h.document.head);
      const bT = h.document.body.textContent.trim();
      switch (condition) {
        case "Preview":
          debug("\u27A4 preview<styleCount>:", sT.length);
          if (sT.length > 0) {
            addStyle(tstyle, sT[0].className, h.document.head, "TS", { isReload: true });
          } else {
            addStyle(tstyle, null, h.document.head, "TS", { isReload: false });
          }
          debug("\u27A4 asyncFrames<loadPreview>: %c%s\n\u3000 \u27A5 %s", "color:indigo", condition, items.src || "<NULL>");
          items.setAttribute("fr-async-frames", condition);
          break;
        case "Autoload":
          if (!sT.length && bT.length > 0) {
            addStyle(tstyle, null, h.document.head, "TS", { isReload: false });
            if (qA("style[id^='TS']", h.document.head).length > 0) {
              debug("\u27A4 asyncFrames<insertStyle>: %c%s\n\u3000 \u27A5 %s", "color:indigo", condition, items.src || "<NULL>");
              items.setAttribute("fr-async-frames", condition);
            }
          }
          break;
      }
      ORIGIN_SANDBOX && items.setAttribute("sandbox", ORIGIN_SANDBOX);
      count(`\u27A4 [ASYNCFRAMES][i:${items.id || "<NULL>"}]`);
    }
  }

  function getSacleMatrix() {
    defCon.oZoom = defCon.oZoom.slice(-2);
    const oScale = Number(defCon.oZoom.slice(-2, -1)) || 1;
    const tScale = Number(defCon.oZoom.slice(-1)) || 1;
    return { oScale, tScale };
  }

  function loadPreview(_preview_, ts = defCon.tStyle, s = true) {
    try {
      if (_preview_) {
        addStyle(ts, `${defCon.class.rndStyle}`, document.head, "TS", { isReload: true });
        if (defCon.isFontsize) {
          const { oScale, tScale } = getSacleMatrix();
          tScale !== oScale && definePropertiesForZoom(tScale / oScale, { deleteProperty: true });
          debug("\u27A4 Scale<Matrix>: %o", defCon.oZoom);
        }
        qA("iframe").forEach(async items => {
          await sleep(30);
          try {
            framesInsertStyle({ items: items, condition: "Preview", tstyle: ts });
          } catch (e) {
            error("Window.Frames:", e.message);
          }
        });
        defCon.preview = !s;
      }
    } catch (e) {
      error("LoadPreview:", e.message);
    }
  }

  function insertStyle_AsyncFrames({ isMutationObserver }) {
    // Greasemonkey4.0+ need to wait all frames loaded to excute.
    if (IS_REAL_BLINK || isGM) {
      qA("iframe").forEach(async items => {
        await sleep(30);
        try {
          framesInsertStyle({ items: items, condition: "Autoload", tstyle: defCon.tStyle });
        } catch (e) {
          !isMutationObserver && error("InsertStyle.AsyncFrames:", e.message);
        }
      });
    }
  }

  function convertToUnicode(str) {
    let value = "";
    for (let i = 0; i < str.length; i++) {
      value += "\\" + ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return value.toUpperCase();
  }

  /* expire for fontlist cache */

  const cache = {
    value: (data, eT = 6048e5) => {
      debug("\u27A4 cache Expiration: %c%s hrs", "color:green;font-weight:700", eT / 36e5);
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
          debug("\u27A4 cache Remaining: %c%s hrs", "color:crimson;font-weight:700", ((expiredTime - curTime) / 36e5).toFixed(2));
          if (expiredTime > curTime && typeof data === "object") {
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

  /* Data download */

  function dataDownload(f, d) {
    let e = cE("a");
    e.setAttribute("href", "data:application/octet-stream;charset=utf-8," + defCon.encrypt(String(d)));
    e.setAttribute("download", f);
    e.style.display = "none";
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
    e = null;
  }

  /* New SliderChecker */

  function setSliderProperty(a, b, c) {
    a.value = Number(b).toFixed(c);
    a.setAttribute("value", Number(b));
    a.parentNode.style.setProperty("--value", Number(b));
    a.parentNode.style.setProperty("--text-value", JSON.stringify(Number(b).toFixed(c)));
  }

  function checkInputValue(b, a, c, f, g = false) {
    b.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9.]/, "");
    });
    b.addEventListener("change", function () {
      const thatValue = this.value === "OFF" ? (g ? 1 : 0) : this.value ? Number(this.value) : null;
      const d = Number(a.parentNode.style.getPropertyValue("--value"));
      if (!c.test(thatValue) || thatValue < a.parentNode.style.getPropertyValue("--min") || thatValue > a.parentNode.style.getPropertyValue("--max")) {
        setSliderProperty(a, d, f);
        b.value = d === (g ? 1 : 0) ? "OFF" : d.toFixed(f);
        b._value_ = d;
      } else {
        setSliderProperty(a, thatValue, f);
        b.value = g ? (thatValue === 1 ? "OFF" : thatValue.toFixed(f)) : thatValue === 0 ? "OFF" : thatValue.toFixed(f);
        b._value_ = thatValue;
      }
    });
  }

  /* new ColorDepth */

  const toColordepth = (hexa, s) => {
    hexa = /^#[0-9A-F]{8}$/.test(hexa) ? hexa.substring(1) : "FFFFFFFF";
    const rgbaToHexa = rgba => {
      const { r, g, b, a } = rgba;
      return (
        Math.floor(r).toString(16).padStart(2, "0") +
        Math.floor(g).toString(16).padStart(2, "0") +
        Math.floor(b).toString(16).padStart(2, "0") +
        Math.floor(a).toString(16).padStart(2, "0")
      );
    };
    const hexaToRgba = hexa => {
      return {
        r: parseInt(hexa.substr(0, 2), 16),
        g: parseInt(hexa.substr(2, 2), 16),
        b: parseInt(hexa.substr(4, 2), 16),
        a: parseInt(hexa.substr(6, 2) || "FF", 16),
      };
    };
    const setBrightness = rgba => {
      const { r, g, b, a } = rgba;
      return { r: 0.992 * r, g: 0.967 * g, b: 0.928 * b, a: a * 0.853 };
    };
    const tl = x => {
      return Math.min(255, Math.floor(x * s));
    };
    const { r, g, b, a } = hexaToRgba(hexa);
    return `#${rgbaToHexa(setBrightness({ r: tl(r), g: tl(g), b: tl(b), a: tl(a) }))}`;
  };
  const getBrightness = hexa => {
    const { r, g, b, a } = {
      r: parseInt(hexa.substr(0, 2), 16),
      g: parseInt(hexa.substr(2, 2), 16),
      b: parseInt(hexa.substr(4, 2), 16),
      a: parseInt(hexa.substr(6, 2), 16) / 256,
    };
    return (0.299 * r + 0.587 * g + 0.114 * b) / a;
  };

  /* new FrDialogBox */

  let frDialog = {};
  class FrDialogBox {
    constructor({ titleText = "Error", messageText = "Something unexpected has gone wrong.", trueButtonText = "OK", falseButtonText = null, neutralButtonText = null } = {}) {
      this.titleText = titleText;
      this.messageText = messageText;
      this.trueButtonText = trueButtonText;
      this.falseButtonText = falseButtonText;
      this.neutralButtonText = neutralButtonText;
      this.hasFalse = falseButtonText !== null;
      this.hasNeutral = neutralButtonText !== null;
      this.container = undefined;
      this.frDialog = undefined;
      this.title = undefined;
      this.question = undefined;
      this.buttonContainer = undefined;
      this.trueButton = undefined;
      this.falseButton = undefined;
      this.neutralButton = undefined;
      this.parent = document.body;
      this.zoomText = undefined;
      this._createfrDialog(this);
      this._appendfrDialog();
      this._resetfrDialog();
    }
    _createfrDialog(context) {
      this.container = cE("fr-dialogbox");
      this.container.id = defCon.id.dialogbox;
      this.frDialog = cE("div");
      this.frDialog.classList.add(`${defCon.class.db}`);
      this.frDialog.style.opacity = 0;
      this.container.appendChild(this.frDialog);
      this.title = cE("div");
      this.title.textContent = this.titleText;
      this.title.classList.add(`${defCon.class.dbt}`);
      this.frDialog.appendChild(this.title);
      this.question = cE("div");
      this.question.innerHTML = trustedTypesPolicy.createHTML(this.messageText);
      this.question.classList.add(`${defCon.class.dbm}`);
      this.frDialog.appendChild(this.question);
      this.buttonContainer = cE("div");
      this.buttonContainer.classList.add(`${defCon.class.dbbc}`);
      this.frDialog.appendChild(this.buttonContainer);
      this.trueButton = cE("a");
      this.trueButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbt}`);
      this.trueButton.textContent = this.trueButtonText;
      this.trueButton.addEventListener("click", () => {
        context._destroy();
      });
      this.buttonContainer.appendChild(this.trueButton);
      if (this.hasFalse) {
        this.falseButton = cE("a");
        this.falseButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbf}`);
        this.falseButton.textContent = this.falseButtonText;
        this.falseButton.addEventListener("click", () => {
          context._destroy();
        });
        this.buttonContainer.appendChild(this.falseButton);
      }
      if (this.hasNeutral) {
        this.neutralButton = cE("a");
        this.neutralButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbn}`);
        this.neutralButton.textContent = this.neutralButtonText;
        this.neutralButton.addEventListener("click", () => {
          context._destroy();
        });
        this.buttonContainer.appendChild(this.neutralButton);
      }
    }
    _appendfrDialog() {
      const container = this.container;
      const diag = this.frDialog;
      if (CUR_WINDOW_TOP && container && !qS(`#${defCon.id.dialogbox}`)) {
        this.parent.appendChild(container);
        sleep(100).then(() => {
          diag.style.opacity = 1;
        });
      }
    }
    _resetfrDialog() {
      const zoom = Number(cP(this.parent, "zoom")) || defCon.tZoom || 1;
      if (zoom !== 1) {
        if (IS_REAL_GECKO) {
          this.zoomText = `transform-origin:left top 0;transform:scale(${1 / zoom});width:99vw;height:99vh;top:0;`;
          this.container.style.cssText += this.zoomText;
          window.scrollTo(0, defCon.elCompat.scrollTop * zoom - 1);
        } else {
          this.zoomText = `zoom:${1 / zoom}`;
          this.container.style.cssText += this.zoomText;
        }
      }
    }
    _destroy() {
      if (this.container) {
        this.container.remove();
        for (let key in this) {
          if (oH.call(this, key)) {
            delete this[key];
          }
        }
        debug("\u27A4 FrDialogBox.destroy: %o", delete this, (frDialog = null));
      }
    }
    respond() {
      return new Promise((resolve, reject) => {
        const somethingWentWrongUponCreation = !this.frDialog || !this.trueButton;
        if (somethingWentWrongUponCreation) {
          reject(new Error("Something went wrong upon modal creation"));
        }
        this.trueButton.addEventListener("click", () => {
          resolve(true);
        });
        if (this.hasFalse) {
          this.falseButton.addEventListener("click", () => {
            resolve(false);
          });
        }
      });
    }
  }

  function closeAllFrDialogBox(s) {
    qA(s).forEach(item => {
      item.remove();
    });
    frDialog = null;
  }

  /* Font filtering & discriminating list */

  const fontCheck = new Set([
    { ch: "微软雅黑", en: "Microsoft YaHei" },
    { ch: "微軟正黑體", en: "Microsoft JhengHei" },
    { ch: "苹方-简", en: "PingFang SC", ps: "PingFangSC-Regular" },
    { ch: "蘋方-繁", en: "PingFang TC", ps: "PingFangTC-Regular" },
    { ch: "蘋方-港", en: "PingFang HK", ps: "PingFangHK-Regular" },
    { ch: "更纱黑体 SC", en: "Sarasa Gothic SC", ps: "Sarasa-Gothic-SC-Regular" },
    { ch: "更紗黑體 TC", en: "Sarasa Gothic TC", ps: "Sarasa-Gothic-TC-Regular" },
    { ch: "冬青黑体简", en: "Hiragino Sans GB", ps: "HiraginoSansGB-Regular" },
    { ch: "兰亭黑-简", en: "Lantinghei SC", ps: "FZLTTHK--GBK1-0" },
    { ch: "OPPOSans", en: "OPPOSans", ps: "OPPOSans-R" },
    { ch: "霞鹜文楷", en: "LXGW WenKai" },
    { ch: "鸿蒙黑体", en: "HarmonyOS Sans SC" },
    { ch: "浪漫雅圆", en: "LMYY" },
    { ch: "思源黑体", en: "Source Han Sans SC" },
    { ch: "思源宋体", en: "Source Han Serif SC" },
    { ch: "汉仪旗黑", en: "HYQiHei", ps: "HYQiHei-EES" },
    { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei", ps: "WenQuanYiMicroHei" },
    { ch: "文泉驿正黑", en: "WenQuanYi Zen Hei", ps: "WenQuanYiZenHei" },
    { ch: "方正舒体", en: "FZShuTi" },
    { ch: "方正姚体", en: "FZYaoti" },
    { ch: "华文仿宋", en: "STFangsong" },
    { ch: "华文楷体", en: "STKaiti" },
    { ch: "华文细黑", en: "STXihei" },
    { ch: "华文彩云", en: "STCaiyun" },
    { ch: "华文琥珀", en: "STHupo" },
    { ch: "华文新魏", en: "STXinwei" },
    { ch: "华文隶书", en: "STLiti" },
    { ch: "华文行楷", en: "STXingkai" },
    { ch: "雅痞-简", en: "Yuppy SC", ps: "YuppySC-Regular" },
    { ch: "圆体-简", en: "Yuanti SC", ps: "YuantiSC-Regular" },
    { ch: "手书体", en: "ShouShuti" },
    { ch: "幼圆", en: "YouYuan" },
  ]);

  async function matchByPostScriptName(t) {
    let returnName;
    const fontCheckList = await getMergedFontCheckList();
    for (const fontname of fontCheckList.values()) {
      if (fontname.en === t && fontname.ps) {
        returnName = fontname.ps;
        break;
      }
    }
    return returnName || t;
  }

  async function getMergedFontCheckList(defFontCheck = fontCheck) {
    let cusFontCheck;
    const cusFontList = await GMgetValue("_Custom_fontlist_");
    try {
      cusFontCheck = cusFontList ? [...JSON.parse(defCon.decrypt(cusFontList))] : DEFAULT_ARRAY;
    } catch (e) {
      error("cusFontCheck.JSON.parse:", e.message);
      cusFontCheck = DEFAULT_ARRAY;
    }
    return getUniqueValues([...defFontCheck, ...cusFontCheck].slice(0));
  }

  class SupportFontFamily {
    constructor() {
      this.canvasWidth = 200;
      this.canvasHeight = 100;
      this.fontSize = 80;
      this.fontText = "Aa啊";
      this.originFont = "'Courier New',Courier,monospace";
      const canvas = cE("canvas");
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      this.canvasContext = canvas.getContext("2d");
      this.canvasContext.textAlign = "center";
      this.canvasContext.fillStyle = "black";
      this.canvasContext.textBaseline = "middle";
      this.originFontData = this._checkFont(this.originFont);
      this.detectFontData = null;
    }
    _checkFont(fontName) {
      try {
        this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.canvasContext.font = `${this.fontSize}px ${this.originFont.toUpperCase() === fontName.toUpperCase() ? this.originFont : `'${fontName}',${this.originFont}`}`;
        this.canvasContext.fillText(this.fontText, this.canvasWidth / 2, this.canvasHeight / 2);
        const fontData = this.canvasContext.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
        const fontDataValid = [].slice.call(fontData).filter(k => {
          return k !== 0;
        });
        return JSON.stringify(fontDataValid);
      } catch (e) {
        error("SupportFontFamily.checkFont:", e.message);
        return null;
      }
    }
    detect(font) {
      if (typeof font !== "string") {
        return false;
      }
      if (this.originFont.toUpperCase().includes(font.toUpperCase())) {
        return true;
      }
      this.detectFontData = this._checkFont(font);
      const fontSupport = this.originFontData !== this.detectFontData;
      fontSupport &&
        debug("\u27A4 detect Fonts: <Detected> %O", {
          data: JSON.parse(this.detectFontData),
          font: unescape(font.replace(/\\/g, "%u")),
        });
      return fontSupport;
    }
  }

  function getUniqueValues(arr) {
    if (!Array.isArray(arr)) {
      return DEFAULT_ARRAY;
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length, arr[i], arr[j]; j++) {
        if (arr[i].ch === arr[j].ch || arr[i].en === arr[j].en) {
          if (!arr[i].ps) {
            arr.splice(i, 1);
            i = Math.max(0, i - 1);
          } else {
            arr.splice(j, 1);
            j = j - 1;
          }
        }
      }
    }
    return arr;
  }

  function getDeduplicatedValues(arra, arrb) {
    return [...arra].filter(x => {
      return ![...arrb].some(y => {
        return y.en === x.en || y.ch === x.ch;
      });
    });
  }

  const ddRemove = item => {
    item.remove();
    const temp = item.nextElementSibling;
    if (temp && temp.nodeName === "DD") {
      ddRemove(temp);
    }
  };

  const fontSet = function (s) {
    return {
      that: qA(s),
      hide: () => {
        fontSet(s).that.forEach(item => {
          item.style.cssText += "display:none";
        });
      },
      show: () => {
        fontSet(s).that.forEach(item => {
          item.style.cssText += "display:block";
        });
      },
      cloze: async (item, fontData) => {
        ddRemove(item.parentNode);
        const value = item.parentNode.children[1].value;
        const sort = Number(item.parentNode.children[1].attributes.sort.value) || -1;
        const text = item.parentNode.children[0].textContent;
        fontData.push({ ch: text, en: value, sort: sort });
        getUniqueValues(fontData).sort((a, b) => {
          return a.sort - b.sort;
        });
        const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
        if (fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.length === 0) {
          for (let i = defCon.values.length - 1; i >= 0; i--) {
            if (defCon.values[i] === `${defCon.id.fontName}`) {
              defCon.values.splice(i, 1);
              break;
            }
          }
          if (submitButton && submitButton.classList.contains(`${defCon.class.anim}`)) {
            if (!defCon.values.length) {
              submitButton.classList.remove(`${defCon.class.anim}`);
              if (defCon.isPreview) {
                submitButton.textContent = "\u4fdd\u5b58";
                submitButton.removeAttribute("style");
                submitButton.removeAttribute("v-Preview");
                loadPreview(defCon.preview);
              }
            } else if (!defCon.values.includes(`${defCon.id.fontName}`) && defCon.isPreview) {
              submitButton.textContent = "\u9884\u89c8";
              submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
              submitButton.setAttribute("v-Preview", "true");
            }
          }
          fontSet(`#${defCon.id.selector}`).that[0].style.cssText += "display:none;";
          const ffaceT = qS(`#${defCon.id.fface}`);
          const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          if (ffaceT.checked) {
            const fontCheckList = await getMergedFontCheckList();
            for (let i = 0; i < fontCheckList.length; i++) {
              if (fontCheckList[i].en === defCon.refont || convertToUnicode(fontCheckList[i].ch) === defCon.refont) {
                defCon.curFont = fontCheckList[i].ch;
                break;
              }
            }
            inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
            const submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`);
            submitPreview && submitPreview.click();
          }
        } else {
          const remainsFont = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that[0].parentNode.children[0].textContent;
          const remainsNext = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that[0].parentNode.nextElementSibling;
          const remainsSecondFont = remainsNext ? remainsNext.children[0].textContent : defCon.curFont;
          if (submitButton && (remainsFont !== defCon.curFont || remainsSecondFont !== defCon.curFont) && defCon.isPreview) {
            submitButton.textContent = "\u9884\u89c8";
            submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
            submitButton.setAttribute("v-Preview", "true");
          }
        }
      },
      fdeleteList: fontData => {
        const close = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`);
        close.that.forEach(item => {
          fontSet().cloze(item, fontData);
        });
      },
      fresetList: fontData => {
        fontSet().fdeleteList(fontData);
        fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].insertAdjacentHTML(
          "beforeend",
          trustedTypesPolicy.createHTML(
            String(
              `<a class="${defCon.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:'Microsoft YaHei'!important">微软雅黑</span><input type="hidden" name="${defCon.id.fontName}" sort="1" value="Microsoft YaHei"/><span class="${defCon.class.close}" style="border-bottom-right-radius:4px;border-top-right-radius:4px;cursor:pointer;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
            )
          )
        );
        fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:block;";
        for (let i = 0; i < fontData.length; i++) {
          if (fontData[i].en === "Microsoft YaHei") {
            fontData.splice(i, 1);
            i = fontData.length;
          }
        }
        defCon.values.push(`${defCon.id.fontName}`);
        qS(`#${defCon.id.selector} #${defCon.id.cleaner}`).addEventListener("click", () => {
          fontSet().fdeleteList(fontData);
        });
        fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.forEach(item => {
          item.addEventListener("click", () => {
            fontSet().cloze(item, fontData);
          });
        });
      },
      fsearchList: name => {
        let arr = [];
        fontSet(`#${defCon.id.selector} .${defCon.class.selector} input[name="${name}"]`).that.forEach(item => {
          arr.push(item.value);
        });
        return arr;
      },
      fsearch: fontData => {
        const fHtml = String(
          `<div id="${defCon.id.selector}">
            <span class="${defCon.class.spanlabel}">已选择字体\uff1a<span id="${defCon.id.cleaner}">[清空]</span></span>
            <div class="${defCon.class.selector}"></div>
          </div>
          <div class="${defCon.class.selectFontId}">
            <span class="${defCon.class.spanlabel}">设置字体，请选择\uff1a</span>
            <input type="search" placeholder="输入关键字可检索字体" autocomplete="off" class="${defCon.class.placeholder}">
            <dl style="display:none"></dl>
            <span class="${defCon.class.tooltip} ${defCon.class.ps1}" id="${defCon.id.fonttooltip}">
              <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
              <span class="${defCon.class.tooltip} ${defCon.class.ps2}">
              <p><strong>温馨提示 </strong>脚本预载了常用的中文字体，下拉菜单中所罗列的字体是在代码字体表中您已安装过的字体，没有安装过则不会显示。</p>
              <p><em style="color:darkred">（注一）</em>如果没有重新选择字体，则使用上一次保存的字体。首次使用默认为微软雅黑字体。</p>
              <p><em style="color:darkred">（注二）</em>输入框可输入关键字进行搜索，支持中文和英文字体名。</p>
              <p><em style="color:darkred">（注三）</em>字体是按您选择的先后顺序进行优先渲染的，所以多选不如只选一个您最想要的。</p>
              <p><em style="color:darkred">（注四）</em>如果“字体重写”被关闭，那么本功能将自动禁用，网页字体将采用“网站默认”的字体设置。</p>
              <p><em style="color:darkred">（注五）</em>双击\ud83d\udd14可以打开自定义字体的添加工具，以使用更多新字体。</p>
              </span>
            </span>
          </div>`
        );
        const domId = fontSet(s).that[0];
        setRAFInterval(
          () => {
            if (!fontSet(`#${defCon.id.selector}`).that[0] && domId) {
              domId.innerHTML = trustedTypesPolicy.createHTML(fHtml);
            }
            return Boolean(qS(`#${defCon.id.selector}`));
          },
          100,
          { runNow: true }
        );
        const ffaceT = qS(`#${defCon.id.fface}`);
        const fselectorT = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
        if (ffaceT && fselectorT) {
          changeSelectorStatus(ffaceT.checked, fselectorT, `${defCon.class.readonly}`);
          ffaceT.addEventListener("change", () => {
            changeSelectorStatus(ffaceT.checked, fselectorT, `${defCon.class.readonly}`);
          });
        }
        fontSet(`#${defCon.id.selector}`).that[0].style.cssText += "display:none;";
        fselectorT.addEventListener("input", function () {
          searchEvents(this.value);
        });
        fselectorT.addEventListener("click", function (e) {
          if (this.value.length === 0) {
            const dlContainer = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`);
            const dl = dlContainer.that[0];
            dlContainer.show();
            if (fontData.length === 0 && dl) {
              dl.innerHTML = trustedTypesPolicy.createHTML("<dd>\u6570\u636e\u6e90\u6682\u65e0\u6570\u636e</dd>");
            } else {
              dl.textContent = "";
              getUniqueValues(fontData).sort((a, b) => {
                return a.sort - b.sort;
              });
              fontData.forEach(item => {
                dl.insertAdjacentHTML(
                  "beforeend",
                  trustedTypesPolicy.createHTML(`<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`)
                );
              });
            }
            clickEvents();
            e.stopPropagation();
          } else {
            searchEvents(this.value);
            e.stopPropagation();
          }
        });
        document.addEventListener("click", () => {
          selectorHidden();
        });

        /* Internal list functions */

        function changeSelectorStatus(inputCheckedStatus, f, css) {
          if (inputCheckedStatus) {
            f.removeAttribute("disabled");
            f.classList.remove(css);
          } else {
            fontSet().fdeleteList(fontData);
            f.setAttribute("disabled", "disabled");
            f.classList.add(css);
          }
        }
        function selectorHidden() {
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).hide();
          const selectorInput = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          if (selectorInput) {
            selectorInput.value = "";
          }
        }
        function searchEvents(t) {
          const dlContainer = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`);
          const dl = dlContainer.that[0];
          dlContainer.hide();
          if (fontData.length > 0 && dl) {
            dlContainer.show();
            const sText = t.replace(/[.:?*+^$[\](){}\\/|]/g, "⛔");
            const sRegExp = new RegExp(sText, "i");
            let sMatched = false;
            dl.textContent = "";
            getUniqueValues(fontData).forEach(item => {
              if (sRegExp.test(item.ch) || sRegExp.test(item.en)) {
                sMatched = true;
                dl.insertAdjacentHTML(
                  "beforeend",
                  trustedTypesPolicy.createHTML(`<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`)
                );
              }
            });
            if (!sMatched) {
              dl.innerHTML = trustedTypesPolicy.createHTML("<dd>\u6682\u65e0\u60a8\u641c\u7d22\u7684\u5b57\u4f53</dd>");
            }
            clickEvents();
          }
        }
        function clickEvents() {
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd`).that.forEach(item => {
            item.addEventListener("click", function (e) {
              const value = String(this.attributes.value.value);
              const sort = this.attributes.sort.value;
              const selector = fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0];
              if (value && selector) {
                selector.insertAdjacentHTML(
                  "beforeend",
                  trustedTypesPolicy.createHTML(
                    String(
                      `<a class="${defCon.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:'${value}'!important">${this.textContent}</span><input type="hidden" name="${defCon.id.fontName}" sort="${sort}" value="${value}"/><span class="${defCon.class.close}" style="border-bottom-right-radius:4px;border-top-right-radius:4px;cursor:pointer;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
                    )
                  )
                );
                selector.parentNode.style.cssText += "display:block;";
                fontData = getUniqueValues(fontData);
                for (let i = 0; i < fontData.length; i++) {
                  if (fontData[i].en === value) {
                    fontData.splice(i, 1);
                    i = fontData.length;
                  }
                }
                qS(`#${defCon.id.selector} #${defCon.id.cleaner}`).addEventListener("click", () => {
                  fontSet().fdeleteList(fontData);
                });
                fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.forEach(item => {
                  item.addEventListener("click", () => {
                    fontSet().cloze(item, fontData);
                  });
                });
                const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
                if (!defCon.values.includes(`${defCon.id.fontName}`)) {
                  defCon.values.push(`${defCon.id.fontName}`);
                }
                if (submitButton && !submitButton.classList.contains(`${defCon.class.anim}`)) {
                  submitButton.classList.add(`${defCon.class.anim}`);
                }
                if (submitButton && defCon.isPreview) {
                  submitButton.textContent = "\u9884\u89c8";
                  submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
                  submitButton.setAttribute("v-Preview", "true");
                }
              }
              selectorHidden();
              e.stopPropagation();
            });
          });
        }
      },
    };
  };

  /* define default value */

  const INITIAL_VALUES = {
    fontSelect: `'Microsoft YaHei',system-ui,-apple-system,BlinkMacSystemFont,sans-serif,'iconfont','icomoon','FontAwesome','Font Awesome 5 Pro','Font Awesome 6 Pro','IcoFont','fontello','themify','Material Icons','Material Icons Extended','bootstrap-icons','Segoe Fluent Icons','Material-Design-Iconic-Font','office365icons','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji','Android Emoji','EmojiSymbols','emojione mozilla','twemoji mozilla'`,
    fontFace: true,
    fontSmooth: true,
    fontSize: 1.0,
    fontStroke: IS_REAL_GECKO ? 0.08 : 0.05,
    fixStroke: IS_REAL_BLINK,
    fontShadow: IS_REAL_GECKO ? 0.5 : 1.0,
    shadowColor: IS_REAL_GECKO ? "#7F7F7FAA" : "#7B7B7BCC",
    fontCSS: `:not(i):not([class*='glyph']):not([class*='icon']):not([class*='fa-']):not([class*='vjs-'])`,
    fontEx: `input,select,button,textarea,samp,kbd,pre,pre *,code,code *`,
    monospacedFont: `'Operator Mono Lig','Fira Code','Source Code Pro','DejaVu Sans Mono','Anonymous Pro','Ubuntu Mono','Roboto Mono','JetBrains Mono','Droid Sans Mono','Mono','Monaco','Menlo','Inconsolata','Liberation Mono'`,
  };
  const IS_MACOS = getNavigator.system().startsWith("macOS");
  const EXCLUDES_EDITORIAL_SITES = ["github.dev", "www.kdocs.cn"].includes(CUR_HOST_NAME);
  const SCRIPT_AUTHOR = GMinfo.scriptMetaStr.match(/(\u0040\u0061\u0075\u0074\u0068\u006f\u0072\s+)(\S+)/)[2];
  const FEEDBACK_URI = GMinfo.scriptMetaStr.match(/(\u0040\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0055\u0052\u004c\s+)(\S+)/)[2];
  const ROOT_SECRET_KEY = `\u8ab1\u004a\u0056\u0069\u0059\u7409\u67d3\u5b7a\u80ba\u0070\u0032\u004f\u64d3\u0030\u8151\u0074\u5c80\u5b9a\u81ba\u0065`;
  const CONST_VALUES = {};

  /* Determine whether the DOM is loaded */

  function addLoadEvents(fn, rs = false) {
    const onReadyStateChange = () => {
      if (document.readyState !== "loading" && document.body) {
        if (!rs) {
          rs = fn.call();
          debug(
            "%c\u27A4 %c[READYSTATE]: %c%s!%c\n%c \u3000\u27A6 %s %c%s",
            "display:inline-block;padding:4px 0",
            "display:inline-block;background-color:slateblue;color:snow;border-radius:4px 0 0 4px;padding:4px 0 4px 8px",
            "display:inline-block;background-color:slateblue;color:snow;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 0",
            document.readyState,
            "display:block;height:0",
            "display:inline-block;color:0;line-height:180%",
            window.location.hostname,
            "display:inline-block;color:grey;line-height:180%",
            window.location.pathname
          );
        }
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          rs = fn.call();
          debug(
            "%c\u27A4 %c[DOM]: %cLoading & Parsing!",
            "display:inline-block;padding:4px 0",
            "display:inline-block;background-color:darkorange;color:snow;border-radius:4px 0 0 4px;padding:4px 0 4px 8px",
            "display:inline-block;background-color:darkorange;color:snow;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 0"
          );
        });
      }
      if (document.readyState === "complete" && rs) {
        insertStyle_AsyncFrames({ isMutationObserver: false });
        debug(
          "%c\u27A4 %c[DOM]: %cLoad complete!%c\n%c \u3000\u27A6 %s %c%s",
          "display:inline-block;padding:4px 0",
          "display:inline-block;background-color:green;color:snow;border-radius:4px 0 0 4px;padding:4px 0 4px 8px",
          "display:inline-block;background-color:green;color:snow;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 0",
          "display:block;height:0",
          "display:inline-block;color:0;line-height:180%",
          window.location.hostname,
          "display:inline-block;color:grey;line-height:180%",
          window.location.pathname
        );
        document.removeEventListener("readystatechange", onReadyStateChange);
      }
    };
    document.addEventListener("readystatechange", onReadyStateChange);
  }

  /* Start specific operation */

  !(async function FontRendering(loading) {
    "use strict";
    /* eslint-disable no-alert */
    /* initialling Menus */

    if (CUR_WINDOW_TOP && !isGM) {
      loading = GMregisterMenuCommand("\ufff0\ud83d\udd52 正在载入脚本菜单，请稍候…", () => {});
    }

    /* get promise value */

    let maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isCloseTip, rebuild, curVersion, _config_data_;
    let configure = await GMgetValue("_configure_");
    if (!configure) {
      maxPersonalSites = 100;
      isBackupFunction = true;
      isPreview = false;
      isFontsize = false;
      isHotkey = true;
      isCloseTip = false;
      rebuild = undefined;
      curVersion = undefined;
      _config_data_ = { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, rebuild, curVersion };
      saveData("_configure_", _config_data_);
    } else {
      try {
        _config_data_ = JSON.parse(defCon.decrypt(configure));
      } catch (e) {
        error("_config_data_.JSON.parse:", e.message);
        defCon.structureError = true;
        _config_data_ = {};
      }
      maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
      isBackupFunction = Boolean(_config_data_.isBackupFunction);
      isPreview = Boolean(_config_data_.isPreview);
      isFontsize = isGM ? false : Boolean(_config_data_.isFontsize);
      isHotkey = Boolean(typeof _config_data_.isHotkey !== "undefined" ? _config_data_.isHotkey : true);
      isCloseTip = Boolean(_config_data_.isCloseTip);
      rebuild = _config_data_.rebuild;
      curVersion = _config_data_.curVersion;
    }
    defCon.isPreview = isPreview;
    defCon.isFontsize = isFontsize;

    /* get monospaced fontslist */

    const monospaced_Fontlist = await GMgetValue("_monospaced_fontlist_");
    CONST_VALUES.monospacedFont = monospaced_Fontlist ? filterHtmlToText(JSON.parse(defCon.decrypt(monospaced_Fontlist))) : "";

    /* initialize Exclude site */

    let exSite, _exSite;
    const defExSite = ["workstation-xi"].sort();
    function updateExsitesIndex(e) {
      for (let i = 0; i < e.length; i++) {
        if (e[i] === CUR_HOST_NAME) {
          return i;
        }
      }
    }
    _exSite = await GMgetValue("_Exclude_site_");
    if (!_exSite) {
      saveData("_Exclude_site_", defExSite);
      exSite = defExSite;
    } else {
      try {
        exSite = [...JSON.parse(defCon.decrypt(_exSite))];
      } catch (e) {
        error("exSite.JSON.parse:", e.message);
        defCon.structureError = true;
        exSite = defExSite;
      }
    }
    defCon.exSitesIndex = updateExsitesIndex(exSite);

    /* Set Default Fonts Value & initialize */

    let fontValue, domainValue, domainValueIndex;
    let domains = await GMgetValue("_domains_fonts_set_");
    const fonts = await GMgetValue("_fonts_set_");
    function updateDomainsIndex(s, t = CUR_HOST_NAME) {
      for (let i = 0; i < s.length; i++) {
        if (s[i].domain === t) {
          return i;
        }
      }
    }
    if (!domains) {
      saveData("_domains_fonts_set_", DEFAULT_ARRAY);
    } else {
      try {
        domainValue = [...JSON.parse(defCon.decrypt(domains))];
      } catch (e) {
        error("domainValue.JSON.parse:", e.message);
        defCon.structureError = true;
        domainValue = DEFAULT_ARRAY;
      }
      domainValueIndex = updateDomainsIndex(domainValue);
      defCon.domainCount = domainValue.length;
      defCon.domainIndex = domainValueIndex;
    }

    if (!fonts) {
      saveData("_fonts_set_", {
        fontSelect: INITIAL_VALUES.fontSelect,
        fontFace: INITIAL_VALUES.fontFace,
        fontStroke: INITIAL_VALUES.fontStroke,
        fixStroke: INITIAL_VALUES.fixStroke,
        fontShadow: INITIAL_VALUES.fontShadow,
        fontSize: INITIAL_VALUES.fontSize,
        shadowColor: INITIAL_VALUES.shadowColor,
        fontSmooth: INITIAL_VALUES.fontSmooth,
        fontCSS: INITIAL_VALUES.fontCSS,
        fontEx: INITIAL_VALUES.fontEx,
      });
      CONST_VALUES.fontSelect = INITIAL_VALUES.fontSelect;
      CONST_VALUES.fontFace = INITIAL_VALUES.fontFace;
      CONST_VALUES.fontStroke = INITIAL_VALUES.fontStroke;
      CONST_VALUES.fixStroke = INITIAL_VALUES.fixStroke;
      CONST_VALUES.fontShadow = INITIAL_VALUES.fontShadow;
      CONST_VALUES.fontSize = INITIAL_VALUES.fontSize;
      CONST_VALUES.shadowColor = INITIAL_VALUES.shadowColor;
      CONST_VALUES.fontSmooth = INITIAL_VALUES.fontSmooth;
      CONST_VALUES.fontCSS = INITIAL_VALUES.fontCSS;
      CONST_VALUES.fontEx = INITIAL_VALUES.fontEx;
    } else {
      try {
        fontValue = JSON.parse(defCon.decrypt(fonts));
      } catch (e) {
        error("fontValue.JSON.parse:", e.message);
        defCon.structureError = true;
        fontValue = {};
      }
      if (typeof domainValueIndex !== "undefined") {
        CONST_VALUES.fontSelect = filterHtmlToText(domainValue[domainValueIndex].fontSelect);
        CONST_VALUES.fontFace = Boolean(domainValue[domainValueIndex].fontFace);
        CONST_VALUES.fontStroke = Number(domainValue[domainValueIndex].fontStroke) || 0;
        CONST_VALUES.fixStroke = !IS_REAL_BLINK ? false : typeof domainValue[domainValueIndex].fixStroke === "undefined" ? true : Boolean(domainValue[domainValueIndex].fixStroke);
        CONST_VALUES.fontShadow = Number(domainValue[domainValueIndex].fontShadow) || 0;
        CONST_VALUES.fontSize = !defCon.isFontsize ? 1 : EXCLUDES_EDITORIAL_SITES ? 1 : Number(domainValue[domainValueIndex].fontSize) || 1;
        CONST_VALUES.shadowColor = filterHtmlToText(domainValue[domainValueIndex].shadowColor);
        CONST_VALUES.fontSmooth = Boolean(domainValue[domainValueIndex].fontSmooth);
        CONST_VALUES.fontCSS = filterHtmlToText(domainValue[domainValueIndex].fontCSS);
        CONST_VALUES.fontEx = filterHtmlToText(domainValue[domainValueIndex].fontEx);
      } else {
        CONST_VALUES.fontSelect = filterHtmlToText(fontValue.fontSelect);
        CONST_VALUES.fontFace = Boolean(fontValue.fontFace);
        CONST_VALUES.fontStroke = Number(fontValue.fontStroke) || 0;
        CONST_VALUES.fixStroke = !IS_REAL_BLINK ? false : typeof fontValue.fixStroke === "undefined" ? true : Boolean(fontValue.fixStroke);
        CONST_VALUES.fontShadow = Number(fontValue.fontShadow) || 0;
        CONST_VALUES.fontSize = !defCon.isFontsize ? 1 : EXCLUDES_EDITORIAL_SITES ? 1 : Number(fontValue.fontSize) || 1;
        CONST_VALUES.shadowColor = filterHtmlToText(fontValue.shadowColor);
        CONST_VALUES.fontSmooth = Boolean(fontValue.fontSmooth);
        CONST_VALUES.fontCSS = filterHtmlToText(fontValue.fontCSS);
        CONST_VALUES.fontEx = filterHtmlToText(fontValue.fontEx);
      }
    }
    defCon.tZoom = typeof defCon.exSitesIndex === "undefined" ? CONST_VALUES.fontSize : INITIAL_VALUES.fontSize;

    /* Rebuild data for update if necessary */

    const SET_BOOL_FOR_UPDATE = true; // 2022.03.19
    if (CUR_WINDOW_TOP) {
      const isRebuild = Boolean(rebuild);
      if (defCon.structureError === true || (isRebuild === SET_BOOL_FOR_UPDATE && typeof rebuild === "boolean")) {
        const keys = await GMlistValues();
        for (let key of keys) {
          if (key !== "_configure_") {
            GMdeleteValue(key);
          }
        }
        _config_data_.rebuild = !SET_BOOL_FOR_UPDATE;
        _config_data_.curVersion = undefined;
        saveData("_configure_", _config_data_);
        curVersion = defCon.structureError === true ? null : curVersion;
        debug("\u27A4 %cData has been rebuilt: %s", "font-style:italic;background-color:red;color:snow", isRebuild !== SET_BOOL_FOR_UPDATE);
      } else if (typeof rebuild === "undefined") {
        _config_data_.rebuild = !SET_BOOL_FOR_UPDATE;
        saveData("_configure_", _config_data_);
        !!curVersion && cache.remove("_FontCheckList_");
        debug(`\u27A4 %c${!curVersion ? "Configdata is undefined, rebuilding!" : "Data has been restored!"}`, `font-style:italic;color:${!curVersion ? "crimson" : "dodgerblue"}`);
      } else {
        const dataStatus = curVersion === defCon.curVersion;
        debug("\u27A4 %cGood data status: %c%s", "font-style:italic;color:green", `font-style:italic;${dataStatus ? "color:green" : "color:red"}`, dataStatus);
      }
    }

    /* DialogBox for the first visit after upgrading */

    const hintUpdateInfo = async (url, curVersion) => {
      const CANDIDATE_FIELD =
        typeof curVersion === "undefined" ? "新安装首次运行" : curVersion === null ? "数据被重置后运行" : curVersion === defCon.curVersion ? "您通过历史查询" : "更新后首次运行";
      const FIRST_INSTALL_NOTICE_WARNING =
        typeof curVersion === "undefined"
          ? `<li class="${RANDOM_ID}_warn"><strong>注意</strong>：首次使用内置参数渲染，若效果不佳属正常情况，请根据显示器及浏览器设置重新配置参数以达到最佳效果！</li>`
          : ``;
      const STRUCTURE_ERROR_NOTICE_WARNING =
        defCon.structureError === true
          ? `<li class="${RANDOM_ID}_warn"><strong>警告</strong>：检测到存储数据解析异常或被非法篡改，确保程序正常运行，数据已初始化，请手动还原正确的备份数据！</li>`
          : ``;
      closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
      frDialog = new FrDialogBox({
        trueButtonText: "好，去看看",
        falseButtonText: "不，算了吧",
        messageText: String(
          `<p><span style="font-style:italic;font-weight:700;font-size:20px;color:tomato">您好\uff01</span>这是${CANDIDATE_FIELD}<span style="margin-left:3px;font-weight:700">${defCon.scriptName}</span>的更新版本<span style="font:italic 900 22px/150% Candara,'Times New Roman'!important;color:tomato;margin-left:3px">V${defCon.curVersion}</span>, 以下为更新内容\uff1a</p>
            <p><ul id="${RANDOM_ID}_update">
              ${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}
              <!-- START VERSION NOTICE -->
              <li class="${RANDOM_ID}_fix">优化字体参数的设置规则，减少无效配置。</li>
              <li class="${RANDOM_ID}_fix">优化字体缩放兼容性，排除代码、文档等在线编辑站点。</li>
              <li class="${RANDOM_ID}_fix">修正一些已知的问题，优化代码。</li>
              <!-- END VERSION NOTICE -->
            </ul></p>
            <p>建议您先看看 <strong style="color:tomato;font-weight:700">新版帮助文档</strong> ，去看一下吗？</p>`
        ),
        titleText: "脚本更新 - 温馨提示",
      });
      if (await frDialog.respond()) {
        GMopenInTab(url, defCon.options);
      }
      frDialog = null;
      sleep(5e2)(true) && defCon.structureError === true && location.reload(true);
    };

    if (curVersion !== defCon.curVersion && CUR_WINDOW_TOP) {
      addLoadEvents(() => {
        (!isCloseTip || defCon.structureError === true) && hintUpdateInfo(`${HOST_URI}#update`, curVersion);
        _config_data_.curVersion = defCon.curVersion;
        saveData("_configure_", _config_data_);
        debug("\u27A4 %cThe script has been upgraded to V%s", "font-style:italic;background-color:yellow;color:crimson", defCon.curVersion);
        return true;
      });
    }

    /* Operation of CSS value */

    const shadow_r = parseFloat(CONST_VALUES.fontShadow);
    const shadow_c =
      typeof CONST_VALUES.shadowColor === "undefined"
        ? INITIAL_VALUES.shadowColor
        : CONST_VALUES.shadowColor.toLowerCase() === "currentcolor" // Version compatible.
        ? "#FFFFFFFF"
        : CONST_VALUES.shadowColor;
    const overlayColor = (r, c) => {
      return c.substring(1) !== "FFFFFFFF"
        ? `text-shadow:0 0 ${(r * 1.15).toFixed(2)}px ${toColordepth(c, 1.35)},0 0 ${r}px ${c},0 0 ${(r * 0.75).toFixed(2)}px ${toColordepth(c, 0.4)};`
        : `text-shadow:0 0 ${r}px ${toColordepth(c, 0.95)},0 0 ${(r * 0.7).toFixed(2)}px currentcolor,0 0 ${(r * 0.85).toFixed(2)}px ${toColordepth(c, 0.2)};`;
    };
    const shadow = !isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 8 ? overlayColor(shadow_r, shadow_c) : "";
    const stroke_r = parseFloat(CONST_VALUES.fontStroke);
    const stroke = !isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0 ? `-webkit-text-stroke:${stroke_r}px currentcolor;` : "";
    const selection = stroke
      ? "::selection{color:#ffffff!important;background:#0084ff!important}::-moz-selection{color:currentcolor!important;background:#1ebee34a!important}"
      : "";
    const smooth_i = CONST_VALUES.fontSmooth;
    const funcSmooth = String(
      `font-feature-settings:"liga" 0;font-variant:no-common-ligatures proportional-nums;font-optical-sizing:auto;font-kerning:auto;${
        getNavigator.core().WebKit && !getNavigator.isCheatUA()
          ? "-webkit-font-smoothing:antialiased!important;"
          : IS_REAL_GECKO && IS_MACOS
          ? "-moz-osx-font-smoothing:grayscale!important;"
          : ""
      }`
    );
    const smoothing = smooth_i ? funcSmooth : "";
    let bodyzoom = "";
    const fontsize_r = parseFloat(CONST_VALUES.fontSize);
    const funcFontsize = t => {
      return `body{${
        IS_REAL_GECKO ? `transform:scale(${t});transform-origin:0 0;width:${100 / t}%;height:${100 / t}%;` : `zoom:${t}!important;max-width:-webkit-fill-available;`
      }}`;
    };
    if (defCon.isFontsize && !isNaN(fontsize_r) && fontsize_r >= 0.8 && fontsize_r <= 1.5 && fontsize_r !== 1) {
      bodyzoom = funcFontsize(fontsize_r);
      typeof defCon.exSitesIndex === "undefined" &&
        sleep(20)(fontsize_r).then(r => {
          defCon.oZoom.push(r);
          definePropertiesForZoom(r, { deleteProperty: false });
        });
    } else {
      defCon.oZoom.push(1);
    }
    const prefont = CONST_VALUES.fontSelect && CONST_VALUES.fontSelect.split(",")[0];
    const refont = prefont ? prefont.replace(/"|'/g, "") : "";
    const fontface_i = CONST_VALUES.fontFace;
    const funcFontface = async t => {
      let returnFontface = "";
      const receiveFont = await matchByPostScriptName(t);
      [
        convertToUnicode("宋体"),
        convertToUnicode("新宋体"),
        convertToUnicode("黑体"),
        convertToUnicode("仿宋"),
        convertToUnicode("微软雅黑"),
        convertToUnicode("微軟正黑體"),
        "SimSun",
        "NSimSun",
        "SimHei",
        "Heiti SC",
        "HanHei SC",
        "MingLiU",
        "MingLiU-ExtB",
        "PMingLiU",
        "PMingLiU-ExtB",
        "Roboto",
        "RobotoDraft",
        "Noto Sans",
        "Helvetica",
        "Helvetica Neue",
        "Lucida Grande",
        "Arial",
        "Verdana",
        "Ubuntu",
        "Segoe UI",
        "Open Sans",
      ].forEach(item => {
        if (item !== t) {
          returnFontface += `@font-face{font-family:"${item}";src:local("${receiveFont}")}`;
        }
      });
      return returnFontface;
    };
    const fontfamily = fontface_i ? `font-family:${CONST_VALUES.fontSelect};` : "";
    const fontfaces = !fontface_i ? "" : refont ? await funcFontface(refont) : "";
    const cssexlude = CONST_VALUES.fontEx;
    const funcCodefont = (t, s, r) => {
      if (t.search(/\bpre\b|\bcode\b/gi) !== -1) {
        const pre = t.search(/\bpre\b/gi) > -1 ? ["pre", "pre *"] : [];
        const code = t.search(/\bcode\b/gi) > -1 ? ["code", "code *"] : [];
        const elcode = ["samp", "kbd", "[class~='code']", "[class~='code'] *", "[class~='blob-code']", "[class~='blob-code'] *"];
        const codeSelector = pre.concat(code, elcode).join();
        const monospace = CONST_VALUES.monospacedFont || INITIAL_VALUES.monospacedFont;
        const mono = s ? r : INITIAL_VALUES.fontSelect.replace("'Microsoft YaHei',", "");
        return String(
          `${codeSelector}{` +
            `font-size:14px!important;line-height:150%!important;` +
            `-webkit-text-stroke:initial!important;text-shadow:0 0 ${shadow_r * 0.8}px ${toColordepth(shadow_c, 1.65)}!important;` +
            `font-family:${monospace},ui-monospace,Consolas,'Lucida Console',${IS_REAL_GECKO ? "" : "monospace,"}` +
            `${IS_REAL_GECKO ? mono.replace("system-ui", "monospace,system-ui") : mono}!important;` +
            `font-feature-settings:"liga" 0,"tnum","zero"!important;user-select:text!important}`
        );
      }
      return "";
    };
    const zeroConfigure = !fontface_i && !smooth_i && !shadow && !stroke && fontsize_r === 1;
    const exclude = !cssexlude || (!shadow && !stroke) ? `` : `${cssexlude}{-webkit-text-stroke:initial!important;text-shadow:none!important}`;
    const codeFont = !cssexlude || zeroConfigure ? `` : funcCodefont(cssexlude, fontface_i, CONST_VALUES.fontSelect);
    const cssfun = CONST_VALUES.fontCSS;
    const textrender = smooth_i ? "text-rendering:optimizeLegibility!important;" : "";
    const fixfontstroke = CONST_VALUES.fixStroke ? "[fr-fix-stroke]{-webkit-text-stroke:initial!important}" : "";
    const fontStyle = String(
      typeof defCon.exSitesIndex === "undefined" && !zeroConfigure
        ? `${fontfaces}${bodyzoom}${cssfun}{${fontfamily}${shadow}${stroke}${smoothing}${textrender}}${selection}${exclude}${codeFont}${fixfontstroke}`
        : ""
    );
    const fontTest = String(
      `.fontTest-${RANDOM_ID}{font-weight:normal!important;line-height:initial!important;text-align:left!important;font-style:normal!important;text-decoration:none!important;letter-spacing:normal!important;word-wrap:normal!important;text-indent:initial!important}#${defCon.id.fontTest}{margin:0!important;padding:0!important;width:max-content!important;height:max-content!important;text-shadow:none!important;-webkit-text-stroke:initial!important;-moz-text-size-adjust:none!important;-webkit-text-size-adjust:none!important;text-size-adjust:none!important;white-space:nowrap!important}`
    );
    const fontStyle_db = String(
      `#${defCon.id.dialogbox}{width:100%;height:100vh;background:transparent;position:fixed;top:0;left:0;z-index:1999999995}#${defCon.id.dialogbox} .${defCon.class.db}{box-sizing:content-box;max-width:420px;color:#444;border:2px solid #efefef}.${defCon.class.db}{display:block;overflow:hidden;position:absolute;top:200px;right:15px;border-radius:6px;width:100%;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.3);transition:opacity .5s}.${defCon.class.db} *{line-height:1.5!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:initial!important;text-shadow:0 0 1px #777!important}.${defCon.class.dbt}{background:#efefef;margin-top:0;padding:12px;font-size:20px!important;font-weight:700;text-align:left;width:auto;font-family:Candara,"Times New Roman",system-ui,-apple-system,BlinkMacSystemFont!important}.${defCon.class.dbm}{color:#444;padding:10px;margin:5px;font-size:16px!important;font-weight:500;text-align:left}.${defCon.class.dbb}{display:inline-block;margin:2px 1%;border-radius:4px;padding:8px 12px;min-width:12%;font-weight:400;text-align:center;letter-spacing:0;cursor:pointer;text-decoration:none!important;box-sizing:content-box}.${defCon.class.dbb}:hover{color:#fff;opacity:.8;font-weight:900;text-decoration:none!important;box-sizing:content-box}.${defCon.class.db} .${defCon.class.dbt},.${defCon.class.dbb},.${defCon.class.dbb}:hover{text-shadow:none!important;-webkit-text-stroke:initial!important;-webkit-user-select:none;user-select:none}.${defCon.class.dbbf},.${defCon.class.dbbf}:hover{background:#d93223!important;color:#fff!important;border:1px solid #d93223!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}.${defCon.class.dbbt},.${defCon.class.dbbt}:hover{background:#038c5a!important;color:#fff!important;border:1px solid #038c5a!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}.${defCon.class.dbbn},.${defCon.class.dbbn}:hover{background:#777!important;color:#fff!important;border:1px solid #777!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${defCon.class.dbbc}{text-align:right;padding:2.5%;background:#efefef;color:#fff}` +
        `.${defCon.class.dbm} button:hover{cursor:pointer;background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important}.${defCon.class.dbm} p{line-height:1.5!important;margin:5px 0!important;text-indent:0!important;font-size:16px!important;font-weight:400;text-align:left;-webkit-user-select:none;user-select:none}.${defCon.class.dbm} ul{list-style:none;margin:0 0 0 10px!important;padding:2px;font:italic 14px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;color:gray;scrollbar-width:thin}.${defCon.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${defCon.class.dbm} ul::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #999;background:#cfcfcf;border-radius:10px}.${defCon.class.dbm} ul::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:10px}.${defCon.class.dbm} ul::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:6px}.${defCon.class.dbm} ul li{display:list-item;list-style-type:none;-webkit-user-select:none;user-select:none;word-break:break-all}.${defCon.class.dbm} li:before{display:none}.${defCon.class.dbm} #${defCon.id.bk},.${defCon.class.dbm} #${defCon.id.pv},.${defCon.class.dbm} #${defCon.id.fs},.${defCon.class.dbm} #${defCon.id.hk},.${defCon.class.dbm} #${defCon.id.ct},.${defCon.class.dbm} #${defCon.id.mps},.${defCon.class.dbm} #${defCon.id.flc}{box-sizing:content-box;list-style:none;font-style:normal;display:flex;justify-content:space-between;align-items:flex-start;margin:0;padding:2px 4px!important;width:calc(96% - 10px);min-width:auto;height:max-content;min-height:40px;word-break:break-word}.${defCon.class.dbm} #${defCon.id.bk} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.pv} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.fs} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.hk} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.ct} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.mps} .${RANDOM_ID}_VIP,.${defCon.class.dbm} #${defCon.id.flc} .${RANDOM_ID}_VIP{margin:2px 0 0 0;color:darkgoldenrod!important;font:normal 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${defCon.class.dbm} #${defCon.id.flc} button{background-color:#eee;color:#444!important;font-weight:normal;border:1px solid #999;font-size:14px!important;border-radius:4px}` +
        `.${defCon.class.dbm} a{color:#0969da;text-decoration:none!important;font-style:inherit}.${defCon.class.dbm} a:hover{color:crimson;text-decoration:underline}.${defCon.class.dbm} #${defCon.id.feedback}{padding:2px 10px;height:22px;width:max-content;min-width:auto}.${defCon.class.dbm} #${defCon.id.files}{display:none}.${defCon.class.dbm} #${defCon.id.feedback}:hover{color:crimson!important}.${defCon.class.dbm} #${defCon.id.feedback}:after{width:0;height:0;content:"";background:url('${LOADING_IMG}') no-repeat -400px -300px}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-moz-placeholder{font:normal 400 14px/150% monospace,Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:#555!important}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-input-placeholder{font:normal 400 14px/150% monospace,Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:#aaa!important}.${defCon.class.dbm} #${RANDOM_ID}_update li{margin:0;padding:0;font:italic 400 14px/150% Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:gray}.${defCon.class.dbm} .${RANDOM_ID}_add:before{content:"+";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${RANDOM_ID}_del:before{content:"-";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${RANDOM_ID}_fix:before{content:"@";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${RANDOM_ID}_info{color:#daa5207a!important}.${defCon.class.dbm} .${RANDOM_ID}_info:before{content:"#";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${RANDOM_ID}_warn{color:#e900007a!important}.${defCon.class.dbm} .${RANDOM_ID}_warn:before{content:"!";display:inline;margin:0 4px 0 -10px}`
    );
    const fontStyle_container = String(
      `#${defCon.id.rndId}{width:100%;height:100vh;background:transparent;position:fixed;top:0;left:0;z-index:1999999991}body #${defCon.id.container}{position:absolute;top:10px;right:24px;border-radius:12px;background:#f0f6ff!important;box-sizing:content-box;opacity:0;transition:opacity .5s}#${defCon.id.container}{transform:scale3d(1,1,1);width:auto;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;min-height:10%;max-height:calc(100% - 20px);z-index:999999;padding:4px;text-align:left;color:#333;font-size:16px!important;font-weight:900;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.container}::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.container}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.container}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.container}::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.container} *{line-height:1.5!important;text-shadow:none!important;-webkit-text-stroke:initial!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","Android Emoji",EmojiSymbols!important;font-size:16px;font-weight:700}` +
        `#${defCon.id.container} fieldset{border:2px groove #67a5df!important;border-radius:10px;padding:4px 6px;margin:2px;background:#f0f6ff!important;display:block;width:auto;height:auto;min-height:475px}#${defCon.id.container} legend{line-height:inherit;padding:0 8px;border:0!important;margin-bottom:0;font-size:16px!important;font-weight:700;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;background:#f0f6ff!important;box-sizing:content-box;width:auto!important;min-width:185px!important;display:block!important;position:initial!important;height:auto!important;visibility:unset!important}#${defCon.id.container} fieldset ul{padding:0;margin:0;background:#f0f6ff!important}#${defCon.id.container} ul li{display:inherit;list-style:none;margin:3px 0;box-sizing:content-box;border:none;float:none;background:#f0f6ff!important;cursor:default;min-width:-webkit-fill-available;min-width:-moz-available;-webkit-user-select:none;user-select:none}#${defCon.id.container} ul li:before{display:none}#${defCon.id.container} .${defCon.class.help}{width:24px;height:24px;fill:#67a5df;overflow:hidden;visibility:visible!important}#${defCon.id.container} .${defCon.class.help}:hover{cursor:help}#${RANDOM_ID}_scriptname{font-weight:900!important;-webkit-user-select:all;user-select:all;display:inline-block}#${defCon.id.container} .${defCon.class.title} .${defCon.class.guide}{display:inline-block;position:absolute;cursor:pointer}@keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}.${defCon.class.title} .${defCon.class.rotation}{padding:0;margin:0;width:24px;height:24px;top:auto;right:auto;bottom:auto;left:auto;transform-origin:center 50% 0;-webkit-transform:rotate(360deg);animation:rotation 5s linear infinite}` +
        `#${defCon.id.fontList}{padding:2px 10px 0 10px;min-height:73px}#${defCon.id.fontFace},#${defCon.id.fontSmooth}{padding:2px 10px;height:40px;width:calc(100% - 18px);min-width:auto;display:flex!important;align-items:center;justify-content:space-between}#${defCon.id.fontSize}{padding:2px 10px;height:60px}#${defCon.id.fontStroke}{padding:2px 10px;height:60px}#${defCon.id.fontShadow}{padding:2px 10px;height:60px}#${defCon.id.shadowColor}{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;padding:2px 10px;min-height:45px;margin:4px;width:auto}#${defCon.id.fontCSS},#${defCon.id.fontEx}{padding:2px 10px;height:110px;min-height:110px}#${defCon.id.submit}{padding:2px 10px;height:40px}` +
        `#${defCon.id.fontList} .${defCon.class.selector} a{font-weight:400;text-decoration:none}#${defCon.id.fontList} .${defCon.class.label}{display:inline-block;margin:0 4px 14px 0;padding:0;height:24px;line-height:24px!important}#${defCon.id.fontList} .${defCon.class.label} span{box-sizing:border-box;color:#fff;font-size:16px!important;font-weight:400;height:max-content;width:max-content;min-width:12px;max-width:200px;padding:5px;background:#67a5df;text-overflow:ellipsis;overflow:hidden;display:inline-block;white-space:nowrap}#${defCon.id.fontList} .${defCon.class.close}{width:12px}#${defCon.id.fontList} .${defCon.class.close}:hover{color:tomato;background-color:#2d7dca;border-radius:2px}#${defCon.id.selector}{width:100%;max-width:100%}#${defCon.id.selector} label{display:block;cursor:initial;margin:0 0 4px 0;color:#333}#${defCon.id.selector} #${defCon.id.cleaner}{margin-left:5px;cursor:pointer}#${defCon.id.selector} #${defCon.id.cleaner}:hover{color:red}#${defCon.id.fontList} .${defCon.class.selector}{overflow-x:hidden;box-sizing:border-box;overscroll-behavior:contain;border:2px solid #67a5df!important;border-radius:6px;padding:6px 6px 0 6px;margin:0 0 6px 0;width:100%;min-width:100%;max-width:fit-content;max-width:-moz-min-content;max-height:90px;min-height:45px;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar{width:6px;height:1px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 2px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-track{box-shadow:inset 0 0 2px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 2px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} span.${defCon.class.spanlabel},#${defCon.id.selector} span.${defCon.class.spanlabel}{margin:0!important;width:auto;display:block!important;padding:0 0 4px 0;color:#333;border:0;text-align:left!important;background-color:transparent!important}` +
        `#${defCon.id.fontList} .${defCon.class.selectFontId}{width:auto}#${defCon.id.fontList} .${defCon.class.selectFontId} input{text-overflow:ellipsis;overflow:hidden;box-sizing:border-box;border:2px solid #67a5df!important;border-radius:6px;outline:none!important;padding:1px 23px 1px 2px;margin:0;width:100%;max-width:100%;min-width:100%;height:42px!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:16px!important;font-weight:700;text-indent:8px;background:#fafafa;outline-color:#67a5df}#${defCon.id.fontList} .${defCon.class.selectFontId} input[disabled]{pointer-events:none!important}.${defCon.class.placeholder}::-moz-placeholder{color:#369!important;font:normal 700 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}.${defCon.class.placeholder}::-webkit-input-placeholder{color:#369!important;font:normal 700 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}#${defCon.id.fontList} .${defCon.class.selectFontId} dl{overflow-x:hidden;overscroll-behavior:contain;position:absolute;z-index:1000;margin:4px 0 0 0;box-sizing:content-box;border:2px solid #67a5df!important;border-radius:6px;padding:4px 8px;width:auto;min-width:60%;max-width:calc(100% - 68px);max-height:298px;font-size:18px!important;white-space:nowrap;background-color:#fff;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin}` +
        `#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd{display:block;box-sizing:content-box;text-overflow:ellipsis;overflow-x:hidden;margin:1px 8px;padding:5px 0;font-weight:400;font-size:21px!important;min-width:100%;max-width:100%;width:-moz-available;width:-webkit-fill-available}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd:hover{box-sizing:content-box;text-overflow:ellipsis;overflow-x:hidden;min-width:-moz-available;min-width:-webkit-fill-available;background-color:#67a5df;color:#fff}` +
        `.${defCon.class.checkbox}{display:none!important}.${defCon.class.checkbox}+label{cursor:pointer;padding:0;margin:0 2px 0 0;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:76px;height:32px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);white-space:nowrap;box-sizing:content-box}.${defCon.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${defCon.class.checkbox}+label::after{position:absolute;top:0;left:28px;border-radius:100px;padding:5px;font-size:16px;font-weight:700;font-style:normal;color:#fff;content:"OFF"}.${defCon.class.checkbox}:checked+label{cursor:pointer;margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}.${defCon.class.checkbox}:checked+label::after{content:"ON";left:10px}.${defCon.class.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}#${defCon.id.fface} label,#${defCon.id.fface}+label::after,#${defCon.id.fface}+label::before,#${defCon.id.smooth} label,#${defCon.id.smooth}+label::after,#${defCon.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}` +
        `#${defCon.id.fontShadow} div.${defCon.class.flex}:before,#${defCon.id.fontShadow} div.${defCon.class.flex}:after,#${defCon.id.fontStroke} div.${defCon.class.flex}:before,#${defCon.id.fontStroke} div.${defCon.class.flex}:after,#${defCon.id.fontSize} div.${defCon.class.flex}:before,#${defCon.id.fontSize} div.${defCon.class.flex}:after{display:none}#${defCon.id.fontShadow} #${defCon.id.shadowSize},#${defCon.id.fontStroke} #${defCon.id.strokeSize},#${defCon.id.fontSize} #${defCon.id.fontZoom}{color:#111!important;width:56px!important;text-indent:0;margin:0 10px 0 0!important;height:32px!important;font-size:17px!important;font-weight:400!important;font-family:Impact,Times,serif!important;border:#67a5df 2px solid!important;border-radius:4px;outline:none!important;text-align:center;box-sizing:content-box;padding:0;background:#fafafa!important}#${defCon.id.fontStroke} #${defCon.id.fstroke}>label{margin:0!important;padding:0 0 0 2px!important;font-size:12px!important;color:#666!important;float:none!important;display:inline!important;cursor:help!important}#${defCon.id.fixStroke}{-webkit-appearance:checkbox!important;vertical-align:text-bottom;display:inline-block;height:14px!important;width:14px!important;cursor:pointer;margin:0 2px 0 0!important}#${defCon.id.fixStroke}::after{position:relative;top:0;width:14px;height:14px;display:inline-block;padding:0;margin:0;text-align:center;vertical-align:top;content:' ';border-radius:3px}#${defCon.id.fixStroke}:checked::after{content:"✓";color:#fff;font-size:12px;font-weight:700;line-height:14px;background-color:#65a0db;border:0!important}.${defCon.class.flex}{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;width:auto;min-width:100%}.${defCon.class.slider} input{visibility:hidden}#${defCon.id.shadowColor} *{box-sizing:content-box}#${defCon.id.shadowColor} .${defCon.class.frColorPicker}{width:auto;margin:0;padding:0}#${defCon.id.shadowColor} .${defCon.class.frColorPicker} #${defCon.id.color}{width:160px!important;min-width:160px;height:35px!important;text-indent:0;font-size:18px!important;font-weight:400!important;background:#fdfdffb0;box-sizing:border-box;font-family:Impact,Times,serif!important;color:#333!important;border:#67a5df 2px solid!important;border-radius:4px;outline:none!important;padding: 0 8px 0 0;margin:0;text-align:center;cursor:pointer}` +
        `#${defCon.id.fontCSS} textarea,#${defCon.id.fontEx} textarea{font:bold 14px/150% "Roboto Mono",Monaco,"Courier New",Consolas,monospace,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;min-width:calc(100% - 2px);max-width:calc(100% - 2px);width:calc(100% - 2px)!important;height:78px;min-height:78px;max-height:78px;resize:none;border:2px solid #67a5df!important;border-radius:6px;outline:none!important;box-sizing:border-box;padding:5px;margin:0;color:#0b5b9c!important;word-break:break-all;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin;overscroll-behavior:contain}#${defCon.id.fontCSS} textarea::-webkit-scrollbar{width:6px;height:1px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-thumb{box-shadow:inset 0 0 2px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 2px rgba(0,0,0,.2);background:#efefef;border-radius:10px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 2px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontEx} textarea{background:#fafafa!important}#${defCon.id.fontEx} textarea::-webkit-scrollbar{width:6px;height:1px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-thumb{box-shadow:inset 0 0 2px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 2px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 2px #67a5df;background:#efefef;border-radius:10px}.${defCon.class.switch}{box-sizing:border-box;float:right;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;color:#0a68c1;border-radius:4px}#${defCon.id.cSwitch}:hover,#${defCon.id.eSwitch}:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.${defCon.class.readonly}{background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:50px 50px!important;background-color:#fff7f7!important}.${defCon.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9 0,#e9ffe9 25%,transparent 25%,transparent 50%,#e9ffe9 50%,#e9ffe9 75%,transparent 75%,transparent)!important;background-size:50px 50px;background-color:#f7fff7!important}` +
        `.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist{scrollbar-width:thin}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-scrollbar{width:8px;height:8px}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-scrollbar-corner{box-shadow:inset 0 0 3px #aaa;background:#efefef;border-radius:2px}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #999;background:#cfcfcf;border-radius:2px}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:2px}.${defCon.class.dbm} #${RANDOM_ID}_custom_Fontlist::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:2px}` +
        `#${defCon.id.submit} button{box-sizing:border-box;background-image:initial;background-color:#67a5df;color:#fff!important;margin:0;padding:5px 10px;cursor:pointer;border:2px solid #6ba7e0;border-radius:6px;width:auto;min-width:min-content;min-height:35px;height:35px;font:normal 600 14px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${defCon.id.submit} button:hover{box-shadow:0 0 5px rgba(0,0,0,.4)!important}#${defCon.id.submit} .${defCon.class.cancel},#${defCon.id.submit} .${defCon.class.reset}{float:left;margin-right:10px}#${defCon.id.submit} .${defCon.class.submit}{float:right}#${defCon.id.submit} #${defCon.id.backup}{margin:0 10px 0 0;display:none}.${defCon.class.anim}{animation:jiggle 1.8s ease-in infinite;border:2px solid crimson!important;background:crimson!important}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}`
    );
    const fontStyle_tooltip = String(
      `.${defCon.class.tooltip}{position:relative;cursor:help;-webkit-user-select:none;user-select:none}.${defCon.class.tooltip} span.${defCon.class.emoji}{font-weight:400!important}.${defCon.class.tooltip}:active .${defCon.class.tooltip}{display:block}.${defCon.class.tooltip} .${defCon.class.tooltip}{display:none;box-sizing:content-box;position:absolute;z-index:999999;border:2px solid #b8c4ce;border-radius:6px;padding:10px;width:234px;max-width:234px;font-weight:400;color:#fff;background-color:#54a2ec;opacity:.9;word-break:break-all}.${defCon.class.tooltip} .${defCon.class.tooltip} *{font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:14px!important}.${defCon.class.tooltip} .${defCon.class.tooltip} em{font-style:normal!important}.${defCon.class.tooltip} .${defCon.class.tooltip} strong{color:darkorange;font-size:18px!important}.${defCon.class.tooltip} .${defCon.class.tooltip} p{color:#fff;display:block;margin:0 0 10px 0;line-height:150%;text-indent:0!important}.${defCon.class.ps1}{position:relative;top:-33px;height:0;width:24px;margin:0;padding:0;right:5px;float:right}.${defCon.class.ps2}{top:35px;right:-7px}.${defCon.class.ps3}{top:-197px;margin-left:-3px}.${defCon.class.ps4}{top:-322px;margin-left:-3px}`
    );
    const fontStyle_Progress = String(
      `.${defCon.class.range}{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:white;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic bold 14px/14px monospace,serif;--fill-color:var(--primary-color);--progress-background:rgb(223, 223, 223);--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),0 0 1px rgba(0, 0, 0, 0.5) inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px darkorange inset,0 0 3px rgba(0, 0, 0, 0.4);--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--step:1;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, "");--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}` +
        `.${defCon.class.range}{width:auto;min-width:105%!important;margin:-3px 0 0 -7px;box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));background:linear-gradient(to right,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.${defCon.class.range}[data-ticks-position=top]{--flip-y:1}.${defCon.class.range}::after,.${defCon.class.range}::before{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max,block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y,-2.5ch);top:calc(-2.5ch * var(--flip-y));opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before,-1) * -1)) scale(var(--at-edge));pointer-events:none}.${defCon.class.range}::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.${defCon.class.range}::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}` +
        `.${defCon.class.rangeProgress}{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);height:calc(var(--track-height));background:var(--progress-background,#eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.${defCon.class.rangeProgress}::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.${defCon.class.rangeProgress}::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.${defCon.class.range}>input:only-of-type~.${defCon.class.rangeProgress}{--clip-start:0}` +
        `.${defCon.class.range}>input{-webkit-appearance:none;box-shadow:initial!important;width:100%;height:var(--thumb-size)!important;margin:0!important;padding:0!important;position:absolute!important;left:0;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + calc(var(--ticks-gap)/ 2 * var(--flip-y,-1)))!important;border:0!important;cursor:grab;outline:0!important;background:0 0!important;--thumb-shadow:var(--thumb-shadow-active)}.${defCon.class.range}>input:not(:only-of-type){pointer-events:none}.${defCon.class.range}>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${defCon.class.range}>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${defCon.class.range}>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}` +
        `.${defCon.class.range}>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.${defCon.class.range}>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.${defCon.class.range}>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}.${defCon.class.range}>input:active+output{transition:0s;opacity:0.9;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.${defCon.class.range}>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}.${defCon.class.range}>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.${defCon.class.range}>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.${defCon.class.range}>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}.${defCon.class.range}>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}.${defCon.class.range}>input:nth-of-type(2)+output{--value:var(--value-b)}.${defCon.class.range}>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%);pointer-events:none;width:auto;min-width:40px;height:24px;min-height:24px;text-align:center;position:absolute;z-index:5;background:var(--value-background);border-radius:4px;padding:0 6px;left:var(--pos);transform:translate(var(--x-offset),calc(150% * var(--flip) - (var(--y-offset,0) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s;opacity:0;box-sizing:content-box}.${defCon.class.range}>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`
    );
    const fontCss = fontTest + fontStyle_db + fontStyle_container + fontStyle_tooltip + fontStyle_Progress;
    const tFontSizeHTML = String(
      `<li id="${defCon.id.fontSize}">
        <div class="${defCon.class.flex}">
          <span style="margin:0;padding:0">字体比例缩放</span>
          <input id="${defCon.id.fontZoom}" type="text" v="number" maxlength="5" />
        </div>
        <div class="${defCon.class.range}" data-ticks-position="top"
          style="--min:.8;--max:1.5;--step:.001;--value:${CONST_VALUES.fontSize};--text-value:'${String(CONST_VALUES.fontSize.toFixed(3))}'">
          <input id="${defCon.id.zoomSize}" type="range" min=".8" max="1.5" step=".001" value="${CONST_VALUES.fontSize.toFixed(3)}">
          <output></output>
          <div class='${defCon.class.rangeProgress}'></div>
        </div>
      </li>`
    );
    const tFixStrokeHTML = String(
      `<span id="${defCon.id.fstroke}" style="width:auto;font-size:12px;color:#666">
        (<label title="修正文字粗体附加描边时的样式错误 (Chrome)">粗体修正</label>
        <input type="checkbox" id="${defCon.id.fixStroke}" ${CONST_VALUES.fixStroke ? "checked" : ""}/>)
      </span>`
    );
    const tHTML = String(
      `<div id="${defCon.id.container}">
        <fieldset id="${defCon.id.field}" style="display:block">
          <legend class="${defCon.class.title}">
            <span id="${RANDOM_ID}_scriptname" title="Version ${curVersion}" style="color:#8b0000!important">${defCon.scriptName}</span>
            <span class="${defCon.class.guide}">
              <div class="${defCon.class.rotation}" title="打开脚本使用帮助文档" height="24" width="24"/>
                <svg class="${defCon.class.help}" viewBox="0 0 1053 1024" version="1.1" xmlns="https://www.w3.org/2000/svg">
                  <path d="M526.628571 1024C245.76 1024 14.628571 795.794286 14.628571 512S242.834286 0 526.628571 0c280.868571 0 512 228.205714 512 512S807.497143 1024 526.628571 1024z m-40.96-266.24c11.702857 8.777143 23.405714 14.628571 35.108572 14.628571 14.628571 0 26.331429-5.851429 35.108571-14.628571 11.702857-8.777143 14.628571-20.48 14.628572-38.034286 0-14.628571-5.851429-26.331429-14.628572-35.108571-8.777143-8.777143-20.48-14.628571-35.108571-14.628572s-26.331429 5.851429-38.034286 14.628572-14.628571 20.48-14.628571 35.108571c2.925714 17.554286 8.777143 29.257143 17.554285 38.034286zM675.84 321.828571c-14.628571-20.48-32.182857-38.034286-58.514286-49.737142-26.331429-11.702857-55.588571-17.554286-87.771428-17.554286-35.108571 0-67.291429 5.851429-93.622857 20.48-26.331429 14.628571-46.811429 32.182857-61.44 55.588571-14.628571 23.405714-20.48 43.885714-20.48 64.365715 0 11.702857 2.925714 20.48 11.702857 29.257142 8.777143 8.777143 20.48 14.628571 32.182857 14.628572 20.48 0 35.108571-11.702857 43.885714-38.034286 8.777143-23.405714 17.554286-43.885714 29.257143-55.588571 11.702857-11.702857 29.257143-17.554286 55.588571-17.554286 20.48 0 38.034286 5.851429 52.662858 17.554286 14.628571 11.702857 20.48 29.257143 20.48 46.811428 0 8.777143-2.925714 17.554286-5.851429 26.331429-5.851429 8.777143-8.777143 14.628571-17.554286 20.48-5.851429 5.851429-17.554286 17.554286-32.182857 29.257143-17.554286 14.628571-29.257143 26.331429-40.96 38.034285-8.777143 11.702857-17.554286 23.405714-23.405714 38.034286-5.851429 14.628571-8.777143 29.257143-8.777143 49.737143 0 14.628571 2.925714 26.331429 11.702857 35.108571 8.777143 8.777143 17.554286 11.702857 29.257143 11.702858 23.405714 0 35.108571-11.702857 40.96-35.108572 2.925714-11.702857 2.925714-17.554286 5.851429-23.405714 0-5.851429 2.925714-8.777143 5.851428-14.628572s5.851429-8.777143 11.702857-14.628571l17.554286-17.554286c29.257143-26.331429 46.811429-43.885714 58.514286-52.662857 11.702857-11.702857 20.48-23.405714 29.257143-38.034286 8.777143-14.628571 11.702857-32.182857 11.702857-49.737142 2.925714-29.257143-2.925714-52.662857-17.554286-73.142858z" fill="#67a5df" stroke="white" stroke-width="30"></path>
                </svg>
              </div>
            </span>
          </legend>
          <ul class="${defCon.class.main}">
            <li id="${defCon.id.fontList}">
              <div class="${defCon.class.fontList}"></div>
            </li>
            <li id="${defCon.id.fontFace}">
              <div style="margin:0;padding:0">字体重写（默认\uff1a开）</div>
              <div style="height:32px;margin:0;padding:0;align-self:center">
                <input type="checkbox" id="${defCon.id.fface}" class="${defCon.class.checkbox}" ${CONST_VALUES.fontFace ? "checked" : ""} />
                <label for="${defCon.id.fface}"></label>
              </div>
            </li>
            <li id="${defCon.id.fontSmooth}">
              <div style="margin:0;padding:0">字体平滑（默认\uff1a开）</div>
              <div style="height:32px;margin:0;padding:0;align-self:center">
                <input type="checkbox" id="${defCon.id.smooth}" class="${defCon.class.checkbox}" ${CONST_VALUES.fontSmooth ? "checked" : ""} />
                <label for="${defCon.id.smooth}"></label>
              </div>
            </li>
            ${defCon.isFontsize ? tFontSizeHTML : ""}
            <li id="${defCon.id.fontStroke}">
              <div class="${defCon.class.flex}">
                <span style="margin:0;padding:0">字体描边尺寸</span>
                ${IS_REAL_BLINK ? tFixStrokeHTML : ""}
                <input id="${defCon.id.strokeSize}" type="text" v="number" maxlength="5" />
              </div>
              <div class="${defCon.class.range}" data-ticks-position="top"
                style="--step:.001;--min:0;--max:1;--value:${CONST_VALUES.fontStroke};--text-value:'${String(CONST_VALUES.fontStroke.toFixed(3))}'">
                <input id="${defCon.id.stroke}" type="range" min="0" max="1" step=".001" value="${CONST_VALUES.fontStroke.toFixed(3)}" />
                <output></output>
                <div class="${defCon.class.rangeProgress}"></div>
              </div>
            </li>
            <li id="${defCon.id.fontShadow}">
              <div class="${defCon.class.flex}">
                <span style="margin:0;padding:0">字体阴影尺寸</span>
                <input id="${defCon.id.shadowSize}" type="text" v="number" maxlength="4" />
              </div>
              <div class="${defCon.class.range}" data-ticks-position="top"
                style="--step:.01;--min:0;--max:8;--value:${CONST_VALUES.fontShadow};--text-value:'${String(CONST_VALUES.fontShadow.toFixed(2))}'">
                <input id="${defCon.id.shadow}" type="range" min="0" max="8" step=".01" value="${CONST_VALUES.fontShadow.toFixed(2)}" />
                <output></output>
                <div class="${defCon.class.rangeProgress}"></div>
              </div>
            </li>
            <li id="${defCon.id.shadowColor}">
              <div style="margin:0;padding:0">
                <span style="margin:0;padding:0">阴影颜色</span>
                <span class="${defCon.class.tooltip}">
                  <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                    <p>阴影颜色可通过点击色块激活拾色器选择，也可自定义填写，格式支持: <em style="color:#cecece">RGB, RGBA, HEX, HEXA.</em> 纯白色的所有格式表示自身颜色 <em style="color:#cecece">currentcolor.</em></p>
                    <p><em style="color:darkred">注意\uff1a输入数值会自动转化为HEXA格式，但数值保持一致性。错误格式会被替换为刚刚正确显示的数值。</em></p>
                  </span>
                </span>
              </div>
              <div class="${defCon.class.frColorPicker}">
                <input title="输入颜色代码" type="text" id="${defCon.id.color}" />
              </div>
            </li>
            <li id="${defCon.id.fontCSS}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">需要渲染的网页元素\uff1a
                <span class="${defCon.class.tooltip}">
                  <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                    <p>默认为排除大多数网站常用的特殊CSS样式后需要渲染的页面元素。填写格式\uff1a<em style="color:#cecece">:not(.fa)</em> 或 <em style="color:#cecece">:not([class*="fa"])</em> 或 <em style="color:#cecece">,#idname .classname</em></p>
                    <p><em style="color:darkred">该选项为重要参数，默认只读，双击解锁。请尽量不要修改，避免造成样式失效。若失效请重置。</em></p>
                  </span>
                </span>
                <div id="${defCon.id.cSwitch}" class="${defCon.class.switch}" data-switch="ON">\u2227</div>
              </div>
              <textarea placeholder="请谨慎修改默认值，避免渲染失效。" id="${defCon.id.cssfun}" class="${defCon.class.readonly}"
                title="重要参数，默认只读，双击解锁。" readonly="readonly">${CONST_VALUES.fontCSS || INITIAL_VALUES.fontCSS}</textarea>
            </li>
            <li id="${defCon.id.fontEx}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">排除渲染的HTML标签\uff1a
                <span id="${defCon.id.mono}" class="${defCon.class.tooltip}">
                  <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${defCon.class.tooltip} ${defCon.class.ps4}">
                    <p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p>
                    <p><em style="color:darkred">编辑该选项需要CSS知识，如需要排除复杂的样式或标签可通过这里进行添加，样式若混乱请重置。</em></p>
                    <p>双击\ud83d\udd14可打开自定义等宽字体的添加工具，设置您需要的等宽字体集合。</p>
                    <p><em style="color:darkred">注意：如需使用自定义等宽字体，请勿清除该文本域中相关的关键代码：『 <em style="color:#cecece">pre,pre *,code,code *</em> 』</em></p>
                  </span>
                </span>
                <div id="${defCon.id.eSwitch}" class="${defCon.class.switch}" data-switch="ON">\u2227</div>
              </div>
              <textarea placeholder="请输入要排除渲染的HTML标签，形如: input, em, div[id='test']"
                id="${defCon.id.exclude}">${CONST_VALUES.fontEx || ""}</textarea>
            </li>
            <li id="${defCon.id.submit}">
              <button class="${defCon.class.reset}">重置</button>
              <button class="${defCon.class.cancel}">取消</button>
              <button id="${defCon.id.backup}">备份</button>
              <button class="${defCon.class.submit}">保存</button>
            </li>
          </ul>
        </fieldset>
      </div>`
    );
    const tCSS = `@charset "UTF-8";` + fontCss;
    const tStyle = `@charset "UTF-8";` + fontStyle;
    defCon.tStyle = tStyle;
    defCon.refont = refont;

    /* SYSTEM INFO */

    const DEFAULT_FONT = "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53";
    let reFontFace = DEFAULT_FONT;
    defCon.curFont = DEFAULT_FONT;

    await getCurrentFontName(CONST_VALUES.fontFace, defCon.refont, DEFAULT_FONT);

    if (CUR_WINDOW_TOP) {
      if (typeof defCon.exSitesIndex === "undefined") {
        console.log(
          `%c${defCon.scriptName}\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/FontRendering\n%c\u259e\u0020脚本版本\uff1a%cV%s%c%s%c\n\u259e\u0020个性化设置\uff1a%c%s%c/%s%s\n%c\u259e\u0020字体缩放\uff1a%s%s\n\u259e\u0020本地备份\uff1a%s\u3000\u259a\u0020保存预览\uff1a%s\n%c\u259e\u0020渲染字体\uff1a%s\n\u259e\u0020字体平滑\uff1a%s\u3000\u259a\u0020字体重写\uff1a%s\n\u259e\u0020字体描边\uff1a%s\u3000\u259a\u0020字体阴影\uff1a%s`,
          "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
          "line-height:180%;font-size:10px;color:#777;font-style:italic",
          "line-height:180%;font-size:12px;color:slategray",
          "color:slategrey;font:italic 16px/150% Candara,'Times New Roman'",
          defCon.curVersion,
          "color:darkred;font:italic 11px/150% Candara,'Times New Roman'",
          getNavigator.isCheatUA() ? "\u3000(CHEAT-UA)" : "",
          "line-height:180%;font-size:12px;color:steelblue",
          defCon.domainCount > maxPersonalSites ? "color:crimson" : "color:steelblue",
          defCon.domainCount,
          "line-height:180%;font-size:12px;color:steelblue",
          maxPersonalSites,
          typeof defCon.domainIndex !== "undefined" ? "\uff08\u5f53\u524d\uff1a\u4e2a\u6027\u5316\uff09" : "\uff08\u5f53\u524d\uff1a\u5168\u5c40\uff09",
          "line-height:180%;font-size:12px;color:steelblue",
          defCon.isFontsize ? "ON " : "OFF",
          defCon.isFontsize
            ? EXCLUDES_EDITORIAL_SITES
              ? `\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a(EXCLUDED WEBSITE)`
              : CONST_VALUES.fontSize === 1
              ? "\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a(WEBSITE DEFINED)"
              : `\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a${Number(CONST_VALUES.fontSize * 100).toFixed(2) + "%"}`
            : "\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a(BROWSER DEFINED)",
          isBackupFunction ? "ON " : "OFF",
          isPreview ? "ON " : "OFF",
          "line-height:180%;font-size:12px;color:teal",
          fontface_i ? reFontFace : "\u5df2\u5173\u95ed\uff08\u91c7\u7528" + reFontFace + "\uff09",
          CONST_VALUES.fontSmooth ? "ON " : "OFF",
          CONST_VALUES.fontFace ? "ON " : "OFF",
          CONST_VALUES.fontStroke ? "ON " : "OFF",
          CONST_VALUES.fontShadow ? "ON " : "OFF"
        );
      } else {
        console.log(
          `%c${defCon.scriptName}\n%c${CUR_HOST_NAME.toUpperCase()} 已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。${
            isHotkey ? "(" + String(IS_MACOS ? "Command+" : "Alt+") + String.fromCharCode(IS_MACOS ? 71 : 88) + ")" : ""
          }`,
          "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
          "line-height:180%;font-size:12px;color:darkred"
        );
      }
    }

    /* Patch2022.1: Fixed font-style:bold while font stroke in chromium 96+ --START-- */

    const NEED_FIX_STROKE = IFFontStroke => {
      return IS_REAL_BLINK && IFFontStroke && (Number(getNavigator.chromiumVersion()) >= 96 || getNavigator.isCheatUA());
    };
    const SHOULD_FIX_STROKE = NEED_FIX_STROKE(CONST_VALUES.fixStroke);
    function correctBoldErrorIfStroke(should_fix_stroke, { logger, action }) {
      return new Promise(resolve => {
        if (should_fix_stroke) {
          const attrName = "fr-fix-stroke";
          qA(`:not(${defCon.queryString},[${attrName}])`).forEach(item => {
            if (cP(item, "display") !== "none" && cP(item, "font-weight") >= 600) {
              item.setAttribute(attrName, true);
            }
          });
          resolve(attrName);
        }
      })
        .then(result => {
          qA(`[${result}]`).forEach(item => {
            if (cP(item, "font-weight") < 600) {
              item.removeAttribute(result);
            }
          });
          logger && count(`\u27A4 [FIXSTROKE]${IS_FRAMES}[t:${action}]`);
        })
        .catch(e => {
          error("<Font-Fix-Stroke>", e.message);
        });
    }
    // Patch2022.1: Fixed font-style:bold while font stroke in chromium 96+ --END-- //

    /* Insert CSS */

    try {
      let mutationType;
      preInsertContentToHead();
      new MutationObserver(mutations => {
        mutationType = undefined;
        mutations.forEach(mutation => {
          switch (mutation.type) {
            case "childList":
              mutation.removedNodes.forEach(node => {
                if (mutation.target === document.head && node.nodeName === "STYLE") {
                  if (!((!CUR_WINDOW_TOP || qS(`.${defCon.class.rndClass}`)) && (typeof defCon.exSitesIndex !== "undefined" || qS(`.${defCon.class.rndStyle}`)))) {
                    debug(
                      `\u27A4 %cMutationObserver: %c${mutation.type} %c${!preInsertContentToHead(true)}\n\u3000 %c\u27A5 ${CUR_HOST_NAME}`,
                      "color:teal",
                      "color:olive",
                      "color:red",
                      "color:grey"
                    );
                  }
                }
              });
              mutation.addedNodes.forEach(node => {
                if (typeof defCon.exSitesIndex !== "undefined") {
                  preInsertContentToHead(true);
                } else {
                  if (node instanceof HTMLElement && node.isConnected) {
                    mutationType = mutation.type;
                    mutation.target === document.head &&
                      qS(`.${defCon.class.rndStyle}`) &&
                      qS(`.${defCon.class.rndStyle}`).nextElementSibling &&
                      shouldMoveStyle(node) &&
                      deBounce(moveStyleTolastChild, 40, "moveStyleTolastChild", false)({ isMutationObserver: true });
                    node.nodeName === "IFRAME" && deBounce(insertStyle_AsyncFrames, 200, "asyncframes", true)({ isMutationObserver: true });
                  }
                }
              });
              break;
            case "attributes":
              if (
                typeof mutationType === "undefined" &&
                mutation.attributeName !== "fr-fix-stroke" &&
                !defCon.queryString.split(",").includes(mutation.target.nodeName.toLowerCase()) &&
                cP(mutation.target, "display") !== "none" &&
                cP(mutation.target, "visibility") !== "hidden" &&
                ((cP(mutation.target, "font-weight") >= 600 && !mutation.target.getAttribute("fr-fix-stroke")) ||
                  (cP(mutation.target, "font-weight") < 600 && mutation.target.getAttribute("fr-fix-stroke")))
              ) {
                mutationType = mutation.type;
              }
              break;
          }
        });
        typeof defCon.exSitesIndex === "undefined" &&
          typeof mutationType !== "undefined" &&
          SHOULD_FIX_STROKE &&
          (deBounce(correctBoldErrorIfStroke, 100, "fixstroke", true)(CONST_VALUES.fontStroke, { logger: true, action: mutationType }), (mutationType = null));
      }).observe(document, { attributes: true, childList: true, subtree: true });
    } catch (e) {
      error("MutationObserver.InsertCSS:", e.message);
    }

    /* Menus Insert */

    const addAction = {
      setConfigure: () => {
        if (document.body) {
          if (!qS(`#${defCon.id.rndId}`)) {
            try {
              insertHTML();
              operateConfigure();
              setAutoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
              sleep(100)
                .then(() => {
                  qS(`#${defCon.id.container}`).style.opacity = 1;
                  debug("\u27A4 configure<errorCount>:", defCon.errors.length);
                  defCon.errors.length > 0 && reportErrorToAuthor(defCon.errors, true);
                })
                .catch(e => {
                  error("insertHTML.opacity:", e.message);
                });
              qS(`.${defCon.class.title} span.${defCon.class.guide}`).addEventListener("click", () => {
                GMopenInTab(`${HOST_URI}#guide`, defCon.options);
              });
              qS(`#${defCon.id.field} #${RANDOM_ID}_scriptname`).addEventListener("dblclick", function () {
                hintUpdateInfo(`${HOST_URI}#update`, _config_data_.curVersion);
                this.style.userSelect = "none";
              });
            } catch (e) {
              error("setConfigure:", e.message);
            }
          } else {
            closeConfigurePage({ isReload: false });
          }
        }
      },
      excludeSites: async () => {
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        frDialog = new FrDialogBox({
          trueButtonText: "确 定",
          neutralButtonText: "取 消",
          messageText: `<p style="word-break:break-all;font:bold italic 24px/150% Candara,'Times New Roman'!important">${CUR_HOST_NAME}</p><p style="color:darkred">该域名下所有页面将被禁止字体渲染\uff01</p><p>确定后当前页面将自动刷新，请确认是否排除？</p>`,
          titleText: "禁止字体渲染",
        });
        if (await frDialog.respond()) {
          _exSite = await GMgetValue("_Exclude_site_");
          try {
            exSite = _exSite ? [...JSON.parse(defCon.decrypt(_exSite))] : defExSite;
          } catch (e) {
            error("exSite.JSON.parse:", e.message);
            exSite = defExSite;
          }
          exSite.push(CUR_HOST_NAME);
          saveData("_Exclude_site_", exSite);
          closeConfigurePage({ isReload: true });
        }
        frDialog = null;
      },
      vipConfigure: async () => {
        configure = await GMgetValue("_configure_");
        try {
          _config_data_ = JSON.parse(defCon.decrypt(configure));
        } catch (e) {
          error("_config_data_.JSON.parse:", e.message);
          _config_data_ = {};
        }
        isBackupFunction = Boolean(_config_data_.isBackupFunction);
        isPreview = Boolean(_config_data_.isPreview);
        isFontsize = isGM ? false : Boolean(_config_data_.isFontsize);
        isHotkey = Boolean(typeof _config_data_.isHotkey !== "undefined" ? _config_data_.isHotkey : true);
        isCloseTip = Boolean(_config_data_.isCloseTip);
        maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        frDialog = new FrDialogBox({
          trueButtonText: "保存数据",
          falseButtonText: "帮助文件",
          neutralButtonText: "取 消",
          messageText: String(
            `<ul class="${defCon.class.main}" style="box-sizing:content-box;max-height:215px;overflow-x:hidden;margin:0;padding:5px 0;overscroll-behavior:contain">
              <li id="${defCon.id.bk}">
                <div class="${RANDOM_ID}_VIP" title="养成定期备份的好习惯，保护自己的数据安全\uff01">\u2460 本地备份功能（默认\uff1a开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isbackup}" class="${defCon.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                  <label for="${defCon.id.isbackup}"></label>
                </div>
              </li>
              <li id="${defCon.id.pv}">
                <div class="${RANDOM_ID}_VIP" title="无需保存刷新页面，直接预览渲染效果\uff01">\u2461 保存预览功能（默认\uff1a关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.ispreview}" class="${defCon.class.checkbox}" ${isPreview ? "checked" : ""} />
                  <label for="${defCon.id.ispreview}"></label>
                </div>
              </li>
              <li id="${defCon.id.fs}">
                <div class="${RANDOM_ID}_VIP" title="实验性功能\uff1a兼容大部分浏览器，但仍在Beta测试阶段\uff01">\u2462 字体缩放功能（默认\uff1a关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isfontsize}" class="${defCon.class.checkbox}" ${isFontsize ? "checked" : ""} />
                  <label for="${defCon.id.isfontsize}"></label>
                </div>
              </li>
              <li id="${defCon.id.hk}">
                <div class="${RANDOM_ID}_VIP" title="如快捷键有冲突，请在此关闭它\uff01">\u2463 键盘快捷键功能（默认\uff1a开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.ishotkey}" class="${defCon.class.checkbox}" ${isHotkey ? "checked" : ""} />
                  <label for="${defCon.id.ishotkey}"></label>
                </div>
              </li>
              <li id="${defCon.id.ct}">
                <div class="${RANDOM_ID}_VIP" title="您将无法第一时间获得更新内容，错过重要提示\uff01">\u2464 关闭更新提示功能（不推荐）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isclosetip}" class="${defCon.class.checkbox}" ${isCloseTip ? "checked" : ""} />
                  <label for="${defCon.id.isclosetip}"></label>
                </div>
              </li>
              <li id="${defCon.id.mps}">
                <div class="${RANDOM_ID}_VIP" title="防止页面加载缓慢，不建议设置过高的数值\uff01">\u2465 个性化设置总数（默认\uff1a100）</div>
                <div style="margin:0 5px 0 0;padding:0">
                  <input maxlength="4" id="${defCon.id.maxps}" placeholder="100" value="${maxPersonalSites}"
                    style="box-sizing:border-box;font:normal 500 16px/150% Impact,Times,serif!important;border:2px solid darkgoldenrod;border-radius:4px;width:70px;min-width:70px;text-align:center;padding:4px 5px;color:#333" />
                </div>
              </li>
              <li id="${defCon.id.flc}">
                <div class="${RANDOM_ID}_VIP" title="安装新字体后，请先重启浏览器再重建全局缓存\uff01">\u2466 字体列表全局缓存（时效\uff1a一周）</div>
                <button id="${defCon.id.flcid}"
                  style="box-sizing:border-box;margin:0 5px 0 0;padding:2px 5px;width:max-content;height:max-content;min-width:70px;min-height:32px;background:#eee;letter-spacing:normal">
                  重建缓存
                </button>
              </li>
            </ul>
            <div id="${defCon.id.feedback}" title="遇到问题，建议先看看脚本帮助文件。"
              style="box-sizing:content-box;width:auto;height:auto;margin:0 0 0 5px;padding:4px 0;font-size:16px;font-style:normal;color:#333;cursor:help">
                \ud83e\udde1<span style="font-weight:700">\u0020如果您遇到错误或提建议，请及时向我反馈\u0020</span>\ud83e\udde1
            </div>`
          ),
          titleText: `高级核心功能设置\u3000-\u0020Version\u0020${defCon.curVersion}\u0020-`,
        });
        let _bk, _pv, _fs, _hk, _ct, _mps;
        _bk = Boolean(qS(`#${defCon.id.isbackup}`).checked);
        _pv = Boolean(qS(`#${defCon.id.ispreview}`).checked);
        _fs = Boolean(qS(`#${defCon.id.isfontsize}`).checked);
        _hk = Boolean(qS(`#${defCon.id.ishotkey}`).checked);
        _ct = Boolean(qS(`#${defCon.id.isclosetip}`).checked);
        _mps = Number(qS(`#${defCon.id.maxps}`).value) || 100;
        qS(`#${defCon.id.maxps}`).addEventListener("input", function () {
          this.value = this.value.replace(/[^0-9]/g, "");
        });
        IS_REAL_GECKO &&
          confirmIfValueChange(
            qS(`#${defCon.id.isfontsize}`),
            `字体比例缩放（实验性功能）\n警告：Firefox因Gecko内核的兼容性，会对部分网站兼容不足而造成样式错乱、页面卡顿等问题，请根据需要酌情在特定站点内使用。\n(建议：如有必要的需求，请使用浏览器缩放替代。)${
              isGM ? "\n\n扩展Greasemonkey不支持字体缩放功能！" : "\n\n请确认是否开启字体缩放功能？"
            }`,
            { useGM: false }
          );
        confirmIfValueChange(
          qS(`#${defCon.id.isclosetip}`),
          "关闭更新提示，您将不能在第一时间获取更新内容，或错过重要的使用提示和警示通告。如遇重大功能升级，忽略更新提示有几率影响正常使用。双击字体渲染设置窗口顶部的脚本名称，可查看历史更新提示。\n\n请确认是否关闭更新提示功能？",
          { useGM: true }
        );
        qS(`#${defCon.id.flcid}`).addEventListener("click", async () => {
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
          frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            messageText: `<p style="font-size:18px!important;text-align:center;padding-bottom:6px;color:darkgoldenrod">字体列表全局缓存已重建，当前页面即将刷新\uff01</p><p style="text-align:center"><a style="display:inline-block;border:2px solid darkgoldenrod;border-radius:8px;width:302px;height:237px;background:url('${LOADING_IMG}') 50% 50% no-repeat;overflow:hidden"><img src='${FONTLIST_IMG}' alt="字体列表全局缓存已重建"/></a></p>`,
            titleText: "字体列表全局缓存已重建",
          });
          cache.remove("_FontCheckList_");
          if (await frDialog.respond()) {
            closeConfigurePage({ isReload: true });
          }
          frDialog = null;
        });
        qS(`#${defCon.id.feedback}`).addEventListener("click", () => {
          GMopenInTab(FEEDBACK_URI, defCon.options);
        });
        qA(`#${defCon.id.isbackup}, #${defCon.id.ispreview}, #${defCon.id.isfontsize}, #${defCon.id.ishotkey}, #${defCon.id.isclosetip}, #${defCon.id.maxps}`).forEach(items => {
          items.addEventListener("change", () => {
            _bk = Boolean(qS(`#${defCon.id.isbackup}`).checked);
            _pv = Boolean(qS(`#${defCon.id.ispreview}`).checked);
            _fs = Boolean(qS(`#${defCon.id.isfontsize}`).checked);
            _hk = Boolean(qS(`#${defCon.id.ishotkey}`).checked);
            _ct = Boolean(qS(`#${defCon.id.isclosetip}`).checked);
            _mps = Number(qS(`#${defCon.id.maxps}`).value) || 100;
          });
        });
        if (await frDialog.respond()) {
          _config_data_.isBackupFunction = _bk;
          _config_data_.isPreview = _pv;
          _config_data_.isFontsize = _fs;
          _config_data_.isHotkey = _hk;
          _config_data_.isCloseTip = _ct;
          _config_data_.maxPersonalSites = _mps;
          saveData("_configure_", _config_data_);
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
          frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            messageText: `<p style="color:darkgoldenrod">高级核心功能参数已成功保存，当前页面即将刷新\uff01</p>`,
            titleText: "高级核心功能设置保存",
          });
          if (await frDialog.respond()) {
            closeConfigurePage({ isReload: true });
          }
          frDialog = null;
        } else {
          GMopenInTab(`${HOST_URI}#warning`, defCon.options);
        }
        frDialog = null;
      },
      includeSites: async () => {
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        frDialog = new FrDialogBox({
          trueButtonText: "确 定",
          neutralButtonText: "取 消",
          messageText: `<p style="font:italic bold 22px/150% Candara,'Times New Roman'!important">${CUR_HOST_NAME}</p><p style="color:darkgreen">该域名下所有页面将重新进行字体渲染\uff01</p><p>确定后当前页面将自动刷新，请确认是否恢复？</p>`,
          titleText: "恢复字体渲染",
        });
        if (await frDialog.respond()) {
          _exSite = await GMgetValue("_Exclude_site_");
          try {
            exSite = _exSite ? [...JSON.parse(defCon.decrypt(_exSite))] : defExSite;
          } catch (e) {
            error("exSite.JSON.parse:", e.message);
            exSite = defExSite;
          }
          defCon.exSitesIndex = updateExsitesIndex(exSite);
          exSite.splice(defCon.exSitesIndex, 1);
          saveData("_Exclude_site_", exSite);
          closeConfigurePage({ isReload: true });
        }
        frDialog = null;
      },
    };

    if (CUR_WINDOW_TOP) {
      sleep(1e3, { useCachedSetTimeout: true })(2e3)
        .then(async r => {
          const fontReady = await isFontReady(r);
          debug("\u27A4 isFontReady:", Boolean(fontReady), parseInt(fontReady));
          return fontReady;
        })
        .then(font_Ready => {
          let font_Set, exclude_site, parameter_Set, feed_Back;
          loading ? GMunregisterMenuCommand(loading) : debug("\u27A4 %cNo Loading_Menu", "color:grey");
          if (font_Ready) {
            if (typeof defCon.exSitesIndex === "undefined") {
              font_Set ? GMunregisterMenuCommand(font_Set) : debug("\u27A4 %cInstalling Font_Set_Menu", "color:gray");
              font_Set = GMregisterMenuCommand(`\ufff2\ud83c\udf13 字体渲染设置${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 69 : 80) + ")" : ""}`, () => {
                addAction.setConfigure();
              });
              exclude_site ? GMunregisterMenuCommand(exclude_site) : debug("\u27A4 %cInstalling Exclude_site_Menu", "color:gray");
              exclude_site = GMregisterMenuCommand(`\ufff3\u26d4 排除渲染 ${CUR_HOST_NAME} ${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 71 : 88) + ")" : ""}`, () => {
                addAction.excludeSites();
              });
              parameter_Set ? GMunregisterMenuCommand(parameter_Set) : debug("\u27A4 %cInstalling Parameter_Set_Menu", "color:gray");
              parameter_Set = GMregisterMenuCommand(`\ufff7\ud83d\udc8e 高级核心功能设置${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 74 : 71) + ")" : ""}`, () => {
                addAction.vipConfigure();
              });
            } else {
              exclude_site ? GMunregisterMenuCommand(exclude_site) : debug("\u27A4 %cInstalling Exclude_site_Menu", "color:gray");
              exclude_site = GMregisterMenuCommand(`\ufff2\ud83c\udf40 重新渲染 ${CUR_HOST_NAME} ${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 71 : 88) + ")" : ""}`, () => {
                addAction.includeSites();
              });
              feed_Back ? GMunregisterMenuCommand(feed_Back) : debug("\u27A4 %cInstalling Feed_Back_Menu", "color:gray");
              feed_Back = GMregisterMenuCommand(`\ufff9\ud83e\udde1 向作者反馈问题或建议${isHotkey ? "(" + String.fromCharCode(IS_MACOS ? 85 : 84) + ")" : ""}`, () => {
                GMopenInTab(FEEDBACK_URI, defCon.options);
              });
            }
          } else {
            loading = GMregisterMenuCommand(`\ufff0\ud83c\udf13 单击重新载入脚本菜单`, () => {
              location.reload(true);
            });
          }
        })
        .catch(e => {
          error("MenusInsert:", e.message);
        });
    }

    /* hotkey setting */

    if (isHotkey && CUR_WINDOW_TOP) {
      document.addEventListener("keydown", e => {
        const ekey = (IS_MACOS ? e.metaKey : e.altKey) && !e.ctrlKey && !e.shiftKey;
        if (e.keyCode === (IS_MACOS ? 69 : 80) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (typeof defCon.exSitesIndex === "undefined") {
              addAction.setConfigure();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (IS_MACOS ? 71 : 88) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (typeof defCon.exSitesIndex === "undefined") {
              addAction.excludeSites();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (IS_MACOS ? 74 : 71) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (typeof defCon.exSitesIndex === "undefined") {
              addAction.vipConfigure();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (IS_MACOS ? 85 : 84) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 10e3) {
            defCon.clickTimer = Date.now();
            GMopenInTab(FEEDBACK_URI, defCon.options);
          }
        }
      });
    }

    /* important Functions */

    function insertHTML() {
      try {
        setRAFInterval(
          () => {
            if (!qS(`fr-configure`)) {
              let section = cE("fr-configure");
              section.id = defCon.id.rndId;
              section.innerHTML = trustedTypesPolicy.createHTML(tHTML);
              document.body.appendChild(section);
              section = null;
            }
            return Boolean(qS(`fr-configure`));
          },
          100,
          { runNow: true }
        );
      } catch (e) {
        error("InsertHTML:", e.message);
      }
    }

    function insertCSS() {
      try {
        addStyle(tCSS, `${defCon.class.rndClass}`, document.head, "TC", { isReload: false });
      } catch (e) {
        error("InsertCSS:", e.message);
      }
    }

    function insertStyle({ isReload } = {}) {
      try {
        addStyle(tStyle, `${defCon.class.rndStyle}`, document.head, "TS", { isReload });
      } catch (e) {
        error("InsertStyle:", e.message);
      }
    }

    function shouldMoveStyle(element) {
      return (
        (element instanceof HTMLStyleElement || (element instanceof HTMLLinkElement && element.rel && element.rel.toLowerCase().includes("stylesheet") && !element.disabled)) &&
        element.media.toLowerCase() !== "print" &&
        !element.classList.contains(defCon.class.rndStyle) &&
        !element.classList.contains("darkreader")
      );
    }

    function moveStyleTolastChild({ isMutationObserver }) {
      try {
        if (isMutationObserver) {
          if (qA("style[id^='TC']", document.head).length > 1) {
            if (!defCon.scriptCount) {
              console.error(`[Redundant Scripts]:\n发现冗余安装的『${defCon.scriptName}』，请访问 ${FEEDBACK_URI}/117 排查错误。`);
              safeRemove("style[id^='TC']", document.head) && insertCSS();
              sleep(5e2)((defCon.scriptCount = true)).then(r => {
                if (qA("style[id^='TC']", document.head).length > 1) {
                  defCon.errors.push(
                    `[Redundant Scripts]: 发现冗余安装的『${defCon.scriptName}』，请按 <a target="_blank" href="${FEEDBACK_URI}/117" style="color:goldenrod">此清单#117</a> 排查错误。刷新页面后如问题依旧，向作者反馈错误！`
                  );
                  reportErrorToAuthor(defCon.errors, r);
                }
              });
            }
          } else if (qA("style[id^='TS']", document.head).length > 0) {
            insertStyle({ isReload: true });
            count(`\u27A4 [MOVESTYLE][c:${getAsyncStyleNode(document.head).className}]`);
          }
        } else {
          addLoadEvents(() => {
            sleep(2e3, { useCachedSetTimeout: true })
              .then(() => {
                qS(`.${defCon.class.rndStyle}`)
                  ? qS(`.${defCon.class.rndStyle}`).nextElementSibling && shouldMoveStyle(getAsyncStyleNode(document.head)) && insertStyle({ isReload: true })
                  : insertStyle({ isReload: false });
                return getAsyncStyleNode(document.head).className || "<NULL>";
              })
              .then(r => {
                debug(`\u27A4 lastStyle${IS_FRAMES}.className: %c%s`, `color:teal;font-weight:700`, r);
              });
            return true;
          });
        }
      } catch (e) {
        error("MoveStyleTolastChild:", e.message);
      }
    }

    function preInsertContentToHead(isStyleReady = false) {
      setRAFInterval(
        () => {
          if (CUR_WINDOW_TOP && !qS(`.${defCon.class.rndClass}`)) {
            insertCSS();
            count(`\u27A4 [INSERTCSS][c:${defCon.class.rndClass}]`);
          }
          if (typeof defCon.exSitesIndex === "undefined") {
            if (!qS(`.${defCon.class.rndStyle}`)) {
              insertStyle({ isReload: false });
              count(`\u27A4 [INSERTSTYLE]${IS_FRAMES}[c:${defCon.class.rndStyle}]`);
            } else {
              moveStyleTolastChild({ isMutationObserver: false });
              isStyleReady = true;
            }
          } else {
            isStyleReady = true;
          }
          return isStyleReady;
        },
        60,
        { runNow: true }
      );
    }

    async function isFontReady(t = 1e3) {
      if (typeof defCon.fontReady !== "undefined") {
        delete defCon.fontReady;
        return true;
      } else {
        const timeReady = new Promise(resolve => {
          sleep(t, { useCachedSetTimeout: false }).then(() => {
            resolve(t);
          });
        });
        const fontReady = document.fonts.ready;
        defCon.fontReady = Promise.race([timeReady, fontReady]).then(value => {
          return value;
        });
        return defCon.fontReady;
      }
    }

    async function fontCheck_DetectOnce() {
      const fontReady = await isFontReady();
      let checkFont = new SupportFontFamily();
      let fontAvailable = new Set();
      let ii = 1;
      if (fontReady) {
        const fontCheckList = await getMergedFontCheckList();
        for (const font of fontCheckList.values()) {
          font.ps && delete font.ps;
          if (checkFont.detect(font.en)) {
            font.sort = ii;
            fontAvailable.add(font);
          } else if (checkFont.detect(convertToUnicode(font.ch))) {
            font.en = convertToUnicode(font.ch);
            font.sort = ii;
            fontAvailable.add(font);
          }
          ii += 1;
        }
      }
      const fontData = [...fontAvailable.values()].sort((a, b) => {
        return a.sort - b.sort;
      });
      checkFont = null;
      fontAvailable = null;
      return fontData;
    }

    async function operateConfigure(fontData = []) {
      try {
        if (CUR_WINDOW_TOP) {
          // * set fontData with cache expires * //
          try {
            const cache_FontCheckList = await cache.get("_FontCheckList_");
            if (Array.isArray(cache_FontCheckList) && cache_FontCheckList.length > 0) {
              debug("\u27A4 %cLoad font_Data from Cache", "color:green;font-weight:700");
              fontData = cache_FontCheckList;
            } else {
              debug("\u27A4 %cStart real-time font detection", "color:crimson;font-weight:700");
              fontData = await fontCheck_DetectOnce();
              cache.set("_FontCheckList_", fontData);
            }
          } catch (e) {
            error("Fontlist With Cache:", e.message);
            cache.remove("_FontCheckList_");
            fontData = await fontCheck_DetectOnce();
            cache.set("_FontCheckList_", fontData);
          }

          /* Fonts selection */

          try {
            if (qS(`#${defCon.id.fontList} .${defCon.class.fontList}`)) {
              fontSet(`#${defCon.id.fontList} .${defCon.class.fontList}`).fsearch(fontData);
              qS(`#${defCon.id.fonttooltip}`).addEventListener("dblclick", async () => {
                let custom_Fontlist = "";
                let received_Fontlist = "";
                let save_Fontlist = [];
                let cusFontCheck;
                const cusFontList = await GMgetValue("_Custom_fontlist_");
                try {
                  cusFontCheck = cusFontList ? [...JSON.parse(defCon.decrypt(cusFontList))] : DEFAULT_ARRAY;
                } catch (e) {
                  error("cusFontCheck.JSON.parse:", e.message);
                  cusFontCheck = DEFAULT_ARRAY;
                }
                if (Array.isArray(cusFontCheck) && cusFontCheck.length > 0) {
                  cusFontCheck.forEach(item => {
                    item.sort && delete item.sort;
                    received_Fontlist += JSON.stringify(item) + "\n";
                  });
                }
                closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                frDialog = new FrDialogBox({
                  trueButtonText: "保 存",
                  falseButtonText: "帮助文档",
                  neutralButtonText: "取 消",
                  messageText: `<p style="color:#555;font-size:14px!important">以下文本域可按预定格式增加自定义字体。请用小贴士或按样例填写，输入有误将被自动过滤。与『<a href="${HOST_URI}#fontlist" title="查看内置字体表" target="_blank">内置字体表</a>』重复的字体将被自动剔除。【功能小贴士\uff1a<span id="${RANDOM_ID}_addTools" title="点击开启工具" style="color:crimson;cursor:pointer">字体添加辅助工具</span>】</p><p><textarea id="${RANDOM_ID}_custom_Fontlist" style="box-sizing:border-box;scrollbar-width:thin;overscroll-behavior:contain;min-height:160px!important;min-width:388px!important;max-width:388px!important;resize:vertical;margin:0!important;padding:5px!important;border:1px solid #999;border-radius:6px;outline:none!important;font:normal 400 14px/150% monospace,'Courier New','Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;white-space:pre!important" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下\uff1a\n{ "ch":"中文字体名一","en":"EN Fontname 1" }\u21b2\n{ "ch":"中文字体名二","en":"EN Fontname 2","ps"\n:"Postscript Name" }\u21b2\n\n（注一\uff1a“ps:”该项为字体PostScript名称，可选填写）\n（注二\uff1a\u21b2为换行符号，输入(Enter)回车即可）'>${received_Fontlist}</textarea></p><p style="display:block;margin:-5px 0 0 -7px!important;height:max-content;color:crimson;font-size:14px!important">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p>`,
                  titleText: "自定义字体表",
                });
                custom_Fontlist = qS(`#${RANDOM_ID}_custom_Fontlist`).value.trim();
                qS(`#${RANDOM_ID}_addTools`).addEventListener("click", () => {
                  let chName, enName, psName, cusFontName;
                  chName = prompt(
                    "请输入「中文字体家族名称」\uff1a\n(例如\uff1a鸿蒙黑体，仅支持半角输入模式，包括中文、日文、韩文、英文，数字、小数点、减号、下划线、空格、@)",
                    "鸿蒙黑体"
                  );
                  if (chName === null) {
                    return;
                  } else if (/^@?[a-zA-Z0-9\u2E80-\uD7FF,\-_.(（ !/）)]+$/.test(chName.trim())) {
                    enName = prompt(
                      "请输入「英文字体家族名称」\uff1a\n(例如\uff1aHarmonyOS Sans SC，仅支持半角输入模式，包括英文、数字、小数点、减号、下划线、空格、@)",
                      "HarmonyOS Sans SC"
                    );
                    if (enName === null) {
                      return;
                    } else if (/^@?[a-zA-Z0-9,\-_.( !/)]+$/.test(enName.trim())) {
                      psName = prompt(
                        "请输入「PostScript名称」\uff1a\n(为使新增字体全局生效，请尽量填写PostScript名称。如您暂时无法提供PostScript名称，可留空)（查询请访问Fontke.com）",
                        ""
                      );
                      if (psName === null) {
                        return;
                      } else if (/^[a-zA-Z0-9\u2E80-\uD7FF,\-_.@!&=?|+~ ]+$/.test(psName.trim())) {
                        cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}","ps":"${psName.trim()}"}`;
                      } else {
                        cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}"}`;
                      }
                      const aTrim = qS(`#${RANDOM_ID}_custom_Fontlist`).value.trim() ? "\n" : "";
                      qS(`#${RANDOM_ID}_custom_Fontlist`).value = qS(`#${RANDOM_ID}_custom_Fontlist`).value.trim().concat(aTrim, cusFontName, "\n");
                      custom_Fontlist = qS(`#${RANDOM_ID}_custom_Fontlist`).value.trim();
                    } else {
                      alert("英文字体家族名称 格式输入错误\uff01");
                    }
                  } else {
                    alert("中文字体家族名称 格式输入错误\uff01");
                  }
                });
                qS(`#${RANDOM_ID}_custom_Fontlist`).addEventListener("change", function () {
                  this.value = convertFullToHalf(this.value)
                    .replace(/'|`|·|“|”|‘|’/g, `"`)
                    .replace(/，/g, `,`)
                    .replace(/：/g, `:`);
                  custom_Fontlist = this.value.trim();
                });
                if (await frDialog.respond()) {
                  const fontListArray = custom_Fontlist.match(
                    /{\s*"ch":\s*"@?[a-zA-Z0-9\u2E80-\uD7FF,\-_.(（ !/）)]+"\s*,\s*"en":\s*"@?[a-zA-Z0-9,\-_.( !/)]+"\s*(,\s*"ps":\s*"[a-zA-Z0-9\u2E80-\uD7FF,\-_.@!&=?|+~ ]+"\s*)?}/g
                  );
                  if (!custom_Fontlist.length) {
                    GMdeleteValue("_Custom_fontlist_");
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:indigo">自定义字体表已初始化成功\uff01<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>`,
                      titleText: "自定义字体数据重置",
                    });
                    cache.remove("_FontCheckList_");
                    if (await frDialog.respond()) {
                      closeConfigurePage({ isReload: true });
                    }
                    frDialog = null;
                  } else if (Array.isArray(fontListArray) && fontListArray.length > 0) {
                    fontListArray.forEach(item => {
                      save_Fontlist.push(JSON.parse(item));
                    });
                    const unique_Save_Fontlist = getUniqueValues(save_Fontlist);
                    saveData("_Custom_fontlist_", getDeduplicatedValues(unique_Save_Fontlist, fontCheck));
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:darkgreen">您所提交的自定义字体已保存成功\uff01<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>`,
                      titleText: "自定义字体数据保存",
                    });
                    cache.remove("_FontCheckList_");
                    if (await frDialog.respond()) {
                      closeConfigurePage({ isReload: true });
                    }
                    frDialog = null;
                  } else {
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    copyToClipboard(custom_Fontlist);
                    frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:crimson">您所提交的自定义字体数据格式有误，请重新输入。<p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`,
                      titleText: "字体表数据格式错误",
                    });
                    if (await frDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${defCon.id.fonttooltip}`).dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    frDialog = null;
                  }
                } else {
                  GMopenInTab(`${HOST_URI}#custom`, defCon.options);
                }
                frDialog = null;
              });
            }
          } catch (e) {
            defCon.errors.push(`[Fonts selection]: ${e}`);
            error("Fonts selection:", e.message);
          }

          /* selector placeholder style */

          const ffaceT = qS(`#${defCon.id.fface}`);
          const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          await getCurrentFontName(CONST_VALUES.fontFace, defCon.refont, DEFAULT_FONT);
          if (ffaceT && inputFont) {
            ffaceT.addEventListener("change", async () => {
              await getCurrentFontName(CONST_VALUES.fontFace, defCon.refont, DEFAULT_FONT);
              if (ffaceT.checked && !CONST_VALUES.fontFace) {
                inputFont.setAttribute("placeholder", `正在恢复之前设置的字体…`);
                sleep(120).then((submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`)) => {
                  submitPreview && submitPreview.click();
                });
              }
            });
          }

          /* Fonts Face */

          const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
          saveChangeStatus(ffaceT, CONST_VALUES.fontFace, submitButton, defCon.values);

          /* Font Smooth */

          const smoothT = qS(`#${defCon.id.smooth}`);
          saveChangeStatus(smoothT, CONST_VALUES.fontSmooth, submitButton, defCon.values);

          /* FontSize Zoom */

          let drawZoom;
          const zoom = qS(`#${defCon.id.fontZoom}`);
          if (defCon.isFontsize) {
            try {
              drawZoom = qS(`#${defCon.id.zoomSize}`);
              zoom.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
              rangeSliderWidget(drawZoom, zoom, 3, true);
              checkInputValue(zoom, drawZoom, /^[0-1](\.[0-9]{1,3})?$/, 3, true);
            } catch (e) {
              defCon.errors.push(`[FontSize Zoom]: ${e}`);
              error("FontSize Zoom:", e.message);
            } finally {
              saveChangeStatus(zoom, CONST_VALUES.fontSize, submitButton, defCon.values, true);
            }
          }

          /* Fonts stroke */

          let drawStrock;
          const stroke = qS(`#${defCon.id.strokeSize}`);
          try {
            drawStrock = qS(`#${defCon.id.stroke}`);
            stroke.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
            rangeSliderWidget(drawStrock, stroke, 3);
            checkInputValue(stroke, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
          } catch (e) {
            defCon.errors.push(`[Fonts stroke]: ${e}`);
            error("Fonts stroke:", e.message);
          } finally {
            saveChangeStatus(stroke, CONST_VALUES.fontStroke, submitButton, defCon.values);
          }

          let fixStrokeT;
          if (IS_REAL_BLINK) {
            fixStrokeT = qS(`#${defCon.id.fixStroke}`);
            try {
              qS(`#${defCon.id.fstroke}`).style.visibility = stroke.value === "OFF" ? "hidden" : "visible";
              stroke.addEventListener("change", function () {
                qS(`#${defCon.id.fstroke}`).style.visibility = this.value === "OFF" ? "hidden" : "visible";
              });
            } catch (e) {
              error("fixStroke:", e.message);
            } finally {
              saveChangeStatus(fixStrokeT, CONST_VALUES.fixStroke, submitButton, defCon.values);
            }
          }

          /* Fonts shadow */

          let drawShadow;
          const shadows = qS(`#${defCon.id.shadowSize}`);
          try {
            drawShadow = qS(`#${defCon.id.shadow}`);
            shadows.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
            rangeSliderWidget(drawShadow, shadows, 2);
            checkInputValue(shadows, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
            qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
            shadows.addEventListener("change", function () {
              qS(`#${defCon.id.shadowColor}`).style.display = this.value === "OFF" ? "none" : "flex";
            });
          } catch (e) {
            defCon.errors.push(`[Fonts shadow]: ${e}`);
            error("Fonts shadow:", e.message);
          } finally {
            saveChangeStatus(shadows, CONST_VALUES.fontShadow, submitButton, defCon.values);
          }

          /* Fonts shadow color selection */

          let colorPicker = {};
          const colorshow = qS(`#${defCon.id.color}`);
          const colorReg = /^#[0-9A-F]{8}$|^currentcolor$/i;
          try {
            colorPicker = new window.frColorPicker(`#${defCon.id.color}`, {
              value: CONST_VALUES.shadowColor,
              alpha: 1.0,
              format: "hexa",
              previewSize: 35,
              position: "top",
              zIndex: 1999999993,
              backgroundColor: "rgba(206,226,237,0.91)",
              controlBorderColor: "rgba(187,187,187,0.7)",
              pointerBorderColor: "rgba(255,255,255,0.6)",
              borderRadius: 4,
              padding: 9,
              width: 186,
              height: 210,
              sliderSize: 12,
              shadow: 0,
              onChange: function () {
                colorshow.value = this.toHEXAString() === "#FFFFFFFF" ? "currentcolor" : this.toHEXAString();
                colorshow._value_ = colorshow.value;
              },
            });
            colorPicker.fromString(CONST_VALUES.shadowColor);
            const cp = colorPicker.toHEXAString();
            const cl = getBrightness(cp.substring(1)) > 182 ? "#333" : "#eee";
            colorshow.value = cp === "#FFFFFFFF" ? "currentcolor" : cp;
            debug(
              `%c\u27A4 frColorPicker: %c${cp}`,
              `display:inline-block;padding:5px 0`,
              `display:inline-block;border:1px solid #eee;border-radius:4px;padding:5px 10px;background-color:${cp};color:${cl}`
            );
          } catch (e) {
            defCon.errors.push(`[Fonts shadowColor]: ${e}`);
            error("Fonts shadowColor:", e.message);
          } finally {
            saveChangeStatus(colorshow, CONST_VALUES.shadowColor, submitButton, defCon.values);
          }

          /* click to selectAll */

          qA(`#${defCon.id.fontZoom},#${defCon.id.strokeSize},#${defCon.id.shadowSize},#${defCon.id.color}`).forEach(item => {
            item.addEventListener("click", function () {
              this.focus();
              this.setSelectionRange(0, this.value.length);
            });
          });

          /* Double-click allows to edit */

          const fontExT = qS(`#${defCon.id.exclude}`);
          const fontCssT = qS(`#${defCon.id.cssfun}`);
          if (fontCssT) {
            fontCssT.addEventListener("dblclick", () => {
              fontCssT.setAttribute("class", `${defCon.class.notreadonly}`);
              fontCssT.title = "\u8bf7\u8c28\u614e\u4fee\u6539\u8be5\u53c2\u6570\uff01";
              fontCssT.readOnly = false;
            });
          }
          saveChangeStatus(fontCssT, CONST_VALUES.fontCSS, submitButton, defCon.values);
          saveChangeStatus(fontExT, CONST_VALUES.fontEx, submitButton, defCon.values);
          qS(`#${defCon.id.mono}`).addEventListener("dblclick", async () => {
            try {
              const monospacedFont = CONST_VALUES.monospacedFont;
              closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
              frDialog = new FrDialogBox({
                trueButtonText: "保存数据",
                neutralButtonText: "取 消",
                messageText: `<p style="color:#555;font-size:14px!important">以下文本域可设置您自定义的英文等宽字体集合（字体排序）<em style="color:crimson">请注意：程序已默认内置monospace字体，无需重复添加。</em></p><p><textarea id="${RANDOM_ID}_monospaced_font" style="box-sizing:border-box;scrollbar-width:thin;overscroll-behavior:contain;min-height:160px!important;min-width:388px!important;max-width:388px!important;resize:vertical;margin:0!important;padding:5px!important;border:1px solid #999;border-radius:6px;outline:none!important;font:normal 400 14px/150% monospace,'Courier New','Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;white-space:pre-line!important;word-break:break-all!important" placeholder="请先确认您的操作系统中已安装好您需要配置的英文等宽字体，再将英文等宽字体的名称按照您需要的渲染顺序填写至此文本域。填写时，请注意使用半角单引号将字体名称包括，且字体名称之间以半角逗号分隔。\n\n例如：'Source Code Pro','Mono','Monaco'">${monospacedFont}</textarea></p><p style="display:block;margin:-5px 0 0 -7px!important;height:max-content;color:crimson;font-size:14px!important">（若配置有误或设置初始化将默认采用程序定义的等宽字体）</p>`,
                titleText: "设置自定义等宽字体",
              });
              let custom_monospacedFontlist = qS(`#${RANDOM_ID}_monospaced_font`).value.trim();
              qS(`#${RANDOM_ID}_monospaced_font`).addEventListener("change", function () {
                this.value = convertFullToHalf(this.value)
                  .replace(/"|`|·|“|”|‘|’/g, `'`)
                  .replace(/，/g, `,`)
                  .replace(/'monospace',?/gi, ``);
                custom_monospacedFontlist = this.value.trim();
              });
              if (await frDialog.respond()) {
                const monospaced_fontListArray = custom_monospacedFontlist.match(/'@?[a-zA-Z0-9\-_.( !/)]+'/g);
                if (!custom_monospacedFontlist.length) {
                  GMdeleteValue("_monospaced_fontlist_");
                  closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                  frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: `<p style="color:indigo">自定义等宽字体表已初始化成功\uff01<p><p>已应用程序默认的等宽字体，当前页面即将刷新。</p>`,
                    titleText: "自定义等宽字体数据重置",
                  });
                  if (await frDialog.respond()) {
                    closeConfigurePage({ isReload: true });
                  }
                  frDialog = null;
                } else if (Array.isArray(monospaced_fontListArray) && monospaced_fontListArray.length > 0) {
                  saveData("_monospaced_fontlist_", monospaced_fontListArray.join(","));
                  closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                  frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: `<p style="color:darkgreen">您所提交的自定义等宽字体已保存成功\uff01</p><p>当前页面将在您确认后自动刷新。</p>`,
                    titleText: "自定义等宽字体数据保存",
                  });
                  if (await frDialog.respond()) {
                    closeConfigurePage({ isReload: true });
                  }
                  frDialog = null;
                } else {
                  closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                  copyToClipboard(custom_monospacedFontlist);
                  frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: `<p style="color:crimson">您所提交的自定义等宽字体数据有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`,
                    titleText: "自定义等宽字体数据错误",
                  });
                  if (await frDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${defCon.id.mono}`).dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  frDialog = null;
                }
              }
            } catch (e) {
              error("Monospaced Set:", e.message);
            }
          });
          // Expand & Collapse
          expandOrCollapse(qS(`#${defCon.id.cSwitch}`), fontCssT, qS(`#${defCon.id.fontCSS}`));
          expandOrCollapse(qS(`#${defCon.id.eSwitch}`), fontExT, qS(`#${defCon.id.fontEx}`));

          /* Buttons control */

          qS(`#${defCon.id.submit} .${defCon.class.reset}`).addEventListener("click", async () => {
            closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
            frDialog = new FrDialogBox({
              trueButtonText: "重 置",
              falseButtonText: "恢 复",
              neutralButtonText: "取 消",
              messageText: `<p>『重置/恢复』将当前设置初始化为 <span style="color:slategray">程序默认的初始数据</span> 或 <span style="color:slategrey">上次正确保存的数据</span>。一般是在您错误配置参数且造成无法挽回的情况下才进行重置参数的操作。</p><p style="color:darkgreen">重置\uff1a重置当前数据为程序初始值，手动保存生效。</p><p style="color:darkred">恢复\uff1a替换为上次正确保存的数据，自动恢复预览。</p><p style="color:gray">取消\uff1a放弃重置操作。</p>`,
              titleText: "参数重置确认",
            });
            if (await frDialog.respond()) {
              smoothT.checked !== INITIAL_VALUES.fontSmooth ? smoothT.click() : debug("\u27A4 <fontSmooth> NOT MODIFIED");
              ffaceT.checked !== INITIAL_VALUES.fontFace ? ffaceT.click() : debug("\u27A4 <fontFace> NOT MODIFIED");
              CONST_VALUES.fontSelect.split(",")[0] !== INITIAL_VALUES.fontSelect.split(",")[0] ? fontSet().fresetList(fontData) : fontSet().fdeleteList(fontData);
              if (defCon.isFontsize) {
                zoom.value = INITIAL_VALUES.fontSize === 1 ? "OFF" : INITIAL_VALUES.fontSize.toFixed(3);
                zoom._value_ = INITIAL_VALUES.fontSize;
                setSliderProperty(drawZoom, INITIAL_VALUES.fontSize, 3);
                defCon.tZoom = INITIAL_VALUES.fontSize;
              }
              stroke.value = INITIAL_VALUES.fontStroke === 0 ? "OFF" : INITIAL_VALUES.fontStroke.toFixed(3);
              stroke._value_ = INITIAL_VALUES.fontStroke;
              setSliderProperty(drawStrock, INITIAL_VALUES.fontStroke, 3);
              if (IS_REAL_BLINK) {
                fixStrokeT.checked !== INITIAL_VALUES.fixStroke ? fixStrokeT.click() : debug("\u27A4 <fixStroke> NOT MODIFIED");
                qS(`#${defCon.id.fstroke}`).style.visibility = stroke.value === "OFF" ? "hidden" : "visible";
              }
              shadows.value = INITIAL_VALUES.fontShadow === 0 ? "OFF" : INITIAL_VALUES.fontShadow.toFixed(2);
              shadows._value_ = INITIAL_VALUES.fontShadow;
              setSliderProperty(drawShadow, INITIAL_VALUES.fontShadow, 2);
              qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
              colorPicker.fromString(INITIAL_VALUES.shadowColor);
              colorshow.value = INITIAL_VALUES.shadowColor;
              colorshow._value_ = INITIAL_VALUES.shadowColor;
              fontCssT.value = INITIAL_VALUES.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, defCon.values, fontCssT, submitButton);
              fontExT.value = INITIAL_VALUES.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, defCon.values, fontExT, submitButton);
              await getCurrentFontName(ffaceT.checked, defCon.refont, DEFAULT_FONT);
              sleep(120).then((submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`)) => {
                submitPreview && submitPreview.click();
              });
            } else {
              smoothT.checked !== CONST_VALUES.fontSmooth ? smoothT.click() : debug("\u27A4 <fontSmooth> NOT MODIFIED");
              ffaceT.checked !== CONST_VALUES.fontFace ? ffaceT.click() : debug("\u27A4 <fontFace> NOT MODIFIED");
              fontSet().fdeleteList(fontData);
              if (defCon.isFontsize) {
                zoom.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
                zoom._value_ = CONST_VALUES.fontSize;
                setSliderProperty(drawZoom, CONST_VALUES.fontSize, 3);
                defCon.oZoom.push(CONST_VALUES.fontSize);
                defCon.tZoom = CONST_VALUES.fontSize;
              }
              stroke.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
              stroke._value_ = CONST_VALUES.fontStroke;
              setSliderProperty(drawStrock, CONST_VALUES.fontStroke, 3);
              if (IS_REAL_BLINK) {
                fixStrokeT.checked !== CONST_VALUES.fixStroke ? fixStrokeT.click() : debug("\u27A4 <fixStroke> NOT MODIFIED");
                qS(`#${defCon.id.fstroke}`).style.visibility = stroke.value === "OFF" ? "hidden" : "visible";
              }
              shadows.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
              shadows._value_ = CONST_VALUES.fontShadow;
              setSliderProperty(drawShadow, CONST_VALUES.fontShadow, 2);
              qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
              colorPicker.fromString(CONST_VALUES.shadowColor);
              colorshow.value = CONST_VALUES.shadowColor === "#FFFFFFFF" ? "currentcolor" : colorPicker.toHEXAString();
              colorshow._value_ = colorshow.value;
              fontCssT.value = CONST_VALUES.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, defCon.values, fontCssT, submitButton);
              fontExT.value = CONST_VALUES.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, defCon.values, fontExT, submitButton);
              await getCurrentFontName(ffaceT.checked, defCon.refont, DEFAULT_FONT);
              loadPreview(defCon.preview);
              setAutoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
              abortController(defCon.tZoom);
            }
            frDialog = null;
          });

          qS(`#${defCon.id.submit} .${defCon.class.submit}`).addEventListener("click", async function () {
            const fontlists = fontSet().fsearchList(`${defCon.id.fontName}`);
            const reconstruct_fontselect = String([...new Set(CONST_VALUES.fontSelect.split(",").concat(INITIAL_VALUES.fontSelect.split(",")).slice(0))]);
            const fontselect = fontlists.length > 0 ? addSingleQuoteToArray(fontlists) : filter_MicrosoftYaHei("", reconstruct_fontselect);
            const fontface = ffaceT.checked;
            const smooth = smoothT.checked;
            const prefzoom = !defCon.isFontsize ? 1 : /^[0-1](\.[0-9]{1,3})?$/.test(zoom.value) ? zoom.value : INITIAL_VALUES.fontSize;
            const fzoom = EXCLUDES_EDITORIAL_SITES ? 1 : prefzoom < 0.8 ? 0.8 : prefzoom > 1.5 ? 1.5 : Number(prefzoom);
            const fstroke = /^[0-1](\.[0-9]{1,3})?$/.test(stroke.value) ? stroke.value : stroke.value === "OFF" ? 0 : INITIAL_VALUES.fontStroke;
            const fixfstroke = !IS_REAL_BLINK ? false : fstroke === 0 ? false : fixStrokeT.checked;
            const fshadow = /^[0-8](\.[0-9]{1,2})?$/.test(shadows.value) ? shadows.value : shadows.value === "OFF" ? 0 : INITIAL_VALUES.fontShadow;
            const pickedcolor = colorshow.value;
            const fscolor = colorReg.test(pickedcolor) ? (pickedcolor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : pickedcolor) : INITIAL_VALUES.shadowColor;
            const fcss = fontCssT.value;
            const cssfun = fcss ? fcss.replace(/"|`/g, "'") : INITIAL_VALUES.fontCSS;
            const fex = fontExT.value;
            const fontex = fex ? fex.replace(/"|`/g, "'") : "";
            if (defCon.isPreview && this.getAttribute("v-Preview")) {
              try {
                const _zeroConfigure = !fontface && !smooth && !fshadow && !fstroke && fzoom === 1;
                const _bodyzoom = !defCon.isFontsize ? "" : fzoom >= 0.8 && fzoom <= 1.5 && fzoom !== 1 ? funcFontsize(fzoom) : "";
                const _shadow = fshadow > 0 && fshadow <= 8 ? overlayColor(fshadow, fscolor) : "";
                const _stroke = fstroke > 0 && fstroke <= 1.0 ? `-webkit-text-stroke:${fstroke}px currentcolor;` : "";
                const _smoothing = smooth ? funcSmooth : "";
                const _textrender = smooth ? "text-rendering:optimizeLegibility!important;" : "";
                const _fontfamily = fontface ? `font-family:${fontselect};` : "";
                const _prefont = fontselect.split(",")[0];
                const _refont = _prefont.replace(/"|'/g, "");
                const _fontfaces = !fontface ? "" : _refont ? await funcFontface(_refont) : "";
                const _exclude = !fontex || (!fshadow && !fstroke) ? `` : `${filterHtmlToText(fontex)}{-webkit-text-stroke:initial!important;text-shadow:none!important}`;
                const _codeFont = !fontex || _zeroConfigure ? `` : funcCodefont(fontex, fontface, fontselect);
                const _fixfontstroke = fixfstroke ? "[fr-fix-stroke]{-webkit-text-stroke:initial!important}" : "";
                const _tshadow = `${_fontfaces}${_bodyzoom}`.concat(
                  `${filterHtmlToText(cssfun)}{${_fontfamily}${_shadow}${_stroke}${_smoothing}${_textrender}}`,
                  `${_exclude}${_codeFont}${_fixfontstroke}`
                );
                const __tshadow = `@charset "UTF-8";${!_zeroConfigure ? _tshadow : ""}`;
                defCon.oZoom.push(fzoom);
                defCon.tZoom = fzoom;
                this.textContent = "\u4fdd\u5b58";
                this.removeAttribute("style");
                this.removeAttribute("v-Preview");
                loadPreview(defCon.isPreview, __tshadow, false);
                await getCurrentFontName(fontface, _refont, DEFAULT_FONT).then(() => {
                  const cl = getBrightness(fscolor.substring(1)) > 182 ? "#333" : "#eee";
                  debug(
                    `%c\u27A4 frColorPicker<Preview>: %c${fscolor}`,
                    `display:inline-block;padding:5px 0`,
                    `display:inline-block;border:1px solid #eee;border-radius:4px;padding:5px 10px;background:${fscolor};color:${cl}`
                  );
                  setAutoZoomFontSize(`#${defCon.id.rndId}`, fzoom);
                  abortController(defCon.tZoom);
                });
                await correctBoldErrorIfStroke(NEED_FIX_STROKE(fixfstroke && fstroke), { logger: false, action: "preview" });
              } catch (e) {
                defCon.errors.push(`[submitPreview]: ${e}`);
                reportErrorToAuthor(defCon.errors);
                error("SubmitPreview:", e.message);
              }
            } else {
              try {
                closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                frDialog = new FrDialogBox({
                  trueButtonText: "保存到全局数据",
                  falseButtonText: "保存到网站数据",
                  neutralButtonText: "取 消",
                  messageText: `<p style="color:darkgreen;font-weight:900">保存到全局数据\uff1a</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p style="color:darkred;font-weight:900">保存到当前网站数据\uff1a<span id="${RANDOM_ID}_a_w_d_l_">[<span style="font-size:12px!important;font-weight:normal;padding:0 2px;margin:0;cursor:pointer;color:#3e3e3e">全部数据列表</span>]</span></p><p style="min-height:22px"><span title="保存到网站数据会自动覆盖之前的数据" style="word-break:break-all;cursor:help;color:indigo" id="${RANDOM_ID}_c_w_d_">为 ${CUR_HOST_NAME} 保存独立的设置数据。</span>`,
                  titleText: "保存设置数据",
                });
                domains = await GMgetValue("_domains_fonts_set_");
                try {
                  domainValue = domains ? [...JSON.parse(defCon.decrypt(domains))] : DEFAULT_ARRAY;
                } catch (e) {
                  error("domainValue.JSON.parse:", e.message);
                  domainValue = DEFAULT_ARRAY;
                }
                const _awdl = qS(`#${RANDOM_ID}_a_w_d_l_`);
                if (_awdl) {
                  if (domainValue.length > 0) {
                    _awdl.style.cssText += "display:line-block";
                  } else {
                    _awdl.style.cssText += "display:none";
                  }
                  _awdl.addEventListener("click", async () => {
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    await manageDomainsList();
                  });
                }
                domainValueIndex = updateDomainsIndex(domainValue);
                if (typeof domainValueIndex !== "undefined" && qS(`#${RANDOM_ID}_c_w_d_`)) {
                  const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValue[domainValueIndex].fontDate));
                  qS(`#${RANDOM_ID}_c_w_d_`).innerHTML = trustedTypesPolicy.createHTML(
                    String(
                      `<p style="height:30px;display:flex;align-items:center"><span style="color:indigo"><strong>上次保存\uff1a</strong>${fontDate} </span><button id="${RANDOM_ID}_c_w_d_d_" style="box-sizing:border-box;padding:3px 5px;margin-left:15px;cursor:pointer;color:#333!important;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;max-width:120px;height:max-content;min-height:30px;background-color:#eee;letter-spacing:normal" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                    )
                  );
                  qS(`#${RANDOM_ID}_c_w_d_d_`).addEventListener("click", async () => {
                    domainValue.splice(domainValueIndex, 1);
                    saveData("_domains_fonts_set_", domainValue);
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    frDialog = new FrDialogBox({
                      trueButtonText: "感谢使用",
                      messageText: `<p style="color:darkred">当前网站的个性化数据已成功删除\uff01</p><p>当前页面将在您确认后自动刷新。</p>`,
                      titleText: "个性化数据删除",
                    });
                    if (await frDialog.respond()) {
                      closeConfigurePage({ isReload: true });
                    }
                    frDialog = null;
                  });
                }
                if (await frDialog.respond()) {
                  saveData("_fonts_set_", {
                    fontSelect: filterHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstroke),
                    fixStroke: Boolean(fixfstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtmlToText(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtmlToText(cssfun),
                    fontEx: filterHtmlToText(fontex),
                  });
                  defCon.successId = true;
                } else {
                  const _savedata_ = {
                    domain: CUR_HOST_NAME,
                    fontDate: Date.now(),
                    fontSelect: filterHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstroke),
                    fixStroke: Boolean(fixfstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtmlToText(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtmlToText(cssfun),
                    fontEx: filterHtmlToText(fontex),
                  };
                  domains = await GMgetValue("_domains_fonts_set_");
                  try {
                    domainValue = domains ? [...JSON.parse(defCon.decrypt(domains))] : DEFAULT_ARRAY;
                  } catch (e) {
                    error("domainValue.JSON.parse:", e.message);
                    domainValue = DEFAULT_ARRAY;
                  }
                  domainValueIndex = updateDomainsIndex(domainValue);
                  if (typeof domainValueIndex !== "undefined") {
                    domainValue.splice(domainValueIndex, 1, _savedata_);
                  } else {
                    domainValue.push(_savedata_);
                  }
                  if (domainValue.length <= maxPersonalSites || typeof domainValueIndex !== "undefined") {
                    saveData("_domains_fonts_set_", domainValue);
                    defCon.successId = true;
                  } else {
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    frDialog = new FrDialogBox({
                      trueButtonText: "依然保存",
                      falseButtonText: "管理列表",
                      neutralButtonText: "我放弃",
                      messageText: `<p style="color:gray">您已经保存超过<span style="font-size:20px;font-weight:700;font-style:italic;color:crimson">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p style="color:crimson">您确认要继续保存吗？</p>`,
                      titleText: "数据过多的提示",
                    });
                    if (await frDialog.respond()) {
                      saveData("_domains_fonts_set_", domainValue);
                      defCon.successId = true;
                    } else {
                      await manageDomainsList();
                      defCon.successId = false;
                    }
                    frDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                defCon.errors.push(`[submitData]: ${e}`);
                reportErrorToAuthor(defCon.errors, true);
                error("SubmitData:", e.message);
                defCon.successId = false;
              } finally {
                if (defCon.successId) {
                  closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                  frDialog = new FrDialogBox({
                    trueButtonText: "感谢使用",
                    messageText: `<p style="color:darkgreen">您设置的字体渲染数据已成功保存\uff01</p><p>当前页面将在您确认后自动刷新。</p>`,
                    titleText: "字体渲染数据保存",
                  });
                  if (await frDialog.respond()) {
                    closeConfigurePage({ isReload: true });
                  }
                  frDialog = null;
                }
              }
            }
          });
          loadBackupData(isBackupFunction, DEFAULT_ARRAY);
          qS(`#${defCon.id.submit} .${defCon.class.cancel}`).addEventListener("click", () => {
            closeConfigurePage({ isReload: false });
          });
        }
      } catch (e) {
        defCon.errors.push(`[operateConfigure]: ${e}`);
        error("OperateConfigure:", e.message);
      }
    }

    function closeConfigurePage({ isReload }) {
      if (qS(`#${defCon.id.container}`)) {
        qS(`#${defCon.id.container}`).style.opacity = 0;
        sleep(500)(qS("fr-configure")).then(r => {
          r && r.remove();
        });
        qS("fr-colorpicker") && qS("fr-colorpicker").remove();
        if (isReload === false && defCon.preview) {
          defCon.oZoom.push(CONST_VALUES.fontSize);
          defCon.tZoom = CONST_VALUES.fontSize;
          loadPreview(defCon.isPreview);
          abortController(defCon.tZoom);
        }
      }
      closeAllFrDialogBox("fr-dialogbox");
      isReload === true && location.reload();
    }

    async function getCurrentFontName(_isfontface_, refont, def) {
      const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
      reFontFace = def;
      defCon.curFont = def;
      if (_isfontface_) {
        const fontCheckList = await getMergedFontCheckList();
        for (let i = 0; i < fontCheckList.length; i++) {
          if (fontCheckList[i].en === refont || convertToUnicode(fontCheckList[i].ch) === refont) {
            defCon.curFont = refont.includes("\\") ? "" : " (" + fontCheckList[i].en + ")";
            reFontFace = fontCheckList[i].ch + defCon.curFont;
            defCon.curFont = fontCheckList[i].ch;
            break;
          }
        }
      }
      if (inputFont) {
        inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
        inputFont.addEventListener("mouseover", () => {
          inputFont.setAttribute("placeholder", `\u8f93\u5165\u5173\u952e\u5b57\u53ef\u68c0\u7d22\u5b57\u4f53`);
        });
        inputFont.addEventListener("mouseout", () => {
          inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
        });
      }
    }

    function loadBackupData(convertejsondatatosqlite, def) {
      const backupT = qS(`#${defCon.id.backup}`);
      if (convertejsondatatosqlite && backupT) {
        backupT.style.display = "inline-block";
        backupT.addEventListener("click", async () => {
          try {
            closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
            frDialog = new FrDialogBox({
              trueButtonText: "备 份",
              falseButtonText: "还 原",
              neutralButtonText: "取 消",
              messageText: `<p style="color:darkgreen;font-weight:900">备份到本地文件\uff1a</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p style="color:darkred;font-weight:900">从本地文件还原\uff1a</p><p><span style="cursor:pointer;color:indigo" id="${defCon.id.tfiles}">\ud83d\udd0e\u0020[点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${defCon.id.files}"/></p>`,
              titleText: "备份与还原数据",
            });
            const tfs = qS(`#${defCon.id.tfiles}`);
            const fs = qS(`#${defCon.id.files}`);
            if (tfs && fs) {
              tfs.addEventListener("click", () => {
                fs.click();
              });
              fs.addEventListener("change", () => {
                tfs.innerHTML = trustedTypesPolicy.createHTML(
                  fs.files[0]
                    ? `<em style="word-break:break-all;color:indigo;font-size:12px!important">${fs.files[0].name}</em><br/><span style="color:crimson">\u0020\ud83d\udd0e\u0020[重新选择]</span>`
                    : `\ud83d\udd0e\u0020[点击这里载入*.sqlitedb备份文件]`
                );
              });
            }
            if (await frDialog.respond()) {
              const _fonts_Set_ = await GMgetValue("_fonts_set_");
              const _exclude_Site_ = await GMgetValue("_Exclude_site_");
              const _domains_Fonts_Set_ = await GMgetValue("_domains_fonts_set_");
              const _domains_Fonts_Set__ = _domains_Fonts_Set_ || defCon.encrypt(JSON.stringify(def));
              const _custom_Fontlist_ = await GMgetValue("_Custom_fontlist_");
              const _custom_Fontlist__ = _custom_Fontlist_ || defCon.encrypt(JSON.stringify(def));
              const _monospaced_Fontlist_ = await GMgetValue("_monospaced_fontlist_");
              const _monospaced_Fontlist__ = _monospaced_Fontlist_ || "";
              const _configure_ = await GMgetValue("_configure_");
              const db_R = "QXV0aGVyJUUyJTlBJUExRjl5NG5nJUYwJTlGJTkyJTk2JTQw".concat(defCon.encrypt(defCon.scriptName));
              const db_0 = defCon.encrypt(String(new Date()));
              const db_1 = _fonts_Set_;
              const db_2 = _exclude_Site_;
              const db_3 = _domains_Fonts_Set__;
              const db_4 = _custom_Fontlist__;
              const db_5 = _configure_;
              const db_6 = _monospaced_Fontlist__;
              const db = { db_R, db_0, db_1, db_2, db_3, db_4, db_5, db_6 };
              const via = `${getNavigator.browser().toLowerCase()}`;
              const timeStamp = setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date());
              const _fileName_ = `FontRendering-backup-${via}-${timeStamp}.sqlitedb`;
              dataDownload(_fileName_, defCon.sqliteDB(JSON.stringify(db), 22, ROOT_SECRET_KEY));
              closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
              frDialog = new FrDialogBox({
                trueButtonText: "确 定",
                messageText: `<p style="color:darkgreen">备份数据已归档，备份文件导出下载中……</p><p style="word-break:break-all;color:darkred;font-style:italic;font-size:12px!important">${_fileName_}</p>`,
                titleText: "数据备份",
              });
              if (await frDialog.respond()) {
                debug(`\u27A4 Backup succeeded: ${_fileName_}`);
              }
              frDialog = null;
            } else {
              try {
                const thatFile = fs.files[0];
                debug(`\u27A4 loadBackupData:`, thatFile.name, thatFile.size);
                let reader = new FileReader();
                reader.readAsText(thatFile);
                reader.onload = async function () {
                  try {
                    const _file = defCon.decrypt(String(this.result));
                    const _rs = JSON.parse(defCon.sqliteDB(_file, null, ROOT_SECRET_KEY));
                    const _data_R = defCon.decrypt(_rs.db_R);
                    const _data_0 = defCon.decrypt(_rs.db_0);
                    const _data_1 = JSON.parse(defCon.decrypt(_rs.db_1));
                    const _data_2 = JSON.parse(defCon.decrypt(_rs.db_2));
                    const _data_3 = _rs.db_3 ? JSON.parse(defCon.decrypt(_rs.db_3)) : def;
                    const _data_4 = _rs.db_4 ? JSON.parse(defCon.decrypt(_rs.db_4)) : def;
                    const _data_5 = _rs.db_5 ? JSON.parse(defCon.decrypt(_rs.db_5)) : undefined;
                    const _data_6 = _rs.db_6 ? JSON.parse(defCon.decrypt(_rs.db_6)) : undefined;
                    if (!isNaN(Date.parse(_data_0)) && new Date(_data_0) <= new Date() && _data_R.includes(SCRIPT_AUTHOR)) {
                      saveData("_fonts_set_", _data_1);
                      saveData("_Exclude_site_", _data_2);
                      saveData("_domains_fonts_set_", _data_3);
                      saveData("_Custom_fontlist_", _data_4);
                      _data_6 ? saveData("_monospaced_fontlist_", _data_6) : GMdeleteValue("_monospaced_fontlist_");
                      if (_data_5) {
                        _data_5.curVersion = defCon.curVersion;
                        _data_5.rebuild = undefined;
                        saveData("_configure_", _data_5);
                      } else {
                        debug("\u27A4 no configure data");
                      }
                      closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                      frDialog = new FrDialogBox({
                        trueButtonText: "确 定",
                        messageText: `<p style="color:darkgreen">本地备份数据还原完毕\uff01</p><p>当前页面将在您确认后自动刷新。</p>`,
                        titleText: "数据还原成功",
                      });
                      if (await frDialog.respond()) {
                        closeConfigurePage({ isReload: true });
                      }
                      frDialog = null;
                    } else {
                      throw new Error("Invalid Data Error");
                    }
                  } catch (e) {
                    error("FileReader.onload:", e.message);
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:red">数据校验错误，请选择正确的本地备份文件\uff01</p>`,
                      titleText: "数据文件错误",
                    });
                    if (await frDialog.respond()) {
                      qS(`#${defCon.id.backup}`).click();
                    }
                    frDialog = null;
                  }
                };
                reader = null;
              } catch (e) {
                error("<thatFile is null>", e.name);
                closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                frDialog = new FrDialogBox({
                  trueButtonText: "确 定",
                  messageText: `<p style="color:indigo">载入文件为空，请选择要还原的备份文件\uff01</p>`,
                  titleText: "没有文件载入",
                });
                if (await frDialog.respond()) {
                  qS(`#${defCon.id.backup}`).click();
                }
                frDialog = null;
              }
            }
            frDialog = null;
          } catch (e) {
            defCon.errors.push(`[loadBackupData]: ${e}`);
            reportErrorToAuthor(defCon.errors);
            error("LoadBackupData:", e.message);
          }
        });
      }
    }

    function copyToClipboard(text) {
      const handler = event => {
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
        document.removeEventListener("copy", handler, true);
      };
      document.addEventListener("copy", handler, true);
      document.execCommand("copy");
    }

    function expandOrCollapse(a, b, c) {
      if (a && b && c) {
        const at = a.attributes["data-switch"];
        a.addEventListener("click", () => {
          if (at.value === "ON") {
            b.style = "display:none";
            a.textContent = "\u2228";
            c.style.cssText += `height:35px;min-height:35px`;
            at.value = "OFF";
          } else {
            b.style = "display:block";
            a.textContent = "\u2227";
            c.style.cssText += `height:110px;min-height:110px`;
            at.value = "ON";
          }
        });
      }
    }

    function rangeSliderWidget(linstener, target, m, g = false) {
      linstener.addEventListener("input", function () {
        setSliderProperty(this, this.value, m);
        target.value = Number(this.value) === (g ? 1 : 0) ? "OFF" : Number(this.value).toFixed(m);
        target._value_ = Number(this.value).toFixed(m);
        switch (linstener.id) {
          case defCon.id.shadow:
            qS(`#${defCon.id.shadowColor}`).style.setProperty("display", target.value === "OFF" ? "none" : "flex");
            break;
          case defCon.id.stroke:
            IS_REAL_BLINK && qS(`#${defCon.id.fstroke}`).style.setProperty("visibility", target.value === "OFF" ? "hidden" : "visible");
            break;
        }
      });
    }

    function saveChangeStatus(t, e, d, v, g = false) {
      try {
        if (t && d) {
          if (t.type !== "text") {
            const method = t.type === "textarea" ? "input" : "change";
            t.addEventListener(method, () => {
              const value = t.type === "checkbox" ? t.checked : t.value;
              setEffectIntoSubmit(value, e, v, t, d);
            });
          } else {
            Object.defineProperty(t, "_value_", {
              enumerable: true,
              configurable: true,
              get: function () {
                return this.value;
              },
              set: newVal => {
                deBounce(setEffectIntoSubmit, 100, t.id, false)(newVal, e, v, t, d, g);
              },
            });
          }
        }
      } catch (exp) {
        defCon.errors.push(`[saveChangeStatus]: ${exp}`);
        error("SaveChangeStatus:", exp);
      }
    }

    function setEffectIntoSubmit(value, e, v, t, d, h = false) {
      try {
        const _thatoffvalue = h ? 1 : 0;
        const _value =
          typeof t.attributes.v !== "undefined"
            ? value === "OFF"
              ? _thatoffvalue
              : Number(value)
            : typeof value === "string" && value.toLowerCase() === "currentcolor"
            ? "#FFFFFFFF"
            : value;
        if (_value !== e) {
          !v.includes(t.id) && v.push(t.id);
          if (defCon.isPreview) {
            d.textContent = "\u9884\u89c8";
            d.setAttribute("style", "background-color:coral!important;border-color:coral!important");
            d.setAttribute("v-Preview", "true");
          }
        } else {
          for (let i = v.length - 1; i >= 0; i--) {
            if (v[i] === t.id) {
              v.splice(i, 1);
              break;
            }
          }
        }
        defCon.values = v;
        if (defCon.values.length > 0) {
          debug("\u27A4 changed Element IDs:\n", defCon.values);
          if (!d.classList.contains(`${defCon.class.anim}`)) {
            d.classList.add(`${defCon.class.anim}`);
          }
          if (!defCon.values.includes(t.id) && defCon.isPreview) {
            d.textContent = "\u9884\u89c8";
            d.setAttribute("style", "background-color:coral!important;border-color:coral!important");
            d.setAttribute("v-Preview", "true");
          }
        } else {
          if (d.classList.contains(`${defCon.class.anim}`)) {
            d.classList.remove(`${defCon.class.anim}`);
          }
          if (defCon.isPreview) {
            d.textContent = "\u4fdd\u5b58";
            d.removeAttribute("style");
            d.removeAttribute("v-Preview");
            loadPreview(defCon.preview);
            defCon.tZoom = CONST_VALUES.fontSize;
            setAutoZoomFontSize(`#${defCon.id.rndId}`, CONST_VALUES.fontSize);
          }
        }
      } catch (exp) {
        error("SetEffectIntoSubmit:", exp);
      }
    }

    async function manageDomainsList() {
      let domains, domainValue, domainValueIndex;
      let _temp_ = [];
      let Contents = "";
      try {
        domains = await GMgetValue("_domains_fonts_set_");
        try {
          domainValue = domains ? [...JSON.parse(defCon.decrypt(domains))] : DEFAULT_ARRAY;
        } catch (e) {
          error("domainValue.JSON.parse:", e.message);
          domainValue = DEFAULT_ARRAY;
        }
        const _data_search_ =
          domainValue.length > 6
            ? `<p style="display:flex;justify-content:left;align-items:center"><input id="${RANDOM_ID}_d_s_" style="box-sizing:content-box;width:57%;height:22px;font:normal 16px/150% monospace,Consolas,system-ui,-apple-system,BlinkMacSystemFont,serif!important;border:2px solid #777;border-radius:4px;outline:none!important;margin:4px 6px;padding:2px 6px"><button id="${RANDOM_ID}_d_s_s_" style="box-sizing:border-box;background:#eee;color:#333!important;vertical-align:initial;padding:3px 10px;margin:0;cursor:pointer;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;height:max-content;min-width:60px;min-height:30px;letter-spacing:normal;text-align:center">查 询</button><button id="${RANDOM_ID}_d_s_c_" style="box-sizing:border-box;background:#eee;color:#333!important;vertical-align:initial;margin:0 0 0 4px;padding:3px 10px;cursor:pointer;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;height:max-content;min-width:60px;min-height:30px;letter-spacing:normal;text-align:center">清 除</button></p>`
            : ``;
        for (let i = 0; i < domainValue.length; i++) {
          Contents += String(
            `<li id="${RANDOM_ID}_d_d_l_${i}"
              style="margin:0;padding:5px;list-style:none;-webkit-user-select:text!important;user-select:text!important;font:normal 400 14px/150% 'Microsoft YaHei UI',system-ui,-apple-system,sans-serif!important;color:#555;display:flex;justify-content:space-between;white-space:nowrap;max-width:364px;overflow:hidden">
              <span>
                [<a id="${RANDOM_ID}_d_d_l_s_${i}" style="display:inline;padding:2px;cursor:pointer;color:darkred;background:transparent;font-size:14px!important">删除</a>]
                <span>${i + 1 > 9 ? i + 1 : "0".concat(i + 1)}.</span>
              </span>
              <span style="font-weight:900;margin-left:5px">${filterHtmlToText(domainValue[i].domain)}</span>
              <span style="margin:0 5px">${setDateFormat("yyyy/MM/dd HH:mm:ss", new Date(domainValue[i].fontDate))}</span>
            </li>`
          );
        }
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        frDialog = new FrDialogBox({
          trueButtonText: "确认操作，保存数据",
          neutralButtonText: "取 消",
          messageText: `<p style="font-size:14px!important;text-indent:6px!important;color:darkred">请谨慎操作，保存后生效，已删除的数据将不可恢复\uff01</p>${_data_search_}<ul id="${RANDOM_ID}_d_d_" style="margin:0!important;padding:0!important;list-style:none!important;max-height:190px;overflow-x:hidden;overscroll-behavior:contain">${Contents}</ul>`,
          titleText: "网站个性化设置数据列表\uff1a",
        });
        if (qS(`#${RANDOM_ID}_d_s_`) && qS(`#${RANDOM_ID}_d_s_c_`) && qS(`#${RANDOM_ID}_d_s_s_`)) {
          qS(`#${RANDOM_ID}_d_s_`).addEventListener("keydown", e => {
            if (e.keyCode === 13) {
              e.preventDefault();
              qS(`#${RANDOM_ID}_d_s_s_`).click();
            }
          });
          qS(`#${RANDOM_ID}_d_s_`).addEventListener("input", () => {
            qS(`#${RANDOM_ID}_d_s_`).value = qS(`#${RANDOM_ID}_d_s_`).value.replace(/[^a-z0-9.-]/gi, "");
          });
          qS(`#${RANDOM_ID}_d_s_c_`).addEventListener("click", () => {
            qS(`#${RANDOM_ID}_d_s_`).value = "";
            qS(`#${RANDOM_ID}_d_s_`).style.cssText += "border-color:#777";
            qS(`#${RANDOM_ID}_d_d_`).scrollTop = 0;
            qS(`#${RANDOM_ID}_d_s_`).focus();
          });
          qS(`#${RANDOM_ID}_d_d_`).addEventListener("click", () => {
            qS(`#${RANDOM_ID}_d_s_`).focus();
          });
          qS(`#${RANDOM_ID}_d_s_s_`).addEventListener("click", () => {
            if (qS(`#${RANDOM_ID}_d_s_`).value) {
              if (window.find) {
                qS(`#${RANDOM_ID}_d_s_`).style.cssText += window.find(qS(`#${RANDOM_ID}_d_s_`).value, 0) ? "border-color:#777" : "border-color:red";
                if (window.getSelection) {
                  const _sTxt = window.getSelection();
                  const _sNode = _sTxt.anchorNode && _sTxt.anchorNode.parentNode && _sTxt.anchorNode.parentNode.parentNode;
                  const _rows = Number(_sNode && _sNode.id.replace(`${RANDOM_ID}_d_d_l_`, "")) || 0;
                  const _offsetHeight = Number(_sTxt.anchorNode.parentNode.parentNode.offsetHeight) || 0;
                  qS(`#${RANDOM_ID}_d_d_`).scrollTop = _rows * _offsetHeight;
                }
              }
            }
          });
        }
        const items = qA(`#${RANDOM_ID}_d_d_ li span>a[id^="${RANDOM_ID}_d_d_l_s_"]`);
        for (let j = 0; j < items.length; j++) {
          items[j].addEventListener(
            "click",
            function (a, b) {
              if (!this.getAttribute("data-del")) {
                const _list_Id_ = Number(this && this.id.replace(`${RANDOM_ID}_d_d_l_s_`, "")) || 0;
                a.push(b[_list_Id_].domain);
                this.setAttribute("data-del", b[_list_Id_].domain);
                this.textContent = "恢复";
                this.style.cssText += "color:darkgreen";
                this.parentNode.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
                this.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
              } else {
                a.splice(a.indexOf(this.getAttribute("data-del")), 1);
                this.removeAttribute("data-del");
                this.textContent = "删除";
                this.style.cssText += "color:darkred";
                this.parentNode.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
                this.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
              }
            }.bind(items[j], _temp_, domainValue)
          );
        }
        if (await frDialog.respond()) {
          domains = await GMgetValue("_domains_fonts_set_");
          try {
            domainValue = domains ? [...JSON.parse(defCon.decrypt(domains))] : DEFAULT_ARRAY;
          } catch (e) {
            error("domainValue.JSON.parse:", e.message);
            domainValue = DEFAULT_ARRAY;
          }
          for (let l = _temp_.length - 1; l >= 0; l--) {
            domainValueIndex = updateDomainsIndex(domainValue, _temp_[l]);
            domainValue.splice(domainValueIndex, 1);
            if (_temp_[l] === CUR_HOST_NAME) {
              defCon.equal = true;
            }
          }
          saveData("_domains_fonts_set_", domainValue);
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
          frDialog = new FrDialogBox({
            trueButtonText: "感谢使用",
            messageText: String(
              `<p style="color:darkgreen">网站个性化设置数据已成功保存\uff01</p><p>${
                defCon.equal ? "当前网站数据有变动，页面将在您确认后自动刷新。" : "提示：您可继续留在当前页面进行其他操作。"
              }</p>`
            ),
            titleText: "个性化数据保存",
          });
          if (await frDialog.respond()) {
            closeConfigurePage({ isReload: !!defCon.equal });
          }
          frDialog = null;
        }
        frDialog = null;
      } catch (e) {
        defCon.errors.push(`[manageDomainsList]: ${e}`);
        reportErrorToAuthor(defCon.errors);
        error("ManageDomainsList:", e.message);
      }
    }

    function reportErrorToAuthor(e, show = IS_OPEN_DEBUG) {
      if (show) {
        closeConfigurePage({ isReload: false });
        sleep(Math.floor(Math.random() * 2e3))("").then(async errors => {
          try {
            if (!qS("fr-dialogbox[error]")) {
              const br = e.length > 1 ? "\u3000<br/>" : "";
              for (let i in e) {
                if (oH.call(e, i)) {
                  errors += e[i] + br;
                }
              }
              frDialog = new FrDialogBox({
                trueButtonText: "反馈问题",
                falseButtonText: "刷新页面",
                messageText: String(
                  `<p style="font-size:14px!important;color:crimson">脚本在运行时发生了重大异常或错误，若在『刷新页面』后依然报错，请通过『反馈问题』及时告知作者，感谢您的反馈\uff01<br/><kbd style="display:inline-block;padding:3px 10px;font-size:14px!important;margin:4px 0 0 0;color:#666666;vertical-align:middle;background-color:#f6f8fa;border:solid 1px rgba(175,184,193,0.4);border-radius:6px">以下信息会自动保存至您的剪切板</kbd></p>
                  <p><ul id="${RANDOM_ID}_copy_to_author" style="list-style-position:outside;margin:0!important;padding:0!important;max-height:300px;overflow-y:auto">
                    <li>浏览器信息\uff1a${await getNavigator.getUA()}\u3000</li>
                    <li>脚本扩展信息\uff1a${GMscriptHandler} ${GMversion}\u3000</li>
                    <li>脚本版本信息\uff1a${defCon.curVersion}\u3000</li>
                    <li>当前访问域名\uff1a${CUR_HOST_NAME}\u3000</li>
                    <li>错误信息\uff1a<span style="color:tan">${errors}</span></li>
                  </ul></p>`
                ),
                titleText: defCon.scriptName + "错误报告",
              });
              frDialog.container.setAttribute("error", true);
              const copyText = qS(`#${RANDOM_ID}_copy_to_author`)
                .textContent.replace(/\u3000/g, "\n")
                .replace(/\u0020\u0020/g, "")
                .replace(/\n\n/g, "\n")
                .trim();
              defCon.errors.length = 0;
              if (await frDialog.respond()) {
                copyToClipboard(copyText);
                closeAllFrDialogBox("fr-dialogbox");
                GMopenInTab(FEEDBACK_URI, defCon.options);
              } else {
                location.reload(true);
              }
              frDialog = null;
            }
          } catch (e) {
            error("ReportError:", e.message);
          }
        });
      }
    }

    function setDateFormat(fmt, date) {
      const opt = {
        "y+": date.getFullYear().toString(),
        "M+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "m+": date.getMinutes().toString(),
        "s+": date.getSeconds().toString(),
        "S+": date.getMilliseconds().toString(),
      };
      let ret;
      for (let k in opt) {
        if (oH.call(opt, k)) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
          }
        }
      }
      return fmt;
    }

    function setAutoZoomFontSize(target, zoom) {
      let curZoom = zoom || 1;
      const { oScale, tScale } = getSacleMatrix();
      try {
        if (IS_REAL_GECKO) {
          if (curZoom !== 1) {
            qS(target).style.transformOrigin = "left top";
            qS(target).style.transform = "scale(" + 1 / curZoom + ")";
            qS(target).style.width = "99vw";
            qS(target).style.height = "99vh";
          } else {
            qS(target).removeAttribute("style");
          }
          window.scrollTo(0, (oScale === 1 || tScale === 1) && oScale !== tScale ? 0 : defCon.elCompat.scrollTop * curZoom - 1);
        } else {
          curZoom = Number(cP(document.body, "zoom")) || curZoom;
          if (curZoom !== 1) {
            qS(target).style.cssText += "zoom:" + Number(1 / curZoom);
          } else {
            qS(target).removeAttribute("style");
          }
        }
      } catch (e) {
        defCon.errors.push(`[setAutoZoomFontSize]: ${e}`);
        error("SetAutoZoomFontSize:", e.message);
      } finally {
        if (curZoom !== 1 && defCon.preview && oScale !== tScale) {
          debug(
            "\u27A4 fontSize<Scale>: save [%s%]\n\u3000 \u27A5 current [%c%s% %c%s%]",
            (CONST_VALUES.fontSize * 100).toFixed(2),
            "color:teal;padding:5px 0",
            (curZoom * 100).toFixed(2),
            "color:indigo;padding:5px 0",
            ((1 / curZoom) * 100).toFixed(2)
          );
        }
      }
    }

    function abortController(scale) {
      const { oScale, tScale } = getSacleMatrix();
      if (defCon.isFontsize && IS_REAL_GECKO && scale === 1 && oScale !== tScale) {
        controller.abort();
        while (controller.signal.aborted) {
          debug("\u27A4 Redeploy >> AbortSignal.aborted:%o", controller.signal.aborted);
          controller = new AbortController();
        }
        qA(`[style*="--sticky"],[style*="--fixed"]`).forEach(item => {
          item.style.setProperty("--fixed", "");
          item.style.setProperty("--sticky", "");
          item.style.setProperty("top", "");
        });
      }
    }

    function confirmIfValueChange(target, info, { useGM }) {
      target.addEventListener("change", function () {
        if (this.checked) {
          const rs = useGM ? confirm(info) : isGM ? alert(info) : confirm(info);
          this.checked = !!rs;
        }
      });
    }

    function convertFullToHalf(str) {
      let tmp = "";
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 12288) {
          tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
          continue;
        }
        if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
          tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        } else {
          tmp += String.fromCharCode(str.charCodeAt(i));
        }
      }
      return tmp;
    }

    function filterHtmlToText(html) {
      if (typeof html === "string") {
        html = html.replace(/expression|\\u|`|{|}/gi, "");
        let _tmp = document.createElement("fr-filterhtml");
        _tmp.innerHTML = trustedTypesPolicy.createHTML(html);
        html = _tmp.innerText.trim() || _tmp.textContent.trim() || "";
        while (html.substr(html.length - 1, 1) === ",") {
          html = html.substr(0, html.length - 1).trim();
        }
        _tmp = null;
        return html;
      } else {
        return "";
      }
    }

    function addSingleQuoteToArray(arr) {
      let returnStr = "";
      if (Array.isArray(arr) && arr.length > 0) {
        arr.forEach(item => {
          returnStr += `'${item}',`;
        });
      }
      returnStr = filter_MicrosoftYaHei(returnStr, INITIAL_VALUES.fontSelect);
      return String([...new Set(returnStr.split(",").slice(0))]);
    }

    function filter_MicrosoftYaHei(returnRes, res) {
      let checkFont = new SupportFontFamily();
      if (!checkFont.detect("Microsoft YaHei")) {
        returnRes += res.replace(`'Microsoft YaHei',`, ``);
      } else {
        returnRes += res;
      }
      checkFont = null;
      return returnRes;
    }

    function saveData(key, data) {
      try {
        GMsetValue(key, defCon.encrypt(JSON.stringify(data)));
      } catch (e) {
        error("SaveData:", e.message);
      }
    }
  })();
})();
