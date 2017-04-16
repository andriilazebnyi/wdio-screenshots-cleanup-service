import * as rimraf from 'rimraf'
import * as path from 'path'
import * as fs from 'fs'

type Config = {
  screenshotPath: string
}

export default class WdioScreenshotsCleanupService {
  onPrepare(config: Config) {
    return new Promise(resolve => {
      const screenshotsFolder = path.isAbsolute(config.screenshotPath)
        ? config.screenshotPath
        : path.join(process.cwd(), config.screenshotPath)

      fs.exists(screenshotsFolder, exists => {
        if (exists) {
          rimraf(screenshotsFolder, (err: Error) => {
            if (err)
              console.error(`Failed to delete screenshots folder: ${screenshotsFolder}`, err)
          })

          return resolve()
        }
      })

      return resolve()
    })
  }
}
