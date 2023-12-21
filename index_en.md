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

# Font Rendering (Customized) `Font Rendering.user.js`
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
* If the font does not have Chinese fontname, please use the English fontname or other language fontname instead, and pay attention to uniqueness.

When a new font is installed, to make it **immediately effective**, be sure to **restart your browser** and rebuild the font list cache in **Advanced Core Setting**.

- Note 1: The **Edit Save** of a custom font list automatically triggers a rebuild of the font list global cache without additional manual processing.
- Note 2: If only fonts defined in the **built-in font list** are installed, you need to **manually** rebuild the font list global cache after restarting the browser.

## Notes on font scaling

Font scaling (experimental feature) Beta version, default off, please turn on font scaling in **Advanced Core Setting**.

- **KNOWN ISSUES I:** Due to the compatibility of Firefox (Gecko kernel), only the internal coordinate offset problem of the script has been fixed, but it will be insufficiently compatible with some website styles and functions, so please use it according to your needs and discretion.**Strongly recommended**: Use Firefox's own zoom function instead (`Ctrl++`, `Ctrl+-`).
- **KNOWN ISSUES II:** A fix for viewport units `vw, vh, vmin, vmax` has been completed, solving the problem of inaccurate viewport unit lengths after font scaling.This feature is **experimental** and is turned off by default, but can be turned on in the **Advanced Core Setting**.
  1. In some sites, due to CORS policy, browsers may block access to external styles (console console will see corresponding errors, e.g. `No 'Access-Control-Allow-Origin' header is present on the requested resource.`), in this case, you can install and enable [Moesif Origin & CORS Changer](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) in the Extension Store.
  2. On sites where CSP policies are applied, the browser may prevent the loading and parsing of internal styles (the console will see corresponding errors, such as: `Refused to apply inline style because it violates the following Content Security Policy directive: "default -src 'self'".`), at this time, you can install and enable [Disable-CSP](https://chromewebstore.google.com/detail/disable-csp/hgegihapiofjgmmgigbblnjaicgjhoko) in the extension store
  3. This problem can also be solved using other CSP extensions. If you are concerned about security issues or have other concerns, please turn off this feature as follows:
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
- Added a new high-efficiency keyword filtering function for search results to eliminate content farms and spam. `New!`
- Added the function of removing search results and sidebar ads to optimize ad blocking efficiency.
- Added custom search engine selection function (including: Baidu, Google, Bing, Duckduckgo, Sogou, Wuzhuiso, Yandex, 360 Search, Toutiao Search, Baidu Developer, Ecosia, Yahoo, You, Startpage, Brave, Yep, Swisscows)
- Added search result link redirection function and optimized privacy parameter shielding function.
- Smarter update detection feature.

## Icon cache update
Visit [any search engine](https://www.baidu.com/s?wd=greasyfork&whoami=F9y4ng), add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL in the address bar to enable temporary debugging mode. You can automatically update the icons of the search engine site; or wait for the icon cache to expire (15 days) and automatically update the icon cache.

## Important
The "**Automatic Update**" function is enabled by default. If not required, please turn off **Auto Update Detect** in the "**Parameter Setting**" of the script menu.

- **Feedback Issues**: To report script errors or style issues, please provide the **access URL** where the problem occurs when **only using this script**, the **browser version** used, and **script manager The version**, **error screenshot**, and **operation process**, **error prompt** are sent out. The problems you encounter may not be reproduced locally.

- Generally, new releases will be made on **Github**, and **GreasyFork**, **OpenUserJs** will be synchronized automatically. For those who have enabled automatic update detection, scripts will be updated automatically when visit the search engine.

---

# Automatically close Zhihu login prompt `Autoclose Zhihu Login.user.js`
 　[[View source code](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Autoclose%20Zhihu%20Login.user.js)] 　[[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)] 　[[Visit GreasyFork](https://greasyfork.org/scripts/463539)]  _（Issues aren't processed at GreasyFork）_

**Introduction:** Automatically closing the Zhihu login prompt is only used to close the automatically pop-up login prompt. It does nothing else and will not do anything else in the future.

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
