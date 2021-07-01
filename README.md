# `GreasyFork Scripts`

- ## **Font Rendering.user.js** (`version 2021.07.01.1`)

  简介：让每个页面的字体变得有质感，默认使用微软雅黑字体，亦可自定义设置多种中文字体，附加字体描边、字体重写、字体阴影、字体平滑、对特殊样式元素的过滤和许可等效果，脚本菜单中可使用设置界面进行参数设置，亦可对某域名下所有页面进行排除渲染。

  > `version 2021.07.01.1`

  重大版本更新，请使用前仔细查看 [**脚本使用说明**](https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)。```New```

  ```text
  @ 紧急修复跨页面实时同步的bug。
  ```

- ## **Google & Baidu Switcher.user.js** (`version 3.3.20210630.1`)

  简介：最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓存，再次载入使用，感谢使用！

  > `version 3.3.20210630.1`

  ```text
  @ 修正若干错误。
  @ 优化代码兼容性，消除样式冲突，减少与其他脚本的冲突。
  ```

  > [**重要说明：**](#)若要减少更新频率，请将代码中 const expireTime = "4h" 的 4h（4小时）修改为20h（20小时）或 5d（5天）或 2w（２周）等更长的时间。修改完成保存后重新打开页面或刷新页面，打开TamperMonkey/ViolentMonkey脚本菜单，根据菜单中的提示，进行缓存时间的重置操作即可。([首次修改刷新页面后自动应用，无需任何菜单操作。](#)）

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
