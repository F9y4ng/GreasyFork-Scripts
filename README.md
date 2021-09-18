# [**GreasyFork-Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE)
[![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master)
[![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues)
[![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/login?return_to=%2FF9y4ng%2FGreasyFork-Scripts)

## 字体渲染（自用脚本）[**Font Rendering.user.js**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font_Rendering) (`version 2021.09.19.2`)

简介：无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的 Greasemonkey 脚本和浏览器插件。

> `version 2021.09.19.2`

`!!! 重大版本更新，请使用前仔细查看 !!!` 【[**脚本使用说明**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font_Rendering)】`New`

`!!! 首次使用前请仔细阅读使用说明！仔细阅读使用说明！阅读使用说明 !!!`

`!!! 为保证您的数据安全，请及时备份您的本地数据！请勿使用来源未知的备份文件 !!!`

```text
! 重大版本更新，本次更新会重置设置数据，请更新前备份您的数据！！
! 由于字体列表缓存逻辑改变，程序会自动为每个域名网站自动重建缓存。

+ 更换滑块算法函数，提高对个别网站的兼容性。
@ 提升脚本配置菜单及页面的容错率，减少出错几率。
@ 优化字体缩放功能，修正偏移问题。(Gecko & Presto)
@ 优化字体列表缓存，独立缓存每个网站设置，缓存时间24小时。
@ 优化与MarkDownload浏览器扩展的兼容性。
@ 优化CSS样式，优化部分代码逻辑，兼容更多网站。
@ 修正bugs, 优化代码。
```

> **关于字体缩放**
>
> 字体比例缩放，目前为Beta版的实验性功能，默认关闭，如需试用，请在 ```VIP 高级功能开关``` 打开字体缩放功能。经本地测试，此功能在WebKit(Chrome)内核下运行良好；在Gecko(Firefox)及Presto(Opera)内核下，由于内核对脚本及CSS样式的限制，对部分网站兼容性较差，且暂无修正的方法，所以建议Gecko(Firefox)及Presto(Opera)的用户谨慎使用该功能。
>
> **关于字体的添加**
>
> ```每当您的计算机安装了新字体，若要使其`立即生效`，请在“VIP 高级功能开关”中重建字体列表缓存。```
>
> 如果您需要增加新的字体进入代码字体表，请将`完整且准确`的字体`中文全称`及`英文全称`告知。如：鸿蒙黑体 HarmonyOS Sans SC
>
> > 1. 新增字体，一般情况下只接受字重为```标准体/Regular```的字体，需调整字重（粗体）请使用字体描边进行设置。
> > 2. 另外，网络上很多字体存在各种修改版、Hack 版，非原版字体会造成字体名不一致，从而使得代码无法识别。
>
> **字体渲染（自用脚本）的新版本已完成，在使用新版脚本前，请注意以下事项：**
>
> 新版脚本中内置了默认的字体渲染样式，该样式为我本地计算机的配置，并不能完美适配于你的计算机，所以，首次使用时，如果出现渲染效果没有达到理想状态，属于正常情况。
> 请根据**自有显示器的配置及设置**的情况，通过**脚本配置界面**修正相关的参数来达到最佳的显示效果。如在使用过程中遇到错误或使用问题，请到
> [@Github](https://github.com/F9y4ng/GreasyFork-Scripts/issues) 或 [@Greasyfork](https://greasyfork.org/scripts/416688/feedback) 给我留言反馈。

## 谷歌、百度、必应的搜索引擎跳转工具 [**Google & Baidu Switcher.user.js**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Google_Baidu_Switcher) (`version 3.7.20210919.1`)

简介：最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓
存，再次载入使用，感谢使用！

> `version 3.7.20210919.1`

`!!! 重大版本更新，请使用前仔细查看 !!!` 【[**脚本使用说明**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Google_Baidu_Switcher)】`New`

`!!! 自动更新检测默认开启 !!!`

```text
@ 修正语言适配的错误。
@ 修正bugs, 优化代码。
```

> **重要说明**
>
>```最新版本已新增脚本设置菜单配置页面，无需修改代码来完成参数设置。```
>
> > 请反馈问题的朋友注意：反应脚本错误或样式显示问题，请把使用的浏览器版本、脚本运行器的版本、以及相关错误的（仅开此脚本的情况下的）截图发出来，你遇到的问题不一定能在其他地方复现。
>
> > 一般来说，最新及测试版的发布将在Github进行，GreasyFork会在24小时内自动同步。已开启自动更新检测功能的用户，客户端代码会根据更新频率设置进行自动更新。
>
