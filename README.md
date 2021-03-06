# `GreasyFork Scripts`

- ## **Font Rendering.user.js** (`version 2021.07.13.3`)

  简介：让每个页面的字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染。

  > `version 2021.07.13.3`

  重大版本更新，请使用前仔细查看 [**脚本使用说明**](https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)。```New```

  ```text
  + 新增本地备份功能(Beta.2)：可实现跨设备、跨浏览器数据共享。
  @ 修正因延迟加载造成脚本错误，使配置页面失效的问题。
  @ 修正程序bugs，优化代码。
  ```

  > [关于字体的添加](#)
  >
  > 如果您需要增加新的字体进入代码字体表，请将```完整且准确```的字体```中文全称```及```英文全称```告知。如：鸿蒙黑体 HarmonyOS Sans SC
  >>另外，网络上很多字体存在各种修改版、Hack版，非原版字体会造成字体名不一致，从而使得代码无法识别。
  >
  > [字体渲染（自用脚本）的新版本已完成，在使用新版脚本前，请注意以下事项：](#)
  >
  > 新版脚本中内置了默认的字体渲染样式，该样式为我本地计算机的配置，可能并不能与你的计算机应用相同的配置参数，所以，首次使用时，如果出现渲染效果没有达到理想状态，属于正常情况。请你根据**自有显示器的配置及设置**的情况，通过[脚本配置界面](#脚本设置界面)修正相关的参数来达到最佳的显示效果。如在使用过程中遇到错误或使用问题，请到 [@Github](https://github.com/F9y4ng/GreasyFork-Scripts/issues) 或 [@Greasyfork](https://greasyfork.org/scripts/416688/feedback) 给我留言反馈。

- ## **Google & Baidu Switcher.user.js** (`version 3.3.20210715.2`)

  简介：最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓存，再次载入使用，感谢使用！

  > `version 3.3.20210715.2`

  重大版本更新，请使用前仔细查看 [**脚本使用说明**](https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/Google_baidu_Switcher_(ALL_in_One))。```New```

  ```text
  @ 修正google ncr的判断在firefox下的兼容性，以及与多种脚本扩展的兼容性。
  ! 已知bug，Firefox下使用greasemonkey扩展运行脚本时，由于内置函数的缺陷，使得新开窗口不能自动关闭的bug.
  @ 修正bug，优化代码。
  ```

  > [**重要说明**](#)
  >
  > 若要关闭更新检测功能，请将代码中 ```const isVersionDetection = true;``` 设置为```const isVersionDetection = false;```即可永久关闭更新检测。
  >
  > 若要减少更新频率，请将代码中```const expireTime = "4h"```的 4h（4小时）修改为20h（20小时）或 5d（5天）或 2w（２周）等更长的时间。修改完成保存后重新打开页面或刷新页面，打开TamperMonkey/ViolentMonkey脚本菜单，根据菜单中的提示，进行缓存时间的重置操作即可。([首次修改刷新页面后自动应用，无需任何菜单操作。](#)）

- ## **PowerlinePro.psm1** (`version 1.0.0`)

  简介：Powershell Themes - 修正原版的错误，添加部分功能，字体建议使用 *"Sarasa Term SC"*，字号 *"14"*。

  <sub>**VSCode 配色**</sub>

    ```json
    "workbench.colorCustomizations": {
      "terminal.background": "#FFFFFF",
      "terminal.foreground": "#4e5258",
      "terminalCursor.background": "#6a7586",
      "terminalCursor.foreground": "#134979",
      "terminal.ansiBlack": "#FFFFFF",
      "terminal.ansiBlue": "#3971ED",
      "terminal.ansiBrightBlack": "#B4B7B4",
      "terminal.ansiBrightBlue": "#677fb6",
      "terminal.ansiBrightCyan": "#33353a",
      "terminal.ansiBrightGreen": "#198844",
      "terminal.ansiBrightMagenta": "#d2049b",
      "terminal.ansiBrightRed": "#CC342B",
      "terminal.ansiBrightWhite": "#e2e8ee",
      "terminal.ansiBrightYellow": "#FBA922",
      "terminal.ansiCyan": "#3971ED",
      "terminal.ansiGreen": "#198844",
      "terminal.ansiMagenta": "#A36AC7",
      "terminal.ansiRed": "#CC342B",
      "terminal.ansiWhite": "#373B41",
      "terminal.ansiYellow": "#FBA922"
    }
    ```
