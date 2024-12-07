// ==UserScript==
// @name               自动关闭知乎登录提示
// @name:en            Autoclose Zhihu Login Prompt
// @name:zh-CN         自动关闭知乎登录提示
// @name:zh-TW         自動關閉知乎登錄提示
// @version            2024.12.07.1
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
// @copyright          2023-2024, F9y4ng
// @run-at             document-start
// ==/UserScript==

/* jshint esversion: 11 */

void (function (w) {
  "use strict";

  let nologin = true;
  if (location.hostname.startsWith("link.")) {
    const target = decodeURIComponent(new URLSearchParams(location.search).get("target"));
    document.documentElement.textContent = "";
    location.replace(target);
  } else {
    const observer = new MutationObserver(hiddenLogin);
    const config = { childList: true, subtree: true };
    observer.observe(document, config);
    w.addEventListener("load", cloze);
    document.addEventListener("readystatechange", cloze);
  }

  function cloze(e) {
    document.body?.querySelector(`button[aria-label="关闭"][class~='Modal-closeButton']`)?.click();
    if (e.type === "load") nologin = false;
  }

  function hiddenLoginNode(node) {
    if (!nologin) return;
    const loginNode = node.querySelector(`button[aria-label="关闭"][class~='Modal-closeButton']`);
    if (!loginNode) return;
    loginNode.click();
    nologin = false;
  }

  function hiddenFloatNode(node) {
    const registFloatNode = node.querySelector(`body>div:not([class],[style],[id]):not(:has(.Modal-content)):not(:has(img[class~='Avatar'])) div[class^='css-']:has(svg[class*='css-'])`);
    if (!registFloatNode) return;
    registFloatNode.style.display = "none";
  }

  function hiddenLogin(mutationsList) {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];
      const type = mutation.type;
      if (type !== "childList") continue;
      const addedNodes = mutation.addedNodes;
      for (let j = 0; j < addedNodes.length; j++) {
        const node = addedNodes[j];
        if (node.nodeType !== Node.ELEMENT_NODE || node.nodeName !== "DIV" || node.attributes.length) continue;
        hiddenLoginNode(node);
        hiddenFloatNode(node);
      }
    }
  }
})(typeof window !== "undefined" ? window : this);
