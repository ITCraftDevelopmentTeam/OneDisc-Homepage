---
sidebar: auto
---

# 下载

| 最新测试版 | 最新稳定版 |
|------------|------------|
| {{ betaVersion }} | {{ stableVersion }} |

## 稳定版

> 维护中

## 测试版

<div v-html="betaArtifacts"></div>

<script setup>
import { ref, onMounted } from 'vue';

const betaVersion = ref('');
const stableVersion = ref('');
const betaArtifacts = ref('');

onMounted(async () => {
  betaVersion.value = await fetchBetaVersion();
  stableVersion.value = await fetchStableVersion();
  betaArtifacts.value = await fetchBetaArtifacts();
});


async function fetchBetaVersion() {
  const beta = await (await fetch("https://itcdt.top/OneDisc/version.json")).json();
  return beta.version;
}

async function fetchBetaArtifacts() {
  
  const response = await fetch("https://itcdt.top/OneDisc/artifacts.json");
  const data = await response.json();
  let html = "<ul>";
  data.artifacts.forEach(function(item, index, array) {
    html += `<li><a href="https://github.com/ITCraftDevelopmentTeam/OneDisc/actions/runs/${item.workflow_run.id}/artifacts/${item.id}">${item.name}</a></li>`;
  })
  html += "</ul>";
  return html;
}

async function fetchStableVersion() {
  const stable = await (await fetch("https://api.github.com/repos/ITCraftDevelopmentTeam/OneDisc/releases/latest")).json();
  if (stable.tag_name == undefined) {
    return "获取失败";
  }
  return `${stable.tag_name.slice(1)}.0`;
}

</script>

