// ==UserScript==
// @name          gbCookies
// @description   cookies tool for SearchEngine Assistant
// @author        F9y4ng
// @version       1.9.1
// @license       GPL-3.0-only
// ==/UserScript==

(function (c) {
  class d {
    getItem(a) {
      a = new RegExp("(?:(?:^|.*;)\\s*" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$");
      return decodeURIComponent(c.document.cookie.replace(a, "$1")) || null;
    }
    setItem(a) {
      var b = a.sKey,
        f = a.sValue,
        e = a.sEnd,
        h = a.sPath,
        k = a.sDomain,
        l = a.sSameSite;
      a = a.sSecure;
      if (!b || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(b)) return !1;
      var g = "";
      if (e)
        switch (e.constructor) {
          case Number:
            g = Infinity === e ? "; expires=Sat, 23 Oct 2099 13:31:44 GMT" : "; expires=" + new Date(Date.now() + 864e5 * e).toUTCString();
            break;
          case String:
            g = "; expires=" + new Date(e).toUTCString();
            break;
          case Date:
            g = "; expires=" + e.toUTCString();
        }
      c.document.cookie = b + "=" + f + g + (k ? "; domain=" + k : "") + (h ? "; path=" + h : "") + (l ? "; SameSite=" + l : "") + (a ? "; secure" : "");
      return !0;
    }
    removeItem(a) {
      var b = a.sKey,
        f = a.sPath;
      a = a.sDomain;
      if (!b || !this.hasItem(b)) return !1;
      c.document.cookie = b + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (f ? "; path=" + f : "");
      return !0;
    }
    hasItem(a) {
      return new RegExp("(?:^|;\\s*)" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(c.document.cookie);
    }
  }
  "undefined" === typeof c.GBCookies && (c.GBCookies = d);
  return d;
})("undefined" !== typeof window ? window : this);
//# sourceMappingURL=gbCookies.js.map
