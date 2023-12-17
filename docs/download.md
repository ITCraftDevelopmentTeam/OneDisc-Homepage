# 发行版下载


| 最新稳定版  | 最新测试版  |
|-------------|-------------|
| <span id="stable-version">Loading version...</span> | <span id="beta-version">Loading version...</span> |

## 稳定版


## 测试版

<div id="beta-artifacts">获取中 ...</div> 


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

