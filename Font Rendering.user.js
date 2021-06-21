/* jshint esversion: 8 */
// ==UserScript==
// @name            字体渲染（自用脚本）
// @namespace       https://openuserjs.org/users/t3xtf0rm4tgmail.com
// @version         2021.06.21.3
// @icon            https://img.icons8.com/ios-filled/50/26e07f/font-style-formatting.png
// @description     让每个页面的字体变得有质感，默认使用苹方字体，附加字体描边、字体阴影、字体平滑等效果，自用脚本不处理外部需求。
// @supportURL      https://github.com/F9y4ng/GreasyFork-Scripts/issues
// @author          F9y4ng
// @include         *
// @grant           GM_info
// @grant           GM_registerMenuCommand
// @grant           GM.registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_getValue
// @grant           GM.getValue
// @grant           GM_setValue
// @grant           GM.setValue
// @compatible      Chrome 兼容TamperMonkey, ViolentMonkey
// @compatible      Firefox 兼容Greasemonkey, TamperMonkey, ViolentMonkey
// @compatible      Opera 兼容TamperMonkey, ViolentMonkey
// @compatible      Safari 兼容Tampermonkey • Safari
// @license         GPL-3.0-only
// @create          2020-11-24
// @copyright       2020-2021, F9y4ng
// @run-at          document-start
// ==/UserScript==

