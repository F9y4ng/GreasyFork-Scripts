# `GreasyFork Scripts`

- ## **Font Rendering.user.js** (`version 2021.06.20.6`)

  简介：让每个页面的字体变得有质感，默认使用苹方字体，附加字体描边、字体阴影、字体平滑等效果，自用脚本不处理外部需求。

  > `version 2021.06.20.6`

  重大版本更新，请使用前仔细查看 [**脚本使用说明**](https://openuserjs.org/scripts/t3xtf0rm4tgmail.com/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)。

  ```text
  + 增加脚本设置UI，从脚本菜单触发。
  + 增加排除域名功能，从脚本菜单触发。
  + 增加字体全局重写功能。
  @ 重构全部代码，修正代码若干bugs.
  ```

- ## **Google & Baidu Switcher.user.js** (`version 3.2.20210614.3`)

  简介：最新版本的集合谷歌、百度、必应的搜索引擎跳转工具，必应跳转可在菜单进行自定义设置。此版本无外部脚本调用，更快速和准确的进行按钮定位，显示速度大大提升。如有异常请清空浏览器缓存，再次载入使用，感谢使用！

  > `version 3.2.20210614.3`

  ```text
  @ 修正@icon数据因不可访问等网络问题造成Greasemonkey插件不能保存脚本的Bug.
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
