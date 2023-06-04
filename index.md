# [**GreasyFork Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) (F9y4ng) [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE)
[![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master)
[![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues)
[![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/F9y4ng/GreasyFork-Scripts/stargazers)

- 请先根据您的浏览器安装一款**用户脚本管理器**扩展（如：Tampermonkey）然后再尝试**安装脚本**。
- **Chrome** 及 **Firefox** 推荐安装使用 **Tampermonkey**，**Safari** 推荐安装使用 **Userscripts**. `New!`
- 使用 **Adguard桌面版** 或 **Userscripts** 等脚本管理器，可通过 [键盘快捷键](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89#user-content-hotkey) 呼出脚本管理菜单。

***

# 字体渲染（自用脚本） `Font Rendering.user.js`
 　[[查看源代码](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Font%20Rendering.user.js)] 　[[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)] 　[[访问 GreasyFork](https://greasyfork.org/scripts/416688)] _（GreasyFork不再处理Issues反馈）_

简介：无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑字体”，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的Greasemonkey脚本和浏览器扩展。

* [新手上路，请使用前仔细阅读脚本使用说明，以及当前页面内相关注意事项。](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)
* 脚本错误、异常请反馈至[[Issues](https://github.com/F9y4ng/GreasyFork-Scripts/issues)], 字体、渲染样式、乱码问题请反馈至[[Discussions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/categories/%E9%97%AE%E7%AD%94%E4%B8%93%E5%8C%BA-question-answer)]。
* 为保证您的数据安全，请及时备份您的本地数据！请勿使用来源未知的备份文件。

## version 2023.05.20.1 - 更新日志： 【🔥[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)】

```log
@ 优化样式加载逻辑，修正复合条件样式加载监测的问题。
@ 修正粗体修正造成的文本闪烁，关闭编辑型站点的修正。
@ 修正字体列表在字体选取后去除时字体排序错误的问题。
@ 修正某些站点在特定条件下出现死循环造成的加载错误。
@ 修正因CSP策略阻止造成的样式重复尝试加载的问题。
@ 修正一些已知的小问题，优化样式，优化代码。
```

## **字体渲染** 新版本，使用前请注意以下事项：

- 新版脚本中**内置了默认的字体渲染样式，该样式为我的本地配置，并不能完美适配于你的计算机**。所以，首次使用时，如果出现渲染效果没有达到理想状态，属于**正常情况**。请根据**自有显示器的配置及设置**，通过**脚本配置界面**修正相关参数来达到最佳显示效果。
- 老用户从旧版本升级至最新版时，如遇到样式异常，可通过重置功能使用最新的过滤规则来尝试纠正问题，再重新配置个性化数据保存。**强迫症用户**建议重置所有配置数据，使用最新规则重新配置渲染参数并保存，记得重新备份数据。
- 如在使用过程中遇到错误或使用问题，请及时向我[反馈](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。

> ##### 注：在 WIN10 系统下，不论高分屏或低分屏，系统或浏览器应用 150%以上的缩放率可获得最佳的渲染效果，这是 WIN10 默认字体渲染所导致的。

## 关于Manifest V3

脚本管理器Tampermonkey v4.19.0、Violentmonkey v2.14.0都已开始对Manifest V3进行兼容和代码的重构，在新API的影响下，会造成脚本脚本加载延迟的问题（尤其在 `@run-at` 方式为 `document-start` 时最为明显）。以下为针对以上两个脚本管理器的处理办法：

* 针对**Tampermonkey v4.19.0+**：进入脚本管理器管理面板，进入设置标签页，下拉至“实验”，将注入模式改为“即时”。

* 针对**Violentmonkey v2.14.0+**：进入脚本管理器控制台界面，进入设置标签页，在高级-通用中找到并勾选“同步 page 模式”。

## 关于问题反馈

**注意**：使用浏览器或脚本管理器的`Beta`、`Dev`、`Canary`、`Nightly`等测试分支版本有可能造成未知的兼容性问题或异常错误，本脚本不会针对测试版本产生的错误进行修正，**对于必须使用测试版本并对脚本处理效果有极高要求的用户，建议你停用本脚本选择其他同类脚本**。因有极小概率发生因数据兼容性错误造成本地数据被异常初始化，**为确保数据安全，请及时且定期备份您的本地数据。**

请反馈问题的朋友注意：反馈脚本错误或样式显示问题，请把**仅使用本脚本的情况下**发生问题的**具体访问网址**、使用的**浏览器版本**、**脚本运行器版**、**相关错误的截图**、以及**具体操作流程**或**错误提示**（如果有的话）发出来，你遇到的问题不一定能在其他地方复现。

* [关于个别网站样式错误修正的设置分享，不定期更新，自取自用。](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/42)
* [分享：关于分别设置英文字体和中文字体的方法。](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/83)
* [如何正确地对不同显示器、浏览器设定字体渲染参数？](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/160)

> ### 如何提供脚本错误日志？ `New`
>
> 1. 先打开脚本调试开关：
>    - v2023.04.08.1 以上版本，向 URL 添加 `?whoami=F9y4ng` 或 `&whoami=F9y4ng`，开启临时调试模式。
>    - 使用旧版本需将代码大约第 54 行 `const IS_OPEN_DEBUG = false` 改为 `true`，并保存。
> 2. 在浏览器中按 F12 打开控制台面板，刷新页面，操作直至复现问题，在控制台空白处右键菜单选择 **另存为...**。
> 3. 进行 **错误报告（Bug report）**，并将保存好的日志文件打包上传至 [Github ISSUES](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。
> 4. 日常使用时，请勿开启脚本调试开关，以免造成脚本执行缓慢或页面卡顿等情况。

## 关于字体的添加
**如果您需要向字体表添加自定义字体，请按[帮助说明](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/64)进行操作。** 字体表字体及其他中文字体分享：[点这里下载](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/46)

如果您需要增加新的字体进入代码字体表，请将 **完整且准确** 的字体 **中英文全称** 及 **PostScript名称** 按 **预设格式** 添加进自定义字体列表。

格式如右：```{"ch":"鸿蒙黑体", "en":"HarmonyOS Sans SC", "ps":"HarmonyOS_Sans_SC"}```
* 新增字体，一般情况下只接受字重为 **标准体/常规体/Regular** 的字体，如需调整字重（粗体）请使用字体描边进行设置。
* 网络上很多字体存在各种修改版、Hack 版，非原版字体会造成字体名不一致，错误的字体名称会导致代码无法正确识别字体。

 每当计算机安装了新字体，要使其**立即生效**，请先重启浏览器，然后在脚本菜单“**高级核心功能设置**”中重建字体列表全局缓存。
* 注1：计算机安装新字体后，请及时**重启浏览器**，以确保新的系统字体缓存在浏览器生效。
* 注2：自定义字体表的**保存操作**会自动触发字体列表全局缓存的重建，无需额外手动处理。
* 注3：若仅安装**内置字体表**定义的字体，重启浏览器后，需要**手动**重建字体列表全局缓存。

## 关于字体缩放

字体比例缩放（实验性功能）Beta 版，默认关闭，请在 **高级核心功能设置** 中打开字体缩放功能。

- **已知问题一：** 由于 Firefox(Gecko 内核)的兼容性原因，仅修正了脚本内部坐标偏移问题，但会对部分网站样式、功能兼容不足，造成样式错乱、页面动作缺失等问题，请根据实际需求酌情使用。**强烈建议您**：使用 Firefox 浏览器自身缩放功能替代(`Ctrl++`, `Ctrl+-`)。
- **已知问题二：** 针对视口单位 `vw, vh, vmin, vmax` 的修正已完成，解决了在字体缩放后视口单位长度不准确的问题。该功能为**实验性功能**，在核心高级功能中默认开启。在日常使用时，遇到以下特殊情况的处理方法：
  1. 部分站点因配置相关 CORS 策略，会使浏览器阻止对外部样式的获取（控制台 console 会看到相应报错，如：`No 'Access-Control-Allow-Origin' header is present on the requested resource.`），此时，可在扩展商店安装并开启 [Allow CORS: Access-Control-Allow-origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)。
  2. 在部分应用了 CSP 策略的站点，浏览器可能会阻止内部样式的加载和解析（控制台 console 会看到相应的报错，如：`Refused to apply inline style because it violates the following Content Security Policy directive: "default-src 'self'".`），此时，可在扩展商店安装并开启 [Allow CSP: Content-Security-Policy](https://chrome.google.com/webstore/detail/allow-csp-content-securit/hnojoemndpdjofcdaonbefcfecpjfflh)
  3. 使用其他同类扩展也可解决以上问题，如介意安全问题、或有其他顾虑、或不想使用该功能，请在高级核心功能设置中关闭**视口单位修正选项**或**字体缩放功能选项**，或将字体缩放设置为 `1.0` 后保存为站点独享数据。
- **未知情况：** 如遇到其他状况下的样式异常、坐标偏移，或其他相关问题，请及时向我[反馈](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。

---

# 优雅的搜索引擎跳转助手 `Google & Baidu Switcher.user.js`
 　[[查看源代码](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[访问 GreasyFork](https://greasyfork.org/scripts/12909)] _（GreasyFork不再处理Issues反馈）_

简介：“优雅的搜索引擎跳转助手”方便用户从特定的搜索引擎跳转到另一个搜索引擎，以实现更优雅的搜索体验；并支持自定义常用搜索引擎、优化搜索结果关键词渲染效果。此外，该脚本还提供了去除搜索链接重定向、屏蔽搜索结果中的广告、可视化搜索参数设置、以及自动更新检测等高级功能，并兼容世界上十多个知名搜索引擎，如Baidu, Google, Bing, Duckduckgo, Yandex, You等。

* [新手上路，请使用前仔细阅读脚本使用说明，以及当前页面内相关注意事项。](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E8%B7%B3%E8%BD%AC%E5%8A%A9%E6%89%8B)
* 自动更新检测默认开启，如无更新提示需求，可在“功能设置开关”中关闭它。

## version 2023.05.13.1 - 更新日志： 【🔥 [安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)】

```log
@ 优化Bing.com的链接属性颜色。
@ 更新Yandex.com/Yandex.ru的广告过滤规则。
@ 修正一些小问题，优化样式，优化代码。
```

## 最新功能介绍
* 新增去除搜索结果及侧栏广告功能。`New!`
* 新增自定义搜索引擎选取功能。（包含：百度、Google、Bing、Duckduckgo、搜狗、F搜、Yandex、360搜索、头条搜索、百度开发者、Ecosia、Neeva、You、Startpage搜索等）
* 新增搜索结果链接去重定向功能。
* 更智能的更新检测功能。

## 重要说明
最新版本中“**自动更新**”功能默认开启，如不需要更新检测，请在脚本菜单中打开“功能设置开关”，关闭 **```更新检测```** 即可。

* 请反馈问题的朋友注意：反馈脚本错误或样式显示问题，请把发生问题的**具体访问网址**、使用的**浏览器版本**、**脚本运行器版**、**相关错误的截图**（仅开此脚本的情况下的）、以及**具体操作流程**或**错误提示**（如果有的话）发出来，你遇到的问题不一定能在其他地方复现。

* 一般来说，最新及测试版的发布将在**Github**进行，**GreasyFork**会在24小时内自动同步。已开启自动更新检测功能的用户，客户端代码会根据更新频率设置进行自动更新。
