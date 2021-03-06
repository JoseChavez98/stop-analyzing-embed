const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  projectDirectoryUrl: process.env.GITHUB_WORKSPACE + "/app",
  installCommand: "npm install",
  buildCommand: "npm run build && rm -rf node_modules",
  trackingConfig: {
    "app/build": {
      "./build/**/*": true,
      "./build/**/*.map": false,
    },
  },
});
