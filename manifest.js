import packageJson from "./package.json";

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  action: {
    default_popup: "index.html",
  },
  content_scripts: [
    {
      js: ["src/index/index.js"],
      css: ["assets/style.css"],
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
    },
  ],
};

export default manifest;
