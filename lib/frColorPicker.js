// ==UserScript==
// @name        frColorPicker
// @version     7.0.0
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

(function (q, B) {
  "object" === typeof module && "object" === typeof module.exports
    ? (module.exports = function (y) {
        if (!y.document) throw Error("No Document!");
        return B(y);
      })
    : B(q);
})("undefined" !== typeof window ? window : this, function (q) {
  var B = (function () {
    var y = function (a) {
        var d = Math.random().toString(36).slice(2);
        return d.slice(0, a - 4).padEnd(a - 3, Math.random().toString(36).slice(2)) + "." + d.slice(-3);
      },
      E = y(9),
      F = y(8),
      G = y(12),
      H = y(8),
      I = y(7),
      C;
    a: {
      try {
        q.addEventListener("testPassive", null, { passive: !0 }), q.removeEventListener("testPassive", null, { passive: !0 });
      } catch (a) {
        y = !1;
        break a;
      }
      y = !0;
    }
    var b = {
      initialized: !1,
      instances: [],
      readyQueue: [],
      register: function () {
        "undefined" !== typeof q &&
          q.document &&
          ("loading" === q.document.readyState
            ? q.document.addEventListener("DOMContentLoaded", b.pub.init, !1)
            : q.document.documentElement
            ? b.pub.init()
            : q.addEventListener("load", b.pub.init, !1));
      },
      getInstances: function () {
        for (var a = [], d = 0; d < b.instances.length; d += 1) b.instances[d] && b.instances[d].targetElement && a.push(b.instances[d]);
        return a;
      },
      createEl: function (a) {
        a = q.document.createElement(a);
        b.setData(a, "gui", !0);
        return a;
      },
      node: function (a) {
        if (!a) return null;
        if ("string" === typeof a) {
          var d = null;
          try {
            d = q.document.querySelector(a) || C.querySelector(a);
          } catch (e) {
            return null;
          }
          return d;
        }
        return b.isNode(a) ? a : null;
      },
      isNode: function (a) {
        return "object" === typeof Node ? a instanceof Node : a && "object" === typeof a && "number" === typeof a.nodeType && "string" === typeof a.nodeName;
      },
      nodeName: function (a) {
        return a && a.nodeName ? a.nodeName.toLowerCase() : !1;
      },
      removeChildren: function (a) {
        for (; a.firstChild; ) a.removeChild(a.firstChild);
      },
      isTextInput: function (a) {
        return a && "input" === b.nodeName(a) && "text" === a.type.toLowerCase();
      },
      isButton: function (a) {
        if (!a) return !1;
        var d = b.nodeName(a);
        return "button" === d || ("input" === d && -1 < ["button", "submit", "reset"].indexOf(a.type.toLowerCase()));
      },
      isButtonEmpty: function (a) {
        switch (b.nodeName(a)) {
          case "input":
            return !a.value || "" === a.value.trim();
          case "button":
            return "" === a.textContent.trim();
        }
        return null;
      },
      isPassiveEventSupported: y,
      isColorAttrSupported: (function () {
        var a = q.document.createElement("input");
        return a.setAttribute && (a.setAttribute("type", "color"), a.type && "color" == a.type.toLowerCase()) ? !0 : !1;
      })(),
      dataProp: "_data_fr_colorpicker_",
      setData: function () {
        var a = arguments[0];
        if (3 === arguments.length) {
          a = a.hasOwnProperty(b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {});
          var d = arguments[1];
          a[d] = arguments[2];
          return !0;
        }
        if (2 === arguments.length && "object" === typeof arguments[1]) {
          a = a.hasOwnProperty(b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {});
          var e = arguments[1];
          for (d in e) e.hasOwnProperty(d) && (a[d] = e[d]);
          return !0;
        }
        throw Error("Invalid arguments");
      },
      removeData: function () {
        var a = arguments[0];
        if (!a.hasOwnProperty(b.dataProp)) return !0;
        for (var d = 1; d < arguments.length; d += 1) delete a[b.dataProp][arguments[d]];
        return !0;
      },
      getData: function (a, d, e) {
        if (!a.hasOwnProperty(b.dataProp))
          if ("undefined" !== typeof e) a[b.dataProp] = {};
          else return;
        a = a[b.dataProp];
        a.hasOwnProperty(d) || "undefined" === typeof e || (a[d] = e);
        return a[d];
      },
      getDataAttr: function (a, d) {
        return a.getAttribute("data-" + d);
      },
      setDataAttr: function (a, d, e) {
        a.setAttribute("data-" + d, e);
      },
      _attachedGroupEvents: {},
      attachGroupEvent: function (a, d, e, g) {
        b._attachedGroupEvents.hasOwnProperty(a) || (b._attachedGroupEvents[a] = []);
        b._attachedGroupEvents[a].push([d, e, g]);
        d.addEventListener(e, g, !1);
      },
      detachGroupEvents: function (a) {
        if (b._attachedGroupEvents.hasOwnProperty(a)) {
          for (var d = 0; d < b._attachedGroupEvents[a].length; d += 1) {
            var e = b._attachedGroupEvents[a][d];
            e[0].removeEventListener(e[1], e[2], !1);
          }
          delete b._attachedGroupEvents[a];
        }
      },
      preventDefault: function (a) {
        a.preventDefault && a.preventDefault();
        a.returnValue = !1;
      },
      triggerEvent: function (a, d, e, g) {
        if (a) {
          if ("function" === typeof Event) var l = new Event(d, { bubbles: e, cancelable: g });
          else (l = q.document.createEvent("Event")), l.initEvent(d, e, g);
          if (!l) return !1;
          b.setData(l, "internal", !0);
          a.dispatchEvent(l);
          return !0;
        }
      },
      triggerInputEvent: function (a, d, e, g) {
        a && b.isTextInput(a) && b.triggerEvent(a, d, e, g);
      },
      eventKey: function (a) {
        var d = { 9: "Tab", 13: "Enter", 27: "Escape" };
        return "string" === typeof a.code ? a.code : "undefined" !== typeof a.keyCode && d.hasOwnProperty(a.keyCode) ? d[a.keyCode] : null;
      },
      strList: function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
      },
      hasClass: function (a, d) {
        return d ? ("undefined" !== typeof a.classList ? a.classList.contains(d) : -1 != (" " + a.className.replace(/\s+/g, " ") + " ").indexOf(" " + d + " ")) : !1;
      },
      addClass: function (a, d) {
        d = b.strList(d);
        if ("undefined" !== typeof a.classList) for (var e = 0; e < d.length; e += 1) a.classList.add(d[e]);
        else for (e = 0; e < d.length; e += 1) b.hasClass(a, d[e]) || (a.className += (a.className ? " " : "") + d[e]);
      },
      removeClass: function (a, d) {
        d = b.strList(d);
        if ("undefined" !== typeof a.classList) for (var e = 0; e < d.length; e += 1) a.classList.remove(d[e]);
        else for (e = 0; e < d.length; e += 1) a.className = a.className.replace(new RegExp("^\\s*" + d[e] + "\\s*|\\s*" + d[e] + "\\s*$|\\s+" + d[e] + "(\\s+)", "g"), "$1");
      },
      getCompStyle: function (a) {
        return a instanceof ShadowRoot ? {} : (a = q.getComputedStyle ? q.getComputedStyle(a) : a.currentStyle) ? a : {};
      },
      setStyle: function (a, d, e, g) {
        e = e ? "important" : "";
        var l = null,
          k;
        for (k in d)
          if (d.hasOwnProperty(k)) {
            var n = null;
            null === d[k]
              ? (l || (l = b.getData(a, "origStyle")), l && l.hasOwnProperty(k) && (n = l[k]))
              : (g && (l || (l = b.getData(a, "origStyle", {})), l.hasOwnProperty(k) || (l[k] = a.style[k])), (n = d[k]));
            null !== n && a.style.setProperty(k, n, e);
          }
      },
      hexColor: function (a, d, e) {
        return "#" + (("0" + Math.round(a).toString(16)).slice(-2) + ("0" + Math.round(d).toString(16)).slice(-2) + ("0" + Math.round(e).toString(16)).slice(-2)).toUpperCase();
      },
      hexaColor: function (a, d, e, g) {
        return (
          "#" +
          (
            ("0" + Math.round(a).toString(16)).slice(-2) +
            ("0" + Math.round(d).toString(16)).slice(-2) +
            ("0" + Math.round(e).toString(16)).slice(-2) +
            ("0" + Math.round(255 * g).toString(16)).slice(-2)
          ).toUpperCase()
        );
      },
      rgbColor: function (a, d, e) {
        return "rgb(" + Math.round(a) + "," + Math.round(d) + "," + Math.round(e) + ")";
      },
      rgbaColor: function (a, d, e, g) {
        return "rgba(" + Math.round(a) + "," + Math.round(d) + "," + Math.round(e) + "," + Math.round(100 * ("undefined" === typeof g || null === g ? 1 : g)) / 100 + ")";
      },
      setBorderRadius: function (a, d) {
        b.setStyle(a, { "border-radius": d || "0" });
      },
      getElementPos: function (a, d) {
        var e = q.frDOMRects;
        "undefined" === typeof e && (e = { toggle: !1, cur: 1, prev: 1 });
        e = e.toggle ? e.cur : 1;
        var g = a.getBoundingClientRect();
        a = g.left * e;
        g = g.top * e;
        d || ((d = b.getViewPos()), (a += d[0] * e), (g += d[1] * e));
        return [a, g];
      },
      getElementSize: function (a) {
        return [a.offsetWidth, a.offsetHeight];
      },
      getAbsPointerPos: function (a) {
        var d = q.frDOMRects;
        "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
        var e = 0,
          g = 0;
        "undefined" !== typeof a.changedTouches && a.changedTouches.length
          ? ((e = a.changedTouches[0].x * d.cur), (g = a.changedTouches[0].y * d.cur))
          : "number" === typeof a.x && ((e = a.x * d.cur), (g = a.y * d.cur));
        return { x: e, y: g };
      },
      getRelPointerPos: function (a) {
        var d = q.frDOMRects;
        "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
        var e = (a.target || a.srcElement).getBoundingClientRect(),
          g = d.toggle ? d.cur : 1,
          l = 0,
          k = 0;
        "undefined" !== typeof a.changedTouches && a.changedTouches.length
          ? ((l = a.changedTouches[0].x * d.cur), (k = a.changedTouches[0].y * d.cur))
          : "number" === typeof a.x && ((l = a.x * d.cur), (k = a.y * d.cur));
        return { x: l - e.left * g, y: k - e.top * g };
      },
      getViewPos: function () {
        var a = q.document.documentElement;
        return [(q.pageXOffset || a.scrollLeft) - (a.clientLeft || 0), (q.pageYOffset || a.scrollTop) - (a.clientTop || 0)];
      },
      getViewSize: function () {
        var a = q.document.documentElement;
        return [q.innerWidth || a.clientWidth, q.innerHeight || a.clientHeight];
      },
      RGB_HSV: function (a, d, e) {
        a /= 255;
        d /= 255;
        e /= 255;
        var g = Math.min(Math.min(a, d), e),
          l = Math.max(Math.max(a, d), e),
          k = l - g;
        if (0 === k) return [null, 0, 100 * l];
        a = a === g ? 3 + (e - d) / k : d === g ? 5 + (a - e) / k : 1 + (d - a) / k;
        return [60 * (6 === a ? 0 : a), (k / l) * 100, 100 * l];
      },
      HSV_RGB: function (a, d, e) {
        e = (e / 100) * 255;
        if (null === a) return [e, e, e];
        a /= 60;
        d /= 100;
        var g = Math.floor(a),
          l = e * (1 - d);
        a = e * (1 - d * (g % 2 ? a - g : 1 - (a - g)));
        switch (g) {
          case 6:
          case 0:
            return [e, a, l];
          case 1:
            return [a, e, l];
          case 2:
            return [l, e, a];
          case 3:
            return [l, a, e];
          case 4:
            return [a, l, e];
          case 5:
            return [e, l, a];
        }
      },
      parseColorString: function (a) {
        var d = { rgba: null, format: null },
          e;
        if ((e = a.match(/^\W*([0-9A-F]{3,8})\W*$|^currentcolor$/i))) {
          if ("currentcolor" === e[0].toLowerCase()) return (d.format = "hexa"), (d.rgba = [255, 255, 255, 255]), d;
          if (8 === e[1].length)
            (d.format = "hexa"), (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), parseInt(e[1].slice(6, 8), 16) / 255]);
          else if (6 === e[1].length) (d.format = "hex"), (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), 1]);
          else if (3 === e[1].length)
            (d.format = "hex"), (d.rgba = [parseInt(e[1].charAt(0) + e[1].charAt(0), 16), parseInt(e[1].charAt(1) + e[1].charAt(1), 16), parseInt(e[1].charAt(2) + e[1].charAt(2), 16), 1]);
          else return !1;
          return d;
        }
        if ((e = a.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
          a = e[1].split(",");
          e = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
          var g, l, k, n;
          if (3 <= a.length && (g = a[0].match(e)) && (l = a[1].match(e)) && (k = a[2].match(e)))
            return (
              (d.format = "rgb"),
              (d.rgba = [parseFloat(g[1]) || 0, parseFloat(l[1]) || 0, parseFloat(k[1]) || 0, 1]),
              4 <= a.length && (n = a[3].match(e)) && ((d.format = "rgba"), (d.rgba[3] = parseFloat(n[1]) || 0)),
              d
            );
        }
        return !1;
      },
      isAlphaFormat: function (a) {
        switch (a.toLowerCase()) {
          case "hexa":
          case "rgba":
            return !0;
        }
        return !1;
      },
      scaleCanvasForHighDPR: function (a) {
        var d = q.devicePixelRatio || 1;
        a.width *= d;
        a.height *= d;
        a.getContext("2d").scale(d, d);
      },
      genColorPreviewCanvas: function (a, d, e, g) {
        var l = Math.round(b.pub.previewSeparator.length),
          k = b.pub.chessboardSize,
          n = b.pub.chessboardColor1,
          r = b.pub.chessboardColor2;
        e = e ? e : 2 * k;
        var t = 2 * k,
          u = b.createEl("canvas"),
          x = u.getContext("2d");
        u.width = e;
        u.height = t;
        g && b.scaleCanvasForHighDPR(u);
        x.fillStyle = n;
        x.fillRect(0, 0, e, t);
        x.fillStyle = r;
        for (g = 0; g < e; g += 2 * k) x.fillRect(g, 0, k, k), x.fillRect(g + k, k, k, k);
        a && ((x.fillStyle = a), x.fillRect(0, 0, e, t));
        a = null;
        switch (d) {
          case "left":
            a = 0;
            x.clearRect(0, 0, l / 2, t);
            break;
          case "right":
            (a = e - l), x.clearRect(e - l / 2, 0, l / 2, t);
        }
        if (null !== a)
          for (x.lineWidth = 1, d = 0; d < b.pub.previewSeparator.length; d += 1)
            x.beginPath(), (x.strokeStyle = b.pub.previewSeparator[d]), x.moveTo(0.5 + a + d, 0), x.lineTo(0.5 + a + d, t), x.stroke();
        return { canvas: u, width: e, height: t };
      },
      redrawPosition: function () {
        if (b.picker && b.picker.owner) {
          var a = b.picker.owner;
          if (a.fixed) {
            var d = b.getElementPos(a.targetElement, !0);
            var e = [0, 0];
          } else (d = b.getElementPos(a.targetElement)), (e = b.getViewPos());
          var g = b.getElementSize(a.targetElement),
            l = b.getViewSize(),
            k = b.getPickerDims(a),
            n = [k.borderW, k.borderH];
          switch (a.position.toLowerCase()) {
            case "left":
              k = 1;
              var r = 0;
              var t = -1;
              break;
            case "right":
              k = 1;
              r = 0;
              t = 1;
              break;
            case "top":
              k = 0;
              r = 1;
              t = -1;
              break;
            default:
              (k = 0), (t = r = 1);
          }
          var u = (g[r] + n[r]) / 2;
          d = a.smartPosition
            ? [
                -e[k] + d[k] + n[k] > l[k] ? (-e[k] + d[k] + g[k] / 2 > l[k] / 2 && 0 <= d[k] + g[k] - n[k] ? d[k] + g[k] - n[k] : d[k]) : d[k],
                -e[r] + d[r] + g[r] + n[r] - u + u * t > l[r]
                  ? -e[r] + d[r] + g[r] / 2 > l[r] / 2 && 0 <= d[r] + g[r] - u - u * t
                    ? d[r] + g[r] - u - u * t - 4
                    : d[r] + g[r] - u + u * t + 4
                  : 0 <= d[r] + g[r] - u + u * t
                  ? d[r] + g[r] - u + u * t - 4
                  : d[r] + g[r] - u - u * t + 4,
              ]
            : [d[k], d[r] + g[r] - u + u * t - 4];
          b._drawPosition(d[k], d[r], a.fixed ? "fixed" : "absolute");
        }
      },
      _drawPosition: function (a, d, e) {
        b.picker.wrap.style.left = a + "px";
        b.picker.wrap.style.top = d + "px";
        b.picker.wrap.style.position = e;
      },
      getPickerDims: function (a) {
        var d = 2 * a.controlBorderWidth + a.width,
          e = 2 * a.controlBorderWidth + a.height,
          g = 2 * a.controlBorderWidth + 2 * b.getControlPadding(a) + a.sliderSize;
        b.getSliderChannel(a) && (d += g);
        a.hasAlphaChannel() && (d += g);
        a.closeButton && (e += 2 * a.controlBorderWidth + a.padding + a.buttonHeight);
        g = d + 2 * a.padding;
        var l = e + 2 * a.padding;
        return {
          contentW: d,
          contentH: e,
          paddedW: g,
          paddedH: l,
          borderW: g + 2 * a.borderWidth,
          borderH: l + 2 * a.borderWidth,
        };
      },
      getControlPadding: function (a) {
        return Math.max(a.padding / 2, 2 * a.pointerBorderWidth + a.pointerThickness - a.controlBorderWidth);
      },
      getPadYChannel: function (a) {
        switch (a.mode.charAt(1).toLowerCase()) {
          case "v":
            return "v";
        }
        return "s";
      },
      getSliderChannel: function (a) {
        if (2 < a.mode.length)
          switch (a.mode.charAt(2).toLowerCase()) {
            case "s":
              return "s";
            case "v":
              return "v";
          }
        return null;
      },
      triggerCallback: function (a, d) {
        if (a[d]) {
          var e = null;
          if ("string" === typeof a[d])
            try {
              e = new Function(a[d]);
            } catch (g) {
              console.error(g);
            }
          else e = a[d];
          e && e.call(a);
        }
      },
      triggerGlobal: function (a) {
        for (var d = b.getInstances(), e = 0; e < d.length; e += 1) d[e].trigger(a);
      },
      _pointerMoveEvent: { mouse: "mousemove", touch: "touchmove" },
      _pointerEndEvent: { mouse: "mouseup", touch: "touchend" },
      _pointerOrigin: null,
      onWindowResize: function (a) {
        b.redrawPosition();
      },
      onWindowScroll: function (a) {
        b.redrawPosition();
      },
      onConfigIfMouseDown: function (a) {
        a = a.composedPath()[0] || a.target || a.srcElement;
        a.frcp && a.frcp instanceof b.pub
          ? a.frcp.showOnClick && !a.disabled && (b.picker && b.picker.owner ? b.picker.owner.tryHide() : a.frcp.show())
          : b.picker && b.picker.owner && b.picker.owner.tryHide();
      },
      onDocumentMouseDown: function (a) {
        if (!a.target || !a.target.nodeName || "fr-configure" !== a.target.nodeName.toLowerCase()) {
          var d = a.target || a.srcElement;
          if (b.getData(d, "gui")) {
            if (b.getData(d, "control")) b.onControlPointerStart(a, d, b.getData(d, "control"), "mouse");
          } else b.picker && b.picker.owner && b.picker.owner.tryHide();
        }
      },
      onPickerTouchStart: function (a) {
        var d = a.target || a.srcElement;
        if (b.getData(d, "control")) b.onControlPointerStart(a, d, b.getData(d, "control"), "touch");
      },
      onControlPointerStart: function (a, d, e, g) {
        var l = b.getData(d, "instance");
        b.preventDefault(a);
        var k = function (t, u) {
          b.attachGroupEvent("drag", t, b._pointerMoveEvent[g], b.onDocumentPointerMove(a, d, e, g, u));
          b.attachGroupEvent("drag", t, b._pointerEndEvent[g], b.onDocumentPointerEnd(a, d, e, g));
        };
        k(q.document, [0, 0]);
        if (q.parent && q.frameElement) {
          var n = q.frDOMRects;
          "undefined" === typeof n && (n = { toggle: !1, cur: 1, prev: 1 });
          n = n.toggle ? n.cur : 1;
          var r = q.frameElement.getBoundingClientRect();
          k(q.parent.window.document, [-r.left * n, -r.top * n]);
        }
        k = b.getAbsPointerPos(a);
        n = b.getRelPointerPos(a);
        b._pointerOrigin = { x: k.x - n.x, y: k.y - n.y };
        switch (e) {
          case "pad":
            "v" === b.getSliderChannel(l) && 0 === l.channels.v && l.fromHSVA(null, null, 100, null);
            b.setPad(l, a, 0, 0);
            break;
          case "sld":
            b.setSld(l, a, 0);
            break;
          case "asld":
            b.setASld(l, a, 0);
        }
        l.trigger("input");
      },
      onDocumentPointerMove: function (a, d, e, g, l) {
        return function (k) {
          var n = b.getData(d, "instance");
          switch (e) {
            case "pad":
              b.setPad(n, k, l[0], l[1]);
              break;
            case "sld":
              b.setSld(n, k, l[1]);
              break;
            case "asld":
              b.setASld(n, k, l[1]);
          }
          n.trigger("input");
        };
      },
      onDocumentPointerEnd: function (a, d, e, g) {
        return function (l) {
          l = b.getData(d, "instance");
          b.detachGroupEvents("drag");
          l.trigger("input");
          l.trigger("change");
        };
      },
      setPad: function (a, d, e, g) {
        d = b.getAbsPointerPos(d);
        e = (360 / (a.width - 1)) * (e + d.x - b._pointerOrigin.x - a.padding - a.controlBorderWidth);
        g = 100 - (100 / (a.height - 1)) * (g + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
        switch (b.getPadYChannel(a)) {
          case "s":
            a.fromHSVA(e, g, null, null);
            break;
          case "v":
            a.fromHSVA(e, null, g, null);
        }
      },
      setSld: function (a, d, e) {
        d = b.getAbsPointerPos(d);
        e = 100 - (100 / (a.height - 1)) * (e + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
        switch (b.getSliderChannel(a)) {
          case "s":
            a.fromHSVA(null, e, null, null);
            break;
          case "v":
            a.fromHSVA(null, null, e, null);
        }
      },
      setASld: function (a, d, e) {
        d = b.getAbsPointerPos(d);
        e = 1 - (1 / (a.height - 1)) * (e + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
        1 > e && ((d = a.getFormat()), "any" !== a.format.toLowerCase() || b.isAlphaFormat(d) || a._setFormat("hex" === d ? "hexa" : "rgba"));
        a.fromHSVA(null, null, null, e);
      },
      createPadCanvas: function () {
        var a = { elm: null, draw: null },
          d = b.createEl("canvas"),
          e = d.getContext("2d");
        a.elm = d;
        a.draw = function (g, l, k) {
          d.width = g;
          d.height = l;
          e.clearRect(0, 0, d.width, d.height);
          g = e.createLinearGradient(0, 0, d.width, 0);
          g.addColorStop(0, "#F00");
          g.addColorStop(1 / 6, "#FF0");
          g.addColorStop(2 / 6, "#0F0");
          g.addColorStop(0.5, "#0FF");
          g.addColorStop(4 / 6, "#00F");
          g.addColorStop(5 / 6, "#F0F");
          g.addColorStop(1, "#F00");
          e.fillStyle = g;
          e.fillRect(0, 0, d.width, d.height);
          g = e.createLinearGradient(0, 0, 0, d.height);
          switch (k.toLowerCase()) {
            case "s":
              g.addColorStop(0, "rgba(255,255,255,0)");
              g.addColorStop(1, "rgba(255,255,255,1)");
              break;
            case "v":
              g.addColorStop(0, "rgba(0,0,0,0)"), g.addColorStop(1, "rgba(0,0,0,1)");
          }
          e.fillStyle = g;
          e.fillRect(0, 0, d.width, d.height);
        };
        return a;
      },
      createSliderGradient: function () {
        var a = { elm: null, draw: null },
          d = b.createEl("canvas"),
          e = d.getContext("2d");
        a.elm = d;
        a.draw = function (g, l, k, n) {
          d.width = g;
          d.height = l;
          e.clearRect(0, 0, d.width, d.height);
          g = e.createLinearGradient(0, 0, 0, d.height);
          g.addColorStop(0, k);
          g.addColorStop(1, n);
          e.fillStyle = g;
          e.fillRect(0, 0, d.width, d.height);
        };
        return a;
      },
      createASliderGradient: function () {
        var a = { elm: null, draw: null },
          d = b.createEl("canvas"),
          e = d.getContext("2d");
        a.elm = d;
        a.draw = function (g, l, k) {
          d.width = g;
          d.height = l;
          e.clearRect(0, 0, d.width, d.height);
          g = d.width / 2;
          l = b.pub.chessboardColor2;
          e.fillStyle = b.pub.chessboardColor1;
          e.fillRect(0, 0, d.width, d.height);
          if (0 < g) for (var n = 0; n < d.height; n += 2 * g) (e.fillStyle = l), e.fillRect(0, n, g, g), e.fillRect(g, n + g, g, g);
          g = e.createLinearGradient(0, 0, 0, d.height);
          g.addColorStop(0, k);
          g.addColorStop(1, "rgba(0,0,0,0)");
          e.fillStyle = g;
          e.fillRect(0, 0, d.width, d.height);
        };
        return a;
      },
      flags: { leaveValue: 1, leaveAlpha: 2, leavePreview: 4 },
      enumOpts: {
        format: "auto any hex hexa rgb rgba".split(" "),
        previewPosition: ["left", "right"],
        mode: ["hsv", "hvs", "hs", "hv"],
        position: ["left", "right", "top", "bottom"],
        alphaChannel: ["auto", !0, !1],
      },
      deprecatedOpts: {
        styleElement: "previewElement",
        onFineChange: "onInput",
        overwriteImportant: "forceStyle",
        closable: "closeButton",
        insetWidth: "controlBorderWidth",
        insetColor: "controlBorderColor",
        refine: null,
      },
      pub: function (a, d, e) {
        function g(c, h) {
          if ("string" !== typeof c) throw Error("Invalid value for option name: " + c);
          if (b.enumOpts.hasOwnProperty(c) && ("string" === typeof h && (h = h.toLowerCase()), -1 === b.enumOpts[c].indexOf(h))) throw Error("Option '" + c + "' has invalid value: " + h);
          if (b.deprecatedOpts.hasOwnProperty(c)) {
            var m = b.deprecatedOpts[c];
            if (m) c = m;
            else throw Error("Option '" + c + "' is DEPRECATED");
          }
          m = "set__" + c;
          if ("function" === typeof f[m]) return f[m](h), !0;
          if (c in f) return (f[c] = h), !0;
          throw Error("Unrecognized configuration option: " + c);
        }
        function l() {
          f._processParentElementsInDOM();
          b.picker ||
            ((b.picker = {
              owner: null,
              wrap: b.createEl("fr-colorpicker"),
              box: b.createEl("div"),
              boxB: b.createEl("div"),
              pad: b.createEl("div"),
              padB: b.createEl("div"),
              padM: b.createEl("div"),
              padCanvas: b.createPadCanvas(),
              cross: b.createEl("div"),
              crossBY: b.createEl("div"),
              crossBX: b.createEl("div"),
              crossLY: b.createEl("div"),
              crossLX: b.createEl("div"),
              sld: b.createEl("div"),
              sldB: b.createEl("div"),
              sldM: b.createEl("div"),
              sldGrad: b.createSliderGradient(),
              sldPtrS: b.createEl("div"),
              sldPtrIB: b.createEl("div"),
              sldPtrMB: b.createEl("div"),
              sldPtrOB: b.createEl("div"),
              asld: b.createEl("div"),
              asldB: b.createEl("div"),
              asldM: b.createEl("div"),
              asldGrad: b.createASliderGradient(),
              asldPtrS: b.createEl("div"),
              asldPtrIB: b.createEl("div"),
              asldPtrMB: b.createEl("div"),
              asldPtrOB: b.createEl("div"),
            }),
            b.picker.pad.appendChild(b.picker.padCanvas.elm),
            b.picker.padB.appendChild(b.picker.pad),
            b.picker.cross.appendChild(b.picker.crossBY),
            b.picker.cross.appendChild(b.picker.crossBX),
            b.picker.cross.appendChild(b.picker.crossLY),
            b.picker.cross.appendChild(b.picker.crossLX),
            b.picker.padB.appendChild(b.picker.cross),
            b.picker.box.appendChild(b.picker.padB),
            b.picker.box.appendChild(b.picker.padM),
            b.picker.sld.appendChild(b.picker.sldGrad.elm),
            b.picker.sldB.appendChild(b.picker.sld),
            b.picker.sldB.appendChild(b.picker.sldPtrOB),
            b.picker.sldPtrOB.appendChild(b.picker.sldPtrMB),
            b.picker.sldPtrMB.appendChild(b.picker.sldPtrIB),
            b.picker.sldPtrIB.appendChild(b.picker.sldPtrS),
            b.picker.box.appendChild(b.picker.sldB),
            b.picker.box.appendChild(b.picker.sldM),
            b.picker.asld.appendChild(b.picker.asldGrad.elm),
            b.picker.asldB.appendChild(b.picker.asld),
            b.picker.asldB.appendChild(b.picker.asldPtrOB),
            b.picker.asldPtrOB.appendChild(b.picker.asldPtrMB),
            b.picker.asldPtrMB.appendChild(b.picker.asldPtrIB),
            b.picker.asldPtrIB.appendChild(b.picker.asldPtrS),
            b.picker.box.appendChild(b.picker.asldB),
            b.picker.box.appendChild(b.picker.asldM),
            b.picker.boxB.appendChild(b.picker.box),
            b.picker.wrap.appendChild(b.picker.boxB),
            b.picker.wrap.addEventListener("touchstart", b.onPickerTouchStart, b.isPassiveEventSupported ? { passive: !1 } : !1));
          var c = b.picker,
            h = !!b.getSliderChannel(f),
            m = f.hasAlphaChannel(),
            p = b.getPickerDims(f),
            v = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
            w = b.getControlPadding(f),
            A = Math.min(f.borderRadius, Math.round(f.padding * Math.PI));
          c.wrap.className = G;
          c.wrap.style.clear = "both";
          c.wrap.style.display = "block";
          c.wrap.style.visibility = "visible";
          c.wrap.style.opacity = "1";
          c.wrap.style.width = p.borderW + "px";
          c.wrap.style.height = p.borderH + "px";
          c.wrap.style.zIndex = f.zIndex;
          c.box.className = H;
          c.box.style.width = p.paddedW + "px";
          c.box.style.height = p.paddedH + "px";
          c.box.style.position = "relative";
          c.boxB.className = I;
          c.boxB.style.position = "relative";
          c.boxB.style.setProperty("border", f.borderWidth + "px solid " + f.borderColor, "important");
          c.boxB.style.setProperty("background", f.backgroundColor, "important");
          b.setBorderRadius(c.boxB, A + "px");
          c.padM.style.background = "rgba(255,0,0,.2)";
          c.sldM.style.background = "rgba(0,255,0,.2)";
          c.asldM.style.background = "rgba(0,0,255,.2)";
          c.padM.style.opacity = c.sldM.style.opacity = c.asldM.style.opacity = "0";
          c.pad.style.position = "relative";
          c.pad.style.width = f.width + "px";
          c.pad.style.height = f.height + "px";
          c.padCanvas.draw(f.width, f.height, b.getPadYChannel(f));
          c.padB.style.position = "absolute";
          c.padB.style.left = f.padding + "px";
          c.padB.style.top = f.padding + "px";
          c.padB.style.border = f.controlBorderWidth + "px solid";
          c.padB.style.setProperty("border-color", f.controlBorderColor, "important");
          c.padM.style.position = "absolute";
          c.padM.style.left = "0px";
          c.padM.style.top = "0px";
          c.padM.style.width = f.padding + 2 * f.controlBorderWidth + f.width + w + "px";
          c.padM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.padM.style.cursor = "crosshair";
          b.setData(c.padM, { instance: f, control: "pad" });
          c.cross.style.position = "absolute";
          c.cross.style.left = c.cross.style.top = "0";
          c.cross.style.width = c.cross.style.height = v + "px";
          c.crossBY.style.position = c.crossBX.style.position = "absolute";
          c.crossBY.style.setProperty("background", f.pointerBorderColor, "important");
          c.crossBX.style.setProperty("background", f.pointerBorderColor, "important");
          c.crossBY.style.width = c.crossBX.style.height = 2 * f.pointerBorderWidth + f.pointerThickness + "px";
          c.crossBY.style.height = c.crossBX.style.width = v + "px";
          c.crossBY.style.left = c.crossBX.style.top = Math.floor(v / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth + "px";
          c.crossBY.style.top = c.crossBX.style.left = "0";
          c.crossLY.style.position = c.crossLX.style.position = "absolute";
          c.crossLY.style.setProperty("background", f.pointerColor, "important");
          c.crossLX.style.setProperty("background", f.pointerColor, "important");
          c.crossLY.style.height = c.crossLX.style.width = v - 2 * f.pointerBorderWidth + "px";
          c.crossLY.style.width = c.crossLX.style.height = f.pointerThickness + "px";
          c.crossLY.style.left = c.crossLX.style.top = Math.floor(v / 2) - Math.floor(f.pointerThickness / 2) + "px";
          c.crossLY.style.top = c.crossLX.style.left = f.pointerBorderWidth + "px";
          c.sld.style.overflow = "hidden";
          c.sld.style.width = f.sliderSize + "px";
          c.sld.style.height = f.height + "px";
          c.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
          c.sldB.style.display = h ? "block" : "none";
          c.sldB.style.position = "absolute";
          c.sldB.style.left = f.padding + f.width + 2 * f.controlBorderWidth + 2 * w + "px";
          c.sldB.style.top = f.padding + "px";
          c.sldB.style.setProperty("border", f.controlBorderWidth + "px solid " + f.controlBorderColor, "important");
          c.sldM.style.display = h ? "block" : "none";
          c.sldM.style.position = "absolute";
          c.sldM.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + "px";
          c.sldM.style.top = "0px";
          c.sldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + (m ? 0 : Math.max(0, f.padding - w)) + "px";
          c.sldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.sldM.style.cursor = "default";
          b.setData(c.sldM, { instance: f, control: "sld" });
          c.sldPtrIB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
          c.sldPtrOB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
          c.sldPtrOB.style.position = "absolute";
          c.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
          c.sldPtrOB.style.top = "0";
          c.sldPtrMB.style.setProperty("border", f.pointerThickness + "px solid " + f.pointerColor, "important");
          c.sldPtrS.style.width = f.sliderSize + "px";
          c.sldPtrS.style.height = b.pub.sliderInnerSpace + "px";
          c.asld.style.overflow = "hidden";
          c.asld.style.width = f.sliderSize + "px";
          c.asld.style.height = f.height + "px";
          c.asldGrad.draw(f.sliderSize, f.height, "#000");
          c.asldB.style.display = m ? "block" : "none";
          c.asldB.style.position = "absolute";
          c.asldB.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (h ? f.sliderSize + 3 * w + 2 * f.controlBorderWidth : 0) + "px";
          c.asldB.style.top = f.padding + "px";
          c.asldB.style.border = f.controlBorderWidth + "px solid";
          c.asldB.style.setProperty("border-color", f.controlBorderColor, "important");
          c.asldM.style.display = m ? "block" : "none";
          c.asldM.style.position = "absolute";
          c.asldM.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (h ? f.sliderSize + 2 * w + 2 * f.controlBorderWidth : 0) + "px";
          c.asldM.style.top = "0px";
          c.asldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + Math.max(0, f.padding - w) + "px";
          c.asldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.asldM.style.cursor = "default";
          b.setData(c.asldM, { instance: f, control: "asld" });
          c.asldPtrIB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
          c.asldPtrOB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
          c.asldPtrOB.style.position = "absolute";
          c.asldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
          c.asldPtrOB.style.top = "0";
          c.asldPtrMB.style.setProperty("border", f.pointerThickness + "px solid " + f.pointerColor, "important");
          c.asldPtrS.style.width = f.sliderSize + "px";
          c.asldPtrS.style.height = b.pub.sliderInnerSpace + "px";
          k();
          n();
          r();
          b.picker.owner && b.picker.owner !== f && b.removeClass(b.picker.owner.targetElement, b.pub.activeClassName);
          b.picker.owner = f;
          f.container === q.document.documentElement ? b.redrawPosition() : b._drawPosition(f, 0, 0, "relative", !1);
          c.wrap.parentNode !== f.container &&
            (h = b.node("dialog[id^='fr-dialog-']")) &&
            (h.appendChild(c.wrap), h.hasAttribute("open") && h.close && h.close(), (h.inert = !0), h.showModal && h.showModal(), h.removeAttribute("inert"), h.focus());
          b.addClass(f.targetElement, b.pub.activeClassName);
        }
        function k() {
          var c = b.getPadYChannel(f);
          c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
          var h = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
          b.picker.cross.style.left = Math.round((f.channels.h / 360) * (f.width - 1)) + h + "px";
          b.picker.cross.style.top = c + h + "px";
          switch (b.getSliderChannel(f)) {
            case "s":
              h = b.HSV_RGB(f.channels.h, 100, f.channels.v);
              c = b.HSV_RGB(f.channels.h, 0, f.channels.v);
              h = "rgb(" + Math.round(h[0]) + "," + Math.round(h[1]) + "," + Math.round(h[2]) + ")";
              b.picker.sldGrad.draw(f.sliderSize, f.height, h, "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")");
              break;
            case "v":
              (c = b.HSV_RGB(f.channels.h, f.channels.s, 100)),
                (h = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")"),
                b.picker.sldGrad.draw(f.sliderSize, f.height, h, "#000");
          }
          b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function n() {
          var c = b.getSliderChannel(f);
          c &&
            (b.picker.sldPtrOB.style.top =
              Math.round((1 - f.channels[c] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2) + "px");
          b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function r() {
          b.picker.asldPtrOB.style.top = Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2) + "px";
        }
        function t() {
          return b.picker && b.picker.owner === f;
        }
        function u(c) {
          "Enter" === b.eventKey(c) && (f.valueElement && f.processValueInput(f.valueElement.value), f.tryHide());
        }
        function x(c) {
          b.getData(c, "internal") ||
            ((c = f.valueElement.value),
            f.processValueInput(f.valueElement.value),
            b.triggerCallback(f, "onChange"),
            f.valueElement.value !== c && b.triggerInputEvent(f.valueElement, "change", !0, !0));
        }
        function J(c) {
          b.getData(c, "internal") || (f.valueElement && f.fromString(f.valueElement.value, b.flags.leaveValue), b.triggerCallback(f, "onInput"));
        }
        C = d;
        C.addEventListener("click", b.onConfigIfMouseDown, !1);
        var f = this;
        e || (e = {});
        this.channels = { r: 255, g: 255, b: 255, h: 0, s: 0, v: 100, a: 1 };
        this.format = "auto";
        this.alpha = this.value = void 0;
        this.random = !1;
        this.previewElement = this.alphaElement = this.valueElement = this.onInput = this.onChange = void 0;
        this.previewPosition = "left";
        this.previewSize = 35;
        this.previewPadding = 8;
        this.forceStyle = this.uppercase = this.hash = this.required = !0;
        this.width = 186;
        this.height = 210;
        this.mode = "HSV";
        this.alphaChannel = "auto";
        this.position = "top";
        this.hideOnLeave = this.showOnClick = this.smartPosition = !0;
        this.sliderSize = 12;
        this.crossSize = 8;
        this.closeButton = !1;
        this.closeText = "Close";
        this.buttonColor = "rgba(0,0,0,1)";
        this.buttonHeight = 18;
        this.padding = 8;
        this.backgroundColor = "rgba(206,226,237,0.91)";
        this.borderWidth = 1;
        this.borderColor = "rgba(187,187,187,1)";
        this.borderRadius = 4;
        this.controlBorderWidth = 1;
        this.controlBorderColor = "rgba(187,187,187,0.7)";
        this.pointerColor = "rgba(76,76,76,1)";
        this.pointerBorderWidth = 1;
        this.pointerBorderColor = "rgba(255,255,255,0.6)";
        this.pointerThickness = 2;
        this.zIndex = 2147483646;
        this.container = void 0;
        this.minS = 0;
        this.maxS = 100;
        this.minV = 0;
        this.maxV = 100;
        this.minA = 0;
        this.maxA = 1;
        this.option = function () {
          if (!arguments.length) throw Error("No option specified");
          if (1 === arguments.length && "string" === typeof arguments[0]) {
            try {
              var c = arguments[0];
              if ("string" !== typeof c) throw Error("Invalid value for option name: " + c);
              if (b.deprecatedOpts.hasOwnProperty(c)) {
                var h = b.deprecatedOpts[c];
                if (h) c = h;
                else throw Error("Option '" + c + "' is DEPRECATED");
              }
              var m = "get__" + c;
              if ("function" === typeof f[m]) var p = f[m](value);
              else if (c in f) p = f[c];
              else throw Error("Unrecognized configuration option: " + c);
              return p;
            } catch (v) {
              console.error(v);
            }
            return !1;
          }
          if (2 <= arguments.length && "string" === typeof arguments[0]) {
            try {
              if (!g(arguments[0], arguments[1])) return !1;
            } catch (v) {
              return !1;
            }
            this.redraw();
            this.exposeColor();
            return !0;
          }
          if (1 === arguments.length && "object" === typeof arguments[0]) {
            p = arguments[0];
            c = !0;
            for (m in p)
              if (p.hasOwnProperty(m))
                try {
                  g(m, p[m]) || (c = !1);
                } catch (v) {
                  console.error(v), (c = !1);
                }
            this.redraw();
            this.exposeColor();
            return c;
          }
          throw Error("Invalid arguments");
        };
        this.channel = function (c, h) {
          if ("string" !== typeof c) throw Error("Invalid value for channel name: " + c);
          if ("undefined" === typeof h) return this.channels.hasOwnProperty(c.toLowerCase()) ? this.channels[c.toLowerCase()] : !1;
          switch (c.toLowerCase()) {
            case "r":
              c = this.fromRGBA(h, null, null, null);
              break;
            case "g":
              c = this.fromRGBA(null, h, null, null);
              break;
            case "b":
              c = this.fromRGBA(null, null, h, null);
              break;
            case "h":
              c = this.fromHSVA(h, null, null, null);
              break;
            case "s":
              c = this.fromHSVA(null, h, null, null);
              break;
            case "v":
              c = this.fromHSVA(null, null, h, null);
              break;
            case "a":
              c = this.fromHSVA(null, null, null, h);
              break;
            default:
              return !1;
          }
          return c ? (this.redraw(), !0) : !1;
        };
        this.trigger = function (c) {
          c = b.strList(c);
          for (var h = 0; h < c.length; h += 1) {
            var m = c[h].toLowerCase(),
              p = null;
            switch (m) {
              case "input":
                p = "onInput";
                break;
              case "change":
                p = "onChange";
            }
            p && b.triggerCallback(this, p);
            b.triggerInputEvent(this.valueElement, m, !0, !0);
          }
        };
        this.fromHSVA = function (c, h, m, p, v) {
          "undefined" === typeof c && (c = null);
          "undefined" === typeof h && (h = null);
          "undefined" === typeof m && (m = null);
          "undefined" === typeof p && (p = null);
          if (null !== c) {
            if (isNaN(c)) return !1;
            this.channels.h = Math.max(0, Math.min(360, c));
          }
          if (null !== h) {
            if (isNaN(h)) return !1;
            this.channels.s = Math.max(0, Math.min(100, this.maxS, h), this.minS);
          }
          if (null !== m) {
            if (isNaN(m)) return !1;
            this.channels.v = Math.max(0, Math.min(100, this.maxV, m), this.minV);
          }
          if (null !== p) {
            if (isNaN(p)) return !1;
            this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, p), this.minA) : 1;
          }
          c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = c[0];
          this.channels.g = c[1];
          this.channels.b = c[2];
          this.exposeColor(v);
          return !0;
        };
        this.fromRGBA = function (c, h, m, p, v) {
          "undefined" === typeof c && (c = null);
          "undefined" === typeof h && (h = null);
          "undefined" === typeof m && (m = null);
          "undefined" === typeof p && (p = null);
          if (null !== c) {
            if (isNaN(c)) return !1;
            c = Math.max(0, Math.min(255, c));
          }
          if (null !== h) {
            if (isNaN(h)) return !1;
            h = Math.max(0, Math.min(255, h));
          }
          if (null !== m) {
            if (isNaN(m)) return !1;
            m = Math.max(0, Math.min(255, m));
          }
          if (null !== p) {
            if (isNaN(p)) return !1;
            this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, p), this.minA) : 1;
          }
          c = b.RGB_HSV(null === c ? this.channels.r : c, null === h ? this.channels.g : h, null === m ? this.channels.b : m);
          null !== c[0] && (this.channels.h = Math.max(0, Math.min(360, c[0])));
          0 !== c[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, c[1])));
          this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, c[2]));
          c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = c[0];
          this.channels.g = c[1];
          this.channels.b = c[2];
          this.exposeColor(v);
          return !0;
        };
        this.fromHSV = function (c, h, m, p) {
          return this.fromHSVA(c, h, m, null, p);
        };
        this.fromRGB = function (c, h, m, p) {
          return this.fromRGBA(c, h, m, null, p);
        };
        this.fromString = function (c, h) {
          if (!this.required && "" === c.trim()) return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
          c = b.parseColorString(c);
          if (!c) return !1;
          "any" === this.format.toLowerCase() && (this._setFormat(c.format), b.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
          this.fromRGBA(c.rgba[0], c.rgba[1], c.rgba[2], c.rgba[3], h);
          return !0;
        };
        this.randomize = function (c, h, m, p, v, w, A, D) {
          "undefined" === typeof c && (c = 0);
          "undefined" === typeof h && (h = 100);
          "undefined" === typeof m && (m = 0);
          "undefined" === typeof p && (p = 100);
          "undefined" === typeof v && (v = 0);
          "undefined" === typeof w && (w = 359);
          "undefined" === typeof A && (A = 1);
          "undefined" === typeof D && (D = 1);
          this.fromHSVA(
            v + Math.floor(Math.random() * (w - v + 1)),
            m + Math.floor(Math.random() * (p - m + 1)),
            c + Math.floor(Math.random() * (h - c + 1)),
            (100 * A + Math.floor(Math.random() * (100 * (D - A) + 1))) / 100
          );
        };
        this.toString = function (c) {
          "undefined" === typeof c && (c = this.getFormat());
          switch (c.toLowerCase()) {
            case "hex":
              return this.toHEXString();
            case "hexa":
              return this.toHEXAString();
            case "rgb":
              return this.toRGBString();
            case "rgba":
              return this.toRGBAString();
          }
          return !1;
        };
        this.toHEXString = function () {
          return b.hexColor(this.channels.r, this.channels.g, this.channels.b);
        };
        this.toHEXAString = function () {
          return b.hexaColor(this.channels.r, this.channels.g, this.channels.b, this.channels.a);
        };
        this.toRGBString = function () {
          return b.rgbColor(this.channels.r, this.channels.g, this.channels.b);
        };
        this.toRGBAString = function () {
          return b.rgbaColor(this.channels.r, this.channels.g, this.channels.b, this.channels.a);
        };
        this.toGrayscale = function () {
          return 0.213 * this.channels.r + 0.715 * this.channels.g + 0.072 * this.channels.b;
        };
        this.toCanvas = function () {
          return b.genColorPreviewCanvas(this.toRGBAString()).canvas;
        };
        this.isLight = function () {
          return 127.5 < this.toGrayscale();
        };
        this.hide = function () {
          t() &&
            (b.removeClass(f.targetElement, b.pub.activeClassName), b.picker.wrap && b.picker.wrap.parentNode && b.picker.wrap.parentNode.removeChild(b.picker.wrap), delete b.picker.owner);
        };
        this.show = function () {
          l();
        };
        this.redraw = function () {
          t() && l();
        };
        this.getFormat = function () {
          return this._currentFormat;
        };
        this._setFormat = function (c) {
          this._currentFormat = c.toLowerCase();
        };
        this.hasAlphaChannel = function () {
          return "auto" === this.alphaChannel
            ? "any" === this.format.toLowerCase() || b.isAlphaFormat(this.getFormat()) || "undefined" !== typeof this.alpha || "undefined" !== typeof this.alphaElement
            : this.alphaChannel;
        };
        this.processValueInput = function (c) {
          this.fromString(c) || this.exposeColor();
        };
        this.processAlphaInput = function (c) {
          this.fromHSVA(null, null, null, parseFloat(c)) || this.exposeColor();
        };
        this.exposeColor = function (c) {
          var h = this.toString(),
            m = this.getFormat();
          b.setDataAttr(this.targetElement, "current-color", h);
          if (!(c & b.flags.leaveValue) && this.valueElement) {
            if ("hex" === m || "hexa" === m) this.uppercase || (h = h.toLowerCase()), this.hash || (h = h.replace(/^#/, ""));
            this.setValueElementValue(h);
          }
          c & b.flags.leaveAlpha || !this.alphaElement || this.setAlphaElementValue(Math.round(100 * this.channels.a) / 100);
          c & b.flags.leavePreview || !this.previewElement || this.setPreviewElementBg(this.toRGBAString());
          t() && (k(), n(), r());
        };
        this.setPreviewElementBg = function (c) {
          if (this.previewElement) {
            var h = null,
              m = null;
            if (b.isTextInput(this.previewElement) || (b.isButton(this.previewElement) && !b.isButtonEmpty(this.previewElement))) (h = this.previewPosition), (m = this.previewSize);
            var p = [];
            p.push({ size: "auto" });
            if (c) {
              var v = b.genColorPreviewCanvas("rgba(0,0,0,0)", h ? { left: "right", right: "left" }[h] : null, m, !0);
              p.push({ size: v.width + "px " + v.height + "px" });
            }
            v = [];
            for (var w = 0; w < p.length; w += 1) v.push(p[w].size);
            c = {
              "--fr-input-color": c,
              "--fr-input-color-edge": m + "px",
              "--fr-input-color-edge2": m + 1 + "px",
              "--fr-input-gb-size": v.join(", "),
            };
            b.setStyle(this.previewElement, c, !this.forceStyle);
            c = { left: null, right: null };
            h && (c[h] = this.previewSize + this.previewPadding + "px");
            c = { "--fr-input-padding-left": c.left };
            b.setStyle(this.previewElement, c, !this.forceStyle, !0);
          }
        };
        this.setValueElementValue = function (c) {
          this.valueElement && ("input" === b.nodeName(this.valueElement) ? (this.valueElement.value = c) : (this.valueElement.textContent = c));
        };
        this._processParentElementsInDOM = function () {
          if (!this._parentElementsProcessed) {
            this._parentElementsProcessed = !0;
            var c = this.targetElement;
            do {
              var h = b.getCompStyle(c);
              c instanceof ShadowRoot && (this.fixed = !0);
              h.position && "fixed" === h.position.toLowerCase() && (this.fixed = !0);
            } while ((c = c.parentNode) && "body" !== b.nodeName(c));
          }
        };
        this.tryHide = function () {
          this.hideOnLeave && this.hide();
        };
        if (b.pub.options)
          for (var z in b.pub.options)
            if (b.pub.options.hasOwnProperty(z))
              try {
                g(z, b.pub.options[z]);
              } catch (c) {
                console.error(c);
              }
        for (z in e)
          if (e.hasOwnProperty(z) && -1 === ["preset"].indexOf(z))
            try {
              g(z, e[z]);
            } catch (c) {
              console.error(c);
            }
        this.container = "undefined" === typeof this.container ? q.document.documentElement : b.node(this.container);
        if (!this.container) throw Error("No container element");
        this.targetElement = b.node(a);
        if (!this.targetElement) throw Error("No target element");
        if (this.targetElement.frcp && this.targetElement.frcp instanceof b.pub) throw Error("Redundant Fr-Color-picker");
        this.targetElement.frcp = this;
        b.addClass(this.targetElement, b.pub.className);
        b.instances.push(this);
        b.isButton(this.targetElement) &&
          ("button" !== this.targetElement.type.toLowerCase() && (this.targetElement.type = "button"),
          b.isButtonEmpty(this.targetElement) &&
            (b.removeChildren(this.targetElement),
            this.targetElement.appendChild(q.document.createTextNode("\u00a0")),
            (a = b.getCompStyle(this.targetElement)),
            (parseFloat(a["min-width"]) || 0) < this.previewSize && b.setStyle(this.targetElement, { "min-width": this.previewSize + "px" }, this.forceStyle)));
        "undefined" === typeof this.valueElement
          ? b.isTextInput(this.targetElement) && (this.valueElement = this.targetElement)
          : null !== this.valueElement && (this.valueElement = b.node(this.valueElement));
        "undefined" === typeof this.previewElement ? (this.previewElement = this.targetElement) : null !== this.previewElement && (this.previewElement = b.node(this.previewElement));
        this.valueElement &&
          b.isTextInput(this.valueElement) &&
          ((a = this.valueElement.oninput),
          (this.valueElement.oninput = null),
          this.valueElement.addEventListener("keydown", u, !1),
          this.valueElement.addEventListener("change", x, !1),
          this.valueElement.addEventListener("input", J, !1),
          a && this.valueElement.addEventListener("input", a, !1),
          this.valueElement.setAttribute("autocomplete", "off"),
          this.valueElement.setAttribute("autocorrect", "off"),
          this.valueElement.setAttribute("autocapitalize", "off"),
          this.valueElement.setAttribute("spellcheck", !1));
        a = "FFFFFF";
        "undefined" !== typeof this.value ? (a = this.value) : this.valueElement && "undefined" !== typeof this.valueElement.value && (a = this.valueElement.value);
        d = void 0;
        "undefined" !== typeof this.alpha && (d = "" + this.alpha);
        this._currentFormat = null;
        -1 < ["auto", "any"].indexOf(this.format.toLowerCase()) ? (this._currentFormat = (e = b.parseColorString(a)) ? e.format : "hex") : (this._currentFormat = this.format.toLowerCase());
        this.processValueInput(a);
        "undefined" !== typeof d && this.processAlphaInput(d);
        this.random && this.randomize.apply(this, Array.isArray(this.random) ? this.random : []);
      },
    };
    b.pub.className = E;
    b.pub.activeClassName = F;
    b.pub.looseJSON = !0;
    b.pub.presets = {};
    b.pub.presets["default"] = {};
    b.pub.sliderInnerSpace = 3;
    b.pub.chessboardSize = 8;
    b.pub.chessboardColor1 = "#666666";
    b.pub.chessboardColor2 = "#999999";
    b.pub.previewSeparator = [];
    b.pub.init = function () {
      if (!b.initialized)
        for (
          q.document.addEventListener("mousedown", b.onDocumentMouseDown, !1),
            q.addEventListener("resize", b.onWindowResize, !1),
            q.addEventListener("scroll", b.onWindowScroll, !1),
            b.initialized = !0;
          b.readyQueue.length;

        )
          b.readyQueue.shift()();
    };
    b.pub.ready = function (a) {
      if ("function" !== typeof a) return !1;
      b.initialized ? a() : b.readyQueue.push(a);
      return !0;
    };
    b.pub.trigger = function (a) {
      var d = function () {
        b.triggerGlobal(a);
      };
      b.initialized ? d() : b.pub.ready(d);
    };
    b.pub.hide = function () {
      b.picker && b.picker.owner && b.picker.owner.hide();
    };
    b.pub.options = {};
    b.pub.lookupClass = E;
    b.pub.installByClassName = function () {
      return !1;
    };
    b.register();
    return b.pub;
  })();
  "undefined" === typeof q.FRColorPicker && (q.FRColorPicker = B);
  return B;
});
