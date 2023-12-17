
async function fetchVersion() {
  const beta = await (await fetch("https://itcdt.top/OneDisc/version.json")).json();
  document.getElementById("beta-version").innerText = beta.version;
  
  const response = await fetch("https://itcdt.top/OneDisc/artifacts.json");
  const data = await response.json();
  let html = "<ul>";
  data.artifacts.forEach(function(item, index, array) {
    html += `<li><a href="${item.url}">${item.name}</a></li>`;
  })
  html += "</ul>"
  document.getElementById("beta-artifacts").innerText = html;

  const stable = await (await fetch("https://api.github.com/repos/ITCraftDevelopmentTeam/OneDisc/releases/latest")).json();
  document.getElementById("stable-version").innerText = `${stable.tag_name.slice(1)}.0`;

  
}


fetchVersion();

