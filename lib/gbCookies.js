// ==UserScript==
// @name          gbCookies
// @description   cookies tool for SearchEngine Assistant
// @author        F9y4ng
// @version       1.7
// @license       GPL-3.0-only
// ==/UserScript==

(function () {
  return {
    getItem: function (a) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (a) {
      var b = a.sKey,
        d = a.sValue,
        c = a.sEnd,
        f = a.sPath,
        g = a.sDomain,
        h = a.sSameSite;
      a = a.sSecure;
      if (!b || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(b)) return !1;
      var e = "";
      if (c)
        switch (c.constructor) {
          case Number:
            e = Infinity === c ? "; expires=expires=Sat, 23 Oct 2099 13:31:44 GMT" : "; expires=" + new Date(Date.now() + 864e5 * c).toUTCString();
            break;
          case String:
            e = "; expires=" + new Date(c);
            break;
          case Date:
            e = "; expires=" + c.toUTCString();
        }
      document.cookie = b + "=" + d + e + (g ? "; domain=" + g : "") + (f ? "; path=" + f : "") + (h ? "; SameSite=" + h : "") + (a ? "; secure" : "");
      return !0;
    },
    removeItem: function (a) {
      var b = a.sKey,
        d = a.sPath;
      a = a.sDomain;
      if (!b || !this.hasItem(b)) return !1;
      document.cookie = b + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (d ? "; path=" + d : "");
      return !0;
    },
    hasItem: function (a) {
      return new RegExp("(?:^|;\\s*)" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
    },
  };
})("undefined" !== typeof window ? window : this);
