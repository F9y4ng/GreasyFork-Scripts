// ==UserScript==
// @name         自动关闭知乎登录提示
// @version      2023.09.02.1
// @author       F9y4ng
// @description  自动关闭知乎自动弹出的登录与注册提示，仅仅用于关闭自动弹出的登录提示，不干别的，未来也不会去干别的。
// @namespace    https://github.com/F9y4ng/GreasyFork-Scripts/
// @icon         https://img.icons8.com/windows/48/zhihu.png
// @homepage     https://f9y4ng.github.io/GreasyFork-Scripts/
// @homepageURL  https://f9y4ng.github.io/GreasyFork-Scripts/
// @supportURL   https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL    https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.meta.js
// @downloadURL  https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js
// @match        *://*.zhihu.com/*
// @grant        none
// @compatible   Edge version>=105
// @compatible   Chrome version>=105
// @compatible   Firefox version>=103
// @compatible   Opera version>=91
// @compatible   Safari version>=15.4
// @license      GPL-3.0-only
// @copyright    2023, F9y4ng
// @run-at       document-start
// ==/UserScript==

/* jshint esversion: 11 */

(function () {
  "use strict";

  let nologin = true;
  const observer = new MutationObserver(hiddenLogin);
  const config = { childList: true, subtree: true };
  observer.observe(document, config);
  document.addEventListener("readystatechange", checkNoLogin);

  function checkNoLogin() {
    if (document.readyState === "complete") {
      if (nologin) nologin = false;
      document.removeEventListener("readystatechange", checkNoLogin);
    }
  }

  function hiddenLoginNode(node) {
    if (!nologin) return;
    const loginNode = node.querySelector(`button[aria-label="关闭"][class~='Modal-closeButton']`);
    if (!loginNode) return;
    loginNode.click();
    nologin = false;
  }

  function hiddenFloatNode(node) {
    const registFloatNode = node.querySelector(
      `body>div:not([class],[style],[id]):not(:has(.Modal-content)):not(:has(img[class~='Avatar'])) div[class^='css-']:has(svg[class*='css-'])`
    );
    if (!registFloatNode) return;
    registFloatNode.style.display = "none";
  }

  function hiddenLogin(mutationsList, observer) {
    observer.disconnect();
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];
      const type = mutation.type;
      if (type !== "childList") continue;
      const addedNodes = mutation.addedNodes;
      for (let j = 0; j < addedNodes.length; j++) {
        const node = addedNodes[j];
        if (node.nodeType !== 1 || node.nodeName !== "DIV" || node.attributes.length) continue;
        hiddenLoginNode(node);
        hiddenFloatNode(node);
      }
    }
    observer.observe(document, config);
  }
})();
