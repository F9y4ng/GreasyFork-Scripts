// ==UserScript==
// @name        frColorPicker
// @version     6.2.0
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

!(function (p, D, E) {
  "object" === typeof module && "object" === typeof module.exports
    ? (module.exports = p.document
        ? D(p, E)
        : function (x) {
            if (!x.document) throw Error("No Document!");
            return D(x, E);
          })
    : D(p, E);
})(
  "undefined" !== typeof window ? window : this,
  function (p, D) {
    p.self === p.top &&
      p.trustedTypes &&
      p.trustedTypes.createPolicy &&
      (D = p.trustedTypes.createPolicy(
        (function (x) {
          x = void 0 === x ? "fr#ColorPicker" : x;
          for (
            var F = [
                { host: "teams.live.com", policy: "gapi#gapi" },
                { host: "github.dev", policy: "standaloneColorizer" },
                { host: "vscode.dev", policy: "standaloneColorizer" },
              ],
              G = 0;
            G < F.length;
            G++
          )
            if (location.hostname.startsWith(F[G].host)) {
              x = F[G].policy;
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
    var E = (function () {
      function x(a, d) {
        d = void 0 === d ? "" : d;
        for (a = Number(a - 1) || 8; 0 < a; --a) d += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(62 * Math.random())];
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(26 * Math.random())].concat(d);
      }
      var F = x(9),
        G = x(8),
        J = x(12),
        K = x(8),
        L = x(7),
        M = x(7),
        b = {
          initialized: !1,
          instances: [],
          readyQueue: [],
          base64Data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAAAXNSR0IArs4c6QAAAFNJREFUSEtjnDlz5n8GPODs2bP4pBmMjY3xypOin3HUMUhhiRyyoyGDnMhGQwZXlhu8IZOWloa3nKFmOYItdJDLIcZRxyAF0WjI4MpNoyEz5EIGAMmNh+nDrPy/AAAAAElFTkSuQmCC",
          register: function () {
            "undefined" !== typeof p &&
              p.document &&
              ("loading" === p.document.readyState
                ? p.document.addEventListener("DOMContentLoaded", b.pub.init, !1)
                : p.document.documentElement
                ? b.pub.init()
                : p.addEventListener("load", b.pub.init, !1));
          },
          checkGeckoRatio: function (a) {
            a = void 0 === a ? 1 : a;
            isNaN(parseFloat(p.mozInnerScreenX)) ||
              (a = (a = p.getComputedStyle(document.body, null).getPropertyValue("transform")) && "none" !== a ? Number(a.split(",")[3]) || 1 : 1);
            return a;
          },
          checkWebkitRatio: function (a) {
            a = void 0 === a ? 1 : a;
            isNaN(parseFloat(p.mozInnerScreenX)) && ((a = p.getComputedStyle(document.body, null).getPropertyValue("zoom")), (a = Number(a) || 1));
            return a;
          },
          getInstances: function () {
            for (var a = [], d = 0; d < b.instances.length; d += 1) b.instances[d] && b.instances[d].targetElement && a.push(b.instances[d]);
            return a;
          },
          createEl: function (a) {
            a = p.document.createElement(a);
            b.setData(a, "gui", !0);
            return a;
          },
          node: function (a) {
            if (!a) return null;
            if ("string" === typeof a) {
              var d = null;
              try {
                d = p.document.querySelector(a) || p.document.querySelector("fr-configure").shadowRoot.querySelector(a);
              } catch (e) {
                return null;
              }
              d || console.warn("No element matche: %s", a);
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
          isPassiveEventSupported: (function () {
            var a = !1;
            try {
              var d = Object.defineProperty({}, "passive", {
                get: function () {
                  a = !0;
                },
              });
              p.addEventListener("testPassive", null, d);
              p.removeEventListener("testPassive", null, d);
            } catch (e) {
              console.error(e);
            }
            return a;
          })(),
          isColorAttrSupported: (function () {
            var a = p.document.createElement("input");
            return a.setAttribute && (a.setAttribute("type", "color"), a.type && "color" == a.type.toLowerCase()) ? !0 : !1;
          })(),
          dataProp: "_data_frcolorpicker",
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
              if (void 0 !== e) a[b.dataProp] = {};
              else return;
            a = a[b.dataProp];
            a.hasOwnProperty(d) || void 0 === e || (a[d] = e);
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
              if ("function" === typeof Event) var h = new Event(d, { bubbles: e, cancelable: g });
              else (h = p.document.createEvent("Event")), h.initEvent(d, e, g);
              if (!h) return !1;
              b.setData(h, "internal", !0);
              a.dispatchEvent(h);
              return !0;
            }
          },
          triggerInputEvent: function (a, d, e, g) {
            a && b.isTextInput(a) && b.triggerEvent(a, d, e, g);
          },
          eventKey: function (a) {
            var d = { 9: "Tab", 13: "Enter", 27: "Escape" };
            return "string" === typeof a.code ? a.code : void 0 !== a.keyCode && d.hasOwnProperty(a.keyCode) ? d[a.keyCode] : null;
          },
          strList: function (a) {
            return a ? a.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
          },
          hasClass: function (a, d) {
            return d ? (void 0 !== a.classList ? a.classList.contains(d) : -1 != (" " + a.className.replace(/\s+/g, " ") + " ").indexOf(" " + d + " ")) : !1;
          },
          addClass: function (a, d) {
            d = b.strList(d);
            if (void 0 !== a.classList) for (var e = 0; e < d.length; e += 1) a.classList.add(d[e]);
            else for (e = 0; e < d.length; e += 1) b.hasClass(a, d[e]) || (a.className += (a.className ? " " : "") + d[e]);
          },
          removeClass: function (a, d) {
            d = b.strList(d);
            if (void 0 !== a.classList) for (var e = 0; e < d.length; e += 1) a.classList.remove(d[e]);
            else for (e = 0; e < d.length; e += 1) a.className = a.className.replace(new RegExp("^\\s*" + d[e] + "\\s*|\\s*" + d[e] + "\\s*$|\\s+" + d[e] + "(\\s+)", "g"), "$1");
          },
          getCompStyle: function (a) {
            return a instanceof ShadowRoot ? {} : (a = p.getComputedStyle ? p.getComputedStyle(a) : a.currentStyle) ? a : {};
          },
          setStyle: function (a, d, e, g) {
            e = e ? "important" : "";
            var h = null,
              l;
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var m = null;
                null === d[l]
                  ? (h || (h = b.getData(a, "origStyle")), h && h.hasOwnProperty(l) && (m = h[l]))
                  : (g && (h || (h = b.getData(a, "origStyle", {})), h.hasOwnProperty(l) || (h[l] = a.style[l])), (m = d[l]));
                null !== m && a.style.setProperty(l, m, e);
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
            return "rgba(" + Math.round(a) + "," + Math.round(d) + "," + Math.round(e) + "," + Math.round(100 * (void 0 === g || null === g ? 1 : g)) / 100 + ")";
          },
          linearGradient: (function () {
            var a = (function () {
              for (var d = ["", "-webkit-", "-moz-", "-o-", "-ms-"], e = p.document.createElement("div"), g = 0; g < d.length; g += 1) {
                var h = d[g] + "linear-gradient",
                  l = h + "(to right, rgba(0,0,0,0), rgba(0,0,0,0))";
                e.style && (e.style.background = l);
                if (e.style && e.style.background) return h;
              }
              return "linear-gradient";
            })();
            return function () {
              return a + "(" + Array.prototype.join.call(arguments, ", ") + ")";
            };
          })(),
          setBorderRadius: function (a, d) {
            b.setStyle(a, { "border-radius": d || "0" });
          },
          setBoxShadow: function (a, d) {
            b.setStyle(a, { "box-shadow": d || "none" });
          },
          getElementPos: function (a, d) {
            var e = b.checkGeckoRatio();
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
            var d = b.checkGeckoRatio(),
              e = b.checkWebkitRatio(),
              g = 0,
              h = 0;
            "undefined" !== typeof a.changedTouches && a.changedTouches.length
              ? ((g = a.changedTouches[0].x * d * e), (h = a.changedTouches[0].y * d * e))
              : "number" === typeof a.x && ((g = a.x * d * e), (h = a.y * d * e));
            return { x: g, y: h };
          },
          getRelPointerPos: function (a) {
            var d = b.checkGeckoRatio(),
              e = b.checkWebkitRatio(),
              g = (a.target || a.srcElement).getBoundingClientRect(),
              h = 0,
              l = 0;
            "undefined" !== typeof a.changedTouches && a.changedTouches.length
              ? ((h = a.changedTouches[0].x * d * e), (l = a.changedTouches[0].y * d * e))
              : "number" === typeof a.x && ((h = a.x * d * e), (l = a.y * d * e));
            return { x: h - g.left * d, y: l - g.top * d };
          },
          getViewPos: function () {
            var a = p.document.documentElement;
            return [(p.pageXOffset || a.scrollLeft) - (a.clientLeft || 0), (p.pageYOffset || a.scrollTop) - (a.clientTop || 0)];
          },
          getViewSize: function () {
            var a = p.document.documentElement;
            return [p.innerWidth || a.clientWidth, p.innerHeight || a.clientHeight];
          },
          RGB_HSV: function (a, d, e) {
            a /= 255;
            d /= 255;
            e /= 255;
            var g = Math.min(Math.min(a, d), e),
              h = Math.max(Math.max(a, d), e),
              l = h - g;
            if (0 === l) return [null, 0, 100 * h];
            a = a === g ? 3 + (e - d) / l : d === g ? 5 + (a - e) / l : 1 + (d - a) / l;
            return [60 * (6 === a ? 0 : a), (l / h) * 100, 100 * h];
          },
          HSV_RGB: function (a, d, e) {
            e = (e / 100) * 255;
            if (null === a) return [e, e, e];
            a /= 60;
            d /= 100;
            var g = Math.floor(a),
              h = e * (1 - d);
            a = e * (1 - d * (g % 2 ? a - g : 1 - (a - g)));
            switch (g) {
              case 6:
              case 0:
                return [e, a, h];
              case 1:
                return [a, e, h];
              case 2:
                return [h, e, a];
              case 3:
                return [h, a, e];
              case 4:
                return [a, h, e];
              case 5:
                return [e, h, a];
            }
          },
          parseColorString: function (a) {
            var d = { rgba: null, format: null },
              e;
            if ((e = a.match(/^\W*([0-9A-F]{3,8})\W*$|^currentcolor$/i))) {
              if ("currentcolor" === e[0].toLowerCase()) return (d.format = "hexa"), (d.rgba = [255, 255, 255, 255]), d;
              if (8 === e[1].length)
                (d.format = "hexa"),
                  (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), parseInt(e[1].slice(6, 8), 16) / 255]);
              else if (6 === e[1].length) (d.format = "hex"), (d.rgba = [parseInt(e[1].slice(0, 2), 16), parseInt(e[1].slice(2, 4), 16), parseInt(e[1].slice(4, 6), 16), 1]);
              else if (3 === e[1].length)
                (d.format = "hex"),
                  (d.rgba = [parseInt(e[1].charAt(0) + e[1].charAt(0), 16), parseInt(e[1].charAt(1) + e[1].charAt(1), 16), parseInt(e[1].charAt(2) + e[1].charAt(2), 16), 1]);
              else return !1;
              return d;
            }
            if ((e = a.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
              a = e[1].split(",");
              e = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
              var g, h, l, m;
              if (3 <= a.length && (g = a[0].match(e)) && (h = a[1].match(e)) && (l = a[2].match(e)))
                return (
                  (d.format = "rgb"),
                  (d.rgba = [parseFloat(g[1]) || 0, parseFloat(h[1]) || 0, parseFloat(l[1]) || 0, 1]),
                  4 <= a.length && (m = a[3].match(e)) && ((d.format = "rgba"), (d.rgba[3] = parseFloat(m[1]) || 0)),
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
            var d = p.devicePixelRatio || 1;
            a.width *= d;
            a.height *= d;
            a.getContext("2d").scale(d, d);
          },
          genColorPreviewCanvas: function (a, d, e, g) {
            var h = Math.round(b.pub.previewSeparator.length),
              l = b.pub.chessboardSize,
              m = b.pub.chessboardColor1,
              r = b.pub.chessboardColor2;
            e = e ? e : 2 * l;
            var v = 2 * l,
              u = b.createEl("canvas"),
              y = u.getContext("2d");
            u.width = e;
            u.height = v;
            g && b.scaleCanvasForHighDPR(u);
            y.fillStyle = m;
            y.fillRect(0, 0, e, v);
            y.fillStyle = r;
            for (g = 0; g < e; g += 2 * l) y.fillRect(g, 0, l, l), y.fillRect(g + l, l, l, l);
            a && ((y.fillStyle = a), y.fillRect(0, 0, e, v));
            a = null;
            switch (d) {
              case "left":
                a = 0;
                y.clearRect(0, 0, h / 2, v);
                break;
              case "right":
                (a = e - h), y.clearRect(e - h / 2, 0, h / 2, v);
            }
            if (null !== a)
              for (y.lineWidth = 1, d = 0; d < b.pub.previewSeparator.length; d += 1)
                y.beginPath(), (y.strokeStyle = b.pub.previewSeparator[d]), y.moveTo(0.5 + a + d, 0), y.lineTo(0.5 + a + d, v), y.stroke();
            return { canvas: u, width: e, height: v };
          },
          genColorPreviewGradient: function (a, d, e) {
            return b.linearGradient.apply(
              this,
              d && e
                ? ["to " + { left: "right", right: "left" }[d], a + " 0%", a + " " + e + "px", "rgba(0,0,0,0) " + (e + 1) + "px", "rgba(0,0,0,0) 100%"]
                : ["to right", a + " 0%", a + " 100%"]
            );
          },
          redrawPosition: function () {
            if (b.picker && b.picker.owner) {
              var a = b.picker.owner;
              if (a.fixed) {
                var d = b.getElementPos(a.targetElement, !0);
                var e = [0, 0];
              } else (d = b.getElementPos(a.targetElement)), (e = b.getViewPos());
              var g = b.getElementSize(a.targetElement),
                h = b.getViewSize(),
                l = b.getPickerDims(a);
              l = [l.borderW, l.borderH];
              switch (a.position.toLowerCase()) {
                case "left":
                  var m = 1;
                  var r = 0;
                  var v = -1;
                  break;
                case "right":
                  m = 1;
                  r = 0;
                  v = 1;
                  break;
                case "top":
                  m = 0;
                  r = 1;
                  v = -1;
                  break;
                default:
                  (m = 0), (v = r = 1);
              }
              var u = (g[r] + l[r]) / 2;
              e = a.smartPosition
                ? [
                    -e[m] + d[m] + l[m] > h[m] ? (-e[m] + d[m] + g[m] / 2 > h[m] / 2 && 0 <= d[m] + g[m] - l[m] ? d[m] + g[m] - l[m] : d[m]) : d[m],
                    -e[r] + d[r] + g[r] + l[r] - u + u * v > h[r]
                      ? -e[r] + d[r] + g[r] / 2 > h[r] / 2 && 0 <= d[r] + g[r] - u - u * v
                        ? d[r] + g[r] - u - u * v - 4
                        : d[r] + g[r] - u + u * v + 4
                      : 0 <= d[r] + g[r] - u + u * v
                      ? d[r] + g[r] - u + u * v - 4
                      : d[r] + g[r] - u - u * v + 4,
                  ]
                : [d[m], d[r] + g[r] - u + u * v - 4];
              b._drawPosition(a, e[m], e[r], a.fixed ? "fixed" : "absolute", (e[0] + l[0] > d[0] || e[0] < d[0] + g[0]) && e[1] + l[1] < d[1] + g[1]);
            }
          },
          _drawPosition: function (a, d, e, g, h) {
            h = h ? 0 : a.shadowBlur;
            b.picker.wrap.style.left = d + "px";
            b.picker.wrap.style.top = e + "px";
            b.picker.wrap.style.position = g;
            b.setBoxShadow(b.picker.boxS, a.shadow ? new b.BoxShadow(0, h, a.shadowBlur, 0, a.shadowColor) : null);
          },
          getPickerDims: function (a) {
            var d = 2 * a.controlBorderWidth + a.width,
              e = 2 * a.controlBorderWidth + a.height,
              g = 2 * a.controlBorderWidth + 2 * b.getControlPadding(a) + a.sliderSize;
            b.getSliderChannel(a) && (d += g);
            a.hasAlphaChannel() && (d += g);
            a.closeButton && (e += 2 * a.controlBorderWidth + a.padding + a.buttonHeight);
            g = d + 2 * a.padding;
            var h = e + 2 * a.padding;
            return {
              contentW: d,
              contentH: e,
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
          onDocumentKeyUp: function (a) {
            -1 !== ["Tab", "Escape"].indexOf(b.eventKey(a)) && b.picker && b.picker.owner && b.picker.owner.tryHide();
          },
          onWindowResize: function (a) {
            b.redrawPosition();
          },
          onWindowScroll: function (a) {
            b.redrawPosition();
          },
          onParentScroll: function (a) {
            b.picker && b.picker.owner && b.picker.owner.tryHide();
          },
          onDocumentMouseDown: function (a) {
            var d = a.composedPath()[0] || a.target || a.srcElement;
            if (d.frcp && d.frcp instanceof b.pub) d.frcp.showOnClick && !d.disabled && (b.picker && b.picker.owner ? b.picker.owner.tryHide() : d.frcp.show());
            else if (b.getData(d, "gui")) {
              if (b.getData(d, "control")) b.onControlPointerStart(a, d, b.getData(d, "control"), "mouse");
            } else b.picker && b.picker.owner && b.picker.owner.tryHide();
          },
          onPickerTouchStart: function (a) {
            var d = a.target || a.srcElement;
            if (b.getData(d, "control")) b.onControlPointerStart(a, d, b.getData(d, "control"), "touch");
          },
          onControlPointerStart: function (a, d, e, g) {
            var h = b.getData(d, "instance");
            b.preventDefault(a);
            var l = function (v, u) {
              b.attachGroupEvent("drag", v, b._pointerMoveEvent[g], b.onDocumentPointerMove(a, d, e, g, u));
              b.attachGroupEvent("drag", v, b._pointerEndEvent[g], b.onDocumentPointerEnd(a, d, e, g));
            };
            l(p.document, [0, 0]);
            if (p.parent && p.frameElement) {
              var m = b.checkGeckoRatio(),
                r = p.frameElement.getBoundingClientRect();
              l(p.parent.window.document, [-r.left * m, -r.top * m]);
            }
            l = b.getAbsPointerPos(a);
            m = b.getRelPointerPos(a);
            b._pointerOrigin = { x: l.x - m.x, y: l.y - m.y };
            switch (e) {
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
          onDocumentPointerMove: function (a, d, e, g, h) {
            return function (l) {
              var m = b.getData(d, "instance");
              switch (e) {
                case "pad":
                  b.setPad(m, l, h[0], h[1]);
                  break;
                case "sld":
                  b.setSld(m, l, h[1]);
                  break;
                case "asld":
                  b.setASld(m, l, h[1]);
              }
              m.trigger("input");
            };
          },
          onDocumentPointerEnd: function (a, d, e, g) {
            return function (h) {
              h = b.getData(d, "instance");
              b.detachGroupEvents("drag");
              h.trigger("input");
              h.trigger("change");
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
            a.draw = function (g, h, l) {
              d.width = g;
              d.height = h;
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
            return a;
          },
          createSliderGradient: function () {
            var a = { elm: null, draw: null },
              d = b.createEl("canvas"),
              e = d.getContext("2d");
            a.elm = d;
            a.draw = function (g, h, l, m) {
              d.width = g;
              d.height = h;
              e.clearRect(0, 0, d.width, d.height);
              g = e.createLinearGradient(0, 0, 0, d.height);
              g.addColorStop(0, l);
              g.addColorStop(1, m);
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
            a.draw = function (g, h, l) {
              d.width = g;
              d.height = h;
              e.clearRect(0, 0, d.width, d.height);
              g = d.width / 2;
              h = b.pub.chessboardColor2;
              e.fillStyle = b.pub.chessboardColor1;
              e.fillRect(0, 0, d.width, d.height);
              if (0 < g) for (var m = 0; m < d.height; m += 2 * g) (e.fillStyle = h), e.fillRect(0, m, g, g), e.fillRect(g, m + g, g, g);
              g = e.createLinearGradient(0, 0, 0, d.height);
              g.addColorStop(0, l);
              g.addColorStop(1, "rgba(0,0,0,0)");
              e.fillStyle = g;
              e.fillRect(0, 0, d.width, d.height);
            };
            return a;
          },
          BoxShadow: (function () {
            var a = function (d, e, g, h, l, m) {
              this.hShadow = d;
              this.vShadow = e;
              this.blur = g;
              this.spread = h;
              this.color = l;
              this.inset = !!m;
            };
            a.prototype.toString = function () {
              var d = [Math.round(this.hShadow) + "px", Math.round(this.vShadow) + "px", Math.round(this.blur) + "px", Math.round(this.spread) + "px", this.color];
              this.inset && d.push("inset");
              return d.join(" ");
            };
            return a;
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
          pub: function (a, d) {
            function e(c, k) {
              if ("string" !== typeof c) throw Error("Invalid value for option name: " + c);
              if (b.enumOpts.hasOwnProperty(c) && ("string" === typeof k && (k = k.toLowerCase()), -1 === b.enumOpts[c].indexOf(k)))
                throw Error("Option '" + c + "' has invalid value: " + k);
              if (b.deprecatedOpts.hasOwnProperty(c)) {
                var n = b.deprecatedOpts[c];
                if (n) c = n;
                else throw Error("Option '" + c + "' is DEPRECATED");
              }
              n = "set__" + c;
              if ("function" === typeof f[n]) return f[n](k), !0;
              if (c in f) return (f[c] = k), !0;
              throw Error("Unrecognized configuration option: " + c);
            }
            function g() {
              f._processParentElementsInDOM();
              b.picker ||
                ((b.picker = {
                  owner: null,
                  wrap: b.createEl("fr-colorpicker"),
                  box: b.createEl("div"),
                  boxS: b.createEl("div"),
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
                b.picker.wrap.appendChild(b.picker.boxS),
                b.picker.wrap.appendChild(b.picker.boxB),
                b.picker.wrap.addEventListener("touchstart", b.onPickerTouchStart, b.isPassiveEventSupported ? { passive: !1 } : !1));
              var c = b.picker,
                k = !!b.getSliderChannel(f),
                n = f.hasAlphaChannel(),
                q = b.getPickerDims(f),
                t = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
                w = b.getControlPadding(f),
                B = Math.min(f.borderRadius, Math.round(f.padding * Math.PI));
              c.wrap.className = J;
              c.wrap.style.clear = "both";
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
              b.setBorderRadius(c.boxS, B + "px");
              c.boxB.className = M;
              c.boxB.style.position = "relative";
              c.boxB.style.border = f.borderWidth + "px solid";
              c.boxB.style.borderColor = f.borderColor;
              c.boxB.style.background = f.backgroundColor;
              b.setBorderRadius(c.boxB, B + "px");
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
              c.padB.style.borderColor = f.controlBorderColor;
              c.padM.style.position = "absolute";
              c.padM.style.left = "0px";
              c.padM.style.top = "0px";
              c.padM.style.width = f.padding + 2 * f.controlBorderWidth + f.width + w + "px";
              c.padM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.padM.style.cursor = "crosshair";
              b.setData(c.padM, { instance: f, control: "pad" });
              c.cross.style.position = "absolute";
              c.cross.style.left = c.cross.style.top = "0";
              c.cross.style.width = c.cross.style.height = t + "px";
              c.crossBY.style.position = c.crossBX.style.position = "absolute";
              c.crossBY.style.background = c.crossBX.style.background = f.pointerBorderColor;
              c.crossBY.style.width = c.crossBX.style.height = 2 * f.pointerBorderWidth + f.pointerThickness + "px";
              c.crossBY.style.height = c.crossBX.style.width = t + "px";
              c.crossBY.style.left = c.crossBX.style.top = Math.floor(t / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth + "px";
              c.crossBY.style.top = c.crossBX.style.left = "0";
              c.crossLY.style.position = c.crossLX.style.position = "absolute";
              c.crossLY.style.background = c.crossLX.style.background = f.pointerColor;
              c.crossLY.style.height = c.crossLX.style.width = t - 2 * f.pointerBorderWidth + "px";
              c.crossLY.style.width = c.crossLX.style.height = f.pointerThickness + "px";
              c.crossLY.style.left = c.crossLX.style.top = Math.floor(t / 2) - Math.floor(f.pointerThickness / 2) + "px";
              c.crossLY.style.top = c.crossLX.style.left = f.pointerBorderWidth + "px";
              c.sld.style.overflow = "hidden";
              c.sld.style.width = f.sliderSize + "px";
              c.sld.style.height = f.height + "px";
              c.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
              c.sldB.style.display = k ? "block" : "none";
              c.sldB.style.position = "absolute";
              c.sldB.style.left = f.padding + f.width + 2 * f.controlBorderWidth + 2 * w + "px";
              c.sldB.style.top = f.padding + "px";
              c.sldB.style.border = f.controlBorderWidth + "px solid";
              c.sldB.style.borderColor = f.controlBorderColor;
              c.sldM.style.display = k ? "block" : "none";
              c.sldM.style.position = "absolute";
              c.sldM.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + "px";
              c.sldM.style.top = "0px";
              c.sldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + (n ? 0 : Math.max(0, f.padding - w)) + "px";
              c.sldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.sldM.style.cursor = "default";
              b.setData(c.sldM, { instance: f, control: "sld" });
              c.sldPtrIB.style.border = c.sldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor;
              c.sldPtrOB.style.position = "absolute";
              c.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.sldPtrOB.style.top = "0";
              c.sldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor;
              c.sldPtrS.style.width = f.sliderSize + "px";
              c.sldPtrS.style.height = b.pub.sliderInnerSpace + "px";
              c.asld.style.overflow = "hidden";
              c.asld.style.width = f.sliderSize + "px";
              c.asld.style.height = f.height + "px";
              c.asldGrad.draw(f.sliderSize, f.height, "#000");
              c.asldB.style.display = n ? "block" : "none";
              c.asldB.style.position = "absolute";
              c.asldB.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (k ? f.sliderSize + 3 * w + 2 * f.controlBorderWidth : 0) + "px";
              c.asldB.style.top = f.padding + "px";
              c.asldB.style.border = f.controlBorderWidth + "px solid";
              c.asldB.style.borderColor = f.controlBorderColor;
              c.asldM.style.display = n ? "block" : "none";
              c.asldM.style.position = "absolute";
              c.asldM.style.left = f.padding + f.width + 2 * f.controlBorderWidth + w + (k ? f.sliderSize + 2 * w + 2 * f.controlBorderWidth : 0) + "px";
              c.asldM.style.top = "0px";
              c.asldM.style.width = f.sliderSize + 2 * w + 2 * f.controlBorderWidth + Math.max(0, f.padding - w) + "px";
              c.asldM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.asldM.style.cursor = "default";
              b.setData(c.asldM, { instance: f, control: "asld" });
              c.asldPtrIB.style.border = c.asldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor;
              c.asldPtrOB.style.position = "absolute";
              c.asldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.asldPtrOB.style.top = "0";
              c.asldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor;
              c.asldPtrS.style.width = f.sliderSize + "px";
              c.asldPtrS.style.height = b.pub.sliderInnerSpace + "px";
              h();
              l();
              m();
              b.picker.owner && b.picker.owner !== f && b.removeClass(b.picker.owner.targetElement, b.pub.activeClassName);
              b.picker.owner = f;
              f.container === p.document.documentElement ? b.redrawPosition() : b._drawPosition(f, 0, 0, "relative", !1);
              c.wrap.parentNode !== f.container && f.container.appendChild(c.wrap);
              b.addClass(f.targetElement, b.pub.activeClassName);
            }
            function h() {
              var c = b.getPadYChannel(f);
              c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
              var k = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
              b.picker.cross.style.left = Math.round((f.channels.h / 360) * (f.width - 1)) + k + "px";
              b.picker.cross.style.top = c + k + "px";
              switch (b.getSliderChannel(f)) {
                case "s":
                  k = b.HSV_RGB(f.channels.h, 100, f.channels.v);
                  c = b.HSV_RGB(f.channels.h, 0, f.channels.v);
                  k = "rgb(" + Math.round(k[0]) + "," + Math.round(k[1]) + "," + Math.round(k[2]) + ")";
                  b.picker.sldGrad.draw(f.sliderSize, f.height, k, "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")");
                  break;
                case "v":
                  (c = b.HSV_RGB(f.channels.h, f.channels.s, 100)),
                    (k = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")"),
                    b.picker.sldGrad.draw(f.sliderSize, f.height, k, "#000");
              }
              b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function l() {
              var c = b.getSliderChannel(f);
              c &&
                (b.picker.sldPtrOB.style.top =
                  Math.round((1 - f.channels[c] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2) + "px");
              b.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function m() {
              b.picker.asldPtrOB.style.top =
                Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(b.pub.sliderInnerSpace / 2) + "px";
            }
            function r() {
              return b.picker && b.picker.owner === f;
            }
            function v(c) {
              "Enter" === b.eventKey(c) && (f.valueElement && f.processValueInput(f.valueElement.value), f.tryHide());
            }
            function u(c) {
              "Enter" === b.eventKey(c) && (f.alphaElement && f.processAlphaInput(f.alphaElement.value), f.tryHide());
            }
            function y(c) {
              b.getData(c, "internal") ||
                ((c = f.valueElement.value),
                f.processValueInput(f.valueElement.value),
                b.triggerCallback(f, "onChange"),
                f.valueElement.value !== c && b.triggerInputEvent(f.valueElement, "change", !0, !0));
            }
            function N(c) {
              b.getData(c, "internal") ||
                ((c = f.alphaElement.value),
                f.processAlphaInput(f.alphaElement.value),
                b.triggerCallback(f, "onChange"),
                b.triggerInputEvent(f.valueElement, "change", !0, !0),
                f.alphaElement.value !== c && b.triggerInputEvent(f.alphaElement, "change", !0, !0));
            }
            function O(c) {
              b.getData(c, "internal") || (f.valueElement && f.fromString(f.valueElement.value, b.flags.leaveValue), b.triggerCallback(f, "onInput"));
            }
            function P(c) {
              b.getData(c, "internal") ||
                (f.alphaElement && f.fromHSVA(null, null, null, parseFloat(f.alphaElement.value), b.flags.leaveAlpha),
                b.triggerCallback(f, "onInput"),
                b.triggerInputEvent(f.valueElement, "input", !0, !0));
            }
            var f = this;
            d || (d = {});
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
            this.previewSize = 32;
            this.previewPadding = 8;
            this.forceStyle = this.uppercase = this.hash = this.required = !0;
            this.width = 181;
            this.height = 101;
            this.mode = "HSV";
            this.alphaChannel = "auto";
            this.position = "bottom";
            this.hideOnLeave = this.showOnClick = this.smartPosition = !0;
            this.sliderSize = 16;
            this.crossSize = 8;
            this.closeButton = !1;
            this.closeText = "Close";
            this.buttonColor = "rgba(0,0,0,1)";
            this.buttonHeight = 18;
            this.padding = 12;
            this.backgroundColor = "rgba(255,255,255,1)";
            this.borderWidth = 1;
            this.borderColor = "rgba(187,187,187,1)";
            this.borderRadius = 8;
            this.controlBorderWidth = 1;
            this.controlBorderColor = "rgba(187,187,187,1)";
            this.shadow = !0;
            this.shadowBlur = 15;
            this.shadowColor = "rgba(0,0,0,0.2)";
            this.pointerColor = "rgba(76,76,76,1)";
            this.pointerBorderWidth = 1;
            this.pointerBorderColor = "rgba(255,255,255,1)";
            this.pointerThickness = 2;
            this.zIndex = 1999999993;
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
                    var k = b.deprecatedOpts[c];
                    if (k) c = k;
                    else throw Error("Option '" + c + "' is DEPRECATED");
                  }
                  var n = "get__" + c;
                  if ("function" === typeof f[n]) var q = f[n](value);
                  else if (c in f) q = f[c];
                  else throw Error("Unrecognized configuration option: " + c);
                  return q;
                } catch (t) {
                  console.error(t);
                }
                return !1;
              }
              if (2 <= arguments.length && "string" === typeof arguments[0]) {
                try {
                  if (!e(arguments[0], arguments[1])) return !1;
                } catch (t) {
                  return console.error(t), !1;
                }
                this.redraw();
                this.exposeColor();
                return !0;
              }
              if (1 === arguments.length && "object" === typeof arguments[0]) {
                q = arguments[0];
                c = !0;
                for (n in q)
                  if (q.hasOwnProperty(n))
                    try {
                      e(n, q[n]) || (c = !1);
                    } catch (t) {
                      console.error(t), (c = !1);
                    }
                this.redraw();
                this.exposeColor();
                return c;
              }
              throw Error("Invalid arguments");
            };
            this.channel = function (c, k) {
              if ("string" !== typeof c) throw Error("Invalid value for channel name: " + c);
              if (void 0 === k) return this.channels.hasOwnProperty(c.toLowerCase()) ? this.channels[c.toLowerCase()] : !1;
              switch (c.toLowerCase()) {
                case "r":
                  c = this.fromRGBA(k, null, null, null);
                  break;
                case "g":
                  c = this.fromRGBA(null, k, null, null);
                  break;
                case "b":
                  c = this.fromRGBA(null, null, k, null);
                  break;
                case "h":
                  c = this.fromHSVA(k, null, null, null);
                  break;
                case "s":
                  c = this.fromHSVA(null, k, null, null);
                  break;
                case "v":
                  c = this.fromHSVA(null, null, k, null);
                  break;
                case "a":
                  c = this.fromHSVA(null, null, null, k);
                  break;
                default:
                  return !1;
              }
              return c ? (this.redraw(), !0) : !1;
            };
            this.trigger = function (c) {
              c = b.strList(c);
              for (var k = 0; k < c.length; k += 1) {
                var n = c[k].toLowerCase(),
                  q = null;
                switch (n) {
                  case "input":
                    q = "onInput";
                    break;
                  case "change":
                    q = "onChange";
                }
                q && b.triggerCallback(this, q);
                b.triggerInputEvent(this.valueElement, n, !0, !0);
              }
            };
            this.fromHSVA = function (c, k, n, q, t) {
              void 0 === c && (c = null);
              void 0 === k && (k = null);
              void 0 === n && (n = null);
              void 0 === q && (q = null);
              if (null !== c) {
                if (isNaN(c)) return !1;
                this.channels.h = Math.max(0, Math.min(360, c));
              }
              if (null !== k) {
                if (isNaN(k)) return !1;
                this.channels.s = Math.max(0, Math.min(100, this.maxS, k), this.minS);
              }
              if (null !== n) {
                if (isNaN(n)) return !1;
                this.channels.v = Math.max(0, Math.min(100, this.maxV, n), this.minV);
              }
              if (null !== q) {
                if (isNaN(q)) return !1;
                this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, q), this.minA) : 1;
              }
              c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
              this.channels.r = c[0];
              this.channels.g = c[1];
              this.channels.b = c[2];
              this.exposeColor(t);
              return !0;
            };
            this.fromRGBA = function (c, k, n, q, t) {
              void 0 === c && (c = null);
              void 0 === k && (k = null);
              void 0 === n && (n = null);
              void 0 === q && (q = null);
              if (null !== c) {
                if (isNaN(c)) return !1;
                c = Math.max(0, Math.min(255, c));
              }
              if (null !== k) {
                if (isNaN(k)) return !1;
                k = Math.max(0, Math.min(255, k));
              }
              if (null !== n) {
                if (isNaN(n)) return !1;
                n = Math.max(0, Math.min(255, n));
              }
              if (null !== q) {
                if (isNaN(q)) return !1;
                this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, q), this.minA) : 1;
              }
              c = b.RGB_HSV(null === c ? this.channels.r : c, null === k ? this.channels.g : k, null === n ? this.channels.b : n);
              null !== c[0] && (this.channels.h = Math.max(0, Math.min(360, c[0])));
              0 !== c[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, c[1])));
              this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, c[2]));
              c = b.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
              this.channels.r = c[0];
              this.channels.g = c[1];
              this.channels.b = c[2];
              this.exposeColor(t);
              return !0;
            };
            this.fromHSV = function (c, k, n, q) {
              return this.fromHSVA(c, k, n, null, q);
            };
            this.fromRGB = function (c, k, n, q) {
              return this.fromRGBA(c, k, n, null, q);
            };
            this.fromString = function (c, k) {
              if (!this.required && "" === c.trim()) return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
              c = b.parseColorString(c);
              if (!c) return !1;
              "any" === this.format.toLowerCase() && (this._setFormat(c.format), b.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
              this.fromRGBA(c.rgba[0], c.rgba[1], c.rgba[2], c.rgba[3], k);
              return !0;
            };
            this.randomize = function (c, k, n, q, t, w, B, A) {
              void 0 === c && (c = 0);
              void 0 === k && (k = 100);
              void 0 === n && (n = 0);
              void 0 === q && (q = 100);
              void 0 === t && (t = 0);
              void 0 === w && (w = 359);
              void 0 === B && (B = 1);
              void 0 === A && (A = 1);
              this.fromHSVA(
                t + Math.floor(Math.random() * (w - t + 1)),
                n + Math.floor(Math.random() * (q - n + 1)),
                c + Math.floor(Math.random() * (k - c + 1)),
                (100 * B + Math.floor(Math.random() * (100 * (A - B) + 1))) / 100
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
            this.toDataURL = function () {
              try {
                return this.toCanvas().toDataURL();
              } catch (c) {
                return b.base64Data;
              }
            };
            this.toBackground = function () {
              return b.pub.background(this.toRGBAString());
            };
            this.isLight = function () {
              return 127.5 < this.toGrayscale();
            };
            this.hide = function () {
              r() &&
                (b.removeClass(f.targetElement, b.pub.activeClassName),
                b.picker.wrap && b.picker.wrap.parentNode && b.picker.wrap.parentNode.removeChild(b.picker.wrap),
                delete b.picker.owner);
            };
            this.show = function () {
              g();
            };
            this.redraw = function () {
              r() && g();
            };
            this.getFormat = function () {
              return this._currentFormat;
            };
            this._setFormat = function (c) {
              this._currentFormat = c.toLowerCase();
            };
            this.hasAlphaChannel = function () {
              return "auto" === this.alphaChannel
                ? "any" === this.format.toLowerCase() || b.isAlphaFormat(this.getFormat()) || void 0 !== this.alpha || void 0 !== this.alphaElement
                : this.alphaChannel;
            };
            this.processValueInput = function (c) {
              this.fromString(c) || this.exposeColor();
            };
            this.processAlphaInput = function (c) {
              this.fromHSVA(null, null, null, parseFloat(c)) || this.exposeColor();
            };
            this.exposeColor = function (c) {
              var k = this.toString(),
                n = this.getFormat();
              b.setDataAttr(this.targetElement, "current-color", k);
              if (!(c & b.flags.leaveValue) && this.valueElement) {
                if ("hex" === n || "hexa" === n) this.uppercase || (k = k.toLowerCase()), this.hash || (k = k.replace(/^#/, ""));
                this.setValueElementValue(k);
              }
              c & b.flags.leaveAlpha || !this.alphaElement || this.setAlphaElementValue(Math.round(100 * this.channels.a) / 100);
              c & b.flags.leavePreview ||
                !this.previewElement ||
                (b.isTextInput(this.previewElement) || (b.isButton(this.previewElement) && b.isButtonEmpty(this.previewElement)), this.setPreviewElementBg(this.toRGBAString()));
              r() && (h(), l(), m());
            };
            this.setPreviewElementBg = function (c) {
              if (this.previewElement) {
                var k = null,
                  n = null;
                if (b.isTextInput(this.previewElement) || (b.isButton(this.previewElement) && !b.isButtonEmpty(this.previewElement)))
                  (k = this.previewPosition), (n = this.previewSize);
                var q = null,
                  t = [];
                if (c) {
                  t.push({
                    image: b.genColorPreviewGradient(c, k, n ? n - b.pub.previewSeparator.length : null),
                    position: "left top",
                    size: "auto",
                    repeat: k ? "repeat-y" : "repeat",
                    origin: "padding-box",
                  });
                  c = b.genColorPreviewCanvas("rgba(0,0,0,0)", k ? { left: "right", right: "left" }[k] : null, n, !0);
                  try {
                    q = c.canvas.toDataURL();
                  } catch (Q) {
                    q = b.base64Data;
                  }
                  t.push({
                    image: "url('" + q + "')",
                    position: (k || "left") + " top",
                    size: c.width + "px " + c.height + "px",
                    repeat: k ? "repeat-y" : "repeat",
                    origin: "padding-box",
                  });
                } else
                  t.push({
                    image: "none",
                    position: "left top",
                    size: "auto",
                    repeat: "no-repeat",
                    origin: "padding-box",
                  });
                q = [];
                c = [];
                n = [];
                for (var w = [], B = [], A = 0; A < t.length; A += 1) q.push(t[A].image), c.push(t[A].position), n.push(t[A].size), w.push(t[A].repeat), B.push(t[A].origin);
                t = {
                  "background-image": q.join(", "),
                  "background-position": c.join(", "),
                  "background-size": n.join(", "),
                  "background-repeat": w.join(", "),
                  "background-origin": B.join(", "),
                };
                b.setStyle(this.previewElement, t, this.forceStyle);
                t = { left: null, right: null };
                k && (t[k] = this.previewSize + this.previewPadding + "px");
                t = { "padding-left": t.left, "padding-right": t.right };
                b.setStyle(this.previewElement, t, this.forceStyle, !0);
              }
            };
            this.setValueElementValue = function (c) {
              this.valueElement && ("input" === b.nodeName(this.valueElement) ? (this.valueElement.value = c) : (this.valueElement.innerHTML = D.createHTML(c)));
            };
            this.setAlphaElementValue = function (c) {
              this.alphaElement && ("input" === b.nodeName(this.alphaElement) ? (this.alphaElement.value = c) : (this.alphaElement.innerHTML = D.createHTML(c)));
            };
            this._processParentElementsInDOM = function () {
              if (!this._parentElementsProcessed) {
                this._parentElementsProcessed = !0;
                var c = this.targetElement;
                do {
                  var k = b.getCompStyle(c);
                  c instanceof ShadowRoot && (this.fixed = !0);
                  k.position && "fixed" === k.position.toLowerCase() && (this.fixed = !0);
                  c === this.targetElement || b.getData(c, "hasScrollListener") || (c.addEventListener("scroll", b.onParentScroll, !1), b.setData(c, "hasScrollListener", !0));
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
                    e(z, b.pub.options[z]);
                  } catch (c) {
                    console.error(c);
                  }
            var C = [];
            d.preset && ("string" === typeof d.preset ? (C = d.preset.split(/\s+/)) : Array.isArray(d.preset) ? (C = d.preset.slice()) : console.warn("Unrecognized value"));
            -1 === C.indexOf("default") && C.push("default");
            for (var I = C.length - 1; 0 <= I; --I) {
              var H = C[I];
              if (H && b.pub.presets.hasOwnProperty(H))
                for (z in b.pub.presets[H])
                  if (b.pub.presets[H].hasOwnProperty(z))
                    try {
                      e(z, b.pub.presets[H][z]);
                    } catch (c) {
                      console.error(c);
                    }
            }
            C = ["preset"];
            for (z in d)
              if (d.hasOwnProperty(z) && -1 === C.indexOf(z))
                try {
                  e(z, d[z]);
                } catch (c) {
                  console.error(c);
                }
            this.container = void 0 === this.container ? p.document.documentElement : b.node(this.container);
            if (!this.container) throw Error("No container element");
            this.targetElement = b.node(a);
            if (!this.targetElement) {
              if ("string" === typeof a && /^[a-zA-Z][\w:.-]*$/.test(a)) throw Error("Need CSS selector.");
              throw Error("No target element");
            }
            if (this.targetElement.frcp && this.targetElement.frcp instanceof b.pub) throw Error("Redundant Fr-Color-picker");
            this.targetElement.frcp = this;
            b.addClass(this.targetElement, b.pub.className);
            b.instances.push(this);
            b.isButton(this.targetElement) &&
              ("button" !== this.targetElement.type.toLowerCase() && (this.targetElement.type = "button"),
              b.isButtonEmpty(this.targetElement) &&
                (b.removeChildren(this.targetElement),
                this.targetElement.appendChild(p.document.createTextNode("\u00a0")),
                (a = b.getCompStyle(this.targetElement)),
                (parseFloat(a["min-width"]) || 0) < this.previewSize && b.setStyle(this.targetElement, { "min-width": this.previewSize + "px" }, this.forceStyle)));
            void 0 === this.valueElement
              ? b.isTextInput(this.targetElement) && (this.valueElement = this.targetElement)
              : null !== this.valueElement && (this.valueElement = b.node(this.valueElement));
            this.alphaElement && (this.alphaElement = b.node(this.alphaElement));
            void 0 === this.previewElement ? (this.previewElement = this.targetElement) : null !== this.previewElement && (this.previewElement = b.node(this.previewElement));
            this.valueElement &&
              b.isTextInput(this.valueElement) &&
              ((a = this.valueElement.oninput),
              (this.valueElement.oninput = null),
              this.valueElement.addEventListener("keydown", v, !1),
              this.valueElement.addEventListener("change", y, !1),
              this.valueElement.addEventListener("input", O, !1),
              a && this.valueElement.addEventListener("input", a, !1),
              this.valueElement.setAttribute("autocomplete", "off"),
              this.valueElement.setAttribute("autocorrect", "off"),
              this.valueElement.setAttribute("autocapitalize", "off"),
              this.valueElement.setAttribute("spellcheck", !1));
            this.alphaElement &&
              b.isTextInput(this.alphaElement) &&
              (this.alphaElement.addEventListener("keydown", u, !1),
              this.alphaElement.addEventListener("change", N, !1),
              this.alphaElement.addEventListener("input", P, !1),
              this.alphaElement.setAttribute("autocomplete", "off"),
              this.alphaElement.setAttribute("autocorrect", "off"),
              this.alphaElement.setAttribute("autocapitalize", "off"),
              this.alphaElement.setAttribute("spellcheck", !1));
            a = "FFFFFF";
            void 0 !== this.value ? (a = this.value) : this.valueElement && void 0 !== this.valueElement.value && (a = this.valueElement.value);
            d = void 0;
            void 0 !== this.alpha ? (d = "" + this.alpha) : this.alphaElement && void 0 !== this.alphaElement.value && (d = this.alphaElement.value);
            this._currentFormat = null;
            -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
              ? (this._currentFormat = (z = b.parseColorString(a)) ? z.format : "hex")
              : (this._currentFormat = this.format.toLowerCase());
            this.processValueInput(a);
            void 0 !== d && this.processAlphaInput(d);
            this.random && this.randomize.apply(this, Array.isArray(this.random) ? this.random : []);
          },
        };
      b.pub.className = F;
      b.pub.activeClassName = G;
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
            p.document.addEventListener("mousedown", b.onDocumentMouseDown, !1),
              p.document.addEventListener("keyup", b.onDocumentKeyUp, !1),
              p.addEventListener("resize", b.onWindowResize, !1),
              p.addEventListener("scroll", b.onWindowScroll, !1),
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
      b.pub.background = function (a) {
        var d = [];
        d.push(b.genColorPreviewGradient(a));
        a = b.genColorPreviewCanvas();
        try {
          d.push(["url('" + a.canvas.toDataURL() + "')", "left top repeat"].join(" "));
        } catch (e) {
          d.push(["url('" + b.base64Data + "')", "left top repeat"].join(" "));
        }
        return d.join(", ");
      };
      b.pub.options = {};
      b.pub.lookupClass = F;
      b.pub.installByClassName = function () {
        return !1;
      };
      b.register();
      return b.pub;
    })();
    "undefined" === typeof p.FRColorPicker && (p.FRColorPicker = p.frColorPicker = E);
    return E;
  },
  {
    createHTML: function (p) {
      return p;
    },
  }
);
