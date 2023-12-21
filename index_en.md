# [**GreasyFork Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) (F9y4ng) [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

**页面语言** (**Language**) |  [中文 (Chinese)](index.md) | 英语 (English)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE)
[![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master)
[![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues)
[![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/F9y4ng/GreasyFork-Scripts/stargazers)

- Please install the **script manager extension** first, such as: _Tampermonkey, Violentmonkey, Greasemonkey, Userscripts_, and then **install the script** you want.
- **Chrome**, **Firefox** recommend installing **Tampermonkey/Violentmonkey**, **Safari** recommend installing **Tampermonkey/Userscripts**.
- Using **Adguard Desktop** or **Userscripts**, the script menus can be called up via **keyboard shortcuts**.

> ## Declaration 
> Some personal modified Blink kernel browsers with **DirectWrite** disabled will cause most fonts to be unrecognized by the program, or non-ASCII characters and Emoji icons will not be rendered correctly. **Important Note**: All scripts updates will no longer provide code compatibility and Q&A for browsers with _`disabled DirectWrite`_, to use the scripts in this project, we recommend you use a official browser.

***

# Font Rendering (Costomized) `Font Rendering.user.js`
 　[[View source code](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Font%20Rendering.user.js)] 　[[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)] 　[[Visit GreasyFork](https://greasyfork.org/scripts/416688)] _（Issues aren't processed at GreasyFork）_

**Introduction:** Without MacType, improve browser displaying more textured. "Microsoft Yahei" is used by default. For browser displaying, the script provides advanced features such as font rewriting, smoothing, scaling, stroke, shadow, special style elements, custom monospaced, etc. It can configure by "click Script Manager icon" or "use hotkeys" to call out the setup. The script is already compatible with major browsers and userscript managers, also commonly used Greasemonkey scripts and browser extensions.

* [Read the instructions for using the script and the precautions on the page before use.](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)
* Please report script errors to [[Issues](https://github.com/F9y4ng/GreasyFork-Scripts/issues)], and rendering style, garbled code issues to [[Discussions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/categories/%E9%97%AE%E7%AD%94%E4%B8%93%E5%8C%BA-question-answer)]。
* Please back up your local data in time! Do not use backup files from unknown sources!

## version 2023.12.12.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)】

```log
@ Fixed the infinite loop problem caused by script conflicts under notion.so.
@ Fix some known problems, optimize styles, and optimize code.
```

## Please note the following before using the font rendering script:

- The new version of the script has **a built-in default font rendering style. This style is my local configuration and may not be perfectly adapted to your computer**. Therefore, if the rendering effect does not reach the ideal state when using it for the first time, it is a **normal condition**. Please correct the parameters through the **script config interface** according to the configuration and settings of your own monitor to achieve the best display effect.
- If you encounter style anomalies when upgrading from an old version to the latest version, you can use the reset function to reset the data and use the latest rules to try to correct the problem. It is not recommended that you use backup and restore for major version (data reconstruction) updates. Please reconfigure the parameters and save them, and back up the new data again.

> Note: Under Win10/Win11, regardless of high-resolution screen or low-resolution screen, the best rendering effect can be obtained as long as the system or browser applies a zoom ratio of more than 150%. This is determined by the Windows default rendering mechanism.

## How to deal with script loading delay?

**Temporary solutions if script loading is delayed or styles are not loaded correctly:**

* For **Tampermonkey**: Enter the **Dashboard**, enter the **Settings** tab, scroll down to "**Experimental**", and change the injection mode to "**Instant**".
* For **Violentmonkey**: Enter the **Dashboard**, enter the **Settings** tab, find and check "**Sync Page Mode**" in **Advanced - General**.

## Feedback

**Note**: Unknown compatibility errors may occur when using the `Beta, Dev, Canary, Nightly` and other test branches of the browser and script manager. The script will not correct the errors of the test version. **If you must use the test version and It has extremely high requirements for scripts. It is recommended that you choose other similar scripts**. Because there is a very small probability that the data will be initialized abnormally, please back up your local data in time! ! ! **

**Please note for feedback issues**: To report script errors or style issues, please enter the **access URL** where the problem occurs if **only use this script**, the **browser version** used, Please send **the script manager version**, **error screenshot**, and **operation process** or **error prompt** (if any). The problem you encountered may not be reproduced locally.

* [Sharing of website style error correction settings.](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/42) (Chinese)
* [Share: How to set English fonts and Chinese fonts separately.](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/83) (Chinese)
* [How to correctly set parameters for different monitors and browsers?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/160) (Chinese)

> ### How to provide script error log? `New`
>
> 1. Turn on the script debugging switch first:
>    - v2023.04.08.1 or above, add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL to enable debugging mode.
>    - To use the old version change the code from `const IS_OPEN_DEBUG = false` to `true` at about line 54 and save.
> 2. Press **F12** in your browser to open the console, refresh, operate until the problem is reproduced, right-click in the console margin and select **Save As...**.
> 3. **Bug report** and package and upload the saved log file to [Github ISSUES](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。
> 4. During daily use, do not turn on the script debugging switch to avoid slow script execution or page lagging.

## Addition of customized fonts
If you need to add custom fonts to the font library, please follow [Help Instructions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/64). Chinese fonts from the font library [Download](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/46).

If you need to add a new font, please add the complete and accurate **Chinese and English name** and **PostScript name** of the font into the custom font table according to the **default format**.

The format is as follows: ```{"ch":"鸿蒙黑体", "en":"HarmonyOS Sans SC", "ps":"HarmonyOS_Sans_SC"}```

* When adding new fonts, fonts with font-weight of **Standard/Regular** are generally accepted. To adjust the font weight and boldness, please use the font stroke setting.
* "ps:" indicates the PostScript name, this is an optional attribute. In order to make the font take effect globally, please fill in the "ps:" attribute as much as possible.
* If the font does not have Chinese fontname, please use the English fontname or other language fontname instead.

当安装了新字体，要使其**立即生效**，请务必**重启浏览器**，并在**高级核心功能设置**中重建字体列表缓存。

- 注 1：自定义字体表的**编辑保存操作**会自动触发字体列表全局缓存的重建，无需额外手动处理。
- 注 2：若仅安装**内置字体表**定义的字体，重启浏览器后，需要**手动**重建字体列表全局缓存。

## 关于字体缩放

字体比例缩放（实验性功能）Beta 版，默认关闭，请在 **高级核心功能设置** 中打开字体缩放功能。

- **已知问题一：** 由于 Firefox (Gecko 内核) 的兼容性原因，仅修正了脚本内部坐标偏移问题，但会对部分网站样式、功能兼容不足，请根据需求酌情使用。**强烈建议您**：使用 Firefox 自身缩放功能替代(`Ctrl++`, `Ctrl+-`)。
- **已知问题二：** 针对视口单位 `vw, vh, vmin, vmax` 的修正已完成，解决了在字体缩放后视口单位长度不准确的问题。该功能为**实验性功能**，默认关闭，可在**高级核心功能设置**中开启。
  1. 部分站点因配置相关 CORS 策略，会使浏览器阻止对外部样式的获取（控制台 console 会看到相应报错，如：`No 'Access-Control-Allow-Origin' header is present on the requested resource.`），此时，可在扩展商店安装并开启 [Moesif Origin & CORS Changer](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)。
  2. 在部分应用了 CSP 策略的站点，浏览器可能会阻止内部样式的加载和解析（控制台 console 会看到相应的报错，如：`Refused to apply inline style because it violates the following Content Security Policy directive: "default-src 'self'".`），此时，可在扩展商店安装并开启 [Disable-CSP](https://chromewebstore.google.com/detail/disable-csp/hgegihapiofjgmmgigbblnjaicgjhoko)
  3. 使用其他CSP扩展也可解决此问题，如介意安全问题或有其他顾虑，请按以下方法关闭该功能：
     1. 在**字体渲染设置界面**内取消勾选**视口修正**选项，或将**字体缩放**设置为`1.0`后保存为独享数据。
     2. 在**高级核心功能设置**中单独关闭**视口单位修正**选项，或直接关闭**字体缩放功能**。（全局关闭）
- **未知情况：** 如遇到其他状况下的样式异常、坐标偏移，或其他相关问题，请及时向我[反馈](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。

---

# 优雅的搜索引擎跳转助手 `Google & Baidu Switcher.user.js`
 　[[查看源代码](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[访问 GreasyFork](https://greasyfork.org/scripts/12909)] _（GreasyFork不再处理Issues反馈）_

简介：“优雅的搜索引擎跳转助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染效果；还提供去除搜索链接重定向、屏蔽搜索结果广告、可视化参数设置、及自动更新检测等高级功能；兼容多个知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、搜狗、无追搜索、Yandex、360 搜索、头条搜索、百度开发者、Ecosia、Yahoo、You、Startpage、Brave、Yep、Swisscows等。

* [新手上路，请使用前仔细阅读脚本使用说明，以及当前页面内相关注意事项。](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E8%B7%B3%E8%BD%AC%E5%8A%A9%E6%89%8B)
* 自动更新检测默认开启，如无更新提示需求，可在“功能设置开关”中关闭它。

## version 2023.12.02.1 - 更新日志： 【🔥 [安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)】

```log
+ 更新 greasyfork.org 新版本 @require 地址。
+ 新增搜索结果过滤功能，拒绝垃圾与内容农场。
@ 移除失效的Fsou,新增中文搜索：无追搜索。
@ 重构去重定向功能，优化重定向链接解析效率。
@ 重构去广告功能，优化广告屏蔽效率和效果。
@ 修正一些已知问题，优化样式，优化代码。
```

## 最新功能介绍
- 新增搜索结果关键词高效过滤功能，杜绝内容农场与垃圾信息。`New!`
- 新增去除搜索结果及侧栏广告功能，优化广告屏蔽效率。
- 新增自定义搜索引擎选取功能（包含：百度、Google、Bing、Duckduckgo、搜狗、无追搜索、Yandex、360 搜索、头条搜索、百度开发者、Ecosia、Yahoo、You、Startpage、Brave、Yep、Swisscows等搜索引擎）
- 新增搜索结果链接去重定向功能，优化隐私参数屏蔽功能。
- 更智能的更新检测功能。

## 图标缓存的更新
访问[任意搜索引擎](https://www.baidu.com/s?wd=greasyfork&whoami=F9y4ng)，在地址栏内向 URL 添加 `?whoami=F9y4ng` 或 `&whoami=F9y4ng`，开启临时调试模式，即可自动更新搜索引擎站点的icons；或等待图标缓存过期（十五天）后自动更新图标缓存。

## 重要说明
新版本“**自动更新**”功能默认开启，如不需要，请在脚本菜单“**功能设置开关**”中，关闭**更新检测**即可。

- **反馈问题**：反馈脚本错误或样式问题，请把**仅使用本脚本**时发生问题的**访问网址**、使用的**浏览器版本**、**脚本管理器版本**、**错误截图**、以及**操作流程**、**错误提示**发出来，你遇到的问题不一定能在我本地复现。

- 一般来说，新版本发布将在**Github**进行，**GreasyFork**、**OpenUserJs**会自动同步。已开启自动更新检测功能的用户，脚本在访问搜索引擎时会进行自动更新。

---

# 自动关闭知乎登录提示 `Autoclose Zhihu Login.user.js`
 　[[查看源代码](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Autoclose%20Zhihu%20Login.user.js)] 　[[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)] 　[[访问 GreasyFork](https://greasyfork.org/scripts/463539)] _（GreasyFork不再处理Issues反馈）_

简介：自动关闭知乎登录提示，仅仅用于关闭自动弹出的登录提示，不干别的，未来也不会去干别的。

## version 2023.11.04.1 - 更新日志： 【🔥 [安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)】

```log
@ 优化脚本在safari中无法在document-start加载而造成的bug.
```

## 重要说明
### 浏览器版本要求：
```
Chrome >= 105; Edge >= 105; Safari >= 15.4; Firefox >= 103; Opera >= 91
```

### 注意：
* Firefox 使用时需在 `about:config` 中，将 `layout.css.has-selector.enabled` 改为 `true`.
* Blink 内核浏览器 `105 > Version >= 101`，可进入 `chrome://flags/#enable-experimental-web-platform-features` 改为 `Enabled` 后跨版本使用.
