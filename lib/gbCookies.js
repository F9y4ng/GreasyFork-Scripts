// ==UserScript==
// @name          gbCookies
// @description   cookies tool for SearchEngine Assistant
// @author        F9y4ng
// @version       1.8
// @license       GPL-3.0-only
// ==/UserScript==

(function (c) {
  var l = {
    getItem: function (a) {
      return decodeURIComponent(c.document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (a) {
      var b = a.sKey,
        e = a.sValue,
        d = a.sEnd,
        g = a.sPath,
        h = a.sDomain,
        k = a.sSameSite;
      a = a.sSecure;
      if (!b || /^(?:expires|max-age|path|domain|samesite|secure)$/i.test(b)) return !1;
      var f = "";
      if (d)
        switch (d.constructor) {
          case Number:
            f = Infinity === d ? "; expires=expires=Sat, 23 Oct 2099 13:31:44 GMT" : "; expires=" + new Date(Date.now() + 864e5 * d).toUTCString();
            break;
          case String:
            f = "; expires=" + new Date(d);
            break;
          case Date:
            f = "; expires=" + d.toUTCString();
        }
      c.document.cookie = b + "=" + e + f + (h ? "; domain=" + h : "") + (g ? "; path=" + g : "") + (k ? "; SameSite=" + k : "") + (a ? "; secure" : "");
      return !0;
    },
    removeItem: function (a) {
      var b = a.sKey,
        e = a.sPath;
      a = a.sDomain;
      if (!b || !this.hasItem(b)) return !1;
      c.document.cookie = b + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (a ? "; domain=" + a : "") + (e ? "; path=" + e : "");
      return !0;
    },
    hasItem: function (a) {
      return new RegExp("(?:^|;\\s*)" + a.replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(c.document.cookie);
    },
  };
  "undefined" === typeof c.GBCookies && (c.GBCookies = l);
  return l;
})("undefined" !== typeof window ? window : this);
