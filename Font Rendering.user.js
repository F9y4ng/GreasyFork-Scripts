// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字體渲染（自用腳本）
// @name:ja            フォントレンダリング（カスタマイズ）
// @name:en            Font Rendering (Customized)
// @version            2023.04.08.1
// @author             F9y4ng
// @description        无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑字体”，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的Greasemonkey脚本和浏览器扩展。
// @description:zh-CN  无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑字体”，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的Greasemonkey脚本和浏览器扩展。
// @description:zh-TW  無需安裝MacType，優化瀏覽器字體渲染效果，讓每個頁面的字體變得更有質感。默認使用“微軟雅黑字體”，也可根據喜好自定義其他字體使用。腳本針對瀏覽器字體渲染提供了字體重寫、字體平滑、字體縮放、字體描邊、字體陰影、對特殊樣式元素的過濾和許可、自定義等寬字體等高級功能。腳本支持全局渲染與個性化渲染功能，可通過「單擊腳本管理器圖標」或「使用快捷鍵」呼出配置界面進行參數配置。腳本已兼容絕大部分主流瀏覽器及主流腳本管理器，且兼容常用的Greasemonkey腳本和瀏覽器擴展。
// @description:ja     MacTypeを実装することなく，ブラウザフォントレンダリング効果を最適化し，ページごとのフォントをより質感にする.。デフォルトでは“Microsoft雅黒フォント”を使用しており、好みに応じて他のフォントをカスタマイズして使用することもできます。スクリプトは，ブラウザフォントレンダリングに対して，フォント書き換え，フォント平滑化，フォントスケーリング，フォント描画エッジ，フォント陰影，特殊パターン要素のフィルタリングと許可，カスタマイズなどの広いフォントなどの高度な機能を提供している.。スクリプトは、グローバルレンダリングと個人化レンダリング機能を提供し、“スクリプトマネージャアイコンをクリックする”または“ショートカットキーを使用して”構成インタフェースを呼び出すことでパラメータ構成を行うことができます。スクリプトは，ほとんどの主流ブラウザと主流スクリプトマネージャに対応しており，通常のGreasemonkeyスクリプトやブラウザ拡張に対応している.
// @description:en     Without MacType, improve browser displaying more textured. "Microsoft Yahei" is used by default. For browser displaying, the script provides advanced features such as font rewriting, smoothing, scaling, stroke, shadow, special style elements, custom monospaced, etc. It can configure by "click Script Manager icon" or "use hotkeys" to call out the setup. The script is already compatible with major browsers and userscript managers, also commonly used Greasemonkey scripts and browser extensions.
// @namespace          https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon               https://img.icons8.com/stickers/48/font-style-formatting.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require            https://greasyfork.org/scripts/437214/code/frColorPicker.js?version=1167998#sha256-h43kKiwkTzM1MeblM1cGzIUn4NjUxMlGdJgxrhSbyLE=
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
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @license            GPL-3.0-only
// @create             2020-11-24
// @copyright          2020-2023, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

