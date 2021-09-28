# [**GreasyFork-Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE)
[![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master)
[![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues)
[![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/login?return_to=%2FF9y4ng%2FGreasyFork-Scripts)

## 字体渲染（自用脚本）[**Font Rendering.user.js**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font_Rendering)

简介：无需安装MacType，优化浏览器字体显示，让每个页面的中文字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染，兼容常用的 Greasemonkey 脚本和浏览器插件。

> `version 2021.09.28.1`

`!!! 重大版本更新，请使用前仔细查看 !!!` 【[**脚本使用说明**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font_Rendering)】`New`

`!!! 首次使用前请仔细阅读使用说明！仔细阅读使用说明！阅读使用说明 !!!`

`!!! 为保证您的数据安全，请及时备份您的本地数据！请勿使用来源未知的备份文件 !!!`

```text
! 重大版本更新，本次更新会重置设置数据，请更新前备份您的数据！！！
! 本次更新增添了新功能，请在恢复旧备份数据后重新备份您的新数据！！！
! 提前祝各位脚本用户“十一”国庆节快乐！！！

+ 新增“彩蛋”功能：自定义字体表添加。(请自行发现彩蛋吧！)
+ 新增字体表字体：剔骨仿宋 (tkFangSong)
@ 发布字体比例缩放RC版，修正Gecko(Firefox)因缩放引发的位移问题。
@ 修正部分Css及Js，兼容更多网站。
@ 修正bugs, 优化代码。
```

> **关于字体缩放**
>
> 字体比例缩放，目前为RC版的实验性功能，默认关闭，请在 ```VIP 高级功能开关``` 打开字体缩放功能。
>
> **`已知问题：`** Gecko(Firefox)内核，因Gecko内核对部分脚本及CSS限制的原因，对部分网站兼容性较差，且暂未找到修正方法，建议Gecko(Firefox)内核的用户谨慎使用该功能。
>
> > ```致Firefox用户：由于Firefox的浏览器缓存会偶尔出现问题（原因未知，概率较低，尤其在长时间刷新同一页面时），当您发现异常时请清空您的浏览器全部缓存(ctrl+shift+delete)，然后刷新页面重新尝试，很大几率会解决您遇到的问题。```

> **关于字体的添加**
>
> ```新增字体表自定义添加的功能彩蛋，请自行发现功能按钮吧！（灰度测试一段时间再公开）```
>
> 每当您的计算机安装了新字体，若要使其`立即生效`，请在“VIP 高级功能开关”中重建字体列表缓存。
>
> 如果您需要增加新的字体进入代码字体表，请将`完整且准确`的字体`中文全称`及`英文全称`告知。如：鸿蒙黑体 HarmonyOS Sans SC
>
> > 1. 新增字体，一般情况下只接受字重为```标准体/Regular```的字体，需调整字重（粗体）请使用字体描边进行设置。
> > 2. 另外，网络上很多字体存在各种修改版、Hack 版，非原版字体会造成字体名不一致，从而使得代码无法识别。

> **字体渲染（自用脚本）的新版本已完成，在使用新版脚本前，请注意以下事项：**
>
> 新版脚本中内置了默认的字体渲染样式，该样式为我本地配置，并不能完美适配于你的计算机，所以，首次使用时，如果出现渲染效果没有达到理想状态，属于正常情况。请根据**自有显示器的配置及设置**，通过**脚本配置界面**修正相关参数来达到最佳显示效果。如在使用过程中遇到错误或使用问题，请到 [@Github](https://github.com/F9y4ng/GreasyFork-Scripts/issues) 或 [@Greasyfork](https://greasyfork.org/scripts/416688/feedback) 给我留言反馈。

## 谷歌、百度、必应的搜索引擎跳转工具 [**Google & Baidu Switcher.user.js**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Google_Baidu_Switcher)

简介：最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓
存，再次载入使用，感谢使用！

> `version 3.8.20210928.1`

`!!! 重大版本更新，请使用前仔细查看 !!!` 【[**脚本使用说明**](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Google_Baidu_Switcher)】`New`

`!!! 自动更新检测默认开启 !!!`

```text
@ 修正Gecko内核因transform缩放造成的位移。
@ 优化CSS样式，解决一些特殊情况下的样式bug。
@ 修正bugs, 优化代码。
```

> **重要说明**
>
> 最新版本中“自动更新”功能默认开启，如不需要更新检测，请在脚本菜单中打开“跳转工具设置”，关闭 ```更新检测``` 即可。
>
> > 请反馈问题的朋友注意：反馈脚本错误或样式显示问题，请把发生问题的具体访问网址、使用的浏览器版本、脚本运行器的版本、相关错误的（仅开此脚本的情况下的）截图、以及具体操作流程或错误提示（如果有的话）发出来，你遇到的问题不一定能在其他地方复现。
>
> > 一般来说，最新及测试版的发布将在Github进行，GreasyFork会在24小时内自动同步。已开启自动更新检测功能的用户，客户端代码会根据更新频率设置进行自动更新。
>
