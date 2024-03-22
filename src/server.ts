import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})
import express from 'express'
import payload from 'payload'

import { handler as ssrHandler } from '../dist/server/entry.mjs'
import { seed } from './payload/seed'

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

  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit()
  }

  const astroApp = express()
  // Change this based on your astro.config.mjs, `base` option.
  // They should match. The default value is "/".
  const base = '/'
  astroApp.use(base, express.static('dist/client/'))
  astroApp.use(ssrHandler)

  payload.logger.info('Starting Astro')

  astroApp.listen(PORT, async () => {
    payload.logger.info(`Astro App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
  })
}

start()
