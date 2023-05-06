// ==UserScript==
// @name        frColorPicker
// @version     6.1.1
// @author      F9y4ng
// @license     GPL-3.0-only
// @description ColorPicker for Font Rendering (Customized)
// ==/UserScript==

!(function (p, E, F) {
  "object" === typeof module && "object" === typeof module.exports
    ? (module.exports = p.document
        ? E(p, F)
        : function (y) {
            if (!y.document) throw Error("No Document!");
            return E(y, F);
          })
    : E(p, F);
})(
  "undefined" !== typeof window ? window : this,
  function (p, E) {
    p.self === p.top &&
      p.trustedTypes &&
      p.trustedTypes.createPolicy &&
      (E = p.trustedTypes.createPolicy(
        (function (y) {
          y = void 0 === y ? "fr#ColorPicker" : y;
          for (
            var G = [
                { host: "teams.live.com", policy: "gapi#gapi" },
                { host: "github.dev", policy: "standaloneColorizer" },
                { host: "vscode.dev", policy: "standaloneColorizer" },
              ],
              H = 0;
            H < G.length;
            H++
          )
            if (location.hostname.startsWith(G[H].host)) {
              y = G[H].policy;
              break;
            }
          return y;
        })(),
        {
          createHTML: function (y) {
            return y;
          },
        }
      ));
    var F = (function () {
      function y(b, d) {
        d = void 0 === d ? "" : d;
        for (b = Number(b - 1) || 8; 0 < b; --b) d += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(62 * Math.random())];
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(26 * Math.random())].concat(d);
      }
      var G = y(9),
        H = y(8),
        L = y(12),
        M = y(8),
        N = y(7),
        O = y(7),
        C = !isNaN(parseFloat(p.mozInnerScreenX)),
        K = "CSS1Compat" === document.compatMode ? document.documentElement : document.body,
        a = {
          initialized: !1,
          instances: [],
          readyQueue: [],
          base64Data:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAQCAYAAACcN8ZaAAAAAXNSR0IArs4c6QAAAFNJREFUSEtjnDlz5n8GPODs2bP4pBmMjY3xypOin3HUMUhhiRyyoyGDnMhGQwZXlhu8IZOWloa3nKFmOYItdJDLIcZRxyAF0WjI4MpNoyEz5EIGAMmNh+nDrPy/AAAAAElFTkSuQmCC",
          register: function () {
            "undefined" !== typeof p &&
              p.document &&
              ("loading" === p.document.readyState
                ? p.document.addEventListener("DOMContentLoaded", a.pub.init, !1)
                : p.document.body
                ? a.pub.init()
                : p.addEventListener("load", a.pub.init, !1));
          },
          checkZoomRatio: function (b) {
            b = C
              ? (b = p.getComputedStyle(document.body, null).getPropertyValue("transform")) && "none" !== b
                ? Number(b.split(",")[3]) || 1
                : 1
              : Number(p.getComputedStyle(document.body, null).getPropertyValue("zoom")) || 1;
            return b;
          },
          getInstances: function () {
            for (var b = [], d = 0; d < a.instances.length; d += 1) a.instances[d] && a.instances[d].targetElement && b.push(a.instances[d]);
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
                d = p.document.querySelector(b) || p.document.querySelector("fr-configure").shadowRoot.querySelector(b);
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
              p.addEventListener("testPassive", null, d);
              p.removeEventListener("testPassive", null, d);
            } catch (e) {
              console.error(e);
            }
            return b;
          })(),
          isColorAttrSupported: (function () {
            var b = p.document.createElement("input");
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
              if ("function" === typeof Event) var h = new Event(d, { bubbles: e, cancelable: g });
              else (h = p.document.createEvent("Event")), h.initEvent(d, e, g);
              if (!h) return !1;
              a.setData(h, "internal", !0);
              b.dispatchEvent(h);
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
            return b instanceof ShadowRoot ? {} : (b = p.getComputedStyle ? p.getComputedStyle(b) : b.currentStyle) ? b : {};
          },
          setStyle: function (b, d, e, g) {
            e = e ? "important" : "";
            var h = null,
              l;
            for (l in d)
              if (d.hasOwnProperty(l)) {
                var m = null;
                null === d[l]
                  ? (h || (h = a.getData(b, "origStyle")), h && h.hasOwnProperty(l) && (m = h[l]))
                  : (g && (h || (h = a.getData(b, "origStyle", {})), h.hasOwnProperty(l) || (h[l] = b.style[l])), (m = d[l]));
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
          linearGradient: (function () {
            var b = (function () {
              for (var d = ["", "-webkit-", "-moz-", "-o-", "-ms-"], e = p.document.createElement("div"), g = 0; g < d.length; g += 1) {
                var h = d[g] + "linear-gradient",
                  l = h + "(to right, rgba(0,0,0,0), rgba(0,0,0,0))";
                e.style && (e.style.background = l);
                if (e.style && e.style.background) return h;
              }
              return "linear-gradient";
            })();
            return function () {
              return b + "(" + Array.prototype.join.call(arguments, ", ") + ")";
            };
          })(),
          setBorderRadius: function (b, d) {
            a.setStyle(b, { "border-radius": d || "0" });
          },
          setBoxShadow: function (b, d) {
            a.setStyle(b, { "box-shadow": d || "none" });
          },
          getElementPos: function (b, d) {
            var e = a.checkZoomRatio();
            var g = b.getBoundingClientRect();
            b = C ? g.left * e : g.left;
            e = C ? g.top * e : g.top;
            d || ((d = a.getViewPos()), (b += d[0]), (e += d[1]));
            return [b, e];
          },
          getElementSize: function (b) {
            return [b.offsetWidth, b.offsetHeight];
          },
          getAbsPointerPos: function (b) {
            var d = a.checkZoomRatio(),
              e = 0,
              g = 0;
            "undefined" !== typeof b.changedTouches && b.changedTouches.length
              ? ((e = b.changedTouches[0].x * d), (g = b.changedTouches[0].y * d))
              : "number" === typeof b.x && ((e = b.x * d), (g = b.y * d));
            return { x: e, y: g };
          },
          getRelPointerPos: function (b) {
            var d = (b.target || b.srcElement).getBoundingClientRect(),
              e = a.checkZoomRatio(),
              g = 0,
              h = 0;
            "undefined" !== typeof b.changedTouches && b.changedTouches.length
              ? ((g = b.changedTouches[0].x * e), (h = b.changedTouches[0].y * e))
              : "number" === typeof b.x && ((g = b.x * e), (h = b.y * e));
            return {
              x: g - (C ? d.left * e : d.left),
              y: h - (C ? d.top * e : d.top),
            };
          },
          getViewPos: function () {
            var b = p.document.documentElement;
            return [(p.pageXOffset || b.scrollLeft) - (b.clientLeft || 0), (p.pageYOffset || b.scrollTop) - (b.clientTop || 0)];
          },
          getViewSize: function () {
            var b = p.document.documentElement;
            return [p.innerWidth || b.clientWidth, p.innerHeight || b.clientHeight];
          },
          RGB_HSV: function (b, d, e) {
            b /= 255;
            d /= 255;
            e /= 255;
            var g = Math.min(Math.min(b, d), e),
              h = Math.max(Math.max(b, d), e),
              l = h - g;
            if (0 === l) return [null, 0, 100 * h];
            b = b === g ? 3 + (e - d) / l : d === g ? 5 + (b - e) / l : 1 + (d - b) / l;
            return [60 * (6 === b ? 0 : b), (l / h) * 100, 100 * h];
          },
          HSV_RGB: function (b, d, e) {
            e = (e / 100) * 255;
            if (null === b) return [e, e, e];
            b /= 60;
            d /= 100;
            var g = Math.floor(b),
              h = e * (1 - d);
            b = e * (1 - d * (g % 2 ? b - g : 1 - (b - g)));
            switch (g) {
              case 6:
              case 0:
                return [e, b, h];
              case 1:
                return [b, e, h];
              case 2:
                return [h, e, b];
              case 3:
                return [h, b, e];
              case 4:
                return [b, h, e];
              case 5:
                return [e, h, b];
            }
          },
          parseColorString: function (b) {
            var d = { rgba: null, format: null },
              e;
            if ((e = b.match(/^\W*([0-9A-F]{3,8})\W*$|^currentcolor$/i))) {
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
            if ((e = b.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
              b = e[1].split(",");
              e = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
              var g, h, l, m;
              if (3 <= b.length && (g = b[0].match(e)) && (h = b[1].match(e)) && (l = b[2].match(e)))
                return (
                  (d.format = "rgb"),
                  (d.rgba = [parseFloat(g[1]) || 0, parseFloat(h[1]) || 0, parseFloat(l[1]) || 0, 1]),
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
            var d = p.devicePixelRatio || 1;
            b.width *= d;
            b.height *= d;
            b.getContext("2d").scale(d, d);
          },
          genColorPreviewCanvas: function (b, d, e, g) {
            var h = Math.round(a.pub.previewSeparator.length),
              l = a.pub.chessboardSize,
              m = a.pub.chessboardColor1,
              r = a.pub.chessboardColor2;
            e = e ? e : 2 * l;
            var v = 2 * l,
              u = a.createEl("canvas"),
              z = u.getContext("2d");
            u.width = e;
            u.height = v;
            g && a.scaleCanvasForHighDPR(u);
            z.fillStyle = m;
            z.fillRect(0, 0, e, v);
            z.fillStyle = r;
            for (g = 0; g < e; g += 2 * l) z.fillRect(g, 0, l, l), z.fillRect(g + l, l, l, l);
            b && ((z.fillStyle = b), z.fillRect(0, 0, e, v));
            b = null;
            switch (d) {
              case "left":
                b = 0;
                z.clearRect(0, 0, h / 2, v);
                break;
              case "right":
                (b = e - h), z.clearRect(e - h / 2, 0, h / 2, v);
            }
            if (null !== b)
              for (z.lineWidth = 1, d = 0; d < a.pub.previewSeparator.length; d += 1)
                z.beginPath(), (z.strokeStyle = a.pub.previewSeparator[d]), z.moveTo(0.5 + b + d, 0), z.lineTo(0.5 + b + d, v), z.stroke();
            return { canvas: u, width: e, height: v };
          },
          genColorPreviewGradient: function (b, d, e) {
            return a.linearGradient.apply(
              this,
              d && e
                ? ["to " + { left: "right", right: "left" }[d], b + " 0%", b + " " + e + "px", "rgba(0,0,0,0) " + (e + 1) + "px", "rgba(0,0,0,0) 100%"]
                : ["to right", b + " 0%", b + " 100%"]
            );
          },
          redrawPosition: function () {
            if (a.picker && a.picker.owner) {
              var b = a.picker.owner;
              if (b.fixed) {
                var d = a.getElementPos(b.targetElement, !0);
                var e = [0, 0];
              } else (d = a.getElementPos(b.targetElement)), (e = a.getViewPos());
              var g = a.getElementSize(b.targetElement),
                h = a.getViewSize(),
                l = a.getPickerDims(b);
              l = [l.borderW, l.borderH];
              switch (b.position.toLowerCase()) {
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
              e = b.smartPosition
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
              a._drawPosition(b, e[m], e[r], b.fixed ? "fixed" : "absolute", (e[0] + l[0] > d[0] || e[0] < d[0] + g[0]) && e[1] + l[1] < d[1] + g[1]);
            }
          },
          _drawPosition: function (b, d, e, g, h) {
            h = h ? 0 : b.shadowBlur;
            var l = a.checkZoomRatio();
            a.picker.wrap.style.left = d + "px";
            a.picker.wrap.style.top = e + "px";
            C &&
              l &&
              1 !== l &&
              ((a.picker.wrap.style.left = d / l - K.getBoundingClientRect().left + "px"), (a.picker.wrap.style.top = e / l - K.getBoundingClientRect().top + "px"));
            a.picker.wrap.style.position = g;
            a.setBoxShadow(a.picker.boxS, b.shadow ? new a.BoxShadow(0, h, b.shadowBlur, 0, b.shadowColor) : null);
          },
          getPickerDims: function (b) {
            var d = 2 * b.controlBorderWidth + b.width,
              e = 2 * b.controlBorderWidth + b.height,
              g = 2 * b.controlBorderWidth + 2 * a.getControlPadding(b) + b.sliderSize;
            a.getSliderChannel(b) && (d += g);
            b.hasAlphaChannel() && (d += g);
            b.closeButton && (e += 2 * b.controlBorderWidth + b.padding + b.buttonHeight);
            g = d + 2 * b.padding;
            var h = e + 2 * b.padding;
            return {
              contentW: d,
              contentH: e,
              paddedW: g,
              paddedH: h,
              borderW: g + 2 * b.borderWidth,
              borderH: h + 2 * b.borderWidth,
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
            C && 1 !== a.checkZoomRatio() ? a.picker && a.picker.owner && a.picker.owner.tryHide() : a.redrawPosition();
          },
          onParentScroll: function (b) {
            a.picker && a.picker.owner && a.picker.owner.tryHide();
          },
          onDocumentMouseDown: function (b) {
            var d = b.composedPath()[0] || b.target || b.srcElement;
            if (d.frcp && d.frcp instanceof a.pub) d.frcp.showOnClick && !d.disabled && (a.picker && a.picker.owner ? a.picker.owner.tryHide() : d.frcp.show());
            else if (a.getData(d, "gui")) {
              if (a.getData(d, "control")) a.onControlPointerStart(b, d, a.getData(d, "control"), "mouse");
            } else a.picker && a.picker.owner && a.picker.owner.tryHide();
          },
          onPickerTouchStart: function (b) {
            var d = b.target || b.srcElement;
            if (a.getData(d, "control")) a.onControlPointerStart(b, d, a.getData(d, "control"), "touch");
          },
          onControlPointerStart: function (b, d, e, g) {
            var h = a.getData(d, "instance");
            a.preventDefault(b);
            var l = function (v, u) {
              a.attachGroupEvent("drag", v, a._pointerMoveEvent[g], a.onDocumentPointerMove(b, d, e, g, u));
              a.attachGroupEvent("drag", v, a._pointerEndEvent[g], a.onDocumentPointerEnd(b, d, e, g));
            };
            l(p.document, [0, 0]);
            if (p.parent && p.frameElement) {
              var m = a.checkZoomRatio(),
                r = p.frameElement.getBoundingClientRect();
              l(p.parent.window.document, C ? [-r.left * m, -r.top * m] : [-r.left, -r.top]);
            }
            l = a.getAbsPointerPos(b);
            m = a.getRelPointerPos(b);
            a._pointerOrigin = { x: l.x - m.x, y: l.y - m.y };
            switch (e) {
              case "pad":
                "v" === a.getSliderChannel(h) && 0 === h.channels.v && h.fromHSVA(null, null, 100, null);
                a.setPad(h, b, 0, 0);
                break;
              case "sld":
                a.setSld(h, b, 0);
                break;
              case "asld":
                a.setASld(h, b, 0);
            }
            h.trigger("input");
          },
          onDocumentPointerMove: function (b, d, e, g, h) {
            return function (l) {
              var m = a.getData(d, "instance");
              switch (e) {
                case "pad":
                  a.setPad(m, l, h[0], h[1]);
                  break;
                case "sld":
                  a.setSld(m, l, h[1]);
                  break;
                case "asld":
                  a.setASld(m, l, h[1]);
              }
              m.trigger("input");
            };
          },
          onDocumentPointerEnd: function (b, d, e, g) {
            return function (h) {
              h = a.getData(d, "instance");
              a.detachGroupEvents("drag");
              h.trigger("input");
              h.trigger("change");
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
            b.draw = function (g, h, l) {
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
            return b;
          },
          createSliderGradient: function () {
            var b = { elm: null, draw: null },
              d = a.createEl("canvas"),
              e = d.getContext("2d");
            b.elm = d;
            b.draw = function (g, h, l, m) {
              d.width = g;
              d.height = h;
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
            b.draw = function (g, h, l) {
              d.width = g;
              d.height = h;
              e.clearRect(0, 0, d.width, d.height);
              g = d.width / 2;
              h = a.pub.chessboardColor2;
              e.fillStyle = a.pub.chessboardColor1;
              e.fillRect(0, 0, d.width, d.height);
              if (0 < g) for (var m = 0; m < d.height; m += 2 * g) (e.fillStyle = h), e.fillRect(0, m, g, g), e.fillRect(g, m + g, g, g);
              g = e.createLinearGradient(0, 0, 0, d.height);
              g.addColorStop(0, l);
              g.addColorStop(1, "rgba(0,0,0,0)");
              e.fillStyle = g;
              e.fillRect(0, 0, d.width, d.height);
            };
            return b;
          },
          BoxShadow: (function () {
            var b = function (d, e, g, h, l, m) {
              this.hShadow = d;
              this.vShadow = e;
              this.blur = g;
              this.spread = h;
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
          pub: function (b, d) {
            function e(c, k) {
              if ("string" !== typeof c) throw Error("Invalid value for option name: " + c);
              if (a.enumOpts.hasOwnProperty(c) && ("string" === typeof k && (k = k.toLowerCase()), -1 === a.enumOpts[c].indexOf(k)))
                throw Error("Option '" + c + "' has invalid value: " + k);
              if (a.deprecatedOpts.hasOwnProperty(c)) {
                var n = a.deprecatedOpts[c];
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
                k = !!a.getSliderChannel(f),
                n = f.hasAlphaChannel(),
                q = a.getPickerDims(f),
                t = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
                w = a.getControlPadding(f),
                B = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
                x = a.checkZoomRatio();
              c.wrap.className = L;
              c.wrap.style.display = "block";
              c.wrap.style.clear = "both";
              c.wrap.style.width = q.borderW + "px";
              c.wrap.style.height = q.borderH + "px";
              c.wrap.style.zIndex = f.zIndex;
              C
                ? x && 1 !== x
                  ? ((c.wrap.style.position = "absolute"), (c.wrap.style.transformOrigin = "left top 0"), (c.wrap.style.transform = "scale(" + 1 / x + ")"))
                  : ((c.wrap.style.transformOrigin = null), (c.wrap.style.transform = null))
                : (c.wrap.style.zoom = x && 1 !== x ? 1 / x : null);
              c.box.className = M;
              c.box.style.width = q.paddedW + "px";
              c.box.style.height = q.paddedH + "px";
              c.box.style.position = "relative";
              c.boxS.className = N;
              c.boxS.style.position = "absolute";
              c.boxS.style.left = "0";
              c.boxS.style.top = "0";
              c.boxS.style.width = "100%";
              c.boxS.style.height = "100%";
              a.setBorderRadius(c.boxS, B + "px");
              c.boxB.className = O;
              c.boxB.style.position = "relative";
              c.boxB.style.border = f.borderWidth + "px solid";
              c.boxB.style.borderColor = f.borderColor;
              c.boxB.style.background = f.backgroundColor;
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
              c.padB.style.borderColor = f.controlBorderColor;
              c.padM.style.position = "absolute";
              c.padM.style.left = "0px";
              c.padM.style.top = "0px";
              c.padM.style.width = f.padding + 2 * f.controlBorderWidth + f.width + w + "px";
              c.padM.style.height = 2 * f.controlBorderWidth + 2 * f.padding + f.height + "px";
              c.padM.style.cursor = "crosshair";
              a.setData(c.padM, { instance: f, control: "pad" });
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
              a.setData(c.sldM, { instance: f, control: "sld" });
              c.sldPtrIB.style.border = c.sldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor;
              c.sldPtrOB.style.position = "absolute";
              c.sldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.sldPtrOB.style.top = "0";
              c.sldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor;
              c.sldPtrS.style.width = f.sliderSize + "px";
              c.sldPtrS.style.height = a.pub.sliderInnerSpace + "px";
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
              a.setData(c.asldM, { instance: f, control: "asld" });
              c.asldPtrIB.style.border = c.asldPtrOB.style.border = f.pointerBorderWidth + "px solid " + f.pointerBorderColor;
              c.asldPtrOB.style.position = "absolute";
              c.asldPtrOB.style.left = -(2 * f.pointerBorderWidth + f.pointerThickness) + "px";
              c.asldPtrOB.style.top = "0";
              c.asldPtrMB.style.border = f.pointerThickness + "px solid " + f.pointerColor;
              c.asldPtrS.style.width = f.sliderSize + "px";
              c.asldPtrS.style.height = a.pub.sliderInnerSpace + "px";
              h();
              l();
              m();
              a.picker.owner && a.picker.owner !== f && a.removeClass(a.picker.owner.targetElement, a.pub.activeClassName);
              a.picker.owner = f;
              f.container === p.document.body ? a.redrawPosition() : a._drawPosition(f, 0, 0, "relative", !1);
              c.wrap.parentNode !== f.container && f.container.appendChild(c.wrap);
              a.addClass(f.targetElement, a.pub.activeClassName);
            }
            function h() {
              var c = a.getPadYChannel(f);
              c = Math.round((1 - f.channels[c] / 100) * (f.height - 1));
              var k = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
              a.picker.cross.style.left = Math.round((f.channels.h / 360) * (f.width - 1)) + k + "px";
              a.picker.cross.style.top = c + k + "px";
              switch (a.getSliderChannel(f)) {
                case "s":
                  k = a.HSV_RGB(f.channels.h, 100, f.channels.v);
                  c = a.HSV_RGB(f.channels.h, 0, f.channels.v);
                  k = "rgb(" + Math.round(k[0]) + "," + Math.round(k[1]) + "," + Math.round(k[2]) + ")";
                  a.picker.sldGrad.draw(f.sliderSize, f.height, k, "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")");
                  break;
                case "v":
                  (c = a.HSV_RGB(f.channels.h, f.channels.s, 100)),
                    (k = "rgb(" + Math.round(c[0]) + "," + Math.round(c[1]) + "," + Math.round(c[2]) + ")"),
                    a.picker.sldGrad.draw(f.sliderSize, f.height, k, "#000");
              }
              a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function l() {
              var c = a.getSliderChannel(f);
              c &&
                (a.picker.sldPtrOB.style.top =
                  Math.round((1 - f.channels[c] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2) + "px");
              a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
            }
            function m() {
              a.picker.asldPtrOB.style.top =
                Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2) + "px";
            }
            function r() {
              return a.picker && a.picker.owner === f;
            }
            function v(c) {
              "Enter" === a.eventKey(c) && (f.valueElement && f.processValueInput(f.valueElement.value), f.tryHide());
            }
            function u(c) {
              "Enter" === a.eventKey(c) && (f.alphaElement && f.processAlphaInput(f.alphaElement.value), f.tryHide());
            }
            function z(c) {
              a.getData(c, "internal") ||
                ((c = f.valueElement.value),
                f.processValueInput(f.valueElement.value),
                a.triggerCallback(f, "onChange"),
                f.valueElement.value !== c && a.triggerInputEvent(f.valueElement, "change", !0, !0));
            }
            function P(c) {
              a.getData(c, "internal") ||
                ((c = f.alphaElement.value),
                f.processAlphaInput(f.alphaElement.value),
                a.triggerCallback(f, "onChange"),
                a.triggerInputEvent(f.valueElement, "change", !0, !0),
                f.alphaElement.value !== c && a.triggerInputEvent(f.alphaElement, "change", !0, !0));
            }
            function Q(c) {
              a.getData(c, "internal") || (f.valueElement && f.fromString(f.valueElement.value, a.flags.leaveValue), a.triggerCallback(f, "onInput"));
            }
            function R(c) {
              a.getData(c, "internal") ||
                (f.alphaElement && f.fromHSVA(null, null, null, parseFloat(f.alphaElement.value), a.flags.leaveAlpha),
                a.triggerCallback(f, "onInput"),
                a.triggerInputEvent(f.valueElement, "input", !0, !0));
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
                  if (a.deprecatedOpts.hasOwnProperty(c)) {
                    var k = a.deprecatedOpts[c];
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
              c = a.strList(c);
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
                q && a.triggerCallback(this, q);
                a.triggerInputEvent(this.valueElement, n, !0, !0);
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
              c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
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
              c = a.RGB_HSV(null === c ? this.channels.r : c, null === k ? this.channels.g : k, null === n ? this.channels.b : n);
              null !== c[0] && (this.channels.h = Math.max(0, Math.min(360, c[0])));
              0 !== c[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, c[1])));
              this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, c[2]));
              c = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
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
              c = a.parseColorString(c);
              if (!c) return !1;
              "any" === this.format.toLowerCase() && (this._setFormat(c.format), a.isAlphaFormat(this.getFormat()) || (c.rgba[3] = 1));
              this.fromRGBA(c.rgba[0], c.rgba[1], c.rgba[2], c.rgba[3], k);
              return !0;
            };
            this.randomize = function (c, k, n, q, t, w, B, x) {
              void 0 === c && (c = 0);
              void 0 === k && (k = 100);
              void 0 === n && (n = 0);
              void 0 === q && (q = 100);
              void 0 === t && (t = 0);
              void 0 === w && (w = 359);
              void 0 === B && (B = 1);
              void 0 === x && (x = 1);
              this.fromHSVA(
                t + Math.floor(Math.random() * (w - t + 1)),
                n + Math.floor(Math.random() * (q - n + 1)),
                c + Math.floor(Math.random() * (k - c + 1)),
                (100 * B + Math.floor(Math.random() * (100 * (x - B) + 1))) / 100
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
            this.toDataURL = function () {
              try {
                return this.toCanvas().toDataURL();
              } catch (c) {
                return a.base64Data;
              }
            };
            this.toBackground = function () {
              return a.pub.background(this.toRGBAString());
            };
            this.isLight = function () {
              return 127.5 < this.toGrayscale();
            };
            this.hide = function () {
              r() &&
                (a.removeClass(f.targetElement, a.pub.activeClassName),
                a.picker.wrap && a.picker.wrap.parentNode && a.picker.wrap.parentNode.removeChild(a.picker.wrap),
                delete a.picker.owner);
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
              var k = this.toString(),
                n = this.getFormat();
              a.setDataAttr(this.targetElement, "current-color", k);
              if (!(c & a.flags.leaveValue) && this.valueElement) {
                if ("hex" === n || "hexa" === n) this.uppercase || (k = k.toLowerCase()), this.hash || (k = k.replace(/^#/, ""));
                this.setValueElementValue(k);
              }
              c & a.flags.leaveAlpha || !this.alphaElement || this.setAlphaElementValue(Math.round(100 * this.channels.a) / 100);
              c & a.flags.leavePreview ||
                !this.previewElement ||
                (a.isTextInput(this.previewElement) || (a.isButton(this.previewElement) && a.isButtonEmpty(this.previewElement)), this.setPreviewElementBg(this.toRGBAString()));
              r() && (h(), l(), m());
            };
            this.setPreviewElementBg = function (c) {
              if (this.previewElement) {
                var k = null,
                  n = null;
                if (a.isTextInput(this.previewElement) || (a.isButton(this.previewElement) && !a.isButtonEmpty(this.previewElement)))
                  (k = this.previewPosition), (n = this.previewSize);
                var q = null,
                  t = [];
                if (c) {
                  t.push({
                    image: a.genColorPreviewGradient(c, k, n ? n - a.pub.previewSeparator.length : null),
                    position: "left top",
                    size: "auto",
                    repeat: k ? "repeat-y" : "repeat",
                    origin: "padding-box",
                  });
                  c = a.genColorPreviewCanvas("rgba(0,0,0,0)", k ? { left: "right", right: "left" }[k] : null, n, !0);
                  try {
                    q = c.canvas.toDataURL();
                  } catch (S) {
                    q = a.base64Data;
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
                for (var w = [], B = [], x = 0; x < t.length; x += 1) q.push(t[x].image), c.push(t[x].position), n.push(t[x].size), w.push(t[x].repeat), B.push(t[x].origin);
                t = {
                  "background-image": q.join(", "),
                  "background-position": c.join(", "),
                  "background-size": n.join(", "),
                  "background-repeat": w.join(", "),
                  "background-origin": B.join(", "),
                };
                a.setStyle(this.previewElement, t, this.forceStyle);
                t = { left: null, right: null };
                k && (t[k] = this.previewSize + this.previewPadding + "px");
                t = { "padding-left": t.left, "padding-right": t.right };
                a.setStyle(this.previewElement, t, this.forceStyle, !0);
              }
            };
            this.setValueElementValue = function (c) {
              this.valueElement && ("input" === a.nodeName(this.valueElement) ? (this.valueElement.value = c) : (this.valueElement.innerHTML = E.createHTML(c)));
            };
            this.setAlphaElementValue = function (c) {
              this.alphaElement && ("input" === a.nodeName(this.alphaElement) ? (this.alphaElement.value = c) : (this.alphaElement.innerHTML = E.createHTML(c)));
            };
            this._processParentElementsInDOM = function () {
              if (!this._parentElementsProcessed) {
                this._parentElementsProcessed = !0;
                var c = this.targetElement;
                do {
                  var k = a.getCompStyle(c);
                  c instanceof ShadowRoot && (this.fixed = !0);
                  k.position && "fixed" === k.position.toLowerCase() && (this.fixed = !0);
                  c === this.targetElement || a.getData(c, "hasScrollListener") || (c.addEventListener("scroll", a.onParentScroll, !1), a.setData(c, "hasScrollListener", !0));
                } while ((c = c.parentNode) && "body" !== a.nodeName(c));
              }
            };
            this.tryHide = function () {
              this.hideOnLeave && this.hide();
            };
            if (a.pub.options)
              for (var A in a.pub.options)
                if (a.pub.options.hasOwnProperty(A))
                  try {
                    e(A, a.pub.options[A]);
                  } catch (c) {
                    console.error(c);
                  }
            var D = [];
            d.preset && ("string" === typeof d.preset ? (D = d.preset.split(/\s+/)) : Array.isArray(d.preset) ? (D = d.preset.slice()) : console.warn("Unrecognized value"));
            -1 === D.indexOf("default") && D.push("default");
            for (var J = D.length - 1; 0 <= J; --J) {
              var I = D[J];
              if (I && a.pub.presets.hasOwnProperty(I))
                for (A in a.pub.presets[I])
                  if (a.pub.presets[I].hasOwnProperty(A))
                    try {
                      e(A, a.pub.presets[I][A]);
                    } catch (c) {
                      console.error(c);
                    }
            }
            D = ["preset"];
            for (A in d)
              if (d.hasOwnProperty(A) && -1 === D.indexOf(A))
                try {
                  e(A, d[A]);
                } catch (c) {
                  console.error(c);
                }
            this.container = void 0 === this.container ? p.document.body : a.node(this.container);
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
                this.targetElement.appendChild(p.document.createTextNode("\u00a0")),
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
              this.valueElement.addEventListener("keydown", v, !1),
              this.valueElement.addEventListener("change", z, !1),
              this.valueElement.addEventListener("input", Q, !1),
              b && this.valueElement.addEventListener("input", b, !1),
              this.valueElement.setAttribute("autocomplete", "off"),
              this.valueElement.setAttribute("autocorrect", "off"),
              this.valueElement.setAttribute("autocapitalize", "off"),
              this.valueElement.setAttribute("spellcheck", !1));
            this.alphaElement &&
              a.isTextInput(this.alphaElement) &&
              (this.alphaElement.addEventListener("keydown", u, !1),
              this.alphaElement.addEventListener("change", P, !1),
              this.alphaElement.addEventListener("input", R, !1),
              this.alphaElement.setAttribute("autocomplete", "off"),
              this.alphaElement.setAttribute("autocorrect", "off"),
              this.alphaElement.setAttribute("autocapitalize", "off"),
              this.alphaElement.setAttribute("spellcheck", !1));
            b = "FFFFFF";
            void 0 !== this.value ? (b = this.value) : this.valueElement && void 0 !== this.valueElement.value && (b = this.valueElement.value);
            d = void 0;
            void 0 !== this.alpha ? (d = "" + this.alpha) : this.alphaElement && void 0 !== this.alphaElement.value && (d = this.alphaElement.value);
            this._currentFormat = null;
            -1 < ["auto", "any"].indexOf(this.format.toLowerCase())
              ? (this._currentFormat = (A = a.parseColorString(b)) ? A.format : "hex")
              : (this._currentFormat = this.format.toLowerCase());
            this.processValueInput(b);
            void 0 !== d && this.processAlphaInput(d);
            this.random && this.randomize.apply(this, Array.isArray(this.random) ? this.random : []);
          },
        };
      a.pub.className = G;
      a.pub.activeClassName = H;
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
            p.document.addEventListener("mousedown", a.onDocumentMouseDown, !1),
              p.document.addEventListener("keyup", a.onDocumentKeyUp, !1),
              p.addEventListener("resize", a.onWindowResize, !1),
              p.addEventListener("scroll", a.onWindowScroll, !1),
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
      a.pub.background = function (b) {
        var d = [];
        d.push(a.genColorPreviewGradient(b));
        b = a.genColorPreviewCanvas();
        try {
          d.push(["url('" + b.canvas.toDataURL() + "')", "left top repeat"].join(" "));
        } catch (e) {
          d.push(["url('" + a.base64Data + "')", "left top repeat"].join(" "));
        }
        return d.join(", ");
      };
      a.pub.options = {};
      a.pub.lookupClass = G;
      a.pub.installByClassName = function () {
        return !1;
      };
      a.register();
      return a.pub;
    })();
    "undefined" === typeof p.FRColorPicker && (p.FRColorPicker = p.frColorPicker = F);
    return F;
  },
  { createHTML: p => p }
);
