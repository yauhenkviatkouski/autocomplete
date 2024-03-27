import packageJson from "./package.json";

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  permissions: ["storage"],
  action: {
    default_popup: "index.html#popup",
  },
  content_scripts: [
    {
      js: [`${packageJson.name}.index.js`],
      css: [`${packageJson.name}.index.css`],
      matches: ["https://*/*"],
    },
  ],
};

export default manifest;
