module.exports = {
  apps: [
    {
      name: "index",
      script: "./index.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      key: "~/.ssh/fAmes.pem",
      host: "43.201.83.83",
      ref: "origin/main",
      repo: "https://github.com/wavescats/AWS-Deploy.git",
    },
  },
};
