module.exports = {
  platform: 'gitlab',
  endpoint: "https://gitlab.company.com/api/v4",
  token: process.env.RENOVATE_TOKEN,
  autodiscoverFilter: ["/.*/"],
  autodiscover: true,
  extends: ["config:recommended"],
  abandonmentThreshold: "2 years",
  prHourlyLimit: 30,
  prConcurrentLimit: 30,
  timezone: "Europe/Paris",
  packageRules: [
    {
      matchHost: "gitlab.company.com",
      hostType: "gitlab",
      token: process.env.RENOVATE_TOKEN,
    },
  ],
};
