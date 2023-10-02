const API_URL = "https://api.github.com/repos/This-is-XiaoDeng/OneDisc-Build/contents/version.json";

async function fetchVersion() {
  const response = await fetch(API_URL);
  const data = await response.json();
  const contentDecoded = atob(data.content);  // decode from Base64
  const jsonData = JSON.parse(contentDecoded);

  document.getElementById("beta-version").innerText = jsonData.beta;
  document.getElementById("stable-version").innerText = jsonData.stable;
}


fetchVersion();

