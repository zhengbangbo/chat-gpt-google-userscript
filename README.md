# chat-gpt-userscript
[![](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat&labelColor=5D5D5D&color=000000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/scripts/456077)
[![GitHubStar](https://img.shields.io/github/stars/zhengbangbo/chat-gpt-userscript?style=social)](https://github.com/zhengbangbo/chat-gpt-userscript)
[![Issues](https://img.shields.io/github/issues/zhengbangbo/chat-gpt-userscript)](https://github.com/zhengbangbo/chat-gpt-userscript/issues)
[![PR](https://img.shields.io/github/issues-pr/zhengbangbo/chat-gpt-userscript)](https://github.com/zhengbangbo/chat-gpt-userscript/pulls)
[![license](https://img.shields.io/github/license/zhengbangbo/chat-gpt-userscript?color=blue)](https://github.com/zhengbangbo/chat-gpt-userscript/blob/main/LICENSE)

[中文版](https://github.com/zhengbangbo/chat-gpt-userscript/blob/main/README.zh-CN.md)

> If you have any BUG feedback or would like to submit a PR, please go to [GitHub](https://github.com/zhengbangbo/chat-gpt-userscript).

A userscript to display ChatGPT answer alongside
- Search Engine ([Google](https://www.google.com/search?q=chatgpt)/[Bing](https://www.bing.com/search?q=who+am+i)/[Baidu](https://www.baidu.com/s?wd=Where%20am%20I%20from%3F)/[DuckDuckGo](https://duckduckgo.com/?q=Where+am+I+going%3F))
- Translator ([DeepL](https://www.deepl.com/translator#zh/en/%E5%9C%A8%E5%B9%B3%E5%9D%A6%E7%9A%84%E9%81%93%E8%B7%AF%E4%B8%8A%E6%9B%B2%E6%8A%98%E5%89%8D%E8%A1%8C))

![screenshot.jpg](https://github.com/zhengbangbo/chat-gpt-userscript/raw/main/img/screenshot.jpg)
![screenshot2.png](https://github.com/zhengbangbo/chat-gpt-userscript/raw/main/img/screenshot2.png)

## Installation

1. Read [this help document](https://greasyfork.org/help/installing-user-scripts) to install the user script manager.

2. Go to [Greasy Fork](https://greasyfork.org/scripts/456077) install the userscript.

## Compatibility
> If you have the ability to solve compatibility issues, PR is welcome.

|                       | **Chrome** | **Microsoft Edge** | **Firefox** | **Safari** |
|-----------------------|:----------:|:------------------:|:-----------:|:----------:|
| **Tampermonkey**      |     OK     |         OK         |      OK     |     NG     |
| **Violentmonkey(*)**  |     OK     |         OK         |      OK     |      -     |
| **Greasemonkey**      |      -     |          -         |      NG     |      -     |
| **Userscripts**       |      -     |          -         |      -      |     NG     |
| **ScriptCat(脚本猫)**  |     NG     |         NG         |      NG     |      -     |

*: Violentmonkey unable to print verbatim because it can't support stream responseType[^vm].

[^vm]: https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest

## Contribution
This project is now built using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey). Questions related to the development process are answered in [the documentation of the project](https://github.com/lisonge/vite-plugin-monkey#some-note).

## Credits

- This project is inspired by [wong2/chat-gpt-google-extension](https://github.com/wong2/chat-gpt-google-extension).
- Thanks to [@duck123ducker](https://github.com/duck123ducker) for contribute the support of deepl translator([#9](https://github.com/zhengbangbo/chat-gpt-userscript/pull/9)).
- Thanks to [bigonion](https://greasyfork.org/users/827969), the receiving stream type data part of the project draws on [chatGPT tools Plus ++](https://greasyfork.org/scripts/456131/code?version=1127217).
