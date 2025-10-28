// ==UserScript==
// @name        frColorPicker
// @version     7.4.2
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

(function (p, D) {
  return D(p, {
    hOP: Object.prototype.hasOwnProperty,
    aS: Element.prototype.attachShadow,
    uAS: function (x, A, v) {
      try {
        if (
          !x.adoptedStyleSheets ||
          "function" !== typeof x.adoptedStyleSheets.push
        )
          throw Error("use inlineStyle");
        var B = new CSSStyleSheet();
        (B.id = v) && B.replaceSync(A);
        !Array.from(x.adoptedStyleSheets).some(function (w) {
          return w.id === v;
        }) && x.adoptedStyleSheets.push(B);
      } catch (w) {
        this.iS(x, A, v, w);
      }
    },
    iS: function (x, A, v, B) {
      try {
        if (!x.querySelectorAll("style#" + v)) {
          var w = document.createElement("style");
          w.id = v;
          w.media = "all";
          w.textContent = A;
          x.prepend(w);
        }
      } catch (C) {
        console.error(C.name + "in UAS:", C.message, B.message);
      }
    },
  });
})("undefined" !== typeof window ? window : this, function (p, D) {
  var x,
    A = (function () {
      var v = D.hOP,
        B = D.aS,
        w = function (b) {
          var c = Math.random().toString(36).slice(2);
          return (
            c
              .slice(0, b - 4)
              .padEnd(b - 3, Math.random().toString(36).slice(2)) +
            "." +
            c.slice(-3)
          );
        },
        C = null,
        H = w(9),
        I = w(8),
        J = w(12),
        K = w(8),
        L = w(7);
      a: {
        try {
          p.addEventListener("testPassive", null, { passive: !0 }),
            p.removeEventListener("testPassive", null, { passive: !0 });
        } catch (b) {
          w = !1;
          break a;
        }
        w = !0;
      }
      var a = {
        initialized: !1,
        instances: [],
        readyQueue: [],
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
          for (var b = [], c = 0; c < a.instances.length; c += 1)
            a.instances[c] &&
              a.instances[c].targetElement &&
              b.push(a.instances[c]);
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
            var c = null;
            try {
              c = p.document.querySelector(b) || C.querySelector(b);
            } catch (e) {
              return null;
            }
            return c;
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
        isPassiveEventSupported: w,
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
            var c = arguments[1],
              e;
            for (e in c) v.call(c, e) && (b[e] = c[e]);
            return !0;
          }
          throw Error("Invalid arguments");
        },
        getData: function (b, c, e) {
          if (!v.call(b, a.dataProp))
            if ("undefined" !== typeof e) b[a.dataProp] = {};
            else return;
          b = b[a.dataProp];
          v.call(b, c) || "undefined" === typeof e || (b[c] = e);
          return b[c];
        },
        setDataAttr: function (b, c, e) {
          b.setAttribute("data-" + c, e);
        },
        _attachedGroupEvents: {},
        attachGroupEvent: function (b, c, e, g) {
          v.call(a._attachedGroupEvents, b) || (a._attachedGroupEvents[b] = []);
          a._attachedGroupEvents[b].push([c, e, g]);
          c.addEventListener(e, g, !1);
        },
        detachGroupEvents: function (b) {
          if (v.call(a._attachedGroupEvents, b)) {
            for (var c = 0; c < a._attachedGroupEvents[b].length; c += 1) {
              var e = a._attachedGroupEvents[b][c];
              e[0].removeEventListener(e[1], e[2], !1);
            }
            delete a._attachedGroupEvents[b];
          }
        },
        preventDefault: function (b) {
          b.preventDefault && b.preventDefault();
          b.returnValue = !1;
        },
        triggerEvent: function (b, c, e, g) {
          if (b) {
            if ("function" === typeof Event)
              var k = new Event(c, { bubbles: e, cancelable: g });
            else (k = p.document.createEvent("Event")), k.initEvent(c, e, g);
            if (!k) return !1;
            a.setData(k, "internal", !0);
            b.dispatchEvent(k);
            return !0;
          }
        },
        triggerInputEvent: function (b, c, e, g) {
          b && a.isTextInput(b) && a.triggerEvent(b, c, e, g);
        },
        strList: function (b) {
          return b ? b.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
        },
        hasClass: function (b, c) {
          return c
            ? "undefined" !== typeof b.classList
              ? b.classList.contains(c)
              : -1 !==
                (" " + b.className.replace(/\s+/g, " ") + " ").indexOf(
                  " " + c + " ",
                )
            : !1;
        },
        addClass: function (b, c) {
          c = a.strList(c);
          if ("undefined" !== typeof b.classList)
            for (var e = 0; e < c.length; e += 1) b.classList.add(c[e]);
          else
            for (e = 0; e < c.length; e += 1)
              a.hasClass(b, c[e]) ||
                (b.className += (b.className ? " " : "") + c[e]);
        },
        removeClass: function (b, c) {
          c = a.strList(c);
          if ("undefined" !== typeof b.classList)
            for (var e = 0; e < c.length; e += 1) b.classList.remove(c[e]);
          else
            for (e = 0; e < c.length; e += 1)
              b.className = b.className.replace(
                new RegExp(
                  "^\\s*" +
                    c[e] +
                    "\\s*|\\s*" +
                    c[e] +
                    "\\s*$|\\s+" +
                    c[e] +
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
        setStyle: function (b, c, e, g) {
          e = e ? "important" : "";
          var k = null,
            l;
          for (l in c)
            if (v.call(c, l)) {
              var n = null;
              null === c[l]
                ? (k || (k = a.getData(b, "origStyle")),
                  k && v.call(k, l) && (n = k[l]))
                : (g &&
                    (k || (k = a.getData(b, "origStyle", {})),
                    v.call(k, l) || (k[l] = b.style[l])),
                  (n = c[l]));
              null !== n && b.style.setProperty(l, n, e);
            }
        },
        hexColor: function (b, c, e) {
          return (
            "#" +
            (
              ("0" + Math.round(b).toString(16)).slice(-2) +
              ("0" + Math.round(c).toString(16)).slice(-2) +
              ("0" + Math.round(e).toString(16)).slice(-2)
            ).toUpperCase()
          );
        },
        hexaColor: function (b, c, e, g) {
          b =
            "#" +
            ("0" + Math.round(b).toString(16)).slice(-2) +
            ("0" + Math.round(c).toString(16)).slice(-2);
          b +=
            ("0" + Math.round(e).toString(16)).slice(-2) +
            ("0" + Math.round(255 * g).toString(16)).slice(-2);
          return b.toUpperCase();
        },
        rgbColor: function (b, c, e) {
          return (
            "rgb(" +
            Math.round(b) +
            "," +
            Math.round(c) +
            "," +
            Math.round(e) +
            ")"
          );
        },
        rgbaColor: function (b, c, e, g) {
          return (
            "rgba(" +
            Math.round(b) +
            "," +
            Math.round(c) +
            "," +
            Math.round(e) +
            "," +
            Math.round(100 * ("undefined" === typeof g || null === g ? 1 : g)) /
              100 +
            ")"
          );
        },
        setBorderRadius: function (b, c) {
          a.setStyle(b, { "border-radius": c || "0" });
        },
        getElementPos: function (b, c) {
          var e = p.frDOMRects;
          "undefined" === typeof e && (e = { toggle: !1, cur: 1, prev: 1 });
          e = e.toggle ? e.cur : 1;
          var g = b.getBoundingClientRect();
          b = g.left * e;
          g = g.top * e;
          c || ((c = a.getViewPos()), (b += c[0] * e), (g += c[1] * e));
          return [b, g];
        },
        getElementSize: function (b) {
          return [b.offsetWidth, b.offsetHeight];
        },
        getAbsPointerPos: function (b) {
          var c = p.frDOMRects;
          "undefined" === typeof c && (c = { toggle: !1, cur: 1, prev: 1 });
          var e = 0,
            g = 0;
          "undefined" !== typeof b.changedTouches && b.changedTouches.length
            ? ((e = b.changedTouches[0].x * c.cur),
              (g = b.changedTouches[0].y * c.cur))
            : "number" === typeof b.x && ((e = b.x * c.cur), (g = b.y * c.cur));
          return { x: e, y: g };
        },
        getRelPointerPos: function (b) {
          var c = p.frDOMRects;
          "undefined" === typeof c && (c = { toggle: !1, cur: 1, prev: 1 });
          var e = (b.target || b.srcElement).getBoundingClientRect(),
            g = c.toggle ? c.cur : 1,
            k = 0,
            l = 0;
          "undefined" !== typeof b.changedTouches && b.changedTouches.length
            ? ((k = b.changedTouches[0].x * c.cur),
              (l = b.changedTouches[0].y * c.cur))
            : "number" === typeof b.x && ((k = b.x * c.cur), (l = b.y * c.cur));
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
        RGB_HSV: function (b, c, e) {
          b /= 255;
          c /= 255;
          e /= 255;
          var g = Math.min(Math.min(b, c), e),
            k = Math.max(Math.max(b, c), e),
            l = k - g;
          if (0 === l) return [null, 0, 100 * k];
          b =
            b === g
              ? 3 + (e - c) / l
              : c === g
                ? 5 + (b - e) / l
                : 1 + (c - b) / l;
          return [60 * (6 === b ? 0 : b), (l / k) * 100, 100 * k];
        },
        HSV_RGB: function (b, c, e) {
          e = (e / 100) * 255;
          if (null === b) return [e, e, e];
          b /= 60;
          c /= 100;
          var g = Math.floor(b),
            k = e * (1 - c);
          b = e * (1 - c * (g % 2 ? b - g : 1 - (b - g)));
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
          var c,
            e = { rgba: null, format: null };
          if (/^currentcolor$/i.test(b))
            return { format: "hexa", rgba: [255, 255, 255, 1] };
          if ((c = b.match(/^\W*([0-9A-F]{3,8})\W*$/i))) {
            switch (c[1].length) {
              case 8:
                e.format = "hexa";
                e.rgba = [
                  parseInt(c[1].slice(0, 2), 16),
                  parseInt(c[1].slice(2, 4), 16),
                  parseInt(c[1].slice(4, 6), 16),
                  parseInt(c[1].slice(6, 8), 16) / 255,
                ];
                break;
              case 4:
                e.format = "hexa";
                e.rgba = [
                  parseInt(c[1].charAt(0) + c[1].charAt(0), 16),
                  parseInt(c[1].charAt(1) + c[1].charAt(1), 16),
                  parseInt(c[1].charAt(2) + c[1].charAt(2), 16),
                  parseInt(c[1].charAt(3) + c[1].charAt(3), 16) / 255,
                ];
                break;
              case 6:
                e.format = "hex";
                e.rgba = [
                  parseInt(c[1].slice(0, 2), 16),
                  parseInt(c[1].slice(2, 4), 16),
                  parseInt(c[1].slice(4, 6), 16),
                  1,
                ];
                break;
              case 3:
                e.format = "hex";
                e.rgba = [
                  parseInt(c[1].charAt(0) + c[1].charAt(0), 16),
                  parseInt(c[1].charAt(1) + c[1].charAt(1), 16),
                  parseInt(c[1].charAt(2) + c[1].charAt(2), 16),
                  1,
                ];
                break;
              default:
                return !1;
            }
            return e;
          }
          if ((c = b.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
            b = c[1].split(",");
            c = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
            var g, k, l, n;
            if (
              3 <= b.length &&
              (g = b[0].match(c)) &&
              (k = b[1].match(c)) &&
              (l = b[2].match(c))
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
                  (n = b[3].match(c)) &&
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
          var c = p.devicePixelRatio || 1;
          b.width *= c;
          b.height *= c;
          b.getContext("2d").scale(c, c);
        },
        genColorPreviewCanvas: function (b, c, e, g) {
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
          switch (c) {
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
              var c = a.getElementPos(b.targetElement, !0);
              var e = [0, 0];
            } else (c = a.getElementPos(b.targetElement)), (e = a.getViewPos());
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
            c = b.smartPosition
              ? [
                  -e[l] + c[l] + n[l] > k[l]
                    ? -e[l] + c[l] + g[l] / 2 > k[l] / 2 &&
                      0 <= c[l] + g[l] - n[l]
                      ? c[l] + g[l] - n[l]
                      : c[l]
                    : c[l],
                  -e[m] + c[m] + g[m] + n[m] - t + t * u > k[m]
                    ? -e[m] + c[m] + g[m] / 2 > k[m] / 2 &&
                      0 <= c[m] + g[m] - t - t * u
                      ? c[m] + g[m] - t - t * u - 4
                      : c[m] + g[m] - t + t * u + 4
                    : 0 <= c[m] + g[m] - t + t * u
                      ? c[m] + g[m] - t + t * u - 4
                      : c[m] + g[m] - t - t * u + 4,
                ]
              : [c[l], c[m] + g[m] - t + t * u - 4];
            a._drawPosition(c[l], c[m], b.fixed ? "fixed" : "absolute");
          }
        },
        _drawPosition: function (b, c, e) {
          a.picker.wrap.style.left = b + "px";
          a.picker.wrap.style.top = c + "px";
          a.picker.wrap.style.position = e;
        },
        getPickerDims: function (b) {
          var c = 2 * b.controlBorderWidth + b.width,
            e = 2 * b.controlBorderWidth + b.height,
            g =
              2 * b.controlBorderWidth +
              2 * a.getControlPadding(b) +
              b.sliderSize;
          a.getSliderChannel(b) && (c += g);
          b.hasAlphaChannel() && (c += g);
          g = c + 2 * b.padding;
          var k = e + 2 * b.padding;
          return {
            contentW: c,
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
        triggerCallback: function (b, c) {
          if (b[c]) {
            var e = null;
            if ("string" === typeof b[c])
              try {
                e = new Function(b[c]);
              } catch (g) {
                console.error(g);
              }
            else e = b[c];
            e && e.call(b);
          }
        },
        triggerGlobal: function (b) {
          for (var c = a.getInstances(), e = 0; e < c.length; e += 1)
            c[e].trigger(b);
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
            b.composedPath().find(function (c) {
              return (
                "INPUT" === c.nodeName && c.hasAttribute("data-current-color")
              );
            }) ||
            b.target ||
            b.srcElement;
          b.frcp && b.frcp instanceof a.pub
            ? b.frcp.showOnClick &&
              !b.disabled &&
              (a.picker && a.picker.owner
                ? (a.picker.owner.tryHide(),
                  x.removeEventListener("mousedown", a.onDocumentMouseDown, !1))
                : (b.frcp.show(),
                  x.addEventListener("mousedown", a.onDocumentMouseDown, !1)))
            : a.picker &&
              a.picker.owner &&
              (a.picker.owner.tryHide(),
              x.removeEventListener("mousedown", a.onDocumentMouseDown, !1));
        },
        onDocumentMouseDown: function (b) {
          var c = b.target || b.srcElement;
          if (!c || !c.nodeName || "fr-configure" !== c.nodeName.toLowerCase())
            if (a.getData(c, "gui")) {
              if (a.getData(c, "control"))
                a.onControlPointerStart(b, c, a.getData(c, "control"), "mouse");
            } else
              a.picker &&
                a.picker.owner &&
                (a.picker.owner.tryHide(),
                x.removeEventListener("mousedown", a.onDocumentMouseDown, !1));
        },
        onPickerTouchStart: function (b) {
          var c = b.target || b.srcElement;
          if (a.getData(c, "control"))
            a.onControlPointerStart(b, c, a.getData(c, "control"), "touch");
        },
        onControlPointerStart: function (b, c, e, g) {
          var k = a.getData(c, "instance");
          a.preventDefault(b);
          var l = function (u, t) {
            a.attachGroupEvent(
              "drag",
              u,
              a._pointerMoveEvent[g],
              a.onDocumentPointerMove(b, c, e, g, t),
            );
            a.attachGroupEvent(
              "drag",
              u,
              a._pointerEndEvent[g],
              a.onDocumentPointerEnd(b, c, e, g),
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
        onDocumentPointerMove: function (b, c, e, g, k) {
          return function (l) {
            var n = a.getData(c, "instance");
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
        onDocumentPointerEnd: function (b, c, e, g) {
          return function (k) {
            k = a.getData(c, "instance");
            a.detachGroupEvents("drag");
            k.trigger("input");
            k.trigger("change");
          };
        },
        setPad: function (b, c, e, g) {
          c = a.getAbsPointerPos(c);
          e =
            (360 / (b.width - 1)) *
            (e + c.x - a._pointerOrigin.x - b.padding - b.controlBorderWidth);
          g =
            100 -
            (100 / (b.height - 1)) *
              (g + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          switch (a.getPadYChannel(b)) {
            case "s":
              b.fromHSVA(e, g, null, null);
              break;
            case "v":
              b.fromHSVA(e, null, g, null);
          }
        },
        setSld: function (b, c, e) {
          c = a.getAbsPointerPos(c);
          e =
            100 -
            (100 / (b.height - 1)) *
              (e + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          switch (a.getSliderChannel(b)) {
            case "s":
              b.fromHSVA(null, e, null, null);
              break;
            case "v":
              b.fromHSVA(null, null, e, null);
          }
        },
        setASld: function (b, c, e) {
          c = a.getAbsPointerPos(c);
          e =
            1 -
            (1 / (b.height - 1)) *
              (e + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
          1 > e &&
            ((c = b.getFormat()),
            "any" !== b.format.toLowerCase() ||
              a.isAlphaFormat(c) ||
              b._setFormat("hex" === c ? "hexa" : "rgba"));
          b.fromHSVA(null, null, null, e);
        },
        createPadCanvas: function () {
          var b = { elm: null, draw: null },
            c = a.createEl("canvas"),
            e = c.getContext("2d");
          b.elm = c;
          b.draw = function (g, k, l) {
            c.width = g;
            c.height = k;
            e.clearRect(0, 0, c.width, c.height);
            g = e.createLinearGradient(0, 0, c.width, 0);
            g.addColorStop(0, "#F00");
            g.addColorStop(1 / 6, "#FF0");
            g.addColorStop(2 / 6, "#0F0");
            g.addColorStop(0.5, "#0FF");
            g.addColorStop(4 / 6, "#00F");
            g.addColorStop(5 / 6, "#F0F");
            g.addColorStop(1, "#F00");
            e.fillStyle = g;
            e.fillRect(0, 0, c.width, c.height);
            g = e.createLinearGradient(0, 0, 0, c.height);
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
            e.fillRect(0, 0, c.width, c.height);
          };
          return b;
        },
        createSliderGradient: function () {
          var b = { elm: null, draw: null },
            c = a.createEl("canvas"),
            e = c.getContext("2d");
          b.elm = c;
          b.draw = function (g, k, l, n) {
            c.width = g;
            c.height = k;
            e.clearRect(0, 0, c.width, c.height);
            g = e.createLinearGradient(0, 0, 0, c.height);
            g.addColorStop(0, l);
            g.addColorStop(1, n);
            e.fillStyle = g;
            e.fillRect(0, 0, c.width, c.height);
          };
          return b;
        },
        createASliderGradient: function () {
          var b = { elm: null, draw: null },
            c = a.createEl("canvas"),
            e = c.getContext("2d");
          b.elm = c;
          b.draw = function (g, k, l) {
            c.width = g;
            c.height = k;
            e.clearRect(0, 0, c.width, c.height);
            g = c.width / 2;
            k = a.pub.chessboardColor2;
            e.fillStyle = a.pub.chessboardColor1;
            e.fillRect(0, 0, c.width, c.height);
            if (0 < g)
              for (var n = 0; n < c.height; n += 2 * g)
                (e.fillStyle = k),
                  e.fillRect(0, n, g, g),
                  e.fillRect(g, n + g, g, g);
            g = e.createLinearGradient(0, 0, 0, c.height);
            g.addColorStop(0, l);
            g.addColorStop(1, "rgba(0,0,0,0)");
            e.fillStyle = g;
            e.fillRect(0, 0, c.width, c.height);
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
        pub: function (b, c, e) {
          function g(d, h) {
            if ("string" !== typeof d)
              throw Error("Invalid value for option name: " + d);
            if (
              v.call(a.enumOpts, d) &&
              ("string" === typeof h && (h = h.toLowerCase()),
              -1 === a.enumOpts[d].indexOf(h))
            )
              throw Error("Option '" + d + "' has invalid value: " + h);
            if (d in f) return (f[d] = h), !0;
            throw Error("Unrecognized configuration option: " + d);
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
              (x = B.call(a.picker.wrap, { mode: "closed" })),
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
              x.appendChild(a.picker.boxB),
              x.addEventListener(
                "touchstart",
                a.onPickerTouchStart,
                a.isPassiveEventSupported ? { passive: !1 } : !1,
              ));
            var d = a.picker,
              h = !!a.getSliderChannel(f),
              q = f.hasAlphaChannel(),
              r = a.getPickerDims(f),
              y =
                2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
              z = a.getControlPadding(f),
              M = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
              G =
                f.padding +
                f.width +
                2 * f.controlBorderWidth +
                z +
                (h ? f.sliderSize + 2 * z + 2 * f.controlBorderWidth : 0);
            d.wrap.className = J;
            d.wrap.style.clear = "both";
            d.wrap.style.display = "block";
            d.wrap.style.visibility = "visible";
            d.wrap.style.opacity = "1";
            d.wrap.style.width = r.borderW + "px";
            d.wrap.style.height = r.borderH + "px";
            d.wrap.style.zIndex = f.zIndex;
            d.box.className = K;
            d.box.style.width = r.paddedW + "px";
            d.box.style.height = r.paddedH + "px";
            d.box.style.position = "relative";
            d.boxB.className = L;
            d.boxB.style.position = "relative";
            d.boxB.style.setProperty(
              "border",
              f.borderWidth + "px solid " + f.borderColor,
              "important",
            );
            d.boxB.style.setProperty(
              "background",
              f.backgroundColor,
              "important",
            );
            a.setBorderRadius(d.boxB, M + "px");
            d.padM.style.background = "rgba(255,0,0,.2)";
            d.sldM.style.background = "rgba(0,255,0,.2)";
            d.asldM.style.background = "rgba(0,0,255,.2)";
            d.padM.style.opacity =
              d.sldM.style.opacity =
              d.asldM.style.opacity =
                "0";
            d.pad.style.position = "relative";
            d.pad.style.width = f.width + "px";
            d.pad.style.height = f.height + "px";
            d.padCanvas.draw(f.width, f.height, a.getPadYChannel(f));
            d.padB.style.position = "absolute";
            d.padB.style.left = f.padding + "px";
            d.padB.style.top = f.padding + "px";
            d.padB.style.border = f.controlBorderWidth + "px solid";
            d.padB.style.setProperty(
              "border-color",
              f.controlBorderColor,
              "important",
            );
            d.padM.style.position = "absolute";
            d.padM.style.left = "0px";
            d.padM.style.top = "0px";
            d.padM.style.width =
              f.padding + 2 * f.controlBorderWidth + f.width + z + "px";
            d.padM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            d.padM.style.cursor = "crosshair";
            a.setData(d.padM, { instance: f, control: "pad" });
            d.cross.style.position = "absolute";
            d.cross.style.left = d.cross.style.top = "0";
            d.cross.style.width = d.cross.style.height = y + "px";
            d.crossBY.style.position = d.crossBX.style.position = "absolute";
            d.crossBY.style.setProperty(
              "background",
              f.pointerBorderColor,
              "important",
            );
            d.crossBX.style.setProperty(
              "background",
              f.pointerBorderColor,
              "important",
            );
            d.crossBY.style.width = d.crossBX.style.height =
              2 * f.pointerBorderWidth + f.pointerThickness + "px";
            d.crossBY.style.height = d.crossBX.style.width = y + "px";
            d.crossBY.style.left = d.crossBX.style.top =
              Math.floor(y / 2) -
              Math.floor(f.pointerThickness / 2) -
              f.pointerBorderWidth +
              "px";
            d.crossBY.style.top = d.crossBX.style.left = "0";
            d.crossLY.style.position = d.crossLX.style.position = "absolute";
            d.crossLY.style.setProperty(
              "background",
              f.pointerColor,
              "important",
            );
            d.crossLX.style.setProperty(
              "background",
              f.pointerColor,
              "important",
            );
            d.crossLY.style.height = d.crossLX.style.width =
              y - 2 * f.pointerBorderWidth + "px";
            d.crossLY.style.width = d.crossLX.style.height =
              f.pointerThickness + "px";
            d.crossLY.style.left = d.crossLX.style.top =
              Math.floor(y / 2) - Math.floor(f.pointerThickness / 2) + "px";
            d.crossLY.style.top = d.crossLX.style.left =
              f.pointerBorderWidth + "px";
            d.sld.style.overflow = "hidden";
            d.sld.style.width = f.sliderSize + "px";
            d.sld.style.height = f.height + "px";
            d.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
            d.sldB.style.display = h ? "block" : "none";
            d.sldB.style.position = "absolute";
            d.sldB.style.left =
              f.padding + f.width + 2 * f.controlBorderWidth + 2 * z + "px";
            d.sldB.style.top = f.padding + "px";
            d.sldB.style.setProperty(
              "border",
              f.controlBorderWidth + "px solid " + f.controlBorderColor,
              "important",
            );
            d.sldM.style.display = h ? "block" : "none";
            d.sldM.style.position = "absolute";
            d.sldM.style.left =
              f.padding + f.width + 2 * f.controlBorderWidth + z + "px";
            d.sldM.style.top = "0px";
            d.sldM.style.width =
              f.sliderSize +
              2 * z +
              2 * f.controlBorderWidth +
              (q ? 0 : Math.max(0, f.padding - z)) +
              "px";
            d.sldM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            d.sldM.style.cursor = "default";
            a.setData(d.sldM, { instance: f, control: "sld" });
            d.sldPtrIB.style.setProperty(
              "border",
              f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
              "important",
            );
            d.sldPtrOB.style.setProperty(
              "border",
              f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
              "important",
            );
            d.sldPtrOB.style.position = "absolute";
            d.sldPtrOB.style.left =
              -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
            d.sldPtrOB.style.top = "0";
            d.sldPtrMB.style.setProperty(
              "border",
              f.pointerThickness + "px solid " + f.pointerColor,
              "important",
            );
            d.sldPtrS.style.width = f.sliderSize + "px";
            d.sldPtrS.style.height = a.pub.sliderInnerSpace + "px";
            d.asld.style.overflow = "hidden";
            d.asld.style.width = f.sliderSize + "px";
            d.asld.style.height = f.height + "px";
            d.asldGrad.draw(f.sliderSize, f.height, "#000");
            d.asldB.style.display = q ? "block" : "none";
            d.asldB.style.position = "absolute";
            d.asldB.style.left = G + "px";
            d.asldB.style.top = f.padding + "px";
            d.asldB.style.border = f.controlBorderWidth + "px solid";
            d.asldB.style.setProperty(
              "border-color",
              f.controlBorderColor,
              "important",
            );
            d.asldM.style.display = q ? "block" : "none";
            d.asldM.style.position = "absolute";
            d.asldM.style.left = G + "px";
            d.asldM.style.top = "0px";
            d.asldM.style.width =
              f.sliderSize +
              2 * z +
              2 * f.controlBorderWidth +
              Math.max(0, f.padding - z) +
              "px";
            d.asldM.style.height =
              2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
            d.asldM.style.cursor = "default";
            a.setData(d.asldM, { instance: f, control: "asld" });
            d.asldPtrIB.style.setProperty(
              "border",
              f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
              "important",
            );
            d.asldPtrOB.style.setProperty(
              "border",
              f.pointerBorderWidth + "px solid " + f.pointerBorderColor,
              "important",
            );
            d.asldPtrOB.style.position = "absolute";
            d.asldPtrOB.style.left =
              -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
            d.asldPtrOB.style.top = "0";
            d.asldPtrMB.style.setProperty(
              "border",
              f.pointerThickness + "px solid " + f.pointerColor,
              "important",
            );
            d.asldPtrS.style.width = f.sliderSize + "px";
            d.asldPtrS.style.height = a.pub.sliderInnerSpace + "px";
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
            d.wrap.parentNode !== f.container &&
              (h = a.node("dialog[id^='fr-dialog-']")) &&
              (h.appendChild(d.wrap),
              h.hasAttribute("open") && h.close && h.close(),
              (h.inert = !0),
              h.showModal && h.showModal(),
              h.removeAttribute("inert"),
              h.focus());
            a.addClass(f.targetElement, a.pub.activeClassName);
          }
          function l() {
            var d = a.getPadYChannel(f);
            d = Math.round((1 - f.channels[d] / 100) * (f.height - 1));
            var h = -Math.floor(
              (2 * f.pointerBorderWidth +
                f.pointerThickness +
                2 * f.crossSize) /
                2,
            );
            a.picker.cross.style.left =
              Math.round((f.channels.h / 360) * (f.width - 1)) + h + "px";
            a.picker.cross.style.top = d + h + "px";
            switch (a.getSliderChannel(f)) {
              case "s":
                d = a.HSV_RGB(f.channels.h, 100, f.channels.v);
                h = a.HSV_RGB(f.channels.h, 0, f.channels.v);
                a.picker.sldGrad.draw(
                  f.sliderSize,
                  f.height,
                  "rgb(" +
                    Math.round(d[0]) +
                    "," +
                    Math.round(d[1]) +
                    "," +
                    Math.round(d[2]) +
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
                (d = a.HSV_RGB(f.channels.h, f.channels.s, 100)),
                  a.picker.sldGrad.draw(
                    f.sliderSize,
                    f.height,
                    "rgb(" +
                      Math.round(d[0]) +
                      "," +
                      Math.round(d[1]) +
                      "," +
                      Math.round(d[2]) +
                      ")",
                    "#000",
                  );
            }
            a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
          }
          function n() {
            var d = a.getSliderChannel(f);
            d &&
              (a.picker.sldPtrOB.style.top =
                Math.round((1 - f.channels[d] / 100) * (f.height - 1)) -
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
          function t(d) {
            a.getData(d, "internal") ||
              ((d = f.valueElement.value),
              f.processValueInput(f.valueElement.value),
              a.triggerCallback(f, "onChange"),
              f.valueElement.value !== d &&
                a.triggerInputEvent(f.valueElement, "change", !0, !0));
          }
          function N(d) {
            a.getData(d, "internal") ||
              (f.valueElement &&
                f.fromString(f.valueElement.value, a.flags.leaveValue),
              a.triggerCallback(f, "onInput"));
          }
          var f = this;
          e || (e = {});
          this.configShadow = C = c;
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
                var d = arguments[0];
                if ("string" !== typeof d)
                  throw Error("Invalid value for option name: " + d);
                if (d in f) var h = f[d];
                else throw Error("Unrecognized configuration option: " + d);
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
                d = !0;
                for (var q in h)
                  if (v.call(h, q))
                    try {
                      g(q, h[q]) || (d = !1);
                    } catch (r) {
                      d = !1;
                    }
                this.redraw();
                this.exposeColor();
                return d;
              }
            }
            throw Error("Invalid arguments");
          };
          this.channel = function (d, h) {
            if ("string" !== typeof d)
              throw Error("Invalid value for channel name: " + d);
            if ("undefined" === typeof h)
              return v.call(this.channels, d.toLowerCase())
                ? this.channels[d.toLowerCase()]
                : !1;
            switch (d.toLowerCase()) {
              case "r":
                d = this.fromRGBA(h, null, null, null);
                break;
              case "g":
                d = this.fromRGBA(null, h, null, null);
                break;
              case "b":
                d = this.fromRGBA(null, null, h, null);
                break;
              case "h":
                d = this.fromHSVA(h, null, null, null);
                break;
              case "s":
                d = this.fromHSVA(null, h, null, null);
                break;
              case "v":
                d = this.fromHSVA(null, null, h, null);
                break;
              case "a":
                d = this.fromHSVA(null, null, null, h);
                break;
              default:
                return !1;
            }
            return d ? (this.redraw(), !0) : !1;
          };
          this.trigger = function (d) {
            d = a.strList(d);
            for (var h = 0; h < d.length; h += 1) {
              var q = d[h].toLowerCase(),
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
          this.fromHSVA = function (d, h, q, r, y) {
            "undefined" === typeof d && (d = null);
            "undefined" === typeof h && (h = null);
            "undefined" === typeof q && (q = null);
            "undefined" === typeof r && (r = null);
            if (null !== d) {
              if (isNaN(d)) return !1;
              this.channels.h = Math.max(0, Math.min(360, d));
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
            d = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
            this.channels.r = d[0];
            this.channels.g = d[1];
            this.channels.b = d[2];
            this.exposeColor(y);
            return !0;
          };
          this.fromRGBA = function (d, h, q, r, y) {
            "undefined" === typeof d && (d = null);
            "undefined" === typeof h && (h = null);
            "undefined" === typeof q && (q = null);
            "undefined" === typeof r && (r = null);
            if (null !== d) {
              if (isNaN(d)) return !1;
              d = Math.max(0, Math.min(255, d));
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
            d = a.RGB_HSV(
              null === d ? this.channels.r : d,
              null === h ? this.channels.g : h,
              null === q ? this.channels.b : q,
            );
            null !== d[0] &&
              (this.channels.h = Math.max(0, Math.min(360, d[0])));
            0 !== d[2] &&
              (this.channels.s = Math.max(
                0,
                this.minS,
                Math.min(100, this.maxS, d[1]),
              ));
            this.channels.v = Math.max(
              0,
              this.minV,
              Math.min(100, this.maxV, d[2]),
            );
            d = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
            this.channels.r = d[0];
            this.channels.g = d[1];
            this.channels.b = d[2];
            this.exposeColor(y);
            return !0;
          };
          this.fromHSV = function (d, h, q, r) {
            return this.fromHSVA(d, h, q, null, r);
          };
          this.fromRGB = function (d, h, q, r) {
            return this.fromRGBA(d, h, q, null, r);
          };
          this.fromString = function (d, h) {
            if (!this.required && "" === d.trim())
              return (
                this.setPreviewElementBg(null),
                this.setValueElementValue(""),
                !0
              );
            d = a.parseColorString(d);
            if (!d) return !1;
            "any" === this.format.toLowerCase() &&
              (this._setFormat(d.format),
              a.isAlphaFormat(this.getFormat()) || (d.rgba[3] = 1));
            this.fromRGBA(d.rgba[0], d.rgba[1], d.rgba[2], d.rgba[3], h);
            return !0;
          };
          this.toString = function (d) {
            "undefined" === typeof d && (d = this.getFormat());
            switch (d.toLowerCase()) {
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
          this._setFormat = function (d) {
            this._currentFormat = d.toLowerCase();
          };
          this.hasAlphaChannel = function () {
            return "auto" === this.alphaChannel
              ? "any" === this.format.toLowerCase() ||
                  a.isAlphaFormat(this.getFormat()) ||
                  "undefined" !== typeof this.alpha
              : this.alphaChannel;
          };
          this.processValueInput = function (d) {
            this.fromString(d) || this.exposeColor();
          };
          this.exposeColor = function (d) {
            var h = this.toString(),
              q = this.getFormat();
            a.setDataAttr(this.targetElement, "current-color", h);
            if (!(d & a.flags.leaveValue) && this.valueElement) {
              if ("hex" === q || "hexa" === q)
                this.uppercase || (h = h.toLowerCase()),
                  this.hash || (h = h.replace(/^#/, ""));
              this.setValueElementValue(h);
            }
            d & a.flags.leavePreview ||
              !this.previewElement ||
              this.setPreviewElementBg(this.toRGBAString());
            u() && (l(), n(), m());
          };
          this.setPreviewElementBg = function (d) {
            if (this.previewElement) {
              var h = null,
                q = null;
              a.isTextInput(this.previewElement) &&
                ((h = this.previewPosition), (q = this.previewSize));
              var r = [];
              r.push({ size: "auto" });
              if (d) {
                var y = a.genColorPreviewCanvas(
                  "rgba(0,0,0,0)",
                  h ? { left: "right", right: "left" }[h] : null,
                  q,
                  !0,
                );
                r.push({ size: y.width + "px " + y.height + "px" });
              }
              y = [];
              for (var z = 0; z < r.length; z += 1) y.push(r[z].size);
              d = {
                "--fr-input-color": d,
                "--fr-input-color-edge": q + "px",
                "--fr-input-color-edge2": q + 1 + "px",
                "--fr-input-gb-size": y.join(", "),
              };
              a.setStyle(this.previewElement, d, !this.forceStyle);
              d = { left: null, right: null };
              h && (d[h] = this.previewSize + this.previewPadding + "px");
              a.setStyle(
                this.previewElement,
                { "--fr-input-padding-left": d.left },
                !this.forceStyle,
                !0,
              );
            }
          };
          this.setValueElementValue = function (d) {
            this.valueElement &&
              ("input" === a.nodeName(this.valueElement)
                ? (this.valueElement.value = d)
                : (this.valueElement.textContent = d));
          };
          this._processParentElementsInDOM = function () {
            if (!this._parentElementsProcessed) {
              this._parentElementsProcessed = !0;
              var d = this.targetElement;
              do {
                var h = a.getCompStyle(d);
                if (
                  (h.position && "fixed" === h.position.toLowerCase()) ||
                  d instanceof ShadowRoot
                )
                  this.fixed = !0;
              } while ((d = d.parentNode) && "body" !== a.nodeName(d));
            }
          };
          this.tryHide = function () {
            this.hideOnLeave && this.hide();
          };
          if (a.pub.options)
            for (var E in a.pub.options)
              if (v.call(a.pub.options, E))
                try {
                  g(E, a.pub.options[E]);
                } catch (d) {
                  console.error(d);
                }
          for (var F in e)
            if (v.call(e, F))
              try {
                g(F, e[F]);
              } catch (d) {
                console.error(d);
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
            ? (this._currentFormat = (c = a.parseColorString(b))
                ? c.format
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
        var c = function () {
          a.triggerGlobal(b);
        };
        a.initialized ? c() : a.pub.ready(c);
      };
      a.pub.hide = function () {
        a.picker && a.picker.owner && a.picker.owner.hide();
      };
      a.pub.options = {};
      a.register();
      return a.pub;
    })();
  "undefined" === typeof p.FRColorPicker && (p.FRColorPicker = A);
  return A;
});
