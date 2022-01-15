/* jshint esversion: 9 */
// ==UserScript==
// @name            Google & baidu Switcher (ALL in One)
// @name:zh         谷歌、百度、必应的搜索引擎跳转工具
// @name:zh-TW      谷歌、百度、必應的搜索引擎跳轉工具
// @name:en         Google & baidu & Bing Switcher (ALL in One)
// @name:ja         Google、Baidu、Bingの検索エンジンのジャンプツール
// @version         4.0.20220115.1
// @author          F9y4ng
// @description     谷歌、百度、必应的搜索引擎跳转工具，脚本默认自动更新检测，可在菜单自定义设置必应按钮，搜索引擎跳转的最佳体验。
// @description:zh  谷歌、百度、必应的搜索引擎跳转工具，脚本默认自动更新检测，可在菜单自定义设置必应按钮，搜索引擎跳转的最佳体验。
// @description:en  Google, Baidu and Bing search engine tool, Automatically updated and detected by default, The Bing button can be customized.
// @description:zh-TW 谷歌、百度、必應的搜索引擎跳轉工具，腳本默認自動更新檢測，可在菜單自定義設置必應按鈕，搜索引擎跳轉的最佳體驗。
// @description:ja  Google、Baidu、Bingの検索エンジンのジャンプツールは、スクリプトのデフォルトの自動更新検出は、メニューのカスタマイズに必要なボタンを設定することができます。
// @namespace       https://openuserjs.org/scripts/f9y4ng/Google_baidu_Switcher_(ALL_in_One)
// @homepageURL     https://f9y4ng.github.io/GreasyFork-Scripts
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @updateURL       https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.meta.js
// @downloadURL     https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js
// @icon            https://img.icons8.com/fluent/48/000000/google-logo.png
// @include         *://*.google.*/search*
// @include         *://*.google.*/webhp*
// @include         *://www.baidu.com/*
// @include         *://ipv6.baidu.com/*
// @include         *://image.baidu.com/*
// @include         *://*.bing.com/*
// @exclude         *://www.baidu.com/link*
// @compatible      edge 兼容TamperMonkey, ViolentMonkey
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey4.0+, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @note            优化navigator.userAgentData相关函数，提高兼容性。/n修正Google按图搜索的样式判断错误*。
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM.registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_openInTab
// @grant           GM.openInTab
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @grant           GM_deleteValue
// @grant           GM.deleteValue
// @license         GPL-3.0-only
// @create          2015-10-07
// @copyright       2015-2022, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  "use strict";

  /* customize */

  const IS_OPEN_DEBUG = false; // set "true" to debug scripts, May cause script response slower.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  let GMsetValue, GMgetValue, GMdeleteValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMnotification, GMopenInTab;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const isGM = Boolean(handlerInfo.toLowerCase() === "greasemonkey");
  const debug = IS_OPEN_DEBUG ? console.log.bind(console) : () => {};
  const error = IS_OPEN_DEBUG ? console.error.bind(console) : () => {};

  /* GM selector */

  if (isGM) {
    GMsetValue = GM.setValue;
    GMgetValue = GM.getValue;
    GMdeleteValue = GM.deleteValue;
    GMregisterMenuCommand = GM.registerMenuCommand;
    GMunregisterMenuCommand = () => {};
    GMopenInTab = GM.openInTab;
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMdeleteValue = GM_deleteValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
    GMopenInTab = GM_openInTab;
  }

  /* default CONST Values */

  const defCon = {
    scriptName: GMinfo.script.name,
    curVersion: GMinfo.script.version,
    elCompat: (document.compatMode || "") === "CSS1Compat" ? document.documentElement : document.body,
    support: GMinfo.scriptMetaStr.match(/(\u0040\u0073\u0075\u0070\u0070\u006f\u0072\u0074\u0055\u0052\u004c\s+)(\S+)/)[2],
    encrypt: n => {
      return window.btoa(encodeURIComponent(n));
    },
    decrypt: n => {
      return decodeURIComponent(window.atob(n));
    },
    fetchResult: "success",
    titleCase: (str, bool) => {
      const RegExp = bool ? /( |^)[a-z]/g : /(^)[a-z]/g;
      return str
        .toString()
        .toLowerCase()
        .replace(RegExp, L => {
          return L.toUpperCase();
        });
    },
    isNeedUpdate: 0,
    updateNote: "",
    restTime: {},
    timer: 0,
    options: isGM ? false : { active: true, insert: true, setParent: true },
    durationTime: t => {
      let w, d, h, m, s;
      const wks = Math.floor(t / 1000 / 60 / 60 / 24 / 7);
      const ds = Math.floor(t / 1000 / 60 / 60 / 24 - wks * 7);
      const hs = Math.floor(t / 1000 / 60 / 60 - wks * 7 * 24 - ds * 24);
      const ms = Math.floor(t / 1000 / 60 - wks * 7 * 24 * 60 - ds * 24 * 60 - hs * 60);
      const ss = Math.floor(t / 1000 - wks * 7 * 24 * 60 * 60 - ds * 24 * 60 * 60 - hs * 60 * 60 - ms * 60);
      w = wks > 0 ? ` ${wks}wk` : "";
      d = ds > 0 ? ` ${ds}d` : "";
      h = hs > 0 ? ` ${hs}h` : "";
      m = ms > 0 ? ` ${ms}min` : "";
      s = wks > 0 || ds > 0 || hs > 0 || ms > 0 ? "" : ss > 0 ? ` ${ss}s` : " expired";
      return `${w}${d}${h}${m}${s}`;
    },
    showDate: s => {
      return s.replace(/w/i, " 周 ").replace(/d/i, " 天 ").replace(/h/i, " 小时 ").replace(/m/i, " 分钟 ").replace(/s/i, " 秒 ");
    },
    randString: (n, v) => {
      const a = "0123456789";
      const b = "abcdefghijklmnopqrstuvwxyz";
      const c = b.toUpperCase();
      let r, m;
      let s = "";
      let z = true;
      switch (v) {
        case "mix":
          m = Number(n - 1) || 8;
          r = b + a + c;
          z = false;
          break;
        case "char":
          m = Number(n) || 8;
          r = b + c;
          break;
        case "digit":
          m = Number(n) || 8;
          r = a;
          break;
        default:
          m = Number(n) || 8;
          r = c;
          break;
      }
      for (; m > 0; --m) {
        s += r[Math.floor(Math.random() * r.length)];
      }
      return z ? s : c[Math.floor(Math.random() * c.length)].concat(s);
    },
    isUpgrade: Boolean(getUrlParam("f9y4ng")),
    lastRuntime: () => {
      return new Date().toLocaleString("en-US", {
        timeZoneName: "short",
        hour12: false,
      });
    },
  };
  defCon.rName = defCon.randString(7, "char");
  const qA = str => {
    return Array.prototype.slice.call(document.querySelectorAll(str), 0);
  };
  const qS = str => {
    return document.querySelector(str);
  };
  const cE = str => {
    return document.createElement(str);
  };

  /* Define random aliases */

  const Notice = {
    noticejs: defCon.randString(7, "char"),
    item: defCon.randString(5, "mix"),
    close: defCon.randString(5, "mix"),
    center: defCon.randString(5, "mix"),
    success: defCon.randString(7, "char"),
    warning: defCon.randString(7, "char"),
    info: defCon.randString(7, "char"),
    error: defCon.randString(7, "char"),
    checkbox: defCon.randString(6, "char"),
    configuration: defCon.randString(7, "char"),
    fc: defCon.randString(8, "char"),
    fcSave: defCon.randString(5, "mix"),
    fcClose: defCon.randString(5, "mix"),
    fchk: defCon.randString(6, "char"),
    hotkey: defCon.randString(5, "mix"),
    fcGoogle: defCon.randString(6, "char"),
    google: defCon.randString(5, "mix"),
    fcKwhl: defCon.randString(6, "char"),
    kwhl: defCon.randString(5, "mix"),
    localWindow: defCon.randString(6, "char"),
    lw: defCon.randString(5, "mix"),
    fcUpdate: defCon.randString(6, "char"),
    isUpdate: defCon.randString(5, "mix"),
    fcExpire: defCon.randString(6, "char"),
    Expire: defCon.randString(6, "mix"),
    timeUnit: defCon.randString(6, "char"),
    fcFeedback: defCon.randString(6, "mix"),
    fcSubmit: defCon.randString(6, "char"),
    feedback: defCon.randString(5, "mix"),
    animated: defCon.randString(7, "char"),
    noticeHTML: str => {
      return String(`<div class="${defCon.rName}"><dl>${str}<dl></div>`);
    },
  };

  /* Refactoring NoticeJs Functions */

  const Defaults = {
    title: "",
    text: "",
    type: `${Notice.success}`,
    position: "bottomRight",
    newestOnTop: false,
    timeout: 30,
    progressBar: true,
    closeWith: ["button"],
    animation: {
      open: `${Notice.animated} fadeIn`,
      close: `${Notice.animated} fadeOut`,
    },
    modal: false,
    width: 400,
    scroll: {
      maxHeightContent: 400,
      showOnHover: true,
    },
    rtl: false,
    callbacks: {
      beforeShow: [],
      onShow: [],
      afterShow: [],
      onClose: [],
      afterClose: [],
      onClick: [],
      onHover: [],
      onTemplate: [],
    },
  };

  const noticeJsModalClassName = `${Notice.noticejs}-modal`;
  const options = Defaults;

  /* Get browser core & system parameters */

  const getNavigator = {
    uaData: navigator.userAgentData,
    init: function (v = this.uaData) {
      return v ? v : navigator.userAgent.toLowerCase();
    },
    core: function (u = JSON.stringify(this.init())) {
      return {
        Trident: u.includes("trident") || u.includes("compatible"),
        Presto: u.includes("presto"),
        WebKit: u.includes("applewebkit") || u.includes("Chromium"),
        Gecko: u.includes("gecko") && !u.includes("khtml"),
      };
    },
    system: function (u = this.init(), system = "Unknown") {
      if (this.uaData) {
        system = u.platform.toString();
      } else {
        if (/windows|win32|win64|wow32|wow64/gi.test(u)) {
          system = "Windows";
        } else if (/macintosh|macintel|mac os x/gi.test(u) || u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
          system = "macOS";
        } else if (/linux|x11/gi.test(u)) {
          system = "Linux";
        } else if (/android|adr/gi.test(u)) {
          system = "Android";
        } else if (/ios|iphone|ipad|ipod|iwatch/gi.test(u)) {
          system = "iOS";
        }
      }
      return system;
    },
  };

  /* Notice */

  function getCallback(ref, eventName) {
    if (ref.callbacks.hasOwnProperty(eventName)) {
      ref.callbacks[eventName].forEach(cb => {
        if (typeof cb === "function") {
          cb.apply(ref);
        }
      });
    }
  }

  const addModal = () => {
    if (document.getElementsByClassName(noticeJsModalClassName).length <= 0) {
      const element = cE("div");
      element.classList.add(noticeJsModalClassName);
      element.classList.add(`${Notice.noticejs}-modal-open`);
      document.body.appendChild(element);
      setTimeout(() => {
        element.className = noticeJsModalClassName;
      }, 200);
    }
  };

  const closeItem = item => {
    getCallback(options, "onClose");
    if (options.animation !== null && options.animation.close !== null) {
      item.className += " " + options.animation.close;
    }
    setTimeout(() => {
      item.remove();
    }, 200);
    if (options.modal === true && qA(`[${Notice.noticejs}-modal='true']`).length >= 1) {
      qS(`.${Notice.noticejs}-modal`).className += ` ${Notice.noticejs}-modal-close`;
      setTimeout(() => {
        qS(`.${Notice.noticejs}-modal`).remove();
      }, 500);
    }
    const iC = item.closest(`.${Notice.noticejs}`);
    const iCId = iC ? iC.id.replace(`${Notice.noticejs}-`, "").trim() : `bottomRight`;
    const iCC = iC ? iC.className.replace(`${Notice.noticejs}`, "").trim() : `${Notice.noticejs}-bottomRight`;
    const position = "." + iCC;
    setTimeout(() => {
      if (qA(position + ` .${Notice.item}`).length <= 0) {
        qS(position) && qS(position).remove();
        if (getNavigator.core().Gecko && defCon[iCId]) {
          document.removeEventListener("scroll", defCon[iCId]);
          delete defCon[iCId];
        }
      }
    }, 500);
  };

  const addListener = item => {
    if (options.closeWith.includes("button")) {
      if (item.querySelector(`.${Notice.close}`)) {
        item.querySelector(`.${Notice.close}`).addEventListener("click", () => {
          closeItem(item);
        });
      }
    }
    if (options.closeWith.includes("click")) {
      item.style.cursor = "pointer";
      item.addEventListener("click", e => {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
          closeItem(item);
        }
      });
    } else {
      item.addEventListener("click", e => {
        if (e.target.className !== `${Notice.close}`) {
          getCallback(options, "onClick");
        }
      });
    }
    item.addEventListener("mouseover", () => {
      getCallback(options, "onHover");
    });
  };

  const appendNoticeJs = (noticeJsHeader, noticeJsBody, noticeJsProgressBar) => {
    const target_class = `.${Notice.noticejs}-` + options.position;
    const noticeJsItem = cE("div");
    noticeJsItem.classList.add(`${Notice.item}`);
    noticeJsItem.classList.add(options.type);
    if (options.rtl === true) {
      noticeJsItem.classList.add(`${Notice.noticejs}-rtl`);
    }
    if (options.width !== "" && Number.isInteger(options.width)) {
      noticeJsItem.style.width = options.width + "px";
    }
    if (noticeJsHeader && noticeJsHeader !== "" && noticeJsHeader.nodeType) {
      noticeJsItem.appendChild(noticeJsHeader);
    }
    if (noticeJsBody.nodeType) {
      noticeJsItem.appendChild(noticeJsBody);
    }
    if (noticeJsProgressBar && noticeJsProgressBar !== "" && noticeJsProgressBar.nodeType) {
      noticeJsItem.appendChild(noticeJsProgressBar);
    }
    if (["top", "bottom"].includes(options.position)) {
      qS(target_class).innerHTML = "";
    }
    if (options.animation !== null && options.animation.open !== null) {
      noticeJsItem.className += " " + options.animation.open;
    }
    if (options.modal === true) {
      noticeJsItem.setAttribute(`${Notice.noticejs}-modal`, "true");
      addModal();
    }
    addListener(noticeJsItem, options.closeWith);
    getCallback(options, "beforeShow");
    getCallback(options, "onShow");
    if (options.newestOnTop === true) {
      qS(target_class) && qS(target_class).insertAdjacentElement("afterbegin", noticeJsItem);
    } else {
      qS(target_class) && qS(target_class).appendChild(noticeJsItem);
    }
    getCallback(options, "afterShow");
    return noticeJsItem;
  };

  class Components {
    createContainer() {
      const element_class = `${Notice.noticejs}-` + options.position;
      const element = cE("gb-notice");
      element.classList.add(`${Notice.noticejs}`);
      element.classList.add(element_class);
      element.id = element_class;
      return element;
    }

    createHeader() {
      let element;
      if (options.title && options.title !== "") {
        element = cE("div");
        element.setAttribute("class", `${Notice.noticejs}-heading`);
        element.textContent = options.title;
      }
      if (options.closeWith.includes("button")) {
        const close = cE("div");
        close.setAttribute("class", `${Notice.close}`);
        close.innerHTML = "&times;";
        if (element) {
          element.appendChild(close);
        } else {
          element = close;
        }
      }
      return element;
    }

    createBody() {
      const element = cE("div");
      element.setAttribute("class", `${Notice.noticejs}-body`);
      const content = cE("div");
      content.setAttribute("class", `${Notice.noticejs}-content`);
      content.innerHTML = options.text;
      element.appendChild(content);
      if (options.scroll !== null && options.scroll.maxHeight !== "") {
        element.style.overflowY = "auto";
        element.style.maxHeight = options.scroll.maxHeight + "px";
        if (options.scroll.showOnHover === true) {
          element.style.visibility = "hidden";
        }
      }
      return element;
    }

    createProgressBar() {
      const element = cE("div");
      element.setAttribute("class", `${Notice.noticejs}-progressbar`);
      const bar = cE("div");
      bar.setAttribute("class", `${Notice.noticejs}-bar`);
      element.appendChild(bar);
      if (options.progressBar === true && typeof options.timeout !== "boolean" && options.timeout !== false) {
        let width = 100;
        const id = setInterval(() => {
          if (width <= 0) {
            clearInterval(id);
            let item = element.closest(`div.${Notice.item}`);
            if (options.animation !== null && options.animation.close !== null) {
              item.className = item.className.replace(new RegExp("(?:^|\\s)" + options.animation.open + "(?:\\s|$)"), " ");
              item.className += " " + options.animation.close;
              const close_time = parseInt(options.timeout) + 500;
              setTimeout(() => {
                closeItem(item);
              }, close_time);
            } else {
              closeItem(item);
            }
          } else {
            width--;
            bar.style.width = width + "%";
          }
        }, options.timeout);
      }
      return element;
    }
  }

  class NoticeJs {
    constructor(options = {}) {
      this.options = Object.assign(Defaults, options);
      this.component = new Components();
      this.on("beforeShow", this.options.callbacks.beforeShow);
      this.on("onShow", this.options.callbacks.onShow);
      this.on("afterShow", this.options.callbacks.afterShow);
      this.on("onClose", this.options.callbacks.onClose);
      this.on("afterClose", this.options.callbacks.afterClose);
      this.on("onClick", this.options.callbacks.onClick);
      this.on("onHover", this.options.callbacks.onHover);
    }

    show() {
      let container = this.component.createContainer();
      if (document.body && qS(`.${Notice.noticejs}-` + this.options.position) === null) {
        document.body.appendChild(container);
      }
      let noticeJsHeader, noticeJsBody, noticeJsProgressBar;
      noticeJsHeader = this.component.createHeader(this.options.title, this.options.closeWith);
      noticeJsBody = this.component.createBody(this.options.text);
      if (this.options.progressBar === true) {
        noticeJsProgressBar = this.component.createProgressBar();
      }
      const noticeJs = appendNoticeJs(noticeJsHeader, noticeJsBody, noticeJsProgressBar);
      return noticeJs;
    }

    on(eventName, cb = () => {}) {
      if (typeof cb === "function" && this.options.callbacks.hasOwnProperty(eventName)) {
        this.options.callbacks[eventName].push(cb);
      }
      return this;
    }

    static overrideDefaults(options) {
      this.options = Object.assign(Defaults, options);
      return this;
    }
  }

  /* Refactoring functions of GMsetValue/GMgetValue/GMdeleteValue with Expire */

  function GMsetExpire(key, value) {
    const obj = {
      data: value,
      time: Date.now(),
    };
    GMsetValue(key, defCon.encrypt(JSON.stringify(obj)));
  }

  async function GMgetExpire(key, curExpire) {
    let vals, expire, expires, expireTime;
    vals = await GMgetValue(key);
    if (!vals) {
      return vals;
    }
    vals = JSON.parse(defCon.decrypt(vals));
    if (curExpire) {
      expire = /(?!^0)^[0-9]+[smhdw]$/i.test(curExpire) ? curExpire : "24h";
      expire = expire.replace(/w/i, "*7*24*3600*1000").replace(/d/i, "*24*3600*1000").replace(/h/i, "*3600*1000").replace(/m/i, "*60*1000").replace(/s/i, "*1000");
      expires = expire.split("*");
      expireTime = expires.reduce((a, b) => {
        return a * b;
      }, 1);
    }
    defCon.restTime[key] = vals.time + expireTime - Date.now();
    if (defCon.restTime[key] <= 0) {
      GMdeleteValue(key);
      return null;
    }
    return vals.data;
  }

  function scrollInsteadFixed(position) {
    if (document.body) {
      const zoom = Number(window.getComputedStyle(document.body, null).getPropertyValue("zoom"));
      const transform = window.getComputedStyle(document.body, null).getPropertyValue("transform");
      const thatNotice = qS(`#${Notice.noticejs}-${position}`);
      const rePosition = (item, ratio, _top, distTop) => {
        let sT = 0 - (defCon.elCompat.getBoundingClientRect().top || 0);
        item.style.top = `${(_top + sT) / ratio}px`;
        window.scrollTo(0, sT - 1e-5);
        if (item.childNodes.length === 1) {
          defCon[distTop] = () => {
            sT = 0 - (defCon.elCompat.getBoundingClientRect().top || 0);
            item.style.top = `${(_top + sT) / ratio}px`;
          };
          document.addEventListener("scroll", defCon[distTop]);
        }
      };

      if (zoom && zoom !== 1) {
        thatNotice.style.cssText += `zoom:${1 / zoom}!important`;
      } else if (getNavigator.core().Gecko && transform && transform !== "none") {
        const ratio = Number(transform.split(",")[3]) || 1;
        if (ratio && ratio !== 1) {
          if (thatNotice) {
            thatNotice.style.cssText += `width:${defCon.elCompat.clientWidth / ratio}px;height:${defCon.elCompat.clientHeight / ratio}px;top:0;left:0`;
            thatNotice.childNodes.forEach((item, index, array, curItem = 0) => {
              switch (position) {
                case "topRight":
                  item.style.cssText += String(
                    `transform-origin:right top 0px;
                      transform:scale(${1 / ratio});
                      position:absolute;
                      right:${10 / ratio}px;
                      top:${10 / ratio}px`
                  );
                  break;

                default:
                  curItem = !index ? 10 / ratio : (array[index - 1].clientHeight + 10) / ratio + Number(array[index - 1].style.bottom.replace("px", ""));
                  item.style.cssText += String(
                    `transform-origin:right bottom 0px;
                      transform:scale(${1 / ratio});
                      position:absolute;
                      right:${10 / ratio}px;
                      bottom:${curItem}px`
                  );
                  break;
              }
            });
            rePosition(thatNotice, ratio, 0, position);
          }
        }
      }
    }
  }

  /* Refactoring GMnotification Function */

  GMnotification = (text = "", type = `${Notice.info}`, closeWith = true, timeout = 30, { ...options } = {}, position = "bottomRight") => {
    try {
      new NoticeJs({
        text: text,
        type: type,
        closeWith: closeWith ? ["button"] : ["click"],
        timeout: timeout,
        callbacks: { ...options },
        position: position,
      }).show();
      scrollInsteadFixed(position);
    } catch (e) {
      error("//-> %cGMnotification:\n%c%s", "font-weight:bold", "font-weight:normal", e);
    }
  };

  const callback_Countdown = {
    onShow: [
      (Interval = 3) => {
        const m = setInterval(() => {
          Interval ? --Interval : clearInterval(m);
          const emText = qS(`.${defCon.rName} dl dd em`);
          if (emText) {
            emText.innerHTML = Interval;
          }
          !Interval ? location.reload() : debug("//->", Interval);
        }, 1e3);
      },
    ],
  };

  /* Common functions */

  function getCookie(sKey) {
    const cookies = decodeURIComponent(
      document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")
    );
    return cookies ? cookies.replace(/[a-z=]+/gi, "") : 0;
  }

  function getUrlParam(paraName, arr = "") {
    if (!paraName) {
      const parameter = document.location.pathname.toString();
      arr = parameter.split("/");
      return arr[1] === undefined ? "" : arr[1];
    } else {
      const url = document.location.toString();
      const arrObj = url.split("?");
      if (arrObj.length > 1) {
        const arrPara = arrObj[1].split("&");
        for (let i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");
          if (arr !== null && arr[0] === paraName) {
            return arr[1];
          }
        }
        return "";
      } else {
        return "";
      }
    }
  }

  /* SYSTEM INFO */

  if (window.self === window.top) {
    console.info(
      `%c[GB-Init]%c\nVersion: ${defCon.curVersion} %c[%s]%c\nExtension: %s\nlastRuntime: ${defCon.lastRuntime()}`,
      "font-weight:bold;color:dodgerblue",
      "color:0",
      "color:snow",
      defCon.titleCase(checkVersion(defCon.isUpgrade) instanceof Object),
      "color:0",
      defCon.titleCase(handlerInfo)
    );
  }

  /* Version Detection with Cache and timeout * F9y4ng * 20210614 */

  function fetchTimeout(url, time, { ...options } = {}) {
    const controller = new window.AbortController();
    const signal = controller.signal;
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        controller.abort();
        resolve(new Response("timeout", { status: 504, statusText: `Request timeout. (User-Defined: ${time}ms)` }));
      }, time);
      fetch(url, { signal: signal, ...options }).then(
        res => {
          clearTimeout(t);
          resolve(res);
        },
        err => {
          clearTimeout(t);
          reject(err);
        }
      );
    });
  }

  function getFetchVersion(u) {
    return new Promise((e, t) => {
      fetchTimeout(u, 2000, {
        method: "GET",
        mode: "cors",
        cache: "no-store",
        credentials: "omit",
      })
        .then(e => {
          debug("//-> %c%s %s %s", "color:green", new URL(u).hostname, e.ok, e.status);
          if (!e.ok) {
            throw Error(`${e.status} ${e.statusText}`);
          }
          return e.text();
        })
        .then(t => {
          let n = defCon.curVersion;
          let m = defCon.updateNote;
          t.split(/[\r\n]+/).forEach(item => {
            const key = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
            if (key) {
              n = key[2];
            }
            const note = item.match(/^(\/\/\s+@note\s+)(.+)$/);
            if (note) {
              m = note[2];
            }
          });
          e([compareVersion(defCon.curVersion, n), defCon.encrypt(n), defCon.encrypt(m), defCon.encrypt(u)]);
        })
        .catch(e => {
          error("//-> %cfetchVersion:\n%c%s", "font-weight:bold", "font-weight:normal", e);
          t();
        });
    });
  }

  function compareVersion(current, compare) {
    const compare_array = compare.split(".");
    const current_array = current.split(".");
    let upgradeID = 0;
    if (compare_array.length === current_array.length) {
      for (let i = 0; i < compare_array.length; i++) {
        if (parseInt(compare_array[i]) < parseInt(current_array[i])) {
          upgradeID = 3;
          break;
        } else {
          if (parseInt(compare_array[i]) === parseInt(current_array[i])) {
            continue;
          } else {
            upgradeID = 1;
            break;
          }
        }
      }
    } else {
      upgradeID = 2;
    }
    return upgradeID;
  }

  async function checkVersion(s = false) {
    let t, setResult, useBing, VerDetAuto, checkUpdate, timeNumber, timeUnit, GoogleJump, Hotkey, keywordHighlight, localWindow, _data;
    const _configuration = await GMgetValue("_configuration_");
    if (!_configuration) {
      useBing = 0;
      VerDetAuto = true;
      checkUpdate = true;
      timeNumber = 24;
      timeUnit = "h";
      GoogleJump = false;
      Hotkey = true;
      keywordHighlight = false;
      localWindow = false;
      _data = {
        useBing,
        VerDetAuto,
        checkUpdate,
        timeNumber,
        timeUnit,
        GoogleJump,
        Hotkey,
        keywordHighlight,
        localWindow,
      };
      console.warn("%c[GB-Warning]%c\nThis is your first visit, the Bing search button will not be inserted by default.", "font-weight:bold;color:salmon", "color:1");
      // initialization
      GMdeleteValue("_Check_Version_Expire_");
      GMdeleteValue("_expire_time_");
      GMdeleteValue("_nCount_");
      GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
    } else {
      _data = JSON.parse(defCon.decrypt(_configuration));
      useBing = _data.useBing;
      VerDetAuto = _data.VerDetAuto;
      checkUpdate = _data.checkUpdate;
      timeNumber = _data.timeNumber;
      timeUnit = _data.timeUnit;
      GoogleJump = _data.GoogleJump;
      Hotkey = _data.Hotkey !== undefined ? _data.Hotkey : true;
      keywordHighlight = _data.keywordHighlight;
      localWindow = _data.localWindow;
    }
    setResult = checkUpdate ? Boolean(VerDetAuto) : false;
    const _expire_time = String(timeNumber + timeUnit);
    const _expire_time_ = /(?!^0)^[0-9]+[smhdw]$/i.test(_expire_time) ? _expire_time : "24h";
    if (setResult) {
      if (window.self === window.top) {
        const cache = await GMgetExpire("_Check_Version_Expire_", _expire_time_);
        if (!cache) {
          // first: greasyfork
          t = await getFetchVersion(`https://greasyfork.org/scripts/12909/code/${defCon.randString(32, "mix")}.meta.js`).catch(async () => {
            defCon.fetchResult = "GreasyFork - Failed to fetch";
            error(defCon.fetchResult);
          });
          // second: github
          if (defCon.fetchResult.includes("GreasyFork")) {
            t = await getFetchVersion(`https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(async () => {
              defCon.fetchResult = "Github - Failed to fetch";
              error(defCon.fetchResult);
            });
          }
          // final: Jsdelivr points to gitee
          if (defCon.fetchResult.includes("Github")) {
            t = await getFetchVersion(`https://cdn.jsdelivr.net/gh/F9y4ng/GreasyFork-Scripts@master/Google%20%26%20Baidu%20Switcher.meta.js`).catch(async () => {
              defCon.fetchResult = "Jsdelivr - Failed to fetch";
              error(defCon.fetchResult);
            });
          }
          // Set value with expire
          if (t !== undefined) {
            GMsetExpire("_Check_Version_Expire_", t);
            debug("//-> %ccheckVersion: Loading Data from Server.", "background-color:darkorange;color:snow");
          } else {
            console.error(
              "%c[GB-Update]\n%cSome unknown exceptions cause version detection failure, most likely by a network error. Please try again later.",
              "font-weight:bold;color:red",
              "font-weight:bold;color:darkred"
            );
          }
        } else {
          t = cache;
          debug("//-> %ccheckVersion: Loading Data from Cache.", "background-color:green;color:snow");
        }
        // Resolution return data
        if (typeof t !== "undefined" && defCon.fetchResult === "success") {
          const lastestVersion = defCon.decrypt(t[1]);
          defCon.isNoticed = Boolean(await GMgetExpire("_nCount_", _expire_time_));
          defCon.isNeedUpdate = cache ? compareVersion(defCon.curVersion, lastestVersion) : t[0];
          const updateNote = ((w = "") => {
            if (defCon.decrypt(t[2])) {
              defCon
                .decrypt(t[2])
                .split(/\\n/)
                .forEach(item => {
                  w += `<li>${item}</li>`;
                });
            }
            return w ? `<dd class="disappear"><ul>${w}</ul></dd>` : "";
          })();
          const updateUrl = defCon.decrypt(t[3]).replace("meta", "user");
          const recheckURLs = new URL(
            updateUrl
              .replace("raw.githubusercontent.com", "github.com")
              .replace("cdn.jsdelivr.net/gh", "gitee.com")
              .replace("@", "/")
              .replace("master", "blob/master")
              .replace(/code\/[^/]+\.js/, "")
          );
          let sourceSite = defCon.titleCase(recheckURLs.hostname).split(".")[0];
          sourceSite = cache ? `${sourceSite} on Cache` : sourceSite;
          const repo = cache
            ? `\nCache expire:${defCon.durationTime(defCon.restTime._Check_Version_Expire_)}\nDetect time: ${defCon.lastRuntime()}\n`
            : `\nExpire time: ${_expire_time_}\nDetect time: ${defCon.lastRuntime()}\n`;
          switch (defCon.isNeedUpdate) {
            case 2:
              if (window.self === window.top) {
                console.warn(
                  String(
                    `%c[GB-Update]%c\nWe found your local version %c${defCon.curVersion} %cis not current.\nPlease confirm whether you had edited your local script, then you need to update it manually.\n${repo}(${sourceSite})`
                  ),
                  "font-weight:bold;color:crimson",
                  "color:0",
                  "font-weight:bold;color:tomato",
                  "color:0"
                );
              }
              if (!defCon.isNoticed || s || IS_OPEN_DEBUG) {
                setTimeout(() => {
                  GMnotification(
                    Notice.noticeHTML(
                      `<dt>${defCon.scriptName}</dt>
                      <dd><span>发现版本异常</span>版本号 <i>${defCon.curVersion}</i> 错误。由于您手动编辑过本地脚本，为避免未知错误的出现，脚本将自动设置为禁止检测更新。</dd><dd style="text-align: center;margin-top:8px!important"><img src="https://z3.ax1x.com/2021/08/14/fyvfk6.png" alt="开启自动检测"></dd><dd style="color:lemonchiffon;font-style:italic">注：若要重新启用自动更新，您需要在<a href="${recheckURLs}" target="_blank" style="padding:0 2px;font-weight:700;color:gold">脚本源网站</a>覆盖安装正式版本后，从脚本菜单重新开启更新检测。</dd><dd>[ ${sourceSite} ]</dd>`
                    ),
                    `${Notice.error}`,
                    true,
                    150,
                    {
                      onClose: [
                        () => {
                          location.reload();
                        },
                      ],
                    }
                  );
                }, 100);
                _data.VerDetAuto = false;
                GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
                GMsetExpire("_nCount_", true);
              }
              return false;
            case 1:
              if (window.self === window.top) {
                console.info(
                  String(`%c[GB-Update]%c\nWe found a new version: %c${lastestVersion}%c.\nPlease upgrade from your update source to the latest version.${repo}(${sourceSite})`),
                  "font-weight:bold;color:crimson",
                  "color:0",
                  "color:crimson",
                  "color:0"
                );
              }
              if (!defCon.isNoticed || s || IS_OPEN_DEBUG) {
                let showdDetail = "";
                if (updateNote) {
                  showdDetail = `<dd onmouseover="this.previousElementSibling.previousElementSibling.style.display='block';this.style.display='none'" style="text-align:center">&gt;&gt; 查看更新内容 &lt;&lt;</dd>`;
                }
                setTimeout(() => {
                  GMnotification(
                    Notice.noticeHTML(
                      `<dt>${defCon.scriptName}</dt>
                      <dd><span>发现版本更新</span>最新版本 <i>${lastestVersion}</i>，如果您现在需要更新脚本，请点击这里完成升级安装。</dd>${updateNote}
                      <dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px!important;">( 缓存时间：${defCon.showDate(_expire_time_)} )</kbd></dd>${showdDetail}`
                    ),
                    `${Notice.warning}`,
                    false,
                    60,
                    {
                      onClick: [
                        () => {
                          GMopenInTab(updateUrl, defCon.options);
                          GMdeleteValue("_Check_Version_Expire_");
                        },
                      ],
                    }
                  );
                }, 100);
                GMsetExpire("_nCount_", true);
              }
              return false;
            default:
              if (window.self === window.top && (s || IS_OPEN_DEBUG)) {
                console.info(
                  `%c[GB-Update]%c\nCurretVersion: %c${defCon.curVersion}%c is up-to-date!${repo}(${sourceSite})`,
                  "font-weight:bold;color:darkcyan",
                  "color:0",
                  "color:red",
                  "color:0"
                );
                setTimeout(() => {
                  GMnotification(
                    Notice.noticeHTML(
                      `<dt>${defCon.scriptName}</dt>
                      <dd><span>更新成功</span>当前版本 <i>${defCon.curVersion}</i> 已为最新！</dd>` +
                        String(defCon.isNeedUpdate === 3 ? `<dd style="color:yellow;font-style:italic">（注意：您的本地版本高于服务器版本，请核验）</dd>` : ``) +
                        `<dd>[ ${sourceSite} ]<kbd style="float:right;font-size:11px!important">( 缓存时间：${defCon.showDate(_expire_time_)} )</kbd></dd>`
                    ),
                    `${Notice.success}`,
                    false,
                    defCon.isNeedUpdate === 3 ? 50 : 30
                  );
                  GMdeleteValue("_nCount_");
                }, 100);
              }
              return true;
          }
        }
      }
    } else {
      if (window.self === window.top) {
        console.log(`%c[GB-Update]%c\nUpdate detection has been ${!checkUpdate ? "manually" : "automatically"} turned off.`, "font-weight:bold;color:red", "color:0");
      }
      return false;
    }
  }

  /* Menus & Button insert  */

  !(async function () {
    let useBing, VerDetAuto, checkUpdate, timeNumber, timeUnit, GoogleJump, Hotkey, keywordHighlight, localWindow, _data;

    /* Set Default Value & initialize */

    const _configuration = await GMgetValue("_configuration_");
    if (!_configuration) {
      useBing = 0;
      VerDetAuto = true;
      checkUpdate = true;
      timeNumber = 24;
      timeUnit = "h";
      GoogleJump = false;
      Hotkey = true;
      keywordHighlight = false;
      localWindow = false;
      _data = {
        useBing,
        VerDetAuto,
        checkUpdate,
        timeNumber,
        timeUnit,
        GoogleJump,
        Hotkey,
        keywordHighlight,
        localWindow,
      };
      GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
    } else {
      _data = JSON.parse(defCon.decrypt(_configuration));
      useBing = _data.useBing;
      VerDetAuto = _data.VerDetAuto;
      checkUpdate = _data.checkUpdate;
      timeNumber = _data.timeNumber;
      timeUnit = _data.timeUnit;
      GoogleJump = _data.GoogleJump;
      Hotkey = _data.Hotkey !== undefined ? _data.Hotkey : true;
      keywordHighlight = _data.keywordHighlight;
      localWindow = _data.localWindow;
    }

    const CONST = {
      isSecurityPolicy: false,
      rndidName: defCon.randString(9, "char"),
      rndclassName: defCon.randString(12, "char"),
      bdyx: defCon.randString(5, "mix"),
      ggyx: defCon.randString(5, "mix"),
      bbyx: defCon.randString(5, "mix"),
      scrollspan: defCon.randString(8, "char"),
      scrollspan2: defCon.randString(8, "char"),
      scrollbars: defCon.randString(8, "char"),
      scrollbars2: defCon.randString(8, "char"),
      isUseBing: Boolean(useBing),
      isVDResult: checkUpdate ? Boolean(VerDetAuto) : false,
    };
    CONST.noticeCss = String(
      `@charset "UTF-8";.${Notice.animated}{animation-duration:1s;animation-fill-mode:both}.${Notice.animated}.infinite{animation-iteration-count:infinite}.${Notice.animated}.hinge{animation-duration:2s}.${Notice.animated}.bounceIn,.${Notice.animated}.bounceOut,.${Notice.animated}.flipOutX,.${Notice.animated}.flipOutY{animation-duration:1.25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}#${CONST.rndidName} *,.${Notice.noticejs},.${Notice.noticejs} *{font-family:'Microsoft YaHei','Helvetica Neue',sans-serif!important;-webkit-text-stroke:initial!important;text-shadow:initial!important}.${Notice.noticejs}-top{top:0;width:100%}.${Notice.noticejs}-top .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-topRight{top:10px;right:10px;z-index:10059!important}.${Notice.noticejs}-topLeft{top:10px;left:10px}.${Notice.noticejs}-topCenter{top:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}-middleLeft,.${Notice.noticejs}-middleRight{right:10px;top:50%;transform:translateY(-50%)}.${Notice.noticejs}-middleLeft{left:10px}.${Notice.noticejs}-middleCenter{top:50%;left:50%;transform:translate(-50%,-50%)}.${Notice.noticejs}-bottom{bottom:0;width:100%}.${Notice.noticejs}-bottom .${Notice.item}{border-radius:0!important;margin:0!important}.${Notice.noticejs}-bottomRight{bottom:10px;right:10px;z-index:10055!important}.${Notice.noticejs}-bottomLeft{bottom:10px;left:10px}.${Notice.noticejs}-bottomCenter{bottom:10px;left:50%;transform:translate(-50%)}.${Notice.noticejs}{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.${Notice.noticejs} .${Notice.item}{margin:0 0 10px;border-radius:3px;overflow:hidden}` +
        `.${Notice.noticejs} .${Notice.item} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#fff;text-shadow:0 1px 0 #fff;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.item} .${Notice.close}:hover{opacity:.5;color:#000;cursor:pointer}.${Notice.noticejs} .${Notice.item} a{color:#fff;border-bottom:1px dashed #fff}.${Notice.noticejs} .${Notice.item} a,.${Notice.noticejs} .${Notice.item} a:hover{text-decoration:none}.${Notice.noticejs} .${Notice.success}{background-color:#64ce83}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-heading{background-color:#3da95c;color:#fff;padding:10px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.info}{background-color:#3ea2ff}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-heading{background-color:#067cea;color:#fff;padding:10px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body{color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.warning}{background-color:#ff7f48}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-heading{background-color:#f44e06;color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.error}{background-color:#e74c3c}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-heading{background-color:#ba2c1d;color:#fff;padding:10px!important}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body{color:#fff;padding:10px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-body:hover{visibility:visible!important}` +
        `.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-content{visibility:visible}.${Notice.configuration} input[disabled],.${Notice.configuration} select[disabled]{color:#bbb;background:linear-gradient(45deg,#ffe9e9 0,#ffe9e9 25%,transparent 25%,transparent 50%,#ffe9e9 50%,#ffe9e9 75%,transparent 75%,transparent)!important;background-size:20px 20px!important;background-color:#fff7f7!important}.${Notice.noticejs} .${Notice.configuration}{background-color:linear-gradient(to right,#fcfcfc,#f2f2f7);background:-webkit-gradient(linear,0 0,0 100%,from(#fcfcfc),to(#f2f2f7));box-shadow:0 0 5px #888}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}{float:right;font-size:18px!important;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #aaa;opacity:1;margin-right:7px}.${Notice.noticejs} .${Notice.configuration} .${Notice.close}:hover{opacity:.5;color:#555;cursor:pointer}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-heading{background-color:#F2F2F7;color:#333;padding:10px!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body{color:#333;padding:10px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body ul{color:#333!important;list-style:none;margin:5px;padding:2px;font:italic 14px/140% "Microsoft YaHei",sans-serif}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body ul ol{list-style:none;font-style:normal;margin:5px 0;cursor:default}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-body:hover{visibility:visible!important}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-content{visibility:visible}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar{width:100%;background-color:#64ce83;margin-top:-1px}.${Notice.noticejs} .${Notice.success} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#3da95c}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar{width:100%;background-color:#3ea2ff;margin-top:-1px}.${Notice.noticejs} .${Notice.info} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#067cea}.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar{width:100%;background-color:#ff7f48;margin-top:-1px}` +
        `.${Notice.noticejs} .${Notice.warning} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#f44e06}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar{width:100%;background-color:#e74c3c;margin-top:-1px}.${Notice.noticejs} .${Notice.error} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{width:100%;height:5px;background:#ba2c1d}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar{width:100%;background-color:#efefef;margin-top:-1px}.${Notice.noticejs} .${Notice.configuration} .${Notice.noticejs}-progressbar .${Notice.noticejs}-bar{background:#ccc;width:100%;height:5px}@keyframes ${Notice.noticejs}-fadeOut{0%{opacity:1}to{opacity:0}}.${Notice.noticejs}-fadeOut{animation-name:${Notice.noticejs}-fadeOut}@keyframes ${Notice.noticejs}-modal-in{to{opacity:.3}}@keyframes ${Notice.noticejs}-modal-out{to{opacity:0}}.${Notice.noticejs}{position:fixed;z-index:10050}.${Notice.noticejs} ::-webkit-scrollbar{width:8px}.${Notice.noticejs} ::-webkit-scrollbar-button{width:8px;height:5px}.${Notice.noticejs} ::-webkit-scrollbar-track{border-radius:10px}.${Notice.noticejs} ::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.5);border-radius:10px}.${Notice.noticejs} ::-webkit-scrollbar-thumb:hover{background:#fff}.${Notice.noticejs}-modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:999999;opacity:.3;left:0;top:0}.${Notice.noticejs}-modal-open{opacity:0;animation:${Notice.noticejs}-modal-in .3s ease-out}.${Notice.noticejs}-modal-close{animation:${Notice.noticejs}-modal-out .3s ease-out;animation-fill-mode:forwards}.${defCon.rName}{padding:2px!important}.${defCon.rName} dl{margin:0!important;padding:1px!important}.${defCon.rName} dl dt{margin:2px 0 6px 0!important;font-size:16px!important;font-weight:900!important}.${defCon.rName} dl dd{margin:2px 2px 0 0!important;font-size:14px!important;line-height:180%!important;margin-inline-start:10px!important}.${defCon.rName} .${Notice.center}{width:100%;text-align:center!important}.${defCon.rName} dl dd em{color:#fff;font-family:Candara,sans-serif!important;font-size:24px!important;padding:0 5px}.${defCon.rName} dl dd span{font-weight:700;font-size:15px!important;margin-right:8px}` +
        `.${defCon.rName} dl dd i{font-family:Candara,sans-serif!important;font-size:20px!important}.${defCon.rName} dl dd .im{color:gold;font-size:16px!important;font-weight:900;padding:0 3px}.${defCon.rName} ul{width:90%;display:inline-block;text-align:left;vertical-align:top;color:rgba(255, 255, 255, 0.8);padding:0.2em;margin:0 0 0 1em;counter-reset:xxx 0}.${defCon.rName} li{list-style:none;font-style:italic!important;position:relative;padding:0 0 0 0.1em;margin:0 0 0 2px;-webkit-transition:.12s;transition:.12s}.${defCon.rName} li::before{content:counter(xxx,decimal) "、";counter-increment:xxx 1;font-family:Candara,sans-serif;font-size:1em;display:inline-block;width:1.5em;margin-left:-1.5em;-webkit-transition:.5s;transition:.5s}.${defCon.rName} .disappear{display:none}/* checkbox */.${Notice.checkbox}{display:none!important}.${Notice.checkbox}+label{cursor:pointer;padding:11px 9px;margin:0 0 0 25px;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.${Notice.checkbox}+label::before{position:absolute;top:0;left:0;z-index:99;-webkit-border-radius:7px;border-radius:7px;width:24px;height:32px;color:#fff;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.6);content:" "}.${Notice.checkbox}+label::after{position:absolute;top:0;left:28px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-border-radius:100px;border-radius:100px;padding:5px;font-size:1em;font-weight:700;color:#fff;content:"OFF"}.${Notice.checkbox}:checked+label{cursor:pointer;margin:0 0 0 25px;-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df!important;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}` +
        `.${Notice.checkbox}:checked+label::after{content:"ON";left:10px}.${Notice.checkbox}:checked+label::before{content:" ";position:absolute;z-index:99;left:52px}#${Notice.fcUpdate},#${Notice.fcExpire},#${Notice.fcGoogle},#${Notice.fchk},#${Notice.fcFeedback},#${Notice.fcKwhl},#${Notice.localWindow}{padding:2px 10px;height:36px;width:100%;font:bold 16px/140% "Microsoft YaHei",sans-serif}#${Notice.Expire}{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:4px;border-radius:4px;width:46px;padding:2px;height:30px;border:2px solid #777;background:#fff;font-size:15px!important;font-weight:normal;font-family:Impact,sans-serif!important;text-align:center}#${Notice.timeUnit}{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-border-radius:4px;border-radius:4px;width:60px;height:30px;padding:2px;background:#fff;font-size:15px!important;font-weight:normal;font-family:"Microsoft YaHei",sans-serif!important;border:2px solid #777}#${Notice.fcFeedback} .${Notice.feedback}{cursor:help;font-weight:normal;font-size:16px!important;margin:0}#${Notice.fcFeedback} .${Notice.feedback}>span{font-size:16px!important;font-weight:700!important}#${Notice.fcFeedback} .${Notice.feedback}:hover{color:crimson}#${Notice.fcSubmit}{padding:2px 10px;height:30px;width:100%}#${Notice.fcSubmit} button{color:#333;font-weight:600;border:1px solid #777;font-size:16px!important;padding:5px 15px;margin-left:10px;border-radius:4px}#${Notice.fcSubmit} .${Notice.fcSave}{cursor:pointer;background-color:linear-gradient(to bottom,#fff7f7,#ffe9e9);background:-webkit-gradient(linear,0 0,0 100%,from(#fff7f7),to(#ffe9e9))}#${Notice.fcSubmit} .${Notice.fcClose}{cursor:pointer}`
    );

    let curretSite = {
      SiteTypeID: 0,
      SiteName: "",
      SplitName: "",
      MainType: "",
      HtmlCode: "",
      StyleType: "",
      keyStyle: "",
    };

    const listSite = {
      baidu: {
        SiteTypeID: 1,
        SiteName: "Baidu",
        SplitName: "tn",
        MainType: ".s_btn_wr",
        HtmlCode: CONST.isUseBing
          ? String(
              `<span id="${CONST.ggyx}">
                <input type="button" title="Google一下" value="Google"/>
              </span>
              <span id="${CONST.bbyx}">
                <input type="button" title="Bing一下" value="Bing ®"/>
              </span>`
            )
          : String(
              `<span id="${CONST.ggyx}">
                <input type="button" title="Google一下" value="Google一下"/>
              </span>`
            ),
        StyleCode: CONST.isUseBing
          ? `#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndidName}{position:relative;z-index:999999}#${CONST.rndidName} #${CONST.bbyx}{margin-left:-1.5px}#${CONST.rndidName} #${CONST.ggyx}{margin-left:2px}#${CONST.bbyx} input{background:#4e6ef2;border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;height:40px;color:#fff;width:80px;border:1px solid #3476d2;font-size:16px!important;font-weight:bold}#${CONST.ggyx} input{background:#4e6ef2;border-top-left-radius:10px;border-bottom-left-radius:10px;cursor:pointer;height:40px;color:#fff;width:80px;border:1px solid #3476d2;font-size:16px!important;font-weight:bold}#${CONST.ggyx} input:hover,#${CONST.bbyx} input:hover{background: #4662D9;border:1px solid #3476d2}`
          : `#form{white-space:nowrap}#u{z-index:1!important}#${CONST.rndidName}{position:relative;margin-left:2px;z-index:999999999}#${CONST.ggyx} input{background:#4e6ef2;border-radius:10px;cursor:pointer;height:40px;color:#fff;width:112px;border:1px solid #3476d2;text-shadow:0 0 2px #ffffff!important;font-size:16px!important}#${CONST.ggyx} input:hover{background:#4662D9;border:1px solid #3476d2;}`,
        keyStyle: keywordHighlight ? "#wrapper_wrapper em{color:#f73131cd!important;background-color:#ffff80ad!important;font-weight:700!important}" : "",
      },
      google: {
        SiteTypeID: 2,
        SiteName: "Google",
        SplitName: "tbm",
        MainType: "form button[type='submit']",
        HtmlCode: CONST.isUseBing
          ? String(
              `<span class="ACRAdd"></span>
              <span id="${CONST.bdyx}">
                <input type="button" title="百度一下" value="百度一下"/>
              </span>
              <span id="${CONST.bbyx}">
                <input type="button" title="Bing一下" value="Bing一下"/>
              </span>`
            )
          : String(
              `<span class="ACRAdd"></span>
              <span id="${CONST.bdyx}">
                <input type="button" title="百度一下" value="百度一下"/>
              </span>`
            ),
        StyleCode: CONST.isUseBing
          ? `#${CONST.rndidName}{position:relative;margin:0 4px 0 -5px;z-index:100;display:flex;justify-content:center;align-items:center}#${CONST.rndidName} #${CONST.bdyx}{padding:0 0 0 8px}#${CONST.rndidName} #${CONST.bbyx}{margin-left:1px}.${CONST.scrollspan}{min-height:26px}.${CONST.scrollspan2}{min-height:26px;margin-top:0!important}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;font-size:13px!important}.${CONST.scrollbars2}{display:inline-block;margin:0;height:30px!important;font-size:13px!important}#${CONST.bdyx} input{cursor:pointer;padding:1px 1px 1px 6px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-left-radius:24px;border-bottom-left-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bbyx} input{cursor:pointer;padding:1px 6px 1px 1px!important;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-top-right-radius:24px;border-bottom-right-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff;}#${CONST.bdyx} input:hover,#${CONST.bbyx} input:hover{background:#2b7de9;}`
          : `#${CONST.rndidName}{position:relative;margin:0 4px 0 -5px;z-index:100;display:flex;justify-content:center;align-items:center}#${CONST.rndidName} #${CONST.bdyx}{padding:0 0 0 8px}.${CONST.scrollspan}{min-height:26px}.${CONST.scrollspan2}{min-height:26px;margin-top:0!important}.${CONST.scrollbars}{display:inline-block;margin:0;height:26px!important;text-shadow:0 0 1px #fff!important;font-size:13px!important}.${CONST.scrollbars2}{display:inline-block;margin:0;height:30px!important;text-shadow:0 0 1px #fff!important;font-size:13px!important}#${CONST.bdyx} input{cursor:pointer;border:1px solid transparent;background:#1a73e8;box-shadow:none;border-radius:24px;width:90px;height:38px;font-size:15px;font-weight:600;color:#fff}#${CONST.bdyx} input:hover{background:#2b7de9}`,
        keyStyle: keywordHighlight
          ? ".aCOpRe em,.aCOpRe a em,.yXK7lf em,.yXK7lf a em,.st em,.st a em,.c2xzTb b,em.qkunPe{color:#f73131cd!important;background-color:#ffff80ad!important;font-weight:700!important}"
          : "",
      },
      bing: {
        SiteTypeID: 3,
        SiteName: "Bing",
        SplitName: "",
        MainType: "#sb_search",
        HtmlCode: CONST.isUseBing
          ? String(
              `<span id="${CONST.bdyx}">
                <input type="button" title="百度一下" value="百度一下"/>
              </span>
              <span id="${CONST.ggyx}">
                <input type="button" title="Google一下" value="Google"/>
              </span>`
            )
          : ``,
        StyleCode: CONST.isUseBing
          ? `#${CONST.rndidName}{position:relative;z-index:999;display:inline-block;height:40px;min-width:193px;width:max-content;vertical-align:top;margin:0 0 0 8px}#${CONST.bdyx},#${CONST.ggyx}{display:inline-block}#${CONST.rndidName} span>input{box-sizing:border-box;cursor:pointer;min-width:96px;height:40px;background-color:#f7faff;border:1px solid #0095B7;color:#0095B7;font:normal 900 16px/1.5 "Microsoft YaHei",sans-serif!important}#${CONST.bdyx} input{border-top-left-radius:24px;border-bottom-left-radius:24px;margin:0;padding:0 12px 0 18px}#${CONST.ggyx} input{border-top-right-radius:24px;border-bottom-right-radius:24px;margin:0 0 0 -3px;padding:0 18px 0 12px}.${CONST.scrollspan}{max-height:33px;margin:3px 3px 0 8px!important}.${CONST.scrollspan2}{max-height:30px;margin:5px 0 0 8px!important}.${CONST.scrollbars}{border-radius:4px!important;max-height:33px;padding:0 12px!important;margin-right:1px!important}.${CONST.scrollbars2}{max-height:30px}#${CONST.bdyx} input:hover,#${CONST.ggyx} input:hover{background-color:#fff;transition:border linear .1s,box-shadow linear .3s;box-shadow:1px 1px 8px #08748D;border:2px solid #0095B7;text-shadow:0 0 1px #0095B7!important;color:#0095B7}`
          : ``,
        keyStyle: keywordHighlight
          ? String(
              Number(getUrlParam("ensearch")) || Number(getCookie("ENSEARCH"))
                ? ".b_caption p strong, .b_caption .b_factrow strong, .b_secondaryText strong,th, h2 strong, h3 strong"
                : "#sp_requery strong, #sp_recourse strong, #tile_link_cn strong, .b_ad .ad_esltitle~div strong, h2 strong, .b_caption p strong, .b_snippetBigText strong, .recommendationsTableTitle+.b_slideexp strong, .recommendationsTableTitle+table strong, .recommendationsTableTitle+ul strong, .pageRecoContainer .b_module_expansion_control strong, .b_rs strong, .b_rrsr strong, #dict_ans strong, .b_listnav>.b_ans_stamp>strong, .adltwrnmsg strong"
            ) + "{font-weight:700!important;color:#f73131cd!important;background-color:#ffff80ad!important}"
          : "",
      },
      other: { SiteTypeID: 0 },
    };

    const newSiteType = {
      BAIDU: listSite.baidu.SiteTypeID,
      GOOGLE: listSite.google.SiteTypeID,
      BING: listSite.bing.SiteTypeID,
      OTHERS: 0,
    };

    debug("//-> initialized complete, start running...");

    if (location.host.includes(".baidu.com")) {
      // Includes baidu
      curretSite = listSite.baidu;
    } else if (location.host.includes(".bing.com")) {
      // Includes bing
      curretSite = listSite.bing;
    } else if (/^([0-9a-z-]+\.)?google(\.[a-z]{2,3}){1,3}$/.test(location.host)) {
      // Regular google
      curretSite = listSite.google;
    } else {
      curretSite = listSite.other;
    }

    CONST.vim = getUrlParam(curretSite.SplitName);

    if (
      (curretSite.SiteTypeID === newSiteType.GOOGLE && /^(lcl|flm|fin)$/.test(CONST.vim)) ||
      (curretSite.SiteTypeID === newSiteType.BING && /^(maps)$/.test(CONST.vim)) ||
      (curretSite.SiteTypeID === newSiteType.BAIDU && /^(news|vsearch|baiduimagedetail)$/.test(CONST.vim))
    ) {
      CONST.isSecurityPolicy = true;
    }

    /* insert Menus */

    function addActionConfigure() {
      if (!qS(`.${Notice.noticejs} .${Notice.configuration}`)) {
        GMnotification(
          Notice.noticeHTML(
            `<dt style="color:darkred">
                搜索引擎跳转工具 设置
                <span style="font:italic 14px/14px Candara,sans-serif!important">
                  (Version ${defCon.curVersion})
                <span>
              </dt>
              <dd>
                <ul id="${Notice.fc}">
                  <ol id="${Notice.fchk}">
                    <div style="float:left">键盘快捷键功能开关</div>
                    <div style="float:right;margin:-2px 2px 0 10px">
                      <input type="checkbox" id="${Notice.hotkey}" class="${Notice.checkbox}" ${Hotkey ? "checked" : ""} />
                      <label for="${Notice.hotkey}"></label>
                    </div>
                  </ol>
                  <ol id="${Notice.fcGoogle}">
                    <div style="float:left">Google 国际站跳转</div>
                    <div style="float:right;margin:-2px 2px 0 10px">
                      <input type="checkbox" id="${Notice.google}" class="${Notice.checkbox}" ${GoogleJump ? "checked" : ""} />
                      <label for="${Notice.google}"></label>
                    </div>
                  </ol>
                  <ol id="${Notice.localWindow}">
                    <div style="float:left">在当前浏览器窗口跳转</div>
                    <div style="float:right;margin:-2px 2px 0 10px">
                      <input type="checkbox" id="${Notice.lw}" class="${Notice.checkbox}" ${localWindow ? "checked" : ""} />
                      <label for="${Notice.lw}"></label>
                    </div>
                  </ol>
                  <ol id="${Notice.fcKwhl}">
                    <div style="float:left">搜索关键词高亮增强</div>
                    <div style="float:right;margin:-2px 2px 0 10px">
                      <input type="checkbox" id="${Notice.kwhl}" class="${Notice.checkbox}" ${keywordHighlight ? "checked" : ""} />
                      <label for="${Notice.kwhl}"></label>
                    </div>
                  </ol>
                  <ol id="${Notice.fcUpdate}">
                    <div style="float:left">更新检测（默认：开）</div>
                    <div style="float:right;margin:-2px 2px 0 10px">
                      <input type="checkbox" id="${Notice.isUpdate}" class="${Notice.checkbox}" ${checkUpdate ? "checked" : ""} />
                      <label for="${Notice.isUpdate}"></label>
                    </div>
                  </ol>
                  <ol id="${Notice.fcExpire}">
                    <div>更新频率（分/时/天/周）
                      <input id="${Notice.Expire}" maxlength="3" placeholder="24" value="${timeNumber}"/>
                      <select id="${Notice.timeUnit}" style="cursor:pointer">
                        <option ${timeUnit === "m" ? "selected" : ""} value ="m">分钟</option>
                        <option ${timeUnit === "h" ? "selected" : ""} value ="h">小时</option>
                        <option ${timeUnit === "d" ? "selected" : ""} value="d">天</option>
                        <option ${timeUnit === "w" ? "selected" : ""} value="w">周</option>
                      </select>
                    </div>
                  </ol>
                  <ol id="${Notice.fcFeedback}">
                    <div class="${Notice.feedback}">\ud83e\udde1<span>\u0020如果您遇到问题，请向我反馈\u0020</span>\ud83e\udde1</div>
                  </ol>
                  <ol id="${Notice.fcSubmit}">
                  <button class="${Notice.fcClose}">关闭</button>
                  <button class="${Notice.fcSave}">保存</button>
                  </ol>
                </ul>
              </dd>`
          ),
          `${Notice.configuration}`,
          true,
          600,
          {},
          "topRight"
        );
        if (!qS(`#${Notice.isUpdate}`).checked) {
          qS(`#${Notice.Expire}`).setAttribute("disabled", "disabled");
          qS(`#${Notice.timeUnit}`).setAttribute("disabled", "disabled");
        }
        qS(`#${Notice.isUpdate}`).addEventListener("change", function () {
          if (this.checked) {
            qS(`#${Notice.Expire}`).removeAttribute("disabled");
            qS(`#${Notice.timeUnit}`).removeAttribute("disabled");
          } else {
            qS(`#${Notice.Expire}`).setAttribute("disabled", "disabled");
            qS(`#${Notice.timeUnit}`).setAttribute("disabled", "disabled");
          }
        });
        qS(`#${Notice.Expire}`).addEventListener("input", function () {
          this.value = this.value.replace(/[^0-9]/g, "");
        });
        qS(`#${Notice.fcFeedback} .${Notice.feedback}`).addEventListener("click", () => {
          GMopenInTab(`${defCon.support}`, defCon.options);
        });
        qS(`#${Notice.fcSubmit} .${Notice.fcClose}`).addEventListener("click", () => {
          qS(`.${Notice.noticejs} .${Notice.configuration} .${Notice.close}`).click();
        });
        qS(`#${Notice.fcSubmit} .${Notice.fcSave}`).addEventListener("click", () => {
          try {
            const GoogleJump = qS(`#${Notice.google}`).checked;
            const isHotkey = qS(`#${Notice.hotkey}`).checked;
            const keywordHighlight = qS(`#${Notice.kwhl}`).checked;
            const checkUpdate = qS(`#${Notice.isUpdate}`).checked;
            const localWindow = qS(`#${Notice.lw}`).checked;
            let timeNumber = qS(`#${Notice.Expire}`).value;
            let timeUnit = qS(`#${Notice.timeUnit}`).value;
            _data.checkUpdate = checkUpdate;
            _data.timeNumber = timeNumber.length ? Number(timeNumber) : 24;
            _data.timeUnit = timeUnit.length ? timeUnit : "h";
            _data.GoogleJump = GoogleJump;
            _data.Hotkey = isHotkey;
            _data.keywordHighlight = keywordHighlight;
            _data.localWindow = localWindow;
            if (!checkUpdate) {
              GMdeleteValue("_Check_Version_Expire_");
            }
            GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
            qS(`.${Notice.noticejs} .${Notice.configuration} .${Notice.close}`).click();
            GMnotification(
              Notice.noticeHTML(`<dd class="${Notice.center}">设置数据已<kbd class="im">成功保存</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
              `${Notice.info}`,
              true,
              30,
              callback_Countdown
            );
          } catch (e) {
            error("//-> configuration:", e);
          }
        });
      }
    }

    const isMac = getNavigator.system().includes("macOS");

    const menuManager = {
      isUsedSwitcher: (_status, _data, Tips) => {
        const info = x => {
          return Notice.noticeHTML(`<dd class="${Notice.center}">${Tips}已<kbd class="im">${x}</kbd>，网页在<em>3</em>秒后刷新！</dd>`);
        };
        _data.useBing = !_status;
        GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
        if (_status) {
          GMnotification(info("\u6e05\u9664"), `${Notice.info}`, true, 30, callback_Countdown);
        } else {
          GMnotification(info("\u6dfb\u52a0"), `${Notice.info}`, true, 30, callback_Countdown);
        }
      },

      menuRemove: t => {
        if (t) {
          GMunregisterMenuCommand(t);
        }
      },

      registerMenuCommand: function (e) {
        let _Use_Bing__, in_Use_Configure, _use_Bing_ID, in_UpdateCheck_ID;

        this.menuRemove(_use_Bing_ID);
        this.menuRemove(in_Use_Configure);
        this.menuRemove(in_UpdateCheck_ID);

        in_Use_Configure = GMregisterMenuCommand(`\ufff0\ud83c\udfaf【脚本参数】功能设置开关${Hotkey ? "(" + (isMac ? "Y" : "E") + ")" : ""}`, () => {
          addActionConfigure();
        });
        _Use_Bing__ = e ? "\ufff2\u2714\ufe0f【已开启】" : "\ufff2\u274c【已关闭】";
        _use_Bing_ID = GMregisterMenuCommand(`${_Use_Bing__}Bing 搜索跳转${Hotkey ? "(B)" : ""}`, () => {
          if (Date.now() - defCon.timer > 4e3) {
            this.isUsedSwitcher(e, _data, "Bing 按钮");
            defCon.timer = Date.now();
          }
        });

        if (checkUpdate) {
          if (CONST.isVDResult) {
            in_UpdateCheck_ID = GMregisterMenuCommand(`\ufff5\ud83e\udded【版本更新】从服务器实时检查${Hotkey ? "(" + (isMac ? "L" : "V") + ")" : ""}`, async () => {
              if (Date.now() - defCon.timer > 30e3) {
                GMdeleteValue("_Check_Version_Expire_");
                debug("//-> up-to-date? ", Boolean(await checkVersion(checkUpdate)));
                defCon.timer = Date.now();
              } else {
                const remainTimer = 30 - Math.floor((Date.now() - defCon.timer) / 1e3);
                GMnotification(Notice.noticeHTML(`<dd>更新检测过于频繁，服务器受不鸟啦，请${remainTimer}秒后重试！</dd>`), `${Notice.info}`, false, 15);
              }
            });
          } else {
            in_UpdateCheck_ID = GMregisterMenuCommand(`\ufff5\ud83d\udcdb【版本更新】已关闭 \u267b 重新开启${Hotkey ? "(" + (isMac ? "L" : "V") + ")" : ""}`, () => {
              if (Date.now() - defCon.timer > 4e3) {
                _data.VerDetAuto = true;
                GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
                GMdeleteValue("_Check_Version_Expire_");
                GMdeleteValue("_nCount_");
                debug("//-> Destroy cache & session when restart detection.");
                GMnotification(
                  Notice.noticeHTML(`<dd class="${Notice.center}">更新检测已<kbd class="im">开启</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
                  `${Notice.info}`,
                  true,
                  30,
                  callback_Countdown
                );
                defCon.timer = Date.now();
              }
            });
          }
        }
      },

      menuDisplay: function () {
        if (!CONST.isSecurityPolicy) {
          this.registerMenuCommand(CONST.isUseBing);
        }
        if (window.self === window.top) {
          console.log(
            "%c[GB-Status]%c\nInsert the Bing Search Button: %c%s",
            "font-weight:bold;color:darkorange",
            "color:0",
            "font-weight:bold;color:red",
            defCon.titleCase(CONST.isUseBing && !CONST.isSecurityPolicy)
          );
        }
      },

      init: function () {
        this.menuDisplay();
      },
    };

    /* hotkey setting */

    if (Hotkey) {
      document.addEventListener("keydown", async event => {
        const e = event || window.Event;
        const ekey = (isMac ? e.metaKey : e.altKey) && !e.ctrlKey && !e.shiftKey;
        if (e.keyCode === (isMac ? 89 : 69) && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.timer > 1e3) {
            defCon.timer = Date.now();
            addActionConfigure();
          }
        }
        if (e.keyCode === 66 && ekey) {
          e.preventDefault();
          if (Date.now() - defCon.timer > 4e3) {
            defCon.timer = Date.now();
            menuManager.isUsedSwitcher(CONST.isUseBing, _data, "Bing 按钮");
          }
        }
        if (e.keyCode === (isMac ? 76 : 86) && ekey && checkUpdate) {
          e.preventDefault();
          if (Date.now() - defCon.timer > 30e3) {
            defCon.timer = Date.now();
            if (CONST.isVDResult) {
              GMdeleteValue("_Check_Version_Expire_");
              debug("//-> up-to-date? ", Boolean(await checkVersion(checkUpdate)));
            } else {
              _data.VerDetAuto = true;
              GMsetValue("_configuration_", defCon.encrypt(JSON.stringify(_data)));
              GMdeleteValue("_Check_Version_Expire_");
              GMdeleteValue("_nCount_");
              debug("//-> Destroy cache & session when restart detection.");
              GMnotification(
                Notice.noticeHTML(`<dd class="${Notice.center}">更新检测已<kbd class="im">开启</kbd>，网页在<em>3</em>秒后刷新！</dd>`),
                `${Notice.info}`,
                true,
                30,
                callback_Countdown
              );
            }
          } else {
            const remainTimer = 30 - Math.floor((Date.now() - defCon.timer) / 1e3);
            GMnotification(Notice.noticeHTML(`<dd>你的快捷键按得太快了，我受不鸟啦……请慢点儿！(${remainTimer})</dd>`), `${Notice.info}`, false, 20);
          }
        }
      });
    }

    /* Insert search Button */

    const searchManager = {
      insertCSS: () => {
        try {
          const doStyName = `${CONST.rndclassName}`;
          const doStyle = CONST.noticeCss + curretSite.StyleCode + curretSite.keyStyle;
          addStyle(doStyle, doStyName, "head");
        } catch (e) {
          error("//-> %csearchManager.insertCSS:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      insertSearchButton: () => {
        try {
          const getTarget = curretSite.MainType;
          const doHtml = curretSite.HtmlCode;
          const indexPage = location.pathname === "/";
          const userSpan = cE("span");
          userSpan.id = `${CONST.rndidName}`;
          userSpan.innerHTML = doHtml;
          const SpanID = `#${userSpan.id}`;
          let Target = qS(getTarget);
          if (!indexPage && Target) {
            if (!qS(SpanID) && getSearchValue()) {
              if (curretSite.SiteTypeID === newSiteType.BING) {
                if (CONST.isUseBing) {
                  Target.appendChild(userSpan);
                  if (Target.parentNode.childNodes[0].tagName === "INPUT") {
                    Target.parentNode.childNodes[0].style.width = "400px";
                  }
                  // Bing image fixed
                  if (qS(".b_searchboxForm") && /^images$/.test(CONST.vim.trim())) {
                    if (location.search.includes("view=detailV2") && CONST.isUseBing) {
                      qS(".b_searchboxForm").setAttribute("style", "width:max-content!important;padding-right:5px!important");
                      qA(`#${CONST.rndidName} input`).forEach(item => {
                        item.style.cssText += "height:36px!important;border-radius:6px!important;padding:0 12px!important;margin:2px -2px 0 0!important;";
                      });
                    }
                  }
                }
              } else {
                insterAfter(userSpan, Target);
                // Baidu image fixed
                if (qS(SpanID) && /^baiduimage$/.test(CONST.vim.trim())) {
                  qS(SpanID).setAttribute("style", "margin-left:12px");
                }
                // Google fixed
                if (curretSite.SiteTypeID === newSiteType.GOOGLE) {
                  qS(SpanID).parentNode.style.width = "100%";
                  qS(SpanID).parentNode.style.minWidth = "100%";
                  if (qS(SpanID) && getUrlParam("tbs").startsWith("sbi")) {
                    qS(SpanID).parentNode.parentNode.style.width = "fit-content";
                    qS(SpanID).parentNode.parentNode.parentNode.style.width = "fit-content";
                  } else {
                    qS(SpanID).parentNode.parentNode.style.width = null;
                    qS(SpanID).parentNode.parentNode.parentNode.style.width = null;
                  }
                }
              }

              debug(`//-> searchManager $(Target): ${Target}`);

              qA(`#${CONST.ggyx}, #${CONST.bbyx}, #${CONST.bdyx}`).forEach(per => {
                per.addEventListener("click", () => {
                  let gotoUrl = "about:blank";
                  switch (per.id) {
                    case `${CONST.ggyx}`:
                      if (/^(baiduimage|images)$/.test(CONST.vim.trim())) {
                        gotoUrl = "https://www.google.com/search?hl=zh-CN&source=lnms&tbm=isch&sa=X&q=";
                      } else {
                        gotoUrl = "https://www.google.com/search?hl=zh-CN&source=hp&newwindow=1&q=";
                      }
                      break;
                    case `${CONST.bbyx}`:
                      if (/^(isch|baiduimage)$/.test(CONST.vim.trim())) {
                        gotoUrl = "https://cn.bing.com/images/search?first=1&tsc=ImageBasicHover&q=";
                      } else {
                        gotoUrl = "https://cn.bing.com/search?q=";
                      }
                      break;
                    case `${CONST.bdyx}`:
                      if (/^(images|isch)$/.test(CONST.vim.trim())) {
                        gotoUrl = "https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=";
                      } else {
                        gotoUrl = "https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=";
                      }
                      break;
                    default:
                      break;
                  }
                  if (localWindow) {
                    top.location.href = decodeURI(gotoUrl + getSearchValue());
                  } else {
                    GMopenInTab(decodeURI(gotoUrl + getSearchValue()), defCon.options);
                  }
                });
              });
            }
          }
        } catch (e) {
          error("//-> %csearchManager.insertSearchButton:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      scrollDetect: () => {
        let scrollbars, scrollspan, height, e;
        const getTarget = curretSite.MainType;
        const indexPage = location.pathname === "/";
        if (!indexPage && qS(getTarget)) {
          switch (curretSite.SiteTypeID) {
            case newSiteType.GOOGLE:
              // Google image fixed
              e = /^isch$/.test(CONST.vim.trim());
              scrollspan = e ? CONST.scrollspan2 : CONST.scrollspan;
              scrollbars = e ? CONST.scrollbars2 : CONST.scrollbars;
              height = e ? 0 : 35;
              setScrollButton(`#${CONST.rndidName}`, scrollspan, height);
              setScrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, scrollbars, height);
              if (CONST.isUseBing) {
                setScrollButton(`#${CONST.rndidName} #${CONST.bbyx} input`, scrollbars, height);
              }
              break;
            case newSiteType.BING:
              if (CONST.isUseBing) {
                e = /^(images|videos)$/.test(CONST.vim.trim());
                scrollspan = e ? CONST.scrollspan : CONST.scrollspan2;
                scrollbars = e ? CONST.scrollbars : CONST.scrollbars2;
                setScrollButton(`#${CONST.rndidName}`, scrollspan, 50);
                setScrollButton(`#${CONST.rndidName} #${CONST.bdyx} input`, scrollbars, 50);
                setScrollButton(`#${CONST.rndidName} #${CONST.ggyx} input`, scrollbars, 50);
              } else {
                debug(`//-> No scrolling detecting.`);
              }
              break;
            default:
              debug(`//-> No scrolling detecting.`);
              break;
          }
        }
      },

      preInsertContentToHTML: function () {
        setRAFInterval(
          () => {
            if (!qS(`.${CONST.rndclassName}`)) {
              this.insertCSS();
            }
            if (!qS(`#${CONST.rndidName}`)) {
              this.insertSearchButton();
              this.scrollDetect();
            }
            return qS(`.${CONST.rndclassName}`) && qS(`#${CONST.rndidName}`);
          },
          50,
          true
        );
      },

      doSwitch: function () {
        try {
          if (curretSite.SiteTypeID !== newSiteType.OTHERS) {
            if (CONST.isSecurityPolicy) {
              if (window.self === window.top) {
                console.log(
                  "%c[GB-Prohibit]%c\nBlocked By: %c%s Security Policy",
                  "font-weight:bold;color:indigo",
                  "color:0",
                  "font-weight:bold;color:darkred",
                  curretSite.SiteName
                );
              }
              return;
            } else {
              this.preInsertContentToHTML();
              const callback = mutations => {
                mutations.forEach(mutation => {
                  if (!(qS(`.${CONST.rndclassName}`) && qS(`#${CONST.rndidName}`))) {
                    debug(
                      "%c[GB-MutationObserver]\n%c(%c%s%c: %c%s%c)",
                      "font-weight:bold;color:olive",
                      "color:0",
                      "color:olive",
                      mutation.type,
                      "color:0",
                      "font-weight:bold;color:red",
                      defCon.titleCase(!this.preInsertContentToHTML()),
                      "color:0"
                    );
                  }
                });
              };
              const opts = { childList: true, subtree: true };
              const observer = new MutationObserver(callback);
              observer.observe(document, opts);
              if (window.self === window.top) {
                console.log(
                  "%c[GB-Switch]%c\nWe are using The %c%s%c Search Engine.",
                  "font-weight:bold;color:Green",
                  "color:0",
                  "font-weight:bold;color:darkcyan",
                  curretSite.SiteName,
                  "font-weight:normal;color:0"
                );
              }
            }
          }
        } catch (e) {
          error("//-> %csearchManager.doSwitch:\n%c%s", "font-weight:bold", "font-weight:normal", e);
        }
      },

      init: function () {
        if (curretSite.SiteTypeID === newSiteType.GOOGLE) {
          getGlobalGoogle("www.google.com", GoogleJump);
        }
        this.doSwitch();
      },
    };

    /* important functions */

    function getGlobalGoogle(google, checkGoogleJump) {
      if (checkGoogleJump) {
        if (getRealHostName() !== getRealHostName(google) && !sessionStorage.getItem("_global_google_")) {
          sessionStorage.setItem("_global_google_", 1);
          try {
            setTimeout(() => {
              defCon.s = GMopenInTab(`https://${google}/ncr`, true);
              GMnotification(Notice.noticeHTML(`<dd class="${Notice.center}"><span>智能跳转</span>即将跳转至Google国际站：<br/>${google}</dd>`), `${Notice.info}`, true, 20, {
                onClose: [
                  () => {
                    if (defCon.s) {
                      defCon.s.close();
                    }
                    location.href = top.location.href.replace(top.location.hostname, google);
                  },
                ],
              });
            }, 500);
          } catch (e) {
            error("//-> getGlobalGoogle:", e);
          }
        }
      }
    }

    function getRealHostName(_index) {
      const index = _index || top.location.hostname;
      return index.substring(index.indexOf("google"));
    }

    function setScrollButton(paraName, classNameIn, scrollSize) {
      debug(`//-> ${curretSite.SiteName} Scrolling Detecting: ${paraName}`);
      const oDiv = qS(paraName);
      let H = 0;
      let Y = oDiv;
      if (Y !== null) {
        while (Y) {
          H += Y.offsetTop;
          Y = Y.offsetParent;
        }
        document.addEventListener("scroll", () => {
          const s = defCon.elCompat.scrollTop;
          debug(`//-> H=${H} S=${s} (${s - H})`);
          if (s > H + scrollSize) {
            oDiv.setAttribute("class", classNameIn);
          } else {
            oDiv.removeAttribute("class");
          }
        });
      }
    }

    function insterAfter(newElement, targetElement) {
      if (targetElement !== null) {
        const parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
          parent.appendChild(newElement);
        } else {
          parent.insertBefore(newElement, targetElement.nextSibling);
        }
      }
    }

    function addStyle(css, className, addToTarget, isReload = false, initType = "text/css", reNew = false) {
      setRAFInterval(
        () => {
          let addTo = qS(addToTarget);
          if (typeof addToTarget === "undefined") {
            addTo = document.head || document.body || document.documentElement || document;
          }
          if (typeof addToTarget === "undefined" || (typeof addToTarget !== "undefined" && qS(addToTarget))) {
            if (isReload === true && qS(`.${className}`)) {
              safeRemove(`.${className}`);
              reNew = true;
            } else if (isReload === false && qS(`.${className}`)) {
              return true;
            }
            const cssNode = cE("style");
            if (className !== null) {
              cssNode.className = className;
            }
            cssNode.id = "S" + Date.now().toString().slice(-8);
            cssNode.setAttribute("type", initType);
            cssNode.innerHTML = css;
            addTo.appendChild(cssNode);
            if (reNew && qS(`.${className}`)) {
              return true;
            }
          }
        },
        20,
        true
      );
    }

    function safeRemove(Css) {
      try {
        const removeNodes = qA(Css);
        for (let i = 0; i < removeNodes.length; i++) {
          removeNodes[i].remove();
        }
      } catch (e) {
        error("//-> safeRemove:", e.name);
      }
    }

    function getSearchValue(val) {
      qA('input[name="wd"], input[name="q"], input[name="word"]').forEach((item, index, arr) => {
        val = arr[0].value;
        if (val) {
          debug(`//-> INPUT: ${val} - INDEX: ${index} - OLD: ${item.value}`);
        }
      });
      if (val === null || val === "" || typeof val === "undefined") {
        const kvl = location.search.substr(1).split("&");
        if (kvl) {
          for (let i = 0; i < kvl.length; i++) {
            const value = kvl[i].replace(/^(wd|word|kw|query|q)=/, "");
            if (value !== kvl[i]) {
              val = value;
            }
          }
          if (val) {
            val = val.replace(/\+/g, " ");
            debug(`//-> QUERY: ${val}`);
          } else {
            val = "";
            error(`//-> QUERY is null`);
          }
        } else {
          return "";
        }
      }
      return encodeURIComponent(val);
    }

    function setSecurityPolicy() {
      if (window.trustedTypes && window.trustedTypes.createPolicy) {
        window.trustedTypes.createPolicy("default", {
          createHTML: (string, sink) => {
            return string;
          },
        });
      }
    }

    function setRAFInterval(callback, period, runNow, times = 0) {
      const needCount = (period / 1000) * 60;
      if (runNow === true) {
        const shouldFinish = callback();
        if (shouldFinish) {
          return;
        }
      }
      const step = () => {
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
      };
      requestAnimationFrame(step);
    }

    /* Let`s enjoy it! */

    !(function () {
      try {
        debug("//-> Content-Security-Policy: trusted-types.");
        setSecurityPolicy();
        debug("//-> Insert Ext Menu.");
        menuManager.init();
        debug("//-> Insert Search Button.");
        searchManager.init();
      } catch (e) {
        console.error("%c[GB-Error]%c\n%s", "font-weight:bold;color:red", "font-weight:bold;color:darkred", e);
      }
    })();
  })();
})();
