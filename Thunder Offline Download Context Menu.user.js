// ==UserScript==
// @name            Thunder Offline Download Context Menu
// @description     在Firefox页面中添加迅雷离线下载的链接，可通过URL链接直接通过右键离线下载，也可通过复制BT任务/eMule链接/磁力链通过右键离线下载。默认进入迅雷离线网页版。
// @version         1.0.1
// @author          F9y4ng
// @include         *
// @exclude         file:///*
// @exclude         /^http(s?)://lixian.vip.xunlei.com/.*/
// @license         MPL-2.0
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @namespace       https://greasyfork.org/users/17249
// ==/UserScript==

let SelectTxt = '';
let objReg = /^(magnet:\?xt=).*|^(ed2k:\/\/).*|(.*)\.torrent$/;

if (window.getSelection) {
  SelectTxt = window.getSelection();
} else {
  SelectTxt = document.selection.createRange().text;
}

let menu = document.body.appendChild(document.createElement('menu'));
menu.outerHTML = `<menu id="userscript-context-menu" type="context">
                     <menuitem label="" icon="https://dl.xunlei.com/favicon.ico">
                     </menuitem>
                  </menu>`;
let html = document.documentElement;
html.setAttribute('contextmenu', 'userscript-context-menu');

if ('contextMenu' in html && 'HTMLMenuItemElement' in window) {
  $('#userscript-context-menu menuitem').addEventListener('click', thunder, false);
  html.addEventListener('contextmenu', initMenu, false);
}

function initMenu(e) {
  let node = e.target;
  let title = document.title;

  let menu = $('#userscript-context-menu menuitem');
  if (objReg.test(SelectTxt)) {
    menu.label = '_使用迅雷离线下载复制的链接';
  } else {
    menu.label = '进入迅雷离线网页版';
  }
  let canonical = $("head link[rel='canonical']");
  let url = canonical ? canonical.href : location.href;

  if (node && node.hasAttribute('href')) {
    menu.label = '_使用迅雷离线下载链接';
    url = node.href;
    title = e.target.getAttribute('alt') || node.textContent;
  }
  menu.title = title;
  menu.setAttribute('url', url);
}

function thunder(e) {
  let url = encodeURIComponent(e.target.getAttribute('url'));
  let name = 'Thunder_offLine_Donwload';
  let feature = 'width=1024, height=760, toolbar=no, location';
  switch (e.target.label) {
    case '_使用迅雷离线下载链接':
      open('http://lixian.vip.xunlei.com/lixian_login.html?furl=' + url, name, feature);
      break;
    case '_使用迅雷离线下载复制的链接':
      if (SelectTxt !== '' && SelectTxt !== null) {
        open('http://lixian.vip.xunlei.com/lixian_login.html?furl=' + SelectTxt, name, feature);
      }
      break;
    default:
      open('http://lixian.vip.xunlei.com/', name, feature);
  }
}

function $(aSelector, aNode) {
  return (aNode || document).querySelector(aSelector);
}
