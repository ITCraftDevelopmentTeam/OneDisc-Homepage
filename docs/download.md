# 发行版下载

> 下载功能维护中

| 最新稳定版  | 最新测试版  |
|-------------|-------------|
| <span id="stable-version">Loading version...</span> | <span id="beta-version">Loading version...</span> |

## 稳定版

|            | x64                            | x86                          | arm64                          |
|------------|:------------------------------:|:----------------------------:|:------------------------------:|
| Linux      | [OneDisc-Linux-x64.zip][1]     | [OneDisc-Linux-x86.zip][2]   | [OneDisc-Linux-arm64.zip][3]   |
| Windows    | [OneDisc-Windows-x64.zip][4]   | [OneDisc-Windows-x86.zip][5] | [OneDisc-Windows-arm64.zip][6] |
| macOS      | [OneDisc-Darwin-x64.zip][7]    | [OneDisc-Darwin-x86.zip][8]  | [OneDisc-Darwin-arm64.zip][9]  |


[1]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Linux-x64.zip
[2]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Linux-x86.zip
[3]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Linux-arm64.zip
[4]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Windows-x64.zip
[5]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Windows-x86.zip
[6]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Windows-arm64.zip
[7]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Darwin-x64.zip
[8]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Darwin-x86.zip
[9]: https://github.com/This-is-XiaoDeng/OneDisc-Build/raw/main/stable/OneDisc-Darwin-arm64.zip

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

