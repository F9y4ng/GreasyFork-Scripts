# [**GreasyFork Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/) (F9y4ng) [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki)

**页面语言** (**Language**) |  [中文 (Chinese)](index.md) | 英语 (English)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE)
[![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master)
[![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues)
[![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/F9y4ng/GreasyFork-Scripts/stargazers)

- Please install the **script manager extension** (_as Tampermonkey_) first, and then **install the scripts**.
- **Chrome**/**Firefox** recommend **Tampermonkey/Violentmonkey**, **Safari** recommend **Tampermonkey**.
- Using **Adguard Desktop** or **Userscripts**, the script menus can be called up via **keyboard shortcuts**.

> ## Declaration 
> For browsers that unofficially modify the Blink kernel and turn off DirectWrite, some fonts may not be recognized by the program, or non-ASCII characters and Emoji icons may not be rendered correctly. **Important note:** The script updates will no longer provide code compatibility and troubleshooting for browsers with _`disabled DirectWrite`_. To use the scripts in this project, it is recommended that you use the official browser.

***

# Font Rendering (Customized) `Font Rendering.user.js`
 　[[View source code](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Font%20Rendering.user.js)] 　[[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)] 　[[Visit GreasyFork](https://greasyfork.org/scripts/416688)] _（Issues aren't processed at GreasyFork）_

**Introduction:** Without MacType, improve browser displaying more textured. "Microsoft Yahei" is used by default. For browser displaying, the script provides advanced features such as font rewriting, smoothing, scaling, stroke, shadow, special style elements, custom monospaced, etc. It can configure by "click Script Manager icon" or "use hotkeys" to call out the setup. The script is already compatible with major browsers and userscript managers, also commonly used Greasemonkey scripts and browser extensions.

* [Before using, please read the introduction in Wiki and the related precautions on this page.](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E5%AD%97%E4%BD%93%E6%B8%B2%E6%9F%93%EF%BC%88%E8%87%AA%E7%94%A8%E8%84%9A%E6%9C%AC%EF%BC%89)
* Please report script errors to [[Issues](https://github.com/F9y4ng/GreasyFork-Scripts/issues)], and report garbled and style issues to [[Discussions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/categories/%E9%97%AE%E7%AD%94%E4%B8%93%E5%8C%BA-question-answer)].
* Back up your local data promptly and don't use backup files from unknown sources!

## version 2023.12.12.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)】

```log
@ Fixed the infinite loop problem caused by script conflicts under notion.so.
@ Fix some known problems, optimize styles, and optimize code.
```

## Please note the following before using the new version:

- The new version of the script has a built-in **default font rendering style**, which is my local configuration and **may not be perfectly adapted to your computer**. Therefore, when using it for the first time, if the rendering effect does not reach the ideal state, **it is normal**. Please modify the rendering parameters through the script settings interface according to the configuration and settings of your local monitor to achieve the best display effect.
- When upgrading from an older version to the latest version, if there is a style error, you can try to correct it by resetting the data to use the latest rules. however, major version (data rebuild) updates are not recommended to restore using a local backup, and it is recommended to reconfigure the parameters and backup the data.

> Note: Under Win10/Win11, regardless of high or low aspect ratio, the best rendering results can be obtained as long as the system or browser applies 150% or more zoom ratio, which is determined by the default rendering mechanism of Windows.

## How to deal with script loading delay?

**Temporary solutions if script loading is delayed or styles are not loaded correctly:**

* For **Tampermonkey**: Enter the **Dashboard**, enter the **Settings** tab, scroll down to "**Experimental**", and change the injection mode to "**Instant**".
* For **Violentmonkey**: Enter the **Dashboard**, enter the **Settings** tab, find and check "**Sync Page Mode**" in **Advanced - General**.

## Feedback on issues

**Note 1:** Unknown compatibility errors may occur when using the `Beta, Dev, Canary, Nightly` and other test branches of the browser or script manager, and the script will not correct errors in the test version. Since there is a very small probability that the data will be initialized abnormally, **please back up your local data in time**.

**Note 2:** To report script errors or style issues, please provide **the URL**, **the browser and version**, **the script manager and version**, **error page screenshot**, and **operation process** or **error prompt** (if any) where the problem occurs when **using this script only**, etc., because the problem you encountered may not be reproduced locally.

* [Occasional updates: How to fix websites font style errors?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/42) (Chinese)
* [How to set custom English and Chinese fonts for the website?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/83) (Chinese)
* [How to correctly set font rendering parameters for different browsers?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/160) (Chinese)

> ### How to provide script error log?
>
> 1. Turn on the script debugging switch first:
>    - v2023.04.08.1 or above, add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL to enable debugging mode.
>    - To use the old version change the code from `const IS_OPEN_DEBUG = false` to `true` at about line 54 and save.
> 2. Press **F12** in your browser to open the console, refresh, operate until the problem is reproduced, right-click in the console margin and select **Save As...**.
> 3. Use **Bug report** and upload the saved log file to [Github ISSUES](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。
> 4. During daily use, do not turn on the script debugging switch to avoid slow script execution or page lagging.

## About adding custom fonts
If you need to add custom fonts into the font library, please follow [Help Instructions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/64). The Chinese fonts in the built-in font library [Download](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/46).

If you want to add new fonts, please add complete and accurate **font names in English and Chinese**, and **PostScript names** into the customized font library in the preset format.

The format is as follows: ```{"ch":"鸿蒙黑体", "en":"HarmonyOS Sans SC", "ps":"HarmonyOS_Sans_SC"}```

* When adding new fonts, fonts with font-weight of **Standard/Regular** are generally accepted. To adjust the font weight and boldness, please use the font stroke setting.
* "ps:" indicates the PostScript name, this is an optional attribute. In order to make the font take effect globally, please fill in the "ps:" attribute as much as possible.
* If the font does not have Chinese font name, please use the English font name or other language font name instead, and pay attention to uniqueness.

When a new font is installed, to make it **immediately effective**, be sure to **restart your browser** and rebuild the font list cache in **Advanced Core Setting** in the script menu.

- Note 1: Edit and save operations of custom font library will automatically trigger the rebuild of the global cache of the font list without additional manual processing.
- Note 2: If you only install fonts from the built-in font library, you need to manually rebuild the global cache of the font list in the **Advanced Core Setting** after restarting the browser.

## About font scaling

Font scaling (experimental feature) BETA version, off by default, please turn on the font scaling feature in the **Advanced Core Setting**.

- **KNOWN ISSUES I:** Due to the compatibility of Firefox (Gecko kernel), only the internal coordinate offset problem of the script has been fixed, but it will be insufficiently compatible with some website styles and functions, so please use it according to your needs and discretion. **Strongly recommended**: Use Firefox's own zoom function instead (`Ctrl++`, `Ctrl+-`).
- **KNOWN ISSUES II:** The fix for viewport units `vw, vh, vmin, vmax` has been completed, solving the problem of inaccurate viewport unit lengths after font scaling. This feature is **experimental** and off by default, it can be turned on in the **Advanced Core Setting**.
  1. In some sites, due to CORS policy, browsers may block access to external styles (console console will see corresponding errors, e.g. `No 'Access-Control-Allow-Origin' header is present on the requested resource.`), in this case, you can install and enable [Moesif Origin & CORS Changer](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) in the Extension Store.
  2. On some sites which CSP policies are applied, the browser may prevent the loading and parsing of internal styles (the console will see corresponding errors, such as: `Refused to apply inline style because it violates the following Content Security Policy directive: "default -src 'self'".`), in this case, you can install and enable [Disable-CSP](https://chromewebstore.google.com/detail/disable-csp/hgegihapiofjgmmgigbblnjaicgjhoko) in the extension store.
  3. This problem can also be solved using other disable CSP extensions. If you are concerned about security issues or have other concerns, please turn off this feature as follows:
     1. Uncheck the **fix VPU** option in the **Font Rendering Setting Interface**, or set the **Font Scaling** to `1.0` and save it as exclusive data.
     2. Turn off the **Fix Viewport** option individually in **Advanced Core Setting**, or simply turn off the **Font Scaling**. (Global Off)
- **UNKNOWN ISSUES:** If you encounter style anomalies, coordinate offsets, or other problems with other conditions, please send me [feedback](https://github.com/F9y4ng/GreasyFork-Scripts/issues).

---

# SearchEngine Assistants `Google & Baidu Switcher.user.js`
 　[[View source code](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)] 　[[Visit GreasyFork](https://greasyfork.org/scripts/12909)]  _（Issues aren't processed at GreasyFork）_

**Introduction:** "Elegant search engine Jump Assistant" facilitates users to jump between different search engines; supports custom commonly used search engines and search keyword highlighting effects; provides advanced functions such as removing search link redirection, blocking search results advertisements, etc.; it is compatible with well-known search engines such as Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Ecosia, You, Startpage, Brave, etc.

* [Read the instructions for using the script and the precautions on the page before use.](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/%E4%BC%98%E9%9B%85%E7%9A%84%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E8%B7%B3%E8%BD%AC%E5%8A%A9%E6%89%8B)
* If you don't need to be prompted for updates, you can turn it off in the "**parameter setting**".

## version 2023.12.02.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)】

```log
+ Update greasyfork.org new version @require address.
+ Added search results filtering function to reject spam and content farms.
@ Remove the invalid Fsoufsou, add Chinese search: wuzhuiso.com.
@ Reconstruct the de-redirect function and optimize the efficiency of redirect link parsing.
@ Reconstruct the ad removal function to optimize ad blocking efficiency and effectiveness.
@ Fix some known issues, optimize styles, and optimize code.
```

## Latest feature introduction
- Added a new high-efficiency keyword filtering function for search results to eliminate content farms and spam. `New`
- Added the function of removing search results and sidebar ads to optimize ad blocking efficiency.
- Added custom search engine selection function (including: Baidu, Google, Bing, Duckduckgo, Sogou, Wuzhuiso, Yandex, 360 Search, Toutiao Search, Baidu Developer, Ecosia, Yahoo, You, Startpage, Brave, Yep, Swisscows)
- Added search result link redirection function and optimized privacy parameter shielding function.
- Smarter update detection feature.

## Icon cache update
Visit [any search engine](https://www.baidu.com/s?wd=greasyfork&whoami=F9y4ng), add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL in the address bar to enable temporary debugging mode, then you can automatically update the icons of the search engine site; or wait for the icon cache to expire (15 days) and automatically update the icon cache.

## Important notes
The "**Automatic Update**" function is enabled by default. If not required, please turn off **Auto Update Detect** in the "**Parameter Setting**" of the script menu.

- **Feedback Issues**: To report script errors or style issues, please provide **the URL**, **the browser and version**, **the script manager and version**, **error page screenshot**, and **operation process** or **error prompt** (if any) where the problem occurs when **using this script only**, etc., because the problem you encountered may not be reproduced locally.

- Generally, new releases will be made on **Github**, and **GreasyFork**, **OpenUserJs** will be synchronized automatically. For those who have enabled automatic update detection, scripts will be updated automatically when visit the search engine.

---

# Autoclose Zhihu Login Prompt `Autoclose Zhihu Login.user.js`
 　[[View source code](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Autoclose%20Zhihu%20Login.user.js)] 　[[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)] 　[[Visit GreasyFork](https://greasyfork.org/scripts/463539)]  _（Issues aren't processed at GreasyFork）_

**Introduction:** "Autoclose Zhihu Login Prompt" is only used to close the automatically pop-up login prompt. It does nothing else and will not do anything else in the future.

## version 2023.11.04.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)】

```log
@ Fixed a bug that caused the script to fail to load in document-start in Safari.
```

## Important
### Browser version requirements:
```
Chrome >= 105; Edge >= 105; Safari >= 15.4; Firefox >= 103; Opera >= 91
```

### Notice:
* When using Firefox, you need to change `layout.css.has-selector.enabled` to `true` in `about:config`.
* For Blink kernel browser `105 > Version >= 101`, you can enter `chrome://flags/#enable-experimental-web-platform-features` and change it to `Enabled` for cross-version use.
