# 38102


## Setup

- Self-hosted Gitlab instance
- Self-Hosted Renovate Bot

## Current behavior
With the endpoint beeing configured in a config.js, it seem that Renovate preset fetching dosent use the provided URL but use the default gitlab URL.

```
module.exports = {
  platform: 'gitlab',
  endpoint: "https://gitlab.company.com/api/v4",

```

By looking at the logs it seem that the configured endpoint is correctly read.

<details>
```
DEBUG: Combined config
       "config": {
         "platform": "gitlab",
         "endpoint": "https://gitlab.company.com/api/v4",
         "token": "***********",
         "hostRules": [
           {
             "matchHost": "gitlab.company.com",
             "hostType": "gitlab",
             "token": "***********"
           }
         ],
...
       }
```
</details>

But it seem that when trying to fetch the preset it use antoher url

<details>
```
DEBUG: Repository config (repository=company/development/devops/containers-images/cicd/layer-0)
       "fileName": "renovate.json",
       "config": {"extends": ["gitlab>company/development/devops/tooling/renovate-configuration"]}
DEBUG: Repo is onboarded (repository=company/development/devops/containers-images/cicd/layer-0)
DEBUG: migrateAndValidate() (repository=company/development/devops/containers-images/cicd/layer-0)
DEBUG: No config migration necessary (repository=development/devops/containers-images/cicd/layer-0)
DEBUG: hostRules: no authentication for gitlab.com (repository=development/devops/containers-images/cicd/layer-0)
DEBUG: Using queue: host=gitlab.com, concurrency=16 (repository=development/devops/containers-images/cicd/layer-0)
DEBUG: GET https://gitlab.com/api/v4/projects/company%2Fdevelopment%2Fdevops%2Ftooling%2Frenovate-configuration = (code=ERR_NON_2XX_3XX_RESPONSE, statusCode=404 retryCount=0, duration=196) (repository=company/development/devops/containers-images/cicd/layer-0)
DEBUG: GitLab API 404 (repository=company/development/devops/containers-images/cicd/layer-0)
```

</details>
## Expected behavior

Renovate should use the endpoint specified in the config to fetch presets.

## Link to the Renovate issue or Discussion
https://github.com/renovatebot/renovate/discussions/38102
