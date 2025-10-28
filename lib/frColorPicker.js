// ==UserScript==
// @name        frColorPicker
// @version     7.4.1
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

(function (n, E) {
  E(n, {
    hOP: Object.prototype.hasOwnProperty,
    aS: Element.prototype.attachShadow,
    uAS: function (z, v, x) {
      try {
        if (
          !z.adoptedStyleSheets ||
          "function" !== typeof z.adoptedStyleSheets.push
        )
          throw Error("use inlineStyle");
        var A = new CSSStyleSheet();
        (A.id = x) && A.replaceSync(v);
        !Array.from(z.adoptedStyleSheets).some(function (B) {
          return B.id === x;
        }) && z.adoptedStyleSheets.push(A);
      } catch (B) {
        try {
          if (!z.querySelectorAll("style#" + x)) {
            var C = document.createElement("style");
            C.id = x;
            C.media = "all";
            C.textContent = v;
            z.prepend(C);
          }
        } catch (D) {
          B && console.error(D.name + "in UAS:", D.message, B.message);
        }
      }
    },
  });
})("undefined" !== typeof window ? window : this, function (n, E) {
  var z = (function () {
    var v = E.hOP,
      x = function (a) {
        var d = Math.random().toString(36).slice(2);
        return (
          d.slice(0, a - 4).padEnd(a - 3, Math.random().toString(36).slice(2)) +
          "." +
          d.slice(-3)
        );
      },
      A = null,
      C = x(9),
      B = x(8),
      D = x(12),
      I = x(8),
      J = x(7);
    a: {
      try {
        n.addEventListener("testPassive", null, { passive: !0 }),
          n.removeEventListener("testPassive", null, { passive: !0 });
      } catch (a) {
        x = !1;
        break a;
      }
      x = !0;
    }
    var b = {
      initialized: !1,
      instances: [],
      readyQueue: [],
      register: function () {
        "undefined" !== typeof n &&
          n.document &&
          ("loading" === n.document.readyState
            ? n.document.addEventListener("DOMContentLoaded", b.pub.init, !1)
            : "complete" === n.document.readyState
              ? b.pub.init()
              : n.addEventListener("load", b.pub.init, !1));
      },
      getInstances: function () {
        for (var a = [], d = 0; d < b.instances.length; d += 1)
          b.instances[d] &&
            b.instances[d].targetElement &&
            a.push(b.instances[d]);
        return a;
      },
      createEl: function (a) {
        a = n.document.createElement(a);
        b.setData(a, "gui", !0);
        return a;
      },
      node: function (a) {
        if (!a) return null;
        if ("string" === typeof a) {
          var d = null;
          try {
            d = n.document.querySelector(a) || A.querySelector(a);
          } catch (e) {
            return null;
          }
          return d;
        }
        return b.isNode(a) ? a : null;
      },
      isNode: function (a) {
        return "object" === typeof Node
          ? a instanceof Node
          : a &&
              "object" === typeof a &&
              "number" === typeof a.nodeType &&
              "string" === typeof a.nodeName;
      },
      nodeName: function (a) {
        return a && a.nodeName ? a.nodeName.toLowerCase() : !1;
      },
      isTextInput: function (a) {
        return (
          a && "input" === b.nodeName(a) && "text" === a.type.toLowerCase()
        );
      },
      isPassiveEventSupported: x,
      dataProp: "_data_fr_colorpicker_",
      setData: function () {
        var a = arguments[0];
        if (3 === arguments.length)
          return (
            ((v.call(a, b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {}))[
              arguments[1]
            ] = arguments[2]),
            !0
          );
        if (2 === arguments.length && "object" === typeof arguments[1]) {
          a = v.call(a, b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {});
          var d = arguments[1],
            e;
          for (e in d) v.call(d, e) && (a[e] = d[e]);
          return !0;
        }
        throw Error("Invalid arguments");
      },
      getData: function (a, d, e) {
        if (!v.call(a, b.dataProp))
          if ("undefined" !== typeof e) a[b.dataProp] = {};
          else return;
        a = a[b.dataProp];
        v.call(a, d) || "undefined" === typeof e || (a[d] = e);
        return a[d];
      },
      setDataAttr: function (a, d, e) {
        a.setAttribute("data-" + d, e);
      },
      _attachedGroupEvents: {},
      attachGroupEvent: function (a, d, e, g) {
        v.call(b._attachedGroupEvents, a) || (b._attachedGroupEvents[a] = []);
        b._attachedGroupEvents[a].push([d, e, g]);
        d.addEventListener(e, g, !1);
      },
      detachGroupEvents: function (a) {
        if (v.call(b._attachedGroupEvents, a)) {
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
          if ("function" === typeof Event)
            var k = new Event(d, { bubbles: e, cancelable: g });
          else (k = n.document.createEvent("Event")), k.initEvent(d, e, g);
          if (!k) return !1;
          b.setData(k, "internal", !0);
          a.dispatchEvent(k);
          return !0;
        }
      },
      triggerInputEvent: function (a, d, e, g) {
        a && b.isTextInput(a) && b.triggerEvent(a, d, e, g);
      },
      strList: function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
      },
      hasClass: function (a, d) {
        return d
          ? "undefined" !== typeof a.classList
            ? a.classList.contains(d)
            : -1 !==
              (" " + a.className.replace(/\s+/g, " ") + " ").indexOf(
                " " + d + " ",
              )
          : !1;
      },
      addClass: function (a, d) {
        d = b.strList(d);
        if ("undefined" !== typeof a.classList)
          for (var e = 0; e < d.length; e += 1) a.classList.add(d[e]);
        else
          for (e = 0; e < d.length; e += 1)
            b.hasClass(a, d[e]) ||
              (a.className += (a.className ? " " : "") + d[e]);
      },
      removeClass: function (a, d) {
        d = b.strList(d);
        if ("undefined" !== typeof a.classList)
          for (var e = 0; e < d.length; e += 1) a.classList.remove(d[e]);
        else
          for (e = 0; e < d.length; e += 1)
            a.className = a.className.replace(
              new RegExp(
                "^\\s*" +
                  d[e] +
                  "\\s*|\\s*" +
                  d[e] +
                  "\\s*$|\\s+" +
                  d[e] +
                  "(\\s+)",
                "g",
              ),
              "$1",
            );
      },
      getCompStyle: function (a) {
        return a instanceof ShadowRoot
          ? {}
          : (a = n.getComputedStyle ? n.getComputedStyle(a) : a.currentStyle)
            ? a
            : {};
      },
      setStyle: function (a, d, e, g) {
        e = e ? "important" : "";
        var k = null,
          l;
        for (l in d)
          if (v.call(d, l)) {
            var p = null;
            null === d[l]
              ? (k || (k = b.getData(a, "origStyle")),
                k && v.call(k, l) && (p = k[l]))
              : (g &&
                  (k || (k = b.getData(a, "origStyle", {})),
                  v.call(k, l) || (k[l] = a.style[l])),
                (p = d[l]));
            null !== p && a.style.setProperty(l, p, e);
          }
      },
      hexColor: function (a, d, e) {
        return (
          "#" +
          (
            ("0" + Math.round(a).toString(16)).slice(-2) +
            ("0" + Math.round(d).toString(16)).slice(-2) +
            ("0" + Math.round(e).toString(16)).slice(-2)
          ).toUpperCase()
        );
      },
      hexaColor: function (a, d, e, g) {
        a =
          "#" +
          ("0" + Math.round(a).toString(16)).slice(-2) +
          ("0" + Math.round(d).toString(16)).slice(-2);
        a +=
          ("0" + Math.round(e).toString(16)).slice(-2) +
          ("0" + Math.round(255 * g).toString(16)).slice(-2);
        return a.toUpperCase();
      },
      rgbColor: function (a, d, e) {
        return (
          "rgb(" +
          Math.round(a) +
          "," +
          Math.round(d) +
          "," +
          Math.round(e) +
          ")"
        );
      },
      rgbaColor: function (a, d, e, g) {
        return (
          "rgba(" +
          Math.round(a) +
          "," +
          Math.round(d) +
          "," +
          Math.round(e) +
          "," +
          Math.round(100 * ("undefined" === typeof g || null === g ? 1 : g)) /
            100 +
          ")"
        );
      },
      setBorderRadius: function (a, d) {
        b.setStyle(a, { "border-radius": d || "0" });
      },
      getElementPos: function (a, d) {
        var e = n.frDOMRects;
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
        var d = n.frDOMRects;
        "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
        var e = 0,
          g = 0;
        "undefined" !== typeof a.changedTouches && a.changedTouches.length
          ? ((e = a.changedTouches[0].x * d.cur),
            (g = a.changedTouches[0].y * d.cur))
          : "number" === typeof a.x && ((e = a.x * d.cur), (g = a.y * d.cur));
        return { x: e, y: g };
      },
      getRelPointerPos: function (a) {
        var d = n.frDOMRects;
        "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
        var e = (a.target || a.srcElement).getBoundingClientRect(),
          g = d.toggle ? d.cur : 1,
          k = 0,
          l = 0;
        "undefined" !== typeof a.changedTouches && a.changedTouches.length
          ? ((k = a.changedTouches[0].x * d.cur),
            (l = a.changedTouches[0].y * d.cur))
          : "number" === typeof a.x && ((k = a.x * d.cur), (l = a.y * d.cur));
        return { x: k - e.left * g, y: l - e.top * g };
      },
      getViewPos: function () {
        var a = n.document.documentElement;
        return [
          (n.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
          (n.pageYOffset || a.scrollTop) - (a.clientTop || 0),
        ];
      },
      getViewSize: function () {
        var a = n.document.documentElement;
        return [n.innerWidth || a.clientWidth, n.innerHeight || a.clientHeight];
      },
      RGB_HSV: function (a, d, e) {
        a /= 255;
        d /= 255;
        e /= 255;
        var g = Math.min(Math.min(a, d), e),
          k = Math.max(Math.max(a, d), e),
          l = k - g;
        if (0 === l) return [null, 0, 100 * k];
        a =
          a === g
            ? 3 + (e - d) / l
            : d === g
              ? 5 + (a - e) / l
              : 1 + (d - a) / l;
        return [60 * (6 === a ? 0 : a), (l / k) * 100, 100 * k];
      },
      HSV_RGB: function (a, d, e) {
        e = (e / 100) * 255;
        if (null === a) return [e, e, e];
        a /= 60;
        d /= 100;
        var g = Math.floor(a),
          k = e * (1 - d);
        a = e * (1 - d * (g % 2 ? a - g : 1 - (a - g)));
        switch (g) {
          case 6:
          case 0:
            return [e, a, k];
          case 1:
            return [a, e, k];
          case 2:
            return [k, e, a];
          case 3:
            return [k, a, e];
          case 4:
            return [a, k, e];
          case 5:
            return [e, k, a];
        }
      },
      parseColorString: function (a) {
        var d,
          e = { rgba: null, format: null };
        if (/^currentcolor$/i.test(a))
          return { format: "hexa", rgba: [255, 255, 255, 1] };
        if ((d = a.match(/^\W*([0-9A-F]{3,8})\W*$/i))) {
          switch (d[1].length) {
            case 8:
              e.format = "hexa";
              e.rgba = [
                parseInt(d[1].slice(0, 2), 16),
                parseInt(d[1].slice(2, 4), 16),
                parseInt(d[1].slice(4, 6), 16),
                parseInt(d[1].slice(6, 8), 16) / 255,
              ];
              break;
            case 4:
              e.format = "hexa";
              e.rgba = [
                parseInt(d[1].charAt(0) + d[1].charAt(0), 16),
                parseInt(d[1].charAt(1) + d[1].charAt(1), 16),
                parseInt(d[1].charAt(2) + d[1].charAt(2), 16),
                parseInt(d[1].charAt(3) + d[1].charAt(3), 16) / 255,
              ];
              break;
            case 6:
              e.format = "hex";
              e.rgba = [
                parseInt(d[1].slice(0, 2), 16),
                parseInt(d[1].slice(2, 4), 16),
                parseInt(d[1].slice(4, 6), 16),
                1,
              ];
              break;
            case 3:
              e.format = "hex";
              e.rgba = [
                parseInt(d[1].charAt(0) + d[1].charAt(0), 16),
                parseInt(d[1].charAt(1) + d[1].charAt(1), 16),
                parseInt(d[1].charAt(2) + d[1].charAt(2), 16),
                1,
              ];
              break;
            default:
              return !1;
          }
          return e;
        }
        if ((d = a.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
          a = d[1].split(",");
          d = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
          var g, k, l, p;
          if (
            3 <= a.length &&
            (g = a[0].match(d)) &&
            (k = a[1].match(d)) &&
            (l = a[2].match(d))
          )
            return (
              (e.format = "rgb"),
              (e.rgba = [
                parseFloat(g[1]) || 0,
                parseFloat(k[1]) || 0,
                parseFloat(l[1]) || 0,
                1,
              ]),
              4 <= a.length &&
                (p = a[3].match(d)) &&
                ((e.format = "rgba"), (e.rgba[3] = parseFloat(p[1]) || 0)),
              e
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
        var d = n.devicePixelRatio || 1;
        a.width *= d;
        a.height *= d;
        a.getContext("2d").scale(d, d);
      },
      genColorPreviewCanvas: function (a, d, e, g) {
        var k = b.pub.chessboardSize,
          l = b.pub.chessboardColor1,
          p = b.pub.chessboardColor2;
        e = e ? e : 2 * k;
        var m = 2 * k,
          u = b.createEl("canvas"),
          t = u.getContext("2d");
        u.width = e;
        u.height = m;
        g && b.scaleCanvasForHighDPR(u);
        t.fillStyle = l;
        t.fillRect(0, 0, e, m);
        t.fillStyle = p;
        for (g = 0; g < e; g += 2 * k)
          t.fillRect(g, 0, k, k), t.fillRect(g + k, k, k, k);
        a && ((t.fillStyle = a), t.fillRect(0, 0, e, m));
        switch (d) {
          case "left":
            t.clearRect(0, 0, 0, m);
            break;
          case "right":
            t.clearRect(e - 0, 0, 0, m);
        }
        return { canvas: u, width: e, height: m };
      },
      redrawPosition: function () {
        if (b.picker && b.picker.owner) {
          var a = b.picker.owner;
          if (a.fixed) {
            var d = b.getElementPos(a.targetElement, !0);
            var e = [0, 0];
          } else (d = b.getElementPos(a.targetElement)), (e = b.getViewPos());
          var g = b.getElementSize(a.targetElement),
            k = b.getViewSize(),
            l = b.getPickerDims(a),
            p = [l.borderW, l.borderH];
          switch (a.position.toLowerCase()) {
            case "left":
              l = 1;
              var m = 0;
              var u = -1;
              break;
            case "right":
              l = 1;
              m = 0;
              u = 1;
              break;
            case "top":
              l = 0;
              m = 1;
              u = -1;
              break;
            default:
              (l = 0), (u = m = 1);
          }
          var t = (g[m] + p[m]) / 2;
          d = a.smartPosition
            ? [
                -e[l] + d[l] + p[l] > k[l]
                  ? -e[l] + d[l] + g[l] / 2 > k[l] / 2 &&
                    0 <= d[l] + g[l] - p[l]
                    ? d[l] + g[l] - p[l]
                    : d[l]
                  : d[l],
                -e[m] + d[m] + g[m] + p[m] - t + t * u > k[m]
                  ? -e[m] + d[m] + g[m] / 2 > k[m] / 2 &&
                    0 <= d[m] + g[m] - t - t * u
                    ? d[m] + g[m] - t - t * u - 4
                    : d[m] + g[m] - t + t * u + 4
                  : 0 <= d[m] + g[m] - t + t * u
                    ? d[m] + g[m] - t + t * u - 4
                    : d[m] + g[m] - t - t * u + 4,
              ]
            : [d[l], d[m] + g[m] - t + t * u - 4];
          b._drawPosition(d[l], d[m], a.fixed ? "fixed" : "absolute");
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
          g =
            2 * a.controlBorderWidth +
            2 * b.getControlPadding(a) +
            a.sliderSize;
        b.getSliderChannel(a) && (d += g);
        a.hasAlphaChannel() && (d += g);
        g = d + 2 * a.padding;
        var k = e + 2 * a.padding;
        return {
          contentW: d,
          contentH: e,
          paddedW: g,
          paddedH: k,
          borderW: g + 2 * a.borderWidth,
          borderH: k + 2 * a.borderWidth,
        };
      },
      getControlPadding: function (a) {
        return Math.max(
          a.padding / 2,
          2 * a.pointerBorderWidth + a.pointerThickness - a.controlBorderWidth,
        );
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
        for (var d = b.getInstances(), e = 0; e < d.length; e += 1)
          d[e].trigger(a);
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
        a =
          a.composedPath().find(function (d) {
            return (
              "INPUT" === d.nodeName && d.hasAttribute("data-current-color")
            );
          }) ||
          a.target ||
          a.srcElement;
        a.frcp && a.frcp instanceof b.pub
          ? a.frcp.showOnClick &&
            !a.disabled &&
            (b.picker && b.picker.owner
              ? (b.picker.owner.tryHide(),
                n.document.removeEventListener(
                  "mousedown",
                  b.onDocumentMouseDown,
                  !1,
                ))
              : (a.frcp.show(),
                n.document.addEventListener(
                  "mousedown",
                  b.onDocumentMouseDown,
                  !1,
                )))
          : b.picker &&
            b.picker.owner &&
            (b.picker.owner.tryHide(),
            n.document.removeEventListener(
              "mousedown",
              b.onDocumentMouseDown,
              !1,
            ));
      },
      onDocumentMouseDown: function (a) {
        if (
          !a.target ||
          !a.target.nodeName ||
          "fr-configure" !== a.target.nodeName.toLowerCase()
        ) {
          var d = a.target || a.srcElement;
          if (b.getData(d, "gui")) {
            if (b.getData(d, "control"))
              b.onControlPointerStart(a, d, b.getData(d, "control"), "mouse");
          } else
            b.picker &&
              b.picker.owner &&
              (b.picker.owner.tryHide(),
              n.document.removeEventListener(
                "mousedown",
                b.onDocumentMouseDown,
                !1,
              ));
        }
      },
      onPickerTouchStart: function (a) {
        var d = a.target || a.srcElement;
        if (b.getData(d, "control"))
          b.onControlPointerStart(a, d, b.getData(d, "control"), "touch");
      },
      onControlPointerStart: function (a, d, e, g) {
        var k = b.getData(d, "instance");
        b.preventDefault(a);
        var l = function (u, t) {
          b.attachGroupEvent(
            "drag",
            u,
            b._pointerMoveEvent[g],
            b.onDocumentPointerMove(a, d, e, g, t),
          );
          b.attachGroupEvent(
            "drag",
            u,
            b._pointerEndEvent[g],
            b.onDocumentPointerEnd(a, d, e, g),
          );
        };
        l(n.document, [0, 0]);
        if (n.parent && n.frameElement) {
          var p = n.frDOMRects;
          "undefined" === typeof p && (p = { toggle: !1, cur: 1, prev: 1 });
          p = p.toggle ? p.cur : 1;
          var m = n.frameElement.getBoundingClientRect();
          l(n.parent.window.document, [-m.left * p, -m.top * p]);
        }
        l = b.getAbsPointerPos(a);
        p = b.getRelPointerPos(a);
        b._pointerOrigin = { x: l.x - p.x, y: l.y - p.y };
        switch (e) {
          case "pad":
            "v" === b.getSliderChannel(k) &&
              0 === k.channels.v &&
              k.fromHSVA(null, null, 100, null);
            b.setPad(k, a, 0, 0);
            break;
          case "sld":
            b.setSld(k, a, 0);
            break;
          case "asld":
            b.setASld(k, a, 0);
        }
        k.trigger("input");
      },
      onDocumentPointerMove: function (a, d, e, g, k) {
        return function (l) {
          var p = b.getData(d, "instance");
          switch (e) {
            case "pad":
              b.setPad(p, l, k[0], k[1]);
              break;
            case "sld":
              b.setSld(p, l, k[1]);
              break;
            case "asld":
              b.setASld(p, l, k[1]);
          }
          p.trigger("input");
        };
      },
      onDocumentPointerEnd: function (a, d, e, g) {
        return function (k) {
          k = b.getData(d, "instance");
          b.detachGroupEvents("drag");
          k.trigger("input");
          k.trigger("change");
        };
      },
      setPad: function (a, d, e, g) {
        d = b.getAbsPointerPos(d);
        e =
          (360 / (a.width - 1)) *
          (e + d.x - b._pointerOrigin.x - a.padding - a.controlBorderWidth);
        g =
          100 -
          (100 / (a.height - 1)) *
            (g + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
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
        e =
          100 -
          (100 / (a.height - 1)) *
            (e + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
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
        e =
          1 -
          (1 / (a.height - 1)) *
            (e + d.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
        1 > e &&
          ((d = a.getFormat()),
          "any" !== a.format.toLowerCase() ||
            b.isAlphaFormat(d) ||
            a._setFormat("hex" === d ? "hexa" : "rgba"));
        a.fromHSVA(null, null, null, e);
      },
      createPadCanvas: function () {
        var a = { elm: null, draw: null },
          d = b.createEl("canvas"),
          e = d.getContext("2d");
        a.elm = d;
        a.draw = function (g, k, l) {
          d.width = g;
          d.height = k;
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
          switch (l.toLowerCase()) {
            case "s":
              g.addColorStop(0, "rgba(255,255,255,0)");
              g.addColorStop(1, "rgba(255,255,255,1)");
              break;
            case "v":
              g.addColorStop(0, "rgba(0,0,0,0)"),
                g.addColorStop(1, "rgba(0,0,0,1)");
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
        a.draw = function (g, k, l, p) {
          d.width = g;
          d.height = k;
          e.clearRect(0, 0, d.width, d.height);
          g = e.createLinearGradient(0, 0, 0, d.height);
          g.addColorStop(0, l);
          g.addColorStop(1, p);
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
        a.draw = function (g, k, l) {
          d.width = g;
          d.height = k;
          e.clearRect(0, 0, d.width, d.height);
          g = d.width / 2;
          k = b.pub.chessboardColor2;
          e.fillStyle = b.pub.chessboardColor1;
          e.fillRect(0, 0, d.width, d.height);
          if (0 < g)
            for (var p = 0; p < d.height; p += 2 * g)
              (e.fillStyle = k),
                e.fillRect(0, p, g, g),
                e.fillRect(g, p + g, g, g);
          g = e.createLinearGradient(0, 0, 0, d.height);
          g.addColorStop(0, l);
          g.addColorStop(1, "rgba(0,0,0,0)");
          e.fillStyle = g;
          e.fillRect(0, 0, d.width, d.height);
        };
        return a;
      },
      flags: { leaveValue: 1, leavePreview: 2 },
      enumOpts: {
        format: "auto any hex hexa rgb rgba".split(" "),
        previewPosition: ["left", "right"],
        mode: ["hsv", "hvs", "hs", "hv"],
        position: ["left", "right", "top", "bottom"],
        alphaChannel: ["auto", !0, !1],
      },
      pub: function (a, d, e) {
        function g(c, h) {
          if ("string" !== typeof c)
            throw Error("Invalid value for option name: " + c);
          if (
            v.call(b.enumOpts, c) &&
            ("string" === typeof h && (h = h.toLowerCase()),
            -1 === b.enumOpts[c].indexOf(h))
          )
            throw Error("Option '" + c + "' has invalid value: " + h);
          if (c in f) return (f[c] = h), !0;
          throw Error("Unrecognized configuration option: " + c);
        }
        function k() {
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
            b.picker.wrap.addEventListener(
              "touchstart",
              b.onPickerTouchStart,
              b.isPassiveEventSupported ? { passive: !1 } : !1,
            ));
          var c = b.picker,
            h = !!b.getSliderChannel(f),
            q = f.hasAlphaChannel(),
            r = b.getPickerDims(f),
            w = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
            y = b.getControlPadding(f),
            K = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
            H =
              f.padding +
              f.width +
              2 * f.controlBorderWidth +
              y +
              (h ? f.sliderSize + 2 * y + 2 * f.controlBorderWidth : 0);
          c.wrap.className = D;
          c.wrap.style.clear = "both";
          c.wrap.style.display = "block";
          c.wrap.style.visibility = "visible";
          c.wrap.style.opacity = "1";
          c.wrap.style.width = r.borderW + "px";
          c.wrap.style.height = r.borderH + "px";
          c.wrap.style.zIndex = f.zIndex;
          c.box.className = I;
          c.box.style.width = r.paddedW + "px";
          c.box.style.height = r.paddedH + "px";
          c.box.style.position = "relative";
          c.boxB.className = J;
          c.boxB.style.position = "relative";
          c.boxB.style.setProperty(
            "border",
            f.borderWidth + "px solid " + f.borderColor,
            "important",
          );
          c.boxB.style.setProperty(
            "background",
            f.backgroundColor,
            "important",
          );
          b.setBorderRadius(c.boxB, K + "px");
          c.padM.style.background = "rgba(255,0,0,.2)";
          c.sldM.style.background = "rgba(0,255,0,.2)";
          c.asldM.style.background = "rgba(0,0,255,.2)";
          c.padM.style.opacity =
            c.sldM.style.opacity =
            c.asldM.style.opacity =
              "0";
          c.pad.style.position = "relative";
          c.pad.style.width = f.width + "px";
          c.pad.style.height = f.height + "px";
          c.padCanvas.draw(f.width, f.height, b.getPadYChannel(f));
          c.padB.style.position = "absolute";
          c.padB.style.left = f.padding + "px";
          c.padB.style.top = f.padding + "px";
          c.padB.style.border = f.controlBorderWidth + "px solid";
          c.padB.style.setProperty(
            "border-color",
            f.controlBorderColor,
            "important",
          );
          c.padM.style.position = "absolute";
          c.padM.style.left = "0px";
          c.padM.style.top = "0px";
          c.padM.style.width =
            f.padding + 2 * f.controlBorderWidth + f.width + y + "px";
          c.padM.style.height =
            2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.padM.style.cursor = "crosshair";
          b.setData(c.padM, { instance: f, control: "pad" });
          c.cross.style.position = "absolute";
          c.cross.style.left = c.cross.style.top = "0";
          c.cross.style.width = c.cross.style.height = w + "px";
          c.crossBY.style.position = c.crossBX.style.position = "absolute";
          c.crossBY.style.setProperty(
            "background",
            f.pointerBorderColor,
            "important",
          );
          c.crossBX.style.setProperty(
            "background",
            f.pointerBorderColor,
            "important",
          );
          c.crossBY.style.width = c.crossBX.style.height =
            2 * f.pointerBorderWidth + f.pointerThickness + "px";
          c.crossBY.style.height = c.crossBX.style.width = w + "px";
          c.crossBY.style.left = c.crossBX.style.top =
            Math.floor(w / 2) -
            Math.floor(f.pointerThickness / 2) -
            f.pointerBorderWidth +
            "px";
          c.crossBY.style.top = c.crossBX.style.left = "0";
          c.crossLY.style.position = c.crossLX.style.position = "absolute";
          c.crossLY.style.setProperty(
            "background",
            f.pointerColor,
            "important",
          );
          c.crossLX.style.setProperty(
            "background",
            f.pointerColor,
            "important",
          );
          c.crossLY.style.height = c.crossLX.style.width =
            w - 2 * f.pointerBorderWidth + "px";
          c.crossLY.style.width = c.crossLX.style.height =
            f.pointerThickness + "px";
          c.crossLY.style.left = c.crossLX.style.top =
            Math.floor(w / 2) - Math.floor(f.pointerThickness / 2) + "px";
          c.crossLY.style.top = c.crossLX.style.left =
            f.pointerBorderWidth + "px";
          c.sld.style.overflow = "hidden";
          c.sld.style.width = f.sliderSize + "px";
          c.sld.style.height = f.height + "px";
          c.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
          c.sldB.style.display = h ? "block" : "none";
          c.sldB.style.position = "absolute";
          c.sldB.style.left =
            f.padding + f.width + 2 * f.controlBorderWidth + 2 * y + "px";
          c.sldB.style.top = f.padding + "px";
          c.sldB.style.setProperty(
            "border",
            f.controlBorderWidth + "px solid " + f.controlBorderColor,
            "important",
          );
          c.sldM.style.display = h ? "block" : "none";
          c.sldM.style.position = "absolute";
          c.sldM.style.left =
            f.padding + f.width + 2 * f.controlBorderWidth + y + "px";
          c.sldM.style.top = "0px";
          c.sldM.style.width =
            f.sliderSize +
            2 * y +
            2 * f.controlBorderWidth +
            (q ? 0 : Math.max(0, f.padding - y)) +
            "px";
          c.sldM.style.height =
            2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.sldM.style.cursor = "default";
          b.setData(c.sldM, { instance: f, control: "sld" });
          c.sldPtrIB.style.setProperty(
            "border",
            f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
            "important",
          );
          c.sldPtrOB.style.setProperty(
            "border",
            f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
            "important",
          );
          c.sldPtrOB.style.position = "absolute";
          c.sldPtrOB.style.left =
            -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
          c.sldPtrOB.style.top = "0";
          c.sldPtrMB.style.setProperty(
            "border",
            f.pointerThickness + "px solid " + f.pointerColor,
            "important",
          );
          c.sldPtrS.style.width = f.sliderSize + "px";
          c.sldPtrS.style.height = b.pub.sliderInnerSpace + "px";
          c.asld.style.overflow = "hidden";
          c.asld.style.width = f.sliderSize + "px";
          c.asld.style.height = f.height + "px";
          c.asldGrad.draw(f.sliderSize, f.height, "#000");
          c.asldB.style.display = q ? "block" : "none";
          c.asldB.style.position = "absolute";
          c.asldB.style.left = H + "px";
          c.asldB.style.top = f.padding + "px";
          c.asldB.style.border = f.controlBorderWidth + "px solid";
          c.asldB.style.setProperty(
            "border-color",
            f.controlBorderColor,
            "important",
          );
          c.asldM.style.display = q ? "block" : "none";
          c.asldM.style.position = "absolute";
          c.asldM.style.left = H + "px";
          c.asldM.style.top = "0px";
          c.asldM.style.width =
            f.sliderSize +
            2 * y +
            2 * f.controlBorderWidth +
            Math.max(0, f.padding - y) +
            "px";
          c.asldM.style.height =
            2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
          c.asldM.style.cursor = "default";
          b.setData(c.asldM, { instance: f, control: "asld" });
          c.asldPtrIB.style.setProperty(
            "border",
            f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
            "important",
          );
          c.asldPtrOB.style.setProperty(
            "border",
            f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
            "important",
          );
          c.asldPtrOB.style.position = "absolute";
          c.asldPtrOB.style.left =
            -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
          c.asldPtrOB.style.top = "0";
          c.asldPtrMB.style.setProperty(
            "border",
            f.pointerThickness + "px solid " + f.pointerColor,
            "important",
          );
          c.asldPtrS.style.width = f.sliderSize + "px";
          c.asldPtrS.style.height = b.pub.sliderInnerSpace + "px";
          l();
          p();
          m();
          b.picker.owner &&
            b.picker.owner !== f &&
            b.removeClass(b.picker.owner.targetElement, b.pub.activeClassName);
          b.picker.owner = f;
          f.container === n.document.documentElement
            ? b.redrawPosition()
            : b._drawPosition(f, 0, 0, "relative", !1);
          c.wrap.parentNode !== f.container &&
            (h = b.node("dialog[id^='fr-dialog-']")) &&
            (h.appendChild(c.wrap),
            h.hasAttribute("open") && h.close && h.close(),
            (h.inert = !0),
            h.showModal && h.showModal(),
            h.removeAttribute("inert"),
            h.focus());
          b.addClass(f.targetElement, b.pub.activeClassName);
        }
        function l() {
          var c = b.getPadYChannel(f);
          c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
          var h = -Math.floor(
            (2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) /
              2,
          );
          b.picker.cross.style.left =
            Math.round((f.channels.h / 360) * (f.width - 1)) + h + "px";
          b.picker.cross.style.top = c + h + "px";
          switch (b.getSliderChannel(f)) {
            case "s":
              c = b.HSV_RGB(f.channels.h, 100, f.channels.v);
              h = b.HSV_RGB(f.channels.h, 0, f.channels.v);
              b.picker.sldGrad.draw(
                f.sliderSize,
                f.height,
                "rgb(" +
                  Math.round(c[0]) +
                  "," +
                  Math.round(c[1]) +
                  "," +
                  Math.round(c[2]) +
                  ")",
                "rgb(" +
                  Math.round(h[0]) +
                  "," +
                  Math.round(h[1]) +
                  "," +
                  Math.round(h[2]) +
                  ")",
              );
              break;
            case "v":
              (c = b.HSV_RGB(f.channels.h, f.channels.s, 100)),
                b.picker.sldGrad.draw(
                  f.sliderSize,
                  f.height,
                  "rgb(" +
                    Math.round(c[0]) +
                    "," +
                    Math.round(c[1]) +
                    "," +
                    Math.round(c[2]) +
                    ")",
                  "#000",
                );
          }
          b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function p() {
          var c = b.getSliderChannel(f);
          c &&
            (b.picker.sldPtrOB.style.top =
              Math.round((1 - f.channels[c] / 100) * (f.height - 1)) -
              (2 * f.pointerBorderWidth + f.pointerThickness) -
              Math.floor(b.pub.sliderInnerSpace / 2) +
              "px");
          b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function m() {
          b.picker.asldPtrOB.style.top =
            Math.round((1 - f.channels.a) * (f.height - 1)) -
            (2 * f.pointerBorderWidth + f.pointerThickness) -
            Math.floor(b.pub.sliderInnerSpace / 2) +
            "px";
        }
        function u() {
          return b.picker && b.picker.owner === f;
        }
        function t(c) {
          b.getData(c, "internal") ||
            ((c = f.valueElement.value),
            f.processValueInput(f.valueElement.value),
            b.triggerCallback(f, "onChange"),
            f.valueElement.value !== c &&
              b.triggerInputEvent(f.valueElement, "change", !0, !0));
        }
        function L(c) {
          b.getData(c, "internal") ||
            (f.valueElement &&
              f.fromString(f.valueElement.value, b.flags.leaveValue),
            b.triggerCallback(f, "onInput"));
        }
        var f = this;
        e || (e = {});
        this.configShadow = A = d;
        this.scrollbar = this.configShadow.querySelector("fr-scrollbar");
        this.channels = { r: 255, g: 255, b: 255, h: 0, s: 0, v: 100, a: 1 };
        this.format = "auto";
        this.previewElement =
          this.valueElement =
          this.onInput =
          this.onChange =
          this.alpha =
          this.value =
            void 0;
        this.previewPosition = "left";
        this.previewSize = 35;
        this.previewPadding = 8;
        this.forceStyle = this.uppercase = this.hash = this.required = !0;
        this.width = 188;
        this.height = 210;
        this.mode = "HSV";
        this.alphaChannel = "auto";
        this.position = "top";
        this.hideOnLeave = this.showOnClick = this.smartPosition = !0;
        this.sliderSize = 12;
        this.padding = this.crossSize = 8;
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
          if (1 === arguments.length && "string" === typeof arguments[0])
            try {
              var c = arguments[0];
              if ("string" !== typeof c)
                throw Error("Invalid value for option name: " + c);
              if (c in f) var h = f[c];
              else throw Error("Unrecognized configuration option: " + c);
              return h;
            } catch (r) {
              return !1;
            }
          else {
            if (2 <= arguments.length && "string" === typeof arguments[0]) {
              try {
                if (!g(arguments[0], arguments[1])) return !1;
              } catch (r) {
                return !1;
              }
              this.redraw();
              this.exposeColor();
              return !0;
            }
            if (1 === arguments.length && "object" === typeof arguments[0]) {
              h = arguments[0];
              c = !0;
              for (var q in h)
                if (v.call(h, q))
                  try {
                    g(q, h[q]) || (c = !1);
                  } catch (r) {
                    c = !1;
                  }
              this.redraw();
              this.exposeColor();
              return c;
            }
          }
          throw Error("Invalid arguments");
        };
        this.channel = function (c, h) {
          if ("string" !== typeof c)
            throw Error("Invalid value for channel name: " + c);
          if ("undefined" === typeof h)
            return v.call(this.channels, c.toLowerCase())
              ? this.channels[c.toLowerCase()]
              : !1;
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
            var q = c[h].toLowerCase(),
              r = null;
            switch (q) {
              case "input":
                r = "onInput";
                break;
              case "change":
                r = "onChange";
            }
            r && b.triggerCallback(this, r);
            b.triggerInputEvent(this.valueElement, q, !0, !0);
          }
        };
        this.fromHSVA = function (c, h, q, r, w) {
          "undefined" === typeof c && (c = null);
          "undefined" === typeof h && (h = null);
          "undefined" === typeof q && (q = null);
          "undefined" === typeof r && (r = null);
          if (null !== c) {
            if (isNaN(c)) return !1;
            this.channels.h = Math.max(0, Math.min(360, c));
          }
          if (null !== h) {
            if (isNaN(h)) return !1;
            this.channels.s = Math.max(
              0,
              Math.min(100, this.maxS, h),
              this.minS,
            );
          }
          if (null !== q) {
            if (isNaN(q)) return !1;
            this.channels.v = Math.max(
              0,
              Math.min(100, this.maxV, q),
              this.minV,
            );
          }
          if (null !== r) {
            if (isNaN(r)) return !1;
            this.channels.a = this.hasAlphaChannel()
              ? Math.max(0, Math.min(1, this.maxA, r), this.minA)
              : 1;
          }
          c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = c[0];
          this.channels.g = c[1];
          this.channels.b = c[2];
          this.exposeColor(w);
          return !0;
        };
        this.fromRGBA = function (c, h, q, r, w) {
          "undefined" === typeof c && (c = null);
          "undefined" === typeof h && (h = null);
          "undefined" === typeof q && (q = null);
          "undefined" === typeof r && (r = null);
          if (null !== c) {
            if (isNaN(c)) return !1;
            c = Math.max(0, Math.min(255, c));
          }
          if (null !== h) {
            if (isNaN(h)) return !1;
            h = Math.max(0, Math.min(255, h));
          }
          if (null !== q) {
            if (isNaN(q)) return !1;
            q = Math.max(0, Math.min(255, q));
          }
          if (null !== r) {
            if (isNaN(r)) return !1;
            this.channels.a = this.hasAlphaChannel()
              ? Math.max(0, Math.min(1, this.maxA, r), this.minA)
              : 1;
          }
          c = b.RGB_HSV(
            null === c ? this.channels.r : c,
            null === h ? this.channels.g : h,
            null === q ? this.channels.b : q,
          );
          null !== c[0] && (this.channels.h = Math.max(0, Math.min(360, c[0])));
          0 !== c[2] &&
            (this.channels.s = Math.max(
              0,
              this.minS,
              Math.min(100, this.maxS, c[1]),
            ));
          this.channels.v = Math.max(
            0,
            this.minV,
            Math.min(100, this.maxV, c[2]),
          );
          c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = c[0];
          this.channels.g = c[1];
          this.channels.b = c[2];
          this.exposeColor(w);
          return !0;
        };
        this.fromHSV = function (c, h, q, r) {
          return this.fromHSVA(c, h, q, null, r);
        };
        this.fromRGB = function (c, h, q, r) {
          return this.fromRGBA(c, h, q, null, r);
        };
        this.fromString = function (c, h) {
          if (!this.required && "" === c.trim())
            return (
              this.setPreviewElementBg(null), this.setValueElementValue(""), !0
            );
          c = b.parseColorString(c);
          if (!c) return !1;
          "any" === this.format.toLowerCase() &&
            (this._setFormat(c.format),
            b.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
          this.fromRGBA(c.rgba[0], c.rgba[1], c.rgba[2], c.rgba[3], h);
          return !0;
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
          return b.hexaColor(
            this.channels.r,
            this.channels.g,
            this.channels.b,
            this.channels.a,
          );
        };
        this.toRGBString = function () {
          return b.rgbColor(this.channels.r, this.channels.g, this.channels.b);
        };
        this.toRGBAString = function () {
          return b.rgbaColor(
            this.channels.r,
            this.channels.g,
            this.channels.b,
            this.channels.a,
          );
        };
        this.hide = function () {
          this.scrollbar &&
            this.scrollbar.removeEventListener("scroll", b.onWindowScroll, !1);
          u() &&
            (b.removeClass(f.targetElement, b.pub.activeClassName),
            b.picker.wrap &&
              b.picker.wrap.parentNode &&
              b.picker.wrap.parentNode.removeChild(b.picker.wrap),
            delete b.picker.owner);
        };
        this.show = function () {
          k();
          this.scrollbar &&
            this.scrollbar.addEventListener("scroll", b.onWindowScroll, !1);
        };
        this.redraw = function () {
          u() && k();
        };
        this.getFormat = function () {
          return this._currentFormat;
        };
        this._setFormat = function (c) {
          this._currentFormat = c.toLowerCase();
        };
        this.hasAlphaChannel = function () {
          return "auto" === this.alphaChannel
            ? "any" === this.format.toLowerCase() ||
                b.isAlphaFormat(this.getFormat()) ||
                "undefined" !== typeof this.alpha
            : this.alphaChannel;
        };
        this.processValueInput = function (c) {
          this.fromString(c) || this.exposeColor();
        };
        this.exposeColor = function (c) {
          var h = this.toString(),
            q = this.getFormat();
          b.setDataAttr(this.targetElement, "current-color", h);
          if (!(c & b.flags.leaveValue) && this.valueElement) {
            if ("hex" === q || "hexa" === q)
              this.uppercase || (h = h.toLowerCase()),
                this.hash || (h = h.replace(/^#/, ""));
            this.setValueElementValue(h);
          }
          c & b.flags.leavePreview ||
            !this.previewElement ||
            this.setPreviewElementBg(this.toRGBAString());
          u() && (l(), p(), m());
        };
        this.setPreviewElementBg = function (c) {
          if (this.previewElement) {
            var h = null,
              q = null;
            b.isTextInput(this.previewElement) &&
              ((h = this.previewPosition), (q = this.previewSize));
            var r = [];
            r.push({ size: "auto" });
            if (c) {
              var w = b.genColorPreviewCanvas(
                "rgba(0,0,0,0)",
                h ? { left: "right", right: "left" }[h] : null,
                q,
                !0,
              );
              r.push({ size: w.width + "px " + w.height + "px" });
            }
            w = [];
            for (var y = 0; y < r.length; y += 1) w.push(r[y].size);
            c = {
              "--fr-input-color": c,
              "--fr-input-color-edge": q + "px",
              "--fr-input-color-edge2": q + 1 + "px",
              "--fr-input-gb-size": w.join(", "),
            };
            b.setStyle(this.previewElement, c, !this.forceStyle);
            c = { left: null, right: null };
            h && (c[h] = this.previewSize + this.previewPadding + "px");
            b.setStyle(
              this.previewElement,
              { "--fr-input-padding-left": c.left },
              !this.forceStyle,
              !0,
            );
          }
        };
        this.setValueElementValue = function (c) {
          this.valueElement &&
            ("input" === b.nodeName(this.valueElement)
              ? (this.valueElement.value = c)
              : (this.valueElement.textContent = c));
        };
        this._processParentElementsInDOM = function () {
          if (!this._parentElementsProcessed) {
            this._parentElementsProcessed = !0;
            var c = this.targetElement;
            do {
              var h = b.getCompStyle(c);
              if (
                (h.position && "fixed" === h.position.toLowerCase()) ||
                c instanceof ShadowRoot
              )
                this.fixed = !0;
            } while ((c = c.parentNode) && "body" !== b.nodeName(c));
          }
        };
        this.tryHide = function () {
          this.hideOnLeave && this.hide();
        };
        if (b.pub.options)
          for (var F in b.pub.options)
            if (v.call(b.pub.options, F))
              try {
                g(F, b.pub.options[F]);
              } catch (c) {
                console.error(c);
              }
        for (var G in e)
          if (v.call(e, G))
            try {
              g(G, e[G]);
            } catch (c) {
              console.error(c);
            }
        this.configShadow.addEventListener("click", b.onConfigIfMouseDown, !1);
        this.container =
          "undefined" === typeof this.container
            ? n.document.documentElement
            : b.node(this.container);
        if (!this.container) throw Error("No container element");
        this.targetElement = b.node(a);
        if (!this.targetElement) throw Error("No target element");
        if (this.targetElement.frcp && this.targetElement.frcp instanceof b.pub)
          throw Error("Redundant Fr-Color-picker");
        this.targetElement.frcp = this;
        b.addClass(this.targetElement, b.pub.className);
        b.instances.push(this);
        "undefined" === typeof this.valueElement
          ? b.isTextInput(this.targetElement) &&
            (this.valueElement = this.targetElement)
          : null !== this.valueElement &&
            (this.valueElement = b.node(this.valueElement));
        "undefined" === typeof this.previewElement
          ? (this.previewElement = this.targetElement)
          : null !== this.previewElement &&
            (this.previewElement = b.node(this.previewElement));
        this.valueElement &&
          b.isTextInput(this.valueElement) &&
          ((a = this.valueElement.oninput),
          (this.valueElement.oninput = null),
          this.valueElement.addEventListener("change", t, !1),
          this.valueElement.addEventListener("input", L, !1),
          a && this.valueElement.addEventListener("input", a, !1),
          this.valueElement.setAttribute("autocomplete", "off"),
          this.valueElement.setAttribute("autocorrect", "off"),
          this.valueElement.setAttribute("autocapitalize", "off"),
          this.valueElement.setAttribute("spellcheck", !1));
        a = "FFFFFF";
        "undefined" !== typeof this.value
          ? (a = this.value)
          : this.valueElement &&
            "undefined" !== typeof this.valueElement.value &&
            (a = this.valueElement.value);
        this._currentFormat = null;
        -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
          ? (this._currentFormat = (d = b.parseColorString(a))
              ? d.format
              : "hex")
          : (this._currentFormat = this.format.toLowerCase());
        this.processValueInput(a);
      },
    };
    b.pub.className = C;
    b.pub.activeClassName = B;
    b.pub.looseJSON = !0;
    b.pub.sliderInnerSpace = 3;
    b.pub.chessboardSize = 8;
    b.pub.chessboardColor1 = "#666666";
    b.pub.chessboardColor2 = "#999999";
    b.pub.init = function () {
      if (!b.initialized) {
        n.addEventListener("resize", b.onWindowResize, !1);
        n.addEventListener("scroll", b.onWindowScroll, !1);
        b.initialized = !0;
        for (var a; (a = b.readyQueue.shift()); ) a();
      }
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
    b.register();
    return b.pub;
  })();
  "undefined" === typeof n.FRColorPicker && (n.FRColorPicker = z);
  return z;
});

