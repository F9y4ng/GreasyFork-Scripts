/* jshint esversion: 8 */
// ==UserScript==
// @name            Google & baidu Switcher (ALL in One)
// @name:en         Google & baidu & Bing Switcher (ALL in One)
// @name:zh-TW      谷歌搜索、百度搜索、必應搜索的聚合跳轉集合工具
// @version         2.4.20210529.7
// @author          F9y4ng
// @description     最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓存，再次载入使用，感谢使用！
// @description:en  The latest version of Google, Baidu, Bing`s search engine, Bing option can be switched in the menu settings. If any exception or error, please clear the browser cache and reload it again. Thank you!
// @description:zh-TW  最新版本的集合谷歌、百度、必應的搜索引擎跳轉工具，必應跳轉可在菜單進行自定義設置。此版本無外部腳本調用，更快速和準確的進行按鈕定位，顯示速度大大提升。如有異常請清空瀏覽器緩存，再次載入使用，感謝使用！
// @namespace       https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/Google_baidu_Switcher_(ALL_in_One)
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @icon            https://www.google.com/favicon.ico
// @include         *://*.google.*/search*
// @include         *://*.google.*/webhp*
// @include         *://www.baidu.com/*
// @include         *://image.baidu.com/*
// @include         *://*.bing.com/*
// @exclude         *://*.google.*/sorry/*
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey4.0+, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM.registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_openInTab
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @grant           GM_notification
// @grant           GM.notification
// @license         GPL-3.0-only
// @create          2015-10-07
// @copyright       2015-2021, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  ('use strict');
  const isVersionDetection = true; // Set "false" to turn off the Version Detection.
  const isdebug = false;
  const debug = isdebug ? console.log.bind(console) : () => {};

  function titleCase(str, bool) {
    const RegExp = bool ? /( |^)[a-z]/g : /(^)[a-z]/g;
    return str
      .toString()
      .toLowerCase()
      .replace(RegExp, L => {
        return L.toUpperCase();
      });
  }

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210209 */

  let GMsetValue, GMgetValue, GMregisterMenuCommand, GMunregisterMenuCommand, GMnotification, GMopenInTab;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const isGM = Boolean(handlerInfo.toLowerCase() === 'greasemonkey');

  debug(`//-> CheckGM: ${titleCase(isGM)} >> ${handlerInfo}`);

  if (isGM) {
    GMsetValue = GM.setValue;
    GMgetValue = GM.getValue;
    GMregisterMenuCommand = GM.registerMenuCommand;
    GMunregisterMenuCommand = () => {};
    GMnotification = GM.notification;
    GMopenInTab = (a, b) => {
      window.open(a, Math.random().toString(b.length).slice(-6), '');
    };
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
    GMnotification = GM_notification;
    GMopenInTab = GM_openInTab;
  }

  const defCon = {
    scriptName: GMinfo.script.name,
    curVersion: GMinfo.script.version,
    isNoticed: sessionStorage.getItem('nkey') || 0,
    isNeedUpdate: 0,
    fetchResult: true,
    isAutoUpdate: GMinfo.scriptWillUpdate ? GMinfo.scriptWillUpdate : true, // TODO :-)
    lastRuntime: new Date().toLocaleString('en-US', {
      timeZoneName: 'short',
      hour12: false,
    }),
  };

  console.info(
    `%c[GB-Init]%c\nVersion: ${defCon.curVersion} %c[%s]%c\nlastRuntime: ${defCon.lastRuntime}`,
    'font-weight:bold;color:dodgerblue',
    'color:0',
    'color:snow',
    Update_checkVersion() instanceof Object,
    'color:0'
  );

  function fetchVersion(u) {
    return new Promise((e, t) => {
      fetch(u, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        credentials: 'omit',
      })
        .then(e => {
          if (!e.ok) {
            throw Error(e.statusText);
          }
          return e.text();
        })
        .then(t => {
          let n = defCon.curVersion;
          t.split(/[\r\n]+/).forEach(function (item) {
            let key = item.match(/^(\/\/\s+@version\s+)(\S+)$/);
            if (key) {
              n = key[2];
            }
          });
          if (n !== undefined) {
            switch (isUpgrade(n, defCon.curVersion)) {
              case 2:
                e([2, n, u]);
                break;
              case 1:
                e([1, n, u]);
                break;
              default:
                e([0, n, u]);
                break;
            }
          }
        })
        .catch(e => {
          debug('%c[GB-Update]%c\nRequest Failure: %c(%s)', 'font-weight:bold;color:red', 'color:0', 'font-weight:bold;color:darkred', e);
          t();
        });
    });
  }

  function isUpgrade(current_version, compare_version) {
    let compare_version_array = compare_version.split('.');
    let current_version_array = current_version.split('.');
    let is_upgrade = 0;
    if (compare_version_array.length === 4 && current_version_array.length === 4) {
      for (let i = 0; i < compare_version_array.length; i++) {
        if (parseInt(compare_version_array[i]) < parseInt(current_version_array[i])) {
          is_upgrade = 2;
          break;
        } else {
          if (parseInt(compare_version_array[i]) === parseInt(current_version_array[i])) {
            continue;
          } else {
            is_upgrade = 1;
            break;
          }
        }
      }
    }
    return is_upgrade;
  }

  async function Update_checkVersion(s = isVersionDetection) {
    let t = [];
    if (s && defCon.isAutoUpdate) {
      t = await fetchVersion(
        String(
          `https://greasyfork.org/scripts/12909-google-baidu-switcher-all-in-one/code/` +
            `Google%20%20baidu%20Switcher%20(ALL%20in%20One).meta.js?${new Date().getTime()}`
        )
      ).catch(async () => {
        defCon.fetchResult = false;
      });
      if (!defCon.fetchResult) {
        t = await fetchVersion(
          `https://raw.githubusercontent.com/F9y4ng/GreasyFork-Scripts/master/Google%20%26%20Baidu%20Switcher.meta.js?${new Date().getTime()}`
        ).catch(async () => {
          t = [0, defCon.curVersion, ''];
        });
      }
      if (typeof t !== 'undefined') {
        defCon.isNeedUpdate = t[0];
        const lastestVersion = t[1];
        const updateUrl = t[2].replace('meta', 'user');
        const recheckURLs = updateUrl
          .replace('raw.githubusercontent', 'github')
          .replace('master', 'blob/master')
          .replace(/code\/[^/]+\.js/, '');
        switch (defCon.isNeedUpdate) {
          case 2:
            console.info(
              String(
                `%c[GB-Update]%c\nWe found a new version: %c${lastestVersion}%c.\n` +
                  `Please upgrade from your update source to the latest version.\n` +
                  `[${recheckURLs.split('/')[2]}]`
              ),
              'font-weight:bold;color:crimson',
              'color:0',
              'color:crimson',
              'color:0'
            );
            if (!defCon.isNoticed) {
              GMnotification({
                title: `${defCon.scriptName}`,
                text: String(
                  `\u53d1\u73b0\u6700\u65b0\u7248\u672c\uff1a${lastestVersion}` +
                    `\uff0c\u70b9\u51fb\u8fd9\u91cc\u8fdb\u884c\u76f4\u94fe\u66f4\u65b0` +
                    `\u3002\n\u005b${recheckURLs.split('/')[2]}\u6e90\u005d`
                ),
                timeout: 20e3,
                highlight: true,
                onclick: () => {
                  let w;
                  if (isGM) {
                    window.open(`${recheckURLs}`, `Update.Manual`, '');
                  } else {
                    w = window.open(`${updateUrl}`, `Update.Auto`, '');
                  }
                  setTimeout(() => {
                    w ? w.close() : () => {};
                    sessionStorage.clear();
                  }, 1000);
                },
              });
              sessionStorage.setItem('nkey', 2);
            }
            break;
          case 1:
            console.warn(
              String(
                `%c[GB-Update]%c\nWe found a new version, But %cthe latest version ` +
                  `(%c${lastestVersion}%c) is lower than your local version (%c${defCon.curVersion}%c).\n\n` +
                  `Please confirm whether you need to upgrade your local script, and then you need to update it manually.\n\n` +
                  `If you no longer need the update prompt, please set "isVersionDetection" to "false" in your local code!\n\n` +
                  `[${recheckURLs.split('/')[2]}]`
              ),
              'font-weight:bold;color:crimson',
              'font-weight:bold;color:0',
              'color:0',
              'font-weight:900;color:tomato',
              'color:0',
              'font-weight:900;color:darkred',
              'color:0'
            );
            if (!defCon.isNoticed) {
              GMnotification({
                title: `${defCon.scriptName}`,
                text: String(
                  `\u53d1\u73b0\u5f02\u5e38\u7248\u672c\uff1a${lastestVersion}` +
                    `\uff0c\u56e0\u6700\u65b0\u7248\u672c\u4f4e\u4e8e\u60a8\u7684\u672c` +
                    `\u5730\u7248\u672c(${defCon.curVersion})\uff0c\u8bf7\u70b9\u51fb\u8fd9` +
                    `\u91cc\u786e\u8ba4\u662f\u5426\u9700\u8981\u5347\u7ea7\uff1f` +
                    `\u005b${recheckURLs.split('/')[2]}\u6e90\u005d`
                ),
                timeout: 25e3,
                highlight: true,
                onclick: () => {
                  window.open(`${recheckURLs}`, `Update.Manual`, '');
                  sessionStorage.clear();
                },
              });
              sessionStorage.setItem('nkey', 1);
            }
            break;
          default:
            debug(
              `%c[GB-Update]%c\nCurretVersion: %cV${defCon.curVersion}%c is up to date!`,
              'font-weight:bold;color:darkcyan',
              'color:0',
              'color:red',
              'color:0'
            );
            break;
        }
      } else {
        console.error(
          '%c[GB-Update]\n%cSome Unexpected Errors Caused Version Detection Failure.\nProbably Caused By NetworkError.',
          'font-weight:bold;color:red',
          'font-weight:bold;color:darkred'
        );
      }
    }
  }

  !(async function () {
    const temp = parseInt(await GMgetValue('_if_Use_Bing_'));
    const CONST = {
      isSecurityPolicy: false,
      isUseBing: (() => {
        if (isNaN(temp)) {
          GMsetValue('_if_Use_Bing_', 0);
          console.warn(
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

    debug(`//-> ${CONST.isUseBing}`);

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
                text-shadow: 0 0 2px #ffffff !important;
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
                text-shadow: 0 0 1px #ffffff !important;
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
                text-shadow: 0 0 1px #ffffff !important;
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
                color: #fff;
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
                height: 40px;
                background-color: #f7faff;
                border: 1px solid #0095B7;
                color: #0095B7;
                margin-left: -1px;
                font-family: 'Microsoft YaHei'!important;
                font-size: 16px;
                font-weight: 700;
                border-radius: 4px;
            }
            .scrollspan {
                height: 32px!important;
            }
            .scrollbars {
                height: 30px!important;
            }
            #bdyx input:hover, #ggyx input:hover {
                background-color: #fff;
                transition:border linear .1s,box-shadow linear .3s;
                box-shadow: 1px 1px 8px #08748D;
                border: 2px solid #0095B7;
                text-shadow: 0 0 1px #0095B7 !important;
                color:#0095B7;
            }`,
      },
      other: { SiteTypeID: 0 },
    };

    const newSiteType = {
      BAIDU: listSite.baidu.SiteTypeID,
      GOOGLE: listSite.google.SiteTypeID,
      BING: listSite.bing.SiteTypeID,
      OTHERS: 0,
    };

    debug('//-> Initialization complete, start running...');

    if (location.host.includes('.baidu.com')) {
      curretSite = listSite.baidu;
    } else if (location.host.includes('.google.')) {
      curretSite = listSite.google;
    } else if (location.host.includes('.bing.com')) {
      curretSite = listSite.bing;
    } else {
      curretSite = listSite.other;
    }
    if (
      (curretSite.SiteTypeID === newSiteType.GOOGLE && location.href.replace(/tbm=(lcl|flm|fin)/, '') !== location.href) ||
      (curretSite.SiteTypeID === newSiteType.BING && location.href.replace(/maps\?/, '') !== location.href) ||
      (curretSite.SiteTypeID === newSiteType.BAIDU && location.href.replace(/tn=(news|ikaslist|vsearch)|detail\?/, '') !== location.href)
    ) {
      CONST.isSecurityPolicy = true;
    }

    let menuManager = {
      menuDisplay: function () {
        const _Use_Bing_ = CONST.isUseBing;
        let _use_Bing_ID, in_Use_feedBack_ID;

        registerMenuCommand();
        console.log(
          '%c[GB-Status]%c\nInsert the Bing Search Button: %c%s%c',
          'font-weight:bold;color:darkorange',
          'color:0',
          'font-weight:bold;color:red',
          titleCase(_Use_Bing_),
          'font-weight:normal;color:0'
        );
        debug(`//-> CONST.isUseBing: ${_Use_Bing_}`);

        function registerMenuCommand() {
          let _Use_Bing__;
          if (in_Use_feedBack_ID && !isGM) {
            GMunregisterMenuCommand(_use_Bing_ID);
            GMunregisterMenuCommand(in_Use_feedBack_ID);
          }
          if (_Use_Bing_) {
            _Use_Bing__ = '√';
          } else {
            _Use_Bing__ = '×';
          }
          _use_Bing_ID = GMregisterMenuCommand(` [${_Use_Bing__}] \u6dfb\u52a0 Bing \u641c\u7d22\u8df3\u8f6c`, () => {
            inUse_switch(_Use_Bing_, '_if_Use_Bing_', 'Bing\u6309\u94ae');
          });
          in_Use_feedBack_ID = GMregisterMenuCommand('\u4f7f\u7528\u53cd\u9988', () => {
            GMopenInTab('https://greasyfork.org/zh-CN/scripts/12909/feedback', {
              active: true,
              insert: true,
              setParent: true,
            });
          });
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
          setTimeout(() => {
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
          const idName = `#for_${curretSite.SiteName}`;
          const className = `.InsertTo${curretSite.SiteName}`;
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
              const callback = mutations => {
                mutations.forEach(mutation => {
                  if (document.querySelector(className) && document.querySelector(idName)) {
                    debug(`//-> Already Insert Button & CSS.`);
                  } else {
                    debug(
                      '%c[GB-MutationObserver]\n%c(%c%s%c has changed: %c%s%c).',
                      'font-weight:bold;color:olive',
                      'color:0',
                      'color:olive',
                      mutation.type,
                      'color:0',
                      'font-weight:bold;color:red',
                      titleCase(insertSearchButton() && scrollDetect()),
                      'color:0'
                    );
                  }
                });
              };
              const opts = { childList: true, subtree: true };
              new MutationObserver(callback).observe(document, opts);
              RAFInterval(
                () => {
                  if (!document.querySelector(idName) || !document.querySelector(className)) {
                    return insertSearchButton() && scrollDetect();
                  }
                },
                500,
                true
              );
              console.log(
                '%c[GB-Switch]%c\nWe are using The %c%s%c Search Engine.',
                'font-weight:bold;color:Green',
                'color:0',
                'font-weight:bold;color:darkcyan',
                curretSite.SiteName,
                'font-weight:normal;color:0'
              );
            }
          }
        } catch (e) {
          debug(`//-> %c${e.name}`, 'color:darkred');
        }

        function insertSearchButton() {
          try {
            const getTarget = curretSite.MainType;
            const doHtml = curretSite.HtmlCode;
            const doStyName = `InsertTo${curretSite.SiteName}`;
            const doStyle = curretSite.StyleCode;
            const vim = GetUrlParam(curretSite.SplitName);
            const userSpan = document.createElement('span');
            let Target = document.querySelector(getTarget);
            userSpan.id = `for_${curretSite.SiteName}`;
            userSpan.innerHTML = doHtml;
            const SpanID = `#${userSpan.id}`;

            addStyle(doStyle, doStyName, 'head');

            if (!document.querySelector(SpanID) && getSearchValue().length > 0 && Target) {
              if (/^(nws|vid|bks)$/.test(vim.trim())) {
                Target = Target.parentNode.parentNode.firstChild;
                Target.insertBefore(userSpan, Target.firstChild);
                if (document.querySelector(SpanID)) {
                  document.querySelector(SpanID).setAttribute('style', 'float:right');
                }
              } else {
                insterAfter(userSpan, Target);
                // Baidu图片特殊检查 F9y4ng 20210402
                if (document.querySelector(SpanID) && /^baiduimage$/.test(vim.trim())) {
                  document.querySelector(SpanID).setAttribute('style', 'margin-left:12px');
                }
                // Bing图片特殊检查 F9y4ng 20210403
                if (
                  document.querySelector('.b_searchboxForm') &&
                  /^images$/.test(vim.trim()) &&
                  location.href.replace(/view=detailV2/, '') !== location.href
                ) {
                  document.querySelector('.b_searchboxForm').setAttribute('style', 'width:640px');
                }
              }

              debug(`//-> Target: ${Target}`);

              document.querySelectorAll('#ggyx, #bbyx, #bdyx').forEach(per => {
                per.addEventListener('click', () => {
                  let gotoUrl = 'about:blank';
                  switch (per.id) {
                    case 'ggyx':
                      if (/^(baiduimage|images)$/.test(vim.trim())) {
                        gotoUrl = 'https://www.google.com/search?hl=zh-CN&source=lnms&tbm=isch&sa=X&q=';
                      } else {
                        gotoUrl = 'https://www.google.com/search?hl=zh-CN&source=hp&newwindow=1&q=';
                      }
                      break;
                    case 'bbyx':
                      if (/^(isch|baiduimage)$/.test(vim.trim())) {
                        gotoUrl = 'https://cn.bing.com/images/search?first=1&tsc=ImageBasicHover&q=';
                      } else {
                        gotoUrl = 'https://cn.bing.com/search?q=';
                      }
                      break;
                    case 'bdyx':
                      if (/^(images|isch)$/.test(vim.trim())) {
                        gotoUrl = 'https://image.baidu.com/search/index?tn=baiduimage&ps=1&ie=utf-8&word=';
                      } else {
                        gotoUrl = 'https://www.baidu.com/s?ie=utf-8&rqlang=cn&wd=';
                      }
                      break;
                    default:
                      break;
                  }
                  debug(`//-> ${per.id}`);
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
            debug(`//-> %c${e}`, 'color:darkred');
            return false;
          }
        }

        function scrollDetect() {
          try {
            const nodeName = `#for_${curretSite.SiteName}`;
            const vim = GetUrlParam(curretSite.SplitName);
            switch (curretSite.SiteTypeID) {
              case newSiteType.GOOGLE:
                scrollButton(`${nodeName} #bdyx`, 'scrollspan', 35);
                scrollButton(`${nodeName} #bdyx input`, 'scrollbars', 35);
                if (CONST.isUseBing) {
                  scrollButton(`${nodeName} #bbyx input`, 'scrollbars', 35);
                }
                break;
              case newSiteType.BING:
                if (/^(images|videos)$/.test(vim.trim())) {
                  scrollButton(`${nodeName}`, 'scrollspan', 50);
                  scrollButton(`${nodeName} #bdyx input`, 'scrollbars', 50);
                  scrollButton(`${nodeName} #ggyx input`, 'scrollbars', 50);
                }
                break;
              default:
                debug(`//-> No scrolling detecting.`);
                break;
            }
            return true;
          } catch (e) {
            debug(`//-> %c${e.name}`, 'color:darkred');
            return false;
          }
        }

        function scrollButton(paraName, classNameIn, scrollSize) {
          debug(`//-> ${curretSite.SiteName} Scrolling Detecting: ${paraName}`);
          const oDiv = document.querySelector(paraName);
          let H = 0;
          let Y = oDiv;
          if (Y !== null) {
            while (Y) {
              H += Y.offsetTop;
              Y = Y.offsetParent;
            }
            document.addEventListener('scroll', () => {
              const s = document.body.scrollTop || document.documentElement.scrollTop;
              debug(`//-> H=${H} S=${s} H-S=(${H - s})`);
              if (s > H + scrollSize) {
                oDiv.setAttribute('class', classNameIn);
              } else {
                oDiv.removeAttribute('class');
              }
            });
          }
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
              if (typeof addToTarget === 'undefined' || (typeof addToTarget !== 'undefined' && document.querySelector(addToTarget))) {
                if (isReload === true) {
                  safeRemove(`.${className}`);
                } else if (isReload === false && document.querySelector(`.${className}`)) {
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
                  debug(`//-> %c${e.name}`, 'color:darkred');
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
            debug(`//-> %c${e.name}`, 'color:darkred');
          }
        }

        function getSearchValue() {
          let val = '';
          document.querySelectorAll('input[name="wd"], input[name="q"], input[name="word"]').forEach((item, index, arr) => {
            val = arr[0].value;
            if (val) {
              debug(`//-> INPUT: ${val} - INDEX: ${index} - OLD: ${item.value}`);
            }
          });
          if (val === null || val === '' || typeof val === 'undefined') {
            const kvl = location.search.substr(1).split('&');
            for (let i = 0; i < kvl.length; i++) {
              let value = kvl[i].replace(/^(wd|word|kw|query|q)=/, '');
              if (value !== kvl[i]) {
                val = value;
              }
            }
            val = val.replace(/\+/g, ' ');
            if (val) {
              debug(`//-> QUERY: ${val}`);
            }
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
          if (targetElement !== null) {
            const parent = targetElement.parentNode;
            if (parent.lastChild === targetElement) {
              parent.appendChild(newElement);
            } else {
              parent.insertBefore(newElement, targetElement.nextSibling);
            }
          }
        }

        function GetUrlParam(paraName) {
          if (paraName === 'undefined') {
            const parameter = document.location.pathname.toString();
            const arr = parameter.split('/');
            return arr[1];
          } else {
            const url = document.location.toString();
            const arrObj = url.split('?');
            if (arrObj.length > 1) {
              const arrPara = arrObj[1].split('&');
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
        debug('//-> Loading menu...');
        menuManager.init();
        debug('//-> Insert button...');
        this.doSwitch();
      },
    };

    (function () {
      try {
        searchManager.init();
      } catch (e) {
        console.error('%c[GB-Error]%c\nConsole: %c%s%c.', 'font-weight:bold;color:red', 'color:0', 'font-weight:bold;color:darkred', e, 'color:0');
      }
    })();
  })();
})();
