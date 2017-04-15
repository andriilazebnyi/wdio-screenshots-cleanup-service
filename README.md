WDIO Screenshots Cleanup Service
============================

> Wdio service to cleanup screenshots folder before tests run.

Path to screenshots folder is being taken form Wdio config `screenshotPath` property. 

## Installation

The easiest way is to keep `wdio-screenshots-cleanup-service` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-screenshots-cleanup-service": "~0.0.3"
  }
}
```

You can simple do it by:

```bash
npm install wdio-screenshots-cleanup-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Usage

```js
// wdio.conf.js
var WdioScreenshotsCleanupService = require('wdio-screenshots-cleanup-service').WdioScreenshotsCleanupService
var screenshotsCleanupService = new WdioScreenshotsCleanupService()

export.config = {
  // ...
  services: [screenshotsCleanupService],
  // ...
};
```

## Development

All commands can be found in the package.json. The most important are:

Build package:

```sh
$ npm build
```

----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
