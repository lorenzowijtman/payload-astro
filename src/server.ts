import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})
import express, { Router } from 'express'
import payload from 'payload'

import { handler as ssrHandler } from '../dist/server/entry.mjs'

const app = express()
const PORT = process.env.PORT || 3000

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  const astroApp = Router()
  // Change this based on your astro.config.mjs, `base` option.
  // They should match. The default value is "/".
  const base = '/'
  astroApp.use(base, express.static('dist/client/'))
  astroApp.use(ssrHandler)

  payload.logger.info('Starting Astro')

  app.use(/^(?!\/admin).*$/, astroApp)

  app.listen(PORT, async () => {
    payload.logger.info(`App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
  })

  // const astroApp = express()
  // // Change this based on your astro.config.mjs, `base` option.
  // // They should match. The default value is "/".
  // const base = '/'
  // astroApp.use(base, express.static('dist/client/'))
  // astroApp.use(ssrHandler)

  // payload.logger.info('Starting Astro')

  // // app.use(/^(?!\/admin).*$/, astroApp)

  // astroApp.listen(PORT, async () => {
  //   payload.logger.info(`Astro App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
  // })
}

start()
