// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字型渲染（自用指令碼）
// @name:en            Font Rendering (Customized)
// @name:ko            글꼴 렌더링(자체 스크립트)
// @name:ja            フォントレンダリング
// @version            2024.09.07.1
// @author             F9y4ng
// @description        无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-CN  无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-TW  無需安裝MacType，最佳化瀏覽器字型渲染效果，讓每個頁面的字型變得更有質感。預設使用“微軟雅黑”字型，也可根據喜好自定義其他字型使用。指令碼針對瀏覽器字型渲染提供了字型重寫、字型平滑、字型縮放、字型描邊、字型陰影、對特殊樣式元素的過濾和許可、自定義等寬字型等高階功能。指令碼支援全域性渲染與個性化渲染功能，可透過“單擊指令碼管理器圖示”或“使用快捷鍵”撥出配置介面進行引數配置。指令碼已相容絕大部分主流瀏覽器及主流指令碼管理器，且相容常用的油猴指令碼和瀏覽器擴充套件。
// @description:en     Enhance browser’s font rendering without installing MacType. This script offers a high-quality, customizable experience with ‘Microsoft YaHei’ font by default. It provides advanced features such as font rewriting, smoothing, scaling, stroking, shadowing, selective element handling and more. Designed for both general and personalized rendering, compatible with popular browsers, script managers & extensions. Configure via the script manager icon or keyboard shortcuts.
// @description:ko     이 스크립트는 MacType을 설치하지 않고도 브라우저의 글꼴 렌더링을 최적화하여 각 페이지의 글꼴을 더 질감 있게 만듭니다. 기본적으로 "Microsoft YaHei"를 사용하며, 사용자의 취향에 따라 다른 글꼴을 사용자 정의할 수 있습니다. 스크립트는 글꼴 재작성, 스무딩, 스케일링, 아웃라인, 그림자, 특수 스타일 요소 필터링 등 고급 기능을 제공합니다. 스크립트 관리자 아이콘을 클릭하거나 단축키를 사용하여 설정 화면을 열 수 있습니다. 대부분의 주요 브라우저와 스크립트 관리자, 일반적인 확장 프로그램과 호환됩니다.
// @description:ja     このスクリプトは、MacTypeをインストールせずにブラウザのフォントレンダリングを最適化し、各ページのフォントをより質感のあるものにします。デフォルトでは「Microsoft YaHei」を使用し、好みに応じて他のフォントをカスタマイズできます。スクリプトは、フォントの書き換え、スムージング、スケーリング、アウトライン、シャドウ、特殊スタイル要素のフィルタリングなどの高度な機能を提供します。スクリプトマネージャのアイコンをクリックするか、ショートカットを使用して設定画面を呼び出すことができます。ほとんどの主流のブラウザやスクリプトマネージャ、一般的な拡張機能と互換性があります。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon               https://img.icons8.com/stickers/48/font-style-formatting.png
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require            https://update.greasyfork.org/scripts/437214/1435000/frColorPicker.js#sha256-Rt7mY2BjCCdYkZp1frmkN/7zQ45yKn1LH5xR4oZsvps=
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
// @grant              GM_addElement
// @grant              GM_setClipboard
// @grant              GM.setClipboard
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
// @copyright          2020-2024, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (ctx, FontRendering, proxyArrayMethods) {
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
    reconstruct: { flag: true, date: "2023.04.08" },
  };
  if (!ctx.navigation) {
    const enhanceHistory = type => {
      const original = ctx.history[type];
      const event = new Event(type);
      return function () {
        const fn = original.apply(this, arguments);
        event.arguments = arguments;
        ctx.dispatchEvent(event);
        return fn;
      };
    };
    ctx.history.pushState = enhanceHistory("pushState");
    ctx.history.replaceState = enhanceHistory("replaceState");
  }
  ArrayMethods.forEach(method => void defineMethod(...method));
  FontRendering(ctx, utils, __protos__);
})(
  typeof window !== "undefined" ? window : this,
  function (global, secures, protoMethods) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { atob, btoa, alert, prompt, confirm, console, reconstruct, debugging, gm: GMinfo } = secures;
    const { aS: aSlice, oT: obj2Str, aF: asArray, gS: availableStorages } = protoMethods;
    const { local: localStorages, session: sessionStorages } = availableStorages;
    const GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion ?? "unknown";
    const GMscriptHandler = GMinfo.scriptHandler;
    const GMsetValue = gmSelector("setValue");
    const GMgetValue = gmSelector("getValue");
    const GMdeleteValue = gmSelector("deleteValue");
    const GMlistValues = gmSelector("listValues");
    const GMopenInTab = gmSelector("openInTab");
    const GMaddElement = gmSelector("addElement");
    const GMsetClipboard = gmSelector("setClipboard");
    const GMregisterMenuCommand = gmSelector("registerMenuCommand");
    const GMunregisterMenuCommand = gmSelector("unregisterMenuCommand");
    const GMunsafeWindow = gmSelector("unsafeWindow");
    const GMcontextMode = gmSelector("contextMode");

    /* INITIALIZE_DEBUG_FUNCTIONS */

    const IS_CHN = checkLocalChineseLanguage();
    const IS_DEBUG = setDebuggerMode() || debugging;
    const DEBUG = IS_DEBUG ? __console.bind(console, "log") : () => {};
    const INFO = IS_DEBUG ? __console.bind(console, "info") : () => {};
    const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
    const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

    /* INITIALIZE_COMMON_CONSTANTS */

    const def = {
      array: { exps: [], values: [], scaleMatrix: [], props: { window: [], element: [], html: [] } },
      count: { domainCount: 0, clickTimer: 0, exsiteSearch: 0, domainSearch: 0 },
      const: {
        seed: generateRandomString(6, "mix"),
        root: generateRandomString(6, "char"),
        raf: Symbol(`𐠱${generateRandomString(8, "hex")}`),
        caf: Symbol(`𐠱${generateRandomString(8, "hex")}`),
        dialog: `fr-dialog-${generateRandomString(8, "hex")}`,
        cssAttrName: `fr-css-${generateRandomString(8, "hex")}`,
        boldAttrName: `fr-bold-${generateRandomString(8, "hex")}`,
        iframeAttrName: `fr-iframe-${generateRandomString(8, "hex")}`,
        queryString: `html,head,head *,title,base,meta,style,link,script,noscript,iframe,img,template,template *,slot,canvas,svg,svg *,rect,ellipse,circle,line,polyline,polygon,path,image,clippath,mask,pattern,filter,stop,picture,form,object,param,embed,audio,video,source,track,progress,fr-colorpicker,fr-colorpicker *,fr-configure,fr-configure *,fr-dialogbox,fr-dialogbox *,gb-notice,gb-notice *`,
        flagName: "fr-found-conflict-callback",
      },
      var: {
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2024.09.07.0",
        scriptName: getMetaValue(`name:${getLanguages()}`) ?? decrypt("Rm9udCUyMFJlbmRlcmluZw=="),
        scriptAuthor: getMetaValue("author") ?? GMinfo.script.author ?? decrypt("Rjl5NG5n"),
        getScreenCTM: SVGGraphicsElement.prototype.getScreenCTM,
        getClientRects: Element.prototype.getClientRects,
        getBoundingClientRect: Element.prototype.getBoundingClientRect,
        fillText: CanvasRenderingContext2D.prototype.fillText,
        strokeText: CanvasRenderingContext2D.prototype.strokeText,
      },
      url: {
        introURL: decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcubGlrZXMuZmFucyUyRkZvbnQtUmVuZGVyaW5n"),
        fontlistImg: decrypt("aHR0cHMlM0ElMkYlMkZzMy5ibXAub3ZoJTJGaW1ncyUyRjIwMjQlMkYwNyUyRjIyJTJGMDEyYmRkOWMxNzMzMDlmOS5naWY="),
        loadingImg: decrypt("aHR0cHMlM0ElMkYlMkZpbWcuemNvb2wuY24lMkZjb21tdW5pdHklMkYwMzhkZGU0NThmOWE4NzRhODAxMjE2MGY3NDE3ZjZlLmdpZg=="),
        Anton: decrypt("aHR0cHMlM0ElMkYlMkZmb250cy5nc3RhdGljLmNvbSUyRnMlMkZhbnRvbiUyRnYyNSUyRjFQdGdnODdMUk95QW0zS3otQzgud29mZjI="),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepage") ?? getMetaValue("homepageURL") ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
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
        switcher: generateRandomString(6, "mix"),
        anim: generateRandomString(6, "mix"),
        range: generateRandomString(10, "char"),
        rangeProgress: generateRandomString(9, "mix"),
      },
      id: {
        rndStyle: generateRandomString(12, "char"),
        configure: generateRandomString(12, "char"),
        dialogbox: generateRandomString(12, "char"),
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
        fviewport: generateRandomString(8, "mix"),
        fixViewport: generateRandomString(8, "mix"),
        strokeSize: generateRandomString(8, "mix"),
        stroke: generateRandomString(8, "char"),
        fstroke: generateRandomString(8, "mix"),
        fshadow: generateRandomString(8, "mix"),
        fixStroke: generateRandomString(8, "mix"),
        lazyload: generateRandomString(8, "mix"),
        fixShadow: generateRandomString(8, "mix"),
        shadowSize: generateRandomString(8, "mix"),
        shadow: generateRandomString(8, "char"),
        color: generateRandomString(8, "char"),
        cssinclued: generateRandomString(8, "char"),
        cssexclude: generateRandomString(8, "char"),
        render: generateRandomString(8, "char"),
        mono: generateRandomString(8, "char"),
        cm: generateRandomString(8, "mix"),
        iscusmono: generateRandomString(6, "char"),
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
      constructor(context) {
        if (RAF.instance) return RAF.instance;
        this.global = context;
        this._registerAnimationFrame(context);
        this.timerMap = { timeout: {}, interval: {} };
        this.setTimeout = this.setTimeout.bind(this);
        this.setInterval = this.setInterval.bind(this);
        this.clearTimeout = this.clearTimeout.bind(this);
        this.clearInterval = this.clearInterval.bind(this);
        RAF.instance = this;
      }
      _registerAnimationFrame(scope) {
        scope[def.const.raf] =
          scope.requestAnimationFrame ||
          scope.webkitRequestAnimationFrame ||
          scope.mozRequestAnimationFrame ||
          scope.oRequestAnimationFrame ||
          (function () {
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
      _ticking(fn, type, interval, ...args) {
        let lastTime = Date.now();
        const timerSymbol = Symbol(type);
        const step = () => {
          this._setTimerMap(timerSymbol, type, step);
          if (interval < 16.7 || Date.now() - lastTime >= interval) {
            if (typeof fn === "function") fn(...args);
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
      setTimeout(fn, interval, ...args) {
        return this._ticking(fn, "timeout", interval, ...args);
      }
      clearTimeout(timer) {
        this._clearTimerMap(timer, "timeout");
      }
      setInterval(fn, interval, ...args) {
        return this._ticking(fn, "interval", interval, ...args);
      }
      clearInterval(timer) {
        this._clearTimerMap(timer, "interval");
      }
    }

    const raf = new RAF(global);

    /* NODE_OBSERVER */

    class NodeObserver {
      constructor(targetNode = () => document.documentElement) {
        this.targetNode = targetNode;
        this.result = new Map();
        this.isCancelled = false;
        this.callbackSet = new Set();
        this.config = { childList: true, subtree: true, attributes: true };
      }
      async getNodeAndObserve({ name, callback, config } = {}) {
        if (typeof callback === "function") this.callbackSet.add({ name, callback });
        this.config = config ?? this.config;
        this.target = this.targetNode();
        if (this.target) return this._observeElement(this.target);
        try {
          const raceResult = await Promise.race([this._waitForTarget(), sleep(1e4, { useCachedSetTimeout: true })]);
          if (raceResult) return this._observeElement(raceResult);
          throw new Error("Target node wait timeout!");
        } catch (e) {
          this.isCancelled = true;
          ERROR("getNodeAndObserve:", e.message);
          return this.result;
        }
      }
      _waitForTarget() {
        return new Promise(resolve => {
          const observer = new MutationObserver(() => {
            const target = this.targetNode();
            if (target || this.isCancelled) {
              resolve(target);
              observer.disconnect();
            }
          });
          observer.observe(document, { childList: true, subtree: true });
        });
      }
      _observeElement(node) {
        this.result.set(void 0, node);
        if (this.callbackSet.size === 0) return Promise.resolve(this.result);
        return new Promise(resolve => {
          const elementObserver = new MutationObserver((mutations, observer) => {
            this._handleCallbacks(node, mutations, observer);
            resolve(this.result);
          });
          elementObserver.observe(node, this.config);
        });
      }
      _handleCallbacks(node, mutations, observer) {
        for (const { name, callback } of this.callbackSet) {
          try {
            const result = callback({ node, mutations, observer }) ?? node;
            this.result.set(name, result);
          } catch (e) {
            ERROR("Error in callback for", { callback }, ":", e.message);
          }
        }
      }
    }

    /* GLOBAL_GENERAL_FUNCTIONS */

    function gmSelector(rec) {
      const gmFunctions = {
        setValue: typeof GM_setValue !== "undefined" ? GM_setValue : GM?.setValue ?? localStorages?.setItem.bind(localStorages),
        getValue: typeof GM_getValue !== "undefined" ? GM_getValue : GM?.getValue ?? localStorages?.getItem.bind(localStorages),
        deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : GM?.deleteValue ?? localStorages?.removeItem.bind(localStorages),
        listValues: typeof GM_listValues !== "undefined" ? GM_listValues : GM?.listValues ?? (() => []),
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : GM?.openInTab ?? open.bind(global),
        addElement: typeof GM_addElement !== "undefined" ? GM_addElement : void 0,
        setClipboard: typeof GM_setClipboard !== "undefined" ? GM_setClipboard : GM?.setClipboard ?? copyToClipboard,
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand,
        unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand,
        contextMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
        unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : global,
      };
      return gmFunctions[rec] ?? __console("warn", `Grant 'GM.${rec}' is not available.`) ?? (() => {});
    }

    function __console(action, message = "", ...args) {
      const _ = this ?? console;
      const commands = {
        log: ["log", "%c\u27A4 %c", "display:inline-block", "font-family:ui-monospace,monospace"],
        info: ["log", "%c\u27A4 ", "display:inline-block;padding:4px 0"],
        error: ["error", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        warn: ["warn", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        count: ["count", "\u27A4 "],
      };
      if (!commands[action]) return _.log(message, ...args);
      const [name, prefix, ...surfix] = commands[action];
      return _[name](prefix + message, ...[...surfix, ...args]);
    }

    function checkLocalChineseLanguage() {
      const lang = navigator.language || navigator.userLanguage || "en-US";
      return lang.startsWith("zh");
    }

    function qS(expr, target = document) {
      try {
        if (/^#[\w:.-]+$/.test(expr)) return target.getElementById(expr.slice(1));
        return target.querySelector(expr);
      } catch (e) {
        return null;
      }
    }

    function qA(expr, target = document) {
      try {
        return aSlice.call(target.querySelectorAll(expr), 0);
      } catch (e) {
        return [];
      }
    }

    function cE(nodeName, attributes = {}) {
      const el = document.createElement(nodeName);
      if (obj2Str.call(attributes) !== "[object Object]") return el;
      for (const [key, value] of setIterator(attributes)) {
        if (key === "class") Array.isArray(value) ? el.classList.add(...value) : el.classList.add(value);
        else if (["innerHTML", "textContent"].includes(key)) el[key] = value;
        else el.setAttribute(key, value);
      }
      return el;
    }

    function aS(target) {
      return target.attachShadow({ mode: "open" });
    }

    function gCS(target, opt = null) {
      if (target instanceof Element) return getComputedStyle(target, opt);
      return new Proxy({}, { get: () => "" });
    }

    function random(range, type = "round") {
      return Math[type]((global.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
    }

    function uniq(array) {
      if (!Array.isArray(array)) return [];
      return asArray(new Set(array)).filter(Boolean);
    }

    function toString(value) {
      if (typeof value === "symbol") return value.description;
      return String(value);
    }

    function capitalize(string) {
      string = toString(string ?? "").toLowerCase();
      return string.replace(/\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
    }

    function getNodeName(node) {
      return (node?.nodeName ?? "").toLowerCase();
    }

    function setIterator(collection) {
      if (!collection) return [][Symbol.iterator]();
      collection = typeof collection[Symbol.iterator] === "function" ? collection : typeof collection.length === "number" ? asArray(collection) : Object.entries(collection);
      return collection[Symbol.iterator]();
    }

    function encrypt(string, encode = true) {
      if (typeof string !== "string") string = toString(string);
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

    function generateRandomString(length, type) {
      const characters = {
        mix: "mYsTBgpkwNcGzFJdOMrt8n2jUC3fWRlKVA5y16oLxIXQE7Z9buvqie4PahH0SD",
        char: "zkDcUGopOvHJLfIZdPqEeRmyCSNYwrgbsFQuBXxnVWiltjMhaATK",
        hex: "a62f8bc07bd15c9ad3efe4",
        digit: "3927154680",
      };
      const prefix = "UKZJHQTRCSBFAYDMEVPXNWG";
      const chars = characters[type];
      const randomString = asArray({ length }, () => chars[random(chars.length, "floor")]).join("");
      return type === "mix" ? prefix[random(prefix.length, "floor")] + randomString.slice(1) : randomString;
    }

    function createTrustedTypePolicy() {
      const defaultPolicy = { createHTML: string => string };
      if (!global.trustedTypes?.createPolicy) return defaultPolicy;
      const currentHostName = global.location.hostname;
      const whitelist = [
        { host: "teams.live.com", policy: "goog#html" },
        { host: "github.dev", policy: "safeInnerHtml" },
        { host: "vscode.dev", policy: "safeInnerHtml" },
        { host: "bing.com", policy: "rwflyoutDefault" },
      ];
      const policyName = whitelist.Find(entry => currentHostName.endsWith(entry.host))?.policy ?? "fr#safeInnerHtml";
      return global.trustedTypes.createPolicy(policyName, defaultPolicy);
    }

    function getMainStyleElements({ currentScope, target = document }) {
      return currentScope ? qS(`#${def.id.rndStyle}`) : qA("style[id]", target).filter(item => asArray(item.attributes).Find(i => /^fr-css-[0-9a-f]{8}$/.test(toString(i.name))));
    }

    function checkRedundantScript(context) {
      const { isTop } = getLocationInfo();
      const redundantScripts = context["fr-init-redundantcheck"];
      const reportRedundanceError = () => {
        const scriptRedundanceText = IS_CHN
          ? `\ud83d\udea9 [脚本冗余警告]:\r\n发现冗余安装的脚本: "${def.var.scriptName}"，如刷新后问题依旧，请访问 ${def.url.feedback}/117 排查错误。`
          : `\ud83d\udea9 [Redundant Warning]:\r\nFound Redundant Script: '${def.var.scriptName}', if persists after reloading, please visit ${def.url.feedback}/117 to troubleshoot.`;
        const troubleshoot = `\ufff8\ud83d\uded1 ${IS_CHN ? "发现冗余安装的脚本，点击排查！" : "Troubleshoot Redundant"}`;
        isTop && GMregisterMenuCommand(troubleshoot, () => void (GMopenInTab(`${def.url.feedback}/117`, false) && refresh())) && __console("error", scriptRedundanceText);
        return true;
      };
      if (redundantScripts === true) return reportRedundanceError();
      context["fr-init-redundantcheck"] = true;
      if (GMcontextMode) {
        const redundantScriptsInfo = document.documentElement?.getAttribute("fr-init-rc");
        if (redundantScriptsInfo === "true") return reportRedundanceError();
        const contextWarnText = IS_CHN
          ? `${def.var.scriptName}警告\r\n脚本的注入模式已设置为"content"，部分脚本功能将受限制，如框架页面内部分功能失效、字体缩放后无法全局修正坐标等。`
          : `${def.var.scriptName} Warning\r\nThe injection mode of scripts has been set to "content", and some script functions will be limited.`;
        isTop && __console("warn", contextWarnText);
      }
      updateFlagAtRootElement(document.documentElement);
    }

    function refresh() {
      return sleep(5e2, { useCachedSetTimeout: true }).then(() => global.location.reload(true));
    }

    function updateFlagAtRootElement(target) {
      if (!target) return;
      if (!target.id) target.setAttribute("id", def.const.root);
      if (target.getAttribute("fr-init-rc") !== "true") target.setAttribute("fr-init-rc", true);
    }

    async function getNavigatorInfo() {
      const verifiedEngine = getRealBrowserEngine(global);
      const userAgentData = await getUserAgentDataFromExtension(`${GMscriptHandler} ${GMversion}`);
      return userAgentData ? getGlobalInfoFromUAD(userAgentData) : getGlobalInfoFromUA(navigator.userAgent);

      function getGlobalInfoFromUAD(uad) {
        const platform = getFullPlatformName(uad.platform);
        const mapBrandPath = ({ brand: b, version: v }) => `${/Not[^a-z]*A[^a-z]*Brand/i.test(b) ? 9 : /^Chrom(?:e|ium)$/i.test(b) ? 5 : 1}${b}\r${v}`;
        const [brand, brandVersion] = uad.brands?.map(mapBrandPath).sort()[0]?.slice(1).split("\r") ?? [];
        const engineMap = { Chrome: "Blink", Chromium: "Blink", Firefox: "Gecko", Safari: "WebKit" };
        const mapEnginePath = ({ brand, version }) => /^(Chrom(?:e|ium)|Firefox|Safari)$/i.test(brand) && `${brand}\r${version}`;
        const [engine, engineVersion] = uad.brands?.map(mapEnginePath).filter(Boolean)[0]?.split("\r") ?? [brand, brandVersion];
        const engineInfo = { engine: engineMap[capitalize(engine)] ?? getEngineFromUA(navigator.userAgent), engineVersion: parseFloat(engineVersion) || 99, verifiedEngine };
        const browserInfo = { brand: aSlice.call(brand?.split(/\s/) ?? [], -1)[0] ?? "Unknown", brandVersion: formatVersion(brandVersion), platform };
        return { ...engineInfo, ...browserInfo, credit: uad.credit ?? null };
      }

      function getGlobalInfoFromUA(ua) {
        const checkString = (str, exp = "") => new RegExp(str, exp).test(ua);
        const getVersion = (str, offset) => checkString(str) && ua.substring(ua.indexOf(str) + offset).match(/\d+(\.\d+)*/)?.[0];
        const { brand, brandVersion, engine, engineVersion } = getBrowserInfoFromUA(ua, checkString, getVersion);
        const platform = getOSInfoFromUA(checkString);
        return { engine, engineVersion, verifiedEngine, brand, brandVersion, platform, credit: null };
      }

      async function getUserAgentDataFromExtension(credit) {
        const getVMUserAgentData = async uad => {
          if (!uad) return null;
          const { brand, version, browserName, browserVersion, os, arch } = uad;
          const [bitness, architecture] = [arch?.split("-")[1], arch?.split("-")[0]];
          let brands = [
            { brand: capitalize(brand || "Not)A;Brand"), version: brand ? version : "99" },
            { brand: capitalize(browserName), version: browserVersion },
          ];
          if (GMinfo.userAgentData?.brands?.[0]) {
            try {
              return { ...(await getUserAgentDataHighEntropyValues(GMinfo.userAgentData)), credit };
            } catch (e) {
              brands = [...GMinfo.userAgentData.brands, ...brands];
            }
          }
          return { bitness, architecture, brands, platform: capitalize(os), credit };
        };
        const vmuad = GMscriptHandler === "Violentmonkey" ? await getVMUserAgentData(GMinfo.platform) : null;
        const tmuad = GMscriptHandler === "Tampermonkey" && GMinfo.userAgentData ? { ...GMinfo.userAgentData, credit } : null;
        const uad = navigator.userAgentData?.brands?.[0] ? await getUserAgentDataHighEntropyValues(navigator.userAgentData) : null;
        return vmuad ?? tmuad ?? uad;
      }

      async function getUserAgentDataHighEntropyValues(uad) {
        return await uad.getHighEntropyValues(["bitness", "architecture", "fullVersionList"]).then(rst => {
          rst.brands = rst.fullVersionList;
          delete rst.fullVersionList;
          return rst;
        });
      }

      function getBrowserInfoFromUA(ua, checkString, getVersion) {
        const engine = getEngineFromUA(ua);
        const brandMap = {
          OPR: { brand: "Opera", engine: "Blink", as: "Chrome" },
          YaBrowser: { brand: "Yandex", engine: "Blink", as: "Chrome" },
          Edg: { brand: "Edge", engine: "Blink", as: "Chrome" },
          Chromium: { brand: "Chromium", engine: "Blink" },
          Chrome: { brand: "Chrome", engine: "Blink" },
          LibreWolf: { brand: "LibreWolf", engine: "Gecko", as: "Firefox" },
          SeaMonkey: { brand: "SeaMonkey", engine: "Gecko", as: "Firefox" },
          PaleMoon: { brand: "PaleMoon", engine: "Gecko", as: "Firefox" },
          Waterfox: { brand: "Waterfox", engine: "Gecko", as: "Firefox" },
          Firefox: { brand: "Firefox", engine: "Gecko" },
          Konqueror: { brand: "Konqueror", engine: "webkit" },
          Kindle: { brand: "Kindle", engine: "WebKit", as: "Version" },
          Safari: { brand: "Safari", engine: "WebKit", as: "Version", verset: ["Version"] },
          Trident: { brand: "IE", engine: "Trident", verset: ["MSIE", "rv"] },
          Presto: { brand: "Opera", engine: "Presto" },
        };
        for (const [key, { brand, engine, verset, as }] of setIterator(brandMap)) {
          if (!checkString(key)) continue;
          const enVersionKey = as || key;
          const engineVersion = parseFloat(getVersion(enVersionKey, enVersionKey.length + 1) || 99);
          const versionKey = verset?.Find(k => checkString(k)) || key;
          let brandVersion = getVersion(versionKey, versionKey.length + 1);
          if (!brandVersion) continue;
          return { brand, brandVersion: formatVersion(brandVersion), engine, engineVersion };
        }
        const { b: brand, bv: brandVersion, ev: engineVersion } = getUnregisteredBrandAndVersionFromUA(ua);
        return { brand, brandVersion, engine, engineVersion };
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
        return /^(Like Mac|Ios)$/.test(os) ? "iOS" : os === "Cros" ? "Chrome OS" : os.startsWith("Win") ? "Windows" : os.startsWith("Mac") ? "MacOS" : os === "X11" ? "Linux" : os;
      }

      function getRealBrowserEngine(w) {
        return w.GestureEvent ? "WebKit" : w.scrollByLines || w.getDefaultComputedStyle ? "Gecko" : w.webkitRequestFileSystem || w.navigation ? "Blink" : "Unknown";
      }

      function getEngineFromUA(ua) {
        return /Gecko\/|Firefox\/|FxiOS/.test(ua) ? "Gecko" : /Chrom(?:e|ium)\/|CriOS/.test(ua) ? "Blink" : /AppleWebKit\/|Version\//.test(ua) ? "WebKit" : "Unknown";
      }

      function getUnregisteredBrandAndVersionFromUA(ua) {
        const nameOffset = ua.lastIndexOf(" ") + 1;
        const verOffset = ua.lastIndexOf("/");
        if (nameOffset === 0 || verOffset === -1 || verOffset < nameOffset) return { b: "Unknown", bv: "0.0.0.0", ev: 99 };
        const brand = ua.substring(nameOffset, verOffset).trim();
        const brandVersion = formatVersion(ua.substring(verOffset + 1).match(/\d*\.?\d+/)?.[0]);
        const engineVersion = parseFloat(ua.match(/(Chrom(?:e|ium)|Firefox|Version)\/(\d+(?:\.\d+)*)/i)?.[2] || brandVersion || 99);
        const validVersion = (!/version|\/|\(|\)|;/i.test(brand) && brandVersion) || "0.0.0.0";
        return { b: brand, bv: validVersion, ev: engineVersion };
      }

      function getOSInfoFromUA(checkString) {
        const platforms = ["like Mac", "Mac", "Android", "Debian", "Ubuntu", "Linux", "Win", "CrOS", "X11"];
        const platform = platforms.Find(p => checkString(p, "i")) || "Unknown";
        return getFullPlatformName(platform);
      }
    }

    function getLocationInfo() {
      const { pathname, host, hostname, protocol } = global.location;
      const isTop = global.self === global.top;
      const parentHost = global.parent !== global.self ? getParentHost() : host;
      return { host, hostname, pathname, protocol, parentHost, isTop };

      function getParentHost() {
        try {
          return global.parent.location.host;
        } catch (e) {
          return new URL(document.referrer || global.location).host;
        }
      }
    }

    function getMetaValue(str) {
      const queryReg = new RegExp(`//\\s+@${str}\\s+(.+)`);
      const metaValue = (GMinfo.scriptMetaStr || GMinfo.scriptSource)?.match(queryReg);
      return metaValue?.[1];
    }

    function getLanguages(lang = navigator.language) {
      const languages = { "zh-CN": true, "zh-TW": true, en: true, ja: true, ko: true };
      return languages[lang] ? lang : lang.startsWith("zh") ? "zh-CN" : "en";
    }

    function setDebuggerMode() {
      const key = decrypt("\u0052\u006a\u006c\u0035\u004e\u0047\u0035\u006e");
      const value = new URL(global.location).searchParams.get("whoami");
      return Object.is(key, value);
    }

    function sleep(delay, { useCachedSetTimeout } = {}) {
      const timeoutFunction = useCachedSetTimeout ? setTimeout : raf.setTimeout;
      const sleepPromise = new Promise(resolve => {
        timeoutFunction(resolve, delay);
      });
      const promiseFunction = value => sleepPromise.then(() => value);
      promiseFunction.then = sleepPromise.then.bind(sleepPromise);
      promiseFunction.catch = sleepPromise.catch.bind(sleepPromise);
      return promiseFunction;
    }

    function deBounce({ fn, delay = 0, timer, immed = false, once = false } = {}) {
      if (typeof fn !== "function" || !timer) return () => {};
      let caller = 0;
      const threshold = immed ? 1 : 0;
      return function () {
        const context = this;
        const args = arguments;
        const name = Symbol.for(toString(timer));
        if (immed === true && typeof def.count[name] === "undefined") {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
        } else {
          if (once === true && def.count[name] === true) return true;
          raf.clearTimeout(def.count[name]);
          caller++;
        }
        def.count[name] = raf.setTimeout(() => {
          if (caller > threshold) {
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
      return removedNodes.length === pendingNodes.length;

      function removeNode(item) {
        try {
          removedNodes.push(item.parentNode.removeChild(item));
        } catch (e) {
          removedNodes.push(item);
          item.remove();
        }
      }
    }

    function stopPropagations(event) {
      event.stopImmediatePropagation();
    }

    function convertToUnicode(str) {
      if (typeof str !== "string") return "";
      const result = asArray(str, char => `\\${("00" + char.charCodeAt(0).toString(16)).slice(-4)}`).join("");
      return result.toUpperCase();
    }

    function copyToClipboard(text, type = "text/plain") {
      try {
        navigator.clipboard.writeText(text);
      } catch (e) {
        const handler = event => {
          event.preventDefault();
          event.clipboardData.setData(type, text);
          document.removeEventListener("copy", handler, true);
        };
        document.addEventListener("copy", handler, true);
        document.execCommand("copy");
      }
    }

    /* ENVIRONMENT_VARIABLE_PREPROCESSING */

    void (async function (tTP, getRawJSONThroughBypass, getBrowserEnvironment) {
      const getDocumentElement = new NodeObserver();
      const getHeadElement = new NodeObserver(() => document.head);
      const getBodyElement = new NodeObserver(() => document.body);
      const [IS_INTERNALSTYLE_ALLOWED, { navigatorInfo, locationInfo }] = await Promise.all([isInternalStyleAllowed(), getBrowserEnvironment()]);
      const { engine, engineVersion, verifiedEngine, brand, platform, credit } = navigatorInfo;
      const { host: CUR_HOST, hostname: CUR_HOST_NAME, pathname: CUR_HOST_PATH, protocol: CUR_PROTOCOL, parentHost: TOP_HOST, isTop: CUR_WINDOW_TOP } = locationInfo;
      const IS_CHEAT_UA = !credit && (engine !== verifiedEngine || checkBlinkCheatingUA());
      const IS_REAL_BLINK = verifiedEngine === "Blink";
      const IS_REAL_GECKO = verifiedEngine === "Gecko";
      const IS_REAL_WEBKIT = verifiedEngine === "WebKit";
      const IS_IN_FRAMES = CUR_WINDOW_TOP ? "" : "[FRAMES]";
      const IS_GREASEMONKEY = ["Greasemonkey", "Userscripts"].includes(GMscriptHandler);
      const [IS_BLINK_BELOW_128, IS_BLINK_ABOVE_128] = IS_REAL_BLINK ? [engineVersion < 128, engineVersion >= 128] : [];
      const IS_COMPATIBLE_ADOPTEDSTYLE = checkBrowserCompatibility({ WEBKIT: 16.4, BLINK: 73, GECKO: 101 });
      const IS_CAUSED_BOLDSTROKEERROR = checkBrowserCompatibility({ BLINK: 96 });
      const IS_CAUSED_BOLDSHADOWERROR = checkBrowserCompatibility({ BLINK: 123 });
      const rawJSON = getRawJSONThroughBypass(global, IS_IN_FRAMES);

      /* CUSTOMIZE_UPDATE_PROMPT_INFORMATION */

      const UPDATE_VERSION_NOTICE = IS_CHN
        ? `<li class="${def.const.seed}_add">新增对 Canvas 元素的字体渲染支持。(实验性功能)</li>
            <li class="${def.const.seed}_fix">改进浏览器页面文本选取样式及代码块选取样式。</li>
            <li class="${def.const.seed}_fix">改进浏览器信息检测及解析功能的兼容性。</li>
            <li class="${def.const.seed}_fix">改进视口单位修正功能的运行效率，提高兼容性。</li>
            <li class="${def.const.seed}_fix">改进粗体修正功能的性能，提高兼容性，增强冲突检测。</li>
            <li class="${def.const.seed}_fix">修复 iframe.srcdoc 框架页面未能正常渲染的问题。</li>
            <li class="${def.const.seed}_fix">修复在 Chromium v128+ 中使用字体缩放导致的问题。</li>
            <li class="${def.const.seed}_fix">修复一些已知的问题，优化代码，优化样式。</li>`
        : `<li class="${def.const.seed}_add">Added font rendering support for Canvas. (Exp. Feat)</li>
            <li class="${def.const.seed}_fix">Improved browser text and code block selection style.</li>
            <li class="${def.const.seed}_fix">Improved the compatibility of browser-info detection.</li>
            <li class="${def.const.seed}_fix">Improved the operation efficiency of viewport unit correction function and enhanced compatibility.</li>
            <li class="${def.const.seed}_fix">Improved the performance of the Bold-Fixes function, enhanced compatibility, optimized conflict detection.</li>
            <li class="${def.const.seed}_fix">Fixed iframe.srcdoc frame not rendering properly.</li>
            <li class="${def.const.seed}_fix">Fixed font scaling feature issue in Chromium v128+.</li>
            <li class="${def.const.seed}_fix">Fixed some known issues, optimized code & style.</li>`;

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
      ]);

      /* INITIALIZE_FONT_RENDERING_PARAMETERS */

      const INITIAL_VALUES = {
        fontBase: `system-ui,-apple-system,BlinkMacSystemFont,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Android Emoji','EmojiSymbols','EmojiOne Mozilla','Twemoji Mozilla','Segoe UI Symbol','Noto Color Emoji Compat',emoji,'Font Awesome 6 Pro','Font Awesome 5 Pro',FontAwesome,iconfont,icomoon,IcoFont,fontello,themify,'Segoe Fluent Icons','Material Design Icons',bootstrap-icons`,
        fontSelect: IS_REAL_WEBKIT || (!IS_CHEAT_UA && platform === "MacOS") ? `'PingFang SC'` : `'Microsoft YaHei UI'`,
        fontFace: true,
        fontSmooth: true,
        fontSize: 1.0,
        fixViewport: true,
        fontStroke: IS_REAL_GECKO ? 0.08 : IS_REAL_BLINK ? 0.015 : 0.0,
        fixStroke: IS_CAUSED_BOLDSTROKEERROR,
        lazyload: false,
        fontShadow: IS_REAL_GECKO ? 0.36 : 0.75,
        fixShadow: false,
        shadowColor: IS_REAL_GECKO ? "#7C7C7C70" : "#7C7C7CDD",
        fontCSS: `:not(i,head *):not([class*='glyph']):not([class*='symbols' i]):not([class*='icon' i]):not([class*='fa-']):not([class*='vjs-'])`,
        fontEx: `progress,meter,datalist,samp,kbd,pre,pre *,code,code *`,
        monospacedFont: `'Operator Mono Lig','Fira Code','Source Code Pro','DejaVu Sans Mono','Anonymous Pro','Ubuntu Mono','Roboto Mono','JetBrains Mono','Droid Sans Mono','Mono','Monaco','Menlo','Inconsolata','Liberation Mono'`,
        monospacedFeature: `"liga" 0,"tnum","zero"`,
        editorialSites: `cdn.addon.tencentsuite.com|docs.google.com|docs.qq.com|feishu.cn|fonts.google.com|github.com|github.dev|github1s.com|image.baidu.com|kdocs.cn|newassets.hcaptcha.com|note.youdao.com|notion.site|notion.so|shimo.im|support.google.com|vscode.dev|weread.qq.com|wolai.com|wqxuetang.com|xiezuocat.com|youtube.com|yuque.com`,
      };

      /* INITIALIZE_OUTSIDE_URI */

      def.url.guideURI = `${def.url.feedback}/../wiki/${IS_CHN ? encodeURIComponent("字体渲染（自用脚本）") : "Font-Rendering-(Customized)"}`;
      def.url.installURI = `${def.url.homepage}${IS_CHN ? "index.html#字体渲染自用脚本" : "index_en.html#font-rendering-customized"}-font-renderinguserjs`;

      /* INITIALIZE_SHADOWROOT_STYLE */

      def.const.style = {
        main: `display:inline-block;font-family:ui-monospace,monospace`,
        firefox: `input:is([type='text'],[type='password'],[type='search']),input:not([type]){font-family:initial!important}`,
        frDialog: `:root>#${def.const.dialog}{display:block!important;width:auto!important;height:auto!important;background:0 0!important;opacity:1!important;border-width:0!important;outline:0!important;z-index:2147483647!important}:root>#${def.const.dialog}::backdrop{background:transparent!important}@font-face{font-family:Anton;font-style:normal;font-weight:400;font-display:swap;src:local("Impact"),url(${def.url.Anton}) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+0304,U+0308,U+0329,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}`,
        frDialogBox:
          `:host(#${def.id.dialogbox}){position:fixed!important;top:0;left:0;width:100%;height:100%;background:0 0!important;pointer-events:none;z-index:2147483647}.${def.class.db}{position:absolute;top:calc(12% + 10px);right:15px;z-index:99999;display:block;overflow:hidden;box-sizing:content-box;width:100%;max-width:420px;border:2px solid #efefef;border-radius:6px;background:#fff;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.3);color:#444;transition:opacity .5s;pointer-events:auto;opacity:0}.${def.class.db} *{text-shadow:0 0 1px #777!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}.${def.class.dbt}{display:flex;margin-top:0;padding:10px 15px;width:auto;background:#efefef;text-align:left;font-weight:700;font-size:18px!important;flex-wrap:wrap;justify-content:space-between;align-items:center;align-content:center}.${def.class.dbt},.${def.class.dbt} *{font-weight:700;font-size:20px!important;font-family:Candara,Times,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm}{display:block;margin:5px;padding:10px;color:#444;text-align:left;font-weight:500;font-size:16px!important}.${def.class.dbb}{display:inline-block;box-sizing:content-box;margin:2px 1%;padding:8px 12px;min-width:12%;border-radius:4px;text-align:center;text-decoration:none!important;letter-spacing:0;font-weight:400;cursor:pointer}.${def.class.db} .${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.${def.class.db} .${def.const.seed}_gradient_bg{background:#e7ffd9;animation:gradient 2s ease-in-out forwards}@keyframes gradient{0%{background:#e7ffd9}to{background:transparent}}.${def.class.db} .${def.class.dbt},.${def.class.db} .${def.class.dbb}{text-shadow:none!important;-webkit-text-stroke:0 transparent!important;-webkit-user-select:none;user-select:none}.${def.class.db} .${def.class.dbb}:hover{box-sizing:content-box;color:#fff;text-decoration:none!important;font-weight:700;opacity:.8}.${def.class.db} .${def.class.dbbf}{border:1px solid #d93223!important;border-radius:6px;background:#d93223!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}` +
          `.${def.class.db} .${def.class.dbbt}{border:1px solid #038c5a!important;border-radius:6px;background:#038c5a!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}.${def.class.dbbn}{border:1px solid #777!important;border-radius:6px;background:#777!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${def.class.dbbc}{display:block;padding:2.5%;background:#efefef;color:#fff;text-align:right;font-size:initial}.${def.class.dbm} textarea{cursor:auto;overscroll-behavior:contain}.${def.class.dbm} textarea::-webkit-scrollbar{width:8px;height:8px}.${def.class.dbm} textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaa}.${def.class.dbm} textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999}.${def.class.dbm} textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-track-piece{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa}.${def.class.dbm} button:hover{background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important;cursor:pointer}.${def.class.dbm} p{margin:5px 0!important;text-align:left;text-indent:0;font-weight:400;font-size:16px;line-height:1.5!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul{margin:0 0 0 10px!important;padding:2px;color:#808080;list-style:none;font:italic 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${def.class.dbm} ul::-webkit-scrollbar-thumb{border-radius:10px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} ul::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul::-webkit-scrollbar-track-piece{border-radius:6px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul li{display:list-item;list-style-type:none;word-break:break-all}.${def.class.dbm} li:before{display:none}.${def.class.dbm} ul#${def.const.seed}_d_d_ li:hover{background-color:rgba(253, 246, 236, 0.8)!important}` +
          `.${def.class.dbm} #${def.const.seed}_temporary{padding:18px 8px;text-align:center;color:#555;font-size:14px!important}.${def.class.dbm} #${def.id.bk},.${def.class.dbm} #${def.id.pv},.${def.class.dbm} #${def.id.fs},.${def.class.dbm} #${def.id.fvp},.${def.class.dbm} #${def.id.hk},.${def.class.dbm} #${def.id.ct},.${def.class.dbm} #${def.id.mps},.${def.class.dbm} #${def.id.flc},.${def.class.dbm} #${def.id.gc},.${def.class.dbm} #${def.id.cm}{display:flex;box-sizing:content-box;margin:0;padding:2px 4px!important;width:calc(98% - 10px);height:max-content;min-width:auto;min-height:40px;list-style:none;font-style:normal;justify-content:space-between;align-items:flex-start;word-break:break-word}.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(245, 146, 146, 0.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0, 0, 0, 0.6);color:#fff;content:' '}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:'OFF';font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:'ON'}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:' '}.${def.class.dbm} .${def.const.seed}_VIP,.${def.class.dbm} .${def.const.seed}_cusmono{margin:2px 0 0 0;color:#b8860b!important;font:normal 400 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.class.dbm} #${def.id.flc} button,.${def.class.dbm} #${def.id.gc} button{box-sizing:border-box!important;margin:0 5px 0 0!important;padding:5px!important;border:1px solid #999!important;border-radius:4px!important;background-color:#eee;color:#444!important;letter-spacing:normal!important;font-weight:400!important;font-size:14px!important}` +
          `#${def.const.seed}_monospaced_siterules::placeholder,#${def.const.seed}_monospaced_font::placeholder,#${def.const.seed}_monospaced_feature::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} a{color:#0969da;text-decoration:none!important;font-style:inherit}.${def.class.dbm} a:hover{color:#dc143c;text-decoration:underline}.${def.class.dbm} #${def.id.feedback}{box-sizing:content-box;margin:0;padding:2px 10px;width:max-content;height:22px;min-width:auto;font-style:normal;font-size:16px;cursor:pointer}.${def.class.dbm} #${def.id.files}{display:none}.${def.class.dbm} #${def.id.feedback}:hover{color:#dc143c!important}.${def.class.dbm} #${def.id.feedback}:after{width:0;height:0;background:url('${def.url.loadingImg}') no-repeat -400px -300px;content:""}#${def.id.flcid}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.id.maxps}{box-sizing:border-box;padding:4px 5px;width:70px;min-width:70px;border:2px solid #b8860b;border-radius:4px;background:#efefef;color:#333;text-align:center;font:normal 400 16px/150% 'Anton',Times,serif!important}.${def.class.dbm} ul.${def.class.main}{overflow-x:hidden;box-sizing:content-box;margin:0;padding:5px 0;max-height:255px;overscroll-behavior:contain}#${def.id.globaldisable}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.const.seed}_c_w_d_d_{box-sizing:border-box;margin-left:15px;padding:3px 5px;width:max-content;height:max-content;max-width:120px;min-height:30px;border:1px solid #777;border-radius:4px;background-color:#eee;color:#333!important;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_a_w_d_l_>span{margin:0;padding:0 2px;color:#3e3e3e;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_c_w_d_{color:#4b0082;cursor:help;word-break:break-all}p.${def.const.seed}_exclusion{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}#${def.const.seed}_d_s_{box-sizing:content-box;margin:4px 6px;padding:2px 6px;width:57%;height:22px;outline:none!important;border:2px solid #777;border-radius:4px;font:normal 400 16px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important}` +
          `#${def.const.seed}_d_s_s_{box-sizing:border-box;margin:0;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;outline:none!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_s_c_{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_s_a_{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#8b0000!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_d_{overflow-x:hidden;margin:0!important;padding:0!important;max-height:190px;list-style:none!important;overscroll-behavior:contain}#${def.const.seed}_d_d_ li[id^='${def.const.seed}_d_d_l_']{display:flex;overflow:hidden;margin:0;padding:5px;max-width:364px;color:#555;list-style:none;white-space:nowrap;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,-apple-system,BlinkMacSystemFont!important;justify-content:space-between}#${def.const.seed}_d_d_ span.${def.const.seed}_domainlist{overflow:hidden;margin-right:auto;padding-left:5px;width:85%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}#${def.const.seed}_d_d_ .${def.const.seed}_customdomain{overflow:hidden;margin-left:5px;width:57%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}#${def.const.seed}_custom_Fontlist{box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:160px!important;max-height:457px;outline:none!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:vertical;overscroll-behavior:contain}` +
          `#${def.const.seed}_d_d_ a[id^='${def.const.seed}_d_d_l_s_']{padding:2px;background:0 0;color:#8b0000;font-size:14px!important;cursor:pointer}#${def.const.seed}_exSite_add{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}#${def.const.seed}_fontoverride_def_array,#${def.const.seed}_fontscale_def_json{box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:160px!important;outline:0!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:vertical;overscroll-behavior:contain}#${def.const.seed}_warning_chn{display:block;margin:-2px 0 0 -7px!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}_warning_en{display:block;margin:0!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}_monospaced_font,#${def.const.seed}_monospaced_feature{box-sizing:border-box;padding:5px;width:380px;outline:0!important;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig',monospace,${INITIAL_VALUES.fontSelect}!important}#${def.const.seed}_monospaced_siterules{box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:140px!important;max-height:256px;outline:0!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:vertical;overscroll-behavior:contain;word-break:keep-all!important}.${def.class.dbm} p.${def.const.seed}_mono_notify{display:block;margin-top:10px!important;color:#555;font-size:14px!important}#${def.id.cm}{margin:0 0 8px;width:97%!important;border-bottom:1px groove #ccc}.${def.class.dbm} span.${def.const.seed}_cusmono{color:#555!important;font-weight:700!important}#${def.const.seed}_kbd{display:inline-block;box-sizing:content-box;margin:4px 0 0;padding:3px 10px;width:94%;border:1px solid rgba(175, 184, 193, 0.4);border-radius:6px;background-color:#f6f8fa;color:#666;vertical-align:middle;text-align:center;font-size:14px!important}` +
          `.${def.const.seed}_cga{color:#808080!important}.${def.const.seed}_cge{color:#a9a9a9!important}.${def.const.seed}_cdc1{color:#dc143c!important}.${def.const.seed}_fsn{font-style:normal!important}.${def.const.seed}_fsi{font-style:italic!important}.${def.const.seed}_f20{font-size:20px!important}.${def.const.seed}_save_p{display:flex;height:30px;align-items:center}.${def.const.seed}_mh22{min-height:22px}.${def.const.seed}_op1{opacity:1!important}.${def.const.seed}_ti6{text-indent:6px!important}.${def.const.seed}_m0500{margin:0 5px 0 0}.${def.const.seed}_p0{padding:0}.${def.const.seed}_f14{font-size:14px!important}.${def.const.seed}_f11{font-size:11px!important}.${def.const.seed}_cce{color:#cecece!important}.${def.const.seed}_ccr{color:#dc143c!important}.${def.const.seed}_cp{cursor:pointer}.${def.const.seed}_wbka{word-wrap:break-word;word-break:break-all!important}.${def.const.seed}_idg{color:#4b0082!important}.${def.const.seed}_cdg{color:#006400!important}.${def.const.seed}_cb8{color:#8b0000!important}.${def.const.seed}_c55{color:#555!important}.${def.const.seed}_fb{font-weight:700!important}.${def.const.seed}_f12{font-size:12px!important}.${def.const.seed}_ctan{color:#d2b48c!important}.${def.const.seed}_csg{color:#708090!important}.${def.const.seed}_cco{color:#ff7f50!important}.${def.const.seed}_list_p{display:flex;justify-content:left;align-items:center}.${def.const.seed}_m05{margin:0 5px}.${def.const.seed}_cto{color:#ff6347!important}.${def.const.seed}_v_en{padding:0px 4px;font:italic 700 20px/130% Candara,Times New Roman!important}.${def.const.seed}_v_cn{padding:4px;font:italic 700 22px/150% Candara,Times!important}.${def.const.seed}_hi_cn{font:italic 700 22px/150% ${INITIAL_VALUES.fontSelect},Arial!important}.${def.const.seed}_hi_en{font:normal 700 20px/150% ${INITIAL_VALUES.fontSelect},Arial!important}.${def.const.seed}_pd4{padding:4px}.${def.const.seed}_lh180{line-height:180%!important}.${def.const.seed}_cb88{color:#b8860b!important}.${def.const.seed}_tac{text-align:center!important}.${def.const.seed}_cps{padding-bottom:6px;font-size:18px!important}.${def.const.seed}_cpsa{display:inline-block;overflow:hidden;width:302px;height:237px;border:2px solid #b8860b;border-radius:8px;background:url('${def.url.loadingImg}') 50% 50% no-repeat}.${def.const.seed}_bdcr{border-color:#ff0000!important}.${def.const.seed}_bdcdo{border-color:#ff8c00!important}` +
          `.${def.const.seed}_tabd{border:2px solid #dc143c!important}.${def.const.seed}_inline_block{display:inline-block!important}.${def.const.seed}_block{display:block!important}.${def.const.seed}_none{display:none!important}.${def.const.seed}_visible{visibility:visible!important}.${def.const.seed}_hidden{visibility:hidden!important}.${def.const.seed}_list_reset{text-decoration:line-through;font-style:italic}#${def.const.seed}_copy_to_author{overflow-y:auto;margin:0!important;padding:0!important;max-height:300px;list-style-position:outside}#${def.const.seed}_copy_to_author li{padding:2px}.${def.class.dbm} #${def.const.seed}_custom_Fontlist::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;word-break:break-all!important}.${def.class.dbm} #${def.const.seed}_update li{margin:0;padding:1px 4px;color:#808080;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_add{list-style-type:'\uff0b'}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_del{list-style-type:'\uff0d'}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_fix{list-style-type:'\uff20'}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_info{color:#daa520;word-break:break-word;list-style-type:'\u266f'}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_warn{color:#e90000;word-break:break-word;list-style-type:'\u2718'}.${def.class.dbm} #${def.const.seed}_update .${def.const.seed}_init{color:#65a16a;word-break:break-word;list-style-type:'\u2691'}.${def.class.dbm} input:focus,.${def.class.dbm} textarea:focus{box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.1),0 0 4px rgba(110, 111, 112, 0.6)!important}@-moz-document url-prefix() {.${def.class.dbm} textarea,.${def.class.dbm} ul,#${def.const.seed}_custom_Fontlist,#${def.const.seed}_monospaced_siterules,#${def.const.seed}_fontoverride_def_array,#${def.const.seed}_fontscale_def_json{scrollbar-color:rgba(187, 187, 187, 0.73) rgba(238, 238, 238, 0.07);scrollbar-width:thin}}`,
        frConfigure:
          `:host(#${def.id.configure}){position:fixed!important;top:0;left:0;width:100%;height:100%;background:0 0!important;pointer-events:none;z-index:2147483645}#${def.id.container}{position:absolute;top:10px;right:24px;z-index:99999;overflow-x:hidden;overflow-y:auto;display:block;box-sizing:content-box;padding:4px;max-height:calc(100% - 40px);min-height:10%;border-radius:12px;background:#f0f6ff!important;box-shadow:0 0 4px 0 rgba(0, 0, 0, 0.3);color:#333;text-align:left;font-weight:700;font-size:16px!important;opacity:0;transition:opacity .5s;width:auto;overscroll-behavior:contain;pointer-events:auto}#${def.id.container}::-webkit-scrollbar{width:10px;height:1px}#${def.id.container}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.container}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.container}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.container} *{text-shadow:none!important;font-weight:700;font-size:16px;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Android Emoji,EmojiSymbols!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}#${def.id.container} fieldset{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;min-height:475px;border:2px groove #67a5df!important;border-radius:10px;background:#f0f6ff!important}#${def.id.container} legend{position:relative!important;float:none!important;display:block!important;visibility:visible!important;box-sizing:content-box;margin:0;padding:0 32px 0 8px;width:auto!important;height:auto!important;border:none!important;background:#f0f6ff!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.container} fieldset ul{margin:0;padding:0;background:#f0f6ff!important}#${def.id.container} ul li{float:none;display:inherit;box-sizing:content-box;margin:3px 0;min-width:-webkit-fill-available;min-width:-moz-available;border:none;background:#f0f6ff!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none}#${def.id.container} ul li:before{display:none}` +
          `#${def.id.container} .${def.class.rotation} svg{visibility:visible!important;overflow:hidden;width:24px;height:24px;vertical-align:initial!important;fill:#67a5df}#${def.id.container} .${def.class.rotation} svg:hover{cursor:help}#${def.const.seed}_scriptname{display:inline-block;margin:0 4px 0 0;vertical-align:bottom;overflow:hidden;min-width:130px;max-width:225px;text-overflow:ellipsis;white-space:nowrap;font-weight:700!important;-webkit-user-select:all;user-select:all}#${def.const.seed}_scriptname:hover{cursor:help}#${def.id.container} .${def.class.title} .${def.class.guide}{position:absolute;display:inline-block;cursor:pointer}@keyframes rotation{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}.${def.class.title} .${def.class.rotation}{position:relative;display:block;top:auto;right:auto;bottom:auto;left:auto;margin:0;padding:0;width:24px;height:24px;-webkit-transform:rotate(1turn);transform-origin:center 50% 0;animation:rotation 6s linear infinite}#${def.id.container} input:not([type='range'],[type='checkbox']):focus,#${def.id.container} textarea:focus{box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.1),0 0 6px rgba(82, 168, 236, 0.6)!important}#${def.id.fontList}{padding:2px 10px 0;min-height:73px}#${def.id.fontFace},#${def.id.fontSmooth}{display:flex!important;padding:2px 10px;width:calc(100% - 18px);height:40px;min-width:auto;align-items:center;justify-content:space-between}#${def.id.fontSize}{padding:2px 10px;height:60px}#${def.id.fontStroke}{padding:2px 10px;height:60px}#${def.id.fontShadow}{padding:2px 10px;height:60px}#${def.id.container} #${def.id.shadowColor}{display:flex;margin:4px;padding:2px 10px;width:auto;min-height:45px;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}#${def.id.fontCss},#${def.id.fontEx}{padding:2px 10px;height:110px;min-height:110px;min-width:254px!important}#${def.id.submit}{padding:2px 10px;height:40px}#${def.id.fontList} .${def.class.selector} a{text-decoration:none;font-weight:400}#${def.id.fontList} .${def.class.label}{display:inline-block;margin:-1px 4px 5px 0;padding:0;height:34px;line-height:100%!important}#${def.id.fontList} .${def.class.label} span{display:inline-block;overflow:hidden;box-sizing:border-box;padding:5px;width:max-content;height:max-content;max-width:200px;min-width:12px;background:#67a5df;color:#fff;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:16px!important` +
          `}#${def.id.fontList} .${def.class.close}:hover{border-radius:2px;background-color:#2d7dca;color:#ff6347}@-moz-document url-prefix() {#${def.id.fontList} .${def.class.label}{margin:-1px 0 4px 0}}#${def.id.fontList} .${def.class.close}{width:12px}#${def.id.selector}{width:100%;max-width:100%;display:none}#${def.id.selector} label{display:block;margin:0 0 4px;color:#333;cursor:auto}#${def.id.selector} #${def.id.cleaner}{margin-left:5px;cursor:pointer}#${def.id.selector} #${def.id.cleaner}:hover{color:#dc143c}#${def.id.fontList} .${def.class.selector}{overflow-x:hidden;box-sizing:border-box;margin:0 0 6px 0;padding:6px 0 0 6px;width:100%;max-width:254px;max-height:90px;min-width:100%;min-height:45px;border:2px solid #67a5df!important;border-radius:6px;overscroll-behavior:contain;}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selectFontId} span.${def.class.spanlabel},#${def.id.selector} span.${def.class.spanlabel}{display:block!important;margin:0!important;padding:0 0 4px;width:auto;border:0;background-color:transparent!important;color:#333;text-align:left!important}#${def.id.fontList} .${def.class.selectFontId}{width:auto}#${def.id.fontList} .${def.class.selectFontId} input{overflow:hidden;box-sizing:border-box;margin:0;padding:1px 23px 1px 2px;width:230px;height:42px!important;max-width:100%;min-width:100%;outline:none!important;outline-color:#67a5df;border:2px solid #67a5df!important;border-radius:6px;background:#fafafa;text-indent:8px;text-overflow:ellipsis;color:#333;font-weight:700;font-size:16px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.fontList} .${def.class.selectFontId} input[disabled]{pointer-events:none!important}#${def.id.fontList} input[disabled]::placeholder{color:#444!important}#${def.id.fontList} .${def.class.selectFontId} input::-webkit-search-cancel-button{margin:0 7px}` +
          `#${def.const.seed}_fontoverride_defined:hover,#${def.const.seed}_fontscale_defined:hover{cursor:help;color:#8b0000}.${def.class.placeholder}::placeholder{color:#369!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;opacity:.65}#${def.id.fontList} .${def.class.selectFontId} dl{display:none;position:absolute;z-index:1000;overflow-x:hidden;box-sizing:content-box;margin:4px 0 0;padding:4px 8px;width:auto;max-width:calc(100% - 68px);max-height:298px;min-width:60%;border:2px solid #67a5df!important;border-radius:6px;background-color:#fff;white-space:nowrap;font-size:18px!important;overscroll-behavior:contain}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar{width:10px;height:1px}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontId} dl::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.fontList} .${def.class.selectFontId} dl dd{display:block;overflow-x:hidden;box-sizing:content-box;margin:1px 8px;padding:5px 0;width:-moz-available;width:-webkit-fill-available;max-width:100%;min-width:100%;text-overflow:ellipsis;font-weight:400;font-size:21px!important}#${def.id.fontList} .${def.class.selectFontId} dl dd:hover{overflow-x:hidden;box-sizing:content-box;min-width:-moz-available;min-width:-webkit-fill-available;background-color:#67a5df;color:#fff;text-overflow:ellipsis}.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(245, 146, 146, 0.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0, 0, 0, 0.6);color:#fff;content:" "}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-style:normal;font-size:16px}` +
          `.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:"ON"}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}#${def.id.fface} label,#${def.id.fface}+label::after,#${def.id.fface}+label::before,#${def.id.smooth} label,#${def.id.smooth}+label::after,#${def.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}#${def.id.fontShadow} div.${def.class.flex}:before,#${def.id.fontShadow} div.${def.class.flex}:after,#${def.id.fontStroke} div.${def.class.flex}:before,#${def.id.fontStroke} div.${def.class.flex}:after,#${def.id.fontSize} div.${def.class.flex}:before,#${def.id.fontSize} div.${def.class.flex}:after{display:none}#${def.id.fontShadow} #${def.id.shadowSize},#${def.id.fontStroke} #${def.id.strokeSize},#${def.id.fontSize} #${def.id.fontScale}{box-sizing:content-box;margin:0 10px 0 0!important;padding:0;width:56px!important;height:32px!important;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:#fafafa!important;color:#111!important;text-align:center;text-indent:0;font-weight:400!important;font-size:17px!important;font-family:'Anton',Times,serif!important}#${def.id.fontSize} #${def.id.fontScale}[disabled]{background-color:rgba(228, 231, 237, 0.82)!important;color:#555!important;filter:grayscale(.9)}#${def.id.fviewport},#${def.id.fstroke}{visibility:visible;width:auto;color:#666;font-size:12px!important}#${def.id.fontSize} #${def.id.fviewport}>label,#${def.id.fontStroke} #${def.id.fstroke}>label{float:none!important;display:inline!important;margin:0!important;padding:0 0 0 2px!important;color:#666!important;font-size:12px!important;cursor:help!important}#${def.id.fixViewport},#${def.id.fixStroke}{display:inline-block;margin:0 2px 0 0!important;width:14px!important;height:14px!important;vertical-align:text-bottom;cursor:pointer;-webkit-appearance:none!important}#${def.id.fixViewport}::after,#${def.id.fixStroke}::after{position:relative;top:0;display:inline-block;margin:0;padding:0;width:14px;height:14px;border-radius:3px;background-color:#aaa;color:#fff;content:"\u2717";vertical-align:top;text-align:center;font-weight:700;font-size:10px;line-height:14px}` +
          `#${def.id.fixViewport}:checked::after,#${def.id.fixStroke}:checked::after{border:0!important;background-color:#65a0db;color:#fff;content:"\u2713";font-weight:700;font-size:12px;line-height:14px}.${def.class.flex}{display:flex;width:auto;min-width:100%;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}.${def.class.slider} input{visibility:hidden}#${def.id.shadowColor} *{box-sizing:content-box}#${def.id.shadowColor} .${def.class.frColorPicker}{margin:0;padding:0;width:auto}#${def.id.shadowColor} .${def.class.frColorPicker} #${def.id.color}{box-sizing:border-box;margin:0;padding:0 8px 0 0;width:160px!important;height:35px!important;min-width:160px;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:rgba(253, 253, 255, 0.69);color:#333!important;text-align:center;text-indent:0;font-weight:400!important;font-size:18px!important;font-family:'Anton',Times,serif!important;cursor:pointer}#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{display:block;box-sizing:border-box;margin:0;padding:5px;width:calc(100% - 2px)!important;height:78px;max-width:calc(100% - 2px);max-height:78px;min-width:calc(100% - 2px);min-height:78px;outline:none!important;border:2px solid #67a5df!important;border-radius:6px;color:#0b5b9c!important;font:normal 600 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:none;cursor:auto;word-break:break-all;overscroll-behavior:contain}#${def.id.fontCss} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontCss} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontCss} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px rgba(0, 0, 0, 0.2)}#${def.id.fontCss} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea{background:#fafafa!important}#${def.id.fontEx} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontEx} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}#${def.id.fontEx} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}` +
          `.${def.class.switcher}{float:right;box-sizing:border-box;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;border-radius:4px;color:#0a68c1;}#${def.id.fontCss} textarea::placeholder,#${def.id.fontEx} textarea::placeholder{color:#555;font:italic 500 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;opacity:.85}#${def.id.cSwitch}:hover,#${def.id.eSwitch}:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.${def.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9,#e9ffe9 25%,transparent 0,transparent 50%,#e9ffe9 0,#e9ffe9 75%,transparent 0,transparent)!important;background-color:#f7fff7!important;background-size:50px 50px}#${def.id.submit} button{box-sizing:border-box;margin:0;padding:5px 10px;width:auto;height:35px;min-width:min-content;min-height:35px;border:2px solid #6ba7e0;border-radius:6px;background-color:#67a5df;background-image:none;color:#fff!important;font:normal 600 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;cursor:pointer}#${def.id.submit} button:hover{box-shadow:0 0 5px rgba(0, 0, 0, 0.4)!important}#${def.id.submit} .${def.class.cancel},#${def.id.submit} .${def.class.reset}{float:left;margin-right:10px}#${def.id.submit} .${def.class.submit}{float:right}#${def.id.submit} #${def.id.backup}{display:none;margin:0 10px 0 0}.${def.class.anim}{border:2px solid #dc143c!important;background:#dc143c!important;animation:jiggle 1.8s ease-in infinite}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}.${def.class.tooltip}{position:relative;cursor:help;-webkit-user-select:none;user-select:none}.${def.class.tooltip} span.${def.class.emoji}{font-weight:400!important}.${def.class.tooltip}:active .${def.class.tooltip}{display:block}.${def.class.tooltip} .${def.class.tooltip}{position:absolute;z-index:999999;display:none;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #b8c4ce;border-radius:6px;background-color:#54a2ec;color:#fff;font-weight:400;opacity:.92;word-break:break-all}.${def.const.seed}_ml-5px{margin:0 0 0 -5px}` +
          `.${def.class.tooltip} .${def.class.tooltip} *{font-size:14px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.class.tooltip} .${def.class.tooltip} em{font-style:normal!important}.${def.class.tooltip} .${def.class.tooltip} strong{color:#ff8c00;font-size:18px!important}.${def.class.tooltip} .${def.class.tooltip} p{display:block;margin:0 0 10px;color:#fff;text-indent:0!important;line-height:150%}.${def.class.ps1}{position:relative;top:-33px;right:5px;float:right;margin:0;padding:0;width:24px;height:0}.${def.class.ps2}{top:35px;right:-7px}.${def.class.ps3},.${def.class.ps4},.${def.class.ps5}{bottom:25px;left:auto}@-moz-document url-prefix() {#${def.id.container},#${def.id.fontList} .${def.class.selector},#${def.id.fontList} .${def.class.selectFontId} dl,#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{scrollbar-color:#487baf #f1f0f0;scrollbar-width:thin}}#${def.id.fshadow}{visibility:hidden;margin-top:5px;position:absolute;z-index:999;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #67a5df;border-radius:6px;background-color:#f0f6ff;color:#333;opacity:.92;left:21px}#${def.id.fshadow} .${def.id.fshadow}-label{display:flex;align-items:center;justify-content:space-around}#${def.id.fshadow} .${def.id.fshadow}-text{padding:5px;font-size:12px;font-weight:400;line-height:170%!important;color:#808287;word-break:break-all}.${def.const.seed}_inline_block{display:inline-block!important}.${def.const.seed}_block{display:block!important}.${def.const.seed}_none{display:none!important}.${def.const.seed}_visible{visibility:visible!important}.${def.const.seed}_hidden{visibility:hidden!important}.${def.const.seed}_m0p0{margin:0;padding:0}.${def.const.seed}_checkbox{height:32px;align-self:center}.${def.const.seed}_cb8{color:#8b0000!important}.${def.const.seed}_cce{color:#cecece!important}.${def.const.seed}_ccr{color:#dc143c!important}.${def.const.seed}_fb{font-weight:700!important}.${def.const.seed}_f-g1{filter:grayscale(1)!important}.${def.const.seed}_m0-4p0{margin:0 -4px;padding:0}.${def.const.seed}_m0060{margin:0 0 6px 0}.${def.const.seed}_blr{border-top-left-radius:4px;border-bottom-left-radius:4px}.${def.const.seed}_brr{border-top-right-radius:4px;border-bottom-right-radius:4px}.${def.const.seed}_op1{opacity:1!important}.${def.const.seed}_usn{user-select:none!important}.${def.const.seed}_hmh35{height:35px!important;min-height:35px!important}` +
          `.${def.class.range}{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:#fff;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic 700 14px/14px ui-monospace,Consolas,monospace;--fill-color:var(--primary-color);--progress-background:#dfdfdf;--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:#fff;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),0 0 1px rgba(0, 0, 0, 0.5) inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px #ff8c00 inset,0 0 3px rgba(0, 0, 0, 0.4);--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--step:1;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, "");--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);}.${def.class.range}{width:auto;min-width:105%!important;margin:-3px 0 0 -7px;box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));background:linear-gradient(to right,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}` +
          `.${def.class.range}{--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}.${def.class.range}[disabled]{filter:grayscale(0.9);}.${def.class.range}[data-ticks-position=top]{--flip-y:1}.${def.class.range}::after,.${def.class.range}::before{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max,block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y,-2.5ch);top:calc(-2.5ch * var(--flip-y));opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before,-1) * -1)) scale(var(--at-edge));pointer-events:none}.${def.class.range}::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.${def.class.range}::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.${def.class.rangeProgress}{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);height:calc(var(--track-height));background:var(--progress-background,#eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.${def.class.rangeProgress}::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.${def.class.rangeProgress}::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.${def.class.range}>input:only-of-type~.${def.class.rangeProgress}{--clip-start:0}.${def.class.range}>input::-webkit-slider-runnable-track{background:transparent!important;box-shadow:none!important;border:none!important}` +
          `.${def.class.range}>input{-webkit-appearance:none;box-shadow:none!important;width:100%;height:var(--thumb-size)!important;margin:0!important;padding:0!important;position:absolute!important;left:0;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + calc(var(--ticks-gap)/ 2 * var(--flip-y,-1)))!important;border:0!important;cursor:grab;outline:0!important;background:0 0!important;--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:not(:only-of-type){pointer-events:none}.${def.class.range}>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}.${def.class.range}>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}.${def.class.range}>input:active+output{transition:0s;opacity:0.9;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.${def.class.range}>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}.${def.class.range}>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.${def.class.range}>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.${def.class.range}>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}` +
          `.${def.class.range}>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}.${def.class.range}>input:nth-of-type(2)+output{--value:var(--value-b)}.${def.class.range}>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%);pointer-events:none;width:auto;min-width:40px;height:24px;min-height:24px;text-align:center;position:absolute;z-index:5;background:var(--value-background);border-radius:4px;padding:0 6px;left:var(--pos);transform:translate(var(--x-offset),calc(150% * var(--flip) - (var(--y-offset,0) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s;opacity:0;box-sizing:content-box}.${def.class.range}>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`,
      };
      const hostStyle = s => `:host(${s}){display:block!important;visibility:visible!important;opacity:1!important}`;
      const fullStyle = (b, c) => `${def.const.style.main};background-color:${b};color:${c};border-radius:4px;padding:4px 8px`;
      const leftStyle = b => `${def.const.style.main};background-color:${b};color:#fffafa;border-radius:4px 0 0 4px;padding:4px 2px 4px 8px`;
      const rightStyle = b => `${def.const.style.main};background-color:${b};color:#fffafa;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 4px;margin:0 0 0 -2px`;
      const remarkStyle = c => `${def.const.style.main};color:${c};padding:4px 0;line-height:120%`;

      /* REGISTER_LOAD_EVENT_CLASS */

      class RegisterEvents {
        constructor() {
          if (RegisterEvents.instance) return RegisterEvents.instance;
          this.functionsToRun = [];
          this.finalFunctionsToRun = [];
          this.isRegistered = false;
          this._registerEventListeners();
          document.addEventListener("readystatechange", () => void this._checkDocumentReadyState());
          RegisterEvents.instance = this;
        }
        _runFunctions(functionsList, background, description = "[DOM.STATE]") {
          let [runCount, errorCount] = [0, 0];
          for (const fn of functionsList) {
            try {
              fn();
              runCount++;
            } catch (e) {
              ERROR("RegisterEvents.runFunctions:", e.message);
              errorCount++;
            }
          }
          this._logReadyState(background, description, runCount, errorCount, document.readyState);
        }
        _registerEventListeners() {
          if (this.isRegistered) return;
          const onLoadHandler = () => this._runFunctions(this.finalFunctionsToRun, "#008080", "[WIN.ONLOAD]");
          const docReadyHandler = (...args) => this._runFunctions(this.functionsToRun, ...args);
          if (IS_GREASEMONKEY) {
            const originalOnLoad = global.onload;
            global.onload = typeof originalOnLoad === "function" ? () => (onLoadHandler(), originalOnLoad()) : onLoadHandler;
          } else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => docReadyHandler("#6a5acd"));
          else global.addEventListener("load", () => docReadyHandler("#4682b4", "[WIN.LOADED]"));
          this.isRegistered = true;
        }
        _checkDocumentReadyState() {
          if (!this.isRegistered || document.readyState !== "complete") return;
          this._runFunctions(IS_GREASEMONKEY ? this.functionsToRun : this.finalFunctionsToRun, "#008000");
        }
        _logReadyState(background, description, ...logs) {
          const args = [leftStyle(background), rightStyle(background), "display:block;height:0", remarkStyle("0"), remarkStyle("#a9a9a9")];
          INFO(`%c${description}:%c${logs}!%c\r\n%c \u3000\u27A6${IS_IN_FRAMES} ${CUR_HOST_NAME} %c${CUR_HOST_PATH}`, ...args);
        }
        addFn(fn) {
          if (typeof fn === "function") this.functionsToRun.push(fn);
        }
        addFinalFn(fn) {
          if (typeof fn === "function") this.finalFunctionsToRun.push(fn);
        }
      }

      /* FR_DIALOGBOX_CLASS */

      class FrDialogBox {
        constructor({ titleText = "Test", messageText = "Test message.", trueButtonText = "OK", falseButtonText = null, neutralButtonText = null } = {}) {
          this.css = hostStyle("fr-dialogbox") + def.const.style.frDialogBox;
          this.titleText = titleText;
          this.messageText = messageText;
          this.trueButtonText = trueButtonText;
          this.falseButtonText = falseButtonText;
          this.neutralButtonText = neutralButtonText;
          this.hasFalse = falseButtonText !== null;
          this.hasNeutral = neutralButtonText !== null;
          this.parent = document.documentElement;
          this._create(this);
          this._append();
        }
        static closure(command) {
          const status = safeRemove(`#${def.id.dialogbox}`);
          DEBUG("FrDialogBox.%s.status: %o", command ?? "Closure", status);
          return status;
        }
        _create(context) {
          this.container = cE("fr-dialogbox", { id: def.id.dialogbox });
          const shadow = (def.const.dialogIf = aS(this.container));
          applyStylesToShadowRoot(shadow, this.css, `${def.const.seed}-dialogbox`);
          this.frDialog = cE("fr-box", { class: def.class.db });
          append(shadow, this.frDialog);
          const title = cE("fr-title", { class: def.class.dbt, innerHTML: tTP.createHTML(this.titleText) });
          const message = cE("fr-message", { class: def.class.dbm, innerHTML: tTP.createHTML(this.messageText) });
          const buttonContainer = cE("fr-buttoncontainer", { class: def.class.dbbc });
          append(this.frDialog, title, message, buttonContainer);
          this.trueButton = cE("button", { class: [def.class.dbb, def.class.dbbt], textContent: this.trueButtonText });
          this.trueButton.addEventListener("click", () => void context._destroy());
          append(buttonContainer, this.trueButton);
          if (this.hasFalse) {
            this.falseButton = cE("button", { class: [def.class.dbb, def.class.dbbf], textContent: this.falseButtonText });
            this.falseButton.addEventListener("click", () => void context._destroy());
            append(buttonContainer, this.falseButton);
          }
          if (this.hasNeutral) {
            this.neutralButton = cE("button", { class: [def.class.dbb, def.class.dbbn], textContent: this.neutralButtonText });
            this.neutralButton.addEventListener("click", () => void context._destroy());
            append(buttonContainer, this.neutralButton);
          }
        }
        _append() {
          const closureState = FrDialogBox.closure("Rebuild");
          if (CUR_WINDOW_TOP && this.container && closureState) {
            this.root = createDialogModel(this.container, this.parent);
            sleep(3e2)(this.frDialog).then(box => box?.classList.add(`${def.const.seed}_op1`));
          }
        }
        _destroy() {
          if (!this.container) return;
          this.frDialog.classList.remove(`${def.const.seed}_op1`);
          sleep(2e2).then(() => void DEBUG("FrDialogBox.Destroy.status: %o", safeRemove(this.container)));
          if (!qS("fr-configure")) closeDialogModel(this.root);
        }
        async respond() {
          return new Promise((resolve, reject) => {
            if (!this.frDialog || !this.trueButton) reject(new Error("FrDialogBox Error!"));
            this.trueButton.addEventListener("click", () => void resolve(true));
            if (this.hasFalse) this.falseButton.addEventListener("click", () => void resolve(false));
          }).catch(e => void ERROR("FrDialogBox:", e.message));
        }
      }

      function createDialogModel(container, parent) {
        let dialog = qS(`dialog#${def.const.dialog}`);
        if (!dialog) {
          dialog = cE("dialog", { id: def.const.dialog });
          append(parent, dialog);
        }
        if (!getMainStyleElements({ currentScope: true })) dialog.style.cssText = "width:100%;height:100%;outline:0;border-width:0";
        append(dialog, container);
        dialog.hasAttribute("open") && dialog.close?.();
        dialog.inert = true;
        dialog.showModal?.();
        dialog.removeAttribute("inert");
        dialog.focus();
        return dialog;
      }

      function closeDialogModel(dialog) {
        dialog?.close?.();
        document.removeEventListener("blur", stopPropagations, true);
        return safeRemove(dialog ?? `dialog#${def.const.dialog}`);
      }

      function applyStylesToShadowRoot(shadow, css, id) {
        try {
          if (IS_COMPATIBLE_ADOPTEDSTYLE && shadow.adoptedStyleSheets) {
            const sheet = createStyleSheet(id, css);
            updateAdoptedStyleSheets(shadow, sheet);
          } else updateInlineStyle(shadow, css, id);
        } catch (e) {
          ERROR("applyStylesToShadowRoot:", e.message);
        }
      }

      function checkBrowserCompatibility({ WEBKIT, BLINK, GECKO, suspend } = {}) {
        if (IS_CHEAT_UA) return false;
        const webkitCompatible = IS_REAL_WEBKIT && parseFloat(engineVersion) >= WEBKIT;
        const blinkCompatible = IS_REAL_BLINK && parseFloat(engineVersion) >= BLINK;
        const geckoCompatible = IS_REAL_GECKO && parseFloat(engineVersion) >= GECKO && (suspend ?? (!IS_GREASEMONKEY && !GMcontextMode));
        return webkitCompatible || blinkCompatible || geckoCompatible;
      }

      function createStyleSheet(id, css) {
        const sheet = new CSSStyleSheet();
        sheet.id = id;
        sheet.replaceSync(css);
        return sheet;
      }

      function updateAdoptedStyleSheets(shadow, sheet) {
        const hostSheet = shadow.adoptedStyleSheets;
        const existIndex = hostSheet.FindIndex(s => s.id === sheet.id);
        if (existIndex === -1) shadow.adoptedStyleSheets = [...hostSheet, sheet];
        else if (!compareCSSStyleSheets(shadow.adoptedStyleSheets[existIndex], sheet)) shadow.adoptedStyleSheets[existIndex] = sheet;
      }

      function updateInlineStyle(shadow, css, id) {
        const style = cE("style", { id, media: "screen", type: "text/css", textContent: css });
        const existSheet = qS(`style#${id}`, shadow);
        if (css) {
          if (!existSheet) shadow.prepend(style);
          else existSheet.textContent = css;
        } else safeRemove(existSheet);
      }

      function compareCSSStyleSheets(stylesheet1, stylesheet2) {
        if (!stylesheet1 || !stylesheet2) return false;
        const rules1 = stylesheet1.cssRules;
        const rules2 = stylesheet2.cssRules;
        if (rules1.length !== rules2.length) return false;
        for (let i = 0; i < rules1.length; i++) {
          if (rules1[i].cssText !== rules2[i].cssText) return false;
        }
        return true;
      }

      function checkBlinkCheatingUA() {
        if (typeof NavigatorUAData === "undefined") return false;
        if (CUR_PROTOCOL === "https:" && !navigator.userAgentData) return true;
        return Boolean(navigator.userAgentData) && !(navigator.userAgentData instanceof NavigatorUAData); // eslint-disable-line no-undef
      }

      function getscaleValueMatrix(scaleMatrix) {
        const [o, t] = (def.array.scaleMatrix = aSlice.call(scaleMatrix, -2));
        return { prev: o || 1, cur: t || 1 };
      }

      function* nodesFromChildList(children) {
        for (const child of children.flat(Infinity)) {
          if (child instanceof Node) yield child;
          else yield new Text(child);
        }
      }

      function append(el, ...children) {
        if (!el || !children.length) return;
        for (const child of nodesFromChildList(children)) {
          if (el instanceof Node) el.appendChild(child);
          else el.append(child);
        }
      }

      function insertAfter(el, ...children) {
        if (!el || !children.length) return;
        for (const child of nodesFromChildList(children)) {
          if (el.parentNode.lastElementChild === el) append(el.parentNode, child);
          else el.parentNode.insertBefore(child, el.nextElementSibling);
        }
        return el;
      }

      function getLastStyleNode(target) {
        const els = qA("style:not(.darkreader),link[rel~='stylesheet' i]:not([disabled])", target ?? document.head);
        return els.length > 0 ? els[els.length - 1] : target.lastElementChild;
      }

      function insertStyle({ target, id, cssText, overwrite }) {
        if (!IS_INTERNALSTYLE_ALLOWED || !target || !id || !cssText) return;
        const existingStyles = getMainStyleElements({ currentScope: false, target });
        const styleCount = existingStyles.length;
        if (styleCount > 0) {
          for (let i = 0, l = styleCount - !overwrite; i < l; i++) {
            const styleElement = existingStyles[i];
            styleElement.dataset.frRemoved = true;
            safeRemove(styleElement);
          }
          if (!overwrite) return true;
        }
        try {
          const newStyle = cE("style", { id, media: "screen", type: "text/css", textContent: cssText, [def.const.cssAttrName]: overwrite ?? false });
          return insertAfter(getLastStyleNode(target), newStyle);
        } catch (e) {
          return ERROR("insertStyle:", e.message);
        }
      }

      function sqliteDBDataAccess(e, t, p) {
        let [g, d = "", o = ""] = [0];
        for (let i = 0, l = p.length; i < l; i += 1) d += p.charCodeAt(i).toString();
        const s = Math.floor(d.length / 5);
        const m = parseInt(d.charAt(s) + d.charAt(s * 2) + d.charAt(s * 3) + d.charAt(s * 4) + d.charAt(s * 5));
        const c = Math.ceil(p.length / 2);
        const u = Math.pow(2, 31) - 1;
        if (t) {
          if (m < 2) return "";
          let l = random(1e9) % 1e8;
          d += l;
          while (d.length > 10) d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
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
          while (d.length > 10) d = (parseInt(d.substring(0, 10)) + parseInt(d.substring(10, d.length))).toString();
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
        const encryptedData = encrypt(toString(data));
        const url = URL.createObjectURL(new Blob([encryptedData], { type: "text/plain;charset=utf-8" }));
        const link = cE("a", { href: url, download: fileName });
        link.click();
        URL.revokeObjectURL(url);
      }

      async function isInternalStyleAllowed() {
        const res = await getDocumentElement.getNodeAndObserve();
        const testContainer = document.head || res.get();
        const testId = "test-internal-style";
        try {
          const style = cE("style", { id: testId, type: "text/css", textContent: `#${testId} { background-color: rebeccapurple; }` });
          append(testContainer, style);
          const styleSheet = style.sheet;
          if (typeof styleSheet === "undefined") return false;
          const rules = styleSheet.cssRules || styleSheet.rules;
          return rules.length > 0 && rules[0].cssText.includes("background-color: rebeccapurple");
        } catch (e) {
          const internalStyleError = IS_CHN
            ? `站点 CSP 策略阻止警告:\r\n当前站点 CSP 阻止内部样式的加载与解析，可尝试通过 “Allow CSP: Content-Security-Policy” 扩展获取相应权限。`
            : `CSP Blocking Warning:\r\nThe current site CSP is blocking the loading and parsing of internal styles, get permissions by 'Allow CSP: Content-Security-Policy'.`;
          return __console("error", internalStyleError) ?? false;
        } finally {
          safeRemove(`style#${testId}`, testContainer);
        }
      }

      /* SCALE_COORDINATE_CORRECTION_FUNCTION */

      function adjustCoordinateOffset({ cur, prev = 1, props }) {
        const zoomScale = cur / prev;
        const results = debugging ? new Set() : void 0;
        const domEventPropertyMappings = [
          {
            objs: [MouseEvent.prototype],
            props: ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "screenX", "screenY", "movementX", "movementY", "x", "y"],
          },
          { objs: [global, GMunsafeWindow], props: ["pageXOffset", "pageYOffset", "scrollX", "scrollY", ...props.window] },
          { objs: [Element.prototype], props: ["scrollLeft", "scrollTop", ...props.element] },
          { objs: [HTMLElement.prototype], props: [...props.html] },
        ];
        const processProps = ({ objs, props }) => {
          const [uniqObjs, uniqProps] = [uniq(objs), uniq(props)];
          uniqObjs.forEach(obj => {
            uniqProps.forEach(prop => void definePropertyProcess(obj, prop, Reflect.getOwnPropertyDescriptor(obj, prop)));
          });
        };
        try {
          global.frDOMRects = { toggle: IS_BLINK_ABOVE_128 || IS_REAL_GECKO, cur, prev };
          domEventPropertyMappings.forEach(processProps);
          if (IS_REAL_BLINK) overrideGetScreenCTM();
          if (global.frDOMRects.toggle) overrideGetDOMRects();
          DEBUG(`[FONTSCALE]${IS_IN_FRAMES} %O Done!`, results || "Adjust");
        } catch (e) {
          ERROR("adjustCoordinateOffset:", e);
        }

        function definePropertyProcess(obj, prop, descriptor) {
          try {
            if (typeof descriptor?.get !== "function") return;
            const isScrollProp = ["scrollLeft", "scrollTop"].includes(prop);
            const target = isScrollProp ? HTMLHtmlElement.prototype : obj;
            const scale = isScrollProp ? cur : zoomScale;
            const value = {
              configurable: true,
              enumerable: true,
              get() {
                return descriptor.get.call(this) / scale;
              },
              ...(isScrollProp && {
                set(Value) {
                  if (typeof Value !== "number" || isNaN(Value)) return;
                  if (prop === "scrollLeft") this.scrollTo(Value * cur, 0);
                  if (prop === "scrollTop") this.scrollTo(0, Value * cur);
                },
              }),
            };
            Reflect.defineProperty(target, prop, value);
            debugging && results.add({ obj: obj2Str.call(target), prop });
          } catch (e) {
            ERROR(`Error defining property "${prop}":`, e.message);
          }
        }

        function overrideGetScreenCTM() {
          Reflect.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {
            value: function () {
              const originalMatrix = def.var.getScreenCTM.call(this);
              const newSVGMatrix = this.ownerSVGElement?.createSVGMatrix();
              if (!newSVGMatrix) return null;
              ["a", "b", "c", "d", "e", "f"].forEach(prop => void (newSVGMatrix[prop] = originalMatrix[prop] / cur));
              return newSVGMatrix;
            },
          });
          debugging && results.add({ obj: String(SVGGraphicsElement.prototype), prop: "getScreenCTM()" });
        }

        function overrideGetDOMRects() {
          Reflect.defineProperty(Element.prototype, "getClientRects", { value: overrideGetClientRects });
          Reflect.defineProperty(Element.prototype, "getBoundingClientRect", { value: overrideGetBoundingClientRect });
          debugging && results.add({ obj: String(Element.prototype), prop: "getDOMRects" });
        }

        function createProxy(T) {
          return new Proxy(T, {
            get: (target, prop) => {
              const value = Reflect.get(target, prop);
              return typeof value === "number" ? value / cur : value;
            },
          });
        }

        function overrideGetClientRects() {
          const clientRects = def.var.getClientRects.call(this);
          return asArray(clientRects, createProxy);
        }

        function overrideGetBoundingClientRect() {
          const value = def.var.getBoundingClientRect.call(this);
          return createProxy(value);
        }
      }

      /* FONT_LIBRARY_OPERATION_FUNCTIONS */

      const cache = {
        value: (data, eT = 6048e5) => {
          DEBUG("cache Expiration: %c%s hrs", "color:#008000;font-weight:700", eT / 36e5);
          return { data, expired: Date.now() + eT };
        },
        set: (key, ...options) => {
          const cacheValue = cache.value(...options);
          GMsetValue(key, encrypt(JSON.stringify(cacheValue)));
        },
        get: async key => {
          try {
            const encryptedValue = await GMgetValue(key);
            if (!encryptedValue) return;
            const current = Date.now();
            const { data, expired } = rawJSON.parse(decrypt(encryptedValue));
            DEBUG("cache Remaining: %c%s hrs", "color:#dc143c;font-weight:700", ((expired - current) / 36e5).toFixed(2));
            if (data && expired > current) return data;
            else return cache.remove(key);
          } catch (e) {
            return cache.remove(key);
          }
        },
        remove: key => void GMdeleteValue(key),
      };

      class FontFaceSetObserver {
        constructor() {
          if (FontFaceSetObserver.instance) return FontFaceSetObserver.instance;
          this.canvasWidth = 200;
          this.canvasHeight = 100;
          this.fontSize = 80;
          this.fontText = "Aa啊";
          this.originFont = "'Courier New',Courier,monospace";
          this.canvasContext = this._createCanvasContext();
          this.originFontData = this._checkFont(this.originFont);
          this.detectFontData = null;
          FontFaceSetObserver.instance = this;
        }
        _createCanvasContext() {
          const canvas = cE("canvas");
          canvas.width = this.canvasWidth;
          canvas.height = this.canvasHeight;
          const canvasContext = canvas.getContext("2d", { willReadFrequently: true });
          canvasContext.frFontFace = true;
          canvasContext.textAlign = "center";
          canvasContext.fillStyle = "#000";
          canvasContext.textBaseline = "middle";
          return canvasContext;
        }
        _checkFont(fontName) {
          try {
            this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.canvasContext.font = `${this.fontSize}px ${this.originFont.toUpperCase() === fontName.toUpperCase() ? this.originFont : `'${fontName}',${this.originFont}`}`;
            this.canvasContext.fillText(this.fontText, this.canvasWidth / 2, this.canvasHeight / 2);
            const { data: fontData } = this.canvasContext.getImageData(0, 0, this.canvasWidth, this.canvasHeight);
            const { actualBoundingBoxLeft: l, actualBoundingBoxRight: r } = this.canvasContext.measureText(this.fontText);
            return { fontData: asArray(fontData).filter(Boolean).join(), fontWidth: l + r };
          } catch (e) {
            ERROR("FontFaceSetObserver.checkFont:", e.message);
            return null;
          }
        }
        destroy() {
          this.canvasContext = null;
          this.detectFontData = null;
          this.originFontData = null;
        }
        detect(font) {
          if (typeof font !== "string" || !font) return false;
          if (this.originFont.toUpperCase().includes(font.toUpperCase())) return true;
          this.detectFontData = this._checkFont(font);
          if (!this.detectFontData) return false;
          const fontSupport = this.originFontData.fontData !== this.detectFontData.fontData || this.originFontData.fontWidth !== this.detectFontData.fontWidth;
          fontSupport && DEBUG("detect Fonts: <Detected>", { data: this.detectFontData, font: unescape(font) });
          return fontSupport;
        }
      }

      function unescape(input) {
        return input.replace(/\\[\dA-F]{4}/g, match => String.fromCharCode(parseInt(match.substr(1), 16)));
      }

      function getUniqueFontlist(fontlist) {
        if (!Array.isArray(fontlist)) return [];
        const [chM, enM] = [new Map(), new Map()];
        return fontlist.reduce((res, font) => {
          if (!font) return res;
          const [chE, enE] = [font.ch && chM.has(font.ch), font.en && enM.has(font.en)];
          if (chE || enE) {
            const idx = chE ? chM.get(font.ch) : enM.get(font.en);
            if (font.ps && !res[idx].ps) res[idx] = font;
          } else {
            res.push(font);
            const idx = res.length - 1;
            if (font.ch) chM.set(font.ch, idx);
            if (font.en) enM.set(font.en, idx);
          }
          return res;
        }, []);
      }

      async function getMergedFontCheckList(defFontCheck = fontCheck) {
        try {
          const cusFontList = await GMgetValue("_CUSTOM_FONTLIST_");
          const cusFontCheck = cusFontList ? rawJSON.parse(decrypt(cusFontList)) : [];
          return getUniqueFontlist([...defFontCheck, ...cusFontCheck]);
        } catch (e) {
          ERROR("getMergedFontCheckList:", e.message);
          return [...defFontCheck];
        }
      }

      function getNonDuplicateFontArray(arra, arrb) {
        const arrbSet = new Set();
        asArray(arrb).forEach(item => (arrbSet.add(item.en), arrbSet.add(item.ch)));
        return asArray(arra).filter(x => !arrbSet.has(x.en) && !arrbSet.has(x.ch));
      }

      function updateDomainsIndex(domains, curHost = CUR_HOST) {
        for (let i = 0, l = domains.length; i < l; i++) {
          if (domains[i].domain === curHost) return i;
        }
      }

      function updateExsitesIndex(sites) {
        const wildcard = site => {
          if (typeof site !== "string") return null;
          return site.indexOf("*") === -1 ? site : new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${site.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`);
        };
        const siteArray = sites.map(wildcard).filter(Boolean);
        for (let i = 0, l = siteArray.length; i < l; i++) {
          if (siteArray[i] instanceof RegExp && siteArray[i].test(CUR_HOST)) return i;
          if (siteArray[i] === CUR_HOST) return i;
        }
      }

      function removeDuplicateFonts(stra, strb) {
        const fontsSetA = new Set(stra.split(",").map(font => font.replace(/'/g, "")));
        const fontsSetB = new Set(strb.split(",").map(font => font.replace(/'/g, "")));
        const uniqueFonts = asArray(fontsSetA).filter(font => !fontsSetB.has(font));
        return uniqueFonts.map(font => `'${font}'`).join(",");
      }

      function saveData(key, data) {
        try {
          sessionStorages?.removeItem(def.const.flagName);
          GMsetValue(key, encrypt(rawJSON.stringify(data)));
        } catch (e) {
          ERROR("SaveData:", e.message);
        }
      }

      function convertHtmlToText(htmlString) {
        if (typeof htmlString !== "string") return "";
        htmlString = htmlString.replace(/expression\([^)]*\)|url\(.*?\)|\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}|`|{|}/gi, "");
        const temp = cE("fr-safeInner", { innerHTML: tTP.createHTML(htmlString) });
        return temp.textContent.trim().replace(/(\s*,\s*)+$/, "");
      }

      function matchEditorialSites(hostlist) {
        return hostlist.split("|").Some(hostname => CUR_HOST_NAME.endsWith(hostname));
      }

      function getFontOverrideData(fontArray) {
        if (!Array.isArray(fontArray)) return [];
        return fontArray
          .map(font => {
            const chsFont = typeof font === "string" ? font.match(/^{([^{}]+)}$/) : [];
            return chsFont ? convertToUnicode(chsFont[1]) : font;
          })
          .filter(Boolean);
      }

      async function getRootElementSelector() {
        const rootElementId = await getDocumentElement.getNodeAndObserve().then(res => res.get().id);
        return ((IS_REAL_BLINK && CUR_WINDOW_TOP) || !IS_REAL_BLINK) && rootElementId ? `:root#${rootElementId} ` : `:root `; // Fit::Blink::Async Error
      }

      /* FONT_RENDERING_PREPROCESSING */

      void (async function (requestCodeAndFunc, getConfigureData, getCustomMonoData, getExSitesData, getFontSetData, getFontScaleDef, getFontOverrideDef) {
        let font_Set, exclude_Site, parameter_Set, include_Site, feed_Back;
        const { code: ROOT_SECRET_KEY, callback } = requestCodeAndFunc();
        if (!inspectLicense()?.inspect()) return CUR_WINDOW_TOP && callback(def.url.installURI);
        const addLoadEvents = new RegisterEvents();
        const requestBackendData = await Promise.all([getRootElementSelector(), getFontOverrideDef(), getConfigureData(), getExSitesData(), getCustomMonoData()]);
        const [globalPrefix, fontOverrideDefData, _config_data_, { exSitesIndex }, { monoSiteRules, monoFontList, monoFeature }] = requestBackendData;
        const { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isFixViewport, isCloseTip, isCustomMono, rebuild, curVersion, globalDisable } = _config_data_;
        const CONST_VALUES = await getFontSetData(isFontsize, isFixViewport);

        /* CONVERT_FONT_PARAMETERS_TO_REALTIME_STYLE */

        const defaultFont = IS_CHN ? "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53" : "Website Font";
        const selectedFont = CONST_VALUES.fontSelect?.split(",")[0]?.replace(/"|'/g, "") ?? "";
        const [fontface_i, smooth_i] = [Boolean(CONST_VALUES.fontFace), Boolean(CONST_VALUES.fontSmooth)];
        const fontFamily = fontface_i ? `font-family:var(--fr-font-family),var(--fr-font-basefont);` : ``;
        const fontFaces = fontface_i ? (selectedFont ? await funcFontface(selectedFont) : "") : "";
        let [fontsize_r, bodyScalecssText = ""] = [parseFloat(CONST_VALUES.fontSize)];
        if (typeof exSitesIndex === "undefined" && isFontsize && fontsize_r >= 0.8 && fontsize_r <= 1.5 && fontsize_r !== 1) {
          bodyScalecssText = funcFontsize(fontsize_r);
        } else fontsize_r = 1;
        def.array.scaleMatrix.push((def.var.curScale = fontsize_r));
        const smoothGecko = IS_REAL_GECKO && platform === "MacOS" ? "-moz-osx-font-smoothing:grayscale!important;" : "";
        const smoothMac = !IS_CHEAT_UA && platform === "MacOS" ? `-webkit-font-smoothing:antialiased!important;` : ``;
        const funcSmooth = `font-feature-settings:unset;font-variant:unset;font-optical-sizing:auto;font-kerning:auto;${smoothGecko}${smoothMac}`;
        const smoothing = smooth_i ? funcSmooth : "";
        const textrender = smooth_i ? "text-rendering:optimizeLegibility;" : "";
        const [stroke_r, shadow_r] = [parseFloat(CONST_VALUES.fontStroke), parseFloat(CONST_VALUES.fontShadow)];
        const strokeCssText = `${stroke_r}px currentcolor`;
        const textStroke = !isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
        const shadow_c = String(CONST_VALUES.shadowColor) || INITIAL_VALUES.shadowColor;
        const shadowCssText = overlayColor(shadow_r, shadow_c.toLowerCase());
        const textShadow = !isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
        const excludeSplit = `${textShadow ? "text-shadow:none!important;" : ""}${textStroke ? "-webkit-text-stroke:var(--fr-no-stroke, 0px transparent)!important;" : ""}`;
        const [inText, exText] = [String(CONST_VALUES.fontCSS), String(CONST_VALUES.fontEx)];
        const selectionGeckoCSS = `:is(:not(${exText}))::-moz-selection{color:currentcolor!important;background:rgba(30, 190, 227, 0.29)!important;-webkit-text-fill-color:currentcolor!important;${excludeSplit}}`;
        const selectionWebkitCSS = `:is(:not(${exText}))::selection{color:#fff!important;background:#3367d1!important;-webkit-text-fill-color:#fff!important;${excludeSplit}}`;
        const selectionCssText = textStroke ? (IS_REAL_GECKO ? selectionGeckoCSS : selectionWebkitCSS) : "";
        const cssExclude = exText && (textShadow || textStroke) ? `${globalPrefix}:is(${exText}){${excludeSplit}}` : ``;
        const codeFonts = exText ? funcCodefont(exText, fontface_i) : "";
        const noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && CONST_VALUES.fixShadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
        const getBoldFixCssText = shadow => `[${def.const.boldAttrName}],.${def.const.boldAttrName}{-webkit-text-stroke:var(--fr-no-stroke)!important;${shadow ?? ""}}`;
        const fixBoldTextStyle = IS_CAUSED_BOLDSTROKEERROR && CONST_VALUES.fixStroke ? getBoldFixCssText(noTextShadowCss) : "";
        const curEmptyConfig = !fontface_i && !smooth_i && !textShadow && !textStroke && fontsize_r === 1;
        const IS_CURRENTSITE_ALLOWED = typeof exSitesIndex === "undefined" && !curEmptyConfig;
        const fontStyle = `${fontFaces}${bodyScalecssText}${globalPrefix}:is(${inText}){${fontFamily}${textShadow}${textStroke}${smoothing}${textrender}}${selectionCssText}${cssExclude}${codeFonts}${fixBoldTextStyle}`;
        const isEditorBlock = Boolean(CONST_VALUES.isEditorBlock);
        const textShadowFix = `0 0 ${shadow_r}px ${shadow_c.toLowerCase().slice(0, 7).concat("2b")}`;
        const firefoxInputFix = IS_REAL_GECKO && fontface_i ? def.const.style.firefox : "";
        const monoAllowed = _config_data_.isCustomMono ?? false;
        const monoFontText = monoAllowed ? `--fr-mono-font:${monoFontList || INITIAL_VALUES.monospacedFont};` : ``;
        const monoShadow = monoAllowed ? `--fr-mono-shadow:0 0 0 currentcolor;` : ``;
        const monoFeatureText = monoAllowed ? `--fr-mono-feature:${monoFeature || INITIAL_VALUES.monospacedFeature};` : ``;
        const rootPseudoClass = `:root{--fr-font-basefont:${INITIAL_VALUES.fontBase};--fr-font-fontscale:${fontsize_r};--fr-font-family:${CONST_VALUES.fontSelect};--fr-font-shadow:${shadowCssText};--fr-font-stroke:${strokeCssText};--fr-no-stroke:0px transparent;--fr-fix-shadow:${textShadowFix};${monoFontText}${monoShadow}${monoFeatureText}}`;
        const tStyle = `@charset "UTF-8";${CUR_WINDOW_TOP ? def.const.style.frDialog : ""}${IS_CURRENTSITE_ALLOWED ? `${rootPseudoClass}${firefoxInputFix}${fontStyle}` : ``}`;

        /* FR_CONFIGURE_SHADOWROOT_CONTENT */

        const isDisabled = isEditorBlock ? `disabled title="${IS_CHN ? "在图文编辑类网站中自动禁用" : "Automatically disable in graphic/editing websites"}" ` : ``;
        const fixViewportLabel = IS_CHN
          ? "<label title='修正字体比例缩放后视口单位出现的数据偏移问题。如果开启后页面出现异常样式问题，请关闭之。'>视口修正</label>"
          : "<label title='Fixed the problem of data offset in viewport units after font scaling. Please turn it off if occurs style error.'>Fix VPU</label>";
        const tFixViewport = isFixViewport
          ? `<span id="${def.id.fviewport}">
            (${fixViewportLabel} <input type="checkbox" id="${def.id.fixViewport}" ${CONST_VALUES.fixViewport ? "checked" : ""}/>)
            </span>`
          : ``;
        const fontSizeSpan = IS_CHN
          ? `<span class="${def.const.seed}_m0p0" title="双击编辑站点缩放修正设置数据" id="${def.const.seed}_fontscale_defined">字体比例缩放</span>`
          : `<span class="${def.const.seed}_m0p0" title="Double-click to edit the site scaling correction setting" id="${def.const.seed}_fontscale_defined">Font Scaling</span>`;
        const tFontSizeHTML = isFontsize
          ? `<li id="${def.id.fontSize}">
              <div class="${def.class.flex}">
                ${fontSizeSpan}${tFixViewport}
                <input id="${def.id.fontScale}" type="text" data-fr-type="number" maxlength="5" ${isDisabled}/>
              </div>
              <div class="${def.class.range}" data-ticks-position="top" ${isDisabled}
                style="--min:.8;--max:1.5;--step:.001;--value:${CONST_VALUES.fontSize};--text-value:'${String(CONST_VALUES.fontSize.toFixed(3))}'">
                <input id="${def.id.scaleSize}" type="range" min=".8" max="1.5" step=".001" value="${CONST_VALUES.fontSize.toFixed(3)}" ${isDisabled}/>
                <output></output>
                <div class='${def.class.rangeProgress}'></div>
              </div>
            </li>`
          : ``;
        const FixStrokeLabel = IS_CHN
          ? `<label title="修正 Ver 96.0 以上版本的 Blink 浏览器对粗体样式附加描边的渲染错误。默认开启，如出现卡顿问题请关闭之。">粗体修正</label>`
          : `<label title="Fix rendering issues of Blink browsers above Ver 96.0 on bold with text-stroke. ON by default, please turn it off if lagging.">Fix Bold</label>`;
        const fixShadowLabel = IS_CHN
          ? "修正 Blink 浏览器 Ver 123.0+ 对粗体样式附加阴影效果的渲染错误，默认关闭。"
          : "Fix rendering issues of Blink browsers Ver 123.0+ on bold with text-shadow.";
        const lazyloadLabel = IS_CHN
          ? "延迟加载修正程序，默认关闭，请注意：仅在出现样式异常或修正冲突时开启。"
          : "Lazy loading the fixer, Only turn it on when style loading error or conflict.";
        const tFixShadowHTML = IS_CAUSED_BOLDSHADOWERROR
          ? `<div id="${def.id.fshadow}-shadow-label" class="${def.id.fshadow}-label">
              <span>${IS_CHN ? "附加阴影样式修正：" : "Add Shadow Fix: "}</span>
              <input type="checkbox" class="${def.class.checkbox}" id="${def.id.fixShadow}" ${CONST_VALUES.fixShadow ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
              <label for="${def.id.fixShadow}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}_f-g1"`}></label></div>
            <div id="${def.id.fshadow}-shadow-text" class="${def.id.fshadow}-text">${fixShadowLabel}</div>`
          : ``;
        const tLazyloadHTML = `<div class="${def.id.fshadow}-label">
          <span>${IS_CHN ? "启用修正延迟加载：" : "Use lazy loading: "}</span>
          <input type="checkbox" class="${def.class.checkbox}" id="${def.id.lazyload}" ${CONST_VALUES.lazyload ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
          <label for="${def.id.lazyload}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}_f-g1"`}></label></div>
          <div class="${def.id.fshadow}-text">${lazyloadLabel}</div>`;
        const tFixStrokeHTML = IS_CAUSED_BOLDSTROKEERROR
          ? `<span id="${def.id.fstroke}">
              (${FixStrokeLabel} <input type="checkbox" id="${def.id.fixStroke}" ${CONST_VALUES.fixStroke ? "checked" : ""} />)
              <div id="${def.id.fshadow}">${tFixShadowHTML}${tLazyloadHTML}</div>
            </span>`
          : ``;
        const fontfaceHTML = IS_CHN
          ? `<span title="双击编辑自定义字体重写数据"  id="${def.const.seed}_fontoverride_defined">字体重写</span>（默认：开）`
          : `<span title="Double-click to edit custom font rewrite data"  id="${def.const.seed}_fontoverride_defined">Font Rewrite (ON*)</span>`;
        const shadowColorTipHTML = IS_CHN
          ? `<p>阴影颜色可通过点击色块激活拾色器选择，也可自定义填写，格式支持: <em class="${def.const.seed}_cce">RGB, RGBA, HEX, HEXA.</em> 纯白色的所有格式表示自身颜色 <em class="${def.const.seed}_cce">currentcolor.</em></p><p><em class="${def.const.seed}_cb8">注意：输入数值会自动转化为HEXA格式，但数值保持一致性。错误格式会被替换为刚刚正确显示的数值。</em></p>`
          : `<p>Shadow colors can be selected by clicking color-block to activate the colorpicker, or custom filled in format that supports: <em class="${def.const.seed}_cce">RGB, RGBA, HEX, HEXA.</em> Pure white in all formats resolves to its own color <em class="${def.const.seed}_cce">currentcolor</em></p><p><em class="${def.const.seed}_cb8">Note: The value is converted to HEXA. The incorrect value is replaced with the final correct value.</em></p>`;
        const fontCSSTipHTML = IS_CHN
          ? `<p>默认为排除大多数网站常用的特殊CSS样式后需要渲染的页面元素。填写格式：<em class="${def.const.seed}_cce">:not(.fa)</em> 或 <em class="${def.const.seed}_cce">:not([class*="fa"])</em> 或 <em class="${def.const.seed}_cce">,div.className</em></p><p><em class="${def.const.seed}_cb8">该选项为重要参数，默认只读，双击解锁。请尽量不要修改，避免造成样式失效。若失效请重置。</em></p><p>如果发现部分文字或图标变为乱码，请双击 \ud83d\udd14 打开样式修复帮助页面。</p>`
          : `<p>Defaults to page elements that need to be rendered after excluding special CSS styles used on websites. Fill format: <em class="${def.const.seed}_cce">:not(.fa)</em> or <em class="${def.const.seed}_cce">:not([class*="fa"])</em></p><p><em class="${def.const.seed}_cb8">This option is an important parameter, read-only by default, double-click to unlock.</em></p><p>If part of text becomes garbled, Please double-click \ud83d\udd14 to open the style-fix help page.</p>`;
        const fontExTipHTML = IS_CHN
          ? `<p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p><p><em class="${def.const.seed}_cb8">编辑该选项需要CSS知识，如需要排除复杂的样式或标签可通过这里进行添加，样式若混乱请重置。</em></p><p>双击 \ud83d\udd14 可打开自定义等宽字体添加工具，设置您需要的等宽字体。</p><p><em class="${def.const.seed}_cb8">请注意：使用自定义等宽字体时，请谨慎删除该文本域中的重要代码：<br/>『 <em class="${def.const.seed}_cce">pre,pre *,code,code *</em> 』</em></p>`
          : `<p>This option excludes the rendering of font stroke, font shadow effects, please separate the excluded HTML tags with commas.</p><p><em class="${def.const.seed}_cb8">Knowledge of CSS is required to edit, If you need to exclude complex styles or tags you can add them here.</em></p><p>Double-click \ud83d\udd14 to open the Custom monospace Font Tool and set the isometric font you need.</p><p><em class="${def.const.seed}_cb8">Note: if using custom monospace fonts, Please be careful to delete important codes in this textarea:『 <em class="${def.const.seed}_cce">pre,pre *,code,code *</em> 』</em></p>`;
        const title = IS_CHN ? "双击查看更新历史" : "Double-click to view the update history of";
        const tHTML = String(
          `<fr-container id="${def.id.container}">
            <fieldset id="${def.id.field}">
              <legend class="${def.class.title}">
                <span id="${def.const.seed}_scriptname" title='${title} v${curVersion}' class="${def.const.seed}_cb8">${def.var.scriptName}</span>
                <span class="${def.class.guide}">
                  <span class="${def.class.rotation}" title="${IS_CHN ? "单击查看脚本使用帮助文档" : "Click to Open Usage Document"}" height="24" width="24">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,255.99431,255.99431"><g transform="scale(0.5,0.5)"><path d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z" fill="#67a5df"/><path d="M146.1,181.5c0,-13.9 4.5,-28 13.4,-42.3c8.9,-14.3 22,-26.1 39.1,-35.5c17.1,-9.4 37.1,-14.1 60,-14.1c21.2,0 40,3.9 56.2,11.8c16.3,7.8 28.8,18.5 37.7,32c8.9,13.5 13.3,28.1 13.3,43.9c0,12.5 -2.5,23.4 -7.6,32.7c-5.1,9.4 -11.1,17.5 -18,24.3c-7,6.8 -19.4,18.3 -37.5,34.4c-5,4.5 -9,8.5 -12,12c-3,3.4 -5.2,6.6 -6.7,9.4c-1.5,2.9 -2.6,5.7 -3.4,8.6c-0.8,2.9 -2,7.9 -3.6,15.1c-2.8,15.2 -11.5,22.9 -26.1,22.9c-7.6,0 -14,-2.5 -19.2,-7.5c-5.2,-5 -7.8,-12.4 -7.8,-22.2c0,-12.3 1.9,-23 5.7,-32c3.8,-9 8.9,-16.9 15.2,-23.7c6.3,-6.8 14.8,-14.9 25.5,-24.3c9.4,-8.2 16.1,-14.4 20.3,-18.6c4.2,-4.2 7.7,-8.8 10.5,-14c2.9,-5.1 4.3,-10.7 4.3,-16.7c0,-11.7 -4.4,-21.6 -13.1,-29.7c-8.7,-8.1 -20,-12.1 -33.7,-12.1c-16.1,0 -28,4.1 -35.6,12.2c-7.6,8.1 -14.1,20.1 -19.3,35.9c-5,16.6 -14.4,24.8 -28.3,24.8c-8.2,0 -15.1,-2.9 -20.8,-8.7c-5.6,-5.6 -8.5,-11.8 -8.5,-18.6zM253.4,422.3c-8.9,0 -16.7,-2.9 -23.4,-8.7c-6.7,-5.8 -10,-13.9 -10,-24.3c0,-9.2 3.2,-17 9.7,-23.3c6.4,-6.3 14.4,-9.4 23.7,-9.4c9.2,0 17,3.2 23.3,9.4c6.3,6.3 9.4,14.1 9.4,23.3c0,10.3 -3.3,18.3 -9.9,24.2c-6.6,5.9 -14.2,8.8 -22.8,8.8z" fill="#fff"/></g></svg>
                  </span>
                </span>
              </legend>
              <ul class="${def.class.main}">
                <li id="${def.id.fontList}">
                  <div class="${def.class.fontList}"></div>
                </li>
                <li id="${def.id.fontFace}">
                  <div class="${def.const.seed}_m0p0">
                    ${fontfaceHTML}
                  </div>
                  <div class="${def.const.seed}_m0p0 ${def.const.seed}_checkbox">
                    <input type="checkbox" id="${def.id.fface}" class="${def.class.checkbox}" ${CONST_VALUES.fontFace ? "checked" : ""} />
                    <label for="${def.id.fface}"></label>
                  </div>
                </li>
                <li id="${def.id.fontSmooth}">
                  <div class="${def.const.seed}_m0p0">${IS_CHN ? "字体平滑（默认：开）" : "Font Smooth (ON*)"}</div>
                  <div class="${def.const.seed}_m0p0 ${def.const.seed}_checkbox">
                    <input type="checkbox" id="${def.id.smooth}" class="${def.class.checkbox}" ${CONST_VALUES.fontSmooth ? "checked" : ""} />
                    <label for="${def.id.smooth}"></label>
                  </div>
                </li>
                ${tFontSizeHTML}
                <li id="${def.id.fontStroke}">
                  <div class="${def.class.flex}">
                    <span class="${def.const.seed}_m0p0">${IS_CHN ? "字体描边尺寸" : "Font Stroke"}</span>
                    ${tFixStrokeHTML}
                    <input id="${def.id.strokeSize}" type="text" data-fr-type="number" maxlength="5" />
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
                    <span class="${def.const.seed}_m0p0">${IS_CHN ? "字体阴影尺寸" : "Font Shadow"}</span>
                    <input id="${def.id.shadowSize}" type="text" data-fr-type="number" maxlength="4" />
                  </div>
                  <div class="${def.class.range}" data-ticks-position="top"
                    style="--step:.01;--min:0;--max:4;--value:${CONST_VALUES.fontShadow};--text-value:'${String(CONST_VALUES.fontShadow.toFixed(2))}'">
                    <input id="${def.id.shadow}" type="range" min="0" max="4" step=".01" value="${CONST_VALUES.fontShadow.toFixed(2)}" />
                    <output></output>
                    <div class="${def.class.rangeProgress}"></div>
                  </div>
                </li>
                <li id="${def.id.shadowColor}">
                  <div class="${def.const.seed}_m0p0">
                    <span class="${def.const.seed}_m0-4p0">${IS_CHN ? "阴影颜色" : "SDColor"}</span>
                    <span class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Hold down for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps3} ${def.const.seed}_ml-5px">
                        ${shadowColorTipHTML}
                      </span>
                    </span>
                  </div>
                  <div class="${def.class.frColorPicker}">
                    <input title="${IS_CHN ? "输入颜色代码" : "Input color code"}" type="text" id="${def.id.color}" />
                  </div>
                </li>
                <li id="${def.id.fontCss}">
                  <div class="${def.const.seed}_m0060">${IS_CHN ? "需要渲染的网页元素：" : "Rendered Elements:"}
                    <span id="${def.id.render}" class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Hold down for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps4}">
                      ${fontCSSTipHTML}
                      </span>
                    </span>
                    <div id="${def.id.cSwitch}" class="${def.class.switcher}" fr-button-switch="ON">\u2227</div>
                  </div>
                  <textarea placeholder="${IS_CHN ? "请谨慎修改默认值，避免渲染失效。" : "Modify defaults carefully to avoid font rendering failures."}"
                    class="${def.class.readonly}" title="${IS_CHN ? "重要参数，默认只读，双击解锁。" : "Read-only by default, Double-click to unlock."}"
                    id="${def.id.cssinclued}" readonly="readonly">${CONST_VALUES.fontCSS}</textarea>
                </li>
                <li id="${def.id.fontEx}">
                  <div class="${def.const.seed}_m0060">${IS_CHN ? "排除渲染的HTML标签：" : "Exclude HTML Labels:"}
                    <span id="${def.id.mono}" class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Hold down for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps5}">
                        ${fontExTipHTML}
                      </span>
                    </span>
                    <div id="${def.id.eSwitch}" class="${def.class.switcher}" fr-button-switch="ON">\u2227</div>
                  </div>
                  <textarea placeholder="${IS_CHN ? "排除渲染描边与阴影的HTML标签，如:" : "Exclude HTML tags for render strokes and shadows, such as:"} input, em, div[id$='test']"
                    id="${def.id.cssexclude}">${CONST_VALUES.fontEx}</textarea>
                </li>
                <li id="${def.id.submit}">
                  <button class="${def.class.reset}">${IS_CHN ? "重置" : "Reset"}</button>
                  <button class="${def.class.cancel}">${IS_CHN ? "取消" : "Close"}</button>
                  <button id="${def.id.backup}" title="${IS_CHN ? "备份与恢复" : "Backup & Restore"}">${IS_CHN ? "备份" : "\u212c"}</button>
                  <button class="${def.class.submit}">${IS_CHN ? "保存" : "Save"}</button>
                </li>
              </ul>
            </fieldset>
          </fr-container>`
        );

        /* SHOW_SCRIPT_PACKAGE_INFORMATION */

        const showSystemInfo = {
          system: () => {
            if (!IS_INTERNALSTYLE_ALLOWED) {
              const troubleshoot = IS_CHN
                ? `脚本内部样式无法被正常写入，请排查站点 CSP 权限或脚本冲突问题。`
                : `The script internal styles cannot be written properly, please troubleshoot site CSP permissions or script conflict issues.`;
              __console(
                "shown-system-error",
                `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c${troubleshoot}`,
                "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
                "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
                "color:#d11696;font:normal 500 12px/180% ui-monospace,monospace"
              );
            } else if (globalDisable && curEmptyConfig) {
              const disabledText = IS_CHN
                ? "全局字体渲染已禁用！如需开启请重新配置保存全局数据。"
                : "Global font rendering is disabled! To enable it please reconfigure to save global data.";
              __console(
                "shown-system-disabled",
                `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c${disabledText}`,
                "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
                "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
                "color:#5e0d1c;font:italic 500 12px/180% ui-monospace,monospace"
              );
            } else if (typeof exSitesIndex === "undefined") {
              __console(
                "shown-system-info",
                IS_CHN
                  ? `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c\u259e 脚本版本：%cV%s%c%s%c\r\n\u259e 个性化设置：%c%s%c/%s（当前设置：%s）\r\n%c\u259e 本地备份：%s\u3000\u259a 字体缩放：%s\r\n\u259e 渲染预览：%s\u3000\u259a 快捷工具：%s\r\n%c\u259e 渲染字体：%s\r\n\u259e 字体平滑：%s\u3000\u259a 字体重写：%s\r\n\u259e 字体描边：%s\u3000\u259a 字体阴影：%s`
                  : `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c\u259e Script Version: %cV%s%c%s%c\r\n\u259e Customize Total: %c%s%c/%s (current: %s)\r\n%c\u259e Backups: %s\u3000\u259a Font Scaling: %s\r\n\u259e Preview: %s\u3000\u259a Shortcut Tool: %s\r\n%c\u259e Rendering Font: %s\r\n\u259e Font Smooth: %s\u3000\u259a Font Rewrite: %s\r\n\u259e Font Stroke: %s\u3000\u259a Font Shadow: %s`,
                "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
                "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
                "color:#708090;font-size:12px;line-height:180%",
                "color:#708090;font:italic 600 14px/150% Candara,Times",
                def.var.curVersion,
                "color:#8b0000;font:italic 400 11px/150% Candara,Times",
                IS_CHEAT_UA ? "\u3000(CHEAT-UA)" : "",
                "color:#4682b4;font-size:12px;line-height:180%",
                def.var.domainCount > maxPersonalSites ? "color:#dc143c" : "color:#4682b4",
                def.var.domainCount,
                "color:#4682b4;font-size:12px;line-height:180%",
                maxPersonalSites,
                typeof def.var.domainIndex !== "undefined" ? (IS_CHN ? "\u81ea\u5b9a\u4e49" : "Custom") : IS_CHN ? "\u5168\u5c40" : "Global",
                "color:#4682b4;font-size:12px;line-height:180%",
                isBackupFunction ? "ON " : "OFF",
                isFontsize ? (isEditorBlock ? "OFF (SITE BLOCKED)" : `ON ${CONST_VALUES.fontSize === 1 ? `(BROWSER DEFINED)` : `(R\u2248${CONST_VALUES.fontSize})`}`) : "OFF",
                isPreview ? "ON " : "OFF",
                isHotkey ? "ON " : "OFF",
                "color:#008080;font-size:12px;line-height:180%",
                fontface_i ? def.var.reFontFace : IS_CHN ? `\u5df2\u5173\u95ed\uff08\u91c7\u7528${def.var.reFontFace}\uff09` : `OFF (using ${def.var.reFontFace})`,
                CONST_VALUES.fontSmooth ? "ON " : "OFF",
                CONST_VALUES.fontFace ? "ON " : "OFF",
                CONST_VALUES.fontStroke ? "ON " : "OFF",
                CONST_VALUES.fontShadow ? "ON " : "OFF"
              );
            } else {
              const rerenderText = IS_CHN
                ? `已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。`
                : `is already in the excluded rendering list. To re-render, please turn it on in the script menu.`;
              const hotkey = isHotkey && !IS_CHEAT_UA ? `(${platform === "MacOS" ? "Option" : "Alt"}+X)` : ``;
              __console(
                "shown-exclude-info",
                `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c${TOP_HOST.toUpperCase()} ${rerenderText} ${hotkey}`,
                "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
                "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
                "color:#4b0082;font:italic 500 12px/180% ui-monospace,monospace"
              );
            }
          },
          compat: isCheatUA => {
            navigatorInfo["cheat-ua"] = isCheatUA;
            const isCompatible = (IS_REAL_BLINK && engineVersion >= 88) || (IS_REAL_GECKO && engineVersion >= 98) || (IS_REAL_WEBKIT && engineVersion >= 15.4);
            const message = `%c${brand} Browser Compatible: ${isCompatible}%c\r\nFull functionality of the script is only supported in desktop browsers. (Version: Edge>=88, Chrome>=88, Opera>=75, Firefox>=98, Safari>=15.4)`;
            const compatStyles = [`${fullStyle("#dc143c", "#fffafa")};text-transform:uppercase`, "color:0;font-family:ui-monospace,monospace;line-height:150%"];
            INFO(`${message}%c\r\n${rawJSON.stringify(navigatorInfo)}`, ...compatStyles, "color:#a9a9a9;font:italic 400 12px/150% ui-monospace,monospace");
            if (isCheatUA) {
              const cheatUAWarnText = IS_CHN
                ? `%c浏览器UserAgent异常警告%c\r\n伪造 UserAgent 信息会造成脚本部分功能失效，如果出现功能异常请恢复浏览器默认的 UserAgent 信息。`
                : `%cBrowser UserAgent Exception%c\r\nForging UserAgent information will cause some functions of the script to fail. If some function is abnormal, please restore the browser's default UserAgent information.`;
              const warnStyles = [`${fullStyle("#715100", "#fffafa")};text-transform:uppercase`, "color:0;font-family:ui-monospace,monospace;line-height:150%"];
              __console("warn", cheatUAWarnText, ...warnStyles);
            }
          },
        };

        function insertPreviewStyletoFrame(node, style) {
          const doc = node.contentWindow?.document || node.contentDocument;
          const body = doc?.body?.innerText?.replace(/\s/g, "") ?? "";
          const target = doc?.head;
          if (!target || body.length === 0) return false;
          const { css, id } = getFrameStyleFixerName(style, target);
          const insertResult = insertStyle({ target, id, cssText: css, overwrite: true });
          insertResult && correctBoldStrokeProcess({ Fixedstyle: fixBoldTextStyle, Scenes: "iframe" })(node.contentWindow?.event?.type, doc);
          return insertResult;
        }

        function insertAsyncStyletoFrame(node, style, condition) {
          const doc = node.contentWindow?.document || node.contentDocument;
          const target = doc?.head;
          if (!target) return false;
          let checkLimitCount = 0;
          const { css, id } = getFrameStyleFixerName(style, target);
          while (getMainStyleElements({ currentScope: false, target }).length === 0 && checkLimitCount < 1e2) {
            if (insertStyle({ target, id, cssText: css })) {
              condition === "addedNodes" && correctBoldStrokeProcess({ Fixedstyle: fixBoldTextStyle, Scenes: "iframe" })(node.contentWindow?.event?.type, doc);
              return true;
            }
            checkLimitCount++;
          }
        }

        async function processframeStyleAsync({ node, condition, cssText }) {
          try {
            const insertFrameStyle =
              condition === "Preview"
                ? insertPreviewStyletoFrame
                : async (node, cssText) => await sleep(IS_GREASEMONKEY ? 3e2 : 16.7).then(() => insertAsyncStyletoFrame(node, cssText, condition));
            const result = (await insertFrameStyle(node, cssText)) ? condition : "Ignored";
            return { node, result };
          } catch (e) {
            ERROR("processFrameStyleAsync.%s:", condition, { url: node.src, msg: e.message });
            return { node, result: "Error" };
          }
        }

        function getFrameStyleFixerName(currentStyle, targetFrame) {
          const frameStyle = getMainStyleElements({ currentScope: false, target: targetFrame })[0];
          const blinkClass = IS_REAL_BLINK && frameStyle?.textContent.match(/\.fr-bold-[0-9a-f]{8}/)?.[0];
          const rootId = targetFrame?.ownerDocument.documentElement.id;
          const filter = !IS_REAL_BLINK && rootId ? "#" + rootId : "";
          if (blinkClass) def.var.ffA = blinkClass;
          const hasClass = blinkClass || def.var.ffA;
          const cssText = hasClass ? currentStyle.replace(/\b#(\w+)\b/g, filter).replace(/\.fr-bold-[0-9a-f]{8}/g, def.var.ffA) : currentStyle.replace(/\b#(\w+)\b/g, filter);
          return { css: cssText, id: frameStyle?.id || generateRandomString(12, "char") };
        }

        function insertStyleInFrames({ condition, nodeArray = [], style } = {}) {
          if (!IS_CURRENTSITE_ALLOWED) return;
          const cssText = style ?? tStyle;
          if (nodeArray.length === 0) {
            qA("html>:not(head) *").forEach(el => {
              const shadow = el.shadowRoot;
              if (shadow) nodeArray.push(...qA("iframe", shadow));
              else if (getNodeName(el) === "iframe") nodeArray.push(el);
            });
          }
          updateFramesWithStyle(nodeArray, condition, cssText);
        }

        function updateFramesWithStyle(frameArray, condition, cssText) {
          const updatedCssText = IS_BLINK_BELOW_128 ? cssText : cssText.replace("var(--fr-font-fontscale)", "initial");
          frameArray.forEach(node => {
            IS_GREASEMONKEY &&
              node.addEventListener("load", () => {
                try {
                  const target = node.contentWindow.document.head;
                  const { css, id } = getFrameStyleFixerName(updatedCssText, target);
                  if (!insertStyle({ target, id, cssText: css, overwrite: true })) throw new Error("Failed to insert style");
                  node.setAttribute(def.const.iframeAttrName, "Passive");
                  DEBUG("[NOFRAME] Passively insert styles!");
                } catch (e) {
                  ERROR("updateFramesWithStyle.Passive:", { url: node.src, msg: e.message });
                }
              });
            processActiveFramework({ node, condition, cssText: updatedCssText });
          });
        }

        function processActiveFramework({ node, condition = "DOMLoaded", cssText }) {
          if (!node || !cssText) return;
          return new Promise(resolve => {
            node.removeAttribute("sandbox");
            const [{ bottom, right, width, height }, { display, visibility }] = [node.getBoundingClientRect(), gCS(node)];
            const isFrameActive = bottom >= 0 && right >= 0 && width > 4 && height > 4 && display !== "none" && visibility !== "hidden";
            if (isFrameActive) resolve(processframeStyleAsync({ node, condition, cssText }));
            else resolve(null);
          })
            .then(result => {
              if (!result) return;
              const { node, result: cssResult } = result;
              node?.setAttribute(def.const.iframeAttrName, cssResult);
              COUNT(`[ASYNCFRAMES][ACT:${cssResult}]`);
            })
            .catch(e => void ERROR("ASYNCFRAMES:", e.message));
        }

        function loadPreview(hasPreviewPermission, styleText = tStyle, shouldReturn = true) {
          try {
            if (!hasPreviewPermission) return;
            const currentID = `#${document.documentElement.id}`;
            const matchedID = styleText.match(/\b#\w+\b/)?.[0];
            if (matchedID && matchedID !== currentID) styleText = styleText.replace(/\b#\w+\b/g, currentID);
            insertStyle({ target: document.head, id: def.id.rndStyle, cssText: styleText, overwrite: true });
            if (isFontsize) {
              const { prev, cur } = getscaleValueMatrix(def.array.scaleMatrix);
              cur !== prev && adjustCoordinateOffset({ cur, prev, props: def.array.props });
              DEBUG("scale<Matrix>: %o", def.array.scaleMatrix);
            }
            insertStyleInFrames({ condition: "Preview", style: styleText });
            def.var.preview = !shouldReturn;
          } catch (e) {
            ERROR("LoadPreview:", e.message);
          }
        }

        function insertHTML(htmlText) {
          try {
            const section = cE("fr-configure", { id: def.id.configure });
            const shadow = (def.const.configIf = aS(section));
            shadow.innerHTML = tTP.createHTML(htmlText);
            const cssText = hostStyle("fr-configure") + def.const.style.frConfigure;
            applyStylesToShadowRoot(shadow, cssText, `${def.const.seed}-configure`);
            createDialogModel(section, document.documentElement);
          } catch (e) {
            ERROR("InsertHTML:", e.message);
          }
        }

        function setSliderProperty(slider, thisValue, bits) {
          if (!slider) return;
          slider.value = Number(thisValue).toFixed(bits);
          slider.setAttribute("value", Number(thisValue));
          slider.parentNode.style.setProperty("--value", Number(thisValue));
          slider.parentNode.style.setProperty("--text-value", rawJSON.stringify(Number(thisValue).toFixed(bits)));
        }

        function checkInputValue(input, slider, regex, bits, isOne = false) {
          if (!input || !slider) return;
          input.addEventListener("input", () => void (input.value = input.value.replace(/[^0-9.]/, "")));
          input.addEventListener("change", function () {
            const inputValue = this.value === "OFF" ? (isOne ? 1 : 0) : this.value ? Number(this.value) : null;
            const sliderValue = Number(slider.parentNode.style.getPropertyValue("--value"));
            if (!regex.test(inputValue) || inputValue < slider.parentNode.style.getPropertyValue("--min") || inputValue > slider.parentNode.style.getPropertyValue("--max")) {
              setSliderProperty(slider, sliderValue, bits);
              input.value = sliderValue === (isOne ? 1 : 0) ? "OFF" : sliderValue.toFixed(bits);
              input._value_ = sliderValue;
            } else {
              setSliderProperty(slider, inputValue, bits);
              input.value = isOne ? (inputValue === 1 ? "OFF" : inputValue.toFixed(bits)) : inputValue === 0 ? "OFF" : inputValue.toFixed(bits);
              input._value_ = inputValue;
            }
          });
        }

        function removeKeyboardEvent(target) {
          if (!target) return;
          document.addEventListener("blur", stopPropagations, true);
          target.addEventListener("keydown", stopPropagations);
          target.addEventListener("keyup", stopPropagations);
          target.addEventListener("keypress", stopPropagations);
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
          if (typeof def.var.fontReady !== "undefined") return delete def.var.fontReady;
          const startTime = performance.now();
          const timeReady = new Promise(resolve => {
            sleep(t, { useCachedSetTimeout: true }).then(() => void resolve({ status: "timeout", time: t }));
          });
          const fontReady = document.fonts.ready.then(value => {
            value.time = performance.now() - startTime;
            return value;
          });
          return (def.var.fontReady = Promise.race([timeReady, fontReady]));
        }

        async function matchByPostScriptName(checkFontName) {
          const fontCheckList = await getMergedFontCheckList();
          for (const fontname of fontCheckList.values()) {
            if (fontname.en === checkFontName && fontname.ps) return fontname.ps;
          }
          return checkFontName;
        }

        function setDateFormat(fmt, date) {
          const dateComponents = {
            y: () => date.getFullYear().toString(),
            M: () => (date.getMonth() + 1).toString().padStart(2, "0"),
            d: () => date.getDate().toString().padStart(2, "0"),
            H: () => date.getHours().toString().padStart(2, "0"),
            m: () => date.getMinutes().toString().padStart(2, "0"),
            s: () => date.getSeconds().toString().padStart(2, "0"),
            S: () => date.getMilliseconds().toString().padStart(3, "0"),
          };
          return fmt.replace(/y+|M+|d+|H+|m+|s+|S+/g, match => {
            const key = match[0];
            return dateComponents[key]();
          });
        }

        function inspectLicense() {
          if (!ROOT_SECRET_KEY) return;
          try {
            const source = decodeURI(`%C3%99%C3%97%C3%9D%7F%7D%C2%9A%7D%C3%9D%C2%9A%7F%C3%9EZ%C3%B7%C3%87%1B%C3%99%C3%B6%C2%BB%C3%93n%C3%BC%C3%AB%C2%A7x`);
            const result = sqliteDBDataAccess(encrypt(source, null), void 0, ROOT_SECRET_KEY);
            const subkey = new RegExp(def.var.scriptAuthor).exec(decrypt(result))?.[0];
            return { keycode: () => result, inspect: (key = decrypt(result)) => key.includes(subkey) };
          } catch (e) {
            ERROR("inspectLicense:", e.message);
          }
        }

        async function initializeConfigData(order) {
          const keys = await GMlistValues();
          if (def.var.structureError === true || (typeof rebuild === "boolean" && rebuild === order)) {
            keys.forEach(key => (key !== "_CONFIGURE_" || def.var.structureError === true) && GMdeleteValue(key));
            if (def.var.structureError !== true) {
              const rebuildWarnText = IS_CHN
                ? `%c数据已重建\r\n%c程序开启升级后数据重建选项，所有配置数据已初始化，您可手动还原正确的备份数据。但强烈建议您重新配置参数，以使用最新参数功能！`
                : `%cData has been rebuilt\r\n%cThe program turns on the option to rebuild data after an upgrade. all configuration data has been initialized. you can manually restore the correct backup data. but it is strongly recommended that you reconfigure the parameters to use the latest parameter functions!`;
              __console("warn", rebuildWarnText, "font-weight:700", "font-weight:400");
              _config_data_.rebuild = !order;
              _config_data_.curVersion = void 0;
            } else {
              const resetWarnText = IS_CHN
                ? `%c数据重置警告\r\n%c因检测到存储数据解析异常或被非法篡改，为确保程序正常运行，所有配置数据已初始化，请手动还原正确的本地备份数据！`
                : `%cData Reset Warning\r\n%cDue to the detection of abnormal parsing of stored data or illegal tampering, all configuration data has been initialized in order to ensure the normal operation of the program, please restore the correct local backup data manually!`;
              __console("error", resetWarnText, "font-weight:700", "font-weight:400");
              _config_data_.isBackupFunction = true;
              _config_data_.isPreview = false;
              _config_data_.isFontsize = false;
              _config_data_.isFixViewport = false;
              _config_data_.isHotkey = true;
              _config_data_.isCloseTip = false;
              _config_data_.maxPersonalSites = 100;
              _config_data_.globalDisable = false;
              _config_data_.isCustomMono = false;
              _config_data_.rebuild = !order;
              _config_data_.curVersion = void 0;
            }
            def.var.versionStatus = null;
            saveData("_CONFIGURE_", _config_data_);
            DEBUG("%c Reconstruct configuration data: true ", `background-color:${def.var.structureError ? "#ff0000" : "#4b0082"};color:#fffafa;font-style:italic`);
          } else if (typeof rebuild === "undefined") {
            _config_data_.rebuild = !order;
            saveData("_CONFIGURE_", _config_data_);
            const message = !curVersion ? "configuration data is null, building now!" : "configuration data has been restored!";
            DEBUG(`%c${message}`, `color:${!curVersion ? "#808000" : "#1e90ff"};font-style:italic;font-family:ui-monospace,monospace`);
          } else {
            const dataStatus = curVersion === def.var.curVersion;
            const message = dataStatus ? "OK" : "Failed due to update";
            DEBUG(`%cConfigure Data Status: ${message}`, `color:${dataStatus ? "#008080" : "#dc143c"};font-style:italic;font-family:ui-monospace,monospace`);
          }
          return keys.length;
        }

        async function hintUpdateInfo(url, savedVersion) {
          const CANDIDATE_FIELD =
            typeof savedVersion === "undefined"
              ? IS_CHN
                ? "新安装首次运行"
                : "new-install execute"
              : savedVersion === null
              ? IS_CHN
                ? "数据重置后运行"
                : "data-rebuilt execute"
              : savedVersion === def.var.curVersion
              ? IS_CHN
                ? "您通过历史查询"
                : "historical query for"
              : IS_CHN
              ? "更新后首次运行"
              : "update first execute";
          const FIRST_INSTALL_NOTICE_WARNING =
            typeof savedVersion === "undefined"
              ? IS_CHN
                ? `<li class="${def.const.seed}_init"><strong>温馨提示</strong> 首次加载此脚本时，默认使用内置参数进行渲染，若显示效果不佳，<b>属于正常情况</b>。请根据您的显示器及浏览器的本地配置，<b>重新设定</b>渲染参数以达到最佳效果！</li>`
                : `<li class="${def.const.seed}_init ${def.const.seed}_wbka"><strong>Tips</strong> When first loaded, it's rendered by default with built-in parameters, and it's <b>Normal</b> if it doesn't work well. Please according to the local configuration of your monitor and browser, <b>Reset</b> the parameters to achieve the best rendering effect!</li>`
              : ``;
          const STRUCTURE_ERROR_NOTICE_WARNING =
            def.var.structureError === true
              ? IS_CHN
                ? `<li class="${def.const.seed}_warn"><strong>数据重置警告</strong> 检测到本地运行的存储数据解析异常或被非法篡改，为确保程序正常运行，所有设置数据已初始化，请您手动还原正确的本地备份数据！</li>`
                : `<li class="${def.const.seed}_warn ${def.const.seed}_wbka"><strong>Data Reset Warning</strong> Detected abnormal parsing or illegal tampering of locally run storage data, all setting data has been initialized, please manually restore the correct local backup data.</li>`
              : savedVersion === null
              ? IS_CHN
                ? `<li class="${def.const.seed}_warn ${def.const.seed}_idg"><strong>数据已重建</strong> 脚本开启升级后数据重建选项，所有数据已初始化。您仍可通过备份还原之前的设置数据，但<b>强烈建议</b>您重新配置参数，以使用新功能！记得及时重新备份哟！</li>`
                : `<li class="${def.const.seed}_warn ${def.const.seed}_idg ${def.const.seed}_wbka"><strong>Data has been reconstructed</strong> The script enables the post-upgrade data reconstruction option, and all data has been initialized. You can still restore the previous settings data through backup, but it's <b>recommended</b> that you re-configure the parameters to use the new features! <b>Remember to re-backup in time!</b></li>`
              : ``;
          const titleText = IS_CHN ? "脚本更新 - 温馨提示" : "Script Updates - Update Tips";
          const messageText = IS_CHN
            ? `<p class="${def.const.seed}_wbka"><span class="${def.const.seed}_cto ${def.const.seed}_hi_cn">您好！</span>这是${CANDIDATE_FIELD}<span class="${def.const.seed}_pd4 ${def.const.seed}_fb">${def.var.scriptName}</span>的新版本<span class="${def.const.seed}_cto ${def.const.seed}_v_cn">${def.var.curVersion}</span>，以下为更新细则：</p><p><ul id="${def.const.seed}_update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul></p><p>建议您先去查阅 <strong class="${def.const.seed}_cto ${def.const.seed}_fb ${def.const.seed}_fsi">新版使用文档</strong> ，要去看一下吗？</p>`
            : `<p class="${def.const.seed}_wbka" class="${def.const.seed}_lh180"><span class="${def.const.seed}_cto ${def.const.seed}_hi_en">Hi! </span>This is ${CANDIDATE_FIELD} "<span class="${def.const.seed}_pd4 ${def.const.seed}_fb">${def.var.scriptName}</span>" in Version<span class="${def.const.seed}_cto ${def.const.seed}_v_en">${def.var.curVersion}</span>, and the update details are as follows:</p><p><ul id="${def.const.seed}_update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul></p><p>Suggest you to view <strong class="${def.const.seed}_cto ${def.const.seed}_fb ${def.const.seed}_fsi">Usage Document,</strong> okay?</p></p>`;
          const [trueButtonText, falseButtonText] = [IS_CHN ? "好，去看看" : "Yes, Let's go", IS_CHN ? "不，算了吧" : "No, Thanks"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, messageText, titleText });
          if (await frDialog.respond()) GMopenInTab(url, false);
          sleep(5e2)((frDialog = null)).then(r => void (savedVersion === r && refresh()));
        }

        function showUpdateInfo(version) {
          if (version === def.var.curVersion) return;
          _config_data_.curVersion = def.var.curVersion;
          saveData("_CONFIGURE_", _config_data_);
          cache.remove("_FONTCHECKLIST_");
          const action = typeof version === "undefined" ? "New-install" : !version ? "Reconstruct" : "Up-to-date";
          DEBUG(`Update.info.[${action}]: %cV${def.var.curVersion}`, "color:#dc143c;font-weight:600");
          if (IS_INTERNALSTYLE_ALLOWED && (!isCloseTip || version === null)) hintUpdateInfo(def.url.guideURI, version);
        }

        /* SCRIPT_MENU_INSERT_PACKAGE */

        const addAction = { setFeedback, openSettings, setExcludeSites, setVipConfigure, setIncludeSites, setCustomExsite };

        function setFeedback() {
          GMopenInTab(def.url.feedback, false);
        }

        function openSettings() {
          if (!qS(`#${def.id.configure}`)) {
            try {
              insertHTML(tHTML);
              operateConfigure();
              sleep(1e2)({ c: isFontsize, w: handleWindowResize })
                .then(v => v.w(v.c))
                .then(e => e.f(e))
                .then(setConfigureListener);
            } catch (e) {
              ERROR("SetConfigure:", e.message);
            }
          } else closeConfigurePage({ isReload: false });
        }

        async function setExcludeSites() {
          const messageText = IS_CHN
            ? `<p id="${def.const.seed}_exSite_add">${TOP_HOST}</p><p class="${def.const.seed}_cb8">该域名下所有页面将被禁止字体渲染！</p><p>确定后当前页面将自动刷新，请确认是否排除？</p>`
            : `<p id="${def.const.seed}_exSite_add">${TOP_HOST}</p><p class="${def.const.seed}_cb8">All the webpages under this domain name will be prohibited from font rendering!</p><p>Please confirm to exclude?</p>`;
          const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义排除" : "Exclusion"];
          const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "排除字体渲染" : "Exclude Font Rendering"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            const { exSite } = await getExSitesData();
            exSite.push(TOP_HOST);
            saveData("_EXCLUDE_SITES_", uniq(exSite.sort()));
            closeConfigurePage({ isReload: true });
          } else addAction.setCustomExsite();
          frDialog = null;
        }

        async function setVipConfigure() {
          const _config_data_ = await getConfigureData();
          const isBackupFunction = Boolean(_config_data_.isBackupFunction ?? true);
          const isPreview = Boolean(_config_data_.isPreview);
          const isFontsize = Boolean(_config_data_.isFontsize);
          const isHotkey = Boolean(_config_data_.isHotkey ?? true);
          const isFixViewport = Boolean(_config_data_.isFixViewport ?? true);
          const isCloseTip = Boolean(_config_data_.isCloseTip);
          const globalDisable = Boolean(_config_data_.globalDisable);
          const maxPersonalSites = Number(_config_data_.maxPersonalSites) || 100;
          const title = IS_CHN ? "高级核心功能设置" : "Advanced Core Settings";
          const globalDisableNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="当您仅需要在特定域名渲染时，可使用此快捷功能关闭全局设置！">\u2468 仅在特定域名生效（全局禁用）</div><button id="${def.id.globaldisable}">关闭全局</button>`
            : `<div class="${def.const.seed}_VIP" title="To turn off global render when only need to render at specific domain name.">\u2468 Disabled Global Rendering</div><button id="${def.id.globaldisable}">Disable</button>`;
          const globalDisabledTrigger = !globalDisable ? `<li id="${def.id.gc}">${globalDisableNodeHTML}</li>` : ``;
          const backupNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="养成定期备份的好习惯，保护自己的数据安全！">\u2460 本地备份功能（默认：开启）</div>`
            : `<div class="${def.const.seed}_VIP" title="Keep your data safe with regular backups!">\u2460 Local Backup (Default: ON)</div>`;
          const previewNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="无需保存刷新页面，直接预览渲染效果！">\u2461 渲染预览功能（默认：关闭）</div>`
            : `<div class="${def.const.seed}_VIP" title="Preview the rendering directly without saving and refreshing the page.">\u2461 Render Preview (Default: OFF)</div>`;
          const scaleNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="实验性功能：兼容大部分浏览器，但仍在Beta测试阶段！">\u2462 字体缩放功能（默认：关闭）</div>`
            : `<div class="${def.const.seed}_VIP" title="Experimental: Compatible with most browsers, but still in Beta.">\u2462 Font Scaling (Default: OFF)</div>`;
          const viewportNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="实验性功能：跟随字体缩放开关，可单独关闭，使用方法查阅帮助文件！">\u2463 视口单位修正（默认：关闭）</div>`
            : `<div class="${def.const.seed}_VIP" title="Experimental: Follow the font scaling switch, can be turned off individually.">\u2463 Fix Viewport (Default: OFF)</div>`;
          const shortcutNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="如快捷键有冲突，请在此关闭它！">\u2464 键盘快捷键功能（默认：开启）</div>`
            : `<div class="${def.const.seed}_VIP" title="If there is a conflict in the shortcut, please close it.">\u2464 Shortcut Tool (Default: ON)</div>`;
          const nopromptNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="您将无法第一时间获得更新内容，错过重要提示！">\u2465 关闭更新提示功能（不推荐）</div>`
            : `<div class="${def.const.seed}_VIP" title="You won't get update or important tips, which we don't recommend.">\u2465 Turn Off Update Prompts</div>`;
          const mpsNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="防止页面加载缓慢，不建议设置过高的数值！">\u2466 个性化设置总数（默认: 100）</div>`
            : `<div class="${def.const.seed}_VIP" title="Prevents slow loading, not recommended to set a higher value.">\u2466 Customize Total (Defalut: 100)</div>`;
          const fontlistNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}_VIP" title="安装新字体后，请先重启浏览器再重建全局缓存！">\u2467 字体列表全局缓存（时效: 30天）</div>`
            : `<div class="${def.const.seed}_VIP" title="After installing new fonts, restart browser before rebuilding the global cache.">\u2467 FontList Cache (Expired: 30d)</div>`;
          const feedbackNodeText = IS_CHN ? "如果您遇到错误或提建议，请及时向我反馈" : "Feedback for any errors or suggestions";
          const titleText = `<span>${title}</span><span class="${def.const.seed}_f14">- Version ${def.var.curVersion} -</span>`;
          const messageText = String(
            `<ul class="${def.class.main}">
              <li id="${def.id.bk}">
                ${backupNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.isbackup}" class="${def.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                  <label for="${def.id.isbackup}"></label>
                </div>
              </li>
              <li id="${def.id.pv}">
                ${previewNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.ispreview}" class="${def.class.checkbox}" ${isPreview ? "checked" : ""} />
                  <label for="${def.id.ispreview}"></label>
                </div>
              </li>
              <li id="${def.id.fs}">
                ${scaleNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.isfontsize}" class="${def.class.checkbox}" ${isFontsize ? "checked" : ""} />
                  <label for="${def.id.isfontsize}"></label>
                </div>
              </li>
              <li id="${def.id.fvp}">
                ${viewportNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.isfixviewport}" class="${def.class.checkbox}" ${isFixViewport ? "checked" : ""} />
                  <label for="${def.id.isfixviewport}"></label>
                </div>
              </li>
              <li id="${def.id.hk}">
                ${shortcutNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.ishotkey}" class="${def.class.checkbox}" ${isHotkey ? "checked" : ""} />
                  <label for="${def.id.ishotkey}"></label>
                </div>
              </li>
              <li id="${def.id.ct}">
                ${nopromptNodeHTML}
                <div class="${def.const.seed}_m0p0">
                  <input type="checkbox" id="${def.id.isclosetip}" class="${def.class.checkbox}" ${isCloseTip ? "checked" : ""} />
                  <label for="${def.id.isclosetip}"></label>
                </div>
              </li>
              <li id="${def.id.mps}">
                ${mpsNodeHTML}
                <div class="${def.const.seed}_m0500 ${def.const.seed}_p0">
                  <input maxlength="4" id="${def.id.maxps}" placeholder="100" value="${maxPersonalSites}" />
                </div>
              </li>
              <li id="${def.id.flc}">
                ${fontlistNodeHTML}
                <button id="${def.id.flcid}">${IS_CHN ? "重建缓存" : "Rebuild"}</button>
              </li>
              ${globalDisabledTrigger}
            </ul>
            <div id="${def.id.feedback}">\ud83e\udde1<span><b> ${feedbackNodeText} </b></span>\ud83e\udde1</div>`
          );
          const [trueButtonText, falseButtonText, neutralButtonText] = [IS_CHN ? "保存数据" : "Save", IS_CHN ? "脚本主页" : "Homepage", IS_CHN ? "取 消" : "Cancel"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          let _bk = Boolean(qS(`#${def.id.isbackup}`, def.const.dialogIf)?.checked);
          let _pv = Boolean(qS(`#${def.id.ispreview}`, def.const.dialogIf).checked);
          let _fs = Boolean(qS(`#${def.id.isfontsize}`, def.const.dialogIf).checked);
          let _fvp = Boolean(qS(`#${def.id.isfixviewport}`, def.const.dialogIf).checked);
          let _hk = Boolean(qS(`#${def.id.ishotkey}`, def.const.dialogIf).checked);
          let _ct = Boolean(qS(`#${def.id.isclosetip}`, def.const.dialogIf).checked);
          let _mps = Number(qS(`#${def.id.maxps}`, def.const.dialogIf).value) || 100;
          const maxpsNode = qS(`#${def.id.maxps}`, def.const.dialogIf);
          removeKeyboardEvent(maxpsNode);
          maxpsNode?.addEventListener("input", function () {
            this.value = this.value.replace(/[^0-9]/g, "");
          });
          const ctNode = qS(`#${def.id.isclosetip}`, def.const.dialogIf);
          ctNode?.addEventListener("click", function () {
            const info = IS_CHN
              ? `我们强烈地不建议您关闭更新提示功能，那样您将不能及时获得更新内容和重要的功能提示，特殊情况下甚至会影响您的正常使用。双击字体渲染设置界面顶部的脚本名称（或访问Github主页），可查看历史更新内容。\r\n\r\n请确认是否“关闭更新提示功能”？`
              : `We strongly do not recommend that you turn off the update prompt, as you will not be able to get updates and important prompts in time, and in special cases may even affect your normal use. Double-click the script-name at font rendering settings interface (or visit Github) to see the update history.\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐜𝐥𝐨𝐬𝐞 𝐭𝐡𝐞 𝐮𝐩𝐝𝐚𝐭𝐞 𝐩𝐫𝐨𝐦𝐩𝐭?`;
            if (this.checked) this.checked = Boolean(confirm(info));
          });
          const fsNode = qS(`#${def.id.isfontsize}`, def.const.dialogIf);
          const fvpNode = qS(`#${def.id.isfixviewport}`, def.const.dialogIf);
          fsNode?.addEventListener("click", function () {
            const info = (IS_CHN ? "字体比例缩放（实验性功能）\r\n\r\n警告：" : "𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠 (𝐞𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭𝐚𝐥 𝐟𝐞𝐚𝐭𝐮𝐫𝐞)\r\n𝐖𝐚𝐫𝐧𝐢𝐧𝐠:").concat(
              IS_REAL_GECKO
                ? IS_CHN
                  ? `由于Firefox(Gecko内核)的兼容性原因，会对部分网站样式、功能兼容不足，从而造成样式错乱、页面动作缺失等问题，如果同时使用Greasemonkey扩展则会造成无法修复的错误。\r\n\r\n强烈建议您：使用“浏览器缩放”替代 (快捷键：ctrl+-/ctrl++)`
                  : `Due to the compatibility of Firefox (Gecko Engine), may cause lack of compatibility with some websites, and if using the 'Greasemonkey' at the same time can cause unfixable errors. \r\nRecommended: use 'Browser Zoom' instead. \r\nBrowser Shortcut Key: ( Ctrl+- / Ctrl++ )`
                : IS_CHN
                ? `脚本已新增视口单位修正功能，在某些站点会因为CORS或CSP而被浏览器阻止，可通过扩展'Disable-CORS'或'Disable-CSP'来解决。如有安全顾虑，请关闭字体缩放功能，或单独关闭视口修正功能(全局)（这可能导致字体缩放后在某些站点出现样式异常）`
                : `The script added the 'Fix Viewport' feature, browser may block it due to CORS or CSP, which can be resolved by extending 'Disable-CORS' and 'Disable-CSP'. If you have security concerns, please turn off 'Font Scaling', or separately turn off 'Fix Viewport' (which may cause style issues).`,
              IS_CHN ? "\r\n\r\n请确认是否开启字体缩放功能？" : "\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐞𝐧𝐚𝐛𝐥𝐞 𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠?"
            );
            if (this.checked) this.checked = Boolean(confirm(info));
            if (!this.checked && fvpNode?.checked) fvpNode.checked = false;
            if (this.checked && !fvpNode?.checked) fvpNode.checked = true;
          });
          fvpNode?.addEventListener("click", function () {
            if (this.checked && !fsNode?.checked) fsNode?.click();
          });
          const globaldisableNode = qS(`#${def.id.globaldisable}`, def.const.dialogIf);
          globaldisableNode?.addEventListener("click", async () => {
            const messageText = IS_CHN
              ? `<p class="${def.const.seed}_cb8">下一步操作将关闭默认的全局设置数据，您可以仅在指定的域名保存需要渲染的站点独享数据。请注意，全局数据禁用后，您需要重新配置并保存为全局数据才能启用默认全局渲染规则。</p><p>请确认您是否要禁用全局设置？</p>`
              : `<p class="${def.const.seed}_cb8">The next step will clear the global data and you can save site data only on the specified domain name. Note that after global data is disabled, you need to reconfigure and save as global data to re-enable global rendering.</p><p>Please confirm to disable global settings?</p>`;
            const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "禁用全局设置数据" : "Disable Global Settings"];
            let disableDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            if (await disableDialog.respond()) {
              const fontSetData = {
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
              };
              saveData("_FONTS_SET_", fontSetData);
              _config_data_.globalDisable = true;
              saveData("_CONFIGURE_", _config_data_);
              closeConfigurePage({ isReload: true });
            }
            disableDialog = null;
          });
          qS(`#${def.id.flcid}`, def.const.dialogIf)?.addEventListener("click", async () => {
            const successText = IS_CHN ? "字体列表全局缓存已重建，当前页面即将刷新！" : "Rebuilt Fontlist cache and refresh soon!";
            const messageText = `<p class="${def.const.seed}_cb88 ${def.const.seed}_tac ${def.const.seed}_cps">${successText}</p><p class="${def.const.seed}_tac"><a class="${def.const.seed}_cpsa"><img src='${def.url.fontlistImg}' /></a></p>`;
            const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "字体列表全局缓存已重建" : "Rebuilt Fontlist Cache"];
            let rebuiltDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            cache.remove("_FONTCHECKLIST_");
            if (await rebuiltDialog.respond()) closeConfigurePage({ isReload: true });
            rebuiltDialog = null;
          });
          qS(`#${def.id.feedback}`, def.const.dialogIf)?.addEventListener("click", () => void GMopenInTab(def.url.feedback, false));
          const queryNodes = `#${def.id.isbackup},#${def.id.ispreview},#${def.id.isfontsize},#${def.id.ishotkey},#${def.id.isfixviewport},#${def.id.isclosetip},#${def.id.maxps}`;
          qA(queryNodes, def.const.dialogIf).forEach(items => {
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
            const messageText = `<p class="${def.const.seed}_cb88">${IS_CHN ? "高级核心功能参数已成功保存，当前页面即将刷新！" : "Advanced Core Data was saved and refresh soon!"}</p>`;
            const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "高级核心功能设置保存" : "Advanced Core Data Save"];
            let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            if (await successDialog.respond()) closeConfigurePage({ isReload: true });
            successDialog = null;
          } else GMopenInTab(def.url.installURI, false);
          frDialog = null;
        }

        async function setIncludeSites() {
          const messageText = IS_CHN
            ? `<p class="${def.const.seed}_exclusion">${TOP_HOST}</p><p class="${def.const.seed}_cdg">该域名下所有页面将重新进行字体渲染！</p><p>确定后当前页面将自动刷新，请确认是否恢复？</p>`
            : `<p class="${def.const.seed}_exclusion">${TOP_HOST}</p><p class="${def.const.seed}_cdg">All the webpages under this domain name will be allowed from font rendering!</p><p>Please confirm to re-render?</p>`;
          const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义排除" : "Exclusion"];
          const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "恢复字体渲染" : "Allow Font Rendering"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            let panDomain;
            const { exSite, exSitesIndex } = await getExSitesData();
            const wildcard = site => typeof site === "string" && !site.indexOf("*") && new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${site.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`);
            let regexArr = exSite.map(wildcard);
            for (let i = 0, l = exSite.length; i < l; i++) {
              if (exSite[i].indexOf("*") === 0 && regexArr[i].test(CUR_HOST)) {
                panDomain = exSite[i];
                break;
              }
            }
            regexArr = null;
            if (!panDomain) {
              typeof exSitesIndex !== "undefined" && exSite.splice(exSitesIndex, 1);
              const exSiteData = uniq(exSite.sort());
              saveData("_EXCLUDE_SITES_", exSiteData);
              closeConfigurePage({ isReload: true });
            } else {
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}_exclusion">${panDomain}</p><p class="${def.const.seed}_cb8">该网站是被以上包含通配符的泛域名所排除渲染的。</p><p>『确定』将自动取消该泛域名下所有的排除项。</p><p>『管理』您将进入自定义排除站点列表手动处理。</p>`
                : `<p class="${def.const.seed}_exclusion">${panDomain}</p><p class="${def.const.seed}_cb8">This site is excluded by Pan-domain name.</p><p>『OK』Allow all under this Pan-domain name.</p><p>『Manage』Enter the customized exclusion list.`;
              const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "管 理" : "Manage"];
              const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "恢复泛域名下的字体渲染" : "Allow Pan-domain Font Rendering"];
              let panDomainDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              if (await panDomainDialog.respond()) {
                const { exSite } = await getExSitesData();
                const exSiteData = uniq(exSite.filter(item => !item.endsWith(panDomain.slice(1))).sort());
                saveData("_EXCLUDE_SITES_", exSiteData);
                closeConfigurePage({ isReload: true });
              } else addAction.setCustomExsite();
              panDomainDialog = null;
            }
          } else addAction.setCustomExsite();
          frDialog = null;
        }

        async function setCustomExsite() {
          const { exSite } = await getExSitesData();
          let [_temp_, listContents = ""] = [exSite.sort()];
          let exSiteLength = _temp_.length;
          for (let i = 0; i < exSiteLength; i++) {
            const domainName = convertHtmlToText(_temp_[i]);
            const number = i + 1 > 9 ? i + 1 : "0" + (i + 1);
            listContents +=
              `<li id="${def.const.seed}_d_d_l_${i}"><span>${number}. </span><span class="${def.const.seed}_domainlist" title="${domainName}">` +
              `${domainName}</span><span>[<a id="${def.const.seed}_d_d_l_s_${i}" data-fr-domain="${domainName}">${IS_CHN ? "删除" : "Del"}</a>]</span></li>`;
          }
          listContents = listContents || `<li id="${def.const.seed}_temporary">---- ${IS_CHN ? "暂时没有自定义排除站点" : "No customized exclusion"} ----</li>`;
          const searchBtn = IS_CHN ? "查 询" : "Search";
          const addBtn = IS_CHN ? "添 加" : "Add";
          const customExsiteHTML = IS_CHN
            ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">添加自定义排除站点</b>：在文本框中输入正确的域名，点击添加按钮，支持首位通配符的泛域名，如：*.example.com</p><p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">数据保存</b>：完成所有添加、删除操作后需点击保存按钮才会使数据保存生效，保存数据后不能撤回，请谨慎操作。</p>`
            : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">Add</b>: Enter domain-name and click the Add button. Supports wildcard domain as: *.example.com</p><p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">Save</b>: Click the Save button after finishing adding and deleting to make it effective.</p>`;
          const messageText = `${customExsiteHTML}<p class="${def.const.seed}_list_p"><input id="${def.const.seed}_d_s_"><button id="${def.const.seed}_d_s_s_">${searchBtn}</button><button id="${def.const.seed}_d_s_a_">${addBtn}</button></p><ul id="${def.const.seed}_d_d_">${listContents}</ul>`;
          const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "保存数据" : "Save", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义排除站点管理" : "Manage Customized Exclusions"];
          let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
          const dsNode = qS(`#${def.const.seed}_d_s_`, def.const.dialogIf);
          const dssNode = qS(`#${def.const.seed}_d_s_s_`, def.const.dialogIf);
          const dsaNode = qS(`#${def.const.seed}_d_s_a_`, def.const.dialogIf);
          const ddNode = qS(`#${def.const.seed}_d_d_`, def.const.dialogIf);
          const tpNode = qS(`#${def.const.seed}_temporary`, def.const.dialogIf);
          if (ddNode && dsNode && dssNode && dsaNode) {
            dsNode.addEventListener("keydown", e => {
              if (e.key !== "Enter") return;
              e.preventDefault();
              dssNode.focus();
              dssNode.click();
            });
            removeKeyboardEvent(dsNode);
            dsNode.addEventListener("input", () => void (dsNode.value = dsNode.value.replace(/[^-a-z0-9.*:\][]|^https?:\/\//gi, "").toLowerCase()));
            dsNode.addEventListener("focus", () => void dsNode.removeAttribute("class"));
            dsaNode.addEventListener("click", () => {
              const resDomain = dsNode.value.trim().toLowerCase();
              const domainRegex =
                /^(?=^.{3,255}$)(\*\.)?[a-z0-9][-a-z0-9]{0,62}(\.[a-z0-9][-a-z0-9]{0,62})+(:[0-9]{1,5})?$|^(?![0-9])(?!-)(?!.*--)[A-Za-z0-9-]{2,62}[a-zA-Z0-9](:[0-9]{1,5})?$|^\[(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?)|::([0-9a-fA-F]{1,4}:){0,6}([0-9a-fA-F]{1,4})?)\](:[0-9]{1,5})?$/;
              const exDomain = resDomain.replace(/:(80|443)$/g, "");
              if (!domainRegex.test(exDomain) || _temp_.includes(exDomain)) {
                dsNode.className = `${def.const.seed}_bdcr`;
                return;
              }
              if (tpNode) safeRemove(tpNode);
              exSiteLength++;
              const newNode = cE("li", { id: `${def.const.seed}_d_d_l_${exSiteLength - 1}`, class: `${def.const.seed}_gradient_bg` });
              const domainName = convertHtmlToText(exDomain);
              newNode.innerHTML =
                `<span>${exSiteLength > 9 ? exSiteLength : "0" + exSiteLength}. </span><span class="${def.const.seed}_domainlist" title="${domainName}">` +
                `${domainName}</span><span>[<a id="${def.const.seed}_d_d_l_s_${exSiteLength - 1}" data-fr-domain="${domainName}">${IS_CHN ? "删除" : "Del"}</a>]</span>`;
              append(ddNode, newNode);
              _temp_.push(exDomain);
              dsNode.value = "";
              ddNode.scrollTop = ddNode.scrollHeight;
            });
            dssNode.addEventListener("click", () => void searchTextAndSelect(dsNode, ddNode, "exsite", "li>:nth-child(2)"));
          }
          ddNode?.addEventListener("click", event => {
            const target = event.target;
            if (getNodeName(target) === "a" && target.id.startsWith(`${def.const.seed}_d_d_l_s_`)) {
              const _list_Id_ = Number(target.id.replace(`${def.const.seed}_d_d_l_s_`, ""));
              const nodeDomain = target.dataset.frDomain;
              if (typeof target.dataset.del === "undefined") {
                if (!_temp_.Remove(nodeDomain)) return;
                target.dataset.del = isNaN(_list_Id_) ? -1 : _list_Id_;
                target.textContent = IS_CHN ? "恢复" : "Reset";
                target.className = `${def.const.seed}_cdg`;
                target.parentNode.previousElementSibling.classList.add(`${def.const.seed}_list_reset`);
              } else {
                !_temp_.includes(nodeDomain) && _temp_.push(nodeDomain);
                delete target.dataset.del;
                target.textContent = IS_CHN ? "删除" : "Del";
                target.className = `${def.const.seed}_cb8`;
                target.parentNode.previousElementSibling.classList.remove(`${def.const.seed}_list_reset`);
              }
            }
          });
          if (await frDialog.respond()) {
            const exSiteData = uniq(_temp_.sort());
            saveData("_EXCLUDE_SITES_", exSiteData);
            const messageText = IS_CHN
              ? `<p class="${def.const.seed}_cdg">自定义排除网站数据已成功保存！</p><p>页面将在您确认后自动刷新。</p>`
              : `<p class="${def.const.seed}_cdg">Customized Exclusion Data Saved!</p><p>Page refreshes after confirming.</p>`;
            const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "自定义排除网站数据保存" : "Customized Exclusions Data Save"];
            let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            if (await successDialog.respond()) closeConfigurePage({ isReload: true });
            successDialog = null;
          }
          frDialog = null;
        }

        function handleErrors(report) {
          report.n?.classList.add(`${def.const.seed}_op1`);
          DEBUG("configure<errorCount>:", (report.c = report.e.length));
          report.c > 0 && reportErrorToAuthor(report.e, true);
        }

        function handleWindowResize(isZoom) {
          if (global.innerHeight <= (isZoom ? 786 : 719)) qA(`#${def.id.cSwitch},#${def.id.eSwitch}`, def.const.configIf).forEach(item => void item.click());
          return { e: def.array.exps, n: qS(`#${def.id.container}`, def.const.configIf), f: handleErrors };
        }

        function setConfigureListener() {
          qS(`.${def.class.title} span.${def.class.guide}`, def.const.configIf)?.addEventListener("click", () => void GMopenInTab(def.url.guideURI, false));
          qS(`#${def.id.render}`, def.const.configIf)?.addEventListener("dblclick", e => void (e.stopImmediatePropagation(), GMopenInTab(`${def.url.feedback}/42`, false)));
          qS(`#${def.id.field} #${def.const.seed}_scriptname`, def.const.configIf)?.addEventListener("dblclick", function (e) {
            e.stopImmediatePropagation();
            this.classList.add(`${def.const.seed}_usn`);
            hintUpdateInfo(def.url.guideURI, def.var.curVersion);
          });
        }

        function searchTextAndSelect(input, target, counter, searchStr) {
          const keyword = input?.value?.trim().replace(/([.*])/g, "\\$1");
          if (!keyword) return;
          const [keywordKey, searchCountKey] = [`${counter}Keyword`, `${counter}Search`];
          if (def.const[keywordKey] !== keyword) def.count[searchCountKey] = 0;
          def.const[keywordKey] = keyword;
          const reg = new RegExp(keyword, "i");
          const textNodes = qA(searchStr, target);
          let match, textNode;
          while (!match) {
            textNode = textNodes[def.count[searchCountKey]].firstChild;
            match = reg.exec(textNode.data);
            if (def.count[searchCountKey] >= textNodes.length - 1) {
              def.count[searchCountKey] = 0;
              break;
            } else def.count[searchCountKey]++;
          }
          if (match) {
            const range = document.createRange();
            range.selectNodeContents(textNode);
            if (global.getSelection) {
              const _sTxt = global.getSelection();
              _sTxt.removeAllRanges();
              _sTxt.addRange(range);
              const _sNode = _sTxt.anchorNode?.parentNode?.parentNode;
              const _rows = Number(_sNode?.id?.replace(`${def.const.seed}_d_d_l_`, ``)) || 0;
              const _clientHeight = Number(_sNode?.clientHeight) || 0;
              target.scrollTop = _rows * _clientHeight;
            }
            input.removeAttribute("class");
          } else input.className = `${def.const.seed}_bdcdo`;
        }

        function insertMenus(loading) {
          if (!IS_INTERNALSTYLE_ALLOWED) {
            const disabled_Menu = `\ufff1\u26d4 ${IS_CHN ? "因 CSP 限制，程序已停止运行。" : "𝑻𝒉𝒆 𝒔𝒄𝒓𝒊𝒑𝒕 𝒔𝒕𝒐𝒑𝒔 𝒓𝒖𝒏𝒏𝒊𝒏𝒈 𝒅𝒖𝒆 𝒕𝒐 𝑪𝑺𝑷."}`;
            const prompt_Msg = IS_CHN
              ? "发现 CSP 安全策略的阻止，请安装 “𝗔𝗹𝗹𝗼𝘄 𝗖𝗦𝗣: 𝗖𝗼𝗻𝘁𝗲𝗻𝘁-𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆-𝗣𝗼𝗹𝗶𝗰𝘆” 等类型的浏览器扩展来尝试获取相应权限。点击「确定」将会自动复制扩展名称到您的剪切板。"
              : "Due to CSP, Please install an extension such as '𝗔𝗹𝗹𝗼𝘄 𝗖𝗦𝗣: 𝗖𝗼𝗻𝘁𝗲𝗻𝘁-𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆-𝗣𝗼𝗹𝗶𝗰𝘆' to try to get the permissions. Clicking \"OK\" will copy the extension name to your clipboard.";
            loading ? GMunregisterMenuCommand(loading) : DEBUG("%cNo Loading_Menu", "color:#a9a9a9");
            return GMregisterMenuCommand(disabled_Menu, () => {
              const extName = prompt(prompt_Msg, "Allow CSP: Content-Security-Policy");
              if (extName) GMsetClipboard(extName);
            });
          }
          sleep(1e3, { useCachedSetTimeout: true })(2e3)
            .then(async timeout => {
              const { status, time } = await isFontReady(timeout);
              DEBUG("isFontReady:", { status, delay: `${parseInt(time)}ms` });
              loading ? GMunregisterMenuCommand(loading) : DEBUG("%cNo Loading_Menu", "color:#a9a9a9");
            })
            .then(() => {
              if (typeof exSitesIndex === "undefined") {
                const font_Set_Menu = `\ufff1\ud83c\udf13 ${IS_CHN ? "字体渲染设置" : "Font Rendering Settings "}${isHotkey ? "(P)" : ""}`;
                font_Set ? GMunregisterMenuCommand(font_Set) : DEBUG("%cInstalling Font_Set_Menu", "color:#808080");
                font_Set = GMregisterMenuCommand(font_Set_Menu, addAction.openSettings);
                const exclude_Site_Menu = `\ufff2\u26d4 ${IS_CHN ? "排除渲染" : "Exclude "} ${TOP_HOST} ${isHotkey ? "(X)" : ""}`;
                exclude_Site ? GMunregisterMenuCommand(exclude_Site) : DEBUG("%cInstalling Exclude_Site_Menu", "color:#808080");
                exclude_Site = GMregisterMenuCommand(exclude_Site_Menu, addAction.setExcludeSites);
                const parameter_Set_Menu = `\ufff3\ud83d\udc8e ${IS_CHN ? "高级核心功能设置" : "Advanced Core Settings "}${isHotkey ? "(G)" : ""}`;
                parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:#808080");
                parameter_Set = GMregisterMenuCommand(parameter_Set_Menu, addAction.setVipConfigure);
              } else {
                const include_Site_Menu = `\ufff4\ud83c\udf40 ${IS_CHN ? "重新渲染" : "Re-rendering "} ${TOP_HOST} ${isHotkey ? "(X)" : ""}`;
                include_Site ? GMunregisterMenuCommand(include_Site) : DEBUG("%cInstalling Include_Site_Menu", "color:#808080");
                include_Site = GMregisterMenuCommand(include_Site_Menu, addAction.setIncludeSites);
                const feed_Back_Menu = `\ufff5\ud83e\udde1 ${IS_CHN ? "向作者反馈错误或建议" : "Feedback to Author "}${isHotkey ? "(T)" : ""}`;
                feed_Back ? GMunregisterMenuCommand(feed_Back) : DEBUG("%cInstalling Feed_Back_Menu", "color:#808080");
                feed_Back = GMregisterMenuCommand(feed_Back_Menu, () => void GMopenInTab(def.url.feedback, false));
              }
            })
            .catch(e => void ERROR("MenusInsert:", e.message));
        }

        function insertHotkey() {
          if (!IS_INTERNALSTYLE_ALLOWED) return;
          sleep(2e3, { useCachedSetTimeout: true })
            .then(() => {
              if (!isHotkey) return DEBUG("%cNo Hotkey_Setting", "color:#a9a9a9");
              document.addEventListener("keydown", event => void (event.code === "AltRight" && (def.var.AltGraph = true)));
              document.addEventListener("keyup", event => void (event.code === "AltRight" && delete def.var.AltGraph));
              return !DEBUG("%cInstalling Hotkey_Setting", "color:#808080");
            })
            .then(isDeployed => {
              if (!isDeployed) return;
              document.addEventListener("keydown", e => {
                const normalSite = typeof exSitesIndex === "undefined";
                const ekey = (e.altKey || def.var.AltGraph === true) && !e.ctrlKey && !e.shiftKey && !e.metaKey;
                if (e.code === "KeyP" && ekey) handleClickEvent(normalSite ? "openSettings" : "setIncludeSites", 1e3, e);
                if (e.code === "KeyX" && ekey) handleClickEvent(normalSite ? "setExcludeSites" : "setIncludeSites", 1e3, e);
                if (e.code === "KeyG" && ekey) handleClickEvent(normalSite ? "setVipConfigure" : "setIncludeSites", 1e3, e);
                if (e.code === "KeyT" && ekey) handleClickEvent("feedbck", 1e4, e);
              });
            });

          function handleClickEvent(name, time, event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            if (Date.now() - def.count.clickTimer > time) {
              def.count.clickTimer = Date.now();
              addAction[name]();
            }
          }
        }

        async function manageDomainsList() {
          let [_temp_ = [], listContents = "", domains, domainValues, domainValueIndex] = [];
          try {
            domains = await GMgetValue("_DOMAINS_FONTS_SET_");
            try {
              domainValues = domains ? [...rawJSON.parse(decrypt(domains))] : [];
            } catch (e) {
              ERROR("DomainValues.JSON.parse:", e.message);
              domainValues = [];
            }
            const searchBtn = IS_CHN ? "查 询" : "Search";
            const clearBtn = IS_CHN ? "清 除" : "Clear";
            const delBtn = IS_CHN ? "删除" : "Del";
            const searchBtnLabel = `<p class="${def.const.seed}_list_p"><input id="${def.const.seed}_d_s_"><button id="${def.const.seed}_d_s_s_">${searchBtn}</button><button id="${def.const.seed}_d_s_c_">${clearBtn}</button></p>`;
            const searchBtnHTML = domainValues.length > 6 ? searchBtnLabel : ``;
            for (let i = 0, l = domainValues.length; i < l; i++) {
              const domainName = convertHtmlToText(domainValues[i].domain);
              const number = i + 1 > 9 ? i + 1 : "0" + (i + 1);
              const _fontData_ = new Date(domainValues[i].fontDate);
              const date = setDateFormat("yyyy-MM-dd", _fontData_);
              listContents += `<li id="${def.const.seed}_d_d_l_${i}"><span>[<a id="${def.const.seed}_d_d_l_s_${i}">${delBtn}</a>]<span> ${number}.</span></span><span class="${def.const.seed}_customdomain" title="${domainName}">${domainName}</span><span class="${def.const.seed}_m05" title="${_fontData_}">${date}</span></li>`;
            }
            const titleText = IS_CHN ? "网站个性化设置数据列表" : "Customized Sites Data";
            const noticeText = IS_CHN ? "请谨慎操作，保存后生效，已删除的数据将不可恢复！" : "Operate with caution, effective after saving, good luck!";
            const messageText = `<p class="${def.const.seed}_cb8 ${def.const.seed}_f14 ${def.const.seed}_ti6">${noticeText}</p>${searchBtnHTML}<ul id="${def.const.seed}_d_d_">${listContents}</ul>`;
            const [trueButtonText, neutralButtonText] = [IS_CHN ? "确认操作，保存数据" : "Save", IS_CHN ? "取 消" : "Cancel"];
            let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            const dsNode = qS(`#${def.const.seed}_d_s_`, def.const.dialogIf);
            const dscNode = qS(`#${def.const.seed}_d_s_c_`, def.const.dialogIf);
            const dssNode = qS(`#${def.const.seed}_d_s_s_`, def.const.dialogIf);
            const ddNode = qS(`#${def.const.seed}_d_d_`, def.const.dialogIf);
            if (ddNode && dsNode && dscNode && dssNode) {
              dsNode.addEventListener("keydown", e => {
                if (e.key !== "Enter") return;
                e.preventDefault();
                dssNode.focus();
                dssNode.click();
              });
              removeKeyboardEvent(dsNode);
              dsNode.addEventListener("focus", () => void dsNode.removeAttribute("class"));
              dsNode.addEventListener("input", () => void (dsNode.value = dsNode.value.replace(/[^-a-z0-9.]/gi, "").toLowerCase()));
              dscNode.addEventListener("click", () => {
                dsNode.value = "";
                dsNode.removeAttribute("class");
                ddNode.scrollTop = 0;
                dsNode.focus();
              });
              dssNode.addEventListener("click", () => void searchTextAndSelect(dsNode, ddNode, "domain", "li>:nth-child(2)"));
            }
            ddNode?.addEventListener("click", event => {
              const target = event.target;
              if (getNodeName(target) === "a" && target.id.startsWith(`${def.const.seed}_d_d_l_s_`)) {
                if (typeof target.dataset.del === "undefined") {
                  const _list_Id_ = Number(target.id.replace(`${def.const.seed}_d_d_l_s_`, ""));
                  const _listId = isNaN(_list_Id_) ? -1 : _list_Id_;
                  _temp_.push(domainValues[_listId].domain);
                  target.dataset.del = domainValues[_listId].domain;
                  target.textContent = IS_CHN ? "恢复" : "Reset";
                  target.className = `${def.const.seed}_cdg`;
                  target.parentNode.nextElementSibling.classList.add(`${def.const.seed}_list_reset`);
                  target.parentNode.nextElementSibling.nextElementSibling.classList.add(`${def.const.seed}_list_reset`);
                } else if (_temp_.Remove(target.dataset.del)) {
                  delete target.dataset.del;
                  target.textContent = IS_CHN ? "删除" : "Del";
                  target.className = `${def.const.seed}_cb8`;
                  target.parentNode.nextElementSibling.classList.remove(`${def.const.seed}_list_reset`);
                  target.parentNode.nextElementSibling.nextElementSibling.classList.remove(`${def.const.seed}_list_reset`);
                }
              }
            });
            if (await frDialog.respond()) {
              let isCurrentSite = false;
              domains = await GMgetValue("_DOMAINS_FONTS_SET_");
              try {
                domainValues = domains ? [...rawJSON.parse(decrypt(domains))] : [];
              } catch (e) {
                ERROR("DomainValues.JSON.parse:", e.message);
                domainValues = [];
              }
              for (let l = _temp_.length - 1; l >= 0; l--) {
                domainValueIndex = updateDomainsIndex(domainValues, _temp_[l]);
                typeof domainValueIndex !== "undefined" && domainValues.splice(domainValueIndex, 1);
                if (_temp_[l] === CUR_HOST) isCurrentSite = true;
              }
              saveData("_DOMAINS_FONTS_SET_", domainValues);
              const changedText = IS_CHN ? "当前网站数据有变动，页面将在您确认后自动刷新。" : "Current site data changed, and refreshes soon.";
              const nochangedText = IS_CHN ? "提示：您可继续留在当前页面进行其他操作。" : "Tip: You can continue with other operations.";
              const changeNotice = isCurrentSite ? changedText : nochangedText;
              const messageText = `<p class="${def.const.seed}_cdg">${IS_CHN ? "网站个性化设置数据已成功保存！" : "Customize data save succeeded!"}</p><p>${changeNotice}</p>`;
              const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "个性化数据保存" : "Customize Data Save"];
              let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
              if (await successDialog.respond()) isCurrentSite && closeConfigurePage({ isReload: true });
              successDialog = null;
            }
            frDialog = null;
          } catch (e) {
            ERROR("ManageDomainsList:", e.message);
            def.array.exps.push(`[manageDomainsList]: ${e}`);
            reportErrorToAuthor(def.array.exps);
          }
        }

        /* FONT_LIST_GENERATION_AND_SELECTION */

        function fontSet({ expr, fontData }) {
          if (!expr || typeof expr !== "string" || !Array.isArray(fontData)) return;
          return {
            fdeleteList: deleteFontSelectList,
            fresetList: resetFontSelectList,
            fsearchList: getFontSearchList,
            fsearch: fontSearch,
          };

          function fontListShown(expr, shown = true) {
            qA(expr, def.const.configIf).forEach(item => void (shown ? item.classList.add(`${def.const.seed}_block`) : item.classList.remove(`${def.const.seed}_block`)));
          }

          function closeFontSelected(item) {
            ddRemove(item.parentNode);
            const value = item.parentNode.children[1].value;
            const sort = Number(item.parentNode.children[1].attributes.sort.value) || -1;
            const text = item.parentNode.children[0].textContent;
            fontData.push({ ch: text, en: value, sort: sort });
            fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
            if (!submitButton) return;
            if (qA(`#${def.id.fontList} .${def.class.close}`, def.const.configIf).length === 0) {
              def.array.values.Remove(def.id.fontName);
              if (def.array.values.length === 0) {
                submitButton.classList.contains(def.class.anim) && submitButton.classList.remove(def.class.anim);
                isPreview && restoreSaveButton(submitButton, def.array.values);
              } else if (isPreview) changePreviewButtonStyle(submitButton, def.array.values);
              const selector = qS(`#${def.id.selector}`, def.const.configIf);
              selector.classList.remove(`${def.const.seed}_block`);
              const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
              const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
              void (async function (isFaced) {
                if (!isFaced) return;
                const fontCheckList = await getMergedFontCheckList();
                for (let i = 0, l = fontCheckList.length; i < l; i++) {
                  if (fontCheckList[i].en === selectedFont || convertToUnicode(fontCheckList[i].ch) === selectedFont) {
                    def.var.curFont = fontCheckList[i].ch;
                    break;
                  }
                }
                inputFont.setAttribute("placeholder", `${def.var.fontNamePh}${def.var.curFont}`);
              })(ffaceT.checked);
            } else if (isPreview) changePreviewButtonStyle(submitButton, def.array.values);
          }

          function deleteFontSelectList() {
            const closeNodes = qA(`#${def.id.fontList} .${def.class.close}`, def.const.configIf);
            closeNodes.forEach(item => void closeFontSelected(item, fontData));
          }

          function resetFontSelectList() {
            deleteFontSelectList(fontData);
            const fontlistSelectorNode = qS(`#${def.id.fontList} .${def.class.selector}`, def.const.configIf);
            const resetDefaultFont = INITIAL_VALUES.fontSelect.replace(/'|"/g, "");
            const resetFontCHN = IS_REAL_WEBKIT || (!IS_CHEAT_UA && platform === "MacOS") ? "\u82f9\u65b9\u002d\u7b80" : "\u5fae\u8f6f\u96c5\u9ed1";
            const fontlistSelectorHTML = `<a class="${def.class.label}"><span class="${def.const.seed}_blr" style="font-family:${INITIAL_VALUES.fontSelect}!important">${resetFontCHN}</span><input type="hidden" name="${def.id.fontName}" sort="0" value="${resetDefaultFont}"/><span class="${def.class.close} ${def.const.seed}_cp ${def.const.seed}_brr" style="font-family:sans-serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
            fontlistSelectorNode.insertAdjacentHTML("beforeend", tTP.createHTML(fontlistSelectorHTML));
            fontlistSelectorNode.parentNode.classList.add(`${def.const.seed}_block`);
            fontData = fontData.filter(item => item.en !== resetDefaultFont);
            !def.array.values.includes(def.id.fontName) && def.array.values.push(def.id.fontName);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
            isPreview && submitButton && changePreviewButtonStyle(submitButton, def.array.values);
            const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.const.configIf);
            if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
            const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="0"]~.${def.class.close}`, def.const.configIf);
            if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
          }

          function getFontSearchList(name) {
            const nodeArray = asArray(qA(`#${def.id.selector} .${def.class.selector} input[name="${name}"]`, def.const.configIf), item => item.value);
            return uniq(nodeArray);
          }

          function fontSearch() {
            const btnNodesHTML = IS_CHN
              ? `<span class="${def.class.spanlabel}">已选择字体：<span id="${def.id.cleaner}">[清空]</span></span>`
              : `<span class="${def.class.spanlabel}">Selected Fonts: <span id="${def.id.cleaner}">[Clear]</span></span>`;
            const selectFontTipHTML = IS_CHN
              ? `<p><strong>温馨提示 </strong>脚本预载了常用的中文字体，下拉菜单中所罗列的字体是在代码字体表中您已安装过的字体，没有安装过则不会显示。</p>
                  <p><em class="${def.const.seed}_cb8">（注一）</em>如果没有重新选择字体，则使用上一次保存的字体。首次使用默认为${INITIAL_VALUES.fontSelect}字体。</p>
                  <p><em class="${def.const.seed}_cb8">（注二）</em>输入框可输入关键字进行搜索，支持中文和英文字体名。</p>
                  <p><em class="${def.const.seed}_cb8">（注三）</em>字体是按您选择的先后顺序进行优先渲染的，所以多选不如只选一个您最想要的。</p>
                  <p><em class="${def.const.seed}_cb8">（注四）</em>如果“字体重写”被关闭，那么本功能将自动禁用，网页字体将采用“网站默认”的字体设置。</p>
                  <p><em class="${def.const.seed}_cb8">（注五）</em>双击 \ud83d\udd14 可以打开自定义字体的添加工具，以使用更多新字体。</p>`
              : `<p><strong>Tips: </strong>The fonts shown in the list are the fonts were installed on your system in font-library. No install & add-lib, No display.</p>
                  <p><em class="${def.const.seed}_cb8">(ACT1)</em> If this option is not reselected, the last saved is used. Default by ${INITIAL_VALUES.fontSelect}.</p>
                  <p><em class="${def.const.seed}_cb8">(ACT2)</em> Enter keywords in the inputbox to quickly search for your favorite fonts.</p>
                  <p><em class="${def.const.seed}_cb8">(ACT3)</em> Fonts are rendered first in the order you choose, so just pick the one you want the most.</p>
                  <p><em class="${def.const.seed}_cb8">(ACT4)</em> If "Font Rewrite" is turned off, this option will be disabled and the webpage will use "website-defined font".</p>
                  <p><em class="${def.const.seed}_cb8">(ACT5)</em> Double-click \ud83d\udd14 to open the custom font-library adding tool to use more custom fonts.</p>`;
            const fHtml = String(
              `<div id="${def.id.selector}">
                ${btnNodesHTML}
                <div class="${def.class.selector}"></div>
              </div>
              <div class="${def.class.selectFontId}">
                <span class="${def.class.spanlabel}">${IS_CHN ? "设置字体，请选择：" : "Set Fonts, Please Select:"}</span>
                <input type="search" placeholder="${IS_CHN ? "输入关键字可检索字体" : "Enter some keywords"}" autocomplete="off" class="${def.class.placeholder}">
                <dl></dl>
                <span class="${def.class.tooltip} ${def.class.ps1}" id="${def.id.fonttooltip}">
                  <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Hold down for help"}">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps2}">
                  ${selectFontTipHTML}
                  </span>
                </span>
              </div>`
            );
            const fontListNode = qS(expr, def.const.configIf);
            const selectorNode = qS(`#${def.id.selector}`, def.const.configIf);
            if (!selectorNode && fontListNode) {
              fontListNode.innerHTML = tTP.createHTML(fHtml);
              qS(`#${def.id.selector}`, def.const.configIf).classList.remove(`${def.const.seed}_block`);
            }
            const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
            const fselectorT = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
            if (ffaceT && fselectorT) {
              removeKeyboardEvent(fselectorT);
              changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly);
              ffaceT.addEventListener("change", () => void changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly));
              fselectorT.addEventListener("input", () => void searchEvents(fselectorT.value));
              fselectorT.addEventListener("click", selectorEvent);
            }

            function selectorEvent(event) {
              const _this = this ?? event.target;
              if (_this.value.length === 0) {
                const selector = `#${def.id.fontList} .${def.class.selectFontId} dl`;
                const selectFontNode = qS(selector, def.const.configIf);
                fontListShown(selector);
                if (selectFontNode) {
                  if (fontData.length === 0) {
                    selectFontNode.innerHTML = tTP.createHTML(`<dd>${IS_CHN ? "\u6570\u636e\u6e90\u6682\u65e0\u6570\u636e" : "Not Available!"}</dd>`);
                  } else {
                    selectFontNode.textContent = "";
                    fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                    fontData.forEach(item => {
                      const nodeContent = `<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`;
                      selectFontNode.insertAdjacentHTML("beforeend", tTP.createHTML(nodeContent));
                    });
                  }
                }
                clickEvents();
              } else searchEvents(_this.value);
              event.stopPropagation();
            }

            function changeSelectorStatus(inputCheckedStatus, target, cssName) {
              if (!target) return;
              if (inputCheckedStatus) {
                target.removeAttribute("disabled");
                target.classList.remove(cssName);
              } else {
                deleteFontSelectList(fontData);
                target.setAttribute("disabled", "disabled");
                target.classList.add(cssName);
              }
            }

            function selectorHidden() {
              document.removeEventListener("click", selectorHidden);
              fontListShown(`#${def.id.fontList} .${def.class.selectFontId} dl`, false);
              const selectorInput = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
              if (selectorInput) selectorInput.value = "";
            }

            function searchEvents(searchText) {
              const selector = `#${def.id.fontList} .${def.class.selectFontId} dl`;
              const selectFontNode = qS(selector, def.const.configIf);
              fontListShown(selector, false);
              if (fontData.length > 0 && selectFontNode) {
                fontListShown(selector);
                const sText = searchText.replace(/[.:?*+^$[\-=\](){}\\/|]/g, "\\$1");
                const sRegExp = new RegExp(sText, "i");
                let sMatched = false;
                selectFontNode.textContent = "";
                fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                fontData.forEach(item => {
                  if (!sRegExp.test(item.ch) && !sRegExp.test(item.en)) return;
                  sMatched = true;
                  const nodeHTML = tTP.createHTML(`<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`);
                  selectFontNode.insertAdjacentHTML("beforeend", nodeHTML);
                });
                if (!sMatched) selectFontNode.innerHTML = tTP.createHTML(`<dd>${IS_CHN ? "\u6682\u65e0\u60a8\u641c\u7d22\u7684\u5b57\u4f53" : "No Matching Fonts"}</dd>`);
                clickEvents();
              }
            }

            function clickEvents() {
              const selectFontNodes = qA(`#${def.id.fontList} .${def.class.selectFontId} dl dd`, def.const.configIf);
              const selector = qS(`#${def.id.fontList} .${def.class.selector}`, def.const.configIf);
              selectFontNodes.forEach(item => void (item.onclick = parseClick));
              document.addEventListener("click", selectorHidden);

              function parseClick(event) {
                const _this = this ?? event.target;
                const value = _this.attributes.value?.value;
                const sort = _this.attributes.sort?.value;
                if (value && sort && selector) {
                  const nodeHTML = `<a class="${def.class.label}"><span class="${def.const.seed}_blr" style="font-family:'${value}'!important">${_this.textContent}</span><input type="hidden" name="${def.id.fontName}" sort="${sort}" value="${value}"/><span class="${def.class.close} ${def.const.seed}_cp ${def.const.seed}_brr" style="font-family:Times,monospace!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
                  selector.insertAdjacentHTML("beforeend", tTP.createHTML(nodeHTML));
                  selector.parentNode.classList.add(`${def.const.seed}_block`);
                  fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                  fontData = fontData.filter(item => item.en !== value);
                  const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.const.configIf);
                  if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
                  const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="${sort}"]~.${def.class.close}`, def.const.configIf);
                  if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
                  const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
                  if (submitButton) {
                    !def.array.values.includes(def.id.fontName) && def.array.values.push(def.id.fontName);
                    !submitButton.classList.contains(def.class.anim) && submitButton.classList.add(def.class.anim);
                    isPreview && changePreviewButtonStyle(submitButton, def.array.values);
                  }
                }
                selectorHidden();
                event.stopPropagation();
              }
            }
          }

          function ddRemove(item) {
            if (!item) return;
            safeRemove(item);
            const temp = item.nextElementSibling;
            if (getNodeName(temp) === "dd") ddRemove(temp);
          }
        }

        async function funcFontface(fontName) {
          const postscriptName = await matchByPostScriptName(fontName);
          const fontList = getFontOverrideData(fontOverrideDefData);
          let returnFontface = "";
          for (let i = 0; i < fontList.length; i++) {
            if (fontList[i] !== fontName) returnFontface += `@font-face{font-family:"${fontList[i]}";src:local("${postscriptName}");}`;
          }
          return returnFontface;
        }

        function funcFontsize(scale) {
          const GeckoCssText = `transform:scale(var(--fr-font-fontscale));transform-origin:0 0;width:${100 / scale}%;height:${100 / scale}%;`;
          const WebKitCssText = `zoom:var(--fr-font-fontscale)!important;`;
          return CUR_WINDOW_TOP || IS_BLINK_BELOW_128 ? `${globalPrefix}body{${IS_REAL_GECKO ? GeckoCssText : WebKitCssText}}` : ``;
        }

        function overlayColor(size, color) {
          if (size <= 0 || size > 4 || !color) return "revert";
          return color.substring(1) !== "FFFFFFFF" ? `0 0 ${size}px ${color}` : `0 0 ${size}px currentcolor`;
        }

        async function correctFontScaleOffset() {
          if (!IS_INTERNALSTYLE_ALLOWED || !isFontsize || def.var.curScale === 1 || (!CUR_WINDOW_TOP && IS_BLINK_ABOVE_128)) return;
          try {
            const predefinedSitesProps = await getFontScaleDef();
            const currentDomainProps = Object.entries(predefinedSitesProps).Find(([domain]) => CUR_HOST_NAME.endsWith(domain))?.[1];
            if (!currentDomainProps) throw new Error("No extra properties");
            const { Window: W, Element: E, HTMLElement: H } = currentDomainProps;
            def.array.props = { window: uniq(W), element: uniq(E), html: uniq(H) };
          } catch (e) {
            DEBUG(`correctFontScaleOffset${IS_IN_FRAMES}:\r\n%c${e.message} for ${CUR_HOST_NAME}`, "display:block;padding-left:18px;color:#808080");
          }
          adjustCoordinateOffset({ cur: def.var.curScale, props: def.array.props });
        }

        function funcCodefont(text, isOverride) {
          if (!isCustomMono) return "";
          let customMonoRules = [];
          const pre = text.search(/\bpre\b/gi) !== -1 ? ["pre", "pre *"] : [];
          const code = text.search(/\bcode\b/gi) !== -1 ? ["code", "code *"] : [];
          const codeStyle = [".monaco-editor *", ".cm-editor [class*='cm-'] *", ".code", ".code *"];
          const siterules = ["@github.com##.blob-num,.blob-num *,.blob-code,.blob-code *,textarea,.react-line-numbers *,.react-code-lines *", ...monoSiteRules];
          const regexp = /@([\w[\]\-.:]+)##((?![^@]+##)[\w\-*.#:+>()~[\]=^$|,' ]+)/;
          siterules.forEach(siterule => {
            const rule = regexp.exec(siterule);
            if (CUR_HOST.endsWith(rule[1])) customMonoRules.push(...rule[2].split(","));
          });
          const codeSelectors = uniq(pre.concat(code, codeStyle, customMonoRules)).join();
          const baseFont = isOverride ? "var(--fr-font-family),ui-monospace,monospace,var(--fr-font-basefont)" : "ui-monospace,monospace,var(--fr-font-basefont)";
          return `${globalPrefix}:is(${codeSelectors}):not([class*='icon' i]){-webkit-text-stroke:var(--fr-no-stroke)!important;text-shadow:var(--fr-mono-shadow)!important;font-family:var(--fr-mono-font),${baseFont}!important;font-feature-settings:var(--fr-mono-feature)!important;-webkit-user-select:text!important;user-select:text!important}${globalPrefix}:is(${codeSelectors})::selection{color:#fff!important;background:rgba(254, 115, 0, 0.93)!important;-webkit-text-stroke-width:0!important;text-shadow:1px 1px 1px rgba(76, 76, 76, 0.9)!important}`;
        }

        function insertMainStyleElement({ overwrite, isNotify = true } = {}) {
          if (!IS_INTERNALSTYLE_ALLOWED) return;
          const styleNode = getMainStyleElements({ currentScope: true });
          if (!overwrite && styleNode) return;
          const insertResult = insertStyle({
            target: document.head,
            id: styleNode?.id ?? def.id.rndStyle,
            cssText: styleNode?.textContent ?? tStyle,
            overwrite: Boolean(overwrite),
          });
          insertResult && isNotify && COUNT(`[INSERTSTYLE]${IS_IN_FRAMES}[i:${def.id.rndStyle}]`);
          return insertResult;
        }

        function changeNodeClass(comparison, targetNode, className) {
          comparison ? targetNode?.classList.add(className) : targetNode?.classList.remove(className);
        }

        async function operateConfigure() {
          if (!CUR_WINDOW_TOP) return;
          try {
            // set fontData with cache expires
            const fontData = await detectFontData();
            def.var.fontSet = fontSet({ expr: `#${def.id.fontList} .${def.class.fontList}`, fontData });
            // Fonts selection
            fontSelectionAndCustomFonts(def.var.fontSet);
            // selector placeholder style
            const ffaceT = qS(`#${def.id.fface}`, def.const.configIf);
            const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
            await getAndMonitorCurrentFont(ffaceT, inputFont, defaultFont);
            // Fonts Face
            setFontOverrideDefTrigger(fontOverrideDefData);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
            saveChangeStatus(ffaceT, CONST_VALUES.fontFace, submitButton, def.array.values);
            // Font Smooth
            const smoothT = qS(`#${def.id.smooth}`, def.const.configIf);
            saveChangeStatus(smoothT, CONST_VALUES.fontSmooth, submitButton, def.array.values);
            // FontSize Scale
            const fontScaleT = qS(`#${def.id.fontScale}`, def.const.configIf);
            const drawScale = getFontSizeScale(fontScaleT, submitButton) ?? {};
            removeKeyboardEvent(fontScaleT);
            // Fix Viewport
            const fixViewportT = getFixViewportBool(fontScaleT, submitButton) ?? {};
            // Fonts stroke
            const strokeT = qS(`#${def.id.strokeSize}`, def.const.configIf);
            const drawStrock = getFontsStroke(strokeT, submitButton);
            removeKeyboardEvent(strokeT);
            // Fix Fonts stroke
            const { fixStrokeT, fixShadowT, lazyloadT } = getFixStrokeBool(strokeT, submitButton) ?? {};
            // Fonts shadow
            const shadowsT = qS(`#${def.id.shadowSize}`, def.const.configIf);
            const shadowColorNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
            const drawShadow = getFontShadow(shadowsT, shadowColorNode, submitButton);
            removeKeyboardEvent(shadowsT);
            // Fonts shadow color selection
            const colorshowT = qS(`#${def.id.color}`, def.const.configIf);
            const colorReg = /^#[0-9A-F]{8}$|^currentcolor$/i;
            const colorPickerT = getColorAndColorPicker(colorshowT, submitButton);
            removeKeyboardEvent(colorshowT);
            // Double-click allows to edit
            const fontCssT = qS(`#${def.id.cssinclued}`, def.const.configIf);
            const fontExT = qS(`#${def.id.cssexclude}`, def.const.configIf);
            removeKeyboardEvent(fontCssT);
            doubleClickToEdit(fontCssT);
            removeKeyboardEvent(fontExT);
            saveChangeStatus(fontCssT, CONST_VALUES.fontCSS, submitButton, def.array.values);
            saveChangeStatus(fontExT, CONST_VALUES.fontEx, submitButton, def.array.values);
            // Expand & Collapse
            expandOrCollapse(qS(`#${def.id.cSwitch}`, def.const.configIf), fontCssT, qS(`#${def.id.fontCss}`, def.const.configIf));
            expandOrCollapse(qS(`#${def.id.eSwitch}`, def.const.configIf), fontExT, qS(`#${def.id.fontEx}`, def.const.configIf));
            // Customized monospaced fontlist
            const customMonoNode = qS(`#${def.id.mono}`, def.const.configIf);
            customMonospceFont(customMonoNode);
            // Reset Button control
            const resetButtonNode = qS(`#${def.id.submit} .${def.class.reset}`, def.const.configIf);
            const preSet = { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT };
            const submitSet = { ...preSet, shadowsT, colorshowT, colorReg, fontCssT, fontExT, colorPickerT };
            controlResetButton(resetButtonNode, def.var.fontSet, submitSet, { drawScale, drawStrock, drawShadow, submitButton });
            // Submit Button control
            const submitButtonNode = qS(`#${def.id.submit} .${def.class.submit}`, def.const.configIf);
            controlSubmitButton(submitButtonNode, def.var.fontSet, submitSet);
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
                DEBUG("%cLoad fontData from Cache", "color:#008000;font-weight:700");
                FontCheckList = cache_FontCheckList;
              } else {
                DEBUG("%cStart real-time font detection", "color:#dc143c;font-weight:700");
                FontCheckList = await fontCheck_DetectOnce();
                cache.set("_FONTCHECKLIST_", uniq(FontCheckList), 2592e6);
              }
              return uniq(FontCheckList);
            } catch (e) {
              ERROR("FontCheckList with cache:", e.message);
              cache.remove("_FONTCHECKLIST_");
              return [];
            }
          }

          function fontSelectionAndCustomFonts(fontSet) {
            try {
              const fontlistNode = qS(`#${def.id.fontList} .${def.class.fontList}`, def.const.configIf);
              if (!fontlistNode) return;
              fontSet?.fsearch();
              const tooltipNode = qS(`#${def.id.fonttooltip}`, def.const.configIf);
              tooltipNode?.addEventListener("dblclick", async e => {
                e.stopImmediatePropagation();
                let [savedFontListString = "", cusFontCheck = []] = [];
                const cusFontList = await GMgetValue("_CUSTOM_FONTLIST_");
                try {
                  cusFontCheck = cusFontList ? [...rawJSON.parse(decrypt(cusFontList))] : [];
                } catch (e) {
                  ERROR("CusFontCheck.JSON.parse:", e.message);
                }
                cusFontCheck.forEach(item => {
                  item.sort && delete item.sort;
                  savedFontListString += rawJSON.stringify(item) + "\r\n";
                });
                const messageText = IS_CHN
                  ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">以下文本域可按预定格式增加自定义字体。请用小贴士或按样例填写，输入有误将被自动过滤。与『<a href="${def.url.guideURI}#既定的字体表" title="查看内置字体表" target="_blank">内置字体表</a>』重复的字体将被自动剔除。【功能小贴士：<span id="${def.const.seed}_addTools" title="点击开启工具" class="${def.const.seed}_ccr ${def.const.seed}_cp">字体添加辅助工具</span>】</p><p><textarea id="${def.const.seed}_custom_Fontlist" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下：\r\n{ "ch":"中文字体名一","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"中文字体名二","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(注一：如无中文字体名，可用英文或其他语言名称替代)\r\n(注二：“ps:” 该项为字体的PostScript名称，可选填写)'>${savedFontListString}</textarea></p><p id="${def.const.seed}_warning_chn">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p>`
                  : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">Add custom fonts in a predefined format. Please use tips or fill in the examples. Incorrect entries will be filtered. The fonts that duplicate '<a href="${def.url.guideURI}#built-in-font-library" title="Viewing the built-in font library" Target="_blank">the Built-in Font library</a>' will be automatically deleted. (𝐓𝐈𝐏: <span id="${def.const.seed}_addTools" title="Click to open the aid tool" class="${def.const.seed}_ccr ${def.const.seed}_cp">𝐅𝐨𝐧𝐭 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀𝐢𝐝</span>)</p><p><textarea id="${def.const.seed}_custom_Fontlist" placeholder='One set of Fontname data per line, as follow:\r\n{ "ch":"CHN Fontname 1","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"CHN Fontname 2","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(Note1: If no Chinese fontname, use another instead) \r\n (Note2: "ps:" for the font PostScript name, optional)'>${savedFontListString}</textarea></p><p id="${def.const.seed}_warning_en">(Don't add too many custom fonts to avoid slowly load)</p>`;
                const [trueButtonText, falseButtonText] = [IS_CHN ? "保 存" : "Save", IS_CHN ? "帮助文档" : "Help"];
                const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义字体表" : "Custom Font Library"];
                let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                const customFontlistNode = qS(`#${def.const.seed}_custom_Fontlist`, def.const.dialogIf);
                removeKeyboardEvent(customFontlistNode);
                let custom_Fontlist = customFontlistNode?.value.trim() ?? "";
                qS(`#${def.const.seed}_addTools`, def.const.dialogIf)?.addEventListener("click", () => {
                  const chNameText = IS_CHN
                    ? `请输入「中文字体家族名称」：\r\n(例如：鸿蒙黑体，仅支持半角输入模式，包括中文、日文、韩文、英文，数字、小数点、减号、下划线、空格、@)\r\n(如没有中文字体名称，可使用英文或其他语言名称来替代)`
                    : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 '𝐂𝐡𝐢𝐧𝐞𝐬𝐞 𝐅𝐨𝐧𝐭 𝐍𝐚𝐦𝐞':\r\n(e.g. 鸿蒙黑体, only half-width input mode is supported, including Chinese, Japanese, Korean, English, numbers, decimal point, minus sign, underscore, space, @)\r\n(𝐈𝐟 𝐧𝐨 𝐂𝐡𝐢𝐧𝐞𝐬𝐞 𝐟𝐨𝐧𝐭𝐧𝐚𝐦𝐞, 𝐮𝐬𝐞 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐨𝐫 𝐚𝐧𝐨𝐭𝐡𝐞𝐫 𝐢𝐧𝐬𝐭𝐞𝐚𝐝)`;
                  const enNameText = IS_CHN
                    ? `请输入「英文字体家族名称」：\r\n(例如：HarmonyOS Sans SC，仅支持半角输入模式，包括英文、数字、小数点、减号、下划线、空格、@)\r\n(如没有英文字体名称，请自定义独一无二的英文名称)`
                    : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 '𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐅𝐨𝐧𝐭 𝐍𝐚𝐦𝐞':\r\n(e.g. HarmonyOS Sans SC, only half-width input mode is supported, including English, numbers, decimal point, minus sign, underscore, space, @)\r\n(𝐈𝐟 𝐧𝐨 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐟𝐨𝐧𝐭 𝐧𝐚𝐦𝐞, 𝐝𝐨 𝐝𝐞𝐟𝐢𝐧𝐞 𝐚 𝐮𝐧𝐢𝐪𝐮𝐞 𝐄𝐧𝐠𝐥𝐢𝐬𝐡 𝐧𝐚𝐦𝐞)`;
                  const psNameText = IS_CHN
                    ? `请输入「𝐏𝐨𝐬𝐭𝐒𝐜𝐫𝐢𝐩𝐭 名称」：\r\n(为使新增字体全局生效，请尽可能填写 𝐏𝐨𝐬𝐭𝐒𝐜𝐫𝐢𝐩𝐭 名称。如果您暂时无法提供 𝐏𝐨𝐬𝐭𝐒𝐜𝐫𝐢𝐩𝐭 名称，可保持留空)\r\n(点击取消可访问 𝐃𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧𝐬#𝟐𝟔𝟏 @𝐆𝐢𝐭𝐡𝐮𝐛)`
                    : `𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 '𝐏𝐨𝐬𝐭𝐒𝐜𝐫𝐢𝐩𝐭 𝐍𝐚𝐦𝐞':\r\n(To make the new font take effect globally, enter the postscript name as much as possible. If can not provide the postscript name at the moment, please leave it blank)\r\n(𝐂𝐚𝐧𝐜𝐞𝐥 𝐭𝐨 𝐯𝐢𝐬𝐢𝐭 𝐃𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧𝐬#𝟐𝟔𝟏 @𝐆𝐢𝐭𝐡𝐮𝐛)`;
                  let enName, psName, cusFontName;
                  let chName = prompt(chNameText, "鸿蒙黑体");
                  if (chName === null) return;
                  else if (/^@?[\w\u2E80-\uD7FF\-.,!/（）() ]+$/.test(chName.trim())) {
                    enName = prompt(enNameText, "HarmonyOS Sans SC");
                    if (enName === null) return;
                    else if (/^@?[\w\-., !/()]+$/.test(enName.trim())) {
                      psName = prompt(psNameText, "");
                      if (psName === null) return GMopenInTab(`${def.url.feedback}/261`, false);
                      else if (/^[\w\u2E80-\uD7FF\-.,@!&=?|+~ ]+$/.test(psName.trim())) cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}","ps":"${psName.trim()}"}`;
                      else cusFontName = `{"ch":"${chName.trim()}","en":"${enName.trim()}"}`;
                      const aTrim = customFontlistNode.value.trim() ? "\r\n" : "";
                      customFontlistNode.value = customFontlistNode.value.trim().concat(aTrim, cusFontName, "\r\n");
                      custom_Fontlist = customFontlistNode.value.trim();
                      customFontlistNode.scrollTop = customFontlistNode.scrollHeight;
                    } else alert(IS_CHN ? "英文字体家族名称 格式输入错误！" : "English Fontname Input Format Error!");
                  } else alert(IS_CHN ? "中文字体家族名称 格式输入错误！" : "Chinese Fontname Input Format Error!");
                });
                customFontlistNode?.addEventListener("change", function () {
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
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_idg">自定义字体表已初始化成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>`
                      : `<p class="${def.const.seed}_idg">Custom font library initialized successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体数据重置" : "Customized FontData Reset"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    cache.remove("_FONTCHECKLIST_");
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    successDialog = null;
                  } else if (Array.isArray(fontListArray) && fontListArray.length > 0) {
                    const parsedFontList = [];
                    fontListArray.forEach(item => void parsedFontList.push(rawJSON.parse(item)));
                    const unique_Save_Fontlist = getUniqueFontlist(parsedFontList);
                    const customFontlistData = getNonDuplicateFontArray(unique_Save_Fontlist, fontCheck);
                    saveData("_CUSTOM_FONTLIST_", customFontlistData);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您所提交的自定义字体已保存成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">注：格式错误或重复的字体代码将被自动过滤。</p>`
                      : `<p class="${def.const.seed}_cdg">The customized font saved successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">Note: Incorrectly or duplicate fonts were filtered.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体数据保存" : "Customized FontData Save"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    cache.remove("_FONTCHECKLIST_");
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    successDialog = null;
                  } else {
                    GMsetClipboard(custom_Fontlist);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">您所提交的自定义字体数据格式有误，请重新输入。<p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">The custom Fontdata is incorrectly.<p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "字体表数据格式错误" : "Font Library Data Format Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.fonttooltip}`, def.const.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                  }
                } else {
                  const hash = IS_CHN ? "#自定义字体的添加" : "#adding-custom-fonts";
                  GMopenInTab(def.url.guideURI + hash, false);
                }
                frDialog = null;
              });
            } catch (e) {
              ERROR("Fonts selection:", e.message);
              def.array.exps.push(`[Fonts selection]: ${e}`);
            }
          }

          function checkTextareaFormat(target) {
            if (!target) return;
            const handleCompositionStart = () => (def.var.composing = true);
            const handleCompositionEnd = () => delete def.var.composing;
            const handleInput = event => {
              if (def.var.composing) return;
              const _this = event.target;
              const value = _this.value.trim();
              if (value.length === 0) return _this.classList.remove(`${def.const.seed}_tabd`);
              try {
                const previousCursorPosition = _this.selectionStart;
                const formattedValue = rawJSON.stringify(rawJSON.parse(value), null, 4);
                const newCursorPosition = previousCursorPosition + formattedValue.length - _this.value.length;
                const currentScrollTop = _this.scrollTop;
                _this.value = formattedValue;
                _this.classList.remove(`${def.const.seed}_tabd`);
                sleep(0).then(() => {
                  _this.scrollTop = currentScrollTop;
                  _this.setSelectionRange(newCursorPosition, newCursorPosition);
                });
              } catch (e) {
                _this.classList.add(`${def.const.seed}_tabd`);
              }
            };
            target.addEventListener("compositionstart", handleCompositionStart);
            target.addEventListener("compositionend", handleCompositionEnd);
            target.addEventListener("input", handleInput);
          }

          function setFontOverrideDefTrigger(savedData) {
            qS(`#${def.const.seed}_fontoverride_defined`, def.const.configIf)?.addEventListener("dblclick", async e => {
              e.stopImmediatePropagation();
              const _fontOverrideDef = rawJSON.stringify(savedData, null, 4);
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">以下文本域可按预定格式填写字体重写的自定义数据。整体为数组类型，每个字体名称占一行，并使用半角双引号包括；如字体名称包含中文等双字节文本时，请在双引号内使用半角花括号包括。如您不了解该数据的含义，请勿修改，以免造成全局字体重写出错。<span class="${def.const.seed}_cdc1">(强烈建议您：按 <a href="${def.url.feedback}/267#discussion-5692372" target="_blank">作者提议</a> 填写此内容)</span></p><p><textarea id="${def.const.seed}_fontoverride_def_array">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}_warning_chn">（请勿添加脚本字体表已存在的字体，如重复将自动删除）</p>`
                : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">Predefined format overall array type, one Fontname per line, and the use of half-width double quotes include; If the fontname contains double-byte text such as Chinese, please use half-width brackets within the double quotes include. <span class="${def.const.seed}_cdc1">(Suggestion: "<a href="${def.url.feedback}/267#discussion-5692372" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}_fontoverride_def_array">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}_warning_en">(Duplicate Fontname in the Font Library will be deleted)</p>`;
              const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义字体重写数据" : "Customized Font-Rewrite Data"];
              let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const fontOverrideNode = qS(`#${def.const.seed}_fontoverride_def_array`, def.const.dialogIf);
              removeKeyboardEvent(fontOverrideNode);
              checkTextareaFormat(fontOverrideNode);
              if (await frDialog.respond()) {
                const fontOverrideDefValue = fontOverrideNode.value.trim();
                try {
                  const parsedFontOverrideDef = fontOverrideDefValue ? uniq(rawJSON.parse(fontOverrideDefValue)) : [];
                  if (!Array.isArray(parsedFontOverrideDef) || parsedFontOverrideDef.Some(item => typeof item !== "string")) throw new Error("Format Error");
                  const fontCheckList = await cache.get("_FONTCHECKLIST_");
                  let fontCheckArray =
                    Array.isArray(fontCheckList) && fontCheckList.length > 0
                      ? fontCheckList.filter(item => item.en !== "Microsoft YaHei").map(item => (item.en.startsWith("\\") ? `{${item.ch}}` : item.en))
                      : [];
                  const baseFontArray = INITIAL_VALUES.fontBase.replace(/'/g, "").split(",");
                  const monoFontArray = (monoFontList || INITIAL_VALUES.monospacedFont).replace(/'/g, "").split(",");
                  const filterFonts = uniq(["Courier New", "Courier", "monospace", ...baseFontArray, ...fontCheckArray, ...monoFontArray]);
                  const fontOverrideData = parsedFontOverrideDef.filter(item => !filterFonts.includes(item)).sort();
                  saveData("_FONTOVERRIDE_DEF_", fontOverrideData);
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg">自定义字体重写数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                    : `<p class="${def.const.seed}_cdg">Customized Font Rewrite Data was saved!</p><p>The page will be refreshed after confirming.</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体重写数据设置成功" : "Customized Font-Rewrite Data Save"];
                  let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                  successDialog = null;
                } catch (e) {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cb8">自定义字体重写数据格式错误，请重新输入！</p>`
                    : `<p class="${def.const.seed}_cb8">Customized font rewrite data error, Please refill!</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "重写数据格式错误" : "Customized Font-Rewrite Data Error"];
                  let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await errorDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.const.seed}_fontoverride_defined`, def.const.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  errorDialog = null;
                }
              }
              frDialog = null;
            });
          }

          async function getAndMonitorCurrentFont(fontfaceNode, inputNode, defalutName) {
            await getCurrentFontName(CONST_VALUES.fontFace, selectedFont, defalutName);
            if (!fontfaceNode || !inputNode) return;
            fontfaceNode.addEventListener("change", async () => {
              await getCurrentFontName(CONST_VALUES.fontFace, selectedFont, defalutName);
              if (fontfaceNode.checked && !CONST_VALUES.fontFace) {
                sleep(120)(inputNode.setAttribute("placeholder", IS_CHN ? "正在恢复之前设置的字体…" : "Restore previous font…"))
                  .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.const.configIf))
                  .then(submitPreview => void submitPreview?.click());
              }
            });
          }

          function getFontSizeScale(fontScaleNode, submitButton) {
            if (!isFontsize || !fontScaleNode) return;
            try {
              setFontScaleDefTrigger();
              const drawScale = qS(`#${def.id.scaleSize}`, def.const.configIf);
              fontScaleNode.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
              rangeSliderWidget(drawScale, fontScaleNode, 3, true);
              checkInputValue(fontScaleNode, drawScale, /^[0-1](\.[0-9]{1,3})?$/, 3, true);
              return drawScale;
            } catch (e) {
              ERROR("FontSize Scale:", e.message);
              def.array.exps.push(`[FontSize Scale]: ${e}`);
            } finally {
              saveChangeStatus(fontScaleNode, CONST_VALUES.fontSize, submitButton, def.array.values, true);
            }
          }

          function setFontScaleDefTrigger() {
            qS(`#${def.const.seed}_fontscale_defined`, def.const.configIf)?.addEventListener("dblclick", async e => {
              e.stopImmediatePropagation();
              const fontScaleDefJSON = await getFontScaleDef();
              const fontScaleDefString = rawJSON.stringify(fontScaleDefJSON, null, 4);
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">以下文本域可按预定格式填写“字体比例缩放功能”所需的自定义站点缩放数据配置。由于该数据为脚本核心设置数据，如果您不了解该设置数据的格式要求或数据含义，请勿修改该数据！<span class="${def.const.seed}_cdc1">（强烈建议您：按 <a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">作者提议</a> 填写此内容）</span></p><p><textarea id="${def.const.seed}_fontscale_def_json">${fontScaleDefString}</textarea></p><p id="${def.const.seed}_warning_chn">（如果以上JSON内容格式错误，会造成脚本出错使渲染失效）</p>`
                : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">Fill in the custom site scaling data configuration of the "Font Scaling" in a predetermined format. If you do not understand the meaning of the data, please do not modify it! <span class="${def.const.seed}_cdc1">(Suggestion: "<a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}_fontscale_def_json">${fontScaleDefString}</textarea></p><p id="${def.const.seed}_warning_en">(If the above JSON format is incorrect, rendering will fail)</p>`;
              const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "站点缩放修正设置数据" : "Sites Scaling Setting Data"];
              let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const fontScaleNode = qS(`#${def.const.seed}_fontscale_def_json`, def.const.dialogIf);
              removeKeyboardEvent(fontScaleNode);
              checkTextareaFormat(fontScaleNode);
              if (await frDialog.respond()) {
                const fontScaleDefValue = fontScaleNode.value.trim();
                try {
                  const fontScaleData = fontScaleDefValue ? rawJSON.parse(fontScaleDefValue) : {};
                  if (obj2Str.call(fontScaleData) !== "[object Object]") throw new Error("Format Error");
                  saveData("_FONTSCALE_DEF_", fontScaleData);
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg">站点缩放修正设置数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                    : `<p class="${def.const.seed}_cdg">Sites scaling setting data saved succeeded!</p><p>The page will be refreshed after confirming.</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "站点缩放修正数据设置成功" : "Sites Scaling Setting Data Save"];
                  let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                  successDialog = null;
                } catch (e) {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cb8">站点缩放修正设置数据格式错误，请重新输入！</p>`
                    : `<p class="${def.const.seed}_cb8">Sites scaling setting data error, Please refill!</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "设置数据格式错误" : "Sites Scaling Setting Data Error"];
                  let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await errorDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.const.seed}_fontscale_defined`, def.const.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  errorDialog = null;
                }
              }
              frDialog = null;
            });
          }

          function getFixViewportBool(fontScaleNode, submitButton) {
            const fixViewportT = qS(`#${def.id.fixViewport}`, def.const.configIf);
            if (!isFontsize || !isFixViewport || !fontScaleNode || !fixViewportT) return;
            try {
              const fviewportNode = qS(`#${def.id.fviewport}`, def.const.configIf);
              if (fviewportNode) {
                changeNodeClass(fontScaleNode.value === "OFF", fviewportNode, `${def.const.seed}_hidden`);
                fontScaleNode.addEventListener("change", function () {
                  changeNodeClass(this.value === "OFF", fviewportNode, `${def.const.seed}_hidden`);
                });
              }
              return fixViewportT;
            } catch (e) {
              ERROR("Fix Viewport:", e.message);
              def.array.exps.push(`[Fix Viewport]: ${e}`);
            } finally {
              saveChangeStatus(fixViewportT, CONST_VALUES.fixViewport, submitButton, def.array.values);
            }
          }

          function getFontsStroke(strokeNode, submitButton) {
            if (!strokeNode) return;
            try {
              const drawStrock = qS(`#${def.id.stroke}`, def.const.configIf);
              strokeNode.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
              rangeSliderWidget(drawStrock, strokeNode, 3);
              checkInputValue(strokeNode, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
              return drawStrock;
            } catch (e) {
              ERROR("Fonts stroke:", e.message);
              def.array.exps.push(`[Fonts stroke]: ${e}`);
            } finally {
              saveChangeStatus(strokeNode, CONST_VALUES.fontStroke, submitButton, def.array.values);
            }
          }

          function getFixStrokeBool(strokeNode, submitButton) {
            if (!IS_CAUSED_BOLDSTROKEERROR || !strokeNode) return;
            const fixStrokeT = qS(`#${def.id.fixStroke}`, def.const.configIf);
            const fixShadowT = qS(`#${def.id.fixShadow}`, def.const.configIf);
            const lazyloadT = qS(`#${def.id.lazyload}`, def.const.configIf);
            const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
            const fshadowNode = qS(`#${def.id.fshadow}`, def.const.configIf);
            try {
              if (fstrokeNode) {
                changeNodeClass(strokeNode.value === "OFF", fstrokeNode, `${def.const.seed}_hidden`);
                strokeNode.addEventListener("change", function () {
                  changeNodeClass(this.value === "OFF", fstrokeNode, `${def.const.seed}_hidden`);
                });
              }
              fixStrokeT?.addEventListener("mouseenter", () => {
                if (IS_CAUSED_BOLDSHADOWERROR) {
                  const shadowFixTs = qA(`#${def.id.fshadow}-shadow-label,#${def.id.fshadow}-shadow-text`, def.const.configIf);
                  const hasShadow = !Number(qS(`#${def.id.shadowSize}`, def.const.configIf)?.value);
                  shadowFixTs.forEach(item => changeNodeClass(hasShadow, item, `${def.const.seed}_none`));
                }
                fshadowNode.classList.add(`${def.const.seed}_visible`);
              });
              fshadowNode?.addEventListener("mouseleave", () => void fshadowNode.classList.remove(`${def.const.seed}_visible`));
              fixStrokeT?.addEventListener("click", () => {
                if (fixStrokeT.checked) {
                  if (IS_CAUSED_BOLDSHADOWERROR) showFixConfig(fixShadowT, "fixShadow", false);
                  showFixConfig(lazyloadT, "lazyload", false);
                } else {
                  if (IS_CAUSED_BOLDSHADOWERROR) showFixConfig(fixShadowT, null, true);
                  showFixConfig(lazyloadT, null, true);
                }
              });
              return { fixStrokeT, fixShadowT, lazyloadT };
            } catch (e) {
              ERROR("Fix Stroke:", e.message);
              def.array.exps.push(`[Fix Stroke]: ${e}`);
            } finally {
              saveChangeStatus(fixStrokeT, CONST_VALUES.fixStroke, submitButton, def.array.values);
              saveChangeStatus(lazyloadT, CONST_VALUES.lazyload, submitButton, def.array.values);
              if (IS_CAUSED_BOLDSHADOWERROR) saveChangeStatus(fixShadowT, CONST_VALUES.fixShadow, submitButton, def.array.values);
            }
          }

          function showFixConfig(node, value, disabled) {
            if (disabled === false) {
              node.removeAttribute("disabled");
              node.nextElementSibling.classList.remove(`${def.const.seed}_f-g1`);
              CONST_VALUES[value] && !node.checked && node.click();
            } else {
              node.checked && node.click();
              node.setAttribute("disabled", "");
              node.nextElementSibling.classList.add(`${def.const.seed}_f-g1`);
            }
          }

          function getFontShadow(shadowNode, shadowColorNode, submitButton) {
            if (!shadowNode || !shadowColorNode) return;
            try {
              const drawShadow = qS(`#${def.id.shadow}`, def.const.configIf);
              shadowNode.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
              rangeSliderWidget(drawShadow, shadowNode, 2);
              checkInputValue(shadowNode, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
              changeNodeClass(shadowNode?.value === "OFF", shadowColorNode, `${def.const.seed}_none`);
              shadowNode.addEventListener("change", function () {
                changeNodeClass(this?.value === "OFF", shadowColorNode, `${def.const.seed}_none`);
              });
              return drawShadow;
            } catch (e) {
              ERROR("Fonts shadow:", e.message);
              def.array.exps.push(`[Fonts shadow]: ${e}`);
            } finally {
              saveChangeStatus(shadowNode, CONST_VALUES.fontShadow, submitButton, def.array.values);
            }
          }

          function getColorAndColorPicker(colorshowNode, submitButton) {
            if (!colorshowNode) return {};
            try {
              const colorPicker = new global.FRColorPicker(`#${def.id.color}`, {
                value: CONST_VALUES.shadowColor,
                alpha: 1.0,
                format: "hexa",
                previewSize: 35,
                position: "top",
                zIndex: 2147483646,
                backgroundColor: "rgba(206,226,237,0.91)",
                controlBorderColor: "rgba(187,187,187,0.7)",
                pointerBorderColor: "rgba(255,255,255,0.6)",
                borderRadius: 4,
                padding: 9,
                width: 186,
                height: 210,
                sliderSize: 12,
                shadow: 4,
                onChange: function () {
                  colorshowNode.value = this.toHEXAString() === "#FFFFFFFF" ? "currentcolor" : this.toHEXAString();
                  colorshowNode._value_ = colorshowNode.value;
                },
              });
              colorPicker.fromString(CONST_VALUES.shadowColor);
              const cp = colorPicker.toHEXAString();
              const cl = getBrightness(cp.substring(1)) > 182 ? "#333" : "#eee";
              colorshowNode.value = cp === "#FFFFFFFF" ? "currentcolor" : cp;
              DEBUG(`frColorPicker: %c${cp}`, `${fullStyle(cp, cl)};border:1px solid #eee`);
              return colorPicker;
            } catch (e) {
              ERROR("Fonts shadowColor:", e.message);
              def.array.exps.push(`[Fonts shadowColor]: ${e}`);
            } finally {
              saveChangeStatus(colorshowNode, CONST_VALUES.shadowColor, submitButton, def.array.values);
            }
          }

          function doubleClickToEdit(fontCssNode) {
            if (!fontCssNode) return;
            fontCssNode.addEventListener("dblclick", e => {
              e.stopImmediatePropagation();
              fontCssNode.classList.add(def.class.notreadonly);
              fontCssNode.removeAttribute("title");
              fontCssNode.readOnly = false;
            });
          }

          function customMonospceFont(monoNode) {
            if (!monoNode) return;
            monoNode.addEventListener("dblclick", async e => {
              try {
                e.stopImmediatePropagation();
                const [_config_data_, { monoSiteRules: siteRule, monoFontList: fontlist, monoFeature: feature }] = await Promise.all([getConfigureData(), getCustomMonoData()]);
                const monospacedsiterules = siteRule.join("\r\n").trim();
                const monospacedfont = fontlist.trim();
                const monospacedfeature = feature.trim();
                const customMonoTextareasHTML = IS_CHN
                  ? `<p class="${def.const.seed}_mono_notify">\u2474 以下文本域可设置需应用等宽字体的根域及元素选择器。<br><em class="${def.const.seed}_cdc1">如果您不了解站点样式规则，请保持留空【<a href="${def.url.feedback}/74" target="_blank">查看推荐规则</a>】</em></p><p><textarea id="${def.const.seed}_monospaced_siterules" placeholder="每行只能允许一组规则，相同站点不同规则可重复添加。\r\n格式如：@网站域名##元素选择器1,元素选择器2,……\r\n例如：\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}_mono_notify">\u2475 以下可设置自定义英文等宽字体，请按示例格式填写。<br><em class="${def.const.seed}_cdc1">请注意：monospace字体族已程序内置，无需重复添加。</em></p><p><input id="${def.const.seed}_monospaced_font" placeholder="例如：'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}_mono_notify">\u2476 以下可设置OpenType字体font-feature-settings属性。<br><em class="${def.const.seed}_cdc1">如果您不了解该属性，请保持留空，以免造成样式错误。</em></p><p><input id="${def.const.seed}_monospaced_feature" placeholder='例如："liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`
                  : `<p class="${def.const.seed}_mono_notify">\u2474 Set the root field and selector for monospaced font.<br><em class="${def.const.seed}_cdc1">Please leave blank if don't know the rules. [<a href="${def.url.feedback}/74" target="_blank">Usage Rules</a>]</em></p><p><textarea id="${def.const.seed}_monospaced_siterules" placeholder="Only One set of rules per line, different rules for the same site can be repeated. Such as:\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}_mono_notify">\u2475 Set custom monospaced font according to example.<br><em class="${def.const.seed}_cdc1">Note: monospace is built-in, don't add repeatedly.</em></p><p><input id="${def.const.seed}_monospaced_font" placeholder="Such as: 'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}_mono_notify">\u2476 Set OpenType font font-feature-settings property.<br><em class="${def.const.seed}_cdc1">If you don't know the attribute, leave it blank.</em></p><p><input id="${def.const.seed}_monospaced_feature" placeholder='Such as: "liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`;
                const titleText = IS_CHN ? "设置自定义等宽字体" : "Set Custom Monospaced Font";
                const messageText = String(`<div id="${def.id.cm}">
                      <span class="${def.const.seed}_cusmono">${IS_CHN ? "开启自定义等宽字体（默认：关闭）" : "Enable Custom Monospaced Font"}</span>
                      <input type="checkbox" id="${def.id.iscusmono}" class="${def.class.checkbox}" ${_config_data_.isCustomMono ? "checked" : ""} />
                      <label for="${def.id.iscusmono}"></label>
                    </div>
                    ${customMonoTextareasHTML}`);
                const [trueButtonText, neutralButtonText] = [IS_CHN ? "保存数据" : "Save", IS_CHN ? "取 消" : "Cancel"];
                let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
                const monospacedSiteRulesNode = qS(`#${def.const.seed}_monospaced_siterules`, def.const.dialogIf);
                const monospacedFontNode = qS(`#${def.const.seed}_monospaced_font`, def.const.dialogIf);
                const monospacedFeatureNode = qS(`#${def.const.seed}_monospaced_feature`, def.const.dialogIf);
                const customMonoSwitch = qS(`#${def.id.iscusmono}`, def.const.dialogIf);
                removeKeyboardEvent(monospacedSiteRulesNode);
                removeKeyboardEvent(monospacedFontNode);
                removeKeyboardEvent(monospacedFeatureNode);
                const changeDisabledStatus = (listenerCheck, nodes, cssName) => {
                  nodes.forEach(node => {
                    if (listenerCheck) {
                      node.removeAttribute("disabled");
                      node.classList.remove(cssName);
                    } else {
                      node.setAttribute("disabled", "disabled");
                      node.classList.add(cssName);
                    }
                  });
                };
                const monoNodes = [monospacedSiteRulesNode, monospacedFontNode, monospacedFeatureNode];
                changeDisabledStatus(customMonoSwitch.checked, monoNodes, def.class.readonly);
                customMonoSwitch?.addEventListener("change", function () {
                  changeDisabledStatus(this.checked, monoNodes, def.class.readonly);
                });
                let custom_MonospacedSiteRules = convertHtmlToText(monospacedSiteRulesNode.value.trim());
                let custom_MonospacedFontList = convertHtmlToText(monospacedFontNode.value.trim());
                let custom_MonospacedFontFeature = convertHtmlToText(monospacedFeatureNode.value.trim());
                monospacedFontNode.addEventListener("change", function () {
                  this.value = convertFullToHalf(this.value)
                    .replace(/"|`|·|“|”|‘|’/g, `'`)
                    .replace(/，/g, `,`)
                    .replace(/'(ui-)?monospace',?/gi, ``);
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
                  const monospaced_SiteRulesArray = custom_MonospacedSiteRules.match(/@[\w\-.:]+##(?!.*(?<sp>[#])\k<sp>{1})[\w\-*.#:+>()~[\]=^$|,' ]+/g);
                  if (custom_MonospacedSiteRules && !monospaced_SiteRulesArray) {
                    GMsetClipboard(custom_MonospacedSiteRules);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">自定义根域及元素选择器有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">Custom Root/Selectors data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义根域及元素选择器数据错误" : "Custom Root/Selectors Data Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.mono}`, def.const.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                    return;
                  }
                  const monospaced_FontListArray = custom_MonospacedFontList.match(/'@?[\w\-.()!/ ]+'/g);
                  if (custom_MonospacedFontList && !monospaced_FontListArray) {
                    GMsetClipboard(custom_MonospacedFontList);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">您提交的自定义等宽字体数据有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">Custom Monospaced Font Data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义等宽字体数据错误" : "Custom Monospaced Font Data Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.mono}`, def.const.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                    return;
                  }
                  const isSiteRules = !custom_MonospacedSiteRules || (Array.isArray(monospaced_SiteRulesArray) && monospaced_SiteRulesArray.length > 0);
                  const isFontList = !custom_MonospacedFontList || (Array.isArray(monospaced_FontListArray) && monospaced_FontListArray.length > 0);
                  if (isSiteRules && isFontList) {
                    const monospaced_fontListString = uniq(monospaced_FontListArray).join();
                    !custom_MonospacedSiteRules ? GMdeleteValue("_MONOSPACED_SITERULES_") : saveData("_MONOSPACED_SITERULES_", uniq(monospaced_SiteRulesArray));
                    !custom_MonospacedFontList ? GMdeleteValue("_MONOSPACED_FONTLIST_") : saveData("_MONOSPACED_FONTLIST_", monospaced_fontListString);
                    !custom_MonospacedFontFeature ? GMdeleteValue("_MONOSPACED_FEATURE_") : saveData("_MONOSPACED_FEATURE_", custom_MonospacedFontFeature);
                    _config_data_.isCustomMono = Boolean(qS(`#${def.id.iscusmono}`, def.const.dialogIf).checked);
                    saveData("_CONFIGURE_", _config_data_);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您提交的自定义等宽字体数据已保存成功！</p><p>当前页面将在您确认后自动刷新。</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">注：格式错误的输入内容将被自动过滤。</p>`
                      : `<p class="${def.const.seed}_cdg">Custom Monospaced Font Data Save succeeded!</p><p>The page will be refreshed after confirming.</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">Note: Incorrect content will be filtered.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义等宽字体数据保存" : "Custom Monospaced Font Data Save"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    successDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                ERROR("Monospaced Set:", e.message);
              }
            });
          }

          function controlResetButton(resetT, fontSet, submitSet, { drawScale, drawStrock, drawShadow, submitButton }) {
            if (!resetT) return;
            const { smoothT, ffaceT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT, shadowsT, colorPickerT, colorshowT, fontCssT, fontExT } = submitSet;
            resetT.addEventListener("click", async () => {
              const messageText = IS_CHN
                ? `<p>『重置/恢复』将当前设置初始化为 <span class="${def.const.seed}_csg">程序默认的初始数据</span> 或 <span class="${def.const.seed}_csg">上次正确保存的数据</span>。一般是在您配置错误或需使用新功能参数的情况下才进行重置参数的操作。</p><p class="${def.const.seed}_cdg">重置：重置当前数据为程序初始值，手动保存生效。</p><p class="${def.const.seed}_cb8">恢复：替换为上次正确保存的数据，自动恢复预览。</p><p class="${def.const.seed}_cga">取消：放弃重置操作。</p>`
                : `<p>『Reset/Restore』Initializes the current settings to <span class="${def.const.seed}_csg">the program's default initial data</span> or <span class="${def.const.seed}_csg">the last saved data</span>. The reset is usually done when configuration error or new feature is needed. </p><p class="${def.const.seed}_cdg"><b>Reset:</b> Reset the current data to the initial value of the program, and save data manually.</p><p class="${def.const.seed}_cb8"><b>Restore:</b> Replace all with the last correctly saved data, and automatically restore preview. </p><p class="${def.const.seed}_cga"><b>Cancel:</b> Abort the reset operation. </p>`;
              const [trueButtonText, falseButtonText] = [IS_CHN ? "重 置" : "Reset", IS_CHN ? "恢 复" : "Restore"];
              const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "参数重置确认" : "Confirm To Reset Settings"];
              let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              const shadowColorNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
              if (await frDialog.respond()) {
                smoothT.checked !== INITIAL_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== INITIAL_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                CONST_VALUES.fontSelect.split(",")[0] !== INITIAL_VALUES.fontSelect ? fontSet?.fresetList() : fontSet?.fdeleteList();
                if (isFontsize) {
                  fontScaleT.value = INITIAL_VALUES.fontSize === 1 ? "OFF" : INITIAL_VALUES.fontSize.toFixed(3);
                  fontScaleT._value_ = INITIAL_VALUES.fontSize;
                  setSliderProperty(drawScale, INITIAL_VALUES.fontSize, 3);
                  def.var.curScale = INITIAL_VALUES.fontSize;
                  if (isFixViewport) {
                    fixViewportT.checked !== INITIAL_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    const fviewportNode = qS(`#${def.id.fviewport}`, def.const.configIf);
                    changeNodeClass(fontScaleT.value === "OFF", fviewportNode, `${def.const.seed}_hidden`);
                  }
                }
                strokeT.value = INITIAL_VALUES.fontStroke === 0 ? "OFF" : INITIAL_VALUES.fontStroke.toFixed(3);
                strokeT._value_ = INITIAL_VALUES.fontStroke;
                setSliderProperty(drawStrock, INITIAL_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== INITIAL_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== INITIAL_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
                  changeNodeClass(strokeT.value === "OFF", fstrokeNode, `${def.const.seed}_hidden`);
                }
                shadowsT.value = INITIAL_VALUES.fontShadow === 0 ? "OFF" : INITIAL_VALUES.fontShadow.toFixed(2);
                shadowsT._value_ = INITIAL_VALUES.fontShadow;
                setSliderProperty(drawShadow, INITIAL_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== INITIAL_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                changeNodeClass(shadowsT.value === "OFF", shadowColorNode, `${def.const.seed}_none`);
                colorPickerT.fromString(INITIAL_VALUES.shadowColor);
                colorshowT.value = INITIAL_VALUES.shadowColor;
                colorshowT._value_ = INITIAL_VALUES.shadowColor;
                fontCssT.value = INITIAL_VALUES.fontCSS;
                setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, def.array.values, fontCssT, submitButton);
                fontExT.value = INITIAL_VALUES.fontEx;
                setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, def.array.values, fontExT, submitButton);
                sleep(120)(getCurrentFontName(ffaceT.checked, INITIAL_VALUES.fontSelect.replace(/'/g, ""), defaultFont))
                  .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.const.configIf))
                  .then(submitPreview => void submitPreview?.click());
              } else {
                smoothT.checked !== CONST_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== CONST_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                fontSet?.fdeleteList();
                if (isFontsize) {
                  fontScaleT.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
                  fontScaleT._value_ = CONST_VALUES.fontSize;
                  setSliderProperty(drawScale, CONST_VALUES.fontSize, 3);
                  def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize));
                  if (isFixViewport) {
                    fixViewportT.checked !== CONST_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    const fviewportNode = qS(`#${def.id.fviewport}`, def.const.configIf);
                    changeNodeClass(fontScaleT.value === "OFF", fviewportNode, `${def.const.seed}_hidden`);
                  }
                }
                strokeT.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
                strokeT._value_ = CONST_VALUES.fontStroke;
                setSliderProperty(drawStrock, CONST_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== CONST_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== CONST_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  const fstrokeNode = qS(`#${def.id.fstroke}`, def.const.configIf);
                  changeNodeClass(strokeT.value === "OFF", fstrokeNode, `${def.const.seed}_hidden`);
                }
                shadowsT.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
                shadowsT._value_ = CONST_VALUES.fontShadow;
                setSliderProperty(drawShadow, CONST_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== CONST_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                changeNodeClass(shadowsT.value === "OFF", shadowColorNode, `${def.const.seed}_none`);
                colorPickerT.fromString(CONST_VALUES.shadowColor);
                colorshowT.value = CONST_VALUES.shadowColor === "#FFFFFFFF" ? "currentcolor" : colorPickerT.toHEXAString();
                colorshowT._value_ = colorshowT.value;
                fontCssT.value = CONST_VALUES.fontCSS;
                setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, def.array.values, fontCssT, submitButton);
                fontExT.value = CONST_VALUES.fontEx;
                setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, def.array.values, fontExT, submitButton);
                await getCurrentFontName(ffaceT.checked, selectedFont, defaultFont);
                loadPreview(def.var.preview);
                delete def.var.preview;
              }
              frDialog = null;
            });
          }

          function controlSubmitButton(submitT, fontSet, submitSet) {
            if (!submitT) return;
            const { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, shadowsT, fixShadowT, colorshowT, colorReg, fontCssT, fontExT } = submitSet;
            submitT.addEventListener("click", async function () {
              const fontlists = fontSet?.fsearchList(def.id.fontName);
              const fontselect = fontlists.length > 0 ? addSingleQuoteForItem(fontlists) : CONST_VALUES.fontSelect;
              const [fontface, smooth] = [ffaceT.checked, smoothT.checked];
              const prefscale = !isFontsize ? CONST_VALUES.fontSize : /^[0-1](\.[0-9]{1,3})?$/.test(fontScaleT.value) ? Number(fontScaleT.value) : INITIAL_VALUES.fontSize;
              const fscale = isEditorBlock ? 1 : prefscale < 0.8 ? 0.8 : prefscale > 1.5 ? 1.5 : prefscale;
              const fixfviewport = isFixViewport && fscale !== 1 && fixViewportT.checked;
              const fstroke = /^[0-1](\.[0-9]{1,3})?$/.test(strokeT.value) ? Number(strokeT.value) : strokeT.value === "OFF" ? 0 : INITIAL_VALUES.fontStroke;
              const fixfstroke = IS_CAUSED_BOLDSTROKEERROR && fstroke && fixStrokeT.checked;
              const lazyload = fixfstroke && lazyloadT.checked;
              const fshadow = /^[0-8](\.[0-9]{1,2})?$/.test(shadowsT.value) ? Number(shadowsT.value) : shadowsT.value === "OFF" ? 0 : INITIAL_VALUES.fontShadow;
              const fixfshadow = IS_CAUSED_BOLDSHADOWERROR && fixfstroke && fshadow && fixShadowT.checked;
              const [pickedcolor, fcss, fex] = [colorshowT.value, fontCssT.value, fontExT.value];
              const fscolor = colorReg.test(pickedcolor) ? (pickedcolor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : pickedcolor) : INITIAL_VALUES.shadowColor;
              const fontcss = fcss ? fcss.replace(/"|`/g, "'") : INITIAL_VALUES.fontCSS;
              const fontex = fex ? fex.replace(/"|`/g, "'") : "";
              const _curEmptyConfig = !fontface && !smooth && !fshadow && !fstroke && fscale === 1;
              if (isPreview && this.hasAttribute("v-Preview")) {
                try {
                  const _bodyscale = !isFontsize ? "" : fscale >= 0.8 && fscale <= 1.5 && fscale !== 1 ? funcFontsize(fscale) : "";
                  const _shadowcsstext = overlayColor(fshadow, fscolor.toLowerCase());
                  const _shadow = fshadow > 0 && fshadow <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
                  const _strokecsstext = `${fstroke}px currentcolor`;
                  const _stroke = fstroke > 0 && fstroke <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
                  const _smoothing = smooth ? funcSmooth : "";
                  const _textrender = smooth ? "text-rendering:optimizeLegibility;" : "";
                  const _fontfamily = fontface ? "font-family:var(--fr-font-family),var(--fr-font-basefont);" : "";
                  const _refont = fontselect?.split(",")[0].replace(/"|'/g, "") ?? "";
                  const _fontfaces = !fontface ? "" : _refont ? await funcFontface(_refont) : "";
                  const _includeSelectors = `${globalPrefix}:is(${convertHtmlToText(fontcss)})`;
                  const _excludeSplit = `${_shadow ? "text-shadow:none!important;" : ""}${_stroke ? "-webkit-text-stroke:var(--fr-no-stroke)!important;" : ""}`;
                  const _excludeCssText = fontex && (_shadow || _stroke) ? `${globalPrefix}:is(${convertHtmlToText(fontex)}){${_excludeSplit}}` : "";
                  const _codefont = fontex ? funcCodefont(fontex, fontface) : "";
                  const _noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && fixfshadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
                  const _fixfontstroke = fixfstroke ? getBoldFixCssText(_noTextShadowCss) : "";
                  const _tshadow = `${_fontfaces}${_bodyscale}${_includeSelectors}{${_fontfamily}${_shadow}${_stroke}${_smoothing}${_textrender}}${_excludeCssText}${_codefont}${_fixfontstroke}`;
                  const _firefoxInputFix = IS_REAL_GECKO && fontface ? def.const.style.firefox : "";
                  const _textShadowFix = `0 0 ${fshadow}px ${fscolor.toLowerCase().slice(0, 7).concat("2b")}`;
                  const _rootpseudoclass = `:root{--fr-font-basefont:${INITIAL_VALUES.fontBase};--fr-font-fontscale:${fscale};--fr-font-family:${fontselect};--fr-font-shadow:${_shadowcsstext};--fr-font-stroke:${_strokecsstext};--fr-no-stroke:0px transparent;--fr-fix-shadow:${_textShadowFix};${monoFontText}${monoShadow}${monoFeatureText}}`;
                  const __tshadow = `@charset "UTF-8";${def.const.style.frDialog}${_curEmptyConfig ? `` : `${_rootpseudoclass}${_firefoxInputFix}${_tshadow}`}`;
                  this.textContent = IS_CHN ? "\u4fdd\u5b58" : "\ud835\udc7a\ud835\udc82\ud835\udc97\ud835\udc86";
                  this.removeAttribute("style");
                  this.removeAttribute("v-Preview");
                  def.array.scaleMatrix.push((def.var.curScale = fscale));
                  loadPreview(isPreview, __tshadow, false);
                  await getCurrentFontName(fontface, _refont, defaultFont)
                    .then(() => {
                      const cl = getBrightness(fscolor.substring(1)) > 182 ? "#333" : "#eee";
                      DEBUG(`frColorPicker<Preview>: %c${fscolor}`, `${fullStyle(fscolor, cl)};border:1px solid #eee`);
                    })
                    .then(() => void correctBoldStrokeProcess({ Fixedstyle: _fixfontstroke, Scenes: "preview", Permit: fixfstroke })())
                    .catch(e => void ERROR("submitPreview.then:", e.message));
                } catch (e) {
                  ERROR("SubmitPreview:", e.message);
                  def.array.exps.push(`[submitPreview]: ${e}`);
                  reportErrorToAuthor(def.array.exps);
                }
              } else {
                try {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">保存到全局数据：</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">保存到当前网站数据：<span id="${def.const.seed}_a_w_d_l_">[<span>全部数据列表</span>]</span></p><p class="${def.const.seed}_mh22"><span title="保存到网站数据会自动覆盖之前的数据" id="${def.const.seed}_c_w_d_">为 ${TOP_HOST} 保存独立的设置数据。</span>`
                    : `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">Save to Global Data:</p><p>Save as global setting, using global by default. </p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">Save to Current Website Data: <span id="${def.const.seed}_a_w_d_l_">[<span> All Data List </span>]</span></p><p class="${def.const.seed}_mh22"><span title="Data saved to the website will automatically overwrite the previous data" id="${def.const.seed}_c_w_d_">Save to website data for ${TOP_HOST}</span>`;
                  const [trueButtonText, falseButtonText] = [IS_CHN ? "保存到全局数据" : "Global Save", IS_CHN ? "保存到网站数据" : "Website Save"];
                  const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "保存设置数据" : "Save Settings Data"];
                  let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                  let [domains, domainValues] = [await GMgetValue("_DOMAINS_FONTS_SET_")];
                  try {
                    domainValues = domains ? [...rawJSON.parse(decrypt(domains))] : [];
                  } catch (e) {
                    ERROR("DomainValue.JSON.parse:", e.message);
                    domainValues = [];
                  }
                  const _awdl = qS(`#${def.const.seed}_a_w_d_l_`, def.const.dialogIf);
                  if (_awdl) {
                    _awdl.classList.add(domainValues.length > 0 ? `${def.const.seed}_inline_block` : `${def.const.seed}_none`);
                    _awdl.addEventListener("click", () => void manageDomainsList());
                  }
                  let domainValueIndex = updateDomainsIndex(domainValues);
                  const cwdNode = qS(`#${def.const.seed}_c_w_d_`, def.const.dialogIf);
                  if (typeof domainValueIndex !== "undefined" && cwdNode) {
                    const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValues[domainValueIndex].fontDate));
                    const cwdNodeHTML = IS_CHN
                      ? `<p class="${def.const.seed}_save_p"><span class="${def.const.seed}_idg"><strong>上次保存：</strong>${fontDate} </span><button id="${def.const.seed}_c_w_d_d_" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                      : `<p class="${def.const.seed}_save_p"><span class="${def.const.seed}_idg"><strong>The last saved</strong>: ${fontDate} </span><button id="${def.const.seed}_c_w_d_d_" title="The page will be refreshed after deleting the data">Delete Data</button></p>`;
                    cwdNode.innerHTML = tTP.createHTML(cwdNodeHTML);
                    qS(`#${def.const.seed}_c_w_d_d_`, def.const.dialogIf)?.addEventListener("click", async () => {
                      if (typeof domainValueIndex !== "undefined") domainValues.splice(domainValueIndex, 1);
                      saveData("_DOMAINS_FONTS_SET_", domainValues);
                      const messageText = IS_CHN
                        ? `<p class="${def.const.seed}_cb8">当前网站的个性化数据已成功删除！</p><p>当前页面将在您确认后自动刷新。</p>`
                        : `<p class="${def.const.seed}_cb8">The current siteData was deleted!</p><p>The page will be refreshed after confirming.</p>`;
                      const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "个性化数据删除" : "Personalized Data Deletion"];
                      let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                      if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                      successDialog = null;
                    });
                  }
                  if (await frDialog.respond()) {
                    const fontSetData = {
                      fontSelect: convertHtmlToText(fontselect),
                      fontFace: Boolean(fontface),
                      fontSmooth: Boolean(smooth),
                      fontSize: Number(fscale),
                      fixViewport: Boolean(fixfviewport),
                      fontStroke: Number(fstroke),
                      fixStroke: Boolean(fixfstroke),
                      lazyload: Boolean(lazyload),
                      fontShadow: Number(fshadow),
                      fixShadow: Boolean(fixfshadow),
                      shadowColor: convertHtmlToText(fscolor),
                      fontCSS: convertHtmlToText(fontcss),
                      fontEx: convertHtmlToText(fontex),
                    };
                    saveData("_FONTS_SET_", fontSetData);
                    if (globalDisable && !_curEmptyConfig) {
                      _config_data_.globalDisable = false;
                      saveData("_CONFIGURE_", _config_data_);
                    }
                    if (!globalDisable && _curEmptyConfig) {
                      _config_data_.globalDisable = true;
                      saveData("_CONFIGURE_", _config_data_);
                    }
                    def.var.successed = true;
                  } else {
                    const domainValue = {
                      domain: TOP_HOST,
                      fontDate: Date.now(),
                      fontSelect: convertHtmlToText(fontselect),
                      fontFace: Boolean(fontface),
                      fontSmooth: Boolean(smooth),
                      fontSize: Number(fscale),
                      fixViewport: Boolean(fixfviewport),
                      fontStroke: Number(fstroke),
                      fixStroke: Boolean(fixfstroke),
                      lazyload: Boolean(lazyload),
                      fontShadow: Number(fshadow),
                      fixShadow: Boolean(fixfshadow),
                      shadowColor: convertHtmlToText(fscolor),
                      fontCSS: convertHtmlToText(fontcss),
                      fontEx: convertHtmlToText(fontex),
                    };
                    domains = await GMgetValue("_DOMAINS_FONTS_SET_");
                    try {
                      domainValues = domains ? [...rawJSON.parse(decrypt(domains))] : [];
                    } catch (e) {
                      ERROR("DomainValues.JSON.parse:", e.message);
                      domainValues = [];
                    }
                    domainValueIndex = updateDomainsIndex(domainValues);
                    typeof domainValueIndex !== "undefined" ? domainValues.splice(domainValueIndex, 1, domainValue) : domainValues.push(domainValue);
                    if (domainValues.length <= maxPersonalSites || typeof domainValueIndex !== "undefined") {
                      saveData("_DOMAINS_FONTS_SET_", domainValues);
                      def.var.successed = true;
                    } else {
                      const messageText = IS_CHN
                        ? `<p class="${def.const.seed}_cga">您已经保存超过<span class="${def.const.seed}_cdc1 ${def.const.seed}_fb ${def.const.seed}_fsi ${def.const.seed}_f20">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p class="${def.const.seed}_ccr">您确认要继续保存吗？</p>`
                        : `<p class="${def.const.seed}_cga">You have saved more than <span class="${def.const.seed}_cdc1 ${def.const.seed}_fb ${def.const.seed}_fsn ${def.const.seed}_f20">${maxPersonalSites}</span > Personalized data. Too much data will make script run slowly. It's recommended that you delete some site settings that are rarely visited in time. </p><p class="${def.const.seed}_ccr">Are you sure you want to continue saving? </p>`;
                      const [trueButtonText, falseButtonText] = [IS_CHN ? "依然保存" : "Still Save", IS_CHN ? "管理列表" : "Manage"];
                      const [neutralButtonText, titleText] = [IS_CHN ? "我放弃" : "Abort", IS_CHN ? "数据过多的提示" : "Too Much Data"];
                      let warnDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                      if (await warnDialog.respond()) {
                        saveData("_DOMAINS_FONTS_SET_", domainValues);
                        def.var.successed = true;
                      } else {
                        await manageDomainsList();
                        delete def.var.successed;
                      }
                      warnDialog = null;
                    }
                  }
                  frDialog = null;
                } catch (e) {
                  ERROR("SubmitData:", e.message);
                  def.array.exps.push(`[submitData]: ${e}`);
                  reportErrorToAuthor(def.array.exps);
                  delete def.var.successed;
                } finally {
                  if (def.var.successed) {
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您设置的字体渲染数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                      : `<p class="${def.const.seed}_cdg">The Font Rendering data has been saved!</p><p>The page will be refreshed after confirming.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "字体渲染数据保存" : "Font Rendering Data Save"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    delete def.var.successed;
                    successDialog = null;
                  }
                }
              }
            });
          }

          function controlBackupButton(backupT, needBackup) {
            if (!needBackup || !backupT) return;
            backupT.classList.add(`${def.const.seed}_inline_block`);
            backupT.addEventListener("click", async () => {
              try {
                const messageText = IS_CHN
                  ? `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">备份到本地文件：</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">从本地文件还原：</p><p><span class="${def.const.seed}_idg ${def.const.seed}_cp" id="${def.id.tfiles}">\ud83d\udd0e [点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${def.id.files}"/></p>`
                  : `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">Backup to local file:</p><p>Backup and download the backup.*.sqlitedb file.</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">Restore from local file:</p><p><span class="${def.const.seed}_idg ${def.const.seed}_cp" id="${def.id.tfiles}">\ud83d\udd0e [Click here to load *.sqlitedb backup file]</span><input accept=".sqlitedb" type="file" id="${def.id.files}"/></p>`;
                const [trueButtonText, falseButtonText] = [IS_CHN ? "备 份" : "Backup", IS_CHN ? "还 原" : "Restore"];
                const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "备份与还原数据" : "Backup and Restore Data"];
                let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                const messageNode = qS(`#${def.id.tfiles}`, def.const.dialogIf);
                const inputNode = qS(`#${def.id.files}`, def.const.dialogIf);
                if (messageNode && inputNode) {
                  messageNode.addEventListener("click", () => void inputNode.click());
                  inputNode.addEventListener("change", () => {
                    const messageNodeHTML = inputNode.files[0]
                      ? `<em class="${def.const.seed}_idg ${def.const.seed}_f11 ${def.const.seed}_wbka">${inputNode.files[0].name}</em><br/>` +
                        `<span class="${def.const.seed}_ccr"> \ud83d\udd0e [${IS_CHN ? "重新选择" : "Reselect"}]</span>`
                      : `\ud83d\udd0e [${IS_CHN ? "点击这里载入*.sqlitedb备份文件" : "Click here to load *.sqlitedb backup file"}]`;
                    messageNode.innerHTML = tTP.createHTML(messageNodeHTML);
                  });
                }
                if (await frDialog.respond()) {
                  const prekey = ["_FONTS_SET_", "_EXCLUDE_SITES_", "_DOMAINS_FONTS_SET_", "_CUSTOM_FONTLIST_", "_MONOSPACED_FONTLIST_"];
                  const allkey = [...prekey, "_MONOSPACED_SITERULES_", "_MONOSPACED_FEATURE_", "_FONTSCALE_DEF_", "_FONTOVERRIDE_DEF_", "_CONFIGURE_"];
                  const backendData = await Promise.all(allkey.map(key => GMgetValue(key)));
                  const [fontSets, excludeSites, domainFontSets, customFonts, monoFonts, monoRules, monoFeature, fontScaleDef, fontOverrideDef, configure] = backendData;
                  const domainSetsDefault = domainFontSets || encrypt(rawJSON.stringify([]));
                  const customFontsDefault = customFonts || encrypt(rawJSON.stringify([]));
                  const monoFontsDefault = monoFonts || "";
                  const monoRulesDefault = monoRules || "";
                  const monoFeatureDefault = monoFeature || "";
                  const fontScaleDefault = fontScaleDef || "";
                  const fontOverrideDefault = fontOverrideDef || "";
                  const db = {
                    db_R: inspectLicense()?.keycode().concat(encrypt(def.var.scriptName)),
                    db_0: encrypt(new Date()),
                    db_1: fontSets,
                    db_2: excludeSites,
                    db_3: domainSetsDefault,
                    db_4: customFontsDefault,
                    db_5: configure,
                    db_6: monoFontsDefault,
                    db_7: monoRulesDefault,
                    db_8: monoFeatureDefault,
                    db_9: fontScaleDefault,
                    db_10: fontOverrideDefault,
                  };
                  const browser = brand.toLowerCase();
                  const timeStamp = setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date());
                  const fileName = `FontRendering-backup-${browser}-${timeStamp}.sqlitedb`;
                  dataDownload(fileName, sqliteDBDataAccess(rawJSON.stringify(db), 12315, ROOT_SECRET_KEY));
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg">备份数据已归档，备份文件导出下载中……</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fsi ${def.const.seed}_f12 ${def.const.seed}_wbka">${fileName}</p>`
                    : `<p class="${def.const.seed}_cdg">The data archived and being downloaded…</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fsi ${def.const.seed}_f12 ${def.const.seed}_wbka">${fileName}</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "数据备份" : "Data Backup"];
                  let downloadDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await downloadDialog.respond()) {
                    closeConfigurePage({ isReload: false });
                    DEBUG(`Backup succeeded: ${fileName}`);
                  }
                  downloadDialog = null;
                } else {
                  try {
                    const thatFile = inputNode.files[0];
                    DEBUG("loadBackupData:", thatFile.name, thatFile.size);
                    let reader = new FileReader();
                    reader.addEventListener(
                      "load",
                      async function () {
                        try {
                          const _file = decrypt(String(this.result));
                          const _rs = rawJSON.parse(sqliteDBDataAccess(_file, null, ROOT_SECRET_KEY));
                          const _data_R = decrypt(_rs.db_R);
                          const _data_0 = decrypt(_rs.db_0);
                          const _data_1 = rawJSON.parse(decrypt(_rs.db_1));
                          const _data_2 = rawJSON.parse(decrypt(_rs.db_2));
                          const _data_3 = _rs.db_3 ? rawJSON.parse(decrypt(_rs.db_3)) : [];
                          const _data_4 = _rs.db_4 ? rawJSON.parse(decrypt(_rs.db_4)) : [];
                          const _data_5 = _rs.db_5 ? rawJSON.parse(decrypt(_rs.db_5)) : void 0;
                          const _data_6 = _rs.db_6 ? rawJSON.parse(decrypt(_rs.db_6)) : void 0;
                          const _data_7 = _rs.db_7 ? rawJSON.parse(decrypt(_rs.db_7)) : void 0;
                          const _data_8 = _rs.db_8 ? rawJSON.parse(decrypt(_rs.db_8)) : void 0;
                          const _data_9 = _rs.db_9 ? rawJSON.parse(decrypt(_rs.db_9)) : void 0;
                          const _data_10 = _rs.db_10 ? rawJSON.parse(decrypt(_rs.db_10)) : void 0;
                          if (!isNaN(Date.parse(_data_0)) && new Date(_data_0) < new Date() && inspectLicense()?.inspect(_data_R)) {
                            const keys = await GMlistValues();
                            keys.forEach(key => void GMdeleteValue(key));
                            saveData("_FONTS_SET_", _data_1);
                            saveData("_EXCLUDE_SITES_", _data_2);
                            saveData("_DOMAINS_FONTS_SET_", _data_3);
                            saveData("_CUSTOM_FONTLIST_", _data_4);
                            _data_6 && saveData("_MONOSPACED_FONTLIST_", _data_6);
                            _data_7 && saveData("_MONOSPACED_SITERULES_", _data_7);
                            _data_8 && saveData("_MONOSPACED_FEATURE_", _data_8);
                            _data_9 && saveData("_FONTSCALE_DEF_", _data_9);
                            _data_10 && saveData("_FONTOVERRIDE_DEF_", _data_10);
                            if (_data_5) {
                              _data_5.curVersion = def.var.curVersion;
                              _data_5.rebuild = void 0;
                              saveData("_CONFIGURE_", _data_5);
                            } else DEBUG("no configure data");
                            const messageText = IS_CHN
                              ? `<p class="${def.const.seed}_cdg">本地备份数据还原完毕！</p><p>当前页面将在您确认后自动刷新。</p>`
                              : `<p class="${def.const.seed}_cdg">Local backup data restored completly!</p><p>The page will be refreshed after confirming.</p>`;
                            const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "数据还原成功" : "Data Restored Successfully"];
                            let backupDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                            if (await backupDialog.respond()) closeConfigurePage({ isReload: true });
                            backupDialog = null;
                          } else throw new Error("Invalid Data Error");
                        } catch (e) {
                          ERROR("FileReader.load:", e.message);
                          const messageText = IS_CHN
                            ? `<p class="${def.const.seed}_cb8">数据校验错误，请选择正确的本地备份文件！</p>`
                            : `<p class="${def.const.seed}_cb8">Data validation error, please recheck the file!</p>`;
                          const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "数据文件错误" : "Data File Error"];
                          let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                          if (await errorDialog.respond()) qS(`#${def.id.backup}`, def.const.configIf)?.click();
                          errorDialog = null;
                        }
                      },
                      false
                    );
                    reader.readAsText(thatFile);
                    reader = null;
                  } catch (e) {
                    ERROR("<Load file not exist>", e.name);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_idg">载入文件不存在，请选择要还原的备份文件！</p>`
                      : `<p class="${def.const.seed}_idg">Load file not exist, please select one to restore!</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "没有文件载入" : "No File Loading"];
                    let nothingDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await nothingDialog.respond()) qS(`#${def.id.backup}`, def.const.configIf)?.click();
                    nothingDialog = null;
                  }
                }
                frDialog = null;
              } catch (e) {
                ERROR("LoadBackupData:", e.message);
              }
            });
          }

          function controlCancelButton(cancelT) {
            cancelT?.addEventListener("click", () => void closeConfigurePage({ isReload: false }));
          }
        }

        async function fontCheck_DetectOnce() {
          const fontReady = await isFontReady();
          let checkFont = new FontFaceSetObserver();
          const fontAvailable = new Set();
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
            checkFont.destroy();
          }
          const fontData = [...fontAvailable.values()].sort((a, b) => a.sort - b.sort);
          checkFont = null;
          return fontData;
        }

        async function getCurrentFontName(isOverride, fontName, defaultName) {
          def.var.fontNamePh = IS_CHN ? "当前字体：" : "Current: ";
          def.var.reFontFace = def.var.curFont = defaultName;
          if (isOverride) {
            def.var.reFontFace = IS_CHN ? `未知字体名（请重新添加该自定义字体: ${fontName}）` : `Unknown (Re-Add Font: ${fontName})`;
            def.var.curFont = IS_CHN ? "未知字体名" : "Unknown";
            const fontCheckList = await getMergedFontCheckList();
            for (let i = 0, l = fontCheckList.length; i < l; i++) {
              if (fontCheckList[i].en === fontName || convertToUnicode(fontCheckList[i].ch) === fontName) {
                def.var.curFont = fontName.includes("\\") ? `` : ` (${fontCheckList[i].en})`;
                def.var.reFontFace = fontCheckList[i].ch + def.var.curFont;
                def.var.curFont = fontCheckList[i].ch;
                break;
              }
            }
          }
          const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontId} input`, def.const.configIf);
          if (!inputFont) return;
          inputFont.setAttribute("placeholder", def.var.fontNamePh + def.var.curFont);
          inputFont.addEventListener("mouseover", () => void inputFont.setAttribute("placeholder", IS_CHN ? "输入关键字可检索字体" : "Enter some keywords"));
          inputFont.addEventListener("mouseout", () => void inputFont.setAttribute("placeholder", `${def.var.fontNamePh}${def.var.curFont}`));
        }

        function closeConfigurePage({ isReload }) {
          const container = qS(`#${def.id.container}`, def.const.configIf);
          FrDialogBox.closure();
          if (container) {
            def.array.values.length = 0;
            container.classList.remove(`${def.const.seed}_op1`);
            sleep(5e2)(safeRemove("fr-colorpicker"))
              .then(r => r && safeRemove("fr-configure") && qS(`dialog#${def.const.dialog}`))
              .then(closeDialogModel);
            if (isReload === false && isPreview) restoreSavedPreview();
          }
          isReload === true && refresh();
        }

        function rangeSliderWidget(listener, target, bits, isOne = false) {
          if (!listener || !target) return;
          listener.addEventListener("input", function () {
            setSliderProperty(this, this.value, bits);
            target.value = Number(this.value) === (isOne ? 1 : 0) ? "OFF" : Number(this.value).toFixed(bits);
            target._value_ = Number(this.value).toFixed(bits);
            let queryNode;
            switch (listener.id) {
              case def.id.shadow:
                queryNode = qS(`#${def.id.shadowColor}`, def.const.configIf);
                changeNodeClass(target.value === "OFF", queryNode, `${def.const.seed}_none`);
                break;
              case def.id.scaleSize:
                queryNode = qS(`#${def.id.fviewport}`, def.const.configIf);
                isFixViewport && changeNodeClass(target.value === "OFF", queryNode, `${def.const.seed}_hidden`);
                break;
              case def.id.stroke:
                queryNode = qS(`#${def.id.fstroke}`, def.const.configIf);
                IS_REAL_BLINK && changeNodeClass(target.value === "OFF", queryNode, `${def.const.seed}_hidden`);
                break;
            }
            queryNode = null;
          });
        }

        function expandOrCollapse(button, textarea, node) {
          if (!button || !textarea || !node) return;
          const at = button.attributes["fr-button-switch"];
          button.addEventListener("click", () => {
            if (at.value === "ON") {
              textarea.classList.add(`${def.const.seed}_none`);
              button.textContent = "\u2228";
              node.classList.add(`${def.const.seed}_hmh35`);
              at.value = "OFF";
            } else {
              textarea.classList.remove(`${def.const.seed}_none`);
              button.textContent = "\u2227";
              node.classList.remove(`${def.const.seed}_hmh35`);
              at.value = "ON";
            }
          });
        }

        function saveChangeStatus(input, initVal, button, valArray, isOne = false) {
          try {
            if (!input) return;
            if (input.type !== "text") {
              const method = input.type === "textarea" ? "input" : "change";
              input.addEventListener(method, () => {
                const newVal = input.type === "checkbox" ? input.checked : input.value;
                setEffectIntoSubmit(newVal, initVal, valArray, input, button);
              });
            } else {
              Object.defineProperty(input, "_value_", {
                enumerable: true,
                configurable: true,
                get: function () {
                  return this.value;
                },
                set: newVal => {
                  deBounce({ fn: setEffectIntoSubmit, delay: 1e2, timer: input.id })(newVal, initVal, valArray, input, button, isOne);
                },
              });
            }
          } catch (exp) {
            ERROR("SaveChangeStatus:", exp);
            def.array.exps.push(`[saveChangeStatus]: ${exp}`);
          }
        }

        function setEffectIntoSubmit(newVal, initVal, valArray, input, button, isOne = false) {
          try {
            if (!button || !input) return;
            const _thatoffvalue = isOne ? 1 : 0;
            const _otherVal = typeof newVal === "string" && newVal.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : newVal;
            const _value = typeof input.dataset.frType !== "undefined" ? (newVal === "OFF" ? _thatoffvalue : Number(newVal)) : _otherVal;
            if (_value !== initVal) !valArray.includes(input.id) && valArray.push(input.id);
            else valArray.Remove(input.id);
            isPreview && DEBUG("changed Element IDs:\r\n", (def.array.values = valArray));
            if (valArray.length > 0) {
              !button.classList.contains(def.class.anim) && button.classList.add(def.class.anim);
              isPreview && changePreviewButtonStyle(button, valArray);
            } else {
              button.classList.contains(def.class.anim) && button.classList.remove(def.class.anim);
              isPreview && restoreSaveButton(button, valArray);
            }
          } catch (exp) {
            ERROR("SetEffectIntoSubmit:", exp);
          }
        }

        function restoreSavedPreview() {
          def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize));
          def.var.preview && deBounce({ fn: correctBoldStrokeProcess({ Scenes: "recover", Permit: CONST_VALUES.fixStroke }), delay: 1e2, timer: "recover" })();
          loadPreview(def.var.preview);
          delete def.var.preview;
        }

        function restoreSaveButton(button) {
          button.textContent = IS_CHN ? "\u4fdd\u5b58" : "Save";
          button.removeAttribute("style");
          button.removeAttribute("v-Preview");
          restoreSavedPreview();
        }

        function changePreviewButtonStyle(button) {
          button.textContent = IS_CHN ? `\u9884\u89c8` : `\ud835\udc77\ud835\udc93\ud835\udc86\ud835\udc97`;
          button.title = IS_CHN ? "" : "Preview";
          button.setAttribute("style", "background-color:#ff7f50!important;border-color:#ff7f50!important");
          button.setAttribute("v-Preview", "true");
        }

        function addSingleQuoteForItem(fontArray) {
          if (!Array.isArray(fontArray)) return INITIAL_VALUES.fontSelect;
          const uniqueItems = uniq(fontArray.filter(Boolean).map(item => `'${item}'`));
          return uniqueItems.length > 0 ? uniqueItems.join(",") : INITIAL_VALUES.fontSelect;
        }

        function convertFullToHalf(str) {
          return str
            .split("")
            .map(char => {
              const charCode = char.charCodeAt(0);
              if (charCode === 12288) {
                return String.fromCharCode(charCode - 12256);
              } else if (charCode >= 65281 && charCode <= 65374) {
                return String.fromCharCode(charCode - 65248);
              } else return char;
            })
            .join("");
        }

        function reportErrorToAuthor(exps, showDialogBox = IS_DEBUG) {
          if (!showDialogBox || !Array.isArray(exps)) return;
          sleep(6e2)(closeConfigurePage({ isReload: false })).then(async () => {
            try {
              if (qS("fr-dialogbox[fr-error]")) return;
              let errorList = "";
              exps.forEach((exp, i, array) => void (errorList += `${i + 1}、${exp}${i + 1 !== array.length ? "\u3000<br/>" : ""}`));
              const errorNoticeHTML = IS_CHN
                ? `<p class="${def.const.seed}_ccr ${def.const.seed}_f14">脚本在运行时发生了重大异常或错误，若在『刷新页面』后依然报错，请通过『反馈问题』及时告知作者，感谢您的反馈！<br/><kbd id="${def.const.seed}_kbd">以下信息会自动保存至您的剪切板</kbd></p>`
                : `<p class="${def.const.seed}_ccr ${def.const.seed}_f14">If an error occured in the script and still occured after reloading, please report to the author in time, Thanks.<br/><kbd id="${def.const.seed}_kbd">The following will be saved to the clipboard</kbd></p>`;
              const infoRow1 = IS_CHN
                ? `<li>浏览器信息：${rawJSON.stringify(navigatorInfo)}\u3000</li><li>脚本扩展信息：${GMscriptHandler} v${GMversion}\u3000</li>`
                : `<li><b>BrowserInfo:</b> ${rawJSON.stringify(navigatorInfo)}\u3000</li><li><b>ScriptManager:</b> ${GMscriptHandler} v${GMversion}\u3000</li>`;
              const infoRow2 = IS_CHN
                ? `<li>脚本版本信息：v${def.var.curVersion}\u3000</li><li>当前访问域名：${CUR_PROTOCOL}//${CUR_HOST}<span hidden> ${CUR_HOST_PATH}</span>\u3000</li>`
                : `<li><b>ScriptVersion:</b> v${def.var.curVersion}\u3000</li><li><b>DomainName:</b> ${CUR_PROTOCOL}//${CUR_HOST}<span hidden> ${CUR_HOST_PATH}</span>\u3000</li>`;
              const infoRow3 = IS_CHN
                ? `<li>错误信息列表：\u3000<span class="${def.const.seed}_block ${def.const.seed}_ctan">${errorList}</span></li>`
                : `<li><b>ErrorsList:</b>\u3000<span class="${def.const.seed}_block ${def.const.seed}_ctan">${errorList}</span></li>`;
              const messageText = `${errorNoticeHTML}<p><ul id="${def.const.seed}_copy_to_author">${infoRow1}${infoRow2}${infoRow3}</ul></p>`;
              const [trueButtonText, falseButtonText, titleText] = [IS_CHN ? "反馈问题" : "FeedBack", IS_CHN ? "刷新页面" : "Reload", IS_CHN ? "错误报告" : "Error Report"];
              let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, messageText, titleText });
              frDialog.container.setAttribute("fr-error", true);
              const copyText = qS(`#${def.const.seed}_copy_to_author`, def.const.dialogIf)
                .textContent.replace(/\u3000/g, "\n")
                .replace(/\u0020\u0020/g, "")
                .replace(/\n\n/g, "\n")
                .trim();
              def.array.exps.length = 0;
              if (await frDialog.respond()) {
                GMsetClipboard("```log\n" + copyText + "\n```");
                GMopenInTab(`${def.url.feedback}/new?assignees=F9y4ng&template=bug_report.md`, false);
              } else refresh();
              frDialog = null;
            } catch (e) {
              ERROR("ReportErrorToAuthor:", e.message);
            }
          });
        }

        function getStyleLoadStatus() {
          if (!IS_DEBUG || !IS_CURRENTSITE_ALLOWED || !IS_INTERNALSTYLE_ALLOWED) return;
          sleep(2e3, { useCachedSetTimeout: true })
            .then(() => getMainStyleElements({ currentScope: true }))
            .then(style => void DEBUG(`INSERTED STYLE${IS_IN_FRAMES}.ID: %c${style?.id}`, "color:#008080;font:italic 700 12px/140% ui-monospace,monospace"));
        }

        /* FIX_CANVAS_FONT_RENDERING. NEW UPDATE: 2024-08-24 F9Y4NG */

        function overrideCanvasFont(renderFont) {
          const fontReg = /^((?:[a-z]+|[0-9]+)\s)?(\d*\.?\d+(?:px|em|pt|%|rem)\s)?(.+)$/i;
          const fontName = `${CONST_VALUES.fontSelect},${INITIAL_VALUES.fontBase}`;
          overrideMethod("fillText", def.var.fillText);
          overrideMethod("strokeText", def.var.strokeText);

          function modifyFont(regexp, fontText) {
            if (fontText.includes(renderFont)) return fontText;
            const matches = fontText?.match(regexp);
            return matches ? `${matches[1] ?? ""} ${matches[2] ?? ""} ${fontName}`.trim() : fontText;
          }

          function overrideMethod(methodName, originalMethod) {
            CanvasRenderingContext2D.prototype[methodName] = function (...args) {
              if (!this.frFontFace) {
                this.font = modifyFont(fontReg, this.font);
                if (methodName === "fillText" && !/^bold|^[6789]00/i.test(this.font)) {
                  this.shadowColor = shadow_c;
                  this.shadowBlur = shadow_r;
                }
              }
              originalMethod.call(this, ...args);
            };
          }
        }

        /* FIX_FONT_BOLD_STROKE_STYLE_ERRORS. NEW UPDATE: 2024-08-10 F9Y4NG */

        function correctBoldStrokeProcess({ Fixedstyle, Scenes, Permit } = {}) {
          if (!checkCorrectPermission(Scenes ?? (IS_CURRENTSITE_ALLOWED && CONST_VALUES.fixStroke))) return () => {};
          const mouseEventHandlers = {};
          const styleMap = new WeakMap();
          const observeNodeSet = new Set();
          const localFlag = Boolean(localStorages?.getItem(def.const.flagName));
          const sessionFlag = Boolean(sessionStorages?.getItem(def.const.flagName));
          const checkConflict = { flag: localFlag, previous: [], sameCount: 0, maxCount: 50 };
          const exNodeSet = new Set(def.const.queryString.split(",").filter(i => i.indexOf("*") === -1));
          const changeAttribute = createChangeAttribute(def.const.boldAttrName, !localFlag);
          def.var.fixObs = def.var.fixObs ?? new MutationObserver(fixBoldProcess);
          def.var.fixCfg = def.var.fixCfg ?? { attributeOldValue: true, childList: true, subtree: true };
          switch (Scenes) {
            case "iframe":
            case "preview":
              return correctBoldPassive;
            case "recover":
              Fixedstyle = Permit ? fixBoldTextStyle : "";
              return correctBoldPassive;
            default:
              Fixedstyle = Fixedstyle ?? fixBoldTextStyle;
              return observeBoldElements;
          }

          function checkCorrectPermission(permission) {
            return IS_CAUSED_BOLDSTROKEERROR && IS_INTERNALSTYLE_ALLOWED && Boolean(permission);
          }

          function querySelectorAllShadows(selector, root) {
            const stack = [root];
            const result = [];
            while (stack.length) {
              const node = stack.pop();
              const nodes = qA(selector, node).filter(item => item.nodeType === Node.ELEMENT_NODE);
              result.push(...nodes);
              nodes.forEach(el => el.shadowRoot && stack.push(el.shadowRoot) && processShadowRootNode(el.shadowRoot));
            }
            return result;
          }

          function createChangeAttribute(value, term) {
            const compoundFns = el => void (term && el.removeAttribute(value), el.classList.add(value));
            return {
              add: el => void (checkConflict.flag ? compoundFns(el) : el.setAttribute(value, "")),
              del: el => void (checkConflict.flag ? el.classList.remove(value) : el.removeAttribute(value)),
            };
          }

          function checkNodesForFix(node, checkList = [Node.ELEMENT_NODE, Node.DOCUMENT_NODE, Node.DOCUMENT_FRAGMENT_NODE]) {
            return node && checkList.includes(node.nodeType) && !exNodeSet.has(getNodeName(node)) && !/watermark/i.test(getNodeKey(node));
          }

          function getSuitableElements(expr, node) {
            const elementsArray = qA(expr, node).filter(item => item.nodeType === Node.ELEMENT_NODE);
            if (node.nodeType === Node.ELEMENT_NODE) elementsArray.unshift(node);
            return elementsArray;
          }

          function getNodeKey(node) {
            const attrArray = [];
            for (let { name, value } of setIterator(node.attributes)) {
              if (name !== def.const.boldAttrName) attrArray.push(`${name}:${value.replace(def.const.boldAttrName, "").replace(/\s/g, "")}`);
            }
            return `${getNodeName(node)}::${attrArray.join("::")}`;
          }

          function isBold(element) {
            if (styleMap.has(element)) return styleMap.get(element).fontWeight >= 600;
            const style = gCS(element);
            styleMap.set(element, style);
            return style.fontWeight >= 600;
          }

          function getBoldStyles(elementsArray) {
            return elementsArray.filter(el => el?.nodeType === Node.ELEMENT_NODE).map(node => ({ isbold: isBold(node), node }));
          }

          function boldFixedHandler({ checkedNode, uncheckedNode }) {
            const item = checkedNode?.node ?? uncheckedNode;
            if (!item || !checkNodesForFix(item, [Node.ELEMENT_NODE])) return;
            const bold = checkedNode?.isbold ?? isBold(uncheckedNode);
            const hasFixedAttr = item.hasAttribute(def.const.boldAttrName) || item.classList.contains(def.const.boldAttrName);
            const changeHandler = () => void (!hasFixedAttr ? changeAttribute.add(item) : changeAttribute.del(item));
            if (hasFixedAttr !== bold) CONST_VALUES.lazyload ? global[def.const.raf](changeHandler) : changeHandler();
          }

          function getAndProcessBoldStyles(nodes) {
            if (!Array.isArray(nodes) || nodes.length === 0) return;
            const items = getBoldStyles(nodes);
            items.forEach(checkedNode => void boldFixedHandler({ checkedNode }));
          }

          function filterArrayDiffToStr(arrA, arrB) {
            const [setA, setB] = [new Set(arrA), new Set(arrB)];
            return [...arrA.filter(x => !setB.has(x)), ...arrB.filter(y => !setA.has(y))].join();
          }

          function hasFontStyleChange(newValue, oldValue) {
            const [oldArray, newArray] = [uniq(oldValue.split(";")), uniq(newValue.split(";"))];
            const diff = filterArrayDiffToStr(oldArray, newArray);
            return !/font:|font-weight:/i.test(diff);
          }

          function shadowRootNodeInsertCss(host, syncStyle) {
            if (!(host instanceof ShadowRoot)) return;
            const hostNodeName = getNodeName(host.host);
            const curSyncStyle = syncStyle ? `:host(${hostNodeName}){--fr-no-stroke:0px transparent;--fr-fix-shadow:${textShadowFix}}${syncStyle}` : ``;
            applyStylesToShadowRoot(host, curSyncStyle, `${hostNodeName}-fixboldstroke`);
          }

          function handleRootNodeObserve(context, observer) {
            context.addEventListener("mouseover", handleMouseEvents);
            context.addEventListener("mouseout", handleMouseEvents);
            observer.observe(context, def.var.fixCfg);
            observeNodeSet.add(context);
          }

          function correctBoldPassive(event = global.event?.type, rootElement = document) {
            try {
              const elements = querySelectorAllShadows(`:not(${def.const.queryString})`, rootElement);
              DEBUG(`CorrectBold.stroke.Passive${IS_IN_FRAMES}:`, { eventType: Scenes ?? event ?? "unknown" });
              if (Permit !== false) getAndProcessBoldStyles(elements);
            } catch (e) {
              ERROR("correctBoldPassive:", e.message);
            }
          }

          function fixBoldProcess(mutationsList, observer) {
            try {
              if (sessionFlag) return conflictReport();
              const subtrees = new Set();
              observer.disconnect();
              checkConflictCallback(mutationsList, checkConflict.previous);
              processChildListMutations(mutationsList, subtrees);
              processAttributesMutations(mutationsList, subtrees, observer);
              mutationListMonitor(subtrees, observer);
              reconnectObserver(observer, observeNodeSet);
            } catch (e) {
              if (e.message.includes("callback conflict")) handleCallbackLimit(observer);
              ERROR("fixBoldProcess:", e.message);
            }
          }

          function processShadowRootNode(shadow) {
            shadowRootNodeInsertCss(shadow, Fixedstyle);
            if (Permit === false) def.var.fixObs.disconnect();
            else if (Permit || typeof Scenes === "undefined") {
              if (observeNodeSet.has(shadow)) return;
              handleRootNodeObserve(shadow, def.var.fixObs);
            }
          }

          function processNodes(treeNode, observer) {
            if (!checkNodesForFix(treeNode)) return;
            const pendingNodes = new Set();
            const subtreeNodes = getSuitableElements(`:not(${def.const.queryString})`, treeNode);
            subtreeNodes.forEach(item => {
              pendingNodes.add(item);
              const shadow = item.shadowRoot;
              if (!shadow) return;
              shadowRootNodeInsertCss(shadow, Fixedstyle);
              if (!observeNodeSet.has(shadow)) handleRootNodeObserve(shadow, observer);
              processNodes(shadow, observer);
            });
            pendingNodes.add(treeNode instanceof ShadowRoot ? treeNode.host : treeNode);
            getAndProcessBoldStyles(asArray(pendingNodes));
          }

          function mutationListMonitor(treeNodes, observer) {
            const iterator = setIterator(treeNodes);
            ProcessNextBatch(iterator, 1e2, observer);
          }

          function ProcessNextBatch(iterator, batchSize, observer) {
            let result = iterator.next();
            let count = 0;
            while (!result.done && count < batchSize) {
              const treeNode = result.value;
              processNodes(treeNode, observer);
              result = iterator.next();
              count++;
            }
            if (!result.done) raf.setTimeout(ProcessNextBatch, 0, iterator, batchSize, observer);
          }

          function processChildListMutations(mutationsList, subtrees) {
            for (const mutation of mutationsList) {
              const { target, type, addedNodes, removedNodes } = mutation;
              if (type !== "childList") continue;
              addedNodes.forEach(node => void handleAddedNode(node, subtrees));
              removedNodes.forEach(node => void handleRemovedNode(node));
              if (checkNodesForFix(target)) subtrees.add(target);
            }
          }

          function processAttributesMutations(mutationsList, subtrees) {
            for (const mutation of mutationsList) {
              const { target, type } = mutation;
              if (type === "attributes" && checkNodesForFix(target, [Node.ELEMENT_NODE])) {
                const ChangedValue = checkAttributeChange(mutation, target);
                if (ChangedValue === true) continue;
                else if (ChangedValue.newValue !== ChangedValue.oldValue) subtrees.add(target);
              }
            }
          }

          function handleAddedNode(node, subtrees) {
            if (checkNodesForFix(node, [Node.ELEMENT_NODE])) subtrees.add(node);
          }

          function handleRemovedNode(node) {
            if (!checkNodesForFix(node)) return;
            styleMap.delete(node) && asArray(node.children).forEach(child => styleMap.delete(child));
            const shadow = node.shadowRoot;
            if (!shadow) return;
            observeNodeSet.delete(shadow);
            shadow.removeEventListener("mouseover", handleMouseEvents);
            shadow.removeEventListener("mouseout", handleMouseEvents);
          }

          function reconnectObserver(observer, observeNodeSet) {
            observeNodeSet.forEach(node => void observer.observe(node, def.var.fixCfg));
          }

          function hasFixedBoldFlagChange(newValue, oldValue, className) {
            const [parsedNewValue, parsedOldValue] = [toString(newValue), toString(oldValue)];
            if (!parsedOldValue.includes(className) && parsedNewValue.includes(className)) return true;
            if (parsedOldValue.includes(className) && !parsedNewValue.includes(className)) return true;
          }

          function checkAttributeChange(mutation, target) {
            let oldValue, newValue;
            switch (mutation.attributeName) {
              case "style":
                oldValue = mutation.oldValue?.replace(/\s/g, "") ?? "";
                newValue = target.style?.cssText?.replace(/\s/g, "") ?? "";
                if (newValue !== oldValue && hasFontStyleChange(newValue, oldValue)) return true;
                break;
              case "class":
                oldValue = mutation.oldValue ?? "";
                newValue = target.className?.baseVal ?? target.className ?? "";
                if (newValue !== oldValue && hasFixedBoldFlagChange(newValue, oldValue, def.const.boldAttrName)) return true;
                break;
              default:
                if (mutation.attributeName === def.const.boldAttrName) return true;
                oldValue = mutation.oldValue;
                newValue = target.getAttribute(mutation.attributeName);
                break;
            }
            return { oldValue, newValue };
          }

          function mouseEventsHandler(event) {
            const target = event.composedPath()[0] ?? event.target;
            if (!checkNodesForFix(target, [Node.ELEMENT_NODE])) return;
            const { transition, transitionDelay, transitionDuration } = getComputedStyle(target);
            if (["all 0s ease 0s", "none"].includes(transition)) return boldFixedHandler({ uncheckedNode: target });
            const delayTime = (parseFloat(transitionDelay) || 0 + parseFloat(transitionDuration) || 0) * 1e3;
            raf.setTimeout(boldFixedHandler, delayTime, { uncheckedNode: target });
          }

          function handleMouseEvents(event) {
            const { type } = event;
            mouseEventHandlers[type] = mouseEventHandlers[type] || deBounce({ fn: mouseEventsHandler, delay: 16.7, timer: type, immed: type === "mouseout" });
            mouseEventHandlers[type](event);
          }

          function handleNavigateEvents(event) {
            const { isTrusted, navigationType } = event ?? {};
            if (isTrusted) deBounce({ fn: correctBoldPassive, timer: "navigate", delay: 50 })(navigationType);
          }

          function handleHistoryEvents() {
            const { type, isTrusted } = global.event ?? {};
            if (isTrusted) deBounce({ fn: correctBoldPassive, timer: "history", delay: 50 })(type);
          }

          function checkConflictCallback(currentList, previousList) {
            if (isMutationsListEqual(currentList, previousList)) {
              if (checkConflict.sameCount > checkConflict.maxCount) {
                if (checkConflict.flag) {
                  sessionStorages?.setItem(def.const.flagName, 12388);
                  return conflictReport();
                } else {
                  __console("warn", "[Warning]", "Potential infinite loop detected, switching to <classList> mode.");
                  localStorages?.setItem(def.const.flagName, 12339);
                  checkConflict.flag = true;
                }
              }
              checkConflict.sameCount++;
            } else checkConflict.sameCount = 0;
            checkConflict.previous = currentList;
          }

          function conflictReport() {
            __console("warn", "[Warning]", "Callback infinite loop occurred, suspending observer.");
            throw new Error(`Found callback conflict! Try the workaround to turn on the 'Lazyload' option.`);
          }

          function isMutationsListEqual(mutationsListA, mutationsListB) {
            return mutationsListA.length === mutationsListB.length && mutationsListA.every((mutation, index) => isEqualMutation(mutation, mutationsListB[index]));
          }

          function isEqualMutation(mutationA, mutationB) {
            return (
              compareEventType(mutationA.type, mutationA.type, global.event) &&
              compareNodeLists([...mutationA.addedNodes, ...mutationA.removedNodes], [...mutationB.addedNodes, ...mutationB.removedNodes])
            );
          }

          function compareEventType(type1, type2, event) {
            return !(event instanceof MouseEvent) && type1 === "childList" && type1 === type2;
          }

          function compareNodeLists(nodeList1, nodeList2) {
            if (nodeList1.length !== nodeList2.length) return false;
            for (let i = 0; i < nodeList1.length; i++) {
              if (compareNodes(nodeList1[i], nodeList2[i])) return false;
            }
            return true;
          }

          function compareNodes(node1, node2) {
            return !checkNodesForFix(node1, [Node.ELEMENT_NODE]) || !checkNodesForFix(node2, [Node.ELEMENT_NODE]) || getNodeKey(node1) !== getNodeKey(node2);
          }

          function observeBoldElements() {
            addLoadEvents.addFinalFn(correctBoldPassive);
            if (global.navigation) global.navigation.addEventListener("navigate", handleNavigateEvents);
            else {
              global.addEventListener("pushState", handleHistoryEvents);
              global.addEventListener("replaceState", handleHistoryEvents);
            }
            handleRootNodeObserve(document, def.var.fixObs);
            DEBUG(`CorrectBold.stroke.Active${IS_IN_FRAMES}:`, { eventType: "init" });
          }

          function handleCallbackLimit(observer) {
            observer.disconnect();
            if (global.navigation) global.navigation.removeEventListener("navigate", handleNavigateEvents);
            else {
              global.removeEventListener("pushState", handleHistoryEvents);
              global.removeEventListener("replaceState", handleHistoryEvents);
            }
            observeNodeSet.forEach(shadow => {
              shadow.removeEventListener("mouseover", handleMouseEvents);
              shadow.removeEventListener("mouseout", handleMouseEvents);
            });
            delete def.var.fixObs && observeNodeSet.clear();
            delete def.var.fixCfg && exNodeSet.clear();
          }
        }

        /* FIX_VIEWPORT_ZOOM_STYLE_ERRORS. NEW UPDATE: 2024-08-10 F9Y4NG */

        function correctViewportUnits() {
          const vRegexp = /(\.?\d+(?:\.\d+)?)([dsl]?(?:v[wh]|vmin|vmax))\b(?![\\=/+_-])/g;
          const uRegexp = /url\((?<mark>['"]?)(?!\/|https?:)([\w%-/.?=]+)\k<mark>\)/g;
          const permission = IS_CURRENTSITE_ALLOWED && IS_INTERNALSTYLE_ALLOWED && isFixViewport && CONST_VALUES.fixViewport && def.var.curScale !== 1;
          if (permission) {
            addLoadEvents.addFinalFn(correctViewport);
            DEBUG(`correctUnit.Viewport.Active${IS_IN_FRAMES}:`, { eventType: "init" });
          }
          return [permission, correctViewport];

          function correctViewport(nodeName) {
            if (nodeName !== "style") fixViewportLinks();
            if (nodeName !== "link") fixViewportStyles();
          }

          function fixViewportLinks() {
            qA(`link[rel~="stylesheet" i]:not([data-fr-processed])`).forEach(linkNode => {
              let linkHref = linkNode.href || linkNode.dataset.href;
              if (!linkHref) return;
              const url = CUR_PROTOCOL === "https:" ? linkHref.replace(/^http:/, "https:") : linkHref;
              linkNode.dataset.frProcessed = "ignore";
              getLinkStyleAndParseCss(url, linkNode);
            });
          }

          async function getLinkStyleAndParseCss(url, node) {
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`Network response was not ok. Status: ${response.status}`);
              let cssText = await response.text();
              if (!cssText || !vRegexp.test(cssText)) return;
              const styleText = replaceBaseURL(replaceStyle(cssText, vRegexp, def.var.curScale), url);
              if (styleText) applyStyleToOriginLink(styleText, url, node);
            } catch (e) {
              node.dataset.frProcessed = "error";
              ERROR("getLinkStyleAndParseCss:", { url, msg: e.message });
            }
          }

          function applyStyleToOriginLink(styleText, url, node) {
            const parent = node.parentNode ?? document.head;
            const style = cE("style", { type: "text/css", textContent: `/*# sourceURL=${url} */\r\n${styleText}` });
            for (const { name, value } of setIterator(node.attributes)) {
              if (!["href", "rel"].includes(name)) style.setAttribute(name, value);
            }
            style.dataset.href = url;
            style.dataset.frProcessed = "link";
            parent.replaceChild(style, node);
            DEBUG("Fixed.viewport.Link:", { linkNode: style });
          }

          function fixViewportStyles() {
            qA(`style:not([data-fr-processed]):not(.darkreader)`).forEach(styleNode => {
              if (asArray(styleNode.attributes).Find(i => /^(?:fr|gb)-css-[0-9a-f]{8}$/.test(toString(i.name)))) return;
              styleNode.dataset.frProcessed = "ignore";
              try {
                let cssText = styleNode.textContent;
                if (!cssText || !vRegexp.test(cssText)) return;
                cssText = replaceStyle(cssText, vRegexp, def.var.curScale);
                styleNode.textContent = cssText;
                styleNode.dataset.frProcessed = "style";
                styleNode.setAttribute("type", "text/css");
                DEBUG("Fixed.viewport.Style:", { styleNode });
              } catch (e) {
                styleNode.dataset.frProcessed = "error";
                ERROR(`fixViewportStyles:`, e.message);
              }
            });
          }

          function replaceStyle(txt, reg, scale) {
            return txt.replace(reg, function (match, num, unit) {
              return String(match ? (num / scale).toFixed(6) : num) + unit;
            });
          }

          function replaceBaseURL(txt, url) {
            url = url.substring(0, url.lastIndexOf("/") + 1);
            return txt.replace(uRegexp, function (match, mark, file) {
              return (mark ? match.replace(new RegExp(mark, "g"), "") : match).replace(file, `${url}${file}`);
            });
          }
        }

        /* CSS_STYLE_PROCESSING_MAIN_THREAD */

        function monitorMainStyleProcess([Permission, extraFunction]) {
          if (!IS_INTERNALSTYLE_ALLOWED || !(CUR_WINDOW_TOP || IS_CURRENTSITE_ALLOWED)) return;
          getHeadElement.getNodeAndObserve().then(insertMainStyleElement); // Fit::Greasemonkey & Userscripts & Loading Delay.
          const mainStyleProcess = mutations => {
            const mainStyle = getMainStyleElements({ currentScope: true });
            mutations.forEach(mutation => handleStyleProcess(mutation, mainStyle));
          };
          const styleObserve = new MutationObserver(mainStyleProcess);
          const config = { childList: true, subtree: true, attributeOldValue: true, attributeFilter: ["id"] };
          styleObserve.observe(document, config);

          function handleStyleProcess(mutation, mainStyle) {
            const { target, type, addedNodes, removedNodes, oldValue } = mutation;
            if (type === "childList") handleChildListMutation(target, addedNodes, removedNodes, mainStyle);
            else if (type === "attributes") handleAttributesMutation(target, oldValue, mainStyle);
          }

          function handleChildListMutation(target, addedNodes, removedNodes, mainStyle) {
            if (target === document.documentElement) updateFlagAtRootElement(target);
            else if (target === document.head) {
              handleAddedNodesMutation(addedNodes, mainStyle);
              handleRemovedNodesMutation(removedNodes);
            }
          }

          function handleAddedNodesMutation(addedNodes, mainStyle) {
            for (const node of addedNodes) {
              const nodeName = getNodeName(node);
              if (!mainStyle && insertMainStyleElement()) break;
              else if (checkStyleNode(node, nodeName)) {
                deBounce({ fn: updateStylePosition, delay: 500, timer: "stylepos" })(nodeName, true);
                Permission && deBounce({ fn: extraFunction, delay: 200, timer: `extra.${nodeName}` })(nodeName);
                break;
              }
            }
          }

          function handleRemovedNodesMutation(removedNodes) {
            for (const node of removedNodes) {
              if (getNodeName(node) === "style" && node.id === def.id.rndStyle && !node.dataset.frRemoved) {
                return insertMainStyleElement({ overwrite: true, isNotify: false }) && INFO(`%c[MO]${IS_IN_FRAMES}[REINSERT]:%c<style> true`, leftStyle("#a52a2a"), rightStyle("#a52a2a"));
              }
            }
          }

          function handleAttributesMutation(target, oldValue, mainStyle) {
            if (target !== document.documentElement) return;
            const [oldId, newId] = [oldValue, target.id || (target.id = def.const.root)];
            if (oldId !== newId) updateStyleWithNewRootID(mainStyle, newId);
          }

          function updateStyleWithNewRootID(styleNode, id) {
            const newStyleText = (styleNode?.textContent ?? tStyle).replace(/\b#\w+\b/g, `#${id}`);
            insertStyle({ target: document.head, id: def.id.rndStyle, cssText: newStyleText, overwrite: true }) &&
              INFO(`%c[MO]${IS_IN_FRAMES}[NEWHTMLID]:%c#${id}`, leftStyle("#1e90ff"), rightStyle("#1e90ff"));
          }

          function updateStylePosition(name, rst) {
            insertMainStyleElement({ overwrite: true, isNotify: false }) && INFO(`%c[MO]${IS_IN_FRAMES}[FINALPOS]:%c<${name}> ${rst}`, leftStyle("#48d1cc"), rightStyle("#48d1cc"));
          }

          function checkStyleNode(node, nodeName) {
            const styleNodeFactor = nodeName === "style" && node.id !== def.id.rndStyle && !node.classList?.contains("darkreader");
            const linkNodeFactor = nodeName === "link" && node.getAttribute("rel")?.includes("stylesheet");
            return styleNodeFactor || linkNodeFactor;
          }
        }

        function monitorBodyIframeProcess() {
          if (!IS_CURRENTSITE_ALLOWED) return;
          const config = { attributeFilter: ["src", "srcdoc", "style"], childList: true, subtree: true };
          const praseIframes = ({ mutations }) => mutations.forEach(mutation => handleIframeProcess(mutation));
          getBodyElement.getNodeAndObserve({ callback: praseIframes, config });

          function handleIframeProcess(mutation) {
            let [{ target, type, addedNodes }, iframeArray = [], condition = ""] = [mutation];
            if (type === "childList" && (condition = "addedNodes")) {
              for (const node of addedNodes) getNodeName(node) === "iframe" ? iframeArray.push(node) : iframeArray.push(...qA("iframe", node));
            } else if ((condition = type) === "attributes" && getNodeName(target) === "iframe" && (target.src || target.srcdoc)) iframeArray.push(target);
            iframeArray.length > 0 && insertStyleInFrames({ condition, nodeArray: iframeArray });
          }
        }

        /* FONT_RENDERING_MAIN_PROCESS */

        void (async function (initMenus) {
          // PREPROCESSING SYSTEM INFORMATION
          if (CUR_WINDOW_TOP) {
            if (await initializeConfigData(reconstruct.flag)) showUpdateInfo(def.var.versionStatus);
            await getCurrentFontName(CONST_VALUES.fontFace, selectedFont, defaultFont);
            showSystemInfo.system();
            showSystemInfo.compat(IS_CHEAT_UA);
            insertMenus(initMenus());
            insertHotkey();
          }
          // FONT RENDERING PROCESS
          monitorMainStyleProcess(correctViewportUnits());
          correctBoldStrokeProcess()();
          monitorBodyIframeProcess();
          correctFontScaleOffset();
          overrideCanvasFont(selectedFont);
          addLoadEvents.addFn(insertStyleInFrames);
          addLoadEvents.addFinalFn(getStyleLoadStatus);
        })(() => {
          if (!CUR_WINDOW_TOP || toString(GMunregisterMenuCommand) === "() => {}") return;
          return GMregisterMenuCommand(`\ufff0\ud83d\udd52 ${IS_CHN ? "正在载入脚本菜单，请稍候…" : "Loading menus, please wait..."}`, refresh);
        });
      })(
        () => {
          const encodedCode = `JUU4JUFBJUIxSlZpWSVFNyU5MCU4OSVFNiU5RiU5MyVFNSVBRCVCQSVFOCU4MiVCQXAyTyVFNiU5MyU5MzAlRTglODUlOTF0JUU1JUIyJTgwJUU1JUFFJTlBJUU4JTg2JUJBZQ==`;
          const executeFunction = URI => {
            const message = IS_CHN ? `\u8bf7\u5b89\u88c5\u4f7f\u7528\u6b63\u7248\u811a\u672c` : `Reinstall the genuine script`;
            __console("error", `${def.var.scriptName}\r\n${message}\x20\x40\x20${URI}`);
            GMregisterMenuCommand(`\ufff0\ud83d\udea8 ${message}`, () => void GMopenInTab(URI));
          };
          return { code: decrypt(encodedCode), callback: executeFunction };
        },
        async () => {
          let config, _config_data_;
          const defaults = {
            maxPersonalSites: 100,
            isBackupFunction: true,
            isPreview: false,
            isFontsize: false,
            isFixViewport: false,
            isHotkey: true,
            isCloseTip: false,
            rebuild: void 0,
            curVersion: void 0,
            globalDisable: false,
            isCustomMono: false,
          };
          const configure = await GMgetValue("_CONFIGURE_");
          if (!configure) {
            saveData("_CONFIGURE_", defaults);
            _config_data_ = defaults;
          } else {
            try {
              config = rawJSON.parse(decrypt(configure));
            } catch (e) {
              ERROR("config.JSON.parse:", e.message);
              def.var.structureError = true;
              config = {};
            }
            _config_data_ = { ...defaults, ...config };
          }
          def.var.versionStatus = _config_data_.curVersion;
          return _config_data_;
        },
        async () => {
          let [monoSiteRules, monoFontList, monoFeature] = await Promise.all(["_MONOSPACED_SITERULES_", "_MONOSPACED_FONTLIST_", "_MONOSPACED_FEATURE_"].map(key => GMgetValue(key)));
          try {
            monoSiteRules = monoSiteRules ? [...rawJSON.parse(decrypt(monoSiteRules))] : [];
          } catch (e) {
            ERROR("Monospaced_siteRules.Array.parse:", e.message);
            monoSiteRules = [];
          }
          try {
            monoFontList = monoFontList ? convertHtmlToText(rawJSON.parse(decrypt(monoFontList))) : "";
          } catch (e) {
            ERROR("Monospaced_Fontlist.String.parse:", e.message);
            monoFontList = "";
          }
          try {
            monoFeature = monoFeature ? convertHtmlToText(rawJSON.parse(decrypt(monoFeature))) : "";
          } catch (e) {
            ERROR("Monospaced_Feature.String.parse:", e.message);
            monoFeature = "";
          }
          return { monoSiteRules, monoFontList, monoFeature };
        },
        async () => {
          const defaultExSite = ["127.0.0.1", "workstation-xi"];
          let exSite = defaultExSite;
          try {
            const exSiteSave = await GMgetValue("_EXCLUDE_SITES_");
            if (exSiteSave) exSite = JSON.parse(decrypt(exSiteSave));
            else saveData("_EXCLUDE_SITES_", defaultExSite);
          } catch (e) {
            ERROR("exSite.JSON.parse:", e.message);
            def.var.structureError = true;
            exSite = defaultExSite;
          }
          return { exSite, exSitesIndex: updateExsitesIndex(exSite) };
        },
        async (isFontsize, isFixViewport) => {
          let domainValue, domainValues, domainValueIndex, fontValue;
          const defaults = {
            fontSelect: INITIAL_VALUES.fontSelect,
            fontFace: INITIAL_VALUES.fontFace,
            fontSmooth: INITIAL_VALUES.fontSmooth,
            fontSize: INITIAL_VALUES.fontSize,
            fixViewport: INITIAL_VALUES.fixViewport,
            fontStroke: INITIAL_VALUES.fontStroke,
            fixStroke: INITIAL_VALUES.fixStroke,
            lazyload: INITIAL_VALUES.lazyload,
            fontShadow: INITIAL_VALUES.fontShadow,
            fixShadow: INITIAL_VALUES.fixShadow,
            shadowColor: INITIAL_VALUES.shadowColor,
            fontCSS: INITIAL_VALUES.fontCSS,
            fontEx: INITIAL_VALUES.fontEx,
            isEditorBlock: matchEditorialSites(INITIAL_VALUES.editorialSites),
          };
          try {
            const [savedDomains, savedFonts] = await Promise.all(["_DOMAINS_FONTS_SET_", "_FONTS_SET_"].map(key => GMgetValue(key)));
            if (savedDomains) {
              domainValues = [...rawJSON.parse(decrypt(savedDomains))];
              domainValueIndex = updateDomainsIndex(domainValues);
              def.var.domainCount = domainValues.length;
              def.var.domainIndex = domainValueIndex;
              domainValue = typeof domainValueIndex !== "undefined" ? { ...defaults, ...domainValues[domainValueIndex] } : null;
            } else saveData("_DOMAINS_FONTS_SET_", []);
            if (savedFonts) {
              fontValue = { ...defaults, ...rawJSON.parse(decrypt(savedFonts)) };
            } else saveData("_FONTS_SET_", defaults);
            const currentValue = domainValue || fontValue || defaults;
            return {
              fontSelect: removeDuplicateFonts(convertHtmlToText(currentValue.fontSelect), INITIAL_VALUES.fontBase),
              fontFace: Boolean(currentValue.fontFace),
              fontSmooth: Boolean(currentValue.fontSmooth),
              fontSize: isFontsize && !currentValue.isEditorBlock ? Number(currentValue.fontSize ?? 1) : defaults.fontSize,
              fixViewport: isFixViewport && !isNaN(currentValue.fontSize) && Boolean(currentValue.fixViewport ?? true),
              fontStroke: Number(currentValue.fontStroke) || 0,
              fixStroke: Boolean(IS_CAUSED_BOLDSTROKEERROR && currentValue.fontStroke && (currentValue.fixStroke ?? true)),
              lazyload: Boolean(currentValue.lazyload && currentValue.fixStroke),
              fontShadow: Number(currentValue.fontShadow) || 0,
              fixShadow: Boolean(currentValue.fixStroke && currentValue.fontShadow && (currentValue.fixShadow ?? false)),
              shadowColor: convertHtmlToText(currentValue.shadowColor),
              fontCSS: convertHtmlToText(currentValue.fontCSS) || INITIAL_VALUES.fontCSS,
              fontEx: convertHtmlToText(currentValue.fontEx) || "",
              isEditorBlock: currentValue.isEditorBlock,
            };
          } catch (e) {
            ERROR("fontData.JSON.Parsing:", e.message);
            def.var.structureError = true;
            return defaults;
          }
        },
        async () => {
          const defaultScaleRule = {
            "smzdm.com": { Element: ["clientWidth"] },
            "bilibili.com": { Element: ["scrollHeight"], HTMLElement: ["offsetHeight"] },
            "www.ithome.com": { Element: ["scrollHeight"] },
          };
          try {
            const storedFontScaleDef = await GMgetValue("_FONTSCALE_DEF_");
            if (storedFontScaleDef) {
              const fontScaleDefRule = JSON.parse(decrypt(storedFontScaleDef));
              if (obj2Str.call(fontScaleDefRule) === "[object Object]" && Object.keys(fontScaleDefRule).length) return fontScaleDefRule;
            }
          } catch (e) {
            ERROR("fontScaleDef.JSON.parse:", e.message);
          }
          saveData("_FONTSCALE_DEF_", defaultScaleRule);
          return defaultScaleRule;
        },
        async () => {
          const defaultFonts = `Arial,Helvetica,Helvetica Neue,Verdana,Georgia,Tahoma,Noto Sans,Open Sans,Segoe UI,Roboto,RobotoDraft,Ubuntu,SimSun,NSimSun,SimHei,FangSong,KaiTi,MingLiU,PMingLiU,PingFangSC-Regular,PingFangSC-Medium,PingFangSC-Semibold,PingFangHK-Regular,PingFangHK-Medium,Microsoft YaHei,SF Pro SC,HanHei SC,{宋体},{楷体},{仿宋},{黑体},{微软雅黑},{微軟正黑體}`;
          const defaultFontRule = defaultFonts.split(",").sort();
          try {
            const fontOverrideDef = await GMgetValue("_FONTOVERRIDE_DEF_");
            const fontOverride = fontOverrideDef ? rawJSON.parse(decrypt(fontOverrideDef)) : defaultFontRule;
            if (Array.isArray(fontOverride) && fontOverride.length > 0) return fontOverride;
          } catch (e) {
            ERROR("fontOverrideDef.JSON.parse:", e.message);
          }
          saveData("_FONTOVERRIDE_DEF_", defaultFontRule);
          return defaultFontRule;
        }
      );
    })(
      createTrustedTypePolicy(),
      (ctx, iframe) => {
        if (toString(GMaddElement) === "() => {}") return ctx.JSON;
        try {
          const f = GMaddElement(document.documentElement, "iframe");
          const { JSON: J } = f.contentWindow;
          safeRemove(f) && DEBUG(`raw.JSON.override${iframe}:%c ${toString(J)}`, "color:#808080");
          return J?.parse && J?.stringify ? J : ctx.JSON;
        } catch (e) {
          return ctx.JSON;
        }
      },
      async () => ({ navigatorInfo: await getNavigatorInfo(), locationInfo: getLocationInfo() })
    );
  },
  (object => {
    return {
      defineMethod,
      ArrayMethods: [
        ["Some", someProxy],
        ["Find", findProxy],
        ["FindIndex", findIndexProxy],
        ["Remove", removeProxy],
      ],
      __protos__: { aS: Array.prototype.slice, oT: Object.prototype.toString, aF: Array.from.bind(Array), gS: getAvailableStorage() },
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

    function getAvailableStorage() {
      const testStorage = storageType => {
        try {
          const testKey = "__fr_storage_test__";
          storageType.setItem(testKey, testKey);
          storageType.removeItem(testKey);
          return storageType;
        } catch (e) {
          return null;
        }
      };
      return { local: testStorage(localStorage), session: testStorage(sessionStorage) };
    }

    function removeProxy(value) {
      for (let i = 0; i < this.length; ++i) {
        if (this[i] === value) return this.splice(i, 1).length;
      }
      return false;
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

    function findIndexProxy(callback, thisArg) {
      for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return i;
      }
      return -1;
    }
  })(Array.prototype)
);
