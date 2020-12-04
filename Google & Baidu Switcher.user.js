// ==UserScript==
// @name            Google & baidu Switcher (ALL in One)
// @name:en         Google & baidu & Bing Switcher (ALL in One)
// @name:zh-CN      谷歌搜索、百度搜索、必应搜索的聚合跳转集合工具
// @name:zh-TW      谷歌搜索、百度搜索、必應搜索的聚合跳轉集合工具
// @version         2.0.20201201.1
// @author          F9y4ng
// @description     最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓存，再次载入使用，感谢使用！
// @description:zh-TW  最新版本的集合谷歌、百度、必應的搜索引擎跳轉工具，必應跳轉可在菜單進行自定義設置。此版本無外部腳本調用，更快速和準確的進行按鈕定位，顯示速度大大提升。如有異常請清空瀏覽器緩存，再次載入使用，感謝使用！
// @description:en  The latest version of Google, Baidu, Bing`s search engine, Bing option can be switched in the menu settings. If any exception or error, please clear the browser cache and reload it. again. Thank you!
// @namespace       https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/Google_baidu_Switcher_(ALL_in_One)
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @icon            https://www.google.com/favicon.ico
// @include         *://encrypted.google.*/search*
// @include         *://*.google*/search*
// @include         *://*.google*/webhp*
// @include         *://*.baidu.com/*
// @include         *://*.bing.com/*
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_openInTab
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_notification
// @license         GPL-3.0-only
// @create          2015-10-07
// @copyright       2015-2020, F9y4ng
// @run-at          document-start
// ==/UserScript==

'use strict';

