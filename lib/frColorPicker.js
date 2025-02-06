// ==UserScript==
// @name        frColorPicker
// @version     6.6.8
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

void (function (n, A, C) {
  "object" === typeof module && "object" === typeof module.exports
    ? (module.exports = n.document
        ? A(n, C)
        : function (x) {
            if (!x.document) throw Error("No Document!");
            return A(x, C);
          })
    : A(n, C);
})(
  "undefined" !== typeof window ? window : this,
  function (n, A) {
    n.self === n.top &&
      n.trustedTypes &&
      n.trustedTypes.createPolicy &&
      (A = n.trustedTypes.createPolicy(
        (function (x) {
          x = void 0 === x ? "fr#ColorPicker" : x;
          for (
            var D = [
                { host: "teams.live.com", policy: "gapi#gapi" },
                { host: "github.dev", policy: "standaloneColorizer" },
                { host: "vscode.dev", policy: "standaloneColorizer" },
              ],
              E = 0;
            E < D.length;
            E++
          )
            if (location.hostname.startsWith(D[E].host)) {
              x = D[E].policy;
              break;
            }
          return x;
        })(),
        {
          createHTML: function (x) {
            return x;
          },
        }
      ));
    var C = (function () {
      var x = function (b) {
          b = new Uint8Array(b);
          n.crypto.getRandomValues(b);
          return (
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[b[0] % 52] +
            Array.from(b.slice(1), function (d) {
              return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[d % 62];
            }).join("")
          );
        },
        D = x(9),
        E = x(8),
        J = x(12),
        K = x(8),
        L = x(7),
        M = x(7),
        G,
        a = {
          initialized: !1,
          instances: [],
          readyQueue: [],
          register: function () {
            "undefined" !== typeof n &&
              n.document &&
              ("loading" === n.document.readyState
                ? n.document.addEventListener("DOMContentLoaded", a.pub.init, !1)
                : n.document.documentElement
                ? a.pub.init()
                : n.addEventListener("load", a.pub.init, !1));
          },
          getInstances: function () {
            for (var b = [], d = 0; d < a.instances.length; d += 1) a.instances[d] && a.instances[d].targetElement && b.push(a.instances[d]);
            return b;
          },
          createEl: function (b) {
            b = n.document.createElement(b);
            a.setData(b, "gui", !0);
            return b;
          },
          node: function (b) {
            if (!b) return null;
            if ("string" === typeof b) {
              var d = null;
              try {
                d = n.document.querySelector(b) || G.querySelector(b);
              } catch (e) {
                return null;
              }
              d || console.warn("No element matche: %s", b);
              return d;
            }
            return a.isNode(b) ? b : null;
          },
          isNode: function (b) {
            return "object" === typeof Node ? b instanceof Node : b && "object" === typeof b && "number" === typeof b.nodeType && "string" === typeof b.nodeName;
          },
          nodeName: function (b) {
            return b && b.nodeName ? b.nodeName.toLowerCase() : !1;
          },
          removeChildren: function (b) {
            for (; b.firstChild; ) b.removeChild(b.firstChild);
          },
          isTextInput: function (b) {
            return b && "input" === a.nodeName(b) && "text" === b.type.toLowerCase();
          },
          isButton: function (b) {
            if (!b) return !1;
            var d = a.nodeName(b);
            return "button" === d || ("input" === d && -1 < ["button", "submit", "reset"].indexOf(b.type.toLowerCase()));
          },
          isButtonEmpty: function (b) {
            switch (a.nodeName(b)) {
              case "input":
                return !b.value || "" === b.value.trim();
              case "button":
                return "" === b.textContent.trim();
            }
            return null;
          },
          isPassiveEventSupported: (function () {
            var b = !1;
            try {
              var d = Object.defineProperty({}, "passive", {
                get: function () {
                  b = !0;
                },
              });
              n.addEventListener("testPassive", null, d);
              n.removeEventListener("testPassive", null, d);
            } catch (e) {
              console.error(e);
            }
            return b;
          })(),
          isColorAttrSupported: (function () {
            var b = n.document.createElement("input");
            return b.setAttribute && (b.setAttribute("type", "color"), b.type && "color" == b.type.toLowerCase()) ? !0 : !1;
          })(),
          dataProp: "_data_frcolorpicker",
          setData: function () {
            var b = arguments[0];
            if (3 === arguments.length) {
              b = b.hasOwnProperty(a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {});
              var d = arguments[1];
              b[d] = arguments[2];
              return !0;
            }
            if (2 === arguments.length && "object" === typeof arguments[1]) {
              b = b.hasOwnProperty(a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {});
              var e = arguments[1];
              for (d in e) e.hasOwnProperty(d) && (b[d] = e[d]);
              return !0;
            }
            throw Error("Invalid arguments");
          },
          removeData: function () {
            var b = arguments[0];
            if (!b.hasOwnProperty(a.dataProp)) return !0;
            for (var d = 1; d < arguments.length; d += 1) delete b[a.dataProp][arguments[d]];
            return !0;
          },
          getData: function (b, d, e) {
            if (!b.hasOwnProperty(a.dataProp))
              if (void 0 !== e) b[a.dataProp] = {};
              else return;
            b = b[a.dataProp];
            b.hasOwnProperty(d) || void 0 === e || (b[d] = e);
            return b[d];
          },
          getDataAttr: function (b, d) {
            return b.getAttribute("data-" + d);
          },
          setDataAttr: function (b, d, e) {
            b.setAttribute("data-" + d, e);
          },
          _attachedGroupEvents: {},
          attachGroupEvent: function (b, d, e, g) {
            a._attachedGroupEvents.hasOwnProperty(b) || (a._attachedGroupEvents[b] = []);
            a._attachedGroupEvents[b].push([d, e, g]);
            d.addEventListener(e, g, !1);
          },
          detachGroupEvents: function (b) {
            if (a._attachedGroupEvents.hasOwnProperty(b)) {
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
              if ("function" === typeof Event) var k = new Event(d, { bubbles: e, cancelable: g });
              else (k = n.document.createEvent("Event")), k.initEvent(d, e, g);
              if (!k) return !1;
              a.setData(k, "internal", !0);
              b.dispatchEvent(k);
              return !0;
            }
          },
          triggerInputEvent: function (b, d, e, g) {
            b && a.isTextInput(b) && a.triggerEvent(b, d, e, g);
          },
          eventKey: function (b) {
            var d = { 9: "Tab", 13: "Enter", 27: "Escape" };
            return "string" === typeof b.code ? b.code : void 0 !== b.keyCode && d.hasOwnProperty(b.keyCode) ? d[b.keyCode] : null;
          },
          strList: function (b) {
            return b ? b.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
          },
          hasClass: function (b, d) {
            return d ? (void 0 !== b.classList ? b.classList.contains(d) : -1 != (" " + b.className.replace(/\s+/g, " ") + " ").indexOf(" " + d + " ")) : !1;
          },
          addClass: function (b, d) {
            d = a.strList(d);
            if (void 0 !== b.classList) for (var e = 0; e < d.length; e += 1) b.classList.add(d[e]);
            else for (e = 0; e < d.length; e += 1) a.hasClass(b, d[e]) || (b.className += (b.className ? " " : "") + d[e]);
          },
          removeClass: function (b, d) {
            d = a.strList(d);
            if (void 0 !== b.classList) for (var e = 0; e < d.length; e += 1) b.classList.remove(d[e]);
            else for (e = 0; e < d.length; e += 1) b.className = b.className.replace(new RegExp("^\\s*" + d[e] + "\\s*|\\s*" + d[e] + "\\s*$|\\s+" + d[e] + "(\\s+)", "g"), "$1");
          },
          getCompStyle: function (b) {
            return b instanceof ShadowRoot ? {} : (b = n.getComputedStyle ? n.getComputedStyle(b) : b.currentStyle) ? b : {};
          },
          setStyle: function (b, d, e, g) {
            e = e ? "important" : "";
            var k = null,
              l;
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var m = null;
                null === d[l]
                  ? (k || (k = a.getData(b, "origStyle")), k && k.hasOwnProperty(l) && (m = k[l]))
                  : (g && (k || (k = a.getData(b, "origStyle", {})), k.hasOwnProperty(l) || (k[l] = b.style[l])), (m = d[l]));
                null !== m && b.style.setProperty(l, m, e);
              }
          },
          hexColor: function (b, d, e) {
            return "#" + (("0" + Math.round(b).toString(16)).slice(-2) + ("0" + Math.round(d).toString(16)).slice(-2) + ("0" + Math.round(e).toString(16)).slice(-2)).toUpperCase();
          },
          hexaColor: function (b, d, e, g) {
            return (
              "#" +
              (
                ("0" + Math.round(b).toString(16)).slice(-2) +
                ("0" + Math.round(d).toString(16)).slice(-2) +
                ("0" + Math.round(e).toString(16)).slice(-2) +
                ("0" + Math.round(255 * g).toString(16)).slice(-2)
              ).toUpperCase()
            );
          },
          rgbColor: function (b, d, e) {
            return "rgb(" + Math.round(b) + "," + Math.round(d) + "," + Math.round(e) + ")";
          },
          rgbaColor: function (b, d, e, g) {
            return "rgba(" + Math.round(b) + "," + Math.round(d) + "," + Math.round(e) + "," + Math.round(100 * (void 0 === g || null === g ? 1 : g)) / 100 + ")";
          },
          setBorderRadius: function (b, d) {
            a.setStyle(b, { "border-radius": d || "0" });
          },
          setBoxShadow: function (b, d) {
            a.setStyle(b, { "box-shadow": d || "none" });
          },
          getElementPos: function (b, d) {
            var e = n.frDOMRects;
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
            var d = n.frDOMRects;
            "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
            var e = 0,
              g = 0;
            "undefined" !== typeof b.changedTouches && b.changedTouches.length
              ? ((e = b.changedTouches[0].x * d.cur), (g = b.changedTouches[0].y * d.cur))
              : "number" === typeof b.x && ((e = b.x * d.cur), (g = b.y * d.cur));
            return { x: e, y: g };
          },
          getRelPointerPos: function (b) {
            var d = n.frDOMRects;
            "undefined" === typeof d && (d = { toggle: !1, cur: 1, prev: 1 });
            var e = (b.target || b.srcElement).getBoundingClientRect(),
              g = d.toggle ? d.cur : 1,
              k = 0,
              l = 0;
            "undefined" !== typeof b.changedTouches && b.changedTouches.length
              ? ((k = b.changedTouches[0].x * d.cur), (l = b.changedTouches[0].y * d.cur))
              : "number" === typeof b.x && ((k = b.x * d.cur), (l = b.y * d.cur));
            return { x: k - e.left * g, y: l - e.top * g };
          },
          getViewPos: function () {
            var b = n.document.documentElement;
            return [(n.pageXOffset || b.scrollLeft) - (b.clientLeft || 0), (n.pageYOffset || b.scrollTop) - (b.clientTop || 0)];
          },
          getViewSize: function () {
            var b = n.document.documentElement;
            return [n.innerWidth || b.clientWidth, n.innerHeight || b.clientHeight];
          },
          RGB_HSV: function (b, d, e) {
            b /= 255;
            d /= 255;
            e /= 255;
            var g = Math.min(Math.min(b, d), e),
              k = Math.max(Math.max(b, d), e),
              l = k - g;
            if (0 === l) return [null, 0, 100 * k];
            b = b === g ? 3 + (e - d) / l : d === g ? 5 + (b - e) / l : 1 + (d - b) / l;
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
            var d = { rgba: null, format: null },
              e;
            if ((e = b.match(/^\W*([0-9A-F]{3,8})\W*$|^currentcolor$/i))) {
              if ("currentcolor" === e[0].toLowerCase()) return (d.format = "hexa"), (d.rgba = [255, 255, 255, 255]), d;
              if (8 === e[1].length)
                (d.format = "hexa"), (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), parseInt(e[1].slice(6, 8), 16) / 255]);
              else if (6 === e[1].length) (d.format = "hex"), (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), 1]);
              else if (3 === e[1].length)
                (d.format = "hex"),
                  (d.rgba = [parseInt(e[1].charAt(0) + e[1].charAt(0), 16), parseInt(e[1].charAt(1) + e[1].charAt(1), 16), parseInt(e[1].charAt(2) + e[1].charAt(2), 16), 1]);
              else return !1;
              return d;
            }
            if ((e = b.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
              b = e[1].split(",");
              e = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
              var g, k, l, m;
              if (3 <= b.length && (g = b[0].match(e)) && (k = b[1].match(e)) && (l = b[2].match(e)))
                return (
                  (d.format = "rgb"),
                  (d.rgba = [parseFloat(g[1]) || 0, parseFloat(k[1]) || 0, parseFloat(l[1]) || 0, 1]),
                  4 <= b.length && (m = b[3].match(e)) && ((d.format = "rgba"), (d.rgba[3] = parseFloat(m[1]) || 0)),
                  d
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
            var d = n.devicePixelRatio || 1;
            b.width *= d;
            b.height *= d;
            b.getContext("2d").scale(d, d);
          },
          genColorPreviewCanvas: function (b, d, e, g) {
            var k = Math.round(a.pub.previewSeparator.length),
              l = a.pub.chessboardSize,
              m = a.pub.chessboardColor1,
              r = a.pub.chessboardColor2;
            e = e ? e : 2 * l;
            var t = 2 * l,
              u = a.createEl("canvas"),
              y = u.getContext("2d");
            u.width = e;
            u.height = t;
            g && a.scaleCanvasForHighDPR(u);
            y.fillStyle = m;
            y.fillRect(0, 0, e, t);
            y.fillStyle = r;
            for (g = 0; g < e; g += 2 * l) y.fillRect(g, 0, l, l), y.fillRect(g + l, l, l, l);
            b && ((y.fillStyle = b), y.fillRect(0, 0, e, t));
            b = null;
            switch (d) {
              case "left":
                b = 0;
                y.clearRect(0, 0, k / 2, t);
                break;
              case "right":
                (b = e - k), y.clearRect(e - k / 2, 0, k / 2, t);
            }
            if (null !== b)
              for (y.lineWidth = 1, d = 0; d < a.pub.previewSeparator.length; d += 1)
                y.beginPath(), (y.strokeStyle = a.pub.previewSeparator[d]), y.moveTo(0.5 + b + d, 0), y.lineTo(0.5 + b + d, t), y.stroke();
            return { canvas: u, width: e, height: t };
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
                l = a.getPickerDims(b);
              l = [l.borderW, l.borderH];
              switch (b.position.toLowerCase()) {
                case "left":
                  var m = 1;
                  var r = 0;
                  var t = -1;
                  break;
                case "right":
                  m = 1;
                  r = 0;
                  t = 1;
                  break;
                case "top":
                  m = 0;
                  r = 1;
                  t = -1;
                  break;
                default:
                  (m = 0), (t = r = 1);
              }
              var u = (g[r] + l[r]) / 2;
              e = b.smartPosition
                ? [
                    -e[m] + d[m] + l[m] > k[m] ? (-e[m] + d[m] + g[m] / 2 > k[m] / 2 && 0 <= d[m] + g[m] - l[m] ? d[m] + g[m] - l[m] : d[m]) : d[m],
                    -e[r] + d[r] + g[r] + l[r] - u + u * t > k[r]
                      ? -e[r] + d[r] + g[r] / 2 > k[r] / 2 && 0 <= d[r] + g[r] - u - u * t
                        ? d[r] + g[r] - u - u * t - 4
                        : d[r] + g[r] - u + u * t + 4
                      : 0 <= d[r] + g[r] - u + u * t
                      ? d[r] + g[r] - u + u * t - 4
                      : d[r] + g[r] - u - u * t + 4,
                  ]
                : [d[m], d[r] + g[r] - u + u * t - 4];
              a._drawPosition(b, e[m], e[r], b.fixed ? "fixed" : "absolute", (e[0] + l[0] > d[0] || e[0] < d[0] + g[0]) && e[1] + l[1] < d[1] + g[1]);
            }
          },
          _drawPosition: function (b, d, e, g, k) {
            k = k ? 0 : b.shadowBlur;
            a.picker.wrap.style.left = d + "px";
            a.picker.wrap.style.top = e + "px";
            a.picker.wrap.style.position = g;
            a.setBoxShadow(a.picker.boxS, b.shadow ? new a.BoxShadow(0, k, b.shadowBlur, 0, b.shadowColor) : null);
          },
          getPickerDims: function (b) {
            var d = 2 * b.controlBorderWidth + b.width,
              e = 2 * b.controlBorderWidth + b.height,
              g = 2 * b.controlBorderWidth + 2 * a.getControlPadding(b) + b.sliderSize;
            a.getSliderChannel(b) && (d += g);
            b.hasAlphaChannel() && (d += g);
            b.closeButton && (e += 2 * b.controlBorderWidth + b.padding + b.buttonHeight);
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
            return Math.max(b.padding / 2, 2 * b.pointerBorderWidth + b.pointerThickness - b.controlBorderWidth);
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
            for (var d = a.getInstances(), e = 0; e < d.length; e += 1) d[e].trigger(b);
          },
          _pointerMoveEvent: { mouse: "mousemove", touch: "touchmove" },
          _pointerEndEvent: { mouse: "mouseup", touch: "touchend" },
          _pointerOrigin: null,
          onDocumentKeyUp: function (b) {
            -1 !== ["Tab", "Escape"].indexOf(a.eventKey(b)) && a.picker && a.picker.owner && a.picker.owner.tryHide();
          },
          onWindowResize: function (b) {
            a.redrawPosition();
          },
          onWindowScroll: function (b) {
            a.redrawPosition();
          },
          onParentScroll: function (b) {
            a.picker && a.picker.owner && a.picker.owner.tryHide();
          },
          onConfigIfMouseDown: function (b) {
            b = b.composedPath()[0] || b.target || b.srcElement;
            b.frcp && b.frcp instanceof a.pub
              ? b.frcp.showOnClick && !b.disabled && (a.picker && a.picker.owner ? a.picker.owner.tryHide() : b.frcp.show())
              : a.picker && a.picker.owner && a.picker.owner.tryHide();
          },
          onDocumentMouseDown: function (b) {
            if (!b.target || !b.target.nodeName || "fr-configure" !== b.target.nodeName.toLowerCase()) {
              var d = b.target || b.srcElement;
              if (a.getData(d, "gui")) {
                if (a.getData(d, "control")) a.onControlPointerStart(b, d, a.getData(d, "control"), "mouse");
              } else a.picker && a.picker.owner && a.picker.owner.tryHide();
            }
          },
          onPickerTouchStart: function (b) {
            var d = b.target || b.srcElement;
            if (a.getData(d, "control")) a.onControlPointerStart(b, d, a.getData(d, "control"), "touch");
          },
          onControlPointerStart: function (b, d, e, g) {
            var k = a.getData(d, "instance");
            a.preventDefault(b);
            var l = function (t, u) {
              a.attachGroupEvent("drag", t, a._pointerMoveEvent[g], a.onDocumentPointerMove(b, d, e, g, u));
              a.attachGroupEvent("drag", t, a._pointerEndEvent[g], a.onDocumentPointerEnd(b, d, e, g));
            };
            l(n.document, [0, 0]);
            if (n.parent && n.frameElement) {
              var m = n.frDOMRects;
              "undefined" === typeof m && (m = { toggle: !1, cur: 1, prev: 1 });
              m = m.toggle ? m.cur : 1;
              var r = n.frameElement.getBoundingClientRect();
              l(n.parent.window.document, [-r.left * m, -r.top * m]);
            }
            l = a.getAbsPointerPos(b);
            m = a.getRelPointerPos(b);
            a._pointerOrigin = { x: l.x - m.x, y: l.y - m.y };
            switch (e) {
              case "pad":
                "v" === a.getSliderChannel(k) && 0 === k.channels.v && k.fromHSVA(null, null, 100, null);
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
              var m = a.getData(d, "instance");
              switch (e) {
                case "pad":
                  a.setPad(m, l, k[0], k[1]);
                  break;
                case "sld":
                  a.setSld(m, l, k[1]);
                  break;
                case "asld":
                  a.setASld(m, l, k[1]);
              }
              m.trigger("input");
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
            e = (360 / (b.width - 1)) * (e + d.x - a._pointerOrigin.x - b.padding - b.controlBorderWidth);
            g = 100 - (100 / (b.height - 1)) * (g + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
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
            e = 100 - (100 / (b.height - 1)) * (e + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
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
            e = 1 - (1 / (b.height - 1)) * (e + d.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
            1 > e && ((d = b.getFormat()), "any" !== b.format.toLowerCase() || a.isAlphaFormat(d) || b._setFormat("hex" === d ? "hexa" : "rgba"));
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
                  g.addColorStop(0, "rgba(0,0,0,0)"), g.addColorStop(1, "rgba(0,0,0,1)");
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
            b.draw = function (g, k, l, m) {
              d.width = g;
              d.height = k;
              e.clearRect(0, 0, d.width, d.height);
              g = e.createLinearGradient(0, 0, 0, d.height);
              g.addColorStop(0, l);
              g.addColorStop(1, m);
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
              if (0 < g) for (var m = 0; m < d.height; m += 2 * g) (e.fillStyle = k), e.fillRect(0, m, g, g), e.fillRect(g, m + g, g, g);
              g = e.createLinearGradient(0, 0, 0, d.height);
              g.addColorStop(0, l);
              g.addColorStop(1, "rgba(0,0,0,0)");
              e.fillStyle = g;
              e.fillRect(0, 0, d.width, d.height);
            };
            return b;
          },
          BoxShadow: (function () {
            var b = function (d, e, g, k, l, m) {
              this.hShadow = d;
              this.vShadow = e;
              this.blur = g;
              this.spread = k;
              this.color = l;
              this.inset = !!m;
            };
            b.prototype.toString = function () {
              var d = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
              this.inset && d.push("inset");
              return d.join(" ");
            };
            return b;
          })(),
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
          pub: function (b, d, e) {
            function g(c, h) {
              if ("string" !== typeof c) throw Error("Invalid value for option name: " + c);
              if (a.enumOpts.hasOwnProperty(c) && ("string" === typeof h && (h = h.toLowerCase()), -1 === a.enumOpts[c].indexOf(h)))
                throw Error("Option '" + c + "' has invalid value: " + h);
              if (a.deprecatedOpts.hasOwnProperty(c)) {
                var p = a.deprecatedOpts[c];
                if (p) c = p;
                else throw Error("Option '" + c + "' is DEPRECATED");
              }
              p = "set__" + c;
              if ("function" === typeof f[p]) return f[p](h), !0;
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
                  boxS: a.createEl("div"),
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
                a.picker.wrap.appendChild(a.picker.boxS),
                a.picker.wrap.appendChild(a.picker.boxB),
                a.picker.wrap.addEventListener("touchstart", a.onPickerTouchStart, a.isPassiveEventSupported ? { passive: !1 } : !1));
              var c = a.picker,
                h = !!a.getSliderChannel(f),
                p = f.hasAlphaChannel(),
                q = a.getPickerDims(f),
                v = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
                w = a.getControlPadding(f),
                B = Math.min(f.borderRadius, Math.round(f.padding * Math.PI));
              c.wrap.className = J;
              c.wrap.style.clear = "both";
              c.wrap.style.display = "block";
              c.wrap.style.visibility = "visible";
              c.wrap.style.opacity = "1";
              c.wrap.style.width = q.borderW + "px";
              c.wrap.style.height = q.borderH + "px";
              c.wrap.style.zIndex = f.zIndex;
              c.box.className = K;
              c.box.style.width = q.paddedW + "px";
              c.box.style.height = q.paddedH + "px";
              c.box.style.position = "relative";
              c.boxS.className = L;
              c.boxS.style.position = "absolute";
              c.boxS.style.left = "0";
              c.boxS.style.top = "0";
              c.boxS.style.width = "100%";
              c.boxS.style.height = "100%";
              a.setBorderRadius(c.boxS, B + "px");
              c.boxB.className = M;
              c.boxB.style.position = "relative";
              c.boxB.style.setProperty("border", f.borderWidth + "px solid " + f.borderColor, "important");
              c.boxB.style.setProperty("background", f.backgroundColor, "important");
              a.setBorderRadius(c.boxB, B + "px");
              c.padM.style.background = "rgba(255,0,0,.2)";
              c.sldM.style.background = "rgba(0,255,0,.2)";
              c.asldM.style.background = "rgba(0,0,255,.2)";
              c.padM.style.opacity = c.sldM.style.opacity = c.asldM.style.opacity = "0";
              c.pad.style.position = "relative";
              c.pad.style.width = f.width + "px";
              c.pad.style.height = f.height + "px";
              c.padCanvas.draw(f.width, f.height, a.getPadYChannel(f));
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
              a.setData(c.padM, { instance: f, control: "pad" });
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
              c.sldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + (p ? 0 : Math.max(0, f.padding - w)) + "px";
              c.sldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.sldM.style.cursor = "default";
              a.setData(c.sldM, { instance: f, control: "sld" });
              c.sldPtrIB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
              c.sldPtrOB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
              c.sldPtrOB.style.position = "absolute";
              c.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.sldPtrOB.style.top = "0";
              c.sldPtrMB.style.setProperty("border", f.pointerThickness + "px solid " + f.pointerColor, "important");
              c.sldPtrS.style.width = f.sliderSize + "px";
              c.sldPtrS.style.height = a.pub.sliderInnerSpace + "px";
              c.asld.style.overflow = "hidden";
              c.asld.style.width = f.sliderSize + "px";
              c.asld.style.height = f.height + "px";
              c.asldGrad.draw(f.sliderSize, f.height, "#000");
              c.asldB.style.display = p ? "block" : "none";
              c.asldB.style.position = "absolute";
              c.asldB.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (h ? f.sliderSize + 3 * w + 2 * f.controlBorderWidth : 0) + "px";
              c.asldB.style.top = f.padding + "px";
              c.asldB.style.border = f.controlBorderWidth + "px solid";
              c.asldB.style.setProperty("border-color", f.controlBorderColor, "important");
              c.asldM.style.display = p ? "block" : "none";
              c.asldM.style.position = "absolute";
              c.asldM.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (h ? f.sliderSize + 2 * w + 2 * f.controlBorderWidth : 0) + "px";
              c.asldM.style.top = "0px";
              c.asldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + Math.max(0, f.padding - w) + "px";
              c.asldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.asldM.style.cursor = "default";
              a.setData(c.asldM, { instance: f, control: "asld" });
              c.asldPtrIB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
              c.asldPtrOB.style.setProperty("border", f.pointerBorderWidth + "px solid " + f.pointerBorderColor, "important");
              c.asldPtrOB.style.position = "absolute";
              c.asldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.asldPtrOB.style.top = "0";
              c.asldPtrMB.style.setProperty("border", f.pointerThickness + "px solid " + f.pointerColor, "important");
              c.asldPtrS.style.width = f.sliderSize + "px";
              c.asldPtrS.style.height = a.pub.sliderInnerSpace + "px";
              l();
              m();
              r();
              a.picker.owner && a.picker.owner !== f && a.removeClass(a.picker.owner.targetElement, a.pub.activeClassName);
              a.picker.owner = f;
              f.container === n.document.documentElement ? a.redrawPosition() : a._drawPosition(f, 0, 0, "relative", !1);
              c.wrap.parentNode !== f.container &&
                (h = a.node("dialog[id^='fr-dialog-']")) &&
                (h.appendChild(c.wrap), h.hasAttribute("open") && h.close && h.close(), (h.inert = !0), h.showModal && h.showModal(), h.removeAttribute("inert"), h.focus());
              a.addClass(f.targetElement, a.pub.activeClassName);
            }
            function l() {
              var c = a.getPadYChannel(f);
              c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
              var h = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
              a.picker.cross.style.left = Math.round((f.channels.h / 360) * (f.width - 1)) + h + "px";
              a.picker.cross.style.top = c + h + "px";
              switch (a.getSliderChannel(f)) {
                case "s":
                  h = a.HSV_RGB(f.channels.h, 100, f.channels.v);
                  c = a.HSV_RGB(f.channels.h, 0, f.channels.v);
                  h = "rgb(" + Math.round(h[0]) + "," + Math.round(h[1]) + "," + Math.round(h[2]) + ")";
                  a.picker.sldGrad.draw(f.sliderSize, f.height, h, "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")");
                  break;
                case "v":
                  (c = a.HSV_RGB(f.channels.h, f.channels.s, 100)),
                    (h = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")"),
                    a.picker.sldGrad.draw(f.sliderSize, f.height, h, "#000");
              }
              a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function m() {
              var c = a.getSliderChannel(f);
              c &&
                (a.picker.sldPtrOB.style.top =
                  Math.round((1 - f.channels[c] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2) + "px");
              a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function r() {
              a.picker.asldPtrOB.style.top =
                Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2) + "px";
            }
            function t() {
              return a.picker && a.picker.owner === f;
            }
            function u(c) {
              "Enter" === a.eventKey(c) && (f.valueElement && f.processValueInput(f.valueElement.value), f.tryHide());
            }
            function y(c) {
              "Enter" === a.eventKey(c) && (f.alphaElement && f.processAlphaInput(f.alphaElement.value), f.tryHide());
            }
            function N(c) {
              a.getData(c, "internal") ||
                ((c = f.valueElement.value),
                f.processValueInput(f.valueElement.value),
                a.triggerCallback(f, "onChange"),
                f.valueElement.value !== c && a.triggerInputEvent(f.valueElement, "change", !0, !0));
            }
            function O(c) {
              a.getData(c, "internal") ||
                ((c = f.alphaElement.value),
                f.processAlphaInput(f.alphaElement.value),
                a.triggerCallback(f, "onChange"),
                a.triggerInputEvent(f.valueElement, "change", !0, !0),
                f.alphaElement.value !== c && a.triggerInputEvent(f.alphaElement, "change", !0, !0));
            }
            function P(c) {
              a.getData(c, "internal") || (f.valueElement && f.fromString(f.valueElement.value, a.flags.leaveValue), a.triggerCallback(f, "onInput"));
            }
            function Q(c) {
              a.getData(c, "internal") ||
                (f.alphaElement && f.fromHSVA(null, null, null, parseFloat(f.alphaElement.value), a.flags.leaveAlpha),
                a.triggerCallback(f, "onInput"),
                a.triggerInputEvent(f.valueElement, "input", !0, !0));
            }
            G = d;
            G.addEventListener("click", a.onConfigIfMouseDown, !1);
            var f = this;
            e || (e = {});
            this.channels = {
              r: 255,
              g: 255,
              b: 255,
              h: 0,
              s: 0,
              v: 100,
              a: 1,
            };
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
            this.shadow = !0;
            this.shadowBlur = 4;
            this.shadowColor = "rgba(0, 0, 0, 0.4)";
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
                  if (a.deprecatedOpts.hasOwnProperty(c)) {
                    var h = a.deprecatedOpts[c];
                    if (h) c = h;
                    else throw Error("Option '" + c + "' is DEPRECATED");
                  }
                  var p = "get__" + c;
                  if ("function" === typeof f[p]) var q = f[p](value);
                  else if (c in f) q = f[c];
                  else throw Error("Unrecognized configuration option: " + c);
                  return q;
                } catch (v) {
                  console.error(v);
                }
                return !1;
              }
              if (2 <= arguments.length && "string" === typeof arguments[0]) {
                try {
                  if (!g(arguments[0], arguments[1])) return !1;
                } catch (v) {
                  return console.error(v), !1;
                }
                this.redraw();
                this.exposeColor();
                return !0;
              }
              if (1 === arguments.length && "object" === typeof arguments[0]) {
                q = arguments[0];
                c = !0;
                for (p in q)
                  if (q.hasOwnProperty(p))
                    try {
                      g(p, q[p]) || (c = !1);
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
              if (void 0 === h) return this.channels.hasOwnProperty(c.toLowerCase()) ? this.channels[c.toLowerCase()] : !1;
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
                var p = c[h].toLowerCase(),
                  q = null;
                switch (p) {
                  case "input":
                    q = "onInput";
                    break;
                  case "change":
                    q = "onChange";
                }
                q && a.triggerCallback(this, q);
                a.triggerInputEvent(this.valueElement, p, !0, !0);
              }
            };
            this.fromHSVA = function (c, h, p, q, v) {
              void 0 === c && (c = null);
              void 0 === h && (h = null);
              void 0 === p && (p = null);
              void 0 === q && (q = null);
              if (null !== c) {
                if (isNaN(c)) return !1;
                this.channels.h = Math.max(0, Math.min(360, c));
              }
              if (null !== h) {
                if (isNaN(h)) return !1;
                this.channels.s = Math.max(0, Math.min(100, this.maxS, h), this.minS);
              }
              if (null !== p) {
                if (isNaN(p)) return !1;
                this.channels.v = Math.max(0, Math.min(100, this.maxV, p), this.minV);
              }
              if (null !== q) {
                if (isNaN(q)) return !1;
                this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, q), this.minA) : 1;
              }
              c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
              this.channels.r = c[0];
              this.channels.g = c[1];
              this.channels.b = c[2];
              this.exposeColor(v);
              return !0;
            };
            this.fromRGBA = function (c, h, p, q, v) {
              void 0 === c && (c = null);
              void 0 === h && (h = null);
              void 0 === p && (p = null);
              void 0 === q && (q = null);
              if (null !== c) {
                if (isNaN(c)) return !1;
                c = Math.max(0, Math.min(255, c));
              }
              if (null !== h) {
                if (isNaN(h)) return !1;
                h = Math.max(0, Math.min(255, h));
              }
              if (null !== p) {
                if (isNaN(p)) return !1;
                p = Math.max(0, Math.min(255, p));
              }
              if (null !== q) {
                if (isNaN(q)) return !1;
                this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, q), this.minA) : 1;
              }
              c = a.RGB_HSV(null === c ? this.channels.r : c, null === h ? this.channels.g : h, null === p ? this.channels.b : p);
              null !== c[0] && (this.channels.h = Math.max(0, Math.min(360, c[0])));
              0 !== c[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, c[1])));
              this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, c[2]));
              c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
              this.channels.r = c[0];
              this.channels.g = c[1];
              this.channels.b = c[2];
              this.exposeColor(v);
              return !0;
            };
            this.fromHSV = function (c, h, p, q) {
              return this.fromHSVA(c, h, p, null, q);
            };
            this.fromRGB = function (c, h, p, q) {
              return this.fromRGBA(c, h, p, null, q);
            };
            this.fromString = function (c, h) {
              if (!this.required && "" === c.trim()) return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
              c = a.parseColorString(c);
              if (!c) return !1;
              "any" === this.format.toLowerCase() && (this._setFormat(c.format), a.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
              this.fromRGBA(c.rgba[0], c.rgba[1], c.rgba[2], c.rgba[3], h);
              return !0;
            };
            this.randomize = function (c, h, p, q, v, w, B, H) {
              void 0 === c && (c = 0);
              void 0 === h && (h = 100);
              void 0 === p && (p = 0);
              void 0 === q && (q = 100);
              void 0 === v && (v = 0);
              void 0 === w && (w = 359);
              void 0 === B && (B = 1);
              void 0 === H && (H = 1);
              this.fromHSVA(
                v + Math.floor(Math.random() * (w - v + 1)),
                p + Math.floor(Math.random() * (q - p + 1)),
                c + Math.floor(Math.random() * (h - c + 1)),
                (100 * B + Math.floor(Math.random() * (100 * (H - B) + 1))) / 100
              );
            };
            this.toString = function (c) {
              void 0 === c && (c = this.getFormat());
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
              return a.hexColor(this.channels.r, this.channels.g, this.channels.b);
            };
            this.toHEXAString = function () {
              return a.hexaColor(this.channels.r, this.channels.g, this.channels.b, this.channels.a);
            };
            this.toRGBString = function () {
              return a.rgbColor(this.channels.r, this.channels.g, this.channels.b);
            };
            this.toRGBAString = function () {
              return a.rgbaColor(this.channels.r, this.channels.g, this.channels.b, this.channels.a);
            };
            this.toGrayscale = function () {
              return 0.213 * this.channels.r + 0.715 * this.channels.g + 0.072 * this.channels.b;
            };
            this.toCanvas = function () {
              return a.genColorPreviewCanvas(this.toRGBAString()).canvas;
            };
            this.isLight = function () {
              return 127.5 < this.toGrayscale();
            };
            this.hide = function () {
              t() &&
                (a.removeClass(f.targetElement, a.pub.activeClassName),
                a.picker.wrap && a.picker.wrap.parentNode && a.picker.wrap.parentNode.removeChild(a.picker.wrap),
                delete a.picker.owner);
            };
            this.show = function () {
              k();
            };
            this.redraw = function () {
              t() && k();
            };
            this.getFormat = function () {
              return this._currentFormat;
            };
            this._setFormat = function (c) {
              this._currentFormat = c.toLowerCase();
            };
            this.hasAlphaChannel = function () {
              return "auto" === this.alphaChannel
                ? "any" === this.format.toLowerCase() || a.isAlphaFormat(this.getFormat()) || void 0 !== this.alpha || void 0 !== this.alphaElement
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
                p = this.getFormat();
              a.setDataAttr(this.targetElement, "current-color", h);
              if (!(c & a.flags.leaveValue) && this.valueElement) {
                if ("hex" === p || "hexa" === p) this.uppercase || (h = h.toLowerCase()), this.hash || (h = h.replace(/^#/, ""));
                this.setValueElementValue(h);
              }
              c & a.flags.leaveAlpha || !this.alphaElement || this.setAlphaElementValue(Math.round(100 * this.channels.a) / 100);
              c & a.flags.leavePreview ||
                !this.previewElement ||
                (a.isTextInput(this.previewElement) || (a.isButton(this.previewElement) && a.isButtonEmpty(this.previewElement)), this.setPreviewElementBg(this.toRGBAString()));
              t() && (l(), m(), r());
            };
            this.setPreviewElementBg = function (c) {
              if (this.previewElement) {
                var h = null,
                  p = null;
                if (a.isTextInput(this.previewElement) || (a.isButton(this.previewElement) && !a.isButtonEmpty(this.previewElement))) (h = this.previewPosition), (p = this.previewSize);
                var q = [];
                if (c) {
                  q.push({ size: "auto" });
                  var v = a.genColorPreviewCanvas("rgba(0,0,0,0)", h ? { left: "right", right: "left" }[h] : null, p, !0);
                  q.push({ size: v.width + "px " + v.height + "px" });
                } else q.push({ size: "auto" });
                v = [];
                for (var w = 0; w < q.length; w += 1) v.push(q[w].size);
                c = {
                  "--fr-input-color": c,
                  "--fr-input-color-edge": p + "px",
                  "--fr-input-color-edge2": p + 1 + "px",
                  "--fr-input-gb-size": v.join(", "),
                };
                a.setStyle(this.previewElement, c, !this.forceStyle);
                c = { left: null, right: null };
                h && (c[h] = this.previewSize + this.previewPadding + "px");
                c = { "--fr-input-padding-left": c.left };
                a.setStyle(this.previewElement, c, !this.forceStyle, !0);
              }
            };
            this.setValueElementValue = function (c) {
              this.valueElement && ("input" === a.nodeName(this.valueElement) ? (this.valueElement.value = c) : (this.valueElement.innerHTML = A.createHTML(c)));
            };
            this.setAlphaElementValue = function (c) {
              this.alphaElement && ("input" === a.nodeName(this.alphaElement) ? (this.alphaElement.value = c) : (this.alphaElement.innerHTML = A.createHTML(c)));
            };
            this._processParentElementsInDOM = function () {
              if (!this._parentElementsProcessed) {
                this._parentElementsProcessed = !0;
                var c = this.targetElement;
                do {
                  var h = a.getCompStyle(c);
                  c instanceof ShadowRoot && (this.fixed = !0);
                  h.position && "fixed" === h.position.toLowerCase() && (this.fixed = !0);
                  c === this.targetElement || a.getData(c, "hasScrollListener") || (c.addEventListener("scroll", a.onParentScroll, !1), a.setData(c, "hasScrollListener", !0));
                } while ((c = c.parentNode) && "body" !== a.nodeName(c));
              }
            };
            this.tryHide = function () {
              this.hideOnLeave && this.hide();
            };
            if (a.pub.options)
              for (var z in a.pub.options)
                if (a.pub.options.hasOwnProperty(z))
                  try {
                    g(z, a.pub.options[z]);
                  } catch (c) {
                    console.error(c);
                  }
            d = [];
            e.preset && ("string" === typeof e.preset ? (d = e.preset.split(/\s+/)) : Array.isArray(e.preset) ? (d = e.preset.slice()) : console.warn("Unrecognized value"));
            -1 === d.indexOf("default") && d.push("default");
            for (var I = d.length - 1; 0 <= I; --I) {
              var F = d[I];
              if (F && a.pub.presets.hasOwnProperty(F))
                for (z in a.pub.presets[F])
                  if (a.pub.presets[F].hasOwnProperty(z))
                    try {
                      g(z, a.pub.presets[F][z]);
                    } catch (c) {
                      console.error(c);
                    }
            }
            d = ["preset"];
            for (z in e)
              if (e.hasOwnProperty(z) && -1 === d.indexOf(z))
                try {
                  g(z, e[z]);
                } catch (c) {
                  console.error(c);
                }
            this.container = void 0 === this.container ? n.document.documentElement : a.node(this.container);
            if (!this.container) throw Error("No container element");
            this.targetElement = a.node(b);
            if (!this.targetElement) {
              if ("string" === typeof b && /^[a-zA-Z][\w:.-]*$/.test(b)) throw Error("Need CSS selector.");
              throw Error("No target element");
            }
            if (this.targetElement.frcp && this.targetElement.frcp instanceof a.pub) throw Error("Redundant Fr-Color-picker");
            this.targetElement.frcp = this;
            a.addClass(this.targetElement, a.pub.className);
            a.instances.push(this);
            a.isButton(this.targetElement) &&
              ("button" !== this.targetElement.type.toLowerCase() && (this.targetElement.type = "button"),
              a.isButtonEmpty(this.targetElement) &&
                (a.removeChildren(this.targetElement),
                this.targetElement.appendChild(n.document.createTextNode("\u00a0")),
                (b = a.getCompStyle(this.targetElement)),
                (parseFloat(b["min-width"]) || 0) < this.previewSize && a.setStyle(this.targetElement, { "min-width": this.previewSize + "px" }, this.forceStyle)));
            void 0 === this.valueElement
              ? a.isTextInput(this.targetElement) && (this.valueElement = this.targetElement)
              : null !== this.valueElement && (this.valueElement = a.node(this.valueElement));
            this.alphaElement && (this.alphaElement = a.node(this.alphaElement));
            void 0 === this.previewElement ? (this.previewElement = this.targetElement) : null !== this.previewElement && (this.previewElement = a.node(this.previewElement));
            this.valueElement &&
              a.isTextInput(this.valueElement) &&
              ((b = this.valueElement.oninput),
              (this.valueElement.oninput = null),
              this.valueElement.addEventListener("keydown", u, !1),
              this.valueElement.addEventListener("change", N, !1),
              this.valueElement.addEventListener("input", P, !1),
              b && this.valueElement.addEventListener("input", b, !1),
              this.valueElement.setAttribute("autocomplete", "off"),
              this.valueElement.setAttribute("autocorrect", "off"),
              this.valueElement.setAttribute("autocapitalize", "off"),
              this.valueElement.setAttribute("spellcheck", !1));
            this.alphaElement &&
              a.isTextInput(this.alphaElement) &&
              (this.alphaElement.addEventListener("keydown", y, !1),
              this.alphaElement.addEventListener("change", O, !1),
              this.alphaElement.addEventListener("input", Q, !1),
              this.alphaElement.setAttribute("autocomplete", "off"),
              this.alphaElement.setAttribute("autocorrect", "off"),
              this.alphaElement.setAttribute("autocapitalize", "off"),
              this.alphaElement.setAttribute("spellcheck", !1));
            b = "FFFFFF";
            void 0 !== this.value ? (b = this.value) : this.valueElement && void 0 !== this.valueElement.value && (b = this.valueElement.value);
            e = void 0;
            void 0 !== this.alpha ? (e = "" + this.alpha) : this.alphaElement && void 0 !== this.alphaElement.value && (e = this.alphaElement.value);
            this._currentFormat = null;
            -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
              ? (this._currentFormat = (z = a.parseColorString(b)) ? z.format : "hex")
              : (this._currentFormat = this.format.toLowerCase());
            this.processValueInput(b);
            void 0 !== e && this.processAlphaInput(e);
            this.random && this.randomize.apply(this, Array.isArray(this.random) ? this.random : []);
          },
        };
      a.pub.className = D;
      a.pub.activeClassName = E;
      a.pub.looseJSON = !0;
      a.pub.presets = {};
      a.pub.presets["default"] = {};
      a.pub.sliderInnerSpace = 3;
      a.pub.chessboardSize = 8;
      a.pub.chessboardColor1 = "#666666";
      a.pub.chessboardColor2 = "#999999";
      a.pub.previewSeparator = [];
      a.pub.init = function () {
        if (!a.initialized)
          for (
            n.document.addEventListener("mousedown", a.onDocumentMouseDown, !1),
              n.document.addEventListener("keyup", a.onDocumentKeyUp, !1),
              n.addEventListener("resize", a.onWindowResize, !1),
              n.addEventListener("scroll", a.onWindowScroll, !1),
              a.initialized = !0;
            a.readyQueue.length;

          )
            a.readyQueue.shift()();
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
      a.pub.lookupClass = D;
      a.pub.installByClassName = function () {
        return !1;
      };
      a.register();
      return a.pub;
    })();
    "undefined" === typeof n.FRColorPicker && (n.FRColorPicker = C);
    return C;
  },
  {
    createHTML: function (n) {
      return n;
    },
  }
);
