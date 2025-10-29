// ==UserScript==
// @name        frColorPicker
// @version     7.4.6
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

(function (p, A) {
  return A(
    p,
    Element.prototype.attachShadow,
    Object.prototype.hasOwnProperty,
    function (v) {
      var z = Array.from(
        crypto.getRandomValues(new Uint8Array(v)),
        function (y) {
          return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[y % 52];
        },
      ).join("");
      if (3 >= v) return z;
      v = (crypto.getRandomValues(new Uint8Array(1))[0] % (v - 3)) + 2;
      return z.slice(0, v) + "." + z.slice(v);
    },
  );
})("undefined" !== typeof window ? window : this, function (p, A, v, z) {
  var y,
    G = (function () {
      var D = null,
        H = z(9),
        I = z(8),
        J = z(12),
        K = z(8),
        L = z(7);
      a: {
        try {
          p.addEventListener("testPassive", null, { passive: !0 }),
            p.removeEventListener("testPassive", null, { passive: !0 });
        } catch (b) {
          var E = !1;
          break a;
        }
        E = !0;
      }
      var a = {
        initialized: !1,
        instances: [],
        readyQueue: [],
        attachShadow: function (b) {
          return A.call(b, { mode: "closed" });
        },
        register: function () {
          "undefined" !== typeof p &&
            p.document &&
            ("loading" === p.document.readyState
              ? p.document.addEventListener("DOMContentLoaded", a.pub.init, !1)
              : "complete" === p.document.readyState
                ? a.pub.init()
                : p.addEventListener("load", a.pub.init, !1));
        },
        getInstances: function () {
          for (var b = [], d = 0; d < a.instances.length; d += 1)
            a.instances[d] &&
              a.instances[d].targetElement &&
              b.push(a.instances[d]);
          return b;
        },
        createEl: function (b) {
          b = p.document.createElement(b);
          a.setData(b, "gui", !0);
          return b;
        },
        node: function (b) {
          if (!b) return null;
          if ("string" === typeof b) {
            var d = null;
            try {
              d = p.document.querySelector(b) || D.querySelector(b);
            } catch (e) {
              return null;
            }
            return d;
          }
          return a.isNode(b) ? b : null;
        },
        isNode: function (b) {
          return "object" === typeof Node
            ? b instanceof Node
            : b &&
                "object" === typeof b &&
                "number" === typeof b.nodeType &&
                "string" === typeof b.nodeName;
        },
        nodeName: function (b) {
          return b && b.nodeName ? b.nodeName.toLowerCase() : !1;
        },
        isTextInput: function (b) {
          return (
            b && "input" === a.nodeName(b) && "text" === b.type.toLowerCase()
          );
        },
        isPassiveEventSupported: E,
        dataProp: "_data_fr_colorpicker_",
        setData: function () {
          var b = arguments[0];
          if (3 === arguments.length)
            return (
              ((v.call(b, a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {}))[
                arguments[1]
              ] = arguments[2]),
              !0
            );
          if (2 === arguments.length && "object" === typeof arguments[1]) {
            b = v.call(b, a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {});
            var d = arguments[1],
              e;
            for (e in d) v.call(d, e) && (b[e] = d[e]);
            return !0;
          }
          throw Error("Invalid arguments");
        },
        getData: function (b, d, e) {
          if (!v.call(b, a.dataProp))
            if ("undefined" !== typeof e) b[a.dataProp] = {};
            else return;
          b = b[a.dataProp];
          v.call(b, d) || "undefined" === typeof e || (b[d] = e);
          return b[d];
        },
        setDataAttr: function (b, d, e) {
          b.setAttribute("data-" + d, e);
        },
        _attachedGroupEvents: {},
        attachGroupEvent: function (b, d, e, g) {
          v.call(a._attachedGroupEvents, b) || (a._attachedGroupEvents[b] = []);
          a._attachedGroupEvents[b].push([d, e, g]);
          d.addEventListener(e, g, !1);
        },
        detachGroupEvents: function (b) {
          if (v.call(a._attachedGroupEvents, b)) {
            for (var d = 0; d < a._attachedGroupEvents[b].length; d += 1) {
              var e = a._attachedGroupEvents[b][d];
              e[0].removeEventListener(e[1], e[2], !1);
            }
            delete a._attachedGroupEvents[b];
          }
        },
        preventDefault: function (b) {
          b.preventDefault && b.preventDefault();
          b.returnValue = !1;
        },
        triggerEvent: function (b, d, e, g) {
          if (b) {
            if ("function" === typeof Event)
              var k = new Event(d, { bubbles: e, cancelable: g });
            else (k = p.document.createEvent("Event")), k.initEvent(d, e, g);
            if (!k) return !1;
            a.setData(k, "internal", !0);
            b.dispatchEvent(k);
            return !0;
          }
        },
        triggerInputEvent: function (b, d, e, g) {
          b && a.isTextInput(b) && a.triggerEvent(b, d, e, g);
        },
        strList: function (b) {
          return b ? b.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
        },
        hasClass: function (b, d) {
          return d
            ? "undefined" !== typeof b.classList
              ? b.classList.contains(d)
              : -1 !==
                (" " + b.className.replace(/\s+/g, " ") + " ").indexOf(
                  " " + d + " ",
                )
            : !1;
        },
        addClass: function (b, d) {
          d = a.strList(d);
          if ("undefined" !== typeof b.classList)
            for (var e = 0; e < d.length; e += 1) b.classList.add(d[e]);
          else
            for (e = 0; e < d.length; e += 1)
              a.hasClass(b, d[e]) ||
                (b.className += (b.className ? " " : "") + d[e]);
        },
        removeClass: function (b, d) {
          d = a.strList(d);
          if ("undefined" !== typeof b.classList)
            for (var e = 0; e < d.length; e += 1) b.classList.remove(d[e]);
          else
            for (e = 0; e < d.length; e += 1)
              b.className = b.className.replace(
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
        getCompStyle: function (b) {
          return b instanceof ShadowRoot
            ? {}
            : (b = p.getComputedStyle ? p.getComputedStyle(b) : b.currentStyle)
              ? b
              : {};
        },
        setStyle: function (b, d, e, g) {
          e = e ? "important" : "";
          var k = null,
            l;
          for (l in d)
            if (v.call(d, l)) {
              var n = null;
              null === d[l]
                ? (k || (k = a.getData(b, "origStyle")),
                  k && v.call(k, l) && (n = k[l]))
                : (g &&
                    (k || (k = a.getData(b, "origStyle", {})),
                    v.call(k, l) || (k[l] = b.style[l])),
                  (n = d[l]));
              null !== n && b.style.setProperty(l, n, e);
            }
        },
        hexColor: function (b, d, e) {
          return (
            "#" +
            (
              ("0" + Math.round(b).toString(16)).slice(-2) +
              ("0" + Math.round(d).toString(16)).slice(-2) +
              ("0" + Math.round(e).toString(16)).slice(-2)
            ).toUpperCase()
          );
        },
        hexaColor: function (b, d, e, g) {
          b =
            "#" +
            ("0" + Math.round(b).toString(16)).slice(-2) +
            ("0" + Math.round(d).toString(16)).slice(-2);
          b +=
            ("0" + Math.round(e).toString(16)).slice(-2) +
            ("0" + Math.round(255 * g).toString(16)).slice(-2);
          return b.toUpperCase();
        },
        rgbColor: function (b, d, e) {
          return (
            "rgb(" +
            Math.round(b) +
            "," +
            Math.round(d) +
            "," +
            Math.round(e) +
            ")"
          );
        },
        rgbaColor: function (b, d, e, g) {
          return (
            "rgba(" +
            Math.round(b) +
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
        setBorderRadius: function (b, d) {
          a.setStyle(b, { "border-radius": d || "0" });
        },
        getElementPos: function (b, d) {
          var e = p.frDOMRects;
          "undefined" === typeof e && (e = { toggle: !1, cur: 1, prev: 1 });
          e = e.toggle ? e.cur : 1;
          var g = b.getBoundingClientRect();
          b = g.left * e;
          g = g.top * e;
          d || ((d = a.getViewPos()), (b += d[0] * e), (g += d[1] * e));
          return [b, g];
        },
        getElementSize: function (b) {
          return [b.offsetWidth, b.offsetHeight];
        },
        getAbsPointerPos: function (b) {
          var d = p.frDOMRects;
          "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
          var e = 0,
            g = 0;
          "undefined" !== typeof b.changedTouches && b.changedTouches.length
            ? ((e = b.changedTouches[0].x * d.cur),
              (g = b.changedTouches[0].y * d.cur))
            : "number" === typeof b.x && ((e = b.x * d.cur), (g = b.y * d.cur));
          return { x: e, y: g };
        },
        getRelPointerPos: function (b) {
          var d = p.frDOMRects;
          "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
          var e = (b.target || b.srcElement).getBoundingClientRect(),
            g = d.toggle ? d.cur : 1,
            k = 0,
            l = 0;
          "undefined" !== typeof b.changedTouches && b.changedTouches.length
            ? ((k = b.changedTouches[0].x * d.cur),
              (l = b.changedTouches[0].y * d.cur))
            : "number" === typeof b.x && ((k = b.x * d.cur), (l = b.y * d.cur));
          return { x: k - e.left * g, y: l - e.top * g };
        },
        getViewPos: function () {
          var b = p.document.documentElement;
          return [
            (p.pageXOffset || b.scrollLeft) - (b.clientLeft || 0),
            (p.pageYOffset || b.scrollTop) - (b.clientTop || 0),
          ];
        },
        getViewSize: function () {
          var b = p.document.documentElement;
          return [
            p.innerWidth || b.clientWidth,
            p.innerHeight || b.clientHeight,
          ];
        },
        RGB_HSV: function (b, d, e) {
          b /= 255;
          d /= 255;
          e /= 255;
          var g = Math.min(Math.min(b, d), e),
            k = Math.max(Math.max(b, d), e),
            l = k - g;
          if (0 === l) return [null, 0, 100 * k];
          b =
            b === g
              ? 3 + (e - d) / l
              : d === g
                ? 5 + (b - e) / l
                : 1 + (d - b) / l;
          return [60 * (6 === b ? 0 : b), (l / k) * 100, 100 * k];
        },
        HSV_RGB: function (b, d, e) {
          e = (e / 100) * 255;
          if (null === b) return [e, e, e];
          b /= 60;
          d /= 100;
          var g = Math.floor(b),
            k = e * (1 - d);
          b = e * (1 - d * (g % 2 ? b - g : 1 - (b - g)));
          switch (g) {
            case 6:
            case 0:
              return [e, b, k];
            case 1:
              return [b, e, k];
            case 2:
              return [k, e, b];
            case 3:
              return [k, b, e];
            case 4:
              return [b, k, e];
            case 5:
              return [e, k, b];
          }
        },
        parseColorString: function (b) {
          var d,
            e = { rgba: null, format: null };
          if (/^currentcolor$/i.test(b))
            return { format: "hexa", rgba: [255, 255, 255, 1] };
          if ((d = b.match(/^\W*([0-9A-F]{3,8})\W*$/i))) {
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
          if ((d = b.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
            b = d[1].split(",");
            d = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
            var g, k, l, n;
            if (
              3 <= b.length &&
              (g = b[0].match(d)) &&
              (k = b[1].match(d)) &&
              (l = b[2].match(d))
            )
              return (
                (e.format = "rgb"),
                (e.rgba = [
                  parseFloat(g[1]) || 0,
                  parseFloat(k[1]) || 0,
                  parseFloat(l[1]) || 0,
                  1,
                ]),
                4 <= b.length &&
                  (n = b[3].match(d)) &&
                  ((e.format = "rgba"), (e.rgba[3] = parseFloat(n[1]) || 0)),
                e
              );
          }
          return !1;
        },
        isAlphaFormat: function (b) {
          switch (b.toLowerCase()) {
            case "hexa":
            case "rgba":
              return !0;
          }
          return !1;
        },
        scaleCanvasForHighDPR: function (b) {
          var d = p.devicePixelRatio || 1;
          b.width *= d;
          b.height *= d;
          b.getContext("2d").scale(d, d);
        },
        genColorPreviewCanvas: function (b, d, e, g) {
          var k = a.pub.chessboardSize,
            l = a.pub.chessboardColor1,
            n = a.pub.chessboardColor2;
          e = e ? e : 2 * k;
          var m = 2 * k,
            u = a.createEl("canvas"),
            t = u.getContext("2d");
          u.width = e;
          u.height = m;
          g && a.scaleCanvasForHighDPR(u);
          t.fillStyle = l;
          t.fillRect(0, 0, e, m);
          t.fillStyle = n;
          for (g = 0; g < e; g += 2 * k)
            t.fillRect(g, 0, k, k), t.fillRect(g + k, k, k, k);
          b && ((t.fillStyle = b), t.fillRect(0, 0, e, m));
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
          if (a.picker && a.picker.owner) {
            var b = a.picker.owner;
            if (b.fixed) {
              var d = a.getElementPos(b.targetElement, !0);
              var e = [0, 0];
            } else (d = a.getElementPos(b.targetElement)), (e = a.getViewPos());
            var g = a.getElementSize(b.targetElement),
              k = a.getViewSize(),
              l = a.getPickerDims(b),
              n = [l.borderW, l.borderH];
            switch (b.position.toLowerCase()) {
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
            var t = (g[m] + n[m]) / 2;
            d = b.smartPosition
              ? [
                  -e[l] + d[l] + n[l] > k[l]
                    ? -e[l] + d[l] + g[l] / 2 > k[l] / 2 &&
                      0 <= d[l] + g[l] - n[l]
                      ? d[l] + g[l] - n[l]
                      : d[l]
                    : d[l],
                  -e[m] + d[m] + g[m] + n[m] - t + t * u > k[m]
                    ? -e[m] + d[m] + g[m] / 2 > k[m] / 2 &&
                      0 <= d[m] + g[m] - t - t * u
                      ? d[m] + g[m] - t - t * u - 4
                      : d[m] + g[m] - t + t * u + 4
                    : 0 <= d[m] + g[m] - t + t * u
                      ? d[m] + g[m] - t + t * u - 4
                      : d[m] + g[m] - t - t * u + 4,
                ]
              : [d[l], d[m] + g[m] - t + t * u - 4];
            a._drawPosition(d[l], d[m], b.fixed ? "fixed" : "absolute");
          }
        },
        _drawPosition: function (b, d, e) {
          a.picker.wrap.style.left = b + "px";
          a.picker.wrap.style.top = d + "px";
          a.picker.wrap.style.position = e;
        },
        getPickerDims: function (b) {
          var d = 2 * b.controlBorderWidth + b.width,
            e = 2 * b.controlBorderWidth + b.height,
            g =
              2 * b.controlBorderWidth +
              2 * a.getControlPadding(b) +
              b.sliderSize;
          a.getSliderChannel(b) && (d += g);
          b.hasAlphaChannel() && (d += g);
          g = d + 2 * b.padding;
          var k = e + 2 * b.padding;
          return {
            contentW: d,
            contentH: e,
            paddedW: g,
            paddedH: k,
            borderW: g + 2 * b.borderWidth,
            borderH: k + 2 * b.borderWidth,
          };
        },
        getControlPadding: function (b) {
          return Math.max(
            b.padding / 2,
            2 * b.pointerBorderWidth +
              b.pointerThickness -
              b.controlBorderWidth,
          );
        },
        getPadYChannel: function (b) {
          switch (b.mode.charAt(1).toLowerCase()) {
            case "v":
              return "v";
          }
          return "s";
        },
        getSliderChannel: function (b) {
          if (2 < b.mode.length)
            switch (b.mode.charAt(2).toLowerCase()) {
              case "s":
                return "s";
              case "v":
                return "v";
            }
          return null;
        },
        triggerCallback: function (b, d) {
          if (b[d]) {
            var e = null;
            if ("string" === typeof b[d])
              try {
                e = new Function(b[d]);
              } catch (g) {
                console.error(g);
              }
            else e = b[d];
            e && e.call(b);
          }
        },
        triggerGlobal: function (b) {
          for (var d = a.getInstances(), e = 0; e < d.length; e += 1)
            d[e].trigger(b);
        },
        _pointerMoveEvent: { mouse: "mousemove", touch: "touchmove" },
        _pointerEndEvent: { mouse: "mouseup", touch: "touchend" },
        _pointerOrigin: null,
        onWindowResize: function (b) {
          a.redrawPosition();
        },
        onWindowScroll: function (b) {
          a.redrawPosition();
        },
        onConfigIfMouseDown: function (b) {
          b =
            b.composedPath().find(function (d) {
              return (
                "INPUT" === d.nodeName && d.hasAttribute("data-current-color")
              );
            }) ||
            b.target ||
            b.srcElement;
          b.frcp && b.frcp instanceof a.pub
            ? b.frcp.showOnClick &&
              !b.disabled &&
              (a.picker && a.picker.owner
                ? (a.picker.owner.tryHide(),
                  y.removeEventListener("mousedown", a.onDocumentMouseDown, !1))
                : (b.frcp.show(),
                  y.addEventListener("mousedown", a.onDocumentMouseDown, !1)))
            : a.picker &&
              a.picker.owner &&
              (a.picker.owner.tryHide(),
              y.removeEventListener("mousedown", a.onDocumentMouseDown, !1));
        },
        onDocumentMouseDown: function (b) {
          var d = b.target || b.srcElement;
          if (!d || !d.nodeName || "fr-configure" !== d.nodeName.toLowerCase())
            if (a.getData(d, "gui")) {
              if (a.getData(d, "control"))
                a.onControlPointerStart(b, d, a.getData(d, "control"), "mouse");
            } else
              a.picker &&
                a.picker.owner &&
                (a.picker.owner.tryHide(),
                y.removeEventListener("mousedown", a.onDocumentMouseDown, !1));
        },
        onPickerTouchStart: function (b) {
          var d = b.target || b.srcElement;
          if (a.getData(d, "control"))
            a.onControlPointerStart(b, d, a.getData(d, "control"), "touch");
        },
        onControlPointerStart: function (b, d, e, g) {
          var k = a.getData(d, "instance");
          a.preventDefault(b);
          var l = function (u, t) {
            a.attachGroupEvent(
              "drag",
              u,
              a._pointerMoveEvent[g],
              a.onDocumentPointerMove(b, d, e, g, t),
            );
            a.attachGroupEvent(
              "drag",
              u,
              a._pointerEndEvent[g],
              a.onDocumentPointerEnd(b, d, e, g),
            );
          };
          l(p.document, [0, 0]);
          if (p.parent && p.frameElement) {
            var n = p.frDOMRects;
            "undefined" === typeof n && (n = { toggle: !1, cur: 1, prev: 1 });
            n = n.toggle ? n.cur : 1;
            var m = p.frameElement.getBoundingClientRect();
            l(p.parent.window.document, [-m.left * n, -m.top * n]);
          }
          l = a.getAbsPointerPos(b);
          n = a.getRelPointerPos(b);
          a._pointerOrigin = { x: l.x - n.x, y: l.y - n.y };
          switch (e) {
            case "pad":
              "v" === a.getSliderChannel(k) &&
                0 === k.channels.v &&
                k.fromHSVA(null, null, 100, null);
              a.setPad(k, b, 0, 0);
              break;
            case "sld":
              a.setSld(k, b, 0);
              break;
            case "asld":
              a.setASld(k, b, 0);
          }
          k.trigger("input");
        },
        onDocumentPointerMove: function (b, d, e, g, k) {
          return function (l) {
            var n = a.getData(d, "instance");
            switch (e) {
              case "pad":
                a.setPad(n, l, k[0], k[1]);
                break;
              case "sld":
                a.setSld(n, l, k[1]);
                break;
              case "asld":
                a.setASld(n, l, k[1]);
            }
            n.trigger("input");
          };
        },
        onDocumentPointerEnd: function (b, d, e, g) {
          return function (k) {
            k = a.getData(d, "instance");
            a.detachGroupEvents("drag");
            k.trigger("input");
            k.trigger("change");
          };
        },
        setPad: function (b, d, e, g) {
          d = a.getAbsPointerPos(d);
          e =
            (360 / (b.width - 1)) *
            (e + d.x - a._pointerOrigin.x - b.padding - b.controlBorderWidth);
          g =
            100 -
            (100 / (b.height - 1)) *
              (g + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          switch (a.getPadYChannel(b)) {
            case "s":
              b.fromHSVA(e, g, null, null);
              break;
            case "v":
              b.fromHSVA(e, null, g, null);
          }
        },
        setSld: function (b, d, e) {
          d = a.getAbsPointerPos(d);
          e =
            100 -
            (100 / (b.height - 1)) *
              (e + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          switch (a.getSliderChannel(b)) {
            case "s":
              b.fromHSVA(null, e, null, null);
              break;
            case "v":
              b.fromHSVA(null, null, e, null);
          }
        },
        setASld: function (b, d, e) {
          d = a.getAbsPointerPos(d);
          e =
            1 -
            (1 / (b.height - 1)) *
              (e + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          1 > e &&
            ((d = b.getFormat()),
            "any" !== b.format.toLowerCase() ||
              a.isAlphaFormat(d) ||
              b._setFormat("hex" === d ? "hexa" : "rgba"));
          b.fromHSVA(null, null, null, e);
        },
        createPadCanvas: function () {
          var b = { elm: null, draw: null },
            d = a.createEl("canvas"),
            e = d.getContext("2d");
          b.elm = d;
          b.draw = function (g, k, l) {
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
          return b;
        },
        createSliderGradient: function () {
          var b = { elm: null, draw: null },
            d = a.createEl("canvas"),
            e = d.getContext("2d");
          b.elm = d;
          b.draw = function (g, k, l, n) {
            d.width = g;
            d.height = k;
            e.clearRect(0, 0, d.width, d.height);
            g = e.createLinearGradient(0, 0, 0, d.height);
            g.addColorStop(0, l);
            g.addColorStop(1, n);
            e.fillStyle = g;
            e.fillRect(0, 0, d.width, d.height);
          };
          return b;
        },
        createASliderGradient: function () {
          var b = { elm: null, draw: null },
            d = a.createEl("canvas"),
            e = d.getContext("2d");
          b.elm = d;
          b.draw = function (g, k, l) {
            d.width = g;
            d.height = k;
            e.clearRect(0, 0, d.width, d.height);
            g = d.width / 2;
            k = a.pub.chessboardColor2;
            e.fillStyle = a.pub.chessboardColor1;
            e.fillRect(0, 0, d.width, d.height);
            if (0 < g)
              for (var n = 0; n < d.height; n += 2 * g)
                (e.fillStyle = k),
                  e.fillRect(0, n, g, g),
                  e.fillRect(g, n + g, g, g);
            g = e.createLinearGradient(0, 0, 0, d.height);
            g.addColorStop(0, l);
            g.addColorStop(1, "rgba(0,0,0,0)");
            e.fillStyle = g;
            e.fillRect(0, 0, d.width, d.height);
          };
          return b;
        },
        flags: { leaveValue: 1, leavePreview: 2 },
        enumOpts: {
          format: "auto any hex hexa rgb rgba".split(" "),
          previewPosition: ["left", "right"],
          mode: ["hsv", "hvs", "hs", "hv"],
          position: ["left", "right", "top", "bottom"],
          alphaChannel: ["auto", !0, !1],
        },
        pub: function (b, d, e) {
          function g(c, h) {
            if ("string" !== typeof c)
              throw Error("Invalid value for option name: " + c);
            if (
              v.call(a.enumOpts, c) &&
              ("string" === typeof h && (h = h.toLowerCase()),
              -1 === a.enumOpts[c].indexOf(h))
            )
              throw Error("Option '" + c + "' has invalid value: " + h);
            if (c in f) return (f[c] = h), !0;
            throw Error("Unrecognized configuration option: " + c);
          }
          function k() {
            f._processParentElementsInDOM();
            a.picker ||
              ((a.picker = {
                owner: null,
                wrap: a.createEl("fr-colorpicker"),
                box: a.createEl("div"),
                boxB: a.createEl("div"),
                pad: a.createEl("div"),
                padB: a.createEl("div"),
                padM: a.createEl("div"),
                padCanvas: a.createPadCanvas(),
                cross: a.createEl("div"),
                crossBY: a.createEl("div"),
                crossBX: a.createEl("div"),
                crossLY: a.createEl("div"),
                crossLX: a.createEl("div"),
                sld: a.createEl("div"),
                sldB: a.createEl("div"),
                sldM: a.createEl("div"),
                sldGrad: a.createSliderGradient(),
                sldPtrS: a.createEl("div"),
                sldPtrIB: a.createEl("div"),
                sldPtrMB: a.createEl("div"),
                sldPtrOB: a.createEl("div"),
                asld: a.createEl("div"),
                asldB: a.createEl("div"),
                asldM: a.createEl("div"),
                asldGrad: a.createASliderGradient(),
                asldPtrS: a.createEl("div"),
                asldPtrIB: a.createEl("div"),
                asldPtrMB: a.createEl("div"),
                asldPtrOB: a.createEl("div"),
              }),
              (y = a.attachShadow(a.picker.wrap)),
              a.picker.pad.appendChild(a.picker.padCanvas.elm),
              a.picker.padB.appendChild(a.picker.pad),
              a.picker.cross.appendChild(a.picker.crossBY),
              a.picker.cross.appendChild(a.picker.crossBX),
              a.picker.cross.appendChild(a.picker.crossLY),
              a.picker.cross.appendChild(a.picker.crossLX),
              a.picker.padB.appendChild(a.picker.cross),
              a.picker.box.appendChild(a.picker.padB),
              a.picker.box.appendChild(a.picker.padM),
              a.picker.sld.appendChild(a.picker.sldGrad.elm),
              a.picker.sldB.appendChild(a.picker.sld),
              a.picker.sldB.appendChild(a.picker.sldPtrOB),
              a.picker.sldPtrOB.appendChild(a.picker.sldPtrMB),
              a.picker.sldPtrMB.appendChild(a.picker.sldPtrIB),
              a.picker.sldPtrIB.appendChild(a.picker.sldPtrS),
              a.picker.box.appendChild(a.picker.sldB),
              a.picker.box.appendChild(a.picker.sldM),
              a.picker.asld.appendChild(a.picker.asldGrad.elm),
              a.picker.asldB.appendChild(a.picker.asld),
              a.picker.asldB.appendChild(a.picker.asldPtrOB),
              a.picker.asldPtrOB.appendChild(a.picker.asldPtrMB),
              a.picker.asldPtrMB.appendChild(a.picker.asldPtrIB),
              a.picker.asldPtrIB.appendChild(a.picker.asldPtrS),
              a.picker.box.appendChild(a.picker.asldB),
              a.picker.box.appendChild(a.picker.asldM),
              a.picker.boxB.appendChild(a.picker.box),
              y.appendChild(a.picker.boxB),
              y.addEventListener(
                "touchstart",
                a.onPickerTouchStart,
                a.isPassiveEventSupported ? { passive: !1 } : !1,
              ));
            var c = a.picker,
              h = !!a.getSliderChannel(f),
              q = f.hasAlphaChannel(),
              r = a.getPickerDims(f),
              w =
                2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
              x = a.getControlPadding(f),
              M = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
              F =
                f.padding +
                f.width +
                2 * f.controlBorderWidth +
                x +
                (h ? f.sliderSize + 2 * x + 2 * f.controlBorderWidth : 0);
            c.wrap.className = J;
            c.wrap.style.clear = "both";
            c.wrap.style.display = "block";
            c.wrap.style.visibility = "visible";
            c.wrap.style.opacity = "1";
            c.wrap.style.width = r.borderW + "px";
            c.wrap.style.height = r.borderH + "px";
            c.wrap.style.zIndex = f.zIndex;
            c.box.className = K;
            c.box.style.width = r.paddedW + "px";
            c.box.style.height = r.paddedH + "px";
            c.box.style.position = "relative";
            c.boxB.className = L;
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
            a.setBorderRadius(c.boxB, M + "px");
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
            c.padCanvas.draw(f.width, f.height, a.getPadYChannel(f));
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
              f.padding + 2 * f.controlBorderWidth + f.width + x + "px";
            c.padM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            c.padM.style.cursor = "crosshair";
            a.setData(c.padM, { instance: f, control: "pad" });
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
              f.padding + f.width + 2 * f.controlBorderWidth + 2 * x + "px";
            c.sldB.style.top = f.padding + "px";
            c.sldB.style.setProperty(
              "border",
              f.controlBorderWidth + "px solid " + f.controlBorderColor,
              "important",
            );
            c.sldM.style.display = h ? "block" : "none";
            c.sldM.style.position = "absolute";
            c.sldM.style.left =
              f.padding + f.width + 2 * f.controlBorderWidth + x + "px";
            c.sldM.style.top = "0px";
            c.sldM.style.width =
              f.sliderSize +
              2 * x +
              2 * f.controlBorderWidth +
              (q ? 0 : Math.max(0, f.padding - x)) +
              "px";
            c.sldM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            c.sldM.style.cursor = "default";
            a.setData(c.sldM, { instance: f, control: "sld" });
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
            c.sldPtrS.style.height = a.pub.sliderInnerSpace + "px";
            c.asld.style.overflow = "hidden";
            c.asld.style.width = f.sliderSize + "px";
            c.asld.style.height = f.height + "px";
            c.asldGrad.draw(f.sliderSize, f.height, "#000");
            c.asldB.style.display = q ? "block" : "none";
            c.asldB.style.position = "absolute";
            c.asldB.style.left = F + "px";
            c.asldB.style.top = f.padding + "px";
            c.asldB.style.border = f.controlBorderWidth + "px solid";
            c.asldB.style.setProperty(
              "border-color",
              f.controlBorderColor,
              "important",
            );
            c.asldM.style.display = q ? "block" : "none";
            c.asldM.style.position = "absolute";
            c.asldM.style.left = F + "px";
            c.asldM.style.top = "0px";
            c.asldM.style.width =
              f.sliderSize +
              2 * x +
              2 * f.controlBorderWidth +
              Math.max(0, f.padding - x) +
              "px";
            c.asldM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            c.asldM.style.cursor = "default";
            a.setData(c.asldM, { instance: f, control: "asld" });
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
            c.asldPtrS.style.height = a.pub.sliderInnerSpace + "px";
            l();
            n();
            m();
            a.picker.owner &&
              a.picker.owner !== f &&
              a.removeClass(
                a.picker.owner.targetElement,
                a.pub.activeClassName,
              );
            a.picker.owner = f;
            f.container === p.document.documentElement
              ? a.redrawPosition()
              : a._drawPosition(f, 0, 0, "relative", !1);
            c.wrap.parentNode !== f.container &&
              (h = a.node("dialog[id^='fr-dialog-']")) &&
              (h.appendChild(c.wrap),
              h.hasAttribute("open") && h.close && h.close(),
              (h.inert = !0),
              h.showModal && h.showModal(),
              h.removeAttribute("inert"),
              h.focus());
            a.addClass(f.targetElement, a.pub.activeClassName);
          }
          function l() {
            var c = a.getPadYChannel(f);
            c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
            var h = -Math.floor(
              (2 * f.pointerBorderWidth +
                f.pointerThickness +
                2 * f.crossSize) /
                2,
            );
            a.picker.cross.style.left =
              Math.round((f.channels.h / 360) * (f.width - 1)) + h + "px";
            a.picker.cross.style.top = c + h + "px";
            switch (a.getSliderChannel(f)) {
              case "s":
                c = a.HSV_RGB(f.channels.h, 100, f.channels.v);
                h = a.HSV_RGB(f.channels.h, 0, f.channels.v);
                a.picker.sldGrad.draw(
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
                (c = a.HSV_RGB(f.channels.h, f.channels.s, 100)),
                  a.picker.sldGrad.draw(
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
            a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
          }
          function n() {
            var c = a.getSliderChannel(f);
            c &&
              (a.picker.sldPtrOB.style.top =
                Math.round((1 - f.channels[c] / 100) * (f.height - 1)) -
                (2 * f.pointerBorderWidth + f.pointerThickness) -
                Math.floor(a.pub.sliderInnerSpace / 2) +
                "px");
            a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
          }
          function m() {
            a.picker.asldPtrOB.style.top =
              Math.round((1 - f.channels.a) * (f.height - 1)) -
              (2 * f.pointerBorderWidth + f.pointerThickness) -
              Math.floor(a.pub.sliderInnerSpace / 2) +
              "px";
          }
          function u() {
            return a.picker && a.picker.owner === f;
          }
          function t(c) {
            a.getData(c, "internal") ||
              ((c = f.valueElement.value),
              f.processValueInput(f.valueElement.value),
              a.triggerCallback(f, "onChange"),
              f.valueElement.value !== c &&
                a.triggerInputEvent(f.valueElement, "change", !0, !0));
          }
          function N(c) {
            a.getData(c, "internal") ||
              (f.valueElement &&
                f.fromString(f.valueElement.value, a.flags.leaveValue),
              a.triggerCallback(f, "onInput"));
          }
          var f = this;
          e || (e = {});
          this.configShadow = D = d;
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
            c = a.strList(c);
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
              r && a.triggerCallback(this, r);
              a.triggerInputEvent(this.valueElement, q, !0, !0);
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
            c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
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
            c = a.RGB_HSV(
              null === c ? this.channels.r : c,
              null === h ? this.channels.g : h,
              null === q ? this.channels.b : q,
            );
            null !== c[0] &&
              (this.channels.h = Math.max(0, Math.min(360, c[0])));
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
            c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
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
                this.setPreviewElementBg(null),
                this.setValueElementValue(""),
                !0
              );
            c = a.parseColorString(c);
            if (!c) return !1;
            "any" === this.format.toLowerCase() &&
              (this._setFormat(c.format),
              a.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
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
            return a.hexColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
            );
          };
          this.toHEXAString = function () {
            return a.hexaColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
              this.channels.a,
            );
          };
          this.toRGBString = function () {
            return a.rgbColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
            );
          };
          this.toRGBAString = function () {
            return a.rgbaColor(
              this.channels.r,
              this.channels.g,
              this.channels.b,
              this.channels.a,
            );
          };
          this.hide = function () {
            this.scrollbar &&
              this.scrollbar.removeEventListener(
                "scroll",
                a.onWindowScroll,
                !1,
              );
            u() &&
              (a.removeClass(f.targetElement, a.pub.activeClassName),
              a.picker.wrap &&
                a.picker.wrap.parentNode &&
                a.picker.wrap.parentNode.removeChild(a.picker.wrap),
              delete a.picker.owner);
          };
          this.show = function () {
            k();
            this.scrollbar &&
              this.scrollbar.addEventListener("scroll", a.onWindowScroll, !1);
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
                  a.isAlphaFormat(this.getFormat()) ||
                  "undefined" !== typeof this.alpha
              : this.alphaChannel;
          };
          this.processValueInput = function (c) {
            this.fromString(c) || this.exposeColor();
          };
          this.exposeColor = function (c) {
            var h = this.toString(),
              q = this.getFormat();
            a.setDataAttr(this.targetElement, "current-color", h);
            if (!(c & a.flags.leaveValue) && this.valueElement) {
              if ("hex" === q || "hexa" === q)
                this.uppercase || (h = h.toLowerCase()),
                  this.hash || (h = h.replace(/^#/, ""));
              this.setValueElementValue(h);
            }
            c & a.flags.leavePreview ||
              !this.previewElement ||
              this.setPreviewElementBg(this.toRGBAString());
            u() && (l(), n(), m());
          };
          this.setPreviewElementBg = function (c) {
            if (this.previewElement) {
              var h = null,
                q = null;
              a.isTextInput(this.previewElement) &&
                ((h = this.previewPosition), (q = this.previewSize));
              var r = [];
              r.push({ size: "auto" });
              if (c) {
                var w = a.genColorPreviewCanvas(
                  "rgba(0,0,0,0)",
                  h ? { left: "right", right: "left" }[h] : null,
                  q,
                  !0,
                );
                r.push({ size: w.width + "px " + w.height + "px" });
              }
              w = [];
              for (var x = 0; x < r.length; x += 1) w.push(r[x].size);
              c = {
                "--fr-input-color": c,
                "--fr-input-color-edge": q + "px",
                "--fr-input-color-edge2": q + 1 + "px",
                "--fr-input-gb-size": w.join(", "),
              };
              a.setStyle(this.previewElement, c, !this.forceStyle);
              c = { left: null, right: null };
              h && (c[h] = this.previewSize + this.previewPadding + "px");
              a.setStyle(
                this.previewElement,
                { "--fr-input-padding-left": c.left },
                !this.forceStyle,
                !0,
              );
            }
          };
          this.setValueElementValue = function (c) {
            this.valueElement &&
              ("input" === a.nodeName(this.valueElement)
                ? (this.valueElement.value = c)
                : (this.valueElement.textContent = c));
          };
          this._processParentElementsInDOM = function () {
            if (!this._parentElementsProcessed) {
              this._parentElementsProcessed = !0;
              var c = this.targetElement;
              do {
                var h = a.getCompStyle(c);
                if (
                  (h.position && "fixed" === h.position.toLowerCase()) ||
                  c instanceof ShadowRoot
                )
                  this.fixed = !0;
              } while ((c = c.parentNode) && "body" !== a.nodeName(c));
            }
          };
          this.tryHide = function () {
            this.hideOnLeave && this.hide();
          };
          if (a.pub.options)
            for (var B in a.pub.options)
              if (v.call(a.pub.options, B))
                try {
                  g(B, a.pub.options[B]);
                } catch (c) {
                  console.error(c);
                }
          for (var C in e)
            if (v.call(e, C))
              try {
                g(C, e[C]);
              } catch (c) {
                console.error(c);
              }
          this.configShadow.addEventListener(
            "click",
            a.onConfigIfMouseDown,
            !1,
          );
          this.container =
            "undefined" === typeof this.container
              ? p.document.documentElement
              : a.node(this.container);
          if (!this.container) throw Error("No container element");
          this.targetElement = a.node(b);
          if (!this.targetElement) throw Error("No target element");
          if (
            this.targetElement.frcp &&
            this.targetElement.frcp instanceof a.pub
          )
            throw Error("Redundant Fr-Color-picker");
          this.targetElement.frcp = this;
          a.addClass(this.targetElement, a.pub.className);
          a.instances.push(this);
          "undefined" === typeof this.valueElement
            ? a.isTextInput(this.targetElement) &&
              (this.valueElement = this.targetElement)
            : null !== this.valueElement &&
              (this.valueElement = a.node(this.valueElement));
          "undefined" === typeof this.previewElement
            ? (this.previewElement = this.targetElement)
            : null !== this.previewElement &&
              (this.previewElement = a.node(this.previewElement));
          this.valueElement &&
            a.isTextInput(this.valueElement) &&
            ((b = this.valueElement.oninput),
            (this.valueElement.oninput = null),
            this.valueElement.addEventListener("change", t, !1),
            this.valueElement.addEventListener("input", N, !1),
            b && this.valueElement.addEventListener("input", b, !1),
            this.valueElement.setAttribute("autocomplete", "off"),
            this.valueElement.setAttribute("autocorrect", "off"),
            this.valueElement.setAttribute("autocapitalize", "off"),
            this.valueElement.setAttribute("spellcheck", !1));
          b = "FFFFFF";
          "undefined" !== typeof this.value
            ? (b = this.value)
            : this.valueElement &&
              "undefined" !== typeof this.valueElement.value &&
              (b = this.valueElement.value);
          this._currentFormat = null;
          -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
            ? (this._currentFormat = (d = a.parseColorString(b))
                ? d.format
                : "hex")
            : (this._currentFormat = this.format.toLowerCase());
          this.processValueInput(b);
        },
      };
      a.pub.className = H;
      a.pub.activeClassName = I;
      a.pub.looseJSON = !0;
      a.pub.sliderInnerSpace = 3;
      a.pub.chessboardSize = 8;
      a.pub.chessboardColor1 = "#666666";
      a.pub.chessboardColor2 = "#999999";
      a.pub.init = function () {
        if (!a.initialized) {
          p.addEventListener("resize", a.onWindowResize, !1);
          p.addEventListener("scroll", a.onWindowScroll, !1);
          a.initialized = !0;
          for (var b; (b = a.readyQueue.shift()); ) b();
        }
      };
      a.pub.ready = function (b) {
        if ("function" !== typeof b) return !1;
        a.initialized ? b() : a.readyQueue.push(b);
        return !0;
      };
      a.pub.trigger = function (b) {
        var d = function () {
          a.triggerGlobal(b);
        };
        a.initialized ? d() : a.pub.ready(d);
      };
      a.pub.hide = function () {
        a.picker && a.picker.owner && a.picker.owner.hide();
      };
      a.pub.options = {};
      a.register();
      return a.pub;
    })();
  "undefined" === typeof p.FRColorPicker && (p.FRColorPicker = G);
  return G;
});
