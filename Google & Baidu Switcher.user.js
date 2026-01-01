// ==UserScript==
// @name               Google & baidu Switcher (ALL in One)
// @name:en            Search Engine Assistant
// @name:zh-CN         优雅的搜索引擎助手
// @name:zh-TW         優雅的搜尋引擎助手
// @name:ru            Помощник поисковой системы
// @name:ja            優雅な検索エンジン助手
// @version            2026.01.01.1
// @author             F9y4ng
// @description        Alias "Search Engine Assistant", le script aide à la navigation entre les moteurs de recherche, à la personnalisation des préférences, à la mise en évidence des mots-clés, à l'élimination des redirections et des publicités et au filtrage des résultats. Compatible avec Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Mojeek, searXNG et bien d'autres moteurs de recherche célèbres.
// @description:en     "Elegant search engine assistant" allows switching between engines; supports custom engines, keyword highlighting; offers redirect removal, ad blocking, keyword filtering, and auto-updates; compatible with Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Mojeek, searXNG and more.
// @description:zh-CN  “优雅的搜索引擎助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染；还提供去除搜索链接重定向、屏蔽搜索结果广告、使用关键词过滤搜索结果、和自动更新检测等高级功能；兼容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Mojeek、searXNG等多个搜索引擎。
// @description:zh-TW  「優雅的搜尋引擎助手」方便使用者在不同的搜尋引擎之間跳轉；支援自定義常用搜尋引擎、關鍵詞高亮渲染；還提供去除搜尋連結重定向、遮蔽搜尋結果廣告、使用關鍵詞過濾搜尋結果、和自動更新檢測等高階功能；相容如Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Mojeek、searXNG等多個搜尋引擎。
// @description:ru     «Элегантный Помощник поисковой системы» позволяет легко переключаться между поисковыми системами и поддерживает такие дополнительные функции, как настройка, удаление редиректов и рекламы. Совместим с такими поисковыми системами, как Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Mojeek и searXNG.
// @description:ja     「優雅な検索エンジン助手」は、検索エンジン間の切り替えを容易にし、カスタムエンジン、キーワードハイライト、リダイレクト削除、広告ブロック、キーワードフィルタリング、自動更新をサポートし、Baidu、Google、Bing、Duckduckgo、Yandex、Sogou、Qwant、Ecosia、You、Startpage、Brave、Yahoo、Yep、Mojeek、searXNGなどと互換性があります。
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nO2WbUxTVxjHj8IMWZbt05Yt28y2D3yQRN0++MVsmXFbNjBixbFpkSGvXUt5GRpkgOCgIsgqOANUQCXYOQUKCMqrtDAmiorSwioIytsoIL3ce1olQ+W/3KsFlYov8yUmPsn/w725J//fec7zPPcQ8jJexoscABwsFosLpfRTq9W6CIDTMzFmWfYjSmkux3EWSilsYll2YnBwsNxsNi99auaUUn+O48ZZlkODrgW7lAVIjM9DWuohHD3yF8xmBhzHTXZ2du4B4PhEzVmWDeZ32nq+AxvESfDekIbwHbUIV51F+E4dAuTZEK2IQU3VKSEjBoNBQwiZ80TMx8bGPuY4buLsGSPc3WIQvKcVYVrMUPChAXh4JKC0uEGAKCsri/pfxgCcKKULKKXVfHo9RfGQ5Brtmk9BFJux0jUGl7r7MTAwMLR48eI3H9nYarW+c7vQrtqKTFOgxXrZ3lnNbfJNqEJq8kFhnVKplD+q+SKO40x8ofHn+dvOQuxIUsPPJwUbdttP/b2Sakbh6ZEgAJSUlPxOCJn7UOYMw7xBKb1sMo1AFrgTP/imI0ypw0+7GhG4+Q/Ij12dMgmpnoC02Axp0RUEl1sQVjc5DVE3iS8/3ygA9PT09HV3dwdbLJa3HghAKY3lF23eqIJ/bKn9HdZNIuhAH2S5fyNNewWqE2OIK+6Fb1Yb5Eett+BqJvDVsk3o7zdhdNRsmxPXurq6tswKwLKs0aC/iFWiBITV3bQLEJB3CcmVJuhHgA5mWkc7JhCkaoO8YhySQyYsWxqG1e5xcP0iEnJJOppPtgkger1+/wxjAPMopdH8ECk6rIXXpsP2K7zcgo3qi2g3321uU2HbOPxyO4VvQ6v/vZ2xm5Bnt0K0Mg5VFSeFQaVWq/3vNH+FUlrJ07WcNWJLVA7WRtgHCFL3ocAwbtec1wUzIM1pR2jtjRlrZQVDcHeNBl9fRqPRQAh5zXbuUbz5vpxyrFn9C8JTqhB8eNAugP++LtRcun5fAF7RBZeFY7C33jtcLbQzy7I35s+f/4kAwLfcuZYLELlvhbzi2qztFXigD0Xts2SAAWR8Bmqu213vta0e6cpCoRbEYvFavuff5h/2ZpfDO77igf0tO8Ih8mA3jKP2AUrPU/jsbkXocfsF/H1sJbIyjwgAy5cv/46f8R/wD9lZ5VgXV/1QQyZgfzeUx0fQdg9E7fkxRCY2Iij1DPyyO2bUQejxSazw2I7Tze0YGhoyOzo6fiZcKhiGYfifjJu7YrpyZ1PdTQTm9yBkvxGZjQz2NVMoyv6BX3oLQuL/RFiMDpLkU/DbY5w+irpJeEaWQiLPEnZfWVlZSghxFmqgv78/lX+5XVkC11VJ8EpqgM+ucw+Ut7IZXtsaIFbo4JVyAusSdfCM0EC2ueYWRMpprE9pgjhRCzfPX+ErycDw8ChMJtOos7OzFyFknq0NnXp7e/U8RK1Oj58TixAQkvNYEvumw+2bGIREVQsQPpIcfLtGgYrac3z/86lnRCJROCHkvbsGUX5+/utNTU0FDMOM33nNehztTiuEx8otiIg+BtmPGVBszRPe19fXV7u4uHgTQt6/3ySes2TJkgURERGBCoUi5nGk1+ubeDNVRilErtEI9EmZuhc4ODh8PZX2pxVardbJYDAcuzMjw8PDY1KpNJYQ8i55RjE3MzPTR6PRqFUqVebChQv5tH9InkPMIYS8+jyMyQsT/wHRI0Gp4kJwPQAAAABJRU5ErkJggg==
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @require            https://f9y4ng.github.io/GreasyFork-Scripts/lib/parallelGMxhr.js#sha256-qo7Imc1jg2AryApKESDzER/AO92l55w1dH7+xsxrx2I=
// @match              *://www.baidu.com/*
// @match              *://ipv6.baidu.com/*
// @match              *://image.baidu.com/search*
// @match              *://kaifa.baidu.com/searchPage*
// @match              *://*.bing.com/*search?*
// @match              *://*.bing.com/videos/riverview/relatedvideo?*
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
// @match              *://you.com/*
// @match              *://www.startpage.com/*
// @match              *://search.brave.com/*
// @match              *://yep.com/*
// @match              *://www.mojeek.com/search*
// @match              *://au.priv.au/search*
// @match              *://*.google.ad/search?*
// @match              *://*.google.ae/search?*
// @match              *://*.google.al/search?*
// @match              *://*.google.am/search?*
// @match              *://*.google.as/search?*
// @match              *://*.google.at/search?*
// @match              *://*.google.az/search?*
// @match              *://*.google.ba/search?*
// @match              *://*.google.be/search?*
// @match              *://*.google.bf/search?*
// @match              *://*.google.bg/search?*
// @match              *://*.google.bi/search?*
// @match              *://*.google.bj/search?*
// @match              *://*.google.bs/search?*
// @match              *://*.google.bt/search?*
// @match              *://*.google.by/search?*
// @match              *://*.google.ca/search?*
// @match              *://*.google.cat/search?*
// @match              *://*.google.cd/search?*
// @match              *://*.google.cf/search?*
// @match              *://*.google.cg/search?*
// @match              *://*.google.ch/search?*
// @match              *://*.google.ci/search?*
// @match              *://*.google.cl/search?*
// @match              *://*.google.cm/search?*
// @match              *://*.google.cn/search?*
// @match              *://*.google.co.ao/search?*
// @match              *://*.google.co.bw/search?*
// @match              *://*.google.co.ck/search?*
// @match              *://*.google.co.cr/search?*
// @match              *://*.google.co.id/search?*
// @match              *://*.google.co.il/search?*
// @match              *://*.google.co.in/search?*
// @match              *://*.google.co.jp/search?*
// @match              *://*.google.co.ke/search?*
// @match              *://*.google.co.kr/search?*
// @match              *://*.google.co.ls/search?*
// @match              *://*.google.co.ma/search?*
// @match              *://*.google.co.mz/search?*
// @match              *://*.google.co.nz/search?*
// @match              *://*.google.co.th/search?*
// @match              *://*.google.co.tz/search?*
// @match              *://*.google.co.ug/search?*
// @match              *://*.google.co.uk/search?*
// @match              *://*.google.co.uz/search?*
// @match              *://*.google.co.ve/search?*
// @match              *://*.google.co.vi/search?*
// @match              *://*.google.co.za/search?*
// @match              *://*.google.co.zm/search?*
// @match              *://*.google.co.zw/search?*
// @match              *://*.google.com/search?*
// @match              *://*.google.com.af/search?*
// @match              *://*.google.com.ag/search?*
// @match              *://*.google.com.ar/search?*
// @match              *://*.google.com.au/search?*
// @match              *://*.google.com.bd/search?*
// @match              *://*.google.com.bh/search?*
// @match              *://*.google.com.bn/search?*
// @match              *://*.google.com.bo/search?*
// @match              *://*.google.com.br/search?*
// @match              *://*.google.com.bz/search?*
// @match              *://*.google.com.co/search?*
// @match              *://*.google.com.cu/search?*
// @match              *://*.google.com.cy/search?*
// @match              *://*.google.com.do/search?*
// @match              *://*.google.com.ec/search?*
// @match              *://*.google.com.eg/search?*
// @match              *://*.google.com.et/search?*
// @match              *://*.google.com.fj/search?*
// @match              *://*.google.com.gh/search?*
// @match              *://*.google.com.gi/search?*
// @match              *://*.google.com.gt/search?*
// @match              *://*.google.com.hk/search?*
// @match              *://*.google.com.jm/search?*
// @match              *://*.google.com.kh/search?*
// @match              *://*.google.com.kw/search?*
// @match              *://*.google.com.lb/search?*
// @match              *://*.google.com.ly/search?*
// @match              *://*.google.com.mm/search?*
// @match              *://*.google.com.mt/search?*
// @match              *://*.google.com.mx/search?*
// @match              *://*.google.com.my/search?*
// @match              *://*.google.com.na/search?*
// @match              *://*.google.com.ng/search?*
// @match              *://*.google.com.ni/search?*
// @match              *://*.google.com.np/search?*
// @match              *://*.google.com.om/search?*
// @match              *://*.google.com.pa/search?*
// @match              *://*.google.com.pe/search?*
// @match              *://*.google.com.pg/search?*
// @match              *://*.google.com.ph/search?*
// @match              *://*.google.com.pk/search?*
// @match              *://*.google.com.pr/search?*
// @match              *://*.google.com.py/search?*
// @match              *://*.google.com.qa/search?*
// @match              *://*.google.com.sa/search?*
// @match              *://*.google.com.sb/search?*
// @match              *://*.google.com.sg/search?*
// @match              *://*.google.com.sl/search?*
// @match              *://*.google.com.sv/search?*
// @match              *://*.google.com.tj/search?*
// @match              *://*.google.com.tr/search?*
// @match              *://*.google.com.tw/search?*
// @match              *://*.google.com.ua/search?*
// @match              *://*.google.com.uy/search?*
// @match              *://*.google.com.vc/search?*
// @match              *://*.google.com.vn/search?*
// @match              *://*.google.cv/search?*
// @match              *://*.google.cz/search?*
// @match              *://*.google.de/search?*
// @match              *://*.google.dj/search?*
// @match              *://*.google.dk/search?*
// @match              *://*.google.dm/search?*
// @match              *://*.google.dz/search?*
// @match              *://*.google.ee/search?*
// @match              *://*.google.es/search?*
// @match              *://*.google.fi/search?*
// @match              *://*.google.fm/search?*
// @match              *://*.google.fr/search?*
// @match              *://*.google.ga/search?*
// @match              *://*.google.ge/search?*
// @match              *://*.google.gg/search?*
// @match              *://*.google.gl/search?*
// @match              *://*.google.gm/search?*
// @match              *://*.google.gr/search?*
// @match              *://*.google.gy/search?*
// @match              *://*.google.hn/search?*
// @match              *://*.google.hr/search?*
// @match              *://*.google.ht/search?*
// @match              *://*.google.hu/search?*
// @match              *://*.google.ie/search?*
// @match              *://*.google.im/search?*
// @match              *://*.google.iq/search?*
// @match              *://*.google.is/search?*
// @match              *://*.google.it/search?*
// @match              *://*.google.je/search?*
// @match              *://*.google.jo/search?*
// @match              *://*.google.kg/search?*
// @match              *://*.google.ki/search?*
// @match              *://*.google.kz/search?*
// @match              *://*.google.la/search?*
// @match              *://*.google.li/search?*
// @match              *://*.google.lk/search?*
// @match              *://*.google.lt/search?*
// @match              *://*.google.lu/search?*
// @match              *://*.google.lv/search?*
// @match              *://*.google.md/search?*
// @match              *://*.google.me/search?*
// @match              *://*.google.mg/search?*
// @match              *://*.google.mk/search?*
// @match              *://*.google.ml/search?*
// @match              *://*.google.mn/search?*
// @match              *://*.google.mu/search?*
// @match              *://*.google.mv/search?*
// @match              *://*.google.mw/search?*
// @match              *://*.google.ne/search?*
// @match              *://*.google.nl/search?*
// @match              *://*.google.no/search?*
// @match              *://*.google.nr/search?*
// @match              *://*.google.nu/search?*
// @match              *://*.google.pl/search?*
// @match              *://*.google.pn/search?*
// @match              *://*.google.ps/search?*
// @match              *://*.google.pt/search?*
// @match              *://*.google.ro/search?*
// @match              *://*.google.rs/search?*
// @match              *://*.google.ru/search?*
// @match              *://*.google.rw/search?*
// @match              *://*.google.sc/search?*
// @match              *://*.google.se/search?*
// @match              *://*.google.sh/search?*
// @match              *://*.google.si/search?*
// @match              *://*.google.sk/search?*
// @match              *://*.google.sm/search?*
// @match              *://*.google.sn/search?*
// @match              *://*.google.so/search?*
// @match              *://*.google.sr/search?*
// @match              *://*.google.st/search?*
// @match              *://*.google.td/search?*
// @match              *://*.google.tg/search?*
// @match              *://*.google.tl/search?*
// @match              *://*.google.tm/search?*
// @match              *://*.google.tn/search?*
// @match              *://*.google.to/search?*
// @match              *://*.google.tt/search?*
// @match              *://*.google.vu/search?*
// @match              *://*.google.ws/search?*
// @exclude            *://www.google.com/sorry*
// @exclude            *://www.baidu.com/link*
// @exclude            *://www.sogou.com/link*
// @exclude            *://so.toutiao.com/search/jump*
// @connect            self
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
// @grant              GM_addElement
// @grant              GM_registerMenuCommand
// @grant              GM.registerMenuCommand
// @grant              GM_xmlhttpRequest
// @grant              GM.xmlHttpRequest
// @note               {"CN":"🎉恭祝各位用户 𝟐𝟎𝟐𝟔 新年快乐，万事如意。🎊","EN":"🎉Wishing all users a happy New Year in 𝟐𝟎𝟐𝟔.🎊"}
// @note               {"CN":"更新 2026 年度脚本版权信息（第十一年度）。","EN":"Updated script copyright information in 2026."}
// @note               {"CN":"修复 Bing.com 新的灰度测试中搜索过滤问题。","EN":"Fixed search filter issue in Bing's A/B test."}
// @note               {"CN":"修复部分搜索引擎跳转按钮的样式问题。","EN":"Fixed jump buttons issue of some search engine."}
// @note               {"CN":"修正一些已知问题，优化代码，优化样式。","EN":"Fixed some known issues, optimized code & style."}
// @compatible         edge version≥88 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Chrome version≥88 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Firefox version≥78 (Compatible Greasemonkey, Tampermonkey, Violentmonkey)
// @compatible         Opera version≥75 (Compatible Tampermonkey, Violentmonkey)
// @compatible         Safari version≥14 (Compatible Tampermonkey, Userscripts)
// @license            GPL-3.0-only
// @copyright          2015-2026, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (ctx, uctx, sctx, searchEngineAssistant, arrayProxy, customFns) {
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
    safeJSON: sctx.JSON.parse ? sctx.JSON : ctx.JSON.parse ? ctx.JSON : JSON ?? uctx.JSON,
    info: typeof GM_info !== "undefined" ? GM_info : typeof GM !== "undefined" && GM.info ? GM.info : { script: {} },
  };
  const wrappedFrom = ctx.wrappedJSObject ? ctx.Array.from : toolkit.safeArray.from;
  const asArray = o => (arrayProxy.method.every(([k, v]) => Reflect.defineProperty(o, k, { value: v.bind(o), ...arrayProxy.option })), o);
  const orginalFns = { oS: sctx.Object.prototype.toString, hP: sctx.Object.prototype.hasOwnProperty, aF: (...af) => wrappedFrom(...af), aS: (...as) => asArray(wrappedFrom(...as)) };
  typeof ctx.navigation === "undefined" && ["pushState", "replaceState"].forEach(m => void (ctx.history[m] = customFns.eH(m)));
  searchEngineAssistant(ctx, uctx, toolkit, { ...orginalFns, ...customFns, cS: customFns.mS.filter(isNaN) });
})(
  typeof window !== "undefined" ? window : this,
  typeof unsafeWindow !== "undefined" ? unsafeWindow : this,
  ((originalWindow, iframe) => {
    if (typeof GM_addElement === "undefined") return originalWindow;
    try {
      const { contentWindow } = (iframe = GM_addElement("iframe", { id: "𝐬𝐚𝐟e.𝐰𝐢𝐧𝐝𝐨𝐰", style: "display:none", width: 0, height: 0 }));
      return !originalWindow.wrappedJSObject && iframe?.remove(), contentWindow ?? originalWindow;
    } catch (_) {
      return iframe?.remove(), originalWindow;
    }
  })(typeof window !== "undefined" ? window : this, null),
  function (global, GMunsafeWindow, secureVars, customFuntions) {
    "use strict";

    /* PERFECTLY COMPATIBLE FOR GREASEMONKEY, TAMPERMONKEY, VIOLENTMONKEY, USERSCRIPTS 2024-03-15 F9Y4NG */

    const { safeArray, safeObject, safeJSON, safeSandbox, debugging, info: GMinfo } = secureVars;
    const { atob, btoa, alert, prompt, confirm, console, setTimeout, requestAnimationFrame, cancelAnimationFrame } = safeSandbox;
    const { mS, cS, aF: arrayFrom, aS: asArray, oS: getObjectType, hP: hasOwnProperty, lS: localStorage, oC: object } = customFuntions;
    const GMversion = GMinfo.version ?? GMinfo.scriptHandlerVersion ?? "unknown";
    const GMscriptHandler = GMinfo.scriptHandler;
    const GMsetValue = gmSelector("setValue");
    const GMgetValue = gmSelector("getValue");
    const GMdeleteValue = gmSelector("deleteValue");
    const GMlistValues = gmSelector("listValues");
    const GMopenInTab = gmSelector("openInTab");
    const GMregisterMenuCommand = gmSelector("registerMenuCommand");
    const GMxmlhttpRequest = gmSelector("xmlhttpRequest");
    const GMcontextMode = gmSelector("contextMode");

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
        bing: Symbol(`${generateRandomString(10, "hex")}`),
        raf: Symbol.for(`𐠱${generateRandomString(10, "date")}𐠔`),
        caf: Symbol.for(`𐠱${generateRandomString(10, "date")}𐠲`),
        cssAttrName: `gb-css-${generateRandomString(8, "hex")}`,
        rndclassName: `SC${generateRandomString(8, "number")}`,
        rndstyleName: `SS${generateRandomString(8, "number")}`,
        rndadvName: `SA${generateRandomString(8, "number")}`,
        filtered: `ͼ${generateRandomString(6, "char")}ͼ`,
        disappear: `ͽ${generateRandomString(7, "date")}ͼ`,
        translucent: `ͼ${generateRandomString(7, "date")}ͽ`,
        rndButtonID: generateRandomString(10, "char"),
        visited: generateRandomString(6, "mix"),
        buttons: generateRandomString(6, "mix"),
        loading: generateRandomString(6, "char"),
        darkmode: generateRandomString(8, "mix"),
        leftButton: generateRandomString(6, "mix"),
        rightButton: generateRandomString(6, "mix"),
        scrollspan: generateRandomString(8, "char"),
        scrollbars: generateRandomString(8, "char"),
        scrollbarsV2: generateRandomString(8, "mix"),
        attachShadow: Element.prototype.attachShadow,
        stopImmediatePropagation: Event.prototype.stopImmediatePropagation,
        requestIdleCallback: global.requestIdleCallback?.bind(GMunsafeWindow) ?? ((callback, { timeout }) => sleep(timeout).then(callback)),
        const: { once: "gb-init-once", purge: "gd-purge-success", anti: "gd-anti-redirect", warn: "data-filter-warn", navinfo: "__Navigation#INFO__" },
      },
      var: {
        curVersion: getMetaValue("version") ?? GMinfo.script.version ?? "2026.01.01.0",
        scriptName: getMetaValue(`name:${getLanguages()}`) ?? decrypt("U2VhcmNoJTIwRW5naW5lJTIwQXNzaXN0YW50"),
      },
      url: {
        redundant: decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcubGlrZXMuZmFucyUyRnJlZHVuZGFudC1pc3N1ZQ=="),
        yandexIcon: decrypt("aHR0cHMlM0ElMkYlMkZmYXZpY29uLnlhbmRleC5uZXQlMkZmYXZpY29uJTJGdjI="),
        backupIcon: decrypt("aHR0cHMlM0ElMkYlMkZzMjEuYXgxeC5jb20lMkYyMDI1JTJGMDclMkYyMCUyRnBWOGVMaTYucG5n"),
        feedback: getMetaValue("supportURL") ?? GMinfo.script.supportURL ?? decrypt("aHR0cHMlM0ElMkYlMkZnaXRodWIuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGaXNzdWVz"),
        homepage: getMetaValue("homepageURL") ?? GMinfo.script.homepage ?? decrypt("aHR0cHMlM0ElMkYlMkZmOXk0bmcuZ2l0aHViLmlvJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJG"),
      },
      notice: {
        rName: generateRandomString(8, "char"),
        random: generateRandomString(6, "char"),
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
        hk: generateRandomString(6, "mix"),
        gj: generateRandomString(6, "mix"),
        lw: generateRandomString(6, "mix"),
        kh: generateRandomString(6, "mix"),
        ar: generateRandomString(6, "mix"),
        aa: generateRandomString(6, "mix"),
        au: generateRandomString(6, "mix"),
        grid: generateRandomString(7, "char"),
        card: generateRandomString(7, "char"),
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
        let lastTime = performance.now();
        const timerSymbol = Symbol(type);
        const step = () => {
          const currentTime = performance.now();
          if (currentTime - lastTime < (Number(interval) || 0)) return this._setTimerMap(timerSymbol, type, step);
          type === "interval" ? (lastTime = currentTime) && this._setTimerMap(timerSymbol, type, step) : this.clearTimeout(timerSymbol);
          typeof fn === "function" && fn.apply(this.context, args);
        };
        this._setTimerMap(timerSymbol, type, step);
        return timerSymbol;
      }
      _setTimerMap(timerSymbol, type, step) {
        this.timerMap[type][timerSymbol] = GMunsafeWindow[def.const.raf](step);
      }
      _clearTimerMap(timerSymbol, type) {
        GMunsafeWindow[def.const.caf](this.timerMap[type][timerSymbol]);
        delete this.timerMap[type][timerSymbol];
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

    const rAF = new RAF(global);

    /* GLOBAL_GENERAL_FUNCTIONS */

    function gmSelector(rec) {
      const gmFunctions = {
        setValue: typeof GM_setValue !== "undefined" ? GM_setValue : typeof GM !== "undefined" ? GM.setValue : localStorage?.setItem.bind(localStorage),
        getValue: typeof GM_getValue !== "undefined" ? GM_getValue : typeof GM !== "undefined" ? GM.getValue : localStorage?.getItem.bind(localStorage),
        deleteValue: typeof GM_deleteValue !== "undefined" ? GM_deleteValue : typeof GM !== "undefined" ? GM.deleteValue : localStorage?.removeItem.bind(localStorage),
        listValues: typeof GM_listValues !== "undefined" ? GM_listValues : typeof GM !== "undefined" ? GM.listValues : () => safeObject.keys(localStorage ?? {}),
        openInTab: typeof GM_openInTab !== "undefined" ? GM_openInTab : typeof GM !== "undefined" ? GM.openInTab : global.open.bind(global),
        registerMenuCommand: typeof GM_registerMenuCommand !== "undefined" ? GM_registerMenuCommand : typeof GM !== "undefined" ? GM.registerMenuCommand : void 0,
        xmlhttpRequest: typeof GM_xmlhttpRequest !== "undefined" ? GM_xmlhttpRequest : typeof GM !== "undefined" ? GM.xmlHttpRequest : void 0,
        contextMode: GMinfo.injectInto === "content" || GMinfo.script["inject-into"] === "content" || ["dom", "js"].includes(GMinfo.sandboxMode),
      };
      return gmFunctions[rec] ?? __console("warn", `Grant 'GM.${rec}' is not available.`) ?? (() => {});
    }

    function __console(action, message, ...args) {
      const consoleMethods = {
        log: ["log", "%c\ud83d\udd33 %c", "display:inline-block", ""],
        error: ["error", "%c\ud83d\udea9 %c", "display:inline-block", ""],
        warn: ["warn", "%c\ud83d\udea9 %c", "display:inline-block", ""],
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

    function uniq(array) {
      return safeArray.isArray(array) ? arrayFrom(new Set(array)) : [];
    }

    function toString(value) {
      if (typeof value === "symbol") return value.description;
      return String(value);
    }

    function cE(nodeName, attributes) {
      const el = document.createElement(nodeName);
      if (getObjectType.call(attributes) !== "[object Object]") return el;
      for (const [key, value] of safeObject.entries(attributes)) {
        if (key === "class") safeArray.isArray(value) ? el.classList.add(...value) : el.classList.add(value);
        else if (["innerHTML", "textContent"].includes(key)) el[key] = value;
        else el.setAttribute(key, value);
      }
      return el;
    }

    function random({ range, length = 1, type = "round" }) {
      const typedArray = global.crypto.getRandomValues(new Uint32Array(Number(length) || 1));
      return arrayFrom(typedArray, a => (Math[type] ?? Math.round)((a / 0xffffffff) * (Number(range) || 10)));
    }

    function gCS(node, opt = null) {
      if (node?.nodeType !== Node.ELEMENT_NODE) return new Proxy(object(), { get: () => NaN });
      return global.getComputedStyle(node, opt);
    }

    function capitalize(string) {
      string = String(string ?? "").toLowerCase();
      return string.replace(/\b[a-z]|\s[a-z]/g, str => str.toUpperCase());
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

    function generateRandomString(length, type, p, m = mS, c = cS) {
      if (type === "date") return (p = new Date()), (p = (p.setHours(10, 20, 30, 40) * p.getDate()).toString(16)).padEnd(length, p);
      if (type === "hex" || type === "number") return (p = type === "hex" ? 16 : 10), arrayFrom(random({ range: p, length, type: "floor" }), v => v.toString(p)).join("");
      return (p = type === "mix" ? m : c), arrayFrom(random({ range: p.length, length }), (v, i) => (p === m && !i ? c[random({ range: 70 })] : p[v])).join("");
    }

    function reload() {
      return sleep(5e2, { useCachedSetTimeout: true }).then(() => global.location.reload(true));
    }

    function escapeHTML(string) {
      if (typeof string !== "string") return "";
      const element = cE("gb-escape-html", { textContent: string });
      return element.innerHTML;
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

    function checkRedundantScript(global) {
      const reportRedundanceError = () => {
        const errorText = IS_CHN
          ? `\ud83d\udea9【脚本冗余警告】发现冗余安装的脚本: "${def.var.scriptName}"，如刷新后问题依旧，请访问 ${def.url.redundant} 排查错误。`
          : `\ud83d\udea9 [Redundance Warning] Found Redundant Scripts: '${def.var.scriptName}', if persists after reloading, please visit ${def.url.redundant} to troubleshoot.`;
        const troubleshoot = `\ufff8\ud83d\uded1 ${IS_CHN ? "发现冗余安装的脚本，点击排查！" : "Troubleshoot Redundant Issue"}`;
        return CUR_WINDOW_TOP && (__console("error", errorText), GMregisterMenuCommand(troubleshoot, () => GMopenInTab(`${def.url.feedback}/117`, false))), true;
      };
      const contentText = IS_CHN ? `警告：脚本的注入模式已设置为"content"，部分脚本功能可能受到限制。` : `Warning: The injection mode is set to "content" and some functions may be limited.`;
      if (GMcontextMode && CUR_WINDOW_TOP) __console("warn", `${def.var.scriptName} ${contentText}`);
      if (global[def.const.const.once] === true || document.documentElement?.hasAttribute(def.const.const.once)) return reportRedundanceError();
      (global[def.const.const.once] = true) && safeObject.freeze(def.const) && document.documentElement?.setAttribute(def.const.const.once, "");
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

    function getLocationInfo() {
      const { host: h, hostname: hN, pathname: pN, protocol: pT } = global.location;
      const iT = global.self === global.top;
      return { h, hN, pN, pT, iT };
    }

    function getMetaValue(str) {
      const queryRegexp = new RegExp(`//\\s+@${toString(str)}\\s+(.+)`);
      const metaValue = (GMinfo.scriptMetaStr || GMinfo.scriptSource)?.match(queryRegexp);
      return metaValue?.[1] ?? ((str = str.match(/^name:([a-zA-Z-]+)$/)) && GMinfo.script.locales?.[str[1]]?.name);
    }

    function getLanguages(lang = navigator.language) {
      const languages = new Set(["zh-CN", "zh-TW", "en", "ja", "ru"]);
      return languages.has(lang) ? lang : lang.startsWith("zh") ? "zh-TW" : "en";
    }

    function setDebuggerMode() {
      const key = decrypt("\u0052\u006a\u006c\u0035\u004e\u0047\u0035\u006e");
      const value = new URLSearchParams(global.location.search).get("whoami");
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

    function throttle({ fn, timer, delay, immed = false }) {
      if (typeof fn !== "function" || !timer) return () => {};
      return function (...args) {
        const [name, context] = [Symbol.for(toString(timer)), this];
        if (def.count[name]) return;
        if (immed && def.count[name] !== null) fn.apply(context, args);
        def.count[name] = rAF.setTimeout(() => ((def.count[name] = null), fn.apply(context, args)), Number(delay) || 0);
      };
    }

    function deBounce({ fn, timer, delay, immed = false, once = false }) {
      if (typeof fn !== "function" || !timer) return () => {};
      return function (...args) {
        const [name, context] = [Symbol.for(toString(timer)), this];
        if (immed === true && typeof def.count[name] === "undefined") {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
        } else if (def.count[name]) {
          if (def.count[name] === true) return true;
          rAF.clearTimeout(def.count[name]);
        }
        def.count[name] = rAF.setTimeout(() => {
          fn.apply(context, args);
          if (once === true) return (def.count[name] = true);
          delete def.count[name];
        }, Number(delay) || 0);
      };
    }

    function safeRemoveNode(expr, scope) {
      if (!expr) return false;
      const pendingNodes = safeArray.isArray(expr) ? expr : typeof expr === "string" ? qA(expr, scope) : [1, 3, 8].includes(expr?.nodeType) ? [expr] : [];
      return pendingNodes.every(el => el.remove() || el.parentNode === null);
    }

    void (async function (tTP, JSON, navigatorInfo) {
      const [CONFIGURE, VERSION, AUTOCHECK, RESULTFILTER, REMOTEICONS] = ["_configures_", "_version_", "_autoupdate_", "_resultFilter_", "_remoteicons_"];
      const { engine, creditEngine, brand, voucher } = (navigatorInfo =
        JSON.parse(navigatorInfo || null) || (sessionStorage?.setItem(def.const.const.navinfo, JSON.stringify((navigatorInfo = await getNavigatorInfo()))), navigatorInfo));
      const [IS_REAL_BLINK, IS_REAL_GECKO, IS_REAL_WEBKIT] = ["Blink", "Gecko", "WebKit"].map(cE => cE === creditEngine);
      const IS_CHEAT_UA = voucher === null && (engine !== creditEngine || checkBlinkCheatingUA(navigator.userAgentData));
      const IS_GREASEMONKEY = ["Greasemonkey", "Userscripts", "FireMonkey", "tamp", "OrangeMonkey"].includes(GMscriptHandler);
      const createNoticeHTML = html => `<div class="${def.notice.rName}"><dl>${html}</dl></div>`;

      const cache = {
        value: (data, eT) => ({ data, expired: Date.now() + (typeof eT === "number" ? eT : 6048e5) }),
        set: (key, ...options) => void GMsetValue(key, encrypt(JSON.stringify(cache.value(...options)))),
        get: async key => {
          try {
            const encryptedValue = await GMgetValue(key);
            if (!encryptedValue) return;
            const current = Date.now();
            const { data, expired } = JSON.parse(decrypt(encryptedValue));
            return data && expired > current ? data : cache.remove(key);
          } catch (_) {
            return cache.remove(key);
          }
        },
        remove: key => void GMdeleteValue(key),
      };

      class NoticeX {
        constructor(options = {}) {
          const animation = { open: `${def.notice.animated} ${def.notice.random}_fadeIn`, close: `${def.notice.animated} ${def.notice.random}_fadeOut` };
          const callbacks = { beforeShow: [], onShow: [], afterShow: [], beforeClose: [], onClose: [], afterClose: [], onClick: [], onHover: [] };
          this.options = { title: "", text: "", type: def.notice.success, position: "bottomRight", newestOnTop: false, timeout: 2e3, progressBar: true };
          safeObject.assign(this.options, { closeWith: ["button"], animation, width: 400, scroll: { maxHeight: 400, showOnHover: false }, callbacks, ...options });
        }
        static close(item) {
          if (!item) return true;
          item.classList.add(def.notice.animated, `${def.notice.random}_fadeOut`);
          const closetNode = item.closest(`.${def.notice.noticeX}`);
          const position = closetNode?.className.match(/\b(\w+-\w+)\b/)?.[1] || `${def.notice.noticeX}-topRight`;
          return sleep(3e2).then(() => safeRemoveNode(item) && !qA(`.${position} .${def.notice.item}`).length && safeRemoveNode(`.${position}`));
        }
        show() {
          return this._createContainer(), this._appendNoticeX(this._createHeader(), this._createBody(), this._createProgressBar());
        }
        _createContainer() {
          const position = `${def.notice.noticeX}-${this.options.position}`;
          if (qS(`gb-notice.${position}`)) return;
          const container = cE("gb-notice", { class: [def.notice.noticeX, position, def.notice.appear] });
          document.documentElement?.appendChild(container);
        }
        _createHeader() {
          if (!this.options.title && !this.options.closeWith.includes("button")) return null;
          const header = cE("div", { class: `${def.notice.noticeX}-heading` });
          if (this.options.title) header.innerHTML += tTP.createHTML(`<span class="${def.notice.noticeX}-heading-title" title="${this.options.title}">${this.options.title}</span>`);
          if (this.options.closeWith.includes("button")) header.appendChild(cE("div", { class: def.notice.close, innerHTML: tTP.createHTML("&times;") }));
          return header;
        }
        _createBody() {
          const body = cE("div", { class: `${def.notice.noticeX}-body` });
          const content = cE("div", { class: `${def.notice.noticeX}-content`, innerHTML: tTP.createHTML(this.options.text) });
          body.appendChild(content);
          if (this.options.scroll.maxHeight) {
            body.style.cssText += `overflow-y:auto;max-height:min(calc(92vh - 50px), ${this.options.scroll.maxHeight}px)`;
            if (this.options.scroll.showOnHover) body.style.visibility = "hidden";
          }
          return body;
        }
        _createProgressBar() {
          const progressBar = cE("div", { class: `${def.notice.noticeX}-progressbar` });
          const bar = cE("div", { class: `${def.notice.noticeX}-bar` });
          progressBar.appendChild(bar);
          if (this.options.progressBar && typeof this.options.timeout === "number") {
            progressBar.style.animation = `${def.notice.noticeX}-progress ${this.options.timeout / 1e3}s linear forwards`;
            sleep(this.options.timeout).then(item => (item = progressBar.closest(`div.${def.notice.item}`)) && this._closeWithAnimation(item));
          }
          return progressBar;
        }
        _appendNoticeX(header, body, progressBar) {
          const target = qS(`.${def.notice.noticeX}-${this.options.position}`);
          const noticeItem = cE("div", { class: [def.notice.item, this.options.type] });
          if (this.options.width && Number.isInteger(this.options.width)) noticeItem.style.width = `${this.options.width}px`;
          [header, body, progressBar].forEach(el => el && noticeItem.appendChild(el));
          if (["top", "bottom"].includes(this.options.position)) target.textContent = "";
          if (this.options.animation.open) noticeItem.className += ` ${this.options.animation.open}`;
          this._executeCallbacks("beforeShow");
          this._addListeners(noticeItem);
          this._executeCallbacks("onShow");
          this.options.newestOnTop ? target.insertAdjacentElement("afterbegin", noticeItem) : target.appendChild(noticeItem);
          this._executeCallbacks("afterShow");
          return noticeItem;
        }
        _closeWithAnimation(item) {
          if (this.options.animation?.close) sleep(5e2)((item.className += ` ${this.options.animation.close}`)).then(() => this._closeItem(item));
          else this._closeItem(item);
        }
        _addListeners(item) {
          const closeBtn = qS(`.${def.notice.close}`, item);
          if (this.options.closeWith.includes("button")) closeBtn?.addEventListener("click", () => this._closeItem(item));
          if (this.options.closeWith.includes("click")) {
            item.style.cursor = "pointer";
            item.addEventListener("click", e => e.target.className !== def.notice.close && (this._executeCallbacks("onClick"), this._closeItem(item)));
          } else item.addEventListener("click", e => e.target.className !== def.notice.close && this._executeCallbacks("onClick"));
          item.addEventListener("mouseenter", () => this._executeCallbacks("onHover"));
        }
        _closeItem(item) {
          const position = item.closest(`.${def.notice.noticeX}`)?.className.match(/\b(\w+-\w+)\b/)?.[1] || `${def.notice.noticeX}-bottomRight`;
          this._executeCallbacks("beforeClose");
          sleep(3e2)
            .then(() => this._executeCallbacks("onClose"))
            .then(() => safeRemoveNode(item) && !qA(`.${position} .${def.notice.item}`).length && safeRemoveNode(`.${position}`) && this._executeCallbacks("afterClose"));
        }
        _executeCallbacks(eventName) {
          this.options.callbacks[eventName]?.forEach(cb => cb.call(this));
        }
      }

      function checkBlinkCheatingUA(uad) {
        if (!IS_REAL_BLINK) return false;
        return (global.isSecureContext && !uad) || (uad && toString(uad) !== "[object NavigatorUAData]");
      }

      function insertAfter(newNode, target) {
        if (newNode && target) target.parentNode.insertBefore(newNode, target.nextElementSibling);
      }

      function getSheetMetadata(sheet) {
        const rootRule = sheet.cssRules[0];
        if (!rootRule || rootRule.selectorText !== ":host(sheet-metadata)") return object();
        const rawValue = rootRule.style.getPropertyValue("--sheet-metadata");
        return rawValue ? JSON.parse(rawValue.trim()) : object();
      }

      function createStyleSheet(id, css, primary, sheet) {
        const metadata = `:host(sheet-metadata){--sheet-metadata:${JSON.stringify({ id, ...(primary && { [def.const.cssAttrName]: false }) })}}`;
        return (sheet = new CSSStyleSheet()), sheet.media.appendMedium("all"), sheet.replaceSync(css), sheet.insertRule(metadata, 0), sheet;
      }

      function updateAdoptedStyleSheets(target, css, id) {
        const isShadowRoot = target instanceof ShadowRoot;
        try {
          if (typeof target.adoptedStyleSheets?.push !== "function") throw new Error("use inlineStyle");
          if (asArray(target.adoptedStyleSheets).SomeX(sheet => getSheetMetadata(sheet).id === id)) return true;
          return target.adoptedStyleSheets.push(createStyleSheet(id, css, !isShadowRoot, null)) && true;
        } catch (error) {
          try {
            target = isShadowRoot ? target : target.head;
            if (qS(`style#${id}`, target)) return true;
            const option = { id, media: "all", type: "text/css", textContent: css, ...(!isShadowRoot && { [def.const.cssAttrName]: false }) };
            if (typeof GM_addElement !== "undefined") return GM_addElement(target, "style", option) && true;
            return target.appendChild(cE("style", option)) && true;
          } catch (e) {
            error && ERROR(`${e.name} in UpdateAdoptedStyleSheets:`, e.message, `(${error.message})`);
          }
        }
      }

      function findAdoptedStyleSheet(id) {
        return Boolean(qS(`style#${id}`, document.head) || asArray(document.adoptedStyleSheets).SomeX(s => getSheetMetadata(s).id === id));
      }

      function getUrlParam(parameter) {
        try {
          switch (getObjectType.call(parameter)) {
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
          return ERROR(`${e.name} in GetUrlParam:`, e.message) ?? "";
        }
      }

      function versionCompare(current, compare) {
        const [currentVersion, compareVersion] = [current.split(".").map(Number), compare.split(".").map(Number)];
        if (compareVersion.length !== currentVersion.length) return true;
        for (let i = 0; i < currentVersion.length; i++) if (compareVersion[i] !== currentVersion[i]) return compareVersion[i] > currentVersion[i];
        return false;
      }

      function manageCookies() {
        return {
          getItem: sKey => decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + sKey?.replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null,
          setItem: function ({ sKey, sValue, sEnd, sPath, sDomain, sSameSite, sSecure }) {
            if (!sKey || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(sKey)) return false;
            [sDomain, sPath, sSameSite, sSecure] = [sDomain ? `;domain=${sDomain}` : "", sPath ? `;path=${sPath}` : "", sSameSite ? `;SameSite=${sSameSite}` : "", sSecure ? ";secure" : ""];
            const sExpires = typeof sEnd === "number" ? `;expires=${new Date(Date.now() + sEnd * 24 * 60 * 60 * 1000).toUTCString()}` : `;expires=Sat, 23 Oct 2099 13:31:44 GMT`;
            document.cookie = `${sKey}=${sValue}${sExpires}${sDomain}${sPath}${sSameSite}${sSecure}`;
            return true;
          },
          removeItem: function ({ sKey, sPath, sDomain }) {
            if (!sKey || !new RegExp("(?:^|;\\s*)" + sKey.replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie)) return false;
            document.cookie = `${sKey}=;expires=Thu, 01 Jan 1970 00:00:00 GMT${sDomain ? `;domain=${sDomain}` : ""}${sPath ? `;path=${sPath}` : ""}`;
            return true;
          },
        };
      }

      void (async function (getConfigureData, getResultFilterData, requestRemoteIcon, GMnotification) {
        let [_config_date_, { trigger: antiResultsFilter, filter: resultFilters }] = await Promise.all([getConfigureData(), getResultFilterData()]);
        const { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine, localWindow, googleJump, antiLinkRedirect, antiAds, customColor } = _config_date_;
        const [gbCookies, cachedRequestLinks, usedFilterWords, selectedSite] = [manageCookies(), antiLinkRedirect ? new Map() : null, antiResultsFilter ? new Set() : null, []];

        /* ANTIREDIRECT_FUNCTIONS */

        function validateOptions(options) {
          return {
            useNewTab: options.useNewTab || false,
            forceSelf: options.forceSelf || false,
            forceNewTab: options.forceNewTab || false,
            cleanAttr: options.cleanAttr || [],
            removeDataSet: options.removeDataSet || false,
            advancedAnti: options.advancedAnti || false,
          };
        }

        function updateNodeAttributes(options, node, result = 0) {
          if (options.useNewTab && ++result) node.setAttribute("target", "_blank");
          if (options.forceSelf && ++result) node.setAttribute("target", "_self");
          if (safeArray.isArray(options.cleanAttr) && options.cleanAttr.length > 0 && ++result) options.cleanAttr.forEach(item => node.removeAttribute(item));
          if (options.removeDataSet && ++result) safeObject.keys(node.dataset).forEach(ds => delete node.dataset[ds]);
          if (options.forceNewTab && ++result) node.addEventListener("click", e => forceNewTabAction(e, node));
          if (result) node.setAttribute(def.const.const.purge, "");
        }

        function forceNewTabAction(event, node) {
          stopEventPropagation(event) ?? GMopenInTab(getRealHref(node), false);
          event.currentTarget.getAttribute(def.const.const.anti) === "success" && event.currentTarget.classList.add(def.const.visited);
        }

        function stopEventPropagation(event, { prevent = true } = {}) {
          if (prevent) event.preventDefault();
          try {
            def.const.stopImmediatePropagation.call(event);
          } catch (_) {
            event.stopImmediatePropagation();
          }
        }

        function getRealHref(node) {
          const realHref = node?.getAttribute("gb-real-href");
          return (realHref?.startsWith("\u0061\u0030") && new URL(decrypt(realHref.slice(2, -1)), location).href) || node?.href || "about:blank";
        }

        function setAdvancedAntiRedirect(node, tasks, siteName) {
          node.setAttribute(def.const.const.anti, "pending");
          const task = advancedAntiRedirection(siteName, node, () => Promise.resolve(NaN));
          if (typeof task === "function") tasks.push(task);
        }

        function parsingAntiRedirect(siteName, selectors, options) {
          if (typeof selectors !== "string" || selectors.trim() === "") return;
          options = validateOptions(options);
          const selectorArray = selectors.split(/,(?![^()]*\))/g);
          const queryString = selectorArray.map(item => `${item}:not([href^='javascript:' i]):not([href^='#']):not([${def.const.const.anti}])`).join(",");
          const aNodes = qA(queryString).filter(node => {
            node.hasAttribute(def.const.const.purge) &&
              ((options.useNewTab && node.target !== "_blank") ||
                (options.forceSelf && node.target !== "_self") ||
                (safeArray.isArray(options.cleanAttr) && asArray(options.cleanAttr).SomeX(attr => node.hasAttribute(attr))) ||
                (options.removeDataSet && safeObject.keys(node.dataset).length > 0)) &&
              node.removeAttribute(def.const.const.purge);
            return !node.hasAttribute(def.const.const.purge);
          });
          if (aNodes.length === 0) return;
          COUNT(`[${siteName}-Anti-Redirect]`);
          const taskList = aNodes.reduce((tasks, node) => {
            updateNodeAttributes(options, node);
            options.advancedAnti && setAdvancedAntiRedirect(node, tasks, siteName);
            return tasks;
          }, []);
          parallelTasks(taskList, 10);
        }

        function fetchData(url, resolve, reject, readystate, error, timeout) {
          const headers = { Accept: "*/*", Referer: global.location.origin.replace(/^http:/i, "https:") };
          const [onload, onerror, ontimeout] = [readystate(resolve, reject), error(reject, resolve), timeout(reject)];
          GMxmlhttpRequest({ url, headers, method: "GET", fetch: true, timeout: 25e3, onload, onerror, ontimeout });
        }

        async function getRealUrl(url, node, name, { onloadFunc, onerrorFunc, ontimeoutFunc }) {
          try {
            const res = await new Promise((resolve, reject) => {
              if (!cachedRequestLinks.has(url)) {
                cachedRequestLinks.set(url, null);
                fetchData(url, resolve, reject, onloadFunc, onerrorFunc, ontimeoutFunc);
              } else reject(new RangeError("DuplicateLinksError"));
            });
            return handleSuccess(res, url, node);
          } catch (e) {
            return handleError(e, url, node, name);
          }
        }

        function handleSuccess(res, url, node) {
          antiResultsFilter &&
            asArray(resultFilters).SomeX(filter => new RegExp(filter, "i").test(res)) &&
            node.insertAdjacentHTML("beforeend", tTP.createHTML(`<div class="${def.const.filtered}">${res}</div>`));
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
            ERROR(`${e.name} in AntiRedirect_%s: %s %O`, name, e?.message, { Node: node, Text: node.textContent, URL: node.href });
          }
        }

        function handleDuplicateLinksError(url, node) {
          def.count.duplicate++;
          const attemptToFindCacheLink = rAF.setInterval(() => {
            const cachedRealLinks = cachedRequestLinks.get(url);
            if (!cachedRealLinks) return;
            if (cachedRealLinks === url) setErrorLink(node);
            else {
              DEBUG("Duplicate link:", { node, url: cachedRealLinks });
              setRealLink(node, cachedRealLinks);
            }
            def.count.duplicate--;
            toggleLoadClass(node)?.remove();
            rAF.clearInterval(attemptToFindCacheLink);
          }, 2e2);
        }

        function toggleLoadClass(node) {
          if (node && IS_DEBUG) return { remove: () => node.classList.remove(def.const.loading), add: () => node.classList.add(def.const.loading) };
        }

        function handleBingLink(e) {
          const node = e.target;
          node?.nodeName === "A" && node.getAttribute(def.const.const.anti) === "success" && (stopEventPropagation(e) ?? node.setAttribute("href", getRealHref(node)));
        }

        function setRealLink(node, url) {
          node.href = url;
          if (CUR_HOST_NAME.endsWith(".bing.com")) {
            const actions = ["mouseenter", "mouseleave", "mouseout", "mousedown", "mouseup", "blur", "keyup"];
            !global[def.const.bing] && actions.forEach(act => void document.addEventListener(act, handleBingLink, (global[def.const.bing] = true)));
            node.setAttribute("gb-real-href", `\x61\x30${encrypt(url)}\x3d`);
          }
          IS_REAL_WEBKIT && node.setAttribute("title", url);
          node.setAttribute(def.const.const.anti, "success");
        }

        function setErrorLink(node) {
          node.classList.add(def.notice.linkerror);
          node.setAttribute(def.const.const.anti, "failed");
          node.setAttribute("title", `${IS_CHN ? "此链接可能不再可用，您仍可尝试访问它。" : "This link may no longer be available, you can still try to access it."}`);
        }

        function handlePageCheck(count) {
          DEBUG(`(${count ?? cachedRequestLinks.size}) Task Done! (${def.count.duplicate}) Dup.Task!`);
          if (antiLinkRedirect && cachedRequestLinks.size > 0 && def.count.duplicate === 0) !cachedRequestLinks.clear() && DEBUG("Task Clear!");
          if (antiResultsFilter && usedFilterWords.size > 0) !usedFilterWords.clear() && DEBUG("Filter Clear!");
        }

        function parallelTasks(tasks, maxCount = 3) {
          const taskLength = tasks.length;
          if (taskLength === 0) return;
          let [currentIndex, finishedCount] = [0, 0];
          const taskCount = Math.min(maxCount, taskLength);
          function nextTask() {
            if (currentIndex >= taskLength) return;
            const task = tasks[currentIndex++];
            task().then(result => void (++finishedCount === taskLength ? deBounce({ fn: handlePageCheck, delay: 1e3, timer: "doTask" })(result) : nextTask()));
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
          const resUrl = response.responseHeaders?.match(/Location:\s*([\S]+)/i)?.[1] || response.finalUrl || response.responseURL || url;
          if (/^2\d{2}$/.test(response.status)) {
            if (response.statusText === "Intercepted by the IDM Advanced Integration") reportIDMHijacking();
            resolve(resUrl);
          } else if (response.status !== 0) resUrl === url ? reject(new Error("ResponseError")) : resolve(resUrl);
        }

        function getNodeDecodeURI(siteName, url, node) {
          switch (siteName) {
            case "Bing": {
              const uParam = new URL(url).searchParams.get("u");
              const u = uParam?.startsWith("a1") ? decrypt(uParam.slice(2).replace(/_/g, "/").replace(/-/g, "+")) : null;
              return !/[\u0080-\u00FF]/g.test(u) && u;
            }
            case "Sogou": {
              const target = qA(`.vrwrap`).FindX(el => el.contains(node));
              return target && qS(`div.r-sech[style="display:none"]`, target)?.dataset.url;
            }
            case "Toutiao":
              return decodeURIComponent(new URL(url).searchParams.get("url") ?? "") || node.href;
            case "Yahoo":
              return decodeURIComponent(url.match(/(\/RU|&rurl|&imgurl)=([^/&]+)(\/|&)/)?.[2] ?? "") || node.href;
            default:
              return;
          }
        }

        async function getNoneXHRDecodeURI(url, node, siteName, decodeUrl) {
          try {
            const d = await new Promise((resolve, reject) => {
              if (!cachedRequestLinks.has(url)) {
                cachedRequestLinks.set(url, null);
                resolve(decodeUrl || url);
              } else reject(new RangeError("DuplicateLinksError"));
            });
            return handleSuccess(d, url, node);
          } catch (e) {
            return handleError(e, url, node, siteName);
          }
        }

        function getXHRDecodeURI(url, node, siteName) {
          return getRealUrl(url, node, siteName, {
            onloadFunc: (resolve, reject) => response => {
              if (response.readyState !== 4) return;
              if (response.status === 200) {
                let resUrl = response.finalUrl || response.responseURL || url;
                if (resUrl === url) {
                  const resText = response.responseText || response.response || "";
                  const res = resText.match(/URL\s*=\s*'([^']+)'/) || resText.match(/var\s+u\s*=\s*"([^"]+)"\s*;\s*\r\n/i) || response.responseHeaders?.match(/Location:\s*([\S]+)/i);
                  if (res) resUrl = res[1];
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
          });
        }

        function advancedAntiRedirection(siteName, node, task) {
          if (!node?.href) return;
          const url = node.href.replace(/^http:/i, "https:");
          toggleLoadClass(node)?.add();
          switch (siteName) {
            case "Baidu":
              return () => getXHRDecodeURI(url, node, siteName);
            case "So360":
              return (data = node.dataset.mdurl) => (data ? getNoneXHRDecodeURI(url, node, siteName, data) : getXHRDecodeURI(url, node, siteName));
            case "Sogou":
            case "Bing":
              return (data = getNodeDecodeURI(siteName, url, node)) => (data ? getNoneXHRDecodeURI(url, node, siteName, data) : getXHRDecodeURI(url, node, siteName));
            case "Toutiao":
            case "Yahoo":
              return () => getNoneXHRDecodeURI(url, node, siteName, getNodeDecodeURI(siteName, url, node));
            default:
              return task;
          }
        }

        /* ANTIADS_FUNCTIONS */

        const siteAdblockHandlers = {
          Bing: (siteName, clean) => {
            qA(`:is(#b_results,#b_context,#b_topw)>li:not(.${def.const.disappear})`).forEach(node => {
              const adv = qS("div.b_caption>p[class]", node);
              const adg = adv && gCS(adv, ":before");
              if (adg && adg.display === "inline-block" && adg.verticalAlign !== "middle") {
                COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
                node.classList.add(def.const.disappear);
                clean === true && safeRemoveNode(node);
              }
            });
          },
          Yandex: (siteName, clean) => {
            qS(`div.DistributionPopup_location_right-top.DistributionPopup_visible>button.Button.DistributionButtonClose_view_cross`)?.click();
            if (qA(".OrganicHost-Content .OrganicHost-Description>div>span[class$='-Text'],[class*='Organic_with']>[class*='Organic']>span[class$='-Text']").length === 0) return;
            COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
            qA("li[data-fast][class]").forEach(node => {
              const adsTxtNode = qS(".OrganicHost-Content .OrganicHost-Description>div>span[class$='-Text'],[class*='Organic_with']>[class*='Organic']>span[class$='-Text']", node);
              if (/^(?:ad|[РекламPeknam]{7})$/i.test(adsTxtNode?.textContent)) {
                node.classList.add(def.const.disappear);
                clean === true && safeRemoveNode(node);
              }
            });
          },
          So360: (siteName, clean) => {
            if (qA("ul.section>li span.txt>s, ul.result>li>div.res-recommend-tag").length === 0) return;
            COUNT(`[${siteName}-Anti-Ads-Deep-exp]`);
            qA("ul.section>li,ul.result>li").forEach(node => {
              const ads = qS("span[class='txt']>s", node);
              if (!ads?.textContent?.includes("\u5e7f\u544a") && !qS("div.res-recommend-tag", node)) return;
              node.classList.add(def.const.disappear);
              clean === true && safeRemoveNode(node);
            });
          },
          Duckduckgo: () => qS(`button[data-testid="serp-popover-promo-close"]:has(svg)`)?.click(),
          Qwant: () => qS(`button[class][aria-label="close"]:has(svg)`)?.click(),
        };

        function parseAntiAdvertising({ selectors, siteName, isRemoveNodes }) {
          if (selectors && typeof selectors === "string" && !findAdoptedStyleSheet(def.const.rndadvName)) {
            const cssText = `:root :is(${selectors}){display:none!important;opacity:0!important}`;
            updateAdoptedStyleSheets(document, cssText, def.const.rndadvName) && COUNT(`[${siteName}-Anti-Ads]`);
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
            ERROR(`${e.name} in AdvancedAntiAdvertising:`, e.message);
          }
        }

        /* PRELOAD_FUNCTIONS */

        async function fetchUpdateResponse(url, timeout = 1e4) {
          try {
            return await new Promise((resolve, reject) => {
              const headers = { Accept: "*/*", Referer: url };
              const onload = response => {
                if (response.readyState !== 4) return;
                if (response.status === 200) resolve({ res: response.responseText || response.response, url });
                else if (response.status !== 0) reject(new Error("NoAccessError"));
              };
              const onerror = () => reject(new Error("NetworkError"));
              const ontimeout = () => reject(new Error("TimeoutError"));
              GMxmlhttpRequest({ url, headers, method: "GET", nocache: true, timeout, onload, onerror, ontimeout });
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
              iconDataURL = DEBUG("%cRequest and initialize remote icon data.", "color:#25f") ?? (await requestRemoteIcon(remoteURL));
              if (!iconDataURL) DEBUG("%cRemote icon data initialized failed.", "color:#ff0000");
              else cache.set(REMOTEICONS, iconDataURL, 2592e6) ?? GMsetValue(VERSION, encrypt(def.var.curVersion)) ?? DEBUG("%cRemote icon data initialized successed.", "color:#006400");
            } else iconDataURL = DEBUG("%cApplied local icon caching data.", "color:#006400") ?? iconBase64Data;
          } catch (e) {
            ERROR(`FetchAndCacheRemoteIcons: Can't request the icon data.`, e?.message);
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
              splitTypeName: ["tn", "pd"],
              mainSelector: "#chat-input-main,#ci-main",
              overrideCss: `a,a em{text-decoration:none!important}:not([class^="page-inner"])>a:not(.${def.notice.linkerror}):hover{text-decoration:underline!important}#form{white-space:nowrap}#u{z-index:1!important}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;z-index:99999;right:var(--right,unset);margin:var(--margin,3px 0)!important;padding:0!important;display:inline-flex;justify-content:center;align-items:flex-start;flex-wrap:nowrap;height:40px}#${def.const.leftButton},#${def.const.rightButton}{margin:0 2px 0 0;height:42px}input{margin:0;height:40px;min-width:95px;border:none;outline:none;color:#fff;font-weight:500;font-size:17px;box-shadow:none;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px!important;border-radius:10px 0 0 10px;background:var(--background,linear-gradient(315deg,#286aff,#4e6ef2,#7274f9,#9f66ff))}#${def.const.rightButton} input{padding:0 18px 1px 12px!important;border-radius:0 10px 10px 0;background:var(--background,linear-gradient(135deg,#286aff,#4e6ef2,#7274f9,#9f66ff))}#${def.const.leftButton} input:hover{background:linear-gradient(#00000017,#00000017), linear-gradient(90deg,#286aff,#4e6ef2,#7274f9,#9f66ff)}#${def.const.rightButton} input:hover{background:linear-gradient(#00000017,#00000017), linear-gradient(270deg,#286aff,#4e6ef2,#7274f9,#9f66ff)}`,
              resultListProp: { qs: `#content_left div.c-container:not([tpl="recommend_list"]):not([tpl^="rel-"])`, delay: 10 },
              keywords: "#wrapper_wrapper em,.c-gap-top-small b",
              antiRedirectFn: () => {
                const selector = `.c-container a[href*='//www.baidu.com/link?url=']`;
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "baidu_ar" })("Baidu", selector, { useNewTab: true, removeDataSet: true, advancedAnti: true });
              },
              antiAdsFn: () => {
                const selectors = `#s-hotsearch-wrapper,#s_wrap,#bottom_layer,.result-op[tpl='sp_hot_sale'],.result-op[tpl='b2b_prod'],.result-op.cr-content[tpl^='recommend_list_'],#content_left>div:not([class]):not([style]),div[data-placeid],[id$='_canvas'],div.result.c-container:not([class~='xpath-log']),.imgpage .imglist>li.newfcImgli,.ec_wise_ad,div[class^='result-op'][tpl='right_tabs'][data-click],div[class^='result-op'][tpl='right_links'][data-click],#searchTag,#content_left>div.c-container[tpl="recommend_list"],#con-ar div:is([tpl='interactive'],[tpl="right_recommends_merge"]),div.result-op.cr-content:has([id='ai-accompanies-container']),div.result-molecule[tpl="app/rs"],.hint_right_top:has([tpl='app/hint-chat-entry']),.hint_right_middle:has([tpl='app/hint-head-top'])`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "baidu_ad", immed: true })({ selectors, siteName: "Baidu", isRemoveNodes: true });
              },
            },
            google: {
              siteTypeID: 2,
              siteButtonName: "𝐆𝐨𝐨𝐠𝐥𝐞",
              siteNickName: IS_CHN ? "𝐆𝐨𝐨𝐠𝐥𝐞 搜索" : "𝐆𝐨𝐨𝐠𝐥𝐞.𝐜𝐨𝐦",
              siteHostName: "www.google.com",
              webURL: "https://www.google.com/search?newwindow=1&sca_upv=1&source=hp&q=",
              imageURL: "https://www.google.com/search?newwindow=1&sca_upv=1&source=lnms&udm=2&sa=X&q=",
              imageType: ["2"],
              splitTypeName: "udm",
              mainSelector: "form button[type='submit']",
              overrideCss: `#pnnext>span:nth-child(2){clear:left}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:99999;display:inline-flex;margin:-1px 5px 0 -3px;justify-content:center;align-items:center;flex-wrap:nowrap}.ACRAdd{border-left:1px solid #dadce0;height:65%;padding:0 10px 0 0}#${def.const.leftButton},#${def.const.leftButton}{display:inline-block;margin:0 2px 0 0}input{margin:0;height:40px;min-width:90px;border:0;background:#0b57d0;color:#fff;box-shadow:0 0 2px #00000059;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px;border-radius:24px 0 0 24px}#${def.const.rightButton} input{padding:0 18px 1px 12px;border-radius:0 24px 24px 0}input:hover{opacity:.88}:host(.${def.const.scrollspan}){min-height:24px!important}.${def.const.scrollbars}{display:inline-block;margin:0;padding-bottom:0!important;height:24px!important;font-size:12px!important}`,
              darkModeCss: `:host(.${def.const.darkmode}) input{background:#c2e7ff;color:#001d35}:host(.${def.const.darkmode}) .ACRAdd{border-left:1px solid #f8f9fa40}:host(.${def.const.darkmode}) input:hover{opacity:.85}}`,
              resultListProp: { qs: `div.MjjYud div.Ww4FFb.vt6azd[data-hveid^="C"][data-hveid$="AA"]:not(:has(div[jscontroller="TvBckd"]))`, delay: 10 },
              keywords: ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe",
              antiRedirectFn: () => {
                const selector = `#rcnt div[data-hveid^='C'][data-hveid$='AA'] :not(h3.ob5Hkd,.d0fCJc)>a:not(.ngTNl,.oRJe3d,.k8XOCe,[jsname='ZWuC2'],.fl,#pnprev,#pnnext)`;
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "google_ar" })("Google", selector, { useNewTab: true, cleanAttr: ["ping"], removeDataSet: true });
              },
              antiAdsFn: () => {
                const selectors = `div[aria-label='\u5e7f\u544a'],div[aria-label='Ads' i],#bottomads,#tvcap`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "google_ad", immed: true })({ selectors, siteName: "Google" });
              },
            },
            bing: {
              siteTypeID: 3,
              siteButtonName: "𝐁𝐢𝐧𝐠 ®",
              siteNickName: IS_CHN ? "𝐁𝐢𝐧𝐠 搜索" : "𝐁𝐢𝐧𝐠.𝐜𝐨𝐦",
              siteHostName: "www.bing.com",
              webURL: "https://www.bing.com/search?qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&hta=off&q=",
              imageURL: "https://www.bing.com/images/search?qs=n&form=QBILPG&sp=-1&lq=0&sc=0-0&hta=off&first=1&q=",
              imageType: ["images"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: `.b_searchboxForm>input[type="hidden"][name="form"]`,
              overrideCss:
                `html{overflow-x:hidden}.${def.const.scrollbarsV2}\\.width{width:max-content!important;z-index:999!important}` +
                `#b_content{--smtc-ctrl-link-foreground-brand-rest:#3c3c3c}a,#b_content :is(.b_slidebar h2 a,.b_gwaDlTitle,#b_context .mediumCardTitle,main .b_tranthis,.nslist_card_title,.nscardlite_title,.nscardcal_title,.product-card-info--title,#b_results :is(li a.feedback-binded,li.b_vtl_deeplinks>a,li:not(:has(.b_loccardans)) :not(.b_rc_gb_sub_title,.mmtitle,#mt_tleWrp h2,#ns_mag_ht h2,.b_rcGbMod,.b_paractl)>a:not(.iacf_head,.vsb_tr_t,.b_wikiGbModHero,.wiki_seemore,.gs_mdlink,[role='button'],:has(.b_dynamicMrsSuggestionText),.acf_p_title,#imc_pbtn),.b_no a,.na_t,.l_ecrd_txt_gl>h2,.b_RichCardAnswerV2 .b_paractl>a)){color:#2440b3}#b_content #b_results .product-card-info--title{color:#2440b3!important}a:visited,#b_content :is(.b_slidebar h2 a,.b_gwaDlTitle,#b_context .mediumCardTitle,main .b_tranthis,.nslist_card_title,.nscardlite_title,.nscardcal_title,.product-card-info--title,#b_results :is(li a.feedback-binded,li.b_vtl_deeplinks>a,li:not(:has(.b_loccardans)) :not(.b_rc_gb_sub_title,.mmtitle,#mt_tleWrp h2,#ns_mag_ht h2,.b_rcGbMod,.b_paractl)>a:not(.iacf_head,.vsb_tr_t,.b_wikiGbModHero,.wiki_seemore,.gs_mdlink,[role='button'],:has(.b_dynamicMrsSuggestionText),.acf_p_title,#imc_pbtn),.b_no a,.na_t,.l_ecrd_txt_gl>h2,.b_RichCardAnswerV2 .b_paractl>a)):visited{color:#4007a2}#b_content #b_results li :is(h2>a,h3>a).${def.const.visited}{color:#4007a2!important}` +
                `.b_dark #b_content{--smtc-ctrl-link-foreground-brand-rest:#d2d0ce;--alinkcol:#a2b7f4}.b_dark a,.b_dark #b_content :is(.b_slidebar h2 a,.b_gwaDlTitle,#b_context .mediumCardTitle,main .b_tranthis,.nslist_card_title,.nscardlite_title,.nscardcal_title,.product-card-info--title,#b_results :is(li a.feedback-binded,li.b_vtl_deeplinks>a,li:not(:has(.b_loccardans)) :not(.b_rc_gb_sub_title,.mmtitle,#mt_tleWrp h2,#ns_mag_ht h2,.b_rcGbMod,.b_paractl)>a:not(.iacf_head,.vsb_tr_t,.b_wikiGbModHero,.wiki_seemore,.gs_mdlink,[role='button'],:has(.b_dynamicMrsSuggestionText),.acf_p_title,#imc_pbtn),.b_no a,.na_t,.l_ecrd_txt_gl>h2,.b_RichCardAnswerV2 .b_paractl>a)){color:#a2b7f4}.b_dark #b_content #b_results .product-card-info--title{color:#a2b7f4!important}.b_dark a:visited,.b_dark #b_content :is(.b_slidebar h2 a,.b_gwaDlTitle,#b_context .mediumCardTitle,main .b_tranthis,.nslist_card_title,.nscardlite_title,.nscardcal_title,.product-card-info--title,#b_results :is(li a.feedback-binded,li.b_vtl_deeplinks>a,li:not(:has(.b_loccardans)) :not(.b_rc_gb_sub_title,.mmtitle,#mt_tleWrp h2,#ns_mag_ht h2,.b_rcGbMod,.b_paractl)>a:not(.iacf_head,.vsb_tr_t,.b_wikiGbModHero,.wiki_seemore,.gs_mdlink,[role='button'],:has(.b_dynamicMrsSuggestionText),.acf_p_title,#imc_pbtn),.b_no a,.na_t,.l_ecrd_txt_gl>h2,.b_RichCardAnswerV2 .b_paractl>a)):visited{color:#7b7fec}.b_dark #b_content #b_results li :is(h2>a,h3>a).${def.const.visited}{color:#7b7fec!important}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:6;display:inline-flex;margin:var(--margin,4px 0 0 0);padding:0 4px 0 0;width:auto;height:38px;min-width:180px;vertical-align:top;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0}input{box-sizing:border-box;height:38px;min-width:90px;border:1px solid #174ae4;background-color:#f7faff;color:#174ae4;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{margin:0;padding:0 12px 1px 18px;border-radius:24px 0 0 24px}#${def.const.rightButton} input{margin:0;padding:0 18px 1px 12px;border-radius:0 24px 24px 0}:host(.${def.const.scrollspan}){margin:0!important;padding:4px 3px 0 8px!important;max-height:30px;vertical-align:top!important}.${def.const.scrollbars}{margin:0!important;padding:0 12px!important;max-height:30px;border-radius:4px!important;vertical-align:top!important}.${def.const.scrollbarsV2}{margin:0 0 0 1px!important;height:34px!important;border-radius:6px!important;padding:0 12px!important}input:hover{background:#f0f3f6;box-shadow:0 0 4px #174ae4;transition:background .1s linear,box-shadow .2s linear}`,
              darkModeCss: `:host(.${def.const.darkmode}) input{border:1px solid #a2b7f4;background:transparent;color:#a2b7f4}:host(.${def.const.darkmode}) input:hover{background:#a2b7f4;color:#333}`,
              resultListProp: {
                qs: `#b_results li.b_algo:not(.b_algoBorder,.b_topborder),#b_results li.b_vidAns .mmlist>div[id],#b_results li.b_mop .b_slidebar>div.slide,#b_topw li.b_ans,aside ol#b_context li.b_algo`,
                delay: 10,
              },
              keywords:
                Number(getUrlParam("ensearch")) || Number(gbCookies.getItem("ENSEARCH")?.match(/[=](\d)/)?.[1])
                  ? "strong,.b_no h4,.b_strong,.b_ad .b_adlabel strong,.cbl"
                  : "#sp_requery strong,#sp_recourse strong,.sb_adTA_title_link_cn strong,.b_ad .ad_esltitle~div strong,h2 strong,#b_results .b_algo p strong,.b_caption p strong,.b_snippetBigText strong,.recommendationsTableTitle+.b_slideexp strong,.recommendationsTableTitle+table strong,.recommendationsTableTitle+ul strong,.pageRecoContainer .b_module_expansion_control strong,.pageRecoContainer .b_title>strong,.b_rs strong,.b_rrsr strong,.richrswrapper strong,#dict_ans strong,.b_listnav>.b_ans_stamp>strong,#b_content #ans_nws .na_cnt strong,.b_vidAns strong,.adltwrnmsg strong",
              antiRedirectFn: () => {
                const checkAllRegionsRedirection = () => {
                  parsingAntiRedirect("Bing", "#b_content li.b_pag a.b_widePag", { forceSelf: true, cleanAttr: ["h"] });
                  parsingAntiRedirect("Bing", "#b_results li:not(.b_pag) a:not([role='button'],.b_widePag):not([href*='.bing.com/ck/a?'])", { useNewTab: true });
                  parsingAntiRedirect("Bing", ".b_scopebar li:is(#b-scopeListItem-conv,#b-scopeListItem-local)>a:not([href*='.bing.com/ck/a?'])", { useNewTab: true });
                  parsingAntiRedirect("Bing", ".b_scopebar li:not(#b-scopeListItem-local,#b-scopeListItem-conv)>a:not([href*='.bing.com/ck/a?'])", { forceSelf: true });
                  parsingAntiRedirect("Bing", "#b_content a[href*='.bing.com/ck/a?'][role='button']", { advancedAnti: true, cleanAttr: ["h"] });
                  parsingAntiRedirect("Bing", "#b_content a[href*='.bing.com/ck/a?']:not([role='button'])", { useNewTab: true, forceNewTab: true, advancedAnti: true });
                  parsingAntiRedirect("Bing", ".b_scopebar li:is(#b-scopeListItem-conv,#b-scopeListItem-local)>a[href*='.bing.com/ck/a?']", { useNewTab: true, advancedAnti: true });
                  parsingAntiRedirect("Bing", ".b_scopebar li:not(#b-scopeListItem-conv,#b-scopeListItem-local)>a[href*='.bing.com/ck/a?']", { forceSelf: true, advancedAnti: true });
                };
                deBounce({ fn: checkAllRegionsRedirection, delay: 20, timer: "bing_ar" })();
              },
              antiAdsFn: () => {
                const selectors = `li.b_ans>div.wpt_bc_container,li.b_ans>#relatedSearchesLGWContainer,li.b_ans>.b_rs,li.b_ad,#b_pole,#b_content .b_underSearchbox,#b_header>div[id^="bnp."][data-vertical],#b_context li.b_ans .b_spa_adblock,.ad_sc,.b_adBottom,.b_adLastChild,.b_adPATitleBlock,.b_spa_adblock,.mapsTextAds,.pa_sb,.productAd,[id$="adsMvCarousel"],a[href*="/aclick?ld="],div.pagereco_anim,#inline_rs,#ev_talkbox_wrapper,#b_content>main[aria-label]>#b_ims_bza_pole,.shop_page .br-poleoffcarousel,#b_content>div#pole>div[class="ra_car_block ra_pole"]>div.ra_car_container,#pole>.productAd[data-ad-carousel],.b_adPATitleBlock+div,a.sb_meta[href^="http://advertise.bingads.microsoft.com"],.promotion-panel-inner,.ins_exp.vsp,li[class="b_algo"]:has(.b_attribution[data-partnertag] + p[class]),.b_ans:has([class^="xm_"][class*="_ansCont"]),.b_inline_ajax_rs,div[id^="bnp.nid"][data-viewname="VerticalHeaderFlyout"]`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "bing_ad", immed: true })({ selectors, siteName: "Bing" });
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
              buttonCssText: `:host(#${def.const.rndButtonID}){box-sizing:border-box;position:absolute;top:0;right:var(--right,unset);z-index:99999;display:inline-flex;height:50px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{box-sizing:border-box;margin:0 3px 0 0;padding:2px 0;height:100%}input{box-sizing:border-box;margin:0;height:99%;min-width:100px;border:none;background:var(--sds-color-background-01);box-shadow:0 0 0 1px #00000014,0 2px 3px 0 #0000000f;color:var(--theme-col-txt-button-secondary);vertical-align:top;font-weight:500;font-size:18px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 10px 1px 15px;border-radius:13px 0 0 13px}#${def.const.rightButton} input{padding:0 15px 1px 10px;border-radius:0 13px 13px 0}input:hover{background-color:var(--sds-color-background-accent-01-state-01);color:var(--sds-color-text-on-color)}`,
              resultListProp: {
                qs: `ol.react-results--main>li[data-layout="organic"],ol.react-results--main>li[data-layout="videos"] div.module--carousel__item,ol.react-results--main>li:has(div[data-react-module-id="about"])`,
                delay: 10,
              },
              keywords: "strong, b",
              antiRedirectFn: null,
              antiAdsFn: () => {
                const selectors = `.footer,.react-results--main>li[data-layout="related_searches"]>div[class]`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "ddg_ad", immed: true })({ selectors, siteName: "Duckduckgo", isRemoveNodes: true });
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
              mainSelector: `input#searchBtn,input[type='button'][uigs='search_article'],input[type='submit']:is(.search-btn,.sbtn1)`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:var(--position,absolute);top:-2px;right:var(--right,unset);z-index:99999;display:inline-flex;margin:0;padding:0;width:auto;height:40px;cursor:pointer;-webkit-appearance:none;opacity:var(--opacity,0);justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 3px 0 0;height:40px}input{margin:0;padding:0 18px 1px 18px;height:40px;min-width:100px;border:2px solid #222;border-radius:12px;background:#f5f5f5;color:#000;font-weight:500;font-size:15px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}input:hover{border:2px solid #205aef;background:#e9f2ff;color:#205aef}.${def.notice.random}_images{margin-top:1px;height:34px!important;border:1px solid #ababab!important;border-radius:3px!important;background:##fafafa!important}.${def.notice.random}_weixin{margin-top:2px;height:34px!important;border:1px solid #00a06a!important;border-radius:2px!important;background:#fff!important;color:#00a06a!important;font-size:15px!important}.${def.notice.random}_weixin:hover{background:#f7fffd!important}`,
              resultListProp: { qs: `div.results div.vrwrap,div.results div.rb`, delay: 10 },
              keywords: "#wrapper em",
              antiRedirectFn: () =>
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "sogou_ar" })("Sogou", "#wrapper a[href^='/link?url=']:not([uigs])", { useNewTab: true, advancedAnti: true }),
              antiAdsFn: () => {
                const selectors = `#biz_tip_box_tuiguang_float,.pz_pc_new_container,.share-wrap,.sponsored,.tgad-box,[class~="ext_query"][id*="sq_ext_"],div.top-better-hintBox,#right>div.rvr-model:not([tpl]),.results .reactResult,.results div.vrwrap.middle-better-hintBox,#right>.reactResult,#searchBtn2[value="\u5168\u7f51\u641c\u7d22"]`;
                deBounce({ fn: parseAntiAdvertising, delay: 10, timer: "sogou_ad", immed: true })({ selectors, siteName: "Sogou", isRemoveNodes: true });
              },
            },
            qwant: {
              siteTypeID: 6,
              siteButtonName: "𝐐𝐰𝐚𝐧𝐭",
              siteNickName: IS_CHN ? "𝐐𝐰𝐚𝐧𝐭 搜索" : "𝐐𝐰𝐚𝐧𝐭.𝐜𝐨𝐦",
              siteHostName: "www.qwant.com",
              webURL: "https://www.qwant.com/?locale=en_AU&t=web&b=1&q=",
              imageURL: "https://www.qwant.com/?locale=en_AU&t=images&b=1&q=",
              imageType: ["images"],
              splitTypeName: "t",
              mainSelector: "form[data-testid='mainSearchBar']",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;top:0;right:var(--right,unset);z-index:99999;display:inline-flex;height:48px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 3px 0 0;height:48px}input{box-sizing:content-box;margin:1px 0;height:48px;min-width:70px;outline:none;border:none;box-shadow:var(--shadow-searchbar-elevation);transition:box-shadow var(--motion-duration-200) var(--motion-ease),color var(--motion-duration-300) var(--motion-ease),background-color var(--motion-duration-300) var(--motion-ease);background-color:var(--color-elevation-surface-elevation);color:var(--color-text-primary);vertical-align:top;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px!important;border-radius:var(--border-radius-300) 0 0 var(--border-radius-300)}#${def.const.rightButton} input{padding:0 18px 1px 12px!important;border-radius:0 var(--border-radius-300) var(--border-radius-300) 0}input:hover{background-color:var(--color-elevation-surface-raised);box-shadow:var(--shadow-searchbar-raised)}`,
              resultListProp: { qs: `div[data-testid="containerWeb"] div[data-testid="sectionWeb"]>div>div,.is-sidebar>div>div div[style="display: block;"]`, delay: 50 },
              keywords: "mark",
              antiRedirectFn: null,
              antiAdsFn: () => {
                const selectors = `div[data-testid="containerWeb"] section div[style="display: block;"]:has([data-testid="aserpok"]),.is-sidebar>div>div:has([data-testid="aserpok"]),[data-testid="containerWeb"] section>div>div:last-child`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "qwant_ad", immed: true })({ selectors, siteName: "Qwant" });
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
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:99999;display:inline-flex;margin:0 5px 0 -10px;padding:0;width:auto;height:52px;cursor:pointer;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0;height:52px}input{height:52px;min-width:110px;border:none;box-shadow:0 0 0 2px inset var(--depot-color-header-form-border);background:transparent;color:var(--depot-color-text-primary);font-weight:500;font-size:18px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px;border-radius:28px 0 0 28px;}#${def.const.rightButton} input{padding:0 18px 1px 12px;border-radius:0 28px 28px 0}input:hover{background:var(--depot-color-control-secondary);color:var(--depot-color-link-hovered)}`,
              darkModeCss: `:host(.${def.const.darkmode}) input{color:var(--depot-color-text-quaternary);box-shadow:0 0 0 2px inset var(--depot-color-header-form-border)}:host(.${def.const.darkmode}) input:hover{color:var(--depot-color-link-hovered);background:var(--depot-color-control-secondary)}`,
              resultListProp: { qs: "#search-result>li[data-fast]", delay: 10 },
              keywords: ".OrganicTitleContentSpan b,.OrganicTextContentSpan b",
              antiRedirectFn: () => deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yandex_ar" })("Yandex", "#search-result>li.serp-item a", { useNewTab: true, removeDataSet: true }),
              antiAdsFn: () => {
                const selectors = `#distr-pcode-container>div,div.HeaderDesktopActions-Distribution.HeaderDesktopActions-Item,div[tabindex][class*='location_right-bottom'],span.distr-nav,div.market-cart,.SerpListFeature :is(.DirectInlineContainer,.Skeleton_type_ad_search),div[id*='-cross-page-']`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "yandex_ad", immed: true })({ selectors, siteName: "Yandex", isRemoveNodes: true });
              },
            },
            so360: {
              siteTypeID: 8,
              siteButtonName: IS_CHN ? "𝟑𝟔𝟎搜索" : "𝟑𝟔𝟎𝐬𝐨",
              siteNickName: IS_CHN ? "𝟑𝟔𝟎 搜索" : "𝐰𝐰𝐰.𝐬𝐨.𝐜𝐨𝐦",
              siteHostName: "www.so.com",
              webURL: "https://www.so.com/s?ie=utf-8&q=",
              imageURL: "https://image.so.com/i?q=",
              imageType: ["i"],
              splitTypeName: { split: "/", index: 1 },
              mainSelector: "input[type='submit'][value='搜索'],button[type='submit'][class~='so-search__button']",
              overrideCss: `#hd-rtools{z-index:199!important}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;display:inline-flex;z-index:99999;margin:0 0 0 5px;padding:0;width:auto;height:40px;cursor:pointer;justify-content:center;align-items:center;flex-wrap:nowrap;vertical-align:top}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;padding:0 2px 0 0;height:40px}input{margin:0;padding:0 18px 1px 18px;height:40px;min-width:100px;border:1px solid #0fb264;background:#0fb264;color:#fff;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;vertical-align:top;cursor:pointer}#${def.const.leftButton} input{border-radius:8px 0 0 8px;}#${def.const.rightButton} input{border-radius:0 8px 8px 0}input:hover{box-shadow: 0 1px 2px #0000001a;background:#2dc471}`,
              resultListProp: { qs: `ul.result>li.res-list`, delay: 10 },
              keywords: "em,#mohe-newdict_dict .mh-exsentence b",
              antiRedirectFn: () => {
                const selector = ".res-list a[href*='//www.so.com/link?m=']";
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "so360_ar" })("So360", selector, { useNewTab: true, cleanAttr: ["e_href", "data-res"], advancedAnti: true });
              },
              antiAdsFn: () => {
                const selectors = `#so_bd-ad,#e_idea_pp,#righttop_box,[id^='mohe-360pic_ext--'],.res-mediav,.map_business_con,.lianmeng-ad,.res-mediav-right,.atom-adv,.e-buss,.spread,ul[data-so-biz-monitor-so-display],.related_query li.cm,ul>div.inline-recommend,div#so_top,div#so-activity-entry,div.mh-relate-text,.section li[data-id^="related_query_init_"],#mohe-know_side_nlp,#rs-top>dd.rs-top`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "so360_ad", immed: true })({ selectors, siteName: "So360", isRemoveNodes: true });
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
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;display:inline-flex;top:-1px;right:var(--right,unset);z-index:99999;margin:0;padding:0;width:auto;height:44px;cursor:pointer;justify-content:center;align-items:center;flex-wrap:nowrap;opacity:var(--opacity,0)}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 2px 0 0;height:44px}input{margin:0;height:44px;min-width:100px;border:1px solid transparent;background:#f04142;color:#fff;vertical-align:top;font-weight:500;font-size:17px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 10px 1px 15px;border-radius:8px 0 0 8px}#${def.const.rightButton} input{padding:0 15px 1px 10px;border-radius:0 8px 8px 0}input:hover{background-color:#f04142b3;color:#fff}`,
              resultListProp: { qs: `div.s-result-list:not(.pd-video)>div.result-content[data-i]`, delay: 10 },
              keywords: "em",
              antiRedirectFn: () =>
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "toutiao_ar" })("Toutiao", ".main a[href*='/search/jump?url=']", { useNewTab: true, advancedAnti: true }),
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
              overrideCss: `.ant-input-group-addon{background:transparent!important}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;left:5px;z-index:99999;display:inline-flex;margin:0;height:40px;vertical-align:top;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0;height:40px}input{margin:0;height:40px;min-width:90px;border:1px solid var(--ee-brand-6);background:var(--ee-brand-6);color:#fff;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px;border-radius:10px 0 0 10px}#${def.const.rightButton} input{padding:0 18px 1px 12px;border-radius:0 10px 10px 0}input:hover{border:1px solid var(--ee-brand-5);background:var(--ee-brand-5)}`,
              resultListProp: { qs: `ul.ant-list-items>li.ant-list-item`, delay: 10 },
              keywords: "mark",
              antiRedirectFn: null,
              antiAdsFn: () => deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "kaifa_ad", immed: true })({ selectors: `#reward-entry`, siteName: "Kaifa", isRemoveNodes: true }),
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
              overrideCss: `.mainline__result-wrapper{visibility:visible!important}`,
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:99999;display:inline-flex;margin:0;height:40px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0;height:40px}input{margin:0;height:40px;min-width:100px;border:1px solid var(--color-form-border-default);background:var(--color-background-primary);box-shadow:0 1px 2px #1a1a1a2e,0 0 8px #1a1a1a0f;color:var(--color-brand-primary);vertical-align:top;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px;border-radius:20px 0 0 20px;}#${def.const.rightButton} input{padding:0 18px 1px 12px;border-radius:0 20px 20px 0}input:hover{border:1px solid var(--color-button-background-primary-hover);background:var(--color-button-background-primary-hover);color:var(--color-button-content-primary)}`,
              resultListProp: { qs: `.mainline__content>div>div.mainline__result-wrapper,aside>article[position="sidebar"]`, delay: 150 },
              keywords: null,
              antiRedirectFn: null,
              antiAdsFn: () => {
                const selectors = `div[data-test-id="sidebar-onboarding"][href],div.main-header__install-cta,div.main-footer-visual__cards,div.personal-counter__tooltip,div.cookie-wrapper,div.mainline__footer>a[data-test-id='chat-entry'],[data-test-id="mainline-result-ad"],div.related-queries__bottom[data-test-id="web-related-queries"]`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "ecosia_ad", immed: true })({ selectors, siteName: "Ecosia" });
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
              mainSelector: "#hd div.sbx form#sf,#sh>#sbx>form#sf",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;top:0;right:var(--right,unset);z-index:99999;display:inline-flex;margin:0 0 0 10px;width:max-content;height:var(--height,52px);justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0;height:var(--height,52px)}input{box-sizing:content-box;margin:0;height:var(--height,52px);min-width:70px;border:none;background:#7e1fff;color:#fff;vertical-align:top;font-weight:500;font-size:18px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 12px 1px 18px;border-radius:100px 0 0 100px;}#${def.const.rightButton} input{padding:0 18px 1px 12px;border-radius:0 100px 100px 0}input:hover{border:none;background:#6001d2;color:#fff}`,
              resultListProp: { qs: `#web>ol>li`, delay: 10 },
              keywords: "strong",
              antiRedirectFn: () => {
                const selector = `#main a:is([href^='https://r.search.yahoo.com/_ylt='],[href^='https://images.search.yahoo.com/search/images;_ylt='],[href^='https://video.search.yahoo.com/search/video;_ylt='])`;
                deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "yahoo_ar" })("Yahoo", selector, { useNewTab: true, advancedAnti: true });
              },
              antiAdsFn: () => {
                const selectors = `#main ol.searchCenterBottomAds,#main ol.searchCenterTopAds`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "yahoo_ad", immed: true })({ selectors, siteName: "Yahoo" });
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
              mainSelector: "#ChatQueryBar>form [class^='_1975xbj']>[data-state='closed']",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:99999;display:inline-flex;margin:0;height:32px;width:190%;max-width:fit-content;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 1px 0 0;height:32px}input{margin:0;padding:0 16px 1px 16px;height:32px;min-width:80px;border:1px solid #596ced;background-color:#596ced;color:#fff;vertical-align:middle;font-weight:500;font-size:15px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{border-radius:8px 0 0 8px}#${def.const.rightButton} input{border-radius:0 8px 8px 0}input:hover{border:1px solid #7a89f0;background-color:#7a89f0;color:#fff}`,
              darkModeCss: `#${def.const.leftButton} input:hover,#${def.const.rightButton} input:hover{border:1px solid #4d5cc3;background-color:#4d5cc3;}`,
              resultListProp: null,
              keywords: null,
              antiRedirectFn: null,
              antiAdsFn: () => deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "you_ad", immed: true })({ selectors: `[id=":rn:"][data-floating-ui-focusable]`, siteName: "You" }),
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
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;z-index:99999;display:inline-flex;margin:0 2px 0 0;padding:0;height:40px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 3px 0 0;height:40px}input{margin:0;height:40px;min-width:90px;border:0 solid transparent;background:#f1f3ff;box-shadow:0 0 2px #a4a5bb;color:#2e39b3;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 16px 1px 20px;border-radius:2rem 0 0 2rem}#${def.const.rightButton} input{padding:0 20px 1px 16px;border-radius: 0 2rem 2rem 0}input:hover{background:#6573ff;color:#fff}`,
              darkModeCss: `:host(.${def.const.darkmode}) input{border:1px solid #252b3b;background:#252b3b;color:#fff}:host(.${def.const.darkmode}) input:hover{border:1px solid #6573ff;background:#6573ff;color:#222}`,
              resultListProp: { qs: `#main>.w-gl>div.result,.wiki-container>div[role="region"]`, delay: 1e2 },
              keywords: `.result b`,
              antiRedirectFn: null,
              antiAdsFn: () => {
                const selectors = `section.a-gl-tp,div.widget-install-legacy,div.mainline-results>div.block-display,.Firefox-promo`;
                deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "startpage_ad", immed: true })({ selectors, siteName: "Startpage" });
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
              mainSelector: "div#autocomplete",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;top:0;right:var(--right,unset);z-index:99999;display:inline-flex;margin:0;padding:0;width:max-content;height:var(--search-form-height);justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.rightButton},#${def.const.leftButton}{display:inline-block;margin:0 3px 0 0;padding:0;height:100%}input{box-sizing:border-box;margin:0;height:calc(var(--search-form-height) - 1px);min-width:100px;border:none;outline:1px solid var(--color-serp-divider-subtle-container);box-shadow:-1px 2px 3px #00000038;background:var(--color-search-background-search-bar);color:var(--color-text-primary);vertical-align:top;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 16px 0 24px;border-radius:var(--border-radius-xxl) 0 0 var(--border-radius-xxl)}#${def.const.rightButton} input{padding:0 24px 0 16px;border-radius:0 var(--border-radius-xxl) var(--border-radius-xxl) 0}input:hover{color:var(--color-primitive-white, #fff);background:linear-gradient(314deg,#fa7250 8.49%,#ff1893 43.72%,#a78aff 99.51%)}`,
              resultListProp: { qs: `#results>div.snippet[data-type],#results>.standalone>.video-item`, delay: 10 },
              keywords: `.snippet-content strong`,
              antiRedirectFn: null,
              antiAdsFn: null,
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
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;top:0;right:var(--right,unset);z-index:112;display:inline-flex;margin:0;padding:0;height:50px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 2px 0 0;height:50px}input{margin:0;height:48px;min-width:100px;border:1px solid #f1dc1b;background:var(--background--brand);color:#333;vertical-align:top;font-weight:500;font-size:16px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:0 15px 1px 25px;border-radius:25px 0 0 25px;}#${def.const.rightButton} input{padding:0 25px 1px 15px;border-radius:0 25px 25px 0}input:hover{background:var(--background--brandHover)}`,
              resultListProp: { qs: `div[class*='-results']>div>div>div[class*='-card'],div[class*='-sidebar']>div>div>div>div[class*='-stack']`, delay: 20 },
              keywords: ``,
              antiRedirectFn: () => {
                const selector = `div[class*='-results']>div>div>div[class*='-card'] a,div[class*='-results']>div>div>div[class*='-block'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-newsIncut'] a,div[class*='-results']>div>div>div[class*='-incut'] div[class*='-container'] a`;
                deBounce({ fn: parsingAntiRedirect, delay: 30, timer: "yep_ar", immed: true })("Yep", selector, { useNewTab: true, cleanAttr: ["referrerpolicy"] });
              },
              antiAdsFn: null,
            },
            mojeek: {
              siteTypeID: 17,
              siteButtonName: "𝐌𝐨𝐣𝐞𝐞𝐤",
              siteNickName: IS_CHN ? "𝐌𝐨𝐣𝐞𝐞𝐤 搜索" : "𝐌𝐨𝐣𝐞𝐞𝐤.𝐜𝐨𝐦",
              siteHostName: "www.mojeek.com",
              webURL: "https://www.mojeek.com/search?q=",
              imageURL: "https://www.mojeek.com/search?fmt=images&imgpr=pixabay&q=",
              imageType: ["images"],
              splitTypeName: "fmt",
              mainSelector: "form[name='sf1']",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:absolute;top:0;right:var(--right,unset);z-index:100;display:inline-flex;margin:0;padding:0;height:42px;justify-content:center;align-items:center;flex-wrap:nowrap}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 2px 0 0;height:42px}input{    box-sizing:content-box;margin:0;padding:4px 0;height:32px;min-width:90px;border:1px solid #c7c7c7;background:#fff;color:#111;box-shadow:0 2px 3px #0000000f;vertical-align:top;font-weight:500;font-size:15px;line-height:100%;text-shadow:none;-webkit-text-stroke:0 transparent;letter-spacing:normal;cursor:pointer}#${def.const.leftButton} input{border-radius:4px 0 0 4px}#${def.const.rightButton} input{border-radius:0 4px 4px 0}input:hover{background:#fafafa;box-shadow:0 2px 5px #00000033;transition:box-shadow .1s cubic-bezier(.4,0,.2,1), -webkit-box-shadow .1s cubic-bezier(.4,0,.2,1)}`,
              darkModeCss: `:host(.${def.const.darkmode}) input{background:#1e1e1e;color:#fff;border:1px solid grey;box-shadow:0 2px 3px #0000000f}:host(.${def.const.darkmode}) input:hover{background:#303030;color:#fafafa}`,
              resultListProp: { qs: `.results>ul.results-standard>li`, delay: 10 },
              keywords: `b, strong`,
              antiRedirectFn: () => deBounce({ fn: parsingAntiRedirect, delay: 20, timer: "mojeek_ar" })("Mojeek", ".results>ul>li :is(:not(.more)>a,>a)", { useNewTab: true }),
              antiAdsFn: () => deBounce({ fn: parseAntiAdvertising, delay: 20, timer: "mojeek_ad", immed: true })({ selectors: ".sf1>form>button~a", siteName: "mojeek" }),
            },
            searxng: {
              siteTypeID: 18,
              siteButtonName: "𝐒𝐞𝐚𝐫𝐗𝐍𝐆",
              siteNickName: IS_CHN ? "𝐒𝐞𝐚𝐫𝐗𝐍𝐆 搜索" : "𝐒𝐞𝐚𝐫𝐗𝐍𝐆 ©",
              siteHostName: "searx.space",
              webURL: "https://au.priv.au/search?category_general=1&language=all&time_range=&safesearch=0&theme=simple&q=",
              imageURL: "https://au.priv.au/search?categories=images&language=all&time_range=&safesearch=0&theme=simple&q=",
              imageType: ["images"],
              splitTypeName: "categories",
              mainSelector: "#search_view>div.search_box",
              buttonCssText: `:host(#${def.const.rndButtonID}){position:relative;top:0;right:-10px;width:0;z-index:99999;display:block;height:auto}#${def.const.leftButton},#${def.const.rightButton}{display:inline-block;margin:0 -1px 0 0}input{margin:0;min-width:90px;border:1px solid var(--color-search-border);outline:none;background:var(--color-search-background);box-shadow: var(--color-search-shadow);color:var(--color-search-font);font-weight:500;font-size:1.2rem;line-height:122%;text-shadow:none;-webkit-text-stroke:0 transparent;cursor:pointer}#${def.const.leftButton} input{padding:.8rem 15px .86rem 20px;border-radius:.8rem 0 0 .8rem}#${def.const.rightButton} input{padding:.8rem 20px .86rem 15px;border-radius:0 .8rem .8rem 0}input:hover{background-color:var(--color-search-background-hover);color:var(--color-search-background)}`,
              resultListProp: { qs: `div#urls article.result`, delay: 10 },
              keywords: ".highlight",
              antiRedirectFn: null,
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
            MOJEEK: listSite.mojeek.siteTypeID,
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
            "yandex\\.(com|ru|eu)$": { siteType: newSiteType.YANDEX, site: listSite.yandex },
            "\\.so\\.com$": { siteType: newSiteType.SO360, site: listSite.so360 },
            "so\\.toutiao\\.com$": { siteType: newSiteType.TOUTIAO, site: listSite.toutiao },
            "www\\.ecosia\\.org$": { siteType: newSiteType.ECOSIA, site: listSite.ecosia },
            "search\\.yahoo\\.com$": { siteType: newSiteType.YAHOO, site: listSite.yahoo },
            "you\\.com$": { siteType: newSiteType.YOU, site: listSite.you },
            "startpage\\.com$": { siteType: newSiteType.STARTPAGE, site: listSite.startpage },
            "search\\.brave\\.com$": { siteType: newSiteType.BRAVE, site: listSite.brave },
            "yep\\.com$": { siteType: newSiteType.YEP, site: listSite.yep },
            "www\\.mojeek\\.com$": { siteType: newSiteType.MOJEEK, site: listSite.mojeek },
            "priv\\.au$": { siteType: newSiteType.SEARXNG, site: listSite.searxng },
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
              'textarea[jsname][name="q"]',
              "textarea#search-input-textarea",
            ],
            searchKeys: ["wd", "word", "query", "q", "text", "keyword", "p"],
          };

          const { currentSite = {}, listCurrentSite = {} } = findCurrentSite();
          const { currentSiteName, allSiteURIs } = updateSiteInformation();
          const { backgroundColor: bgcolor, foregroundColor: fgcolor } = customColor;
          const updateDetectionAddress = getUpdateAddress();
          const yandexIconsAPIUrl = `${def.url.yandexIcon}/${allSiteURIs}?size=32&stub=1`;
          const iconBase64Data = await fetchAndCacheRemoteIcons(yandexIconsAPIUrl);

          /* DEFINE_GLOBAL_STYLES */

          def.var.style = String(
            `.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before {box-sizing:content-box;line-height:normal}.${def.notice.animated}{animation-duration:1s;animation-fill-mode:both}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.${def.notice.random}_fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.${def.notice.random}_fadeOut{animation-name:fadeOut}.${def.notice.appear}{display:block!important}.${def.notice.noticeX},.${def.notice.noticeX} *{text-shadow:none!important;font-family:Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important;-webkit-text-stroke:0 transparent!important}.${def.notice.noticeX}-top{top:0;width:100%}.${def.notice.noticeX}-top .${def.notice.item}{margin:0!important;border-radius:0!important}.${def.notice.noticeX}-topRight{top:10px;right:20px;z-index:2147483646!important}.${def.notice.noticeX}-topLeft{top:10px;left:10px}.${def.notice.noticeX}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX}-middleLeft,.${def.notice.noticeX}-middleRight{right:20px;top:50%;transform:translateY(-50%)}.${def.notice.noticeX}-middleLeft{left:10px}.${def.notice.noticeX}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${def.notice.noticeX}-bottom{bottom:0;width:100%}.${def.notice.noticeX}-bottom .${def.notice.item}{border-radius:0!important;margin:0!important}.${def.notice.noticeX}-bottomRight{bottom:10px;right:20px;z-index:2147483647!important}.${def.notice.noticeX}-bottomLeft{bottom:10px;left:10px}.${def.notice.noticeX}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${def.notice.noticeX} .${def.notice.item}{margin:0 0 10px;border-radius:6px;overflow:hidden}.${def.const.translucent} *{display:none!important}.${def.const.translucent} notice-label{display:block!important}.${def.const.filtered},.${def.const.disappear}{display:none!important}[${def.const.const.warn}]{display:block!important;min-width:430px;margin:18px 0 28px 10px!important;padding:10px 2px!important;font:normal 400 14px/100% 'WenQuanYi Micro Hei','PingFang SC','Microsoft YaHei',sans-serif!important;-webkit-text-stroke:0 transparent!important;color:grey!important;line-height:1!important}gb-filters.code{display:block;margin:20px 0;word-break:break-word;font-size:12px!important}` +
              `.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}{float:right;margin-right:7px;color:#fff;text-shadow:0 1px 0 #fff;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticeX} .${def.notice.item} .${def.notice.close}:hover{color:#000;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.item} a{border-bottom:1px dashed #fff;color:#fff}.${def.notice.noticeX} .${def.notice.item} a,.${def.notice.noticeX} .${def.notice.item} a:hover{text-decoration:none}.${def.notice.noticeX} .${def.notice.success}{background-color:#64ce83!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-heading{padding:10px;background-color:#3da95c;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body{padding:10px!important;color:#fff;}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.info}{background-color:#3ea2ff!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-heading{padding:10px;background-color:#067cea;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body{padding:10px!important;color:#fff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.warning}{background-color:#ff7f48!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#f97038;color:#fff;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body{color:#fff;padding:10px}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.error}{background-color:#e74c3c!important}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e93724;color:#fff;font-weight:700;font-size:14px!important}` +
              `.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body{padding:10px;color:#fff}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.configuration} input[disabled],.${def.notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${def.notice.noticeX} .${def.notice.configuration}{background:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}{float:right;margin-right:7px;color:#000000;text-shadow:0 1px 0 #aaa;font-weight:700;font-size:18px!important;line-height:1;opacity:1}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.close}:hover{color:#555;opacity:.5;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-heading{padding:10px!important;background-color:#e7e7e7;color:#333;font-weight:700;font-size:14px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body{padding:10px;color:#333333}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-body:hover{visibility:visible!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-content{visibility:visible}.${def.notice.noticeX} .${def.notice.noticeX}-heading-title{display:inline-block;vertical-align:middle;overflow:hidden;max-width:90%;text-overflow:ellipsis;white-space:nowrap}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#64ce83}.${def.notice.noticeX} .${def.notice.success} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#3da95c}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#3ea2ff}.${def.notice.noticeX} .${def.notice.info} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#067cea;}` +
              `.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#ff7f48}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#f44e06}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#fd5f4e}.${def.notice.noticeX} .${def.notice.error} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ba2c1d}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar{margin-top:-1px;width:100%;background-color:#efefef}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.noticeX}-progressbar .${def.notice.noticeX}-bar{width:100%;height:5px;background:#ccc}@keyframes ${def.notice.noticeX}-progress{0%{width:100%}to{width:0}}@keyframes ${def.notice.noticeX}-fadeOut{0%{opacity:1}to{opacity:0}}.${def.notice.noticeX}-fadeOut{animation-name:${def.notice.noticeX}-fadeOut}.${def.notice.noticeX}{position:fixed;z-index:2147483645}.${def.notice.noticeX} ::-webkit-scrollbar{width:8px}.${def.notice.noticeX} ::-webkit-scrollbar-button{width:8px;height:8px}.${def.notice.noticeX} ::-webkit-scrollbar-track{border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb{background:#e1e1e1;border-radius:3px}.${def.notice.noticeX} ::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.rName}{padding:2px!important}.${def.notice.noticeX} .${def.notice.rName} dl{margin:0!important;padding:1px!important}.${def.notice.noticeX} .${def.notice.rName} dl dt{margin:2px 0 6px!important;font-weight:900!important;font-size:16px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${def.notice.noticeX} .${def.notice.rName} .${def.notice.center}{width:100%;text-align:center!important}.${def.notice.noticeX} .${def.notice.rName} dl dd em{padding:0 5px;color:#fff;font-style:italic;font-size:24px!important;font-family:Candara,sans-serif!important}.${def.notice.noticeX} .${def.notice.rName} dl dd span{margin-right:8px;font-weight:700;font-size:15px!important}.${def.notice.noticeX} .${def.notice.rName} dl dd i{font-size:20px!important;font-family:Candara,sans-serif!important}` +
              `.${def.notice.noticeX} .${def.notice.rName} dl dd .im{padding:0 3px;color:gold;font-weight:900;font-size:16px!important}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} ul{display:inline-block;margin:0 0 0 8px;padding:4px 4px 8px;width:95%;color:#ffffffcc;counter-reset:xxx 0;vertical-align:top;text-align:left}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li{position:relative;margin:0 0 0 2px;padding:0 0 2px 2px;list-style:none;font-style:italic!important;line-height:150%;-webkit-transition:.12s;transition:.12s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} li::before{display:inline-block;margin-left:-1.5em;width:1.5em;content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-size:14px;font-family:Candara,sans-serif;-webkit-transition:.5s;transition:.5s}.${def.notice.noticeX} .${def.notice.warning} .${def.notice.rName} #${def.notice.stopUpdate}{float:right;margin:0 5px!important;font-size:12px!important;cursor:help}.${def.const.loading}{position:relative;}.${def.const.loading}::after{content:" \u21ba";animation:fade 1.25s infinite;}@keyframes fade{0%{opacity:0.1}50%{opacity:0.5}to{opacity:0}}.${def.notice.readonly}{background:linear-gradient(45deg,#ffe9e9,#ffe9e9 25%,transparent 0,transparent 50%,#ffe9e9 0,#ffe9e9 75%,transparent 0,transparent)!important;background-color:#fff7f7!important;background-size:50px 50px!important;color:#999}#${def.notice.stopUpdate} input[type='checkbox']{box-sizing:content-box;margin:2px 4px 0 0;width:14px;height:14px;border:2px solid #fff;border-radius:50%;background:#ffa077;vertical-align:top;cursor:help;-webkit-appearance:none}#${def.notice.stopUpdate}:hover input,#${def.notice.stopUpdate} input:hover{background:#ba2c1d;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}{display:none!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;padding:11px 9px;width:58px;height:10px;border-radius:7px;background:#f7836d;box-shadow:inset 0 0 20px #0000001a,0 0 10px #f5929266;word-wrap:normal!important;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;width:24px;height:32px;-webkit-border-radius:7px;border-radius:7px;background:#fff;box-shadow:0 0 1px #00000099;color:#fff;content:" "}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}+label::after{position:absolute;top:2px;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;-webkit-border-radius:100px;border-radius:100px;color:#fff;content:"OFF";font-weight:700;font-size:14px}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 0 0 25px;background:#67a5df!important;box-shadow:inset 0 0 20px #0000001a,0 0 10px #92c4f566;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::after{top:2px;left:10px;content:"ON"}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.checkbox}:checked+label::before{position:absolute;left:52px;z-index:99;content:" "}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}{display:flex;position:relative;margin:0 0 10px;padding:6px 0;width:162px;height:25px;border:2px solid #eee;border-radius:6px;background:#fff;box-shadow:1px 1px 0 1px #aaa;font-size:14px!important;cursor:pointer;align-content:center;justify-content:center;align-items:center}.${def.notice.noticeX} .${def.notice.configuration} button.${def.notice.searchButton}:hover{box-shadow:1px 1px 3px 0 #888;color:#ff0000}.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon}{margin:0 6px 0 0;width:32px;height:32px}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList}{margin:5px;padding:2px;list-style:none}.${def.notice.noticeX} .${def.notice.configuration} ul.${def.notice.searchList} li{margin:0;list-style:none;font-style:normal}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.fieldset}{display:block;margin:2px;padding:4px 6px;width:auto;height:auto;border:2px dashed #dfdfdf;border-radius:10px;background:transparent!important;text-align:left}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.legend}{display:block;margin:0;padding:0 8px;width:auto;color:#8b0000!important;font-weight:900!important;font-size:14px!important;-webkit-user-select:all;user-select:all}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList}{margin:0;padding:0;background:transparent!important}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li{float:none;display:flex;margin:3px 0;padding:2px 8px 2px 12px;height:36px;border:none;background:transparent!important;list-style:none;cursor:default;-webkit-user-select:none;user-select:none;align-content:center;justify-content:space-between}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} li div{font:normal 700 14px/150% Microsoft YaHei UI,system-ui,-apple-system,BlinkMacSystemFont,sans-serif!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button{box-sizing:border-box;margin:0 0 0 8px;padding:4px 8px;height:36px;min-width:65px;border:1px solid #ccc;border-radius:8px;background:#fafafa;box-shadow:1px 1px 1px 0 #ccc;color:#5e5e5e;font-weight:700;font-size:14px!important;letter-spacing:normal;text-transform:none;text-align:center;text-decoration:none}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info{font-weight:400!important;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_info em{color:#dc143c!important;font-style:normal;}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_textarea{padding: 6px 0;margin:0}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter{display:block;margin:0;height:100%}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar{width:8px;height:8px}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb{border-radius:4px;background:#cfcfcf}.${def.notice.random}_filter_textarea textarea::-webkit-scrollbar-thumb:hover{background:#aaa}.${def.notice.random}_filter_textarea textarea::placeholder{color:#555;font:normal 500 16px/150% ui-monospace,monospace,system-ui,-apple-system,BlinkMacSystemFont!important;opacity:0.85;white-space:break-spaces}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{box-sizing:border-box;margin:0;padding:5px;max-height:423px;width:100%;min-height:280px;outline:0!important;border:1px solid #bbb;border-radius:6px;background:#fff;color:#111;white-space:pre;font:normal 400 14px/150% ui-monospace,monospace,sans-serif!important;resize:vertical;overscroll-behavior:contain;word-break:keep-all!important;cursor:auto}` +
              `.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content::placeholder{font:normal 400 14px/150% ui-monospace,monospace!important}.${def.notice.noticeX} .${def.notice.configuration} #${def.notice.random}_customColor{margin:0;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} button:hover{background:#fff;cursor:pointer}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}__content{display:block;margin:0;height:268px}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{overflow-x:hidden;overflow-y:auto;box-sizing:border-box;margin:4px 0 3px;padding:8px;width:266px;max-height:237px;overscroll-behavior:contain}.${def.notice.card} h2{margin:0;padding:0;border:0;vertical-align:baseline;font:inherit;font-size:100%;line-height:135%;}#${def.notice.random}_help{position:relative;margin:0;padding:4px 15px!important;border:1px solid transparent;background:#f07f6a;box-shadow:0 0 6px 0 #f5846f;color:#fff;cursor:help}#${def.notice.random}_help:hover{background:#ed6248;box-shadow:0 0 6px 0 #f34525;}#${def.notice.random}_clear{margin:0;color:#666;font-weight:500;cursor:pointer}#${def.notice.random}_clear:hover{color:#ff0000}#${def.notice.random}_clear u{padding:0 2px;text-decoration:none}.${def.notice.linkerror},.${def.notice.linkerror}:hover{color:#a9a9a9!important;text-decoration-line:underline!important;text-decoration-color:#ff0000!important;text-decoration-style:wavy!important;text-decoration-thickness:1px!important;text-underline-offset:2px!important}.${def.notice.linkerror} *,.${def.notice.linkerror} *:hover{color:#a9a9a9!important;text-decoration:none!important}@-moz-document url-prefix() {.${def.notice.noticeX} *,.${def.notice.noticeX} *::after,.${def.notice.noticeX} *::before,.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.random}_filter_content{scrollbar-color:#bbbb #eee1;scrollbar-width:thin}}` +
              `.${def.notice.card}{margin:0;padding:0;--background:#fff;--background-chackbox:#0082ff;--background-image:#fff,#006baf33;--text-color:#666;--text-headline:#000;--card-shadow:#0082ff;--card-height:48px;--card-witght:240px;--card-radius:12px;--header-height:47px;--blend-mode:overlay;--transition:0.15s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.${def.notice.card}__input{position:absolute;display:none;margin:0;padding:0;outline:none;border:none;background:none;-webkit-appearance:none}.${def.notice.card}__input:checked ~ .${def.notice.card}__body{--shadow:0 0 0 3px var(--card-shadow);}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox{--chack-bg:var(--background-chackbox);--chack-border:#fff;--chack-scale:1;--chack-opacity:1;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover-chackbox--svg{--stroke-color:#fff;--stroke-dashoffset:0;}.${def.notice.card}__input:checked ~ .${def.notice.card}__body .${def.notice.card}__body-cover:after{--opacity-bg:0;}.${def.notice.random}_iconText{color:#333;font-weight:400;letter-spacing:normal;text-transform:none;text-decoration:none}.${def.notice.random}_iconText:hover{color:#dc143c}.${def.notice.random}_iconText>sup{position:absolute;font-size:25px;top:-10px;right:-2px}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body{cursor:not-allowed;opacity:0.5;}.${def.notice.card}__input:disabled ~ .${def.notice.card}__body:active{--scale:1;}.${def.notice.card}__body{position:relative;display:grid;overflow:hidden;width:var(--card-witght);height:var(--card-height);border-radius:var(--card-radius);background:var(--background);box-shadow:var(--shadow,1px 1px 3px 1px #ccc);cursor:pointer;-webkit-transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:box-shadow var(--transition),-webkit-transform var(--transition);transition:transform var(--transition),box-shadow var(--transition);transition:transform var(--transition),box-shadow var(--transition),-webkit-transform var(--transition);-webkit-transform:scale(var(--scale,1)) translateZ(0);transform:scale(var(--scale,1)) translateZ(0);grid-auto-rows:calc(var(--card-height) - var(--header-height)) auto}` +
              `.${def.notice.card}__body:active{--scale:0.96;}.${def.notice.card}__body-cover-image{position:absolute;top:8px;left:10px;z-index:100;width:32px;height:32px}.${def.notice.card}__body-cover-image span.${def.notice.favicons}{display:block;width:32px;height:32px}.${def.notice.card}__body-cover-chackbox{position:absolute;top:10px;right:10px;z-index:1;width:28px;height:28px;border:2px solid var(--chack-border,#fff);border-radius:50%;background:var(--chack-bg,var(--background-chackbox));opacity:var(--chack-opacity,0);transition:transform var(--transition),opacity calc(var(--transition)*1.2) linear,-webkit-transform var(--transition) ease;-webkit-transform:scale(var(--chack-scale,0));transform:scale(var(--chack-scale,0))}.${def.notice.card}__body-cover-chackbox--svg{display:inline-block;visibility:visible!important;margin:8px 0 0 7px;width:13px;height:11px;vertical-align:top;-webkit-transition:stroke-dashoffset .4s ease var(--transition);transition:stroke-dashoffset .4s ease var(--transition);fill:none;stroke:var(--stroke-color,#fff);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:var(--stroke-dashoffset,16px)}.${def.notice.card}__body-header{padding:4px 10px 6px 50px;height:var(--header-height);background:var(--background)}.${def.notice.card}__body-header-title{margin-bottom:0!important;color:var(--text-headline);font-weight:700!important;font-size:15px!important}.${def.notice.card}__body-header-subtitle{color:var(--text-color);font-weight:500;font-size:13px!important}.${def.notice.noticeX} .${def.notice.configuration} .${def.notice.settingList} .${def.notice.grid}{display:grid;grid-template-columns:repeat(1, 1fr);grid-gap:10px;}.${def.notice.gberror}{display:block;margin:0 0 4px -6px;padding:6px;width:max-content;border:1px dashed #ffb78c;border-radius:4px;color:#ffb78c}`
          );
          def.var.iconbg = iconBase64Data ? `url('${iconBase64Data}')` : `url('${def.url.backupIcon}'),url('${yandexIconsAPIUrl}')`;
          def.var.button = `${currentSite.siteTypeID === newSiteType.GOOGLE ? "<span class='ACRAdd'></span>" : ""}
            <span id="${def.const.leftButton}" sn="${selectedSite[0].siteTypeID}">
              <input type="button" title="${selectedSite[0].siteNickName}" value="${selectedSite[0].siteButtonName}"/>
            </span>
            <span id="${def.const.rightButton}" sn="${selectedSite[1].siteTypeID}">
              <input type="button" title="${selectedSite[1].siteNickName}" value="${selectedSite[1].siteButtonName}"/>
            </span>`;
          def.var.hlstyle = listCurrentSite.keywords ? `${listCurrentSite.keywords}{background-color:${bgcolor}!important;color:${fgcolor}!important;font-weight:600}` : ``;
          def.var.iconstyle = `.${def.notice.noticeX} .${def.notice.configuration} span.${def.notice.favicon},.${def.notice.card}__body-cover-image span.${def.notice.favicons}{background-color:transparent;background-image:${def.var.iconbg};background-repeat:no-repeat;}`;

          function getQueryString() {
            if (currentSite.siteTypeID === newSiteType.YOU) {
              const textWord = qS(`textarea#search-input-textarea[name='query']`)?.value.trim();
              if (textWord) return encodeURIComponent(textWord);
              const keyNodes = qA(`[data-testid^="youchat-question-turn"] span[class^='sc-']`);
              if (keyNodes.length) return keyNodes[keyNodes.length - 1].textContent;
            }
            const { inputArray, searchKeys } = searchProperties;
            const inputValue = qA(inputArray.join()).FindX(item => item.value)?.value;
            if (inputValue) return DEBUG("QueryString[INPUT]:", { value: inputValue }), encodeURIComponent(inputValue);
            for (const key of searchKeys) {
              const queryString = getUrlParam(key);
              if (!queryString) continue;
              const decodedValue = queryString.replace(/\+/g, " ");
              return DEBUG("QueryString[URL]:", { queryKey: key, value: decodedValue }), encodeURIComponent(decodedValue);
            }
            return "";
          }

          function checkIndexPage() {
            for (const key of searchProperties.searchKeys) if (getUrlParam(key)) return false;
            return CUR_PATH_NAME === "/";
          }

          function getSecurityPolicy() {
            const currentSearchType = getUrlParam(listCurrentSite.splitTypeName);
            const useSecurityPolicy =
              (listCurrentSite.siteTypeID === newSiteType.BING && currentSearchType === "maps") ||
              (listCurrentSite.siteTypeID === newSiteType.GOOGLE && ["26", "28", "50"].includes(currentSearchType)) ||
              (listCurrentSite.siteTypeID === newSiteType.SOGOU && /^(?:fanyi|hanyu|as)\./.test(CUR_HOST_NAME)) ||
              (listCurrentSite.siteTypeID === newSiteType.DUCKDUCKGO && getUrlParam("iaxm") === "maps");
            return useSecurityPolicy;
          }

          function findCurrentSite() {
            for (const regex in engineMap) {
              if (!hasOwnProperty.call(engineMap, regex) || !new RegExp(regex).test(CUR_HOST_NAME)) continue;
              const { siteType, site } = engineMap[regex];
              const currentSite = selectedEngine.includes(siteType) ? site : listSite.other;
              return { currentSite, listCurrentSite: site };
            }
            return {};
          }

          function updateSiteInformation() {
            let [currentSiteName, allSiteURIs] = ["", ""];
            for (let site in listSite) {
              if (!hasOwnProperty.call(listSite, site)) continue;
              if (listSite[site].siteTypeID !== newSiteType.OTHERS) allSiteURIs += listSite[site].siteHostName + ";";
              if (listSite[site].siteTypeID === listCurrentSite.siteTypeID) currentSiteName = site;
              if (listSite[site].siteTypeID !== currentSite.siteTypeID && selectedEngine.includes(Number(listSite[site].siteTypeID))) {
                selectedSite.length < 2 && selectedSite.push(listSite[site]);
              }
            }
            return { currentSiteName, allSiteURIs };
          }

          async function updateToRequestIcon() {
            try {
              const iconDataURL = await requestRemoteIcon(yandexIconsAPIUrl);
              if (iconDataURL) cache.set(REMOTEICONS, iconDataURL, 2592e6) ?? DEBUG("%cRemote icon data parsing successed.", "color:#006400");
              else DEBUG("%cRemote icon data parsing failed.", "color:#ff0000");
            } catch (e) {
              ERROR(`${e.name} in UpdateToRequestIcon:`, e.message);
            }
          }

          function showUpdateNotification(updateWindow) {
            const title = IS_CHN ? "升级提示" : "Update Tips";
            const loadingTip = IS_CHN ? "正在申请脚本更新安装页面，请稍后……" : "Installation page is requested, please wait...";
            const okTip = IS_CHN ? "<dd><b>若您已更新完成</b>，请点此刷新页面，以使新版脚本生效！</dd>" : "<dd><b>If updated</b>, click here to make the script effective!</dd>";
            const text = createNoticeHTML(`<dd id="${def.notice.random}_loading" style="color:#ffff00;font-weight:600">${loadingTip}</dd>${okTip}`);
            GMnotification({ title, text, type: def.notice.info, closeWith: ["click"], timeout: false, position: "topRight", callbacks: { onClose: [reload] } });
            const node = qS(`#${def.notice.random}_loading`);
            if (updateWindow && typeof updateWindow.close === "function" && (!IS_REAL_BLINK || GMscriptHandler !== "Violentmonkey")) {
              sleep(3e3, { useCachedSetTimeout: true }).then(() => updateWindow.close());
              updateWindow.onclose = () => void safeRemoveNode(node);
            } else return node;
          }

          function preInstall(url) {
            sleep(5e2)(url.replace(".meta.", ".user."))
              .then(u => GMopenInTab(IS_GREASEMONKEY ? u.replace(/\?\w+/g, "") : u, false))
              .then(updateWindow => showUpdateNotification(updateWindow))
              .then(node => node && sleep(3e3, { useCachedSetTimeout: true })(node).then(safeRemoveNode))
              .catch(e => void ERROR(`${e.name} in PreInstall:`, e.message));
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
                const updateinfo = IS_CHN ? parsedNote.CN : parsedNote.EN;
                updateInfoList += updateinfo ? `<li>${updateinfo}</li>` : ``;
              } catch (_) {
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
            __console("shown_new_update", `%c[Update Found] %cWe found a new version: %c${version}%c, which you can update now!`, ...props);
          }

          function showSuccessUpdateNotify() {
            const successHTML = IS_CHN
              ? `<dd style="margin: 10px 0"><span>恭喜！</span>当前版本 <i>${def.var.curVersion}</i> 已为最新！</dd>`
              : `<dd style="margin: 10px 0"><span>Congratulations!</span><br/>The version <i>${def.var.curVersion}</i> is up-to-date!</dd>`;
            const title = IS_CHN ? "更新成功" : "Update Success";
            GMnotification({ title, text: createNoticeHTML(successHTML), timeout: 3e3, closeWith: ["click"] });
            cache.set(AUTOCHECK, def.var.curVersion);
            const props = ["font-weight:700;color:#008b8b", "color:0", "color:#dc143c", "color:0"];
            __console("shown_update_info", `%c[Update Succeed] %cCurretVersion: %c${def.var.curVersion}%c is up-to-date!`, ...props);
          }

          function showUpdateError() {
            const props = ["font-weight:bold;color:#dc143c", "color:#800000"];
            __console("error", "%c[Update Failed] %cRefused to connect to 'the UpdateList URLs', Please check your Network or local DNS!", ...props);
          }

          void (async function (getUpdateInformation, parseUpdateInformatio) {
            const addAction = {
              closeConfig: async () => await NoticeX.close(qS(`.${def.notice.noticeX} .${def.notice.configuration}`)),
              listSearchEngine: currentSite => {
                let returnHtml = "";
                for (let site in listSite) {
                  if (!hasOwnProperty.call(listSite, site) || listSite[site].siteTypeID === 0 || listSite[site].siteTypeID === currentSite.siteTypeID) continue;
                  const iconStyle = `background-position:0 ${(1 - listSite[site].siteTypeID) * 32}px;background-attachment:local;background-size:32px auto;transform:scale(0.75);`;
                  const buttonTitle = selectedEngine.includes(listSite[site].siteTypeID) ? `title="${IS_CHN ? "您常用的搜索引擎" : "Commonly used search engine"}"` : ``;
                  returnHtml += `<li>
                    <button class="${def.notice.searchButton}" id="${listSite[site].siteTypeID}" ${buttonTitle}>
                      <span class="${def.notice.favicon} ${def.notice.random}_icon" style="${iconStyle}"></span>
                      <span class="${def.notice.random}_iconText">
                        ${listSite[site].siteNickName}<sup>${selectedEngine.includes(listSite[site].siteTypeID) ? "\ud83d\udd16" : ""}</sup>
                      </span>
                    </button>
                  </li>`;
                }
                return `<ul class="${def.notice.searchList}">${returnHtml}</ul>`;
              },
              listSelectSearchEngine: () => {
                let returnHtml = "";
                for (let site in listSite) {
                  if (!hasOwnProperty.call(listSite, site) || listSite[site].siteTypeID === 0) continue;
                  const iconStyle = `background-position:0 ${(1 - listSite[site].siteTypeID) * 32}px;background-attachment:local;background-size:32px auto;`;
                  const inputStatus = selectedEngine.includes(listSite[site].siteTypeID) ? "checked" : "disabled";
                  returnHtml += `<label class="${def.notice.card}">
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
                  </label>`;
                }
                return returnHtml;
              },
              setConfigure: () => {
                sleep(5e2)(addAction.closeConfig()).then(isClosed => {
                  if (!isClosed) return;
                  const configText = `<fieldset class="${def.notice.fieldset}">
                    <legend class="${def.notice.legend}" title="Version ${def.var.curVersion}">
                      ${IS_CHN ? "高级功能参数设置" : "Advanced Feature Settings"}
                    </legend>
                    <ur class="${def.notice.settingList}">
                      <li class="${def.notice.random}__content">
                        <div><span>${IS_CHN ? "请选择三个最常用的搜索引擎：" : "Choose three search engines:"}</span>
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
                        <div title="${IS_CHN ? "实验性功能" : "Beta Version"}"><span>${IS_CHN ? "去除搜索结果广告" : "Remove Ads"}</span>
                        <sup style="padding:0;font-style:italic;color:#dc143c;font-size:10px">Beta!</sup></div>
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
                  </fieldset>`;
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
                  const { trigger: antiResultsFilter, filter: resultFilters } = await getResultFilterData();
                  const infoText = IS_CHN
                    ? `设置拦截关键词以数组为标准格式，每行一组过滤关键词（注意：非正则语句须转义字符，且最末行尾无逗号），支持高级正则表达式语法，不区分大小写。<em>详细设置规则请查看『设置指引』。</em>`
                    : `Filter keyword settings use Array as standard format, one filter keyword per line. Supports regular expressions and is not case-sensitive. <em>See "Guide" for detailed setting rules!</em>`;
                  const placeholder = IS_CHN
                    ? `设置如下数组格式：\n[\n   "任意关键词",\n   "任意网址但要注意转义",\n   "\\\\/\\\\/test\\\\.cn\\\\/id-\\\\d+",\n   "\\\\(\\\\?\\\\=非正则须转义\\\\)",`
                    : `Set Array as follows: \n[\n   "Any keywords",\n   "Any URLs must be escaped",\n   "v\\\\.test\\\\.com\\\\/test\\\\.html",\n   \\\\(\\\\?\\\\:Non-regex escaped\\\\)",`;
                  const placeholderText = placeholder + `\n   "www\\\\.example\\\\.[a-z]{2,3}",\n   "(a|b)\\\\.test\\\\.com",\n   "keyword1|keyword[2345]",\n   "^(?!.*B).*A.*$"\n]`;
                  const resultFiltersJSON = resultFilters.length ? JSON.stringify(resultFilters, null, "  ") : "";
                  const filterHTML = `<fieldset class="${def.notice.fieldset}">
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
                        ${IS_CHN ? "(仅检测搜索结果列表内的可见文字和链接)" : "(ONLY DETECT VISIBLE TEXT AND LINKS)"}
                        </div>
                      </li>
                      <li style="display:flex;justify-content:space-between;">
                        <button id="${def.notice.random}_help" title="${IS_CHN ? "查看详细设置规则" : "View detailed setting rules (Chinese)"}">
                        ${IS_CHN ? "设置指引" : "Guide!"}
                        </button>
                        <div style="display:flex">
                          <button id="${def.notice.random}_cancel">${IS_CHN ? "取消" : "Cancel"}</button>
                          <button id="${def.notice.random}_submit">${IS_CHN ? "保存" : "Save"}</button>
                        </div>
                      </li>
                    </ul>
                  </fieldset>`;
                  const [title, text, type, scroll] = [`${def.var.scriptName} v${def.var.curVersion}`, filterHTML, def.notice.configuration, { maxHeight: 680, showOnHover: true }];
                  const filterInterface = GMnotification({ title, text, type, width: 380, closeWith: ["button"], scroll, progressBar: false, timeout: false, position: "topRight" });
                  const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
                  const tigger = qS(`#${def.notice.rf}`);
                  if (tigger && !tigger.checked) {
                    textarea.classList.add(def.notice.readonly);
                    textarea.setAttribute("readonly", true);
                  }
                  tigger?.addEventListener("change", changeEventOnTigger);
                  textarea?.addEventListener("input", addInputEventOnTextarea);
                  qS(`#${def.notice.random}_help`)?.addEventListener("click", () => void GMopenInTab(`${def.url.feedback}/288`, false));
                  qS(`#${def.notice.random}_cancel`)?.addEventListener("click", () => void NoticeX.close(filterInterface));
                  qS(`#${def.notice.random}_submit`)?.addEventListener("click", saveFilterResultData);
                });
              },
            };

            function changeEventOnTigger(event) {
              const textarea = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`);
              textarea?.classList.toggle(def.notice.readonly, !event.target.checked);
              textarea?.toggleAttribute("readonly", !event.target.checked);
            }

            async function saveFilterResultData() {
              try {
                const filterString = qS(`.${def.notice.random}_filter_textarea .${def.notice.random}_filter_content`).value.trim();
                const filterTrigger = qS(`#${def.notice.rf}`).checked;
                const parsedFilterString = filterString ? JSON.parse(filterString) : [];
                if (!safeArray.isArray(parsedFilterString) || asArray(parsedFilterString).SomeX(item => typeof item !== "string")) throw new Error("Format Error");
                const resultFilterData = { filter: uniq(parsedFilterString.filter(Boolean)), trigger: filterTrigger };
                GMsetValue(RESULTFILTER, encrypt(JSON.stringify(resultFilterData)));
                const successTitle = IS_CHN ? "保存成功！" : "Success!";
                const successText = IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>";
                if (await addAction.closeConfig()) GMnotification({ title: successTitle, text: createNoticeHTML(successText), callbacks: { onClose: [reload] } });
              } catch (_) {
                const errorMessage = IS_CHN ? "设置数据格式有误，请修正后重新提交。" : "The setting data format is incorrect!";
                const errorText = `<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31\u0020</e>${errorMessage}</dd>`;
                GMnotification({ text: createNoticeHTML(errorText), type: def.notice.error, newestOnTop: true, closeWith: ["click"] });
              }
            }

            async function addInputEventOnTextarea(event) {
              const target = event.target;
              try {
                const value = target.value.trim();
                if (value.length === 0) return target.setAttribute("style", "border: 1px solid #999");
                const previousCursorPosition = target.selectionStart;
                const formattedValue = JSON.stringify(JSON.parse(value), null, 2);
                const newCursorPosition = previousCursorPosition + formattedValue.length - target.value.length;
                const currentScrollTop = target.scrollTop;
                target.value = formattedValue;
                target.setAttribute("style", "border: 1px solid #999");
                await sleep(10, { instance: true });
                target.scrollTop = currentScrollTop;
                target.setSelectionRange(newCursorPosition, newCursorPosition);
              } catch (_) {
                target.setAttribute("style", "border: 2px solid #dc143c");
              }
            }

            function setupClickEventOnCard(item) {
              item?.addEventListener("click", () => {
                const splitTypeName = getUrlParam(listCurrentSite.splitTypeName).trim();
                const isImageType = listCurrentSite.imageType.includes(splitTypeName);
                for (const [type, typeID] of safeObject.entries(newSiteType)) {
                  if (typeID !== Number(item.id)) continue;
                  const siteType = type.toLowerCase();
                  const url = isImageType ? listSite[siteType].imageURL : listSite[siteType].webURL;
                  const fullURL = decodeURI(url + getQueryString());
                  if (localWindow) top.location.href = fullURL;
                  else GMopenInTab(fullURL, false);
                  break;
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
                } else qA(`input[name='${def.notice.card}_lists']:not(:checked)`).forEach(item => (item.disabled = true));
              });
            }

            function submitKeywordColor() {
              let inputFgColor, inputBgColor;
              const colorReg =
                /^(?:#[0-9a-f]{3,4}|#[0-9a-f]{6}|#[0-9a-f]{8}|rgba\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*((?!1.[1-9])[0-1]?(\.[0-9]{1,3})?)\)|rgb\(((([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))))|(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\s+([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))(\s+\/\s+((\d+%)|1|(0\.\d+)))?))\)|transparent|currentcolor)$/i;
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
                const customColor = { foregroundColor: inputFgColor.trim().toLowerCase(), backgroundColor: inputBgColor.trim().toLowerCase() };
                _config_date_ = { ..._config_date_, keywordHighlight: true, customColor };
                GMsetValue(CONFIGURE, encrypt(JSON.stringify(_config_date_)));
              };
              inputFgColor = prompt(foregroundColorText, customColor.foregroundColor);
              if (inputFgColor === null) return;
              else if (colorReg.test(inputFgColor.trim())) {
                inputBgColor = prompt(backgroundColorText, customColor.backgroundColor);
                if (inputBgColor === null) return;
                else if (colorReg.test(inputBgColor.trim())) {
                  const confirmForegroundColor = inputFgColor.trim().startsWith("#") ? inputFgColor.trim().toUpperCase() : inputFgColor.trim().toLowerCase();
                  const confirmbackgroundColor = inputBgColor.trim().startsWith("#") ? inputBgColor.trim().toUpperCase() : inputBgColor.trim().toLowerCase();
                  const confirmText = `${confirmColorsText}${confirmfgColorText}${confirmForegroundColor}${fonfirmbgColorText}${confirmbackgroundColor}`;
                  if (!confirm(confirmText)) return;
                  const text = createNoticeHTML(IS_CHN ? "<dd>搜索关键词自定义颜色已保存，当前页面即将刷新！</dd>" : "<dd>Search keywords custom color has been saved!</dd>");
                  addAction.closeConfig() && GMnotification({ title: IS_CHN ? "自定义颜色保存" : "Save Custom Color", text, callbacks: { onShow: [saveData], onClose: [reload] } });
                } else alert(IS_CHN ? "背景色 格式输入错误！" : "Background-color input-format error!");
              } else alert(IS_CHN ? "前景色（字体颜色） 格式输入错误！" : "Foreground-color (font-color) input-format error!");
            }

            function cleanSelectedCard() {
              qA(`input[name='${def.notice.card}_lists']:checked:enabled`).forEach(node => node.click());
            }

            function showCustomColor(event) {
              qS(`#${def.notice.random}_customColor`).style.display = event.target.checked ? "inline-block" : "none";
            }

            async function saveConfigureData() {
              const selectEngineList = qA(`input[name='${def.notice.card}_lists']:checked`).map(item => Number(item.dataset.sn));
              if (selectEngineList.length < 3) {
                const noticeText = IS_CHN
                  ? `\u0020您需要选择「三个」搜索引擎，还少<em>${3 - selectEngineList.length}</em>个呢！`
                  : `\u0020Please select <b>three</b> search engines, still less<em>${3 - selectEngineList.length}</em>`;
                const text = createNoticeHTML(`<dd><e style="font-size:24px;vertical-align:bottom">\ud83d\ude31</e>${noticeText}</dd>`);
                return GMnotification({ text, type: def.notice.error, newestOnTop: true, closeWith: ["click"] });
              }
              const configKeys = ["hk", "gj", "lw", "kh", "ar", "aa", "au"];
              const configValues = configKeys.map(key => qS(`#${def.notice[key]}`).checked);
              const [isHotkey, googleJump, localWindow, keywordHighlight, antiLinkRedirect, antiAds, isAutoUpdate] = configValues;
              const _config_date_ = { isAutoUpdate, keywordHighlight, isHotkey, selectedEngine: selectEngineList, localWindow, googleJump, antiLinkRedirect, antiAds, customColor };
              GMsetValue(CONFIGURE, encrypt(JSON.stringify(_config_date_)));
              if (await addAction.closeConfig()) {
                const text = createNoticeHTML(IS_CHN ? "<dd>设置参数已成功保存，页面稍后自动刷新！</dd>" : "<dd>The data is saved successfully, Page will refresh!</dd>");
                GMnotification({ title: IS_CHN ? "保存成功！" : "Success!", text, callbacks: { onClose: [reload] } });
              }
            }

            function insertMenus() {
              const parameter_Set_Menu = `\ufff0\u2699\ufe0f ${IS_CHN ? "搜索引擎助手高级设置" : "Advanced Feature Settings "}${isHotkey ? "(E)" : ""}`;
              GMregisterMenuCommand(parameter_Set_Menu, addAction.setConfigure) && DEBUG("%cInstalling Parameter_Set_Menu", "color:#808080");
              const filter_Set_Menu = `\ufff2\ud83d\udcdb ${IS_CHN ? "搜索结果拦截词设置" : "SearchResult Filter Settings "}${isHotkey ? "(B)" : ""}`;
              GMregisterMenuCommand(filter_Set_Menu, addAction.filterResult) && DEBUG("%cInstalling Filter_Set_Menu", "color:#808080");
              const engine_List_Menu = `\ufff4\ud83d\udc4b ${IS_CHN ? "嗨，你想去哪里吖？" : "Hi, Where to visit? "} ${isHotkey ? "(V)" : ""}`;
              GMregisterMenuCommand(engine_List_Menu, addAction.listEngine) && DEBUG("%cInstalling Engine_List_Menu", "color:#808080");
              isHotkey ? insertHotkey() : DEBUG("%cNo Hotkey_Setting", "color:#a9a9a9");
            }

            function insertHotkey() {
              document.addEventListener("keydown", e => {
                const ekey = (e.altKey || e.key === "Alt" || e.code === "AltRight" || e.code === "AltLeft") && !e.ctrlKey && !e.shiftKey && !e.metaKey;
                if (e.code === "KeyE" && ekey) handleClickEvent("setConfigure", 1e3, e);
                else if (e.code === "KeyV" && ekey) handleClickEvent("listEngine", 1e3, e);
                else if (e.code === "KeyB" && ekey) handleClickEvent("filterResult", 1e3, e);
              }) || DEBUG("%cInstalling Hotkey_Setting", "color:#808080");
            }

            function handleClickEvent(name, time, event) {
              stopEventPropagation(event);
              const currentTime = performance.now();
              currentTime - def.count.clickTimer > time && (def.count.clickTimer = currentTime) && addAction[name]();
            }

            function showSystemInfo() {
              if (!CUR_WINDOW_TOP || listCurrentSite.siteTypeID === newSiteType.OTHERS) return;
              const isFavEngine = currentSite.siteTypeID !== newSiteType.OTHERS;
              const securityPolicy = getSecurityPolicy();
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
                `color:${securityPolicy ? "#006400" : "#0000ff"};${fontStyle}`,
                securityPolicy
              );
            }

            /* SEARCH_ENGINE_ASSISTANT_COMMAND_FUNCTIONS */

            const siteConfigMap = {
              baidu: {
                listTypes: { target: "#content_left", listName: "div", className: "result-op" },
                clear: () => safeRemoveNode("#con-ar"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.setProperty("--right", `-${width + 8}px`);
                },
              },
              google: {
                listTypes: { target: "div.MjjYud", listName: "div" },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  qS(`meta[name="color-scheme"]`) && buttonSection.classList.add(def.const.darkmode);
                  getGlobalGoogle(googleJump);
                },
              },
              bing: {
                listTypes: { target: "#b_results", listName: "li", className: "b_algo" },
                clear: () => safeRemoveNode("aside>ol#b_context"),
                applyCookie: () => safeObject.assign(GMunsafeWindow, { AwayTimeScrollTopPoleRS: false, AwayTimeThresholdCustomControl: false, AwayTimeThreshold: 864e3 }),
                applyButton: ({ buttonSection, target, shadow }) => {
                  insertAfter(buttonSection, target);
                  if (document.body.classList.contains("b_dark")) buttonSection.classList.add(def.const.darkmode);
                  if (IS_REAL_GECKO && CUR_PATH_NAME.includes("riverview/relatedvideo")) return buttonSection.style.setProperty("--margin", "3px 1px 0 0");
                  const formBox = qS(".b_searchboxForm:has(input.b_searchbox)");
                  if (!formBox || !/^detail(?:V|v)2$/.test(getUrlParam("view"))) return;
                  formBox.classList.add(`${def.const.scrollbarsV2}.width`);
                  buttonSection.style.setProperty("--margin", "1px -2px 0 6px");
                  qA(`input`, shadow).forEach(i => i.classList.add(def.const.scrollbarsV2));
                },
              },
              duckduckgo: {
                listTypes: { target: "ol.react-results--main", listName: "li" },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.setProperty("--right", `-${width + 8}px`);
                },
              },
              sogou: {
                listTypes: { target: "div.results", listName: "div", className: "vrwrap" },
                clear: () => safeRemoveNode("#right"),
                applyButton: async ({ buttonSection, target, shadow }) => {
                  const currentSearchType = getUrlParam(currentSite.splitTypeName);
                  if (currentSite.imageType.includes(currentSearchType)) {
                    await sleep(1e2, { instance: true });
                    if (qS(`#${def.const.rndButtonID}`) || !target) return;
                    insertAfter(buttonSection, target);
                    const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                    buttonSection.style.cssText += `--right:-${width + 10}px;--opacity:1`;
                    qA(`input`, shadow).forEach(node => node.classList.add(`${def.notice.random}_images`));
                  } else if (currentSearchType === "weixin") {
                    insertAfter(buttonSection, target);
                    buttonSection.style.cssText += "--position:relative;--opacity:1";
                    qA(`input`, shadow).forEach(node => node.classList.add(`${def.notice.random}_weixin`));
                  } else {
                    insertAfter(buttonSection, target);
                    await sleep(0, { instance: true });
                    const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                    buttonSection.style.cssText += `--right:-${width + 10}px;--opacity:1`;
                    qS(`#searchBtn2`)?.style.setProperty("right", `-${width + 120}px`);
                  }
                  addSearchButtonEvent(shadow);
                },
              },
              qwant: {
                listTypes: { target: "div[data-testid='containerWeb'] div[data-testid='sectionWeb']>div", listName: "div" },
                applyButton: async ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  await sleep(0, { instance: true });
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  const llmButtonWidth = parseInt(qS(`div[data-testid="llm-button-force"][class]`)?.getBoundingClientRect().width || 0);
                  buttonSection.style.setProperty("--right", `-${width + llmButtonWidth + 10}px`);
                },
              },
              yandex: {
                listTypes: { target: "#search-result", listName: "li" },
                clear: () => safeRemoveNode("div.content__right>div"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  if (document.body.classList.contains("i-ua_skin_dark")) buttonSection.classList.add(def.const.darkmode);
                },
              },
              so360: {
                listTypes: { target: "#main>ul.result", listName: "li", className: "res-list" },
                clear: () => safeRemoveNode("#side_wrap"),
              },
              toutiao: {
                listTypes: { target: "div.s-result-list", listName: "div", className: "result-content" },
                clear: () => safeRemoveNode(".main>.s-side-list>.result-content"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.cssText += `--right:-${width + 10}px;--opacity:1`;
                },
              },
              kaifa: {
                listTypes: { target: "ul.ant-list-items", listName: "li", className: "ant-list-item" },
                applyButton: ({ buttonSection, target }) => {
                  const input = qS("#search-box-container input[class~='ant-input']");
                  const width = parseInt(gCS(input).width || 604);
                  target.appendChild(buttonSection);
                  input?.style.setProperty("width", `${width}px`, "important");
                },
              },
              ecosia: {
                listTypes: { target: ".mainline__content>div:not([class])", listName: "div" },
                clear: () => safeRemoveNode("aside>div[data-test-id='sidebar-web-related-queries']"),
                applyCookie: () => {
                  const sValue = `a=0:as=1:cs=0:dt=pc:f=i:fr=0:fs=1:l=en:lt=${Date.now()}:mc=en-ww:nf=1:nt=1:pz=0:t=1:tt=0:tu=auto:wu=auto:ma=1`;
                  const option = { sKey: "ECFG", sValue, sEnd: 30, sDomain: "ecosia.org", sPath: "/", sSomeSite: "Lax" };
                  !/:nt=1:/.test(gbCookies.getItem("ECFG")) && setPreferences(option);
                },
                applyButton: ({ buttonSection, target, shadow }) => {
                  const insertButtonsFn = () => !qS(`#${def.const.rndButtonID}`) && target && (insertAfter(buttonSection, target), addSearchButtonEvent(shadow));
                  def.const.requestIdleCallback(insertButtonsFn, { timeout: 8e2 });
                },
              },
              yahoo: {
                listTypes: { target: "#web>ol", listName: "li" },
                clear: () => safeRemoveNode("#right>ol"),
                applyButton: ({ buttonSection, target }) => {
                  if ([...currentSite.imageType, "video", "news"].includes(getUrlParam(currentSite.splitTypeName))) {
                    target.appendChild(buttonSection);
                    buttonSection.style.setProperty("--height", `44px`);
                  } else {
                    insertAfter(buttonSection, target);
                    const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                    buttonSection.style.setProperty("--right", `-${10 + width}px`);
                  }
                },
              },
              you: { listTypes: { target: "[data-floating-ui-portal]>[role='dialog'][data-open='true'] div>section", listName: "article" } },
              startpage: {
                listTypes: { target: "#main>div.w-gl", listName: "div", className: "result" },
                applyCookie: () => {
                  const sValue = `date_timeEEEworldN1Ndisable_family_filterEEE0N1Ndisable_open_in_new_windowEEE0N1Nenable_post_methodEEE0N1Nenable_proxy_safety_suggestEEE1N1Nenable_stay_controlEEE0N1Ninstant_answersEEE1N1Nlang_homepageEEEs/device/enN1NlanguageEEEenglishN1Nlanguage_uiEEEenglishN1Nnum_of_resultsEEE20N1Nsearch_results_regionEEEallN1NsuggestionsEEE1N1Nwt_unitEEEcelsius`;
                  const option = { sKey: "preferences", sValue, sEnd: 30, sDomain: "startpage.com", sPath: "/", sSecure: true };
                  !/(?:disable_open_in_new_windowEEE0|enable_post_methodEEE0)/.test(gbCookies.getItem("preferences")) && setPreferences(option);
                },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  qS("meta[name='theme-color']")?.getAttribute("content") === "#0c0d0f" && buttonSection.classList.add(def.const.darkmode);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  const formSection = qS(`#header-search-form>.search-form-relative-container`);
                  const maxWidth = parseInt(gCS(formSection).maxWidth) + width;
                  formSection?.style.setProperty("max-width", `${maxWidth}px`);
                },
              },
              brave: {
                listTypes: { target: "#results", listName: "div", className: "snippet" },
                applyCookie: () => {
                  const option = { sKey: "olnt", sValue: "1", sEnd: 30, sPath: "/", sSameSite: "Lax", sSecure: true };
                  gbCookies.getItem("olnt") !== "1" && setPreferences(option);
                },
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.setProperty("--right", `-${width + 10}px`);
                },
                clear: () => safeRemoveNode("aside>div"),
              },
              yep: {
                listTypes: { target: "div[class$='-results']>div>div", listName: "div" },
                applyButton: async ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  await sleep(0, { instance: true });
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.setProperty("--right", `-${10 + width}px`);
                },
              },
              mojeek: {
                listTypes: { target: "ul.results-standard", listName: "li", className: "r0" },
                clear: () => safeRemoveNode(".right-col div.infobox.infobox-right"),
                applyButton: ({ buttonSection, target }) => {
                  insertAfter(buttonSection, target);
                  qS(`link#theme`)?.href.includes("dark") && buttonSection.classList.add(def.const.darkmode);
                  const width = parseInt(buttonSection.getBoundingClientRect().width || 2e2);
                  buttonSection.style.setProperty("--right", `-${10 + width}px`);
                },
              },
              searxng: {
                listTypes: { target: "div#urls", listName: "article", className: "result" },
                clear: () => safeRemoveNode("#infoboxes"),
                applyCookie: () => {
                  (gbCookies.getItem("method") !== "GET" || gbCookies.getItem("results_on_new_tab") !== "1") &&
                    setPreferences(
                      { sKey: "method", sValue: "GET", sEnd: 30, sPath: "/" },
                      { sKey: "results_on_new_tab", sValue: "1", sEnd: 30, sPath: "/" },
                      { sKey: "theme", sValue: "simple", sEnd: 30, sPath: "/" },
                      { sKey: "simple_style", sValue: "auto", sEnd: 30, sPath: "/" }
                    );
                },
                applyButton: ({ buttonSection, target }) => void target.appendChild(buttonSection),
              },
            };

            function setPreferences(...ops) {
              const loadText = tTP.createHTML(`<center><h2>Loading preset preferences...</h2></center>`);
              return ops.forEach(o => gbCookies.setItem(o)), (document.documentElement.innerHTML = loadText), location.replace(location.href);
            }

            function insertCSS(currentSite) {
              updateAdoptedStyleSheets(document, currentSite.overrideCss, def.const.rndclassName);
            }

            function insertStyle() {
              updateAdoptedStyleSheets(document, `${def.var.style}${def.var.iconstyle}${keywordHighlight ? def.var.hlstyle : ""}`, def.const.rndstyleName);
            }

            function insertButtons() {
              try {
                const target = qS(currentSite.mainSelector);
                if (!target || !getQueryString()) return;
                const buttonSection = cE("gb-button", { id: def.const.rndButtonID });
                const shadow = def.const.attachShadow.call(buttonSection, { mode: "closed" });
                const darkModeCssText = currentSite.darkModeCss ? `${currentSite.darkModeCss}` : ``;
                const buttonCssText = `${currentSite.buttonCssText}${darkModeCssText}`;
                shadow.innerHTML = tTP.createHTML(def.var.button);
                updateAdoptedStyleSheets(shadow, buttonCssText, def.const.buttons);
                applyButtons(buttonSection, target, shadow);
                addSearchButtonEvent(shadow);
                scrollDetect(shadow);
              } catch (e) {
                ERROR(`${e.name} in InsertButtons:`, e.message);
              }
            }

            function applyButtons(buttonSection, target, shadow) {
              if (currentSite.siteTypeID === newSiteType.OTHERS || qS(`#${def.const.rndButtonID}`)) return;
              const applyCookieMethod = siteConfigMap[currentSiteName]?.applyCookie;
              const applyButtonMethod = siteConfigMap[currentSiteName]?.applyButton;
              typeof applyCookieMethod === "function" && applyCookieMethod();
              typeof applyButtonMethod === "function" ? applyButtonMethod({ buttonSection, target, shadow }) : insertAfter(buttonSection, target);
            }

            function setupScrollButton(buttonSet) {
              const toggleScrollClass = () => {
                const result = qS(`#tsf button[type='submit']`)?.getBoundingClientRect().height < 35 || qS(`#miniheader`)?.style.marginTop === "0px";
                buttonSet.forEach(([element, className]) => element?.classList.toggle(className, Boolean(result)));
                return result;
              };
              const throttleToggleScroll = throttle({ fn: toggleScrollClass, timer: "scroll", delay: 50, immed: true });
              document.addEventListener("scroll", throttleToggleScroll) ?? document.addEventListener("scrollend", toggleScrollClass);
              const initInterval = rAF.setInterval(() => toggleScrollClass() && rAF.clearInterval(initInterval), 50);
              const terminateInterval = async () => await sleep(2e3)(initInterval).then(rAF.clearInterval);
              document.readyState === "complete" ? terminateInterval() : global.addEventListener("load", terminateInterval);
            }

            function scrollDetect(shadow, buttonSet = new Set()) {
              if (!qS(`#${def.const.rndButtonID}`) || ![newSiteType.GOOGLE, newSiteType.BING].includes(currentSite.siteTypeID)) return;
              buttonSet.add([qS(`#${def.const.rndButtonID}`, document), def.const.scrollspan]);
              buttonSet.add([qS(`#${def.const.leftButton} input`, shadow), def.const.scrollbars]);
              buttonSet.add([qS(`#${def.const.rightButton} input`, shadow), def.const.scrollbars]);
              setupScrollButton(buttonSet);
            }

            function addSearchButtonEvent(shadow) {
              if (!qS(`#${def.const.rndButtonID}`)) return;
              qA(`span[sn]:not([event-insert])`, shadow).forEach(node => {
                if (node.hasAttribute("event-insert")) return;
                node.setAttribute("event-insert", true);
                const inputElement = qS("input", node);
                const siteTypeID = Number(node.getAttribute("sn"));
                inputElement.addEventListener("mousedown", stopEventPropagation);
                inputElement.addEventListener("click", (_, selectedSiteData) => {
                  const imageSearch = getUrlParam(currentSite.splitTypeName)?.trim();
                  if (siteTypeID === selectedSite[0].siteTypeID) selectedSiteData = selectedSite[0];
                  else if (siteTypeID === selectedSite[1].siteTypeID) selectedSiteData = selectedSite[1];
                  else return;
                  const isImageSearch = currentSite.imageType.includes(imageSearch);
                  const gotoUrl = isImageSearch ? selectedSiteData.imageURL : selectedSiteData.webURL;
                  const finalUrl = decodeURI(gotoUrl + getQueryString());
                  if (localWindow) top.location.href = finalUrl;
                  else GMopenInTab(finalUrl, false);
                });
              }) ?? DEBUG("%cInstalling Search_Buttons", "color:#808080");
            }

            function createNotice(listName, className, userdFilter) {
              const listAttrib = className ? ` class="${className}"` : ``;
              const noticeText = IS_CHN ? "本页所有搜索结果均被屏蔽，如异常请检查过滤词。" : "All results are blocked, Check the filters if abnormal.";
              const filterArray = userdFilter ? `<gb-filters class="code">${IS_CHN ? "过滤词:" : "Filter:"} [${userdFilter}]</gb-filters>` : ``;
              const tips = `<br/>✄┏━┓╋┏┓╋╋╋┏━━━┓╋╋╋╋╋╋╋╋┏┓┏┓╋┏┓<br/>✄┃┃┗┓┃┃╋╋╋┃┏━┓┃╋╋╋╋╋╋╋╋┃┣┛┗┓┃┃<br/>✄┃┏┓┗┛┣━━┓┃┗━┛┣━━┳━━┳┓┏┫┣┓┏┛┃┃<br/>✄┃┃┗┓┃┃┏┓┃┃┏┓┏┫┃━┫━━┫┃┃┃┃┃┃╋┗┛<br/>✄┃┃╋┃┃┃┗┛┃┃┃┃┗┫┃━╋━━┃┗┛┃┗┫┗┓┏┓<br/>✄┗┛╋┗━┻━━┛┗┛┗━┻━━┻━━┻━━┻━┻━┛┗┛<br/><br/>`;
              const noticeCode = tTP.createHTML(`<${listName}${listAttrib} ${def.const.const.warn}>${tips}${noticeText} — ${def.var.scriptName}${filterArray}</${listName}>`);
              return noticeCode;
            }

            function showEmptyNotice(siteName) {
              const siteConfig = siteConfigMap[siteName];
              if (!siteConfig) return;
              const { target, listName, className } = siteConfig.listTypes;
              const noticeNode = qS(`${target} [${def.const.const.warn}]`);
              if (noticeNode) return;
              const usedFilterWordsStr = escapeHTML([...usedFilterWords].join(", "));
              const noticeCode = createNotice(listName, className, usedFilterWordsStr);
              const el = qS(target)?.firstElementChild;
              if (el) el.insertAdjacentHTML(el.classList.contains(def.const.translucent) || el.classList.contains(def.const.disappear) ? "beforebegin" : "afterend", noticeCode);
              usedFilterWords.clear();
            }

            function filterSearchResults(filterObj) {
              if (resultFilters.length === 0 || getUrlParam("iframeid")) return;
              const { qs, delay } = filterObj ?? {};
              qs && deBounce({ fn: filterSearchResultsProcess, timer: "filterSearchResults", delay: delay || 50 })(qs);
            }

            async function filterSearchResultsProcess(querystring) {
              const selectors = buildSelectors(querystring);
              const elements = qA(selectors);
              if (elements.length === 0) return;
              const returnContent = new Map();
              elements.forEach(item => processANodeURL(item, returnContent));
              if (returnContent.size === 0) return;
              returnContent.forEach((content, item) => matchFilters(item, content));
              await sleep(1e2, { instance: true });
              if (usedFilterWords.size > 0 && qA(querystring.split(/,(?![^()]*\))/g)[0]).length >= 2) handleRemainingResults(qA(selectors.split(/,(?![^()]*\))/g)[0]).length);
              returnContent.clear();
            }

            function processMatchedItem(item, content, filter) {
              if (IS_DEBUG) addDebugNotice(item, filter);
              usedFilterWords.add(filter);
              item.classList.add(IS_DEBUG ? def.const.translucent : def.const.disappear);
              DEBUG("Filter.match:", { filter, item, content }) ?? qA("a", item).forEach(node => node.setAttribute(def.const.const.anti, "blocked"));
            }

            function addDebugNotice(item, filter) {
              if (qS("notice-label", item)) return;
              item.prepend(cE("notice-label", { class: "code", textContent: `<![CDATA[ "${filter}" ]]>` }));
            }

            function adjustUI(siteName) {
              const logicFunction = siteConfigMap[siteName]?.clear;
              if (typeof logicFunction === "function") logicFunction();
            }

            function buildSelectors(querystring) {
              const array = querystring.split(/,(?![^()]*\))/g);
              return array.map(item => `${item}:not(.${def.const.disappear},.${def.const.translucent},[${def.const.const.warn}])`).join(",");
            }

            function processANodeURL(item, returnContent) {
              if (item?.nodeType !== Node.ELEMENT_NODE) return;
              const href = qS("a:not([data-testid='result-extras-site-search-link']):not([aria-label^='Anonymous']):not([href*='.bing.com/ck/a?'])", item)?.href ?? "";
              const url = [1, 5, 8, 12].includes(listCurrentSite.siteTypeID) ? qS(`.${def.const.filtered}`, item)?.textContent.trim() || "" : href;
              const content = item.innerText?.replace(/[\t\r\n\ue62b]/g, "").trim() + getDecodeURI(url);
              if (content) returnContent.set(item, content);
            }

            function matchFilters(item, content) {
              if (item?.nodeType !== Node.ELEMENT_NODE) return;
              try {
                for (const filter of resultFilters) if (new RegExp(filter, "i").test(content)) return processMatchedItem(item, content, filter);
              } catch (e) {
                ERROR(`${e.name} in MatchFilters:`, e.message);
              }
            }

            function handleRemainingResults(remainingResults) {
              if (remainingResults > 2) return;
              remainingResults === 0 ? showEmptyNotice(currentSiteName) : qS(`[${def.const.const.warn}]`)?.remove();
              adjustUI(currentSiteName);
            }

            function getDecodeURI(href, temp) {
              if (!href || typeof href !== "string" || href.startsWith("javascript:")) return "";
              const fixPercent = s => s.replace(/%(?![0-9A-Fa-f]{2})/g, "%25");
              let result = fixPercent(href);
              while (((temp = result), (result = decodeURIComponent(fixPercent(result))), result !== temp));
              return `\ue620${result}\ue620`;
            }

            function getGlobalGoogle(permission, host = "www.google.com") {
              if (!permission || CUR_HOST_NAME === host) return;
              try {
                const url = `${CUR_PROTOCOL}//${host}/ncr?prev=${CUR_PATH_NAME}${encodeURIComponent(location.search)}`;
                const text = createNoticeHTML(`<dd class="${def.notice.center}">${IS_CHN ? "即将跳转至 Google.com (NCR)" : "Jump to Google.com (NCR)"}</dd>`);
                GMnotification({ title: "Google NCR", text, type: def.notice.info, callbacks: { beforeClose: [() => top.location.replace(url)] } });
              } catch (e) {
                ERROR(`${e.name} in GetGlobalGoogle:`, e.message);
              }
            }

            function processMainThreadTasks() {
              const indexPage = checkIndexPage();
              const securityPolicy = getSecurityPolicy();
              if (currentSite.siteTypeID !== newSiteType.OTHERS && !indexPage && !securityPolicy && !qS(`#${def.const.rndButtonID}`)) insertButtons();
              const { siteTypeID, overrideCss, antiAdsFn, resultListProp, antiRedirectFn } = listCurrentSite;
              if (siteTypeID === newSiteType.OTHERS) return;
              !indexPage && !securityPolicy && overrideCss && !findAdoptedStyleSheet(def.const.rndclassName) && insertCSS(listCurrentSite);
              !findAdoptedStyleSheet(def.const.rndstyleName) && insertStyle();
              !securityPolicy && antiAds && antiAdsFn?.();
              !indexPage && !securityPolicy && antiResultsFilter && filterSearchResults(resultListProp);
              !indexPage && !securityPolicy && antiLinkRedirect && antiRedirectFn?.();
            }

            function searchButtonAndStylesObserve() {
              const observer = new MutationObserver(processMainThreadTasks);
              observer.observe(document, { childList: true, subtree: true }) ?? processMainThreadTasks();
              if (global.navigation) global.navigation.addEventListener("navigate", processMainThreadTasks);
              else ["pushState", "replaceState"].forEach(event => global.addEventListener(event, processMainThreadTasks));
            }

            function requestIconsForScriptUpdate(requestVersion) {
              try {
                if (decrypt(requestVersion) === def.var.curVersion) return;
                DEBUG("%cRequest Remote icon data for script update.", "color:#25f") ?? GMsetValue(VERSION, encrypt(def.var.curVersion)) ?? updateToRequestIcon();
              } catch (e) {
                ERROR(`${e.name} in RequestIconsForScriptUpdate:`, e.message);
              }
            }

            /* SEARCH_ENGINE_ASSISTANT_MAIN_PROCESS */

            void (function (updateFlag, requestVersion) {
              searchButtonAndStylesObserve();
              if (!CUR_WINDOW_TOP) return;
              parseUpdateInformatio(getUpdateInformation(updateFlag));
              showSystemInfo();
              insertMenus();
              requestIconsForScriptUpdate(requestVersion);
            })(await cache.get(AUTOCHECK), await GMgetValue(VERSION));
          })(
            updateFlag => {
              if (!CUR_WINDOW_TOP || !isAutoUpdate || (updateFlag && !setDebuggerMode())) return;
              const updateDetectionResponses = updateDetectionAddress.map(addr => fetchUpdateResponse(addr));
              return Promise.any(updateDetectionResponses).catch(e => ERROR(`${e.name} in GetUpdateInformation:`, e.message) ?? object());
            },
            async updateResponse => {
              try {
                const response = await updateResponse;
                if (!response) return;
                const { res, url } = response;
                if (!res || !url) return showUpdateError();
                const [version, notes] = [extractVersion(res), extractNotes(res)];
                if (!version) return;
                const newUpdateHTML = generateUpdateHTML(version, generateUpdateList(notes));
                if (versionCompare(def.var.curVersion, version)) showNewUpdateNotify(version, newUpdateHTML, url);
                else showSuccessUpdateNotify();
              } catch (e) {
                ERROR(`${e.name} in ParseUpdateInformation: ${e?.message}`);
              }
            }
          );
        })(function () {
          const updateURLArray = [
            "1cGRhdGUuZ3JlYXN5Zm9yay5vcmclMkZzY3JpcHRzJTJGMTI5MDklMkZHb29nbGVfYmFpZHVfU3dpdGNoZXJfKEFMTF9pbl9PbmUpLm1ldGEuanM=",
            "yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGRjl5NG5nJTJGR3JlYXN5Rm9yay1TY3JpcHRzJTJGbWFzdGVyJTJGR29vZ2xlJTI1MjAlMjUyNiUyNTIwQmFpZHUlMjUyMFN3aXRjaGVyLm1ldGEuanM=",
            "vcGVudXNlcmpzLm9yZyUyRmluc3RhbGwlMkZmOXk0bmclMkZHb29nbGVfYmFpZHVfU3dpdGNoZXJfKEFMTF9pbl9PbmUpLm1ldGEuanM=",
          ];
          return updateURLArray.map(url => `${decrypt(`aHR0cHMlM0ElMkYlMkZ${url}`)}?${generateRandomString(32, "hex")}`);
        });
      })(
        async () => {
          const customColor = { foregroundColor: "#f73131cd", backgroundColor: "#ffff80ad" };
          const defaults = { isAutoUpdate: true, keywordHighlight: false, isHotkey: true, selectedEngine: [1, 2, 3], localWindow: true };
          safeObject.assign(defaults, { googleJump: true, antiLinkRedirect: true, antiAds: false, customColor });
          const configure = await GMgetValue(CONFIGURE);
          if (!configure) {
            const values = await GMlistValues();
            values.forEach(key => GMdeleteValue(key));
            return GMsetValue(CONFIGURE, encrypt(JSON.stringify(defaults))), defaults;
          }
          try {
            const config_date = JSON.parse(decrypt(configure));
            return { ...defaults, ...config_date, selectedEngine: safeArray.isArray(config_date.selectedEngine) ? config_date.selectedEngine : defaults.selectedEngine };
          } catch (_) {
            return defaults;
          }
        },
        async () => {
          const defaults = { filter: [], trigger: false };
          try {
            const resultFilter = await GMgetValue(RESULTFILTER);
            if (!resultFilter) return defaults;
            const { filter, trigger } = JSON.parse(decrypt(resultFilter));
            return { filter: safeArray.isArray(filter) ? filter : [], trigger };
          } catch (_) {
            return defaults;
          }
        },
        url => {
          if (!CUR_WINDOW_TOP || !url) return;
          return new Promise((resolve, reject) => {
            const headers = { Accept: "*/*", Referer: url };
            const onload = response => {
              if (response.readyState !== 4) return;
              if (response.status === 200) {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result.replace("data:data:image/png;base64,", "data:"));
                reader.onerror = () => reject(new Error("Convert failed"));
                reader.readAsDataURL(response.response);
              } else if (response.status !== 0) reject(new Error("NoAccessError"));
            };
            const onerror = () => reject(new Error("NetworkError"));
            const ontimeout = () => reject(new Error("TimeoutError"));
            GMxmlhttpRequest({ url, headers, method: "GET", timeout: 5e3, responseType: "blob", onload, onerror, ontimeout });
          }).catch(e => Promise.reject(new Error("RequestRemoteIcon: " + e.message)));
        },
        options => {
          try {
            return new NoticeX({ ...options }).show();
          } catch (e) {
            ERROR(`${e.name} in GMnotification:`, e);
          }
        }
      );
    })(initTrustedTypesPolicy(), safeJSON, sessionStorage?.getItem(def.const.const.navinfo));
  },
  {
    method: Object.entries({
      SomeX(callback, thisArg = this) {
        for (let i = 0; i < this.length; i++) if (callback.call(thisArg, this[i], i, this)) return true;
      },
      FindX(callback, thisArg = this) {
        for (let i = 0; i < this.length; i++) if (callback.call(thisArg, this[i], i, this)) return this[i];
      },
    }),
    option: { writable: false, configurable: false, enumerable: false },
  },
  ((ctx, mS = [..."t𝚁TjLWO𝙳ZR𝚖𝚜i𝚗gE𝚎𝚠2H𝚘8YkxC𝙲N0GcBrF5Qda4𝙺XoK𝚆𝚣hIn7uw1e𝚌bpM𝚞PUJlS9szD𝚝Avm3𝚟6qfV𝚡y𝚊"]) => {
    const oC = ctx.Object.create.bind(null, null);
    const sP = (O, o) => O.create(O.getPrototypeOf(o), O.getOwnPropertyDescriptors(o));
    const eH = type => {
      const original = ctx.history[type];
      return function () {
        return ctx.dispatchEvent(new CustomEvent(type, { detail: [...arguments] })), original.apply(this, arguments);
      };
    };
    const tS = storageType => {
      try {
        ctx.addEventListener("error", e => (e.error?.name === "SecurityError" || e.message?.includes("SecurityError")) && e.preventDefault(), { once: true });
        return ctx[storageType].setItem("__gb_storage_test__", true), ctx[storageType].removeItem("__gb_storage_test__"), ctx[storageType];
      } catch (_) {
        return null;
      }
    };
    return { oC, mS, sP, eH, lS: tS("localStorage"), sS: tS("sessionStorage") };
  })(typeof window !== "undefined" ? window : this)
);
