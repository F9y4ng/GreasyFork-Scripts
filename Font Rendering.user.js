// ==UserScript==
// @name            字体渲染（自用脚本）
// @namespace       https://openuserjs.org/users/t3xtf0rm4tgmail.com
// @version         2020.12.01.2
// @icon            https://github.githubassets.com/favicons/favicon.svg
// @description     让每个页面的字体变得有质感，默认使用苹方字体加阴影，自用脚本不处理外部需求。
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @author          F9y4ng
// @include         *
// @grant           none
// @license         GPL-3.0-only
// @create          2020-11-24
// @copyright       2020, F9y4ng
// @run-at          document-start
// ==/UserScript==

'use strict';

(function () {
  /* 你可以自定义以下内容 */

  const shadow_r = 4; // 建议控制在4~8之间，关闭阴影为0
  const shadow_c = `#888`; // 建议#777,#888,#999 或依喜好修改，currentcolor为原字体颜色（慎用）
  const cssfun = `body:not(input):not(textarea):not(i):not(em):not(pre):not(code):not([class*="icon"]):not([class*="fa"]):not([class*="logo"]):not([class*="mi"]):not([class*="code"])`; // 可以继续添加需要屏蔽的标签或classname或ID

  /* 请勿修改以下代码 */

  let isdebug = false;
  let shadow = '';
  let debug = isdebug ? console.log.bind(console) : function () {};
  if (shadow_r !== 0) {
    shadow = `text-shadow: 1px 1px ` + shadow_r + `px ` + shadow_c + `!important;`;
  }
  let tshadow = cssfun + `{` + shadow + `font-family: 'PingFang SC','Microsoft YaHei',sans-serif!important;}`;

  addStyle(tshadow, 'Font_Rendering', 'head');

  if (location.host.includes('.baidu.com')) {
    document.addEventListener('DOMNodeInserted', Callback, false);
  }

  function Callback(e) {
    if (e.target !== null && typeof e.target.className === 'string' && e.target.className.indexOf('Font_Rendering') === 0) {
      return;
    }
    setTimeout(function () {
      addStyle(tshadow, 'Font_Rendering', 'head');
    }, 200);
  }

  function addStyle(css, className, addToTarget, isReload, initType) {
    RAFInterval(
      function () {
        let addTo = document.querySelector(addToTarget);
        if (typeof addToTarget === 'undefined') {
          addTo = document.head || document.body || document.documentElement || document;
        }
        isReload = isReload || false;
        initType = initType || 'text/css';
        if (
          typeof addToTarget === 'undefined' ||
          (typeof addToTarget !== 'undefined' && document.querySelector(addToTarget) !== null)
        ) {
          if (isReload === true) {
            safeRemove('.' + className);
          } else if (isReload === false && document.querySelector('.' + className) !== null) {
            return true;
          }
          let cssNode = document.createElement('style');
          if (className !== null) {
            cssNode.className = className;
          }
          cssNode.setAttribute('type', initType);
          cssNode.innerHTML = css;
          try {
            addTo.appendChild(cssNode);
          } catch (e) {
            debug('//-> ' + e.name);
          }
          return true;
        }
      },
      200,
      true
    );
  }

  function safeRemove(Css) {
    safeFunction(() => {
      let removeNodes = document.querySelectorAll(Css);
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].remove();
      }
    });
  }

  function safeFunction(func) {
    try {
      func();
    } catch (e) {
      debug('//-> ' + e.name);
    }
  }

  function RAFInterval(callback, period, runNow) {
    const needCount = (period / 1000) * 60;
    let times = 0;
    if (runNow === true) {
      const shouldFinish = callback();
      if (shouldFinish) {
        return;
      }
    }

    function step() {
      if (times < needCount) {
        times++;
        requestAnimationFrame(step);
      } else {
        const shouldFinish = callback() || false;
        if (!shouldFinish) {
          times = 0;
          requestAnimationFrame(step);
        } else {
          return;
        }
      }
    }
    requestAnimationFrame(step);
  }
})();
