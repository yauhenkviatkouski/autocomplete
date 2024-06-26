import packageJson from './package.json';

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  permissions: ['storage'],
  action: {
    // default_popup: 'index.html#popup',
  },
  content_scripts: [
    {
      js: [`${packageJson.name}.index.js`],
      matches: [
        'https://chatgpt.com/*',
        'https://copilot.microsoft.com/*',
        'https://gemini.google.com/*',
        'https://*.chat.lab.epam.com/*',
      ],
    },
  ],
};

export default manifest;
