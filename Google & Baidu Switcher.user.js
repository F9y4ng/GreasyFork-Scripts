// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            Search Engine Assistant
// @name:zh-CN         优雅的搜索引擎助手
// @name:zh-TW         優雅的搜尋引擎助手
// @name:ru            помощник поисковых систем
// @name:ja            優雅な検索エンジン助手
// @version            2024.11.02.1
// @author             F9y4ng
// @description        “Elegant Search Engine Assistant” facilite la navigation entre moteurs de recherche, personnalise les préférences, met en évidence les mots-clés, élimine les redirections et publicités, et filtre les résultats. Compatible avec divers moteurs tels que Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, etc.
// @description:en     "Elegant search engine assistant" allows switching between engines; supports custom engines, keyword highlighting; offers redirect removal, ad blocking, keyword filtering, and auto-updates; compatible with Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Swisscows, searXNG and more.
// @description:zh-CN  “优雅的搜索引擎助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染；还提供去除搜索链接重定向、屏蔽搜索结果广告、使用关键词过滤搜索结果、和自动更新检测等高级功能；兼容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNG等多个搜索引擎。
// @description:zh-TW  「優雅的搜尋引擎助手」方便使用者在不同的搜尋引擎之間跳轉；支援自定義常用搜尋引擎、關鍵詞高亮渲染；還提供去除搜尋連結重定向、遮蔽搜尋結果廣告、使用關鍵詞過濾搜尋結果、和自動更新檢測等高階功能；相容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNG等多個搜尋引擎。
// @description:ru     “Элегантный помощник поисковых систем” обеспечивает удобное переключение между поисковыми системами, поддерживает настройку, выделение ключевых слов и продвинутые функции.  совместим с Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Swisscows, searXNG и другими поисковыми системами.
// @description:ja     「優雅な検索エンジン助手」は、検索エンジン間の切り替えを容易にし、カスタムエンジン、キーワードハイライト、リダイレクト削除、広告ブロック、キーワードフィルタリング、自動更新をサポートし、Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Swisscows、searXNGなどと互換性があります。
// @namespace          https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nO2WbUxTVxjHj8IMWZbt05Yt28y2D3yQRN0++MVsmXFbNjBixbFpkSGvXUt5GRpkgOCgIsgqOANUQCXYOQUKCMqrtDAmiorSwioIytsoIL3ce1olQ+W/3KsFlYov8yUmPsn/w725J//fec7zPPcQ8jJexoscABwsFosLpfRTq9W6CIDTMzFmWfYjSmkux3EWSilsYll2YnBwsNxsNi99auaUUn+O48ZZlkODrgW7lAVIjM9DWuohHD3yF8xmBhzHTXZ2du4B4PhEzVmWDeZ32nq+AxvESfDekIbwHbUIV51F+E4dAuTZEK2IQU3VKSEjBoNBQwiZ80TMx8bGPuY4buLsGSPc3WIQvKcVYVrMUPChAXh4JKC0uEGAKCsri/pfxgCcKKULKKXVfHo9RfGQ5Brtmk9BFJux0jUGl7r7MTAwMLR48eI3H9nYarW+c7vQrtqKTFOgxXrZ3lnNbfJNqEJq8kFhnVKplD+q+SKO40x8ofHn+dvOQuxIUsPPJwUbdttP/b2Sakbh6ZEgAJSUlPxOCJn7UOYMw7xBKb1sMo1AFrgTP/imI0ypw0+7GhG4+Q/Ij12dMgmpnoC02Axp0RUEl1sQVjc5DVE3iS8/3ygA9PT09HV3dwdbLJa3HghAKY3lF23eqIJ/bKn9HdZNIuhAH2S5fyNNewWqE2OIK+6Fb1Yb5Eett+BqJvDVsk3o7zdhdNRsmxPXurq6tswKwLKs0aC/iFWiBITV3bQLEJB3CcmVJuhHgA5mWkc7JhCkaoO8YhySQyYsWxqG1e5xcP0iEnJJOppPtgkger1+/wxjAPMopdH8ECk6rIXXpsP2K7zcgo3qi2g3321uU2HbOPxyO4VvQ6v/vZ2xm5Bnt0K0Mg5VFSeFQaVWq/3vNH+FUlrJ07WcNWJLVA7WRtgHCFL3ocAwbtec1wUzIM1pR2jtjRlrZQVDcHeNBl9fRqPRQAh5zXbuUbz5vpxyrFn9C8JTqhB8eNAugP++LtRcun5fAF7RBZeFY7C33jtcLbQzy7I35s+f/4kAwLfcuZYLELlvhbzi2qztFXigD0Xts2SAAWR8Bmqu213vta0e6cpCoRbEYvFavuff5h/2ZpfDO77igf0tO8Ih8mA3jKP2AUrPU/jsbkXocfsF/H1sJbIyjwgAy5cv/46f8R/wD9lZ5VgXV/1QQyZgfzeUx0fQdg9E7fkxRCY2Iij1DPyyO2bUQejxSazw2I7Tze0YGhoyOzo6fiZcKhiGYfifjJu7YrpyZ1PdTQTm9yBkvxGZjQz2NVMoyv6BX3oLQuL/RFiMDpLkU/DbY5w+irpJeEaWQiLPEnZfWVlZSghxFmqgv78/lX+5XVkC11VJ8EpqgM+ucw+Ut7IZXtsaIFbo4JVyAusSdfCM0EC2ueYWRMpprE9pgjhRCzfPX+ErycDw8ChMJtOos7OzFyFknq0NnXp7e/U8RK1Oj58TixAQkvNYEvumw+2bGIREVQsQPpIcfLtGgYrac3z/86lnRCJROCHkvbsGUX5+/utNTU0FDMOM33nNehztTiuEx8otiIg+BtmPGVBszRPe19fXV7u4uHgTQt6/3ySes2TJkgURERGBCoUi5nGk1+ubeDNVRilErtEI9EmZuhc4ODh8PZX2pxVardbJYDAcuzMjw8PDY1KpNJYQ8i55RjE3MzPTR6PRqFUqVebChQv5tH9InkPMIYS8+jyMyQsT/wHRI0Gp4kJwPQAAAABJRU5ErkJggg==
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @require            https://update.greasyfork.org/scripts/460897/1277476/gbCookies.js#sha256-Sv+EuBerch8z/6LvAU0m/ufvjmqB1Q/kbQrX7zAvOPk=
// @match              *://www.baidu.com/*
// @match              *://ipv6.baidu.com/*
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
// @match              *://*.search.yahoo.com/search*
// @match              *://*.images.search.yahoo.com/search*
// @match              *://you.com/search*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://swisscows.com/*
// @match              *://search.inetol.net/search*
// @match              *://*.google.com/search*
// @match              *://*.google.ad/search*
// @match              *://*.google.ae/search*
// @match              *://*.google.com.af/search*
// @match              *://*.google.com.ag/search*
// @match              *://*.google.com.ai/search*
// @match              *://*.google.al/search*
// @match              *://*.google.am/search*
// @match              *://*.google.co.ao/search*
// @match              *://*.google.com.ar/search*
// @match              *://*.google.as/search*
// @match              *://*.google.at/search*
// @match              *://*.google.com.au/search*
// @match              *://*.google.az/search*
// @match              *://*.google.ba/search*
// @match              *://*.google.com.bd/search*
// @match              *://*.google.be/search*
// @match              *://*.google.bf/search*
// @match              *://*.google.bg/search*
// @match              *://*.google.com.bh/search*
// @match              *://*.google.bi/search*
// @match              *://*.google.bj/search*
// @match              *://*.google.com.bn/search*
// @match              *://*.google.com.bo/search*
// @match              *://*.google.com.br/search*
// @match              *://*.google.bs/search*
// @match              *://*.google.bt/search*
// @match              *://*.google.co.bw/search*
// @match              *://*.google.by/search*
// @match              *://*.google.com.bz/search*
// @match              *://*.google.ca/search*
// @match              *://*.google.cd/search*
// @match              *://*.google.cf/search*
// @match              *://*.google.cg/search*
// @match              *://*.google.ch/search*
// @match              *://*.google.ci/search*
// @match              *://*.google.co.ck/search*
// @match              *://*.google.cl/search*
// @match              *://*.google.cm/search*
// @match              *://*.google.cn/search*
// @match              *://*.google.com.co/search*
// @match              *://*.google.co.cr/search*
// @match              *://*.google.com.cu/search*
// @match              *://*.google.cv/search*
// @match              *://*.google.com.cy/search*
// @match              *://*.google.cz/search*
// @match              *://*.google.de/search*
// @match              *://*.google.dj/search*
// @match              *://*.google.dk/search*
// @match              *://*.google.dm/search*
// @match              *://*.google.com.do/search*
// @match              *://*.google.dz/search*
// @match              *://*.google.com.ec/search*
// @match              *://*.google.ee/search*
// @match              *://*.google.com.eg/search*
// @match              *://*.google.es/search*
// @match              *://*.google.com.et/search*
// @match              *://*.google.fi/search*
// @match              *://*.google.com.fj/search*
// @match              *://*.google.fm/search*
// @match              *://*.google.fr/search*
// @match              *://*.google.ga/search*
// @match              *://*.google.ge/search*
// @match              *://*.google.gg/search*
// @match              *://*.google.com.gh/search*
// @match              *://*.google.com.gi/search*
// @match              *://*.google.gl/search*
// @match              *://*.google.gm/search*
// @match              *://*.google.gr/search*
// @match              *://*.google.com.gt/search*
// @match              *://*.google.gy/search*
// @match              *://*.google.hk/search*
// @match              *://*.google.com.hk/search*
// @match              *://*.google.hn/search*
// @match              *://*.google.hr/search*
// @match              *://*.google.ht/search*
// @match              *://*.google.hu/search*
// @match              *://*.google.co.id/search*
// @match              *://*.google.ie/search*
// @match              *://*.google.co.il/search*
// @match              *://*.google.im/search*
// @match              *://*.google.co.in/search*
// @match              *://*.google.iq/search*
// @match              *://*.google.is/search*
// @match              *://*.google.it/search*
// @match              *://*.google.je/search*
// @match              *://*.google.com.jm/search*
// @match              *://*.google.jo/search*
// @match              *://*.google.jp/search*
// @match              *://*.google.co.jp/search*
// @match              *://*.google.co.ke/search*
// @match              *://*.google.com.kh/search*
// @match              *://*.google.ki/search*
// @match              *://*.google.kg/search*
// @match              *://*.google.co.kr/search*
// @match              *://*.google.com.kw/search*
// @match              *://*.google.kz/search*
// @match              *://*.google.la/search*
// @match              *://*.google.com.lb/search*
// @match              *://*.google.li/search*
// @match              *://*.google.lk/search*
// @match              *://*.google.co.ls/search*
// @match              *://*.google.lt/search*
// @match              *://*.google.lu/search*
// @match              *://*.google.lv/search*
// @match              *://*.google.com.ly/search*
// @match              *://*.google.co.ma/search*
// @match              *://*.google.md/search*
// @match              *://*.google.me/search*
// @match              *://*.google.mg/search*
// @match              *://*.google.mk/search*
// @match              *://*.google.ml/search*
// @match              *://*.google.com.mm/search*
// @match              *://*.google.mn/search*
// @match              *://*.google.ms/search*
// @match              *://*.google.com.mt/search*
// @match              *://*.google.mu/search*
// @match              *://*.google.mv/search*
// @match              *://*.google.mw/search*
// @match              *://*.google.com.mx/search*
// @match              *://*.google.com.my/search*
// @match              *://*.google.co.mz/search*
// @match              *://*.google.com.na/search*
// @match              *://*.google.com.ng/search*
// @match              *://*.google.com.ni/search*
// @match              *://*.google.ne/search*
// @match              *://*.google.nl/search*
// @match              *://*.google.no/search*
// @match              *://*.google.com.np/search*
// @match              *://*.google.nr/search*
// @match              *://*.google.nu/search*
// @match              *://*.google.co.nz/search*
// @match              *://*.google.com.om/search*
// @match              *://*.google.com.pa/search*
// @match              *://*.google.com.pe/search*
// @match              *://*.google.com.pg/search*
// @match              *://*.google.com.ph/search*
// @match              *://*.google.com.pk/search*
// @match              *://*.google.pl/search*
// @match              *://*.google.pn/search*
// @match              *://*.google.com.pr/search*
// @match              *://*.google.ps/search*
// @match              *://*.google.pt/search*
// @match              *://*.google.com.py/search*
// @match              *://*.google.com.qa/search*
// @match              *://*.google.ro/search*
// @match              *://*.google.ru/search*
// @match              *://*.google.rw/search*
// @match              *://*.google.com.sa/search*
// @match              *://*.google.com.sb/search*
// @match              *://*.google.sc/search*
// @match              *://*.google.se/search*
// @match              *://*.google.com.sg/search*
// @match              *://*.google.sh/search*
// @match              *://*.google.si/search*
// @match              *://*.google.sk/search*
// @match              *://*.google.com.sl/search*
// @match              *://*.google.sn/search*
// @match              *://*.google.so/search*
// @match              *://*.google.sm/search*
// @match              *://*.google.sr/search*
// @match              *://*.google.st/search*
// @match              *://*.google.com.sv/search*
// @match              *://*.google.td/search*
// @match              *://*.google.tg/search*
// @match              *://*.google.co.th/search*
// @match              *://*.google.com.tj/search*
// @match              *://*.google.tl/search*
// @match              *://*.google.tm/search*
// @match              *://*.google.tn/search*
// @match              *://*.google.to/search*
// @match              *://*.google.com.tr/search*
// @match              *://*.google.tt/search*
// @match              *://*.google.com.tw/search*
// @match              *://*.google.co.tz/search*
// @match              *://*.google.com.ua/search*
// @match              *://*.google.co.ug/search*
// @match              *://*.google.co.uk/search*
// @match              *://*.google.com.uy/search*
// @match              *://*.google.co.uz/search*
// @match              *://*.google.com.vc/search*
// @match              *://*.google.co.ve/search*
// @match              *://*.google.vg/search*
// @match              *://*.google.co.vi/search*
// @match              *://*.google.com.vn/search*
// @match              *://*.google.vu/search*
// @match              *://*.google.ws/search*
// @match              *://*.google.rs/search*
// @match              *://*.google.co.za/search*
// @match              *://*.google.co.zm/search*
// @match              *://*.google.co.zw/search*
// @match              *://*.google.cat/search*
// @exclude            *://www.google.com/sorry*
// @exclude            *://www.baidu.com/link*
// @exclude            *://www.sogou.com/link*
// @exclude            *://www.so.com/link*
// @exclude            *://so.toutiao.com/search/jump*
// @connect            baidu.com
// @connect            sogou.com
// @connect            so.com
// @connect            greasyfork.org
// @connect            openuserjs.org
// @connect            githubusercontent.com
// @connect            favicon.yandex.net
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
// @note               {"CN":"修正站点图标在非整比缩放时的样式错误。","EN":"Fixed icons scaling non-integral style error."}
// @note               {"CN":"修正 Google 中文'下一页'的样式错误。","EN":"Fixed Google Chinese 'next page' style error."}
// @note               {"CN":"修正 search.Yahoo 跳转按钮的样式问题。","EN":"Fixed style issue of search.Yahoo jump button."}
// @note               {"CN":"修正 VM uad.getHighEntropyValues 造成的加载延迟。","EN":"Fixed load-delay caused by Violentmonkey uad.getHighEntropyValues."}
// @note               {"CN":"修正一些已知问题，优化代码，优化样式。","EN":"Fixed some known issues, optimized code & style."}
// @compatible         edge 兼容Tampermonkey, Violentmonkey
// @compatible         Chrome 兼容Tampermonkey, Violentmonkey
// @compatible         Firefox 兼容Greasemonkey, Tampermonkey, Violentmonkey
// @compatible         Opera 兼容Tampermonkey, Violentmonkey
// @compatible         Safari 兼容Tampermonkey, Userscripts
// @license            GPL-3.0-only
// @create             2015-10-07
// @copyright          2015-2024, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (ctx, SearchEngineAssistant, arrayProxy, customFns) {
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
    info: GM?.info ?? GM_info,
    debugging: IS_OPEN_DEBUG,
    atob: atob.bind(ctx),
    btoa: btoa.bind(ctx),
    alert: alert.bind(ctx),
    prompt: prompt.bind(ctx),
    confirm: confirm.bind(ctx),
    console: Object.assign(object, ctx.console),
  };
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
  Object.entries(arrayMethods).forEach(method => void defineMethod(...method));
  SearchEngineAssistant(ctx, utils, customFns);
})(
  typeof window !== "undefined" ? window : this,
  function (global, secureVars, customFuntions) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { atob, btoa, alert, prompt, confirm, console, debugging, info: GMinfo } = secureVars;
    const { oT: getObjectType, aF: asArray, hP: hasOwnProperty, gS: localStorages } = customFuntions;
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

    const { pT: CUR_PROTOCOL, hN: CUR_HOST_NAME, pN: CUR_PATH_NAME, iT: CUR_WINDOW_TOP } = getLocationInfo();
    const def = {
      count: { clickTimer: 0, duplicate: 0 },
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
        disappear: "ͽo7kAdceWqVͼ",
        translucent: "ͼJ3fsE9CeARͽ",
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2024.11.02.0",
        scriptName: getMetaValue(`name:${getLocalLanguages()}`) ?? decrypt("U2VhcmNoJTIwRW5naW5lJTIwQXNzaXN0YW50"),
      },
      url: {
        yandexIcon: decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI="),
        backupIcon: decrypt("aHR0cHMlM0ElMkYlMkZzMjEuYXgxeC5jb20lMkYyMDI0JTJGMDYlMkYzMCUyRnBrY1VWbWoucG5n"),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepageURL") ?? GMinfo.script.homepage ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
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
          const currentTime = performance.now();
          this._setTimerMap(timerSymbol, type, step);
          if (interval < 16.67 || currentTime - lastTime >= interval) {
            if (typeof fn === "function") fn(...args);
            if (type === "interval") lastTime = currentTime;
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

    /* GLOBAL_GENERAL_FUNCTIONS */

    function gmSelector(rec) {
      const gmFunctions = {
        setValue: typeof GM_setValue !== "undefined" ? GM_setValue : GM?.setValue ?? localStorages?.setItem.bind(localStorages),
        getValue: typeof GM_getValue !== "undefined" ? GM_getValue : GM?.getValue ?? localStorages?.getItem.bind(localStorages),
        deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : GM?.deleteValue ?? localStorages?.removeItem.bind(localStorages),
        listValues: typeof GM_listValues !== "undefined" ? GM_listValues : GM?.listValues ?? (() => []),
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : GM?.openInTab ?? open.bind(global),
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : GM?.registerMenuCommand,
        unregisterMenuCommand: typeof GM_unregisterMenuCommand !== "undefined" ? GM_unregisterMenuCommand : GM?.unregisterMenuCommand,
        xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : GM?.xmlHttpRequest,
        unsafeWindow: typeof unsafeWindow !== "undefined" ? unsafeWindow : global,
        contentMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
      };
      return gmFunctions[rec] ?? __console("warn", `Grant 'GM.${rec}' is not available.`) ?? (() => {});
    }

    function __console(action, message, ...args) {
      const consoleMethods = {
        log: ["log", "%c\ud83d\udd33 %c", "display:inline-block", "font-family:ui-monospace,monospace"],
        error: ["error", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        warn: ["warn", "%c\ud83d\udea9 ", "display:inline-block;font-family:ui-monospace,monospace"],
        count: ["count", "\ud83d\udd33 "],
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

    function toString(value) {
      if (typeof value === "symbol") return value.description;
      return String(value);
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

    function random(range, type = "round") {
      return Math[type]((global.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)) * range);
    }

    function gCS(node, opt = null) {
      if (node?.nodeType !== Node.ELEMENT_NODE) return new Proxy(Object.create(null), { get: () => NaN });
      return global.getComputedStyle(node, opt);
    }

    function capitalize(string) {
      string = String(string ?? "").toLowerCase();
      return string.replace(/\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
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

    function uniq(array, filterType = Boolean) {
      if (!Array.isArray(array)) return [];
      return [...new Set(array.filter(filterType))];
    }

    function generateRandomString(length, type) {
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

    function refresh() {
      return sleep(5e2, { useCachedSetTimeout: true }).then(() => global.location.reload(true));
    }

    function escapeHTML(string) {
      if (typeof string !== "string") return "";
      const element = cE("gb-escape-html", { textContent: string });
      return element.innerHTML;
    }

    function createTrustedTypePolicy() {
      const defaultPolicy = { createHTML: string => string };
      if (!global.trustedTypes?.createPolicy) return defaultPolicy;
      const currentHostName = global.location.hostname;
      const whitelist = [{ host: "bing.com", policy: "rwflyoutDefault" }];
      const policyName = whitelist.Find(entry => currentHostName.endsWith(entry.host))?.policy ?? "default";
      return global.trustedTypes.createPolicy(policyName, defaultPolicy);
    }

    function checkRedundantScript(global) {
      const scriptRedundancyWarning = () => {
        const scriptRedundanceText = `\ud83d\udea9 [Redundant Scripts]:\r\nFound redundant-installed scripts: ${def.var.scriptName}. please reload to troubleshoot the issue.`;
        const troubleshoot = `\ufff8\ud83d\uded1 ${IS_CHN ? "发现冗余安装的脚本，点击排查！" : "Troubleshoot Redundant"}`;
        CUR_WINDOW_TOP && GMregisterMenuCommand(troubleshoot, () => void (GMopenInTab(`${def.url.feedback}/117`, false) && refresh())) && __console("error", scriptRedundanceText);
        return true;
      };
      if (global["gb-init-redundantcheck"] === true) return scriptRedundancyWarning();
      global["gb-init-redundantcheck"] = true;
      if (GMcontentMode && document.documentElement.getAttribute("gb-init-rc") === "true") return scriptRedundancyWarning();
      Object.freeze(def.const) && document.documentElement.setAttribute("gb-init-rc", true);
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

    function getLocationInfo() {
      const { host: h, hostname: hN, pathname: pN, protocol: pT } = global.location;
      const iT = global.self === global.top;
      return { h, hN, pN, pT, iT };
    }

    function getMetaValue(str) {
      const queryReg = new RegExp(`//\\s+@${str}\\s+(.+)`);
      const metaValue = (GMinfo.scriptMetaStr || GMinfo.scriptSource)?.match(queryReg);
      return metaValue?.[1];
    }

    function getLocalLanguages(lang = navigator.language) {
      const languages = { "zh-CN": true, "zh-TW": true, en: true, ja: true, ru: true };
      return languages[lang] ? lang : lang.startsWith("zh") ? "zh-CN" : "en";
    }

    function setDebuggerMode() {
      const key = decrypt("\u0052\u006a\u006c\u0035\u004e\u0047\u0035\u006e");
      const value = new URLSearchParams(global.location.search).get("whoami");
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

    function deBounce({ fn, timer, delay, immed = false, once = false } = {}) {
      if (typeof fn !== "function" || !timer) return () => {};
      return function (...args) {
        const [name, context] = [Symbol.for(toString(timer)), this];
        if (immed === true && typeof def.count[name] === "undefined") {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
        } else if (def.count[name]) {
          if (def.count[name] === true) return true;
          raf.clearTimeout(def.count[name]);
        }
        def.count[name] = raf.setTimeout(() => {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
          delete def.count[name];
        }, Number(delay) || 0);
      };
    }

    function safeRemoveNode(expression, scope) {
      if (!expression) return false;
      const pendingNodes = Array.isArray(expression) ? expression : typeof expression === "string" ? qA(expression, scope) : expression?.nodeType ? [expression] : [];
      return pendingNodes.every(el => el.remove() || el.parentNode === null);
    }

    function createNoticeHTML(html) {
      return `<div class="${def.notice.rName}"><dl>${html}</dl></div>`;
    }

    void (async function (tTP) {
      const [CONFIGURE, VERSION, AUTOCHECK, RESULTFILTER, REMOTEICONS] = ["_configures_", "_version_", "_autoupdate_", "_resultFilter_", "_remoteicons_"];
      const { engine, creditEngine, brand, voucher } = await getNavigatorInfo();
      const [IS_REAL_BLINK, IS_REAL_GECKO, IS_REAL_WEBKIT] = ["Blink", "Gecko", "WebKit"].map(cE => cE === creditEngine);
      const IS_CHEAT_UA = voucher === null && (engine !== creditEngine || checkBlinkCheatingUA(navigator.userAgentData));
      const IS_GREASEMONKEY = ["Greasemonkey", "Userscripts"].includes(GMscriptHandler);

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
            if (data && expired > current) return data;
            else cache.remove(key);
          } catch (e) {
            cache.remove(key);
          }
        },
        remove: key => GMdeleteValue(key),
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
            .then(() => safeRemoveNode(item))
            .then(() => qA(`.${position} .${def.notice.item}`).length === 0 && safeRemoveNode(`.${position}`));
        }
        show() {
          this._createContainer();
          return this._appendNoticeX(this._createHeader(), this._createBody(), this._createProgressBar());
        }
        _createContainer() {
          const position = `${def.notice.noticeX}-${this.options.position}`;
          if (qS(`gb-notice.${position}`)) return;
          const container = cE("gb-notice", { class: [def.notice.noticeX, position, def.notice.appear] });
          document.documentElement.appendChild(container);
        }
        _createHeader() {
          if (!this.options.title && !this.options.closeWith.includes("button")) return null;
          const header = cE("div", { class: `${def.notice.noticeX}-heading` });
          if (this.options.title) header.innerHTML += tTP.createHTML(`<span class="${def.notice.noticeX}-heading-title" title="${this.options.title}">${this.options.title}</span>`);
          if (this.options.closeWith.includes("button")) {
            const close = cE("div", { class: def.notice.close, innerHTML: tTP.createHTML("&times;") });
            header.appendChild(close);
          }
          return header;
        }
        _createBody() {
          const body = cE("div", { class: `${def.notice.noticeX}-body` });
          const content = cE("div", { class: `${def.notice.noticeX}-content`, innerHTML: tTP.createHTML(this.options.text) });
          body.appendChild(content);
          if (this.options.scroll?.maxHeight) {
            body.style.overflowY = "auto";
            body.style.maxHeight = `min(calc(92vh - 50px), ${this.options.scroll.maxHeight}px)`;
            if (this.options.scroll?.showOnHover) body.style.visibility = "hidden";
          }
          return body;
        }
        _createProgressBar() {
          const progressBar = cE("div", { class: `${def.notice.noticeX}-progressbar` });
          const bar = cE("div", { class: `${def.notice.noticeX}-bar` });
          progressBar.appendChild(bar);
          if (this.options.progressBar && typeof this.options.timeout === "number") {
            progressBar.style.animation = `${def.notice.noticeX}-progress ${this.options.timeout / 1e3}s linear forwards`;
            sleep(this.options.timeout, { useCachedSetTimeout: true }).then(() => {
              const item = progressBar.closest(`div.${def.notice.item}`);
              if (item) this._closeWithAnimation(item);
            });
          }
          return progressBar;
        }
        _appendNoticeX(header, body, progressBar) {
          const targetClass = `.${def.notice.noticeX}-${this.options.position}`;
          const noticeItem = cE("div", { class: [def.notice.item, this.options.type] });
          if (this.options.width && Number.isInteger(this.options.width)) noticeItem.style.width = `${this.options.width}px`;
          [header, body, progressBar].forEach(el => el && noticeItem.appendChild(el));
          if (["top", "bottom"].includes(this.options.position)) qS(targetClass).textContent = "";
          if (this.options?.animation?.open) noticeItem.className += ` ${this.options.animation.open}`;
          this._executeCallbacks("beforeShow");
          this._addListeners(noticeItem);
          const target = qS(targetClass);
          this._executeCallbacks("onShow");
          this.options.newestOnTop && target ? target.insertAdjacentElement("afterbegin", noticeItem) : target.appendChild(noticeItem);
          this._executeCallbacks("afterShow");
          return noticeItem;
        }
        _closeWithAnimation(item) {
          if (this.options.animation?.close) {
            item.className += ` ${this.options.animation.close}`;
            sleep(5e2).then(() => this._closeItem(item));
          } else this._closeItem(item);
        }
        _addListeners(item) {
          const closeBtn = qS(`.${def.notice.close}`, item);
          const handleClick = () => this._closeItem(item);
          if (this.options.closeWith.includes("button")) closeBtn?.addEventListener("click", handleClick);
          if (this.options.closeWith.includes("click")) {
            item.style.cursor = "pointer";
            item.addEventListener("click", e => {
              if (e.target.className === def.notice.close) return;
              this._executeCallbacks("onClick");
              handleClick();
            });
          } else item.addEventListener("click", e => e.target.className !== def.notice.close && this._executeCallbacks("onClick"));
          item.addEventListener("mouseover", () => this._executeCallbacks("onHover"));
        }
        _closeItem(item) {
          const closetNode = item.closest(`.${def.notice.noticeX}`);
          const position = closetNode?.className.match(/\b(\w+-\w+)\b/)?.[1] || `${def.notice.noticeX}-bottomRight`;
          this._executeCallbacks("beforeClose");
          sleep(3e2)
            .then(() => this._executeCallbacks("onClose"))
            .then(() => safeRemoveNode(item))
            .then(() => qA(`.${position} .${def.notice.item}`).length === 0 && safeRemoveNode(`.${position}`))
            .then(() => this._executeCallbacks("afterClose"));
        }
        _executeCallbacks(eventName) {
          this.options.callbacks[eventName]?.forEach(cb => cb?.call(this));
        }
        _registerCallbacks() {
          Object.keys(this.options.callbacks).forEach(eventName => {
            const cb = this.options.callbacks[eventName];
            if (typeof cb === "function") this._on(eventName, cb);
          });
        }
        _on(eventName, cb = () => {}) {
          if (typeof cb === "function" && this.options.callbacks[eventName]) this.options.callbacks[eventName].push(cb);
          return this;
        }
      }

      function checkBlinkCheatingUA(uad) {
        if (!IS_REAL_BLINK) return false;
        return (global.isSecureContext && !uad) || (uad && toString(uad) !== "[object NavigatorUAData]");
      }

      function insertAfter(newEl, target) {
        if (!newEl || !target) return;
        const parent = target.parentNode || document.head;
        parent.insertBefore(newEl, target.nextSibling);
      }

      function addStyle({ target, styleId, styleContent, media, isOverwrite }) {
        if (!target || !styleId || !styleContent || !media) return;
        let existingStyles = qA(`#${styleId}`, target);
        if (isOverwrite) existingStyles.forEach(style => (style.dataset.frRemoved = true) && safeRemoveNode(style));
        else if (existingStyles.length > 0) return true;
        try {
          const styleElement = cE("style", { id: styleId, media, type: "text/css", textContent: styleContent ?? "", [def.const.cssAttrName]: isOverwrite ?? false });
          target.appendChild(styleElement);
          return true;
        } catch (e) {
          ERROR("addStyle:", e.message);
        }
      }

      function getUrlParam(parameter) {
        try {
          switch (getObjectType(parameter)) {
            case "[object Object]": {
              const { split, index } = parameter;
              const keyArray = global.location.pathname.split(split);
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
              return new URLSearchParams(global.location.search).get(parameter) ?? "";
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
        const [currentVersion, compareVersion] = [current.split(".").map(Number), compare.split(".").map(Number)];
        if (compareVersion.length !== currentVersion.length) return true;
        for (let i = 0; i < currentVersion.length; i++) {
          if (compareVersion[i] !== currentVersion[i]) return compareVersion[i] > currentVersion[i];
        }
        return false;
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
        const [cachedRequestLinks, usedFilterWords, selectedSite] = [antiLinkRedirect ? new Map() : null, antiResultsFilter ? new Set() : null, []];

        /* ANTIREDIRECT_FUNCTIONS */

        function validateOptions(options) {
          return {
            useNewTab: options.useNewTab || false,
            forceSelf: options.forceSelf || false,
            forceNewTab: options.forceNewTab || false,
            cleanAttributes: options.cleanAttributes || [],
            removeDataSet: options.removeDataSet || false,
            useAdvancedAntiRedirect: options.useAdvancedAntiRedirect || false,
          };
        }

        function updateNodeAttributes(options, node) {
          if (options.useNewTab) node.setAttribute("target", "_blank");
          if (options.forceSelf) node.setAttribute("target", "_self");
          if (Array.isArray(options.cleanAttributes) && options.cleanAttributes.length > 0) options.cleanAttributes.forEach(item => node.removeAttribute(item));
          if (options.removeDataSet) Object.keys(node.dataset).forEach(ds => delete node.dataset[ds]);
          node.setAttribute("gd-depurate-status", true);
        }

        function stopEventPropagation(event) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }

        function setForceNewTab(options, node) {
          if (!options.forceNewTab) return;
          node.addEventListener("click", e => {
            stopEventPropagation(e);
            GMopenInTab(node.href, false);
          });
        }

        function setAdvancedAntiRedirect(options, node, tasks, siteName) {
          if (!options.useAdvancedAntiRedirect) return;
          node.setAttribute("gd-antiredirect-status", "pending");
          const task = advancedAntiRedirection(siteName, node, () => Promise.resolve(NaN));
          if (typeof task === "function") tasks.push(task);
        }

        function parsingAntiRedirect(selectors, siteName, options) {
          if (typeof selectors !== "string" || selectors.trim() === "") return;
          options = validateOptions(options);
          const selectorArray = selectors.split(/,(?![^()]*\))/g);
          const queryString = selectorArray.map(item => `${item}:not([href^='javascript:' i]):not([href^='#']):not([gd-depurate-status],[gd-antiredirect-status])`).join(",");
          const aNodes = qA(queryString);
          if (aNodes.length === 0) return;
          COUNT(`[${siteName}-Anti-Redirect]`);
          const taskList = aNodes.reduce((tasks, node) => {
            updateNodeAttributes(options, node);
            setForceNewTab(options, node);
            setAdvancedAntiRedirect(options, node, tasks, siteName);
            return tasks;
          }, []);
          parallelTasks(taskList, 10);
        }

        function fetchData(url, resolve, reject, readystate, error, timeout) {
          const headers = { Accept: "*/*", Referer: global.location.origin.replace(/^http:/i, "https:") };
          const [onreadystatechange, onerror, ontimeout] = [readystate(resolve, reject), error(reject, resolve), timeout(reject)];
          GMxmlhttpRequest({ url, headers, method: "GET", timeout: 25e3, onreadystatechange, onerror, ontimeout });
        }

        async function getRealUrl(url, node, name, { onreadystatechangeFunc, onerrorFunc, ontimeoutFunc }) {
          try {
            const res = await new Promise((resolve, reject) => {
              if (!cachedRequestLinks.has(url)) {
                cachedRequestLinks.set(url, null);
                fetchData(url, resolve, reject, onreadystatechangeFunc, onerrorFunc, ontimeoutFunc);
              } else reject(new RangeError("DuplicateLinksError"));
            });
            return handleSuccess(res, url, node);
          } catch (e) {
            return handleError(e, url, node, name);
          }
        }

        function handleSuccess(res, url, node) {
          cachedRequestLinks.set(url, res);
          setRealLink(node, res);
          toggleLoadClass(node)?.remove();
          DEBUG("Parsed link:", { node, parsed: res, origin: url });
        }

        function handleError(e, url, node, name) {
          if (["URLBrokenError", "TimeoutError", "URLNotExistError", "ResponseError"].includes(e?.message)) cachedRequestLinks.set(url, url);
          if (e?.message === "DuplicateLinksError") handleDuplicateLinksError(url, node);
          else {
            setErrorLink(node);
            toggleLoadClass(node)?.remove();
            ERROR("antiRedirect_%s: %s %O", name, e?.message, { Node: node, Text: node.textContent, URL: node.href });
          }
        }

        function handleDuplicateLinksError(url, node) {
          def.count.duplicate++;
          const attemptToFindCacheLink = raf.setInterval(() => {
            const cachedRealLinks = cachedRequestLinks.get(url);
            if (!cachedRealLinks) return;
            if (cachedRealLinks === url) setErrorLink(node);
            else {
              DEBUG("Duplicate link:", { node, url: cachedRealLinks });
              setRealLink(node, cachedRealLinks);
            }
            def.count.duplicate--;
            toggleLoadClass(node)?.remove();
            raf.clearInterval(attemptToFindCacheLink);
          }, 5e2);
        }

        function toggleLoadClass(node) {
          if (node && IS_DEBUG) return { remove: () => node.classList.remove(def.const.loading), add: () => node.classList.add(def.const.loading) };
        }

        function setRealLink(node, url) {
          node.href = url;
          IS_REAL_WEBKIT && node.setAttribute("title", url);
          node.setAttribute("gd-antiredirect-status", "success");
        }

        function setErrorLink(node) {
          node.classList.add(def.notice.linkerror);
          node.setAttribute("gd-antiredirect-status", "failed");
          node.setAttribute("title", `${IS_CHN ? "该链接目前无法正常访问。" : "This link is currently not accessible."}`);
        }

        function handlePageCheck(count) {
          DEBUG(`(${count ?? cachedRequestLinks.size}) Task Done! (${def.count.duplicate}) Dup.Task!`);
          if (antiLinkRedirect && cachedRequestLinks.size > 0 && def.count.duplicate === 0) {
            !cachedRequestLinks.clear() && DEBUG("Task Clear!");
          }
          if (antiResultsFilter && usedFilterWords.size > 0) {
            !usedFilterWords.clear() && DEBUG("Filter Clear!");
          }
        }

        function parallelTasks(tasks, maxCount = 3) {
          const taskLength = tasks.length;
          if (taskLength === 0) return;
          let [currentIndex, finishedCount] = [0, 0];
          const taskCount = Math.min(maxCount, taskLength);
          function nextTask() {
            if (currentIndex >= taskLength) return;
            const task = tasks[currentIndex];
            currentIndex++;
            task().then(result => {
              finishedCount++;
              if (finishedCount === taskLength) deBounce({ fn: handlePageCheck, delay: 1e3, timer: "doTask" })(result);
              else nextTask();
            });
          }
          for (let i = 0; i < taskCount; i++) nextTask();
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
          } else if (response.status !== 0) resUrl === url ? reject(new Error("ResponseError")) : resolve(resUrl);
        }

        function getBingDecodeURI(url) {
          const uParam = new URL(url).searchParams.get("u");
          return uParam ? decrypt(uParam.slice(2).replace(/[-_]/g, v => (v === "-" ? "+" : "/"))) : url;
        }

        function getToutiaoDecodeURI(url) {
          return decodeURIComponent(new URL(url).searchParams.get("url") ?? "");
        }

        function getYahooDecodeURI(url) {
          const res = url.match(/\/RU=([^/]+)\//)?.[1];
          return decodeURIComponent(res ?? "");
        }

        async function getNoneXHRDecodeURI(url, node, siteName, getDecodeURI) {
          try {
            const d = await new Promise((resolve, reject) => {
              if (!cachedRequestLinks.has(url)) {
                cachedRequestLinks.set(url, null);
                const decodeURL = getDecodeURI || url;
                resolve(decodeURL);
              } else reject(new RangeError("DuplicateLinksError"));
            });
            return handleSuccess(d, url, node);
          } catch (e) {
            return handleError(e, url, node, siteName);
          }
        }

        function getXHRDecodeURI(url, node, siteName) {
          return getRealUrl(url, node, siteName, {
            onreadystatechangeFunc: (resolve, reject) => response => {
              if (response.readyState !== 4) return;
              if (response.status === 200) {
                let resUrl = response.finalUrl || response.responseURL || url;
                if (resUrl === url) {
                  const resText = response.responseText || response.response || "";
                  const res = resText.match(/URL\s*=\s*'([^']+)'/);
                  if (res) resUrl = res[1];
                  else reject(new Error("URLNotExistError"));
                }
                resolve(resUrl);
              } else rejectResponse(response, resolve, reject, url);
            },
            onerrorFunc: reject => () => reject(new Error("URLBrokenError")),
            ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
          });
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
                    let resUrl = response.finalUrl || response.responseURL || url;
                    if (resUrl === url) {
                      const responseHeader = response.responseHeaders?.match(/Location:\s*([\S]+)/);
                      if (responseHeader) resUrl = responseHeader[1];
                      else reject(new Error("URLNotExistError"));
                    }
                    resolve(resUrl);
                  } else rejectResponse(response, resolve, reject, url);
                },
                onerrorFunc: (reject, resolve) => e => {
                  if (e.error?.includes("Request was redirected to a not whitelisted URL") || e.error?.includes("This domain is not a part of the @connect list")) {
                    const realUrl = e.error?.toString().match(/Refused to connect to "([^"]+)"/)?.[1];
                    if (!realUrl || realUrl.includes("/search/error") || realUrl.includes("/static/captcha")) reject(new Error("URLNotExistError"));
                    resolve(realUrl);
                  } else reject(new Error("URLBrokenError"));
                },
                ontimeoutFunc: reject => () => reject(new Error("TimeoutError")),
              }),
            So360: () => getXHRDecodeURI(url, node, siteName),
            Sogou: () => getXHRDecodeURI(url, node, siteName),
            Bing: () => getNoneXHRDecodeURI(url, node, siteName, getBingDecodeURI(url)),
            Toutiao: () => getNoneXHRDecodeURI(url, node, siteName, getToutiaoDecodeURI(url)),
            Yahoo: () => getNoneXHRDecodeURI(url, node, siteName, getYahooDecodeURI(url)),
          };
          toggleLoadClass(node)?.add();
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
                  clean === true && safeRemoveNode(node);
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
                  clean === true && safeRemoveNode(node);
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
                clean === true && safeRemoveNode(node);
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
                clean === true && safeRemoveNode(node);
              });
            }
          },
          Ecosia: () => qS(`button.banner__close[data-test-id="banner-close"][aria-label="Close"]`)?.click(),
          Qwant: () => qS(`button[class][aria-label="close"]:has(svg)`)?.click(),
          Brave: () => qS(`.promo-tooltip>button.btn--icon[aria-label="Close"]`)?.click(),
          Duckduckgo: () => qS(`button[data-testid="serp-popover-promo-close"]`)?.click(),
          Yahoo: () => qS("button.refresh-soft-intro-dismiss-button")?.click(),
          Swisscows: (siteName, clean) => {
            if (qA(".web-results>article>.site>a.ad").length > 0) {
              COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
              qA(".web-results>article").forEach(node => {
                if (!qS(".site>a.ad", node)) return;
                node.classList.add(def.var.disappear);
                clean === true && safeRemoveNode(node);
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
            isRemoveNodes === true && safeRemoveNode(selectors);
          }
          AdvancedAntiAdvertising(siteName, isRemoveNodes);
        }

        function AdvancedAntiAdvertising(siteName, clean) {
          const AdblockHandler = siteAdblockHandlers[siteName];
          if (typeof AdblockHandler !== "function") return;
          try {
            AdblockHandler.length > 0 ? AdblockHandler(siteName, clean) : AdblockHandler();
          } catch (e) {
            ERROR("AdvancedAntiAdvertising:", e.message);
          }
        }

        /* PRELOAD_FUNCTIONS */

        async function fetchUpdateResponse(url, timeout = 1e4) {
          try {
            return await new Promise((resolve, reject) => {
              const headers = { Accept: "*/*", Referer: url };
              const onreadystatechange = response => {
                if (response.readyState !== 4) return;
                if (response.status === 200) {
                  const res = response.responseText || response.response;
                  resolve({ res, url });
                } else reject(new Error("NoAccessError"));
              };
              const onerror = () => reject(new Error("NetworkError"));
              const ontimeout = () => reject(new Error("TimeoutError"));
              GMxmlhttpRequest({ url, headers, method: "GET", nocache: true, timeout, onreadystatechange, onerror, ontimeout });
            });
          } catch (e) {
            throw new Error(`fetchUpdateResponse: ${e.message}`);
          }
        }

        async function fetchAndCacheRemoteIcons(remoteURL) {
          if (!CUR_WINDOW_TOP) return;
          let iconDataURL = null;
          try {
            const iconBase64Data = await cache.get(REMOTEICONS);
            if (!iconBase64Data || setDebuggerMode()) {
              DEBUG("%cRequest remote icon data.", "color:#dc143c");
              iconDataURL = await requestRemoteIcon(remoteURL);
              iconDataURL && cache.set(REMOTEICONS, iconDataURL, 2592e6);
            } else {
              DEBUG("%cGet localCache icon data.", "color:#006400");
              iconDataURL = iconBase64Data;
            }
          } catch (e) {
            ERROR(`Error: Can't request the icon data.`);
          }
          return iconDataURL;
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
              buttonCssText: `#pnnext>span:nth-child(2){clear:left}#${def.const.rndButtonID}{position:relative;z-index:100;display:flex;margin:0 4px 0 -5px;justify-content:center;align-items:center}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{padding:0 2px 0 8px}.${def.const.scrollspan}{min-height:26px}.${def.const.scrollspan2}{min-height:26px;margin-top:0!important}.${def.const.scrollbars}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}.${def.const.scrollbars2}{display:inline-block;margin:0;height:26px!important;font-weight:400!important;font-size:13px!important}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px!important;height:38px;min-width:90px;border:0;border-bottom-left-radius:24px;border-top-left-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px 0 12px!important;height:38px;min-width:90px;border:0;border-top-right-radius:24px;border-bottom-right-radius:24px;background:#1a73e8;box-shadow:none;color:#fff;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#1b66c9;}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background:#8ab4f8;box-shadow:0 1px 3px 1px rgba(0, 0, 0, 0.15),0 1px 2px rgba(0, 0, 0, 0.3);color:#202124}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#93baf9}}`,
              resultListProp: { qs: `div.cLjAic.K7khPe[data-hveid^="C"][data-hveid$="AA"],div.g[data-hveid^="C"][data-hveid$="AA"],div.g div[data-hveid^="C"][data-hveid$="AA"]`, delay: 10 },
              keywords: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "google_ar" })(
                  "#rcnt div[data-hveid^='C'][data-hveid$='AA'] :not(h3.ob5Hkd,.d0fCJc)>a:not(.ngTNl,.oRJe3d,.k8XOCe,[jsname='ZWuC2'],.fl,#pnprev,#pnnext)",
                  "Google",
                  { useNewTab: true, cleanAttributes: ["ping"], removeDataSet: true }
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
              buttonCssText: `.${def.const.searchbox}{border-radius:8px!important}a,#b_results>li[class] a:not(.wiki_seemore),#b_results .b_no a,#b_context .mediumCardTitle{color:#001ba0}#${def.const.rndButtonID}{position:relative;z-index:0;display:inline-flex;margin:0;padding:0 6px 0 0;width:auto;height:38px;min-width:180px;vertical-align:middle;justify-content:center;flex-wrap:nowrap}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.leftButton},#${def.const.rightButton}{margin:0;padding:0;width:auto}#${def.const.rndButtonID} input{box-sizing:border-box;height:38px;min-width:90px;border:1px solid #174ae4;background-color:#f7faff;color:#174ae4;font-weight:600;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input{margin:0;padding:0 12px 0 18px;border-bottom-left-radius:24px;border-top-left-radius:24px}#${def.const.rightButton} input{margin:0 0 0 2px;padding:0 18px 0 12px;border-top-right-radius:24px;border-bottom-right-radius:24px}.${def.const.scrollspan}{/*margin:-14px -3px 0 0!important;max-height:28px*/}.${def.const.scrollbars}{/*max-height:28px;font-size:14px!important*/}.${def.const.scrollspan2}{margin:0!important;padding:4px 4px 0 8px!important;max-height:30px;vertical-align:top!important}.${def.const.scrollbars2}{margin-right:0!important;padding:0 12px!important;max-height:30px;border-radius:4px!important;vertical-align:top!important}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fff;background-color:#f0f3f6;box-shadow:0 0 4px #174ae4;color:#174ae4;transition:border .1s linear,box-shadow .3s linear}.${def.notice.random}_input{width:300px!important}@media (prefers-color-scheme: dark){.b_dark #b_results>li[class] a{color:#7aabeb}#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #a2b7f4;background:transparent;color:#a2b7f4}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#a2b7f4;color:#333}}`,
              resultListProp: { qs: `#b_results>li.b_algo:not(.b_algoBorder,.b_topborder),#b_results>li.b_vidAns .mmlist>div[id],#b_results>li.b_mop .b_slidebar>div.slide`, delay: 10 },
              keywords: String(
                Number(getUrlParam("ensearch")) || Number(global.gbCookies.getItem("ENSEARCH")?.match(/[=](\d)/)?.[1])
                  ? "strong,.b_no h4,.b_strong,.b_ad .b_adlabel strong,.cbl"
                  : "#sp_requery strong,#sp_recourse strong,.sb_adTA_title_link_cn strong,.b_ad .ad_esltitle~div strong,h2 strong,#b_results .b_algo p strong,.b_caption p strong,.b_snippetBigText strong,.recommendationsTableTitle+.b_slideexp strong,.recommendationsTableTitle+table strong,.recommendationsTableTitle+ul strong,.pageRecoContainer .b_module_expansion_control strong,.pageRecoContainer .b_title>strong,.b_rs strong,.b_rrsr strong,.richrswrapper strong,#dict_ans strong,.b_listnav>.b_ans_stamp>strong,#b_content #ans_nws .na_cnt strong,.b_vidAns strong,.adltwrnmsg strong"
              ),
              antiRedirectFn: function () {
                GMunsafeWindow.AwayTimeScrollTopPoleRS = false;
                GMunsafeWindow.AwayTimeThreshold = 864e3;
                deBounce({
                  fn: () => {
                    parsingAntiRedirect("#b_content a[href*='.bing.com/ck/a?']:not([role='button'],.b_widePag)", "Bing", {
                      useNewTab: true,
                      cleanAttributes: ["h"],
                      useAdvancedAntiRedirect: true,
                    });
                    parsingAntiRedirect("#b_content a.b_widePag[href*='.bing.com/ck/a?']", "Bing", { forceSelf: true, cleanAttributes: ["h"], useAdvancedAntiRedirect: true });
                    parsingAntiRedirect("#b_results>li:not(.b_pag,#mfa_root) a:not([role='button']):not([href*='.bing.com/ck/a?'])", "Bing", { useNewTab: true, cleanAttributes: ["h"] });
                    parsingAntiRedirect("#b_results a.b_widePag:not([href*='.bing.com/ck/a?'])", "Bing", { forceSelf: true, cleanAttributes: ["h"] });
                  },
                  delay: 20,
                  timer: "bing_ar",
                })();
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
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:-188px;z-index:1999999995;display:block;height:44px}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-bottom-left-radius:var(--default-border-radius);border-top-left-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgba(0, 0, 0, 0.06);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid var(--theme-col-bg-button-secondary-hover);border-top-right-radius:var(--default-border-radius);border-bottom-right-radius:var(--default-border-radius);background:transparent;box-shadow:0 2px 3px rgba(0, 0, 0, 0.06);color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid transparent;background-color:#2950bf!important;color:#fff!important}`,
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
              imageType: ["pics", "d", "v"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "input#searchBtn,input[type='button'][uigs='search_article'],input[type='submit']:is(.search-btn,.sbtn1)",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;margin:-1px 0 0;padding:0;width:auto;height:39px;cursor:pointer;-webkit-appearance:none}#${def.const.rndButtonID} *{-webkit-text-stroke:0 transparent!important}#${def.const.leftButton}{display:inline;height:39px}#${def.const.rightButton}{display:inline;height:39px}#${def.const.leftButton} input{margin:0;padding:0 18px!important;height:39px;min-width:100px;border:2px solid #222;border-radius:12px;background:#f5f5f5;color:#000;vertical-align:top;font-weight:500;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 18px!important;height:39px;min-width:100px;border:2px solid #222;border-radius:12px;background:#f5f5f5;color:#000;vertical-align:top;font-weight:500;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:2px solid #205aef;background:#e9f2ff;color:#205aef}.${def.notice.random}_images{height:34px!important;border:1px solid #ababab!important;border-radius:3px!important;background:##fafafa!important}.${def.notice.random}_weixin{height:34px!important;border:1px solid #00a06a!important;border-radius:2px!important;background:#fff!important;color:#00a06a!important;font-size:15px!important}.${def.notice.random}_weixin:hover{background:#f7fffd!important}`,
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
                  selectors: `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~="ext_query"][id*="sq_ext_"],div.top-better-hintBox,#right>div.rvr-model:not([tpl])`,
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
              webURL: "https://www.qwant.com/?t=web&b=1&q=",
              imageURL: "https://www.qwant.com/?t=images&b=1&q=",
              imageType: ["images"],
              splitTypeName: "t",
              mainSelector: "form[data-testid='mainSearchBar']",
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:0;z-index:1999999995;display:block;height:48px}#${def.const.leftButton}{display:inline-block;height:48px}#${def.const.rightButton}{display:inline-block;margin:0;height:48px}#${def.const.leftButton} input{box-sizing:content-box;margin:1px 0;padding:0 6px 0 12px!important;height:48px;min-width:100px;box-shadow:var(--shadow-searchbar-elevation);transition:box-shadow var(--motion-duration-200) var(--motion-ease), color var(--motion-duration-300) var(--motion-ease), background-color var(--motion-duration-300) var(--motion-ease);border-bottom-left-radius:var(--border-radius-300);border-top-left-radius:var(--border-radius-300);background-color:var(--color-elevation-surface-elevation);color:var(--color-text-primary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{box-sizing:content-box;margin:1px 0;padding:0 12px 0 6px!important;height:48px;min-width:100px;box-shadow:var(--shadow-searchbar-elevation);transition:box-shadow var(--motion-duration-200) var(--motion-ease), color var(--motion-duration-300) var(--motion-ease), background-color var(--motion-duration-300) var(--motion-ease);border-top-right-radius:var(--border-radius-300);border-bottom-right-radius:var(--border-radius-300);background-color:var(--color-elevation-surface-elevation);color:var(--color-text-primary);vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:var(--color-elevation-surface-raised);box-shadow:var(--shadow-searchbar-raised);}`,
              resultListProp: { qs: `div[data-testid="containerWeb"] div[data-testid="sectionWeb"]>div>div`, delay: 10 },
              keywords: "mark",
              antiRedirectFn: null,
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 30, timer: "qwant_ad", immed: true })({
                  selectors: `div[data-testid="containerWeb"] section div[style="display: block;"]:has([data-testid="aserpok"]),.is-sidebar>div>div:has([data-testid="aserpok"])`,
                  siteName: "Qwant",
                  removeDataSet: true,
                });
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
              mainSelector: "header form.HeaderForm",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;top:0;left:-12px;z-index:1999999995;margin:0;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -1px;height:44px}#${def.const.leftButton} input{padding:1px 12px 0 18px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:10px;border-top-left-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{padding:1px 18px 0 12px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:10px;border-bottom-right-radius:10px;background:#fc0;box-shadow:none;color:#000;vertical-align:top;font-weight:400;font-size:16px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#ffd633}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{background-color:#fdde55}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:#fdc93d}}`,
              resultListProp: { qs: "#search-result>li[class*='_card'][data-cid]", delay: 10 },
              keywords: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yandex_ar" })("#search-result>li.serp-item a", "Yandex", { useNewTab: true, removeDataSet: true });
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
                  cleanAttributes: ["e_href", "data-res"],
                  useAdvancedAntiRedirect: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "so360_ad", immed: true })({
                  selectors: `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,[class='inline-recommend'][data-url],div#so_top,div#so-activity-entry,div.mh-relate-text,.section li[data-id^="related_query_init_"],#mohe-know_side_nlp`,
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
              buttonCssText: `#${def.const.rndButtonID}{position:absolute;top:0;right:-160px;z-index:1999999995;margin:-1px;padding:0;width:auto;height:44px;cursor:pointer;-webkit-appearance:none}#${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rightButton}{display:inline-block;margin:0 0 0 -2px;height:44px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 15px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:8px;border-top-left-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 15px 1px 10px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:8px;border-bottom-right-radius:8px;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background-color:rgba(240, 65, 66, 0.7);color:#fff}`,
              resultListProp: { qs: `div.s-result-list>div.result-content[data-i]`, delay: 10 },
              keywords: "em",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "toutiao_ar" })(".main a[href*='/search/jump?url=']", "Toutiao", { useNewTab: true, useAdvancedAntiRedirect: true });
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
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "kaifa_ad", immed: true })({ selectors: `#reward-entry`, siteName: "Kaifa", isRemoveNodes: true });
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
                ["adBlockNoticeDismissed", "personalCounterTooltipSearch"].forEach(item => localStorages?.setItem(item, 1));
                deBounce({
                  fn: option => !/:nt=1:/.test(global.gbCookies.getItem("ECFG")) && global.gbCookies.setItem(option) && refresh(),
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
              splitTypeName: () => CUR_HOST_NAME.split(".").slice(-4, -3)[0],
              mainSelector: "#hd div.sbx form#sf,header.hd form#sf #sh section#sbx",
              buttonCssText: `#${def.const.rndButtonID}{position:relative;position:absolute;z-index:1999999995;display:inline-block;margin-left:4px;width:max-content;height:44px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;margin-left:2px;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{box-sizing:content-box;margin:0;padding:0 3px 0 6px!important;height:44px;min-width:100px;border:1px solid transparent;border-bottom-left-radius:100px;border-top-left-radius:100px;background:#7e1fff;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{box-sizing:content-box;margin:0;padding:0 6px 0 3px!important;height:44px;min-width:100px;border:1px solid transparent;border-top-right-radius:100px;border-bottom-right-radius:100px;background:#7e1fff;color:#fff;vertical-align:top;font-weight:500;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid transparent;background:#6001d2;color:#fff}`,
              resultListProp: { qs: `#web>ol>li`, delay: 10 },
              keywords: "strong",
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yahoo_ar" })(
                  "#main ol a[href^='https://r.search.yahoo.com/_ylt='],#main #results #sres>li>a[href^='https://r.search.yahoo.com/_ylt=']",
                  "Yahoo",
                  { useNewTab: true, useAdvancedAntiRedirect: true }
                );
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
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:-9px 0 0;height:34px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:44px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-2px;height:44px}#${def.const.leftButton} input{margin:0;padding:0;height:44px;min-width:110px;border:1px solid #596ced;border-bottom-left-radius:12px;border-top-left-radius:12px;background-color:#596ced;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0;height:44px;min-width:110px;border:1px solid #596ced;border-top-right-radius:12px;border-bottom-right-radius:12px;background-color:#596ced;color:#fff;vertical-align:top;font-weight:400;font-size:16px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #7a89f0;background-color:#7a89f0;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #4d5cc3;background-color:#4d5cc3;}}`,
              resultListProp: {
                qs: `div[data-testid="app-mainline"]>div[data-eventappname][data-testid]>ul[data-testid="web-results"],div[data-testid="Github Issues-app"]>ul>li`,
                delay: 10,
              },
              keywords: `div[data-testid="app-mainline"] p strong,div[data-testid="app-mainline"] p b`,
              antiRedirectFn: function () {
                deBounce({
                  fn: parameters => parameters.forEach(item => localStorages?.setItem(item, true)),
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
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline-block;margin:0 4px;height:40px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:40px}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:0;height:40px}#${def.const.leftButton} input{margin:0;padding:1px 10px 1px 20px!important;height:40px;min-width:95px;border:0 solid transparent;border-bottom-left-radius:2rem;border-top-left-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:1px 20px 1px 10px!important;height:40px;min-width:95px;border:0 solid transparent;border-top-right-radius:2rem;border-bottom-right-radius:2rem;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:#6573ff;color:#fff}@media (prefers-color-scheme: dark){#${def.const.leftButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.rightButton} input{border:1px solid #252b3b;background:#252b3b;color:#fff}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #6573ff;background:#6573ff}}`,
              resultListProp: { qs: `#main>.w-gl>div.result`, delay: Infinity },
              keywords: `.result b`,
              antiRedirectFn: function () {
                deBounce({
                  fn: option => !/disable_open_in_new_windowEEE0|enable_post_methodEEE0/.test(global.gbCookies.getItem("preferences")) && global.gbCookies.setItem(option) && refresh(),
                  timer: "startpage_cookie",
                  immed: true,
                  once: true,
                })({
                  sKey: "preferences",
                  sValue: `date_timeEEEworldN1Ndisable_family_filterEEE0N1Ndisable_open_in_new_windowEEE0N1Nenable_post_methodEEE0N1Nenable_proxy_safety_suggestEEE1N1Nenable_stay_controlEEE0N1Ninstant_answersEEE1N1Nlang_homepageEEEs/device/enN1NlanguageEEEenglishN1Nlanguage_uiEEEenglishN1Nnum_of_resultsEEE20N1Nsearch_results_regionEEEallN1NsuggestionsEEE1N1Nwt_unitEEEcelsius`,
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
              buttonCssText: `#${def.const.rndButtonID}{position:relative;z-index:999;display:inline;margin:0 0 0 10px;padding:0;width:max-content;height:var(--search-form-height)}.${def.const.scrollspan},.${def.const.scrollbars}{height:var(--search-form-height-compact)!important}.${def.const.scrollbars}{border-radius:var(--border-radius-l)!important;box-shadow:none!important}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.rightButton},#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:100%}#${def.const.leftButton} input{margin:0;padding:0 20px!important;height:var(--search-form-height);min-width:95px;border:0;outline:1px solid var(--color-serp-divider-subtle-container);box-shadow:var(--elevation-02);border-bottom-left-radius:var(--border-radius-xl);border-top-left-radius:var(--border-radius-xl);background:var(--color-serp-bar-bg);color:var(--color-text-primary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;box-sizing:border-box;cursor:pointer}#${def.const.rightButton} input{margin:0;padding:0 20px!important;height:var(--search-form-height);min-width:95px;border:0;outline:1px solid var(--color-serp-divider-subtle-container);box-shadow:var(--elevation-02);border-top-right-radius:var(--border-radius-xl);border-bottom-right-radius:var(--border-radius-xl);background:var(--color-serp-bar-bg);color:var(--color-text-primary);vertical-align:top;font-weight:600;font-size:16px!important;line-height:16px;box-sizing:border-box;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{color:var(--color-primitive-white, #fff);background:linear-gradient(314deg,#fa7250 8.49%,#ff1893 43.72%,#a78aff 99.51%);}`,
              resultListProp: { qs: `#results>div.snippet[data-type="web"]`, delay: 10 },
              keywords: `.snippet-content strong`,
              antiRedirectFn: function () {
                localStorages?.setItem("app.aiPromoDismissCount", 10);
                deBounce({
                  fn: option => global.gbCookies.getItem("olnt") !== "1" && global.gbCookies.setItem(option) && refresh(),
                  timer: "brave_cookie",
                  immed: true,
                  once: true,
                })({ sKey: "olnt", sValue: "1", sEnd: Infinity, sDomain: "search.brave.com", sPath: "/", sSameSite: "Lax", sSecure: true });
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "brave_ar" })("#results>div#search-elsewhere a", "Brave", { useNewTab: true, forceNewTab: true, removeDataSet: true });
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
              mainSelector: "form>.searchbar>button.erase",
              buttonCssText: `#header .form-search{max-width:35em}#${def.const.rndButtonID}{position:absolute;top:0;z-index:112;display:block;margin:0;padding:0;height:48px}#${def.const.rndButtonID} *{text-shadow:none!important;-webkit-text-stroke:0 transparent!important}#${def.const.rndButtonID} #${def.const.leftButton}{display:inline-block;height:2.5em}#${def.const.rndButtonID} #${def.const.rightButton}{display:inline-block;margin-left:-1px;height:48px}#${def.const.leftButton} input{box-sizing:content-box;margin:0;padding:0 2px 0 4px!important;height:48px;min-width:95px;border-width:0;border-bottom-left-radius:24px;border-top-left-radius:24px;background:var(--button-background);color:var(--button-text-color);vertical-align:top;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.rightButton} input{box-sizing:content-box;margin:0;padding:0 4px 0 2px!important;height:48px;min-width:95px;border-width:0;border-top-right-radius:24px;border-bottom-right-radius:24px;background:var(--button-background);color:var(--button-text-color);vertical-align:top;font-weight:600;font-size:14px!important;line-height:100%;cursor:pointer}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:var(--button-focus-background);color:var(--button-text-color)}@media (prefers-color-scheme: dark){#${def.const.leftButton} input,#${def.const.rightButton} input{border:1px solid #eee;background:none;color:#eee;height:46px}#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{background:var(--button-focus-background);color:var(--button-text-color)}}`,
              resultListProp: { qs: `.web-results>article.item`, delay: 10 },
              keywords: `.web-results b`,
              antiRedirectFn: function () {
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "swisscows_ar" })(".web-results>article.item a,.web-results>div.widget a:not(.widget-button)", "Swisscows", {
                  useNewTab: true,
                  forceNewTab: true,
                });
              },
              antiAdsFn: function () {
                deBounce({ fn: parseAntiAdvertising, delay: 1e2, timer: "swisscows_ad", immed: true })({
                  selectors: `header :is(.badge-tg,.badge-vpn,.badge-email,.search-counter),.web-results>div[class*="-privacy"]`,
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
              splitTypeName: () => global.location.search.match(/category_([a-z]+)/)?.[1],
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
              'textarea#sb_form_q[name="q"]',
              'textarea[jsaction][name="q"]',
              "textarea#search-input-textarea",
            ],
            searchKeys: ["wd", "word", "query", "q", "text", "keyword", "p"],
          };

          const { currentSite, listCurrentSite } = findCurrentSite();
          const { currentSiteName, allSiteURIs } = updateSiteInformation();
          const { backgroundColor: bgcolor, foregroundColor: fgcolor } = customColor;
          const updateDetectionAddress = getGlobalParameter() && getUpdateAddress();
          const yandexIconsAPIUrl = `${def.url.yandexIcon}/${allSiteURIs}?size=32&stub=1`;
          const iconBase64Data = await fetchAndCacheRemoteIcons(yandexIconsAPIUrl);

          /* DEFINE_GLOBAL_STYLES */

          def.var.style = String(
            `.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before {box-sizing:content-box;line-height:normal}.${def.notice.animated}{animation-duration:1s;animation-fill-mode:both}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${def.notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${def.notice.random}_fadeOut{animation-name:fadeOut}.${def.notice.appear}{display:block!important}.${def.notice.noticeX},.${def.notice.noticeX} *{text-shadow:none!important;font-family:Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticeX}-top{top:0;width:100%}.${def.notice.noticeX}-top .${def.notice.item}{margin:0!important;border-radius:0!important}.${def.notice.noticeX}-topRight{top:10px;right:10px;z-index:2147483647!important}.${def.notice.noticeX}-topLeft{top:10px;left:10px}.${def.notice.noticeX}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX}-middleLeft,.${def.notice.noticeX}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${def.notice.noticeX}-middleLeft{left:10px}.${def.notice.noticeX}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${def.notice.noticeX}-bottom{bottom:0;width:100%}.${def.notice.noticeX}-bottom .${def.notice.item}{border-radius:0!important;margin:0!important}.${def.notice.noticeX}-bottomRight{bottom:10px;right:10px;z-index:2147483646!important}.${def.notice.noticeX}-bottomLeft{bottom:10px;left:10px}.${def.notice.noticeX}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX} .${def.notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}.${def.var.translucent} *{display:none!important}.${def.var.translucent} notice-label{display:block!important}.${def.var.disappear}{display:none!important}[gb-filter-notice]{display:block!important;margin:18px 0 28px 10px!important;padding:10px 2px!important;font:normal 400 14px/100% 'Times New Roman',system-ui,-apple-system,BlinkMacSystemFont,serif!important;-webkit-text-stroke:0 transparent!important;line-height:100%!important}gb-filters.code{display:block;margin:20px 0;word-break:break-word;font-size:12px!important}.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}{float:right;margin-right:7px;color:#fff;text-shadow:0 1px 0 #fff;font-weight:700;font-size:18px!important;line-height:1;opacity:1}` +
              `.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}:hover{color:#000;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.item} a{border-bottom:1px dashed #fff;color:#fff}.${def.notice.noticeX} .${def.notice.item} a,.${def.notice.noticeX} .${def.notice.item} a:hover{text-decoration:none}.${def.notice.noticeX} .${def.notice.success}{background-color:#64ce83!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-heading{padding:10px;background-color:#3da95c;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body{padding:10px!important;color:#fff;}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.info}{background-color:#3ea2ff!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-heading{padding:10px;background-color:#067cea;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body{padding:10px!important;color:#fff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.warning}{background-color:#ff7f48!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#f97038;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body{color:#fff;padding:10px}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.error}{background-color:#e74c3c!important}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e93724;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body{padding:10px;color:#fff}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body:hover{visibility:visible!important}` +
              `.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.configuration} input[disabled],.${def.notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${def.notice.noticeX} .${def.notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}{float:right;margin-right:7px;color:#000000;text-shadow:0 1px 0 #aaa;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}:hover{color:#555;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e7e7e7;color:#333;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body{padding:10px;color:#333333}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.noticeX}-heading-title{display:inline-block;vertical-align:middle;overflow:hidden;max-width:90%;text-overflow:ellipsis;white-space:nowrap}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#64ce83}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#3da95c}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#3ea2ff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#067cea;}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#ff7f48}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#f44e06}` +
              `.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#fd5f4e}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ba2c1d}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#efefef}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ccc}@keyframes ${def.notice.noticeX}-progress{0%{width:100%}to{width:0}}@keyframes ${def.notice.noticeX}-fadeOut{0%{opacity:1}to{opacity:0}}.${def.notice.noticeX}-fadeOut{animation-name:${def.notice.noticeX}-fadeOut}.${def.notice.noticeX}{position:fixed;z-index:2147483645}.${def.notice.noticeX} ::-webkit-scrollbar{width:8px}.${def.notice.noticeX} ::-webkit-scrollbar-button{width:8px;height:8px}.${def.notice.noticeX} ::-webkit-scrollbar-track{border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.rName}{padding:2px!important}.${def.notice.noticeX} .${def.notice.rName} dl{margin:0!important;padding:1px!important}.${def.notice.noticeX} .${def.notice.rName} dl dt{margin:2px 0 6px!important;font-weight:900!important;font-size:16px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${def.notice.noticeX} .${def.notice.rName} .${def.notice.center}{width:100%;text-align:center!important}.${def.notice.noticeX} .${def.notice.rName} dl dd em{padding:0 5px;color:#fff;font-style:italic;font-size:24px!important;font-family:Candara,sans-serif!important}.${def.notice.noticeX} .${def.notice.rName} dl dd span{margin-right:8px;font-weight:700;font-size:15px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd i{font-size:20px!important;font-family:Candara,sans-serif!important}.${def.notice.noticeX} .${def.notice.rName} dl dd .im{padding:0 3px;color:gold;font-weight:900;font-size:16px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} ul{display:inline-block;margin:0 0 0 8px;padding:4px 4px 8px;width:95%;color:rgba(255, 255, 255, 0.8);counter-reset:xxx 0;vertical-align:top;text-align:left}` +
              `.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li{position:relative;margin:0 0 0 2px;padding:0 0 2px 2px;list-style:none;font-style:italic!important;line-height:150%;-webkit-transition:.12s;transition:.12s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li::before{display:inline-block;margin-left:-1.5em;width:1.5em;content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-size:14px;font-family:Candara,sans-serif;-webkit-transition:.5s;transition:.5s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} #${def.notice.stopUpdate}{float:right;margin:0 5px!important;font-size:12px!important;cursor:help}.${def.const.loading}{position:relative;}.${def.const.loading}::after{content:" \u21ba";animation:fade 1.25s infinite;}@keyframes fade{0%{opacity:0.1}50%{opacity:0.5}to{opacity:0}}.${def.notice.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important;color:#999}#${def.notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;margin:2px 4px 0 0;width:14px;height:14px;border:2px solid #fff;border-radius:50%;background:#ffa077;vertical-align:top;cursor:help;-webkit-appearance:none}#${def.notice.stopUpdate}:hover input,#${def.notice.stopUpdate} input:hover{background:#ba2c1d;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}{display:none!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;padding:11px 9px;width:58px;height:10px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245, 146, 146, 0.4);word-wrap:normal!important;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;-webkit-border-radius:7px;border-radius:7px;background:#fff;box-shadow:0 0 1px rgba(0, 0, 0, 0.6);color:#fff;content:" "}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;-webkit-border-radius:100px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-size:14px}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146, 196, 245, 0.4);cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::after{top:2px;left:10px;content:"ON"}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}{display:flex;margin:0 0 10px;padding:6px 0;width:162px;height:25px;border:2px solid #eee;border-radius:6px;background:#fff;box-shadow:1px 1px 0 1px #aaa;font-size:14px!important;cursor:pointer;align-content:center;justify-content:center;align-items:center}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}:hover{box-shadow:1px 1px 3px 0 #888;color:#ff0000}.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon}{margin:0 6px 0 0;width:32px;height:32px}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList}{margin:5px;padding:2px;list-style:none}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList} li{margin:0;list-style:none;font-style:normal}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.fieldset}{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;border:2px dashed #dfdfdf;border-radius:10px;background:transparent!important;text-align:left}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.legend}{display:block;margin:0;padding:0 8px;width:auto;color:#8b0000!important;font-weight:900!important;font-size:14px!important;-webkit-user-select:all;user-select:all}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList}{margin:0;padding:0;background:transparent!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li{float:none;display:flex;margin:3px 0;padding:2px 8px 2px 12px;height:36px;border:none;background:transparent!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none;align-content:center;justify-content:space-between}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li>div{font:normal 700 14px/150% 'Microsoft YaHei UI',Helvetica Neue,sans-serif!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button{box-sizing:border-box;margin:0 0 0 8px;padding:4px 8px;height:36px;min-width:65px;border:1px solid #ccc;border-radius:8px;background:#fafafa;box-shadow:1px 1px 1px 0 #ccc;color:#5e5e5e;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info{font-weight:400!important;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info em{color:#dc143c!important;font-style:normal;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_textarea{padding: 6px 0;margin:0}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter{display:block;margin:0;height:100%}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar{width:8px;height:8px}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb{border-radius:4px;background:#cfcfcf}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.random}_filter_textarea textarea::placeholder{color:#555;font:normal 500 16px/150% ui-monospace,monospace,system-ui,-apple-system,BlinkMacSystemFont!important;opacity:0.85;white-space:break-spaces}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{box-sizing:border-box;margin:0!important;padding:5px!important;max-height:423px;width:100%;min-height:280px;outline:0!important;border:1px solid #bbb;border-radius:6px;white-space:pre;font:normal 400 14px/150% ui-monospace,monospace,sans-serif!important;resize:vertical;overscroll-behavior:contain;word-break:keep-all!important;cursor:auto}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content::placeholder{font:normal 400 14px/150% ui-monospace,monospace!important}.${def.notice.noticeX} .${def.notice.configuration} #${def.notice.random}_customColor{margin:0;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button:hover{background:#fff;cursor:pointer}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}__content{display:block;margin:0;height:268px}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:4px 0 3px;padding:8px;width:266px;max-height:237px;overscroll-behavior:contain}.${def.notice.card} h2{margin:0;padding:0;border:0;vertical-align:baseline;font:inherit;font-size:100%;line-height:135%;}#${def.notice.random}_help{position:relative;margin:0;padding:4px 15px!important;border:1px solid transparent;background:#f07f6a;box-shadow:0 0 6px 0 #f5846f;color:#fff;cursor:help}#${def.notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${def.notice.random}_clear{margin:0 0 0 10px;color:#666;font-weight:500;cursor:pointer}#${def.notice.random}_clear:hover{color:#ff0000}#${def.notice.random}_clear u{padding:0 2px;text-decoration:none}.${def.notice.linkerror},.${def.notice.linkerror}:hover,.${def.notice.linkerror} *,.${def.notice.linkerror} *:hover{color:#a9a9a9!important;text-decoration-line:line-through!important;text-decoration-color:#ff0000!important;text-decoration-style:wavy!important}@-moz-document url-prefix() {.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before,.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{scrollbar-color:#bbbb #eee1;scrollbar-width:thin}}.${def.notice.card}{margin:0;padding:0;--background:#fff;--background-chackbox:#0082ff;--background-image:#fff,rgba(0, 107, 175, 0.2);--text-color:#666;--text-headline:#000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.${def.notice.card}__input{position:absolute;display:none;margin:0;padding:0;outline:none;border:none;background:none;-webkit-appearance:none}.${def.notice.card}__input:checked ~ .${def.notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#fff;--chack-scale:1;--chack-opacity:1;}` +
              `.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox--svg{--stroke-color:#fff;--stroke-dashoffset:0;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover:after{--opacity-bg:0;}.${def.notice.random}_iconText{color:#333}.${def.notice.random}_iconText:hover{color:#dc143c}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body{cursor:not-allowed;opacity:0.5;}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body:active{--scale:1;}.${def.notice.card}__body{position:relative;display:grid;overflow:hidden;width:var(--card-witght);height:var(--card-height);border-radius:var(--card-radius);background:var(--background);box-shadow:var(--shadow,1px 1px 3px 1px #ccc);cursor:pointer;-webkit-transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:transform var(--transition),box-shadow var(--transition);transition:transform var(--transition),box-shadow var(--transition),-webkit-transform var(--transition);-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0);grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto}.${def.notice.card}__body:active{--scale:0.96;}.${def.notice.card}__body-cover-image{position:absolute;top:8px;left:10px;z-index:100;width:32px;height:32px}.${def.notice.card}__body-cover-image span.${def.notice.favicons}{display:block;width:32px;height:32px}.${def.notice.card}__body-cover-chackbox{position:absolute;top:10px;right:10px;z-index:1;width:28px;height:28px;border:2px solid var(--chack-border,#fff);border-radius:50%;background:var(--chack-bg,var(--background-chackbox));opacity:var(--chack-opacity,0);transition:transform var(--transition),opacity calc(var(--transition)*1.2) linear,-webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale,0));transform:scale(var(--chack-scale,0))}.${def.notice.card}__body-cover-chackbox--svg{display:inline-block;visibility:visible!important;margin:8px 0 0 7px;width:13px;height:11px;vertical-align:top;-webkit-transition:stroke-dashoffset .4s ease var(--transition);transition:stroke-dashoffset .4s ease var(--transition);fill:none;stroke:var(--stroke-color,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset,16px)}` +
              `.${def.notice.card}__body-header{padding:4px 10px 6px 50px;height:var(--header-height);background:var(--background)}.${def.notice.card}__body-header-title{margin-bottom:0!important;color:var(--text-headline);font-weight:700!important;font-size:15px!important}.${def.notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}.${def.notice.gberror}{display:block;margin:0 0 4px -6px;padding:6px;width:max-content;border:1px dashed #ffb78c;border-radius:4px;color:#ffb78c}`
          );
          def.var.iconbg = iconBase64Data ? `url('${iconBase64Data}')` : `url('${def.url.backupIcon}'),url('${yandexIconsAPIUrl}')`;
          def.var.button = `${currentSite.siteTypeID === newSiteType.GOOGLE ? "<span jsname='s1VaRe' class='ACRAdd M2vV3'></span>" : ""}
            <span id="${def.const.leftButton}" sn="${selectedSite[0].siteTypeID}">
              <input type="button" title="${selectedSite[0].siteNickName}" value="${selectedSite[0].siteButtonName}"/>
            </span>
            <span id="${def.const.rightButton}" sn="${selectedSite[1].siteTypeID}">
              <input type="button" title="${selectedSite[1].siteNickName}" value="${selectedSite[1].siteButtonName}"/>
            </span>`;
          def.var.hlstyle = listCurrentSite.keywords ? `${listCurrentSite.keywords}{background-color:${bgcolor}!important;color:${fgcolor}!important;font-weight:600}` : ``;
          def.var.iconstyle = `.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon},.${def.notice.card}__body-cover-image span.${def.notice.favicons}{background-color:transparent;background-image:${def.var.iconbg};background-repeat:no-repeat;}`;

          function getQueryString() {
            const { inputArray, searchKeys } = searchProperties;
            const inputValue = qA(inputArray.join()).Find(item => item.value)?.value;
            if (inputValue) {
              DEBUG("QueryString[INPUT]:", { value: inputValue });
              return encodeURIComponent(inputValue);
            }
            for (const key of searchKeys) {
              const queryString = getUrlParam(key);
              if (!queryString) continue;
              const decodedValue = queryString.replace(/\+/g, " ");
              DEBUG("QueryString[URL]:", { queryKey: key, value: decodedValue });
              return encodeURIComponent(decodedValue);
            }
            return "";
          }

          function checkIndexPage() {
            return [newSiteType.DUCKDUCKGO, newSiteType.QWANT].includes(currentSite.siteTypeID) ? !getUrlParam("q") : location.pathname === "/";
          }

          function getSecurityPolicy() {
            return (
              (currentSite.siteTypeID === newSiteType.GOOGLE && (/^(lcl|flm|fin)$/.test(def.var.searchType) || getUrlParam("csui") === "1")) ||
              (currentSite.siteTypeID === newSiteType.BING && (/^maps$/.test(def.var.searchType) || getUrlParam("showconv") === "1")) ||
              (currentSite.siteTypeID === newSiteType.BAIDU && /^(news|vsearch)$/.test(def.var.searchType)) ||
              (currentSite.siteTypeID === newSiteType.SOGOU && /^(fanyi|hanyu|as)/.test(CUR_HOST_NAME)) ||
              (currentSite.siteTypeID === newSiteType.DUCKDUCKGO && /^maps$/.test(getUrlParam("iaxm"))) ||
              (currentSite.siteTypeID === newSiteType.YANDEX && location.pathname.includes("/direct")) ||
              (currentSite.siteTypeID === newSiteType.YAHOO && CUR_HOST_NAME.search(/news|video/) !== -1) ||
              (currentSite.siteTypeID === newSiteType.YOU && /^youchat$/.test(def.var.searchType)) ||
              (currentSite.siteTypeID === newSiteType.SEARXNG && /^map$/.test(def.var.searchType))
            );
          }

          function findCurrentSite() {
            for (const regex in engineMap) {
              if (hasOwnProperty(engineMap, regex) && new RegExp(regex).test(CUR_HOST_NAME)) {
                const { siteType, site } = engineMap[regex];
                const currentSite = selectedEngine.includes(siteType) ? site : listSite.other;
                return { currentSite, listCurrentSite: site };
              }
            }
            return { currentSite: null, listCurrentSite: null };
          }

          function updateSiteInformation() {
            let [currentSiteName, allSiteURIs] = ["", ""];
            for (let site in listSite) {
              if (hasOwnProperty(listSite, site)) {
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
            return Object.assign(def.var, {
              indexPage: checkIndexPage(),
              queryString: getQueryString(),
              searchType: getUrlParam(currentSite.splitTypeName),
              securityPolicy: getSecurityPolicy(),
            });
          }

          function setupGlobalParameterListener() {
            if (GMcontentMode && document.body) {
              const observer = new MutationObserver(deBounce({ fn: getGlobalParameter, delay: 2e2, timer: "globalParameter" }));
              observer.observe(document.body, { childList: true, subtree: true });
            } else {
              global.addEventListener("pushState", getGlobalParameter);
              global.addEventListener("replaceState", getGlobalParameter);
              global.addEventListener("popstate", getGlobalParameter);
            }
          }

          async function updateToRequestIcon(isReload = true) {
            try {
              const iconDataURL = await requestRemoteIcon(yandexIconsAPIUrl);
              if (iconDataURL) cache.set(REMOTEICONS, iconDataURL, 2592e6);
            } catch (e) {
              ERROR("updateToRequestIcon: Can't fetch the iconData.");
            } finally {
              isReload && refresh();
            }
          }

          function openUpdateWindow(url) {
            if (IS_REAL_GECKO || IS_REAL_WEBKIT || (IS_REAL_BLINK && GMscriptHandler === "Tampermonkey" && parseFloat(GMversion) >= 5.2)) {
              def.var.updateWindow = GMopenInTab(IS_GREASEMONKEY ? url.replace(/\?\w+/g, "") : url, false);
            } else global.location.href = url;
          }

          function showUpdateNotify() {
            const title = IS_CHN ? "升级提示" : "Update Tips";
            const loadingTip = IS_REAL_GECKO
              ? `${IS_CHN ? "已经在新窗口打开脚本升级页面，请注意切换！" : "The upgrade page is opened in new window!"}`
              : `${IS_CHN ? "正在申请脚本更新安装页面，请稍后……" : "Installation page is requested, please wait..."}`;
            const okTip = IS_CHN ? "<dd><b>若您已更新完成</b>，请点此刷新页面，以使新版脚本生效！</dd>" : "<dd><b>If updated</b>, click here to make the script effective!</dd>";
            const text = createNoticeHTML(`<dd id="${def.notice.random}_loading" style="color:#ffff00;font-weight:600">${loadingTip}</dd>${okTip}`);
            GMnotification({ title, text, type: def.notice.info, closeWith: ["click"], timeout: false, position: "topRight", callbacks: { onClose: [updateToRequestIcon] } });
            if (def.var.updateWindow) {
              sleep(6e3, { useCachedSetTimeout: true }).then(() => {
                def.var.updateWindow.onclose = () => delete def.var.updateWindow;
                def.var.updateWindow.close?.();
              });
            }
            return qS(`#${def.notice.random}_loading`);
          }

          function removeLoadingElement(node) {
            sleep(4e3, { useCachedSetTimeout: true }).then(() => safeRemoveNode(node));
          }

          function preInstall(url) {
            sleep(5e2)(url.replace(".meta.", ".user."))
              .then(u => openUpdateWindow(u))
              .then(() => showUpdateNotify())
              .then(r => removeLoadingElement(r))
              .catch(e => ERROR("preInstall:", e.message));
          }

          function extractVersion(res) {
            return res.match(/\/\/\s+@version\s+(\S+)/)?.[1]?.trim();
          }

          function extractNotes(res) {
            return res.match(/\/\/\s+@note\s+(.+)/g)?.map(item => escapeHTML(item.replace(/\/\/\s+@note\s+/, "")).trim());
          }

          function generateUpdateList(notes) {
            if (!notes) return `<ol>当前更新源没有更新详情，请访问 <a target="_blank" href="${def.url.homepage}">Github</a> 查看。</ol><ol>&nbsp;</ol>`;
            return notes.reduce((updateInfoList, note) => {
              try {
                const parsedNote = JSON.parse(note);
                updateInfoList += `<li>${IS_CHN ? parsedNote.CN : parsedNote.EN}</li>`;
              } catch (e) {
                updateInfoList += `<li>${note}</li>`;
              }
              return updateInfoList;
            }, "");
          }

          function generateUpdateHTML(version, updateText) {
            const escapedVersion = escapeHTML(version);
            return IS_CHN
              ? `<dd><span>发现新版本</span><i>V${escapedVersion}</i>，点击可自动更新。</dd><dd><ul>${updateText}</ul></dd><dd id="${def.notice.stopUpdate}"><input type="checkbox">一周内不再提醒</dd>`
              : `<dd><span>New Version</span><i>V${escapedVersion}</i>, Click to update.</dd><dd><ul>${updateText}</ul></dd><dd id="${def.notice.stopUpdate}"><input type="checkbox">Don't remind me for <b>7</b> days</dd>`;
          }

          function showNewUpdateNotify(version, newUpdateHTML, url) {
            const [title, text, callbacks] = [IS_CHN ? "发现新更新" : "Found new update", createNoticeHTML(newUpdateHTML), { onClick: [() => preInstall(url)] }];
            const updateInterface = GMnotification({ title, text, type: def.notice.warning, closeWith: ["click"], timeout: 8e3, callbacks });
            qS(`#${def.notice.stopUpdate}`)?.addEventListener("click", event => {
              event.stopPropagation();
              NoticeX.close(updateInterface);
              cache.set(AUTOCHECK, def.var.curVersion);
            });
            const props = ["font-weight:bold;color:#dc143c", "color:0", "color:#dc143c", "color:0"];
            __console("shown_new_update", `%c[GB-Update]%c\r\nWe found a new version: %c${version}%c, which you can update now!`, ...props);
          }

          function showSuccessUpdateNotify() {
            const successHTML = IS_CHN
              ? `<dd style="margin: 10px 0"><span>恭喜！</span>当前版本 <i>${def.var.curVersion}</i> 已为最新！</dd>`
              : `<dd style="margin: 10px 0"><span>Congratulations!</span><br/>The version <i>${def.var.curVersion}</i> is up-to-date!</dd>`;
            const title = IS_CHN ? "更新成功" : "Update Success";
            GMnotification({ title, text: createNoticeHTML(successHTML), timeout: 3e3, closeWith: ["click"] });
            cache.set(AUTOCHECK, def.var.curVersion);
            GMsetValue(VERSION, encrypt(def.var.curVersion));
            const props = ["font-weight:700;color:#008b8b", "color:0", "color:#dc143c", "color:0"];
            __console("shown_update_info", `%c[GB-Update]%c\r\nCurretVersion: %c${def.var.curVersion}%c is up-to-date!`, ...props);
          }

          function showUpdateError() {
            const props = ["font-weight:bold;color:#dc143c", "color:#800000"];
            __console("error", "%c[GB-UpdateError]%c\r\nRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!", ...props);
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
                  if (hasOwnProperty(listSite, site) && listSite[site].siteTypeID !== 0 && listSite[site].siteTypeID !== currentSite.siteTypeID) {
                    const iconStyle = `background-position:0 ${(1 - listSite[site].siteTypeID) * 32}px;background-attachment:local;background-size:32px auto;transform:scale(0.75);`;
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
                  if (hasOwnProperty(listSite, site) && listSite[site].siteTypeID !== 0) {
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
                          <sup style="padding:0;font-style:italic;color:#dc143c;font-size:11px">Beta!</sup></div>
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
                  const [title, text, type, scroll] = [`${def.var.scriptName} v${def.var.curVersion}`, configText, def.notice.configuration, { maxHeight: 680, showOnHover: true }];
                  const configInterface = GMnotification({ title, text, type, width: 326, closeWith: ["button"], scroll, progressBar: false, timeout: false, position: "topRight" });
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
                  const [title, text] = [`\ud83d\udc4b ${IS_CHN ? "你想去哪里吖？" : "Where to visit?"}`, addAction.listSearchEngine(listCurrentSite)];
                  const [type, scroll] = [def.notice.configuration, { maxHeight: 565, showOnHover: true }];
                  GMnotification({ title, text, type, width: 200, closeWith: ["button"], scroll, timeout: 12e3, position: "topRight" });
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
                  const [title, text, type, scroll] = [`${def.var.scriptName} v${def.var.curVersion}`, filterHTML, def.notice.configuration, { maxHeight: 680, showOnHover: true }];
                  const filterInterface = GMnotification({ title, text, type, width: 380, closeWith: ["button"], scroll, progressBar: false, timeout: false, position: "topRight" });
                  const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
                  const tigger = qS(`#${def.notice.rf}`);
                  if (tigger && !tigger.checked) {
                    textarea.classList.add(def.notice.readonly);
                    textarea.setAttribute("readonly", true);
                  }
                  tigger?.addEventListener("change", changeEventOnTigger);
                  textarea?.addEventListener("compositionstart", () => (def.var.composing = true));
                  textarea?.addEventListener("compositionend", () => delete def.var.composing);
                  textarea?.addEventListener("input", addInputEventOnTextarea);
                  qS(`#${def.notice.random}_help`)?.addEventListener("click", () => void GMopenInTab(`${def.url.feedback}/288`, false));
                  qS(`#${def.notice.random}_cancel`)?.addEventListener("click", () => void NoticeX.close(filterInterface));
                  qS(`#${def.notice.random}_submit`)?.addEventListener("click", saveFilterResultData);
                });
              },
            };

            function changeEventOnTigger() {
              const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
              textarea?.classList.toggle(def.notice.readonly, !this.checked);
              textarea?.toggleAttribute("readonly", !this.checked);
            }

            async function saveFilterResultData() {
              try {
                const filterString = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`).value.trim();
                const filterTrigger = qS(`#${def.notice.rf}`).checked;
                const parsedFilterString = filterString ? JSON.parse(filterString) : [];
                if (!Array.isArray(parsedFilterString) || parsedFilterString.Some(item => typeof item !== "string")) throw new Error("Format Error");
                const resultFilterData = { filter: uniq(parsedFilterString), trigger: filterTrigger };
                GMsetValue(RESULTFILTER, encrypt(JSON.stringify(resultFilterData)));
                const successTitle = IS_CHN ? "保存成功！" : "Success!";
                const successText = IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>";
                if (await addAction.closeConfig()) GMnotification({ title: successTitle, text: createNoticeHTML(successText), callbacks: { onClose: [refresh] } });
              } catch (error) {
                const errorMessage = IS_CHN ? "设置数据格式有误，请修正后重新提交。" : "The setting data format is incorrect!";
                const errorText = `<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31\u0020</e>${errorMessage}</dd>`;
                GMnotification({ text: createNoticeHTML(errorText), type: def.notice.error, closeWith: ["click"] });
              }
            }

            async function addInputEventOnTextarea(event) {
              const _this = this ?? event.target;
              try {
                if (def.var.composing) return;
                const value = _this.value.trim();
                if (value.length === 0) return _this.setAttribute("style", "border: 1px solid #999");
                const previousCursorPosition = _this.selectionStart;
                const formattedValue = JSON.stringify(JSON.parse(value), null, 2);
                const newCursorPosition = previousCursorPosition + formattedValue.length - _this.value.length;
                const currentScrollTop = _this.scrollTop;
                _this.value = formattedValue;
                _this.setAttribute("style", "border: 1px solid #999");
                await sleep(10, { instant: true });
                _this.scrollTop = currentScrollTop;
                _this.setSelectionRange(newCursorPosition, newCursorPosition);
              } catch (e) {
                _this.setAttribute("style", "border: 2px solid #dc143c");
              }
            }

            function setupClickEventOnCard(item) {
              item?.addEventListener("click", () => {
                const [itemID, queryString] = [Number(item.id), getQueryString()];
                const splitTypeName = getUrlParam(listCurrentSite.splitTypeName).trim();
                const isImageType = listCurrentSite.imageType.includes(splitTypeName);
                for (const [type, typeID] of Object.entries(newSiteType)) {
                  if (typeID === itemID) {
                    const siteType = type.toLowerCase();
                    const url = isImageType ? listSite[siteType].imageURL : listSite[siteType].webURL;
                    const fullURL = decodeURI(url + queryString);
                    if (localWindow) top.location.href = fullURL;
                    else GMopenInTab(fullURL, false);
                    break;
                  }
                }
              });
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
                _config_date_ = { ..._config_date_, keywordHighlight: true, customColor };
                GMsetValue(CONFIGURE, encrypt(JSON.stringify(_config_date_)));
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
                  if (confirm(confirmText)) {
                    const text = createNoticeHTML(IS_CHN ? "<dd>搜索关键词自定义颜色已保存，当前页面即将刷新！</dd>" : "<dd>Search keywords custom color has been saved!</dd>");
                    GMnotification({ title: IS_CHN ? "自定义颜色保存" : "Save Custom Color", text, callbacks: { onShow: [saveData], onClose: [refresh] } });
                  }
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
              const selectEngineList = qA(`input[name='${def.notice.card}_lists']:checked`).map(item => Number(item.dataset.sn));
              if (selectEngineList.length < 3) {
                const noticeText = IS_CHN
                  ? `\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！`
                  : `\u0020Please select <b>three</b> search engines, still less<em>${3 - selectEngineList.length}</em>`;
                const text = createNoticeHTML(`<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>${noticeText}</dd>`);
                return GMnotification({ text, type: def.notice.error, closeWith: ["click"] });
              }
              const configKeys = ["hk", "gj", "lw", "kh", "ar", "aa", "au"];
              const configValues = configKeys.map(key => qS(`#${def.notice[key]}`).checked);
              const [isHotkey, googleJump, localWindow, keywordHighlight, antiLinkRedirect, antiAds, isAutoUpdate] = configValues;
              const _config_date_ = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine: selectEngineList, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
              GMsetValue(CONFIGURE, encrypt(JSON.stringify(_config_date_)));
              if (await addAction.closeConfig()) {
                const text = createNoticeHTML(IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>");
                GMnotification({ title: IS_CHN ? "保存成功！" : "Success!", text, callbacks: { onClose: [refresh] } });
              }
            }

            function insertMenus() {
              const parameter_Set_Menu = `\ufff0\u2699\ufe0f ${IS_CHN ? "搜索引擎助手高级设置" : "Advanced Feature Settings "}${isHotkey ? "(E)" : ""}`;
              parameter_Set ? GMunregisterMenuCommand(parameter_Set) : DEBUG("%cInstalling Parameter_Set_Menu", "color:#808080");
              parameter_Set = GMregisterMenuCommand(parameter_Set_Menu, addAction.setConfigure);
              const filter_Set_Menu = `\ufff2\ud83d\udcdb ${IS_CHN ? "搜索结果拦截词设置" : "Search Filter Settings "}${isHotkey ? "(B)" : ""}`;
              filter_Set ? GMunregisterMenuCommand(filter_Set) : DEBUG("%cInstalling Filter_Set_Menu", "color:#808080");
              filter_Set = GMregisterMenuCommand(filter_Set_Menu, addAction.filterResult);
              const engine_List_Menu = `\ufff4\ud83d\udc4b ${IS_CHN ? "嗨，你想去哪里吖？" : "Hi, Where to visit? "} ${isHotkey ? "(V)" : ""}`;
              engine_List ? GMunregisterMenuCommand(engine_List) : DEBUG("%cInstalling Engine_List_Menu", "color:#808080");
              engine_List = GMregisterMenuCommand(engine_List_Menu, addAction.listEngine);
            }

            function insertHotkey() {
              sleep(1e2, { useCachedSetTimeout: true })
                .then(() => {
                  if (!isHotkey) return DEBUG("%cNo Hotkey_Setting", "color:#a9a9a9");
                  document.addEventListener("keydown", event => void (event.code === "AltRight" && (def.var.AltGraph = true)));
                  document.addEventListener("keyup", event => void (event.code === "AltRight" && delete def.var.AltGraph));
                  return DEBUG("%cInstalling Hotkey_Setting", "color:#808080") || isHotkey;
                })
                .then(isDeplayed => {
                  isDeplayed &&
                    document.addEventListener("keydown", e => {
                      const ekey = (e.altKey || def.var.AltGraph === true) && !e.ctrlKey && !e.shiftKey && !e.metaKey;
                      if (e.code === "KeyE" && ekey) handleClickEvent("setConfigure", 1e3, e);
                      else if (e.code === "KeyV" && ekey) handleClickEvent("listEngine", 1e3, e);
                      else if (e.code === "KeyB" && ekey) handleClickEvent("filterResult", 1e3, e);
                    });
                });

              function handleClickEvent(name, time, event) {
                stopEventPropagation(event);
                const currentTime = performance.now();
                currentTime - def.count.clickTimer > time && (def.count.clickTimer = currentTime) && addAction[name]();
              }
            }

            function showSystemInfo() {
              if (CUR_WINDOW_TOP && listCurrentSite.siteTypeID !== newSiteType.OTHERS) {
                const isFavEngine = currentSite.siteTypeID !== newSiteType.OTHERS;
                const fontStyle = `text-transform:capitalize;font:italic 16px/130% Candara,'Times New Roman'`;
                __console(
                  "shown_system_info",
                  `%c${def.var.scriptName}\r\n%cINTRO.URL:\u0020https://f9y4ng.likes.fans/Search-Engine-Assistant\r\n%c%s%cV%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s\r\n%c%s%c%s`,
                  "font:normal 700 16px/150% system-ui,-apple-system,BlinkMacSystemFont,sans-serif;color:#dc143c",
                  "color:#777;font:italic 400 10px/180% monospace",
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "脚本版本：" : "Version:\u0020",
                  "color:#708090;font:italic 600 14px/150% Candara,Times New Roman",
                  def.var.curVersion,
                  "color:darkred;font:italic 11px/150% Candara,'Times New Roman'",
                  IS_CHEAT_UA ? "\u3000(CHEAT-UA)" : "",
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "当前搜索引擎：" : "CurrentEngine:\u0020",
                  `color:#dc143c;${fontStyle};font-weight:700`,
                  currentSiteName,
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "常用的搜索引擎：" : "YourFavEngine:\u0020",
                  `color:${isFavEngine ? "#006400" : "#0000ff"};${fontStyle}`,
                  isFavEngine,
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "移除链接重定向：" : "antiRedirectFn:\u0020",
                  `color:${antiLinkRedirect ? "#006400" : "#0000ff"};${fontStyle}`,
                  antiLinkRedirect,
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "去除搜索结果广告：" : "AntiAdvertising:\u0020",
                  `color:${antiAds ? "#006400" : "#0000ff"};${fontStyle}`,
                  antiAds,
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "搜索结果关键词过滤：" : "SearchResultFilter:\u0020",
                  `color:${antiResultsFilter ? "#006400" : "#0000ff"};${fontStyle}`,
                  antiResultsFilter,
                  "font-size:12px;font-weight:700;color:#4682b4",
                  IS_CHN ? "因安全策略被阻止：" : "SecurityPolicy:\u0020",
                  `color:${def.var.securityPolicy ? "#006400" : "#0000ff"};${fontStyle}`,
                  Boolean(def.var.securityPolicy)
                );
              }
            }

            /* SEARCH_ENGINE_ASSISTANT_COMMAND_FUNCTIONS */

            const siteConfigMap = {
              baidu: {
                listTypes: { target: "#content_left", listName: "div", className: "result-op" },
                clear: () => safeRemoveNode("#con-ar"),
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
                clear: () => safeRemoveNode("aside>ol#b_context"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const sectionWidth = buttonSection.getBoundingClientRect().width || 2e2;
                  const [textarea, formBox, formNode] = [qS(`textarea.b_searchbox[name="q"]`, target.parentNode), qS(".b_searchboxForm"), qS(`form#sb_form`)];
                  qA(`#b_header .b_searchbox[name="q"]`).forEach(input => {
                    const inputLength = parseFloat(gCS(input).width) || 500;
                    input.style.maxWidth = `${inputLength - sectionWidth + 50}px`;
                    input.style.overflowY = "auto";
                  });
                  if (formNode && textarea) {
                    const inputs = qA(`#${def.const.rndButtonID} input`);
                    const changeTextarea = e => !/b_logoArea|b_phead_chat_link/.test(e.target?.className) && inputs.forEach(input => input.classList.add(def.const.searchbox));
                    const recoverTextarea = () => textarea.getAttribute("rows") < 2 && inputs.forEach(input => input.classList.remove(def.const.searchbox));
                    textarea.getAttribute("rows") >= 2 && inputs.forEach(input => input.classList.add(def.const.searchbox));
                    formNode.addEventListener("focus", changeTextarea, true);
                    formNode.addEventListener("blur", recoverTextarea, true);
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
                      input.style.maxWidth = `${inputLength - sectionWidth + 30}px`;
                      input.style.overflowY = "auto";
                    });
                  }).observe(formNode, { attributeFilter: ["aria-owns"] });
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
                clear: () => safeRemoveNode("div.content__right>div"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => {
                    buttonSection.style.width = `${sectionWidth + 12}px`;
                  });
                },
              },
              qwant: {
                listTypes: { target: "div[data-testid='containerWeb']>section div[data-testid]>div>div", listName: "div" },
                applyButton: ({ buttonSection, target }) => {
                  target.parentNode.appendChild(buttonSection);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => {
                    const llmButtonWidth = qS(`div[data-testid="llm-button-force"][class]`)?.getBoundingClientRect().width || 0;
                    buttonSection.style.right = `-${sectionWidth + 10 + llmButtonWidth}px`;
                  });
                },
              },
              sogou: {
                listTypes: { target: "div.results", listName: "div", className: "vrwrap" },
                clear: () => safeRemoveNode("#right"),
                applyButton: ({ buttonSection, buttonID, target }) => {
                  if (currentSite.imageType.includes(def.var.searchType)) {
                    sleep(4e2).then(() => {
                      if (!qS(buttonID) && target) {
                        insertAfter(buttonSection, target);
                        const sectionWidth = buttonSection.getBoundingClientRect().width;
                        buttonSection.style.right = `-${sectionWidth + 10}px`;
                        qA(`${buttonID} input`).forEach(node => node.classList.add(`${def.notice.random}_images`));
                        addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                      }
                    });
                  } else if (def.var.searchType === "weixin") {
                    insertAfter(buttonSection, target);
                    buttonSection.style = "position:relative";
                    qA(`${buttonID} input`).forEach(node => node.classList.add(`${def.notice.random}_weixin`));
                  } else {
                    insertAfter(buttonSection, target);
                    safeRemoveNode(qS(`#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`));
                    sleep(0).then(() => {
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
                clear: () => safeRemoveNode(".main>.s-side-list>.result-content"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  sleep(0)(buttonSection.getBoundingClientRect().width || 2e2).then(sectionWidth => (buttonSection.style.right = `-${sectionWidth + 10}px`));
                },
              },
              so360: {
                listTypes: { target: "#main>ul.result", listName: "li", className: "res-list" },
                clear: () => safeRemoveNode("#side_wrap"),
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
                applyButton: ({ buttonSection, buttonID, target }) => {
                  let isLoadEventAttached = false;
                  const handleLoadEvent = () => {
                    if (!qS(buttonID) && target) insertAfter(buttonSection, target);
                    addSearchButtonEvent(qA(`${buttonID} span[sn]:not([event-insert])`));
                    global.removeEventListener("load", handleLoadEvent);
                    isLoadEventAttached = false;
                  };
                  if (!isLoadEventAttached) {
                    global.addEventListener("load", handleLoadEvent);
                    isLoadEventAttached = true;
                  }
                },
              },
              yahoo: {
                listTypes: { target: "#web>ol", listName: "li" },
                clear: () => safeRemoveNode("#right>ol"),
                applyButton: ({ buttonSection, target }) => {
                  try {
                    insertAfter(buttonSection, target);
                    if (currentSite.imageType.includes(def.var.searchType)) {
                      const sectionRect = qS("#sbx")?.getBoundingClientRect() ?? { width: 656, left: 2e2 };
                      buttonSection.style.cssText = `position:absolute;left:${6 + sectionRect.width + sectionRect.left}px;top:14px;`;
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
              brave: { listTypes: { target: "#results", listName: "div", className: "snippet" }, clear: () => safeRemoveNode("aside>div") },
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
                clear: () => safeRemoveNode("#infoboxes"),
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
                const noticeStyle = `@charset "UTF-8";` + def.var.style + def.var.iconstyle + String(keywordHighlight ? def.var.hlstyle : "");
                addStyle({ target: document.head, styleId: def.const.rndstyleName, media: "screen", styleContent: noticeStyle, isOverwrite: false });
              } catch (e) {
                ERROR("insertStyle:", e.message);
              }
            }

            async function insertButtons() {
              try {
                const target = qS(currentSite.mainSelector);
                if (def.var.indexPage || !target || !def.var.queryString || qS(`#${def.const.rndButtonID}`)) return;
                const buttonSection = cE("gb-button", { id: def.const.rndButtonID, innerHTML: tTP.createHTML(def.var.button) });
                const spans = await applyButtons(buttonSection, target);
                if (!spans) return;
                addSearchButtonEvent(spans);
                scrollDetect();
              } catch (e) {
                ERROR("insertButtons:", e.message);
              }
            }

            async function applyButtons(buttonSection, target) {
              if (currentSite.siteTypeID === newSiteType.OTHERS) return null;
              const [buttonID, applyButtonMethod] = [`#${buttonSection.id}`, siteConfigMap[currentSiteName]?.applyButton];
              if (typeof applyButtonMethod === "function") await applyButtonMethod({ buttonSection, buttonID, target });
              else insertAfter(buttonSection, target);
              return qA(`${buttonID} span[sn]:not([event-insert])`);
            }

            function setupScrollButton(selector, className, scrollOffset) {
              const element = qS(selector);
              if (!element) return;
              const offsetTop = element.getBoundingClientRect().top;
              const toggleClass = () => {
                const scrollTop = global.scrollY || document.documentElement.scrollTop;
                element.classList.toggle(className, scrollTop > offsetTop + scrollOffset);
              };
              toggleClass();
              document.addEventListener("scroll", toggleClass);
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
                  height = 80;
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
              nodes.forEach(node => {
                node.setAttribute("event-insert", true);
                const inputElement = qS("input", node);
                const siteTypeID = Number(node.getAttribute("sn"));
                inputElement.addEventListener("click", () => {
                  const imageSearch = getUrlParam(currentSite.splitTypeName)?.trim();
                  let selectedSiteData;
                  if (siteTypeID === selectedSite[0].siteTypeID) selectedSiteData = selectedSite[0];
                  else if (siteTypeID === selectedSite[1].siteTypeID) selectedSiteData = selectedSite[1];
                  else return;
                  const isImageSearch = currentSite.imageType.includes(imageSearch);
                  const gotoUrl = isImageSearch ? selectedSiteData.imageURL : selectedSiteData.webURL;
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
              const siteConfig = siteConfigMap[siteName];
              if (!siteConfig) return;
              const { target, listName, className } = siteConfig.listTypes;
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
              if (isNaN(timeout) && !def.var.infinityFilterTimeInitiated) {
                if (typeof def.var.infinityFilterTimeInitiated === "boolean") return;
                global.addEventListener("load", () => (def.var.infinityFilterTimeInitiated = true) && filterSearchResultsProcess(qs));
                def.var.infinityFilterTimeInitiated = false;
              } else deBounce({ fn: filterSearchResultsProcess, timer: "filterSearchResults", delay: timeout || 50 })(qs);
            }

            async function filterSearchResultsProcess(querystring) {
              if (!querystring) return;
              const selectors = buildSelectors(querystring);
              const elements = qA(selectors);
              if (elements.length === 0) return;
              const returnContent = new Map();
              elements.forEach(item => processNode(item, returnContent));
              if (returnContent.size === 0) return;
              returnContent.forEach((content, item) => matchFilters(item, content));
              await sleep(1e2, { instant: true });
              if (usedFilterWords.size > 0 && qA(querystring.split(/,(?![^()]*\))/g)[0]).length >= 2) {
                const remainingResults = qA(selectors.split(/,(?![^()]*\))/g)[0]).length;
                handleRemainingResults(remainingResults);
              }
            }

            function processMatchedItem(item, content, filter) {
              if (IS_DEBUG) addDebugNotice(item, filter);
              usedFilterWords.add(filter);
              item.classList.add(IS_DEBUG ? def.var.translucent : def.var.disappear);
              DEBUG("Filter.match:", { filter, item, content });
              qA("a", item).forEach(node => node.setAttribute("gd-antiredirect-status", "blocked"));
            }

            function addDebugNotice(item, filter) {
              if (qS("notice-label", item)) return;
              const notice = cE("notice-label", { class: "code", textContent: `<![CDATA[ "${filter}" ]]>` });
              item.prepend(notice);
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
              const href = qS("a:not([data-testid='result-extras-site-search-link']):not([aria-label^='Anonymous']):not([href*='.bing.com/ck/a?'])", item)?.href ?? "";
              const url = [1, 5, 8].includes(listCurrentSite.siteTypeID) ? "" : getDecodeURI(href);
              const content = item.innerText?.replace(/[\t\r\n\ue62b]/g, "").trim() + url;
              if (content) returnContent.set(item, content);
            }

            function matchFilters(item, content) {
              if (item?.nodeType !== Node.ELEMENT_NODE) return;
              try {
                resultFilters.forEach(filter => new RegExp(filter, "i").test(content) && processMatchedItem(item, content, filter));
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
              if (typeof href !== "string" || href.startsWith("javascript:")) return ``;
              return `\ue620${decodeURIComponent(href)}\ue620`;
            }

            function getGlobalGoogle(NCRHost, permission) {
              if (!permission || CUR_HOST_NAME === NCRHost) return;
              try {
                const url = `${CUR_PROTOCOL}//${NCRHost}/ncr?prev=${CUR_PATH_NAME}${encodeURIComponent(location.search)}`;
                const text = createNoticeHTML(`<dd class="${def.notice.center}">${IS_CHN ? "即将跳转至 Google.com (NCR)" : "Jump to Google.com (NCR)"}</dd>`);
                GMnotification({ title: "Google NCR", text, type: def.notice.info, callbacks: { beforeClose: [() => top.location.replace(url)] } });
              } catch (e) {
                ERROR("getGlobalGoogle:", e.message);
              }
            }

            function updateIconsForExtension(requestVer) {
              if (decrypt(requestVer) === def.var.curVersion) return;
              DEBUG("updateIconsForExtension: %cupdateToRequestIcon", "color:#dc143c");
              updateToRequestIcon(false);
              cache.set(AUTOCHECK, def.var.curVersion);
              GMsetValue(VERSION, encrypt(def.var.curVersion));
            }

            function processMainThreadTasks() {
              const { siteTypeID } = currentSite;
              if (siteTypeID !== newSiteType.OTHERS && !def.var.securityPolicy) {
                if (!qS(`#${def.const.rndclassName}`)) insertCSS();
                if (!qS(`#${def.const.rndButtonID}`)) insertButtons();
              }
              const { siteTypeID: listSiteTypeID, antiAdsFn, resultListProp, antiRedirectFn } = listCurrentSite;
              if (listSiteTypeID !== newSiteType.OTHERS) {
                if (!qS(`#${def.const.rndstyleName}`)) insertStyle();
                if (antiAds) antiAdsFn?.();
                if (antiResultsFilter) filterSearchResults(resultListProp);
                if (antiLinkRedirect && !def.var.indexPage) antiRedirectFn?.();
              }
            }

            function searchButtonAndStylesObserve() {
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
            })(await cache.get(AUTOCHECK), await GMgetValue(VERSION));
          })(
            updateFlag => {
              if (CUR_WINDOW_TOP && isAutoUpdate && (!updateFlag || setDebuggerMode())) {
                const updateDetectionResponses = updateDetectionAddress.map(addr => fetchUpdateResponse(addr));
                return Promise.any(updateDetectionResponses).catch(e => ERROR("getUpdateInformation:", e.message));
              }
            },
            async updateResponse => {
              try {
                const response = await updateResponse;
                if (!response) return;
                const { res, url } = response;
                if (!res) return showUpdateError();
                const [version, notes] = [extractVersion(res), extractNotes(res)];
                if (!version) return;
                const newUpdateHTML = generateUpdateHTML(version, generateUpdateList(notes));
                if (versionCompare(def.var.curVersion, version)) showNewUpdateNotify(version, newUpdateHTML, url);
                else showSuccessUpdateNotify();
              } catch (e) {
                ERROR(`parseUpdateInformation: ${e?.message}`);
              }
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
          const defaults = {
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
          const configure = await GMgetValue(CONFIGURE);
          if (!configure) {
            const values = await GMlistValues();
            values.forEach(key => GMdeleteValue(key));
            GMsetValue(CONFIGURE, encrypt(JSON.stringify(defaults)));
            return defaults;
          }
          try {
            const config_date = JSON.parse(decrypt(configure));
            return { ...defaults, ...config_date, selectedEngine: Array.isArray(config_date.selectedEngine) ? config_date.selectedEngine : defaults.selectedEngine };
          } catch (e) {
            return defaults;
          }
        },
        async () => {
          const defaults = { filter: [], trigger: false };
          try {
            const resultFilter = await GMgetValue(RESULTFILTER);
            if (!resultFilter) return defaults;
            const { filter, trigger } = JSON.parse(decrypt(resultFilter));
            return { filter: Array.isArray(filter) ? filter : [], trigger };
          } catch (e) {
            return defaults;
          }
        },
        url => {
          if (!CUR_WINDOW_TOP || !url) return;
          return new Promise((resolve, reject) => {
            const headers = { Accept: "*/*", Referer: url };
            const onreadystatechange = response => {
              if (response.readyState !== 4) return;
              if (response.status === 200) convertBlobToDataURL(response.response, resolve, reject);
              else if (response.status !== 0) reject(new Error("NoAccessError"));
            };
            const onerror = () => reject(new Error("NetworkError"));
            const ontimeout = () => reject(new Error("TimeoutError"));
            GMxmlhttpRequest({ url, headers, method: "GET", timeout: 5e3, responseType: "blob", onreadystatechange, onerror, ontimeout });
          }).catch(e => Promise.reject(ERROR("requestRemoteIcon:", e.message)));
        },
        options => {
          try {
            return new NoticeX({ ...options }).show();
          } catch (e) {
            ERROR("GMnotification:", e.message);
          }
        }
      );
    })(createTrustedTypePolicy());
  },
  (array => {
    const defineMethod = (property, methodFunction) => {
      if (Reflect.getOwnPropertyDescriptor(array, property)) return;
      Object.defineProperty(array, property, { value: methodFunction, writable: false, configurable: false, enumerable: false });
    };
    const arrayMethods = {
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
    };
    return { defineMethod, arrayMethods, object: Object.create(null) };
  })(Array.prototype),
  (() => ({
    oT: any => Object.prototype.toString.call(any),
    hP: (...any) => Object.prototype.hasOwnProperty.call(...any),
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
      return testStorage(localStorage);
    })("__fr_storage_test__"),
  }))()
);
