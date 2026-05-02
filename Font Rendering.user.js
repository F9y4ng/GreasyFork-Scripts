// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字型渲染（自用程式碼）
// @name:en            Font Rendering (Customized)
// @name:ko            글꼴 렌더링 (자체 사용 스크립트)
// @name:ja            フォントのレンダリング
// @version            2026.05.02.1
// @author             F9y4ng
// @description        无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-CN  无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑”字体，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。
// @description:zh-TW  無需安裝MacType，最佳化瀏覽器字型渲染效果，讓每個頁面的字型變得更有質感。預設使用“微軟雅黑”字型，也可根據喜好自定義其他字型使用。程式碼針對瀏覽器字型渲染提供了字型重寫、字型平滑、字型縮放、字型描邊、字型陰影、對特殊樣式元素的過濾和許可、自定義等寬字型等高階功能。程式碼支援全域性渲染與個性化渲染功能，可透過“單擊程式碼管理器圖示”或“使用快捷鍵”撥出配置介面進行引數配置。程式碼已相容絕大部分主流瀏覽器及主流指令碼管理器，且相容常用的油猴程式碼和瀏覽器擴充套件。
// @description:en     Enhance browser’s font rendering without installing MacType. This script offers a high-quality, customizable experience with ‘Microsoft YaHei’ font by default. It provides advanced features such as font rewriting, smoothing, scaling, stroking, shadowing, selective element handling and more. Designed for both general and personalized rendering, compatible with popular browsers, script managers & extensions. Configure via the script manager icon or keyboard shortcuts.
// @description:ko     이 스크립트는 MacType을 설치하지 않고도 브라우저의 글꼴 렌더링을 최적화하여 각 페이지의 글꼴을 더 질감 있게 만듭니다. 기본적으로 "Microsoft YaHei"를 사용하며, 사용자의 취향에 따라 다른 글꼴을 사용자 정의할 수 있습니다. 스크립트는 글꼴 재작성, 스무딩, 스케일링, 아웃라인, 그림자, 특수 스타일 요소 필터링 등 고급 기능을 제공합니다. 스크립트 관리자 아이콘을 클릭하거나 단축키를 사용하여 설정 화면을 열 수 있습니다. 대부분의 주요 브라우저와 스크립트 관리자, 일반적인 확장 프로그램과 호환됩니다.
// @description:ja     このスクリプトは、MacTypeをインストールせずにブラウザのフォントレンダリングを最適化し、各ページのフォントをより質感のあるものにします。デフォルトでは「Microsoft YaHei」を使用し、好みに応じて他のフォントをカスタマイズできます。スクリプトは、フォントの書き換え、スムージング、スケーリング、アウトライン、シャドウ、特殊スタイル要素のフィルタリングなどの高度な機能を提供します。スクリプトマネージャのアイコンをクリックするか、ショートカットを使用して設定画面を呼び出すことができます。ほとんどの主流のブラウザやスクリプトマネージャ、一般的な拡張機能と互換性があります。
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFtklEQVR4nO1WW0yURxSe1rQ1aVMbH9ukTZvG9qXxiUbTF/CCgnLRBVEQIgpdVigoCLtcRC5WvC0iN0EQ0K0uVRZQELRAAS0spIq0CHW3ihdUWFh2/xm0aXrxa2aUBQoGVmv70km+ZOfMOXO+c/acMz8h/69p1sjIiCOltIlS+lCSJEt/f3/l4ODgPPJvLMaYF6X09/v3TaiqvIi68+2wWKwYGhqiNTU1Di/UuSRJcxlj5ms9vVjtEo/ItZkI8dqHTb5pGBoahsFguEoIee2FEWCMJTLGsEV+EOkbT6Ahvk0g0icLR/KqwM+ys7ODX4hzALMlSRr8sdMI2fLtqI/X2wjoohrgsSxOZKGrq+syIWS2xWKZwxiLZYxVWyyWaqvVus1kMr3xzAQYY5/zCBNjCrE3UGNzPorwNRk4pW0ApfSRRqORM8auc32j8TZ6b9wR2RkYGLjV3Nz8/rNE/zJjzHDjeh88lqhwLrZFOM0PKYcusl78Ph5eCx+PJEgShSRJj0ymISg2qbHSSYkVi2KwRXEQZrMFPT09bYSQV+yNfhWPQL2nFDv8C2xRr3VNgnJdjm0ftGo3ztfoRbRpKV8h2GM36uJaURffioCVXyInQyfOMjMzA+wl0NLfPwi3pSqciWkWzoo2n8F6WSrclqhQq7woZAWKCgT57cG9eya4OEXbssNxIqIGbouVGB6yoLOzs33G3cIY+4yzLjpchZhx0YZ5pUOrqUNCdAHSNhyzyX1XJiMi9CAUq/ZNqpMN7rtQXHhW/EXJycluMyJAKa2wDFtF3596ElFdbCvWLNsO2fIEgTBZus1JxqZSOC2MgCbsrNiXRzXgTHSTLUOyFQmcAFpbW88TQmZN53wepfRP3akmhHqpJ0U0Fcoi6xHplWXbR6zJQKzvobG6cdmBSt0FWK3W30JDQxdORyCfUgq/1Sk4+kX1jAgcDqmw1UlVdJOoEVEnqu+E7MBGLQK8U0Ux1tfXf00IeWlK52az+U1K6S+NDZcQ6LHL5iA3pAzr3VOx3mMiAtx3QhNejcOKcptuin8R1Lu1SIotwp4ns4MPMM+lcWhqvAyz2Tzi7Oz88dOKz4OzjAnPRVbwSdulfm4pOF/bhp+NtyeAt5hi9X5UbPvWpuu5JA7uzrGie3jqR+WpAcViRvD7T58+nTclAUmS1j2e+5nIlZcJw+zgk+Lh4fK+vr673d3dXUaj8RrfNzZcxmrn+AkjunJbI3RR9QKV0Y02+TeqFqx0isGVDgP6+/uH5s+f/84kAhaL5T1Jkv5o13fBfakK/m6pohOudFzjBfSro6OjnBDyoV6vTxBEFZnY4Tc2pKZD7LpDUG49JILRarWpU2bBYDCkcQWTyYyrXdfFY8N7uLCwMJ8Q8smTQv2pp/smXJ2icU71eCCdCK/FZpkaCtn+CeCy0VauimmCi2M0bly/g97e3puEkDlTkigrK1N0dHS0GY1Gg16vb5bL5fGEkE959T548GA+J7gr6RiivMdaT+65D6rIXBTmnZ6ArWFZCPfOGHvAvDOg3l0qsqBQKDyf3o+EvE4I4a/YB+OZUkpduHFoUDr2BR4Xl2q3nIProhjcuzsgLh4P/iryqPms4LppAUcRGZYlzhITE5XE3kUpnceNK8suwG2REuGyA6LF8rMrJzkfRfqeUqHDdd0Wq1BT3SLkrq6uG+xybrVa3+JP9OjFLRd/QH5OJZoaLz3V+Sj4bDlyuArft3fbZH19fbfUavVce6IP5Ib52SeREHXguVCUVy5IlJSU7LSHQAQ38veOQ+1eX7Tl+jwTzqT5IcgvURAoLi4uIIS8bDeBS/k+uK2VPRP0OWv/TmDWjAgwxoK40Q5lDta6K58LOxPyR7+os2dM4OHDh28PDw/T6QpupjCZTJKDg4N9naDRaD4qLS3N1el0J54HJSUlhQsWLNhECHnXLgLj1qv/AKb+Lvgv1l/c+5HQxwRN2QAAAABJRU5ErkJggg==
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
// @require            https://f9y4ng.github.io/GreasyFork-Scripts/lib/frColorPicker.js#sha256-DgCnp+QUiODm5aPoubP4bdRzMYJH+c/eZAF94HCLdJw=
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
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_unregisterMenuCommand
// @compatible         Edge version≥90 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome version≥90 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox version≥84 (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera version≥78 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari version≥15.4 (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @copyright          2020-2026, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (ctx, uctx, sctx, fontRendering, arrayProxy, customFns) {
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

  const toolkit = {
    RC2: { flag: "5295b9589c42a644ca9304163cd8", date: "2025.04.05" },
    debugging: IS_OPEN_DEBUG,
    safeSandbox: {
      atob: sctx.atob.bind(sctx),
      btoa: sctx.btoa.bind(sctx),
      alert: ctx.alert.bind(ctx),
      prompt: ctx.prompt.bind(ctx),
      confirm: ctx.confirm.bind(ctx),
      setTimeout: ctx.setTimeout.bind(uctx),
      requestAnimationFrame: ctx.requestAnimationFrame.bind(uctx),
      cancelAnimationFrame: ctx.cancelAnimationFrame.bind(uctx),
      console: sctx.Object.assign(customFns.oC(), ctx.console),
    },
    safeArray: customFns.sP(sctx.Object, sctx.Array),
    safeObject: customFns.sP(sctx.Object, sctx.Object),
    safeJSON: sctx.JSON.parse ? sctx.JSON : ctx.JSON.parse ? ctx.JSON : JSON.parse ? JSON : uctx.JSON,
    info: typeof GM_info !== "undefined" ? GM_info : typeof GM !== "undefined" && GM.info ? GM.info : { script: {} },
  };
  const wrappedFrom = toolkit.safeArray.from ?? ctx.Array.from ?? uctx.Array.from;
  const orginalFns = { oS: sctx.Object.prototype.toString, aF: (...af) => wrappedFrom(...af), aS: (...as) => arrayProxy(wrappedFrom(...as)) };
  typeof ctx.navigation === "undefined" && ["pushState", "replaceState"].forEach(m => (ctx.history[m] = customFns.eH(m)));
  fontRendering(ctx, uctx, toolkit, { ...orginalFns, ...customFns, cS: customFns.mS.filter(isNaN) });
})(
  typeof window !== "undefined" ? window : this,
  typeof unsafeWindow !== "undefined" ? unsafeWindow : this,
  ((originalWindow, iframe) => {
    if (typeof GM_addElement === "undefined" || document.contentType === "application/pdf") return originalWindow;
    try {
      const { contentWindow } = (iframe = GM_addElement("iframe", { id: "𝐬𝐚𝐟𝐞.𝐰𝐢𝐧𝐝𝐨𝐰", style: "display:none", width: 0, height: 0 }));
      return !originalWindow.wrappedJSObject && iframe?.remove(), contentWindow ?? originalWindow;
    } catch (_) {
      return iframe?.remove(), originalWindow;
    }
  })(typeof window !== "undefined" ? window : this, null),
  function (global, GMunsafeWindow, secureVars, customFuntions) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { safeArray, safeObject, safeJSON, safeSandbox, debugging, info: GMinfo, RC2 } = secureVars;
    const { atob, btoa, alert, prompt, confirm, console, setTimeout, requestAnimationFrame, cancelAnimationFrame } = safeSandbox;
    const { mS, cS, aF: arrayFrom, aS: asArray, oS: getObjectType, lS: localStorage, sS: sessionStorage, oC: object } = customFuntions;
    const GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion ?? "unknown";
    const GMscriptHandler = GMinfo.scriptHandler;
    const GMsetValue = gmSelector("setValue");
    const GMgetValue = gmSelector("getValue");
    const GMdeleteValue = gmSelector("deleteValue");
    const GMlistValues = gmSelector("listValues");
    const GMopenInTab = gmSelector("openInTab");
    const GMaddElement = gmSelector("addElement");
    const GMregisterMenuCommand = gmSelector("registerMenuCommand");
    const GMunregisterMenuCommand = gmSelector("unregisterMenuCommand");
    const GMcontextMode = gmSelector("contextMode");

    /* INITIALIZE_DEBUG_FUNCTIONS */

    const IS_CHN = checkLocalChineseLanguage();
    const IS_DEBUG = setDebuggerMode() || debugging;
    const DEBUG = IS_DEBUG ? __console.bind(console, "log") : () => {};
    const INFO = IS_DEBUG ? __console.bind(console, "info") : () => {};
    const ERROR = IS_DEBUG ? __console.bind(console, "error") : () => {};
    const COUNT = IS_DEBUG ? __console.bind(console, "count") : () => {};

    /* INITIALIZE_COMMON_CONSTANTS */

    const { h: CUR_HOST, hR: CUR_HREF, hN: CUR_HOST_NAME, pN: CUR_HOST_PATH, pT: CUR_PROTOCOL, tH: TOP_HOST, iT: CUR_WINDOW_TOP, fS: IN_FRAMES } = getLocationInfo();
    const def = {
      count: { clickTimer: 0, event: object() },
      array: { exps: [], scaleMatrix: [], props: { window: [], element: [], html: [] }, values: new Set(), sources: new Set() },
      const: {
        seed: generateRandomString(6, "mix"),
        root: generateRandomString(6, "char"),
        raf: Symbol.for(`𐠱${generateRandomString(10, "date")}𐠔`),
        caf: Symbol.for(`𐠱${generateRandomString(10, "date")}𐠲`),
        dialog: `fr-dialog-${generateRandomString(8, "hex")}`,
        cssAttrName: `fr-css-${generateRandomString(8, "hex")}`,
        boldAttrName: `fr-bold-${generateRandomString(8, "date")}`,
        iframeAttrName: `fr-iframe-${generateRandomString(8, "hex")}`,
        attachShadow: Element.prototype.attachShadow,
        getClientRects: Element.prototype.getClientRects,
        getBoundingClientRect: Element.prototype.getBoundingClientRect,
        fillText: CanvasRenderingContext2D.prototype.fillText,
        strokeText: CanvasRenderingContext2D.prototype.strokeText,
        getScreenCTM: SVGGraphicsElement.prototype.getScreenCTM,
        stopImmediatePropagation: Event.prototype.stopImmediatePropagation,
      },
      static: { once: "fr-init-once", conflict: "fr-callback-conflict", viewport: "data-fr-viewport", navinfo: "__Navigation#INFO__" },
      var: {
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2026.05.02.0",
        scriptName: getMetaValue(`name:${getLanguages()}`) ?? decrypt("Rm9udCUyMFJlbmRlcmluZyUyMChDdXN0b21pemVkKQ=="),
        scriptAuthor: getMetaValue("author") ?? GMinfo.script.author ?? decrypt("Rjl5NG5n"),
      },
      url: {
        fontlistImg: decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaW1hZ2VzJTJGZm9udGxpc3QuZ2lm"),
        loadingImg: decrypt("aHR0cHMlM0ElMkYlMkZwLnNkYTEuZGV2JTJGMjklMkZlMzIyM2U3YzVlZjI0ZTlhOGZhZDM5NTc3ZDVlMGQ4MCUyRjAzOGRkZTQ1OGY5YTg3NGE4MDEyMTYwZjc0MTdmNmUuZ2lm"),
        Anton: decrypt("aHR0cHMlM0ElMkYlMkZmb250cy5nc3RhdGljLmNvbSUyRnMlMkZhbnRvbiUyRnYyNSUyRjFQdGdnODdMUk95QW0zS3otQzgud29mZjI="),
        predefined: decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGcmVuZGVyaW5nUnVsZXM="),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepageURL") ?? GMinfo.script.homepage ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
        prohibit: "challenges.cloudflare.com",
      },
      class: {
        guide: generateRandomString(7, "mix"),
        title: generateRandomString(8, "char"),
        rotation: generateRandomString(7, "char"),
        emoji: generateRandomString(7, "mix"),
        main: generateRandomString(8, "char"),
        fontList: generateRandomString(8, "char"),
        spanlabel: generateRandomString(6, "mix"),
        label: generateRandomString(6, "mix"),
        checkbox: generateRandomString(8, "char"),
        flex: generateRandomString(8, "char"),
        tooltip: generateRandomString(8, "char"),
        tooltiptext: generateRandomString(8, "char"),
        ps1: generateRandomString(6, "mix"),
        ps2: generateRandomString(6, "mix"),
        ps3: generateRandomString(6, "mix"),
        ps4: generateRandomString(6, "mix"),
        ps5: generateRandomString(6, "mix"),
        slider: generateRandomString(8, "char"),
        frColorPicker: generateRandomString(9, "char"),
        readonly: generateRandomString(8, "mix"),
        notreadonly: generateRandomString(8, "mix"),
        reset: generateRandomString(7, "mix"),
        cancel: generateRandomString(7, "mix"),
        submit: generateRandomString(7, "mix"),
        selector: generateRandomString(8, "char"),
        selectFontID: generateRandomString(8, "char"),
        close: generateRandomString(7, "char"),
        db: generateRandomString(9, "mix"),
        dbbc: generateRandomString(8, "mix"),
        dbb: generateRandomString(8, "char"),
        dbm: generateRandomString(8, "char"),
        dbt: generateRandomString(8, "char"),
        dbbt: generateRandomString(7, "mix"),
        dbbf: generateRandomString(7, "mix"),
        dbbn: generateRandomString(7, "mix"),
        switcher: generateRandomString(6, "mix"),
        anim: generateRandomString(6, "mix"),
        range: generateRandomString(9, "char"),
        rangeProgress: generateRandomString(9, "mix"),
      },
      id: {
        rndStyle: generateRandomString(12, "char"),
        configure: generateRandomString(12, "char"),
        dialogbox: generateRandomString(12, "char"),
        dialogStyle: generateRandomString(10, "char"),
        container: generateRandomString(10, "char"),
        field: generateRandomString(10, "mix"),
        fontList: generateRandomString(8, "mix"),
        fontsetList: generateRandomString(8, "mix"),
        fontFace: generateRandomString(8, "mix"),
        fontSmooth: generateRandomString(8, "mix"),
        fontStroke: generateRandomString(8, "mix"),
        fontShadow: generateRandomString(8, "mix"),
        shadowColor: generateRandomString(8, "mix"),
        fontCss: generateRandomString(8, "mix"),
        fontEx: generateRandomString(8, "mix"),
        submit: generateRandomString(8, "char"),
        fface: generateRandomString(8, "mix"),
        smooth: generateRandomString(8, "mix"),
        fontSize: generateRandomString(8, "mix"),
        fontScale: generateRandomString(8, "mix"),
        scale: generateRandomString(8, "mix"),
        fviewport: generateRandomString(8, "char"),
        fixViewport: generateRandomString(8, "mix"),
        strokeSize: generateRandomString(8, "mix"),
        stroke: generateRandomString(8, "mix"),
        fstroke: generateRandomString(8, "mix"),
        fshadow: generateRandomString(8, "mix"),
        fixStroke: generateRandomString(8, "mix"),
        rdCanvas: generateRandomString(8, "char"),
        renderCanvas: generateRandomString(8, "mix"),
        lazyload: generateRandomString(8, "mix"),
        fixShadow: generateRandomString(8, "mix"),
        shadowSize: generateRandomString(8, "mix"),
        shadow: generateRandomString(8, "mix"),
        color: generateRandomString(8, "mix"),
        cssinclued: generateRandomString(8, "mix"),
        cssexclude: generateRandomString(8, "mix"),
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
        tfiles: generateRandomString(6, "mix"),
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
        pdr: generateRandomString(6, "char"),
        pdrr: generateRandomString(7, "mix"),
        flc: generateRandomString(6, "char"),
        flcid: generateRandomString(7, "mix"),
      },
    };

    if (checkRedundantScript(GMunsafeWindow)) return;

    /* INITIALIZE_SETTIMEOUT_AND_SETINTERVAL_FUNCTION_CLASSES */

    class RAF {
      constructor(context) {
        safeObject.assign(this, { context, timerMap: { timeout: {}, interval: {} } });
        GMunsafeWindow[def.const.raf] || safeObject.assign(GMunsafeWindow, { [def.const.raf]: requestAnimationFrame, [def.const.caf]: cancelAnimationFrame });
        ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach(m => (this[m] = this[m].bind(this)));
      }
      _ticking(fn, type, interval, ...args) {
        const parsedInterval = Number(interval) || 0;
        let lastTime = performance.now();
        const timerSymbol = Symbol(type);
        const step = (currentTime = performance.now()) => {
          const elapsed = currentTime - lastTime;
          if (elapsed < parsedInterval) return this._setTimerMap(timerSymbol, type, step);
          type === "interval" ? (lastTime = currentTime - (elapsed % parsedInterval)) && this._setTimerMap(timerSymbol, type, step) : this.clearTimeout(timerSymbol);
          if (typeof fn === "function") fn.apply(this.context, args);
        };
        this._setTimerMap(timerSymbol, type, step);
        return timerSymbol;
      }
      _setTimerMap(timerSymbol, type, step) {
        this.timerMap[type][timerSymbol] = GMunsafeWindow[def.const.raf](step);
      }
      _clearTimerMap(timerSymbol, type) {
        const timerId = this.timerMap[type][timerSymbol];
        if (typeof timerId !== "undefined" && delete this.timerMap[type][timerSymbol]) GMunsafeWindow[def.const.caf](timerId);
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

    /* NODE_OBSERVER */

    const rAF = new RAF(global);
    class NodeObserver {
      constructor(T = document) {
        const checkTarget = T && typeof T === "string" ? () => qS(T) : T && T.nodeType && T.getRootNode() === T ? () => T : () => new Error("Target locator must be String or RootNode.");
        safeObject.assign(this, { checkTarget, callbacks: new LRUCache(), targetNode: null, initialObserver: null, nodeObserver: null, _waitPromise: null });
      }
      _waitForTarget(timeout) {
        if ((this.targetNode = this.checkTarget())) return Promise.resolve(this.targetNode);
        if (this._waitPromise) return this._waitPromise;
        this._waitPromise = new Promise((resolve, reject) => {
          const timer = rAF.setTimeout(() => {
            this._cleanupInitialObserver();
            reject(new ReferenceError(`Target node not found within ${timeout / 1e3} seconds.`));
          }, timeout);
          this.initialObserver = new MutationObserver(() => {
            if (!(this.targetNode = this.checkTarget())) return;
            rAF.clearTimeout(timer);
            this._cleanupInitialObserver();
            resolve(this.targetNode);
          });
          this.initialObserver.observe(document, { childList: true, subtree: true });
        });
        return this._waitPromise;
      }
      _cleanupInitialObserver() {
        if (this.initialObserver) {
          this.initialObserver.disconnect();
          this.initialObserver = null;
        }
        this._waitPromise = null;
      }
      _observeElement(node, config) {
        if (this.nodeObserver) this.nodeObserver.disconnect();
        this.nodeObserver = new MutationObserver((mutations, observer) => {
          for (const [name, callback] of this.callbacks) {
            try {
              callback({ node, mutations, observer });
            } catch (e) {
              ERROR(`${e.name} in NodeObserver callback '${name}':`, e.message);
            }
          }
        });
        this.nodeObserver.observe(node, config);
      }
      onUpdate(name, callback) {
        if (name && this.callbacks.has(name) && !callback) return this.callbacks.delete(name);
        if (name && typeof callback === "function" && this.callbacks.get(name)?.toString() !== callback.toString()) this.callbacks.set(name, callback);
      }
      async startObserver({ name, callback, config, timeout = 1e4 } = {}) {
        if (name) this.onUpdate(name, callback);
        this.config = config ?? { childList: true, subtree: true, attributes: true };
        try {
          const target = await this._waitForTarget(timeout);
          if (target.nodeType && this.callbacks.size > 0) this._observeElement(target, this.config);
          return { target, observer: this.nodeObserver };
        } catch (e) {
          ERROR(`${e.name} in NodeObserver:`, e.message);
        }
      }
    }

    /* GLOBAL_GENERAL_FUNCTIONS */

    function gmSelector(rec) {
      const gmFunctions = {
        setValue: typeof GM_setValue !== "undefined" ? GM_setValue : typeof GM !== "undefined" ? GM.setValue : localStorage?.setItem.bind(localStorage),
        getValue: typeof GM_getValue !== "undefined" ? GM_getValue : typeof GM !== "undefined" ? GM.getValue : localStorage?.getItem.bind(localStorage),
        deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : typeof GM !== "undefined" ? GM.deleteValue : localStorage?.removeItem.bind(localStorage),
        listValues: typeof GM_listValues !== "undefined" ? GM_listValues : typeof GM !== "undefined" ? GM.listValues : () => safeObject.keys(localStorage ?? {}),
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : typeof GM !== "undefined" ? GM.openInTab : global.open.bind(global),
        addElement: typeof GM_addElement !== "undefined" ? safeAddElement.bind(global) : generalAddElement.bind(global),
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : typeof GM !== "undefined" ? GM.registerMenuCommand : void 0,
        unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : void 0,
        contextMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
      };
      return gmFunctions[rec] ?? __console("warn", `Grant 'GM.${rec}' is not available.`) ?? (() => {});
    }

    function __console(action, message, ...args) {
      const consoleMethods = {
        log: ["log", "%c\u27A4%c ", "display:inline-block", ""],
        info: ["log", "%c\u27A4%c ", "display:inline-block;padding:4px 0", ""],
        error: ["error", "%c\ud83d\udea9%c ", "display:inline-block", ""],
        warn: ["warn", "%c\ud83d\udea9%c ", "display:inline-block;", ""],
        count: ["count", "\u27A4 "],
      };
      const [_, msg, consoleMethod] = [this ?? console, message ?? "", consoleMethods[action]];
      if (!consoleMethod) return _.log(msg, ...args);
      const [method, prefix, ...surfix] = consoleMethod;
      return _[method](prefix + msg, ...surfix, ...args);
    }

    class LRUCache extends Map {
      constructor(capacity = 1e2) {
        const cap = parseInt(capacity);
        super();
        this.capacity = isNaN(cap) || cap <= 0 ? 100 : cap;
      }
      get(key) {
        if (!super.has(key)) return;
        const value = super.get(key);
        super.delete(key);
        super.set(key, value);
        return value;
      }
      set(key, value) {
        if (super.has(key)) super.delete(key);
        else if (this.size >= this.capacity) super.delete(this.keys().next().value);
        return super.set(key, value);
      }
    }

    function safeAddElement(...args) {
      try {
        const isFaultyTM = GMscriptHandler === "Tampermonkey" && parseFloat(GMversion) < 5.5 && typeof args[0] !== "string" && args[0].ownerDocument !== document;
        return isFaultyTM ? generalAddElement(...args) : GM_addElement(...args);
      } catch (_) {
        return generalAddElement(...args);
      }
    }

    function generalAddElement(p, t, o) {
      try {
        typeof p === "string" && (o = t || {}) && (t = p) && (p = (/^(?:script|style|link|meta)$/i.test(t) ? document.head : document.body) || document.documentElement);
        return appendNode(p, cE(t, o));
      } catch (e) {
        ERROR(`${e.name} in GeneralAddElement:`, { ...arguments, e });
      }
    }

    function checkLocalChineseLanguage() {
      const lang = navigator.language || Intl.DateTimeFormat().resolvedOptions().locale || "en-US";
      return lang.startsWith("zh");
    }

    function qS(expr, target = document) {
      try {
        return target.querySelector(expr);
      } catch (_) {
        return null;
      }
    }

    function qA(expr, target = document) {
      try {
        return asArray(target.querySelectorAll(expr));
      } catch (_) {
        return asArray([]);
      }
    }

    function cE(nodeName, attributes) {
      const el = document.createElement(nodeName);
      if (getObjectType.call(attributes) !== "[object Object]") return el;
      for (const [key, value] of safeObject.entries(attributes)) {
        if (["class", "className"].includes(key)) safeArray.isArray(value) ? el.classList.add(...value) : el.classList.add(value);
        else if (["innerHTML", "textContent"].includes(key)) el[key] = value;
        else el.setAttribute(key, value);
      }
      return el;
    }

    function aS(target) {
      return target ? def.const.attachShadow.call(target, { mode: "closed" }) : null;
    }

    function isShadow(node) {
      return Boolean(node && node.nodeType === 11 && node.host);
    }

    function random({ range, length = 1, type = "round" }) {
      const typedArray = global.crypto.getRandomValues(new Uint32Array(Number(length) || 1));
      return arrayFrom(typedArray, a => (Math[type] ?? Math.round)((a / 0xffffffff) * (Number(range) || 10)));
    }

    function uniq(array, filterFn = Boolean, mapFn = null) {
      if (!safeArray.isArray(array)) return [];
      return arrayFrom(new Set(typeof filterFn === "function" ? array.filter(filterFn) : array), typeof mapFn === "function" ? mapFn : void 0);
    }

    function toString(value) {
      if (typeof value === "symbol") return value.description;
      return String(value);
    }

    function capitalize(string) {
      string = toString(string ?? "").toLowerCase();
      return string.replace(/^\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
    }

    function getNodeName(node) {
      return node?.nodeName.toLowerCase() ?? "";
    }

    function encrypt(string, encode = true) {
      try {
        return btoa(encode ? encodeURIComponent(toString(string)) : toString(string));
      } catch (_) {
        return "";
      }
    }

    function decrypt(string, decode = true) {
      if (typeof string !== "string") return "";
      try {
        const rst = atob(string.replace(/[^A-Za-z0-9+/=]/g, ""));
        return decode ? decodeURIComponent(rst) : rst;
      } catch (_) {
        return "";
      }
    }

    function* nodesFromChildList(children) {
      for (const child of children.flat(Infinity)) yield typeof child?.nodeType === "number" ? child : new Text(child);
    }

    function appendNode(parent, ...children) {
      if (!parent || !children.length) return;
      const asset = { fragment: document.createDocumentFragment(), value: null };
      for (const child of nodesFromChildList(children)) (asset.value = child) && asset.fragment.appendChild(child);
      return parent.appendChild(asset.fragment) && delete asset.fragment && asset.value;
    }

    function generateRandomString(length, type, p, m = mS, c = cS) {
      if (type === "date") return (p = new Date()), (p = (p.setHours(10, 20, 30, 40) * p.getDate()).toString(16)).padEnd(length, p);
      if (type === "hex" || type === "number") return (p = type === "hex" ? 16 : 10), arrayFrom(random({ range: p, length, type: "floor" }), v => v.toString(p)).join("");
      return (p = type === "mix" ? m : c), arrayFrom(random({ range: p.length, length }), (v, i) => (p === m && !i ? c[random({ range: 70 })] : p[v])).join("");
    }

    function initTrustedTypesPolicy() {
      const policyOptions = { createHTML: s => s, createScript: s => s, createScriptURL: u => u };
      if (!global.trustedTypes?.createPolicy) return policyOptions;
      const originalCreatePolicy = global.trustedTypes.createPolicy.bind(global.trustedTypes);
      const whitelist = [{ host: "bing.com", policy: "rwflyoutDefault" }];
      const policyName = global.trustedTypes.defaultPolicy?.name ?? asArray(whitelist).FindX(entry => CUR_HOST_NAME.endsWith(entry.host))?.policy ?? "default";
      const defaultPolicy = global.trustedTypes.defaultPolicy ?? originalCreatePolicy(policyName, policyOptions);
      uniq([global, GMunsafeWindow]).forEach(w => (w.trustedTypes.createPolicy = (name, options) => (name === policyName ? defaultPolicy : originalCreatePolicy(name, options))));
      return defaultPolicy;
    }

    function isAccessProhibited(href) {
      const URI = new URL(href?.replace(/^blob:/, "") || "about:blank");
      return asArray(def.url.prohibit.split("|")).SomeX(item => URI.hostname === item || URI.pathname.startsWith(item));
    }

    function checkRedundantScript(context) {
      if (!CUR_WINDOW_TOP && isAccessProhibited(CUR_HREF)) return true;
      const reportRedundanceError = () => {
        const errorText = IS_CHN
          ? `\ud83d\udea9【脚本冗余警告】发现冗余安装的脚本: "${def.var.scriptName}"，如刷新后问题依旧，请访问 ${def.url.feedback}/117 排查错误。`
          : `\ud83d\udea9 [Redundance Warning] Found Redundant Scripts: '${def.var.scriptName}', if persists after reloading, please visit ${def.url.feedback}/117 to troubleshoot.`;
        const troubleshoot = `\ufff8\ud83d\uded1 ${IS_CHN ? "发现冗余安装的脚本，点击排查！" : "Troubleshoot Redundance!"}`;
        return CUR_WINDOW_TOP && (__console("error", errorText), GMregisterMenuCommand(troubleshoot, () => GMopenInTab(`${def.url.feedback}/117`, false))), true;
      };
      const contentText = IS_CHN
        ? `警告：脚本的注入模式已设置为"content"，部分脚本功能可能受到限制，如框架页面内部分功能失效、字体缩放后无法全局修正坐标等。`
        : `Warning: The injection mode is set to "content" and some functions may be limited, such as some functions within the frame page are invalid, coordinates cannot be globally corrected after font scaling, etc.`;
      if (GMcontextMode && CUR_WINDOW_TOP) __console("warn", `${def.var.scriptName} ${contentText}`);
      if (context[def.static.once] === true || document.documentElement?.hasAttribute(def.static.once)) return reportRedundanceError();
      (context[def.static.once] = true) && safeObject.freeze(def.const) && updateFlagAtRootElement(document.documentElement);
    }

    function reload() {
      sleep(5e2, { useCachedSetTimeout: true }).then(() => global.location.reload(true));
    }

    function updateFlagAtRootElement(target) {
      if (!target) return;
      if (!target.id) target.id = def.const.root;
      if (!target.hasAttribute(def.static.once)) target.setAttribute(def.static.once, "");
    }

    async function getNavigatorInfo() {
      const creditEngine = getRealBrowserEngine(global);
      const userAgentData = await getUserAgentDataFromExtension(`${GMscriptHandler} ${GMversion}`);
      return userAgentData ? getGlobalInfoFromUAD(userAgentData) : getGlobalInfoFromUA(navigator.userAgent);

      function getGlobalInfoFromUAD(uad) {
        const os = getFullPlatformName(uad.platform);
        const mapBrandPath = ({ brand: b, version: v }) => `${/Not[^a-z]*A[^a-z]*Brand/i.test(b) ? 9 : /^(?:Chrom(?:e|ium)|Firefox|Safari)$/i.test(b) ? 5 : 1}${b}\r${v}`;
        const [brand, brandVersion] = uad.brands?.map(mapBrandPath).sort()[0]?.slice(1).split("\r") ?? [];
        const engineMap = { Chrome: "Blink", Chromium: "Blink", Firefox: "Gecko", Safari: "WebKit" };
        const mapEnginePath = ({ brand, version }) => /^(?:Chrom(?:e|ium)|Firefox|Safari)$/i.test(brand) && `${brand}\r${version}`;
        const [engine, engineVersion] = uad.brands?.map(mapEnginePath).filter(Boolean)[0]?.split("\r") ?? [brand, brandVersion];
        const engineInfo = { engine: engineMap[capitalize(engine)] ?? getEngineFromUA(navigator.userAgent), engineVersion: parseFloat(engineVersion) || 99, creditEngine };
        const browserInfo = { brand: (brand?.split(/\s/) ?? []).slice(-1)[0] ?? "Unknown", brandVersion: formatVersion(brandVersion), os };
        return { ...engineInfo, ...browserInfo, source: uad.source ?? "uad", voucher: uad.voucher ?? null };
      }

      function getGlobalInfoFromUA(ua) {
        const checkString = (str, exp = "") => new RegExp(str, exp).test(ua);
        const getVersion = (str, offset) => checkString(str) && ua.slice(ua.indexOf(str) + offset).match(/\d+(\.\d+)*/)?.[0];
        const { brand, brandVersion, engine, engineVersion } = getBrowserInfoFromUA(ua, checkString, getVersion);
        return { engine, engineVersion, creditEngine, brand, brandVersion, os: getOSInfoFromUA(checkString), source: "ua", voucher: null };
      }

      async function getUserAgentDataFromExtension(voucher) {
        const getVMUserAgentData = ({ browserName, browserVersion, os, arch }) => {
          const [architecture, bitness] = arch?.split("-") ?? [];
          let brands = [{ brand: capitalize(browserName), version: browserVersion }];
          if (parseFloat(browserVersion) < 78.0 && GMinfo.userAgent) {
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
        if ((voucher.startsWith("Tampermonkey") || voucher.startsWith("ScriptCat")) && GMinfo.userAgentData) return getTMUserAgentData(GMinfo.userAgentData);
        const getUADHighEntropyValues = async uad =>
          await uad.getHighEntropyValues(["bitness", "architecture", "fullVersionList"]).then(rst => (rst.brands = rst.fullVersionList) && delete rst.fullVersionList && rst);
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
        for (const [key, { brand, engine, verset, as }] of safeObject.entries(brandMap)) {
          if (!checkString(key)) continue;
          const versionKey = asArray(verset ?? []).FindX(k => checkString(k)) || key;
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
        return /^(?:Like Mac|Ios)$/.test(os) ? "iOS" : os === "Cros" ? "Chrome OS" : os.startsWith("Win") ? "Windows" : os.startsWith("Mac") ? "MacOS" : os === "X11" ? "Linux" : os;
      }

      function getRealBrowserEngine(w) {
        return w.GestureEvent ? "WebKit" : w.scrollByLines || w.getDefaultComputedStyle ? "Gecko" : w.webkitRequestFileSystem || w.webkitSpeechGrammar ? "Blink" : "Unknown";
      }

      function getEngineFromUA(ua) {
        return /(?:Gecko\/|Firefox\/|FxiOS)/.test(ua) ? "Gecko" : /(?:Chrom(?:e|ium)\/|CriOS)/.test(ua) ? "Blink" : /(?:AppleWebKit\/|Version\/)/.test(ua) ? "WebKit" : "Unknown";
      }

      function getUnregisteredBrandAndVersionFromUA(ua) {
        const [nameOffset, verOffset] = [ua.lastIndexOf(" ") + 1, ua.lastIndexOf("/")];
        if (nameOffset === 0 || verOffset === -1 || verOffset < nameOffset) return { b: "Unknown", bv: "0.0.0.0", ev: 99 };
        const brand = ua.slice(nameOffset, verOffset).trim();
        const brandVersion = formatVersion(ua.slice(verOffset + 1).match(/\d*\.?\d+/)?.[0]);
        const engineVersion = parseFloat(ua.match(/(?:Chrom(?:e|ium)|Firefox|Version)\/(\d+[.0-9]*)/i)?.[1] || brandVersion || 99);
        const validVersion = (!/(?:version|\/|\(|\)|;)/i.test(brand) && brandVersion) || "0.0.0.0";
        return { b: brand, bv: validVersion, ev: engineVersion };
      }

      function getOSInfoFromUA(checkString) {
        const platforms = ["like Mac", "Mac", "Android", "Debian", "Ubuntu", "Linux", "Win", "CrOS", "X11"];
        const platform = asArray(platforms).FindX(p => checkString(p, "i")) || "Unknown";
        return getFullPlatformName(platform);
      }
    }

    function getLocationInfo(tH) {
      const { host: h, href: hR, hostname: hN, pathname: pN, protocol: pT } = global.location;
      const iT = global.self === global.top;
      try {
        tH = iT ? h : global.top.location.host;
      } catch (_) {
        tH = new URL(document.referrer || global.location).host;
      }
      return { h, hR, hN, pN, pT, tH, iT, fS: iT ? "" : "[FRAMES]" };
    }

    function getMetaValue(str) {
      const queryRegexp = new RegExp(`//\\s+@${toString(str)}\\s+(.+)`);
      const metaValue = GMinfo.scriptMetaStr?.match(queryRegexp);
      return metaValue?.[1] ?? ((str = str.match(/^name:([a-zA-Z-]+)$/)) && GMinfo.script.locales?.[str[1]]?.name);
    }

    function getLanguages(lang = navigator.language) {
      const languages = new Set(["zh-CN", "zh-TW", "en", "ja", "ko"]);
      return languages.has(lang) ? lang : lang.startsWith("zh") ? "zh-TW" : "en";
    }

    function setDebuggerMode() {
      const key = decrypt("\u0052\u006a\u006c\u0035\u004e\u0047\u0035\u006e");
      const value = new URL(global.location).searchParams.get("whoami");
      return safeObject.is(key, value);
    }

    function sleep(delay, { useCachedSetTimeout, instance } = {}) {
      const timeoutFunction = useCachedSetTimeout ? setTimeout : rAF.setTimeout;
      const resolveFunction = resolve => void timeoutFunction(resolve, delay);
      const sleepPromise = new Promise(resolveFunction);
      const promiseFunction = value => sleepPromise.then(() => value);
      promiseFunction.then = sleepPromise.then.bind(sleepPromise);
      promiseFunction.catch = sleepPromise.catch.bind(sleepPromise);
      return instance ? sleepPromise : promiseFunction;
    }

    function createDeBounce({ fn, delay, once = false, immed = false }) {
      if (typeof fn !== "function" || typeof delay !== "number" || delay < 0) throw new Error("createDeBounce: Invalid arguments");
      let timeoutId;
      function debounced(...args) {
        const context = this;
        const executeFunction = () => (fn.apply(context, args), (timeoutId = once || null));
        if (timeoutId === true) return;
        if (timeoutId) rAF.clearTimeout(timeoutId);
        else if (immed && executeFunction()) return;
        timeoutId = rAF.setTimeout(executeFunction, delay);
      }
      debounced.setImmediate = immedValue => (immed = Boolean(immedValue));
      return debounced;
    }

    function safeRemoveNode(expr, scope) {
      if (!expr) return false;
      const pendingNodes = safeArray.isArray(expr) ? expr : typeof expr === "string" ? qA(expr, scope) : [1, 3, 8].includes(expr?.nodeType) ? [expr] : [];
      return pendingNodes.every(el => el.remove() || el.parentNode === null);
    }

    function stopEventPropagation(event, { prevent = false } = {}) {
      if (prevent) event.preventDefault();
      try {
        def.const.stopImmediatePropagation.call(event);
      } catch (_) {
        event.stopImmediatePropagation();
      }
    }

    function safeAddEventListener(element, type, handler, options = false) {
      const eventHandler = l => void (element.removeEventListener(type, l, options), element.addEventListener(type, l, options));
      const safeEventHandler = l => (def.count.event[String(l)] = def.count.event[String(l)] ?? l) && eventHandler(def.count.event[String(l)]);
      return handler.name ? eventHandler(handler) : safeEventHandler(handler);
    }

    function convertToUnicode(str) {
      if (typeof str !== "string") return "";
      const result = arrayFrom(str, char => `\\${("00" + char.charCodeAt(0).toString(16)).slice(-4)}`).join("");
      return result.toUpperCase();
    }

    function copyToClipboard(text, type = "text/plain") {
      try {
        navigator.clipboard.writeText(text);
      } catch (_) {
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

    void (async function (tTP, JSON, navigatorInfo) {
      const [REMOTERENDERDATA, CONFIGURE, EXCLUDESITES, FONTSET, DOMAINFONTSET] = ["_REMOTERENDERRULESDATA_", "_CONFIGURE_", "_EXCLUDE_SITES_", "_FONTS_SET_", "_DOMAINS_FONTS_SET_"];
      const [CUSTOMFONTS, CUSTOMPROPERTY, MONORULES, MONOFONTS] = ["_CUSTOM_FONTLIST_", "_CUSTOM_PROPERTY_", "_MONOSPACED_SITERULES_", "_MONOSPACED_FONTLIST_"];
      const [MONOFEATS, FONTOVERRIDE, FONTSCALE, FONTCHECKLIST, IS_DISCUZ] = ["_MONOSPACED_FEATURE_", "_FONTOVERRIDE_DEF_", "_FONTSCALE_DEF_", "_FONTCHECKLIST_", "_FR_IS_DISCUZ_"];
      const { engine, engineVersion, creditEngine, brand, os, voucher } = (navigatorInfo =
        JSON.parse(navigatorInfo || null) || (sessionStorage?.setItem(def.static.navinfo, JSON.stringify((navigatorInfo = await getNavigatorInfo()))), navigatorInfo));
      const [requestHTML, requestHEAD, requestBODY] = ["html", "head", "body"].map(prop => new NodeObserver(prop));
      const [IS_REAL_BLINK, IS_REAL_GECKO, IS_REAL_WEBKIT] = ["Blink", "Gecko", "WebKit"].map(engine => engine === creditEngine);
      const IS_CHEAT_UA = voucher === null && (engine !== creditEngine || checkBlinkCheatingUA(navigator.userAgentData));
      const [IS_GREASEMONKEY, IS_MACOS] = [["Greasemonkey", "Userscripts", "FireMonkey", "tamp", "OrangeMonkey"].includes(GMscriptHandler), os === "MacOS"];
      const [IS_CAUSED_BOLDSTROKEERROR, IS_CAUSED_BOLDSHADOWERROR] = [96, 123].map(version => compareVersion({ BLINK: version }));
      const IS_ADOPTEDSTYLESHEET_MUTABLE = "adoptedStyleSheets" in document && typeof document.adoptedStyleSheets.push === "function";

      /* CUSTOMIZE_UPDATE_PROMPT_INFORMATION */

      const UPDATE_VERSION_NOTICE = IS_CHN
        ? `<li class="${def.const.seed}.fixed">改进字体渲染粗体描边样式修正函数的性能。</li>
            <li class="${def.const.seed}.fixed">改进站点缩放设置数据规则：域名匹配可包含端口号。</li>
            <li class="${def.const.seed}.fixed">改进 iframe 框架页面跨源通信的发送模式。</li>
            <li class="${def.const.seed}.fixed">优化增强对 <i>GM_API::GM_addElement</i> 的支持。</li>
            <li class="${def.const.seed}.fixed">优化脚本核心基础函数以提升运行性能。</li>
            <li class="${def.const.seed}.fixed">修复一些已知的问题，优化代码，优化样式。</li>`
        : `<li class="${def.const.seed}.fixed">Improved performance of Bold style correction.</li>
            <li class="${def.const.seed}.fixed">Improved site scaling setting data rules: domain name matching can include port numbers.</li>
            <li class="${def.const.seed}.fixed">Improved send mode for cross-origin communication.</li>
            <li class="${def.const.seed}.fixed">Enhanced support for <i>GM_API::GM_addElement</i>.</li>
            <li class="${def.const.seed}.fixed">Optimized script core functions for performance.</li>
            <li class="${def.const.seed}.fixed">Fixed some known issues, optimized code & style.</li>`;

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
        { ch: "OPPO Sans", en: "OPPO Sans", ps: "OPPOSans" },
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

      const fontSelect = IS_REAL_WEBKIT || (!IS_CHEAT_UA && IS_MACOS) ? `'PingFang SC'` : `'Microsoft YaHei UI'`;
      const fontStroke = IS_REAL_GECKO ? 0.03 : IS_REAL_BLINK ? 0.015 : 0.05;
      const fontShadow = IS_REAL_GECKO ? 0.55 : IS_REAL_BLINK ? 0.75 : 0.45;
      const shadowColor = IS_REAL_GECKO ? "#707070DA" : IS_REAL_BLINK ? "#7C7C7CDD" : "#88888888";
      const fontCSS = `:not(i[class],head *):not(mjx-container *,.katex *):not([class*='glyph']):not([class*='symbols' i]):not([class*='icon' i]):not([class*='fa-']):not([class*='vjs-'])`;
      const fontEx = `[class*='watermark' i],.textLayer *,pre,pre *,code,code *`;
      const INITIAL_VALUES = { fontSelect, fontFace: true, fontSmooth: true, fontSize: 1.0, fixViewport: true, fontStroke, fixStroke: IS_CAUSED_BOLDSTROKEERROR };
      safeObject.assign(INITIAL_VALUES, { lazyload: false, fontShadow, fixShadow: false, renderCanvas: false, shadowColor, fontCSS, fontEx });

      /* INITIALIZE_CONFIGURE_AND_OTHERS */

      const INITIAL_FEATURES = { isBackupFunction: true, isPreview: false, isFontsize: false, isFixViewport: false, isHotkey: true, isCloseTip: false, maxPersonalSites: 1e2 };
      const INITIAL_CONFIGURE = { ...INITIAL_FEATURES, rebuild: void 0, curVersion: void 0, globalDisable: false, isCustomMono: false };
      const GUIDELINE_URL = `${def.url.feedback}/../wiki/${encodeURIComponent((getMetaValue(`name:${IS_CHN ? "zh-CN" : "en"}`) ?? GMinfo.script.name ?? "").replaceAll(" ", "-"))}`;
      const INITIAL_REMARKS = {
        fontBase: `system-ui,-apple-system,BlinkMacSystemFont,sans-serif`,
        fontEmoji: `'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Android Emoji',EmojiSymbols,'EmojiOne Mozilla','Twemoji Mozilla','Segoe UI Symbol','Noto Color Emoji Compat','Font Awesome 6 Pro','Font Awesome 5 Pro',FontAwesome,emoji,codicon,iconfont,icomoon,IcoFont,bwi-font,fontello,themify,bootstrap-icons,'Segoe Fluent Icons','Material Icons','Material Icons Extended','Material Icons Outlined','Material Icons Round','Material Icons Sharp','Material Icons Two Tone','Google Material Icons','Google Material Icons Filled','Material Symbols Outlined','Material Symbols Round','Material Symbols Rounded','Material Symbols Sharp','Google Symbols'`,
        monospacedFont: `'Operator Mono Lig','Fira Code','Source Code Pro','JetBrains Mono',Inconsolata,Monaco,'Roboto Mono','Ubuntu Mono','Anonymous Pro','Droid Sans Mono',Menlo,Consolas`,
        monospacedFeature: `"liga" 0,"tnum","zero"`,
        editorialSiteList: `addon.tencentsuite.com|developer.mozilla.org|docs.google.com|docs.qq.com|feishu.cn|fonts.google.com|github.com|github.dev|github1s.com|image.baidu.com|kdocs.cn|leetcode.cn|leetcode.com|mail.google.com|newassets.hcaptcha.com|note.youdao.com|notion.com|notion.site|notion.so|regex101.com|scriptcat.org|shimo.im|support.google.com|tool.lu|vscode.dev|weread.qq.com|wolai.com|wqxuetang.com|xiezuocat.com|youtube.com|yuque.com`,
      };

      /* INITIALIZE_SHADOWROOT_STYLE */

      const hostStyle = s => `:host(${s}){display:block!important;visibility:visible!important;opacity:1!important}`;
      const fullStyle = (b, c = "#fffafa") => `display:inline-block;background:${b};color:${c};border-radius:4px;padding:4px 8px`;
      const remarkStyle = c => `display:inline-block;color:${c};padding:4px 0;line-height:120%`;
      def.var.style = safeObject.freeze({
        firefox: `input:is([type='text'],[type='password'],[type='search'],[type='email'],[type='tel'],[type='url'],[type='number']),input:not([type]){font-family:serif!important}`,
        frDialog: `:root>dialog#${def.const.dialog}{display:block!important;visibility:visible!important;width:auto!important;height:auto!important;background:none!important;opacity:1!important;border:none!important;outline:none!important;z-index:2147483647!important}:root>dialog#${def.const.dialog}::backdrop{background:transparent!important}@font-face{font-family:Anton;font-style:normal;font-weight:400;font-display:swap;src:local("Impact"),url(${def.url.Anton}) format("woff2");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+0304,U+0308,U+0329,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}`,
        shared: `:host(fr-dialogbox),:host(fr-configure){position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;background:0 0!important;pointer-events:none!important;--fr-shared-fontfamily:${INITIAL_VALUES.fontSelect},system-ui,-apple-system,BlinkMacSystemFont,sans-serif;--fr-shared-monospace:ui-monospace,SFMono-Regular,'Operator Mono Lig','JetBrains Mono','Cascadia Code',Monaco,Menlo,Consolas,'Liberation Mono','Courier New','PingFang SC','Microsoft YaHei',monospace;--fr-shared-emoji:system-ui,-apple-system,BlinkMacSystemFont,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Android Emoji,mojiSymbol,EmojiOne Mozilla,Twemoji Mozilla,bwi-font;}.${def.const.seed}\\.disp\\:inline\\.block{display:inline-block!important}.${def.const.seed}\\.disp\\:block{display:block!important}.${def.const.seed}\\.disp\\:none{display:none!important}.${def.const.seed}\\.vis\\:visible{visibility:visible!important}.${def.const.seed}\\.vis\\:hidden{visibility:hidden!important}.${def.const.seed}\\.clr\\:8b0000{color:#8b0000!important}.${def.const.seed}\\.clr\\:cecece{color:#cecece!important}.${def.const.seed}\\.clr\\:crimson{color:#dc143c!important}.${def.const.seed}\\.fw\\:700{font-weight:700!important}.${def.const.seed}\\.opac\\:1{opacity:1!important}:is(#${def.id.container},.${def.class.db}) .${def.class.emoji}{text-shadow:1px 1px 2px #4b5b6b!important;vertical-align:2px;font:normal 400 16px/150% var(--fr-shared-emoji)!important}.${def.class.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}`,
        frDialogBox:
          `:host(#${def.id.dialogbox}){z-index:2147483647}.${def.class.db}{position:absolute;top:calc(12% + 10px);right:20px;z-index:99999;display:block;overflow:hidden;box-sizing:content-box;width:100%;max-width:420px;border:2px solid #efefef;border-radius:6px;background:#fff;box-shadow:0 0 10px 0 #0000004d;color:#444;transition:opacity .5s;pointer-events:auto;opacity:0}.${def.class.db} *{text-shadow:0 0 1.25px #3d3d3d5f!important;font-family:var(--fr-shared-fontfamily),var(--fr-shared-emoji)!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}.${def.class.db} textarea,.${def.class.db} input{background:#fefefe;color:#333}.${def.class.dbt}{display:flex;margin-top:0;padding:10px 15px;width:auto;background:#efefef;text-align:left;font-weight:700;font-size:18px!important;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center}#${def.const.seed}\\.dialog\\.close{cursor:pointer;color:gray}#${def.const.seed}\\.dialog\\.close:hover{transform:scale(1.8);color:grey}.${def.class.dbt},.${def.class.dbt} *{font-weight:700;font-size:20px!important;font-family:Candara,Times,var(--fr-shared-fontfamily)!important}.${def.class.dbm}{display:block;margin:5px;padding:10px;color:#444;text-align:left;font-weight:500;font-size:16px!important}.${def.class.dbb}{display:inline-block;box-sizing:content-box;margin:2px 1%;padding:8px 12px;min-width:12%;border-radius:4px;text-align:center;text-decoration:none!important;letter-spacing:0;font-weight:400;cursor:pointer}.${def.const.seed}\\.gradient\\.bg{background:#e7ffd9;animation:gradient 2s ease-in-out forwards}@keyframes gradient{0%{background:#e7ffd9}to{background:transparent}}.${def.class.db} .${def.class.dbt},.${def.class.db} .${def.class.dbb}{text-shadow:none!important;-webkit-text-stroke:0 transparent!important;-webkit-user-select:none;user-select:none}.${def.class.db} .${def.class.dbb}:hover{box-sizing:content-box;color:#fff;text-decoration:none!important;font-weight:700;opacity:.8}.${def.class.db} .${def.class.dbbf}:hover{box-shadow:0 0 3px #d93223!important}.${def.class.db} .${def.class.dbbf}{border:1px solid #d93223!important;border-radius:6px;background:#d93223!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbt}{border:1px solid #038c5a!important;border-radius:6px;background:#038c5a!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbt}:hover{box-shadow:0 0 3px #038c5a!important}` +
          `.${def.class.db} .${def.class.dbbn}{border:1px solid #777!important;border-radius:6px;background:#777!important;color:#fff!important;font-size:14px!important}.${def.class.db} .${def.class.dbbn}:hover{box-shadow:0 0 3px #777!important}.${def.class.dbbc}{display:block;padding:2.5%;background:#efefef;color:#fff;text-align:right;font-size:initial}.${def.class.dbm} textarea{cursor:auto;overscroll-behavior:contain;scrollbar-color:auto}.${def.class.dbm} textarea::-webkit-scrollbar{width:8px;height:8px}.${def.class.dbm} textarea::-webkit-scrollbar-corner{border-radius:2px;background:#efefef;box-shadow:inset 0 0 3px #aaa}.${def.class.dbm} textarea::-webkit-scrollbar-thumb{border-radius:2px;background:#cfcfcf;box-shadow:inset 0 0 5px #999}.${def.class.dbm} textarea::-webkit-scrollbar-track{border-radius:2px;background:#efefef;box-shadow:inset 0 0 5px #aaa;}.${def.class.dbm} button:hover{background:#f6f6f6!important;box-shadow:0 0 3px #a7a7a7!important;cursor:pointer}.${def.class.dbm} p{margin:5px 0!important;text-align:left;text-indent:0;font-weight:400;font-size:16px;line-height:1.5!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul{margin:0 0 0 10px!important;padding:2px;color:#808080;list-style:none;font:italic 400 14px/150% var(--fr-shared-fontfamily)!important;-webkit-user-select:none;user-select:none}.${def.class.dbm} ul::-webkit-scrollbar{width:10px;height:1px}.${def.class.dbm} ul::-webkit-scrollbar-thumb{border-radius:10px;background:#cfcfcf;box-shadow:inset 0 0 5px #999;}.${def.class.dbm} ul::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #aaa}.${def.class.dbm} ul li{display:list-item;list-style-type:none;word-break:break-all}.${def.class.dbm} li:before{display:none}.${def.class.dbm} ul#${def.const.seed}\\.vlist li:hover{background:#fdf6eccc!important}#${def.const.seed}\\.temp{padding:18px 8px;text-align:center;color:#555;font-size:14px!important}#${def.id.bk},#${def.id.pv},#${def.id.fs},#${def.id.fvp},#${def.id.hk},#${def.id.ct},#${def.id.mps},#${def.id.pdr},#${def.id.flc},#${def.id.gc},#${def.id.cm},#${def.id.fi}{display:flex;box-sizing:content-box;margin:0;padding:2px 4px!important;width:calc(98% - 10px);height:max-content;min-width:auto;min-height:40px;list-style:none;font-style:normal;justify-content:space-between;align-items:flex-start;word-break:break-word}` +
          `.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 10px #0000001a,0 0 5px #f5929266;white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px #00000099;color:#fff;content:' '}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:'OFF';font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 10px #0000001a,0 0 5px #92c4f566;cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:'ON'}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:' '}#${def.const.seed}\\.monospaced\\.siterules::placeholder,#${def.const.seed}\\.monospaced\\.font::placeholder,#${def.const.seed}\\.monospaced\\.feature::placeholder,#${def.const.seed}\\.custom\\.feature::placeholder,#${def.const.seed}\\.custom\\.variant::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important}.${def.const.seed}\\.VIP{margin:2px 0 0 0;color:#b8860b!important;font:normal 400 16px/150% var(--fr-shared-fontfamily)}.${def.const.seed}\\.VIP>u{all:initial;margin:0 4px 0 0;font:normal 500 16px/150% Arial!important;color:#b8860b!important}:is(#${def.id.pdr},#${def.id.flc},#${def.id.gc}) button{box-sizing:border-box!important;margin:0 5px 0 0!important;padding:5px!important;border:1px solid #999!important;border-radius:4px!important;background:#eee;color:#444!important;letter-spacing:normal!important;font-weight:400!important;font-size:14px!important}.${def.class.dbm} a{color:#0969da;text-decoration:none!important;font-style:inherit}.${def.class.dbm} a:hover{color:#dc143c;text-decoration:underline}#${def.id.feedback}{box-sizing:content-box;margin:0;padding:2px 10px;width:max-content;height:22px;min-width:auto;font-style:normal;font-size:16px;cursor:pointer}.${def.class.dbm} #${def.id.files}{display:none}#${def.id.feedback}:hover{color:#dc143c!important}` +
          `#${def.id.feedback}:after{width:0;height:0;background:url('${def.url.loadingImg}') no-repeat -400px -300px;content:""}#${def.id.pdrr},#${def.id.flcid}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.id.maxps}{box-sizing:border-box;padding:4px 5px;width:70px;min-width:70px;border:2px solid #b8860b;border-radius:4px;background:#efefef;color:#333;text-align:center;font:normal 400 16px/150% 'Anton',Impact,serif!important}.${def.class.dbm} ul.${def.class.main}{overflow-x:hidden;box-sizing:content-box;margin:0;padding:5px 0;max-height:255px;overscroll-behavior:contain;scrollbar-color:auto}#${def.id.globaldisable}{width:max-content;height:max-content;min-width:70px;min-height:32px}#${def.const.seed}\\.del\\.sitedata{box-sizing:border-box;margin-left:15px;padding:3px 5px;width:max-content;height:max-content;max-width:120px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}\\.sitedatalist>span{margin:0;padding:0 2px;color:#3e3e3e;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}\\.save\\.sitedata{color:#4b0082;cursor:help;word-break:break-all}p.${def.const.seed}\\.exclusion{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}#${def.const.seed}\\.sdata{box-sizing:content-box;margin:4px 6px;padding:2px 6px;width:57%;height:22px;outline:none!important;border:2px solid #777;border-radius:4px;font:normal 400 16px/150% var(--fr-shared-monospace)!important}#${def.const.seed}\\.sdata\\:search{box-sizing:border-box;margin:0;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;outline:none!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}\\.sdata\\:clear{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#333!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}\\.vlist{overflow-x:hidden;margin:0!important;padding:0!important;max-height:190px;list-style:none!important;overscroll-behavior:contain;scrollbar-color:auto}` +
          `#${def.const.seed}\\.sdata\\:add{box-sizing:border-box;margin:0 0 0 4px;padding:3px 10px;width:max-content;height:max-content;min-width:60px;min-height:30px;border:1px solid #777;border-radius:4px;background:#eee;color:#8b0000!important;vertical-align:initial;text-align:center;letter-spacing:normal;font-weight:400;font-size:12px!important;cursor:pointer}#${def.const.seed}\\.vlist li[id^='${def.const.seed}.vlist.item:']{display:flex;overflow:hidden;margin:0;padding:5px;max-width:364px;color:#555;list-style:none;white-space:nowrap;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;justify-content:space-between}#${def.const.seed}\\.vlist span.${def.const.seed}\\.domainlist{overflow:hidden;margin-right:auto;padding-left:5px;width:85%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}#${def.const.seed}\\.vlist span.${def.const.seed}\\.customdomain{overflow:hidden;margin-left:5px;width:57%;text-overflow:ellipsis;font-weight:700;-webkit-user-select:all;user-select:all}#${def.const.seed}\\.vlist a[id^='${def.const.seed}.vlist.item.link:']{padding:2px;background:0 0;color:#8b0000;font-size:14px!important;cursor:pointer}#${def.const.seed}\\.exSite\\.add{font:italic 700 24px/150% Candara,Times!important;word-break:break-all}#${def.const.seed}\\.custom\\.fontlist,#${def.const.seed}\\.fontoverride\\.defarray,#${def.const.seed}\\.fontscale\\.defjson{box-sizing:content-box;margin:0 0 4px 0;padding:5px;max-width:372px;min-width:372px;min-height:160px;max-height:457px;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% var(--fr-shared-monospace)!important;resize:vertical;overscroll-behavior:contain;scrollbar-color:auto}#${def.const.seed}\\.warning\\.chn{display:block;margin:-7px 0 0 -7px!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}\\.warning\\.en{display:block;margin:-5px 0 0 0!important;height:max-content;color:#dc143c;font-size:14px!important}#${def.const.seed}\\.monospaced\\.siterules{box-sizing:border-box;margin:0!important;padding:5px!important;max-width:388px!important;min-width:388px!important;min-height:140px!important;max-height:256px;outline:0!important;border:1px solid #999;border-radius:6px;white-space:pre;font:normal 400 14px/150% var(--fr-shared-monospace)!important;resize:vertical;overscroll-behavior:contain;scrollbar-color:auto;word-break:keep-all!important}` +
          `#${def.const.seed}\\.monospaced\\.font,#${def.const.seed}\\.monospaced\\.feature,#${def.const.seed}\\.custom\\.feature,#${def.const.seed}\\.custom\\.variant{box-sizing:border-box;padding:5px;width:380px;outline:0!important;border:1px solid #999;border-radius:6px;font:normal 400 14px/150% var(--fr-shared-monospace)!important}.${def.class.dbm} p:is(.${def.const.seed}\\.mono\\.notify,.${def.const.seed}\\.fontfeature,.${def.const.seed}\\.fontvariant){display:block;margin-top:10px!important;color:#555;font-size:14px!important}#${def.id.cm},#${def.id.fi}{margin:0 0 8px;width:97%!important;border-bottom:1px groove #ccc}.${def.class.dbm} span.${def.const.seed}\\.cusmono{margin:2px 0 0 0;color:#555!important;font-weight:700!important;user-select:none;-webkit-user-select:none}#${def.const.seed}\\.kbd{display:inline-block;box-sizing:content-box;margin:4px 0 0;padding:3px 10px;width:94%;border:1px solid #afb8c166;border-radius:6px;background:#f6f8fa;color:#666;vertical-align:middle;text-align:center;font-size:14px!important}.${def.const.seed}\\.clr\\:808080{color:#808080!important}.${def.const.seed}\\.fst\\:nml{font-style:normal!important}.${def.const.seed}\\.fst\\:ita{font-style:italic!important}.${def.const.seed}\\.fs\\:20p{font-size:20px!important}.${def.const.seed}\\.save\\:p{display:flex;height:30px;align-items:center}.${def.const.seed}\\.mh\\:22p{min-height:22px}.${def.const.seed}\\.indent\\:6p{text-indent:6px!important}.${def.const.seed}\\.mgr\\:5p{margin:0 5px 0 0}.${def.const.seed}\\.pd\\:0{padding:0}.${def.const.seed}\\.fs\\:14p{font-size:14px!important}.${def.const.seed}\\.fs\\:11p{font-size:11px!important}.${def.const.seed}\\.cs\\:pointer{cursor:pointer}.${def.const.seed}\\.wrap\\.break{word-wrap:break-word;word-break:break-all!important}.${def.const.seed}\\.clr\\:indigo{color:#4b0082!important}.${def.const.seed}\\.clr\\:green{color:#006400!important}.${def.const.seed}\\.clr\\:555{color:#555!important}.${def.const.seed}\\.fs\\:12p{font-size:12px!important}.${def.const.seed}\\.clr\\:tan{color:#d2b48c!important}.${def.const.seed}\\.clr\\:708090{color:#708090!important}.${def.const.seed}\\.clr\\:ff7f50{color:#ff7f50!important}.${def.const.seed}\\.list\\:p{display:flex;justify-content:left;align-items:center}.${def.const.seed}\\.mg\\:05p{margin:0 5px}.${def.const.seed}\\.clr\\:ff6347{color:#ff6347!important}.${def.const.seed}\\.v\\.en{padding:0px 4px;font:italic 700 20px/130% Candara,Times New Roman!important}` +
          `.${def.const.seed}\\.v\\.cn{padding:4px;font:italic 700 22px/150% Candara,Times!important}.${def.const.seed}\\.hi\\.cn{font:italic 700 22px/150% var(--fr-shared-fontfamily)!important}.${def.const.seed}\\.hi\\.en{font:normal 700 20px/150% var(--fr-shared-fontfamily)!important}.${def.const.seed}\\.pd\\:4p{padding:4px}.${def.const.seed}\\.lh\\:180{line-height:180%!important}.${def.const.seed}\\.clr\\:b8860b{color:#b8860b!important}.${def.const.seed}\\.tal\\:center{text-align:center!important}.${def.const.seed}\\.cps{padding-bottom:6px;font-size:18px!important}.${def.const.seed}\\.cpsa{display:inline-block;overflow:hidden;width:360px;height:280px;border:2px solid #b8860b;border-radius:8px;background:url('${def.url.loadingImg}') 50% 50% no-repeat}.${def.const.seed}\\.clr\\:ff0000{border-color:#ff0000!important}.${def.const.seed}\\.clr\\:ff8c00{border-color:#ff8c00!important}.${def.const.seed}\\.input\\.pdb\\:5px{padding-bottom:5px;width:98%;}.${def.const.seed}\\.bd\\:crimson{border:2px solid #dc143c!important}.${def.const.seed}\\.list\\.reset{text-decoration:line-through;font-style:italic}#${def.const.seed}\\.report\\:author{overflow-y:auto;margin:0!important;padding:0!important;max-height:300px;list-style-position:outside}#${def.const.seed}\\.report\\:author li{padding:2px}#${def.const.seed}\\.custom\\.fontlist::placeholder{color:#aaa!important;white-space:pre-line!important;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;word-break:break-all!important}` +
          `#${def.const.seed}\\.update li{margin:0;padding:1px 4px;color:#808080;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important}#${def.const.seed}\\.update .${def.const.seed}\\.added{list-style-type:'\uff0b'}#${def.const.seed}\\.update .${def.const.seed}\\.removed{list-style-type:'\uff0d'}#${def.const.seed}\\.update .${def.const.seed}\\.fixed{list-style-type:'\uff20'}#${def.const.seed}\\.update .${def.const.seed}\\.info{color:#daa520;word-break:break-word;list-style-type:'\u266f'}#${def.const.seed}\\.update .${def.const.seed}\\.warn{color:#e90000;word-break:break-word;list-style-type:'\u2718'}#${def.const.seed}\\.update .${def.const.seed}\\.init{color:#65a16a;word-break:break-word;list-style-type:'\u2691'}.${def.class.dbm} input:focus,.${def.class.dbm} textarea:focus{box-shadow:inset 0 1px 3px #0000001a,0 0 4px #6e6f7099!important}@-moz-document url-prefix() {.${def.class.dbm} textarea,.${def.class.dbm} ul,#${def.const.seed}\\.custom\\.fontlist,#${def.const.seed}\\.monospaced\\.siterules,#${def.const.seed}\\.fontoverride\\.defarray,#${def.const.seed}\\.fontscale\\.defjson{scrollbar-color:#bbbbbbba #eeeeee12;scrollbar-width:thin}}`,
        frConfigure:
          `:host(#${def.id.configure}){z-index:2147483645}#${def.id.container}{position:absolute;top:10px;right:24px;z-index:99999;display:block;box-sizing:content-box;padding:4px;border-radius:12px;background:#f0f6ff!important;box-shadow:0 0 4px 0 #0000004d;color:#333;text-align:left;font-weight:700;font-size:16px!important;opacity:0;transition:opacity .5s;width:auto;overflow:hidden;pointer-events:auto}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar{display:block;visibility:hidden;overflow-x:hidden;overflow-y:auto;max-height:max(calc(98vh - 10px),100px);min-height:10%;scrollbar-color:auto;overscroll-behavior:contain}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar:hover{visibility:visible}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar::-webkit-scrollbar{width:6px;height:1px}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.container} *{text-shadow:none!important;font-weight:700;font-size:16px;font-family:var(--fr-shared-fontfamily),var(--fr-shared-emoji)!important;line-height:1.5!important;-webkit-text-stroke:0 transparent!important}#${def.id.container} fieldset{display:block;visibility:visible;margin:2px;padding:4px 6px;width:auto;height:auto;min-height:475px;border:2px groove #67a5df!important;border-radius:10px;background:#f0f6ff}#${def.id.container} legend{position:relative;float:none;display:block;visibility:visible;box-sizing:content-box;margin:0;padding:0 32px 0 8px;width:auto!important;height:auto!important;border:none!important;border-radius:6px;background:#f0f6ff!important;font:normal 700 16px/150% var(--fr-shared-fontfamily)!important}#${def.id.container} fieldset ul{margin:0;padding:0;background:#f0f6ff!important}#${def.id.container} ul li{float:none;display:block;box-sizing:content-box;margin:3px 0;min-width:-webkit-fill-available;min-width:-moz-available;border:none;background:#f0f6ff!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none}#${def.id.container} ul li:before{display:none}#${def.id.container} .${def.class.rotation} svg{visibility:visible!important;overflow:hidden;width:24px;height:24px;vertical-align:initial!important;fill:#67a5df}` +
          `#${def.id.container} .${def.class.rotation} svg:hover{cursor:help}#${def.const.seed}\\.scriptname{display:inline-block;margin:0 4px 0 0;vertical-align:bottom;overflow:hidden;min-width:130px;max-width:225px;text-overflow:ellipsis;white-space:nowrap;font-weight:700!important;-webkit-user-select:all;user-select:all}#${def.const.seed}\\.scriptname:hover{cursor:help}#${def.id.container} .${def.class.title} .${def.class.guide}{position:absolute;display:inline-block;cursor:pointer}@keyframes rotation{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}.${def.class.title} .${def.class.rotation}{position:relative;display:inline-block;top:auto;right:auto;bottom:auto;left:auto;margin:0;padding:0;width:24px;height:24px;-webkit-transform:rotate(1turn);transform-origin:center 50% 0;animation:rotation 6s linear infinite}#${def.id.container} input:not([type='range'],[type='checkbox']):focus,#${def.id.container} textarea:focus{box-shadow:inset 0 1px 3px #0000001a,0 0 6px #52a8ec99!important}#${def.id.fontList}{padding:2px 10px 0;min-height:73px}#${def.id.fontFace},#${def.id.fontSmooth}{display:flex!important;padding:2px 10px;width:calc(100% - 18px);height:40px;min-width:auto;align-items:center;justify-content:space-between}#${def.id.fontSize}{padding:2px 10px;height:60px}#${def.id.fontStroke}{padding:2px 10px;height:60px}#${def.id.fontShadow}{padding:2px 10px;height:60px}#${def.id.container} #${def.id.shadowColor}{display:flex;padding:2px 10px;width:auto;min-height:45px;align-items:center;justify-content:space-around;flex-wrap:nowrap;flex-direction:row}#${def.id.fontCss},#${def.id.fontEx}{padding:2px 10px;height:110px;min-height:110px;min-width:254px!important}#${def.id.submit}{padding:2px 10px;height:40px;display:flex!important}#${def.id.fontList} .${def.class.selector} a{text-decoration:none;font-weight:400}#${def.id.fontList} .${def.class.label}{display:inline-block;margin:-1px 4px 5px 0;padding:0;height:34px;line-height:100%!important}#${def.id.fontList} .${def.class.label} span{display:inline-block;overflow:hidden;box-sizing:border-box;padding:5px;width:max-content;height:max-content;max-width:200px;min-width:12px;background:#67a5df;color:#fff;text-overflow:ellipsis;white-space:nowrap;font-weight:400;font-size:16px!important}#${def.id.fontList} .${def.class.close}:hover{border-radius:2px;background:#2d7dca;color:#ff6347}#${def.id.fontList} .${def.class.close}{width:12px}` +
          `#${def.id.fontList} .${def.class.selector}{overflow-x:hidden;box-sizing:border-box;margin:0 0 6px 0;padding:6px 0 0 6px;width:100%;max-width:254px;max-height:90px;min-width:100%;min-height:45px;border:2px solid #67a5df!important;border-radius:6px;overscroll-behavior:contain;scrollbar-color:auto}#${def.id.selector}{width:100%;max-width:100%;display:none}#${def.id.selector} label{display:block;margin:0 0 4px;color:#333;cursor:auto}#${def.id.cleaner}{margin-left:5px;cursor:pointer}#${def.id.cleaner}:hover{color:#dc143c}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selector}::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontList} .${def.class.selectFontID} span.${def.class.spanlabel},#${def.id.selector} span.${def.class.spanlabel}{display:block!important;margin:0!important;padding:0 0 4px;width:auto;border:0;background:transparent!important;color:#333;text-align:left!important}#${def.id.fontList} .${def.class.selectFontID}{width:auto}#${def.id.fontList} .${def.class.selectFontID} input{overflow:hidden;box-sizing:border-box;margin:0;padding:1px 4px 1px 0px;width:230px;height:42px;max-width:100%;min-width:100%;outline:none;border:2px solid #67a5df;border-radius:6px;background:#fafafa;text-indent:8px;text-overflow:ellipsis;color:#333;font:normal 700 16px/150% var(--fr-shared-fontfamily)!important}#${def.id.fontList} .${def.class.selectFontID} input[disabled]{pointer-events:none!important}#${def.id.fontList} input[disabled]::placeholder{color:#444a!important}#${def.id.fontList} .${def.class.selectFontID} input:focus:not(:placeholder-shown)~span{display:none}#${def.id.fontList} .${def.class.selectFontID} input::-webkit-search-cancel-button{margin:auto 4px;cursor:pointer}#${def.id.fontList} .${def.class.selectFontID} dl{display:none;position:absolute;z-index:1000;overflow-x:hidden;box-sizing:content-box;margin:4px 0 0;padding:4px 8px;width:auto;max-width:calc(100% - 68px);max-height:298px;min-width:60%;border:2px solid #67a5df!important;border-radius:6px;background:#fff;white-space:nowrap;font-size:18px!important;overscroll-behavior:contain;scrollbar-color:auto}#${def.const.seed}\\.fontrewrite\\.def:hover,#${def.const.seed}\\.fontscale\\.def:hover{cursor:help;color:#8b0000}` +
          `#${def.const.seed}\\.search::placeholder{color:#3699!important;font:normal 700 16px/150% var(--fr-shared-fontfamily)!important}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar{width:10px;height:1px}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontID} dl::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 5px #67a5df}#${def.id.fontList} .${def.class.selectFontID} dl dd{display:block;overflow-x:hidden;box-sizing:content-box;margin:1px 8px;padding:5px 0;width:-moz-available;width:-webkit-fill-available;max-width:100%;min-width:100%;text-overflow:ellipsis;font-weight:400;font-size:21px!important}#${def.id.fontList} .${def.class.selectFontID} dl dd:hover{overflow-x:hidden;box-sizing:content-box;min-width:-moz-available;min-width:-webkit-fill-available;background:#67a5df;color:#fff;text-overflow:ellipsis}.${def.class.checkbox}{display:none!important}.${def.class.checkbox}+label{position:relative;display:inline-block;box-sizing:content-box;margin:0 2px 0 0;padding:0;width:76px;height:32px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 10px #0000001a,0 0 5px #f5929266;white-space:nowrap;cursor:pointer}.${def.class.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;border-radius:7px;background:#fff;box-shadow:0 0 1px #00000099;color:#fff;content:" "}.${def.class.checkbox}+label::after{position:absolute;top:0;left:28px;padding:5px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-style:normal;font-size:16px}.${def.class.checkbox}:checked+label{margin:0 2px 0 0;background:#67a5df!important;box-shadow:inset 0 0 10px #0000001a,0 0 5px #92c4f566;cursor:pointer}.${def.class.checkbox}:checked+label::after{left:10px;content:"ON"}.${def.class.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}#${def.id.fface} label,#${def.id.fface}+label::after,#${def.id.fface}+label::before,#${def.id.smooth} label,#${def.id.smooth}+label::after,#${def.id.smooth}+label::before{-webkit-transition:all .3s ease-in;transition:all .3s ease-in}` +
          `#${def.id.fontShadow} div.${def.class.flex}:before,#${def.id.fontShadow} div.${def.class.flex}:after,#${def.id.fontStroke} div.${def.class.flex}:before,#${def.id.fontStroke} div.${def.class.flex}:after,#${def.id.fontSize} div.${def.class.flex}:before,#${def.id.fontSize} div.${def.class.flex}:after{display:none}#${def.id.shadowSize},#${def.id.strokeSize},#${def.id.fontScale}{box-sizing:content-box;margin:0 10px 0 0!important;padding:0;width:56px!important;height:32px!important;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:#fafafa!important;color:#111!important;text-align:center;text-indent:0;font-weight:400!important;font-size:17px!important;font-family:'Anton',Impact,serif!important}#${def.id.fontScale}[disabled]{background:#e4e7edd1!important;color:#555!important;filter:grayscale(.9)}#${def.id.fviewport},#${def.id.fstroke},#${def.id.rdCanvas}{visibility:visible;width:auto;color:#666;font-size:12px!important}#${def.id.fviewport}>label,#${def.id.fstroke}>label,#${def.id.rdCanvas}>label{float:none!important;display:inline!important;margin:0!important;padding:0 4px 0 2px!important;color:#666!important;font-size:12px!important;cursor:help!important}#${def.id.fixViewport},#${def.id.fixStroke},#${def.id.renderCanvas}{display:inline-block;margin:0 2px 0 0!important;width:14px!important;height:14px!important;vertical-align:text-bottom;cursor:pointer;-webkit-appearance:none!important}#${def.id.fixViewport}:checked::after,#${def.id.fixStroke}:checked::after,#${def.id.renderCanvas}:checked::after{border:0!important;background:#65a0db;color:#fff;content:"\u2713";font-weight:700;font-size:12px;line-height:14px}.${def.class.flex}{display:flex;width:auto;min-width:100%;align-items:center;justify-content:space-between;flex-wrap:nowrap;flex-direction:row}.${def.class.slider} input{visibility:hidden}#${def.id.fixViewport}::after,#${def.id.fixStroke}::after,#${def.id.renderCanvas}::after{position:relative;top:0;display:inline-block;margin:0;padding:0;width:14px;height:14px;border-radius:3px;background:#aaa;color:#fff;content:"\u2717";vertical-align:top;text-align:center;font-weight:700;font-size:10px;line-height:14px}` +
          `#${def.id.shadowColor} .${def.class.frColorPicker} #${def.id.color}{box-sizing:border-box;margin:0;padding:0 8px 0 0;min-width:160px;max-width:160px;height:35px!important;outline:none!important;border:2px solid #67a5df!important;border-radius:4px;background:#fdfdffb0;color:#333!important;text-align:center;text-indent:0;font-weight:400!important;font-size:18px!important;font-family:'Anton',Impact,serif!important;cursor:pointer}#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{display:block;box-sizing:border-box;margin:0;padding:5px;width:calc(100% - 2px)!important;height:78px;max-width:calc(100% - 2px);max-height:78px;min-width:calc(100% - 2px);min-height:78px;outline:none!important;border:2px solid #67a5df!important;border-radius:6px;scrollbar-color:auto;color:#0b5b9c!important;font:normal 600 14px/150% var(--fr-shared-monospace)!important;resize:none;cursor:auto;word-break:break-all;overscroll-behavior:contain;scrollbar-color:auto}#${def.id.fontCss} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontCss} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontCss} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #00000033}#${def.id.fontEx} textarea{background:#fafafa!important}#${def.id.fontEx} textarea::-webkit-scrollbar{width:6px;height:1px}#${def.id.fontEx} textarea::-webkit-scrollbar-thumb{border-radius:10px;background:#487baf;box-shadow:inset 0 0 2px #67a5df}#${def.id.fontEx} textarea::-webkit-scrollbar-track{border-radius:10px;background:#efefef;box-shadow:inset 0 0 2px #67a5df}.${def.class.switcher}{float:right;box-sizing:border-box;margin:-2px 4px 0 0;padding:0 6px;border:2px double #67a5df;border-radius:4px;color:#0a68c1;}#${def.id.fontCss} textarea::placeholder,#${def.id.fontEx} textarea::placeholder{color:#555;font:italic 500 14px/150% var(--fr-shared-fontfamily)!important;opacity:.85}#${def.id.cSwitch}:hover,#${def.id.eSwitch}:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.${def.class.notreadonly}{background:linear-gradient(45deg,#e9ffe9,#e9ffe9 25%,transparent 0,transparent 50%,#e9ffe9 0,#e9ffe9 75%,transparent 0,transparent)!important;background-color:#f7fff7!important;background-size:50px 50px!important}#${def.id.submit} .${def.class.submit}{margin-left:auto}#${def.id.backup}{display:none}` +
          `#${def.id.submit} button{box-sizing:border-box;margin:0;padding:5px 10px;width:auto;height:35px;min-width:min-content;min-height:35px;border:2px solid #6ba7e0;border-radius:6px;background:#67a5df;background-image:none;color:#fff!important;font:normal 600 14px/150% var(--fr-shared-fontfamily)!important;cursor:pointer}#${def.id.submit} button:hover{box-shadow:0 0 5px #042f6459!important}#${def.id.submit} .${def.class.cancel},#${def.id.submit} .${def.class.reset}{margin-right:6px}.${def.class.anim}{border:2px solid #dc143c!important;background:#dc143c!important;animation:jiggle 1.8s ease-in infinite}@keyframes jiggle{48%,62%{transform:scale(1,1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translate(0,-5px)}59%{transform:scale(1,1) translate(0,-3px)}}.${def.class.tooltip}{position:relative;padding:0;cursor:help;-webkit-user-select:none;user-select:none}.${def.class.tooltip}:active .${def.class.tooltip}{display:block}.${def.const.seed}\\.mgl\\:-5p{margin:0 0 0 -5px}#${def.id.container} .${def.class.tooltip} .${def.class.tooltip} *{font-size:14px}.${def.class.tooltip} .${def.class.tooltip}{position:absolute;z-index:999999;display:none;box-sizing:content-box;padding:10px 10px 0 10px;width:234px;max-width:234px;border:2px solid #b8c4ce;border-radius:6px;background:#54a2ec;color:#fff;font-weight:400;opacity:.92;word-break:break-all}#${def.id.container} .${def.class.tooltip} .${def.class.tooltip} em{font-style:normal}#${def.id.container} .${def.class.tooltip} .${def.class.tooltip} strong{color:#ff8c00;font-size:18px}#${def.id.container} .${def.class.tooltip} .${def.class.tooltip} p{display:block;margin:0 0 10px;color:#fff;text-indent:0;line-height:150%}.${def.class.ps1}{position:relative;top:-33px;right:3px;float:right;margin:0;padding:0;width:24px;height:0}.${def.class.ps2}{top:35px;right:-7px}.${def.class.ps3},.${def.class.ps4},.${def.class.ps5}{bottom:30px;left:auto}#${def.id.fshadow}{visibility:hidden;margin-top:5px;position:absolute;z-index:999;box-sizing:content-box;padding:10px;width:234px;max-width:234px;border:2px solid #67a5df;border-radius:6px;background:#f0f6ff;color:#333;opacity:.92;left:21px}#${def.id.fshadow} .${def.const.seed}\\.fix\\.label{display:flex;align-items:center;justify-content:space-around}#${def.id.fshadow} .${def.const.seed}\\.fix\\.text{padding:5px;font-size:12px;font-weight:400;line-height:170%!important;color:#808287;word-break:break-all}` +
          `.${def.const.seed}\\.mg\\:0\\.pd\\:0{margin:0;padding:0}.${def.const.seed}\\.checkbox{height:32px;align-self:center}.${def.const.seed}\\.ft\\:gs1{filter:grayscale(1)!important}.${def.const.seed}\\.mg\\:0-3p\\.pd\\:0{margin:0 -3px;padding:0}.${def.const.seed}\\.mgb\\:6p{margin:0 0 6px 0}.${def.const.seed}\\.bdlr\\:4px{border-top-left-radius:4px;border-bottom-left-radius:4px}.${def.const.seed}\\.bdrr\\:4px{border-top-right-radius:4px;border-bottom-right-radius:4px}.${def.const.seed}\\.usel\\:none{user-select:none!important}.${def.const.seed}\\.h\\:35p\\.mh\\:35p{height:35px!important;min-height:35px!important}.${def.const.seed}\\.prvw{background:#ff7f50!important;border-color:#ff7f50!important}.${def.const.seed}\\.input\\.color{background-position:left top,left top!important;background-size:var(--fr-input-gb-size,"auto,35px 16px")!important;background-repeat:repeat-y,repeat-y!important;background-origin:padding-box,padding-box!important;background-image:linear-gradient(90deg,var(--fr-input-color) 0,var(--fr-input-color) var(--fr-input-color-edge,35px),transparent var(--fr-input-color-edge2,36px),transparent),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAAAXNSR0IArs4c6QAAAFNJREFUSEtjnDlz5n8GPODs2bP4pBmMjY3xypOin3HUMUhhiRyyoyGDnMhGQwZXlhu8IZOWloa3nKFmOYItdJDLIcZRxyAF0WjI4MpNoyEz5EIGAMmNh+nDrPy/AAAAAElFTkSuQmCC")!important;padding-left:var(--fr-input-padding-left,43px)!important}#${def.id.fontList} .${def.class.selectFontID} dl>dt{all:initial;display:none;padding:8px;border-radius:4px;border:1px solid #e51111;background:#e51111;word-break:break-all;color:#efea11;font-size:15px;cursor:progress}@-moz-document url-prefix() {#${def.id.fontList} .${def.class.label}{margin:-1px 0 4px 0}#${def.id.fontList} .${def.class.selectFontID} input{padding:1px 24px 1px 0px!important}#${def.id.fontList} .${def.class.selectFontID} input:focus:not(:placeholder-shown){padding:1px 8px 1px 0px!important}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar{padding:0 4px 0 2px}#${def.id.container} .${def.const.seed}\\.dialog\\.scrollbar,#${def.id.fontList} .${def.class.selector},#${def.id.fontList} .${def.class.selectFontID} dl,#${def.id.fontCss} textarea,#${def.id.fontEx} textarea{scrollbar-color: #c3cdddff #f1f0f012;scrollbar-width:thin}}`,
        frSlider:
          `:host(.${def.class.range}){--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:#fff;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic 700 14px/14px ui-monospace,Consolas,monospace;--fill-color:var(--primary-color);--progress-background:#dfdfdf;--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size) / 2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:#fff;--thumb-shadow:0 0 3px #00000066,0 0 1px #00000080 inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px #00000066;--thumb-shadow-hover:0 0 0 calc(var(--thumb-size) / 4) inset var(--thumb-color),0 0 0 99px #ff8c00 inset,0 0 3px #00000066;--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height, 0);--ticks-color:transparent;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1, Max(var(--ticks-count) - var(--maxTicksAllowed), 0));--x-step:Max(var(--step), var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min)) / var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size)) / var(--tickIntervalPerc_1) * var(--tickEvery, 1));--value-a:Clamp(var(--min), var(--value, 0), var(--max));--value-b:var(--value, 0);--text-value-a:var(--text-value, "");--completed-a:calc((var(--value-a) - var(--min)) / (var(--max) - var(--min)) * 100);--completed-b:calc((var(--value-b) - var(--min)) / (var(--max) - var(--min)) * 100);width:auto;min-width:105%!important;margin:-3px 0 0 -7px;box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));background:linear-gradient(to right,var(--ticks-color) var(--ticks-thickness),transparent 1px) repeat-x;background-color:transparent;background-size:var(--tickIntervalPerc) var(--ticks-height);background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y) * var(--ticks-gap));position:relative;z-index:1;--ca:Min(var(--completed-a), var(--completed-b));--cb:Max(var(--completed-a), var(--completed-b));--thumbs-too-close:Clamp(-1, 1000 * (Min(1, Max(var(--cb) - var(--ca) - 5, -1)) + 0.001), 1);` +
          `--thumb-close-to-min:Min(1, Max(var(--ca) - 5, 0));--thumb-close-to-max:Min(1, Max(95 - var(--cb), 0))}:host(.${def.class.range}[disabled]){filter:grayscale(0.9);}:host(.${def.class.range}[data-ticks-position=top]){--flip-y:1}:host(.${def.class.range}::after),:host(.${def.class.range}::before){--offset:calc(var(--thumb-size) / 2);content:counter(x);display:var(--show-min-max,block);font:var(--min-max-font);position:absolute;bottom:var(--flip-y,-2.5ch);top:calc(-2.5ch * var(--flip-y));opacity:Clamp(0,var(--at-edge),var(--min-max-opacity));transform:translateX(calc(var(--min-max-x-offset) * var(--before,-1) * -1)) scale(var(--at-edge));pointer-events:none}:host(.${def.class.range}::before){--before:1;--at-edge:var(--thumb-close-to-min);counter-reset:x var(--min);left:var(--offset)}:host(.${def.class.range}::after){--at-edge:var(--thumb-close-to-max);counter-reset:x var(--max);right:var(--offset)}.${def.class.rangeProgress}{--start-end:calc(var(--thumb-size) / 2);--clip-end:calc(100% - (var(--cb)) * 1%);--clip-start:calc(var(--ca) * 1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));position:absolute;left:var(--start-end);right:var(--start-end);top:calc(var(--ticks-gap) * var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);height:calc(var(--track-height));background:var(--progress-background,#eee);pointer-events:none;z-index:-1;border-radius:var(--progress-radius)}.${def.class.rangeProgress}::before{content:"";position:absolute;left:0;right:0;clip-path:var(--clip);top:0;bottom:0;background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);z-index:1;border-radius:inherit}.${def.class.rangeProgress}::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;box-shadow:var(--progress-shadow);pointer-events:none;border-radius:inherit}:host(.${def.class.range})>input:only-of-type~.${def.class.rangeProgress}{--clip-start:0}:host(.${def.class.range})>input::-webkit-slider-runnable-track{background:transparent!important;box-shadow:none!important;border:none!important}:host(.${def.class.range})>input{-webkit-appearance:none;box-shadow:none!important;width:100%;height:var(--thumb-size)!important;margin:0!important;padding:0!important;position:absolute!important;left:0;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + calc(var(--ticks-gap)/ 2 * var(--flip-y,-1)))!important;border:0!important;cursor:grab;outline:0!important;background:0 0!important;--thumb-shadow:var(--thumb-shadow-active)}` +
          `:host(.${def.class.range})>input:not(:only-of-type){pointer-events:none}:host(.${def.class.range})>input::-webkit-slider-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}:host(.${def.class.range})>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}:host(.${def.class.range})>input::-ms-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}:host(.${def.class.range})>input:hover{--thumb-shadow:var(--thumb-shadow-active)}:host(.${def.class.range})>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;color:var(--value-active-color);box-shadow:0 0 0 3px var(--value-background)}:host(.${def.class.range})>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}:host(.${def.class.range})>input:active+output{transition:0s;opacity:0.9;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}:host(.${def.class.range})>input:nth-of-type(1){--is-left-most:Clamp(0, (var(--value-a) - var(--value-b)) * 99999, 1)}:host(.${def.class.range})>input:nth-of-type(1)+output{--value:var(--value-a);--x-offset:calc(var(--completed-a) * -1%)})}:host(.${def.class.range})>input:nth-of-type(1)+output:not(:only-of-type){--flip:calc(var(--thumbs-too-close) * -1)}:host(.${def.class.range})>input:nth-of-type(1)+output::after{content:var(--prefix, "") var(--text-value-a) var(--suffix, "")}:host(.${def.class.range})>input:nth-of-type(2){--is-left-most:Clamp(0, (var(--value-b) - var(--value-a)) * 99999, 1)}:host(.${def.class.range})>input:nth-of-type(2)+output{--value:var(--value-b)}:host(.${def.class.range})>input+output::after{content:var(--prefix, "") var(--text-value-b) var(--suffix, "");font:var(--value-font)}` +
          `:host(.${def.class.range})>input+output{--flip:-1;--x-offset:calc(var(--completed-b) * -1%);--pos:calc(((var(--value) - var(--min)) / (var(--max) - var(--min))) * 100%);pointer-events:none;width:auto;min-width:40px;height:24px;min-height:24px;text-align:center;position:absolute;z-index:5;background:var(--value-background);border-radius:4px;padding:0 6px;left:var(--pos);transform:translate(var(--x-offset),calc(150% * var(--flip) - (var(--y-offset,0) + var(--value-offset-y)) * var(--flip)));transition:all .12s ease-out,left 0s;opacity:0;box-sizing:content-box}`,
      });

      /* REGISTER_LOAD_EVENT_CLASS */

      class ReadyStateEventsRegistry {
        constructor() {
          safeObject.assign(this, { functionsToRun: [], finalFunctionsToRun: [], isRegistered: false });
          this.loadedHandler = this._runFunctions.bind(this, this.finalFunctionsToRun);
          this.loadingHandler = this._runFunctions.bind(this, this.functionsToRun);
          this._registeringEventListeners();
        }
        _runFunctions(functionsList, background, description = "[DOM.STATE]", state = document.readyState, runCount = 0, errorCount = 0) {
          for (const { fn, args } of functionsList) {
            try {
              fn.apply(null, args);
              runCount++;
            } catch (e) {
              ERROR(`${e.name} in ${capitalize(fn.name) || "(anonymous)"}:`, e.message);
              errorCount++;
            }
          }
          this.info = `%c${description}: ${runCount},${errorCount},${state}!%c\r\n%c \u3000\u27A6${IN_FRAMES} ${CUR_HOST_NAME} %c${CUR_HOST_PATH}`;
          return !INFO(this.info, fullStyle(background), "color:0", remarkStyle("0"), remarkStyle("#a9a9a9"));
        }
        _asyncLoadHandler() {
          sleep(6e2)(2e2).then(t => sleep(t)(this.loadingHandler("#2160b7", "[DOC.LOAD]", "preparing")).then(() => this.loadedHandler("#008080", "[DOC.LOAD]")));
        }
        _registeringEventListeners() {
          if (this.isRegistered || IS_GREASEMONKEY) return !this.isRegistered && this._asyncLoadHandler();
          const readyStateStep = () => {
            document.readyState === "interactive" && !this.interactiveHandled && (this.interactiveHandled = true) && this.loadingHandler("#6a5acd");
            Boolean(document.readyState === "complete" && !this.isLoaded && (this.isLoaded = true) && this.loadedHandler("#008000")) &&
              sleep(0)(this.interactiveHandled).then(handled => !handled && this.loadingHandler("#4682b4", void 0, "compensated"));
            !this.isLoaded && GMunsafeWindow[def.const.raf](readyStateStep);
          };
          return GMunsafeWindow[def.const.raf](readyStateStep), (this.isRegistered = true);
        }
        addFn(fn, ...args) {
          return typeof fn === "function" && this.functionsToRun.push({ fn, args });
        }
        addFinalFn(fn, ...args) {
          return typeof fn === "function" && this.finalFunctionsToRun.push({ fn, args });
        }
      }

      /* FR_DIALOGBOX_CLASS */

      let setAdoptedStyleSheets = (...args) => (setAdoptedStyleSheets = IS_ADOPTEDSTYLESHEET_MUTABLE ? updateAdoptedStyleSheets : updateInternalStyle)(...args);
      const frDialogBoxCssText = String(hostStyle("fr-dialogbox") + def.var.style.shared + def.var.style.frDialogBox);
      class FrDialogBox {
        constructor({ titleText = "Test", messageText = "Test message.", trueButtonText = "OK", falseButtonText = null, neutralButtonText = null } = {}) {
          safeObject.assign(this, { cssText: frDialogBoxCssText, titleText, messageText, trueButtonText, falseButtonText, neutralButtonText });
          safeObject.assign(this, { hasFalse: falseButtonText !== null, hasNeutral: neutralButtonText !== null, parent: document.documentElement });
          this._create(this);
          this._append();
        }
        static closure() {
          return safeRemoveNode(`#${def.id.dialogbox}`);
        }
        _create(context) {
          this.container = cE("fr-dialogbox", { id: def.id.dialogbox });
          const shadow = (def.var.dialogIf = aS(this.container));
          setAdoptedStyleSheets({ target: shadow, css: this.cssText, id: `${def.const.seed}-dialogbox`, media: "all", writable: false, minor: true });
          this.frDialog = cE("fr-box", { class: def.class.db });
          appendNode(shadow, this.frDialog);
          const titleHtml = `${this.titleText}<span id="${def.const.seed}.dialog.close" title="${IS_CHN ? "关闭" : "Close"}">&times;</span>`;
          const title = cE("fr-title", { class: def.class.dbt, innerHTML: tTP.createHTML(titleHtml) });
          const message = cE("fr-message", { class: def.class.dbm, innerHTML: tTP.createHTML(this.messageText) });
          const buttonContainer = cE("fr-buttons", { class: def.class.dbbc });
          appendNode(this.frDialog, title, message, buttonContainer);
          this.trueButton = cE("button", { class: [def.class.dbb, def.class.dbbt], textContent: this.trueButtonText });
          [this.trueButton, qS(`#${def.const.seed}\\.dialog\\.close`, shadow)].forEach(c => c?.addEventListener("click", () => void context._destroy()));
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
          if (!CUR_WINDOW_TOP || !this.container || !FrDialogBox.closure()) return;
          this.root = createDialogModel(this.container, this.parent);
          sleep(2e2).then(() => this.frDialog.classList.add(`${def.const.seed}.opac:1`));
        }
        _destroy() {
          if (!this.container) return;
          this.frDialog.classList.remove(`${def.const.seed}.opac:1`);
          if (safeRemoveNode(this.container) && !qS("fr-configure")) closeDialogModel(this.root);
        }
        async respond() {
          return new Promise((resolve, reject) => {
            if (!this.frDialog || !this.trueButton) reject(new Error("FrDialogBox not exist!"));
            this.trueButton.addEventListener("click", () => void resolve(true));
            if (this.hasFalse) this.falseButton.addEventListener("click", () => void resolve(false));
          }).catch(e => void ERROR(`${e.name} in FrDialogBox:`, e.message));
        }
      }

      function createDialogModel(container, parent) {
        setAdoptedStyleSheets({ target: document, css: def.var.style.frDialog, id: def.id.dialogStyle, media: "all", writable: false, minor: true });
        const dialog = qS(`dialog#${def.const.dialog}`) ?? GMaddElement(parent, "dialog", { id: def.const.dialog });
        if (dialog instanceof Node) {
          appendNode(dialog, container);
          dialog.hasAttribute("open") && dialog.close?.();
          (dialog.inert = true) && dialog.showModal?.();
          dialog.removeAttribute("inert");
          dialog.focus();
        }
        return dialog;
      }

      function closeDialogModel(dialog) {
        return dialog?.close?.(), document.removeEventListener("blur", stopEventPropagation, true), safeRemoveNode(dialog || `dialog#${def.const.dialog}`);
      }

      function compareVersion({ WEBKIT = NaN, BLINK = NaN, GECKO = NaN, more = true } = {}) {
        if (IS_CHEAT_UA) return false;
        const compare = version => (more ? engineVersion >= version : engineVersion < version);
        return (IS_REAL_WEBKIT && compare(WEBKIT)) || (IS_REAL_BLINK && compare(BLINK)) || (IS_REAL_GECKO && compare(GECKO));
      }

      function createStyleSheet(id, css, media, writable, primary) {
        const sheet = new CSSStyleSheet();
        const metadata = `:host(sheet-metadata){--sheet-metadata:${JSON.stringify({ id, ...(primary && { [def.const.cssAttrName]: Boolean(writable) }) })};}`;
        const cssText = tTP.createScript(css.replace(/^\s*:host\(sheet-metadata\)\s*\{\s*.+?;\s*\}\s*/, ""));
        return sheet.media.appendMedium(media), sheet.replaceSync(cssText), sheet.insertRule(metadata, 0), sheet;
      }

      function getSheetMetadata(sheet) {
        const rootRule = sheet.cssRules?.[0];
        if (rootRule?.selectorText !== ":host(sheet-metadata)") return object();
        const rawValue = rootRule.style.getPropertyValue("--sheet-metadata");
        return rawValue ? (sheet.disabled = false) || JSON.parse(rawValue.trim()) : object();
      }

      function getMainStyleSheets({ primary = false, target = document, forceStyle = false, preset = {} }) {
        const ATTR_REGEX = /^fr-css-[0-9a-f]{8}$/;
        if (IS_ADOPTEDSTYLESHEET_MUTABLE && !forceStyle) {
          if (primary) return asArray(target.adoptedStyleSheets).FindX(s => getSheetMetadata(s).id === def.id.rndStyle);
          const fn = s => (preset.minor ? getSheetMetadata(s).id === preset.id : asArray(safeObject.keys(getSheetMetadata(s))).SomeX(n => ATTR_REGEX.test(n)));
          return arrayFrom(target.adoptedStyleSheets).filter(fn);
        } else {
          if (primary) return qS(`style#${def.id.rndStyle}`, document.head);
          const fn = s => (preset.minor ? s.id === preset.id : asArray(s.getAttributeNames()).SomeX(n => ATTR_REGEX.test(n)));
          return qA("style[id]", isShadow(target) ? target : target.head).filter(fn);
        }
      }

      function updateAdoptedStyleSheets({ target, css, id, media = "screen", writable = true, primary = false, minor = false, forceStyle = false }) {
        try {
          const existSheets = getMainStyleSheets({ target, forceStyle, preset: { minor, id } });
          if (writable && existSheets.length) target.adoptedStyleSheets = arrayFrom(target.adoptedStyleSheets).filter(s => !existSheets.includes(s));
          else if (existSheets.length > 0) return true;
          const newStyleSheet = createStyleSheet(id, css, media, writable, primary);
          return target.adoptedStyleSheets.push(newStyleSheet) && true;
        } catch (e) {
          ERROR(`${e.name} in UpdateAdoptedStyleSheets:`, e.message);
        }
      }

      function updateInternalStyle({ target, css, id, media = "screen", writable = true, primary = false, minor = false, forceStyle = false }) {
        try {
          const existStyles = getMainStyleSheets({ target, forceStyle, preset: { minor, id } });
          if (writable) existStyles.forEach(style => (style.dataset.frRemoved = true) && safeRemoveNode(style));
          else if (existStyles.length > 0) return true;
          const options = { id, media, type: "text/css", textContent: css, ...(primary && { [def.const.cssAttrName]: Boolean(writable) }) };
          return target && GMaddElement(isShadow(target) ? target : target.head, "style", options), true;
        } catch (e) {
          ERROR(`${e.name} in UpdateInlineStyle:`, e.message);
        }
      }

      function checkBlinkCheatingUA(uad) {
        if (!IS_REAL_BLINK) return false;
        return (global.isSecureContext && !uad) || (uad && toString(uad) !== "[object NavigatorUAData]");
      }

      function getscaleValueMatrix(scaleMatrix) {
        const [o, t] = (def.array.scaleMatrix = scaleMatrix.slice(-2));
        return { prev: o || 1, cur: t || 1 };
      }

      class SecureCipherSuite {
        constructor(p) {
          this.d = arrayFrom(p).reduce((acc, char) => acc + char.charCodeAt(0), "");
          [this.s, this.c, this.u] = [Math.floor(this.d.length / 5), Math.ceil(p.length / 2), Math.pow(2, 31) - 1];
          this.m = parseInt(this.d[this.s] + this.d[this.s * 2] + this.d[this.s * 3] + this.d[this.s * 4] + this.d[this.s * 5]);
        }
        encrypt(e) {
          if (this.m < 2 || !e) return "";
          let k = random({ range: 1e9 })[0] % 1e8;
          let [d, o] = [this.d + k, ""];
          while (d.length > 10) d = (parseInt(d.slice(0, 10)) + parseInt(d.slice(10))).toString();
          d = (this.m * d + this.c) % this.u;
          for (let i = 0, l = e.length; i < l; i++) {
            let g = parseInt(e.charCodeAt(i) ^ Math.floor((d / this.u) * 255));
            (o += g.toString(16).padStart(2, "0")) && (d = (this.m * d + this.c) % this.u);
          }
          return o + k.toString(16).padStart(8, "0");
        }
        decrypt(e) {
          if (this.m < 2 || !e) return "";
          const k = parseInt(e.slice(-8), 16);
          e = e.slice(0, -8);
          let [d, o] = [this.d + k, ""];
          while (d.length > 10) d = (parseInt(d.slice(0, 10)) + parseInt(d.slice(10))).toString();
          d = (this.m * d + this.c) % this.u;
          for (let i = 0, l = e.length; i < l; i += 2) {
            let g = parseInt(parseInt(e.slice(i, i + 2), 16) ^ Math.floor((d / this.u) * 255));
            (o += String.fromCharCode(g)) && (d = (this.m * d + this.c) % this.u);
          }
          return decodeURIComponent(o);
        }
      }

      function dataDownload(fileName, data) {
        const url = URL.createObjectURL(new Blob([encrypt(toString(data))], { type: "text/plain;charset=utf-8" }));
        const link = cE("a", { href: url, download: fileName });
        link.click();
        URL.revokeObjectURL(url);
      }

      /* SCALE_COORDINATE_CORRECTION_FUNCTION */

      function adjustCoordinateOffset({ cur, prev = 1, props, results = debugging && new Set() }) {
        if (!CUR_WINDOW_TOP && (compareVersion({ BLINK: 128 }) || compareVersion({ GECKO: 126, more: null }))) return;
        const eventPropertiesMap = [
          { objs: [MouseEvent.prototype], props: ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "x", "y"] },
          { objs: [global, GMunsafeWindow], props: ["innerWidth", "innerHeight", "pageXOffset", "pageYOffset", "scrollX", "scrollY", ...props.window] },
          { objs: [Element.prototype], props: ["scrollLeft", "scrollTop", ...props.element] },
          { objs: [HTMLElement.prototype], props: [...props.html] },
        ];
        const processProps = ({ objs, props }) => {
          const [uO, uP] = [objs, props].map(o => uniq(o));
          uO.flatMap(obj => uP.map(prop => ({ obj, prop }))).forEach(({ obj, prop }) => definePropertyProcess(obj, prop, Reflect.getOwnPropertyDescriptor(obj, prop)));
        };
        safeObject.assign(global, { frDOMRects: { toggle: compareVersion({ BLINK: 128 }) || IS_REAL_GECKO, cur, prev } });
        try {
          eventPropertiesMap.forEach(processProps);
          if (IS_REAL_BLINK) overrideGetScreenCTM(SVGGraphicsElement.prototype);
          if (global.frDOMRects.toggle) overrideGetDOMRects(Element.prototype);
          DEBUG(`[FONTSCALE|OFFSET]${IN_FRAMES}[R:%s]: %O`, (cur / prev).toFixed(3), results || "succeed!");
        } catch (e) {
          ERROR(`${e.name} in AdjustCoordinateOffset:`, e.message);
        }

        function definePropertyProcess(obj, prop, descriptor) {
          if (!descriptor || typeof descriptor.get !== "function") return;
          const isScrollProp = "scrollLeft" === prop || "scrollTop" === prop;
          const target = isScrollProp ? HTMLHtmlElement.prototype : obj;
          const scale = isScrollProp ? cur : cur / prev;
          const value = {
            configurable: true,
            enumerable: true,
            get() {
              return descriptor.get.call(this) / scale;
            },
          };
          isScrollProp &&
            (value.set = function (Value) {
              if (Number.isFinite(Value)) this.scrollTo({ [prop === "scrollLeft" ? "left" : "top"]: Value * scale });
            });
          try {
            Reflect.defineProperty(target, prop, value) && debugging && results.add({ obj: getObjectType.call(target), prop });
          } catch (e) {
            ERROR(`${e.name} in definePropertyProcess '${prop}':`, e.message);
          }
        }

        function overrideGetScreenCTM(svg) {
          Reflect.defineProperty(svg, "getScreenCTM", {
            value: function () {
              const originalMatrix = def.const.getScreenCTM.call(this);
              const newSVGMatrix = this.ownerSVGElement?.createSVGMatrix() ?? document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
              return safeObject.assign(newSVGMatrix, ...["a", "b", "c", "d", "e", "f"].map(prop => ({ [prop]: originalMatrix[prop] / cur })));
            },
          });
          debugging && results.add({ obj: getObjectType.call(svg), prop: "getScreenCTM()" });
        }

        function overrideGetDOMRects(element) {
          Reflect.defineProperty(element, "getClientRects", { value: overrideGetClientRects });
          Reflect.defineProperty(element, "getBoundingClientRect", { value: overrideGetBoundingClientRect });
          debugging && results.add({ obj: getObjectType.call(element), prop: "getDOMRects" });
        }

        function createRect(T, scale = 1 / cur) {
          const r = DOMRect.fromRect(T);
          return new DOMRect(r.x * scale, r.y * scale, r.width * scale, r.height * scale);
        }

        function overrideGetClientRects() {
          const rects = arrayFrom(def.const.getClientRects.call(this), rect => createRect(rect));
          rects.item = index => rects[index] ?? null;
          rects[Symbol.iterator] = function* iterator() {
            for (let i = 0; i < this.length; i++) yield this[i];
          };
          return safeObject.freeze(rects);
        }

        function overrideGetBoundingClientRect() {
          return createRect(def.const.getBoundingClientRect.call(this));
        }
      }

      /* FONT_LIBRARY_OPERATION_FUNCTIONS */

      const cache = {
        value: (data, eT) => ({ data, expired: Date.now() + (typeof eT === "number" ? eT : 6048e5) }),
        set: (key, ...options) => void GMsetValue(key, encrypt(JSON.stringify(cache.value(...options)))),
        get: async key => {
          const savedValue = await GMgetValue(key);
          if (!savedValue) return;
          try {
            const { data, expired } = JSON.parse(decrypt(savedValue));
            const current = Date.now();
            DEBUG("cache Remaining: %c%s hrs", "color:#dc143c;font-weight:700", ((expired - current) / 36e5).toFixed(2));
            return data && expired > current ? data : cache.remove(key);
          } catch (_) {
            cache.remove(key);
          }
        },
        remove: key => void GMdeleteValue(key),
      };

      class FontFaceSetObserver {
        constructor() {
          safeObject.assign(this, { canvasWidth: 200, canvasHeight: 100, fontSize: 80, fontText: "Aa啊", originFont: "'Courier New',Courier,monospace", detectFontData: null });
          this.canvasContext = this._createCanvasContext();
          this.originFontData = this._checkFont(this.originFont);
        }
        static checkCanvasFingerprintProtection() {
          const canvas = cE("canvas").getContext("2d");
          const { data } = ((canvas.fillStyle = "#000"), canvas.fillRect(0, 0, 50, 50), canvas.getImageData(0, 0, 50, 50));
          const checkData = (data, i) => data[i] !== 0 || data[i + 1] !== 0 || data[i + 2] !== 0 || data[i + 3] !== 255;
          for (let i = 0; i < data.length; i += 4) if (checkData(data, i)) return (FontFaceSetObserver.checkCanvasFingerprintProtection = () => true), true;
          return (FontFaceSetObserver.checkCanvasFingerprintProtection = () => false), false;
        }
        _createCanvasContext() {
          const canvas = cE("canvas", { width: this.canvasWidth, height: this.canvasHeight });
          const canvasContext = canvas.getContext("2d", { willReadFrequently: true });
          safeObject.assign(canvasContext, { frFontFace: true, fillStyle: "#000", textAlign: "center", textBaseline: "middle" });
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
            return { fontData: arrayFrom(fontData).filter(Boolean).join(), fontWidth: l + r };
          } catch (e) {
            ERROR(`${e.name} in FontFaceSetObserver.checkFont:`, e.message);
          }
        }
        _unescape(input) {
          return input.replace(/\\[\dA-F]{4}/g, match => String.fromCharCode(parseInt(match.substr(1), 16)));
        }
        destroy() {
          this.canvasContext = this.detectFontData = this.originFontData = null;
        }
        detect(font) {
          if (typeof font !== "string" || !font) return false;
          if (this.originFont.toUpperCase().includes(font.toUpperCase())) return true;
          if (!(this.detectFontData = this._checkFont(font))) return false;
          const fontSupport = this.originFontData.fontData !== this.detectFontData.fontData && this.originFontData.fontWidth !== this.detectFontData.fontWidth;
          return fontSupport && !DEBUG("detect Fonts: <Detected>", { data: this.detectFontData, font: this._unescape(font) });
        }
      }

      function getUniqueFontlist(fontlist) {
        if (!safeArray.isArray(fontlist)) return [];
        const [result, fontMap] = [[], new Map()];
        for (let i = 0, len = fontlist.length; i < len; i++) {
          const font = fontlist[i];
          if (!font) continue;
          const [ch, en] = [font.ch, font.en];
          const idx = fontMap.get(ch) ?? fontMap.get(en);
          if (typeof idx !== "undefined") font.ps && result[idx] && !result[idx].ps && (result[idx] = font);
          else {
            const newIdx = result.push(font) - 1;
            if (ch) fontMap.set(ch, newIdx);
            if (en) fontMap.set(en, newIdx);
          }
        }
        return fontMap.clear(), result;
      }

      async function getMergedFontCheckList(defFontCheck = fontCheck) {
        try {
          const cusFontList = await GMgetValue(CUSTOMFONTS);
          const cusFontCheck = cusFontList ? JSON.parse(decrypt(cusFontList)) : [];
          return getUniqueFontlist([...defFontCheck, ...cusFontCheck]);
        } catch (e) {
          return ERROR(`${e.name} in GetMergedFontCheckList:`, e.message), GMdeleteValue(CUSTOMFONTS), [...defFontCheck];
        }
      }

      function getNonDuplicateFontArray(arra, arrb) {
        const arrbSet = new Set();
        arrayFrom(arrb).forEach(item => (arrbSet.add(item.en), arrbSet.add(item.ch)));
        return arrayFrom(arra).filter(x => !arrbSet.has(x.en) && !arrbSet.has(x.ch));
      }

      function updateDomainsIndex(domains, curHost = CUR_HOST) {
        return asArray(domains).FindIndeX(domain => domain.domain === curHost);
      }

      function updateExsitesIndex(sites) {
        const wildcardFn = domain => {
          if (typeof domain !== "string") return [];
          return domain.startsWith("*") ? new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${domain.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`) : domain;
        };
        return asArray(sites.flatMap(wildcardFn)).FindIndeX(site => (site instanceof RegExp && site.test(CUR_HOST)) || site === CUR_HOST);
      }

      function saveData(key, data) {
        try {
          sessionStorage?.removeItem(def.static.conflict);
          GMsetValue(key, encrypt(JSON.stringify(data)));
        } catch (e) {
          ERROR(`${e.name} in SaveData:`, e.message);
        }
      }

      function convertHtmlToText(htmlString) {
        if (typeof htmlString !== "string" || htmlString.trim().length === 0) return "";
        const harmfulRegexp = /expression\s*(?=\()|url\s*(?=\()|@import(?=\s)|javascript\s*:|\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}|`|{|}/gi;
        const temp = cE("fr-safeInner", { innerHTML: tTP.createHTML(htmlString.replace(harmfulRegexp, "")) });
        return temp.textContent.trim().replace(/(\s*,\s*)+$/, "");
      }

      function matchEditorialSites(hostlist) {
        return asArray(hostlist.split("|")).SomeX(hostname => CUR_HOST_NAME.endsWith(hostname));
      }

      function getFontScaleValue(isAllowFontScale, scaleValue) {
        def.array.scaleMatrix.push((def.var.curScale = isAllowFontScale && scaleValue >= 0.8 && scaleValue <= 2.5 ? scaleValue : INITIAL_VALUES.fontSize));
        return Number(def.var.curScale).toFixed(3);
      }

      function getFontOverrideData(fontArray) {
        if (!safeArray.isArray(fontArray)) return [];
        return fontArray.reduce((acc, font) => {
          if (typeof font !== "string") return acc;
          const chsFont = font.match(/^{([^{}]+)}$/);
          return acc.concat([chsFont ? convertToUnicode(chsFont[1]) : font]);
        }, []);
      }

      async function setRootSelector() {
        const rootID = await requestHTML.startObserver().then(res => res?.target.id); // Fit::IS_GREASEMONKEY & Blink < 130::IFRAME_STYLE_PARSING
        return !rootID || (!CUR_WINDOW_TOP && (compareVersion({ BLINK: 130, more: null }) || IS_GREASEMONKEY)) ? `:root ` : `:root#${rootID} `;
      }

      async function getRenderRules(tmp) {
        try {
          const response = await fetch(`${def.url.predefined}?${generateRandomString(32, "hex")}`);
          if (!response.ok) throw new Error(`Network response was not OK. Status: ${response.status}`);
          const text = await response.text();
          if (!safeArray.isArray((tmp = JSON.parse(text))) || !(tmp = tmp.length)) return ERROR("Error: Invalid predefined data!");
          return DEBUG(`Pull predefined data: %cSucceeded (${text.length}, ${tmp})`, "color:#008000"), text;
        } catch (e) {
          ERROR(`${e.name} in getRenderRules:`, e.message);
        }
      }

      function applyPredefinedRenderRules(predefinedData, data) {
        if (!predefinedData) return data;
        try {
          const findFn = ([host]) => host.includes(CUR_HOST_NAME) || asArray(host).SomeX(h => h.startsWith("*") && CUR_HOST_NAME.endsWith(h.slice(1)));
          const rules = asArray(JSON.parse(JSON.parse(decrypt(predefinedData)))).FindX(findFn);
          if (!(def.var.apply = Boolean(rules))) return data;
          for (const [key, rule] of safeObject.entries(rules[1])) {
            if (!rule || !(key in data)) continue;
            const [action, param] = rule.split("∯", 2);
            if (action === "+") !data[key].includes(param) && (data[key] += `${param}`);
            else if (action === "-") data[key] = data[key].replace(new RegExp(param.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "");
            else if (action === "@") data[key] = Boolean(Number(param));
            else if (action === "#") data[key] = param;
          }
        } catch (e) {
          ERROR(`${e.name} in ApplyPredefinedRenderConfig:`, e.message) ?? GMdeleteValue(REMOTERENDERDATA);
        }
        return data;
      }

      /* FONT_RENDERING_PREPROCESSING */

      void (async function (requestCodeAndFunc, getConfigureData, getCustomMonoData, getExSitesData, getFontSetData, getFontScaleDef, getFontOverrideDef, getFontProperty) {
        const { code: ROOT_SECRET_KEY, callback, cipherInstance = new SecureCipherSuite(ROOT_SECRET_KEY) } = requestCodeAndFunc();
        if (!RC2 || !inspectLicense()?.inspect?.()) return CUR_WINDOW_TOP && callback(`${def.url.homepage}index${IS_CHN ? "" : "_en"}.html`);
        const requestBackendData = await Promise.all([setRootSelector(), getFontOverrideDef(), getConfigureData(), getExSitesData(), getCustomMonoData(), getFontProperty()]);
        const [globalPrefix, fontOverrideDefData, _config_data_, { exSitesIndex }, { monoSiteRules, monoFontList, monoFeature }, { fontFeature, fontVariant }] = requestBackendData;
        const { maxPersonalSites, isBackupFunction, isPreview, isFontsize, isHotkey, isFixViewport, isCloseTip, isCustomMono, rebuild, curVersion, globalDisable } = _config_data_;
        const [NOT_IN_EXCLUSION_LIST, NON_FRAMEWORK] = [!~exSitesIndex, IS_GREASEMONKEY && !["Userscripts", "tamp", "OrangeMonkey"].includes(GMscriptHandler)];
        const [addLoadEvents, CONST_VALUES] = [new ReadyStateEventsRegistry(), await getFontSetData(isFontsize, isFixViewport)];
        const DOCUMENTID_REGEXP = new RegExp("\\b#[\\u{1D68A}-\\u{1D6A3}\\w\\-\\u{1D670}-\\u{1D689}]+(?=\\s)", "gu");

        /* CONVERT_FONT_PARAMETERS_TO_REALTIME_STYLE */

        const customFontFeature = `${fontFeature ? `--fr-font-feature:${fontFeature};` : ``}${fontVariant ? `--fr-font-variant:${fontVariant};` : ``}`;
        const selectedFontArray = CONST_VALUES.o.fontSelect?.replace(/["']/g, "").split(",") ?? [];
        const selectedFont = selectedFontArray[1] ?? selectedFontArray[0] ?? "";
        const [fontface_i, smooth_i] = [Boolean(CONST_VALUES.o.fontFace), Boolean(CONST_VALUES.o.fontSmooth)];
        const fontFamily = fontface_i ? "font-family:var(--fr-font-family),var(--fr-font-basefont),var(--fr-font-emoji);" : "";
        const fontFaces = fontface_i && selectedFont ? await generateFontFaceCSS(selectedFontArray, selectedFont, fontOverrideDefData) : "";
        const fontsize_r = getFontScaleValue(NOT_IN_EXCLUSION_LIST && isFontsize, parseFloat(CONST_VALUES.o.fontSize));
        const bodyScalecssText = Number(fontsize_r) !== 1 ? generateFontSizeCss(fontsize_r) : "";
        const smoothGecko = IS_REAL_GECKO && IS_MACOS ? "-moz-osx-font-smoothing:grayscale;" : "";
        const smoothMac = !IS_CHEAT_UA && IS_MACOS ? "-webkit-font-smoothing:antialiased;" : "";
        const fontSmoothCssText = `font-feature-settings:var(--fr-font-feature,unset);font-variant:var(--fr-font-variant,unset);text-rendering:var(--fr-render-text,unset);shape-rendering:var(--fr-render-shape,unset);image-rendering:var(--fr-render-image,unset);font-optical-sizing:auto;font-kerning:auto;${smoothGecko}${smoothMac}`;
        const smoothing = smooth_i ? fontSmoothCssText : "";
        const [stroke_r, shadow_r] = [parseFloat(CONST_VALUES.o.fontStroke), parseFloat(CONST_VALUES.o.fontShadow)];
        const textStroke = stroke_r > 0 && stroke_r <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
        const strokeCssText = `${textStroke ? stroke_r : 0}px currentcolor`;
        const shadow_c = String(CONST_VALUES.o.shadowColor) || INITIAL_VALUES.shadowColor;
        const parseColor = color => (/^(?:#F{8}|currentcolor)$/i.test(color) ? "currentcolor" : color.toUpperCase());
        const revertColor = value => (/^currentcolor$/i.test(value) ? "#FFFFFFFF" : value);
        const textShadow = shadow_r > 0 && shadow_r <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
        const shadowCssText = generateTextShadow(shadow_r, shadow_c);
        const excludeSplit = `${textShadow ? "text-shadow:none!important;" : ""}${textStroke ? "-webkit-text-stroke:var(--fr-no-stroke, 0px transparent)!important;" : ""}`;
        const [inText, exText] = [String(CONST_VALUES.o.fontCSS), String(CONST_VALUES.o.fontEx)];
        const selectionGeckoCSS = `:is(:not(${exText}))::-moz-selection{color:currentcolor!important;background:#1ebee34a!important;-webkit-text-fill-color:currentcolor!important;${excludeSplit}}`;
        const selectionWebkitCSS = `:is(:not(${exText}))::selection{color:#fff!important;background:#3367d1!important;-webkit-text-fill-color:#fff!important;${excludeSplit}}`;
        const selectionCssText = textStroke ? (IS_REAL_GECKO ? selectionGeckoCSS : selectionWebkitCSS) : "";
        const cssExclude = exText && (textShadow || textStroke) ? `${globalPrefix}:is(${exText}){${excludeSplit}}` : ``;
        const [codeFonts, shadowCode] = [false, true].map(i => funcCodefont(exText, fontface_i, isCustomMono, i));
        const noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && CONST_VALUES.o.fixShadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
        const boldFixSelector = `[${def.const.boldAttrName}],.${def.const.boldAttrName}`;
        const getBoldFixCssText = shadow => `${boldFixSelector}{font-synthesis:weight style!important;-webkit-text-stroke:var(--fr-fix-stroke)!important;${shadow ?? ""}}`;
        const boldFixCSSText = IS_CAUSED_BOLDSTROKEERROR && CONST_VALUES.o.fixStroke ? getBoldFixCssText(noTextShadowCss) : "";
        const IS_EMPTY_CONFIG = !fontface_i && !smooth_i && !textShadow && !textStroke && Number(fontsize_r) === 1;
        const isFixInputEnabled = fi => fi === "true" || (!fi && /;?\s*\w+_last(?:visi|ac)t=\d{10}(?:;|%)/.test(document.cookie) && !localStorage?.setItem(IS_DISCUZ, true));
        const discuzIcon = isFixInputEnabled(localStorage?.getItem(IS_DISCUZ)) ? ":not(.nvhm,[class^='ico_'],[class^='comiis_'],[class^='notice_'],[class^='prompt_'])" : "";
        const fontFamilyStyle = fontFamily ? `${globalPrefix}::placeholder,${globalPrefix}:is(${inText}${discuzIcon}){${fontFamily}}` : ``;
        const fontAdvenceedStyle = `${globalPrefix}:is(${inText}){${textShadow}${textStroke}${smoothing}}`;
        const fontStyle = `${fontFaces}${bodyScalecssText}${fontFamilyStyle}${fontAdvenceedStyle}${selectionCssText}${cssExclude}${codeFonts}${boldFixCSSText}`;
        const firefoxInputFix = IS_REAL_GECKO & fontface_i && isFixInputEnabled(localStorage?.getItem(IS_DISCUZ)) ? def.var.style.firefox : "";
        const [monoAllowed, isEditorBlock, supportMix] = [Boolean(isCustomMono), Boolean(CONST_VALUES.o.isEditorBlock), CSS.supports("(color:color-mix(in srgb, tan, red))")];
        const monoShadowColor = monoAllowed && supportMix ? `--fr-mono-shadowcolor:color-mix(in display-p3, #4545461b 70%, currentcolor 20%);` : ``;
        const monoFontText = monoAllowed ? `--fr-mono-font:${monoFontList || INITIAL_REMARKS.monospacedFont};` : ``;
        const monoShadow = monoAllowed ? `--fr-mono-shadow:0 0 0 var(--fr-mono-shadowcolor, currentcolor);` : ``;
        const monoFeatureText = monoAllowed ? `--fr-mono-feature:${monoFeature || INITIAL_REMARKS.monospacedFeature};` : ``;
        const monoFallback = monoAllowed ? `--fr-mono-fallback:ui-monospace,'Courier New','Liberation Mono',Courier;` : ``;
        const sharpRender = CONST_VALUES.o.renderCanvas ? `--fr-render-shape:geometricPrecision;` : ``;
        const rootPseudoClass = `:root{--fr-font-basefont:${INITIAL_REMARKS.fontBase};--fr-font-emoji:${INITIAL_REMARKS.fontEmoji};${customFontFeature}--fr-font-fontscale:${fontsize_r};--fr-font-family:${CONST_VALUES.o.fontSelect};--fr-font-shadow:${shadowCssText};--fr-font-stroke:${strokeCssText};--fr-no-stroke:0px transparent;--fr-fix-stroke:var(--fr-no-stroke);--fr-fix-shadow:none;--fr-render-text:optimizeLegibility;${sharpRender}--fr-render-image:auto;${monoFontText}${monoFallback}${monoShadowColor}${monoShadow}${monoFeatureText}}`;
        const IS_CURRENTSITE_ALLOWED = NOT_IN_EXCLUSION_LIST && !IS_EMPTY_CONFIG;
        const tStyle = IS_CURRENTSITE_ALLOWED ? `${rootPseudoClass}${firefoxInputFix}${fontStyle}` : ``;

        /* FR_CONFIGURE_SHADOWROOT_CONTENT */

        const disableText = IS_CHN ? "已在特定/图文/编辑类网站禁用（请使用浏览器缩放替代）" : "Disabled in specific/graphic/editorial website (Please use browser zoom instead)";
        const isDisabled = isEditorBlock ? `disabled title="${disableText}" ` : ``;
        const canvasLabel = IS_CHN
          ? `<label title="开启 Canvas 画布文本的字体渲染。如开启后 Canvas 文本渲染异常请关闭它。">渲染画布</label>`
          : `<label title="Enable Canvas font rendering. Please turn it off if occurs canvas render error.">Canvas</label>`;
        const [canvasClass, canvasCheck] = [fontface_i ? `` : `class="${def.const.seed}.vis:hidden"`, CONST_VALUES.renderCanvas ? "checked" : ""];
        const tRenderCanvas = `<span id="${def.id.rdCanvas}" ${canvasClass}>(${canvasLabel}<input type="checkbox" id="${def.id.renderCanvas}" ${canvasCheck}/>)</span>`;
        const fixViewportLabel = IS_CHN
          ? `<label title="修正字体比例缩放后视口单位出现数据偏移的问题。如开启后页面排版出现异常请关闭它。">视口修正</label>`
          : `<label title="Fixed viewport unit offset after font scaling. Please turn it off if occurs layout error.">Fix vpu</label>`;
        const tFixViewport = `<span id="${def.id.fviewport}">(${fixViewportLabel}<input type="checkbox" id="${def.id.fixViewport}" ${CONST_VALUES.fixViewport ? "checked" : ""}/>)</span>`;
        const fontSizeSpan = IS_CHN ? ["双击编辑站点缩放修正设置数据", "字体比例缩放"] : ["Double-click to edit the site scaling correction setting", "Font Scaling"];
        const tFontSizeHTML = `<li id="${def.id.fontSize}">
            <div class="${def.class.flex}">
              <span class="${def.const.seed}.mg:0.pd:0" title="${fontSizeSpan[0]}" id="${def.const.seed}.fontscale.def">${fontSizeSpan[1]}</span>${isFixViewport ? tFixViewport : ""}
              <input id="${def.id.fontScale}" type="text" data-fr-type="number" maxlength="5" ${isDisabled}/>
            </div>
            <div class="${def.class.range}" data-ticks-position="top" ${isDisabled}></div>
          </li>`;
        const FixStrokeLabel = IS_CHN
          ? `<label title="修正 Chromium 96.0 以上版本对粗体样式附加描边的渲染错误。默认开启，如出现严重卡顿请关闭之。">粗体修正</label>`
          : `<label title="Fixed rendering issues of Chromium above 96.0 on bold with text-stroke. Default by ON, please turn it off if lagging.">Fix bold</label>`;
        const fixShadowLabel = IS_CHN ? `修正 Chromium 123.0+ 对粗体样式附加阴影的渲染错误，默认关闭。` : `Fixed rendering issues of Chromium 123.0+ on bold with text-shadow.`;
        const lazyloadLabel = IS_CHN ? `延迟加载修正程序，默认关闭，仅样式加载异常或执行冲突时开启。` : `Lazy loading the fixer, Only turn it on when style loading error or conflict.`;
        const tFixShadowHTML = `<div id="${def.id.fshadow}.shadow.label" class="${def.const.seed}.fix.label">
            <span>${IS_CHN ? "附加阴影样式修正：" : "Add Shadow Fix: "}</span>
            <input type="checkbox" class="${def.class.checkbox}" id="${def.id.fixShadow}" ${CONST_VALUES.fixShadow ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
            <label for="${def.id.fixShadow}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}.ft:gs1"`}></label>
          </div>
          <div id="${def.id.fshadow}.shadow.text" class="${def.const.seed}.fix.text">${fixShadowLabel}</div>`;
        const tLazyloadHTML = `<div class="${def.const.seed}.fix.label">
            <span>${IS_CHN ? "使用延迟加载修正：" : "Use Lazyload Fix:"}</span>
            <input type="checkbox" class="${def.class.checkbox}" id="${def.id.lazyload}" ${CONST_VALUES.lazyload ? "checked" : ""} ${CONST_VALUES.fixStroke ? "" : "disabled"} />
            <label for="${def.id.lazyload}" ${CONST_VALUES.fixStroke ? `` : `class="${def.const.seed}.ft:gs1"`}></label>
          </div>
          <div class="${def.const.seed}.fix.text">${lazyloadLabel}</div>`;
        const tFixStrokeHTML = `<span id="${def.id.fstroke}">
            (${FixStrokeLabel}<input type="checkbox" id="${def.id.fixStroke}" ${CONST_VALUES.fixStroke ? "checked" : ""} />)
            <div id="${def.id.fshadow}">${IS_CAUSED_BOLDSHADOWERROR ? tFixShadowHTML : ""}${tLazyloadHTML}</div>
          </span>`;
        const fontfaceSpan = IS_CHN ? ["双击编辑自定义字体重写数据", "字体重写（默认：开）"] : ["Double-click to edit custom font rewrite data", "Font Rewrite (ON*)"];
        const colorFormat = global.FRColorPicker ? "RGB, RGBA, HEX, HEXA" : "HEXA (#AABBCCDD)";
        const shadowColorTipHTML = IS_CHN
          ? `<p>阴影颜色可通过点击激活拾色器选择，也可自行填写，格式支持: <em class="${def.const.seed}.clr:cecece">${colorFormat}.</em> 纯白色的所有格式表示自身颜色 <em class="${def.const.seed}.clr:cecece">currentcolor.</em></p><p><em class="${def.const.seed}.clr:8b0000">注意：输入数值会自动转化为HEXA格式，但数值保持一致性。错误格式会被替换为刚刚正确显示的数值。</em></p>`
          : `<p>Shadow colors can be selected by clicking color-block to activate the colorpicker, or custom filled in format that supports: <em class="${def.const.seed}.clr:cecece">${colorFormat}.</em> "Pure white" in all formats resolves to its own color <em class="${def.const.seed}.clr:cecece">currentcolor</em></p><p><em class="${def.const.seed}.clr:8b0000">Note: The value is converted to HEXA. The incorrect value is replaced with the final correct value.</em></p>`;
        const fontCSSTipHTML = IS_CHN
          ? `<p>默认排除大多数网站常用的特殊CSS样式后需要渲染的页面元素。填写格式：<em class="${def.const.seed}.clr:cecece">:not(.fa)</em> 或 <em class="${def.const.seed}.clr:cecece">:not([class*="fa"])</em> 或 <em class="${def.const.seed}.clr:cecece">,div.className</em></p><p><em class="${def.const.seed}.clr:8b0000">该选项为重要参数，默认只读，双击解锁。请尽量不要随意修改，避免造成样式失效。若失效请重置。</em></p><p>如果文字或图标变为乱码或方块，请双击 <span class="${def.class.emoji}">\ud83d\udd14</span> 打开样式修复帮助页面。</p>`
          : `<p>Defaults to page elements that need to be rendered after excluding special CSS styles used on websites. Fill format: <em class="${def.const.seed}.clr:cecece">:not(.fa)</em> or <em class="${def.const.seed}.clr:cecece">:not([class*="fa"])</em></p><p><em class="${def.const.seed}.clr:8b0000">This option is an important parameter, read-only by default, double-click to unlock.</em></p><p>If part of text becomes garbled, Please double-click <span class="${def.class.emoji}">\ud83d\udd14</span> to open the style-fix help page.</p>`;
        const fontExTipHTML = IS_CHN
          ? `<p>该选项排除渲染字体描边、字体阴影效果，请将排除渲染的HTML标签用逗号分隔。具体规则请点击顶部旋转的帮助文件图标。</p><p><em class="${def.const.seed}.clr:8b0000">编辑该选项需要CSS知识，如出现语法错误造成样式无效请重置。</em></p><p>双击 <span class="${def.class.emoji}">\ud83d\udd14</span> 可打开自定义等宽字体添加工具，设置您需要的等宽字体。</p><p><em class="${def.const.seed}.clr:8b0000">请注意：使用自定义等宽字体时，请谨慎删除该文本域中的重要代码：<br/>『 <em class="${def.const.seed}.clr:cecece">pre,pre *,code,code *</em> 』</em></p>`
          : `<p>This option excludes the rendering of font stroke, font shadow effects, please separate the excluded HTML tags with commas.</p><p><em class="${def.const.seed}.clr:8b0000">Knowledge of CSS is required to edit this option, please reset if the style to be invalid.</em></p><p>Double-click <span class="${def.class.emoji}">\ud83d\udd14</span> to open the Custom monospace Font Tool and set the isometric font you need.</p><p><em class="${def.const.seed}.clr:8b0000">Note: if using custom monospace fonts, Please be careful to delete important codes in this textarea:『 <em class="${def.const.seed}.clr:cecece">pre,pre *,code,code *</em> 』</em></p>`;
        const title = IS_CHN ? `双击查看更新历史：${def.var.scriptName}` : `Double-click to view the update history of ${def.var.scriptName}`;
        const tHTML = `<fr-container id="${def.id.container}">
          <fr-scrollbar class="${def.const.seed}.dialog.scrollbar">
            <fieldset id="${def.id.field}">
              <legend class="${def.class.title}">
                <span id="${def.const.seed}.scriptname" title='${title} v${curVersion}' class="${def.const.seed}.clr:8b0000">${def.var.scriptName}</span>
                <span class="${def.class.guide}">
                  <span class="${def.class.rotation}" title="${IS_CHN ? "单击查看脚本使用文档" : "Click to Open Usage Document"}" height="24" width="24">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0,0,255.99431,255.99431"><g transform="scale(0.5,0.5)"><path d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z" fill="#67a5df"/><path d="M146.1,181.5c0,-13.9 4.5,-28 13.4,-42.3c8.9,-14.3 22,-26.1 39.1,-35.5c17.1,-9.4 37.1,-14.1 60,-14.1c21.2,0 40,3.9 56.2,11.8c16.3,7.8 28.8,18.5 37.7,32c8.9,13.5 13.3,28.1 13.3,43.9c0,12.5 -2.5,23.4 -7.6,32.7c-5.1,9.4 -11.1,17.5 -18,24.3c-7,6.8 -19.4,18.3 -37.5,34.4c-5,4.5 -9,8.5 -12,12c-3,3.4 -5.2,6.6 -6.7,9.4c-1.5,2.9 -2.6,5.7 -3.4,8.6c-0.8,2.9 -2,7.9 -3.6,15.1c-2.8,15.2 -11.5,22.9 -26.1,22.9c-7.6,0 -14,-2.5 -19.2,-7.5c-5.2,-5 -7.8,-12.4 -7.8,-22.2c0,-12.3 1.9,-23 5.7,-32c3.8,-9 8.9,-16.9 15.2,-23.7c6.3,-6.8 14.8,-14.9 25.5,-24.3c9.4,-8.2 16.1,-14.4 20.3,-18.6c4.2,-4.2 7.7,-8.8 10.5,-14c2.9,-5.1 4.3,-10.7 4.3,-16.7c0,-11.7 -4.4,-21.6 -13.1,-29.7c-8.7,-8.1 -20,-12.1 -33.7,-12.1c-16.1,0 -28,4.1 -35.6,12.2c-7.6,8.1 -14.1,20.1 -19.3,35.9c-5,16.6 -14.4,24.8 -28.3,24.8c-8.2,0 -15.1,-2.9 -20.8,-8.7c-5.6,-5.6 -8.5,-11.8 -8.5,-18.6zM253.4,422.3c-8.9,0 -16.7,-2.9 -23.4,-8.7c-6.7,-5.8 -10,-13.9 -10,-24.3c0,-9.2 3.2,-17 9.7,-23.3c6.4,-6.3 14.4,-9.4 23.7,-9.4c9.2,0 17,3.2 23.3,9.4c6.3,6.3 9.4,14.1 9.4,23.3c0,10.3 -3.3,18.3 -9.9,24.2c-6.6,5.9 -14.2,8.8 -22.8,8.8z" fill="#fff"/></g></svg>
                  </span>
                </span>
              </legend>
              <ul class="${def.class.main}">
                <li id="${def.id.fontList}">
                  <div class="${def.class.fontList}"></div>
                </li>
                <li id="${def.id.fontFace}">
                  <div class="${def.const.seed}.mg:0.pd:0"><span title="${fontfaceSpan[0]}" id="${def.const.seed}.fontrewrite.def">${fontfaceSpan[1]}</span></div>
                  <div class="${def.const.seed}.mg:0.pd:0 ${def.const.seed}.checkbox">
                    <input type="checkbox" id="${def.id.fface}" class="${def.class.checkbox}" ${CONST_VALUES.fontFace ? "checked" : ""} />
                    <label for="${def.id.fface}"></label>
                  </div>
                </li>
                <li id="${def.id.fontSmooth}">
                  <div class="${def.const.seed}.mg:0.pd:0">${IS_CHN ? "字体平滑（默认：开）" : "Font Smooth (ON*)"}</div>
                  <div class="${def.const.seed}.mg:0.pd:0 ${def.const.seed}.checkbox">
                    <input type="checkbox" id="${def.id.smooth}" class="${def.class.checkbox}" ${CONST_VALUES.fontSmooth ? "checked" : ""} />
                    <label for="${def.id.smooth}"></label>
                  </div>
                </li>
                ${isFontsize ? tFontSizeHTML : ""}
                <li id="${def.id.fontStroke}">
                  <div class="${def.class.flex}">
                    <span class="${def.const.seed}.mg:0.pd:0">${IS_CHN ? "字体描边尺寸" : "Font Stroke"}</span>
                    ${IS_CAUSED_BOLDSTROKEERROR ? tFixStrokeHTML : ""}
                    <input id="${def.id.strokeSize}" type="text" data-fr-type="number" maxlength="5" />
                  </div>
                  <div class="${def.class.range}" data-ticks-position="top"></div>
                </li>
                <li id="${def.id.fontShadow}">
                  <div class="${def.class.flex}">
                    <span class="${def.const.seed}.mg:0.pd:0">${IS_CHN ? "字体阴影尺寸" : "Font Shadow"}</span>
                    ${IS_GREASEMONKEY ? "" : tRenderCanvas}
                    <input id="${def.id.shadowSize}" type="text" data-fr-type="number" maxlength="4" />
                  </div>
                  <div class="${def.class.range}" data-ticks-position="top"></div>
                </li>
                <li id="${def.id.shadowColor}">
                  <div class="${def.const.seed}.mg:0.pd:0">
                    <span class="${def.const.seed}.mg:0-3p.pd:0">${IS_CHN ? "阴影颜色" : "SDColor"}</span>
                    <span class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Press and hold for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps3} ${def.const.seed}.mgl:-5p">
                        ${shadowColorTipHTML}
                      </span>
                    </span>
                  </div>
                  <div class="${def.class.frColorPicker}">
                    <input title="${IS_CHN ? "输入颜色代码" : "Input color code"}" type="text" id="${def.id.color}" class="${def.const.seed}.input.color" />
                  </div>
                </li>
                <li id="${def.id.fontCss}">
                  <div class="${def.const.seed}.mgb:6p">${IS_CHN ? "需要渲染的网页元素" : "Rendered Elements"}
                    <span id="${def.id.render}" class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Press and hold for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps4}">${fontCSSTipHTML}</span>
                    </span>
                    <div id="${def.id.cSwitch}" class="${def.class.switcher}" fr-button-switch="ON">\u2227</div>
                  </div>
                  <textarea placeholder="${IS_CHN ? "请谨慎修改默认值，避免渲染失效。" : "Please modify the default value carefully to avoid rendering failure."}"
                    class="${def.class.readonly}" title="${IS_CHN ? "重要参数，默认只读，双击解锁。" : "Read-only by default, Double-click to unlock."}"
                    id="${def.id.cssinclued}" readonly="readonly">${CONST_VALUES.fontCSS}</textarea>
                </li>
                <li id="${def.id.fontEx}">
                  <div class="${def.const.seed}.mgb:6p">${IS_CHN ? "排除渲染的HTML标签" : "Excluded HTML Labels"}
                    <span id="${def.id.mono}" class="${def.class.tooltip}">
                      <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Press and hold for help"}">\ud83d\udd14</span>
                      <span class="${def.class.tooltip} ${def.class.ps5}">${fontExTipHTML}</span>
                    </span>
                    <div id="${def.id.eSwitch}" class="${def.class.switcher}" fr-button-switch="ON">\u2227</div>
                  </div>
                  <textarea placeholder="${IS_CHN ? "排除渲染描边与阴影的HTML标签，如:" : "Exclude HTML tags that render strokes and shadows, such as:"} input, em, div[id$='test']"
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
          </fr-scrollbar>
        </fr-container>`;

        /* SHOW_SCRIPT_PACKAGE_INFORMATION */

        const showSystemInfo = {
          system: function () {
            const disabledMessage = IS_CHN ? "全局字体渲染已禁用！如需开启请重新配置全局数据。" : "Global font rendering is disabled! To enable it please reconfigure the global data.";
            const formattedStatusMessage = IS_CHN
              ? `%c%s\r\n%cINTRO.URL: %s\r\n%c\u259e 脚本版本：%cV%s%c%s%c\r\n\u259e 个性化设置：%c%s%c/%s（当前设置：%s）\r\n%c\u259e 本地备份：%s\u3000\u259a 字体缩放：%s\r\n\u259e 渲染预览：%s\u3000\u259a 等宽字体：%s\r\n\u259e 应用远程渲染规则：%c%s\r\n%c\u259e 渲染字体：%s\r\n\u259e 字体平滑：%s\u3000\u259a 字体重写：%s\r\n\u259e 字体描边：%s\u3000\u259a 字体阴影：%s`
              : `%c%s\r\n%cINTRO.URL: %s\r\n%c\u259e Script Version: %cV%s%c%s%c\r\n\u259e Customize Total: %c%s%c/%s (current: %s)\r\n%c\u259e Backups: %s\u3000\u259a Font Scaling: %s\r\n\u259e Preview: %s\u3000\u259a Monospaced Font: %s\r\n\u259e Remote Rendering Rules：%c%s\r\n%c\u259e Rendering Font: %s\r\n\u259e Font Smooth: %s\u3000\u259a Font Rewrite: %s\r\n\u259e Font Stroke: %s\u3000\u259a Font Shadow: %s`;
            const [ON, OFF, SITEBLOCK] = IS_CHN ? ["开", "关", "站点禁用"] : ["ON", "OFF", "SITE BLOCKED"];
            const formattedStyle = [
              "color:#dc143c;font:normal 700 16px/150% ui-monospace,monospace",
              def.var.scriptName,
              "color:#777;font:italic 400 10px/180% ui-monospace,monospace",
              def.url.homepage,
              "color:#708090;font-size:12px;line-height:180%",
              "color:#708090;font:italic 600 14px/150% Candara,Times",
              def.var.curVersion,
              "color:#be0d1c;font:italic 400 11px/150% Candara,Times",
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
              `color:${def.var.apply ? "#4682b4" : "#708090"};font-size:12px;line-height:180%`,
              IS_CHN ? (def.var.apply ? "已匹配到站点规则" : "未匹配到站点规则") : def.var.apply ? "MATCHED" : "NOT MATCHED",
              "color:#008080;font-size:12px;line-height:180%",
              fontface_i ? def.var.reFontFace : IS_CHN ? `\u5df2\u5173\u95ed\uff08\u91c7\u7528${def.var.reFontFace}\uff09` : `OFF (using ${def.var.reFontFace})`,
              CONST_VALUES.fontSmooth ? ON : OFF,
              CONST_VALUES.fontFace ? ON : OFF,
              CONST_VALUES.fontStroke ? ON : OFF,
              CONST_VALUES.fontShadow ? ON : OFF,
            ];
            const shortcut = isHotkey && !IS_CHEAT_UA ? `(${IS_MACOS ? "Option" : "Alt"}+X)` : ``;
            const rerenderText = IS_CHN ? `已在排除渲染列表内，若要重新渲染，请在脚本菜单中开启。` : `is already in the excluded rendering list. To re-render, enable it in the script menu.`;
            if (globalDisable && IS_EMPTY_CONFIG) this.logMessage("shown-system-disabled", disabledMessage, "#be0d1c");
            else if (NOT_IN_EXCLUSION_LIST) __console("shown-system-info", formattedStatusMessage, ...formattedStyle);
            else this.logMessage("shown-system-disabled", `"${TOP_HOST.toLowerCase()}" ${rerenderText} ${shortcut}`, "#aa56e7");
          },
          compat: isCheatUA => {
            const isCompatible = compareVersion({ BLINK: 90, GECKO: 84, WEBKIT: 15.4 });
            const compatibleMessage = `%c${brand} Browser Compatible: ${isCompatible}%c\r\nOnly desktop browsers support full functionality for this script. (Version: Chrome>=90, Edge>=90, Firefox>=84, Opera>=78, Safari>=15.4)`;
            const compatibleWarning = IS_CHN ? "您的浏览器版本过低，脚本可能无法正常运行！" : "Your browser version is too low, the script may not work properly!";
            const compatibleStyles = [`${fullStyle("#dc143c")};text-transform:uppercase`, "color:0;line-height:150%"];
            const cheatUAWarning = IS_CHN
              ? `%c浏览器 UA 异常警告%c\r\n伪造 UserAgent 信息会造成部分脚本功能失效。如需使用全功能脚本，请恢复浏览器默认的 UserAgent 信息。`
              : `%cBrowser UA Exception%c\r\nModifying UserAgent information will cause some script functions to become invalid. To use the full-featured script, please restore the browser's default UserAgent information.`;
            const cheatUAStyles = [`${fullStyle("#715100")};text-transform:uppercase`, "color:0;line-height:150%"];
            if ((navigatorInfo["cheat-ua"] = isCheatUA)) __console("warn", cheatUAWarning, ...cheatUAStyles);
            if (!isCompatible && !isCheatUA) __console("error", `%c${compatibleWarning}`, "color:#be0d1c;font:italic 700 18px ui-monospace,monospace");
            INFO(`${compatibleMessage}%c\r\n${JSON.stringify(navigatorInfo)}`, ...compatibleStyles, "color:#a9a9a9;font:italic 400 12px/150% ui-monospace,monospace");
          },
          logMessage: (type, message, color) => {
            const msgStyle = ["color:#dc143c;font:normal 700 16px/150% monospace", "color:#777;font:italic 400 10px/180% monospace", `color:${color};font:normal 500 12px/180% monospace`];
            __console(type, `%c${def.var.scriptName}\r\n%cINTRO.URL: ${def.url.homepage}\r\n%c${message}`, ...msgStyle);
          },
        };

        function getExactFrameStyle(cssData, target) {
          const sheet = getMainStyleSheets({ target })[0] ?? object();
          const ownerDocumentId = target?.documentElement?.id;
          const filter = compareVersion({ BLINK: 130, more: null }) || IS_GREASEMONKEY || !ownerDocumentId ? `` : `#${ownerDocumentId}`;
          if (compareVersion({ BLINK: 128, GECKO: 138 })) cssData = cssData.replace("var(--fr-font-fontscale)", "initial");
          return { id: sheet.id || getSheetMetadata(sheet).id || def.id.rndStyle, css: cssData.replace(DOCUMENTID_REGEXP, filter) };
        }

        function adoptStyleIntoFrames({ action, nodeArray, cssText }) {
          if (!CUR_WINDOW_TOP || !NOT_IN_EXCLUSION_LIST || (action !== "Preview" && IS_EMPTY_CONFIG)) return;
          if (def.array.sources.size > 0) return updateFrameworksStyle(def.array.sources, action, cssText ?? tStyle);
          if (!safeArray.isArray(nodeArray)) nodeArray = qA("html>:not(head) *").flatMap(el => (el.shadowRoot ? qA("iframe", el.shadowRoot) : getNodeName(el) === "iframe" ? [el] : []));
          updateFrameworksStyle(nodeArray, action, cssText ?? tStyle);
        }

        function updateFrameworksStyle(sources, action, data) {
          if (sources instanceof Set) return sources.forEach(s => s?.postMessage({ fontRenderX: { command: "𝐬𝐞𝐧𝐝", data, action } }));
          sources.forEach(node => {
            const rect = node.getBoundingClientRect();
            if ((rect.width <= 4 && rect.height <= 4) || isAccessProhibited(node.src)) return;
            if (node.hasAttribute("sandbox")) node.removeAttribute("sandbox");
            if (NON_FRAMEWORK && action !== "Preview") safeAddEventListener(node, "load", () => insertFrameStyle(node, "Passive", data), true);
            insertFrameStyle(node, action, data);
          });
        }

        function insertFrameStyle(node, action, data) {
          try {
            const target = node.contentWindow.document;
            if (action === "DOMLoaded" && asArray(target.adoptedStyleSheets).SomeX(s => getSheetMetadata(s).id)) return;
            const { css, id } = getExactFrameStyle(data, target);
            if (!updateInternalStyle({ target, css, id, media: "screen", writable: action !== "DOMLoaded", primary: true, forceStyle: true })) return;
            node.setAttribute(def.const.iframeAttrName, action) ?? COUNT(`[ASYNCFRAMES:${target.documentElement.id || "(Empty)"}][ACT:${action}]`);
            correctBoldPassive("iframe", boldFixCSSText, target, true);
          } catch (e) {
            NON_FRAMEWORK && ERROR(`${e.name} in InsertFrameStyle:`, { node, action, msg: e.message });
          }
        }

        function handleFrameworkEvent() {
          if (CUR_WINDOW_TOP) {
            return GMunsafeWindow.top.addEventListener("message", event => {
              if (!event.ports?.length || event.data?.fontRenderX?.command !== "𝐫𝐞𝐪𝐮𝐞𝐬𝐭") return;
              const portFromIframe = event.ports[0];
              const { action, data = def.var.topStyle ?? tStyle } = event.data.fontRenderX;
              if (action === "DOMLoaded") def.array.sources.add(portFromIframe);
              portFromIframe.start() ?? portFromIframe.postMessage({ fontRenderX: { command: "𝐬𝐞𝐧𝐝", data, action } });
            });
          }
          if (isAccessProhibited(global.location.href)) return;
          const fontMessageFn = event => {
            if (~def.var.domainIndex || event.data?.fontRenderX?.command !== "𝐬𝐞𝐧𝐝") return;
            const { data, action } = event.data.fontRenderX;
            const { width, height } = document.documentElement.getBoundingClientRect();
            if (def.var.dataCache === data || (width < 4 && height < 4)) return;
            const { css, id } = ((def.var.dataCache = data), getExactFrameStyle(data, document));
            setAdoptedStyleSheets({ target: document, css, id, primary: true }) && COUNT(`[FRAME:${document.documentElement.id}][ACT:Message|${action}]`);
          };
          const channel = new MessageChannel();
          const privateChannel = channel.port1;
          const postRequestMessage = () => {
            privateChannel.start() ?? safeAddEventListener(privateChannel, "message", fontMessageFn);
            GMunsafeWindow.top.postMessage({ fontRenderX: { command: "𝐫𝐞𝐪𝐮𝐞𝐬𝐭", action: "DOMLoaded" } }, "*", [channel.port2]);
          };
          document.readyState === "loading" ? addLoadEvents.addFn(postRequestMessage) : postRequestMessage();
        }

        function loadPreview(hasPreviewPermission, styleText = tStyle, shouldReturn = true) {
          try {
            if (!hasPreviewPermission || !CUR_WINDOW_TOP) return;
            const [currentID, matchedID] = [`#${document.documentElement.id}`, styleText.match(DOCUMENTID_REGEXP)?.[0]];
            if (matchedID && matchedID !== currentID) styleText = styleText.replace(DOCUMENTID_REGEXP, currentID);
            if (setAdoptedStyleSheets({ target: document, css: styleText, id: def.id.rndStyle, primary: true }) && isFontsize) {
              const { prev, cur } = getscaleValueMatrix(def.array.scaleMatrix);
              if (cur !== prev) adjustCoordinateOffset({ cur, prev, props: def.array.props });
              DEBUG("scale.Matrix<Preview>:", def.array.scaleMatrix);
            }
            adoptStyleIntoFrames({ action: "Preview", cssText: styleText });
            def.var.preview = !shouldReturn;
          } catch (e) {
            ERROR(`${e.name} in LoadPreview:`, e.message);
          }
        }

        function insertHTML(htmlText) {
          const section = cE("fr-configure", { id: def.id.configure });
          const shadow = (def.var.configIf = aS(section));
          const cssText = String(hostStyle("fr-configure") + def.var.style.shared + def.var.style.frConfigure);
          shadow.innerHTML = tTP.createHTML(htmlText);
          setAdoptedStyleSheets({ target: shadow, css: cssText, id: `${def.const.seed}-configure`, media: "all", writable: false, minor: true });
          return createDialogModel(section, document.documentElement);
        }

        function setSliderProperty(sliderRoot, thisValue, bits) {
          if (!sliderRoot) return;
          const [shadow, curValue] = [sliderRoot.getRootNode(), Number(thisValue).toFixed(bits)];
          const cssText = `{--step:${sliderRoot.step};--min:${sliderRoot.min};--max:${sliderRoot.max};--value:${curValue};--text-value:'${toString(curValue)}'}`;
          setAdoptedStyleSheets({ target: shadow, css: `:host(div.${shadow.host.className})${cssText}`, id: `${def.const.seed}-${sliderRoot.name}`, media: "all", minor: true });
          sliderRoot.setAttribute("value", curValue);
          sliderRoot.value = curValue;
        }

        function checkInputValue(input, slider, regex, bits, isOne = false) {
          const updateValues = () => {
            const inputValue = input.value === "OFF" ? Number(isOne) : Number(input.value);
            const [sliderValue, minValue, maxValue] = ["value", "min", "max"].map(item => Number(slider?.getAttribute(item)));
            const isValidInput = regex.test(inputValue) && inputValue >= minValue && inputValue <= maxValue;
            const finalValue = isValidInput ? inputValue : sliderValue;
            setSliderProperty(slider, finalValue, bits);
            input.value = finalValue === Number(isOne) ? "OFF" : finalValue.toFixed(bits);
          };
          input?.addEventListener("input", () => (input.value = input.value.replace(/[^0-9.]/g, "")));
          input?.addEventListener("change", updateValues);
        }

        function drawSliderElement({ name, pid, sid, min, max, step, value, bits }) {
          const sliderRoot = aS(qS(`#${pid}>.${def.class.range}`, def.var.configIf));
          if (!(def.var[name] = sliderRoot)) return;
          const [hostName, curValue, disabled] = [`:host(.${sliderRoot.host.className})`, Number(value).toFixed(bits), name === "fr-scale" ? isDisabled : ""];
          const css = `${hostName}{--step:${step};--min:${min};--max:${max};--value:${curValue};--text-value:'${toString(curValue)}'}`;
          const sliderHTML = `<input id="${sid}" type="range" name="${name}" min="${min}" max="${max}" step="${step}" value="${curValue}" ${disabled} /><output></output><div class="${def.class.rangeProgress}"></div>`;
          sliderRoot.innerHTML = tTP.createHTML(sliderHTML);
          setAdoptedStyleSheets({ target: sliderRoot, css, id: `${def.const.seed}-${name}`, media: "all", minor: true });
          setAdoptedStyleSheets({ target: sliderRoot, css: def.var.style.frSlider, id: `${def.const.seed}-range`, media: "all", writable: false, minor: true });
        }

        function insertSliders() {
          drawSliderElement({ name: "fr-scale", pid: def.id.fontSize, sid: def.id.scale, min: 0.8, max: 2.5, step: 0.001, value: CONST_VALUES.fontSize, bits: 3 });
          drawSliderElement({ name: "fr-stroke", pid: def.id.fontStroke, sid: def.id.stroke, min: 0, max: 1, step: 0.001, value: CONST_VALUES.fontStroke, bits: 3 });
          drawSliderElement({ name: "fr-shadow", pid: def.id.fontShadow, sid: def.id.shadow, min: 0, max: 4, step: 0.01, value: CONST_VALUES.fontShadow, bits: 2 });
        }

        function removeKeyboardEvent(...targets) {
          safeAddEventListener(document, "blur", stopEventPropagation, true);
          arrayFrom(targets).forEach(target => ["keydown", "keyup", "keypress", "paste"].forEach(eventType => target?.addEventListener(eventType, stopEventPropagation)));
        }

        function getBrightnessAndSetColor(hexa) {
          hexa = revertColor(hexa) ?? "#00000000";
          const dark = global.matchMedia && global.matchMedia("(prefers-color-scheme: dark)").matches;
          const [r, g, b, a] = hexa.match(/[0-9a-f]{2}/gi).map(x => parseInt(x, 16));
          const bright = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;
          const value = bright(r, g, b) * (a / 255) + (dark ? bright(40, 40, 40) : bright(255, 255, 255)) * (1 - a / 255);
          return fullStyle(hexa, value >= 165 ? "#121212" : "#fcfcfc");
        }

        function isFontReady(time = 1e3) {
          if (typeof def.var.fontReady !== "undefined") return (def.var.fontReady = null) ?? { status: "done", time: NaN };
          const startTime = performance.now();
          const timeReady = sleep(time, { useCachedSetTimeout: true }).then(() => ({ status: "timeout", time }));
          const fontReady = document.fonts.ready.then(() => ({ status: "loaded", time: performance.now() - startTime }));
          return (def.var.fontReady = Promise.race([timeReady, fontReady]));
        }

        async function matchByPostScriptName(checkFontName) {
          const fontCheckList = await getMergedFontCheckList();
          for (const fontname of fontCheckList) if (fontname.en === checkFontName && fontname.ps) return fontname.ps;
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

        function isMatchReconstructFlag(odata, evalue) {
          if (!odata || odata.date !== cipherInstance.decrypt(odata.flag)) return (def.var.structureError = true);
          if (!evalue || evalue !== odata.flag) return true;
          if (odata.date !== cipherInstance.decrypt(evalue)) return (def.var.structureError = true);
        }

        function inspectLicense() {
          try {
            const source = decodeURI(`%C3%99%C3%97%C3%9D%7F%7D%C2%9A%7D%C3%9D%C2%9A%7F%C3%9EZ%C3%B7%C3%87%1B%C3%99%C3%B6%C2%BB%C3%93n%C3%BC%C3%AB%C2%A7x`);
            const result = cipherInstance.decrypt(encrypt(source, null));
            const subkey = new RegExp(def.var.scriptAuthor).exec(decrypt(result))?.[0];
            return { keycode: () => result, inspect: (key = decrypt(result)) => key.includes(subkey) };
          } catch (e) {
            ERROR(`${e.name} in InspectLicense:`, e.message);
          }
        }

        async function initializeConfigData(odata) {
          const keys = await GMlistValues();
          if (def.var.structureError === true || (typeof rebuild !== "undefined" && isMatchReconstructFlag(odata, rebuild))) {
            keys.forEach(key => (key !== CONFIGURE || def.var.structureError === true) && GMdeleteValue(key));
            const rebuildWarnText = IS_CHN
              ? `%c数据已重建\r\n%c脚本已开启更新后数据重建选项，所有数据已初始化，您可手动还原本地备份数据。如您的备份较为久远，强烈建议您重新设置参数，记得及时重新备份哟！`
              : `%cData Reconstruct\r\n%cThe script turns on the option to rebuild data after upgrade, all data is initialized and you can restore the local backup manually. If your backups are older, it is recommended that you reconfigure the parameters, and remember to re-backup in time!`;
            const resetWarnText = IS_CHN
              ? `%c数据重置警告\r\n%c因检测到数据解析异常、或代码/存储数据被非法篡改，数据已全部初始化，请手动还原您本地备份数据！若反复提示此问题，请尝试重新安装脚本！`
              : `%cData Reset Warning\r\n%cData has been initialized due to detect data parsing anomaly, or illegally tamper with code/data, please restore your local backup manually! If this appears repeatedly, please reinstall the script!`;
            const dataReconstructText = def.var.structureError !== true ? ["warn", `${rebuildWarnText} (%s)`] : ["error", `${resetWarnText} (%s)`];
            __console(...dataReconstructText, "font-weight:700", "font-weight:400", setDebuggerMode() && cipherInstance.encrypt(odata.date)) ?? (def.var.versionStatus = null);
            saveData(CONFIGURE, safeObject.assign(_config_data_, { ...INITIAL_FEATURES, rebuild: odata.flag, curVersion: void 0, isCustomMono: false, globalDisable: false }));
          } else if (typeof rebuild === "undefined") {
            saveData(CONFIGURE, safeObject.assign(_config_data_, { rebuild: odata.flag }));
            const message = !curVersion ? `configuration data is null, building now!` : `configuration data has been restored!`;
            DEBUG(`%c${message}`, `color:${!curVersion ? "#d8aa01" : "#1e90ff"};font-style:italic`);
          } else {
            const dataStatus = curVersion === def.var.curVersion;
            const message = dataStatus ? "OK" : "Updated";
            DEBUG(`%cConfigure Data Status: ${message}`, `color:${dataStatus ? "#008080" : "#dc143c"};font-style:italic`);
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
              ? `<li class="${def.const.seed}.init"><strong>温馨提示</strong> 首次加载此脚本时，默认使用内置参数进行渲染，若显示效果不佳，<b>属于正常情况</b>。请根据您本地的显示器及浏览器配置，<b>重新设定</b>渲染参数以达到最佳效果！</li>`
              : `<li class="${def.const.seed}.init ${def.const.seed}.wrap.break"><strong>Tip:</strong> When first loaded, the default rendering will use the built-in parameters, which <b>Normally</b> do not display well. Please <b>reconfigure</b> the rendering parameters according to your monitor and browser to achieve the best display effect!</li>`,
            structureError: IS_CHN
              ? `<li class="${def.const.seed}.warn"><strong>数据重置警告</strong> 因检测到数据解析异常、或代码/存储数据被非法篡改，数据已全部初始化，请手动还原您本地备份数据！若反复提示此问题，请尝试重新安装脚本！</li>`
              : `<li class="${def.const.seed}.warn ${def.const.seed}.wrap.break"><strong>Data Reset Warning</strong> Data has been initialized due to detect data parsing anomaly, or illegally tamper with code/data, please restore your local backup manually! If this appears repeatedly, please reinstall the script!</li>`,
            dataRebuilt: IS_CHN
              ? `<li class="${def.const.seed}.warn ${def.const.seed}.clr:indigo"><strong>数据已重建</strong> 脚本已开启更新后数据重建选项，所有数据已初始化，您可手动还原本地备份数据。如您的备份较为久远，强烈建议您重新设置参数，记得及时重新备份哟！</li>`
              : `<li class="${def.const.seed}.warn ${def.const.seed}.clr:indigo ${def.const.seed}.wrap.break"><strong>Data Reconstructed</strong> The script turns on the option to rebuild data after upgrade, all data is initialized and you can restore the local backup manually. If your backups are older, it is recommended that you reconfigure the parameters, and remember to re-backup in time!</b></li>`,
          };
          const CANDIDATE_FIELD = statusMessages[savedVersion] ?? messages.updateFirstRun;
          const FIRST_INSTALL_NOTICE_WARNING = typeof savedVersion === "undefined" ? notices.firstInstall : "";
          const STRUCTURE_ERROR_NOTICE_WARNING = def.var.structureError ? notices.structureError : savedVersion === null ? notices.dataRebuilt : "";
          const [trueButtonText, falseButtonText] = IS_CHN ? ["好，去看看", "不，算了吧"] : ["Yes, Let's go", "No, Thanks"];
          const titleText = IS_CHN ? "脚本更新 - 温馨提示" : "Script Updates - Update Tips";
          const messageText = IS_CHN
            ? `<p class="${def.const.seed}.wrap.break"><span class="${def.const.seed}.clr:ff6347 ${def.const.seed}.hi.cn">您好！</span>这是${CANDIDATE_FIELD}<span class="${def.const.seed}.pd:4p ${def.const.seed}.fw:700">${def.var.scriptName}</span>的新版本<span class="${def.const.seed}.clr:ff6347 ${def.const.seed}.v.cn">v${def.var.curVersion}</span>，以下为更新详情：</p><ul id="${def.const.seed}.update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul><p>建议您先去查阅 <strong class="${def.const.seed}.clr:ff6347 ${def.const.seed}.fw:700 ${def.const.seed}.fst:ita">新版使用文档</strong> ，要去看一下吗？</p>`
            : `<p class="${def.const.seed}.wrap.break" class="${def.const.seed}.lh:180"><span class="${def.const.seed}.clr:ff6347 ${def.const.seed}.hi.en">Hi! </span>This is ${CANDIDATE_FIELD} "<span class="${def.const.seed}.pd:4p ${def.const.seed}.fw:700">${def.var.scriptName}</span>" in Version<span class="${def.const.seed}.clr:ff6347 ${def.const.seed}.v.en">v${def.var.curVersion}</span>, and the update details are as follows:</p><ul id="${def.const.seed}.update">${FIRST_INSTALL_NOTICE_WARNING}${STRUCTURE_ERROR_NOTICE_WARNING}${UPDATE_VERSION_NOTICE}</ul><p>Recommend to view <strong class="${def.const.seed}.clr:ff6347 ${def.const.seed}.fw:700 ${def.const.seed}.fst:ita">new usage document,</strong> Okay?</p>`;
          const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, messageText, titleText });
          if (await frDialog.respond()) GMopenInTab(url, false);
          sleep(5e2).then(() => savedVersion === null && reload());
        }

        function showUpdateInfo(version) {
          if (version === def.var.curVersion) return;
          saveData(CONFIGURE, safeObject.assign(_config_data_, { curVersion: def.var.curVersion }));
          getRenderRules(cache.remove(FONTCHECKLIST)).then(rules => rules && saveData(REMOTERENDERDATA, rules));
          DEBUG(`Update.Version: %c${def.var.curVersion}`, "color:#dc143c;font-weight:600");
          if (!isCloseTip || version === null) hintUpdateInfo(GUIDELINE_URL, version);
        }

        /* SCRIPT_MENU_INSERT_PACKAGE */

        function openSettings() {
          if (qS(`#${def.id.configure}`)) return closeConfigurePage();
          try {
            if (!insertHTML(tHTML)) return;
            insertSliders();
            operateConfigure();
            sleep(1e2, { useCachedSetTimeout: true })
              .then(setConfigureListener)
              .then(rst => rst.node.classList.add(`${def.const.seed}.opac:1`) ?? reportErrorToAuthor(rst.error));
          } catch (e) {
            ERROR(`${e.name} in OpenSettings:`, e.message);
          }
        }

        function setConfigureListener() {
          const node = qS(`#${def.id.container}`, def.var.configIf);
          if (global.innerHeight <= node.getBoundingClientRect().height + 18) qA(`#${def.id.cSwitch},#${def.id.eSwitch}`, def.var.configIf).forEach(item => void item.click());
          qS(`.${def.class.title} span.${def.class.guide}`, def.var.configIf)?.addEventListener("click", () => void GMopenInTab(GUIDELINE_URL, false));
          qS(`#${def.id.render}`, def.var.configIf)?.addEventListener("dblclick", e => (stopEventPropagation(e, { prevent: true }), GMopenInTab(`${def.url.feedback}/42`, false)));
          qS(`#${def.id.field} #${def.const.seed}\\.scriptname`, def.var.configIf)?.addEventListener("dblclick", function (e) {
            return stopEventPropagation(e, { prevent: true }), this.classList.add(`${def.const.seed}.usel:none`), hintUpdateInfo(GUIDELINE_URL, def.var.curVersion);
          });
          return { error: def.array.exps, node };
        }

        async function setExcludeSites() {
          const messageText = IS_CHN
            ? `<p id="${def.const.seed}.exSite.add">${TOP_HOST}</p><p class="${def.const.seed}.clr:8b0000">该域名下所有页面将被禁止字体渲染！</p><p>页面将在确定后刷新，请确认是否排除该域名？</p>`
            : `<p id="${def.const.seed}.exSite.add">${TOP_HOST}</p><p class="${def.const.seed}.clr:8b0000">Font rendering will be disabled for all pages under this domain! Please confirm to exclude this site?</p>`;
          const [trueButtonText, falseButtonText] = IS_CHN ? ["确 定", "自定义排除"] : ["OK", "Exclusion"];
          const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "排除字体渲染"] : ["Cancel", "Exclude Font Rendering"];
          const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            const { exSite } = await getExSitesData();
            exSite.push(TOP_HOST) && saveData(EXCLUDESITES, uniq(exSite, site => site && typeof site === "string").sort());
            closeConfigurePage({ isReload: true });
          } else setCustomExsite();
        }

        async function setVipConfigure() {
          const _config_data_ = await getConfigureData();
          const { isBackupFunction = true, isPreview, isFontsize, isHotkey = true, isFixViewport = true, isCloseTip, globalDisable, maxPersonalSites = 100 } = _config_data_;
          const title = IS_CHN ? "高级核心功能设置" : "Advanced Core Settings";
          const globalDisableNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="当您仅需要在特定域名渲染时，可使用此快捷功能关闭全局设置！"><u>\u2469</u>仅在特定域名生效（全局禁用）</div><button id="${def.id.globaldisable}">关闭全局</button>`
            : `<div class="${def.const.seed}.VIP" title="To turn off global render when only need to render at specific domain name."><u>\u2469</u>Disabled Global Rendering</div><button id="${def.id.globaldisable}">Disable</button>`;
          const globalDisabledTrigger = !globalDisable ? `<li id="${def.id.gc}">${globalDisableNodeHTML}</li>` : ``;
          const backupNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="养成定期备份的好习惯，保护自己的数据安全！"><u>\u2460</u>本地备份功能（默认：开启）</div>`
            : `<div class="${def.const.seed}.VIP" title="Keep your data safe with regular backups!"><u>\u2460</u>Local Backup (Default: ON)</div>`;
          const previewNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="无需保存刷新页面，直接预览渲染效果！"><u>\u2461</u>渲染预览功能（默认：关闭）</div>`
            : `<div class="${def.const.seed}.VIP" title="Preview the rendering directly without saving and refreshing the page."><u>\u2461</u>Render Preview (Default: OFF)</div>`;
          const scaleNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="实验性功能：兼容大部分浏览器，但仍在Beta测试阶段！"><u>\u2462</u>字体缩放功能（默认：关闭）</div>`
            : `<div class="${def.const.seed}.VIP" title="Experimental: Compatible with most browsers, but still in Beta."><u>\u2462</u>Font Scaling (Default: OFF)</div>`;
          const viewportNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="实验性功能：跟随字体缩放开关，可单独关闭，使用方法查阅帮助文件！"><u>\u2463</u>视口单位修正（默认：关闭）</div>`
            : `<div class="${def.const.seed}.VIP" title="Experimental: Follow the font scaling switch, can be turned off individually."><u>\u2463</u>Fix Viewport (Default: OFF)</div>`;
          const shortcutNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="如快捷键有冲突，请在此关闭它！"><u>\u2464</u>键盘快捷键功能（默认：开启）</div>`
            : `<div class="${def.const.seed}.VIP" title="If there is a conflict in the shortcut, please close it."><u>\u2464</u>Shortcut Tool (Default: ON)</div>`;
          const nopromptNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="您将无法第一时间获得更新内容，错过重要提示！"><u>\u2465</u>关闭更新提示功能（不推荐）</div>`
            : `<div class="${def.const.seed}.VIP" title="You won't get update or important tips, which we don't recommend."><u>\u2465</u>Turn Off Update Prompts</div>`;
          const mpsNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="防止页面加载缓慢，不建议设置过高的数值！"><u>\u2466</u>个性化设置总数（默认: 100）</div>`
            : `<div class="${def.const.seed}.VIP" title="Prevents slow loading, not recommended to set a higher value."><u>\u2466</u>Customize Total (Defalut: 100)</div>`;
          const preRulesNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="手动拉取预定义的站点渲染数据，减少一般情况下的渲染错误！"><u>\u2467</u>预定义的渲染数据（实验功能）</div>`
            : `<div class="${def.const.seed}.VIP" title="Pull predefined special rendering data to reduce rendering errors!"><u>\u2467</u>Pull Predefined Render Data</div>`;
          const fontlistNodeHTML = IS_CHN
            ? `<div class="${def.const.seed}.VIP" title="安装新字体后，请先重启浏览器再重建全局缓存！"><u>\u2468</u>字体列表全局缓存（时效: 30天）</div>`
            : `<div class="${def.const.seed}.VIP" title="After installing new fonts, restart browser before rebuilding the global cache."><u>\u2468</u>FontList Cache (Expired: 30d)</div>`;
          const feedbackNodeText = IS_CHN ? "如果您遇到错误或提建议，请及时向我反馈" : "Feedback for any errors or suggestions";
          const titleText = `<span>${title}</span><span class="${def.const.seed}.fs:14p">- Version ${def.var.curVersion} -</span>`;
          const emojiText = `<span class="${def.class.emoji}">\ud83e\udde1</span>`;
          const messageText = `<ul class="${def.class.main}">
              <li id="${def.id.bk}">
                ${backupNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.isbackup}" class="${def.class.checkbox}" ${isBackupFunction ? "checked" : ""} />
                  <label for="${def.id.isbackup}"></label>
                </div>
              </li>
              <li id="${def.id.pv}">
                ${previewNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.ispreview}" class="${def.class.checkbox}" ${isPreview ? "checked" : ""} />
                  <label for="${def.id.ispreview}"></label>
                </div>
              </li>
              <li id="${def.id.fs}">
                ${scaleNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.isfontsize}" class="${def.class.checkbox}" ${isFontsize ? "checked" : ""} />
                  <label for="${def.id.isfontsize}"></label>
                </div>
              </li>
              <li id="${def.id.fvp}">
                ${viewportNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.isfixviewport}" class="${def.class.checkbox}" ${isFixViewport ? "checked" : ""} />
                  <label for="${def.id.isfixviewport}"></label>
                </div>
              </li>
              <li id="${def.id.hk}">
                ${shortcutNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.ishotkey}" class="${def.class.checkbox}" ${isHotkey ? "checked" : ""} />
                  <label for="${def.id.ishotkey}"></label>
                </div>
              </li>
              <li id="${def.id.ct}">
                ${nopromptNodeHTML}
                <div class="${def.const.seed}.mg:0.pd:0">
                  <input type="checkbox" id="${def.id.isclosetip}" class="${def.class.checkbox}" ${isCloseTip ? "checked" : ""} />
                  <label for="${def.id.isclosetip}"></label>
                </div>
              </li>
              <li id="${def.id.mps}">
                ${mpsNodeHTML}
                <div class="${def.const.seed}.mgr:5p ${def.const.seed}.pd:0">
                  <input maxlength="4" id="${def.id.maxps}" placeholder="100" value="${maxPersonalSites}" readonly />
                </div>
              </li>
              <li id="${def.id.pdr}">
                ${preRulesNodeHTML}
                <button id="${def.id.pdrr}">${IS_CHN ? "重新拉取" : "Repull"}</button>
              </li>
              <li id="${def.id.flc}">
                ${fontlistNodeHTML}
                <button id="${def.id.flcid}">${IS_CHN ? "重建缓存" : "Rebuild"}</button>
              </li>
              ${globalDisabledTrigger}
            </ul>
            <div id="${def.id.feedback}">${emojiText}<span><b> ${feedbackNodeText} </b></span>${emojiText}</div>`;
          const [trueButtonText, falseButtonText, neutralButtonText] = IS_CHN ? ["保存数据", "脚本主页", "取 消"] : ["Save", "Homepage", "Cancel"];
          const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          const queryNodes = `#${def.id.isbackup},#${def.id.ispreview},#${def.id.isfontsize},#${def.id.isfixviewport},#${def.id.ishotkey},#${def.id.isclosetip},#${def.id.maxps}`;
          const parseQueryNodes = s => s.split(",").map((id, node) => (node = qS(id, def.var.dialogIf)) && (node.type === "checkbox" ? node.checked : node.value || 1e2));
          let [_bk, _pv, _fs, _fvp, _hk, _ct, _mps] = parseQueryNodes(queryNodes);
          const maxpsNode = qS(`#${def.id.maxps}`, def.var.dialogIf);
          removeKeyboardEvent(maxpsNode);
          maxpsNode?.addEventListener("input", () => (maxpsNode.value = maxpsNode.value.replace(/[^0-9]/g, "")));
          const ctNode = qS(`#${def.id.isclosetip}`, def.var.dialogIf);
          ctNode?.addEventListener("click", function () {
            const info = IS_CHN
              ? `我们强烈的建议您不要关闭更新提示功能，那样您将不能及时获得更新内容和重要的功能提示，特殊情况下甚至会影响您的正常使用。双击字体渲染设置界面顶部的脚本名称（或访问Github主页），可查看历史更新内容。\r\n\r\n请确认是否“关闭更新提示功能”？`
              : `We strongly recommend that you do not turn off the update prompt, as you will not be able to get updates and important prompts in time, and in special cases may even affect your normal use. Double-click the script-name at font rendering settings interface (or visit Github) to see the update history.\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐜𝐥𝐨𝐬𝐞 𝐭𝐡𝐞 𝐮𝐩𝐝𝐚𝐭𝐞 𝐩𝐫𝐨𝐦𝐩𝐭?`;
            if (this.checked) this.checked = Boolean(confirm(info));
          });
          const fsNode = qS(`#${def.id.isfontsize}`, def.var.dialogIf);
          const fvpNode = qS(`#${def.id.isfixviewport}`, def.var.dialogIf);
          fsNode?.addEventListener("click", function () {
            const baseMessage = IS_CHN ? "字体比例缩放（实验性功能）\r\n\r\n注意：" : "𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠 (𝐞𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭𝐚𝐥)\r\n𝐍𝐨𝐭𝐞: ";
            const geckoWarning = IS_CHN
              ? `由于 Firefox (版本 < 126) 或 Greasemonkey, Userscripts, Firemonkey, Orangemonkey, Stay 等小众浏览器扩展的兼容性问题，可能会对一些网站造成不可修复的样式错误、页面动作缺失等问题。\r\n\r\n强烈建议您：使用“浏览器缩放”替代 (快捷键：ctrl+-/ctrl++)`
              : `Due to the compatibility of Firefox (version < 126) or niche browser extensions such as Greasemonkey, Userscripts, Firemonkey, Orangemonkey, Stay, etc., it can cause irreparable style errors, missing page actions and other issues on some websites. \r\n𝐑𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐞𝐝: use 'Browser Zoom' instead. \r\n𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐒𝐡𝐨𝐫𝐭𝐜𝐮𝐭: ( Ctrl+- / Ctrl++ )`;
            const nonGeckoWarning = IS_CHN
              ? `字体缩放功能将在您确认后开启，字体缩放后造成的视口单位偏移可通过“视口单位修正”功能解决，如介意禁用 CSP 权限，该功能可在此全局关闭，也可在字体渲染设置中单独关闭。`
              : `'𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠' feature will be turned on after you confirm, viewport unit offset caused by font scaling could be solved by the '𝐅𝐢𝐱 𝐕𝐢𝐞𝐰𝐩𝐨𝐫𝐭' feature, which can be turned off globally here or individually in font rendering settings, If you mind disabling CSP.`;
            const confirmMessage = IS_CHN ? "\r\n\r\n请确认是否开启字体缩放功能？" : "\r\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐟𝐢𝐫𝐦 𝐭𝐨 𝐞𝐧𝐚𝐛𝐥𝐞 𝐅𝐨𝐧𝐭 𝐒𝐜𝐚𝐥𝐢𝐧𝐠?";
            const info = baseMessage.concat(compareVersion({ GECKO: 126, more: null }) || IS_GREASEMONKEY ? geckoWarning : nonGeckoWarning, confirmMessage);
            if (this.checked) this.checked = Boolean(confirm(info));
            if (fvpNode) fvpNode.checked = this.checked;
          });
          fvpNode?.addEventListener("click", () => fvpNode.checked && !fsNode?.checked && fsNode?.click());
          qS(`#${def.id.globaldisable}`, def.var.dialogIf)?.addEventListener("click", async () => {
            const messageText = IS_CHN
              ? `<p class="${def.const.seed}.clr:8b0000">下一步操作将关闭默认的全局设置数据，您可以仅在指定的域名保存需要渲染的站点独享数据。请注意，全局数据禁用后，您需要重新配置并保存为全局数据才能启用默认全局渲染规则。</p><p>请确认您是否要禁用全局设置？</p>`
              : `<p class="${def.const.seed}.clr:8b0000">The next step will turn off the global setting data, and you can save only the site-specific data that needs to be rendered in specified domain name. Please note that after global data disabled, you need to reconfigure and save as global data to enable the global rendering rules.</p><p>Please confirm to disable global settings?</p>`;
            const [trueButtonText, neutralButtonText, titleText] = IS_CHN ? ["确 定", "取 消", "禁用全局设置数据"] : ["OK", "Cancel", "Disable Global Settings"];
            const disableDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            if (await disableDialog.respond()) {
              saveData(FONTSET, { ...INITIAL_VALUES, fontFace: false, fontSmooth: false, fontStroke: 0, fixStroke: false, fontShadow: 0, renderCanvas: false });
              saveData(CONFIGURE, { ..._config_data_, globalDisable: true });
              closeConfigurePage({ isReload: true });
            }
          });
          const deBounceGetRenderData = createDeBounce({ fn: asyncGetRules, delay: 5e2, once: true });
          qS(`#${def.id.pdrr}`, def.var.dialogIf)?.addEventListener("click", async () => {
            const processingText = IS_CHN ? "正在努力拉取预定义渲染数据中，请稍后..." : "Pulling predefined render data, please wait...";
            const messageText = `<p id="${def.const.seed}.pull.result" class="${def.const.seed}.clr:708090">${processingText}</p>`;
            const [trueButtonText, titleText] = IS_CHN ? ["确 定", "拉取预定义渲染数据"] : ["OK", "Pull Predefined Render Data"];
            const repullDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            repullDialog.trueButton.className = repullDialog.trueButton.setAttribute("disabled", "") ?? `${def.class.dbb} ${def.class.dbbn}`;
            const msgNode = qS(`#${def.const.seed}\\.pull\\.result`, def.var.dialogIf);
            msgNode && deBounceGetRenderData(msgNode, repullDialog);
          });
          qS(`#${def.id.flcid}`, def.var.dialogIf)?.addEventListener("click", async () => {
            const successText = IS_CHN ? "字体列表全局缓存已重建，页面即将刷新！" : "Fontlist cache has been rebuilt, refresh now!";
            const messageText = `<p class="${def.const.seed}.clr:b8860b ${def.const.seed}.tal:center ${def.const.seed}.cps">${successText}</p><p class="${def.const.seed}.tal:center"><span class="${def.const.seed}.cpsa"></span></p>`;
            const [trueButtonText, titleText] = IS_CHN ? ["确 定", "字体列表全局缓存已重建"] : ["OK", "Rebuilt Fontlist Cache"];
            const rebuiltDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
            const imgOption = { src: IS_CHN ? def.url.fontlistImg : def.url.fontlistImg.replace("fontlist.", "fontlist_en."), alt: rebuiltDialog.titleText };
            const imgContainer = qS(`span.${def.const.seed}\\.cpsa`, def.var.dialogIf);
            imgContainer && GMaddElement(imgContainer, "img", imgOption) && DEBUG("Rebuilding font list cache...");
            if (await rebuiltDialog.respond(cache.remove(FONTCHECKLIST))) closeConfigurePage({ isReload: true });
          });
          qS(`#${def.id.feedback}`, def.var.dialogIf)?.addEventListener("click", () => void GMopenInTab(def.url.feedback, false));
          qA(queryNodes, def.var.dialogIf).forEach(item => item.addEventListener("change", () => ([_bk, _pv, _fs, _fvp, _hk, _ct, _mps] = parseQueryNodes(queryNodes))));
          if (await frDialog.respond()) {
            saveData(CONFIGURE, { ..._config_data_, isBackupFunction: _bk, isPreview: _pv, isFontsize: _fs, isFixViewport: _fvp, isHotkey: _hk, isCloseTip: _ct, maxPersonalSites: _mps });
            const messageText = IS_CHN ? "高级核心功能参数已成功保存，页面即将刷新！" : "Advanced Core Data was saved, refresh now!";
            const [trueButtonText, titleText] = IS_CHN ? ["确 定", "高级核心功能设置保存"] : ["OK", "Advanced Core Data Save"];
            const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:b8860b">${messageText}</p>`, titleText });
            if (await successDialog.respond()) closeConfigurePage({ isReload: true });
          } else GMopenInTab(`${def.url.homepage}index${IS_CHN ? "" : "_en"}.html`, false);
        }

        async function setIncludeSites() {
          const messageText = IS_CHN
            ? `<p class="${def.const.seed}.exclusion">${TOP_HOST}</p><p class="${def.const.seed}.clr:green">该域名下所有页面将重新进行字体渲染！</p><p>页面将在确定后刷新，请确认是否恢复该域名？</p>`
            : `<p class="${def.const.seed}.exclusion">${TOP_HOST}</p><p class="${def.const.seed}.clr:green">Font rendering will be enabled for all pages under this domain! Please confirm to enable this site?</p>`;
          const [trueButtonText, falseButtonText] = IS_CHN ? ["确 定", "自定义排除"] : ["OK", "Exclusion"];
          const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "恢复字体渲染"] : ["Cancel", "Allow Font Rendering"];
          const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
          if (await frDialog.respond()) {
            const { exSite, exSitesIndex } = await getExSitesData();
            const wildcard = site => typeof site === "string" && site.startsWith("*") && new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${site.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`);
            const panDomain = exSite.FindX(site => (site = wildcard(site)) && site.test(CUR_HOST));
            if (!panDomain) {
              ~exSitesIndex && exSite.splice(exSitesIndex, 1) && saveData(EXCLUDESITES, uniq(exSite, site => site && typeof site === "string").sort());
              closeConfigurePage({ isReload: true });
            } else {
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}.exclusion">${panDomain}</p><p class="${def.const.seed}.clr:8b0000">该网站是被以上包含通配符的泛域名所排除渲染的。</p><p>『确定』将自动取消该泛域名下所有的排除项。</p><p>『管理』您将进入自定义排除站点列表手动处理。</p>`
                : `<p class="${def.const.seed}.exclusion">${panDomain}</p><p class="${def.const.seed}.clr:8b0000">The site is excluded by Pan-domain name above.</p><p>『OK』Allow all under this Pan-domain name.</p><p>『Manage』Edit customized exclude-sites list.`;
              const [trueButtonText, falseButtonText] = IS_CHN ? ["确 定", "管 理"] : ["OK", "Manage"];
              const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "恢复泛域名下的字体渲染"] : ["Cancel", "Allow Pan-domain name re-Rendering"];
              const panDomainDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              if (await panDomainDialog.respond()) {
                const { exSite } = await getExSitesData();
                saveData(EXCLUDESITES, uniq(exSite, site => site && typeof site === "string" && !site.endsWith(panDomain.slice(1))).sort());
                closeConfigurePage({ isReload: true });
              } else setCustomExsite();
            }
          } else setCustomExsite();
        }

        async function setCustomExsite() {
          const { exSite } = await getExSitesData();
          const [_temp_, [delText, resetText]] = [exSite, IS_CHN ? ["删除", "恢复"] : ["Del", "Reset"]];
          let [length, listContents] = [_temp_.length - 1, ""];
          for (let i = 0; i <= length; i++) {
            const domainName = convertHtmlToText(_temp_[i]);
            const number = String(i + 1).padStart(2, "0");
            listContents += `<li id="${def.const.seed}.vlist.item:${i}"><span>${number}. </span><span class="${def.const.seed}.domainlist" title="${domainName}">${domainName}</span>`;
            listContents += `<span>[<a id="${def.const.seed}.vlist.item.link:${i}" class="${def.const.seed}.clr:8b0000" data-fr-domain="${domainName}">${delText}</a>]</span></li>`;
          }
          listContents = listContents || `<li id="${def.const.seed}.temp">---- ${IS_CHN ? "暂时没有自定义排除站点" : "No custom exclusion sites"} ----</li>`;
          const [searchBtn, addBtn] = IS_CHN ? ["查 询", "添 加"] : ["Search", "Add"];
          const customExsiteHTML = IS_CHN
            ? `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p"><b class="${def.const.seed}.clr:8b0000">添加自定义排除站点</b>：在文本框中输入正确的域名，点击添加按钮，支持首位通配符的泛域名，如：*.example.com</p><p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p"><b class="${def.const.seed}.clr:8b0000">数据保存</b>：完成所有添加、删除操作后需点击保存按钮才会使数据保存生效，保存数据后不能撤回，请谨慎操作。</p>`
            : `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p"><b class="${def.const.seed}.clr:8b0000">Add</b>: Enter domain-name, click Add button. Support for Pan-domain name with wildcard, e.g. *.example.com</p><p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p"><b class="${def.const.seed}.clr:8b0000">Save</b>: After adding or deleting, must click Save button to make the data effective. After saving, unable to retract!</p>`;
          const messageText = `${customExsiteHTML}<p class="${def.const.seed}.list:p"><input id="${def.const.seed}.sdata" type="search"><button id="${def.const.seed}.sdata:search">${searchBtn}</button><button id="${def.const.seed}.sdata:add">${addBtn}</button></p><ul id="${def.const.seed}.vlist">${listContents}</ul>`;
          const [trueButtonText, neutralButtonText, titleText] = IS_CHN ? ["保存数据", "取 消", "自定义排除站点管理"] : ["Save", "Cancel", "Manage Customized Exclusions"];
          const frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
          const [dsNode, dssNode, dsaNode, ddNode] = ["sdata", "sdata\\:search", "sdata\\:add", "vlist"].map(l => qS(`#${def.const.seed}\\.${l}`, def.var.dialogIf));
          if (ddNode && dsNode && dssNode && dsaNode) {
            dsNode.addEventListener("keydown", e => e.key === "Enter" && void (stopEventPropagation(e, { prevent: true }), dssNode.focus(), dssNode.click()));
            removeKeyboardEvent(dsNode);
            dsNode.addEventListener("input", () => void (dsNode.value = dsNode.value.replace(/[^-a-z0-9.*:\][]|^https?:\/\//gi, "").toLowerCase()));
            dsNode.addEventListener("focus", () => void dsNode.removeAttribute("class"));
            dsaNode.addEventListener("click", () => {
              const resDomain = dsNode.value.trim().toLowerCase();
              const regexp = `^(?=^.{3,255}$)(\\*\\.)?[a-z0-9][-a-z0-9]{0,62}(\\.[a-z0-9][-a-z0-9]{0,62})+(:[0-9]{1,5})?$|^(?![0-9])(?!-)(?!.*--)[A-Za-z0-9-]{2,62}[a-zA-Z0-9](:[0-9]{1,5})?$|^\\[(([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:){0,5}([0-9a-fA-F]{1,4})?)|::([0-9a-fA-F]{1,4}:){0,6}([0-9a-fA-F]{1,4})?)\\](:[0-9]{1,5})?$`;
              const domainRegex = new RegExp(regexp);
              const exDomain = resDomain.replace(/:(80|443)$/, "");
              if (!domainRegex.test(exDomain) || exSite.includes(exDomain)) return (dsNode.className = `${def.const.seed}.clr:ff0000`);
              safeRemoveNode(`#${def.const.seed}\\.temp`, def.var.dialogIf);
              length++;
              const newNode = cE("li", { id: `${def.const.seed}.vlist.item:${length}`, class: `${def.const.seed}.gradient.bg` });
              const domainName = convertHtmlToText(exDomain);
              newNode.innerHTML =
                tTP.createHTML(`<span>${String(length + 1).padStart(2, "0")}. </span><span class="${def.const.seed}.domainlist" title="${domainName}">${domainName}</span>`) +
                tTP.createHTML(`<span>[<a id="${def.const.seed}.vlist.item.link:${length}" class="${def.const.seed}.clr:8b0000" data-fr-domain="${domainName}">${delText}</a>]</span>`);
              return appendNode(ddNode, newNode), _temp_.push(exDomain), (dsNode.value = ""), (ddNode.scrollTop = ddNode.scrollHeight);
            });
            dssNode.addEventListener("click", () => void searchTextAndSelect(dsNode, ddNode, "exsite", "li>:nth-child(2)"));
          }
          ddNode?.addEventListener("click", event => {
            const target = event.target;
            if (getNodeName(target) !== "a" || !target.id.startsWith(`${def.const.seed}.vlist.item.link:`)) return;
            const listID = Number(target.id?.match(/\d+$/)?.[0] ?? -1);
            const nodeDomain = target.dataset.frDomain;
            const classList = target.parentNode.previousElementSibling.classList;
            const isDeleted = typeof target.dataset.del !== "undefined";
            if (isDeleted) delete target.dataset.del && !_temp_.includes(nodeDomain) && _temp_.push(nodeDomain);
            else _temp_.RemoveX(nodeDomain) && (target.dataset.del = listID);
            target.textContent = isDeleted ? delText : resetText;
            target.className = isDeleted ? `${def.const.seed}.clr:8b0000` : `${def.const.seed}.clr:green`;
            classList.toggle(`${def.const.seed}.list.reset`, !isDeleted);
          });
          if (await frDialog.respond()) {
            saveData(EXCLUDESITES, uniq(_temp_, site => site && typeof site === "string").sort());
            const messageText = IS_CHN ? `自定义排除网站数据已成功保存，页面即将刷新。` : `Exclusion site data was saved, refresh now!`;
            const [trueButtonText, titleText] = IS_CHN ? ["感谢使用", "自定义排除网站数据保存"] : ["Thanks", "Customized Exclusions Data Save"];
            const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:green">${messageText}</p>`, titleText });
            if (await successDialog.respond()) closeConfigurePage({ isReload: true });
          }
        }

        async function asyncGetRules(msgNode, dialog) {
          const successText = IS_CHN ? "预定义渲染数据成功更新，页面即将刷新！" : "Predefined render data was updated, refresh now!";
          const failedText = IS_CHN ? "预定义渲染数据拉取失败，请尝试重新拉取！" : "Predefined render data pull failed, please retry!";
          await getRenderRules().then(async rules => {
            rules && saveData(REMOTERENDERDATA, rules);
            msgNode.textContent = rules ? successText : failedText;
            msgNode.className = rules ? `${def.const.seed}.clr:green` : `${def.const.seed}.clr:8b0000`;
            dialog.trueButton.className = dialog.trueButton.removeAttribute("disabled") ?? `${def.class.dbb} ${rules ? def.class.dbbt : def.class.dbbf}`;
            if (await dialog.respond()) closeConfigurePage({ isReload: true });
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
            const row = Number(selectedNode?.id?.replace(`${def.const.seed}.vlist.item:`, ``)) || 0;
            const clientHeight = Number(selectedNode?.clientHeight) || 0;
            target.scrollTop = row * clientHeight;
            input.removeAttribute("class");
          } else input.className = `${def.const.seed}.clr:ff8c00`;
        }

        function insertMenus(loading) {
          sleep(1e3, { useCachedSetTimeout: true })(2e3)
            .then(async timeout => {
              const { status, time } = await isFontReady(timeout);
              DEBUG("isFontReady:", { status, delay: `${parseInt(time)}ms` }) || loading ? GMunregisterMenuCommand(loading) : DEBUG("%cNo Loading_Menu", "color:#a9a9a9");
            })
            .then(() => {
              if (NOT_IN_EXCLUSION_LIST) {
                const font_Set_Menu = `\ufff1\ud83c\udf13 ${IS_CHN ? "字体渲染设置" : "Font Rendering Settings "}${isHotkey ? "(P)" : ""}`;
                GMregisterMenuCommand(font_Set_Menu, openSettings) && DEBUG("%cInstalling Font_Set_Menu", "color:#808080");
                const exclude_Site_Menu = `\ufff2\u26d4 ${IS_CHN ? "排除渲染" : "Exclude "} ${TOP_HOST} ${isHotkey ? "(X)" : ""}`;
                GMregisterMenuCommand(exclude_Site_Menu, setExcludeSites) && DEBUG("%cInstalling Exclude_Site_Menu", "color:#808080");
                const parameter_Set_Menu = `\ufff3\ud83d\udc8e ${IS_CHN ? "高级核心功能设置" : "Advanced Core Settings "}${isHotkey ? "(G)" : ""}`;
                GMregisterMenuCommand(parameter_Set_Menu, setVipConfigure) && DEBUG("%cInstalling Parameter_Set_Menu", "color:#808080");
              } else {
                const include_Site_Menu = `\ufff4\ud83c\udf40 ${IS_CHN ? "重新渲染" : "Re-rendering "} ${TOP_HOST} ${isHotkey ? "(X)" : ""}`;
                GMregisterMenuCommand(include_Site_Menu, setIncludeSites) && DEBUG("%cInstalling Include_Site_Menu", "color:#808080");
                const feed_Back_Menu = `\ufff5\ud83e\udde1 ${IS_CHN ? "向作者反馈错误或建议" : "Feedback to Author "}${isHotkey ? "(T)" : ""}`;
                GMregisterMenuCommand(feed_Back_Menu, () => void GMopenInTab(def.url.feedback, false)) && DEBUG("%cInstalling Feed_Back_Menu", "color:#808080");
              }
            })
            .then(() => void (isHotkey ? insertHotkey() : DEBUG("%cNo Hotkey_Setting", "color:#a9a9a9")));
        }

        function insertHotkey() {
          const handleClickEvent = (func, time, event) => {
            stopEventPropagation(event, { prevent: true });
            const currentTime = performance.now();
            currentTime - def.count.clickTimer > time && (def.count.clickTimer = currentTime) && func();
          };
          document.addEventListener("keydown", e => {
            const ekey = (e.altKey || e.key === "Alt" || e.code === "AltRight" || e.code === "AltLeft") && !e.ctrlKey && !e.shiftKey && !e.metaKey;
            if (e.code === "KeyP" && ekey) handleClickEvent(NOT_IN_EXCLUSION_LIST ? openSettings : setIncludeSites, 1e3, e);
            else if (e.code === "KeyX" && ekey) handleClickEvent(NOT_IN_EXCLUSION_LIST ? setExcludeSites : setIncludeSites, 1e3, e);
            else if (e.code === "KeyG" && ekey) handleClickEvent(NOT_IN_EXCLUSION_LIST ? setVipConfigure : setIncludeSites, 1e3, e);
            else if (e.code === "KeyT" && ekey) handleClickEvent(() => void GMopenInTab(def.url.feedback, false), 1e4, e);
          }) || DEBUG("%cInstalling Hotkey_Setting", "color:#808080");
        }

        async function manageDomainsList(domains, domainValues, domainValueIndex, _temp_ = asArray([]), listContents = "") {
          try {
            domains = await GMgetValue(DOMAINFONTSET);
            try {
              domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
            } catch (_) {
              domainValues = [];
            }
            const [searchText, clearText, delText, resetText] = IS_CHN ? ["查 询", "清 除", "删除", "恢复"] : ["Search", "Clear", "Del", "Reset"];
            const searchBtnLabel = `<p class="${def.const.seed}.list:p"><input id="${def.const.seed}.sdata" type="search"><button id="${def.const.seed}.sdata:search">${searchText}</button><button id="${def.const.seed}.sdata:clear">${clearText}</button></p>`;
            const searchBtnHTML = domainValues.length > 6 ? searchBtnLabel : ``;
            for (let i = 0, l = domainValues.length; i < l; i++) {
              const domainName = convertHtmlToText(domainValues[i].domain);
              const number = String(i + 1).padStart(2, "0");
              const _fontData_ = new Date(domainValues[i].fontDate);
              const date = setDateFormat("yyyy-MM-dd", _fontData_);
              listContents += `<li id="${def.const.seed}.vlist.item:${i}"><span>[<a id="${def.const.seed}.vlist.item.link:${i}" class="${def.const.seed}.clr:8b0000">${delText}</a>]<span> ${number}.</span></span><span class="${def.const.seed}.customdomain" title="${domainName}">${domainName}</span><span class="${def.const.seed}.mg:05p" title="${_fontData_}">${date}</span></li>`;
            }
            const titleText = IS_CHN ? "网站个性化设置数据列表" : "Customized Sites Data";
            const noticeText = IS_CHN ? "请谨慎操作，保存后生效，已删除的数据将不可恢复！" : "After saving, the deleted data will not be recoverable!";
            const messageText = `<p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fs:14p ${def.const.seed}.indent:6p">${noticeText}</p>${searchBtnHTML}<ul id="${def.const.seed}.vlist">${listContents}</ul>`;
            const [trueButtonText, neutralButtonText] = IS_CHN ? ["确认操作，保存数据", "取 消"] : ["Save", "Cancel"];
            const frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
            const [dsNode, dscNode, dssNode, ddNode] = ["sdata", "sdata\\:clear", "sdata\\:search", "vlist"].map(s => qS(`#${def.const.seed}\\.${s}`, def.var.dialogIf));
            if (ddNode && dsNode && dscNode && dssNode) {
              dsNode.addEventListener("keydown", e => e.key === "Enter" && (stopEventPropagation(e, { prevent: true }), dssNode.focus(), dssNode.click()));
              removeKeyboardEvent(dsNode);
              dsNode.addEventListener("focus", () => dsNode.removeAttribute("class"));
              dsNode.addEventListener("input", () => (dsNode.value = dsNode.value.replace(/[^-a-z0-9.]/gi, "").toLowerCase()));
              dscNode.addEventListener("click", () => (dsNode.removeAttribute("class"), (dsNode.value = ""), (ddNode.scrollTop = 0), dsNode.focus()));
              dssNode.addEventListener("click", () => searchTextAndSelect(dsNode, ddNode, "domain", "li>:nth-child(2)"));
            }
            ddNode?.addEventListener("click", event => {
              const target = event.target;
              if (getNodeName(target) !== "a" || !target.id.startsWith(`${def.const.seed}.vlist.item.link:`)) return;
              const { classList: domainClassList } = target.parentNode.nextElementSibling;
              const { classList: dateClassList } = target.parentNode.nextElementSibling.nextElementSibling;
              const listID = Number(target.id?.match(/\d+$/)?.[0] ?? -1);
              const isDeleted = typeof target.dataset.del !== "undefined";
              if (isDeleted) _temp_.RemoveX(target.dataset.del) && delete target.dataset.del;
              else _temp_.push((target.dataset.del = domainValues[listID].domain));
              target.textContent = isDeleted ? delText : resetText;
              target.className = isDeleted ? `${def.const.seed}.clr:8b0000` : `${def.const.seed}.clr:green`;
              [domainClassList, dateClassList].forEach(i => i.toggle(`${def.const.seed}.list.reset`, !isDeleted));
            });
            if (await frDialog.respond()) {
              let isCurrentSite = false;
              domains = await GMgetValue(DOMAINFONTSET);
              try {
                domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
              } catch (_) {
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
              const messageText = `<p class="${def.const.seed}.clr:green">${IS_CHN ? "网站个性化数据已成功保存！" : "Customize data saved successfully!"}</p><p>${changeNotice}</p>`;
              const [trueButtonText, titleText] = IS_CHN ? ["感谢使用", "个性化数据保存"] : ["Thanks", "Customize Data Save"];
              const successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
              if (await successDialog.respond()) isCurrentSite && closeConfigurePage({ isReload: true });
            }
          } catch (e) {
            ERROR(`${e.name} in ManageDomainsList:`, e.message);
          }
        }

        /* FONT_LIST_GENERATION_AND_SELECTION */

        function fontSet({ container, fontData }) {
          if (!container || typeof container !== "string" || !safeArray.isArray(fontData)) return;
          const isCFPE = FontFaceSetObserver.checkCanvasFingerprintProtection();
          const dlSelector = `#${def.id.fontList} .${def.class.selectFontID} dl`;
          const setFontOpt = item => ({ title: item.ch, sort: item.sort, value: item.en, style: `font-family:'${item.en}'!important`, textContent: item.ch });
          return { fdeleteList: deleteFontSelectList, fresetList: resetFontSelectList, fsearchList: getFontSearchList, fsearch: fontSearch };

          function fontListTrigger(selector, shown = true) {
            qA(selector, def.var.configIf).forEach(item => void item.classList.toggle(`${def.const.seed}.disp:block`, shown));
          }

          function closeFontSelected(item) {
            const btn = item.parentNode;
            const [value, sort] = ["value", "sort"].map(name => btn.children[1].getAttribute(name));
            const text = btn.children[0].textContent;
            if (!safeRemoveNode(btn)) return;
            fontData.push({ ch: text, en: value, sort: Number(sort) || 1 });
            fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
            const fontsetNode = qS(`#${def.id.fontsetList}`, def.var.configIf);
            const fontsetList = getFontSearchList(def.id.fontName);
            if (fontsetList.length === 0) {
              setValueAndEvent(fontsetNode, CONST_VALUES.fontSelect, "input");
              qS(`#${def.id.selector}`, def.var.configIf)?.classList.remove(`${def.const.seed}.disp:block`);
              getCurrentFontName(qS(`#${def.id.fface}`, def.var.configIf)?.checked, selectedFont).then(inputPlaceholder);
            } else setValueAndEvent(fontsetNode, addSingleQuoteForItem(fontsetList), "input");
          }

          function deleteFontSelectList() {
            const closeNodes = qA(`#${def.id.fontList} .${def.class.close}`, def.var.configIf);
            closeNodes.forEach(item => void closeFontSelected(item, fontData));
          }

          function resetFontSelectList() {
            deleteFontSelectList(fontData);
            const fontlistSelectorNode = qS(`#${def.id.fontList} .${def.class.selector}`, def.var.configIf);
            const resetDefaultFont = INITIAL_VALUES.fontSelect.replace(/['"]/g, "");
            const resetFontCHN = IS_REAL_WEBKIT || (!IS_CHEAT_UA && IS_MACOS) ? "\u82f9\u65b9\u002d\u7b80" : "\u5fae\u8f6f\u96c5\u9ed1";
            const fontlistSelectorHTML = `<a class="${def.class.label}"><span class="${def.const.seed}.bdlr:4px" style="font-family:${INITIAL_VALUES.fontSelect}!important">${resetFontCHN}</span><input type="hidden" name="${def.id.fontName}" sort="0" value="${resetDefaultFont}"/><span class="${def.class.close} ${def.const.seed}.cs:pointer ${def.const.seed}.bdrr:4px" style="font-family:sans-serif!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
            fontlistSelectorNode.insertAdjacentHTML("beforeend", tTP.createHTML(fontlistSelectorHTML));
            fontlistSelectorNode.parentNode.classList.add(`${def.const.seed}.disp:block`);
            fontData = fontData.filter(item => item.en !== resetDefaultFont);
            const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.var.configIf);
            if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
            const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="0"]~.${def.class.close}`, def.var.configIf);
            if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
          }

          function getFontSearchList(name) {
            const nodeArray = qA(`#${def.id.selector} .${def.class.selector} input[name="${name}"]`, def.var.configIf);
            return uniq(nodeArray, null, item => item.value);
          }

          function fontSearch() {
            const [btnNodesHTML, placeholderText] = IS_CHN
              ? [`<span class="${def.class.spanlabel}">已选择字体：<span id="${def.id.cleaner}">[清空]</span></span>`, `输入关键字可检索字体`]
              : [`<span class="${def.class.spanlabel}">Selected Fonts: <span id="${def.id.cleaner}">[Clear]</span></span>`, `Enter some keywords`];
            const selectFontTipHTML = IS_CHN
              ? `<p><strong>温馨提示 </strong>脚本预载了常用的中文字体，下拉菜单中所罗列的字体是在代码字体表中您已安装过的字体，没有安装过则不会显示。</p>
                  <p><em class="${def.const.seed}.clr:8b0000">（注一）</em>如果没有重新选择字体，则使用上一次保存的字体。首次使用默认为${INITIAL_VALUES.fontSelect}字体。</p>
                  <p><em class="${def.const.seed}.clr:8b0000">（注二）</em>输入框可输入关键字进行搜索，支持中文和英文字体名。</p>
                  <p><em class="${def.const.seed}.clr:8b0000">（注三）</em>字体是按您选择的先后顺序进行优先渲染的，所以多选不如只选一个您最想要的。</p>
                  <p><em class="${def.const.seed}.clr:8b0000">（注四）</em>如果“字体重写”被关闭，那么本功能将自动禁用，网页字体将采用“网站默认”的字体设置。</p>
                  <p><em class="${def.const.seed}.clr:8b0000">（注五）</em>双击 <span class="${def.class.emoji}">\ud83d\udd14</span> 可以打开自定义字体的添加工具，以使用更多新字体。</p>`
              : `<p><strong>Tips: </strong>The fonts shown in the list are the fonts were installed on your system in font-library. No install & add-lib, No display.</p>
                  <p><em class="${def.const.seed}.clr:8b0000">(ACT1)</em> If this option is not reselected, the last saved is used. Default by ${INITIAL_VALUES.fontSelect}.</p>
                  <p><em class="${def.const.seed}.clr:8b0000">(ACT2)</em> Enter keywords in the inputbox to quickly search for your favorite fonts.</p>
                  <p><em class="${def.const.seed}.clr:8b0000">(ACT3)</em> Fonts are rendered first in the order you choose, so just pick the one you want the most.</p>
                  <p><em class="${def.const.seed}.clr:8b0000">(ACT4)</em> If "Font Rewrite" is turned off, this option will be disabled and the webpage will use "website-defined font".</p>
                  <p><em class="${def.const.seed}.clr:8b0000">(ACT5)</em> Double-click <span class="${def.class.emoji}">\ud83d\udd14</span> to open the custom font-library adding tool to use more custom fonts.</p>`;
            const fHtml = `<div id="${def.id.selector}">
                ${btnNodesHTML}<div class="${def.class.selector}"></div>
              </div>
              <div class="${def.class.selectFontID}">
                <span class="${def.class.spanlabel}">${IS_CHN ? "设置字体，请选择：" : "Set Fonts, Please Select:"}</span>
                <input type="search" id="${def.const.seed}.search" placeholder="${placeholderText}" autocomplete="off" />
                <input type="hidden" id="${def.id.fontsetList}" value="${CONST_VALUES.fontSelect}" />
                <dl><dt></dt><dd></dd></dl>
                <span class="${def.class.tooltip} ${def.class.ps1}" id="${def.id.fonttooltip}">
                  <span class="${def.class.emoji}" title="${IS_CHN ? "按住查看帮助" : "Press and hold for help"}">\ud83d\udd14</span>
                  <span class="${def.class.tooltip} ${def.class.ps2}">
                  ${selectFontTipHTML}
                  </span>
                </span>
              </div>`;
            const fontListNode = qS(container, def.var.configIf);
            if (!qS(`#${def.id.selector}`, def.var.configIf) && fontListNode) fontListNode.innerHTML = tTP.createHTML(fHtml);
            const fontsetNode = qS(`#${def.id.fontsetList}`, def.var.configIf);
            const submitButton = qS(`#${def.id.submit} .${def.class.submit}`, def.var.configIf);
            const ffaceT = qS(`#${def.id.fface}`, def.var.configIf);
            const fselectorT = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
            if (ffaceT && fselectorT && fontsetNode && submitButton) {
              removeKeyboardEvent(fselectorT);
              changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly);
              saveChangeStatus(fontsetNode, CONST_VALUES.fontSelect, submitButton);
              ffaceT.addEventListener("change", () => void changeSelectorStatus(ffaceT.checked, fselectorT, def.class.readonly));
              fselectorT.addEventListener("input", () => void searchEvents(fselectorT.value.trim()));
              fselectorT.addEventListener("click", selectorEvent);
            }

            function selectorEvent(event) {
              stopEventPropagation(event);
              const value = event.target.value.trim();
              if (value.length === 0) {
                const selectFontNode = qS(dlSelector, def.var.configIf);
                fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                selectFontNode.innerHTML = setPermitContent(isCFPE, fontData.length + getFontSearchList(def.id.fontName).length);
                if (fontData.length) fontData.forEach(item => selectFontNode && GMaddElement(selectFontNode, "dd", setFontOpt(item)));
                else selectFontNode.innerHTML += tTP.createHTML(`<dd>${IS_CHN ? "\u65e0\u53ef\u7528\u6570\u636e" : "No data available"}</dd>`);
                fontListTrigger(dlSelector);
                syncScrollTransform(dlSelector, true);
                clickEvents();
              } else searchEvents(value);
            }

            function changeSelectorStatus(inputCheckedStatus, target, cssName) {
              target?.toggleAttribute("disabled", !inputCheckedStatus);
              target?.classList[inputCheckedStatus ? "remove" : "add"](cssName);
              !inputCheckedStatus && deleteFontSelectList(fontData);
            }

            function selectorHidden() {
              document.removeEventListener("click", selectorHidden);
              syncScrollTransform(dlSelector, false);
              fontListTrigger(dlSelector, false);
              const selectorInput = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf);
              if (selectorInput) selectorInput.value = "";
            }

            function searchEvents(searchText, matched) {
              const selectFontNode = qS(dlSelector, def.var.configIf);
              fontListTrigger(dlSelector, (matched = false));
              fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
              if (!fontData.length || !selectFontNode) return;
              fontListTrigger(dlSelector);
              const sRegExp = new RegExp(searchText.replace(/[.:?*+^$[\-=\](){}/\\|]/g, "\\$&"), "i");
              selectFontNode.innerHTML = setPermitContent(isCFPE, fontData.length + getFontSearchList(def.id.fontName).length);
              fontData.forEach(item => (sRegExp.test(item.ch) || sRegExp.test(item.en)) && (selectFontNode && GMaddElement(selectFontNode, "dd", setFontOpt(item)), (matched = true)));
              if (!matched) selectFontNode.innerHTML += tTP.createHTML(`<dd>${IS_CHN ? "\u6ca1\u6709\u5339\u914d\u7684\u5b57\u4f53" : "No matching fonts"}</dd>`);
              clickEvents();
            }

            function clickEvents() {
              const parseClick = event => {
                stopEventPropagation(event);
                const target = event.target;
                const [value, sort] = ["value", "sort"].map(name => target.getAttribute(name));
                const selector = qS(`#${def.id.fontList} .${def.class.selector}`, def.var.configIf);
                const fontsetNode = qS(`#${def.id.fontsetList}`, def.var.configIf);
                if (value && sort && selector && fontsetNode) {
                  const nodeHTML = `<a class="${def.class.label}"><span class="${def.const.seed}.bdlr:4px" style="font-family:'${value}'!important">${target.textContent}</span><input type="hidden" name="${def.id.fontName}" sort="${sort}" value="${value}"/><span class="${def.class.close} ${def.const.seed}.cs:pointer ${def.const.seed}.bdrr:4px" style="font-family:Times,monospace!important">\u0026\u0023\u0032\u0031\u0035\u003b</span></a>`;
                  selector.insertAdjacentHTML("beforeend", tTP.createHTML(nodeHTML));
                  selector.parentNode.classList.add(`${def.const.seed}.disp:block`);
                  fontData = getUniqueFontlist(fontData).sort((a, b) => a.sort - b.sort);
                  fontData = fontData.filter(item => item.en !== value);
                  setValueAndEvent(fontsetNode, addSingleQuoteForItem(getFontSearchList(def.id.fontName)), "input");
                  const cleanerNode = qS(`#${def.id.selector} #${def.id.cleaner}`, def.var.configIf);
                  if (cleanerNode) cleanerNode.onclick = () => void deleteFontSelectList(fontData);
                  const closeNode = qS(`#${def.id.fontList} input[name="${def.id.fontName}"][sort="${sort}"]~.${def.class.close}`, def.var.configIf);
                  if (closeNode) closeNode.onclick = () => void closeFontSelected(closeNode, fontData);
                }
                selectorHidden();
              };
              const promptAction = () => void (cache.remove(FONTCHECKLIST), !isCFPE && GMopenInTab(`${def.url.feedback}/46`, false), reload());
              qA(`#${def.id.fontList} .${def.class.selectFontID} dl dd`, def.var.configIf).forEach(item => void (item.onclick = parseClick));
              qS(`#${def.id.fontList} .${def.class.selectFontID} dl dt`, def.var.configIf)?.addEventListener("click", promptAction);
              document.addEventListener("click", selectorHidden);
            }
          }

          function setPermitContent(p, l) {
            const PF = IS_CHN ? `必须禁用浏览器指纹保护才能进行字体检测，请检查权限。` : `The fingerprinting protection must be disabled to detect fonts, check permissions?`;
            const PT = IS_CHN ? `推荐您安装更多内置字体库中已定义的字体来扩充字体列表。` : `Please install more defined fonts from the built-in font library to expand the fontlist.`;
            const title = p ? `title="${IS_CHN ? "点击重新检查权限" : "Click to re-check permissions"}"` : `title="${IS_CHN ? "单击下载更多字体" : "Click to download more fonts"}"`;
            if (p) return tTP.createHTML(`<dt ${title} class="${def.const.seed}.disp:block">${PF}</dt>`);
            else return tTP.createHTML(`<dt ${title}${l > (IS_MACOS ? 4 : 2) ? `` : ` class="${def.const.seed}.disp:block"`}>${PT}</dt>`);
          }
        }

        function setValueAndEvent(target, value, eventName, colorPicker = null) {
          colorPicker?.fromString(value) ?? (target.value = value);
          target.dispatchEvent(new Event(eventName));
        }

        function syncScrollTransform(selector, enable) {
          const [scrollbar, target] = [`fr-scrollbar`, selector].map(s => qS(s, def.var.configIf));
          def.var[`sync_scroll_${selector}`] = def.var[`sync_scroll_${selector}`] ?? (e => target && (target.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`));
          scrollbar?.[enable ? "addEventListener" : "removeEventListener"]("scroll", def.var[`sync_scroll_${selector}`], false);
          target.style.transform = enable ? `translateY(-${scrollbar?.scrollTop ?? 0}px)` : delete def.var[`sync_scroll_${selector}`] && null;
        }

        async function generateFontFaceCSS(fontArray, fontName, overrideData) {
          const postscriptName = await matchByPostScriptName(fontName);
          const fontList = getFontOverrideData(overrideData);
          return fontList.reduce((css, font) => css.concat(fontArray.includes(font) ? `` : `@font-face{font-family:"${font}";src:local("${postscriptName}");}`), "");
        }

        function generateFontSizeCss(size) {
          const GeckoText = `${globalPrefix}body{transform:scale(var(--fr-font-fontscale));transform-origin:0 0;width:${100 / size}%;height:${100 / size}%}`;
          const WebKitText = `@supports(zoom:100%){${globalPrefix}body{zoom:var(--fr-font-fontscale)!important}}`;
          const cssText = compareVersion({ GECKO: 126, more: null }) ? GeckoText : WebKitText;
          return CUR_WINDOW_TOP || compareVersion({ BLINK: 128, GECKO: 138, more: null }) ? cssText : "";
        }

        function generateTextShadow(size, color) {
          if (size <= 0 || size > 4) return "inherit";
          return `0 0 ${size}px ${parseColor(color).toLowerCase()}`;
        }

        async function correctFontScaleOffset() {
          if (!NOT_IN_EXCLUSION_LIST || !isFontsize || def.var.curScale === 1) return;
          try {
            const predefinedSitesProps = await getFontScaleDef();
            const currentDomainProps = asArray(safeObject.entries(predefinedSitesProps)).FindX(([domain]) => domain && CUR_HOST.endsWith(domain.replace(/:(?:80|443)$/, "")))?.[1];
            if (!currentDomainProps || getObjectType.call(currentDomainProps) !== "[object Object]") throw new Error("No extra correction properties");
            const { Window: W, Element: E, HTMLElement: H } = currentDomainProps;
            def.array.props = { window: uniq(W), element: uniq(E), html: uniq(H) };
          } catch (e) {
            DEBUG(`CorrectFontScaleOffset${IN_FRAMES}:\r\n%c${e.message} for ${CUR_HOST}`, "display:block;padding:0 0 0 18px;color:#808080");
          }
          adjustCoordinateOffset({ cur: def.var.curScale, props: def.array.props });
        }

        function funcCodefont(text, isRewritable, isAllowCustomMonospace, isShadowRoot) {
          if (!isAllowCustomMonospace) return "";
          const code = ["pre", "code"].filter(keyword => new RegExp(`\\b${keyword}\\b`, "i").test(text)).flatMap(key => [key, `${key} *`]);
          const editor = [".ace_editor *", ".monaco-editor *", ".cm-editor *", ".CodeMirror *", ".code", ".code *"];
          const siterules = ["@github.com##textarea,.blob-num,.blob-num *,.blob-code,.blob-code *,.react-line-numbers *,.react-code-lines *", ...monoSiteRules];
          const regexp = /@((?:[\w[\]\-.:]+\|?)+)##((?![^@]+##)[\w\-*.#:+>()~[\]=^$|,' ]+)/;
          !safeArray.isArray(def.var.customRules) &&
            (def.var.customRules = siterules.reduce((rules, siterule) => {
              const [, domains, fontRules] = regexp.exec(siterule);
              if (asArray(domains.split("|")).SomeX(domain => CUR_HOST.endsWith(domain))) rules.push(...fontRules.split(","));
              return rules;
            }, []));
          const codeSelectors = uniq([...code, ...editor, ...def.var.customRules]).join();
          const baseMonoFont = (isRewritable ? "var(--fr-mono-fallback),var(--fr-font-family)," : "ui-monospace,monospace,") + "var(--fr-font-emoji)";
          const [userSelect, prefix] = [IS_REAL_WEBKIT ? `-webkit-user-select:text!important` : `user-select:text!important`, isShadowRoot ? "" : globalPrefix];
          return `${prefix}:is(${codeSelectors}):not([class*='icon' i],[class*='symbols' i],md-icon){font-family:var(--fr-mono-font),${baseMonoFont}!important;text-shadow:var(--fr-mono-shadow)!important;-webkit-text-stroke:var(--fr-no-stroke)!important;font-feature-settings:var(--fr-mono-feature, unset)!important;${userSelect}}${prefix}:is(${codeSelectors})::selection{color:#fff!important;background:#fe7300ed!important;-webkit-text-stroke-width:0!important;text-shadow:1px 1px 1px #4c4c4ccc!important}`;
        }

        function adoptMainStyleSheet({ review = false } = {}) {
          const sheet = getMainStyleSheets({ primary: true }) ?? object();
          if ((sheet.id || getSheetMetadata(sheet).id) === def.id.rndStyle) return true;
          const cssText = tStyle.replace(DOCUMENTID_REGEXP, `#${document.documentElement.id}`);
          const result = setAdoptedStyleSheets({ target: document, css: cssText, id: def.id.rndStyle, writable: false, primary: true });
          const showInfo = (s, i) => void (review ? INFO(`%c[MO][READOPTEDSTYLE]${i}: #${s}`, fullStyle("#a52a2a")) : COUNT(`[ADOPTEDSTYLE][ID:${s}]${i}`));
          return result && !showInfo(def.id.rndStyle, IN_FRAMES);
        }

        async function operateConfigure() {
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
            const drawScale = getFontSizeScale(fontScaleT, submitButton, def.var["fr-scale"]);
            const fixViewportT = getFixViewportBool(fontScaleT, submitButton);
            const drawStrock = getFontsStroke(strokeT, submitButton, def.var["fr-stroke"]);
            const { fixStrokeT, fixShadowT, lazyloadT } = getFixStrokeBool(strokeT, submitButton);
            const drawShadow = getFontShadow(shadowsT, shadowColorNode, submitButton, def.var["fr-shadow"]);
            const colorReg = /^(?:#[0-9A-F]{8}|currentcolor)$/i;
            const colorPickerT = getColorAndColorPicker(colorshowT, submitButton, CONST_VALUES.shadowColor, colorReg);
            const initialSettings = { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT };
            const finalSettings = { ...initialSettings, shadowsT, canvasT, colorshowT, colorReg, fontCssT, fontExT, colorPickerT };
            getAndMonitorCurrentFont(ffaceT, inputFont);
            setFontOverrideDefTrigger(fontOverrideDefData);
            doubleClickToEdit(fontCssT);
            expandOrCollapse(cSwitch, fontCssT, includeNode);
            expandOrCollapse(eSwitch, fontExT, excludeNode);
            customMonospceFont(customMonoNode);
            controlResetButton(resetButton, fontSetFn, finalSettings, { drawScale, drawStrock, drawShadow });
            controlSubmitButton(submitButton, fontSetFn, finalSettings);
            controlBackupButton(backupButton, isBackupFunction);
            cancelButton?.addEventListener("click", closeConfigurePage);
          } catch (e) {
            ERROR(`${e.name} in OperateConfigure: %s (%s)`, e.message, def.array.exps.push(`[operateConfigure]: ${e}`));
          }

          async function getAvailableFontData() {
            try {
              const cachedFontCheckList = await cache.get(FONTCHECKLIST);
              if (safeArray.isArray(cachedFontCheckList) && cachedFontCheckList.length) return DEBUG("%cLoad font data cache", "color:#008000;font-weight:700"), uniq(cachedFontCheckList);
              DEBUG("%cStart real-time font detect", "color:#dc143c;font-weight:700");
              const fontCheckList = await detectAvailableFonts();
              const uniqueFontCheckList = uniq(fontCheckList);
              cache.set(FONTCHECKLIST, uniqueFontCheckList, 2592e6);
              return uniqueFontCheckList;
            } catch (e) {
              return cache.remove(FONTCHECKLIST), ERROR(`${e.name} in GetAvailableFontData: %s (%s)`, e.message, def.array.exps.push(`[getAvailableFontData]: ${e}`)), [];
            }
          }

          function standardizeString(node, isDoubleQuote, isConvertHTML, filterRegex) {
            let standardizeText = convertFullToHalf(node.value).replace(/['"`·“”‘’]/g, isDoubleQuote ? `"` : `'`);
            standardizeText = standardizeText.replace(/，/g, `,`).replace(/：/g, `:`);
            standardizeText = (node.value = filterRegex instanceof RegExp ? standardizeText.replace(filterRegex, "") : standardizeText).trim();
            return isConvertHTML ? convertHtmlToText(standardizeText) : standardizeText;
          }

          function fontSelectionAndCustomFonts(fontSetFn) {
            try {
              fontSetFn?.fsearch();
              qS(`#${def.id.fonttooltip}`, def.var.configIf)?.addEventListener("dblclick", async e => {
                stopEventPropagation(e, { prevent: true });
                let savedFontListString = "";
                const cusFontList = await GMgetValue(CUSTOMFONTS);
                try {
                  const cusFontCheck = cusFontList ? [...JSON.parse(decrypt(cusFontList))] : [];
                  cusFontCheck.forEach(item => delete item.sort && (savedFontListString += JSON.stringify(item) + "\r\n"));
                } catch (e) {
                  ERROR(`${e.name} in FontSelectionAndCustomFonts:`, e.message);
                }
                const messageText = IS_CHN
                  ? `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">\u2474 以下文本域可按预定格式增加自定义字体。请用小贴士或按示例填写，输入有误将被自动过滤。与『<a href="${GUIDELINE_URL}#既定的字体表" title="查看内置字体表" target="_blank">内置字体表</a>』重复的字体将被自动剔除。【功能小贴士：<span id="${def.const.seed}.addTools" title="点击开启工具" class="${def.const.seed}.clr:crimson ${def.const.seed}.cs:pointer">字体添加辅助工具</span>】</p><p><textarea id="${def.const.seed}.custom.fontlist" placeholder='字体表自定义格式样例，每行一组字体名称数据，如下：\r\n{ "ch":"中文字体名一","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"中文字体名二","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(注一：如无中文字体名，可用英文或其他语言名称替代)\r\n(注二：“ps:” 该项为字体的PostScript名称，可选填写)'>${savedFontListString}</textarea></p><p id="${def.const.seed}.warning.chn">（请勿添加过多自定义字体，避免造成页面加载缓慢）</p><p class="${def.const.seed}.fontfeature">\u2475 以下设置字体的 font-variant 变体样式属性。<br/><span class="${def.const.seed}.clr:crimson">如果您不了解该属性，请保持留空，以免造成渲染异常。</span></p><p class="${def.const.seed}.input.pdb:5px"><input id="${def.const.seed}.custom.variant" placeholder='例如：common-ligatures small-caps' value='${fontVariant}'></p><p class="${def.const.seed}.fontvariant">\u2476 以下设置 OpenType 字体 <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。<br/><span class="${def.const.seed}.clr:crimson">如果您设置的常规字体非 OpenType 字体，请保持留空。</span></p><p class="${def.const.seed}.input.pdb:5px"><input id="${def.const.seed}.custom.feature" placeholder='例如："liga" 0,"tnum","zero"' value='${fontFeature}'></p>`
                  : `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">\u2474 Add custom fonts in predefined formats, either by 𝐄𝐱𝐚𝐦𝐩𝐥𝐞 or by 𝐅𝐨𝐧𝐭 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀𝐢𝐝. Incorrect entries will be filtered. Fonts that duplicate the <a href="${GUIDELINE_URL}#built-in-font-library" title="Viewing the built-in font library" Target="_blank">built-in font library</a> will be automatically removed. (𝐓𝐈𝐏: <span id="${def.const.seed}.addTools" title="Click to open the aid tool" class="${def.const.seed}.clr:crimson ${def.const.seed}.cs:pointer">𝐅𝐨𝐧𝐭 𝐀𝐝𝐝𝐢𝐧𝐠 𝐀𝐢𝐝</span>)</p><p><textarea id="${def.const.seed}.custom.fontlist" placeholder='One set of Fontname data per line, as follow:\r\n{ "ch":"CHN Fontname 1","en":"EN Fontname 1" }\u21b2\r\n{ "ch":"CHN Fontname 2","en":"EN Fontname 2","ps":"Post-Script Name" }\u21b2\r\n\r\n(Note1: If no Chinese fontname, use another instead) \r\n (Note2: "ps:" for the font PostScript name, optional)'>${savedFontListString}</textarea></p><p id="${def.const.seed}.warning.en">(Adding too many custom fonts will cause slow loading)</p><p class="${def.const.seed}.fontvariant">\u2475 Set font variants CSS shorthand property.<br/><span class="${def.const.seed}.clr:crimson">If you do not understand this property, leave it blank.</span></p><p class="${def.const.seed}.input.pdb:5px"><input id="${def.const.seed}.custom.variant" placeholder='Such as: common-ligatures small-caps' value='${fontVariant}'></p><p class="${def.const.seed}.fontfeature">\u2476 Set OpenType font <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> property.<br/><span class="${def.const.seed}.clr:crimson">Leave blank if using custom font that is not OpenType.</span></p><p class="${def.const.seed}.input.pdb:5px"><input id="${def.const.seed}.custom.feature" placeholder='Such as: "liga" 0,"tnum","zero"' value='${fontFeature}'></p>`;
                const [trueButtonText, falseButtonText] = IS_CHN ? ["保 存", "帮助文档"] : ["Save", "Help"];
                const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "自定义字体表"] : ["Cancel", "Custom Font Library"];
                const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                const [fontlistNode, featureNode, variantNode] = ["fontlist", "feature", "variant"].map(i => qS(`#${def.const.seed}\\.custom\\.${i}`, def.var.dialogIf));
                removeKeyboardEvent(fontlistNode, featureNode, variantNode);
                let [customFontlist, customFeature, customVariant] = [fontlistNode.value.trim(), featureNode.value.trim(), variantNode.value.trim()];
                qS(`#${def.const.seed}\\.addTools`, def.var.dialogIf)?.addEventListener("click", () => {
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
                      const aTrim = fontlistNode.value.trim() ? "\r\n" : "";
                      fontlistNode.value = fontlistNode.value.trim().concat(aTrim, cusFontName, "\r\n");
                      customFontlist = fontlistNode.value.trim();
                      fontlistNode.scrollTop = fontlistNode.scrollHeight;
                    } else alert(IS_CHN ? "英文字体家族名称 格式输入错误！" : "English Fontname Input Format Error!");
                  } else alert(IS_CHN ? "中文字体家族名称 格式输入错误！" : "Chinese Fontname Input Format Error!");
                });
                fontlistNode?.addEventListener("change", () => (customFontlist = standardizeString(fontlistNode, true, false)));
                featureNode?.addEventListener("change", () => (customFeature = standardizeString(featureNode, true, true, /[^\w",\- ]/g)));
                variantNode?.addEventListener("change", () => (customVariant = standardizeString(variantNode, true, true, /[^\w",\- ]/g)));
                if (await frDialog.respond()) {
                  customFeature || customVariant ? saveData(CUSTOMPROPERTY, { feature: customFeature, variant: customVariant }) : GMdeleteValue(CUSTOMPROPERTY);
                  const regex = /{\s*"ch":\s*"@?[^"]+"\s*,\s*"en":\s*"@?[^"\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+"\s*(?:,\s*"ps":\s*"[^"]+"\s*)?}/g;
                  const fontListArray = customFontlist.match(regex);
                  if (customFontlist.length === 0) {
                    GMdeleteValue(CUSTOMFONTS);
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:indigo">自定义字体表已初始化成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p>`
                      : `<p class="${def.const.seed}.clr:indigo">Custom font library initialized successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义字体数据重置"] : ["OK", "Customized FontData Reset"];
                    const successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond(cache.remove(FONTCHECKLIST))) closeConfigurePage({ isReload: true });
                  } else if (safeArray.isArray(fontListArray) && fontListArray.length > 0) {
                    saveData(CUSTOMFONTS, getNonDuplicateFontArray(getUniqueFontlist(fontListArray.map(JSON.parse)), fontCheck));
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:green">您所提交的自定义字体已保存成功！<p><p>字体列表全局缓存已自动重建，当前页面即将刷新。</p><p class="${def.const.seed}.clr:ff7f50 ${def.const.seed}.fs:12p">注：格式错误或重复的字体代码将被自动过滤。</p>`
                      : `<p class="${def.const.seed}.clr:green">The customized font saved successfully!<p><p>The Fontlist cache has been rebuilt and reload.</p><p class="${def.const.seed}.clr:ff7f50 ${def.const.seed}.fs:12p">Note: Incorrectly or duplicate fonts were filtered.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义字体数据保存"] : ["OK", "Customized FontData Save"];
                    const successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond(cache.remove(FONTCHECKLIST))) closeConfigurePage({ isReload: true });
                  } else {
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:crimson">您所提交的自定义字体数据格式有误，请重新输入。<p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}.clr:crimson">The custom Fontdata is incorrectly.<p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "字体表数据格式错误"] : ["OK", "Font Library Data Format Error"];
                    const errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) return copyToClipboard(customFontlist), dblClick(qS(`#${def.id.fonttooltip}`, def.var.configIf));
                  }
                } else GMopenInTab(`${GUIDELINE_URL}${IS_CHN ? "#自定义字体的添加" : "#adding-custom-fonts"}`, false);
              });
            } catch (e) {
              ERROR(`${e.name} in FontSelectionAndCustomFonts: %s (%s)`, e.message, def.array.exps.push(`[fontSelectionAndCustomFonts]: ${e}`));
            }
          }

          function checkTextareaFormat(textarea, type) {
            const handleInput = async event => {
              const target = event.target;
              const value = target.value.trim();
              if (value.length === 0) return target.classList.remove(`${def.const.seed}.bd:crimson`);
              try {
                const parsedValue = JSON.parse(value);
                if (type === "object" && getObjectType.call(parsedValue) !== "[object Object]") throw new Error("Format Error");
                if (type === "array" && (!safeArray.isArray(parsedValue) || asArray(parsedValue).SomeX(v => typeof v !== "string"))) throw new Error("Format Error");
                const previousCursorPosition = target.selectionStart;
                const formattedValue = JSON.stringify(parsedValue, null, 4);
                const newCursorPosition = previousCursorPosition + formattedValue.length - target.value.length;
                const scrollTop = ((target.value = formattedValue), target.classList.remove(`${def.const.seed}.bd:crimson`), target.scrollTop);
                sleep(10)(scrollTop).then(t => (target.scrollTop = t), target.setSelectionRange(newCursorPosition, newCursorPosition));
              } catch (_) {
                target.classList.add(`${def.const.seed}.bd:crimson`);
              }
            };
            textarea?.addEventListener("change", event => standardizeString(event.target, true, false) && handleInput(event));
            textarea?.addEventListener("input", handleInput);
          }

          function setFontOverrideDefTrigger(savedData) {
            qS(`#${def.const.seed}\\.fontrewrite\\.def`, def.var.configIf)?.addEventListener("dblclick", async e => {
              stopEventPropagation(e, { prevent: true });
              const _fontOverrideDef = JSON.stringify(savedData, null, 4);
              const rewriteText = IS_CHN
                ? `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">以下文本域可按预定格式填写字体重写的自定义数据。整体为数组类型，每个字体名称占一行，并使用半角双引号包括；如字体名称包含中文等双字节文本时，请在双引号内使用半角花括号包括。如您不了解该数据的含义，请勿修改，以免造成全局字体重写出错。<span class="${def.const.seed}.clr:crimson">(强烈建议您：按 <a href="${def.url.feedback}/267#discussion-5692372" target="_blank">作者提议</a> 填写此内容)</span></p><p><textarea id="${def.const.seed}.fontoverride.defarray">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}.warning.chn">（请勿添加脚本字体表已存在的字体，如重复将自动删除）</p>`
                : `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">Predefined format overall array type, one Fontname per line, and the use of half-width double quotes include; If the fontname contains double-byte text such as Chinese, please use half-width brackets within the double quotes include. <span class="${def.const.seed}.clr:crimson">(Suggestion: "<a href="${def.url.feedback}/267#discussion-5692372" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}.fontoverride.defarray">${_fontOverrideDef}</textarea></p><p id="${def.const.seed}.warning.en">(Duplicate font names with font library will be removed)</p>`;
              const messageText = IS_REAL_GECKO
                ? `<div id="${def.id.fi}">
                    <span class="${def.const.seed}.cusmono">${IS_CHN ? "修复当前站点 &lt;INPUT&gt; 的样式问题" : "Fix &lt;INPUT&gt; Issue For Current Site"}</span>
                    <input type="checkbox" id="${def.const.seed}.fixinput" class="${def.class.checkbox}" ${localStorage?.getItem(IS_DISCUZ) === "true" ? "checked" : ""} />
                    <label for="${def.const.seed}.fixinput"></label>
                  </div>${rewriteText}`
                : rewriteText;
              const [trueButtonText, neutralButtonText, titleText] = IS_CHN ? ["确 定", "取 消", "自定义字体重写数据"] : ["OK", "Cancel", "Customized Font-Rewrite Data"];
              const frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const [fixInputNode, fontOverrideNode] = ["fixinput", "fontoverride\\.defarray"].map(s => qS(`#${def.const.seed}\\.${s}`, def.var.dialogIf));
              removeKeyboardEvent(fontOverrideNode);
              checkTextareaFormat(fontOverrideNode, "array");
              if (await frDialog.respond()) {
                const fontOverrideDefValue = fontOverrideNode.value.trim();
                try {
                  const parsedFontOverrideDef = fontOverrideDefValue ? JSON.parse(fontOverrideDefValue) : [];
                  if (!safeArray.isArray(parsedFontOverrideDef) || asArray(parsedFontOverrideDef).SomeX(d => typeof d !== "string")) throw new Error("Format Error");
                  let fontCheckList = await cache.get(FONTCHECKLIST);
                  fontCheckList = safeArray.isArray(fontCheckList) && fontCheckList.length > 0 ? fontCheckList : [];
                  const fontCheckArray = fontCheckList.filter(item => item.en !== "Microsoft YaHei").map(item => (item.en.startsWith("\\") ? `{${item.ch}}` : item.en));
                  const baseFontArray = INITIAL_REMARKS.fontBase.replace(/'/g, "").split(",");
                  const monoFontArray = (monoFontList || INITIAL_REMARKS.monospacedFont).replace(/'/g, "").split(",");
                  const filterFonts = uniq(["Courier New", "Courier", "monospace", ...baseFontArray, ...fontCheckArray, ...monoFontArray]);
                  const fontOverrideData = uniq(parsedFontOverrideDef, item => item && typeof item === "string" && !filterFonts.includes(item)).sort();
                  if (fixInputNode) localStorage?.setItem(IS_DISCUZ, fixInputNode.checked);
                  saveData(FONTOVERRIDE, fontOverrideData);
                  const messageText = IS_CHN ? `自定义字体重写数据已成功保存！页面即将刷新。` : `Custom-font-rewrite-data was saved, refresh now!`;
                  const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义字体重写数据设置成功"] : ["OK", "Customized Font-rewrite Data Save"];
                  const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:green">${messageText}</p>`, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                } catch (_) {
                  const messageText = IS_CHN ? `自定义字体重写数据格式错误，请重新输入！` : `Custom-font-rewrite-data error, please re-enter!`;
                  const [trueButtonText, titleText] = IS_CHN ? ["确 定", "重写数据格式错误"] : ["OK", "Customized Font-Rewrite Data Error"];
                  const errorDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:8b0000">${messageText}</p>`, titleText });
                  if (await errorDialog.respond()) dblClick(qS(`#${def.const.seed}\\.fontrewrite\\.def`, def.var.configIf));
                }
              }
            });
          }

          function getAndMonitorCurrentFont(fontFaceNode, inputNode) {
            const handleFontChange = async () => {
              qS(`#${def.id.renderCanvas}`, def.var.configIf)?.click();
              qS(`#${def.id.rdCanvas}`, def.var.configIf)?.classList.toggle(`${def.const.seed}.vis:hidden`, !fontFaceNode?.checked);
              await getCurrentFontName(CONST_VALUES.fontFace, selectedFont).then(inputPlaceholder);
              if (fontFaceNode?.checked && !CONST_VALUES.fontFace) inputNode?.setAttribute("placeholder", IS_CHN ? "正在恢复之前设置的字体…" : "Restore previous font…");
              sleep(220)(!CONST_VALUES.fontFace).then(r => r && qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.var.configIf)?.click());
            };
            getCurrentFontName(CONST_VALUES.fontFace, selectedFont).then(inputPlaceholder);
            fontFaceNode?.addEventListener("change", handleFontChange);
          }

          function getFontSizeScale(fontScaleNode, submitButton, rangeShadowRoot) {
            if (!isFontsize || !fontScaleNode || !rangeShadowRoot) return;
            try {
              setFontScaleDefTrigger();
              const drawScale = qS(`#${def.id.scale}`, rangeShadowRoot);
              fontScaleNode.value = CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3);
              rangeSliderWidget(drawScale, fontScaleNode, 3, true);
              checkInputValue(fontScaleNode, drawScale, /^[0-2](\.[0-9]{1,3})?$/, 3, true);
              return drawScale;
            } catch (e) {
              ERROR(`${e.name} in GetFontSizeScale: %s (%s)`, e.message, def.array.exps.push(`[getFontSizeScale]: ${e}`));
            } finally {
              saveChangeStatus(fontScaleNode, CONST_VALUES.fontSize, submitButton, true);
            }
          }

          function setFontScaleDefTrigger() {
            qS(`#${def.const.seed}\\.fontscale\\.def`, def.var.configIf)?.addEventListener("dblclick", async e => {
              stopEventPropagation(e, { prevent: true });
              const fontScaleDefJSON = await getFontScaleDef();
              const fontScaleDefString = JSON.stringify(fontScaleDefJSON, null, 4);
              const messageText = IS_CHN
                ? `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">以下文本域可按预定格式填写“字体比例缩放功能”所需的自定义站点缩放数据配置。由于该数据为脚本核心设置数据，如果您不了解该设置数据的格式要求或数据含义，请勿修改该数据！<span class="${def.const.seed}.clr:crimson">（强烈建议您：按 <a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">作者提议</a> 填写此内容）</span></p><p><textarea id="${def.const.seed}.fontscale.defjson">${fontScaleDefString}</textarea></p><p id="${def.const.seed}.warning.chn">（如果以上JSON内容格式错误，会造成脚本出错使渲染失效）</p>`
                : `<p class="${def.const.seed}.clr:555 ${def.const.seed}.fs:14p">Fill in the custom site scaling data configuration of the "Font Scaling" in a predetermined format. If you do not understand the meaning of the data, please do not modify it! <span class="${def.const.seed}.clr:crimson">(Suggestion: "<a href="${def.url.feedback}/267#discussioncomment-7161615" target="_blank">Author's proposal</a>")</span></p><p><textarea id="${def.const.seed}.fontscale.defjson">${fontScaleDefString}</textarea></p><p id="${def.const.seed}.warning.en">(If the JSON format is incorrect, font rendering will fail)</p>`;
              const [trueButtonText, neutralButtonText, titleText] = IS_CHN ? ["确 定", "取 消", "站点缩放修正设置数据"] : ["OK", "Cancel", "Sites Scaling Setting Data"];
              const frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
              const fontScaleNode = qS(`#${def.const.seed}\\.fontscale\\.defjson`, def.var.dialogIf);
              removeKeyboardEvent(fontScaleNode);
              checkTextareaFormat(fontScaleNode, "object");
              if (await frDialog.respond()) {
                const fontScaleDefValue = fontScaleNode.value.trim();
                try {
                  const fontScaleData = fontScaleDefValue ? JSON.parse(fontScaleDefValue) : object();
                  if (getObjectType.call(fontScaleData) !== "[object Object]") throw new Error("Format Error");
                  saveData(FONTSCALE, fontScaleData);
                  const messageText = IS_CHN ? `站点缩放修正数据已保存，页面即将刷新。` : `Sites-scaling-fix-data was saved, refresh now!`;
                  const [trueButtonText, titleText] = IS_CHN ? ["确 定", "站点缩放修正数据设置成功"] : ["OK", "Sites Scaling-Fix Data Save"];
                  const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:green">${messageText}</p>`, titleText });
                  if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                } catch (_) {
                  const messageText = IS_CHN ? `站点缩放修正设置数据格式错误，请重新输入！` : `Sites-scaling-fix-data error, please re-enter!`;
                  const [trueButtonText, titleText] = IS_CHN ? ["确 定", "设置数据格式错误"] : ["OK", "Sites Scaling-Fix Data Error"];
                  const errorDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:8b0000">${messageText}</p>`, titleText });
                  if (await errorDialog.respond()) dblClick(qS(`#${def.const.seed}\\.fontscale\\.def`, def.var.configIf));
                }
              }
            });
          }

          function getFixViewportBool(fontScaleNode, submitButton) {
            const fixViewportT = qS(`#${def.id.fixViewport}`, def.var.configIf);
            if (!isFontsize || !isFixViewport || !fontScaleNode || !fixViewportT) return;
            try {
              const fviewportNode = qS(`#${def.id.fviewport}`, def.var.configIf);
              const toggleVisibility = () => fviewportNode?.classList.toggle(`${def.const.seed}.vis:hidden`, fontScaleNode.value === "OFF");
              fontScaleNode.addEventListener("change", toggleVisibility);
              return toggleVisibility(), fixViewportT;
            } catch (e) {
              ERROR(`${e.name} in GetFixViewportBool: %s (%s)`, e.message, def.array.exps.push(`[getFixViewportBool]: ${e}`));
            } finally {
              saveChangeStatus(fixViewportT, CONST_VALUES.fixViewport, submitButton);
            }
          }

          function getFontsStroke(strokeNode, submitButton, rangeShadowRoot) {
            if (!strokeNode || !rangeShadowRoot) return;
            try {
              const drawStrock = qS(`#${def.id.stroke}`, rangeShadowRoot);
              strokeNode.value = CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3);
              rangeSliderWidget(drawStrock, strokeNode, 3);
              checkInputValue(strokeNode, drawStrock, /^[0-1](\.[0-9]{1,3})?$/, 3);
              return drawStrock;
            } catch (e) {
              ERROR(`${e.name} in GetFontsStroke: %s (%s)`, e.message, def.array.exps.push(`[getFontsStroke]: ${e}`));
            } finally {
              saveChangeStatus(strokeNode, CONST_VALUES.fontStroke, submitButton);
            }
          }

          function getFixStrokeBool(strokeNode, submitButton) {
            if (!IS_CAUSED_BOLDSTROKEERROR || !strokeNode) return object();
            const strokeFixerNames = ["fixStroke", "fixShadow", "lazyload", "fstroke", "fshadow"];
            const [fixStrokeT, fixShadowT, lazyloadT, fstrokeT, fshadowT] = strokeFixerNames.map(item => qS(`#${def.id[item]}`, def.var.configIf));
            if (!fixStrokeT || !lazyloadT || !fstrokeT || !fshadowT) return object();
            const handleStrokeChange = () => fstrokeT.classList.toggle(`${def.const.seed}.vis:hidden`, strokeNode.value === "OFF");
            const handleMouseEnter = () => {
              fshadowT.classList.add(`${def.const.seed}.vis:visible`);
              syncScrollTransform(`#${def.id.fshadow}`, true);
              if (!IS_CAUSED_BOLDSHADOWERROR) return;
              const shadowFixTs = qA(`#${def.id.fshadow}\\.shadow\\.label,#${def.id.fshadow}\\.shadow\\.text`, def.var.configIf);
              const hasShadow = !Number(qS(`#${def.id.shadowSize}`, def.var.configIf)?.value);
              shadowFixTs.forEach(item => item.classList.toggle(`${def.const.seed}.disp:none`, hasShadow));
            };
            const handleClick = () => {
              lazyloadT && showFixConfig(lazyloadT, "lazyload", !fixStrokeT.checked);
              if (IS_CAUSED_BOLDSHADOWERROR && fixShadowT) showFixConfig(fixShadowT, "fixShadow", !fixStrokeT.checked);
            };
            const handleMouseLeave = () => void (fshadowT.classList.remove(`${def.const.seed}.vis:visible`), syncScrollTransform(`#${def.id.fshadow}`, false));
            try {
              strokeNode.addEventListener("change", handleStrokeChange);
              fixStrokeT.addEventListener("mouseenter", handleMouseEnter);
              fshadowT.addEventListener("mouseleave", handleMouseLeave);
              fixStrokeT.addEventListener("click", handleClick);
              return handleStrokeChange(), { fixStrokeT, fixShadowT, lazyloadT };
            } catch (e) {
              ERROR(`${e.name} in GetFixStrokeBool: %s (%s)`, e.message, def.array.exps.push(`[getFixStrokeBool]: ${e}`));
            } finally {
              saveChangeStatus(fixStrokeT, CONST_VALUES.fixStroke, submitButton);
              saveChangeStatus(lazyloadT, CONST_VALUES.lazyload, submitButton);
              if (IS_CAUSED_BOLDSHADOWERROR) saveChangeStatus(fixShadowT, CONST_VALUES.fixShadow, submitButton);
            }
          }

          function showFixConfig(node, value, disabled) {
            node.toggleAttribute("disabled", disabled);
            node.nextElementSibling?.classList.toggle(`${def.const.seed}.ft:gs1`, disabled);
            if (disabled) node.checked && node.click();
            else if (CONST_VALUES[value]) !node.checked && node.click();
          }

          function getFontShadow(shadowNode, shadowColorNode, submitButton, rangeShadowRoot) {
            if (!shadowNode || !shadowColorNode || !rangeShadowRoot) return;
            const renderCanvasT = qS(`#${def.id.renderCanvas}`, def.var.configIf);
            try {
              const drawShadow = qS(`#${def.id.shadow}`, rangeShadowRoot);
              const isShadowOFF = CONST_VALUES.fontShadow === 0;
              shadowNode.value = isShadowOFF ? "OFF" : CONST_VALUES.fontShadow.toFixed(2);
              rangeSliderWidget(drawShadow, shadowNode, 2);
              checkInputValue(shadowNode, drawShadow, /^[0-8](\.[0-9]{1,2})?$/, 2);
              shadowColorNode.classList.toggle(`${def.const.seed}.disp:none`, isShadowOFF);
              shadowNode.addEventListener("change", () => shadowColorNode.classList.toggle(`${def.const.seed}.disp:none`, isShadowOFF));
              return drawShadow;
            } catch (e) {
              ERROR(`${e.name} in GetFontShadow: %s (%s)`, e.message, def.array.exps.push(`[getFontShadow]: ${e}`));
            } finally {
              saveChangeStatus(shadowNode, CONST_VALUES.fontShadow, submitButton);
              saveChangeStatus(renderCanvasT, CONST_VALUES.renderCanvas, submitButton);
            }
          }

          function getColorAndColorPicker(cpNode, button, defaultColor, colorReg) {
            if (!cpNode || !button) return object();
            try {
              if (!global.FRColorPicker) return __console("warn", "FRColorPicker failed to load, inserted <INPUT> instead."), revokeColorPicker(cpNode, defaultColor, colorReg);
              const colorPicker = new global.FRColorPicker(`#${def.id.color}`, def.var.configIf, { alpha: true, format: "hexa" });
              const color = colorPicker.fromString(defaultColor) && (colorPicker.targetElement.value = parseColor(colorPicker.toHEXAString()));
              colorPicker.onChange = () => (colorPicker.targetElement.value = parseColor(colorPicker.toHEXAString()));
              return DEBUG(`frColorPicker: %c${color}`, getBrightnessAndSetColor(color)) ?? colorPicker;
            } catch (e) {
              return ERROR(`${e.name} in GetColorAndColorPicker:`, e.message) ?? { fromString: value => (cpNode.style.cssText = `--fr-input-color:${(cpNode.value = value)}`) };
            } finally {
              saveChangeStatus(cpNode, defaultColor, button);
            }
          }

          function revokeColorPicker(cpNode, thisColor, colorReg) {
            cpNode.value = thisColor;
            cpNode.style.cssText = `--fr-input-color:${thisColor}`;
            cpNode.addEventListener("change", function () {
              const color = this.value;
              this.value = colorReg.test(color) ? parseColor(color) : thisColor;
              this.style.cssText = `--fr-input-color:${colorReg.test(color) ? revertColor(color) : thisColor}`;
            });
            return safeObject.assign(object(), { fromString: value => (cpNode.style.cssText = `--fr-input-color:${(cpNode.value = value)}`) });
          }

          function doubleClickToEdit(fontCssNode) {
            fontCssNode?.addEventListener("dblclick", event => {
              stopEventPropagation(event, { prevent: true });
              fontCssNode.classList.add(def.class.notreadonly);
              ["readonly", "title"].forEach(name => fontCssNode.removeAttribute(name));
            });
          }

          function dblClick(target) {
            if (target) target.dispatchEvent(new Event("dblclick", { bubbles: true, cancelable: false }));
          }

          function customMonospceFont(customMonoNode) {
            customMonoNode?.addEventListener("dblclick", async e => {
              try {
                stopEventPropagation(e, { prevent: true });
                const [_config_data_, { monoSiteRules: siteRule, monoFontList: fontlist, monoFeature: feature }] = await Promise.all([getConfigureData(), getCustomMonoData()]);
                const [monospacedsiterules, monospacedfont, monospacedfeature] = [siteRule.join("\r\n").trim(), fontlist.trim(), feature.trim()];
                const customMonoTextareasHTML = IS_CHN
                  ? `<p class="${def.const.seed}.mono.notify">\u2474 以下文本域可设置需应用等宽字体的根域及元素选择器。<br/><span class="${def.const.seed}.clr:crimson">如果您不了解站点样式规则，请保持留空【<a href="${def.url.feedback}/74" target="_blank">查看推荐规则</a>】</span></p><p><textarea id="${def.const.seed}.monospaced.siterules" placeholder="每行只能允许一组规则，相同站点不同规则可重复添加，相同样式选择器可定义多个根域名进行匹配。例如：\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev|github.io###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}.mono.notify">\u2475 以下可设置自定义英文等宽字体，请按示例格式填写。<br/><span class="${def.const.seed}.clr:crimson">请注意：monospace字体族已程序内置，无需重复添加。</span></p><p><input id="${def.const.seed}.monospaced.font" placeholder="例如：'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}.mono.notify">\u2476 以下设置 OpenType 字体 <a href="https://learn.microsoft.com/zh-cn/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。<br/><span class="${def.const.seed}.clr:crimson">如果您设置的等宽字体非 OpenType 字体，请保持留空。</span></p><p><input id="${def.const.seed}.monospaced.feature" placeholder='例如："liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`
                  : `<p class="${def.const.seed}.mono.notify">\u2474 Set root domains and selectors for monospaced font.<br/><span class="${def.const.seed}.clr:crimson">It is recommended that check out the <a href="${def.url.feedback}/74" target="_blank">Author's Proposal</a></span></p><p><textarea id="${def.const.seed}.monospaced.siterules" placeholder="Each line allows a set of rules, different rules for the same site can be added repeatedly, and the same selector can match multiple root domains. Such as:\r\n@github.com##[class~='blob-code'] *\r\n@github.com##.example,#abc,div:not(.test)\r\n@github.dev|github.io###test:not([class*='test'])">${monospacedsiterules}\r\n</textarea></p><p class="${def.const.seed}.mono.notify">\u2475 Set custom monospaced font according to example.<br/><span class="${def.const.seed}.clr:crimson">Note: monospace is built-in, do not add it repeatedly.</span></p><p><input id="${def.const.seed}.monospaced.font" placeholder="Such as: 'Source Code Pro','Mono','Monaco'" value="${monospacedfont}"></p><p class="${def.const.seed}.mono.notify">\u2476 Set OpenType font <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> property.<br/><span class="${def.const.seed}.clr:crimson">Leave blank if using custom font that is not OpenType.</span></p><p><input id="${def.const.seed}.monospaced.feature" placeholder='Such as: "liga" 0,"tnum","zero"' value='${monospacedfeature}'></p>`;
                const titleText = IS_CHN ? "设置自定义等宽字体" : "Set Custom Monospaced Font";
                const messageText = `<div id="${def.id.cm}">
                    <span class="${def.const.seed}.cusmono">${IS_CHN ? "开启自定义等宽字体（默认：关闭）" : "Enable Custom Monospaced Font"}</span>
                    <input type="checkbox" id="${def.id.iscusmono}" class="${def.class.checkbox}" ${_config_data_.isCustomMono ? "checked" : ""} />
                    <label for="${def.id.iscusmono}"></label>
                </div>${customMonoTextareasHTML}`;
                const [trueButtonText, neutralButtonText] = IS_CHN ? ["保存数据", "取 消"] : ["Save", "Cancel"];
                const frDialog = new FrDialogBox({ trueButtonText, neutralButtonText, messageText, titleText });
                const monospaceNodes = ["siterules", "font", "feature"].map(i => qS(`#${def.const.seed}\\.monospaced\\.${i}`, def.var.dialogIf));
                const customMonoSwitch = qS(`#${def.id.iscusmono}`, def.var.dialogIf);
                const changeDisabledStatus = (listenerCheck, nodes, cssName) =>
                  nodes.forEach(node => (node.toggleAttribute("disabled", !listenerCheck), node.classList.toggle(cssName, !listenerCheck)));
                changeDisabledStatus(customMonoSwitch.checked, monospaceNodes, def.class.readonly);
                customMonoSwitch?.addEventListener("change", () => changeDisabledStatus(customMonoSwitch.checked, monospaceNodes, def.class.readonly));
                let [custom_MonoSiteRules, custom_MonoFontList, custom_MonoFontFeature] = monospaceNodes.map(node => convertHtmlToText(node.value.trim()));
                removeKeyboardEvent(...monospaceNodes);
                const [monoSiteRulesNode, monoFontNode, monoFeatureNode] = monospaceNodes;
                monoSiteRulesNode.addEventListener("change", () => (custom_MonoSiteRules = standardizeString(monoSiteRulesNode, false, true)));
                monoFontNode.addEventListener("change", () => (custom_MonoFontList = standardizeString(monoFontNode, false, true, /'(?:ui-)?monospace',?/gi)));
                monoFeatureNode.addEventListener("change", () => (custom_MonoFontFeature = standardizeString(monoFeatureNode, true, true, /[^\w",\- ]/g)));
                if (await frDialog.respond()) {
                  const monoSiteRulesArray = custom_MonoSiteRules.match(/@((?:[\w[\]\-.:]+\|?)+)##(?![^@]*##)[\w\-*.#:+>()~[\]=^$|,' ]+/g);
                  if (custom_MonoSiteRules && !monoSiteRulesArray) {
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:crimson">自定义根域及元素选择器有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}.clr:crimson">Custom Root/Selectors data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义根域及元素选择器数据错误"] : ["OK", "Custom Root/Selectors Data Error"];
                    const errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) return copyToClipboard(custom_MonoSiteRules), dblClick(qS(`#${def.id.mono}`, def.var.configIf));
                  }
                  const monoFontListArray = custom_MonoFontList.match(/'@?[^'\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+'/g);
                  if (custom_MonoFontList && !monoFontListArray) {
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:crimson">您提交的自定义等宽字体数据有误，请重新输入。</p><p>注意：先前提交的信息已自动保存至剪切板中。</p>`
                      : `<p class="${def.const.seed}.clr:crimson">Custom Monospaced Font Data error, Please refill!</p><p>Note: Previous content saved to the clipboard.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义等宽字体数据错误"] : ["OK", "Custom Monospaced Font Data Error"];
                    const errorDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await errorDialog.respond()) return copyToClipboard(custom_MonoFontList), dblClick(qS(`#${def.id.mono}`, def.var.configIf));
                  }
                  const isSiteRules = !custom_MonoSiteRules || (safeArray.isArray(monoSiteRulesArray) && monoSiteRulesArray.length > 0);
                  const isFontList = !custom_MonoFontList || (safeArray.isArray(monoFontListArray) && monoFontListArray.length > 0);
                  if (isSiteRules && isFontList) {
                    const monospaced_fontListString = uniq(monoFontListArray).join();
                    !custom_MonoSiteRules ? GMdeleteValue(MONORULES) : saveData(MONORULES, uniq(monoSiteRulesArray));
                    !custom_MonoFontList ? GMdeleteValue(MONOFONTS) : saveData(MONOFONTS, monospaced_fontListString);
                    !custom_MonoFontFeature ? GMdeleteValue(MONOFEATS) : saveData(MONOFEATS, custom_MonoFontFeature);
                    saveData(CONFIGURE, { ..._config_data_, isCustomMono: Boolean(qS(`#${def.id.iscusmono}`, def.var.dialogIf)?.checked) });
                    const messageText = IS_CHN
                      ? `<p class="${def.const.seed}.clr:green">您提交的自定义等宽字体数据已保存成功！</p><p>当前页面将在您确认后自动刷新。</p><p class="${def.const.seed}.clr:ff7f50 ${def.const.seed}.fs:12p">注：格式错误的输入内容已被自动过滤。</p>`
                      : `<p class="${def.const.seed}.clr:green">Custom Monospaced Data saved successfully!</p><p>The page will refresh after confirmation.</p><p class="${def.const.seed}.clr:ff7f50 ${def.const.seed}.fs:12p">Note: Incorrect content has been filtered.</p>`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "自定义等宽字体数据保存"] : ["OK", "Custom Monospaced Data Save"];
                    const successDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                    if (await successDialog.respond()) closeConfigurePage({ isReload: true });
                  }
                }
              } catch (e) {
                ERROR(`${e.name} in CustomMonospceFont:`, e.message);
              }
            });
          }

          function controlResetButton(resetT, fontSetFn, finalSettings, { drawScale, drawStrock, drawShadow }) {
            const { smoothT, ffaceT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, fixShadowT, shadowsT, canvasT, colorPickerT, colorshowT, fontCssT, fontExT } = finalSettings;
            resetT?.addEventListener("click", async () => {
              const messageText = IS_CHN
                ? `<p>『重置/恢复』将当前设置初始化为 <span class="${def.const.seed}.clr:708090">程序默认的初始数据</span> 或 <span class="${def.const.seed}.clr:708090">上次正确保存的数据</span>。一般是在您配置错误或需使用新功能参数的情况下才进行重置参数的操作。</p><p class="${def.const.seed}.clr:green">重置：重置当前数据为程序初始值，手动保存生效。</p><p class="${def.const.seed}.clr:8b0000">恢复：替换为上次正确保存的数据，自动恢复预览。</p><p class="${def.const.seed}.clr:808080">取消：放弃重置操作。</p>`
                : `<p>『Reset/Restore』Initializes the current settings to <span class="${def.const.seed}.clr:708090">the program's default initial data</span> or <span class="${def.const.seed}.clr:708090">the last saved data</span>. The reset is usually done when configuration error or new feature is needed. </p><p class="${def.const.seed}.clr:green"><b>Reset:</b> Reset the current data to the initial value of the program, and save data manually.</p><p class="${def.const.seed}.clr:8b0000"><b>Restore:</b> Replace all with the last correctly saved data, and automatically restore preview. </p><p class="${def.const.seed}.clr:808080"><b>Cancel:</b> Abort the reset operation. </p>`;
              const [trueButtonText, falseButtonText] = IS_CHN ? ["重 置", "恢 复"] : ["Reset", "Restore"];
              const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "参数重置确认"] : ["Cancel", "Confirm To Reset Settings"];
              const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
              const shadowColorNode = qS(`#${def.id.shadowColor}`, def.var.configIf);
              if (await frDialog.respond()) {
                smoothT.checked !== INITIAL_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== INITIAL_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                CONST_VALUES.fontSelect.split(",")[0] !== INITIAL_VALUES.fontSelect ? fontSetFn?.fresetList() : fontSetFn?.fdeleteList();
                if (isFontsize) {
                  setValueAndEvent(fontScaleT, INITIAL_VALUES.fontSize === 1 ? "OFF" : INITIAL_VALUES.fontSize.toFixed(3), "change");
                  setSliderProperty(drawScale, (def.var.curScale = INITIAL_VALUES.fontSize), 3);
                  if (isFixViewport) {
                    fontScaleT.value !== "OFF" && fixViewportT.checked !== INITIAL_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    qS(`#${def.id.fviewport}`, def.var.configIf)?.classList.toggle(`${def.const.seed}.vis:hidden`, fontScaleT.value === "OFF");
                  }
                }
                setValueAndEvent(strokeT, INITIAL_VALUES.fontStroke === 0 ? "OFF" : INITIAL_VALUES.fontStroke.toFixed(3), "change");
                setSliderProperty(drawStrock, INITIAL_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== (def.var.fixStroke = INITIAL_VALUES.fixStroke) ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== INITIAL_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  qS(`#${def.id.fstroke}`, def.var.configIf)?.classList.toggle(`${def.const.seed}.vis:hidden`, strokeT.value === "OFF");
                }
                setValueAndEvent(shadowsT, INITIAL_VALUES.fontShadow === 0 ? "OFF" : INITIAL_VALUES.fontShadow.toFixed(2), "change");
                setSliderProperty(drawShadow, INITIAL_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== INITIAL_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                shadowColorNode?.classList.toggle(`${def.const.seed}.disp:none`, shadowsT.value === "OFF");
                if (!IS_GREASEMONKEY) canvasT.checked !== INITIAL_VALUES.renderCanvas ? canvasT.click() : DEBUG("<canvas> NOT MODIFIED");
                setValueAndEvent(colorshowT, INITIAL_VALUES.shadowColor, "change", colorPickerT);
                setValueAndEvent(fontCssT, INITIAL_VALUES.fontCSS, "input");
                setValueAndEvent(fontExT, INITIAL_VALUES.fontEx, "input");
                sleep(220)(getCurrentFontName(ffaceT.checked, INITIAL_VALUES.fontSelect.replace(/'/g, "")))
                  .then(inputPlaceholder)
                  .then(() => qS(`#${def.id.submit} .${def.class.submit}[v-Preview="true"]`, def.var.configIf)?.click());
              } else {
                smoothT.checked !== CONST_VALUES.fontSmooth ? smoothT.click() : DEBUG("<fontSmooth> NOT MODIFIED");
                ffaceT.checked !== CONST_VALUES.fontFace ? ffaceT.click() : DEBUG("<fontFace> NOT MODIFIED");
                fontSetFn?.fdeleteList();
                if (isFontsize) {
                  setValueAndEvent(fontScaleT, CONST_VALUES.fontSize === 1 ? "OFF" : CONST_VALUES.fontSize.toFixed(3), "change");
                  setSliderProperty(drawScale, CONST_VALUES.fontSize, 3);
                  def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize));
                  if (isFixViewport) {
                    fixViewportT.checked !== CONST_VALUES.fixViewport ? fixViewportT.click() : DEBUG("<fixViewport> NOT MODIFIED");
                    qS(`#${def.id.fviewport}`, def.var.configIf)?.classList.toggle(`${def.const.seed}.vis:hidden`, fontScaleT.value === "OFF");
                  }
                }
                setValueAndEvent(strokeT, CONST_VALUES.fontStroke === 0 ? "OFF" : CONST_VALUES.fontStroke.toFixed(3), "change");
                setSliderProperty(drawStrock, CONST_VALUES.fontStroke, 3);
                if (IS_CAUSED_BOLDSTROKEERROR) {
                  fixStrokeT.checked !== (def.var.fixStroke = CONST_VALUES.o.fixStroke) ? fixStrokeT.click() : DEBUG("<fixStroke> NOT MODIFIED");
                  lazyloadT.checked !== CONST_VALUES.lazyload ? lazyloadT.click() : DEBUG("<lazyload> NOT MODIFIED");
                  qS(`#${def.id.fstroke}`, def.var.configIf)?.classList.toggle(`${def.const.seed}.vis:hidden`, strokeT.value === "OFF");
                }
                setValueAndEvent(shadowsT, CONST_VALUES.fontShadow === 0 ? "OFF" : CONST_VALUES.fontShadow.toFixed(2), "change");
                setSliderProperty(drawShadow, CONST_VALUES.fontShadow, 2);
                if (IS_CAUSED_BOLDSHADOWERROR) fixShadowT.checked !== CONST_VALUES.fixShadow ? fixShadowT.click() : DEBUG("<fixShadow> NOT MODIFIED");
                shadowColorNode?.classList.toggle(`${def.const.seed}.disp:none`, shadowsT.value === "OFF");
                if (!IS_GREASEMONKEY) canvasT.checked !== CONST_VALUES.renderCanvas ? canvasT.click() : DEBUG("<canvas> NOT MODIFIED");
                setValueAndEvent(colorshowT, CONST_VALUES.shadowColor, "change", colorPickerT);
                setValueAndEvent(fontCssT, CONST_VALUES.fontCSS, "input");
                setValueAndEvent(fontExT, CONST_VALUES.fontEx, "input");
                getCurrentFontName(ffaceT.checked, selectedFont).then(inputPlaceholder);
                loadPreview(def.var.preview, (def.var.topStyle = tStyle));
                delete def.var.preview && correctBoldPassive("recover", boldFixCSSText, document, true);
              }
            });
          }

          function controlSubmitButton(submitT, fontSetFn, finalSettings) {
            const { ffaceT, smoothT, fontScaleT, fixViewportT, strokeT, fixStrokeT, lazyloadT, shadowsT, fixShadowT, canvasT, colorshowT, colorReg, fontCssT, fontExT } = finalSettings;
            submitT?.addEventListener("click", async function () {
              const fontlists = fontSetFn?.fsearchList(def.id.fontName) ?? [];
              const fontselect = fontlists.length > 0 ? addSingleQuoteForItem(fontlists) : CONST_VALUES.fontSelect;
              const [fontface, smooth] = [ffaceT.checked, smoothT.checked];
              const fscaleValue = fontScaleT && /^[0-2](\.[0-9]{1,3})?$/.test(fontScaleT.value) ? parseFloat(fontScaleT.value) : INITIAL_VALUES.fontSize;
              const fscale = getFontScaleValue(!isEditorBlock && isFontsize, fscaleValue);
              const fixfviewport = isFixViewport && Number(fscale) !== 1 && fixViewportT.checked;
              const fstroke = /^[0-1](\.[0-9]{1,3})?$/.test(strokeT.value) ? Number(strokeT.value) : strokeT.value === "OFF" ? 0 : INITIAL_VALUES.fontStroke;
              const fixfstroke = (def.var.fixStroke = IS_CAUSED_BOLDSTROKEERROR && fstroke && fixStrokeT.checked);
              const lazyload = fixfstroke && lazyloadT.checked;
              const fshadow = /^[0-8](\.[0-9]{1,2})?$/.test(shadowsT.value) ? Number(shadowsT.value) : shadowsT.value === "OFF" ? 0 : INITIAL_VALUES.fontShadow;
              const fixfshadow = IS_CAUSED_BOLDSHADOWERROR && fixfstroke && fshadow && fixShadowT.checked;
              const [rendercanvas, pickedcolor, fcss, fex] = [canvasT?.checked, colorshowT.value, fontCssT.value, fontExT.value];
              const fscolor = colorReg.test(pickedcolor) ? revertColor(pickedcolor) : INITIAL_VALUES.shadowColor;
              const fontcss = fcss ? convertHtmlToText(fcss.replace(/["`]/g, "'")).replace(/[,]+/g, ",") : INITIAL_VALUES.fontCSS;
              const fontex = fex ? convertHtmlToText(fex.replace(/["`]/g, "'")).replace(/[,]+/g, ",") : "";
              const _IS_EMPTY_CONFIG = !fontface && !smooth && !fshadow && !fstroke && Number(fscale) === 1;
              if (isPreview && this.hasAttribute("v-Preview")) {
                try {
                  const _bodyscale = Number(fscale) !== 1 ? generateFontSizeCss(fscale) : "";
                  const _shadow = fshadow > 0 && fshadow <= 4 ? "text-shadow:var(--fr-font-shadow);" : "";
                  const _stroke = fstroke > 0 && fstroke <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "";
                  const _strokecsstext = `${_stroke ? fstroke : 0}px currentcolor`;
                  const _shadowcsstext = generateTextShadow(fshadow, fscolor);
                  const _smoothing = smooth ? fontSmoothCssText : "";
                  const _fontfamily = fontface ? "font-family:var(--fr-font-family),var(--fr-font-basefont),var(--fr-font-emoji);" : "";
                  const _selectedFontArray = fontselect?.replace(/["']/g, "").split(",") ?? [];
                  const _selectedFont = _selectedFontArray[1] ?? _selectedFontArray[0] ?? "";
                  const _fontfaces = fontface && _selectedFont ? await generateFontFaceCSS(_selectedFontArray, _selectedFont, fontOverrideDefData) : "";
                  const _excludeSplit = `${_shadow ? "text-shadow:none!important;" : ""}${_stroke ? "-webkit-text-stroke:var(--fr-no-stroke)!important;" : ""}`;
                  const _excludeCssText = fontex && (_shadow || _stroke) ? `${globalPrefix}:is(${fontex}){${_excludeSplit}}` : "";
                  const _codefont = fontex ? funcCodefont(fontex, fontface, isCustomMono) : "";
                  const _noTextShadowCss = IS_CAUSED_BOLDSHADOWERROR && fixfshadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "";
                  const _fixfontstroke = fixfstroke ? getBoldFixCssText(_noTextShadowCss) : "";
                  const _tFontStyle = `${_fontfaces}${_bodyscale}${globalPrefix}::placeholder,${globalPrefix}:is(${fontcss}${discuzIcon}){${_fontfamily}}${globalPrefix}:is(${fontcss}){${_shadow}${_stroke}${_smoothing}}${_excludeCssText}${_codefont}${_fixfontstroke}`;
                  const _firefoxInputFix = IS_REAL_GECKO && fontface ? def.var.style.firefox : "";
                  const _sharpRender = rendercanvas ? `--fr-render-shape:geometricPrecision;` : ``;
                  const _rootpseudoclass = `:root{--fr-font-basefont:${INITIAL_REMARKS.fontBase};--fr-font-emoji:${INITIAL_REMARKS.fontEmoji};${customFontFeature}--fr-font-fontscale:${fscale};--fr-font-family:${fontselect};--fr-font-shadow:${_shadowcsstext};--fr-font-stroke:${_strokecsstext};--fr-no-stroke:0px transparent;--fr-fix-stroke:var(--fr-no-stroke);--fr-fix-shadow:none;--fr-render-text:optimizeLegibility;${_sharpRender}--fr-render-image:auto;${monoFontText}${monoFallback}${monoShadowColor}${monoShadow}${monoFeatureText}}`;
                  const __tFontStyle = _IS_EMPTY_CONFIG ? `` : `${_rootpseudoclass}${_firefoxInputFix}${_tFontStyle}`;
                  restoreSaveButton({ button: this, isRestore: false });
                  getCurrentFontName(fontface, _selectedFont).then(inputPlaceholder);
                  loadPreview(isPreview, (def.var.topStyle = __tFontStyle), false) ?? DEBUG(`frColorPicker<Preview>: %c${parseColor(fscolor)}`, getBrightnessAndSetColor(fscolor));
                  correctBoldPassive("preview", _fixfontstroke, document, true);
                } catch (e) {
                  ERROR(`${e.name} in ControlSubmitButton.Preview:`, e.message);
                }
              } else {
                try {
                  const messageText = IS_CHN
                    ? `<p class="${def.const.seed}.clr:green ${def.const.seed}.fw:700">保存到全局数据：</p><p>将当前设置保存为全局设置，默认使用全局参数。</p><p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fw:700">保存到当前网站数据：<span id="${def.const.seed}.sitedatalist">[<span>全部数据列表</span>]</span></p><p class="${def.const.seed}.mh:22p"><span title="保存到网站数据会自动覆盖之前的数据" id="${def.const.seed}.save.sitedata">为 ${TOP_HOST} 保存独立的设置数据。</span>`
                    : `<p class="${def.const.seed}.clr:green ${def.const.seed}.fw:700">Save to Global Data:</p><p>Save as global setting, using global by default. </p><p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fw:700">Save to Current Website Data: <span id="${def.const.seed}.sitedatalist">[<span> All Data List </span>]</span></p><p class="${def.const.seed}.mh:22p"><span title="Data saved to the website will automatically overwrite the previous data" id="${def.const.seed}.save.sitedata">Save to website data for ${TOP_HOST}</span>`;
                  const [trueButtonText, falseButtonText] = IS_CHN ? ["保存到全局数据", "保存到网站数据"] : ["Global Save", "Website Save"];
                  const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "保存设置数据"] : ["Cancel", "Save Settings Data"];
                  const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                  let [domains, domainValues] = [await GMgetValue(DOMAINFONTSET)];
                  try {
                    domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
                  } catch (_) {
                    domainValues = [];
                  }
                  const awdlNode = qS(`#${def.const.seed}\\.sitedatalist`, def.var.dialogIf);
                  awdlNode?.classList.add(domainValues.length > 0 ? `${def.const.seed}.disp:inline.block` : `${def.const.seed}.disp:none`);
                  awdlNode?.addEventListener("click", () => void manageDomainsList());
                  const domainValueIndex = updateDomainsIndex(domainValues);
                  const cwdNode = qS(`#${def.const.seed}\\.save\\.sitedata`, def.var.dialogIf);
                  if (~domainValueIndex && cwdNode) {
                    const fontDate = setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(domainValues[domainValueIndex].fontDate));
                    const cwdNodeHTML = IS_CHN
                      ? `<p class="${def.const.seed}.save:p"><span class="${def.const.seed}.clr:indigo"><strong>上次保存：</strong>${fontDate} </span><button id="${def.const.seed}.del.sitedata" title="删除数据后将刷新页面">删除当前网站数据</button></p>`
                      : `<p class="${def.const.seed}.save:p"><span class="${def.const.seed}.clr:indigo"><strong>The last saved</strong>: ${fontDate} </span><button id="${def.const.seed}.del.sitedata" title="The page will be refreshed after deleting the data">Delete Data</button></p>`;
                    cwdNode.innerHTML = tTP.createHTML(cwdNodeHTML);
                    qS(`#${def.const.seed}\\.del\\.sitedata`, def.var.dialogIf)?.addEventListener("click", async () => {
                      if (~domainValueIndex) domainValues.splice(domainValueIndex, 1);
                      saveData(DOMAINFONTSET, domainValues);
                      const messageText = IS_CHN ? `当前网站个性化数据已成功删除，页面即将刷新。` : `The current site data was deleted, refresh now!`;
                      const [trueButtonText, titleText] = IS_CHN ? ["感谢使用", "个性化数据删除"] : ["Thanks", "Customized Data Deletion"];
                      const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:8b0000">${messageText}</p>`, titleText });
                      if (await successDialog.respond()) closeConfigurePage({ isReload: true });
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
                    (def.var.successed = true) && saveData(FONTSET, receivedRenderData);
                    globalDisable !== _IS_EMPTY_CONFIG && saveData(CONFIGURE, safeObject.assign(_config_data_, { globalDisable: _IS_EMPTY_CONFIG }));
                  } else {
                    const domainValue = { domain: TOP_HOST, fontDate: Date.now(), ...receivedRenderData };
                    domains = await GMgetValue(DOMAINFONTSET);
                    try {
                      domainValues = domains ? [...JSON.parse(decrypt(domains))] : [];
                    } catch (_) {
                      domainValues = [];
                    }
                    const domainValueIndex = updateDomainsIndex(domainValues);
                    ~domainValueIndex ? domainValues.splice(domainValueIndex, 1, domainValue) : domainValues.push(domainValue);
                    if (domainValues.length <= maxPersonalSites || ~domainValueIndex) (def.var.successed = true) && saveData(DOMAINFONTSET, domainValues);
                    else {
                      const messageText = IS_CHN
                        ? `<p class="${def.const.seed}.clr:808080">您已经保存超过<span class="${def.const.seed}.clr:crimson ${def.const.seed}.fw:700 ${def.const.seed}.fst:ita ${def.const.seed}.fs:20p">${maxPersonalSites} </span>个网站的个性化数据了，过多的数据会使脚本运行速度过慢，进而会影响您浏览网页的响应速度，建议您及时删除一些平时访问较少的站点设置，然后再进行新网站设置的数据保存。</p><p class="${def.const.seed}.clr:crimson">您确认要继续保存吗？</p>`
                        : `<p class="${def.const.seed}.clr:808080">You have saved more than <span class="${def.const.seed}.clr:crimson ${def.const.seed}.fw:700 ${def.const.seed}.fst:nml ${def.const.seed}.fs:20p">${maxPersonalSites}</span > Personalized data. Too much data will make script load slowly. It is recommended that you promptly delete some website configure data that you rarely visit. </p><p class="${def.const.seed}.clr:crimson">Are you sure you want to continue saving? </p>`;
                      const [trueButtonText, falseButtonText] = IS_CHN ? ["依然保存", "管理列表"] : ["Still Save", "Manage"];
                      const [neutralButtonText, titleText] = IS_CHN ? ["我放弃", "数据过多的提示"] : ["Abort", "Too Much Data"];
                      const warnDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                      if (await warnDialog.respond()) (def.var.successed = true) && saveData(DOMAINFONTSET, domainValues);
                      else delete def.var.successed && (await manageDomainsList());
                    }
                  }
                } catch (e) {
                  delete def.var.successed && ERROR(`${e.name} in ControlSubmitButton.Save:`, e.message);
                }
                if (!def.var.successed) return;
                const messageText = IS_CHN ? `您设置的字体渲染数据已成功保存,页面即将刷新！` : `The font rendering data was saved, refresh now!`;
                const [trueButtonText, titleText] = IS_CHN ? ["感谢使用", "字体渲染数据保存"] : ["Thanks", "Font Rendering Data Save"];
                const successDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:green">${messageText}</p>`, titleText });
                if (await successDialog.respond()) closeConfigurePage({ isReload: delete def.var.successed });
              }
            });
          }

          function controlBackupButton(backupT, needBackup) {
            if (!needBackup || !backupT) return;
            backupT.classList.add(`${def.const.seed}.disp:inline.block`);
            backupT.addEventListener("click", async () => {
              try {
                const messageText = IS_CHN
                  ? `<p class="${def.const.seed}.clr:green ${def.const.seed}.fw:700">备份到本地文件：</p><p>备份到本地，自动下载 backup.*.sqlitedb 文件。</p><p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fw:700">从本地文件还原：</p><p><span class="${def.const.seed}.clr:indigo ${def.const.seed}.cs:pointer" id="${def.id.tfiles}">\ud83d\udd0e [点击这里载入*.sqlitedb备份文件]</span><input accept=".sqlitedb" type="file" id="${def.id.files}"/></p>`
                  : `<p class="${def.const.seed}.clr:green ${def.const.seed}.fw:700">Backup to local file:</p><p>Backup and download the backup.*.sqlitedb file.</p><p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fw:700">Restore from local file:</p><p><span class="${def.const.seed}.clr:indigo ${def.const.seed}.cs:pointer" id="${def.id.tfiles}">\ud83d\udd0e [Click here to load *.sqlitedb backup file]</span><input accept=".sqlitedb" type="file" id="${def.id.files}"/></p>`;
                const [trueButtonText, falseButtonText] = IS_CHN ? ["备 份", "还 原"] : ["Backup", "Restore"];
                const [neutralButtonText, titleText] = IS_CHN ? ["取 消", "备份与还原数据"] : ["Cancel", "Backup and Restore Data"];
                const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, neutralButtonText, messageText, titleText });
                const [messageNode, inputNode] = [def.id.tfiles, def.id.files].map(id => qS(`#${id}`, def.var.dialogIf));
                if (messageNode && inputNode) {
                  messageNode.addEventListener("click", () => void inputNode.click());
                  inputNode.addEventListener("change", () => {
                    const messageNodeHTML = inputNode.files[0]
                      ? `<em class="${def.const.seed}.clr:indigo ${def.const.seed}.fs:11p ${def.const.seed}.wrap.break">${inputNode.files[0].name}</em><br/>` +
                        `<span class="${def.const.seed}.clr:crimson"> \ud83d\udd0e [${IS_CHN ? "重新选择" : "Reselect"}]</span>`
                      : `\ud83d\udd0e [${IS_CHN ? "点击这里载入*.sqlitedb备份文件" : "Click here to load *.sqlitedb backup file"}]`;
                    messageNode.innerHTML = tTP.createHTML(messageNodeHTML);
                  });
                }
                if (await frDialog.respond()) {
                  const allkey = [FONTSET, EXCLUDESITES, DOMAINFONTSET, CUSTOMFONTS, MONOFONTS, MONORULES, MONOFEATS, FONTSCALE, FONTOVERRIDE, CONFIGURE];
                  const backendData = await Promise.all(allkey.map(key => GMgetValue(key)));
                  const [fontSets, excludeSites, domainFontSets, customFonts, monoFonts, monoRules, monoFeature, fontScaleDef, fontOverrideDef, configure] = backendData;
                  const db_$R = inspectLicense()?.keycode?.().concat(encrypt(def.var.scriptName));
                  const db_$3 = domainFontSets || encrypt(JSON.stringify([]));
                  const db_$4 = customFonts || encrypt(JSON.stringify([]));
                  const db = { db_R: db_$R, db_0: encrypt(new Date()), db_1: fontSets, db_2: excludeSites, db_3: db_$3, db_4: db_$4, db_5: configure };
                  safeObject.assign(db, { db_6: monoFonts || "", db_7: monoRules || "", db_8: monoFeature || "", db_9: fontScaleDef || "", db_10: fontOverrideDef || "" });
                  const fileName = `FontRendering-backup-${brand.toLowerCase()}-${setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date())}.sqlitedb`;
                  dataDownload(fileName, cipherInstance.encrypt(JSON.stringify(db)));
                  let messageText = IS_CHN ? `备份数据已归档，备份文件导出下载中……` : `The data archived and being downloaded…`;
                  messageText += `</p><p class="${def.const.seed}.clr:8b0000 ${def.const.seed}.fst:ita ${def.const.seed}.fs:12p ${def.const.seed}.wrap.break">${fileName}`;
                  const [trueButtonText, titleText] = IS_CHN ? ["确 定", "数据备份"] : ["OK", "Data Backup"];
                  const downloadDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:green">${messageText}</p>`, titleText });
                  if (await downloadDialog.respond()) DEBUG(`Backup succeeded: ${fileName}`) ?? closeConfigurePage();
                } else {
                  try {
                    const thatFile = inputNode.files[0];
                    DEBUG("loadBackupData:", thatFile.name, thatFile.size);
                    const reader = new FileReader();
                    const FileReaderFn = async function () {
                      try {
                        const fileContent = decrypt(String(this.result));
                        const parsedData = JSON.parse(cipherInstance.decrypt(fileContent));
                        const decryptedData = object();
                        for (let i = 1; i <= 10; i++) {
                          const key = `db_${i}`;
                          decryptedData[key] = parsedData[key] ? JSON.parse(decrypt(parsedData[key])) : [3, 4].includes(i) ? [] : void 0;
                        }
                        decryptedData.db_R = decrypt(parsedData.db_R);
                        decryptedData.db_0 = decrypt(parsedData.db_0);
                        if (!isNaN(Date.parse(decryptedData.db_0)) && new Date(decryptedData.db_0) < new Date() && inspectLicense()?.inspect?.(decryptedData.db_R)) {
                          const keys = await GMlistValues();
                          keys.forEach(key => void GMdeleteValue(key));
                          saveData(FONTSET, decryptedData.db_1);
                          saveData(EXCLUDESITES, decryptedData.db_2);
                          saveData(DOMAINFONTSET, decryptedData.db_3);
                          saveData(CUSTOMFONTS, decryptedData.db_4);
                          decryptedData.db_5 ? saveData(CONFIGURE, { ...decryptedData.db_5, curVersion: def.var.curVersion, rebuild: void 0 }) : DEBUG("no configure data");
                          decryptedData.db_6 && saveData(MONOFONTS, decryptedData.db_6);
                          decryptedData.db_7 && saveData(MONORULES, decryptedData.db_7);
                          decryptedData.db_8 && saveData(MONOFEATS, decryptedData.db_8);
                          decryptedData.db_9 && saveData(FONTSCALE, decryptedData.db_9);
                          decryptedData.db_10 && saveData(FONTOVERRIDE, decryptedData.db_10);
                          let messageText = `<p class="${def.const.seed}.clr:green">${IS_CHN ? `本地备份数据已成功还原！` : `Local backup data restored Successfully!`}</p>`;
                          const processingText = IS_CHN ? "正在努力拉取预定义渲染数据中，请稍后..." : "Pulling predefined render data, please wait...";
                          messageText += `<p id="${def.const.seed}.pull.result" class="${def.const.seed}.clr:708090">${processingText}</p>`;
                          const [trueButtonText, titleText] = IS_CHN ? ["确 定", "数据还原完毕"] : ["OK", "Data restoration complete"];
                          const backupDialog = new FrDialogBox({ trueButtonText, messageText, titleText });
                          backupDialog.trueButton.className = backupDialog.trueButton.setAttribute("disabled", "") ?? `${def.class.dbb} ${def.class.dbbn}`;
                          const msgNode = qS(`#${def.const.seed}\\.pull\\.result`, def.var.dialogIf);
                          msgNode && (await asyncGetRules(msgNode, backupDialog));
                        } else throw new Error("Invalid Data Error");
                      } catch (e) {
                        ERROR(`${e.name} in FileReader.load:`, e.message);
                        const messageText = IS_CHN ? `数据校验错误，请选择正确的本地备份文件！` : `Data validation error, please check the file!`;
                        const [trueButtonText, titleText] = IS_CHN ? ["确 定", "数据文件错误"] : ["OK", "Data File Error"];
                        const errorDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:8b0000">${messageText}</p>`, titleText });
                        if (await errorDialog.respond()) qS(`#${def.id.backup}`, def.var.configIf)?.click();
                      }
                    };
                    reader.addEventListener("load", FileReaderFn, false);
                    reader.readAsText(thatFile);
                  } catch (e) {
                    ERROR(`${e.name} in FileReader.load: Backup file not exist!`);
                    const messageText = IS_CHN ? `载入文件不存在，请选择要还原的备份文件！` : `Load file not exist, please select one to restore!`;
                    const [trueButtonText, titleText] = IS_CHN ? ["确 定", "没有文件载入"] : ["OK", "No File Loading"];
                    const nothingDialog = new FrDialogBox({ trueButtonText, messageText: `<p class="${def.const.seed}.clr:indigo">${messageText}</p>`, titleText });
                    if (await nothingDialog.respond()) qS(`#${def.id.backup}`, def.var.configIf)?.click();
                  }
                }
              } catch (e) {
                ERROR(`${e.name} in ControlBackupButton:`, e.message);
              }
            });
          }
        }

        async function detectAvailableFonts() {
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

        async function getCurrentFontName(fontFaceCheck, fontName) {
          let curFont = (def.var.reFontFace = IS_CHN ? "\u7f51\u7ad9\u9ed8\u8ba4\u5b57\u4f53" : "Website Font");
          if (!fontFaceCheck) return curFont;
          [def.var.reFontFace, curFont] = IS_CHN ? [`未知字体名（请重新添加该字体: ${fontName}）`, "未知字体名"] : [`Unknown (Re-Add Font: ${fontName})`, "Unknown"];
          const fontCheckList = await getMergedFontCheckList();
          for (const fontname of fontCheckList) {
            if (fontname.en !== fontName && convertToUnicode(fontname.ch) !== fontName) continue;
            def.var.reFontFace = fontname.ch + (fontName.includes("\\") ? `` : ` (${fontname.en})`);
            return fontname.ch;
          }
          return curFont;
        }

        function inputPlaceholder(currentFont, input, current = IS_CHN ? "当前字体：" : "Current: ") {
          if (!(input = qS(`#${def.id.fontList} .${def.class.selectFontID} input`, def.var.configIf))) return;
          (input.dataset.currentFont = currentFont) && input.setAttribute("placeholder", `${current}${currentFont}`);
          safeAddEventListener(input, "mouseenter", e => e.target.setAttribute("placeholder", IS_CHN ? "输入关键字可检索字体" : "Enter some keywords"));
          safeAddEventListener(input, "mouseleave", e => e.target.setAttribute("placeholder", `${current}${e.target.dataset.currentFont}`));
        }

        function closeConfigurePage({ isReload } = {}) {
          FrDialogBox.closure() && qS(`#${def.id.container}`, def.var.configIf)?.classList.remove(`${def.const.seed}.opac:1`);
          sleep(5e2)(safeRemoveNode("fr-colorpicker") && safeRemoveNode("fr-configure")).then(r => r && closeDialogModel(qS(`dialog#${def.const.dialog}`)));
          def.array.values.clear() || isReload ? reload() : isPreview && restoreSavedPreview();
        }

        function rangeSliderWidget(listener, target, bits, isOne = false) {
          if (!listener || !target) return;
          listener.addEventListener("input", () => {
            const [value, isOFF] = [Number(listener.value), Number(listener.value) === Number(isOne)];
            const toggleClass = (node, name) => node?.classList.toggle(`${def.const.seed}.${name}`, isOFF);
            setSliderProperty(listener, value, bits);
            setValueAndEvent(target, isOFF ? "OFF" : value.toFixed(bits), "change");
            switch (listener.id) {
              case def.id.shadow:
                return toggleClass(qS(`#${def.id.shadowColor}`, def.var.configIf), "disp:none");
              case def.id.scale:
                return isFixViewport && toggleClass(qS(`#${def.id.fviewport}`, def.var.configIf), "vis:hidden");
              case def.id.stroke:
                return IS_REAL_BLINK && toggleClass(qS(`#${def.id.fstroke}`, def.var.configIf), "vis:hidden");
            }
          });
        }

        function expandOrCollapse(button, textarea, node) {
          if (!button || !textarea || !node) return;
          button.addEventListener("click", () => {
            const isOn = button.getAttribute("fr-button-switch") === "ON";
            textarea.classList.toggle(`${def.const.seed}.disp:none`, isOn);
            button.textContent = isOn ? "\u2228" : "\u2227";
            node.classList.toggle(`${def.const.seed}.h:35p.mh:35p`, isOn);
            button.setAttribute("fr-button-switch", isOn ? "OFF" : "ON");
          });
        }

        function saveChangeStatus(input, initVal, button, isOne = false) {
          if (!input || !button) return;
          const deBounceSetEffect = createDeBounce({ fn: setEffectIntoSubmit, delay: 2e2 });
          const method = ["textarea", "hidden"].includes(input.type) ? "input" : "change";
          input.addEventListener(method, () => deBounceSetEffect(input.type === "checkbox" ? input.checked : input.value, initVal, input, button, isOne, isPreview));
        }

        function setEffectIntoSubmit(newVal, initVal, input, button, isOne, isPrev) {
          try {
            const processedValue = typeof newVal === "string" && /^currentcolor$/i.test(newVal) ? "#FFFFFFFF" : newVal;
            const value = typeof input.dataset.frType !== "undefined" ? Number(newVal === "OFF" ? isOne : newVal) : processedValue;
            value !== initVal ? def.array.values.add(input.id) : def.array.values.delete(input.id);
            const hasValues = def.array.values.size > 0;
            button.classList.toggle(def.class.anim, hasValues);
            if (isPrev) DEBUG("changed Elements ID:", def.array.values) || hasValues ? changePreviewButtonStyle(button) : restoreSaveButton({ button });
          } catch (e) {
            ERROR(`${e.name} in SetEffectIntoSubmit:`, e.message);
          }
        }

        function restoreSavedPreview() {
          def.array.scaleMatrix.push((def.var.curScale = CONST_VALUES.fontSize)) && (def.var.fixStroke = CONST_VALUES.o.fixStroke);
          if (def.var.preview) correctBoldPassive("recover", boldFixCSSText, document, true);
          loadPreview(def.var.preview, (def.var.topStyle = tStyle)) || delete def.var.preview;
        }

        function restoreSaveButton({ button, isRestore = true }) {
          button.textContent = IS_CHN ? "\u4fdd\u5b58" : isRestore ? "Save" : "\ud835\udc7a\ud835\udc82\ud835\udc97\ud835\udc86";
          button.classList.remove(`${def.const.seed}.prvw`);
          ["v-Preview", "title"].forEach(attr => button.removeAttribute(attr));
          isRestore && restoreSavedPreview();
        }

        function changePreviewButtonStyle(button) {
          button.textContent = IS_CHN ? "\u9884\u89c8" : "\ud835\udc77\ud835\udc93\ud835\udc97\ud835\udc98";
          button.title = IS_CHN ? "预览渲染效果" : "Preview Rendering";
          button.classList.add(`${def.const.seed}.prvw`);
          button.setAttribute("v-Preview", "true");
        }

        function addSingleQuoteForItem(fontArray) {
          if (!safeArray.isArray(fontArray)) return INITIAL_VALUES.fontSelect;
          const uniqueItems = uniq(fontArray, Boolean, item => `'${item}'`);
          return uniqueItems.length > 0 ? uniqueItems.join(",") : INITIAL_VALUES.fontSelect;
        }

        function convertFullToHalf(str) {
          return arrayFrom(str).reduce((result, char) => {
            const charCode = char.charCodeAt(0);
            if (charCode === 12288) return result + String.fromCharCode(charCode - 12256);
            else if (charCode >= 65281 && charCode <= 65374) return result + String.fromCharCode(charCode - 65248);
            else return result + char;
          }, "");
        }

        function reportErrorToAuthor(exps) {
          if (!safeArray.isArray(exps) || exps.length === 0) return;
          sleep(6e2)(closeConfigurePage()).then(async () => {
            if (qS("fr-dialogbox[fr-error]")) return;
            const errorList = exps.map((exp, i) => `${i + 1}. ${exp}`).join("<br/>");
            const errorNoticeHTML = IS_CHN
              ? `<p class="${def.const.seed}.clr:crimson ${def.const.seed}.fs:14p">脚本在运行时发生了重大异常或错误，若在『刷新页面』后依然报错，请通过『反馈问题』及时告知作者，感谢您的反馈！<br/><kbd id="${def.const.seed}.kbd">以下信息会自动保存至您的剪切板</kbd></p>`
              : `<p class="${def.const.seed}.clr:crimson ${def.const.seed}.fs:14p">The script is running with a major error, if it still report an error after refreshing, please let the author know, thanks!<br/><kbd id="${def.const.seed}.kbd">The following info is saved to your clipboard</kbd></p>`;
            const infoRow1 = IS_CHN
              ? `<li>浏览器信息：${JSON.stringify(navigatorInfo)}\u3000</li><li>脚本扩展信息：${GMscriptHandler} v${GMversion}\u3000</li>`
              : `<li><b>BrowserInfo:</b> ${JSON.stringify(navigatorInfo)}\u3000</li><li><b>ScriptManager:</b> ${GMscriptHandler} v${GMversion}\u3000</li>`;
            const infoRow2 = IS_CHN
              ? `<li>脚本版本信息：v${def.var.curVersion}\u3000</li><li>当前访问域名：${CUR_PROTOCOL}//${CUR_HOST}<span hidden> ${CUR_HOST_PATH}</span>\u3000</li>`
              : `<li><b>ScriptVersion:</b> v${def.var.curVersion}\u3000</li><li><b>DomainName:</b> ${CUR_PROTOCOL}//${CUR_HOST}<span hidden> ${CUR_HOST_PATH}</span>\u3000</li>`;
            const infoRow3 = IS_CHN
              ? `<li>错误信息列表：\u3000<span class="${def.const.seed}.disp:block ${def.const.seed}.clr:tan">${errorList}</span></li>`
              : `<li><b>ErrorsList:</b>\u3000<span class="${def.const.seed}.disp:block ${def.const.seed}.clr:tan">${errorList}</span></li>`;
            const messageText = `${errorNoticeHTML}<p><ul id="${def.const.seed}.report:author">${infoRow1}${infoRow2}${infoRow3}</ul></p>`;
            const [trueButtonText, falseButtonText, titleText] = IS_CHN ? ["反馈问题", "刷新页面", "错误报告"] : ["FeedBack", "Reload", "Error Report"];
            try {
              const frDialog = new FrDialogBox({ trueButtonText, falseButtonText, messageText, titleText });
              frDialog.container.setAttribute("fr-error", !(def.array.exps.length = 0));
              const errorText = qS(`#${def.const.seed}\\.report\\:author`, def.var.dialogIf)?.textContent.trim() ?? "";
              const copyText = errorText.replace(/(\u3000)|(\u0020+)|((?:\r?\n)+)/g, (_, p1, p2) => (p1 ? "\n" : p2 ? "\u0020" : "\n"));
              if (await frDialog.respond()) return copyToClipboard("```log\n" + copyText + "\n```"), GMopenInTab(`${def.url.feedback}/new?template=bug_report.yaml`, false);
              reload();
            } catch (e) {
              ERROR(`${e.name} in ReportErrorToAuthor:`, e.message);
            }
          });
        }

        /* FIX_CANVAS_FONT_RENDERING. NEW UPDATE: 2024-09-11 F9Y4NG */

        function overrideCanvasFont(renderFont) {
          if (!NOT_IN_EXCLUSION_LIST || !CONST_VALUES.o.renderCanvas || !CONST_VALUES.o.fontFace) return;
          const fontRegexp = /^((?:[a-z-]+\s)+|[0-9]+\s)?(\d*\.?\d+(?:px|em|pt|%|rem)\s)?(.+)$/i;
          const fontName = `${CONST_VALUES.o.fontSelect},${INITIAL_REMARKS.fontBase}`;
          const modifyFont = fontText => {
            const matches = fontText?.match(fontRegexp);
            return matches ? `${matches[1] ?? ""} ${matches[2] ?? ""} ${fontName}`.trim() : fontText;
          };
          const overrideMethod = methodName =>
            (CanvasRenderingContext2D.prototype[methodName] = function (...args) {
              if (!this.frFontFace && this.font && !this.font.includes(renderFont)) {
                this.font = modifyFont(this.font);
                if (methodName === "fillText" && shadow_r > 0 && !/(?:bold|[6789]00)\s/i.test(this.font)) {
                  def.const.fillText.apply(this, args);
                  safeObject.assign(this, { shadowColor: parseColor(shadow_c), shadowBlur: shadow_r, shadowOffsetX: 0, shadowOffsetY: 0 });
                }
              }
              def.const[methodName].apply(this, args);
            });
          ["fillText", "strokeText"].forEach(overrideMethod);
        }

        /* FIX_FONT_BOLD_STROKE_STYLE_ERRORS. NEW UPDATE: 2024-10-26 F9Y4NG */

        const selectors = "audio,base,br,canvas,defs,embed,g,head,hr,iframe,img,link,math,meta,noscript,object,path,picture,script,style,svg,title,video";
        const [queryString, threads, WATERMARK] = [`:not(${selectors},[class*="watermark" i])`, Math.min(navigator.hardwareConcurrency || 4, 16), /watermark/i];
        const [boldStatusCache, classNameCache, transitionCache, mutationNodeSet, observeNodeSet] = [new WeakMap(), new WeakMap(), new WeakMap(), new Set(), new Set()];
        const [localFlag, sessionFlag] = [localStorage, sessionStorage].map(storage => Boolean(storage?.getItem(def.static.conflict)));
        const [_Config, _ExcludeTagSet] = [{ attributeOldValue: true, childList: true, subtree: true }, new Set(selectors.split(","))];
        const [changeAttribute, deBounceFixPassive] = [createChangeAttribute(def.const.boldAttrName, !localFlag), createDeBounce({ fn: correctBoldPassive, delay: 50 })];
        const checkConflict = { flag: localFlag, counter: new LRUCache(50), threshold: Math.min(threads * 15, 2e2), interval: 1e2 };
        const hasPermission = () => IS_CAUSED_BOLDSTROKEERROR && def.var.fixStroke && !sessionStorage?.getItem(def.static.conflict);
        const applyLazyLoad = (fn, ...parameter) => void (CONST_VALUES.o.lazyload ? GMunsafeWindow[def.const.raf](fn.bind(null, ...parameter)) : fn(...parameter));
        const getClassName = (el, tmp) => (classNameCache.has(el) ? classNameCache.get(el) : classNameCache.set(el, (tmp = toString(el.className))) && tmp);

        function correctBoldPassive(event, cssText, target = document, recheck = false) {
          try {
            let { elementSet, shadowSet } = qAS(queryString, target);
            for (const shadow of shadowSet) processShadowRootNode(shadow, cssText, def.var.boldObserver);
            if (shadowSet.clear() || elementSet.size === 0 || !hasPermission()) return;
            handleBoldStyles({ pendingNodeSet: elementSet, recheck }) ?? DEBUG(`CorrectBold.Passive${IN_FRAMES}:`, { eventType: event ?? "unknown" });
          } catch (e) {
            ERROR(`${e.name} in CorrectBoldPassive:`, e);
          }
        }

        function processShadowRootNode(shadow, cssText, observer) {
          NOT_IN_EXCLUSION_LIST && shadowRootNodeInsertCss(shadow, cssText);
          hasPermission() && handleRootNodeObserve(shadow, observer);
        }

        function handleBoldStyles({ pendingNodeSet, recheck }) {
          let processedNodes = new Set();
          const checkingBold = value => processedNodes.add({ node: value, isbold: isBold(value, recheck) });
          const fixingBold = () => {
            processedNodes.forEach(checkedNode => boldFixedHandler({ checkedNode }));
            processedNodes.clear() || pendingNodeSet.clear() || (pendingNodeSet = processedNodes = null);
          };
          const batchSize = Math.max(threads * 1e3, Math.ceil(pendingNodeSet.size / 2));
          processBatch(pendingNodeSet.values(), batchSize, checkingBold, fixingBold);
        }

        function qAS(expr, root) {
          const stack = [root];
          const eSet = new Set();
          const sSet = new Set();
          if (root.nodeType === 1) eSet.add(root);
          else if (isShadow(root)) sSet.add(root);
          let current;
          while ((current = stack.pop())) {
            if (current.childElementCount === 0) continue;
            const matches = qA(expr, current);
            for (let i = 0, l = matches.length; i < l; i++) {
              const el = matches[i];
              const shadow = el.shadowRoot;
              if (eSet.add(el) && shadow && !sSet.has(shadow)) sSet.add(shadow) && stack.push(shadow);
            }
          }
          return { elementSet: eSet, shadowSet: sSet };
        }

        function gCS(node, opt = null) {
          if (node?.nodeType !== 1) return new Proxy(object(), { get: () => NaN });
          return global.getComputedStyle(node, opt);
        }

        function isBold(element, recheck) {
          if (!element.isConnected) return boldStatusCache.delete(element), false;
          let boldStatus = boldStatusCache.get(element);
          if (typeof boldStatus === "undefined" || (recheck && boldStatus < 600)) {
            boldStatus = gCS(element).fontWeight;
            boldStatusCache.set(element, boldStatus);
          }
          return boldStatus >= 600;
        }

        function boldFixedHandler({ checkedNode, uncheckedNode }) {
          const item = checkedNode?.node ?? uncheckedNode;
          const bold = checkedNode?.isbold ?? isBold(uncheckedNode);
          const hasFixedAttr = isNodeContainsBoldFix(item, false);
          if (hasFixedAttr !== bold) applyLazyLoad(hasFixedAttr ? changeAttribute.del : changeAttribute.add, item);
        }

        function processBatch(iterator, batchSize, preparator, finalizer, count = 0) {
          while (count++ <= batchSize) {
            const { done, value } = iterator.next();
            if (done) return finalizer();
            preparator(value);
          }
          rAF.setTimeout(processBatch, 0, iterator, batchSize, preparator, finalizer);
        }

        function isNodeContainsBoldFix(node, shouldCheckChildren) {
          return node && (node.matches(boldFixSelector) || (shouldCheckChildren && qS(boldFixSelector, node)));
        }

        function shadowRootNodeInsertCss(shadow, syncStyle) {
          const hostName = getNodeName(shadow.host);
          setAdoptedStyleSheets({ target: shadow, css: shadowCode, id: `${hostName}-shadowroot-code`, writable: false, minor: true });
          selectionCssText && setAdoptedStyleSheets({ target: shadow, css: selectionCssText, id: `${hostName}-fix-selection`, writable: false, minor: true });
          if (!IS_CAUSED_BOLDSTROKEERROR || sessionStorage?.getItem(def.static.conflict)) return;
          const css = syncStyle ? `:host(${hostName}){--fr-fix-stroke:0px transparent;--fr-fix-shadow:none}${syncStyle}` : ``;
          setAdoptedStyleSheets({ target: shadow, css, id: `${hostName}-fix-boldstroke`, minor: true });
        }

        function handleRootNodeObserve(context, observer) {
          if (hasPermission()) ["mouseenter", "mouseleave"].forEach(event => context.addEventListener(event, mouseEventsHandler, { passive: true, capture: true }));
          !observeNodeSet.has(context) && observeNodeSet.add(context) && observer && observer.observe(context, _Config);
        }

        function createChangeAttribute(value, isModeChanged) {
          const compoundFns = el => void (isModeChanged && el.removeAttribute(value), el.classList.add(value));
          return {
            add: el => void (checkConflict.flag ? compoundFns(el) : el.setAttribute(value, "")),
            del: el => void (checkConflict.flag ? el.classList.remove(value) : el.removeAttribute(value)),
          };
        }

        function getTransitionData(el) {
          if (!transitionCache.has(el)) {
            const { transition, transitionDelay, transitionDuration } = gCS(el);
            const transtionInfo = { transition, delay: transitionDelay, duration: transitionDuration };
            return transitionCache.set(el, transtionInfo), transtionInfo;
          } else return transitionCache.get(el);
        }

        function mouseEventsHandler(event) {
          const target = event.composedPath()[0] ?? event.target;
          if (["html", "body"].includes(getNodeName(target)) || !checkNodesForFix(target, [1])) return;
          const { transition, delay, duration } = getTransitionData(target);
          const recheckNode = (time, el) => sleep(time)(el).then(t => [t, ...t.children].forEach(N => removeBoldCache(N, false) && boldFixedHandler({ uncheckedNode: N })));
          ["all", "none"].includes(transition) ? recheckNode(0, target) : recheckNode((parseFloat(delay) || 0 + parseFloat(duration) || 0) * 5e2, target);
        }

        function checkNodesForFix(node, checkList = [1, 11]) {
          return node && checkList.includes(node.nodeType) && !_ExcludeTagSet.has(getNodeName(node)) && !WATERMARK.test(getClassName(node));
        }

        function removeBoldCache(target, checkChildren = true) {
          if (checkChildren) qA(queryString, target).forEach(item => void boldStatusCache.delete(item));
          return boldStatusCache.delete(target) || !boldStatusCache.has(target);
        }

        async function correctBoldStrokeProcess() {
          const checkNodeHashForConflict = createSmartNodeHash({ maxHits: 20 });
          def.var.fixStroke = CONST_VALUES.o.fixStroke;
          def.var.boldObserver = await new NodeObserver().startObserver({ name: "correctBoldStroke", callback: correctBoldHandler, config: _Config }).then(r => r?.observer);
          handleRootNodeObserve(document, def.var.boldObserver);
          if (!hasPermission()) return;
          addLoadEvents.addFinalFn(correctBoldPassive, "readystatechange", boldFixCSSText, document, true);
          if (global.navigation) global.navigation.addEventListener("navigate", handleNavigateEvent);
          else ["pushState", "replaceState"].forEach(event => global.addEventListener(event, handleNavigateEvent));
          return !DEBUG(`CorrectBold.Active${IN_FRAMES}:`, { eventType: "init" });

          function correctBoldHandler({ mutations, observer }) {
            try {
              if (mutationNodeSet.clear() || sessionFlag) return conflictReport();
              mutations.forEach(mutation => {
                if (mutation.target === document.head) return;
                if (mutation.type === "childList") return processChildListMutations(mutation, mutationNodeSet);
                if (hasPermission() && mutation.type === "attributes") processAttributesMutations(mutation, mutationNodeSet, observer);
              });
              if (mutationNodeSet.size > 0) mutationListMonitor(mutationNodeSet, observer);
            } catch (e) {
              if (e.message.includes("callback conflict")) handleCallbackLimit(observer);
              ERROR(`${e.name} in FixBoldProcess:`, e.message);
            }
          }

          function processNodes(target, { pendingNodeSet, pendingShadowSet }) {
            const { elementSet, shadowSet } = qAS(queryString, target);
            for (const el of elementSet) pendingNodeSet.add(el);
            for (const shadow of shadowSet) pendingShadowSet.add(shadow);
          }

          function mutationListMonitor(mutationNodeSet, observer) {
            if (mutationNodeSet.has(document.documentElement)) mutationNodeSet.clear() ?? mutationNodeSet.add(document.documentElement);
            else if (mutationNodeSet.has(document.body)) mutationNodeSet.clear() ?? mutationNodeSet.add(document.body);
            const batchSize = Math.min(threads * 2e2, mutationNodeSet.size);
            chunkIteratorProcess(mutationNodeSet, batchSize, observer, { pendingNodeSet: new Set(), pendingShadowSet: new Set() });
          }

          function chunkIteratorProcess(mutationNodeSet, batchSize, observer, { pendingNodeSet, pendingShadowSet }) {
            const getNodesAndShadowRoots = value => processNodes(value, { pendingNodeSet, pendingShadowSet });
            const fixingBoldAndInsertShadowCSS = () => {
              if (pendingNodeSet.size > 0 && hasPermission()) handleBoldStyles({ pendingNodeSet, recheck: document.readyState === "complete" });
              for (const shadow of pendingShadowSet) processShadowRootNode(shadow, boldFixCSSText, observer);
              pendingShadowSet.clear() || (pendingShadowSet = null);
            };
            processBatch(mutationNodeSet.values(), batchSize, getNodesAndShadowRoots, fixingBoldAndInsertShadowCSS);
          }

          function processChildListMutations({ target, addedNodes, removedNodes }, mutationNodeSet) {
            for (const node of addedNodes) checkNodesForFix(node, [1]) && checkNodesForFix(target) && mutationNodeSet.add(target);
            for (const node of removedNodes) checkConflictNode(node, global.event, performance.now()) || handleRemovedNode(node);
          }

          function processAttributesMutations({ target, attributeName, oldValue }, mutationNodeSet) {
            if (["html", "body"].includes(getNodeName(target)) || !checkNodesForFix(target, [1])) return;
            const ChangedValue = checkAttributeChange({ target, attributeName, oldValue: oldValue ?? "" });
            ChangedValue && ChangedValue.newValue !== ChangedValue.oldValue && removeBoldCache(target) && mutationNodeSet.add(target);
          }

          function handleRemovedNode(node, shadow) {
            if (!checkNodesForFix(node)) return;
            if ((shadow = node.shadowRoot)) observeNodeSet.delete(shadow);
            removeBoldCache(node) && shadow && ["mouseenter", "mouseleave"].forEach(event => shadow.removeEventListener(event, mouseEventsHandler, { passive: true, capture: true }));
          }

          function hasFixedBoldFlagChange(newValue, oldValue, className) {
            return toString(oldValue).includes(className) !== toString(newValue).includes(className);
          }

          function filterArrayDiffToStr(arrA, arrB) {
            const setA = new Set(arrA);
            const setB = new Set(arrB);
            return [...arrA.filter(x => !setB.has(x)), ...arrB.filter(y => !setA.has(y))].join();
          }

          function hasFontStyleChange(newValue, oldValue) {
            const valueArray = [oldValue, newValue].map(value => uniq(value.split(";")));
            return !/(?:font:|font-weight:)/i.test(filterArrayDiffToStr(...valueArray));
          }

          function checkAttributeChange({ target, attributeName, oldValue, newValue = "" }) {
            if (attributeName === "style") {
              const currentStyle = target.style?.cssText ?? "";
              if (currentStyle !== oldValue && hasFontStyleChange(currentStyle, oldValue)) return;
              newValue = currentStyle;
            } else if (attributeName === "class") {
              newValue = target.className?.baseVal ?? target.className ?? "";
              if (newValue !== oldValue && hasFixedBoldFlagChange(newValue, oldValue, def.const.boldAttrName)) return;
            } else if (attributeName === def.const.boldAttrName) return;
            else newValue = target.getAttribute(attributeName) ?? "";
            return { oldValue, newValue };
          }

          function handleNavigateEvent(event) {
            const { navigationType, type } = event ?? global.event ?? object();
            deBounceFixPassive(navigationType ?? type, boldFixCSSText, document, false);
          }

          function createSmartNodeHash({ maxHits }) {
            const { counter, interval, threshold } = checkConflict;
            const getPathTrace = (node, depth, child, i = 0, tmp = "") => {
              let trace = `${getNodeName(node)}(${(tmp = node.nodeValue)?.length ?? node.childElementCount ?? 0})${tmp ? `[${tmp.trim().slice(0, 5) || "∅"}]` : ""}`;
              if (depth > 0) while (child && i < 3) (trace += `>${getPathTrace(child, depth - 1, child.nextSibling)}`) && i++;
              return trace;
            };
            return function (node, currentTime, init) {
              let combined = `l::[${node.id || getClassName(node).trim() || "∅"}]≯${getPathTrace(node, 2, node.firstChild)}`;
              let cacheEntry = counter.get(combined) || (counter.set(combined, (init = { count: 0, hits: 0, lastTime: currentTime })) && init);
              if (cacheEntry.hits >= maxHits) {
                combined = `h::${node.childNodes.length > 15 ? node.cloneNode(false).outerHTML + "|" + node.textContent.slice(0, 6e2) : node.outerHTML.slice(0, 8e2)}`;
                cacheEntry = counter.get(combined) || (counter.set(combined, (init = { count: 0, lastTime: currentTime })) && init);
              } else cacheEntry.hits++;
              if (currentTime - cacheEntry.lastTime >= interval) cacheEntry.count = cacheEntry.hits = 0;
              if ((cacheEntry.lastTime = currentTime) && ++cacheEntry.count > threshold) return handleConflict(combined);
            };
          }

          function checkConflictNode(node, event, currentTime) {
            if ((event instanceof MouseEvent && event.type === "mousemove") || event instanceof MessageEvent) return;
            if (!checkNodesForFix(node, [1]) || !isNodeContainsBoldFix(node, true)) return;
            checkNodeHashForConflict(node, currentTime, null);
          }

          function handleConflict(key) {
            if (checkConflict.flag) return checkConflict.counter.clear(), sessionStorage?.setItem(def.static.conflict, 12388), conflictReport(key);
            __console("warn", "[Warning]", "Potential infinite loop detected, switching to <class attribute> mode.");
            checkConflict.flag = !localStorage?.setItem(def.static.conflict, 12339);
          }

          function conflictReport(key) {
            __console("warn", "[Warning]", "Callback infinite loop occurred, suspending observer.", { "conflict.content": key ?? "SessionFlag" });
            throw new Error(`Found callback conflict! ${CONST_VALUES.lazyload ? "Fix bold is disabled." : "Try a workaround to enable 'Use Lazyload Fix'."}`);
          }

          function handleCallbackLimit(observer) {
            observer.disconnect();
            if (global.navigation) global.navigation.removeEventListener("navigate", handleNavigateEvent);
            else ["pushState", "replaceState"].forEach(event => global.removeEventListener(event, handleNavigateEvent));
            observeNodeSet.forEach(shadow => ["mouseenter", "mouseleave"].forEach(event => shadow.removeEventListener(event, mouseEventsHandler, { passive: true, capture: true })));
            delete def.var.boldObserver && observeNodeSet.clear();
          }
        }

        /* FIX_VIEWPORT_ZOOM_STYLE_ERRORS. NEW UPDATE: 2024-08-10 F9Y4NG */

        function correctViewportUnits(isAllowInlineStyle) {
          if (!IS_CURRENTSITE_ALLOWED) return object();
          const vRegexp = /(\.?\d+(?:\.\d+)?)([dsl]?(?:v[wh]|vmin|vmax))\b(?![\\=/+_-])/g;
          const uRegexp = /url\((?![`'"]?(?:([\w.-]+)?#\b|https?:\/\/|data:|\/\/|\/\B))([^)]+)\)/g;
          const iRegexp = /@import (url\(([^)]+)\)|"([^"]+)")[ \w(),:]*;/g;
          const qRegexp = /[`'"]/g;
          const hasPermission = NOT_IN_EXCLUSION_LIST && isFixViewport && CONST_VALUES.o.fixViewport && def.var.curScale !== 1;
          const correctViewport = () => void Promise.all([fixViewportLinks(), fixViewportStyles()]);
          if (hasPermission) addLoadEvents.addFinalFn(correctViewport) && DEBUG(`correct.ViewportUnit${IN_FRAMES}:`, { eventType: "init" });
          return { hasPermission, correctViewport };

          async function fixViewportLinks() {
            const PROTOCOL_REGEX = /^http:\/\//i;
            const linkPromises = qA(`link[rel~="stylesheet" i]:not([${def.static.viewport}])`).map(async link => {
              const url = link.href || link.dataset.href || "about:blank";
              link.setAttribute(def.static.viewport, "");
              await applyStyleToOriginLink(url.replace(PROTOCOL_REGEX, "https://"), link);
            });
            await Promise.allSettled(linkPromises);
          }

          async function applyStyleToOriginLink(url, node) {
            try {
              const cssText = await fetchLinkContent(url, node);
              const processedCssText = cssText ? await fetchImport(cssText, url) : "";
              const hasSourceUrl = processedCssText.includes("/*# sourceURL=") || processedCssText.includes("/*# importURL=");
              if (!hasSourceUrl) return !node.getAttribute(def.static.viewport) && node.setAttribute(def.static.viewport, "ignore");
              const attributes = { id: node.id || generateRandomString(8), type: "text/css", "data-href": url, [def.static.viewport]: "link", ...getAttributes(node, ["href", "rel"]) };
              const parent = node.parentNode ?? document.head;
              if (isAllowInlineStyle) {
                const style = cE("style", { ...attributes, textContent: processedCssText });
                return style && parent.contains(node) && parent.replaceChild(style, node) && DEBUG("Fixed.viewport.Link:", { linkNode: style });
              }
              const style = GMaddElement(parent, "style", { ...attributes, textContent: processedCssText });
              style && safeRemoveNode(node) && DEBUG("GM::Fixed.viewport.Link:", { linkNode: style });
            } catch (e) {
              ERROR(`${e.name} in ApplyStyleToOriginLink${IN_FRAMES}:`, e.message);
            }
          }

          async function fixViewportStyles() {
            const ATTR_REGEX = /^(?:fr|gb)-css-[0-9a-f]{8}$/;
            const stylePromises = qA(`style:not([${def.static.viewport}]):not(.darkreader)`)
              .filter(style => {
                if (asArray(style.getAttributeNames()).SomeX(name => ATTR_REGEX.test(name))) return false;
                return style.setAttribute(def.static.viewport, ""), true;
              })
              .map(async style => await applyStyleToOriginStyle(style, style.textContent));
            await Promise.allSettled(stylePromises);
          }

          async function applyStyleToOriginStyle(node, cssText) {
            try {
              if (!cssText || !cssText.includes("v") || !vRegexp.test(cssText)) return !node.getAttribute(def.static.viewport) && node.setAttribute(def.static.viewport, "ignore");
              node.id = node.id || generateRandomString(8);
              node.textContent = `/*# sourceURL= ${CUR_HREF}#internal */\r\n${replaceStyle(cssText, vRegexp, def.var.curScale)}`;
              DEBUG("Fixed.viewport.Style:", { styleNode: node }) ?? node.setAttribute(def.static.viewport, "style");
            } catch (e) {
              ERROR(`${e.name} in ApplyStyleToOriginStyle:`, e.message) ?? node.setAttribute(def.static.viewport, "failed");
            }
          }

          async function fetchLinkContent(url, node) {
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`Network response was not OK. Status: ${response.status}`);
              const cssText = await response.text();
              if (!cssText || (node && (!cssText.includes("v") || !vRegexp.test(cssText)))) return cssText || "";
              return `/*# ${node ? "sourceURL" : "importURL"}=${url} */\r\n${replaceBaseURL(replaceStyle(cssText, vRegexp, def.var.curScale), url)}`;
            } catch (e) {
              return ERROR(`${e.name} in FetchLinkContent${IN_FRAMES}:`, { url, node, msg: e.message }), node?.setAttribute(def.static.viewport, "failed"), "";
            }
          }

          function getAttributes(node, exclude = [], result = object()) {
            const names = node.getAttributeNames();
            for (const name of names) if (!exclude.includes(name)) result[name] = node.getAttribute(name);
            return result;
          }

          async function asyncReplace(str, regex, asyncReplaceFn) {
            const matches = arrayFrom(str.matchAll(regex));
            if (matches.length === 0) return str;
            const replacements = await Promise.all(matches.map(match => asyncReplaceFn(match[2] ?? match[1])));
            matches.forEach((match, index) => (str = str.replace(match[0], replacements[index])));
            return str;
          }

          function fetchImport(cssText, originUrl) {
            if (!cssText) return Promise.resolve("");
            return asyncReplace(cssText, iRegexp, url => {
              const fullPath = new URL(url.replace(qRegexp, ""), originUrl).href;
              return fullPath ? fetchLinkContent(fullPath, null) : "";
            });
          }

          function replaceStyle(txt, reg, scale) {
            return txt.replace(reg, function (_, num, unit) {
              return String((num / scale).toFixed(6)) + unit;
            });
          }

          function replaceBaseURL(txt, baseURL) {
            return txt.replace(uRegexp, (match, _, url) => {
              const path = url.replace(qRegexp, "");
              const fullPath = new URL(path, baseURL).href;
              return match.replace(path, fullPath);
            });
          }
        }

        /* CSS_STYLE_PROCESSING_MAIN_THREAD */

        function monitorMainStyleProcess({ hasPermission, correctViewport }) {
          if (typeof hasPermission !== "boolean" && typeof correctViewport !== "function") return;
          const ID_REGEX = /^(?![0-9-])[\u{1D68A}-\u{1D6A3}\w\-\u{1D670}-\u{1D689}]+$/u;
          const deBounceViewport = createDeBounce({ fn: correctViewport, delay: 10, immed: false });
          const checkStyleNode = (node, nodeName) => {
            if (nodeName === "link") return node.getAttribute("rel")?.includes("stylesheet") && node.getAttribute("href");
            if (nodeName === "style") return node.id !== def.id.rndStyle && !node.classList?.contains("darkreader");
          };
          const handleChildListMutation = (target, addedNodes) => {
            if (target === document.documentElement) return updateFlagAtRootElement(target);
            if (hasPermission) for (const node of addedNodes) if (checkStyleNode(node, getNodeName(node))) return deBounceViewport();
          };
          const getCssText = cssRules => getObjectType.call(cssRules) === "[object CSSRuleList]" && arrayFrom(cssRules, rule => rule.cssText).join("");
          const updateStyleWithNewRootID = htmlID => {
            const sheet = getMainStyleSheets({ primary: true }) ?? object();
            const css = (sheet.textContent ?? getCssText(sheet.cssRules) ?? tStyle).replace(DOCUMENTID_REGEXP, `#${htmlID}`);
            setAdoptedStyleSheets({ target: document, css, id: def.id.rndStyle, primary: true }) && INFO(`%c[MO]${IN_FRAMES}[HTML.ID]: #${htmlID}`, fullStyle("#1e90ff"));
          };
          const handleAttributesMutation = (target, oldValue) => {
            const newValue = ID_REGEX.test(target.id) ? target.id : (target.id = def.const.root);
            if (oldValue !== newValue) updateStyleWithNewRootID(newValue);
          };
          const handleHTMLProcess = ({ type, target, addedNodes, oldValue }) => {
            if (type === "childList" && addedNodes.length) return handleChildListMutation(target, addedNodes);
            if (type === "attributes" && target === document.documentElement) handleAttributesMutation(target, oldValue);
          };
          const handleRemovedNodesMutation = removedNodes => {
            for (const node of removedNodes) if (node.id === def.id.rndStyle && !node.dataset.frRemoved) return adoptMainStyleSheet({ review: true });
          };
          const deBounceApotedStyleCheck = createDeBounce({ fn: adoptMainStyleSheet, delay: 20 });
          const mainHTMLHandler = ({ mutations }) => {
            mutations.forEach(mutation => void handleHTMLProcess(mutation));
            CUR_WINDOW_TOP && IS_ADOPTEDSTYLESHEET_MUTABLE && deBounceApotedStyleCheck({ review: true });
          };
          const config = { childList: true, subtree: true, attributeOldValue: true, attributeFilter: ["id"] };
          new NodeObserver().startObserver({ name: "Observe-element:html-style-link", callback: mainHTMLHandler, config });
          const mainStyleHandler = ({ mutations }) => mutations.forEach(mutation => void handleRemovedNodesMutation(mutation.removedNodes));
          requestHEAD.startObserver({ name: "Insert-fr-style", callback: mainStyleHandler, config: { childList: true } }).then(adoptMainStyleSheet);
        }

        /* IFRAME_STYLE_PROCESSING_IN_BODY */

        function processFrameworks() {
          const observeFrameHandler = ({ type, target, addedNodes, attributeName }) => {
            if (type !== "childList" && type !== "attributes") return;
            const aNodes = arrayFrom(addedNodes).filter(node => getNodeName(node) === "iframe");
            (aNodes.length || (attributeName && getNodeName(target) === "iframe" && (target.src || target.srcdoc))) &&
              adoptStyleIntoFrames({ action: type, nodeArray: aNodes.length ? aNodes : [target] });
          };
          const callback = ({ mutations }) => document.readyState === "complete" && mutations.forEach(observeFrameHandler);
          const config = { childList: true, subtree: true, attributeFilter: ["src", "srcdoc", "style"] };
          if (CUR_WINDOW_TOP) requestBODY.startObserver({ name: "Observe-iframes-in-body", callback, config });
        }

        /* FONT_RENDERING_MAIN_PROCESS */

        void (async function (CSP, initMenus) {
          monitorMainStyleProcess(correctViewportUnits(CSP));
          if (IS_CURRENTSITE_ALLOWED) await correctBoldStrokeProcess();
          if (!NON_FRAMEWORK) handleFrameworkEvent();
          if (CUR_WINDOW_TOP) {
            if (await initializeConfigData(RC2)) showUpdateInfo(def.var.versionStatus);
            await getCurrentFontName(CONST_VALUES.fontFace, selectedFont);
            showSystemInfo.system();
            showSystemInfo.compat(IS_CHEAT_UA);
            insertMenus(initMenus);
          }
          correctFontScaleOffset();
          overrideCanvasFont(selectedFont);
          IS_CURRENTSITE_ALLOWED && addLoadEvents.addFn(processFrameworks) && addLoadEvents.addFinalFn(adoptStyleIntoFrames, { action: "DOMLoaded" });
        })(
          ((target, csp) => {
            const style = generalAddElement(target, "style", { id: "𝐜𝐬𝐩.𝐭𝐞𝐬𝐭", type: "text/css", textContent: "test { color: black }" });
            return (csp = style?.sheet?.cssRules.length > 0), safeRemoveNode(style) && csp;
          })(document.documentElement, null),
          (preload => {
            if (!CUR_WINDOW_TOP || toString(GMunregisterMenuCommand) === "() => {}") return;
            return GMregisterMenuCommand(`\ufff0\ud83d\udd52 ${preload}`, reload);
          })(IS_CHN ? "\u6b63\u5728\u8f7d\u5165\u811a\u672c\u83dc\u5355\uff0c\u8bf7\u7a0d\u5019\u2026" : "Loading menus, Please wait...")
        );
      })(
        () => {
          const msg = IS_CHN ? "\u91cd\u65b0\u5b89\u88c5\u6b63\u7248\u811a\u672c\u0020\ud83d\udd34" : "Reinstall the genuine script\u0020\ud83d\udd34";
          const source = "JUU4JUFBJUIxSlZpWSVFNyU5MCU4OSVFNiU5RiU5MyVFNSVBRCVCQSVFOCU4MiVCQXAyTyVFNiU5MyU5MzAlRTglODUlOTF0JUU1JUIyJTgwJUU1JUFFJTlBJUU4JTg2JUJBZQ==";
          const callback = u => GMregisterMenuCommand(`\ufff0\ud83d\udd34 ${msg}`, () => void GMopenInTab(u)) && __console("error", `${msg} ${def.var.scriptName} ${u}`);
          return { callback, code: decrypt(source) };
        },
        async _config_data_ => {
          const configure = await GMgetValue(CONFIGURE);
          if (configure) {
            try {
              _config_data_ = { ...INITIAL_CONFIGURE, ...JSON.parse(decrypt(configure)) };
            } catch (e) {
              (def.var.structureError = true) && (_config_data_ = INITIAL_CONFIGURE) && ERROR(`${e.name} in ConfigureData.JSON.parse:`, e.message);
            }
          } else saveData(CONFIGURE, (_config_data_ = INITIAL_CONFIGURE));
          return (def.var.versionStatus = _config_data_.curVersion), _config_data_;
        },
        async () => {
          let [monoSiteRules, monoFontList, monoFeature] = await Promise.all([MONORULES, MONOFONTS, MONOFEATS].map(key => GMgetValue(key)));
          try {
            monoSiteRules = monoSiteRules ? [...JSON.parse(decrypt(monoSiteRules))] : [];
          } catch (e) {
            ERROR(`${e.name} in Monospaced_siteRules.Array.parse:`, (monoSiteRules = []), e.message) ?? GMdeleteValue(MONORULES);
          }
          try {
            monoFontList = monoFontList ? convertHtmlToText(JSON.parse(decrypt(monoFontList))) : "";
          } catch (e) {
            ERROR(`${e.name} in Monospaced_Fontlist.String.parse:`, (monoFontList = ""), e.message) ?? GMdeleteValue(MONOFONTS);
          }
          try {
            monoFeature = monoFeature ? convertHtmlToText(JSON.parse(decrypt(monoFeature))) : "";
          } catch (e) {
            ERROR(`${e.name} in Monospaced_Feature.String.parse:`, (monoFeature = ""), e.message) ?? GMdeleteValue(MONOFEATS);
          }
          return { monoSiteRules, monoFontList, monoFeature };
        },
        async exSite => {
          const defaultExSite = (exSite = ["127.0.0.1", "localhost"]);
          try {
            const exSiteSave = await GMgetValue(EXCLUDESITES);
            if (exSiteSave) exSite = JSON.parse(decrypt(exSiteSave));
            else saveData(EXCLUDESITES, defaultExSite);
          } catch (e) {
            ERROR(`${e.name} in ExSite.JSON.parse:`, e.message) ?? (def.var.structureError = true);
          }
          return { exSite: asArray(exSite), exSitesIndex: updateExsitesIndex(exSite) };
        },
        async (isFontsize, isFixViewport) => {
          let domainValue, domainValues, domainValueIndex, fontValue;
          const defaultFontValue = { ...INITIAL_VALUES, isEditorBlock: matchEditorialSites(INITIAL_REMARKS.editorialSiteList) };
          try {
            const [savedDomains, savedFonts, predefinedData] = await Promise.all([DOMAINFONTSET, FONTSET, REMOTERENDERDATA].map(key => GMgetValue(key)));
            if (savedDomains) {
              domainValues = asArray(JSON.parse(decrypt(savedDomains)));
              domainValueIndex = updateDomainsIndex(domainValues);
              safeObject.assign(def.var, { domainCount: domainValues.length, domainIndex: domainValueIndex });
              domainValue = ~domainValueIndex ? { ...defaultFontValue, ...domainValues[domainValueIndex] } : null;
            } else saveData(DOMAINFONTSET, []);
            if (savedFonts) fontValue = { ...defaultFontValue, ...JSON.parse(decrypt(savedFonts)) };
            else saveData(FONTSET, INITIAL_VALUES);
            const currentValue = domainValue || fontValue || defaultFontValue;
            const data = {
              fontSelect: convertHtmlToText(currentValue.fontSelect),
              fontFace: Boolean(currentValue.fontFace),
              fontSmooth: Boolean(currentValue.fontSmooth),
              fontSize: isFontsize && !currentValue.isEditorBlock ? Number(currentValue.fontSize) : defaultFontValue.fontSize,
              fixViewport: isFontsize && isFixViewport && !currentValue.isEditorBlock && Boolean(currentValue.fixViewport),
              fontStroke: Number(currentValue.fontStroke) || 0,
              fixStroke: Boolean(IS_CAUSED_BOLDSTROKEERROR && currentValue.fontStroke && currentValue.fixStroke),
              lazyload: Boolean(currentValue.lazyload && currentValue.fixStroke),
              fontShadow: Number(currentValue.fontShadow) || 0,
              fixShadow: Boolean(IS_CAUSED_BOLDSHADOWERROR && currentValue.fixStroke && currentValue.fontShadow && currentValue.fixShadow),
              renderCanvas: !IS_GREASEMONKEY && currentValue.fontFace && Boolean(currentValue.renderCanvas),
              shadowColor: convertHtmlToText(currentValue.shadowColor) || defaultFontValue.shadowColor,
              fontCSS: convertHtmlToText(currentValue.fontCSS) || defaultFontValue.fontCSS,
              fontEx: convertHtmlToText(currentValue.fontEx) || "",
              isEditorBlock: currentValue.isEditorBlock,
            };
            return { o: await applyPredefinedRenderRules(predefinedData, safeObject.assign(object(), data)), ...data };
          } catch (e) {
            return (def.var.structureError = true), ERROR(`${e.name} in FontData.JSON.Parsing:`, e.message), { o: defaultFontValue, ...defaultFontValue };
          }
        },
        async () => {
          const defaultScaleRule = { "www.ithome.com": { Element: ["scrollHeight"] }, "live.bilibili.com": { HTMLElement: ["offsetHeight"] }, ".smzdm.com": { Element: ["clientWidth"] } };
          try {
            const storedFontScaleDef = await GMgetValue(FONTSCALE);
            const fontScaleDefRule = storedFontScaleDef ? JSON.parse(decrypt(storedFontScaleDef)) : defaultScaleRule;
            if (getObjectType.call(fontScaleDefRule) === "[object Object]" && safeObject.keys(fontScaleDefRule).length > 0) return fontScaleDefRule;
          } catch (e) {
            ERROR(`${e.name} in FontScaleDef.JSON.parse:`, e.message) ?? GMdeleteValue(FONTSCALE);
          }
          return saveData(FONTSCALE, defaultScaleRule), defaultScaleRule;
        },
        async () => {
          const defaultFonts = `Arial,Helvetica,Helvetica Neue,Verdana,Georgia,Tahoma,Noto Sans,Open Sans,Segoe UI,Roboto,RobotoDraft,Ubuntu,SimSun,NSimSun,SimHei,FangSong,KaiTi,MingLiU,PMingLiU,PingFangSC-Regular,PingFangSC-Medium,PingFangSC-Semibold,PingFangHK-Regular,PingFangHK-Medium,Microsoft YaHei,SF Pro SC,HanHei SC,{宋体},{楷体},{仿宋},{黑体},{微软雅黑},{微軟正黑體}`;
          const defaultFontRule = defaultFonts.split(",").sort();
          try {
            const fontOverrideDef = await GMgetValue(FONTOVERRIDE);
            const fontOverride = fontOverrideDef ? JSON.parse(decrypt(fontOverrideDef)) : defaultFontRule;
            if (safeArray.isArray(fontOverride) && fontOverride.length > 0) return fontOverride;
          } catch (e) {
            ERROR(`${e.name} in FontOverrideDef.JSON.parse:`, e.message) ?? GMdeleteValue(FONTOVERRIDE);
          }
          return saveData(FONTOVERRIDE, defaultFontRule), defaultFontRule;
        },
        async () => {
          try {
            const customProperty = await GMgetValue(CUSTOMPROPERTY);
            const property = customProperty ? JSON.parse(decrypt(customProperty)) : object();
            return { fontFeature: convertHtmlToText(property.feature), fontVariant: convertHtmlToText(property.variant) };
          } catch (_) {
            return GMdeleteValue(CUSTOMPROPERTY), { fontFeature: null, fontVariant: null };
          }
        }
      );
    })(initTrustedTypesPolicy(), safeJSON, sessionStorage?.getItem(def.static.navinfo));
  },
  (function (methods) {
    const methodMap = new Map(Object.entries(methods));
    const handler = {
      get(target, prop, receiver) {
        const method = methodMap.get(prop);
        return method ? (...args) => method.apply(target, args) : Reflect.get(target, prop, receiver);
      },
    };
    return array => (Array.isArray(array) ? new Proxy(array, handler) : array);
  })({
    RemoveX(value) {
      for (let i = this.length - 1; i >= 0; i--) if (this[i] === value) return this.splice(i, 1);
    },
    SomeX(callback, thisArg = this) {
      for (let i = 0; i < this.length; i++) if (callback.call(thisArg, this[i], i, this)) return true;
    },
    FindX(callback, thisArg = this) {
      for (let i = 0; i < this.length; i++) if (callback.call(thisArg, this[i], i, this)) return this[i];
    },
    FindIndeX(callback, thisArg = this) {
      for (let i = 0; i < this.length; i++) if (callback.call(thisArg, this[i], i, this)) return i;
      return -1;
    },
  }),
  ((ctx, mS = [..."Nc5𝙶Jo𝚊bR7𝙽𝚖4P𝚟CpvgY𝚄𝚏G𝚙𝚔Ue0𝚞V𝚍2𝙴𝚇DE3𝚠X𝚁QL𝚑𝚜kd𝚢𝚛F8s𝚎𝚓9𝚝𝙺hr𝚂zm𝚡yTul𝚘𝚌Z6a𝚗𝚐fAn𝚕𝙷𝚚jStMi𝚆𝚣𝚒𝙲1OWKB𝚅𝚋HwqxI"]) => {
    const oC = Object.create.bind(null, null);
    const sP = (O, o) => {
      const clone = O.create(O.getPrototypeOf(o));
      for (const key of Reflect.ownKeys(o)) Reflect.defineProperty(clone, key, O.getOwnPropertyDescriptor(o, key));
      return clone;
    };
    const eH = type => {
      const original = ctx.history[type];
      return function () {
        return ctx.dispatchEvent(new CustomEvent(type, { detail: { state: arguments[0], title: arguments[1], url: arguments[2] } })), original.apply(this, arguments);
      };
    };
    const tS = storageType => {
      try {
        ctx.addEventListener("error", e => (e.error?.name === "SecurityError" || e.message?.includes("SecurityError")) && e.preventDefault(), { once: true });
        return ctx[storageType].setItem("__fr_storage_test__", true), ctx[storageType].removeItem("__fr_storage_test__"), ctx[storageType];
      } catch (_) {
        return null;
      }
    };
    return { oC, mS, eH, sP, lS: tS("localStorage"), sS: tS("sessionStorage") };
  })(typeof window !== "undefined" ? window : this)
);
