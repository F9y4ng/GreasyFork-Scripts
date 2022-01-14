/* jshint esversion: 9 */
// ==UserScript==
// @name              字体渲染（自用脚本）
// @name:zh           字体渲染（自用脚本）
// @name:zh-TW        字體渲染（自用腳本）
// @name:ja           フォントレンダリング（カスタマイズ）
// @name:en           Font Rendering (Customized)
// @version           2022.01.07.1
// @author            F9y4ng
// @description       无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh    无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的Greasemonkey脚本和浏览器插件。
// @description:zh-TW 無需安裝MacType，優化浏覽器字體顯示，讓每個頁面的中文字體變得有質感，默認使用微軟雅黑字體，亦可自定義設置多種中文字體，附加字體描邊、字體重寫、字體陰影、字體平滑、對特殊樣式元素的過濾和許可等效果，腳本菜單中可使用設置界面進行參數設置，亦可對某域名下所有頁面進行排除渲染，兼容常用的Greasemonkey腳本和瀏覽器插件。
// @description:ja    各ページの中国語フォントをテクスチャにしたり、デフォルトでMicrosoft Yaheiフォントを使用したり、複数の中国語フォントをカスタマイズしたり、フォントストローク、フォント書き換え、フォントシャドウ、フォントスムージング、特別なスタイル要素のフィルタリングやライセンスなどの効果を追加したり、スクリプトメニューで設定インターフェイスを使用してパラメータ設定を行ったり、ドメイン名の下にあるすべてのページを除外してレンダリングしたり、一般的なGreasemonkeyスクリプトやブラウザプラグインと互換性があります。
// @description:en    Let each page of the Chinese font becomes texture, the default uses Microsoft YaHei font, and you can customize the set of Chinese fonts, additional font strokes, font rewriting, font shadows, smooth, and special Filtering and licensing of style elements, etc., you can use the setting interface to perform parameter settings in the script menu, or you can exclude all pages under a domain name, compatible with common Greasemonkey scripts and browser plugins.
// @namespace       https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon            https://img.icons8.com/ios-filled/50/26e07f/font-style-formatting.png
// @homepageURL     https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL       https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL     https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require         https://greasyfork.org/scripts/437214-frcolorpicker/code/frColorPicker.js?version=1001053
// @include         *
// @exclude         *://github.dev/*
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
// @copyright       2020-2022, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  "use strict";

  /* customize */

  const IS_OPEN_DEBUG = false; // set "true" to debug scripts, May cause script response slower.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  let GMsetValue, GMgetValue, GMdeleteValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMopenInTab;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const GMversion = GMinfo.version;
  const isGM = Boolean(handlerInfo.toLowerCase() === "greasemonkey");
  const debug = IS_OPEN_DEBUG ? console.log.bind(console) : () => {};
  const error = IS_OPEN_DEBUG ? console.error.bind(console) : () => {};

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
    values: [],
    errors: [],
    clickTimer: 0,
    domainCount: 0,
    successId: false,
    siteIndex: undefined,
    curVersion: GMinfo.script.version,
    scriptName: getScriptNameViaLanguage(),
    options: isGM ? false : { active: true, insert: true, setParent: true },
    elCompat: (document.compatMode || "") === "CSS1Compat" ? document.documentElement : document.body,
    encrypt: n => {
      return window.btoa(encodeURIComponent(n));
    },
    decrypt: n => {
      return decodeURIComponent(window.atob(n));
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
    shadowSize: defCon.randString(6, "mix"),
    shadow: defCon.randString(7, "char"),
    color: defCon.randString(7, "char"),
    cssfun: defCon.randString(7, "char"),
    exclude: defCon.randString(7, "char"),
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
    seed: defCon.randString(4, "mix"),
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
  const curHostName = defCon.getHostName();
  const curWindowTop = defCon.isWinTop();
  const hostURI = defCon.decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkY0MTY2ODg=");
  const fontListIMG = defCon.decrypt("aHR0cHMlM0ElMkYlMkZ6My5heDF4LmNvbSUyRjIwMjElMkYwOSUyRjA0JTJGaDJLdWRLLmdpZg==");
  const loadingIMG = defCon.decrypt("aHR0cHMlM0ElMkYlMkZpbWcuemNvb2wuY24lMkZjb21tdW5pdHklMkYwMzhkZGU0NThmOWE4NzRhODAxMjE2MGY3NDE3ZjZlLmdpZg==");
  const sleep = ms => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };
  const qA = str => {
    return Array.prototype.slice.call(document.querySelectorAll(str), 0);
  };
  const qS = str => {
    return document.querySelector(str);
  };
  const cE = str => {
    return document.createElement(str);
  };

  /* Get browser core & system parameters */

  const getNavigator = {
    type: (info, system = "other", browserArray = {}, browserInfo = "unknow") => {
      if (navigator.userAgentData) {
        const u = navigator.userAgentData;
        const getBrowser = (ua, getBrand = true) => {
          for (const brand_version of ua) {
            if (getBrand) {
              if (!brand_version.brand.includes("Chromium") && !brand_version.brand.includes("Not")) {
                browserInfo = brand_version.brand.split(" ").slice(-1).toString().toLowerCase();
                break;
              }
            } else {
              if (brand_version.brand.includes("Chromium")) {
                browserInfo = brand_version.version;
                break;
              }
            }
          }
          return browserInfo;
        };
        switch (info) {
          case "chromiumVersion":
            return getBrowser(u.brands, false);
          case "core":
            return {
              Trident: false,
              Presto: false,
              WebKit: true,
              Gecko: false,
            };
          case "system":
            return u.platform;
          case "browser":
            return getBrowser(u.brands);
          default:
            return u;
        }
      } else {
        const u = navigator.userAgent.toLowerCase();
        const version = u.match(/chrome\/([\d]+)/i);
        switch (info) {
          case "chromiumVersion":
            return version ? version[1] : 0;
          case "core":
            return {
              Trident: u.includes("trident") || u.includes("compatible"),
              Presto: u.includes("presto"),
              WebKit: u.includes("applewebkit"),
              Gecko: u.includes("gecko") && !u.includes("khtml"),
            };
          case "system":
            if (/windows|win32|win64|wow32|wow64/gi.test(u)) {
              system = "Windows";
            } else if (/macintosh|macintel|mac os x/gi.test(u) || u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
              system = "MacOS";
            } else if (/linux|x11/gi.test(u)) {
              system = "Linux";
            } else if (/android|adr/gi.test(u)) {
              system = "Android";
            } else if (/ios|iphone|ipad|ipod|iwatch/gi.test(u)) {
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
              Sougou: /metasr|sogou/g.test(u),
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
      }
    },
  };

  /* Initialized important functions */

  function getScriptNameViaLanguage() {
    const language = navigator.browserLanguage || navigator.language;
    const name_i18n = new RegExp(`(@name:${language}\\s+)(\\S+)`);
    const languageString = GMinfo.scriptMetaStr.match(name_i18n);
    return languageString ? languageString[2] : GMinfo.script.name;
  }

  function setRAFInterval(callback, period, runNow, times = 0) {
    const needCount = (period / 1000) * 60;
    if (runNow === true) {
      const shouldFinish = callback();
      if (shouldFinish) {
        return;
      }
    }
    const step = () => {
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
    };
    requestAnimationFrame(step);
  }

  function deBounce(fn, delay, timer) {
    return function () {
      const _this = this;
      const args = arguments;
      if (defCon[timer]) {
        clearTimeout(defCon[timer]);
        delete defCon[timer];
      }
      defCon[timer] = setTimeout(function () {
        fn.apply(_this, args);
        delete defCon[timer];
      }, delay);
    };
  }

  function safeRemove(s, t) {
    try {
      const removeNodes = t.querySelectorAll(s);
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].parentNode.removeChild(removeNodes[i]);
      }
    } catch (e) {
      error("\u27A4 safeRemove:", e);
    }
  }

  function addStyle(css, className, addToTarget, T = "T", isReload = false, initType = "text/css", reNew = false) {
    setRAFInterval(
      () => {
        try {
          if (typeof addToTarget === "object" && addToTarget) {
            if (isReload === true && addToTarget.querySelector(`.${className}`)) {
              safeRemove(`.${className}`, addToTarget);
              debug(`\u27A4 style[${T}] View:`, Boolean(addToTarget.querySelector(`.${className}`)));
              while (addToTarget.querySelector(`style[id^="${T}"]`)) {
                safeRemove(`style[id^="${T}"]`, addToTarget);
                debug(`\u27A4 style[${T}] Review:`, Boolean(addToTarget.querySelector(`style[id^="${T}"]`)));
              }
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

  function convertToUnicode(str, value = "") {
    for (let i = 0; i < str.length; i++) {
      value += "\\" + ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return value.toUpperCase();
  }

  function scrollInsteadFixed(target, size, distTop) {
    let sT = 0 - (defCon.elCompat.getBoundingClientRect().top || 0);
    target.style.top = `${sT / size}px`;
    window.scrollTo(0, sT - 1e-5);
    defCon[distTop] = () => {
      sT = 0 - (defCon.elCompat.getBoundingClientRect().top || 0);
      target.style.top = `${sT / size}px`;
    };
    document.addEventListener("scroll", defCon[distTop]);
  }

  function loadPreview(_preview_, ts = defCon.tStyle, s = true) {
    try {
      if (_preview_) {
        addStyle(ts, `${defCon.class.rndStyle}`, document.head, "TS", true);
        qA("iframe").forEach(items => {
          const h = items.contentWindow;
          try {
            const hn = h.location.hostname;
            if (hn === curHostName) {
              const sT = h.document.head.querySelectorAll("style[id^='TS']");
              if (sT.length) {
                addStyle(ts, sT[0].className, h.document.head, "TS", true);
              } else {
                addStyle(ts, `${defCon.class.rndStyle}`, h.document.head, "TS", false);
              }
            }
          } catch (e) {
            error("\u27A4 window.frames:", e);
          }
        });
        defCon.preview = !s;
      }
    } catch (e) {
      error("\u27A4 loadPreview:", e);
    }
  }

  function correctBoldErrorByStroke(s) {
    return new Promise(resolve => {
      if (s && parseInt(getNavigator.type("chromiumVersion")) >= 96) {
        const attrib = "fr-fix-stroke";
        qA(
          `:not(html,head,head *,base,style,link,script,noscript,iframe,br,hr,canvas,form,applet,source,embed,audio,video,track,figure,progress,img,svg,path,fr-configure *,fr-dialogbox *,fr-colorpicker *,gb-notice *):not([${attrib}])`
        ).forEach(item => {
          if (window.getComputedStyle(item, null).getPropertyValue("font-weight") >= 600) {
            item.setAttribute(attrib, "true");
          }
        });
        resolve(attrib);
      }
    })
      .then(result => {
        qA(`[${result}]`).forEach(item => {
          if (window.getComputedStyle(item, null).getPropertyValue("font-weight") < 600) {
            item.removeAttribute(result);
          }
        });
      })
      .catch(error => {
        error("\u27A4 <font-fix-stroke>", error);
      });
  }

  /* expire for fontlist cache */

  const cache = {
    value: data => {
      const exp = 864e5; // 24 hrs
      debug("\u27A4 cache expires define: %s hrs", exp / 36e5);
      return {
        data: data,
        expired: Date.now() + exp,
      };
    },

    set: (key, options) => {
      const obj = defCon.encrypt(JSON.stringify(cache.value(options)));
      localStorage.setItem(key, obj);
    },

    get: key => {
      const obj = localStorage.getItem(key);
      if (!obj) {
        return obj;
      } else {
        try {
          const value = JSON.parse(defCon.decrypt(obj));
          const data = value.data;
          const expiredTime = value.expired;
          const curTime = Date.now();
          debug("\u27A4 cache expires remain: %s hrs", ((expiredTime - curTime) / 36e5).toFixed(2));
          if (expiredTime > curTime && typeof data === "object") {
            return data;
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

    remove: key => {
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

  /* New DefinePropertise */

  const definePropertiesForZoom = function (t, d) {
    try {
      const setValue = (s, g, mod, z = 0) => {
        switch (mod) {
          case 1:
            if (s && s instanceof MouseEvent && s.target.parentNode && s.target.parentNode !== document) {
              z = s.target.parentNode.getBoundingClientRect()[g] / (getNavigator.type("core").Gecko ? t : 1);
            }
            break;
          case 2:
            if (s && s instanceof Element) {
              z = 0 - s.getBoundingClientRect()[g] / t;
            }
            break;
        }
        return z;
      };
      d = d instanceof Element ? d : document.documentElement || document.body;
      // window
      Object.defineProperties(unsafeWindow, {
        pageXOffset: {
          get: function () {
            return setValue(d, "left", 2);
          },
          configurable: false,
        },
        pageYOffset: {
          get: function () {
            return setValue(d, "top", 2);
          },
          configurable: false,
        },
        scrollX: {
          get: function () {
            return setValue(d, "left", 2);
          },
          configurable: false,
        },
        scrollY: {
          get: function () {
            return setValue(d, "top", 2);
          },
          configurable: false,
        },
      });
      // HTMLelements
      Object.defineProperties(d, {
        scrollLeft: {
          get: function () {
            return setValue(this, "left", 2);
          },
          set: Value => {
            d.scrollTo(Value * t, 0);
          },
          configurable: true,
        },
        scrollTop: {
          get: function () {
            return setValue(this, "top", 2);
          },
          set: Value => {
            d.scrollTo(0, Value * t);
          },
          configurable: true,
        },
      });
      // MouseEvents
      Object.defineProperties(MouseEvent.prototype, {
        clientX: {
          get: function () {
            return this.x / t;
          },
          configurable: false,
        },
        clientY: {
          get: function () {
            return this.y / t;
          },
          configurable: false,
        },
        pageX: {
          get: function () {
            return this.x / t + setValue(d, "left", 2);
          },
          configurable: false,
        },
        pageY: {
          get: function () {
            return this.y / t + setValue(d, "top", 2);
          },
          configurable: false,
        },
        layerX: {
          get: function () {
            return this.x / t - setValue(this, "left", 1);
          },
          configurable: false,
        },
        layerY: {
          get: function () {
            return this.y / t - setValue(this, "top", 1);
          },
          configurable: false,
        },
        offsetX: {
          get: function () {
            return this.x / t - setValue(this, "left", 1);
          },
          configurable: false,
        },
        offsetY: {
          get: function () {
            return this.y / t - setValue(this, "top", 1);
          },
          configurable: false,
        },
        screenX: {
          get: function () {
            return this.x / t + window.screenLeft;
          },
          configurable: false,
        },
        screenY: {
          get: function () {
            return this.y / t + window.screenTop;
          },
          configurable: false,
        },
      });
    } catch (e) {
      error("\u27A4 definePropertiesForZoom:", e);
    }
  };

  /* New SliderChecker */

  function setSliderProperty(a, b, c) {
    a.value = Number(b).toFixed(c);
    a.setAttribute("value", Number(b));
    a.parentNode.style.setProperty("--value", Number(b));
    a.parentNode.style.setProperty("--text-value", JSON.stringify(Number(b).toFixed(c).toString()));
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

  const toColordepth = (hexa, s, t = "light") => {
    const rgbaToHexa = rgba => {
      const { r, g, b, a } = rgba;
      return (
        Math.floor(r).toString(16).padStart(2, "0") +
        Math.floor(g).toString(16).padStart(2, "0") +
        Math.floor(b).toString(16).padStart(2, "0") +
        Math.floor(a).toString(16).padStart(2, "0")
      );
    };

    const hexaToRgba = hex => {
      return {
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16),
        a: parseInt(hex.substr(6, 2) || "FF", 16),
      };
    };
    hexa = hexa.substring(1);
    const { r, g, b, a } = hexaToRgba(hexa);
    const tl = x => {
      switch (t) {
        case "dark":
          return Math.floor(x * s);
        default:
          return x * s > 255 ? 255 : Math.floor(x * s);
      }
    };
    return `#${rgbaToHexa({ r: tl(r), g: tl(g), b: tl(b), a: a })}`;
  };

  /* new FrDialogBox */

  class FrDialogBox {
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

      this.container = undefined;
      this.frDialog = undefined;
      this.trueButton = undefined;
      this.falseButton = undefined;
      this.neutralButton = undefined;

      this.parent = document.body;
      this.zoomText = undefined;

      this._createfrDialog(this);
      this._appendfrDialog();
      this._resetfrDialog(0);
    }

    _createfrDialog(context) {
      this.container = cE("fr-dialogbox");
      this.container.id = defCon.id.dialogbox;

      this.frDialog = cE("div");
      this.frDialog.classList.add(`${defCon.class.db}`);
      this.frDialog.style.opacity = 0;
      this.container.appendChild(this.frDialog);

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
      this.trueButton.addEventListener("click", () => {
        context._destroy();
      });
      buttonContainer.appendChild(this.trueButton);

      if (this.hasFalse) {
        this.falseButton = cE("a");
        this.falseButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbf}`);
        this.falseButton.textContent = this.falseButtonText;
        this.falseButton.addEventListener("click", () => {
          context._destroy();
        });
        buttonContainer.appendChild(this.falseButton);
      }

      if (this.hasNeutral) {
        this.neutralButton = cE("a");
        this.neutralButton.classList.add(`${defCon.class.dbb}`, `${defCon.class.dbbn}`);
        this.neutralButton.textContent = this.neutralButtonText;
        this.neutralButton.addEventListener("click", () => {
          context._destroy();
        });
        buttonContainer.appendChild(this.neutralButton);
      }
    }

    _appendfrDialog() {
      const container = this.container;
      const diag = this.frDialog;
      if (curWindowTop && container && !qS(`#${defCon.id.dialogbox}`)) {
        this.parent.appendChild(container);
        sleep(100).then(() => {
          diag.style.opacity = 1;
        });
      }
    }

    _resetfrDialog(topnum) {
      const zoom = Number(window.getComputedStyle(this.parent, null).getPropertyValue("zoom")) || defCon.tZoom || 1;
      if (zoom !== 1) {
        if (getNavigator.type("core").Gecko) {
          this.zoomText = String(
            `transform-origin:left top 0px;
            transform:scale(${1 / zoom});
            width:${defCon.elCompat.clientWidth}px;
            height:${defCon.elCompat.clientHeight}px;
            top:${topnum}px`
          );
          this.container.style.cssText += this.zoomText;
          scrollInsteadFixed(this.container, zoom, "dialogbox");
        } else {
          this.zoomText = `zoom:${1 / zoom}`;
          this.container.style.cssText += this.zoomText;
        }
      }
    }

    _destroy() {
      if (this.container) {
        if (getNavigator.type("core").Gecko && defCon.dialogbox) {
          document.removeEventListener("scroll", defCon.dialogbox);
          delete defCon.dialogbox;
        }
        this.container.remove();
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

  function closeAllFrDialogBox(s) {
    if (qS(s)) {
      if (getNavigator.type("core").Gecko && defCon.dialogbox) {
        document.removeEventListener("scroll", defCon.dialogbox);
        delete defCon.dialogbox;
      }
      qS(s).remove();
    }
  }

  /* Font filtering & discriminating list */

  let fontCheck = new Set([
    { ch: "微软雅黑", en: "Microsoft YaHei" },
    { ch: "微軟正黑體", en: "Microsoft JhengHei" },
    { ch: "苹方-简", en: "PingFang SC" },
    { ch: "蘋方-繁", en: "PingFang TC" },
    { ch: "蘋方-港", en: "PingFang HK" },
    { ch: "更纱黑体 SC", en: "Sarasa Gothic SC" },
    { ch: "更紗黑體 TC", en: "Sarasa Gothic TC" },
    { ch: "冬青黑体简", en: "Hiragino Sans GB" },
    { ch: "兰亭黑-简", en: "Lantinghei SC" },
    { ch: "OPPOSans", en: "OPPOSans" },
    { ch: "霞鹜文楷", en: "LXGW WenKai" },
    { ch: "鸿蒙黑体", en: "HarmonyOS Sans SC" },
    { ch: "浪漫雅圆", en: "LMYY" },
    { ch: "思源黑体", en: "Source Han Sans SC" },
    { ch: "思源宋体", en: "Source Han Serif SC" },
    { ch: "汉仪旗黑", en: "HYQiHei" },
    { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei" },
    { ch: "文泉驿正黑", en: "WenQuanYi Zen Hei" },
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

  class SupportFontFamily {
    constructor() {
      const baseFonts = ["monospace", "serif", "Georgia", "sans-serif", "Tahoma"];
      const testString = "这是测试、這是測試：1234567890, WWWwwwMMMmmmLlOoIi.";
      const testSize = "72px";
      const h = qS("body");
      const s = cE("fr-fontfamily");
      s.classList.add(`${defCon.id.seed}_code`, `${defCon.id.seed}_fontTest`);
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
          error("\u27A4 SupportFontFamily:", e);
        }
      }
      const detect = font => {
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
              debug("\u27A4 detect:", {
                font: font,
                width: _offsetWidth,
                defwidth: defaultWidth[baseFonts[index]],
                height: _offsetHeight,
                defheihgt: defaultHeight[baseFonts[index]],
              });
              break;
            }
          }
        } catch (e) {
          error("\u27A4 FontFamily.detect:", e);
        }
        return detected;
      };
      this.detect = detect;
    }
  }

  function getUniqueValues(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].ch === arr[j].ch || arr[i].en === arr[j].en) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }

  const ddRemove = item => {
    const temp = item.nextElementSibling;
    item.remove();
    if (temp && temp.nodeName === "DD") {
      ddRemove(temp);
    }
  };

  const fontSet = function (s) {
    return {
      that: qA(s),
      stopPropagation: e => {
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true);
      },

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
        const text = item.parentNode.children[0].innerText;
        fontData.push({ ch: text, en: value, sort: sort });
        fontData.sort((a, b) => {
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
                submitButton.innerText = "\u4fdd\u5b58";
                submitButton.removeAttribute("style");
                submitButton.removeAttribute("v-Preview");
                loadPreview(defCon.preview);
              }
            } else if (!defCon.values.includes(`${defCon.id.fontName}`) && defCon.isPreview) {
              submitButton.innerText = "\u9884\u89c8";
              submitButton.setAttribute("style", "background-color:coral!important;border-color:coral!important");
              submitButton.setAttribute("v-Preview", "true");
            }
          }
          fontSet(`#${defCon.id.selector}`).that[0].style.cssText += "display:none;";
          const ffaceT = qS(`#${defCon.id.fface}`);
          const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          if (ffaceT.checked) {
            const cusFontList = await GMgetValue("_Custom_fontlist_");
            const cusFontCheck = cusFontList ? JSON.parse(defCon.decrypt(cusFontList)) : DEFAULT_ARRAY;
            fontCheck = getUniqueValues([...fontCheck, ...cusFontCheck]);
            for (let i = 0; i < fontCheck.length; i++) {
              if (fontCheck[i].en === defCon.refont || convertToUnicode(fontCheck[i].ch) === defCon.refont) {
                defCon.curFont = fontCheck[i].ch;
                break;
              }
            }
            inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${defCon.curFont}`);
            const submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`);
            submitPreview ? submitPreview.click() : debug("\u27A4 v-Preview:", submitPreview);
          }
        } else {
          const remainsFont = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that[0].parentNode.children[0].innerText;
          const remainsNext = fontSet(`#${defCon.id.fontList} .${defCon.class.close}`).that[0].parentNode.nextElementSibling;
          const remainsSecondFont = remainsNext ? remainsNext.children[0].innerText : defCon.curFont;
          if (submitButton && (remainsFont !== defCon.curFont || remainsSecondFont !== defCon.curFont) && defCon.isPreview) {
            submitButton.innerText = "\u9884\u89c8";
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
        fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].innerHTML += String(
          `<a class="${defCon.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:'Microsoft YaHei'!important">微软雅黑</span><input type="hidden" name="${defCon.id.fontName}" sort="1" value="Microsoft YaHei"/><span class="${defCon.class.close}" style="border-bottom-right-radius:4px;border-top-right-radius:4px;cursor:pointer;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
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

      fsearchList: (name, arr = []) => {
        fontSet(`#${defCon.id.selector} .${defCon.class.selector} input[name="${name}"]`).that.forEach(item => {
          arr.push(item.value);
        });
        return arr;
      },

      fsearch: fontData => {
        const fHtml = String(
          `<div id="${defCon.id.selector}">
            <span class="${defCon.class.spanlabel}">已选择字体：<span id="${defCon.id.cleaner}">[清空]</span></span>
            <div class="${defCon.class.selector}"></div>
          </div>
          <div class="${defCon.class.selectFontId}">
            <span class="${defCon.class.spanlabel}">设置字体，请选择：</span>
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
              <p><em style="color:darkred">（注五）</em>双击我可以打开自定义字体的添加工具，以使用更多新字体。</p>
              </span>
            </span>
          </div>`
        );
        const domId = fontSet(s).that[0];
        setRAFInterval(
          () => {
            if (!fontSet(`#${defCon.id.selector}`).that[0] && domId) {
              domId.innerHTML = fHtml;
              return true;
            }
          },
          50,
          true
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
            dlContainer.show();
            if (fontData.length === 0) {
              dlContainer.that[0].innerHTML = "<dd>\u6570\u636e\u6e90\u6682\u65e0\u6570\u636e</dd>";
            } else {
              dlContainer.that[0].innerHTML = "";
              fontData.sort((a, b) => {
                return a.sort - b.sort;
              });
              fontData.forEach(item => {
                dlContainer.that[0].innerHTML += `<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`;
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
          dlContainer.hide();
          if (fontData.length > 0) {
            dlContainer.show();
            const sText = t.replace(/[.:?*+^$[\](){}\\/|]/g, "⛔");
            const sRegExp = new RegExp(sText, "i");
            let sMatched = false;
            dlContainer.that[0].innerHTML = "";
            fontData.forEach(item => {
              if (sRegExp.test(item.ch) || sRegExp.test(item.en)) {
                sMatched = true;
                dlContainer.that[0].innerHTML += `<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`;
              }
            });
            if (!sMatched) {
              dlContainer.that[0].innerHTML = "<dd>\u6682\u65e0\u60a8\u641c\u7d22\u7684\u5b57\u4f53</dd>";
            }
            clickEvents();
          }
        }

        function clickEvents() {
          fontSet(`#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd`).that.forEach(item => {
            item.addEventListener("click", function (e) {
              const value = this.attributes.value.value.toString();
              const sort = this.attributes.sort.value;
              if (value) {
                fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].innerHTML += String(
                  `<a class="${defCon.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:'${value}'!important">${this.innerHTML}</span><input type="hidden" name="${defCon.id.fontName}" sort="${sort}" value="${value}"/><span class="${defCon.class.close}" style="border-bottom-right-radius:4px;border-top-right-radius:4px;cursor:pointer;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
                );
                fontSet(`#${defCon.id.fontList} .${defCon.class.selector}`).that[0].parentNode.style.cssText += "display:block;";
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
                  submitButton.innerText = "\u9884\u89c8";
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

  const defValue = {
    fontSelect: `'Microsoft YaHei',system-ui,-apple-system,BlinkMacSystemFont,sans-serif,'iconfont','icomoon','FontAwesome','IcoFont','Material Icons Extended','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji','Android Emoji',EmojiSymbols,'emojione mozilla','twemoji mozilla'`,
    fontFace: true,
    fontSmooth: true,
    fontSize: 1.0,
    fontStroke: getNavigator.type("core").Gecko ? 0.08 : 0.02,
    fontShadow: getNavigator.type("core").Gecko ? 0.5 : 1.0,
    shadowColor: getNavigator.type("core").Gecko ? "#7F7F7FFF" : "#7B7B7BFF",
    fontCSS: `:not(i):not(.fa):not([class*='icon']):not([class*='vjs-']):not([class*='mu-'])`,
    fontEx: `input,select,button,textarea,kbd,pre,pre *,code,code *`,
  };
  defCon.scriptAuthor = GMinfo.scriptMetaStr.match(/(\u0040\u0061\u0075\u0074\u0068\u006f\u0072\s+)(\S+)/)[2];
  defCon.feedback = GMinfo.scriptMetaStr.match(/(\u0040\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0055\u0052\u004c\s+)(\S+)/)[2];
  const ROOT_SECRET_KEY = `\u8ab1\u004a\u0056\u0069\u0059\u7409\u67d3\u5b7a\u80ba\u0070\u0032\u004f\u64d3\u0030\u8151\u0074\u5c80\u5b9a\u81ba\u0065`;
  const CONST = {};

  /* Determine whether the DOM is loaded */

  function addLoadEvents(fn, rs = false) {
    document.addEventListener("readystatechange", async () => {
      if (document.readyState !== "loading" && document.body) {
        if (!rs) {
          rs = fn();
          debug(
            "\u27A4 %c[ReadyState]: %c%s!\n%c\u3000 \u27A6 %s %c%s",
            "background-color:slateblue;color:snow;line-height:180%",
            "background-color:slateblue;color:snow;font-style:italic;line-height:180%",
            document.readyState,
            "color:0;line-height:180%",
            window.location.hostname,
            "color:grey;line-height:180%",
            window.location.pathname
          );
        }
      } else {
        document.addEventListener("DOMContentLoaded", () => {
          rs = fn();
          debug("\u27A4 %c[DOM]: Loading & Parsing!", "background-color:darkorange;color:snow;line-height:180%");
        });
      }
      if (document.readyState === "complete" && rs) {
        await correctBoldErrorByStroke(CONST.fontStroke);
        debug(
          "\u27A4 %c[DOM]: Load complete!\n%c\u3000 \u27A6 %s %c%s",
          "background-color:green;color:snow;line-height:180%",
          "color:0;line-height:180%",
          window.location.hostname,
          "color:grey;line-height:180%",
          window.location.pathname
        );
      }
    });
  }

  /* Start specific operation */

  !(async function (loading) {
    /* eslint-disable no-alert */
    /* Content-Security-Policy: trusted-types */

    if (window.trustedTypes && window.trustedTypes.createPolicy) {
      window.trustedTypes.createPolicy("default", {
        createHTML: (string, sink) => {
          return string;
        },
      });
    }

    /* initialling Menus */

    if (curWindowTop && !isGM) {
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
      GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
    } else {
      _config_data_ = JSON.parse(defCon.decrypt(configure));
      maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
      isBackupFunction = Boolean(_config_data_.isBackupFunction);
      isPreview = Boolean(_config_data_.isPreview);
      isFontsize = Boolean(_config_data_.isFontsize);
      isHotkey = Boolean(_config_data_.isHotkey !== undefined ? _config_data_.isHotkey : true);
      isCloseTip = Boolean(_config_data_.isCloseTip);
      rebuild = _config_data_.rebuild;
      curVersion = _config_data_.curVersion;
    }
    defCon.isPreview = isPreview;

    /* Rebuild data for update */

    const bool = true;
    const res = Boolean(rebuild);
    if (curWindowTop) {
      if (res === bool && rebuild !== undefined) {
        GMdeleteValue("_fonts_set_");
        GMdeleteValue("_Exclude_site_");
        GMdeleteValue("_domains_fonts_set_");
        GMdeleteValue("_Custom_fontlist_");
        _config_data_.rebuild = !bool;
        _config_data_.curVersion = undefined;
        GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
        debug("\u27A4 %cData has been rebuilt: %s", "font-style:italic;background-color:red;color:snow", res === bool);
      } else if (rebuild === undefined) {
        _config_data_.rebuild = !bool;
        GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
        debug(`\u27A4 %c${!curVersion ? "Configdata is undefined, rebuilding!" : "Data has been restored!"}`, `font-style:italic;color:${!curVersion ? "crimson" : "dodgerblue"}`);
      } else {
        const dataStatus = curVersion === defCon.curVersion;
        debug("\u27A4 %cGood data status: %c%s", "font-style:italic;color:green", `font-style:italic;${dataStatus ? "color:green" : "color:red"}`, dataStatus);
      }
    }

    /* DialogBox for the first visit after upgrading */

    const hintUpdateInfo = async (url, curVersion) => {
      const s = curVersion === undefined ? "新安装首次运行" : curVersion !== defCon.curVersion ? "更新后首次运行" : "您通过历史查询";
      let frDialog = new FrDialogBox({
        trueButtonText: "好，去看看",
        falseButtonText: "不，算了吧",
        messageText: String(
          `<p><span style="font-style:italic;font-weight:700;font-size:20px;color:tomato">您好！</span>这是${s}<span style="margin-left:3px;font-weight:700">${defCon.scriptName}</span>的更新版本<span style="font:italic 900 22px/150% Candara,'Times New Roman'!important;color:tomato;margin-left:3px">V${defCon.curVersion}</span>, 以下为更新内容：</p>
            <p><ul id="${defCon.id.seed}_update">
              <li class="${defCon.id.seed}_add">Chromium预兼容navigator.userAgentData.</li>
              <li class="${defCon.id.seed}_fix">修正字体缩放函数的在特殊情况下出现的bug<sup style="font-size:8px">[2]</sup>。</li>
              <li class="${defCon.id.seed}_fix">修正bugs，优化代码。</li>
            </ul></p>
            <p>建议您先看看 <strong style="color:tomato;font-weight:700">新版帮助文档</strong> ，去看一下吗？</p>`
        ),
        titleText: "脚本更新 - 温馨提示",
      });
      if (await frDialog.respond()) {
        GMopenInTab(url, defCon.options);
      }
      frDialog = null;
    };

    if (curVersion !== defCon.curVersion && curWindowTop) {
      addLoadEvents(() => {
        if (!isCloseTip) {
          hintUpdateInfo(`${hostURI}#update`, curVersion);
        }
        _config_data_.curVersion = defCon.curVersion;
        GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
        debug("\u27A4 %cThe script has been upgraded to V%s", "font-style:italic;background-color:yellow;color:crimson", defCon.curVersion);
        return true;
      });
    }

    /* initialize Exclude site */

    const fonts = await GMgetValue("_fonts_set_");
    let exSite = await GMgetValue("_Exclude_site_");
    let domains = await GMgetValue("_domains_fonts_set_");

    function updateExsitesIndex(e) {
      for (let i = 0; i < e.length; i++) {
        if (e[i] === curHostName) {
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
      defCon.siteIndex = updateExsitesIndex(exSite);
    }

    /* Set Default Value & initialize */

    let fontValue, domainValue, domainValueIndex;
    function updateDomainsIndex(s, t = curHostName) {
      for (let i = 0; i < s.length; i++) {
        if (s[i].domain === t) {
          return i;
        }
      }
    }
    if (!domains) {
      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(DEFAULT_ARRAY)));
    } else {
      domainValue = JSON.parse(defCon.decrypt(domains));
      defCon.domainCount = domainValue.length;
      defCon.domainIndex = updateDomainsIndex(domainValue);
    }

    if (!fonts) {
      saveData("_fonts_set_", {
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
        domainValueIndex = updateDomainsIndex(domainValue);
      }
      if (domainValueIndex !== undefined) {
        CONST.fontSelect = filterHtmlToText(domainValue[domainValueIndex].fontSelect);
        CONST.fontFace = Boolean(domainValue[domainValueIndex].fontFace);
        CONST.fontStroke = Number(domainValue[domainValueIndex].fontStroke) || 0;
        CONST.fontShadow = Number(domainValue[domainValueIndex].fontShadow) || 0;
        CONST.fontSize = isFontsize ? Number(domainValue[domainValueIndex].fontSize) || 1 : 1;
        CONST.shadowColor = filterHtmlToText(domainValue[domainValueIndex].shadowColor);
        CONST.fontSmooth = Boolean(domainValue[domainValueIndex].fontSmooth);
        CONST.fontCSS = filterHtmlToText(domainValue[domainValueIndex].fontCSS);
        CONST.fontEx = filterHtmlToText(domainValue[domainValueIndex].fontEx);
      } else {
        CONST.fontSelect = filterHtmlToText(fontValue.fontSelect);
        CONST.fontFace = Boolean(fontValue.fontFace);
        CONST.fontStroke = Number(fontValue.fontStroke) || 0;
        CONST.fontShadow = Number(fontValue.fontShadow) || 0;
        CONST.fontSize = isFontsize ? Number(fontValue.fontSize) || 1 : 1;
        CONST.shadowColor = filterHtmlToText(fontValue.shadowColor);
        CONST.fontSmooth = Boolean(fontValue.fontSmooth);
        CONST.fontCSS = filterHtmlToText(fontValue.fontCSS);
        CONST.fontEx = filterHtmlToText(fontValue.fontEx);
      }
    }
    defCon.tZoom = CONST.fontSize;

    /* Operation of CSS value */

    let shadow = "";
    const shadow_r = parseFloat(CONST.fontShadow);
    const shadow_c = CONST.shadowColor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : CONST.shadowColor; // Version compatible.
    const overlayColor = (r, c, rs) => {
      if (c.substring(1) !== "FFFFFFFF") {
        rs = `text-shadow:0 0 ${(r * 1.25).toFixed(4)}px ${toColordepth(c, 1.5)},0 0 ${r}px ${c},0 0 ${(r / 4).toFixed(4)}px ${toColordepth(c, 0.985, "dark")}`;
      } else {
        rs = `text-shadow:0 0 ${(r * 1.25).toFixed(4)}px ${toColordepth(c, 0.85, "dark")},0 0 ${r}px ${toColordepth(c, 0.55, "dark")},0 0 ${(r / 4).toFixed(4)}px currentcolor`;
      }
      return rs.concat(";");
    };
    if (!isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 8) {
      shadow = overlayColor(shadow_r, shadow_c);
    }
    let stroke = "";
    const stroke_r = parseFloat(CONST.fontStroke);
    if (!isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0) {
      stroke = `-webkit-text-stroke:${stroke_r}px currentcolor;`;
    }
    let selection = "";
    if (stroke) {
      selection = `::selection{color:#fff!important;background:#0084ff!important}::-moz-selection{color:currentcolor!important;background:#ffeb39!important}`;
    }
    let smoothing = "";
    const smooth_i = CONST.fontSmooth;
    const funcSmooth = () => {
      const kernel_Define = getNavigator.type("core").WebKit
        ? `-webkit-font-smoothing:antialiased!important;`
        : getNavigator.type("core").Gecko
        ? "-moz-osx-font-smoothing:grayscale!important;"
        : "";
      return String(`font-feature-settings:"liga" 0;font-variant:no-common-ligatures proportional-nums;font-optical-sizing:auto;font-kerning:auto;${kernel_Define}`);
    };
    if (smooth_i) {
      smoothing = funcSmooth();
    }
    let bodyZoom = "";
    const fontsize_r = parseFloat(CONST.fontSize);
    const funcFontsize = t => {
      return `body{${getNavigator.type("core").Gecko ? `transform:scale(${t});transform-origin:left top 0px;width:${100 / t}%;height:${100 / t}%;` : `zoom:${t}!important;`}}`;
    };
    if (!isNaN(fontsize_r) && fontsize_r >= 0.8 && fontsize_r <= 1.5 && isFontsize && fontsize_r !== 1) {
      if (defCon.siteIndex === undefined) {
        definePropertiesForZoom(fontsize_r, defCon.elCompat);
      }
      bodyZoom = funcFontsize(fontsize_r);
    }
    const prefont = CONST.fontSelect.split(",")[0];
    const refont = prefont ? prefont.replace(/"|'/g, "") : "";
    let fontfamily = "";
    let fontfaces = "";
    const fontface_i = CONST.fontFace;
    const funcFontface = (t, rs = "") => {
      [
        convertToUnicode("宋体"),
        convertToUnicode("新宋体"),
        convertToUnicode("黑体"),
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
        "Arial",
        "Verdana",
        "Ubuntu",
        "Segoe UI",
        "Open Sans",
      ].forEach(item => {
        if (item !== t) {
          rs += `@font-face{font-family:"${item}";src:local("${t}")}`;
        }
      });
      return rs;
    };
    if (fontface_i) {
      fontfamily = `font-family:${CONST.fontSelect};`;
      fontfaces = refont.length ? funcFontface(refont) : ``;
    }
    let exclude = "";
    let codeFont = "";
    const cssexlude = CONST.fontEx;
    const funcCodefont = (t, s, ch) => {
      if (t.search(/\bpre\b|\bcode\b/gi) !== -1) {
        const pre = t.search(/\bpre\b/gi) > -1 ? ["pre", "pre *"] : [];
        const code = t.search(/\bcode\b/gi) > -1 ? ["code", "code *"] : [];
        const precode = pre.concat(code);
        ch = (s ? ch : "'Microsoft YaHei UI'").concat(",system-ui,-apple-system,BlinkMacSystemFont");
        return String(
          `${precode.toString()}{font-size:14px!important;line-height:150%!important;font-family:'Operator Mono Lig','Fira Code','Source Code Pro','Roboto Mono',Monaco,monospace,Consolas,${ch},serif!important;font-feature-settings:"liga" 0,"zero"!important}`
        );
      } else {
        return ``;
      }
    };
    if (cssexlude) {
      exclude = `${cssexlude}{font-family:inherit;-webkit-text-stroke:initial!important;text-shadow:none!important}`;
      codeFont = funcCodefont(cssexlude, fontface_i, prefont);
    }
    let tshadow = "";
    const cssfun = CONST.fontCSS;
    const textrender = `text-rendering:optimizeLegibility!important`;
    const fixStroke = `[fr-fix-stroke]{-webkit-text-stroke:initial!important}`;
    if (defCon.siteIndex === undefined) {
      tshadow = `${fontfaces}${bodyZoom}${cssfun}{${fontfamily}${shadow}${stroke}${smoothing}${textrender}}${codeFont}${selection}${exclude}${fixStroke}`;
    }
    const fontTest = String(
      `.${defCon.id.seed}_fontTest{font-weight:normal!important;line-height:initial!important;text-align:left!important;font-style:normal!important;text-decoration:none!important;letter-spacing:normal!important;word-wrap:normal!important;text-indent:initial!important}#${defCon.id.fontTest}{margin:0!important;padding:0!important;width:max-content!important;height:max-content!important;text-shadow:none!important;-webkit-text-stroke:initial!important;-webkit-text-size-adjust:none!important;-moz-text-size-adjust:none!important;white-space:nowrap!important}`
    );
    const fontStyle_db = String(
      `#${defCon.id.dialogbox}{width:100%;height:100%;background:transparent;position:fixed;top:0;left:0;z-index:1999999995}#${defCon.id.dialogbox} .${defCon.class.db}{box-sizing:content-box;max-width:420px;color:#444;border:2px solid #efefef}.${defCon.class.db}{display:block;overflow:hidden;position:fixed;top:200px;right:15px;border-radius:6px;width:100%;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.3);transition:opacity .5s}.${defCon.class.db} *{line-height:1.5!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:initial!important;text-shadow:0 0 1px #777!important}.${defCon.class.dbt}{background:#efefef;margin-top:0;padding:12px;font-size:20px!important;font-weight:700;text-align:left;width:100%;font-family:Candara,"Times New Roman",system-ui,-apple-system,BlinkMacSystemFont!important}.${defCon.class.dbm}{color:#444;padding:10px;margin:5px;font-size:16px!important;font-weight:500;text-align:left}.${defCon.class.dbb}{display:inline-block;margin:0 1%;border-radius:4px;padding:8px 12px;min-width:12%;font-weight:400;text-align:center;letter-spacing:0;cursor:pointer;text-decoration:none!important;box-sizing:content-box}.${defCon.class.dbb}:hover{color:#fff;opacity:.8;font-weight:900;text-decoration:none!important;box-sizing:content-box}.${defCon.class.db} .${defCon.class.dbt},.${defCon.class.dbb},.${defCon.class.dbb}:hover{text-shadow:none!important;-webkit-text-stroke:initial!important;user-select:none}.${defCon.class.dbbf},.${defCon.class.dbbf}:hover{background:#d93223!important;color:#fff!important;border:1px solid #d93223!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}.${defCon.class.dbbt},.${defCon.class.dbbt}:hover{background:#038c5a!important;color:#fff!important;border:1px solid #038c5a!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}.${defCon.class.dbbn},.${defCon.class.dbbn}:hover{background:#777!important;color:#fff!important;border:1px solid #777!important;border-radius:6px;font-size:14px!important}.${defCon.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${defCon.class.dbbc}{text-align:right;padding:2.5%;background:#efefef;color:#fff}` +
        `.${defCon.class.dbm} button:hover{cursor:pointer;background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important}.${defCon.class.dbm} p{line-height:1.5!important;margin:5px 0!important;text-indent:0!important;font-size:16px!important;font-weight:400;text-align:left;user-select:none}.${defCon.class.dbm} ul{list-style:none;margin:0 0 0 10px!important;padding:2px;font:italic 14px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;color:gray;scrollbar-width:thin}.${defCon.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${defCon.class.dbm} ul::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #999;background:#cfcfcf;border-radius:10px}.${defCon.class.dbm} ul::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:10px}.${defCon.class.dbm} ul::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #aaa;background:#efefef;border-radius:6px}.${defCon.class.dbm} ul li{display:list-item;list-style-type:none;user-select:none}.${defCon.class.dbm} li:before{display:none}.${defCon.class.dbm} #${defCon.id.bk},.${defCon.class.dbm} #${defCon.id.pv},.${defCon.class.dbm} #${defCon.id.fs},.${defCon.class.dbm} #${defCon.id.hk},.${defCon.class.dbm} #${defCon.id.ct},.${defCon.class.dbm} #${defCon.id.mps},.${defCon.class.dbm} #${defCon.id.flc}{box-sizing:content-box;list-style:none;font-style:normal;display:flex;justify-content:space-between;align-items:flex-start;margin:0;padding:2px 4px!important;width:calc(96% - 10px);min-width:auto;height:40px;min-height:40px}.${defCon.class.dbm} #${defCon.id.bk} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.pv} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.fs} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.hk} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.ct} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.mps} .${defCon.id.seed}_VIP,.${defCon.class.dbm} #${defCon.id.flc} .${defCon.id.seed}_VIP{margin:2px 0 0 0;color:darkgoldenrod!important;font:normal 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${defCon.class.dbm} #${defCon.id.flc} button{background-color:#eee;color:#444!important;font-weight:normal;border:1px solid #999;font-size:14px!important;border-radius:4px}` +
        `.${defCon.class.dbm} #${defCon.id.feedback}{padding:2px 10px;height:22px;width:max-content;min-width:auto}.${defCon.class.dbm} #${defCon.id.files}{display:none}.${defCon.class.dbm} #${defCon.id.feedback}:hover{color:crimson!important}.${defCon.class.dbm} #${defCon.id.feedback}:after{width:0;height:0;content:"";background:url('${loadingIMG}') no-repeat -400px -300px}.${defCon.class.dbm} #${defCon.id.seed}_custom_Fontlist::-moz-placeholder{font:normal 400 14px/150% monospace,Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:#555!important}.${defCon.class.dbm} #${defCon.id.seed}_custom_Fontlist::-webkit-input-placeholder{font:normal 400 14px/150% monospace,Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:#aaa!important}.${defCon.class.dbm} #${defCon.id.seed}_update li{margin:0;padding:0;font:italic 400 14px/150% Consolas,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;color:gray}.${defCon.class.dbm} .${defCon.id.seed}_add:before{content:"+";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${defCon.id.seed}_del:before{content:"-";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${defCon.id.seed}_fix:before{content:"@";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${defCon.id.seed}_info{color:#daa5207a!important}.${defCon.class.dbm} .${defCon.id.seed}_info:before{content:"#";display:inline;margin:0 4px 0 -10px}.${defCon.class.dbm} .${defCon.id.seed}_warn{color:#e900007a!important}.${defCon.class.dbm} .${defCon.id.seed}_warn:before{content:"!";display:inline;margin:0 4px 0 -10px}`
    );
    const fontStyle_container = String(
      `#${defCon.id.rndId}{width:100%;height:100%;background:transparent;position:fixed;top:0;left:0;z-index:1999999991}body #${defCon.id.container}{position:fixed;top:10px;right:24px;border-radius:12px;background:#f0f6ff!important;box-sizing:content-box;opacity:0;transition:opacity .5s}#${defCon.id.container}{transform:scale3d(1,1,1);width:auto;overflow-y:auto;overflow-x:hidden;min-height:10%;max-height:calc(100% - 20px);z-index:999999;padding:4px;text-align:left;color:#333;font-size:16px!important;font-weight:900;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.container}::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.container}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.container}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.container}::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.container} *{line-height:1.5!important;text-shadow:none!important;-webkit-text-stroke:initial!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","Android Emoji",EmojiSymbols!important;font-size:16px;font-weight:700}` +
        `#${defCon.id.container} fieldset{border:2px groove #67a5df!important;border-radius:10px;padding:4px 6px;margin:2px;background:#f0f6ff!important;display:block;width:auto;height:auto;min-height:475px}#${defCon.id.container} legend{line-height:inherit;padding:0 8px;border:0!important;margin-bottom:0;font-size:16px!important;font-weight:700;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;background:#f0f6ff!important;box-sizing:content-box;width:auto!important;min-width:185px!important;display:block!important;position:initial!important;height:auto!important;visibility:unset!important}#${defCon.id.container} fieldset ul{padding:0;margin:0;background:#f0f6ff!important}#${defCon.id.container} ul li{display:inherit;list-style:none;margin:3px 0;box-sizing:content-box;border:none;float:none;background:#f0f6ff!important;cursor:default;min-width:-moz-available;min-width:-webkit-fill-available;user-select:none}#${defCon.id.container} ul li:before{display:none}#${defCon.id.container} .${defCon.class.help}{width:24px;height:24px;fill:#67a5df;overflow:hidden}#${defCon.id.container} .${defCon.class.help}:hover{cursor:help}#${defCon.id.seed}_scriptname{font-weight:900!important;user-select:all;display:inline-block}#${defCon.id.container} .${defCon.class.title} .${defCon.class.guide}{display:inline-block;position:fixed;cursor:pointer}@keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}.${defCon.class.title} .${defCon.class.rotation}{padding:0;margin:0;width:24px;height:24px;top:auto;right:auto;bottom:auto;left:auto;transform-origin:center 50%;-webkit-transform:rotate(360deg);animation:rotation 5s linear infinite}` +
        `#${defCon.id.fontList}{padding:2px 10px 0 10px;min-height:73px}#${defCon.id.fontFace},#${defCon.id.fontSmooth}{padding:2px 10px;height:40px;width:calc(100% - 18px);min-width:auto;display:flex!important;align-items:center;justify-content:space-between}#${defCon.id.fontSize}{padding:2px 10px;height:60px}#${defCon.id.fontStroke}{padding:2px 10px;height:60px}#${defCon.id.fontShadow}{padding:2px 10px;height:60px}#${defCon.id.shadowColor}{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;padding:2px 10px;min-height:45px;margin:4px;width:auto}#${defCon.id.fontCSS},#${defCon.id.fontEx}{padding:2px 10px;height:110px;min-height:110px}#${defCon.id.submit}{padding:2px 10px;height:40px}` +
        `#${defCon.id.fontList} .${defCon.class.selector} a{font-weight:400;text-decoration:none}#${defCon.id.fontList} .${defCon.class.label}{display:inline-block;margin:0 4px 14px 0;padding:0;height:24px;line-height:24px!important}#${defCon.id.fontList} .${defCon.class.label} span{box-sizing:border-box;color:#fff;font-size:16px!important;font-weight:400;height:max-content;width:max-content;min-width:12px;max-width:210px;padding:5px;background:#67a5df;text-overflow:ellipsis;overflow:hidden;display:inline-block;white-space:nowrap}#${defCon.id.fontList} .${defCon.class.close}{width:12px}#${defCon.id.fontList} .${defCon.class.close}:hover{color:tomato;background-color:#2d7dca;border-radius:2px}#${defCon.id.selector}{width:100%;max-width:100%}#${defCon.id.selector} label{display:block;cursor:initial;margin:0 0 4px 0;color:#333}#${defCon.id.selector} #${defCon.id.cleaner}{margin-left:5px;cursor:pointer}#${defCon.id.selector} #${defCon.id.cleaner}:hover{color:red}#${defCon.id.fontList} .${defCon.class.selector}{overflow-x:hidden;box-sizing:border-box;border:2px solid #67a5df!important;border-radius:6px;padding:6px 6px 0 6px;margin:0 0 6px 0;width:100%;min-width:100%;max-width:fit-content;max-width:-moz-min-content;max-height:90px;min-height:45px;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selector}::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} span.${defCon.class.spanlabel},#${defCon.id.selector} span.${defCon.class.spanlabel}{margin:0!important;width:auto;display:block!important;padding:0 0 4px 0;color:#333;border:0;text-align:left!important;background-color:transparent!important}` +
        `#${defCon.id.fontList} .${defCon.class.selectFontId}{width:auto}#${defCon.id.fontList} .${defCon.class.selectFontId} input{text-overflow:ellipsis;overflow:hidden;box-sizing:border-box;border:2px solid #67a5df!important;border-radius:6px;padding:1px 32px 1px 2px;margin:0;width:100%;max-width:100%;min-width:100%;height:42px!important;font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:16px!important;font-weight:700;text-indent:8px;background:#fafafa;outline-color:#67a5df}#${defCon.id.fontList} .${defCon.class.selectFontId} input[disabled]{pointer-events:none!important}.${defCon.class.placeholder}::-moz-placeholder{color:#369!important;font:normal 700 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}.${defCon.class.placeholder}::-webkit-input-placeholder{color:#369!important;font:normal 700 16px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}#${defCon.id.fontList} .${defCon.class.selectFontId} dl{overflow-x:hidden;position:fixed;z-index:1000;margin:4px 0 0 0;box-sizing:content-box;border:2px solid #67a5df!important;border-radius:6px;padding:4px 8px;width:auto;min-width:60%;max-width:calc(100% - 68px);max-height:298px;font-size:18px!important;white-space:nowrap;background-color:#fff;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin}` +
        `#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd{box-sizing:content-box;text-overflow:ellipsis;overflow-x:hidden;margin:1px 8px;padding:5px 0;font-weight:400;font-size:21px!important;min-width:100%;max-width:100%;width:-moz-available;width:-webkit-fill-available;}#${defCon.id.fontList} .${defCon.class.selectFontId} dl dd:hover{box-sizing:content-box;text-overflow:ellipsis;overflow-x:hidden;min-width:-moz-available;min-width:-webkit-fill-available;background-color:#67a5df;color:#fff}` +
        `.${defCon.class.checkbox}{display:none!important}.${defCon.class.checkbox}+label{cursor:pointer;padding:0;margin:0 2px 0 0;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:76px;height:32px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);white-space:nowrap;box-sizing:content-box}.${defCon.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${defCon.class.checkbox}+label::after{position:absolute;top:0;left:28px;border-radius:100px;padding:5px;font-size:16px;font-weight:700;font-style:normal;color:#fff;content:"OFF"}.${defCon.class.checkbox}:checked+label{cursor:pointer;margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}.${defCon.class.checkbox}:checked+label::after{content:"ON";left:10px}.${defCon.class.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}#${defCon.id.fface} label,#${defCon.id.fface}+label::after,#${defCon.id.fface}+label::before,#${defCon.id.smooth} label,#${defCon.id.smooth}+label::after,#${defCon.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}` +
        `#${defCon.id.fontShadow} div.${defCon.class.flex}:before,#${defCon.id.fontShadow} div.${defCon.class.flex}:after,#${defCon.id.fontStroke} div.${defCon.class.flex}:before,#${defCon.id.fontStroke} div.${defCon.class.flex}:after,#${defCon.id.fontSize} div.${defCon.class.flex}:before,#${defCon.id.fontSize} div.${defCon.class.flex}:after{display:none}#${defCon.id.fontShadow} #${defCon.id.shadowSize},#${defCon.id.fontStroke} #${defCon.id.strokeSize},#${defCon.id.fontSize} #${defCon.id.fontZoom}{color:#111!important;width:56px!important;text-indent:0;margin:0 10px 0 0!important;height:32px!important;font-size:17px!important;font-weight:400!important;font-family:Impact,Times,serif!important;border:#67a5df 2px solid!important;border-radius:4px;text-align:center;box-sizing:content-box;padding:0;background:#fafafa!important}.${defCon.class.flex}{display:flex;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row;width:auto;min-width:100%}.${defCon.class.slider} input{visibility:hidden}#${defCon.id.shadowColor} *{box-sizing:content-box}#${defCon.id.shadowColor} .${defCon.class.frColorPicker}{width:auto;margin:0;padding:0}#${defCon.id.shadowColor} .${defCon.class.frColorPicker} #${defCon.id.color}{width:164px!important;min-width:164px;height:35px!important;text-indent:0;font-size:18px!important;font-weight:400!important;background:#fdfdffb0;box-sizing:border-box;font-family:Impact,Times,serif!important;color:#333!important;border:#67a5df 2px solid!important;border-radius:4px;padding: 0 8px 0 0;margin:0;text-align:center;cursor:pointer}` +
        `#${defCon.id.fontCSS} textarea,#${defCon.id.fontEx} textarea{font:bold 14px/150% "Roboto Mono",Monaco,"Courier New",Consolas,monospace,'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont!important;min-width:calc(100% - 2px);max-width:calc(100% - 2px);width:calc(100% - 2px)!important;height:78px;min-height:78px;max-height:78px;resize:none;border:2px solid #67a5df!important;border-radius:6px;box-sizing:border-box;padding:5px;margin:0;color:#0b5b9c!important;word-break:break-all;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin}#${defCon.id.fontCSS} textarea::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:#efefef;border-radius:10px}#${defCon.id.fontCSS} textarea::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontEx} textarea{background:#fafafa!important}#${defCon.id.fontEx} textarea::-webkit-scrollbar{width:10px;height:1px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px #67a5df;background:#487baf;border-radius:10px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}#${defCon.id.fontEx} textarea::-webkit-scrollbar-track-piece{box-shadow:inset 0 0 5px #67a5df;background:#efefef;border-radius:10px}.${defCon.class.switch}{box-sizing:border-box;float:right;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;color:#0a68c1;border-radius:4px}#${defCon.id.cSwitch}:hover,#${defCon.id.eSwitch}:hover{cursor:pointer;user-select:none}.${defCon.class.readonly}{background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:50px 50px!important;background-color:#fff7f7!important}.${defCon.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9 0,#e9ffe9 25%,transparent 25%,transparent 50%,#e9ffe9 50%,#e9ffe9 75%,transparent 75%,transparent)!important;background-size:50px 50px;background-color:#f7fff7!important}` +
        `#${defCon.id.submit} button{box-sizing:border-box;background-image:initial;background-color:#67a5df;color:#fff!important;margin:0;padding:5px 10px;cursor:pointer;border:2px solid #6ba7e0;border-radius:6px;width:auto;min-width:min-content;min-height:35px;height:35px;font:normal 600 14px/150% "Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${defCon.id.submit} button:hover{box-shadow:0 0 5px rgba(0,0,0,.4)!important}#${defCon.id.submit} .${defCon.class.cancel},#${defCon.id.submit} .${defCon.class.reset}{float:left;margin-right:10px}#${defCon.id.submit} .${defCon.class.submit}{float:right}#${defCon.id.submit} #${defCon.id.backup}{margin:0 10px 0 0;display:none}.${defCon.class.anim}{animation:jiggle 1.8s ease-in infinite;border:2px solid crimson!important;background:crimson!important}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}`
    );
    const fontStyle_tooltip = String(
      `.${defCon.class.tooltip}{position:relative;cursor:help;user-select:none}.${defCon.class.tooltip} span.${defCon.class.emoji}{font-weight:400!important}.${defCon.class.tooltip}:active .${defCon.class.tooltip}{display:block}.${defCon.class.tooltip} .${defCon.class.tooltip}{display:none;box-sizing:content-box;position:absolute;z-index:999999;border:2px solid #b8c4ce;border-radius:6px;padding:10px;width:242px;max-width:242px;font-weight:400;color:#fff;background-color:#54a2ec;opacity:.9}.${defCon.class.tooltip} .${defCon.class.tooltip} *{font-family:"Microsoft YaHei UI",system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;font-size:14px!important}.${defCon.class.tooltip} .${defCon.class.tooltip} em{font-style:normal!important}.${defCon.class.tooltip} .${defCon.class.tooltip} strong{color:darkorange;font-size:18px!important}.${defCon.class.tooltip} .${defCon.class.tooltip} p{color:#fff;display:block;margin:0 0 10px 0;line-height:150%;text-indent:0!important}.${defCon.class.ps1}{position:relative;top:-33px;height:0;width:24px;margin:0;padding:0;right:5px;float:right}.${defCon.class.ps2}{top:35px;right:-7px}.${defCon.class.ps3}{top:-197px;margin-left:-1px}`
    );
    const fontStyle_Progress = String(
      `.${defCon.class.range}{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:white;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic bold 14px/14px monospace,serif;--fill-color:var(--primary-color);--progress-background:rgb(223, 223, 223);--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),0 0 1px rgba(0, 0, 0, 0.5) inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px darkorange inset,0 0 3px rgba(0, 0, 0, 0.4);--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--step:1;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, "");--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}` +
        `.${defCon.class.range}{width:auto;min-width:105%!important;margin:-3px 0 0 -7px;box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));background:linear-gradient(to right,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.${defCon.class.range}[data-ticks-position=top]{--flip-y:1}.${defCon.class.range}::after,.${defCon.class.range}::before{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max,block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y,-2.5ch);top:calc(-2.5ch * var(--flip-y));opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before,-1) * -1)) scale(var(--at-edge));pointer-events:none}.${defCon.class.range}::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.${defCon.class.range}::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}` +
        `.${defCon.class.rangeProgress}{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);height:calc(var(--track-height));background:var(--progress-background,#eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.${defCon.class.rangeProgress}::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.${defCon.class.rangeProgress}::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.${defCon.class.range}>input:only-of-type~.${defCon.class.rangeProgress}{--clip-start:0}` +
        `.${defCon.class.range}>input{-webkit-appearance:none;box-shadow:initial!important;width:100%;height:var(--thumb-size)!important;margin:0!important;padding:0!important;position:absolute!important;left:0;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + calc(var(--ticks-gap)/ 2 * var(--flip-y,-1)))!important;border:0!important;cursor:grab;outline:0!important;background:0 0!important;--thumb-shadow:var(--thumb-shadow-active)}.${defCon.class.range}>input:not(:only-of-type){pointer-events:none}.${defCon.class.range}>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${defCon.class.range}>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${defCon.class.range}>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}` +
        `.${defCon.class.range}>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.${defCon.class.range}>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.${defCon.class.range}>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}.${defCon.class.range}>input:active+output{transition:0s;opacity:0.9;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.${defCon.class.range}>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}.${defCon.class.range}>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.${defCon.class.range}>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.${defCon.class.range}>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}.${defCon.class.range}>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}.${defCon.class.range}>input:nth-of-type(2)+output{--value:var(--value-b)}.${defCon.class.range}>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%);pointer-events:none;width:auto;min-width:40px;height:24px;min-height:24px;text-align:center;position:absolute;z-index:5;background:var(--value-background);border-radius:4px;padding:0 6px;left:var(--pos);transform:translate(var(--x-offset),calc(150% * var(--flip) - (var(--y-offset,0) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s;opacity:0;box-sizing:content-box}.${defCon.class.range}>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`
    );
    const fontStyle = fontTest + fontStyle_db + fontStyle_container + fontStyle_tooltip + fontStyle_Progress;
    const tFontSize = isFontsize
      ? String(
          `<li id="${defCon.id.fontSize}">
            <div class="${defCon.class.flex}">
              <span style="margin:0;padding:0">字体比例缩放</span>
              <input id="${defCon.id.fontZoom}" type="text" v="number" maxlength="5" />
            </div>
            <div class="${defCon.class.range}" data-ticks-position="top"
              style="--min:.8;--max:1.5;--step:.001;--value:${CONST.fontSize};--text-value:'${CONST.fontSize.toFixed(3).toString()}'">
              <input id="${defCon.id.zoomSize}" type="range" min=".8" max="1.5" step=".001" value="${CONST.fontSize.toFixed(3)}">
              <output></output>
              <div class='${defCon.class.rangeProgress}'></div>
            </div>
          </li>`
        )
      : ``;
    const tHTML = String(
      `<div id="${defCon.id.container}">
        <fieldset id="${defCon.id.field}" style="display:block">
          <legend class="${defCon.class.title}">
            <span id="${defCon.id.seed}_scriptname" title="Version ${curVersion}" style="color:#8b0000!important">${defCon.scriptName}</span>
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
              <div style="margin:0;padding:0">字体重写（默认：开）</div>
              <div style="height:32px;margin:0;padding:0;align-self:center">
                <input type="checkbox" id="${defCon.id.fface}" class="${defCon.class.checkbox}" ${CONST.fontFace ? "checked" : ""} />
                <label for="${defCon.id.fface}"></label>
              </div>
            </li>
            <li id="${defCon.id.fontSmooth}">
              <div style="margin:0;padding:0">字体平滑（默认：开）</div>
              <div style="height:32px;margin:0;padding:0;align-self:center">
                <input type="checkbox" id="${defCon.id.smooth}" class="${defCon.class.checkbox}" ${CONST.fontSmooth ? "checked" : ""} />
                <label for="${defCon.id.smooth}"></label>
              </div>
            </li>
            ${tFontSize}
            <li id="${defCon.id.fontStroke}">
              <div class="${defCon.class.flex}">
                <span style="margin:0;padding:0">字体描边尺寸</span>
                <input id="${defCon.id.strokeSize}" type="text" v="number" maxlength="5" />
              </div>
              <div class="${defCon.class.range}" data-ticks-position="top"
                style="--step:.001;--min:0;--max:1;--value:${CONST.fontStroke};--text-value:'${CONST.fontStroke.toFixed(3).toString()}'">
                <input id="${defCon.id.stroke}" type="range" min="0" max="1" step=".001" value="${CONST.fontStroke.toFixed(3)}" />
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
                style="--step:.01;--min:0;--max:8;--value:${CONST.fontShadow};--text-value:'${CONST.fontShadow.toFixed(2).toString()}'">
                <input id="${defCon.id.shadow}" type="range" min="0" max="8" step=".01" value="${CONST.fontShadow.toFixed(2)}" />
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
                    <p><em style="color:darkred">注意：输入数值会自动转化为HEXA格式，但数值保持一致性。错误格式会被替换为刚刚正确显示的数值。</em></p>
                  </span>
                </span>
              </div>
              <div class="${defCon.class.frColorPicker}">
                <input title="输入颜色代码" type="text" id="${defCon.id.color}" />
              </div>
            </li>
            <li id="${defCon.id.fontCSS}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">需要渲染的网页元素：
                <span class="${defCon.class.tooltip}">
                  <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                    <p>默认为排除大多数网站常用的特殊CSS样式后需要渲染的页面元素。填写格式：<em style="color:#cecece">:not(.fa)</em> 或 <em style="color:#cecece">:not([class*="fa"])</em> 或 <em style="color:#cecece">,#idname .classname</em></p>
                    <p><em style="color:darkred">该选项为重要参数，默认只读，双击解锁。请尽量不要修改，避免造成样式失效。若失效请重置。</em></p>
                  </span>
                </span>
                <div id="${defCon.id.cSwitch}" class="${defCon.class.switch}" data-switch="ON">\u2227</div>
              </div>
              <textarea placeholder="请谨慎修改默认值，避免渲染失效。" id="${defCon.id.cssfun}" class="${defCon.class.readonly}"
                title="重要参数，默认只读，双击解锁。" readonly="readonly">${CONST.fontCSS ? CONST.fontCSS : defValue.fontCSS}</textarea>
            </li>
            <li id="${defCon.id.fontEx}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">排除渲染的HTML标签：
                <span class="${defCon.class.tooltip}">
                  <span class="${defCon.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${defCon.class.tooltip} ${defCon.class.ps3}">
                    <p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p>
                    <p><em style="color:darkred">编辑该选项需要CSS知识，如需要排除复杂的样式或标签可通过这里进行添加，样式若混乱请重置。</em></p>
                  </span>
                </span>
                <div id="${defCon.id.eSwitch}" class="${defCon.class.switch}" data-switch="ON">\u2227</div>
              </div>
              <textarea placeholder="请输入要排除渲染的HTML标签，形如: input, em, div[id='test']"
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
      </div>`
    );
    const tCSS = `@charset "UTF-8";` + fontStyle;
    const tStyle = `@charset "UTF-8";` + tshadow;
    defCon.tStyle = tStyle;
    defCon.refont = refont;

    /* SYSTEM INFO */

    const defautlFont = "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53";
    let reFontFace = defautlFont;
    defCon.curFont = defautlFont;

    await getCurrentFontName(CONST.fontFace, defCon.refont, defautlFont);

    if (curWindowTop) {
      if (defCon.siteIndex === undefined) {
        console.info(
          `%c${defCon.scriptName}\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/FontRendering\n%c\u259e\u0020脚本版本：%cV%s%c\n\u259e\u0020个性化设置：%c%s%c/%s%s\n%c\u259e\u0020字体缩放：%s%s\n\u259e\u0020本地备份：%s\u3000\u259a\u0020保存预览：%s\n%c\u259e\u0020渲染字体：%s\n\u259e\u0020字体平滑：%s\u3000\u259a\u0020字体重写：%s\n\u259e\u0020字体描边：%s\u3000\u259a\u0020字体阴影：%s`,
          "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
          "line-height:180%;font-size:10px;color:#777;font-style:italic",
          "line-height:180%;font-size:12px;color:slategray",
          "color:slategrey;font:italic 16px/150% Candara,'Times New Roman'",
          defCon.curVersion,
          "line-height:180%;font-size:12px;color:steelblue",
          defCon.domainCount > maxPersonalSites ? "color:crimson" : "color:steelblue",
          defCon.domainCount,
          "line-height:180%;font-size:12px;color:steelblue",
          maxPersonalSites,
          defCon.domainIndex !== undefined ? "\uff08\u5f53\u524d\uff1a\u4e2a\u6027\u5316\uff09" : "\uff08\u5f53\u524d\uff1a\u5168\u5c40\uff09",
          "line-height:180%;font-size:12px;color:steelblue",
          isFontsize ? "ON " : "OFF",
          isFontsize
            ? CONST.fontSize === 1
              ? "\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a(WEBSITE DEFINED)"
              : `\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a${Number(CONST.fontSize * 100).toFixed(2) + "%"}`
            : "\u3000\u259a\u0020\u7f29\u653e\u6bd4\u4f8b\uff1a(BROWSER DEFINED)",
          isBackupFunction ? "ON " : "OFF",
          isPreview ? "ON " : "OFF",
          "line-height:180%;font-size:12px;color:teal",
          fontface_i ? reFontFace : "\u5df2\u5173\u95ed\uff08\u91c7\u7528" + reFontFace + "\uff09",
          CONST.fontSmooth ? "ON " : "OFF",
          CONST.fontFace ? "ON " : "OFF",
          CONST.fontStroke ? "ON " : "OFF",
          CONST.fontShadow ? "ON " : "OFF"
        );
      } else {
        console.info(
          `%c${defCon.scriptName}\n%c${curHostName.toUpperCase()} 已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。`,
          "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:crimson",
          "line-height:180%;font-size:12px;color:darkred"
        );
      }
    }

    /* Insert CSS */

    try {
      preInsertContentToHead();
      const callback = mutations => {
        defCon.siteIndex === undefined && deBounce(correctBoldErrorByStroke, 60, "fixstroke")(CONST.fontStroke);
        mutations.forEach(mutation => {
          if (!((!curWindowTop || qS(`.${defCon.class.rndClass}`)) && (defCon.siteIndex !== undefined || qS(`.${defCon.class.rndStyle}`)))) {
            debug(`\u27A4 %cMutationObserver: %c%s %c%s`, "color:teal", "color:olive", mutation.type, "color:red", !preInsertContentToHead(true));
          }
          if (qS(`.${defCon.class.rndStyle}`) && document.head.lastChild.className !== defCon.class.rndStyle) {
            try {
              const lastChildEleclassName = document.head.lastChild.className || "lastChildEleclassName";
              if (lastChildEleclassName.includes("darkreader") && document.head.lastChild.previousSibling.className === defCon.class.rndStyle) {
                debug("\u27A4 %s is Ready, Caused by darkreader inserted", defCon.class.rndStyle);
              } else if (qS(`.${defCon.class.rndStyle}`).nextSibling) {
                debug("\u27A4 [:Before] %c%s", "font-style:italic", document.head.lastChild.className || "<empty string>");
                defCon.siteIndex === undefined && moveStyleTolastChild(true);
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
      error("\u27A4 insertCSS:", e);
    }

    /* Menus Insert */

    const addAction = {
      setConfigure: () => {
        if (!qS(`#${defCon.id.rndId}`)) {
          insertHTML();
          operateConfigure();
          setAutoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
          sleep(100).then(() => {
            qS(`#${defCon.id.container}`).style.opacity = 1;
            debug("\u27A4 errorCount:", defCon.errors.length);
            if (defCon.errors.length) {
              reportErrorToAuthor(defCon.errors, true);
            }
          });
          qS(`.${defCon.class.title} span.${defCon.class.guide}`).addEventListener("click", () => {
            GMopenInTab(`${hostURI}#guide`, defCon.options);
          });
          qS(`#${defCon.id.field} span#${defCon.id.seed}_scriptname`).addEventListener("dblclick", function () {
            hintUpdateInfo(`${hostURI}#update`, _config_data_.curVersion);
            this.style.userSelect = "none";
          });
        } else {
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
          closeConfigurePage(false);
        }
      },
      excludeSites: async () => {
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        let frDialog = new FrDialogBox({
          trueButtonText: "确 定",
          neutralButtonText: "取 消",
          messageText: `<p style="word-break:break-all;font:bold italic 24px/150% Candara,'Times New Roman'!important">${curHostName}</p><p style="color:darkred">该域名下所有页面将被禁止字体渲染！</p><p>确定后页面将自动刷新，请确认是否排除？</p>`,
          titleText: "禁止字体渲染",
        });
        if (await frDialog.respond()) {
          exSite = await GMgetValue("_Exclude_site_");
          exSite = JSON.parse(defCon.decrypt(exSite));
          exSite.push(curHostName);
          GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(exSite)));
          location.reload();
        }
        frDialog = null;
      },
      vipConfigure: async () => {
        configure = await GMgetValue("_configure_");
        _config_data_ = JSON.parse(defCon.decrypt(configure));
        isBackupFunction = Boolean(_config_data_.isBackupFunction);
        isPreview = Boolean(_config_data_.isPreview);
        isFontsize = Boolean(_config_data_.isFontsize);
        isHotkey = Boolean(_config_data_.isHotkey !== undefined ? _config_data_.isHotkey : true);
        isCloseTip = Boolean(_config_data_.isCloseTip);
        maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        let frDialog = new FrDialogBox({
          trueButtonText: "保存数据",
          falseButtonText: "帮助文件",
          neutralButtonText: "取 消",
          messageText: String(
            `<ul class="${defCon.class.main}" style="box-sizing:content-box;max-height:215px;overflow-x:hidden;margin:0;padding:5px 0">
              <li id="${defCon.id.bk}">
                <div class="${defCon.id.seed}_VIP" title="养成定期备份的好习惯，保护自己的数据安全！">\u2460 本地备份功能（默认：开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isbackup}" class="${defCon.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                  <label for="${defCon.id.isbackup}"></label>
                </div>
              </li>
              <li id="${defCon.id.pv}">
                <div class="${defCon.id.seed}_VIP" title="无需保存刷新页面，直接预览渲染效果！">\u2461 保存预览功能（默认：关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.ispreview}" class="${defCon.class.checkbox}" ${isPreview ? "checked" : ""} />
                  <label for="${defCon.id.ispreview}"></label>
                </div>
              </li>
              <li id="${defCon.id.fs}">
                <div class="${defCon.id.seed}_VIP" title="实验性功能：不推荐Firefox浏览器开启字体缩放！">\u2462 字体缩放功能（默认：关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isfontsize}" class="${defCon.class.checkbox}" ${isFontsize ? "checked" : ""} />
                  <label for="${defCon.id.isfontsize}"></label>
                </div>
              </li>
              <li id="${defCon.id.hk}">
                <div class="${defCon.id.seed}_VIP" title="如快捷键有冲突，请在此关闭它！">\u2463 键盘快捷键功能（默认：开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.ishotkey}" class="${defCon.class.checkbox}" ${isHotkey ? "checked" : ""} />
                  <label for="${defCon.id.ishotkey}"></label>
                </div>
              </li>
              <li id="${defCon.id.ct}">
                <div class="${defCon.id.seed}_VIP" title="您将无法第一时间获得更新内容，错过重要提示！">\u2464 关闭更新提示功能（不推荐）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${defCon.id.isclosetip}" class="${defCon.class.checkbox}" ${isCloseTip ? "checked" : ""} />
                  <label for="${defCon.id.isclosetip}"></label>
                </div>
              </li>
              <li id="${defCon.id.mps}">
                <div class="${defCon.id.seed}_VIP" title="防止页面加载缓慢，不建议设置过高的数值！">\u2465 个性化设置总数（默认：100）</div>
                <div style="margin:0 5px 0 0;padding:0">
                  <input maxlength="4" id="${defCon.id.maxps}" placeholder="100" value="${maxPersonalSites}"
                    style="box-sizing:border-box;font:normal 500 16px/150% Impact,Times,serif!important;border:2px solid darkgoldenrod;border-radius:4px;width:70px;min-width:70px;text-align:center;padding:4px 5px;color:#333" />
                </div>
              </li>
              <li id="${defCon.id.flc}">
                <div class="${defCon.id.seed}_VIP" title="安装新字体后，请先重启浏览器再重建缓存！">\u2466 字体列表缓存（时效：24小时）</div>
                <button id="${defCon.id.flcid}" title="重建当前网站字体列表缓存"
                  style="box-sizing:border-box;margin:0 5px 0 0;padding:2px 5px;width:max-content;height:max-content;min-width:70px;min-height:32px;background:#eee;letter-spacing:normal">
                  重建缓存
                </button>
              </li>
            </ul>
            <div id="${defCon.id.feedback}" title="遇到问题，建议先看看脚本帮助文件。"
              style="box-sizing:content-box;height:auto;margin:0 0 0 15px;padding:2px 0 6px 0;font-size:16px;font-style:normal;color:#333;cursor:help">
                \ud83e\udde1<span style="font-weight:700">\u0020如果您遇到问题，请向我反馈\u0020</span>\ud83e\udde1
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
        if (getNavigator.type("core").Gecko) {
          confirmIfValueChange(
            qS(`#${defCon.id.isfontsize}`),
            "由于 Firefox(Gecko内核) 对部分 CSS 及 Javascript 的兼容性原因，会造成某些站点样式异常、坐标漂移等问题，我们建议您在 Firefox 浏览器中谨慎使用脚本级字体缩放功能。\n\n如有必要需求，请使用 Firefox 自身的缩放功能来放大(Ctrl+)或缩小(Ctrl-)当前网站页面（注意：清除 历史记录\u2192数据\u2192网站设置 会重置所有网站的缩放设置），或在 设置\u2192全局缩放 中配置缩放比例。\n\n请确认是否开启字体缩放功能？"
          );
        }
        confirmIfValueChange(
          qS(`#${defCon.id.isclosetip}`),
          "关闭更新提示，您将不能在第一时间获取更新内容，或错过重要的使用提示和警示通告。如遇重大功能升级，忽略更新提示有几率影响正常使用。双击字体渲染设置窗口顶部的脚本名称，可查看历史更新提示。\n\n请确认是否关闭更新提示功能？"
        );
        qS(`#${defCon.id.flcid}`).addEventListener("click", async () => {
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
          cache.remove("_fontlist_");
          let frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            messageText: `<p style="font-size:18px!important;text-align:center;padding-bottom:6px;color:darkgoldenrod">字体列表缓存已重建，页面即将刷新！</p><p style="text-align:center"><a style="display:inline-block;border:2px solid darkgoldenrod;border-radius:8px;width:302px;height:237px;background:url('${loadingIMG}') 50% 50% no-repeat;overflow:hidden"><img src='${fontListIMG}' alt="当前网站的字体列表缓存重建"/></a></p>`,
            titleText: "当前网站字体列表缓存重建",
          });
          if (await frDialog.respond()) {
            frDialog = null;
            location.reload();
          }
        });
        qS(`#${defCon.id.feedback}`).addEventListener("click", () => {
          GMopenInTab(defCon.feedback, defCon.options);
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
          GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_config_data_)));
          let frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            messageText: `<p style="color:darkgoldenrod">高级核心功能参数已成功保存，页面即将刷新！</p>`,
            titleText: "高级核心功能设置保存",
          });
          closeConfigurePage(true);
          if (await frDialog.respond()) {
            frDialog = null;
            location.reload();
          }
        } else {
          GMopenInTab(`${hostURI}#warning`, defCon.options);
        }
        frDialog = null;
      },
      includeSites: async () => {
        closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        let frDialog = new FrDialogBox({
          trueButtonText: "确 定",
          neutralButtonText: "取 消",
          messageText: `<p style="font:italic bold 22px/150% Candara,'Times New Roman'!important">${curHostName}</p><p style="color:darkgreen">该域名下所有页面将重新进行字体渲染！</p><p>确定后页面将自动刷新，请确认是否恢复？</p>`,
          titleText: "恢复字体渲染",
        });
        if (await frDialog.respond()) {
          exSite = await GMgetValue("_Exclude_site_");
          exSite = JSON.parse(defCon.decrypt(exSite));
          defCon.siteIndex = updateExsitesIndex(exSite);
          exSite.splice(defCon.siteIndex, 1);
          GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(exSite)));
          location.reload();
        }
        frDialog = null;
      },
    };

    const isMac = getNavigator.type("system") === "MacOS";

    sleep(3e3).then((Font_Set, Feed_Back, Exclude_site, Parameter_Set) => {
      if (curWindowTop) {
        loading ? GMunregisterMenuCommand(loading) : debug("\u27A4 No Loading_Menu");
        if (defCon.siteIndex === undefined) {
          Font_Set ? GMunregisterMenuCommand(Font_Set) : debug("\u27A4 No Font_Set_Menu");
          Font_Set = GMregisterMenuCommand(`\ufff2\ud83c\udf13 字体渲染设置${isHotkey ? "(" + (isMac ? "Q" : "P") + ")" : ""}`, () => {
            addAction.setConfigure();
          });
          Exclude_site ? GMunregisterMenuCommand(Exclude_site) : debug("\u27A4 No Exclude_site_Menu");
          Exclude_site = GMregisterMenuCommand(`\ufff3\u26d4 排除渲染 ${curHostName} ${isHotkey ? "(" + (isMac ? "G" : "X") + ")" : ""}`, () => {
            addAction.excludeSites();
          });
          Parameter_Set ? GMunregisterMenuCommand(Parameter_Set) : debug("\u27A4 No Parameter_Set_Menu");
          Parameter_Set = GMregisterMenuCommand(`\ufff7\ud83d\udc8e 高级核心功能设置${isHotkey ? "(" + (isMac ? "M" : "G") + ")" : ""}`, () => {
            addAction.vipConfigure();
          });
        } else {
          Exclude_site ? GMunregisterMenuCommand(Exclude_site) : debug("\u27A4 No Exclude_site_Menu");
          Exclude_site = GMregisterMenuCommand(`\ufff2\ud83c\udf40 重新渲染 ${curHostName} ${isHotkey ? "(" + (isMac ? "G" : "X") + ")" : ""}`, () => {
            addAction.includeSites();
          });
          Feed_Back ? GMunregisterMenuCommand(Feed_Back) : debug("\u27A4 No Feed_Back_Menu");
          Feed_Back = GMregisterMenuCommand(`\ufff9\ud83e\udde1 向作者反馈问题或建议${isHotkey ? "(" + (isMac ? "U" : "T") + ")" : ""}`, () => {
            GMopenInTab(defCon.feedback, defCon.options);
          });
        }
      }
    });

    /* hotkey setting */

    if (isHotkey && curWindowTop) {
      document.addEventListener("keydown", event => {
        const e = event || window.Event;
        const ekey = (isMac ? e.metaKey : e.altKey) && !e.ctrlKey && !e.shiftKey;
        if (e.keyCode === (isMac ? 81 : 80) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (defCon.siteIndex === undefined) {
              addAction.setConfigure();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (isMac ? 71 : 88) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (defCon.siteIndex === undefined) {
              addAction.excludeSites();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (isMac ? 77 : 71) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 1e3) {
            defCon.clickTimer = Date.now();
            if (defCon.siteIndex === undefined) {
              addAction.vipConfigure();
            } else {
              addAction.includeSites();
            }
          }
        }
        if (e.keyCode === (isMac ? 85 : 84) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.clickTimer > 10e3) {
            defCon.clickTimer = Date.now();
            GMopenInTab(defCon.feedback, defCon.options);
          }
        }
      });
    }

    /* important Functions */

    function insertHTML() {
      if (document.body) {
        try {
          const section = cE("fr-configure");
          section.id = defCon.id.rndId;
          section.innerHTML = tHTML;
          document.body.appendChild(section);
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

    function moveStyleTolastChild(isMutationObserver) {
      try {
        if (isMutationObserver) {
          const cssScriptCount = document.head.querySelectorAll("style[id^='TC']").length;
          if (cssScriptCount > 1) {
            if (!defCon.scriptCount) {
              defCon.scriptCount = true;
              const info = `\u53d1\u73b0\u5197\u4f59\u5b89\u88c5\u7684\u201c${defCon.scriptName}\u201d\u811a\u672c\uff0c\u8bf7\u5220\u9664\u91cd\u590d\u811a\u672c\u4fdd\u7559\u5176\u4e00\u3002`;
              defCon.errors.push(`[Redundant Scripts]: ${info}`);
              reportErrorToAuthor(defCon.errors, true);
              console.error("\u27A4 ", info);
            }
            return;
          } else if (document.head.querySelectorAll("style[id^='TS']").length) {
            insertStyle(true);
            debug("\u27A4 [:After]", document.head.lastChild.className);
          }
        } else {
          addLoadEvents((startTime = Date.now()) => {
            const isLast = document.head.lastChild.className === defCon.class.rndStyle;
            const isPrevious = document.head.lastChild.previousSibling.className === defCon.class.rndStyle;
            const isLastChild = isLast || isPrevious;
            debug("\u27A4 Style in lastChild: %c%s", "color:crimson;font-weight:bold", isLastChild);
            sleep(2e3).then(() => {
              if (document.head.lastChild.className !== defCon.class.rndStyle) {
                insertStyle(true);
              }
              debug("\u27A4 [lastChild] %c%s %c%s", "color:0;font-weight:bold", document.head.lastChild.className, "color:gray", Date.now() - startTime);
            });
            return isLastChild;
          });
        }
      } catch (e) {
        error("\u27A4 moveStyleTolastChild:", e);
      }
    }

    function preInsertContentToHead(isStyleReady = false) {
      setRAFInterval(
        () => {
          if (defCon.siteIndex === undefined) {
            if (!qS(`.${defCon.class.rndStyle}`)) {
              insertStyle(false);
            } else {
              moveStyleTolastChild(false);
              isStyleReady = true;
            }
          } else {
            isStyleReady = true;
          }
          if (curWindowTop && !qS(`.${defCon.class.rndClass}`)) {
            insertCSS();
          }
          return isStyleReady;
        },
        10,
        true
      );
    }

    async function fontCheck_DetectOnce(fontData = []) {
      const fontReady = await document.fonts.ready;
      const checkFont = new SupportFontFamily();
      const fontAvailable = new Set();
      let ii = 1;
      if (fontReady) {
        const cusFontList = await GMgetValue("_Custom_fontlist_");
        const cusFontCheck = cusFontList ? JSON.parse(defCon.decrypt(cusFontList)) : DEFAULT_ARRAY;
        fontCheck = getUniqueValues([...fontCheck, ...cusFontCheck]);
        for (const font of fontCheck.values()) {
          if (checkFont.detect(font.en)) {
            font.sort = ii;
            fontAvailable.add(font);
          } else if (checkFont.detect(convertToUnicode(font.ch))) {
            font.en = convertToUnicode(font.ch);
            font.sort = ii;
            fontAvailable.add(font);
          }
          ii++;
        }
      }
      fontData = [...fontAvailable.values()].sort((a, b) => {
        return a.sort - b.sort;
      });
      return fontData;
    }

    async function operateConfigure(fontData = []) {
      try {
        if (curWindowTop) {
          // fontlist with cache expires
          try {
            const fontlist_Cache = cache.get("_fontlist_");
            if (fontlist_Cache) {
              debug("\u27A4 %cLoad font_Data from Cache", "color:green;font-weight:bold");
              fontData = fontlist_Cache;
            } else {
              debug("\u27A4 %cStart real-time font detection", "color:crimson;font-weight:bold");
              fontData = await fontCheck_DetectOnce();
              cache.set("_fontlist_", fontData);
            }
          } catch (e) {
            error("\u27A4 fontlist with cache expires: ", e);
            cache.remove("_fontlist_");
            fontData = await fontCheck_DetectOnce();
            cache.set("_fontlist_", fontData);
          }

          /* Fonts selection */

          try {
            if (qS(`#${defCon.id.fontList} .${defCon.class.fontList}`)) {
              fontSet(`#${defCon.id.fontList} .${defCon.class.fontList}`).fsearch(fontData);
              qS(`#${defCon.id.fonttooltip}`).addEventListener("dblclick", async (custom_Fontlist, save_Fontlist = DEFAULT_ARRAY, customFontlist = "") => {
                const cusFontList = await GMgetValue("_Custom_fontlist_");
                const cusFontCheck = cusFontList ? JSON.parse(defCon.decrypt(cusFontList)) : DEFAULT_ARRAY;
                if (cusFontCheck.length && Array.isArray(cusFontCheck)) {
                  cusFontCheck.forEach(item => {
                    delete item.sort;
                    customFontlist += JSON.stringify(item) + "\n";
                  });
                }
                let frDialog = new FrDialogBox({
                  trueButtonText: "保 存",
                  falseButtonText: "帮助文档",
                  neutralButtonText: "取 消",
                  messageText: `<p style="color:#666;font-size:14px!important">以下文本域可按预定格式增加自定义字体。请用小贴士或按样例填写，输入有误将被自动过滤。与『<a href="${hostURI}#fontlist" target="_blank">内置字体表</a>』重复的字体将被自动忽略。【功能小贴士：<span id="${defCon.id.seed}_addTools" style="color:crimson;cursor:pointer">字体添加辅助工具</span>】</p><p><textarea id="${defCon.id.seed}_custom_Fontlist" style="box-sizing:border-box;min-height:160px!important;min-width:388px!important;max-width:388px!important;resize:vertical;padding:5px;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% monospace,'Courier New','Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;white-space:pre!important;cursor:text" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下：\n\n{ "ch": "中文字体名一", "en": "EN Fontname 1" }\u21b2\n{ "ch": "中文字体名二", "en": "EN Fontname 2" }\u21b2\n{ "ch": "中文字体名三", "en": "EN Fontname 3" }\u21b2\n\n（注意：\u21b2为换行符号，输入(Enter)回车即可）'>${customFontlist}</textarea></p><p style="display:block;margin:-5px 0 0 -7px!important;height:max-content;color:crimson;font-size:14px!important">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p>`,
                  titleText: "自定义字体表",
                });
                qS(`#${defCon.id.seed}_addTools`).addEventListener("click", () => {
                  let chName, enName, cusFontName;
                  chName = prompt("请输入中文字体名：(例如：鸿蒙黑体，仅支持半角输入模式，包括中文、日文、韩文、英文，数字、减号、下划线、空格、@)", "鸿蒙黑体");
                  if (chName === null) {
                    return;
                  } else if (/^@?[a-zA-Z0-9\u2E80-\uD7FF\-_ ]+$/.test(chName.trim())) {
                    enName = prompt("请输入英文字体名：(例如：HarmonyOS Sans SC，仅支持半角输入模式，包括英文、数字、减号、下划线、空格、@)", "HarmonyOS Sans SC");
                    if (enName === null) {
                      return;
                    } else if (/^@?[a-zA-Z0-9\-_ ]+$/.test(enName.trim())) {
                      cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}"}`;
                      const aTrim = qS(`#${defCon.id.seed}_custom_Fontlist`).value.trim() ? "\n" : "";
                      qS(`#${defCon.id.seed}_custom_Fontlist`).value = qS(`#${defCon.id.seed}_custom_Fontlist`).value.trim().concat(aTrim, cusFontName, "\n");
                      custom_Fontlist = qS(`#${defCon.id.seed}_custom_Fontlist`).value.trim();
                    } else {
                      alert("英文字体名 格式输入错误！");
                    }
                  } else {
                    alert("中文字体名 格式输入错误！");
                  }
                });
                qS(`#${defCon.id.seed}_custom_Fontlist`).addEventListener("change", function () {
                  this.value = convertFullToHalf(this.value)
                    .replace(/'|`|·|“|”|‘|’/g, `"`)
                    .replace(/，/g, `,`)
                    .replace(/：/g, `:`);
                  custom_Fontlist = this.value.trim();
                });
                if (await frDialog.respond()) {
                  const fontListArray = custom_Fontlist.match(/{\s*"ch":\s*"@?[a-zA-Z0-9\u2E80-\uD7FF\-_ ]+"\s*,\s*"en":\s*"@?[a-zA-Z0-9\-_ ]+"\s*}/g);
                  if (!custom_Fontlist.length) {
                    GMsetValue("_Custom_fontlist_", defCon.encrypt(JSON.stringify(DEFAULT_ARRAY)));
                    let frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p>自定义字体表已重置成功！<p><p style="color:green">当前网站字体列表缓存已自动重建，页面即将刷新。</p>`,
                      titleText: "自定义字体重置成功",
                    });
                    closeConfigurePage(true);
                    if (await frDialog.respond()) {
                      closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                      cache.remove("_fontlist_");
                      location.reload();
                      frDialog = null;
                    }
                  } else if (fontListArray.length && Array.isArray(fontListArray)) {
                    fontListArray.forEach(item => {
                      save_Fontlist.push(JSON.parse(item));
                    });
                    GMsetValue("_Custom_fontlist_", defCon.encrypt(JSON.stringify(save_Fontlist)));
                    let frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p>您所提交的自定义字体已保存成功！<p><p style="color:green">当前网站字体列表缓存已自动重建，页面即将刷新。</p>`,
                      titleText: "自定义字体保存成功",
                    });
                    closeConfigurePage(true);
                    if (await frDialog.respond()) {
                      closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                      cache.remove("_fontlist_");
                      location.reload();
                      frDialog = null;
                    }
                  } else {
                    let frDialog = new FrDialogBox({
                      trueButtonText: "确 定",
                      messageText: `<p style="color:crimson">您所提交的自定义字体格式有误，请重新输入。<p>`,
                      titleText: "字体表格式错误",
                    });
                    if (await frDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${defCon.id.fonttooltip}`).dispatchEvent(clickEvent);
                      clickEvent = null;
                      frDialog = null;
                    }
                  }
                } else {
                  GMopenInTab(`${hostURI}#custom`, defCon.options);
                }
                frDialog = null;
              });
            }
          } catch (e) {
            defCon.errors.push(`[Fonts selection]: ${e}`);
            error("\u27A4 Fonts selection:", e);
          }

          /* selector placeholder style */

          const ffaceT = qS(`#${defCon.id.fface}`);
          const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
          await getCurrentFontName(CONST.fontFace, defCon.refont, defautlFont);
          if (ffaceT && inputFont) {
            ffaceT.addEventListener("change", async () => {
              await getCurrentFontName(CONST.fontFace, defCon.refont, defautlFont);
              if (ffaceT.checked && !CONST.fontFace) {
                inputFont.setAttribute("placeholder", `正在恢复之前设置的字体…`);
                sleep(360).then((submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`)) => {
                  submitPreview ? submitPreview.click() : debug("\u27A4 v-Preview:", submitPreview);
                });
              }
            });
          }

          /* Fonts Face */

          const submitButton = qS(`#${defCon.id.submit} .${defCon.class.submit}`);
          saveChangeStatus(ffaceT, CONST.fontFace, submitButton, defCon.values);

          /* Font Smooth */

          const smoothT = qS(`#${defCon.id.smooth}`);
          saveChangeStatus(smoothT, CONST.fontSmooth, submitButton, defCon.values);

          /* FontSize Zoom */

          let drawZoom;
          const zoom = qS(`#${defCon.id.fontZoom}`);
          if (isFontsize) {
            try {
              drawZoom = document.querySelector(`#${defCon.id.zoomSize}`);
              zoom.value = CONST.fontSize === 1 ? "OFF" : CONST.fontSize.toFixed(3);
              rangeSliderWidget(drawZoom, zoom, 3, true);
              checkInputValue(zoom, drawZoom, /^[0-1](\.[0-9]{1,3})?$/, 3, true);
            } catch (e) {
              defCon.errors.push(`[FontSize Zoom]: ${e}`);
              error("\u27A4 FontSize Zoom:", e);
            } finally {
              saveChangeStatus(zoom, CONST.fontSize, submitButton, defCon.values, true);
            }
          }

          /* Fonts stroke */

          let drawStrock;
          const stroke = qS(`#${defCon.id.strokeSize}`);
          try {
            drawStrock = document.querySelector(`#${defCon.id.stroke}`);
            stroke.value = CONST.fontStroke === 0 ? "OFF" : CONST.fontStroke.toFixed(3);
            rangeSliderWidget(drawStrock, stroke, 3);
            checkInputValue(stroke, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
          } catch (e) {
            defCon.errors.push(`[Fonts stroke]: ${e}`);
            error("\u27A4 Fonts stroke:", e);
          } finally {
            saveChangeStatus(stroke, CONST.fontStroke, submitButton, defCon.values);
          }

          /* Fonts shadow */

          let drawShadow;
          const shadows = qS(`#${defCon.id.shadowSize}`);
          try {
            drawShadow = document.querySelector(`#${defCon.id.shadow}`);
            shadows.value = CONST.fontShadow === 0 ? "OFF" : CONST.fontShadow.toFixed(2);
            qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
            rangeSliderWidget(drawShadow, shadows, 2);
            checkInputValue(shadows, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
          } catch (e) {
            defCon.errors.push(`[Fonts shadow]: ${e}`);
            error("\u27A4 Fonts shadow:", e);
          } finally {
            saveChangeStatus(shadows, CONST.fontShadow, submitButton, defCon.values);
          }

          /* Fonts shadow color selection */

          let colorPicker;
          const colorshow = qS(`#${defCon.id.color}`);
          const colorReg = /^#[0-9A-F]{8}$|^currentcolor$/i;
          try {
            colorPicker = new window.frColorPicker(`#${defCon.id.color}`, {
              value: CONST.shadowColor,
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
              width: 190,
              height: 210,
              sliderSize: 14,
              shadow: 0,
              onChange: function () {
                colorshow.value = this.toHEXAString() === "#FFFFFFFF" ? "currentcolor" : this.toHEXAString();
                colorshow._value_ = colorshow.value;
              },
            });
            colorPicker.fromString(CONST.shadowColor);
            colorshow.value = colorPicker.toHEXAString() === "#FFFFFFFF" ? "currentcolor" : colorPicker.toHEXAString();
            debug("\u27A4 FRColorPicker:", colorPicker.toHEXAString());
          } catch (e) {
            defCon.errors.push(`[Fonts shadowColor]: ${e}`);
            error("\u27A4 Fonts shadowColor:", e);
          } finally {
            saveChangeStatus(colorshow, CONST.shadowColor, submitButton, defCon.values);
          }

          /* click to selectAll */

          qA(`#${defCon.id.fontZoom},#${defCon.id.strokeSize},#${defCon.id.shadowSize},#${defCon.id.color}`).forEach(item => {
            item.addEventListener("click", function () {
              this.focus();
              this.setSelectionRange(0, this.value.length);
            });
          });

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

          saveChangeStatus(fontCssT, CONST.fontCSS, submitButton, defCon.values);
          saveChangeStatus(fontExT, CONST.fontEx, submitButton, defCon.values);

          /* Expand & Collapse */

          expandOrCollapse(qS(`#${defCon.id.cSwitch}`), fontCssT, qS(`#${defCon.id.fontCSS}`));
          expandOrCollapse(qS(`#${defCon.id.eSwitch}`), fontExT, qS(`#${defCon.id.fontEx}`));

          /* Buttons control */

          qS(`#${defCon.id.submit} .${defCon.class.reset}`).addEventListener("click", async () => {
            let frDialog = new FrDialogBox({
              trueButtonText: "重 置",
              falseButtonText: "恢 复",
              neutralButtonText: "取 消",
              messageText: `<p>『重置/恢复』将当前设置初始化为 <span style="color:slategray">程序默认的初始数据</span> 或 <span style="color:slategrey">上次正确保存的数据</span>。一般是在您错误配置参数且造成无法挽回的情况下才进行重置参数的操作。</p><p style="color:darkgreen">重置：重置当前数据为程序初始值，手动保存生效。</p><p style="color:darkred">恢复：替换为上次正确保存的数据，自动恢复预览。</p><p style="color:gray">取消：放弃重置操作。</p>`,
              titleText: "参数重置确认",
            });
            if (await frDialog.respond()) {
              smoothT.checked !== defValue.fontSmooth ? smoothT.click() : debug("\u27A4 <fontSmooth> NOT MODIFIED");
              ffaceT.checked !== defValue.fontFace ? ffaceT.click() : debug("\u27A4 <fontFace> NOT MODIFIED");
              CONST.fontSelect.split(",")[0] !== defValue.fontSelect.split(",")[0] ? fontSet().fresetList(fontData) : fontSet().fdeleteList(fontData);
              await getCurrentFontName(ffaceT.checked, defCon.refont, defautlFont);
              if (isFontsize) {
                zoom.value = defValue.fontSize === 1 ? "OFF" : defValue.fontSize.toFixed(3);
                zoom._value_ = defValue.fontSize;
                setSliderProperty(drawZoom, defValue.fontSize, 3);
                defCon.tZoom = defValue.fontSize;
              }
              stroke.value = defValue.fontStroke === 0 ? "OFF" : defValue.fontStroke.toFixed(3);
              stroke._value_ = defValue.fontStroke;
              setSliderProperty(drawStrock, defValue.fontStroke, 3);
              shadows.value = defValue.fontShadow === 0 ? "OFF" : defValue.fontShadow.toFixed(2);
              shadows._value_ = defValue.fontShadow;
              setSliderProperty(drawShadow, defValue.fontShadow, 2);
              qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
              colorPicker.fromString(defValue.shadowColor);
              colorshow.value = defValue.shadowColor;
              colorshow._value_ = defValue.shadowColor;
              fontCssT.value = defValue.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST.fontCSS, defCon.values, fontCssT, submitButton);
              fontExT.value = defValue.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST.fontEx, defCon.values, fontExT, submitButton);
              sleep(360).then((submitPreview = qS(`#${defCon.id.submit} .${defCon.class.submit}[v-Preview="true"]`)) => {
                submitPreview ? submitPreview.click() : debug("\u27A4 v-Preview:", submitPreview);
              });
            } else {
              smoothT.checked !== CONST.fontSmooth ? smoothT.click() : debug("\u27A4 <fontSmooth> NOT MODIFIED");
              ffaceT.checked !== CONST.fontFace ? ffaceT.click() : debug("\u27A4 <fontFace> NOT MODIFIED");
              fontSet().fdeleteList(fontData);
              await getCurrentFontName(ffaceT.checked, defCon.refont, defautlFont);
              if (isFontsize) {
                zoom.value = CONST.fontSize === 1 ? "OFF" : CONST.fontSize.toFixed(3);
                zoom._value_ = CONST.fontSize;
                setSliderProperty(drawZoom, CONST.fontSize, 3);
                defCon.tZoom = CONST.fontSize;
              }
              stroke.value = CONST.fontStroke === 0 ? "OFF" : CONST.fontStroke.toFixed(3);
              stroke._value_ = CONST.fontStroke;
              setSliderProperty(drawStrock, CONST.fontStroke, 3);
              shadows.value = CONST.fontShadow === 0 ? "OFF" : CONST.fontShadow.toFixed(2);
              shadows._value_ = CONST.fontShadow;
              setSliderProperty(drawShadow, CONST.fontShadow, 2);
              qS(`#${defCon.id.shadowColor}`).style.display = shadows.value === "OFF" ? "none" : "flex";
              colorPicker.fromString(CONST.shadowColor);
              colorshow.value = CONST.shadowColor === "#FFFFFFFF" ? "currentcolor" : colorPicker.toHEXAString();
              colorshow._value_ = colorshow.value;
              fontCssT.value = CONST.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST.fontCSS, defCon.values, fontCssT, submitButton);
              fontExT.value = CONST.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST.fontEx, defCon.values, fontExT, submitButton);
              loadPreview(defCon.preview);
              setAutoZoomFontSize(`#${defCon.id.rndId}`, defCon.tZoom);
            }
            frDialog = null;
          });

          qS(`#${defCon.id.submit} .${defCon.class.submit}`).addEventListener("click", async function () {
            const fontlists = fontSet().fsearchList(`${defCon.id.fontName}`);
            const fontselect = fontlists.length > 0 ? addSingleQuoteToArray(fontlists) : CONST.fontSelect;
            const fontface = ffaceT.checked;
            const smooth = smoothT.checked;
            const prefzoom = isFontsize ? (/^[0-1](\.[0-9]{1,3})?$/.test(zoom.value) ? zoom.value : defValue.fontSize) : 1;
            const fzoom = prefzoom < 0.8 ? 0.8 : prefzoom > 1.5 ? 1.5 : prefzoom;
            const fstroke = /^[0-1](\.[0-9]{1,3})?$/.test(stroke.value) ? stroke.value : stroke.value === "OFF" ? 0 : defValue.fontStroke;
            const fshadow = /^[0-8](\.[0-9]{1,2})?$/.test(shadows.value) ? shadows.value : shadows.value === "OFF" ? 0 : defValue.fontShadow;
            const pickedcolor = colorshow.value;
            const fscolor = colorReg.test(pickedcolor) ? (pickedcolor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : pickedcolor) : defValue.shadowColor;
            const fcss = fontCssT.value;
            const cssfun = fcss ? fcss.replace(/"|`/g, "'") : defValue.fontCSS;
            const fex = fontExT.value;
            const fontex = fex ? fex.replace(/"|`/g, "'") : "";
            if (defCon.isPreview && this.getAttribute("v-Preview")) {
              try {
                const _bodyZoom = isFontsize ? (fzoom >= 0.8 && fzoom <= 1.5 && fzoom !== 1 ? funcFontsize(fzoom) : ``) : ``;
                const _shadow = fshadow > 0 && fshadow <= 8 ? overlayColor(fshadow, fscolor) : ``;
                const _stroke = fstroke > 0 && fstroke <= 1.0 ? `-webkit-text-stroke:${fstroke}px currentcolor;` : ``;
                const _smoothing = smooth ? funcSmooth() : ``;
                const _fontfamily = fontface ? `font-family:${fontselect};` : ``;
                const _prefont = fontselect.split(",")[0];
                const _refont = _prefont.replace(/"|'/g, "");
                const _fontfaces = fontface ? (_refont.length ? funcFontface(_refont) : ``) : ``;
                let _codeFont = "";
                const _exclude = fontex ? `${filterHtmlToText(fontex)}{font-family:inherit;-webkit-text-stroke:initial!important;text-shadow:none!important}` : ``;
                if (fontex) {
                  _codeFont = funcCodefont(fontex, fontface, _prefont);
                }
                const _tshadow = `${_fontfaces}${_bodyZoom}`.concat(
                  `${filterHtmlToText(cssfun)}{${_fontfamily}${_shadow}${_stroke}${_smoothing}${textrender}}`,
                  `${_codeFont}${_exclude}${fixStroke}`
                );
                const __tshadow = `@charset "UTF-8";${_tshadow}`;
                defCon.tZoom = fzoom;
                this.innerText = "\u4fdd\u5b58";
                this.removeAttribute("style");
                this.removeAttribute("v-Preview");
                loadPreview(defCon.isPreview, __tshadow, false);
                await getCurrentFontName(fontface, _refont, defautlFont);
                setAutoZoomFontSize(`#${defCon.id.rndId}`, fzoom);
                await correctBoldErrorByStroke(fstroke);
              } catch (e) {
                defCon.errors.push(`[submitPreview]: ${e}`);
                reportErrorToAuthor(defCon.errors);
                error("\u27A4 submitPreview:", e);
              }
            } else {
              try {
                let frDialog = new FrDialogBox({
                  trueButtonText: "保存到全局数据",
                  falseButtonText: "保存到网站数据",
                  neutralButtonText: "取 消",
                  messageText: `<p style="color:darkgreen;font-weight:900">保存到全局数据：</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p style="color:darkred;font-weight:900">保存到当前网站数据：<span id="${defCon.id.seed}_a_w_d_l_">[<span style="font-size:12px!important;font-weight:normal;padding:0 2px;margin:0;cursor:pointer;color:#3e3e3e">全部数据列表</span>]</span></p><p style="min-height:22px"><span title="保存到网站数据会自动覆盖之前的数据" style="word-break:break-all;cursor:help;color:indigo" id="${defCon.id.seed}_c_w_d_">为 ${curHostName} 保存独立的设置数据。</span>`,
                  titleText: "保存设置数据",
                });
                domains = await GMgetValue("_domains_fonts_set_");
                domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : DEFAULT_ARRAY;
                const _awdl = qS(`#${defCon.id.seed}_a_w_d_l_`);
                if (_awdl) {
                  if (domainValue.length > 0) {
                    _awdl.style.cssText += "display:line-block";
                  } else {
                    _awdl.style.cssText += "display:none";
                  }
                  _awdl.addEventListener("click", async () => {
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    manageDomainsList();
                  });
                }
                domainValueIndex = updateDomainsIndex(domainValue);
                if (domainValueIndex !== undefined && qS(`#${defCon.id.seed}_c_w_d_`)) {
                  const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValue[domainValueIndex].fontDate));
                  qS(`#${defCon.id.seed}_c_w_d_`).innerHTML = String(
                    `<p style="height:30px;display:flex;align-items:center"><span style="color:indigo"><strong>上次保存：</strong>${fontDate} </span><button id="${defCon.id.seed}_c_w_d_d_" style="box-sizing:border-box;padding:3px 5px;margin-left:15px;cursor:pointer;color:#333;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;height:max-content;min-height:30px;background-color:#eee;letter-spacing:normal" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                  );
                  qS(`#${defCon.id.seed}_c_w_d_d_`).addEventListener("click", async () => {
                    domainValue.splice(domainValueIndex, 1);
                    GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                    cache.remove("_fontlist_");
                    closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                    let frDialog = new FrDialogBox({
                      trueButtonText: "感谢使用",
                      messageText: `<p style="color:darkred">时间戳 ${fontDate} 的数据已成功删除！</p><p>当前页面将在您确认后自动刷新。</p>`,
                      titleText: "个性化数据删除",
                    });
                    closeConfigurePage(true);
                    if (await frDialog.respond()) {
                      closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                      location.reload();
                    }
                    frDialog = null;
                  });
                }
                defCon.fontlistchanged = fontselect.split(",")[0] !== CONST.fontSelect.split(",")[0];
                if (await frDialog.respond()) {
                  saveData("_fonts_set_", {
                    fontSelect: filterHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtmlToText(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtmlToText(cssfun),
                    fontEx: filterHtmlToText(fontex),
                  });
                  defCon.successId = true;
                } else {
                  const _savedata_ = {
                    domain: curHostName,
                    fontDate: Date.now(),
                    fontSelect: filterHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSize: Number(fzoom),
                    fontStroke: Number(fstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: filterHtmlToText(fscolor),
                    fontSmooth: Boolean(smooth),
                    fontCSS: filterHtmlToText(cssfun),
                    fontEx: filterHtmlToText(fontex),
                  };
                  domains = await GMgetValue("_domains_fonts_set_");
                  domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : DEFAULT_ARRAY;
                  domainValueIndex = updateDomainsIndex(domainValue);
                  if (domainValueIndex !== undefined) {
                    domainValue.splice(domainValueIndex, 1, _savedata_);
                  } else {
                    domainValue.push(_savedata_);
                  }
                  if (domainValue.length <= maxPersonalSites || domainValueIndex !== undefined) {
                    GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                    defCon.successId = true;
                  } else {
                    let frDialog = new FrDialogBox({
                      trueButtonText: "依然保存",
                      falseButtonText: "管理列表",
                      neutralButtonText: "我放弃",
                      messageText: `<p style="color:darkgreen">您已经保存超过<span style="font-size:20px;font-weight:700;font-style:italic;color:crimson">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p style="color:crimson">您确认要继续保存吗？</p>`,
                      titleText: "数据过多的提示",
                    });
                    if (await frDialog.respond()) {
                      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
                      defCon.successId = true;
                    } else {
                      manageDomainsList();
                      defCon.successId = false;
                    }
                    frDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                defCon.errors.push(`[saveData]: ${e}`);
                reportErrorToAuthor(defCon.errors, true);
                error("\u27A4 saveData:", e);
                defCon.successId = false;
              } finally {
                if (defCon.successId) {
                  closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                  let frDialog = new FrDialogBox({
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

          loadBackupData(isBackupFunction, DEFAULT_ARRAY);

          qS(`#${defCon.id.submit} .${defCon.class.cancel}`).addEventListener("click", () => {
            closeConfigurePage(false);
          });
        }
      } catch (e) {
        defCon.errors.push(`[operateConfigure]: ${e}`);
        error("\u27A4 operateConfigure:", e);
      }
    }

    function closeConfigurePage(isReload) {
      if (qS(`#${defCon.id.container}`)) {
        qS(`#${defCon.id.container}`).style.opacity = 0;
        sleep(500).then(() => {
          qS(`#${defCon.id.rndId}`) && qS(`#${defCon.id.rndId}`).remove();
        });
        qS("fr-colorpicker") && qS("fr-colorpicker").remove();
        if (getNavigator.type("core").Gecko && defCon.configurePage) {
          document.removeEventListener("scroll", defCon.configurePage);
          delete defCon.configurePage;
        }
        if (!isReload) {
          if (defCon.preview) {
            loadPreview(defCon.isPreview);
            defCon.tZoom = CONST.fontSize;
          }
          closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
        }
      }
    }

    async function getCurrentFontName(_isfontface_, refont, def) {
      const inputFont = qS(`#${defCon.id.fontList} .${defCon.class.selectFontId} input`);
      reFontFace = def;
      defCon.curFont = def;
      if (_isfontface_) {
        const cusFontList = await GMgetValue("_Custom_fontlist_");
        const cusFontCheck = cusFontList ? JSON.parse(defCon.decrypt(cusFontList)) : DEFAULT_ARRAY;
        fontCheck = getUniqueValues([...fontCheck, ...cusFontCheck]);
        for (let i = 0; i < fontCheck.length; i++) {
          if (fontCheck[i].en === refont || convertToUnicode(fontCheck[i].ch) === refont) {
            defCon.curFont = refont.includes("\\") ? "" : " (" + fontCheck[i].en + ")";
            reFontFace = fontCheck[i].ch + defCon.curFont;
            defCon.curFont = fontCheck[i].ch;
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
            let frDialog = new FrDialogBox({
              trueButtonText: "备 份",
              falseButtonText: "还 原",
              neutralButtonText: "取 消",
              messageText: `<p style="color:darkgreen;font-weight:900">备份到本地文件：</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p style="color:darkred;font-weight:900">从本地文件还原：</p><p><span style="cursor:pointer;color:indigo" id="${defCon.id.tfiles}">\ud83d\udc49\u0020[点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${defCon.id.files}"/></p>`,
              titleText: "备份与还原数据",
            });
            const tfs = qS(`#${defCon.id.tfiles}`);
            const fs = qS(`#${defCon.id.files}`);
            if (tfs && fs) {
              tfs.addEventListener("click", () => {
                fs.click();
              });
              fs.addEventListener("change", () => {
                tfs.innerHTML = `<em style="word-break:break-all;color:indigo;font-size:12px!important">${fs.files[0].name}</em><span style="color:crimson">\u0020\ud83d\udc49\u0020[重新选择]</span>`;
              });
            }
            if (await frDialog.respond()) {
              const _fonts_set_ = await GMgetValue("_fonts_set_");
              const _Exclude_site_ = await GMgetValue("_Exclude_site_");
              const _domains_fonts_set_ = await GMgetValue("_domains_fonts_set_");
              const _domains_fonts_set__ = _domains_fonts_set_ || defCon.encrypt(JSON.stringify(def));
              const _Custom_fontlist_ = await GMgetValue("_Custom_fontlist_");
              const _Custom_fontlist__ = _Custom_fontlist_ || defCon.encrypt(JSON.stringify(def));
              const _configure_ = await GMgetValue("_configure_");
              const db_R = "QXV0aGVyJUUyJTlBJUExRjl5NG5nJUYwJTlGJTkyJTk2JTQw".concat(defCon.encrypt(defCon.scriptName));
              const db_0 = defCon.encrypt(new Date());
              const db_1 = _fonts_set_;
              const db_2 = _Exclude_site_;
              const db_3 = _domains_fonts_set__;
              const db_4 = _Custom_fontlist__;
              const db_5 = _configure_;
              const db = { db_R, db_0, db_1, db_2, db_3, db_4, db_5 };
              const timeStamp = setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date());
              const via = `${getNavigator.type("browser").toLowerCase()}`;
              dataDownload(`FontRendering-backup-${via}-${timeStamp}.sqlitedb`, defCon.sqliteDB(JSON.stringify(db), 22, ROOT_SECRET_KEY));
              let frDialog = new FrDialogBox({
                trueButtonText: "确 定",
                messageText: `<p style="color:darkgreen">备份数据已归档，备份文件导出下载中……</p><p style="word-break:break-all;color:darkred;font-style:italic;font-size:12px!important">FontRendering-backup-${via}-${timeStamp}.sqlitedb</p>`,
                titleText: "数据备份",
              });
              if (await frDialog.respond()) {
                frDialog = null;
              }
            } else {
              try {
                const thatFile = fs.files[0];
                debug(`\u27A4 loadBackupData:`, thatFile.name, thatFile.size);
                let reader = new FileReader();
                reader.readAsText(thatFile);
                reader.onload = async function () {
                  try {
                    const _file = defCon.decrypt(this.result);
                    const _rs = JSON.parse(defCon.sqliteDB(_file, null, ROOT_SECRET_KEY));
                    const _data_R = defCon.decrypt(_rs.db_R);
                    const _data_0 = defCon.decrypt(_rs.db_0);
                    const _data_1 = JSON.parse(defCon.decrypt(_rs.db_1));
                    const _data_2 = JSON.parse(defCon.decrypt(_rs.db_2));
                    const _data_3 = _rs.db_3 ? JSON.parse(defCon.decrypt(_rs.db_3)) : def;
                    const _data_4 = _rs.db_4 ? JSON.parse(defCon.decrypt(_rs.db_4)) : def;
                    const _data_5 = _rs.db_5 ? JSON.parse(defCon.decrypt(_rs.db_5)) : undefined;
                    if (!isNaN(Date.parse(_data_0)) && new Date(_data_0) <= new Date() && _data_R.includes(defCon.scriptAuthor)) {
                      GMsetValue("_fonts_set_", defCon.encrypt(JSON.stringify(_data_1)));
                      GMsetValue("_Exclude_site_", defCon.encrypt(JSON.stringify(_data_2)));
                      GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(_data_3)));
                      GMsetValue("_Custom_fontlist_", defCon.encrypt(JSON.stringify(_data_4)));
                      if (_data_5) {
                        _data_5.curVersion = defCon.curVersion;
                        _data_5.rebuild = undefined;
                        GMsetValue("_configure_", defCon.encrypt(JSON.stringify(_data_5)));
                      } else {
                        debug("\u27A4 no configure data");
                      }
                      let frDialog = new FrDialogBox({
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
                    let frDialog = new FrDialogBox({
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
                let frDialog = new FrDialogBox({
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
            defCon.errors.push(`[loadBackupData]: ${e}`);
            reportErrorToAuthor(defCon.errors);
            error("\u27A4 loadBackupData:", e);
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
        if (linstener.id === defCon.id.shadow) {
          qS(`#${defCon.id.shadowColor}`).style.display = target.value === "OFF" ? "none" : "flex";
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
                deBounce(setEffectIntoSubmit, 360, t.id)(newVal, e, v, t, d, g);
              },
            });
          }
        }
      } catch (err) {
        defCon.errors.push(`[saveChangeStatus]: ${err}`);
        error("\u27A4 saveChangeStatus:", err);
      }
    }

    function setEffectIntoSubmit(value, e, v, t, d, h = false) {
      try {
        const _thatOffValue = h ? 1 : 0;
        const _value =
          t.attributes.v !== undefined
            ? value === "OFF"
              ? _thatOffValue
              : Number(value)
            : typeof value === "string" && value.toLowerCase() === "currentcolor"
            ? "#FFFFFFFF"
            : value;
        if (_value !== e) {
          !v.includes(t.id) ? v.push(t.id) : debug(`\u27A4 ID["${t.id}"] already exists`);
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
        defCon.values = v;
        if (defCon.values.length > 0) {
          debug("\u27A4 Changed Elements", defCon.values);
          if (!d.classList.contains(`${defCon.class.anim}`)) {
            d.classList.add(`${defCon.class.anim}`);
          }
          if (!defCon.values.includes(t.id) && defCon.isPreview) {
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
            loadPreview(defCon.preview);
            defCon.tZoom = CONST.fontSize;
            setAutoZoomFontSize(`#${defCon.id.rndId}`, CONST.fontSize);
          }
        }
      } catch (err) {
        error("\u27A4 setEffectIntoSubmit:", err);
      }
    }

    async function manageDomainsList(_temp_ = [], Contents = "") {
      let domains, domainValue, domainValueIndex;
      try {
        domains = await GMgetValue("_domains_fonts_set_");
        domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : DEFAULT_ARRAY;
        const _data_search_ =
          domainValue.length > 6
            ? `<p style="display:flex;justify-content:left;align-items:center"><input id="${defCon.id.seed}_d_s_" style="box-sizing:content-box;width:57%;height:22px;font:normal 16px/150% monospace,Consolas,system-ui,-apple-system,BlinkMacSystemFont,serif!important;border:2px solid #777;border-radius:4px;margin:4px 6px;padding:2px 6px"><button id="${defCon.id.seed}_d_s_s_" style="box-sizing:border-box;background:#eee;color:#333;vertical-align:initial;padding:3px 10px;margin:0;cursor:pointer;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;height:max-content;min-width:60px;min-height:30px;letter-spacing:normal;text-align:center">查 询</button><button id="${defCon.id.seed}_d_s_c_" style="box-sizing:border-box;background:#eee;color:#333;vertical-align:initial;margin:0 0 0 4px;padding:3px 10px;cursor:pointer;font-size:12px!important;font-weight:normal;border:1px solid #777;border-radius:4px;width:max-content;height:max-content;min-width:60px;min-height:30px;letter-spacing:normal;text-align:center">清 除</button></p>`
            : ``;
        for (let i = 0; i < domainValue.length; i++) {
          Contents += String(
            `<li id="${defCon.id.seed}_d_d_l_${i}"
              style="margin:0;padding:5px;list-style:none;user-select:text!important;font:normal 400 14px/150% 'Microsoft YaHei UI',system-ui,-apple-system,sans-serif!important;color:#555;display:flex;justify-content:space-between;white-space:nowrap;max-width:364px;overflow:hidden">
              <span>
                [<a id="${defCon.id.seed}_d_d_l_s_${i}" style="display:inline;padding:2px;cursor:pointer;color:darkred;background:transparent;font-size:14px!important">删除</a>]
                <span>${i + 1 > 9 ? i + 1 : "0".concat(i + 1)}.</span>
              </span>
              <span style="font-weight:900;margin-left:5px">${filterHtmlToText(domainValue[i].domain)}</span>
              <span style="margin:0 5px">${setDateFormat("yyyy/MM/dd HH:mm:ss", new Date(domainValue[i].fontDate))}</span>
            </li>`
          );
        }
        let frDialog = new FrDialogBox({
          trueButtonText: "确认操作，保存数据",
          neutralButtonText: "取 消",
          messageText: `<p style="font-size:14px!important;text-indent:6px!important;color:darkred">请谨慎操作，保存后生效，已删除的数据将不可恢复！</p>${_data_search_}<ul id="${defCon.id.seed}_d_d_" style="margin:0!important;padding:0!important;list-style:none!important;max-height:190px;overflow-x:hidden">${Contents}</ul>`,
          titleText: "网站个性化设置数据列表：",
        });
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
                  const _rows = Number(_sTxt.anchorNode.parentNode.parentNode.id.replace(`${defCon.id.seed}_d_d_l_`, "")) || 0;
                  const _offsetHeight = Number(_sTxt.anchorNode.parentNode.parentNode.offsetHeight) || 0;
                  qS(`#${defCon.id.seed}_d_d_`).scrollTop = _rows * _offsetHeight;
                }
              }
            }
          });
        }
        const items = qA(`#${defCon.id.seed}_d_d_ li span>a[id^="${defCon.id.seed}_d_d_l_s_"]`);
        for (let j = 0; j < items.length; j++) {
          items[j].addEventListener(
            "click",
            function (a, b) {
              if (!this.getAttribute("data-del")) {
                const _list_Id_ = Number(this.id.replace(`${defCon.id.seed}_d_d_l_s_`, "")) || 0;
                a.push(b[_list_Id_].domain);
                this.setAttribute("data-del", b[_list_Id_].domain);
                this.innerHTML = "恢复";
                this.style.cssText += "color:darkgreen";
                this.parentNode.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
                this.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
              } else {
                a.splice(a.indexOf(this.getAttribute("data-del")), 1);
                this.removeAttribute("data-del");
                this.innerHTML = "删除";
                this.style.cssText += "color:darkred";
                this.parentNode.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
                this.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
              }
            }.bind(items[j], _temp_, domainValue)
          );
        }
        if (await frDialog.respond()) {
          for (let l = _temp_.length - 1; l >= 0; l--) {
            domains = await GMgetValue("_domains_fonts_set_");
            domainValue = domains ? JSON.parse(defCon.decrypt(domains)) : DEFAULT_ARRAY;
            domainValueIndex = updateDomainsIndex(domainValue, _temp_[l]);
            domainValue.splice(domainValueIndex, 1);
            GMsetValue("_domains_fonts_set_", defCon.encrypt(JSON.stringify(domainValue)));
            if (_temp_[l] === curHostName) {
              defCon.equal = true;
              continue;
            }
          }
          let frDialog = new FrDialogBox({
            trueButtonText: "感谢使用",
            messageText: String(
              `<p style="color:darkgreen">网站个性化设置数据已保存！${defCon.equal ? "</p><p>当前页面将在您确认后自动刷新。" : "</p><p>确认后您可以在当前页面继续其他操作。"}</p>`
            ),
            titleText: "数据保存完毕",
          });
          if (await frDialog.respond()) {
            closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
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
        defCon.errors.push(`[manageDomainsList]: ${e}`);
        reportErrorToAuthor(defCon.errors);
        error("\u27A4 manageDomainsList:", e);
      }
    }

    async function reportErrorToAuthor(e, show = IS_OPEN_DEBUG, errors = "") {
      if (show) {
        closeConfigurePage(false);
        sleep(1e3).then(async () => {
          try {
            if (!document.querySelector("fr-dialogbox[error='true']")) {
              const br = e.length > 1 ? "\u3000<br/>" : "";
              for (let i in e) {
                errors += e[i] + br;
              }
              let frDialog = new FrDialogBox({
                trueButtonText: "反馈问题",
                messageText: String(
                  `<p style="font-size:14px!important;color:crimson">脚本在运行过程中发生了重大异常或错误，请及时告知作者，感谢您的反馈！以下信息会自动保存至您的剪切板：</p>
                  <p><ul id="${defCon.id.seed}_copy_to_author" style="list-style-position:outside;margin:0!important;padding:0!important;max-height:300px;overflow-y:auto">
                    <li>浏览器信息：${getNavigator.type()}\u3000</li>
                    <li>脚本扩展信息：${handlerInfo} ${GMversion}\u3000</li>
                    <li>脚本版本信息：${defCon.curVersion}\u3000</li>
                    <li>当前访问域名：${curHostName}\u3000</li>
                    <li>错误信息：<span style="color:tan">${errors}</span></li>
                  </ul></p>`
                ),
                titleText: defCon.scriptName + "错误报告",
              });
              frDialog.container.setAttribute("error", true);
              const copyText = qS(`#${defCon.id.seed}_copy_to_author`).innerText.replace(/\u3000/g, "\n");
              defCon.errors.length = 0;
              if (await frDialog.respond()) {
                copyToClipboard(copyText);
                closeAllFrDialogBox(`#${defCon.id.dialogbox}`);
                GMopenInTab(defCon.feedback, defCon.options);
              }
              frDialog = null;
            }
          } catch (e) {
            error("\u27A4 reportError:", e);
          }
        });
      }
    }

    function setDateFormat(fmt, date) {
      let ret;
      const opt = {
        "y+": date.getFullYear().toString(),
        "M+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "m+": date.getMinutes().toString(),
        "s+": date.getSeconds().toString(),
        "S+": date.getMilliseconds().toString(),
      };
      for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
          fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
        }
      }
      return fmt;
    }

    function setAutoZoomFontSize(target, zoom, curZoom) {
      try {
        if (getNavigator.type("core").Gecko) {
          curZoom = zoom || 1;
          if (curZoom !== 1) {
            qS(target).style.transformOrigin = "left top";
            qS(target).style.transform = "scale(" + 1 / curZoom + ")";
            qS(target).style.width = defCon.elCompat.clientWidth + "px";
            qS(target).style.height = defCon.elCompat.clientHeight + "px";
            scrollInsteadFixed(qS(target), curZoom, "configurePage");
          } else {
            if (defCon.configurePage) {
              document.removeEventListener("scroll", defCon.configurePage);
              delete defCon.configurePage;
            }
            qS(target).removeAttribute("style");
          }
        } else {
          curZoom = Number(window.getComputedStyle(document.body, null).getPropertyValue("zoom")) || zoom || 1;
          if (curZoom !== 1) {
            qS(target).style.cssText += "zoom:" + Number(1 / curZoom);
          } else {
            qS(target).removeAttribute("style");
          }
        }
      } catch (e) {
        defCon.errors.push(`[setAutoZoomFontSize]: ${e}`);
        error("\u27A4 setAutoZoomFontSize:", e);
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

    function confirmIfValueChange(target, info) {
      target.addEventListener("change", function () {
        if (this.checked) {
          const rs = confirm(info);
          this.checked = !!rs;
        }
      });
    }

    function convertFullToHalf(str, tmp = "") {
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
      html = html.replace(/expression|\\u|`|{|}/gi, "");
      const _tmp = document.createElement("div");
      _tmp.innerHTML = html;
      html = _tmp.textContent.trim() || _tmp.innerText.trim() || "";
      while (html.substr(html.length - 1, 1) === ",") {
        html = html.substr(0, html.length - 1).trim();
      }
      return html;
    }

    function addSingleQuoteToArray(arr, hasYH = false, returnStr = "") {
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          if (item === "Microsoft YaHei") {
            hasYH = true;
          }
          returnStr += `'${item}',`;
        });
        let checkFont = new SupportFontFamily();
        if (hasYH || !checkFont.detect("Microsoft YaHei")) {
          returnStr += defValue.fontSelect.replace(`'Microsoft YaHei',`, ``);
        } else {
          returnStr += defValue.fontSelect;
        }
        checkFont = null;
      } else {
        returnStr = defValue.fontSelect;
      }
      return returnStr;
    }

    function saveData(key, { ...Options }) {
      const obj = { ...Options };
      try {
        GMsetValue(key, defCon.encrypt(JSON.stringify(obj)));
      } catch (e) {
        error("\u27A4 saveData:", e);
      }
    }
  })();
})();
