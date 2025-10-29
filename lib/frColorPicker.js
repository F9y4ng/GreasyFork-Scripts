// ==UserScript==
// @name        frColorPicker
// @version     7.5.1
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

(function (q, z) {
  return z(
    q,
    Object.prototype.hasOwnProperty,
    Element.prototype.attachShadow,
    function (A, D, u) {
      try {
        if (!A.adoptedStyleSheets || "function" !== typeof A.adoptedStyleSheets.push) throw Error("use inlineStyle");
        var v = new CSSStyleSheet();
        (v.id = u) && v.replaceSync(D);
        !Array.from(A.adoptedStyleSheets).some(function (E) {
          return E.id === u;
        }) && A.adoptedStyleSheets.push(v);
      } catch (E) {
        try {
          if (!A.querySelector("style#" + u)) {
            var B = document.createElement("style");
            Object.assign(B, {
              id: u,
              media: "all",
              type: "text/css",
              textContent: D,
            });
            A.prepend(B);
          }
        } catch (F) {
          console.error(F.name + "in UAS: " + F.message + "(" + E.message + ")");
        }
      }
    },
    function (A) {
      return A.replace(".", "\\.");
    },
    function (A) {
      var D = Array.from(crypto.getRandomValues(new Uint8Array(A)), function (u) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[u % 52];
      }).join("");
      if (3 >= A) return D;
      A = (crypto.getRandomValues(new Uint8Array(1))[0] % (A - 3)) + 2;
      return D.slice(0, A) + "." + D.slice(A);
    }
  );
})("undefined" !== typeof window ? window : this, function (q, z, A, D, u, v) {
  var B,
    E = (function () {
      var F = null, ja = v(9), ka = v(8), I = v(12), J = v(8), K = v(7), la = v(8), L = v(8), M = v(7);
      var N = v(7), O = v(7), P = v(7), Q = v(8), R = v(7), S = v(7), T = v(7), U = v(7), V = v(7), W = v(7); 
      var X = v(7), Y = v(7), Z = v(7), aa = v(8), ba = v(8), ca = v(8), da = v(8), ea = v(8),fa = v(8);
      a: {
        try {
          q.addEventListener("testPassive", null, { passive: !0 }), q.removeEventListener("testPassive", null, { passive: !0 });
        } catch (a) {
          var ha = !1;
          break a;
        }
        ha = !0;
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
              : "complete" === q.document.readyState
              ? b.pub.init()
              : q.addEventListener("load", b.pub.init, !1));
        },
        getInstances: function () {
          for (var a = [], c = 0; c < b.instances.length; c += 1) b.instances[c] && b.instances[c].targetElement && a.push(b.instances[c]);
          return a;
        },
        createEl: function (a) {
          a = q.document.createElement(a);
          b.setData(a, "gui", !0);
          return a;
        },
        attachShadow: function (a) {
          return A.call(a, { mode: "closed" });
        },
        node: function (a) {
          if (!a) return null;
          if ("string" === typeof a) {
            var c = null;
            try {
              c = q.document.querySelector(a) || F.querySelector(a);
            } catch (d) {
              return null;
            }
            return c;
          }
          return b.isNode(a) ? a : null;
        },
        isNode: function (a) {
          return "object" === typeof Node ? a instanceof Node : a && "object" === typeof a && "number" === typeof a.nodeType && "string" === typeof a.nodeName;
        },
        nodeName: function (a) {
          return a && a.nodeName ? a.nodeName.toLowerCase() : !1;
        },
        isTextInput: function (a) {
          return a && "input" === b.nodeName(a) && "text" === a.type.toLowerCase();
        },
        isPassiveEventSupported: ha,
        dataProp: "_data_fr_colorpicker_",
        setData: function () {
          var a = arguments[0];
          if (3 === arguments.length) return ((z.call(a, b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {}))[arguments[1]] = arguments[2]), !0;
          if (2 === arguments.length && "object" === typeof arguments[1]) {
            a = z.call(a, b.dataProp) ? a[b.dataProp] : (a[b.dataProp] = {});
            var c = arguments[1],
              d;
            for (d in c) z.call(c, d) && (a[d] = c[d]);
            return !0;
          }
          throw Error("Invalid arguments");
        },
        getData: function (a, c, d) {
          if (!z.call(a, b.dataProp))
            if ("undefined" !== typeof d) a[b.dataProp] = {};
            else return;
          a = a[b.dataProp];
          z.call(a, c) || "undefined" === typeof d || (a[c] = d);
          return a[c];
        },
        setDataAttr: function (a, c, d) {
          a.setAttribute("data-" + c, d);
        },
        _attachedGroupEvents: {},
        attachGroupEvent: function (a, c, d, g) {
          z.call(b._attachedGroupEvents, a) || (b._attachedGroupEvents[a] = []);
          b._attachedGroupEvents[a].push([c, d, g]);
          c.addEventListener(d, g, !1);
        },
        detachGroupEvents: function (a) {
          if (z.call(b._attachedGroupEvents, a)) {
            for (var c = 0; c < b._attachedGroupEvents[a].length; c += 1) {
              var d = b._attachedGroupEvents[a][c];
              d[0].removeEventListener(d[1], d[2], !1);
            }
            delete b._attachedGroupEvents[a];
          }
        },
        preventDefault: function (a) {
          a.preventDefault && a.preventDefault();
          a.returnValue = !1;
        },
        triggerEvent: function (a, c, d, g) {
          if (a) {
            if ("function" === typeof Event) var h = new Event(c, { bubbles: d, cancelable: g });
            else (h = q.document.createEvent("Event")), h.initEvent(c, d, g);
            if (!h) return !1;
            b.setData(h, "internal", !0);
            a.dispatchEvent(h);
            return !0;
          }
        },
        triggerInputEvent: function (a, c, d, g) {
          a && b.isTextInput(a) && b.triggerEvent(a, c, d, g);
        },
        strList: function (a) {
          return a ? a.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
        },
        hasClass: function (a, c) {
          return c ? ("undefined" !== typeof a.classList ? a.classList.contains(c) : -1 !== (" " + a.className.replace(/\s+/g, " ") + " ").indexOf(" " + c + " ")) : !1;
        },
        addClass: function (a, c) {
          c = b.strList(c);
          if ("undefined" !== typeof a.classList) for (var d = 0; d < c.length; d += 1) a.classList.add(c[d]);
          else for (d = 0; d < c.length; d += 1) b.hasClass(a, c[d]) || (a.className += (a.className ? " " : "") + c[d]);
        },
        removeClass: function (a, c) {
          c = b.strList(c);
          if ("undefined" !== typeof a.classList) for (var d = 0; d < c.length; d += 1) a.classList.remove(c[d]);
          else for (d = 0; d < c.length; d += 1) a.className = a.className.replace(new RegExp("^\\s*" + c[d] + "\\s*|\\s*" + c[d] + "\\s*$|\\s+" + c[d] + "(\\s+)", "g"), "$1");
        },
        getCompStyle: function (a) {
          return a instanceof ShadowRoot ? {} : (a = q.getComputedStyle ? q.getComputedStyle(a) : a.currentStyle) ? a : {};
        },
        setStyle: function (a, c, d, g) {
          d = d ? "important" : "";
          var h = null,
            l;
          for (l in c)
            if (z.call(c, l)) {
              var p = null;
              null === c[l]
                ? (h || (h = b.getData(a, "origStyle")), h && z.call(h, l) && (p = h[l]))
                : (g && (h || (h = b.getData(a, "origStyle", {})), z.call(h, l) || (h[l] = a.style[l])), (p = c[l]));
              null !== p && a.style.setProperty(l, p, d);
            }
        },
        hexColor: function (a, c, d) {
          return "#" + (("0" + Math.round(a).toString(16)).slice(-2) + ("0" + Math.round(c).toString(16)).slice(-2) + ("0" + Math.round(d).toString(16)).slice(-2)).toUpperCase();
        },
        hexaColor: function (a, c, d, g) {
          a = "#" + ("0" + Math.round(a).toString(16)).slice(-2) + ("0" + Math.round(c).toString(16)).slice(-2);
          a += ("0" + Math.round(d).toString(16)).slice(-2) + ("0" + Math.round(255 * g).toString(16)).slice(-2);
          return a.toUpperCase();
        },
        rgbColor: function (a, c, d) {
          return "rgb(" + Math.round(a) + "," + Math.round(c) + "," + Math.round(d) + ")";
        },
        rgbaColor: function (a, c, d, g) {
          return "rgba(" + Math.round(a) + "," + Math.round(c) + "," + Math.round(d) + "," + Math.round(100 * ("undefined" === typeof g || null === g ? 1 : g)) / 100 + ")";
        },
        setBorderRadius: function (a, c) {
          b.setStyle(a, { "border-radius": c || "0" });
        },
        getElementPos: function (a, c) {
          var d = q.frDOMRects;
          "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
          d = d.toggle ? d.cur : 1;
          var g = a.getBoundingClientRect();
          a = g.left * d;
          g = g.top * d;
          c || ((c = b.getViewPos()), (a += c[0] * d), (g += c[1] * d));
          return [a, g];
        },
        getElementSize: function (a) {
          return [a.offsetWidth, a.offsetHeight];
        },
        getAbsPointerPos: function (a) {
          var c = q.frDOMRects;
          "undefined" === typeof c && (c = { toggle: !1, cur: 1, prev: 1 });
          var d = 0,
            g = 0;
          "undefined" !== typeof a.changedTouches && a.changedTouches.length
            ? ((d = a.changedTouches[0].x * c.cur), (g = a.changedTouches[0].y * c.cur))
            : "number" === typeof a.x && ((d = a.x * c.cur), (g = a.y * c.cur));
          return { x: d, y: g };
        },
        getRelPointerPos: function (a) {
          var c = q.frDOMRects;
          "undefined" === typeof c && (c = { toggle: !1, cur: 1, prev: 1 });
          var d = (a.target || a.srcElement).getBoundingClientRect(),
            g = c.toggle ? c.cur : 1,
            h = 0,
            l = 0;
          "undefined" !== typeof a.changedTouches && a.changedTouches.length
            ? ((h = a.changedTouches[0].x * c.cur), (l = a.changedTouches[0].y * c.cur))
            : "number" === typeof a.x && ((h = a.x * c.cur), (l = a.y * c.cur));
          return { x: h - d.left * g, y: l - d.top * g };
        },
        getViewPos: function () {
          var a = q.document.documentElement;
          return [(q.pageXOffset || a.scrollLeft) - (a.clientLeft || 0), (q.pageYOffset || a.scrollTop) - (a.clientTop || 0)];
        },
        getViewSize: function () {
          var a = q.document.documentElement;
          return [q.innerWidth || a.clientWidth, q.innerHeight || a.clientHeight];
        },
        RGB_HSV: function (a, c, d) {
          a /= 255;
          c /= 255;
          d /= 255;
          var g = Math.min(Math.min(a, c), d),
            h = Math.max(Math.max(a, c), d),
            l = h - g;
          if (0 === l) return [null, 0, 100 * h];
          a = a === g ? 3 + (d - c) / l : c === g ? 5 + (a - d) / l : 1 + (c - a) / l;
          return [60 * (6 === a ? 0 : a), (l / h) * 100, 100 * h];
        },
        HSV_RGB: function (a, c, d) {
          d = (d / 100) * 255;
          if (null === a) return [d, d, d];
          a /= 60;
          c /= 100;
          var g = Math.floor(a),
            h = d * (1 - c);
          a = d * (1 - c * (g % 2 ? a - g : 1 - (a - g)));
          switch (g) {
            case 6:
            case 0:
              return [d, a, h];
            case 1:
              return [a, d, h];
            case 2:
              return [h, d, a];
            case 3:
              return [h, a, d];
            case 4:
              return [a, h, d];
            case 5:
              return [d, h, a];
          }
        },
        parseColorString: function (a) {
          var c,
            d = { rgba: null, format: null };
          if (/^currentcolor$/i.test(a)) return { format: "hexa", rgba: [255, 255, 255, 1] };
          if ((c = a.match(/^\W*([0-9A-F]{3,8})\W*$/i))) {
            switch (c[1].length) {
              case 8:
                d.format = "hexa";
                d.rgba = [parseInt(c[1].slice(0, 2), 16), parseInt(c[1].slice(2, 4), 16), parseInt(c[1].slice(4, 6), 16), parseInt(c[1].slice(6, 8), 16) / 255];
                break;
              case 4:
                d.format = "hexa";
                d.rgba = [
                  parseInt(c[1].charAt(0) + c[1].charAt(0), 16),
                  parseInt(c[1].charAt(1) + c[1].charAt(1), 16),
                  parseInt(c[1].charAt(2) + c[1].charAt(2), 16),
                  parseInt(c[1].charAt(3) + c[1].charAt(3), 16) / 255,
                ];
                break;
              case 6:
                d.format = "hex";
                d.rgba = [parseInt(c[1].slice(0, 2), 16), parseInt(c[1].slice(2, 4), 16), parseInt(c[1].slice(4, 6), 16), 1];
                break;
              case 3:
                d.format = "hex";
                d.rgba = [parseInt(c[1].charAt(0) + c[1].charAt(0), 16), parseInt(c[1].charAt(1) + c[1].charAt(1), 16), parseInt(c[1].charAt(2) + c[1].charAt(2), 16), 1];
                break;
              default:
                return !1;
            }
            return d;
          }
          if ((c = a.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
            a = c[1].split(",");
            c = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
            var g, h, l, p;
            if (3 <= a.length && (g = a[0].match(c)) && (h = a[1].match(c)) && (l = a[2].match(c)))
              return (
                (d.format = "rgb"),
                (d.rgba = [parseFloat(g[1]) || 0, parseFloat(h[1]) || 0, parseFloat(l[1]) || 0, 1]),
                4 <= a.length && (p = a[3].match(c)) && ((d.format = "rgba"), (d.rgba[3] = parseFloat(p[1]) || 0)),
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
          var c = q.devicePixelRatio || 1;
          a.width *= c;
          a.height *= c;
          a.getContext("2d").scale(c, c);
        },
        genColorPreviewCanvas: function (a, c, d, g) {
          var h = b.pub.chessboardSize,
            l = b.pub.chessboardColor1,
            p = b.pub.chessboardColor2;
          d = d ? d : 2 * h;
          var n = 2 * h,
            x = b.createEl("canvas"),
            w = x.getContext("2d");
          x.width = d;
          x.height = n;
          g && b.scaleCanvasForHighDPR(x);
          w.fillStyle = l;
          w.fillRect(0, 0, d, n);
          w.fillStyle = p;
          for (g = 0; g < d; g += 2 * h) w.fillRect(g, 0, h, h), w.fillRect(g + h, h, h, h);
          a && ((w.fillStyle = a), w.fillRect(0, 0, d, n));
          switch (c) {
            case "left":
              w.clearRect(0, 0, 0, n);
              break;
            case "right":
              w.clearRect(d - 0, 0, 0, n);
          }
          return { canvas: x, width: d, height: n };
        },
        redrawPosition: function () {
          if (b.picker && b.picker.owner) {
            var a = b.picker.owner;
            if (a.fixed) {
              var c = b.getElementPos(a.targetElement, !0);
              var d = [0, 0];
            } else (c = b.getElementPos(a.targetElement)), (d = b.getViewPos());
            var g = b.getElementSize(a.targetElement),
              h = b.getViewSize(),
              l = b.getPickerDims(a),
              p = [l.borderW, l.borderH];
            switch (a.position.toLowerCase()) {
              case "left":
                l = 1;
                var n = 0;
                var x = -1;
                break;
              case "right":
                l = 1;
                n = 0;
                x = 1;
                break;
              case "top":
                l = 0;
                n = 1;
                x = -1;
                break;
              default:
                (l = 0), (x = n = 1);
            }
            var w = (g[n] + p[n]) / 2;
            c = a.smartPosition
              ? [
                  -d[l] + c[l] + p[l] > h[l] ? (-d[l] + c[l] + g[l] / 2 > h[l] / 2 && 0 <= c[l] + g[l] - p[l] ? c[l] + g[l] - p[l] : c[l]) : c[l],
                  -d[n] + c[n] + g[n] + p[n] - w + w * x > h[n]
                    ? -d[n] + c[n] + g[n] / 2 > h[n] / 2 && 0 <= c[n] + g[n] - w - w * x
                      ? c[n] + g[n] - w - w * x - 4
                      : c[n] + g[n] - w + w * x + 4
                    : 0 <= c[n] + g[n] - w + w * x
                    ? c[n] + g[n] - w + w * x - 4
                    : c[n] + g[n] - w - w * x + 4,
                ]
              : [c[l], c[n] + g[n] - w + w * x - 4];
            b._drawPosition(c[l], c[n], a.fixed ? "fixed" : "absolute");
          }
        },
        _drawPosition: function (a, c, d) {
          b.picker.wrap.style.cssText = "--l:" + parseInt(a) + "px;--t:" + parseInt(c) + "px;--pos:" + d + ";";
        },
        getPickerDims: function (a) {
          var c = 2 * a.controlBorderWidth + a.width,
            d = 2 * a.controlBorderWidth + a.height,
            g = 2 * a.controlBorderWidth + 2 * b.getControlPadding(a) + a.sliderSize;
          b.getSliderChannel(a) && (c += g);
          a.hasAlphaChannel() && (c += g);
          g = c + 2 * a.padding;
          var h = d + 2 * a.padding;
          return {
            contentW: c,
            contentH: d,
            paddedW: g,
            paddedH: h,
            borderW: g + 2 * a.borderWidth,
            borderH: h + 2 * a.borderWidth,
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
        triggerCallback: function (a, c) {
          if (a[c]) {
            var d = null;
            if ("string" === typeof a[c])
              try {
                d = new Function(a[c]);
              } catch (g) {
                console.error(g);
              }
            else d = a[c];
            d && d.call(a);
          }
        },
        triggerGlobal: function (a) {
          for (var c = b.getInstances(), d = 0; d < c.length; d += 1) c[d].trigger(a);
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
            a.composedPath().find(function (c) {
              return "INPUT" === c.nodeName && c.hasAttribute("data-current-color");
            }) ||
            a.target ||
            a.srcElement;
          a.frcp && a.frcp instanceof b.pub
            ? a.frcp.showOnClick &&
              !a.disabled &&
              (b.picker && b.picker.owner
                ? (b.picker.owner.tryHide(), B.removeEventListener("mousedown", b.onDocumentMouseDown, !1))
                : (a.frcp.show(), B.addEventListener("mousedown", b.onDocumentMouseDown, !1)))
            : b.picker && b.picker.owner && (b.picker.owner.tryHide(), B.removeEventListener("mousedown", b.onDocumentMouseDown, !1));
        },
        onDocumentMouseDown: function (a) {
          var c = a.target || a.srcElement;
          if (!c || !c.nodeName || "fr-configure" !== c.nodeName.toLowerCase())
            if (b.getData(c, "gui")) {
              if (b.getData(c, "control")) b.onControlPointerStart(a, c, b.getData(c, "control"), "mouse");
            } else b.picker && b.picker.owner && (b.picker.owner.tryHide(), B.removeEventListener("mousedown", b.onDocumentMouseDown, !1));
        },
        onPickerTouchStart: function (a) {
          var c = a.target || a.srcElement;
          if (b.getData(c, "control")) b.onControlPointerStart(a, c, b.getData(c, "control"), "touch");
        },
        onControlPointerStart: function (a, c, d, g) {
          var h = b.getData(c, "instance");
          b.preventDefault(a);
          var l = function (x, w) {
            b.attachGroupEvent("drag", x, b._pointerMoveEvent[g], b.onDocumentPointerMove(a, c, d, g, w));
            b.attachGroupEvent("drag", x, b._pointerEndEvent[g], b.onDocumentPointerEnd(a, c, d, g));
          };
          l(q.document, [0, 0]);
          if (q.parent && q.frameElement) {
            var p = q.frDOMRects;
            "undefined" === typeof p && (p = { toggle: !1, cur: 1, prev: 1 });
            p = p.toggle ? p.cur : 1;
            var n = q.frameElement.getBoundingClientRect();
            l(q.parent.window.document, [-n.left * p, -n.top * p]);
          }
          l = b.getAbsPointerPos(a);
          p = b.getRelPointerPos(a);
          b._pointerOrigin = { x: l.x - p.x, y: l.y - p.y };
          switch (d) {
            case "pad":
              "v" === b.getSliderChannel(h) && 0 === h.channels.v && h.fromHSVA(null, null, 100, null);
              b.setPad(h, a, 0, 0);
              break;
            case "sld":
              b.setSld(h, a, 0);
              break;
            case "asld":
              b.setASld(h, a, 0);
          }
          h.trigger("input");
        },
        onDocumentPointerMove: function (a, c, d, g, h) {
          return function (l) {
            var p = b.getData(c, "instance");
            switch (d) {
              case "pad":
                b.setPad(p, l, h[0], h[1]);
                break;
              case "sld":
                b.setSld(p, l, h[1]);
                break;
              case "asld":
                b.setASld(p, l, h[1]);
            }
            p.trigger("input");
          };
        },
        onDocumentPointerEnd: function (a, c, d, g) {
          return function (h) {
            h = b.getData(c, "instance");
            b.detachGroupEvents("drag");
            h.trigger("input");
            h.trigger("change");
          };
        },
        setPad: function (a, c, d, g) {
          c = b.getAbsPointerPos(c);
          d = (360 / (a.width - 1)) * (d + c.x - b._pointerOrigin.x - a.padding - a.controlBorderWidth);
          g = 100 - (100 / (a.height - 1)) * (g + c.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
          switch (b.getPadYChannel(a)) {
            case "s":
              a.fromHSVA(d, g, null, null);
              break;
            case "v":
              a.fromHSVA(d, null, g, null);
          }
        },
        setSld: function (a, c, d) {
          c = b.getAbsPointerPos(c);
          d = 100 - (100 / (a.height - 1)) * (d + c.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
          switch (b.getSliderChannel(a)) {
            case "s":
              a.fromHSVA(null, d, null, null);
              break;
            case "v":
              a.fromHSVA(null, null, d, null);
          }
        },
        setASld: function (a, c, d) {
          c = b.getAbsPointerPos(c);
          d = 1 - (1 / (a.height - 1)) * (d + c.y - b._pointerOrigin.y - a.padding - a.controlBorderWidth);
          1 > d && ((c = a.getFormat()), "any" !== a.format.toLowerCase() || b.isAlphaFormat(c) || a._setFormat("hex" === c ? "hexa" : "rgba"));
          a.fromHSVA(null, null, null, d);
        },
        createPadCanvas: function () {
          var a = { elm: null, draw: null },
            c = b.createEl("canvas"),
            d = c.getContext("2d");
          a.elm = c;
          a.draw = function (g, h, l) {
            c.width = g;
            c.height = h;
            d.clearRect(0, 0, c.width, c.height);
            g = d.createLinearGradient(0, 0, c.width, 0);
            g.addColorStop(0, "#F00");
            g.addColorStop(1 / 6, "#FF0");
            g.addColorStop(2 / 6, "#0F0");
            g.addColorStop(0.5, "#0FF");
            g.addColorStop(4 / 6, "#00F");
            g.addColorStop(5 / 6, "#F0F");
            g.addColorStop(1, "#F00");
            d.fillStyle = g;
            d.fillRect(0, 0, c.width, c.height);
            g = d.createLinearGradient(0, 0, 0, c.height);
            switch (l.toLowerCase()) {
              case "s":
                g.addColorStop(0, "rgba(255,255,255,0)");
                g.addColorStop(1, "rgba(255,255,255,1)");
                break;
              case "v":
                g.addColorStop(0, "rgba(0,0,0,0)"), g.addColorStop(1, "rgba(0,0,0,1)");
            }
            d.fillStyle = g;
            d.fillRect(0, 0, c.width, c.height);
          };
          return a;
        },
        createSliderGradient: function () {
          var a = { elm: null, draw: null },
            c = b.createEl("canvas"),
            d = c.getContext("2d");
          a.elm = c;
          a.draw = function (g, h, l, p) {
            c.width = g;
            c.height = h;
            d.clearRect(0, 0, c.width, c.height);
            g = d.createLinearGradient(0, 0, 0, c.height);
            g.addColorStop(0, l);
            g.addColorStop(1, p);
            d.fillStyle = g;
            d.fillRect(0, 0, c.width, c.height);
          };
          return a;
        },
        createASliderGradient: function () {
          var a = { elm: null, draw: null },
            c = b.createEl("canvas"),
            d = c.getContext("2d");
          a.elm = c;
          a.draw = function (g, h, l) {
            c.width = g;
            c.height = h;
            d.clearRect(0, 0, c.width, c.height);
            g = c.width / 2;
            h = b.pub.chessboardColor2;
            d.fillStyle = b.pub.chessboardColor1;
            d.fillRect(0, 0, c.width, c.height);
            if (0 < g) for (var p = 0; p < c.height; p += 2 * g) (d.fillStyle = h), d.fillRect(0, p, g, g), d.fillRect(g, p + g, g, g);
            g = d.createLinearGradient(0, 0, 0, c.height);
            g.addColorStop(0, l);
            g.addColorStop(1, "rgba(0,0,0,0)");
            d.fillStyle = g;
            d.fillRect(0, 0, c.width, c.height);
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
        pub: function (a, c, d) {
          function g(e, k) {
            if ("string" !== typeof e) throw Error("Invalid value for option name: " + e);
            if (z.call(b.enumOpts, e) && ("string" === typeof k && (k = k.toLowerCase()), -1 === b.enumOpts[e].indexOf(k))) throw Error("Option '" + e + "' has invalid value: " + k);
            if (e in f) return (f[e] = k), !0;
            throw Error("Unrecognized configuration option: " + e);
          }
          function h() {
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
              (B = b.attachShadow(b.picker.wrap)),
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
              B.appendChild(b.picker.boxB),
              B.addEventListener("touchstart", b.onPickerTouchStart, b.isPassiveEventSupported ? { passive: !1 } : !1));
            var e = b.picker,
              k = !!b.getSliderChannel(f),
              r = f.hasAlphaChannel(),
              t = b.getPickerDims(f),
              y = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
              C = b.getControlPadding(f),
              ma = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
              ia = f.padding + f.width + 2 * f.controlBorderWidth + C + (k ? f.sliderSize + 2 * C + 2 * f.controlBorderWidth : 0);
            e.wrap.className = I;
            var m = ":host(." + u(I) + "){position:var(--pos,absolute);left:var(--l,0);top:var(--t,0);";
            m =
              m +
              "box-sizing:border-box;display:block!important;visibility:visible!important;opacity:1!important;clear:both!important;width:" +
              (t.borderW + "px;height:" + t.borderH + "px;z-index:" + f.zIndex + "!important}");
            e.box.className = J;
            m += "." + u(J) + "{box-sizing:border-box;width:" + t.paddedW + "px;height:" + t.paddedH + "px;position:relative} ";
            e.boxB.className = K;
            m += "." + u(K) + " {box-sizing:border-box;position:relative;border:" + f.borderWidth + "px solid " + f.borderColor + "!important;";
            m += "background:" + f.backgroundColor + "!important;border-radius:" + ma + "px} ";
            e.pad.className = la;
            e.padCanvas.draw(f.width, f.height, b.getPadYChannel(f));
            e.padB.id = aa;
            m += "#" + u(aa) + "{position:absolute;left:" + f.padding + "px;top:" + f.padding + "px;";
            m += "border:" + f.controlBorderWidth + "px solid " + f.controlBorderColor + "!important}";
            e.padM.id = ba;
            m += "#" + u(ba) + "{position:absolute;left:0px;top:0px;";
            m += "width:" + parseInt(f.padding + 2 * f.controlBorderWidth + f.width + C) + "px;";
            m += "height:" + parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) + "px;cursor:crosshair}";
            b.setData(e.padM, { instance: f, control: "pad" });
            e.cross.className = L;
            m += "." + u(L) + "{position:absolute;left:var(--cl,0);top:var(--ct,0);width:" + y + "px;height:" + y + "px}";
            e.crossBX.className = M;
            m += "." + u(M) + "{position:absolute;background:" + f.pointerBorderColor + "!important;";
            m += "height:" + parseInt(2 * f.pointerBorderWidth + f.pointerThickness) + "px;width:" + y + "px;";
            m += "top:" + parseInt(Math.floor(y / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth) + "px;left:0}";
            e.crossBY.className = N;
            m += "." + u(N) + "{position:absolute;background:" + f.pointerBorderColor + "!important;";
            m += "width:" + parseInt(2 * f.pointerBorderWidth + f.pointerThickness) + "px;height:" + y + "px;";
            m += "left:" + parseInt(Math.floor(y / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth) + "px;top:0}";
            e.crossLX.className = O;
            m += "." + u(O) + "{position:absolute;background:" + f.pointerColor + "!important;";
            m += "height:" + f.pointerThickness + "px;width:" + parseInt(y - 2 * f.pointerBorderWidth) + "px;";
            m += "left:" + f.pointerBorderWidth + "px;top:" + parseInt(Math.floor(y / 2) - Math.floor(f.pointerThickness / 2)) + "px}";
            e.crossLY.className = P;
            m += "." + u(P) + "{position:absolute;background:" + f.pointerColor + "!important;";
            m += "width:" + f.pointerThickness + "px;height:" + parseInt(y - 2 * f.pointerBorderWidth) + "px;";
            m += "top:" + f.pointerBorderWidth + "px;left:" + parseInt(Math.floor(y / 2) - Math.floor(f.pointerThickness / 2)) + "px}";
            e.sld.className = Q;
            m += "." + u(Q) + "{overflow:hidden;width:" + f.sliderSize + "px;height:" + f.height + "px}";
            e.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
            e.sldB.id = ca;
            m += "#" + u(ca) + "{display:" + (k ? "block" : "none") + ";position:absolute;";
            m += "left:" + parseInt(f.padding + f.width + 2 * f.controlBorderWidth + 2 * C) + "px;";
            m += "top:" + f.padding + "px;border:" + f.controlBorderWidth + "px solid " + f.controlBorderColor + "!important}";
            e.sldM.id = da;
            m += "#" + u(da) + "{display:" + (k ? "block" : "none") + ";position:absolute;";
            m += "left:" + parseInt(f.padding + f.width + 2 * f.controlBorderWidth + C) + "px;";
            m += "top:0px;width:" + parseInt(f.sliderSize + 2 * C + 2 * f.controlBorderWidth) + "px;";
            m += "height:" + parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) + "px;cursor:default}";
            b.setData(e.sldM, { instance: f, control: "sld" });
            e.sldPtrIB.className = R;
            m += "." + u(R) + "{border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important}";
            e.sldPtrOB.className = S;
            m += "." + u(S) + "{position:absolute;border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important;";
            m += "top:var(--st,0);left:" + -(2 * f.pointerBorderWidth + f.pointerThickness) + "px}";
            e.sldPtrMB.className = T;
            m += "." + u(T) + "{border:" + f.pointerThickness + "px solid " + f.pointerColor + "!important}";
            e.sldPtrS.className = U;
            m += "." + u(U) + "{width:" + f.sliderSize + "px;height:" + b.pub.sliderInnerSpace + "px}";
            e.asld.className = V;
            m += "." + u(V) + "{overflow:hidden;width:" + f.sliderSize + "px;height:" + f.height + "px}";
            e.asldGrad.draw(f.sliderSize, f.height, "#000");
            e.asldB.id = ea;
            m += "#" + u(ea) + "{display:" + (r ? "block" : "none") + ";position:absolute;left:" + ia + "px;";
            m += "top:" + f.padding + "px;border:" + f.controlBorderWidth + "px solid " + f.controlBorderColor + "!important}";
            e.asldM.id = fa;
            m += "#" + u(fa) + "{display:" + (r ? "block" : "none") + ";position:absolute;";
            m += "left:" + ia + "px;top:0px;width:" + parseInt(f.sliderSize + 2 * C + 2 * f.controlBorderWidth) + "px;";
            m += "height:" + parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) + "px;cursor:default}";
            b.setData(e.asldM, { instance: f, control: "asld" });
            e.asldPtrIB.className = W;
            m += "." + u(W) + "{border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important}";
            e.asldPtrOB.className = X;
            m += "." + u(X) + "{border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important;";
            m += "position:absolute;top:var(--at,0);left:" + -(2 * f.pointerBorderWidth + f.pointerThickness) + "px}";
            e.asldPtrMB.className = Y;
            m += "." + u(Y) + "{border:" + f.pointerThickness + "px solid " + f.pointerColor + "!important}";
            e.asldPtrS.className = Z;
            m += "." + u(Z) + "{width:" + f.sliderSize + "px;height:" + b.pub.sliderInnerSpace + "px}";
            k = "T" + new Date().setHours(20, 30, 40, 50).toString(32);
            D(B, m, k);
            l();
            p();
            n();
            b.picker.owner && b.picker.owner !== f && b.removeClass(b.picker.owner.targetElement, b.pub.activeClassName);
            b.picker.owner = f;
            f.container === q.document.documentElement ? b.redrawPosition() : b._drawPosition(f, 0, 0, "relative", !1);
            e.wrap.parentNode !== f.container &&
              (m = b.node("dialog[id^='fr-dialog-']")) &&
              (m.appendChild(e.wrap), m.hasAttribute("open") && m.close && m.close(), (m.inert = !0), m.showModal && m.showModal(), m.removeAttribute("inert"), m.focus());
            b.addClass(f.targetElement, b.pub.activeClassName);
          }
          function l() {
            var e = b.getPadYChannel(f);
            e = Math.round((1 - f.channels[e] / 100) * (f.height - 1));
            var k = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
            b.picker.cross.style.cssText = "--cl:" + parseInt(Math.round((f.channels.h / 360) * (f.width - 1)) + k) + "px;--ct:" + parseInt(e + k) + "px";
            switch (b.getSliderChannel(f)) {
              case "s":
                e = b.HSV_RGB(f.channels.h, 100, f.channels.v);
                k = b.HSV_RGB(f.channels.h, 0, f.channels.v);
                b.picker.sldGrad.draw(
                  f.sliderSize,
                  f.height,
                  "rgb(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + ")",
                  "rgb(" + Math.round(k[0]) + "," + Math.round(k[1]) + "," + Math.round(k[2]) + ")"
                );
                break;
              case "v":
                (e = b.HSV_RGB(f.channels.h, f.channels.s, 100)),
                  b.picker.sldGrad.draw(f.sliderSize, f.height, "rgb(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + ")", "#000");
            }
            b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
          }
          function p() {
            var e = b.getSliderChannel(f);
            e &&
              (b.picker.sldPtrOB.style.cssText =
                "--st:" + parseInt(Math.round((1 - f.channels[e] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2)) + "px");
            b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
          }
          function n() {
            b.picker.asldPtrOB.style.cssText =
              "--at:" + parseInt(Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2)) + "px";
          }
          function x() {
            return b.picker && b.picker.owner === f;
          }
          function w(e) {
            b.getData(e, "internal") ||
              ((e = f.valueElement.value),
              f.processValueInput(f.valueElement.value),
              b.triggerCallback(f, "onChange"),
              f.valueElement.value !== e && b.triggerInputEvent(f.valueElement, "change", !0, !0));
          }
          function na(e) {
            b.getData(e, "internal") || (f.valueElement && f.fromString(f.valueElement.value, b.flags.leaveValue), b.triggerCallback(f, "onInput"));
          }
          var f = this;
          d || (d = {});
          this.configShadow = F = c;
          this.scrollbar = this.configShadow.querySelector("fr-scrollbar");
          this.channels = { r: 255, g: 255, b: 255, h: 0, s: 0, v: 100, a: 1 };
          this.format = "auto";
          this.previewElement = this.valueElement = this.onInput = this.onChange = this.alpha = this.value = void 0;
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
                var e = arguments[0];
                if ("string" !== typeof e) throw Error("Invalid value for option name: " + e);
                if (e in f) var k = f[e];
                else throw Error("Unrecognized configuration option: " + e);
                return k;
              } catch (t) {
                return !1;
              }
            else {
              if (2 <= arguments.length && "string" === typeof arguments[0]) {
                try {
                  if (!g(arguments[0], arguments[1])) return !1;
                } catch (t) {
                  return !1;
                }
                this.redraw();
                this.exposeColor();
                return !0;
              }
              if (1 === arguments.length && "object" === typeof arguments[0]) {
                k = arguments[0];
                e = !0;
                for (var r in k)
                  if (z.call(k, r))
                    try {
                      g(r, k[r]) || (e = !1);
                    } catch (t) {
                      e = !1;
                    }
                this.redraw();
                this.exposeColor();
                return e;
              }
            }
            throw Error("Invalid arguments");
          };
          this.channel = function (e, k) {
            if ("string" !== typeof e) throw Error("Invalid value for channel name: " + e);
            if ("undefined" === typeof k) return z.call(this.channels, e.toLowerCase()) ? this.channels[e.toLowerCase()] : !1;
            switch (e.toLowerCase()) {
              case "r":
                e = this.fromRGBA(k, null, null, null);
                break;
              case "g":
                e = this.fromRGBA(null, k, null, null);
                break;
              case "b":
                e = this.fromRGBA(null, null, k, null);
                break;
              case "h":
                e = this.fromHSVA(k, null, null, null);
                break;
              case "s":
                e = this.fromHSVA(null, k, null, null);
                break;
              case "v":
                e = this.fromHSVA(null, null, k, null);
                break;
              case "a":
                e = this.fromHSVA(null, null, null, k);
                break;
              default:
                return !1;
            }
            return e ? (this.redraw(), !0) : !1;
          };
          this.trigger = function (e) {
            e = b.strList(e);
            for (var k = 0; k < e.length; k += 1) {
              var r = e[k].toLowerCase(),
                t = null;
              switch (r) {
                case "input":
                  t = "onInput";
                  break;
                case "change":
                  t = "onChange";
              }
              t && b.triggerCallback(this, t);
              b.triggerInputEvent(this.valueElement, r, !0, !0);
            }
          };
          this.fromHSVA = function (e, k, r, t, y) {
            "undefined" === typeof e && (e = null);
            "undefined" === typeof k && (k = null);
            "undefined" === typeof r && (r = null);
            "undefined" === typeof t && (t = null);
            if (null !== e) {
              if (isNaN(e)) return !1;
              this.channels.h = Math.max(0, Math.min(360, e));
            }
            if (null !== k) {
              if (isNaN(k)) return !1;
              this.channels.s = Math.max(0, Math.min(100, this.maxS, k), this.minS);
            }
            if (null !== r) {
              if (isNaN(r)) return !1;
              this.channels.v = Math.max(0, Math.min(100, this.maxV, r), this.minV);
            }
            if (null !== t) {
              if (isNaN(t)) return !1;
              this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, t), this.minA) : 1;
            }
            e = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
            this.channels.r = e[0];
            this.channels.g = e[1];
            this.channels.b = e[2];
            this.exposeColor(y);
            return !0;
          };
          this.fromRGBA = function (e, k, r, t, y) {
            "undefined" === typeof e && (e = null);
            "undefined" === typeof k && (k = null);
            "undefined" === typeof r && (r = null);
            "undefined" === typeof t && (t = null);
            if (null !== e) {
              if (isNaN(e)) return !1;
              e = Math.max(0, Math.min(255, e));
            }
            if (null !== k) {
              if (isNaN(k)) return !1;
              k = Math.max(0, Math.min(255, k));
            }
            if (null !== r) {
              if (isNaN(r)) return !1;
              r = Math.max(0, Math.min(255, r));
            }
            if (null !== t) {
              if (isNaN(t)) return !1;
              this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, t), this.minA) : 1;
            }
            e = b.RGB_HSV(null === e ? this.channels.r : e, null === k ? this.channels.g : k, null === r ? this.channels.b : r);
            null !== e[0] && (this.channels.h = Math.max(0, Math.min(360, e[0])));
            0 !== e[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, e[1])));
            this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, e[2]));
            e = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
            this.channels.r = e[0];
            this.channels.g = e[1];
            this.channels.b = e[2];
            this.exposeColor(y);
            return !0;
          };
          this.fromHSV = function (e, k, r, t) {
            return this.fromHSVA(e, k, r, null, t);
          };
          this.fromRGB = function (e, k, r, t) {
            return this.fromRGBA(e, k, r, null, t);
          };
          this.fromString = function (e, k) {
            if (!this.required && "" === e.trim()) return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
            e = b.parseColorString(e);
            if (!e) return !1;
            "any" === this.format.toLowerCase() && (this._setFormat(e.format), b.isAlphaFormat(this.getFormat()) || (e.rgba[3] = 1));
            this.fromRGBA(e.rgba[0], e.rgba[1], e.rgba[2], e.rgba[3], k);
            return !0;
          };
          this.toString = function (e) {
            "undefined" === typeof e && (e = this.getFormat());
            switch (e.toLowerCase()) {
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
          this.hide = function () {
            this.scrollbar && this.scrollbar.removeEventListener("scroll", b.onWindowScroll, !1);
            x() &&
              (b.removeClass(f.targetElement, b.pub.activeClassName),
              b.picker.wrap && b.picker.wrap.parentNode && b.picker.wrap.parentNode.removeChild(b.picker.wrap),
              delete b.picker.owner);
          };
          this.show = function () {
            h();
            this.scrollbar && this.scrollbar.addEventListener("scroll", b.onWindowScroll, !1);
          };
          this.redraw = function () {
            x() && h();
          };
          this.getFormat = function () {
            return this._currentFormat;
          };
          this._setFormat = function (e) {
            this._currentFormat = e.toLowerCase();
          };
          this.hasAlphaChannel = function () {
            return "auto" === this.alphaChannel ? "any" === this.format.toLowerCase() || b.isAlphaFormat(this.getFormat()) || "undefined" !== typeof this.alpha : this.alphaChannel;
          };
          this.processValueInput = function (e) {
            this.fromString(e) || this.exposeColor();
          };
          this.exposeColor = function (e) {
            var k = this.toString(),
              r = this.getFormat();
            b.setDataAttr(this.targetElement, "current-color", k);
            if (!(e & b.flags.leaveValue) && this.valueElement) {
              if ("hex" === r || "hexa" === r) this.uppercase || (k = k.toLowerCase()), this.hash || (k = k.replace(/^#/, ""));
              this.setValueElementValue(k);
            }
            e & b.flags.leavePreview || !this.previewElement || this.setPreviewElementBg(this.toRGBAString());
            x() && (l(), p(), n());
          };
          this.setPreviewElementBg = function (e) {
            if (this.previewElement) {
              var k = null,
                r = null;
              b.isTextInput(this.previewElement) && ((k = this.previewPosition), (r = this.previewSize));
              var t = [];
              t.push({ size: "auto" });
              if (e) {
                var y = b.genColorPreviewCanvas("rgba(0,0,0,0)", k ? { left: "right", right: "left" }[k] : null, r, !0);
                t.push({ size: y.width + "px " + y.height + "px" });
              }
              y = [];
              for (var C = 0; C < t.length; C += 1) y.push(t[C].size);
              e = {
                "--fr-input-color": e,
                "--fr-input-color-edge": r + "px",
                "--fr-input-color-edge2": r + 1 + "px",
                "--fr-input-gb-size": y.join(", "),
              };
              b.setStyle(this.previewElement, e, !this.forceStyle);
              e = { left: null, right: null };
              k && (e[k] = this.previewSize + this.previewPadding + "px");
              b.setStyle(this.previewElement, { "--fr-input-padding-left": e.left }, !this.forceStyle, !0);
            }
          };
          this.setValueElementValue = function (e) {
            this.valueElement && ("input" === b.nodeName(this.valueElement) ? (this.valueElement.value = e) : (this.valueElement.textContent = e));
          };
          this._processParentElementsInDOM = function () {
            if (!this._parentElementsProcessed) {
              this._parentElementsProcessed = !0;
              var e = this.targetElement;
              do {
                var k = b.getCompStyle(e);
                if ((k.position && "fixed" === k.position.toLowerCase()) || e instanceof ShadowRoot) this.fixed = !0;
              } while ((e = e.parentNode) && "body" !== b.nodeName(e));
            }
          };
          this.tryHide = function () {
            this.hideOnLeave && this.hide();
          };
          if (b.pub.options)
            for (var G in b.pub.options)
              if (z.call(b.pub.options, G))
                try {
                  g(G, b.pub.options[G]);
                } catch (e) {
                  console.error(e);
                }
          for (var H in d)
            if (z.call(d, H))
              try {
                g(H, d[H]);
              } catch (e) {
                console.error(e);
              }
          this.configShadow.addEventListener("click", b.onConfigIfMouseDown, !1);
          this.container = "undefined" === typeof this.container ? q.document.documentElement : b.node(this.container);
          if (!this.container) throw Error("No container element");
          this.targetElement = b.node(a);
          if (!this.targetElement) throw Error("No target element");
          if (this.targetElement.frcp && this.targetElement.frcp instanceof b.pub) throw Error("Redundant Fr-Color-picker");
          this.targetElement.frcp = this;
          b.addClass(this.targetElement, b.pub.className);
          b.instances.push(this);
          "undefined" === typeof this.valueElement
            ? b.isTextInput(this.targetElement) && (this.valueElement = this.targetElement)
            : null !== this.valueElement && (this.valueElement = b.node(this.valueElement));
          "undefined" === typeof this.previewElement ? (this.previewElement = this.targetElement) : null !== this.previewElement && (this.previewElement = b.node(this.previewElement));
          this.valueElement &&
            b.isTextInput(this.valueElement) &&
            ((a = this.valueElement.oninput),
            (this.valueElement.oninput = null),
            this.valueElement.addEventListener("change", w, !1),
            this.valueElement.addEventListener("input", na, !1),
            a && this.valueElement.addEventListener("input", a, !1),
            this.valueElement.setAttribute("autocomplete", "off"),
            this.valueElement.setAttribute("autocorrect", "off"),
            this.valueElement.setAttribute("autocapitalize", "off"),
            this.valueElement.setAttribute("spellcheck", !1));
          a = "FFFFFF";
          "undefined" !== typeof this.value ? (a = this.value) : this.valueElement && "undefined" !== typeof this.valueElement.value && (a = this.valueElement.value);
          this._currentFormat = null;
          -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
            ? (this._currentFormat = (c = b.parseColorString(a)) ? c.format : "hex")
            : (this._currentFormat = this.format.toLowerCase());
          this.processValueInput(a);
        },
      };
      b.pub.className = ja;
      b.pub.activeClassName = ka;
      b.pub.looseJSON = !0;
      b.pub.sliderInnerSpace = 3;
      b.pub.chessboardSize = 8;
      b.pub.chessboardColor1 = "#666666";
      b.pub.chessboardColor2 = "#999999";
      b.pub.init = function () {
        if (!b.initialized) {
          q.addEventListener("resize", b.onWindowResize, !1);
          q.addEventListener("scroll", b.onWindowScroll, !1);
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
        var c = function () {
          b.triggerGlobal(a);
        };
        b.initialized ? c() : b.pub.ready(c);
      };
      b.pub.hide = function () {
        b.picker && b.picker.owner && b.picker.owner.hide();
      };
      b.pub.options = {};
      b.register();
      return b.pub;
    })();
  "undefined" === typeof q.FRColorPicker && (q.FRColorPicker = E);
  return E;
});
