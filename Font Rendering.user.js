// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字型渲染（自用指令碼）
// @name:en            Font Rendering (Customized)
// @name:ko            글꼴 렌더링(자체 스크립트)
// @name:ja            フォントレンダリング
// @version            2024.11.02.1
// @author             F9y4ng
// @description        无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-CN  无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-TW  無需安裝MacType，最佳化瀏覽器字型渲染效果，讓每個頁面的字型變得更有質感。預設使用“微軟雅黑”字型，也可根據喜好自定義其他字型使用。指令碼針對瀏覽器字型渲染提供了字型重寫、字型平滑、字型縮放、字型描邊、字型陰影、對特殊樣式元素的過濾和許可、自定義等寬字型等高階功能。指令碼支援全域性渲染與個性化渲染功能，可透過“單擊指令碼管理器圖示”或“使用快捷鍵”撥出配置介面進行引數配置。指令碼已相容絕大部分主流瀏覽器及主流指令碼管理器，且相容常用的油猴指令碼和瀏覽器擴充套件。
// @description:en     Enhance browser’s font rendering without installing MacType. This script offers a high-quality, customizable experience with ‘Microsoft YaHei’ font by default. It provides advanced features such as font rewriting, smoothing, scaling, stroking, shadowing, selective element handling and more. Designed for both general and personalized rendering, compatible with popular browsers, script managers & extensions. Configure via the script manager icon or keyboard shortcuts.
// @description:ko     이 스크립트는 MacType을 설치하지 않고도 브라우저의 글꼴 렌더링을 최적화하여 각 페이지의 글꼴을 더 질감 있게 만듭니다. 기본적으로 "Microsoft YaHei"를 사용하며, 사용자의 취향에 따라 다른 글꼴을 사용자 정의할 수 있습니다. 스크립트는 글꼴 재작성, 스무딩, 스케일링, 아웃라인, 그림자, 특수 스타일 요소 필터링 등 고급 기능을 제공합니다. 스크립트 관리자 아이콘을 클릭하거나 단축키를 사용하여 설정 화면을 열 수 있습니다. 대부분의 주요 브라우저와 스크립트 관리자, 일반적인 확장 프로그램과 호환됩니다.
// @description:ja     このスクリプトは、MacTypeをインストールせずにブラウザのフォントレンダリングを最適化し、各ページのフォントをより質感のあるものにします。デフォルトでは「Microsoft YaHei」を使用し、好みに応じて他のフォントをカスタマイズできます。スクリプトは、フォントの書き換え、スムージング、スケーリング、アウトライン、シャドウ、特殊スタイル要素のフィルタリングなどの高度な機能を提供します。スクリプトマネージャのアイコンをクリックするか、ショートカットを使用して設定画面を呼び出すことができます。ほとんどの主流のブラウザやスクリプトマネージャ、一般的な拡張機能と互換性があります。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Font_Rendering_(Customized)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFtklEQVR4nO1WW0yURxSe1rQ1aVMbH9ukTZvG9qXxiUbTF/CCgnLRBVEQIgpdVigoCLtcRC5WvC0iN0EQ0K0uVRZQELRAAS0spIq0CHW3ihdUWFh2/xm0aXrxa2aUBQoGVmv70km+ZOfMOXO+c/acMz8h/69p1sjIiCOltIlS+lCSJEt/f3/l4ODgPPJvLMaYF6X09/v3TaiqvIi68+2wWKwYGhqiNTU1Di/UuSRJcxlj5ms9vVjtEo/ItZkI8dqHTb5pGBoahsFguEoIee2FEWCMJTLGsEV+EOkbT6Ahvk0g0icLR/KqwM+ys7ODX4hzALMlSRr8sdMI2fLtqI/X2wjoohrgsSxOZKGrq+syIWS2xWKZwxiLZYxVWyyWaqvVus1kMr3xzAQYY5/zCBNjCrE3UGNzPorwNRk4pW0ApfSRRqORM8auc32j8TZ6b9wR2RkYGLjV3Nz8/rNE/zJjzHDjeh88lqhwLrZFOM0PKYcusl78Ph5eCx+PJEgShSRJj0ymISg2qbHSSYkVi2KwRXEQZrMFPT09bYSQV+yNfhWPQL2nFDv8C2xRr3VNgnJdjm0ftGo3ztfoRbRpKV8h2GM36uJaURffioCVXyInQyfOMjMzA+wl0NLfPwi3pSqciWkWzoo2n8F6WSrclqhQq7woZAWKCgT57cG9eya4OEXbssNxIqIGbouVGB6yoLOzs33G3cIY+4yzLjpchZhx0YZ5pUOrqUNCdAHSNhyzyX1XJiMi9CAUq/ZNqpMN7rtQXHhW/EXJycluMyJAKa2wDFtF3596ElFdbCvWLNsO2fIEgTBZus1JxqZSOC2MgCbsrNiXRzXgTHSTLUOyFQmcAFpbW88TQmZN53wepfRP3akmhHqpJ0U0Fcoi6xHplWXbR6zJQKzvobG6cdmBSt0FWK3W30JDQxdORyCfUgq/1Sk4+kX1jAgcDqmw1UlVdJOoEVEnqu+E7MBGLQK8U0Ux1tfXf00IeWlK52az+U1K6S+NDZcQ6LHL5iA3pAzr3VOx3mMiAtx3QhNejcOKcptuin8R1Lu1SIotwp4ns4MPMM+lcWhqvAyz2Tzi7Oz88dOKz4OzjAnPRVbwSdulfm4pOF/bhp+NtyeAt5hi9X5UbPvWpuu5JA7uzrGie3jqR+WpAcViRvD7T58+nTclAUmS1j2e+5nIlZcJw+zgk+Lh4fK+vr673d3dXUaj8RrfNzZcxmrn+AkjunJbI3RR9QKV0Y02+TeqFqx0isGVDgP6+/uH5s+f/84kAhaL5T1Jkv5o13fBfakK/m6pohOudFzjBfSro6OjnBDyoV6vTxBEFZnY4Tc2pKZD7LpDUG49JILRarWpU2bBYDCkcQWTyYyrXdfFY8N7uLCwMJ8Q8smTQv2pp/smXJ2icU71eCCdCK/FZpkaCtn+CeCy0VauimmCi2M0bly/g97e3puEkDlTkigrK1N0dHS0GY1Gg16vb5bL5fGEkE959T548GA+J7gr6RiivMdaT+65D6rIXBTmnZ6ArWFZCPfOGHvAvDOg3l0qsqBQKDyf3o+EvE4I4a/YB+OZUkpduHFoUDr2BR4Xl2q3nIProhjcuzsgLh4P/iryqPms4LppAUcRGZYlzhITE5XE3kUpnceNK8suwG2REuGyA6LF8rMrJzkfRfqeUqHDdd0Wq1BT3SLkrq6uG+xybrVa3+JP9OjFLRd/QH5OJZoaLz3V+Sj4bDlyuArft3fbZH19fbfUavVce6IP5Ib52SeREHXguVCUVy5IlJSU7LSHQAQ38veOQ+1eX7Tl+jwTzqT5IcgvURAoLi4uIIS8bDeBS/k+uK2VPRP0OWv/TmDWjAgwxoK40Q5lDta6K58LOxPyR7+os2dM4OHDh28PDw/T6QpupjCZTJKDg4N9naDRaD4qLS3N1el0J54HJSUlhQsWLNhECHnXLgLj1qv/AKb+Lvgv1l/c+5HQxwRN2QAAAABJRU5ErkJggg==
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require            https://update.greasyfork.org/scripts/437214/1467138/frColorPicker.js#sha256-koqLgrwiPGBPR6GZ69ckQskbkBPdfMKnTBSgYaMnfgo=
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