!(function () {
  "use strict";

  /* customize */

  const isdebug = false; // set "true" to debug scripts, May cause script response slower.
  const refreshTime = 1000; // Define data synchronous refresh time, unit is millisecond.

  /* Perfectly Compatible For Greasemonkey4.0+, TamperMonkey, ViolentMonkey * F9y4ng * 20210609 */

  let GMsetValue, GMgetValue, GMregisterMenuCommand, GMunregisterMenuCommand;
  const GMinfo = GM_info;
  const handlerInfo = GMinfo.scriptHandler;
  const isGM = Boolean(handlerInfo.toLowerCase() === "greasemonkey");
  const debug = isdebug ? console.log.bind(console) : () => {};
  const error = isdebug ? console.error.bind(console) : () => {};
  const defCon = {
    scriptName: GMinfo.script.name,
    supportURL: GMinfo.script.supportURL,
    randString: (n, v, r, s = "") => {
      // v: true for only letters.
      let a = "0123456789";
      let b = "abcdefghijklmnopqrstuvwxyz";
      let c = b.toUpperCase();
      n = Number.isFinite(n) ? n : 10;
      v ? (r = b + c) : (r = a + b + a + c);
      for (; n > 0; --n) {
        s += r[Math.floor(Math.random() * r.length)];
      }
      return s;
    },
  };
  defCon.rndClass = defCon.randString(10, true);
  defCon.rndId = defCon.randString(12, true);

  if (isGM) {
    GMsetValue = GM.setValue;
    GMgetValue = GM.getValue;
    GMregisterMenuCommand = GM.registerMenuCommand;
    GMunregisterMenuCommand = () => {};
  } else {
    GMsetValue = GM_setValue;
    GMgetValue = GM_getValue;
    GMregisterMenuCommand = GM_registerMenuCommand;
    GMunregisterMenuCommand = GM_unregisterMenuCommand;
  }

  /* Color Picker init */

  ~(function (window, document) {
    let type = window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    let picker;
    let slide;
    let hueOffset = 15;
    let svgNS = "http://www.w3.org/2000/svg";

    let colorpickerHTMLSnippet = [
      '<div class="picker-wrapper">',
      '<div class="picker"></div>',
      '<div class="picker-indicator"></div>',
      "</div>",
      '<div class="slide-wrapper">',
      '<div class="slide"></div>',
      '<div class="slide-indicator"></div>',
      "</div>",
    ].join("");

    function mousePosition(evt) {
      if (window.event && window.event.contentOverflow !== undefined) {
        return { x: window.event.offsetX, y: window.event.offsetY };
      }
      if (evt.offsetX !== undefined && evt.offsetY !== undefined) {
        return { x: evt.offsetX, y: evt.offsetY };
      }
      let wrapper = evt.target.parentNode.parentNode;
      return { x: evt.layerX - wrapper.offsetLeft, y: evt.layerY - wrapper.offsetTop };
    }

    function $(el, attrs, children) {
      el = document.createElementNS(svgNS, el);
      for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
      if (Object.prototype.toString.call(children) !== "[object Array]") {
        children = [children];
      }
      let i = 0;
      let len = (children[0] && children.length) || 0;
      for (; i < len; i++) {
        el.appendChild(children[i]);
      }
      return el;
    }

    if (type === "SVG") {
      slide = $("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "100%", height: "100%" }, [
        $(
          "defs",
          {},
          $(
            "linearGradient",
            {
              id: "gradient-hsv",
              x1: "0%",
              y1: "100%",
              x2: "0%",
              y2: "0%",
            },
            [
              $("stop", { offset: "0%", "stop-color": "#FF0000", "stop-opacity": "1" }),
              $("stop", { offset: "13%", "stop-color": "#FF00FF", "stop-opacity": "1" }),
              $("stop", { offset: "25%", "stop-color": "#8000FF", "stop-opacity": "1" }),
              $("stop", { offset: "38%", "stop-color": "#0040FF", "stop-opacity": "1" }),
              $("stop", { offset: "50%", "stop-color": "#00FFFF", "stop-opacity": "1" }),
              $("stop", { offset: "63%", "stop-color": "#00FF40", "stop-opacity": "1" }),
              $("stop", { offset: "75%", "stop-color": "#0BED00", "stop-opacity": "1" }),
              $("stop", { offset: "88%", "stop-color": "#FFFF00", "stop-opacity": "1" }),
              $("stop", { offset: "100%", "stop-color": "#FF0000", "stop-opacity": "1" }),
            ]
          )
        ),
        $("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: "url(#gradient-hsv)",
        }),
      ]);

      picker = $("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: "100%", height: "100%" }, [
        $("defs", {}, [
          $(
            "linearGradient",
            {
              id: "gradient-black",
              x1: "0%",
              y1: "100%",
              x2: "0%",
              y2: "0%",
            },
            [
              $("stop", { offset: "0%", "stop-color": "#000000", "stop-opacity": "1" }),
              $("stop", { offset: "100%", "stop-color": "#CC9A81", "stop-opacity": "0" }),
            ]
          ),
          $(
            "linearGradient",
            {
              id: "gradient-white",
              x1: "0%",
              y1: "100%",
              x2: "100%",
              y2: "100%",
            },
            [
              $("stop", { offset: "0%", "stop-color": "#FFFFFF", "stop-opacity": "1" }),
              $("stop", { offset: "100%", "stop-color": "#CC9A81", "stop-opacity": "0" }),
            ]
          ),
        ]),
        $("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: "url(#gradient-white)",
        }),
        $("rect", {
          x: "0",
          y: "0",
          width: "100%",
          height: "100%",
          fill: "url(#gradient-black)",
        }),
      ]);
    } else if (type === "VML") {
      slide = [
        '<DIV style="position: relative; width: 100%; height: 100%">',
        '<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">',
        '<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',
        "</v:rect>",
        "</DIV>",
      ].join("");

      picker = [
        '<DIV style="position: relative; width: 100%; height: 100%">',
        '<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">',
        '<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
        "</v:rect>",
        '<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">',
        '<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
        "</v:rect>",
        "</DIV>",
      ].join("");

      if (!document.namespaces.v) {
        document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
      }
    }

    function hsv2rgb(hsv) {
      let R, G, B, X, C;
      let h = (hsv.h % 360) / 60;

      C = hsv.v * hsv.s;
      X = C * (1 - Math.abs((h % 2) - 1));
      R = G = B = hsv.v - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];

      let r = Math.floor(R * 255);
      let g = Math.floor(G * 255);
      let b = Math.floor(B * 255);
      return { r: r, g: g, b: b, hex: "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1) };
    }

    function rgb2hsv(rgb) {
      let r = rgb.r;
      let g = rgb.g;
      let b = rgb.b;

      if (rgb.r > 1 || rgb.g > 1 || rgb.b > 1) {
        r /= 255;
        g /= 255;
        b /= 255;
      }

      let H, S, V, C;
      V = Math.max(r, g, b);
      C = V - Math.min(r, g, b);
      H = C === 0 ? null : V === r ? (g - b) / C + (g < b ? 6 : 0) : V === g ? (b - r) / C + 2 : (r - g) / C + 4;
      H = (H % 6) * 60;
      S = C === 0 ? 0 : C / V;
      return { h: H, s: S, v: V };
    }

    function slideListener(ctx, slideElement, pickerElement) {
      return function (evt) {
        evt = evt || window.event;
        evt.stopPropagation();
        let mouse = mousePosition(evt);
        ctx.h = (mouse.y / slideElement.offsetHeight) * 360 + hueOffset;
        ctx.s = ctx.v = 1;
        let c = hsv2rgb({ h: ctx.h, s: 1, v: 1 });
        pickerElement.style.backgroundColor = c.hex;
        ctx.callback && ctx.callback(c.hex, { h: ctx.h - hueOffset, s: ctx.s, v: ctx.v }, { r: c.r, g: c.g, b: c.b }, undefined, mouse);
      };
    }

    function pickerListener(ctx, pickerElement) {
      return function (evt) {
        evt = evt || window.event;
        let mouse = mousePosition(evt);
        let width = pickerElement.offsetWidth;
        let height = pickerElement.offsetHeight;

        ctx.s = mouse.x / width;
        ctx.v = (height - mouse.y) / height;
        let c = hsv2rgb(ctx);
        ctx.callback && ctx.callback(c.hex, { h: ctx.h - hueOffset, s: ctx.s, v: ctx.v }, { r: c.r, g: c.g, b: c.b }, mouse);
      };
    }

    let uniqID = 0;

    class ColorPicker {
      constructor(slideElement, pickerElement, callback) {
        // new ColorPicker(slideElement, pickerElement, callback)
        this.h = 0;
        this.s = 1;
        this.v = 1;

        if (!callback) {
          let element = slideElement;
          element.innerHTML = colorpickerHTMLSnippet;

          this.slideElement = element.getElementsByClassName("slide")[0];
          this.pickerElement = element.getElementsByClassName("picker")[0];
          let slideIndicator = element.getElementsByClassName("slide-indicator")[0];
          let pickerIndicator = element.getElementsByClassName("picker-indicator")[0];

          ColorPicker.fixIndicators(slideIndicator, pickerIndicator);

          this.callback = function (hex, hsv, rgb, pickerCoordinate, slideCoordinate) {
            ColorPicker.positionIndicators(slideIndicator, pickerIndicator, slideCoordinate, pickerCoordinate);

            pickerElement(hex, hsv, rgb);
          };
        } else {
          this.callback = callback;
          this.pickerElement = pickerElement;
          this.slideElement = slideElement;
        }

        if (type === "SVG") {
          let hsvGradient = slide.getElementsByTagName("linearGradient")[0];
          let hsvRect = slide.getElementsByTagName("rect")[0];

          hsvGradient.id = "gradient-hsv-" + uniqID;
          hsvRect.setAttribute("fill", "url(#" + hsvGradient.id + ")");

          let blackAndWhiteGradients = picker.getElementsByTagName("linearGradient");
          let whiteAndBlackRects = picker.getElementsByTagName("rect");

          blackAndWhiteGradients[0].id = "gradient-black-" + uniqID;
          blackAndWhiteGradients[1].id = "gradient-white-" + uniqID;

          whiteAndBlackRects[0].setAttribute("fill", "url(#" + blackAndWhiteGradients[1].id + ")");
          whiteAndBlackRects[1].setAttribute("fill", "url(#" + blackAndWhiteGradients[0].id + ")");

          this.slideElement.appendChild(slide.cloneNode(true));
          this.pickerElement.appendChild(picker.cloneNode(true));

          uniqID++;
        } else {
          this.slideElement.innerHTML = slide;
          this.pickerElement.innerHTML = picker;
        }

        addEventListener(this.slideElement, "click", slideListener(this, this.slideElement, this.pickerElement));
        addEventListener(this.pickerElement, "click", pickerListener(this, this.pickerElement));

        enableDragging(this, this.slideElement, slideListener(this, this.slideElement, this.pickerElement));
        enableDragging(this, this.pickerElement, pickerListener(this, this.pickerElement));
      }
      setHsv(hsv) {
        return setColor(this, hsv);
      }
      setRgb(rgb) {
        return setColor(this, rgb2hsv(rgb), rgb);
      }
      setHex(hex) {
        return setColor(this, ColorPicker.hex2hsv(hex), undefined, hex);
      }
      static hsv2rgb(hsv) {
        let rgbHex = hsv2rgb(hsv);
        delete rgbHex.hex;
        return rgbHex;
      }
      static hsv2hex(hsv) {
        return hsv2rgb(hsv).hex;
      }
      static rgb2hex(rgb) {
        return hsv2rgb(rgb2hsv(rgb)).hex;
      }
      static hex2hsv(hex) {
        return rgb2hsv(ColorPicker.hex2rgb(hex));
      }
      static hex2rgb(hex) {
        return { r: parseInt(hex.substr(1, 2), 16), g: parseInt(hex.substr(3, 2), 16), b: parseInt(hex.substr(5, 2), 16) };
      }
      static positionIndicators(slideIndicator, pickerIndicator, mouseSlide, mousePicker) {
        if (mouseSlide) {
          pickerIndicator.style.left = "auto";
          pickerIndicator.style.right = "0px";
          pickerIndicator.style.top = "0px";
          slideIndicator.style.top = mouseSlide.y - slideIndicator.offsetHeight / 2 + "px";
        }
        if (mousePicker) {
          pickerIndicator.style.top = mousePicker.y - pickerIndicator.offsetHeight / 2 + "px";
          pickerIndicator.style.left = mousePicker.x - pickerIndicator.offsetWidth / 2 + "px";
        }
      }
      static fixIndicators(slideIndicator, pickerIndicator) {
        pickerIndicator.style.pointerEvents = "none";
        slideIndicator.style.pointerEvents = "none";
      }
    }

    function addEventListener(element, event, listener) {
      if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
      } else if (element.addEventListener) {
        element.addEventListener(event, listener, false);
      }
    }

    function enableDragging(ctx, element, listener) {
      let mousedown = false;
      addEventListener(element, "mousedown", function (evt) {
        mousedown = true;
      });
      addEventListener(element, "mouseup", function (evt) {
        mousedown = false;
      });
      addEventListener(element, "mouseout", function (evt) {
        mousedown = false;
      });
      addEventListener(element, "mousemove", function (evt) {
        if (mousedown) {
          listener(evt);
        }
      });
    }

    ColorPicker.rgb2hsv = rgb2hsv;
    function setColor(ctx, hsv, rgb, hex) {
      ctx.h = hsv.h % 360;
      ctx.s = hsv.s;
      ctx.v = hsv.v;
      let c = hsv2rgb(ctx);
      let mouseSlide = {
        y: (ctx.h * ctx.slideElement.offsetHeight) / 360,
        x: 0,
      };

      let pickerHeight = ctx.pickerElement.offsetHeight;
      let mousePicker = {
        x: ctx.s * ctx.pickerElement.offsetWidth,
        y: pickerHeight - ctx.v * pickerHeight,
      };
      ctx.pickerElement.style.backgroundColor = hsv2rgb({ h: ctx.h, s: 1, v: 1 }).hex;
      ctx.callback && ctx.callback(hex || c.hex, { h: ctx.h, s: ctx.s, v: ctx.v }, rgb || { r: c.r, g: c.g, b: c.b }, mousePicker, mouseSlide);
      return ctx;
    }
    window.ColorPicker = ColorPicker;
  })(window, window.document);

  /* new DialogBox */

  class DialogBox {
    constructor({
      titleText = "Error",
      messageText = "Something unexpected has gone wrong. If the problem persists, contact your administrator",
      trueButtonText = "OK",
      falseButtonText = null,
      neutralButtonText = null,
    } = {}) {
      this.titleText = titleText;
      this.messageText = messageText;
      this.trueButtonText = trueButtonText;
      this.falseButtonText = falseButtonText;
      this.neutralButtonText = neutralButtonText;

      this.hasFalse = falseButtonText !== null;
      this.hasNeutral = neutralButtonText !== null;

      this.dialog = undefined;
      this.trueButton = undefined;
      this.falseButton = undefined;
      this.neutralButton = undefined;

      this.parent = document.body;

      this._createDialog(this);
      this._appendDialog();
    }

    _createDialog(context) {
      this.dialog = document.createElement("div");
      this.dialog.classList.add("dialog-box");

      this.dialog.style.opacity = 0;

      const title = document.createElement("div");
      title.textContent = this.titleText;
      title.classList.add("dialog-box-title");
      this.dialog.appendChild(title);

      const question = document.createElement("div");
      question.innerHTML = this.messageText;
      question.classList.add("dialog-box-message");
      this.dialog.appendChild(question);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("dialog-box-button-container");
      this.dialog.appendChild(buttonContainer);

      this.trueButton = document.createElement("a");
      this.trueButton.classList.add("dialog-box-button", "dialog-box-button--true");
      this.trueButton.textContent = this.trueButtonText;
      this.trueButton.addEventListener("click", function () {
        context._destroy();
      });
      buttonContainer.appendChild(this.trueButton);

      if (this.hasFalse) {
        this.falseButton = document.createElement("a");
        this.falseButton.classList.add("dialog-box-button", "dialog-box-button--false");
        this.falseButton.textContent = this.falseButtonText;
        this.falseButton.addEventListener("click", function () {
          context._destroy();
        });
        buttonContainer.appendChild(this.falseButton);
      }

      if (this.hasNeutral) {
        this.neutralButton = document.createElement("a");
        this.neutralButton.classList.add("dialog-box-button", "dialog-box-button--neutral");
        this.neutralButton.textContent = this.neutralButtonText;
        this.neutralButton.addEventListener("click", function () {
          context._destroy();
        });
        buttonContainer.appendChild(this.neutralButton);
      }
    }

    _appendDialog() {
      const diag = this.dialog;
      if (this.dialog) {
        this.parent.appendChild(diag);
        setTimeout(function () {
          diag.style.opacity = 1;
        }, 0);
      }
    }

    _destroy() {
      if (this.dialog) {
        this.parent.removeChild(this.dialog);
        delete this;
      }
    }

    respond() {
      return new Promise((resolve, reject) => {
        const somethingWentWrongUponCreation = !this.dialog || !this.trueButton;

        if (somethingWentWrongUponCreation) {
          reject(new Error("Something went wrong upon modal creation"));
        }

        this.trueButton.addEventListener("click", () => {
          resolve(true);
        });

        if (this.hasFalse) {
          this.falseButton.addEventListener("click", () => {
            resolve(false);
          });
        }
      });
    }
  }

  /* Slider Movements init */

  let Slider = {};
  Slider.scope = {};
  Slider.createTemplateTagFirstArg = function (e) {
    return (e.raw = e);
  };
  Slider.createTemplateTagFirstArgWithRaw = function (e, f) {
    e.raw = f;
    return e;
  };

  !(function (e) {
    class f {
      constructor(a, c) {
        let b = void 0 === c ? {} : c;
        c = void 0 === b.size ? 10 : b.size;
        let d = void 0 === b.val ? 0 : b.val;
        let g = void 0 === b.precision ? 0 : b.precision;
        let h = void 0 === b.range ? 1 : b.range;
        let k = void 0 === b.getVal ? function () {} : b.getVal;
        let l = void 0 === b.drag ? !0 : b.drag;
        let m = void 0 === b.direction ? "horizontal" : b.direction;
        b = void 0 === b.tip ? !1 : b.tip;
        if (!a) {
          error("//-> \u5fc5\u987b\u6307\u5b9a\u5b9e\u4f8b\u5bf9\u8c61\u7684\u5bb9\u5668\uff01");
        }
        this.container = document.querySelector(a);
        this.size = c;
        this.val = d;
        this.precision = g;
        this.range = h;
        this.getVal = k;
        this.drag = l;
        this.direction = m;
        if (typeof b === "object") {
          this.tip = b || {
            trigger: "show",
            align: "top",
          };
        } else if ("boolean" !== typeof b) {
          error("//-> tip\u914d\u7f6e\u9519\u8bef");
        }
        this.initialize();
      }
      initialize() {
        if (
          0 > this.size ||
          0 > this.val ||
          100 < this.val ||
          0 > this.precision ||
          4 < this.precision ||
          ("horizontal" !== this.direction && "vertical" !== this.direction) ||
          !this.container ||
          ("boolean" !== typeof this.drag && "object" !== typeof this.drag)
        ) {
          return error("//-> \u53c2\u6570\u914d\u7f6e\u9519\u8bef\uff01");
        }
        this.rander();
        this.renderLine();
      }
      rander() {
        this.bgBar = document.createElement("div");
        this.bgLine = document.createElement("div");
        this.btnTip = document.createElement("div");
        let a = this.bgBar;
        let c = this.container;
        let b = this.bgLine;
        let d = this.btnTip;
        switch (this.direction) {
          case "horizontal":
            a.classList.add("ProgressBar");
            a.style.height = this.size + "px";
            a.style.width = "100%";
            a.style.borderRadius = this.size / 2 + "px";
            b.appendChild(d);
            break;
          case "vertical":
            a.classList.add("ProgressBar");
            a.style.width = this.size + "px";
            a.style.height = "100%";
            a.style.borderRadius = this.size / 2 + "px";
            d.classList.add("vertical");
            b.appendChild(d);
        }
        d.classList.add("btnl");
        d.style.width = this.size + "px";
        d.style.height = this.size + "px";
        b.classList.add("ProgressLine");
        b.style.borderRadius = this.size / 2 + "px";
        a.appendChild(b);
        c.appendChild(a);
        this.drag ? this.Dragdrop() : this.btnTip.classList.add("disable");
        (this.tip || typeof this.tip === "object") && this.openTip();
        this.onLoading();
      }
      Dragdrop() {
        let a = this;
        let c = this.bgBar;
        let b = function (d) {
          a.getPos(d);
        };
        c.addEventListener("mousedown", function (d) {
          document.addEventListener("mousemove", b);
          a.getPos(d);
        });
        document.addEventListener("mouseup", function (d) {
          document.removeEventListener("mousemove", b);
        });
        c.addEventListener("touchstart", function (d) {
          document.addEventListener("touchmove", b);
          a.getPos(d);
        });
        document.addEventListener("touchend", function (d) {
          document.removeEventListener("touchmove", b);
        });
      }
      getPos(a) {
        typeof a.touches === "undefined" && (a.preventDefault(), a.stopPropagation());
        a.touches && (a = a.touches[0]);
        this.oldVal = this.val;
        let b, c;
        switch (this.direction) {
          case "horizontal":
            a = a.clientX + this.size / 2;
            c = this.bgBar.clientWidth;
            b = this.getElementLeft(this.bgBar);
            this.val = ((a - b - this.size) / (c - this.size)) * 100;
            break;
          case "vertical":
            a = a.clientY + this.size / 2;
            c = this.bgBar.clientHeight;
            b = this.getElementTop(this.bgBar);
            this.val = 100 - ((a - b - this.size) / (c - this.size)) * 100;
        }
        this.val = Math.max(0, this.val);
        this.val = Math.min(100, this.val);
        this.renderLine();
        this.eventVal();
      }
      getElementLeft(a) {
        let c = a.offsetLeft;
        for (a = a.offsetParent; null !== a; a) {
          c += a.offsetLeft;
          a = a.offsetParent;
        }
        return c;
      }
      getElementTop(a) {
        let c = a.offsetTop;
        for (a = a.offsetParent; null !== a; a) {
          c += a.offsetTop;
          a = a.offsetParent;
        }
        return c;
      }
      renderLine() {
        switch (this.direction) {
          case "horizontal":
            this.bgLine.style.width = ((this.bgBar.clientWidth - this.size) * this.val) / 100 + this.size + "px";
            break;
          case "vertical":
            this.bgLine.style.height = ((this.bgBar.clientHeight - this.size) * this.val) / 100 + this.size + "px";
        }
      }
      eventVal() {
        this.val = Number(this.val.toFixed(this.precision));
        this.oldVal !== this.val &&
          (this.getVal && this.getVal(this), this.tip || typeof this.tip === "object") &&
          (this.tipBox.innerText = String(((this.val / 100) * this.range).toFixed(this.precision + 2)));
      }
      updateVal(a) {
        0 > a ||
          100 < a ||
          ((this.val = Number(a)), this.renderLine(), (this.val = Number(a.toFixed(this.precision))), !this.tip && "object" !== typeof this.tip) ||
          (this.tipBox.innerText = String(((this.val / 100) * this.range).toFixed(this.precision + 2)));
      }
      openTip() {
        let a = this.btnTip;
        this.tipBox = document.createElement("span");
        this.tipBox.classList.add("progressVal");
        this.tipBox.innerText = String(((this.val / 100) * this.range).toFixed(this.precision + 2));
        a.appendChild(this.tipBox);
        this.tip.trigger && this.tipConfig();
      }
      tipConfig() {
        let a = this;
        switch (this.tip.trigger) {
          case "hover":
            this.tipBox.style.opacity = 0;
            this.bgBar.addEventListener("mouseenter", function () {
              return (a.tipBox.style.opacity = 1);
            });
            this.bgBar.addEventListener("mouseleave", function () {
              return (a.tipBox.style.opacity = 0);
            });
            this.bgBar.addEventListener("touchstart", function () {
              return (a.tipBox.style.opacity = 1);
            });
            this.bgBar.addEventListener("touchend", function () {
              return (a.tipBox.style.opacity = 0);
            });
            break;
          case "show":
            this.tipBox.style.opacity = 1;
        }
        switch (this.tip.align) {
          case "bottom":
            this.tipBox.classList.add("bottom");
            break;
          case "left":
            this.tipBox.classList.add("left");
            break;
          case "right":
            this.tipBox.classList.add("right");
        }
      }
      onLoading() {
        let a = (this.btnLoading = document.createElement("span"));
        let c = this.btnTip;
        a.classList.add("loading");
        c.appendChild(a);
        a.style.width = c.offsetWidth + "px";
        a.style.height = c.offsetHeight + "px";
      }
      onLoad(a, c) {
        c = void 0 === c ? function () {} : c;
        if ("boolean" !== typeof a) {
          error("//-> onload\u914d\u7f6e\u9519\u8bef");
        }
        a && (this.btnLoading.style.display = "block");
        c(this);
      }
    }
    e.Progress = f;
  })(window);

  function checkdraw(b, a, c) {
    b.value = ((a.val / 100) * a.range).toFixed(a.precision + 2);
    b.addEventListener("blur", function () {
      this.value <= a.range
        ? ((this.value = Number(this.value.match(c)).toFixed(a.precision + 2)), a.updateVal((100 * this.value) / a.range))
        : (this.value = ((a.val / 100) * a.range).toFixed(a.precision + 2));
    });
  }

  /* Font filtering & discriminating list */

  let fontSet = function (s) {
    return {
      that: Array.prototype.slice.call(document.querySelectorAll(s), 0),
      stopPropagation: function (e) {
        e = e || window.event;
        if (e.stopPropagation) {
          e.stopPropagation();
        } else {
          e.cancelBubble = true;
        }
      },
      hide: function () {
        fontSet(s).that.forEach(function (item) {
          item.style.cssText += "display:none";
        });
      },
      show: function () {
        fontSet(s).that.forEach(function (item) {
          item.style.cssText += "display:block";
        });
      },
      fdeleteList: function (fontData) {
        let ddRemove = function (dd) {
          let temp = dd.nextElementSibling;
          dd.remove();
          if (temp !== null && temp.nodeName === "DD") {
            ddRemove(temp);
          }
        };

        let selector = (function () {
          class selector {
            constructor(ch, en) {
              this.ch = ch;
              this.en = en;
            }
          }
          return selector;
        })();

        let close = fontSet("#fontSelect .close");
        close.that.forEach(function (item) {
          ddRemove(item.parentNode);
          let value = item.parentNode.children[1].value;
          let text = item.parentNode.children[0].innerHTML;
          fontData.push(new selector(text, value));
          if (fontSet("#fontSelect .close").that.length === 0) {
            fontSet("#fontSelect .selector").that[0].parentNode.style.cssText += "display:none;";
          }
        });

        return Boolean(close.that.length);
      },
      fsearchList: function (name) {
        let arr = [];
        fontSet("input[name=" + name + "]").that.forEach(item => {
          arr.push(item.value);
        });
        return arr;
      },
      fsearch: function (name, fontData) {
        let domId = fontSet(s).that[0];
        let html = String(
          `<div id="selector"><label>已选择:</label><div class="selector"></div></div><div class="selectId"><label>设置字体，请选择：</label><input type="text" placeholder="留空则初始化为微软雅黑" autocomplete="off"><dl style="display: none;"></dl><span class="fr_tooltip ps1">\ud83d\udd14<span class="fr_tooltiptext ps2"><strong>温馨提示：</strong><p>脚本预载了多种常用的、好看的中文字体，下拉菜单中所罗列的字体是您系统中已安装过的字体，没有安装过则不会显示。</p><p>在选择字体时，尽量减少字体种类。<b style="color:darkred">（请您注意）</b>字体是按您选择的先后顺序进行优先渲染的，所以多选不如之选一个您最想要的。</p></span></span></div>`
        );
        domId.innerHTML = html;

        fontSet("#fontSelect .selector").that[0].parentNode.style.cssText += "display:none;";

        function clickEvent() {
          fontSet("#fontSelect .selectId dl dd").that.forEach(function (item) {
            item.onclick = function (e) {
              let value = this.attributes.value.value.toString();
              if (value) {
                fontSet("#fontSelect .selector").that[0].innerHTML += String(
                  `<a href="javascript:void(0)" class="label"><span style="color:#fff;font-size:16px;font-family:${value}!important">${this.innerHTML}</span><input type="hidden" name="font-name" value="${value}"/><span class="close">×</span></a>`
                );
                fontSet(".selector").that[0].parentNode.style.cssText += "display:block;";
                for (let i = 0; i < fontData.length; i++) {
                  if (fontData[i].en === value) {
                    fontData.splice(i, 1);
                    i = fontData.length;
                  }
                }
                removeFontSelector();
              }
              fontSet(".selectId dl").hide();
              fontSet("#fontSelect .selectId input").that[0].value = "";
              e.stopPropagation();
            };
          });
        }
        let ddRemove = function (dd) {
          let temp = dd.nextElementSibling;
          dd.remove();
          if (temp !== null && temp.nodeName === "DD") {
            ddRemove(temp);
          }
        };

        fontSet("#fontSelect .selectId input").that[0].oninput = function () {
          let val = this.value;
          let dd = fontSet("#fontSelect .selectId dl dd").that[0];
          if (dd === "DD") {
            ddRemove(dd);
          }
          fontSet("#fontSelect .selectId dl").hide();
          if (fontData.length > 0) {
            fontSet("#fontSelect .selectId dl").show();
            let sear_1 = new RegExp(val);
            let judge_1 = false;
            fontSet("#fontSelect .selectId dl").that[0].innerHTML = "";
            fontData.forEach(function (item) {
              if (sear_1.test(item.name)) {
                judge_1 = true;
                fontSet("#fontSelect .selectId dl").that[0].innerHTML += String(
                  `<dd style="font-family:${item.en}!important" value="${item.en}">${item.ch}</dd>`
                );
              }
            });
            if (!judge_1) {
              fontSet("#fontSelect .selectId dl").that[0].innerHTML = "<dd>\u6682\u65E0\u6570\u636E</dd>";
            }
            clickEvent();
          }
        };

        fontSet("#fontSelect .selectId input").that[0].onclick = function (e) {
          let dd = fontSet("#fontSelect .selectId dl dd").that[0];
          if (dd === "DD") {
            ddRemove(dd);
          }
          if (fontData.length === 0) {
            this.innerHTML = "暂无数据";
          } else {
            fontSet("#fontSelect .selectId dl").show();
          }
          fontSet("#fontSelect .selectId dl").that[0].innerHTML = "";
          fontData.sort(function (a, b) {
            return a.en - b.en;
          });
          fontData.forEach(function (item) {
            fontSet("#fontSelect .selectId dl").that[0].innerHTML += String(
              `<dd style="font-family:${item.en}!important" value="${item.en}">${item.ch}</dd>`
            );
          });
          clickEvent();
          e.stopPropagation();
        };
        let selector = (function () {
          class selector {
            constructor(ch, en) {
              this.ch = ch;
              this.en = en;
            }
          }
          return selector;
        })();

        function removeFontSelector() {
          fontSet("#fontSelect .close").that.forEach(function (item) {
            item.onclick = function () {
              ddRemove(this.parentNode);
              let value = this.parentNode.children[1].value;
              let text = this.parentNode.children[0].innerHTML;
              fontData.push(new selector(text, value));
              if (fontSet("#fontSelect .close").that.length === 0) {
                fontSet("#fontSelect .selector").that[0].parentNode.style.cssText += "display:none;";
              }
            };
          });
        }

        document.onclick = function (e) {
          fontSet("#fontSelect .selectId dl").hide();
          fontSet("#fontSelect .selectId input").that[0].value = "";
        };
      },
    };
  };

  const fontCheck = new Set(
    [
      { ch: "微软雅黑", en: "Microsoft YaHei" },
      { ch: "微软正黑体", en: "Microsoft JhengHei" },
      { ch: "苹方-简", en: "PingFang SC" },
      { ch: "冬青黑体简", en: "Hiragino Sans GB" },
      { ch: "兰亭黑-简", en: "Lantinghei SC" },
      { ch: "儷黑 Pro", en: "LiHei Pro Medium" },
      { ch: "翩翩体-简", en: "Hanzipen SC" },
      { ch: "手札体-简", en: "Hannotate SC" },
      { ch: "娃娃体-简", en: "Wawati SC" },
      { ch: "魏碑-简", en: "Weibei SC" },
      { ch: "行楷-简", en: "Xingkai SC" },
      { ch: "雅痞-简", en: "Yapi SC" },
      { ch: "圆体-简", en: "Yuanti SC" },
      { ch: "华文黑体", en: "STHeiti" },
      { ch: "华文楷体", en: "STKaiti" },
      { ch: "华文细黑", en: "STXihei" },
      { ch: "华文彩云", en: "STCaiyun" },
      { ch: "华文琥珀", en: "STHupo" },
      { ch: "华文新魏", en: "STXinwei" },
      { ch: "华文隶书", en: "STLiti" },
      { ch: "华文行楷", en: "STXingkai" },
      { ch: "方正舒体", en: "FZShuTi" },
      { ch: "方正姚体", en: "FZYaoti" },
      { ch: "思源黑体", en: "Source Han Sans CN" },
      { ch: "思源宋体", en: "Source Han Serif SC" },
      { ch: "文泉驿微米黑", en: "WenQuanYi Micro Hei" },
      { ch: "汉仪旗黑 40S", en: "HYQihei 40S" },
      { ch: "汉仪旗黑 50S", en: "HYQihei 50S" },
      { ch: "汉仪旗黑 60S", en: "HYQihei 60S" },
      { ch: "幼圆", en: "YouYuan" },
      { ch: "楷体", en: "KaiTi" },
      { ch: "仿宋", en: "FangSong" },
      { ch: "隶书", en: "LiSu" },
    ].sort()
  );

  class isSupportFontFamily {
    constructor() {
      let baseFonts = ["monospace", "sans-serif", "serif"];
      let testString = "mmmmmmmnnoowwllii测试";
      let testSize = "72px";
      let h = document.getElementsByTagName("body")[0];
      let s = document.createElement("span");
      s.style.fontSize = testSize;
      s.innerHTML = testString;
      let defaultWidth = {};
      let defaultHeight = {};
      for (let index in baseFonts) {
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth;
        defaultHeight[baseFonts[index]] = s.offsetHeight;
        h.removeChild(s);
      }

      function detect(font) {
        let detected = false;
        for (let index in baseFonts) {
          s.style.fontFamily = font + "," + baseFonts[index];
          h.appendChild(s);
          let matched = s.offsetWidth !== defaultWidth[baseFonts[index]] || s.offsetHeight !== defaultHeight[baseFonts[index]];
          h.removeChild(s);
          detected = detected || matched;
        }
        return detected;
      }
      this.detect = detect;
    }
  }

  /* define default value */

  const defValue = {
    fontSelect: `"Microsoft YaHei",Arial,Helvetica,sans-serif`,
    fontFace: true,
    fontStroke: 0.04,
    fontShadow: 1.0,
    shadowColor: "#d4d4d4",
    fontSmooth: true,
    fontCSS: `:not(.fa,.mi):not([class*="nav"]):not([class*="icon"]):not([class*="logo"]):not([class*="code"])`,
    fontEx: `pre *, code *,* input,* textarea,* kbd,* i,* em`,
  };
  const feedback = defCon.supportURL ? defCon.supportURL : "https://greasyfork.org/scripts/416688/feedback";
  const CONST = {};

  /* Start specific operation */

  !(async function () {
    // Get Promise Value
    let temp = await GMgetValue("_fonts_set_");
    let exSite = await GMgetValue("_Exclude_site_");
    let obj = ["workstation-xi"].sort();

    /* Fixed data error, next versions will remove it. START */
    /* Temporary */ function isJSON(str) {
      /* Temporary */ try {
        /* Temporary */ let obj = JSON.parse(str);
        /* Temporary */ if (typeof obj === "object" && obj) {
          /* Temporary */ return true;
        } /* Temporary */ else {
          /* Temporary */ return false;
        } /* Temporary */
      } /* Temporary */ catch (e) {
        /* Temporary */ return false;
      } /* Temporary */
    } /* Temporary */
    /* Temporary */ if (isJSON(exSite)) {
      /* Temporary */ GMsetValue("_Exclude_site_", obj);
    } /* Temporary */
    /* Fixed data error, next versions will remove it. END */

    if (!temp && !exSite) {
      sessionStorage.setItem("_temp_", 1);
      sessionStorage.setItem("_exSite_", 1);
    } else {
      setInterval(async () => {
        exSite = await GMgetValue("_Exclude_site_");
      }, refreshTime);
    }

    if (Number(sessionStorage.getItem("_temp_")) && Number(sessionStorage.getItem("_exSite_"))) {
      setTimeout(async () => {
        let dialog = new DialogBox({
          trueButtonText: "好，去看看",
          falseButtonText: "不，算了吧",
          messageText: `<p><span style="font-size:32px;font-weight:900;color:red">您好</span>，这是您首次使用新版的字体渲染脚本，新版脚本可通过脚本菜单进行全局设置，可排除不需要渲染的域名等高级功能，告别旧版需要修改代码的大难题，具体功能敬请试用。</p><p>稍后，将为您打开新版脚本的介绍页面，您需要去看一下吗？</p>`,
          titleText: "温馨提示",
        });
        sessionStorage.clear();
        if (await dialog.respond()) {
          window.open(
            `https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89`,
            "Guide"
          );
        }
        dialog = null;
      }, 100);
    }

    /* Exclude site */

    let siteIndex;
    if (!exSite) {
      GMsetValue("_Exclude_site_", obj);
      exSite = obj;
    } else {
      for (let i = 0; i < exSite.length; i++) {
        if (exSite[i] === location.hostname) {
          siteIndex = i;
          break;
        }
      }
    }

    /* Menus Insert */

    try {
      let Font_Set, Exclude_site, Feed_Back;
      Font_Set ? GMunregisterMenuCommand(Font_Set) : debug("No Font_Set");
      Exclude_site ? GMunregisterMenuCommand(Exclude_site) : debug("No Exclude_site");
      Feed_Back ? GMunregisterMenuCommand(Feed_Back) : debug("No Feed_Back");

      if (window.self === window.top) {
        if (siteIndex === undefined) {
          Font_Set = GMregisterMenuCommand("\ufff0\ud83c\udf13 字体渲染设置", () => {
            document.querySelector(`#${defCon.rndId}`).style = "visibility: visible;";
          });
          Exclude_site = GMregisterMenuCommand(`\ufff1\ud83d\udeab 排除渲染 ${location.hostname}`, async () => {
            exSite.push(location.hostname);
            GMsetValue("_Exclude_site_", exSite);
            let dialog = new DialogBox({
              trueButtonText: "确 定",
              messageText: "<p>" + location.hostname + " 已<b style='color:red'>禁止</b>字体渲染！</p><p>确定后页面将自动刷新！</p>",
              titleText: "禁止字体渲染",
            });
            if (await dialog.respond()) {
              dialog = null;
              location.reload();
            }
          });
        } else {
          Exclude_site = GMregisterMenuCommand(`\ufff1\ud83c\udf40 重新渲染 ${location.hostname}`, async () => {
            exSite.splice(siteIndex, 1);
            GMsetValue("_Exclude_site_", exSite);
            let dialog = new DialogBox({
              trueButtonText: "确 定",
              messageText: "<p>" + location.hostname + " 重新<b style='color:green'>开启</b>字体渲染！</p><p>确定后页面将自动刷新！</p>",
              titleText: "恢复字体渲染",
            });
            if (await dialog.respond()) {
              dialog = null;
              location.reload();
            }
          });
        }

        Feed_Back = GMregisterMenuCommand("\ufff9\ud83e\udde1 建议反馈", () => {
          window.open(feedback, "feedback");
        });
      }
    } catch (e) {
      error("%c[Error]%c\n%s", "font-weight:bold;color:red", "font-weight:bold;color:darkred", e);
    }

    /* Set Default Value & initialize */

    if (!temp) {
      saveDate("_fonts_set_", {
        fontSelect: defValue.fontSelect,
        fontFace: defValue.fontFace,
        fontStroke: defValue.fontStroke,
        fontShadow: defValue.fontShadow,
        shadowColor: defValue.shadowColor,
        fontSmooth: defValue.fontSmooth,
        fontCSS: defValue.fontCSS,
        fontEx: defValue.fontEx,
      });
      CONST.fontSelect = defValue.fontSelect;
      CONST.fontFace = defValue.fontFace;
      CONST.fontStroke = defValue.fontStroke;
      CONST.fontShadow = defValue.fontShadow;
      CONST.shadowColor = defValue.shadowColor;
      CONST.fontSmooth = defValue.fontSmooth;
      CONST.fontCSS = defValue.fontCSS;
      CONST.fontEx = defValue.fontEx;
    } else {
      const fontValue = JSON.parse(temp);
      CONST.fontSelect = fontValue.fontSelect;
      CONST.fontFace = fontValue.fontFace;
      CONST.fontStroke = fontValue.fontStroke;
      CONST.fontShadow = fontValue.fontShadow;
      CONST.shadowColor = fontValue.shadowColor;
      CONST.fontSmooth = fontValue.fontSmooth;
      CONST.fontCSS = fontValue.fontCSS;
      CONST.fontEx = fontValue.fontEx;
    }

    /* Operation of CSS value */

    let shadow = "";
    const shadow_r = parseFloat(CONST.fontShadow);
    const shadow_c = CONST.shadowColor;
    if (!isNaN(shadow_r) && shadow_r > 0 && shadow_r <= 8) {
      shadow = `text-shadow:-1px 1px ${shadow_r}px ${shadow_c},1px 1px ${shadow_r}px ${shadow_c},1px -1px ${shadow_r}px ${shadow_c},-1px -1px ${shadow_r}px ${shadow_c};`;
    }
    let stroke = "";
    const stroke_r = parseFloat(CONST.fontStroke);
    if (!isNaN(stroke_r) && stroke_r > 0 && stroke_r <= 1.0) {
      stroke = `-webkit-text-stroke:${stroke_r}px;text-stroke:${stroke_r}px;-webkit-text-fill-color:currentcolor;text-fill-color:currentcolor;`;
    }
    let smoothing = "";
    const smooth_i = Boolean(CONST.fontSmooth);
    if (smooth_i) {
      smoothing = `-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;`;
    }

    const fontfamily = `font-family:${CONST.fontSelect.toString()};`;
    let refont = CONST.fontSelect.toString().split(",")[0];
    refont = refont ? refont.replace(/"|'/g, "") : "";

    let fontface = "";
    if (CONST.fontFace) {
      fontface = refont
        ? `@font-face{font-family:"宋体";src:local("${refont}")}@font-face{font-family:"新宋体";src:local("${refont}")}@font-face{font-family:"黑体";src:local("${refont}")}@font-face{font-family:"Microsoft YaHei UI";src:local("${refont}")}@font-face{font-family:"Segoe UI";src:local("${refont}")}@font-face{font-family:"Microsoft YaHei";src:local("${refont}")}@font-face{font-family:"微软雅黑";src:local("${refont}")}@font-face{font-family:"PingFang SC";src:local("${refont}")}@font-face{font-family:Tahoma;src:local("${refont}")}@font-face{font-family:Arial;src:local("${refont}")}@font-face{font-family:Helvetica;src:local("${refont}")}`
        : ``;
    }
    const cssexlude = CONST.fontEx;
    const exclude = `${cssexlude}{text-stroke:0!important;-webkit-text-stroke:0!important;text-shadow:0 0 0 #fff!important}`;

    const cssfun = CONST.fontCSS;
    let tshadow = "";
    if (siteIndex === undefined) {
      tshadow = `${exclude}${cssfun}{${shadow}${stroke}${smoothing}${fontfamily}}${fontface}`;
    }
    const fontStyle = `.dialog-box{max-width:400px;color:#444;z-index:9999999;border:2px solid #efefef;-moz-border-radius:24px;border-radius:24px}.dialog-box *,.dialog-box *:hover{text-stroke:0!important;-webkit-text-stroke:0!important;text-shadow:0 0 0 #fff!important}.dialog-box-button--false{background:#d93223;color:#fff;border:1px solid #d93223;-moz-border-radius:6px;border-radius:6px;font-size:14px!important}.dialog-box-button--true{background:#038c5a;color:#fff;border:1px solid #038c5a;-moz-border-radius:6px;border-radius:6px;font-size:14px!important}.dialog-box-button--neutral{background:#777;color:#fff;border:1px solid #777;-moz-border-radius:6px;border-radius:6px;font-size:14px!important}.dialog-box{width:100%;display:block;position:fixed;right:-180px;top:500px;transform:translate(-50%,-50%);background:#fff;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.3);-moz-box-shadow:0 0 10px 0 rgba(0,0,0,.3);box-shadow:0 0 10px 0 rgba(0,0,0,.3);border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;overflow:hidden;transition:opacity .3s}.dialog-box-message{color:#444;padding:10px;margin:10px;font-size:16px;font-weight:300}.dialog-box-message p{line-height:160%;margin:5px 0}.dialog-box-title{background:#efefef;margin-top:0;padding:12px;font-size:20px;font-weight:700;width:100%}.dialog-box-button{min-width:20%;letter-spacing:0;text-align:center;cursor:pointer;padding:10px;display:inline-block;border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;margin:0 1%;font-size:12px;font-weight:300;transition:opacity .5s}.dialog-box-button:hover{color:#fff;opacity:.8}.dialog-box-button-container{text-align:right;padding:2.5%;background:#efefef;color:#ffffff;}#color-picker{display:none;min-height:205px;min-width:250px;z-index:999999;margin-top:40px;position:fixed}.picker-wrapper,.slide-wrapper{position:relative;float:left}.picker-indicator,.slide-indicator{position:absolute;left:0;top:0;pointer-events:none}.picker,.slide{cursor:crosshair;float:left}.cp-default{background-color:#d1f2fb;padding:10px;box-shadow:0 0 10px #000;border-radius:6px;float:left}.cp-default .picker{width:200px;height:200px;border:2px solid #222}.cp-default .slide{width:30px;height:200px}.cp-default .slide-wrapper{margin-left:10px}.cp-default .picker-indicator{width:5px;height:5px;border:2px solid #00008b;-moz-border-radius:4px;-o-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;opacity:.5;background-color:#fff}.cp-default .slide-indicator{width:100%;height:10px;left:-4px;opacity:.6;border:4px solid #add8e6;-moz-border-radius:4px;-o-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;background-color:#fff}body #fr-container{background:#f0f6ff;border-radius:6px;-moz-border-radius:6px;position:fixed;top:10px;right:20px}#fr-container *{text-stroke:0!important;-webkit-text-stroke:0!important;text-shadow:0 0 0 #fff!important}#fr-container{width:340px;z-index:9999999;padding:3px 8px;text-align:left;background-color:#fff;color:#333;font-size:16px;font-weight:900;-webkit-transition:all .1s ease-in;transition:all .1s ease-in;}#fr-container strong{display:block;margin-bottom:10px}#fr-container p{display:block;margin:0 0 10px 0;line-height:140%}#fr-container ul li{list-style:none;margin:3px 0;-webkit-box-sizing:content-box;box-sizing:content-box;border:none;float:none;cursor:default}#fr-container fieldset{border:2px groove #67a5df;-moz-border-radius:10px;border-radius:10px;padding:4px 9px 6px 9px;margin:2px;display:block;width:auto;height:auto;min-height:500px}#fr-container legend{line-height:20px;padding:0 8px;margin-bottom:0;font-size:16px;font-weight:700;font-family:"Microsoft YaHei",sans-serif;-webkit-box-sizing:content-box;box-sizing:content-box;width:auto!important;min-width:185px!important}#fr-container fieldset>ul{padding:0;margin:0}#fr-container .setting-title{color:#8b0000}@-webkit-keyframes rotation{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}.setting-title .Rotation{bottom:auto;top:auto;left:auto;right:auto;-webkit-transform:rotate(360deg);animation:rotation 5s linear infinite;-moz-animation:rotation 5s linear infinite;-webkit-animation:rotation 5s linear infinite;-o-animation:rotation 5s linear infinite}#fontSelect{padding:2px 10px;min-height:80px}#fontFace,#fontSmooth{padding:2px 10px;height:40px;width:calc(100% -10px);min-width:calc(100% -10px)}#shadowColor{padding:2px 10px;min-height:45px;margin:4px width: calc(100% - 10px)}#fontShadow{padding:2px 10px;height:70px}#fontStroke{padding:2px 10px;height:70px}#submitData{padding:2px 10px;height:40px}#submitData button{background-color:#67a5df;color:#fff;padding:5px;font-size:14px;font-weight:400;border:2px solid #6ba7e0;-moz-border-radius:6px;border-radius:6px;width:50px}#submitData .cancel,#submitData .reset{float:left;margin-right:10px}#submitData .fr-submit{float:right}#fontCSS,#fontEx{padding:2px 10px;min-height:110px}#fontCSS textarea,#fontEx textarea{width:100%;max-width:calc(100% - 15px)!important;height:60px;resize:none;border:2px solid #67a5df;-moz-border-radius:6px;border-radius:6px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:5px;font-family:"Fira Code",Monaco,consolas,sans-serif;font-size:14px;font-weight:500;color:#0b5b9c;scrollbar-color:rgba(0,0,0,.6) rgba(0,0,0,.25);scrollbar-width:thin;scrollbar-arrow-color:#fff;scrollbar-face-color:#4c4c4c;scrollbar-highlight-color:#4c4c4c;scrollbar-shadow-color:#4c4c4c;scrollbar-track-color:#bfbfbf;scrollbar-3dlight-color:#4c4c4c;scrollbar-darkshadow-color:#4c4c4c;scrollbar-base-color:#4c4c4c}#fontCSS textarea::-webkit-scrollbar,#fontEx textarea::-webkit-scrollbar{width:5px;height:5px}#fontCSS textarea::-webkit-scrollbar-track，#fontEx textarea::-webkit-scrollbar-track{border-radius:5px;background-color:rgba(0,0,0,.25)}#fontCSS textarea::-webkit-scrollbar-thumb,#fontEx textarea::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(0,0,0,.6)}.fr_tooltip{position:relative}.fr_tooltip .fr_tooltiptext{visibility:hidden;z-index:9999;width:220px;max-width:220px;background-color:#54a2ec;border:2px solid #b8c4ce;font-weight:400;color:#fff;border-radius:6px;-moz-border-radius:6px;padding:10px;position:absolute;font-size:14px;opacity:.9;-moz-opacity:.9;display:none;-webkit-box-sizing:content-box;box-sizing:content-box}.fr_tooltip:hover .fr_tooltiptext{visibility:visible;display:block}.ps1{top:-32px;left:250px}.ps2{top:-20px;left:-250px}.ps4{top:25px}#fontSelect .selector a{font-weight:400;color:#111;text-decoration:none}#fontSelect .label{padding:2px 0;background:#67a5df;border-radius:2px;-moz-border-radius:2px;color:#fff;display:block;line-height:20px;height:24px;margin:2px 5px 2px 0;float:left;-webkit-box-sizing:content-box;box-sizing:content-box;font-weight:400}#fontSelect .label span{padding:5px}#fontSelect .close{padding:1px 2px 5px 2px!important;color:#fff;-webkit-box-sizing:content-box;box-sizing:content-box}#fontSelect .close:hover{background-color:#366694;border-radius:2px;-moz-border-radius:2px;color:tomato}#fontSelect .selectId{width:calc(100% - 42px)}#fontSelect .selectId label{display:block;margin:5px 0}#fontSelect .selectId input{height:36px!important;padding:1px 25px!important;text-indent:0;font-size:16px;width:100%;max-width:calc(100% - 10px);outline-color:#67a5df;border:2px solid #67a5df;border-radius:6px;-moz-border-radius:6px;-webkit-box-sizing:content-box;box-sizing:content-box}#fontSelect .selectId dl{position:fixed;z-index:1000;width:100%;max-width:180px;-webkit-box-sizing:content-box;box-sizing:content-box;background-color:#fff;border:2px solid #67a5df;border-radius:4px;-moz-border-radius:4px;margin:8px 0 0 0;padding:4px 25px;max-height:200px;font-size:18px;overflow-x:hidden;white-space:nowrap}#fontSelect .selectId dl dd{margin:0;padding:5px;font-weight:400}#fontSelect .selectId dl dd:hover{background-color:#67a5df;color:#fff}#selector{width:100%;max-width:100%}#fontSelect .selector{width:100%;max-width:calc(100% - 15px);overflow-y:auto;max-height:60px;border:2px solid #67a5df;border-radius:6px;-moz-border-radius:6px;padding:6px;-webkit-box-sizing:content-box;box-sizing:content-box}.checkbox{display:none!important}.checkbox+label{background-color:#fff;padding:11px 9px;border-radius:7px;display:inline-block;position:relative;background:#f7836d;width:58px;height:10px;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(245,146,146,.4);-webkit-box-sizing:content-box;box-sizing:content-box;word-wrap:normal!important}.checkbox+label:before{content:' ';position:absolute;background:#fff;top:0;z-index:999;left:0;width:24px;color:#fff;height:32px;border-radius:7px;-moz-border-radius:7px;box-shadow:0 0 1px rgba(0,0,0,.6);}.checkbox+label:after{content:'OFF';position:absolute;top:0;left:28px;font-size:1em;color:#fff;font-weight:700;padding:5px;border-radius:100px;-moz-border-radius:100px;-webkit-box-sizing:content-box;box-sizing:content-box}.checkbox:checked+label{-webkit-box-sizing:content-box;box-sizing:content-box;background:#67a5df;box-shadow:inset 0 0 20px rgba(0,0,0,.1),0 0 10px rgba(146,196,245,.4)}.checkbox:checked+label:after{content:'ON';left:10px;-webkit-box-sizing:content-box;box-sizing:content-box}.checkbox:checked+label:before{content:' ';position:absolute;z-index:999;left:52px;-webkit-box-sizing:content-box;box-sizing:content-box}#f-face label,#f-face+label:after,#f-face+label:before,#smooth label,#smooth+label:after,#smooth+label:before{-webkit-transition:all .1s ease-in;transition:all .1s ease-in;-webkit-box-sizing:content-box;box-sizing:content-box}#color-picker-show{float:left;display:block;margin-top:-6px}.cpicker{width:32px;height:32px;cursor:pointer;position:relative;border:2px solid #181a25;-moz-border-radius:4px;border-radius:4px;float:left;display:inline-block}.cpicker #color{width:125px;height:32px;text-indent:0;font-size:18px;-webkit-box-sizing:content-box;box-sizing:content-box;font-family:Impact,'Courier New',sans-serif!important;font-weight:400;border:#67a5df 2px solid;-moz-border-radius:4px;border-radius:4px;display:inline-block;padding:0 5px;margin-top:-2px;text-align:center}#fontShadow #shadowSize,#fontStroke #strokeSize{color:#111;width:56px;text-indent:0;margin-bottom:2px;float:right;height:32px;font-size:17px;font-family:Impact,'Courier New',sans-serif!important;border:#67a5df 2px solid;-moz-border-radius:4px;border-radius:4px;margin-right:2px;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0}.progress{margin:2px;width:calc(100% - 10px)}.ProgressBar{background:#f0f0f0;margin:2px;width:250px;box-sizing:border-box;display:flex;align-items:flex-end;box-shadow:0 0 1px 1px rgba(0,0,0,.1) inset}.ProgressLine{width:100%;height:100%;position:relative;border-radius:15px;background:#67a5df}.ProgressLine .btnl{position:absolute;height:100%;right:0;border-radius:50%;font-size:8px;background:#67a5df;border:6px solid #fff;top:50%;transform:translate(6px,-50%);box-sizing:content-box!important;box-shadow:0 0 0 1px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}.ProgressLine .btnl .disable{background:#ddd;border-color:#fafafa}.ProgressLine .btnl .loading{display:none;position:absolute;content:'';top:50%;left:50%;border-radius:50%;overflow:hidden;transform:translate(-50%,-50%);background:url(../images/loading1.gif);background-position:center center;background-size:130%;opacity:.5}@keyframes rate{0%{transform:translate(-50%,-50%) rotate(0)}100%{transform:translate(-50%,-50%) rotate(360deg)}}.vertical{top:0!important;left:50%!important;transform:translate(-50%,-6px)!important}.ProgressBar .progressVal{position:absolute;right:0;background:rgba(0,0,0,.4);text-align:center;width:45px;box-sizing:border-box;padding:0 4px;font-size:10px;color:#fff;height:20px;line-height:20px;border-radius:4px;top:-35px;left:50%;transform:translateX(-50%);transition:.5s linear}.ProgressBar .progressVal.bottom{top:auto;bottom:-35px}.ProgressBar .progressVal::after{position:absolute;content:'';border-width:5px 5px 0;border-style:solid;border-color:rgba(0,0,0,.4) transparent transparent;bottom:-5px;left:50%;transform:translateX(-50%)}.ProgressBar .progressVal.bottom::after{bottom:auto;top:-5px;border-width:0 5px 5px;border-style:solid;border-color:transparent transparent rgba(0,0,0,.4)}.ProgressBar .progressVal.left{top:auto;left:-40px}.ProgressBar .progressVal.left::after{top:50%;transform:translateY(-50%);left:auto;right:-5px;bottom:auto;border-width:5px 0 5px 5px;border-style:solid;border-color:transparent transparent transparent rgba(0,0,0,.4)}.ProgressBar .progressVal.right{top:auto;right:-85px;left:auto}.ProgressBar .progressVal.right::after{top:50%;transform:translateY(-50%);right:auto;left:-5px;bottom:auto;border-width:5px 5px 5px 0;border-style:solid;border-color:transparent rgba(0,0,0,.4) transparent transparent}`;
    const tHTML = String(`
    <div id="fr-container">
      <fieldset id="fr-autopager-field" style="display:block">
        <legend class="setting-title">
          <span style="display:inline-block">${defCon.scriptName}</span>
          <span style="display:inline-block;position:fixed;cursor:pointer" onclick="window.open('https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89','Guide')">
            <img class="Rotation" title="帮助文件" height="24" width="24" src="https://img.icons8.com/fluent/100/000000/help.png"/>
          <span>
        </legend>
        <ul class="setting-main">
          <li id="fontSelect">
            <div class="font-list"></div>
          </li>
          <li id="fontSmooth">
            <div style="float:left">字体平滑（默认：开）</div>
            <div style="float:right;margin:-5px 1px 0 0"><input type="checkbox" id="smooth" class="checkbox" ${CONST.fontSmooth ? "checked" : ""} />
            <label for="smooth"></label>
            </div>
          </li>
          <li id="fontFace">
            <div style="float:left">字体重写（默认：开）</div>
            <div style="float:right;margin:-5px 1px 0 0"><input type="checkbox" id="f-face" class="checkbox" ${CONST.fontFace ? "checked" : ""} />
            <label for="f-face"></label>
            </div>
          </li>
          <li id="fontStroke">
            <div style="margin-bottom:2px;min-width:calc(100% - 10px);float:left">字体描边尺寸<input id="strokeSize" /></div>
            <div id="stroke" class="progress"></div>
          </li>
          <li id="fontShadow">
            <div style="margin-bottom:2px;min-width:calc(100% - 10px);float:left">字体阴影尺寸<input id="shadowSize" /></div>
            <div id="shadow" class="progress"></div>
          </li>
          <li id="shadowColor">
            <div style="float:left;margin-right:10px">阴影颜色<span class="fr_tooltip">\ud83d\udd14<span class="fr_tooltiptext ps4"><p>阴影颜色可通过点击色块激活拾色器进行选择，也可自定义进行填写，填写格式如下：</p><p>HEX: #dbdbdb</p><p>RGB: rgb(133,133,133)</p><p>RGBA: rbga(236,236,236,0.8)</p><p>自身颜色: currentcolor</p><p><b style="color:darkred">注意：</b>格式错误，输入框变红</p></span></span></div>
            <div class="cpicker" id="color-picker-show"><input id="color" style="margin-left:40px"/></div>
            <div id="color-picker" class="cp-default">
                <div class="picker-wrapper">
                    <div id="picker" class="picker"></div>
                    <div id="picker-indicator" class="picker-indicator"></div>
                </div>
                <div class="slide-wrapper">
                    <div id="slide" class="slide"></div>
                    <div id="slide-indicator" class="slide-indicator"></div>
                </div>
            </div>
          </li>
          <li id="fontCSS">
            <div style="margin-bottom: 6px">需要渲染的元素：<span class="fr_tooltip">\ud83d\udd14<span class="fr_tooltiptext ps4">请将要渲染的元素用逗号分隔，默认为渲染全部元素，排除指定样式。（该选项需要CSS知识，请谨慎填写，样式若失效请重置）</span></span></div>
            <textarea id="cssfun">${CONST.fontCSS ? CONST.fontCSS : ""}</textarea>
          </li>
          <li id="fontEx">
            <div style="margin-bottom: 6px">排除渲染的元素：<span class="fr_tooltip">\ud83d\udd14<span class="fr_tooltiptext ps4">请将排除渲染的元素用逗号分隔，默认为元素标签。（该选项需要CSS知识，请谨慎填写，样式若失效请重置）</span></span></div>
            <textarea id="exclude">${CONST.fontEx ? CONST.fontEx : ""}</textarea>
          </li>
          <li id="submitData">
            <button class="reset">重置</button><button class="cancel">关闭</button><button class="fr-submit">保存</button>
          </li>
        </ul>
      </fieldset>
    </div>`);
    const tCSS = `@charset "UTF-8";` + tshadow + fontStyle;

    /* Insert HTML and CSS */

    function insertHTML() {
      if (document.body !== null && document.querySelector(`#${defCon.rndId}`) === null) {
        let div = document.createElement("div");
        div.id = defCon.rndId;
        div.style = "visibility:hidden;";
        div.innerHTML = tHTML;
        try {
          document.getElementsByTagName("body")[0].appendChild(div);
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
    }

    function RAF() {
      RAFInterval(
        () => {
          if (!document.querySelector(`.${defCon.rndClass}`)) {
            addStyle(tCSS, `${defCon.rndClass}`, "head");
          }
          if (!document.querySelector(`#${defCon.rndId}`)) {
            insertHTML();
          }
        },
        200,
        true
      );
    }

    try {
      const callback = mutations => {
        mutations.forEach(mutation => {
          if (document.querySelector(`#${defCon.rndId}`) && document.querySelector(`.${defCon.rndClass}`)) {
            debug(`//-> Already Insert Button & CSS.`);
          } else {
            RAF();
          }
        });
      };
      const opts = { childList: true, subtree: true };
      let observer = new MutationObserver(callback);
      observer.observe(document, opts);

      /* Fonts selection */

      const fontReady = await document.fonts.ready;
      const checkFont = new isSupportFontFamily();
      const fontAvailable = new Set();
      if (fontReady) {
        for (const font of fontCheck.values()) {
          if (checkFont.detect(font.en) || checkFont.detect(font.ch)) {
            fontAvailable.add(font);
          }
        }
      }
      const fontData = [...fontAvailable.values()];
      if (document.querySelector(`#${defCon.rndId}`)) {
        fontSet("#fontSelect .font-list").fsearch("fontSelect", fontData);
      }

      /* Fonts stroke */

      const strock = document.getElementById("strokeSize");
      const drawStrock = new Progress("#stroke", {
        val: CONST.fontStroke * 100,
        size: 10,
        precision: 1,
        range: 1,
        drag: true,
        direction: "horizontal",
        tip: {
          trigger: "hover",
          align: "right",
        },
        getVal: function (e) {
          strock.value = ((e.val / 100) * e.range).toFixed(e.precision + 2);
        },
      });
      drawStrock.onLoad(true, checkdraw(strock, drawStrock, /\d+(?:\.\d{1,3})?/));

      /* Fonts shadow */

      const shadows = document.getElementById("shadowSize");
      let drawShadow = new Progress("#shadow", {
        val: (CONST.fontShadow * 100) / 8,
        size: 10,
        precision: 0,
        range: 8,
        drag: true,
        direction: "horizontal",
        tip: {
          trigger: "hover",
          align: "right",
        },
        getVal: function (s) {
          shadows.value = ((s.val / 100) * s.range).toFixed(s.precision + 2);
        },
      });
      drawShadow.onLoad(false, checkdraw(shadows, drawShadow, /\d+(?:\.\d{1,2})?/));

      /* Fonts shadow color selection */

      const cpshow = document.querySelector("#color-picker-show");
      const cp = document.querySelector("#color-picker");
      const body = document.querySelector("body");
      const colorshow = document.querySelector("#color");
      let cpr = new ColorPicker(document.getElementById("slide"), document.getElementById("picker"), function (
        hex,
        hsv,
        rgb,
        mousePicker,
        mouseSlide,
        currentColor
      ) {
        currentColor = hex;
        ColorPicker.positionIndicators(
          document.getElementById("slide-indicator"),
          document.getElementById("picker-indicator"),
          mouseSlide,
          mousePicker
        );
        cpshow.style.backgroundColor = hex;
        colorshow.value = hex;
        colorshow.style.border = "2px solid #67a5df";
        colorshow.style.color = "black";
      });
      cpr.setHex(CONST.shadowColor);

      const colorReg =
        /^currentcolor$|^#([A-F0-9]{6}|[a-f0-9]{6}|[A-F0-9]{3}|[a-f0-9]{3})$|^rgba\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*((?!1.[1-9])[0-1](\.[0-9])?)\)$|^rgb\(([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5]))),\s*([0-9]|([1-9][0-9])|(1[0-9][0-9])|(2([0-4][0-9]|5[0-5])))\)$/;
      colorshow.addEventListener("change", function () {
        if (colorReg.test(this.value.trim())) {
          cpr.setHex(this.value);
          colorshow.style.border = "2px solid #67a5df";
          colorshow.style.color = "black";
        } else {
          colorshow.style.border = "2px solid red";
          colorshow.style.color = "red";
        }
      });

      cpshow.addEventListener("click", function (e) {
        e.stopPropagation();
        cp.style = "display:block";
      });
      cp.addEventListener(
        "click",
        function (e) {
          e.stopPropagation();
        },
        false
      );
      body.addEventListener("click", function () {
        cp.style = "display:none";
      });

      /* Buttons control */

      document.querySelector("#submitData .reset").addEventListener("click", async () => {
        let dialog = new DialogBox({
          trueButtonText: "确 定",
          falseButtonText: "取 消",
          messageText: `<p>『重置』将初始化您所有的操作，脚本的所有参数将被还原为初始状态，一般是在您配置错误造成页面混乱后才会进行重置。</p><p style="color:red">注意，重置后记得保存数据！</p><p>请确认您是否要进行重置操作？</p>`,
          titleText: "参数重置确认",
        });

        if (await dialog.respond()) {
          fontSet().fdeleteList(fontData);
          strock.value = defValue.fontStroke.toFixed(3);
          drawStrock.updateVal((Number(defValue.fontStroke) * 100) / drawStrock.range);
          shadows.value = defValue.fontShadow.toFixed(2);
          drawShadow.updateVal((Number(defValue.fontShadow) * 100) / drawShadow.range);
          cpr.setHex(defValue.shadowColor);
          document.querySelector("#smooth").checked = defValue.fontSmooth;
          document.querySelector("#f-face").checked = defValue.fontFace;
          document.querySelector("#cssfun").value = defValue.fontCSS;
          document.querySelector("#exclude").value = defValue.fontEx;
        }
        dialog = null;
      });

      document.querySelector("#submitData .fr-submit").addEventListener("click", async () => {
        const fstrock = /[0-9]+(?:\.[0-9]{1,3})?/.test(strock.value) ? strock.value : defValue.fontStroke;
        const fshadow = /[0-9]+(?:\.[0-9]{1,3})?/.test(shadows.value) ? shadows.value : defValue.fontShadow;
        const pickedcolor = colorshow.value;
        const fscolor = colorReg.test(pickedcolor) ? pickedcolor : defValue.shadowColor;
        const fontlists = fontSet().fsearchList("font-name");
        const fontselect = fontlists.length > 0 ? String(fontlists.toString() + "," + defValue.fontSelect) : defValue.fontSelect;
        const smooth = document.querySelector("#smooth").checked;
        const fontface = document.querySelector("#f-face").checked;
        const fcss = document.querySelector("#cssfun").value;
        const cssfun = fcss ? fcss.toString() : defValue.fontCSS;
        const fex = document.querySelector("#exclude").value;
        const fontex = fex ? fex.toString() : defValue.fontEx;
        if (
          saveDate("_fonts_set_", {
            fontSelect: fontselect,
            fontFace: fontface,
            fontStroke: fstrock,
            fontShadow: fshadow,
            shadowColor: fscolor,
            fontSmooth: smooth,
            fontCSS: cssfun,
            fontEx: fontex,
          })
        ) {
          let dialog = new DialogBox({
            trueButtonText: "感谢使用",
            messageText: "<p>您的设置参数已保存！页面将会自动刷新！</p>",
            titleText: "操作完毕",
          });

          if (await dialog.respond()) {
            document.querySelector(`#${defCon.rndId}`).style = "visibility:hidden;";
            dialog = null;
            location.reload();
          }
        } else {
          let dialog = new DialogBox({
            trueButtonText: "反馈问题",
            messageText: "<p>保存过程中发生了错误！</p><p>请收集浏览器信息、脚本插件信息、以及脚本版本后，与作者联系反馈！</p>",
            titleText: "错误报告",
          });
          if (await dialog.respond()) {
            document.querySelector(`#${defCon.rndId}`).style = "visibility:hidden;";
            window.open(feedback, "feedback");
          }
          dialog = null;
        }
      });

      document.querySelector("#submitData .cancel").addEventListener("click", () => {
        document.querySelector(`#${defCon.rndId}`).style = "display:none";
      });
    } catch (e) {
      error("%c[Error]%c\n%s", "font-weight:bold;color:red", "font-weight:bold;color:darkred", e);
    }

    /* SYSTEM INFO */

    if (siteIndex === undefined) {
      let reFontFace = "";
      fontCheck.forEach(item => {
        if (item.en.toLowerCase() === refont.toLowerCase()) {
          reFontFace = item.ch + " " + item.en;
        }
      });
      console.info(
        `%c${defCon.scriptName}\n%c▞ 跨页面数据同步时长：%sms\n▞ 渲染字体：%s\n▞ 字体平滑：%s　▚ 字体重写：%s\n▞ 字体描边：%s　▚ 字体阴影：%s`,
        "line-height:160%;font-weight:bold;font-size:14px;color:red",
        "line-height:180%;font-size:12px;color:teal",
        refreshTime,
        reFontFace,
        CONST.fontSmooth ? "ON " : "OFF",
        CONST.fontFace ? "ON " : "OFF",
        Number(CONST.fontStroke) ? "ON " : "OFF",
        Number(CONST.fontShadow) ? "ON " : "OFF"
      );
    } else {
      console.info(
        `%c${defCon.scriptName}\n%c${location.hostname.toUpperCase()} 已在排除渲染列表内，若要重新渲染，请在脚本菜单中打开重新渲染。`,
        "line-height:160%;font-weight:bold;font-size:14px;color:red",
        "line-height:180%;font-size:12px;color:darkred"
      );
    }

    /* important Functions */

    function addStyle(css, className, addToTarget, isReload, initType) {
      RAFInterval(
        () => {
          let addTo = document.querySelector(addToTarget);
          if (typeof addToTarget === "undefined") {
            addTo = document.head || document.body || document.documentElement || document;
          }
          isReload = isReload || false;
          initType = initType || "text/css";
          if (typeof addToTarget === "undefined" || (typeof addToTarget !== "undefined" && document.querySelector(addToTarget) !== null)) {
            if (isReload === true) {
              safeRemove(`.${className}`);
            } else if (isReload === false && document.querySelector(`.${className}`) !== null) {
              return true;
            }
            const cssNode = document.createElement("style");
            if (className !== null) {
              cssNode.className = className;
            }
            cssNode.setAttribute("type", initType);
            cssNode.innerHTML = css;
            try {
              addTo.appendChild(cssNode);
            } catch (e) {
              error(`//-> ${e.name}`);
            }
            return true;
          }
          return false;
        },
        200,
        true
      );
    }

    function safeRemove(Css) {
      safeFunction(() => {
        const removeNodes = document.querySelectorAll(Css);
        for (let i = 0; i < removeNodes.length; i++) {
          removeNodes[i].remove();
        }
      });
    }

    function safeFunction(func) {
      try {
        func();
        return true;
      } catch (e) {
        error(`//-> ${e.name}`);
        return false;
      }
    }

    function RAFInterval(callback, period, runNow) {
      const needCount = (period / 1000) * 60;
      let times = 0;
      if (runNow === true) {
        const shouldFinish = callback();
        if (shouldFinish) {
          return;
        }
      }

      function step() {
        if (times < needCount) {
          times++;
          requestAnimationFrame(step);
        } else {
          const shouldFinish = callback() || false;
          if (!shouldFinish) {
            times = 0;
            requestAnimationFrame(step);
          } else {
            return;
          }
        }
      }
      requestAnimationFrame(step);
    }

    function saveDate(key, { ...Options }) {
      let obj = { ...Options };
      try {
        GMsetValue(key, JSON.stringify(obj));
        return true;
      } catch (e) {
        error(`//-> ${e.name}`);
        return false;
      }
    }
  })();
})();
