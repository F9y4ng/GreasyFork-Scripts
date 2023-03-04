// ==UserScript==
// @name        gbCookies
// @author      F9y4ng
// @version     1.2
// @license     GPL-3.0-only
// ==/UserScript==

const gbCookies = {
  getItem: function (sKey) {
    return (
      decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) ||
      null
    );
  },

  setItem: function (sKey, sValue, vEnd, sPath, sDomain, sSameSite, bSecure) {
    if (!sKey || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(sKey)) return false;
    let sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      "=" +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? "; domain=" + sDomain : "") +
      (sPath ? "; path=" + sPath : "") +
      (sSameSite && sSameSite.tolowerCase() !== "none" ? "; SameSite=" + sSameSite : "; SameSite=None") +
      (bSecure || !sSameSite || sSameSite.tolowerCase() === "none" ? "; secure" : "");
    return true;
  },

  removeItem: function (sKey, sPath, sDomain) {
    if (!sKey || !this.hasItem(sKey)) return false;
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },

  hasItem: function (sKey) {
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  },
};
