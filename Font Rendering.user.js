/* jshint esversion: 9 */
// ==UserScript==
// @name              字体渲染（自用脚本）
// @name:zh           字体渲染（自用脚本）
// @name:zh-TW        字體渲染（自用腳本）
// @name:ja           フォントレンダリング（カスタマイズ）
// @name:en           Font Rendering (Customized)
// @version           2021.09.20.2
// @author            F9y4ng
// @description       无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh    无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh-TW 無需安裝MacType，優化浏覽器字體顯示，讓每個頁面的中文字體變得有質感，默認使用微軟雅黑字體，亦可自定義設置多種中文字體，附加字體描邊、字體重寫、字體陰影、字體平滑、對特殊樣式元素的過濾和許可等效果，腳本菜單中可使用設置界面進行參數設置，亦可對某域名下所有頁面進行排除渲染，兼容常用的Greasemonkey腳本和瀏覽器插件。
// @description:ja    各ページの中国語フォントをテクスチャにしたり、デフォルトでMicrosoft Yabusフォントを使用したり、複数の中国語フォントをカスタマイズしたり、フォントストローク、フォント書き換え、フォントシャドウ、フォントスムージング、特別なスタイル要素のフィルタリングやライセンスなどの効果を追加したり、スクリプトメニューで設定インターフェイスを使用してパラメータ設定を行ったり、ドメイン名の下にあるすべてのページを除外してレンダリングしたり、一般的なGreasemonkeyスクリプトやブラウザプラグインと互換性があります。
// @description:en    Let each page of the Chinese font becomes texture, the default uses Microsoft YaHei font, and you can customize the set of Chinese fonts, additional font strokes, font rewriting, font shadows, smooth, and special Filtering and licensing of style elements, etc., you can use the setting interface to perform parameter settings in the script menu, or you can exclude all pages under a domain name, compatible with common Greasemonkey scripts and browser plugins.
// @namespace       https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon            https://img.icons8.com/ios-filled/50/26e07f/font-style-formatting.png
// @homepageURL     https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL       https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL     https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require         https://greasyfork.org/scripts/432508-powerange/code/Powerange.js?version=971797
// @include         *
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
// @compatible      edge 兼容TamperMonkey, ViolentMonkey
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @license         GPL-3.0-only
// @create          2020-11-24
// @copyright       2020-2021, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  "use strict";

  /* customize */

  const isdebug = false; // set "true" to debug scripts, May cause script response slower.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  let GMsetValue, GMgetValue, GMdeleteValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMopenInTab;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const GMversion = GMinfo.version;
  const isGM = Boolean(handlerInfo.toLowerCase() === "greasemonkey");
  const debug = isdebug ? console.log.bind(console) : () => {};
  const error = isdebug ? console.error.bind(console) : () => {};

  /* GM selector */

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

  /* default CONST Values */

  const defCon = {
    scriptAuthor: GMinfo.scriptMetaStr.match(/(\u0061\u0075\u0074\u0068\u006f\u0072\s+)(\S+)/)[2],
    scriptName: getScriptNameViaLanguage(),
    curVersion: GMinfo.script.version,
    supportURL: GMinfo.script.supportURL,
    Val: [],
    errors: [],
    domainCount: 0,
    successId: false,
    options: isGM ? false : { active: true, insert: true, setParent: true },
    encrypt: n => {
      return window.btoa(encodeURIComponent(n));
    },
    decrypt: n => {
      return decodeURIComponent(window.atob(n));
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
    sqliteDB: (e, t, p, d = "", g = "", o = "") => {
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
    hostname: () => {
      try {
        return top.location.hostname;
      } catch (e) {
        error("\u27A4 hostname:", e.name);
        return location.hostname;
      }
    },
    isWinTop: () => {
      try {
        return window.self === window.top;
      } catch (e) {
        error("\u27A4 isWinTop:", e.name);
        const eI = parent.frames.length > 0;
        return !eI;
      }
    },
  };

  /* Define random aliases */

  defCon.id = {
    rndId: defCon.randString(12, true),
    container: defCon.randString(10, true),
    field: defCon.randString(9, true),
    fontList: defCon.randString(8, true),
    fontFace: defCon.randString(8, true),
    fontSmooth: defCon.randString(8, true),
    fontStroke: defCon.randString(8, true),
    fontShadow: defCon.randString(8, true),
    shadowColor: defCon.randString(8, true),
    fontCSS: defCon.randString(8, true),
    fontEx: defCon.randString(8, true),
    submit: defCon.randString(8, true),
    fface: defCon.randString(6, true),
    smooth: defCon.randString(6, true),
    fontSize: defCon.randString(8, true),
    fontZoom: defCon.randString(6, true),
    zoomSize: defCon.randString(7, true),
    strokeSize: defCon.randString(6, true),
    stroke: defCon.randString(7, true),
    shadowSize: defCon.randString(6, true),
    shadow: defCon.randString(7, true),
    cps: defCon.randString(9, true),
    cpm: defCon.randString(9, true),
    color: defCon.randString(7, true),
    cssfun: defCon.randString(7, true),
    exclude: defCon.randString(7, true),
    selector: defCon.randString(9, true),
    cleaner: defCon.randString(7, true),
    fontName: defCon.randString(6, true),
    cSwitch: defCon.randString(5, true),
    eSwitch: defCon.randString(5, true),
    backup: defCon.randString(6, true),
    files: defCon.randString(5, true),
    tfiles: defCon.randString(5, true),
    db: defCon.randString(12, true),
    bk: defCon.randString(7, true),
    isbackup: defCon.randString(6, true),
    pv: defCon.randString(7, true),
    ispreview: defCon.randString(6, true),
    fs: defCon.randString(7, true),
    isfontsize: defCon.randString(6, true),
    mps: defCon.randString(7, true),
    maxps: defCon.randString(6, true),
    feedback: defCon.randString(6, true),
    seed: defCon.randString(3, true),
    fontTest: defCon.randString(16, true),
    flc: defCon.randString(6, true),
    flcid: defCon.randString(5, true),
  };
  defCon.class = {
    rndClass: defCon.randString(10, true),
    rndStyle: defCon.randString(10, true),
    guide: defCon.randString(5, true),
    title: defCon.randString(7, true),
    help: defCon.randString(5, true),
    rotation: defCon.randString(6, true),
    main: defCon.randString(7, true),
    fontList: defCon.randString(7, true),
    label: defCon.randString(5, true),
    placeholder: defCon.randString(5, true),
    checkbox: defCon.randString(7, true),
    tooltip: defCon.randString(8, true),
    tooltiptext: defCon.randString(9, true),
    ps1: defCon.randString(4, true),
    ps2: defCon.randString(4, true),
    ps3: defCon.randString(4, true),
    ps4: defCon.randString(4, true),
    slider: defCon.randString(7, true),
    colorPicker: defCon.randString(8, true),
    colorPicker2: defCon.randString(8, true),
    readonly: defCon.randString(7, true),
    notreadonly: defCon.randString(7, true),
    reset: defCon.randString(6, true),
    cancel: defCon.randString(6, true),
    submit: defCon.randString(6, true),
    selector: defCon.randString(9, true),
    selectFontId: defCon.randString(8, true),
    close: defCon.randString(6, true),
    cp: defCon.randString(10, true),
    cpcb: defCon.randString(6, true),
    cpcw: defCon.randString(6, true),
    cprbp: defCon.randString(7, true),
    cpg: defCon.randString(7, true),
    cpgc: defCon.randString(6, true),
    cpgb: defCon.randString(6, true),
    cpc: defCon.randString(7, true),
    cprb: defCon.randString(7, true),
    db: defCon.randString(10, true),
    dbbc: defCon.randString(8, true),
    dbb: defCon.randString(7, true),
    dbm: defCon.randString(7, true),
    dbt: defCon.randString(7, true),
    dbbt: defCon.randString(6, true),
    dbbf: defCon.randString(6, true),
    dbbn: defCon.randString(6, true),
    Switch: defCon.randString(5, true),
    anim: defCon.randString(5, true),
  };

  const curHostname = defCon.hostname();
  const curWindowtop = defCon.isWinTop();
  const guideURI = defCon.decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkY0MTY2ODg=");
  const qS = str => {
    return document.querySelector(str);
  };
  const cE = str => {
    return document.createElement(str);
  };

  /* Passive event listeners */

  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
        return supportsPassive;
      },
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
    error("\u27A4 supportsPassive:", e.name);
  }

  /* Initialized important functions */

  function getScriptNameViaLanguage() {
    const language = navigator.browserLanguage || navigator.language;
    const name_i18n = new RegExp(`(@name:${language}\\s+)(\\S+)`);
    const languageString = GMinfo.scriptMetaStr.match(name_i18n);
    if (languageString) {
      return languageString[2];
    } else {
      return GMinfo.script.name;
    }
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

  function addStyle(css, className, addToTarget, T = "T", isReload = false, initType = "text/css", reNew = false) {
    RAFInterval(
      () => {
        try {
          if (typeof addToTarget === "object" && addToTarget) {
            if (isReload === true && addToTarget.querySelector(`.${className}`)) {
              safeRemove(`.${className}`, addToTarget);
              reNew = true;
            } else if (isReload === false && addToTarget.querySelector(`.${className}`)) {
              return true;
            }
            const cssNode = cE("style");
            if (className !== null) {
              cssNode.className = className;
            }
            cssNode.id = T + Date.now().toString().slice(-8);
            cssNode.setAttribute("type", initType);
            cssNode.innerHTML = css;
            addToTarget.appendChild(cssNode);
            if (reNew && addToTarget.querySelector(`.${className}`)) {
              return true;
            }
          }
        } catch (e) {
          error("\u27A4 addStyle", e);
        }
      },
      20,
      true
    );
  }

  function convert2Unicode(str, value = "") {
    for (let i = 0; i < str.length; i++) {
      value += "\\" + ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return value.toUpperCase();
  }

  function safeRemove(s, t) {
    try {
      const removeNodes = t.querySelectorAll(s);
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].remove();
      }
    } catch (e) {
      error("\u27A4 safeRemove:", e);
    }
  }

  function __preview__(_preview_, ts = defCon.tStyle, s = true) {
    try {
      if (_preview_) {
        addStyle(ts, `${defCon.class.rndStyle}`, document.head, "TS", true);
        document.querySelectorAll("iframe").forEach(items => {
          const h = items.contentWindow;
          try {
            const hn = h.location.hostname;
            if (hn === curHostname) {
              const sT = h.document.head.querySelectorAll("style[id^='TS']");
              if (sT.length) {
                addStyle(ts, sT[0].className, h.document.head, "TS", true);
              }
            }
          } catch (e) {
            error("\u27A4 window.frames:", e);
          }
        });
        defCon.preview = !s;
      }
    } catch (e) {
      error("\u27A4 __preview__:", e);
    }
  }

  /* Get elements Positions */

  const Position = {
    getAbsolute: function (reference, target) {
      const result = {
        left: -target.clientLeft,
        top: -target.clientTop,
      };
      let node = target;
      while (node !== reference && node !== document) {
        result.left = result.left + node.offsetLeft + node.clientLeft;
        result.top = result.top + node.offsetTop + node.clientTop;
        node = node.parentNode;
      }
      if (isNaN(reference.scrollLeft)) {
        result.right = document.documentElement.scrollWidth - result.left;
        result.bottom = document.documentElement.scrollHeight - result.top;
      } else {
        result.right = reference.scrollWidth - result.left;
        result.bottom = reference.scrollHeight - result.top;
      }
      return result;
    },

    getViewport: function (target) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
      const windowHeight = window.innerHeight || document.documentElement.offsetHeight;
      const windowWidth = window.innerWidth || document.documentElement.offsetWidth;
      const absolutePosi = this.getAbsolute(document, target);
      const Viewport = {
        left: absolutePosi.left - scrollLeft,
        top: absolutePosi.top - scrollTop,
        right: windowWidth - (absolutePosi.left - scrollLeft),
        bottom: windowHeight - (absolutePosi.top - scrollTop),
      };
      return Viewport;
    },

    isViewport: function (target) {
      const position = this.getViewport(target);
      if (position.left + target.offsetWidth < 0 || position.top + target.offsetHeight < 0) {
        return false;
      }
      if (position.bottom < 0 || position.right < 0) {
        return false;
      }
      return true;
    },
  };

  /* expire for fontlist cache */

  const cache = {
    value: function (data) {
      const exp = 864e5; // 24 hrs
      debug("\u27A4 cache expires define: %s hrs", exp / 36e5);
      return {
        data: data,
        expired: new Date().getTime() + exp,
      };
    },

    set: function (key, options) {
      const obj = defCon.encrypt(JSON.stringify(cache.value(options)));
      localStorage.setItem(key, obj);
    },

    get: function (key) {
      const obj = localStorage.getItem(key);
      if (!obj) {
        return obj;
      } else {
        try {
          const value = JSON.parse(defCon.decrypt(obj));
          const data = value.data;
          const expiredTime = value.expired;
          const curTime = new Date().getTime();
          debug("\u27A4 cache expires remain: %s hrs", ((expiredTime - curTime) / 36e5).toFixed(2));
          if (expiredTime > curTime) {
            if (typeof data === "object") {
              return data;
            } else {
              cache.remove(key);
              return null;
            }
          } else {
            cache.remove(key);
            return null;
          }
        } catch (e) {
          error("\u27A4 cache.get error:", e);
          cache.remove(key);
          return null;
        }
      }
    },

    remove: function (key) {
      localStorage.removeItem(key);
    },
  };

  /* Data download */

  function dataDownload(f, d) {
    let e = cE("a");
    e.setAttribute("href", "data:application/octet-stream;charset=utf-8," + defCon.encrypt(d));
    e.setAttribute("download", f);
    e.style.display = "none";
    document.body.appendChild(e);
    e.click();
    document.body.removeChild(e);
  }

  /* Get browser core & system parameters */

  const getBrowser = {
    type: (info, system = "other", browserArray = {}, browserInfo = "unknow") => {
      const u = navigator.userAgent.toLowerCase();
      switch (info) {
        case "core":
          return {
            Trident: u.includes("trident") || u.includes("compatible"),
            Presto: u.includes("presto") || u.includes("opr"),
            WebKit: u.includes("applewebkit"),
            Gecko: u.includes("gecko") && !u.includes("khtml"),
            EdgeHTML: u.includes("edge"),
          };
        case "system":
          if (/windows|win32|win64|wow32|wow64/g.test(u)) {
            system = "Windows";
          } else if (/macintosh|macintel/g.test(u) || u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            system = "MacOS";
          } else if (/x11/g.test(u)) {
            system = "Linux";
          } else if (/android|adr/g.test(u)) {
            system = "Android";
          } else if (/ios|iphone|ipad|ipod|iwatch/g.test(u)) {
            system = "iOS";
          }
          return system;
        case "browser":
          browserArray = {
            IE: window.ActiveXObject || "ActiveXObject" in window,
            Chromium: u.includes("chromium"),
            Chrome: u.includes("chrome") && !u.includes("edg") && !u.includes("chromium"),
            Firefox: u.includes("firefox") && u.includes("gecko"),
            Opera: u.includes("presto") || u.includes("opr") || u.includes("opera"),
            Safari: u.includes("safari") && !u.includes("chrome"),
            Edge: u.includes("edg"),
            QQBrowser: /qqbrowser/g.test(u),
            Wechat: /micromessenger/g.test(u),
            UCBrowser: /ucbrowser/g.test(u),
            Sougou: /metasr/g.test(u),
            Maxthon: /maxthon/g.test(u),
            CentBrowser: /cent/g.test(u),
          };
          for (let i in browserArray) {
            if (browserArray[i]) {
              browserInfo = i;
            }
          }
          return browserInfo;
        default:
          return u;
      }
    },
  };

  /* Slider Movements init */

  function checkdraw(b, a, c) {
    b.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9.]/, "");
    });
    b.addEventListener("blur", function () {
      const thatValue = this.value === "OFF" ? 0 : Number(this.value);
      if (!c.test(thatValue) || thatValue < a.options.min || thatValue > a.options.max) {
        a.setStart(a.options.start);
      } else {
        a.setStart(thatValue);
      }
    });
  }

  /* Color Picker initialized */

  const addClassName = (node, str) => {
    if (
      node.className.split(" ").filter(s => {
        return s === str;
      }).length === 0
    ) {
      node.className += ` ${str}`;
    }
  };

  const removeClassName = (node, str) => {
    node.className = node.className
      .split(" ")
      .filter(s => {
        return s !== str;
      })
      .join(" ");
  };

  const numberBorder = (num, max, min) => {
    return Math.max(Math.min(num, max), min);
  };

  const rgbToHsb = hex => {
    const hsb = { h: 0, s: 0, b: 0 };
    if (hex.indexOf("#") === 0) {
      hex = hex.substring(1);
    }
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map(s => {
          return s + s;
        })
        .join("");
    }
    if (hex.length !== 6) {
      return false;
    }
    hex = [hex.substr(0, 2), hex.substr(2, 2), hex.substr(4, 2)].map(s => {
      return parseInt(s, 16);
    });
    const rgb = {
      r: hex[0],
      g: hex[1],
      b: hex[2],
    };
    const MAX = Math.max(...hex);
    const MIN = Math.min(...hex);
    if (MAX === MIN) {
      hsb.h = 0;
    } else if (MAX === rgb.r && rgb.g >= rgb.b) {
      hsb.h = (60 * (rgb.g - rgb.b)) / (MAX - MIN) + 0;
    } else if (MAX === rgb.r && rgb.g < rgb.b) {
      hsb.h = (60 * (rgb.g - rgb.b)) / (MAX - MIN) + 360;
    } else if (MAX === rgb.g) {
      hsb.h = (60 * (rgb.b - rgb.r)) / (MAX - MIN) + 120;
    } else if (MAX === rgb.b) {
      hsb.h = (60 * (rgb.r - rgb.g)) / (MAX - MIN) + 240;
    }
    if (MAX === 0) {
      hsb.s = 0;
    } else {
      hsb.s = 1 - MIN / MAX;
    }
    hsb.b = MAX / 255;
    return hsb;
  };

  const heightToRgb = heightPercent => {
    heightPercent = 1 - heightPercent;
    let rgb = { r: undefined, g: undefined, b: undefined };
    const percentInEach = heightPercent * 6;
    return Object.entries(rgb).reduce((lastObj, nowArr, index) => {
      return Object.assign(lastObj, {
        [nowArr[0]]: Math.floor(
          (function () {
            const left = ((index + 1) % 3) * 2;
            const right = left + 2;
            const differenceL = percentInEach - left;
            const differenceR = right - percentInEach;
            if (differenceL >= 0 && differenceR >= 0) {
              return 0;
            }
            const distance = Math.min(Math.abs(differenceL), Math.abs(differenceR), Math.abs(6 - differenceL), Math.abs(6 - differenceR));
            return Math.min(255, 255 * distance);
          })()
        ),
      });
    }, {});
  };

  const heightAddLAndT_ToRGB = (height, left, top) => {
    const rgb = heightToRgb(height);
    for (const key in rgb) {
      rgb[key] = (255 - rgb[key]) * (1 - left) + rgb[key];
      rgb[key] = rgb[key] * (1 - top);
    }
    return rgb;
  };

  const rgbAToHex = (rgba, err) => {
    rgba = rgba.replace(/\s+/g, "");
    const pattern = /^rgba?\((\d+),(\d+),(\d+),?(\d*(\.\d+)?)?\)$/;
    const result = pattern.exec(rgba);
    if (!result) {
      return err;
    }
    const colors = [];
    let alpha, r, g, b;
    if (/^rgba/.test(result[0])) {
      alpha = result[4];
      r = Math.floor(alpha * parseInt(result[1]) + (1 - alpha) * 255);
      g = Math.floor(alpha * parseInt(result[2]) + (1 - alpha) * 255);
      b = Math.floor(alpha * parseInt(result[3]) + (1 - alpha) * 255);
      return String(("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2));
    } else {
      for (let i = 1, len = 3; i <= len; ++i) {
        let str = Number(result[i]).toString(16);
        if (str.length === 1) {
          str = 0 + str;
        }
        colors.push(str);
      }
      rgba = colors.join("");
      return rgba;
    }
  };

  const rgbToHex = rgb => {
    const { r, g, b } = rgb;
    return Math.floor(r).toString(16).padStart(2, "0") + Math.floor(g).toString(16).padStart(2, "0") + Math.floor(b).toString(16).padStart(2, "0");
  };

  const hexToRgb = hex => {
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16),
    };
  };

  class ColorPicker {
    constructor({ dom = cE("div"), value = "FFF", def = "FFF" } = {}) {
      this.dom = dom;
      this.def = def;
      const thisClass = this;
      Array.prototype.forEach.call(this.getDOM().children, node => {
        node.remove();
      });
      addClassName(dom, `${defCon.class.cp}`);

      const rightBar = cE("div");
      rightBar.className = `${defCon.class.cprb}`;
      const rightBarPicker = cE("div");
      rightBarPicker.className = `${defCon.class.cprbp}`;

      rightBar.appendChild(rightBarPicker);

      const gradientColor = cE("div");
      gradientColor.className = `${defCon.class.cpg} ${defCon.class.cpgc}`;
      const gradientBlack = cE("div");
      gradientBlack.className = `${defCon.class.cpg} ${defCon.class.cpgb}`;
      gradientColor.style.background = "linear-gradient(to right,#FFFFFF,#FF0000)";
      const gradientCircle = cE("div");
      gradientCircle.className = `${defCon.class.cpc}`;

      gradientBlack.appendChild(gradientCircle);
      this.getDOM().appendChild(rightBar);
      this.getDOM().appendChild(gradientColor);
      this.getDOM().appendChild(gradientBlack);

      qS(`.${defCon.class.colorPicker2} #${defCon.id.color}`).addEventListener("change", () => {
        let color = qS(`.${defCon.class.colorPicker2} #${defCon.id.color}`).value;
        this.setValue(color, true);
        this.onchange();
        this.updatePicker();
      });

      this.textInput = qS(`.${defCon.class.colorPicker2} #${defCon.id.color}`);
      this._gradientBlack = gradientBlack;
      this._gradientColor = gradientColor;
      this._rightBar = rightBar;
      this._rightBarPicker = rightBarPicker;
      this._colorBlock = qS(`#${defCon.id.cps}`);

      this._gradientCircle = gradientCircle;

      this._height = 0;
      this._mouseX = 0;
      this._mouseY = 0;

      this.setValue(value, true);
      this._lastValue = this.value;
      this._def = this.def.substring(1);
      this.updatePicker();

      const mouseMoveFun = e => {
        window.addEventListener("mouseup", function mouseUpFun() {
          thisClass.getDOM().style.userSelect = "text";
          window.removeEventListener("mousemove", mouseMoveFun);
          window.removeEventListener("mouseup", mouseUpFun);
        });
        const bbox = thisClass._gradientBlack.getBoundingClientRect();
        this._mouseX = e.clientX - bbox.left;
        this._mouseY = e.clientY - bbox.top;
        this.mouseBorder();
        this.setValue(heightAddLAndT_ToRGB(this.height, this.position.x, this.position.y));
        this.updatePicker();
      };
      const mouseMoveFunBar = e => {
        window.addEventListener("mouseup", function mouseUpFunBar() {
          thisClass.getDOM().style.userSelect = "text";
          window.removeEventListener("mousemove", mouseMoveFunBar);
          window.removeEventListener("mouseup", mouseUpFunBar);
        });
        const bbox = thisClass._rightBar.getBoundingClientRect();
        this._height = e.clientY - bbox.top;
        this.mouseBorderBar();
        this.setValue(heightAddLAndT_ToRGB(this.height, this.position.x, this.position.y));
        this.updatePicker();
      };
      this._gradientBlack.addEventListener("mousedown", e => {
        this.getDOM().style.userSelect = "none";
        mouseMoveFun(e);
        window.addEventListener("mousemove", mouseMoveFun);
      });
      this._rightBar.addEventListener("mousedown", e => {
        this.getDOM().style.userSelect = "none";
        mouseMoveFunBar(e);
        window.addEventListener("mousemove", mouseMoveFunBar);
      });

      if ("ontouchstart" in window) {
        const touchFun = e => {
          e.preventDefault();
          e = e.touches[0];
          const bbox = thisClass._gradientBlack.getBoundingClientRect();
          this._mouseX = e.clientX - bbox.left;
          this._mouseY = e.clientY - bbox.top;
          this.mouseBorder();
          this.setValue(heightAddLAndT_ToRGB(this.height, this.position.x, this.position.y));
          this.updatePicker();
        };
        const touchFunBar = e => {
          e.preventDefault();
          e = e.touches[0];
          const bbox = this._rightBar.getBoundingClientRect();
          this._height = e.clientY - bbox.top;
          this.mouseBorderBar();
          this.setValue(heightAddLAndT_ToRGB(this.height, this.position.x, this.position.y));
          this.updatePicker();
        };
        this._gradientBlack.addEventListener("touchmove", touchFun, supportsPassive ? { passive: true } : false);
        this._gradientBlack.addEventListener("touchstart", touchFun, supportsPassive ? { passive: true } : false);
        this._rightBar.addEventListener("touchmove", touchFunBar, supportsPassive ? { passive: true } : false);
        this._rightBar.addEventListener("touchstart", touchFunBar, supportsPassive ? { passive: true } : false);
      }

      this._changeFunctions = [];
    }
    onchange() {
      this._changeFunctions.forEach(fun => {
        return fun({
          target: this,
          type: "change",
          timeStamp: performance.now(),
        });
      });
    }

    addEventListener(type, fun) {
      if (typeof fun !== "function") {
        return;
      }
      switch (type) {
        case "change": {
          this._changeFunctions.push(fun);
          break;
        }
      }
    }

    getValue(mode = "value") {
      switch (mode) {
        case "hex": {
          return this._value;
        }
        case "rgb": {
          return hexToRgb(this.getValue("hex"));
        }
        case "hsb": {
          return rgbToHsb(this.getValue("hex"));
        }
        case "value":
        default: {
          return "#" + this._value;
        }
      }
    }
    getBrightness() {
      const { r, g, b } = this.getValue("rgb");
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }
    setValue(value, resetPosition = false, hex = "") {
      const Hex6Reg = /^#([A-F0-9]{6}|[a-f0-9]{6})$/;
      const Hex3Reg = /^#([A-F0-9]{3}|[a-f0-9]{3})$/;
      const rgbaReg = new RegExp(
        String(
          "^rgba\\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))" +
            ",\\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))" +
            ",\\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))" +
            ",\\s*((?!1.[1-9])[0-1]?(\\.[0-9]{1,3})?)\\)$"
        )
      );
      const rgbReg = new RegExp(
        String(
          "^rgb\\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))" +
            ",\\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))" +
            ",\\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\\)$"
        )
      );
      switch (typeof value) {
        case "string": {
          if (Hex6Reg.test(value)) {
            value = value.substring(1);
          } else if (Hex3Reg.test(value)) {
            value = value
              .substring(1)
              .split("")
              .map(s => {
                return s + s;
              })
              .join("");
          } else if (rgbaReg.test(value)) {
            value = rgbAToHex(value, this._def);
          } else if (rgbReg.test(value)) {
            value = rgbAToHex(value, this._def);
          } else if (value === "currentcolor") {
            value = "FFFFFF";
          } else {
            value = this._def;
          }
          hex = value;
          break;
        }
        case "object": {
          hex = rgbToHex(value);
        }
      }
      let rgb;
      try {
        rgb = hexToRgb(hex);
      } catch (error) {
        rgb = {
          r: 255,
          g: 255,
          b: 255,
        };
      }
      const { r, g, b } = rgb;
      this._value = rgbToHex({ r, g, b }).toUpperCase();
      this.textInput.value = this._value === "FFFFFF" ? "currentcolor" : "#" + this._value;
      this.textInput._value_ = this.textInput.value;
      this._colorBlock.style.backgroundColor = this.getValue();
      if (resetPosition) {
        const { h, s, b } = rgbToHsb(hex);
        this._height = 1 - h / 360;
        if (h === 0) {
          this._height = 0;
        }
        this._mouseX = s;
        this._mouseY = 1 - b;
      } else {
        if (this._lastValue !== this.value) {
          this.onchange();
        }
      }
      this._lastValue = this.value;
    }

    getDOM() {
      return this.dom;
    }
    mouseBorder() {
      this._mouseX = numberBorder(this._mouseX / (this._gradientBlack.getBoundingClientRect().width - 2), 1, 0);
      this._mouseY = numberBorder(this._mouseY / (this._gradientBlack.getBoundingClientRect().height - 2), 1, 0);
    }
    mouseBorderBar() {
      this._height = numberBorder(this._height / (this._rightBar.getBoundingClientRect().height - 2), 1, 0);
    }
    updatePicker() {
      const position = this.position;
      const target = this._gradientCircle;
      target.style.left = `${position.x * 100}%`;
      target.style.top = `${position.y * 100}%`;
      this._rightBarPicker.style.top = `${this.height * 100}%`;
      this._gradientColor.style.background = `linear-gradient(to right,#FFFFFF,#${rgbToHex(heightToRgb(this.height))})`;
      if (this.getBrightness() > 152) {
        addClassName(target, `${defCon.class.cpcb}`);
        removeClassName(target, `${defCon.class.cpcw}`);
      } else {
        removeClassName(target, `${defCon.class.cpcb}`);
        addClassName(target, `${defCon.class.cpcw}`);
      }
    }
    get position() {
      return {
        x: this._mouseX,
        y: this._mouseY,
      };
    }
    get height() {
      return this._height;
    }
    get value() {
      return this.getValue();
    }
    set value(value) {
      this.setValue(value, true);
      this.updatePicker();
    }
  }

  /* new frDialogBox */

  class frDialogBox {
    constructor({
      titleText = "Error",
      messageText = "Something unexpected has gone wrong. If the problem persists, contact your administrator",
      trueButtonText = "OK",
      falseButtonText = null,
      neutralButtonText = null,
    } = {}) {
      this.titleText = titleText;
      this.messageText = messageText;
      this.trueButtonText = trueButtonText;
      this.falseButtonText = falseButtonText;
      this.neutralButtonText = neutralButtonText;

      this.hasFalse = falseButtonText !== null;
      this.hasNeutral = neutralButtonText !== null;

      this.frDialog = undefined;
      this.trueButton = undefined;
      this.falseButton = undefined;
      this.neutralButton = undefined;

      this.parent = document.body;
      this.zoomText = "";

      this._createfrDialog(this);
      this._appendfrDialog();
      this._resetfrDialogPosition(0, 0);
    }

    _createfrDialog(context) {
      this.frDialog = cE("div");
      this.frDialog.id = defCon.id.db;
      this.frDialog.classList.add(`${defCon.class.db}`);
      this.frDialog.style.opacity = 0;

      const title = cE("div");
      title.textContent = this.titleText;
      title.classList.add(`${defCon.class.dbt}`);
      this.frDialog.appendChild(title);

      const question = cE("div");
      question.innerHTML = this.messageText;
      question.classList.add(`${defCon.class.dbm}`);
      this.frDialog.appendChild(question);

      const buttonContainer = cE("div");
      buttonContainer.classList.add(`${defCon.class.dbbc}`);
      this.frDialog.appendChild(buttonContainer);

      this.trueButton = cE("a");
      this.trueButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbt}`);
      this.trueButton.textContent = this.trueButtonText;
      this.trueButton.addEventListener("click", function () {
        context._destroy();
      });
      buttonContainer.appendChild(this.trueButton);

      if (this.hasFalse) {
        this.falseButton = cE("a");
        this.falseButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbf}`);
        this.falseButton.textContent = this.falseButtonText;
        this.falseButton.addEventListener("click", function () {
          context._destroy();
        });
        buttonContainer.appendChild(this.falseButton);
      }

      if (this.hasNeutral) {
        this.neutralButton = cE("a");
        this.neutralButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbn}`);
        this.neutralButton.textContent = this.neutralButtonText;
        this.neutralButton.addEventListener("click", function () {
          context._destroy();
        });
        buttonContainer.appendChild(this.neutralButton);
      }
    }

    _appendfrDialog() {
      const diag = this.frDialog;
      if (diag) {
        if (!qS(`#${defCon.id.db}`)) {
          this.parent.appendChild(diag);
          setTimeout(function () {
            diag.style.opacity = 1;
          }, 10);
        }
      }
    }

    _resetfrDialogPosition(X, Y) {
      const zoom = Number(window.getComputedStyle(this.parent, null).getPropertyValue("zoom")) || defCon.tZoom || 1;
      if (zoom !== 1) {
        if (getBrowser.type("core").Gecko || getBrowser.type("core").Presto) {
          Y = Number(zoom > 1 ? 130 * (0.4 + 1 / zoom) : 250 * (2 - zoom));
          X = Number(zoom > 1 ? (zoom - 1) * 55 * (1 + zoom) - 10 / zoom : (((zoom - 1) * 95 * zoom - 10) * 2.25) / zoom);
          this.zoomText = `transform:matrix(${1 / zoom}, 0, 0, ${1 / zoom}, ${X}, ${Y});top:0;right:0`;
          window.scrollTo(document.documentElement.clientWidth, 0);
        } else {
          this.zoomText = `zoom:${1 / zoom}`;
        }
      }
      this.frDialog.style.cssText += this.zoomText;
    }

    _destroy() {
      if (this.frDialog) {
        this.parent.removeChild(this.frDialog);
        for (let key in this) {
          delete this[key];
        }
        debug("\u27A4", this);
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

  function closeAllDialog(e) {
    document.querySelectorAll(e).forEach(item => {
      item.parentNode.removeChild(item);
    });
  }

  /* Font filtering & discriminating list */

  const fontCheck = new Set([
    { ch: "微软雅黑", en: "Microsoft YaHei" },
    { ch: "微软正黑体", en: "Microsoft JhengHei" },
    { ch: "苹方简体", en: "PingFang SC" },
    { ch: "苹方-简", en: "PingFangSC-Regular" },
    { ch: "蘋方-港", en: "PingFangHK-Regular" },
    { ch: "更纱黑体 SC", en: "Sarasa Gothic SC" },
    { ch: "更紗黑體 TC", en: "Sarasa Gothic TC" },
    { ch: "冬青黑体简", en: "Hiragino Sans GB" },
    { ch: "兰亭黑-简", en: "Lantinghei SC" },
    { ch: "小米兰亭", en: "MI Lanting" },
    { ch: "OPPO Sans", en: "OPPOSans" },
    { ch: "霞鹜文楷", en: "LXGW WenKai" },
    { ch: "霞鹜新晰黑", en: "LXGW New Clear Gothic" },
    { ch: "字悦班马宋刻本", en: "ziyuebanmasongkeben" },
    { ch: "鸿蒙黑体", en: "HarmonyOS Sans SC" },
    { ch: "浪漫雅圆", en: "LMYY" },
    { ch: "思源黑体", en: "Source Han Sans SC" },
    { ch: "思源简黑", en: "Noto Sans CJK SC" },
    { ch: "思源柔黑体", en: "Gen Jyuu Gothic" },
    { ch: "思源真黑体", en: "Gen Shin Gothic" },
    { ch: "思源宋体", en: "Source Han Serif SC" },
    { ch: "汉仪旗黑 60S", en: "HYQihei 60S" },
    { ch: "汉仪中黑简", en: "HYZhongHeiJ" },
    { ch: "汉仪综艺体简", en: "HYZongYiJ" },
    { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei" },
    { ch: "文泉驿正黑", en: "WenQuanYi Zen Hei" },
    { ch: "筑紫a丸", en: "Droid Sans Fallback" },
    { ch: "方正喵呜体", en: "FZMiaoWuS-GB" },
    { ch: "方正悠黑简体 508R", en: "FZYouHeiS 508R" },
    { ch: "方正兰亭刊宋", en: "FZLanTingKanSongS" },
    { ch: "方正准圆_GBK", en: "FZZhunYuan-M02" },
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
    { ch: "华康翩翩体", en: "Hanzipen SC" },
    { ch: "华康手札体", en: "Hannotate SC" },
    { ch: "娃娃体-简", en: "Wawati SC" },
    { ch: "雅痞-简", en: "Yapi SC" },
    { ch: "圆体-简", en: "Yuanti SC" },
    { ch: "手书体", en: "ShouShuti" },
    { ch: "幼圆", en: "YouYuan" },
  ]);

  class isSupportFontFamily {
    constructor() {
      const baseFonts = ["monospace", "serif", "Georgia", "sans-serif", "Tahoma"];
      const testString = "这是测试、這是測試：1234567890, WWWwwwMMMmmmLlOoIi.";
      const testSize = "72px";
      const h = qS("body");
      const s = cE("span");
      s.className = `fa ${defCon.id.seed}_fontTest`;
      s.id = `${defCon.id.fontTest}`;
      s.innerHTML = testString;
      let defaultWidth = {};
      let defaultHeight = {};
      for (let index in baseFonts) {
        s.style.cssText = `font-size:${testSize}!important;font-family:${baseFonts[index]}!important;`;
        try {
          h.appendChild(s);
          defaultWidth[baseFonts[index]] = s.offsetWidth;
          defaultHeight[baseFonts[index]] = s.offsetHeight;
          h.removeChild(s);
        } catch (e) {
          error("\u27A4 isSupportFontFamily:", e);
        }
      }

      debug("\u27A4 offset:", defaultWidth, defaultHeight);

      function detect(font) {
        let detected = false;
        try {
          for (let index in baseFonts) {
            s.style.cssText = `font-size:${testSize}!important;font-family:'${font}',${baseFonts[index]}!important;`;
            h.appendChild(s);
            const _offsetWidth = s.offsetWidth;
            const _offsetHeight = s.offsetHeight;
            const matched = _offsetWidth !== defaultWidth[baseFonts[index]] || _offsetHeight !== defaultHeight[baseFonts[index]];
            h.removeChild(s);
            detected = detected || matched;
            if (detected) {
              debug("\u27A4 detect:", font, _offsetWidth, defaultWidth[baseFonts[index]], _offsetHeight, defaultHeight[baseFonts[index]]);
              break;
            }
          }
        } catch (e) {
          error("\u27A4 FontFamily.detect:", e);
        }
        return detected;
      }
      this.detect = detect;
    }
  }

  const fontSet = function (s) {
    return {
      that: Array.prototype.slice.call(document.querySelectorAll(s), 0),
      stopPropagation: function (e) {
        e = e || window.event;
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }
      },

      hide: function () {
        fontSet(s).that.forEach(function (item) {
          item.style.cssText += "display:none";
        });
      },

      show: function () {
        fontSet(s).that.forEach(function (item) {
          item.style.cssText += "display:block";
        });
      },

      fdeleteList: function (fontData) {
        let ddRemove = function (dd) {
          let temp = dd.nextElementSibling;
          dd.remove();
          if (temp !== null && temp.nodeName === "DD") {
            ddRemove(temp);
          }
        };

        class selector {
          constructor(ch, en, sort) {
            this.ch = ch;
            this.en = en;
            this.sort = sort;
          }
        }

        const close = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`);
        close.that.forEach(function (item) {
          ddRemove(item.parentNode);
          const value = item.parentNode.children[1].value;
          const sort = Number(item.parentNode.children[1].attributes.sort.value);
          const text = item.parentNode.children[0].innerHTML;
          fontData.push(new selector(text, value, sort));
          fontData.sort(function (a, b) {
            return a.sort - b.sort;
          });
          if (fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.length === 0) {
            const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
            const ffaceT = qS(`#${defCon.id.fface}`);
            const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
            if (ffaceT.checked) {
              fontCheck.forEach(item => {
                if (item.en === defCon.refont || convert2Unicode(item.ch) === defCon.refont) {
                  defCon.curFont = item.ch;
                }
              });
              inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
            }
            for (let i = defCon.Val.length - 1; i >= 0; i--) {
              if (defCon.Val[i] === `${defCon.id.fontName}`) {
                defCon.Val.splice(i, 1);
                break;
              }
            }
            if (submitButton.classList.contains(`${defCon.class.anim}`)) {
              if (!defCon.Val.length) {
                submitButton.classList.remove(`${defCon.class.anim}`);
                if (defCon.isPreview) {
                  submitButton.innerText = "\u4fdd\u5b58";
                  submitButton.removeAttribute("style");
                  submitButton.removeAttribute("v-Preview");
                  __preview__(defCon.preview);
                }
              } else if (!defCon.Val.includes(`${defCon.id.fontName}`) && defCon.isPreview) {
                submitButton.innerText = "\u9884\u89c8";
                submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
                submitButton.setAttribute("v-Preview", "true");
              }
            }
            fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:none;";
          }
        });
        return Boolean(close.that.length);
      },

      fsearchList: function (name, arr = []) {
        fontSet("input[name=" + name + "]").that.forEach(item => {
          arr.push(item.value);
        });
        return arr;
      },

      fsearch: function (fontData) {
        const domId = fontSet(s).that[0];
        const html = String(
          `<div id="${defCon.id.selector}"><label>已选择字体：<span id="${defCon.id.cleaner}">[清空]</span></label><div class="${defCon.class.selector}"></div></div><div class="${defCon.class.selectFontId}"><label>设置字体，请选择：</label><input type="text" placeholder="输入关键字可检索字体" autocomplete="off" class="${defCon.class.placeholder}"><dl style="display:none"></dl><span class="${defCon.class.tooltip} ${defCon.class.ps1}">\ud83d\udd14<span class="${defCon.class.tooltip} ${defCon.class.ps2}"><p><strong>温馨提示 </strong>脚本预载了多种常用的、好看的中文字体，下拉菜单中所罗列的字体是您系统中已安装过的字体，没有安装过则不会显示。</p><p><em style="color:darkred">（注一）</em>如果没有重新选择字体，则使用上一次保存的字体。首次使用默认为微软雅黑字体。</p><p><em style="color:darkred">（注二）</em>输入框可输入关键字进行搜索，支持中文和英文字体名。</p><p><em style="color:darkred">（注三）</em>字体是按您选择的先后顺序进行优先渲染的，所以多选不如只选一个您最想要的。</p><p><em style="color:darkred">（注四）</em>如果字体重写功能被关闭，那么该字体替换功能将自动禁用，网页字体将采用“网站默认”的字体设置。</p></span></span></div>`
        );
        RAFInterval(
          () => {
            if (!fontSet(`#${defCon.id.selector}`).that[0] && domId) {
              domId.innerHTML = html;
              return !!fontSet(`#${defCon.id.selector}`).that[0];
            }
          },
          50,
          true
        );
        const ffaceT = qS(`#${defCon.id.fface}`);
        const fselectorT = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`).that[0];
        if (ffaceT && fselectorT) {
          changeSelectorStatus(ffaceT.checked, fselectorT, `${defCon.class.readonly}`);
          ffaceT.addEventListener("change", () => {
            changeSelectorStatus(ffaceT.checked, fselectorT, `${defCon.class.readonly}`);
          });
        }

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

        fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:none;";

        let ddRemove = function (dd) {
          const temp = dd.nextElementSibling;
          dd.remove();
          if (temp !== null && temp.nodeName === "DD") {
            ddRemove(temp);
          }
        };

        class selector {
          constructor(ch, en, sort) {
            this.ch = ch;
            this.en = en;
            this.sort = sort;
          }
        }

        fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`).that[0].oninput = function () {
          const val = this.value;
          const dd = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd`).that[0];
          if (dd === "DD") {
            ddRemove(dd);
          }
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).hide();
          if (fontData.length > 0) {
            fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).show();
            const sear_1 = new RegExp(val, "i");
            let judge_1 = false;
            fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).that[0].innerHTML = "";
            fontData.forEach(function (item) {
              if (sear_1.test(item.ch) || sear_1.test(item.en)) {
                judge_1 = true;
                fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).that[0].innerHTML += String(
                  `<dd style="font-family:${item.en}!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`
                );
              }
            });
            if (!judge_1) {
              fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).that[0].innerHTML = "<dd>\u6682\u65e0\u60a8\u9700\u8981\u7684\u5b57\u4f53</dd>";
            }
            clickEvent();
          }
        };

        fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`).that[0].onclick = function (e) {
          const dd = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd`).that[0];
          if (dd === "DD") {
            ddRemove(dd);
          }
          if (fontData.length === 0) {
            this.innerHTML = "\u6682\u65e0\u6570\u636e";
          } else {
            fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).show();
          }
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).that[0].innerHTML = "";
          fontData.sort(function (a, b) {
            return a.sort - b.sort;
          });
          fontData.forEach(function (item) {
            fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).that[0].innerHTML += String(
              `<dd style="font-family:${item.en}!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`
            );
          });
          clickEvent();
          e.stopPropagation();
        };

        function clickEvent() {
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd`).that.forEach(function (item) {
            item.onclick = function (e) {
              const value = this.attributes.value.value.toString();
              const sort = this.attributes.sort.value;
              if (value) {
                fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].innerHTML += String(
                  `<a class="${defCon.class.label}"><span style="font-family:${value}!important">${this.innerHTML}</span><input type="hidden" name="${defCon.id.fontName}" sort="${sort}" value="${value}"/><span class="${defCon.class.close}" style="cursor:pointer;font-family:${value}!important">×</span></a>`
                );
                fontSet(`.${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:block;";
                qS(`#${defCon.id.cleaner}`).addEventListener("click", () => {
                  fontSet().fdeleteList(fontData);
                });
                for (let i = 0; i < fontData.length; i++) {
                  if (fontData[i].en === value) {
                    fontData.splice(i, 1);
                    i = fontData.length;
                  }
                }
                fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.forEach(function (item) {
                  item.onclick = function () {
                    ddRemove(this.parentNode);
                    const value = this.parentNode.children[1].value;
                    const sort = Number(item.parentNode.children[1].attributes.sort.value);
                    const text = this.parentNode.children[0].innerHTML;
                    fontData.push(new selector(text, value, sort));
                    const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
                    if (fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that.length === 0) {
                      const ffaceT = qS(`#${defCon.id.fface}`);
                      const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
                      if (ffaceT.checked) {
                        fontCheck.forEach(item => {
                          if (item.en === defCon.refont || convert2Unicode(item.ch) === defCon.refont) {
                            defCon.curFont = item.ch;
                          }
                        });
                        inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
                      }
                      for (let i = defCon.Val.length - 1; i >= 0; i--) {
                        if (defCon.Val[i] === `${defCon.id.fontName}`) {
                          defCon.Val.splice(i, 1);
                          break;
                        }
                      }
                      if (submitButton.classList.contains(`${defCon.class.anim}`)) {
                        if (!defCon.Val.length) {
                          submitButton.classList.remove(`${defCon.class.anim}`);
                          if (defCon.isPreview) {
                            submitButton.innerText = "\u4fdd\u5b58";
                            submitButton.removeAttribute("style");
                            submitButton.removeAttribute("v-Preview");
                            __preview__(defCon.preview);
                          }
                        } else if (!defCon.Val.includes(`${defCon.id.fontName}`) && defCon.isPreview) {
                          submitButton.innerText = "\u9884\u89c8";
                          submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
                          submitButton.setAttribute("v-Preview", "true");
                        }
                      }
                      fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:none;";
                    } else if (defCon.isPreview) {
                      submitButton.innerText = "\u9884\u89c8";
                      submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
                      submitButton.setAttribute("v-Preview", "true");
                    }
                  };
                });
                const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
                if (!defCon.Val.includes(`${defCon.id.fontName}`)) {
                  defCon.Val.push(`${defCon.id.fontName}`);
                }
                if (!submitButton.classList.contains(`${defCon.class.anim}`)) {
                  submitButton.classList.add(`${defCon.class.anim}`);
                }
                if (defCon.isPreview) {
                  submitButton.innerText = "\u9884\u89c8";
                  submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
                  submitButton.setAttribute("v-Preview", "true");
                }
              }
              fontSet(`.${defCon.class.selectFontId} dl`).hide();
              fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`).that[0].value = "";
              e.stopPropagation();
            };
          });
        }

        document.onclick = function (e) {
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl`).hide();
          const _input = fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`).that[0];
          if (_input) {
            _input.value = "";
          }
        };
      },
    };
  };

  /* define default value */

  const defValue = {
    fontSelect: `'Microsoft YaHei','Helvetica Neue',Arial,sans-serif,'iconfont','icomoon','FontAwesome','Material Icons Extended'`,
    fontFace: true,
    fontStroke: getBrowser.type("core").Gecko ? 0.04 : 0.015,
    fontShadow: getBrowser.type("core").WebKit ? 2.0 : 1.5,
    fontSize: 1.0,
    shadowColor: "#7B7B7B",
    fontSmooth: true,
    fontCSS: `:not([class*='fa']):not([class*='icon']):not([class*='logo']):not([class*='code'])`,
    fontEx: `* pre,* pre *,* code,* code *,* input,* button,* textarea,* kbd,* i,* em`,
  };
  const root = `\u8ab1\u004a\u0056\u0069\u0059\u7409\u67d3\u5b7a\u80ba\u0070\u0032\u004f\u64d3\u0030\u8151\u0074\u5c80\u5b9a\u81ba\u0065`;
  const feedback = defCon.supportURL ? defCon.supportURL : "https://greasyfork.org/scripts/416688/feedback";
  const CONST = {};

  /* Determine whether the DOM is loaded */

  function addLoadEvent(fn) {
    document.addEventListener("readystatechange", event => {
      if (event.target.readyState === "interactive") {
        fn();
        debug("\u27A4 %c[DOM]: Loading...", "background-color:darkorange;color:snow");
      } else if (event.target.readyState === "complete") {
        debug("\u27A4 %c[DOM]: Load complete!%c - %s", "background-color:green;color:snow", "color:0", window.location.host);
      }
    });
  }

  /* Start specific operation */

  !(async function (loading) {
    // Content-Security-Policy: trusted-types
    if (window.trustedTypes && window.trustedTypes.createPolicy) {
      window.trustedTypes.createPolicy("default", {
        createHTML: (string, sink) => {
          return string;
        },
      });
    }

    /* initialling Menus */

    if (curWindowtop && !isGM) {
      loading = GMregisterMenuCommand("\ufff0\ud83d\udd52 正在载入脚本菜单，请稍候…", () => {});
    }

    /* get promise value */

    let maxPersonalSites, isBackupFunction, isPreview, isFontsize, rebuild, _config_data_;
    let configure = await GMgetValue("_configure_");
    if (!configure) {
      maxPersonalSites = 100;
      isBackupFunction = true;
      isPreview = false;
      isFontsize = false;
      rebuild = true;
      _config_data_ = { maxPersonalSites, isBackupFunction, isPreview, rebuild };
      GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
    } else {
      _config_data_ = JSON.parse(defCon.decrypt(configure));
      maxPersonalSites = Number(_config_data_.maxPersonalSites);
      isBackupFunction = Boolean(_config_data_.isBackupFunction);
      isPreview = Boolean(_config_data_.isPreview);
      isFontsize = Boolean(_config_data_.isFontsize);
      rebuild = _config_data_.rebuild;
    }
    defCon.isPreview = isPreview;

    /* Rebuild data for update */

    const bool = false;
    const res = Boolean(rebuild);
    if (curWindowtop && res === bool) {
      GMdeleteValue("_fonts_set_");
      GMdeleteValue("_Exclude_site_");
      GMdeleteValue("_domains_fonts_set_");
      GMdeleteValue("_fontlist_"); /* Temporary */
      _config_data_.rebuild = !bool;
      GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
      debug("\u27A4 %cData has been rebuilt", "background-color:red;color:snow");
    } else {
      debug("\u27A4 %cGood data status", "color:green");
    }

    const fonts = await GMgetValue("_fonts_set_");
    let exSite = await GMgetValue("_Exclude_site_");
    let domains = await GMgetValue("_domains_fonts_set_");

    if (!fonts && !exSite && !domains) {
      sessionStorage.setItem("_notice_", 1);
    }

    /* DialogBox for the first visit after upgrading */

    addLoadEvent(async () => {
      if (Number(sessionStorage.getItem("_notice_"))) {
        if (curWindowtop && !curHostname.includes("greasyfork.org")) {
          let frDialog = new frDialogBox({
            trueButtonText: "好，去看看",
            falseButtonText: "不，算了吧",
            messageText: String(`
            <p><span style="font:bold 22px Candara;color:crimson">您好！</span>这是您首次使用新版 <strong>${defCon.scriptName}</strong> 版本号<span style="font-family:Candara;color:darkorange;font-size:18px!important;font-weight:900;font-style:italic">V${defCon.curVersion}</span>，如下是近期更新内容：</p>
            <p><ul>
              <li>重大版本更新，本次更新会重置设置数据！</li>
              <li>更换滑块算法函数，提高对个别网站的兼容性。</li>
              <li>优化字体缩放功能，修正偏移问题。(Gecko & Presto)</li>
              <li>优化字体列表缓存，独立缓存每个网站设置。(24小时)</li>
              <li>优化与MarkDownload浏览器扩展的兼容性。</li>
              <li>优化CSS样式，优化部分代码逻辑，兼容更多网站。</li>
              <li>修正bugs, 优化代码。</li>
            </ul></p>
            <p>稍后将为您打开帮助文件，要去看一下吗？</p>
          `).trim(),
            titleText: "温馨提示",
          });
          sessionStorage.removeItem("_notice_");
          if (await frDialog.respond()) {
            GMopenInTab(guideURI, defCon.options);
          }
          frDialog = null;
        }
      }
    });

    /* initialize Exclude site */

    function real_Time_Update(e) {
      for (let i = 0; i < e.length; i++) {
        if (e[i] === curHostname) {
          return i;
        }
      }
    }
    const obj = ["workstation-xi"].sort();
    if (!exSite) {
      GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(obj)));
      exSite = obj;
    } else {
      exSite = JSON.parse(defCon.decrypt(exSite));
      defCon.siteIndex = real_Time_Update(exSite);
    }

    /* Set Default Value & initialize */

    const default_domains = [];
    let fontValue, domainValue, domainValueIndex;
    function update_domain_index(s, t = curHostname) {
      for (let i = 0; i < s.length; i++) {
        if (s[i].domain === t) {
          return i;
        }
      }
    }
    if (!domains) {
      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(default_domains)));
    } else {
      domainValue = JSON.parse(defCon.decrypt(domains));
      defCon.domainCount = domainValue.length;
      defCon.domainIndex = update_domain_index(domainValue);
    }

    if (!fonts) {
      saveDate("_fonts_set_", {
        fontSelect: defValue.fontSelect,
        fontFace: defValue.fontFace,
        fontStroke: defValue.fontStroke,
        fontShadow: defValue.fontShadow,
        fontSize: defValue.fontSize,
        shadowColor: defValue.shadowColor,
        fontSmooth: defValue.fontSmooth,
        fontCSS: defValue.fontCSS,
        fontEx: defValue.fontEx,
      });
      CONST.fontSelect = defValue.fontSelect;
      CONST.fontFace = defValue.fontFace;
      CONST.fontStroke = defValue.fontStroke;
      CONST.fontShadow = defValue.fontShadow;
      CONST.fontSize = defValue.fontSize;
      CONST.shadowColor = defValue.shadowColor;
      CONST.fontSmooth = defValue.fontSmooth;
      CONST.fontCSS = defValue.fontCSS;
      CONST.fontEx = defValue.fontEx;
    } else {
      fontValue = JSON.parse(defCon.decrypt(fonts));
      if (domains) {
        domainValue = JSON.parse(defCon.decrypt(domains));
        domainValueIndex = update_domain_index(domainValue);
      }
      if (domainValueIndex !== undefined) {
        CONST.fontSelect = filterHtml(domainValue[domainValueIndex].fontSelect);
        CONST.fontFace = Boolean(domainValue[domainValueIndex].fontFace);
        CONST.fontStroke = Number(domainValue[domainValueIndex].fontStroke);
        CONST.fontShadow = Number(domainValue[domainValueIndex].fontShadow);
        CONST.fontSize = isFontsize ? Number(domainValue[domainValueIndex].fontSize) || 1 : 1;
        CONST.shadowColor = filterHtml(domainValue[domainValueIndex].shadowColor);
        CONST.fontSmooth = Boolean(domainValue[domainValueIndex].fontSmooth);
        CONST.fontCSS = filterHtml(domainValue[domainValueIndex].fontCSS);
        CONST.fontEx = filterHtml(domainValue[domainValueIndex].fontEx);
      } else {
        CONST.fontSelect = filterHtml(fontValue.fontSelect);
        CONST.fontFace = Boolean(fontValue.fontFace);
        CONST.fontStroke = Number(fontValue.fontStroke);
        CONST.fontShadow = Number(fontValue.fontShadow);
        CONST.fontSize = isFontsize ? Number(fontValue.fontSize) || 1 : 1;
        CONST.shadowColor = filterHtml(fontValue.shadowColor);
        CONST.fontSmooth = Boolean(fontValue.fontSmooth);
        CONST.fontCSS = filterHtml(fontValue.fontCSS);
        CONST.fontEx = filterHtml(fontValue.fontEx);
      }
    }

    defCon.tZoom = CONST.fontSize;

    /* Operation of CSS value */

    let shadow = "";
    const shadow_r = parseFloat(CONST.fontShadow);
    const shadow_c = CONST.shadowColor;
    if (!isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 8) {
      shadow = `text-shadow:0 0 ${shadow_r}px ${shadow_c};`;
    }
    let stroke = "";
    const stroke_r = parseFloat(CONST.fontStroke);
    if (!isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0) {
      stroke = `text-stroke:${stroke_r}px currentcolor;-webkit-text-stroke:${stroke_r}px currentcolor;paint-order:stroke fill;`;
    }
    let selection = "";
    if (stroke) {
      selection = `::selection{color:#ffffff!important;background:#338fff!important}`;
    }
    let smoothing = "";
    const smooth_i = CONST.fontSmooth;
    if (smooth_i) {
      smoothing = `-webkit-font-smoothing:antialiased!important;-moz-osx-font-smoothing:grayscale!important;text-rendering:optimizeLegibility!important;`;
    }

    let bodyZoom = "";
    if (CONST.fontSize >= 0.8 && CONST.fontSize <= 1.5 && isFontsize && CONST.fontSize !== 1) {
      bodyZoom = String(
        `body{zoom:${Number(CONST.fontSize)}!important;` +
          `-moz-transform:scale(${Number(CONST.fontSize)});-moz-transform-origin:left top;` +
          `-o-transform:scale(${Number(CONST.fontSize)});-o-transformOrigin:left top;` +
          String(getBrowser.type("core").Gecko || getBrowser.type("core").Presto ? `width:${100 / Number(CONST.fontSize)}%;height:${100 / Number(CONST.fontSize)}%}` : `}`)
      );
    }

    const prefont = CONST.fontSelect.split(",")[0];
    const refont = prefont ? prefont.replace(/"|'/g, "") : "";
    let fontfamily = "";
    let fontfaces = "";
    let codeFont = "";
    const fontface_i = CONST.fontFace;
    if (fontface_i) {
      fontfamily = `font-family:${CONST.fontSelect};`;
      fontfaces =
        refont !== ""
          ? `@font-face{font-family:"宋体";src:local("${refont}")}@font-face{font-family:"黑体";src:local("${refont}")}@font-face{font-family:SimHei;src:local("${refont}")}@font-face{font-family:SimSun;src:local("${refont}")}@font-face{font-family:"serif";src:local("${refont}")}@font-face{font-family:"Microsoft YaHei UI";src:local("${refont}")}@font-face{font-family:"Segoe UI";src:local("${refont}")}@font-face{font-family:"sans-serif";src:local("${refont}")}@font-face{font-family:Tahoma;src:local("${refont}")}@font-face{font-family:Arial;src:local("${refont}")}@font-face{font-family:Helvetica;src:local("${refont}")}`
          : "";
      codeFont = `* pre,* pre *,* code,* code *{font:14px/130% 'Operator Mono Lig','Fira Code','Roboto Mono','Monaco','Courier New',monospace!important}`;
    }

    let exclude = "";
    const cssexlude = CONST.fontEx;
    if (cssexlude) {
      exclude = `${cssexlude}{text-stroke:initial!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}`;
    }

    const fontTest = `body span.${defCon.id.seed}_fontTest{font-stretch:normal!important;font-weight:normal!important;line-height:initial!important;text-align:left!important;font-style:normal!important;text-decoration:none!important;letter-spacing:normal!important;word-wrap:normal!important;text-indent:initial!important}body #${defCon.id.fontTest}{margin:0!important;padding:0!important;width:max-content!important;height:max-content!important;text-shadow:none!important;-webkit-text-stroke:initial!important;-webkit-text-size-adjust:100%!important}`;

    const cssfun = CONST.fontCSS;
    let tshadow = "";
    if (defCon.siteIndex === undefined) {
      tshadow = `${bodyZoom}${codeFont}${selection}${cssfun}{${shadow}${stroke}${smoothing}${fontfamily}}${fontfaces}${exclude}${fontTest}`;
    }
    const fontStyle_db = `.${defCon.class.db}{max-width:420px;color:#444;z-index:999999992;border:2px solid #efefef}.${defCon.class.db} *{line-height:1.5!important;font-family:"Microsoft YaHei",sans-serif!important;text-stroke:initial!important;-webkit-text-stroke:initial!important;text-shadow:0 0 1px #7b7b7b!important}.${defCon.class.db}{display:block;overflow:hidden;position:fixed;top:25%;right:15px;-webkit-border-radius:6px;border-radius:6px;width:100%;background:#fff;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.3);box-shadow:0 0 10px 0 rgba(0,0,0,.3);transition:opacity .5s;}.${defCon.class.db} .${defCon.class.dbt},.${defCon.class.dbb},.${defCon.class.dbb}:hover{text-shadow:initial!important;-webkit-text-stroke:initial!important;text-stroke:initial!important}.${defCon.class.dbbf},.${defCon.class.dbbf}:hover{background:#d93223;color:#fff!important;border:1px solid #d93223;-webkit-border-radius:6px;border-radius:6px;font-size:14px!important}.${defCon.class.dbbt},.${defCon.class.dbbt}:hover{background:#038c5a;color:#fff!important;border:1px solid #038c5a;-webkit-border-radius:6px;border-radius:6px;font-size:14px!important}.${defCon.class.dbbn},.${defCon.class.dbbn}:hover{background:#777;color:#fff!important;border:1px solid #777;-webkit-border-radius:6px;border-radius:6px;font-size:14px!important}.${defCon.class.dbm}{color:#444;padding:10px;margin:5px;font-size:16px!important;font-weight:300;text-align:left}.${defCon.class.dbm} p{line-height:160%;margin:5px 0;text-indent:0em!important;font-size:16px!important;font-weight:400;text-align:left}.${defCon.class.dbm} ul{list-style:none;margin: 5px 0 0 15px;padding:2px;font:italic 14px/140% "Microsoft YaHei";color:grey}.${defCon.class.dbm} li{list-style-type:square;}.${defCon.class.dbt}{background:#efefef;margin-top:0;padding:12px;font-size:20px!important;font-weight:700;text-align:left;width:100%}.${defCon.class.dbb}{display:inline-block;margin:0 1%;-webkit-border-radius:2px;border-radius:4px;padding:8px 12px;min-width:12%;font-weight:400;text-align:center;letter-spacing:0;transition:opacity .5s;cursor:pointer;-webkit-box-sizing:content-box;box-sizing:content-box}.${defCon.class.dbb}:hover{color:#fff;opacity:.8;font-weight:900;text-decoration:none!important}.${defCon.class.dbbc}{text-align:right;padding:2.5%;background:#efefef;color:#fff}.${defCon.class.anim}{-webkit-animation:jiggle 1.8s ease-in infinite;animation:jiggle 1.8s ease-in infinite;border:2px solid crimson!important;background:crimson!important}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}#${defCon.id.bk},#${defCon.id.pv},#${defCon.id.fs},#${defCon.id.mps},#${defCon.id.flc}{padding:2px 10px;height:40px;width:max-content;min-width:auto}#${defCon.id.flc}:after{content:"";background:url('https://img.zcool.cn/community/038dde458f9a874a8012160f7417f6e.gif') no-repeat -400px -300px}#${defCon.id.flc} button{background-color:#eee;color:#444;font-weight:normal;border:1px solid #999;font-size:14px!important;border-radius:4px}#${defCon.id.flc} button:hover{cursor:pointer;background-color:#f7f7f7;}#${defCon.id.feedback}{padding:2px 10px;height:22px;width:max-content;min-width:auto}#${defCon.id.feedback}:hover{color:crimson!important}`;
    const fontStyle_container = `#${defCon.id.rndId}{width:100%;height:100%;background:transparent;position:fixed;top:0;left:0;z-index:999999991;transition:opacity .5s;}body #${defCon.id.container}{position:fixed;top:10px;right:24px;-webkit-border-radius:10px;border-radius:10px;background:#f0f6ff!important;-webkit-box-sizing:content-box;box-sizing:content-box}#${defCon.id.container}{transform:scale3d(1,1,1);width:auto;overflow-y:auto;overflow-x:hidden;min-height:10%;max-height:calc(100% - 30px);z-index:999999;padding:4px 8px 8px 8px;text-align:left;color:#333;font-size:16px!important;font-weight:900;-webkit-transition:all .1s ease-in;transition:all .1s ease-in;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.container}::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.container}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #67a5df;background:#369}#${defCon.id.container}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;border-radius:10px;background:#ededed}#${defCon.id.container} *{line-height:1.5!important;font-size:16px;font-weight:700;font-family:"Microsoft YaHei",sans-serif!important;text-shadow:initial!important;-webkit-text-stroke:initial!important;text-stroke:initial!important}#${defCon.id.container} fieldset{border:2px groove #67a5df!important;-webkit-border-radius:10px;border-radius:10px;padding:4px 9px;margin:2px;background:#f0f6ff!important;display:block;width:auto;height:auto;min-height:500px}#${defCon.id.container} legend{line-height:20px;padding:0 8px;border:0!important;margin-bottom:0;font-size:16px!important;font-weight:700;font-family:"Microsoft YaHei",sans-serif!important;background:#f0f6ff!important;-webkit-box-sizing:content-box;box-sizing:content-box;width:auto!important;min-width:185px!important;display:block!important;position:initial!important;height:auto!important;visibility:unset!important}#${defCon.id.container} fieldset ul{padding:0;margin:0;background:#f0f6ff!important}#${defCon.id.container} ul li{list-style:none;margin:3px 0;-webkit-box-sizing:content-box;box-sizing:content-box;border:none;float:none;background:#f0f6ff!important;cursor:default}#${defCon.id.container} .${defCon.class.help}{width:24px;height:24px;fill:#67a5df;overflow:hidden;}#${defCon.id.container} .${defCon.class.title} .${defCon.class.guide}{display:inline-block;position:fixed;cursor:pointer}@keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}.${defCon.class.title} .${defCon.class.rotation}{width:24px;height:24px;top:auto;right:auto;bottom:auto;left:auto;transform-origin:center 50%;-webkit-transform:rotate(360deg);-webkit-animation:rotation 5s linear infinite;-o-animation:rotation 5s linear infinite;animation:rotation 5s linear infinite}#${defCon.id.fontList}{padding:2px 10px 4px 6px;min-height:75px}#${defCon.id.fontFace},#${defCon.id.fontSmooth}{padding:2px 10px;height:40px;width:calc(100% - 18px);min-width:auto;display:flex;align-items:center;justify-content:space-between}#${defCon.id.shadowColor}{padding:2px 10px;min-height:45px;margin:4px;width:max-content}#${defCon.id.shadowColor} *{-webkit-box-sizing:content-box;box-sizing:content-box}#${defCon.id.cps}{float:left;display:block;margin:0}#${defCon.id.shadowColor} .${defCon.class.colorPicker}{width:32px;height:30px;cursor:pointer;position:relative;border:2px solid #181a25;-webkit-border-radius:4px;border-radius:4px;float:left;display:inline-block}#${defCon.id.shadowColor} .${defCon.class.colorPicker2}{display:inline-block;width:auto;margin:0 0 0 5px}#${defCon.id.shadowColor} .${defCon.class.colorPicker2} #${defCon.id.color}{width:135px!important;height:32px!important;text-indent:0;font-size:18px!important;font-weight:400!important;background:#fafafa;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Impact,"Courier New",sans-serif!important;color:#333!important;border:#67a5df 2px solid!important;-webkit-border-radius:4px;border-radius:4px;display:inline-block;padding:0;margin:0;text-align:center}#${defCon.id.fontShadow}{padding:2px 10px;height:60px}#${defCon.id.fontStroke}{padding:2px 10px;height:60px}#${defCon.id.fontSize}{padding:2px 10px;height:60px}#${defCon.id.submit}{padding:2px 10px;height:40px}#${defCon.id.submit} button{background-image:initial;background-color:#67a5df;color:#fff!important;padding:5px 10px;font-size:14px!important;font-weight:600;cursor:pointer;border:2px solid #6ba7e0;-webkit-border-radius:6px;border-radius:6px;width:auto;font-family:"Microsoft YaHei",sans-serif!important}#${defCon.id.backup}{margin:0 10px 0 0}#${defCon.id.backup}, #${defCon.id.files}{display:none}#${defCon.id.submit} .${defCon.class.cancel},#${defCon.id.submit} .${defCon.class.reset}{float:left;margin-right:10px}#${defCon.id.submit} .${defCon.class.submit}{float:right}#${defCon.id.fontCSS},#${defCon.id.fontEx}{padding:2px 10px;min-height:110px}#${defCon.id.fontEx} textarea{background:#fafafa}#${defCon.id.fontCSS} textarea,#${defCon.id.fontEx} textarea{min-width:calc(100% - 15px);max-width:calc(100% - 15px);width:calc(100% - 15px)!important;min-height:60px;line-height:140%;resize:none;border:2px solid #67a5df!important;-webkit-border-radius:6px;border-radius:6px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;font:bold 14px/140% "Roboto Mono",Monaco,"Courier New",sans-serif!important;color:#0b5b9c;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.fontCSS} textarea::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #67a5df;background:#369}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);border-radius:10px;background:#ededed}#${defCon.id.fontEx} textarea::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #67a5df;background:#369}#${defCon.id.fontEx} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;border-radius:10px;background:#ededed}#${defCon.id.fontList} .${defCon.class.selector} a{font-weight:400;color:#111;text-decoration:none}#${defCon.id.fontList} .${defCon.class.label}{display:block;float:left;margin:2px 5px 2px 0;-webkit-box-sizing:content-box;box-sizing:content-box;border:initial;-webkit-border-radius:2px;border-radius:2px;padding:2px 0;height:24px;font-weight:400;line-height:20px;color:#fff;background:#67a5df}#${defCon.id.fontList} .${defCon.class.label} span{color:#fff;font-size:16px!important;font-weight:normal;padding:5px;background:#67a5df}#${defCon.id.fontList} .${defCon.class.close}{padding:5px!important;color:#fff;background:#67a5df;-webkit-box-sizing:content-box;box-sizing:content-box}#${defCon.id.fontList} .${defCon.class.close}:hover{-webkit-border-radius:2px;border-radius:2px;color:tomato;background-color:#366694}#${defCon.id.fontList} .${defCon.class.selectFontId}{width:auto}#${defCon.id.fontList} .${defCon.class.selectFontId} label{width:auto;display:block;margin:5px 0;color:#333;cursor:initial}#${defCon.id.fontList} .${defCon.class.selectFontId} input{-webkit-box-sizing:content-box;box-sizing:content-box;border:2px solid #67a5df!important;-webkit-border-radius:6px;border-radius:6px;padding:1px 23px!important;margin:0;width:calc(100% - 48px)!important;max-width:calc(100% - 48px);min-width:calc(100% - 48px);height:36px!important;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px!important;font-weight:700;text-indent:0;background:#fafafa;outline-color:#67a5df}#${defCon.id.fontList} .${defCon.class.selectFontId} input[disabled]{pointer-events:none!important}.${defCon.class.placeholder} input:-moz-placeholder{color:#369!important;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px!important;font-weight:700;opacity:.65}.${defCon.class.placeholder}::-moz-placeholder{color:#369!important;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px!important;font-weight:700;opacity:.65}.${defCon.class.placeholder}::-webkit-input-placeholder{color:#369!important;font-family:"Microsoft YaHei",sans-serif!important;font-size:16px!important;font-weight:700;opacity:.65}#${defCon.id.fontList} .${defCon.class.selectFontId} dl{overflow-x:hidden;position:fixed;z-index:1000;margin:8px 0 0 0;-webkit-box-sizing:content-box;box-sizing:content-box;border:2px solid #67a5df!important;-webkit-border-radius:4px;border-radius:4px;padding:4px 10px;width:auto;min-width:170px;max-width:252px;max-height:250px;font-size:18px!important;white-space:nowrap;background-color:#fff;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #67a5df;background:#369}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;border-radius:10px;background:#ededed}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd{margin:0 10px;padding:5px 0;font-weight:400;font-size:21px!important;min-width:135px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd:hover{background-color:#67a5df;color:#fff}#${defCon.id.selector}{width:100%;max-width:100%}#${defCon.id.selector} label{display:block;cursor:initial;margin:0 0 4px 0;color:#333}#${defCon.id.selector} #${defCon.id.cleaner}{margin-left:5px;cursor:pointer}#${defCon.id.selector} #${defCon.id.cleaner}:hover{color:red}#${defCon.id.fontList} .${defCon.class.selector}{overflow-y:auto;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin;-webkit-box-sizing:content-box;box-sizing:content-box;border:2px solid #67a5df!important;-webkit-border-radius:6px;border-radius:6px;padding:6px;width:95%;max-width:267px;max-height:60px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 5px #67a5df;background:#369}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;border-radius:10px;background:#ededed}.${defCon.class.checkbox}{display:none!important}.${defCon.class.checkbox}+label{cursor:pointer;padding:11px 9px;margin:0;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.${defCon.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;-webkit-border-radius:7px;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${defCon.class.checkbox}+label::after{position:absolute;top:0;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:100px;border-radius:100px;padding:5px;font-size:1em;font-weight:700;color:#fff;content:"OFF"}.${defCon.class.checkbox}:checked+label{cursor:pointer;margin:0;-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}.${defCon.class.checkbox}:checked+label::after{content:"ON";left:10px;-webkit-box-sizing:content-box;box-sizing:content-box}.${defCon.class.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px;-webkit-box-sizing:content-box;box-sizing:content-box}#${defCon.id.fface} label,#${defCon.id.fface}+label::after,#${defCon.id.fface}+label::before,#${defCon.id.smooth} label,#${defCon.id.smooth}+label::after,#${defCon.id.smooth}+label::before{-webkit-transition:all .1s ease-in;transition:all .1s ease-in;-webkit-box-sizing:content-box;box-sizing:content-box}#${defCon.id.fontShadow} #${defCon.id.shadowSize},#${defCon.id.fontStroke} #${defCon.id.strokeSize},#${defCon.id.fontSize} #${defCon.id.fontZoom}{color:#111!important;width:56px!important;text-indent:0;margin-right:10px!important;height:32px!important;font-size:17px!important;font-weight:400!important;font-family:Impact,"Courier New",sans-serif!important;border:#67a5df 2px solid!important;-webkit-border-radius:4px;border-radius:4px;margin-right:2px;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;background:#fafafa}.${defCon.class.slider} input{visibility:hidden}.${defCon.class.Switch}{-webkit-box-sizing:content-box;box-sizing:content-box;display:inline-block;float:right;margin-right:4px;padding:0 6px;border:2px double #67a5df;color:#0A68C1;-webkit-border-radius:4px;border-radius:4px;}.${defCon.class.readonly}{background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:50px 50px!important;background-color:#fff7f7!important}.${defCon.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9 0,#e9ffe9 25%,transparent 25%,transparent 50%,#e9ffe9 50%,#e9ffe9 75%,transparent 75%,transparent);background-size:50px 50px;background-color:#f7fff7}`;
    const fontStyle_cp = `#${defCon.id.cpm}{width:220px;height:200px;z-index:999;position:fixed;display:none;margin:10px 0 0 20px;-webkit-box-sizing:content-box;box-sizing:content-box;background-color:#d1f2fb;padding:10px;box-shadow:0 0 10px #000;border-radius:6px}.${defCon.class.cp},.${defCon.class.cp} *,.${defCon.class.cp} ::after,.${defCon.class.cp} ::before{border:0;margin:0;padding:0;display:block;box-sizing:border-box}.${defCon.class.cp}{background-color:#fff;display:block;min-width:128px;min-height:128px;position:relative}.${defCon.class.cp}>.${defCon.class.cprb}{border:solid #000 1px;background:linear-gradient(red,#f0f,#00f,#0ff,#0f0,#ff0,red);width:16px;height:calc(100% - 26px);position:absolute;right:12px;top:12px}.${defCon.class.cp} .${defCon.class.cprbp}{position:absolute;width:100%;height:1px}.${defCon.class.cp} .${defCon.class.cprbp}::after,.${defCon.class.cp} .${defCon.class.cprbp}::before{content:"";width:10px;height:7px;position:absolute;background:0 0;border:solid transparent 5px;border-width:3.5px 5px;top:-3px}.${defCon.class.cp} .${defCon.class.cprbp}::before{border-left:solid #404040 5px;left:-6px}.${defCon.class.cp} .${defCon.class.cprbp}::after{border-right:solid #404040 5px;right:-6px}.${defCon.class.cp}>.${defCon.class.cpg}{position:absolute;width:calc(100% - 50px);height:calc(100% - 26px);border:solid #000 1px;left:12px;top:12px}.${defCon.class.cp}>.${defCon.class.cpg},.${defCon.class.cp}>.${defCon.class.cpg} *{cursor:crosshair;-webkit-box-sizing:content-box;box-sizing:content-box}.${defCon.class.cp}>.${defCon.class.cpgb}{background:linear-gradient(rgba(0,0,0,0),#000)}.${defCon.class.cp}>.${defCon.class.cp}-color-block{position:absolute;border:solid #000 1px;background:#fff;width:calc(100% - 104px);max-width:72px;height:18px;left:12px;bottom:8px}.${defCon.class.cp} .${defCon.class.cpc}{background-color:transparent;position:absolute}.${defCon.class.cp} .${defCon.class.cpc}::before{border-radius:50%;width:11px;height:11px;border:solid #000 1px;background-color:transparent;position:relative;left:-6px;top:-6px;display:block;content:""}.${defCon.class.cp} .${defCon.class.cpc}.${defCon.class.cpcb}::before{border-color:#000}.${defCon.class.cp} .${defCon.class.cpc}.${defCon.class.cpcw}::before{border-color:#fff}`;
    const fontStyle_tooltip = `.${defCon.class.tooltip}{position:relative;cursor:help}.${defCon.class.tooltip} .${defCon.class.tooltip}{display:none;visibility:hidden;position:absolute;z-index:999999;-webkit-box-sizing:content-box;box-sizing:content-box;border:2px solid #b8c4ce;-webkit-border-radius:6px;border-radius:6px;padding:10px;width:250px;max-width:250px;font-weight:400;color:#fff;background-color:#54a2ec;opacity:.9}.${defCon.class.tooltip} .${defCon.class.tooltip} strong{color:darkorange;font-size:18px!important}.${defCon.class.tooltip} .${defCon.class.tooltip} p{color:#fff;display:block;margin:0 0 10px 0;line-height:140%;text-indent:0em!important}.${defCon.class.tooltip} .${defCon.class.tooltip} *{font-family:"Microsoft YaHei",sans-serif!important;font-size:14px!important}.${defCon.class.tooltip}:hover .${defCon.class.tooltip}{visibility:visible;display:block}.${defCon.class.ps1}{margin:-33px 0 0 0;right:8px;float:right}.${defCon.class.ps2}{top:30px;left:-245px}.${defCon.class.ps3}{top:-197px}.${defCon.class.ps4}{top:-175px}`;
    const fontStyle_Progress = `.fr-range-bar{background-color:#a9acb1;border-radius:15px;display:block;height:10px;position:relative;width:100%;margin-top:8px;box-shadow:0 0 1px 1px rgba(0,0,0,.1) inset}.fr-range-quantity{background-color:#67a5df;border-radius:15px;display:block;height:100%;width:0}.fr-range-handle{background-color:#fff;border-radius:100%;cursor:e-resize;height:22px;left:0;top:-6px;position:absolute;width:22px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4)}.fr-range-handle::after{content:"";position:absolute;width:10px;height:10px;background:#67a5df;border-radius:50%;top:0;left:0;right:0;bottom:0;margin:auto}.fr-range-max,.fr-range-min{color:#181819;font-size:12px;height:20px;padding-top:4px;position:absolute;text-align:center;top:-9px;width:24px}.fr-range-min{left:-30px}.fr-range-max{right:-30px}.fr-vertical{height:100%;width:4px}.fr-vertical .fr-range-quantity{bottom:0;height:0;position:absolute;width:100%}.fr-vertical .fr-range-handle{bottom:0;left:-13px;top:auto}.fr-vertical .fr-range-max,.fr-vertical .fr-range-min{left:-10px;right:auto;top:auto}.fr-vertical .fr-range-min{bottom:-30px}.fr-vertical .fr-range-max{top:-30px}.fr-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fr-range-disabled{cursor:default}`;
    const fontStyle = fontStyle_db + fontStyle_container + fontStyle_cp + fontStyle_tooltip + fontStyle_Progress;
    const tFontSize = isFontsize
      ? String(`
          <li id="${defCon.id.fontSize}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;min-width:auto">
              字体比例缩放<input id="${defCon.id.fontZoom}" v="number" maxlength="5" />
            </div>
            <div class="${defCon.class.slider}">
              <input type="text" id="${defCon.id.zoomSize}" />
            </div>
          </li>
    `).trim()
      : "";
    const tHTML = String(`
    <div id="${defCon.id.container}">
      <fieldset id="${defCon.id.field}" style="display:block">
        <legend class="${defCon.class.title}">
          <span style="display:inline-block;color:#8b0000!important">${defCon.scriptName}</span>
          <span class="${defCon.class.guide}">
            <div class="${defCon.class.rotation}" title="打开帮助文件" height="24" width="24"/>
              <svg class="${defCon.class.help}" viewBox="0 0 1053 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M526.628571 1024C245.76 1024 14.628571 795.794286 14.628571 512S242.834286 0 526.628571 0c280.868571 0 512 228.205714 512 512S807.497143 1024 526.628571 1024z m-40.96-266.24c11.702857 8.777143 23.405714 14.628571 35.108572 14.628571 14.628571 0 26.331429-5.851429 35.108571-14.628571 11.702857-8.777143 14.628571-20.48 14.628572-38.034286 0-14.628571-5.851429-26.331429-14.628572-35.108571-8.777143-8.777143-20.48-14.628571-35.108571-14.628572s-26.331429 5.851429-38.034286 14.628572-14.628571 20.48-14.628571 35.108571c2.925714 17.554286 8.777143 29.257143 17.554285 38.034286zM675.84 321.828571c-14.628571-20.48-32.182857-38.034286-58.514286-49.737142-26.331429-11.702857-55.588571-17.554286-87.771428-17.554286-35.108571 0-67.291429 5.851429-93.622857 20.48-26.331429 14.628571-46.811429 32.182857-61.44 55.588571-14.628571 23.405714-20.48 43.885714-20.48 64.365715 0 11.702857 2.925714 20.48 11.702857 29.257142 8.777143 8.777143 20.48 14.628571 32.182857 14.628572 20.48 0 35.108571-11.702857 43.885714-38.034286 8.777143-23.405714 17.554286-43.885714 29.257143-55.588571 11.702857-11.702857 29.257143-17.554286 55.588571-17.554286 20.48 0 38.034286 5.851429 52.662858 17.554286 14.628571 11.702857 20.48 29.257143 20.48 46.811428 0 8.777143-2.925714 17.554286-5.851429 26.331429-5.851429 8.777143-8.777143 14.628571-17.554286 20.48-5.851429 5.851429-17.554286 17.554286-32.182857 29.257143-17.554286 14.628571-29.257143 26.331429-40.96 38.034285-8.777143 11.702857-17.554286 23.405714-23.405714 38.034286-5.851429 14.628571-8.777143 29.257143-8.777143 49.737143 0 14.628571 2.925714 26.331429 11.702857 35.108571 8.777143 8.777143 17.554286 11.702857 29.257143 11.702858 23.405714 0 35.108571-11.702857 40.96-35.108572 2.925714-11.702857 2.925714-17.554286 5.851429-23.405714 0-5.851429 2.925714-8.777143 5.851428-14.628572s5.851429-8.777143 11.702857-14.628571l17.554286-17.554286c29.257143-26.331429 46.811429-43.885714 58.514286-52.662857 11.702857-11.702857 20.48-23.405714 29.257143-38.034286 8.777143-14.628571 11.702857-32.182857 11.702857-49.737142 2.925714-29.257143-2.925714-52.662857-17.554286-73.142858z" fill="#67a5df" stroke="white" stroke-width="30"></path>
              </svg>
            </div>
          <span>
        </legend>
        <ul class="${defCon.class.main}">
          <li id="${defCon.id.fontList}">
            <div class="${defCon.class.fontList}"></div>
          </li>
          <li id="${defCon.id.fontFace}">
            <div>字体重写（默认：开）</div>
            <div style="margin:${getBrowser.type("core").Gecko ? "6px 0 0 0" : "0"}">
              <input type="checkbox" id="${defCon.id.fface}" class="${defCon.class.checkbox}" ${CONST.fontFace ? "checked" : ""} />
              <label for="${defCon.id.fface}"></label>
            </div>
          </li>
          <li id="${defCon.id.fontSmooth}">
            <div>字体平滑（默认：开）</div>
            <div style="margin:${getBrowser.type("core").Gecko ? "6px 0 0 0" : "0"}">
              <input type="checkbox" id="${defCon.id.smooth}" class="${defCon.class.checkbox}" ${CONST.fontSmooth ? "checked" : ""} />
              <label for="${defCon.id.smooth}"></label>
            </div>
          </li>
          ${tFontSize}
          <li id="${defCon.id.fontStroke}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;min-width:auto">
              字体描边尺寸<input id="${defCon.id.strokeSize}" v="number" maxlength="5" />
            </div>
            <div class="${defCon.class.slider}">
              <input type="text" id="${defCon.id.stroke}" />
            </div>
          </li>
          <li id="${defCon.id.fontShadow}">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;min-width:auto">
              字体阴影尺寸<input id="${defCon.id.shadowSize}" v="number" maxlength="4" />
            </div>
            <div class="${defCon.class.slider}">
              <input type="text" id="${defCon.id.shadow}" />
            </div>
          </li>
          <li id="${defCon.id.shadowColor}">
            <div style="float:left;margin:6px 5px 0 0">阴影颜色
              <span class="${defCon.class.tooltip}">\ud83d\udd14
                <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                  <p>阴影颜色可通过点击色块激活拾色器选择，也可自定义填写，格式支持: <em style="color:#CECECE">RGB, RGBA, HEX{3}, HEX{6}</em>。纯白色的所有格式表示自身颜色 <em style="color:#CECECE">currentcolor</em></p>
                  <p><em style="color:darkred">注意：输入数值会自动转化为HEX{6}，但数值保持一致性。错误格式会被替换为上次保存的数据。</em></p>
                </span>
              </span>
            </div>
            <div class="${defCon.class.colorPicker}" id="${defCon.id.cps}"></div>
            <div class="${defCon.class.colorPicker2}"><input id="${defCon.id.color}"/></div>
            <div id="${defCon.id.cpm}"></div>
          </li>
          <li id="${defCon.id.fontCSS}">
            <div style="margin-bottom: 6px">排除渲染的CSS样式：
              <span class="${defCon.class.tooltip}">\ud83d\udd14
                <span class="${defCon.class.tooltip} ${defCon.class.ps4}">
                  <p>默认为排除大多数网站常用的特殊CSS样式，填写格式如下所示：<em style="color:#CECECE">:not(.fa)</em> 或 <em style="color:#CECECE">:not([class*="fa"])</em></p>
                  <p><em style="color:darkred">该选项为重要参数，默认只读，双击解锁。请尽量不要修改，避免造成样式失效。若失效请重置。</em></p>
                </span>
              </span>
              <div id="${defCon.id.cSwitch}" class="${defCon.class.Switch}" data-switch="ON">\u2227</div>
            </div>
            <textarea placeholder="请谨慎清除默认值，避免渲染失效。" id="${defCon.id.cssfun}" class="${defCon.class.readonly}"\
            title="重要参数，默认只读，双击解锁。" readonly="readonly">${CONST.fontCSS ? CONST.fontCSS : defValue.fontCSS}</textarea>
          </li>
          <li id="${defCon.id.fontEx}">
            <div style="margin-bottom: 6px">排除渲染的HTML标签：
              <span class="${defCon.class.tooltip}">\ud83d\udd14
                <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                  <p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p>
                  <p><em style="color:darkred">编辑该选项需要CSS知识，如需要排除复杂的样式或标签可通过这里进行添加，样式若混乱请重置。</em></p>
                </span>
              </span>
              <div id="${defCon.id.eSwitch}" class="${defCon.class.Switch}" data-switch="ON">\u2227</div>
            </div>
            <textarea placeholder="请输入要排除渲染的HTML标签，形如: * input, * i, div[id='test']"\
            id="${defCon.id.exclude}">${CONST.fontEx ? CONST.fontEx : ""}</textarea>
          </li>
          <li id="${defCon.id.submit}">
            <button class="${defCon.class.reset}">重置</button>
            <button class="${defCon.class.cancel}">取消</button>
            <button id="${defCon.id.backup}">备份</button>
            <button class="${defCon.class.submit}">保存</button>
          </li>
        </ul>
      </fieldset>
    </div>`).trim();
    const tCSS = `@charset "UTF-8";` + fontStyle;
    const tStyle = `@charset "UTF-8";` + tshadow;
    defCon.tStyle = tStyle;
    defCon.refont = refont;

    /* SYSTEM INFO */

    let defautlFont = "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53";
    let reFontFace = defautlFont;
    defCon.curFont = defautlFont;

    GetCurFont(CONST.fontFace, defCon.refont, defautlFont);

    if (curWindowtop) {
      if (defCon.siteIndex === undefined) {
        console.info(
          `%c${defCon.scriptName}\n%cINTRO.URL:\u0020https://tiny.one/FontsRendering\n%c\u259e\u0020脚本版本信息：Version %s\n\u259e\u0020个性化设置网站数量：%c%s%c/%s%s\n\u259e\u0020本地备份：%s\u3000\u259a\u0020保存预览：%s\n%c\u259e\u0020渲染字体：%s\n\u259e\u0020字体平滑：%s\u3000\u259a\u0020字体重写：%s\n\u259e\u0020字体描边：%s\u3000\u259a\u0020字体阴影：%s`,
          "font-weight:bold;font-size:14px;color:crimson",
          "line-height:200%;font-size:10px;color:#777;font-style:italic",
          "line-height:180%;font-size:12px;color:steelblue",
          defCon.curVersion,
          defCon.domainCount > maxPersonalSites ? "color:crimson" : "color:steelblue",
          defCon.domainCount,
          "line-height:180%;font-size:12px;color:steelblue",
          maxPersonalSites,
          defCon.domainIndex !== undefined ? "\uff08\u5f53\u524d\u8bbe\u7f6e\uff1a\u4e2a\u6027\u5316\uff09" : "\uff08\u5f53\u524d\u8bbe\u7f6e\uff1a\u5168\u5c40\uff09",
          isBackupFunction ? "ON " : "OFF",
          isPreview ? "ON " : "OFF",
          "line-height:180%;font-size:12px;color:teal",
          fontface_i ? reFontFace : "\u5df2\u5173\u95ed\uff08\u91c7\u7528" + reFontFace + "\uff09",
          CONST.fontSmooth ? "ON " : "OFF",
          CONST.fontFace ? "ON " : "OFF",
          Number(CONST.fontStroke) ? "ON " : "OFF",
          Number(CONST.fontShadow) ? "ON " : "OFF"
        );
      } else {
        console.info(
          `%c${defCon.scriptName}\n%c${location.hostname.toUpperCase()} 已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。`,
          "line-height:160%;font-weight:bold;font-size:14px;color:red",
          "line-height:180%;font-size:12px;color:darkred"
        );
      }
    }

    /* Insert HTML and CSS */

    try {
      startRAFInterval();
      const callback = mutations => {
        mutations.forEach(mutation => {
          if (!((!curWindowtop || qS(`.${defCon.class.rndClass}`)) && qS(`.${defCon.class.rndStyle}`))) {
            debug(`\u27A4 %cMutationObserver: %c%s %c%s`, "font-weight:bold;color:teal", "color:olive", mutation.type, "font-weight:bold;color:red", !startRAFInterval());
          }
          if (qS(`.${defCon.class.rndStyle}`) && document.head.lastChild.className !== defCon.class.rndStyle) {
            try {
              const lastChildEleclassName = document.head.lastChild.className || "lastChildEleclassName";
              if (lastChildEleclassName.includes("darkreader") && document.head.lastChild.previousSibling.className === defCon.class.rndStyle) {
                debug("\u27A4 %s is Ready, Causeby darkreader inserted", defCon.class.rndStyle);
              } else if (qS(`.${defCon.class.rndStyle}`).nextSibling) {
                debug("\u27A4 [:before]", document.head.lastChild.className);
                reloadStyleTolastChild(true);
              }
            } catch (e) {
              error("\u27A4 lastChildStyle error", e);
            }
          }
        });
      };
      const opts = { childList: true, subtree: true };
      const observer = new MutationObserver(callback);
      observer.observe(document, opts);
    } catch (e) {
      error("\u27A4 createHTML:", e);
    }

    /* Menus Insert */

    setTimeout((Font_Set, Feed_Back, Exclude_site, Parameter_Set) => {
      if (curWindowtop) {
        loading ? GMunregisterMenuCommand(loading) : debug("\u27A4 No Loading_Menu");
        if (defCon.siteIndex === undefined) {
          Font_Set ? GMunregisterMenuCommand(Font_Set) : debug("\u27A4 No Font_Set_Menu");
          Font_Set = GMregisterMenuCommand("\ufff2\ud83c\udf13 字体渲染设置", () => {
            if (!qS(`#${defCon.id.rndId}`)) {
              insertHTML();
              operationConfigure();
              setTimeout(() => {
                qS(`#${defCon.id.rndId}`).style.opacity = "1";
                autoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
                debug("\u27A4 errorCount:", defCon.errors.length);
                if (defCon.errors.length) {
                  reportErrortoAuthor(defCon.errors, true);
                }
              }, 100);
              qS(`.${defCon.class.title} .${defCon.class.guide}`).addEventListener("click", () => {
                GMopenInTab(guideURI, defCon.options);
              });
            } else if (defCon.tZoom !== 1 && (getBrowser.type("core").Gecko || getBrowser.type("core").Presto)) {
              window.scrollTo(document.documentElement.clientWidth, 0);
            }
          });
          Exclude_site ? GMunregisterMenuCommand(Exclude_site) : debug("\u27A4 No Exclude_site_Menu");
          Exclude_site = GMregisterMenuCommand(`\ufff3\u26d4 排除渲染 ${curHostname}`, async () => {
            closeAllDialog(`div.${defCon.class.db}`);
            let frDialog = new frDialogBox({
              trueButtonText: "确 定",
              neutralButtonText: "取 消",
              messageText: `<p style="font:bold italic 24px/1.4 Candara!important">${curHostname}</p><p style='color:darkred'>该域名下所有页面将被禁止字体渲染！</p><p>确定后页面将自动刷新，请确认是否排除？</p>`,
              titleText: "禁止字体渲染",
            });
            if (await frDialog.respond()) {
              exSite = await GMgetValue("_Exclude_site_");
              exSite = JSON.parse(defCon.decrypt(exSite));
              exSite.push(curHostname);
              GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(exSite)));
              location.reload();
            }
            frDialog = null;
          });
          Parameter_Set ? GMunregisterMenuCommand(Parameter_Set) : debug("\u27A4 No Parameter_Set_Menu");
          Parameter_Set = GMregisterMenuCommand("\ufff7\ud83d\udc8e VIP 高级功能开关", async () => {
            configure = await GMgetValue("_configure_");
            _config_data_ = JSON.parse(defCon.decrypt(configure));
            isBackupFunction = Boolean(_config_data_.isBackupFunction);
            isPreview = Boolean(_config_data_.isPreview);
            isFontsize = Boolean(_config_data_.isFontsize);
            maxPersonalSites = Number(_config_data_.maxPersonalSites);
            let frDialog = new frDialogBox({
              trueButtonText: "保存数据",
              falseButtonText: "帮助文件",
              neutralButtonText: "取 消",
              messageText: String(`
              <ul class="${defCon.class.main}" style="color:darkgoldenrod;font:500 16px/150% 'Microsoft YaHei',sans-serif!important">
                <li id="${defCon.id.bk}">
                  <div style="float:left;font-size:16px!important">本地备份功能（默认：开启）</div>
                  <div style="float:right;margin:-2px 2px 0 28px;font-size:16px!important">
                    <input type="checkbox" id="${defCon.id.isbackup}" class="${defCon.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                    <label for="${defCon.id.isbackup}"></label>
                  </div>
                </li>
                <li id="${defCon.id.pv}">
                  <div style="float:left;font-size:16px!important">保存预览功能（默认：关闭）</div>
                  <div style="float:right;margin:-2px 2px 0 28px;font-size:16px!important">
                    <input type="checkbox" id="${defCon.id.ispreview}" class="${defCon.class.checkbox}" ${isPreview ? "checked" : ""} />
                    <label for="${defCon.id.ispreview}"></label>
                  </div>
                </li>
                <li id="${defCon.id.fs}">
                  <div style="float:left;font-size:16px!important">字体缩放功能（实验性功能）</div>
                  <div style="float:right;margin:-2px 2px 0 28px;font-size:16px!important">
                    <input type="checkbox" id="${defCon.id.isfontsize}" class="${defCon.class.checkbox}" ${isFontsize ? "checked" : ""} />
                    <label for="${defCon.id.isfontsize}"></label>
                  </div>
                </li>
                <li id="${defCon.id.mps}">
                  <div style="float:left;font-size:16px!important">个性化设置总数（默认：100）</div>
                  <div style="float:right;margin:-6px 2px 0 16px">
                    <input style="font:500 16px/140% impact,serif-sans!important;border:2px solid darkgoldenrod;border-radius:4px;width:70px;\
                    text-align:center;padding:5px;color:#333;box-sizing:border-box" maxlength="4" id="${defCon.id.maxps}" placeholder="100" value="${maxPersonalSites}" />
                  </div>
                </li>
               <li id="${defCon.id.flc}">
                  <div style="float:left;font-size:16px!important">字体列表缓存（缓存：24小时）</div>
                  <div style="float:right;margin:-4px 2px 0 10px">
                    <button id="${defCon.id.flcid}" style="padding:4px 6px" title="重建当前网站字体列表缓存（如果你已安装新字体，但字体列表未及时更新）">重建缓存</button>
                  </div>
                </li>
                <ol id="${defCon.id.feedback}" style="padding:0;margin:0;font-size:16px!important;color:#333;font-weight:600;cursor:help"\
                title="遇到问题,建议先看看脚本帮助文件">\ud83e\udde1\u0020如果您遇到问题，请向我反馈\u0020\ud83e\udde1</ol>
              </ul>`).trim(),
              titleText: "参数设置 - VIP 高级功能",
            });
            let _bk, _pv, _fs, _mps;
            _bk = Boolean(qS(`#${defCon.id.isbackup}`).checked);
            _pv = Boolean(qS(`#${defCon.id.ispreview}`).checked);
            _fs = Boolean(qS(`#${defCon.id.isfontsize}`).checked);
            _mps = Number(qS(`#${defCon.id.maxps}`).value);
            qS(`#${defCon.id.maxps}`).addEventListener("input", function () {
              this.value = this.value.replace(/[^0-9]/g, "");
            });
            qS(`#${defCon.id.flcid}`).addEventListener("click", async () => {
              closeAllDialog(`div.${defCon.class.db}`);
              cache.remove("_fontlist_");
              let frDialog = new frDialogBox({
                trueButtonText: "确 定",
                messageText: `<p style="font-size:18px!important;text-align:center;padding-bottom:6px;color:darkgoldenrod">字体列表缓存已重建，页面即将刷新！</p><p style="text-align:center"><a style="display:inline-block;border:2px solid darkgoldenrod;-webkit-border-radius:8px;border-radius:8px;width:302px;height:237px;background:url('https://img.zcool.cn/community/038dde458f9a874a8012160f7417f6e.gif') 50% 50% no-repeat;overflow:hidden"><img src='https://z3.ax1x.com/2021/09/04/h2KudK.gif' alt='当前网站的字体列表缓存重建'/></a></p>`,
                titleText: "当前网站字体列表缓存重建",
              });
              if (await frDialog.respond()) {
                frDialog = null;
                location.reload();
              }
            });
            qS(`#${defCon.id.feedback}`).addEventListener("click", () => {
              GMopenInTab(feedback, defCon.options);
            });
            document.querySelectorAll(`#${defCon.id.isbackup}, #${defCon.id.ispreview}, #${defCon.id.isfontsize}, #${defCon.id.maxps}`).forEach(items => {
              items.addEventListener("change", function () {
                _bk = Boolean(qS(`#${defCon.id.isbackup}`).checked);
                _pv = Boolean(qS(`#${defCon.id.ispreview}`).checked);
                _fs = Boolean(qS(`#${defCon.id.isfontsize}`).checked);
                _mps = Number(qS(`#${defCon.id.maxps}`).value);
              });
            });
            if (await frDialog.respond()) {
              _mps = !_mps ? 100 : _mps;
              _config_data_.isBackupFunction = _bk;
              _config_data_.isPreview = _pv;
              _config_data_.isFontsize = _fs;
              _config_data_.maxPersonalSites = _mps;
              GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
              let frDialog = new frDialogBox({
                trueButtonText: "确 定",
                messageText: `<p style="color:darkgoldenrod">VIP 高级功能参数已成功保存，页面即将刷新！</p>`,
                titleText: "VIP 高级功能设置保存",
              });
              if (await frDialog.respond()) {
                frDialog = null;
                location.reload();
              }
            } else {
              GMopenInTab(guideURI, defCon.options);
            }
            frDialog = null;
          });
        } else {
          Exclude_site ? GMunregisterMenuCommand(Exclude_site) : debug("\u27A4 No Exclude_site_Menu");
          Exclude_site = GMregisterMenuCommand(`\ufff2\ud83c\udf40 重新渲染 ${curHostname}`, async () => {
            closeAllDialog(`div.${defCon.class.db}`);
            let frDialog = new frDialogBox({
              trueButtonText: "确 定",
              neutralButtonText: "取 消",
              messageText: `<p style="font:bold italic 22px/1.4 Candara!important">${curHostname}</p><p style='color:darkgreen'>该域名下所有页面将重新进行字体渲染！</p><p>确定后页面将自动刷新，请确认是否恢复？</p>`,
              titleText: "恢复字体渲染",
            });
            if (await frDialog.respond()) {
              exSite = await GMgetValue("_Exclude_site_");
              exSite = JSON.parse(defCon.decrypt(exSite));
              defCon.siteIndex = real_Time_Update(exSite);
              exSite.splice(defCon.siteIndex, 1);
              GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(exSite)));
              location.reload();
            }
            frDialog = null;
          });
          Feed_Back ? GMunregisterMenuCommand(Feed_Back) : debug("\u27A4 No Feed_Back_Menu");
          Feed_Back = GMregisterMenuCommand("\ufff9\ud83e\udde1 向作者反馈问题或建议", () => {
            GMopenInTab(feedback, defCon.options);
          });
        }
      }
    }, 2e3);

    /* important Functions */

    function insertHTML() {
      if (document.body) {
        try {
          const div = cE("div");
          div.id = defCon.id.rndId;
          div.style.opacity = 0;
          div.innerHTML = tHTML;
          qS("body").appendChild(div);
        } catch (e) {
          error("\u27A4 insertHTML:", e);
        }
      }
    }

    function insertCSS() {
      try {
        addStyle(tCSS, `${defCon.class.rndClass}`, document.head, "TC");
      } catch (e) {
        error("\u27A4 insertCSS:", e);
      }
    }

    function insertStyle(t) {
      try {
        addStyle(tStyle, `${defCon.class.rndStyle}`, document.head, "TS", t);
      } catch (e) {
        error("\u27A4 insertStyle:", e);
      }
    }

    function reloadStyleTolastChild(isMutationObserver) {
      try {
        if (isMutationObserver) {
          const styleScriptCount = document.head.querySelectorAll("style[id^='TS']").length;
          if (styleScriptCount === 1) {
            insertStyle(true);
            debug("\u27A4 [:after]", document.head.lastChild.className);
          } else if (styleScriptCount && !defCon.scriptCount) {
            defCon.scriptCount = true;
            const info = `\u53d1\u73b0\u5197\u4f59\u5b89\u88c5\u7684\u201c${defCon.scriptName}\u201d\u811a\u672c\uff0c\u8bf7\u5220\u9664\u91cd\u590d\u811a\u672c\u4fdd\u7559\u5176\u4e00\u3002`;
            defCon.errors.push(`[tooManyScripts]: ${info}`);
            reportErrortoAuthor(defCon.errors, true);
            console.error("\u27A4 ", info);
          }
        } else {
          document.onreadystatechange = function () {
            if (document.readyState === "complete") {
              setTimeout(() => {
                if (document.head.lastChild.className !== defCon.class.rndStyle) {
                  insertStyle(true);
                }
                debug("\u27A4 lastChildStyle:", document.head.lastChild.className);
              }, 2e3);
              debug(
                "\u27A4 isStylePositionAtLastChild:",
                document.head.lastChild.className === defCon.class.rndStyle || document.head.lastChild.previousSibling.className === defCon.class.rndStyle
              );
            }
          };
        }
      } catch (e) {
        error("\u27A4 reloadStyleTolastChild:", e);
      }
    }

    function startRAFInterval() {
      RAFInterval(
        () => {
          if (!qS(`.${defCon.class.rndStyle}`)) {
            insertStyle(false);
          } else {
            reloadStyleTolastChild(false);
          }
          if (curWindowtop) {
            if (!qS(`.${defCon.class.rndClass}`)) {
              insertCSS();
            }
          }
          return Boolean(qS(`.${defCon.class.rndStyle}`) && (!curWindowtop || qS(`.${defCon.class.rndClass}`)));
        },
        10,
        true
      );
    }

    async function fontCheck_detectOnce(fontData = []) {
      const fontReady = await document.fonts.ready;
      const checkFont = new isSupportFontFamily();
      const fontAvailable = new Set();
      let ii = 1;
      if (fontReady) {
        for (const font of fontCheck.values()) {
          if (checkFont.detect(font.en)) {
            if (font.en !== refont) {
              font.sort = ii;
              fontAvailable.add(font);
            }
          } else if (checkFont.detect(convert2Unicode(font.ch)) && convert2Unicode(font.ch) !== refont) {
            font.en = convert2Unicode(font.ch);
            font.sort = ii;
            fontAvailable.add(font);
          }
          ii++;
        }
      }
      fontData = [...fontAvailable.values()].sort(function (a, b) {
        return a.sort - b.sort;
      });
      return fontData;
    }

    async function operationConfigure(fontData = []) {
      try {
        if (curWindowtop) {
          // fontlist with cache expires
          try {
            const fontlist_Cache = cache.get("_fontlist_");
            if (fontlist_Cache) {
              debug("\u27A4 %cLoad font_Data from Cache", "color:green;font-weight:bold");
              fontData = fontlist_Cache;
            } else {
              debug("\u27A4 %cStart real-time font detection", "color:crimson;font-weight:bold");
              fontData = await fontCheck_detectOnce();
              cache.set("_fontlist_", fontData);
            }
          } catch (e) {
            error("\u27A4 fontlist with cache expires: ", e);
            cache.remove("_fontlist_");
            fontData = await fontCheck_detectOnce();
            cache.set("_fontlist_", fontData);
          }

          /* Fonts selection */

          try {
            if (qS(`#${defCon.id.fontList} .${defCon.class.fontList}`)) {
              fontSet(`#${defCon.id.fontList} .${defCon.class.fontList}`).fsearch(fontData);
            }
          } catch (e) {
            defCon.errors.push(`[Fonts selection]: ${e}`);
            error("\u27A4 Fonts selection:", e);
          }

          /* selector placeholder style */

          const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          const ffaceT = qS(`#${defCon.id.fface}`);
          if (ffaceT && inputFont) {
            GetCurFont(CONST.fontFace, defCon.refont, defautlFont);
            ffaceT.addEventListener("change", () => {
              GetCurFont(ffaceT.checked, defCon.refont, defautlFont);
            });
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

          /* Fonts Face */

          const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
          saveChangeStatus(ffaceT, CONST.fontFace, submitButton, defCon.Val);

          /* Font Smooth */

          const smoothT = qS(`#${defCon.id.smooth}`);
          saveChangeStatus(smoothT, CONST.fontSmooth, submitButton, defCon.Val);

          /* FontSize Zoom */

          let drawZoom;
          const zoom = qS(`#${defCon.id.fontZoom}`);
          if (isFontsize) {
            try {
              let zoomId = document.querySelector(`#${defCon.id.zoomSize}`);
              // eslint-disable-next-line no-undef
              drawZoom = new Powerange(zoomId, {
                callback: () => {
                  const _value = Number(zoomId.value);
                  zoom.value = _value.toFixed(3);
                  zoom._value_ = _value;
                },
                decimal: true,
                hideRange: true,
                min: 0.8,
                max: 1.5,
                start: CONST.fontSize,
                step: 0.001,
              });
              checkdraw(zoom, drawZoom, /[0-9](\.[0-9]{1,3})?/);
            } catch (e) {
              defCon.errors.push(`[FontSize Zoom]: ${e}`);
              error("\u27A4 FontSize Zoom:", e);
            } finally {
              saveChangeStatus(zoom, Number(CONST.fontSize), submitButton, defCon.Val);
            }
          }

          /* Fonts stroke */

          let drawStrock;
          const strock = qS(`#${defCon.id.strokeSize}`);
          try {
            let strokeId = document.querySelector(`#${defCon.id.stroke}`);
            // eslint-disable-next-line no-undef
            drawStrock = new Powerange(strokeId, {
              callback: () => {
                const _value = Number(strokeId.value);
                strock.value = _value === 0 ? "OFF" : _value.toFixed(3);
                strock._value_ = _value;
              },
              decimal: true,
              hideRange: true,
              min: 0,
              max: 1.0,
              start: CONST.fontStroke,
              step: 0.001,
            });
            checkdraw(strock, drawStrock, /[0-9](\.[0-9]{1,3})?/);
          } catch (e) {
            defCon.errors.push(`[Fonts stroke]: ${e}`);
            error("\u27A4 Fonts stroke:", e);
          } finally {
            saveChangeStatus(strock, Number(CONST.fontStroke), submitButton, defCon.Val);
          }

          /* Fonts shadow */

          let drawShadow;
          const shadows = qS(`#${defCon.id.shadowSize}`);
          try {
            let shadowId = document.querySelector(`#${defCon.id.shadow}`);
            // eslint-disable-next-line no-undef
            drawShadow = new Powerange(shadowId, {
              callback: () => {
                const _value = Number(shadowId.value);
                shadows.value = _value === 0 ? "OFF" : _value.toFixed(2);
                shadows._value_ = _value;
              },
              decimal: true,
              hideRange: true,
              min: 0,
              max: 8.0,
              start: CONST.fontShadow,
              step: 0.01,
            });
            checkdraw(shadows, drawShadow, /[0-9](\.[0-9]{1,2})?/);
          } catch (e) {
            defCon.errors.push(`[Fonts shadow]: ${e}`);
            error("\u27A4 Fonts shadow:", e);
          } finally {
            saveChangeStatus(shadows, Number(CONST.fontShadow), submitButton, defCon.Val);
          }

          /* Fonts shadow color selection */

          let picker;
          const cpshow = qS(`#${defCon.id.cps}`);
          const cp = qS(`#${defCon.id.cpm}`);
          const body = qS("body");
          const colorshow = qS(`#${defCon.id.color}`);
          const colorReg = /^currentcolor$|^#([A-F0-9]{6})$/;
          try {
            picker = new ColorPicker({
              dom: cp,
              value: CONST.shadowColor,
              def: CONST.shadowColor,
            });
            debug("\u27A4 ColorPicker:", picker._lastValue);
            cpshow.addEventListener("click", function (e) {
              if (cp.style.display === "block") {
                cp.style = "display:none";
              } else {
                e.stopPropagation();
                cp.style = "display:block";
              }
            });
            cp.addEventListener(
              "click",
              function (e) {
                e.stopPropagation();
              },
              false
            );
            body.addEventListener("click", function () {
              cp.style = "display:none";
            });
          } catch (e) {
            defCon.errors.push(`[Fonts shadowColor]: ${e}`);
            error("\u27A4 Fonts shadowColor:", e);
          } finally {
            saveChangeStatus(colorshow, CONST.shadowColor, submitButton, defCon.Val);
          }

          /* Double-click allows you to edit */

          const fontExT = qS(`#${defCon.id.exclude}`);
          const fontCssT = qS(`#${defCon.id.cssfun}`);
          if (fontCssT) {
            fontCssT.addEventListener("dblclick", () => {
              fontCssT.setAttribute("class", `${defCon.class.notreadonly}`);
              fontCssT.title = "\u8bf7\u8c28\u614e\u4fee\u6539\u8be5\u53c2\u6570\uff01";
              fontCssT.readOnly = false;
            });
          }

          saveChangeStatus(fontCssT, CONST.fontCSS, submitButton, defCon.Val);
          saveChangeStatus(fontExT, CONST.fontEx, submitButton, defCon.Val);

          /* Expand & Collapse */

          expandORcollapse(qS(`#${defCon.id.cSwitch}`), fontCssT, qS(`#${defCon.id.fontCSS}`));
          expandORcollapse(qS(`#${defCon.id.eSwitch}`), fontExT, qS(`#${defCon.id.fontEx}`));

          /* Buttons control */

          qS(`#${defCon.id.submit} .${defCon.class.reset}`).addEventListener("click", async function () {
            let frDialog = new frDialogBox({
              trueButtonText: "重 置",
              falseButtonText: "恢 复",
              neutralButtonText: "取 消",
              messageText: `<p>『重置/恢复』将当前设置初始化为 <span style="color:slategray">程序默认的初始数据</span> 或 <span style="color:slategrey">上次正确保存的数据</span>。一般是在您错误配置参数且造成无法挽回的情况下才进行重置参数的操作。</p><p style="color:darkgreen">重置：重置当前数据为程序初始值，手动保存生效。</p><p style="color:darkred">恢复：替换为上次正确保存的数据，自动恢复预览。</p><p style="color:gray">取消：放弃重置操作。</p>`,
              titleText: "参数重置确认",
            });
            if (await frDialog.respond()) {
              fontSet().fdeleteList(fontData);
              if (isFontsize) {
                zoom.value = Number(defValue.fontSize) ? Number(defValue.fontSize).toFixed(3) : "OFF";
                zoom._value_ = Number(defValue.fontSize);
                drawZoom.setStart(Number(defValue.fontSize));
                defCon.tZoom = Number(defValue.fontSize);
              }
              strock.value = Number(defValue.fontStroke) ? Number(defValue.fontStroke).toFixed(3) : "OFF";
              strock._value_ = Number(defValue.fontStroke);
              drawStrock.setStart(Number(defValue.fontStroke));
              shadows.value = Number(defValue.fontShadow) ? Number(defValue.fontShadow).toFixed(2) : "OFF";
              shadows._value_ = Number(defValue.fontShadow);
              drawShadow.setStart(Number(defValue.fontShadow));
              picker.value = defValue.shadowColor;
              picker._value_ = picker.value;
              smoothT.checked !== defValue.fontSmooth ? smoothT.click() : debug("\u27A4 fontSmooth Not Modified");
              ffaceT.checked !== defValue.fontFace ? ffaceT.click() : debug("\u27A4 fontFace Not Modified");
              fontCssT.value = defValue.fontCSS;
              fontExT.value = defValue.fontEx;
              this.parentNode.children[3].click();
            } else {
              fontSet().fdeleteList(fontData);
              if (isFontsize) {
                zoom.value = Number(CONST.fontSize) ? Number(CONST.fontSize).toFixed(3) : "OFF";
                zoom._value_ = Number(CONST.fontSize);
                drawZoom.setStart(Number(CONST.fontSize));
                defCon.tZoom = Number(CONST.fontSize);
              }
              strock.value = Number(CONST.fontStroke) ? Number(CONST.fontStroke).toFixed(3) : "OFF";
              strock._value_ = Number(CONST.fontStroke);
              drawStrock.setStart(Number(CONST.fontStroke));
              shadows.value = Number(CONST.fontShadow) ? Number(CONST.fontShadow).toFixed(2) : "OFF";
              shadows._value_ = Number(CONST.fontShadow);
              drawShadow.setStart(Number(CONST.fontShadow));
              picker.value = CONST.shadowColor;
              picker._value_ = picker.value;
              smoothT.checked !== CONST.fontSmooth ? smoothT.click() : debug("\u27A4 fontSmooth Not Modified");
              ffaceT.checked !== CONST.fontFace ? ffaceT.click() : debug("\u27A4 fontFace Not Modified");
              fontCssT.value = CONST.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST.fontCSS, defCon.Val, fontCssT, submitButton);
              fontExT.value = CONST.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST.fontEx, defCon.Val, fontExT, submitButton);
              __preview__(defCon.preview);
              GetCurFont(ffaceT.checked, defCon.refont, defautlFont);
              autoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
            }
            frDialog = null;
          });

          qS(`#${defCon.id.submit} .${defCon.class.submit}`).addEventListener("click", async function () {
            const perfzoom = isFontsize ? (/[0-9]+(?:\.[0-9]{1,3})?/.test(zoom.value) ? Number(zoom.value) : zoom.value === "OFF" ? 0 : Number(defValue.fontStroke)) : 1;
            const fzoom = perfzoom < 0.8 ? 0.8 : perfzoom > 1.5 ? 1.5 : perfzoom;
            const fstrock = /[0-9]+(?:\.[0-9]{1,3})?/.test(strock.value) ? Number(strock.value) : strock.value === "OFF" ? 0 : Number(defValue.fontStroke);
            const fshadow = /[0-9]+(?:\.[0-9]{1,2})?/.test(shadows.value) ? Number(shadows.value) : shadows.value === "OFF" ? 0 : Number(defValue.fontShadow);
            const pickedcolor = colorshow.value;
            const fscolor = colorReg.test(pickedcolor) ? pickedcolor : defValue.shadowColor;
            const fontlists = fontSet().fsearchList(`${defCon.id.fontName}`);
            const fontselect =
              fontlists.length > 0
                ? fontlists.indexOf("Microsoft YaHei") === 0
                  ? defValue.fontSelect
                  : String(singleQuoteStr(fontlists) + defValue.fontSelect)
                : CONST.fontSelect.indexOf("Microsoft YaHei") === 0
                ? defValue.fontSelect
                : CONST.fontSelect.split(",")[0] + "," + defValue.fontSelect;
            const smooth = smoothT.checked;
            const fontface = ffaceT.checked;
            const fcss = fontCssT.value;
            const cssfun = fcss ? fcss.replace(/"|`/g, "'") : defValue.fontCSS;
            const fex = fontExT.value;
            const fontex = fex ? fex.replace(/"|`/g, "'") : "";
            if (defCon.isPreview && this.getAttribute("v-Preview")) {
              try {
                const _bodyZoom = isFontsize
                  ? fzoom >= 0.8 && fzoom <= 1.5 && fzoom !== 1
                    ? String(
                        `body{zoom:${fzoom}!important;` +
                          `-moz-transform:scale(${fzoom});-moz-transform-origin:left top;` +
                          `-o-transform:scale(${fzoom});-o-transformOrigin:left top;` +
                          String(getBrowser.type("core").Gecko || getBrowser.type("core").Presto ? `width:${100 / fzoom}%;height:${100 / fzoom}%}` : `}`)
                      )
                    : ``
                  : "";
                const _shadow = fshadow > 0 && fshadow <= 8 ? `text-shadow:0 0 ${fshadow}px ${fscolor};` : "";
                const _stroke = fstrock > 0 && fstrock <= 1.0 ? `text-stroke:${fstrock}px currentcolor;-webkit-text-stroke:${fstrock}px currentcolor;paint-order:stroke fill;` : "";
                const _selection = stroke ? `::selection{color:#ffffff!important;background:#338fff!important}` : ``;
                const _smoothing = smooth ? `-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;` : "";
                const _fontfamily = fontface ? `font-family:${fontselect};` : "";
                const _refont = fontselect.split(",")[0] ? fontselect.split(",")[0].replace(/"|'/g, "") : "";
                const _fontfaces = fontface
                  ? _refont !== ""
                    ? `@font-face{font-family:"宋体";src:local("${_refont}")}@font-face{font-family:"黑体";src:local("${_refont}")}@font-face{font-family:SimHei;src:local("${_refont}")}@font-face{font-family:SimSun;src:local("${_refont}")}@font-face{font-family:"serif";src:local("${_refont}")}@font-face{font-family:"Microsoft YaHei UI";src:local("${_refont}")}@font-face{font-family:"Segoe UI";src:local("${_refont}")}@font-face{font-family:"sans-serif";src:local("${_refont}")}@font-face{font-family:Tahoma;src:local("${_refont}")}@font-face{font-family:Arial;src:local("${_refont}")}@font-face{font-family:Helvetica;src:local("${_refont}")}`
                    : ``
                  : "";
                const _codeFont = fontface
                  ? "* pre,* pre *,* code,* code *{font:14px/130% 'Operator Mono Lig','Fira Code','Roboto Mono','Monaco','Courier New',monospace!important}"
                  : "";
                const _exclude = fontex ? `${fontex}{text-stroke:initial!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}` : "";
                const _tshadow = `${_bodyZoom}${_codeFont}${_selection}${cssfun}{${_shadow}${_stroke}${_smoothing}${_fontfamily}}${_fontfaces}${_exclude}`;
                defCon.tZoom = fzoom;
                this.innerText = "\u4fdd\u5b58";
                this.removeAttribute("style");
                this.removeAttribute("v-Preview");
                __preview__(defCon.isPreview, _tshadow, false);
                GetCurFont(fontface, _refont, defautlFont);
                autoZoomFontSize(`#${defCon.id.rndId}`, fzoom);
              } catch (e) {
                defCon.errors.push(`[submitPreview]: ${e}`);
                reportErrortoAuthor(defCon.errors, true);
                error("\u27A4 submitPreview:", e);
              }
            } else {
              try {
                let frDialog = new frDialogBox({
                  trueButtonText: "保存到全局数据",
                  falseButtonText: "保存到网站数据",
                  neutralButtonText: "取 消",
                  messageText: `<p style='color:darkgreen;font-weight:900'>保存到全局数据：</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p style='color:darkred;font-weight:900'>保存到当前网站数据：<span id='${defCon.id.seed}_a_w_d_l_'>[<span style='font-size:12px!important;font-weight:normal;padding:0 2px;margin:0;cursor:pointer;color:#3e3e3e'>全部数据列表</span>]</span></p><p><span title="保存到网站数据会自动覆盖之前的数据" style="cursor:help;color:indigo" id="${defCon.id.seed}_c_w_d_">为 ${curHostname} 保存独立的设置数据。</span>`,
                  titleText: "保存设置数据",
                });
                domains = await GMgetValue("_domains_fonts_set_");
                domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : default_domains;
                const _awdl = qS(`#${defCon.id.seed}_a_w_d_l_`);
                if (_awdl) {
                  if (domainValue.length > 0) {
                    _awdl.style.cssText += "display:line-block";
                  } else {
                    _awdl.style.cssText += "display:none";
                  }
                  _awdl.addEventListener("click", async () => {
                    closeAllDialog(`div.${defCon.class.db}`);
                    manageDomainList();
                  });
                }
                domains = await GMgetValue("_domains_fonts_set_");
                domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : default_domains;
                domainValueIndex = update_domain_index(domainValue);
                if (domainValueIndex !== undefined && qS(`#${defCon.id.seed}_c_w_d_`)) {
                  const fontDate = dateFormat("YYYY-mm-dd HH:MM:SS", new Date(domainValue[domainValueIndex].fontDate));
                  qS(`#${defCon.id.seed}_c_w_d_`).innerHTML = String(`<p>上次保存：${fontDate} <button id="${defCon.id.seed}_c_w_d_d_"\
                    style="padding:3px 5px;margin-left:15px;cursor:pointer;color:#333;font-size:12px!important;border:1px solid #777;border-radius:4px;"\
                    title="删除数据后将刷新页面">删除当前网站数据</button></p>`).trim();
                  qS(`#${defCon.id.seed}_c_w_d_d_`).addEventListener("click", async () => {
                    domainValue.splice(domainValueIndex, 1);
                    GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                    cache.remove("_fontlist_");
                    closeAllDialog(`div.${defCon.class.db}`);
                    let frDialog = new frDialogBox({
                      trueButtonText: "感谢使用",
                      messageText: `<p style='color:darkred'>时间戳${fontDate}的数据已成功删除！</p><p>当前页面将在您确认后自动刷新。</p>`,
                      titleText: "个性化数据删除",
                    });
                    closeConfigurePage(true);
                    if (await frDialog.respond()) {
                      closeAllDialog(`div.${defCon.class.db}`);
                      location.reload();
                    }
                    frDialog = null;
                  });
                }
                defCon.fontlistchanged = fontselect.split(",")[0] !== CONST.fontSelect.split(",")[0];
                if (await frDialog.respond()) {
                  saveDate("_fonts_set_", {
                    fontSelect: filterHtml(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstrock),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtml(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtml(cssfun),
                    fontEx: filterHtml(fontex),
                  });
                  defCon.successId = true;
                } else {
                  const _savedata_ = {
                    domain: curHostname,
                    fontDate: new Date(),
                    fontSelect: filterHtml(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstrock),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtml(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtml(cssfun),
                    fontEx: filterHtml(fontex),
                  };
                  domains = await GMgetValue("_domains_fonts_set_");
                  domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : default_domains;
                  domainValueIndex = update_domain_index(domainValue);
                  if (domainValueIndex !== undefined) {
                    domainValue.splice(domainValueIndex, 1, _savedata_);
                  } else {
                    domainValue.push(_savedata_);
                  }
                  if (domainValue.length <= maxPersonalSites || domainValueIndex !== undefined) {
                    GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                    defCon.successId = true;
                  } else {
                    let frDialog = new frDialogBox({
                      trueButtonText: "依然保存",
                      falseButtonText: "管理列表",
                      neutralButtonText: "我放弃",
                      messageText: `<p style='color:darkgreen'>您已经保存超过<span style="font-size:20px;font-weight:700;font-style:italic;color:crimson">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p style='color:crimson'>您确认要继续保存吗？</p>`,
                      titleText: "数据过多的提示",
                    });
                    if (await frDialog.respond()) {
                      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                      defCon.successId = true;
                    } else {
                      manageDomainList();
                      defCon.successId = false;
                    }
                    frDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                defCon.errors.push(`[saveDate]: ${e}`);
                reportErrortoAuthor(defCon.errors, true);
                error("\u27A4 saveDate:", e);
                defCon.successId = false;
              } finally {
                if (defCon.successId) {
                  closeAllDialog(`div.${defCon.class.db}`);
                  let frDialog = new frDialogBox({
                    trueButtonText: "感谢使用",
                    messageText: `<p style="color:darkgreen">您设置的参数已保存！</p><p>当前页面将在您确认后自动刷新。</p>`,
                    titleText: "数据保存完毕",
                  });
                  if (defCon.fontlistchanged) {
                    cache.remove("_fontlist_");
                  }
                  closeConfigurePage(true);
                  if (await frDialog.respond()) {
                    frDialog = null;
                    location.reload();
                  }
                }
              }
            }
          });

          backupData(isBackupFunction, default_domains);

          qS(`#${defCon.id.submit} .${defCon.class.cancel}`).addEventListener("click", () => {
            closeConfigurePage(false);
          });
        }
      } catch (e) {
        defCon.errors.push(`[operationConfigure]: ${e}`);
        error("\u27A4 operationConfigure:", e);
      }
    }

    function closeConfigurePage(isReload) {
      if (qS(`#${defCon.id.rndId}`)) {
        qS(`#${defCon.id.rndId}`).style = "opacity:0";
        setTimeout(() => {
          qS(`#${defCon.id.rndId}`).remove();
        }, 500);
        if (!isReload) {
          if (defCon.preview) {
            __preview__(defCon.isPreview);
            defCon.tZoom = CONST.fontSize;
          }
          closeAllDialog(`div.${defCon.class.db}`);
        }
      }
    }

    function GetCurFont(_isfontface_, refont, def) {
      const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
      reFontFace = def;
      defCon.curFont = def;
      if (_isfontface_) {
        fontCheck.forEach(item => {
          if (item.en === refont || convert2Unicode(item.ch) === refont) {
            defCon.curFont = refont.includes("\\") ? "" : " (" + item.en + ")";
            reFontFace = item.ch + defCon.curFont;
            defCon.curFont = item.ch;
          }
        });
      }
      if (inputFont) {
        inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
      }
    }

    function backupData(convertejsondatatosqlite, def) {
      const backupT = qS(`#${defCon.id.backup}`);
      if (convertejsondatatosqlite && backupT) {
        backupT.style = "display:inline-block";
        backupT.addEventListener("click", async () => {
          try {
            let frDialog = new frDialogBox({
              trueButtonText: "备 份",
              falseButtonText: "还 原",
              neutralButtonText: "取 消",
              messageText: `<p style='color:darkgreen;font-weight:900'>备份到本地文件：</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p style='color:darkred;font-weight:900'>从本地文件还原：</p><p><span style="cursor:pointer;color:indigo" id="${defCon.id.tfiles}">\ud83d\udc49\u0020[点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${defCon.id.files}"/></p>`,
              titleText: "备份与还原数据",
            });
            const tfs = qS(`#${defCon.id.tfiles}`);
            const fs = qS(`#${defCon.id.files}`);
            if (tfs && fs) {
              tfs.addEventListener("click", () => {
                fs.click();
              });
              fs.addEventListener("change", () => {
                tfs.innerHTML = `<em style="color:indigo;font-size:12px!important">${fs.files[0].name}</em>\u0020\ud83d\udc49<span style="color:crimson">[重新选择]</span>`;
              });
            }
            if (await frDialog.respond()) {
              const _fonts_set_ = await GMgetValue("_fonts_set_");
              const _Exclude_site_ = await GMgetValue("_Exclude_site_");
              const _domains_fonts_set_ = await GMgetValue("_domains_fonts_set_");
              const _domains_fonts_set__ = _domains_fonts_set_ ? _domains_fonts_set_ : defCon.encrypt(JSON.stringify(def));
              const db_R = "QXV0aGVyJUUyJTlBJUExRjl5NG5nJUYwJTlGJTkyJTk2JTQw" + defCon.encrypt(defCon.scriptName);
              const db_0 = defCon.encrypt(new Date());
              const db_1 = _fonts_set_;
              const db_2 = _Exclude_site_;
              const db_3 = _domains_fonts_set__;
              const db = { db_R, db_0, db_1, db_2, db_3 };
              const timeStamp = dateFormat("YYYYmmddHHMMSS", new Date());
              const via = `.${getBrowser.type("browser").toLowerCase()}`;
              dataDownload(`backup.${timeStamp}${via}.sqlitedb`, defCon.sqliteDB(JSON.stringify(db), true, root));
              let frDialog = new frDialogBox({
                trueButtonText: "确 定",
                messageText: `<p style="color:darkgreen">备份数据已归档，备份文件导出下载中……</p><p>文件名：<span style="color:darkred;font-size:12px!important">backup.${timeStamp}${via}.sqlitedb</span></p>`,
                titleText: "数据备份",
              });
              if (await frDialog.respond()) {
                frDialog = null;
              }
            } else {
              try {
                const thatFile = fs.files[0];
                debug(`\u27A4 backupData:`, thatFile.name, thatFile.size);
                let reader = new FileReader();
                reader.readAsText(thatFile);
                reader.onload = async function () {
                  try {
                    const _file_ = defCon.decrypt(this.result);
                    const _rs = JSON.parse(defCon.sqliteDB(_file_, false, root));
                    const _data_R = defCon.decrypt(_rs.db_R);
                    const _data_0 = defCon.decrypt(_rs.db_0);
                    const _data_1 = JSON.parse(defCon.decrypt(_rs.db_1));
                    const _data_2 = JSON.parse(defCon.decrypt(_rs.db_2));
                    const _data_3 = _rs.db_3 ? JSON.parse(defCon.decrypt(_rs.db_3)) : def;
                    if (!isNaN(Date.parse(_data_0)) && new Date(_data_0) <= new Date() && _data_R.includes(defCon.scriptAuthor)) {
                      GMsetValue("_fonts_set_", defCon.encrypt(JSON.stringify(_data_1)));
                      GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(_data_2)));
                      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(_data_3)));
                      let frDialog = new frDialogBox({
                        trueButtonText: "确 定",
                        messageText: `<p style="color:darkgreen">本地备份数据还原完毕！</p><p>当前页面将在您确认后自动刷新。</p>`,
                        titleText: "数据还原成功",
                      });
                      closeConfigurePage(true);
                      if (await frDialog.respond()) {
                        frDialog = null;
                        location.reload();
                      }
                    } else {
                      throw new Error("Invalid Date Error");
                    }
                  } catch (e) {
                    error("\u27A4 FileReader.onload:", e.name);
                    let frDialog = new frDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:red">数据校验错误，请选择正确的本地备份文件！</p>`,
                      titleText: "数据文件错误",
                    });
                    if (await frDialog.respond()) {
                      frDialog = null;
                      qS(`#${defCon.id.backup}`).click();
                    }
                  }
                };
              } catch (e) {
                error("\u27A4 thatFile:", e.name);
                let frDialog = new frDialogBox({
                  trueButtonText: "确 定",
                  messageText: `<p style="color:indigo">载入文件为空，请选择要还原的备份文件！</p>`,
                  titleText: "没有文件载入",
                });
                if (await frDialog.respond()) {
                  frDialog = null;
                  qS(`#${defCon.id.backup}`).click();
                }
              }
            }
            frDialog = null;
          } catch (e) {
            defCon.errors.push(`[backupData]: ${e}`);
            reportErrortoAuthor(defCon.errors, true);
            error("\u27A4 backupData:", e);
          }
        });
      }
    }

    function copyToClipboard(text) {
      function handler(event) {
        event.clipboardData.setData("text/plain", text);
        event.preventDefault();
        document.removeEventListener("copy", handler, true);
      }
      document.addEventListener("copy", handler, true);
      document.execCommand("copy");
    }

    function expandORcollapse(a, b, c) {
      if (a && b && c) {
        const at = a.attributes["data-switch"];
        a.addEventListener("click", () => {
          if (at.value === "ON") {
            b.style = "display:none";
            a.textContent = "\u2228";
            c.style = "min-height:35px";
            at.value = "OFF";
          } else {
            b.style = "display:block";
            a.textContent = "\u2227";
            c.style = "min-height:110px";
            at.value = "ON";
          }
        });
      }
    }

    function saveChangeStatus(t, e, d, v) {
      let value, method;
      try {
        if (t && d) {
          if (t.type !== "text") {
            method = t.type === "textarea" ? "keyup" : "change";
            t.addEventListener(method, () => {
              value = t.type === "checkbox" ? t.checked : t.value;
              setEffectIntoSubmit(value, e, v, t, d);
            });
          } else {
            Object.defineProperty(t, "_value_", {
              enumerable: true,
              configurable: true,
              get: function () {
                return this._value_;
              },
              set: function (newVal) {
                setEffectIntoSubmit(newVal, e, v, t, d);
              },
            });
          }
        }
      } catch (e) {
        defCon.errors.push(`[saveChangeStatus]: ${e}`);
        error("\u27A4 saveChangeStatus:", e);
      }
    }

    function setEffectIntoSubmit(value, e, v, t, d) {
      try {
        const _value = t.attributes.v !== undefined ? (value === "OFF" ? 0 : Number(value)) : value;
        if (_value !== e) {
          !v.includes(t.id) ? v.push(t.id) : debug("\u27A4 ID already exists");
          if (defCon.isPreview) {
            d.innerText = "\u9884\u89c8";
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
        defCon.Val = v;
        debug("\u27A4 Changed Elements", defCon.Val);
        if (defCon.Val.length > 0) {
          if (!d.classList.contains(`${defCon.class.anim}`)) {
            d.classList.add(`${defCon.class.anim}`);
          }
          if (!defCon.Val.includes(t.id) && defCon.isPreview) {
            d.innerText = "\u9884\u89c8";
            d.setAttribute("style", "background-color:coral!important;border-color:coral!important");
            d.setAttribute("v-Preview", "true");
          }
        } else {
          if (d.classList.contains(`${defCon.class.anim}`)) {
            d.classList.remove(`${defCon.class.anim}`);
          }
          if (defCon.isPreview) {
            d.innerText = "\u4fdd\u5b58";
            d.removeAttribute("style");
            d.removeAttribute("v-Preview");
            __preview__(defCon.preview);
            defCon.tZoom = CONST.fontSize;
            autoZoomFontSize(`#${defCon.id.rndId}`, CONST.fontSize);
          }
        }
      } catch (e) {
        error("\u27A4 setEffectIntoSubmit:", e);
      }
    }

    async function manageDomainList(_temp_ = [], Contents = "") {
      let domains, domainValue, domainValueIndex;
      try {
        domains = await GMgetValue("_domains_fonts_set_");
        domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : default_domains;
        const _data_search_ =
          domainValue.length > 6
            ? `<p><input id="${defCon.id.seed}_d_s_" style="width:52%;font-size:12px!important;border:2px solid #777;border-radius:4px;margin:4px 4px 6px 0;padding:3px 15px"><button id="${defCon.id.seed}_d_s_s_" style="padding:3px 10px;cursor:pointer;font-size:12px!important;border:1px solid #777;border-radius:4px;">查 询</button><button id="${defCon.id.seed}_d_s_c_" style="margin-left:4px;padding:3px 10px;cursor:pointer;font-size:12px!important;border:1px solid #777;border-radius:4px;">清 除</button></p>`
            : "";
        for (let i = 0; i < domainValue.length; i++) {
          Contents += `<li id="${defCon.id.seed}_d_d_l_${i}" style="list-style:none;font-size:14px!important;font-style:normal;padding:5px;color:#555">\
                [<span id="${defCon.id.seed}_d_d_l_s_${i}" style="padding:3px;cursor:pointer;color:crimson;font-size:14px!important">删除</span>]\
                <span>${i + 1}. ${filterHtml(domainValue[i].domain)} - ${dateFormat("YYYY/mm/dd HH:MM:SS", new Date(domainValue[i].fontDate))}</span></li>`;
        }
        let frDialog = new frDialogBox({
          trueButtonText: "确认操作，保存数据",
          neutralButtonText: "取 消",
          messageText: `<p style="font-size:14px!important;color:darkred">请谨慎操作，保存后生效，已删除的数据将不可恢复！</p>${_data_search_}<ul id="${defCon.id.seed}_d_d_" style="margin:0;padding:0;list-style:none;overflow:auto;max-height:190px;white-space:nowrap">${Contents}</ul>`,
          titleText: "网站个性化设置数据列表：",
        });
        const items = document.querySelectorAll(`#${defCon.id.seed}_d_d_ li span[id^="${defCon.id.seed}_d_d_l_s_"]`);
        if (qS(`#${defCon.id.seed}_d_s_`) && qS(`#${defCon.id.seed}_d_s_c_`) && qS(`#${defCon.id.seed}_d_s_s_`)) {
          qS(`#${defCon.id.seed}_d_s_`).addEventListener("keydown", e => {
            const event = e || window.event;
            if (event.keyCode === 13) {
              qS(`#${defCon.id.seed}_d_s_s_`).click();
            }
          });
          qS(`#${defCon.id.seed}_d_s_`).addEventListener("input", () => {
            qS(`#${defCon.id.seed}_d_s_`).value = qS(`#${defCon.id.seed}_d_s_`).value.replace(/[^a-z0-9.-]/gi, "");
          });
          qS(`#${defCon.id.seed}_d_s_c_`).addEventListener("click", () => {
            qS(`#${defCon.id.seed}_d_s_`).value = "";
            qS(`#${defCon.id.seed}_d_s_`).style.cssText += "border-color:#777";
            qS(`#${defCon.id.seed}_d_d_`).scrollTop = 0;
            qS(`#${defCon.id.seed}_d_s_`).focus();
          });
          qS(`#${defCon.id.seed}_d_d_`).addEventListener("click", () => {
            qS(`#${defCon.id.seed}_d_s_`).focus();
          });
          qS(`#${defCon.id.seed}_d_s_s_`).addEventListener("click", () => {
            if (qS(`#${defCon.id.seed}_d_s_`).value) {
              if (window.find) {
                qS(`#${defCon.id.seed}_d_s_`).style.cssText += window.find(qS(`#${defCon.id.seed}_d_s_`).value, 0) ? "border-color:#777" : "border-color:red";
                if (window.getSelection) {
                  const _sTxt = window.getSelection();
                  const _rows = Number(_sTxt.anchorNode.parentNode.parentNode.id.replace(`${defCon.id.seed}_d_d_l_`, ""));
                  const _offsetHeight = Number(_sTxt.anchorNode.parentNode.parentNode.offsetHeight);
                  qS(`#${defCon.id.seed}_d_d_`).scrollTop = _rows * _offsetHeight;
                }
              }
            }
          });
        }
        for (let j = 0; j < items.length; j++) {
          items[j].addEventListener(
            "click",
            function (a, b) {
              if (!this.getAttribute("data-del")) {
                const _list_Id_ = Number(this.id.replace(`${defCon.id.seed}_d_d_l_s_`, ""));
                a.push(b[_list_Id_].domain);
                this.setAttribute("data-del", b[_list_Id_].domain);
                this.innerHTML = "恢复";
                this.style.cssText += "color:green";
                this.nextElementSibling.style = "text-decoration:line-through";
              } else {
                a.splice(a.indexOf(this.getAttribute("data-del")), 1);
                this.removeAttribute("data-del");
                this.innerHTML = "删除";
                this.style.cssText += "color:crimson";
                this.nextElementSibling.style = "text-decoration:none";
              }
            }.bind(items[j], _temp_, domainValue)
          );
        }
        if (await frDialog.respond()) {
          for (let l = _temp_.length - 1; l >= 0; l--) {
            domains = await GMgetValue("_domains_fonts_set_");
            domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : default_domains;
            domainValueIndex = update_domain_index(domainValue, _temp_[l]);
            domainValue.splice(domainValueIndex, 1);
            GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
            if (_temp_[l] === curHostname) {
              defCon.equal = true;
              continue;
            }
          }
          let frDialog = new frDialogBox({
            trueButtonText: "感谢使用",
            messageText: `<p style="color:darkgreen">网站个性化设置数据已保存！${
              defCon.equal ? "</p><p>当前页面将在您确认后自动刷新。" : "</p><p>确认后您可以在当前页面继续其他操作。"
            }</p>`,
            titleText: "数据保存完毕",
          });
          if (await frDialog.respond()) {
            closeAllDialog(`div.${defCon.class.db}`);
            frDialog = null;
            if (defCon.equal) {
              cache.remove("_fontlist_");
              closeConfigurePage(true);
              location.reload();
            }
          }
        }
        frDialog = null;
      } catch (e) {
        defCon.errors.push(`[manageDomainList]: ${e}`);
        reportErrortoAuthor(defCon.errors, true);
        error("\u27A4 manageDomainList:", e);
      }
    }

    async function reportErrortoAuthor(e, show = isdebug, errors = "") {
      if (show) {
        closeConfigurePage(true);
        setTimeout(async () => {
          try {
            closeAllDialog(`div.${defCon.class.db}`);
            const br = e.length > 1 ? "\u3000<br/>" : "";
            for (let i in e) {
              errors += e[i] + br;
            }
            let frDialog = new frDialogBox({
              trueButtonText: "反馈问题",
              messageText: String(
                `<p style='color:crimson'>脚本运行过程中发生了错误，请及时告知作者，感谢您的反馈！以下信息会自动保存至您的剪切板：</p>
                <p>
                  <ul id='${defCon.id.seed}_copy_to_author'>
                    <li>浏览器信息：${getBrowser.type()}\u3000</li>
                    <li>脚本扩展信息：${handlerInfo} ${GMversion}\u3000</li>
                    <li>脚本版本信息：${defCon.curVersion}\u3000</li>
                    <li>当前访问域名：${curHostname}\u3000</li>
                    <li>错误信息：<span style="color:tan">${errors}</span>\u3000</li>
                  </ul>
                </p>`
              ).trim(),
              titleText: defCon.scriptName + "错误报告",
            });
            const copyText = qS(`#${defCon.id.seed}_copy_to_author`).innerText.replace(/\u3000/g, "\n");
            defCon.errors.length = 0;
            if (await frDialog.respond()) {
              copyToClipboard(copyText);
              closeAllDialog(`div.${defCon.class.db}`);
              GMopenInTab(feedback, defCon.options);
            }
            frDialog = null;
          } catch (e) {
            error("\u27A4 reportError:", e);
          }
        }, Math.round(1e3 * Math.random()));
      }
    }

    function dateFormat(fmt, date) {
      let ret;
      const opt = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString(),
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
      }
      return fmt;
    }

    function autoZoomFontSize(target, zoom, curZoom) {
      try {
        if (getBrowser.type("core").Gecko || getBrowser.type("core").Presto) {
          curZoom = zoom || 1;
          if (curZoom !== 1) {
            qS(target).style.transformOrigin = "left top";
            qS(target).style.transform = "scale(" + 1 / curZoom + ")";
            qS(target).style.width = 100 * curZoom + "%";
            qS(target).style.height = Position.getViewport(qS(target)).bottom + "px";
            window.scrollTo(document.documentElement.clientWidth, 0);
          } else {
            qS(target).setAttribute("style", "opacity:1");
          }
        } else {
          curZoom = Number(window.getComputedStyle(document.body, null).getPropertyValue("zoom")) || zoom || 1;
          if (curZoom !== 1) {
            qS(target).style.cssText += "zoom:" + Number(1 / curZoom);
          } else {
            qS(target).setAttribute("style", "opacity:1");
          }
        }
      } catch (e) {
        defCon.errors.push(`[autoZoomFontSize]: ${e}`);
        error("\u27A4 autoZoomFontSize:", e);
      } finally {
        if (curZoom !== 1) {
          debug(
            "\u27A4 FontSize Zoom: save[%s%] current[%c%s% %c%s%]",
            (CONST.fontSize * 100).toFixed(2),
            "color:teal",
            (curZoom * 100).toFixed(2),
            "color:indigo",
            ((1 / curZoom) * 100).toFixed(2)
          );
        }
      }
    }

    function filterHtml(html) {
      if (html.substr(html.length - 1, 1) === ",") {
        html = html.substr(0, html.length - 1);
      }
      html = html.replace(/expression|\\u|`|{|}/gi, "");
      const _tmp = document.createElement("div");
      _tmp.innerHTML = html;
      return _tmp.textContent || _tmp.innerText || "";
    }

    function singleQuoteStr(str) {
      let returnStr = "";
      const strs = str.toString().split(",");
      for (let s = 0; s < strs.length; s++) {
        if (strs[s] !== "Microsoft YaHei") {
          returnStr += `'${strs[s]}',`;
        }
      }
      return returnStr;
    }

    function saveDate(key, { ...Options }) {
      const obj = { ...Options };
      try {
        GMsetValue(key, defCon.encrypt(JSON.stringify(obj)));
      } catch (e) {
        error("\u27A4 saveDate:", e);
      }
    }
  })();
})();