(function (w) {
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
  const GMunsafeWindow = gmSelector("unsafeWindow");
  const GMcontextMode = gmSelector("contextMode");

  /* INITIALIZE_DEBUG_FUNCTIONS */

  const IS_DEBUG = setDebuggerMode() || IS_OPEN_DEBUG;

  const DEBUG = IS_DEBUG ? __console.bind(console, "log") : () => {};
  const INFO = IS_DEBUG ? __console.bind(console, "info") : () => {};
  const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
  const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

  /* INITIALIZE_COMMON_CONSTANTS */

  const def = {
    array: { exps: [], props: { Element: [], HTMLElement: [] }, values: [], scaleValueMatrix: [], frContainer: ["fr-configure", "fr-dialogbox"] },
    count: { domainCount: 0, clickTimer: 0 },
    const: {
      seed: generateRandomString(6, "mix"),
      raf: `__FR_rAF_${generateRandomString(24, "attr")}`,
      caf: `__FR_cAF_${generateRandomString(24, "attr")}`,
      boldAttrName: `fr-fix-${generateRandomString(8, "attr")}`,
      cssAttrName: `fr-css-${generateRandomString(8, "attr")}`,
      frameAttrName: `fr-frames-${generateRandomString(8, "attr")}`,
      defaultFont: "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53",
      gfHost: decrypt("aHR0cHMlM0ElMkYlMkZncmVhc3lmb3JrLm9yZyUyRnNjcmlwdHMlMkY0MTY2ODg="),
      fontlistImg: decrypt("aHR0cHMlM0ElMkYlMkZzMS5heDF4LmNvbSUyRjIwMjIlMkYwNCUyRjAyJTJGcW9SZldkLmdpZg=="),
      loadImg: decrypt("aHR0cHMlM0ElMkYlMkZpbWcuemNvb2wuY24lMkZjb21tdW5pdHklMkYwMzhkZGU0NThmOWE4NzRhODAxMjE2MGY3NDE3ZjZlLmdpZg=="),
      exQueryString: `html,head,head *,base,meta,style,link,script,noscript,iframe,img,br,hr,wbr,map,area,meter,canvas,svg,svg *,picture,form,object,param,embed,audio,video,source,track,progress,fr-colorpicker,fr-colorpicker *,fr-configure,fr-configure *,fr-dialogbox,fr-dialogbox *,gb-notice,gb-notice *`,
    },
    variable: {
      prototype: {
        getScreenCTM: SVGGraphicsElement.prototype.getScreenCTM,
        getClientRects: Element.prototype.getClientRects,
        getBoundingClientRect: Element.prototype.getBoundingClientRect,
      },
      lisence: generateRandomString(64, "attr"),
      feedback: getMetaValue("supportURL") ?? "",
      curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2023.04.08.0",
      scriptAuthor: getMetaValue("author") ?? GMinfo.script.author ?? "F9y4ng",
      scriptName: getMetaValue(`name:${navigator.language || "zh-CN"}`) ?? GMinfo.script.name ?? "Font Rendering",
    },
    dialog: {
      alert: alert.bind(w),
      prompt: prompt.bind(w),
      confirm: confirm.bind(w),
    },
    class: {
      guide: generateRandomString(6, "mix"),
      title: generateRandomString(8, "char"),
      rotation: generateRandomString(7, "char"),
      emoji: generateRandomString(7, "mix"),
      main: generateRandomString(8, "char"),
      fontList: generateRandomString(8, "char"),
      spanlabel: generateRandomString(6, "mix"),
      label: generateRandomString(6, "mix"),
      placeholder: generateRandomString(6, "mix"),
      checkbox: generateRandomString(8, "char"),
      flex: generateRandomString(9, "char"),
      tooltip: generateRandomString(8, "char"),
      tooltiptext: generateRandomString(9, "char"),
      ps1: generateRandomString(6, "mix"),
      ps2: generateRandomString(6, "mix"),
      ps3: generateRandomString(6, "mix"),
      ps4: generateRandomString(6, "mix"),
      ps5: generateRandomString(6, "mix"),
      slider: generateRandomString(8, "char"),
      frColorPicker: generateRandomString(9, "char"),
      readonly: generateRandomString(8, "char"),
      notreadonly: generateRandomString(8, "char"),
      reset: generateRandomString(7, "mix"),
      cancel: generateRandomString(7, "mix"),
      submit: generateRandomString(7, "mix"),
      selector: generateRandomString(9, "char"),
      selectFontId: generateRandomString(8, "char"),
      close: generateRandomString(7, "char"),
      db: generateRandomString(10, "char"),
      dbbc: generateRandomString(9, "char"),
      dbb: generateRandomString(8, "char"),
      dbm: generateRandomString(8, "char"),
      dbt: generateRandomString(8, "char"),
      dbbt: generateRandomString(7, "mix"),
      dbbf: generateRandomString(7, "mix"),
      dbbn: generateRandomString(7, "mix"),
      switch: generateRandomString(6, "mix"),
      anim: generateRandomString(6, "mix"),
      range: generateRandomString(10, "char"),
      rangeProgress: generateRandomString(9, "mix"),
    },
    id: {
      rndId: generateRandomString(12, "char"),
      rndStyle: generateRandomString(12, "char"),
      dialogbox: generateRandomString(10, "char"),
      container: generateRandomString(10, "char"),
      field: generateRandomString(10, "char"),
      fontList: generateRandomString(8, "char"),
      fontFace: generateRandomString(8, "char"),
      fontSmooth: generateRandomString(8, "char"),
      fontStroke: generateRandomString(8, "char"),
      fontShadow: generateRandomString(8, "char"),
      shadowColor: generateRandomString(8, "char"),
      fontCss: generateRandomString(8, "char"),
      fontEx: generateRandomString(8, "char"),
      submit: generateRandomString(8, "char"),
      fface: generateRandomString(8, "char"),
      smooth: generateRandomString(8, "char"),
      fontSize: generateRandomString(8, "char"),
      fontScale: generateRandomString(8, "char"),
      scaleSize: generateRandomString(8, "char"),
      strokeSize: generateRandomString(8, "mix"),
      stroke: generateRandomString(8, "char"),
      fstroke: generateRandomString(8, "mix"),
      fixStroke: generateRandomString(8, "mix"),
      shadowSize: generateRandomString(8, "mix"),
      shadow: generateRandomString(8, "char"),
      color: generateRandomString(8, "char"),
      cssinclued: generateRandomString(8, "char"),
      cssexclude: generateRandomString(8, "char"),
      mono: generateRandomString(8, "char"),
      selector: generateRandomString(8, "char"),
      cleaner: generateRandomString(6, "char"),
      fonttooltip: generateRandomString(9, "char"),
      fontName: generateRandomString(8, "char"),
      cSwitch: generateRandomString(6, "mix"),
      eSwitch: generateRandomString(6, "mix"),
      backup: generateRandomString(8, "char"),
      files: generateRandomString(6, "char"),
      tfiles: generateRandomString(7, "mix"),
      db: generateRandomString(6, "char"),
      ct: generateRandomString(6, "char"),
      isclosetip: generateRandomString(7, "mix"),
      bk: generateRandomString(6, "char"),
      isbackup: generateRandomString(7, "mix"),
      pv: generateRandomString(6, "char"),
      ispreview: generateRandomString(7, "mix"),
      fs: generateRandomString(6, "char"),
      isfontsize: generateRandomString(7, "mix"),
      fvp: generateRandomString(6, "char"),
      isfixviewport: generateRandomString(7, "mix"),
      hk: generateRandomString(6, "char"),
      ishotkey: generateRandomString(7, "mix"),
      mps: generateRandomString(6, "char"),
      maxps: generateRandomString(7, "mix"),
      gc: generateRandomString(6, "char"),
      globaldisable: generateRandomString(7, "char"),
      feedback: generateRandomString(7, "char"),
      flc: generateRandomString(6, "char"),
      flcid: generateRandomString(7, "mix"),
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
      unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : w,
      contextMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
    };
    return gmFunctions[rec] ?? (() => {});
  }

  function __console(act) {
    const __this = this?.console ?? this ?? console;
    const __arguments = [...arguments];
    const [argm = "", ...args] = __arguments.slice(1);
    switch (__arguments[0]) {
      case "log":
        __this[act](`%c\u27A4 %c${argm}`, "display:inline-block", "font-family:monospace", ...args);
        break;
      case "info":
        __this.log(`%c\u27A4 ${argm}`, "display:inline-block;padding:4px 0", ...args);
        break;
      case "error":
      case "warn":
        __this[act](`%c\ud83d\udea9 ${argm}`, "display:inline-block;font-family:monospace", ...args);
        break;
      case "count":
        __this[act](`\u27A4 ${argm}`);
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

  function aS(target) {
    return target.attachShadow({ mode: "open" });
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

  function unescape(input) {
    input = input?.toString() ?? "";
    if (input.search("%") === -1) return input;
    let output = "";
    const hexDigits = "0123456789ABCDEF";
    for (let i = 0, len = input.length; i < len; i++) {
      let char = input[i];
      if (char === "%") {
        if (
          i <= len - 6 &&
          input[i + 1] === "u" &&
          hexDigits.includes(input[i + 2]) &&
          hexDigits.includes(input[i + 3]) &&
          hexDigits.includes(input[i + 4]) &&
          hexDigits.includes(input[i + 5])
        ) {
          char = String.fromCharCode(parseInt(input.substring(i + 2, i + 7), 16));
          i += 5;
        } else if (i <= len - 3 && hexDigits.includes(input[i + 1]) && hexDigits.includes(input[i + 2])) {
          char = decodeURIComponent(input.substring(i, i + 3));
          i += 2;
        }
      }
      output += char;
    }
    return output;
  }

  function uniq(array) {
    if (!Array.isArray(array)) return [];
    return [...new Set(array)].filter(Boolean);
  }

  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
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

  function createTrustedTypePolicy() {
    const policy = { createHTML: string => string };
    if (!w.trustedTypes?.createPolicy) return policy;
    const currentHostName = location.hostname;
    const whiteList = new Set([
      { host: "teams.live.com", policy: "goog#html" },
      { host: "github.dev", policy: "safeInnerHtml" },
      { host: "vscode.dev", policy: "safeInnerHtml" },
    ]);
    let policyName = "fr#safeCreateHTML";
    for (const item of whiteList) {
      if (currentHostName.endsWith(item.host)) {
        policyName = item.policy;
        break;
      }
    }
    return w.trustedTypes.createPolicy(policyName, policy);
  }

  function getMainStyleElements({ currentScope, target } = {}) {
    return currentScope ? qS(`#${def.id.rndStyle}`, document.head) : qA("style", target || document.head).filter(item => item.attributes[0]?.name.startsWith("fr-css-"));
  }

  function checkRedundantScript(global) {
    const { isTop: CUR_WINDOW_TOP } = getLocationInfo();
    // PAGE_MODE
    const redundantScripts = global["fr-init-redundantscripts"];
    if (redundantScripts === true) {
      return scriptRedundancyWarning();
    }
    global["fr-init-redundantscripts"] = true;
    // CONTEXT_MODE
    try {
      if (GMcontextMode) {
        let redundantScriptsJSON = JSON.parse(sessionStorage.getItem("fr-init-redundantscripts"));
        if (redundantScriptsJSON?.check === true && redundantScriptsJSON?.lisence !== def.variable.lisence) {
          sessionStorage.removeItem("fr-init-redundantscripts");
          return scriptRedundancyWarning();
        }
        CUR_WINDOW_TOP &&
          __console("warn", `${def.variable.scriptName}警告：\r\n脚本的注入模式已设置为"content"，部分脚本功能将受限制，如框架页面内部分功能失效、字体缩放后无法全局修正坐标等。`);
      }
      sessionStorage.setItem("fr-init-redundantscripts", JSON.stringify({ check: true, lisence: def.variable.lisence }));
      w.addEventListener("beforeunload", () => sessionStorage.removeItem("fr-init-redundantscripts"));
    } catch (e) {
      ERROR("BLocking third-party cookies cause error:", CUR_WINDOW_TOP ? "" : "[FRAMES]", e.message);
    }
    return false;

    function scriptRedundancyWarning() {
      if (CUR_WINDOW_TOP) {
        __console("error", `\ud83d\udea9 [Redundant Scripts]:\r\n发现冗余安装的${def.variable.scriptName}，请访问 ${def.variable.feedback}/117 排查错误。`);
        GMregisterMenuCommand("\ufff8\ud83d\uded1 发现冗余脚本，点这里排查！", () => GMopenInTab(`${def.variable.feedback}/117`, false));
      }
      return true;
    }
  }

  function getNavigatorInfo() {
    const vmuad = (uad => {
      if (!uad) return;
      const archs = uad.arch?.split("-") ?? [];
      return {
        brands: [{ brand: capitalize(uad.browserName), version: uad.browserVersion }],
        platform: capitalize(uad.os),
        bitness: archs[1] ?? "unknown",
        architecture: archs[0] ?? "unknown",
        credit: GMinfo.scriptHandler,
      };
    })(GMinfo.platform);
    const tmuad = (uad => {
      if (!uad) return;
      uad.credit = GMinfo.scriptHandler;
      return uad;
    })(GMinfo.userAgentData);
    const uad = vmuad ?? tmuad ?? navigator.userAgentData;
    const trustcore = w.webkitRequestFileSystem ? "Blink" : !isNaN(parseFloat(w.mozInnerScreenX)) ? "Gecko" : w.GestureEvent ? "WebKit" : "Unknown";
    let core = "Unknown";
    let brand = "Unknown";
    let brandversion = "0.00";
    if (uad) {
      const os = capitalize(uad.platform);
      const brandMap = {
        IE: { core: "Trident", brand: "IE" },
        SAFARI: { core: "WebKit", brand: "Safari" },
        FIREFOX: { core: "Gecko", brand: "Firefox" },
        EDGE: { core: "Blink", brand: "Edge" },
        CHROME: { core: "Blink", brand: "Chrome" },
        OPERA: { core: "Blink", brand: "Opera" },
        BRAVE: { core: "Blink", brand: "Brave" },
        YANDEX: { core: "Blink", brand: "Yandex" },
        "MICROSOFT EDGE": { core: "Blink", brand: "Edge" },
        "GOOGLE CHROME": { core: "Blink", brand: "Chrome" },
      };
      uad.brands.some(b => {
        const reqBrand = b.brand.toUpperCase();
        const brandInfo = brandMap[reqBrand];
        if (brandInfo) {
          core = brandInfo.core;
          brand = brandInfo.brand;
          brandversion = b.version;
          return true;
        } else if (reqBrand === "CHROMIUM") {
          core = "Blink";
          brand = "Chromium";
          brandversion = b.version;
        }
      });
      return { core, brand, brandversion, os, trustcore, credit: uad.credit ?? null };
    } else {
      const ua = navigator.userAgent;
      let nameOffset, verOffset, ix;
      if ((verOffset = ua.indexOf("OPR")) !== -1) {
        brand = "Opera";
        core = "Blink";
        brandversion = ua.substring(verOffset + 4);
        if ((verOffset = ua.indexOf("Version")) !== -1) brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("UBrowser")) !== -1) {
        brand = "UCBrowser";
        core = "Blink";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("YaBrowser")) !== -1) {
        brand = "Yandex";
        core = "Blink";
        brandversion = ua.substring(verOffset + 10);
      } else if ((verOffset = ua.indexOf("Brave")) !== -1) {
        brand = "Brave";
        core = "Blink";
        brandversion = ua.substring(verOffset + 6);
      } else if ((verOffset = ua.indexOf("Edg")) !== -1) {
        brand = "Edge";
        core = "Blink";
        brandversion = ua.substring(verOffset + 4);
      } else if ((verOffset = ua.indexOf("Chromium")) !== -1) {
        brand = "Chromium";
        core = "Blink";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("Maxthon")) !== -1) {
        brand = "Maxthon";
        core = "Blink";
        brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Chrome")) !== -1) {
        brand = "Chrome";
        core = "Blink";
        brandversion = ua.substring(verOffset + 7);
      } else if ((verOffset = ua.indexOf("Safari")) !== -1) {
        brand = "Safari";
        core = "WebKit";
        brandversion = ua.substring(verOffset + 7);
        if ((verOffset = ua.indexOf("Version")) !== -1) brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Waterfox")) !== -1) {
        brand = "Waterfox";
        core = "Gecko";
        brandversion = ua.substring(verOffset + 9);
      } else if ((verOffset = ua.indexOf("Firefox")) !== -1) {
        brand = "Firefox";
        core = "Gecko";
        brandversion = ua.substring(verOffset + 8);
      } else if ((verOffset = ua.indexOf("Trident")) !== -1) {
        brand = "IE";
        core = "Trident";
        brandversion = String(parseFloat(ua.substring(ua.indexOf("MSIE") + 5)) || parseFloat(ua.substring(ua.indexOf("rv") + 3)));
      } else if ((nameOffset = ua.lastIndexOf(" ") + 1) < (verOffset = ua.lastIndexOf("/"))) {
        brand = ua.substring(nameOffset, verOffset);
        core = trustcore;
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
      return { core, brand, brandversion, os, trustcore, credit: null };
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
    const queryReg = new RegExp(`//\\s+@${str}\\s+(\\S+)`);
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
        pendingNodes.forEach(item => {
          removeNode(item);
        });
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
        item.remove();
        removedNodes.push(item);
      }
    }
  }

  function convertToUnicode(str) {
    if (typeof str !== "string") return "";
    let ret = "";
    for (let i = 0, l = str.length; i < l; i++) {
      ret += `\\${("00" + str.charCodeAt(i).toString(16)).slice(-4)}`;
    }
    return ret.toUpperCase();
  }

  function debugOnce(name, ...logs) {
    deBounce({ fn: DEBUG, timer: name, once: true })(...logs);
  }

  /* ENVIRONMENT_VARIABLE_PREPROCESSING */

  (function (tTP, requestEnvironmentConstants) {
    "use strict";

    const SET_BOOL_FOR_UPDATE = true; // DON'T TOUCH IT! MUST BE BOOLEAN TYPE. RECONSTRUCTION DATE: 2023.04.08

    const { navigatorInfo, locationInfo } = requestEnvironmentConstants();
    const { core, brand, brandversion, os, trustcore, credit } = navigatorInfo;
    const { cHN: CUR_HOST_NAME, cPN: CUR_HOST_PATH, cP: CUR_PROTOCOL, pHN: TOP_HOST_NAME, isTop: CUR_WINDOW_TOP } = locationInfo;

    const IS_REAL_BLINK = trustcore === "Blink";
    const IS_REAL_GECKO = trustcore === "Gecko";
    const IS_REAL_WEBKIT = trustcore === "WebKit";
    const IS_CHEAT_UA = !credit && (core !== trustcore || checkBlinkCheatingUA());
    const IS_IN_FRAMES = CUR_WINDOW_TOP ? "" : "[FRAMES]";
    const IS_GREASEMONKEY = GMscriptHandler === "Greasemonkey";
    const CAN_I_USE = detectBrowserCompatibility();

    /* CUSTOMIZE_UPDATE_PROMPT_INFORMATION */

    const UPDATE_VERSION_NOTICE = String(
      `<li class="${def.const.seed}_warn">敬告：本次升级为重大版本更新，所有旧数据将被重置！</li>
        <li class="${def.const.seed}_info">完全重构脚本，针对中低端电脑大幅优化脚本性能。</li>
        <li class="${def.const.seed}_add">新增字体缩放时对视口单位的修正。&lt;<a target="_blank" href="${def.const.gfHost}#viewport">必看的注意事项</a>&gt;</li>
        <li class="${def.const.seed}_fix">优化客户端信息及浏览器信息的检测与处理机制。</li>
        <li class="${def.const.seed}_fix">优化字体样式载入的逻辑，减少样式加载失败的机率。</li>
        <li class="${def.const.seed}_fix">优化字体粗体描边样式的修正效率，杜绝卡顿、延迟。</li>
        <li class="${def.const.seed}_fix">优化不同脚本运行模式下冗余脚本的检测逻辑。</li>
        <li class="${def.const.seed}_fix">修正一些已知的问题，优化样式，优化代码。</li>`
    );

    /* INITIALIZE_FONT_LIBRARY */

    const fontCheck = new Set([
      { ch: "微软雅黑", en: "Microsoft YaHei UI", ps: "MicrosoftYaHeiUI" },
      { ch: "微軟正黑體", en: "Microsoft JhengHei", ps: "MicrosoftJhengHeiRegular" },
      { ch: "苹方-简", en: "PingFang SC", ps: "PingFangSC-Regular" },
      { ch: "蘋方-繁", en: "PingFang TC", ps: "PingFangTC-Regular" },
      { ch: "蘋方-港", en: "PingFang HK", ps: "PingFangHK-Regular" },
      { ch: "更纱黑体 SC", en: "Sarasa Gothic SC", ps: "Sarasa-Gothic-SC-Regular" },
      { ch: "更紗黑體 TC", en: "Sarasa Gothic TC", ps: "Sarasa-Gothic-TC-Regular" },
      { ch: "冬青黑体简", en: "Hiragino Sans GB", ps: "HiraginoSansGB-Regular" },
      { ch: "兰亭黑-简", en: "Lantinghei SC", ps: "FZLTTHK--GBK1-0" },
      { ch: "OPPOSans", en: "OPPOSans", ps: "OPPOSans-R" },
      { ch: "霞鹜文楷", en: "LXGW WenKai", ps: "LXGWWenKai-Regular" },
      { ch: "鸿蒙黑体", en: "HarmonyOS Sans SC", ps: "HarmonyOS_Sans_SC" },
      { ch: "浪漫雅圆", en: "LMYY", ps: "浪漫雅圆" },
      { ch: "思源黑体", en: "Source Han Sans SC", ps: "SourceHanSansSC-Regular" },
      { ch: "思源宋体", en: "Source Han Serif SC", ps: "SourceHanSerifSC-Regular" },
      { ch: "汉仪旗黑", en: "HYQiHei", ps: "HYQiHei-EES" },
      { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei", ps: "WenQuanYiMicroHei" },
      { ch: "文泉驿正黑", en: "WenQuanYi Zen Hei", ps: "WenQuanYiZenHei" },
      { ch: "方正舒体", en: "FZShuTi", ps: "FZSTK--GBK1-0" },
      { ch: "方正姚体", en: "FZYaoti", ps: "FZYTK--GBK1-0" },
      { ch: "华文仿宋", en: "STFangsong", ps: "STFangsong" },
      { ch: "华文楷体", en: "STKaiti", ps: "STKaiti" },
      { ch: "华文细黑", en: "STXihei", ps: "STXihei" },
      { ch: "华文彩云", en: "STCaiyun", ps: "STCaiyun" },
      { ch: "华文琥珀", en: "STHupo", ps: "STHupo" },
      { ch: "华文新魏", en: "STXinwei", ps: "STXinwei" },
      { ch: "华文隶书", en: "STLiti", ps: "STLiti" },
      { ch: "华文行楷", en: "STXingkai", ps: "STXingkai" },
      { ch: "雅痞-简", en: "Yuppy SC", ps: "YuppySC-Regular" },
      { ch: "圆体-简", en: "Yuanti SC", ps: "YuantiSC-Regular" },
      { ch: "手书体", en: "ShouShuti", ps: "ShouShuti" },
      { ch: "幼圆", en: "YouYuan", ps: "YouYuan" },
      { ch: "微软雅黑（置换版）", en: "Microsoft YaHei", ps: "MicrosoftYaHei" },
    ]);

    /* INITIALIZE_FONT_RENDERING_PARAMETERS */

    const INITIAL_VALUES = {
      fontBase: `system-ui,-apple-system,BlinkMacSystemFont,sans-serif,'iconfont','icomoon','FontAwesome','Font Awesome 5 Pro','Font Awesome 6 Pro','IcoFont','fontello','themify','Material Icons','Material Icons Extended','bootstrap-icons','Segoe Fluent Icons','Material-Design-Iconic-Font','office365icons','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji','Android Emoji','EmojiSymbols','emojione mozilla','twemoji mozilla'`,
      fontSelect: IS_REAL_WEBKIT ? `'PingFang SC'` : `'Microsoft YaHei UI'`,
      fontFace: true,
      fontSmooth: true,
      fontSize: 1.0,
      fontStroke: IS_REAL_GECKO ? 0.08 : IS_REAL_BLINK ? 0.015 : 0.0,
      fixStroke: IS_REAL_BLINK,
      fontShadow: IS_REAL_GECKO ? 0.36 : 0.75,
      shadowColor: IS_REAL_GECKO ? "#7C7C7C70" : "#7C7C7CDD",
      fontCSS: `:not(i,head *):not([class*='glyph'],[class*='icon'],[class*='fa-'],[class*='vjs-'],[class*='mu-'])`,
      fontEx: `progress,meter,datalist,samp,kbd,pre,pre *,code,code *`,
      monospacedFont: `'Operator Mono Lig','Fira Code','Source Code Pro','DejaVu Sans Mono','Anonymous Pro','Ubuntu Mono','Roboto Mono','JetBrains Mono','Droid Sans Mono','Mono','Monaco','Menlo','Inconsolata','Liberation Mono'`,
      monospacedFeature: `"liga" 0,"tnum","zero"`,
      editorialSites: `vscode.dev|github.dev|github1s.com|kdocs.cn|docs.qq.com|cdn.addon.tencentsuite.com|yuque.com|xiezuocat.com|wolai.com|shimo.im|note.youdao.com|feishu.cn|docs.google.com|mail.google.com|newassets.hcaptcha.com|image.baidu.com|weread.qq.com`,
    };

    /* INITIALIZE_SHADOWROOT_STYLE */

    def.const.style = {
      mainStyle: `display:inline-block;font-family:monospace,${INITIAL_VALUES.fontSelect}`,
      fullStyle: (b, c) => `${def.const.style.mainStyle};background-color:${b};color:${c};border-radius:4px;padding:4px 8px;`,
      leftStyle: b => `${def.const.style.mainStyle};background-color:${b};color:snow;border-radius:4px 0 0 4px;padding:4px 2px 4px 8px`,
      rightStyle: b => `${def.const.style.mainStyle};background-color:${b};color:snow;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 4px;margin:0 0 0 -2px`,
      remarkStyle: c => `${def.const.style.mainStyle};color:${c};padding:4px 0;line-height:180%`,
      global: String(
        `:root body>#${def.id.dialogbox},:root body>#${def.id.rndId}{position:fixed;top:0;left:0;width:100%;height:100%;background:0 0;pointer-events:none}#${def.id.dialogbox}{z-index:1999999995}#${def.id.rndId}{z-index:1999999991}` +
          `${IS_REAL_GECKO ? "input:is([type='text'],[type='password'],[type='search']){font-family:'Microsoft YaHei UI',sans-serif!important}" : ""}`
      ),
      frDialogBox: String(
        `div.${def.class.db}{z-index:99999;box-sizing:content-box;max-width:420px;border:2px solid #efefef;color:#444;pointer-events:auto}.${def.class.db}{position:absolute;top:calc(12% + 10px);right:15px;display:block;overflow:hidden;width:100%;border-radius:6px;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,.3);transition:opacity .5s}.${def.class.db} *{text-shadow:0 0 1px #777!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}.${def.class.dbt}{margin-top:0;padding:10px 12px;width:auto;background:#efefef;text-align:left;font-weight:700;font-size:18px!important;font-family:Candara,'Times New Roman',${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm}{margin:5px;padding:10px;color:#444;text-align:left;font-weight:500;font-size:16px!important}.${def.class.dbb}{display:inline-block;box-sizing:content-box;margin:2px 1%;padding:8px 12px;min-width:12%;border-radius:4px;text-align:center;text-decoration:none!important;letter-spacing:0;font-weight:400;cursor:pointer}` +
          `.${def.class.dbb}:hover{box-sizing:content-box;color:#fff;text-decoration:none!important;font-weight:700;opacity:.8}.${def.class.db} .${def.class.dbt},.${def.class.dbb},.${def.class.dbb}:hover{text-shadow:none!important;-webkit-text-stroke:0 transparent!important;-webkit-user-select:none;user-select:none}.${def.class.dbbf},.${def.class.dbbf}:hover{border:1px solid #d93223!important;border-radius:6px;background:#d93223!important;color:#fff!important;font-size:14px!important}.${def.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}.${def.class.dbbt},.${def.class.dbbt}:hover{border:1px solid #038c5a!important;border-radius:6px;background:#038c5a!important;color:#fff!important;font-size:14px!important}.${def.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}.${def.class.dbbn},.${def.class.dbbn}:hover{border:1px solid #777!important;border-radius:6px;background:#777!important;color:#fff!important;font-size:14px!important}.${def.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${def.class.dbbc}{padding:2.5%;background:#efefef;color:#fff;text-align:right}.${def.class.dbm} textarea{cursor:auto;scrollbar-width:thin;overscroll-behavior:contain}.${def.class.dbm} textarea::-webkit-scrollbar{width:8px;height:8px}.${def.class.dbm} textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-track-piece{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}` +
          `.${def.class.dbm} button:hover{background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important;cursor:pointer}.${def.class.dbm} p{margin:5px 0!important;text-align:left;text-indent:0!important;font-weight:400;font-size:16px!important;line-height:1.5!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul{margin:0 0 0 10px!important;padding:2px;color:gray;list-style:none;font:italic 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;scrollbar-width:thin}.${def.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${def.class.dbm} ul::-webkit-scrollbar-thumb{border-radius:10px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} ul::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul::-webkit-scrollbar-track-piece{border-radius:6px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul li{display:list-item;list-style-type:none;-webkit-user-select:none;user-select:none;word-break:break-all}.${def.class.dbm} li:before{display:none}.${def.class.dbm} #${def.id.bk},.${def.class.dbm} #${def.id.pv},.${def.class.dbm} #${def.id.fs},.${def.class.dbm} #${def.id.fvp},.${def.class.dbm} #${def.id.hk},.${def.class.dbm} #${def.id.ct},.${def.class.dbm} #${def.id.mps},.${def.class.dbm} #${def.id.flc},.${def.class.dbm} #${def.id.gc}{display:flex;box-sizing:content-box;margin:0;padding:2px 4px!important;width:calc(96% - 10px);height:max-content;min-width:auto;min-height:40px;list-style:none;font-style:normal;justify-content:space-between;align-items:flex-start;word-break:break-word}` +
          `.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);color:#fff;content:' '}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:'OFF';font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:'ON'}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:' '}` +
          `.${def.class.dbm} .${def.const.seed}_VIP{margin:2px 0 0 0;color:#b8860b!important;font:normal 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.class.dbm} #${def.id.flc} button,.${def.class.dbm} #${def.id.gc} button{box-sizing:border-box!important;margin:0 5px 0 0!important;padding:2px 5px!important;border:1px solid #999!important;border-radius:4px!important;background-color:#eee;color:#444!important;letter-spacing:normal!important;font-weight:400!important;font-size:14px!important}#${def.const.seed}_monospaced_siterules:placeholder-shown{color:#555!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}#${def.const.seed}_monospaced_siterules::-webkit-input-placeholder,#${def.const.seed}_monospaced_siterules::-moz-placeholder,#${def.const.seed}_monospaced_font::-moz-placeholder{color:#555!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} a{color:#0969da;text-decoration:none!important;font-style:inherit}.${def.class.dbm} a:hover{color:#dc143c;text-decoration:underline}.${def.class.dbm} #${def.id.feedback}{padding:2px 10px;width:max-content;height:22px;min-width:auto}.${def.class.dbm} #${def.id.files}{display:none}.${def.class.dbm} #${def.id.feedback}:hover{color:crimson!important}` +
          `.${def.class.dbm} #${def.id.feedback}:after{width:0;height:0;background:url('${def.const.loadImg}') no-repeat -400px -300px;content:""}` +
          `.${def.class.dbm} #${def.const.seed}_custom_Fontlist:placeholder-shown{color:#aaa!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} #${def.const.seed}_custom_Fontlist::-webkit-input-placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;word-break:break-all!important}.${def.class.dbm} #${def.const.seed}_custom_Fontlist::-moz-placeholder{color:#555!important;white-space:pre-line;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} #${def.const.seed}_update li{margin:0;padding:0;color:gray;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} .${def.const.seed}_add:before{display:inline;margin:0 4px 0 -10px;content:'+'}.${def.class.dbm} .${def.const.seed}_del:before{display:inline;margin:0 4px 0 -10px;content:'-'}.${def.class.dbm} .${def.const.seed}_fix:before{display:inline;margin:0 4px 0 -10px;content:'@'}.${def.class.dbm} .${def.const.seed}_info{color:#daa520!important}.${def.class.dbm} .${def.const.seed}_info:before{display:inline;margin:0 4px 0 -10px;content:'#'}.${def.class.dbm} .${def.const.seed}_warn{color:#e90000!important}.${def.class.dbm} .${def.const.seed}_warn:before{display:inline;margin:0 4px 0 -10px;content:'!'}.${def.class.dbm} .${def.const.seed}_init{color:#65a16a!important}.${def.class.dbm} .${def.const.seed}_init:before{display:inline;margin:0 4px 0 -10px;content:'$'}.${def.class.dbm} input:focus,.${def.class.dbm} textarea:focus{box-shadow:inset 0 1px 3px rgb(0 0 0/10%),0 0 4px rgb(110 111 112/60%)!important}`
      ),
      frConfigure:
        String(
          `#${def.id.container}{position:absolute;top:10px;right:24px;z-index:99999;overflow-x:hidden;overflow-y:auto;box-sizing:content-box;padding:4px;max-height:calc(100% - 40px);min-height:10%;border-radius:12px;background:#f0f6ff!important;box-shadow:0 0 4px 0 rgb(0 0 0/30%);color:#333;text-align:left;font-weight:700;font-size:16px!important;opacity:0;transition:opacity .5s;width:auto;overscroll-behavior:contain;scrollbar-color:rgb(51 102 153/85%) rgb(0 0 0/25%);scrollbar-width:thin;pointer-events:auto}#${def.id.container}::-webkit-scrollbar{width:10px;height:1px}#${def.id.container}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df;}#${def.id.container}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.container}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.container} *{text-shadow:none!important;font-weight:700;font-size:16px;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Android Emoji,EmojiSymbols!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}` +
            `#${def.id.container} fieldset{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;min-height:475px;border:2px groove #67a5df!important;border-radius:10px;background:#f0f6ff!important}#${def.id.container} legend{position:relative!important;float:none!important;display:block!important;visibility:visible!important;box-sizing:content-box;margin:0;padding:0 8px;width:auto!important;height:auto!important;min-width:185px!important;border:none!important;background:#f0f6ff!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.container} fieldset ul{margin:0;padding:0;background:#f0f6ff!important}#${def.id.container} ul li{float:none;display:inherit;box-sizing:content-box;margin:3px 0;min-width:-webkit-fill-available;min-width:-moz-available;border:none;background:#f0f6ff!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none}#${def.id.container} ul li:before{display:none}#${def.id.container} .${def.class.rotation} svg{visibility:visible!important;overflow:hidden;width:24px;height:24px;vertical-align:initial!important;fill:#67a5df;}#${def.id.container} .${def.class.rotation} svg:hover{cursor:help}#${def.const.seed}_scriptname{display:inline-block;font-weight:700!important;-webkit-user-select:all;user-select:all}#${def.id.container} .${def.class.title} .${def.class.guide}{position:absolute;display:inline-block;cursor:pointer}@keyframes rotation{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}.${def.class.title} .${def.class.rotation}{top:auto;right:auto;bottom:auto;left:auto;margin:0;padding:0;width:24px;height:24px;-webkit-transform:rotate(1turn);transform-origin:center 50% 0;animation:rotation 5s linear infinite}` +
            `#${def.id.container} input:not([type='range'],[type='checkbox']):focus,#${def.id.container} textarea:focus{box-shadow:inset 0 1px 3px rgb(0 0 0/10%),0 0 6px rgb(82 168 236/60%)!important}#${def.id.fontList}{padding:2px 10px 0;min-height:73px}#${def.id.fontFace},#${def.id.fontSmooth}{display:flex!important;padding:2px 10px;width:calc(100% - 18px);height:40px;min-width:auto;align-items:center;justify-content:space-between}#${def.id.fontSize}{padding:2px 10px;height:60px}#${def.id.fontStroke}{padding:2px 10px;height:60px}#${def.id.fontShadow}{padding:2px 10px;height:60px}#${def.id.shadowColor}{display:flex;margin:4px;padding:2px 10px;width:auto;min-height:45px;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}#${def.id.fontCss},#${def.id.fontEx}{padding:2px 10px;height:110px;min-height:110px}#${def.id.submit}{padding:2px 10px;height:40px}` +
            `#${def.id.fontList} .${def.class.selector} a{text-decoration:none;font-weight:400}#${def.id.fontList} .${def.class.label}{display:inline-block;margin:0 4px 14px 0;padding:0;height:24px;line-height:24px!important}#${def.id.fontList} .${def.class.label} span{display:inline-block;overflow:hidden;box-sizing:border-box;padding:5px;width:max-content;height:max-content;max-width:200px;min-width:12px;background:#67a5df;color:#fff;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:16px!important}#${def.id.fontList} .${def.class.close}{width:12px}#${def.id.fontList} .${def.class.close}:hover{border-radius:2px;background-color:#2d7dca;color:tomato}#${def.id.selector}{width:100%;max-width:100%}#${def.id.selector} label{display:block;margin:0 0 4px;color:#333;cursor:auto}#${def.id.selector} #${def.id.cleaner}{margin-left:5px;cursor:pointer}#${def.id.selector} #${def.id.cleaner}:hover{color:red}#${def.id.fontList} .${def.class.selector}{overflow-x:hidden;box-sizing:border-box;margin:0 0 6px;padding:6px 6px 0;width:100%;max-width:min-content;max-width:-moz-min-content;max-height:90px;min-width:100%;min-height:45px;border:2px solid #67a5df!important;border-radius:6px;overscroll-behavior:contain;scrollbar-color:#369 rgba(0,0,0,.25);scrollbar-width:thin}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selectFontId} span.${def.class.spanlabel},#${def.id.selector} span.${def.class.spanlabel}{display:block!important;margin:0!important;padding:0 0 4px;width:auto;border:0;background-color:transparent!important;color:#333;text-align:left!important}` +
            `#${def.id.fontList} .${def.class.selectFontId}{width:auto}#${def.id.fontList} .${def.class.selectFontId} input{overflow:hidden;box-sizing:border-box;margin:0;padding:1px 23px 1px 2px;width:230px;height:42px!important;max-width:100%;min-width:100%;outline:none!important;outline-color:#67a5df;border:2px solid #67a5df!important;border-radius:6px;background:#fafafa;text-indent:8px;text-overflow:ellipsis;font-weight:700;font-size:16px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.fontList} .${def.class.selectFontId} input[disabled]{pointer-events:none!important}#${def.id.fontList} .${def.class.selectFontId} input::-webkit-search-cancel-button{margin:0 7px}.${def.class.placeholder}:placeholder-shown{color:#369!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.95!important}.${def.class.placeholder}::-webkit-input-placeholder{color:#369!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}.${def.class.placeholder}::-moz-placeholder{color:#369!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;opacity:.65!important}#${def.id.fontList} .${def.class.selectFontId} dl{position:absolute;z-index:1000;overflow-x:hidden;box-sizing:content-box;margin:4px 0 0;padding:4px 8px;width:auto;max-width:calc(100% - 68px);max-height:298px;min-width:60%;border:2px solid #67a5df!important;border-radius:6px;background-color:#fff;white-space:nowrap;font-size:18px!important;overscroll-behavior:contain;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin}` +
            `#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar{width:10px;height:1px}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df;}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.fontList} .${def.class.selectFontId} dl dd{display:block;overflow-x:hidden;box-sizing:content-box;margin:1px 8px;padding:5px 0;width:-moz-available;width:-webkit-fill-available;max-width:100%;min-width:100%;text-overflow:ellipsis;font-weight:400;font-size:21px!important}#${def.id.fontList} .${def.class.selectFontId} dl dd:hover{overflow-x:hidden;box-sizing:content-box;min-width:-moz-available;min-width:-webkit-fill-available;background-color:#67a5df;color:#fff;text-overflow:ellipsis}` +
            `.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);color:#fff;content:" "}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:"ON"}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}#${def.id.fface} label,#${def.id.fface}+label::after,#${def.id.fface}+label::before,#${def.id.smooth} label,#${def.id.smooth}+label::after,#${def.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}` +
            `#${def.id.fontShadow} div.${def.class.flex}:before,#${def.id.fontShadow} div.${def.class.flex}:after,#${def.id.fontStroke} div.${def.class.flex}:before,#${def.id.fontStroke} div.${def.class.flex}:after,#${def.id.fontSize} div.${def.class.flex}:before,#${def.id.fontSize} div.${def.class.flex}:after{display:none}#${def.id.fontShadow} #${def.id.shadowSize},#${def.id.fontStroke} #${def.id.strokeSize},#${def.id.fontSize} #${def.id.fontScale}{box-sizing:content-box;margin:0 10px 0 0!important;padding:0;width:56px!important;height:32px!important;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:#fafafa!important;color:#111!important;text-align:center;text-indent:0;font-weight:400!important;font-size:17px!important;font-family:Impact,Times,serif!important}#${def.id.fontSize} #${def.id.fontScale}[disabled]{background-color:rgba(228,231,237,.82)!important;color:#555!important;filter:grayscale(.9)}#${def.id.fontStroke} #${def.id.fstroke}>label{float:none!important;display:inline!important;margin:0!important;padding:0 0 0 2px!important;color:#666!important;font-size:12px!important;cursor:help!important}#${def.id.fixStroke}{display:inline-block;margin:0 2px 0 0!important;width:14px!important;height:14px!important;vertical-align:text-bottom;cursor:pointer;-webkit-appearance:checkbox!important}` +
            `#${def.id.fixStroke}::after{position:relative;top:0;display:inline-block;margin:0;padding:0;width:14px;height:14px;border-radius:3px;background-color:#aaa;color:#fff;content:"\u2717";vertical-align:top;text-align:center;font-weight:700;font-size:12px;line-height:14px}#${def.id.fixStroke}:checked::after{border:0!important;background-color:#65a0db;color:#fff;content:"\u2713";font-weight:700;font-size:12px;line-height:14px}.${def.class.flex}{display:flex;width:auto;min-width:100%;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}.${def.class.slider} input{visibility:hidden}#${def.id.shadowColor} *{box-sizing:content-box}#${def.id.shadowColor} .${def.class.frColorPicker}{margin:0;padding:0;width:auto}#${def.id.shadowColor} .${def.class.frColorPicker} #${def.id.color}{box-sizing:border-box;margin:0;padding:0 8px 0 0;width:160px!important;height:35px!important;min-width:160px;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:rgba(253,253,255,.69);color:#333!important;text-align:center;text-indent:0;font-weight:400!important;font-size:18px!important;font-family:Impact,Times,serif!important;cursor:pointer}` +
            `#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{box-sizing:border-box;margin:0;padding:5px;width:calc(100% - 2px)!important;height:78px;max-width:calc(100% - 2px);max-height:78px;min-width:calc(100% - 2px);min-height:78px;outline:none!important;border:2px solid #67a5df!important;border-radius:6px;color:#0b5b9c!important;font:700 14px/150% monospace,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;resize:none;cursor:auto;word-break:break-all;scrollbar-color:#487baf rgba(0,0,0,.25);scrollbar-width:thin;overscroll-behavior:contain}#${def.id.fontCss} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontCss} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontCss} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px rgba(0,0,0,.2);}#${def.id.fontCss} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea{background:#fafafa!important}#${def.id.fontEx} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontEx} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}.${def.class.switch}{float:right;box-sizing:border-box;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;border-radius:4px;color:#0a68c1}#${def.id.cSwitch}:hover,#${def.id.eSwitch}:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.${def.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9,#e9ffe9 25%,transparent 0,transparent 50%,#e9ffe9 0,#e9ffe9 75%,transparent 0,transparent)!important;background-color:#f7fff7!important;background-size:50px 50px}` +
            `.${def.class.dbm} textarea{cursor:auto;scrollbar-width:thin;overscroll-behavior:contain}.${def.class.dbm} textarea::-webkit-scrollbar{width:8px;height:8px}.${def.class.dbm} textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-track-piece{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}` +
            `#${def.id.submit} button{box-sizing:border-box;margin:0;padding:5px 10px;width:auto;height:35px;min-width:min-content;min-height:35px;border:2px solid #6ba7e0;border-radius:6px;background-color:#67a5df;background-image:none;color:#fff!important;font:normal 600 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;cursor:pointer}#${def.id.submit} button:hover{box-shadow:0 0 5px rgba(0,0,0,.4)!important}#${def.id.submit} .${def.class.cancel},#${def.id.submit} .${def.class.reset}{float:left;margin-right:10px}#${def.id.submit} .${def.class.submit}{float:right}#${def.id.submit} #${def.id.backup}{display:none;margin:0 10px 0 0}.${def.class.anim}{border:2px solid #dc143c!important;background:#dc143c!important;animation:jiggle 1.8s ease-in infinite}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}`
        ) +
        String(
          `.${def.class.tooltip}{position:relative;cursor:help;-webkit-user-select:none;user-select:none}.${def.class.tooltip} span.${def.class.emoji}{font-weight:400!important}.${def.class.tooltip}:active .${def.class.tooltip}{display:block}.${def.class.tooltip} .${def.class.tooltip}{position:absolute;z-index:999999;display:none;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #b8c4ce;border-radius:6px;background-color:#54a2ec;color:#fff;font-weight:400;opacity:.9;word-break:break-all}.${def.class.tooltip} .${def.class.tooltip} *{font-size:14px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.class.tooltip} .${def.class.tooltip} em{font-style:normal!important}.${def.class.tooltip} .${def.class.tooltip} strong{color:darkorange;font-size:18px!important}.${def.class.tooltip} .${def.class.tooltip} p{display:block;margin:0 0 10px;color:#fff;text-indent:0!important;line-height:150%}.${def.class.ps1}{position:relative;top:-33px;right:5px;float:right;margin:0;padding:0;width:24px;height:0}.${def.class.ps2}{top:35px;right:-7px}` +
            `.${def.class.ps3}{top:-197px;${IS_REAL_WEBKIT ? "left:-72px" : "left:auto"}}` +
            `.${def.class.ps4}{top:-197px;${IS_REAL_WEBKIT ? "right:-64px" : "left:auto"}}` +
            `.${def.class.ps5}{top:-322px;${IS_REAL_WEBKIT ? "right:-54px" : "left:auto"}}`
        ) +
        String(
          `.${def.class.range}{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:white;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic bold 14px/14px monospace,serif;--fill-color:var(--primary-color);--progress-background:rgb(223, 223, 223);--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:white;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),0 0 1px rgba(0, 0, 0, 0.5) inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px darkorange inset,0 0 3px rgba(0, 0, 0, 0.4);--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--step:1;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, '');--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}` +
            `.${def.class.range}{position:relative;z-index:1;display:inline-block;box-sizing:content-box;margin:-3px 0 0 -7px;padding-top:calc(var(--flip-y)*var(--ticks-gap));padding-bottom:var(--flip-y,var(--ticks-gap));width:auto;height:Max(var(--track-height),var(--thumb-size));min-width:105%!important;background:linear-gradient(90deg,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size) - var(--ticks-thickness));background-position-y:var(--flip-y,bottom)}.${def.class.range}[disabled]{filter:grayscale(0.9);}.${def.class.range}[data-ticks-position=top]{--flip-y:1}.${def.class.range}::after,.${def.class.range}::before{position:absolute;top:calc(-2.5ch*var(--flip-y));bottom:var(--flip-y,-2.5ch);display:var(--show-min-max,block);content:counter(x);font:var(--min-max-font);opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset)*var(--before,-1)*-1)) scale(var(--at-edge));--offset:calc(var(--thumb-size)/2);pointer-events:none}.${def.class.range}::before{left:var(--offset);counter-reset:x var(--min);--before:1;--at-edge:var(--thumb-close-to-min)}.${def.class.range}::after{right:var(--offset);counter-reset:x var(--max);--at-edge:var(--thumb-close-to-max)}` +
            `.${def.class.rangeProgress}{position:absolute;top:calc(var(--ticks-gap)*var(--flip-y,0) + var(--thumb-size)/2 - var(--track-height)/2);right:var(--start-end);left:var(--start-end);z-index:-1;height:calc(var(--track-height));border-radius:var(--progress-radius);background:var(--progress-background,#eee);--start-end:calc(var(--thumb-size)/2);--clip-end:calc(100% - var(--cb)*1%);--clip-start:calc(var(--ca)*1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));pointer-events:none}.${def.class.rangeProgress}::before{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);content:"";clip-path:var(--clip)}.${def.class.rangeProgress}::after{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--progress-shadow);content:"";pointer-events:none}.${def.class.range}>input:only-of-type~.${def.class.rangeProgress}{--clip-start:0}` +
            `.${def.class.range}>input::-webkit-slider-runnable-track{border:none!important;background:transparent!important;box-shadow:none!important}.${def.class.range}>input{position:absolute!important;top:calc(50% + var(--flip-y,-1))!important;left:0;margin:0!important;padding:0!important;width:100%;height:var(--thumb-size)!important;outline:0!important;border:0!important;background:0 0!important;box-shadow:none!important;cursor:grab;-webkit-appearance:none;--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:not(:only-of-type){pointer-events:none}.${def.class.range}>input::-webkit-slider-thumb{width:var(--thumb-size);height:var(--thumb-size);border:none;border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);transition:.1s;transform:var(--thumb-transform);appearance:none;pointer-events:auto}.${def.class.range}>input::-moz-range-thumb{width:var(--thumb-size);height:var(--thumb-size);border:none;border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);transition:.1s;transform:var(--thumb-transform);appearance:none;pointer-events:auto}.${def.class.range}>input::-ms-thumb{width:var(--thumb-size);height:var(--thumb-size);border:none;border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);transition:.1s;transform:var(--thumb-transform);appearance:none;pointer-events:auto}` +
            `.${def.class.range}>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:hover+output{box-shadow:0 0 0 3px var(--value-background);color:var(--value-active-color);--value-background:var(--value-background-hover);--y-offset:-1px}.${def.class.range}>input:active{z-index:2;cursor:grabbing;--thumb-shadow:var(--thumb-shadow-hover)}.${def.class.range}>input:active+output{display:-webkit-box;opacity:.9;transition:0s;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.${def.class.range}>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}.${def.class.range}>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.${def.class.range}>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.${def.class.range}>input:nth-of-type(1)+output::after{content:var(--prefix, '') var(--text-value-a) var(--suffix, '')}.${def.class.range}>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}.${def.class.range}>input:nth-of-type(2)+output{--value:var(--value-b)}.${def.class.range}>input+output{position:absolute;left:var(--pos);z-index:5;box-sizing:content-box;padding:0 6px;width:auto;height:24px;min-width:40px;min-height:24px;border-radius:4px;background:var(--value-background);text-align:center;opacity:0;transition:all .12s ease-out,left 0s;transform:translate(var(--x-offset),calc(150% - var(--y-offset,0) - var(--value-offset-y)));--flip:-1;--x-offset:calc(var(--completed-b)*-1%);--pos:calc((var(--value) - var(--min))/(var(--max) - var(--min))*100%);pointer-events:none}.${def.class.range}>input+output::after{content:var(--prefix,"") var(--text-value-b) var(--suffix,"");font:var(--value-font)}`
        ),
    };

    /* REGISTER_LOAD_EVENT_CLASS */

    class RegisterEvents {
      constructor() {
        this.fns = [];
        this.finalfns = [];
        this.done = false;
        this.register();
        document.addEventListener("readystatechange", () => this.checkReadyState());
      }

      addFn(fn) {
        if (typeof fn !== "function") return;
        this.fns.push(fn);
      }

      addFinalFn(fn) {
        if (typeof fn !== "function") return;
        this.finalfns.push(fn);
      }

      runFns(fns, background) {
        let run = 0;
        let err = 0;
        for (let fn of fns) {
          try {
            fn();
            run++;
          } catch (e) {
            ERROR("RegisterEvents.runFns:", e.message);
            err++;
          }
        }
        this._onReady(background, run, err, document.readyState);
      }

      register() {
        if (this.done) return;
        if (IS_GREASEMONKEY) {
          w.onload = () => this.runFns(this.fns, "darkorange");
          this.done = true;
          return;
        }
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => this.runFns(this.fns, "slateblue"));
        } else {
          w.addEventListener("load", () => this.runFns(this.fns, "darkorange"));
        }
        this.done = true;
      }

      checkReadyState() {
        if (!this.done || document.readyState !== "complete") return;
        this.runFns(this.finalfns, "green");
      }

      _onReady(background, ...logs) {
        const args = [
          def.const.style.leftStyle(background),
          def.const.style.rightStyle(background),
          "display:block;height:0",
          def.const.style.remarkStyle("0"),
          def.const.style.remarkStyle("grey"),
        ];
        INFO(`%c[DOM.STATE]:%c${logs}!%c\r\n%c \u3000\u27A6${IS_IN_FRAMES} ${CUR_HOST_NAME} %c${CUR_HOST_PATH}`, ...args);
      }
    }

    /* FR_DIALOGBOX_CLASS */

    class FrDialogBox {
      constructor({ titleText = "Test", messageText = "Test message.", trueButtonText = "OK", falseButtonText = null, neutralButtonText = null } = {}) {
        this.css = def.const.style.frDialogBox;
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
        this.__create(this);
        this.__append();
        this.__rescale();
      }
      __create(context) {
        this.container = cE("fr-dialogbox");
        this.container.id = def.id.dialogbox;
        const shadow = aS(this.container);
        def.const.dialogIf = shadow;
        this.frDialog = cE("div");
        this.frDialog.classList.add(def.class.db);
        this.frDialog.style.opacity = 0;
        shadow.appendChild(this.frDialog);
        compatibleWithAdoptedStyleSheets(shadow, this.css, `${def.const.seed}-dialogbox`);
        const title = cE("div");
        title.textContent = this.titleText;
        title.classList.add(def.class.dbt);
        this.frDialog.appendChild(title);
        const question = cE("div");
        question.innerHTML = tTP.createHTML(this.messageText);
        question.classList.add(def.class.dbm);
        this.frDialog.appendChild(question);
        const buttonContainer = cE("div");
        buttonContainer.classList.add(def.class.dbbc);
        this.frDialog.appendChild(buttonContainer);
        this.trueButton = cE("a");
        this.trueButton.classList.add(def.class.dbb, def.class.dbbt);
        this.trueButton.textContent = this.trueButtonText;
        this.trueButton.addEventListener("click", () => context.__destroy());
        buttonContainer.appendChild(this.trueButton);
        if (this.hasFalse) {
          this.falseButton = cE("a");
          this.falseButton.classList.add(def.class.dbb, def.class.dbbf);
          this.falseButton.textContent = this.falseButtonText;
          this.falseButton.addEventListener("click", () => context.__destroy());
          buttonContainer.appendChild(this.falseButton);
        }
        if (this.hasNeutral) {
          this.neutralButton = cE("a");
          this.neutralButton.classList.add(def.class.dbb, def.class.dbbn);
          this.neutralButton.textContent = this.neutralButtonText;
          this.neutralButton.addEventListener("click", () => context.__destroy());
          buttonContainer.appendChild(this.neutralButton);
        }
      }
      __append() {
        const container = this.container;
        const appendedNode = FrDialogBox.closure("Redeploy");
        if (CUR_WINDOW_TOP && container && appendedNode) {
          this.parent.appendChild(container);
          sleep(1e2)(this.frDialog).then(d => d && (d.style.opacity = 1));
        }
      }
      __rescale() {
        const scale = gS(this.parent, "zoom") || def.const.curScale || 1;
        if (scale === 1) return;
        IS_REAL_GECKO
          ? (this.container.style.cssText += `transform-origin:left top 0;transform:scale(${1 / scale});width:99vw;height:99vh;top:0;`)
          : (this.container.style.cssText += `zoom:${1 / scale};`);
      }
      __destroy() {
        if (this.container) {
          this.parent.removeChild(this.container);
          DEBUG("FrDialogBox.Destroy.status: %o", delete this);
        }
      }
      static closure(s) {
        if (document.getElementById(def.id.dialogbox)) {
          const status = safeRemove("fr-dialogbox", this.parent);
          DEBUG("FrDialogBox.%s.status: %o", s ?? "Closure", s ? status : delete this);
          return status;
        }
        return Boolean(s);
      }
      respond() {
        return new Promise((resolve, reject) => {
          if (!this.frDialog || !this.trueButton) reject(new Error("FrDialogBox Error!"));
          this.trueButton.addEventListener("click", () => resolve(true));
          if (this.hasFalse) this.falseButton.addEventListener("click", () => resolve(false));
        }).catch(e => {
          ERROR("FrDialogBox:", e.message);
        });
      }
    }

    function compatibleWithAdoptedStyleSheets(shadow, css, id) {
      const webkitCompatible = IS_REAL_WEBKIT && parseFloat(brandversion) >= 16.4;
      const blinkCompatible = IS_REAL_BLINK && parseFloat(brandversion) >= 73;
      const geckoCompatible = IS_REAL_GECKO && parseFloat(brandversion) >= 101 && !IS_GREASEMONKEY && !GMcontextMode;
      try {
        let sheet, style, hostSheet, existSheet;
        if (!IS_CHEAT_UA && (webkitCompatible || blinkCompatible || geckoCompatible)) {
          sheet = new CSSStyleSheet();
          sheet.id = id;
          sheet.replaceSync(css);
          hostSheet = shadow.adoptedStyleSheets;
          existSheet = hostSheet.find(s => s.id === sheet.id);
          if (!existSheet) shadow.adoptedStyleSheets = [...hostSheet, sheet];
        } else {
          style = document.createElement("style");
          style.id = id;
          style.type = "text/css";
          style.media = "screen";
          style.textContent = css;
          existSheet = qS(`style[id="${id}"]`, shadow);
          if (!existSheet) shadow.appendChild(style);
        }
        sheet = null;
        style = null;
        hostSheet = null;
        existSheet = null;
      } catch (e) {
        ERROR("compatibleWithAdoptedStyleSheets:", e.message);
      }
    }

    function checkBlinkCheatingUA() {
      if (typeof NavigatorUAData !== "undefined") {
        if (CUR_PROTOCOL === "https:" && !navigator.userAgentData) return true;
        // eslint-disable-next-line no-undef
        return Boolean(navigator.userAgentData) && !(navigator.userAgentData instanceof NavigatorUAData);
      }
      return false;
    }

    function getscaleValueMatrix() {
      const matrix = def.array.scaleValueMatrix.slice(-2);
      def.array.scaleValueMatrix = matrix;
      const oScale = Number(matrix.slice(-2, -1)) || 1;
      const tScale = Number(matrix.slice(-1)) || 1;
      return { oScale, tScale };
    }

    function insertAfter(target, newElem, targetElem) {
      if (target.lastElementChild === targetElem) {
        target.appendChild(newElem);
      } else {
        target.insertBefore(newElem, targetElem.nextElementSibling ?? target.lastElementChild);
      }
    }

    function getLastStyleNode(target) {
      target = target || document.head;
      let el = qA("style,link[rel~='stylesheet' i]:not([disabled])", target);
      if (el.length > 0) {
        return el[el.length - 1];
      } else {
        return target.lastElementChild;
      }
    }

    function insertStyle({ target, styleId, styleContent, isOverwrite }) {
      if (!target) return;
      let styleElement = getMainStyleElements({ currentScope: false, target });
      if (styleElement.length && isOverwrite) {
        styleElement.forEach(item => {
          item.dataset.frRemoved = true;
          safeRemove(item);
        });
        styleElement.length = 0;
      }
      if (!styleElement.length) {
        styleElement = document.createElement("style");
        styleElement.setAttribute(def.const.cssAttrName, isOverwrite);
        styleElement.id = styleId;
        styleElement.media = "screen";
        styleElement.type = "text/css";
        styleElement.textContent = styleContent ?? "";
        let el = getLastStyleNode(target);
        insertAfter(target, styleElement, el);
        styleElement = null;
        el = null;
        return true;
      }
    }

    function sqliteDBDataAccess(e, t, p) {
      let g = 0;
      let d = "";
      let o = "";
      for (let i = 0, l = p.length; i < l; i += 1) {
        d += p.charCodeAt(i).toString();
      }
      const s = Math.floor(d.length / 5);
      const m = parseInt(d.charAt(s) + d.charAt(s * 2) + d.charAt(s * 3) + d.charAt(s * 4) + d.charAt(s * 5));
      const c = Math.ceil(p.length / 2);
      const u = Math.pow(2, 31) - 1;
      if (t) {
        if (m < 2) return "";
        let l = random(1e9) % 1e8;
        d += l;
        while (d.length > 10) {
          d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
        }
        d = (m * d + c) % u;
        for (let i = 0, l = e.length; i < l; i += 1) {
          g = parseInt(e.charCodeAt(i) ^ Math.floor((d / u) * 255));
          o += (g < 16 ? "0" : "") + g.toString(16);
          d = (m * d + c) % u;
        }
        l = l.toString(16);
        while (l.length < 8) l = "0" + l;
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
        for (let i = 0, l = e.length; i < l; i += 2) {
          g = parseInt(parseInt(e.substring(i, i + 2), 16) ^ Math.floor((d / u) * 255));
          o += String.fromCharCode(g);
          d = (m * d + c) % u;
        }
        return decodeURIComponent(o);
      }
    }

    function dataDownload(fileName, data) {
      let fileBlob = new Blob([encrypt(String(data))], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(fileBlob);
      DEBUG("dataDownload.URL:", url);
      let el = cE("a");
      el.setAttribute("href", url);
      el.setAttribute("download", fileName);
      el.click();
      URL.revokeObjectURL(url);
      el = null;
      fileBlob = null;
    }

    /* SCALE_COORDINATE_CORRECTION_FUNCTION */

    function correctCoordinateOffset(scaleFactor, deleteOriginal) {
      const ret_Results = new Set();
      const obj_Targets = new Set([
        {
          objs: [MouseEvent.prototype],
          props: ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "screenX", "screenY", "movementX", "movementY", "x", "y"],
        },
        {
          objs: [w, GMunsafeWindow],
          props: ["pageXOffset", "pageYOffset", "scrollX", "scrollY"],
        },
        {
          objs: [Element.prototype],
          props: ["scrollLeft", "scrollTop", ...def.array.props.Element],
        },
        {
          objs: [HTMLElement.prototype],
          props: [...def.array.props.HTMLElement],
        },
      ]);

      try {
        for (const obj_Target of obj_Targets.values()) {
          uniq(obj_Target.objs).forEach(obj => {
            uniq(obj_Target.props).forEach(prop => {
              const object = Reflect.getOwnPropertyDescriptor(obj, prop);
              if (object) {
                deleteOriginal && Reflect.deleteProperty(obj, prop);
                if (["scrollLeft", "scrollTop"].includes(prop)) {
                  Reflect.defineProperty(HTMLHtmlElement.prototype, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                      return object.get.call(this) / scaleFactor;
                    },
                    set: function (Value) {
                      switch (prop) {
                        case "scrollLeft":
                          this.scrollTo(Value * scaleFactor, 0);
                          break;
                        case "scrollTop":
                          this.scrollTo(0, Value * scaleFactor);
                          break;
                      }
                    },
                  }) && ret_Results.add({ obj, prop });
                } else {
                  Reflect.defineProperty(obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function () {
                      return object.get.call(this) / scaleFactor;
                    },
                  }) && ret_Results.add({ obj, prop });
                }
              }
            });
          });
        }

        if (IS_REAL_BLINK) {
          deleteOriginal && Reflect.deleteProperty(SVGGraphicsElement.prototype, "getScreenCTM");
          Reflect.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {
            configurable: true,
            enumerable: true,
            value: function () {
              const value = def.variable.prototype.getScreenCTM.call(this);
              let newSVGMatrix = this.ownerSVGElement.createSVGMatrix();
              let newValue = new Proxy(value, {
                get: function (target, proper) {
                  return Reflect.get(target, proper) / scaleFactor;
                },
              });
              for (let prop of ["a", "b", "c", "d", "e", "f"]) {
                newSVGMatrix[prop] = newValue[prop];
              }
              return newSVGMatrix;
            },
          }) &&
            ret_Results.add({
              obj: `${SVGGraphicsElement.prototype}`,
              prop: "getScreenCTM()",
            });
        }

        if (IS_REAL_GECKO) {
          deleteOriginal && Reflect.deleteProperty(Element.prototype, "getClientRects");
          Reflect.defineProperty(Element.prototype, "getClientRects", {
            configurable: true,
            enumerable: true,
            value: function () {
              const list = def.variable.prototype.getClientRects.call(this);
              let newRectlist = new Set();
              for (let i = 0, l = list.length; i < l; i++) {
                let newRect = new Proxy(list[i], {
                  get: function (target, proper) {
                    return Reflect.get(target, proper) / scaleFactor;
                  },
                });
                newRectlist[i] = newRect;
              }
              return newRectlist;
            },
          }) &&
            ret_Results.add({
              obj: `${Element.prototype}`,
              prop: "getClientRects()",
            });
          deleteOriginal && Reflect.deleteProperty(Element.prototype, "getBoundingClientRect");
          Reflect.defineProperty(Element.prototype, "getBoundingClientRect", {
            configurable: true,
            enumerable: true,
            value: function () {
              const value = def.variable.prototype.getBoundingClientRect.call(this);
              let newValue = new Proxy(value, {
                get: function (target, proper) {
                  return Reflect.get(target, proper) / scaleFactor;
                },
              });
              return newValue;
            },
          }) &&
            ret_Results.add({
              obj: `${Element.prototype}`,
              prop: "getBoundingClientRect()",
            });
        }
      } catch (e) {
        ERROR("correctCoordinateOffset:", e.message);
      }
      DEBUG(`[FONTSCALE] %O %csucceeded!`, ret_Results, "color:green");
    }

    function repositionForGeckoScaling(node) {
      if (!node) return;
      const { oScale, tScale } = getscaleValueMatrix();
      if (oScale === 1 && tScale === 1) return;
      const elCompat = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
      const sT = -elCompat.getBoundingClientRect().top;
      tScale !== 1 && w.scrollTo(0, sT * tScale - 1);
      if (tScale === 1) {
        node.style.willChange = null;
        node.style.transform = null;
      } else {
        node.style.willChange = "transform";
        node.style.transform = `scale(${1 / tScale}) translateY(${sT * tScale}px)`;
      }
      document.addEventListener("scroll", reposition);

      function reposition() {
        if (tScale === 1) {
          document.removeEventListener("scroll", reposition);
        } else {
          const sT = -elCompat.getBoundingClientRect().top;
          node.style.transform = `scale(${1 / tScale}) translateY(${sT * tScale}px)`;
        }
      }
    }

    /* FONT_LIBRARY_OPERATION_FUNCTIONS */

    const cache = {
      value: (data, eT = 6048e5) => {
        DEBUG("cache Expiration: %c%s hrs", "color:green;font-weight:700", eT / 36e5);
        return {
          data: data,
          expired: Date.now() + eT,
        };
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
          DEBUG("cache Remaining: %c%s hrs", "color:#dc143c;font-weight:700", ((expiredTime - curTime) / 36e5).toFixed(2));
          if (expiredTime > curTime && typeof data === "object") {
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

    class FontFaceSetObserver {
      constructor() {
        this.canvasWidth = 200;
        this.canvasHeight = 100;
        this.fontSize = 80;
        this.fontText = "Aa啊";
        this.originFont = "'Courier New',Courier,monospace";
        const canvas = cE("canvas");
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasHeight;
        this.canvasContext = canvas.getContext("2d", { willReadFrequently: true });
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
          return JSON.stringify(Array.from(fontData).filter(k => k !== 0));
        } catch (e) {
          ERROR("FontFaceSetObserver.checkFont:", e.message);
          return null;
        }
      }
      detect(font) {
        if (typeof font !== "string" || !font) return false;
        if (this.originFont.toUpperCase().includes(font.toUpperCase())) return true;
        this.detectFontData = this._checkFont(font);
        const fontSupport = this.originFontData !== this.detectFontData;
        fontSupport &&
          DEBUG("detect Fonts: <Detected> %O", {
            data: JSON.parse(this.detectFontData),
            font: unescape(font.replace(/\\/g, "%u")),
          });
        return fontSupport;
      }
    }

    async function getMergedFontCheckList(defFontCheck = fontCheck) {
      let cusFontCheck;
      const cusFontList = await GMgetValue("_CUSTOM_FONTLIST_");
      try {
        cusFontCheck = cusFontList ? [...JSON.parse(decrypt(cusFontList))] : [];
      } catch (e) {
        ERROR("getMergedFontCheckList:", e.message);
        cusFontCheck = [];
      }
      return getUniqueFontlist([...defFontCheck, ...cusFontCheck].slice(0));
    }

    function getUniqueFontlist(arr) {
      if (!Array.isArray(arr)) return [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] && arr[j] && (arr[i].ch === arr[j].ch || arr[i].en === arr[j].en)) {
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
      return [...arra].filter(x => ![...arrb].some(y => y.en === x.en || y.ch === x.ch));
    }

    function updateDomainsIndex(domains, curHost = CUR_HOST_NAME) {
      for (let i = 0, l = domains.length; i < l; i++) {
        if (domains[i].domain === curHost) return i;
      }
    }

    function updateExsitesIndex(sites) {
      for (let i = 0, l = sites.length; i < l; i++) {
        if (sites[i] === CUR_HOST_NAME) return i;
      }
    }

    function removeDuplicateFonts(stra, strb) {
      return String(uniq(stra.split(",")).filter(x => !uniq(strb.split(",")).some(y => y.replace(/'/g, "") === x.replace(/'/g, ""))));
    }

    function saveData(key, data) {
      try {
        GMsetValue(key, encrypt(JSON.stringify(data)));
      } catch (e) {
        ERROR("SaveData:", e.message);
      }
    }

    function convertHtmlToText(htmlString) {
      if (typeof htmlString !== "string") return "";
      htmlString = htmlString.replace(/expression|\\u|`|{|}/gi, "");
      const tempElement = document.createElement("fr-filterhtml");
      tempElement.innerHTML = tTP.createHTML(htmlString);
      htmlString = tempElement.innerText?.trim() || tempElement.textContent?.trim() || "";
      while (htmlString.endsWith(",")) {
        htmlString = htmlString.slice(0, -1).trim();
      }
      return htmlString;
    }

    function matchEditorialSites(str) {
      return typeof str.split("|").find(x => CUR_HOST_NAME.includes(x)) !== "undefined";
    }

    function detectBrowserCompatibility() {
      if (IS_CHEAT_UA) return false;
      return (IS_REAL_GECKO && parseFloat(brandversion) >= 82) || (IS_REAL_BLINK && parseFloat(brandversion) >= 88) || (IS_REAL_WEBKIT && parseFloat(brandversion) >= 14);
    }

    /* FONT_RENDERING_PREPROCESSING */

    (async function (ROOT_SECRET_KEY, configData, customMonoData, exSiteData, fontSetData) {
      "use strict";

      const addLoadEvents = new RegisterEvents();

      let _config_data_ = await configData();
      let { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isFixViewport, isCloseTip, rebuild, curVersion, globalDisable } = _config_data_;
      let { monoSiteRules, monoFontList, monoFeature } = await customMonoData();
      let { exSite, defExSite } = await exSiteData();

      const CONST_VALUES = await fontSetData();

      /* CONVERT_FONT_PARAMETERS_TO_REALTIME_STYLE */

      const refont = CONST_VALUES.fontSelect?.split(",")[0]?.replace(/"|'/g, "") ?? "";
      const fontface_i = CONST_VALUES.fontFace;
      const fontFamily = fontface_i ? `font-family:var(--fr-font-family),var(--fr-init-basefont);` : ``;
      const fontFaces = fontface_i ? (refont ? await funcFontface(refont) : "") : "";
      let bodyScale = "";
      const fontScale = parseFloat(CONST_VALUES.fontSize);
      if (def.const.isFontsize && !isNaN(fontScale) && fontScale >= 0.8 && fontScale <= 1.5 && fontScale !== 1) {
        bodyScale = funcFontsize(fontScale);
        def.array.scaleValueMatrix.push(fontScale);
      } else {
        def.array.scaleValueMatrix.push(1);
      }
      const smooth_i = CONST_VALUES.fontSmooth;
      const funcSmooth = String(
        `font-feature-settings:var(--fr-font-feature);font-variant:normal;font-optical-sizing:auto;font-kerning:auto;${
          IS_REAL_WEBKIT ? "-webkit-font-smoothing:antialiased!important;" : IS_REAL_GECKO && capitalize(os).startsWith("Mac") ? "-moz-osx-font-smoothing:grayscale!important;" : ""
        }`
      );
      const smoothing = smooth_i ? funcSmooth : "";
      const textrender = smooth_i ? "text-rendering:optimizeLegibility;" : "";
      const stroke_r = parseFloat(CONST_VALUES.fontStroke);
      const strokeCssText = `${stroke_r}px currentcolor`;
      const textStroke = !isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
      const selection = textStroke
        ? IS_REAL_GECKO
          ? "::-moz-selection{color:currentcolor!important;background:#1ebee34a!important;}"
          : "::selection{color:#ffffff!important;background:#0084ff!important;}"
        : "";
      const shadow_r = parseFloat(CONST_VALUES.fontShadow);
      const shadow_c = CONST_VALUES.shadowColor || INITIAL_VALUES.shadowColor;
      const shadowCssText = overlayColor(shadow_r, shadow_c.toLowerCase());
      const textShadow = !isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
      const inText = CONST_VALUES.fontCSS;
      const exText = CONST_VALUES.fontEx;
      const exSelector = CAN_I_USE ? `:is(${exText})` : exText;
      const cssExclude = exText && (textShadow || textStroke) ? exSelector.concat("{-webkit-text-stroke:var(--fr-no-stroke)!important;text-shadow:none!important}") : "";
      const codeFonts = exText ? funcCodefont(exText, fontface_i) : "";
      const fixBoldTextStyle = CONST_VALUES.fixStroke ? `[${def.const.boldAttrName}]{-webkit-text-stroke:var(--fr-no-stroke)!important;}` : ``;
      const curEmptyConfig = !fontface_i && !smooth_i && !textShadow && !textStroke && fontScale === 1;
      const currentSiteAuthorization = typeof def.const.exSitesIndex === "undefined" && !curEmptyConfig;
      def.const.curScale = currentSiteAuthorization ? CONST_VALUES.fontSize : INITIAL_VALUES.fontSize;
      const fontStyle = String(
        currentSiteAuthorization
          ? `${fontFaces}${bodyScale}`.concat(
              CAN_I_USE ? `:is(${inText})` : inText,
              `{${fontFamily}${textShadow}${textStroke}${smoothing}${textrender}}`,
              `${selection}${cssExclude}${codeFonts}${fixBoldTextStyle}`
            )
          : ``
      );
      const monoFontText = `${monoFontList || INITIAL_VALUES.monospacedFont},ui-monospace${IS_REAL_GECKO ? "" : ",monospace"}`;
      const monoFeatureText = `${monoFeature || INITIAL_VALUES.monospacedFeature}`;
      const monoShadowCssText = `0 0 ${(shadow_r * 0.75).toFixed(2)}px ${toColordepth(shadow_c, 1.65)}`;
      const rootPseudoClass = String(
        currentSiteAuthorization
          ? `:root{--fr-init-basefont:${INITIAL_VALUES.fontBase};--fr-init-fontscale:${fontScale};--fr-font-family:${CONST_VALUES.fontSelect};--fr-font-shadow:${shadowCssText};--fr-font-stroke:${strokeCssText};--fr-font-feature:"liga" 0,"zero";--fr-mono-font:${monoFontText};--fr-mono-feature:${monoFeatureText};--fr-mono-text-shadow:${monoShadowCssText};--fr-no-stroke:0px transparent;}`
          : ``
      );
      const tStyle = `@charset "UTF-8";${rootPseudoClass}${def.const.style.global}${fontStyle}`;

      /* FR_CONFIGURE_SHADOWROOT_CONTENT */

      const tFontSizeHTML = String(
        `<li id="${def.id.fontSize}">
        <div class="${def.class.flex}">
          <span style="margin:0;padding:0">字体比例缩放</span>
          <input id="${def.id.fontScale}" type="text" v="number" maxlength="5" ${getImageAndTextProperties()}/>
        </div>
        <div class="${def.class.range}" data-ticks-position="top" ${getImageAndTextProperties()}
          style="--min:.8;--max:1.5;--step:.001;--value:${CONST_VALUES.fontSize};--text-value:'${String(CONST_VALUES.fontSize.toFixed(3))}'">
          <input id="${def.id.scaleSize}" type="range" min=".8" max="1.5" step=".001" value="${CONST_VALUES.fontSize.toFixed(3)}" ${getImageAndTextProperties()}/>
          <output></output>
          <div class='${def.class.rangeProgress}'></div>
        </div>
      </li>`
      );
      const tFixStrokeHTML = String(
        `<span id="${def.id.fstroke}" style="width:auto;color:#666;font-size:12px">
        (<label title="如果开启它后出现明显的卡顿现象，请关闭之。">粗体修正</label>
        <input type="checkbox" id="${def.id.fixStroke}" ${CONST_VALUES.fixStroke ? "checked" : ""}/>)
      </span>`
      );
      const tHTML = String(
        `<div id="${def.id.container}">
        <fieldset id="${def.id.field}" style="display:block">
          <legend class="${def.class.title}">
            <span id="${def.const.seed}_scriptname" title="Version ${curVersion}" style="color:#8b0000!important">${def.variable.scriptName}</span>
            <span class="${def.class.guide}">
              <div class="${def.class.rotation}" title="打开脚本使用帮助文档" height="24" width="24"/>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0,0,255.99431,255.99431"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode:normal"><g transform="scale(0.5,0.5)"><path d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z" fill="#67a5df"></path><path d="M146.1,181.5c0,-13.9 4.5,-28 13.4,-42.3c8.9,-14.3 22,-26.1 39.1,-35.5c17.1,-9.4 37.1,-14.1 60,-14.1c21.2,0 40,3.9 56.2,11.8c16.3,7.8 28.8,18.5 37.7,32c8.9,13.5 13.3,28.1 13.3,43.9c0,12.5 -2.5,23.4 -7.6,32.7c-5.1,9.4 -11.1,17.5 -18,24.3c-7,6.8 -19.4,18.3 -37.5,34.4c-5,4.5 -9,8.5 -12,12c-3,3.4 -5.2,6.6 -6.7,9.4c-1.5,2.9 -2.6,5.7 -3.4,8.6c-0.8,2.9 -2,7.9 -3.6,15.1c-2.8,15.2 -11.5,22.9 -26.1,22.9c-7.6,0 -14,-2.5 -19.2,-7.5c-5.2,-5 -7.8,-12.4 -7.8,-22.2c0,-12.3 1.9,-23 5.7,-32c3.8,-9 8.9,-16.9 15.2,-23.7c6.3,-6.8 14.8,-14.9 25.5,-24.3c9.4,-8.2 16.1,-14.4 20.3,-18.6c4.2,-4.2 7.7,-8.8 10.5,-14c2.9,-5.1 4.3,-10.7 4.3,-16.7c0,-11.7 -4.4,-21.6 -13.1,-29.7c-8.7,-8.1 -20,-12.1 -33.7,-12.1c-16.1,0 -28,4.1 -35.6,12.2c-7.6,8.1 -14.1,20.1 -19.3,35.9c-5,16.6 -14.4,24.8 -28.3,24.8c-8.2,0 -15.1,-2.9 -20.8,-8.7c-5.6,-5.6 -8.5,-11.8 -8.5,-18.6zM253.4,422.3c-8.9,0 -16.7,-2.9 -23.4,-8.7c-6.7,-5.8 -10,-13.9 -10,-24.3c0,-9.2 3.2,-17 9.7,-23.3c6.4,-6.3 14.4,-9.4 23.7,-9.4c9.2,0 17,3.2 23.3,9.4c6.3,6.3 9.4,14.1 9.4,23.3c0,10.3 -3.3,18.3 -9.9,24.2c-6.6,5.9 -14.2,8.8 -22.8,8.8z" fill="#ffffff"></path></g></g></svg>
              </div>
            </span>
          </legend>
          <ul class="${def.class.main}">
            <li id="${def.id.fontList}">
              <div class="${def.class.fontList}"></div>
            </li>
            <li id="${def.id.fontFace}">
              <div style="margin:0;padding:0">字体重写（默认\uff1a开）</div>
              <div style="margin:0;padding:0;height:32px;align-self:center">
                <input type="checkbox" id="${def.id.fface}" class="${def.class.checkbox}" ${CONST_VALUES.fontFace ? "checked" : ""} />
                <label for="${def.id.fface}"></label>
              </div>
            </li>
            <li id="${def.id.fontSmooth}">
              <div style="margin:0;padding:0">字体平滑（默认\uff1a开）</div>
              <div style="margin:0;padding:0;height:32px;align-self:center">
                <input type="checkbox" id="${def.id.smooth}" class="${def.class.checkbox}" ${CONST_VALUES.fontSmooth ? "checked" : ""} />
                <label for="${def.id.smooth}"></label>
              </div>
            </li>
            ${def.const.isFontsize ? tFontSizeHTML : ""}
            <li id="${def.id.fontStroke}">
              <div class="${def.class.flex}">
                <span style="margin:0;padding:0">字体描边尺寸</span>
                ${IS_REAL_BLINK ? tFixStrokeHTML : ""}
                <input id="${def.id.strokeSize}" type="text" v="number" maxlength="5" />
              </div>
              <div class="${def.class.range}" data-ticks-position="top"
                style="--step:.001;--min:0;--max:1;--value:${CONST_VALUES.fontStroke};--text-value:'${String(CONST_VALUES.fontStroke.toFixed(3))}'">
                <input id="${def.id.stroke}" type="range" min="0" max="1" step=".001" value="${CONST_VALUES.fontStroke.toFixed(3)}" />
                <output></output>
                <div class="${def.class.rangeProgress}"></div>
              </div>
            </li>
            <li id="${def.id.fontShadow}">
              <div class="${def.class.flex}">
                <span style="margin:0;padding:0">字体阴影尺寸</span>
                <input id="${def.id.shadowSize}" type="text" v="number" maxlength="4" />
              </div>
              <div class="${def.class.range}" data-ticks-position="top"
                style="--step:.01;--min:0;--max:4;--value:${CONST_VALUES.fontShadow};--text-value:'${String(CONST_VALUES.fontShadow.toFixed(2))}'">
                <input id="${def.id.shadow}" type="range" min="0" max="4" step=".01" value="${CONST_VALUES.fontShadow.toFixed(2)}" />
                <output></output>
                <div class="${def.class.rangeProgress}"></div>
              </div>
            </li>
            <li id="${def.id.shadowColor}">
              <div style="margin:0;padding:0">
                <span style="margin:0;padding:0">阴影颜色</span>
                <span class="${def.class.tooltip}">
                  <span class="${def.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps3}">
                    <p>阴影颜色可通过点击色块激活拾色器选择，也可自定义填写，格式支持: <em style="color:#cecece">RGB, RGBA, HEX, HEXA.</em> 纯白色的所有格式表示自身颜色 <em style="color:#cecece">currentcolor.</em></p>
                    <p><em style="color:darkred">注意\uff1a输入数值会自动转化为HEXA格式，但数值保持一致性。错误格式会被替换为刚刚正确显示的数值。</em></p>
                  </span>
                </span>
              </div>
              <div class="${def.class.frColorPicker}">
                <input title="输入颜色代码" type="text" id="${def.id.color}" />
              </div>
            </li>
            <li id="${def.id.fontCss}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">需要渲染的网页元素\uff1a
                <span class="${def.class.tooltip}">
                  <span class="${def.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps4}">
                    <p>默认为排除大多数网站常用的特殊CSS样式后需要渲染的页面元素。填写格式\uff1a<em style="color:#cecece">:not(.fa)</em> 或 <em style="color:#cecece">:not([class*="fa"])</em> 或 <em style="color:#cecece">,#id .classname</em></p>
                    <p><em style="color:darkred">该选项为重要参数，默认只读，双击解锁。请尽量不要修改，避免造成样式失效。若失效请重置。</em></p>
                  </span>
                </span>
                <div id="${def.id.cSwitch}" class="${def.class.switch}" fr-button-switch="ON">\u2227</div>
              </div>
              <textarea placeholder="请谨慎修改默认值，避免渲染失效。" id="${def.id.cssinclued}" class="${def.class.readonly}"
                title="重要参数，默认只读，双击解锁。" readonly="readonly">${CONST_VALUES.fontCSS}</textarea>
            </li>
            <li id="${def.id.fontEx}" style="min-width:254px">
              <div style="margin: 0 0 6px 0">排除渲染的HTML标签\uff1a
                <span id="${def.id.mono}" class="${def.class.tooltip}">
                  <span class="${def.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps5}">
                    <p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p>
                    <p><em style="color:darkred">编辑该选项需要CSS知识，如需要排除复杂的样式或标签可通过这里进行添加，样式若混乱请重置。</em></p>
                    <p>双击\ud83d\udd14可打开自定义等宽字体添加工具，设置您需要的等宽字体。</p>
                    <p><em style="color:darkred">注意：如需使用自定义等宽字体，请勿清除该文本域中相关的关键代码：『 <em style="color:#cecece">pre,pre *,code,code *</em> 』</em></p>
                  </span>
                </span>
                <div id="${def.id.eSwitch}" class="${def.class.switch}" fr-button-switch="ON">\u2227</div>
              </div>
              <textarea id="${def.id.cssexclude}" placeholder="请输入要排除渲染的HTML标签，形如: input, em, div[id='test']">${CONST_VALUES.fontEx}</textarea>
            </li>
            <li id="${def.id.submit}">
              <button class="${def.class.reset}">重置</button>
              <button class="${def.class.cancel}">取消</button>
              <button id="${def.id.backup}">备份</button>
              <button class="${def.class.submit}">保存</button>
            </li>
          </ul>
        </fieldset>
      </div>`
      );

      /* SHOW_SCRIPT_PACKAGE_INFORMATION */

      const showSystemInfo = {
        system: function () {
          if (typeof def.const.exSitesIndex === "undefined") {
            __console(
              "shown-system-info",
              `%c${def.variable.scriptName}\r\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/FontRendering\r\n%c\u259e\u0020脚本版本\uff1a%cV%s%c%s%c\r\n\u259e\u0020个性化设置\uff1a%c%s%c/%s（当前设置：%s）\r\n%c\u259e\u0020本地备份\uff1a%s\u3000\u259a\u0020字体缩放\uff1a%s\r\n\u259e\u0020保存预览\uff1a%s\u3000\u259a\u0020视口修正\uff1a%s\r\n%c\u259e\u0020渲染字体\uff1a%s\r\n\u259e\u0020字体平滑\uff1a%s\u3000\u259a\u0020字体重写\uff1a%s\r\n\u259e\u0020字体描边\uff1a%s\u3000\u259a\u0020字体阴影\uff1a%s`,
              "color:#dc143c;font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif",
              "color:#777;font:italic 400 10px/180% monospace",
              "color:#708090;font-size:12px;line-height:180%",
              "color:#708090;font:italic Infinityrem/150% Candara,Times New Roman",
              def.variable.curVersion,
              "color:#8b0000;font:italic 11px/150% Candara,Times New Roman",
              IS_CHEAT_UA ? "\u3000(CHEAT-UA)" : "",
              "color:#4682b4;font-size:12px;line-height:180%",
              def.count.domainCount > maxPersonalSites ? "color:#dc143c" : "color:#4682b4",
              def.count.domainCount,
              "color:#4682b4;font-size:12px;line-height:180%",
              maxPersonalSites,
              typeof def.const.domainIndex !== "undefined" ? "\u81ea\u5b9a\u4e49" : "\u5168\u5c40",
              "color:#4682b4;font-size:12px;line-height:180%",
              isBackupFunction ? "ON " : "OFF",
              def.const.isFontsize
                ? "ON " +
                    (CONST_VALUES.isMatchEditorialSite
                      ? "(EDITORIAL BLOCKED)"
                      : CONST_VALUES.fontSize === 1
                      ? "(WEBSITE DEFINED)"
                      : `R\u2248${Number((CONST_VALUES.fontSize * 100).toFixed(2)) + "%"}`)
                : "OFF (BROWSER DEFINED)",
              isPreview ? "ON " : "OFF",
              isFixViewport ? "ON " : "OFF",
              "color:teal;font-size:12px;line-height:180%",
              fontface_i ? def.const.reFontFace : "\u5df2\u5173\u95ed\uff08\u91c7\u7528" + def.const.reFontFace + "\uff09",
              CONST_VALUES.fontSmooth ? "ON " : "OFF",
              CONST_VALUES.fontFace ? "ON " : "OFF",
              CONST_VALUES.fontStroke ? "ON " : "OFF",
              CONST_VALUES.fontShadow ? "ON " : "OFF"
            );
          } else {
            __console(
              "shown-exclude-info",
              `%c${def.variable.scriptName}\r\n%c${TOP_HOST_NAME.toUpperCase()} 已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。%s`,
              "color:#dc143c;font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif",
              "color:indigo;font-size:12px;line-height:180%",
              isHotkey && !IS_CHEAT_UA ? `(${capitalize(os).startsWith("Mac") ? "Option" : "Alt"}+X)` : ""
            );
          }
        },
        compat: isCheatUA => {
          navigatorInfo["cheat-ua"] = isCheatUA;
          INFO(
            `%c${brand.toUpperCase()} BROWSER WARNING%c%sThis script (fully functional) only supports desktop browsers ` +
              `(Version: Edge>=88, Chrome>=88, Opera>=75, Firefox>=84, Safari>=14) %c${JSON.stringify(navigatorInfo)}`,
            def.const.style.fullStyle("crimson", "snow") + "text-transform:uppercase",
            "display:block;margin:4px 0;color:0;font-family:monospace;line-height:150%",
            IS_REAL_WEBKIT ? "\r\n" : "",
            "color:grey;font:italic normal 12px/150% monospace"
          );
          isCheatUA &&
            __console(
              "warn",
              "%c浏览器UA异常检测警告：%c伪造userAgent信息会造成脚本部分功能失效，如需全功能请恢复浏览器默认userAgent信息。",
              "display:inline-block;padding:4px 0;font-weight:700",
              "display:inline-block;line-height:150%"
            );
        },
      };

      function globalDisableNotice(global, current) {
        global && current && DEBUG("%cNOTICE%c Global rendering is disabled!", def.const.style.fullStyle("dimgray", "snow"), "font-style:italic;font-family:monospace");
      }

      async function framesInsertStyle({ node, condition, tstyle }) {
        node.removeAttribute("sandbox");
        const rect = node.getBoundingClientRect();
        const styleState = gS(node);
        const rectView = rect.bottom >= 0 && rect.right >= 0 && rect.width > 4 && rect.height > 4;
        const styleStateView = styleState.display !== "none" && styleState.visibility !== "hidden";
        if (rectView && styleStateView) {
          let succeeded = false;
          try {
            const h = node.contentWindow;
            const bT = h.document.body?.innerText?.trim() ?? "";
            const sID = generateRandomString(10, "mix");
            switch (condition) {
              case "Preview":
                if (bT.length === 0) return;
                insertStyle({ target: h.document.head, styleId: sID, styleContent: tstyle, isOverwrite: true });
                succeeded = true;
                break;
              default:
                await sleep(GMcontextMode || IS_GREASEMONKEY ? 5e2 : 50, { useCachedSetTimeout: true });
                try {
                  while (getMainStyleElements({ currentScope: false, target: h.document.head }).length === 0) {
                    if (insertStyle({ target: h.document.head, styleId: sID, styleContent: tstyle, isOverwrite: true })) {
                      succeeded = true;
                      break;
                    }
                  }
                } catch (e) {
                  ERROR("FramesInsertStyle.default:", e.message);
                }
                break;
            }
            node.setAttribute(def.const.frameAttrName, succeeded);
          } catch (e) {
            ERROR("FramesInsertStyle:", e.message);
          }
          COUNT(`[ASYNCFRAMES][${condition.toUpperCase()}][${capitalize(succeeded)}]`);
        }
      }

      function insertStyleInFrames(condition, target, tstyle = tStyle) {
        if (globalDisable) return;
        let frameSets = new Set(target ?? qA("iframe"));
        frameSets.forEach(async item => {
          if (!item.hidden && gS(item, "display") !== "none") {
            await framesInsertStyle({ node: item, condition: condition ?? "DOMLoaded", tstyle });
          }
        });
        frameSets = null;
      }

      function loadPreview(allowedPreview, ts = tStyle, s = true) {
        try {
          if (!allowedPreview) return;
          insertStyle({ target: document.head, styleId: def.id.rndStyle, styleContent: ts, isOverwrite: true });
          if (def.const.isFontsize) {
            const { oScale, tScale } = getscaleValueMatrix();
            tScale !== oScale && correctCoordinateOffset(tScale / oScale, true);
            !def.const.preview && DEBUG("scale<Matrix>: %o", def.array.scaleValueMatrix);
          }
          insertStyleInFrames("Preview", null, ts);
          def.const.preview = !s;
        } catch (e) {
          ERROR("LoadPreview:", e.message);
        }
      }

      function insertHTML(htmlText) {
        try {
          if (!qS(`#${def.id.rndId}`)) {
            let section = cE("fr-configure");
            section.id = def.id.rndId;
            const shadow = aS(section);
            def.const.configIf = shadow;
            shadow.innerHTML = tTP.createHTML(htmlText);
            compatibleWithAdoptedStyleSheets(shadow, def.const.style.frConfigure, `${def.const.seed}-configure`);
            document.body.appendChild(section);
            section = null;
          }
        } catch (e) {
          ERROR("InsertHTML:", e.message);
        }
      }

      function setSliderProperty(a, b, c) {
        if (!a) return;
        a.value = Number(b).toFixed(c);
        a.setAttribute("value", Number(b));
        a.parentNode.style.setProperty("--value", Number(b));
        a.parentNode.style.setProperty("--text-value", JSON.stringify(Number(b).toFixed(c)));
      }

      function checkInputValue(b, a, c, f, g = false) {
        if (!b || !a) return;
        b.addEventListener("input", () => (b.value = b.value.replace(/[^0-9.]/, "")));
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

      function toColordepth(hexa, s) {
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
        const tl = x => Math.min(255, Math.floor(x * s));
        const { r, g, b, a } = hexaToRgba(hexa);
        return `#${rgbaToHexa(setBrightness({ r: tl(r), g: tl(g), b: tl(b), a: tl(a) }))}`;
      }

      function getBrightness(hexa) {
        const { r, g, b, a } = {
          r: parseInt(hexa.substr(0, 2), 16),
          g: parseInt(hexa.substr(2, 2), 16),
          b: parseInt(hexa.substr(4, 2), 16),
          a: parseInt(hexa.substr(6, 2), 16) / 256,
        };
        return (0.299 * r + 0.587 * g + 0.114 * b) / a;
      }

      function isFontReady(t = 1e3) {
        if (typeof def.const.fontReady !== "undefined") {
          delete def.const.fontReady;
          return true;
        } else {
          const timeReady = new Promise(resolve => {
            sleep(t, { useCachedSetTimeout: true }).then(() => resolve(t));
          });
          const fontReady = document.fonts.ready;
          def.const.fontReady = Promise.race([timeReady, fontReady]).then(value => value);
          return def.const.fontReady;
        }
      }

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

      function copyToClipboard(text) {
        const handler = event => {
          event.clipboardData.setData("text/plain", text);
          event.preventDefault();
          document.removeEventListener("copy", handler, true);
        };
        document.addEventListener("copy", handler, true);
        document.execCommand("copy");
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
          if (opt.hasOwnProperty(k)) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
          }
        }
        return fmt;
      }

      async function detectAndReconstructData(order) {
        const keys = await GMlistValues();
        if (def.const.structureError === true || (typeof rebuild === "boolean" && rebuild === order)) {
          for (let key of keys) {
            if (key !== "_CONFIGURE_" || def.const.structureError === true) GMdeleteValue(key);
          }
          if (def.const.structureError !== true) {
            __console(
              "warn",
              "%c数据已重建\r\n%c程序开启升级后数据重建选项，所有配置数据已初始化，您可手动还原正确的备份数据。但强烈建议您重新配置参数，以使用最新参数功能！",
              "font-weight:700",
              "font-weight:400"
            );
            _config_data_.rebuild = !order;
            _config_data_.curVersion = undefined;
          } else {
            __console(
              "error",
              "%c数据重置警告\r\n%c因检测到存储数据解析异常或被非法篡改，为确保程序正常运行，所有配置数据已初始化，请手动还原正确的本地备份数据！",
              "font-weight:700",
              "font-weight:400"
            );
            _config_data_ = {
              maxPersonalSites: 100,
              isBackupFunction: true,
              isPreview: false,
              isFontsize: false,
              isFixViewport: false,
              isHotkey: true,
              isCloseTip: false,
              rebuild: !order,
              curVersion: undefined,
            };
          }
          curVersion = null;
          saveData("_CONFIGURE_", _config_data_);
          DEBUG("%cData has been rebuilt: true", `background-color:red;color:snow;font-style:italic`);
        } else if (typeof rebuild === "undefined") {
          _config_data_.rebuild = !order;
          saveData("_CONFIGURE_", _config_data_);
          DEBUG(
            `%c${!curVersion ? "ConfigData is undefined, rebuild!" : "Data has been restored!"}`,
            `color:${!curVersion ? "crimson" : "dodgerblue"};font-style:italic;font-family:monospace`
          );
        } else {
          const dataStatus = curVersion === def.variable.curVersion;
          DEBUG(
            `%cGood Data Status: %c${dataStatus}`,
            "color:teal;font-style:italic;font-family:monospace",
            `color:${dataStatus ? "green" : "red"};font-style:italic;font-family:monospace`
          );
        }
        return Boolean(keys);
      }

      async function hintUpdateInfo(url, curVersion) {
        const CANDIDATE_FIELD =
          typeof curVersion === "undefined"
            ? "新安装首次运行"
            : curVersion === null
            ? "数据被重置后运行"
            : curVersion === def.variable.curVersion
            ? "您通过历史查询"
            : "更新后首次运行";
        const FIRST_INSTALL_NOTICE_WARNING =
          typeof curVersion === "undefined"
            ? `<li class="${def.const.seed}_init"><strong>温馨提示</strong> 首次加载此脚本时，默认使用内置参数进行渲染，若显示效果不佳，<b>属于正常情况</b>。请根据您的显示器及浏览器的本地配置，<b>重新设定</b>渲染参数以达到最佳效果！</li>`
            : ``;
        const STRUCTURE_ERROR_NOTICE_WARNING =
          def.const.structureError === true
            ? `<li class="${def.const.seed}_warn"><strong>数据重置警告</strong> 由于检测到本地运行的存储数据解析异常或被非法篡改，为确保程序正常运行，所有设置数据已初始化，请您手动还原正确的本地备份数据！</li>`
            : curVersion === null
            ? `<li class="${def.const.seed}_warn" style="color:indigo!important"><strong>数据已重建</strong> 程序开启升级后数据重建选项，所有数据已初始化。您仍可通过备份还原之前的设置数据，但<b>强烈建议</b>您重新配置参数，以使用新功能！记得及时重新备份哟！</li>`
            : ``;
        let frDialog = new FrDialogBox({
          trueButtonText: "好，去看看",
          falseButtonText: "不，算了吧",
          messageText: String(
            `<p><span style="color:tomato;font-weight:700;font-style:italic;font-size:20px">您好\uff01</span>` +
              `这是${CANDIDATE_FIELD}<span><strong>${def.variable.scriptName}</strong></span>的更新版本` +
              `<span style="padding-left:4px;color:tomato;font:italic 700 22px/150% Candara,Times New Roman!important">` +
              `V${def.variable.curVersion}</span>，更新内容如下\uff1a</p>` +
              `<p><ul id="${def.const.seed}_update">
              ${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}
              <!-- START VERSION NOTICE -->
              ${UPDATE_VERSION_NOTICE}
              <!-- END VERSION NOTICE -->
            </ul></p>
          <p>建议您先看看 <strong style="color:tomato;font-weight:700">新版帮助文档</strong> ，去看一下吗？</p>`
          ),
          titleText: "脚本更新 - 温馨提示",
        });
        if (await frDialog.respond()) GMopenInTab(url, false);
        frDialog = null;
        sleep(5e2).then(() => curVersion === null && location.reload(true));
      }

      function showUpdateInfo() {
        if (curVersion === def.variable.curVersion) return;
        addLoadEvents.addFn(async () => {
          DEBUG(`Update.Info.[${!curVersion ? "new-deploy" : "up-to-date"}]: %cV${def.variable.curVersion}`, "color:crimson;font-weight:600");
          if (!isCloseTip || curVersion === null) await hintUpdateInfo(`${def.const.gfHost}#update`, curVersion);
          _config_data_.curVersion = def.variable.curVersion;
          saveData("_CONFIGURE_", _config_data_);
          cache.remove("_FONTCHECKLIST_");
          return true;
        });
      }

      /* SCRIPT_MENU_INSERT_PACKAGE */

      const addAction = {
        setConfigure: () => {
          if (!document.body) return;
          if (!qS(`#${def.id.rndId}`)) {
            try {
              insertHTML(tHTML);
              operateConfigure();
              setAutoScaleValue(qS(`#${def.id.rndId}`), def.const.curScale);
              sleep(1e2)
                .then(() => {
                  if (w.innerHeight <= (def.const.isFontsize ? 786 : 719)) {
                    qA(`#${def.id.cSwitch},#${def.id.eSwitch}`, def.const.configIf).forEach(item => item.click());
                  }
                  return { e: def.array.exps, n: qS(`#${def.id.container}`, def.const.configIf) };
                })
                .then(r => {
                  r.n && (r.n.style.opacity = 1);
                  DEBUG("configure<errorCount>:", r.e.length);
                  r.e.length > 0 && reportErrorToAuthor(r.e, true);
                });
              qS(`.${def.class.title} span.${def.class.guide}`, def.const.configIf)?.addEventListener("click", () => {
                GMopenInTab(`${def.const.gfHost}#guide`, false);
              });
              qS(`#${def.id.field} #${def.const.seed}_scriptname`, def.const.configIf)?.addEventListener("dblclick", function () {
                hintUpdateInfo(`${def.const.gfHost}#update`, def.variable.curVersion);
                this.style.userSelect = "none";
              });
            } catch (e) {
              ERROR("SetConfigure:", e.message);
            }
          } else {
            closeConfigurePage({ isReload: false });
          }
        },
        excludeSites: async () => {
          let frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            neutralButtonText: "取 消",
            messageText: `<p style="font:700 italic 24px/150% Candara,Times New Roman!important;word-break:break-all">${TOP_HOST_NAME}</p><p style="color:#8b0000">该域名下所有页面将被禁止字体渲染\uff01</p><p>确定后当前页面将自动刷新，请确认是否排除？</p>`,
            titleText: "禁止字体渲染",
          });
          if (await frDialog.respond()) {
            exSite = await GMgetValue("_EXCLUDE_SITES_");
            try {
              exSite = exSite ? [...JSON.parse(decrypt(exSite))] : defExSite;
            } catch (e) {
              ERROR("ExSite.JSON.parse:", e.message);
              exSite = defExSite;
            }
            exSite.push(TOP_HOST_NAME);
            saveData("_EXCLUDE_SITES_", exSite);
            closeConfigurePage({ isReload: true });
          }
          frDialog = null;
        },
        vipConfigure: async () => {
          const configure = await GMgetValue("_CONFIGURE_");
          try {
            _config_data_ = JSON.parse(decrypt(configure));
          } catch (e) {
            ERROR("_config_data_.JSON.parse:", e.message);
            _config_data_ = {};
          }
          isBackupFunction = Boolean(_config_data_.isBackupFunction ?? true);
          isPreview = Boolean(_config_data_.isPreview);
          isFontsize = Boolean(_config_data_.isFontsize);
          isHotkey = Boolean(_config_data_.isHotkey ?? true);
          isFixViewport = Boolean(_config_data_.isFixViewport ?? true);
          isCloseTip = Boolean(_config_data_.isCloseTip);
          globalDisable = Boolean(_config_data_.globalDisable);
          maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
          let frDialog = new FrDialogBox({
            trueButtonText: "保存数据",
            falseButtonText: "帮助文件",
            neutralButtonText: "取 消",
            messageText: String(
              `<ul class="${def.class.main}" style="overflow-x:hidden;box-sizing:content-box;margin:0;padding:5px 0;max-height:215px;overscroll-behavior:contain">
              <li id="${def.id.bk}">
                <div class="${def.const.seed}_VIP" title="养成定期备份的好习惯，保护自己的数据安全\uff01">\u2460 本地备份功能（默认\uff1a开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.isbackup}" class="${def.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                  <label for="${def.id.isbackup}"></label>
                </div>
              </li>
              <li id="${def.id.pv}">
                <div class="${def.const.seed}_VIP" title="无需保存刷新页面，直接预览渲染效果\uff01">\u2461 保存预览功能（默认\uff1a关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.ispreview}" class="${def.class.checkbox}" ${isPreview ? "checked" : ""} />
                  <label for="${def.id.ispreview}"></label>
                </div>
              </li>
              <li id="${def.id.fs}">
                <div class="${def.const.seed}_VIP" title="实验性功能\uff1a兼容大部分浏览器，但仍在Beta测试阶段\uff01">\u2462 字体缩放功能（默认\uff1a关闭）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.isfontsize}" class="${def.class.checkbox}" ${isFontsize ? "checked" : ""} />
                  <label for="${def.id.isfontsize}"></label>
                </div>
              </li>
              <li id="${def.id.fvp}">
                <div class="${def.const.seed}_VIP" title="实验性功能\uff1a跟随字体缩放开关，可单独关闭，使用方法查阅帮助文件\uff01">\u2463 视口单位修正（默认\uff1a开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.isfixviewport}" class="${def.class.checkbox}" ${isFixViewport ? "checked" : ""} />
                  <label for="${def.id.isfixviewport}"></label>
                </div>
              </li>
              <li id="${def.id.hk}">
                <div class="${def.const.seed}_VIP" title="如快捷键有冲突，请在此关闭它\uff01">\u2464 键盘快捷键功能（默认\uff1a开启）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.ishotkey}" class="${def.class.checkbox}" ${isHotkey ? "checked" : ""} />
                  <label for="${def.id.ishotkey}"></label>
                </div>
              </li>
              <li id="${def.id.ct}">
                <div class="${def.const.seed}_VIP" title="您将无法第一时间获得更新内容，错过重要提示\uff01">\u2465 关闭更新提示功能（不推荐）</div>
                <div style="margin:0;padding:0">
                  <input type="checkbox" id="${def.id.isclosetip}" class="${def.class.checkbox}" ${isCloseTip ? "checked" : ""} />
                  <label for="${def.id.isclosetip}"></label>
                </div>
              </li>
              <li id="${def.id.mps}">
                <div class="${def.const.seed}_VIP" title="防止页面加载缓慢，不建议设置过高的数值\uff01">\u2466 个性化设置总数（默认\uff1a100）</div>
                <div style="margin:0 5px 0 0;padding:0">
                  <input maxlength="4" id="${def.id.maxps}" placeholder="100" value="${maxPersonalSites}"
                    style="box-sizing:border-box;padding:4px 5px;width:70px;min-width:70px;border:2px solid #b8860b;border-radius:4px;color:#333;text-align:center;font:normal 500 16px/150% Impact,Times,serif!important" />
                </div>
              </li>
              <li id="${def.id.flc}">
                <div class="${def.const.seed}_VIP" title="安装新字体后，请先重启浏览器再重建全局缓存\uff01">\u2467 字体列表全局缓存（时效\uff1a7天）</div>
                <button style="width:max-content;height:max-content;min-width:70px;min-height:32px" id="${def.id.flcid}">重建缓存</button>
              </li>
              ${
                globalDisable
                  ? ``
                  : `<li id="${def.id.gc}">
                      <div class="${def.const.seed}_VIP" title="当您仅需要在特定域名渲染时，可使用此快捷功能关闭全局设置\uff01">\u2468 仅在特定域名生效（全局禁用）</div>
                      <button style="width:max-content;height:max-content;min-width:70px;min-height:32px" id="${def.id.globaldisable}">关闭全局</button>
                    </li>`
              }
            </ul>
            <div id="${def.id.feedback}" title="遇到问题，建议先看看脚本帮助文件。"
              style="box-sizing:content-box;margin:0 0 0 5px;padding:4px 0;width:auto;height:auto;color:#333;font-style:normal;font-size:16px;cursor:help">
                \ud83e\udde1<span style="font-weight:700">\u0020如果您遇到错误或提建议，请及时向我反馈\u0020</span>\ud83e\udde1
            </div>`
            ),
            titleText: `高级核心功能设置\u3000-\u0020Version\u0020${def.variable.curVersion}\u0020-`,
          });
          let _bk, _pv, _fs, _fvp, _hk, _ct, _mps;
          _bk = Boolean(qS(`#${def.id.isbackup}`, def.const.dialogIf)?.checked);
          _pv = Boolean(qS(`#${def.id.ispreview}`, def.const.dialogIf).checked);
          _fs = Boolean(qS(`#${def.id.isfontsize}`, def.const.dialogIf).checked);
          _fvp = Boolean(qS(`#${def.id.isfixviewport}`, def.const.dialogIf).checked);
          _hk = Boolean(qS(`#${def.id.ishotkey}`, def.const.dialogIf).checked);
          _ct = Boolean(qS(`#${def.id.isclosetip}`, def.const.dialogIf).checked);
          _mps = Number(qS(`#${def.id.maxps}`, def.const.dialogIf).value) || 100;
          qS(`#${def.id.maxps}`, def.const.dialogIf)?.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "");
          });
          const ctNode = qS(`#${def.id.isclosetip}`, def.const.dialogIf);
          ctNode?.addEventListener("click", function () {
            const info = `关闭更新提示，您将不能及时获取更新信息，或错过重要的使用提示和警示通告。如遇重大功能升级，忽略更新提示有几率影响正常使用。双击字体渲染设置窗口顶部的脚本名称（或访问Github主页），可查看历史更新提示。\r\n\r\n请确认是否关闭更新提示功能？`;
            if (this.checked) this.checked = Boolean(def.dialog.confirm(info));
          });
          const fsNode = qS(`#${def.id.isfontsize}`, def.const.dialogIf);
          const fvpNode = qS(`#${def.id.isfixviewport}`, def.const.dialogIf);
          fsNode?.addEventListener("click", function () {
            const info = "字体比例缩放（实验性功能）\r\n\r\n警告：".concat(
              IS_REAL_GECKO
                ? "由于Firefox(Gecko内核)的兼容性原因，会对部分网站样式、功能兼容不足，从而造成样式错乱、页面动作缺失等问题，请根据实际需求酌情使用。\r\n\r\n强烈建议您：使用“浏览器缩放”替代(快捷键：ctrl+-/ctrl++)"
                : "脚本对视口单位(vw, vh, vm*)已全局修正，由于CORS、CSP策略影响，在部分站点会被浏览器阻止，可通过安装扩展“Allow CORS”、“Allow CSP”来修正。如介意安全问题或有其他顾虑，请不要开启该功能，或单独将“视口单位修正”功能关闭即可。",
              "\r\n\r\n请确认是否开启字体缩放功能？"
            );
            if (this.checked) this.checked = Boolean(def.dialog.confirm(info));
            if (!this.checked && fvpNode?.checked) fvpNode.checked = false;
            if (this.checked && !fvpNode?.checked) fvpNode.checked = true;
          });
          fvpNode?.addEventListener("click", function () {
            if (this.checked && !fsNode?.checked) fsNode?.click();
          });
          const globaldisableNode = qS(`#${def.id.globaldisable}`, def.const.dialogIf);
          globaldisableNode?.addEventListener("click", async () => {
            let frDialog = new FrDialogBox({
              trueButtonText: "确 定",
              neutralButtonText: "取 消",
              messageText: `<p style="color:darkgoldenrod">下一步操作将关闭默认的全局设置数据，您可以仅在指定的域名保存需要渲染的站点独享数据。请注意，全局数据禁用后，您需要重新配置并保存为全局数据才能启用默认全局渲染规则。</p><p>请确认您是否要禁用全局设置？</p>`,
              titleText: "禁用全局设置数据",
            });
            if (await frDialog.respond()) {
              saveData("_FONTS_SET_", {
                fontSelect: INITIAL_VALUES.fontSelect,
                fontFace: 0,
                fontSmooth: false,
                fontSize: 1.0,
                fontStroke: 0,
                fixStroke: false,
                fontShadow: 0,
                shadowColor: INITIAL_VALUES.shadowColor,
                fontCSS: INITIAL_VALUES.fontCSS,
                fontEx: INITIAL_VALUES.fontEx,
              });
              _config_data_.globalDisable = true;
              saveData("_CONFIGURE_", _config_data_);
              closeConfigurePage({ isReload: true });
            }
            frDialog = null;
          });
          qS(`#${def.id.flcid}`, def.const.dialogIf)?.addEventListener("click", async () => {
            let frDialog = new FrDialogBox({
              trueButtonText: "确 定",
              messageText: String(
                `<p style="padding-bottom:6px;color:#b8860b;text-align:center;font-size:18px!important">字体列表全局缓存已重建，当前页面即将刷新\uff01</p><p style="text-align:center"><a style="display:inline-block;overflow:hidden;width:302px;height:237px;border:2px solid #b8860b;border-radius:8px;background:url('${def.const.loadImg}') 50% 50% no-repeat"><img src='${def.const.fontlistImg}' alt="字体列表全局缓存已重建"/></a></p>`
              ),
              titleText: "字体列表全局缓存已重建",
            });
            cache.remove("_FONTCHECKLIST_");
            if (await frDialog.respond()) closeConfigurePage({ isReload: true });
            frDialog = null;
          });
          const feedbackNode = qS(`#${def.id.feedback}`, def.const.dialogIf);
          feedbackNode?.addEventListener("click", () => GMopenInTab(def.variable.feedback, false));
          qA(
            `#${def.id.isbackup}, #${def.id.ispreview}, #${def.id.isfontsize}, #${def.id.ishotkey}, #${def.id.isfixviewport}, #${def.id.isclosetip}, #${def.id.maxps}`,
            def.const.dialogIf
          ).forEach(items => {
            items.addEventListener("change", () => {
              _bk = Boolean(qS(`#${def.id.isbackup}`, def.const.dialogIf).checked);
              _pv = Boolean(qS(`#${def.id.ispreview}`, def.const.dialogIf).checked);
              _fs = Boolean(qS(`#${def.id.isfontsize}`, def.const.dialogIf).checked);
              _fvp = Boolean(qS(`#${def.id.isfixviewport}`, def.const.dialogIf).checked);
              _hk = Boolean(qS(`#${def.id.ishotkey}`, def.const.dialogIf).checked);
              _ct = Boolean(qS(`#${def.id.isclosetip}`, def.const.dialogIf).checked);
              _mps = Number(qS(`#${def.id.maxps}`, def.const.dialogIf).value) || 100;
            });
          });
          if (await frDialog.respond()) {
            _config_data_.isBackupFunction = _bk;
            _config_data_.isPreview = _pv;
            _config_data_.isFontsize = _fs;
            _config_data_.isFixViewport = _fvp;
            _config_data_.isHotkey = _hk;
            _config_data_.isCloseTip = _ct;
            _config_data_.maxPersonalSites = _mps;
            saveData("_CONFIGURE_", _config_data_);
            let frDialog = new FrDialogBox({
              trueButtonText: "确 定",
              messageText: "<p style='color:darkgoldenrod'>高级核心功能参数已成功保存，当前页面即将刷新\uff01</p>",
              titleText: "高级核心功能设置保存",
            });
            if (await frDialog.respond()) closeConfigurePage({ isReload: true });
            frDialog = null;
          } else {
            GMopenInTab(`${def.const.gfHost}#warning`, false);
          }
          frDialog = null;
        },
        includeSites: async () => {
          let frDialog = new FrDialogBox({
            trueButtonText: "确 定",
            neutralButtonText: "取 消",
            messageText: `<p style="font:italic bold 22px/150% Candara,'Times New Roman'!important">${TOP_HOST_NAME}</p><p style="color:darkgreen">该域名下所有页面将重新进行字体渲染\uff01</p><p>确定后当前页面将自动刷新，请确认是否恢复？</p>`,
            titleText: "恢复字体渲染",
          });
          if (await frDialog.respond()) {
            exSite = await GMgetValue("_EXCLUDE_SITES_");
            try {
              exSite = exSite ? [...JSON.parse(decrypt(exSite))] : defExSite;
            } catch (e) {
              ERROR("ExSite.JSON.parse:", e.message);
              exSite = defExSite;
            }
            def.const.exSitesIndex = updateExsitesIndex(exSite);
            typeof def.const.exSitesIndex !== "undefined" && exSite.splice(def.const.exSitesIndex, 1);
            saveData("_EXCLUDE_SITES_", exSite);
            closeConfigurePage({ isReload: true });
          }
          frDialog = null;
        },
      };

      function insertMenus(loading) {
        sleep(1e3, { useCachedSetTimeout: true })(2e3)
          .then(async r => {
            const fontReady = await isFontReady(r);
            DEBUG("isFontReady: %c%s %c%s", "color:red", Boolean(fontReady), "color:blue", parseInt(fontReady));
            return fontReady;
          })
          .then(font_Ready => {
            let font_Set, exclude_site, parameter_Set, feed_Back;
            loading ? GMunregisterMenuCommand(loading) : DEBUG("%cNo Loading_Menu", "color:grey");
            if (font_Ready) {
              if (typeof def.const.exSitesIndex === "undefined") {
                font_Set ? GMunregisterMenuCommand(font_Set) : DEBUG("%cInstalling Font_Set_Menu", "color:gray");
                font_Set = GMregisterMenuCommand(`\ufff1\ud83c\udf13 字体渲染设置${isHotkey ? `(P)` : ""}`, addAction.setConfigure);
                exclude_site ? GMunregisterMenuCommand(exclude_site) : DEBUG("%cInstalling Exclude_site_Menu", "color:gray");
                exclude_site = GMregisterMenuCommand(`\ufff2\u26d4 排除渲染 ${TOP_HOST_NAME} ${isHotkey ? `(X)` : ""}`, addAction.excludeSites);
                parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:gray");
                parameter_Set = GMregisterMenuCommand(`\ufff3\ud83d\udc8e 高级核心功能设置${isHotkey ? `(G)` : ""}`, addAction.vipConfigure);
              } else {
                exclude_site ? GMunregisterMenuCommand(exclude_site) : DEBUG("%cInstalling Exclude_site_Menu", "color:gray");
                exclude_site = GMregisterMenuCommand(`\ufff4\ud83c\udf40 重新渲染 ${TOP_HOST_NAME} ${isHotkey ? `(X)` : ""}`, addAction.includeSites);
                feed_Back ? GMunregisterMenuCommand(feed_Back) : DEBUG("%cInstalling Feed_Back_Menu", "color:gray");
                feed_Back = GMregisterMenuCommand(`\ufff5\ud83e\udde1 向作者反馈问题或建议${isHotkey ? `(T)` : ""}`, () => GMopenInTab(def.variable.feedback, false));
              }
            } else {
              loading = GMregisterMenuCommand(`\ufff0\ud83c\udf13 单击重新载入脚本菜单`, () => {
                location.reload(true);
              });
            }
          })
          .catch(e => ERROR("MenusInsert:", e.message));
      }

      function insertHotkey() {
        sleep(2e3, { useCachedSetTimeout: true })
          .then(() => (isHotkey ? !DEBUG("%cInstalling Hotkey_Setting", "color:gray") : DEBUG("%cNo Hotkey_Setting", "color:grey")))
          .then(installHotkey => {
            if (!installHotkey) return;
            document.addEventListener("keydown", e => {
              const ekey = e.altKey && !e.ctrlKey && !e.shiftKey && !e.metaKey;
              if (e.keyCode === 80 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  if (typeof def.const.exSitesIndex === "undefined") {
                    addAction.setConfigure();
                  } else {
                    addAction.includeSites();
                  }
                }
              }
              if (e.keyCode === 88 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  if (typeof def.const.exSitesIndex === "undefined") {
                    addAction.excludeSites();
                  } else {
                    addAction.includeSites();
                  }
                }
              }
              if (e.keyCode === 71 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 1e3) {
                  def.count.clickTimer = Date.now();
                  if (typeof def.const.exSitesIndex === "undefined") {
                    addAction.vipConfigure();
                  } else {
                    addAction.includeSites();
                  }
                }
              }
              if (e.keyCode === 84 && ekey) {
                e.preventDefault();
                if (Date.now() - def.count.clickTimer > 10e3) {
                  def.count.clickTimer = Date.now();
                  GMopenInTab(def.variable.feedback, false);
                }
              }
            });
          });
      }

      async function manageDomainsList() {
        let domains, domainValue, domainValueIndex;
        let _temp_ = [];
        let Contents = "";
        try {
          domains = await GMgetValue("_DOMAINS_FONTS_SET_");
          try {
            domainValue = domains ? [...JSON.parse(decrypt(domains))] : [];
          } catch (e) {
            ERROR("DomainValue.JSON.parse:", e.message);
            domainValue = [];
          }
          const _data_search_ =
            domainValue.length > 6
              ? `<p style="display:flex;justify-content:left;align-items:center"><input id="${def.const.seed}_d_s_" style="box-sizing:content-box;margin:4px 6px;padding:2px 6px;width:57%;height:22px;outline:none!important;border:2px solid #777;border-radius:4px;font:normal 16px/150% monospace,Courier New,system-ui,-apple-system,BlinkMacSystemFont,serif!important"><button id="${def.const.seed}_d_s_s_" style="box-sizing:border-box;margin:0;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer">查 询</button><button id="${def.const.seed}_d_s_c_" style="box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer">清 除</button></p>`
              : ``;
          for (let i = 0, l = domainValue.length; i < l; i++) {
            Contents += String(
              `<li id="${def.const.seed}_d_d_l_${i}" style="display:flex;overflow:hidden;margin:0;padding:5px;max-width:364px;color:#555;list-style:none;` +
                `white-space:nowrap;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,sans-serif!important;justify-content:space-between">` +
                `<span>
                [<a id="${def.const.seed}_d_d_l_s_${i}" style="display:inline;padding:2px;background:transparent;color:#8b0000;font-size:14px!important;cursor:pointer">删除</a>]
                <span>${i + 1 > 9 ? i + 1 : "0".concat(i + 1)}.</span>
              </span>
              <span style="margin-left:5px;font-weight:700">${convertHtmlToText(domainValue[i].domain)}</span>
              <span style="margin:0 5px">${setDateFormat("yyyy/MM/dd HH:mm:ss", new Date(domainValue[i].fontDate))}</span>
            </li>`
            );
          }
          let frDialog = new FrDialogBox({
            trueButtonText: "确认操作，保存数据",
            neutralButtonText: "取 消",
            messageText: `<p style="color:#8b0000;text-indent:6px!important;font-size:14px!important">请谨慎操作，保存后生效，已删除的数据将不可恢复\uff01</p>${_data_search_}<ul id="${def.const.seed}_d_d_" style="overflow-x:hidden;margin:0!important;padding:0!important;max-height:190px;list-style:none!important;overscroll-behavior:contain">${Contents}</ul>`,
            titleText: "网站个性化设置数据列表\uff1a",
          });
          const dsNode = qS(`#${def.const.seed}_d_s_`, def.const.dialogIf);
          const dscNode = qS(`#${def.const.seed}_d_s_c_`, def.const.dialogIf);
          const dssNode = qS(`#${def.const.seed}_d_s_s_`, def.const.dialogIf);
          const ddNode = qS(`#${def.const.seed}_d_d_`, def.const.dialogIf);
          if (dsNode && dscNode && dssNode) {
            dsNode.addEventListener("keydown", e => {
              if (e.keyCode === 13) {
                e.preventDefault();
                dssNode.click();
              }
            });
            dsNode.addEventListener("input", () => {
              dsNode.value = dsNode.value.replace(/[^\w.-]/gi, "");
            });
            dscNode.addEventListener("click", () => {
              dsNode.value = "";
              dsNode.style.borderColor = "#777";
              ddNode.scrollTop = 0;
              dsNode.focus();
            });
            dssNode.addEventListener("click", () => {
              if (dsNode.value) {
                if (w.find) {
                  dsNode.style.borderColor = w.find(dsNode.value, 0) ? "#777" : "red";
                  if (w.getSelection) {
                    const _sTxt = def.const.dialogIf.getSelection();
                    const _sNode = _sTxt.anchorNode?.parentNode?.parentNode ?? 0;
                    const _rows = Number(_sNode.id.replace(`${def.const.seed}_d_d_l_`, ""));
                    const _offsetHeight = Number(_sTxt.anchorNode?.parentNode?.parentNode?.offsetHeight) || 0;
                    ddNode.scrollTop = (_rows * _offsetHeight) / def.const.curScale;
                  }
                }
              }
            });
          }
          ddNode.addEventListener("click", event => {
            const input = qS(`#${def.const.seed}_d_s_`, def.const.dialogIf);
            const target = event.target;
            input?.focus();
            if (target.nodeName === "A" && target.id.startsWith(`${def.const.seed}_d_d_l_s_`)) {
              if (!target.hasAttribute("data-del")) {
                const _list_Id_ = Number(target.id.replace(`${def.const.seed}_d_d_l_s_`, "")) || 0;
                _temp_.push(domainValue[_list_Id_].domain);
                target.setAttribute("data-del", domainValue[_list_Id_].domain);
                target.textContent = "恢复";
                target.style.color = "darkgreen";
                target.parentNode.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
                target.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:line-through;font-style:italic";
              } else {
                const _index_ = _temp_.indexOf(target.getAttribute("data-del"));
                Boolean(~_index_) && _temp_.splice(_index_, 1);
                target.removeAttribute("data-del");
                target.textContent = "删除";
                target.style.color = "darkred";
                target.parentNode.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
                target.parentNode.nextElementSibling.nextElementSibling.style.cssText += "text-decoration:none;font-style:normal";
              }
            }
          });
          if (await frDialog.respond()) {
            domains = await GMgetValue("_DOMAINS_FONTS_SET_");
            try {
              domainValue = domains ? [...JSON.parse(decrypt(domains))] : [];
            } catch (e) {
              ERROR("DomainValue.JSON.parse:", e.message);
              domainValue = [];
            }
            for (let l = _temp_.length - 1; l >= 0; l--) {
              domainValueIndex = updateDomainsIndex(domainValue, _temp_[l]);
              typeof domainValueIndex !== "undefined" && domainValue.splice(domainValueIndex, 1);
              if (_temp_[l] === CUR_HOST_NAME) def.const.equal = true;
            }
            saveData("_DOMAINS_FONTS_SET_", domainValue);
            let frDialog = new FrDialogBox({
              trueButtonText: "感谢使用",
              messageText: String(
                `<p style="color:darkgreen">网站个性化设置数据已成功保存\uff01</p><p>${
                  def.const.equal ? "当前网站数据有变动，页面将在您确认后自动刷新。" : "提示：您可继续留在当前页面进行其他操作。"
                }</p>`
              ),
              titleText: "个性化数据保存",
            });
            if (await frDialog.respond()) closeConfigurePage({ isReload: Boolean(def.const.equal) });
            frDialog = null;
          }
          frDialog = null;
        } catch (e) {
          ERROR("ManageDomainsList:", e.message);
          def.array.exps.push(`[manageDomainsList]: ${e}`);
          reportErrorToAuthor(def.array.exps);
        }
      }

      /* FONT_LIST_GENERATION_AND_SELECTION */

      function fontSet(s) {
        if (typeof s !== "string" && typeof s !== "undefined") return;
        return {
          hide: () => qA(s, def.const.configIf).forEach(item => (item.style.display = "none")),
          show: () => qA(s, def.const.configIf).forEach(item => (item.style.display = "block")),
          cloze: async (item, fontData) => {
            ddRemove(item.parentNode);
            const value = item.parentNode.children[1].value;
            const sort = Number(item.parentNode.children[1].attributes.sort.value) || -1;
            const text = item.parentNode.children[0].textContent;
            fontData.push({ ch: text, en: value, sort: sort });
            getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
            if (!submitButton) return;
            if (qA(`#${def.id.fontList} .${def.class.close}`, def.const.configIf).length === 0) {
              const fontIndex = def.array.values.indexOf(def.id.fontName);
              Boolean(~fontIndex) && def.array.values.splice(fontIndex, 1);
              if (def.array.values.length === 0) {
                submitButton.classList.contains(def.class.anim) && submitButton.classList.remove(def.class.anim);
                if (def.const.isPreview) {
                  submitButton.textContent = "\u4fdd\u5b58";
                  submitButton.removeAttribute("style");
                  submitButton.removeAttribute("v-Preview");
                  loadPreview(def.const.preview);
                }
              } else {
                def.const.isPreview && changePreviewButtonStyle(submitButton, def.array.values);
              }
              qS(`#${def.id.selector}`, def.const.configIf).style.display = "none";
              const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
              const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
              if (ffaceT.checked) {
                const fontCheckList = await getMergedFontCheckList();
                for (let i = 0, l = fontCheckList.length; i < l; i++) {
                  if (fontCheckList[i].en === refont || convertToUnicode(fontCheckList[i].ch) === refont) {
                    def.const.curFont = fontCheckList[i].ch;
                    break;
                  }
                }
                inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${def.const.curFont}`);
              }
            } else {
              def.const.isPreview && changePreviewButtonStyle(submitButton, def.array.values);
            }
          },
          fdeleteList: fontData => {
            const closeNodes = qA(`#${def.id.fontList} .${def.class.close}`, def.const.configIf);
            closeNodes.forEach(item => fontSet().cloze(item, fontData));
          },
          fresetList: fontData => {
            fontSet().fdeleteList(fontData);
            const fontlistSelectorNode = qS(`#${def.id.fontList} .${def.class.selector}`, def.const.configIf);
            const resetDefaultFont = INITIAL_VALUES.fontSelect.replace(/'|"/g, "");
            fontlistSelectorNode.insertAdjacentHTML(
              "beforeend",
              tTP.createHTML(
                `<a class="${def.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:${INITIAL_VALUES.fontSelect}!important">微软雅黑</span><input type="hidden" name="${def.id.fontName}" sort="0" value="${resetDefaultFont}"/><span class="${def.class.close}" style="border-top-right-radius:4px;border-bottom-right-radius:4px;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important;cursor:pointer">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
              )
            );
            fontlistSelectorNode.parentNode.style.display = "block";
            for (let i = 0; i < fontData.length; i++) {
              if (fontData[i].en === resetDefaultFont) {
                fontData.splice(i, 1);
                break;
              }
            }
            def.array.values.push(def.id.fontName);
            const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.const.configIf);
            cleanerNode?.addEventListener("click", () => fontSet().fdeleteList(fontData));
            const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="0"]~.${def.class.close}`, def.const.configIf);
            closeNode.addEventListener("click", function () {
              fontSet().cloze(this, fontData);
            });
          },
          fsearchList: name => {
            let arr = [];
            const inputListNodes = qA(`#${def.id.selector} .${def.class.selector} input[name="${name}"]`, def.const.configIf);
            inputListNodes.forEach(item => arr.push(item.value));
            return arr.filter(Boolean);
          },
          fsearch: fontData => {
            const fHtml = String(
              `<div id="${def.id.selector}">
                <span class="${def.class.spanlabel}">已选择字体\uff1a<span id="${def.id.cleaner}">[清空]</span></span>
                <div class="${def.class.selector}"></div>
              </div>
              <div class="${def.class.selectFontId}">
                <span class="${def.class.spanlabel}">设置字体，请选择\uff1a</span>
                <input type="search" placeholder="输入关键字可检索字体" autocomplete="off" class="${def.class.placeholder}">
                <dl style="display:none"></dl>
                <span class="${def.class.tooltip} ${def.class.ps1}" id="${def.id.fonttooltip}">
                  <span class="${def.class.emoji}" title="单击查看帮助">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps2}">
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
            const fontListNode = qS(s, def.const.configIf);
            if (!qS(`#${def.id.selector}`, def.const.configIf) && fontListNode) fontListNode.innerHTML = tTP.createHTML(fHtml);
            const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
            const fselectorT = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
            if (ffaceT && fselectorT) {
              changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly);
              ffaceT.addEventListener("change", () => changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly));
            }
            qS(`#${def.id.selector}`, def.const.configIf).style.display = "none";
            fselectorT.addEventListener("input", () => searchEvents(fselectorT.value));
            fselectorT.addEventListener("click", function (e) {
              if (this.value.length === 0) {
                const selector = `#${def.id.fontList} .${def.class.selectFontId} dl`;
                const selectFontNode = qS(selector, def.const.configIf);
                fontSet(selector).show();
                if (fontData.length === 0 && selectFontNode) {
                  selectFontNode.innerHTML = tTP.createHTML("<dd>\u6570\u636e\u6e90\u6682\u65e0\u6570\u636e</dd>");
                } else {
                  selectFontNode.textContent = "";
                  getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                  fontData.forEach(item => {
                    selectFontNode.insertAdjacentHTML(
                      "beforeend",
                      tTP.createHTML(`<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`)
                    );
                  });
                }
                clickEvents();
              } else {
                searchEvents(this.value);
              }
              e.stopPropagation();
            });
            document.addEventListener("click", selectorHidden);

            function changeSelectorStatus(inputCheckedStatus, f, cssName) {
              if (!f) return;
              if (inputCheckedStatus) {
                f.removeAttribute("disabled");
                f.classList.remove(cssName);
              } else {
                fontSet().fdeleteList(fontData);
                f.setAttribute("disabled", "disabled");
                f.classList.add(cssName);
              }
            }

            function selectorHidden() {
              fontSet(`#${def.id.fontList} .${def.class.selectFontId} dl`).hide();
              const selectorInput = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
              if (selectorInput) selectorInput.value = "";
            }

            function searchEvents(t) {
              const selector = `#${def.id.fontList} .${def.class.selectFontId} dl`;
              const selectFontNode = qS(selector, def.const.configIf);
              fontSet(selector).hide();
              if (fontData.length > 0 && selectFontNode) {
                fontSet(selector).show();
                const sText = t.replace(/[.:?*+^$[\](){}\\/|]/g, "\u2717");
                const sRegExp = new RegExp(sText, "i");
                let sMatched = false;
                selectFontNode.textContent = "";
                getUniqueFontlist(fontData).forEach(item => {
                  if (sRegExp.test(item.ch) || sRegExp.test(item.en)) {
                    sMatched = true;
                    selectFontNode.insertAdjacentHTML(
                      "beforeend",
                      tTP.createHTML(`<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`)
                    );
                  }
                });
                if (!sMatched) selectFontNode.innerHTML = tTP.createHTML("<dd>\u6682\u65e0\u60a8\u641c\u7d22\u7684\u5b57\u4f53</dd>");
                clickEvents();
              }
            }

            function clickEvents() {
              const selectFontNodes = qA(`#${def.id.fontList} .${def.class.selectFontId} dl dd`, def.const.configIf);
              selectFontNodes.forEach(item => {
                item.addEventListener("click", function (e) {
                  const value = this.attributes?.value?.value;
                  const sort = this.attributes?.sort?.value;
                  const selector = qS(`#${def.id.fontList} .${def.class.selector}`, def.const.configIf);
                  if (value && sort && selector) {
                    selector.insertAdjacentHTML(
                      "beforeend",
                      tTP.createHTML(
                        `<a class="${def.class.label}"><span style="border-bottom-left-radius:4px;border-top-left-radius:4px;font-family:'${value}'!important">${this.textContent}</span><input type="hidden" name="${def.id.fontName}" sort="${sort}" value="${value}"/><span class="${def.class.close}" style="border-bottom-right-radius:4px;border-top-right-radius:4px;cursor:pointer;font-family:system-ui,-apple-system,BlinkMacSystemFont,serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`
                      )
                    );
                    selector.parentNode.style.display = "block";
                    fontData = getUniqueFontlist(fontData);
                    for (let i = 0; i < fontData.length; i++) {
                      if (fontData[i].en === value) {
                        fontData.splice(i, 1);
                        i = fontData.length;
                      }
                    }
                    const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.const.configIf);
                    cleanerNode?.addEventListener("click", () => fontSet().fdeleteList(fontData));
                    const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="${sort}"]~.${def.class.close}`, def.const.configIf);
                    closeNode.addEventListener("click", function () {
                      fontSet().cloze(this, fontData);
                    });
                    const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
                    if (submitButton) {
                      !def.array.values.includes(def.id.fontName) && def.array.values.push(def.id.fontName);
                      !submitButton.classList.contains(def.class.anim) && submitButton.classList.add(def.class.anim);
                      def.const.isPreview && changePreviewButtonStyle(submitButton, def.array.values);
                    }
                  }
                  selectorHidden();
                  e.stopPropagation();
                });
              });
            }
          },
        };

        function ddRemove(item) {
          if (!item) return;
          safeRemove(item);
          const temp = item.nextElementSibling;
          if (temp?.nodeName === "DD") ddRemove(temp);
        }
      }

      async function funcFontface(t) {
        const postscriptName = await matchByPostScriptName(t);
        const fontList = [
          ...["Arial", "Helvetica", "Helvetica Neue", "Verdana", "Georgia", "Tahoma", "Noto Sans", "Open Sans", "Segoe UI"],
          ...["Roboto", "RobotoDraft", "Ubuntu", "SimSun", "NSimSun", "SimHei", "FangSong", "KaiTi", "MingLiU", "PMingLiU"],
          ...["Microsoft YaHei", "PingFangSC-Regular", "PingFangSC-Medium", "PingFangSC-Semibold", "PingFangHK-Regular", "PingFangHK-Medium"],
          ...[convertToUnicode("宋体"), convertToUnicode("楷体"), convertToUnicode("仿宋"), convertToUnicode("黑体"), convertToUnicode("微软雅黑")],
        ];
        const returnFontface = fontList
          .filter(item => item !== t)
          .map(item => `@font-face{font-family:"${item}";src:local("${postscriptName}");}`)
          .join("");
        return returnFontface;
      }

      function funcFontsize(t) {
        const GKText = `transform:scale(var(--fr-init-fontscale));transform-origin:0 0;width:${100 / t}%;height:${100 / t}%;`;
        const WKtext = `zoom:var(--fr-init-fontscale)!important;overflow-x:clip;`;
        return `:root body{${IS_REAL_GECKO ? GKText : WKtext}}`;
      }

      function overlayColor(r, c) {
        const specialColor = `0 0 ${(r * 1.15).toFixed(2)}px ${toColordepth(c, 0.4)},0 0 ${r}px ${c},0 0 ${(r * 0.7).toFixed(2)}px ${toColordepth(c, 2.05)}`;
        const currentColor = `0 0 ${r}px ${toColordepth(c, 1.15)},0 0 ${(r * 0.8).toFixed(2)}px ${toColordepth(c, 0.35)},0 0 ${(r * 0.5).toFixed(2)}px currentcolor`;
        return c.substring(1) !== "FFFFFFFF" ? specialColor : currentColor;
      }

      function fixScaleOffset(scaleValue) {
        if (scaleValue === 1) return;
        const predefinedSitesProps = {
          ".smzdm.com": { Element: ["clientWidth"] },
          ".bilibili.com": { Element: ["scrollHeight"], HTMLElement: ["offsetHeight"] },
        };
        sleep(5, { useCachedSetTimeout: true })(scaleValue).then(scale => {
          for (let [domain, props] of Object.entries(predefinedSitesProps)) {
            if (CUR_HOST_NAME.endsWith(domain)) {
              def.array.props.Element.push(...uniq(props.Element));
              def.array.props.HTMLElement.push(...uniq(props.HTMLElement));
              break;
            }
          }
          correctCoordinateOffset(scale, false);
        });
      }

      function funcCodefont(t, s) {
        if (t.search(/\bpre\b|\bcode\b/gi) !== -1) {
          let customMonoRules = [];
          const pre = t.search(/\bpre\b/gi) > -1 ? ["pre", "pre *"] : [];
          const code = t.search(/\bcode\b/gi) > -1 ? ["code", "code *"] : [];
          const elcode = ["samp", "kbd", ".code", ".code *"];
          const siterules = ["@github.com##[class*='blob-'],[class*='blob-'] *,.react-code-text *"].concat(monoSiteRules);
          const regex = /@([\w\-.]+)##(?!.*(?<sp>[#])\k<sp>{1})([\w\-*.#:+>()~[\]=^$|,' ]+)/;
          siterules.forEach(siterule => {
            const rule = regex.exec(siterule);
            if (CUR_HOST_NAME.endsWith(rule[1])) customMonoRules = [...customMonoRules, ...rule[3].split(",")];
          });
          const code_text = pre.concat(code, elcode, uniq(customMonoRules)).join();
          const codeSelector = CAN_I_USE ? `:is(${code_text})` : code_text;
          const base = s ? "var(--fr-font-family),var(--fr-init-basefont)" : "var(--fr-init-basefont)";
          return String(
            codeSelector.concat(
              `{font-size:14px!important;line-height:150%!important;-webkit-text-stroke:var(--fr-no-stroke)!important;text-shadow:var(--fr-mono-text-shadow)!important;font-family:var(--fr-mono-font),${base}!important;font-feature-settings:var(--fr-mono-feature)!important;`,
              `${IS_REAL_WEBKIT ? "-webkit-user-select" : "user-select"}:text!important;}`
            )
          );
        }
        return "";
      }

      function insertMainStyleElement({ overwrite } = {}) {
        let styleNode = getMainStyleElements({ currentScope: true });
        if (!overwrite && styleNode) return;
        const insertResult = insertStyle({
          target: document.head,
          styleId: styleNode?.id ?? def.id.rndStyle,
          styleContent: styleNode?.textContent ?? tStyle,
          isOverwrite: Boolean(overwrite),
        });
        insertResult && COUNT(`[INSERTSTYLE]${IS_IN_FRAMES}[i:${def.id.rndStyle}]`);
        return insertResult;
      }

      function couldMoveStyleElements(element) {
        return (
          (element instanceof HTMLStyleElement || (element instanceof HTMLLinkElement && element.rel?.toLowerCase().includes("stylesheet") && !element.disabled)) &&
          element.media?.toLowerCase() !== "print" &&
          !element.attributes[0]?.name.startsWith("fr-css-") &&
          !element.classList.contains("darkreader")
        );
      }

      async function moveStyleToLast(node) {
        try {
          let rndStyleNode = qS(`#${def.id.rndStyle}`, document.head);
          if (rndStyleNode?.nextElementSibling && couldMoveStyleElements(node) && getLastStyleNode(document.head) !== rndStyleNode) {
            COUNT(`[MOVESTYLE]${IS_IN_FRAMES}[i:${rndStyleNode.id}]`);
            insertMainStyleElement({ overwrite: true });
          }
          rndStyleNode = null;
        } catch (e) {
          ERROR("moveStyleToLast:", e.message);
        }
      }

      function getImageAndTextProperties() {
        return CONST_VALUES.isMatchEditorialSite ? `disabled="disabled" title="\u56fe\u6587/\u7f16\u8f91\u7f51\u7ad9\u81ea\u52a8\u7981\u7528" ` : ``;
      }

      async function operateConfigure() {
        if (!CUR_WINDOW_TOP) return;
        try {
          // set fontData with cache expires
          let fontData = await detectFontData([]);
          // Fonts selection
          fontSelectionAndCustomFonts(fontData);
          // selector placeholder style
          const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
          const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
          await getAndMonitorCurrentFont(ffaceT, inputFont);
          // Fonts Face
          const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
          saveChangeStatus(ffaceT, CONST_VALUES.fontFace, submitButton, def.array.values);
          // Font Smooth
          const smoothT = qS(`#${def.id.smooth}`, def.const.configIf);
          saveChangeStatus(smoothT, CONST_VALUES.fontSmooth, submitButton, def.array.values);
          // FontSize Scale
          const scale = qS(`#${def.id.fontScale}`, def.const.configIf);
          let drawScale = getFontSizeScale(scale, submitButton) ?? {};
          // Fonts stroke
          const stroke = qS(`#${def.id.strokeSize}`, def.const.configIf);
          let drawStrock = getFontsStroke(stroke, submitButton);
          // Fix Fonts stroke
          let fixStrokeT = getFixStrokeBool(stroke, submitButton) ?? {};
          // Fonts shadow
          const shadows = qS(`#${def.id.shadowSize}`, def.const.configIf);
          const shadowColorNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
          let drawShadow = getFontShadow(shadows, shadowColorNode, submitButton);
          // Fonts shadow color selection
          const colorshow = qS(`#${def.id.color}`, def.const.configIf);
          const colorReg = /^#[0-9A-F]{8}$|^currentcolor$/i;
          let colorPicker = getColorAndColorPicker(colorshow, submitButton);
          // Double-click allows to edit
          const fontCssT = qS(`#${def.id.cssinclued}`, def.const.configIf);
          const fontExT = qS(`#${def.id.cssexclude}`, def.const.configIf);
          doubleClickToEdit(fontCssT);
          saveChangeStatus(fontCssT, CONST_VALUES.fontCSS, submitButton, def.array.values);
          saveChangeStatus(fontExT, CONST_VALUES.fontEx, submitButton, def.array.values);
          // Expand & Collapse
          expandOrCollapse(qS(`#${def.id.cSwitch}`, def.const.configIf), fontCssT, qS(`#${def.id.fontCss}`, def.const.configIf));
          expandOrCollapse(qS(`#${def.id.eSwitch}`, def.const.configIf), fontExT, qS(`#${def.id.fontEx}`, def.const.configIf));
          // Customized monospaced fontlist
          const customMonoNode = qS(`#${def.id.mono}`, def.const.configIf);
          customMonospceFont(customMonoNode, monoSiteRules, monoFontList, monoFeature);
          // Reset Button control
          const resetButtonNode = qS(`#${def.id.submit} .${def.class.reset}`, def.const.configIf);
          controlResetButton(
            resetButtonNode,
            { ffaceT, smoothT, scale, stroke, fixStrokeT, shadows, colorPicker, colorshow, fontCssT, fontExT },
            { fontData, drawScale, drawStrock, drawShadow, submitButton }
          );
          // Submit Button control
          const submitButtonNode = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
          controlSubmitButton(submitButtonNode, { ffaceT, smoothT, scale, stroke, fixStrokeT, shadows, colorshow, colorReg, fontCssT, fontExT });
          // Backup Button control
          const backupButtonNode = qS(`#${def.id.backup}`, def.const.configIf);
          controlBackupButton(backupButtonNode, isBackupFunction);
          // cancel Button control
          const cancelButtonNode = qS(`#${def.id.submit} .${def.class.cancel}`, def.const.configIf);
          controlCancelButton(cancelButtonNode);
        } catch (e) {
          ERROR("OperateConfigure:", e.message);
          def.array.exps.push(`[operateConfigure]: ${e}`);
        }

        async function detectFontData(FontCheckList) {
          try {
            const cache_FontCheckList = await cache.get("_FONTCHECKLIST_");
            if (Array.isArray(cache_FontCheckList) && cache_FontCheckList.length > 0) {
              DEBUG("%cLoad fontData from Cache", "color:green;font-weight:700");
              FontCheckList = cache_FontCheckList;
            } else {
              DEBUG("%cStart real-time font detection", "color:crimson;font-weight:700");
              FontCheckList = await fontCheck_DetectOnce();
              cache.set("_FONTCHECKLIST_", FontCheckList);
            }
            return [...FontCheckList];
          } catch (e) {
            ERROR("FontCheckList with cache:", e.message);
            cache.remove("_FONTCHECKLIST_");
            return [];
          }
        }

        function fontSelectionAndCustomFonts(fontData) {
          try {
            if (!qS(`#${def.id.fontList} .${def.class.fontList}`, def.const.configIf)) return;
            fontSet(`#${def.id.fontList} .${def.class.fontList}`).fsearch(fontData);
            qS(`#${def.id.fonttooltip}`, def.const.configIf)?.addEventListener("dblclick", async () => {
              let custom_Fontlist = "";
              let received_Fontlist = "";
              let save_Fontlist = [];
              let cusFontCheck = [];
              const cusFontList = await GMgetValue("_CUSTOM_FONTLIST_");
              try {
                cusFontCheck = cusFontList ? [...JSON.parse(decrypt(cusFontList))] : [];
              } catch (e) {
                ERROR("CusFontCheck.JSON.parse:", e.message);
                cusFontCheck = [];
              }
              cusFontCheck.forEach(item => {
                item.sort && delete item.sort;
                received_Fontlist += JSON.stringify(item) + "\r\n";
              });
              let frDialog = new FrDialogBox({
                trueButtonText: "保 存",
                falseButtonText: "帮助文档",
                neutralButtonText: "取 消",
                messageText:
                  `<p style="color:#555;font-size:14px!important">以下文本域可按预定格式增加自定义字体。请用小贴士或按样例填写，输入有误将被自动过滤。` +
                  `与『<a href="${def.const.gfHost}#fontlist" title="查看内置字体表" target="_blank">内置字体表</a>』重复的字体将被自动剔除。` +
                  `【功能小贴士\uff1a<span id="${def.const.seed}_addTools" title="点击开启工具" style="color:crimson;cursor:pointer">字体添加辅助工具</span>】</p><p><textarea id="${def.const.seed}_custom_Fontlist" style="box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:160px!important;outline:none!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% monospace,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;resize:vertical;scrollbar-width:thin;overscroll-behavior:contain" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下\uff1a\r\n{ "ch":"中文字体名一","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"中文字体名二","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n（注一\uff1a“ps:”该项为字体PostScript名称，可选填写）\r\n（注二\uff1a\u21b2为换行符号，输入(Enter)回车即可）'>${received_Fontlist}</textarea></p><p style="display:block;margin:-5px 0 0 -7px!important;height:max-content;color:#dc143c;font-size:14px!important">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p>`,
                titleText: "自定义字体表",
              });
              custom_Fontlist = qS(`#${def.const.seed}_custom_Fontlist`, def.const.dialogIf)?.value.trim() ?? "";
              qS(`#${def.const.seed}_addTools`, def.const.dialogIf)?.addEventListener("click", () => {
                let chName, enName, psName, cusFontName;
                chName = def.dialog.prompt(
                  "请输入「中文字体家族名称」\uff1a\r\n(例如\uff1a鸿蒙黑体，仅支持半角输入模式，包括中文、日文、韩文、英文，数字、小数点、减号、下划线、空格、@)",
                  "鸿蒙黑体"
                );
                if (chName === null) {
                  return;
                } else if (/^@?[\w\u2E80-\uD7FF\-.,!/（）() ]+$/.test(chName.trim())) {
                  enName = def.dialog.prompt(
                    "请输入「英文字体家族名称」\uff1a\r\n(例如\uff1aHarmonyOS Sans SC，仅支持半角输入模式，包括英文、数字、小数点、减号、下划线、空格、@)",
                    "HarmonyOS Sans SC"
                  );
                  if (enName === null) {
                    return;
                  } else if (/^@?[\w\-., !/()]+$/.test(enName.trim())) {
                    psName = def.dialog.prompt(
                      "请输入「PostScript名称」\uff1a\r\n(为使新增字体全局生效，请尽量填写PostScript名称。如您暂时无法提供PostScript名称，可留空)（查询请访问Fontke.com）",
                      ""
                    );
                    if (psName === null) {
                      return;
                    } else if (/^[\w\u2E80-\uD7FF\-.,@!&=?|+~ ]+$/.test(psName.trim())) {
                      cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}","ps":"${psName.trim()}"}`;
                    } else {
                      cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}"}`;
                    }
                    const customFontlistNode = qS(`#${def.const.seed}_custom_Fontlist`, def.const.dialogIf);
                    const aTrim = customFontlistNode.value.trim() ? "\r\n" : "";
                    customFontlistNode.value = customFontlistNode.value.trim().concat(aTrim, cusFontName, "\r\n");
                    custom_Fontlist = customFontlistNode.value.trim();
                  } else {
                    def.dialog.alert("英文字体家族名称 格式输入错误\uff01");
                  }
                } else {
                  def.dialog.alert("中文字体家族名称 格式输入错误\uff01");
                }
              });
              qS(`#${def.const.seed}_custom_Fontlist`, def.const.dialogIf)?.addEventListener("change", function () {
                this.value = convertFullToHalf(this.value)
                  .replace(/'|`|·|“|”|‘|’/g, `"`)
                  .replace(/，/g, `,`)
                  .replace(/：/g, `:`);
                custom_Fontlist = this.value.trim();
              });
              if (await frDialog.respond()) {
                const regex = /{\s*"ch":\s*"@?[\w\u2E80-\uD7FF\-.,!/（）() ]+"\s*,\s*"en":\s*"@?[\w\-., !/()]+"\s*(,\s*"ps":\s*"[\w\u2E80-\uD7FF\-.,@!&=?|+~ ]+"\s*)?}/g;
                const fontListArray = custom_Fontlist.match(regex);
                if (!custom_Fontlist.length) {
                  GMdeleteValue("_CUSTOM_FONTLIST_");
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: "<p style='color:indigo'>自定义字体表已初始化成功\uff01<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>",
                    titleText: "自定义字体数据重置",
                  });
                  cache.remove("_FONTCHECKLIST_");
                  if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                  frDialog = null;
                } else if (Array.isArray(fontListArray) && fontListArray.length > 0) {
                  fontListArray.forEach(item => save_Fontlist.push(JSON.parse(item)));
                  const unique_Save_Fontlist = getUniqueFontlist(save_Fontlist);
                  saveData("_CUSTOM_FONTLIST_", getDeduplicatedValues(unique_Save_Fontlist, fontCheck));
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: `<p style="color:darkgreen">您所提交的自定义字体已保存成功\uff01<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p><p style='color:coral;font-size:12px!important'>注：格式错误或重复的字体代码将被自动过滤。</p>`,
                    titleText: "自定义字体数据保存",
                  });
                  cache.remove("_FONTCHECKLIST_");
                  if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                  frDialog = null;
                } else {
                  copyToClipboard(custom_Fontlist);
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: "<p style='color:crimson'>您所提交的自定义字体数据格式有误，请重新输入。<p><p>注意：先前提交的信息已自动保存至剪切板中。</p>",
                    titleText: "字体表数据格式错误",
                  });
                  if (await frDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.id.fonttooltip}`, def.const.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  frDialog = null;
                }
              } else {
                GMopenInTab(`${def.const.gfHost}#custom`, false);
              }
              frDialog = null;
            });
          } catch (e) {
            ERROR("Fonts selection:", e.message);
            def.array.exps.push(`[Fonts selection]: ${e}`);
          }
        }

        async function getAndMonitorCurrentFont(fontfaceNode, inputNode) {
          await getCurrentFontName(CONST_VALUES.fontFace, refont, def.const.defaultFont);
          if (!fontfaceNode || !inputNode) return;
          fontfaceNode.addEventListener("change", async () => {
            await getCurrentFontName(CONST_VALUES.fontFace, refont, def.const.defaultFont);
            if (fontfaceNode.checked && !CONST_VALUES.fontFace) {
              inputNode.setAttribute("placeholder", "正在恢复之前设置的字体…");
              sleep(120)
                .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.const.configIf))
                .then(submitPreview => submitPreview?.click());
            }
          });
        }

        function getFontSizeScale(scale, submitButton) {
          if (!def.const.isFontsize || !scale) return null;
          try {
            let drawScale = qS(`#${def.id.scaleSize}`, def.const.configIf);
            scale.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
            rangeSliderWidget(drawScale, scale, 3, true);
            checkInputValue(scale, drawScale, /^[0-1](\.[0-9]{1,3})?$/, 3, true);
            return drawScale;
          } catch (e) {
            ERROR("FontSize Scale:", e.message);
            def.array.exps.push(`[FontSize Scale]: ${e}`);
          } finally {
            saveChangeStatus(scale, CONST_VALUES.fontSize, submitButton, def.array.values, true);
          }
        }

        function getFontsStroke(stroke, submitButton) {
          try {
            let drawStrock = qS(`#${def.id.stroke}`, def.const.configIf);
            stroke.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
            rangeSliderWidget(drawStrock, stroke, 3);
            checkInputValue(stroke, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
            return drawStrock;
          } catch (e) {
            ERROR("Fonts stroke:", e.message);
            def.array.exps.push(`[Fonts stroke]: ${e}`);
          } finally {
            saveChangeStatus(stroke, CONST_VALUES.fontStroke, submitButton, def.array.values);
          }
        }

        function getFixStrokeBool(stroke, submitButton) {
          if (!IS_REAL_BLINK || !stroke) return null;
          let fixStrokeT = qS(`#${def.id.fixStroke}`, def.const.configIf);
          try {
            const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
            if (fstrokeNode) {
              fstrokeNode.style.visibility = stroke.value === "OFF" ? "hidden" : "visible";
              stroke.addEventListener("change", function () {
                fstrokeNode.style.visibility = this.value === "OFF" ? "hidden" : "visible";
              });
            }
            return fixStrokeT;
          } catch (e) {
            ERROR("Fix Stroke:", e.message);
            def.array.exps.push(`[Fix Stroke]: ${e}`);
          } finally {
            saveChangeStatus(fixStrokeT, CONST_VALUES.fixStroke, submitButton, def.array.values);
          }
        }

        function getFontShadow(shadows, shadowColorNode, submitButton) {
          try {
            if (!shadows || !shadowColorNode) return null;
            let drawShadow = qS(`#${def.id.shadow}`, def.const.configIf);
            shadows.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
            rangeSliderWidget(drawShadow, shadows, 2);
            checkInputValue(shadows, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
            shadowColorNode.style.display = shadows.value === "OFF" ? "none" : "flex";
            shadows.addEventListener("change", function () {
              shadowColorNode.style.display = this.value === "OFF" ? "none" : "flex";
            });
            return drawShadow;
          } catch (e) {
            ERROR("Fonts shadow:", e.message);
            def.array.exps.push(`[Fonts shadow]: ${e}`);
          } finally {
            saveChangeStatus(shadows, CONST_VALUES.fontShadow, submitButton, def.array.values);
          }
        }

        function getColorAndColorPicker(colorshow, submitButton) {
          try {
            if (!colorshow) return {};
            let colorPicker = new w.frColorPicker(`#${def.id.color}`, {
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
            DEBUG(`frColorPicker: %c${cp}`, def.const.style.fullStyle(cp, cl) + "border:1px solid #eee");
            return colorPicker;
          } catch (e) {
            ERROR("Fonts shadowColor:", e.message);
            def.array.exps.push(`[Fonts shadowColor]: ${e}`);
          } finally {
            saveChangeStatus(colorshow, CONST_VALUES.shadowColor, submitButton, def.array.values);
          }
        }

        function doubleClickToEdit(fontCssT) {
          if (!fontCssT) return;
          fontCssT.addEventListener("dblclick", () => {
            fontCssT.setAttribute("class", def.class.notreadonly);
            fontCssT.title = "\u8bf7\u8c28\u614e\u4fee\u6539\u8be5\u53c2\u6570\uff01";
            fontCssT.readOnly = false;
          });
        }

        function customMonospceFont(monoT, siteRule, fontlist, feature) {
          if (!monoT) return;
          monoT.addEventListener("dblclick", async () => {
            try {
              const monospacedsiterules = siteRule.join("\r\n").trim();
              const monospacedfont = fontlist.trim();
              const monospacedfeature = feature.trim();
              let frDialog = new FrDialogBox({
                trueButtonText: "保存数据",
                neutralButtonText: "取 消",
                messageText: `<p style="display:block;color:#555;font-size:14px!important">\u2474 以下文本域可设置需应用等宽字体的根域及元素选择器。<br><em style="color:#dc143c">如果您不熟悉CSS语法规则，请保持留空，避免样式失效。</em></p><p><textarea id="${def.const.seed}_monospaced_siterules" style="box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:140px!important;outline:0!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% monospace,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;resize:vertical;scrollbar-width:thin;overscroll-behavior:contain;word-break:keep-all!important" placeholder="每行只能允许一条规则，相同站点不同规则可重复添加。\r\n格式如：@网站域名##元素选择器1,元素选择器2,……\r\n例如：\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p style="display:block;margin-top:10px!important;color:#555;font-size:14px!important">\u2475 以下可设置自定义英文等宽字体，请按示例格式填写。<br><em style="color:#dc143c">请注意：monospace字体族已程序内置，无需重复添加。</em></p><p><input id="${def.const.seed}_monospaced_font" style="box-sizing:border-box;padding:5px;width:380px;outline:0!important;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% monospace,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important" placeholder="例如：'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p style="display:block;margin-top:10px!important;color:#555;font-size:14px!important">\u2476 以下可设置OpenType字体font-feature-settings属性。<br><em style="color:#dc143c">如果您不了解该属性，请保持留空，以免造成样式错误。</em></p><p><input id="${def.const.seed}_monospaced_feature" style="box-sizing:border-box;padding:5px;width:380px;outline:0!important;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% monospace,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important" placeholder='例如："liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`,
                titleText: "设置自定义等宽字体",
              });
              const monospacedSiteRulesNode = qS(`#${def.const.seed}_monospaced_siterules`, def.const.dialogIf);
              const monospacedFontNode = qS(`#${def.const.seed}_monospaced_font`, def.const.dialogIf);
              const monospacedFeatureNode = qS(`#${def.const.seed}_monospaced_feature`, def.const.dialogIf);
              let custom_MonospacedSiteRules = convertHtmlToText(monospacedSiteRulesNode.value.trim());
              let custom_MonospacedFontList = convertHtmlToText(monospacedFontNode.value.trim());
              let custom_MonospacedFontFeature = convertHtmlToText(monospacedFeatureNode.value.trim());
              monospacedFontNode.addEventListener("change", function () {
                this.value = convertFullToHalf(this.value)
                  .replace(/"|`|·|“|”|‘|’/g, `'`)
                  .replace(/，/g, `,`)
                  .replace(/'monospace',?/gi, ``);
                custom_MonospacedFontList = convertHtmlToText(this.value.trim());
              });
              monospacedSiteRulesNode.addEventListener("change", function () {
                this.value = convertFullToHalf(this.value)
                  .replace(/"|`|·|“|”|‘|’/g, `'`)
                  .replace(/，/g, `,`);
                custom_MonospacedSiteRules = convertHtmlToText(this.value.trim());
              });
              monospacedFeatureNode.addEventListener("change", function () {
                this.value = convertFullToHalf(this.value)
                  .replace(/'|`|·|“|”|‘|’/g, `"`)
                  .replace(/，/g, `,`)
                  .replace(/[^\w", ]/g, ``);
                custom_MonospacedFontFeature = convertHtmlToText(this.value.trim());
              });
              if (await frDialog.respond()) {
                const monospaced_SiteRulesArray = custom_MonospacedSiteRules.match(/@[\w\-.]+##(?!.*(?<sp>[#])\k<sp>{1})[\w\-*.#:+>()~[\]=^$|,' ]+/g);
                if (custom_MonospacedSiteRules && !monospaced_SiteRulesArray) {
                  copyToClipboard(custom_MonospacedSiteRules);
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: "<p style='color:crimson'>自定义根域及元素选择器有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>",
                    titleText: "自定义根域及元素选择器数据错误",
                  });
                  if (await frDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.id.mono}`, def.const.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  frDialog = null;
                  return;
                }
                const monospaced_FontListArray = custom_MonospacedFontList.match(/'@?[\w\-.()!/ ]+'/g);
                if (custom_MonospacedFontList && !monospaced_FontListArray) {
                  copyToClipboard(custom_MonospacedFontList);
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: "<p style='color:crimson'>您提交的自定义等宽字体数据有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>",
                    titleText: "自定义等宽字体数据错误",
                  });
                  if (await frDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.id.mono}`, def.const.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  frDialog = null;
                  return;
                }
                if (
                  (!custom_MonospacedSiteRules || (Array.isArray(monospaced_SiteRulesArray) && monospaced_SiteRulesArray.length > 0)) &&
                  (!custom_MonospacedFontList || (Array.isArray(monospaced_FontListArray) && monospaced_FontListArray.length > 0))
                ) {
                  const monospaced_fontListString = [...new Set(monospaced_FontListArray)].join();
                  !custom_MonospacedSiteRules ? GMdeleteValue("_MONOSPACED_SITERULES_") : saveData("_MONOSPACED_SITERULES_", monospaced_SiteRulesArray);
                  !custom_MonospacedFontList ? GMdeleteValue("_MONOSPACED_FONTLIST_") : saveData("_MONOSPACED_FONTLIST_", monospaced_fontListString);
                  !custom_MonospacedFontFeature ? GMdeleteValue("_MONOSPACED_FEATURE_") : saveData("_MONOSPACED_FEATURE_", custom_MonospacedFontFeature);
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: `<p style="color:darkgreen">您提交的自定义等宽字体相关数据已保存成功\uff01</p><p>当前页面将在您确认后自动刷新。</p><p style="color:coral;font-size:12px!important">注：格式错误的输入内容将被自动过滤。</p>`,
                    titleText: "自定义等宽字体相关数据保存",
                  });
                  if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                  frDialog = null;
                }
              }
              frDialog = null;
            } catch (e) {
              ERROR("Monospaced Set:", e.message);
            }
          });
        }

        function controlResetButton(
          resetT,
          { smoothT, ffaceT, scale, stroke, fixStrokeT, shadows, colorPicker, colorshow, fontCssT, fontExT },
          { fontData, drawScale, drawStrock, drawShadow, submitButton }
        ) {
          if (!resetT) return;
          resetT.addEventListener("click", async () => {
            let frDialog = new FrDialogBox({
              trueButtonText: "重 置",
              falseButtonText: "恢 复",
              neutralButtonText: "取 消",
              messageText: `<p>『重置/恢复』将当前设置初始化为 <span style="color:slategray">程序默认的初始数据</span> 或 <span style="color:slategrey">上次正确保存的数据</span>。一般是在您错误配置参数且造成无法挽回的情况下才进行重置参数的操作。</p><p style="color:darkgreen">重置\uff1a重置当前数据为程序初始值，手动保存生效。</p><p style="color:darkred">恢复\uff1a替换为上次正确保存的数据，自动恢复预览。</p><p style="color:gray">取消\uff1a放弃重置操作。</p>`,
              titleText: "参数重置确认",
            });
            if (await frDialog.respond()) {
              smoothT.checked !== INITIAL_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
              ffaceT.checked !== INITIAL_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
              CONST_VALUES.fontSelect.split(",")[0] !== INITIAL_VALUES.fontSelect ? fontSet().fresetList(fontData) : fontSet().fdeleteList(fontData);
              if (def.const.isFontsize) {
                scale.value = INITIAL_VALUES.fontSize === 1 ? "OFF" : INITIAL_VALUES.fontSize.toFixed(3);
                scale._value_ = INITIAL_VALUES.fontSize;
                setSliderProperty(drawScale, INITIAL_VALUES.fontSize, 3);
                def.const.curScale = INITIAL_VALUES.fontSize;
              }
              stroke.value = INITIAL_VALUES.fontStroke === 0 ? "OFF" : INITIAL_VALUES.fontStroke.toFixed(3);
              stroke._value_ = INITIAL_VALUES.fontStroke;
              setSliderProperty(drawStrock, INITIAL_VALUES.fontStroke, 3);
              if (IS_REAL_BLINK) {
                fixStrokeT.checked !== INITIAL_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
                fstrokeNode && (fstrokeNode.style.visibility = stroke.value === "OFF" ? "hidden" : "visible");
              }
              shadows.value = INITIAL_VALUES.fontShadow === 0 ? "OFF" : INITIAL_VALUES.fontShadow.toFixed(2);
              shadows._value_ = INITIAL_VALUES.fontShadow;
              setSliderProperty(drawShadow, INITIAL_VALUES.fontShadow, 2);
              qS(`#${def.id.shadowColor}`, def.const.configIf).style.display = shadows.value === "OFF" ? "none" : "flex";
              colorPicker.fromString(INITIAL_VALUES.shadowColor);
              colorshow.value = INITIAL_VALUES.shadowColor;
              colorshow._value_ = INITIAL_VALUES.shadowColor;
              fontCssT.value = INITIAL_VALUES.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, def.array.values, fontCssT, submitButton);
              fontExT.value = INITIAL_VALUES.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, def.array.values, fontExT, submitButton);
              await getCurrentFontName(ffaceT.checked, INITIAL_VALUES.fontSelect.replace(/'/g, ""), def.const.defaultFont);
              sleep(120)
                .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.const.configIf))
                .then(submitPreview => submitPreview?.click());
            } else {
              smoothT.checked !== CONST_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
              ffaceT.checked !== CONST_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
              fontSet().fdeleteList(fontData);
              if (def.const.isFontsize) {
                scale.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
                scale._value_ = CONST_VALUES.fontSize;
                setSliderProperty(drawScale, CONST_VALUES.fontSize, 3);
                def.array.scaleValueMatrix.push(CONST_VALUES.fontSize);
                def.const.curScale = CONST_VALUES.fontSize;
              }
              stroke.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
              stroke._value_ = CONST_VALUES.fontStroke;
              setSliderProperty(drawStrock, CONST_VALUES.fontStroke, 3);
              if (IS_REAL_BLINK) {
                fixStrokeT.checked !== CONST_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
                fstrokeNode && (fstrokeNode.style.visibility = stroke.value === "OFF" ? "hidden" : "visible");
              }
              shadows.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
              shadows._value_ = CONST_VALUES.fontShadow;
              setSliderProperty(drawShadow, CONST_VALUES.fontShadow, 2);
              const shadowColorNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
              shadowColorNode && (shadowColorNode.style.display = shadows.value === "OFF" ? "none" : "flex");
              colorPicker.fromString(CONST_VALUES.shadowColor);
              colorshow.value = CONST_VALUES.shadowColor === "#FFFFFFFF" ? "currentcolor" : colorPicker.toHEXAString();
              colorshow._value_ = colorshow.value;
              fontCssT.value = CONST_VALUES.fontCSS;
              setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, def.array.values, fontCssT, submitButton);
              fontExT.value = CONST_VALUES.fontEx;
              setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, def.array.values, fontExT, submitButton);
              await getCurrentFontName(ffaceT.checked, refont, def.const.defaultFont);
              loadPreview(def.const.preview);
              setAutoScaleValue(qS(`#${def.id.rndId}`), def.const.curScale);
              delete def.const.preview;
            }
            frDialog = null;
          });
        }

        function controlSubmitButton(submitT, { ffaceT, smoothT, scale, stroke, fixStrokeT, shadows, colorshow, colorReg, fontCssT, fontExT }) {
          if (!submitT) return;
          submitT.addEventListener("click", async function () {
            const fontlists = fontSet().fsearchList(def.id.fontName);
            const fontselect = fontlists.length > 0 ? addSingleQuoteToArray(fontlists) : CONST_VALUES.fontSelect;
            const fontface = ffaceT.checked;
            const smooth = smoothT.checked;
            const prefscale = !def.const.isFontsize ? 1 : /^[0-1](\.[0-9]{1,3})?$/.test(scale.value) ? Number(scale.value) : INITIAL_VALUES.fontSize;
            const fscale = CONST_VALUES.isMatchEditorialSite ? 1 : prefscale < 0.8 ? 0.8 : prefscale > 1.5 ? 1.5 : prefscale;
            const fstroke = /^[0-1](\.[0-9]{1,3})?$/.test(stroke.value) ? Number(stroke.value) : stroke.value === "OFF" ? 0 : INITIAL_VALUES.fontStroke;
            const fixfstroke = IS_REAL_BLINK && fstroke && fixStrokeT.checked;
            const fshadow = /^[0-8](\.[0-9]{1,2})?$/.test(shadows.value) ? Number(shadows.value) : shadows.value === "OFF" ? 0 : INITIAL_VALUES.fontShadow;
            const pickedcolor = colorshow.value;
            const fscolor = colorReg.test(pickedcolor) ? (pickedcolor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : pickedcolor) : INITIAL_VALUES.shadowColor;
            const fcss = fontCssT.value;
            const fontcss = fcss ? fcss.replace(/"|`/g, "'") : INITIAL_VALUES.fontCSS;
            const fex = fontExT.value;
            const fontex = fex ? fex.replace(/"|`/g, "'") : "";
            const _curEmptyConfig = !fontface && !smooth && !fshadow && !fstroke && fscale === 1;
            if (def.const.isPreview && this.hasAttribute("v-Preview")) {
              try {
                const _bodyscale = !def.const.isFontsize ? "" : fscale >= 0.8 && fscale <= 1.5 && fscale !== 1 ? funcFontsize(fscale) : "";
                const _shadowcsstext = overlayColor(fshadow, fscolor.toLowerCase());
                const _shadow = fshadow > 0 && fshadow <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
                const _strokecsstext = `${fstroke}px currentcolor`;
                const _stroke = fstroke > 0 && fstroke <= 1.0 ? `-webkit-text-stroke:var(--fr-font-stroke);` : ``;
                const _smoothing = smooth ? funcSmooth : "";
                const _textrender = smooth ? "text-rendering:optimizeLegibility;" : "";
                const _fontfamily = fontface ? `font-family:var(--fr-font-family),var(--fr-init-basefont);` : ``;
                const _refont = fontselect?.split(",")[0].replace(/"|'/g, "") ?? "";
                const _fontfaces = !fontface ? "" : _refont ? await funcFontface(_refont) : "";
                const _exselector = CAN_I_USE ? `:is(${convertHtmlToText(fontex)})` : convertHtmlToText(fontex);
                const _exclude = !fontex || (!fshadow && !fstroke) ? "" : _exselector.concat("{-webkit-text-stroke:var(--fr-no-stroke)!important;text-shadow:none!important}");
                const _codefont = !fontex ? "" : funcCodefont(fontex, fontface);
                const _fixfontstroke = fixfstroke ? `[${def.const.boldAttrName}]{-webkit-text-stroke:var(--fr-no-stroke)!important}` : ``;
                const _tshadow = `${_fontfaces}${_bodyscale}`.concat(
                  CAN_I_USE ? `:is(${convertHtmlToText(fontcss)})` : convertHtmlToText(fontcss),
                  `{${_fontfamily}${_shadow}${_stroke}${_smoothing}${_textrender}}`,
                  `${_exclude}${_codefont}${_fixfontstroke}`
                );
                const _rootpseudoclass = `:root{--fr-init-basefont:${INITIAL_VALUES.fontBase};--fr-init-fontscale:${fscale};--fr-font-family:${fontselect};--fr-font-shadow:${_shadowcsstext};--fr-font-stroke:${_strokecsstext};--fr-font-feature:"liga" 0,"zero";--fr-mono-font:${monoFontText};--fr-mono-feature:${monoFeatureText};--fr-mono-text-shadow:${monoShadowCssText};--fr-no-stroke:0px transparent;}`;
                const __tshadow = `@charset "UTF-8";` + (_curEmptyConfig ? `${def.const.style.global}` : `${_rootpseudoclass}${def.const.style.global}${_tshadow}`);
                def.array.scaleValueMatrix.push(fscale);
                def.const.curScale = fscale;
                this.textContent = "\u4fdd\u5b58";
                this.removeAttribute("style");
                this.removeAttribute("v-Preview");
                loadPreview(def.const.isPreview, __tshadow, false);
                await getCurrentFontName(fontface, _refont, def.const.defaultFont)
                  .then(() => {
                    const cl = getBrightness(fscolor.substring(1)) > 182 ? "#333" : "#eee";
                    DEBUG(`frColorPicker<Preview>: %c${fscolor}`, def.const.style.fullStyle(fscolor, cl) + "border:1px solid #eee");
                    setAutoScaleValue(qS(`#${def.id.rndId}`), fscale);
                  })
                  .then(() => fixFontStrokeStyleErrors(_fixfontstroke, { permit: isFixStrokeTask(fstroke && fixfstroke) }))
                  .catch(e => ERROR("Preview:", e.message));
              } catch (e) {
                ERROR("SubmitPreview:", e.message);
                def.array.exps.push(`[submitPreview]: ${e}`);
                reportErrorToAuthor(def.array.exps);
              }
            } else {
              try {
                let frDialog = new FrDialogBox({
                  trueButtonText: "保存到全局数据",
                  falseButtonText: "保存到网站数据",
                  neutralButtonText: "取 消",
                  messageText: `<p style="color:darkgreen;font-weight:700">保存到全局数据\uff1a</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p style="color:#8b0000;font-weight:700">保存到当前网站数据\uff1a<span id="${def.const.seed}_a_w_d_l_">[<span style="margin:0;padding:0 2px;color:#3e3e3e;font-weight:400;font-size:12px!important;cursor:pointer">全部数据列表</span>]</span></p><p style="min-height:22px"><span title="保存到网站数据会自动覆盖之前的数据" style="color:indigo;cursor:help;word-break:break-all" id="${def.const.seed}_c_w_d_">为 ${TOP_HOST_NAME} 保存独立的设置数据。</span>`,
                  titleText: "保存设置数据",
                });
                let domains, domainValue, domainValueIndex;
                domains = await GMgetValue("_DOMAINS_FONTS_SET_");
                try {
                  domainValue = domains ? [...JSON.parse(decrypt(domains))] : [];
                } catch (e) {
                  ERROR("DomainValue.JSON.parse:", e.message);
                  domainValue = [];
                }
                const _awdl = qS(`#${def.const.seed}_a_w_d_l_`, def.const.dialogIf);
                if (_awdl) {
                  _awdl.style.display = domainValue.length > 0 ? "line-block" : "none";
                  _awdl.addEventListener("click", async () => await manageDomainsList());
                }
                domainValueIndex = updateDomainsIndex(domainValue);
                const cwdNode = qS(`#${def.const.seed}_c_w_d_`, def.const.dialogIf);
                if (typeof domainValueIndex !== "undefined" && cwdNode) {
                  const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValue[domainValueIndex].fontDate));
                  cwdNode.innerHTML = tTP.createHTML(
                    `<p style="display:flex;height:30px;align-items:center"><span style="color:indigo"><strong>上次保存\uff1a</strong>${fontDate} </span><button id="${def.const.seed}_c_w_d_d_" style="box-sizing:border-box;margin-left:15px;padding:3px 5px;width:max-content;height:max-content;max-width:120px;min-height:30px;border:1px solid #777;border-radius:4px;background-color:#eee;color:#333!important;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                  );
                  qS(`#${def.const.seed}_c_w_d_d_`, def.const.dialogIf).addEventListener("click", async () => {
                    typeof domainValueIndex !== "undefined" && domainValue.splice(domainValueIndex, 1);
                    saveData("_DOMAINS_FONTS_SET_", domainValue);
                    let frDialog = new FrDialogBox({
                      trueButtonText: "感谢使用",
                      messageText: "<p style='color:darkred'>当前网站的个性化数据已成功删除\uff01</p><p>当前页面将在您确认后自动刷新。</p>",
                      titleText: "个性化数据删除",
                    });
                    if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                    frDialog = null;
                  });
                }
                if (await frDialog.respond()) {
                  saveData("_FONTS_SET_", {
                    fontSelect: convertHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSmooth: Boolean(smooth),
                    fontSize: Number(fscale),
                    fontStroke: Number(fstroke),
                    fixStroke: Boolean(fixfstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: convertHtmlToText(fscolor),
                    fontCSS: convertHtmlToText(fontcss),
                    fontEx: convertHtmlToText(fontex),
                  });
                  if (globalDisable && !_curEmptyConfig) {
                    _config_data_.globalDisable = false;
                    saveData("_CONFIGURE_", _config_data_);
                  }
                  if (!globalDisable && _curEmptyConfig) {
                    _config_data_.globalDisable = true;
                    saveData("_CONFIGURE_", _config_data_);
                  }
                  def.const.successId = true;
                } else {
                  const _savedata_ = {
                    domain: TOP_HOST_NAME,
                    fontDate: Date.now(),
                    fontSelect: convertHtmlToText(fontselect),
                    fontFace: Boolean(fontface),
                    fontSmooth: Boolean(smooth),
                    fontSize: Number(fscale),
                    fontStroke: Number(fstroke),
                    fixStroke: Boolean(fixfstroke),
                    fontShadow: Number(fshadow),
                    shadowColor: convertHtmlToText(fscolor),
                    fontCSS: convertHtmlToText(fontcss),
                    fontEx: convertHtmlToText(fontex),
                  };
                  domains = await GMgetValue("_DOMAINS_FONTS_SET_");
                  try {
                    domainValue = domains ? [...JSON.parse(decrypt(domains))] : [];
                  } catch (e) {
                    ERROR("DomainValue.JSON.parse:", e.message);
                    domainValue = [];
                  }
                  domainValueIndex = updateDomainsIndex(domainValue);
                  if (typeof domainValueIndex !== "undefined") {
                    domainValue.splice(domainValueIndex, 1, _savedata_);
                  } else {
                    domainValue.push(_savedata_);
                  }
                  if (domainValue.length <= maxPersonalSites || typeof domainValueIndex !== "undefined") {
                    saveData("_DOMAINS_FONTS_SET_", domainValue);
                    def.const.successId = true;
                  } else {
                    let frDialog = new FrDialogBox({
                      trueButtonText: "依然保存",
                      falseButtonText: "管理列表",
                      neutralButtonText: "我放弃",
                      messageText: `<p style="color:gray">您已经保存超过<span style="color:#dc143c;font-weight:700;font-style:italic;font-size:20px">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p style="color:crimson">您确认要继续保存吗？</p>`,
                      titleText: "数据过多的提示",
                    });
                    if (await frDialog.respond()) {
                      saveData("_DOMAINS_FONTS_SET_", domainValue);
                      def.const.successId = true;
                    } else {
                      await manageDomainsList();
                      def.const.successId = false;
                    }
                    frDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                ERROR("SubmitData:", e.message);
                def.array.exps.push(`[submitData]: ${e}`);
                reportErrorToAuthor(def.array.exps);
                def.const.successId = false;
              } finally {
                if (def.const.successId) {
                  let frDialog = new FrDialogBox({
                    trueButtonText: "感谢使用",
                    messageText: "<p style='color:darkgreen'>您设置的字体渲染数据已成功保存\uff01</p><p>当前页面将在您确认后自动刷新。</p>",
                    titleText: "字体渲染数据保存",
                  });
                  if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                  frDialog = null;
                }
              }
            }
          });
        }

        function controlBackupButton(backupT, needBackup) {
          if (!needBackup || !backupT) return;
          backupT.style.display = "inline-block";
          backupT.addEventListener("click", async () => {
            try {
              let frDialog = new FrDialogBox({
                trueButtonText: "备 份",
                falseButtonText: "还 原",
                neutralButtonText: "取 消",
                messageText: `<p style="color:darkgreen;font-weight:700">备份到本地文件\uff1a</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p style="color:#8b0000;font-weight:700">从本地文件还原\uff1a</p><p><span style="color:indigo;cursor:pointer" id="${def.id.tfiles}">\ud83d\udd0e\u0020[点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${def.id.files}"/></p>`,
                titleText: "备份与还原数据",
              });
              const tfs = qS(`#${def.id.tfiles}`, def.const.dialogIf);
              const fs = qS(`#${def.id.files}`, def.const.dialogIf);
              if (tfs && fs) {
                tfs.addEventListener("click", () => fs.click());
                fs.addEventListener("change", () => {
                  tfs.innerHTML = tTP.createHTML(
                    fs.files[0]
                      ? `<em style="color:indigo;font-size:11px!important;word-break:break-all">${fs.files[0].name}</em><br/><span style="color:crimson">\u0020\ud83d\udd0e\u0020[重新选择]</span>`
                      : `\ud83d\udd0e\u0020[点击这里载入*.sqlitedb备份文件]`
                  );
                });
              }
              if (await frDialog.respond()) {
                const _fonts_Set__ = await GMgetValue("_FONTS_SET_");
                const _exclude_Site__ = await GMgetValue("_EXCLUDE_SITES_");
                const _domains_Fonts_Set_ = await GMgetValue("_DOMAINS_FONTS_SET_");
                const _domains_Fonts_Set__ = _domains_Fonts_Set_ || encrypt(JSON.stringify([]));
                const _custom_Fontlist_ = await GMgetValue("_CUSTOM_FONTLIST_");
                const _custom_Fontlist__ = _custom_Fontlist_ || encrypt(JSON.stringify([]));
                const _monospaced_Fontlist_ = await GMgetValue("_MONOSPACED_FONTLIST_");
                const _monospaced_Fontlist__ = _monospaced_Fontlist_ || "";
                const _monospaced_SiteRules_ = await GMgetValue("_MONOSPACED_SITERULES_");
                const _monospaced_SiteRules__ = _monospaced_SiteRules_ || "";
                const _monospaced_feature_ = await GMgetValue("_MONOSPACED_FEATURE_");
                const _monospaced_feature__ = _monospaced_feature_ || "";
                const _configure__ = await GMgetValue("_CONFIGURE_");
                const db_R = "QXV0aGVyJUUyJTlBJUExRjl5NG5nJUYwJTlGJTkyJTk2JTQw".concat(encrypt(def.variable.scriptName));
                const db_0 = encrypt(String(new Date()));
                const db_1 = _fonts_Set__;
                const db_2 = _exclude_Site__;
                const db_3 = _domains_Fonts_Set__;
                const db_4 = _custom_Fontlist__;
                const db_5 = _configure__;
                const db_6 = _monospaced_Fontlist__;
                const db_7 = _monospaced_SiteRules__;
                const db_8 = _monospaced_feature__;
                const db = { db_R, db_0, db_1, db_2, db_3, db_4, db_5, db_6, db_7, db_8 };
                const via = brand.toLowerCase();
                const timeStamp = setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date());
                const _fileName_ = `FontRendering-backup-${via}-${timeStamp}.sqlitedb`;
                dataDownload(_fileName_, sqliteDBDataAccess(JSON.stringify(db), 22, decrypt(ROOT_SECRET_KEY)));
                let frDialog = new FrDialogBox({
                  trueButtonText: "确 定",
                  messageText: `<p style="color:darkgreen">备份数据已归档，备份文件导出下载中……</p><p style="color:#8b0000;font-style:italic;font-size:12px!important;word-break:break-all">${_fileName_}</p>`,
                  titleText: "数据备份",
                });
                if (await frDialog.respond()) {
                  closeConfigurePage({ isReload: false });
                  DEBUG(`Backup succeeded: ${_fileName_}`);
                }
                frDialog = null;
              } else {
                try {
                  const thatFile = fs.files[0];
                  DEBUG("loadBackupData:", thatFile.name, thatFile.size);
                  let reader = new FileReader();
                  reader.addEventListener(
                    "load",
                    async function () {
                      try {
                        const _file = decrypt(String(this.result));
                        const _rs = JSON.parse(sqliteDBDataAccess(_file, null, decrypt(ROOT_SECRET_KEY)));
                        const _data_R = decrypt(_rs.db_R);
                        const _data_0 = decrypt(_rs.db_0);
                        const _data_1 = JSON.parse(decrypt(_rs.db_1));
                        const _data_2 = JSON.parse(decrypt(_rs.db_2));
                        const _data_3 = _rs.db_3 ? JSON.parse(decrypt(_rs.db_3)) : [];
                        const _data_4 = _rs.db_4 ? JSON.parse(decrypt(_rs.db_4)) : [];
                        const _data_5 = _rs.db_5 ? JSON.parse(decrypt(_rs.db_5)) : undefined;
                        const _data_6 = _rs.db_6 ? JSON.parse(decrypt(_rs.db_6)) : undefined;
                        const _data_7 = _rs.db_7 ? JSON.parse(decrypt(_rs.db_7)) : undefined;
                        const _data_8 = _rs.db_8 ? JSON.parse(decrypt(_rs.db_8)) : undefined;
                        if (!isNaN(Date.parse(_data_0)) && new Date(_data_0) < new Date() && _data_R.includes(def.variable.scriptAuthor)) {
                          for (let key of await GMlistValues()) GMdeleteValue(key);
                          saveData("_FONTS_SET_", _data_1);
                          saveData("_EXCLUDE_SITES_", _data_2);
                          saveData("_DOMAINS_FONTS_SET_", _data_3);
                          saveData("_CUSTOM_FONTLIST_", _data_4);
                          _data_6 && saveData("_MONOSPACED_FONTLIST_", _data_6);
                          _data_7 && saveData("_MONOSPACED_SITERULES_", _data_7);
                          _data_8 && saveData("_MONOSPACED_FEATURE_", _data_8);
                          if (_data_5) {
                            _data_5.curVersion = def.variable.curVersion;
                            _data_5.rebuild = undefined;
                            saveData("_CONFIGURE_", _data_5);
                          } else {
                            DEBUG("no configure data");
                          }
                          let frDialog = new FrDialogBox({
                            trueButtonText: "确 定",
                            messageText: "<p style='color:darkgreen'>本地备份数据还原完毕\uff01</p><p>当前页面将在您确认后自动刷新。</p>",
                            titleText: "数据还原成功",
                          });
                          if (await frDialog.respond()) closeConfigurePage({ isReload: true });
                          frDialog = null;
                        } else {
                          throw new Error("Invalid Data Error");
                        }
                      } catch (e) {
                        ERROR("FileReader.load:", e.message);
                        let frDialog = new FrDialogBox({
                          trueButtonText: "确 定",
                          messageText: "<p style='color:red'>数据校验错误，请选择正确的本地备份文件\uff01</p>",
                          titleText: "数据文件错误",
                        });
                        if (await frDialog.respond()) qS(`#${def.id.backup}`, def.const.configIf)?.click();
                        frDialog = null;
                      }
                    },
                    false
                  );
                  reader.readAsText(thatFile);
                  reader = null;
                } catch (e) {
                  ERROR("<The file is null>", e.name);
                  let frDialog = new FrDialogBox({
                    trueButtonText: "确 定",
                    messageText: "<p style='color:indigo'>载入文件为空，请选择要还原的备份文件\uff01</p>",
                    titleText: "没有文件载入",
                  });
                  if (await frDialog.respond()) qS(`#${def.id.backup}`, def.const.configIf)?.click();
                  frDialog = null;
                }
              }
              frDialog = null;
            } catch (e) {
              ERROR("LoadBackupData:", e.message);
              def.array.exps.push(`[loadBackupData]: ${e}`);
              reportErrorToAuthor(def.array.exps);
            }
          });
        }

        function controlCancelButton(cancelT) {
          if (!cancelT) return;
          cancelT.addEventListener("click", () => {
            closeConfigurePage({ isReload: false });
          });
        }
      }

      async function fontCheck_DetectOnce() {
        const fontReady = await isFontReady();
        let checkFont = new FontFaceSetObserver();
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
        const fontData = [...fontAvailable.values()].sort((a, b) => a.sort - b.sort);
        checkFont = null;
        fontAvailable = null;
        return fontData;
      }

      async function getCurrentFontName(_isfontface_, refont, defaultFont) {
        const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
        def.const.reFontFace = defaultFont;
        def.const.curFont = defaultFont;
        if (_isfontface_) {
          const fontCheckList = await getMergedFontCheckList();
          for (let i = 0, l = fontCheckList.length; i < l; i++) {
            if (fontCheckList[i].en === refont || convertToUnicode(fontCheckList[i].ch) === refont) {
              def.const.curFont = refont.includes("\\") ? `` : `（${fontCheckList[i].en}）`;
              def.const.reFontFace = fontCheckList[i].ch + def.const.curFont;
              def.const.curFont = fontCheckList[i].ch;
              break;
            } else {
              def.const.reFontFace = `\u672a\u77e5\u5b57\u4f53\u540d\uff08\u8bf7\u91cd\u65b0\u6dfb\u52a0\u8be5\u81ea\u5b9a\u4e49\u5b57\u4f53\u003a\u0020${refont}\uff09`;
              def.const.curFont = "\u672a\u77e5\u5b57\u4f53\u540d";
            }
          }
        }
        if (inputFont) {
          inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${def.const.curFont}`);
          inputFont.addEventListener("mouseover", () => {
            inputFont.setAttribute("placeholder", "\u8f93\u5165\u5173\u952e\u5b57\u53ef\u68c0\u7d22\u5b57\u4f53");
          });
          inputFont.addEventListener("mouseout", () => {
            inputFont.setAttribute("placeholder", `\u5f53\u524d\u5b57\u4f53\uff1a${def.const.curFont}`);
          });
        }
      }

      function closeConfigurePage({ isReload }) {
        const container = qS(`#${def.id.container}`, def.const.configIf);
        if (container) {
          def.array.values.length = 0;
          container.style.opacity = 0;
          sleep(5e2)(safeRemove("fr-colorpicker")).then(r => r && safeRemove("fr-configure"));
          if (isReload === false && def.const.preview) {
            def.array.scaleValueMatrix.push(CONST_VALUES.fontSize);
            def.const.curScale = CONST_VALUES.fontSize;
            loadPreview(def.const.isPreview);
            delete def.const.preview;
          }
        }
        FrDialogBox.closure();
        isReload === true && location.reload();
      }

      function rangeSliderWidget(linstener, target, m, g = false) {
        if (!linstener || !target) return;
        linstener.addEventListener("input", function () {
          setSliderProperty(this, this.value, m);
          target.value = Number(this.value) === (g ? 1 : 0) ? "OFF" : Number(this.value).toFixed(m);
          target._value_ = Number(this.value).toFixed(m);
          let queryNode;
          switch (linstener.id) {
            case def.id.shadow:
              queryNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
              queryNode && queryNode.style.setProperty("display", target.value === "OFF" ? "none" : "flex");
              break;
            case def.id.stroke:
              queryNode = qS(`#${def.id.fstroke}`, def.const.configIf);
              IS_REAL_BLINK && queryNode && queryNode.style.setProperty("visibility", target.value === "OFF" ? "hidden" : "visible");
              break;
          }
          queryNode = null;
        });
      }

      function expandOrCollapse(a, b, c) {
        if (!a || !b || !c) return;
        const at = a.attributes["fr-button-switch"];
        a.addEventListener("click", () => {
          if (at.value === "ON") {
            b.style = "display:none";
            a.textContent = "\u2228";
            c.style.cssText += "height:35px;min-height:35px";
            at.value = "OFF";
          } else {
            b.style = "display:block";
            a.textContent = "\u2227";
            c.style.cssText += "height:110px;min-height:110px";
            at.value = "ON";
          }
        });
      }

      function saveChangeStatus(t, e, d, v, g = false) {
        try {
          if (!t) return;
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
                deBounce({ fn: setEffectIntoSubmit, delay: 1e2, timer: t.id })(newVal, e, v, t, d, g);
              },
            });
          }
        } catch (exp) {
          ERROR("SaveChangeStatus:", exp);
          def.array.exps.push(`[saveChangeStatus]: ${exp}`);
        }
      }

      function setEffectIntoSubmit(value, e, v, t, d, h = false) {
        try {
          if (!d || !t) return;
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
            if (def.const.isPreview) changePreviewButtonStyle(d, v);
          } else {
            const vI = v.indexOf(t.id);
            Boolean(~vI) && v.splice(vI, 1);
          }
          DEBUG("changed Element IDs:\r\n", (def.array.values = v));
          if (v.length > 0) {
            if (!d.classList.contains(def.class.anim)) {
              d.classList.add(def.class.anim);
            }
          } else {
            if (d.classList.contains(def.class.anim)) {
              d.classList.remove(def.class.anim);
            }
            if (def.const.isPreview) {
              d.textContent = "\u4fdd\u5b58";
              d.removeAttribute("style");
              d.removeAttribute("v-Preview");
              loadPreview(def.const.preview);
              def.const.curScale = CONST_VALUES.fontSize;
              def.array.scaleValueMatrix.push(def.const.curScale);
              setAutoScaleValue(qS(`#${def.id.rndId}`), def.const.curScale);
            }
          }
        } catch (exp) {
          ERROR("SetEffectIntoSubmit:", exp);
        }
      }

      function changePreviewButtonStyle(t, v) {
        if (IS_REAL_GECKO && v.includes(def.id.fontScale)) {
          t.textContent = "\u4fdd\u5b58";
          t.removeAttribute("style");
          t.removeAttribute("v-Preview");
        } else {
          t.textContent = "\u9884\u89c8";
          t.setAttribute("style", "background-color:coral!important;border-color:coral!important");
          t.setAttribute("v-Preview", "true");
        }
      }

      function setAutoScaleValue(target, scale) {
        if (!target) return;
        let curScale = Number(scale) || 1;
        try {
          if (IS_REAL_GECKO) {
            repositionForGeckoScaling(target);
            if (curScale !== 1) {
              target.style.cssText += `transform:scale(${1 / curScale});transform-origin:left top 0;width:99vw;height:99vh;`;
            } else {
              target.removeAttribute("style");
            }
          } else {
            curScale = Number(gS(document.body, "zoom")) || curScale;
            curScale !== 1 ? (target.style.zoom = Number(1 / curScale)) : target.removeAttribute("style");
          }
        } catch (e) {
          ERROR("setAutoScaleValue:", e.message);
          def.array.exps.push(`[setAutoScaleValue]: ${e}`);
        } finally {
          const { oScale, tScale } = getscaleValueMatrix();
          if (curScale !== 1 && def.const.preview && oScale !== tScale) {
            DEBUG(
              "fontSize<Scale>: saved [%s]\r\n\u3000 \u27A5 current [%c%s %c%s]",
              (CONST_VALUES.fontSize * 100).toFixed(2) + "%",
              "padding:5px 0;color:teal",
              (curScale * 100).toFixed(2) + "%",
              "padding:5px 0;color:indigo",
              ((1 / curScale) * 100).toFixed(2) + "%"
            );
          }
        }
      }

      function addSingleQuoteToArray(arr) {
        if (!Array.isArray(arr)) return INITIAL_VALUES.fontSelect;
        let returnStr = "";
        arr.forEach((item, index, array) => {
          if (item) returnStr += `'${item}'`.concat(array.length - 1 === index ? "" : ",");
        });
        return String(uniq(returnStr.split(","))) || INITIAL_VALUES.fontSelect;
      }

      function convertFullToHalf(str) {
        let tmp = "";
        for (let i = 0, l = str.length; i < l; i++) {
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

      function reportErrorToAuthor(exps, showDialogBox = IS_DEBUG) {
        if (!showDialogBox || !Array.isArray(exps)) return;
        closeConfigurePage({ isReload: false });
        sleep(1e2 + random(2e3)).then(async (expReport = "") => {
          try {
            if (qS("fr-dialogbox[fr-error]")) return;
            for (let i = 0; i < exps.length; i++) {
              expReport += `${i + 1}、${exps[i]}${i + 1 !== exps.length ? "\u3000<br/>" : ""}`;
            }
            let frDialog = new FrDialogBox({
              trueButtonText: "反馈问题",
              falseButtonText: "刷新页面",
              messageText: `<p style="color:#dc143c;font-size:14px!important">脚本在运行时发生了重大异常或错误，若在『刷新页面』后依然报错，请通过『反馈问题』及时告知作者，感谢您的反馈\uff01<br/><kbd style="display:inline-block;box-sizing:content-box;margin:4px 0 0;padding:3px 10px;width:94%;border:1px solid rgba(175,184,193,.4);border-radius:6px;background-color:#f6f8fa;color:#666;vertical-align:middle;text-align:center;font-size:14px!important">以下信息会自动保存至您的剪切板</kbd></p>
                  <p><ul id="${def.const.seed}_copy_to_author" style="overflow-y:auto;margin:0!important;padding:0!important;max-height:300px;list-style-position:outside">
                    <li>浏览器信息\uff1a${JSON.stringify(navigatorInfo)}\u3000</li>
                    <li>脚本扩展信息\uff1a${GMscriptHandler} ${GMversion}\u3000</li>
                    <li>脚本版本信息\uff1a${def.variable.curVersion}\u3000</li>
                    <li>当前访问域名\uff1a${CUR_HOST_NAME}<span hidden>\u0020${CUR_HOST_PATH}</span>\u3000</li>
                    <li>错误信息列表\uff1a\u3000<span style="display:block;color:tan">${expReport}</span></li>
                  </ul></p>`,
              titleText: def.variable.scriptName + "错误报告",
            });
            frDialog.container.setAttribute("fr-error", true);
            const copyText = qS(`#${def.const.seed}_copy_to_author`, def.const.dialogIf)
              .textContent.replace(/\u3000/g, "\n")
              .replace(/\u0020\u0020/g, "")
              .replace(/\n\n/g, "\n")
              .trim();
            def.array.exps.length = 0;
            if (await frDialog.respond()) {
              copyToClipboard(copyText);
              GMopenInTab(`${def.variable.feedback}/new?assignees=F9y4ng&template=bug_report.md`, false);
            } else {
              location.reload(true);
            }
            frDialog = null;
          } catch (e) {
            ERROR("ReportErrorToAuthor:", e.message);
          }
        });
      }

      function getStyleLoadStatus() {
        sleep(3e3).then(() => {
          const styleElement = getMainStyleElements({ currentScope: true });
          const lastStyleElement = getLastStyleNode(document.head);
          if (styleElement && lastStyleElement === styleElement) {
            DEBUG(`lastStyle${IS_IN_FRAMES}.ID: %c%s`, "color:teal;font-weight:700;font-family:monospace", lastStyleElement?.id || "<NULL>");
          } else {
            getStyleLoadStatus();
          }
        });
      }

      /* FIX_VIEWPORT_ZOOM_STYLE_ERRORS 2023-04-08 F9Y4NG */

      function runFixViewportUnits() {
        if (!isFixViewport || def.const.curScale === 1) return;
        fixViewportCssStyle(null, def.const.curScale);
      }

      function fixViewportCssStyle(node, scaleValue) {
        if (typeof node === "undefined" || scaleValue === 1) return;
        const fixReg = /(?:\b)(\d+(?:\.\d+)?)(v[wh]|vmin|vmax)(?:\b)/g;
        const base64Reg = /(?:;base64,)((?:[a-zA-Z0-9/+]+\b)\d+(v[wh]|vmin|vmax))+(?:\b)/g;
        const triggerNode = node === null ? "DOM" : node.nodeName;
        switch (triggerNode) {
          case "LINK":
            fixViewportLinks();
            break;
          case "STYLE":
            fixViewportStyles();
            break;
          case "DOM":
            fixViewportLinks();
            fixViewportStyles();
            break;
        }

        function fixViewportLinks() {
          qA(`link[rel~="stylesheet" i]:not([data-processed])`).forEach(node => {
            let url = node.href || node.getAttribute("data-href");
            if (!url) return;
            url = url.replace(/^http:/, "https:");
            node.setAttribute("data-processed", false);
            debugOnce("fixlinks", "detect viewport.Links:", true);
            return new Promise(() => {
              let xhr = new XMLHttpRequest();
              xhr.timeout = 5e3;
              xhr.onreadystatechange = () => {
                if (xhr.status === 200 && xhr.readyState === 4) {
                  let cssText = xhr.responseText ?? xhr.response ?? "";
                  let parent = node.parentNode ?? document.head;
                  if (!cssText || !parent || !detectMatchingResults(cssText, fixReg)) return;
                  cssText = replaceStyle(cssText, fixReg, scaleValue);
                  cssText = replaceBaseURL(cssText, url);
                  let style = document.createElement("style");
                  style.textContent = "/*# sourceURL=" + url + " */\r\n" + cssText;
                  if (node.media) style.media = node.media;
                  if (node.id) style.id = node.id;
                  if (node.className) style.id = node.className;
                  if (node.disabled) style.disabled = node.disabled;
                  style.setAttribute("data-href", node.getAttribute("href"));
                  style.setAttribute("data-seed", Date.now());
                  style.setAttribute("data-processed", true);
                  style.setAttribute("type", "text/css");
                  parent.replaceChild(style, node);
                  DEBUG("viewport.Link Fixed: %O", style);
                }
              };
              xhr.onerror = e => ERROR("Network Error: Probably blocked by CORS policy");
              try {
                xhr.open("GET", url, true);
                xhr.send(null);
              } catch (e) {
                ERROR("fixViewportLinks:", e.message);
              }
            });
          });
        }

        function fixViewportStyles() {
          qA(`style:not([data-processed])`).forEach(node => {
            if (node.attributes[0]?.name.startsWith("fr-css-")) return;
            if (/^S[SC]\d+$/.test(node.id) || node.id === def.id.rndStyle) return;
            let cssText = node.textContent;
            node.setAttribute("data-processed", false);
            debugOnce("fixstyles", "detect viewport.Styles:", true);
            if (!detectMatchingResults(cssText, fixReg)) return;
            return new Promise(() => {
              try {
                cssText = replaceStyle(cssText, fixReg, scaleValue);
                node.textContent = cssText;
                node.setAttribute("data-seed", Date.now());
                node.setAttribute("data-processed", true);
                node.setAttribute("type", "text/css");
                DEBUG("viewport.Style Fixed: %O", node);
              } catch (e) {
                ERROR("fixViewportStyles:", e.message);
              }
            });
          });
        }

        function detectMatchingResults(txt, reg) {
          const getBase64Eigenvalue = JSON.stringify(txt.match(base64Reg));
          const matching = txt.match(reg);
          if (matching) {
            const matchingResults = matching.filter(match => !getBase64Eigenvalue.includes(match));
            return matchingResults.length > 0;
          }
          return false;
        }

        function replaceStyle(txt, reg, scale) {
          const getBase64Eigenvalue = JSON.stringify(txt.match(base64Reg));
          return txt.replace(reg, function (match, num, unit) {
            if (getBase64Eigenvalue.includes(match)) {
              return match;
            } else {
              return Number((num / scale).toFixed(4)) + unit;
            }
          });
        }

        function replaceBaseURL(txt, url) {
          const regex = /url\((?<mark>['"]?)(?!\/|https?:)([\w\-/.?=]+)\k<mark>\)/g;
          url = url.substring(0, url.lastIndexOf("/") + 1);
          return txt.replace(regex, function (match, mark, file) {
            return match.replace(new RegExp(`${mark ?? ""}`, "g"), "").replace(file, url + file);
          });
        }
      }

      /* FIX_FONT_BOLD_STROKE_STYLE_ERRORS 2023-04-08 F9Y4NG */

      function isFixStrokeTask(condition) {
        return Boolean(!IS_CHEAT_UA && IS_REAL_BLINK && parseFloat(brandversion) >= 96 && condition);
      }

      function fixFontStrokeStyleErrors(fixedstyle, { permit } = {}) {
        if (typeof permit === "boolean") {
          if (!permit) return;
        } else {
          if (!isFixStrokeTask(currentSiteAuthorization && CONST_VALUES.fixStroke)) return;
        }

        let fixBoldObserver = new MutationObserver(fixBoldProcess);
        let config = { attributes: true, childList: true, subtree: true };
        const exclusionElements = def.const.exQueryString
          .toUpperCase()
          .split(",")
          .filter(x => x.indexOf("*") === -1);
        const styleMap = new WeakMap();
        const changeAttribute = {
          add: element => {
            element.setAttribute(def.const.boldAttrName, "bold");
          },
          del: element => {
            element.removeAttribute(def.const.boldAttrName);
          },
        };

        function isBold(element) {
          if (element instanceof Element) {
            if (styleMap.has(element)) {
              return styleMap.get(element).fontWeight >= 600;
            }
            const style = gS(element);
            styleMap.set(element, style);
            return style.fontWeight >= 600;
          }
          return false;
        }

        function getBoldStyles(elements) {
          const boldStyles = [];
          for (let index = 0, len = uniq(elements).length; index < len; index++) {
            if (elements[index].nodeType !== 1) continue;
            if (exclusionElements.includes(elements[index].nodeName)) continue;
            if (elements[index].hasAttribute(def.const.boldAttrName)) continue;
            const boldStyle = isBold(elements[index]);
            boldStyles.push({ isbold: boldStyle, node: elements[index] });
          }
          return boldStyles;
        }

        async function getAndProcessBoldStyles(node) {
          let hasBoldElement = false;
          const nodes = getSuitableElements(`:not(${def.const.exQueryString})`, node);
          const items = getBoldStyles(nodes);
          for (let i = 0; i < items.length; i++) {
            if (items[i].isbold) {
              changeAttribute.add(items[i].node);
              hasBoldElement = true;
            }
          }
          return hasBoldElement;
        }

        function shadowRootNodeFixStroke(host, syncStyle) {
          if (host instanceof ShadowRoot) {
            const needInsertHostStyle = getAndProcessBoldStyles(host);
            if (needInsertHostStyle) {
              const curSyncStyle = `:host{--fr-no-stroke:0px transparent}` + syncStyle;
              compatibleWithAdoptedStyleSheets(host, curSyncStyle, `${def.const.seed}-fixboldstroke`);
            }
          }
        }

        function querySelectorAllShadows(selector, root) {
          const childShadows = qA("*", root)
            .map(el => el.shadowRoot)
            .filter(Boolean);
          const childResults = childShadows.map(child => querySelectorAllShadows(selector, child));
          const result = qA(selector, root);
          return result.concat(childResults).flat();
        }

        function getSuitableElements(expr, node) {
          expr = expr || "*";
          switch (node.nodeType) {
            case 1:
              return qA(expr, node).concat(node);
            case 9:
            case 11:
              return qA(expr, node);
          }
        }

        function shadowRootMonitor(treeNodes, obs) {
          if (!Array.isArray(treeNodes)) return;
          uniq(treeNodes).forEach(node => {
            if (![1, 9, 11].includes(node.nodeType)) return;
            let subtreeNodes = getSuitableElements(`:not(${def.const.exQueryString})`, node);
            for (let i = 0, l = subtreeNodes.length; i < l; i++) {
              if (subtreeNodes[i].nodeType !== 1) continue;
              if (subtreeNodes[i].shadowRoot) {
                shadowRootNodeFixStroke(subtreeNodes[i].shadowRoot, fixedstyle);
                obs.observe(subtreeNodes[i].shadowRoot, config);
                shadowRootMonitor([subtreeNodes[i].shadowRoot], obs);
              } else {
                if (!isBold(subtreeNodes[i]) || subtreeNodes[i].hasAttribute(def.const.boldAttrName)) continue;
                changeAttribute.add(subtreeNodes[i]);
              }
            }
          });
        }

        function fixBoldProcess(mutationsList, observer) {
          let subtrees = [];
          for (let mutation of mutationsList) {
            switch (mutation.type) {
              case "childList":
                for (let node of mutation.addedNodes) {
                  if (node.nodeType === 1 && !exclusionElements.includes(node.nodeName)) {
                    getAndProcessBoldStyles(node);
                  }
                }
                for (let node of mutation.removedNodes) {
                  if (node.nodeType === 1) styleMap.delete(node);
                }
                break;
              case "attributes":
                if (mutation.attributeName !== def.const.boldAttrName) {
                  let element = mutation.target;
                  if (exclusionElements.includes(mutation.target.nodeName)) return;
                  const nodes = getSuitableElements(`:not(${def.const.exQueryString})`, element);
                  const items = getBoldStyles(nodes);
                  for (let i = 0; i < items.length; i++) {
                    if (items[i].isbold) {
                      changeAttribute.add(items[i].node);
                    } else {
                      changeAttribute.del(items[i].node);
                    }
                  }
                  element = null;
                }
                break;
            }
            subtrees.push(mutation.target);
          }
          shadowRootMonitor(subtrees, observer);
        }

        function observeBoldElements() {
          const eventType = w.event?.type ?? "initial";
          const el = querySelectorAllShadows(`:not(${def.const.exQueryString})`, document);
          const items = getBoldStyles(el);
          for (let i = 0; i < items.length; i++) {
            if (items[i].isbold) changeAttribute.add(items[i].node);
          }
          fixBoldObserver.observe(document, config);
          debugOnce(eventType, `detect fontbold.Stroke${IS_IN_FRAMES}:`, { eventType });
        }

        function visibilitychangeHandler() {
          observeBoldElements();
          document.removeEventListener("visibilitychange", visibilitychangeHandler);
        }

        addLoadEvents.addFinalFn(observeBoldElements);
        w.addEventListener("pushState", observeBoldElements);
        w.addEventListener("replaceState", observeBoldElements);

        if (document.hidden) {
          document.addEventListener("visibilitychange", visibilitychangeHandler);
        } else {
          observeBoldElements();
        }
      }

      /* CSS_STYLE_PROCESSING_MAIN_THREAD */

      function monitorMainStyleProcess() {
        let mainStyleObserve = new MutationObserver(mainStyleProcess);
        let config = { attributes: true, childList: true, subtree: true };
        mainStyleObserve.observe(document, config);

        function mainStyleProcess(mutationsList, observer) {
          if (!currentSiteAuthorization) return;
          for (let mutation of mutationsList) {
            switch (mutation.type) {
              case "childList":
                for (let node of mutation.addedNodes) {
                  if (node.nodeType !== Node.ELEMENT_NODE) continue;
                  deBounce({ fn: insertMainStyleElement, delay: 1e2, timer: "repeatcheck", immed: true })({ overwrite: false });
                  if (node.nodeName === "IFRAME") insertStyleInFrames("addedNodes", [node]);
                  if (IS_REAL_GECKO && def.const.curScale !== 1 && def.array.frContainer.includes(node.nodeName.toLowerCase())) repositionForGeckoScaling(node);
                  if (isFixViewport && ["LINK", "STYLE"].includes(node.nodeName)) {
                    deBounce({ fn: fixViewportCssStyle, delay: 1e2, timer: "fixviewport" })(node, def.const.curScale);
                    if (mutation.target === document.head) {
                      deBounce({ fn: moveStyleToLast, delay: 3e2, timer: "movestyle", immed: true })(node);
                    }
                  }
                }
                for (let node of mutation.removedNodes) {
                  if (mutation.target === document.head && node.nodeName === "STYLE" && node.id === def.id.rndStyle && !node.dataset.frRemoved) {
                    const insertSuccess = insertMainStyleElement();
                    if (!insertSuccess) return;
                    INFO(`%c[MO]${IS_IN_FRAMES}[REINSERT]:%c<${node.nodeName}> ${insertSuccess}`, def.const.style.leftStyle("brown"), def.const.style.rightStyle("brown"));
                  }
                }
                break;
              case "attributes":
                if (mutation.target.nodeName === "IFRAME" && mutation.attributeName === "src") {
                  insertStyleInFrames("Attributes", [mutation.target]);
                }
                break;
            }
          }
        }
      }

      /* FONT_RENDERING_MAIN_PROCESS */

      (async function FontRendering(initMenus) {
        "use strict";
        if (CUR_WINDOW_TOP) {
          // DATA_AND_UPDATE
          if (await detectAndReconstructData(SET_BOOL_FOR_UPDATE)) {
            showUpdateInfo();
          }
          // SYSTEM_INFO
          await getCurrentFontName(CONST_VALUES.fontFace, refont, def.const.defaultFont);
          showSystemInfo.system();
          showSystemInfo.compat(IS_CHEAT_UA);
          // MENUS
          globalDisableNotice(globalDisable, currentSiteAuthorization);
          insertMenus(initMenus());
          insertHotkey();
        }
        // MAIN_THREAD
        fixScaleOffset(def.const.curScale);
        insertMainStyleElement();
        monitorMainStyleProcess();
        fixFontStrokeStyleErrors(fixBoldTextStyle);
        // LOADEVENTS
        addLoadEvents.addFn(insertStyleInFrames);
        addLoadEvents.addFn(runFixViewportUnits);
        addLoadEvents.addFinalFn(getStyleLoadStatus);
      })(() => {
        "use strict";
        if (CUR_WINDOW_TOP && !IS_GREASEMONKEY) {
          return GMregisterMenuCommand("\ufff0\ud83d\udd52\u0020正在载入脚本菜单，请稍候…", () => location.reload());
        }
      });
    })(
      "JUU4JUFBJUIxSlZpWSVFNyU5MCU4OSVFNiU5RiU5MyVFNSVBRCVCQSVFOCU4MiVCQXAyTyVFNiU5MyU5MzAlRTglODUlOTF0JUU1JUIyJTgwJUU1JUFFJTlBJUU4JTg2JUJBZQ==",
      async () => {
        "use strict";
        let maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isFixViewport, isCloseTip, rebuild, curVersion, globalDisable, _config_data_;
        let configure = await GMgetValue("_CONFIGURE_");
        if (!configure) {
          maxPersonalSites = 100;
          isBackupFunction = true;
          isPreview = false;
          isFontsize = false;
          isFixViewport = false;
          isHotkey = true;
          isCloseTip = false;
          rebuild = undefined;
          curVersion = undefined;
          globalDisable = false;
          _config_data_ = { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isFixViewport, isHotkey, isCloseTip, rebuild, curVersion, globalDisable };
          saveData("_CONFIGURE_", _config_data_);
        } else {
          try {
            _config_data_ = JSON.parse(decrypt(configure));
          } catch (e) {
            ERROR("_config_data_.JSON.parse:", e.message);
            def.const.structureError = true;
            _config_data_ = {};
          }
          maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
          isBackupFunction = Boolean(_config_data_.isBackupFunction ?? true);
          isPreview = Boolean(_config_data_.isPreview);
          isFontsize = Boolean(_config_data_.isFontsize);
          isFixViewport = isFontsize ? Boolean(_config_data_.isFixViewport ?? true) : false;
          isHotkey = Boolean(_config_data_.isHotkey ?? true);
          isCloseTip = Boolean(_config_data_.isCloseTip);
          rebuild = _config_data_.rebuild;
          curVersion = _config_data_.curVersion;
          globalDisable = Boolean(_config_data_.globalDisable);
        }
        def.const.isPreview = isPreview;
        def.const.isFontsize = isFontsize;
        return { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isFixViewport, isHotkey, isCloseTip, rebuild, curVersion, globalDisable };
      },
      async () => {
        "use strict";
        let monoSiteRules = await GMgetValue("_MONOSPACED_SITERULES_");
        try {
          monoSiteRules = monoSiteRules ? [...JSON.parse(decrypt(monoSiteRules))] : [];
        } catch (e) {
          ERROR("Monospaced_siteRules.Array.parse:", e.message);
          monoSiteRules = [];
        }
        let monoFontList = await GMgetValue("_MONOSPACED_FONTLIST_");
        try {
          monoFontList = monoFontList ? convertHtmlToText(JSON.parse(decrypt(monoFontList))) : "";
        } catch (e) {
          ERROR("Monospaced_Fontlist.String.parse:", e.message);
          monoFontList = "";
        }
        let monoFeature = await GMgetValue("_MONOSPACED_FEATURE_");
        try {
          monoFeature = monoFeature ? convertHtmlToText(JSON.parse(decrypt(monoFeature))) : "";
        } catch (e) {
          ERROR("Monospaced_Feature.String.parse:", e.message);
          monoFeature = "";
        }
        return { monoSiteRules, monoFontList, monoFeature };
      },
      async () => {
        "use strict";
        const defautlExSite = ["workstation-xi"].sort();
        let exSite = await GMgetValue("_EXCLUDE_SITES_");
        if (!exSite) {
          saveData("_EXCLUDE_SITES_", defautlExSite);
          exSite = defautlExSite;
        } else {
          try {
            exSite = [...JSON.parse(decrypt(exSite))];
          } catch (e) {
            ERROR("ExSite.JSON.parse:", e.message);
            def.const.structureError = true;
            exSite = defautlExSite;
          }
        }
        def.const.exSitesIndex = updateExsitesIndex(exSite);
        return { exSite, defautlExSite };
      },
      async () => {
        "use strict";
        let fontValue, domainValue, domainValueIndex, fontSelect, fontFace, fontSmooth, fontSize, fontStroke, fixStroke, fontShadow, shadowColor, fontCSS, fontEx;
        const domains = await GMgetValue("_DOMAINS_FONTS_SET_");
        const fonts = await GMgetValue("_FONTS_SET_");
        const isMatchEditorialSite = matchEditorialSites(INITIAL_VALUES.editorialSites);
        if (!domains) {
          saveData("_DOMAINS_FONTS_SET_", []);
        } else {
          try {
            domainValue = [...JSON.parse(decrypt(domains))];
          } catch (e) {
            ERROR("DomainValue.JSON.parse:", e.message);
            def.const.structureError = true;
            domainValue = [];
          }
          domainValueIndex = updateDomainsIndex(domainValue);
          def.count.domainCount = domainValue.length;
          def.const.domainIndex = domainValueIndex;
        }
        if (!fonts) {
          saveData("_FONTS_SET_", {
            fontSelect: INITIAL_VALUES.fontSelect,
            fontFace: INITIAL_VALUES.fontFace,
            fontSmooth: INITIAL_VALUES.fontSmooth,
            fontSize: INITIAL_VALUES.fontSize,
            fontStroke: INITIAL_VALUES.fontStroke,
            fixStroke: INITIAL_VALUES.fixStroke,
            fontShadow: INITIAL_VALUES.fontShadow,
            shadowColor: INITIAL_VALUES.shadowColor,
            fontCSS: INITIAL_VALUES.fontCSS,
            fontEx: INITIAL_VALUES.fontEx,
          });
          fontSelect = INITIAL_VALUES.fontSelect;
          fontFace = INITIAL_VALUES.fontFace;
          fontSmooth = INITIAL_VALUES.fontSmooth;
          fontSize = INITIAL_VALUES.fontSize;
          fontStroke = INITIAL_VALUES.fontStroke;
          fixStroke = INITIAL_VALUES.fixStroke;
          fontShadow = INITIAL_VALUES.fontShadow;
          shadowColor = INITIAL_VALUES.shadowColor;
          fontCSS = INITIAL_VALUES.fontCSS;
          fontEx = INITIAL_VALUES.fontEx;
        } else {
          try {
            fontValue = JSON.parse(decrypt(fonts));
          } catch (e) {
            ERROR("FontValue.JSON.parse:", e.message);
            def.const.structureError = true;
            fontValue = {};
          }
          if (typeof domainValueIndex !== "undefined") {
            fontSelect = removeDuplicateFonts(convertHtmlToText(domainValue[domainValueIndex].fontSelect), INITIAL_VALUES.fontBase);
            fontFace = Boolean(domainValue[domainValueIndex].fontFace);
            fontSmooth = Boolean(domainValue[domainValueIndex].fontSmooth);
            fontSize = !def.const.isFontsize ? 1 : isMatchEditorialSite ? 1 : Number(domainValue[domainValueIndex].fontSize) || 1;
            fontStroke = Number(domainValue[domainValueIndex].fontStroke) || 0;
            fixStroke = Boolean(IS_REAL_BLINK && fontStroke && (domainValue[domainValueIndex].fixStroke ?? true));
            fontShadow = Number(domainValue[domainValueIndex].fontShadow) || 0;
            shadowColor = convertHtmlToText(domainValue[domainValueIndex].shadowColor);
            fontCSS = convertHtmlToText(domainValue[domainValueIndex].fontCSS) || INITIAL_VALUES.fontCSS;
            fontEx = convertHtmlToText(domainValue[domainValueIndex].fontEx) || "";
          } else {
            fontSelect = removeDuplicateFonts(convertHtmlToText(fontValue.fontSelect), INITIAL_VALUES.fontBase);
            fontFace = Boolean(fontValue.fontFace);
            fontSmooth = Boolean(fontValue.fontSmooth);
            fontSize = !def.const.isFontsize ? 1 : isMatchEditorialSite ? 1 : Number(fontValue.fontSize) || 1;
            fontStroke = Number(fontValue.fontStroke) || 0;
            fixStroke = Boolean(IS_REAL_BLINK && fontStroke && (fontValue.fixStroke ?? true));
            fontShadow = Number(fontValue.fontShadow) || 0;
            shadowColor = convertHtmlToText(fontValue.shadowColor);
            fontCSS = convertHtmlToText(fontValue.fontCSS) || INITIAL_VALUES.fontCSS;
            fontEx = convertHtmlToText(fontValue.fontEx) || "";
          }
        }
        return { fontSelect, fontFace, fontSmooth, fontSize, fontStroke, fixStroke, fontShadow, shadowColor, fontCSS, fontEx, isMatchEditorialSite };
      }
    );
  })(createTrustedTypePolicy(), () => {
    "use strict";
    const navigatorInfo = getNavigatorInfo();
    const locationInfo = getLocationInfo();
    return { navigatorInfo, locationInfo };
  });
})(typeof window !== "undefined" ? window : this);
