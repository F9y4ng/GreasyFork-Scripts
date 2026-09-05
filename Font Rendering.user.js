// ==UserScript==
// @name               字体渲染（自用脚本）
// @name:zh-CN         字体渲染（自用脚本）
// @name:zh-TW         字型渲染（自用程式碼）
// @name:en            Font Rendering (Customized)
// @name:ja            フォントレンダリング (カスタム)
// @name:ko            폰트 렌더링 (개인용 스크립트)
// @version            2026.09.05.1
// @author             F9y4ng
// @description        无需 MacType，享受细腻高质感的网页阅读体验。脚本默认采用“微软雅黑”，支持自定义替换。面向进阶排版需求，集成字体重写、抗锯齿平滑、动态缩放、描边阴影、特殊样式过滤（白名单）及自定义等宽字体等高级功能。完美支持“全局渲染”与“站点个性化”双模式，点击图标或快捷键即可唤出配置面板。全面兼容主流浏览器、脚本管理器及常用扩展。
// @description:zh-CN  无需 MacType，享受细腻高质感的网页阅读体验。脚本默认采用“微软雅黑”，支持自定义替换。面向进阶排版需求，集成字体重写、抗锯齿平滑、动态缩放、描边阴影、特殊样式过滤（白名单）及自定义等宽字体等高级功能。完美支持“全局渲染”与“站点个性化”双模式，点击图标或快捷键即可唤出配置面板。全面兼容主流浏览器、脚本管理器及常用扩展。
// @description:zh-TW  無需 MacType，享受細膩高質感的網頁閱讀體驗。腳本預設採用「微軟雅黑」，支援自訂替換。面向進階排版需求，整合字型覆寫、抗鋸齒平滑、動態縮放、描邊陰影、特殊樣式過濾（白名單）及自訂等寬字型等進階功能。完美支援「全域渲染」與「網域個別設定」雙模式，點擊圖示或快捷鍵即可喚出設定面板。全面相容主流瀏覽器、腳本管理器及常用擴充功能。
// @description:en     Without MacType, enjoy a high-quality web reading experience. Applies "Microsoft YaHei" by default with custom replacement support. Advanced features include font rewriting, anti-aliasing, dynamic scaling, stroking/shadows, element filtering (whitelist), and custom monospace configuration. Supports global rendering and per-site customization, invoked via hotkey or icon. Fully compatible with major browsers, script managers, and extensions.
// @description:ja     MacType不要。ウェブフォントを美しく最適化。デフォルトの「Microsoft YaHei」のほか、カスタム置換に完全対応。フォント書き換え、アンチエイリアス、動的縮小拡大、輪郭・影、要素フィルター（ホワイトリスト）、等幅フォント設定などの高度な機能を搭載。「グローバル」と「サイト別」の双方向モードに対応、アイコンやショートカットで設定パネルを即座に起動。主要ブラウザ、スクリプトマネージャー、拡張機能と完全互換。
// @description:ko     MacType 설치 없는 웹 폰트 렌더링 최적화 툴.기본 폰트('Microsoft YaHei') 및 사용자 정의 교체를 지원합니다. 폰트 오버라이드, 안티앨리어싱, 동적 스케일링, 외곽선/그림자, 요소 필터링(화이트리스트), 맞춤형 고정폭 폰트 등 고급 기능을 제공합니다. '전역 렌더링' 및 '사이트별 개별 설정' 모드를 지원하며, 아이콘이나 단축키로 설정 창을 즉시 호출할 수 있습니다. 주요 브라우저, 스크립트 관리자 및 확장 프로그램과 완벽 호환됩니다.
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEUAAAAAAACtra3u7vDb29vu7u7t7e0NDQ3x8fGfn5/u7u7w8PDa2try8vIzMzPS0tKmpqbm5uY+Pj5ycnLHx8dycnKTk5Pz8/O8vLzx8fG9e8jy8vJKQXdTSHxYT3d8c49dT4TJllebl7Hhp1O1dsJqUoy9vMutcr1ybJNwVZHd3OKYaK3R0NqkbbWLYaV9W5pmXYfn5+quq8CLhqZ/eJq1iVosF5r4AAAAGnRSTlMABqX9Je/eJ7iZeA3ZUhDKdmpiR715YT2pmYcP5BAAAAGJSURBVDjLrZLrToNAFIRbt1zaYq31fmZXKXJZKFAu+v6v5lkMtYtp4g+/hEByhmHmsLP/48kXjr+4PL9G26XCuahYO6XKk0YE8wuCFXRNlEd4vGxARJkSN/P1yvdX64ngFh81MXmHrYuigDsJ4xYypkNGlQLaRkrNTnaF/kik+ApT9CHfJmH8lg2q0Lg0rcyIKmlZPCHil5PO5FA6IRos7s4MhMp4pBTPallRxk4K96f5Al1CI1nOXUygTpwsXhBWNHKIKZYcpg7xPC5JpCEPwoHqQHTshzCp440d9cH0K5goiXkkpWJZg6sfAdeDGwRIeUJxxin5Q6Wz+c4oShmqUuy8W+gjnThqbMc/2ZYCS2/mlmZfyUDGFkXAFobtTXD/4HHdnjsmOmK0aduflrXxvI0J09S85BZMwQuvNR7M9HxhMlcRBnqVyxQ769C4QBqlGDCPJeBurEMTvU2IsLWO5evn3uKzwdIW7N8t9iywz+XrhA9LsHDwC2dn1VxeTVjuvJnFfMrsD3wBrJNAMjnfuQMAAAAASUVORK5CYII=
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js
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
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_addValueChangeListener
// @grant              unsafeWindow
// @connect            f9y4ng.github.io
// @compatible         Edge (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @copyright          2020-2026, F9y4ng
// @run-at             document-start
// ==/UserScript==

void (function (ctx, uctx, sctx) {
  "use strict";

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   * CUSTOM SCRIPT DEBUGGING, DO NOT TURN ON FOR DAILY USE.                    *
   * SET TO "TRUE" FOR SCRIPT DEBUGGING, MAY CAUSE THE SCRIPT TO RUN SLOWLY.   *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  const IS_OPEN_DEBUG = false,

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * LICENSE FOR OPEN SOURCE USE: `GPLv3 ONLY`.                                *
     * THE CODE IS COMPLETELY OPEN AND FREE, AND DOES NOT ACCEPT UNAUTHORIZED    *
     * DISTRIBUTION AS THIRD-PARTY STANDALONE SCRIPTS. IN CASE OF ERRORS, USAGE  *
     * PROBLEMS OR NEW FEATURES, PLEASE FEEDBACK IN GITHUB ISSUES, THANK YOU!    *
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    GMinfo = typeof GM_info !== "undefined" ? GM_info : typeof GM !== "undefined" && GM.info ? GM.info : { script: {} },
    GMscriptHandler = GMinfo.scriptHandler ?? "unknown", GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion,
    GMscriptName = getMetaValue(`name:${getLanguage("en")}`) ?? GMinfo.script.name ?? getMetaValue("name:en"),
    GMscriptAuthor = getMetaValue("author") ?? GMinfo.script.author, GMscritpVersion = getMetaValue("version") ?? GMinfo.script.version,
    GMsupportURL = getMetaValue("supportURL") ?? GMinfo.script.supportURL, GMhomepage = getMetaValue("homepageURL") ?? GMinfo.script.homepage,
    isRawContent = new Set(["Greasemonkey", "FireMonkey", "OrangeMonkey", "Userscripts"]).has(GMscriptHandler),
    isRawGreasemonkey = GMscriptHandler === "Greasemonkey" || GMscriptHandler === "FireMonkey",
    GMcontextMode = GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode) || isRawContent;

  /* GLOBAL FUNCTIONS DECLARATION */

  function toString(value) { return typeof val === "symbol" ? value.description ?? "" : String(value ?? "") }
  function getLanguage(fallback = "en-US") { return navigator.language || Intl.DateTimeFormat?.().resolvedOptions?.().locale || fallback }
  const AsyncFunction = (async () => { }).constructor; function isAsyncFunction(fn) { return typeof fn === "function" && fn instanceof AsyncFunction }
  function qS(expr, target = document) { return typeof expr === "string" && typeof target?.querySelector === "function" ? target.querySelector(expr) : null }
  function qA(expr, target = document) { return typeof expr === "string" && typeof target?.querySelectorAll === "function" ? [...target.querySelectorAll(expr)] : [] }
  function gT(tag, target = document) { return typeof tag === "string" && typeof target?.getElementsByTagName === "function" ? [...target.getElementsByTagName(tag)] : [] }
  function capitalize(value) { if (typeof value !== "string" || !value) { return "" } return value.replace(/\b[a-zA-Z]/g, char => char.toUpperCase()) }
  function getMetaValue(str) {
    if (typeof str !== "string" && typeof str !== "number") { return null } const key = String(str), scriptMetaStr = GMinfo.scriptMetaStr;
    if (scriptMetaStr) { const regexp = new RegExp(`//\\s+@${key}\\s+(.+)`), metaValue = scriptMetaStr.match(regexp); if (metaValue) { return metaValue[1].trim() } }
    const localeMatch = key.match(/^name:([a-zA-Z-]+)$/); if (localeMatch) { return GMinfo.script.locales?.[localeMatch[1]]?.name || null } return null;
  }
  function getLocationInfo() {
    const { host: h, href: hR, hostname: hN, pathname: pN, protocol: pT } = ctx.location, iT = ctx.self === ctx.top, iF = iT ? "" : "[IFRAME]"; let tH = h;
    if (!iT) { try { tH = ctx.top.location.host } catch { const ref = document.referrer; if (ref) { tH = new URL(ref).host } } } return { h, hR, hN, pN, pT, tH, iT, iF };
  }

  class LRUCache {
    constructor(capacity = 100) { this.capacity = capacity > 0 ? capacity : 100; this.cache = new Map() }
    get(key) { if (!this.cache.has(key)) { return void 0 } const value = this.cache.get(key); this.cache.delete(key); this.cache.set(key, value); return value }
    set(key, value) {
      if (this.cache.has(key)) { this.cache.delete(key) } else if (this.cache.size >= this.capacity) { const oldKey = this.cache.keys().next().value; this.cache.delete(oldKey) }
      this.cache.set(key, value); return this;
    }
    has(key) { return this.cache.has(key) }
    clear() { this.cache.clear() }
  }

  class SecureStorage {
    constructor() { this.session = this._initStorage("sessionStorage"); this.local = this._initStorage("localStorage") }
    get getSessionStorage() { return this.session } get getLocalStorage() { return this.local }
    static createFallback() {
      const store = new LRUCache(1e3), getItem = key => { return store.has(key) ? store.get(key) : null }, setItem = (key, value) => { store.set(key, String(value)) },
        removeItem = key => { store.delete(key) }, clear = () => { store.clear() }; return { store, getItem, setItem, removeItem, clear };
    }
    _initStorage(type) {
      const storage = ctx[type]; if (!storage) { return this.constructor.createFallback() }
      try { const test = "__storage_test__"; storage.setItem(test, test); storage.removeItem(test); return storage } catch { return this.constructor.createFallback() }
    }
  }

  void (function BuiltInSandbox($, $$) {
    const { atob, btoa, console_log, console_warn, console_error, setTimeout, clearTimeout, structuredClone, queueMicrotask, requestAnimationFrame: rAF, cancelAnimationFrame: cAF, requestIdleCallback, JSON_parse, JSON_stringify, Reflect_get, Reflect_set, Reflect_defineProperty, Element_attachShadow: attachShadow, Element_hasAttribute: hasAttribute, Element_getAttribute: getAttribute, Element_setAttribute: setAttribute, Element_removeAttribute: removeAttribute, Reflect_getOwnPropertyDescriptor: Reflect_getOwnDesc, Object_create, Object_keys, Object_entries, Object_is, Object_assign, Object_toString, Object_freeze, Array_isArray, Array_from, Array_push, Array_some, Array_filter, Array_forEach, Array_splice, Array_sort, Array_includes, Array_join, Array_map, Array_find, Array_unshift, Array_findIndex, Array_flatMap, Function_call, Function_apply, String_fromCharCode, Event_preventDefault: preventDefault, Event_stopPropagation: stopPropagation, Event_stopImmediatePropagation: stopImmediatePropagation, Event_composedPath, EventTarget_addEventListener: addListener, EventTarget_removeEventListener: removeListener, EventTarget_dispatchEvent: dispatchEvent } = $$,
      { h: CUR_HOST, hR: CUR_HREF, hN: CUR_HOST_NAME, tH: TOP_HOST, iT: CUR_WINDOW_TOP, iF: IN_FRAME } = getLocationInfo(), secureStorage = new SecureStorage(),
      { getSessionStorage: sessionStorage, getLocalStorage: localStorage } = secureStorage, CURRENT_LANGUAGE = "__Language#CURRENT_", PLACEHOLDER_REGEX = /\{([^}]+)\}/g;

    /* ---PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS (F9Y4NG)--- */

    class I18n {
      constructor(translations, defaultLang, fallbackLang) {
        this.translations = translations || {}; this.fallbackLang = fallbackLang; const storedLang = sessionStorage.getItem(CURRENT_LANGUAGE);
        this.currentLang = this.translations[storedLang] ? storedLang : (this.translations[defaultLang] ? defaultLang : fallbackLang);
      }
      setLanguage(lang) { if (this.translations[lang]) { this.currentLang = lang; sessionStorage.setItem(CURRENT_LANGUAGE, lang); return true } return false }
      t(key, params) {
        const dict = this.translations[this.currentLang] || this.translations[this.fallbackLang] || {}, temp = dict[key] || key;
        if (!params || typeof temp !== "string" || temp.indexOf("{") === -1) { return temp } return temp.replace(PLACEHOLDER_REGEX, (m, p1) => { return p1 in params ? params[p1] : m });
      }
    }
    const cE = (tagName, opts = {}) => {
      const el = document.createElement(tagName); for (const [key, value] of Object_entries(opts)) {
        if (value === null || value === void 0) { continue } if (key === "class" || key === "className") { el.className = value } else
          if (typeof value === "boolean") { value ? setAttribute(el, key, "") : removeAttribute(el, key) } else
            if (key === "textContent" || key === "innerText") { el[key] = value } else { setAttribute(el, key, value) }
      } return el;
    }, appendNode = (parent, ...children) => {
      const len = children.length; if (!parent || len === 0) { return false } let lastNode = null; if (len === 1) {
        const item = children[0]; if (item === null || item === void 0) { return null } lastNode = item.nodeType ? item : new Text(item); return parent.appendChild(lastNode);
      } const fragment = document.createDocumentFragment(); for (let i = 0; i < len; i++) {
        const item = children[i]; if (item === null || item === void 0) { continue } const node = item.nodeType ? item : new Text(item); lastNode = fragment.appendChild(node);
      } if (lastNode) { parent.appendChild(fragment) } return lastNode;
    }, generalAddElement = (p, t, o) => {
      if (typeof p === "string") { o = t ?? {}; t = p; p = (/^(?:script|style|link|meta)$/i.test(p) ? document.head : document.body) || document.documentElement }
      try { return appendNode(p, cE(t, o ?? {})) } catch { return null }
    }, isGM = name => typeof GM !== "undefined" && name in GM && typeof GM[name] === "function",
      GMgetValue = isGM("getValue") ? GM.getValue.bind(GM) : typeof GM_getValue !== "undefined" ? GM_getValue : void 0,
      GMsetValue = isGM("setValue") ? GM.setValue.bind(GM) : typeof GM_setValue !== "undefined" ? GM_setValue : void 0,
      GMdeleteValue = isGM("deleteValue") ? GM.deleteValue.bind(GM) : typeof GM_deleteValue !== "undefined" ? GM_deleteValue : void 0,
      GMlistValues = isGM("listValues") ? GM.listValues.bind(GM) : typeof GM_listValues !== "undefined" ? GM_listValues : void 0,
      GMaddElement = typeof GM_addElement !== "undefined" ? GM_addElement : generalAddElement,
      GMopenInTab = isGM("openInTab") ? GM.openInTab.bind(GM) : typeof GM_openInTab !== "undefined" ? GM_openInTab : $.open.bind($),
      GMxhr = isGM("xmlHttpRequest") ? GM.xmlHttpRequest.bind(GM) : typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : void 0,
      GMaddMenu = isGM("registerMenuCommand") ? GM.registerMenuCommand.bind(GM) : typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : void 0,
      GMchangeListener = typeof GM_addValueChangeListener !== "undefined" ? GM_addValueChangeListener : void 0,
      encrypt = (s, u = true) => { try { const r = String(s); return btoa(u ? encodeURIComponent(r) : r) } catch { return "" } },
      decrypt = (s, u = true) => { try { const r = atob(String(s).replace(/[^A-Za-z0-9+/=]/g, "")); return u ? decodeURIComponent(r) : r } catch { return "" } },
      uniq = (array, filterFn = Boolean, mapFn = null) => {
        if (!Array_isArray(array)) { return [] } const seen = new Set(), result = [], hasFilter = typeof filterFn === "function",
          hasMap = typeof mapFn === "function"; for (let i = 0, l = array.length; i < l; ++i) {
            const item = array[i]; if (hasFilter && !filterFn(item, i, array)) { continue }
            if (!seen.has(item)) { seen.add(item); const transformed = hasMap ? mapFn(item, i, array) : item; Array_push(result, transformed) }
          } return result;
      },
      randomString = (len, mode = "lowercase") => {
        const result = [], buf = new Uint8Array(1), check = {
          lowercase: c => c >= 97 && c <= 122, alpha: c => (c >= 65 && c <= 90) || (c >= 97 && c <= 122),
          numeric: c => c >= 48 && c <= 57, all: c => (c >= 48 && c <= 57) || (c >= 65 && c <= 90) || (c >= 97 && c <= 122)
        }[mode]; while (result.length < len) { $.crypto.getRandomValues(buf); const code = 48 + (buf[0] % 75); if (check(code)) { Array_push(result, String_fromCharCode(code)) } } return Array_join(result, "");
      },
      randomInt = (min, max) => { const len = String(max).length + 1, num = parseInt(randomString(len, "numeric"), 10); return min + (num % (max - min + 1)) },
      isDebugModeFromURL = () => { const value = new URL(CUR_HREF).searchParams.get("whoami"); return Object_is(GMscriptAuthor, value) },
      toUnicodeEscapes = str => {
        if (!str || typeof str !== "string") { return "" } const result = [];
        for (const char of str) { const code = char.codePointAt(0).toString(16).toUpperCase(); Array_push(result, `\\${code.padStart(4, "0")}`) } return Array_join(result, "");
      },
      sleep = timeout => new Promise(resolve => { setTimeout(resolve, timeout) }), reload = () => { setTimeout(() => { location.reload(true) }, 250) },
      createConsoleLogger = debug => {
        const LOGO = `🔠 ${GMscriptName}`, k = (m, ...a) => { if (typeof m !== "string") { Array_unshift(a, m); m = "" } return [m, a] }, s = (dark => ({
          logo: "border-radius:4px;display:inline-block;font:700 normal 12px/140% monospaced,sans-serif;letter-spacing:3px;padding:4px 8px;width:fit-content;",
          msgBase: "display:inline-block;font:400 normal 12px/130% monospaced,sans-serif;padding:4px 4px 2px 4px;width:fit-content;",
          logTag: dark ? "background:#ffffff1f;border:1px solid #ffffff26;color:#fff;" : "background:#242426;border:1px solid #454549;color:#fff;",
          warnTag: dark ? "background:#ff9f0a26;border:1px solid #ff9f0a40;color:#ff9f0a;" : "background:#fff9e6;border:1px solid #ffe099;color:#bf7e00;",
          errTag: dark ? "background:#ff453a26;border:1px solid #ff453a40;color:#ff453a;" : "background:#ffebec;border:1px solid #ffccd0;color:#e3000f;",
          warnMsg: dark ? "color:#ff9f0a;" : "color:#bf7e00;", logMsg: dark ? "color:#ffffffd9;" : "color:#1d1d1f;", errMsg: dark ? "color:#ff453a;" : "color:#e3000f;"
        }))($.matchMedia && $.matchMedia("(prefers-color-scheme: dark)").matches); return {
          log(m, ...a) { if (debug) { [m, a] = k(m, ...a); console_log(`%c${LOGO}%c${m}`, `${s.logo}${s.logTag}`, `${s.msgBase}${s.logMsg}`, ...a) } },
          warn(m, ...a) { if (debug) { [m, a] = k(m, ...a); console_warn(`%c${LOGO}%c${m}`, `${s.logo}${s.warnTag}`, `${s.msgBase}${s.warnMsg}`, ...a) } },
          info(m, ...a) { [m, a] = k(m, ...a); console_log(`%c${LOGO}%c${m}`, `${s.logo}${s.logTag}`, `${s.msgBase}${s.logMsg}`, ...a) },
          error(m, ...a) { [m, a] = k(m, ...a); console_error(`%c${LOGO}%c${m}`, `${s.logo}${s.errTag}`, `${s.msgBase}${s.errMsg}`, ...a) }
        };
      }, { log, warn, info, error } = createConsoleLogger(isDebugModeFromURL() || IS_OPEN_DEBUG), ID_REGEXP = /:root#(?:[\w-]|\\\\[0-9a-fA-F]{1,6}\s?|\\\\.)+/g,
      convertCSS = (doc, cssText, compare) => {
        const htmlID = doc?.documentElement?.id, filter = !htmlID || isRawGreasemonkey || compare({ BLINK: 130, more: false }) ? ":root " : `:root#${CSS.escape(htmlID)} `,
          css = cssText.replace(ID_REGEXP, filter); return compare({ BLINK: 128, GECKO: 138 }) ? css.replace("var(--fr-font-fontscale)", "initial") : css;
      },
      safeDeepClone = obj => { if (structuredClone) { return structuredClone(obj) } try { return JSON_parse(JSON_stringify(obj)) } catch { return obj } },
      isFrameHidden = n => (n.checkVisibility ? !n.checkVisibility({ visibilityProperty: true }) : (n.offsetWidth === 0 || $.getComputedStyle(n).visibility === "hidden")),
      languagePacks = {
        "en-US": { Worker: "Web Worker stopped due to CSP or permissions. Demoted to sync mode.", FrameErr: "Cross-origin or security restriction:", TrustedHTML: "Trusted Types policy creation failed:", StyleInsertErr: "Failed to insert style:", StyleRemoveErr: "Failed to remove style:", StyleRestoreErr: "Failed to restore style!", IllegalData: "Unauthorized data modification detected. If unexpected, contact the author.", RemoteDataErr: "Data parsing failed. Please refetch.", TamperErr: "Unauthorized data or code tampering detected, please reinstall the genuine script.", RebuildErr: "Initialization command detected. Refresh page to complete.", LoadMenu: "Loading script menu, please wait...", Reinstall: "Reinstall script from official", RenderSetting: "Font Rendering Settings ", StopRender: "Exclude {h} from Rendering", CoreSetting: "Advanced Core Settings", GlobalDisable: "Global font rendering disabled. Reconfigure global data to turn on.", ReRender: "Re-render {h}", Feedback: "Feedback & Support", ToRerender: "{h} is already in the excluded rendering list. Enable it via the script menu to re-render.", ModuleLoaded: "Font rendering module v{v} loaded successfully.", Preview: "Prvw", Redundant: "Redundant scripts detected", RunMode: "Script running in content context. Compatibility issues may occur.", Incompatible: "Browser version outdated. Script may not function correctly.", RestoreDone: "Backup data imported and loaded successfully." },
        "zh-CN": { Worker: "因内容安全策略（CSP）或权限限制，Web Worker 停止运行，已降级为同步模式。", FrameErr: "跨域或安全策略限制：", TrustedHTML: "受信任类型（Trusted Types）策略创建失败：", StyleInsertErr: "插入样式失败：", StyleRemoveErr: "移除样式失败：", StyleRestoreErr: "恢复样式失败！", IllegalData: "检测到未经授权的数据更改。若非本人操作，请及时联系作者。", RemoteDataErr: "云端数据解析失败，请重新拉取。", RebuildErr: "检测到程序初始化指令（通常由作者触发），请刷新页面以完成初始化。", TamperErr: "检测到未经授权的数据或代码篡改，请访问官方站点重新安装脚本。", LoadMenu: "正在载入脚本菜单，请稍候……", Reinstall: "请访问官方网站重新安装脚本", RenderSetting: "字体渲染设置", StopRender: "排除渲染 {h}", CoreSetting: "高级核心配置设置", ReRender: "重新渲染 {h}", Feedback: "向作者反馈问题或提出建议", GlobalDisable: "全局字体渲染已停用！如需启用请重新配置并保存为全局数据。", ToRerender: "{h} 已处于排除渲染列表中。如需重新渲染，请在脚本菜单中启用。", ModuleLoaded: "字体渲染模块 v{v} 已成功加载。", Save: "保存", Preview: "预览", Redundant: "检测到冗余的字体渲染脚本冲突", RunMode: "脚本正运行于 content context 模式，可能会出现兼容性问题。", Incompatible: "您的浏览器版本过低，脚本部分功能可能无法正常运行！", RestoreDone: "备份数据已成功导入并加载。" },
        "zh-TW": { Worker: "因內容安全政策（CSP）或權限限制，Web Worker 停止執行，已降級為同步模式。", FrameErr: "跨網域或安全政策限制：", TrustedHTML: "受信任類型（Trusted Types）策略建立失敗：", StyleInsertErr: "插入樣式失敗：", StyleRemoveErr: "移除樣式失敗：", StyleRestoreErr: "還原樣式失敗！", IllegalData: "偵測到未經授權的資料變更。若非本人操作，請及時聯絡作者。", RemoteDataErr: "雲端資料解析失敗，請重新拉取。", RebuildErr: "偵測到程式初始化指令（通常由作者觸發），請重新整理頁面以完成初始化。", TamperErr: "偵測到未經授權的資料或程式碼篡改，請訪問官方網站重新安裝脚本。", LoadMenu: "正在載入指令碼功能表，請稍候……", Reinstall: "請造訪官方網站重新安裝指令碼", RenderSetting: "字型渲染設定", StopRender: "排除轉譯 {h}", CoreSetting: "進階核心組態設定", ReRender: "重新轉譯 {h}", Feedback: "向作者意見反應與建議", GlobalDisable: "全域字型渲染已停用！如需啟用請重新設定並儲存為全域資料。", ToRerender: "{h} 已處於排除轉譯列表中。如需重新轉譯，請在指令碼功能表中啟用。", ModuleLoaded: "字型渲染模組 v{v} 已成功載入。", Save: "儲存", Preview: "預覽", Redundant: "偵測到備份/多餘的字型渲染指令碼衝突", RunMode: "指令碼正執行於 content context 模式，可能會出現相容性問題。", Incompatible: "您的瀏覽器版本過舊，指令碼部分功能可能無法正常執行！", RestoreDone: "備份資料已成功匯入並載入。" }
      }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US");

    void (function InitializedFunctions(tTP) {
      const LOAD_ONCE = "fr-init-once", NAVIGATORINFO = "__Navigation#INFO__", MAIN_STYLE_ID = "main-document-style", MAIN_STYLE_TYPE = "main-document", BOLD_STYLE_ID = "ultimate-bold-style-",
        BOLD_STYLE_TYPE = "ultimate-bold", BOLD_FIXER_ATTR = "ultimate-bold-correct", CONFLICT_NAME = "fr-callback-conflict", FRAME_STATUS = "data-frame-render", MARKERID = randomString(6, "alpha"),
        CONFIGURE = "_CONFIGURE_", EXCLUDESITES = "_EXCLUDE_SITES_", FONTSET = "_FONTS_SET_", DOMAINFONTSET = "_DOMAINS_FONTS_SET_", CUSTOMFONTLIST = "_CUSTOM_FONTLIST_", CUSTOMPROPERTY = "_CUSTOM_PROPERTY_",
        MONOFONTLIST = "_MONOSPACED_FONTLIST_", MONOSITERULES = "_MONOSPACED_SITERULES_", MONOFEATURE = "_MONOSPACED_FEATURE_", FONTOVERRIDE = "_FONTOVERRIDE_DEF_", FONTSCALEFIX = "_FONTSCALE_DEF_",
        FONTCHECKLIST = "_FONTCHECKLIST_", REMOTERENDERDATA = "_REMOTERENDERRULESDATA_", RC2 = { flag: "33c4ff488042d81f968379af99f20243077955e6ac018cb3e8", date: "Sat Jul 11 2026" },
        scaleMatrix = { prev: 1, cur: 1, __proto__: null }, RENDER_RULES_URL = "aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGcmVuZGVyaW5nUnVsZXM=",
        IS_DISCUZ = "_FR_IS_DISCUZ_", SECURE_KEY = "JUU4JUFBJUIxSlZpWSVFNyU5MCU4OSVFNiU5RiU5MyVFNSVBRCVCQSVFOCU4MiVCQXAyTyVFNiU5MyU5MzAlRTglODUlOTF0JUU1JUIyJTgwJUU1JUFFJTlBJUU4JTg2JUJBZQ==",
        SOURCE = "%C3%99%C3%97%C3%9D%7F%7D%C2%9A%7D%C3%9D%C2%9A%7F%C3%9EZ%C3%B7%C3%87%1B%C3%99%C3%B6%C2%BB%C3%93n%C3%BC%C3%AB%C2%A7x", __TRANSFORM_CORE_PLACEHOLDER__ = {};

      (function shieldMutationRecord() {
        const descAttrName = Reflect_getOwnDesc($.MutationRecord.prototype, "attributeName"), descTarget = Reflect_getOwnDesc($.MutationRecord.prototype, "target");
        if (!descAttrName || !descTarget) { return } const originalAttrNameGet = descAttrName.get, originalTargetGet = descTarget.get, ghostString = "data-ignored-lock-void";
        Element.prototype.setAttribute = function (name, value) { if (name === ghostString) { return } return setAttribute(this, name, value) };
        Element.prototype.getAttribute = function (name) { if (name === ghostString) { return null } return getAttribute(this, name) };
        Reflect_defineProperty($.MutationRecord.prototype, "attributeName", {
          configurable: true, enumerable: true, get: function () {
            const realAttrName = Function_call(originalAttrNameGet, this), realTarget = Function_call(originalTargetGet, this),
              isBoldFixerTarget = realTarget && realTarget.nodeType === 1 && (realAttrName === BOLD_FIXER_ATTR || realTarget.classList.contains(BOLD_FIXER_ATTR));
            if (isBoldFixerTarget) { if (this.__is_fr_reading__) { return realAttrName } return ghostString } return realAttrName;
          }
        });
      })();

      const NavigatorInfoFetcher = (function () {
        const PLATFORM_MAP = { Mac: "macOS", Win: "Windows", "like Mac": "iOS", CrOS: "Chromium OS", X11: "Linux" }, OS_PLATFORMS = ["like Mac", "iOS", "Mac", "Android", "Fedora", "Debian", "Ubuntu", "FreeBSD", "OpenBSD", "CrOS", "Linux", "Unix", "X11", "Xbox", "Win"], ENGINE_MAP = { Chrome: "Blink", Chromium: "Blink", Firefox: "Gecko", Safari: "WebKit", [void 0]: "unknown" },
          REGEX_NOT_A_BRAND = /Not[^a-z]*A[^a-z]*Brand/i, REGEX_KNOWN_BRANDS = /^(?:Chrom(?:e|ium)|Firefox|Safari)$/i, REGEX_GECKO = /(?:Gecko\/|Firefox\/|FxiOS)/, REGEX_BLINK = /(?:Chrom(?:e|ium)\/|CriOS)/,
          REGEX_WEBKIT = /(?:AppleWebKit\/|Version\/)/, REGEX_KNOWN_BRANDS_LOOSE = /Chrom(?:e|ium)|Firefox|Safari/i, REGEX_UNREGISTERED_EV = /(?:Chrom(?:e|ium)|Firefox|Version)\/(\d+[.0-9]*)/i,
          REGEX_BLACKLIST = /version|mozilla|applewebkit|safari|khtml|like|gecko|mobile|chrome|firefox/i, REGEX_EXTRACT_ALL = /([^/\s()]+)\/([\d.]+)/g,
          BROWSER_CONFIGS = [{ key: "OPR", brand: "Opera", engine: "Blink", as: "Chrome" }, { key: "YaBrowser", brand: "Yandex", engine: "Blink", as: "Chrome" }, { key: "Edg", brand: "Edge", engine: "Blink", as: "Chrome" }, { key: "Chrome", brand: "Chrome", engine: "Blink" }, { key: "Chromium", brand: "Chromium", engine: "Blink" }, { key: "LibreWolf", brand: "LibreWolf", engine: "Gecko", as: "Firefox" }, { key: "Zen", brand: "Zen", engine: "Gecko", as: "Firefox" }, { key: "PaleMoon", brand: "PaleMoon", engine: "Gecko", as: "Firefox" }, { key: "Waterfox", brand: "Waterfox", engine: "Gecko", as: "Firefox" }, { key: "Firefox", brand: "Firefox", engine: "Gecko" }, { key: "Safari", brand: "Safari", engine: "WebKit", as: "Version", verset: ["Version"] }],
          formatVersion = version => { const p = version?.split(".") ?? []; return `${parseInt(p[0], 10) || 0}.${parseInt(p[1], 10) || 0}.${parseInt(p[2], 10) || 0}.${parseInt(p[3], 10) || 0}` },
          getLastWord = str => { if (!str) { return } const idx = str.lastIndexOf(" "); return idx !== -1 ? str.substring(idx + 1) : str };
        return class {
          constructor(context) { this.ua = navigator.userAgent; this.voucher = `${GMscriptHandler} ${GMversion}`; this.creditEngine = this.constructor.getRealEngine(context) }
          async getInfo() { const uad = await this.getUADFromExt(); if (uad) { return this.getInfoFromUAD(uad) } return this.getInfoFromUA() }
          async getUADFromExt() {
            let extData; if (this.voucher.startsWith("Violentmonkey") && (extData = GMinfo.platform)) {
              const { browserName, browserVersion, fullVersionList = [], os, arch } = extData, [architecture, bitness] = arch?.split("-") ?? [],
                brands = [{ brand: capitalize(browserName), version: browserVersion }, ...fullVersionList]; let extUa;
              if (parseFloat(browserVersion) < 57.0 && (extUa = GMinfo.userAgent)) {
                const matches = extUa.match(/\s(Chrom(?:e|ium)|Firefox)\/(\d+[.0-9]*)/i); if (matches) { brands.unshift({ brand: capitalize(matches[1]), version: matches[2] }) }
              } return { bitness, architecture, brands, platform: capitalize(os), source: "ext", voucher: this.voucher };
            } else if (Array_includes(["Tampermonkey", "ScriptCat"], GMscriptHandler) && (extData = GMinfo.userAgentData)) {
              if (this.creditEngine === "Gecko" && extData.brands?.[0] && parseFloat(extData.brands[0].version) < 78.0) {
                const matches = this.ua.match(/\s(Firefox)\/(\d+[.0-9]*)/i); if (matches) { extData.brands.unshift({ brand: capitalize(matches[1]), version: matches[2] }) }
              } return { ...extData, source: "ext", voucher: this.voucher };
            } else if ((extData = navigator.userAgentData) && extData.getHighEntropyValues && extData.brands?.[0]) {
              const data = await extData.getHighEntropyValues(["bitness", "architecture", "fullVersionList"]); return { ...data, brands: data.fullVersionList || data.brands, voucher: this.voucher };
            } return null;
          }
          static getRealEngine(w) { return (w.GestureEvent ? "WebKit" : w.scrollByLines || w.getDefaultComputedStyle ? "Gecko" : w.webkitRequestFileSystem || w.webkitSpeechGrammar ? "Blink" : "Unknown") }
          getInfoFromUAD(uad) {
            let bestBrandStr = null, finalBrand, finalVersion; if (uad.brands) {
              for (let i = 0; i < uad.brands.length; ++i) {
                const b = uad.brands[i].brand, v = uad.brands[i].version, weight = REGEX_NOT_A_BRAND.test(b) ? 9 : REGEX_KNOWN_BRANDS.test(b) ? 5 : 1, str = `${weight}${b}`;
                if (bestBrandStr === null || str < bestBrandStr) { bestBrandStr = str; finalBrand = b; finalVersion = v }
              }
            } let engine = finalBrand, engineVersion = finalVersion; if (uad.brands) {
              for (let i = 0; i < uad.brands.length; ++i) { const b = uad.brands[i].brand; if (REGEX_KNOWN_BRANDS_LOOSE.test(b)) { engine = b; engineVersion = uad.brands[i].version; break } }
            } const parsedEngine = capitalize(getLastWord(engine) ?? "Unknown"),
              engineInfo = { engine: ENGINE_MAP[parsedEngine] ?? this.getEngineFromUA(), engineVersion: parseFloat(engineVersion) || 99, creditEngine: this.creditEngine },
              browserInfo = { brand: getLastWord(finalBrand) ?? "Unknown", brandVersion: formatVersion(finalVersion), os: PLATFORM_MAP[uad.platform] ?? uad.platform };
            return { ...engineInfo, ...browserInfo, source: uad.source ?? "uad", voucher: uad.voucher };
          }
          getInfoFromUA() {
            const { brand, brandVersion, engine, engineVersion } = this.getBVFromUA();
            return { engine, engineVersion, creditEngine: this.creditEngine, brand, brandVersion, os: this.getOSFromUA(), source: "ua", voucher: this.voucher };
          }
          getBVFromUA() {
            const getVersion = (str, offset, index) => (index = this.ua.indexOf(str)) !== -1 && this.ua.slice(index + offset).match(/\d+[.0-9]*/)?.[0];
            for (const { key, brand, engine, verset, as } of BROWSER_CONFIGS) {
              if (!this.ua.includes(key)) { continue } const versionArr = verset ? (Array_isArray(verset) ? verset : [verset]) : null,
                versionKey = versionArr ? Array_find(versionArr, k => this.ua.includes(k)) : key;
              if (!versionKey) { continue } const brandVersionRaw = getVersion(versionKey, versionKey.length + 1); if (!brandVersionRaw) { continue }
              const engineVersionRaw = (as && getVersion(as, as.length + 1)) || getVersion(key, key.length + 1) || "99";
              return { brand, brandVersion: formatVersion(brandVersionRaw), engine, engineVersion: parseFloat(engineVersionRaw) };
            } const unregistered = this.getUnregisteredBVFromUA(); return { brand: unregistered.b, brandVersion: unregistered.bv, engine: this.getEngineFromUA(), engineVersion: unregistered.ev };
          }
          getEngineFromUA() { return REGEX_GECKO.test(this.ua) ? "Gecko" : REGEX_BLINK.test(this.ua) ? "Blink" : REGEX_WEBKIT.test(this.ua) ? "WebKit" : "Unknown" }
          getUnregisteredBVFromUA() {
            let finalName = "Unknown", finalVer = "0.0.0.0"; for (const match of this.ua.matchAll(REGEX_EXTRACT_ALL)) { if (!REGEX_BLACKLIST.test(match[1])) { finalName = match[1]; finalVer = match[2] } }
            const ev = this.ua.match(REGEX_UNREGISTERED_EV)?.[1]; return { b: finalName, bv: formatVersion(finalVer), ev: parseFloat(ev || finalVer) || 99 };
          }
          getOSFromUA() { const platform = Array_find(OS_PLATFORMS, p => this.ua.includes(p)) || "Unknown"; return PLATFORM_MAP[platform] ?? platform }
        };
      })();

      class StyleManager {
        constructor() {
          this.targetStyles = new WeakMap(); this.knownMountPoints = new Set(); this.isSupportedAdoptStyle = "adoptedStyleSheets" in document &&
            typeof document.adoptedStyleSheets.push === "function" && typeof CSSStyleSheet === "function" && "replaceSync" in CSSStyleSheet.prototype && !GMcontextMode;
        }
        _resolveMountPoint(target) {
          if (!target) { return this.isSupportedAdoptStyle ? document : document.head } if (target.nodeType === 9) { return this.isSupportedAdoptStyle ? target : target.head }
          if (target.nodeType === 11 && target.host) { return target } const _target = target.getRootNode(); return this.isSupportedAdoptStyle ? _target : _target.head || _target;
        }
        _getRecords(mountPoint) {
          if (!this.targetStyles.has(mountPoint)) { this.targetStyles.set(mountPoint, { byId: new Map(), byCss: new Map() }); this.knownMountPoints.add(new $.WeakRef(mountPoint)) }
          return this.targetStyles.get(mountPoint);
        }
        insert(id, cssText, { target = document, type = "default", media = "screen" } = {}) {
          if (target && target.nodeName === "IFRAME") { try { target = target.contentDocument } catch { return } } if (!id || typeof cssText !== "string") { return }
          const mountPoint = this._resolveMountPoint(target), useAdopted = this.isSupportedAdoptStyle && ("adoptedStyleSheets" in mountPoint),
            store = this._getRecords(mountPoint); let record = store.byId.get(id); if (!record) {
              record = { id, type, cssText: "", media: "", ref: null, isAdopted: useAdopted }; store.byId.set(id, record);
            } else { store.byCss.delete(record.cssText) } if (useAdopted) { record.ref = this.constructor.insertAdopted(record, cssText, media, mountPoint) } else {
              record.ref = this.constructor.insertStyleTag(record, id, type, cssText, media, mountPoint);
            } record.cssText = cssText; record.media = media; record.type = type; store.byCss.set(cssText, id);
        }
        static insertAdopted(record, cssText, media, mountPoint) {
          let sheet = record?.ref; const isInvalidSheet = !sheet || Object_toString(sheet) !== "[object CSSStyleSheet]";
          if (isInvalidSheet) { const w = (mountPoint.ownerDocument || mountPoint).defaultView || $; sheet = new w.CSSStyleSheet() }
          if (sheet.media.mediaText !== media) { sheet.media.mediaText = media } if (record?.cssText !== cssText) { sheet.replaceSync(cssText) }
          if (!Array_includes(mountPoint.adoptedStyleSheets, sheet)) { Array_push(mountPoint.adoptedStyleSheets, sheet) } return sheet;
        }
        static insertStyleTag(record, id, type, cssText, media, mountPoint) {
          if (!record.ref) { const el = qS(`style[data-id="${CSS.escape(id)}"]`, mountPoint); if (el) { record.ref = el } } else {
            const el = record.ref; if (el.media !== media) { el.media = media } if (el.textContent !== cssText) { el.textContent = cssText }
            if (el.dataset.id !== id) { el.dataset.id = id } if (el.dataset.type !== type) { el.dataset.type = type } return el;
          } const options = { type: "text/css", media, textContent: cssText, "data-id": id, "data-type": type };
          return GMaddElement(mountPoint, "style", options) ?? qS(`style[data-id="${CSS.escape(id)}"]`, mountPoint);
        }
        static isMounted(record, mountPoint) {
          if (record?.isAdopted) { return Array_includes(mountPoint.adoptedStyleSheets, record.ref) } return mountPoint.contains ? mountPoint.contains(record.ref) : false;
        }
        remove(id, target = document) {
          const mountPoint = this._resolveMountPoint(target), store = this.targetStyles.get(mountPoint); if (!store) { return } const record = store.byId.get(id); if (!record) { return }
          if (record.isAdopted) { mountPoint.adoptedStyleSheets = Array_filter(mountPoint.adoptedStyleSheets, s => s !== record.ref) } else
            if (record.ref && typeof record.ref.remove === "function") { record.ref.remove() } store.byId.delete(id); store.byCss.delete(record.cssText);
        }
        query({ id, type, media, target } = {}) {
          const results = [], searchMp = target ? this._resolveMountPoint(target) : null; for (const mpRef of this.knownMountPoints) {
            const mp = mpRef.deref(); if (!mp) { this.knownMountPoints.delete(mpRef); continue } if (searchMp && mp !== searchMp) { continue }
            const store = this.targetStyles.get(mp); if (!store) { continue } for (const record of store.byId.values()) {
              if (id !== void 0 && record.id !== id) { continue } if (type !== void 0 && record.type !== type) { continue }
              if (media !== void 0 && record.media !== media) { continue } if (!this.constructor.isMounted(record, mp)) { continue }
              Array_push(results, { id: record.id, type: record.type, media: record.media, cssText: record.cssText, ref: record.ref, mountPoint: mp });
            }
          } return results;
        }
        hasType(type, target) { return this.query({ type, target }).length > 0 }
        getIdsByType(type, target) { return Array_map(this.query({ type, target }), r => r.id) }
        removeByType(type, target) { const records = this.query({ type, target }); Array_forEach(records, r => { this.remove(r.id, r.mountPoint) }) }
      }

      class SmartStyleManager extends StyleManager {
        constructor() { super(); this.observers = new WeakMap(); this.proxyCache = new WeakMap(); this.__changeCount = 0 }
        set __hasChanges(value) { if (value) { this.__changeCount++ } else { this.__changeCount = Math.max(0, this.__changeCount - 1) } }
        get __hasChanges() { return this.__changeCount > 0 }
        insert(id, cssText, options = {}) {
          this.__hasChanges = true; try {
            super.insert(id, cssText, options); const mountPoint = this._resolveMountPoint(options.target); this._setupProtect(mountPoint);
          } catch (e) { error(i18n.t("StyleInsertErr"), id, e.message) } finally { this.__hasChanges = false }
        }
        remove(id, target = document) {
          this.__hasChanges = true; try {
            super.remove(id, target); const mountPoint = this._resolveMountPoint(target), store = this.targetStyles.get(mountPoint);
            if (!store || store.byId.size === 0) { this._stopMonitoring(mountPoint) }
          } catch (e) { error(i18n.t("StyleRemoveErr"), id, e.message) } finally { this.__hasChanges = false }
        }
        _setupProtect(mountPoint) {
          const store = this.targetStyles.get(mountPoint); if (!store) { return } let hasStyleTag = false, hasAdopted = false;
          for (const record of store.byId.values()) { if (record.isAdopted) { hasAdopted = true } else { hasStyleTag = true } }
          if (hasStyleTag && !this.observers.has(mountPoint)) {
            const observer = new MutationObserver(mutations => {
              if (this.__hasChanges) { return } let needRestore = false; for (let i = 0, l = mutations.length; i < l; ++i) {
                const mu = mutations[i]; if (mu.type === "childList") {
                  const removed = Array_from(mu.removedNodes); for (const record of store.byId.values()) { if (!record.isAdopted && Array_includes(removed, record.ref)) { needRestore = true } }
                } else if (mu.target.nodeName === "STYLE") {
                  for (const record of store.byId.values()) { if (!record.isAdopted && record.ref === mu.target) { if (mu.target.textContent !== record.cssText) { needRestore = true } } }
                } if (needRestore) { break }
              } if (needRestore) { this._restoreStyles(mountPoint, store) }
            }); observer.observe(mountPoint, { childList: true, subtree: true, characterData: true, attributes: true }); this.observers.set(mountPoint, observer);
          }
          if (hasAdopted && ("adoptedStyleSheets" in mountPoint) && !mountPoint._isAdoptedProtected) {
            const _nativeProto = mountPoint.nodeType === 9 ? $.Document.prototype : $.ShadowRoot.prototype, _nativeDesc = Reflect_getOwnDesc(_nativeProto, "adoptedStyleSheets");
            if (_nativeDesc && _nativeDesc.configurable) {
              const self = this; Reflect_defineProperty(mountPoint, "adoptedStyleSheets", {
                configurable: true, enumerable: true, get() {
                  const nativeArr = Function_call(_nativeDesc.get, this); if (self.__hasChanges || !nativeArr) { return nativeArr }
                  if (self.proxyCache.has(this)) { const cacheData = self.proxyCache.get(this); if (cacheData.target === nativeArr) { return cacheData.proxy } }
                  const proxyHandler = {
                    get(target, prop, receiver) {
                      const value = Reflect_get(target, prop, receiver); if (typeof value === "function" && !self.__hasChanges) {
                        const mutateMethods = ["push", "pop", "shift", "unshift", "splice", "reverse", "sort"]; if (Array_includes(mutateMethods, prop)) {
                          return function (...args) {
                            self.__hasChanges = true; try {
                              const result = Function_apply(value, target, args); try { self._enforceAdopted(mountPoint, _nativeDesc) } catch (e) { warn(e.message) } return result;
                            } catch { void 0 } finally { self.__hasChanges = false }
                          };
                        }
                      } return typeof value === "function" ? value.bind(target) : value;
                    }, set(target, prop, value, receiver) {
                      const result = Reflect_set(target, prop, value, receiver); if (!self.__hasChanges && prop !== "length") {
                        self.__hasChanges = true; self._enforceAdopted(mountPoint, _nativeDesc); self.__hasChanges = false;
                      } return result;
                    }
                  }, proxyArr = new Proxy(nativeArr, proxyHandler); self.proxyCache.set(this, { target: nativeArr, proxy: proxyArr }); return proxyArr;
                }, set(newSheets) {
                  if (self.__hasChanges) { Function_call(_nativeDesc.set, this, newSheets); return } const store = self.targetStyles.get(this),
                    incoming = Array_from(newSheets || []), ourSheets = store ? Array_map(Array_filter(Array_from(store.byId.values()), r => r.isAdopted), r => r.ref) : [];
                  Array_forEach(ourSheets, sheet => { if (!Array_includes(incoming, sheet)) { Array_push(incoming, sheet) } }); Function_call(_nativeDesc.set, this, incoming); self.proxyCache.delete(this);
                }
              }); mountPoint._isAdoptedProtected = true;
            }
          }
        }
        _enforceAdopted(mountPoint, nativeDescriptor) {
          const store = this.targetStyles.get(mountPoint); if (!store) { return } const ourSheets = Array_map(Array_filter(Array_from(store.byId.values()), r => r.isAdopted), r => r.ref);
          if (ourSheets.length === 0) { return } const currentSheets = Function_call(nativeDescriptor.get, mountPoint), missing = Array_filter(ourSheets, sheet => !Array_includes(currentSheets, sheet));
          if (missing.length > 0) { Function_call(nativeDescriptor.set, mountPoint, [...currentSheets, ...missing]) }
        }
        _restoreStyles(mountPoint, store) {
          this.__hasChanges = true; try {
            for (const record of store.byId.values()) {
              if (record.isAdopted) { if (!Array_includes(mountPoint.adoptedStyleSheets, record.ref)) { Array_push(mountPoint.adoptedStyleSheets, record.ref) } } else {
                if (!mountPoint.contains(record.ref)) { appendNode(mountPoint, record.ref) } if (record.ref.textContent !== record.cssText) { record.ref.textContent = record.cssText }
                if (record.ref.media !== record.media) { record.ref.media = record.media }
              }
            }
          } catch (e) { error(i18n.t("StyleRestoreErr"), e.message) } finally { this.__hasChanges = false }
        }
        _stopMonitoring(mountPoint) { if (this.observers.has(mountPoint)) { this.observers.get(mountPoint).disconnect(); this.observers.delete(mountPoint) } }
      }

      const ThemeDetector = (() => {
        const nameRegex = /(?:data-theme|-mode|-color|-scheme)/i, darkRegex = /(?:dark|night|black)/i, lightRegex = /(?:light|day|white)/i, noEqualRegex = /(?:light dark|auto|default)/i,
          noiseNodes = new Set(["TEXTAREA", "INPUT", "IMG", "SVG", "PRE", "CODE", "VIDEO", "CANVAS", "A", "BUTTON"]), checkByDOM = (nameRegex, valueRegex, noEqualRegex) => {
            const targets = [document.documentElement, document.body]; for (let i = 0; i < 2; ++i) {
              const el = targets[i]; if (!el) { continue } const className = typeof el.className === "string" ? el.className : (el.className.baseVal || "");
              if (className && valueRegex.test(className) && !noEqualRegex.test(className)) { return true } const attrs = el.attributes, attrsLen = attrs.length;
              for (let j = 0; j < attrsLen; ++j) { const attr = attrs[j]; if (nameRegex.test(attr.name) && valueRegex.test(attr.value) && !noEqualRegex.test(attr.value)) { return true } }
            } return false;
          }; return class {
            constructor(options = {}) {
              this.onThemeChange = options.onThemeChange || (() => { }); this.brightnessThreshold = 128; this.currentTheme = "light"; this.cacheKey = "__Theme#DETECT__"; this._timeoutId = null;
              this._observer = null; this.useCache = options.useCache !== false; this._mediaQuery = $.matchMedia ? $.matchMedia("(prefers-color-scheme: dark)") : null;
              this._onDOMLoaded = this._onDOMLoaded.bind(this); this._onWindowLoad = this._onWindowLoad.bind(this); this._handleSystemChange = this._handleSystemChange.bind(this);
              this._handleMutaions = this._handleMutaions.bind(this); this._mutationCallback = () => { this.updateTheme(document.readyState === "complete") };
            }
            init() {
              if (this.useCache) { const cached = sessionStorage.getItem(this.cacheKey); if (cached) { this.currentTheme = cached; this.onThemeChange(cached); this._bindEvents(); return cached } }
              this.currentTheme = this._isDarkBySystem() ? "dark" : "light"; this.onThemeChange(this.currentTheme); this._bindEvents(); return this.currentTheme;
            }
            _bindEvents() {
              if (document.readyState === "loading") { addListener(document, "DOMContentLoaded", this._onDOMLoaded) } else { this._onDOMLoaded() }
              addListener($, "load", this._onWindowLoad); if (this._mediaQuery) { addListener(this._mediaQuery, "change", this._handleSystemChange) }
            }
            _setCache(theme) { if (this.useCache) { sessionStorage.setItem(this.cacheKey, theme) } }
            _handleMutaions(mutations) {
              let attrName; for (let i = 0, muLength = mutations.length; i < muLength; ++i) {
                attrName = mutations[i].attributeName; if (attrName !== "class" && !nameRegex.test(attrName)) { continue }
                if (this._timeoutId) { clearTimeout(this._timeoutId) } this._timeoutId = setTimeout(this._mutationCallback, 200); break;
              }
            }
            _onDOMLoaded() {
              removeListener(document, "DOMContentLoaded", this._onDOMLoaded); this.updateTheme(false); if (this._observer) { return } this._observer = new MutationObserver(this._handleMutaions);
              this._observer.observe(document.documentElement, { attributes: true }); this._observer.observe(document.body, { attributes: true });
            }
            _onWindowLoad() { removeListener($, "load", this._onWindowLoad); this.updateTheme(true) }
            _handleSystemChange() { this.updateTheme(true) }
            updateTheme(allowComputedStyle = false) {
              if (!document.documentElement) { return } let detectedTheme = null;
              if (checkByDOM(nameRegex, darkRegex, noEqualRegex)) { detectedTheme = "dark" } else if (checkByDOM(nameRegex, lightRegex, noEqualRegex)) { detectedTheme = "light" } else
                if (allowComputedStyle) { detectedTheme = this._getThemeByBackground() } if (detectedTheme === null) { detectedTheme = this._isDarkBySystem() ? "dark" : "light" }
              if (detectedTheme !== this.currentTheme || allowComputedStyle) { this.currentTheme = detectedTheme; this.onThemeChange(this.currentTheme); this._setCache(detectedTheme) }
            }
            _isDarkBySystem() { return this._mediaQuery && this._mediaQuery.matches }
            _isElementDark(el) {
              const style = $.getComputedStyle(el), bg = style.backgroundColor;
              if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0" || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") { return null }
              if (!bg.startsWith("rgb")) { return null } const parts = bg.substring(bg.indexOf("(") + 1, bg.indexOf(")")).split(","); if (parts.length >= 4 && parseFloat(parts[3]) === 0) { return null }
              const r = parseInt(parts[0], 10), g = parseInt(parts[1], 10), b = parseInt(parts[2], 10); return ((r * 299 + g * 587 + b * 114) / 1e3) < this.brightnessThreshold;
            }
            _getThemeByBackground() {
              const seed = randomInt(20, 200), x = ($.innerWidth / 2) + seed, y = ($.innerHeight / 2) + seed;
              let el = document.elementFromPoint(x, y); if (!el) { return null } const root = document.documentElement; while (el && el !== root) {
                if (noiseNodes.has(el.nodeName)) { el = el.parentElement; continue } const isDark = this._isElementDark(el);
                if (isDark !== null) { return isDark ? "dark" : "light" } el = el.parentElement;
              } if (document.body) { const bodyDark = this._isElementDark(document.body); if (bodyDark !== null) { return bodyDark ? "dark" : "light" } }
              const htmlDark = this._isElementDark(root); if (htmlDark !== null) { return htmlDark ? "dark" : "light" } return null;
            }
          };
      })();

      class FrameSyncManager {
        constructor(styleManager, ultimateBold, compareVersion) {
          this.styleManager = styleManager; this.ultimateBold = ultimateBold; this.compareVersion = compareVersion; this.top = $.top; this.TOKEN = "74f7322595760896a5e4b15d5c62cecd54941d4e";
          this.sources = new Set(); this._privateChannel = null; this._onTopMessage = this._onTopMessage.bind(this); this._onKeydown = this._onKeydown.bind(this); this._onPageHide = this._onPageHide.bind(this);
        }
        start() { if (CUR_WINDOW_TOP) { this.initTopWindow() } else { this.initIframe() } }
        initTopWindow() { addListener(this.top, "message", this._onTopMessage, true) }
        _onTopMessage(event) {
          const ports = event.ports; if (!ports || ports.length === 0) { return }
          const payload = event.data?.fontRenderX; if (!payload || payload.command !== "request" || payload.token !== this.TOKEN) { return }
          const portFromIframe = ports[0]; this.sources.add(portFromIframe); portFromIframe.onmessage = e => {
            const msg = e.data?.fontRenderX; if (!msg) { return } const cmd = msg.command; if (cmd === "keydown") {
              const ed = msg.eventData; if (ed) { const broadEvent = new KeyboardEvent("keydown", { ...ed, bubbles: true, cancelable: true }); dispatchEvent(document, broadEvent) } return;
            } if (cmd === "disconnect") { portFromIframe.onmessage = null; this.sources.delete(portFromIframe); try { portFromIframe.close() } catch { void 0 } }
          }; portFromIframe.postMessage({ fontRenderX: { command: "send", data: this.getTopWindowStyle() } });
        }
        initIframe() {
          const channel = new MessageChannel(); this._privateChannel = channel.port1; this._privateChannel.onmessage = event => {
            const payload = event.data?.fontRenderX; if (!payload || payload.command !== "send") { return } const data = payload.data; if (!data) { return }
            const sm = this.styleManager; if (sm && data.id) { sm.insert(data.id, convertCSS(document, data.cssText, this.compareVersion), { type: MAIN_STYLE_TYPE }) }
            const ub = this.ultimateBold; if (ub && data.temporary) { const cA = data.cssArray; if (cA) { !Function_apply(ub.temporaryChangeStatus, ub, cA) && ub.scanAll(true, cA[0]) } }
          }; addListener(document, "keydown", this._onKeydown); addListener($, "pagehide", this._onPageHide);
          const port2 = channel.port2, postRequestMessage = () => { this.top.postMessage({ fontRenderX: { command: "request", token: this.TOKEN } }, "*", [port2]) };
          if (document.readyState === "loading") { addListener($, "DOMContentLoaded", postRequestMessage, { once: true }) } else { postRequestMessage() }
        }
        _onKeydown(e) {
          if (!this._privateChannel) { return } const eventData = { key: e.key, code: e.code, keyCode: e.keyCode, ctrlKey: e.ctrlKey, altKey: e.altKey, shiftKey: e.shiftKey, metaKey: e.metaKey };
          this._privateChannel.postMessage({ fontRenderX: { command: "keydown", eventData } });
        }
        _onPageHide(e) {
          if (e.persisted || !this._privateChannel) { return } try { this._privateChannel.postMessage({ fontRenderX: { command: "disconnect" } }) } catch { void 0 }
          this._privateChannel.onmessage = null; this._privateChannel.close(); this._privateChannel = null;
        }
        getTopWindowStyle() { const sA = this.styleManager.query({ id: MAIN_STYLE_ID }), cssText = sA[0]?.cssText ?? ""; return { id: MAIN_STYLE_ID, cssText } }
        broadcastStyleToIframes(customData) {
          if (!CUR_WINDOW_TOP || this.sources.size === 0) { return } const payload = { fontRenderX: { command: "send", data: customData } };
          for (const port of this.sources) { try { port.postMessage(payload) } catch { port.onmessage = null; this.sources.delete(port); port.close() } }
        }
      }

      const SecureCipherSuite = (function () {
        const HEX_ENCODE_TABLE = new Array(256), HEX_DECODE_TABLE = new Uint8Array(128); for (let i = 0; i < 256; ++i) { HEX_ENCODE_TABLE[i] = (i < 16 ? "0" : "") + i.toString(16) }
        for (let i = 0; i < 10; ++i) { HEX_DECODE_TABLE[i + 48] = i } for (let i = 0; i < 6; ++i) { HEX_DECODE_TABLE[i + 97] = 10 + i; HEX_DECODE_TABLE[i + 65] = 10 + i }
        const LATIN1_DECODER = typeof TextDecoder !== "undefined" ? new TextDecoder("iso-8859-1") : null, bytesToString = bytes => {
          if (LATIN1_DECODER) { return LATIN1_DECODER.decode(bytes) } let str = ""; const CHUNK = 8192, byteLength = bytes.length;
          for (let i = 0; i < byteLength; i += CHUNK) { str += Function_apply(String.fromCharCode, null, bytes.subarray(i, i + CHUNK)) } return str;
        }, reduceSeed = seedStr => { while (seedStr.length > 10) { seedStr = (parseInt(seedStr.slice(0, 10), 10) + parseInt(seedStr.slice(10), 10)).toString() } return parseInt(seedStr, 10) },
          createInspectResult = (resultVal, keysObj) => { return { keycode: () => resultVal, search: key => (key !== null ? decrypt(key).search(GMscriptAuthor) !== -1 : keysObj) } };
        return class {
          constructor(secretKey) {
            let baseSeed = ""; const len = secretKey.length; for (let i = 0; i < len; i++) { baseSeed += secretKey.charCodeAt(i) } this.baseSeed = baseSeed; const baseLen = baseSeed.length;
            this.step = (baseLen / 5) | 0; this.lcgIncrement = (len + 1) >>> 1; this.lcgModulus = 2147483647; const step = this.step, getChar = idx => baseSeed[idx < baseLen ? idx : baseLen - 1] || "0";
            this.lcgMultiplier = parseInt(getChar(step) + getChar(step * 2) + getChar(step * 3) + getChar(step * 4) + getChar(step * 5), 10);
          }
          encrypt(plainText) {
            if (this.lcgMultiplier < 2 || !plainText) { return "" } const randomNonce = randomInt(1e7, 99999999); let seedNum = reduceSeed(this.baseSeed + randomNonce);
            const modulus = this.lcgModulus, multiplier = this.lcgMultiplier, increment = this.lcgIncrement, invModulus = 255 / modulus; seedNum = (multiplier * seedNum + increment) % modulus;
            const textLength = plainText.length, cipherTextArray = new Array(textLength); for (let i = 0; i < textLength; ++i) {
              const randomByte = (seedNum * invModulus) | 0, xoredByte = plainText.charCodeAt(i) ^ randomByte;
              cipherTextArray[i] = HEX_ENCODE_TABLE[xoredByte]; seedNum = (multiplier * seedNum + increment) % modulus;
            } const nonceHex = randomNonce.toString(16).padStart(8, "0"); return Array_join(cipherTextArray, "") + nonceHex;
          }
          decrypt(cipherText) {
            if (this.lcgMultiplier < 2 || !cipherText) { return "" } const cipherLen = cipherText.length, randomNonce = parseInt(cipherText.slice(cipherLen - 8), 16), textLength = cipherLen - 8;
            let seedNum = reduceSeed(this.baseSeed + randomNonce); const modulus = this.lcgModulus, multiplier = this.lcgMultiplier, increment = this.lcgIncrement, invModulus = 255 / modulus;
            seedNum = (multiplier * seedNum + increment) % modulus; const bytesLen = textLength >> 1, bytes = new Uint8Array(bytesLen); for (let i = 0, j = 0; i < textLength; i += 2, ++j) {
              const randomByte = (seedNum * invModulus) | 0, encryptedByte = (HEX_DECODE_TABLE[cipherText.charCodeAt(i)] << 4) | HEX_DECODE_TABLE[cipherText.charCodeAt(i + 1)];
              bytes[j] = encryptedByte ^ randomByte; seedNum = (multiplier * seedNum + increment) % modulus;
            } return decodeURIComponent(bytesToString(bytes));
          }
          async inspect(source, odata, config) {
            try {
              let privateKey = true; const configure = await config.get(CONFIGURE), { rebuild, curVersion } = configure, result = this.decrypt(encrypt(decodeURI(source), false)),
                localKey = Boolean(odata && odata.date === this.decrypt(odata.flag)); if (rebuild !== void 0) { privateKey = odata.date === this.decrypt(rebuild) } else {
                  if (curVersion === GMscritpVersion) { info(i18n.t("RestoreDone")) } await config.set(CONFIGURE, { ...configure, rebuild: this.encrypt(odata.date) });
                } const defaultKey = decrypt(result).search(GMscriptAuthor) !== -1, keys = { defaultKey, localKey, privateKey, __proto__: null }; return createInspectResult(result, keys);
            } catch (e) { error(e.message); return { keycode: () => null, search: () => null } }
          }
        };
      })();

      class DataManager {
        constructor(schema) { this.schema = schema; this.cache = new Map(); this.writeLock = Promise.resolve(); this.pendingReset = Object_create(null); this.isSupportListener = typeof GMchangeListener === "function" }
        static isExpired(val) { return val && typeof val === "object" && val.__isExpData && Date.now() > val.expired }
        static unwrap(val) { return val && typeof val === "object" && val.__isExpData ? val.data : val }
        static isInvalid(val) { return val === void 0 || val === null || val === "dW5kZWZpbmVk" || val === "bnVsbA==" }
        _getDefault(key) { const val = this.schema[key]; return val && typeof val === "object" ? safeDeepClone(val) : val }
        async init() {
          const keys = Object_keys(this.schema), dataMap = Array_map(keys, async key => {
            const defaultValue = this._getDefault(key); let value; try {
              value = await GMgetValue(key); if (DataManager.isInvalid(value)) { return await this._reset(key, defaultValue) } const parsed = JSON_parse(decrypt(value));
              if (DataManager.isExpired(parsed)) { return await this._reset(key, defaultValue) } if (this.isSupportListener) { this.cache.set(key, parsed) } return parsed;
            } catch { return await this._reset(key, defaultValue) }
          }); await Promise.all(dataMap); if (this.isSupportListener) { this._setupListener() }
        }
        _setupListener() {
          for (const key of Object_keys(this.schema)) {
            const value = this._getDefault(key), valueChangeHandler = (k, _, v, remote) => {
              if (remote) { try { const val = v === void 0 || v === null ? value : JSON_parse(decrypt(v)); this.cache.set(k, val) } catch { this.cache.set(k, value); error(i18n.t("IllegalData")) } }
            }; GMchangeListener(key, valueChangeHandler);
          }
        }
        async exportData() {
          const data = Object_create(null), dataMap = Array_map(Object_keys(this.schema), async key => {
            let value = await GMgetValue(key); if (DataManager.isInvalid(value)) { await this._reset(key, this._getDefault(key)); value = await GMgetValue(key) } data[key] = value;
          }); await Promise.all(dataMap); return data;
        }
        _enqueueWrite(taskFn, key) {
          const nextTask = this.writeLock.then(async () => await taskFn()).catch(e => { error(key, e.message); throw e }); this.writeLock = nextTask.catch(() => { }); return nextTask;
        }
        async set(key, value, { isStringify = true, expired = null } = {}) {
          return this._enqueueWrite(async () => {
            let dataToSave = value; if (typeof expired === "number") { dataToSave = { __isExpData: true, data: value, expired: Date.now() + expired } }
            if (this.isSupportListener) { this.cache.set(key, dataToSave) } await GMsetValue(key, isStringify ? encrypt(JSON_stringify(dataToSave)) : encrypt(dataToSave));
          }, key);
        }
        async get(key) {
          const defaultValue = this._getDefault(key); if (this.isSupportListener) {
            const cachedVal = this.cache.has(key) ? this.cache.get(key) : defaultValue;
            if (cachedVal !== defaultValue && DataManager.isExpired(cachedVal)) { return await this._debounceReset(key, defaultValue) } return DataManager.unwrap(cachedVal);
          } const rawVal = await GMgetValue(key); if (DataManager.isInvalid(rawVal)) { return await this._debounceReset(key, defaultValue) } let val;
          try { val = JSON_parse(decrypt(rawVal)); if (DataManager.isExpired(val)) { throw "Expired" } } catch { return await this._debounceReset(key, defaultValue) } return DataManager.unwrap(val);
        }
        _debounceReset(key, value) { if (!this.pendingReset[key]) { this.pendingReset[key] = this._reset(key, value).finally(() => { delete this.pendingReset[key] }) } return this.pendingReset[key] }
        async _reset(key, defaultValue) { await this.set(key, defaultValue); return DataManager.unwrap(defaultValue) }
        async delete(key) { if (this.isSupportListener) { this.cache.delete(key) } return this._enqueueWrite(async () => { await GMdeleteValue(key) }, key) }
      }

      const ViewportUnitScaler = (function () {
        const VPU_STATUS = "data-viewport-fixed", ORIGIN_HREF = "data-original-href", transformCore = (cssText, zoom, arrayPush = (arr, item) => arr.push(item)) => {
          const quickCheckRegex = /(?:\d+(?:\.\d+)?|\.\d+)[sld]?v(?:[hibw]|m(?:ax|in))\b/i; if (!quickCheckRegex.test(cssText)) { return cssText }
          const protectRegex = /\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/|url\(\s*(?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^)]*)\s*\)|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'/gi,
            unitRegex = /(^|[\s:,(])(-?(?:\d+(?:\.\d+)?|\.\d+))([sld]?v(?:[hibw]|m(?:ax|in)))\b/gi, placeholders = [],
            safeText = cssText.replace(protectRegex, match => { arrayPush(placeholders, match); return `___VP_PH_${placeholders.length - 1}___` }),
            parsedText = safeText.replace(unitRegex, (_, prefix, num, unit) => { const newVal = parseFloat(num) / zoom; return `${prefix}${Math.round(newVal * 1e4) / 1e4}${unit}` });
          if (placeholders.length === 0) { return parsedText } const segments = parsedText.split(/___VP_PH_(\d+)___/g);
          for (let i = 1; i < segments.length; i += 2) { const index = parseInt(segments[i], 10); segments[i] = placeholders[index] ?? "" } return segments.join("");
        }, hashString = str => {
          let h = 5381; if (!str) { return h.toString(36) } for (let i = 0, len = str.length; i < len; ++i) { h = ((h << 5) + h) + str.charCodeAt(i); h |= 0 } return (h >>> 0).toString(36);
        }, WorkerCore = () => {
          const transform = __TRANSFORM_CORE_PLACEHOLDER__; self.onmessage = function (event) {
            const { id, cssText, zoom } = event.data; if (id === void 0 || typeof cssText !== "string" || typeof zoom !== "number") { return }
            try { const result = transform(cssText, zoom); self.postMessage({ id, success: true, result, cssText, zoom }) } catch { self.postMessage({ id, success: false }) }
          };
        }; return class {
          constructor(zoomRatio) {
            this.zoom = zoomRatio; this.fetchingMap = new Map(); this.workerCallbacks = new Map(); this.urlCache = new LRUCache(); this.cssCache = new LRUCache(50); this.workerTaskId = 0;
            this.poolSize = Math.min(navigator.hardwareConcurrency || 4, 8); this.workers = []; this.taskQueue = []; this.isWorkerSupported = true; this.pendingNodes = new Set();
            this.isSchedulePending = false; this.debounceTimer = null; this.styleCSP = { isBlocked: false, isDetected: false }; this.initCheckStyleCSP();
          }
          initCheckStyleCSP() {
            const handleViolation = e => {
              if (!e.violatedDirective.startsWith("style-src") && !e.violatedDirective.startsWith("default-src")) { return } this.styleCSP.isBlocked = true; this.styleCSP.isDetected = true; cleanup();
            }; addListener(document, "securitypolicyviolation", handleViolation); const style = cE("style", { textContent: ".csp-global-check-hook { clear: both; }" });
            function cleanup() { removeListener(document, "securitypolicyviolation", handleViolation); style.remove() } appendNode(document.documentElement, style);
            setTimeout(() => { cleanup(); this.styleCSP.isDetected = true; dispatchEvent(document, new CustomEvent("csp-detection-ready", { detail: this.styleCSP })) }, 20);
          }
          killWorker(worker) {
            clearTimeout(worker.__execTimer); clearTimeout(worker.__idleTimer);
            for (const [id, taskInfo] of this.workerCallbacks.entries()) { if (taskInfo.worker === worker) { taskInfo.resolve(null); this.workerCallbacks.delete(id) } }
            worker.terminate(); this.workers = this.workers.filter(w => w !== worker); this.processTaskQueue();
          }
          processTaskQueue() {
            while (this.taskQueue.length > 0) {
              let availableWorker = Array_find(this.workers, w => !w.__vp_busy); if (!availableWorker && this.workers.length < this.poolSize && this.isWorkerSupported) {
                const newWorker = this.initWorker(); if (newWorker) { Array_push(this.workers, newWorker); availableWorker = newWorker }
              } if (availableWorker) {
                const task = this.taskQueue.shift(), cb = this.workerCallbacks.get(task.id); if (cb) {
                  cb.worker = availableWorker; availableWorker.__vp_busy = true; clearTimeout(availableWorker.__idleTimer);
                  availableWorker.__execTimer = setTimeout(() => this.killWorker(availableWorker), 3e4); availableWorker.postMessage(task);
                }
              } else if (!this.isWorkerSupported) {
                const task = this.taskQueue.shift(), cb = this.workerCallbacks.get(task.id); if (!cb) { continue }
                try { const result = transformCore(task.cssText, task.zoom, Array_push); this.cssCache.set(`${task.zoom}::${hashString(task.cssText)}`, result); cb.resolve(result) } catch { cb.resolve(null) }
                this.workerCallbacks.delete(task.id);
              } else { break }
            }
          }
          initWorker() {
            if (!this.isWorkerSupported) { return null } try {
              let workerCode = WorkerCore.toString(); workerCode = workerCode.replace("__TRANSFORM_CORE_PLACEHOLDER__", transformCore.toString());
              const blob = new Blob([`(${workerCode})()`], { type: "application/javascript" }), workerUrl = URL.createObjectURL(blob), worker = new Worker(tTP.createScriptURL(workerUrl));
              worker.__idleTimer = null; worker.__execTimer = null; worker.__vp_busy = false; worker.onmessage = event => {
                clearTimeout(worker.__execTimer); const { id, success, result, cssText, zoom } = event.data, hash = `${zoom}::${hashString(cssText)}`, callback = this.workerCallbacks.get(id);
                if (callback) { if (success) { callback.resolve(result); this.cssCache.set(hash, result) } else { callback.resolve(null) } this.workerCallbacks.delete(id) }
                worker.__vp_busy = false; worker.__idleTimer = setTimeout(() => this.killWorker(worker), 3e4); this.processTaskQueue();
              }; worker.onerror = () => { warn(i18n.t("Worker")); this.killWorker(worker) }; URL.revokeObjectURL(workerUrl); return worker;
            } catch { this.isWorkerSupported = false; return null }
          }
          dispatchTransform(cssText) {
            const key = this.zoom + "::" + hashString(cssText); if (this.cssCache.has(key)) { return Promise.resolve(this.cssCache.get(key)) }
            if (!this.isWorkerSupported || cssText.length <= 5e4) { const rst = transformCore(cssText, this.zoom, Array_push); this.cssCache.set(key, rst); return Promise.resolve(rst) }
            return new Promise(resolve => {
              const id = this.workerTaskId++, task = { id, cssText, zoom: this.zoom }; this.workerCallbacks.set(id, { resolve, worker: null });
              Array_push(this.taskQueue, task); this.processTaskQueue();
            });
          }
          start() {
            const initScan = () => { Array_forEach(qA(`link[rel="stylesheet"]:not([${VPU_STATUS}]),style:not([${VPU_STATUS}])`), el => this.processNode(el)) };
            if (this.observer) { return } if (document.readyState === "loading") { addListener(document, "DOMContentLoaded", initScan, { once: true }) } else { initScan() }
            this.observer = new MutationObserver(mutations => {
              let hasNewNodes = false; for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                  if (node.nodeType !== Node.ELEMENT_NODE) { continue }
                  if (node.tagName === "STYLE" || (node.tagName === "LINK" && node.rel === "stylesheet")) { this.pendingNodes.add(node); hasNewNodes = true } else
                    if (node.childElementCount === 0) { continue } const elements = qA(`link[rel="stylesheet"]:not([${VPU_STATUS}]),style:not([${VPU_STATUS}])`, node);
                  if (elements.length > 0) { Array_forEach(elements, el => { this.pendingNodes.add(el) }); hasNewNodes = true }
                }
              } if (!hasNewNodes || this.isSchedulePending) { return } const schedule = requestIdleCallback || setTimeout;
              this.isSchedulePending = true; this.debounceTimer = schedule(() => {
                const nodesToProcess = Array_from(this.pendingNodes); this.pendingNodes.clear(); this.isSchedulePending = false;
                for (const node of nodesToProcess) { if (node.isConnected && !hasAttribute(node, VPU_STATUS)) { this.processNode(node) } }
              });
            }); this.observer.observe(document.documentElement, { childList: true, subtree: true });
          }
          stop() {
            if (this.observer) { this.observer.disconnect(); this.observer = null } if (this.pendingNodes) { this.pendingNodes.clear() }
            if (this.debounceTimer) { const cancelSchedule = cancelIdleCallback || clearTimeout; cancelSchedule(this.debounceTimer); this.debounceTimer = null } this.isSchedulePending = false;
          }
          async processNode(node) {
            if (hasAttribute(node, VPU_STATUS)) { return } setAttribute(node, VPU_STATUS, "processing"); try {
              if (node.tagName === "LINK") { await this.processLink(node) } else if (node.tagName === "STYLE") { await this.processStyle(node) }
            } catch { setAttribute(node, VPU_STATUS, "failed") }
          }
          async processLink(linkNode) {
            const href = linkNode.href || linkNode.dataset.href; if (href && !href.startsWith("about:") && !href.startsWith("data:")) {
              const cssText = await this.fetchCSS(href); if (!cssText) { setAttribute(linkNode, VPU_STATUS, "failed"); return }
              const processedCSS = await this.compileCSSText(cssText, href, true); if (processedCSS === cssText) { setAttribute(linkNode, VPU_STATUS, "ignore"); return }
              if (!linkNode.isConnected) { return } const parent = linkNode.parentNode; if (!parent) { return } const opt = { [VPU_STATUS]: "link", [ORIGIN_HREF]: href, textContent: processedCSS },
                { isDetected, isBlocked } = this.styleCSP; if (linkNode.nonce) { opt.nonce = linkNode.nonce } if (linkNode.media) { opt.media = linkNode.media }
              const newStyle = GMaddElement(parent, "style", opt) ?? qS(`style[${ORIGIN_HREF}="${href}"][${VPU_STATUS}="link"]`, parent);
              if (isDetected && !isBlocked) { parent.insertBefore(newStyle, linkNode); parent.removeChild(linkNode) } log(`${IN_FRAME} ▶ links`);
            } setAttribute(linkNode, VPU_STATUS, "ignore");
          }
          async processStyle(styleNode) {
            const rawText = styleNode.textContent.trim(); if (!rawText) { setAttribute(styleNode, VPU_STATUS, "ignore"); return } const handleCSSText = (cssText, state) => {
              setAttribute(styleNode, VPU_STATUS, cssText === rawText ? "ignore" : "style"); if (cssText === rawText) { return }
              if (styleNode.isConnected) { styleNode.textContent = cssText; log(`${IN_FRAME} ▶ styles (${state})`) }
            }; if (!rawText.includes("@import") && rawText.length <= 5e4) { handleCSSText(transformCore(rawText, this.zoom, Array_push), "sync"); return }
            const processedCSS = await this.compileCSSText(rawText, CUR_HREF, false); handleCSSText(processedCSS, "async");
          }
          async compileCSSText(cssText, baseUrl, isLink, depth = 0, visitedUrls = new Set()) {
            if (depth > 5 || !cssText) { return cssText } if (visitedUrls.has(baseUrl)) { return "" } const resolveUrls = (text, urlBase) => {
              const urlRegex = /url\(\s*(?:"([^"]+)"|'([^']+)'|([^"'\s)]+))\s*\)/gi, resolveUrlsFn = (match, p1, p2, p3) => {
                const path = (p1 || p2 || p3 || "").trim(); if (!path || path.startsWith("data:") || path.startsWith("about:") || path.startsWith("#")) { return match }
                try { return `url("${new URL(path, urlBase).href}")` } catch { return match }
              }; return text.replace(urlRegex, resolveUrlsFn);
            }; visitedUrls.add(baseUrl); let targetText = cssText; if (targetText.includes("@import")) {
              const importRegex = /@import\s+(?:url\(\s*([^)]+)\s*\)|"([^"]+)"|'([^']+)')[^;]*;/gi, importsToProcess = []; let match; while ((match = importRegex.exec(targetText)) !== null) {
                const url = (match[1] || match[2] || match[3] || "").trim().replace(/^['"]|['"]$/g, ""); Array_push(importsToProcess, { fullMatch: match[0], url });
              } const importResults = await Promise.all(Array_map(importsToProcess, async imp => {
                let importUrl; try { importUrl = new URL(imp.url, baseUrl).href } catch { importUrl = imp.url } const importedCss = await this.fetchCSS(importUrl),
                  processedImport = await this.compileCSSText(importedCss, importUrl, true, depth + 1, visitedUrls); return { matchStr: imp.fullMatch, processedStr: processedImport };
              })); for (const res of importResults) { targetText = targetText.replace(res.matchStr, res.processedStr) }
            } if (depth !== 0) { return resolveUrls(targetText, baseUrl) }
            const quickCheckRegex = /(?:\d*\.\d+|\d+)[sld]?(?:vw|vh|vmin|vmax|vi|vb)\b/i; if (!quickCheckRegex.test(targetText)) { return cssText }
            const transformedCSS = (await this.dispatchTransform(targetText)) || targetText; if (isLink) { return resolveUrls(transformedCSS, baseUrl) } return transformedCSS;
          }
          async fetchCSS(url, retries = 1) {
            if (this.urlCache.has(url)) { return this.urlCache.get(url) } if (this.fetchingMap.has(url)) { return this.fetchingMap.get(url) }
            const fetchPromise = (async () => {
              for (let i = 0; i <= retries; ++i) {
                const controller = new AbortController(), timeoutId = setTimeout(() => controller.abort(), 15e3); try {
                  const response = await fetch(url, { signal: controller.signal }); clearTimeout(timeoutId);
                  if (!response.ok) { throw new Error(`HTTP ${response.status}`) } const text = await response.text(); this.urlCache.set(url, text); return text;
                } catch { clearTimeout(timeoutId); if (i < retries) { await sleep(500) } else { return "" } }
              }
            })(); this.fetchingMap.set(url, fetchPromise); fetchPromise.finally(() => { this.fetchingMap.delete(url) }); return fetchPromise;
          }
        };
      })();

      class InputShield {
        constructor(container) { this.container = container; this.events = ["keydown", "keyup", "keypress", "paste", "input"]; this._shieldHandler = InputShield.stopPropagate.bind(this); this.isActive = false }
        static stopPropagate(e) { stopImmediatePropagation(e) }
        enable() { if (this.isActive || !this.container) { return } Array_forEach(this.events, eventType => { addListener(this.container, eventType, this._shieldHandler, false) }); this.isActive = true }
        disable() { if (!this.isActive || !this.container) { return } Array_forEach(this.events, eventType => { removeListener(this.container, eventType, this._shieldHandler, false) }); this.isActive = false }
        updateContainer(newContainer) { const wasActive = this.isActive; if (wasActive) { this.disable() } this.container = newContainer; if (wasActive) { this.enable() } }
      }

      const FusedColorPicker = (function () {
        const ColorConvert = {
          rgbToHsl(r, g, b) {
            r /= 255; g /= 255; b /= 255; const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2; let h, s;
            if (max === min) { h = s = 0 } else {
              const d = max - min; s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) { case r: { h = (g - b) / d + (g < b ? 6 : 0); break } case g: { h = (b - r) / d + 2; break } case b: { h = (r - g) / d + 4; break } } h /= 6;
            } return { h: h * 360, s: s * 100, l: l * 100 };
          },
          hslToRgb(h, s, l) {
            h /= 360; s /= 100; l /= 100; let r, g, b; if (s === 0) { r = g = b = l } else {
              const hue2rgb = (p, q, t) => {
                if (t < 0) { t += 1 } if (t > 1) { t -= 1 } if (t < 1 / 6) { return p + (q - p) * 6 * t } if (t < 1 / 2) { return q } if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6 } return p;
              }, q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q; r = hue2rgb(p, q, h + 1 / 3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h - 1 / 3);
            } return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
          },
          hslToHexaString(h, s, l, a) {
            const { r, g, b } = this.hslToRgb(h, s, l), toHex = val => val.toString(16).padStart(2, "0"), alphaHex = Math.round(a * 255).toString(16).padStart(2, "0"),
              hexa = `#${toHex(r)}${toHex(g)}${toHex(b)}${alphaHex}`.toUpperCase(); return hexa === "#FFFFFFFF" ? "currentcolor" : hexa;
          },
          parseAny(str) {
            str = str.trim().toLowerCase(); if (str === "currentcolor") { return { h: 0, s: 0, l: 100, a: 1 } } if (str.startsWith("#")) {
              let hex = str.slice(1); if (!/^([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i.test(hex)) { return null }
              if (hex.length === 3 || hex.length === 4) { hex = Array_join(Array_map([...hex], c => c + c), "") } if (hex.length === 6) { hex += "ff" } if (hex.length !== 8) { return null }
              const r = parseInt(hex.slice(0, 2), 16), g = parseInt(hex.slice(2, 4), 16), b = parseInt(hex.slice(4, 6), 16), a = parseInt(hex.slice(6, 8), 16) / 255;
              if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) { return null } return { ...this.rgbToHsl(r, g, b), a };
            }
            const rgbMatch = str.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/); if (rgbMatch) {
              const r = parseInt(rgbMatch[1], 10), g = parseInt(rgbMatch[2], 10), b = parseInt(rgbMatch[3], 10), a = rgbMatch[4] !== void 0 ? parseFloat(rgbMatch[4]) : 1;
              if (r > 255 || g > 255 || b > 255 || a > 1 || a < 0) { return null } return { ...this.rgbToHsl(r, g, b), a };
            }
            const hslMatch = str.match(/^hsla?\(([\d.]+),\s*([\d.]+)%?,\s*([\d.]+)%?(?:,\s*([\d.]+))?\)$/); if (hslMatch) {
              const h = parseFloat(hslMatch[1]) % 360, s = parseFloat(hslMatch[2]), l = parseFloat(hslMatch[3]), a = hslMatch[4] !== void 0 ? parseFloat(hslMatch[4]) : 1;
              if (s > 100 || l > 100 || a > 1 || a < 0) { return null } return { h, s, l, a };
            } return null;
          }
        };
        return class {
          constructor(defaultValue, styleManager, onChange) {
            this.defaultValue = defaultValue; this.styleManager = styleManager; this.onChange = onChange || null; this.state = ColorConvert.parseAny(this.defaultValue);
            this.isDestroyed = false; this.container = null; this.eventRoot = null; this.elements = {}; this.listeners = []; this.handleGlobalClick = this._onGlobalClick.bind(this);
          }
          async mount(parentElement) {
            const i18n = new I18n({ "en-US": { ShadowColor: "ShadowColor", H: "Hue:", S: "(Sat.):", L: "(Lgt.):", A: "Alpha:" }, "zh-CN": { ShadowColor: "字体阴影颜色", H: "色相", S: "饱和度", L: "亮度", A: "透明度" }, "zh-TW": { ShadowColor: "字體陰影顏色", H: "色相", S: "飽和度", L: "亮度", A: "透明度" } }, getLanguage("zh-CN"), "en-US");
            this.container = GMaddElement(parentElement, "div", { class: "color-picker-component-wrapper" }) ?? qS("div.color-picker-component-wrapper", parentElement);
            this.container.innerHTML = tTP.createHTML(`<div class="color-fused-input-group"><label class="pd7">${i18n.t("ShadowColor")}</label><input type="text" id="panel-shadow-color" class="fused-text-input" data-index="6" placeholder="HEXA/RGBA/HSLA"></div><div class="color-popover"><div class="cp-row"><span>${i18n.t("H")}</span><input type="range" class="cp-h" min="0" max="360"><span class="cp-val-h"></span></div><div class="cp-row"><span>${i18n.t("S")}</span><input type="range" class="cp-s" min="0" max="100"><span class="cp-val-s"></span></div><div class="cp-row"><span>${i18n.t("L")}</span><input type="range" class="cp-l" min="0" max="100"><span class="cp-val-l"></span></div><div class="cp-row"><span>${i18n.t("A")}</span><div class="cp-a-bg"><input type="range" class="cp-a" min="0" max="1" step="0.01"></div><span class="cp-val-a"></span></div></div>`);
            this._initCSSVariables(); this._cacheElements(); this._bindEvents(); this._sync("init");
          }
          _initCSSVariables() {
            const cpcssText = `.color-fused-input-group{align-items:center;background:0 0;border:none;display:flex;height:35px;transition:all .3s}#picker-class-mount-point .fused-text-input{background-image:linear-gradient(90deg,var(--fr-input-color) 0,var(--fr-input-color) 32px,transparent 33px,transparent),conic-gradient(#bcbcbc 25%,#929292 0 50%,#bcbcbc 0 75%,#929292 0),conic-gradient(#bcbcbc 25%,#929292 0 50%,#bcbcbc 0 75%,#929292 0);background-origin:padding-box,padding-box,padding-box;background-position:0 0,0 0,16px 0;background-repeat:repeat-y,repeat-y,repeat-y;background-size:auto,16px 16px,16px 16px;border:2px solid #67a5df;flex:1;font-family:Anton,Impact,serif!important;font-size:18px;font-weight:400;height:35px;padding:2px 8px 2px 40px;text-align:center}.fused-text-input::placeholder{font-size:14px}.color-popover{background:#daecf5e8;border:1px solid #bbb;border-radius:6px;bottom:100%;box-shadow:0 0 6px #25675e85;display:none;flex-direction:column;gap:18px;left:0;margin:0 0 8px;padding:14px;position:absolute;right:0;top:auto;z-index:99999}.cp-row{align-items:center;display:flex;gap:10px}.cp-row span{color:#595959;font-size:11px;font-weight:700;width:35px}.cp-row span:last-child{font-family:monospaced;text-align:right;width:30px}.cp-row input[type=range]{-webkit-appearance:none;border-radius:5px;cursor:pointer;flex:1;width:100%;height:10px;margin:0;outline:0}.cp-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border:2px solid #333;border-radius:50%;height:14px;width:14px}.cp-h{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.cp-a-bg{align-items:center;background-image:linear-gradient(45deg,#ddd 25%,transparent 0),linear-gradient(-45deg,#ddd 25%,transparent 0),linear-gradient(45deg,transparent 75%,#ddd 0),linear-gradient(-45deg,transparent 75%,#ddd 0);background-size:6px 6px;border-radius:5px;display:flex;flex:1;position:relative}.cp-a{background:0 0;margin:0;width:100%}.color-picker-component-wrapper{position:relative}.color-picker-component-wrapper .cp-s{background:linear-gradient(to right,hsl(var(--cp-h,0),0%,var(--cp-l,50%)),hsl(var(--cp-h,0),100%,var(--cp-l,50%)))!important}.color-picker-component-wrapper .cp-l{background:linear-gradient(to right,#000,hsl(var(--cp-h,0),var(--cp-s,100%),50%),#fff)!important}.color-picker-component-wrapper .cp-a{background:linear-gradient(to right,transparent,hsl(var(--cp-h,0),var(--cp-s,100%),var(--cp-l,50%)))!important}.flex{display:flex}.pd7{padding:7px 12px 7px 0}`;
            this.styleManager.insert(`color-picker-styles-panel`, cpcssText, { target: this.container.getRootNode(), type: "colorpicker" });
          }
          _cacheElements() {
            const q = sel => qS(sel, this.container); this.elements = {
              input: q(".fused-text-input"), wrap: q(".color-fused-input-group"), popover: q(".color-popover"), rH: q(".cp-h"), rS: q(".cp-s"),
              rL: q(".cp-l"), rA: q(".cp-a"), vH: q(".cp-val-h"), vS: q(".cp-val-s"), vL: q(".cp-val-l"), vA: q(".cp-val-a")
            };
          }
          _trackEvent(el, type, handler) { addListener(el, type, handler); Array_push(this.listeners, { el, type, handler }) }
          _bindEvents() {
            const handleSlider = () => {
              this.state = { h: parseFloat(this.elements.rH.value), s: parseFloat(this.elements.rS.value), l: parseFloat(this.elements.rL.value), a: parseFloat(this.elements.rA.value) };
              this._sync("sliders"); if (this.onChange) { this.onChange(this.getValue()) }
            }; Array_forEach(["rH", "rS", "rL", "rA"], k => this._trackEvent(this.elements[k], "input", handleSlider));
            this._trackEvent(this.elements.input, "change", e => {
              const parsed = ColorConvert.parseAny(e.target.value);
              if (parsed) { this.state = parsed; this._sync("input-success"); if (this.onChange) { this.onChange(this.getValue()) } } else { this._sync("input-fail") }
            }); this._trackEvent(this.elements.input, "click", () => { this.elements.popover.classList.toggle("flex") });
            this.eventRoot = this.container.getRootNode(); addListener(this.eventRoot, "click", this.handleGlobalClick);
          }
          _onGlobalClick(e) {
            if (this.isDestroyed || !this.container) { return } const path = Event_composedPath(e) || []; if (!Array_includes(path, this.container)) { this.elements.popover.classList.remove("flex") }
          }
          _sync(source) {
            const el = this.elements, { h, s, l, a } = this.state; if (source !== "sliders") { el.rH.value = h; el.rS.value = s; el.rL.value = l; el.rA.value = a }
            el.vH.textContent = `${Math.round(h)}°`; el.vS.textContent = `${Math.round(s)}%`; el.vL.textContent = `${Math.round(l)}%`; el.vA.textContent = `${Math.round(a * 100)}%`;
            this.container.style.setProperty("--cp-h", h); this.container.style.setProperty("--cp-s", `${s}%`); this.container.style.setProperty("--cp-l", `${l}%`);
            const hexa = ColorConvert.hslToHexaString(h, s, l, a); el.input.value = hexa; dispatchEvent(el.input, new Event("input"));
            const { r, g, b } = ColorConvert.hslToRgb(h, s, l); el.wrap.style.setProperty("--fr-input-color", `rgba(${r}, ${g}, ${b}, ${a})`);
          }
          getValue() { return this.elements.input.value }
          setValue(colorStr) { const parsed = ColorConvert.parseAny(colorStr); if (parsed) { this.state = parsed; this._sync("api") } }
          destroy() {
            if (this.isDestroyed) { return } this.isDestroyed = true; this.styleManager.remove(`color-picker-styles-panel`);
            Array_forEach(this.listeners, ({ el, type, handler }) => { removeListener(el, type, handler) }); this.listeners = [];
            if (this.eventRoot) { removeListener(this.eventRoot, "click", this.handleGlobalClick) }
            if (this.container && this.container.parentNode) { this.container.parentNode.removeChild(this.container) }
            this.elements = null; this.container = null; this.eventRoot = null;
          }
        };
      })();

      class WindowManager {
        static register(instance) {
          if (instance.type === "dialog" || instance.type === "prompt") { this.closeByType(instance.type) } if (instance.type === "dialog" || instance.type === "panel") { this.closeByType("prompt") }
          if (instance.type === "panel") { this.closeByType("dialog"); if (Array_some(Array_from(this.instances), ins => ins.type === "panel")) { this.closeAll(); return false } }
          this.instances.add(instance); this.bringToFront(instance); return true;
        }
        static unregister(instance) { this.instances.delete(instance); if (instance.type === "dialog" || instance.type === "panel") { this.closeByType("prompt") } }
        static bringToFront(instance) { const baseZIndex = this.zIndexLayers[instance.type] || 1e4; instance.setZIndex(baseZIndex) }
        static closeByType(type) { Array_forEach(Array_from(this.instances), ins => { if (ins.type === type) { ins.close() } }) }
        static closeAll() { Array_forEach(Array_from(this.instances), ins => { ins.close() }) }
        static broadcast(senderId, eventName, data) { this.instances.forEach(ins => { if (ins.id !== senderId && typeof ins.onMessageReceived === "function") { ins.onMessageReceived(eventName, data) } }) }
      }

      class DialogPanelController {
        constructor({ id, type, html, css, styleManager }) {
          if (!WindowManager.instances) { WindowManager.instances = new Set(); WindowManager.zIndexLayers = { panel: 1e4, dialog: 2e4, prompt: 3e4 } }
          this.id = id; this.type = type || "common"; this.isDestroyed = false; this.messageCallback = null; this.isScrollTicking = false; this.tooltipTimer = null;
          this.hostListeners = []; this.internalListeners = []; this.components = []; this.scrollRafId = null; this.styleManager = styleManager;
          this.managedEvents = ["keydown", "click", "dblclick", "mousedown", "input", "change", "mouseover", "mouseout", "mouseenter", "mouseleave"];
          const r = randomInt(2, 4), t = randomInt(6, 9), e = randomInt(5, 8), s = randomString(e), tagName = `${s.slice(0, r)}-${s.slice(r)}`, uid = `${randomString(t, "alpha")}[${id}]`;
          this.hostEl = GMaddElement(document.documentElement, tagName, { id: uid }) ?? qS(`#${CSS.escape(uid)}`); this.shadow = attachShadow(this.hostEl, { mode: "closed" });
          this.dialog = GMaddElement(this.shadow, "dialog", { class: s }) ?? qS(`dialog.${s}`, this.shadow); this.shield = new InputShield(this.dialog);
          this.dialog.innerHTML = tTP.createHTML(`<div class="dialog-header"><span class="dialog-title"></span><button class="close-btn" data-action="close">✖</button></div><div class="dialog-body">${html}</div><div id="tooltip" popover class="modern-tooltip"></div>`);
          const commonCSS = `:host(#${CSS.escape(uid)}){--primary-color:#1482ea;--primary-hover:#1482ead9;--ok-color:#038c5a;--ok-hover:#038c5ad9;--extra-color:#d93223;--extra-hover:#d93223d9;--bg-base:#fdfdfd;--text-header:#fafafa;--text-main:#212121;--text-secondary:#434343;--border-color:#d9d9d9;--button-text:#fbfbfb;--fr-shared-fontfamily:'Microsoft YaHei UI',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;--fr-shared-monospaced:ui-monospaced,SFMono-Regular,"Operator Mono Lig","JetBrains Mono","Cascadia Code",Monaco,Menlo,Consolas,"Liberation Mono","Courier New","PingFang SC","Microsoft YaHei UI",monospaced;--fr-shared-emoji:system-ui,-apple-system,BlinkMacSystemFont,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Android Emoji,mojiSymbol,EmojiOne Mozilla,Twemoji Mozilla,bwi-font;display:block!important;opacity:1!important;visibility:visible!important}dialog{animation:dialogScaleIn .45s cubic-bezier(.16,1,.3,1);background:var(--bg-base);border:none;border-radius:12px;bottom:auto;box-shadow:2px 2px 10px #b0b0b07d;display:flex;flex-direction:column;left:auto;max-height:max(calc(98vh - 10px),200px);max-width:90vw;min-width:350px;padding:0;position:fixed;right:20px;top:20px;transform:translate(var(--x,0),var(--y,0));width:min-content;will-change:transform;z-index:var(--z,10000)}dialog.${s}::backdrop{background:0 0!important}dialog.${s}:focus,dialog.${s}:focus-visible{outline:0}dialog.${s}[open]{display:flex!important}@keyframes dialogScaleIn{0%{opacity:0;transform:translate(var(--x,0),var(--y,0)) scale(.95) translateY(-10px)}to{opacity:1;transform:translate(var(--x,0),var(--y,0)) scale(1) translateY(0)}}dialog *{font-family:var(--fr-shared-fontfamily)!important;text-shadow:none!important;-webkit-text-stroke:0px transparent!important;font-size:16px;line-height:125%;user-select:none}.dialog-title{font-size:16px;font-weight:700}.dialog-header{align-items:center;background:0 0;border-bottom:1px solid #f0f0f0;color:var(--text-header);cursor:move;display:flex;font-weight:700;justify-content:space-between;padding:12px 20px}.dialog-body{box-sizing:border-box;color:var(--text-main);flex:auto;overflow-y:auto;padding:20px;overscroll-behavior:contain;scroll-behavior:smooth}.close-btn{background:0 0;border:none;color:#fff;cursor:pointer;font-size:14px;padding:0;transition:transform .2s}.close-btn:hover{color:#ffccc7;transform:scale(1.1)}.form-group{display:flex;flex-direction:column;gap:4px;margin-bottom:4px;position:relative}.form-group label{color:#171717;font-size:16px;font-weight:700}.form-inline{align-items:center;flex-direction:row;gap:1px;justify-content:space-between}input[type=search],input[type=text],textarea{background:#fff;border:1px solid #d9d9d9;border-radius:4px;box-sizing:border-box;color:#333;padding:8px 12px;transition:all .3s;width:100%;overscroll-behavior:contain;scroll-behavior:smooth}input:not([type=range],[type=checkbox],[type=button]):focus,textarea:focus{box-shadow:inset 0 1px 3px #0000001a,0 0 6px #efca9599;outline:0}input[disabled],textarea[disabled]{filter:grayscale(0.85)}.switch-container{margin:4px 0 0 auto;padding:0}.switch-container input{display:none;height:0;opacity:0;width:0}.switch-container input+.switch-slider{background:#f7836d;border-radius:7px;box-shadow:inset 0 0 10px #0000001a,0 0 5px #f5929266;box-sizing:content-box;cursor:pointer;display:inline-block;height:32px;margin:0 2px 0 0;padding:0;position:relative;transition:left .3s;white-space:nowrap;width:76px}.switch-container input+.switch-slider:before{background:#fff;border-radius:7px;box-shadow:0 0 1px #00000099;color:#fff;content:" ";height:32px;left:0;position:absolute;top:0;transition:left .3s;width:24px;z-index:99}.switch-container input+.switch-slider:after{border-radius:100px;color:#fff;content:"OFF";font-size:16px;font-style:normal;font-weight:700;left:28px;padding:6px;position:absolute;top:0}.switch-container input:checked+.switch-slider{background:#67a5df;box-shadow:inset 0 0 10px #0000001a,0 0 5px #92c4f566;cursor:pointer;margin:0 2px 0 0}.switch-container input:checked+.switch-slider:after{content:"ON";left:10px}.switch-container input:checked+.switch-slider:before{content:" ";left:52px;position:absolute;z-index:99}.range{--primary-color:#67a5df;--value-offset-y:var(--ticks-gap);--value-active-color:#fff;--value-background:transparent;--value-background-hover:var(--primary-color);--value-font:italic 700 14px/14px ui-monospaced,Consolas,monospaced;--fill-color:var(--primary-color);--progress-background:#dfdfdf;--progress-radius:20px;--show-min-max:none;--track-height:calc(var(--thumb-size)/2);--min-max-font:12px serif;--min-max-opacity:0.5;--min-max-x-offset:10%;--thumb-size:22px;--thumb-color:#fff;--thumb-shadow:0 0 3px #00000066,0 0 1px #00000080 inset,0 0 0 99px var(--thumb-color) inset;--thumb-shadow-active:0 0 0 calc(var(--thumb-size)/4) inset var(--thumb-color),0 0 0 99px var(--primary-color) inset,0 0 3px #00000066;--thumb-shadow-hover:0 0 0 calc(var(--thumb-size)/4) inset var(--thumb-color),0 0 0 99px #ff8c00 inset,0 0 3px #00000066;--ticks-thickness:1px;--ticks-height:5px;--ticks-gap:var(--ticks-height,0);--ticks-color:transparent;--ticks-count:(var(--max) - var(--min))/var(--step);--maxTicksAllowed:1000;--too-many-ticks:Min(1,Max(var(--ticks-count) - var(--maxTicksAllowed),0));--x-step:Max(var(--step),var(--too-many-ticks) * (var(--max) - var(--min)));--tickIntervalPerc_1:Calc((var(--max) - var(--min))/var(--x-step));--tickIntervalPerc:calc((100% - var(--thumb-size))/var(--tickIntervalPerc_1)*var(--tickEvery, 1));--value-a:Clamp(var(--min),var(--value,0),var(--max));--value-b:var(--value,0);--text-value-a:var(--text-value,"");--completed-a:calc((var(--value-a) - var(--min))/(var(--max) - var(--min))*100);--completed-b:calc((var(--value-b) - var(--min))/(var(--max) - var(--min))*100);background-color:transparent;background-position-x:calc(var(--thumb-size)/ 2 - var(--ticks-thickness)/ 2);background-position-y:var(--flip-y,bottom);background-size:var(--tickIntervalPerc) var(--ticks-height);box-sizing:content-box;display:inline-block;height:Max(var(--track-height),var(--thumb-size));margin:-3px 0 0 -10px;padding-bottom:var(--flip-y,var(--ticks-gap));padding-top:calc(var(--flip-y)*var(--ticks-gap));position:relative;width:auto;z-index:1;--ca:Min(var(--completed-a),var(--completed-b));--cb:Max(var(--completed-a),var(--completed-b));--thumbs-too-close:Clamp(-1,1000 * (Min(1,Max(var(--cb) - var(--ca) - 5,-1)) + 0.001),1);--thumb-close-to-min:Min(1,Max(var(--ca) - 5,0));--thumb-close-to-max:Min(1,Max(95 - var(--cb),0));min-width:calc(100% + 16px)!important}.range[disabled]{filter:grayscale(.9)}.range[data-ticks-position=top]{--flip-y:1}.rangeProgress{--start-end:calc(var(--thumb-size)/2);--clip-end:calc(100% - (var(--cb))*1%);--clip-start:calc(var(--ca)*1%);--clip:inset(-20px var(--clip-end) -20px var(--clip-start));background:var(--progress-background,#eee);border-radius:var(--progress-radius);height:calc(var(--track-height));left:var(--start-end);pointer-events:none;position:absolute;right:var(--start-end);top:calc(var(--ticks-gap)*var(--flip-y,0) + var(--thumb-size)/ 2 - var(--track-height)/ 2);z-index:-1}.rangeProgress:before{background:var(--fill-color,#000);box-shadow:var(--progress-flll-shadow);clip-path:var(--clip);z-index:1}.rangeProgress:after,.rangeProgress:before{border-radius:inherit;content:"";inset:0px;position:absolute}.rangeProgress:after{box-shadow:var(--progress-shadow);pointer-events:none}.range>input:only-of-type~.rangeProgress{--clip-start:0}.range>input::-webkit-slider-runnable-track{background:0 0!important;border:none!important;border-image:initial!important;box-shadow:none!important}.range>input{appearance:none;cursor:grab;left:0;width:100%;--thumb-shadow:var(--thumb-shadow-active);background:0 0!important;border:0!important;box-shadow:none!important;height:var(--thumb-size)!important;margin:0!important;outline:0!important;padding:0!important;position:absolute!important;top:calc(50% - Max(var(--track-height),var(--thumb-size))/ 2 + var(--ticks-gap)/ 2*var(--flip-y,-1))!important}.range>input:not(:only-of-type){pointer-events:none}.range>input::-webkit-slider-thumb{appearance:none;background:var(--thumb-color);border:none;border-image:initial;border-radius:var(--thumb-radius,50%);box-shadow:var(--thumb-shadow);height:var(--thumb-size);pointer-events:auto;transform:var(--thumb-transform);transition:.1s;width:var(--thumb-size)}.range>input::-moz-range-thumb{appearance:none;border:none;height:var(--thumb-size);width:var(--thumb-size);transform:var(--thumb-transform);border-radius:var(--thumb-radius,50%);background:var(--thumb-color);box-shadow:var(--thumb-shadow);pointer-events:auto;transition:.1s}.range>input:hover{--thumb-shadow:var(--thumb-shadow-active)}.range>input:hover+output{--value-background:var(--value-background-hover);--y-offset:-1px;box-shadow:0 0 0 3px var(--value-background);color:var(--value-active-color)}.range>input:active{--thumb-shadow:var(--thumb-shadow-hover);cursor:grabbing;z-index:2}.range>input:active+output{display:-webkit-box;opacity:.9;transition:all;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center;-moz-box-orient:horizontal;-moz-box-pack:center;-moz-box-align:center}.range>input:first-of-type{--is-left-most:Clamp(0,(var(--value-a) - var(--value-b)) * 99999,1)}.range>input:first-of-type+output{--value:var(--value-a);--x-offset:calc(var(--completed-a)*-1%)}.range>input:first-of-type+output:after{content:var(--prefix,"") var(--text-value-a) var(--suffix,"")}.range>input:nth-of-type(2){--is-left-most:Clamp(0,(var(--value-b) - var(--value-a)) * 99999,1)}.range>input:nth-of-type(2)+output{--value:var(--value-b)}.range>input+output:after{content:var(--prefix,"") var(--text-value-b) var(--suffix,"");font:var(--value-font)}.range>input+output{--flip:-1;--x-offset:calc(var(--completed-b)*-1%);--pos:calc((var(--value) - var(--min))/(var(--max) - var(--min))*100%);background:var(--value-background);border-radius:4px;box-sizing:content-box;height:24px;left:var(--pos);min-height:24px;min-width:40px;opacity:0;padding:0 6px;pointer-events:none;position:absolute;text-align:center;transform:translate(var(--x-offset),calc(150%*var(--flip) - (var(--y-offset,0) + var(--value-offset-y))*var(--flip)));transition:.12s ease-out,left;width:auto;z-index:5}button.btn{background:#f0f0f0;border:1px solid #bebebe;border-radius:6px;color:#333;cursor:pointer;font-size:14px;min-width:65px;padding:8px 16px;text-align:center;transition:all .2s ease-in-out}button.btn:hover{background:#f4f4f4;box-shadow:0 0 3px #bebebed9;font-wegiht:600}button.btn-primary{background:var(--primary-color);border-color:var(--primary-color);color:var(--button-text)}button.btn-primary:hover{background:var(--primary-hover);box-shadow:0 0 3px var(--primary-color)}button.btn-ok{background:var(--ok-color);border-color:var(--ok-color);color:var(--button-text)}button.btn-ok:hover{background:var(--ok-hover);box-shadow:0 0 3px var(--ok-color)}button.btn-extra{background:var(--extra-color);border-color:var(--extra-color);color:var(--button-text)}button.btn-extra:hover{background:var(--extra-hover);box-shadow:0 0 3px var(--extra-color)}::-webkit-scrollbar-corner{background:#efefef;border-radius:6px;box-shadow:inset 0 0 3px #aaa}::-webkit-scrollbar-thumb{background:#cfcfcf;border-radius:6px;box-shadow:inset 0 0 5px #999}::-webkit-scrollbar-track{background:#efefef;border-radius:6px;box-shadow:inset 0 0 5px #aaa}::selection{color:#fff!important;background:#165be3!important}.error-tip{color:#ff4d4f;font-size:12px;font-weight:700;margin-top:4px}.input-error{border-color:#ff4d4f!important;box-shadow:0 0 0 2px #ff4d4f33!important}.modern-tooltip[popover]{background-color:#1e1e1ed1;color:#fff;font-size:13px;padding:6px 12px;border:none;border-radius:4px;box-shadow:0 4px 16px rgba(0,0,0,.16);inset:auto;bottom:anchor(top);justify-self:anchor-center;margin:0 0 2px;max-width:calc(90vw - 32px);position:fixed;position-anchor:var(--target-anchor);white-space:normal;word-break:break-all;pointer-events:none;opacity:0;transform:scale(.1);transform-origin:center bottom;transition:opacity .15s ease,transform .15s ease,overlay .15s allow-discrete,display .15s allow-discrete}.modern-tooltip:popover-open{opacity:1;transform:scale(1);animation:delayHide .15s ease forwards;animation-delay:5s}.modern-tooltip:popover-open:hover,.tooltip:hover~.modern-tooltip:popover-open{animation-play-state:paused}@keyframes delayHide{to{opacity:0;transform:scale(.1)}}.emoji{font:normal 400 16px/150% var(--fr-shared-emoji)!important;text-shadow:1px 1px 2px #4b5b6b!important;vertical-align:2px}.vhidden{pointer-events:none;margin:0;height:0;min-height:0;visibility:hidden!important;display:block}.hidden{pointer-events:none;display:none!important}.fs10{font-size:10px!important}.fs12{font-size:12px!important}.fs14{font-size:14px!important}.bd-crimson{border:1px solid #dc143c!important;box-shadow:inset 0 1px 3px #0000001a,0 0 6px #d9141499!important}.darkorange{color:#ff8c00!important}.slategray{color:#708090!important}.turquoise{color:#13c2c2!important}.dodgerblue{color:#1482ea!important}.darkgreen{color:#006400!important}.firebrick{color:#b22222!important}.indigo{color:#4b0082!important}.grey,.grey::placeholder{color:grey!important}.peach-border{border:2px solid #ca095d!important}.bold{font-weight:700!important}.grayscale{filter:grayscale(1)}.readonly{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important}.editable{background:linear-gradient(45deg,#e9ffe9,#e9ffe9 25%,transparent 0,transparent 50%,#e9ffe9 0,#e9ffe9 75%,transparent 0,transparent)!important;background-color:#f7fff7!important;background-size:50px 50px!important}.nowrap{white-space:nowrap!important}@-moz-document url-prefix(){.scrollbar, textarea{scrollbar-color:#bbbbbbba #eeeeee12;scrollbar-width:thin}.modern-tooltip[popover]{translate:calc(var(--x, 0px)) calc(var(--y, 0px))}}@supports (-webkit-hyphens:none){.modern-tooltip[popover]{translate:calc(var(--x,0px)) calc(var(--y,0px))}}`;
          this.constructor.importAnton(); this.styleManager.insert(`dialog-style-${id}`, commonCSS + css, { target: this.shadow, type: "dialog" });
        }
        static importAnton() {
          const fontUrl = "https://fonts.googleapis.com/css2?family=Anton&display=swap"; if (qS(`link[href="${fontUrl}"]`)) { return }
          GMaddElement("link", { href: "https://fonts.googleapis.com", rel: "preconnect" }); GMaddElement("link", { href: "https://fonts.gstatic.com", rel: "preconnect", crossorigin: "" });
          GMaddElement("link", { href: fontUrl, rel: "stylesheet", "data-viewport-fixed": "ignore" });
        }
        registerComponent(comp) { Array_push(this.components, comp) }
        trackInternal(el, type, handler, useCapture = false) { if (!el) { return } addListener(el, type, handler, useCapture); Array_push(this.internalListeners, { el, type, handler, useCapture }) }
        mount() {
          if (this.isDestroyed) { return } if (!WindowManager.register(this)) { this.close(); return } this.trackInternal(this.dialog, "close", this); this.shield.enable();
          Array_forEach(this.managedEvents, type => { const capture = Array_includes(["mouseenter", "mouseleave"], type); this.trackInternal(this.dialog, type, this, capture) });
          if (typeof this.dialog.showModal === "function") { this.dialog.inert = true; this.dialog.showModal(); this.dialog.inert = null; this.dialog.blur() } else { this.dialog.show() }
        }
        handleEvent(event) {
          if (this.isDestroyed) { return } const type = event.type; if (type === "close") { this.close(); return }
          if (type === "mousedown") {
            WindowManager.bringToFront(this); const header = event.target.closest(".dialog-header"), isCloseBtn = event.target.closest(".close-btn"); if (header && !isCloseBtn) {
              preventDefault(event); const style = this.dialog.style, currentX = parseFloat(style.getPropertyValue("--x")) || 0, currentY = parseFloat(style.getPropertyValue("--y")) || 0;
              this._drag = { startX: event.clientX, startY: event.clientY, baseX: currentX, baseY: currentY }; addListener($, "mousemove", this); addListener($, "mouseup", this);
            } return;
          } if (type === "mousemove") {
            if (!this._drag) { return } const scale = scaleMatrix.cur || 1, deltaX = (event.clientX - this._drag.startX) * scale, deltaY = (event.clientY - this._drag.startY) * scale,
              nextX = this._drag.baseX + deltaX, nextY = this._drag.baseY + deltaY; if (this._isticking) { return } this._isticking = true;
            rAF(() => { this.dialog.style.setProperty("--x", `${nextX}px`); this.dialog.style.setProperty("--y", `${nextY}px`); this._isticking = false }); return;
          } if (type === "mouseup") { removeListener($, "mousemove", this); removeListener($, "mouseup", this); this._drag = null; return }
          if (type === "mouseenter") {
            const target = event.target.closest(".tooltip"), tooltip = qS("#tooltip", this.dialog); if (target && tooltip) {
              clearTimeout(this.tooltipTimer); const tooltipFn = () => {
                tooltip.textContent = target.dataset.tooltip; const value = target.dataset.currentAnchor; tooltip.style.setProperty("--target-anchor", value); try { tooltip.showPopover() } catch { void 0 }
              }; this.tooltipTimer = setTimeout(tooltipFn, 4e2);
            } this.emit(`dialog:${type}`, { triggerType: type }); return;
          } if (type === "mouseleave") {
            if (event.target.closest(".tooltip")) { clearTimeout(this.tooltipTimer); this.tooltipTimer = null; qS("#tooltip", this.dialog).hidePopover() }
            this.emit(`dialog:${type}`, { triggerType: type }); return;
          } const target = event.target?.closest("[data-action]"); if (!target) { return } const action = getAttribute(target, "data-action");
          if (type === "click" && action === "close") { this.type === "panel" ? WindowManager.closeAll() : this.close(); return }
          const detail = { triggerType: type, actionElementId: target.id, actionElement: target, nativeEvent: event };
          if (type === "input" || type === "change") { detail.value = target.value } this.emit(`action:${action}`, detail);
        }
        setTitle(title) { if (this.dialog) { const titleEl = qS(".dialog-title", this.dialog); if (titleEl) { titleEl.textContent = title } } }
        setZIndex(zIndex) { if (this.dialog && typeof this.dialog.showModal !== "function") { this.dialog.style.setProperty("--z", zIndex) } }
        _getFormSnapshot() {
          const snapshot = {}; if (!this.shadow) { return snapshot } Array_forEach(qA("input, textarea, select", this.shadow), el => {
            const key = el.name || el.id; if (key) { if (el.type === "checkbox") { snapshot[key] = el.checked } else { snapshot[key] = el.value } }
          }); const tags = Array_from(qA(".tag-item", this.shadow)); snapshot.selectedTags = Array_map(tags, item => ({ value: getAttribute(item, "data-value"), text: getAttribute(item, "data-text") })); return snapshot;
        }
        emit(eventName, rawDetail = {}) {
          if (this.isDestroyed || !this.hostEl) { return } const trigger = rawDetail.triggerType || "",
            isHighFreq = Array_includes(["mouseenter", "mouseleave", "mousemove"], trigger), formValues = isHighFreq ? {} : this._getFormSnapshot(),
            cleanDetail = Object_assign(Object_create(null), rawDetail, { formValues, timestamp: Date.now() }); if (cleanDetail.triggerType) {
              const specificEventName = `${eventName}:${cleanDetail.triggerType}`; dispatchEvent(this.hostEl, new CustomEvent(specificEventName, { detail: cleanDetail }));
            } if (this.isDestroyed || !this.hostEl) { return } dispatchEvent(this.hostEl, new CustomEvent(eventName, { detail: cleanDetail }));
        }
        addEventListener(type, listener, options) { if (this.hostEl) { addListener(this.hostEl, type, listener, options); Array_push(this.hostListeners, { type, listener, options }) } }
        onMessage(callback) { this.messageCallback = callback }
        onMessageReceived(eventName, data) { if (this.messageCallback && !this.isDestroyed) { this.messageCallback({ eventName, data }) } }
        postMessage(eventName, data) { WindowManager.broadcast(this.id, eventName, data) }
        close() {
          if (typeof this.emit === "function") { this.emit("dialog:before-close") } if (this.isDestroyed) { return } this.isDestroyed = true; WindowManager.unregister(this);
          if (this.scrollRafId) { cAF(this.scrollRafId); this.scrollRafId = null } if (this._drag) { removeListener($, "mousemove", this); removeListener($, "mouseup", this); this._drag = null }
          this.shield.disable(); Array_forEach(this.components, comp => { if (typeof comp.destroy === "function") { comp.destroy() } }); this.components = [];
          if (this.dialog) {
            const activeEl = this.shadow.activeElement || document.activeElement; if (activeEl && this.dialog.contains(activeEl) && typeof activeEl.blur === "function") { activeEl.blur() }
            Array_forEach(this.internalListeners, item => { removeListener(item.element, item.type, item.handler, item.useCapture) });
            if (this.dialog.open && typeof this.dialog.close === "function") { this.dialog.close() }
            while (this.dialog.firstChild) { const child = this.dialog.firstChild; if (child.nodeType === 1) { child.textContent = "" } this.dialog.removeChild(child) }
          } if (this.hostEl) {
            Array_forEach(this.hostListeners, item => { removeListener(this.hostEl, item.type, item.listener, item.options) }); this.styleManager.remove(`dialog-style-${this.id}`); this.hostEl.remove();
          } this.destroyMemory();
        }
        destroyMemory() { this.styleManager = this.hostEl = this.shadow = this.dialog = this.messageCallback = this.hostListeners = this.internalListeners = null }
      }

      function createMarkStrategy(mark, lazyload) {
        const load = lazyload ? rAF : fn => fn(); return !localStorage.getItem(CONFLICT_NAME)
          ? { has: el => el && hasAttribute(el, mark), add: el => load(() => el && setAttribute(el, mark, "")), remove: el => el && removeAttribute(el, mark) }
          : { has: el => el?.classList?.contains(mark), add: el => load(() => el?.classList?.add(mark)), remove: el => el?.classList?.remove(mark) };
      }

      const UltimateBoldProcessor = (function () {
        const conflictHandler = { flag: Boolean(localStorage.getItem(CONFLICT_NAME)), counter: new LRUCache(50) }, HANDLEINTERVAL = 100, BLANK_REGEXP = /\S/,
          WGHT_REGEXP = /"wght"\s+(\d+)/, TRIMLEFT = /^\s*(\S.{0,18})/, THREADSHOLD = Math.min(Math.min(navigator.hardwareConcurrency || 4, 16) * 15, 200),
          hasDirectTextChild = el => { let n = el.firstChild; while (n) { if (n.nodeType === 3 && BLANK_REGEXP.test(n.nodeValue)) { return true } n = n.nextSibling } return false },
          safeTrim = v => { const l = v.length; if (l < 200) { const t = v.trim(); return l < 20 ? t : t.slice(0, 19) } const m = TRIMLEFT.exec(v); return m ? m[1].trimEnd() : "" },
          isFormsElement = el => /^(INPUT|TEXTAREA|SELECT|BUTTON)$/i.test(el.tagName), isElementBold = el => {
            const inlineWeight = el.style?.fontWeight; let isBold = inlineWeight === "bold" || inlineWeight === "bolder" || parseInt(inlineWeight, 10) >= 600;
            if (isBold) { return true } const win = el.ownerDocument?.defaultView || $, style = win.getComputedStyle(el), { fontWeight, fontVariationSetting: fvs } = style;
            isBold = fontWeight === "bold" || fontWeight === "bolder" || parseInt(fontWeight, 10) >= 600; if (isBold || !fvs || fvs === "normal") { return isBold }
            const match = fvs.match(WGHT_REGEXP); if (match && (parseInt(match[1], 10)) >= 600) { return true } return false;
          }, createSmartNodeHash = ({ maxHits }) => {
            const counter = conflictHandler.counter, getPathTrace = (node, depth, child) => {
              const m = node.nodeName, v = node.nodeValue, l = v?.length ?? node.childElementCount ?? 0, n = v ? safeTrim(v) || "∅" : ""; let i = 0, t = `${m}(${l})[${n}]`;
              if (depth > 0) { while (child && i < 3) { t += `> ${getPathTrace(child, depth - 1, child.nextSibling)} `; i++ } } return t;
            }, handleConflict = observer => {
              if (conflictHandler.flag) {
                if (observer) { observer.isLocallyBlown = true } conflictHandler.counter.clear(); sessionStorage.setItem(CONFLICT_NAME, 12388);
                throw new Error("UltimateBold suspended due to a callback conflict found for mutation of childList.");
              } localStorage.setItem(CONFLICT_NAME, 12339); conflictHandler.flag = true;
            };
            return function (node, currentTime, localObserver) {
              let cacheEntry, combined = `l::[${node.id || node.className?.baseVal || node.className?.trim() || "∅"}]≯${getPathTrace(node, 2, node.firstChild)}`;
              if (counter.has(combined)) { cacheEntry = counter.get(combined) } else { cacheEntry = { count: 0, hits: 0, lastTime: currentTime }; counter.set(combined, cacheEntry) }
              if (cacheEntry.hits >= maxHits) {
                combined = `h::${node.childNodes.length > 15 ? node.cloneNode(false).outerHTML + "|" + (node.textContent || "").slice(0, 600) : node.outerHTML.slice(0, 800)}`;
                if (counter.has(combined)) { cacheEntry = counter.get(combined) } else { cacheEntry = { count: 0, lastTime: currentTime }; counter.set(combined, cacheEntry) }
              } else { cacheEntry.hits++ } if (currentTime - cacheEntry.lastTime >= HANDLEINTERVAL) { cacheEntry.count = cacheEntry.hits = 0 }
              cacheEntry.lastTime = currentTime; if (++cacheEntry.count > THREADSHOLD) { return handleConflict(localObserver) }
            };
          };
        return class {
          constructor(enabled, shadowRootCSS, FixBoldCSS, boldFixSelector, isLazyload, styleManager) {
            this.enableBoldFix = enabled; this.shadowRootStyleContent = shadowRootCSS; this.styleContent = FixBoldCSS; this.activeCustomCss = null; this.styleManager = styleManager;
            this.boldFixQuery = boldFixSelector; this.lazyload = isLazyload; this.isProcessOverride = false; this.injectedRoots = new WeakMap(); this.injectedShadows = new WeakMap();
            this.observedRoots = new WeakSet(); this.knownShadows = new Set(); this.shadowCleanupRegistry = new $.FinalizationRegistry(refToDelete => { this.knownShadows.delete(refToDelete) });
            this.ignoredTags = new Set(["HEAD", "META", "SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "OBJECT", "SVG", "G", "CANVAS", "VIDEO", "AUDIO", "BR", "IMG", "HR"]);
            this.observers = new WeakMap(); this.reEvalNodesQueue = new Set(); this.globalScanTimer = null; this.reEvalTimer = null; this.checkNodeHashForConflict = createSmartNodeHash({ maxHits: 20 });
          }
          init() {
            if (this.enableBoldFix) { this.hijackHistoryRouting() } this.hijackShadowDOM(); this.observe(document);
            if (document.readyState === "loading") { addListener(document, "DOMContentLoaded", () => { this.scanAll() }) } else { this.scanAll() }
          }
          temporaryChangeStatus(boldFixCss, shadowRootCss) {
            const styleManager = this.styleManager, injectedRoots = this.injectedRoots, injectedShadows = this.injectedShadows, updateStyleForRoot = root => {
              if (injectedRoots.has(root)) { styleManager.insert(injectedRoots.get(root), boldFixCss, { target: root, type: BOLD_STYLE_TYPE }) }
              if (injectedShadows.has(root)) { styleManager.insert(injectedShadows.get(root), shadowRootCss, { target: root, type: BOLD_STYLE_TYPE }) }
            }; updateStyleForRoot(document); const knownShadows = this.knownShadows;
            for (const ref of knownShadows) { const root = ref.deref(); if (root) { updateStyleForRoot(root) } else { knownShadows.delete(ref) } } return injectedRoots.has(document);
          }
          scanAll(enable, activeCustomCss) {
            const roots = [document.body], previousOverride = this.isProcessOverride, previousCss = this.activeCustomCss;
            if (typeof enable === "boolean") { this.isProcessOverride = enable; this.activeCustomCss = enable ? activeCustomCss : null } try {
              for (const ref of this.knownShadows) { const root = ref.deref(); if (root && root.isConnected) { Array_push(roots, root) } else { this.knownShadows.delete(ref) } } this.processBatch(roots);
            } catch { void 0 } finally { if (typeof enable === "boolean") { this.isProcessOverride = previousOverride; this.activeCustomCss = previousCss } }
          }
          hijackHistoryRouting() {
            if ($.navigation) { addListener($.navigation, "navigate", () => { this.handleSPARouteChange() }) } else {
              const originalPushState = history.pushState, originalReplaceState = history.replaceState;
              history.pushState = (...args) => { Function_apply(originalPushState, history, args); this.handleSPARouteChange() };
              history.replaceState = (...args) => { Function_apply(originalReplaceState, history, args); this.handleSPARouteChange() };
            } addListener($, "popstate", () => { this.handleSPARouteChange() });
          }
          handleSPARouteChange() { this.reEvalNodesQueue.clear(); clearTimeout(this.spaTimer); this.spaTimer = setTimeout(() => this.scanAll(), 50) }
          hijackShadowDOM() {
            const self = this; Element.prototype.attachShadow = function (init) {
              const shadowRoot = attachShadow(this, init); if (!self.observedRoots.has(shadowRoot)) {
                self.observedRoots.add(shadowRoot); const shadowRef = new $.WeakRef(shadowRoot); self.knownShadows.add(shadowRef);
                self.shadowCleanupRegistry.register(shadowRoot, shadowRef); self.observe(shadowRoot); self.injectShadowRootStyle(shadowRoot);
              } if (shadowRoot.childNodes.length > 0) { self.processBatch([shadowRoot]) } self.processBatch([this]); return shadowRoot;
            };
          }
          injectShadowRootStyle(root) {
            if (!this.shadowRootStyleContent || !root || this.injectedShadows.has(root)) { return } const styleId = `SHADOW_COMMON_${randomString(8, "alpha")}`;
            this.styleManager.insert(styleId, this.shadowRootStyleContent, { target: root, type: BOLD_STYLE_TYPE }); this.injectedShadows.set(root, styleId);
          }
          injectBoldFixStyle(root) {
            if ((!this.enableBoldFix && !this.isProcessOverride) || !root || this.injectedRoots.has(root)) { return }
            const styleId = `${BOLD_STYLE_ID}${randomString(8, "alpha")}`, cssText = this.isProcessOverride ? this.activeCustomCss : this.styleContent;
            this.styleManager.insert(styleId, cssText, { target: root, type: BOLD_STYLE_TYPE }); this.injectedRoots.set(root, styleId);
          }
          observe(rootNode) {
            if (this.observers.has(rootNode) || sessionStorage.getItem(CONFLICT_NAME)) { return }
            const observer = new MutationObserver((mutations, _observer) => {
              if (_observer.isLocallyBlown) { _observer.disconnect(); return } const affectedRoots = new Set(), affectedAttributes = new Set();
              let requiresGlobalScan = false; try {
                for (let i = 0, l = mutations.length; i < l; ++i) {
                  const m = mutations[i]; if (m.type === "childList") {
                    const added = m.addedNodes; for (let j = 0, len = added.length; j < len; ++j) {
                      const node = added[j]; if (node.nodeType === 1) { if (node.tagName === "STYLE" || node.tagName === "LINK") { requiresGlobalScan = true } else { affectedRoots.add(node) } } else
                        if (node.nodeType === 3 && node.parentNode) { affectedRoots.add(node.parentNode) }
                    } const removed = m.removedNodes; for (let j = 0, len = removed.length; j < len; ++j) {
                      const node = removed[j], isMatchedNode = node.nodeType === 1 && (node.matches(this.boldFixQuery) || qS(this.boldFixQuery, node));
                      if (isMatchedNode) { this.checkConflict(node, $.event, performance.now(), _observer) }
                    }
                  } else if (m.type === "attributes") {
                    if (m.attributeName === BOLD_FIXER_ATTR) { continue }
                    if (m.attributeName === "class" && m.target.classList?.contains(BOLD_FIXER_ATTR)) { continue } affectedAttributes.add(m.target);
                  }
                }
              } catch (e) { if (e.message.includes("callback conflict")) { _observer.isLocallyBlown = true; _observer.disconnect(); error(e.message); return } }
              if (requiresGlobalScan) { clearTimeout(this.globalScanTimer); this.globalScanTimer = setTimeout(() => { this.scanAll() }, 150) }
              if (affectedRoots.size > 0) { this.processBatch(this.constructor.optimizeRoots(affectedRoots)) } if (affectedAttributes.size > 0) { this.evaluateNodesExact(affectedAttributes, false) }
            }); observer.isLocallyBlown = false; observer.__is_fr_reading__ = true; observer.observe(rootNode, { childList: true, subtree: true, attributes: true }); this.observers.set(rootNode, observer);
          }
          checkConflict(node, event, currentTime, localObserver) {
            if ((event instanceof MouseEvent && event.type === "mousemove") || event instanceof MessageEvent) { return }
            if (!node || node.nodeType !== 1 || this.ignoredTags.has(node.nodeName)) { return } if (!node.matches(this.boldFixQuery) && !qS(this.boldFixQuery, node)) { return }
            this.checkNodeHashForConflict(node, currentTime, localObserver);
          }
          static optimizeRoots(nodes) {
            const uniqueRoots = new Set(nodes); for (const node of uniqueRoots) {
              let parent = node.parentElement; while (parent) { if (uniqueRoots.has(parent)) { uniqueRoots.delete(node); break } parent = parent.parentElement }
            } return uniqueRoots;
          }
          processBatch(rootNodesIterable, isReEval = false) {
            const readQueue = new Set(); for (const root of rootNodesIterable) {
              if (!root || (root.nodeType !== 1 && root.nodeType !== 11) || !root.isConnected) { continue }
              const walker = document.createTreeWalker(root, 1, { acceptNode: node => (this.ignoredTags.has(node.tagName) ? 2 : 1) });
              let currentNode = walker.currentNode; while (currentNode) {
                if (currentNode.shadowRoot && !this.observedRoots.has(currentNode.shadowRoot)) {
                  this.observedRoots.add(currentNode.shadowRoot); const shadowRef = new $.WeakRef(currentNode.shadowRoot);
                  this.knownShadows.add(shadowRef); this.shadowCleanupRegistry.register(currentNode.shadowRoot, shadowRef);
                  this.observe(currentNode.shadowRoot); this.injectShadowRootStyle(currentNode.shadowRoot); this.processBatch([currentNode.shadowRoot], isReEval);
                } if (isFormsElement(currentNode) || hasDirectTextChild(currentNode)) { readQueue.add(currentNode) } currentNode = walker.nextNode();
              }
            } this.evaluateNodesExact(readQueue, isReEval);
          }
          evaluateNodesExact(nodesIterable, isReEval) {
            const previousOverride = this.isProcessOverride; if (!this.enableBoldFix && !this.isProcessOverride) { return }
            const writeQueue = new Set(), removeQueue = [], strategy = createMarkStrategy(BOLD_FIXER_ATTR, this.lazyload); for (const el of nodesIterable) {
              if (el && el.nodeType === 1 && el.isConnected) { if (isElementBold(el)) { writeQueue.add(el) } else { Array_push(removeQueue, el) } }
            } for (let i = 0, l = removeQueue.length; i < l; ++i) { const el = removeQueue[i]; if (strategy.has(el)) { strategy.remove(el) } }
            for (const el of writeQueue) { if (!strategy.has(el)) { strategy.add(el); const root = el.getRootNode(); if (root) { this.injectBoldFixStyle(root) } } }
            if (!isReEval && nodesIterable.size > 0) {
              for (const el of nodesIterable) { this.reEvalNodesQueue.add(el) } clearTimeout(this.reEvalTimer); this.reEvalTimer = setTimeout(() => {
                const nodesToReEval = new Set(this.reEvalNodesQueue); this.reEvalNodesQueue.clear(); if (nodesToReEval.size === 0) { return }
                const localPrevOverride = this.isProcessOverride; this.isProcessOverride = true; try { this.processBatch(nodesToReEval, true) } finally { this.isProcessOverride = localPrevOverride }
              }, 50);
            } this.isProcessOverride = previousOverride;
          }
        };
      })();

      class BoldHoverDetector {
        constructor(boldFixCss, isLazyload, styleManager) {
          this.styleContent = boldFixCss; this.lazyload = isLazyload; this.styleManager = styleManager; this.formsRegexp = /^(INPUT|TEXTAREA|SELECT|BUTTON)$/i; this.S_REG = /\S/; this.START_DELAY = 16;
          this.LEAVE_DELAY = 16; this.STABLE_FRAMES = 3; this.MAX_POLL_MS = 1200; this.BOLD_THRESHOLD = 600; this.MAX_CHILD_CHECK = 3; this._weightCache = Object_create(null); this.state = new WeakMap();
          this.watchSet = new Set(); this.activeTimers = new Set(); this._started = false; this.rafId = null; this._onEnter = this._onEnter.bind(this); this._onLeave = this._onLeave.bind(this);
          this._rafLoop = this._rafLoop.bind(this); this._pagehideHandler = this._pagehideHandler.bind(this); this._beforeunloadHandler = this._beforeunloadHandler.bind(this);
        }
        static fontWeightToNumber(weight) {
          const n = Number(weight); if (!isNaN(n)) { return n } const s = String(weight).trim().toLowerCase(); if (s === "bold") { return 700 } if (s === "bolder") { return 900 } return 400;
        }
        static isWorthChecking(el) { const cs = $.getComputedStyle(el); return cs && cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0" }
        _isBoldValue(weight) {
          if (this._weightCache[weight] !== void 0) { return this._weightCache[weight] }
          const isBold = this.constructor.fontWeightToNumber(weight) >= this.BOLD_THRESHOLD; this._weightCache[weight] = isBold; return isBold;
        }
        _hasDirectTextNode(el) {
          if (!el.hasChildNodes()) { return false } let n = el.firstChild; while (n) { if (n.nodeType === 3 && this.S_REG.test(n.nodeValue)) { return true } n = n.nextSibling } return false;
        }
        _applyClassIfChanged(el, isBold) {
          const s = this.state.get(el); if (!s || s.lastApplied === isBold) { return } s.lastApplied = isBold;
          const strategy = createMarkStrategy(BOLD_FIXER_ATTR, this.lazyload); if (isBold) {
            strategy.add(el); const root = el.getRootNode(); if (this.styleManager.hasType(BOLD_STYLE_TYPE, root)) { return }
            this.styleManager.insert(`${BOLD_STYLE_ID}hover`, this.styleContent, { target: root, type: BOLD_STYLE_TYPE });
          } else { strategy.remove(el) }
        }
        _setTimer(callback, delay) { const timerId = setTimeout(() => { this.activeTimers.delete(timerId); callback() }, delay); this.activeTimers.add(timerId); return timerId }
        _clearTimer(timerId) { if (timerId) { clearTimeout(timerId); this.activeTimers.delete(timerId) } }
        startWatch(el, targetIsBold) {
          if (this.watchSet.has(el) || !this.constructor.isWorthChecking(el)) { return } const s = this.state.get(el) || { lastApplied: null }; s.startTime = performance.now();
          s.stable = 0; s.lastVal = null; s._tempWeight = null; s.targetIsBold = targetIsBold; this.state.set(el, s); this.watchSet.add(el); if (!this.rafId) { this.rafId = rAF(this._rafLoop) }
        }
        stopWatch(el) { if (!this.watchSet.has(el)) { return } this.watchSet.delete(el); if (this.watchSet.size === 0 && this.rafId) { cAF(this.rafId); this.rafId = null } }
        _rafLoop() {
          if (this.watchSet.size === 0) { this.rafId = null; return } const now = performance.now(); for (const el of this.watchSet) {
            if (!el.isConnected) { this.state.get(el)._tempWeight = null; continue } try { this.state.get(el)._tempWeight = getComputedStyle(el).fontWeight } catch { this.state.get(el)._tempWeight = null }
          } for (const el of this.watchSet) {
            const s = this.state.get(el), w = s._tempWeight; if (w === null) { this.stopWatch(el); continue }
            const bold = this._isBoldValue(w); s.stable = (s.lastVal === null || bold === s.lastVal) ? (s.stable || 0) + 1 : 1; s.lastVal = bold;
            if (now - s.startTime > this.MAX_POLL_MS) { this._applyClassIfChanged(el, bold); this.stopWatch(el); continue }
            if (typeof s.targetIsBold === "boolean") { if (s.stable >= this.STABLE_FRAMES && bold === s.targetIsBold) { this._applyClassIfChanged(el, bold); this.stopWatch(el) } } else
              if (s.stable >= this.STABLE_FRAMES) { this._applyClassIfChanged(el, bold) }
          } if (this.watchSet.size > 0) { this.rafId = rAF(this._rafLoop) }
        }
        _forEachTextElement(rootEl, callback) {
          if (this.formsRegexp.test(rootEl.tagName)) { if (this.constructor.isWorthChecking(rootEl)) { callback(rootEl) } return }
          if (this._hasDirectTextNode(rootEl) && this.constructor.isWorthChecking(rootEl)) { callback(rootEl) }
          let count = 0; const walker = document.createTreeWalker(rootEl, 4, { acceptNode: node => (this.S_REG.test(node.nodeValue) ? 1 : 2) });
          let textNode; while ((textNode = walker.nextNode()) && count < this.MAX_CHILD_CHECK) {
            const parent = textNode.parentElement; if (parent && this.constructor.isWorthChecking(parent)) { callback(parent) } count++;
          }
        }
        _onEnter(e) {
          const rootEl = e.target; if (!rootEl || rootEl.nodeType !== 1) { return } this._forEachTextElement(rootEl, el => {
            const s = this.state.get(el) || {}; this._clearTimer(s.startDelayId); this._clearTimer(s.leaveDelayId); s.leaveDelayId = null;
            s.startDelayId = this._setTimer(() => { s.startDelayId = null; this.startWatch(el, void 0) }, this.START_DELAY); this.state.set(el, s);
          });
        }
        _onLeave(e) {
          const rootEl = e.target; if (!rootEl || rootEl.nodeType !== 1) { return } this._forEachTextElement(rootEl, el => {
            const s = this.state.get(el); if (!s) { return } this._clearTimer(s.startDelayId); s.startDelayId = null; this._clearTimer(s.leaveDelayId);
            if (!s.lastApplied) { this.stopWatch(el); return } s.leaveDelayId = this._setTimer(() => { s.leaveDelayId = null; this.startWatch(el, false) }, this.LEAVE_DELAY);
          });
        }
        start() {
          if (this._started) { return } this._started = true; const usePointer = typeof $.PointerEvent !== "undefined";
          this._enterEvent = usePointer ? "pointerover" : "mouseover"; this._leaveEvent = usePointer ? "pointerout" : "mouseout";
          addListener(document, this._enterEvent, this._onEnter, false); addListener(document, this._leaveEvent, this._onLeave, false);
          addListener($, "pagehide", this._pagehideHandler, { once: true }); addListener($, "beforeunload", this._beforeunloadHandler, { once: true });
        }
        stop() {
          if (!this._started) { return } this._started = false; if (this.rafId) { cAF(this.rafId); this.rafId = null }
          removeListener(document, this._enterEvent, this._onEnter, false); removeListener(document, this._leaveEvent, this._onLeave, false);
        }
        destroy() {
          this.stop(); for (const timerId of this.activeTimers) { clearTimeout(timerId) } this.activeTimers.clear(); const strategy = createMarkStrategy(BOLD_FIXER_ATTR, this.lazyload);
          for (const el of this.watchSet) { strategy.remove(el); this.state.delete(el) } this.watchSet.clear(); this._weightCache = Object_create(null);
          removeListener($, "pagehide", this._pagehideHandler); removeListener($, "beforeunload", this._beforeunloadHandler);
        }
        _pagehideHandler(e) { if (!e.persisted) { this.destroy() } }
        _beforeunloadHandler() { this.destroy() }
      }

      const CanvasFontInterceptor = (function () {
        const originFillText = CanvasRenderingContext2D.prototype.fillText, originStrokeText = CanvasRenderingContext2D.prototype.strokeText,
          FONT_REGEXP = /^((?:[a-z-]+\s)+|[0-9]+\s)?(\d*\.?\d+(?:px|em|pt|%|rem)\s)?(.+)$/i, BOLD_REGEXP = /(?:bold|bolder|[6789]\d{2})\s/i;
        return class {
          constructor(options = {}) { this.renderFont = options.renderFont; this.fontName = options.font; this.shadowR = options.radius; this.shadowC = options.color; this.isApplied = false }
          modifyFont(text) { if (!text) { return text } const matches = text.match(FONT_REGEXP); return matches ? `${matches[1] || ""} ${matches[2] || ""} ${this.fontName}`.trim() : text }
          deploy() {
            if (this.isApplied) { return } const self = this; CanvasRenderingContext2D.prototype.fillText = function (...args) {
              if (!this.frFontFace && this.font && !this.font.includes(self.renderFont)) {
                this.font = self.modifyFont(this.font); if (self.shadowR > 0 && !BOLD_REGEXP.test(this.font)) {
                  Function_apply(originFillText, this, args); this.shadowColor = self.shadowC; this.shadowBlur = self.shadowR; this.shadowOffsetX = 0; this.shadowOffsetY = 0;
                }
              } Function_apply(originFillText, this, args);
            }; CanvasRenderingContext2D.prototype.strokeText = function (...args) {
              if (!this.frFontFace && this.font && !this.font.includes(self.renderFont)) { this.font = self.modifyFont(this.font) } Function_apply(originStrokeText, this, args);
            }; this.isApplied = true;
          }
          restore() { if (!this.isApplied) { return } CanvasRenderingContext2D.prototype.fillText = originFillText; CanvasRenderingContext2D.prototype.strokeText = originStrokeText; this.isApplied = false }
        };
      })();

      class BlankIframeManager {
        constructor(onInit = () => { }) {
          this.onInit = onInit; this.processedDocuments = new WeakSet(); this.boundIframes = new WeakSet(); this.iframeTimers = new WeakMap();
          this.observer = null; this.rootobs = null; this.pendingIframes = new Set(); this.isBatchProcessing = false;
        }
        start() { if (this.observer || this.rootobs) { return } this._init() }
        _init() {
          const checkIframe = () => {
            if (document.body) { this._initBodyObserver(document.body); return }
            this.rootobs = new MutationObserver(() => { if (document.body) { this.rootobs.disconnect(); this.rootobs = null; this._initBodyObserver(document.body) } });
            this.rootobs.observe(document.documentElement, { childList: true, subtree: true });
          }; if (document.readyState === "loading") { addListener(document, "DOMContentLoaded", checkIframe, { once: true }) } else { checkIframe() }
        }
        _initBodyObserver(bodyNode) {
          const ifs = gT("iframe", bodyNode), l = ifs.length; if (l > 0) { for (let i = 0; i < l; ++i) { this._checkAndProcess(ifs[i]) } }
          const iframesCallback = mutations => {
            let hasNew = false; for (const mutation of mutations) {
              for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) { continue } if (node.nodeName === "IFRAME") { this.pendingIframes.add(node); hasNew = true } else {
                  const ifs = gT("iframe", node), l = ifs.length; if (l > 0) { for (let i = 0; i < l; ++i) { this.pendingIframes.add(ifs[i]); hasNew = true } }
                }
              }
            } if (!hasNew || this.isBatchProcessing) { return } this.isBatchProcessing = true;
            queueMicrotask(() => { this.pendingIframes.forEach(i => { this._checkAndProcess(i) }); this.pendingIframes.clear(); this.isBatchProcessing = false });
          }; this.observer = new MutationObserver(iframesCallback); this.observer.observe(bodyNode, { childList: true, subtree: true });
        }
        stop() { if (this.rootobs) { this.rootobs.disconnect(); this.rootobs = null } if (this.observer) { this.observer.disconnect(); this.observer = null } }
        _checkAndProcess(iframe) {
          if (this.boundIframes.has(iframe)) { return } this.boundIframes.add(iframe); const handleIframeLoad = () => {
            const isBlank = src => !src || src.trim() === "" || src.trim().toLowerCase() === "about:blank"; if (!isBlank(getAttribute(iframe, "src"))) { return }
            if (this.iframeTimers.has(iframe)) { clearTimeout(this.iframeTimers.get(iframe)) } const injectFn = () => {
              if (iframe.isConnected && isBlank(getAttribute(iframe, "src"))) { this._injectAndListen(iframe) }
            }; injectFn(); const timerId = setTimeout(() => { injectFn(); this.iframeTimers.delete(iframe) }, 50); this.iframeTimers.set(iframe, timerId);
          }; addListener(iframe, "load", handleIframeLoad); handleIframeLoad();
        }
        _injectAndListen(iframe) {
          let win, doc; try { win = iframe.contentWindow; doc = iframe.contentDocument } catch (e) { warn(i18n.t("FrameErr"), e.message); return }
          if (!doc || this.processedDocuments.has(doc)) { return } this.processedDocuments.add(doc); this.onInit(iframe, doc, win);
        }
      }

      const CoordinateOffsetAdjuster = (function () {
        const rawClientRects = Element.prototype.getClientRects, rawBoundingClientRect = Element.prototype.getBoundingClientRect,
          rawScreenCTM = SVGGraphicsElement.prototype.getScreenCTM, staticItemFunc = function (index) { return this[index] ?? null };
        return class {
          constructor() {
            this.dummySVG = document.createElementNS("http://www.w3.org/2000/svg", "svg"); this.matrixProps = ["a", "b", "c", "d", "e", "f"];
            this.currentScale = 1; this.scrollScale = 1; this.hasPatchedProps = false; this.hasPatchedMethods = false;
          }
          adjust({ cur, prev = 1, props }) {
            if (cur === prev) { return } this.scrollScale = cur; this.currentScale *= (cur / prev);
            if (!this.hasPatchedProps) { this.patchProperties(props || {}); this.hasPatchedProps = true } if (!this.hasPatchedMethods) { this.patchMethods(); this.hasPatchedMethods = true }
          }
          patchProperties(props) {
            const self = this, processProp = (obj, prop, isScroll) => {
              if (!obj) { return } const descriptor = Reflect_getOwnDesc(obj, prop);
              if (!descriptor || typeof descriptor.get !== "function" || descriptor.get.__isPatchedByAdjuster) { return }
              const rawGet = descriptor.get, target = isScroll ? HTMLHtmlElement.prototype : obj,
                newGet = isScroll ? function () { return Function_call(rawGet, this) / self.scrollScale } : function () { return Function_call(rawGet, this) / self.currentScale };
              newGet.__isPatchedByAdjuster = true; const value = { configurable: true, enumerable: descriptor.enumerable, get: newGet }; if (isScroll) {
                value.set = function (val) { if (Number.isFinite(val)) { this.scrollTo({ [prop === "scrollLeft" ? "left" : "top"]: val * self.scrollScale }) } };
              } else if (descriptor.set) { value.set = descriptor.set } Reflect_defineProperty(target, prop, value);
            }, mouseProps = ["clientX", "clientY", "pageX", "pageY", "layerX", "layerY", "offsetX", "offsetY", "x", "y"];
            for (let i = 0; i < 10; ++i) { processProp(MouseEvent.prototype, mouseProps[i], false) }
            const windowProps = ["innerWidth", "innerHeight", "pageXOffset", "pageYOffset", "scrollX", "scrollY", ...(props.window || [])],
              winLen = windowProps.length, contexts = !GMcontextMode && ctx !== uctx ? [ctx, uctx] : [ctx];
            for (let j = 0; j < contexts.length; ++j) { for (let i = 0; i < winLen; ++i) { processProp(contexts[j], windowProps[i], false) } }
            const elementProps = props.element || []; for (let i = 0; i < elementProps.length; ++i) { processProp(Element.prototype, elementProps[i], false) }
            processProp(Element.prototype, "scrollLeft", true); processProp(Element.prototype, "scrollTop", true);
            const htmlProps = props.html || []; for (let i = 0; i < htmlProps.length; ++i) { processProp(HTMLElement.prototype, htmlProps[i], false) }
          }
          patchMethods() {
            const self = this; Reflect_defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {
              configurable: true, value: function () {
                const originalMatrix = Function_call(rawScreenCTM, this); if (!originalMatrix) { return null }
                const newSVGMatrix = this.ownerSVGElement?.createSVGMatrix() || self.dummySVG.createSVGMatrix(), invScale = 1 / self.currentScale, matrixProps = self.matrixProps;
                for (let i = 0; i < 6; ++i) { newSVGMatrix[matrixProps[i]] = originalMatrix[matrixProps[i]] * invScale } return newSVGMatrix;
              }
            }); Reflect_defineProperty(Element.prototype, "getClientRects", {
              configurable: true, value: function () {
                const rects = Function_call(rawClientRects, this), len = rects.length, invScale = 1 / self.currentScale, result = new Array(len);
                for (let i = 0; i < len; ++i) { const r = rects[i]; result[i] = new DOMRect(r.x * invScale, r.y * invScale, r.width * invScale, r.height * invScale) }
                result.item = staticItemFunc; return Object_freeze(result);
              }
            }); Reflect_defineProperty(Element.prototype, "getBoundingClientRect", {
              configurable: true, value: function () {
                const r = Function_call(rawBoundingClientRect, this), invScale = 1 / self.currentScale; return new DOMRect(r.x * invScale, r.y * invScale, r.width * invScale, r.height * invScale);
              }
            });
          }
        };
      })();

      class RenderRuleManager {
        constructor(currentHost) { this.currentHost = currentHost }
        _isMatchingHost(hostConfig) {
          const hosts = Array_isArray(hostConfig) ? hostConfig : [hostConfig]; for (let i = 0, len = hosts.length; i < len; ++i) {
            const h = hosts[i]; if (h === this.currentHost || (h.charCodeAt(0) === 42 && this.currentHost.endsWith(h.slice(1)))) { return true }
          } return false;
        }
        static fetchRules(ruleURL) {
          if (!ruleURL) { return } const url = `${ruleURL}?token=${randomString(16, "all")}`, fetchPromise = new Promise(resolve => {
            const opt = { url, method: "GET", headers: { Accept: "*/*", Referer: ruleURL } }, onerror = () => resolve(null), ontimeout = () => resolve(null),
              onload = response => { if (response.status >= 200 && response.status < 300 && response.readyState === 4) { resolve(response.responseText) } else { resolve(null) } };
            if (isAsyncFunction(GMxhr)) { GMxhr(opt).then(onload).catch(onerror) } else { GMxhr({ ...opt, timeout: 5e3, onload, onerror, ontimeout }) }
          }), timeoutPromise = new Promise(resolve => { setTimeout(() => resolve(null), 5e3) }); return Promise.race([fetchPromise, timeoutPromise]);
        }
        applyRules(rawRuleData, targetData) {
          if (!rawRuleData || typeof targetData !== "object") { return targetData } try {
            if (!Array_isArray(rawRuleData) || rawRuleData.length === 0) { return targetData } let specificRules = null;
            for (let i = 0, l = rawRuleData.length; i < l; ++i) { const item = rawRuleData[i]; if (this._isMatchingHost(item[0])) { specificRules = item[1]; break } }
            if (!specificRules) { return targetData } const keys = Object_keys(specificRules); for (let i = 0, l = keys.length; i < l; ++i) {
              const key = keys[i], ruleExpr = specificRules[key]; if (!ruleExpr || targetData[key] === void 0) { continue }
              const separatorIndex = ruleExpr.indexOf("∯"); if (separatorIndex === -1) { continue } const actionChar = ruleExpr.charCodeAt(0),
                param = ruleExpr.slice(separatorIndex + 1), value = targetData[key]; switch (actionChar) {
                  case 43: /* + */ { if (!value.includes(param)) { targetData[key] += param } break } case 64: /* @ */ { targetData[key] = param !== "0"; break }
                  case 45: /* - */ { targetData[key] = value.replaceAll(param, ""); break } case 35: /* # */ { targetData[key] = param; break } default: break;
                }
            }
          } catch (e) { GMdeleteValue(REMOTERENDERDATA); error(i18n.t("RemoteDataErr"), e.message) } return targetData;
        }
      }

      const FontFaceSetObserver = (function () {
        let canvas = null, ctx = null, originData = null, pixelBuffer = null; const canvasWidth = 200, canvasHeight = 100, fontSize = 50,
          fontText = "0字i體W", originFont = "'Courier New',Courier,monospace", originFontUpper = originFont.toUpperCase(), initCanvas = () => {
            if (canvas) { return } canvas = cE("canvas", { width: canvasWidth, height: canvasHeight }); ctx = canvas.getContext("2d", { willReadFrequently: true });
            ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.frFontFace = true; pixelBuffer = new Uint32Array(canvasWidth * canvasHeight);
          }, checkFontInternal = name => {
            try {
              ctx.clearRect(0, 0, canvasWidth, canvasHeight); ctx.fillStyle = "#000000"; const isOrigin = originFontUpper === name.toUpperCase();
              ctx.font = `${fontSize}px ${isOrigin ? originFont : `'${name}',${originFont}`}`; ctx.fillText(fontText, canvasWidth / 2, canvasHeight / 2);
              const metrics = ctx.measureText(fontText), fontWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
              if (originData && originData.fontWidth !== fontWidth) { return { hash: -1, fontWidth } } const imgData = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
                data8 = imgData.data, totalPixels = data8.length >> 2, temp32 = new Uint32Array(data8.buffer, data8.byteOffset, totalPixels); pixelBuffer.set(temp32); let hash = 0;
              for (let i = 0; i < totalPixels; ++i) { const pixel = pixelBuffer[i]; if (pixel !== 0) { hash ^= pixel; hash = Math.imul(hash, 16777619) } } return { hash, fontWidth };
            } catch { return null }
          };
        return class {
          constructor() { initCanvas(); originData = checkFontInternal(originFont); this.isSpoofed = null }
          checkFingerprintProtection(isFirefox) {
            if (this.isSpoofed !== null) { return this.isSpoofed } ctx.clearRect(0, 0, canvasWidth, canvasHeight); ctx.fillStyle = "#000000"; ctx.fillRect(0, 0, 50, 50);
            const imgData = ctx.getImageData(0, 0, 50, 50), totalPixels = imgData.data.length >> 2, data32 = new Uint32Array(imgData.data.buffer, imgData.data.byteOffset, totalPixels),
              expectedPixel = data32[0]; for (let i = 0; i < totalPixels; ++i) { if (data32[i] !== expectedPixel) { this.isSpoofed = true; break } }
            if (isFirefox && !this.isSpoofed) { if (!this.detect("Lucida Handwriting") && !this.detect("Apple Lisung")) { this.isSpoofed = true } } return this.isSpoofed;
          }
          detect(font) {
            if (!font || typeof font !== "string" || this.isSpoofed) { return false } const fontUpper = font.toUpperCase(); if (originFontUpper.includes(fontUpper)) { return true }
            const detectData = checkFontInternal(font); if (!detectData || !originData) { return false } return originData.fontWidth !== detectData.fontWidth || originData.hash !== detectData.hash;
          }
          destroy() { if (canvas) { canvas.width = 0; canvas.height = 0 } canvas = null; ctx = null; originData = null; this.isSpoofed = null; pixelBuffer = null }
        };
      })();

      class StateManager {
        constructor(submitBtn, container, isPreview) {
          this.container = container; this.submitBtn = submitBtn; this.globalStatus = 0b000000000000000; this.originalValues = []; this.lang = null;
          this.isPreview = isPreview; this._handleInput = this._handleInput.bind(this); this._startListening();
        }
        initData(dataArray) {
          if (!this.container) { return } this.originalValues = [...dataArray]; this.globalStatus = 0b000000000000000;
          const indexs = qA("[data-index]", this.container), cLang = sessionStorage.getItem(CURRENT_LANGUAGE); if (cLang) { i18n.setLanguage(cLang) }
          Array_forEach(indexs, i => { const idx = parseInt(i.dataset.index, 10); if (this.originalValues[idx] !== void 0) { i.value = this.originalValues[idx] } }); this._renderUI();
        }
        _startListening() { if (!this.container) { return } addListener(this.container, "input", this._handleInput, true) }
        _handleInput(event) {
          const target = event.target; if (target.dataset.index === void 0) { return }
          const index = parseInt(target.dataset.index, 10), currentBit = 1 << index, currentValue = target.type === "checkbox" ? target.checked : target.value;
          if (currentValue !== this.originalValues[index]) { this.globalStatus |= currentBit } else { this.globalStatus &= ~currentBit } this._renderUI();
        }
        _renderUI() {
          if (this.globalStatus !== 0) {
            if (this.submitBtn.textContent === i18n.t("Preview")) { return } this.submitBtn.classList.add("anim");
            if (this.isPreview) { this.submitBtn.classList.add("preview"); this.submitBtn.textContent = i18n.t("Preview") }
          } else { this.submitBtn.classList.remove("anim"); if (this.isPreview) { this.submitBtn.classList.remove("preview"); this.submitBtn.textContent = i18n.t("Save") } }
        }
        hasChanges() { return this.globalStatus !== 0 }
        saveSuccess() {
          if (!this.container) { return } const nodes = qA("[data-index]", this.container); for (let i = 0, l = nodes.length; i < l; ++i) {
            const n = nodes[i], idx = parseInt(n.dataset.index, 10); this.originalValues[idx] = n.type === "checkbox" ? n.checked : n.value;
          } this.globalStatus = 0b000000000000000; this._renderUI();
        }
        destroy() {
          if (this.container) { removeListener(this.container, "input", this._handleInput, true) }
          this.container = null; this.submitBtn = null; this.originalValues = []; this.globalStatus = 0b000000000000000;
        }
      }

      const toSafeString = (() => {
        const c = /[`{}]|url\s*\(|@import|\\x[0-9a-f]{2}|\\u[0-9a-f]{4}|([a-z][a-z0-9\s\x00-\x1F\x7F]{0,100}:)/gi, n = /[\s\x00-\x1F\x7F]+/g, // eslint-disable-line no-control-regex
          h = /[<&]/, m = /\/\*[\s\S]*?\*\//g, e = /[\s,]+$/, b = new Set(["javascript:", "vbscript:", "data:"]); let t = null; return s => {
            if (typeof s !== "string") { return "" } s = s.trim(); if (!s) { return "" }
            if (h.test(s)) { try { if (!t) { t = cE("template") } t.innerHTML = tTP.createHTML(s); s = t.content.textContent || ""; t.content.textContent = "" } catch { return "" } }
            const filter = (k, p) => { if (!p) { return "" } let r = n.test(p) ? p.replace(n, "") : p; if (/[A-Z]/.test(r)) { r = r.toLowerCase() } if (b.has(r)) { return "" } return k };
            if (!s) { return "" } s = s.replace(m, "").replace(c, filter); return s.replace(e, "");
          };
      })();

      void (async function InitEnvironment(navigatorInfo) {
        let currentTheme = "light"; const { engine, engineVersion, brand, creditEngine, os, source } = await getBrowserNavigatorInfo(navigatorInfo),
          IS_REAL_BLINK = creditEngine === "Blink", IS_REAL_GECKO = creditEngine === "Gecko", IS_REAL_WEBKIT = creditEngine === "WebKit",
          IS_CHEAT_UA = source !== "ext" && (engine !== creditEngine || (IS_REAL_BLINK && validateUserAgent(navigator.userAgentData))),
          SERVICE_BUS = {
            __proto__: null, _services: new Map(), _queries: [],
            register(serviceName, serviceObject) {
              this._services.set(serviceName, serviceObject);
              this._queries = Array_filter(this._queries, query => { if (query.target === serviceName) { query.resolve(serviceObject); return false } return true });
            },
            unregister(serviceName) {
              if (!this._services.has(serviceName)) { return false } const service = this._services.get(serviceName);
              if (typeof service.destroy === "function") { try { service.destroy() } catch (e) { error(e.message) } } this._services.delete(serviceName); return true;
            },
            get(serviceName, timeout = 2e3) {
              return new Promise(resolve => {
                if (this._services.has(serviceName)) { resolve(this._services.get(serviceName)); return }
                let timer = null; const entry = { target: serviceName, resolve: service => { clearTimeout(timer); resolve(service) } };
                timer = setTimeout(() => { this._queries = Array_filter(this._queries, q => q !== entry); resolve(null) }, timeout); Array_push(this._queries, entry);
              });
            },
            destroy() { this._services.clear() }
          };

        void (async function InitData(bus) {
          const INITIAL_CONFIG = {
            _CONFIGURE_: { isBackupFunction: true, isPreview: true, isFontsize: false, isFixViewport: false, isHotkey: true, isCloseTip: false, maxPersonalSites: 200, rebuild: void 0, curVersion: void 0, globalDisable: false, isCustomMono: false },
            _FONTS_SET_: {
              fontSelect: IS_REAL_WEBKIT || (!IS_CHEAT_UA && os === "macOS") ? `'PingFang SC'` : `'Microsoft YaHei UI'`, fontFace: true, fontSmooth: true,
              fontSize: 1.0, fixViewport: false, fontStroke: IS_REAL_GECKO ? 0.03 : IS_REAL_BLINK ? 0.015 : 0.05, fixStroke: IS_REAL_BLINK, fixShadow: false,
              lazyload: false, selection: true, fontShadow: IS_REAL_GECKO ? 0.55 : IS_REAL_BLINK ? 0.75 : 0.45, shadowColor: "#7C7C7CDD", renderCanvas: false,
              fontCSS: `:not(i[class],head *):not(mjx-container *,.katex *):not([class*='glyph']):not([class*='symbols' i]):not([class*='icon' i]):not([class*='fa-']):not([class*='vjs-'])`,
              fontEx: `[class*='watermark' i],.textLayer *,pre,pre *,code,code *`
            }, _CUSTOM_FONTLIST_: [], _CUSTOM_PROPERTY_: Object_create(null), _DOMAINS_FONTS_SET_: [], _EXCLUDE_SITES_: ["127.0.0.1", "localhost"],
            _FONTOVERRIDE_DEF_: ["Arial", "FangSong", "Georgia", "HanHei SC", "Helvetica", "Helvetica Neue", "KaiTi", "Microsoft YaHei", "MingLiU", "NSimSun", "Noto Sans", "Open Sans", "PMingLiU", "PingFangHK-Medium", "PingFangHK-Regular", "PingFangSC-Medium", "PingFangSC-Regular", "PingFangSC-Semibold", "Roboto", "RobotoDraft", "SF Pro SC", "Segoe UI", "SimHei", "SimSun", "Tahoma", "Ubuntu", "Verdana", "{仿宋}", "{宋体}", "{微軟正黑體}", "{微软雅黑}", "{楷体}", "{黑体}"],
            _FONTSCALE_DEF_: { "www.ithome.com": { Element: ["scrollHeight"] }, "live.bilibili.com": { HTMLElement: ["offsetHeight"] }, ".smzdm.com": { Element: ["clientWidth"] } },
            _MONOSPACED_FEATURE_: "", _MONOSPACED_FONTLIST_: "", _MONOSPACED_SITERULES_: [], _REMOTERENDERRULESDATA_: [], _FONTCHECKLIST_: []
          }, dataManager = new DataManager(INITIAL_CONFIG); await dataManager.init(); bus.register("InitData", { dataManager, INIT_VALUE: INITIAL_CONFIG._FONTS_SET_ });
        })(SERVICE_BUS);

        const { dataManager, INIT_VALUE } = await SERVICE_BUS.get("InitData"), cipher = new SecureCipherSuite(decrypt(SECURE_KEY)), styleManager = new SmartStyleManager(),
          init = await cipher.inspect(SOURCE, RC2, dataManager), { defaultKey, localKey, privateKey } = init.search(null) ?? Object_create(null),
          productValue = defaultKey * localKey * privateKey; SERVICE_BUS.unregister("InitData"); if (!productValue) { automatedInitializationNotice(); return } initRootMarker();
        if (await SERVICE_BUS.get("hasRootMarker")) { GMaddMenu(`\ud83d\udea8 ${i18n.t("Redundant")}`, reload); return } SERVICE_BUS.unregister("hasRootMarker");

        void (async function consoleWelcome(bus) {
          if (!CUR_WINDOW_TOP) { return } if (compareVersion({ BLINK: 90, GECKO: 84, WEBKIT: 15.4, more: false })) { error(i18n.t("Incompatible")); return }
          const [configure, savedData] = await Promise.all([dataManager.get(CONFIGURE), bus.get("ProcessSavedData")]), { excludeIndex, value: { domainIndex } } = savedData;
          if (GMcontextMode) { warn(i18n.t("RunMode")) } if (excludeIndex !== -1) { info(i18n.t("ToRerender", { h: CUR_HOST_NAME })); return }
          if (configure.globalDisable && domainIndex === -1) { info(i18n.t("GlobalDisable")); return } info(`${i18n.t("ModuleLoaded", { v: GMscritpVersion })}`);
        })(SERVICE_BUS);

        void (async function ProcessSavedData(bus) {
          const Promises = [dataManager.get(EXCLUDESITES), dataManager.get(FONTSET), dataManager.get(DOMAINFONTSET), dataManager.get(CONFIGURE), dataManager.get(REMOTERENDERDATA)],
            [excludeSites, defaultFont, domainFont, configure, correctedFont] = await Promise.all(Promises), excludeIndex = updateExsitesIndex(excludeSites),
            isEditorBlock = matchEditorBlock(); let fontValue = null, domainValue = null, domainIndex = -1; if (defaultFont) { fontValue = { ...defaultFont, isEditorBlock } }
          if (domainFont) { domainIndex = updateDomainsIndex(domainFont); domainValue = domainIndex !== -1 ? { ...defaultFont, ...domainFont[domainIndex], isEditorBlock } : null }
          const currentValue = domainValue || fontValue, incompatible = compareVersion({ GECKO: 126, more: null }) || isRawContent,
            checkFontSize = !incompatible && !currentValue.isEditorBlock && configure.isFontsize, fontData = {
              fontSelect: toSafeString(currentValue.fontSelect), fontFace: Boolean(currentValue.fontFace ?? true),
              fontSmooth: Boolean(currentValue.fontSmooth ?? true), fontSize: checkFontSize ? Number(currentValue.fontSize) : 1.0,
              fixViewport: Boolean(checkFontSize && configure.isFixViewport && Number(currentValue.fontSize) !== 1 && currentValue.fixViewport),
              fontStroke: Number(currentValue.fontStroke), fixStroke: Boolean(currentValue.fontStroke && (currentValue.fixStroke ?? IS_REAL_BLINK)),
              selection: Boolean(currentValue.fontStroke && currentValue.fixStroke && (currentValue.selection ?? true)),
              lazyload: Boolean(currentValue.fontStroke && currentValue.fixStroke && currentValue.lazyload), fontShadow: Number(currentValue.fontShadow),
              fixShadow: Boolean(currentValue.fontStroke && currentValue.fixStroke && currentValue.fontShadow && currentValue.fixShadow),
              renderCanvas: !isRawGreasemonkey && currentValue.fontFace && Boolean(currentValue.renderCanvas), shadowColor: toSafeString(currentValue.shadowColor),
              fontCSS: toSafeString(currentValue.fontCSS), fontEx: toSafeString(currentValue.fontEx), isEditorBlock: currentValue.isEditorBlock, __proto__: null
            }, ruleManager = new RenderRuleManager(CUR_HOST_NAME), parsedValue = ruleManager.applyRules(correctedFont, safeDeepClone(fontData)),
            themeDetector = new ThemeDetector({ useCache: true, onThemeChange: theme => { setAttribute(document.documentElement, LOAD_ONCE, theme) } });
          bus.register("ProcessSavedData", { value: { domainIndex, parsedValue, ...fontData }, excludeIndex, ruleManager, themeDetector });
          if ((parsedValue.fontStroke || parsedValue.fontShadow) && parsedValue.selection) { currentTheme = themeDetector.init() }
          function matchEditorBlock() {
            const blacklist = ["addon.tencentsuite.com", "developer.mozilla.org", "docs.google.com", "docs.qq.com", "feishu.cn", "fonts.google.com", "github.com", "github.dev", "github1s.com", "image.baidu.com", "kdocs.cn", "leetcode.cn", "leetcode.com", "mail.google.com", "newassets.hcaptcha.com", "note.youdao.com", "notion.com", "notion.site", "notion.so", "regex101.com", "scriptcat.org", "shimo.im", "support.google.com", "tool.lu", "vscode.dev", "weread.qq.com", "wolai.com", "wqxuetang.com", "xiezuocat.com", "youtube.com", "yuque.com"];
            return Array_some(blacklist, hostname => CUR_HOST_NAME.endsWith(hostname));
          }
        })(SERVICE_BUS);

        void (async function OutputRenderData(bus) {
          let customRulesCache = null; const [configure, savedData] = await Promise.all([dataManager.get(CONFIGURE), bus.get("ProcessSavedData")]),
            INITIAL_REMARKS = { emoji: `'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','Android Emoji',EmojiSymbols,'EmojiOne Mozilla','Twemoji Mozilla','Segoe UI Symbol','Noto Color Emoji Compat','Font Awesome 6 Pro','Font Awesome 5 Pro',FontAwesome,emoji,codicon,iconfont,icomoon,IcoFont,bwi-font,fontello,themify,bootstrap-icons,'Segoe Fluent Icons','Material Icons','Material Icons Extended','Material Icons Outlined','Material Icons Round','Material Icons Sharp','Material Icons Two Tone','Google Material Icons','Google Material Icons Filled','Material Symbols Outlined','Material Symbols Round','Material Symbols Rounded','Material Symbols Sharp','Google Symbols'`, monospaced: `'Operator Mono Lig','Source Code Pro','JetBrains Mono',Inconsolata,Monaco,'Roboto Mono','Ubuntu Mono','Anonymous Pro','Droid Sans Mono',Menlo,Consolas`, monospacedFeature: `"liga" 0,"tnum","zero"` },
            FONT_CHECK_LIST = new Set([{ ch: "微软雅黑", en: "Microsoft YaHei UI", ps: "MicrosoftYaHeiUI" }, { ch: "微軟正黑體", en: "Microsoft JhengHei", ps: "MicrosoftJhengHeiRegular" }, { ch: "苹方-简", en: "PingFang SC", ps: "PingFangSC-Regular" }, { ch: "蘋方-繁", en: "PingFang TC", ps: "PingFangTC-Regular" }, { ch: "蘋方-港", en: "PingFang HK", ps: "PingFangHK-Regular" }, { ch: "更纱黑体 SC", en: "Sarasa Gothic SC", ps: "Sarasa-Gothic-SC-Regular" }, { ch: "更紗黑體 TC", en: "Sarasa Gothic TC", ps: "Sarasa-Gothic-TC-Regular" }, { ch: "冬青黑体简", en: "Hiragino Sans GB", ps: "HiraginoSansGB-Regular" }, { ch: "兰亭黑-简", en: "Lantinghei SC", ps: "FZLTTHK--GBK1-0" }, { ch: "OPPO Sans", en: "OPPO Sans", ps: "OPPOSans" }, { ch: "霞鹜文楷", en: "LXGW WenKai", ps: "LXGWWenKai-Regular" }, { ch: "鸿蒙黑体", en: "HarmonyOS Sans SC", ps: "HarmonyOS_Sans_SC" }, { ch: "浪漫雅圆", en: "LMYY", ps: "浪漫雅圆" }, { ch: "思源黑体", en: "Source Han Sans SC", ps: "SourceHanSansSC-Regular" }, { ch: "思源宋体", en: "Source Han Serif SC", ps: "SourceHanSerifSC-Regular" }, { ch: "汉仪旗黑", en: "HYQiHei", ps: "HYQiHei-EES" }, { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei", ps: "WenQuanYiMicroHei" }, { ch: "文泉驿正黑", en: "WenQuanYi Zen Hei", ps: "WenQuanYiZenHei" }, { ch: "方正舒体", en: "FZShuTi", ps: "FZSTK--GBK1-0" }, { ch: "方正姚体", en: "FZYaoti", ps: "FZYTK--GBK1-0" }, { ch: "华文仿宋", en: "STFangsong", ps: "STFangsong" }, { ch: "华文楷体", en: "STKaiti", ps: "STKaiti" }, { ch: "华文细黑", en: "STXihei", ps: "STXihei" }, { ch: "华文彩云", en: "STCaiyun", ps: "STCaiyun" }, { ch: "华文琥珀", en: "STHupo", ps: "STHupo" }, { ch: "华文新魏", en: "STXinwei", ps: "STXinwei" }, { ch: "华文隶书", en: "STLiti", ps: "STLiti" }, { ch: "华文行楷", en: "STXingkai", ps: "STXingkai" }, { ch: "雅痞-简", en: "Yuppy SC", ps: "YuppySC-Regular" }, { ch: "圆体-简", en: "Yuanti SC", ps: "YuantiSC-Regular" }, { ch: "手书体", en: "ShouShuti", ps: "ShouShuti" }, { ch: "幼圆", en: "YouYuan", ps: "YouYuan" }]),
            prefix = getPrefix(), excludeIndex = savedData.excludeIndex, renderData = await getRenderData(savedData.value.parsedValue);
          bus.register("OutputRenderData", { get data() { return renderData }, get fontlist() { return FONT_CHECK_LIST }, getFullFontlist, updateMatrix, getRenderData });
          async function getRenderData(thatValue) {
            const renderDataPromises = [dataManager.get(FONTOVERRIDE), dataManager.get(CUSTOMPROPERTY), dataManager.get(MONOFONTLIST), dataManager.get(MONOFEATURE)],
              [fontOverride, customProperty, monoFontlist, monoFeature] = await Promise.all(renderDataPromises),
              fontList = thatValue.fontSelect.replace(/["']/g, "").split(","), activeFont = fontList[1] ?? fontList[0] ?? "",
              enableFontFace = Boolean(thatValue.fontFace), enableSmoothing = Boolean(thatValue.fontSmooth), lazyload = thatValue.lazyload,
              zoomRatio = getZoomValue(excludeIndex === -1 && configure.isFontsize, parseFloat(thatValue.fontSize)), strokeValue = parseFloat(thatValue.fontStroke),
              shadowValue = parseFloat(thatValue.fontShadow), shadowColor = String(thatValue.shadowColor), zoomCss = zoomRatio !== 1 ? generateZoomCss(zoomRatio) : "",
              fontFaceCss = enableFontFace && activeFont ? await generateFontFaceCss(fontList, activeFont, fontOverride) : "",
              geckoSmooth = IS_REAL_GECKO && os === "macOS" ? "-moz-osx-font-smoothing:grayscale;" : "", macSmooth = os === "macOS" ? "-webkit-font-smoothing:antialiased;" : "",
              smoothingCss = enableSmoothing ? `font-feature-settings:var(--fr-font-feature,unset);font-variant:var(--fr-font-variant,unset);text-rendering:var(--fr-render-text,unset);shape-rendering:var(--fr-render-shape,unset);font-optical-sizing:auto;font-kerning:auto;${geckoSmooth}${macSmooth}` : "",
              strokeCss = strokeValue > 0 && strokeValue <= 1.0 ? "-webkit-text-stroke:var(--fr-font-stroke);" : "", strokeText = `${strokeCss ? strokeValue : 0}px currentcolor`,
              shadowCss = shadowValue > 0 && shadowValue <= 4 ? "text-shadow:var(--fr-font-shadow);" : "", shadowText = getTextShadowCss(shadowValue, shadowColor),
              excludeRules = `${shadowCss ? "text-shadow:none!important;" : ""}${strokeCss ? "-webkit-text-stroke:0px transparent!important;" : ""}`,
              includeSelectors = String(thatValue.fontCSS), excludeSelectors = String(thatValue.fontEx), isEditorBlocked = Boolean(thatValue.isEditorBlock),
              textSelection = `:is(:not(${excludeSelectors}))::selection{color:currentcolor!important;background:var(--fr-selection)!important;${excludeRules}}`,
              selectionCss = thatValue.selection && (strokeCss || shadowCss) ? textSelection : "", isCustomMono = configure.isCustomMono,
              cssExclude = excludeSelectors && (shadowCss || strokeCss) ? `${prefix}:is(${excludeSelectors}){${excludeRules}}` : "",
              codeFontsCss = await getMonospaceCss(excludeSelectors, enableFontFace, isCustomMono, false),
              shadowRootCodeCss = await getMonospaceCss(excludeSelectors, enableFontFace, isCustomMono, true), shadowRootCss = selectionCss + shadowRootCodeCss,
              boldSelector = `.${BOLD_FIXER_ATTR},[${BOLD_FIXER_ATTR}]`, blinkShadowFix = thatValue.fontShadow && thatValue.fixShadow ? "text-shadow:var(--fr-fix-shadow)!important;" : "",
              makeBoldFixCss = shadow => `${boldSelector}{font-synthesis:weight style!important;-webkit-text-stroke:var(--fr-fix-stroke)!important;${shadow ?? ""}}`,
              boldFixCss = thatValue.fontStroke && thatValue.fixStroke ? makeBoldFixCss(blinkShadowFix) : "", discuzFlag = localStorage.getItem(IS_DISCUZ),
              isFixInputEnabled = flag => flag === "true" || (!flag && /;?\s*\w+_last(?:visi|ac)t=\d{10}(?:;|%)/.test(document.cookie) && !localStorage.setItem(IS_DISCUZ, true)),
              discuzIcon = isFixInputEnabled(discuzFlag) ? ":not(.nvhm,[class^='ico_'],[class^='comiis_'],[class^='notice_'],[class^='prompt_'])" : "",
              fontFamilyCss = enableFontFace ? `font-family:var(--fr-font-family),var(--fr-font-basefont),var(--fr-font-emoji);` : "",
              fontFamilyStyle = fontFamilyCss ? `${prefix}::placeholder,${prefix}:is(${includeSelectors}${discuzIcon}){${fontFamilyCss}}` : "",
              fontAdvancedStyle = `${prefix}:is(${includeSelectors}){${shadowCss}${strokeCss}${smoothingCss}}`,
              fontStyle = `${fontFaceCss}${zoomCss}${fontFamilyStyle}${fontAdvancedStyle}${selectionCss}${cssExclude}${codeFontsCss}`,
              firefoxInputCss = `input:is([type='text'],[type='password'],[type='search'],[type='email'],[type='tel'],[type='url'],[type='number']),input:not([type]){font-family:serif!important}`,
              firefoxInputFix = IS_REAL_GECKO && enableFontFace && isFixInputEnabled(discuzFlag) ? firefoxInputCss : "",
              { variant, feature } = customProperty, customFeature = `${feature ? `--fr-font-feature:${feature};` : ""}${variant ? `--fr-font-variant:${variant};` : ""}`,
              monoFontVar = isCustomMono ? `--fr-mono-font:${monoFontlist || INITIAL_REMARKS.monospaced};` : "",
              monoFeatureVar = isCustomMono ? `--fr-mono-feature:${monoFeature || INITIAL_REMARKS.monospacedFeature};` : "",
              monoShadowVar = isCustomMono ? `--fr-mono-shadow:0 0 0 #adadad2a;` : "", sharpRender = thatValue.renderCanvas ? `--fr-render-shape:geometricPrecision;` : "",
              monoFallbackVar = isCustomMono ? `--fr-mono-fallback:ui-monospaced,'Courier New','Liberation Mono',Courier;` : "",
              rootCss = `:root{--fr-selection:#0969da33;--fr-font-basefont:system-ui,-apple-system,BlinkMacSystemFont,sans-serif;--fr-font-emoji:${INITIAL_REMARKS.emoji};${customFeature}--fr-font-family:${thatValue.fontSelect};--fr-font-fontscale:${zoomRatio};--fr-font-shadow:${shadowText};--fr-font-stroke:${strokeText};--fr-fix-shadow:none;--fr-no-stroke:0px transparent;--fr-fix-stroke:var(--fr-no-stroke);--fr-render-text:optimizeLegibility;${sharpRender}${monoFontVar}${monoFallbackVar}${monoShadowVar}${monoFeatureVar}}:root[${LOAD_ONCE}="light"]{--fr-selection:#0969da33}:root[${LOAD_ONCE}="dark"]{--fr-selection:#1f71eb97}`,
              isEmptyConfig = !enableFontFace && !enableSmoothing && !shadowCss && !strokeCss && zoomRatio === 1,
              isCurrentSiteAllowed = excludeIndex === -1 && !isEmptyConfig, finalStyle = isCurrentSiteAllowed ? `${rootCss}${firefoxInputFix}${fontStyle}` : "";
            return { isCurrentSiteAllowed, activeFont, shadowValue, shadowColor, lazyload, finalStyle, boldSelector, isEditorBlocked, shadowRootCss, boldFixCss };
          }
          async function matchByPostScriptName(checkFontName) {
            const fontCheckList = await getFullFontlist(); for (let i = 0, l = fontCheckList.length; i < l; ++i) {
              const fontname = fontCheckList[i]; if (fontname.en === checkFontName && fontname.ps) { return fontname.ps }
            } return checkFontName;
          }
          function getFontRewriteData(fontArray) {
            if (!Array_isArray(fontArray)) { return [] } const result = []; for (let i = 0, l = fontArray.length; i < l; ++i) {
              const font = fontArray[i]; if (typeof font !== "string") { continue } const chsFont = font.match(/^{([^{}]+)}$/);
              if (chsFont) { Array_push(result, toUnicodeEscapes(chsFont[1])) } else { Array_push(result, font) }
            } return result;
          }
          async function generateFontFaceCss(fontArray, fontName, overrideData) {
            const postscriptName = await matchByPostScriptName(fontName), fontList = getFontRewriteData(overrideData),
              fontSet = new Set(fontArray), cssParts = []; for (let i = 0, l = fontList.length; i < l; ++i) {
                const font = fontList[i]; if (!fontSet.has(font)) { Array_push(cssParts, `@font-face{font-family:"${font}";src:local("${postscriptName}");}`) }
              } return Array_join(cssParts, "");
          }
          async function getMonospaceCss(text, rewritable, allowCustom, isShadow) {
            if (!allowCustom) { return "" } if (!customRulesCache) {
              const customRules = await dataManager.get(MONOSITERULES), ruleRegex = /@((?:[\w[\]\-.:]+\|?)+)##((?![^@]+##)[\w\-*.#:+>()~[\]=^$|,' ]+)/,
                allRules = ["@github.com##textarea,.blob-num,.blob-num *,.blob-code,.blob-code *,.react-code-text,.react-code-text *", ...customRules], aggregated = [];
              for (const rule of allRules) {
                const match = ruleRegex.exec(rule); if (!match) { continue } const [, domains, selectors] = match, domainArray = domains.split("|"),
                  hostMatches = Array_some(domainArray, domain => CUR_HOST.endsWith(domain)); if (hostMatches) { Array_push(aggregated, ...selectors.split(",")) }
              } customRulesCache = aggregated;
            } const keywords = ["pre", "code"], matchedSelectors = [];
            for (const word of keywords) { if (new RegExp(`\\b${word}\\b`, "i").test(text)) { Array_push(matchedSelectors, word, `${word} *`) } }
            const editorSelectors = [".ace_editor *", ".monaco-editor *", ".cm-editor *", ".CodeMirror *", ".code", ".code *"],
              uniqueSelectors = Array_join(uniq([...matchedSelectors, ...editorSelectors, ...customRulesCache]), ","),
              fallbackFont = rewritable ? "var(--fr-mono-fallback),var(--fr-font-family)," : "ui-monospaced,monospaced,", fontStack = `${fallbackFont}var(--fr-font-emoji)`,
              userSelect = IS_REAL_WEBKIT ? "-webkit-user-select:text!important" : "user-select:text!important", prefixScope = isShadow ? "" : prefix;
            return `${prefixScope}:is(${uniqueSelectors}):not([class*='icon' i],[class*='symbols' i],md-icon){font-family:var(--fr-mono-font),${fontStack}!important;text-shadow:var(--fr-mono-shadow)!important;-webkit-text-stroke:var(--fr-no-stroke)!important;font-feature-settings:var(--fr-mono-feature, unset)!important;${userSelect}}`;
          }
          function getPrefix() {
            const rootID = CSS.escape(document.documentElement.id ?? "");
            return !rootID || (!CUR_WINDOW_TOP && (compareVersion({ BLINK: 130, more: null }) || isRawGreasemonkey)) ? `:root ` : `:root#${rootID} `;
          }
          function generateZoomCss() {
            const cssText = compareVersion({ GECKO: 126, more: null }) ? "" : `@supports(zoom:100%){${prefix}body{zoom:var(--fr-font-fontscale)!important}}`;
            return CUR_WINDOW_TOP || compareVersion({ BLINK: 128, GECKO: 138, more: null }) ? cssText : "";
          }
          async function getFullFontlist() { const fontList = await dataManager.get(CUSTOMFONTLIST), safeFontlist = safeDeepClone(fontList); return getUniqueFontlist([...FONT_CHECK_LIST, ...safeFontlist]) }
          function updateMatrix(newValue) { scaleMatrix.prev = scaleMatrix.cur; scaleMatrix.cur = newValue || 1; return scaleMatrix.cur }
          function getZoomValue(caniuse, zoom) { const isValid = CUR_WINDOW_TOP && caniuse && zoom >= 0.8 && zoom <= 2.5; return Number(updateMatrix(isValid ? zoom : 1.0)) }
          function getTextShadowCss(size, color) { if (size <= 0 || size > 4) { return "inherit" } return `0 0 ${size}px ${parseColor(color).toLowerCase()}` }
          function parseColor(color) { if (/^(?:#ffffffff|currentcolor)$/i.test(color)) { return "currentcolor" } return color.toUpperCase() }
        })(SERVICE_BUS);

        void (async function FontRendering(bus) {
          const [savedData, output, configure] = await Promise.all([bus.get("ProcessSavedData"), bus.get("OutputRenderData"), dataManager.get(CONFIGURE)]),
            { isCurrentSiteAllowed, activeFont, finalStyle, boldFixCss, shadowRootCss, lazyload, boldSelector, shadowValue, shadowColor } = output.data,
            { fontStroke, fixStroke, fontSelect, fontFace, renderCanvas } = savedData.value.parsedValue, domainIndex = savedData.value.domainIndex,
            enabled = fontStroke && fixStroke, ultimateBold = new UltimateBoldProcessor(enabled, shadowRootCss, boldFixCss, boldSelector, lazyload, styleManager),
            frameSync = new FrameSyncManager(styleManager, ultimateBold, compareVersion), hoverDetector = new BoldHoverDetector(boldFixCss, lazyload, styleManager),
            options = { font: fontSelect, renderFont: activeFont, radius: shadowValue, color: shadowColor }, canvasFont = new CanvasFontInterceptor(options);
          if (!isRawGreasemonkey) { frameSync.start() } bus.register("FontRendering", { ultimateBold, frameSync }); if (!isCurrentSiteAllowed) { return }
          if (configure.globalDisable && domainIndex === -1) { return } const insertStyle = () => { styleManager.insert(MAIN_STYLE_ID, finalStyle, { type: MAIN_STYLE_TYPE }) },
            onHeadReady = () => { insertStyle(); ultimateBold.init(); if (enabled) { hoverDetector.start() } if (fontFace && renderCanvas) { canvasFont.deploy() } };
          if (document.head) { onHeadReady(); return } const observer = new MutationObserver((_, obs) => { if (document.head) { obs.disconnect(); onHeadReady() } });
          observer.observe(document.documentElement, { childList: true }); addListener($, "load", insertStyle, { once: true });
        })(SERVICE_BUS);

        void (async function FixScaleOffset(bus) {
          const [savedData, output, configure] = await Promise.all([bus.get("ProcessSavedData"), bus.get("OutputRenderData"), dataManager.get(CONFIGURE)]),
            { fontSize, fixViewport } = savedData.value.parsedValue, domainIndex = savedData.value.domainIndex, viewportFixer = new ViewportUnitScaler(fontSize),
            offsetAdjuster = new CoordinateOffsetAdjuster(), checkEnv = CUR_WINDOW_TOP || (!compareVersion({ BLINK: 128 }) && !compareVersion({ GECKO: 126, more: null })),
            props = await getScaleOffsetProporty(), { isFontsize, isFixViewport, globalDisable } = configure, isCurrentSiteAllowed = output.data.isCurrentSiteAllowed;
          bus.register("FixScaleOffset", matrix => { if (checkEnv) { offsetAdjuster.adjust({ ...matrix, props }) } });
          if (globalDisable && domainIndex === -1) { return } if (!isCurrentSiteAllowed) { return } if (!isFontsize || fontSize === 1) { return }
          if (checkEnv) { offsetAdjuster.adjust({ ...scaleMatrix, props }) } if (!isRawContent && isFixViewport && fixViewport) { viewportFixer.start() }
          async function getScaleOffsetProporty() {
            const offset = await dataManager.get(FONTSCALEFIX); for (const key of Object_keys(offset)) {
              if (!key || typeof key !== "string") { continue } const host = key.replace(/:(?:80|443)$/, "");
              if (CUR_HOST.endsWith(host)) { const v = offset[key]; return { window: uniq(v.Window), element: uniq(v.Element), html: uniq(v.HTMLElement) } }
            } return { window: [], element: [], html: [] };
          }
        })(SERVICE_BUS);

        void (async function RenderBlankIframes(bus) {
          const [savedData, output, rendering] = await Promise.all([bus.get("ProcessSavedData"), bus.get("OutputRenderData"), bus.get("FontRendering")]),
            { boldFixCss, finalStyle } = output.data, ultimateBold = rendering.ultimateBold, { fontStroke, fixStroke } = savedData.value.parsedValue,
            useBoldFixer = fontStroke && fixStroke, iframeCallbck = function (iframe, doc, win) {
              if (!iframe || isFrameHidden(iframe)) { return } if (doc.head) {
                styleManager.insert(MAIN_STYLE_ID, convertCSS(doc, finalStyle, compareVersion), { target: iframe, type: MAIN_STYLE_TYPE });
                if (useBoldFixer) { styleManager.insert(`${BOLD_STYLE_ID}${randomString(8, "alpha")}`, boldFixCss, { target: iframe, type: BOLD_STYLE_TYPE }) }
              } if (doc.body) {
                if (!useBoldFixer || !ultimateBold) { return } let processTimer;
                const processFn = isReEval => { const nodes = gT("*", doc.body); if (nodes.length > 0) { ultimateBold.processBatch(nodes, isReEval) } },
                  innerObserver = new MutationObserver(mutationsList => {
                    let shouldProcess = false; for (const mutation of mutationsList) {
                      if (mutation.type === "childList" && mutation.addedNodes.length > 0) { shouldProcess = true; break }
                      if (mutation.type === "attributes") {
                        if (mutation.attributeName === BOLD_FIXER_ATTR) { continue } const target = mutation.target;
                        if (mutation.attributeName === "class" && target.classList?.contains(BOLD_FIXER_ATTR)) { continue } shouldProcess = true; break;
                      }
                    } if (shouldProcess) { clearTimeout(processTimer); processTimer = setTimeout(() => processFn(true), 50) }
                  }); processFn(false); innerObserver.__is_fr_reading__ = true; innerObserver.observe(doc.body, { childList: true, subtree: true, attributes: true });
                addListener(win, "pagehide", e => { if (!e.persisted) { innerObserver.disconnect(); clearTimeout(processTimer) } }, { once: true });
              }
            }, blankIframe = new BlankIframeManager(iframeCallbck); blankIframe.start();
        })(SERVICE_BUS);

        void (async function asyncRenderIframes(bus) {
          const [savedData, output, configure] = await Promise.all([bus.get("ProcessSavedData"), bus.get("OutputRenderData"), dataManager.get(CONFIGURE)]),
            { finalStyle, isCurrentSiteAllowed } = output.data, domainIndex = savedData.value.domainIndex, globalDisable = configure.globalDisable;
          if (isRawGreasemonkey) {
            const isProhibited = (globalDisable && domainIndex === -1) || !isCurrentSiteAllowed; if (isProhibited) { return }
            const cssText = parseCsstextForIframe(finalStyle), processIframe = i => {
              if (hasAttribute(i, FRAME_STATUS)) { return } if (isFrameHidden(i)) { setAttribute(i, FRAME_STATUS, "ignore"); return } try {
                const activeRender = () => { styleManager.insert(MAIN_STYLE_ID, cssText, { target: i, type: MAIN_STYLE_TYPE }); setAttribute(i, FRAME_STATUS, "succeed") };
                if (i._loadController) { i._loadController.abort() } const controller = new AbortController(); i._loadController = controller;
                setAttribute(i, FRAME_STATUS, "pendingReset"); addListener(i, "load", activeRender, { signal: controller.signal });
              } catch { setAttribute(i, FRAME_STATUS, "failed") }
            }, onBodyReady = () => {
              const ifs = gT("iframe", document.body), l = ifs.length; if (l > 0) { for (let i = 0; i < l; ++i) { processIframe(ifs[i]) } }
              const observer = new MutationObserver(mutations => {
                for (const mutation of mutations) {
                  const { type, target, addedNodes } = mutation; if (type === "attributes" && target.nodeName === "IFRAME") {
                    if ((target.src && target.src.toLowerCase() !== "about:blank") || target.srcdoc) { removeAttribute(target, FRAME_STATUS); processIframe(target) }
                  } if (type !== "childList" || addedNodes.length === 0) { continue } for (let i = 0, l = addedNodes.length; i < l; ++i) {
                    const node = addedNodes[i]; if (node.nodeName === "IFRAME") { processIframe(node) } else
                      if (node.childElementCount > 0) { const ifs = gT("iframe", node), l = ifs.length; if (l > 0) { for (let i = 0; i < l; ++i) { processIframe(ifs[i]) } } }
                  }
                }
              }); observer.observe(document.body, { childList: true, subtree: true, attributeFilter: ["src", "srcdoc", "style"] });
            }; if (document.body) { onBodyReady(); return } const html = document.documentElement,
              observer = new MutationObserver((_, obs) => { if (document.body) { obs.disconnect(); onBodyReady() } }); observer.observe(html, { childList: true });
          } else if (!CUR_WINDOW_TOP) {
            let fallbackTimer = null; const observer = new MutationObserver((mutations, observer) => {
              for (const mutation of mutations) {
                let hasHtml = false; const { addedNodes } = mutation; for (let i = 0, l = addedNodes.length; i < l; ++i) { if (addedNodes[i].nodeName === "HTML") { hasHtml = true; break } }
                if (!hasHtml) { continue } observer.disconnect(); if (fallbackTimer) { clearTimeout(fallbackTimer) }
                styleManager.insert(MAIN_STYLE_ID, convertCSS(document, finalStyle, compareVersion), { type: MAIN_STYLE_TYPE }); return;
              }
            }); observer.observe(document, { childList: true }); fallbackTimer = setTimeout(() => { observer.disconnect() }, 3e3);
          }
        })(SERVICE_BUS);

        void (async function MonitorVersion(bus) {
          if (!CUR_WINDOW_TOP) { return } const [configure, openSimpleDialog] = await Promise.all([dataManager.get(CONFIGURE), bus.get("simpleDialog")]),
            savedVersion = configure?.curVersion, languagePacks = {
              "en-US": { NewTitle: "Welcome & Tips", NewContent: `Built-in defaults are applied on first launch. <strong>initial rendering may not be perfect</strong>. Please adjust the parameters in "Font Rendering Settings" to get the best visual results for your browser and monitor.`, UpdateTitle: "🎉 New Version Ready!", UpdateContent: "<p>A new version is available! This update brings new features, performance optimizations, and bug fixes for a smoother experience.</p><p>Click the link below to view the changelog.</p>", Changelog: "[View v{version} Changelog]", CloseTips: "Never show this tip again", CloseTipTitle: "Update Notice Disabled", CloseTipContent: "<p>You will no longer receive new version prompt.</p><p>To get feature updates in the future, you can re-enable this notification at any time in '<strong>Advanced Core Settings</strong>'.</p>", RemoteDone: "Cloud data synced successfully ({length})", Hash: "index_en.html#font-rendering-customized-font-renderinguserjs" },
              "zh-CN": { NewTitle: "欢迎使用与温馨提示", NewContent: "首次运行将使用内置默认配置进行渲染，<strong>若初始视觉效果不完美属正常现象</strong>。请根据您的显示器和浏览器偏好，在『字体渲染设置』中调整参数以获得最佳视觉效果。", UpdateTitle: "🎉 恭喜您，新版本已准备就绪！", UpdateContent: "<p>我们为您带来了新的版本更新！本次升级包含新功能、性能优化与问题修复，旨在为您提供更流畅的使用体验。</p><p>欢迎点击下方链接查看详细更新日志。</p>", Changelog: "[查看 v{version} 更新日志]", CloseTips: "不再显示此更新提示", CloseTipTitle: "更新提示已关闭", CloseTipContent: "<p>系统此后将不再主动为您推送新版本的更新提示。</p><p>若日后需要重新获取新功能与优化动态，可随时前往“<strong>高级核心配置设置</strong>”中重新开启。</p>", RemoteDone: "云端数据同步成功 ({length})", Hash: "index.html#字体渲染自用脚本-font-renderinguserjs", Close: "关闭" },
              "zh-TW": { NewTitle: "歡迎使用與溫馨提示", NewContent: "首次執行將使用內建預設設定進行轉譯，<strong>若初始視覺效果不完美屬正常現象</strong>。請根據您的顯示器與瀏覽器偏好，在「字型渲染設定」中調整參數以獲得最佳視覺效果。", UpdateTitle: "🎉 恭喜您，新版本已準備就緒！", UpdateContent: "<p>我們為您帶來了新的版本更新！本次升級包含新功能、效能最佳化與問題修復，旨在為您提供更流暢的使用體驗。</p><p>歡迎點擊下方連結查看詳細更新記錄。</p>", Changelog: "[查看 v{version} 更新記錄]", CloseTips: "不再顯示此更新提示", CloseTipTitle: "更新提示已關閉", CloseTipContent: "<p>系統此後將不再主動為您推送新版本的更新提示。</p><p>若日後需要重新獲取新功能與最佳化動態，可隨時前往「<strong>進階核心組態設定</strong>」中重新開啟。</p>", RemoteDone: "雲端資料同步成功 ({length})", Hash: "index.html#字体渲染自用脚本-font-renderinguserjs", Close: "關閉" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), openUpdateNoticePanel = () => {
              const html = `<div class="form-group">${i18n.t("UpdateContent")}<p class="changglog"><button data-action="view-changlog" class="btn btn-changelog">📝&nbsp;${i18n.t("Changelog", { version: GMscritpVersion })}</button></p></div><div class="btn-box"><button data-action="close-updateTip" class="btn btn-extra">${i18n.t("CloseTips")}</button><button data-action="close" class="btn">${i18n.t("Close")}</button></div>`,
                css = `dialog{min-width:450px;top:200px}.dialog-header{background: #754ff3}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px;line-height:150%;color:#4b0082}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}button.btn-changelog{color:#555}`,
                win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("UpdateTitle"));
              addListener(win, "action:view-changlog:click", () => { GMopenInTab(`${GMhomepage}${i18n.t("Hash")}`, false); win.close() });
              addListener(win, "action:close-updateTip:click", async () => {
                const configure = await dataManager.get(CONFIGURE); await dataManager.set(CONFIGURE, { ...configure, isCloseTip: true });
                openSimpleDialog(i18n.t("CloseTipTitle"), i18n.t("CloseTipContent"), "dialog", false, false, "#b91515");
              }); win.mount();
            }; bus.unregister("simpleDialog"); if (savedVersion === void 0) { openSimpleDialog(i18n.t("NewTitle"), i18n.t("NewContent"), "dialog", true, false, "#5c9507") } else
            if (savedVersion !== GMscritpVersion) { if (!configure.isCloseTip) { openUpdateNoticePanel() } } else { return }
          await dataManager.set(CONFIGURE, { ...configure, curVersion: GMscritpVersion }); const rawRules = await RenderRuleManager.fetchRules(decrypt(RENDER_RULES_URL));
          if (rawRules) { await dataManager.set(REMOTERENDERDATA, rawRules, { isStringify: false }); info(i18n.t("RemoteDone", { length: rawRules.length })) }
        })(SERVICE_BUS);

        void (async function ControlPanelCenter(bus) {
          const Promises = [dataManager.get(CONFIGURE), dataManager.get(REMOTERENDERDATA), bus.get("ProcessSavedData"), bus.get("OutputRenderData"), bus.get("FontRendering"), bus.get("FixScaleOffset")],
            [configure, correctedFont, savedData, output, rendering, adjuster] = await Promise.all(Promises), { frameSync, ultimateBold } = rendering,
            { isFontsize, isFixViewport, isBackupFunction, isPreview } = configure, { getFullFontlist, updateMatrix, getRenderData } = output, rawSavedValue = savedData.value,
            { activeFont, finalStyle, boldFixCss, shadowRootCss, isEditorBlocked } = output.data, { fontSelect, fontFace, fontSmooth, fontSize, fontStroke,
              fontShadow, shadowColor, fontCSS, fontEx, fixViewport, fixStroke, renderCanvas, fixShadow, lazyload, selection } = rawSavedValue;

          bus.register("ControlPanelCenter", { panel: openControlPanel, dialog: { _G: openAdvancedCorePanel, _X: openDisableRenderPanel, __X: openEnableRenderPanel, _T: openFeedback } });
          bus.register("simpleDialog", openSimpleDialog);

          async function openControlPanel() {
            const languagePacks = {
              "en-US": { Name: getMetaValue("name:en"), Lagend: "Font Rendering Settings", HelpTitle: "Click to open help documentation", Path: "../wiki/Font-Rendering-(Customized)", SelectFonts: "Selected Fonts:", ClearAll: "Clear All", FontRewrite: "Font Rewrite", FingerPrinting: "Fingerprint protection limits font detection. Update your browser's settings to proceed.", SetFont: "Set Font, Please Select:", InstallMoreFont: "Install fonts from our standard library, make your font list selection more diverse.", DefaultON: "（ON*）", UnknowFont: "Unkown Font", FontSmooth: "Font Smooth", FontSize: "Font Scaling", FontStroke: "Font Stroke", FontShadow: "Font Shadow", FixVP: "Fix vpu", FixBold: "Fix Bold", Rendered: "Rendered Elements", Unrendered: "Unrendered Elements", RenderedTitle: "Important data is read-only by default. Double-click to unlock and edit.", RenderedPH: "Please modify default values with caution to avoid rendering issues.", FixShadow: "Font Shadow Fixer", FixLazyload: "Use Lazyload Fixer", FixShadowText: "Fixes bold style shadow rendering issues in Chrome 123.0+. Disabled by default.", CurrentFont: "Current: {font}", FixLazyloadText: "Lazy load fix utility. Disabled by default. Enable only if style fail or script conflict.", FixSelection: "Text Selection Fixer", FixSelectionText: "Fixes text selection blur from font stroke or font shadow. Enabled by default.", InvalidData: "No data available", UnrenrenderedPH: `If you plan to use custom English monospaced fonts, do not delete "pre, pre *, code, code *" lightly.`, SearchPH: "Enter keywords to search", CustomFontTitle: "Double-click to open the custom font adding tool.", GarbledTitle: "Double-click to view solutions for garbled text, font ghosting, or layout glitches.", CustomMonoTitle: "Double-click to open Custom English Monospace Font Settings Tool.", FontRewriteData: "Double-click to edit custom font override data.", FontScaleData: "Double-click to edit site scaling fix data.", NoMatchedFont: "No matching fonts found", SiteDefault: "Website Font", Save: "Save", Preview: "Prvw", ClickToDo: "Click to re-detect permissions or font data." },
              "zh-CN": { Name: getMetaValue("name:zh-CN"), Lagend: "字体渲染参数设置", HelpTitle: "单击打开帮助文档", Path: `../wiki/${encodeURIComponent("字体渲染（自用脚本）")}`, SelectFonts: "已选定的字体：", ClearAll: "清空全部", SetFont: "设置字体，请选择：", FontRewrite: "字体重写", FingerPrinting: "您的浏览器处于指纹隐私保护状态，需调整设置以恢复字体检测。", InstallMoreFont: "建议下载内置字库中预设的字体，让您的字体列表选择更加丰富多元。", DefaultON: "（默认开启*）", FontSmooth: "字体平滑", FontSize: "字体缩放比例", FontStroke: "字体描边粗细", FontShadow: "字体阴影大小", FixVP: "视口修正", FixBold: "粗体修正", Canvas: "渲染画布", Rendered: "需要渲染的元素标签", Unrendered: "排除渲染的元素标签", RenderedTitle: "核心数据默认只读，双击可解锁编辑", RenderedPH: "请谨慎修改默认值，以免导致渲染失效。", UnrenrenderedPH: "如需使用自定义英文等宽字体，请谨慎删除『pre, pre *, code, code *』", FixShadow: "附加阴影样式修正", FixLazyload: "使用延迟加载修正", Reset: "重置", FixShadowText: "用于修正 Chromium 123.0+ 粗体样式附加阴影的渲染异常，默认关闭。", FixLazyloadText: "延迟加载修正程序，默认关闭。仅在样式加载异常或产生执行冲突时开启。", FixSelection: "修复文本选择效果", FixSelectionText: "用于修复由于应用字体描边或阴影，导致文本选中时显示不清晰的问题，默认开启。", Close: "关闭", CustomFontTitle: "双击打开自定义字体添加工具", GarbledTitle: "双击查看文字乱码、字体重影、样式错乱的解决方案", CustomMonoTitle: "双击打开自定义英文等宽字体设定工具", FontRewriteData: "双击编辑自定义字体重写数据", FontScaleData: "双击编辑站点缩放修正设置数据", Backup: "备份", UnknowFont: "未知字体", CurrentFont: "当前字体：{font}", InvalidData: "字体源未包含有效的字体信息", NoMatchedFont: "未找到匹配的字体", SearchPH: "输入关键字搜索字体", SiteDefault: "网站默认字体", Save: "保存", Preview: "预览", ClickToDo: "点击重新检测权限或字体数据" },
              "zh-TW": { Name: getMetaValue("name:zh-TW"), Lagend: "字型渲染參數設定", HelpTitle: "點擊查看說明文件", Path: `../wiki/${encodeURIComponent("字体渲染（自用脚本）")}`, SelectFonts: "已選定的字型：", ClearAll: "清空全部", SetFont: "設定字型，請選擇：", FontRewrite: "字型覆寫", FingerPrinting: "您的瀏覽器處於指紋隱私保護狀態，需調整設定以恢復字型偵測。", InstallMoreFont: "建議下載內建字庫中預設的字型，讓您的字型列表選擇更加豐富多元。", DefaultON: "（預設開啟*）", FontSmooth: "字型平滑", FontSize: "字型縮放比例", FontStroke: "字型描邊粗細", FontShadow: "字型陰影大小", FixVP: "視口修正", FixBold: "粗體修正", Canvas: "轉譯畫布", Rendered: "需要轉譯的元素標籤", Unrendered: "排除轉譯的元素標籤", RenderedTitle: "核心資料預設唯讀，雙擊可解鎖編輯", RenderedPH: "請謹慎修改預設值，以免導致轉譯失效。", UnrenrenderedPH: "如需使用自訂英文等寬字型，請謹慎刪除「pre, pre *, code, code *」", FixShadow: "附加陰影樣式修正", FixLazyload: "使用延遲載入修正", Reset: "重設", FixShadowText: "用於修正 Chromium 123.0+ 粗體樣式附加陰影的轉譯異常，預設關閉。", FixLazyloadText: "延遲載入修正程式，預設關閉。僅在樣式載入異常或產生執行衝突時開啟。", FixSelection: "修復文字選取效果", FixSelectionText: "用於修復因套用字型描邊或陰影，導致文字選取時顯示不清晰的問題，預設開啓。", Close: "關閉", CustomFontTitle: "雙擊開啟自訂字型新增工具", GarbledTitle: "雙擊查看文字亂碼、字型重影、樣式錯亂的解決方案", CustomMonoTitle: "雙擊開啟自訂英文等寬字型設定工具", FontRewriteData: "雙擊編輯自訂字型覆寫資料", FontScaleData: "雙擊編輯網站縮放修正資料", Backup: "備份", UnknowFont: "未知字型", CurrentFont: "目前字型：{font}", InvalidData: "字型源未包含有效的字型資訊", NoMatchedFont: "未找到符合的字型", SearchPH: "輸入關鍵字搜尋字型", SiteDefault: "網站預設字型", Save: "儲存", Preview: "預覽", ClickToDo: "點擊重新偵測權限或字型資料" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), incompatible = compareVersion({ GECKO: 126, more: null }) || isRawContent,
              html = `<fieldset><legend><span>${i18n.t("Lagend")}</span><span class="help anchor-help tooltip" data-tooltip="${i18n.t("HelpTitle")}" data-current-anchor="--help" data-action="launch-help"><span class="rotation" height="24" width="24"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0,0,255.99431,255.99431"><g transform="scale(0.5,0.5)"><path d="M504.1,256c0,-137 -111.1,-248.1 -248.1,-248.1c-137,0 -248.1,111.1 -248.1,248.1c0,137 111.1,248.1 248.1,248.1c137,0 248.1,-111.1 248.1,-248.1z" fill="#67a5df"/><path d="M146.1,181.5c0,-13.9 4.5,-28 13.4,-42.3c8.9,-14.3 22,-26.1 39.1,-35.5c17.1,-9.4 37.1,-14.1 60,-14.1c21.2,0 40,3.9 56.2,11.8c16.3,7.8 28.8,18.5 37.7,32c8.9,13.5 13.3,28.1 13.3,43.9c0,12.5 -2.5,23.4 -7.6,32.7c-5.1,9.4 -11.1,17.5 -18,24.3c-7,6.8 -19.4,18.3 -37.5,34.4c-5,4.5 -9,8.5 -12,12c-3,3.4 -5.2,6.6 -6.7,9.4c-1.5,2.9 -2.6,5.7 -3.4,8.6c-0.8,2.9 -2,7.9 -3.6,15.1c-2.8,15.2 -11.5,22.9 -26.1,22.9c-7.6,0 -14,-2.5 -19.2,-7.5c-5.2,-5 -7.8,-12.4 -7.8,-22.2c0,-12.3 1.9,-23 5.7,-32c3.8,-9 8.9,-16.9 15.2,-23.7c6.3,-6.8 14.8,-14.9 25.5,-24.3c9.4,-8.2 16.1,-14.4 20.3,-18.6c4.2,-4.2 7.7,-8.8 10.5,-14c2.9,-5.1 4.3,-10.7 4.3,-16.7c0,-11.7 -4.4,-21.6 -13.1,-29.7c-8.7,-8.1 -20,-12.1 -33.7,-12.1c-16.1,0 -28,4.1 -35.6,12.2c-7.6,8.1 -14.1,20.1 -19.3,35.9c-5,16.6 -14.4,24.8 -28.3,24.8c-8.2,0 -15.1,-2.9 -20.8,-8.7c-5.6,-5.6 -8.5,-11.8 -8.5,-18.6zM253.4,422.3c-8.9,0 -16.7,-2.9 -23.4,-8.7c-6.7,-5.8 -10,-13.9 -10,-24.3c0,-9.2 3.2,-17 9.7,-23.3c6.4,-6.3 14.4,-9.4 23.7,-9.4c9.2,0 17,3.2 23.3,9.4c6.3,6.3 9.4,14.1 9.4,23.3c0,10.3 -3.3,18.3 -9.9,24.2c-6.6,5.9 -14.2,8.8 -22.8,8.8z" fill="#fff"/></g></svg></span></span></legend><div class="form-group" id="token-component-area"><div id="tags-wrapper-slot"><div id="tags-selected-area" class="hidden"><label>${i18n.t("SelectFonts")}</label><button id="btn-clear-tags" type="button">${i18n.t("ClearAll")}</button></div></div><label>${i18n.t("SetFont")}</label><input type="hidden" id="panel-selected-fonts" name="selectedFonts" data-index="0" value=""><input type="text" id="panel-tags-input" class="${fontFace ? "" : "readonly"}"${fontFace ? "" : " disabled"} autocomplete="off"><dl class="tags-dropdown hidden" id="panel-tags-dropdown"><dt class="hidden anchor-finger-print tooltip" data-current-anchor="--finger-print" data-action="redetect-font" data-tooltip="${i18n.t("ClickToDo")}"></dt><div id="panel-tags-empty-tip" class="bold hidden"></div></dl><span class="emoji anchor-add-font input-mark tooltip" data-current-anchor="--add-font" id="panel-add-font-data" data-action="launch-double" data-tooltip="${i18n.t("CustomFontTitle")}">🔔</span></div><div class="form-group form-inline"><label id="panel-rewrite-data" class="tooltip anchor-font-rewrite" data-action="launch-double" data-current-anchor="--font-rewrite" data-tooltip="${i18n.t("FontRewriteData")}">${i18n.t("FontRewrite")}</label><span class="bold">${i18n.t("DefaultON")}</span><span class="switch-container"><input type="checkbox" data-action="trigger-disabled" id="panel-rewrite-enable" data-index="1" ${fontFace ? "checked" : ""}><label for="panel-rewrite-enable" class="switch-slider"></label></span></div><div class="form-group form-inline"><label for="panel-smooth-enable">${i18n.t("FontSmooth")}</label><span class="bold">${i18n.t("DefaultON")}</span><span class="switch-container"><input type="checkbox" id="panel-smooth-enable" data-index="2" ${fontSmooth ? "checked" : ""}><label for="panel-smooth-enable" class="switch-slider"></label></span></div><div class="form-group${isFontsize && !isEditorBlocked && !incompatible ? "" : " vhidden"}"><div class="form-sub-group"><label id="panel-scale-data" class="anchor-scale-offset tooltip" data-action="launch-double" data-current-anchor="--scale-offset" data-tooltip="${i18n.t("FontScaleData")}">${i18n.t("FontSize")}</label><span class="fs12 grey bold${isFixViewport ? "" : " vhidden"}">&nbsp;(&nbsp;${i18n.t("FixVP")}&nbsp;<input id="fix-vpu" type="checkbox" class="small-checkbox" data-index="9"${fixViewport && fontSize !== 1 ? " checked" : fontSize === 1 ? " disabled" : ""} />)</span><input type="text" id="panel-delay-readout-scale" maxlength="5" data-index="3" value="${fontSize}"${isEditorBlocked ? " disabled" : ""} /></div><div id="font-scale" class="range"><input type="range" id="panel-delay-range-scale" min="0.8" max="2.5" step="0.001" value="${fontSize}" /><output></output><div class="rangeProgress"></div></div></div><div class="form-group"><div class="form-sub-group"><label>${i18n.t("FontStroke")}</label><span class="fs12 grey bold${isRawGreasemonkey ? " vhidden" : ""} ">&nbsp;(&nbsp;${i18n.t("FixBold")}&nbsp;<input id="fix-bold" type="checkbox" class="small-checkbox" data-index="10"${fixStroke ? " checked" : ""}${fontStroke ? "" : " disabled"} />)</span><input type="text" id="panel-delay-readout-stroke" maxlength="5" data-index="4" value="${fontStroke}" /><div id="panel-fix-stroke-more" class="vhidden${fixStroke ? "" : " grayscale"}"><div id="panel-sub-fix-shadow"><div class="panel-sub-label"><label for="fix-shadow">${i18n.t("FixShadow")}</label><span class="switch-container"><input type="checkbox" id="fix-shadow" data-index="12"${fixShadow ? " checked" : ""}${fixStroke ? "" : " disabled"} /><label for="fix-shadow" class="switch-slider"></label></span></div><div class="panel-sub-text">${i18n.t("FixShadowText")}</div></div><div class="panel-sub-label"><label for="fix-lazyload">${i18n.t("FixLazyload")}</label><span class="switch-container"><input type="checkbox" id="fix-lazyload" data-index="13"${lazyload ? " checked" : ""}${fixStroke ? "" : " disabled"} /><label for="fix-lazyload" class="switch-slider"></label></span></div><div class="panel-sub-text">${i18n.t("FixLazyloadText")}</div><div class="panel-sub-label"><label for="fix-selection">${i18n.t("FixSelection")}</label><span class="switch-container"><input type="checkbox" id="fix-selection" data-index="14"${selection ? " checked" : ""}${fixStroke ? "" : " disabled"} /><label for="fix-selection" class="switch-slider"></label></span></div><div class="panel-sub-text">${i18n.t("FixSelectionText")}</div></div></div><div id="font-stroke" class="range"><input type="range" id="panel-delay-range-stroke" min="0" max="1" step="0.001" value="${fontStroke}"><output></output><div class="rangeProgress"></div></div></div><div class="form-group"><div class="form-sub-group"><label>${i18n.t("FontShadow")}</label><span id="panel-render-canvas" class="fs12 grey bold${isRawGreasemonkey ? " vhidden" : ""} ">&nbsp;(&nbsp;${i18n.t("Canvas")}&nbsp;<input id="render-canvas" type="checkbox" class="small-checkbox" data-index="11"${renderCanvas ? " checked" : ""}${fontFace ? "" : " disabled"} />)</span><input type="text" id="panel-delay-readout-shadow" maxlength="4" data-index="5" value="${fontShadow}" /></div><div id="font-shadow" class="range"><input type="range" id="panel-delay-range-shadow" min="0" max="4" step="0.01" value="${fontShadow}"><output></output><div class="rangeProgress"></div></div></div><div class="form-group${fontShadow ? "" : " hidden"}" id="color-picker-component-area"><div id="picker-class-mount-point"></div></div><div class="form-group"><div class="form-sub-group"><label>${i18n.t("Rendered")}</label><span class="emoji inline-add anchor-render tooltip" data-current-anchor="--render" id="visit-garbled-solution" data-action="launch-double" data-tooltip="${i18n.t("GarbledTitle")}">🔔</span><div id="rendered-expand-switch" expand-switch="ON">\u2227</div></div><textarea id="rendered-elements" data-action="launch-double" class="readonly anchor-render-textarea tooltip" data-current-anchor="--render-textarea" data-tooltip="${i18n.t("RenderedTitle")}" data-index="7" placeholder="${i18n.t("RenderedPH")}" readonly>${fontCSS}</textarea></div><div class="form-group"><div class="form-sub-group"><label>${i18n.t("Unrendered")}</label><span class="emoji inline-add anchor-unrender tooltip" data-current-anchor="--unrender" id="panel-add-mono-data" data-action="launch-double" data-tooltip="${i18n.t("CustomMonoTitle")}">🔔</span><div id="unrendered-expand-switch" expand-switch="ON">\u2227</div></div><textarea id="unrendered-elements" data-index="8" placeholder="${i18n.t("UnrenrenderedPH")}">${fontEx}</textarea></div><div class="form-group form-inline"><button data-action="launch-reset" class="panel-btn">${i18n.t("Reset")}</button><button data-action="close" class="panel-btn">${i18n.t("Close")}</button><button data-action="launch-backup" class="panel-btn${isBackupFunction ? "" : " hidden"}">${i18n.t("Backup")}</button><button id="btn-save-data" data-action="launch-savedata" class="panel-btn">${i18n.t("Save")}</button></div></fieldset>`,
              css = `dialog{animation:dialogScaleIn .25s cubic-bezier(.16,1,.3,1);box-shadow:0 20px 40px #0000001f,0 5px 15px #00000014;background:#f0f6ff;border:none;border-radius:12px;bottom:auto;display:flex;flex-direction:column;left:auto;max-height:calc(100vh - 40px);max-width:90vw;min-width:314px;position:fixed;right:20px;top:20px;transform:translate(var(--x,0),var(--y,0));width:min-content;will-change:transform}.dialog-header{background:#67a5df;padding:10px 20px}.dialog-body{margin:2px;padding:4px 6px 6px 6px;scrollbar-color:auto}.dialog-body input:not([type=range],[type=checkbox],[type=button]):focus,textarea:focus{box-shadow:inset 0 1px 3px #0000001a,0 0 6px #52a8ec99;outline:0}fieldset{background:#f0f6ff;border:2px groove #67a5df;border-radius:10px;display:flex;flex-direction:column;gap:4px}legend{border:none;border-radius:6px;margin:0;padding:0 8px;position:relative;width:fit-content}legend span{color:#8b0000;font-size:14px;font-weight:700}legend .help{cursor:help;display:inline-block;margin:0 0 0 8px;position:relative;vertical-align:middle}legend .help .rotation{animation:rotation 6s linear infinite;display:block;height:24px;margin:0;padding:0;position:relative;-webkit-transform:rotate(1turn);transform-origin:center 50% 0;width:24px}legend .help svg{fill:#67a5df;height:24px;overflow:hidden;vertical-align:initial;width:24px}@keyframes rotation{0%{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(1turn)}}#tags-selected-area{align-items:center;display:flex;justify-content:space-between;margin:4px 0}#btn-clear-tags{background:0 0;border:1px solid #487baf;border-radius:4px;color:#487baf;cursor:pointer;font-size:12px;margin:0 2px 0 0;padding:2px 8px}#panel-tags-input{background:#fafafa;border:2px solid #67a5df;border-radius:6px;box-sizing:border-box;cursor:text;height:40px;margin:0;outline:0;overflow:hidden;padding:1px 36px 1px 0;text-indent:10px;text-overflow:ellipsis;width:100%}#panel-tags-input::placeholder{color:#3699;font:normal 600 16px/100% sans-serif}.selected-tags-panel{animation:fadeIn .25s ease-out;background:0 0;border:2px solid #67a5df;border-radius:6px;display:flex;flex-wrap:wrap;gap:4px;margin-bottom:4px;padding:4px}.tag-item{align-items:center;background:#67a5df;border:1px solid #67a5df;border-radius:4px;box-shadow:0 1px 2px #0000000d;color:#fff;cursor:pointer;display:inline-flex;font-size:14px;font-weight:500;gap:6px;padding:4px 10px;transition:all .2s;user-select:none}#btn-clear-tags:hover,.tag-item:hover{background:#fff1f0;border-color:#ff4d4f;color:#ff4d4f}.tag-item:after{content:"✖";font-size:10px;opacity:.6}.tags-dropdown{background:#fff;border:2px solid #67a5df;border-radius:6px;box-shadow:0 4px 12px #00000026;box-sizing:content-box;display:block;left:0;margin:0;max-height:312px;overflow-y:auto;overflow-x:hidden;padding:4px 0;position:absolute;right:0;top:100%;scrollbar-color:auto;overscroll-behavior:contain;scroll-behavior:smooth;white-space:nowrap;z-index:99999}.dialog-body::-webkit-scrollbar,dl::-webkit-scrollbar{height:6px;width:6px;scrollbar-color:auto}::-webkit-scrollbar-thumb{background:#487baf;border-radius:10px}::-webkit-scrollbar-thumb:hover{background:#67a5df}::-webkit-scrollbar-track{background:#efefef;border-radius:10px;box-shadow:inset 2px 2px 4px #67a5df}.tags-dropdown dt{all:initial;background:#e51111;border:1px solid #e51111;color:#efea11;cursor:progress;display:block;font-size:15px;line-height:150%;position:sticky;top:-4px;margin:-4px 0 -1px;padding:6px 8px;word-break:break-all}.tags-dropdown dd{box-sizing:border-box;color:#262626;cursor:pointer;display:block;font-size:22px;font-weight:400;margin:1px 0;max-width:100%;min-width:100%;overflow-x:hidden;padding:8px 8px 8px 14px;text-overflow:ellipsis;transition:background .3s}.tags-dropdown dd:hover{background:#67a5df;color:#fefefe}.input-mark{cursor:pointer;height:0;left:-8px;margin:0 0 0 auto;padding:0;position:relative;text-align:center;top:-37px;width:24px}#panel-rewrite-data:hover,#panel-scale-data:hover{color:#8b0000;cursor:pointer}#font-scale{--step:0.001;--min:0.8;--max:2.5;--value:${fontSize}}#font-stroke{--step:0.001;--min:0;--max:1;--value:${fontStroke}}#font-shadow{--step:0.01;--min:0;--max:4;--value:${fontShadow}}.form-sub-group{align-items:center;display:flex;flex-direction:row;gap:0;justify-content:space-between}.form-sub-group input[type=checkbox]{appearance:none;cursor:pointer;display:inline-block;height:0;margin:0 2px 0 0;vertical-align:text-bottom;width:0}.form-sub-group input[type=text]{background:#fafafa;border:2px solid #67a5df;border-radius:4px;box-sizing:border-box;color:#111;font-family:Anton,Impact,serif!important;font-size:16px;font-weight:400;height:32px;margin:0 6px 0 auto;outline:0;padding:0;text-align:center;text-indent:0;width:56px}.form-sub-group input[type=checkbox].small-checkbox{appearance:none;cursor:pointer;display:inline-block;height:14px;margin:0 2px 0 0;vertical-align:text-bottom;width:14px}.form-sub-group input[type=checkbox].small-checkbox:after{background:#aaa;border-radius:3px;color:#fff;content:"✗";display:inline-block;font-size:10px;font-weight:700;height:14px;line-height:14px;margin:0;padding:0;position:relative;text-align:center;top:0;vertical-align:top;width:14px}.form-sub-group input[type=checkbox][disabled].small-checkbox:after{color:#dc143c}.form-sub-group input[type=checkbox].small-checkbox:checked:after{background:#65a0db;border:0!important;color:#fff;content:"✓";font-size:12px;font-weight:700;line-height:14px}#panel-tags-empty-tip{color:#55779699;padding:12px;text-align:center}#rendered-expand-switch,#unrendered-expand-switch{border:2px double #67a5df;border-radius:4px;box-sizing:border-box;color:#0a68c1;font-size:16px;margin:0 1px 2px auto;padding:1px 5px}#rendered-expand-switch:hover,#unrendered-expand-switch:hover{cursor:pointer;-webkit-user-select:none;user-select:none}.inline-add{cursor:pointer;display:block;margin:-4px 0 0 4px}#rendered-elements,#unrendered-elements{border:2px solid #67a5df;border-radius:6px;box-sizing:border-box;color:#0b5b9c;cursor:auto;display:block;font:normal 600 14px/150% var(--fr-shared-monospaced)!important;height:78px;margin:0;min-height:78px;min-width:100%;outline:0;padding:5px;resize:auto;width:100%;word-break:break-all}#rendered-elements::-webkit-scrollbar,#unrendered-elements::-webkit-scrollbar{height:6px;width:6px}#rendered-elements::placeholder,#unrendered-elements::placeholder{color:#555;font:normal 400 14px/150% var(--fr-shared-fontfamily);opacity:.85}#unrendered-elements{background:#fafafa}.panel-btn{background:none #67a5df;border:2px solid #6ba7e0;border-radius:6px;box-sizing:border-box;color:#fff!important;cursor:pointer;font:normal 600 14px/150% var(--fr-shared-fontfamily)!important;height:35px;margin:0 4px 0 0;min-height:35px;min-width:60px;padding:5px 10px;width:auto}#panel-fix-stroke-more{background:#f0f6ff;border:2px solid #67a5df;border-radius:6px;color:#333;left:auto;opacity:.92;padding:6px 10px 10px;position:absolute;top:32px;z-index:9999}.panel-sub-label{align-items:center;display:flex;justify-content:space-around}.panel-sub-text{color:#808287;font-size:12px;font-weight:400;line-height:180%;margin:0;padding:0 2px;word-break:break-word}#btn-save-data{margin:0 0 0 auto}.panel-btn.preview{background:coral;border-color:coral}.anim{animation:jiggle 1.8s ease-in infinite;background:#dc143c;border:2px solid #dc143c}.anchor-help{anchor-name:--help}dt.anchor-finger-print{anchor-name:--finger-print}.anchor-add-font{anchor-name:--add-font}.anchor-font-rewrite{anchor-name:--font-rewrite}.anchor-scale-offset{anchor-name:--scale-offset}.anchor-render{anchor-name:--render}.anchor-unrender{anchor-name:--unrender}.anchor-render-textarea{anchor-name:--render-textarea}@keyframes jiggle{48%,62%{transform:scale(1)}50%{transform:scale(1.1,.9)}56%{transform:scale(.9,1.1) translateY(-5px)}59%{transform:scale(1) translateY(-3px)}}@-moz-document url-prefix(){.dialog-body,dl,textarea{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              initStateValue = [fontSelect, fontFace, fontSmooth, Number(fontSize) === 1 ? "OFF" : Number(fontSize).toFixed(3), Number(fontStroke) === 0 ? "OFF" : Number(fontStroke).toFixed(3),
                Number(fontShadow) === 0 ? "OFF" : Number(fontShadow).toFixed(2), shadowColor, fontCSS, fontEx, fixViewport, fixStroke, renderCanvas, fixShadow, lazyload, selection],
              scriptName = i18n.t("Name"), win = new DialogPanelController({ id: randomString(8, "alpha"), type: "panel", html, css, styleManager }), checkFont = new FontFaceSetObserver(),
              colorPicker = new FusedColorPicker(shadowColor, styleManager), qW = s => qS(s, win.dialog);

            let fontCache = new Map(); win.setTitle(scriptName === "Name" ? GMscriptName : scriptName); win.registerComponent(colorPicker);
            const tagsSlot = qW("#tags-wrapper-slot"), tagsInput = qW("#panel-tags-input"), tagsDropdown = qW("#panel-tags-dropdown"), tagsWarn = qW("#panel-tags-dropdown dt"),
              tagsEmptyTip = qW("#panel-tags-empty-tip"), tagsSelectedArea = qW("#tags-selected-area"), hiddenInput = qW("#panel-selected-fonts"),
              btnClearTags = qW("#btn-clear-tags"), colorPickerArea = qW("#color-picker-component-area"), colorpickerMountPoint = qW("#picker-class-mount-point"),
              fixMoreTag = qW("#panel-fix-stroke-more"), rewriteTag = qW("#panel-rewrite-enable"), smoothTag = qW("#panel-smooth-enable"), scaleTag = qW("#font-scale"),
              rangeScaleTag = qW("#panel-delay-range-scale"), readoutScaleTag = qW("#panel-delay-readout-scale"), rangeStrokeTag = qW("#panel-delay-range-stroke"),
              fixVPUSlot = qW("#fix-vpu"), readoutStrokeTag = qW("#panel-delay-readout-stroke"), strokeTag = qW("#font-stroke"), fixBoldSlot = qW("#fix-bold"),
              fixShadowTag = qW("#panel-sub-fix-shadow"), fixShadowSlot = qW("#fix-shadow"), fixLazyloadSlot = qW("#fix-lazyload"), fixSelectionSlot = qW("#fix-selection"),
              rangeShadowTag = qW("#panel-delay-range-shadow"), readoutShadowTag = qW("#panel-delay-readout-shadow"), shadowTag = qW("#font-shadow"),
              canvasSlot = qW("#render-canvas"), renderedSwitcher = qW(`#rendered-expand-switch`), renderedTextarea = qW(`#rendered-elements`),
              saveBtn = qW("#btn-save-data"), unrenderedSwitcher = qW(`#unrendered-expand-switch`), unrenderedTextarea = qW(`#unrendered-elements`),
              fontList = await getAvailableFontData(checkFont); if (win.isDestroyed) { return }

            const stateManager = new StateManager(saveBtn, win.dialog, isPreview), DEFAULT_FONT_EN = activeFont; stateManager.initData(initStateValue);
            let DEFAULT_FONT_CH = i18n.t("UnknowFont"), usedFontName = DEFAULT_FONT_CH, reRendered = false;
            bus.register("stateManager", stateManager); for (const fontname of fontList) {
              if (fontname.en === DEFAULT_FONT_EN || toUnicodeEscapes(fontname.ch) === DEFAULT_FONT_EN) { DEFAULT_FONT_CH = fontFace ? fontname.ch : i18n.t("SiteDefault") }
            } if (!fontList || fontList.length === 0) { tagsEmptyTip.textContent = i18n.t("InvalidData") } else {
              const fragment = document.createDocumentFragment(); for (let i = 0, l = fontList.length; i < l; ++i) {
                const font = fontList[i], title = `${font.ch} (${font.en})`, anchor = `--anchor-font-${i}`, style = `anchor-name:${anchor};font-family:${font.en}!important;`,
                  opt = { class: "tooltip", "data-current-anchor": anchor, "data-tooltip": title, "data-value": font.en, "data-desc": font.ch, style, textContent: font.ch },
                  dd = GMaddElement(fragment, "dd", opt) ?? qS(`dd.tooltip[data-value][data-desc][data-current-anchor="${anchor}"]`, fragment);
                fontCache.set(font.en, { el: dd, chLower: font.ch.toLowerCase(), enLower: font.en.toLowerCase(), isSelected: false });
              } appendNode(tagsDropdown, fragment);
            } syncHiddenValue(); setStyleVariable(scaleTag, fontSize, 3); setStyleVariable(strokeTag, fontStroke, 3); setStyleVariable(shadowTag, fontShadow, 2);
            win.trackInternal(tagsInput, "mouseenter", () => { if (!rewriteTag.checked) { return } tagsInput.placeholder = i18n.t("SearchPH") });
            win.trackInternal(tagsInput, "mouseleave", () => { tagsInput.placeholder = i18n.t("CurrentFont", { font: usedFontName }) });
            win.trackInternal(tagsInput, "focus", () => { tagsDropdown.classList.remove("hidden") });
            win.trackInternal(tagsInput, "click", e => {
              stopPropagation(e); tagsDropdown.classList.remove("hidden"); const lastFont = qS("dd:not(.hidden)", tagsDropdown);
              if (!lastFont) { tagsEmptyTip.textContent = i18n.t("NoMatchedFont") } tagsEmptyTip.classList.toggle("hidden", lastFont);
              const isFPP = checkFont.checkFingerprintProtection(IS_REAL_GECKO); if (!isFPP && fontCache.size > (os === "macOS" ? 4 : 2)) { return }
              tagsWarn.textContent = isFPP ? i18n.t("FingerPrinting") : i18n.t("InstallMoreFont"); tagsWarn.classList.remove("hidden");
            });
            win.trackInternal(tagsInput, "input", e => {
              const keyword = e.target.value.trim().toLowerCase(); tagsDropdown.classList.remove("hidden");
              if (fontCache.size === 0) { return } let hasMatch = false; fontCache.forEach(item => {
                if (item.isSelected) { item.el.classList.add("hidden"); return } const isMatched = keyword === "" || item.chLower.includes(keyword) || item.enLower.includes(keyword);
                if (isMatched) { item.el.classList.remove("hidden"); hasMatch = true } else { item.el.classList.add("hidden") }
              }); tagsEmptyTip.textContent = i18n.t("NoMatchedFont"); tagsEmptyTip.classList.toggle("hidden", hasMatch);
            });
            win.trackInternal(tagsDropdown, "click", e => {
              const dd = e.target.closest("dd"); if (!dd || dd.classList.contains("hidden")) { return }
              const value = getAttribute(dd, "data-value"), desc = getAttribute(dd, "data-desc"); let panel = qS(".selected-tags-panel", tagsSlot);
              if (!panel) { panel = cE("div", { class: "selected-tags-panel" }); appendNode(tagsSlot, panel) }
              const tagItem = cE("span", { class: "tag-item", "data-value": value, "data-text": desc, textContent: desc }); appendNode(panel, tagItem);
              const cacheItem = fontCache.get(value); if (cacheItem) { cacheItem.isSelected = true } tagsSelectedArea.classList.remove("hidden");
              tagsInput.value = ""; fontCache.forEach(item => { item.el.classList.toggle("hidden", item.isSelected) }); tagsEmptyTip.classList.add("hidden");
              tagsDropdown.classList.add("hidden"); win.emit("action:token-added", { code: value, text: desc }); syncHiddenValue();
            });
            win.trackInternal(tagsSlot, "click", e => {
              const tag = e.target.closest(".tag-item"); if (!tag) { return }
              const value = getAttribute(tag, "data-value"), keyword = tagsInput.value.trim().toLowerCase(), cacheItem = fontCache.get(value);
              if (cacheItem) {
                const isAvailable = keyword === "" || cacheItem.chLower.includes(keyword) || cacheItem.enLower.includes(keyword);
                cacheItem.isSelected = false; if (isAvailable) { cacheItem.el.classList.remove("hidden"); tagsEmptyTip.classList.add("hidden") }
              } const panel = tag.parentElement; tag.remove(); if (panel && panel.children.length === 0) { panel.remove(); tagsSelectedArea.classList.add("hidden") }
              win.emit("action:token-removed", { code: value, text: getAttribute(tag, "data-text") }); syncHiddenValue();
            });
            win.trackInternal(btnClearTags, "click", e => {
              stopPropagation(e); const panel = qS(".selected-tags-panel", tagsSlot); if (!panel || panel.children.length === 0) { return }
              const keyword = tagsInput.value.trim().toLowerCase(); Array_forEach(Array_from(panel.children), tag => {
                const value = getAttribute(tag, "data-value"), cacheItem = fontCache.get(value); if (cacheItem) {
                  const isAvailable = keyword === "" || cacheItem.chLower.includes(keyword) || cacheItem.enLower.includes(keyword);
                  cacheItem.isSelected = false; if (isAvailable) { cacheItem.el.classList.remove("hidden") }
                } win.emit("action:token-removed", { code: value, text: getAttribute(tag, "data-text") });
              }); tagsEmptyTip.classList.add("hidden"); panel.remove(); tagsSelectedArea.classList.add("hidden"); syncHiddenValue();
            });
            addListener(win, "action:trigger-disabled:click", e => {
              const isEnable = Boolean(e.detail.actionElement.checked); if (!isEnable) {
                const panel = qS(".selected-tags-panel", tagsSlot); if (panel) {
                  fontCache.forEach(item => { item.isSelected = false; item.el.classList.remove("hidden") }); panel.remove(); tagsSelectedArea.classList.add("hidden"); syncHiddenValue();
                } setAttribute(tagsInput, "disabled", ""); canvasSlot.checked && canvasSlot.click(); setAttribute(canvasSlot, "disabled", "");
              } else if (hasAttribute(tagsInput, "disabled")) {
                removeAttribute(tagsInput, "disabled"); removeAttribute(canvasSlot, "disabled"); reRendered && !canvasSlot.checked && renderCanvas && canvasSlot.click();
              } tagsInput.classList.toggle("readonly", !isEnable);
            });
            win.trackInternal(fixBoldSlot, "mouseenter", () => { fixShadowTag.classList.toggle("vhidden", !Number(rangeShadowTag.value)); fixMoreTag.classList.remove("vhidden") });
            win.trackInternal(fixMoreTag, "mouseleave", () => { fixMoreTag.classList.add("vhidden") });
            colorPicker.mount(colorpickerMountPoint); expandOrCollapse(renderedSwitcher, renderedTextarea); expandOrCollapse(unrenderedSwitcher, unrenderedTextarea);
            win.trackInternal(win.dialog, "click", e => { if (!e.target.closest("#token-component-area")) { tagsDropdown.classList.add("hidden") } });
            win.trackInternal(win.dialog, "change", e => {
              const target = e.target, targetId = target.id, value = target.value; switch (targetId) {
                case "panel-delay-readout-scale": updateRangeValues(target, rangeScaleTag, scaleTag, value, fontSize, 1, 3); break;
                case "panel-delay-readout-stroke": updateRangeValues(target, rangeStrokeTag, strokeTag, value, fontStroke, 0, 3); break;
                case "panel-delay-readout-shadow": updateRangeValues(target, rangeShadowTag, shadowTag, value, fontShadow, 0, 2); break;
                case "panel-delay-range-scale": toggleDisabledState(value, fixVPUSlot, 1, fixViewport); break;
                case "panel-delay-range-stroke": toggleDisabledState(value, fixBoldSlot, 0, fixStroke); break;
                case "panel-delay-range-shadow": colorPickerArea.classList.toggle("hidden", Number(value) === 0); fixShadowTag.classList.toggle("vhidden", Number(value) === 0); break;
                case "fix-bold": if (!target.checked) { fixMoreTag.classList.add("grayscale"); setAttribute(fixShadowSlot, "disabled", ""); setAttribute(fixLazyloadSlot, "disabled", ""); setAttribute(fixSelectionSlot, "disabled", "") } else { fixMoreTag.classList.remove("grayscale"); removeAttribute(fixShadowSlot, "disabled"); removeAttribute(fixLazyloadSlot, "disabled"); removeAttribute(fixSelectionSlot, "disabled") } break;
                default: break;
              }
            }, true);
            win.trackInternal(win.dialog, "input", e => {
              const target = e.target; if (!target) { return } const targetId = target.id, value = target.value; if (targetId.startsWith("panel-delay-range")) {
                const suffix = targetId.replace("panel-delay-range", ""), p = target.parentElement, readout = qW(`#panel-delay-readout${suffix}`),
                  numberVal = Number(value), parsedVal = suffix === "-shadow" ? numberVal.toFixed(2) : numberVal.toFixed(3);
                p.style.setProperty("--value", parsedVal); p.style.setProperty("--text-value", `'${parsedVal}'`); setAttribute(target, "value", parsedVal);
                const parseValue = suffix === "-scale" ? (numberVal === 1 ? "OFF" : parsedVal) : (numberVal === 0 ? "OFF" : parsedVal);
                if (readout) { readout.value = parseValue; dispatchEvent(readout, new Event("input")) }
              } else if (targetId.startsWith("panel-delay-readout")) { if (target.value !== "OFF") { target.value = target.value.replace(/[^0-9.]/g, "") } }
              if (!stateManager.hasChanges()) { rollbackLastStyle() }
            }, true);
            addListener(win, "action:launch-double:dblclick", e => {
              const target = e.detail.actionElement, event = e.detail.nativeEvent; InputShield.stopPropagate(event); switch (e.detail.actionElementId) {
                case "rendered-elements": removeAttribute(target, "readonly"); target.classList.remove("readonly"); target.classList.add("editable"); break;
                case "panel-add-mono-data": openCustomMonoAddingToolPanel(); break; case "visit-garbled-solution": GMopenInTab(`${GMsupportURL}/42`, false); break;
                case "panel-add-font-data": openCustomFontAddingToolPanel(); break; case "panel-rewrite-data": openFontRewritePanel(); break;
                case "panel-scale-data": openScaleOffsetPanel(); break; default: break;
              }
            }, true);
            addListener(win, "action:launch-help:click", () => GMopenInTab(`${GMsupportURL}/${i18n.t("Path")}`, false));
            addListener(win, "action:redetect-font:click", async () => {
              if (!checkFont.checkFingerprintProtection(IS_REAL_GECKO)) { GMopenInTab(`${GMsupportURL}/46`, false) } await dataManager.delete(FONTCHECKLIST); reload();
            });
            addListener(win, "action:launch-reset:click", () => openResetDataDialog(stateManager.hasChanges()));
            addListener(win, "action:launch-backup:click", () => openBackupPanel());
            addListener(win, "action:launch-savedata:click", async e => {
              const saveBtn = e.detail.actionElement, values = e.detail.formValues, submitData = {
                fontSelect: toSafeString(values.selectedFonts), fontFace: values["panel-rewrite-enable"], fontSmooth: values["panel-smooth-enable"],
                fontSize: Number(values["panel-delay-range-scale"]), fixViewport: values["fix-vpu"], fontStroke: Number(values["panel-delay-range-stroke"]),
                fixStroke: values["fix-bold"], lazyload: values["fix-lazyload"], selection: values["fix-selection"], fontShadow: Number(values["panel-delay-readout-shadow"]),
                fixShadow: values["fix-shadow"], renderCanvas: values["render-canvas"], shadowColor: toSafeString(values["panel-shadow-color"]),
                fontCSS: toSafeString(values["rendered-elements"]), fontEx: toSafeString(values["unrendered-elements"])
              }; if (saveBtn.classList.contains("preview")) {
                const panel = qS(".selected-tags-panel", tagsSlot), fontFaceTag = qW("#panel-rewrite-enable");
                let cnFontName; for (const fontname of fontList) {
                  const hasFont = fontname.en === DEFAULT_FONT_EN || toUnicodeEscapes(fontname.ch) === DEFAULT_FONT_EN;
                  if (hasFont) { cnFontName = fontFaceTag.checked ? fontname.ch : i18n.t("SiteDefault") }
                } usedFontName = (panel && panel.childElementCount > 0) ? getAttribute(panel.children[0], "data-text") : cnFontName;
                if (!tagsInput.matches(":hover")) { tagsInput.placeholder = i18n.t("CurrentFont", { font: usedFontName }) }
                saveBtn.classList.remove("preview"); saveBtn.textContent = i18n.t("Save");
                const parsedValue = savedData.ruleManager.applyRules(correctedFont, { __proto__: null, ...submitData }),
                  renderData = await getRenderData(parsedValue), { shadowRootCss, boldFixCss, finalStyle } = renderData;
                styleManager.insert(MAIN_STYLE_ID, finalStyle, { type: MAIN_STYLE_TYPE });
                if (submitData.fixStroke !== fixStroke && submitData.fontStroke && !fixStroke) { ultimateBold.scanAll(true, boldFixCss) }
                if (isRawGreasemonkey) {
                  const ifs = gT("iframe", document.body), l = ifs.length, cssText = parseCsstextForIframe(finalStyle);
                  if (l > 0) { for (let i = 0; i < l; ++i) { styleManager.insert(MAIN_STYLE_ID, cssText, { target: ifs[i], type: MAIN_STYLE_TYPE }) } }
                } else {
                  const cssArray = [boldFixCss, shadowRootCss]; ultimateBold.temporaryChangeStatus(...cssArray); frameSync.broadcastStyleToIframes({ temporary: true, cssArray });
                  frameSync.broadcastStyleToIframes({ id: MAIN_STYLE_ID, cssText: finalStyle }); adjuster?.(scaleMatrix);
                } reRendered = true;
              } else { openSaveDataPanel(submitData) }
            });
            addListener(win, "dialog:before-close", () => {
              if (stateManager.hasChanges()) { rollbackLastStyle() } if (checkFont) { checkFont.destroy() } bus.unregister("stateManager");
              if (fontCache) { fontCache.forEach(item => { item.el = null }); fontCache.clear(); fontCache = null } if (stateManager) { stateManager.destroy() }
            });
            win.onMessage(e => {
              switch (e.eventName) {
                case "TERMINAL_RESTORE_DEFAULTS": {
                  if (e.data?.source !== "ResetDataDialog" || !stateManager.hasChanges()) { return }
                  styleManager.insert(MAIN_STYLE_ID, finalStyle, { type: MAIN_STYLE_TYPE }); ultimateBold.temporaryChangeStatus(boldFixCss, shadowRootCss);
                  frameSync.broadcastStyleToIframes({ id: MAIN_STYLE_ID, cssText: finalStyle }); frameSync.broadcastStyleToIframes({ temporary: true, cssArray: [boldFixCss, shadowRootCss] });
                  fontCache.forEach(item => { item.isSelected = false; item.el.classList.remove("hidden") });
                  tagsInput.value = ""; tagsEmptyTip.classList.add("hidden"); const panel = qS(".selected-tags-panel", tagsSlot);
                  if (panel) { panel.remove() } tagsSelectedArea.classList.add("hidden"); syncHiddenValue();
                  if (smoothTag.checked !== fontSmooth) { smoothTag.click() }
                  if (rangeScaleTag.value !== fontSize) { syncSliderUI(rangeScaleTag, readoutScaleTag, scaleTag, fontSize, 3); updateMatrix(fontSize); adjuster?.(scaleMatrix) }
                  if (fixVPUSlot.checked !== fixViewport) { fixVPUSlot.click() }
                  if (rangeStrokeTag.value !== fontStroke) { syncSliderUI(rangeStrokeTag, readoutStrokeTag, strokeTag, fontStroke, 3) }
                  if (!fixStroke && fixBoldSlot.checked !== fixStroke) { fixBoldSlot.click() }
                  if (fixSelectionSlot.checked !== selection) { fixSelectionSlot.click() }
                  if (fixLazyloadSlot.checked !== lazyload) { fixLazyloadSlot.click() }
                  if (fixShadowSlot.checked !== fixShadow) { fixShadowSlot.click() }
                  if (fixStroke && fixBoldSlot.checked !== fixStroke) { fixBoldSlot.click() }
                  if (rangeShadowTag.value !== fontShadow) { syncSliderUI(rangeShadowTag, readoutShadowTag, shadowTag, fontShadow, 2) }
                  if (canvasSlot.checked !== renderCanvas) { canvasSlot.click() } if (rewriteTag.checked !== fontFace) { rewriteTag.click() }
                  if (colorPicker.getValue() !== shadowColor) { colorPicker.setValue(shadowColor) }
                  if (renderedTextarea.value !== fontCSS) { renderedTextarea.value = fontCSS; dispatchEvent(renderedTextarea, new Event("input")) }
                  if (unrenderedTextarea.value !== fontEx) { unrenderedTextarea.value = fontEx; dispatchEvent(unrenderedTextarea, new Event("input")) }
                  if (reRendered) { reRendered = false } rollbackLastStyle(); break;
                }
                case "TERMINAL_RESTORE_INITNAL": {
                  if (e.data?.source !== "ResetDataDialog") { return } const { fontFace, fontSmooth, fontSize, fontStroke, fontShadow, shadowColor,
                    fontCSS, fontEx, fixViewport, fixStroke, renderCanvas, fixShadow, lazyload, selection } = INIT_VALUE;
                  if (INIT_VALUE.fontSelect !== hiddenInput.value && fontList && fontList.length > 0) {
                    const defaultFont = IS_REAL_WEBKIT || os === "macOS" ? { ch: "苹方-简", en: "PingFang SC" } : { ch: "微软雅黑", en: "Microsoft YaHei UI" },
                      initFont = Array_find(fontList, font => font.ch === defaultFont.ch || font.en === defaultFont.en); if (initFont) {
                        fontCache.forEach(item => { item.isSelected = false; item.el.classList.remove("hidden") });
                        tagsInput.value = ""; tagsEmptyTip.classList.add("hidden"); let panel = qS(".selected-tags-panel", tagsSlot);
                        if (panel) { panel.remove() } tagsSelectedArea.classList.add("hidden"); if (INIT_VALUE.fontSelect !== fontSelect) {
                          panel = cE("div", { class: "selected-tags-panel" }); appendNode(tagsSlot, panel);
                          const value = initFont.en, desc = initFont.ch, tagItem = cE("span", { class: "tag-item", "data-value": value, "data-text": desc, textContent: desc });
                          appendNode(panel, tagItem); const cacheItem = fontCache.get(initFont.en); if (cacheItem) { cacheItem.isSelected = true; cacheItem.el.classList.add("hidden") }
                          tagsSelectedArea.classList.remove("hidden"); win.emit("action:token-added", { code: value, text: desc });
                        } else { hiddenInput.value = addSingleQuote(fontSelect) }
                      } syncHiddenValue();
                  }
                  if (smoothTag.checked !== fontSmooth) { smoothTag.click() }
                  if (rangeScaleTag.value !== fontSize) { syncSliderUI(rangeScaleTag, readoutScaleTag, scaleTag, fontSize, 3) }
                  if (fixVPUSlot.checked !== fixViewport) { fixVPUSlot.click() }
                  if (rangeStrokeTag.value !== fontStroke) { syncSliderUI(rangeStrokeTag, readoutStrokeTag, strokeTag, fontStroke, 3) }
                  if (!fixStroke && fixBoldSlot.checked !== fixStroke) { fixBoldSlot.click() }
                  if (fixSelectionSlot.checked !== selection) { fixSelectionSlot.click() }
                  if (fixLazyloadSlot.checked !== lazyload) { fixLazyloadSlot.click() }
                  if (fixShadowSlot.checked !== fixShadow) { fixShadowSlot.click() }
                  if (fixStroke && fixBoldSlot.checked !== fixStroke) { fixBoldSlot.click() }
                  if (rangeShadowTag.value !== fontShadow) { syncSliderUI(rangeShadowTag, readoutShadowTag, shadowTag, fontShadow, 2) }
                  if (canvasSlot.checked !== renderCanvas) { canvasSlot.click() } if (rewriteTag.checked !== fontFace) { rewriteTag.click() }
                  if (colorPicker.getValue() !== shadowColor) { colorPicker.setValue(shadowColor) }
                  if (renderedTextarea.value !== fontCSS) { renderedTextarea.value = fontCSS; dispatchEvent(renderedTextarea, new Event("input")) }
                  if (unrenderedTextarea.value !== fontEx) { unrenderedTextarea.value = fontEx; dispatchEvent(unrenderedTextarea, new Event("input")) }
                  setTimeout(() => { if (saveBtn.classList.contains("preview")) { saveBtn.click() } }, 150); break;
                }
              }
            }); win.mount();
            function rollbackLastStyle() {
              if (!tagsInput.matches(":hover")) { usedFontName = DEFAULT_FONT_CH; tagsInput.placeholder = i18n.t("CurrentFont", { font: usedFontName }) }
              if (!reRendered) { return } styleManager.insert(MAIN_STYLE_ID, finalStyle, { type: MAIN_STYLE_TYPE }); updateMatrix(fontSize); adjuster?.(scaleMatrix);
              if (isRawGreasemonkey) {
                const ifs = gT("iframe", document.body), l = ifs.length, cssText = parseCsstextForIframe(finalStyle);
                if (l > 0) { for (let i = 0; i < l; ++i) { styleManager.insert(MAIN_STYLE_ID, cssText, { target: ifs[i], type: MAIN_STYLE_TYPE }) } }
              } else {
                ultimateBold.temporaryChangeStatus(boldFixCss, shadowRootCss); frameSync.broadcastStyleToIframes({ id: MAIN_STYLE_ID, cssText: finalStyle });
                frameSync.broadcastStyleToIframes({ temporary: true, cssArray: [boldFixCss, shadowRootCss] });
              }
            }
            function syncHiddenValue() {
              const selectedPanel = qS(".selected-tags-panel", tagsSlot); if (!selectedPanel || selectedPanel.children.length === 0) {
                hiddenInput.value = addSingleQuote(DEFAULT_FONT_EN); usedFontName = DEFAULT_FONT_CH; if (!tagsInput.matches(":hover")) { tagsInput.placeholder = i18n.t("CurrentFont", { font: usedFontName }) }
              } else {
                const selectedEnValues = Array_map(Array_from(selectedPanel.children), tag => addSingleQuote(getAttribute(tag, "data-value"))); hiddenInput.value = Array_join(selectedEnValues, ",");
              } dispatchEvent(hiddenInput, new Event("input"));
            }
            function setStyleVariable(target, value, digits) {
              target.style.setProperty("--value", Number(value).toFixed(digits)); target.style.setProperty("--text-value", `'${Number(value).toFixed(digits)}'`);
            }
            function syncSliderUI(rangeTag, readoutTag, displayTag, value, precision) {
              rangeTag.value = value; const parsedValue = Number(value).toFixed(precision); readoutTag.value = parsedValue; dispatchEvent(readoutTag, new Event("input"));
              dispatchEvent(readoutTag, new Event("change")); displayTag.style.setProperty("--value", value); displayTag.style.setProperty("--text-value", `'${value}'`);
            }
            function toggleDisabledState(v, t, h, e) {
              if (Number(v) === h) { t.checked && t.click(); setAttribute(t, "disabled", "") } else if (hasAttribute(t, "disabled")) { removeAttribute(t, "disabled"); e && !t.checked && t.click() }
            }
            function updateRangeValues(t, n1, n2, v, o, i, l) {
              v = v.trim() === "" ? o : Number(v); if (isNaN(v)) { v = o } const max = Number(getAttribute(n1, "max")), min = Number(getAttribute(n1, "min")); n1.value = v;
              dispatchEvent(n1, new Event("change")); n2.style.setProperty("--value", v); n2.style.setProperty("--text-value", `'${v}'`); if (v === i) { t.value = "OFF" } else
                if (v > max) { t.value = max.toFixed(l) } else if (v < min) { t.value = min.toFixed(l) } else { t.value = v.toFixed(l) } dispatchEvent(t, new Event("input"));
            }
            function expandOrCollapse(switcher, textarea) {
              win.trackInternal(switcher, "click", () => {
                const isExpand = getAttribute(switcher, "expand-switch") === "ON"; textarea.classList.toggle("hidden", isExpand);
                switcher.textContent = isExpand ? "\u2228" : "\u2227"; setAttribute(switcher, "expand-switch", isExpand ? "OFF" : "ON");
              });
            }
            async function getAvailableFontData(checkFont) {
              try {
                const cachedFontCheckList = await dataManager.get(FONTCHECKLIST); if (Array_isArray(cachedFontCheckList) && cachedFontCheckList.length > 0) { return uniq(cachedFontCheckList) }
                const fontCheckList = await detectAvailableFonts(checkFont); await dataManager.set(FONTCHECKLIST, fontCheckList, { expired: 2592e6 }); return fontCheckList;
              } catch { await dataManager.delete(FONTCHECKLIST); return [] }
            }
            async function detectAvailableFonts(checkFont) {
              const fontCheckList = await getFullFontlist(), fontAvailable = []; for (const [index, font] of fontCheckList.entries()) {
                if (!checkFont.detect(font.en) && !((font.en = toUnicodeEscapes(font.ch)) && checkFont.detect(font.en))) { continue }
                delete font.ps && Array_push(fontAvailable, { ...font, sort: index + 1 });
              } return fontAvailable.sort((a, b) => a.sort - b.sort);
            }
            function addSingleQuote(item) { return `'${item}'` }
          }

          async function openSaveDataPanel(submitData) {
            const domainFont = await dataManager.get(DOMAINFONTSET); let domainIndex = -1; domainIndex = updateDomainsIndex(domainFont);
            const languagePacks = {
              "en-US": { GlobalTitle: "Save to Global Data:", GlobalContent: "Save as global rendering data, which is used by default.", WebsiteTitle: "Save to Current Site Data:", WebsiteContent: "Save current settings for {host}.", EditDataList: "Manage site settings list", LastSave: "Last saved：", DeleteCurrent: "Delete current site data", GlobalSave: "Save to Global", WebsiteSave: "Save to Current Site", SaveDataTitle: "Save Settings", SaveGlobalContent: "Global rendering data saved successfully!", SaveSiteContent: "Current site rendering data saved successfully!", DeleteTitle: "Delete Settings", DeleteContent: "Current site rendering data deleted successfully!", DisableTitle: "Global Rendering Automatically Disabled", DisableContent: "No active styles detected upon saving. Global font rendering has been turned off. To re-enable, please configure valid parameters and save them as global data." },
              "zh-CN": { GlobalTitle: "保存到全局配置：", GlobalContent: "将当前配置保存为全局渲染规则，默认对所有网站生效。", WebsiteTitle: "保存到当前站点：", LastSave: "上次保存时间：", WebsiteContent: "将当前配置保存为 {host} 的专属渲染规则。", EditDataList: "管理所有配置站点列表", DeleteCurrent: "删除当前站点配置", GlobalSave: "保存到全局", WebsiteSave: "保存到当前站点", SaveDataTitle: "保存配置", SaveGlobalContent: "全局字体渲染配置已成功保存！", SaveSiteContent: "当前站点的专属字体渲染配置已成功保存！", DeleteTitle: "删除配置", DeleteContent: "当前站点的专属字体渲染配置已成功删除！", DisableTitle: "自动停用全局渲染", DisableContent: "检测到您在未应用任何有效样式的情况下进行了保存，系统已自动关闭全局字体渲染。如需重新启用，请配置有效参数并保存为全局数据。", Cancel: "取消" },
              "zh-TW": { GlobalTitle: "儲存至全域設定：", GlobalContent: "將目前設定儲存為全域轉譯規則，預設對所有網站生效。", WebsiteTitle: "儲存至目前網站：", LastSave: "上次儲存時間：", WebsiteContent: "將目前設定儲存為 {host} 的專屬轉譯規則。", EditDataList: "管理所有設定網站列表", DeleteCurrent: "刪除目前網站設定", GlobalSave: "儲存至全域", WebsiteSave: "儲存至目前網站", SaveDataTitle: "儲存設定", SaveGlobalContent: "全域字型渲染設定已成功儲存！", SaveSiteContent: "目前網站的專屬字型渲染設定已成功儲存！", DeleteTitle: "刪除設定", DeleteContent: "目前網站的專屬字型渲染設定已成功刪除！", DisableTitle: "自動停用全域轉譯", DisableContent: "偵測到您在未套用任何有效樣式的情況下進行了儲存，系統已自動關閉全域字型渲染。如需重新啟用，請設定有效參數並儲存為全域資料。", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), stateManager = await bus.get("stateManager"), length = domainFont.length,
              html = `<div class="form-group"><p class="title darkgreen">${i18n.t("GlobalTitle")}</p><p>${i18n.t("GlobalContent")}</p></div><div class="form-group"><p class="title firebrick">${i18n.t("WebsiteTitle")}<button class="btn btn-action edit-datalist" data-action="edit-datalist"${length === 0 ? " disabled" : ""}>${i18n.t("EditDataList")} (${length})</button></p><p class="nowrap indigo">${domainIndex === -1 ? i18n.t("WebsiteContent", { host: TOP_HOST }) : `<span class="bold">${i18n.t("LastSave")}</span><span class="date">${await getSavedDate()}</span><button class="btn btn-action"data-action="delete-data">${i18n.t("DeleteCurrent")}</button>`}</p></div><div class="btn-box"><button data-action="save-global" class="btn btn-primary">${i18n.t("GlobalSave")}</button><button data-action="save-domain"class="btn btn-ok">${i18n.t("WebsiteSave")}</button><button data-action="close"class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:500px;top:250px}.dialog-header{background:#1482ea}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px}.form-group .title{font-weight:700}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:18px 0 0}button.btn-action{margin:0;padding:5px 10px}button.edit-datalist{margin:0 0 0 8px;background:#ffe8e8;border:1px solid #b22222;color:#b22222}.form-group span.date{padding:0 12px 0 0}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("SaveDataTitle"));
            addListener(win, "action:edit-datalist:click", () => { openSiteDataManagePanel(); win.close() });
            addListener(win, "action:delete-data:click", async () => {
              const domainValues = await dataManager.get(DOMAINFONTSET); Array_splice(domainValues, domainIndex, 1); await dataManager.set(DOMAINFONTSET, domainValues);
              openSimpleDialog(i18n.t("DeleteTitle"), i18n.t("DeleteContent"), "dialog", true, true);
            });
            addListener(win, "action:save-global:click", async () => {
              if (typeof submitData !== "object") { return } const { fontFace, fontSmooth, fontStroke, fontShadow, fontSize } = submitData,
                isEmptyConfig = !fontFace && !fontSmooth && !fontStroke && !fontShadow && fontSize === 1, saveGlobalData = async () => {
                  const configure = await dataManager.get(CONFIGURE); await dataManager.set(FONTSET, submitData); stateManager.saveSuccess();
                  if (isEmptyConfig) {
                    if (!configure.globalDisable) { await dataManager.set(CONFIGURE, { ...configure, globalDisable: true }) }
                    openSimpleDialog(i18n.t("DisableTitle"), i18n.t("DisableContent"), "dialog", false, true, "#b22222");
                  } else {
                    if (configure.globalDisable) { await dataManager.set(CONFIGURE, { ...configure, globalDisable: false }) }
                    openSimpleDialog(i18n.t("SaveDataTitle"), i18n.t("SaveGlobalContent"), "dialog", true, true);
                  }
                }; if (domainIndex === -1) { await saveGlobalData(); return } crossSavingData(saveGlobalData);
            });
            addListener(win, "action:save-domain:click", async () => {
              if (typeof submitData !== "object") { return }
              const domainValue = { domain: TOP_HOST, fontDate: Date.now(), ...submitData }, domainValues = await dataManager.get(DOMAINFONTSET);
              domainIndex !== -1 ? Array_splice(domainValues, domainIndex, 1, domainValue) : Array_push(domainValues, domainValue); stateManager.saveSuccess();
              await dataManager.set(DOMAINFONTSET, domainValues); openSimpleDialog(i18n.t("SaveDataTitle"), i18n.t("SaveSiteContent"), "dialog", true, true);
            }); win.mount();
            async function getSavedDate() {
              const savedData = await bus.get("ProcessSavedData"), domainIndex = savedData.value.domainIndex;
              if (domainIndex === -1) { return "" } const domainValues = await dataManager.get(DOMAINFONTSET), valueDate = domainValues[domainIndex].fontDate;
              return setDateFormat("yyyy-MM-dd HH:mm:ss", new Date(valueDate));
            }
          }

          function crossSavingData(saveDataFn) {
            const languagePacks = {
              "en-US": { SaveLocation: "Confirm Storage Location", ConfirmContent: "Are you sure you want to overwrite and save the <strong class='darkgreen'>Current site data</strong> to the <strong class='dodgerblue'>Global data</strong>?", OK: "Confirm" },
              "zh-CN": { SaveLocation: "确认存储位置", ConfirmContent: "确认要将 <strong class='darkgreen'>当前站点配置</strong> 覆盖并保存到 <strong class='dodgerblue'>全局配置</strong> 吗？", OK: "确定", Cancel: "取消" },
              "zh-TW": { SaveLocation: "確認儲存位置", ConfirmContent: "確認要將 <strong class='darkgreen'>目前網站設定</strong> 覆蓋並儲存至 <strong class='dodgerblue'>全域設定</strong> 嗎？", OK: "確定", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p>${i18n.t("ConfirmContent")}</p></div><div class="btn-box"><button data-action="confirm-save"class="btn btn-extra">${i18n.t("OK")}</button><button data-action="close"class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:450px;right:45px;top:300px}.dialog-header{background:#ea9f14}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px;line-height:150%}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:18px 0 0}`,
              confirmWin = new DialogPanelController({ id: randomString(6, "alpha"), type: "prompt", html, css, styleManager }); confirmWin.setTitle(i18n.t("SaveLocation"));
            addListener(confirmWin, "action:confirm-save:click", async () => { await saveDataFn(); confirmWin.close() }); confirmWin.mount();
          }

          async function openCustomFontAddingToolPanel() {
            const languagePacks = {
              "en-US": { Title: "Custom Font Adding Panel", Content: `① Enter your entries in the text area below following the format to add them. We recommend using the "<a data-action="launch-addTool">Quick Add Tool</a>" first, or refer to the examples fill-in. The system automatically filters out invalid formats or items already in the "<a href="${GMsupportURL}/{path}" target="_blank">Built-in Font Library</a>".`, Placeholder: `Format example: (one font naming table entry per line)\n{ "ch": "Chinese name", "en": "English name" }\u21b2\n{ "ch": "Chinesen name", "en": "English name", "ps": "PostScript name" }\u21b2\n\nNote 1: If the "Font Chinese Name" is not available, it can be replaced by the unique name in English or other languages.\nNote 2: "ps" is the PostScript name, Provide it as much as possible.`, Warn: "Note: Adding too many custom fonts may slow down font detection.", CustomFontVariant: "②&nbsp;Configure the font-variant style properties for fonts below.", VariantWarn: "Leave blank if you are unfamiliar with this property to avoid rendering issues.", CustomOpenType: `③&nbsp;Configure the OpenType <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> attributes below.`, CustomOpenTypeWarn: "Leave blank if the font you are currently setting is not an OpenType font.", Path: "../wiki/Font-Rendering-(Customized)#built-in-font-library", AddTool: "Quick Add Tool", SaveTitle: "Custom Font Data Storage", SaveSuccess: `Custom font data saved successfully!<p class="fs12 darkorange">Note: Invalid or duplicate font data will be filtered out.</p>`, ErrTitle: "Validation Failed", ErrContent: "Invalid font data. Please re-check and try again.", ClearSuccess: "Custom font data has been successfully cleaned!", AddToolIntro: "Click to Open a toolbar that helps you to quickly add font naming table", Save: "Save Data" },
              "zh-CN": { Title: "自定义字体添加面板", Content: `① 请在下方文本域内按格式输入即可添加。建议您优先使用『<a data-action="launch-addTool">快速添加工具</a>』或参考示例填写。系统会自动过滤格式错误或与『<a href="${GMsupportURL}/{path}" target="_blank">内置字体表</a>』重复的条目。`, Placeholder: `格式样例：(每行一组字体命名表数据)\n{ "ch": "中文字体名一", "en": "英文字体名一" }\u21b2\n{ "ch": "中文字体名二", "en": "英文字体名二", "ps": "Post-Script 名称" }\u21b2\n\n注1：若无中文名称，可用英文或其他语言名称代替。\n注2：若无英文名称，请自定义一个唯一的英文标识。\n注3：“ps” 为字体的 PostScript 名称，建议尽可能提供。`, Warn: "提示：请勿添加过多的自定义字体，以免影响字体检测的运行速度。", CustomFontVariant: "②&nbsp;您可以在下方设置字体的 font-variant 变体样式属性。", VariantWarn: "如果您不了解该属性，请保持留空，以免导致字体渲染异常。", CustomOpenType: `③&nbsp;您可以在下方设置 OpenType 字体的 <a href="https://learn.microsoft.com/zh-cn/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。`, CustomOpenTypeWarn: "如果您设置的常规字体不属于 OpenType 字体，请保持留空。", Path: "../wiki/字体渲染（自用脚本）#既定的字体表", AddTool: "快速添加工具", SaveTitle: "自定义字体数据存储", SaveSuccess: `自定义字体数据已成功保存！<p class="fs12 darkorange">注：格式错误或重复的字体数据将被自动过滤。</p>`, ErrTitle: "数据校验失败", ErrContent: "自定义字体数据格式无效，请检查后重试。", ClearSuccess: "自定义字体数据已为您清理成功！", AddToolIntro: "点击打开帮助您快速添加字体命名表的工具栏", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "自訂字型新增面板", Content: `① 请在下方文字區域內依格式輸入即可新增。建議優先使用『<a data-action="launch-addTool">快速新增工具</a>』或參考範例填寫。系統會自動過濾格式錯誤或與『<a href="${GMsupportURL}/{path}" target="_blank">內建字型表</a>』重複的項目。`, Placeholder: `格式範例：(每行一組字型命名表資料)\n{ "ch": "中文字型名一", "en": "英文字型名一" }\u21b2\n{ "ch": "中文字型名二", "en": "英文字型名二", "ps": "Post-Script 名稱" }\u21b2\n\n註1：若無中文名稱，可用英文或其他語言名稱代替。\n註2：若無英文名稱，請自訂一個唯一的英文標識。\n註3：「ps」為字型的 PostScript 名稱，建議儘可能提供。`, Warn: "提示：請勿新增過多的自訂字型，以免影響字型偵測的執行速度。", CustomFontVariant: "②&nbsp;您可以在下方設定字型的 font-variant 變體樣式屬性。", VariantWarn: "如果您不了解該屬性，請保持留空，以免導致字型渲染異常。", CustomOpenType: `③&nbsp;您可以在下方設定 OpenType 字型的 <a href="https://learn.microsoft.com/zh-tw/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 屬性。`, CustomOpenTypeWarn: "如果您設定的常規字型不屬於 OpenType 字型，請保持留空。", Path: "../wiki/字体渲染（自用脚本）#既定的字体表", AddTool: "快捷新增工具", SaveTitle: "自訂字型數據儲存", SaveSuccess: `自訂字型數據已成功保存！<p class="fs12 darkorange">註：格式錯誤或重複的字型資料將被自動過濾。</p>`, ErrTitle: "資料驗證失敗", ErrContent: "字型資料格式無效，請檢查後重試。", ClearSuccess: "自訂字體數據已為您清理成功！", AddToolIntro: "點擊開啓幫助您快速新增字型命名表的工具欄", Save: "儲存資料", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), customFontPromises = [dataManager.get(CUSTOMFONTLIST), dataManager.get(CUSTOMPROPERTY)],
              [customFontData, customProperty] = await Promise.all(customFontPromises), { variant = "", feature = "" } = customProperty,
              customFontArray = Array_map(customFontData, fontData => JSON_stringify(fontData)), customFontList = Array_join(customFontArray, "\n"),
              html = `<div class="form-group"><p class="fs14 grey">${i18n.t("Content", { path: i18n.t("Path") })}</p><textarea id="font-list-content" placeholder='${i18n.t("Placeholder")}'>${customFontList}</textarea><p class="warn firebrick fs12">${i18n.t("Warn")}</p></div><div class="form-group"><p class="fs14 grey">${i18n.t("CustomFontVariant")}</p><input type="text" id="font-variant-content" placeholder='common-ligatures small-caps' value="${variant}" /><p class="warn firebrick fs12">${i18n.t("VariantWarn")}</p></div><div class="form-group"><p class="fs14 grey">${i18n.t("CustomOpenType")}</p><input type="text" id="font-feature-content" placeholder='"liga" 0,"tnum","zero"' value='${feature}' /><p class="warn firebrick fs12">${i18n.t("CustomOpenTypeWarn")}</p></div><div class="btn-box"><button data-action="launch-addTool" class="btn btn-primary anchor-add-tool tooltip" data-current-anchor="--add-tool" data-tooltip="${i18n.t("AddToolIntro")}">${i18n.t("AddTool")}</button><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:550px;top:100px}.dialog-header{background:#fa8c16}.form-group{margin-bottom:6px}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color:#333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:16px 0 0}.form-group :is(input,textarea){padding:8px;min-width:100%;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;overscroll-behavior:contain;scrollbar-color:auto;font:normal 400 15px/150% var(--fr-shared-monospaced)!important;cursor:auto}.form-group textarea{min-height:178px}:is(.form-group input, textarea)::placeholder{color:#aaa;white-space:pre-line;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;word-break:break-word}.form-group textarea::-webkit-scrollbar{height:8px;width:8px}p.warn{margin:-4px 0 0 2px}.form-group p a{font-size:14px;line-height:125%;color:#1482ea}.form-group p a[data-action]{cursor:pointer}.anchor-add-tool{anchor-name:--add-tool}@-moz-document url-prefix(){textarea{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), fontlistTag = qS("#font-list-content", win.dialog),
              REGEX_JSON_LINE = /{\s*"ch":\s*"@?[^"]+"\s*,\s*"en":\s*"@?[^"\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+"\s*(?:,\s*"ps":\s*"[^"]+"\s*)?}/g,
              formatConfigs = { "font-list-content": [true, false], "font-variant-content": [true, true, /[^\w,\- ]/g], "font-feature-content": [true, true, /[^\w",\- ]/g] };
            win.setTitle(i18n.t("Title"));
            win.trackInternal(win.dialog, "change", e => { const { id, value } = e.target, rule = formatConfigs[id]; if (rule) { e.target.value = standardizeString(value, ...rule) } });
            addListener(win, "action:launch-addTool:click", () => { openCustomFontAddToolPanel() });
            addListener(win, "action:launch-save:click", async e => {
              const { "font-list-content": fontlist = "", "font-variant-content": variant, "font-feature-content": feature } = e.detail.formValues;
              await dataManager.set(CUSTOMPROPERTY, { variant, feature }); const trimmedFontList = fontlist.trim();
              if (trimmedFontList.length === 0) { await dataManager.delete(CUSTOMFONTLIST); openSimpleDialog(i18n.t("SaveTitle"), i18n.t("ClearSuccess"), "dialog", true, true); return }
              const fontListArray = trimmedFontList.match(REGEX_JSON_LINE); if (Array_isArray(fontListArray) && fontListArray.length > 0) {
                const output = await bus.get("OutputRenderData"), parsedFontArray = getUniqueFontlist(Array_map(fontListArray, JSON_parse)),
                  preFontlist = safeDeepClone([...output.fontlist]), parsedFontlist = filterDuplicateFonts(parsedFontArray, preFontlist);
                await Promise.all([dataManager.set(CUSTOMFONTLIST, parsedFontlist), dataManager.delete(FONTCHECKLIST)]);
                openSimpleDialog(i18n.t("SaveTitle"), i18n.t("SaveSuccess"), "dialog", true, true); return;
              } openSimpleDialog(i18n.t("ErrTitle"), i18n.t("ErrContent"), "prompt", false, false, "#b22222");
            });
            win.onMessage(e => {
              if (e.data?.source !== "FontNamingTable" || e.eventName !== "FONTDATA_OUT_TRANS") { return }
              const fontTable = e.data.payload; if (!fontTable) { return } const currentValue = fontlistTag.value.trim(), lineBreak = currentValue ? "\n" : "";
              fontlistTag.value = `${currentValue}${lineBreak}${fontTable}\n`; fontlistTag.scrollTop = fontlistTag.scrollHeight;
            }); win.mount();
            function filterDuplicateFonts(arra, arrb) {
              const forbiddenKeys = new Set(Array_filter(Array_flatMap(arrb, item => [item.en, item.ch]), Boolean));
              return Array_filter(arra, x => !forbiddenKeys.has(x.en) && !forbiddenKeys.has(x.ch));
            }
          }

          async function openCustomMonoAddingToolPanel() {
            const languagePacks = {
              "en-US": { Title: "Custom Monospaced Fonts", Switcher: "Enable Custom Monospaced Fonts (OFF*)", Content: `① Enter domains and site selectors below to apply monospace fonts. Separate multiple domains with <code>&nbsp;|&nbsp;</code>. Invalid entries will be automatically filtered out. <span class="firebrick fs14">(Recommended: See the <a class="fs14" href="${GMsupportURL}/74" target="_blank">Author's Guide [CHS]</a>)</span>`, SiterulePlaceholder: `One rule per line. Multiple rules can be added for the same site, and the same selector can match multiple domains. Format Example:\n\n@github.com##[class~='blob-code'] \n@github.com##.example,#abc,div:not(.test)\n@github.dev|github.io###test:not([class='test'])`, Warn: "Leave blank or use the author's rules if you are unfamiliar with style rules.", MonospaceList: "② Enter custom monospaced fonts below, follow the example.", MonospaceWarn: "Note: The standard 'monospaced' font family is built-in; no need to re-add.", MonospaceFeature: `③ Configure the OpenType <a href="https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> attributes below.`, MonospaceFeatureWarn: "Leave blank if your monospaced font is not an OpenType font.", RuleError: "Selector Activation Failed", RuleErrorContent: "Invalid root domain or element selector. Please check and retry.", MonoError: "Font Parsing Failed", MonoErrorContent: "Invalid monospaced font data format. Please check and retry.", Error: "Parsing Failed", ErrorContent: "Unable to read submitted data. Please check the format and try again.", SaveOkTitle: "Save Settings", SaveOkContent: "Custom monospaced font data saved successfully!", Save: "Save Data" },
              "zh-CN": { Title: "自定义英文等宽字体数据", Switcher: "启用自定义英文等宽字体（默认关闭）", Content: `① 您可在下方文本域内设置应用等宽字体的域名及元素选择器，多个域名请用<code>&nbsp;|&nbsp;</code>分隔，错误条目将被自动剔除。<span class="firebrick fs14">(建议您参考 <a class="fs14" href="${GMsupportURL}/74" target="_blank">作者推荐</a> 填写)</span>`, SiterulePlaceholder: `每行仅限填写一组规则。同一站点支持添加多条不同规则，同一选择器亦可关联多个域名。格式示例：\n\n@github.com##[class~='blob-code'] \n@github.com##.example,#abc,div:not(.test)\n@github.dev|github.io###test:not([class='test'])`, Warn: "若您不了解样式规则，请保持留空或直接使用作者提供的站点规则。", MonospaceList: "② 您可在下方设置自定义英文等宽字体，请按示例格式填写。", MonospaceWarn: "注意：系统已内置 monospaced 字体族，无需重复添加。", MonospaceFeature: `③ 您可以在下方设置 OpenType 字体的 <a href="https://learn.microsoft.com/zh-cn/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 属性。`, MonospaceFeatureWarn: "如果您设置的等宽字体不属于 OpenType 字体，请保持留空。", RuleError: "选择器配置未生效", RuleErrorContent: "自定义的根域名或元素选择器不正确，请检查后重试。", MonoError: "字体数据解析失败", MonoErrorContent: "自定义的等宽字体数据格式有误，请检查后重试。", Error: "数据解析失败", ErrorContent: "系统无法读取您提交的数据，请检查格式后重试。", SaveOkTitle: "保存等宽字体配置", SaveOkContent: "自定义英文等宽字体数据已成功保存！", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "自訂英文等寬字型資料", Switcher: "啓用自訂英文等寬字型（預設關閉）", Content: `① 您可在下方文字欄位內設定套用等寬字型的網域及元素選擇器，多個網域請用<code>&nbsp;|&nbsp;</code>分隔，錯誤項目將被自動剔除。<span class="firebrick fs14">(建議您參考 <a class="fs14" href="${GMsupportURL}/74" target="_blank">作者推薦</a> 填寫)</span>`, SiterulePlaceholder: `每行僅限填寫一組規則。同一網站支援新增多條不同規則，同一選取器亦可關聯多個網域。格式範例：\n\n@github.com##[class~='blob-code'] \n@github.com##.example,#abc,div:not(.test)\n@github.dev|github.io###test:not([class='test'])`, Warn: "若您不了解樣式規則，請保持留空或直接使用作者提供的網站規則。", MonospaceList: "② 您可在下方設定自訂英文等寬字型，請按範例格式填寫。", MonospaceWarn: "注意：系統已內建 monospaced 字型族，無需重複新增。", MonospaceFeature: `③ 您可以在下方設定 OpenType 字型的 <a href="https://learn.microsoft.com/zh-tw/typography/opentype/spec/featurelist" target="_blank">font-feature-settings</a> 屬性。`, MonospaceFeatureWarn: "如果您設定的等寬字型不屬於 OpenType 字型，請保持留空。", RuleError: "選取器設定未生效", RuleErrorContent: "自訂的根網域或元素選取器不正確，請檢查後重試。", MonoError: "字型資料解析失敗", MonoErrorContent: "等寬字型資料格式錯誤，請檢查後重試。", Error: "資料解析失敗", ErrorContent: "系統無法讀取您提交的資料，請檢查格式後重試。", SaveOkTitle: "儲存等寬字型設定", SaveOkContent: "自訂英文等寬字型資料已成功儲存！", Save: "儲存資料", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              monospacePromises = [dataManager.get(CONFIGURE), dataManager.get(MONOSITERULES), dataManager.get(MONOFONTLIST), dataManager.get(MONOFEATURE)],
              [configure, monoSiteRules, monoFontlist, monoFeature] = await Promise.all(monospacePromises), monoSiteRulelist = Array_join(monoSiteRules, "\n"),
              html = `<div class="form-group form-inline porte"><label>${i18n.t("Switcher")}</label><span class="switch-container"><input type="checkbox" data-action="launch-enable" id="enable-monospaced"${configure.isCustomMono ? " checked" : ""} /><label for="enable-monospaced" class="switch-slider"></label></span></div><div class="form-group"><p class="fs14 grey">${i18n.t("Content")}</p><textarea id="siterules-content" placeholder="${i18n.t("SiterulePlaceholder")}">${monoSiteRulelist}</textarea><p class="warn firebrick fs12">${i18n.t("Warn")}</p></div><div class="form-group"><p class="fs14 grey">${i18n.t("MonospaceList")}</p><input type="text" id="monospaced-content" placeholder="'Source Code Pro','Mono','Monaco'" value="${monoFontlist}" /><p class="warn firebrick fs12">${i18n.t("MonospaceWarn")}</p></div><div class="form-group"><p class="fs14 grey">${i18n.t("MonospaceFeature")}</p><input type="text" id="monospaced-feature-content" placeholder='"liga" 0,"tnum","zero"' value='${monoFeature}' /><p class="warn firebrick fs12">${i18n.t("MonospaceFeatureWarn")}</p></div><div class="btn-box"><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:530px;top:100px}.dialog-header{background:#fa8c16}.form-group{margin-bottom:6px}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color:#333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:16px 0 0}.form-group code{background:#f0f2f5;border:1px solid #f0f2f5;font-size:14px;line-height:22px;border-radius: 4px;padding-block:0;padding-inline:4px}.form-group :is(input,textarea){padding:8px;min-width:100%;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;overscroll-behavior:contain;scrollbar-color:auto;font:normal 400 15px/150% var(--fr-shared-monospaced)!important;cursor:auto}.form-group textarea{min-height:170px}:is(.form-group input, textarea)::placeholder{color:#aaa;white-space:pre-line;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;word-break:break-word}.form-group textarea::-webkit-scrollbar{height:8px;width:8px}p.warn{margin:-4px 0 0 2px}.form-group p a{font-size:14px;line-height:125%;color:#1482ea}.form-group p a[data-action]{cursor:pointer}.porte{padding-bottom:6px;border-bottom:1px solid #ccc}@-moz-document url-prefix(){textarea{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, win.dialog),
              REGEX = { font: /'(?:ui-)?monospaced',?/gi, rule: /@((?:[\w[\]\-.:]+\|?)+)##(?![^@]*##)[\w\-*.#:+>()~[\]=^$|,' ]+/g, mono: /'@?[^'\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+'/g, feature: /[^\w",\- ]/g },
              nodes = { switcher: qW("#enable-monospaced"), textareaTag: qW("#siterules-content"), monoTag: qW("#monospaced-content"), featureTag: qW("#monospaced-feature-content") },
              configs = { "siterules-content": [false, true], "monospaced-content": [false, true, REGEX.font], "monospaced-feature-content": [true, true, REGEX.feature] },
              nodeArray = [nodes.textareaTag, nodes.monoTag, nodes.featureTag]; win.setTitle(i18n.t("Title")); changeStatus(nodes.switcher.checked, nodeArray);
            win.trackInternal(win.dialog, "change", e => { const { id, value } = e.target, config = configs[id]; if (config) { e.target.value = standardizeString(value, ...config) } });
            addListener(win, "action:launch-enable:click", e => { changeStatus(e.detail.formValues["enable-monospaced"], nodeArray) });
            addListener(win, "action:launch-save:click", async e => {
              const { "siterules-content": siterules, "monospaced-content": monospaces, "monospaced-feature-content": feature, "enable-monospaced": enableMono } = e.detail.formValues,
                siteRuleArray = siterules ? siterules.match(REGEX.rule) : null, monospaceArray = monospaces ? monospaces.match(REGEX.mono) : null;
              if (siterules && !siteRuleArray) { return openSimpleDialog(i18n.t("RuleError"), i18n.t("RuleErrorContent"), "prompt", false, false, "#b22222") }
              if (monospaces && !monospaceArray) { return openSimpleDialog(i18n.t("MonoError"), i18n.t("MonoErrorContent"), "prompt", false, false, "#b22222") }
              const syncData = (key, val, process = v => v) => (val ? dataManager.set(key, process(val)) : dataManager.delete(key)); try {
                const configure = await dataManager.get(CONFIGURE); await Promise.all([syncData(MONOSITERULES, siteRuleArray, uniq), syncData(MONOFONTLIST, monospaceArray, arr => Array_join(uniq(arr), ",")), syncData(MONOFEATURE, feature), dataManager.set(CONFIGURE, { ...configure, isCustomMono: enableMono })]);
                win.close(); openSimpleDialog(i18n.t("SaveOkTitle"), i18n.t("SaveOkContent"), "dialog", true, true);
              } catch { openSimpleDialog(i18n.t("Error"), i18n.t("ErrorContent"), "dialog", false, false, "#b22222") }
            }); win.mount();
            function changeStatus(checked, nodes) {
              Array_forEach(nodes, node => { const name = node.id ? "readonly" : "grayscale"; node.toggleAttribute("disabled", !checked); node.classList.toggle(name, !checked) });
            }
          }

          async function openSiteDataManagePanel() {
            const languagePacks = {
              "en-US": { Title: "Custom Site Settings List", SaveInfo: `<strong class="darkgreen">Note: </strong>Search matching domains are automatically selected. Please make sure everything looks right before saving, as changes are final.`, Search: "Search", Empty: "---- No custom site setting data ----", Delete: "Delete", Reset: "Reset", SaveSuccess: "Saved Successfully", SaveSuccessContent: "Custom site settings Saved Successfully!", Save: "Save Data" },
              "zh-CN": { Title: "网站个性化设置列表", SaveInfo: `<strong class="darkgreen">提示：</strong>搜索会自动选中匹配的域名。数据保存后将无法撤销，提交前请仔细确认。`, Search: "搜索域名", Empty: "---- 暂无个性化设置站点 ----", Delete: "删除", Reset: "重置", SaveSuccess: "保存成功", SaveSuccessContent: "您的个性化站点设置已保存成功！", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "網站個性化設定列表", SaveInfo: `<strong class="darkgreen">提示：</strong>搜索會自動選取相符的網域。資料儲存後將無法復原，提交前請仔細確認。`, Search: "搜尋網域", Empty: "---- 暫無個性化設定站點 ----", Delete: "刪除", Reset: "重置", SaveSuccess: "儲存成功", SaveSuccessContent: "您的個性化站點設定已儲存成功！", Save: "儲存數據", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p class="fs14">${i18n.t("SaveInfo")}</p></div><div class="form-group"><div class="form-group form-sub form-inline"><input id="search-data" type="search"><button data-action="launch-search" id="search-data-search">${i18n.t("Search")}</button></div><ul id="search-data-list"></ul></div><div class="btn-box"><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:560px;top:120px}.dialog-header{background:#ca095d}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}#search-data{margin:0;padding:4px 8px;width:80%;height:32px;border:1px solid #777;border-radius:4px; outline:none;font:normal 400 14px/150% var(--fr-shared-monospaced)!important}#search-data-search{margin:0;padding:4px 10px;width:19%;height:32px;background:#eee;color:#333;border:1px solid #777;border-radius:4px;font-size:14px;line-height:150%;outline:none;cursor:pointer}#search-data-search:hover{background:#f6f6f6;box-shadow:0 0 3px #a7a7a7}#search-data-list{overflow-x:hidden;margin:0;padding:0;list-style:none;max-height:315px;overscroll-behavior:contain;scrollbar-color:auto}#search-data-list::-webkit-scrollbar{height:10px;width:10px}#search-data-list li{display:flex;overflow:hidden;margin:0;padding:5px 10px;color:#555;list-style:none;white-space:nowrap;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;justify-content:space-between}#search-data-list li ::selection{background:#ca095d!important;color:#fff!important}li span.number{padding:2px}li span.list{margin-right:auto;padding:2px 8px 2px 0;width:85%;text-align:left;text-overflow:ellipsis;font-size:14px;font-weight:700;-webkit-user-select:all;user-select:all}li span a.action{color:#800000;font-size:14px;cursor:pointer;padding:2px}ul li:nth-child(2n-1){background-color:#fff8fccc}ul li:hover{background-color:#fdf6eccc}.reset{text-decoration:line-through;font-style: italic}ul li#empty{display:list-item;padding:18px 8px;text-align:center;color:#555}.serial{margin:0;padding:2px 8px 2px;font-size:14px}@-moz-document url-prefix(){ul{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("Title"));
            const domainSetList = await dataManager.get(DOMAINFONTSET), qW = s => qS(s, win.dialog), ulTag = qW("ul"), inputTag = qW("#search-data"),
              actionSet = new Set(), searchBtn = qW("#search-data-search"), createListItem = ({ domain, fontDate }, index) => {
                const safeSite = toSafeString(domain), liTag = cE("li"), dateContent = `<span class="fs14">${setDateFormat("yyyy-MM-dd", new Date(fontDate))}</span>`,
                  content = `<span class="serial">${String(index).padStart(2, "0")}.</span><span class="list fs14">${safeSite}</span>${dateContent}`;
                liTag.innerHTML = tTP.createHTML(`<span>[<a class="action" data-domain-name="${safeSite}">${i18n.t("Delete")}</a>]</span>${content}`); return liTag;
              }; let fragment; const currentSerial = domainSetList.length; if (currentSerial === 0) { fragment = cE("li", { id: "empty", textContent: i18n.t("Empty") }) } else {
                fragment = document.createDocumentFragment(); for (let i = 0; i < currentSerial; ++i) { fragment.appendChild(createListItem(domainSetList[i], i + 1)) }
              } appendNode(ulTag, fragment);
            win.trackInternal(ulTag, "click", e => {
              const ATag = e.target.closest("a[data-domain-name]"); if (!ATag) { return } const site = getAttribute(ATag, "data-domain-name"); if (!site) { return }
              const domainTag = ATag.parentElement.nextElementSibling.nextElementSibling, isDeleted = ATag.dataset.del; if (!isDeleted) {
                actionSet.add(site); ATag.textContent = i18n.t("Reset"); ATag.classList.add("darkgreen"); domainTag.classList.add("reset"); ATag.dataset.del = "true";
              } else { actionSet.delete(site); ATag.textContent = i18n.t("Delete"); ATag.classList.remove("darkgreen"); domainTag.classList.remove("reset"); delete ATag.dataset.del }
            });
            win.trackInternal(inputTag, "focus", e => { e.target.classList.remove("peach-border") });
            win.trackInternal(inputTag, "keydown", e => { if (e.key === "Enter") { InputShield.stopPropagate(e); preventDefault(e); searchBtn.focus(); searchBtn.click() } });
            addListener(win, "action:launch-search:click", () => { searchTextAndSelect(inputTag, ulTag, "li>:nth-child(3)") });
            addListener(win, "action:launch-save:click", async () => {
              const domainFont = await dataManager.get(DOMAINFONTSET); let isCurrentSite = false; for (const site of actionSet) {
                if (site === CUR_HOST) { isCurrentSite = true } const domainIndex = updateDomainsIndex(domainFont, site);
                if (domainIndex !== -1) { Array_splice(domainFont, domainIndex, 1) }
              } await dataManager.set(DOMAINFONTSET, domainFont); const type = isCurrentSite ? "dialog" : "prompt";
              win.close(); openSimpleDialog(i18n.t("SaveSuccess"), i18n.t("SaveSuccessContent"), type, true, isCurrentSite, "#ca095d");
            }); win.mount();
          }

          function openResetDataDialog(hasChanges) {
            const languagePacks = {
              "en-US": { Title: "Reset or Restore Settings?", Intro: `Our『Reset & Restore』feature helps you change your current settings back to <strong class="slategray">initial state</strong>, or bring back to <strong class="slategray">the last saved settings</strong>. It is perfect for when you make a mistake or simply want to try out new features.`, ResetIntro: `<strong>Reset:</strong> Restore all settings to the initial state, manually saving required.`, RestoreIntro: "<strong>Restore:</strong> Retrieve the last saved data and automatically restore the preview rendering.", AbortIntro: "<strong>Cancel:</strong> Abort the current reset or restore action. ", NoChanged: "Settings have not changed, no need to restore!" },
              "zh-CN": { Title: "确认要重置或恢复设置吗？", Intro: `『重置与恢复』可以帮您把当前的设置还原至<strong class="slategray">初始状态</strong>，或者找回<strong class="slategray">上次保存的数据</strong>。当您不小心改错了设置，或者想尝试新的功能组合时，用它就能轻松搞定。`, ResetIntro: "<strong>重置：</strong>将所有设置恢复到初始状态，需要手动保存。", RestoreIntro: "<strong>恢复：</strong>一键找回上次保存的数据，自动恢复预览渲染。", AbortIntro: "<strong>取消：</strong>终止当前的重置或恢复流程。", NoChanged: "设置未发生变化，无需恢复！", Reset: "重置", Restore: "恢复", Cancel: "取消" },
              "zh-TW": { Title: "確認要重設或還原設定嗎？", Intro: `「重設與還原」可以幫您將目前設定恢復至<strong class='slategray'>初始狀態</strong>，或找回<strong class='slategray'>上次儲存的資料</strong>。當您不小心改錯設定，或想嘗試新的參數組合時，可以用它輕鬆還原。`, ResetIntro: "<strong>重設：</strong>將所有設定恢復至初始狀態，需要手動儲存。", RestoreIntro: "<strong>還原：</strong>一鍵找回上次儲存的資料，自動恢復預覽渲染。", AbortIntro: "<strong>取消：</strong>終止目前的重設或還原流程。", NoChanged: "設定未發生變化，無需還原！", Reset: "重設", Restore: "還原", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p>${i18n.t("Intro")}</p><p class="firebrick">${i18n.t("ResetIntro")}</p><p class="darkgreen">${i18n.t("RestoreIntro")}</p><p class="grey">${i18n.t("AbortIntro")}</p></div><div class="btn-box"><button data-action="trigger-reset" class="btn btn-extra">${i18n.t("Reset")}</button><button data-action="trigger-restore" class="btn btn-ok${hasChanges ? "" : " anchor-restore-data tooltip grayscale"}"${hasChanges ? "" : ` data-current-anchor="--restore-data" data-tooltip="${i18n.t("NoChanged")}" disabled`}>${i18n.t("Restore")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:480px;top:150px}.dialog-header{background: #84bc13}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color: #333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group p.domain{font:italic 700 24px/150% Candara,Times!important;word-break:keep-all}.anchor-restore-data{anchor-name:--restore-data}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("Title"));
            addListener(win, "action:trigger-reset:click", () => { win.postMessage("TERMINAL_RESTORE_INITNAL", { source: "ResetDataDialog" }); win.close() });
            addListener(win, "action:trigger-restore:click", () => { win.postMessage("TERMINAL_RESTORE_DEFAULTS", { source: "ResetDataDialog" }); win.close() });
            win.mount();
          }

          async function openBackupPanel() {
            const languagePacks = {
              "en-US": { Title: "Backup and Restore Data", BackupTitle: "Data Export & Backup", BuckupDone: "Data backup complete. Downloading now...<br/><span class='fs10 indigo'>{name}</span>", BT: "Backup to local file", BC: "Export and backup your current data locally and automatically download the *.sqlitedb file.", RT: "Restore from local file:", RC: "Click here to load *.sqlitedb backup file", RestoreOkTitle: "Restore Successful", RestoreOk: "Backup data restored successfully!", NoFileTitle: "No File Selected", NoFileContent: "The submitted file is empty. Please select a valid local backup file to restore.", DataErrorTitle: "Invalid File", DataErrorContent: "The submitted file verification failed. Please select a valid local backup file." },
              "zh-CN": { Title: "备份和还原数据", BackupTitle: "数据备份与导出", BuckupDone: "数据备份已完成，正在生成并下载……<br/><span class='fs10 indigo'>{name}</span>", BT: "备份到本地文件：", BC: "将当前的配置数据导出并下载为 *.sqlitedb 文件。", RT: "从本地文件还原：", RC: "点击此处选择并载入 *.sqlitedb 备份文件", Reselect: "重新选择", Backup: "备份数据", Restore: "还原数据", RestoreOkTitle: "数据还原成功", RestoreOk: "备份数据已成功还原至当前数据存储！", NoFileTitle: "未选择文件", NoFileContent: "载入的文件为空，请选择需要还原的备份文件。", DataErrorTitle: "文件校验失败", DataErrorContent: "该文件不是有效的备份数据，请选择正确的备份文件。", OK: "确定", Cancel: "取消" },
              "zh-TW": { Title: "備份與還原資料", BackupTitle: "資料備份與匯出", BuckupDone: "資料備份已完成，正在產生並下載……<br/><span class='fs10 indigo'>{name}</span>", BT: "備份至本機檔案：", BC: "將目前的設定資料匯出並下載為 *.sqlitedb 檔案。", RT: "從本機檔案還原：", RC: "點擊此處選擇並載入 *.sqlitedb 備份檔案", Reselect: "重新選擇", Backup: "備份資料", Restore: "還原資料", RestoreOkTitle: "資料還原成功", RestoreOk: "備份數據已成功恢復至當前數據儲存！", NoFileTitle: "未選擇檔案", NoFileContent: "載入的檔案為空，請選擇需要還原的備份檔案。", DataErrorTitle: "檔案驗證失敗", DataErrorContent: "該檔案不是有效的備份資料，請選擇正確的備份檔案。", OK: "確定", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), selectText = `\ud83d\udd0e [${i18n.t("RC")}]`,
              html = `<div class="form-group"><p class="darkgreen bold">${i18n.t("BT")}</p><p>${i18n.t("BC")}</p><p class="indigo bold">${i18n.t("RT")}</p><p><span class="indigo" id="load_zone">${selectText}</span><input accept=".sqlitedb" class="hidden" type="file" id="load_file" /></p></div><div class="btn-box"><button data-action="launch-backup" class="btn btn-ok">${i18n.t("Backup")}</button><button data-action="launch-restore" class="btn btn-file">${i18n.t("Restore")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:450px;top:250px}.dialog-header{background:#4c0459}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.btn-box button.btn-file{background:#7410bd;border-color:#7410bd;color:#fff}.btn-box button.btn-file:hover{background:#7410bdd9;box-shadow:0 0 3px #7410bd}#load_zone{cursor:pointer}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, win.dialog),
              loadFileZone = qW("#load_zone"), loadFile = qW("#load_file"), backupBtn = qW("button[data-action='launch-backup']"); win.setTitle(i18n.t("Title"));
            if (loadFileZone && loadFile && backupBtn) {
              const reselectFiles = () => { loadFileZone.textContent = selectText; removeAttribute(backupBtn, "disabled", ""); backupBtn.classList.remove("grayscale") };
              win.trackInternal(loadFileZone, "click", () => { loadFile.value = ""; loadFile.click() }); win.trackInternal(loadFile, "cancel", reselectFiles);
              win.trackInternal(loadFile, "change", () => {
                const file = loadFile.files?.[0]; if (!file) { reselectFiles() } else {
                  const selectedFileHTML = tTP.createHTML(`<span class="firebrick fs12">\ud83d\udd0e [${i18n.t("Reselect")}] </span><em class="indigo fs10">${file.name}</em>`);
                  loadFileZone.innerHTML = selectedFileHTML; setAttribute(backupBtn, "disabled", ""); backupBtn.classList.add("grayscale");
                }
              });
            }
            addListener(win, "action:launch-backup:click", async () => {
              const data = await dataManager.exportData(), code = await cipher.inspect(SOURCE, RC2, dataManager), db_R = code.keycode().concat(encrypt(GMscriptName)),
                db_0 = encrypt(new Date()), db_1 = data[FONTSET], db_2 = data[EXCLUDESITES], db_3 = data[DOMAINFONTSET], db_4 = data[CUSTOMFONTLIST],
                db_5 = data[CONFIGURE], db_6 = data[MONOFONTLIST], db_7 = data[MONOSITERULES], db_8 = data[MONOFEATURE], db_9 = data[FONTSCALEFIX],
                db_10 = data[FONTOVERRIDE], db = { db_R, db_0, db_1, db_2, db_3, db_4, db_5, db_6, db_7, db_8, db_9, db_10 },
                fileName = `FontRendering-backup-${brand.toLowerCase()}-${setDateFormat("yyyy-MM-ddTHH-mm-ssZ", new Date())}.sqlitedb`,
                fileContent = cipher.encrypt(JSON_stringify(db)); downloadDataFile(fileName, fileContent); win.close();
              openSimpleDialog(i18n.t("BackupTitle"), i18n.t("BuckupDone", { name: fileName }), "dialog", null, false, "#4c0459");
            });
            addListener(win, "action:launch-restore:click", async () => {
              try {
                const file = loadFile?.files?.[0]; if (!file) { openSimpleDialog(i18n.t("NoFileTitle"), i18n.t("NoFileContent"), "prompt", false, false, "#b22222"); return }
                const code = await cipher.inspect(SOURCE, RC2, dataManager), fileContentRaw = await new Promise((resolve, reject) => {
                  const reader = new FileReader(); reader.onload = () => { resolve(reader.result) }; reader.onerror = () => { reject(new Error("reader error")) }; reader.readAsText(file);
                }), decryptedData = Object_create(null); let fileContent = decrypt(String(fileContentRaw)), parsedData = JSON_parse(cipher.decrypt(fileContent));
                decryptedData.db_0 = decrypt(parsedData.db_0); const backupDate = Date.parse(decryptedData.db_0); for (let i = 1; i <= 10; ++i) {
                  const key = `db_${i}`, rawValue = parsedData[key]; if (rawValue === "dW5kZWZpbmVk" || rawValue === "bnVsbA==") { decryptedData[key] = void 0 } else
                    if (rawValue) { decryptedData[key] = JSON_parse(decrypt(rawValue)) } else { decryptedData[key] = void 0 }
                } if (isNaN(backupDate) || backupDate >= Date.now() || code.search(parsedData.db_R) === -1) { throw new Error("Invalid Data Error") }
                const keys = await GMlistValues(); await Promise.allSettled(Array_map(keys, key => dataManager.delete(key)));
                const writePromises = [dataManager.set(FONTSET, decryptedData.db_1), dataManager.set(EXCLUDESITES, decryptedData.db_2), dataManager.set(DOMAINFONTSET, decryptedData.db_3), dataManager.set(CUSTOMFONTLIST, decryptedData.db_4), dataManager.set(CONFIGURE, { ...decryptedData.db_5, curVersion: GMscritpVersion, rebuild: void 0 }), dataManager.set(MONOFONTLIST, decryptedData.db_6), dataManager.set(MONOSITERULES, decryptedData.db_7), dataManager.set(MONOFEATURE, decryptedData.db_8), dataManager.set(FONTSCALEFIX, decryptedData.db_9), dataManager.set(FONTOVERRIDE, decryptedData.db_10)], content = `<p class="indigo">${i18n.t("RestoreOk")}</p>`;
                await Promise.all(writePromises); fileContent = null; parsedData = null; win.close(); await openFetchRemoteDataPanel(i18n.t("RestoreOkTitle"), content, "#4c0459");
              } catch (e) { error(`File Backup Restore:`, e.message); openSimpleDialog(i18n.t("DataErrorTitle"), i18n.t("DataErrorContent"), "prompt", false, false, "#b22222") }
            }); win.mount();
          }

          async function openAdvancedCorePanel() {
            const languagePacks = {
              "en-US": { Lang: "Current Language：", Backup: "Local Backup & Restore (Enabled)", BackupContent: "Backups ensure data safety and are fully encrypted. Never import unknown backups to protect against malicious XSS script attacks.", Preview: "Preview Before Saving (Enabled)", PreviewContent: "Preview adjustments instantly without saving. Note: Features requiring a page refresh cannot be displayed in previews.", Scaling: "Font CSS Scaling (Experimental)", ScalingContent: "Experimental feature. Due to inconsistent CSS 'zoom' support across browsers, use only as needed.", Viewport: "Viewport Units Fixing (Disabled)", ViewportContent: `Auto-enables with Font Scaling to correct viewport unit offsets caused by CSS zoom. Can be toggled globally here or per site.`, Updatetip: "Update Notifications (Enabled)", UpdatetipContent: "Get alerts and changelogs when a new version releases. If disabled via popup, re-enable it here.", Hotkey: "Keyboard Shortcuts (Enabled)", HotkeyContent: "Quickly triggers script menus. Required if your script manager lacks a native menu. Disable if shortcuts conflict.", Personal: "Custom Site Limit (Default: 200)", PersonalContent: "Excessive custom site data may delay loading (highly optimized in new versions). The 200 limit is not strictly enforced.", Remote: "Cloud Preset Rendering Data", RemoteContent: "We maintain cloud parameters to fix styling issues on major websites, auto-syncing upon updates. You can also manually fetch them to fix layouts.", Pull: "Re-Pull", FontCache: "Global Font List Cache (30 Days)", FontCacheContent: "Font detection consumes CPU/RAM, so the list is cached and refreshed every 30 days. Force an update here if you install new system fonts.", White: "Whitelist Mode (Global Disable)", WhiteContent: `Disables font rendering globally except on specified sites. Note: Once enabled, it cannot be turned off manually; it auto-disables only when you reconfigure and save new 'Global Data'.`, CacheRebuild: "Font List Cache Cleared", CacheRebuildContent: "Legacy cache cleared. The system will automatically regenerate a new font list.", FetchTitle: "Fetch Remote Rendering Data", SavedTitle: "Advanced Core Settings Saved", SavedContent: "Advanced core settings has been saved successfully.", Advanced: "Advanced Core Settings", confirmDisableTitle: "Disable Global Rendering?", confirmDisableContent: `This turns off default global rendering. Rules will only apply to your specified domains. You must reconfigure and save global data to re-enable.<p class='bold'>Are you sure you want to disable global settings?</p>`, confirmScalingTitle: "Enable Font Scaling?", confirmScalingContent: `Font scaling causes viewport unit offsets, which can be resolved via the 'Viewport Units Fixing'. Toggle it here globally or per site in "Font Rendering settings" later.<p class='bold'>Are you sure you want to enable font scaling?</p>`, IncompTitle: "Compatibility Warning", IncompContent: "Firefox (version < 126) and script managers like Greasemonkey, Firemonkey, Orangemonkey, or Userscripts may cause severe layout glitching or broken page scripts.<p><strong>Highly Recommended:</strong><br/>1. Use native browser zoom or update your browser.<br/>2. Use modern script manager like Tampermonkey.</p>", Save: "Save All Settings" },
              "zh-CN": { Lang: "当前语言设置：", Backup: "本地备份与恢复（默认开启）", BackupContent: "定期备份可保障数据安全。您的备份文件已进行加密处理。请勿导入来源不明的备份，以防遭受 XSS 恶意脚本攻击。", Preview: "保存前预览（默认开启）", PreviewContent: "修改参数后无需保存即可实时预览效果。部分需要刷新页面生效的功能，暂不支持在预览中呈现。", Scaling: "字体等比例缩放（默认关闭）", ScalingContent: "本功能为实验性功能。由于不同内核浏览器对 CSS zoom 属性的兼容性存在差异，建议您根据实际需求开启。", Viewport: "视口单位缩放修正（默认关闭）", ViewportContent: "若已开启『字体等比例缩放』，本功能将自动启用，用于修复因 CSS zoom 导致的视口单位（Viewport Units）偏移问题。您可以在特定站点内单独控制此功能，或在此处全局关闭。", Updatetip: "新版本更新提示（默认开启）", UpdatetipContent: "新版本发布后，您将收到脚本更新提示并可查看更新日志。若您在弹窗中关闭了此功能，需在此处重新开启。", Hotkey: "键盘快捷键（默认开启）", HotkeyContent: "可快速触发脚本菜单功能。部分脚本管理器若不支持脚本菜单，则必须使用快捷键打开菜单。如遇快捷键冲突，请在此处关闭本功能。", Personal: "自定义站点渲染数量上限（默认：200 条）", PersonalContent: "保存过多的自定义站点数据可能会导致脚本加载延迟（新版本已大幅优化）。虽然默认上限为 200 条，但实际使用时并无强制限制。", Remote: "获取云端预设渲染数据", RemoteContent: "为修复常用或知名站点的样式错误，我们维护了一套云端字体渲染参数，脚本会在版本更新后自动同步。如遇排版样式问题，您也可以手动拉取云端数据尝试修复。", Pull: "重新拉取", FontCache: "字体列表全局缓存（时效：30 天）", FontCacheContent: "由于检测系统字体会占用 CPU 和内存，脚本会缓存字体列表并每 30 天自动刷新一次。若您新安装了系统字体，可在此处手动强制更新缓存。", Rebuild: "重建缓存", White: "站点白名单模式（全局禁用）", WhiteContent: "开启后将全局禁用字体渲染，仅在您指定的特定站点中生效。请注意，此开关开启后无法手动关闭；如需恢复，请在字体渲染设置面板中重新配置数据并保存为『全局数据』，届时本功能将自动关闭。", CacheRebuild: "字体列表缓存清理成功", CacheRebuildContent: "旧的字体缓存已清除，系统随后会自动重新生成。", FetchTitle: "获取远端的站点渲染数据", SavedTitle: "高级核心配置已保存", SavedContent: "高级核心配置数据已成功保存。", Advanced: "高级核心配置设置", confirmDisableTitle: "确认停用全局渲染", confirmDisableContent: `此操作将关闭默认的全局设置。关闭后，渲染数据将仅在您指定的域名中生效。若日后需要重新启用全局渲染，您必须重新配置并保存为全局数据。<p class='bold'>确认要停用全局设置吗？</p>`, confirmScalingTitle: "开启字体缩放功能", confirmScalingContent: `开启字体缩放会导致视口单位（Viewport Units）出现偏移，但可以通过『视口单位缩放修正』功能来解决此问题。您可以在此全局关闭该功能，也可以稍后在字体渲染设置中针对特定站点单独关闭。<p class='bold'>确认要开启字体等比例缩放吗？</p>`, IncompTitle: "兼容性提示", IncompContent: "由于 Firefox（版本低于 126）以及 Greasemonkey、Userscripts、Firemonkey、Orangemonkey 等脚本管理器存在兼容性限制，该功能可能会导致部分网站出现排版错乱或页面交互失效等严重问题。<p><strong>强烈建议您：</strong><br/>1. 使用浏览器的原生缩放功能，或更新浏览器版本。<br/>2. 更换为 Tampermonkey 等现代脚本管理器使用。</p>", Save: "保存所有设置", Cancel: "取消" },
              "zh-TW": { Lang: "目前語言設定：", Backup: "本機備份與還原（預設開啟）", BackupContent: "定期備份可保障資料安全。您的備份檔案已進行加密處理。請勿匯入來源不明的備份，以防遭受 XSS 惡意指令碼攻擊。", Preview: "儲存前預覽（預設開啟）", PreviewContent: "修改參數後無需儲存即可即時預覽效果。部分需要重新整理頁面生效的功能，暫不支援在預覽中呈現。", Scaling: "字型等比例縮放（預設關閉）", ScalingContent: "本功能為實驗性功能。由於不同核心瀏覽器對 CSS zoom 屬性的相容性存在差異，建議您根據實際需求開啟。", Viewport: "視口單位縮放修正（預設關閉）", ViewportContent: "若已開啟「字型等比例縮放」，本功能將自動啟用，用於修復因 CSS zoom 導致的視口單位（Viewport Units）偏移問題。您可以在特定網站內單獨控制此功能，或在此處全域關閉。", Updatetip: "新版本更新提示（預設開啟）", UpdatetipContent: "新版本發布後，您將收到指令碼更新提示並可查看更新記錄。若您在彈出式視窗中關閉了此功能，需在此處重新開啟。", Hotkey: "鍵盤快速鍵（預設開啟）", HotkeyContent: "可可快速觸發指令碼功能表功能。部分指令碼管理員若不支援指令碼功能表，則必須使用快速鍵開啟功能表。如遇快速鍵衝突，請在此處關閉本功能。", Personal: "自訂網站轉譯數量上限（預設：200 條）", PersonalContent: "儲存過多的自訂網站資料可能會導致指令碼載入延遲（新版本已大幅最佳化）。雖然預設上限為 200 條，但實際使用時並無強制限制。", Remote: "取得雲端預設轉譯資料", RemoteContent: "為修復常用或知名網站的樣式錯誤，我們維護了一套雲端字型渲染參數，指令碼會在版本更新後自動同步。如遇排版樣式問題，您也可以手動拉取雲端資料嘗試修復。", Pull: "重新拉取", FontCache: "字型列表全域快取（時效：30 天）", FontCacheContent: "由於偵測系統字型會佔用 CPU 和記憶體，指令碼會快取字型列表並每 30 天自動重新整理一次。若您新安裝了系統字型，可在此處手動強制更新快取。", Rebuild: "重建快取", White: "網站白名單模式（全域停用）", WhiteContent: "開啟後將全域停用字型渲染，僅在您指定的特定網站中生效。請注意，此開關開啟後無法手動關閉；如需恢復，請在字型渲染設定面板中重新設定資料並儲存為「全域資料」，屆時本功能將自動關閉。", CacheRebuild: "字型列表快取清理成功", CacheRebuildContent: "舊的字型快取已清除，系統隨後會自動重新產生。", FetchTitle: "取得遠端的網站轉譯資料", SavedTitle: "進階核心設定已儲存", SavedContent: "進階核心設定資料已成功儲存。", Advanced: "進階核心組態設定", confirmDisableTitle: "確認停用全域轉譯", confirmDisableContent: `此操作將關閉預設的全域設定。關閉後，轉譯資料將僅在您指定的網域中生效。若日後需要重新啟用全域轉譯，您必須重新設定並儲存為全域資料。<p class='bold'>確認要停用全域設定嗎？</p>`, confirmScalingTitle: "開啟字型縮放功能", confirmScalingContent: `開啟字型縮放會導致視口單位（Viewport Units）出現偏移，但可以透過「視口單位縮放修正」功能來解決此問題。您可以在此全域關閉該功能，也可以稍後在字型渲染設定中針對特定網站個別關閉。<p class='bold'>確認要開啟字型等比例縮放嗎？</p>`, IncompTitle: "相容性提示", IncompContent: "由於 Firefox（版本低於 126）以及 Greasemonkey、Userscripts、Firemonkey、Orangemonkey 等指令碼管理員存在相容性限制，該功能可能會導致部分網站出現排版錯亂或頁面互動失效等嚴重問題。<p><strong>強烈建議您：</strong><br/>1. 使用瀏覽器的原生縮放功能，或更新瀏覽器版本。<br/>2. 更換為 Tampermonkey 等現代指令碼管理器使用。</p>", Save: "儲存所有設定", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), incompatible = compareVersion({ GECKO: 126, more: null }) || isRawContent,
              configure = await dataManager.get(CONFIGURE), { isFontsize, isFixViewport, isBackupFunction, isPreview, isCloseTip, isHotkey, globalDisable } = configure,
              html = `<div class="form-group form-inline flex-end"><label class="fs14">${i18n.t("Lang")}</label><span id="language"></span></div><div class="form-scroll"><div class="form-group form-inline"><div class="form-group"><label>①&nbsp;${i18n.t("Backup")}</label><span class="intro">${i18n.t("BackupContent")}</span></div><span class="switch-container"><input type="checkbox" id="panel-backup"${isBackupFunction ? " checked" : ""}/><label for="panel-backup" class="switch-slider"></label></span></div><div class="form-group form-inline"><div class="form-group"><label>②&nbsp;${i18n.t("Preview")}</label><span class="intro">${i18n.t("PreviewContent")}</span></div><span class="switch-container"><input type="checkbox"id="panel-perview"${isPreview ? " checked" : ""}/><label for="panel-perview" class="switch-slider"></label></span></div><div class="form-group form-inline"><div class="form-group"><label>③&nbsp;${i18n.t("Scaling")}</label><span class="intro">${i18n.t("ScalingContent")}</span></div><span class="switch-container"><input type="checkbox" data-action="launch-change" id="panel-scaling"${!incompatible && isFontsize ? " checked" : ""}/><label for="panel-scaling" class="switch-slider"${!incompatible ? "" : " disabled"}></label></span></div><div class="form-group form-inline"><div class="form-group"><label>④&nbsp;${i18n.t("Viewport")}</label><span class="intro">${i18n.t("ViewportContent")}</span></div><span class="switch-container"><input type="checkbox" data-action="launch-change" id="panel-viewport"${!incompatible && isFixViewport ? " checked" : ""}/><label for="panel-viewport" class="switch-slider"${!incompatible ? "" : " disabled"}></label></span></div><div class="form-group form-inline"><div class="form-group"><label>⑤&nbsp;${i18n.t("Updatetip")}</label><span class="intro">${i18n.t("UpdatetipContent")}</span></div><span class="switch-container"><input type="checkbox" id="panel-updatetip"${isCloseTip ? "" : " checked"}/><label for="panel-updatetip" class="switch-slider"></label></span></div><div class="form-group form-inline"><div class="form-group"><label>⑥&nbsp;${i18n.t("Hotkey")}</label><span class="intro">${i18n.t("HotkeyContent")}</span></div><span class="switch-container"><input type="checkbox" id="panel-hotkey"${isHotkey ? " checked" : ""}/><label for="panel-hotkey" class="switch-slider"></label></span></div><div class="form-group form-inline"><div class="form-group"><label>⑦&nbsp;${i18n.t("Personal")}</label><span class="intro">${i18n.t("PersonalContent")}</span></div><input type="text" id="panel-personal" class="input-disable" maxlength="3" disabled value="200"/></div><div class="form-group form-inline"><div class="form-group"><label>⑧&nbsp;${i18n.t("Remote")}</label><span class="intro">${i18n.t("RemoteContent")}</span></div><button class="btn-mirror btn-external" data-action="launch-change" data-action="launch-change" id="panel-prerender">${i18n.t("Pull")}</button></div><div class="form-group form-inline"><div class="form-group"><label>⑨&nbsp;${i18n.t("FontCache")}</label><span class="intro">${i18n.t("FontCacheContent")}</span></div><button class="btn-mirror btn-external" data-action="launch-change" id="panel-fontcache">${i18n.t("Rebuild")}</button></div><div class="form-group form-inline"><div class="form-group"><label>⑩&nbsp;${i18n.t("White")}</label><span class="intro">${i18n.t("WhiteContent")}</span></div><span class="switch-container"><input type="checkbox" data-action="launch-change" id="panel-disable"${globalDisable ? " checked disabled" : ""}/><label for="panel-disable" class="switch-slider"${globalDisable ? " disabled" : ""}></label></span></div></div><div class="btn-box"><button data-action="launch-save" class="btn btn-mirror">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              background = "linear-gradient(135deg,#111 0,#2c251a 25%,#b8975a 45%,#fcf1cd 55%,#a78343 70%,#1f1910 85%,#0a0a0a 100%)",
              css = `dialog{min-width:560px;top:80px}.dialog-header{background:${background}}.dialog-header .dialog-title{text-shadow:0 0 2px #1c1c1c!important}.form-group p{line-height:150%;margin:0;padding:3px}.flex-end{margin:-10px 0px 10px 0px;padding:6px 2px!important;justify-content:flex-end;background:linear-gradient(0.25turn,#fdfdfd,#fbf0cc,#fdfdfd)}#language select{background-color:#a98a53;padding-top:2px;padding-bottom:4px;padding-left:12px;padding-right:12px;border-radius:4px;color:#f3f3f3;border:2px solid #a98a53;font-weight:600;cursor:pointer}#language :is(select:hover,select:focus){background-color:#1c1c1c;border-color:#1c1c1c;outline:none}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.dialog-body .form-scroll{max-height:500px;scrollbar-color:auto;display:flex;overflow:auto;flex-direction:column;overscroll-behavior:contain;scroll-behavior:smooth}.dialog-body .form-scroll::-webkit-scrollbar{height:10px;width:10px}.form-scroll .form-group input + label.switch-slider[disabled]{background:#9e9e9f}button.btn{border-radius:4px}button.btn-mirror,button.btn-mirror:hover{position:relative;color:#fff4d1;background:linear-gradient(135deg,#111 0,#2c2212 10%,#b59453 50%,#111 90%,#000 100%);text-shadow:0 0 2px #1c1c1c!important;border:1px solid #a38245;overflow:hidden;cursor:pointer;box-shadow:inset -2px -2px 8px #ffffff30}button.btn-mirror::after{content:'';position:absolute;top:-50%;left:-60%;width:40%;height:200%;background:linear-gradient(to right,#ffffff00 0,#ffffff99 50%,#ffffff00 100%);transform:rotate(35deg);transition:none}button.btn-mirror:hover{box-shadow:none}button.btn-mirror:hover::after{left:140%;transition:all .6s ease-in-out}.form-group{padding:3px 20px 3px 0}.form-group>label{font-size:18px;font-weight:700;background-image:linear-gradient(135deg,#1b160e 0,#3a301d 30%,#8c7141 55%,#463923 75%,#1b160e 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke:0.4px #2a21134d;text-shadow:.5px .5px 1px #00000026,0 1px 2px #2a21131a;letter-spacing:.02em}.form-group .intro{font-size:14px;color: #b3b3b3;line-height:150%}.form-scroll .switch-container input+.switch-slider{background:#261e11;box-shadow:inset 0 0 10px #0000001a,0 0 5px #261e1166}.form-scroll .switch-container input:checked+.switch-slider{background:#a98a53;box-shadow:inset 0 0 10px #0000001a,0 0 5px #a98a5366}button.btn-external{min-width:80px;padding:8px 6px;border-radius:4px;font-size:14px}input.input-disable{text-align:center;border-radius:6px;background:linear-gradient(#fbfbfb,#e8e8e8) padding-box,linear-gradient(135deg,#1a1a1a,#a1824a,#faf1c5,#8f6e35,#111) border-box;border:2px solid transparent;width:80px;height:40px;padding:8px 6px;font-family:Anton,Impact,serif!important;font-size:18px;font-weight:700;}@-moz-document url-prefix(){.form-scroll{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("Advanced"));
            const incompatibleFn = e => { preventDefault(e); openSimpleDialog(i18n.t("IncompTitle"), i18n.t("IncompContent"), "prompt", false, false, background) },
              qW = s => qS(s, win.dialog), scalingTag = qW("#panel-scaling"), viewportTag = qW("#panel-viewport"), disableTag = qW("#panel-disable"),
              languageTag = qW("#language"), selectEl = cE("select", { id: "session-languages" }), myLang = sessionStorage.getItem(CURRENT_LANGUAGE) || getLanguage("zh-CN"),
              langMapFn = lang => { const optEl = cE("option", { value: lang, textContent: lang }); if (lang === myLang) { optEl.selected = true } return optEl },
              optionNodes = Array_map(Object_keys(languagePacks), langMapFn); appendNode(selectEl, ...optionNodes); appendNode(languageTag, selectEl);
            win.trackInternal(languageTag, "change", e => { if (i18n.setLanguage(e.target.value)) { WindowManager.closeAll(); openAdvancedCorePanel() } });
            addListener(win, "action:launch-change:click", async e => {
              const event = e.detail.nativeEvent, id = e.detail.actionElementId, target = e.detail.actionElement;
              if (id === "panel-scaling") {
                if (incompatible) { incompatibleFn(event); return } if (target.checked) {
                  preventDefault(event); operationConfirmation("scale", i18n.t("confirmScalingTitle"), i18n.t("confirmScalingContent"), background);
                } else if (viewportTag.checked) { viewportTag.checked = false }
              } else if (id === "panel-viewport") {
                if (!target.checked) { if (incompatible) { incompatibleFn(event) } } else if (!scalingTag.checked) { preventDefault(event); scalingTag.click() }
              } else if (id === "panel-prerender") { await openFetchRemoteDataPanel(i18n.t("FetchTitle"), null, background) } else if (id === "panel-fontcache") {
                const title = i18n.t("CacheRebuild"), content = i18n.t("CacheRebuildContent"); await dataManager.delete(FONTCHECKLIST); openSimpleDialog(title, content, "dialog", true, true, background);
              } else if (id === "panel-disable") {
                const title = i18n.t("confirmDisableTitle"), content = i18n.t("confirmDisableContent");
                if (target.checked) { preventDefault(event); operationConfirmation("whilelist", title, content, background) }
              }
            });
            addListener(win, "action:launch-save:click", async e => {
              const configure = await dataManager.get(CONFIGURE), values = e.detail.formValues, submitData = {
                isBackupFunction: values["panel-backup"], isPreview: values["panel-perview"], isFontsize: values["panel-scaling"], isFixViewport: values["panel-viewport"],
                isCloseTip: !values["panel-updatetip"], isHotkey: values["panel-hotkey"], maxPersonalSites: 200, globalDisable: values["panel-disable"], __proto__: null
              }; await dataManager.set(CONFIGURE, { ...configure, ...submitData });
              if (disableTag.checked) {
                const fontSetData = {
                  fontSelect: rawSavedValue.fontSelect, fontFace: false, fontSmooth: false, fontSize: 1, fixViewport: false, fontStroke: 0, fixStroke: false, lazyload: false,
                  fontShadow: 0, fixShadow: false, renderCanvas: false, shadowColor: rawSavedValue.shadowColor, fontCSS: rawSavedValue.fontCSS, fontEx: rawSavedValue.fontEx
                }; await dataManager.set(FONTSET, fontSetData);
              } win.close(); openSimpleDialog(i18n.t("SavedTitle"), i18n.t("SavedContent"), "dialog", true, true, background);
            });
            win.onMessage(e => {
              if (e.data?.source !== "Confirmation") { return } if (e.eventName === "CONFIRM_OPEN_DISABLE") { disableTag.checked = e.data.confirm } else
                if (e.eventName === "CONFIRM_OPEN_SCALING") { if (!incompatible) { scalingTag.checked = e.data.confirm; viewportTag.checked = e.data.confirm } }
            }); win.mount();
          }

          async function openFontRewritePanel() {
            const languagePacks = {
              "en-US": { Title: "Custom Font Rewrite Data", Content: `Enter custom font rewrite data in an array format (one item per line wrapped in double quotes <code>""</code>; use curly braces inside the quotes for double-byte characters like Chinese, e.g., <code>"{中文字体}"</code>). <span class="firebrick fs14">(Recommended: See the <a class="fs14" href="${GMsupportURL}/267#discussion-5692372" target="_blank">Author's Guide [CHS]</a>)</span>`, Warn: "Note: Do not add fonts already present in the built-in list. Duplicates will be auto-removed upon saving.", FFinput: "Fix &lt;INPUT&gt; Issue For Current Site", AddTool: "Quick Add Tool", SaveOkTitle: "Save Settings", SaveOkContent: "Custom font rewrite data saved successfully!", Save: "Save Data" },
              "zh-CN": { Title: "自定义字体重写数据", Content: `您可在下方文本域内按格式填写字体重写数据（数组类型，每行一个字体并用半角双引号<code>""</code>包裹；若含中文等双字节文本，须在双引号内部使用半角花括号，如<code>"{中文字体}"</code>）。<span class="firebrick fs14">(建议您参考 <a class="fs14" href="${GMsupportURL}/267#discussion-5692372" target="_blank">作者推荐</a> 填写)</span>`, Warn: "注意：请勿添加内置字体列表中已有的字体。若有重复项，保存时会自动去重。", FFinput: "修复当前站点 &lt;INPUT&gt; 的样式问题", AddTool: "快捷添加工具", SaveOkTitle: "保存字体重写配置", SaveOkContent: "自定义字体重写数据已成功保存！", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "自訂字型覆寫資料", Content: `您可在下方文字欄位內按格式填寫字型覆寫資料（陣列類型，每行一個字型並用半形雙引號<code>""</code>包裹；若含中文等雙位元組文字，須在雙引號內部使用半形大括號，如<code>"{中文字型}"</code>）。<span class="firebrick fs14">(建議您參考 <a class="fs14" href="${GMsupportURL}/267#discussion-5692372" target="_blank">作者推薦</a> 填寫)</span>`, Warn: "注意：請勿新增內建字型列表中已有的字型。若有重複項目，儲存時會自動去重。", FFinput: "修復目前網站 &lt;INPUT&gt; 的樣式問題", AddTool: "快捷新增工具", SaveOkTitle: "儲存字型覆寫設定", SaveOkContent: "自訂字型覆寫資料已成功儲存！", Save: "儲存資料", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), fontRewrite = await dataManager.get(FONTOVERRIDE),
              html = `<div class="form-group form-inline porte${IS_REAL_GECKO ? "" : " hidden"}"><label>${i18n.t("FFinput")}</label><span class="switch-container"><input type="checkbox" id="panel-ffinput"${localStorage.getItem(IS_DISCUZ) === "true" ? " checked" : ""} /><label for="panel-ffinput" class="switch-slider"></label></span></div><div class="form-group"><p class="fs14 grey">${i18n.t("Content")}</p><textarea id="font-rewrite-content">${JSON_stringify(fontRewrite, null, 4)}</textarea><p class="warn firebrick fs12">${i18n.t("Warn")}</p></div><div class="btn-box"><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:500px;top:150px}.dialog-header{background:#f7836d}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color: #333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group code{background:#f0f2f5;border:1px solid #f0f2f5;font-size:14px;line-height:22px;border-radius: 4px;padding-block:0;padding-inline:4px}#font-rewrite-content{margin:0;padding:5px;min-width:100%;min-height:220px;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;overscroll-behavior:contain;scrollbar-color:auto;font:normal 400 15px/150% var(--fr-shared-monospaced)!important;cursor:auto}#font-rewrite-content::-webkit-scrollbar{height:8px;width:8px}.form-group p span a{font-size:14px;line-height:125%;color:#1482ea}p.warn{margin:-4px 0 0 4px}.porte{padding-bottom:6px;border-bottom:1px solid #ccc}@-moz-document url-prefix(){textarea{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, win.dialog); win.setTitle(i18n.t("Title"));
            const textareaTag = qW("#font-rewrite-content"), submitBtn = qW(`button[data-action="launch-save"]`); checkTextareaFormat(win, textareaTag, submitBtn, "array");
            addListener(win, "action:launch-save:click", async e => {
              const values = e.detail.formValues, content = values["font-rewrite-content"].trim(), ffInputValue = values["panel-ffinput"],
                filterFonts = new Set(["Courier New", "Courier", "monospaced"]); let parsedValue; try { parsedValue = JSON_parse(content) } catch { parsedValue = [] }
              const [fontCheckList, monoFontlist] = await Promise.all([dataManager.get(FONTCHECKLIST), dataManager.get(MONOFONTLIST)]);
              if (!Array_isArray(parsedValue) || Array_some(parsedValue, d => typeof d !== "string")) { throw new Error("Format Error") }
              Array_forEach(fontCheckList, item => { if (item?.en && item.en !== "Microsoft YaHei") { filterFonts.add(item.en.startsWith("\\") ? `{${item.ch}}` : item.en) } });
              const monoFonts = monoFontlist.replace(/'/g, "").split(","); Array_forEach(monoFonts, font => { if (font) { filterFonts.add(font) } });
              const uniqueParsed = uniq(parsedValue, item => item && typeof item === "string" && !filterFonts.has(item));
              await dataManager.set(FONTOVERRIDE, Array_sort(uniqueParsed)); if (ffInputValue) { localStorage.setItem(IS_DISCUZ, "true") }
              win.close(); openSimpleDialog(i18n.t("SaveOkTitle"), i18n.t("SaveOkContent"), "dialog", true, true);
            }); win.mount();
          }

          async function openScaleOffsetPanel() {
            const languagePacks = {
              "en-US": { Title: "Site Scaling Fix Data", Content: `Enter custom website "font scaling" correction configurations in the text area below following the required format. This is a core setting; do not modify it if you are unfamiliar with the format or data meaning, as it may disrupt normal operation. <span class="firebrick fs14">(Recommended: See the <a class="fs14" href="${GMsupportURL}/267#discussioncomment-7161615" target="_blank">Author's Guide [CHS]</a>)</span>`, Warn: "Warning: Invalid JSON will crash the script and disable font rendering.", SaveOkTitle: "Save Settings", SaveOkContent: "Site scaling fix data saved successfully!", Save: "Save Data" },
              "zh-CN": { Title: "站点缩放修正配置数据", Content: `您可在下方文本域内，按格式填入自定义站点的『字体比例缩放』修正配置。此数据属于核心设置，若不了解格式或数据含义，请勿随意修改，以免影响正常运行。<span class="firebrick fs14">（建议您参考 <a class="fs14" href="${GMsupportURL}/267#discussioncomment-7161615" target="_blank">作者推荐</a> 填写）</span>`, Warn: "警告：若上述 JSON 配置错误，将导致脚本运行异常并使字体渲染失效。", SaveOkTitle: "保存缩放修正配置", SaveOkContent: "站点缩放修正配置数据已成功保存！", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "網站縮放修正設定資料", Content: `您可在下方文字區域內，依格式填入自訂網站的「字型比例縮放」修正設定。此數據屬於核心設定，若不瞭解格式或數據含義，請勿隨意修改，以免影響正常運作。<span class="firebrick fs14">（建議您參考 <a class="fs14" href="${GMsupportURL}/267#discussioncomment-7161615" target="_blank">作者推薦</a> 填寫）</span>`, Warn: "警告：若上述 JSON 設定錯誤，將導致指令碼執行異常並使字型渲染失效。", SaveOkTitle: "儲存縮放修正設定", SaveOkContent: "網站縮放修正設定資料已成功保存！", Save: "儲存資料", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), fontScaleOffset = await dataManager.get(FONTSCALEFIX),
              html = `<div class="form-group"><p class="fs14 grey">${i18n.t("Content")}</p><textarea id="font-scaleoffset-content">${JSON_stringify(fontScaleOffset, null, 4)}</textarea><p class="warn firebrick fs12">${i18n.t("Warn")}</p></div><div class="btn-box"><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:475px;top:150px}.dialog-header{background:#f7836d}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color: #333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group textarea{margin:0;padding:5px;min-width:100%;min-height:220px;outline:0;border:1px solid #999;border-radius:6px;white-space:pre;overscroll-behavior:contain;scrollbar-color:auto;font:normal 400 15px/150% var(--fr-shared-monospaced)!important;cursor:auto}.form-group textarea::-webkit-scrollbar{height:8px;width:8px}.form-group p span a{font-size:14px;line-height:125%;color:#1482ea}p.warn{margin:-4px 0 0 4px}.anchor-add-tool{anchor-name:--add-tool}.porte{padding-bottom:6px;border-bottom:1px solid #ccc}@-moz-document url-prefix(){textarea{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, win.dialog); win.setTitle(i18n.t("Title"));
            const textareaTag = qW("#font-scaleoffset-content"), submitBtn = qW(`button[data-action="launch-save"]`); checkTextareaFormat(win, textareaTag, submitBtn, "object");
            addListener(win, "action:launch-save:click", async e => {
              const values = e.detail.formValues, content = values["font-scaleoffset-content"].trim(); let offset = Object_create(null);
              try { offset = content ? JSON_parse(content) : offset } catch { void 0 } finally { await dataManager.set(FONTSCALEFIX, offset) }
              win.close(); openSimpleDialog(i18n.t("SaveOkTitle"), i18n.t("SaveOkContent"), "dialog", true, true);
            }); win.mount();
          }

          function openCustomFontAddToolPanel() {
            const languagePacks = {
              "en-US": { Title: "Get Font Naming Table", CNinput: "Font Chinese Name:", CNintro: "(Required, Or use English/other language)", ENinput: "Font English Name:", ENintro: "(Required, Or customize a unique English name)", PSinput: "PostScript Name:", PSintro: ` (Optional, Required for <a href="${GMsupportURL}/261" target="_blank">font hot-swapping</a>)`, NoEmpty: "Required fields cannot be empty.", Invalid: "Quotes are not allowed in this field.", Invalid2: "Letters, numbers, and standard punctuation only (no quotes).", Submit: "⚡ Send Font Naming Table Data" },
              "zh-CN": { Title: "获取字体命名表信息", CNinput: "字体中文名称：", CNintro: "（必填，若无中文名，可用其他语言名称代替）", ENinput: "字体英文名称：", ENintro: "（必填，若无英文名，请自定义唯一的英文标识）", PSinput: "PostScript 名称：", PSintro: `（选填，建议填写以支持 <a href="${GMsupportURL}/261" target="_blank">全局字体热替换</a>）`, NoEmpty: "必填项不能为空。", Invalid: "输入内容不能包含引号。", Invalid2: "仅支持字母、数字及半角标点（不可包含引号）。", Submit: "⚡ 发送字体命名表信息", Cancel: "取消" },
              "zh-TW": { Title: "取得字型命名表資訊", CNinput: "字型中文名稱：", CNintro: "（必填，若無中文名，可用其他語言名稱代替）", ENinput: "字型英文名稱：", ENintro: "（必填，若無英文名，請自訂唯一的英文標識）", PSinput: "PostScript 名稱：", PSintro: `（選填，建議填寫以支援 <a href="${GMsupportURL}/261" target="_blank">全域字型熱替換</a>）`, NoEmpty: "必填欄位不能為空。", Invalid: "輸入內容不能包含引號。", Invalid2: "僅支援字母、數字及半角標點（不可包含引號）。", Submit: "⚡ 發送字型命名表資訊", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><div class="form-group form-inline"><label class="turquoise">${i18n.t("CNinput")}</label><span class="grey fs12">${i18n.t("CNintro")}</span></div><input type="text" id="prompt-chinese" autocomplete="off" placeholder="微软雅黑" class="turquoise"><div class="error-tip hidden"></div></div><div class="form-group"><div class="form-group form-inline"><label class="turquoise">${i18n.t("ENinput")}</label><span class="grey fs12">${i18n.t("ENintro")}</span></div><input type="text"id="prompt-english" autocomplete="off" placeholder="Microsoft YaHei" class="turquoise"><div class="error-tip hidden"></div></div><div class="form-group"><div class="form-group form-inline"><label class="turquoise">${i18n.t("PSinput")}</label><span class="grey fs12">${i18n.t("PSintro")}</span></div><input type="text" id="prompt-postscript" autocomplete="off" placeholder="MicrosoftYaHei" class="turquoise"><div class="error-tip hidden"></div></div><div class="btn-box"><button id="prompt-submit-btn" data-action="submit-data" class="btn btn-ok">${i18n.t("Submit")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:500px;top:150px}.dialog-header{background:#13c2c2}.form-group{margin-bottom:15px}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color: #333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-inline{margin-bottom:2px}.form-group input{border-left:4px solid #13c2c2;font:normal 400 15px/150% var(--fr-shared-monospaced)!important}.form-group input::placeholder{color:#ccc}.form-group span a{color:#13c2c2;font-size:12px;text-decoration:none}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "prompt", html, css, styleManager }), qW = s => qS(s, win.dialog),
              cnTag = qW("#prompt-chinese"), enTag = qW("#prompt-english"), psTag = qW("#prompt-postscript"), PROMPT_RULES = {
                "prompt-chinese": { exp: /^@?[^"]+$/, emptyMsg: i18n.t("NoEmpty"), invalidMsg: i18n.t("Invalid"), required: true },
                "prompt-english": { exp: /^@?[^"\uFF00-\uFFEF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]+$/, emptyMsg: i18n.t("NoEmpty"), invalidMsg: i18n.t("Invalid2"), required: true },
                "prompt-postscript": { exp: /^[^"]+$/, invalidMsg: i18n.t("Invalid"), required: false }
              }, updateUIError = (target, errorMsg) => {
                const eTag = target.nextElementSibling; if (errorMsg) {
                  target.classList.add("input-error"); eTag.classList.remove("hidden"); eTag.textContent = errorMsg;
                } else { target.classList.remove("input-error"); eTag.classList.add("hidden") }
              }, validateField = target => {
                const rule = PROMPT_RULES[target.id]; if (!rule) { return true } const value = target.value.trim();
                if (!value) { updateUIError(target, rule.required ? rule.emptyMsg : ""); return !rule.required }
                if (rule.exp && !rule.exp.test(value)) { updateUIError(target, rule.invalidMsg); return false } updateUIError(target, ""); return true;
              }; win.setTitle(i18n.t("Title"));
            win.trackInternal(win.dialog, "input", e => { if (e.target.closest("input")) { validateField(e.target) } });
            addListener(win, "action:submit-data:click", e => {
              const values = e.detail.formValues, cnValue = values["prompt-chinese"].trim(), enValue = values["prompt-english"].trim(),
                psValue = values["prompt-postscript"].trim(), isCnValid = validateField(cnTag), isEnValid = validateField(enTag), isPsValid = validateField(psTag);
              if (!isCnValid || !isEnValid || !isPsValid) { return } const payloadObj = { ch: cnValue, en: enValue }; if (psValue) { payloadObj.ps = psValue }
              win.postMessage("FONTDATA_OUT_TRANS", { payload: JSON_stringify(payloadObj), source: "FontNamingTable" }); win.close();
            }); win.mount(); cnTag.focus();
          }

          function openDisableRenderPanel() {
            const languagePacks = { "en-US": { Content: "Disable font rendering for this domain?", Confirm: "The current page will refresh after you confirm." }, "zh-CN": { Content: "确认要停用当前域名的字体渲染吗？", Confirm: "确定后，当前网页将自动刷新以应用更改。" }, "zh-TW": { Content: "確認要停用目前網域的字型渲染嗎？", Confirm: "確定後，目前網頁將會自動重新整理以套用變更。" } },
              i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"); openExclutionTemplate(true, i18n.t("Content"), i18n.t("Confirm"));
          }

          function openEnableRenderPanel() {
            const languagePacks = { "en-US": { Content: "Re-enable font rendering for this domain?", Confirm: "The current page will refresh after you confirm." }, "zh-CN": { Content: "确认要启用当前域名的字体渲染吗？", Confirm: "确定后，当前网页将自动刷新以应用更改。" }, "zh-TW": { Content: "確認要啟用目前網域的字型渲染嗎？", Confirm: "確定後，目前網頁將會自動重新整理以套用變更。" } },
              i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"); openExclutionTemplate(false, i18n.t("Content"), i18n.t("Confirm"));
          }

          async function openCustomExclusionPanel() {
            const languagePacks = {
              "en-US": { Title: "Manage Excluded Rendering Sites", Add: "Add Network Address", SaveInfo: `<strong class="darkgreen">Kind tips:</strong> Search results will automatically select all matching domains. Changes will not be applied until you click save. Once saved, this action cannot be undone.`, Search: "Search", Empty: "---- No custom excluded sites found ----", Delete: "Delete", Reset: "Reset", SaveSuccess: "Saved Successfully", SaveSuccessContent: "Custom excluded sites saved successfully!", Save: "Save Data" },
              "zh-CN": { Title: "管理排除渲染站点", Add: "添加网络地址", SaveInfo: `<strong class="darkgreen">温馨提示：</strong>搜索结果会自动全选匹配的域名；添加或删除操作需点击保存数据才会生效。数据一旦保存将无法撤回，请谨慎操作。`, Search: "搜索域名", Empty: "---- 暂无自定义排除站点 ----", Delete: "删除", Reset: "重置", SaveSuccess: "保存成功", SaveSuccessContent: "自定义排除站点数据已保存成功！", Save: "保存数据", Cancel: "取消" },
              "zh-TW": { Title: "管理排除渲染站點", Add: "新增網路位址", SaveInfo: `<strong class="darkgreen">溫馨提示：</strong>搜尋結果會自動全選匹配的網域；新增或刪除操作需點擊儲存資料才會生效。資料一旦儲存將無法復原，請謹慎操作。`, Search: "搜尋網域", Empty: "---- 暫無自訂排除站點 ----", Delete: "刪除", Reset: "重設", SaveSuccess: "儲存成功", SaveSuccessContent: "自訂排除站點資料已儲存成功！", Save: "儲存資料", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p class="fs14">${i18n.t("SaveInfo")}</p></div><div class="form-group"><div class="form-group form-sub form-inline"><input id="search-data" type="search"><button data-action="launch-search" id="search-data-search">${i18n.t("Search")}</button></div><ul id="search-data-list"></ul></div><div class="btn-box"><button data-action="launch-add" class="btn btn-primary">${i18n.t("Add")}</button><button data-action="launch-save" class="btn btn-ok">${i18n.t("Save")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:470px;top:100px}.dialog-header{background:#ca095d}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}#search-data{margin:0;padding:4px 8px;width:80%;height:32px;border:1px solid #777;border-radius:4px; outline:none;font:normal 400 14px/150% var(--fr-shared-monospaced)!important}#search-data-search{margin:0;padding:4px 10px;width:19%;height:32px;background:#eee;color:#333;border:1px solid #777;border-radius:4px;outline:none;font-size:14px;line-height:150%;cursor:pointer}#search-data-search:hover{background:#f6f6f6;box-shadow:0 0 3px #a7a7a7}#search-data-list{overflow-x:hidden;margin:0;padding:0;list-style:none;max-height:252px;overscroll-behavior:contain;scrollbar-color:auto}#search-data-list li ::selection{background:#ca095d!important;color:#fff!important}#search-data-list::-webkit-scrollbar{height:10px;width:10px}#search-data-list li{display:flex;overflow:hidden;margin:0;padding:5px 10px;color:#555;list-style:none;white-space:nowrap;font:normal 400 14px/150% var(--fr-shared-fontfamily)!important;justify-content:space-between}li span.number{padding:2px}li span.list{margin-right:auto;padding:2px 10px;width:85%;text-align:left;text-overflow:ellipsis;font-size:14px;font-weight:700;-webkit-user-select:all;user-select:all}li span a.action{color:#800000;font-size:14px;cursor:pointer;padding:2px}ul li:nth-child(2n-1){background-color:#fff8fccc}ul li:hover{background-color:#fdf6eccc}.reset{text-decoration:line-through;font-style: italic}ul li#empty{display:list-item;padding:18px 8px;text-align:center;color:#555}@-moz-document url-prefix(){ul{scrollbar-color:#8e9bb1 #f1f0f012!important;scrollbar-width:thin}}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, win.dialog);
            win.setTitle(i18n.t("Title")); const excludeSites = await dataManager.get(EXCLUDESITES), ulTag = qW("ul"), searchBtn = qW("#search-data-search"),
              inputTag = qW("#search-data"), actionSet = new Set(excludeSites), createListItem = (site, index) => {
                const safeSite = toSafeString(site), liTag = cE("li"), content = `<span>${String(index).padStart(2, "0")}. </span><span class="list fs14">${safeSite}</span>`;
                liTag.innerHTML = tTP.createHTML(`${content}<span>[<a class="action" data-domain-name="${safeSite}">${i18n.t("Delete")}</a>]</span>`); return liTag;
              }; let fragment, currentSerial = excludeSites.length; if (currentSerial === 0) { fragment = cE("li", { id: "empty", textContent: i18n.t("Empty") }) } else {
                fragment = document.createDocumentFragment(); for (let i = 0; i < currentSerial; ++i) { fragment.appendChild(createListItem(excludeSites[i], i + 1)) }
              } appendNode(ulTag, fragment);
            win.trackInternal(ulTag, "click", e => {
              const ATag = e.target.closest("a[data-domain-name]"); if (!ATag) { return } const site = getAttribute(ATag, "data-domain-name");
              if (!site) { return } const domainTag = ATag.parentElement.previousElementSibling; if (!domainTag) { return }
              const isDeleted = ATag.dataset.del; if (!domainTag) { return } if (!isDeleted) {
                actionSet.delete(site); ATag.textContent = i18n.t("Reset"); ATag.classList.add("darkgreen"); domainTag.classList.add("reset"); ATag.dataset.del = "true";
              } else { actionSet.add(site); ATag.textContent = i18n.t("Delete"); ATag.classList.remove("darkgreen"); domainTag.classList.remove("reset"); delete ATag.dataset.del }
            });
            win.trackInternal(inputTag, "focus", e => e.target.classList.remove("peach-border"));
            win.trackInternal(inputTag, "keydown", e => { if (e.key === "Enter") { InputShield.stopPropagate(e); preventDefault(e); searchBtn.focus(); searchBtn.click() } });
            addListener(win, "action:launch-search:click", () => { searchTextAndSelect(inputTag, ulTag, "li>:nth-child(2)") });
            addListener(win, "action:launch-add:click", () => { openAddNewExcludeSitePanel(actionSet) });
            addListener(win, "action:launch-save:click", async () => {
              const final = Array_sort(Array_filter([...actionSet], site => typeof site === "string" && site.trim() !== "")); await dataManager.set(EXCLUDESITES, final);
              win.close(); openSimpleDialog(i18n.t("SaveSuccess"), i18n.t("SaveSuccessContent"), "dialog", true, true, "#ca095d");
            });
            win.onMessage(e => {
              if (e.data?.source !== "NetworkAddress" || e.eventName !== "NETWORK_OUT_TRANS") { return } const site = e.data.payload; if (!site) { return }
              const emptyTag = qW("#empty"); if (emptyTag) { emptyTag.classList.add("hidden") } const newLiTag = createListItem(site, ++currentSerial);
              appendNode(ulTag, newLiTag); actionSet.add(site); ulTag.scrollTop = ulTag.scrollHeight;
            }); win.mount();
          }

          function openAddNewExcludeSitePanel(actionBox) {
            const languagePacks = {
              "en-US": { Title: "Add Network Address", Host: "Domain/Host/IP:", HostInfo: "(Required, Ports & leading wildcard supported)", NoEmpty: "This field is required.", Invalid: "Invalid format. Enter a valid domain, host, or IP (Ports and leading wildcard domain supported)", Redundant: "This address already exists.", Submit: "⚡ Send Network Address" },
              "zh-CN": { Title: "添加网络地址", Host: "域名/主机/IP：", HostInfo: "（必填，支持首位通配符泛域名，也可附加端口号）", NoEmpty: "此项为必填项。", Invalid: "格式错误。请输入有效的域名、主机或 IP（支持端口号和首位通配符泛域名）", Redundant: "该网络地址已存在，请勿重复添加。", Submit: "⚡ 发送网络地址", Cancel: "取消" },
              "zh-TW": { Title: "新增網路位址", Host: "網域/主機/IP：", HostInfo: "（必填，支援首位萬用字元泛網域，也可附加連接埠）", NoEmpty: "此欄位為必填項。", Invalid: "格式錯誤。請輸入有效的網域、主機或 IP（支援埠號和首位萬用字元泛網域）", Redundant: "該網路位址已存在，請勿重複新增。", Submit: "⚡ 發送網路位址", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><div class="form-group form-inline"><label class="turquoise">${i18n.t("Host")}</label><span class="grey fs12">${i18n.t("HostInfo")}</span></div><input type="text" id="prompt-address" autocomplete="off" placeholder="www.test.com/*.test.com/test.com:8080/10.0.0.1" class="turquoise"><div class="error-tip hidden"></div></div><div class="btn-box"><button id="prompt-submit-btn" data-action="submit-data" class="btn btn-ok">${i18n.t("Submit")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:500px;top:125px}.dialog-header{background:#13c2c2}.form-group{margin-bottom:15px}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px;color: #333}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-inline{margin-bottom:2px}.form-group input{border-left:4px solid #13c2c2;font:normal 400 15px/150% var(--fr-shared-monospaced)!important}.form-group input::placeholder{color:#ccc}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "prompt", html, css, styleManager }), qW = s => qS(s, win.dialog),
              inputTag = qW("#prompt-address"), errorTag = qW(".error-tip") || inputTag.nextElementSibling, illegalRegexp = /[^a-zA-Z0-9.:*[\]-]|^(?:file|ftp|https?):/g,
              addressRegexp = /^(?:(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)(?::(?:[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?|(?:(?:\*\.)?(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}|[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)(?::(?:[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?|\[(?:(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}|:(?::[0-9a-fA-F]{1,4}){1,7}|::)\](?::(?:[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?|(?:(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}|:(?::[0-9a-fA-F]{1,4}){1,7}|::))$/,
              handleFilter = event => {
                const target = event.target, originalValue = target.value, parsedValue = originalValue.replace(illegalRegexp, "");
                if (originalValue !== parsedValue) { const start = target.selectionStart, end = target.selectionEnd; target.value = parsedValue; target.setSelectionRange(start, end) }
              }, updateUIError = (target, errorMsg) => {
                if (!errorTag) { return } if (errorMsg) {
                  target.classList.add("input-error"); errorTag.classList.remove("hidden"); errorTag.textContent = errorMsg;
                } else { target.classList.remove("input-error"); errorTag.classList.add("hidden") }
              }, validateField = target => {
                const value = target.value.trim(); if (!value) { updateUIError(target, i18n.t("NoEmpty")); return false } if (actionBox.has(value)) { updateUIError(target, i18n.t("Redundant")); return false }
                if (!addressRegexp.test(value)) { updateUIError(target, i18n.t("Invalid")); return false } updateUIError(target, ""); return true;
              }; win.setTitle(i18n.t("Title")); let isComposing = false;
            win.trackInternal(inputTag, "compositionstart", () => { isComposing = true }); win.trackInternal(inputTag, "compositionend", e => { isComposing = false; handleFilter(e) });
            win.trackInternal(inputTag, "input", e => { if (!isComposing) { handleFilter(e) } }); win.trackInternal(inputTag, "change", e => validateField(e.target));
            addListener(win, "action:submit-data:click", e => {
              const values = e.detail.formValues, address = values["prompt-address"].trim().replace(/:(?:80|443)$/, ""), isValid = validateField(inputTag);
              if (isValid) { win.postMessage("NETWORK_OUT_TRANS", { payload: address, source: "NetworkAddress" }); win.close() }
            }); win.mount(); inputTag.focus();
          }

          function openWildcardPanel(wildcard) {
            const languagePacks = {
              "en-US": { Title: "Re-enable Wildcard Rendering", Content: "The current website is excluded from font rendering by matching the above wildcard rules.", InfoList: "<p>『<strong>OK</strong>』Allow all sites under this wildcard.</p><p>『<strong>Manage</strong>』Manually edit custom excluded sites.</p>", Custom: "Manage" },
              "zh-CN": { Title: "重新启用泛域名渲染", Content: "当前网站已被上述泛域名规则排除渲染。", InfoList: "<p>『<strong>确定</strong>』将自动移出该泛域名下的所有排除项。</p><p>『<strong>管理</strong>』可进入自定义排除站点列表进行手动调整。</p>", Custom: "管理", OK: "确定", Cancel: "取消" },
              "zh-TW": { Title: "重新啟用泛網域轉譯", Content: "目前網站已被上述泛網域規則排除轉譯。", InfoList: "<p>「<strong>確定</strong>」將自動移出該泛網域下的所有排除項目。</p><p>「<strong>管理</strong>」可進入自訂排除網站列表進行手動調整。</p>", Custom: "管理", OK: "確定", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p class="domain">${wildcard}</p><p class="darkgreen">${i18n.t("Content")}</p>${i18n.t("InfoList")}</div><div class="btn-box"><button data-action="launch-action" class="btn btn-ok">${i18n.t("OK")}</button><button data-action="launch-exclusion" class="btn btn-extra">${i18n.t("Custom")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:450px;top:250px}.dialog-header{background:#006400}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group p.domain{font:italic 700 24px/150% Candara,Times!important;word-break:keep-all}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }); win.setTitle(i18n.t("Title"));
            addListener(win, "action:launch-exclusion:click", () => { win.close(); openCustomExclusionPanel() });
            addListener(win, "action:launch-action:click", async () => {
              const sites = await dataManager.get(EXCLUDESITES), parsedExcludeSites = uniq(sites, site => site && typeof site === "string" && !site.endsWith(wildcard.slice(1)));
              await dataManager.set(EXCLUDESITES, parsedExcludeSites); win.close(); reload();
            }); win.mount();
          }

          function openFeedback() { GMopenInTab(GMsupportURL, false) }

          function openSimpleDialog(title, content, type, isDone = true, isReload = false, bgColor = null) {
            const languagePacks = { "en-US": { Reload: "The page will refresh once this dialog is closed." }, "zh-CN": { Reload: "关闭当前对话框后，网页将自动刷新以应用更改。", Close: "关闭" }, "zh-TW": { Reload: "關閉目前對話框後，網頁將自動重新整理以應用更改。", Close: "關閉" } }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              className = isDone === null ? "" : isDone ? "darkgreen" : "firebrick", reloadPage = isReload ? `<p>${i18n.t("Reload")}</p>` : ``, color = bgColor || "#1482ea",
              html = `<div class="form-group"><p class="${className}">${content}</p>${reloadPage}</div><div class="btn-box"><button data-action="close" class="btn">${i18n.t("Close")}</button></div>`,
              css = `dialog{min-width:450px;top:300px}.dialog-header{background:${color}}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px;line-height:150%}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type, html, css, styleManager }); win.setTitle(title);
            if (type === "dialog") { WindowManager.closeAll() } addListener(win, "dialog:before-close", () => { isReload && reload() }); win.mount();
          }
          function openExclutionTemplate(isExclude, content, confirm) {
            const languagePacks = {
              "en-US": { ExcludeTitle: "Disable Font Rendering", ResumeTitle: "Re-enable Font Rendering", Custom: "Manage", CustomTitle: "Manage your custom exclusion items" },
              "zh-CN": { ExcludeTitle: "停用字体渲染", ResumeTitle: "重新启用字体渲染", OK: "确定", Custom: "管理", CustomTitle: "管理您的自定义排除项目", Cancel: "取消" },
              "zh-TW": { ExcludeTitle: "停用字型渲染", ResumeTitle: "重新啟用字型渲染", OK: "確定", Custom: "管理", CustomTitle: "管理您的自訂排除項目", Cancel: "取消" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"), colorName = isExclude ? "firebrick" : "darkgreen",
              html = `<div class="form-group"><p class="domain">${CUR_HOST}</p><p class="${colorName}">${content}</p><p>${confirm}</p></div><div class="btn-box"><button data-action="launch-action" class="btn btn-ok">${i18n.t("OK")}</button><button data-action="launch-exclusion" class="btn btn-extra anchor-manage-ex tooltip" data-current-anchor="--manage-ex" data-tooltip="${i18n.t("CustomTitle")}">${i18n.t("Custom")}</button><button data-action="close" class="btn">${i18n.t("Cancel")}</button></div>`,
              css = `dialog{min-width:450px;top:250px}.dialog-header{background:${colorName}}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px;line-height:150%}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group p.domain{font:italic 700 24px/150% Candara,Times!important;word-break:keep-all}.anchor-manage-ex{anchor-name:--manage-ex}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), title = isExclude ? i18n.t("ExcludeTitle") : i18n.t("ResumeTitle"); win.setTitle(title);
            addListener(win, "action:launch-exclusion:click", () => { win.close(); openCustomExclusionPanel() });
            addListener(win, "action:launch-action:click", async () => {
              const sites = await dataManager.get(EXCLUDESITES); if (isExclude) { Array_push(sites, CUR_HOST); await dataManager.set(EXCLUDESITES, Array_sort(sites)) } else {
                const wildcardFn = s => typeof s === "string" && s.startsWith("*") && new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${s.slice(1).replace(/\./g, "\\.")}(\\:\\d{2,5})?$`),
                  wildcard = Array_find(sites, site => { const match = wildcardFn(site); return match && match.test(CUR_HOST) }); if (wildcard) { openWildcardPanel(wildcard); return }
                const index = updateExsitesIndex(sites); index !== -1 && Array_splice(sites, index, 1); await dataManager.set(EXCLUDESITES, Array_sort(sites));
              } win.close(); reload();
            }); win.mount();
          }
          async function openFetchRemoteDataPanel(title, extra_content, bgColor) {
            const languagePacks = {
              "en-US": { Loading: "Fetching cloud data, please wait...", FetchDone: "Cloud rules sync and save completed!", FetchFailed: "Failed to fetch cloud rules. Please retry later in 'Advanced Core Settings'.", Reload: "Page will refresh once this dialog is closed." },
              "zh-CN": { Loading: "正在获取云端站点渲染数据，请稍后……", FetchDone: "云端站点渲染规则同步完成，数据已成功保存！", FetchFailed: "云端站点渲染规则获取失败，请稍后在『高级核心配置设置』中重新拉取。", Reload: "关闭当前窗口后，网页将自动刷新以应用更改。", Close: "关闭" },
              "zh-TW": { Loading: "正在取得雲端網站轉譯資料，請稍後……", FetchDone: "雲端網站轉譯規則同步完成，資料已成功儲存！", FetchFailed: "雲端網站轉譯規則取得失敗，請稍後在「進階核心設定」中重新嘗試拉取。", Reload: "關閉目前視窗後，網頁將會自動重新整理以套用變更。", Close: "關閉" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group">${extra_content ?? ""}<p class="indent" id="fetch-result"><span class="grey">${i18n.t("Loading")}<span></p><p>${i18n.t("Reload")}</p></div><div class="btn-box"><button data-action="close" class="btn btn-ok">${i18n.t("Close")}</button></div>`,
              css = `dialog{min-width:450px;top:250px}.dialog-header{background:${bgColor}}.dialog-header .dialog-title{text-shadow:0 0 2px #1c1c1c!important}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{line-height:150%;margin:0;padding:3px}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.form-group p.indent{text-indent:-28px;margin:0 26px}`,
              fetchWin = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager }), qW = s => qS(s, fetchWin.dialog),
              fetchZone = qW("#fetch-result"), btn = qW(`button[class="btn btn-ok"]`); fetchWin.setTitle(title); addListener(fetchWin, "dialog:before-close", reload); fetchWin.mount();
            try {
              if (btn) { setAttribute(btn, "disabled", ""); btn.classList.add("grayscale") }
              const rawRules = await RenderRuleManager.fetchRules(decrypt(RENDER_RULES_URL)); if (!rawRules) { throw new Error("failed to fetch") }
              await dataManager.set(REMOTERENDERDATA, rawRules, { isStringify: false }); log("Fetched:", rawRules.length);
              await sleep(1e3); if (fetchZone) { fetchZone.classList.add("darkgreen"); fetchZone.textContent = `✅ ${i18n.t("FetchDone")}` }
            } catch {
              await sleep(1e3); if (fetchZone) { fetchZone.classList.add("firebrick"); fetchZone.textContent = `❌ ${i18n.t("FetchFailed")}` }
            } finally { if (btn) { removeAttribute(btn, "disabled"); btn.classList.remove("grayscale") } }
          }
          function operationConfirmation(type, title, content, bgColor) {
            const i18n = new I18n({ "en-US": { YES: "Yes", NO: "No" }, "zh-CN": { YES: "同意", NO: "拒绝" }, "zh-TW": { YES: "同意", NO: "拒絕" } }, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><p class="darkbrown">${content}</p></div><div class="btn-box"><button data-action="confirm-yes" class="btn btn-a">${i18n.t("YES")}</button><button data-action="confirm-no" class="btn btn-b">${i18n.t("NO")}</button></div>`,
              css = `dialog{min-width:470px;top:300px}.dialog-header{background:${bgColor}}.dialog-header .dialog-title{text-shadow:0 0 2px #1c1c1c!important}.form-group *{text-shadow:0 0 1px #3e170040!important}.form-group p{margin:0;padding:3px;line-height:150%}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:12px 0 0}.darkbrown{color:#3e1700}button.btn{font-weight:600}button.btn-a{background:#a98a53;border-color:#a98a53;color:#fff}button.btn-b{background:#261e11;border-color:#261e11;color:#fff}button.btn-a:hover{background:#a98a53d9;box-shadow:0 0 3px #a98a53}button.btn-b:hover{background:#261e11d9;box-shadow:0 0 3px #261e11}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "prompt", html, css, styleManager }); win.setTitle(title);
            const eventName = type === "whilelist" ? "CONFIRM_OPEN_DISABLE" : type === "scale" ? "CONFIRM_OPEN_SCALING" : null;
            addListener(win, "action:confirm-yes:click", () => { eventName && win.postMessage(eventName, { confirm: true, source: "Confirmation" }); win.close() });
            addListener(win, "action:confirm-no:click", () => { eventName && win.postMessage(eventName, { confirm: false, source: "Confirmation" }); win.close() });
            win.mount();
          }
          function searchTextAndSelect(input, target, elementSelector) {
            if (!input || !target || !elementSelector) { return } input.classList.remove("peach-border");
            const keyword = input.value?.trim().replace(/([.*+?^${}()|[\]\\])/g, "\\$&"); if (!keyword) { return }
            const reg = new RegExp(keyword, "i"), textNodes = qA(elementSelector, target); if (textNodes.length === 0) { return }
            const lastKeyword = input.dataset.lastKeyword || ""; let index = parseInt(input.dataset.searchIndex, 10) || 0;
            if (lastKeyword !== keyword) { index = 0; input.dataset.lastKeyword = keyword } let match = null, textNode = null, foundIndex = -1;
            for (let i = 0, l = textNodes.length; i < l; ++i) {
              const checkIndex = (index + i) % textNodes.length, node = textNodes[checkIndex].firstChild;
              if (node && node.data !== void 0 && reg.test(node.data)) { match = reg.exec(node.data); textNode = node; foundIndex = checkIndex; break }
            }
            if (match && textNode) {
              input.dataset.searchIndex = (foundIndex + 1) % textNodes.length; const range = document.createRange(); range.selectNodeContents(textNode);
              const selection = $.getSelection(); if (selection) { selection.removeAllRanges(); selection.addRange(range) }
              input.classList.remove("peach-border"); const selectedNode = textNode.parentNode.previousElementSibling;
              if (selectedNode) { const row = parseInt(selectedNode.textContent, 10) || 0, height = Number(selectedNode.clientHeight) || 0; target.scrollTop = (row - 1) * height }
            } else { input.dataset.searchIndex = 0; input.classList.add("peach-border"); input.blur() }
          }
          function checkTextareaFormat(win, textarea, submitBtn, type) {
            const isArray = type === "array", isObject = type === "object", handleInput = event => {
              const target = event.target, value = target.value.trim(); if (!value) { setAttribute(submitBtn, "disabled", ""); submitBtn.classList.add("grayscale"); return }
              let processedValue = value; if (isArray && value.endsWith("]")) { processedValue = value.replace(/,\s*\]$/, "]") } else
                if (isObject && value.endsWith("}")) { processedValue = value.replace(/,\s*\}$/, "}") } try {
                  const parsedValue = JSON_parse(processedValue), isParsedArray = Array_isArray(parsedValue);
                  if (isObject && (isParsedArray || typeof parsedValue !== "object" || parsedValue === null)) { throw new Error("Invalid Object") }
                  if (isArray && (!isParsedArray || Array_some(parsedValue, v => typeof v !== "string"))) { throw new Error("Invalid Array") }
                  const formatValue = JSON_stringify(parsedValue, null, 4); if (target.value !== formatValue) {
                    const prevCursor = target.selectionStart, prevScrollTop = target.scrollTop, lengthDiff = formatValue.length - target.value.length,
                      newCursor = prevCursor + lengthDiff; target.value = formatValue; target.classList.remove("bd-crimson");
                    removeAttribute(submitBtn, "disabled"); submitBtn.classList.remove("grayscale");
                    rAF(() => { target.scrollTop = prevScrollTop; target.setSelectionRange(newCursor, newCursor) });
                  } else { target.classList.remove("bd-crimson"); removeAttribute(submitBtn, "disabled"); submitBtn.classList.remove("grayscale") }
                } catch { target.classList.add("bd-crimson"); setAttribute(submitBtn, "disabled", ""); submitBtn.classList.add("grayscale") }
            }; win.trackInternal(textarea, "change", event => {
              const target = event.target, newValue = standardizeString(target.value, true, false);
              if (target.value !== newValue) { target.value = newValue } handleInput(event);
            }); win.trackInternal(textarea, "input", handleInput);
          }
          function standardizeString(text, isDoubleQuote = true, isConvertHTML = false, filterRegex = null) {
            if (!text) { return "" } let result = text.replace(/[\uFF01-\uFF5E\u3000，：'"`·“”‘’]/g, char => {
              if (char === "\u3000") { return " " } if (char === "，") { return "," } if (char === "：") { return ":" }
              if (/['"`·“”‘’]/.test(char)) { return isDoubleQuote ? `"` : `'` } return String.fromCharCode(char.charCodeAt(0) - 65248);
            }); if (filterRegex instanceof RegExp) { result = result.replace(filterRegex, "") } return isConvertHTML ? toSafeString(result.trim()) : result.trim();
          }
          function downloadDataFile(fileName, data) {
            const url = URL.createObjectURL(new Blob([encrypt(toString(data))], { type: "text/plain;charset=utf-8" })),
              link = cE("a", { href: url, download: fileName }); link.click(); setTimeout(() => URL.revokeObjectURL(url), 10);
          }
          function setDateFormat(fmt, date) {
            const o = { y: "FullYear", M: "Month", d: "Date", H: "Hours", m: "Minutes", s: "Seconds", S: "Milliseconds" }, getDate = k => date[`get${o[k]}`]() + (k === "M" ? 1 : 0);
            return fmt.replace(/([yMdHmsS])+/g, (m, k) => String(getDate(k)).padStart(m.length, "0").slice(-m.length));
          }
        })(SERVICE_BUS);

        void (async function SetupMenuAndHotkey(bus) {
          const MenusPromises = [dataManager.get(CONFIGURE), bus.get("ProcessSavedData"), bus.get("ControlPanelCenter")],
            [configure, savedData, controlPanelCenter] = await Promise.all(MenusPromises); bus.unregister("ControlPanelCenter"); const isHotkey = configure.isHotkey,
              isExcluded = savedData.excludeIndex !== -1, { panel: _P, dialog: { _G, _X, __X, _T } } = controlPanelCenter, _Actions = { __proto__: null },
              menuConfig = [{ key: "KeyP", fn: _P, duration: 1e3, title: i18n.t("RenderSetting"), icon: "\ufff1\ud83c\udf13", showMenu: !isExcluded, showKey: !isExcluded },
              { key: "KeyX", fn: _X, duration: 1e3, title: i18n.t("StopRender", { h: TOP_HOST }), icon: "\ufff2\u26d4", showMenu: !isExcluded, showKey: !isExcluded },
              { key: "KeyG", fn: _G, duration: 1e3, title: i18n.t("CoreSetting"), icon: "\ufff3\ud83d\udc8e", showMenu: true, showKey: true },
              { key: "KeyX", fn: __X, duration: 1e3, title: i18n.t("ReRender", { h: TOP_HOST }), icon: "\ufff4\u267b\ufe0f", showMenu: isExcluded, showKey: isExcluded },
              { key: "KeyT", fn: _T, duration: 5e3, title: i18n.t("Feedback"), icon: "\ufff5\ud83e\udde1", showMenu: isExcluded, showKey: true },
              { key: "KeyP", fn: __X, duration: 1e3, showMenu: false, showKey: isExcluded }];
          CUR_WINDOW_TOP && Array_forEach(menuConfig, ({ key, fn, duration, title, icon, showMenu, showKey }) => {
            if (!fn) { return } if (showKey) { _Actions[key] = { fn, duration, lastClick: 0 } } if (!showMenu || typeof GMaddMenu !== "function") { return }
            const suffix = isHotkey ? ` (${key.replace("Key", "")})` : ""; GMaddMenu(`${icon} ${title}${suffix}`, fn);
          }); if (!isHotkey || Object_keys(_Actions).length === 0) { return } addListener(document, "keydown", e => {
            const action = _Actions[e.code]; if (!action) { return } const isAlt = e.altKey || e.key === "Alt" || e.code === "AltRight" || e.code === "AltLeft";
            if (!isAlt || e.ctrlKey || e.shiftKey || e.metaKey) { return } preventDefault(e); InputShield.stopPropagate(e); const currentTime = performance.now();
            if (currentTime - action.lastClick > action.duration) { action.lastClick = currentTime; action.fn() }
          }, true);
        })(SERVICE_BUS);

        function compareVersion({ WEBKIT = NaN, BLINK = NaN, GECKO = NaN, more = true } = {}) {
          if (IS_CHEAT_UA) { return false } const compare = version => (more ? engineVersion >= version : engineVersion < version);
          return (IS_REAL_WEBKIT && compare(WEBKIT)) || (IS_REAL_BLINK && compare(BLINK)) || (IS_REAL_GECKO && compare(GECKO));
        }
        async function getBrowserNavigatorInfo(_info) {
          let parsedInfo; try { if (!_info) { throw new Error("Illegal data") } parsedInfo = JSON_parse(_info) } catch {
            const navigator = new NavigatorInfoFetcher($); parsedInfo = await navigator.getInfo(); sessionStorage.setItem(NAVIGATORINFO, JSON_stringify(parsedInfo));
          } return parsedInfo;
        }
        async function automatedInitializationNotice() {
          if (!CUR_WINDOW_TOP) { return } const keys = await GMlistValues(); await Promise.allSettled(Array_map(keys, key => dataManager.delete(key)));
          if (privateKey) { error(`\ufff0\ud83d\udea7 ${i18n.t("TamperErr")}`); GMaddMenu(`\ufff0\ud83d\udea7 ${i18n.t("Reinstall")}`, () => GMopenInTab(GMhomepage, false)) } else {
            error(i18n.t("RebuildErr")); await dataManager.init(); const configure = await dataManager.get(CONFIGURE);
            await dataManager.set(CONFIGURE, { ...configure, curVersion: null }); noticeRebuildInfo();
          } function noticeRebuildInfo() {
            const languagePacks = {
              "en-US": { Title: "Automatic Data Initialized", Warning: "Notice: Data initialized due to new data structure. Reconfiguration recommended. (Old backups can still be imported, but compatibility is not guaranteed).", Notice: "The page will refresh once this dialog is closed.", Changelog: "Changelog", Update: "The script is now on the latest version. Data initialization will complete once the page is refreshed." },
              "zh-CN": { Title: "数据自动初始化通知", Warning: "注意：因新版本采用全新的数据结构，升级后数据已自动初始化。建议重新配置渲染数据以获得最佳体验（您仍可尝试导入旧备份进行还原，但可能存在兼容性问题）。", Notice: "为使初始化配置生效，关闭此对话框后网页将自动刷新。", Changelog: "更新日志", Update: "当前脚本已是最新，数据初始化将在页面刷新后自动完成。", Close: "关闭" },
              "zh-TW": { Title: "資料自動初始化通知", Warning: "注意：因新版本採用全新的資料結構，升級後資料已自動初始化。建議重新設定轉譯資料以獲得最佳體驗（您仍可嘗試匯入舊備份進行還原，但可能存在相容性問題）。", Notice: "為使初始化設定生效，關閉此對話框後網頁將會自動重新整理。", Changelog: "更新日誌", Update: "腳本已是最新版本，資料初始化將在網頁重新整理後自動完成。", Close: "關閉" }
            }, i18n = new I18n(languagePacks, getLanguage("zh-CN"), "en-US"),
              html = `<div class="form-group"><div class="rebuilt_warning">\u26a0&nbsp;${i18n.t("Warning")}</div><div class="update_info bold">${i18n.t("Update")}</div><div class="update_info">${i18n.t("Notice")}</div></div><div class="btn-box"><button data-action="close" class="btn btn-warn">${i18n.t("Close")}</button></div>`,
              css = `dialog{min-width:525px;top:150px}.dialog-header{background:#ef7d12}.form-group *{text-shadow:0 0 1px #7d7d7d40!important}.form-group p{margin:0;padding:3px}.form-group .title{font-weight:700}.btn-box{display:flex;gap:8px;justify-content:flex-end;margin:18px 0 0}.rebuilt_warning{background:#fff7e6;border:1px solid #ffd591;border-radius:6px;color:#d46b08;font-size:14px;line-height:160%;padding:10px}.update_info{color:#d46b08;line-height:150%;margin:8px 0 0 8px}.update_info button{font-style:italic;margin:0 0 0 8px;padding:6px 12px;background:#fff7e6;border-color:#f3aa65;color:#555}button.btn-warn{background:#f3aa65;border-color:#f3aa65;color:#fff}button.btn-warn:hover{background:#f3aa65d9;box-shadow:0 0 3px #f3aa65}`,
              win = new DialogPanelController({ id: randomString(6, "alpha"), type: "dialog", html, css, styleManager });
            win.setTitle(i18n.t("Title")); addListener(win, "dialog:before-close", reload); win.mount();
          }
        }
        function initRootMarker() {
          let lastId = null, cachedStyle = null; const html = document.documentElement, htmlObserver = new MutationObserver(mutations => {
            let newID = null, newMarker = false; for (let i = 0, l = mutations.length; i < l; ++i) {
              const { target, attributeName } = mutations[i]; if (attributeName === "id") { if (!target.id) { target.id = MARKERID } else { newID = target.id } } else
                if (attributeName === LOAD_ONCE && !hasAttribute(target, LOAD_ONCE)) { newMarker = true }
            } if (newMarker) { setAttribute(html, LOAD_ONCE, currentTheme) } if (newID === null || cachedStyle === null || lastId === newID) { return }
            styleManager.insert(MAIN_STYLE_ID, cachedStyle.replace(ID_REGEXP, `:root#${CSS.escape(newID)}`), { type: MAIN_STYLE_TYPE }); lastId = newID;
          }); htmlObserver.observe(html, { attributeFilter: [LOAD_ONCE, "id"] }); SERVICE_BUS.register("hasRootMarker", hasAttribute(html, LOAD_ONCE));
          if (!hasAttribute(html, LOAD_ONCE)) { setAttribute(html, LOAD_ONCE, "") } if (!getAttribute(html, "id")) { setAttribute(html, "id", MARKERID) }
          SERVICE_BUS.get("OutputRenderData").then(output => { cachedStyle = output.data.finalStyle }).catch(e => error("Timeout failed:", e.message));
        }
        function updateExsitesIndex(sites) {
          if (!Array_isArray(sites)) { return -1 } return Array_findIndex(sites, site => {
            if (typeof site !== "string") { return false } if (site.startsWith("*")) {
              const domain = site.slice(1).replace(/[.]/g, "\\."), reg = new RegExp(`^[a-z0-9][-a-z0-9]{0,62}${domain}(:\\d{2,5})?$`, "i"); return reg.test(CUR_HOST);
            } return site === CUR_HOST;
          });
        }
        function getUniqueFontlist(fontlist) {
          if (!Array_isArray(fontlist)) { return [] } const result = [], fontMap = new Map(); for (let i = 0, l = fontlist.length; i < l; ++i) {
            const font = fontlist[i]; if (!font) { continue } const ch = font.ch, en = font.en,
              idx = (ch ? fontMap.get(ch) : void 0) ?? (en ? fontMap.get(en) : void 0); if (idx !== void 0) {
                if (font.ps && result[idx] && !result[idx].ps) { result[idx] = font }
              } else { const newIdx = Array_push(result, font) - 1; if (ch) { fontMap.set(ch, newIdx) } if (en) { fontMap.set(en, newIdx) } }
          } return result;
        }
        function updateDomainsIndex(domains, curHost = CUR_HOST) { return Array_findIndex(domains, domain => domain.domain === curHost) }
        function parseCsstextForIframe(cssText) { return cssText.replace(ID_REGEXP, ":root ").replace("var(--fr-font-fontscale)", "initial") }
        function validateUserAgent(uad) { return ($.isSecureContext && !uad) || (uad && Object_toString(uad) !== "[object NavigatorUAData]") }
      })(sessionStorage.getItem(NAVIGATORINFO));

    })((function trustedTypesPolicy() {
      const policyOptions = { createHTML: h => h, createScript: s => s, createScriptURL: u => u };
      if (typeof ctx.trustedTypes?.createPolicy !== "function") { return typeof cloneInto === "function" ? cloneInto(policyOptions, ctx, { cloneFunctions: true }) : policyOptions }
      const trustedTypes = ctx.trustedTypes, originalCreatePolicy = trustedTypes.createPolicy.bind(trustedTypes),
        policyName = trustedTypes.defaultPolicy?.name ?? (CUR_HOST_NAME.endsWith("bing.com") ? "rwflyoutDefault" : "default"),
        defaultPolicy = trustedTypes.defaultPolicy ?? originalCreatePolicy(policyName, policyOptions),
        createPolicyWrapper = (name, options) => { if (name === policyName) { return defaultPolicy } return originalCreatePolicy(name, options) };
      createPolicyWrapper.toString = function () { return "function createPolicy() { [native code] }" }; try {
        const exportFn = function (fn, context) { return typeof exportFunction === "function" ? exportFunction(fn, context) : fn };
        if (ctx.trustedTypes) { ctx.trustedTypes.createPolicy = exportFn(createPolicyWrapper, ctx.trustedTypes) }
        if (ctx.TrustedTypePolicyFactory?.prototype) { ctx.TrustedTypePolicyFactory.prototype.createPolicy = exportFn(createPolicyWrapper, ctx.TrustedTypePolicyFactory.prototype) }
        if (!GMcontextMode && uctx.TrustedTypePolicyFactory?.prototype) { uctx.TrustedTypePolicyFactory.prototype.createPolicy = exportFn(createPolicyWrapper, uctx.TrustedTypePolicyFactory.prototype) }
      } catch (e) { warn(i18n.t("TrustedHTML"), e.message) } return defaultPolicy;
    })());
  })(ctx,
    (function buildSafeMethodsLibrary(window, sandboxWindow) {
      const safeWin = sandboxWindow, safeMethods = safeWin.Object.create(null), call = safeWin.Function.prototype.call, bind = safeWin.Function.prototype.bind,
        uncurry = bind.bind(call), localConstructors = { Object, Function, Array, String, Number, Math, JSON, Reflect }, Char = String.fromCharCode, DECODE = new Uint8Array(256),
        MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; for (let i = 0; i < 64; ++i) { DECODE[MAP.charCodeAt(i)] = i } safeMethods.btoa = input => {
          const s = String(input), l = s.length; if (l === 0) { return "" } if (/[\u0100-\uFFFF]/.test(s)) { throw new Error("'btoa' failed") } let resIdx = 0;
          const res = new Array(Math.ceil(l / 3)), extra = l % 3, mainLen = l - extra; for (let i = 0; i < mainLen; i += 3) {
            const v = (s.charCodeAt(i) << 16) | (s.charCodeAt(i + 1) << 8) | s.charCodeAt(i + 2); res[resIdx++] = MAP[(v >> 18) & 63] + MAP[(v >> 12) & 63] + MAP[(v >> 6) & 63] + MAP[v & 63];
          } if (extra === 1) { const v = s.charCodeAt(mainLen) << 16; res[resIdx] = MAP[(v >> 18) & 63] + MAP[(v >> 12) & 63] + "==" } else if (extra === 2) {
            const v = (s.charCodeAt(mainLen) << 16) | (s.charCodeAt(mainLen + 1) << 8); res[resIdx] = MAP[(v >> 18) & 63] + MAP[(v >> 12) & 63] + MAP[(v >> 6) & 63] + "=";
          } return res.join("");
        }; safeMethods.atob = input => {
          const s = String(input); let l = s.length; if (l === 0) { return "" } while (l > 0 && s.charCodeAt(l - 1) === 61) { l-- } if (l % 4 === 1) { throw new Error("'atob' failed") }
          const res = new Array(Math.ceil(l * 3 / 4)); let resIdx = 0; const extra = l % 4, mainLen = l - extra; for (let i = 0; i < mainLen; i += 4) {
            const v = (DECODE[s.charCodeAt(i)] << 18) | (DECODE[s.charCodeAt(i + 1)] << 12) | (DECODE[s.charCodeAt(i + 2)] << 6) | DECODE[s.charCodeAt(i + 3)];
            res[resIdx++] = Char((v >> 16) & 255, (v >> 8) & 255, v & 255);
          } if (extra === 2) { const v = (DECODE[s.charCodeAt(mainLen)] << 18) | (DECODE[s.charCodeAt(mainLen + 1)] << 12); res[resIdx] = Char((v >> 16) & 255) } else if (extra === 3) {
            const v = (DECODE[s.charCodeAt(mainLen)] << 18) | (DECODE[s.charCodeAt(mainLen + 1)] << 12) | (DECODE[s.charCodeAt(mainLen + 2)] << 6); res[resIdx] = Char((v >> 16) & 255, (v >> 8) & 255);
          } return res.join("");
        };["Object", "Function", "Array", "String", "JSON", "Reflect"].forEach(name => {
          let Target = safeWin[name]; if (!Target) { return } if (Target.prototype) {
            let protoNames = []; try { protoNames = safeWin.Object.getOwnPropertyNames(Target.prototype) } catch { void 0 }
            if (protoNames.length === 0 && localConstructors[name]) { Target = localConstructors[name]; try { protoNames = Object.getOwnPropertyNames(Target.prototype) } catch { void 0 } }
            protoNames.forEach(prop => {
              if (prop === "constructor") { return } try {
                const currentObj = Target === localConstructors[name] ? Object : safeWin.Object, desc = currentObj.getOwnPropertyDescriptor(Target.prototype, prop); if (!desc) { return }
                if (typeof desc.value === "function") { safeMethods[`${name}_${prop}`] = uncurry(desc.value) } else if (typeof desc.get === "function") { safeMethods[`${name}_get_${prop}`] = uncurry(desc.get) }
              } catch { void 0 }
            });
          } let staticNames = []; try { staticNames = (Target === localConstructors[name] ? Object : safeWin.Object).getOwnPropertyNames(Target) } catch { void 0 }
          if (staticNames.length === 0 && localConstructors[name]) { Target = localConstructors[name]; try { staticNames = Object.getOwnPropertyNames(Target) } catch { void 0 } }
          staticNames.forEach(prop => {
            try {
              const currentObj = Target === localConstructors[name] ? Object : safeWin.Object, desc = currentObj.getOwnPropertyDescriptor(Target, prop);
              if (desc && typeof desc.value === "function" && !["caller", "callee", "arguments"].includes(prop)) { safeMethods[`${name}_${prop}`] = desc.value }
            } catch { void 0 }
          });
        });
      const windowMethods = ["setTimeout", "clearTimeout", "structuredClone", "queueMicrotask", "requestIdleCallback", "cancelIdleCallback", "requestAnimationFrame", "cancelAnimationFrame"];
      windowMethods.forEach(name => { const origFn = window[name]; if (typeof origFn === "function") { safeMethods[name] = origFn.bind(uctx) } }); if (window.console) {
        ["log", "warn", "error"].forEach(name => { const origFn = window.console[name]; if (typeof origFn === "function") { safeMethods[`console_${name}`] = origFn.bind(window.console) } });
      } if (window.Element && window.Element.prototype) {
        const elementMethods = ["attachShadow", "setAttribute", "getAttribute", "hasAttribute", "removeAttribute"];
        elementMethods.forEach(name => { const origFn = window.Element.prototype[name]; if (typeof origFn === "function") { safeMethods[`Element_${name}`] = uncurry(origFn) } });
      } if (window.EventTarget && window.EventTarget.prototype) {
        ["addEventListener", "removeEventListener", "dispatchEvent"].forEach(name => {
          const origFn = window.EventTarget.prototype[name], winFn = window[name]; if (typeof origFn !== "function") { return }
          const uncurriedOrig = uncurry(origFn), boundWinFn = winFn ? winFn.bind(window) : null; safeMethods[`EventTarget_${name}`] = function (target, ...args) {
            if (!target) { return } if (target === window || target === window.window) { return boundWinFn ? boundWinFn(...args) : void 0 }
            if (typeof target[name] === "function") { try { return target[name](...args) } catch { void 0 } }
            try { return uncurriedOrig(target, ...args) } catch (e) { if (e instanceof TypeError) { return } throw e }
          };
        });
      } if (window.Event && window.Event.prototype) {
        const Events = ["preventDefault", "stopImmediatePropagation", "stopPropagation", "composedPath"];
        Events.forEach(name => { const origFn = window.Event.prototype[name]; if (typeof origFn === "function") { safeMethods[`Event_${name}`] = uncurry(origFn) } });
      } return safeWin.Object.freeze(safeMethods);
    })(ctx, sctx)
  );
})(
  typeof this !== "undefined" ? this : window,
  typeof unsafeWindow !== "undefined" ? unsafeWindow : typeof this !== "undefined" ? this : window,
  (function createSandboxWindow(originalWindow, iframe) {
    if (typeof GM_addElement === "undefined" || document.contentType === "application/pdf") { return originalWindow } try {
      const id = "sandbox:window"; let safeWindow; iframe = GM_addElement("iframe", { id, style: "display:none" }) ?? document.querySelector(`iframe#${CSS.escape(id)}`);
      if (iframe) { safeWindow = iframe.contentWindow; if (safeWindow) { return safeWindow } } return originalWindow;
    } catch { return originalWindow } finally { if (iframe) { iframe.remove() } }
  })(typeof this !== "undefined" ? this : window, null)
);