!(function () {
  let isdebug = false;
  let debug = isdebug ? console.log.bind(console) : function () {};

  /* Perfectly Compatible For Greasemonkey, TamperMonkey, ViolentMonkey * F9y4ng * 20201127 */

  let GMsetValue, GMgetValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMnotification, GMopenInTab;
  const GMinfo = GM_info;
  let handlerInfo = GMinfo.scriptHandler;
  const isGM = Boolean(handlerInfo.toLowerCase() === 'greasemonkey');

  debug('//-> CheckGM: ' + isGM + ' >> ' + handlerInfo);

  if (isGM) {
    let Storage = window.localStorage;
    if (Storage) {
      GMsetValue = function (key, value) {
        Storage.setItem(key, value);
      };
      GMgetValue = function (key) {
        return Storage.getItem(key);
      };
    }
    GMregisterMenuCommand = function (caption, commandFunc, accessKey) {
      if (!document.body) {
        if (document.readyState === 'loading' && document.documentElement && document.documentElement.localName === 'html') {
          new MutationObserver(function (mutations, observer) {
            if (document.body) {
              observer.disconnect();
              GMregisterMenuCommand(caption, commandFunc, accessKey);
              debug('//-> Mutation: ' + mutations);
            }
          }).observe(document.documentElement, { childList: true });
        } else {
          debug('GMregisterMenuCommand got no body.');
        }
        return;
      }
      let contextMenu = document.body.getAttribute('contextmenu');
      let menu = contextMenu ? document.querySelector('menu#' + contextMenu) : null;
      if (!menu) {
        menu = document.createElement('menu');
        menu.setAttribute('id', 'gm-registered-menu');
        menu.setAttribute('type', 'context');
        document.body.appendChild(menu);
        document.body.setAttribute('contextmenu', 'gm-registered-menu');
      }
      let menuItem = document.createElement('menuitem');
      menuItem.setAttribute('icon', 'https://wiki.greasespot.net/favicon.ico');
      menuItem.textContent = caption;
      menuItem.addEventListener('click', commandFunc, true);
      menu.appendChild(menuItem);
    };
    GMunregisterMenuCommand = function () {
      let contextMenu = document.body.getAttribute('contextmenu');
      let menu = contextMenu ? document.querySelector('menu#' + contextMenu) : null;
      if (menu) {
        document.body.removeChild(menu);
      }
    };
    GMnotification = function (options) {
      const opts = {};
      if (typeof options === 'string') {
        opts.text = options;
        opts.title = arguments[1];
        opts.image = arguments[2];
        opts.onclick = arguments[3];
      } else {
        Object.keys(options).forEach(function (key) {
          opts[key] = options[key];
        });
      }

      checkPermission();

      function checkPermission() {
        if (Notification.permission === 'granted') {
          fireNotice(opts);
        } else if (Notification.permission === 'denied') {
          debug('//-> User has denied notifications for this page/site!');
          return;
        } else {
          Notification.requestPermission(function (permission) {
            debug('//-> New permission: ' + permission);
            checkPermission();
          });
        }
      }

      function fireNotice(ntcOptions) {
        if (ntcOptions.text && !ntcOptions.body) {
          ntcOptions.body = ntcOptions.text;
        }
        let ntfctn = new Notification(ntcOptions.title, ntcOptions);

        if (ntcOptions.onclick) {
          ntfctn.onclick = ntcOptions.onclick;
        }
        if (ntcOptions.timeout) {
          setTimeout(function () {
            ntfctn.close();
          }, ntcOptions.timeout);
        }
      }
    };
    GMopenInTab = function (a, b) {
      window.open(a, Math.random().toString(36).slice(-6), '', b instanceof String);
    };
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
    GMnotification = GM_notification;
    GMopenInTab = GM_openInTab;
  }

  const defaultConfig = {
    Version: GMinfo.script.version,
    lastRuntime: new Date().toLocaleString('chinese', { hour12: false }),
  };

  console.log(
    '%c[GB-Init]%c\nVersion: ' + defaultConfig.Version + '\nlastRuntime: ' + defaultConfig.lastRuntime,
    'font-weight:bold;color:dodgerblue',
    'color:0'
  );

  !(function () {
    let CONST = {
      isSecurityPolicy: false,
      isUseBing: (function () {
        let temp = parseInt(GMgetValue('_if_Use_Bing_'));
        if (isNaN(temp)) {
          GMsetValue('_if_Use_Bing_', 0);
          console.log(
            '%c[GB-Warning]%c\nThis is your first visit, the Bing search button will not be inserted by default.',
            'font-weight:bold;color:salmon',
            'color:1'
          );
          return false;
        } else {
          return Boolean(temp);
        }
      })(),
    };

    debug('//-> ' + CONST.isUseBing);

    let curretSite = {
      SiteTypeID: 1,
      SiteName: '',
      SplitName: '',
      MainType: '',
      HtmlCode: '',
      StyleType: '',
    };

    const listSite = {
      baidu: {
        SiteTypeID: 1,
        SiteName: 'Baidu',
        SplitName: 'tn',
        MainType: '.s_btn_wr',
        HtmlCode: CONST.isUseBing
          ? `
            <span id="ggyx">
                <input type="button" title="Google一下" value="Google"/>
            </span>
            <span id="bbyx">
                <input type="button" title="Bing一下" value="Bing ®"/>
            </span>`
          : `
            <span id="ggyx">
                <input type="button" title="Google一下" value="Google一下"/>
            </span>`,
        StyleCode: CONST.isUseBing
          ? `
            #form {
                white-space: nowrap;
            }
            #u {
                z-index: 1!important;
            }
            #for_Baidu #bbyx {
                margin-left: -1.5px;
            }
            #for_Baidu #ggyx {
                margin-left: 2px;
            }
            #bbyx input{
                background: #4e6ef2;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                cursor: pointer;
                height: 40px;
                color: #fff;
                width: 80px;
                border: 1px solid #3476d2;
                font-size: 16px;
                font-weight:bold;
            }
            #ggyx input {
                background: #4e6ef2;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                cursor: pointer;
                height: 40px;
                color: #fff;
                width: 80px;
                border: 1px solid #3476d2;
                font-size: 16px;
                font-weight:bold;
            }
            #ggyx input:hover, #bbyx input:hover {
                background: #4662D9;
                border: 1px solid #3476d2;
            }`
          : `
            #form {
                white-space: nowrap;
            }
            #u {
                z-index: 1!important;
            }
            #for_Baidu {
                margin-left: 6px
            }
            #ggyx input {
                background: #4e6ef2;
                border-radius: 10px;
                cursor: pointer;
                height: 40px;
                color: #fff;
                width: 112px;
                border: 1px solid #3476d2;
                text-shadow: 0 0 2px #ffffff!important;
                font-size: 16px
            }
            #ggyx input:hover {
                background: #4662D9;
                border: 1px solid #3476d2;
            }`,
      },
      google: {
        SiteTypeID: 2,
        SiteName: 'Google',
        SplitName: 'tbm',
        MainType: "form button[type='submit']",
        HtmlCode: CONST.isUseBing
          ? `
            <span id="bdyx">
                <input type="button" title="百度一下" value="百度一下"/>
            </span>
            <span id="bbyx">
                <input type="button" title="Bing一下" value="Bing一下"/>
            </span>`
          : `
            <span id="bdyx">
                <input type="button" title="百度一下" value="百度一下"/>
            </span>`,
        StyleCode: CONST.isUseBing
          ? `
            #for_Google {
                margin: 3px 4px 0 -5px;
            }
            #for_Google #bdyx {
                padding:5px 0 4px 18px;
                border-left:1px solid #ddd;
            }
            #for_Google #bbyx {
                margin-left:-2px
            }
            .scrollspan{
                padding:1px 0 0 18px!important
            }
            .scrollbars {
                height: 26px!important;
                font-size: 13px!important;
                font-weight: normal!important;
                text-shadow: 0 0 1px #ffffff!important;
            }
            #bdyx input {
                cursor: pointer;
                padding: 1px 1px 1px 6px!important;
                border: 1px solid transparent;
                background: #1a73e8;
                box-shadow: none;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
                width: 90px;
                height: 38px;
                font-size: 15px;
                font-weight: 600;
                color: #fff
            }
            #bbyx input {
                cursor: pointer;
                padding: 1px 6px 1px 1px!important;
                border: 1px solid transparent;
                background: #1a73e8;
                box-shadow: none;
                border-top-right-radius: 24px;
                border-bottom-right-radius: 24px;
                width: 90px;
                height: 38px;
                font-size: 15px;
                font-weight: 600;
                color: #fff
            }
            #bdyx input:hover, #bbyx input:hover {
                background: #2b7de9;
            }`
          : `
            #for_Google {
                margin: 3px 4px 0 -5px;
            }
            #for_Google #bdyx {
                padding:5px 0 4px 18px;
                border-left:1px solid #ddd;
            }
            .scrollspan{
                padding:1px 0 0 18px!important
            }
            .scrollbars {
                height: 26px!important;
                font-size: 13px!important;
                font-weight: normal!important;
                text-shadow: 0 0 1px #ffffff!important;
            }
            #bdyx input {
                cursor: pointer;
                border: 1px solid transparent;
                background: #1a73e8;
                box-shadow: none;
                border-radius: 24px;
                width: 90px;
                height: 38px;
                font-size: 14px;
                font-weight: 600;
                color: #ffffff;
            }
            #bdyx input:hover {
                background: #2b7de9;
            }`,
      },
      bing: {
        SiteTypeID: 3,
        SiteName: 'Bing',
        SplitName: 'undefined',
        MainType: '#sb_go_par',
        HtmlCode: `
            <span id="bdyx">
                <input type="button" title="百度一下" value="百度"/>
            </span>
            <span id="ggyx">
                <input type="button" title="Google一下" value="Google"/>
            </span>`,
        StyleCode: `
            #for_Bing {
                height: 44px;
                width: 120px;
                margin: 2px 10px 2px 0;
            }
            #bdyx input, #ggyx input {
                cursor: pointer;
                width: auto 60px;
                height: 36px;
                background-color: #f7faff;
                border: 1px solid #b4ddea;
                color: #2996b0;
                margin-left: -2px;
                font-family: 'Microsoft YaHei'!important;
                text-shadow: 1px 1px 2px #999!important;
                font-size: 16px;
            }
            #bdyx input:hover, #ggyx input:hover {
                background-color: #ffffff;
                transition:border linear .1s,box-shadow linear .3s;
                box-shadow: 1px 1px 8px #5f5f5f;
                border: 2px solid #00809d;
                text-shadow: 0 0 1px #00809d!important;
                color:#00809d;
            }`,
      },
      other: { SiteTypeID: 0 },
    };

    let newSiteType = {
      BAIDU: listSite.baidu.SiteTypeID,
      GOOGLE: listSite.google.SiteTypeID,
      BING: listSite.bing.SiteTypeID,
      OTHERS: 0,
    };

    debug('//-> The program begins to execution phase.');

    if (location.host.includes('.baidu.com')) {
      curretSite = listSite.baidu;
    } else if (location.host.includes('google')) {
      curretSite = listSite.google;
    } else if (location.host.includes('bing')) {
      curretSite = listSite.bing;
    } else {
      curretSite = listSite.other;
    }
    if (
      (curretSite.SiteTypeID === newSiteType.GOOGLE && location.href.replace(/tbm=(isch|lcl|flm)/, '') !== location.href) ||
      (curretSite.SiteTypeID === newSiteType.BING && location.href.replace(/maps\?/, '') !== location.href) ||
      (curretSite.SiteTypeID === newSiteType.BAIDU &&
        (/(b2b|map|wenku|tieba)/.test(location.hostname) ||
          location.href.replace(/tn=(baiduimage|news|ikaslist|vsearch)/, '') !== location.href))
    ) {
      CONST.isSecurityPolicy = true;
    }

    let menuManager = {
      menuDisplay: function () {
        let _Use_Bing_ = CONST.isUseBing;
        let _use_Bing_ID, in_Use_feedBack_ID;

        registerMenuCommand();
        debug('//-> ' + _Use_Bing_);

        function registerMenuCommand() {
          let _Use_Bing__;
          if (in_Use_feedBack_ID) {
            GMunregisterMenuCommand(_use_Bing_ID);
            GMunregisterMenuCommand(in_Use_feedBack_ID);
          }
          if (_Use_Bing_) {
            _Use_Bing__ = '√';
          } else {
            _Use_Bing__ = '×';
          }
          _use_Bing_ID = GMregisterMenuCommand(` [${_Use_Bing__}] \u6dfb\u52a0 Bing \u641c\u7d22\u8df3\u8f6c`, function () {
            inUse_switch(_Use_Bing_, '_if_Use_Bing_', 'Bing\u6309\u94ae');
          });
          in_Use_feedBack_ID = GMregisterMenuCommand('\u4f7f\u7528\u53cd\u9988', function () {
            GMopenInTab('https://greasyfork.org/zh-CN/scripts/12909-google-baidu-switcher-all-in-one/feedback', {
              active: true,
              insert: true,
              setParent: true,
            });
          });

          console.log(
            '%c[GB-Status]%c\nInsert the Bing Search Button: %c%s%c',
            'font-weight:bold;color:darkorange',
            'color:0',
            'font-weight:bold;color:red',
            _Use_Bing_.toString().toUpperCase(),
            'font-weight:normal;color:0'
          );
        }

        function inUse_switch(_status, Name, Tips) {
          const title = `\u6e29\u99a8\u63d0\u793a\uff1a`;
          if (_status) {
            GMsetValue(`${Name}`, 0);
            GMnotification(`${Tips}\u5df2\u5173\u95ed\uff0c\u4e09\u79d2\u540e\u5c06\u5237\u65b0\uff01`, title);
          } else {
            GMsetValue(`${Name}`, 1);
            GMnotification(`${Tips}\u5df2\u5f00\u542f\uff0c\u4e09\u79d2\u540e\u5c06\u5237\u65b0\uff01`, title);
          }
          registerMenuCommand();
          window.setTimeout(function () {
            let loc = location.href.replace(/&timestamp=(\d+)/, '');
            location.replace(loc + `&timestamp=` + new Date().getTime());
          }, 3000);
        }
      },
      init: function () {
        this.menuDisplay();
      },
    };

    let searchManager = {
      doSwitch: function () {
        try {
          const idName = '#for_' + curretSite.SiteName;
          if (curretSite.SiteTypeID !== newSiteType.OTHERS) {
            if (CONST.isSecurityPolicy) {
              console.log(
                '%c[GB-Prohibit]%c\nBlocked By: %c%s Security Policy%c.',
                'font-weight:bold;color:indigo',
                'color:0',
                'color:darkred',
                curretSite.SiteName,
                'color:0'
              );
              return;
            } else {
              if (curretSite.SiteTypeID === newSiteType.BAIDU) {
                document.addEventListener('DOMNodeInserted', Callback, false);
              }
              RAFInterval(
                function () {
                  if (document.querySelector(idName) === null) {
                    return insertSearchButton() && scrollDetect();
                  }
                },
                500,
                true
              );

              console.log(
                '%c[GB-Switch]%c\nWe Are Using The %c%s%c Search Engine.',
                'font-weight:bold;color:Green',
                'color:0',
                'font-weight:bold;color:darkcyan',
                curretSite.SiteName,
                'font-weight:normal;color:0'
              );
            }
          }
        } catch (e) {
          debug('//-> ' + e.name);
        }

        function Callback(e) {
          if (e.target !== null && typeof e.target.className === 'string' && e.target.className.indexOf('InsertTo') === 0) {
            return;
          }
          setTimeout(function () {
            insertSearchButton();
          }, 100);
        }

        function insertSearchButton() {
          try {
            const getTarget = curretSite.MainType;
            const doHtml = curretSite.HtmlCode;
            const doStyName = 'InsertTo' + curretSite.SiteName;
            const doStyle = curretSite.StyleCode;
            const vim = GetUrlParam(curretSite.SplitName);
            const userSpan = document.createElement('span');
            let Target = document.querySelector(getTarget);
            userSpan.id = 'for_' + curretSite.SiteName;
            userSpan.innerHTML = doHtml;
            const SpanID = '#' + userSpan.id;

            addStyle(doStyle, doStyName, 'head', true);

            if (document.querySelector(SpanID) === null && getSearchValue().length > 0) {
              if (/^(nws|vid|fin|bks)$/.test(vim.trim())) {
                Target = Target.parentNode.parentNode.firstChild;
                Target.insertBefore(userSpan, Target.firstChild);
                document.querySelector(SpanID).setAttribute('style', 'float:right');
                debug('//-> ' + Target);
              } else {
                insterAfter(userSpan, Target);
              }
              document.querySelectorAll('#ggyx, #bbyx, #bdyx').forEach(function (per) {
                per.addEventListener('click', function () {
                  let gotoUrl = 'about:blank';
                  switch (per.id) {
                    case 'ggyx':
                      gotoUrl = 'https://www.google.com/search?newwindow=1&hl=zh-CN&source=hp&q=';
                      break;
                    case 'bbyx':
                      gotoUrl = 'https://cn.bing.com/search?q=';
                      break;
                    case 'bdyx':
                      gotoUrl = 'https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=';
                      break;
                    default:
                      break;
                  }
                  debug('//-> ' + per.id);
                  GMopenInTab(decodeURI(gotoUrl + getSearchValue()), {
                    active: true,
                    insert: true,
                    setParent: true,
                  });
                });
              });
            }
            return true;
          } catch (e) {
            debug('//-> ' + e.name);
            return false;
          }
        }

        function scrollDetect() {
          try {
            if (curretSite.SiteTypeID === newSiteType.GOOGLE) {
              const nodeName = '#for_' + curretSite.SiteName;
              debug('//-> Turn on google scrolling detecting.');
              if (document.querySelector(nodeName).parentNode) {
                document.querySelector(nodeName).parentNode.setAttribute('style', 'width:700px!important');
              }
              scrollButton(nodeName + ' #bdyx', 'scrollspan');
              scrollButton(nodeName + ' #bdyx input', 'scrollbars');
              if (CONST.isUseBing) {
                scrollButton(nodeName + ' #bbyx input', 'scrollbars');
              }
            }
            return true;
          } catch (e) {
            debug('//-> ' + e.name);
            return false;
          }
        }

        function scrollButton(paraName, classNameIn) {
          let oDiv = document.querySelector(paraName);
          let H = 0;
          let Y = oDiv;
          if (Y !== null) {
            while (Y) {
              H += Y.offsetTop;
              Y = Y.offsetParent;
            }
            document.addEventListener('scroll', function () {
              let s = document.body.scrollTop || document.documentElement.scrollTop;
              debug('//-> H-' + H);
              debug('//-> S-' + s);
              if (s > H + 35) {
                oDiv.setAttribute('class', classNameIn);
              } else {
                oDiv.removeAttribute('class');
              }
            });
          }
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
            20,
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

        function getSearchValue() {
          let val = '';
          document.querySelectorAll('input[name="wd"], input[name="q"]').forEach(function (things) {
            val = things.getAttribute('value');
            debug('//-> INPUT:' + val);
          });
          if (val === null || val === '' || typeof val === 'undefined') {
            let kvl = location.search.substr(1).split('&');
            for (let i = 0; i < kvl.length; i++) {
              let value = kvl[i].replace(/^(wd|word|kw|query|q)=/, '');
              if (value !== kvl[i]) {
                val = value;
              }
            }
            val = val.replace('+', ' ');
            debug('//-> QUERY:' + val);
          }
          return encodeURIComponent(val);
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

        function insterAfter(newElement, targetElement) {
          let parent = targetElement.parentNode;
          if (parent.lastChild === targetElement) {
            parent.appendChild(newElement);
          } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
          }
        }

        function GetUrlParam(paraName) {
          if (paraName === 'undefined') {
            const parameter = document.location.pathname.toString();
            let arr = parameter.split('/');
            return arr[1];
          } else {
            const url = document.location.toString();
            let arrObj = url.split('?');
            if (arrObj.length > 1) {
              let arrPara = arrObj[1].split('&');
              let arr;
              for (let i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split('=');
                if (arr !== null && arr[0] === paraName) {
                  return arr[1];
                }
              }
              return '';
            } else {
              return '';
            }
          }
        }
      },

      init: function () {
        debug('//-> Call the load menu option.');
        menuManager.init();
        debug('//-> Execute insert jump button.');
        this.doSwitch();
      },
    };

    (function () {
      try {
        searchManager.init();
      } catch (e) {
        console.error(
          '%c[GB-Error]%c\nConsole: %c%s%c.',
          'font-weight:bold;color:red',
          'color:0',
          'font-weight:bold;color:darkred',
          e,
          'color:0'
        );
      }
    })();
  })();
})();