void (function (ctx, sctx, fontRendering, arrayProxy, customFns) {
  "use strict";

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * CUSTOM SCRIPT DEBUGGING, DO NOT TURN ON FOR DAILY USE.                    *
   * SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const IS_OPEN_DEBUG = false;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * LICENSE FOR OPEN SOURCE USE: `GPLv3 ONLY`.                                *
   * THE CODE IS COMPLETELY OPEN AND FREE, AND DOES NOT ACCEPT UNAUTHORIZED    *
   * DISTRIBUTION AS THIRD-PARTY STANDALONE SCRIPTS. IN CASE OF ERRORS, USAGE  *
   * PROBLEMS OR NEW FEATURES, PLEASE FEEDBACK IN GITHUB ISSUES, THANK YOU!    *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const { defineMethod, arrayMethods, object } = arrayProxy;
  const utils = {
    debugging: IS_OPEN_DEBUG,
    info: GM?.info ?? GM_info,
    atob: atob.bind(sctx),
    btoa: btoa.bind(sctx),
    alert: alert.bind(sctx),
    prompt: prompt.bind(sctx),
    confirm: confirm.bind(sctx),
    console: Object.assign(object, ctx.console),
    reconstruct: { flag: false, date: "2024.10.05" },
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
  Object.entries(arrayMethods).forEach(method => void defineMethod(...method));
  fontRendering(ctx, sctx, utils, customFns);
})(
  typeof window !== "undefined" ? window : this,
  (originalWindow => {
    if (typeof GM_addElement === "undefined") return originalWindow;
    try {
      const iframe = GM_addElement(document.documentElement, "iframe");
      const { contentWindow } = iframe;
      iframe.remove();
      return contentWindow;
    } catch (e) {
      return originalWindow;
    }
  })(window),
  function (global, safeWindow, secureVars, customFuntions) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { atob, btoa, alert, prompt, confirm, console, reconstruct, debugging, info: GMinfo } = secureVars;
    const { aF: asArray, oT: getObjectType, gS: storage, iO: immutObj } = customFuntions;
    const GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion ?? "unknown";
    const GMscriptHandler = GMinfo.scriptHandler;
    const GMsetValue = gmSelector("setValue");
    const GMgetValue = gmSelector("getValue");
    const GMdeleteValue = gmSelector("deleteValue");
    const GMlistValues = gmSelector("listValues");
    const GMopenInTab = gmSelector("openInTab");
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

    const { h: CUR_HOST, hN: CUR_HOST_NAME, pN: CUR_HOST_PATH, pT: CUR_PROTOCOL, tH: TOP_HOST, iT: CUR_WINDOW_TOP, fS: IN_FRAMES } = getLocationInfo();
    const def = {
      count: { clickTimer: 0 },
      array: { exps: [], values: [], scaleMatrix: [], props: { window: [], element: [], html: [] } },
      const: {
        seed: generateRandomString(6, "mix"),
        root: generateRandomString(6, "char"),
        raf: Symbol(`𐠱${generateRandomString(8, "hex")}`),
        caf: Symbol(`𐠱${generateRandomString(8, "hex")}`),
        dialog: `fr-dialog-${generateRandomString(8, "hex")}`,
        cssAttrName: `fr-css-${generateRandomString(8, "hex")}`,
        boldAttrName: `fr-bold-${generateRandomString(8, "date")}`,
        iframeAttrName: `fr-iframe-${generateRandomString(8, "hex")}`,
        queryString: `html,head,head *,title,base,meta,style,link,script,noscript,iframe,img,template,template *,slot,canvas,svg,svg *,rect,ellipse,circle,line,polyline,polygon,path,image,clippath,mask,pattern,filter,stop,picture,form,object,param,embed,audio,video,source,track,progress,fr-colorpicker,fr-colorpicker *,fr-configure,fr-configure *,fr-dialogbox,fr-dialogbox *,gb-notice,gb-notice *`,
        flagName: "fr-found-conflict-callback",
      },
      var: {
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2024.11.02.0",
        scriptName: getMetaValue(`name:${getLanguages()}`) ?? decrypt("Rm9udCUyMFJlbmRlcmluZw=="),
        scriptAuthor: getMetaValue("author") ?? GMinfo.script.author ?? decrypt("Rjl5NG5n"),
        getScreenCTM: SVGGraphicsElement.prototype.getScreenCTM,
        getClientRects: Element.prototype.getClientRects,
        getBoundingClientRect: Element.prototype.getBoundingClientRect,
        fillText: CanvasRenderingContext2D.prototype.fillText,
        strokeText: CanvasRenderingContext2D.prototype.strokeText,
        stopImmediatePropagation: Event.prototype.stopImmediatePropagation,
        stopPropagation: Event.prototype.stopPropagation,
      },
      url: {
        introURL: decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcubGlrZXMuZmFucyUyRkZvbnQtUmVuZGVyaW5n"),
        fontlistImg: decrypt("aHR0cHMlM0ElMkYlMkZzMy5ibXAub3ZoJTJGaW1ncyUyRjIwMjQlMkYwNyUyRjIyJTJGMDEyYmRkOWMxNzMzMDlmOS5naWY="),
        loadingImg: decrypt("aHR0cHMlM0ElMkYlMkZpbWcuemNvb2wuY24lMkZjb21tdW5pdHklMkYwMzhkZGU0NThmOWE4NzRhODAxMjE2MGY3NDE3ZjZlLmdpZg=="),
        Anton: decrypt("aHR0cHMlM0ElMkYlMkZmb250cy5nc3RhdGljLmNvbSUyRnMlMkZhbnRvbiUyRnYyNSUyRjFQdGdnODdMUk95QW0zS3otQzgud29mZjI="),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepageURL") ?? GMinfo.script.homepage ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
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
        selectFontID: generateRandomString(8, "char"),
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
        rdCanvas: generateRandomString(8, "mix"),
        renderCanvas: generateRandomString(8, "mix"),
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
        fi: generateRandomString(8, "mix"),
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
        this.context = context;
        this.timerMap = { timeout: {}, interval: {} };
        this._registerAnimationFrame(context);
        ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach(method => (this[method] = this[method].bind(this)));
        RAF.instance = this;
      }
      _registerAnimationFrame(scope) {
        const vendor = ["ms", "moz", "webkit", "o"].Find(vendor => scope[`${vendor}RequestAnimationFrame`]);
        const raf = scope.requestAnimationFrame ?? scope[`${vendor}RequestAnimationFrame`];
        const caf = scope.cancelAnimationFrame ?? (scope[`${vendor}CancelAnimationFrame`] || scope[`${vendor}CancelRequestAnimationFrame`]);
        Object.assign(scope, { [def.const.raf]: raf, [def.const.caf]: caf });
      }
      _ticking(fn, type, interval = 0, ...args) {
        let lastTime = performance.now();
        const timerSymbol = Symbol(type);
        const step = () => {
          const curentTime = performance.now();
          this._setTimerMap(timerSymbol, type, step);
          if (interval < 16.67 || curentTime - lastTime >= interval) {
            if (typeof fn === "function") fn.apply(null, args);
            if (type === "interval") lastTime = curentTime;
            else this.clearTimeout(timerSymbol);
          }
        };
        this._setTimerMap(timerSymbol, type, step);
        return timerSymbol;
      }
      _setTimerMap(timerSymbol, type, step) {
        this.timerMap[type][timerSymbol] = this.context[def.const.raf](step);
      }
      _clearTimerMap(timer, type) {
        this.context[def.const.caf](this.timerMap[type][timer]);
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
        this.callbacks = new Map();
        this.isCancelled = false;
        this.observer = null;
        this.config = { childList: true, subtree: true, attributes: true };
      }
      async getNodeAndObserve({ name, callback, config, timeout = 1e4 } = {}) {
        if (typeof callback === "function") this.callbacks.set(name, callback);
        this.config = config ?? this.config;
        this.target = this.targetNode();
        if (this.target) return this._observeElement(this.target);
        try {
          const raceResult = await Promise.race([this._waitForTarget(), sleep(timeout, { useCachedSetTimeout: true, instant: true })]);
          if (raceResult) return this._observeElement(raceResult);
          throw new Error(`Target: ${toString(this.targetNode)} can not be found.`);
        } catch (e) {
          this.isCancelled = true;
          ERROR(`getNodeAndObserve${IN_FRAMES}:`, e.message);
          return this.result;
        }
      }
      _waitForTarget() {
        return new Promise(resolve => {
          if (this.observer) this.observer.disconnect();
          this.observer = new MutationObserver(() => {
            const target = this.targetNode();
            if (target || this.isCancelled) {
              this.observer.disconnect();
              resolve(target);
            }
          });
          this.observer.observe(document, { childList: true, subtree: true });
        });
      }
      _handleCallbacks(node, mutations, observer) {
        for (const [name, callback] of this.callbacks) {
          try {
            const result = callback({ node, mutations, observer }) ?? node;
            this.result.set(name, result);
          } catch (e) {
            ERROR(`Error in callback '${name}':`, e.message);
          }
        }
      }
      _observeElement(node) {
        this.result.set(void 0, node);
        if (this.callbacks.size === 0) return Promise.resolve(this.result);
        return new Promise(resolve => {
          const elementObserver = new MutationObserver((mutations, observer) => {
            this._handleCallbacks(node, mutations, observer);
            resolve(this.result);
          });
          elementObserver.observe(node, this.config);
        });
      }
    }

    /* GLOBAL_GENERAL_FUNCTIONS */

    function gmSelector(rec) {
      const gmFunctions = {
        setValue: typeof GM_setValue !== "undefined" ? GM_setValue : GM?.setValue ?? storage.local?.setItem.bind(storage.local),
        getValue: typeof GM_getValue !== "undefined" ? GM_getValue : GM?.getValue ?? storage.local?.getItem.bind(storage.local),
        deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : GM?.deleteValue ?? storage.local?.removeItem.bind(storage.local),
        listValues: typeof GM_listValues !== "undefined" ? GM_listValues : GM?.listValues ?? (() => []),
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : GM?.openInTab ?? open.bind(global),
        setClipboard: typeof GM_setClipboard !== "undefined" ? GM_setClipboard : GM?.setClipboard ?? copyToClipboard,
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand,
        unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand,
        contextMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
        unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : global,
      };
      return gmFunctions[rec] ?? __console("warn", `Grant 'GM.${rec}' is not available.`) ?? (() => {});
    }

    function __console(action, message, ...args) {
      const consoleMethods = {
        log: ["log", "%c\u27A4 %c", "display:inline-block", "font-family:ui-monospace,monospace"],
        info: ["log", "%c\u27A4 ", "display:inline-block;padding:4px 0"],
        error: ["error", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        warn: ["warn", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        count: ["count", "\u27A4 "],
      };
      const [_, msg, consoleMethod] = [this ?? console, message ?? "", consoleMethods[action]];
      if (!consoleMethod) return _.log(msg, ...args);
      const [method, prefix, ...surfix] = consoleMethod;
      return _[method](prefix + msg, ...surfix, ...args);
    }

    function checkLocalChineseLanguage() {
      const lang = navigator.language || Intl.DateTimeFormat().resolvedOptions().locale || "en-US";
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
        return asArray(target.querySelectorAll(expr));
      } catch (e) {
        return [];
      }
    }

    function cE(nodeName, attributes) {
      const el = document.createElement(nodeName);
      if (getObjectType(attributes) !== "[object Object]") return el;
      for (const [key, value] of Object.entries(attributes)) {
        if (key === "class") Array.isArray(value) ? el.classList.add(...value) : el.classList.add(value);
        else if (["innerHTML", "textContent"].includes(key)) el[key] = value;
        else el.setAttribute(key, value);
      }
      return el;
    }

    function aS(target) {
      return target.attachShadow({ mode: "open" });
    }

    function gCS(node, opt = null) {
      if (node?.nodeType !== Node.ELEMENT_NODE) return new Proxy(immutObj, { get: () => NaN });
      return global.getComputedStyle(node, opt);
    }

    function random(range, type = "round") {
      return Math[type]((global.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
    }

    function uniq(array, predicate = Boolean) {
      if (!Array.isArray(array)) return [];
      return [...new Set(array.filter(predicate))];
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
      return node?.nodeName?.toLowerCase() ?? "";
    }

    function setIterator(collection) {
      if (!collection) return { iterator: [][Symbol.iterator](), length: 0 };
      collection = typeof collection[Symbol.iterator] === "function" ? collection : typeof collection.length === "number" ? asArray(collection) : Object.entries(collection);
      return { iterator: collection[Symbol.iterator](), length: collection.size ?? collection.length ?? Object.keys(collection).length };
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
      if (type === "date") return new Date().setHours(20, 30, 40, 50).toString(20);
      const characters = {
        mix: "mYsTBgpkwNcGzFJdOMrt8n2jUC3fWRlKVA5y16oLxIXQE7Z9buvqie4PahH0SD",
        char: "zkDcUGopOvHJLfIZdPqEeRmyCSNYwrgbsFQuBXxnVWiltjMhaATK",
        hex: "a62f8bc07bd15c9ad3efe4",
        digit: "3927154680",
      };
      const [prefix, chars] = ["UKZJHQTRCSBFAYDMEVPXNWG", characters[type]];
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
        { host: "copilot.microsoft.com", policy: "@centro/hvc-loader" },
      ];
      const policyName = whitelist.Find(entry => currentHostName.endsWith(entry.host))?.policy ?? "fr#safeInnerHtml";
      return global.trustedTypes.createPolicy(policyName, defaultPolicy);
    }

    function getMainStyleElements({ primaryElement = false, target = document } = {}) {
      if (primaryElement) return qS(`style#${def.id.rndStyle}`, target);
      return qA("style[id]", target).filter(s => asArray(s.attributes).Some(a => /^fr-css-[0-9a-f]{8}$/.test(a.name)));
    }

    function checkRedundantScript(context) {
      const reportRedundanceError = () => {
        const errorText = IS_CHN
          ? `\ud83d\udea9 [脚本冗余警告]:\r\n发现冗余安装的脚本: "${def.var.scriptName}"，如刷新后问题依旧，请访问 ${def.url.feedback}/117 排查错误。`
          : `\ud83d\udea9 [Redundant Warning]:\r\nFound Redundant Script: '${def.var.scriptName}', if persists after reloading, please visit ${def.url.feedback}/117 to troubleshoot.`;
        const troubleshoot = `\ufff8\ud83d\uded1 ${IS_CHN ? "发现冗余安装的脚本，点击排查！" : "Troubleshoot Redundant"}`;
        if (CUR_WINDOW_TOP) GMregisterMenuCommand(troubleshoot, () => GMopenInTab(`${def.url.feedback}/117`, false) && refresh()) && __console("error", errorText);
        return true;
      };
      if (context["fr-init-redundantcheck"] === true) return reportRedundanceError();
      context["fr-init-redundantcheck"] = true;
      if (GMcontextMode) {
        if (document.documentElement.getAttribute("fr-init-rc") === "true") return reportRedundanceError();
        const contextText = IS_CHN
          ? `${def.var.scriptName}警告\r\n脚本的注入模式已设置为"content"，部分脚本功能将受限制，如框架页面内部分功能失效、字体缩放后无法全局修正坐标等。`
          : `${def.var.scriptName} Warning\r\nThe injection mode of scripts has been set to "content", and some script functions will be limited.`;
        CUR_WINDOW_TOP && __console("warn", contextText);
      }
      Object.freeze(def.const) && updateFlagAtRootElement(document.documentElement);
    }

    function refresh() {
      return sleep(5e2, { useCachedSetTimeout: true }).then(() => global.location.reload(true));
    }

    function updateFlagAtRootElement(target) {
      if (!target) return;
      if (!target.id) target.id = def.const.root;
      if (target.getAttribute("fr-init-rc") !== "true") target.setAttribute("fr-init-rc", true);
    }

    async function getNavigatorInfo() {
      const creditEngine = getRealBrowserEngine(global);
      const userAgentData = await getUserAgentDataFromExtension(`${GMscriptHandler} ${GMversion}`);
      return userAgentData ? getGlobalInfoFromUAD(userAgentData) : getGlobalInfoFromUA(navigator.userAgent);

      function getGlobalInfoFromUAD(uad) {
        const platform = getFullPlatformName(uad.platform);
        const mapBrandPath = ({ brand: b, version: v }) => `${/Not[^a-z]*A[^a-z]*Brand/i.test(b) ? 9 : /^Chrom(?:e|ium)|Firefox|Safari$/i.test(b) ? 5 : 1}${b}\r${v}`;
        const [brand, brandVersion] = uad.brands?.map(mapBrandPath).sort()[0]?.slice(1).split("\r") ?? [];
        const engineMap = { Chrome: "Blink", Chromium: "Blink", Firefox: "Gecko", Safari: "WebKit" };
        const mapEnginePath = ({ brand, version }) => /^(Chrom(?:e|ium)|Firefox|Safari)$/i.test(brand) && `${brand}\r${version}`;
        const [engine, engineVersion] = uad.brands?.map(mapEnginePath).filter(Boolean)[0]?.split("\r") ?? [brand, brandVersion];
        const engineInfo = { engine: engineMap[capitalize(engine)] ?? getEngineFromUA(navigator.userAgent), engineVersion: parseFloat(engineVersion) || 99, creditEngine };
        const browserInfo = { brand: (brand?.split(/\s/) ?? []).slice(-1)[0] ?? "Unknown", brandVersion: formatVersion(brandVersion), platform };
        return { ...engineInfo, ...browserInfo, source: uad.source ?? "uad", voucher: uad.voucher ?? null };
      }

      function getGlobalInfoFromUA(ua) {
        const checkString = (str, exp = "") => new RegExp(str, exp).test(ua);
        const getVersion = (str, offset) => checkString(str) && ua.slice(ua.indexOf(str) + offset).match(/\d+(\.\d+)*/)?.[0];
        const { brand, brandVersion, engine, engineVersion } = getBrowserInfoFromUA(ua, checkString, getVersion);
        const platform = getOSInfoFromUA(checkString);
        return { engine, engineVersion, creditEngine, brand, brandVersion, platform, source: "ua", voucher: null };
      }

      async function getUserAgentDataFromExtension(voucher) {
        const getVMUserAgentData = ({ browserName, browserVersion, os, arch }) => {
          const [architecture, bitness] = arch?.split("-") ?? [];
          let brands = [{ brand: capitalize(browserName), version: browserVersion }];
          if (parseFloat(browserVersion) < 57.0 && GMinfo.userAgent) {
            const [, brand, version] = GMinfo.userAgent.match(/\s(Chrom(?:e|ium)|Firefox)\/(\d+[.0-9]*)/i) ?? [];
            if (brand) brands = [{ brand: capitalize(brand), version }, ...brands];
          }
          return { bitness, architecture, brands, platform: capitalize(os), source: "ext", voucher };
        };
        if (voucher.startsWith("Violentmonkey") && GMinfo.platform) return getVMUserAgentData(GMinfo.platform);
        const getTMUserAgentData = uad => {
          if (creditEngine === "Gecko" && parseFloat(uad.brands[0].version) < 78.0) {
            const [, brand, version] = navigator.userAgent.match(/\s(Firefox)\/(\d+[.0-9]*)/i) ?? [];
            if (brand) return { ...uad, brands: [{ brand: capitalize(brand), version }, ...uad.brands], source: "ua" };
          }
          return { ...uad, source: "ext", voucher };
        };
        if (voucher.startsWith("Tampermonkey") && GMinfo.userAgentData) return getTMUserAgentData(GMinfo.userAgentData);
        const getUADHighEntropyValues = async uad =>
          await uad.getHighEntropyValues(["bitness", "architecture", "fullVersionList"]).then(rst => {
            rst.brands = rst.fullVersionList;
            delete rst.fullVersionList;
            return rst;
          });
        if (navigator.userAgentData?.brands?.[0]) return await getUADHighEntropyValues(navigator.userAgentData);
        return null;
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
        for (const [key, { brand, engine, verset, as }] of Object.entries(brandMap)) {
          if (!checkString(key)) continue;
          const versionKey = asArray(verset ?? []).Find(k => checkString(k)) || key;
          let brandVersion = getVersion(versionKey, versionKey.length + 1);
          if (!brandVersion) continue;
          const enVersionKey = as || key;
          const engineVersion = parseFloat(getVersion(enVersionKey, enVersionKey.length + 1) || 99);
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
        return w.GestureEvent ? "WebKit" : w.scrollByLines || w.getDefaultComputedStyle ? "Gecko" : w.webkitRequestFileSystem || w.queryLocalFonts ? "Blink" : "Unknown";
      }

      function getEngineFromUA(ua) {
        return /Gecko\/|Firefox\/|FxiOS/.test(ua) ? "Gecko" : /Chrom(?:e|ium)\/|CriOS/.test(ua) ? "Blink" : /AppleWebKit\/|Version\//.test(ua) ? "WebKit" : "Unknown";
      }

      function getUnregisteredBrandAndVersionFromUA(ua) {
        const [nameOffset, verOffset] = [ua.lastIndexOf(" ") + 1, ua.lastIndexOf("/")];
        if (nameOffset === 0 || verOffset === -1 || verOffset < nameOffset) return { b: "Unknown", bv: "0.0.0.0", ev: 99 };
        const brand = ua.slice(nameOffset, verOffset).trim();
        const brandVersion = formatVersion(ua.slice(verOffset + 1).match(/\d*\.?\d+/)?.[0]);
        const engineVersion = parseFloat(ua.match(/(?:Chrom(?:e|ium)|Firefox|Version)\/(\d+[.0-9]*)/i)?.[1] || brandVersion || 99);
        const validVersion = (!/version|\/|\(|\)|;/i.test(brand) && brandVersion) || "0.0.0.0";
        return { b: brand, bv: validVersion, ev: engineVersion };
      }

      function getOSInfoFromUA(checkString) {
        const platforms = ["like Mac", "Mac", "Android", "Debian", "Ubuntu", "Linux", "Win", "CrOS", "X11"];
        const platform = platforms.Find(p => checkString(p, "i")) || "Unknown";
        return getFullPlatformName(platform);
      }
    }

    function getLocationInfo(tH) {
      const { host: h, hostname: hN, pathname: pN, protocol: pT } = global.location;
      const iT = global.self === global.top;
      const fS = iT ? "" : "[FRAMES]";
      try {
        tH = iT ? h : global.top.location.host;
      } catch (e) {
        tH = new URL(document.referrer || global.location).host;
      }
      return { h, hN, pN, pT, tH, iT, fS };
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

    function sleep(delay, { useCachedSetTimeout, instant } = {}) {
      const timeoutFunction = useCachedSetTimeout ? setTimeout : raf.setTimeout;
      const sleepPromise = new Promise(resolve => {
        timeoutFunction(resolve, delay);
      });
      const promiseFunction = value => sleepPromise.then(() => value);
      promiseFunction.then = sleepPromise.then.bind(sleepPromise);
      promiseFunction.catch = sleepPromise.catch.bind(sleepPromise);
      return instant ? sleepPromise : promiseFunction;
    }

    function createDeBounce({ fn, delay, once = false, immediate = false }) {
      if (typeof fn !== "function" || typeof delay !== "number" || delay < 0) throw new Error("createDeBounce: Invalid arguments");
      let timeoutId;
      function debounced(...args) {
        const context = this;
        const executeFunction = () => (fn.apply(context, args), (timeoutId = once || null));
        if (timeoutId === true) return;
        if (timeoutId) raf.clearTimeout(timeoutId);
        else if (immediate && executeFunction()) return;
        timeoutId = raf.setTimeout(executeFunction, delay);
      }
      debounced.setImmediate = immedValue => (immediate = Boolean(immedValue));
      return debounced;
    }

    function safeRemoveNode(expression, scope) {
      if (!expression) return false;
      const pendingNodes = Array.isArray(expression) ? expression : typeof expression === "string" ? qA(expression, scope) : expression?.nodeType ? [expression] : [];
      return pendingNodes.every(el => el.remove() || el.parentNode === null);
    }

    function stopEventPropagation(event, { immediate = true, preventDefault = false } = {}) {
      if (preventDefault) event.preventDefault();
      def.var[immediate ? "stopImmediatePropagation" : "stopPropagation"].call(event);
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

    void (async function (tTP, JSON) {
      const [CONFIGURE, EXCLUDESITES, FONTSET, DOMAINFONTSET, CUSTOMFONTS] = ["_CONFIGURE_", "_EXCLUDE_SITES_", "_FONTS_SET_", "_DOMAINS_FONTS_SET_", "_CUSTOM_FONTLIST_"];
      const [CUSTOMPROPERTY, MONORULES, MONOFONTS, MONOFEATS] = ["_CUSTOM_PROPERTY_", "_MONOSPACED_SITERULES_", "_MONOSPACED_FONTLIST_", "_MONOSPACED_FEATURE_"];
      const [FONTOVERRIDE, FONTSCALE, FONTCHECKLIST, FIXINPUT] = ["_FONTOVERRIDE_DEF_", "_FONTSCALE_DEF_", "_FONTCHECKLIST_", "_FR_FIREOFX_FIXINPUT_"];
      const [getDocumentElement, getHeadElement, getBodyElement] = ["documentElement", "head", "body"].map(element => new NodeObserver(() => document[element]));
      const [IS_INTERNALSTYLE_ALLOWED, navigatorInfo] = await Promise.all([checkInternalStyleCSP(), getNavigatorInfo()]);
      const { engine, engineVersion, creditEngine, brand, platform, voucher } = navigatorInfo;
      const [IS_REAL_BLINK, IS_REAL_GECKO, IS_REAL_WEBKIT] = ["Blink", "Gecko", "WebKit"].map(cE => cE === creditEngine);
      const IS_CHEAT_UA = voucher === null && (engine !== creditEngine || checkBlinkCheatingUA(navigator.userAgentData));
      const IS_GREASEMONKEY = ["Greasemonkey", "Userscripts"].includes(GMscriptHandler);
      const [IS_BLINK_ABOVE_128, IS_GECKO_ABOVE_126] = [checkBrowserCompatible({ BLINK: 128 }), checkBrowserCompatible({ GECKO: 126, ignoreDefect: true })];
      const [IS_BLINK_BELOW_128, IS_GECKO_BELOW_126] = [IS_REAL_BLINK && !IS_BLINK_ABOVE_128, IS_REAL_GECKO && !IS_GECKO_ABOVE_126];
      const IS_COMPATIBLE_ADOPTEDSTYLE = checkBrowserCompatible({ WEBKIT: 16.4, BLINK: 73, GECKO: 101 });
      const IS_CAUSED_BOLDSTROKEERROR = checkBrowserCompatible({ BLINK: 96 });
      const IS_CAUSED_BOLDSHADOWERROR = checkBrowserCompatible({ BLINK: 123 });

      /* CUSTOMIZE_UPDATE_PROMPT_INFORMATION */

      const UPDATE_VERSION_NOTICE = IS_CHN
        ? `<li class="${def.const.seed}_add">新增使用 OpenType 字体（非等宽字体）时在自定义字体工具中新增 font-feature-settings 属性的设置项目。</li>
            <li class="${def.const.seed}_fix">改进英文等宽字体与中文字体混合渲染的兼容性。</li>
            <li class="${def.const.seed}_fix">针对低配置电脑大幅提升粗体修正功能的执行效率。</li>
            <li class="${def.const.seed}_fix">修复在 <a href="https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89#firefox-input%E6%A0%B7%E5%BC%8F%E4%BF%AE%E5%A4%8D" target="_blank">Firefox</a> 因字体热替换导致的 INPUT 标签异常。</li>
            <li class="${def.const.seed}_fix">修复视口单位修正中 URLs 处理的相关函数错误。</li>
            <li class="${def.const.seed}_fix">修复 VM uad.getHighEntropyValues 引起的加载延迟。</li>
            <li class="${def.const.seed}_fix">修复 iframe 异步加载时插入样式没有正确解析的问题。</li>
            <li class="${def.const.seed}_fix">修复 Canvas 画布字体阴影渲染效果未生效的问题。</li>
            <li class="${def.const.seed}_fix">修复一些已知的问题，优化代码，优化样式。</li>`
        : `<li class="${def.const.seed}_add">Added font-feature-settings property settings when adding & using OpenType fonts (Non-monospace).</li>
            <li class="${def.const.seed}_fix">Improved compatibility of Chinese with monospace.</li>
            <li class="${def.const.seed}_fix">Improved bold-fixer performance for low-end PCs.</li>
            <li class="${def.const.seed}_fix">Fixed INPUT issue caused by font HotShift in <a href="https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font-Rendering-(Customized)#firefox-input-styling-fix" target="_blank">Firefox</a>.</li>
            <li class="${def.const.seed}_fix">Fixed URLs handling issue in viewport unit correction.</li>
            <li class="${def.const.seed}_fix">Fixed load-delay caused by VM getHighEntropyValues.</li>
            <li class="${def.const.seed}_fix">Fixed iframe asynchronous loading style not parsing.</li>
            <li class="${def.const.seed}_fix">Fixed Canvas font shadow rendering is not working.</li>
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
        renderCanvas: !IS_GREASEMONKEY,
        shadowColor: IS_REAL_GECKO ? "#7C7C7C70" : "#7C7C7CDD",
        fontCSS: `:not(i,head *):not([class*='glyph']):not([class*='symbols' i]):not([class*='icon' i]):not([class*='fa-']):not([class*='vjs-'])`,
        fontEx: `kbd,i,.textLayer *,pre,pre *,code,code *`,
      };

      /* INITIALIZE_CONFIGURE_AND_OTHERS */

      const INITIAL_FEATURES = { isBackupFunction: true, isPreview: false, isFontsize: false, isFixViewport: false, isHotkey: true, isCloseTip: false, maxPersonalSites: 1e2 };
      const INITIAL_CONFIGURE = { ...INITIAL_FEATURES, rebuild: void 0, curVersion: void 0, globalDisable: false, isCustomMono: false };
      const INITIAL_REMARKS = {
        fontBase: `system-ui,-apple-system,BlinkMacSystemFont,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Android Emoji','EmojiSymbols','EmojiOne Mozilla','Twemoji Mozilla','Segoe UI Symbol','Noto Color Emoji Compat',emoji,'Font Awesome 6 Pro','Font Awesome 5 Pro',FontAwesome,iconfont,icomoon,IcoFont,fontello,themify,'Segoe Fluent Icons','Material Design Icons',bootstrap-icons`,
        monospacedFont: `'Operator Mono Lig','Fira Code','Source Code Pro','JetBrains Mono',Inconsolata,Monaco,'Roboto Mono','Ubuntu Mono','Anonymous Pro','Droid Sans Mono',Menlo,Consolas`,
        monospacedFeature: `"liga" 0,"tnum","zero"`,
        editorialSiteList: `cdn.addon.tencentsuite.com|docs.google.com|docs.qq.com|feishu.cn|fonts.google.com|github.com|github.dev|github1s.com|image.baidu.com|kdocs.cn|newassets.hcaptcha.com|note.youdao.com|notion.site|notion.so|shimo.im|support.google.com|vscode.dev|weread.qq.com|wolai.com|wqxuetang.com|xiezuocat.com|youtube.com|yuque.com|regex101.com|tool.lu`,
      };
      def.url.guideURI = `${def.url.feedback}/../wiki/${IS_CHN ? encodeURIComponent("字体渲染（自用脚本）") : "Font-Rendering-(Customized)"}`;
      def.url.installURI = `${def.url.homepage}${IS_CHN ? "index.html#字体渲染自用脚本" : "index_en.html#font-rendering-customized"}-font-renderinguserjs`;

      /* INITIALIZE_SHADOWROOT_STYLE */

      def.var.style = Object.freeze({
        main: `display:inline-block;font-family:ui-monospace,monospace`,
        firefox: `input:is([type='text'],[type='password'],[type='search'],[type='email'],[type='tel'],[type='url'],[type='number']),input:not([type]){font-family:serif!important}`,
        frDialog: `:root>#${def.const.dialog}{display:block!important;width:auto!important;height:auto!important;background:0 0!important;opacity:1!important;border-width:0!important;outline:0!important;z-index:2147483647!important}:root>#${def.const.dialog}::backdrop{background:transparent!important}@font-face{font-family:Anton;font-style:normal;font-weight:400;font-display:swap;src:local("Impact"),url(${def.url.Anton}) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+0304,U+0308,U+0329,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}`,
        frDialogBox:
          `:host(#${def.id.dialogbox}){position:fixed!important;top:0;left:0;width:100%;height:100%;background:0 0!important;pointer-events:none;z-index:2147483647}.${def.class.db}{position:absolute;top:calc(12% + 10px);right:20px;z-index:99999;display:block;overflow:hidden;box-sizing:content-box;width:100%;max-width:420px;border:2px solid #efefef;border-radius:6px;background:#fff;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.3);color:#444;transition:opacity .5s;pointer-events:auto;opacity:0}.${def.class.db} *{text-shadow:0 0 1px #777!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}.${def.class.dbt}{display:flex;margin-top:0;padding:10px 15px;width:auto;background:#efefef;text-align:left;font-weight:700;font-size:18px!important;flex-wrap:wrap;justify-content:space-between;align-items:center;align-content:center}.${def.class.dbt},.${def.class.dbt} *{font-weight:700;font-size:20px!important;font-family:Candara,Times,${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm}{display:block;margin:5px;padding:10px;color:#444;text-align:left;font-weight:500;font-size:16px!important}.${def.class.dbb}{display:inline-block;box-sizing:content-box;margin:2px 1%;padding:8px 12px;min-width:12%;border-radius:4px;text-align:center;text-decoration:none!important;letter-spacing:0;font-weight:400;cursor:pointer}.${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.${def.const.seed}_gradient_bg{background:#e7ffd9;animation:gradient 2s ease-in-out forwards}@keyframes gradient{0%{background:#e7ffd9}to{background:transparent}}.${def.class.db} .${def.class.dbt},.${def.class.db} .${def.class.dbb}{text-shadow:none!important;-webkit-text-stroke:0 transparent!important;-webkit-user-select:none;user-select:none}.${def.class.db} .${def.class.dbb}:hover{box-sizing:content-box;color:#fff;text-decoration:none!important;font-weight:700;opacity:.8}.${def.class.db} .${def.class.dbbf}{border:1px solid #d93223!important;border-radius:6px;background:#d93223!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}` +
          `.${def.class.db} .${def.class.dbbt}{border:1px solid #038c5a!important;border-radius:6px;background:#038c5a!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}.${def.class.dbbn}{border:1px solid #777!important;border-radius:6px;background:#777!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${def.class.dbbc}{display:block;padding:2.5%;background:#efefef;color:#fff;text-align:right;font-size:initial}.${def.class.dbm} textarea{cursor:auto;overscroll-behavior:contain}.${def.class.dbm} textarea::-webkit-scrollbar{width:8px;height:8px}.${def.class.dbm} textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaa}.${def.class.dbm} textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999}.${def.class.dbm} textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} textarea::-webkit-scrollbar-track-piece{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa}.${def.class.dbm} button:hover{background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important;cursor:pointer}.${def.class.dbm} p{margin:5px 0!important;text-align:left;text-indent:0;font-weight:400;font-size:16px;line-height:1.5!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul{margin:0 0 0 10px!important;padding:2px;color:#808080;list-style:none;font:italic 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${def.class.dbm} ul::-webkit-scrollbar-thumb{border-radius:10px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} ul::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul::-webkit-scrollbar-track-piece{border-radius:6px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} ul li{display:list-item;list-style-type:none;word-break:break-all}.${def.class.dbm} li:before{display:none}.${def.class.dbm} ul#${def.const.seed}_d_d_ li:hover{background-color:rgba(253, 246, 236, 0.8)!important}` +
          `#${def.const.seed}_temporary{padding:18px 8px;text-align:center;color:#555;font-size:14px!important}#${def.id.bk},#${def.id.pv},#${def.id.fs},#${def.id.fvp},#${def.id.hk},#${def.id.ct},#${def.id.mps},#${def.id.flc},#${def.id.gc},#${def.id.cm},#${def.id.fi}{display:flex;box-sizing:content-box;margin:0;padding:2px 4px!important;width:calc(98% - 10px);height:max-content;min-width:auto;min-height:40px;list-style:none;font-style:normal;justify-content:space-between;align-items:flex-start;word-break:break-word}.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(245, 146, 146, 0.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0, 0, 0, 0.6);color:#fff;content:' '}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:'OFF';font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:'ON'}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:' '}.${def.const.seed}_VIP,.${def.const.seed}_cusmono{margin:2px 0 0 0;color:#b8860b!important;font:normal 400 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.flc} button,#${def.id.gc} button{box-sizing:border-box!important;margin:0 5px 0 0!important;padding:5px!important;border:1px solid #999!important;border-radius:4px!important;background-color:#eee;color:#444!important;letter-spacing:normal!important;font-weight:400!important;font-size:14px!important}` +
          `#${def.const.seed}_monospaced_siterules::placeholder,#${def.const.seed}_monospaced_font::placeholder,#${def.const.seed}_monospaced_feature::placeholder,#${def.const.seed}_custom_Feature::placeholder,#${def.const.seed}_custom_Variant::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}.${def.class.dbm} a{color:#0969da;text-decoration:none!important;font-style:inherit}.${def.class.dbm} a:hover{color:#dc143c;text-decoration:underline}#${def.id.feedback}{box-sizing:content-box;margin:0;padding:2px 10px;width:max-content;height:22px;min-width:auto;font-style:normal;font-size:16px;cursor:pointer}.${def.class.dbm} #${def.id.files}{display:none}#${def.id.feedback}:hover{color:#dc143c!important}#${def.id.feedback}:after{width:0;height:0;background:url('${def.url.loadingImg}') no-repeat -400px -300px;content:""}#${def.id.flcid}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.id.maxps}{box-sizing:border-box;padding:4px 5px;width:70px;min-width:70px;border:2px solid #b8860b;border-radius:4px;background:#efefef;color:#333;text-align:center;font:normal 400 16px/150% 'Anton',Times,serif!important}.${def.class.dbm} ul.${def.class.main}{overflow-x:hidden;box-sizing:content-box;margin:0;padding:5px 0;max-height:255px;overscroll-behavior:contain}#${def.id.globaldisable}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.const.seed}_c_w_d_d_{box-sizing:border-box;margin-left:15px;padding:3px 5px;width:max-content;height:max-content;max-width:120px;min-height:30px;border:1px solid #777;border-radius:4px;background-color:#eee;color:#333!important;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_a_w_d_l_>span{margin:0;padding:0 2px;color:#3e3e3e;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_c_w_d_{color:#4b0082;cursor:help;word-break:break-all}p.${def.const.seed}_exclusion{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}#${def.const.seed}_d_s_{box-sizing:content-box;margin:4px 6px;padding:2px 6px;width:57%;height:22px;outline:none!important;border:2px solid #777;border-radius:4px;font:normal 400 16px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important}` +
          `#${def.const.seed}_d_s_s_{box-sizing:border-box;margin:0;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;outline:none!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_s_c_{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_s_a_{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#8b0000!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}_d_d_{overflow-x:hidden;margin:0!important;padding:0!important;max-height:190px;list-style:none!important;overscroll-behavior:contain}#${def.const.seed}_d_d_ li[id^='${def.const.seed}_d_d_l_']{display:flex;overflow:hidden;margin:0;padding:5px;max-width:364px;color:#555;list-style:none;white-space:nowrap;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,-apple-system,BlinkMacSystemFont!important;justify-content:space-between}#${def.const.seed}_d_d_ span.${def.const.seed}_domainlist{overflow:hidden;margin-right:auto;padding-left:5px;width:85%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}#${def.const.seed}_d_d_ .${def.const.seed}_customdomain{overflow:hidden;margin-left:5px;width:57%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}}#${def.const.seed}_d_d_ a[id^='${def.const.seed}_d_d_l_s_']{padding:2px;background:0 0;color:#8b0000!important;font-size:14px!important;cursor:pointer}#${def.const.seed}_exSite_add{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}` +
          `#${def.const.seed}_custom_Fontlist,#${def.const.seed}_fontoverride_def_array,#${def.const.seed}_fontscale_def_json{box-sizing:content-box;margin:0 0 4px 0;padding:5px;max-width:372px;min-width:372px;min-height:160px;max-height:457px;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:vertical;overscroll-behavior:contain}#${def.const.seed}_warning_chn{display:block;margin:-7px 0 0 -7px!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}_warning_en{display:block;margin:-5px 0 0 0!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}_monospaced_font,#${def.const.seed}_monospaced_feature,#${def.const.seed}_custom_Feature,#${def.const.seed}_custom_Variant{box-sizing:border-box;padding:5px;width:380px;outline:0!important;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig',monospace,${INITIAL_VALUES.fontSelect}!important}#${def.const.seed}_monospaced_siterules{box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:140px!important;max-height:256px;outline:0!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:vertical;overscroll-behavior:contain;word-break:keep-all!important}.${def.class.dbm} p:is(.${def.const.seed}_mono_notify,.${def.const.seed}_fontfeature,.${def.const.seed}_fontvariant){display:block;margin-top:10px!important;color:#555;font-size:14px!important}#${def.id.cm},#${def.id.fi}{margin:0 0 8px;width:97%!important;border-bottom:1px groove #ccc}.${def.class.dbm} span.${def.const.seed}_cusmono{color:#555!important;font-weight:700!important;user-select:none;-webkit-user-select:none}#${def.const.seed}_kbd{display:inline-block;box-sizing:content-box;margin:4px 0 0;padding:3px 10px;width:94%;border:1px solid rgba(175, 184, 193, 0.4);border-radius:6px;background-color:#f6f8fa;color:#666;vertical-align:middle;text-align:center;font-size:14px!important}` +
          `.${def.const.seed}_cga{color:#808080!important}.${def.const.seed}_cge{color:#a9a9a9!important}.${def.const.seed}_cdc1{color:#dc143c!important}.${def.const.seed}_fsn{font-style:normal!important}.${def.const.seed}_fsi{font-style:italic!important}.${def.const.seed}_f20{font-size:20px!important}.${def.const.seed}_save_p{display:flex;height:30px;align-items:center}.${def.const.seed}_mh22{min-height:22px}.${def.const.seed}_op1{opacity:1!important}.${def.const.seed}_ti6{text-indent:6px!important}.${def.const.seed}_m0500{margin:0 5px 0 0}.${def.const.seed}_p0{padding:0}.${def.const.seed}_f14{font-size:14px!important}.${def.const.seed}_f11{font-size:11px!important}.${def.const.seed}_cce{color:#cecece!important}.${def.const.seed}_ccr{color:#dc143c!important}.${def.const.seed}_cp{cursor:pointer}.${def.const.seed}_wbka{word-wrap:break-word;word-break:break-all!important}.${def.const.seed}_idg{color:#4b0082!important}.${def.const.seed}_cdg{color:#006400!important}.${def.const.seed}_cb8{color:#8b0000!important}.${def.const.seed}_c55{color:#555!important}.${def.const.seed}_fb{font-weight:700!important}.${def.const.seed}_f12{font-size:12px!important}.${def.const.seed}_ctan{color:#d2b48c!important}.${def.const.seed}_csg{color:#708090!important}.${def.const.seed}_cco{color:#ff7f50!important}.${def.const.seed}_list_p{display:flex;justify-content:left;align-items:center}.${def.const.seed}_m05{margin:0 5px}.${def.const.seed}_cto{color:#ff6347!important}.${def.const.seed}_v_en{padding:0px 4px;font:italic 700 20px/130% Candara,Times New Roman!important}.${def.const.seed}_v_cn{padding:4px;font:italic 700 22px/150% Candara,Times!important}.${def.const.seed}_hi_cn{font:italic 700 22px/150% ${INITIAL_VALUES.fontSelect},Arial!important}.${def.const.seed}_hi_en{font:normal 700 20px/150% ${INITIAL_VALUES.fontSelect},Arial!important}.${def.const.seed}_pd4{padding:4px}.${def.const.seed}_lh180{line-height:180%!important}.${def.const.seed}_cb88{color:#b8860b!important}.${def.const.seed}_tac{text-align:center!important}.${def.const.seed}_cps{padding-bottom:6px;font-size:18px!important}.${def.const.seed}_cpsa{display:inline-block;overflow:hidden;width:302px;height:237px;border:2px solid #b8860b;border-radius:8px;background:url('${def.url.loadingImg}') 50% 50% no-repeat}.${def.const.seed}_bdcr{border-color:#ff0000!important}.${def.const.seed}_bdcdo{border-color:#ff8c00!important}` +
          `.${def.const.seed}_mbm5{padding-bottom:5px;width:98%;}.${def.const.seed}_tabd{border:2px solid #dc143c!important}.${def.const.seed}_inline_block{display:inline-block!important}.${def.const.seed}_block{display:block!important}.${def.const.seed}_none{display:none!important}.${def.const.seed}_visible{visibility:visible!important}.${def.const.seed}_hidden{visibility:hidden!important}.${def.const.seed}_list_reset{text-decoration:line-through;font-style:italic}#${def.const.seed}_copy_to_author{overflow-y:auto;margin:0!important;padding:0!important;max-height:300px;list-style-position:outside}#${def.const.seed}_copy_to_author li{padding:2px}#${def.const.seed}_custom_Fontlist::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;word-break:break-all!important}#${def.const.seed}_update li{margin:0;padding:1px 4px;color:#808080;font:normal 400 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important}#${def.const.seed}_update .${def.const.seed}_add{list-style-type:'\uff0b'}#${def.const.seed}_update .${def.const.seed}_del{list-style-type:'\uff0d'}#${def.const.seed}_update .${def.const.seed}_fix{list-style-type:'\uff20'}#${def.const.seed}_update .${def.const.seed}_info{color:#daa520;word-break:break-word;list-style-type:'\u266f'}#${def.const.seed}_update .${def.const.seed}_warn{color:#e90000;word-break:break-word;list-style-type:'\u2718'}#${def.const.seed}_update .${def.const.seed}_init{color:#65a16a;word-break:break-word;list-style-type:'\u2691'}.${def.class.dbm} input:focus,.${def.class.dbm} textarea:focus{box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.1),0 0 4px rgba(110, 111, 112, 0.6)!important}@-moz-document url-prefix() {.${def.class.dbm} textarea,.${def.class.dbm} ul,#${def.const.seed}_custom_Fontlist,#${def.const.seed}_monospaced_siterules,#${def.const.seed}_fontoverride_def_array,#${def.const.seed}_fontscale_def_json{scrollbar-color:rgba(187, 187, 187, 0.73) rgba(238, 238, 238, 0.07);scrollbar-width:thin}}`,
        frConfigure:
          `:host(#${def.id.configure}){position:fixed!important;top:0;left:0;width:100%;height:100%;background:0 0!important;pointer-events:none;z-index:2147483645}#${def.id.container}{position:absolute;top:10px;right:24px;z-index:99999;overflow-x:hidden;overflow-y:auto;display:block;box-sizing:content-box;padding:4px;max-height:calc(100% - 40px);min-height:10%;border-radius:12px;background:#f0f6ff!important;box-shadow:0 0 4px 0 rgba(0, 0, 0, 0.3);color:#333;text-align:left;font-weight:700;font-size:16px!important;opacity:0;transition:opacity .5s;width:auto;overscroll-behavior:contain;pointer-events:auto}#${def.id.container}::-webkit-scrollbar{width:10px;height:1px}#${def.id.container}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.container}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.container}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.container} *{text-shadow:none!important;font-weight:700;font-size:16px;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Android Emoji,EmojiSymbols!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}#${def.id.container} fieldset{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;min-height:475px;border:2px groove #67a5df!important;border-radius:10px;background:#f0f6ff!important}#${def.id.container} legend{position:relative!important;float:none!important;display:block!important;visibility:visible!important;box-sizing:content-box;margin:0;padding:0 32px 0 8px;width:auto!important;height:auto!important;border:none!important;background:#f0f6ff!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.container} fieldset ul{margin:0;padding:0;background:#f0f6ff!important}#${def.id.container} ul li{float:none;display:inherit;box-sizing:content-box;margin:3px 0;min-width:-webkit-fill-available;min-width:-moz-available;border:none;background:#f0f6ff!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none}#${def.id.container} ul li:before{display:none}` +
          `#${def.id.container} .${def.class.rotation} svg{visibility:visible!important;overflow:hidden;width:24px;height:24px;vertical-align:initial!important;fill:#67a5df}#${def.id.container} .${def.class.rotation} svg:hover{cursor:help}#${def.const.seed}_scriptname{display:inline-block;margin:0 4px 0 0;vertical-align:bottom;overflow:hidden;min-width:130px;max-width:225px;text-overflow:ellipsis;white-space:nowrap;font-weight:700!important;-webkit-user-select:all;user-select:all}#${def.const.seed}_scriptname:hover{cursor:help}#${def.id.container} .${def.class.title} .${def.class.guide}{position:absolute;display:inline-block;cursor:pointer}@keyframes rotation{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}.${def.class.title} .${def.class.rotation}{position:relative;display:block;top:auto;right:auto;bottom:auto;left:auto;margin:0;padding:0;width:24px;height:24px;-webkit-transform:rotate(1turn);transform-origin:center 50% 0;animation:rotation 6s linear infinite}#${def.id.container} input:not([type='range'],[type='checkbox']):focus,#${def.id.container} textarea:focus{box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.1),0 0 6px rgba(82, 168, 236, 0.6)!important}#${def.id.fontList}{padding:2px 10px 0;min-height:73px}#${def.id.fontFace},#${def.id.fontSmooth}{display:flex!important;padding:2px 10px;width:calc(100% - 18px);height:40px;min-width:auto;align-items:center;justify-content:space-between}#${def.id.fontSize}{padding:2px 10px;height:60px}#${def.id.fontStroke}{padding:2px 10px;height:60px}#${def.id.fontShadow}{padding:2px 10px;height:60px}#${def.id.container} #${def.id.shadowColor}{display:flex;margin:4px;padding:2px 10px;width:auto;min-height:45px;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}#${def.id.fontCss},#${def.id.fontEx}{padding:2px 10px;height:110px;min-height:110px;min-width:254px!important}#${def.id.submit}{padding:2px 10px;height:40px}#${def.id.fontList} .${def.class.selector} a{text-decoration:none;font-weight:400}#${def.id.fontList} .${def.class.label}{display:inline-block;margin:-1px 4px 5px 0;padding:0;height:34px;line-height:100%!important}#${def.id.fontList} .${def.class.label} span{display:inline-block;overflow:hidden;box-sizing:border-box;padding:5px;width:max-content;height:max-content;max-width:200px;min-width:12px;background:#67a5df;color:#fff;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:16px!important}` +
          `#${def.id.fontList} .${def.class.close}:hover{border-radius:2px;background-color:#2d7dca;color:#ff6347}@-moz-document url-prefix() {#${def.id.fontList} .${def.class.label}{margin:-1px 0 4px 0}}#${def.id.fontList} .${def.class.close}{width:12px}#${def.id.selector}{width:100%;max-width:100%;display:none}#${def.id.selector} label{display:block;margin:0 0 4px;color:#333;cursor:auto}#${def.id.cleaner}{margin-left:5px;cursor:pointer}#${def.id.cleaner}:hover{color:#dc143c}#${def.id.fontList} .${def.class.selector}{overflow-x:hidden;box-sizing:border-box;margin:0 0 6px 0;padding:6px 0 0 6px;width:100%;max-width:254px;max-height:90px;min-width:100%;min-height:45px;border:2px solid #67a5df!important;border-radius:6px;overscroll-behavior:contain;}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selectFontID} span.${def.class.spanlabel},#${def.id.selector} span.${def.class.spanlabel}{display:block!important;margin:0!important;padding:0 0 4px;width:auto;border:0;background-color:transparent!important;color:#333;text-align:left!important}#${def.id.fontList} .${def.class.selectFontID}{width:auto}#${def.id.fontList} .${def.class.selectFontID} input{overflow:hidden;box-sizing:border-box;margin:0;padding:1px 23px 1px 2px;width:230px;height:42px!important;max-width:100%;min-width:100%;outline:none!important;outline-color:#67a5df;border:2px solid #67a5df!important;border-radius:6px;background:#fafafa;text-indent:8px;text-overflow:ellipsis;color:#333;font-weight:700;font-size:16px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}#${def.id.fontList} .${def.class.selectFontID} input[disabled]{pointer-events:none!important}#${def.id.fontList} input[disabled]::placeholder{color:#444!important}#${def.id.fontList} .${def.class.selectFontID} input::-webkit-search-cancel-button{margin:0 7px}` +
          `#${def.const.seed}_fontoverride_defined:hover,#${def.const.seed}_fontscale_defined:hover{cursor:help;color:#8b0000}.${def.class.placeholder}::placeholder{color:#369!important;font:normal 700 16px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;opacity:.65}#${def.id.fontList} .${def.class.selectFontID} dl{display:none;position:absolute;z-index:1000;overflow-x:hidden;box-sizing:content-box;margin:4px 0 0;padding:4px 8px;width:auto;max-width:calc(100% - 68px);max-height:298px;min-width:60%;border:2px solid #67a5df!important;border-radius:6px;background-color:#fff;white-space:nowrap;font-size:18px!important;overscroll-behavior:contain}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar{width:10px;height:1px}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df;}#${def.id.fontList} .${def.class.selectFontID} dl dd{display:block;overflow-x:hidden;box-sizing:content-box;margin:1px 8px;padding:5px 0;width:-moz-available;width:-webkit-fill-available;max-width:100%;min-width:100%;text-overflow:ellipsis;font-weight:400;font-size:21px!important}#${def.id.fontList} .${def.class.selectFontID} dl dd:hover{overflow-x:hidden;box-sizing:content-box;min-width:-moz-available;min-width:-webkit-fill-available;background-color:#67a5df;color:#fff;text-overflow:ellipsis}.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(245, 146, 146, 0.4);white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0, 0, 0, 0.6);color:#fff;content:" "}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-style:normal;font-size:16px}` +
          `.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:"ON"}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}#${def.id.fface} label,#${def.id.fface}+label::after,#${def.id.fface}+label::before,#${def.id.smooth} label,#${def.id.smooth}+label::after,#${def.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}#${def.id.fontShadow} div.${def.class.flex}:before,#${def.id.fontShadow} div.${def.class.flex}:after,#${def.id.fontStroke} div.${def.class.flex}:before,#${def.id.fontStroke} div.${def.class.flex}:after,#${def.id.fontSize} div.${def.class.flex}:before,#${def.id.fontSize} div.${def.class.flex}:after{display:none}#${def.id.shadowSize},#${def.id.strokeSize},#${def.id.fontScale}{box-sizing:content-box;margin:0 10px 0 0!important;padding:0;width:56px!important;height:32px!important;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:#fafafa!important;color:#111!important;text-align:center;text-indent:0;font-weight:400!important;font-size:17px!important;font-family:'Anton',Times,serif!important}#${def.id.fontScale}[disabled]{background-color:rgba(228, 231, 237, 0.82)!important;color:#555!important;filter:grayscale(.9)}#${def.id.fviewport},#${def.id.fstroke},#${def.id.rdCanvas}{visibility:visible;width:auto;color:#666;font-size:12px!important}#${def.id.fviewport}>label,#${def.id.fstroke}>label,#${def.id.rdCanvas}>label{float:none!important;display:inline!important;margin:0!important;padding:0 0 0 2px!important;color:#666!important;font-size:12px!important;cursor:help!important}#${def.id.fixViewport},#${def.id.fixStroke},#${def.id.renderCanvas}{display:inline-block;margin:0 2px 0 0!important;width:14px!important;height:14px!important;vertical-align:text-bottom;cursor:pointer;-webkit-appearance:none!important}#${def.id.fixViewport}:checked::after,#${def.id.fixStroke}:checked::after,#${def.id.renderCanvas}:checked::after{border:0!important;background-color:#65a0db;color:#fff;content:"\u2713";font-weight:700;font-size:12px;line-height:14px}` +
          `#${def.id.fixViewport}::after,#${def.id.fixStroke}::after,#${def.id.renderCanvas}::after{position:relative;top:0;display:inline-block;margin:0;padding:0;width:14px;height:14px;border-radius:3px;background-color:#aaa;color:#fff;content:"\u2717";vertical-align:top;text-align:center;font-weight:700;font-size:10px;line-height:14px}.${def.class.flex}{display:flex;width:auto;min-width:100%;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}.${def.class.slider} input{visibility:hidden}#${def.id.shadowColor} *{box-sizing:content-box}#${def.id.shadowColor} .${def.class.frColorPicker}{margin:0;padding:0;width:auto}#${def.id.shadowColor} .${def.class.frColorPicker} #${def.id.color}{box-sizing:border-box;margin:0;padding:0 8px 0 0;width:160px!important;height:35px!important;min-width:160px;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:rgba(253, 253, 255, 0.69);color:#333!important;text-align:center;text-indent:0;font-weight:400!important;font-size:18px!important;font-family:'Anton',Times,serif!important;cursor:pointer}#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{display:block;box-sizing:border-box;margin:0;padding:5px;width:calc(100% - 2px)!important;height:78px;max-width:calc(100% - 2px);max-height:78px;min-width:calc(100% - 2px);min-height:78px;outline:none!important;border:2px solid #67a5df!important;border-radius:6px;color:#0b5b9c!important;font:normal 600 14px/150% ui-monospace,'Operator Mono Lig','JetBrains Mono',monospace,${INITIAL_VALUES.fontSelect}!important;resize:none;cursor:auto;word-break:break-all;overscroll-behavior:contain}#${def.id.fontCss} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontCss} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontCss} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px rgba(0, 0, 0, 0.2)}#${def.id.fontCss} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontEx} textarea{background:#fafafa!important}#${def.id.fontEx} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontEx} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontEx} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}` +
          `#${def.id.fontEx} textarea::-webkit-scrollbar-track-piece{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df;}.${def.class.switcher}{float:right;box-sizing:border-box;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;border-radius:4px;color:#0a68c1;}#${def.id.fontCss} textarea::placeholder,#${def.id.fontEx} textarea::placeholder{color:#555;font:italic 500 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont!important;opacity:.85}#${def.id.cSwitch}:hover,#${def.id.eSwitch}:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.${def.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9,#e9ffe9 25%,transparent 0,transparent 50%,#e9ffe9 0,#e9ffe9 75%,transparent 0,transparent)!important;background-color:#f7fff7!important;background-size:50px 50px}#${def.id.submit} button{box-sizing:border-box;margin:0;padding:5px 10px;width:auto;height:35px;min-width:min-content;min-height:35px;border:2px solid #6ba7e0;border-radius:6px;background-color:#67a5df;background-image:none;color:#fff!important;font:normal 600 14px/150% ${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;cursor:pointer}#${def.id.submit} button:hover{box-shadow:0 0 5px rgba(0, 0, 0, 0.4)!important}#${def.id.submit} .${def.class.cancel},#${def.id.submit} .${def.class.reset}{float:left;margin-right:8px}#${def.id.submit} .${def.class.submit}{float:right}#${def.id.backup}{display:none;margin:0 10px 0 0}.${def.class.anim}{border:2px solid #dc143c!important;background:#dc143c!important;animation:jiggle 1.8s ease-in infinite}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}.${def.class.tooltip}{position:relative;padding:0 0 0 1px;cursor:help;-webkit-user-select:none;user-select:none}.${def.class.tooltip} span.${def.class.emoji}{font-weight:400!important}.${def.class.tooltip}:active .${def.class.tooltip}{display:block}.${def.const.seed}_ml-5px{margin:0 0 0 -5px}` +
          `.${def.class.tooltip} .${def.class.tooltip}{position:absolute;z-index:999999;display:none;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #b8c4ce;border-radius:6px;background-color:#54a2ec;color:#fff;font-weight:400;opacity:.92;word-break:break-all}.${def.class.tooltip} .${def.class.tooltip} *{font-size:14px!important;font-family:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.class.tooltip} .${def.class.tooltip} em{font-style:normal!important}.${def.class.tooltip} .${def.class.tooltip} strong{color:#ff8c00;font-size:18px!important}.${def.class.tooltip} .${def.class.tooltip} p{display:block;margin:0 0 10px;color:#fff;text-indent:0!important;line-height:150%}.${def.class.ps1}{position:relative;top:-33px;right:5px;float:right;margin:0;padding:0;width:24px;height:0}.${def.class.ps2}{top:35px;right:-7px}.${def.class.ps3},.${def.class.ps4},.${def.class.ps5}{bottom:25px;left:auto}@-moz-document url-prefix() {#${def.id.container},#${def.id.fontList} .${def.class.selector},#${def.id.fontList} .${def.class.selectFontID} dl,#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{scrollbar-color:#487baf #f1f0f0;scrollbar-width:thin}}#${def.id.fshadow}{visibility:hidden;margin-top:5px;position:absolute;z-index:999;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #67a5df;border-radius:6px;background-color:#f0f6ff;color:#333;opacity:.92;left:21px}#${def.id.fshadow} .${def.id.fshadow}-label{display:flex;align-items:center;justify-content:space-around}#${def.id.fshadow} .${def.id.fshadow}-text{padding:5px;font-size:12px;font-weight:400;line-height:170%!important;color:#808287;word-break:break-all}.${def.const.seed}_inline_block{display:inline-block!important}.${def.const.seed}_block{display:block!important}.${def.const.seed}_none{display:none!important}.${def.const.seed}_visible{visibility:visible!important}.${def.const.seed}_hidden{visibility:hidden!important}.${def.const.seed}_m0p0{margin:0;padding:0}.${def.const.seed}_checkbox{height:32px;align-self:center}.${def.const.seed}_cb8{color:#8b0000!important}.${def.const.seed}_cce{color:#cecece!important}.${def.const.seed}_ccr{color:#dc143c!important}.${def.const.seed}_fb{font-weight:700!important}.${def.const.seed}_f-g1{filter:grayscale(1)!important}.${def.const.seed}_m0-4p0{margin:0 -4px;padding:0}.${def.const.seed}_m0060{margin:0 0 6px 0}` +
          `.${def.const.seed}_blr{border-top-left-radius:4px;border-bottom-left-radius:4px}.${def.const.seed}_brr{border-top-right-radius:4px;border-bottom-right-radius:4px}.${def.const.seed}_op1{opacity:1!important}.${def.const.seed}_usn{user-select:none!important}.${def.const.seed}_hmh35{height:35px!important;min-height:35px!important}.${def.class.range}{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:#fff;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic 700 14px/14px ui-monospace,Consolas,monospace;--fill-color:var(--primary-color);--progress-background:#dfdfdf;--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:#fff;--thumb-shadow:0 0 3px rgba(0, 0, 0, 0.4),0 0 1px rgba(0, 0, 0, 0.5) inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px rgba(0, 0, 0, 0.4);--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px #ff8c00 inset,0 0 3px rgba(0, 0, 0, 0.4);--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--step:1;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, "");--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);}` +
          `.${def.class.range}{width:auto;min-width:105%!important;margin:-3px 0 0 -7px;box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));background:linear-gradient(to right,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1}.${def.class.range}{--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}.${def.class.range}[disabled]{filter:grayscale(0.9);}.${def.class.range}[data-ticks-position=top]{--flip-y:1}.${def.class.range}::after,.${def.class.range}::before{--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max,block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y,-2.5ch);top:calc(-2.5ch * var(--flip-y));opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before,-1) * -1)) scale(var(--at-edge));pointer-events:none}.${def.class.range}::before{--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}.${def.class.range}::after{--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.${def.class.rangeProgress}{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);height:calc(var(--track-height));background:var(--progress-background,#eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.${def.class.rangeProgress}::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}` +
          `.${def.class.rangeProgress}::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}.${def.class.range}>input:only-of-type~.${def.class.rangeProgress}{--clip-start:0}.${def.class.range}>input::-webkit-slider-runnable-track{background:transparent!important;box-shadow:none!important;border:none!important}.${def.class.range}>input{-webkit-appearance:none;box-shadow:none!important;width:100%;height:var(--thumb-size)!important;margin:0!important;padding:0!important;position:absolute!important;left:0;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + calc(var(--ticks-gap)/ 2 * var(--flip-y,-1)))!important;border:0!important;cursor:grab;outline:0!important;background:0 0!important;--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:not(:only-of-type){pointer-events:none}.${def.class.range}>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.${def.class.range}>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.${def.class.range}>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}` +
          `.${def.class.range}>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}.${def.class.range}>input:active+output{transition:0s;opacity:0.9;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.${def.class.range}>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}.${def.class.range}>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)}.${def.class.range}>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}.${def.class.range}>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}.${def.class.range}>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}.${def.class.range}>input:nth-of-type(2)+output{--value:var(--value-b)}.${def.class.range}>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%);pointer-events:none;width:auto;min-width:40px;height:24px;min-height:24px;text-align:center;position:absolute;z-index:5;background:var(--value-background);border-radius:4px;padding:0 6px;left:var(--pos);transform:translate(var(--x-offset),calc(150% * var(--flip) - (var(--y-offset,0) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s;opacity:0;box-sizing:content-box}.${def.class.range}>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}`,
      });
      const hostStyle = s => `:host(${s}){display:block!important;visibility:visible!important;opacity:1!important}`;
      const fullStyle = (b, c) => `${def.var.style.main};background-color:${b};color:${c};border-radius:4px;padding:4px 8px`;
      const leftStyle = b => `${def.var.style.main};background-color:${b};color:#fffafa;border-radius:4px 0 0 4px;padding:4px 2px 4px 8px`;
      const rightStyle = b => `${def.var.style.main};background-color:${b};color:#fffafa;font-style:italic;border-radius:0 4px 4px 0;padding:4px 8px 4px 4px;margin:0 0 0 -2px`;
      const remarkStyle = c => `${def.var.style.main};color:${c};padding:4px 0;line-height:120%`;

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
          for (const { fn, args } of functionsList) {
            try {
              fn.apply(null, args);
              runCount++;
            } catch (e) {
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
          INFO(`%c${description}:%c${logs}!%c\r\n%c \u3000\u27A6${IN_FRAMES} ${CUR_HOST_NAME} %c${CUR_HOST_PATH}`, ...args);
        }
        addFn(fn, ...args) {
          if (typeof fn === "function") this.functionsToRun.push({ fn, args });
        }
        addFinalFn(fn, ...args) {
          if (typeof fn === "function") this.finalFunctionsToRun.push({ fn, args });
        }
      }

      /* FR_DIALOGBOX_CLASS */

      class FrDialogBox {
        constructor({ titleText = "Test", messageText = "Test message.", trueButtonText = "OK", falseButtonText = null, neutralButtonText = null } = {}) {
          this.cssText = hostStyle("fr-dialogbox") + def.var.style.frDialogBox;
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
        static closure() {
          return safeRemoveNode(`#${def.id.dialogbox}`);
        }
        _create(context) {
          this.container = cE("fr-dialogbox", { id: def.id.dialogbox });
          const shadow = (def.var.dialogIf = aS(this.container));
          applyStylesToShadowRoot(shadow, this.cssText, `${def.const.seed}-dialogbox`, false);
          this.frDialog = cE("fr-box", { class: def.class.db });
          appendNode(shadow, this.frDialog);
          const title = cE("fr-title", { class: def.class.dbt, innerHTML: tTP.createHTML(this.titleText) });
          const message = cE("fr-message", { class: def.class.dbm, innerHTML: tTP.createHTML(this.messageText) });
          const buttonContainer = cE("fr-buttoncontainer", { class: def.class.dbbc });
          appendNode(this.frDialog, title, message, buttonContainer);
          this.trueButton = cE("button", { class: [def.class.dbb, def.class.dbbt], textContent: this.trueButtonText });
          this.trueButton.addEventListener("click", () => void context._destroy());
          appendNode(buttonContainer, this.trueButton);
          if (this.hasFalse) {
            this.falseButton = cE("button", { class: [def.class.dbb, def.class.dbbf], textContent: this.falseButtonText });
            this.falseButton.addEventListener("click", () => void context._destroy());
            appendNode(buttonContainer, this.falseButton);
          }
          if (this.hasNeutral) {
            this.neutralButton = cE("button", { class: [def.class.dbb, def.class.dbbn], textContent: this.neutralButtonText });
            this.neutralButton.addEventListener("click", () => void context._destroy());
            appendNode(buttonContainer, this.neutralButton);
          }
        }
        _append() {
          if (CUR_WINDOW_TOP && this.container && FrDialogBox.closure()) {
            this.root = createDialogModel(this.container, this.parent);
            sleep(2e2).then(() => this.frDialog.classList.add(`${def.const.seed}_op1`));
          }
        }
        _destroy() {
          if (!this.container) return;
          this.frDialog.classList.remove(`${def.const.seed}_op1`);
          if (safeRemoveNode(this.container) && !qS("fr-configure")) closeDialogModel(this.root);
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
          appendNode(parent, dialog);
        }
        if (!getMainStyleElements({ primaryElement: true })) dialog.style.cssText = "width:100%;height:100%;outline:0;border-width:0";
        appendNode(dialog, container);
        dialog.hasAttribute("open") && dialog.close?.();
        dialog.inert = true;
        dialog.showModal?.();
        dialog.removeAttribute("inert");
        dialog.focus();
        return dialog;
      }

      function closeDialogModel(dialog) {
        dialog?.close?.();
        document.removeEventListener("blur", stopEventPropagation, true);
        return safeRemoveNode(dialog ?? `dialog#${def.const.dialog}`);
      }

      function applyStylesToShadowRoot(shadow, css, id, writable = true) {
        try {
          if (IS_COMPATIBLE_ADOPTEDSTYLE && shadow.adoptedStyleSheets) {
            const sheet = createStyleSheet(id, css);
            updateAdoptedStyleSheets(shadow, sheet, writable);
          } else updateInlineStyle(shadow, css, id, writable);
        } catch (e) {
          ERROR("applyStylesToShadowRoot:", e.message);
        }
      }

      function checkBrowserCompatible({ WEBKIT = NaN, BLINK = NaN, GECKO = NaN, ignoreDefect = false } = {}) {
        if (IS_CHEAT_UA) return false;
        const webkitCompatible = IS_REAL_WEBKIT && parseFloat(engineVersion) >= WEBKIT;
        const blinkCompatible = IS_REAL_BLINK && parseFloat(engineVersion) >= BLINK;
        const geckoCompatible = IS_REAL_GECKO && parseFloat(engineVersion) >= GECKO && (ignoreDefect || (!IS_GREASEMONKEY && !GMcontextMode));
        return webkitCompatible || blinkCompatible || geckoCompatible;
      }

      function createStyleSheet(id, css) {
        const sheet = new CSSStyleSheet();
        sheet.id = id;
        sheet.replaceSync(css);
        return sheet;
      }

      function updateAdoptedStyleSheets(shadow, sheet, writable) {
        const hostSheet = asArray(shadow.adoptedStyleSheets);
        const existIndex = hostSheet.FindIndex(s => s.id === sheet.id);
        if (!~existIndex) shadow.adoptedStyleSheets = [...hostSheet, sheet];
        else if (writable && !compareStyleSheets(shadow.adoptedStyleSheets[existIndex], sheet)) shadow.adoptedStyleSheets[existIndex] = sheet;
      }

      function updateInlineStyle(shadow, css, id, writable) {
        const style = cE("style", { id, media: "screen", type: "text/css", textContent: css });
        const existSheet = qS(`style#${id}`, shadow);
        if (css) {
          if (!existSheet) shadow.prepend(style);
          else if (writable) existSheet.textContent = css;
        } else safeRemoveNode(existSheet);
      }

      function compareStyleSheets(sheetA, sheetB) {
        if (!sheetA || !sheetB) return false;
        const [ruleA, ruleB] = [asArray(sheetA.cssRules), asArray(sheetB.cssRules)];
        return ruleA.length === ruleB.length && ruleA.every((rule, index) => rule.cssText === ruleB[index].cssText);
      }

      function checkBlinkCheatingUA(uad) {
        if (!IS_REAL_BLINK) return false;
        return (global.isSecureContext && !uad) || (uad && toString(uad) !== "[object NavigatorUAData]");
      }

      function getscaleValueMatrix(scaleMatrix) {
        const [o, t] = (def.array.scaleMatrix = scaleMatrix.slice(-2));
        return { prev: o || 1, cur: t || 1 };
      }

      function* nodesFromChildList(children) {
        for (const child of children.flat(Infinity)) {
          yield child instanceof Node ? child : new Text(child);
        }
      }

      function appendNode(parent, ...children) {
        if (!parent || !children.length) return;
        const nodesToAdd = asArray(nodesFromChildList(children));
        parent.append(...nodesToAdd);
        return nodesToAdd.every(node => parent.contains(node));
      }

      function insertStyle({ target, id, cssText, overwrite }) {
        if (!IS_INTERNALSTYLE_ALLOWED || !target || !id || !cssText) return;
        const existingStyles = getMainStyleElements({ target });
        if (overwrite) existingStyles.forEach(style => (style.dataset.frRemoved = true) && safeRemoveNode(style));
        else if (existingStyles.length > 0) return true;
        try {
          const newStyle = cE("style", { id, media: "screen", type: "text/css", textContent: cssText, [def.const.cssAttrName]: overwrite ?? false });
          return appendNode(target, newStyle);
        } catch (e) {
          return ERROR("insertStyle:", e.message);
        }
      }

      function sqliteDBDataAccess(e, t, p) {
        let [g, o, d] = [0, "", asArray(p).reduce((acc, char) => acc + char.charCodeAt(0), "")];
        const [s, c, u] = [Math.floor(d.length / 5), Math.ceil(p.length / 2), Math.pow(2, 31) - 1];
        const m = parseInt(d[s] + d[s * 2] + d[s * 3] + d[s * 4] + d[s * 5]);
        if (t) {
          if (m < 2) return "";
          let k = random(1e9) % 1e8;
          d += k;
          while (d.length > 10) d = (parseInt(d.slice(0, 10)) + parseInt(d.slice(10))).toString();
          d = (m * d + c) % u;
          for (let i = 0, l = e.length; i < l; i++) {
            g = parseInt(e.charCodeAt(i) ^ Math.floor((d / u) * 255));
            o += g.toString(16).padStart(2, "0");
            d = (m * d + c) % u;
          }
          return o + k.toString(16).padStart(8, "0");
        } else {
          const k = parseInt(e.slice(-8), 16);
          e = e.slice(0, -8);
          d += k;
          while (d.length > 10) d = (parseInt(d.slice(0, 10)) + parseInt(d.slice(10))).toString();
          d = (m * d + c) % u;
          for (let i = 0, l = e.length; i < l; i += 2) {
            g = parseInt(parseInt(e.slice(i, i + 2), 16) ^ Math.floor((d / u) * 255));
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

      async function checkInternalStyleCSP() {
        const res = await getDocumentElement.getNodeAndObserve();
        const testContainer = document.head || res.get();
        const testID = "test-internal-style";
        try {
          const style = cE("style", { id: testID, type: "text/css", textContent: `#${testID} { background-color: rebeccapurple; }` });
          appendNode(testContainer, style);
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
          safeRemoveNode(`style#${testID}`, testContainer);
        }
      }

      /* SCALE_COORDINATE_CORRECTION_FUNCTION */

      function adjustCoordinateOffset({ cur, prev = 1, props }) {
        if (!CUR_WINDOW_TOP && (IS_BLINK_ABOVE_128 || IS_GECKO_BELOW_126)) return;
        const DOM_EVENT_PROPERTY_MAP = [
          { objs: [MouseEvent.prototype], props: ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "screenX", "screenY", "x", "y"] },
          { objs: [global, GMunsafeWindow], props: ["pageXOffset", "pageYOffset", "scrollX", "scrollY", ...props.window] },
          { objs: [Element.prototype], props: ["scrollLeft", "scrollTop", ...props.element] },
          { objs: [HTMLElement.prototype], props: [...props.html] },
        ];
        const [zoomScale, results] = [cur / prev, debugging && new Set()];
        const processProps = ({ objs, props }) => {
          const [uObjs, uProps] = [uniq(objs), uniq(props)];
          uObjs.forEach(obj => void uProps.forEach(prop => void definePropertyProcess(obj, prop, Reflect.getOwnPropertyDescriptor(obj, prop))));
        };
        Object.assign(global, { frDOMRects: { toggle: IS_BLINK_ABOVE_128 || IS_REAL_GECKO, cur, prev } });
        try {
          DOM_EVENT_PROPERTY_MAP.forEach(processProps);
          if (IS_REAL_BLINK) overrideGetScreenCTM(SVGGraphicsElement.prototype);
          if (global.frDOMRects.toggle) overrideGetDOMRects(Element.prototype);
          DEBUG(`[FONTSCALE]${IN_FRAMES} %O Done!`, results || "Adjust");
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
            debugging && results.add({ obj: getObjectType(target), prop });
          } catch (e) {
            ERROR(`Error defining property "${prop}":`, e.message);
          }
        }

        function overrideGetScreenCTM(svg) {
          Reflect.defineProperty(svg, "getScreenCTM", {
            value: function () {
              const originalMatrix = def.var.getScreenCTM.call(this);
              const newSVGMatrix = this.ownerSVGElement?.createSVGMatrix() ?? document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
              Object.assign(newSVGMatrix, ...["a", "b", "c", "d", "e", "f"].map(prop => ({ [prop]: originalMatrix[prop] / cur })));
              return newSVGMatrix;
            },
          });
          debugging && results.add({ obj: getObjectType(svg), prop: "getScreenCTM()" });
        }

        function overrideGetDOMRects(element) {
          Reflect.defineProperty(element, "getClientRects", { value: overrideGetClientRects });
          Reflect.defineProperty(element, "getBoundingClientRect", { value: overrideGetBoundingClientRect });
          debugging && results.add({ obj: getObjectType(element), prop: "getDOMRects" });
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
        value: (data, eT = 6048e5) => ({ data, expired: Date.now() + eT }),
        set: (key, ...options) => {
          const cacheValue = cache.value(...options);
          GMsetValue(key, encrypt(JSON.stringify(cacheValue)));
        },
        get: async key => {
          try {
            const encryptedValue = await GMgetValue(key);
            if (!encryptedValue) return;
            const current = Date.now();
            const { data, expired } = JSON.parse(decrypt(encryptedValue));
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
            const fontFamily = this.originFont.toUpperCase() === fontName.toUpperCase() ? this.originFont : `'${fontName}',${this.originFont}`;
            this.canvasContext.font = `${this.fontSize}px ${fontFamily}`;
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
          this.canvasContext = this.detectFontData = this.originFontData = null;
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
        const fontMap = new Map();
        return fontlist.reduce((res, font) => {
          if (!font) return res;
          if (fontMap.has(font.ch) || fontMap.has(font.en)) {
            const idx = fontMap.get(font.ch) || fontMap.get(font.en);
            if (font.ps && res[idx] && !res[idx].ps) res[idx] = font;
          } else {
            res.push(font);
            [font.ch, font.en].forEach(key => key && fontMap.set(key, res.length - 1));
          }
          return res;
        }, []);
      }

      async function getMergedFontCheckList(defFontCheck = fontCheck) {
        try {
          const cusFontList = await GMgetValue(CUSTOMFONTS);
          const cusFontCheck = cusFontList ? JSON.parse(decrypt(cusFontList)) : [];
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
        return asArray(domains).FindIndex(domain => domain.domain === curHost);
      }

      function updateExsitesIndex(sites) {
        const wildcardFn = domain => {
          if (typeof domain !== "string") return null;
          return domain.startsWith("*") ? new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${domain.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`) : domain;
        };
        const siteArray = asArray(sites, wildcardFn).filter(Boolean);
        return siteArray.FindIndex(site => (site instanceof RegExp && site.test(CUR_HOST)) || site === CUR_HOST);
      }

      function saveData(key, data) {
        try {
          storage.session?.removeItem(def.const.flagName);
          GMsetValue(key, encrypt(JSON.stringify(data)));
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
        return fontArray.reduce((acc, font) => {
          if (typeof font !== "string") return acc;
          const chsFont = font.match(/^{([^{}]+)}$/);
          return acc.concat([chsFont ? convertToUnicode(chsFont[1]) : font]);
        }, []);
      }

      async function getRootElementSelector() {
        const rootID = await getDocumentElement.getNodeAndObserve().then(res => res.get().id);
        return (!CUR_WINDOW_TOP && IS_BLINK_BELOW_128) || IS_GREASEMONKEY || !rootID ? `:root ` : `:root#${rootID} `; // Fit::Greasemonkey & Userscripts & Blink < 128::IFRAME_STYLE_PARSING
      }

      /* FONT_RENDERING_PREPROCESSING */

      void (async function (requestCodeAndFunc, getConfigureData, getCustomMonoData, getExSitesData, getFontSetData, getFontScaleDef, getFontOverrideDef, getFontProperty) {
        let font_Set, exclude_Site, parameter_Set, include_Site, feed_Back;
        const { code: ROOT_SECRET_KEY, callback } = requestCodeAndFunc();
        if (!inspectLicense()?.inspect()) return CUR_WINDOW_TOP && callback(def.url.installURI);
        const addLoadEvents = new RegisterEvents();
        const requestBackendData = await Promise.all([getRootElementSelector(), getFontOverrideDef(), getConfigureData(), getExSitesData(), getCustomMonoData(), getFontProperty()]);
        const [globalPrefix, fontOverrideDefData, _config_data_, { exSitesIndex }, { monoSiteRules, monoFontList, monoFeature }, { fontFeature, fontVariant }] = requestBackendData;
        const { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isFixViewport, isCloseTip, isCustomMono, rebuild, curVersion, globalDisable } = _config_data_;
        const CONST_VALUES = await getFontSetData(isFontsize, isFixViewport);

        /* CONVERT_FONT_PARAMETERS_TO_REALTIME_STYLE */

        const defaultFont = IS_CHN ? "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53" : "Website Font";
        const customFontFeature = `${fontFeature ? `--fr-font-feature:${fontFeature};` : ``}${fontVariant ? `--fr-font-variant:${fontVariant};` : ``}`;
        const selectedFont = CONST_VALUES.fontSelect?.split(",")[0]?.replace(/["']/g, "") ?? "";
        const [fontface_i, smooth_i] = [Boolean(CONST_VALUES.fontFace), Boolean(CONST_VALUES.fontSmooth)];
        const fontFamily = fontface_i ? "font-family:var(--fr-font-family),var(--fr-font-basefont);" : "";
        const fontFaces = fontface_i && selectedFont ? await generateFontFaceCSS(selectedFont, fontOverrideDefData) : "";
        let [fontsize_r, bodyScalecssText] = [parseFloat(CONST_VALUES.fontSize), ""];
        if (!~exSitesIndex && isFontsize && fontsize_r >= 0.8 && fontsize_r <= 1.5 && fontsize_r !== 1) {
          bodyScalecssText = generateFontSizeCss(fontsize_r);
        } else fontsize_r = 1;
        def.array.scaleMatrix.push((def.var.curScale = fontsize_r));
        const smoothGecko = IS_REAL_GECKO && platform === "MacOS" ? "-moz-osx-font-smoothing:grayscale!important;" : "";
        const smoothMac = !IS_CHEAT_UA && platform === "MacOS" ? "-webkit-font-smoothing:antialiased!important;" : "";
        const fontSmoothCssText = `font-feature-settings:var(--fr-font-feature,unset);font-variant:var(--fr-font-variant,unset);font-optical-sizing:auto;font-kerning:auto;${smoothGecko}${smoothMac}`;
        const smoothing = smooth_i ? fontSmoothCssText : "";
        const textrender = smooth_i ? "text-rendering:optimizeLegibility;" : "";
        const [stroke_r, shadow_r] = [parseFloat(CONST_VALUES.fontStroke), parseFloat(CONST_VALUES.fontShadow)];
        const textStroke = stroke_r > 0 && stroke_r <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
        const strokeCssText = `${textStroke ? stroke_r : 0}px currentcolor`;
        const shadow_c = String(CONST_VALUES.shadowColor) || INITIAL_VALUES.shadowColor;
        const textShadow = shadow_r > 0 && shadow_r <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
        const shadowCssText = generateTextShadow(shadow_r, shadow_c.toLowerCase());
        const excludeSplit = `${textShadow ? "text-shadow:none!important;" : ""}${textStroke ? "-webkit-text-stroke:var(--fr-no-stroke, 0px transparent)!important;" : ""}`;
        const [inText, exText] = [String(CONST_VALUES.fontCSS), String(CONST_VALUES.fontEx)];
        const selectionGeckoCSS = `:is(:not(${exText}))::-moz-selection{color:currentcolor!important;background:rgba(30, 190, 227, 0.29)!important;-webkit-text-fill-color:currentcolor!important;${excludeSplit}}`;
        const selectionWebkitCSS = `:is(:not(${exText}))::selection{color:#fff!important;background:#3367d1!important;-webkit-text-fill-color:#fff!important;${excludeSplit}}`;
        const selectionCssText = textStroke ? (IS_REAL_GECKO ? selectionGeckoCSS : selectionWebkitCSS) : "";
        const cssExclude = exText && (textShadow || textStroke) ? `${globalPrefix}:is(${exText}){${excludeSplit}}` : ``;
        const codeFonts = exText ? funcCodefont(exText, fontface_i, isCustomMono) : "";
        const noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && CONST_VALUES.fixShadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
        const getBoldFixCssText = shadow => `[${def.const.boldAttrName}],.${def.const.boldAttrName}{-webkit-text-stroke:var(--fr-fix-stroke)!important;${shadow ?? ""}}`;
        const boldFixCSSText = IS_CAUSED_BOLDSTROKEERROR && CONST_VALUES.fixStroke ? getBoldFixCssText(noTextShadowCss) : "";
        const processRecoverBoldStyle = correctBoldStrokeProcess({ Scenes: "recover", Permit: CONST_VALUES.fixStroke });
        const curEmptyConfig = !fontface_i && !smooth_i && !textShadow && !textStroke && fontsize_r === 1;
        const IS_CURRENTSITE_ALLOWED = !~exSitesIndex && !curEmptyConfig;
        const fontStyle = `${fontFaces}${bodyScalecssText}${globalPrefix}:is(${inText}){${fontFamily}${textShadow}${textStroke}${smoothing}${textrender}}${selectionCssText}${cssExclude}${codeFonts}${boldFixCSSText}`;
        const textShadowFix = `0 0 ${shadow_r}px ${shadow_c.toLowerCase().slice(0, 7).concat("2b")}`;
        const isFixInputEnabled = fi => fi === "true" || (!fi && /;?\s*\w+_last(?:visi|ac)t=\d{10}(?:;|%)/.test(document.cookie) && !storage.local?.setItem(FIXINPUT, true));
        const firefoxInputFix = IS_REAL_GECKO & fontface_i && isFixInputEnabled(storage.local?.getItem(FIXINPUT)) ? def.var.style.firefox : "";
        const [monoAllowed, isEditorBlock, supportMix] = [Boolean(isCustomMono), Boolean(CONST_VALUES.isEditorBlock), CSS.supports("(color:color-mix(in srgb, tan, red))")];
        const monoShadowColor = monoAllowed && supportMix ? `--fr-mono-shadowcolor:color-mix(in srgb, rgba(0, 0, 0, 0.05) 75%, currentcolor 25%);` : ``;
        const monoFontText = monoAllowed ? `--fr-mono-font:${monoFontList || INITIAL_REMARKS.monospacedFont};` : ``;
        const monoShadow = monoAllowed ? `--fr-mono-shadow:0 0 0 var(--fr-mono-shadowcolor, currentcolor);` : ``;
        const monoFeatureText = monoAllowed ? `--fr-mono-feature:${monoFeature || INITIAL_REMARKS.monospacedFeature};` : ``;
        const monoFallback = monoAllowed ? `--fr-mono-fallback:'Courier New','Liberation Mono',Courier;` : ``;
        const rootPseudoClass = `:root{--fr-font-basefont:${INITIAL_REMARKS.fontBase};${customFontFeature}--fr-font-fontscale:${fontsize_r};--fr-font-family:${CONST_VALUES.fontSelect};--fr-font-shadow:${shadowCssText};--fr-font-stroke:${strokeCssText};--fr-no-stroke:0px transparent;--fr-fix-stroke:var(--fr-no-stroke);--fr-fix-shadow:${textShadowFix};${monoFontText}${monoFallback}${monoShadowColor}${monoShadow}${monoFeatureText}}`;
        const tStyle = `@charset "UTF-8";${CUR_WINDOW_TOP ? def.var.style.frDialog : ""}${IS_CURRENTSITE_ALLOWED ? `${rootPseudoClass}${firefoxInputFix}${fontStyle}` : ``}`;

        /* FR_CONFIGURE_SHADOWROOT_CONTENT */

        const isDisabled = isEditorBlock ? `disabled title="${IS_CHN ? "在特定/图文/编辑类型网站中自动禁用" : "Automatically disabled in specific/graphic/editorial websites"}" ` : ``;
        const canvasLabel = IS_CHN
          ? `<label title="开启 Canvas 画布文本的字体渲染。如开启后 Canvas 文本渲染异常请关闭它。">渲染画布</label>`
          : `<label title="Enable Canvas font rendering. Please turn it off if occurs canvas render error.">Canvas</label>`;
        const [canvasClass, canvasCheck] = [fontface_i ? `` : `class="${def.const.seed}_hidden"`, CONST_VALUES.renderCanvas ? "checked" : ""];
        const tRenderCanvas = `<span id="${def.id.rdCanvas}" ${canvasClass}>(${canvasLabel} <input type="checkbox" id="${def.id.renderCanvas}" ${canvasCheck}/>)</span>`;
        const fixViewportLabel = IS_CHN
          ? `<label title="修正字体比例缩放后视口单位出现数据偏移的问题。如开启后页面排版出现异常请关闭它。">视口修正</label>`
          : `<label title="Fixed viewport unit offset after font scaling. Please turn it off if occurs layout error.">Fix VPU</label>`;
        const tFixViewport = `<span id="${def.id.fviewport}">(${fixViewportLabel} <input type="checkbox" id="${def.id.fixViewport}" ${CONST_VALUES.fixViewport ? "checked" : ""}/>)</span>`;
        const fontSizeSpan = IS_CHN
          ? `<span class="${def.const.seed}_m0p0" title="双击编辑站点缩放修正设置数据" id="${def.const.seed}_fontscale_defined">字体比例缩放</span>`
          : `<span class="${def.const.seed}_m0p0" title="Double-click to edit the site scaling correction setting" id="${def.const.seed}_fontscale_defined">Font Scaling</span>`;
        const tFontSizeHTML = String(
          `<li id="${def.id.fontSize}">
            <div class="${def.class.flex}">
              ${fontSizeSpan}${isFixViewport ? tFixViewport : ""}
              <input id="${def.id.fontScale}" type="text" data-fr-type="number" maxlength="5" ${isDisabled}/>
            </div>
            <div class="${def.class.range}" data-ticks-position="top" ${isDisabled}
              style="--min:.8;--max:1.5;--step:.001;--value:${CONST_VALUES.fontSize};--text-value:'${String(CONST_VALUES.fontSize.toFixed(3))}'">
              <input id="${def.id.scaleSize}" type="range" min=".8" max="1.5" step=".001" value="${CONST_VALUES.fontSize.toFixed(3)}" ${isDisabled}/>
              <output></output>
              <div class='${def.class.rangeProgress}'></div>
            </div>
          </li>`
        );
        const FixStrokeLabel = IS_CHN
          ? `<label title="修正 Chromium 96.0 以上版本对粗体样式附加描边的渲染错误。默认开启，如出现严重卡顿请关闭之。">粗体修正</label>`
          : `<label title="Fixed rendering issues of Chromium above 96.0 on bold with text-stroke. Default by ON, please turn it off if lagging.">Fix Bold</label>`;
        const fixShadowLabel = IS_CHN
          ? `修正 Chromium 123.0 以上版本对粗体样式附加阴影效果的渲染错误，默认关闭。`
          : `Fixed rendering issues of Chromium above 123.0 on bold with text-shadow.`;
        const lazyloadLabel = IS_CHN
          ? `延迟加载修正程序，默认关闭，请注意：仅在出现样式异常或修正冲突时开启。`
          : `Lazy loading the fixer, Only turn it on when style loading error or conflict.`;
        const tFixShadowHTML = String(
          `<div id="${def.id.fshadow}-shadow-label" class="${def.id.fshadow}-label">
            <span>${IS_CHN ? "附加阴影样式修正：" : "Add Shadow Fix: "}</span>
            <input type="checkbox" class="${def.class.checkbox}" id="${def.id.fixShadow}" ${CONST_VALUES.fixShadow ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
            <label for="${def.id.fixShadow}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}_f-g1"`}></label>
          </div>
          <div id="${def.id.fshadow}-shadow-text" class="${def.id.fshadow}-text">${fixShadowLabel}</div>`
        );
        const tLazyloadHTML = String(
          `<div class="${def.id.fshadow}-label">
            <span>${IS_CHN ? "启用修正延迟加载：" : "Use lazy loading: "}</span>
            <input type="checkbox" class="${def.class.checkbox}" id="${def.id.lazyload}" ${CONST_VALUES.lazyload ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
            <label for="${def.id.lazyload}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}_f-g1"`}></label>
          </div>
          <div class="${def.id.fshadow}-text">${lazyloadLabel}</div>`
        );
        const tFixStrokeHTML = String(
          `<span id="${def.id.fstroke}">
            (${FixStrokeLabel} <input type="checkbox" id="${def.id.fixStroke}" ${CONST_VALUES.fixStroke ? "checked" : ""} />)
            <div id="${def.id.fshadow}">${IS_CAUSED_BOLDSHADOWERROR ? tFixShadowHTML : ""}${tLazyloadHTML}</div>
          </span>`
        );
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
        const title = IS_CHN ? `双击查看更新历史` : `Double-click to view the update history of`;
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
                ${isFontsize ? tFontSizeHTML : ""}
                <li id="${def.id.fontStroke}">
                  <div class="${def.class.flex}">
                    <span class="${def.const.seed}_m0p0">${IS_CHN ? "字体描边尺寸" : "Font Stroke"}</span>
                    ${IS_CAUSED_BOLDSTROKEERROR ? tFixStrokeHTML : ""}
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
                    ${IS_GREASEMONKEY ? "" : tRenderCanvas}
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
                  <div class="${def.const.seed}_m0060">${IS_CHN ? "需要渲染的网页元素" : "Rendered Elements"}
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
                  <div class="${def.const.seed}_m0060">${IS_CHN ? "排除渲染的HTML标签" : "Excluded HTML Labels"}
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
            const troubleshootMessage = IS_CHN
              ? `脚本内部样式无法被正常写入，请排查站点 CSP 权限或脚本冲突问题。`
              : `The script internal styles cannot be written properly, please troubleshoot site CSP permissions or script conflict issues.`;
            const disabledMessage = IS_CHN
              ? `全局字体渲染已禁用！如需开启请重新配置保存全局数据。`
              : `Global font rendering is disabled! To enable it please reconfigure to save global data.`;
            const formattedStatusMessage = IS_CHN
              ? `%c%s\r\n%cINTRO.URL: %s\r\n%c\u259e 脚本版本：%cV%s%c%s%c\r\n\u259e 个性化设置：%c%s%c/%s（当前设置：%s）\r\n%c\u259e 本地备份：%s\u3000\u259a 字体缩放：%s\r\n\u259e 渲染预览：%s\u3000\u259a 等宽字体：%s\r\n%c\u259e 渲染字体：%s\r\n\u259e 字体平滑：%s\u3000\u259a 字体重写：%s\r\n\u259e 字体描边：%s\u3000\u259a 字体阴影：%s`
              : `%c%s\r\n%cINTRO.URL: %s\r\n%c\u259e Script Version: %cV%s%c%s%c\r\n\u259e Customize Total: %c%s%c/%s (current: %s)\r\n%c\u259e Backups: %s\u3000\u259a Font Scaling: %s\r\n\u259e Preview: %s\u3000\u259a Monospaced Font: %s\r\n%c\u259e Rendering Font: %s\r\n\u259e Font Smooth: %s\u3000\u259a Font Rewrite: %s\r\n\u259e Font Stroke: %s\u3000\u259a Font Shadow: %s`;
            const [ON, OFF, SITEBLOCK] = IS_CHN ? ["开", "关", "站点禁用"] : ["ON ", "OFF", "SITE BLOCKED"];
            const formattedStyle = [
              "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
              def.var.scriptName,
              "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
              def.url.introURL,
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
              ~def.var.domainIndex ? (IS_CHN ? "\u81ea\u5b9a\u4e49" : "Custom") : IS_CHN ? "\u5168\u5c40" : "Global",
              "color:#4682b4;font-size:12px;line-height:180%",
              isBackupFunction ? ON : OFF,
              isFontsize ? (isEditorBlock ? `${OFF} (${SITEBLOCK})` : `${ON} (R \u2248 ${CONST_VALUES.fontSize.toFixed(3)})`) : OFF,
              isPreview ? ON : OFF,
              isCustomMono ? ON : OFF,
              "color:#008080;font-size:12px;line-height:180%",
              fontface_i ? def.var.reFontFace : IS_CHN ? `\u5df2\u5173\u95ed\uff08\u91c7\u7528${def.var.reFontFace}\uff09` : `OFF (using ${def.var.reFontFace})`,
              CONST_VALUES.fontSmooth ? ON : OFF,
              CONST_VALUES.fontFace ? ON : OFF,
              CONST_VALUES.fontStroke ? ON : OFF,
              CONST_VALUES.fontShadow ? ON : OFF,
            ];
            const shortcut = isHotkey && !IS_CHEAT_UA ? `(${platform === "MacOS" ? "Option" : "Alt"}+X)` : ``;
            const rerenderText = IS_CHN
              ? `已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。`
              : `is already in the excluded rendering list. To re-render, please turn it on in the script menu.`;
            if (!IS_INTERNALSTYLE_ALLOWED) logMessage("shown-system-error", troubleshootMessage, "#d11696");
            else if (globalDisable && curEmptyConfig) logMessage("shown-system-disabled", disabledMessage, "#5e0d1c");
            else if (!~exSitesIndex) __console("shown-system-info", formattedStatusMessage, ...formattedStyle);
            else logMessage("shown-system-disabled", `${TOP_HOST.toUpperCase()} ${rerenderText} ${shortcut}`, "#4b0082");
          },
          compat: isCheatUA => {
            const isEngineCompatible = (IS_REAL_BLINK && engineVersion >= 90) || (IS_REAL_GECKO && engineVersion >= 98) || (IS_REAL_WEBKIT && engineVersion >= 15.4);
            const compatibleMessage = `%c${brand} Browser Compatible: ${isEngineCompatible}%c\r\nFull functionality of the script is only supported in desktop browsers. (Version: Edge>=90, Chrome>=90, Opera>=76, Firefox>=98, Safari>=15.4)`;
            const compatibleStyles = [`${fullStyle("#dc143c", "#fffafa")};text-transform:uppercase`, "color:0;font-family:ui-monospace,monospace;line-height:150%"];
            const cheatUAWarning = IS_CHN
              ? `%c浏览器UserAgent异常警告%c\r\n伪造 UserAgent 信息会造成部分脚本功能失效。如需使用全功能脚本，请恢复浏览器默认的 UserAgent 信息。`
              : `%cBrowser UserAgent Exception%c\r\nForging UserAgent information will cause some script functions to be invalid. To use the full-featured script, restore your browser's default UserAgent information.`;
            const cheatUAStyles = [`${fullStyle("#715100", "#fffafa")};text-transform:uppercase`, "color:0;font-family:ui-monospace,monospace;line-height:150%"];
            navigatorInfo["cheat-ua"] = isCheatUA;
            INFO(`${compatibleMessage}%c\r\n${JSON.stringify(navigatorInfo)}`, ...compatibleStyles, "color:#a9a9a9;font:italic 400 12px/150% ui-monospace,monospace");
            if (isCheatUA) __console("warn", cheatUAWarning, ...cheatUAStyles);
          },
        };

        function logMessage(type, message, color) {
          __console(
            type,
            `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.introURL}\r\n%c${message}`,
            "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
            "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
            `color:${color};font:normal 500 12px/180% ui-monospace,monospace`
          );
        }

        function insertPreviewStyleToFrame(node, style) {
          const doc = node.contentWindow?.document || node.contentDocument;
          if (!doc || !doc.head || !doc.body || !doc.body.innerText.trim()) return Promise.resolve(false);
          return new Promise(resolve => {
            const { css, id } = getExactFrameStyle(style, doc.head);
            const isInserted = insertStyle({ target: doc.head, id, cssText: css, overwrite: true });
            isInserted && correctBoldStrokeProcess({ Scenes: "iframe" })(null, doc);
            resolve(isInserted);
          });
        }

        function insertAsyncStyleToFrame(node, style, condition) {
          const doc = node.contentWindow?.document || node.contentDocument;
          if (!doc || !doc.head) return Promise.resolve(false);
          return new Promise(resolve => {
            const { css, id, styles } = getExactFrameStyle(style, doc.head);
            if (styles.length === 0 && insertStyle({ target: doc.head, id, cssText: css })) {
              if (condition === "childList") correctBoldStrokeProcess({ Scenes: "iframe" })(null, doc);
              resolve(true);
            } else resolve(styles.length > 0);
          });
        }

        async function processframeStyleAsync({ node, condition, cssText }) {
          try {
            const insertFrameStyle = condition === "Preview" ? insertPreviewStyleToFrame : insertAsyncStyleToFrame;
            const isInserted = await insertFrameStyle(node, cssText, condition);
            return isInserted ? condition : "Ignored";
          } catch (e) {
            ERROR("processFrameStyleAsync.%s:", condition, { node, url: node.src, msg: e.message });
            return "Error";
          }
        }

        function getExactFrameStyle(currentStyle, iframe) {
          const styles = getMainStyleElements({ target: iframe });
          const id = styles[0]?.id ?? generateRandomString(12, "char");
          const ownerDocumentID = iframe.ownerDocument.documentElement.id;
          const filter = IS_BLINK_BELOW_128 || IS_GREASEMONKEY || !ownerDocumentID ? "" : "#" + ownerDocumentID;
          return { css: currentStyle.replace(/\b#(\w+)\b/g, filter), id, styles };
        }

        function applyStyleToIframes({ condition, nodeArray = [], style } = {}) {
          if (!IS_CURRENTSITE_ALLOWED) return;
          if (nodeArray.length === 0) nodeArray = qA("html>:not(head) *").flatMap(el => (el.shadowRoot ? qA("iframe", el.shadowRoot) : getNodeName(el) === "iframe" ? [el] : []));
          updateFramesWithConditionalStyle(nodeArray, condition, style ?? tStyle);
        }

        function updateFramesWithConditionalStyle(frameArray, condition, cssText) {
          const updatedCSS = IS_BLINK_BELOW_128 || IS_GECKO_ABOVE_126 ? cssText : cssText.replace("var(--fr-font-fontscale)", "initial");
          frameArray.forEach(node => {
            if (condition !== "Preview" && IS_GREASEMONKEY) node.addEventListener("load", () => applyPassiveStyleToIframe(node, updatedCSS));
            processActiveFramework({ node, condition, cssText: updatedCSS });
          });
        }

        function applyPassiveStyleToIframe(iframe, cssText) {
          try {
            const iframeHead = iframe.contentWindow.document.head || iframe.contentDocument.head;
            const { display, visibility } = gCS(iframe);
            if (!iframeHead || display === "none" || visibility === "hidden") return;
            const { css, id } = getExactFrameStyle(cssText, iframeHead);
            const result = insertStyle({ target: iframeHead, id, cssText: css });
            result && iframe.setAttribute(def.const.iframeAttrName, "Passive");
            DEBUG("[NOFRAME] Passively insert styles:", result);
          } catch (e) {
            ERROR("applyPassiveStyleToIframe:", { node: iframe, url: iframe.src, msg: e.message });
          }
        }

        async function processActiveFramework({ node, condition, cssText }) {
          try {
            if (!node || !cssText) return;
            node.removeAttribute("sandbox");
            const { display, visibility } = gCS(node);
            const { bottom, right, width, height } = node.getBoundingClientRect();
            if (bottom < 0 || right < 0 || width < 4 || height < 4 || display === "none" || visibility === "hidden") return;
            const action = await processframeStyleAsync({ node, condition, cssText });
            node.setAttribute(def.const.iframeAttrName, action);
            COUNT(`[ASYNCFRAMES][ACT:${action}]`);
          } catch (e) {
            ERROR("ASYNCFRAMES:", e.message);
          }
        }

        function loadPreview(hasPreviewPermission, styleText = tStyle, shouldReturn = true) {
          try {
            if (!hasPreviewPermission) return;
            const [currentID, matchedID] = [`#${document.documentElement.id}`, styleText.match(/\b#\w+\b/)?.[0]];
            if (matchedID && matchedID !== currentID) styleText = styleText.replace(/\b#\w+\b/g, currentID);
            const isInserted = insertStyle({ target: document.head, id: def.id.rndStyle, cssText: styleText, overwrite: true });
            if (isFontsize && isInserted) {
              const { prev, cur } = getscaleValueMatrix(def.array.scaleMatrix);
              cur !== prev && adjustCoordinateOffset({ cur, prev, props: def.array.props });
              DEBUG("scale<Matrix>: %o", def.array.scaleMatrix);
            }
            applyStyleToIframes({ condition: "Preview", style: styleText });
            def.var.preview = !shouldReturn;
          } catch (e) {
            ERROR("LoadPreview:", e.message);
          }
        }

        function insertHTML(htmlText) {
          try {
            const section = cE("fr-configure", { id: def.id.configure });
            const shadow = (def.var.configIf = aS(section));
            const cssText = `${hostStyle("fr-configure")}${def.var.style.frConfigure}`;
            shadow.innerHTML = tTP.createHTML(htmlText);
            applyStylesToShadowRoot(shadow, cssText, `${def.const.seed}-configure`, false);
            createDialogModel(section, document.documentElement);
          } catch (e) {
            ERROR("InsertHTML:", e.message);
          }
        }

        function setSliderProperty(slider, thisValue, bits) {
          if (!slider) return;
          const fixedValue = Number(thisValue).toFixed(bits);
          slider.value = fixedValue;
          slider.parentNode.style.setProperty("--value", fixedValue);
          slider.parentNode.style.setProperty("--text-value", JSON.stringify(fixedValue));
        }

        function checkInputValue(input, slider, regex, bits, isOne = false) {
          if (!input || !slider) return;
          const sanitizeInput = () => (input.value = input.value.replace(/[^0-9.]/g, ""));
          const formatValue = value => (value === Number(isOne) ? "OFF" : value.toFixed(bits));
          const updateValues = () => {
            const inputValue = input.value === "OFF" ? Number(isOne) : Number(input.value);
            const sliderStyles = slider.parentNode.style;
            const sliderValue = Number(sliderStyles.getPropertyValue("--value"));
            const minValue = Number(sliderStyles.getPropertyValue("--min"));
            const maxValue = Number(sliderStyles.getPropertyValue("--max"));
            const isValidInput = regex.test(inputValue) && inputValue >= minValue && inputValue <= maxValue;
            const finalValue = isValidInput ? inputValue : sliderValue;
            setSliderProperty(slider, finalValue, bits);
            input.value = formatValue(finalValue);
            input._value_ = finalValue;
          };
          input.addEventListener("input", sanitizeInput);
          input.addEventListener("change", updateValues);
        }

        function removeKeyboardEvent(...targets) {
          document.addEventListener("blur", stopEventPropagation, true);
          asArray(targets).forEach(target => ["keydown", "keyup", "keypress"].forEach(eventType => target?.addEventListener(eventType, stopEventPropagation)));
        }

        function getBrightness(hexa) {
          const r = parseInt(hexa.substr(0, 2), 16);
          const g = parseInt(hexa.substr(2, 2), 16);
          const b = parseInt(hexa.substr(4, 2), 16);
          const a = parseInt(hexa.substr(6, 2), 16) / 255 || 1;
          return (0.2126 * r + 0.7152 * g + 0.0722 * b) / a;
        }

        function isFontReady(t = 1e3) {
          if (typeof def.var.fontReady !== "undefined") return delete def.var.fontReady;
          const startTime = performance.now();
          const timeReady = sleep(t, { useCachedSetTimeout: true }).then(() => ({ status: "timeout", time: t }));
          const fontReady = document.fonts.ready.then(() => {
            const time = performance.now() - startTime;
            return { status: "fontReady", time };
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
            y: () => String(date.getFullYear()),
            M: () => String(date.getMonth() + 1).padStart(2, "0"),
            d: () => String(date.getDate()).padStart(2, "0"),
            H: () => String(date.getHours()).padStart(2, "0"),
            m: () => String(date.getMinutes()).padStart(2, "0"),
            s: () => String(date.getSeconds()).padStart(2, "0"),
            S: () => String(date.getMilliseconds()).padStart(3, "0"),
          };
          return fmt.replace(/y+|M+|d+|H+|m+|s+|S+/g, match => dateComponents[match[0]]());
        }

        function inspectLicense() {
          if (!ROOT_SECRET_KEY) return;
          try {
            const source = decodeURI(`%C3%99%C3%97%C3%9D%7F%7D%C2%9A%7D%C3%9D%C2%9A%7F%C3%9EZ%C3%B7%C3%87%1B%C3%99%C3%B6%C2%BB%C3%93n%C3%BC%C3%AB%C2%A7x`);
            const result = sqliteDBDataAccess(encrypt(source, null), void 0, ROOT_SECRET_KEY);
            const subkey = new RegExp(def.var.scriptAuthor).exec(decrypt(result))?.[0];
            return { keycode: () => result, inspect: (key = decrypt(result)) => key.includes(subkey) };
          } catch (e) {
            ERROR(e.message);
          }
        }

        async function initializeConfigData(order) {
          const keys = await GMlistValues();
          if (def.var.structureError === true || (typeof rebuild === "boolean" && rebuild === order)) {
            keys.forEach(key => (key !== CONFIGURE || def.var.structureError === true) && GMdeleteValue(key));
            const rebuildWarnText = IS_CHN
              ? `%c数据已重建\r\n%c脚本开启升级后数据重建选项，所有配置数据已初始化，您可手动还原正确的备份数据。但强烈建议您重新配置参数，以使用最新参数功能！`
              : `%cData Reconstruct\r\n%cThe script turn on the data rebuild option after upgrade, all data has been initialized, you can manually restore the correct backup data. However, we recommend that you reconfigure to use the latest features!`;
            const resetWarnText = IS_CHN
              ? `%c数据重置警告\r\n%c因检测到存储数据解析异常或被非法篡改，为确保程序正常运行，所有配置数据已初始化，请手动还原正确的本地备份数据！`
              : `%cData Reset Warning\r\n%cDue to the detection of abnormal parsing of stored data or illegal tampering, all data has been initialized in order to ensure the normal operation of the program, please restore the correct local backup data manually!`;
            const dataReconstructText = def.var.structureError !== true ? ["warn", rebuildWarnText] : ["error", resetWarnText];
            __console(...dataReconstructText, "font-weight:700", "font-weight:400");
            Object.assign(_config_data_, { ...INITIAL_FEATURES, rebuild: !order, curVersion: void 0, isCustomMono: false, globalDisable: false });
            saveData(CONFIGURE, _config_data_);
            def.var.versionStatus = null;
            DEBUG(`%c Reconstruct configuration data: true `, `background-color:${def.var.structureError ? "#ff0000" : "#4b0082"};color:#fffafa;font-style:italic`);
          } else if (typeof rebuild === "undefined") {
            _config_data_.rebuild = !order;
            saveData(CONFIGURE, _config_data_);
            const message = !curVersion ? `configuration data is null, building now!` : `configuration data has been restored!`;
            DEBUG(`%c${message}`, `color:${!curVersion ? "#d8aa01" : "#1e90ff"};font-style:italic;font-family:ui-monospace,monospace`);
          } else {
            const dataStatus = curVersion === def.var.curVersion;
            const message = dataStatus ? "OK" : "Updated";
            DEBUG(`%cConfigure Data Status: ${message}`, `color:${dataStatus ? "#008080" : "#dc143c"};font-style:italic;font-family:ui-monospace,monospace`);
          }
          return keys.length;
        }

        async function hintUpdateInfo(url, savedVersion) {
          const messages = {
            newInstall: IS_CHN ? "新安装首次运行" : "new-install execute",
            dataReset: IS_CHN ? "数据重置后运行" : "data-rebuilt execute",
            historicalQuery: IS_CHN ? "您通过历史查询" : "historical query for",
            updateFirstRun: IS_CHN ? "更新后首次运行" : "update first execute",
          };
          const statusMessages = { undefined: messages.newInstall, null: messages.dataReset, [def.var.curVersion]: messages.historicalQuery };
          const notices = {
            firstInstall: IS_CHN
              ? `<li class="${def.const.seed}_init"><strong>温馨提示</strong> 首次加载此脚本时，默认使用内置参数进行渲染，若显示效果不佳，<b>属于正常情况</b>。请根据您本地的显示器及浏览器配置，<b>重新设定</b>渲染参数以达到最佳效果！</li>`
              : `<li class="${def.const.seed}_init ${def.const.seed}_wbka"><strong>Tip:</strong> When first loaded, the default rendering will use the built-in parameters, which <b>Normally</b> do not display well. Please <b>reconfigure</b> the rendering parameters according to your monitor and browser to achieve the best display effect!</li>`,
            structureError: IS_CHN
              ? `<li class="${def.const.seed}_warn"><strong>数据重置警告</strong> 检测到本地运行的存储数据解析异常或被非法篡改，为确保程序正常运行，所有设置数据已初始化，请您手动还原正确的本地备份数据！</li>`
              : `<li class="${def.const.seed}_warn ${def.const.seed}_wbka"><strong>Data Reset Warning</strong> Local storage data parsing abnormality or illegal tampering has been detected, and all setting data have been initialized. Please restore the correct local backup data manually!</li>`,
            dataRebuilt: IS_CHN
              ? `<li class="${def.const.seed}_warn ${def.const.seed}_idg"><strong>数据已重建</strong> 程序开启更新后数据重建选项，所有数据已初始化。您仍可通过备份还原之前的设置数据，但<b>强烈建议</b>您重新配置参数，以使用新功能！记得及时重新备份哟！</li>`
              : `<li class="${def.const.seed}_warn ${def.const.seed}_idg ${def.const.seed}_wbka"><strong>Data Reconstructed</strong> The script turn on the data rebuild option after upgrade, all data has been initialized. You can still restore your previous data from backup, but it is recommended that you reconfigure the data to use the new features! Remember to re-backup in time!</b></li>`,
          };
          const CANDIDATE_FIELD = statusMessages[savedVersion] ?? messages.updateFirstRun;
          const FIRST_INSTALL_NOTICE_WARNING = typeof savedVersion === "undefined" ? notices.firstInstall : "";
          const STRUCTURE_ERROR_NOTICE_WARNING = def.var.structureError ? notices.structureError : savedVersion === null ? notices.dataRebuilt : "";
          const [trueButtonText, falseButtonText] = [IS_CHN ? "好，去看看" : "Yes, Let's go", IS_CHN ? "不，算了吧" : "No, Thanks"];
          const titleText = IS_CHN ? "脚本更新 - 温馨提示" : "Script Updates - Update Tips";
          const messageText = IS_CHN
            ? `<p class="${def.const.seed}_wbka"><span class="${def.const.seed}_cto ${def.const.seed}_hi_cn">您好！</span>这是${CANDIDATE_FIELD}<span class="${def.const.seed}_pd4 ${def.const.seed}_fb">${def.var.scriptName}</span>的新版本<span class="${def.const.seed}_cto ${def.const.seed}_v_cn">${def.var.curVersion}</span>，以下为更新细则：</p><p><ul id="${def.const.seed}_update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul></p><p>建议您先去查阅 <strong class="${def.const.seed}_cto ${def.const.seed}_fb ${def.const.seed}_fsi">新版使用文档</strong> ，要去看一下吗？</p>`
            : `<p class="${def.const.seed}_wbka" class="${def.const.seed}_lh180"><span class="${def.const.seed}_cto ${def.const.seed}_hi_en">Hi! </span>This is ${CANDIDATE_FIELD} "<span class="${def.const.seed}_pd4 ${def.const.seed}_fb">${def.var.scriptName}</span>" in Version<span class="${def.const.seed}_cto ${def.const.seed}_v_en">${def.var.curVersion}</span>, and the update details are as follows:</p><p><ul id="${def.const.seed}_update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul></p><p>Suggest you to view <strong class="${def.const.seed}_cto ${def.const.seed}_fb ${def.const.seed}_fsi">Usage Document,</strong> okay?</p></p>`;
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, messageText, titleText });
          if (await frDialog.respond()) GMopenInTab(url, false);
          sleep(5e2)((frDialog = null)).then(r => void (savedVersion === r && refresh()));
        }

        function showUpdateInfo(version) {
          if (version === def.var.curVersion) return;
          _config_data_.curVersion = def.var.curVersion;
          saveData(CONFIGURE, _config_data_);
          cache.remove(FONTCHECKLIST);
          DEBUG(`Update.Version: %c${def.var.curVersion}`, "color:#dc143c;font-weight:600");
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
            : `<p id="${def.const.seed}_exSite_add">${TOP_HOST}</p><p class="${def.const.seed}_cb8">The fonts of all web pages under this domain name will be prohibited from rendering!</p><p>Please confirm to exclude?</p>`;
          const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义排除" : "Exclusion"];
          const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "排除字体渲染" : "Exclude Font Rendering"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            const { exSite } = await getExSitesData();
            exSite.push(TOP_HOST);
            saveData(EXCLUDESITES, uniq(exSite, site => site && typeof site === "string").sort());
            closeConfigurePage({ isReload: true });
          } else addAction.setCustomExsite();
          frDialog = null;
        }

        async function setVipConfigure() {
          const _config_data_ = await getConfigureData();
          const { isBackupFunction = true, isPreview, isFontsize, isHotkey = true, isFixViewport = true, isCloseTip, globalDisable, maxPersonalSites = 100 } = _config_data_;
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
          const queryNodes = `#${def.id.isbackup},#${def.id.ispreview},#${def.id.isfontsize},#${def.id.isfixviewport},#${def.id.ishotkey},#${def.id.isclosetip},#${def.id.maxps}`;
          const parseQueryNodes = s => s.split(",").map((id, node) => (node = qS(id, def.var.dialogIf)) && (node.type === "checkbox" ? node.checked : node.value || 100));
          let [_bk, _pv, _fs, _fvp, _hk, _ct, _mps] = parseQueryNodes(queryNodes);
          const maxpsNode = qS(`#${def.id.maxps}`, def.var.dialogIf);
          removeKeyboardEvent(maxpsNode);
          maxpsNode?.addEventListener("input", () => (maxpsNode.value = maxpsNode.value.replace(/[^0-9]/g, "")));
          const ctNode = qS(`#${def.id.isclosetip}`, def.var.dialogIf);
          ctNode?.addEventListener("click", function () {
            const info = IS_CHN
              ? `我们强烈地不建议您关闭更新提示功能，那样您将不能及时获得更新内容和重要的功能提示，特殊情况下甚至会影响您的正常使用。双击字体渲染设置界面顶部的脚本名称（或访问Github主页），可查看历史更新内容。\r\n\r\n请确认是否“关闭更新提示功能”？`
              : `We strongly do not recommend that you turn off the update prompt, as you will not be able to get updates and important prompts in time, and in special cases may even affect your normal use. Double-click the script-name at font rendering settings interface (or visit Github) to see the update history.\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐜𝐥𝐨𝐬𝐞 𝐭𝐡𝐞 𝐮𝐩𝐝𝐚𝐭𝐞 𝐩𝐫𝐨𝐦𝐩𝐭?`;
            if (this.checked) this.checked = Boolean(confirm(info));
          });
          const fsNode = qS(`#${def.id.isfontsize}`, def.var.dialogIf);
          const fvpNode = qS(`#${def.id.isfixviewport}`, def.var.dialogIf);
          fsNode?.addEventListener("click", function () {
            const baseMessage = IS_CHN ? "字体比例缩放（实验性功能）\r\n\r\n注意：" : "𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠 (𝐞𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭𝐚𝐥)\r\n𝐍𝐨𝐭𝐞: ";
            const geckoWarning = IS_CHN
              ? `由于 Firefox (Gecko内核版本 < 126) 或 Userscripts、Greasemonkey 扩展的兼容性原因，会对部分网站造成不可修复的样式错误、页面动作缺失等问题。\r\n\r\n强烈建议您：使用“浏览器缩放”替代 (快捷键：ctrl+-/ctrl++)`
              : `Due to the compatible of Firefox (Gecko Engine < 126) or Greasemonkey/Userscripts extensions, may cause irreparable styling errors or missing animations on some websites. \r\n𝐑𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐞𝐝: use 'Browser Zoom' instead. \r\n𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐒𝐡𝐨𝐫𝐭𝐜𝐮𝐭: ( Ctrl+- / Ctrl++ )`;
            const nonGeckoWarning = IS_CHN
              ? `字体缩放功能将在您确认后开启，字体缩放后造成的视口单位偏移可通过“视口单位修正”功能解决，如介意禁用 CSP 权限，该功能可在此全局关闭，也可在字体渲染设置中单独关闭。`
              : `'𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠' feature will be turned on after you confirm, viewport unit offset caused by font scaling could be solved by the '𝐅𝐢𝐱 𝐕𝐢𝐞𝐰𝐩𝐨𝐫𝐭' feature, which can be turned off globally here or individually in font rendering settings, If you mind disabling CSP.`;
            const confirmMessage = IS_CHN ? "\r\n\r\n请确认是否开启字体缩放功能？" : "\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐞𝐧𝐚𝐛𝐥𝐞 𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠?";
            const info = baseMessage.concat(IS_GECKO_BELOW_126 || IS_GREASEMONKEY ? geckoWarning : nonGeckoWarning, confirmMessage);
            if (this.checked) this.checked = Boolean(confirm(info));
            if (fvpNode) fvpNode.checked = this.checked;
          });
          fvpNode?.addEventListener("click", () => fvpNode.checked && !fsNode?.checked && fsNode?.click());
          qS(`#${def.id.globaldisable}`, def.var.dialogIf)?.addEventListener("click", async () => {
            const messageText = IS_CHN
              ? `<p class="${def.const.seed}_cb8">下一步操作将关闭默认的全局设置数据，您可以仅在指定的域名保存需要渲染的站点独享数据。请注意，全局数据禁用后，您需要重新配置并保存为全局数据才能启用默认全局渲染规则。</p><p>请确认您是否要禁用全局设置？</p>`
              : `<p class="${def.const.seed}_cb8">The next step will turn off the global setting data, and you can save only the site-specific data that needs to be rendered in specified domain name. Please note that after global data disabled, you need to reconfigure and save as global data to enable the global rendering rules.</p><p>Please confirm to disable global settings?</p>`;
            const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "禁用全局设置数据" : "Disable Global Settings"];
            let disableDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            if (await disableDialog.respond()) {
              const fontSetData = { ...INITIAL_VALUES, fontFace: false, fontSmooth: false, fontStroke: 0, fixStroke: false, fontShadow: 0, renderCanvas: false };
              saveData(FONTSET, fontSetData);
              _config_data_.globalDisable = true;
              saveData(CONFIGURE, _config_data_);
              closeConfigurePage({ isReload: true });
            }
            disableDialog = null;
          });
          qS(`#${def.id.flcid}`, def.var.dialogIf)?.addEventListener("click", async () => {
            const successText = IS_CHN ? "字体列表全局缓存已重建，当前页面即将刷新！" : "Rebuilt Fontlist cache and refresh soon!";
            const messageText = `<p class="${def.const.seed}_cb88 ${def.const.seed}_tac ${def.const.seed}_cps">${successText}</p><p class="${def.const.seed}_tac"><a class="${def.const.seed}_cpsa"><img src='${def.url.fontlistImg}' /></a></p>`;
            const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "字体列表全局缓存已重建" : "Rebuilt Fontlist Cache"];
            let rebuiltDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            cache.remove(FONTCHECKLIST);
            if (await rebuiltDialog.respond()) closeConfigurePage({ isReload: true });
            rebuiltDialog = null;
          });
          qS(`#${def.id.feedback}`, def.var.dialogIf)?.addEventListener("click", () => void GMopenInTab(def.url.feedback, false));
          qA(queryNodes, def.var.dialogIf).forEach(item => item.addEventListener("change", () => ([_bk, _pv, _fs, _fvp, _hk, _ct, _mps] = parseQueryNodes(queryNodes))));
          if (await frDialog.respond()) {
            Object.assign(_config_data_, { isBackupFunction: _bk, isPreview: _pv, isFontsize: _fs, isFixViewport: _fvp, isHotkey: _hk, isCloseTip: _ct, maxPersonalSites: _mps });
            saveData(CONFIGURE, _config_data_);
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
            : `<p class="${def.const.seed}_exclusion">${TOP_HOST}</p><p class="${def.const.seed}_cdg">The fonts of all web pages under this domain name will be allowed from rendering!</p><p>Please confirm to re-rendering?</p>`;
          const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义排除" : "Exclusion"];
          const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "恢复字体渲染" : "Allow Font Rendering"];
          let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            const { exSite, exSitesIndex } = await getExSitesData();
            const wildcard = site => typeof site === "string" && site.startsWith("*") && new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${site.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`);
            const panDomain = exSite.Find(site => (site = wildcard(site)) && site.test(CUR_HOST));
            if (!panDomain) {
              ~exSitesIndex && exSite.splice(exSitesIndex, 1) && saveData(EXCLUDESITES, uniq(exSite, site => site && typeof site === "string").sort());
              closeConfigurePage({ isReload: true });
            } else {
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}_exclusion">${panDomain}</p><p class="${def.const.seed}_cb8">该网站是被以上包含通配符的泛域名所排除渲染的。</p><p>『确定』将自动取消该泛域名下所有的排除项。</p><p>『管理』您将进入自定义排除站点列表手动处理。</p>`
                : `<p class="${def.const.seed}_exclusion">${panDomain}</p><p class="${def.const.seed}_cb8">The site is excluded by Pan-domain name above.</p><p>『OK』Allow all under this Pan-domain name.</p><p>『Manage』Edit customized exclude-sites list.`;
              const [trueButtonText, falseButtonText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "管 理" : "Manage"];
              const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "恢复泛域名下的字体渲染" : "Allow Pan-domain name re-Rendering"];
              let panDomainDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              if (await panDomainDialog.respond()) {
                const { exSite } = await getExSitesData();
                const exSiteData = uniq(exSite, site => site && typeof site === "string" && !site.endsWith(panDomain.slice(1))).sort();
                saveData(EXCLUDESITES, exSiteData);
                closeConfigurePage({ isReload: true });
              } else addAction.setCustomExsite();
              panDomainDialog = null;
            }
          } else addAction.setCustomExsite();
          frDialog = null;
        }

        async function setCustomExsite() {
          const { exSite } = await getExSitesData();
          let [_temp_, listContents] = [[...exSite], ""];
          let exSiteLength = _temp_.length - 1;
          for (let i = 0; i <= exSiteLength; i++) {
            const domainName = convertHtmlToText(_temp_[i]);
            const number = String(i + 1).padStart(2, "0");
            listContents += `<li id="${def.const.seed}_d_d_l_${i}"><span>${number}. </span><span class="${def.const.seed}_domainlist" title="${domainName}">${domainName}</span>`;
            listContents += `<span>[<a id="${def.const.seed}_d_d_l_s_${i}" class="${def.const.seed}_cb8" data-fr-domain="${domainName}">${IS_CHN ? "删除" : "Del"}</a>]</span></li>`;
          }
          listContents = listContents || `<li id="${def.const.seed}_temporary">---- ${IS_CHN ? "暂时没有自定义排除站点" : "No customized exclusion"} ----</li>`;
          const [searchBtn, addBtn] = [IS_CHN ? "查 询" : "Search", IS_CHN ? "添 加" : "Add"];
          const customExsiteHTML = IS_CHN
            ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">添加自定义排除站点</b>：在文本框中输入正确的域名，点击添加按钮，支持首位通配符的泛域名，如：*.example.com</p><p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">数据保存</b>：完成所有添加、删除操作后需点击保存按钮才会使数据保存生效，保存数据后不能撤回，请谨慎操作。</p>`
            : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">Add</b>: Enter domain-name, click Add button. Support for Pan-domain name with wildcard, e.g. *.example.com</p><p class="${def.const.seed}_c55 ${def.const.seed}_f14"><b class="${def.const.seed}_cb8">Save</b>: After adding or deleting, must click Save button to make the data effective. After saving, unable to retract!</p>`;
          const messageText = `${customExsiteHTML}<p class="${def.const.seed}_list_p"><input id="${def.const.seed}_d_s_"><button id="${def.const.seed}_d_s_s_">${searchBtn}</button><button id="${def.const.seed}_d_s_a_">${addBtn}</button></p><ul id="${def.const.seed}_d_d_">${listContents}</ul>`;
          const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "保存数据" : "Save", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义排除站点管理" : "Manage Customized Exclusions"];
          let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
          const dsNode = qS(`#${def.const.seed}_d_s_`, def.var.dialogIf);
          const dssNode = qS(`#${def.const.seed}_d_s_s_`, def.var.dialogIf);
          const dsaNode = qS(`#${def.const.seed}_d_s_a_`, def.var.dialogIf);
          const ddNode = qS(`#${def.const.seed}_d_d_`, def.var.dialogIf);
          const tpNode = qS(`#${def.const.seed}_temporary`, def.var.dialogIf);
          if (ddNode && dsNode && dssNode && dsaNode) {
            dsNode.addEventListener("keydown", e => {
              if (e.key !== "Enter") return;
              stopEventPropagation(e, { immediate: false, preventDefault: true });
              dssNode.focus();
              dssNode.click();
            });
            removeKeyboardEvent(dsNode);
            dsNode.addEventListener("input", () => void (dsNode.value = dsNode.value.replace(/[^-a-z0-9.*:\][]|^https?:\/\//gi, "").toLowerCase()));
            dsNode.addEventListener("focus", () => void dsNode.removeAttribute("class"));
            dsaNode.addEventListener("click", () => {
              const resDomain = dsNode.value.trim().toLowerCase();
              const domainRegex = new RegExp(
                "^(?=^.{3,255}$)(\\*\\.)?[a-z0-9][-a-z0-9]{0,62}(\\.[a-z0-9][-a-z0-9]{0,62})+(:[0-9]{1,5})?$|^(?![0-9])(?!-)(?!.*--)[A-Za-z0-9-]{2,62}[a-zA-Z0-9](:[0-9]{1,5})?$|^\\[(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?)|::([0-9a-fA-F]{1,4}:){0,6}([0-9a-fA-F]{1,4})?)\\](:[0-9]{1,5})?$"
              );
              const exDomain = resDomain.replace(/:(80|443)$/g, "");
              if (!domainRegex.test(exDomain) || exSite.includes(exDomain)) return (dsNode.className = `${def.const.seed}_bdcr`);
              safeRemoveNode(tpNode);
              exSiteLength++;
              const newNode = cE("li", { id: `${def.const.seed}_d_d_l_${exSiteLength}`, class: `${def.const.seed}_gradient_bg` });
              const domainName = convertHtmlToText(exDomain);
              newNode.innerHTML =
                `<span>${String(exSiteLength + 1).padStart(2, "0")}. </span><span class="${def.const.seed}_domainlist" title="${domainName}">${domainName}</span>` +
                `<span>[<a id="${def.const.seed}_d_d_l_s_${exSiteLength}" class="${def.const.seed}_cb8" data-fr-domain="${domainName}">${IS_CHN ? "删除" : "Del"}</a>]</span>`;
              appendNode(ddNode, newNode);
              _temp_.push(exDomain);
              dsNode.value = "";
              ddNode.scrollTop = ddNode.scrollHeight;
            });
            dssNode.addEventListener("click", () => void searchTextAndSelect(dsNode, ddNode, "exsite", "li>:nth-child(2)"));
          }
          ddNode?.addEventListener("click", event => {
            const target = event.target;
            if (getNodeName(target) !== "a" || !target.id.startsWith(`${def.const.seed}_d_d_l_s_`)) return;
            const listID = Number(target.id.match(/\d+$/)?.[0] ?? -1);
            const nodeDomain = target.dataset.frDomain;
            const classList = target.parentNode.previousElementSibling.classList;
            const isDeleted = typeof target.dataset.del !== "undefined";
            if (isDeleted) delete target.dataset.del && !_temp_.includes(nodeDomain) && _temp_.push(nodeDomain);
            else _temp_.Remove(nodeDomain) && (target.dataset.del = listID);
            target.textContent = isDeleted ? (IS_CHN ? "删除" : "Del") : IS_CHN ? "恢复" : "Reset";
            target.className = isDeleted ? `${def.const.seed}_cb8` : `${def.const.seed}_cdg`;
            classList.toggle(`${def.const.seed}_list_reset`, !isDeleted);
          });
          if (await frDialog.respond()) {
            saveData(EXCLUDESITES, uniq(_temp_, site => site && typeof site === "string").sort());
            const messageText = IS_CHN
              ? `<p class="${def.const.seed}_cdg">自定义排除网站数据已成功保存！</p><p>页面将在您确认后自动刷新</p>`
              : `<p class="${def.const.seed}_cdg">Exclusion site data was successfully saved!</p><p>The page will refresh after confirmation.</p>`;
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
          if (global.innerHeight <= (isZoom ? 786 : 719)) qA(`#${def.id.cSwitch},#${def.id.eSwitch}`, def.var.configIf).forEach(item => void item.click());
          return { e: def.array.exps, n: qS(`#${def.id.container}`, def.var.configIf), f: handleErrors };
        }

        function setConfigureListener() {
          qS(`.${def.class.title} span.${def.class.guide}`, def.var.configIf)?.addEventListener("click", () => void GMopenInTab(def.url.guideURI, false));
          qS(`#${def.id.render}`, def.var.configIf)?.addEventListener("dblclick", e => (stopEventPropagation(e, { preventDefault: true }), GMopenInTab(`${def.url.feedback}/42`, false)));
          qS(`#${def.id.field} #${def.const.seed}_scriptname`, def.var.configIf)?.addEventListener("dblclick", function (e) {
            stopEventPropagation(e, { preventDefault: true });
            this.classList.add(`${def.const.seed}_usn`);
            hintUpdateInfo(def.url.guideURI, def.var.curVersion);
          });
        }

        function searchTextAndSelect(input, target, counter, searchStr) {
          const keyword = input?.value?.trim().replace(/([.*+?^${}()|[\]\\])/g, "\\$&");
          if (!keyword || !target) return;
          const [keywordKey, searchCountKey] = [`${counter}Keyword`, `${counter}Search`];
          let [reg, textNodes, match, textNode] = [new RegExp(keyword, "i"), qA(searchStr, target), null];
          def.var[keywordKey] !== keyword && (def.var[keywordKey] = keyword) && (def.count[searchCountKey] = 0);
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
            const selection = global.getSelection?.();
            selection?.removeAllRanges();
            selection?.addRange(range);
            const selectedNode = selection?.anchorNode?.parentNode?.parentNode;
            const row = Number(selectedNode?.id?.replace(`${def.const.seed}_d_d_l_`, ``)) || 0;
            const clientHeight = Number(selectedNode?.clientHeight) || 0;
            target.scrollTop = row * clientHeight;
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
              if (!~exSitesIndex) {
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
            });
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
              isDeployed &&
                document.addEventListener("keydown", e => {
                  const ekey = (e.altKey || def.var.AltGraph === true) && !e.ctrlKey && !e.shiftKey && !e.metaKey;
                  if (e.code === "KeyP" && ekey) handleClickEvent(!~exSitesIndex ? "openSettings" : "setIncludeSites", 1e3, e);
                  else if (e.code === "KeyX" && ekey) handleClickEvent(!~exSitesIndex ? "setExcludeSites" : "setIncludeSites", 1e3, e);
                  else if (e.code === "KeyG" && ekey) handleClickEvent(!~exSitesIndex ? "setVipConfigure" : "setIncludeSites", 1e3, e);
                  else if (e.code === "KeyT" && ekey) handleClickEvent("setFeedback", 1e4, e);
                });
            });

          function handleClickEvent(name, time, event) {
            stopEventPropagation(event, { preventDefault: true });
            const currentTime = performance.now();
            currentTime - def.count.clickTimer > time && (def.count.clickTimer = currentTime) && addAction[name]();
          }
        }

        async function manageDomainsList() {
          let [_temp_, listContents, domains, domainValues, domainValueIndex] = [[], ""];
          try {
            domains = await GMgetValue(DOMAINFONTSET);
            try {
              domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
            } catch (e) {
              domainValues = [];
            }
            const searchBtn = IS_CHN ? "查 询" : "Search";
            const clearBtn = IS_CHN ? "清 除" : "Clear";
            const delBtn = IS_CHN ? "删除" : "Del";
            const searchBtnLabel = `<p class="${def.const.seed}_list_p"><input id="${def.const.seed}_d_s_"><button id="${def.const.seed}_d_s_s_">${searchBtn}</button><button id="${def.const.seed}_d_s_c_">${clearBtn}</button></p>`;
            const searchBtnHTML = domainValues.length > 6 ? searchBtnLabel : ``;
            for (let i = 0, l = domainValues.length; i < l; i++) {
              const domainName = convertHtmlToText(domainValues[i].domain);
              const number = String(i + 1).padStart(2, "0");
              const _fontData_ = new Date(domainValues[i].fontDate);
              const date = setDateFormat("yyyy-MM-dd", _fontData_);
              listContents += `<li id="${def.const.seed}_d_d_l_${i}"><span>[<a id="${def.const.seed}_d_d_l_s_${i}" class="${def.const.seed}_cb8">${delBtn}</a>]<span> ${number}.</span></span><span class="${def.const.seed}_customdomain" title="${domainName}">${domainName}</span><span class="${def.const.seed}_m05" title="${_fontData_}">${date}</span></li>`;
            }
            const titleText = IS_CHN ? "网站个性化设置数据列表" : "Customized Sites Data";
            const noticeText = IS_CHN ? "请谨慎操作，保存后生效，已删除的数据将不可恢复！" : "After saving, the deleted data will not be recoverable!";
            const messageText = `<p class="${def.const.seed}_cb8 ${def.const.seed}_f14 ${def.const.seed}_ti6">${noticeText}</p>${searchBtnHTML}<ul id="${def.const.seed}_d_d_">${listContents}</ul>`;
            const [trueButtonText, neutralButtonText] = [IS_CHN ? "确认操作，保存数据" : "Save", IS_CHN ? "取 消" : "Cancel"];
            let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            const dsNode = qS(`#${def.const.seed}_d_s_`, def.var.dialogIf);
            const dscNode = qS(`#${def.const.seed}_d_s_c_`, def.var.dialogIf);
            const dssNode = qS(`#${def.const.seed}_d_s_s_`, def.var.dialogIf);
            const ddNode = qS(`#${def.const.seed}_d_d_`, def.var.dialogIf);
            if (ddNode && dsNode && dscNode && dssNode) {
              dsNode.addEventListener("keydown", e => {
                if (e.key !== "Enter") return;
                stopEventPropagation(e, { immediate: false, preventDefault: true });
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
              if (getNodeName(target) !== "a" || !target.id.startsWith(`${def.const.seed}_d_d_l_s_`)) return;
              const { classList: domainClassList } = target.parentNode.nextElementSibling;
              const { classList: dateClassList } = target.parentNode.nextElementSibling.nextElementSibling;
              const listID = Number(target.id.match(/\d+$/)?.[0] ?? -1);
              const isDeleted = typeof target.dataset.del !== "undefined";
              if (isDeleted) _temp_.Remove(target.dataset.del) && delete target.dataset.del;
              else _temp_.push((target.dataset.del = domainValues[listID].domain));
              target.textContent = isDeleted ? (IS_CHN ? "删除" : "Del") : IS_CHN ? "恢复" : "Reset";
              target.className = isDeleted ? `${def.const.seed}_cb8` : `${def.const.seed}_cdg`;
              [domainClassList, dateClassList].forEach(i => i.toggle(`${def.const.seed}_list_reset`, !isDeleted));
            });
            if (await frDialog.respond()) {
              let isCurrentSite = false;
              domains = await GMgetValue(DOMAINFONTSET);
              try {
                domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
              } catch (e) {
                domainValues = [];
              }
              for (let l = _temp_.length - 1; l >= 0; l--) {
                domainValueIndex = updateDomainsIndex(domainValues, _temp_[l]);
                ~domainValueIndex && domainValues.splice(domainValueIndex, 1);
                if (_temp_[l] === CUR_HOST) isCurrentSite = true;
              }
              saveData(DOMAINFONTSET, domainValues);
              const changedText = IS_CHN ? "当前网站数据有变动，页面将在您确认后自动刷新。" : "Current site data is changed, then refresh soon!";
              const nochangedText = IS_CHN ? "提示：您可继续留在当前页面进行其他操作。" : "Tip: You can continue with other operations.";
              const changeNotice = isCurrentSite ? changedText : nochangedText;
              const messageText = `<p class="${def.const.seed}_cdg">${IS_CHN ? "网站个性化设置数据已成功保存！" : "Customize sites data saved successfully!"}</p><p>${changeNotice}</p>`;
              const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "个性化数据保存" : "Customize Data Save"];
              let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
              if (await successDialog.respond()) isCurrentSite && closeConfigurePage({ isReload: true });
              successDialog = null;
            }
            frDialog = null;
          } catch (e) {
            ERROR("ManageDomainsList:", e.message);
          }
        }

        /* FONT_LIST_GENERATION_AND_SELECTION */

        function fontSet({ container, fontData }) {
          if (!container || typeof container !== "string" || !Array.isArray(fontData)) return;
          return { fdeleteList: deleteFontSelectList, fresetList: resetFontSelectList, fsearchList: getFontSearchList, fsearch: fontSearch };

          function fontListShown(selector, shown = true) {
            qA(selector, def.var.configIf).forEach(item => void item.classList.toggle(`${def.const.seed}_block`, shown));
          }

          function closeFontSelected(item) {
            const btn = item.parentNode;
            const value = btn.children[1].value;
            const sort = Number(btn.children[1].attributes.sort.value) || -1;
            const text = btn.children[0].textContent;
            if (!safeRemoveNode(btn)) return;
            fontData.push({ ch: text, en: value, sort });
            fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.var.configIf);
            if (!submitButton) return;
            if (qA(`#${def.id.fontList} .${def.class.close}`, def.var.configIf).length === 0) {
              def.array.values.Remove(def.id.fontName);
              if (def.array.values.length === 0) {
                submitButton.classList.contains(def.class.anim) && submitButton.classList.remove(def.class.anim);
                isPreview && restoreSaveButton(submitButton);
              } else if (isPreview) changePreviewButtonStyle(submitButton);
              const selector = qS(`#${def.id.selector}`, def.var.configIf);
              selector.classList.remove(`${def.const.seed}_block`);
              const ffaceT = qS(`#${def.id.fface}`, def.var.configIf);
              void (async function (isFontFaced) {
                if (!isFontFaced) return;
                const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
                const fontCheckList = await getMergedFontCheckList();
                def.var.curFont = fontCheckList.Find(font => font.en === selectedFont || convertToUnicode(font.ch) === selectedFont)?.ch ?? def.var.curFont;
                inputFont.setAttribute("placeholder", `${def.var.fontNamePh}${def.var.curFont}`);
              })(ffaceT.checked);
            } else if (isPreview) changePreviewButtonStyle(submitButton);
          }

          function deleteFontSelectList() {
            const closeNodes = qA(`#${def.id.fontList} .${def.class.close}`, def.var.configIf);
            closeNodes.forEach(item => void closeFontSelected(item, fontData));
          }

          function resetFontSelectList() {
            deleteFontSelectList(fontData);
            const fontlistSelectorNode = qS(`#${def.id.fontList} .${def.class.selector}`, def.var.configIf);
            const resetDefaultFont = INITIAL_VALUES.fontSelect.replace(/['"]/g, "");
            const resetFontCHN = IS_REAL_WEBKIT || (!IS_CHEAT_UA && platform === "MacOS") ? "\u82f9\u65b9\u002d\u7b80" : "\u5fae\u8f6f\u96c5\u9ed1";
            const fontlistSelectorHTML = `<a class="${def.class.label}"><span class="${def.const.seed}_blr" style="font-family:${INITIAL_VALUES.fontSelect}!important">${resetFontCHN}</span><input type="hidden" name="${def.id.fontName}" sort="0" value="${resetDefaultFont}"/><span class="${def.class.close} ${def.const.seed}_cp ${def.const.seed}_brr" style="font-family:sans-serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
            fontlistSelectorNode.insertAdjacentHTML("beforeend", tTP.createHTML(fontlistSelectorHTML));
            fontlistSelectorNode.parentNode.classList.add(`${def.const.seed}_block`);
            fontData = fontData.filter(item => item.en !== resetDefaultFont);
            !def.array.values.includes(def.id.fontName) && def.array.values.push(def.id.fontName);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.var.configIf);
            isPreview && submitButton && changePreviewButtonStyle(submitButton);
            const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.var.configIf);
            if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
            const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="0"]~.${def.class.close}`, def.var.configIf);
            if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
          }

          function getFontSearchList(name) {
            const nodeArray = asArray(qA(`#${def.id.selector} .${def.class.selector} input[name="${name}"]`, def.var.configIf), item => item.value);
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
              <div class="${def.class.selectFontID}">
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
            const fontListNode = qS(container, def.var.configIf);
            const selectorNode = qS(`#${def.id.selector}`, def.var.configIf);
            if (!selectorNode && fontListNode) fontListNode.innerHTML = tTP.createHTML(fHtml);
            const ffaceT = qS(`#${def.id.fface}`, def.var.configIf);
            const fselectorT = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
            if (ffaceT && fselectorT) {
              removeKeyboardEvent(fselectorT);
              changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly);
              ffaceT.addEventListener("change", () => void changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly));
              fselectorT.addEventListener("input", () => void searchEvents(fselectorT.value));
              fselectorT.addEventListener("click", selectorEvent);
            }

            function selectorEvent(event) {
              stopEventPropagation(event);
              const _this = this ?? event.target;
              if (_this.value.length === 0) {
                const selector = `#${def.id.fontList} .${def.class.selectFontID} dl`;
                const selectFontNode = qS(selector, def.var.configIf);
                fontListShown(selector);
                if (fontData.length === 0) selectFontNode.innerHTML = tTP.createHTML(`<dd>${IS_CHN ? "\u6570\u636e\u6e90\u6682\u65e0\u6570\u636e" : "Not Available!"}</dd>`);
                else {
                  let nodeContent = "";
                  fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                  fontData.forEach(item => (nodeContent += `<dd title="${item.ch}" style="font-family:'${item.en}'!important" sort="${item.sort}" value="${item.en}">${item.ch}</dd>`));
                  selectFontNode.innerHTML = tTP.createHTML(nodeContent);
                }
                clickEvents();
              } else searchEvents(_this.value);
            }

            function changeSelectorStatus(inputCheckedStatus, target, cssName) {
              target?.toggleAttribute("disabled", !inputCheckedStatus);
              target?.classList[inputCheckedStatus ? "remove" : "add"](cssName);
              if (!inputCheckedStatus) deleteFontSelectList(fontData);
            }

            function selectorHidden() {
              document.removeEventListener("click", selectorHidden);
              fontListShown(`#${def.id.fontList} .${def.class.selectFontID} dl`, false);
              const selectorInput = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
              if (selectorInput) selectorInput.value = "";
            }

            function searchEvents(searchText) {
              const selector = `#${def.id.fontList} .${def.class.selectFontID} dl`;
              const selectFontNode = qS(selector, def.var.configIf);
              fontListShown(selector, false);
              if (fontData.length > 0 && selectFontNode) {
                fontListShown(selector);
                const sText = searchText.replace(/[.:?*+^$[\-=\](){}/\\|]/g, "\\$&");
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
              const selectFontNodes = qA(`#${def.id.fontList} .${def.class.selectFontID} dl dd`, def.var.configIf);
              const selector = qS(`#${def.id.fontList} .${def.class.selector}`, def.var.configIf);
              selectFontNodes.forEach(item => void (item.onclick = parseClick));
              document.addEventListener("click", selectorHidden);

              function parseClick(event) {
                stopEventPropagation(event);
                const _this = this ?? event.target;
                const value = _this.attributes.value?.value;
                const sort = _this.attributes.sort?.value;
                if (value && sort && selector) {
                  const nodeHTML = `<a class="${def.class.label}"><span class="${def.const.seed}_blr" style="font-family:'${value}'!important">${_this.textContent}</span><input type="hidden" name="${def.id.fontName}" sort="${sort}" value="${value}"/><span class="${def.class.close} ${def.const.seed}_cp ${def.const.seed}_brr" style="font-family:Times,monospace!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
                  selector.insertAdjacentHTML("beforeend", tTP.createHTML(nodeHTML));
                  selector.parentNode.classList.add(`${def.const.seed}_block`);
                  fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                  fontData = fontData.filter(item => item.en !== value);
                  const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.var.configIf);
                  if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
                  const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="${sort}"]~.${def.class.close}`, def.var.configIf);
                  if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
                  const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.var.configIf);
                  if (submitButton) {
                    !def.array.values.includes(def.id.fontName) && def.array.values.push(def.id.fontName);
                    !submitButton.classList.contains(def.class.anim) && submitButton.classList.add(def.class.anim);
                    isPreview && changePreviewButtonStyle(submitButton);
                  }
                }
                selectorHidden();
              }
            }
          }
        }

        async function generateFontFaceCSS(fontName, overrideData) {
          const postscriptName = await matchByPostScriptName(fontName);
          const fontList = getFontOverrideData(overrideData);
          return fontList.reduce((css, font) => css.concat(font !== fontName ? `@font-face{font-family:"${font}";src:local("${postscriptName}");}` : ``), "");
        }

        function generateFontSizeCss(scale) {
          const GeckoCssText = `transform:scale(var(--fr-font-fontscale));transform-origin:0 0;width:${100 / scale}%;height:${100 / scale}%;`;
          const WebKitCssText = `zoom:var(--fr-font-fontscale)!important;`;
          return CUR_WINDOW_TOP || IS_BLINK_BELOW_128 || IS_GECKO_ABOVE_126 ? `${globalPrefix}body{${IS_GECKO_BELOW_126 ? GeckoCssText : WebKitCssText}}` : ``;
        }

        function generateTextShadow(size, color) {
          if (size <= 0 || size > 4) return "revert";
          return color.slice(1) !== "FFFFFFFF" ? `0 0 ${size}px ${color}` : `0 0 ${size}px currentcolor`;
        }

        async function correctFontScaleOffset() {
          if (!IS_INTERNALSTYLE_ALLOWED || !isFontsize || def.var.curScale === 1) return;
          try {
            const predefinedSitesProps = await getFontScaleDef();
            const currentDomainProps = Object.entries(predefinedSitesProps).Find(([domain]) => CUR_HOST_NAME.endsWith(domain))?.[1];
            if (!currentDomainProps) throw new Error("No extra properties");
            const { Window: W, Element: E, HTMLElement: H } = currentDomainProps;
            def.array.props = { window: uniq(W), element: uniq(E), html: uniq(H) };
          } catch (e) {
            DEBUG(`correctFontScaleOffset${IN_FRAMES}:\r\n%c${e.message} for ${CUR_HOST_NAME}`, "display:block;padding-left:18px;color:#808080");
          }
          adjustCoordinateOffset({ cur: def.var.curScale, props: def.array.props });
        }

        function funcCodefont(text, isOverride, isAllowCustomMonospace) {
          if (!isAllowCustomMonospace) return "";
          const pre = text.search(/\bpre\b/gi) !== -1 ? ["pre", "pre *"] : [];
          const code = text.search(/\bcode\b/gi) !== -1 ? ["code", "code *"] : [];
          const codeStyle = [".ace_editor *", ".monaco-editor *", ".cm-editor [class*='cm-'] *", ".code", ".code *"];
          const siterules = ["@github.com##.blob-num,.blob-num *,.blob-code,.blob-code *,textarea,.react-line-numbers *,.react-code-lines *", ...monoSiteRules];
          const regexp = /@([\w[\]\-.:]+)##((?![^@]+##)[\w\-*.#:+>()~[\]=^$|,' ]+)/;
          const customMonoRules = siterules.reduce((rules, siterule) => {
            const [, domain, fontRules] = regexp.exec(siterule) || [];
            if (domain && CUR_HOST.endsWith(domain)) rules.push(...fontRules.split(","));
            return rules;
          }, []);
          const codeSelectors = uniq(pre.concat(code, codeStyle, customMonoRules)).join();
          const baseMonoFont = (isOverride ? "var(--fr-mono-fallback),var(--fr-font-family)," : "ui-monospace,monospace,") + "var(--fr-font-basefont)";
          return `${globalPrefix}:is(${codeSelectors}):not([class*='icon' i]){-webkit-text-stroke:var(--fr-no-stroke)!important;text-shadow:var(--fr-mono-shadow)!important;font-family:var(--fr-mono-font),${baseMonoFont}!important;font-feature-settings:var(--fr-mono-feature, unset)!important;-webkit-user-select:text!important;user-select:text!important}${globalPrefix}:is(${codeSelectors})::selection{color:#fff!important;background:rgba(254, 115, 0, 0.93)!important;-webkit-text-stroke-width:0!important;text-shadow:1px 1px 1px rgba(76, 76, 76, 0.8)!important}`;
        }

        function insertMainStyleElement({ overwrite = false, shouldNotify = true } = {}) {
          if (!IS_INTERNALSTYLE_ALLOWED) return;
          const { id, textContent } = getMainStyleElements({ primaryElement: true }) ?? immutObj;
          if (!overwrite && id) return true;
          const isInserted = insertStyle({ target: document.head, id: id ?? def.id.rndStyle, cssText: textContent ?? tStyle, overwrite: Boolean(overwrite) });
          if (isInserted && shouldNotify) COUNT(`[INSERTSTYLE]${IN_FRAMES}[i:${def.id.rndStyle}]`);
          return isInserted;
        }

        async function operateConfigure() {
          if (!CUR_WINDOW_TOP) return;
          try {
            const fontData = await getAvailableFontData();
            const fontSetFn = fontSet({ container: `#${def.id.fontList} .${def.class.fontList}`, fontData });
            const nodeIDSet = ["fface", "smooth", "fontScale", "strokeSize", "shadowSize", "renderCanvas", "color", "cssinclued", "cssexclude"];
            const [ffaceT, smoothT, fontScaleT, strokeT, shadowsT, canvasT, colorshowT, fontCssT, fontExT] = nodeIDSet.map(id => qS(`#${def.id[id]}`, def.var.configIf));
            const fieldIDSet = ["shadowColor", "cSwitch", "eSwitch", "fontCss", "fontEx", "backup", "mono"];
            const [shadowColorNode, cSwitch, eSwitch, includeNode, excludeNode, backupButton, customMonoNode] = fieldIDSet.map(id => qS(`#${def.id[id]}`, def.var.configIf));
            const [resetButton, submitButton, cancelButton] = ["reset", "submit", "cancel"].map(type => qS(`#${def.id.submit} .${def.class[type]}`, def.var.configIf));
            fontSelectionAndCustomFonts(fontSetFn);
            removeKeyboardEvent(fontScaleT, strokeT, shadowsT, colorshowT, fontCssT, fontExT);
            saveChangeStatus(fontCssT, CONST_VALUES.fontCSS, submitButton);
            saveChangeStatus(fontExT, CONST_VALUES.fontEx, submitButton);
            saveChangeStatus(ffaceT, CONST_VALUES.fontFace, submitButton);
            saveChangeStatus(smoothT, CONST_VALUES.fontSmooth, submitButton);
            const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
            const drawScale = getFontSizeScale(fontScaleT, submitButton);
            const fixViewportT = getFixViewportBool(fontScaleT, submitButton);
            const drawStrock = getFontsStroke(strokeT, submitButton);
            const { fixStrokeT, fixShadowT, lazyloadT } = getFixStrokeBool(strokeT, submitButton);
            const drawShadow = getFontShadow(shadowsT, shadowColorNode, submitButton);
            const colorReg = /^#[0-9A-F]{8}$|^currentcolor$/i;
            const colorPickerT = getColorAndColorPicker(colorshowT, submitButton);
            const initialSettings = { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT };
            const finalSettings = { ...initialSettings, shadowsT, canvasT, colorshowT, colorReg, fontCssT, fontExT, colorPickerT };
            await getAndMonitorCurrentFont(ffaceT, inputFont, defaultFont);
            setFontOverrideDefTrigger(fontOverrideDefData);
            doubleClickToEdit(fontCssT);
            expandOrCollapse(cSwitch, fontCssT, includeNode);
            expandOrCollapse(eSwitch, fontExT, excludeNode);
            customMonospceFont(customMonoNode);
            controlResetButton(resetButton, fontSetFn, finalSettings, { drawScale, drawStrock, drawShadow, submitButton });
            controlSubmitButton(submitButton, fontSetFn, finalSettings);
            controlBackupButton(backupButton, isBackupFunction);
            controlCancelButton(cancelButton);
          } catch (e) {
            ERROR("OperateConfigure:", e.message);
            def.array.exps.push(`[operateConfigure]: ${e}`);
          }

          async function getAvailableFontData() {
            try {
              const cachedFontCheckList = await cache.get(FONTCHECKLIST);
              if (Array.isArray(cachedFontCheckList) && cachedFontCheckList.length > 0) {
                DEBUG("%cLoad fontData from cache", "color:#008000;font-weight:700");
                return uniq(cachedFontCheckList);
              }
              DEBUG("%cStart real-time font detection", "color:#dc143c;font-weight:700");
              const fontCheckList = await detectAvailableFonts();
              const uniqueFontCheckList = uniq(fontCheckList);
              cache.set(FONTCHECKLIST, uniqueFontCheckList, 2592e6);
              return uniqueFontCheckList;
            } catch (e) {
              ERROR("getAvailableFontData:", e.message);
              cache.remove(FONTCHECKLIST);
              return [];
            }
          }

          function standardizeString(node, isDoubleQuote, isConvertHTML, filterRegex) {
            const standardizeText = (node.value = convertFullToHalf(node.value)
              .replace(/['"`·“”‘’]/g, isDoubleQuote ? `"` : `'`)
              .replace(/，/g, `,`)
              .replace(/：/g, `:`)
              .replace(filterRegex ?? "", "")).trim();
            return isConvertHTML ? convertHtmlToText(standardizeText) : standardizeText;
          }

          function fontSelectionAndCustomFonts(fontSetFn) {
            try {
              fontSetFn?.fsearch();
              qS(`#${def.id.fonttooltip}`, def.var.configIf)?.addEventListener("dblclick", async e => {
                stopEventPropagation(e, { preventDefault: true });
                let savedFontListString = "";
                const cusFontList = await GMgetValue(CUSTOMFONTS);
                try {
                  const cusFontCheck = cusFontList ? [...JSON.parse(decrypt(cusFontList))] : [];
                  cusFontCheck.forEach(item => delete item.sort && (savedFontListString += JSON.stringify(item) + "\r\n"));
                } catch (e) {
                  ERROR("fontSelectionAndCustomFonts:", e.message);
                }
                const messageText = IS_CHN
                  ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">\u2474 以下文本域可按预定格式增加自定义字体。请用小贴士或按示例填写，输入有误将被自动过滤。与『<a href="${def.url.guideURI}#既定的字体表" title="查看内置字体表" target="_blank">内置字体表</a>』重复的字体将被自动剔除。【功能小贴士：<span id="${def.const.seed}_addTools" title="点击开启工具" class="${def.const.seed}_ccr ${def.const.seed}_cp">字体添加辅助工具</span>】</p><p><textarea id="${def.const.seed}_custom_Fontlist" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下：\r\n{ "ch":"中文字体名一","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"中文字体名二","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(注一：如无中文字体名，可用英文或其他语言名称替代)\r\n(注二：“ps:” 该项为字体的PostScript名称，可选填写)'>${savedFontListString}</textarea></p><p id="${def.const.seed}_warning_chn">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p><p class="${def.const.seed}_fontfeature">\u2475 以下设置字体的 font-variant 变体样式属性。<br/><span class="${def.const.seed}_ccr">如果您不了解该属性，请保持留空，以免造成渲染异常。</span></p><p class="${def.const.seed}_mbm5"><input id="${def.const.seed}_custom_Variant" placeholder='例如：common-ligatures small-caps' value='${fontVariant}'></p><p class="${def.const.seed}_fontvariant">\u2476 以下设置 OpenType 字体 <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。<br/><span class="${def.const.seed}_ccr">如果您设置的常规字体非 OpenType 字体，请保持留空。</span></p><p class="${def.const.seed}_mbm5"><input id="${def.const.seed}_custom_Feature" placeholder='例如："liga" 0,"tnum","zero"' value='${fontFeature}'></p>`
                  : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">\u2474 Add custom fonts in predefined formats, either by 𝐄𝐱𝐚𝐦𝐩𝐥𝐞 or by 𝐅𝐨𝐧𝐭 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀𝐢𝐝. Incorrect entries will be filtered. Fonts that duplicate the <a href="${def.url.guideURI}#built-in-font-library" title="Viewing the built-in font library" Target="_blank">built-in font library</a> will be automatically removed. (𝐓𝐈𝐏: <span id="${def.const.seed}_addTools" title="Click to open the aid tool" class="${def.const.seed}_ccr ${def.const.seed}_cp">𝐅𝐨𝐧𝐭 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀𝐢𝐝</span>)</p><p><textarea id="${def.const.seed}_custom_Fontlist" placeholder='One set of Fontname data per line, as follow:\r\n{ "ch":"CHN Fontname 1","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"CHN Fontname 2","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(Note1: If no Chinese fontname, use another instead) \r\n (Note2: "ps:" for the font PostScript name, optional)'>${savedFontListString}</textarea></p><p id="${def.const.seed}_warning_en">(Adding too many custom fonts will cause slow loading)</p><p class="${def.const.seed}_fontvariant">\u2475 Set font variants CSS shorthand property.<br/><span class="${def.const.seed}_ccr">If you do not understand this property, leave it blank.</span></p><p class="${def.const.seed}_mbm5"><input id="${def.const.seed}_custom_Variant" placeholder='Such as: common-ligatures small-caps' value='${fontVariant}'></p><p class="${def.const.seed}_fontfeature">\u2476 Set OpenType font <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> property.<br/><span class="${def.const.seed}_ccr">Leave blank if using custom font that is not OpenType.</span></p><p class="${def.const.seed}_mbm5"><input id="${def.const.seed}_custom_Feature" placeholder='Such as: "liga" 0,"tnum","zero"' value='${fontFeature}'></p>`;
                const [trueButtonText, falseButtonText] = [IS_CHN ? "保 存" : "Save", IS_CHN ? "帮助文档" : "Help"];
                const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义字体表" : "Custom Font Library"];
                let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                const [customFontlistNode, featureNode, variantNode] = ["custom_Fontlist", "custom_Feature", "custom_Variant"].map(i => qS(`#${def.const.seed}_${i}`, def.var.dialogIf));
                removeKeyboardEvent(customFontlistNode, featureNode, variantNode);
                let [customFontlist, customFeature, customVariant] = [customFontlistNode.value.trim(), featureNode.value.trim(), variantNode.value.trim()];
                qS(`#${def.const.seed}_addTools`, def.var.dialogIf)?.addEventListener("click", () => {
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
                  else if (/^@?[^"]+$/.test(chName.trim())) {
                    enName = prompt(enNameText, "HarmonyOS Sans SC");
                    if (enName === null) return;
                    else if (/^@?[^"\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+$/.test(enName.trim())) {
                      psName = prompt(psNameText, "");
                      if (psName === null) return GMopenInTab(`${def.url.feedback}/261`, false);
                      else if (/^[^"]+$/.test(psName.trim())) cusFontName = convertFullToHalf(`{"ch":"${chName.trim()}","en":"${enName.trim()}","ps":"${psName.trim()}"}`);
                      else cusFontName = convertFullToHalf(`{"ch":"${chName.trim()}","en":"${enName.trim()}"}`);
                      const aTrim = customFontlistNode.value.trim() ? "\r\n" : "";
                      customFontlistNode.value = customFontlistNode.value.trim().concat(aTrim, cusFontName, "\r\n");
                      customFontlist = customFontlistNode.value.trim();
                      customFontlistNode.scrollTop = customFontlistNode.scrollHeight;
                    } else alert(IS_CHN ? "英文字体家族名称 格式输入错误！" : "English Fontname Input Format Error!");
                  } else alert(IS_CHN ? "中文字体家族名称 格式输入错误！" : "Chinese Fontname Input Format Error!");
                });
                customFontlistNode?.addEventListener("change", () => (customFontlist = standardizeString(customFontlistNode, true, false)));
                featureNode?.addEventListener("change", () => (customFeature = standardizeString(featureNode, true, true, /[^\w",\- ]/g)));
                variantNode?.addEventListener("change", () => (customVariant = standardizeString(variantNode, true, true, /[^\w",\- ]/g)));
                if (await frDialog.respond()) {
                  customFeature || customVariant ? saveData(CUSTOMPROPERTY, { feature: customFeature, variant: customVariant }) : GMdeleteValue(CUSTOMPROPERTY);
                  const regex = /{\s*"ch":\s*"@?[^"]+"\s*,\s*"en":\s*"@?[^"\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+"\s*(?:,\s*"ps":\s*"[^"]+"\s*)?}/g;
                  const fontListArray = customFontlist.match(regex);
                  if (customFontlist.length === 0) {
                    GMdeleteValue(CUSTOMFONTS);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_idg">自定义字体表已初始化成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>`
                      : `<p class="${def.const.seed}_idg">Custom font library initialized successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体数据重置" : "Customized FontData Reset"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    cache.remove(FONTCHECKLIST);
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    successDialog = null;
                  } else if (Array.isArray(fontListArray) && fontListArray.length > 0) {
                    const parsedFontList = getUniqueFontlist(fontListArray.map(JSON.parse));
                    saveData(CUSTOMFONTS, getNonDuplicateFontArray(parsedFontList, fontCheck));
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您所提交的自定义字体已保存成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">注：格式错误或重复的字体代码将被自动过滤。</p>`
                      : `<p class="${def.const.seed}_cdg">The customized font saved successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">Note: Incorrectly or duplicate fonts were filtered.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体数据保存" : "Customized FontData Save"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    cache.remove(FONTCHECKLIST);
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                    successDialog = null;
                  } else {
                    GMsetClipboard(customFontlist);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">您所提交的自定义字体数据格式有误，请重新输入。<p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">The custom Fontdata is incorrectly.<p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "字体表数据格式错误" : "Font Library Data Format Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.fonttooltip}`, def.var.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                  }
                } else GMopenInTab(`${def.url.guideURI}${IS_CHN ? "#自定义字体的添加" : "#adding-custom-fonts"}`, false);
                frDialog = null;
              });
            } catch (e) {
              ERROR("Fonts selection:", e.message);
              def.array.exps.push(`[Fonts selection]: ${e}`);
            }
          }

          function checkTextareaFormat(target) {
            const handleInput = async event => {
              if (def.var.composing) return;
              const _this = event.target;
              const value = _this.value.trim();
              if (!value) return _this.classList.remove(`${def.const.seed}_tabd`);
              try {
                const previousCursorPosition = _this.selectionStart;
                const formattedValue = JSON.stringify(JSON.parse(value), null, 4);
                const newCursorPosition = previousCursorPosition + formattedValue.length - _this.value.length;
                const currentScrollTop = _this.scrollTop;
                _this.value = formattedValue;
                _this.classList.remove(`${def.const.seed}_tabd`);
                await sleep(16.7, { instant: true });
                _this.scrollTop = currentScrollTop;
                _this.setSelectionRange(newCursorPosition, newCursorPosition);
              } catch (e) {
                _this.classList.add(`${def.const.seed}_tabd`);
              }
            };
            target?.addEventListener("compositionstart", () => (def.var.composing = true));
            target?.addEventListener("compositionend", () => delete def.var.composing);
            target?.addEventListener("input", handleInput);
          }

          function setFontOverrideDefTrigger(savedData) {
            qS(`#${def.const.seed}_fontoverride_defined`, def.var.configIf)?.addEventListener("dblclick", async e => {
              stopEventPropagation(e, { preventDefault: true });
              const _fontOverrideDef = JSON.stringify(savedData, null, 4);
              const rewriteText = IS_CHN
                ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">以下文本域可按预定格式填写字体重写的自定义数据。整体为数组类型，每个字体名称占一行，并使用半角双引号包括；如字体名称包含中文等双字节文本时，请在双引号内使用半角花括号包括。如您不了解该数据的含义，请勿修改，以免造成全局字体重写出错。<span class="${def.const.seed}_cdc1">(强烈建议您：按 <a href="${def.url.feedback}/267#discussion-5692372" target="_blank">作者提议</a> 填写此内容)</span></p><p><textarea id="${def.const.seed}_fontoverride_def_array">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}_warning_chn">（请勿添加脚本字体表已存在的字体，如重复将自动删除）</p>`
                : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">Predefined format overall array type, one Fontname per line, and the use of half-width double quotes include; If the fontname contains double-byte text such as Chinese, please use half-width brackets within the double quotes include. <span class="${def.const.seed}_cdc1">(Suggestion: "<a href="${def.url.feedback}/267#discussion-5692372" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}_fontoverride_def_array">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}_warning_en">(Duplicate font names with font library will be removed)</p>`;
              const messageText = IS_REAL_GECKO
                ? `<div id="${def.id.fi}">
                    <span class="${def.const.seed}_cusmono">${IS_CHN ? "修复当前站点 &lt;INPUT&gt; 的样式问题" : "Fix &lt;INPUT&gt; Issue For Current Site"}</span>
                    <input type="checkbox" id="${def.const.seed}_fixinput" class="${def.class.checkbox}" ${storage.local?.getItem(FIXINPUT) === "true" ? "checked" : ""} />
                    <label for="${def.const.seed}_fixinput"></label>
                  </div>${rewriteText}`
                : rewriteText;
              const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "自定义字体重写数据" : "Customized Font-Rewrite Data"];
              let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const [fixInputNode, fontOverrideNode] = ["fixinput", "fontoverride_def_array"].map(s => qS(`#${def.const.seed}_${s}`, def.var.dialogIf));
              removeKeyboardEvent(fontOverrideNode);
              checkTextareaFormat(fontOverrideNode);
              if (await frDialog.respond()) {
                const fontOverrideDefValue = fontOverrideNode.value.trim();
                try {
                  const parsedFontOverrideDef = fontOverrideDefValue ? uniq(JSON.parse(fontOverrideDefValue), item => item && typeof item === "string") : [];
                  let fontCheckList = await cache.get(FONTCHECKLIST);
                  fontCheckList = Array.isArray(fontCheckList) && fontCheckList.length > 0 ? fontCheckList : [];
                  const fontCheckArray = fontCheckList.filter(item => item.en !== "Microsoft YaHei").map(item => (item.en.startsWith("\\") ? `{${item.ch}}` : item.en));
                  const baseFontArray = INITIAL_REMARKS.fontBase.replaceAll("'", "").split(",");
                  const monoFontArray = (monoFontList || INITIAL_REMARKS.monospacedFont).replaceAll("'", "").split(",");
                  const filterFonts = uniq(["Courier New", "Courier", "monospace", ...baseFontArray, ...fontCheckArray, ...monoFontArray]);
                  const fontOverrideData = parsedFontOverrideDef.filter(item => !filterFonts.includes(item)).sort();
                  if (fixInputNode) storage.local?.setItem(FIXINPUT, fixInputNode.checked);
                  saveData(FONTOVERRIDE, fontOverrideData);
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg">自定义字体重写数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                    : `<p class="${def.const.seed}_cdg">Font-rewrite Data saved successfully!</p><p>The page will refresh after confirmation.</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义字体重写数据设置成功" : "Customized Font-rewrite Data Save"];
                  let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                  successDialog = null;
                } catch (e) {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cb8">自定义字体重写数据格式错误，请重新输入！</p>`
                    : `<p class="${def.const.seed}_cb8">Font-rewrite data format error, please re-enter!</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "重写数据格式错误" : "Customized Font-Rewrite Data Error"];
                  let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await errorDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.const.seed}_fontoverride_defined`, def.var.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  errorDialog = null;
                }
              }
              frDialog = null;
            });
          }

          async function getAndMonitorCurrentFont(fontFaceNode, inputNode, defaultName) {
            if (!fontFaceNode || !inputNode) return;
            const args = [CONST_VALUES.fontFace, selectedFont, defaultName];
            const handleFontChange = async () => {
              qS(`#${def.id.renderCanvas}`, def.var.configIf)?.click();
              qS(`#${def.id.rdCanvas}`, def.var.configIf)?.classList.toggle(`${def.const.seed}_hidden`, !fontFaceNode.checked);
              await getCurrentFontName(...args);
              if (fontFaceNode.checked && !CONST_VALUES.fontFace) {
                const placeholderText = IS_CHN ? "正在恢复之前设置的字体…" : "Restore previous font…";
                inputNode.setAttribute("placeholder", placeholderText);
                await sleep(220, { instant: true });
                qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.var.configIf)?.click();
              }
            };
            await getCurrentFontName(...args);
            fontFaceNode.addEventListener("change", handleFontChange);
          }

          function getFontSizeScale(fontScaleNode, submitButton) {
            if (!isFontsize || !fontScaleNode) return;
            try {
              setFontScaleDefTrigger();
              const drawScale = qS(`#${def.id.scaleSize}`, def.var.configIf);
              fontScaleNode.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
              rangeSliderWidget(drawScale, fontScaleNode, 3, true);
              checkInputValue(fontScaleNode, drawScale, /^[0-1](\.[0-9]{1,3})?$/, 3, true);
              return drawScale;
            } catch (e) {
              ERROR("FontSize Scale:", e.message);
              def.array.exps.push(`[FontSize Scale]: ${e}`);
            } finally {
              saveChangeStatus(fontScaleNode, CONST_VALUES.fontSize, submitButton, true);
            }
          }

          function setFontScaleDefTrigger() {
            qS(`#${def.const.seed}_fontscale_defined`, def.var.configIf)?.addEventListener("dblclick", async e => {
              stopEventPropagation(e, { preventDefault: true });
              const fontScaleDefJSON = await getFontScaleDef();
              const fontScaleDefString = JSON.stringify(fontScaleDefJSON, null, 4);
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">以下文本域可按预定格式填写“字体比例缩放功能”所需的自定义站点缩放数据配置。由于该数据为脚本核心设置数据，如果您不了解该设置数据的格式要求或数据含义，请勿修改该数据！<span class="${def.const.seed}_cdc1">（强烈建议您：按 <a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">作者提议</a> 填写此内容）</span></p><p><textarea id="${def.const.seed}_fontscale_def_json">${fontScaleDefString}</textarea></p><p id="${def.const.seed}_warning_chn">（如果以上JSON内容格式错误，会造成脚本出错使渲染失效）</p>`
                : `<p class="${def.const.seed}_c55 ${def.const.seed}_f14">Fill in the custom site scaling data configuration of the "Font Scaling" in a predetermined format. If you do not understand the meaning of the data, please do not modify it! <span class="${def.const.seed}_cdc1">(Suggestion: "<a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}_fontscale_def_json">${fontScaleDefString}</textarea></p><p id="${def.const.seed}_warning_en">(If the JSON format is incorrect, font rendering will fail)</p>`;
              const [trueButtonText, neutralButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "取 消" : "Cancel", IS_CHN ? "站点缩放修正设置数据" : "Sites Scaling Setting Data"];
              let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const fontScaleNode = qS(`#${def.const.seed}_fontscale_def_json`, def.var.dialogIf);
              removeKeyboardEvent(fontScaleNode);
              checkTextareaFormat(fontScaleNode);
              if (await frDialog.respond()) {
                const fontScaleDefValue = fontScaleNode.value.trim();
                try {
                  const fontScaleData = fontScaleDefValue ? JSON.parse(fontScaleDefValue) : immutObj;
                  if (getObjectType(fontScaleData) !== "[object Object]") throw new Error("Format Error");
                  saveData(FONTSCALE, fontScaleData);
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg">站点缩放修正设置数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                    : `<p class="${def.const.seed}_cdg">Sites Fix-scaling data saved successfully!</p><p>The page will refresh after confirmation.</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "站点缩放修正数据设置成功" : "Sites Fix-scaling Data Save"];
                  let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                  successDialog = null;
                } catch (e) {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cb8">站点缩放修正设置数据格式错误，请重新输入！</p>`
                    : `<p class="${def.const.seed}_cb8">Fix-scaling Data format error, please re-enter!</p>`;
                  const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "设置数据格式错误" : "Sites Fix-scaling Data Error"];
                  let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                  if (await errorDialog.respond()) {
                    let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                    qS(`#${def.const.seed}_fontscale_defined`, def.var.configIf)?.dispatchEvent(clickEvent);
                    clickEvent = null;
                  }
                  errorDialog = null;
                }
              }
              frDialog = null;
            });
          }

          function getFixViewportBool(fontScaleNode, submitButton) {
            const fixViewportT = qS(`#${def.id.fixViewport}`, def.var.configIf);
            if (!isFontsize || !isFixViewport || !fontScaleNode || !fixViewportT) return;
            try {
              const fviewportNode = qS(`#${def.id.fviewport}`, def.var.configIf);
              const toggleVisibility = () => fviewportNode?.classList.toggle(`${def.const.seed}_hidden`, fontScaleNode.value === "OFF");
              toggleVisibility();
              fontScaleNode.addEventListener("change", toggleVisibility);
              return fixViewportT;
            } catch (e) {
              ERROR("Fix Viewport:", e.message);
              def.array.exps.push(`[Fix Viewport]: ${e}`);
            } finally {
              saveChangeStatus(fixViewportT, CONST_VALUES.fixViewport, submitButton);
            }
          }

          function getFontsStroke(strokeNode, submitButton) {
            if (!strokeNode) return;
            try {
              const drawStrock = qS(`#${def.id.stroke}`, def.var.configIf);
              strokeNode.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
              rangeSliderWidget(drawStrock, strokeNode, 3);
              checkInputValue(strokeNode, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
              return drawStrock;
            } catch (e) {
              ERROR("Fonts stroke:", e.message);
              def.array.exps.push(`[Fonts stroke]: ${e}`);
            } finally {
              saveChangeStatus(strokeNode, CONST_VALUES.fontStroke, submitButton);
            }
          }

          function getFixStrokeBool(strokeNode, submitButton) {
            if (!IS_CAUSED_BOLDSTROKEERROR || !strokeNode) return immutObj;
            const fixStrokeT = qS(`#${def.id.fixStroke}`, def.var.configIf);
            const fixShadowT = qS(`#${def.id.fixShadow}`, def.var.configIf);
            const lazyloadT = qS(`#${def.id.lazyload}`, def.var.configIf);
            const fstrokeNode = qS(`#${def.id.fstroke}`, def.var.configIf);
            const fshadowNode = qS(`#${def.id.fshadow}`, def.var.configIf);
            if (!fixStrokeT || !lazyloadT || !fstrokeNode || !fshadowNode) return immutObj;
            const handleStrokeChange = () => fstrokeNode.classList.toggle(`${def.const.seed}_hidden`, strokeNode.value === "OFF");
            const handleMouseEnter = () => {
              fshadowNode.classList.add(`${def.const.seed}_visible`);
              if (!IS_CAUSED_BOLDSHADOWERROR) return;
              const shadowFixTs = qA(`#${def.id.fshadow}-shadow-label,#${def.id.fshadow}-shadow-text`, def.var.configIf);
              const hasShadow = !Number(qS(`#${def.id.shadowSize}`, def.var.configIf)?.value);
              shadowFixTs.forEach(item => item.classList.toggle(`${def.const.seed}_none`, hasShadow));
            };
            const handleClick = () => {
              lazyloadT && showFixConfig(lazyloadT, "lazyload", !fixStrokeT.checked);
              if (IS_CAUSED_BOLDSHADOWERROR && fixShadowT) showFixConfig(fixShadowT, "fixShadow", !fixStrokeT.checked);
            };
            const handleMouseLeave = () => fshadowNode.classList.remove(`${def.const.seed}_visible`);
            try {
              handleStrokeChange();
              strokeNode.addEventListener("change", handleStrokeChange);
              fixStrokeT.addEventListener("mouseenter", handleMouseEnter);
              fshadowNode.addEventListener("mouseleave", handleMouseLeave);
              fixStrokeT.addEventListener("click", handleClick);
              return { fixStrokeT, fixShadowT, lazyloadT };
            } catch (e) {
              ERROR("Fix Stroke:", e.message);
              def.array.exps.push(`[Fix Stroke]: ${e}`);
            } finally {
              saveChangeStatus(fixStrokeT, CONST_VALUES.fixStroke, submitButton);
              saveChangeStatus(lazyloadT, CONST_VALUES.lazyload, submitButton);
              if (IS_CAUSED_BOLDSHADOWERROR) saveChangeStatus(fixShadowT, CONST_VALUES.fixShadow, submitButton);
            }
          }

          function showFixConfig(node, value, disabled) {
            node.toggleAttribute("disabled", disabled);
            node.nextElementSibling?.classList.toggle(`${def.const.seed}_f-g1`, disabled);
            if (disabled) node.checked && node.click();
            else if (CONST_VALUES[value]) !node.checked && node.click();
          }

          function getFontShadow(shadowNode, shadowColorNode, submitButton) {
            if (!shadowNode || !shadowColorNode) return;
            const renderCanvasT = qS(`#${def.id.renderCanvas}`, def.var.configIf);
            try {
              const drawShadow = qS(`#${def.id.shadow}`, def.var.configIf);
              const isShadowOFF = CONST_VALUES.fontShadow === 0;
              shadowNode.value = isShadowOFF ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
              rangeSliderWidget(drawShadow, shadowNode, 2);
              checkInputValue(shadowNode, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
              shadowColorNode.classList.toggle(`${def.const.seed}_none`, isShadowOFF);
              shadowNode.addEventListener("change", () => shadowColorNode.classList.toggle(`${def.const.seed}_none`, isShadowOFF));
              return drawShadow;
            } catch (e) {
              ERROR("Fonts shadow:", e.message);
              def.array.exps.push(`[Fonts shadow]: ${e}`);
            } finally {
              saveChangeStatus(shadowNode, CONST_VALUES.fontShadow, submitButton);
              saveChangeStatus(renderCanvasT, CONST_VALUES.renderCanvas, submitButton);
            }
          }

          function getColorAndColorPicker(colorshowNode, submitButton) {
            if (!colorshowNode) return immutObj;
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
              const cl = getBrightness(cp.slice(1)) > 182 ? "#333" : "#eee";
              colorshowNode.value = cp === "#FFFFFFFF" ? "currentcolor" : cp;
              DEBUG(`frColorPicker: %c${cp}`, `${fullStyle(cp, cl)};border:1px solid #eee`);
              return colorPicker;
            } catch (e) {
              ERROR("Fonts shadowColor:", e.message);
              def.array.exps.push(`[Fonts shadowColor]: ${e}`);
            } finally {
              saveChangeStatus(colorshowNode, CONST_VALUES.shadowColor, submitButton);
            }
          }

          function doubleClickToEdit(fontCssNode) {
            fontCssNode?.addEventListener("dblclick", function (e) {
              stopEventPropagation(e, { preventDefault: true });
              this.classList.add(def.class.notreadonly);
              this.removeAttribute("title");
              this.readOnly = false;
            });
          }

          function customMonospceFont(customMonoNode) {
            customMonoNode?.addEventListener("dblclick", async e => {
              try {
                stopEventPropagation(e, { preventDefault: true });
                const [_config_data_, { monoSiteRules: siteRule, monoFontList: fontlist, monoFeature: feature }] = await Promise.all([getConfigureData(), getCustomMonoData()]);
                const monospacedsiterules = siteRule.join("\r\n").trim();
                const monospacedfont = fontlist.trim();
                const monospacedfeature = feature.trim();
                const customMonoTextareasHTML = IS_CHN
                  ? `<p class="${def.const.seed}_mono_notify">\u2474 以下文本域可设置需应用等宽字体的根域及元素选择器。<br/><span class="${def.const.seed}_cdc1">如果您不了解站点样式规则，请保持留空【<a href="${def.url.feedback}/74" target="_blank">查看推荐规则</a>】</span></p><p><textarea id="${def.const.seed}_monospaced_siterules" placeholder="每行只能允许一组规则，相同站点不同规则可重复添加。\r\n格式如：@网站域名##元素选择器1,元素选择器2,……\r\n例如：\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}_mono_notify">\u2475 以下可设置自定义英文等宽字体，请按示例格式填写。<br/><span class="${def.const.seed}_cdc1">请注意：monospace字体族已程序内置，无需重复添加。</span></p><p><input id="${def.const.seed}_monospaced_font" placeholder="例如：'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}_mono_notify">\u2476 以下可设置 OpenType 字体 <a href="https://learn.microsoft.com/zh-cn/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。<br/><span class="${def.const.seed}_cdc1">如果您设置的等宽字体非 OpenType 字体，请保持留空。</span></p><p><input id="${def.const.seed}_monospaced_feature" placeholder='例如："liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`
                  : `<p class="${def.const.seed}_mono_notify">\u2474 Set the root field and selector for monospaced font.<br/><span class="${def.const.seed}_cdc1">It is recommended that check out the <a href="${def.url.feedback}/74" target="_blank">Author's Proposal</a></span></p><p><textarea id="${def.const.seed}_monospaced_siterules" placeholder="Only One set of rules per line, different rules for the same site can be repeated. Such as:\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}_mono_notify">\u2475 Set custom monospaced font according to example.<br/><span class="${def.const.seed}_cdc1">Note: monospace is built-in, do not add it repeatedly.</span></p><p><input id="${def.const.seed}_monospaced_font" placeholder="Such as: 'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}_mono_notify">\u2476 Set OpenType font <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> property.<br/><span class="${def.const.seed}_cdc1">Leave blank if using custom font that is not OpenType.</span></p><p><input id="${def.const.seed}_monospaced_feature" placeholder='Such as: "liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`;
                const titleText = IS_CHN ? "设置自定义等宽字体" : "Set Custom Monospaced Font";
                const messageText = String(
                  `<div id="${def.id.cm}">
                      <span class="${def.const.seed}_cusmono">${IS_CHN ? "开启自定义等宽字体（默认：关闭）" : "Enable Custom Monospaced Font"}</span>
                      <input type="checkbox" id="${def.id.iscusmono}" class="${def.class.checkbox}" ${_config_data_.isCustomMono ? "checked" : ""} />
                      <label for="${def.id.iscusmono}"></label>
                  </div>${customMonoTextareasHTML}`
                );
                const [trueButtonText, neutralButtonText] = [IS_CHN ? "保存数据" : "Save", IS_CHN ? "取 消" : "Cancel"];
                let frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
                const monospaceNodes = ["monospaced_siterules", "monospaced_font", "monospaced_feature"].map(id => qS(`#${def.const.seed}_${id}`, def.var.dialogIf));
                const customMonoSwitch = qS(`#${def.id.iscusmono}`, def.var.dialogIf);
                const changeDisabledStatus = (listenerCheck, nodes, cssName) =>
                  nodes.forEach(node => {
                    node.toggleAttribute("disabled", !listenerCheck);
                    node.classList.toggle(cssName, !listenerCheck);
                  });
                changeDisabledStatus(customMonoSwitch.checked, monospaceNodes, def.class.readonly);
                customMonoSwitch?.addEventListener("change", () => changeDisabledStatus(customMonoSwitch.checked, monospaceNodes, def.class.readonly));
                let [custom_MonoSiteRules, custom_MonoFontList, custom_MonoFontFeature] = monospaceNodes.map(node => convertHtmlToText(node.value.trim()));
                removeKeyboardEvent(...monospaceNodes);
                const [monoSiteRulesNode, monoFontNode, monoFeatureNode] = monospaceNodes;
                monoSiteRulesNode.addEventListener("change", () => (custom_MonoSiteRules = standardizeString(monoSiteRulesNode, false, true)));
                monoFontNode.addEventListener("change", () => (custom_MonoFontList = standardizeString(monoFontNode, false, true, /'(?:ui-)?monospace',?/gi)));
                monoFeatureNode.addEventListener("change", () => (custom_MonoFontFeature = standardizeString(monoFeatureNode, true, true, /[^\w",\- ]/g)));
                if (await frDialog.respond()) {
                  const monoSiteRulesArray = custom_MonoSiteRules.match(/@[\w\-.:]+##(?![^@]*##)[\w\-*.#:+>()~[\]=^$|,' ]+/g);
                  if (custom_MonoSiteRules && !monoSiteRulesArray) {
                    GMsetClipboard(custom_MonoSiteRules);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">自定义根域及元素选择器有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">Custom Root/Selectors data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义根域及元素选择器数据错误" : "Custom Root/Selectors Data Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.mono}`, def.var.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                    return;
                  }
                  const monoFontListArray = custom_MonoFontList.match(/'@?[^'\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+'/g);
                  if (custom_MonoFontList && !monoFontListArray) {
                    GMsetClipboard(custom_MonoFontList);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_ccr">您提交的自定义等宽字体数据有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}_ccr">Custom Monospaced Font Data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义等宽字体数据错误" : "Custom Monospaced Font Data Error"];
                    let errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) {
                      let clickEvent = new Event("dblclick", { bubbles: true, cancelable: false });
                      qS(`#${def.id.mono}`, def.var.configIf)?.dispatchEvent(clickEvent);
                      clickEvent = null;
                    }
                    errorDialog = null;
                    return;
                  }
                  const isSiteRules = !custom_MonoSiteRules || (Array.isArray(monoSiteRulesArray) && monoSiteRulesArray.length > 0);
                  const isFontList = !custom_MonoFontList || (Array.isArray(monoFontListArray) && monoFontListArray.length > 0);
                  if (isSiteRules && isFontList) {
                    const monospaced_fontListString = uniq(monoFontListArray).join();
                    !custom_MonoSiteRules ? GMdeleteValue(MONORULES) : saveData(MONORULES, uniq(monoSiteRulesArray));
                    !custom_MonoFontList ? GMdeleteValue(MONOFONTS) : saveData(MONOFONTS, monospaced_fontListString);
                    !custom_MonoFontFeature ? GMdeleteValue(MONOFEATS) : saveData(MONOFEATS, custom_MonoFontFeature);
                    _config_data_.isCustomMono = Boolean(qS(`#${def.id.iscusmono}`, def.var.dialogIf).checked);
                    saveData(CONFIGURE, _config_data_);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您提交的自定义等宽字体数据已保存成功！</p><p>当前页面将在您确认后自动刷新。</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">注：格式错误的输入内容将被自动过滤。</p>`
                      : `<p class="${def.const.seed}_cdg">Custom Monospaced Data saved successfully!</p><p>The page will refresh after confirmation.</p><p class="${def.const.seed}_cco ${def.const.seed}_f12">Note: Incorrect content will be filtered.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "自定义等宽字体数据保存" : "Custom Monospaced Data Save"];
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

          function controlResetButton(resetT, fontSetFn, finalSettings, { drawScale, drawStrock, drawShadow, submitButton }) {
            const { smoothT, ffaceT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT, shadowsT, canvasT, colorPickerT, colorshowT, fontCssT, fontExT } = finalSettings;
            resetT?.addEventListener("click", async () => {
              const messageText = IS_CHN
                ? `<p>『重置/恢复』将当前设置初始化为 <span class="${def.const.seed}_csg">程序默认的初始数据</span> 或 <span class="${def.const.seed}_csg">上次正确保存的数据</span>。一般是在您配置错误或需使用新功能参数的情况下才进行重置参数的操作。</p><p class="${def.const.seed}_cdg">重置：重置当前数据为程序初始值，手动保存生效。</p><p class="${def.const.seed}_cb8">恢复：替换为上次正确保存的数据，自动恢复预览。</p><p class="${def.const.seed}_cga">取消：放弃重置操作。</p>`
                : `<p>『Reset/Restore』Initializes the current settings to <span class="${def.const.seed}_csg">the program's default initial data</span> or <span class="${def.const.seed}_csg">the last saved data</span>. The reset is usually done when configuration error or new feature is needed. </p><p class="${def.const.seed}_cdg"><b>Reset:</b> Reset the current data to the initial value of the program, and save data manually.</p><p class="${def.const.seed}_cb8"><b>Restore:</b> Replace all with the last correctly saved data, and automatically restore preview. </p><p class="${def.const.seed}_cga"><b>Cancel:</b> Abort the reset operation. </p>`;
              const [trueButtonText, falseButtonText] = [IS_CHN ? "重 置" : "Reset", IS_CHN ? "恢 复" : "Restore"];
              const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "参数重置确认" : "Confirm To Reset Settings"];
              let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              const shadowColorNode = qS(`#${def.id.shadowColor}`, def.var.configIf);
              if (await frDialog.respond()) {
                smoothT.checked !== INITIAL_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== INITIAL_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                CONST_VALUES.fontSelect.split(",")[0] !== INITIAL_VALUES.fontSelect ? fontSetFn?.fresetList() : fontSetFn?.fdeleteList();
                if (isFontsize) {
                  fontScaleT.value = INITIAL_VALUES.fontSize === 1 ? "OFF" : INITIAL_VALUES.fontSize.toFixed(3);
                  fontScaleT._value_ = INITIAL_VALUES.fontSize;
                  setSliderProperty(drawScale, INITIAL_VALUES.fontSize, 3);
                  def.var.curScale = INITIAL_VALUES.fontSize;
                  if (isFixViewport) {
                    fixViewportT.checked !== INITIAL_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    const fviewportNode = qS(`#${def.id.fviewport}`, def.var.configIf);
                    fviewportNode?.classList.toggle(`${def.const.seed}_hidden`, fontScaleT.value === "OFF");
                  }
                }
                strokeT.value = INITIAL_VALUES.fontStroke === 0 ? "OFF" : INITIAL_VALUES.fontStroke.toFixed(3);
                strokeT._value_ = INITIAL_VALUES.fontStroke;
                setSliderProperty(drawStrock, INITIAL_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== INITIAL_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== INITIAL_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  const fstrokeNode = qS(`#${def.id.fstroke}`, def.var.configIf);
                  fstrokeNode?.classList.toggle(`${def.const.seed}_hidden`, strokeT.value === "OFF");
                }
                shadowsT.value = INITIAL_VALUES.fontShadow === 0 ? "OFF" : INITIAL_VALUES.fontShadow.toFixed(2);
                shadowsT._value_ = INITIAL_VALUES.fontShadow;
                setSliderProperty(drawShadow, INITIAL_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== INITIAL_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                shadowColorNode?.classList.toggle(`${def.const.seed}_none`, shadowsT.value === "OFF");
                if (!IS_GREASEMONKEY) canvasT.checked !== INITIAL_VALUES.renderCanvas ? canvasT.click() : DEBUG("<canvas> NOT MODIFIED");
                colorPickerT.fromString(INITIAL_VALUES.shadowColor);
                colorshowT.value = INITIAL_VALUES.shadowColor;
                colorshowT._value_ = INITIAL_VALUES.shadowColor;
                fontCssT.value = INITIAL_VALUES.fontCSS;
                setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, fontCssT, submitButton);
                fontExT.value = INITIAL_VALUES.fontEx;
                setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, fontExT, submitButton);
                sleep(220)(getCurrentFontName(ffaceT.checked, INITIAL_VALUES.fontSelect.replaceAll("'", ""), defaultFont))
                  .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.var.configIf))
                  .then(submitPreview => void submitPreview?.click());
              } else {
                smoothT.checked !== CONST_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== CONST_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                fontSetFn?.fdeleteList();
                if (isFontsize) {
                  fontScaleT.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
                  fontScaleT._value_ = CONST_VALUES.fontSize;
                  setSliderProperty(drawScale, CONST_VALUES.fontSize, 3);
                  def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize));
                  if (isFixViewport) {
                    fixViewportT.checked !== CONST_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    const fviewportNode = qS(`#${def.id.fviewport}`, def.var.configIf);
                    fviewportNode?.classList.toggle(`${def.const.seed}_hidden`, fontScaleT.value === "OFF");
                  }
                }
                strokeT.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
                strokeT._value_ = CONST_VALUES.fontStroke;
                setSliderProperty(drawStrock, CONST_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== CONST_VALUES.fixStroke ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== CONST_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  const fstrokeNode = qS(`#${def.id.fstroke}`, def.var.configIf);
                  fstrokeNode?.classList.toggle(`${def.const.seed}_hidden`, strokeT.value === "OFF");
                }
                shadowsT.value = CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
                shadowsT._value_ = CONST_VALUES.fontShadow;
                setSliderProperty(drawShadow, CONST_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== CONST_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                shadowColorNode?.classList.toggle(`${def.const.seed}_none`, shadowsT.value === "OFF");
                if (!IS_GREASEMONKEY) canvasT.checked !== CONST_VALUES.renderCanvas ? canvasT.click() : DEBUG("<canvas> NOT MODIFIED");
                colorPickerT.fromString(CONST_VALUES.shadowColor);
                colorshowT.value = CONST_VALUES.shadowColor === "#FFFFFFFF" ? "currentcolor" : colorPickerT.toHEXAString();
                colorshowT._value_ = colorshowT.value;
                fontCssT.value = CONST_VALUES.fontCSS;
                setEffectIntoSubmit(fontCssT.value, CONST_VALUES.fontCSS, fontCssT, submitButton);
                fontExT.value = CONST_VALUES.fontEx;
                setEffectIntoSubmit(fontExT.value, CONST_VALUES.fontEx, fontExT, submitButton);
                await getCurrentFontName(ffaceT.checked, selectedFont, defaultFont);
                loadPreview(def.var.preview);
                delete def.var.preview;
              }
              frDialog = null;
            });
          }

          function controlSubmitButton(submitT, fontSetFn, finalSettings) {
            const { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, shadowsT, fixShadowT, canvasT, colorshowT, colorReg, fontCssT, fontExT } = finalSettings;
            submitT?.addEventListener("click", async function () {
              const fontlists = fontSetFn?.fsearchList(def.id.fontName) ?? [];
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
              const [rendercanvas, pickedcolor, fcss, fex] = [canvasT?.checked, colorshowT.value, fontCssT.value, fontExT.value];
              const fscolor = colorReg.test(pickedcolor) ? (pickedcolor.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : pickedcolor) : INITIAL_VALUES.shadowColor;
              const fontcss = fcss ? fcss.replace(/["`]/g, "'") : INITIAL_VALUES.fontCSS;
              const fontex = fex ? fex.replace(/["`]/g, "'") : "";
              const _curEmptyConfig = !fontface && !smooth && !fshadow && !fstroke && fscale === 1;
              if (isPreview && this.hasAttribute("v-Preview")) {
                try {
                  const _bodyscale = !isFontsize ? "" : fscale >= 0.8 && fscale <= 1.5 && fscale !== 1 ? generateFontSizeCss(fscale) : "";
                  const _shadow = fshadow > 0 && fshadow <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
                  const _stroke = fstroke > 0 && fstroke <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
                  const _strokecsstext = `${_stroke ? fstroke : 0}px currentcolor`;
                  const _shadowcsstext = generateTextShadow(fshadow, fscolor.toLowerCase());
                  const _smoothing = smooth ? fontSmoothCssText : "";
                  const _textrender = smooth ? "text-rendering:optimizeLegibility;" : "";
                  const _fontfamily = fontface ? "font-family:var(--fr-font-family),var(--fr-font-basefont);" : "";
                  const _refont = fontselect?.split(",")[0].replace(/["']/g, "") ?? "";
                  const _fontfaces = fontface && _refont ? await generateFontFaceCSS(_refont, fontOverrideDefData) : "";
                  const _includeSelectors = `${globalPrefix}:is(${convertHtmlToText(fontcss)})`;
                  const _excludeSplit = `${_shadow ? "text-shadow:none!important;" : ""}${_stroke ? "-webkit-text-stroke:var(--fr-no-stroke)!important;" : ""}`;
                  const _excludeCssText = fontex && (_shadow || _stroke) ? `${globalPrefix}:is(${convertHtmlToText(fontex)}){${_excludeSplit}}` : "";
                  const _codefont = fontex ? funcCodefont(fontex, fontface, isCustomMono) : "";
                  const _noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && fixfshadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
                  const _fixfontstroke = fixfstroke ? getBoldFixCssText(_noTextShadowCss) : "";
                  const _tshadow = `${_fontfaces}${_bodyscale}${_includeSelectors}{${_fontfamily}${_shadow}${_stroke}${_smoothing}${_textrender}}${_excludeCssText}${_codefont}${_fixfontstroke}`;
                  const _firefoxInputFix = IS_REAL_GECKO && fontface ? def.var.style.firefox : "";
                  const _textShadowFix = `0 0 ${fshadow}px ${fscolor.toLowerCase().slice(0, 7).concat("2b")}`;
                  const _rootpseudoclass = `:root{--fr-font-basefont:${INITIAL_REMARKS.fontBase};${customFontFeature}--fr-font-fontscale:${fscale};--fr-font-family:${fontselect};--fr-font-shadow:${_shadowcsstext};--fr-font-stroke:${_strokecsstext};--fr-no-stroke:0px transparent;--fr-fix-stroke:var(--fr-no-stroke);--fr-fix-shadow:${_textShadowFix};${monoFontText}${monoFallback}${monoShadow}${monoFeatureText}}`;
                  const __tshadow = `@charset "UTF-8";${def.var.style.frDialog}${_curEmptyConfig ? `` : `${_rootpseudoclass}${_firefoxInputFix}${_tshadow}`}`;
                  this.textContent = IS_CHN ? "\u4fdd\u5b58" : "\ud835\udc7a\ud835\udc82\ud835\udc97\ud835\udc86";
                  this.removeAttribute("style");
                  this.removeAttribute("v-Preview");
                  def.array.scaleMatrix.push((def.var.curScale = fscale));
                  loadPreview(isPreview, __tshadow, false);
                  await getCurrentFontName(fontface, _refont, defaultFont)
                    .then(correctBoldStrokeProcess({ CorrectStyle: _fixfontstroke, Scenes: "preview", Permit: fixfstroke }))
                    .then(() => DEBUG(`frColorPicker<Preview>: %c${fscolor}`, fullStyle(fscolor, getBrightness(fscolor.slice(1)) > 182 ? "#333" : "#eee")))
                    .catch(e => void ERROR("submitPreview.then:", e.message));
                } catch (e) {
                  ERROR("SubmitPreview:", e.message);
                  def.array.exps.push(`[submitPreview]: ${e}`);
                }
              } else {
                try {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">保存到全局数据：</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">保存到当前网站数据：<span id="${def.const.seed}_a_w_d_l_">[<span>全部数据列表</span>]</span></p><p class="${def.const.seed}_mh22"><span title="保存到网站数据会自动覆盖之前的数据" id="${def.const.seed}_c_w_d_">为 ${TOP_HOST} 保存独立的设置数据。</span>`
                    : `<p class="${def.const.seed}_cdg ${def.const.seed}_fb">Save to Global Data:</p><p>Save as global setting, using global by default. </p><p class="${def.const.seed}_cb8 ${def.const.seed}_fb">Save to Current Website Data: <span id="${def.const.seed}_a_w_d_l_">[<span> All Data List </span>]</span></p><p class="${def.const.seed}_mh22"><span title="Data saved to the website will automatically overwrite the previous data" id="${def.const.seed}_c_w_d_">Save to website data for ${TOP_HOST}</span>`;
                  const [trueButtonText, falseButtonText] = [IS_CHN ? "保存到全局数据" : "Global Save", IS_CHN ? "保存到网站数据" : "Website Save"];
                  const [neutralButtonText, titleText] = [IS_CHN ? "取 消" : "Cancel", IS_CHN ? "保存设置数据" : "Save Settings Data"];
                  let frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                  let [domains, domainValues] = [await GMgetValue(DOMAINFONTSET)];
                  try {
                    domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
                  } catch (e) {
                    domainValues = [];
                  }
                  const awdlNode = qS(`#${def.const.seed}_a_w_d_l_`, def.var.dialogIf);
                  awdlNode?.classList.add(domainValues.length > 0 ? `${def.const.seed}_inline_block` : `${def.const.seed}_none`);
                  awdlNode?.addEventListener("click", () => void manageDomainsList());
                  const domainValueIndex = updateDomainsIndex(domainValues);
                  const cwdNode = qS(`#${def.const.seed}_c_w_d_`, def.var.dialogIf);
                  if (~domainValueIndex && cwdNode) {
                    const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValues[domainValueIndex].fontDate));
                    const cwdNodeHTML = IS_CHN
                      ? `<p class="${def.const.seed}_save_p"><span class="${def.const.seed}_idg"><strong>上次保存：</strong>${fontDate} </span><button id="${def.const.seed}_c_w_d_d_" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                      : `<p class="${def.const.seed}_save_p"><span class="${def.const.seed}_idg"><strong>The last saved</strong>: ${fontDate} </span><button id="${def.const.seed}_c_w_d_d_" title="The page will be refreshed after deleting the data">Delete Data</button></p>`;
                    cwdNode.innerHTML = tTP.createHTML(cwdNodeHTML);
                    qS(`#${def.const.seed}_c_w_d_d_`, def.var.dialogIf)?.addEventListener("click", async () => {
                      if (~domainValueIndex) domainValues.splice(domainValueIndex, 1);
                      saveData(DOMAINFONTSET, domainValues);
                      const messageText = IS_CHN
                        ? `<p class="${def.const.seed}_cb8">当前网站的个性化数据已成功删除！</p><p>当前页面将在您确认后自动刷新。</p>`
                        : `<p class="${def.const.seed}_cb8">The current site data was deleted!</p><p>The page will refresh after confirmation.</p>`;
                      const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "个性化数据删除" : "Customized Data Deletion"];
                      let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                      if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                      successDialog = null;
                    });
                  }
                  const receivedRenderData = {
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
                    renderCanvas: Boolean(rendercanvas),
                    shadowColor: convertHtmlToText(fscolor),
                    fontCSS: convertHtmlToText(fontcss),
                    fontEx: convertHtmlToText(fontex),
                  };
                  if (await frDialog.respond()) {
                    const fontSetData = { ...receivedRenderData };
                    saveData(FONTSET, fontSetData);
                    if (globalDisable !== _curEmptyConfig) {
                      _config_data_.globalDisable = !globalDisable;
                      saveData(CONFIGURE, _config_data_);
                    }
                    def.var.successed = true;
                  } else {
                    const domainValue = { domain: TOP_HOST, fontDate: Date.now(), ...receivedRenderData };
                    domains = await GMgetValue(DOMAINFONTSET);
                    try {
                      domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
                    } catch (e) {
                      domainValues = [];
                    }
                    const domainValueIndex = updateDomainsIndex(domainValues);
                    ~domainValueIndex ? domainValues.splice(domainValueIndex, 1, domainValue) : domainValues.push(domainValue);
                    if (domainValues.length <= maxPersonalSites || ~domainValueIndex) {
                      saveData(DOMAINFONTSET, domainValues);
                      def.var.successed = true;
                    } else {
                      const messageText = IS_CHN
                        ? `<p class="${def.const.seed}_cga">您已经保存超过<span class="${def.const.seed}_cdc1 ${def.const.seed}_fb ${def.const.seed}_fsi ${def.const.seed}_f20">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p class="${def.const.seed}_ccr">您确认要继续保存吗？</p>`
                        : `<p class="${def.const.seed}_cga">You have saved more than <span class="${def.const.seed}_cdc1 ${def.const.seed}_fb ${def.const.seed}_fsn ${def.const.seed}_f20">${maxPersonalSites}</span > Personalized data. Too much data will make script run slowly. It's recommended that you delete some site settings that are rarely visited in time. </p><p class="${def.const.seed}_ccr">Are you sure you want to continue saving? </p>`;
                      const [trueButtonText, falseButtonText] = [IS_CHN ? "依然保存" : "Still Save", IS_CHN ? "管理列表" : "Manage"];
                      const [neutralButtonText, titleText] = [IS_CHN ? "我放弃" : "Abort", IS_CHN ? "数据过多的提示" : "Too Much Data"];
                      let warnDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                      if (await warnDialog.respond()) {
                        saveData(DOMAINFONTSET, domainValues);
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
                  delete def.var.successed;
                } finally {
                  if (def.var.successed) {
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}_cdg">您设置的字体渲染数据已成功保存！</p><p>当前页面将在您确认后自动刷新。</p>`
                      : `<p class="${def.const.seed}_cdg">Font Rendering data saved successfully!</p><p>The page will refresh after confirmation.</p>`;
                    const [trueButtonText, titleText] = [IS_CHN ? "感谢使用" : "Thanks", IS_CHN ? "字体渲染数据保存" : "Font Rendering Data Save"];
                    let successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond()) closeConfigurePage({ isReload: delete def.var.successed });
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
                const messageNode = qS(`#${def.id.tfiles}`, def.var.dialogIf);
                const inputNode = qS(`#${def.id.files}`, def.var.dialogIf);
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
                  const allkey = [FONTSET, EXCLUDESITES, DOMAINFONTSET, CUSTOMFONTS, MONOFONTS, MONORULES, MONOFEATS, FONTSCALE, FONTOVERRIDE, CONFIGURE];
                  const backendData = await Promise.all(allkey.map(key => GMgetValue(key)));
                  const [fontSets, excludeSites, domainFontSets, customFonts, monoFonts, monoRules, monoFeature, fontScaleDef, fontOverrideDef, configure] = backendData;
                  const db = {
                    db_R: inspectLicense()?.keycode().concat(encrypt(def.var.scriptName)),
                    db_0: encrypt(new Date()),
                    db_1: fontSets,
                    db_2: excludeSites,
                    db_3: domainFontSets || encrypt(JSON.stringify([])),
                    db_4: customFonts || encrypt(JSON.stringify([])),
                    db_5: configure,
                    db_6: monoFonts || "",
                    db_7: monoRules || "",
                    db_8: monoFeature || "",
                    db_9: fontScaleDef || "",
                    db_10: fontOverrideDef || "",
                  };
                  const browser = brand.toLowerCase();
                  const timeStamp = setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date());
                  const fileName = `FontRendering-backup-${browser}-${timeStamp}.sqlitedb`;
                  dataDownload(fileName, sqliteDBDataAccess(JSON.stringify(db), 12315, ROOT_SECRET_KEY));
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
                          const fileContent = decrypt(String(this.result));
                          const parsedData = JSON.parse(sqliteDBDataAccess(fileContent, null, ROOT_SECRET_KEY));
                          const decryptedData = Object.create(null);
                          for (let i = 1; i <= 10; i++) {
                            const key = `db_${i}`;
                            decryptedData[key] = parsedData[key] ? JSON.parse(decrypt(parsedData[key])) : [3, 4].includes(i) ? [] : void 0;
                          }
                          decryptedData.db_R = decrypt(parsedData.db_R);
                          decryptedData.db_0 = decrypt(parsedData.db_0);
                          if (!isNaN(Date.parse(decryptedData.db_0)) && new Date(decryptedData.db_0) < new Date() && inspectLicense()?.inspect(decryptedData.db_R)) {
                            const keys = await GMlistValues();
                            keys.forEach(key => void GMdeleteValue(key));
                            saveData(FONTSET, decryptedData.db_1);
                            saveData(EXCLUDESITES, decryptedData.db_2);
                            saveData(DOMAINFONTSET, decryptedData.db_3);
                            saveData(CUSTOMFONTS, decryptedData.db_4);
                            decryptedData.db_6 && saveData(MONOFONTS, decryptedData.db_6);
                            decryptedData.db_7 && saveData(MONORULES, decryptedData.db_7);
                            decryptedData.db_8 && saveData(MONOFEATS, decryptedData.db_8);
                            decryptedData.db_9 && saveData(FONTSCALE, decryptedData.db_9);
                            decryptedData.db_10 && saveData(FONTOVERRIDE, decryptedData.db_10);
                            if (decryptedData.db_5) {
                              decryptedData.db_5.curVersion = def.var.curVersion;
                              decryptedData.db_5.rebuild = void 0;
                              saveData(CONFIGURE, decryptedData.db_5);
                            } else DEBUG("no configure data");
                            const messageText = IS_CHN
                              ? `<p class="${def.const.seed}_cdg">本地备份数据已成功还原！</p><p>当前页面将在您确认后自动刷新。</p>`
                              : `<p class="${def.const.seed}_cdg">Local backup data restored Successfully!</p><p>The page will refresh after confirmation.</p>`;
                            const [trueButtonText, titleText] = [IS_CHN ? "确 定" : "OK", IS_CHN ? "数据还原完毕" : "Data restoration complete"];
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
                          if (await errorDialog.respond()) qS(`#${def.id.backup}`, def.var.configIf)?.click();
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
                    if (await nothingDialog.respond()) qS(`#${def.id.backup}`, def.var.configIf)?.click();
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

        async function detectAvailableFonts() {
          if (!(await isFontReady())) return [];
          const fontCheckList = await getMergedFontCheckList();
          const checkFont = new FontFaceSetObserver();
          const fontAvailable = [];
          for (const [index, font] of fontCheckList.entries()) {
            if (!checkFont.detect(font.en) && !((font.en = convertToUnicode(font.ch)) && checkFont.detect(font.en))) continue;
            delete font.ps && fontAvailable.push({ ...font, sort: index + 1 });
          }
          checkFont.destroy();
          return fontAvailable.sort((a, b) => a.sort - b.sort);
        }

        async function getCurrentFontName(isOverride, fontName, defaultName) {
          def.var.fontNamePh = IS_CHN ? "当前字体：" : "Current: ";
          def.var.reFontFace = def.var.curFont = defaultName;
          if (isOverride) {
            def.var.reFontFace = IS_CHN ? `未知字体名（请重新添加该自定义字体: ${fontName}）` : `Unknown (Re-Add Font: ${fontName})`;
            def.var.curFont = IS_CHN ? "未知字体名" : "Unknown";
            const fontCheckList = await getMergedFontCheckList();
            for (let i = 0, l = fontCheckList.length; i < l; i++) {
              if (fontCheckList[i].en !== fontName && convertToUnicode(fontCheckList[i].ch) !== fontName) continue;
              def.var.curFont = fontName.includes("\\") ? `` : ` (${fontCheckList[i].en})`;
              def.var.reFontFace = fontCheckList[i].ch + def.var.curFont;
              def.var.curFont = fontCheckList[i].ch;
              break;
            }
          }
          const inputFont = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
          inputFont?.setAttribute("placeholder", `${def.var.fontNamePh}${def.var.curFont}`);
          inputFont?.addEventListener("mouseenter", () => void inputFont.setAttribute("placeholder", IS_CHN ? "输入关键字可检索字体" : "Enter some keywords"));
          inputFont?.addEventListener("mouseleave", () => void inputFont.setAttribute("placeholder", `${def.var.fontNamePh}${def.var.curFont}`));
        }

        function closeConfigurePage({ isReload }) {
          FrDialogBox.closure() && qS(`#${def.id.container}`, def.var.configIf)?.classList.remove(`${def.const.seed}_op1`);
          sleep(5e2)(safeRemoveNode("fr-colorpicker"))
            .then(r => r && safeRemoveNode("fr-configure") && qS(`dialog#${def.const.dialog}`))
            .then(closeDialogModel);
          def.array.values.length = 0;
          isReload ? refresh() : isPreview && restoreSavedPreview();
        }

        function rangeSliderWidget(listener, target, bits, isOne = false) {
          if (!listener || !target) return;
          listener.addEventListener("input", () => {
            const value = Number(listener.value);
            const isOFF = value === Number(isOne);
            const toggleClass = (node, name) => node?.classList.toggle(`${def.const.seed}_${name}`, isOFF);
            setSliderProperty(listener, value, bits);
            target.value = isOFF ? "OFF" : value.toFixed(bits);
            target._value_ = value.toFixed(bits);
            switch (listener.id) {
              case def.id.shadow:
                return toggleClass(qS(`#${def.id.shadowColor}`, def.var.configIf), "none");
              case def.id.scaleSize:
                return isFixViewport && toggleClass(qS(`#${def.id.fviewport}`, def.var.configIf), "hidden");
              case def.id.stroke:
                return IS_REAL_BLINK && toggleClass(qS(`#${def.id.fstroke}`, def.var.configIf), "hidden");
            }
          });
        }

        function expandOrCollapse(button, textarea, node) {
          if (!button || !textarea || !node) return;
          const at = button.attributes["fr-button-switch"];
          button.addEventListener("click", () => {
            const isOn = at.value === "ON";
            textarea.classList.toggle(`${def.const.seed}_none`, isOn);
            button.textContent = isOn ? "\u2228" : "\u2227";
            node.classList.toggle(`${def.const.seed}_hmh35`, isOn);
            at.value = isOn ? "OFF" : "ON";
          });
        }

        function saveChangeStatus(input, initVal, button, isOne = false) {
          if (!input) return;
          const deBounceSetEffect = createDeBounce({ fn: setEffectIntoSubmit, delay: 2e2 });
          const handleChange = () => {
            const newVal = input.type === "checkbox" ? input.checked : input.value;
            setEffectIntoSubmit(newVal, initVal, input, button);
          };
          try {
            if (input.type === "text") {
              Object.defineProperty(input, "_value_", {
                enumerable: true,
                configurable: true,
                get() {
                  return this.value;
                },
                set(newVal) {
                  deBounceSetEffect(newVal, initVal, input, button, isOne);
                },
              });
            } else {
              const method = input.type === "textarea" ? "input" : "change";
              input.addEventListener(method, handleChange);
            }
          } catch (exp) {
            ERROR("SaveChangeStatus:", exp);
            def.array.exps.push(`[saveChangeStatus]: ${exp}`);
          }
        }

        function setEffectIntoSubmit(newVal, initVal, input, button, isOne = false) {
          try {
            if (!button || !input) return;
            const processedValue = typeof newVal === "string" && newVal.toLowerCase() === "currentcolor" ? "#FFFFFFFF" : newVal;
            const value = typeof input.dataset.frType !== "undefined" ? (newVal === "OFF" ? Number(isOne) : Number(newVal)) : processedValue;
            if (value !== initVal) !def.array.values.includes(input.id) && def.array.values.push(input.id);
            else def.array.values.Remove(input.id);
            const hasValues = def.array.values.length > 0;
            if (isPreview && hasValues) DEBUG("changed Element IDs:\r\n", def.array.values);
            button.classList.toggle(def.class.anim, hasValues);
            if (isPreview) hasValues ? changePreviewButtonStyle(button) : restoreSaveButton(button);
          } catch (exp) {
            ERROR("SetEffectIntoSubmit:", exp);
          }
        }

        function restoreSavedPreview() {
          def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize));
          if (def.var.preview) processRecoverBoldStyle();
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
          button.style.cssText = "background-color:#ff7f50!important;border-color:#ff7f50!important";
          button.setAttribute("v-Preview", "true");
        }

        function addSingleQuoteForItem(fontArray) {
          if (!Array.isArray(fontArray)) return INITIAL_VALUES.fontSelect;
          const uniqueItems = uniq(fontArray).map(item => `'${item}'`);
          return uniqueItems.length > 0 ? uniqueItems.join(",") : INITIAL_VALUES.fontSelect;
        }

        function convertFullToHalf(str) {
          return asArray(str).reduce((result, char) => {
            const charCode = char.charCodeAt(0);
            if (charCode === 12288) return result + String.fromCharCode(charCode - 12256);
            else if (charCode >= 65281 && charCode <= 65374) return result + String.fromCharCode(charCode - 65248);
            else return result + char;
          }, "");
        }

        function reportErrorToAuthor(exps, showDialogBox) {
          if (!showDialogBox || !Array.isArray(exps)) return;
          closeConfigurePage({ isReload: false });
          sleep(6e2).then(async (errorList = "") => {
            try {
              if (qS("fr-dialogbox[fr-error]")) return;
              exps.forEach((exp, i, array) => void (errorList += `${i + 1}、${exp}${i + 1 !== array.length ? "\u3000<br/>" : ""}`));
              const errorNoticeHTML = IS_CHN
                ? `<p class="${def.const.seed}_ccr ${def.const.seed}_f14">脚本在运行时发生了重大异常或错误，若在『刷新页面』后依然报错，请通过『反馈问题』及时告知作者，感谢您的反馈！<br/><kbd id="${def.const.seed}_kbd">以下信息会自动保存至您的剪切板</kbd></p>`
                : `<p class="${def.const.seed}_ccr ${def.const.seed}_f14">If an error occured in the script and still occured after reloading, please report to the author in time, Thanks.<br/><kbd id="${def.const.seed}_kbd">The following will be saved to the clipboard</kbd></p>`;
              const infoRow1 = IS_CHN
                ? `<li>浏览器信息：${JSON.stringify(navigatorInfo)}\u3000</li><li>脚本扩展信息：${GMscriptHandler} v${GMversion}\u3000</li>`
                : `<li><b>BrowserInfo:</b> ${JSON.stringify(navigatorInfo)}\u3000</li><li><b>ScriptManager:</b> ${GMscriptHandler} v${GMversion}\u3000</li>`;
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
              const copyText = qS(`#${def.const.seed}_copy_to_author`, def.var.dialogIf)
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

        /* FIX_CANVAS_FONT_RENDERING. NEW UPDATE: 2024-09-11 F9Y4NG */

        function overrideCanvasFont(renderFont) {
          if (!IS_CURRENTSITE_ALLOWED || !IS_INTERNALSTYLE_ALLOWED || !CONST_VALUES.renderCanvas || !CONST_VALUES.fontFace) return;
          const fontReg = /^((?:[a-z-]+\s)+|[0-9]+\s)?(\d*\.?\d+(?:px|em|pt|%|rem)\s)?(.+)$/i;
          const fontName = `${CONST_VALUES.fontSelect},${INITIAL_REMARKS.fontBase}`;
          const modifyFont = fontText => {
            const matches = fontText?.match(fontReg);
            return matches ? `${matches[1] ?? ""} ${matches[2] ?? ""} ${fontName}`.trim() : fontText;
          };
          const overrideMethod = methodName =>
            (CanvasRenderingContext2D.prototype[methodName] = function (...args) {
              if (!this.frFontFace && this.font && !this.font.includes(renderFont)) {
                this.font = modifyFont(this.font);
                const applyShadow = methodName === "fillText" && shadow_r > 0 && !/(?:bold|[6789]00)\s/i.test(this.font);
                if (applyShadow && !def.var.fillText.apply(this, args)) Object.assign(this, { shadowColor: shadow_c, shadowBlur: shadow_r, shadowOffsetX: 0, shadowOffsetY: 0 });
              }
              def.var[methodName].apply(this, args);
            });
          ["fillText", "strokeText"].forEach(overrideMethod);
        }

        /* FIX_FONT_BOLD_STROKE_STYLE_ERRORS. NEW UPDATE: 2024-10-26 F9Y4NG */

        function correctBoldStrokeProcess({ CorrectStyle = boldFixCSSText, Scenes, Permit } = {}) {
          const [observeNodeSet, boldStatusCache] = [new Set(), new WeakMap()];
          const hasLocalFlag = Boolean(storage.local?.getItem(def.const.flagName));
          const hasSessionFlag = Boolean(storage.session?.getItem(def.const.flagName));
          const observeConfig = { attributeOldValue: true, childList: true, subtree: true };
          const checkConflict = { flag: hasLocalFlag, previous: [], sameCount: 0, maxCount: 50 };
          const excludeNodeSet = new Set(def.const.queryString.split(",").filter(string => !string.includes("*")));
          const changeAttribute = createChangeAttribute(def.const.boldAttrName, !hasLocalFlag);
          const deBounceFixPassive = createDeBounce({ fn: correctBoldPassive, delay: 50 });
          const deBounceMouseEvent = createDeBounce({ fn: mouseEventsHandler, delay: 16 });
          const hasCorrectPermission = checkCorrectPermission(Scenes ?? (IS_CURRENTSITE_ALLOWED && CONST_VALUES.fixStroke));

          if (["iframe", "preview", "recover"].includes(Scenes)) {
            if (!hasCorrectPermission) return () => {};
            if (Scenes !== "iframe") def.var.fixBoldObs = new MutationObserver(fixBoldProcess);
            if (Scenes === "recover" && Permit === false) CorrectStyle = "";
            return correctBoldPassive;
          } else {
            def.var.fixBoldObs = new MutationObserver(fixBoldProcess);
            return observeBoldElements;
          }

          function checkCorrectPermission(conditions) {
            return IS_CAUSED_BOLDSTROKEERROR && IS_INTERNALSTYLE_ALLOWED && Boolean(conditions);
          }

          function isShadowRoot(node) {
            return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && Boolean(node.host);
          }

          function querySelectorAllShadows(selector, root) {
            const [stack, result] = [[root], new Set()];
            while (stack.length) {
              const node = stack.pop();
              const nodes = qA(selector, node).filter(item => checkNodesForFix(item, [Node.ELEMENT_NODE]));
              nodes.forEach(el => result.add(el) && el.shadowRoot && stack.push(el.shadowRoot) && processShadowRootNode(el.shadowRoot));
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
            return node && checkList.includes(node.nodeType) && !excludeNodeSet.has(getNodeName(node)) && !/water.?mark/i.test(toString(node.className));
          }

          function getSuitableElements(expr, node) {
            const elementsArray = qA(expr, node).filter(item => checkNodesForFix(item, [Node.ELEMENT_NODE]));
            if (node.nodeType === Node.ELEMENT_NODE) elementsArray.unshift(node);
            return elementsArray;
          }

          function isBold(element, loadEnd = false) {
            let boldStatus = boldStatusCache.get(element);
            if (!boldStatus || loadEnd) {
              boldStatus = gCS(element).fontWeight;
              boldStatusCache.set(element, boldStatus);
            }
            return boldStatus >= 600;
          }

          function boldFixedHandler({ checkedNode, uncheckedNode }) {
            const item = checkedNode?.node ?? uncheckedNode;
            const bold = checkedNode?.isbold ?? isBold(uncheckedNode);
            const hasFixedAttr = item.hasAttribute(def.const.boldAttrName) || item.classList.contains(def.const.boldAttrName);
            if (hasFixedAttr === bold) return;
            const changeHandler = hasFixedAttr ? changeAttribute.del : changeAttribute.add;
            CONST_VALUES.lazyload ? global[def.const.raf](changeHandler.bind(null, item)) : changeHandler(item);
          }

          function getAndProcessBoldStyles(nodes, loadEnd) {
            const processedNode = asArray(nodes, node => ({ node, isbold: isBold(node, loadEnd) }));
            processedNode.forEach(checkedNode => boldFixedHandler({ checkedNode }));
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

          function shadowRootNodeInsertCss(shadow, syncStyle) {
            if (!isShadowRoot(shadow)) return;
            const hostNodeName = getNodeName(shadow.host);
            applyStylesToShadowRoot(shadow, selectionCssText, `${hostNodeName}-fixselection`, false);
            if (!hasCorrectPermission) return;
            const syncCssText = syncStyle ? `:host(${hostNodeName}){--fr-fix-stroke:0px transparent;--fr-fix-shadow:${textShadowFix}}${syncStyle}` : ``;
            applyStylesToShadowRoot(shadow, syncCssText, `${hostNodeName}-fixboldstroke`);
          }

          function handleRootNodeObserve(context, observer) {
            observer.observe(context, observeConfig);
            observeNodeSet.add(context);
            hasCorrectPermission && ["mouseover", "mouseout"].forEach(event => context.addEventListener(event, handleMouseEvents));
          }

          function correctBoldPassive(event, target = document, loadEnd) {
            try {
              let allNodeElements = querySelectorAllShadows(`:not(${def.const.queryString})`, target);
              if (!hasCorrectPermission || hasSessionFlag) return (allNodeElements = null);
              DEBUG(`CorrectBold.stroke.Passive${IN_FRAMES}:`, { eventType: Scenes ?? event ?? global.event?.type ?? "unknown" });
              if (Permit !== false) getAndProcessBoldStyles(allNodeElements, loadEnd);
            } catch (e) {
              ERROR("correctBoldPassive:", e.message);
            }
          }

          function fixBoldProcess(mutationsList, observer) {
            try {
              if (hasSessionFlag) return conflictReport();
              const subtrees = new Set();
              observer.disconnect();
              checkConflictCallback(mutationsList, checkConflict.previous);
              mutationsList.forEach(mutation => {
                processChildListMutations(mutation, subtrees);
                if (hasCorrectPermission) processAttributesMutations(mutation, subtrees, observer);
              });
              mutationListMonitor(subtrees, observer);
              reconnectObserver(observer, observeNodeSet);
            } catch (e) {
              if (e.message.includes("callback conflict")) handleCallbackLimit(observer);
              ERROR("fixBoldProcess:", e.message);
            }
          }

          function processShadowRootNode(shadow) {
            shadowRootNodeInsertCss(shadow, CorrectStyle);
            if (Permit === false) return def.var.fixBoldObs.disconnect();
            if (typeof Scenes === "undefined" || Permit) !observeNodeSet.has(shadow) && handleRootNodeObserve(shadow, def.var.fixBoldObs);
          }

          function processNodes(treeNode, observer) {
            if (!checkNodesForFix(treeNode)) return;
            const pendingNodeSet = new Set();
            const subtreeNodes = getSuitableElements(`:not(${def.const.queryString})`, treeNode);
            processSubtreeNodes(subtreeNodes, pendingNodeSet, observer);
            addCurrentNodeToPending(treeNode, pendingNodeSet);
            getAndProcessBoldStyles(pendingNodeSet);
          }

          function processSubtreeNodes(subtreeNodes, pendingNodes, observer) {
            subtreeNodes.forEach(item => {
              if (hasCorrectPermission) pendingNodes.add(item);
              const shadow = item.shadowRoot;
              if (!shadow) return;
              shadowRootNodeInsertCss(shadow, CorrectStyle);
              if (!observeNodeSet.has(shadow)) handleRootNodeObserve(shadow, observer);
              processNodes(shadow, observer);
            });
          }

          function addCurrentNodeToPending(treeNode, pendingNodes) {
            if (!hasCorrectPermission) return;
            const nodeToAdd = isShadowRoot(treeNode) ? treeNode.host : treeNode;
            checkNodesForFix(nodeToAdd, [Node.ELEMENT_NODE]) && pendingNodes.add(nodeToAdd);
          }

          function mutationListMonitor(treeNodes, observer) {
            const { iterator, length } = setIterator(treeNodes);
            if (length === 0) return;
            const chuckSize = Math.max(length / 3, 80) | 0;
            chunkIteratorProcess(iterator, chuckSize, value => processNodes(value, observer));
          }

          function chunkIteratorProcess(iterator, batchSize, processFn) {
            const processBatch = () => {
              for (let count = 0; count < batchSize; count++) {
                const { done, value } = iterator.next();
                if (done) return true;
                processFn(value);
              }
              setTimeout(processBatch, 0);
            };
            processBatch();
          }

          function processChildListMutations(mutation, subtrees) {
            const { target, type, addedNodes, removedNodes } = mutation;
            if (type !== "childList") return;
            addedNodes.forEach(node => checkNodesForFix(node, [Node.ELEMENT_NODE]) && subtrees.add(node));
            removedNodes.forEach(node => void handleRemovedNode(node));
            checkNodesForFix(target) && subtrees.add(target);
          }

          function processAttributesMutations(mutation, subtrees) {
            const { target, type } = mutation;
            if (type !== "attributes" || !checkNodesForFix(target, [Node.ELEMENT_NODE])) return;
            const ChangedValue = checkAttributeChange(mutation);
            ChangedValue && ChangedValue.newValue !== ChangedValue.oldValue && removeBoldCache(target) && subtrees.add(target);
          }

          function removeBoldCache(target, checkChildren = true) {
            if (checkChildren) qA(`:not(${def.const.queryString})`, target).forEach(item => boldStatusCache.delete(item));
            return boldStatusCache.delete(target) || !boldStatusCache.has(target);
          }

          function handleRemovedNode(node) {
            if (!checkNodesForFix(node)) return;
            const shadow = node.shadowRoot;
            shadow && observeNodeSet.delete(shadow);
            hasCorrectPermission && removeBoldCache(node) && ["mouseover", "mouseout"].forEach(event => shadow?.removeEventListener(event, handleMouseEvents));
          }

          function reconnectObserver(observer, observeNodeSet) {
            observeNodeSet.forEach(node => void observer.observe(node, observeConfig));
          }

          function hasFixedBoldFlagChange(newValue, oldValue, className) {
            const [parsedNewValue, parsedOldValue] = [toString(newValue), toString(oldValue)];
            return parsedOldValue.includes(className) !== parsedNewValue.includes(className);
          }

          function checkAttributeChange(mutation) {
            const { attributeName, target } = mutation;
            let [oldValue, newValue] = [mutation.oldValue ?? "", ""];
            if (attributeName === "style") {
              oldValue = oldValue.replace(/\s/g, "");
              newValue = target.style?.cssText?.replace(/\s/g, "") ?? "";
              if (newValue !== oldValue && hasFontStyleChange(newValue, oldValue)) return;
            } else if (attributeName === "class") {
              newValue = target.className?.baseVal ?? target.className ?? "";
              if (newValue !== oldValue && hasFixedBoldFlagChange(newValue, oldValue, def.const.boldAttrName)) return;
            } else if (attributeName === def.const.boldAttrName) return;
            else newValue = target.getAttribute(attributeName) ?? "";
            return { oldValue, newValue };
          }

          function mouseEventsHandler(event) {
            const target = event.composedPath()[0] ?? event.target;
            if (!checkNodesForFix(target, [Node.ELEMENT_NODE])) return;
            const { transition, transitionDelay, transitionDuration } = gCS(target);
            if (["all 0s ease 0s", "none"].includes(transition)) return removeBoldCache(target, false) && boldFixedHandler({ uncheckedNode: target });
            const delayTime = (parseFloat(transitionDelay) || 0 + parseFloat(transitionDuration) || 0) * 1e3;
            raf.setTimeout(() => removeBoldCache(target, false) && boldFixedHandler({ uncheckedNode: target }), delayTime);
          }

          function handleMouseEvents(event) {
            deBounceMouseEvent.setImmediate(event.type === "mouseout");
            deBounceMouseEvent(event);
          }

          function handleNavigateEvents(event) {
            const { isTrusted, navigationType, type } = event ?? global.event ?? immutObj;
            if (isTrusted || type) deBounceFixPassive(navigationType ?? type);
          }

          function checkConflictCallback(currentList, previousList) {
            if (!hasCorrectPermission) return;
            if (isMutationsListEqual(currentList, previousList)) {
              if (checkConflict.sameCount > checkConflict.maxCount) {
                if (checkConflict.flag) {
                  storage.session?.setItem(def.const.flagName, 12388);
                  return conflictReport();
                } else {
                  __console("warn", "[Warning]", "Potential infinite loop detected, switching to <classList> mode.");
                  storage.local?.setItem(def.const.flagName, 12339);
                  checkConflict.flag = true;
                }
              }
              checkConflict.sameCount++;
            } else checkConflict.sameCount = 0;
            checkConflict.previous = currentList;
          }

          function conflictReport() {
            __console("warn", "[Warning]", "Callback infinite loop occurred, suspending observer.");
            throw new Error(`Found callback conflict! Try the workaround to enable the 'Lazyload' option.`);
          }

          function isMutationsListEqual(mutationsListA, mutationsListB) {
            return mutationsListA.length === mutationsListB.length && mutationsListA.every((mutation, index) => isEqualMutation(mutation, mutationsListB[index]));
          }

          function isEqualMutation(mutationA, mutationB) {
            if (!isChildListMutation(mutationA.type, mutationA.type, global.event)) return false;
            return areNodeListsEqual([...mutationA.addedNodes, ...mutationA.removedNodes], [...mutationB.addedNodes, ...mutationB.removedNodes]);
          }

          function isChildListMutation(type1, type2, event) {
            if (event instanceof MouseEvent) return false;
            return type1 === "childList" && type2 === "childList";
          }

          function areNodeListsEqual(nodeList1, nodeList2) {
            if (nodeList1.length !== nodeList2.length) return false;
            return nodeList1.every((node, index) => !hasDifferentKeys(node, nodeList2[index]));
          }

          function hasDifferentKeys(node1, node2) {
            return !checkNodesForFix(node1, [Node.ELEMENT_NODE]) || !checkNodesForFix(node2, [Node.ELEMENT_NODE]) || getNodeKey(node1) !== getNodeKey(node2);
          }

          function getNodeKey(node) {
            if (!node.attributes || node.attributes.length === 0) return getNodeName(node);
            const parts = [getNodeName(node)];
            for (let i = 0, len = node.attributes.length; i < len; i++) {
              const attr = node.attributes[i];
              if (attr.name !== def.const.boldAttrName) parts.push(`${toString(attr.name)}:${attr.value.replace(def.const.boldAttrName, "")}`);
            }
            return parts.join("::");
          }

          function observeBoldElements() {
            addLoadEvents.addFinalFn(correctBoldPassive, null, document, true);
            handleRootNodeObserve(document, def.var.fixBoldObs);
            if (!hasCorrectPermission) return;
            if (global.navigation) global.navigation.addEventListener("navigate", handleNavigateEvents);
            else ["pushState", "replaceState"].forEach(event => global.addEventListener(event, handleNavigateEvents));
            DEBUG(`CorrectBold.stroke.Active${IN_FRAMES}:`, { eventType: "init" });
          }

          function handleCallbackLimit(observer) {
            observer.disconnect();
            if (global.navigation) global.navigation.removeEventListener("navigate", handleNavigateEvents);
            else ["pushState", "replaceState"].forEach(event => global.removeEventListener(event, handleNavigateEvents));
            observeNodeSet.forEach(shadow => ["mouseover", "mouseout"].forEach(event => shadow.removeEventListener(event, handleMouseEvents)));
            delete def.var.fixBoldObs && observeNodeSet.clear();
          }
        }

        /* FIX_VIEWPORT_ZOOM_STYLE_ERRORS. NEW UPDATE: 2024-08-10 F9Y4NG */

        function correctViewportUnits() {
          const vRegexp = /(\.?\d+(?:\.\d+)?)([dsl]?(?:v[wh]|vmin|vmax))\b(?![\\=/+_-])/g;
          const uRegexp = /url\((?![`'"]?(?:https?:\/\/|data:|\/\/|\/\B))([^)]+)\)/g;
          const permission = IS_CURRENTSITE_ALLOWED && IS_INTERNALSTYLE_ALLOWED && isFixViewport && CONST_VALUES.fixViewport && def.var.curScale !== 1;
          if (permission) {
            addLoadEvents.addFinalFn(correctViewport);
            DEBUG(`correctUnit.Viewport.Active${IN_FRAMES}:`, { eventType: "init" });
          }
          return [permission, correctViewport];

          async function correctViewport() {
            return await Promise.all([fixViewportLinks(), fixViewportStyles()]);
          }

          function fixViewportLinks() {
            qA(`link[rel~="stylesheet" i]:not([data-fr-processed])`).forEach(async link => {
              let url = link.href || link.dataset.href;
              if (!url) return;
              link.dataset.frProcessed = "ignore";
              await getLinkStyleAndParseCss(url.replace(/^http:/, "https:"), link);
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
            for (const { name, value } of node.attributes) {
              if (!["href", "rel"].includes(name)) style.setAttribute(name, value);
            }
            style.dataset.href = url;
            style.dataset.frProcessed = "link";
            parent.replaceChild(style, node);
            DEBUG("Fixed.viewport.Link:", { linkNode: style });
          }

          function fixViewportStyles() {
            qA(`style:not([data-fr-processed]):not(.darkreader)`).forEach(style => {
              if (asArray(style.attributes, attr => attr.name).Some(name => /^(?:fr|gb)-css-[0-9a-f]{8}$/.test(name))) return;
              style.dataset.frProcessed = "ignore";
              const cssText = style.textContent;
              if (!cssText || !vRegexp.test(cssText)) return;
              try {
                const updatedCssText = replaceStyle(cssText, vRegexp, def.var.curScale);
                style.textContent = updatedCssText;
                style.dataset.frProcessed = "style";
                style.type = "text/css";
                DEBUG("Fixed.viewport.Style:", { style });
              } catch (e) {
                style.dataset.frProcessed = "error";
                ERROR(`fixViewportStyles:`, e.message);
              }
            });
          }

          function replaceStyle(txt, reg, scale) {
            return txt.replace(reg, function (_, num, unit) {
              return String((num / scale).toFixed(6)) + unit;
            });
          }

          function replaceBaseURL(txt, baseURL) {
            return txt.replace(uRegexp, (match, url) => {
              const path = url.replace(/[`'"]/g, "");
              const fullPath = new URL(path, baseURL).href;
              return match.replace(path, fullPath);
            });
          }
        }

        /* CSS_STYLE_PROCESSING_MAIN_THREAD */

        function monitorMainStyleProcess([Permission, correctViewport]) {
          if (!IS_INTERNALSTYLE_ALLOWED || !(CUR_WINDOW_TOP || IS_CURRENTSITE_ALLOWED)) return;
          const deBounceViewport = createDeBounce({ fn: correctViewport, delay: 5e2 });
          const checkStyleNode = node => {
            const nodeName = getNodeName(node);
            if (nodeName === "style") return node.id !== def.id.rndStyle && !node.classList?.contains("darkreader");
            if (nodeName === "link") return node.getAttribute("rel")?.includes("stylesheet") && node.getAttribute("href");
          };
          const handleAddedNodesMutation = (addedNodes, mainStyle) => {
            if (!mainStyle) return insertMainStyleElement();
            Permission && addedNodes.forEach(node => deBounceViewport.setImmediate(checkStyleNode(node)) && deBounceViewport());
          };
          const handleRemovedNodesMutation = removedNodes => {
            for (const node of removedNodes) {
              if (getNodeName(node) !== "style" || node.id !== def.id.rndStyle || node.dataset.frRemoved) continue;
              if (insertMainStyleElement({ shouldNotify: false })) return INFO(`%c[MO]${IN_FRAMES}[REINSERT]:%c<style> success!`, leftStyle("#a52a2a"), rightStyle("#a52a2a"));
            }
          };
          const handleChildListMutation = (target, addedNodes, removedNodes, mainStyle) => {
            if (target === document.documentElement) return updateFlagAtRootElement(target);
            if (target !== document.head) return;
            handleRemovedNodesMutation(removedNodes);
            handleAddedNodesMutation(addedNodes, mainStyle);
          };
          const updateStyleWithNewRootID = (styleNode, id) => {
            const cssText = (styleNode?.textContent ?? tStyle).replace(/\b#\w+\b/g, `#${id}`);
            const isInserted = insertStyle({ target: document.head, id: def.id.rndStyle, cssText, overwrite: true });
            if (isInserted) INFO(`%c[MO]${IN_FRAMES}[HTML.ID]:%c#${id}`, leftStyle("#1e90ff"), rightStyle("#1e90ff"));
          };
          const handleAttributesMutation = (target, oldValue, mainStyle) => {
            if (target !== document.documentElement) return;
            const newID = target.id || (target.id = def.const.root);
            if (oldValue !== newID) updateStyleWithNewRootID(mainStyle, newID);
          };
          const handleStyleProcess = (mutation, mainStyle) => {
            const { target, type, addedNodes, removedNodes, oldValue } = mutation;
            if (type === "childList") handleChildListMutation(target, addedNodes, removedNodes, mainStyle);
            else if (type === "attributes") handleAttributesMutation(target, oldValue, mainStyle);
          };
          const mainStyleProcess = mutations => {
            const mainStyle = getMainStyleElements({ primaryElement: true });
            mutations.forEach(mutation => void handleStyleProcess(mutation, mainStyle));
          };
          const styleObserve = new MutationObserver(mainStyleProcess);
          getHeadElement.getNodeAndObserve().then(insertMainStyleElement); // Fit::Greasemonkey & Userscripts & Loading-delay.
          styleObserve.observe(document, { childList: true, subtree: true, attributeOldValue: true, attributeFilter: ["id"] });
        }

        function monitorBodyIframeProcess() {
          if (!IS_CURRENTSITE_ALLOWED) return;
          const handleIframeProcess = mutation => {
            const [{ target, type, addedNodes }, nodeArray] = [mutation, []];
            if (type === "childList" && addedNodes.length > 0) nodeArray.push(...qA(`iframe:not([${def.const.iframeAttrName}])`, target));
            else if (type === "attributes" && getNodeName(target) === "iframe" && (target.src || target.srcdoc)) nodeArray.push(target);
            if (nodeArray.length > 0) applyStyleToIframes({ condition: type, nodeArray });
          };
          const praseIframes = ({ mutations }) => mutations.forEach(handleIframeProcess);
          const config = { childList: true, subtree: true, attributeFilter: ["src", "srcdoc", "style"] };
          getBodyElement.getNodeAndObserve({ callback: praseIframes, config });
        }

        /* FONT_RENDERING_MAIN_PROCESS */

        void (async function (initMenus) {
          if (CUR_WINDOW_TOP) {
            if (await initializeConfigData(reconstruct.flag)) showUpdateInfo(def.var.versionStatus);
            await getCurrentFontName(CONST_VALUES.fontFace, selectedFont, defaultFont);
            showSystemInfo.system();
            showSystemInfo.compat(IS_CHEAT_UA);
            insertMenus(initMenus());
            insertHotkey();
          }
          monitorMainStyleProcess(correctViewportUnits());
          correctBoldStrokeProcess()();
          monitorBodyIframeProcess();
          correctFontScaleOffset();
          overrideCanvasFont(selectedFont);
          addLoadEvents.addFn(applyStyleToIframes, { condition: "DOMLoaded" });
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
          const configure = await GMgetValue(CONFIGURE);
          if (!configure) {
            saveData(CONFIGURE, INITIAL_CONFIGURE);
            _config_data_ = INITIAL_CONFIGURE;
          } else {
            try {
              config = JSON.parse(decrypt(configure));
            } catch (e) {
              ERROR("config.JSON.parse:", e.message);
              def.var.structureError = true;
              config = immutObj;
            }
            _config_data_ = { ...INITIAL_CONFIGURE, ...config };
          }
          def.var.versionStatus = _config_data_.curVersion;
          return _config_data_;
        },
        async () => {
          let [monoSiteRules, monoFontList, monoFeature] = await Promise.all([MONORULES, MONOFONTS, MONOFEATS].map(key => GMgetValue(key)));
          try {
            monoSiteRules = monoSiteRules ? [...JSON.parse(decrypt(monoSiteRules))] : [];
          } catch (e) {
            ERROR("Monospaced_siteRules.Array.parse:", e.message);
            monoSiteRules = [];
          }
          try {
            monoFontList = monoFontList ? convertHtmlToText(JSON.parse(decrypt(monoFontList))) : "";
          } catch (e) {
            ERROR("Monospaced_Fontlist.String.parse:", e.message);
            monoFontList = "";
          }
          try {
            monoFeature = monoFeature ? convertHtmlToText(JSON.parse(decrypt(monoFeature))) : "";
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
            const exSiteSave = await GMgetValue(EXCLUDESITES);
            if (exSiteSave) exSite = JSON.parse(decrypt(exSiteSave));
            else saveData(EXCLUDESITES, defaultExSite);
          } catch (e) {
            ERROR("exSite.JSON.parse:", e.message);
            def.var.structureError = true;
          }
          return { exSite: asArray(exSite), exSitesIndex: updateExsitesIndex(exSite) };
        },
        async (isFontsize, isFixViewport) => {
          let domainValue, domainValues, domainValueIndex, fontValue;
          const defaults = { ...INITIAL_VALUES, isEditorBlock: matchEditorialSites(INITIAL_REMARKS.editorialSiteList) };
          try {
            const [savedDomains, savedFonts] = await Promise.all([DOMAINFONTSET, FONTSET].map(key => GMgetValue(key)));
            if (savedDomains) {
              domainValues = [...JSON.parse(decrypt(savedDomains))];
              domainValueIndex = updateDomainsIndex(domainValues);
              def.var.domainCount = domainValues.length;
              def.var.domainIndex = domainValueIndex;
              domainValue = ~domainValueIndex ? { ...defaults, ...domainValues[domainValueIndex] } : null;
            } else saveData(DOMAINFONTSET, []);
            if (savedFonts) fontValue = { ...defaults, ...JSON.parse(decrypt(savedFonts)) };
            else saveData(FONTSET, INITIAL_VALUES);
            const currentValue = domainValue || fontValue || defaults;
            return {
              fontSelect: convertHtmlToText(currentValue.fontSelect),
              fontFace: Boolean(currentValue.fontFace),
              fontSmooth: Boolean(currentValue.fontSmooth),
              fontSize: isFontsize && !currentValue.isEditorBlock ? Number(currentValue.fontSize) : defaults.fontSize,
              fixViewport: isFontsize && isFixViewport && !currentValue.isEditorBlock && Boolean(currentValue.fixViewport),
              fontStroke: Number(currentValue.fontStroke) || 0,
              fixStroke: Boolean(IS_CAUSED_BOLDSTROKEERROR && currentValue.fontStroke && currentValue.fixStroke),
              lazyload: Boolean(currentValue.lazyload && currentValue.fixStroke),
              fontShadow: Number(currentValue.fontShadow) || 0,
              fixShadow: Boolean(IS_CAUSED_BOLDSHADOWERROR && currentValue.fixStroke && currentValue.fontShadow && currentValue.fixShadow),
              renderCanvas: !IS_GREASEMONKEY && currentValue.fontFace && Boolean(currentValue.renderCanvas),
              shadowColor: convertHtmlToText(currentValue.shadowColor) || defaults.shadowColor,
              fontCSS: convertHtmlToText(currentValue.fontCSS) || defaults.fontCSS,
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
          const defaultScaleRule = { ".smzdm.com": { Element: ["clientWidth"] }, "live.bilibili.com": { HTMLElement: ["offsetHeight"] }, "www.ithome.com": { Element: ["scrollHeight"] } };
          try {
            const storedFontScaleDef = await GMgetValue(FONTSCALE);
            if (!storedFontScaleDef) return defaultScaleRule;
            const fontScaleDefRule = JSON.parse(decrypt(storedFontScaleDef));
            if (getObjectType(fontScaleDefRule) === "[object Object]" && Object.keys(fontScaleDefRule).length) return fontScaleDefRule;
          } catch (e) {
            ERROR("fontScaleDef.JSON.parse:", e.message);
          }
          saveData(FONTSCALE, defaultScaleRule);
          return defaultScaleRule;
        },
        async () => {
          const defaultFonts = `Arial,Helvetica,Helvetica Neue,Verdana,Georgia,Tahoma,Noto Sans,Open Sans,Segoe UI,Roboto,RobotoDraft,Ubuntu,SimSun,NSimSun,SimHei,FangSong,KaiTi,MingLiU,PMingLiU,PingFangSC-Regular,PingFangSC-Medium,PingFangSC-Semibold,PingFangHK-Regular,PingFangHK-Medium,Microsoft YaHei,SF Pro SC,HanHei SC,{宋体},{楷体},{仿宋},{黑体},{微软雅黑},{微軟正黑體}`;
          const defaultFontRule = defaultFonts.split(",").sort();
          try {
            const fontOverrideDef = await GMgetValue(FONTOVERRIDE);
            const fontOverride = fontOverrideDef ? JSON.parse(decrypt(fontOverrideDef)) : defaultFontRule;
            if (Array.isArray(fontOverride) && fontOverride.length > 0) return fontOverride;
          } catch (e) {
            ERROR("fontOverrideDef.JSON.parse:", e.message);
          }
          saveData(FONTOVERRIDE, defaultFontRule);
          return defaultFontRule;
        },
        async () => {
          const customProperty = await GMgetValue(CUSTOMPROPERTY);
          try {
            const property = customProperty ? JSON.parse(decrypt(customProperty)) : immutObj;
            return { fontFeature: convertHtmlToText(property.feature), fontVariant: convertHtmlToText(property.variant) };
          } catch (e) {
            return { fontFeature: null, fontVariant: null };
          }
        }
      );
    })(createTrustedTypePolicy(), safeWindow.JSON.parse && safeWindow.JSON.stringify ? safeWindow.JSON : global.JSON);
  },
  (array => {
    const defineMethod = (property, methodFunction) => {
      if (Reflect.getOwnPropertyDescriptor(array, property)) return;
      Object.defineProperty(array, property, { value: methodFunction, writable: false, configurable: false, enumerable: false });
    };
    const arrayMethods = {
      Remove: function (value) {
        const index = this.indexOf(value);
        return index !== -1 ? this.splice(index, 1).length : 0;
      },
      Some: function (callback, thisArg = this) {
        for (let i = 0; i < this.length; i++) {
          if (callback.call(thisArg, this[i], i, this)) return true;
        }
      },
      Find: function (callback, thisArg = this) {
        for (let i = 0; i < this.length; i++) {
          if (callback.call(thisArg, this[i], i, this)) return this[i];
        }
      },
      FindIndex: function (callback, thisArg = this) {
        for (let i = 0; i < this.length; i++) {
          if (callback.call(thisArg, this[i], i, this)) return i;
        }
        return -1;
      },
    };
    return { defineMethod, arrayMethods, object: Object.create(null) };
  })(Array.prototype),
  (() => ({
    oT: any => Object.prototype.toString.call(any),
    iO: Object.seal(Object.create(null)),
    aF: Array.from.bind(Array),
    gS: (testKey => {
      const testStorage = storageType => {
        try {
          storageType.setItem(testKey, testKey);
          storageType.removeItem(testKey);
          return storageType;
        } catch (e) {
          return null;
        }
      };
      return { local: testStorage(localStorage), session: testStorage(sessionStorage) };
    })("__fr_storage_test__"),
  }))()
);
