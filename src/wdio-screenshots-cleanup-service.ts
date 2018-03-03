import * as rimraf from 'rimraf'
import * as path from 'path'
import * as fs from 'fs'

interface Config {
  cleanScreenshotsFolder: {
    folder: string
    pattern?: string
  }
}

export default class WdioScreenshotsCleanupService {
  onPrepare(config: Config) {
    return new Promise((resolve, reject) => {
      const options = config.cleanScreenshotsFolder

      const screenshotsFolder = path.isAbsolute(options.folder)
        ? options.folder
        : path.join(process.cwd(), options.folder)

      fs.exists(screenshotsFolder, exists => {
        if (exists) {
          if (options.pattern) {
            const pattern = options.pattern
            const dir = path.join(screenshotsFolder, pattern)
            rimraf(dir, (err: Error) => {
              if (err) {
                console.error(`Failed to delete screenshots in folder: ${screenshotsFolder} using pattern ${pattern}`, err)
                return reject(err)
              }
            })
          } else {
            rimraf(screenshotsFolder, (err: Error) => {
              if (err) {
                console.error(`Failed to delete screenshots folder: ${screenshotsFolder}`, err)
                return reject(err)
              }
            })
          }

          return resolve()
        }
      })

      return resolve()
    })
  }
}
