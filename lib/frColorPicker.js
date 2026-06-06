// ==UserScript==
// @name         frColorPicker
// @version      8.1.0
// @author       F9y4ng
// @license      GPL-3.0-only
// @description  ColorPicker for Font Rendering (Customized)
// ==/UserScript==

void (function (h, n, r, A, q, B, E, z) {
  var I = null,
    p = B(8),
    J = new WeakMap(),
    K = new WeakSet(),
    a = {
      createEl: function (b) {
        b = h.document.createElement(b);
        a.setData(b, "gui", !0);
        return b;
      },
      attachShadow: function (b) {
        return r.call(b, { mode: "closed" });
      },
      node: function (b) {
        if (!b) return null;
        if ("string" === typeof b)
          try {
            return h.document.querySelector(b) || I.querySelector(b);
          } catch (c) {
            return null;
          }
        return a.isNode(b) ? b : null;
      },
      isNode: function (b) {
        return "object" === typeof Node ? b instanceof Node : b && "object" === typeof b && "number" === typeof b.nodeType && "string" === typeof b.nodeName;
      },
      nodeName: function (b) {
        return b && b.nodeName ? b.nodeName.toLowerCase() : !1;
      },
      isTextInput: function (b) {
        return b && "input" === a.nodeName(b) && "text" === b.type.toLowerCase();
      },
      dataProp: "data-fr-colorpicker",
      setData: function () {
        var b = arguments[0];
        if (!b) return !1;
        if (3 === arguments.length) return ((n.call(b, a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {}))[arguments[1]] = arguments[2]), !0;
        if (2 === arguments.length && "object" === typeof arguments[1]) {
          b = n.call(b, a.dataProp) ? b[a.dataProp] : (b[a.dataProp] = {});
          var c = arguments[1],
            d;
          for (d in c) n.call(c, d) && (b[d] = c[d]);
          return !0;
        }
        throw Error("Invalid arguments");
      },
      getData: function (b, c, d) {
        if (!b || !n.call(b, a.dataProp))
          if ("undefined" !== typeof d && b) b[a.dataProp] = {};
          else return;
        b = b[a.dataProp];
        n.call(b, c) || "undefined" === typeof d || (b[c] = d);
        return b[c];
      },
      setDataAttr: function (b, c, d) {
        b.setAttribute("data-" + c, d);
      },
      _attachedGroupEvents: {},
      attachGroupEvent: function (b, c, d, g) {
        n.call(a._attachedGroupEvents, b) || (a._attachedGroupEvents[b] = []);
        a._attachedGroupEvents[b].push([c, d, g]);
        c.addEventListener(d, g, { capture: !1 });
      },
      detachGroupEvents: function (b) {
        if (n.call(a._attachedGroupEvents, b)) {
          for (var c = 0; c < a._attachedGroupEvents[b].length; c += 1) {
            var d = a._attachedGroupEvents[b][c];
            d[0].removeEventListener(d[1], d[2], { capture: !1 });
          }
          delete a._attachedGroupEvents[b];
        }
      },
      preventDefault: function (b) {
        b.preventDefault && b.preventDefault();
        b.returnValue = !1;
      },
      triggerEvent: function (b, c, d, g) {
        if (!b) return !1;
        c = new Event(c, { bubbles: d, cancelable: g, signal: z });
        a.setData(c, "internal", !0);
        b.dispatchEvent(c);
        return !0;
      },
      triggerInputEvent: function (b, c, d, g) {
        b && a.isTextInput(b) && a.triggerEvent(b, c, d, g);
      },
      strList: function (b) {
        return b ? b.replace(/^\s+|\s+$/g, "").split(/\s+/) : [];
      },
      hasClass: function (b, c) {
        return c ? ("undefined" !== typeof b.classList ? b.classList.contains(c) : -1 !== (" " + b.className.replace(/\s+/g, " ") + " ").indexOf(" " + c + " ")) : !1;
      },
      addClass: function (b, c) {
        c = a.strList(c);
        if ("undefined" !== typeof b.classList) for (var d = 0; d < c.length; d += 1) b.classList.add(c[d]);
        else for (d = 0; d < c.length; d += 1) a.hasClass(b, c[d]) || (b.className += (b.className ? " " : "") + c[d]);
      },
      removeClass: function (b, c) {
        c = a.strList(c);
        if ("undefined" !== typeof b.classList) for (var d = 0; d < c.length; d += 1) b.classList.remove(c[d]);
        else for (d = 0; d < c.length; d += 1) b.className = b.className.replace(new RegExp("^\\s*" + c[d] + "\\s*|\\s*" + c[d] + "\\s*$|\\s+" + c[d] + "(\\s+)", "g"), "$1");
      },
      getCompStyle: function (b) {
        return !b || b instanceof ShadowRoot || b.nodeType !== Node.ELEMENT_NODE ? {} : h.getComputedStyle ? h.getComputedStyle(b) : {};
      },
      setStyle: function (b, c, d, g) {
        d = d ? "important" : "";
        var k = null,
          m;
        for (m in c)
          if (n.call(c, m)) {
            var u = null;
            null === c[m]
              ? (k || (k = a.getData(b, "origStyle")), k && n.call(k, m) && (u = k[m]))
              : (g && (k || (k = a.getData(b, "origStyle", {})), n.call(k, m) || (k[m] = b.style[m])), (u = c[m]));
            null !== u && b.style.setProperty(m, u, d);
          }
      },
      hexColor: function (b, c, d) {
        return "#" + (("0" + Math.round(b).toString(16)).slice(-2) + ("0" + Math.round(c).toString(16)).slice(-2) + ("0" + Math.round(d).toString(16)).slice(-2)).toUpperCase();
      },
      hexaColor: function (b, c, d, g) {
        b = "#" + ("0" + Math.round(b).toString(16)).slice(-2) + ("0" + Math.round(c).toString(16)).slice(-2);
        b += ("0" + Math.round(d).toString(16)).slice(-2) + ("0" + Math.round(255 * g).toString(16)).slice(-2);
        return b.toUpperCase();
      },
      rgbColor: function (b, c, d) {
        return "rgb(" + Math.round(b) + "," + Math.round(c) + "," + Math.round(d) + ")";
      },
      rgbaColor: function (b, c, d, g) {
        return "rgba(" + Math.round(b) + "," + Math.round(c) + "," + Math.round(d) + "," + Math.round(100 * ("undefined" === typeof g || null === g ? 1 : g)) / 100 + ")";
      },
      getElementPos: function (b, c) {
        var d = h.frDOMRects || { toggle: !1, cur: 1, prev: 1 };
        d = d.toggle ? d.cur : 1;
        var g = b.getBoundingClientRect();
        b = g.left * d;
        g = g.top * d;
        c || ((c = a.getViewPos()), (b += c[0] * d), (g += c[1] * d));
        return [b, g];
      },
      getElementSize: function (b) {
        return [b.offsetWidth, b.offsetHeight];
      },
      getAbsPointerPos: function (b) {
        var c = h.frDOMRects || { toggle: !1, cur: 1, prev: 1 },
          d = 0,
          g = 0;
        "undefined" !== typeof b.changedTouches && b.changedTouches.length
          ? ((d = b.changedTouches[0].x * c.cur), (g = b.changedTouches[0].y * c.cur))
          : "number" === typeof b.x && ((d = b.x * c.cur), (g = b.y * c.cur));
        return { x: d, y: g };
      },
      getRelPointerPos: function (b) {
        var c = h.frDOMRects || { toggle: !1, cur: 1, prev: 1 },
          d = b.target.getBoundingClientRect(),
          g = c.toggle ? c.cur : 1,
          k = 0,
          m = 0;
        "undefined" !== typeof b.changedTouches && b.changedTouches.length
          ? ((k = b.changedTouches[0].x * c.cur), (m = b.changedTouches[0].y * c.cur))
          : "number" === typeof b.x && ((k = b.x * c.cur), (m = b.y * c.cur));
        return { x: k - d.left * g, y: m - d.top * g };
      },
      getViewPos: function () {
        var b = h.document.documentElement;
        return [(h.pageXOffset || b.scrollLeft) - (b.clientLeft || 0), (h.pageYOffset || b.scrollTop) - (b.clientTop || 0)];
      },
      getViewSize: function () {
        var b = h.document.documentElement;
        return [h.innerWidth || b.clientWidth, h.innerHeight || b.clientHeight];
      },
      RGB_HSV: function (b, c, d) {
        b /= 255;
        c /= 255;
        d /= 255;
        var g = Math.min(Math.min(b, c), d),
          k = Math.max(Math.max(b, c), d),
          m = k - g;
        if (0 === m) return [null, 0, 100 * k];
        b = b === g ? 3 + (d - c) / m : c === g ? 5 + (b - d) / m : 1 + (c - b) / m;
        return [60 * (6 === b ? 0 : b), (m / k) * 100, 100 * k];
      },
      HSV_RGB: function (b, c, d) {
        d = (d / 100) * 255;
        if (null === b) return [d, d, d];
        b /= 60;
        c /= 100;
        var g = Math.floor(b),
          k = d * (1 - c);
        b = d * (1 - c * (g % 2 ? b - g : 1 - (b - g)));
        switch (g) {
          case 6:
          case 0:
            return [d, b, k];
          case 1:
            return [b, d, k];
          case 2:
            return [k, d, b];
          case 3:
            return [k, b, d];
          case 4:
            return [b, k, d];
          case 5:
            return [d, k, b];
        }
      },
      parseColorString: function (b) {
        var c,
          d = { rgba: null, format: null };
        if (/^currentcolor$/i.test(b)) return { format: "hexa", rgba: [255, 255, 255, 1] };
        if ((c = b.match(/^\W*([0-9A-F]{3,8})\W*$/i))) {
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
        if ((c = b.match(/^\W*rgba?\(([^)]*)\)\W*$/i))) {
          b = c[1].split(",");
          c = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
          var g, k, m, u;
          if (3 <= b.length && (g = b[0].match(c)) && (k = b[1].match(c)) && (m = b[2].match(c)))
            return (
              (d.format = "rgb"),
              (d.rgba = [parseFloat(g[1]) || 0, parseFloat(k[1]) || 0, parseFloat(m[1]) || 0, 1]),
              4 <= b.length && (u = b[3].match(c)) && ((d.format = "rgba"), (d.rgba[3] = parseFloat(u[1]) || 0)),
              d
            );
        }
        return !1;
      },
      isAlphaFormat: function (b) {
        return "hexa" === b.toLowerCase() || "rgba" === b.toLowerCase();
      },
      scaleCanvasForHighDPR: function (b) {
        var c = h.devicePixelRatio || 1;
        b.width *= c;
        b.height *= c;
        b.getContext("2d").scale(c, c);
      },
      genColorPreviewCanvas: function (b, c, d, g) {
        var k = a.pub.chessboardSize,
          m = a.pub.chessboardColor1,
          u = a.pub.chessboardColor2;
        d = d ? d : 2 * k;
        var t = 2 * k,
          C = a.createEl("canvas"),
          y = C.getContext("2d");
        C.width = d;
        C.height = t;
        g && a.scaleCanvasForHighDPR(C);
        y.fillStyle = m;
        y.fillRect(0, 0, d, t);
        y.fillStyle = u;
        for (g = 0; g < d; g += 2 * k) y.fillRect(g, 0, k, k), y.fillRect(g + k, k, k, k);
        b && ((y.fillStyle = b), y.fillRect(0, 0, d, t));
        switch (c) {
          case "left":
            y.clearRect(0, 0, 0, t);
            break;
          case "right":
            y.clearRect(d - 0, 0, 0, t);
        }
        return { canvas: C, width: d, height: t };
      },
      redrawPosition: function () {
        if (a.picker && a.picker.owner) {
          var b = a.picker.owner;
          if (b.fixed) {
            var c = a.getElementPos(b.targetElement, !0);
            var d = [0, 0];
          } else (c = a.getElementPos(b.targetElement)), (d = a.getViewPos());
          var g = a.getElementSize(b.targetElement),
            k = a.getViewSize(),
            m = a.getPickerDims(b),
            u = [m.borderW, m.borderH];
          switch (b.position.toLowerCase()) {
            case "left":
              m = 1;
              var t = 0;
              var C = -1;
              break;
            case "right":
              m = 1;
              t = 0;
              C = 1;
              break;
            case "top":
              m = 0;
              t = 1;
              C = -1;
              break;
            default:
              (m = 0), (C = t = 1);
          }
          var y = (g[t] + u[t]) / 2;
          c = b.smartPosition
            ? [
                -d[m] + c[m] + u[m] > k[m] ? (-d[m] + c[m] + g[m] / 2 > k[m] / 2 && 0 <= c[m] + g[m] - u[m] ? c[m] + g[m] - u[m] : c[m]) : c[m],
                -d[t] + c[t] + g[t] + u[t] - y + y * C > k[t] + g[C]
                  ? -d[t] + c[t] + g[t] / 2 > k[t] / 2 && 0 <= c[t] + g[t] - y - y * C - 8
                    ? c[t] + g[t] - y - y * C - 4
                    : c[t] + g[t] - y + y * C + 4
                  : 0 <= c[t] + g[t] - y + y * C
                  ? c[t] + g[t] - y + y * C - 4
                  : c[t] + g[t] - y - y * C + 4,
              ]
            : [c[m], c[t] + g[t] - y + y * C - 4];
          a._drawPosition(c[m], c[t], b.fixed ? "fixed" : "absolute");
        }
      },
      _drawPosition: function (b, c, d) {
        a.picker.wrap.style.cssText = "--l:" + parseInt(b) + "px;--t:" + parseInt(c) + "px;--pos:" + d + ";";
      },
      getPickerDims: function (b) {
        var c = 2 * b.controlBorderWidth + b.width,
          d = 2 * b.controlBorderWidth + b.height,
          g = 2 * b.controlBorderWidth + 2 * a.getControlPadding(b) + b.sliderSize;
        a.getSliderChannel(b) && (c += g);
        b.hasAlphaChannel() && (c += g);
        g = c + 2 * b.padding;
        var k = d + 2 * b.padding;
        return {
          contentW: c,
          contentH: d,
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
        return "v" === b.mode.charAt(1).toLowerCase() ? "v" : "s";
      },
      getSliderChannel: function (b) {
        if (2 < b.mode.length) {
          if ("s" === b.mode.charAt(2).toLowerCase()) return "s";
          if ("v" === b.mode.charAt(2).toLowerCase()) return "v";
        }
        return null;
      },
      triggerCallback: function (b, c) {
        if (b[c]) {
          var d = null;
          if ("string" === typeof b[c])
            try {
              d = new Function(b[c]);
            } catch (g) {
              console.error(g);
            }
          else d = b[c];
          d && d.call(b);
        }
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
        b = b.composedPath().find(function (d) {
          return "INPUT" === d.nodeName && d.hasAttribute("data-current-color");
        });
        var c = J.get(b);
        c && c instanceof a.pub
          ? c.showOnClick && !b.disabled && (a.picker && a.picker.owner && a.picker.owner !== c && a.picker.owner.tryHide(), c.show())
          : a.picker && a.picker.owner && a.picker.owner.tryHide();
      },
      onDocumentMouseDown: function (b) {
        var c = b.target;
        if (!c || !c.nodeName || "fr-configure" !== c.nodeName.toLowerCase())
          if (a.getData(c, "gui")) {
            if (a.getData(c, "control")) a.onControlPointerStart(b, c, a.getData(c, "control"), "mouse");
          } else a.picker && a.picker.owner && a.picker.owner.tryHide();
      },
      onPickerTouchStart: function (b) {
        var c = b.target;
        if (a.getData(c, "control")) a.onControlPointerStart(b, c, a.getData(c, "control"), "touch");
      },
      onControlPointerStart: function (b, c, d, g) {
        var k = a.getData(c, "instance");
        if (k) {
          a.preventDefault(b);
          var m = function (C, y) {
            a.attachGroupEvent("drag", C, a._pointerMoveEvent[g], a.onDocumentPointerMove(b, c, d, g, y));
            a.attachGroupEvent("drag", C, a._pointerEndEvent[g], a.onDocumentPointerEnd(b, c, d, g));
          };
          m(h.document, [0, 0]);
          if (h.parent && h.frameElement) {
            var u = h.frDOMRects || { toggle: !1, cur: 1, prev: 1 };
            u = u.toggle ? u.cur : 1;
            var t = h.frameElement.getBoundingClientRect();
            m(h.parent.window.document, [-t.left * u, -t.top * u]);
          }
          m = a.getAbsPointerPos(b);
          u = a.getRelPointerPos(b);
          a._pointerOrigin = { x: m.x - u.x, y: m.y - u.y };
          switch (d) {
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
        }
      },
      onDocumentPointerMove: function (b, c, d, g, k) {
        return function (m) {
          var u = a.getData(c, "instance");
          if (u) {
            switch (d) {
              case "pad":
                a.setPad(u, m, k[0], k[1]);
                break;
              case "sld":
                a.setSld(u, m, k[1]);
                break;
              case "asld":
                a.setASld(u, m, k[1]);
            }
            u.trigger("input");
          }
        };
      },
      onDocumentPointerEnd: function (b, c, d, g) {
        return function (k) {
          k = a.getData(c, "instance");
          a.detachGroupEvents("drag");
          k && (k.trigger("input"), k.trigger("change"));
        };
      },
      setPad: function (b, c, d, g) {
        c = a.getAbsPointerPos(c);
        d = (360 / (b.width - 1)) * (d + c.x - a._pointerOrigin.x - b.padding - b.controlBorderWidth);
        g = 100 - (100 / (b.height - 1)) * (g + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
        switch (a.getPadYChannel(b)) {
          case "s":
            b.fromHSVA(d, g, null, null);
            break;
          case "v":
            b.fromHSVA(d, null, g, null);
        }
      },
      setSld: function (b, c, d) {
        c = a.getAbsPointerPos(c);
        d = 100 - (100 / (b.height - 1)) * (d + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
        switch (a.getSliderChannel(b)) {
          case "s":
            b.fromHSVA(null, d, null, null);
            break;
          case "v":
            b.fromHSVA(null, null, d, null);
        }
      },
      setASld: function (b, c, d) {
        c = a.getAbsPointerPos(c);
        d = 1 - (1 / (b.height - 1)) * (d + c.y - a._pointerOrigin.y - b.padding - b.controlBorderWidth);
        1 > d && ((c = b.getFormat()), "any" !== b.format.toLowerCase() || a.isAlphaFormat(c) || b._setFormat("hex" === c ? "hexa" : "rgba"));
        b.fromHSVA(null, null, null, d);
      },
      createPadCanvas: function () {
        var b = { elm: null, draw: null },
          c = a.createEl("canvas"),
          d = c.getContext("2d");
        b.elm = c;
        b.draw = function (g, k, m) {
          c.width = g;
          c.height = k;
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
          switch (m.toLowerCase()) {
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
        return b;
      },
      createSliderGradient: function () {
        var b = { elm: null, draw: null },
          c = a.createEl("canvas"),
          d = c.getContext("2d");
        b.elm = c;
        b.draw = function (g, k, m, u) {
          c.width = g;
          c.height = k;
          d.clearRect(0, 0, c.width, c.height);
          g = d.createLinearGradient(0, 0, 0, c.height);
          g.addColorStop(0, m);
          g.addColorStop(1, u);
          d.fillStyle = g;
          d.fillRect(0, 0, c.width, c.height);
        };
        return b;
      },
      createASliderGradient: function () {
        var b = { elm: null, draw: null },
          c = a.createEl("canvas"),
          d = c.getContext("2d");
        b.elm = c;
        b.draw = function (g, k, m) {
          c.width = g;
          c.height = k;
          d.clearRect(0, 0, c.width, c.height);
          g = c.width / 2;
          k = a.pub.chessboardColor2;
          d.fillStyle = a.pub.chessboardColor1;
          d.fillRect(0, 0, c.width, c.height);
          if (0 < g) for (var u = 0; u < c.height; u += 2 * g) (d.fillStyle = k), d.fillRect(0, u, g, g), d.fillRect(g, u + g, g, g);
          g = d.createLinearGradient(0, 0, 0, c.height);
          g.addColorStop(0, m);
          g.addColorStop(1, "rgba(0,0,0,0)");
          d.fillStyle = g;
          d.fillRect(0, 0, c.width, c.height);
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
      pub: function (b, c, d) {
        function g(e, l) {
          if ("string" !== typeof e) throw Error("Invalid value for option name: " + e);
          if (n.call(a.enumOpts, e) && ("string" === typeof l && (l = l.toLowerCase()), -1 === a.enumOpts[e].indexOf(l))) throw Error("Option '" + e + "' has invalid value: " + l);
          if (e in f) return (f[e] = l), !0;
          throw Error("Unrecognized configuration option: " + e);
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
            (E = a.attachShadow(a.picker.wrap)),
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
            E.appendChild(a.picker.boxB),
            E.addEventListener("touchstart", a.onPickerTouchStart, {
              passive: !1,
              capture: !1,
              signal: z,
            }));
          var e = a.picker,
            l = !!a.getSliderChannel(f),
            v = f.hasAlphaChannel(),
            x = a.getPickerDims(f),
            D = 2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize,
            F = a.getControlPadding(f),
            M = Math.min(f.borderRadius, Math.round(f.padding * Math.PI)),
            L = f.padding + f.width + 2 * f.controlBorderWidth + F + (l ? f.sliderSize + 2 * F + 2 * f.controlBorderWidth : 0);
          e.wrap.className = p + "pw";
          var w =
            ":host(." +
            q(p + "pw") +
            "){position:var(--pos,absolute);left:var(--l,0);top:var(--t,0);box-sizing:border-box;display:block!important;visibility:visible!important;opacity:1!important;clear:both!important;width:" +
            x.borderW +
            "px;height:" +
            x.borderH +
            "px;z-index:" +
            f.zIndex +
            "!important}";
          e.box.className = p + "pb";
          w += "." + q(p + "pb") + "{box-sizing:border-box;width:" + x.paddedW + "px;height:" + x.paddedH + "px;position:relative} ";
          e.boxB.className = p + "pbb";
          w +=
            "." +
            q(p + "pbb") +
            " {box-sizing:border-box;position:relative;border:" +
            f.borderWidth +
            "px solid " +
            f.borderColor +
            "!important;background:" +
            f.backgroundColor +
            "!important;border-radius:" +
            M +
            "px} ";
          e.pad.className = p + "pp";
          w += "." + q(p + "pp") + "{width:" + f.width + "px;height:" + f.height + "px;border:" + f.controlBorderWidth + "px solid " + f.controlBorderColor + "!important}";
          e.padCanvas.draw(f.width, f.height, a.getPadYChannel(f));
          e.padB.id = p + "ppb";
          w += "#" + q(p + "ppb") + "{position:absolute;left:" + f.padding + "px;top:" + f.padding + "px}";
          e.padM.id = p + "ppm";
          w +=
            "#" +
            q(p + "ppm") +
            "{position:absolute;left:0px;top:0px;width:" +
            parseInt(f.padding + 2 * f.controlBorderWidth + f.width + F) +
            "px;height:" +
            parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) +
            "px;cursor:crosshair}";
          a.setData(e.padM, { instance: f, control: "pad" });
          e.cross.className = p + "pc";
          w += "." + q(p + "pc") + "{position:absolute;left:var(--cl,0);top:var(--ct,0);width:" + D + "px;height:" + D + "px}";
          e.crossBX.className = p + "pcbx";
          w +=
            "." +
            q(p + "pcbx") +
            "{position:absolute;background:" +
            f.pointerBorderColor +
            "!important;height:" +
            parseInt(2 * f.pointerBorderWidth + f.pointerThickness) +
            "px;width:" +
            D +
            "px;top:" +
            parseInt(Math.floor(D / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth) +
            "px;left:0}";
          e.crossBY.className = p + "pcby";
          w +=
            "." +
            q(p + "pcby") +
            "{position:absolute;background:" +
            f.pointerBorderColor +
            "!important;width:" +
            parseInt(2 * f.pointerBorderWidth + f.pointerThickness) +
            "px;height:" +
            D +
            "px;left:" +
            parseInt(Math.floor(D / 2) - Math.floor(f.pointerThickness / 2) - f.pointerBorderWidth) +
            "px;top:0}";
          e.crossLX.className = p + "pclx";
          w +=
            "." +
            q(p + "pclx") +
            "{position:absolute;background:" +
            f.pointerColor +
            "!important;height:" +
            f.pointerThickness +
            "px;width:" +
            parseInt(D - 2 * f.pointerBorderWidth) +
            "px;left:" +
            f.pointerBorderWidth +
            "px;top:" +
            parseInt(Math.floor(D / 2) - Math.floor(f.pointerThickness / 2)) +
            "px}";
          e.crossLY.className = p + "pcly";
          w +=
            "." +
            q(p + "pcly") +
            "{position:absolute;background:" +
            f.pointerColor +
            "!important;width:" +
            f.pointerThickness +
            "px;height:" +
            parseInt(D - 2 * f.pointerBorderWidth) +
            "px;top:" +
            f.pointerBorderWidth +
            "px;left:" +
            parseInt(Math.floor(D / 2) - Math.floor(f.pointerThickness / 2)) +
            "px}";
          e.sld.className = p + "ps";
          w += "." + q(p + "ps") + "{overflow:hidden;width:" + f.sliderSize + "px;height:" + f.height + "px}";
          e.sldGrad.draw(f.sliderSize, f.height, "#000", "#000");
          e.sldB.id = p + "psb";
          w +=
            "#" +
            q(p + "psb") +
            "{display:" +
            (l ? "block" : "none") +
            ";position:absolute;left:" +
            parseInt(f.padding + f.width + 2 * f.controlBorderWidth + 2 * F) +
            "px;top:" +
            f.padding +
            "px;border:" +
            f.controlBorderWidth +
            "px solid " +
            f.controlBorderColor +
            "!important}";
          e.sldM.id = p + "psm";
          w +=
            "#" +
            q(p + "psm") +
            "{display:" +
            (l ? "block" : "none") +
            ";position:absolute;left:" +
            parseInt(f.padding + f.width + 2 * f.controlBorderWidth + F) +
            "px;top:0px;width:" +
            parseInt(f.sliderSize + 2 * F + 2 * f.controlBorderWidth) +
            "px;height:" +
            parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) +
            "px;cursor:default}";
          a.setData(e.sldM, { instance: f, control: "sld" });
          e.sldPtrIB.className = p + "pspi";
          w += "." + q(p + "pspi") + "{border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important}";
          e.sldPtrOB.className = p + "pspo";
          w +=
            "." +
            q(p + "pspo") +
            "{position:absolute;border:" +
            f.pointerBorderWidth +
            "px solid " +
            f.pointerBorderColor +
            "!important;top:var(--st,0);left:" +
            -(2 * f.pointerBorderWidth + f.pointerThickness) +
            "px}";
          e.sldPtrMB.className = p + "pspm";
          w += "." + q(p + "pspm") + "{border:" + f.pointerThickness + "px solid " + f.pointerColor + "!important}";
          e.sldPtrS.className = p + "psps";
          w += "." + q(p + "psps") + "{width:" + f.sliderSize + "px;height:" + a.pub.sliderInnerSpace + "px}";
          e.asld.className = p + "pa";
          w += "." + q(p + "pa") + "{overflow:hidden;width:" + f.sliderSize + "px;height:" + f.height + "px}";
          e.asldGrad.draw(f.sliderSize, f.height, "#000");
          e.asldB.id = p + "pab";
          w +=
            "#" +
            q(p + "pab") +
            "{display:" +
            (v ? "block" : "none") +
            ";position:absolute;left:" +
            L +
            "px;top:" +
            f.padding +
            "px;border:" +
            f.controlBorderWidth +
            "px solid " +
            f.controlBorderColor +
            "!important}";
          e.asldM.id = p + "pam";
          w +=
            "#" +
            q(p + "pam") +
            "{display:" +
            (v ? "block" : "none") +
            ";position:absolute;left:" +
            L +
            "px;top:0px;width:" +
            parseInt(f.sliderSize + 2 * F + 2 * f.controlBorderWidth) +
            "px;height:" +
            parseInt(2 * f.controlBorderWidth + 2 * f.padding + f.height) +
            "px;cursor:default}";
          a.setData(e.asldM, { instance: f, control: "asld" });
          e.asldPtrIB.className = p + "papi";
          w += "." + q(p + "papi") + "{border:" + f.pointerBorderWidth + "px solid " + f.pointerBorderColor + "!important}";
          e.asldPtrOB.className = p + "papo";
          w +=
            "." +
            q(p + "papo") +
            "{border:" +
            f.pointerBorderWidth +
            "px solid " +
            f.pointerBorderColor +
            "!important;position:absolute;top:var(--at,0);left:" +
            -(2 * f.pointerBorderWidth + f.pointerThickness) +
            "px}";
          e.asldPtrMB.className = p + "papm";
          w += "." + q(p + "papm") + "{border:" + f.pointerThickness + "px solid " + f.pointerColor + "!important}";
          e.asldPtrS.className = p + "paps";
          w += "." + q(p + "paps") + "{width:" + f.sliderSize + "px;height:" + a.pub.sliderInnerSpace + "px}";
          l = "T" + new Date().setHours(20, 30, 40, 50).toString(32);
          A(E, w, l);
          m();
          u();
          t();
          a.picker.owner && a.picker.owner !== f && a.removeClass(a.picker.owner.targetElement, a.pub.activeClassName);
          a.picker.owner = f;
          f.container === h.document.documentElement ? a.redrawPosition() : a._drawPosition(f, 0, 0, "relative", !1);
          e.wrap.parentNode !== f.container &&
            (w = a.node("dialog[id^='fr-dialog-']")) &&
            (w.appendChild(e.wrap), w.hasAttribute("open") && w.close && w.close(), (w.inert = !0), w.showModal && w.showModal(), w.removeAttribute("inert"), w.focus());
          a.addClass(f.targetElement, a.pub.activeClassName);
        }
        function m() {
          var e = a.getPadYChannel(f);
          e = Math.round((1 - f.channels[e] / 100) * (f.height - 1));
          var l = -Math.floor((2 * f.pointerBorderWidth + f.pointerThickness + 2 * f.crossSize) / 2);
          a.picker.cross.style.cssText = "--cl:" + parseInt(Math.round((f.channels.h / 360) * (f.width - 1)) + l) + "px;--ct:" + parseInt(e + l) + "px";
          switch (a.getSliderChannel(f)) {
            case "s":
              e = a.HSV_RGB(f.channels.h, 100, f.channels.v);
              l = a.HSV_RGB(f.channels.h, 0, f.channels.v);
              a.picker.sldGrad.draw(
                f.sliderSize,
                f.height,
                "rgb(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + ")",
                "rgb(" + Math.round(l[0]) + "," + Math.round(l[1]) + "," + Math.round(l[2]) + ")"
              );
              break;
            case "v":
              (e = a.HSV_RGB(f.channels.h, f.channels.s, 100)),
                a.picker.sldGrad.draw(f.sliderSize, f.height, "rgb(" + Math.round(e[0]) + "," + Math.round(e[1]) + "," + Math.round(e[2]) + ")", "#000");
          }
          a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function u() {
          var e = a.getSliderChannel(f);
          e &&
            (a.picker.sldPtrOB.style.cssText =
              "--st:" + parseInt(Math.round((1 - f.channels[e] / 100) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2)) + "px");
          a.picker.asldGrad.draw(f.sliderSize, f.height, f.toHEXString());
        }
        function t() {
          a.picker.asldPtrOB.style.cssText =
            "--at:" + parseInt(Math.round((1 - f.channels.a) * (f.height - 1)) - (2 * f.pointerBorderWidth + f.pointerThickness) - Math.floor(a.pub.sliderInnerSpace / 2)) + "px";
        }
        function C() {
          return a.picker && a.picker.owner === f;
        }
        var y = this,
          f = this;
        d || (d = {});
        z = d.signal;
        this.configShadow = I = c;
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
              if (e in f) var l = f[e];
              else throw Error("Unrecognized configuration option: " + e);
              return l;
            } catch (x) {
              return !1;
            }
          else {
            if (2 <= arguments.length && "string" === typeof arguments[0]) {
              try {
                if (!g(arguments[0], arguments[1])) return !1;
              } catch (x) {
                return !1;
              }
              this.redraw();
              this.exposeColor();
              return !0;
            }
            if (1 === arguments.length && "object" === typeof arguments[0]) {
              l = arguments[0];
              e = !0;
              for (var v in l)
                if (n.call(l, v) && "signal" !== v)
                  try {
                    g(v, l[v]) || (e = !1);
                  } catch (x) {
                    e = !1;
                  }
              this.redraw();
              this.exposeColor();
              return e;
            }
          }
          throw Error("Invalid arguments");
        };
        this.channel = function (e, l) {
          if ("string" !== typeof e) throw Error("Invalid value for channel name: " + e);
          if ("undefined" === typeof l) return n.call(this.channels, e.toLowerCase()) ? this.channels[e.toLowerCase()] : !1;
          switch (e.toLowerCase()) {
            case "r":
              e = this.fromRGBA(l, null, null, null);
              break;
            case "g":
              e = this.fromRGBA(null, l, null, null);
              break;
            case "b":
              e = this.fromRGBA(null, null, l, null);
              break;
            case "h":
              e = this.fromHSVA(l, null, null, null);
              break;
            case "s":
              e = this.fromHSVA(null, l, null, null);
              break;
            case "v":
              e = this.fromHSVA(null, null, l, null);
              break;
            case "a":
              e = this.fromHSVA(null, null, null, l);
              break;
            default:
              return !1;
          }
          return e ? (this.redraw(), !0) : !1;
        };
        this.trigger = function (e) {
          e = a.strList(e);
          for (var l = 0; l < e.length; l += 1) {
            var v = e[l].toLowerCase(),
              x = null;
            switch (v) {
              case "input":
                x = "onInput";
                break;
              case "change":
                x = "onChange";
            }
            x && a.triggerCallback(this, x);
            a.triggerInputEvent(this.valueElement, v, !0, !0);
          }
        };
        this.fromHSVA = function (e, l, v, x, D) {
          "undefined" === typeof e && (e = null);
          "undefined" === typeof l && (l = null);
          "undefined" === typeof v && (v = null);
          "undefined" === typeof x && (x = null);
          if (null !== e) {
            if (isNaN(e)) return !1;
            this.channels.h = Math.max(0, Math.min(360, e));
          }
          if (null !== l) {
            if (isNaN(l)) return !1;
            this.channels.s = Math.max(0, Math.min(100, this.maxS, l), this.minS);
          }
          if (null !== v) {
            if (isNaN(v)) return !1;
            this.channels.v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
          }
          if (null !== x) {
            if (isNaN(x)) return !1;
            this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, x), this.minA) : 1;
          }
          e = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = e[0];
          this.channels.g = e[1];
          this.channels.b = e[2];
          this.exposeColor(D);
          return !0;
        };
        this.fromRGBA = function (e, l, v, x, D) {
          "undefined" === typeof e && (e = null);
          "undefined" === typeof l && (l = null);
          "undefined" === typeof v && (v = null);
          "undefined" === typeof x && (x = null);
          if (null !== e) {
            if (isNaN(e)) return !1;
            e = Math.max(0, Math.min(255, e));
          }
          if (null !== l) {
            if (isNaN(l)) return !1;
            l = Math.max(0, Math.min(255, l));
          }
          if (null !== v) {
            if (isNaN(v)) return !1;
            v = Math.max(0, Math.min(255, v));
          }
          if (null !== x) {
            if (isNaN(x)) return !1;
            this.channels.a = this.hasAlphaChannel() ? Math.max(0, Math.min(1, this.maxA, x), this.minA) : 1;
          }
          e = a.RGB_HSV(null === e ? this.channels.r : e, null === l ? this.channels.g : l, null === v ? this.channels.b : v);
          null !== e[0] && (this.channels.h = Math.max(0, Math.min(360, e[0])));
          0 !== e[2] && (this.channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, e[1])));
          this.channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, e[2]));
          e = a.HSV_RGB(this.channels.h, this.channels.s, this.channels.v);
          this.channels.r = e[0];
          this.channels.g = e[1];
          this.channels.b = e[2];
          this.exposeColor(D);
          return !0;
        };
        this.fromHSV = function (e, l, v, x) {
          return this.fromHSVA(e, l, v, null, x);
        };
        this.fromRGB = function (e, l, v, x) {
          return this.fromRGBA(e, l, v, null, x);
        };
        this.fromString = function (e, l) {
          if (!this.required && "" === e.trim()) return this.setPreviewElementBg(null), this.setValueElementValue(""), !0;
          e = a.parseColorString(e);
          if (!e) return !1;
          "any" === this.format.toLowerCase() && (this._setFormat(e.format), a.isAlphaFormat(this.getFormat()) || (e.rgba[3] = 1));
          this.fromRGBA(e.rgba[0], e.rgba[1], e.rgba[2], e.rgba[3], l);
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
        this.show = function () {
          k();
          this.scrollbar &&
            this.scrollbar.addEventListener("scroll", a.onWindowScroll, {
              capture: !1,
              signal: z,
            });
          h.addEventListener("resize", a.onWindowResize, {
            capture: !1,
            signal: z,
          });
          h.addEventListener("scroll", a.onWindowScroll, {
            capture: !1,
            signal: z,
          });
          E &&
            E.addEventListener("mousedown", a.onDocumentMouseDown, {
              capture: !1,
              signal: z,
            });
        };
        this.hide = function () {
          C() &&
            (a.removeClass(f.targetElement, a.pub.activeClassName),
            a.picker.wrap && a.picker.wrap.parentNode && a.picker.wrap.parentNode.removeChild(a.picker.wrap),
            a.picker && (a.setData(a.picker.padM, "instance", null), a.setData(a.picker.sldM, "instance", null), a.setData(a.picker.asldM, "instance", null)),
            delete a.picker.owner);
        };
        this.redraw = function () {
          C() && k();
        };
        this.getFormat = function () {
          return this._currentFormat;
        };
        this._setFormat = function (e) {
          this._currentFormat = e.toLowerCase();
        };
        this.hasAlphaChannel = function () {
          return "auto" === this.alphaChannel ? "any" === this.format.toLowerCase() || a.isAlphaFormat(this.getFormat()) || "undefined" !== typeof this.alpha : this.alphaChannel;
        };
        this.processValueInput = function (e) {
          this.fromString(e) || this.exposeColor();
        };
        this.exposeColor = function (e) {
          var l = this.toString(),
            v = this.getFormat();
          a.setDataAttr(this.targetElement, "current-color", l);
          if (!(e & a.flags.leaveValue) && this.valueElement) {
            if ("hex" === v || "hexa" === v) this.uppercase || (l = l.toLowerCase()), this.hash || (l = l.replace(/^#/, ""));
            this.setValueElementValue(l);
          }
          e & a.flags.leavePreview || !this.previewElement || this.setPreviewElementBg(this.toRGBAString());
          C() && (m(), u(), t());
        };
        this.setPreviewElementBg = function (e) {
          if (this.previewElement) {
            var l = null,
              v = null;
            a.isTextInput(this.previewElement) && ((l = this.previewPosition), (v = this.previewSize));
            var x = [];
            x.push({ size: "auto" });
            if (e) {
              var D = a.genColorPreviewCanvas("rgba(0,0,0,0)", l ? { left: "right", right: "left" }[l] : null, v, !0);
              x.push({ size: D.width + "px " + D.height + "px" });
            }
            D = [];
            for (var F = 0; F < x.length; F += 1) D.push(x[F].size);
            e = {
              "--fr-input-color": e,
              "--fr-input-color-edge": v + "px",
              "--fr-input-color-edge2": v + 1 + "px",
              "--fr-input-gb-size": D.join(", "),
            };
            a.setStyle(this.previewElement, e, !this.forceStyle);
            e = { left: null, right: null };
            l && (e[l] = this.previewSize + this.previewPadding + "px");
            a.setStyle(this.previewElement, { "--fr-input-padding-left": e.left }, !this.forceStyle, !0);
          }
        };
        this.setValueElementValue = function (e) {
          this.valueElement && ("input" === a.nodeName(this.valueElement) ? (this.valueElement.value = e) : (this.valueElement.textContent = e));
        };
        this._processParentElementsInDOM = function () {
          if (!this._parentElementsProcessed) {
            this._parentElementsProcessed = !0;
            var e = this.targetElement;
            do {
              var l = a.getCompStyle(e);
              if ((l.position && "fixed" === l.position.toLowerCase()) || e instanceof ShadowRoot) this.fixed = !0;
            } while ((e = e.parentNode) && "body" !== a.nodeName(e));
          }
        };
        this.tryHide = function () {
          this.hideOnLeave && this.hide();
        };
        this._onValueChange = function (e) {
          a.getData(e, "internal") ||
            ((e = f.valueElement.value),
            f.processValueInput(f.valueElement.value),
            a.triggerCallback(f, "onChange"),
            f.valueElement.value !== e && a.triggerInputEvent(f.valueElement, "change", !0, !0));
        };
        this._onValueInput = function (e) {
          a.getData(e, "internal") || (f.valueElement && f.fromString(f.valueElement.value, a.flags.leaveValue), a.triggerCallback(f, "onInput"));
        };
        this.destroy = function () {
          this.hide();
          this.scrollbar &&
            this.scrollbar.removeEventListener("scroll", a.onWindowScroll, {
              capture: !1,
              signal: z,
            });
          h.removeEventListener("resize", a.onWindowResize, {
            capture: !1,
            signal: z,
          });
          h.removeEventListener("scroll", a.onWindowScroll, {
            capture: !1,
            signal: z,
          });
          E &&
            E.removeEventListener("mousedown", a.onDocumentMouseDown, {
              capture: !1,
              signal: z,
            });
          this.configShadow && this.configShadow.removeEventListener("click", a.onConfigIfMouseDown, { capture: !1, signal: z });
          this.valueElement &&
            (this.valueElement.removeEventListener("change", this._onValueChange, { capture: !1, signal: z }),
            this.valueElement.removeEventListener("input", this._onValueInput, {
              capture: !1,
              signal: z,
            }),
            this._origOnInput && this.valueElement.removeEventListener("input", this._origOnInput, { capture: !1, signal: z }));
          this.targetElement && J.delete(this.targetElement);
          this._origOnInput =
            this._onValueInput =
            this._onValueChange =
            this.targetElement =
            this.container =
            this.previewElement =
            this.valueElement =
            z =
            b =
            c =
            this.configShadow =
            I =
            this.scrollbar =
              null;
        };
        if (a.pub.options)
          for (var G in a.pub.options)
            if (n.call(a.pub.options, G))
              try {
                g(G, a.pub.options[G]);
              } catch (e) {
                console.error(e);
              }
        for (var H in d)
          if (n.call(d, H) && "signal" !== H)
            try {
              g(H, d[H]);
            } catch (e) {
              console.error(e);
            }
        this.configShadow &&
          !K.has(this.configShadow) &&
          (this.configShadow.addEventListener("click", a.onConfigIfMouseDown, {
            capture: !1,
            signal: z,
          }),
          K.add(this.configShadow));
        this.container = "undefined" === typeof this.container ? h.document.documentElement : a.node(this.container);
        if (!this.container) throw Error("No container element");
        this.targetElement = a.node(b);
        if (!this.targetElement) throw Error("No target element");
        J.set(this.targetElement, this);
        a.addClass(this.targetElement, a.pub.className);
        "undefined" === typeof this.valueElement
          ? a.isTextInput(this.targetElement) && (this.valueElement = this.targetElement)
          : null !== this.valueElement && (this.valueElement = a.node(this.valueElement));
        "undefined" === typeof this.previewElement ? (this.previewElement = this.targetElement) : null !== this.previewElement && (this.previewElement = a.node(this.previewElement));
        this.valueElement &&
          a.isTextInput(this.valueElement) &&
          ((d = this.valueElement.oninput),
          (this.valueElement.oninput = null),
          this.valueElement.addEventListener("change", this._onValueChange, {
            capture: !1,
            signal: z,
          }),
          this.valueElement.addEventListener("input", this._onValueInput, {
            capture: !1,
            signal: z,
          }),
          d &&
            ((this._origOnInput = d),
            this.valueElement.addEventListener("input", this._origOnInput, {
              capture: !1,
              signal: z,
            })),
          this.valueElement.setAttribute("autocomplete", "off"),
          this.valueElement.setAttribute("autocorrect", "off"),
          this.valueElement.setAttribute("autocapitalize", "off"),
          this.valueElement.setAttribute("spellcheck", !1));
        d = "FFFFFF";
        "undefined" !== typeof this.value ? (d = this.value) : this.valueElement && "undefined" !== typeof this.valueElement.value && (d = this.valueElement.value);
        this._currentFormat = null;
        -1 < ["auto", "any"].indexOf(this.format.toLowerCase()) ? (this._currentFormat = (G = a.parseColorString(d)) ? G.format : "hex") : (this._currentFormat = this.format.toLowerCase());
        this.processValueInput(d);
        z &&
          z instanceof AbortSignal &&
          (z.aborted
            ? setTimeout(function () {
                return y.destroy();
              }, 0)
            : z.addEventListener(
                "abort",
                function () {
                  return y.destroy();
                },
                { once: !0 }
              ));
      },
    };
  a.pub.className = p + "cpp";
  a.pub.activeClassName = p + "cpp";
  a.pub.looseJSON = !0;
  a.pub.sliderInnerSpace = 3;
  a.pub.chessboardSize = 8;
  a.pub.chessboardColor1 = "#666666";
  a.pub.chessboardColor2 = "#999999";
  a.pub.hide = function () {
    a.picker && a.picker.owner && a.picker.owner.hide();
  };
  a.pub.options = {};
  B = Symbol.for("FRColorPicker");
  h[B] || (h[B] = a.pub);
})(
  "undefined" !== typeof window ? window : globalThis,
  Object.prototype.hasOwnProperty,
  Element.prototype.attachShadow,
  function (h, n, r) {
    try {
      if (!h.adoptedStyleSheets || "function" !== typeof h.adoptedStyleSheets.push) throw Error("use inlineStyle");
      var A = (function (B, E, z) {
        B = ":host(sheet-metadata){--sheet-metadata:" + JSON.stringify({ id: B }) + "}";
        return (z = new CSSStyleSheet()), z.media.appendMedium("all"), z.replaceSync(E), z.insertRule(B, 0), z;
      })(r, n, null);
      !Array.from(h.adoptedStyleSheets).some(function (B) {
        B = (B = B.cssRules[0]) && ":host(sheet-metadata)" === B.selectorText ? ((B = B.style.getPropertyValue("--sheet-metadata")) ? JSON.parse(B.trim()) : {}) : {};
        return B.id === r;
      }) && h.adoptedStyleSheets.push(A);
    } catch (B) {
      try {
        if (!h.querySelector("style#" + r)) {
          var q = document.createElement("style");
          Object.assign(q, {
            id: r,
            media: "all",
            type: "text/css",
            textContent: n,
          });
          h.prepend(q);
        }
      } catch (E) {
        console.error(E.name + "in AdoptedStyle: " + E.message + "(" + B.message + ")");
      }
    }
  },
  function (h) {
    return h.replace(".", "\\.");
  },
  function (h) {
    var n = Array.from(crypto.getRandomValues(new Uint8Array(h)), function (r) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[r % 52];
    }).join("");
    if (3 >= h) return n;
    h = (crypto.getRandomValues(new Uint8Array(1))[0] % (h - 3)) + 2;
    return n.slice(0, h) + "." + n.slice(h);
  }
);
