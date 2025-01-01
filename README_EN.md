# [**GreasyFork-Scripts**](https://f9y4ng.github.io/GreasyFork-Scripts/index_en.html) - F9y4ng - [![WIKI](https://img.shields.io/badge/WIKI-GREASYFORK%20SCRIPTS-brightgreen.svg?logo=github "wiki")](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Home_EN)

**页面语言** (**Language**) |  [中文 (Chinese)](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/README.md) | 英语 (English)

[![LICENSE](https://img.shields.io/badge/License-GPL--3.0--only-blue.svg?style=for-the-badge&logo=github "LICENSE")](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/LICENSE) [![LAST COMMIT](https://img.shields.io/github/last-commit/F9y4ng/GreasyFork-Scripts?color=blue&logo=github&style=for-the-badge "LAST COMMIT")](https://github.com/F9y4ng/GreasyFork-Scripts/commits/master) [![ISSUES](https://img.shields.io/github/issues/F9y4ng/GreasyFork-Scripts?logo=github&style=for-the-badge "ISSUES")](https://github.com/F9y4ng/GreasyFork-Scripts/issues) [![STARS](https://img.shields.io/github/stars/F9y4ng/GreasyFork-Scripts?color=brightgreen&logo=github&style=for-the-badge "STARS")](https://github.com/F9y4ng/GreasyFork-Scripts/stargazers)

- Please install the **script-manager** extension first (e.g. Tampermonkey, Violentmonkey, Greasemonkey) before installing the script.
- **Tampermonkey/Violentmonkey** is recommended for **Chrome / Firefox**, and **Tampermonkey** is recommended for **Safari.**
- Using a script-manager such as **Adguard Desktop** or **Userscripts**, you can use **keyboard shortcuts** to call up the scripts menu.

---

### Join Telegram Channel (Channel Name: GreasyFork-Scripts)
* Channel: https://t.me/+1e8Ebdy-mtdhY2Rl
* If you like this project, please ⭐Start it above, Thanks for your support.
* This channel for discussing userscripts for desktop browsers.

---

## Font Rendering (Customized) [`Font Rendering.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Font%20Rendering.user.js)

**Introduction:** Enhance browser’s font rendering without installing MacType. This script offers a high-quality, customizable experience with default ‘Microsoft YaHei’ font. It provides advanced features like font rewriting, smoothing, scaling, stroking, shadowing, and filtering of special style elements. It supports global and personalized rendering, compatible with most mainstream browsers, script managers, and common userscripts & browser extensions. Configure parameters via the script manager icon or shortcuts.

* [Before using, please read the introduction in Wiki and the related precautions on this page.](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Font-Rendering-(Customized))
* Please report script errors to [[Issues](https://github.com/F9y4ng/GreasyFork-Scripts/issues)], and report garbled and style issues to [[Discussions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/categories/%E9%97%AE%E7%AD%94%E4%B8%93%E5%8C%BA-question-answer)].
* Back up your local data promptly and don't use backup files from unknown sources!

### version 2025.01.01.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Font%20Rendering.user.js)】

```log
# ✨ Wishing you a happy New Year, good health, peace and all the best. 🎉
+ Updated script copyright date to the 5th year.
@ Enhanced script styles insertion for CSP compatibility.
@ Fixed the style insertion issue of font scaling.
@ Fixed some known issues, optimized code & style.
```

### Please note the following before using the new version:

- The new version of the script has a **built-in default font rendering style**, which is my local configuration and **may not work perfectly on your computer**. Therefore, **it is normal** for the first time to use it if the rendering effect does not reach the desired state. According to the configuration and settings of your own monitor, correct the relevant parameters through the script setting interface to achieve the best display effect.
- When upgrading from an older version to the latest version, if there are some style issues, you can try to correct it by resetting the data to use the latest rules. however, It is not recommended that you use backup restore for major version (data rebuild) updates, and it is recommended to reconfigure the parameters, save them, and back up the new data again.
- **Note:** Under Win10/Win11, regardless of high or low resolution, as long as the system or browser applies a zoom ratio of more than 150%, the best rendering effect can be obtained, which is determined by the default rendering mechanism of Windows.

<details>
<summary>Click to view - How to deal with script delayed loading?</summary>

**Temporary solutions for script loading delays, or styles not loading correctly:**
* For **Tampermonkey v5.2 and later** (Manifest V3): Go to the **Dashboard**, enter the **Settings** tab, pull down to "**Security**", and change "**Content Script API:**" to `UserScripts API Dynamic`.

* For **Tampermonkey v5.1.1 and older**: Go to the **Dashboard**, enter the **Settings** tab, scroll down to "**Experimental**", and change **the injection mode** to "**Instant**".

* For **Violentmonkey**: Go to the **Dashboard**, enter the **Settings** tab, find and check "**Synchronous page mode**" in **Advanced - General**.

</details>

### Feedback on issues

**Note 1:** Unknown compatibility errors may occur when using the `Beta, Dev, Canary, Nightly` and other test branches of the browser or script manager, and the script will not correct errors of the test version. Since there is a rare chance that the data will be initialized abnormally, **please back up your local data in time**.

**Note 2:** To report script errors or style issues, please provide **the URL**, **the browser and version**, **the script manager and version**, **error page screenshot**, and **operation process** or **error prompt** (if any) where the problem occurs when **using this script only**, etc., because the problem you encountered may not be reproduced locally in me.

* [Occasional updates: How to fix websites font style errors?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/42) (Chinese)
* [How to set custom English and Chinese fonts for the website?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/83) (Chinese)
* [How to correctly set font rendering parameters for different browsers?](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/160) (Chinese)

<details>
<summary>Click to view - How to provide script error log?</summary>

**Get and upload script error logs:**

1. Turn on the script debugging switch first:
   - v2023.04.08.1 or later, add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL to enable debugging mode.
   - To use the old version change the code from `const IS_OPEN_DEBUG = false` to `true` at about line 54 and save.
2. Press **F12** in your browser to open the console, refresh, operate until the problem is reproduced, right-click in the console margin and select **Save As...**.
3. Use **Bug report** and upload the saved log file to [Github ISSUES](https://github.com/F9y4ng/GreasyFork-Scripts/issues)。
4. During daily use, do not turn on the script debugging switch to avoid slow script execution or page lagging.

</details>

### Adding custom fonts

If you need to add custom fonts into the font library, please follow the [Help Instructions](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/64). The Chinese fonts in the built-in font library [Download](https://github.com/F9y4ng/GreasyFork-Scripts/discussions/46).

If you want to add a new font, please add complete and accurate **font names in English and Chinese**, and **PostScript names** into the customized font library in the preset format.

The format is as follows: ```{"ch":"鸿蒙黑体", "en":"HarmonyOS Sans SC", "ps":"HarmonyOS_Sans_SC"}```

<details>
<summary>Click to view - How to add new fonts to the custom font library?</summary>

**Notes on adding custom fonts:**

* When adding new fonts, fonts with font-weight of **Standard/Regular** are generally accepted. please use font stroke settings to adjust the font weight and bold.
* "ps:" indicates the PostScript name, which is an optional attribute. To ensure that the font takes effect globally, please fill in the "ps:" attribute as much as possible.
* If the font does not have Chinese font name, please use the English font name or other language font name instead, and pay attention to the uniqueness of the name.

When a new font is installed, be sure to **restart the browser** first and **rebuild the font-list cache** in the **advanced core settings** for it to take effect immediately.

- Note 1: Editing and saving a custom font library will automatically trigger a rebuild of the font list's global cache, eliminating the need for additional manual processing.
- Note 2: If you only install fonts defined by the built-in font library, you need to manually rebuild the global cache of the font list in the **Advanced Core Setting** after restarting the browser.

</details>

### Font scaling (experimental)

Font scaling (experimental), **OFF by default**, turn on font scaling in the **Advanced core settings**.

- **KNOWN ISSUES I:** Due to the compatibility of Firefox (Gecko version < 126) and Greasemonkey/Userscripts extentions, only the internal coordinate offset problem of the script has been fixed, but it will be insufficiently compatible with some website styles and functions, so please use it according to your needs and discretion. **Strongly recommended**: Use Firefox's self-scaling feature (`Ctrl++`, `Ctrl+-`) instead of this experimental feature.

- **KNOWN ISSUES II:** The fix for viewport units `vw, vh, vmin, vmax` has been completed, solving the problem of inaccurate viewport unit lengths after font scaling. This feature is **experimental** and **OFF by default**, it can be turned on in the **Advanced Core Setting**.

    <details>
    <summary>Click to view the solution to style anomalies after turning on viewport correction.</summary>

    **The browser CORS/CSP policy refuses the loading of third-party styles:**

    1. In some sites, due to CORS policy, browsers may block access to external styles (console console will see corresponding errors, e.g. `No 'Access-Control-Allow-Origin' header is present on the requested resource.`), in this case, you can install and enable [Moesif Origin & CORS Changer](https://chromewebstore.google.com/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) in the Extension Store.
    2. In some sites where CSP policies are applied, the browser may prevent the loading and parsing of internal styles (the console will see corresponding errors, such as: `Refused to apply inline style because it violates the following Content Security Policy directive: "default -src 'self'".`), in this case, you can install and enable [Allow CSP: Content-Security-Policy](https://chromewebstore.google.com/detail/allow-csp-content-securit/hnojoemndpdjofcdaonbefcfecpjfflh) in the extension store.
    3. This issue can also be resolved by using other CSP extensions, but if you are concerned about security issues or have other concerns, please turn off the feature as follows:
       1. Uncheck the **fix VPU** option in the **Font Rendering Setting** Interface, or set the **Font Scaling** to `1.0` and save it as exclusive data.
       2. Turn off the **Fix Viewport** feature separately, or simply turn off the **Font Scaling** feature directly in the **Advanced Core Setting**. (Global Off)
    </details>

- **UNKNOWN SITUATION:** If you encounter style anomalies, coordinate offsets, or other related problems in other situations, please send me [feedback](https://github.com/F9y4ng/GreasyFork-Scripts/issues).

---

## Search Engine Assistants [`Google & Baidu Switcher.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Google%20%26%20Baidu%20Switcher.user.js)

**Introduction:** "Elegant search engine assistant" allows switching between engines; supports custom engines, keyword highlighting; offers redirect removal, ad blocking, keyword filtering, and auto-updates; compatible with Baidu, Google, Bing, Duckduckgo, Yandex, Sogou, Qwant, Ecosia, You, Startpage, Brave, Yahoo, Yep, Swisscows, searXNG and more.

* [Read the instructions for using the script and the precautions on the page before use.](https://github.com/F9y4ng/GreasyFork-Scripts/wiki/Search-Engine-Assistant)
* If you don't need to be prompted for updates, you can turn it off in the "**Advanced Feature Settings**".

### version 2025.01.01.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Google%20%26%20Baidu%20Switcher.user.js)】

```log
# ✨ Wishing you a happy New Year, good health, peace and all the best. 🎉
+ Updated script copyright date to the 10th year.
@ Optimized cn.Bing search results ads removal.
@ Fixed some known issues, optimized code & style.
```

### The latest feature introduction
- Added a new high-efficiency keyword filtering function for search results to eliminate content farms and spam. `New`
- Added the function of removing search results and sidebar ads to optimize ad blocking efficiency of ad blocking.
- Added custom search engine selection function (including: Baidu, Google, Bing, Duckduckgo, Sogou, Qwant, Yandex, 360 Search, Toutiao Search, Baidu Developer, Ecosia, Yahoo, You, Startpage, Brave, Yep, Swisscows, SearXNG)
- Added the anti-redirection function of search result links and optimized the masking function of privacy parameters.
- Smarter update detection feature.

### Icon cache update
Visit [any search engine](https://www.google.com/search?q=greasyfork&whoami=F9y4ng), add `?whoami=F9y4ng` or `&whoami=F9y4ng` to the URL in the address bar to enable temporary debugging mode, then you can automatically update the icons of the search engine site; or wait for the icon cache to expire (15 days) and then automatically renew the icon cache.

### Important notes
The "**Automatic Update**" function is enabled by default. If you do not need it,, please turn off **Auto Update Detect** in the "**Advanced Feature Settings**" of the script menu.

- **Feedback Issues**: Feedback script errors or style issues, please provide **the access URL**, **the browser and version**, **the script manager and version**, **error screenshot**, and **operation process** or **error prompt** (if any) where the problem occurs when **using this script only**, etc., because the problem you encountered may not be reproduced locally in me.

- Generally, the new version will be released on **Github**, and **GreasyFork** and **OpenUserJs** will be automatically synchronized. For users who have turned on auto-update detection, scripts are automatically updated when they visit search engines.

---

## Autoclose Zhihu Login Prompt [`Autoclose Zhihu Login.user.js`](https://github.com/F9y4ng/GreasyFork-Scripts/blob/master/Autoclose%20Zhihu%20Login.user.js)

**Introduction:** "Autoclose Zhihu Login Prompt" is only used to close the automatically pop-up login prompt. It does nothing else and will not do anything else in the future.

### version 2025.01.01.1 - Update log: 【🔥[Install this script](https://github.com/F9y4ng/GreasyFork-Scripts/raw/master/Autoclose%20Zhihu%20Login.user.js)】

```log
+ Updated script copyright date.
@ Optimized and updated feature code.
```

### Important
#### Browser version requirements:
```
Chrome >= 105; Edge >= 105; Safari >= 15.4; Firefox >= 103; Opera >= 91
```

####  Notice:
* When using Firefox, you need to change `layout.css.has-selector.enabled` to `true` in `about:config`.
* For Blink kernel browser `105 > Version >= 101`, you can enter `chrome://flags/#enable-experimental-web-platform-features` and change it to `Enabled` for cross-version use.
