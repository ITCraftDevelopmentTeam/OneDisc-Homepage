# 发行版下载

| 最新稳定版  | 最新测试版  |
|-------------|-------------|
| <span id="stable-version">Loading version...</span> | <span id="beta-version">Loading version...</span> |

<!--
## 稳定版

|            | x86_64                         | i386                         | arm64                          |
|------------|:------------------------------:|:----------------------------:|:------------------------------:|
| Linux      | [OneDisc-linux-x86_64.zip][1]  | [OneDisc-linux-i386.zip][2]  | [OneDisc-linux-arm64.zip][3]   |
| Windows    | [OneDisc-windows-x64.zip][4]   | [OneDisc-windows-x32.zip][5] | [OneDisc-windows-arm64.zip][6] |
| macOS      | [OneDisc-darwin-x86_64.zip][7] | [OneDisc-darwin-i386.zip][8] | [OneDisc-darwin-arm64.zip][9]  |


[1]: /downloads/OneDisc-linux-x86_64.zip
[2]: /downloads/OneDisc-linux-i386.zip
[3]: /downloads/OneDisc-linux-arm64.zip
[4]: /downloads/OneDisc-windows-x64.zip
[5]: /downloads/OneDisc-windows-x32.zip
[6]: /downloads/OneDisc-windows-arm64.zip
[7]: /downloads/OneDisc-darwin-x86_64.zip
[8]: /downloads/OneDisc-darwin-i386.zip
[9]: /downloads/OneDisc-darwin-arm64.zip

-->

## 测试版

|          | x86_64                             |
|----------|:----------------------------------:|
| Linux    | [OneDisc-linux-x86_64-dev.zip][10] |

[10]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/beta/OneDisc-linux-x86_64-dev.zip


<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = '/load_version.js';
    script.async = true;
    document.body.appendChild(script);
  }
}
</script>

