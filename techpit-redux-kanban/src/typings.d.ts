// https://parceljs.org/env.html
declare const process: Process

interface Process {
  env: {
    NODE_ENV: 'development' | 'production'
    API_ENDPOINT?: string
  }
}
