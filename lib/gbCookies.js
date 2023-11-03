// ==UserScript==
// @name          gbCookies
// @description   cookies tool for SearchEngine Assistant
// @author        F9y4ng
// @version       1.4
// @license       GPL-3.0-only
// ==/UserScript==

(function (global, factory) {
  global = global || self;
  global.gbCookies = factory();
})(this, function () {
  "use strict";
  const gbCookies = {
    getItem: function (sKey) {
      return (
        decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) ||
        null
      );
    },
    setItem: function ({ sKey, sValue, sEnd, sPath, sDomain, sSameSite, sSecure }) {
      if (!sKey || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(sKey)) return false;
      let sExpires = "";
      if (sEnd) {
        switch (sEnd.constructor) {
          case Number:
            sExpires = sEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + new Date(Number(new Date()) + sEnd).toUTCString();
            break;
          case String:
            sExpires = "; expires=" + new Date(sEnd);
            break;
          case Date:
            sExpires = "; expires=" + sEnd.toUTCString();
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
        (sSameSite ? "; SameSite=" + sSameSite : "") +
        (sSecure ? "; secure" : "");
      return true;
    },
    removeItem: function ({ sKey, sPath, sDomain }) {
      if (!sKey || !this.hasItem(sKey)) return false;
      document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
      return true;
    },
    hasItem: function (sKey) {
      return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
    },
  };
  return gbCookies;
});
