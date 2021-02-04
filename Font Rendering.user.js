/* jshint esversion: 6 */
// ==UserScript==
// @name            字体渲染（自用脚本）
// @namespace       https://openuserjs.org/users/t3xtf0rm4tgmail.com
// @version         2021.02.04.2
// @icon            https://github.githubassets.com/favicons/favicon.svg
// @description     让每个页面的字体变得有质感，默认使用苹方字体加阴影，自用脚本不处理外部需求。
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @author          F9y4ng
// @include         *
// @grant           none
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @license         GPL-3.0-only
// @create          2020-11-24
// @copyright       2020-2021, F9y4ng
// @run-at          document-start
// ==/UserScript==

'use strict';

(function () {
  /* 你可以自定义以下内容 */

  const stroke_r = 0.1; // 字体描边：建议控制在0~1.0之间，关闭描边为0，默认0.1
  const shadow_r = 4; // 字体阴影：建议控制在4~8之间，关闭阴影为0，默认4
  const shadow_c = `#888`; // 阴影颜色：建议#777,#888,#999，或 rgba(136,136,136,0.8) 或依喜好修改，currentcolor为原字体颜色（慎用）
  const cssfun = `body:not(input):not(textarea):not(i):not(em):not(pre):not(code):not([class*="icon"]):not([class*="fa"]):not([class*="logo"]):not([class*="mi"]):not([class*="code"])`; // 可以继续添加需要屏蔽的标签或classname或ID

  /* 请勿修改以下代码 */

  const isdebug = false;
  const debug = isdebug ? console.log.bind(console) : () => {};
  let shadow = '';
  if (!isNaN(shadow_r) && shadow_r !== 0) {
    shadow = `text-shadow: 1px 1px ${shadow_r}px ${shadow_c}!important;`;
  }
  let stroke = '';
  if (!isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0) {
    stroke = `
    text-stroke: ${stroke_r}px !important;
    -webkit-text-stroke: ${stroke_r}px !important;
    `;
  }
  const tshadow = `
  ${cssfun} {
      ${shadow}
      font-family: "PingFang SC","Microsoft YaHei",sans-serif!important;
      ${stroke}
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }`;

  addStyle(tshadow, 'Font_Rendering', 'head');

  if (location.host.includes('.baidu.com')) {
    const callback = () => {
      if (document.querySelector('.Font_Rendering')) {
        debug('//-> found with selector ["Font_Rendering"]');
      } else {
        addStyle(tshadow, 'Font_Rendering', 'head');
      }
    };
    const opts = { childList: true, subtree: true };
    new MutationObserver(callback).observe(document, opts);
  }

  function addStyle(css, className, addToTarget, isReload, initType) {
    RAFInterval(
      () => {
        let addTo = document.querySelector(addToTarget);
        if (typeof addToTarget === 'undefined') {
          addTo = document.head || document.body || document.documentElement || document;
        }
        isReload = isReload || false;
        initType = initType || 'text/css';
        if (typeof addToTarget === 'undefined' || (typeof addToTarget !== 'undefined' && document.querySelector(addToTarget) !== null)) {
          if (isReload === true) {
            safeRemove(`.${className}`);
          } else if (isReload === false && document.querySelector(`.${className}`) !== null) {
            return true;
          }
          const cssNode = document.createElement('style');
          if (className !== null) {
            cssNode.className = className;
          }
          cssNode.setAttribute('type', initType);
          cssNode.innerHTML = css;
          try {
            addTo.appendChild(cssNode);
          } catch (e) {
            debug(`//-> ${e.name}`);
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
      const removeNodes = document.querySelectorAll(Css);
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].remove();
      }
    });
  }

  function safeFunction(func) {
    try {
      func();
    } catch (e) {
      debug(`//-> ${e.name}`);
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
