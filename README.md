# [**GreasyFork-Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) - F9y4ng - [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

**页面语言** (**Language**) |  中文 (Chinese) | [英语 (English)](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/README_EN.md)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE) [![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master) [![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues) [![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/F9y4ng/GreasyFork-Scripts/stargazers)

- 请先安装**脚本管理器**扩展(如：Tampermonkey, Violentmonkey, Greasemonkey)，然后再**安装脚本**。
- **Chrome**, **Firefox** 推荐安装 **Tampermonkey/Violentmonkey**，**Safari** 推荐安装 **Tampermonkey**.
- 使用 **Adguard桌面版** 或 **Userscripts** 等脚本管理器，可通过**键盘快捷键**呼出脚本管理菜单。

> ## 郑重声明
> 某些魔改版本的Blink内核浏览器，关闭 **DirectWrite** 功能，会造成大部分字体无法被程序识别，或出现非ASCII字符与Emoji图标无法被正确渲染的问题。**重要提示**：后续所有脚本更新不再对应用 _`disabled DirectWrite`_ 的浏览器做代码兼容和问题解答，要使用该项目内的脚本，建议您使用主流浏览器。

---

## 字体渲染（自用脚本） [`Font Rendering.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Font%20Rendering.user.js)

简介：无需安装MacType，优化浏览器字体渲染效果，让每个页面的字体变得更有质感。默认使用“微软雅黑字体”，也可根据喜好自定义其他字体使用。脚本针对浏览器字体渲染提供了字体重写、字体平滑、字体缩放、字体描边、字体阴影、对特殊样式元素的过滤和许可、自定义等宽字体等高级功能。脚本支持全局渲染与个性化渲染功能，可通过“单击脚本管理器图标”或“使用快捷键”呼出配置界面进行参数配置。脚本已兼容绝大部分主流浏览器及主流脚本管理器，且兼容常用的油猴脚本和浏览器扩展。

- [新手上路，请使用前仔细阅读脚本使用说明，以及当前页面内相关注意事项。](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)
- 脚本错误、异常请反馈至{[Issues](https://github.com/F9y4ng/GreasyFork-Scripts/issues)}, 字体、渲染样式、乱码问题请反馈至{[Discussions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/categories/%E9%97%AE%E7%AD%94%E4%B8%93%E5%8C%BA-question-answer)}。
- 为保证您的数据安全，请及时备份您的本地数据！请勿使用来源未知的备份文件。

### version 2023.12.12.1 - 更新日志： 【🔥[安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)】

```log
@ 修正在notion.so下脚本冲突造成的死循环问题。
@ 修正一些已知的问题，优化样式，优化代码。
```

### **字体渲染** 新版本，使用前请注意以下事项：

- 新版脚本中**内置了默认的字体渲染样式，该样式为我的本地配置，并不能完美适配于你的计算机**。所以，首次使用时，如果出现渲染效果没有达到理想状态，属于**正常情况**。请根据**自有显示器的配置及设置**，通过**脚本配置界面**修正相关参数来达到最佳显示效果。
- 老用户从旧版本升级至最新版时，如遇到样式异常，可通过重置功能重置数据来使用最新规则来尝试纠正问题。大版本（数据重建）更新不建议您使用备份还原，请重新配置渲染参数并保存，记得再次备份新数据。

<details>
<summary>点击查看 - 关于脚本延迟加载的处理办法</summary>

#### 如出现脚本加载延迟、或未正确加载样式的临时处理办法：
* 针对**Tampermonkey**：进入**管理面板**，进入**设置**标签页，下拉至“**实验**”，将注入模式改为“**即时**”。

* 针对**Violentmonkey**：进入**控制台界面**，进入**设置**标签页，在**高级-通用**中勾选“**同步 page 模式**”。

 </details>

> 注：Win10/11下，系统或浏览器应用150%以上缩放率可获得最佳渲染效果，这是Windows默认渲染决定的。

### 关于问题反馈

**注意**：使用浏览器、脚本管理器的`Beta、Dev、Canary、Nightly`等测试分支可能出现未知的兼容错误，脚本不会修正测试版本的错误，**如必须使用测试版本并对脚本有极高要求，建议你选择其他同类脚本**。因有极小概率发生数据被异常初始化，**请及时备份您的本地数据！！！**

**反馈问题请注意**：反馈脚本错误或样式问题，请把**仅使用本脚本**情况下发生问题的**访问网址**、使用的**浏览器版本**、**脚本管理器版本**、**错误截图**、以及**操作流程**或**错误提示**（如果有的话）发出来，你遇到的问题不一定能在我本地复现。

- [关于个别网站样式错误修正的设置分享，不定期更新，自取自用。](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/42)
- [分享：关于分别设置英文字体和中文字体的方法。](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/83)
- [如何正确地对不同显示器、浏览器设定字体渲染参数？](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/160)

<details>
<summary>点击查看 - 如何提供脚本错误日志？</summary>

#### 获取并上传脚本错误日志
1. 先打开脚本调试开关：
    - v2023.04.08.1 以上版本，向 URL 添加 `?whoami=F9y4ng` 或 `&whoami=F9y4ng`，开启临时调试模式。
    - 使用旧版本需将代码大约第 54 行 `const IS_OPEN_DEBUG = false` 改为 `true`，并保存。

2. 在浏览器中按 F12 打开控制台面板，刷新页面，操作直至复现问题，在控制台空白处右键菜单选择 **另存为...**。

3. 进行 **错误报告（Bug report）**，并将保存好的日志文件打包上传至 [Github ISSUES](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。

4. 日常使用时，请勿开启脚本调试开关，以免造成脚本执行缓慢等情况。

</details>

### 关于自定义字体的添加

**如果您需要向字体表添加自定义字体，请按[帮助说明](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/64)进行操作。** 字体表字体及其他中文字体分享：[点这里下载](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/46)

请将 **完整且准确** 的字体 **中英文名称** 及 **PostScript 名称** 按 **预设格式** 添加进自定义字体列表。

格式如右：`{"ch":"鸿蒙黑体", "en":"HarmonyOS Sans SC", "ps":"HarmonyOS_Sans_SC"}`

<details>
<summary>点击查看 - 添加新字体到自定义字体表的注意事项</summary>

#### 自定义字体的注意事项
- 新增字体，一般接受字重为 **标准体/Regular** 的字体，需调整字重粗体请使用字体描边进行设置。
- “ps:”表示字体 PostScript 名称，此为可选属性。为实现字体全局生效，请尽可能填写"ps:"属性。
- 很多字体存在各种修改版本，非原版字体会造成字体名或属性不一致，从而使得代码无法识别。

每当计算机安装了新字体，要使其**立即生效**，请务必先**重启浏览器**，并在“**高级核心功能设置**”中重建字体列表缓存。

- 注 1：自定义字体表的**编辑保存操作**会自动触发字体列表全局缓存的重建，无需额外手动处理。
- 注 2：若仅安装**内置字体表**定义的字体，重启浏览器后，需要**手动**重建字体列表全局缓存。
</details>

### 关于字体缩放

字体比例缩放（实验性功能）Beta 版，默认关闭，请在 **高级核心功能设置** 中打开字体缩放功能。

- **已知问题一：** 由于 Firefox (Gecko 内核) 的兼容性原因，仅修正了脚本内部坐标偏移问题，但会对部分网站样式、功能兼容不足，请根据需求酌情使用。**强烈建议您**：使用 Firefox 自身缩放功能替代(`Ctrl++`, `Ctrl+-`)。

- **已知问题二：** 针对视口单位 `vw, vh, vmin, vmax` 的修正已完成，已解决在字体缩放后视口单位长度不准确的问题。该功能为**实验性功能**，默认关闭，可在**高级核心功能设置**中开启。

    <details>
    <summary>开启视口修正功能后，日常使用时遇到样式异常时，请点此处查看解决办法。</summary>

    #### 浏览器CORS/CSP策略拒绝第三方样式的加载
    1. 部分站点因配置相关 CORS 策略，会使浏览器阻止对外部样式的获取（控制台 console 会看到相应报错，如：`No 'Access-Control-Allow-Origin' header is present on the requested resource.`），此时，可在扩展商店安装并开启 [Moesif Origin & CORS Changer](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)。

    2. 在部分应用了 CSP 策略的站点，浏览器可能会阻止内部样式的加载和解析（控制台 console 会看到相应的报错，如：`Refused to apply inline style because it violates the following Content Security Policy directive: "default-src 'self'".`），此时，可在扩展商店安装并开启 [Disable-CSP](https://chromewebstore.google.com/detail/disable-csp/hgegihapiofjgmmgigbblnjaicgjhoko)

    3. 使用其他CSP扩展也可解决此问题，如介意安全问题或有其他顾虑，请按以下方法关闭该功能：
          - 在**字体渲染设置界面**内取消勾选**视口修正**选项，或将**字体缩放**设置为`1.0`后保存为独享数据。
          - 在**高级核心功能设置**中单独关闭**视口单位修正**选项，或直接关闭**字体缩放功能**。(全局关闭)
    </details>

 - **未知情况：** 如遇到其他状况下的样式异常、坐标偏移，或其他相关问题，请及时向我[反馈](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。

---

## 优雅的搜索引擎跳转助手 [`Google & Baidu Switcher.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Google%20%26%20Baidu%20Switcher.user.js)

简介：“优雅的搜索引擎跳转助手”方便用户在不同的搜索引擎之间跳转；支持自定义常用搜索引擎、关键词高亮渲染效果；还提供去除搜索链接重定向、屏蔽搜索结果广告、可视化参数设置、及自动更新检测等高级功能；兼容多个知名搜索引擎，如Baidu、Google、Bing、Duckduckgo、搜狗、无追搜索、Yandex、360 搜索、头条搜索、百度开发者、Ecosia、Yahoo、You、Startpage、Brave、Yep、Swisscows等。

- [新手上路，请使用前仔细阅读脚本使用说明，以及当前页面内相关注意事项。](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E8%B7%B3%E8%BD%AC%E5%8A%A9%E6%89%8B)
- 自动更新检测默认开启，如无更新提示需求，可在“功能设置开关”中关闭它。

### version 2023.12.02.1 - 更新日志： 【🔥 [安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)】

```log
+ 更新 greasyfork.org 新版本 @require 地址。
+ 新增搜索结果过滤功能，拒绝垃圾与内容农场。
@ 移除失效的Fsou,新增中文搜索：无追搜索。
@ 重构去重定向功能，优化重定向链接解析效率。
@ 重构去广告功能，优化广告屏蔽效率和效果。
@ 修正一些已知问题，优化样式，优化代码。
```

### 最新功能介绍

- 新增搜索结果关键词高效过滤功能，杜绝内容农场与垃圾信息。`New!`
- 新增去除搜索结果及侧栏广告功能，优化广告屏蔽效率。
- 新增自定义搜索引擎选取功能（包含：百度、Google、Bing、Duckduckgo、搜狗、无追搜索、Yandex、360 搜索、头条搜索、百度开发者、Ecosia、Yahoo、You、Startpage、Brave、Yep、Swisscows搜索等常见的搜索引擎）
- 新增搜索结果链接去重定向功能，优化隐私参数屏蔽功能。
- 更智能的更新检测功能。

### 图标缓存的更新
访问[任意搜索引擎](https://www.baidu.com/s?wd=greasyfork&whoami=F9y4ng)，在地址栏内向 URL 添加 `?whoami=F9y4ng` 或 `&whoami=F9y4ng`，开启临时调试模式，即可自动更新搜索引擎站点的icons；或等待图标缓存过期（十五天）后自动更新图标缓存。

### 重要说明
新版本“**自动更新**”功能默认开启，如不需要更新检测，请在脚本菜单“功能设置开关”中，关闭 **更新检测** 即可。

- **反馈问题请注意**：反馈脚本错误或样式问题，请把**仅使用本脚本**情况下发生问题的**访问网址**、使用的**浏览器版本**、**脚本管理器版本**、**错误截图**、以及**操作流程**或**错误提示**发出来，你遇到的问题不一定能在我本地复现。

- 一般来说，新版本发布将在**Github**进行，**GreasyFork**、**OpenUserJs**会自动同步。已开启自动更新检测功能的用户，脚本在访问搜索引擎时会进行自动更新。

---

## 自动关闭知乎登录提示 [`Autoclose Zhihu Login.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Autoclose%20Zhihu%20Login.user.js)

简介：自动关闭知乎登录提示，仅仅用于关闭自动弹出的登录提示，不干别的，未来也不会去干别的。

### version 2023.11.04.1 - 更新日志： 【🔥 [安装此脚本](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)】

```log
@ 修正脚本在safari中无法在document-start加载而造成的bug.
```

### 重要说明
#### 浏览器版本要求：
```
Chrome >= 105; Edge >= 105; Safari >= 15.4; Firefox >= 103; Opera >= 91
```

#### 注意：
* Firefox 使用时需在 `about:config` 中，将 `layout.css.has-selector.enabled` 改为 `true`.
* Blink 内核浏览器 `105 > Version >= 101`，可进入 `chrome://flags/#enable-experimental-web-platform-features` 改为 `Enabled` 后跨版本使用.
