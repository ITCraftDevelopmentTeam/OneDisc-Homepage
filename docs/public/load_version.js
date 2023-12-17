
async function fetchVersion() {
  const response = await fetch("https://itcdt.top/OneDisc/version.json");
  const data = await response.json();
  document.getElementById("beta-version").innerText = data.version;
  
  const response = await fetch("https://itcdt.top/OneDisc/artifacts.json");
  const data = await response.json();
  let html = "<ol>";
  data.artifacts.forEach(function(item, index, array) {
    html += `<li><a href="${item.url}">${item.name}</li>`;
  })
  html += "</ol>"
  document.getElementById("beta-artifacts").innerText = html;

  const response = await fetch("https://api.github.com/repos/ITCraftDevelopmentTeam/OneDisc/releases/latest");
  const data = await response.json();
  document.getElementById("stable-version").innerText = data.tag_name;

  
}


fetchVersion();

