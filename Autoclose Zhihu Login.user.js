// ==UserScript==
// @name               自动关闭知乎登录提示
// @name:en            Autoclose Zhihu Login Prompt
// @name:zh-CN         自动关闭知乎登录提示
// @name:zh-TW         自動關閉知乎登錄提示
// @version            2026.01.01.1
// @author             F9y4ng
// @description        自动关闭知乎自动弹出的登录与注册提示，仅仅用于关闭自动弹出的登录提示。
// @description:en     Autoclose Zhihu Login Prompt is only used to close the pop-up login and registration prompt.
// @description:zh-CN  自动关闭知乎自动弹出的登录与注册提示，仅仅用于关闭自动弹出的登录提示。
// @description:zh-TW  自動關閉知乎自動彈出的登錄與註冊提示，僅僅用於關閉自動彈出的登錄提示。
// @namespace          https://github.com/F9y4ng/GreasyFork-Scripts/
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nOWUuw4BURCGP5e4vYInUKkIjV6iI/EMtCqdqCREovUIWo030Go8AFFolCISrGwyJ1nr7FqXkwh/MsXO/LPf2dnZhV9UCMiYBBQAC5iZAgwFMDBxc3s8KwHoQsmrrvPeqBiwyXoV4B6P5WFW+YomfAEzKRZMAZAVtd+FMYBSTIxHDAHSYtx8GvDMFlW+EqA0EmOHe70NiANbMeaA5KcBbTEtgAkwdayuE6CiBayDfMm2SrKaF6AO7KSh4QM4B/1V1IC9GPqSq8r1Ach6jOoE9ICE38nLjoYxEHHUxpLvagBLIE8ARYE50NTUUvIkbj08tVvhZ8z8ha7sfKGJ8u/ZpQAAAABJRU5ErkJggg==
// @homepage           https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL        https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL         https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL          https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.meta.js
// @downloadURL        https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js
// @match              *://*.zhihu.com/*
// @grant              none
// @noframes           true
// @compatible         Edge version>=105
// @compatible         Chrome version>=105
// @compatible         Firefox version>=103
// @compatible         Opera version>=91
// @compatible         Safari version>=15.4
// @license            GPL-3.0-only
// @copyright          2023-2026, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (global) {
  "use strict";

  if (location.hostname.startsWith("link.")) {
    const target = decodeURIComponent(new URLSearchParams(location.search).get("target"));
    document.documentElement.textContent = "";
    location.replace(target);
  } else {
    const observer = new MutationObserver(hiddenLogin);
    const config = { childList: true, subtree: true };
    observer.observe(document, config);
  }

  function hiddenLoginNode(node) {
    const loginNode = node.querySelector(`button[aria-label="关闭"][class~='Modal-closeButton']`);
    if (!loginNode) return;
    document.documentElement.removeAttribute("style");
    if (!global.event || global.event.type === "load") loginNode.click();
  }

  function hiddenFloatNode(node) {
    const registFloatNode = node.querySelector(`body>div:not([class],[style],[id]):not(:has(.Modal-content)):not(:has(img[class~='Avatar'])) div[class^='css-']:has(svg[class*='css-'])`);
    if (registFloatNode) registFloatNode.style.display = "none";
  }

  function hiddenLogin(mutationsList) {
    mutationsList.forEach(mutation => {
      if (mutation.type !== "childList" && mutation.target.nodeName !== "BODY") return;
      mutation.addedNodes.forEach(node => {
        if (node.nodeName !== "DIV" || node.attributes.length !== 0) return;
        hiddenLoginNode(node);
        hiddenFloatNode(node);
      });
    });
  }
})(typeof window !== "undefined" ? window : this);
